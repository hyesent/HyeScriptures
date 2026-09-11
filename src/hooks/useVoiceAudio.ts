// src/hooks/useVoiceAudio.ts

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  voice,
  getAudioSettings,
  saveAudioSettings,
  speedOptions,
  formatFullVerseForSpeech,
  getVoiceForTranslation,
} from '../lib/voice'
import type { AudioSettings, VoiceSpeed, Voice } from '../lib/voice'

const API_BASE = 'https://hyezen.onrender.com'

export const useVoiceAudio = () => {
  const [settings, setSettings] = useState<AudioSettings>(getAudioSettings())
  const [voices, setVoices] = useState<Voice[]>([])
  const [loadingVoices, setLoadingVoices] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [currentReference, setCurrentReference] = useState<string | null>(null)
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number>(-1)
  const [totalVerses, setTotalVerses] = useState<number>(0)
  const [usingFallback, setUsingFallback] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentQueueRef = useRef<string[]>([])
  const queueIndexRef = useRef<number>(0)
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null)
  const timeUpdateRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices()
    }
    return () => {
      if (timeUpdateRef.current) clearInterval(timeUpdateRef.current)
    }
  }, [])

  // Track audio time for HTMLAudioElement
  const startTimeTracking = () => {
    if (timeUpdateRef.current) clearInterval(timeUpdateRef.current)
    timeUpdateRef.current = setInterval(() => {
      if (audioRef.current && !usingFallback) {
        setCurrentTime(audioRef.current.currentTime)
        if (audioRef.current.duration && !isNaN(audioRef.current.duration)) {
          setDuration(audioRef.current.duration)
        }
      }
    }, 250)
  }

  const stopTimeTracking = () => {
    if (timeUpdateRef.current) {
      clearInterval(timeUpdateRef.current)
      timeUpdateRef.current = null
    }
  }

  const loadVoices = async (type: 'realistic' | 'standard' = 'realistic') => {
    setLoadingVoices(true)
    try { const result = await voice.getVoices(type); setVoices(result) } catch {}
    finally { setLoadingVoices(false) }
  }

  const updateSettings = useCallback((newSettings: Partial<AudioSettings>) => {
    const updated = { ...settings, ...newSettings }
    setSettings(updated); saveAudioSettings(updated)
  }, [settings])

  const updateSpeed = useCallback((speed: VoiceSpeed) => updateSettings({ speed }), [updateSettings])
  const updateVoice = useCallback((voiceId: string) => updateSettings({ voiceId }), [updateSettings])
  const updateAutoScroll = useCallback((autoScroll: boolean) => updateSettings({ autoScroll }), [updateSettings])
  const updateAutoPlay = useCallback((autoPlay: boolean) => updateSettings({ autoPlay }), [updateSettings])

  const useWebSpeechFallback = (
    text: string, gender: 'male' | 'female', lang: string = 'en-US',
    onStart?: () => void, onEnd?: () => void, onError?: (error: any) => void
  ): boolean => {
    try {
      const utterance = voice.speakWithWebSpeech(text, settings.speed, gender, lang, onStart, onEnd, onError)
      if (utterance) {
        currentUtteranceRef.current = utterance
        setUsingFallback(true)
        setCurrentTime(0)
        setDuration(0)
        return true
      }
    } catch {}
    if (onError) onError(new Error('All voice options failed'))
    return false
  }

  const playWithFallback = useCallback(async (
    text: string, reference: string, translationId: string,
    gender: 'male' | 'female' = 'male',
    onStart?: () => void, onEnd?: () => void, onError?: (error: any) => void
  ): Promise<boolean> => {
    const voiceConfig = getVoiceForTranslation(translationId)
    const langCode = voiceConfig.language === 'French' ? 'fr-FR'
      : voiceConfig.language === 'Greek' ? 'el-GR'
      : voiceConfig.language === 'Spanish' ? 'es-ES'
      : 'en-US'

    if (voiceConfig.useWebSpeech) {
      return useWebSpeechFallback(text, gender, langCode, onStart, onEnd, onError)
    }

    const voiceId = voiceConfig.voiceId || settings.voiceId
    if (voiceId) {
      try {
        const result = await voice.synthesize(text, voiceId, settings.speed)
        if (result && result.audio_url) {
          setUsingFallback(false)
          const audioUrl = result.audio_url.startsWith('http') ? result.audio_url : `${API_BASE}${result.audio_url}`
          const audio = new Audio(audioUrl)
          audioRef.current = audio

          return new Promise((resolve) => {
            audio.onloadedmetadata = () => {
              if (audio.duration && !isNaN(audio.duration)) {
                setDuration(audio.duration)
              }
            }
            audio.onended = () => {
              stopTimeTracking()
              if (onEnd) onEnd()
              resolve(true)
            }
            audio.onerror = () => {
              stopTimeTracking()
              setUsingFallback(true)
              resolve(useWebSpeechFallback(text, gender, langCode, onStart, onEnd, onError))
            }
            audio.onplay = () => {
              startTimeTracking()
              if (onStart) onStart()
            }
            audio.play().catch(() => {
              setUsingFallback(true)
              resolve(useWebSpeechFallback(text, gender, langCode, onStart, onEnd, onError))
            })
          })
        }
      } catch (err) {
        console.error('Backend call failed:', err)
      }
    }
    return useWebSpeechFallback(text, gender, langCode, onStart, onEnd, onError)
  }, [settings])

  // ========== PLAY FULL CHAPTER (all verses as one audio block) ==========
  const playFullChapter = useCallback(async (
    verses: string[], book: string, chapter: number,
    translationId: string = 'en_kjv',
    onComplete?: () => void
  ) => {
    setIsLoading(true)
    setIsPlaying(true)
    setIsPaused(false)
    setCurrentReference(`${book} ${chapter}`)
    setCurrentVerseIndex(0)
    setTotalVerses(1)
    setCurrentTime(0)
    setDuration(0)

    const fullText = verses.map((v, i) => `Verse ${i + 1}. ${v}`).join(' ')
    const reference = `${book} ${chapter}`
    const formattedText = formatFullVerseForSpeech(reference, fullText)

    const success = await playWithFallback(
      formattedText, reference, translationId, 'male',
      () => {},
      () => {
        setIsPlaying(false)
        setCurrentReference(null)
        setUsingFallback(false)
        stopTimeTracking()
        if (onComplete) onComplete()
      },
      () => {
        setIsPlaying(false)
        setUsingFallback(false)
        stopTimeTracking()
      }
    )

    if (!success) {
      setIsPlaying(false)
      setUsingFallback(false)
      stopTimeTracking()
    }
    setIsLoading(false)
  }, [playWithFallback])

  // ========== PLAY VERSE BY VERSE (Bible reader) ==========
  const playVerse = useCallback(async (verseText: string, reference: string, translationId: string = 'en_kjv') => {
    setIsLoading(true); setIsPlaying(true); setIsPaused(false)
    setCurrentReference(reference); setCurrentVerseIndex(0); setTotalVerses(1)
    const formattedText = formatFullVerseForSpeech(reference, verseText)
    const success = await playWithFallback(formattedText, reference, translationId, 'female',
      () => {},
      () => { setIsPlaying(false); setCurrentReference(null); setUsingFallback(false); stopTimeTracking() },
      () => { setIsPlaying(false); setUsingFallback(false); stopTimeTracking() }
    )
    if (!success) { setIsPlaying(false); setUsingFallback(false) }
    setIsLoading(false)
  }, [playWithFallback])

  const playChapter = useCallback(async (
    verses: string[], book: string, chapter: number,
    translationId: string = 'en_kjv',
    onVerseComplete?: (index: number) => void
  ) => {
    setIsLoading(true); setIsPlaying(true); setIsPaused(false)
    setCurrentReference(`${book} ${chapter}`); setCurrentVerseIndex(0); setTotalVerses(verses.length)
    currentQueueRef.current = verses; queueIndexRef.current = 0

    const playNext = async () => {
      if (queueIndexRef.current >= currentQueueRef.current.length) {
        setIsPlaying(false); setCurrentReference(null); setCurrentVerseIndex(-1); setUsingFallback(false)
        if (onVerseComplete) onVerseComplete(-1)
        setIsLoading(false)
        return
      }
      const verseText = currentQueueRef.current[queueIndexRef.current]
      const reference = `${book} ${chapter}:${queueIndexRef.current + 1}`
      const formattedText = formatFullVerseForSpeech(reference, verseText)
      const success = await playWithFallback(formattedText, reference, translationId, 'female',
        () => {},
        () => { queueIndexRef.current++; setCurrentVerseIndex(queueIndexRef.current - 1); if (onVerseComplete) onVerseComplete(queueIndexRef.current - 1); playNext() },
        () => { setIsPlaying(false); setUsingFallback(false); setIsLoading(false) }
      )
      if (!success) { setIsPlaying(false); setUsingFallback(false); setIsLoading(false) }
    }
    await playNext()
  }, [playWithFallback])

  // ========== SEEK (HTMLAudioElement only) ==========
  const seek = useCallback((seconds: number) => {
    if (!audioRef.current || usingFallback) return
    const newTime = Math.max(0, Math.min(audioRef.current.currentTime + seconds, audioRef.current.duration || 0))
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }, [usingFallback])

  const seekTo = useCallback((seconds: number) => {
    if (!audioRef.current || usingFallback) return
    audioRef.current.currentTime = seconds
    setCurrentTime(seconds)
  }, [usingFallback])

  const stop = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = '' }
    voice.cancelWebSpeech()
    currentUtteranceRef.current = null
    stopTimeTracking()
    setIsPlaying(false); setIsPaused(false); setCurrentReference(null)
    setCurrentVerseIndex(-1); setUsingFallback(false)
    setCurrentTime(0); setDuration(0)
    currentQueueRef.current = []; queueIndexRef.current = 0
  }, [])

  const pause = useCallback(() => {
    if (isPlaying && !isPaused) {
      if (usingFallback) voice.pauseWebSpeech()
      else if (audioRef.current) audioRef.current.pause()
      setIsPaused(true)
      stopTimeTracking()
    }
  }, [isPlaying, isPaused, usingFallback])

  const resume = useCallback(() => {
    if (isPlaying && isPaused) {
      if (usingFallback) voice.resumeWebSpeech()
      else if (audioRef.current) { audioRef.current.play(); startTimeTracking() }
      setIsPaused(false)
    }
  }, [isPlaying, isPaused, usingFallback])

  const togglePlayPause = useCallback(() => {
    if (isPaused) resume(); else if (isPlaying) pause()
  }, [isPaused, isPlaying, pause, resume])

  useEffect(() => { return () => { stop() } }, [])

  return {
    settings, voices, loadingVoices, isPlaying, isPaused, isLoading,
    currentReference, currentVerseIndex, totalVerses, audioRef, usingFallback,
    currentTime, duration,
    speedOptions, loadVoices, updateSpeed, updateVoice, updateAutoScroll, updateAutoPlay,
    playVerse, playChapter, playFullChapter, stop, pause, resume, togglePlayPause,
    seek, seekTo,
    getVoices: voice.getVoices,
  }
}
