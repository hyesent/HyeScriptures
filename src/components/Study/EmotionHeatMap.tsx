import React, { useState, useMemo } from 'react'
import {
  emotionColors,
  emotionVerses,
  getVersesByEmotion,
  getEmotionStats,
  getEmotionLabel,
  getEmotionEmoji,
} from '../../data/emotions'
import type { Emotion, EmotionVerse } from '../../data/emotions'
import {
  Search as SearchIcon,
  X,
  Heart,
  Zap,
  Wind,
  Frown,
  Smile,
  Droplets,
  Sun,
  Moon,
  Filter,
  BookOpen,
  ChevronRight,
  Layers,
  BarChart3,
  Star
} from 'lucide-react'
import styles from './EmotionHeatMap.module.css'

interface EmotionHeatMapProps {
  onSelectVerse: (reference: string) => void
}

export const EmotionHeatMap: React.FC<EmotionHeatMapProps> = ({ onSelectVerse }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<Emotion | 'all'>('all')
  const [selectedBook, setSelectedBook] = useState<string>('all')
  const [minIntensity, setMinIntensity] = useState<number>(1)
  const [searchQuery, setSearchQuery] = useState('')

  const stats = useMemo(() => getEmotionStats(), [])
  const books = useMemo(() => {
    const uniqueBooks = new Set(emotionVerses.map(ev => ev.book))
    return ['all', ...Array.from(uniqueBooks).sort()]
  }, [])

  const filteredVerses = useMemo(() => {
    let results = emotionVerses

    if (selectedEmotion !== 'all') {
      results = results.filter(ev => ev.emotion === selectedEmotion)
    }

    if (selectedBook !== 'all') {
      results = results.filter(ev => ev.book === selectedBook)
    }

    results = results.filter(ev => ev.intensity >= minIntensity)

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      results = results.filter(ev =>
        ev.reference.toLowerCase().includes(lowerQuery) ||
        ev.context.toLowerCase().includes(lowerQuery)
      )
    }

    return results
  }, [selectedEmotion, selectedBook, minIntensity, searchQuery])

  const getEmotionIcon = (emotion: Emotion): React.ReactNode => {
    const icons: Record<Emotion, React.ReactNode> = {
      peace: <Wind size={16} />,
      anger: <Zap size={16} />,
      joy: <Sun size={16} />,
      sorrow: <Droplets size={16} />,
      fear: <Moon size={16} />,
      love: <Heart size={16} />,
      hope: <Smile size={16} />,
      gratitude: <Star size={16} />
    }
    return icons[emotion] || <Heart size={16} />
  }

  const getBookStats = () => {
    const bookStats: Record<string, { verses: number; emotions: Set<Emotion> }> = {}
    emotionVerses.forEach(ev => {
      if (!bookStats[ev.book]) {
        bookStats[ev.book] = { verses: 0, emotions: new Set() }
      }
      bookStats[ev.book].verses++
      bookStats[ev.book].emotions.add(ev.emotion)
    })
    return bookStats
  }

  const bookStats = useMemo(() => getBookStats(), [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <BarChart3 size={22} />
          Emotion Heat Map
        </h2>
        <p className={styles.subtitle}>Color-coded emotions in Scripture</p>
      </div>

      <div className={styles.searchBar}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search verses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
            <X size={14} />
          </button>
        )}
      </div>

      <div className={styles.legend}>
        {emotionColors.map((ec) => (
          <div
            key={ec.emotion}
            className={`${styles.legendItem} ${selectedEmotion === ec.emotion ? styles.active : ''}`}
            onClick={() => setSelectedEmotion(selectedEmotion === ec.emotion ? 'all' : ec.emotion)}
          >
            <div
              className={styles.legendColor}
              style={{ backgroundColor: ec.color }}
            />
            <span className={styles.legendLabel}>
              {getEmotionIcon(ec.emotion)} {ec.label}
            </span>
            <span className={styles.legendCount}>({stats[ec.emotion] || 0})</span>
          </div>
        ))}
      </div>

      <div className={styles.filters}>
        <div className={styles.filterGroup}>
          <BookOpen size={14} className={styles.filterIcon} />
          <select
            className={styles.filterSelect}
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
          >
            {books.map(book => (
              <option key={book} value={book}>
                {book === 'all' ? 'All Books' : book}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterGroup}>
          <Filter size={14} className={styles.filterIcon} />
          <select
            className={styles.filterSelect}
            value={minIntensity}
            onChange={(e) => setMinIntensity(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map(i => (
              <option key={i} value={i}>
                {i} Intensity {i === 5 ? '🔥' : ''}
              </option>
            ))}
          </select>
        </div>

        {selectedEmotion !== 'all' && (
          <button
            className={styles.clearBtn}
            onClick={() => setSelectedEmotion('all')}
          >
            <X size={14} />
            Clear
          </button>
        )}
      </div>

      <div className={styles.results}>
        <div className={styles.resultsHeader}>
          <span className={styles.resultsCount}>
            {filteredVerses.length} verses found
          </span>
        </div>

        <div className={styles.versesGrid}>
          {filteredVerses.map((verse) => {
            const color = emotionColors.find(ec => ec.emotion === verse.emotion)
            const icon = getEmotionIcon(verse.emotion)
            const label = getEmotionLabel(verse.emotion)

            return (
              <div
                key={verse.reference}
                className={styles.verseCard}
                style={{
                  backgroundColor: color?.bgColor || 'var(--bg-hover)',
                  borderLeftColor: color?.color || 'var(--primary)',
                }}
                onClick={() => onSelectVerse(verse.reference)}
              >
                <div className={styles.verseHeader}>
                  <span className={styles.verseIcon}>{icon}</span>
                  <span className={styles.verseReference}>{verse.reference}</span>
                  <span className={styles.verseIntensity}>
                    {Array.from({ length: verse.intensity }, (_, i) => (
                      <span key={i} className={styles.intensityDot} style={{ backgroundColor: color?.color }} />
                    ))}
                  </span>
                </div>
                <div className={styles.verseEmotion}>
                  <span className={styles.verseEmotionLabel} style={{ color: color?.color }}>
                    {label}
                  </span>
                  <span className={styles.verseContext}>{verse.context}</span>
                </div>
                <div className={styles.verseBook}>
                  <BookOpen size={12} />
                  {verse.book}
                </div>
              </div>
            )
          })}
        </div>

        {filteredVerses.length === 0 && (
          <div className={styles.empty}>
            <Filter size={48} className={styles.emptyIcon} />
            <h3>No verses match your filters</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>

      <div className={styles.bookStats}>
        <h3 className={styles.bookStatsTitle}>
          <Layers size={16} />
          Book Overview
        </h3>
        <div className={styles.bookGrid}>
          {Object.entries(bookStats).map(([book, stats]) => (
            <div
              key={book}
              className={`${styles.bookCard} ${selectedBook === book ? styles.active : ''}`}
              onClick={() => setSelectedBook(book === selectedBook ? 'all' : book)}
            >
              <span className={styles.bookName}>{book}</span>
              <span className={styles.bookVerses}>{stats.verses} verses</span>
              <span className={styles.bookEmotions}>
                {Array.from(stats.emotions).map(e => getEmotionIcon(e))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}