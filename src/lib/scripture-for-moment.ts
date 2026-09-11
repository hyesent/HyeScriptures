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
interface GenerateResult {
  references: string[]
  word: string
  prayer: string
}

export const generateScriptureMoment = async (input: string): Promise<GenerateResult | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('scripture', {
      body: { input }
    })
    if (error) throw error
    if (!data?.success || !data?.response) return null
    
    const result = data.response as GenerateResult
    if (!result.references || result.references.length === 0) return null

    return {
      references: result.references.slice(0, 2),
      word: result.word || '',
      prayer: result.prayer || '',
    }
  } catch (error) {
    console.error('Error generating scripture moment:', error)
    return null
  }
}
