// src/lib/ai.ts
import { supabase } from './supabase'

// ========== TYPES ==========
export type AIMessage = {
  role: 'user' | 'assistant'
  content: string
}

export type AIEnvelope<T = any> = {
  allowed: boolean
  count: number
  limit: number
  remaining: number
  tier: 'free' | 'elder'
  response?: T
  message?: string
}

export type SermonData = {
  title?: string
  theme?: string
  opening_prayer?: string
  context?: string
  greek_hebrew?: string
  introduction?: string
  illustration?: string
  point1?: string
  point2?: string
  point3?: string
  cross_references?: string
  application?: string
  questions?: string
  challenge?: string
  closing_prayer?: string
  altar_call?: string
}

export type QuizQuestion = {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export type DreamverseResult = {
  verse: string
  meaning: string
}

export type ScriptureMomentResult = {
  references: string[]
  word: string
  prayer: string
}

// ========== TIER HELPER ==========
const getTier = (): 'free' | 'elder' => {
  try {
    const raw = localStorage.getItem('hyescriptures_tier_cache')
    if (raw) return JSON.parse(raw).tier || 'free'
  } catch {}
  return 'free'
}

const denied = (message: string): AIEnvelope => ({
  allowed: false,
  count: 0,
  limit: 0,
  remaining: 0,
  tier: 'free',
  message,
})

// ========== AI CALLS ==========

export const explainVerse = async (verse: string): Promise<AIEnvelope<string>> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'explain', verse, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<string>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}

export const chatWithAI = async (messages: AIMessage[]): Promise<AIEnvelope<string>> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'chat', messages, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<string>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}

export const generateQuiz = async (topic: string): Promise<AIEnvelope<QuizQuestion[]>> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'quiz', topic, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<QuizQuestion[]>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}

export const generateDreamverse = async (): Promise<AIEnvelope<DreamverseResult>> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'dreamverse', tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<DreamverseResult>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}

export const summarizeChapter = async (book: string, chapter: number): Promise<AIEnvelope<string>> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'summarize', book, chapter, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<string>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}

// ========== DEDICATED EDGE FUNCTIONS ==========

export const generateSermon = async (prompt: string): Promise<AIEnvelope<SermonData>> => {
  try {
    const { data, error } = await supabase.functions.invoke('sermon', {
      body: { prompt, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<SermonData>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}

export const generateScriptureMoment = async (input: string): Promise<AIEnvelope<ScriptureMomentResult>> => {
  try {
    const { data, error } = await supabase.functions.invoke('scripture', {
      body: { input, tier: getTier() }
    })
    if (error) return denied('Could not reach AI. Try again.')
    return data as AIEnvelope<ScriptureMomentResult>
  } catch {
    return denied('Could not reach AI. Try again.')
  }
}
