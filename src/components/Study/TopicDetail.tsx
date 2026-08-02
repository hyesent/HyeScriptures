import React, { useState, useEffect, useMemo } from 'react'
import type { Topic } from '../../data/topics'
import { getTopicByName, getRelatedTopics } from '../../data/topics'
import { getVerses } from '../../lib/bible-loader'
import styles from './TopicDetail.module.css'

interface TopicDetailProps {
  topicName: string
  onBack: () => void
  onSelectVerse: (reference: string) => void
  onSelectTopic: (topic: Topic) => void
}

export const TopicDetail: React.FC<TopicDetailProps> = ({ 
  topicName, 
  onBack, 
  onSelectVerse,
  onSelectTopic 
}) => {
  const [topic, setTopic] = useState<Topic | undefined>(undefined)
  const [relatedTopics, setRelatedTopics] = useState<Topic[]>([])
  const [activeTab, setActiveTab] = useState<'verses' | 'related'>('verses')
  const [expandedVerses, setExpandedVerses] = useState<Set<string>>(new Set())

  useEffect(() => {
    const found = getTopicByName(topicName)
    setTopic(found)
    
    if (found) {
      const related = getRelatedTopics(topicName, 2)
      setRelatedTopics(related.slice(0, 6))
    }
  }, [topicName])

  const verseGroups = useMemo(() => {
    if (!topic) return []
    
    // Group verses by testament (simple heuristic)
    const groups: { testament: 'old' | 'new'; verses: string[] }[] = [
      { testament: 'old', verses: [] },
      { testament: 'new', verses: [] }
    ]
    
    const ntBooks = ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation']
    
    topic.verses.forEach(v => {
      const isNT = ntBooks.some(book => v.startsWith(book))
      if (isNT) {
        groups[1].verses.push(v)
      } else {
        groups[0].verses.push(v)
      }
    })
    
    return groups.filter(g => g.verses.length > 0)
  }, [topic])

  const toggleVerseExpand = (reference: string) => {
    setExpandedVerses(prev => {
      const newSet = new Set(prev)
      if (newSet.has(reference)) {
        newSet.delete(reference)
      } else {
        newSet.add(reference)
      }
      return newSet
    })
  }

  if (!topic) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading topic...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back
        </button>
        <div className={styles.headerContent}>
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{topic.name}</h2>
            {topic.importance && (
              <span className={styles.importanceBadge}>
                {'⭐'.repeat(topic.importance)}
              </span>
            )}
          </div>
          <p className={styles.description}>{topic.description}</p>
          <div className={styles.metadata}>
            {topic.category && (
              <span className={styles.categoryTag}>
                📂 {topic.category.charAt(0).toUpperCase() + topic.category.slice(1)}
              </span>
            )}
            {topic.testament && (
              <span className={styles.testamentTag}>
                {topic.testament === 'old' ? '📜 Old Testament' : 
                 topic.testament === 'new' ? '📖 New Testament' : 
                 '📚 Both Testaments'}
              </span>
            )}
            <span className={styles.verseCount}>
              📖 {topic.verses.length} verses
            </span>
          </div>
          {topic.subTopics && topic.subTopics.length > 0 && (
            <div className={styles.subTopics}>
              <strong>Sub-topics:</strong>
              {topic.subTopics.map(st => (
                <span key={st} className={styles.subTopicTag}>{st}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'verses' ? styles.active : ''}`}
          onClick={() => setActiveTab('verses')}
        >
          📖 Verses ({topic.verses.length})
        </button>
        {relatedTopics.length > 0 && (
          <button 
            className={`${styles.tab} ${activeTab === 'related' ? styles.active : ''}`}
            onClick={() => setActiveTab('related')}
          >
            🔄 Related Topics ({relatedTopics.length})
          </button>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {activeTab === 'verses' && (
          <div className={styles.versesSection}>
            {verseGroups.map((group) => (
              <div key={group.testament} className={styles.verseGroup}>
                <h3 className={styles.groupTitle}>
                  {group.testament === 'old' ? '📜 Old Testament' : '📖 New Testament'}
                  <span className={styles.groupCount}>({group.verses.length})</span>
                </h3>
                <div className={styles.verses}>
                  {group.verses.map((ref) => {
                    const isExpanded = expandedVerses.has(ref)
                    
                    return (
                      <div
                        key={ref}
                        className={`${styles.verseItem} ${isExpanded ? styles.expanded : ''}`}
                      >
                        <div 
                          className={styles.verseHeader}
                          onClick={() => toggleVerseExpand(ref)}
                        >
                          <span className={styles.reference}>{ref}</span>
                          <div className={styles.verseActions}>
                            <button 
                              className={styles.verseActionBtn}
                              onClick={(e) => {
                                e.stopPropagation()
                                onSelectVerse(ref)
                              }}
                            >
                              📖 Read
                            </button>
                            <span className={styles.expandIcon}>
                              {isExpanded ? '▲' : '▼'}
                            </span>
                          </div>
                        </div>
                        {isExpanded && (
                          <div className={styles.verseContent}>
                            <div className={styles.verseText}>
                              "{ref}" - Click "Read" to view the full verse text
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'related' && (
          <div className={styles.relatedSection}>
            <h3>🔄 Related Topics</h3>
            <p className={styles.sectionDesc}>
              Topics that share similar verses with "{topic.name}"
            </p>
            <div className={styles.relatedGrid}>
              {relatedTopics.map(rt => (
                <div
                  key={rt.name}
                  className={styles.relatedCard}
                  onClick={() => onSelectTopic(rt)}
                >
                  <h4 className={styles.relatedName}>{rt.name}</h4>
                  <p className={styles.relatedDesc}>{rt.description}</p>
                  <div className={styles.relatedMeta}>
                    <span className={styles.relatedCount}>
                      📖 {rt.verses.length} verses
                    </span>
                    {rt.importance && (
                      <span className={styles.relatedImportance}>
                        {'⭐'.repeat(rt.importance)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <button 
          className={styles.actionBtn}
          onClick={() => {
            const verses = topic.verses.join('\n')
            navigator.clipboard.writeText(verses)
          }}
        >
          📋 Copy All Verses
        </button>
        <button 
          className={styles.actionBtn}
          onClick={() => window.print()}
        >
          🖨️ Print
        </button>
      </div>
    </div>
  )
}