import React, { useState, useMemo } from 'react'
import { 
  timelineEvents, 
  getEventsByCategory,
  getCategoryColors,
  getCategoryLabel,
  getMinYear,
  getMaxYear
} from '../../data/timeline'
import type { TimelineEvent } from '../../data/timeline'
import styles from './TimelineSlider.module.css'

// ================================================================
// SVG ICONS
// ================================================================

const IconCreation = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M2 12h20" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const IconPatriarchs = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

const IconExodus = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <path d="M12 7v10" />
  </svg>
)

const IconConquest = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
)

const IconJudges = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <path d="M8 10l-2 4 6 3 6-3-2-4" />
  </svg>
)

const IconKingdom = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4h20" />
    <path d="M4 4v16" />
    <path d="M20 4v16" />
    <path d="M4 20h16" />
    <circle cx="12" cy="10" r="3" />
    <path d="M9 10v6h6v-6" />
  </svg>
)

const IconExile = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16" />
    <path d="M20 4l-16 16" />
    <circle cx="12" cy="12" r="10" />
    <path d="M9 9l6 6" />
    <path d="M15 9l-6 6" />
  </svg>
)

const IconRestoration = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9m0 0v6m0-6h-6" />
    <path d="M12 3a9 9 0 0 1 9 9" />
  </svg>
)

const IconIntertestamental = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16" />
    <path d="M4 20h16" />
    <path d="M8 4v16" />
    <path d="M16 4v16" />
    <rect x="2" y="8" width="20" height="8" rx="1" />
    <path d="M10 10v4" />
    <path d="M14 10v4" />
  </svg>
)

const IconNewTestament = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const IconEarlyChurch = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16" />
    <path d="M4 20h16" />
    <path d="M4 8h16" />
    <path d="M4 16h16" />
    <rect x="8" y="4" width="8" height="16" rx="1" />
    <circle cx="12" cy="8" r="1" fill="currentColor" />
    <circle cx="12" cy="16" r="1" fill="currentColor" />
  </svg>
)

const IconRevelation = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
    <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const IconAll = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16" />
    <path d="M4 20h16" />
    <path d="M4 8h16" />
    <path d="M4 16h16" />
    <rect x="8" y="4" width="8" height="16" rx="1" />
  </svg>
)

const IconBook = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    <path d="M8 4v16" />
    <path d="M16 4v16" />
    <path d="M4 12h4" />
    <path d="M16 12h4" />
  </svg>
)

// Icon mapping
const getCategoryIcon = (category: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    'all': <IconAll />,
    'creation': <IconCreation />,
    'patriarchs': <IconPatriarchs />,
    'exodus': <IconExodus />,
    'conquest': <IconConquest />,
    'judges': <IconJudges />,
    'kingdom': <IconKingdom />,
    'exile': <IconExile />,
    'restoration': <IconRestoration />,
    'intertestamental': <IconIntertestamental />,
    'new-testament': <IconNewTestament />,
    'early-church': <IconEarlyChurch />,
    'revelation': <IconRevelation />
  }
  return icons[category] || <IconBook />
}

// ================================================================
// COMPONENT
// ================================================================

interface TimelineSliderProps {
  onSelectVerse: (reference: string) => void
}

export const TimelineSlider: React.FC<TimelineSliderProps> = ({ onSelectVerse }) => {
  const [selectedYear, setSelectedYear] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredEvent, setHoveredEvent] = useState<TimelineEvent | null>(null)

  const minYear = getMinYear()
  const maxYear = getMaxYear()

  const filteredEvents = useMemo(() => {
    let events = timelineEvents
    if (selectedCategory !== 'all') {
      events = events.filter(e => e.category === selectedCategory)
    }
    return events
  }, [selectedCategory])

  const categories = Array.from(new Set(timelineEvents.map(e => e.category)))
  const categoryColors = getCategoryColors()

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedYear(parseInt(e.target.value))
  }

  const getEventsNearYear = (year: number): TimelineEvent[] => {
    return timelineEvents.filter(e => Math.abs(e.year - year) <= 50)
  }

  const nearbyEvents = getEventsNearYear(selectedYear)

  const formatYear = (year: number): string => {
    if (year < 0) {
      return `${Math.abs(year)} BC`
    }
    return `${year} AD`
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleIcon}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="M8 4v16" />
              <path d="M16 4v16" />
              <path d="M4 12h4" />
              <path d="M16 12h4" />
            </svg>
          </span>
          Biblical Timeline
        </h2>
        <p className={styles.subtitle}>
          {formatYear(minYear)} → {formatYear(maxYear)}
        </p>
      </div>

      {/* Category Filters */}
      <div className={styles.categories}>
        <button
          className={`${styles.categoryBtn} ${selectedCategory === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          <span className={styles.categoryIcon}>{getCategoryIcon('all')}</span>
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            <span className={styles.categoryIcon}>{getCategoryIcon(cat)}</span>
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      {/* Timeline Slider */}
      <div className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <input
            type="range"
            min={minYear}
            max={maxYear}
            value={selectedYear}
            onChange={handleYearChange}
            className={styles.slider}
            style={{
              background: `linear-gradient(to right, #c9a84c 0%, #c9a84c ${((selectedYear - minYear) / (maxYear - minYear)) * 100}%, #e8e4dd ${((selectedYear - minYear) / (maxYear - minYear)) * 100}%, #e8e4dd 100%)`
            }}
          />
          <div className={styles.sliderLabels}>
            <span>{formatYear(minYear)}</span>
            <span className={styles.currentYear}>{formatYear(selectedYear)}</span>
            <span>{formatYear(maxYear)}</span>
          </div>
        </div>

        {/* Events near selected year */}
        <div className={styles.nearbyEvents}>
          <h4>Events Near {formatYear(selectedYear)}</h4>
          <div className={styles.nearbyGrid}>
            {nearbyEvents.length > 0 ? (
              nearbyEvents.map(event => (
                <div
                  key={event.id}
                  className={styles.nearbyCard}
                  style={{
                    borderLeftColor: event.color || categoryColors[event.category] || '#c9a84c',
                    borderLeftWidth: '4px',
                    borderLeftStyle: 'solid'
                  }}
                  onMouseEnter={() => setHoveredEvent(event)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  <div className={styles.nearbyYear}>{formatYear(event.year)}</div>
                  <div className={styles.nearbyLabel}>{event.label}</div>
                  <div className={styles.nearbyCategory}>
                    <span className={styles.nearbyIcon}>{getCategoryIcon(event.category)}</span>
                    {getCategoryLabel(event.category)}
                  </div>
                  {hoveredEvent?.id === event.id && (
                    <div className={styles.nearbyDetails}>
                      <p>{event.description}</p>
                      {event.reference && (
                        <button
                          className={styles.referenceBtn}
                          onClick={() => onSelectVerse(event.reference)}
                        >
                          <span className={styles.btnIcon}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                              <path d="M8 4v16" />
                              <path d="M16 4v16" />
                            </svg>
                          </span>
                          {event.reference}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className={styles.noEvents}>No events found near this year</p>
            )}
          </div>
        </div>
      </div>

      {/* All Events List */}
      <div className={styles.eventList}>
        <h3 className={styles.eventListTitle}>
          <span className={styles.titleIcon}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
              <path d="M8 4v16" />
              <path d="M16 4v16" />
            </svg>
          </span>
          All Timeline Events
        </h3>
        <div className={styles.eventGrid}>
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className={styles.eventCard}
              style={{
                borderLeftColor: event.color || categoryColors[event.category] || '#c9a84c',
                borderLeftWidth: '4px',
                borderLeftStyle: 'solid'
              }}
              onClick={() => {
                if (event.reference) {
                  onSelectVerse(event.reference)
                }
              }}
            >
              <div className={styles.eventHeader}>
                <span className={styles.eventYear}>{formatYear(event.year)}</span>
                <span className={styles.eventCategory}>
                  {getCategoryIcon(event.category)}
                </span>
              </div>
              <div className={styles.eventLabel}>{event.label}</div>
              <div className={styles.eventDescription}>{event.description}</div>
              {event.reference && (
                <div className={styles.eventReference}>
                  <span className={styles.refIcon}>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
                      <path d="M8 4v16" />
                      <path d="M16 4v16" />
                    </svg>
                  </span>
                  {event.reference}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}