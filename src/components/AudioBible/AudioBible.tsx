// src/components/AudioBible/AudioBible.tsx

import React, { useState, useEffect, useRef } from 'react'
import { useBible } from '../../hooks/useBible'
import { useVoiceAudio } from '../../hooks/useVoiceAudio'
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

const Icons = {
  Play: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20"/></svg>),
  Pause: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>),
  Prev: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>),
  Next: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>),
  Sleep: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>),
  Book: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>),
}

export const AudioBible: React.FC = () => {
  const { currentBook, currentChapter, verses, nextChapter, prevChapter } = useBible()
  const { settings, isPlaying, isPaused, isLoading, currentVerseIndex, totalVerses, updateSpeed, updateVoice, playChapter, stop, togglePlayPause } = useVoiceAudio()
  
  const [selectedVoice, setSelectedVoice] = useState('en-US-GuyNeural')
  const [sleepTimer, setSleepTimer] = useState(0)
  const [sleepRemaining, setSleepRemaining] = useState(0)
  const sleepRef = useRef<NodeJS.Timeout | null>(null)
  const verseScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (verseScrollRef.current && currentVerseIndex >= 0) {
      const el = verseScrollRef.current.querySelector(`[data-verse="${currentVerseIndex}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [currentVerseIndex])

  useEffect(() => {
    if (sleepRemaining > 0) {
      sleepRef.current = setInterval(() => {
        setSleepRemaining(prev => { if (prev <= 1) { stop(); return 0 } return prev - 1 })
      }, 60000)
    }
    return () => { if (sleepRef.current) clearInterval(sleepRef.current) }
  }, [sleepRemaining])

  const handlePlay = async () => {
    updateVoice(selectedVoice)
    await playChapter(verses, currentBook, currentChapter, 'en_kjv')
  }

  const getProgress = () => totalVerses === 0 ? 0 : ((currentVerseIndex + 1) / totalVerses) * 100

  const getStatusText = () => {
    if (isLoading) return 'Loading...'
    if (isPaused) return 'Paused'
    if (isPlaying) return 'Now Playing'
    return 'Ready'
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <span className={styles.headerLabel}>Audio Bible</span>
          <h2 className={styles.headerBook}>{currentBook} {currentChapter}</h2>
        </div>
        <div className={styles.sleepTimer}>
          <Icons.Sleep />
          <select value={sleepTimer} onChange={e => { const v = Number(e.target.value); setSleepTimer(v); setSleepRemaining(v) }} className={styles.sleepSelect}>
            {SLEEP_TIMER_OPTIONS.map(m => <option key={m} value={m}>{m === 0 ? 'No timer' : `${m} min`}</option>)}
          </select>
          {sleepRemaining > 0 && <span className={styles.sleepCountdown}>{sleepRemaining}m</span>}
        </div>
      </div>

      <div className={styles.artworkContainer}>
        <div className={`${styles.artwork} ${isPlaying ? styles.artworkPlaying : ''}`}><Icons.Book /></div>
        {isPlaying && <div className={styles.artworkGlow} />}
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressBar}><div className={styles.progressFill} style={{ width: `${getProgress()}%` }} /></div>
        <div className={styles.progressInfo}><span>{getStatusText()}</span><span>Verse {currentVerseIndex + 1} of {totalVerses}</span></div>
      </div>

      <div className={styles.controls}>
        <button className={styles.navBtn} onClick={prevChapter} disabled={isPlaying}><Icons.Prev /></button>
        <button className={styles.playBtn} onClick={isPlaying ? togglePlayPause : handlePlay}>
          {isPlaying && !isPaused ? <Icons.Pause /> : <Icons.Play />}
        </button>
        <button className={styles.navBtn} onClick={nextChapter} disabled={isPlaying}><Icons.Next /></button>
      </div>

      <div className={styles.speedSection}>
        {SPEED_OPTIONS.map(s => (
          <button key={s} className={`${styles.speedBtn} ${settings.speed === s ? styles.speedActive : ''}`} onClick={() => updateSpeed(s)}>{s}x</button>
        ))}
      </div>

      <div className={styles.voiceSection}>
        <span className={styles.voiceLabel}>Voice</span>
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

      <div className={styles.verseDisplay} ref={verseScrollRef}>
        {verses.map((verse, index) => (
          <p key={index} data-verse={index} className={`${styles.verseLine} ${index === currentVerseIndex && isPlaying ? styles.verseCurrent : ''}`}>
            <span className={styles.verseNum}>{index + 1}</span>
            <span className={styles.verseText}>{verse}</span>
          </p>
        ))}
      </div>
    </div>
  )
}