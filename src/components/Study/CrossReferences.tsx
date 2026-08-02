import React, { useState, useEffect } from 'react'
import { 
  getCrossReferencesByString,
  getCrossReferencesByCategory,
  getCrossReferencesByTopic,
  searchCrossReferences,
  getAllCategories,
  getAllTheologicalTopics,
  getCrossReferencesByDifficulty,
  getCrossReferencesByImportance
} from '../../data/cross-references'
import type { CrossReference } from '../../data/cross-references'
import { 
  Link, 
  Search as SearchIcon, 
  X, 
  BookOpen, 
  Tag, 
  Star,
  Filter,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  Sliders,
  Hash
} from 'lucide-react'
import styles from './CrossReferences.module.css'

type ViewMode = 'detail' | 'category' | 'topic' | 'search' | 'browse'

interface CrossReferencesProps {
  verseReference?: string
  onSelectVerse: (reference: string) => void
  onBack?: () => void
}

export const CrossReferences: React.FC<CrossReferencesProps> = ({ 
  verseReference, 
  onSelectVerse,
  onBack 
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('detail')
  const [crossRefs, setCrossRefs] = useState<CrossReference | null>(null)
  const [categoryResults, setCategoryResults] = useState<CrossReference[]>([])
  const [topicResults, setTopicResults] = useState<CrossReference[]>([])
  const [searchResults, setSearchResults] = useState<CrossReference[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTopic, setSelectedTopic] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allTopics, setAllTopics] = useState<string[]>([])
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedImportance, setSelectedImportance] = useState<number | null>(null)

  useEffect(() => {
    setAllCategories(getAllCategories())
    setAllTopics(getAllTheologicalTopics())

    if (verseReference) {
      const refs = getCrossReferencesByString(verseReference)
      setCrossRefs(refs)
      setViewMode('detail')
    } else {
      setViewMode('browse')
    }
  }, [verseReference])

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    const results = getCrossReferencesByCategory(category as any)
    setCategoryResults(results)
    setViewMode('category')
  }

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic)
    const results = getCrossReferencesByTopic(topic)
    setTopicResults(results)
    setViewMode('topic')
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim().length >= 2) {
      const results = searchCrossReferences(query)
      setSearchResults(results)
      setViewMode('search')
    }
  }

  const handleDifficultyFilter = (difficulty: string) => {
    setSelectedDifficulty(difficulty)
    if (difficulty === 'all') {
      if (viewMode === 'category' && selectedCategory) {
        setCategoryResults(getCrossReferencesByCategory(selectedCategory as any))
      } else if (viewMode === 'topic' && selectedTopic) {
        setTopicResults(getCrossReferencesByTopic(selectedTopic))
      }
    } else {
      const filtered = getCrossReferencesByDifficulty(difficulty as any)
      setSearchResults(filtered)
      setViewMode('search')
    }
  }

  const handleImportanceFilter = (level: number) => {
    setSelectedImportance(level)
    const results = getCrossReferencesByImportance(level)
    setSearchResults(results)
    setViewMode('search')
  }

  const getDifficultyBadge = (difficulty?: string) => {
    if (!difficulty) return null
    const labels: Record<string, { label: string; className: string }> = {
      basic: { label: 'Basic', className: styles.basic },
      intermediate: { label: 'Intermediate', className: styles.intermediate },
      advanced: { label: 'Advanced', className: styles.advanced }
    }
    const info = labels[difficulty] || { label: difficulty, className: '' }
    return <span className={`${styles.difficultyBadge} ${info.className}`}>{info.label}</span>
  }

  const getImportanceStars = (importance?: number) => {
    if (!importance) return null
    return (
      <span className={styles.importanceStars}>
        {Array.from({ length: importance }, (_, i) => (
          <Star key={i} size={12} fill="#f59e0b" stroke="#f59e0b" />
        ))}
      </span>
    )
  }

  const renderDetailView = () => {
    if (!crossRefs) {
      return (
        <div className={styles.empty}>
          <Link size={48} className={styles.emptyIcon} />
          <h3>No cross-references found</h3>
          <p>Try exploring by category or topic below</p>
          <button className={styles.exploreBtn} onClick={() => setViewMode('browse')}>
            Explore Topics
            <ChevronRight size={16} />
          </button>
        </div>
      )
    }

    return (
      <div className={styles.detailContainer}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            {onBack && (
              <button className={styles.backBtn} onClick={onBack}>
                <ChevronRight size={16} />
                Back
              </button>
            )}
            <button className={styles.browseBtn} onClick={() => setViewMode('browse')}>
              <Layers size={14} />
              Browse All
            </button>
          </div>
          <div className={styles.verseInfo}>
            <h3 className={styles.verseTitle}>
              <BookOpen size={16} />
              {crossRefs.verse}
            </h3>
            {crossRefs.importance && getImportanceStars(crossRefs.importance)}
            {crossRefs.difficulty && getDifficultyBadge(crossRefs.difficulty)}
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.description}>{crossRefs.description}</p>
          
          {crossRefs.category && (
            <div className={styles.metaTags}>
              <span className={styles.metaTag}>
                <Tag size={12} />
                {crossRefs.category}
              </span>
              {crossRefs.testament && (
                <span className={styles.metaTag}>
                  <BookOpen size={12} />
                  {crossRefs.testament} testament
                </span>
              )}
              {crossRefs.theologicalTopic && crossRefs.theologicalTopic.length > 0 && (
                <div className={styles.topicTags}>
                  {crossRefs.theologicalTopic.map((topic, i) => (
                    <button 
                      key={i} 
                      className={styles.topicTag}
                      onClick={() => handleTopicClick(topic)}
                    >
                      #{topic}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className={styles.relatedVerses}>
            <h4 className={styles.relatedTitle}>Related Verses</h4>
            {crossRefs.relatedVerses.map((ref) => (
              <div
                key={ref}
                className={styles.referenceItem}
                onClick={() => onSelectVerse(ref)}
              >
                <span className={styles.referenceText}>
                  <Hash size={12} />
                  {ref}
                </span>
                <ArrowRight size={16} className={styles.arrow} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderBrowseView = () => {
    return (
      <div className={styles.browseContainer}>
        <div className={styles.browseHeader}>
          <h2 className={styles.browseTitle}>
            <Link size={22} />
            Cross References
          </h2>
          <p className={styles.browseSubtitle}>
            {allCategories.length} categories • {allTopics.length} topics
          </p>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <SearchIcon size={16} className={styles.searchIcon} />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search cross-references..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchQuery && (
              <button className={styles.clearBtn} onClick={() => handleSearch('')}>
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterGroup}>
            <Sliders size={14} className={styles.filterIcon} />
            <label>Difficulty:</label>
            <select 
              className={styles.filterSelect}
              value={selectedDifficulty}
              onChange={(e) => handleDifficultyFilter(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="basic">Basic</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Importance:</label>
            <div className={styles.importanceFilter}>
              {[5, 4, 3, 2, 1].map((level) => (
                <button
                  key={level}
                  className={`${styles.importanceBtn} ${selectedImportance === level ? styles.active : ''}`}
                  onClick={() => handleImportanceFilter(level)}
                >
                  {Array.from({ length: level }, (_, i) => (
                    <Star key={i} size={12} fill={selectedImportance === level ? '#f59e0b' : 'none'} stroke="#f59e0b" />
                  ))}
                </button>
              ))}
              {selectedImportance && (
                <button 
                  className={styles.clearBtn}
                  onClick={() => {
                    setSelectedImportance(null)
                    setViewMode('browse')
                  }}
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className={styles.browseGrid}>
          <div className={styles.categoriesSection}>
            <h3 className={styles.sectionTitle}>
              <Tag size={16} />
              Categories
            </h3>
            <div className={styles.tagGrid}>
              {allCategories.map((category) => (
                <button
                  key={category}
                  className={styles.categoryTag}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.topicsSection}>
            <h3 className={styles.sectionTitle}>
              <Sparkles size={16} />
              Theological Topics
            </h3>
            <div className={styles.tagGrid}>
              {allTopics.slice(0, 30).map((topic) => (
                <button
                  key={topic}
                  className={styles.topicTag}
                  onClick={() => handleTopicClick(topic)}
                >
                  #{topic}
                </button>
              ))}
              {allTopics.length > 30 && (
                <span className={styles.moreTopics}>+{allTopics.length - 30} more</span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderCategoryView = () => {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <button className={styles.backBtn} onClick={() => setViewMode('browse')}>
            <ChevronRight size={16} />
            Back
          </button>
          <h2 className={styles.resultsTitle}>
            <Tag size={18} />
            {selectedCategory}
          </h2>
          <span className={styles.resultsCount}>{categoryResults.length} references</span>
        </div>
        <div className={styles.resultsList}>
          {categoryResults.map((cr) => (
            <div
              key={cr.verse}
              className={styles.resultItem}
              onClick={() => {
                setCrossRefs(cr)
                setViewMode('detail')
              }}
            >
              <div className={styles.resultHeader}>
                <span className={styles.resultVerse}>
                  <Hash size={12} />
                  {cr.verse}
                </span>
                {cr.importance && getImportanceStars(cr.importance)}
                {cr.difficulty && getDifficultyBadge(cr.difficulty)}
              </div>
              <p className={styles.resultDescription}>{cr.description}</p>
              <div className={styles.resultMeta}>
                <span>
                  <BookOpen size={12} />
                  {cr.relatedVerses.length} related verses
                </span>
                <ArrowRight size={14} className={styles.resultArrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderTopicView = () => {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <button className={styles.backBtn} onClick={() => setViewMode('browse')}>
            <ChevronRight size={16} />
            Back
          </button>
          <h2 className={styles.resultsTitle}>
            <Sparkles size={18} />
            #{selectedTopic}
          </h2>
          <span className={styles.resultsCount}>{topicResults.length} references</span>
        </div>
        <div className={styles.resultsList}>
          {topicResults.map((cr) => (
            <div
              key={cr.verse}
              className={styles.resultItem}
              onClick={() => {
                setCrossRefs(cr)
                setViewMode('detail')
              }}
            >
              <div className={styles.resultHeader}>
                <span className={styles.resultVerse}>
                  <Hash size={12} />
                  {cr.verse}
                </span>
                {cr.importance && getImportanceStars(cr.importance)}
                {cr.difficulty && getDifficultyBadge(cr.difficulty)}
              </div>
              <p className={styles.resultDescription}>{cr.description}</p>
              <div className={styles.resultMeta}>
                <span>
                  <Tag size={12} />
                  {cr.category}
                </span>
                <span>
                  <BookOpen size={12} />
                  {cr.relatedVerses.length} related verses
                </span>
                <ArrowRight size={14} className={styles.resultArrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderSearchView = () => {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.resultsHeader}>
          <button className={styles.backBtn} onClick={() => setViewMode('browse')}>
            <ChevronRight size={16} />
            Back
          </button>
          <h2 className={styles.resultsTitle}>
            <SearchIcon size={18} />
            "{searchQuery}"
          </h2>
          <span className={styles.resultsCount}>{searchResults.length} results</span>
        </div>
        <div className={styles.resultsList}>
          {searchResults.length === 0 && (
            <div className={styles.noResults}>
              <SearchIcon size={48} className={styles.noResultsIcon} />
              <h3>No results found</h3>
              <p>Try different keywords or browse by category</p>
            </div>
          )}
          {searchResults.map((cr) => (
            <div
              key={cr.verse}
              className={styles.resultItem}
              onClick={() => {
                setCrossRefs(cr)
                setViewMode('detail')
              }}
            >
              <div className={styles.resultHeader}>
                <span className={styles.resultVerse}>
                  <Hash size={12} />
                  {cr.verse}
                </span>
                {cr.importance && getImportanceStars(cr.importance)}
                {cr.difficulty && getDifficultyBadge(cr.difficulty)}
              </div>
              <p className={styles.resultDescription}>{cr.description}</p>
              <div className={styles.resultMeta}>
                <span>
                  <Tag size={12} />
                  {cr.category}
                </span>
                <span>
                  <BookOpen size={12} />
                  {cr.relatedVerses.length} related verses
                </span>
                <ArrowRight size={14} className={styles.resultArrow} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (viewMode === 'detail') return renderDetailView()
  if (viewMode === 'category') return renderCategoryView()
  if (viewMode === 'topic') return renderTopicView()
  if (viewMode === 'search') return renderSearchView()
  return renderBrowseView()
}