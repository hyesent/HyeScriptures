import React, { useState, useEffect } from 'react'
import { getBooksBySection, getBible } from '../../lib/bible-loader'
import type { BibleTranslation } from '../../lib/bible-loader'
import { BookOpen, ChevronRight } from 'lucide-react'
import styles from './BookList.module.css'

interface BookListProps {
  onSelectBook: (book: string) => void
  translationId?: string
}

export const BookList: React.FC<BookListProps> = ({ onSelectBook, translationId = 'en_kjv' }) => {
  const [bible, setBible] = useState<BibleTranslation | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBible = async () => {
      setLoading(true)
      try {
        const bibleData = await getBible(translationId)
        setBible(bibleData)
      } catch (error) {
        console.error('Error loading Bible:', error)
      } finally {
        setLoading(false)
      }
    }
    loadBible()
  }, [translationId])

  if (loading) {
    return <div className={styles.loading}>Loading books...</div>
  }

  if (!bible) {
    return <div className={styles.error}>Failed to load Bible</div>
  }

  const sections = getBooksBySection(bible)

  return (
    <div className={styles.container}>
      {sections.map((section) => (
        <div key={section.section} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.section}</h2>
          <div className={styles.grid}>
            {section.books.map((book) => (
              <button
  key={book}
  className={styles.bookBtn}
  onClick={() => onSelectBook(book)}
>
  <div className={styles.bookIcon}>
    <BookOpen size={22} />
  </div>

  <div className={styles.bookContent}>
    <span className={styles.bookName}>{book}</span>
  </div>

  <ChevronRight size={18} className={styles.bookArrow} />
</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
