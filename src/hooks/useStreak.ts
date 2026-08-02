const STREAK_KEY = 'hyescriptures_streak'

interface StreakData {
  lastOpened: string
  currentStreak: number
  bestStreak: number
}

export const useStreak = () => {
  const getStreak = (): StreakData => {
    try {
      const data = localStorage.getItem(STREAK_KEY)
      return data ? JSON.parse(data) : { lastOpened: '', currentStreak: 0, bestStreak: 0 }
    } catch {
      return { lastOpened: '', currentStreak: 0, bestStreak: 0 }
    }
  }

  const updateStreak = () => {
    const today = new Date().toISOString().split('T')[0]
    const streak = getStreak()
    
    if (streak.lastOpened === today) return streak

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
    
    if (streak.lastOpened === yesterday) {
      streak.currentStreak++
    } else {
      streak.currentStreak = 1
    }
    
    streak.lastOpened = today
    streak.bestStreak = Math.max(streak.bestStreak, streak.currentStreak)
    
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak))
    return streak
  }

  return { getStreak, updateStreak }
}