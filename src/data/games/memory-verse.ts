import { getVerses } from '../../lib/bible-loader'
import type { BibleTranslation } from '../../lib/bible-loader'
export interface MemoryPair {
  id: string
  verse: string
  reference: string
}

export interface Difficulty {
  value: 'easy' | 'medium' | 'hard'
  label: string
  pairs: number
}

const difficulties: Difficulty[] = [
  { value: 'easy', label: 'Easy', pairs: 4 },
  { value: 'medium', label: 'Medium', pairs: 6 },
  { value: 'hard', label: 'Hard', pairs: 8 },
]

export const getMemoryDifficulties = (): Difficulty[] => {
  return difficulties
}

export const getMemoryPairs = (count: number, bible?: BibleTranslation): MemoryPair[] => {
  // If Bible is provided, use real verses
  if (bible && bible.verses.length > 0) {
    const pairs: MemoryPair[] = []
    const verses = bible.verses
    
    // Get random verses
    const shuffled = [...verses].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, count)
    
    selected.forEach((verse, index) => {
      pairs.push({
        id: `pair-${index}`,
        verse: verse.text,
        reference: `${verse.book} ${verse.chapter}:${verse.verse}`
      })
    })
    
    return pairs
  }
  
  // Fallback: Hardcoded verses (if Bible not loaded)
  const fallbackPairs: MemoryPair[] = [
    { id: 'pair-1', verse: 'For God so loved the world that He gave His only Son', reference: 'John 3:16' },
    { id: 'pair-2', verse: 'I can do all things through Christ who strengthens me', reference: 'Philippians 4:13' },
    { id: 'pair-3', verse: 'The Lord is my shepherd; I shall not want', reference: 'Psalm 23:1' },
    { id: 'pair-4', verse: 'For by grace you have been saved through faith', reference: 'Ephesians 2:8' },
    { id: 'pair-5', verse: 'Trust in the Lord with all your heart', reference: 'Proverbs 3:5' },
    { id: 'pair-6', verse: 'Be strong and of good courage, do not be afraid', reference: 'Joshua 1:9' },
    { id: 'pair-7', verse: 'Rejoice in the Lord always; again I will say, rejoice', reference: 'Philippians 4:4' },
    { id: 'pair-8', verse: 'Cast all your anxiety on Him because He cares for you', reference: '1 Peter 5:7' },
  ]
  
  return fallbackPairs.slice(0, count)
}

// Generate random pairs from Bible data
export const generateMemoryPairs = (bible: BibleTranslation, count: number): MemoryPair[] => {
  return getMemoryPairs(count, bible)
}