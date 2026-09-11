// src/components/AudioBible/AudioBible.tsx
import React, { useState, useEffect, useRef } from 'react'
import { useBible } from '../../hooks/useBible'
import { useVoiceAudio } from '../../hooks/useVoiceAudio'
import { cacheGet, cacheSet } from '../../lib/cache'
import { PREMIUM_VOICES, VOICE_LABELS, getVoiceForTranslation, allowsVoiceOverride, getVoicesForTranslation } from '../../lib/voice'
import styles from './AudioBible.module.css'

const SPEED_OPTIONS = [0.75, 1.0, 1.25, 1.5]
const SLEEP_TIMER_OPTIONS = [0, 5, 10, 15, 30, 45, 60]
const CACHE_TTL = 7 * 24 * 60 * 60

const Icons = {
  Play: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20"/></svg>),
  Pause: () => (<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>),
  Prev: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>),
  Next: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>),
  Rewind: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/></svg>),
  Forward: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/></svg>),
  Sleep: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>),
  Book: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>),
  ChevronDown: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>),
  Globe: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
  Mic: () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>),
}

export const AudioBible: React.FC = () => {
  const { books, currentBook, currentChapter, verses, totalChapters, translationId, availableTranslations, goToChapter, nextChapter, prevChapter, switchTranslation } = useBible()
  const { settings, isPlaying, isPaused, isLoading, currentTime, duration, updateSpeed, updateVoice, playFullChapter, stop, togglePlayPause, seek } = useVoiceAudio()

  const [selectedVoice, setSelectedVoice] = useState('')
  const [sleepTimer, setSleepTimer] = useState(0)
  const [sleepRemaining, setSleepRemaining] = useState(0)
  const [toast, setToast] = useState('')
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [showBookPicker, setShowBookPicker] = useState(false)
  const [showChapterPicker, setShowChapterPicker] = useState(false)
  const [showTranslationPicker, setShowTranslationPicker] = useState(false)
  const [showVoicePicker, setShowVoicePicker] = useState(false)
  const [autoPlayNext, setAutoPlayNext] = useState(true)
  const sleepRef = useRef<NodeJS.Timeout | null>(null)
  const toastTimeout = useRef<NodeJS.Timeout | null>(null)
  const isAutoPlayingRef = useRef(false)

  const voiceConfig = getVoiceForTranslation(translationId)
  const overrideAllowed = allowsVoiceOverride(translationId)
  const availableVoices = getVoicesForTranslation(translationId)
  const activeVoiceId = overrideAllowed && selectedVoice ? selectedVoice : (voiceConfig.voiceId || settings.voiceId)
  const activeVoiceLabel = VOICE_LABELS[activeVoiceId] || 'Auto'

  const showToast = (message: string, duration = 3000) => {
    setToast(message)
    if (toastTimeout.current) clearTimeout(toastTimeout.current)
    toastTimeout.current = setTimeout(() => setToast(''), duration)
  }

  // Reset selected voice when translation changes
  useEffect(() => {
    setSelectedVoice('')
  }, [translationId])

  // Reset sleep timer properly
  useEffect(() => {
    if (sleepRef.current) clearInterval(sleepRef.current)
    if (sleepRemaining > 0) {
      sleepRef.current = setInterval(() => {
        setSleepRemaining(prev => {
          if (prev <= 1) {
            stop()
            showToast('Sleep timer ended. Rest well 🌙', 3000)
            return 0
          }
          return prev - 1
        })
      }, 60000)
    }
    return () => { if (sleepRef.current) clearInterval(sleepRef.current) }
  }, [sleepRemaining, stop])

  const handlePlay = async () => {
    const voiceToUse = activeVoiceId
    if (voiceToUse) updateVoice(voiceToUse)

    const cacheKey = `audio_chapter_${translationId}_${currentBook}_${currentChapter}`
    const cached = await cacheGet<string>(cacheKey)
    if (!cached) await cacheSet(cacheKey, 'ready', CACHE_TTL)

    if (isFirstLoad) {
      showToast('Preparing your narration... it will be ready shortly', 4000)
      setIsFirstLoad(false)
    }

    isAutoPlayingRef.current = false
    await playFullChapter(verses, currentBook, currentChapter, translationId, () => {
      if (autoPlayNext && sleepRemaining <= 0 && !isAutoPlayingRef.current) {
        isAutoPlayingRef.current = true
        showToast(`Continuing to ${currentBook} ${currentChapter + 1}...`, 2000)
        setTimeout(() => {
          nextChapter()
          isAutoPlayingRef.current = false
        }, 1500)
      }
    })
  }

  useEffect(() => {
    if (isAutoPlayingRef.current && !isPlaying) {
      const timer = setTimeout(() => {
        handlePlay()
        isAutoPlayingRef.current = false
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentChapter, isPlaying])

  const handleTranslationChange = (id: string) => {
    stop()
    switchTranslation(id)
    setShowTranslationPicker(false)
    const newVoice = getVoiceForTranslation(id)
    showToast(`Switched to ${availableTranslations.find(t => t.id === id)?.name} · Voice: ${VOICE_LABELS[newVoice.voiceId || ''] || 'Auto'}`, 3000)
  }

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getProgressPercent = () => {
    if (!duration || duration === 0) return 0
    return Math.min((currentTime / duration) * 100, 100)
  }

  const getStatusText = () => {
    if (isLoading) return 'Preparing your chapter...'
    if (isPaused) return 'Paused'
    if (isPlaying) return 'Now Playing'
    return 'Ready'
  }

  const currentTranslationName = availableTranslations.find(t => t.id === translationId)?.name || 'KJV'

  return (
    <div className={styles.container}>
      {toast && <div className={styles.toast}>{toast}</div>}

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <span className={styles.headerLabel}>Audio Bible</span>
          <div className={styles.bookChapterSelector}>
            <button className={styles.selectorBtn} onClick={() => setShowBookPicker(!showBookPicker)}>
              {currentBook} <Icons.ChevronDown />
            </button>
            <button className={styles.selectorBtn} onClick={() => setShowChapterPicker(!showChapterPicker)}>
              Ch. {currentChapter} <Icons.ChevronDown />
            </button>
            <button className={`${styles.selectorBtn} ${styles.translationBtn}`} onClick={() => setShowTranslationPicker(!showTranslationPicker)}>
              <Icons.Globe /> {currentTranslationName.split(' ')[0]} <Icons.ChevronDown />
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

      {/* Pickers */}
      {showBookPicker && (
        <div className={styles.pickerOverlay} onClick={() => setShowBookPicker(false)}>
          <div className={styles.pickerModal} onClick={e => e.stopPropagation()}>
            <h3>Select Book</h3>
            <div className={styles.pickerGrid}>
              {books.map(book => (
                <button key={book} className={`${styles.pickerItem} ${book === currentBook ? styles.pickerActive : ''}`}
                  onClick={() => { goToChapter(book, 1); setShowBookPicker(false) }}>{book}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showChapterPicker && (
        <div className={styles.pickerOverlay} onClick={() => setShowChapterPicker(false)}>
          <div className={styles.pickerModal} onClick={e => e.stopPropagation()}>
            <h3>Chapter — {currentBook}</h3>
            <div className={styles.pickerGrid}>
              {Array.from({ length: totalChapters }, (_, i) => i + 1).map(ch => (
                <button key={ch} className={`${styles.pickerItem} ${ch === currentChapter ? styles.pickerActive : ''}`}
                  onClick={() => { goToChapter(currentBook, ch); setShowChapterPicker(false) }}>{ch}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {showTranslationPicker && (
        <div className={styles.pickerOverlay} onClick={() => setShowTranslationPicker(false)}>
          <div className={styles.pickerModal} onClick={e => e.stopPropagation()}>
            <h3>Translation</h3>
            <div className={styles.translationList}>
              {availableTranslations.map(t => {
                const vConfig = getVoiceForTranslation(t.id)
                const vLabel = VOICE_LABELS[vConfig.voiceId || ''] || 'Auto'
                return (
                  <button key={t.id} className={`${styles.translationItem} ${t.id === translationId ? styles.translationActive : ''}`}
                    onClick={() => handleTranslationChange(t.id)}>
                    <div className={styles.translationInfo}>
                      <span className={styles.translationName}>{t.name}</span>
                      <span className={styles.translationLang}>{t.language}</span>
                    </div>
                    <span className={styles.translationVoice}>{vLabel}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {showVoicePicker && (
        <div className={styles.pickerOverlay} onClick={() => setShowVoicePicker(false)}>
          <div className={styles.pickerModal} onClick={e => e.stopPropagation()}>
            <h3>Voice — {currentTranslationName}</h3>
            <div className={styles.voiceGrid}>
              {(overrideAllowed ? availableVoices : PREMIUM_VOICES).map(v => (
                <button key={v.id} className={`${styles.voiceOption} ${activeVoiceId === v.id ? styles.voiceActive : ''}`}
                  onClick={() => { setSelectedVoice(v.id); updateVoice(v.id); setShowVoicePicker(false) }}>
                  <span className={styles.voiceName}>{v.name}</span>
                  <span className={styles.voiceAccent}>{v.accent}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Artwork */}
      <div className={styles.artworkContainer}>
        <div className={`${styles.artwork} ${isPlaying ? styles.artworkPlaying : ''}`}><Icons.Book /></div>
        {isPlaying && <div className={styles.artworkGlow} />}
      </div>

      {/* Progress */}
      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div className={`${styles.progressFill} ${isPlaying ? styles.progressActive : ''}`} style={{ width: `${getProgressPercent()}%` }} />
        </div>
        <div className={styles.progressInfo}>
          <span>{getStatusText()}</span>
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls with seek */}
      <div className={styles.controls}>
        <button className={styles.seekBtn} onClick={() => seek(-10)} disabled={!isPlaying || isPaused} title="Rewind 10s">
          <Icons.Rewind />
          <span className={styles.seekLabel}>10</span>
        </button>
        <button className={styles.navBtn} onClick={prevChapter} disabled={isPlaying}><Icons.Prev /></button>
        <button className={styles.playBtn} onClick={isPlaying ? togglePlayPause : handlePlay}>
          {isPlaying && !isPaused ? <Icons.Pause /> : <Icons.Play />}
        </button>
        <button className={styles.navBtn} onClick={nextChapter} disabled={isPlaying}><Icons.Next /></button>
        <button className={styles.seekBtn} onClick={() => seek(10)} disabled={!isPlaying || isPaused} title="Forward 10s">
          <Icons.Forward />
          <span className={styles.seekLabel}>10</span>
        </button>
      </div>

      {/* Voice Info / Picker */}
      <div className={styles.voiceInfoRow}>
        <button className={styles.voiceInfoBtn} onClick={() => overrideAllowed && setShowVoicePicker(true)}>
          <Icons.Mic />
          <span>{activeVoiceLabel}</span>
          {overrideAllowed && <span className={styles.voiceInfoHint}>Tap to change</span>}
          {!overrideAllowed && <span className={styles.voiceInfoHint}>Auto-matched</span>}
        </button>
      </div>

      {/* Auto-play toggle */}
      <div className={styles.autoplayRow}>
        <label className={styles.autoplayLabel}>
          <input type="checkbox" checked={autoPlayNext} onChange={e => setAutoPlayNext(e.target.checked)} />
          <span>Auto-play next chapter</span>
        </label>
      </div>

      {/* Speed */}
      <div className={styles.speedSection}>
        {SPEED_OPTIONS.map(s => (
          <button key={s} className={`${styles.speedBtn} ${settings.speed === s ? styles.speedActive : ''}`} onClick={() => updateSpeed(s)}>{s}x</button>
        ))}
      </div>

      {/* Preview */}
      <div className={styles.verseDisplay}>
        {verses.slice(0, 5).map((verse, index) => (
          <p key={index} className={`${styles.verseLine} ${isPlaying ? styles.verseActive : ''}`}>
            <span className={styles.verseNum}>{index + 1}</span>
            <span className={styles.verseText}>{verse}</span>
          </p>
        ))}
        {verses.length > 5 && <p className={styles.moreVerses}>+ {verses.length - 5} more verses</p>}
      </div>
    </div>
  )
}
