// src/lib/ai.ts
import { supabase } from './supabase'

// ========== TYPES ==========
export type AIMessage = {
  role: 'user' | 'assistant'
  content: string
}

export type AIResponse = {
  success: boolean
  data?: string
  error?: string
}

export type SermonData = {
  context: string
  greek_hebrew: string
  explanation: string
  application: string
  verses: string[]
}

export type QuizQuestion = {
  question: string
  options: string[]
  correct: number
  explanation: string
}

// ========== AI CALL WRAPPER ==========
// All AI calls go through this. Import useAILimits in components, not here.
// Components check limits BEFORE calling these functions.

// Explain a verse
export const explainVerse = async (verse: string): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'explain', verse }
    })
    
    if (error) {
      console.error('AI Explain Error:', error)
      return 'Sorry, I could not explain that verse at this time. Please try again later.'
    }
    return data?.response || 'No explanation available'
  } catch (error) {
    console.error('AI Explain Error:', error)
    return 'Sorry, I could not explain that verse at this time. Please try again later.'
  }
}

// Chat with AI
export const chatWithAI = async (messages: AIMessage[]): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'chat', messages }
    })
    
    if (error) {
      console.error('AI Chat Error:', error)
      return 'Sorry, I could not respond at this time. Please try again later.'
    }
    return data?.response || 'No response'
  } catch (error) {
    console.error('AI Chat Error:', error)
    return 'Sorry, I could not respond at this time. Please try again later.'
  }
}

// Generate sermon
export const generateSermon = async (topic: string): Promise<SermonData | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'sermon', topic }
    })
    
    if (error) {
      console.error('AI Sermon Error:', error)
      return null
    }
    return data?.response || null
  } catch (error) {
    console.error('AI Sermon Error:', error)
    return null
  }
}

// Generate quiz
export const generateQuiz = async (topic: string): Promise<QuizQuestion[]> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'quiz', topic }
    })
    
    if (error) {
      console.error('AI Quiz Error:', error)
      return []
    }
    
    const response = data?.response
    if (Array.isArray(response)) {
      return response
    }
    return []
  } catch (error) {
    console.error('AI Quiz Error:', error)
    return []
  }
}

// Generate dreamverse
export const generateDreamverse = async (): Promise<{ verse: string; meaning: string } | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'dreamverse' }
    })
    
    if (error) {
      console.error('AI Dreamverse Error:', error)
      return null
    }
    return data?.response || null
  } catch (error) {
    console.error('AI Dreamverse Error:', error)
    return null
  }
}

// Summarize chapter
export const summarizeChapter = async (book: string, chapter: number): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('ai', {
      body: { action: 'summarize', book, chapter }
    })
    
    if (error) {
      console.error('AI Summarize Error:', error)
      return 'Sorry, I could not summarize this chapter at this time.'
    }
    return data?.response || 'No summary available'
  } catch (error) {
    console.error('AI Summarize Error:', error)
    return 'Sorry, I could not summarize this chapter at this time.'
  }
}