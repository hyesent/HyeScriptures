// src/context/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react'

export type ThemeMode = 'light' | 'dark' | 'sepia' | 'night' | 'forest' | 'ocean'
export type ThemeFont = 'default' | 'serif' | 'sans'
export type ThemeSize = 'small' | 'medium' | 'large' | 'xlarge'

export interface ThemeConfig {
  mode: ThemeMode
  font: ThemeFont
  size: ThemeSize
  reducedMotion: boolean
  highContrast: boolean
}

interface ThemeContextType {
  theme: ThemeConfig
  setTheme: (config: Partial<ThemeConfig>) => void
  toggleTheme: () => void
  isDark: boolean
  themeName: string
}

const defaultTheme: ThemeConfig = {
  mode: 'light',
  font: 'default',
  size: 'medium',
  reducedMotion: false,
  highContrast: false
}

const themeNames: Record<ThemeMode, string> = {
  light: '☀️ Light',
  dark: '🌙 Dark',
  sepia: '📜 Sepia',
  night: '🌃 Night',
  forest: '🌿 Forest',
  ocean: '🌊 Ocean'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme)

  useEffect(() => {
    const saved = localStorage.getItem('bible_theme')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setThemeState(parsed)
        applyTheme(parsed)
      } catch {
        // Use default
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        const darkTheme = { ...defaultTheme, mode: 'dark' as ThemeMode }
        setThemeState(darkTheme)
        applyTheme(darkTheme)
      } else {
        applyTheme(defaultTheme)
      }
    }
  }, [])

  const applyTheme = (config: ThemeConfig) => {
    const root = document.documentElement
    
    // Remove all theme data attributes
    root.removeAttribute('data-theme')
    
    // Set new theme
    root.setAttribute('data-theme', config.mode)
    
    // Apply font
    const fontMap: Record<ThemeFont, string> = {
      default: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      sans: '"Inter", system-ui, sans-serif'
    }
    root.style.fontFamily = fontMap[config.font] || 'var(--font-sans)'
    
    // Apply font size
    const sizeMap: Record<ThemeSize, string> = {
      small: '15px',
      medium: '17px',
      large: '19px',
      xlarge: '21px'
    }
    const fontSize = sizeMap[config.size] || '17px'
    document.querySelector('.app')?.setAttribute('style', `font-size: ${fontSize}`)
    
    // Apply reduced motion
    if (config.reducedMotion) {
      root.classList.add('reduced-motion')
    } else {
      root.classList.remove('reduced-motion')
    }
    
    // Apply high contrast
    if (config.highContrast) {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    
    // Update meta theme-color
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      const colors: Record<ThemeMode, string> = {
        light: '#fcfbf8',
        dark: '#111315',
        sepia: '#f4ecd8',
        night: '#0a0a0f',
        forest: '#1a2e1a',
        ocean: '#0a1628'
      }
      meta.setAttribute('content', colors[config.mode] || '#fcfbf8')
    }
  }

  const setTheme = (config: Partial<ThemeConfig>) => {
    const newTheme = { ...theme, ...config }
    setThemeState(newTheme)
    localStorage.setItem('bible_theme', JSON.stringify(newTheme))
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'sepia', 'night', 'forest', 'ocean']
    const currentIndex = modes.indexOf(theme.mode)
    const nextIndex = (currentIndex + 1) % modes.length
    setTheme({ mode: modes[nextIndex] })
  }

  const isDark = theme.mode === 'dark' || theme.mode === 'night'
  const themeName = themeNames[theme.mode]

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark, themeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}