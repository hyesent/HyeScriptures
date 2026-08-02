import React, { useState, useEffect } from 'react'
import {
  getMemoryVerses,
  removeMemoryVerse,
  reviewVerse,
  getStats,
} from '../../lib/memory-verses'
import type { MemoryVerse } from '../../lib/memory-verses'
import { 
  Brain, 
  Search as SearchIcon, 
  X, 
  Trash2,
  CheckCircle,
  BookOpen,
  Clock,
  Sparkles,
  Calendar,
  Zap,
  Target,
  Award,
  TrendingUp
} from 'lucide-react'
import styles from './MemoryVerseList.module.css'

interface MemoryVerseListProps {
  onSelectVerse: (reference: string) => void
}

export const MemoryVerseList: React.FC<MemoryVerseListProps> = ({ onSelectVerse }) => {
  const [verses, setVerses] = useState<MemoryVerse[]>([])
  const [stats, setStats] = useState({ total: 0, dueToday: 0, accuracy: 0 })
  const [filter, setFilter] = useState<'all' | 'learning' | 'reviewing' | 'mastered'>('all')
  const [reviewingId, setReviewingId] = useState<string | null>(null)
  const [showAnswer, setShowAnswer] = useState<{ [key: string]: boolean }>({})
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadVerses()
  }, [filter, searchQuery])

  const loadVerses = () => {
    let all = getMemoryVerses()
    
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      all = all.filter(v => 
        v.reference.toLowerCase().includes(lowerQuery) ||
        v.text.toLowerCase().includes(lowerQuery)
      )
    }
    
    if (filter !== 'all') {
      all = all.filter(v => v.level === filter)
    }
    setVerses(all)
    setStats(getStats())
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Remove this memory verse?')) {
      removeMemoryVerse(id)
      loadVerses()
    }
  }

  const handleReview = (id: string, correct: boolean) => {
    reviewVerse(id, correct)
    setReviewingId(null)
    setShowAnswer(prev => ({ ...prev, [id]: false }))
    loadVerses()
  }

  const getLevelIcon = (level: string) => {
    const icons = {
      learning: <Zap size={14} />,
      reviewing: <Target size={14} />,
      mastered: <Award size={14} />
    }
    return icons[level as keyof typeof icons] || <BookOpen size={14} />
  }

  const getLevelColor = (level: string) => {
    const colors = {
      learning: '#f59e0b',
      reviewing: '#3b82f6',
      mastered: '#22c55e'
    }
    return colors[level as keyof typeof colors] || '#666'
  }

  const getLevelLabel = (level: string) => {
    const labels = {
      learning: 'Learning',
      reviewing: 'Reviewing',
      mastered: 'Mastered'
    }
    return labels[level as keyof typeof labels] || level
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Memory Verses</h2>
          <span className={styles.count}>{verses.length}</span>
        </div>
      </div>

      <div className={styles.searchBox}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search memory verses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
            <X size={14} />
          </button>
        )}
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{stats.total}</span>
          <span className={styles.statLabel}>Total</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{stats.dueToday}</span>
          <span className={styles.statLabel}>Due Today</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{Math.round(stats.accuracy * 100)}%</span>
          <span className={styles.statLabel}>Accuracy</span>
        </div>
      </div>

      <div className={styles.filters}>
        {['all', 'learning', 'reviewing', 'mastered'].map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f as typeof filter)}
          >
            {f === 'all' ? 'All' : 
             f === 'learning' ? 'Learning' : 
             f === 'reviewing' ? 'Reviewing' : 'Mastered'}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {verses.length === 0 && (
          <div className={styles.empty}>
            <Brain size={48} className={styles.emptyIcon} />
            <h3>No memory verses yet</h3>
            <p>Add verses from the Bible reader</p>
          </div>
        )}

        {verses.map(verse => {
          const isDue = new Date(verse.nextReview) <= new Date()
          const isReviewing = reviewingId === verse.id

          return (
            <div
              key={verse.id}
              className={`${styles.card} ${isDue ? styles.due : ''}`}
              style={{ borderLeftColor: getLevelColor(verse.level) }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardLeft}>
                  <span className={styles.levelIcon} style={{ color: getLevelColor(verse.level) }}>
                    {getLevelIcon(verse.level)}
                  </span>
                  <span className={styles.levelBadge} style={{ background: getLevelColor(verse.level) }}>
                    {getLevelLabel(verse.level)}
                  </span>
                  <span className={styles.reference} onClick={() => onSelectVerse(verse.reference)}>
                    <BookOpen size={14} />
                    {verse.reference}
                  </span>
                </div>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(verse.id)}
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <div className={styles.verseText}>
                {verse.text}
              </div>

              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>
                  <TrendingUp size={12} />
                  {verse.reviewCount} reviews
                </span>
                <span className={styles.metaItem}>
                  <CheckCircle size={12} />
                  {verse.correctCount} correct
                </span>
                <span className={styles.metaItem}>
                  <Calendar size={12} />
                  {new Date(verse.nextReview).toLocaleDateString()}
                </span>
                {isDue && <span className={styles.dueBadge}>Due</span>}
              </div>

              {verse.tags.length > 0 && (
                <div className={styles.tags}>
                  {verse.tags.map(tag => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
              )}

              {isReviewing ? (
                <div className={styles.reviewActions}>
                  <button
                    className={styles.correctBtn}
                    onClick={() => handleReview(verse.id, true)}
                  >
                    <CheckCircle size={16} />
                    Know It
                  </button>
                  <button
                    className={styles.incorrectBtn}
                    onClick={() => handleReview(verse.id, false)}
                  >
                    <X size={16} />
                    Need Practice
                  </button>
                </div>
              ) : (
                <button
                  className={styles.reviewBtn}
                  onClick={() => {
                    setReviewingId(verse.id)
                    setShowAnswer(prev => ({ ...prev, [verse.id]: true }))
                  }}
                  disabled={verse.level === 'mastered' && !isDue}
                >
                  {verse.level === 'mastered' && !isDue ? (
                    <>
                      <CheckCircle size={16} />
                      Mastered
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      Review
                    </>
                  )}
                </button>
              )}

              {isReviewing && showAnswer[verse.id] && (
                <div className={styles.answerBox}>
                  <p className={styles.answerText}>"{verse.text}"</p>
                  <p className={styles.answerRef}>{verse.reference}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}