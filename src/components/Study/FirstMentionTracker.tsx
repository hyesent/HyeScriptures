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
  Heart
} from 'lucide-react'
import styles from './FirstMentionTracker.module.css'

interface FirstMentionTrackerProps {
  onSelectVerse: (reference: string) => void
}

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

  const getCategoryIcon = (category: FirstMentionCategory): React.ReactNode => {
    const icons: Record<FirstMentionCategory, React.ReactNode> = {
      theology: <Star size={14} />,
      creation: <Globe size={14} />,
      covenant: <BookOpen size={14} />,
      sin: <AlertCircle size={14} />,
      salvation: <CheckCircle size={14} />,
      worship: <Star size={14} />,
      relationships: <Heart size={14} />,
      prophecy: <Sparkles size={14} />,
      law: <BookOpen size={14} />,
      promise: <CheckCircle size={14} />,
      judgment: <AlertCircle size={14} />,
      grace: <Star size={14} />
    }
    return icons[category] || <Tag size={14} />
  }

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
                {getCategoryIcon(cat)} {cat}
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