import React from 'react'
import type { Prophecy } from '../../data/prophecies'
import styles from './ProphecyDetail.module.css'

interface ProphecyDetailProps {
  prophecy: Prophecy
  onBack: () => void
  onJumpToVerse: (reference: string) => void
}

export const ProphecyDetail: React.FC<ProphecyDetailProps> = ({ 
  prophecy, 
  onBack, 
  onJumpToVerse 
}) => {
  const getStatusLabel = (status: string) => {
    const labels: Record<string, { label: string; className: string }> = {
      'fulfilled': { label: '✅ Fulfilled', className: styles.fulfilled },
      'unfulfilled': { label: '⏳ Unfulfilled', className: styles.unfulfilled },
      'partial': { label: '🔶 Partial', className: styles.partial },
      'in-progress': { label: '🔄 In Progress', className: styles.inProgress }
    }
    return labels[status] || { label: status, className: '' }
  }

  const statusInfo = getStatusLabel(prophecy.status)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}>← Back</button>
        <span className={`${styles.statusBadge} ${statusInfo.className}`}>
          {statusInfo.label}
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.titleSection}>
          <span className={styles.categoryEmoji}>
            {prophecy.category === 'messianic' && '👑'}
            {prophecy.category === 'judgment' && '⚖️'}
            {prophecy.category === 'restoration' && '🏗️'}
            {prophecy.category === 'kingdom' && '👑'}
            {prophecy.category === 'nations' && '🌍'}
            {prophecy.category === 'end-times' && '🔮'}
            {prophecy.category === 'covenant' && '📜'}
            {prophecy.category === 'deliverance' && '🆓'}
          </span>
          <h2 className={styles.title}>{prophecy.title}</h2>
        </div>

        <div className={styles.metadata}>
          <span className={styles.metaItem}>📂 {prophecy.category}</span>
          <span className={styles.metaItem}>
            {'⭐'.repeat(prophecy.importance)}
          </span>
          <span className={styles.metaItem}>📖 {prophecy.otReference}</span>
          {prophecy.ntReference && (
            <span className={styles.metaItem}>→ 📖 {prophecy.ntReference}</span>
          )}
        </div>

        <div className={styles.description}>
          <h4>Description</h4>
          <p>{prophecy.description}</p>
        </div>

        <div className={styles.context}>
          <h4>Context</h4>
          <p>{prophecy.context}</p>
        </div>

        <div className={styles.verses}>
          <div className={styles.verseBlock}>
            <h4>📜 Old Testament</h4>
            <div className={styles.verseText}>
              <span className={styles.reference}>{prophecy.otReference}</span>
              <p>{prophecy.otText || 'Verse text not available'}</p>
              <button 
                className={styles.jumpBtn}
                onClick={() => onJumpToVerse(prophecy.otReference)}
              >
                📖 Read in Bible
              </button>
            </div>
          </div>

          {prophecy.ntReference && prophecy.ntText && (
            <div className={styles.verseBlock}>
              <h4>📖 New Testament</h4>
              <div className={styles.verseText}>
                <span className={styles.reference}>{prophecy.ntReference}</span>
                <p>{prophecy.ntText}</p>
                <button 
                  className={styles.jumpBtn}
                  onClick={() => onJumpToVerse(prophecy.ntReference!)}
                >
                  📖 Read in Bible
                </button>
              </div>
            </div>
          )}
        </div>

        {prophecy.fulfillmentDetails && (
          <div className={styles.fulfillment}>
            <h4>✓ Fulfillment</h4>
            <p>{prophecy.fulfillmentDetails}</p>
          </div>
        )}

        {prophecy.tags.length > 0 && (
          <div className={styles.tags}>
            <h4>Tags</h4>
            {prophecy.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}