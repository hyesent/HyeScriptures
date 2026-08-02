import React, { useState, useEffect } from 'react'
import {
  getPrayers,
  deletePrayer,
  markAnswered,
  markUnanswered,
  markInProgress,
  getStats,
} from '../../lib/prayer-journal'
import type { Prayer, PrayerStatus, PrayerCategory } from '../../lib/prayer-journal'
import { PrayerEditor } from './PrayerEditor'
import { 
  Plus, 
  Search as SearchIcon, 
  X, 
  Heart, 
  CheckCircle, 
  Circle, 
  RefreshCw,
  Filter,
  Trash2,
  Edit2,
  Calendar
} from 'lucide-react'
import styles from './PrayerList.module.css'

interface PrayerListProps {
  onSelectVerse?: (reference: string) => void
}

export const PrayerList: React.FC<PrayerListProps> = ({ onSelectVerse }) => {
  const [prayers, setPrayers] = useState<Prayer[]>([])
  const [stats, setStats] = useState({ total: 0, active: 0, answered: 0 })
  const [filter, setFilter] = useState<'all' | 'active' | 'answered' | 'unanswered' | 'in-progress'>('all')
  const [showEditor, setShowEditor] = useState(false)
  const [editingPrayer, setEditingPrayer] = useState<Prayer | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    loadPrayers()
  }, [filter])

  const loadPrayers = () => {
    let all = getPrayers()
    
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      all = all.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) ||
        p.content.toLowerCase().includes(lowerQuery)
      )
    }
    
    if (filter !== 'all') {
      all = all.filter(p => p.status === filter)
    }
    
    setPrayers(all)
    setStats(getStats())
  }

  useEffect(() => {
    loadPrayers()
  }, [searchQuery])

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this prayer?')) {
      deletePrayer(id)
      loadPrayers()
    }
  }

  const handleMarkAnswered = (id: string) => {
    const details = window.prompt('How was this prayer answered?')
    if (details !== null) {
      markAnswered(id, details || 'Answered')
      loadPrayers()
    }
  }

  const handleStatusChange = (id: string, status: PrayerStatus) => {
    if (status === 'answered') {
      handleMarkAnswered(id)
    } else if (status === 'unanswered') {
      markUnanswered(id)
      loadPrayers()
    } else if (status === 'in-progress') {
      markInProgress(id)
      loadPrayers()
    }
  }

  const getStatusEmoji = (status: PrayerStatus) => {
    const emojis = {
      active: '🙏',
      answered: '✅',
      unanswered: '❌',
      'in-progress': '🔄'
    }
    return emojis[status] || '🙏'
  }

  const getStatusLabel = (status: PrayerStatus) => {
    const labels = {
      active: 'Active',
      answered: 'Answered',
      unanswered: 'Unanswered',
      'in-progress': 'In Progress'
    }
    return labels[status] || status
  }

  const getCategoryEmoji = (category: PrayerCategory) => {
    const emojis: Record<PrayerCategory, string> = {
      personal: '👤',
      family: '👪',
      friends: '🤝',
      church: '⛪',
      work: '💼',
      health: '🏥',
      finances: '💰',
      spiritual: '🙌',
      world: '🌍',
      other: '📌'
    }
    return emojis[category] || '📌'
  }

  const getCategoryLabel = (category: PrayerCategory) => {
    const labels: Record<PrayerCategory, string> = {
      personal: 'Personal',
      family: 'Family',
      friends: 'Friends',
      church: 'Church',
      work: 'Work',
      health: 'Health',
      finances: 'Finances',
      spiritual: 'Spiritual',
      world: 'World',
      other: 'Other'
    }
    return labels[category] || category
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Prayer Journal</h2>
          <span className={styles.count}>{prayers.length}</span>
        </div>
        <button className={styles.addBtn} onClick={() => setShowEditor(true)}>
          <Plus size={16} />
          New Prayer
        </button>
      </div>

      <div className={styles.searchBox}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search prayers..."
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
          <span className={styles.statNumber}>{stats.active}</span>
          <span className={styles.statLabel}>Active</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{stats.answered}</span>
          <span className={styles.statLabel}>Answered</span>
        </div>
      </div>

      <div className={styles.filters}>
        {['all', 'active', 'answered', 'unanswered', 'in-progress'].map((f) => (
          <button
            key={f}
            className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
            onClick={() => setFilter(f as typeof filter)}
          >
            {f === 'all' ? 'All' : f === 'active' ? ' Active' : 
             f === 'answered' ? ' Answered' : f === 'unanswered' ? ' Unanswered' : ' In Progress'}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {prayers.length === 0 && (
          <div className={styles.empty}>
            <Heart size={48} className={styles.emptyIcon} />
            <h3>No prayers yet</h3>
            <p>Add your first prayer</p>
          </div>
        )}

        {prayers.map(prayer => (
          <div
            key={prayer.id}
            className={`${styles.card} ${styles[prayer.status]}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.cardLeft}>
                <span className={styles.statusEmoji}>{getStatusEmoji(prayer.status)}</span>
                <span className={styles.categoryTag}>
                  {getCategoryEmoji(prayer.category)} {getCategoryLabel(prayer.category)}
                </span>
                <span className={`${styles.statusBadge} ${styles[prayer.status]}`}>
                  {getStatusLabel(prayer.status)}
                </span>
              </div>
              <div className={styles.cardActions}>
                <button
                  className={styles.editBtn}
                  onClick={() => {
                    setEditingPrayer(prayer)
                    setShowEditor(true)
                  }}
                  title="Edit"
                >
                  <Edit2 size={14} />
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(prayer.id)}
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>

            <h3 className={styles.prayerTitle}>{prayer.title}</h3>
            <p className={styles.prayerContent}>{prayer.content}</p>

            {prayer.dateAnswered && prayer.answerDetails && (
              <div className={styles.answerBox}>
                <CheckCircle size={16} className={styles.answerIcon} />
                <span className={styles.answerLabel}>Answered:</span>
                <span>{prayer.answerDetails}</span>
                <span className={styles.answerDate}>
                  <Calendar size={12} />
                  {new Date(prayer.dateAnswered).toLocaleDateString()}
                </span>
              </div>
            )}

            {prayer.tags.length > 0 && (
              <div className={styles.tags}>
                {prayer.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}

            <div className={styles.cardFooter}>
              <span className={styles.dateAdded}>
                <Calendar size={12} />
                {new Date(prayer.dateAdded).toLocaleDateString()}
              </span>
              {prayer.status !== 'answered' && (
                <div className={styles.statusActions}>
                  <button
                    className={styles.answeredBtn}
                    onClick={() => handleStatusChange(prayer.id, 'answered')}
                  >
                    <CheckCircle size={14} />
                    Mark Answered
                  </button>
                  <button
                    className={styles.inProgressBtn}
                    onClick={() => handleStatusChange(prayer.id, 'in-progress')}
                  >
                    <RefreshCw size={14} />
                    In Progress
                  </button>
                </div>
              )}
              {prayer.status === 'answered' && (
                <span className={styles.answeredDate}>
                  <CheckCircle size={12} />
                  Answered {new Date(prayer.dateAnswered!).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showEditor && (
        <PrayerEditor
          onClose={() => {
            setShowEditor(false)
            setEditingPrayer(undefined)
            loadPrayers()
          }}
          existingPrayer={editingPrayer}
        />
      )}
    </div>
  )
}