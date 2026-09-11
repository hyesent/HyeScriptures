// src/components/ScriptureMoment/VerseModal.tsx
import React, { useState, useEffect, useMemo } from 'react'
import { getVerseText } from '../../lib/bible-loader'
import type { BibleTranslation } from '../../lib/bible-loader'
import { useVoiceAudio } from '../../hooks/useVoiceAudio'
import styles from './VerseModal.module.css'

interface VerseModalProps {
  reference: string
  bible: BibleTranslation | null
  onClose: () => void
}

const GRADIENTS = [
  { name: 'crimson', bg: 'linear-gradient(135deg, #8B0000 0%, #1a0000 100%)', accent: '#FFB3B3' },
  { name: 'forest', bg: 'linear-gradient(135deg, #1a4d1a 0%, #0a1f0a 100%)', accent: '#86efac' },
  { name: 'midnight', bg: 'linear-gradient(135deg, #0a1628 0%, #000000 100%)', accent: '#93c5fd' },
  { name: 'royal', bg: 'linear-gradient(135deg, #3d1a6e 0%, #1a0033 100%)', accent: '#d8b4fe' },
  { name: 'ocean', bg: 'linear-gradient(135deg, #0a3d5c 0%, #001a2e 100%)', accent: '#7dd3fc' },
  { name: 'sunset', bg: 'linear-gradient(135deg, #8b3a3a 0%, #3d1a00 100%)', accent: '#fdba74' },
  { name: 'rose', bg: 'linear-gradient(135deg, #5c1a3a 0%, #1f0a14 100%)', accent: '#f9a8d4' },
  { name: 'bronze', bg: 'linear-gradient(135deg, #5c4228 0%, #2d2416 100%)', accent: '#fbbf24' },
  { name: 'slate', bg: 'linear-gradient(135deg, #2d2d2d 0%, #0a0a0a 100%)', accent: '#cbd5e1' },
  { name: 'sky', bg: 'linear-gradient(135deg, #1a3d6e 0%, #0a1a2e 100%)', accent: '#93c5fd' },
  { name: 'ember', bg: 'linear-gradient(135deg, #5c2d00 0%, #1f1000 100%)', accent: '#fbbf24' },
  { name: 'amethyst', bg: 'linear-gradient(135deg, #4a1a5c 0%, #1a0a1f 100%)', accent: '#d8b4fe' },
  { name: 'emerald', bg: 'linear-gradient(135deg, #0a5c3d 0%, #001f14 100%)', accent: '#6ee7b7' },
  { name: 'plum', bg: 'linear-gradient(135deg, #3d1a3d 0%, #1a001a 100%)', accent: '#e9a8e9' },
  { name: 'gold', bg: 'linear-gradient(135deg, #5c4a1a 0%, #2d2400 100%)', accent: '#fde68a' },
]

const parseReference = (ref: string): { book: string; chapter: number; verse: number } | null => {
  const match = ref.match(/^(.+?)\s+(\d+):(\d+)/)
  if (!match) return null
  return { book: match[1].trim(), chapter: parseInt(match[2]), verse: parseInt(match[3]) }
}

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const VolumeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
)

const PauseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
)

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const VerseModal: React.FC<VerseModalProps> = ({ reference, bible, onClose }) => {
  const [verseText, setVerseText] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const { playVerse, stop, isPlaying } = useVoiceAudio()

  const gradient = useMemo(() => GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)], [])

  useEffect(() => {
    if (!bible) return
    const parsed = parseReference(reference)
    if (!parsed) return
    const text = getVerseText(bible, parsed.book, parsed.chapter, parsed.verse)
    setVerseText(text)
  }, [bible, reference])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleCopy = () => {
    if (!verseText) return
    navigator.clipboard.writeText(`${reference}\n\n"${verseText}"`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleListen = async () => {
    if (isPlaying) { stop(); return }
    if (!verseText) return
    await playVerse(verseText, reference, 'en_kjv')
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} style={{ background: gradient.bg }} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}><CloseIcon /></button>

        <div className={styles.content}>
          {verseText ? (
            <>
              <p className={styles.verseText}>"{verseText}"</p>
              <div className={styles.divider} style={{ background: gradient.accent }} />
              <p className={styles.reference} style={{ color: gradient.accent }}>{reference}</p>
              <p className={styles.version}>KJV</p>
            </>
          ) : (
            <p className={styles.loadingText}>Loading verse...</p>
          )}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.actionBtn}
            style={{ borderColor: gradient.accent, color: gradient.accent }}
            onClick={handleListen}
            disabled={!verseText}
          >
            {isPlaying ? <PauseIcon /> : <VolumeIcon />}
            <span>{isPlaying ? 'Pause' : 'Listen'}</span>
          </button>
          <button
            className={styles.actionBtn}
            style={{ borderColor: gradient.accent, color: gradient.accent }}
            onClick={handleCopy}
            disabled={!verseText}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
