// src/lib/scripture-for-moment.ts
import { supabase } from './supabase'

export interface ScriptureMoment {
  id: string
  input: string
  references: string[]
  word: string
  prayer: string
  createdAt: string
}

export interface ScriptureEnvelope {
  allowed: boolean
  count: number
  limit: number
  remaining: number
  tier: 'free' | 'elder'
  response?: {
    references: string[]
    word: string
    prayer: string
  }
  message?: string
}

const HISTORY_KEY = 'hyescriptures_scripture_moments'
const MAX_HISTORY = 30

// ========== HISTORY ==========
export const getHistory = (): ScriptureMoment[] => {
  try {
    const data = localStorage.getItem(HISTORY_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const saveToHistory = (moment: ScriptureMoment) => {
  const history = getHistory()
  const updated = [moment, ...history].slice(0, MAX_HISTORY)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
}

export const deleteFromHistory = (id: string) => {
  const history = getHistory().filter(m => m.id !== id)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
}

export const clearHistory = () => {
  localStorage.removeItem(HISTORY_KEY)
}

// ========== GENERATE ==========
const getTier = (): 'free' | 'elder' => {
  try {
    const raw = localStorage.getItem('hyescriptures_tier_cache')
    if (raw) return JSON.parse(raw).tier || 'free'
  } catch {}
  return 'free'
}

const denied = (message: string): ScriptureEnvelope => ({
  allowed: false,
  count: 0,
  limit: 0,
  remaining: 0,
  tier: 'free',
  message,
})

export const generateScriptureMoment = async (input: string): Promise<ScriptureEnvelope> => {
  try {
    const { data, error } = await supabase.functions.invoke('scripture', {
      body: { input, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as ScriptureEnvelope
  } catch (error) {
    console.error('Error generating scripture moment:', error)
    return denied('Could not reach AI. Try again.')
  }
}
