import React, { useState, useMemo } from 'react'
import type { Prophecy, ProphecyStatus, ProphecyCategory } from '../../data/prophecies'
import { 
  getAllProphecies, 
  getPropheciesByStatus,
  getPropheciesByCategory,
  searchProphecies,
  getProphecyStats,
  getProphecyCategories
} from '../../data/prophecies'
import { 
  Search as SearchIcon, 
  X, 
  ScrollText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  RefreshCw,
  Filter,
  ChevronRight,
  Star,
  Tag,
  BookOpen,
  Calendar,
  Globe,
  Hash
} from 'lucide-react'
import styles from './ProphecyTracker.module.css'

interface ProphecyTrackerProps {
  onSelectProphecy: (prophecy: Prophecy) => void
  onJumpToVerse: (reference: string) => void
}

export const ProphecyTracker: React.FC<ProphecyTrackerProps> = ({ 
  onSelectProphecy,
  onJumpToVerse
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<ProphecyStatus | 'all'>('all')
  const [categoryFilter, setCategoryFilter] = useState<ProphecyCategory | 'all'>('all')

  const stats = useMemo(() => getProphecyStats(), [])
  const categories = useMemo(() => getProphecyCategories(), [])

  const filteredProphecies = useMemo(() => {
    let results = getAllProphecies()

    if (searchQuery) {
      results = searchProphecies(searchQuery)
    }

    if (statusFilter !== 'all') {
      results = results.filter(p => p.status === statusFilter)
    }

    if (categoryFilter !== 'all') {
      results = results.filter(p => p.category === categoryFilter)
    }

    return results
  }, [searchQuery, statusFilter, categoryFilter])

  const getStatusBadge = (status: ProphecyStatus) => {
    const badges: Record<ProphecyStatus, { label: string; icon: React.ReactNode; className: string }> = {
      'fulfilled': { label: 'Fulfilled', icon: <CheckCircle size={12} />, className: styles.fulfilled },
      'unfulfilled': { label: 'Unfulfilled', icon: <AlertCircle size={12} />, className: styles.unfulfilled },
      'partial': { label: 'Partial', icon: <Clock size={12} />, className: styles.partial },
      'in-progress': { label: 'In Progress', icon: <RefreshCw size={12} />, className: styles.inProgress }
    }
    return badges[status] || badges['unfulfilled']
  }

  const getCategoryEmoji = (category: ProphecyCategory) => {
    const emojis: Record<ProphecyCategory, string> = {
      'messianic': '👑',
      'judgment': '⚖️',
      'restoration': '🏗️',
      'kingdom': '👑',
      'nations': '🌍',
      'end-times': '🔮',
      'covenant': '📜',
      'deliverance': '🆓'
    }
    return emojis[category] || '📖'
  }

  const getCategoryIcon = (category: ProphecyCategory) => {
    const icons: Record<ProphecyCategory, React.ReactNode> = {
      'messianic': <Star size={14} />,
      'judgment': <AlertCircle size={14} />,
      'restoration': <RefreshCw size={14} />,
      'kingdom': <Star size={14} />,
      'nations': <Globe size={14} />,
      'end-times': <Clock size={14} />,
      'covenant': <ScrollText size={14} />,
      'deliverance': <CheckCircle size={14} />
    }
    return icons[category] || <Tag size={14} />
  }

  const getImportanceStars = (importance: number) => {
    return Array.from({ length: importance }, (_, i) => (
      <Star key={i} size={12} fill="#f59e0b" stroke="#f59e0b" />
    ))
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <ScrollText size={22} />
          Prophecy Tracker
        </h2>
        <p className={styles.subtitle}>
          {stats.total} prophecies • {stats.fulfilled} fulfilled • {stats.unfulfilled} unfulfilled
        </p>
      </div>

      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.fulfilledCard}`}>
          <CheckCircle size={20} className={styles.statIcon} />
          <span className={styles.statNumber}>{stats.fulfilled}</span>
          <span className={styles.statLabel}>Fulfilled</span>
        </div>
        <div className={`${styles.statCard} ${styles.unfulfilledCard}`}>
          <AlertCircle size={20} className={styles.statIcon} />
          <span className={styles.statNumber}>{stats.unfulfilled}</span>
          <span className={styles.statLabel}>Unfulfilled</span>
        </div>
        <div className={`${styles.statCard} ${styles.partialCard}`}>
          <Clock size={20} className={styles.statIcon} />
          <span className={styles.statNumber}>{stats.partial}</span>
          <span className={styles.statLabel}>Partial</span>
        </div>
        <div className={`${styles.statCard} ${styles.inProgressCard}`}>
          <RefreshCw size={20} className={styles.statIcon} />
          <span className={styles.statNumber}>{stats.inProgress}</span>
          <span className={styles.statLabel}>In Progress</span>
        </div>
      </div>

      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <SearchIcon size={16} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search prophecies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
              <X size={14} />
            </button>
          )}
        </div>

        <div className={styles.filters}>
          <select
            className={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ProphecyStatus | 'all')}
          >
            <option value="all">All Statuses</option>
            <option value="fulfilled">✅ Fulfilled</option>
            <option value="unfulfilled">⏳ Unfulfilled</option>
            <option value="partial">🔶 Partial</option>
            <option value="in-progress">🔄 In Progress</option>
          </select>

          <select
            className={styles.filterSelect}
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as ProphecyCategory | 'all')}
          >
            <option value="all">All Categories</option>
            {Object.entries(categories).map(([category, count]) => (
              <option key={category} value={category}>
                {getCategoryEmoji(category as ProphecyCategory)} {category.charAt(0).toUpperCase() + category.slice(1)} ({count})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.prophecyList}>
        {filteredProphecies.map((prophecy) => {
          const statusBadge = getStatusBadge(prophecy.status)
          return (
            <div
              key={prophecy.id}
              className={styles.prophecyCard}
              onClick={() => onSelectProphecy(prophecy)}
            >
              <div className={styles.prophecyHeader}>
                <div className={styles.prophecyTitleSection}>
                  <span className={styles.prophecyCategory}>
                    {getCategoryEmoji(prophecy.category)}
                  </span>
                  <h3 className={styles.prophecyTitle}>{prophecy.title}</h3>
                </div>
                <span className={`${styles.statusBadge} ${statusBadge.className}`}>
                  {statusBadge.icon}
                  {statusBadge.label}
                </span>
              </div>

              <p className={styles.prophecyDescription}>{prophecy.description}</p>

              <div className={styles.prophecyReferences}>
                <span className={styles.otRef}>
                  <ScrollText size={12} />
                  {prophecy.otReference}
                </span>
                {prophecy.ntReference && (
                  <>
                    <span className={styles.arrow}>→</span>
                    <span 
                      className={styles.ntRef}
                      onClick={(e) => {
                        e.stopPropagation()
                        onJumpToVerse(prophecy.ntReference!)
                      }}
                    >
                      <BookOpen size={12} />
                      {prophecy.ntReference}
                    </span>
                  </>
                )}
              </div>

              {prophecy.fulfillmentDetails && (
                <div className={styles.fulfillment}>
                  <CheckCircle size={14} className={styles.fulfillmentIcon} />
                  <span className={styles.fulfillmentLabel}>Fulfillment:</span>
                  <span>{prophecy.fulfillmentDetails}</span>
                </div>
              )}

              <div className={styles.prophecyTags}>
                {prophecy.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>

              <div className={styles.prophecyFooter}>
                <div className={styles.prophecyMeta}>
                  <span className={styles.metaItem}>
                    <Tag size={12} />
                    {prophecy.category}
                  </span>
                  <span className={styles.importance}>
                    {getImportanceStars(prophecy.importance)}
                  </span>
                </div>
                <button className={styles.detailBtn}>
                  View Details
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {filteredProphecies.length === 0 && (
        <div className={styles.empty}>
          <SearchIcon size={48} className={styles.emptyIcon} />
          <h3>No prophecies found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}