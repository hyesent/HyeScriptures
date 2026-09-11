// src/components/ScriptureMoment/HistoryPanel.tsx
import React from 'react'
import type { ScriptureMoment } from '../../lib/scripture-for-moment'
import styles from './HistoryPanel.module.css'

interface HistoryPanelProps {
  history: ScriptureMoment[]
  onSelect: (moment: ScriptureMoment) => void
  onDelete: (id: string) => void
  onClearAll: () => void
  onClose: () => void
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history, onSelect, onDelete, onClearAll, onClose,
}) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Past Reflections</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {history.length === 0 ? (
          <div className={styles.empty}>
            <p>No past reflections yet</p>
            <span>Your moments will appear here</span>
          </div>
        ) : (
          <>
            <div className={styles.list}>
              {history.map(moment => (
                <div key={moment.id} className={styles.item}>
                  <div className={styles.itemMain} onClick={() => onSelect(moment)}>
                    <p className={styles.itemInput}>
                      {moment.input.length > 80 ? moment.input.slice(0, 80) + '...' : moment.input}
                    </p>
                    <div className={styles.itemMeta}>
                      <span className={styles.itemRef}>{moment.references.join(' · ')}</span>
                      <span className={styles.itemDate}>
                        {new Date(moment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <button className={styles.deleteBtn} onClick={() => onDelete(moment.id)}>✕</button>
                </div>
              ))}
            </div>
            <button className={styles.clearBtn} onClick={onClearAll}>Clear all</button>
          </>
        )}
      </div>
    </div>
  )
}
