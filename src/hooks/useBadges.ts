import { useState, useEffect } from 'react'
import { getEarnedBadges } from '../data/badges'
import type { Badge } from '../data/badges'
import { useAuth } from './useAuth'

export const useBadges = () => {
  const { user } = useAuth()
  const [badges, setBadges] = useState<Badge[]>([])
  const [newBadges, setNewBadges] = useState<Badge[]>([])
  const [totalBadges, setTotalBadges] = useState(0)

  useEffect(() => {
    if (user) {
      // This would normally come from your database
      // For now, we'll use local storage or defaults
      const streak = user.streak || 0
      const versesRead = 0 // Track this from reading history
      const completedPlans: string[] = [] // Track from reading plans
      
      const earned = getEarnedBadges(streak, versesRead, completedPlans)
      setBadges(earned)
      setTotalBadges(earned.length)
    }
  }, [user])

  const checkNewBadges = (newStreak: number, newVerses: number, newPlans: string[]): Badge[] => {
    const earned = getEarnedBadges(newStreak, newVerses, newPlans)
    const newBadgeList = earned.filter(b => !badges.some(eb => eb.id === b.id))
    return newBadgeList
  }

  return {
    badges,
    totalBadges,
    newBadges,
    checkNewBadges,
    hasBadge: (id: string) => badges.some(b => b.id === id)
  }
}