export type MemorizationLevel = 'learning' | 'reviewing' | 'mastered'

export interface MemoryVerse {
  id: string
  reference: string
  text: string
  level: MemorizationLevel
  addedDate: string
  lastReviewed: string
  nextReview: string
  reviewCount: number
  correctCount: number
  incorrectCount: number
  tags: string[]
}

// ========== STORAGE ==========
const MEMORY_VERSES_KEY = 'hyescriptures_memory_verses'

export const getMemoryVerses = (): MemoryVerse[] => {
  try {
    const data = localStorage.getItem(MEMORY_VERSES_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const saveMemoryVerses = (verses: MemoryVerse[]): void => {
  localStorage.setItem(MEMORY_VERSES_KEY, JSON.stringify(verses))
}

// ========== CRUD ==========
export const addMemoryVerse = (
  reference: string,
  text: string,
  tags: string[] = []
): MemoryVerse => {
  const verses = getMemoryVerses()
  
  const newVerse: MemoryVerse = {
    id: crypto.randomUUID(),
    reference,
    text,
    level: 'learning',
    addedDate: new Date().toISOString(),
    lastReviewed: new Date().toISOString(),
    nextReview: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // Tomorrow
    reviewCount: 0,
    correctCount: 0,
    incorrectCount: 0,
    tags
  }
  
  verses.push(newVerse)
  saveMemoryVerses(verses)
  return newVerse
}

export const removeMemoryVerse = (id: string): void => {
  const verses = getMemoryVerses()
  const filtered = verses.filter(v => v.id !== id)
  saveMemoryVerses(filtered)
}

export const updateMemoryVerse = (id: string, updates: Partial<MemoryVerse>): MemoryVerse | null => {
  const verses = getMemoryVerses()
  const index = verses.findIndex(v => v.id === id)
  if (index === -1) return null
  
  verses[index] = { ...verses[index], ...updates }
  saveMemoryVerses(verses)
  return verses[index]
}

// ========== REVIEW ==========
export const reviewVerse = (id: string, correct: boolean): MemoryVerse | null => {
  const verses = getMemoryVerses()
  const index = verses.findIndex(v => v.id === id)
  if (index === -1) return null
  
  const verse = verses[index]
  
  // Update counts
  verse.reviewCount += 1
  if (correct) {
    verse.correctCount += 1
  } else {
    verse.incorrectCount += 1
  }
  
  // Calculate next review based on spaced repetition
  const daysToAdd = correct ? getReviewInterval(verse) : 1
  verse.nextReview = new Date(Date.now() + daysToAdd * 24 * 60 * 60 * 1000).toISOString()
  verse.lastReviewed = new Date().toISOString()
  
  // Update level
  if (verse.reviewCount >= 5 && verse.correctCount / verse.reviewCount >= 0.8) {
    verse.level = 'mastered'
  } else if (verse.reviewCount >= 2) {
    verse.level = 'reviewing'
  }
  
  saveMemoryVerses(verses)
  return verse
}

const getReviewInterval = (verse: MemoryVerse): number => {
  // Spaced repetition intervals
  if (verse.reviewCount <= 2) return 1
  if (verse.reviewCount <= 4) return 3
  if (verse.reviewCount <= 6) return 7
  if (verse.reviewCount <= 9) return 14
  return 30
}

// ========== QUERIES ==========
export const getVersesForReview = (): MemoryVerse[] => {
  const verses = getMemoryVerses()
  const now = new Date().toISOString()
  return verses
    .filter(v => v.nextReview <= now)
    .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime())
}

export const getVersesByLevel = (level: MemorizationLevel): MemoryVerse[] => {
  const verses = getMemoryVerses()
  return verses.filter(v => v.level === level)
}

export const getVersesByTag = (tag: string): MemoryVerse[] => {
  const verses = getMemoryVerses()
  return verses.filter(v => v.tags.includes(tag))
}

export const getDueCount = (): number => {
  return getVersesForReview().length
}

export const getStats = () => {
  const verses = getMemoryVerses()
  return {
    total: verses.length,
    learning: verses.filter(v => v.level === 'learning').length,
    reviewing: verses.filter(v => v.level === 'reviewing').length,
    mastered: verses.filter(v => v.level === 'mastered').length,
    dueToday: getDueCount(),
    accuracy: verses.reduce((acc, v) => acc + v.correctCount, 0) / 
              verses.reduce((acc, v) => acc + v.reviewCount, 0) || 0
  }
}