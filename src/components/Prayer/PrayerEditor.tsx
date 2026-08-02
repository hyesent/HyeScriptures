import React, { useState, useEffect } from 'react'
import { addPrayer, updatePrayer } from '../../lib/prayer-journal'
import type { Prayer, PrayerCategory } from '../../lib/prayer-journal'
import { X, Save, Tag, Heart } from 'lucide-react'
import styles from './PrayerEditor.module.css'

interface PrayerEditorProps {
  onClose: () => void
  existingPrayer?: Prayer
}

const categories: { value: PrayerCategory; label: string; emoji: string }[] = [
  { value: 'personal', label: 'Personal', emoji: '👤' },
  { value: 'family', label: 'Family', emoji: '👪' },
  { value: 'friends', label: 'Friends', emoji: '🤝' },
  { value: 'church', label: 'Church', emoji: '⛪' },
  { value: 'work', label: 'Work', emoji: '💼' },
  { value: 'health', label: 'Health', emoji: '🏥' },
  { value: 'finances', label: 'Finances', emoji: '💰' },
  { value: 'spiritual', label: 'Spiritual', emoji: '🙌' },
  { value: 'world', label: 'World', emoji: '🌍' },
  { value: 'other', label: 'Other', emoji: '📌' },
]

export const PrayerEditor: React.FC<PrayerEditorProps> = ({ onClose, existingPrayer }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState<PrayerCategory>('personal')
  const [tags, setTags] = useState('')
  const [isPublic, setIsPublic] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (existingPrayer) {
      setTitle(existingPrayer.title)
      setContent(existingPrayer.content)
      setCategory(existingPrayer.category)
      setTags(existingPrayer.tags.join(', '))
      setIsPublic(existingPrayer.isPublic)
    }
  }, [existingPrayer])

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return

    setLoading(true)
    const tagList = tags.split(',').map(t => t.trim()).filter(t => t)

    if (existingPrayer) {
      updatePrayer(existingPrayer.id, {
        title: title.trim(),
        content: content.trim(),
        category,
        tags: tagList,
        isPublic
      })
    } else {
      addPrayer(title.trim(), content.trim(), category, tagList, isPublic)
    }

    setLoading(false)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit()
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className={styles.header}>
          <h3>{existingPrayer ? 'Edit Prayer' : 'New Prayer'}</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className={styles.body}>
          <input
            type="text"
            className={styles.titleInput}
            placeholder="Prayer title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <div className={styles.categorySelector}>
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`${styles.categoryBtn} ${category === cat.value ? styles.active : ''}`}
                onClick={() => setCategory(cat.value)}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>

          <textarea
            className={styles.contentInput}
            placeholder="Write your prayer here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
          />

          <div className={styles.tagsInputWrapper}>
            <Tag size={16} className={styles.tagsIcon} />
            <input
              type="text"
              className={styles.tagsInput}
              placeholder="Tags (comma separated)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          <label className={styles.publicToggle}>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <Heart size={14} />
            Make this prayer public
          </label>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.submitBtn} onClick={handleSubmit} disabled={loading}>
            <Save size={16} />
            {loading ? 'Saving...' : existingPrayer ? 'Update' : 'Add Prayer'}
          </button>
        </div>
      </div>
    </div>
  )
}