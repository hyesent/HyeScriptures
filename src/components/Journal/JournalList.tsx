import React, { useState, useEffect } from 'react'
import type { JournalEntry } from '../../lib/notes'
import { getJournal, deleteJournalEntry, searchJournal } from '../../lib/notes'
import { JournalEditor } from './JournalEditor'
import { Plus, Search as SearchIcon, X, PenLine, Tag, ChevronRight, Smile } from 'lucide-react'
import styles from './JournalList.module.css'

export const JournalList: React.FC = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [editingEntry, setEditingEntry] = useState<JournalEntry | undefined>(undefined)
  const [showEditor, setShowEditor] = useState(false)

  useEffect(() => {
    setEntries(getJournal())
  }, [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const results = searchJournal(query)
      setEntries(results)
    } else {
      setEntries(getJournal())
    }
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this journal entry?')) {
      deleteJournalEntry(id)
      setEntries(entries.filter(e => e.id !== id))
    }
  }

  const handleEdit = (entry: JournalEntry) => {
    setEditingEntry(entry)
    setShowEditor(true)
  }

  const handleCloseEditor = () => {
    setShowEditor(false)
    setEditingEntry(undefined)
    setEntries(getJournal())
  }

  const getMoodEmoji = (mood?: string): string => {
    const moodMap: Record<string, string> = {
      'happy': '😊',
      'sad': '😢',
      'angry': '😡',
      'peaceful': '😌',
      'excited': '🤩',
      'anxious': '😰',
      'thankful': '🙏',
      'hopeful': '🌟',
      'loved': '❤️',
      'lonely': '😔'
    }
    return mood && moodMap[mood] ? moodMap[mood] : '📝'
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>Journal</h2>
          <span className={styles.count}>{entries.length}</span>
        </div>
        <button className={styles.newBtn} onClick={() => setShowEditor(true)}>
          <Plus size={16} />
          <span>New Entry</span>
        </button>
      </div>

      <div className={styles.searchBox}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search journal entries..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchQuery && (
          <button className={styles.clearBtn} onClick={() => handleSearch('')}>
            <X size={14} />
          </button>
        )}
      </div>

      <div className={styles.list}>
        {entries.length === 0 && (
          <div className={styles.empty}>
            <PenLine size={48} className={styles.emptyIcon} />
            <h3>No journal entries yet</h3>
            <p>Write your first journal entry</p>
          </div>
        )}
        {entries.map((entry) => (
          <div key={entry.id} className={styles.entryCard}>
            <div className={styles.entryHeader}>
              <div className={styles.entryTitleRow}>
                <span className={styles.moodEmoji}>{getMoodEmoji(entry.mood)}</span>
                <h4>{entry.title}</h4>
              </div>
              <div className={styles.actions}>
                <button className={styles.editBtn} onClick={() => handleEdit(entry)} title="Edit">
                  <PenLine size={14} />
                </button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(entry.id)} title="Delete">
                  <X size={14} />
                </button>
              </div>
            </div>
            <div className={styles.entryContent}>{entry.content}</div>
            {entry.tags.length > 0 && (
              <div className={styles.tags}>
                <Tag size={12} className={styles.tagIcon} />
                {entry.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}
            <div className={styles.entryMeta}>
              <span>{new Date(entry.createdAt).toLocaleDateString()}</span>
              <span>{new Date(entry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        ))}
      </div>

      {showEditor && (
        <JournalEditor
          onClose={handleCloseEditor}
          existingEntry={editingEntry}
        />
      )}
    </div>
  )
}