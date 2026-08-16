// src/hooks/useChapterProgress.ts
import { useState, useEffect, useCallback } from 'react'
import { getPlanChapters, toggleDayComplete, getPlanProgress, readingPlans } from '../lib/reading-plans'

const PROGRESS_KEY = 'hyescriptures_chapter_progress'

interface ChapterProgress {
  [book: string]: number[]
}

interface ProgressStats {
  totalChaptersRead: number
  booksCompleted: number
  lastRead: { book: string; chapter: number; date: string } | null
}

const CHAPTER_COUNT: Record<string, number> = {
  'Genesis': 50, 'Exodus': 40, 'Leviticus': 27, 'Numbers': 36,
  'Deuteronomy': 34, 'Joshua': 24, 'Judges': 21, 'Ruth': 4,
  '1 Samuel': 31, '2 Samuel': 24, '1 Kings': 22, '2 Kings': 25,
  '1 Chronicles': 29, '2 Chronicles': 36, 'Ezra': 10, 'Nehemiah': 13,
  'Esther': 10, 'Job': 42, 'Psalms': 150, 'Proverbs': 31,
  'Ecclesiastes': 12, 'Song of Solomon': 8, 'Isaiah': 66, 'Jeremiah': 52,
  'Lamentations': 5, 'Ezekiel': 48, 'Daniel': 12, 'Hosea': 14,
  'Joel': 3, 'Amos': 9, 'Obadiah': 1, 'Jonah': 4, 'Micah': 7,
  'Nahum': 3, 'Habakkuk': 3, 'Zephaniah': 3, 'Haggai': 2,
  'Zechariah': 14, 'Malachi': 4, 'Matthew': 28, 'Mark': 16,
  'Luke': 24, 'John': 21, 'Acts': 28, 'Romans': 16,
  '1 Corinthians': 16, '2 Corinthians': 13, 'Galatians': 6, 'Ephesians': 6,
  'Philippians': 4, 'Colossians': 4, '1 Thessalonians': 5, '2 Thessalonians': 3,
  '1 Timothy': 6, '2 Timothy': 4, 'Titus': 3, 'Philemon': 1,
  'Hebrews': 13, 'James': 5, '1 Peter': 5, '2 Peter': 3,
  '1 John': 5, '2 John': 1, '3 John': 1, 'Jude': 1, 'Revelation': 22
}

const getProgress = (): ChapterProgress => {
  try {
    const data = localStorage.getItem(PROGRESS_KEY)
    return data ? JSON.parse(data) : {}
  } catch { return {} }
}

const saveProgress = (progress: ChapterProgress) => {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export const useChapterProgress = () => {
  const [progress, setProgress] = useState<ChapterProgress>(getProgress())

  // Mark a chapter as completed
  const markChapterComplete = useCallback((book: string, chapter: number) => {
    setProgress(prev => {
      const updated = { ...prev }
      if (!updated[book]) updated[book] = []
      if (!updated[book].includes(chapter)) {
        updated[book] = [...updated[book], chapter].sort((a, b) => a - b)
      }
      
      localStorage.setItem('hyescriptures_last_read', JSON.stringify({ book, chapter, date: new Date().toISOString() }))
      saveProgress(updated)

      // Check if this chapter belongs to any active plan day
      checkPlanDayCompletion(updated)

      return updated
    })
  }, [])

  // Check if completing this chapter completes a plan day
  const checkPlanDayCompletion = (chapterProgress: ChapterProgress) => {
    // Build list of completed chapters as strings "Book Chapter"
    const completedChapters: string[] = []
    Object.entries(chapterProgress).forEach(([book, chapters]) => {
      if (book === '__lastRead') return
      chapters.forEach(ch => completedChapters.push(`${book} ${ch}`))
    })

    // Check each active plan
    readingPlans.forEach(plan => {
      const planProgress = getPlanProgress(plan.id)
      if (!planProgress || !planProgress.startDate) return

      // Find current day
      const currentDay = (planProgress.completedDays[planProgress.completedDays.length - 1] || 0) + 1
      if (currentDay > plan.totalDays) return

      const dayChapters = getPlanChapters(plan.id, currentDay)
      if (dayChapters.length === 0) return

      // Check if all chapters for this day are complete
      const allRead = dayChapters.every(ch => {
        // Match "Genesis 1" format
        return completedChapters.some(completed => {
          const [book, chapterNum] = ch.split(' ')
          const completedBook = completed.split(' ').slice(0, -1).join(' ')
          const completedChapter = parseInt(completed.split(' ').pop() || '0')
          return completedBook === book && completedChapter === parseInt(chapterNum)
        })
      })

      // Also check range chapters like "Matthew 1-2"
      const allReadWithRanges = dayChapters.every(ch => {
        if (ch.includes('-')) {
          const [book, range] = ch.split(' ')
          const [start, end] = range.split('-').map(Number)
          for (let c = start; c <= end; c++) {
            const found = completedChapters.includes(`${book} ${c}`)
            if (!found) return false
          }
          return true
        }
        return completedChapters.includes(ch)
      })

      if (allRead || allReadWithRanges) {
        toggleDayComplete(plan.id, currentDay)
      }
    })
  }

  // Check if a chapter is completed
  const isChapterComplete = useCallback((book: string, chapter: number): boolean => {
    return progress[book]?.includes(chapter) || false
  }, [progress])

  // Get completed chapters for a book
  const getCompletedChapters = useCallback((book: string): number[] => {
    return progress[book] || []
  }, [progress])

  // Get progress stats
  const getStats = useCallback((): ProgressStats => {
    let totalChaptersRead = 0
    let booksCompleted = 0

    Object.entries(progress).forEach(([book, chapters]) => {
      if (book === '__lastRead') return
      totalChaptersRead += chapters.length
      const total = CHAPTER_COUNT[book] || 0
      if (total > 0 && chapters.length >= total) {
        booksCompleted++
      }
    })

    const lastRead = localStorage.getItem('hyescriptures_last_read')
    const lastReadData = lastRead ? JSON.parse(lastRead) : null

    return { totalChaptersRead, booksCompleted, lastRead: lastReadData }
  }, [progress])

  // Get progress percentage for a specific book
  const getBookProgress = useCallback((book: string, totalChapters: number): number => {
    const completed = progress[book]?.length || 0
    if (totalChapters === 0) return 0
    return Math.round((completed / totalChapters) * 100)
  }, [progress])

  return {
    progress,
    markChapterComplete,
    isChapterComplete,
    getCompletedChapters,
    getStats,
    getBookProgress,
  }
}
