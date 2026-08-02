import React from 'react'
import { Palette, Type, Maximize, Eye, ChevronLeft } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import type { ThemeMode, ThemeFont, ThemeSize } from '../../contexts/ThemeContext'
import styles from './ThemeSettings.module.css'

interface ThemeSettingsProps {
  onBack: () => void
}

const themeColors: Record<ThemeMode, string> = {
  light: '#fcfbf8', dark: '#111315', sepia: '#f4ecd8',
  night: '#0a0a0f', forest: '#1a2e1a', ocean: '#0a1628',
}

const themes: { mode: ThemeMode; label: string; color: string }[] = [
  { mode: 'light', label: 'Light', color: '#fcfbf8' },
  { mode: 'dark', label: 'Dark', color: '#111315' },
  { mode: 'sepia', label: 'Sepia', color: '#f4ecd8' },
  { mode: 'night', label: 'Night', color: '#0a0a0f' },
  { mode: 'forest', label: 'Forest', color: '#1a2e1a' },
  { mode: 'ocean', label: 'Ocean', color: '#0a1628' },
]

const fonts: { value: ThemeFont; label: string; sample: string }[] = [
  { value: 'default', label: 'Default', sample: 'Aa' },
  { value: 'serif', label: 'Serif', sample: 'Aa' },
  { value: 'sans', label: 'Sans', sample: 'Aa' },
]

const sizes: { value: ThemeSize; label: string }[] = [
  { value: 'small', label: 'S' },
  { value: 'medium', label: 'M' },
  { value: 'large', label: 'L' },
  { value: 'xlarge', label: 'XL' },
]

const getFontFamily = (font: ThemeFont): string => {
  switch (font) {
    case 'serif': return 'Georgia, "Times New Roman", serif'
    case 'sans': return '"Inter", sans-serif'
    default: return '"Inter", system-ui, sans-serif'
  }
}

const ThemeSettings: React.FC<ThemeSettingsProps> = ({ onBack }) => {
  const { theme, setTheme, themeName } = useTheme()

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}><ChevronLeft size={20} /></button>
        <h2 className={styles.headerTitle}>Theme Settings</h2>
      </div>

      {/* Current Theme */}
      <div className={styles.currentTheme}>
        <div>
          <p className={styles.currentLabel}>Current Theme</p>
          <p className={styles.currentName}>{themeName}</p>
        </div>
        <div className={styles.currentPreview} style={{ background: themeColors[theme.mode] }} />
      </div>

      {/* Theme Selection */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><Palette size={16} />Theme</h3>
        <div className={styles.themeGrid}>
          {themes.map(t => (
            <button
              key={t.mode}
              className={`${styles.themeCard} ${theme.mode === t.mode ? styles.themeCardSelected : ''}`}
              onClick={() => setTheme({ mode: t.mode })}
            >
              <div className={styles.themeSwatch} style={{ background: t.color }} />
              <span className={styles.themeLabel}>{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Font */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><Type size={16} />Font</h3>
        <div className={styles.optionGrid}>
          {fonts.map(f => (
            <button
              key={f.value}
              className={`${styles.optionCard} ${theme.font === f.value ? styles.optionCardSelected : ''}`}
              onClick={() => setTheme({ font: f.value })}
              style={{ fontFamily: getFontFamily(f.value) }}
            >
              <span className={styles.optionLabel} style={{ fontSize: 20 }}>{f.sample}</span>
              <span className={styles.optionPreview}>{f.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><Maximize size={16} />Font Size</h3>
        <div className={`${styles.optionGrid} ${styles.sizeGrid}`}>
          {sizes.map(s => (
            <button
              key={s.value}
              className={`${styles.optionCard} ${theme.size === s.value ? styles.optionCardSelected : ''}`}
              onClick={() => setTheme({ size: s.value })}
            >
              <span className={styles.optionLabel}>{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Accessibility */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}><Eye size={16} />Accessibility</h3>
        <div className={styles.toggleGrid}>
          <button
            className={`${styles.toggleCard} ${theme.reducedMotion ? styles.toggleCardActive : ''}`}
            onClick={() => setTheme({ reducedMotion: !theme.reducedMotion })}
          >
            <div>
              <span className={styles.toggleLabel}>Reduced Motion</span>
              <span className={styles.toggleHint}>Disable animations</span>
            </div>
            <div className={`${styles.toggleSwitch} ${theme.reducedMotion ? styles.toggleSwitchOn : styles.toggleSwitchOff}`}>
              <div className={`${styles.toggleDot} ${theme.reducedMotion ? styles.toggleDotOn : styles.toggleDotOff}`} />
            </div>
          </button>

          <button
            className={`${styles.toggleCard} ${theme.highContrast ? styles.toggleCardActive : ''}`}
            onClick={() => setTheme({ highContrast: !theme.highContrast })}
          >
            <div>
              <span className={styles.toggleLabel}>High Contrast</span>
              <span className={styles.toggleHint}>Better readability</span>
            </div>
            <div className={`${styles.toggleSwitch} ${theme.highContrast ? styles.toggleSwitchOn : styles.toggleSwitchOff}`}>
              <div className={`${styles.toggleDot} ${theme.highContrast ? styles.toggleDotOn : styles.toggleDotOff}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className={styles.preview}>
        <div className={styles.previewAvatar}>A</div>
        <div>
          <p className={styles.previewVerse} style={{ fontFamily: getFontFamily(theme.font) }}>
            The Lord is my shepherd
          </p>
          <p className={styles.previewMeta}>
            Psalm 23:1 • {themeName} • {theme.font} • {theme.size}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings