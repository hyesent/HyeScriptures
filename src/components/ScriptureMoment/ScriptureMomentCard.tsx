// src/components/ScriptureMoment/ScriptureMomentCard.tsx
import React from 'react'
import styles from './ScriptureMomentCard.module.css'

interface ScriptureMomentCardProps {
  onNavigate: () => void
}

const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z" />
    <path d="M18 2l.5 2L20 4.5 18 5l-.5 2L17 5l-2-.5L17 4l.5-2z" />
    <path d="M5 18l.5 2L7 20.5 5 21l-.5 2L4 21l-2-.5L4 20l.5-2z" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

export const ScriptureMomentCard: React.FC<ScriptureMomentCardProps> = ({ onNavigate }) => {
  return (
    <div className={styles.card} onClick={onNavigate}>
      <div className={styles.header}>
        <div className={styles.iconWrap}>
          <SparkleIcon />
        </div>
        <div className={styles.textWrap}>
          <h3 className={styles.title}>Scripture for the Moment</h3>
          <p className={styles.subtitle}>Tell us what you're carrying</p>
        </div>
      </div>
      <p className={styles.description}>
        Whatever weighs on your heart — bring it here. We'll find Scripture that speaks to this moment.
      </p>
      <div className={styles.action}>
        <span>Open</span>
        <ArrowIcon />
      </div>
    </div>
  )
}
