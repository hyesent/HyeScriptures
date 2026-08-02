// ========== TYPES ==========
export interface Note {
  id: string
  title: string
  content: string
  verseReference?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface JournalEntry {
  id: string
  title: string
  content: string
  mood?: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

// ========== STORAGE ==========
const NOTES_KEY = 'hyescriptures_notes'
const JOURNAL_KEY = 'hyescriptures_journal'

export const getNotes = (): Note[] => {
  try {
    const data = localStorage.getItem(NOTES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const saveNotes = (notes: Note[]): void => {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}

export const getJournal = (): JournalEntry[] => {
  try {
    const data = localStorage.getItem(JOURNAL_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const saveJournal = (entries: JournalEntry[]): void => {
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(entries))
}

// ========== CRUD: NOTES ==========
export const createNote = (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note => {
  const notes = getNotes()
  const newNote: Note = {
    ...note,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  notes.unshift(newNote)
  saveNotes(notes)
  return newNote
}

export const updateNote = (id: string, updates: Partial<Note>): Note | null => {
  const notes = getNotes()
  const index = notes.findIndex(n => n.id === id)
  if (index === -1) return null
  notes[index] = { ...notes[index], ...updates, updatedAt: new Date().toISOString() }
  saveNotes(notes)
  return notes[index]
}

export const deleteNote = (id: string): void => {
  const notes = getNotes()
  const filtered = notes.filter(n => n.id !== id)
  saveNotes(filtered)
}

export const getNotesByVerse = (verseReference: string): Note[] => {
  const notes = getNotes()
  return notes.filter(n => n.verseReference === verseReference)
}

export const getNotesByTag = (tag: string): Note[] => {
  const notes = getNotes()
  return notes.filter(n => n.tags.includes(tag))
}

export const searchNotes = (query: string): Note[] => {
  const notes = getNotes()
  const lowerQuery = query.toLowerCase()
  return notes.filter(n => 
    n.title.toLowerCase().includes(lowerQuery) ||
    n.content.toLowerCase().includes(lowerQuery) ||
    n.tags.some(t => t.toLowerCase().includes(lowerQuery))
  )
}

// ========== CRUD: JOURNAL ==========
export const createJournalEntry = (entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>): JournalEntry => {
  const entries = getJournal()
  const newEntry: JournalEntry = {
    ...entry,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  entries.unshift(newEntry)
  saveJournal(entries)
  return newEntry
}

export const updateJournalEntry = (id: string, updates: Partial<JournalEntry>): JournalEntry | null => {
  const entries = getJournal()
  const index = entries.findIndex(e => e.id === id)
  if (index === -1) return null
  entries[index] = { ...entries[index], ...updates, updatedAt: new Date().toISOString() }
  saveJournal(entries)
  return entries[index]
}

export const deleteJournalEntry = (id: string): void => {
  const entries = getJournal()
  const filtered = entries.filter(e => e.id !== id)
  saveJournal(filtered)
}

export const searchJournal = (query: string): JournalEntry[] => {
  const entries = getJournal()
  const lowerQuery = query.toLowerCase()
  return entries.filter(e =>
    e.title.toLowerCase().includes(lowerQuery) ||
    e.content.toLowerCase().includes(lowerQuery) ||
    e.tags.some(t => t.toLowerCase().includes(lowerQuery))
  )
}

// ========== EXPORT / IMPORT ==========
export const exportAllData = (): string => {
  return JSON.stringify({
    notes: getNotes(),
    journal: getJournal(),
    exportedAt: new Date().toISOString(),
    version: '1.0'
  }, null, 2)
}

export const importAllData = (jsonData: string): { notes: Note[]; journal: JournalEntry[] } => {
  const data = JSON.parse(jsonData)
  if (data.notes) {
    saveNotes(data.notes)
  }
  if (data.journal) {
    saveJournal(data.journal)
  }
  return {
    notes: getNotes(),
    journal: getJournal()
  }
}