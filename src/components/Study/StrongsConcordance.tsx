import React, { useState, useEffect, useMemo } from 'react'
import {  
  searchStrongs, 
  getStrongsByLanguage,
  getAllStrongsCategories,
  getMostFrequentWords,
} from '../../data/strongs'
import type { StrongsWord } from '../../data/strongs'
import { 
  Search as SearchIcon, 
  X, 
  BookOpen, 
  Languages, 
  Tag, 
  Star,
  Filter,
  TrendingUp,
  BookMarked,
  Info,
  ChevronRight,
  Hash
} from 'lucide-react'
import styles from './StrongsConcordance.module.css'

export const StrongsConcordance: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<StrongsWord[]>([])
  const [selectedWord, setSelectedWord] = useState<StrongsWord | null>(null)
  const [languageFilter, setLanguageFilter] = useState<'all' | 'Greek' | 'Hebrew'>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [showFrequentOnly, setShowFrequentOnly] = useState(false)
  const [loading, setLoading] = useState(false)

  const categories = useMemo(() => ['all', ...getAllStrongsCategories()], [])
  const frequentWords = useMemo(() => getMostFrequentWords(100), [])

  useEffect(() => {
    if (languageFilter === 'all') {
      setResults([])
    } else {
      let words = getStrongsByLanguage(languageFilter)
      if (categoryFilter !== 'all') {
        words = words.filter(w => w.category === categoryFilter)
      }
      if (showFrequentOnly) {
        const frequentNumbers = new Set(frequentWords.map(w => w.strongsNumber))
        words = words.filter(w => frequentNumbers.has(w.strongsNumber))
      }
      setResults(words)
    }
  }, [languageFilter, categoryFilter, showFrequentOnly, frequentWords])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setLoading(true)
    
    setTimeout(() => {
      if (query.trim().length >= 2) {
        let searchResults = searchStrongs(query)
        
        if (languageFilter !== 'all') {
          searchResults = searchResults.filter(w => w.language === languageFilter)
        }
        if (categoryFilter !== 'all') {
          searchResults = searchResults.filter(w => w.category === categoryFilter)
        }
        if (showFrequentOnly) {
          const frequentNumbers = new Set(frequentWords.map(w => w.strongsNumber))
          searchResults = searchResults.filter(w => frequentNumbers.has(w.strongsNumber))
        }
        
        setResults(searchResults)
      } else if (languageFilter === 'all') {
        setResults([])
      } else {
        let words = getStrongsByLanguage(languageFilter)
        if (categoryFilter !== 'all') {
          words = words.filter(w => w.category === categoryFilter)
        }
        if (showFrequentOnly) {
          const frequentNumbers = new Set(frequentWords.map(w => w.strongsNumber))
          words = words.filter(w => frequentNumbers.has(w.strongsNumber))
        }
        setResults(words)
      }
      
      setLoading(false)
    }, 300)
  }

  const handleSelectWord = (word: StrongsWord) => {
    setSelectedWord(word)
  }

  const handleCloseDetail = () => {
    setSelectedWord(null)
  }

  const handleClearFilters = () => {
    setSearchQuery('')
    setLanguageFilter('all')
    setCategoryFilter('all')
    setShowFrequentOnly(false)
    setResults([])
  }

  const getCategoryEmoji = (category?: string): string => {
    const emojis: Record<string, string> = {
      theology: '✝️',
      salvation: '🆓',
      worship: '🙌',
      prayer: '🙏',
      character: '⭐',
      relationships: '❤️',
      prophecy: '🔮',
      law: '📋',
      'spiritual-life': '🌱',
      ecclesiology: '⛪',
      pneumatology: '🕊️',
      wisdom: '📜',
      suffering: '💪',
      practical: '⚡',
      covenant: '📖'
    }
    return emojis[category || ''] || '📖'
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <BookMarked size={22} />
          Strong's Concordance
        </h2>
        <p className={styles.subtitle}>
          Original Greek and Hebrew word studies • {results.length} results
        </p>
      </div>

      <div className={styles.searchSection}>
        <div className={styles.searchBar}>
          <SearchIcon size={18} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search by word, Strong's number, or definition..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {searchQuery && (
            <button className={styles.clearBtn} onClick={() => handleSearch('')}>
              <X size={16} />
            </button>
          )}
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <Languages size={14} className={styles.filterIcon} />
            <button
              className={`${styles.filterBtn} ${languageFilter === 'all' ? styles.active : ''}`}
              onClick={() => setLanguageFilter('all')}
            >
              All
            </button>
            <button
              className={`${styles.filterBtn} ${languageFilter === 'Greek' ? styles.active : ''}`}
              onClick={() => setLanguageFilter('Greek')}
            >
              Greek (NT)
            </button>
            <button
              className={`${styles.filterBtn} ${languageFilter === 'Hebrew' ? styles.active : ''}`}
              onClick={() => setLanguageFilter('Hebrew')}
            >
              Hebrew (OT)
            </button>
          </div>

          <div className={styles.filterGroup}>
            <Tag size={14} className={styles.filterIcon} />
            <select
              className={styles.filterSelect}
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : `${getCategoryEmoji(cat)} ${cat.charAt(0).toUpperCase() + cat.slice(1)}`}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={showFrequentOnly}
                onChange={(e) => setShowFrequentOnly(e.target.checked)}
                className={styles.checkbox}
              />
              <TrendingUp size={14} />
              Most Frequent
            </label>
          </div>

          {(searchQuery || languageFilter !== 'all' || categoryFilter !== 'all' || showFrequentOnly) && (
            <button className={styles.clearFiltersBtn} onClick={handleClearFilters}>
              <X size={14} />
              Clear
            </button>
          )}
        </div>
      </div>

      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Searching...</p>
        </div>
      )}

      {!loading && results.length === 0 && searchQuery.length >= 2 && (
        <div className={styles.empty}>
          <SearchIcon size={48} className={styles.emptyIcon} />
          <h3>No results found</h3>
          <p>Try a different word or Strong's number</p>
        </div>
      )}

      {!loading && results.length === 0 && searchQuery.length < 2 && (
        <div className={styles.empty}>
          <BookOpen size={48} className={styles.emptyIcon} />
          <h3>Search for a word</h3>
          <p>Example: "love", "faith", "G26", or "H430"</p>
        </div>
      )}

      <div className={styles.resultsGrid}>
        {results.map((word) => (
          <div
            key={word.strongsNumber}
            className={`${styles.wordCard} ${word.occurrences >= 100 ? styles.frequent : ''}`}
            onClick={() => handleSelectWord(word)}
          >
            <div className={styles.wordHeader}>
              <span className={styles.strongsNumber}>
                <Hash size={12} />
                {word.strongsNumber}
              </span>
              <span className={styles.languageTag}>{word.language}</span>
              {word.occurrences >= 100 && (
                <span className={styles.frequentBadge}>
                  <Star size={12} />
                  Popular
                </span>
              )}
            </div>
            <div className={styles.wordBody}>
              <span className={styles.wordOriginal}>{word.word}</span>
              <span className={styles.wordTranslit}>{word.transliteration}</span>
            </div>
            <div className={styles.wordMeta}>
              <span className={styles.pronunciation}>🔊 {word.pronunciation}</span>
              <span className={styles.occurrences}>
                <BookOpen size={12} />
                {word.occurrences} occurrences
              </span>
            </div>
            <p className={styles.wordDefinition}>
              {word.definition.length > 120 
                ? word.definition.slice(0, 120) + '...' 
                : word.definition}
            </p>
            {word.bibleVerses && word.bibleVerses.length > 0 && (
              <div className={styles.wordVerses}>
                <span className={styles.versePreview}>
                  📖 {word.bibleVerses.slice(0, 2).join(', ')}
                  {word.bibleVerses.length > 2 && ` +${word.bibleVerses.length - 2} more`}
                </span>
              </div>
            )}
            <div className={styles.wordFooter}>
              <ChevronRight size={16} className={styles.arrow} />
            </div>
          </div>
        ))}
      </div>

      {selectedWord && (
        <div className={styles.modalOverlay} onClick={handleCloseDetail}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={handleCloseDetail}>
              <X size={20} />
            </button>
            
            <div className={styles.modalHeader}>
              <span className={styles.modalStrongs}>
                <Hash size={16} />
                {selectedWord.strongsNumber}
              </span>
              <span className={styles.modalLanguage}>{selectedWord.language}</span>
              {selectedWord.category && (
                <span className={styles.modalCategory}>
                  {getCategoryEmoji(selectedWord.category)} {selectedWord.category}
                </span>
              )}
            </div>
            
            <div className={styles.modalWord}>
              <span className={styles.modalOriginal}>{selectedWord.word}</span>
              <span className={styles.modalTranslit}>{selectedWord.transliteration}</span>
              <span className={styles.modalPronunciation}>🔊 {selectedWord.pronunciation}</span>
            </div>
            
            <div className={styles.modalStats}>
              <span>
                <BookOpen size={14} />
                {selectedWord.occurrences} occurrences
              </span>
              {selectedWord.rootWord && (
                <span>
                  <Info size={14} />
                  Root: {selectedWord.rootWord}
                </span>
              )}
            </div>
            
            <div className={styles.modalDefinition}>
              <h4>Definition</h4>
              <p>{selectedWord.definition}</p>
            </div>

            {selectedWord.derivativeWords && selectedWord.derivativeWords.length > 0 && (
              <div className={styles.modalDerivatives}>
                <h4>Derivative Words</h4>
                <div className={styles.derivativeList}>
                  {selectedWord.derivativeWords.map((dw, i) => (
                    <span key={i} className={styles.derivativeTag}>{dw}</span>
                  ))}
                </div>
              </div>
            )}

            {selectedWord.bibleVerses && selectedWord.bibleVerses.length > 0 && (
              <div className={styles.modalVerses}>
                <h4>Sample Verses</h4>
                <div className={styles.verseList}>
                  {selectedWord.bibleVerses.map((v, i) => (
                    <span key={i} className={styles.modalVerse}>{v}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}