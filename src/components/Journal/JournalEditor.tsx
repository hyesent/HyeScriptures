import React, { useState, useEffect } from 'react'
import type { JournalEntry } from '../../lib/notes'
import { createJournalEntry, updateJournalEntry } from '../../lib/notes'
import styles from './JournalEditor.module.css'

interface JournalEditorProps {
  onClose: () => void
  existingEntry?: JournalEntry
}

const moodOptions = [
  { value: 'happy', label: '😊 Happy' },
  { value: 'sad', label: '😢 Sad' },
  { value: 'angry', label: '😡 Angry' },
  { value: 'peaceful', label: '😌 Peaceful' },
  { value: 'excited', label: '🤩 Excited' },
  { value: 'anxious', label: '😰 Anxious' },
  { value: 'thankful', label: '🙏 Thankful' },
  { value: 'hopeful', label: '🌟 Hopeful' },
  { value: 'loved', label: '❤️ Loved' },
  { value: 'lonely', label: '😔 Lonely' },
]

export const JournalEditor: React.FC<JournalEditorProps> = ({ onClose, existingEntry }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState('')
  const [tags, setTags] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (existingEntry) {
      setTitle(existingEntry.title)
      setContent(existingEntry.content)
      setMood(existingEntry.mood || '')
      setTags(existingEntry.tags.join(', '))
      setIsEditing(true)
    }
  }, [existingEntry])

  const handleSubmit = () => {
    if (!content.trim()) return

    const tagList = tags.split(',').map(t => t.trim()).filter(t => t)

    if (isEditing && existingEntry) {
      updateJournalEntry(existingEntry.id, {
        title: title.trim() || 'Untitled',
        content: content.trim(),
        mood: mood || undefined,
        tags: tagList,
      })
    } else {
      createJournalEntry({
        title: title.trim() || 'Untitled',
        content: content.trim(),
        mood: mood || undefined,
        tags: tagList,
      })
    }
    onClose()
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{isEditing ? 'Edit Journal Entry' : 'New Journal Entry'}</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.body}>
          <input
            type="text"
            className={styles.titleInput}
            placeholder="Entry title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className={styles.moodSelect}
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select mood...</option>
            {moodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <textarea
            className={styles.contentInput}
            placeholder="Write your journal entry here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          />

          <input
            type="text"
            className={styles.tagsInput}
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.saveBtn} onClick={handleSubmit}>
            {isEditing ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}