import { useState, useEffect } from 'react'
import { 
  getBible, 
  getVerses, 
  getBooks, 
  getChapterCount, 
  getTranslationList,
  translations,
} from '../lib/bible-loader'
import type { BibleTranslation } from '../lib/bible-loader'
import { cacheGet, cacheSet } from '../lib/cache'

const SAVE_KEY = 'hyescriptures_last_position'

export const useBible = (initialTranslation: string = 'en_kjv') => {
  const [bible, setBible] = useState<BibleTranslation | null>(null)
  const [books, setBooks] = useState<string[]>([])
  const [currentBook, setCurrentBook] = useState<string>('Genesis')
  const [currentChapter, setCurrentChapter] = useState<number>(1)
  const [verses, setVerses] = useState<string[]>([])
  const [totalChapters, setTotalChapters] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [translationId, setTranslationId] = useState<string>(initialTranslation)
  const [availableTranslations] = useState(getTranslationList())

  // Restore last position on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(SAVE_KEY)
      if (saved) {
        const { translationId: savedTrans, book, chapter } = JSON.parse(saved)
        if (savedTrans && translations[savedTrans]) {
          setTranslationId(savedTrans)
        }
        if (book) setCurrentBook(book)
        if (chapter) setCurrentChapter(chapter)
      }
    } catch {}
  }, [])

  // Load Bible on mount or translation change
  useEffect(() => {
    const loadBible = async () => {
      setLoading(true)
      try {
        const bibleData = await getBible(translationId)
        setBible(bibleData)
        const bookList = getBooks(bibleData)
        setBooks(bookList)
      } catch (error) {
        console.error('Error loading Bible:', error)
      } finally {
        setLoading(false)
      }
    }
    loadBible()
  }, [translationId])

  // Load verses with offline cache
  useEffect(() => {
    const loadVerses = async () => {
      if (bible && currentBook) {
        const cacheKey = `bible_${translationId}_${currentBook}_${currentChapter}`

        // Try cache first
        const cached = await cacheGet<string[]>(cacheKey)
        if (cached && cached.length > 0) {
          setVerses(cached)
          const chapters = getChapterCount(bible, currentBook)
          setTotalChapters(chapters)
          return
        }

        // Fall back to Bible object
        const chapterVerses = getVerses(bible, currentBook, currentChapter)
        setVerses(chapterVerses)
        const chapters = getChapterCount(bible, currentBook)
        setTotalChapters(chapters)

        // Cache for offline (30 days)
        if (chapterVerses.length > 0) {
          await cacheSet(cacheKey, chapterVerses, 86400 * 30)
        }
      }
    }

    loadVerses()
  }, [bible, currentBook, currentChapter, translationId])

  // Save position on every chapter change
  useEffect(() => {
    if (currentBook && currentChapter) {
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        translationId,
        book: currentBook,
        chapter: currentChapter
      }))
    }
  }, [currentBook, currentChapter, translationId])

  const goToChapter = (book: string, chapter: number) => {
    setCurrentBook(book)
    setCurrentChapter(chapter)
  }

  const goToBook = (book: string) => {
    setCurrentBook(book)
    setCurrentChapter(1)
  }

  const nextChapter = () => {
    if (bible) {
      const bookIndex = books.indexOf(currentBook)
      if (currentChapter < totalChapters) {
        setCurrentChapter(currentChapter + 1)
      } else if (bookIndex < books.length - 1) {
        setCurrentBook(books[bookIndex + 1])
        setCurrentChapter(1)
      }
    }
  }

  const prevChapter = () => {
    if (bible) {
      const bookIndex = books.indexOf(currentBook)
      if (currentChapter > 1) {
        setCurrentChapter(currentChapter - 1)
      } else if (bookIndex > 0) {
        const prevBook = books[bookIndex - 1]
        setCurrentBook(prevBook)
        setCurrentChapter(getChapterCount(bible, prevBook))
      }
    }
  }

  const switchTranslation = (newTranslation: string) => {
    if (newTranslation !== translationId && translations[newTranslation]) {
      setTranslationId(newTranslation)
    }
  }

  return {
    bible,
    books,
    currentBook,
    currentChapter,
    verses,
    totalChapters,
    loading,
    availableTranslations,
    translationId,
    goToChapter,
    goToBook,
    nextChapter,
    prevChapter,
    switchTranslation,
  }
}