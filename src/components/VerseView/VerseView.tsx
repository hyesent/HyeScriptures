// src/components/VerseView/VerseView.tsx

import React, { useState, useRef, useEffect } from 'react'
import { useBookmarks } from '../../hooks/useBookmarks'
import { useHighlights } from '../../hooks/useHighlights'
import { getNotesByVerse } from '../../lib/notes'
import { explainVerse, summarizeChapter } from '../../lib/ai'
import { NoteEditor } from '../Notes/NoteEditor'
import { ShareButton } from '../Share/ShareButton'
import { useVoiceAudio } from '../../hooks/useVoiceAudio'
import { useAILimits } from '../../hooks/useAILimits'
import { useSubscription } from '../../hooks/useSubscription'
import { PREMIUM_VOICES, VOICE_LABELS, VOICE_TOASTS } from '../../lib/voice'
import { 
  MoreVertical, 
  Volume2, 
  X, 
  Bookmark,
  Highlighter,
  PenLine,
  Sparkles,
  Link,
  Copy,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Crown,
} from 'lucide-react'
import styles from './VerseView.module.css'

const FONT_SIZE_KEY = 'hyescriptures_font_size'
const DEFAULT_FONT_SIZE = 19

const getFontSize = (): number => parseInt(localStorage.getItem(FONT_SIZE_KEY) || String(DEFAULT_FONT_SIZE))
const saveFontSize = (size: number) => localStorage.setItem(FONT_SIZE_KEY, String(size))

interface VerseViewProps {
  book: string
  chapter: number
  verses: string[]
  translationId?: string
  onNext: () => void
  onPrev: () => void
  showVerseNumbers?: boolean
  onSelectVerseForCrossRef?: (reference: string) => void
  onPostToCommunity?: (reference: string, text: string) => void
}

type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink'

const colorOptions: { name: HighlightColor; hex: string }[] = [
  { name: 'yellow', hex: '#fef08a' },
  { name: 'green', hex: '#86efac' },
  { name: 'blue', hex: '#93c5fd' },
  { name: 'pink', hex: '#f9a8d4' },
]

export const VerseView: React.FC<VerseViewProps> = ({
  book, chapter, verses, translationId = 'en_kjv',
  onNext, onPrev, showVerseNumbers = true,
  onSelectVerseForCrossRef, onPostToCommunity,
}) => {
  const { isBookmarked, toggle: toggleBookmark } = useBookmarks()
  const { getColor, toggle: toggleHighlight } = useHighlights()
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null)
  const [showNoteEditor, setShowNoteEditor] = useState(false)
  const [noteVerseRef, setNoteVerseRef] = useState<string | null>(null)
  const [aiExplanation, setAiExplanation] = useState<{ [key: string]: string }>({})
  const [loadingAI, setLoadingAI] = useState<{ [key: string]: boolean }>({})
  const [showAI, setShowAI] = useState<{ [key: string]: boolean }>({})
  const [showReaderMenu, setShowReaderMenu] = useState(false)
  const [showAudioSettings, setShowAudioSettings] = useState(false)
  const [highlightedVerse, setHighlightedVerse] = useState<number>(-1)
  const [showHighlightOptions, setShowHighlightOptions] = useState<number | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [fontSize, setFontSize] = useState(getFontSize())
  const [chapterSummary, setChapterSummary] = useState<string | null>(null)
  const [loadingSummary, setLoadingSummary] = useState(false)

  const verseRefs = useRef<(HTMLDivElement | null)[]>([])
  const touchStartX = useRef(0)
  const { checkAndIncrement } = useAILimits()
  const { tier } = useSubscription()

  const { settings, isPlaying, isPaused, isLoading, currentVerseIndex, audioRef,
    speedOptions, updateSpeed, updateVoice, playChapter, stop, togglePlayPause } = useVoiceAudio()

  useEffect(() => {
    document.documentElement.style.setProperty('--verse-font-size', `${fontSize}px`)
    saveFontSize(fontSize)
  }, [fontSize])

  const showToast = (message: string) => { setToast(message); setTimeout(() => setToast(null), 3000) }

  const getVerseReference = (index: number): string => `${book} ${chapter}:${index + 1}`
  const scrollToVerse = (index: number) => { const el = verseRefs.current[index]; if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }) }
  const copyVerse = (index: number) => { navigator.clipboard.writeText(`${getVerseReference(index)}\n\n${verses[index]}`); setSelectedVerse(null) }
  const handleLongPress = (index: number) => setSelectedVerse(index)
  const handleActionComplete = () => { setSelectedVerse(null); setShowHighlightOptions(null) }

  const handleBookmark = (index: number) => { toggleBookmark(getVerseReference(index)); handleActionComplete() }
  const handleHighlight = (index: number, color: HighlightColor) => {
    toggleHighlight(getVerseReference(index), color); setShowHighlightOptions(null); handleActionComplete()
  }
  const handleAddNote = (index: number) => { setNoteVerseRef(getVerseReference(index)); setShowNoteEditor(true); handleActionComplete() }

  const handleAIExplain = async (index: number) => {
    const { allowed, message } = checkAndIncrement()
    if (!allowed) { showToast(message || 'AI limit reached'); return }

    const reference = getVerseReference(index)
    const verseText = verses[index]
    setLoadingAI(prev => ({ ...prev, [reference]: true }))
    setShowAI(prev => ({ ...prev, [reference]: true }))
    try {
      const result = await explainVerse(`${reference} - ${verseText}`)
      setAiExplanation(prev => ({ ...prev, [reference]: result }))
    } catch {
      setAiExplanation(prev => ({ ...prev, [reference]: 'Sorry, I could not explain this verse at this time.' }))
    } finally {
      setLoadingAI(prev => ({ ...prev, [reference]: false }))
    }
    handleActionComplete()
  }

  const handleCrossRef = (index: number) => {
    if (onSelectVerseForCrossRef) onSelectVerseForCrossRef(getVerseReference(index))
    handleActionComplete()
  }

  const handleSummarizeChapter = async () => {
    if (tier !== 'elder') { showToast('Chapter summary is an Elder exclusive feature. Upgrade to unlock.'); return }
    const { allowed, message } = checkAndIncrement()
    if (!allowed) { showToast(message || 'AI limit reached'); return }

    setLoadingSummary(true)
    try { const result = await summarizeChapter(book, chapter); setChapterSummary(result) }
    catch { showToast('Failed to generate summary') }
    finally { setLoadingSummary(false); setShowReaderMenu(false) }
  }

  const handlePlayChapter = async () => {
    if (isPlaying) { togglePlayPause() }
    else { await playChapter(verses, book, chapter, translationId, (index) => { setHighlightedVerse(index); scrollToVerse(index) }) }
  }
  const handleStopAudio = () => { stop(); setHighlightedVerse(-1) }
  const getProgress = (): number => verses.length === 0 ? 0 : ((currentVerseIndex + 1) / verses.length) * 100
  const getStatusText = (): string => {
    if (isLoading) return 'Loading audio...'; if (isPaused) return 'Paused'; if (isPlaying) return 'Playing'; return 'Ready'
  }
  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 29))
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 13))

  const renderVerse = (verse: string, index: number) => {
    const reference = getVerseReference(index)
    const isBookmarkedRef = isBookmarked(reference)
    const highlightColor = getColor(reference)
    const isSelected = selectedVerse === index
    const isLoadingAI = loadingAI[reference] || false
    const explanation = aiExplanation[reference] || ''
    const showExplanation = showAI[reference] || false
    const isHighlighted = index === highlightedVerse && isPlaying
    const showHighlightOpts = showHighlightOptions === index

    return (
      <div key={index} ref={el => verseRefs.current[index] = el} id={`verse-${index}`}
        className={`${styles.verseLine} ${highlightColor ? styles.highlighted : ''} ${isHighlighted ? styles.audioHighlight : ''} ${isSelected ? styles.selected : ''}`}
        style={{ backgroundColor: highlightColor || (isHighlighted ? '#fef3c7' : 'transparent') }}
        onContextMenu={(e) => { e.preventDefault(); handleLongPress(index) }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; const timer = setTimeout(() => handleLongPress(index), 450); return () => clearTimeout(timer) }}
        onClick={() => {}}>
        {showVerseNumbers && <span className={styles.verseNumber}>{index + 1}</span>}
        <span className={styles.verseText} style={{ fontSize: `${fontSize}px` }}>{verse}</span>
        {isSelected && (
          <div className={styles.actions}>
            <button className={styles.actionBtn} onClick={() => handleBookmark(index)} title="Bookmark"><Bookmark size={16} className={isBookmarkedRef ? styles.activeIcon : ''} /></button>
            <button className={styles.actionBtn} onClick={() => setShowHighlightOptions(showHighlightOpts ? null : index)} title="Highlight"><Highlighter size={16} /></button>
            <button className={styles.actionBtn} onClick={() => handleAddNote(index)} title="Add Note"><PenLine size={16} /></button>
            <button className={styles.actionBtn} onClick={() => handleAIExplain(index)} disabled={isLoadingAI} title="AI Explain"><Sparkles size={16} /></button>
            {onSelectVerseForCrossRef && <button className={styles.actionBtn} onClick={() => handleCrossRef(index)} title="Cross References"><Link size={16} /></button>}
            <button className={styles.actionBtn} onClick={() => copyVerse(index)} title="Copy"><Copy size={16} /></button>
            <ShareButton verse={{ reference: getVerseReference(index), text: verses[index] }}
              onPostToCommunity={(verse) => { if (onPostToCommunity) onPostToCommunity(verse.reference, verse.text) }} />
          </div>
        )}
        {showHighlightOpts && (
          <div className={styles.highlightOptions}>
            {colorOptions.map((color) => (
              <button key={color.name} className={styles.colorBtn} style={{ backgroundColor: color.hex }} onClick={() => handleHighlight(index, color.name)} title={`Highlight ${color.name}`} />
            ))}
            {highlightColor && <button className={styles.removeHighlightBtn} onClick={() => handleHighlight(index, highlightColor as HighlightColor)}><X size={12} /></button>}
          </div>
        )}
        {showExplanation && explanation && (
          <div className={styles.aiExplanation}>
            <div className={styles.aiHeader}><span><Sparkles size={14} /> AI Explanation</span>
              <button className={styles.aiCloseBtn} onClick={() => setShowAI(prev => ({ ...prev, [reference]: false }))}><X size={14} /></button>
            </div>
            <p className={styles.aiText}>{explanation}</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.readerHeader}>
        <button className={styles.navBtn} onClick={onPrev}><ChevronLeft size={18} /></button>
        <div className={styles.readerTitle}><span className={styles.bookName}>{book}</span><span className={styles.chapterNum}>{chapter}</span></div>
        <button className={styles.navBtn} onClick={onNext}><ChevronRight size={18} /></button>
        <button className={styles.menuBtn} onClick={() => setShowReaderMenu(!showReaderMenu)}><MoreVertical size={18} /></button>
      </div>

      {showReaderMenu && (
        <div className={styles.readerMenu}>
          <button className={styles.menuItem} onClick={() => { setShowAudioSettings(true); setShowReaderMenu(false) }}><Volume2 size={16} /><span>Read Aloud</span></button>
          <button className={styles.menuItem} onClick={handleSummarizeChapter}>
            <BookOpen size={16} />
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>Summarize Chapter{tier !== 'elder' && <Crown size={12} style={{ color: '#c9a84c' }} />}</span>
          </button>
          <div className={styles.menuItem} onClick={() => setShowReaderMenu(false)}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 7 4 4 20 4 20 7" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="12" y1="4" x2="12" y2="20" />
                </svg>Font Size
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <button onClick={(e) => { e.stopPropagation(); decreaseFont() }} style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid var(--border-light)', background: 'var(--bg-hover)', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>A-</button>
                <span style={{ fontSize: 12, fontWeight: 600, minWidth: 30, textAlign: 'center' }}>{fontSize}px</span>
                <button onClick={(e) => { e.stopPropagation(); increaseFont() }} style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid var(--border-light)', background: 'var(--bg-hover)', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>A+</button>
              </span>
            </span>
          </div>
        </div>
      )}

      {showAudioSettings && (
        <div className={styles.audioControls}>
          <div className={styles.audioMain}>
            <button className={styles.audioPlayBtn} onClick={handlePlayChapter}>
              {isPlaying ? <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
                : <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20" /></svg>}
            </button>
            <button className={styles.audioStopBtn} onClick={handleStopAudio}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2" /></svg></button>
            <div className={styles.audioProgress}><div className={styles.audioProgressBar}><div className={styles.audioProgressFill} style={{ width: `${getProgress()}%` }} /></div><span className={styles.audioStatus}>{getStatusText()}</span></div>
          </div>
          <div className={styles.audioSettings}>
            <div className={styles.audioSettingGroup}><label>Speed</label><div className={styles.audioSpeedOptions}>{speedOptions.map((speed) => (<button key={speed} className={`${styles.audioSpeedBtn} ${settings.speed === speed ? styles.active : ''}`} onClick={() => updateSpeed(speed)}>{speed}x</button>))}</div></div>
            <div className={styles.audioSettingGroup}><label>Voice</label><div className={styles.audioVoiceOptions}>{PREMIUM_VOICES.map((voice) => (<button key={voice.id} className={`${styles.audioVoiceBtn} ${settings.voiceId === voice.id ? styles.active : ''}`} onClick={() => { updateVoice(voice.id); showToast(VOICE_TOASTS[voice.id] || 'Voice selected') }} title={`${voice.name} (${voice.language})`}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M3 21v-1a7 7 0 0 1 10-6.33" /></svg><span>{VOICE_LABELS[voice.id] || voice.name}</span></button>))}</div></div>
          </div>
        </div>
      )}

      {chapterSummary && (
        <div className={styles.aiExplanation} style={{ margin: '0 0 16px 0' }}>
          <div className={styles.aiHeader}><span><BookOpen size={14} /> Chapter Summary — {book} {chapter}</span><button className={styles.aiCloseBtn} onClick={() => setChapterSummary(null)}><X size={14} /></button></div>
          <p className={styles.aiText}>{chapterSummary}</p>
        </div>
      )}

      {loadingSummary && <div className={styles.audioLoading} style={{ margin: '0 0 16px 0', padding: 12 }}>Generating chapter summary...</div>}

      <div className={styles.verses} onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }} onTouchEnd={(e) => { const diff = touchStartX.current - e.changedTouches[0].clientX; if (Math.abs(diff) > 80) { if (diff > 0) onNext(); else onPrev() }}}>
        {verses.map((verse, index) => renderVerse(verse, index))}
      </div>

      {showNoteEditor && noteVerseRef && <NoteEditor onClose={() => { setShowNoteEditor(false); setNoteVerseRef(null) }} verseReference={noteVerseRef} />}
      {toast && <div className={styles.toast}>{toast}</div>}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  )
}