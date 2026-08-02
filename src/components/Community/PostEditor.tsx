import React, { useState } from 'react'
import type { PostType } from '../../lib/community'
import { createPost, updatePost } from '../../lib/community'
import styles from './PostEditor.module.css'

interface PostEditorProps {
  onClose: () => void
  onSuccess: () => void
  existingPost?: { id: string; content: string; post_type: PostType }
}

const postTypes: { value: PostType; label: string; emoji: string }[] = [
  { value: 'verse_reflection', label: 'Verse Reflection', emoji: '📖' },
  { value: 'testimony', label: 'Testimony', emoji: '🙌' },
  { value: 'prayer_request', label: 'Prayer Request', emoji: '🙏' },
  { value: 'bible_question', label: 'Bible Question', emoji: '❓' },
  { value: 'encouragement', label: 'Encouragement', emoji: '💪' },
]

export const PostEditor: React.FC<PostEditorProps> = ({ onClose, onSuccess, existingPost }) => {
  const [postType, setPostType] = useState<PostType>(existingPost?.post_type || 'verse_reflection')
  const [content, setContent] = useState(existingPost?.content || '')
  const [verseReference, setVerseReference] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!content.trim()) {
      setError('Please write something')
      return
    }

    setLoading(true)
    setError(null)

    try {
      if (existingPost) {
        const result = await updatePost(existingPost.id, content)
        if (result) {
          onSuccess()
          onClose()
        } else {
          setError('Failed to update post')
        }
      } else {
        const result = await createPost(postType, content, verseReference || undefined)
        if (result) {
          onSuccess()
          onClose()
        } else {
          setError('Failed to create post')
        }
      }
    } catch {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{existingPost ? 'Edit Post' : 'Create New Post'}</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.body}>
          <div className={styles.typeSelector}>
            {postTypes.map((type) => (
              <button
                key={type.value}
                className={`${styles.typeBtn} ${postType === type.value ? styles.active : ''}`}
                onClick={() => setPostType(type.value)}
                disabled={!!existingPost}
              >
                <span className={styles.typeEmoji}>{type.emoji}</span>
                <span className={styles.typeLabel}>{type.label}</span>
              </button>
            ))}
          </div>

          <textarea
            className={styles.contentInput}
            placeholder={`Write your ${postTypes.find(t => t.value === postType)?.label.toLowerCase()}...`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
          />

          {!existingPost && (
            <input
              type="text"
              className={styles.verseInput}
              placeholder="Verse reference (optional, e.g. John 3:16)"
              value={verseReference}
              onChange={(e) => setVerseReference(e.target.value)}
            />
          )}

          {error && <div className={styles.error}>{error}</div>}
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.submitBtn} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Saving...' : existingPost ? 'Update Post' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  )
}