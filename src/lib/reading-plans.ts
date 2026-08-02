// ========== TYPES ==========
export interface ReadingPlan {
  id: string
  name: string
  description: string
  totalDays: number
  chaptersPerDay: number
  icon: string
}

export interface PlanProgress {
  planId: string
  completedDays: number[]
  startDate: string
  streak: number
  lastReadDate: string | null
}

// ========== PLANS ==========
export const readingPlans: ReadingPlan[] = [
  {
    id: '30-days',
    name: 'Bible in 30 Days',
    description: 'Read the entire Bible in 30 days',
    totalDays: 30,
    chaptersPerDay: 35,
    icon: '⚡'
  },
  {
    id: '90-days',
    name: 'Bible in 90 Days',
    description: 'Read through the Bible in 90 days',
    totalDays: 90,
    chaptersPerDay: 12,
    icon: '📖'
  },
  {
    id: '1-year',
    name: 'Bible in 1 Year',
    description: 'Daily Bible reading plan for one year',
    totalDays: 365,
    chaptersPerDay: 3,
    icon: '📅'
  }
]

// ========== PLAN CHAPTERS ==========
// Generate chapter assignments for each plan
export const getPlanChapters = (planId: string, day: number): string[] => {
  // This is simplified - in production, you'd have a proper reading schedule
  const allBooks = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
    'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
    '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
    'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms',
    'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah',
    'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
    'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah',
    'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
    'Haggai', 'Zechariah', 'Malachi',
    'Matthew', 'Mark', 'Luke', 'John', 'Acts',
    'Romans', '1 Corinthians', '2 Corinthians', 'Galatians',
    'Ephesians', 'Philippians', 'Colossians',
    '1 Thessalonians', '2 Thessalonians',
    '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
    'Hebrews', 'James', '1 Peter', '2 Peter',
    '1 John', '2 John', '3 John', 'Jude', 'Revelation'
  ]

  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return []

  // Calculate which chapters to read on this day
  const chaptersPerDay = plan.chaptersPerDay
  const startIndex = (day - 1) * chaptersPerDay
  const endIndex = Math.min(startIndex + chaptersPerDay, allBooks.length)

  return allBooks.slice(startIndex, endIndex)
}

// ========== STORAGE ==========
export const getPlanProgress = (planId: string): PlanProgress | null => {
  try {
    const data = localStorage.getItem(`hyescriptures_plan_${planId}`)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

export const savePlanProgress = (planId: string, progress: PlanProgress): void => {
  localStorage.setItem(`hyescriptures_plan_${planId}`, JSON.stringify(progress))
}

export const initializePlan = (planId: string): PlanProgress => {
  const existing = getPlanProgress(planId)
  if (existing) return existing

  const newProgress: PlanProgress = {
    planId,
    completedDays: [],
    startDate: new Date().toISOString().split('T')[0],
    streak: 0,
    lastReadDate: null
  }
  savePlanProgress(planId, newProgress)
  return newProgress
}

export const toggleDayComplete = (planId: string, day: number): PlanProgress => {
  let progress = getPlanProgress(planId)
  if (!progress) {
    progress = initializePlan(planId)
  }

  const index = progress.completedDays.indexOf(day)
  if (index > -1) {
    progress.completedDays.splice(index, 1)
  } else {
    progress.completedDays.push(day)
    progress.completedDays.sort((a, b) => a - b)
  }

  // Update streak
  const today = new Date().toISOString().split('T')[0]
  if (progress.lastReadDate === today) {
    // Already updated today
  } else if (progress.completedDays.length > 0) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]
    
    if (progress.lastReadDate === yesterdayStr) {
      progress.streak += 1
    } else if (progress.lastReadDate !== today) {
      progress.streak = 1
    }
    progress.lastReadDate = today
  }

  savePlanProgress(planId, progress)
  return progress
}

export const getCompletedCount = (planId: string): number => {
  const progress = getPlanProgress(planId)
  return progress ? progress.completedDays.length : 0
}

export const getStreak = (planId: string): number => {
  const progress = getPlanProgress(planId)
  return progress ? progress.streak : 0
}

export const getProgressPercentage = (planId: string): number => {
  const plan = readingPlans.find(p => p.id === planId)
  if (!plan) return 0
  const completed = getCompletedCount(planId)
  return Math.round((completed / plan.totalDays) * 100)
}