import type { BibleTranslation, BibleVerse } from './bible-loader'
import { getBible } from './bible-loader'

interface SearchResult {
  reference: string
  text: string
}

// Cache for search
let cachedBible: BibleTranslation | null = null
let currentTranslationId: string = 'en_kjv'

export const searchVerses = async (
  query: string, 
  translationId: string = 'en_kjv',
  limit: number = 50
): Promise<SearchResult[]> => {
  if (!query || query.trim().length < 2) {
    return []
  }

  try {
    // Load Bible if not cached or translation changed
    if (!cachedBible || currentTranslationId !== translationId) {
      cachedBible = await getBible(translationId)
      currentTranslationId = translationId
    }

    if (!cachedBible) {
      return []
    }

    const results: SearchResult[] = []
    const searchTerm = query.toLowerCase().trim()
    
    cachedBible.verses.forEach((verse: BibleVerse) => {
      if (verse.text.toLowerCase().includes(searchTerm)) {
        results.push({
          reference: `${verse.book} ${verse.chapter}:${verse.verse}`,
          text: verse.text
        })
      }
    })

    return results.slice(0, limit)
  } catch (error) {
    console.error('Error searching Bible:', error)
    return []
  }
}

export const searchVersesSync = (
  bible: BibleTranslation,
  query: string,
  limit: number = 50
): SearchResult[] => {
  if (!query || query.trim().length < 2) {
    return []
  }

  const results: SearchResult[] = []
  const searchTerm = query.toLowerCase().trim()
  
  bible.verses.forEach((verse: BibleVerse) => {
    if (verse.text.toLowerCase().includes(searchTerm)) {
      results.push({
        reference: `${verse.book} ${verse.chapter}:${verse.verse}`,
        text: verse.text
      })
    }
  })

  return results.slice(0, limit)
}

export const getSearchSuggestions = async (
  query: string,
  translationId: string = 'en_kjv'
): Promise<string[]> => {
  if (!query || query.trim().length < 2) {
    return []
  }

  try {
    if (!cachedBible || currentTranslationId !== translationId) {
      cachedBible = await getBible(translationId)
      currentTranslationId = translationId
    }

    if (!cachedBible) {
      return []
    }

    const suggestions: string[] = []
    const searchTerm = query.toLowerCase().trim()
    
    cachedBible.verses.forEach((verse: BibleVerse) => {
      if (verse.text.toLowerCase().includes(searchTerm)) {
        const ref = `${verse.book} ${verse.chapter}:${verse.verse}`
        if (!suggestions.includes(ref)) {
          suggestions.push(ref)
        }
        if (suggestions.length >= 10) {
          return
        }
      }
    })

    return suggestions
  } catch (error) {
    console.error('Error getting search suggestions:', error)
    return []
  }
}