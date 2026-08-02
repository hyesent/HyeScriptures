export interface ShareableVerse {
  reference: string
  text: string
  version?: string
  theme?: 'light' | 'dark' | 'nature' | 'sunset' | 'minimal'
}

// Use your local images (image-1.jpg to image-28.jpg)
export const getRandomBackground = (theme: string = 'light'): string => {
  const randomNum = Math.floor(Math.random() * 28) + 1
  return `/src/assets/images/share-backgrounds/image-${randomNum}.jpg`
}

// Get a specific image by number
export const getBackgroundByNumber = (number: number): string => {
  const num = Math.min(Math.max(number, 1), 28)
  return `/src/assets/images/share-backgrounds/image-${num}.jpg`
}

// Get multiple backgrounds for a theme (just random from all 28)
export const getThemeBackgrounds = (theme: string = 'light', count: number = 3): string[] => {
  const backgrounds: string[] = []
  const used = new Set<number>()
  
  while (backgrounds.length < count && used.size < 28) {
    let num: number
    do {
      num = Math.floor(Math.random() * 28) + 1
    } while (used.has(num))
    used.add(num)
    backgrounds.push(`/src/assets/images/share-backgrounds/image-${num}.jpg`)
  }
  
  return backgrounds
}

export const copyVerse = (verse: ShareableVerse): void => {
  const text = `"${verse.text}" — ${verse.reference}`
  navigator.clipboard.writeText(text)
}

export const shareVerse = async (verse: ShareableVerse): Promise<void> => {
  const text = `"${verse.text}" — ${verse.reference}`
  
  if (navigator.share) {
    await navigator.share({
      title: `📖 ${verse.reference}`,
      text: text,
    })
  } else {
    await navigator.clipboard.writeText(text)
    alert('Verse copied to clipboard!')
  }
}