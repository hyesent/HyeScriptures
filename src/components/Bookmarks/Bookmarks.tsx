import React, { useState, useEffect } from 'react'
import { useBookmarks } from '../../hooks/useBookmarks'
import { Bookmark, X, ChevronRight, BookOpen } from 'lucide-react'
import styles from './Bookmarks.module.css'

interface BookmarksProps {
  onSelectVerse: (reference: string) => void
}

export const Bookmarks: React.FC<BookmarksProps> = ({ onSelectVerse }) => {
  const { bookmarks, toggle } = useBookmarks()
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredBookmarks, setFilteredBookmarks] = useState<string[]>([])

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = bookmarks.filter(ref => 
        ref.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredBookmarks(filtered)
    } else {
      setFilteredBookmarks(bookmarks)
    }
  }, [bookmarks, searchQuery])

  if (bookmarks.length === 0) {
    return (
      <div className={styles.empty}>
        <Bookmark size={48} className={styles.emptyIcon} />
        <h3>No bookmarks yet</h3>
        <p>Tap the bookmark icon on any verse to save it</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Bookmarks</h2>
          <span className={styles.count}>{bookmarks.length}</span>
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.list}>
        {filteredBookmarks.map((reference) => (
          <div
            key={reference}
            className={styles.bookmarkItem}
            onClick={() => onSelectVerse(reference)}
          >
            <div className={styles.bookmarkLeft}>
              <BookOpen size={16} className={styles.bookIcon} />
              <span className={styles.reference}>{reference}</span>
            </div>
            <div className={styles.bookmarkActions}>
              <button
                className={styles.removeBtn}
                onClick={(e) => {
                  e.stopPropagation()
                  toggle(reference)
                }}
                title="Remove bookmark"
              >
                <X size={16} />
              </button>
              <ChevronRight size={16} className={styles.arrow} />
            </div>
          </div>
        ))}
      </div>

      {filteredBookmarks.length === 0 && searchQuery && (
        <div className={styles.noResults}>
          <p>No bookmarks found for "{searchQuery}"</p>
        </div>
      )}
    </div>
  )
}