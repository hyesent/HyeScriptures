// ========== BOOKMARKS ==========
export const getBookmarks = (): string[] => {
  try {
    const data = localStorage.getItem('hyescriptures_bookmarks')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const toggleBookmark = (reference: string): boolean => {
  const bookmarks = getBookmarks()
  const index = bookmarks.indexOf(reference)
  
  if (index > -1) {
    bookmarks.splice(index, 1)
    localStorage.setItem('hyescriptures_bookmarks', JSON.stringify(bookmarks))
    return false // Removed
  } else {
    bookmarks.push(reference)
    localStorage.setItem('hyescriptures_bookmarks', JSON.stringify(bookmarks))
    return true // Added
  }
}

export const isBookmarked = (reference: string): boolean => {
  const bookmarks = getBookmarks()
  return bookmarks.includes(reference)
}

// ========== HIGHLIGHTS ==========
interface Highlight {
  reference: string
  color: 'yellow' | 'green' | 'blue' | 'pink'
}

export const getHighlights = (): Highlight[] => {
  try {
    const data = localStorage.getItem('hyescriptures_highlights')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const toggleHighlight = (reference: string, color: 'yellow' | 'green' | 'blue' | 'pink'): boolean => {
  const highlights = getHighlights()
  const index = highlights.findIndex(h => h.reference === reference)
  
  if (index > -1) {
    highlights.splice(index, 1)
    localStorage.setItem('hyescriptures_highlights', JSON.stringify(highlights))
    return false // Removed
  } else {
    highlights.push({ reference, color })
    localStorage.setItem('hyescriptures_highlights', JSON.stringify(highlights))
    return true // Added
  }
}

export const getHighlightColor = (reference: string): string | null => {
  const highlights = getHighlights()
  const found = highlights.find(h => h.reference === reference)
  return found ? found.color : null
}

export const getHighlightsByBook = (book: string): Highlight[] => {
  const highlights = getHighlights()
  return highlights.filter(h => h.reference.startsWith(book))
}

// ========== HISTORY ==========
export const getHistory = (): string[] => {
  try {
    const data = localStorage.getItem('hyescriptures_history')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const addToHistory = (reference: string): void => {
  let history = getHistory()
  history = history.filter(item => item !== reference)
  history.unshift(reference)
  if (history.length > 50) {
    history = history.slice(0, 50)
  }
  localStorage.setItem('hyescriptures_history', JSON.stringify(history))
}