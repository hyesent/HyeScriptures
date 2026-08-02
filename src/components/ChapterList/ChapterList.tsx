import React from 'react'
import { ChevronRight } from 'lucide-react'
import styles from './ChapterList.module.css'

interface ChapterListProps {
  totalChapters: number
  onSelectChapter: (chapter: number) => void
}

export const ChapterList: React.FC<ChapterListProps> = ({ totalChapters, onSelectChapter }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Chapters</h2>
        <span className={styles.count}>{totalChapters} chapters</span>
      </div>
      <div className={styles.grid}>
        {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chapter) => (
          <button
            key={chapter}
            className={styles.chapterBtn}
            onClick={() => onSelectChapter(chapter)}
          >
            <span className={styles.chapterNumber}>{chapter}</span>
            <ChevronRight size={14} className={styles.chapterArrow} />
          </button>
        ))}
      </div>
    </div>
  )
}