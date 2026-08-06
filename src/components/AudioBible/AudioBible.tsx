// src/components/AudioBible/AudioBible.tsx
import React, { useState, useEffect, useRef } from 'react'
import { useBible } from '../../hooks/useBible'
import { useVoiceAudio } from '../../hooks/useVoiceAudio'
import { cacheGet, cacheSet } from '../../lib/cache'
import styles from './AudioBible.module.css'

const AUDIO_VOICES = [
  { id: 'en-US-GuyNeural', name: 'Guy', language: 'English', accent: 'American', gender: 'male' },
  { id: 'en-US-JennyNeural', name: 'Jenny', language: 'English', accent: 'American', gender: 'female' },
  { id: 'en-GB-RyanNeural', name: 'Ryan', language: 'English', accent: 'British', gender: 'male' },
  { id: 'en-GB-SoniaNeural', name: 'Sonia', language: 'English', accent: 'British', gender: 'female' },
  { id: 'en-AU-WilliamNeural', name: 'William', language: 'English', accent: 'Australian', gender: 'male' },
  { id: 'en-AU-NatashaNeural', name: 'Natasha', language: 'English', accent: 'Australian', gender: 'female' },
  { id: 'en-IN-PrabhatNeural', name: 'Prabhat', language: 'English', accent: 'Indian', gender: 'male' },
  { id: 'en-IN-NeerjaNeural', name: 'Neerja', language: 'English', accent: 'Indian', gender: 'female' },
  { id: 'en-NG-AbeoNeural', name: 'Abeo', language: 'English', accent: 'Nigerian', gender: 'male' },
  { id: 'en-NG-EzinneNeural', name: 'Ezinne', language: 'English', accent: 'Nigerian', gender: 'female' },
  { id: 'en-ZA-LeahNeural', name: 'Leah', language: 'English', accent: 'South African', gender: 'female' },
  { id: 'en-ZA-LukeNeural', name: 'Luke', language: 'English', accent: 'South African', gender: 'male' },
]

const SPEED_OPTIONS = [0.75, 1.0, 1.25, 1.5]
const SLEEP_TIMER_OPTIONS = [0, 5, 10, 15, 30, 45, 60]
const CACHE_TTL = 7 * 24 * 60 * 60

const Icons = {
  Play: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20"/></svg>),
  Pause: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>),
  Prev: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>),
  Next: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>),
  Sleep: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>),
  Book: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>),
  ChevronDown: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>),
}

export const AudioBible: React.FC = () => {
  const { books, currentBook, currentChapter, verses, totalChapters, goToChapter, nextChapter, prevChapter } = useBible()
  const { settings, isPlaying, isPaused, isLoading, updateSpeed, updateVoice, playFullChapter, stop, togglePlayPause } = useVoiceAudio()
  
  const [selectedVoice, setSelectedVoice] = useState('en-US-GuyNeural')
  const [sleepTimer, setSleepTimer] = useState(0)
  const [sleepRemaining, setSleepRemaining] = useState(0)
  const [toast, setToast] = useState('')
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [audioDuration, setAudioDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [showBookPicker, setShowBookPicker] = useState(false)
  const [showChapterPicker, setShowChapterPicker] = useState(false)
  const sleepRef = useRef<NodeJS.Timeout | null>(null)
  const toastTimeout = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  const showToast = (message: string, duration = 3000) => {
    setToast(message)
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
    toastTimeout.current = setTimeout(() => setToast(''), duration)
  }

  // Estimate audio duration based on text length and speed
  const estimatedDuration = () => {
    const fullText = verses.join(' ')
    const wordCount = fullText.split(/\s+/).length
    const avgWordsPerMinute = 150 * settings.speed
    return Math.ceil((wordCount / avgWordsPerMinute) * 60)
  }

  // Track progress with interval
  useEffect(() => {
    if (isPlaying && !isPaused) {
      const duration = estimatedDuration()
      setAudioDuration(duration)
      let elapsed = 0
      progressInterval.current = setInterval(() => {
        elapsed++
        setCurrentTime(elapsed)
        if (elapsed >= duration) {
          setCurrentTime(0)
          if (progressInterval.current) clearInterval(progressInterval.current)
        }
      }, 1000)
    } else {
      if (progressInterval.current) clearInterval(progressInterval.current)
    }

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current)
    }
  }, [isPlaying, isPaused, verses])

  // Check cache on chapter change
  useEffect(() => {
    checkChapterCache()
    setCurrentTime(0)
    setAudioDuration(estimatedDuration())
  }, [currentBook, currentChapter])

  const checkChapterCache = async () => {
    const cacheKey = `audio_chapter_en_kjv_${currentBook}_${currentChapter}`
    const cached = await cacheGet<string>(cacheKey)
    
    if (!cached && isFirstLoad) {
      showToast('Preparing your chapter... this may take a moment', 4000)
    }
  }

  const handlePlay = async () => {
    updateVoice(selectedVoice)
    
    const cacheKey = `audio_chapter_en_kjv_${currentBook}_${currentChapter}`
    const cached = await cacheGet<string>(cacheKey)
    
    if (!cached) {
      await cacheSet(cacheKey, 'ready', CACHE_TTL)
    }
    
    if (isFirstLoad) {
      showToast('Preparing your narration... it will be ready shortly', 4000)
      setIsFirstLoad(false)
    }

    setCurrentTime(0)
    await playFullChapter(verses, currentBook, currentChapter, 'en_kjv', () => {
      // Auto-advance to next chapter
      if (sleepRemaining <= 0) {
        nextChapter()
      }
    })
  }

  useEffect(() => {
    if (sleepRemaining > 0) {
      sleepRef.current = setInterval(() => {
        setSleepRemaining(prev => {
          if (prev <= 1) { stop(); return 0 }
          return prev - 1
        })
      }, 60000)
    }
    return () => { if (sleepRef.current) clearInterval(sleepRef.current) }
  }, [sleepRemaining])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getProgressPercent = () => {
    if (audioDuration === 0) return 0
    return (currentTime / audioDuration) * 100
  }

  const getStatusText = () => {
    if (isLoading) return 'Preparing your chapter...'
    if (isPaused) return 'Paused'
    if (isPlaying) return 'Now Playing'
    return 'Ready'
  }

  return (
    <div className={styles.container}>
      {toast && <div className={styles.toast}>{toast}</div>}

      {/* Header with Book/Chapter Picker */}
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <span className={styles.headerLabel}>Audio Bible</span>
          <div className={styles.bookChapterSelector}>
            <button className={styles.selectorBtn} onClick={() => setShowBookPicker(!showBookPicker)}>
              {currentBook} <Icons.ChevronDown />
            </button>
            <button className={styles.selectorBtn} onClick={() => setShowChapterPicker(!showChapterPicker)}>
              Chapter {currentChapter} <Icons.ChevronDown />
            </button>
          </div>
        </div>
        <div className={styles.sleepTimer}>
          <Icons.Sleep />
          <select value={sleepTimer} onChange={e => { const v = Number(e.target.value); setSleepTimer(v); setSleepRemaining(v) }} className={styles.sleepSelect}>
            {SLEEP_TIMER_OPTIONS.map(m => <option key={m} value={m}>{m === 0 ? 'No timer' : `${m} min`}</option>)}
          </select>
          {sleepRemaining > 0 && <span className={styles.sleepCountdown}>{sleepRemaining}m</span>}
        </div>
      </div>

      {/* Book Picker Modal */}
      {showBookPicker && (
        <div className={styles.pickerOverlay} onClick={() => setShowBookPicker(false)}>
          <div className={styles.pickerModal} onClick={e => e.stopPropagation()}>
            <h3>Select Book</h3>
            <div className={styles.pickerGrid}>
              {books.map(book => (
                <button
                  key={book}
                  className={`${styles.pickerItem} ${book === currentBook ? styles.pickerActive : ''}`}
                  onClick={() => { goToChapter(book, 1); setShowBookPicker(false) }}
                >
                  {book}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chapter Picker Modal */}
      {showChapterPicker && (
        <div className={styles.pickerOverlay} onClick={() => setShowChapterPicker(false)}>
          <div className={styles.pickerModal} onClick={e => e.stopPropagation()}>
            <h3>Select Chapter - {currentBook}</h3>
            <div className={styles.pickerGrid}>
              {Array.from({ length: totalChapters }, (_, i) => i + 1).map(ch => (
                <button
                  key={ch}
                  className={`${styles.pickerItem} ${ch === currentChapter ? styles.pickerActive : ''}`}
                  onClick={() => { goToChapter(currentBook, ch); setShowChapterPicker(false) }}
                >
                  {ch}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Album Art */}
      <div className={styles.artworkContainer}>
        <div className={`${styles.artwork} ${isPlaying ? styles.artworkPlaying : ''}`}>
          <Icons.Book />
        </div>
        {isPlaying && <div className={styles.artworkGlow} />}
      </div>

      {/* Progress with time */}
      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div className={`${styles.progressFill} ${isPlaying ? styles.progressActive : ''}`} style={{ width: `${getProgressPercent()}%` }} />
        </div>
        <div className={styles.progressInfo}>
          <span>{getStatusText()}</span>
          <span>{formatTime(currentTime)} / {formatTime(audioDuration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <button className={styles.navBtn} onClick={prevChapter} disabled={isPlaying}><Icons.Prev /></button>
        <button className={styles.playBtn} onClick={isPlaying ? togglePlayPause : handlePlay}>
          {isPlaying && !isPaused ? <Icons.Pause /> : <Icons.Play />}
        </button>
        <button className={styles.navBtn} onClick={nextChapter} disabled={isPlaying}><Icons.Next /></button>
      </div>

      {/* Speed */}
      <div className={styles.speedSection}>
        {SPEED_OPTIONS.map(s => (
          <button key={s} className={`${styles.speedBtn} ${settings.speed === s ? styles.speedActive : ''}`} onClick={() => updateSpeed(s)}>{s}x</button>
        ))}
      </div>

      {/* Voice */}
      <div className={styles.voiceSection}>
        <span className={styles.voiceLabel}>Narrator Voice</span>
        <div className={styles.voiceGrid}>
          {AUDIO_VOICES.map(v => (
            <button key={v.id} className={`${styles.voiceOption} ${selectedVoice === v.id ? styles.voiceActive : ''}`}
              onClick={() => { setSelectedVoice(v.id); updateVoice(v.id) }}>
              <span className={styles.voiceName}>{v.name}</span>
              <span className={styles.voiceAccent}>{v.accent}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chapter Text Preview */}
      <div className={styles.verseDisplay}>
        {verses.slice(0, 5).map((verse, index) => (
          <p key={index} className={`${styles.verseLine} ${isPlaying ? styles.verseActive : ''}`}>
            <span className={styles.verseNum}>{index + 1}</span>
            <span className={styles.verseText}>{verse}</span>
          </p>
        ))}
        {verses.length > 5 && (
          <p className={styles.moreVerses}>+ {verses.length - 5} more verses</p>
        )}
      </div>
    </div>
  )
}
