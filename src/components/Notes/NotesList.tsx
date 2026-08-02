import React, { useState, useEffect } from 'react'
import type { Note } from '../../lib/notes'
import { getNotes, deleteNote, searchNotes } from '../../lib/notes'
import { NoteEditor } from './NoteEditor'
import { Plus, Search as SearchIcon, X, PenLine, Tag, ChevronRight } from 'lucide-react'
import styles from './NotesList.module.css'

interface NotesListProps {
  verseReference?: string
}

export const NotesList: React.FC<NotesListProps> = ({ verseReference }) => {
  const [notes, setNotes] = useState<Note[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined)
  const [showEditor, setShowEditor] = useState(false)

  useEffect(() => {
    const allNotes = verseReference 
      ? getNotes().filter(n => n.verseReference === verseReference)
      : getNotes()
    setNotes(allNotes)
  }, [verseReference])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const results = searchNotes(query)
      setNotes(results)
    } else {
      const allNotes = verseReference 
        ? getNotes().filter(n => n.verseReference === verseReference)
        : getNotes()
      setNotes(allNotes)
    }
  }

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this note?')) {
      deleteNote(id)
      setNotes(notes.filter(n => n.id !== id))
    }
  }

  const handleEdit = (note: Note) => {
    setEditingNote(note)
    setShowEditor(true)
  }

  const handleCloseEditor = () => {
    setShowEditor(false)
    setEditingNote(undefined)
    const allNotes = verseReference 
      ? getNotes().filter(n => n.verseReference === verseReference)
      : getNotes()
    setNotes(allNotes)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2>{verseReference ? `Notes on ${verseReference}` : 'Notes'}</h2>
          <span className={styles.count}>{notes.length}</span>
        </div>
        <button className={styles.newBtn} onClick={() => setShowEditor(true)}>
          <Plus size={16} />
          <span>New Note</span>
        </button>
      </div>

      <div className={styles.searchBox}>
        <SearchIcon size={16} className={styles.searchIcon} />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search notes..."
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
        {notes.length === 0 && (
          <div className={styles.empty}>
            <PenLine size={48} className={styles.emptyIcon} />
            <h3>No notes yet</h3>
            <p>Create your first note</p>
          </div>
        )}
        {notes.map((note) => (
          <div key={note.id} className={styles.noteCard}>
            <div className={styles.noteHeader}>
              <h4>{note.title}</h4>
              <div className={styles.actions}>
                <button className={styles.editBtn} onClick={() => handleEdit(note)} title="Edit">
                  <PenLine size={14} />
                </button>
                <button className={styles.deleteBtn} onClick={() => handleDelete(note.id)} title="Delete">
                  <X size={14} />
                </button>
              </div>
            </div>
            <div className={styles.noteContent}>{note.content}</div>
            {note.tags.length > 0 && (
              <div className={styles.tags}>
                <Tag size={12} className={styles.tagIcon} />
                {note.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}
            <div className={styles.noteMeta}>
              <span>{new Date(note.updatedAt).toLocaleDateString()}</span>
              {note.verseReference && (
                <span className={styles.verseRef}>
                  <ChevronRight size={12} />
                  {note.verseReference}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {showEditor && (
        <NoteEditor
          onClose={handleCloseEditor}
          existingNote={editingNote}
          verseReference={verseReference}
        />
      )}
    </div>
  )
}