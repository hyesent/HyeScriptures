// src/hooks/useChapterProgress.ts
import { useState, useEffect, useCallback } from 'react'

const PROGRESS_KEY = 'hyescriptures_chapter_progress'

interface ChapterProgress {
  [book: string]: number[] // Array of completed chapter numbers
}

interface ProgressStats {
  totalChaptersRead: number
  booksCompleted: number
  lastRead: { book: string; chapter: number; date: string } | null
}

const getProgress = (): ChapterProgress => {
  try {
    const data = localStorage.getItem(PROGRESS_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
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
      // Save last read
      updated['__lastRead'] = [chapter] // hack: store last read
      localStorage.setItem('hyescriptures_last_read', JSON.stringify({ book, chapter, date: new Date().toISOString() }))
      saveProgress(updated)
      return updated
    })
  }, [])

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
      // A book is "completed" if all its chapters are read
      // You'll need getChapterCount from bible-loader for this
      // For now, just count books with any chapters read
      if (chapters.length > 0) booksCompleted++
    })

    const lastRead = localStorage.getItem('hyescriptures_last_read')
    const lastReadData = lastRead ? JSON.parse(lastRead) : null

    return {
      totalChaptersRead,
      booksCompleted,
      lastRead: lastReadData,
    }
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
