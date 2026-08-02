// src/hooks/useAILimits.ts
import { useState, useEffect } from 'react'
import { useSubscription } from './useSubscription'
import { useAuth } from './useAuth'

const USAGE_KEY = 'hyescriptures_ai_usage'

interface AIUsage {
  date: string
  count: number
}

const getToday = () => new Date().toISOString().split('T')[0]

const getUsage = (): AIUsage => {
  try {
    const data = localStorage.getItem(USAGE_KEY)
    if (!data) return { date: getToday(), count: 0 }
    const usage = JSON.parse(data) as AIUsage
    if (usage.date !== getToday()) return { date: getToday(), count: 0 }
    return usage
  } catch {
    return { date: getToday(), count: 0 }
  }
}

const saveUsage = (usage: AIUsage) => {
  localStorage.setItem(USAGE_KEY, JSON.stringify(usage))
}

export const useAILimits = () => {
  const { aiLimit, tier } = useSubscription()
  const { user } = useAuth()
  const [usage, setUsage] = useState<AIUsage>(getUsage())
  const [isLimited, setIsLimited] = useState(false)

  useEffect(() => {
    const current = getUsage()
    setUsage(current)
    setIsLimited(current.count >= aiLimit)
  }, [aiLimit, user])

  const checkAndIncrement = (): { allowed: boolean; message?: string } => {
    const current = getUsage()

    if (current.count >= aiLimit) {
      setIsLimited(true)
      return {
        allowed: false,
        message: tier === 'free'
          ? "You've used your 1 free AI call today. Upgrade to Pro for 7/day."
          : tier === 'pro'
            ? "You've used all 7 AI calls today. Upgrade to Elder for more."
            : "You've used all 10 AI calls today. Come back tomorrow."
      }
    }

    const updated: AIUsage = {
      date: current.date,
      count: current.count + 1,
    }
    saveUsage(updated)
    setUsage(updated)
    setIsLimited(updated.count >= aiLimit)
    return { allowed: true }
  }

  const remaining = Math.max(0, aiLimit - usage.count)
  const used = usage.count

  return {
    used,
    remaining,
    limit: aiLimit,
    isLimited,
    checkAndIncrement,
    tier,
  }
}