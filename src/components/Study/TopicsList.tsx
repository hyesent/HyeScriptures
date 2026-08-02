import React, { useState, useMemo } from 'react'
import { topics, getAllCategories } from '../../data/topics'
import type { Topic } from '../../data/topics'
import styles from './TopicsList.module.css'

interface TopicsListProps {
  onSelectTopic: (topic: Topic) => void
}

export const TopicsList: React.FC<TopicsListProps> = ({ onSelectTopic }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImportance, setSelectedImportance] = useState<number | 'all'>('all')
  const [selectedTestament, setSelectedTestament] = useState<string>('all')

  const categories = useMemo(() => ['all', ...getAllCategories()], [])
  const importanceLevels = [5, 4, 3, 2, 1]

  const filteredTopics = useMemo(() => {
    let filtered = topics

    // Filter by search query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase()
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(lowerQuery) ||
        t.description.toLowerCase().includes(lowerQuery) ||
        t.subTopics?.some(st => st.toLowerCase().includes(lowerQuery)) ||
        t.verses.some(v => v.toLowerCase().includes(lowerQuery))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(t => t.category === selectedCategory)
    }

    // Filter by importance
    if (selectedImportance !== 'all') {
      filtered = filtered.filter(t => t.importance === selectedImportance)
    }

    // Filter by testament
    if (selectedTestament !== 'all') {
      filtered = filtered.filter(t => t.testament === selectedTestament)
    }

    // Sort by importance (highest first)
    return filtered.sort((a, b) => (b.importance || 0) - (a.importance || 0))
  }, [searchQuery, selectedCategory, selectedImportance, selectedTestament])

  const getCategoryEmoji = (category?: string): string => {
    const emojis: Record<string, string> = {
      theology: '✝️',
      christology: '👑',
      pneumatology: '🕊️',
      soteriology: '🆓',
      ecclesiology: '⛪',
      eschatology: '🔮',
      wisdom: '📜',
      'spiritual-life': '🌱',
      relationships: '❤️',
      suffering: '💪',
      worship: '🙌',
      prayer: '🙏',
      covenant: '📖',
      prophecy: '🔮',
      practical: '⚡',
      law: '📋',
      grace: '💝',
      kingdom: '👑',
      bibliology: '📚',
      angelology: '👼',
      'spiritual-warfare': '⚔️'
    }
    return emojis[category || ''] || '📖'
  }

  const getImportanceStars = (importance?: number): string => {
    if (!importance) return ''
    return '⭐'.repeat(importance)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>📚 Bible Topics</h2>
        <p className={styles.subtitle}>
          {topics.length} topics • {topics.reduce((sum, t) => sum + t.verses.length, 0)} verses
        </p>
      </div>

      {/* Search and Filters */}
      <div className={styles.filters}>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search topics, subtopics, or verses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className={styles.filterGroup}>
          <select
            className={styles.filterSelect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">📂 All Categories</option>
            {categories.filter(c => c !== 'all').map(cat => (
              <option key={cat} value={cat}>
                {getCategoryEmoji(cat)} {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>

          <select
            className={styles.filterSelect}
            value={selectedImportance}
            onChange={(e) => setSelectedImportance(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
          >
            <option value="all">⭐ All Importance</option>
            {importanceLevels.map(level => (
              <option key={level} value={level}>
                {'⭐'.repeat(level)} {level}
              </option>
            ))}
          </select>

          <select
            className={styles.filterSelect}
            value={selectedTestament}
            onChange={(e) => setSelectedTestament(e.target.value)}
          >
            <option value="all">📖 All Testaments</option>
            <option value="old">Old Testament</option>
            <option value="new">New Testament</option>
            <option value="both">Both</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className={styles.resultsInfo}>
        Found {filteredTopics.length} topics
        {filteredTopics.length > 0 && ` (${filteredTopics.reduce((sum, t) => sum + t.verses.length, 0)} verses)`}
      </div>

      {/* Topics Grid */}
      <div className={styles.grid}>
        {filteredTopics.map((topic) => (
          <div
            key={topic.name}
            className={`${styles.topicCard} ${topic.importance === 5 ? styles.essential : ''}`}
            onClick={() => onSelectTopic(topic)}
          >
            <div className={styles.cardHeader}>
              <span className={styles.categoryIcon}>{getCategoryEmoji(topic.category)}</span>
              <span className={styles.importanceStars}>{getImportanceStars(topic.importance)}</span>
            </div>
            <h3 className={styles.topicName}>{topic.name}</h3>
            <p className={styles.topicDescription}>{topic.description}</p>
            {topic.subTopics && topic.subTopics.length > 0 && (
              <div className={styles.subTopics}>
                {topic.subTopics.slice(0, 3).map(st => (
                  <span key={st} className={styles.subTopicTag}>{st}</span>
                ))}
                {topic.subTopics.length > 3 && (
                  <span className={styles.subTopicMore}>+{topic.subTopics.length - 3}</span>
                )}
              </div>
            )}
            <div className={styles.cardFooter}>
              <span className={styles.verseCount}>📖 {topic.verses.length} verses</span>
              {topic.testament && (
                <span className={styles.testamentTag}>
                  {topic.testament === 'old' ? 'OT' : topic.testament === 'new' ? 'NT' : 'OT/NT'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className={styles.empty}>
          <p>No topics found matching your filters</p>
          <button 
            className={styles.clearFiltersBtn}
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
              setSelectedImportance('all')
              setSelectedTestament('all')
            }}
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}