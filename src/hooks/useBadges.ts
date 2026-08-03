import { useState, useEffect } from 'react'
import { getEarnedBadges } from '../data/badges'
import type { Badge } from '../data/badges'
import { useAuth } from './useAuth'
import { useChapterProgress } from './useChapterProgress'

export const useBadges = () => {
  const { user } = useAuth()
  const { getStats } = useChapterProgress()
  const [badges, setBadges] = useState<Badge[]>([])
  const [newBadges, setNewBadges] = useState<Badge[]>([])
  const [totalBadges, setTotalBadges] = useState(0)

  useEffect(() => {
    if (user) {
      const streak = user.streak || 0
      const stats = getStats()
      const versesRead = stats.totalChaptersRead // Use chapter progress as verse proxy
      const completedPlans: string[] = []
      
      const earned = getEarnedBadges(streak, versesRead, completedPlans)
      setBadges(earned)
      setTotalBadges(earned.length)
    }
  }, [user])

  const checkNewBadges = (newStreak: number, newVerses: number, newPlans: string[]): Badge[] => {
    const earned = getEarnedBadges(newStreak, newVerses, newPlans)
    return earned.filter(b => !badges.some(eb => eb.id === b.id))
  }

  return {
    badges,
    totalBadges,
    newBadges,
    checkNewBadges,
    hasBadge: (id: string) => badges.some(b => b.id === id)
  }
}
