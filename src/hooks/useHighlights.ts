import { useState, useEffect } from 'react'
import { getHighlights, toggleHighlight, getHighlightColor } from '../lib/storage'

type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink'

export const useHighlights = () => {
  const [highlights, setHighlights] = useState<{ reference: string; color: string }[]>([])

  useEffect(() => {
    setHighlights(getHighlights())
  }, [])

  const toggle = (reference: string, color: HighlightColor): boolean => {
    const result = toggleHighlight(reference, color)
    setHighlights(getHighlights())
    return result
  }

  const getColor = (reference: string): string | null => {
    return getHighlightColor(reference)
  }

  return {
    highlights,
    toggle,
    getColor,
  }
}