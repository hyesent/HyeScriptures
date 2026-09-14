// src/components/ScriptureMoment/ScriptureMomentPage.tsx
import React, { useState, useEffect } from 'react'
import { useScriptureForMoment } from '../../hooks/useScriptureForMoment'
import { useBible } from '../../hooks/useBible'
import { VerseModal } from './VerseModal'
import type { ScriptureMoment } from '../../lib/scripture-for-moment'
import styles from './ScriptureMomentPage.module.css'

interface ScriptureMomentPageProps {
  onBack: () => void
}

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const HistoryIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export const ScriptureMomentPage: React.FC<ScriptureMomentPageProps> = ({ onBack }) => {
  const [input, setInput] = useState('')
  const [showHistory, setShowHistory] = useState(false)
  const [selectedVerseRef, setSelectedVerseRef] = useState<string | null>(null)
  const { bible } = useBible()
  const {
    loading, error, current, history, remaining, tier,
    generate, loadFromHistory, removeFromHistory, reset,
  } = useScriptureForMoment()

  const handleSubmit = async () => {
    if (!input.trim() || loading) return
    const success = await generate(input)
    if (success) setInput('')
  }

  const handleNewMoment = () => {
    reset()
    setInput('')
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}><BackIcon /></button>
        <div className={styles.headerTitle}>
          <h2>Scripture for the Moment</h2>
          <span className={styles.remaining}>
            {remaining} {remaining === 1 ? 'reflection' : 'reflections'} left today
          </span>
        </div>
        <button className={styles.historyBtn} onClick={() => setShowHistory(!showHistory)}>
          <HistoryIcon />
        </button>
      </div>

      {/* History drawer */}
      {showHistory && (
        <div className={styles.historyDrawer}>
          <div className={styles.historyHeader}>
            <span>Past Reflections</span>
            <button onClick={() => setShowHistory(false)}>✕</button>
          </div>
          {history.length === 0 ? (
            <p className={styles.historyEmpty}>No past reflections yet</p>
          ) : (
            <div className={styles.historyList}>
              {history.map(h => (
                <div key={h.id} className={styles.historyItem}>
                  <div onClick={() => { loadFromHistory(h); setShowHistory(false) }} className={styles.historyContent}>
                    <span className={styles.historyInput}>{h.input.slice(0, 60)}{h.input.length > 60 ? '...' : ''}</span>
                    <span className={styles.historyDate}>{new Date(h.createdAt).toLocaleDateString()}</span>
                  </div>
                  <button className={styles.historyDelete} onClick={() => removeFromHistory(h.id)}>✕</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className={styles.content}>
        {!current ? (
          <div className={styles.inputStage}>
            <div className={styles.prompt}>
              <h1 className={styles.promptTitle}>What are you carrying today?</h1>
              <p className={styles.promptSubtitle}>
                Tell us honestly — a worry, a hope, a weight. We'll find Scripture for this exact moment.
              </p>
            </div>

            <textarea
              className={styles.textarea}
              placeholder="I'm worried about my future... I don't know if things will work out."
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={5}
              disabled={loading}
              onKeyDown={e => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit()
              }}
            />

            {error && <div className={styles.error}>{error}</div>}

            <button
              className={styles.submitBtn}
              onClick={handleSubmit}
              disabled={!input.trim() || loading}
            >
              {loading ? (
                <>
                  <div className={styles.spinner} />
                  <span>Finding Scripture for this moment...</span>
                </>
              ) : (
                <>
                  <span>Find Scripture</span>
                  <SendIcon />
                </>
              )}
            </button>

            {remaining === 0 && (
              <p className={styles.limitNote}>
                {tier === 'free'
                  ? 'You\'ve used your free reflection today. Upgrade to Elder for more.'
                  : 'You\'ve used all 10 reflections today. Come back tomorrow.'}
              </p>
            )}
          </div>
        ) : (
          <div className={styles.resultStage}>
            <div className={styles.momentInput}>
              <span className={styles.momentLabel}>You shared</span>
              <p className={styles.momentText}>"{current.input}"</p>
            </div>

            <div className={styles.versesSection}>
              <span className={styles.sectionLabel}>Scripture</span>
              <div className={styles.versesList}>
                {current.references.map((ref, i) => (
                  <button
                    key={i}
                    className={styles.verseChip}
                    onClick={() => setSelectedVerseRef(ref)}
                  >
                    <BookIcon />
                    <span>{ref}</span>
                  </button>
                ))}
              </div>
            </div>

            {current.word && (
              <div className={styles.wordSection}>
                <span className={styles.sectionLabel}>A word for this moment</span>
                <p className={styles.wordText}>{current.word}</p>
              </div>
            )}

            {current.prayer && (
              <div className={styles.prayerSection}>
                <span className={styles.sectionLabel}>Prayer</span>
                <p className={styles.prayerText}>{current.prayer}</p>
              </div>
            )}

            <button className={styles.newBtn} onClick={handleNewMoment}>
              Ask for another moment
            </button>
          </div>
        )}
      </div>

      {selectedVerseRef && (
        <VerseModal
          reference={selectedVerseRef}
          bible={bible}
          onClose={() => setSelectedVerseRef(null)}
        />
      )}
    </div>
  )
}
