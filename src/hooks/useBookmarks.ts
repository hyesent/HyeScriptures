import { useState, useEffect } from 'react'
import { getBookmarks, toggleBookmark, isBookmarked } from '../lib/storage'

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<string[]>([])

  useEffect(() => {
    setBookmarks(getBookmarks())
  }, [])

  const toggle = (reference: string): boolean => {
    const result = toggleBookmark(reference)
    setBookmarks(getBookmarks())
    return result
  }

  const isBookmarkedRef = (reference: string): boolean => {
    return isBookmarked(reference)
  }

  return {
    bookmarks,
    toggle,
    isBookmarked: isBookmarkedRef,
  }
}