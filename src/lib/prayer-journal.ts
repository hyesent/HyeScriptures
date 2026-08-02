export type PrayerStatus = 'active' | 'answered' | 'unanswered' | 'in-progress'
export type PrayerCategory = 'personal' | 'family' | 'friends' | 'church' | 'work' | 'health' | 'finances' | 'spiritual' | 'world' | 'other'

export interface Prayer {
  id: string
  title: string
  content: string
  category: PrayerCategory
  status: PrayerStatus
  dateAdded: string
  dateAnswered?: string
  answerDetails?: string
  tags: string[]
  isPublic: boolean
  createdAt: string
  updatedAt: string
}

// ========== STORAGE ==========
const PRAYERS_KEY = 'hyescriptures_prayers'

export const getPrayers = (): Prayer[] => {
  try {
    const data = localStorage.getItem(PRAYERS_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const savePrayers = (prayers: Prayer[]): void => {
  localStorage.setItem(PRAYERS_KEY, JSON.stringify(prayers))
}

// ========== CRUD ==========
export const addPrayer = (
  title: string,
  content: string,
  category: PrayerCategory = 'personal',
  tags: string[] = [],
  isPublic: boolean = false
): Prayer => {
  const prayers = getPrayers()
  
  const newPrayer: Prayer = {
    id: crypto.randomUUID(),
    title,
    content,
    category,
    status: 'active',
    dateAdded: new Date().toISOString(),
    tags,
    isPublic,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
  
  prayers.unshift(newPrayer)
  savePrayers(prayers)
  return newPrayer
}

export const updatePrayer = (id: string, updates: Partial<Prayer>): Prayer | null => {
  const prayers = getPrayers()
  const index = prayers.findIndex(p => p.id === id)
  if (index === -1) return null
  
  prayers[index] = { 
    ...prayers[index], 
    ...updates, 
    updatedAt: new Date().toISOString() 
  }
  savePrayers(prayers)
  return prayers[index]
}

export const deletePrayer = (id: string): void => {
  const prayers = getPrayers()
  const filtered = prayers.filter(p => p.id !== id)
  savePrayers(filtered)
}

// ========== STATUS ==========
export const markAnswered = (id: string, answerDetails: string): Prayer | null => {
  return updatePrayer(id, {
    status: 'answered',
    dateAnswered: new Date().toISOString(),
    answerDetails
  })
}

export const markUnanswered = (id: string): Prayer | null => {
  return updatePrayer(id, { status: 'unanswered' })
}

export const markInProgress = (id: string): Prayer | null => {
  return updatePrayer(id, { status: 'in-progress' })
}

// ========== QUERIES ==========
export const getPrayersByStatus = (status: PrayerStatus): Prayer[] => {
  const prayers = getPrayers()
  return prayers.filter(p => p.status === status)
}

export const getPrayersByCategory = (category: PrayerCategory): Prayer[] => {
  const prayers = getPrayers()
  return prayers.filter(p => p.category === category)
}

export const getPrayersByTag = (tag: string): Prayer[] => {
  const prayers = getPrayers()
  return prayers.filter(p => p.tags.includes(tag))
}

export const getActivePrayers = (): Prayer[] => {
  return getPrayersByStatus('active')
}

export const getAnsweredPrayers = (): Prayer[] => {
  return getPrayersByStatus('answered')
}

export const getStats = () => {
  const prayers = getPrayers()
  return {
    total: prayers.length,
    active: prayers.filter(p => p.status === 'active').length,
    answered: prayers.filter(p => p.status === 'answered').length,
    unanswered: prayers.filter(p => p.status === 'unanswered').length,
    inProgress: prayers.filter(p => p.status === 'in-progress').length,
    byCategory: prayers.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }
}

export const searchPrayers = (query: string): Prayer[] => {
  const prayers = getPrayers()
  const lowerQuery = query.toLowerCase()
  return prayers.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.content.toLowerCase().includes(lowerQuery) ||
    p.tags.some(t => t.toLowerCase().includes(lowerQuery))
  )
}