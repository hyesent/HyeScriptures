import React, { useState } from 'react'
import { searchVerses } from '../../lib/search'
import { useBible } from '../../hooks/useBible'
import { Search as SearchIcon, X, BookOpen, Clock, TrendingUp } from 'lucide-react'
import styles from './Search.module.css'

interface SearchResult {
  reference: string
  text: string
}

interface SearchProps {
  onSelectVerse: (reference: string) => void
  translationId?: string
}

export const Search: React.FC<SearchProps> = ({ onSelectVerse, translationId }) => {
  const { translationId: currentTranslationId } = useBible()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (value: string) => {
    setQuery(value)
    
    if (value.length >= 2) {
      setIsSearching(true)
      try {
        const searchResults = await searchVerses(value, translationId || currentTranslationId)
        setResults(searchResults)
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsSearching(false)
      }
    } else {
      setResults([])
    }
  }

  const handleClear = () => {
    setQuery('')
    setResults([])
  }

  const handleSelect = (reference: string) => {
    onSelectVerse(reference)
    handleClear()
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <SearchIcon size={20} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Search Scripture..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          autoFocus
        />
        {query && (
          <button className={styles.clearBtn} onClick={handleClear}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search History / Trending */}
      {!query && (
        <div className={styles.suggestions}>
          <div className={styles.suggestionGroup}>
            <div className={styles.suggestionHeader}>
              <Clock size={16} />
              <span>Recent</span>
            </div>
            <div className={styles.suggestionList}>
              <button className={styles.suggestionItem}>love</button>
              <button className={styles.suggestionItem}>faith</button>
              <button className={styles.suggestionItem}>grace</button>
              <button className={styles.suggestionItem}>peace</button>
            </div>
          </div>
          <div className={styles.suggestionGroup}>
            <div className={styles.suggestionHeader}>
              <TrendingUp size={16} />
              <span>Popular</span>
            </div>
            <div className={styles.suggestionList}>
              <button className={styles.suggestionItem}>John 3:16</button>
              <button className={styles.suggestionItem}>Psalm 23</button>
              <button className={styles.suggestionItem}>Romans 8:28</button>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {query.length >= 2 && (
        <div className={styles.resultsContainer}>
          {isSearching ? (
            <div className={styles.loading}>Searching...</div>
          ) : results.length > 0 ? (
            <>
              <div className={styles.resultCount}>
                Found {results.length} verse{results.length > 1 ? 's' : ''}
              </div>
              <div className={styles.results}>
                {results.map((result) => (
                  <div
                    key={result.reference}
                    className={styles.resultItem}
                    onClick={() => handleSelect(result.reference)}
                  >
                    <span className={styles.reference}>{result.reference}</span>
                    <p className={styles.verseText}>{result.text}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noResults}>
              <SearchIcon size={32} className={styles.noResultsIcon} />
              <h3>No results found</h3>
              <p>Try a different word or phrase</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}