// src/hooks/useScriptureForMoment.ts
import { useState, useCallback } from 'react'
import { useAILimits } from './useAILimits'
import {
  generateScriptureMoment,
  getHistory,
  saveToHistory,
  deleteFromHistory,
  clearHistory,
} from '../lib/scripture-for-moment'
import type { ScriptureMoment } from '../lib/scripture-for-moment'

export const useScriptureForMoment = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [current, setCurrent] = useState<ScriptureMoment | null>(null)
  const [history, setHistory] = useState<ScriptureMoment[]>(getHistory())
  const { checkAndIncrement, getRemaining, tier } = useAILimits('scripture')

  const generate = useCallback(async (input: string): Promise<boolean> => {
    if (!input.trim()) {
      setError('Please tell us what you are carrying')
      return false
    }

    const { allowed, message } = checkAndIncrement('scripture')
    if (!allowed) {
      setError(message || 'Limit reached')
      return false
    }

    setLoading(true)
    setError(null)

    try {
      const result = await generateScriptureMoment(input.trim())
      if (!result) {
        setError('Could not find scripture for this moment. Please try again.')
        setLoading(false)
        return false
      }

      const moment: ScriptureMoment = {
        id: Date.now().toString(),
        input: input.trim(),
        references: result.references,
        word: result.word,
        prayer: result.prayer,
        createdAt: new Date().toISOString(),
      }

      setCurrent(moment)
      saveToHistory(moment)
      setHistory(getHistory())
      return true
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
      return false
    } finally {
      setLoading(false)
    }
  }, [checkAndIncrement])

  const loadFromHistory = useCallback((moment: ScriptureMoment) => {
    setCurrent(moment)
  }, [])

  const removeFromHistory = useCallback((id: string) => {
    deleteFromHistory(id)
    setHistory(getHistory())
    if (current?.id === id) setCurrent(null)
  }, [current])

  const clearAllHistory = useCallback(() => {
    clearHistory()
    setHistory([])
  }, [])

  const reset = useCallback(() => {
    setCurrent(null)
    setError(null)
  }, [])

  const remaining = getRemaining('scripture')

  return {
    loading,
    error,
    current,
    history,
    remaining,
    tier,
    generate,
    loadFromHistory,
    removeFromHistory,
    clearAllHistory,
    reset,
  }
}
