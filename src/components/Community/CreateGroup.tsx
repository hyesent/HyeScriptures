// src/components/Community/CreateGroup.tsx
import React, { useState } from 'react'
import { createGroup } from '../../lib/community'
import { X, Lock, Globe } from 'lucide-react'
import styles from './CreateGroup.module.css'

interface CreateGroupProps {
  onClose: () => void
  onSuccess: () => void
}

export const CreateGroup: React.FC<CreateGroupProps> = ({ onClose, onSuccess }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isPrivate, setIsPrivate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCreate = async () => {
    if (!name.trim()) { setError('Group name is required'); return }
    setLoading(true)
    setError('')
    const group = await createGroup(name.trim(), description.trim(), isPrivate)
    if (group) {
      onSuccess()
    } else {
      setError('Failed to create group. Make sure you are an Elder member.')
    }
    setLoading(false)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>Create Group</h3>
          <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>
        </div>

        <div className={styles.body}>
          <input
            type="text"
            className={styles.input}
            placeholder="Group name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <textarea
            className={styles.textarea}
            placeholder="Description (optional)"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
          />
          <button
            className={`${styles.privacyBtn} ${isPrivate ? styles.private : styles.public}`}
            onClick={() => setIsPrivate(!isPrivate)}
          >
            {isPrivate ? <Lock size={16} /> : <Globe size={16} />}
            {isPrivate ? 'Private Group' : 'Public Group'}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.createBtn} onClick={handleCreate} disabled={loading}>
            {loading ? 'Creating...' : 'Create Group'}
          </button>
        </div>
      </div>
    </div>
  )
}
