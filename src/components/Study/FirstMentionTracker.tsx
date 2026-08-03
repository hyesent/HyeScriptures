import React, { useState, useMemo } from 'react'
import {
  getAllFirstMentions,
  searchFirstMentions,
  getFirstMentionsByCategory,
  getFirstMentionCategories,
  getCategoryCount,
} from '../../data/first-mentions'
import type { FirstMention, FirstMentionCategory } from '../../data/first-mentions'
import {
  Search as SearchIcon,
  X,
  Tag,
  BookOpen,
  ChevronRight,
  Sparkles,
  Hash,
  Layers,
  Globe,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  Heart,
  Shield,
  Award,
  Users,
  MapPin,
  Calendar,
  Box,
  PawPrint,
  Utensils,
  Shirt,
  Hash as HashIcon,
  Palette,
  Music,
  Crown,
  Circle
} from 'lucide-react'
import styles from './FirstMentionTracker.module.css'

interface FirstMentionTrackerProps {
  onSelectVerse: (reference: string) => void
}

// ================================================================
// CUSTOM SVG ICONS
// ================================================================

const IconTheology = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const IconCreation = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const IconCovenant = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16" />
    <path d="M4 20h16" />
    <path d="M4 8h16" />
    <path d="M4 16h16" />
    <rect x="8" y="4" width="8" height="16" rx="1" />
  </svg>
)

const IconSin = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <path d="M8 10l-2 4 6 3 6-3-2-4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
)

const IconSalvation = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
)

const IconWorship = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="2" />
    <path d="M9 9v6" />
    <path d="M15 9v6" />
  </svg>
)

const IconRelationships = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const IconProphecy = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l10 5-10 5-10-5 10-5z" />
    <path d="M2 12l10 5 10-5" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 7l10 5 10-5" />
  </svg>
)

const IconLaw = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <rect x="9" y="9" width="6" height="6" />
  </svg>
)

const IconPromise = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const IconJudgment = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <path d="M8 10l-2 4 6 3 6-3-2-4" />
  </svg>
)

const IconGrace = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const IconNames = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l10 5-10 5-10-5 10-5z" />
    <path d="M2 12l10 5 10-5" />
    <path d="M2 17l10 5 10-5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const IconPlaces = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconEvents = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="15" r="1" />
    <circle cx="16" cy="15" r="1" />
    <circle cx="8" cy="15" r="1" />
  </svg>
)

const IconObjects = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const IconAnimals = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7l3-3h5l3 3" />
    <path d="M17 7l3 3v6l-3 3-3-3v-6l3-3z" />
    <path d="M7 7l-3 3v6l3 3 3-3v-6l-3-3z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const IconFood = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2l-2 6h16l-2-6" />
    <path d="M8 8v12" />
    <path d="M16 8v12" />
    <path d="M4 20h16" />
  </svg>
)

const IconClothing = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7l3-3h5l3 3" />
    <path d="M17 7l3 3v6l-3 3-3-3v-6l3-3z" />
    <path d="M7 7l-3 3v6l3 3 3-3v-6l-3-3z" />
  </svg>
)

const IconNumbers = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <text x="2" y="18" fontSize="16" fontWeight="bold" fill="currentColor">#</text>
    <rect x="2" y="2" width="20" height="20" rx="2" />
  </svg>
)

const IconColors = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
)

const IconMonths = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <text x="7" y="20" fontSize="8" fill="currentColor">JAN</text>
  </svg>
)

const IconInstruments = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3 3 3-3-3 6 3 6-6-3-6 3 3-6-3-6 3 3z" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const IconTitles = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16" />
    <path d="M4 12h16" />
    <path d="M4 20h16" />
    <rect x="8" y="4" width="8" height="16" rx="1" />
  </svg>
)

const IconSymbols = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

// ================================================================
// ICON MAPPING
// ================================================================

const getCategoryIcon = (category: FirstMentionCategory): React.ReactNode => {
  const icons: Record<FirstMentionCategory, React.ReactNode> = {
    theology: <IconTheology />,
    creation: <IconCreation />,
    covenant: <IconCovenant />,
    sin: <IconSin />,
    salvation: <IconSalvation />,
    worship: <IconWorship />,
    relationships: <IconRelationships />,
    prophecy: <IconProphecy />,
    law: <IconLaw />,
    promise: <IconPromise />,
    judgment: <IconJudgment />,
    grace: <IconGrace />,
    names: <IconNames />,
    places: <IconPlaces />,
    events: <IconEvents />,
    objects: <IconObjects />,
    animals: <IconAnimals />,
    food: <IconFood />,
    clothing: <IconClothing />,
    numbers: <IconNumbers />,
    colors: <IconColors />,
    months: <IconMonths />,
    instruments: <IconInstruments />,
    titles: <IconTitles />,
    symbols: <IconSymbols />
  }
  return icons[category] || <Tag size={14} />
}

const getCategoryEmoji = (category: string): React.ReactNode => {
  return getCategoryIcon(category as FirstMentionCategory)
}

// ================================================================
// COMPONENT
// ================================================================

export const FirstMentionTracker: React.FC<FirstMentionTrackerProps> = ({ onSelectVerse }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<FirstMentionCategory | 'all'>('all')
  const [selectedItem, setSelectedItem] = useState<FirstMention | null>(null)

  const categories = useMemo(() => ['all', ...getFirstMentionCategories()], [])
  const categoryCounts = useMemo(() => getCategoryCount(), [])

  const filteredMentions = useMemo(() => {
    let results = getAllFirstMentions()

    if (searchQuery) {
      results = searchFirstMentions(searchQuery)
    }

    if (selectedCategory !== 'all') {
      results = results.filter(fm => fm.category === selectedCategory)
    }

    return results
  }, [searchQuery, selectedCategory])

  const handleItemClick = (item: FirstMention) => {
    setSelectedItem(selectedItem?.id === item.id ? null : item)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Tag size={22} />
          First Mention Tracker
        </h2>
        <p className={styles.subtitle}>Every word has a first appearance in Scripture</p>
      </div>

      <div className={styles.searchBar}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by word, description, or reference..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button className={styles.clearBtn} onClick={() => setSearchQuery('')}>
            <X size={14} />
          </button>
        )}
      </div>

      <div className={styles.categoryFilters}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat === 'all' ? (
              <>
                <Layers size={14} />
                All
              </>
            ) : (
              <>
                <span className={styles.categoryIcon}>{getCategoryIcon(cat as FirstMentionCategory)}</span>
                {cat}
                <span className={styles.categoryCount}>{categoryCounts[cat] || 0}</span>
              </>
            )}
          </button>
        ))}
      </div>

      <div className={styles.resultsInfo}>
        Found <strong>{filteredMentions.length}</strong> first mentions
      </div>

      <div className={styles.grid}>
        {filteredMentions.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${selectedItem?.id === item.id ? styles.expanded : ''}`}
            onClick={() => handleItemClick(item)}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>{item.icon}</span>
              <span className={styles.cardCategory}>
                {getCategoryEmoji(item.category)}
              </span>
            </div>
            <h3 className={styles.cardWord}>{item.word}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
            <div className={styles.cardReference}>
              <Hash size={12} />
              {item.reference}
            </div>

            {selectedItem?.id === item.id && (
              <div className={styles.cardExpanded}>
                <div className={styles.expandedSection}>
                  <h4>Context</h4>
                  <p>{item.context}</p>
                </div>
                <div className={styles.expandedSection}>
                  <h4>Significance</h4>
                  <p>{item.significance}</p>
                </div>
                <div className={styles.expandedSection}>
                  <h4>Related References</h4>
                  <ul>
                    {item.relatedReferences.map((ref, i) => (
                      <li key={i}>
                        <button
                          className={styles.relatedRefBtn}
                          onClick={(e) => {
                            e.stopPropagation()
                            onSelectVerse(ref)
                          }}
                        >
                          {ref}
                          <ChevronRight size={12} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={styles.readBtn}
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectVerse(item.reference)
                  }}
                >
                  <BookOpen size={14} />
                  Read in Bible
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredMentions.length === 0 && (
        <div className={styles.empty}>
          <SearchIcon size={48} className={styles.emptyIcon} />
          <h3>No first mentions found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}
