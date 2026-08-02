import React, { useState, useEffect } from 'react'
import type { Note } from '../../lib/notes'
import { createNote, updateNote } from '../../lib/notes'
import { X, Save, Plus, Link, Tag, BookOpen } from 'lucide-react'
import styles from './NoteEditor.module.css'

interface NoteEditorProps {
  onClose: () => void
  existingNote?: Note
  verseReference?: string
}

export const NoteEditor: React.FC<NoteEditorProps> = ({ onClose, existingNote, verseReference }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (existingNote) {
      setTitle(existingNote.title)
      setContent(existingNote.content)
      setTags(existingNote.tags.join(', '))
      setIsEditing(true)
    } else if (verseReference) {
      setTitle(`Note on ${verseReference}`)
    }
  }, [existingNote, verseReference])

  const handleSubmit = () => {
    if (!content.trim()) return

    const tagList = tags.split(',').map(t => t.trim()).filter(t => t)

    if (isEditing && existingNote) {
      updateNote(existingNote.id, {
        title: title.trim() || 'Untitled',
        content: content.trim(),
        tags: tagList,
      })
    } else {
      createNote({
        title: title.trim() || 'Untitled',
        content: content.trim(),
        verseReference: verseReference,
        tags: tagList,
      })
    }
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSubmit()
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className={styles.header}>
          <h3>
            {isEditing ? 'Edit Note' : 'New Note'}
            {verseReference && (
              <span className={styles.verseBadge}>
                <Link size={12} />
                {verseReference}
              </span>
            )}
          </h3>
          <button className={styles.closeBtn} onClick={onClose} title="Close">
            <X size={18} />
          </button>
        </div>

        <div className={styles.body}>
          <input
            type="text"
            className={styles.titleInput}
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <textarea
            className={styles.contentInput}
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
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

          {verseReference && (
            <div className={styles.verseRef}>
              <BookOpen size={14} />
              <span>Linked to: <strong>{verseReference}</strong></span>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleSubmit}>
            <Save size={16} />
            {isEditing ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  )
}