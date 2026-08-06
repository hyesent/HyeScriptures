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
  
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentQueueRef = useRef<string[]>([])
  const queueIndexRef = useRef<number>(0)
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices()
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices()
    }
  }, [])

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
    text: string, gender: 'male' | 'female',
    onStart?: () => void, onEnd?: () => void, onError?: (error: any) => void
  ): boolean => {
    try {
      const utterance = voice.speakWithWebSpeech(text, settings.speed, gender, onStart, onEnd, onError)
      if (utterance) { currentUtteranceRef.current = utterance; setUsingFallback(true); return true }
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
    if (voiceConfig.useWebSpeech) return useWebSpeechFallback(text, gender, onStart, onEnd, onError)

    const voiceId = voiceConfig.voiceId || settings.voiceId
    if (voiceId) {
      try {
        console.log(`🎙️ Calling backend with voice: ${voiceId}`)
        const result = await voice.synthesize(text, voiceId, settings.speed)
        console.log('📦 Backend response:', result)

        if (result && result.audio_url) {
          setUsingFallback(false)
          const audioUrl = result.audio_url.startsWith('http') ? result.audio_url : `${API_BASE}${result.audio_url}`
          console.log('🔊 Playing audio from:', audioUrl)

          // Create a new Audio element each time to avoid stale state
          const audio = new Audio(audioUrl)
          audioRef.current = audio
          
          return new Promise((resolve) => {
            audio.onended = () => { if (onEnd) onEnd(); resolve(true) }
            audio.onerror = (e) => {
              console.error('❌ Audio playback error:', e, audioUrl)
              setUsingFallback(true)
              const fallbackWorked = useWebSpeechFallback(text, gender, onStart, onEnd, onError)
              resolve(fallbackWorked)
            }
            audio.onplay = () => { if (onStart) onStart() }
            audio.play().catch(err => {
              console.error('❌ Play failed:', err)
              setUsingFallback(true)
              const fallbackWorked = useWebSpeechFallback(text, gender, onStart, onEnd, onError)
              resolve(fallbackWorked)
            })
          })
        }
      } catch (err) {
        console.error('❌ Backend call failed:', err)
      }
    }
    return useWebSpeechFallback(text, gender, onStart, onEnd, onError)
  }, [settings])

  const playVerse = useCallback(async (verseText: string, reference: string, translationId: string = 'en_kjv') => {
    setIsLoading(true); setIsPlaying(true); setIsPaused(false)
    setCurrentReference(reference); setCurrentVerseIndex(0); setTotalVerses(1)
    const formattedText = formatFullVerseForSpeech(reference, verseText)
    const success = await playWithFallback(formattedText, reference, translationId, 'female',
      () => {},
      () => { setIsPlaying(false); setCurrentReference(null); setUsingFallback(false) },
      () => { setIsPlaying(false); setUsingFallback(false) }
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

    // Add this new function to useVoiceAudio
const playFullChapter = useCallback(async (
  verses: string[],
  book: string,
  chapter: number,
  translationId: string = 'en_kjv',
  onComplete?: () => void
) => {
  setIsLoading(true)
  setIsPlaying(true)
  setIsPaused(false)
  setCurrentReference(`${book} ${chapter}`)
  setCurrentVerseIndex(0)
  setTotalVerses(1) // Treat whole chapter as one unit

  // Join all verses into one text block
  const fullText = verses.map((v, i) => `Verse ${i + 1}. ${v}`).join(' ')
  const reference = `${book} ${chapter}`
  const formattedText = formatFullVerseForSpeech(reference, fullText)

  const success = await playWithFallback(
    formattedText,
    reference,
    translationId,
    'male',
    () => {},
    () => {
      setIsPlaying(false)
      setCurrentReference(null)
      setUsingFallback(false)
      if (onComplete) onComplete()
    },
    () => {
      setIsPlaying(false)
      setUsingFallback(false)
    }
  )

  if (!success) {
    setIsPlaying(false)
    setUsingFallback(false)
  }
  setIsLoading(false)
}, [playWithFallback])

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

  const stop = useCallback(() => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = '' }
    voice.cancelWebSpeech(); currentUtteranceRef.current = null
    setIsPlaying(false); setIsPaused(false); setCurrentReference(null)
    setCurrentVerseIndex(-1); setUsingFallback(false)
    currentQueueRef.current = []; queueIndexRef.current = 0
  }, [])

  const pause = useCallback(() => {
    if (isPlaying && !isPaused) {
      if (usingFallback) voice.pauseWebSpeech()
      else if (audioRef.current) audioRef.current.pause()
      setIsPaused(true)
    }
  }, [isPlaying, isPaused, usingFallback])

  const resume = useCallback(() => {
    if (isPlaying && isPaused) {
      if (usingFallback) voice.resumeWebSpeech()
      else if (audioRef.current) audioRef.current.play()
      setIsPaused(false)
    }
  }, [isPlaying, isPaused, usingFallback])

  const togglePlayPause = useCallback(() => {
    if (isPaused) resume(); else if (isPlaying) pause()
  }, [isPaused, isPlaying, pause, resume])

  useEffect(() => { return () => { stop() } }, [])

  return { settings, voices, loadingVoices, isPlaying, isPaused, isLoading,
    currentReference, currentVerseIndex, totalVerses, audioRef, usingFallback,
    speedOptions, loadVoices, updateSpeed, updateVoice, updateAutoScroll, updateAutoPlay,
    playVerse, playChapter, stop, pause, resume, playFullChapter, togglePlayPause, getVoices: voice.getVoices }
}
