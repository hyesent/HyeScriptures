// src/components/Reading/PlanDetail.tsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReadingPlan } from '../../lib/reading-plans'
import { 
  readingPlans,
  getPlanChapters,
  getPlanProgress,
  toggleDayComplete,
  initializePlan,
  getProgressPercentage,
  getStreak
} from '../../lib/reading-plans'
import { 
  ChevronLeft, 
  Calendar, 
  CheckCircle, 
  Circle, 
  BookOpen,
  TrendingUp,
  Flame,
  ArrowRight,
  Clock,
  MapPin,
  Route,
  Compass,
  Crown,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react'
import { TIMING, EASING } from '../../lib/animations'
import styles from './PlanDetail.module.css'

interface PlanDetailProps {
  planId: string
  onBack: () => void
  onSelectVerse: (reference: string) => void
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Journey: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  Destination: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export const PlanDetail: React.FC<PlanDetailProps> = ({ planId, onBack, onSelectVerse }) => {
  const [plan, setPlan] = useState<ReadingPlan | null>(null)
  const [completedDays, setCompletedDays] = useState<number[]>([])
  const [currentDay, setCurrentDay] = useState<number>(1)
  const [streak, setStreak] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [celebratingDay, setCelebratingDay] = useState<number | null>(null)

  useEffect(() => {
    const found = readingPlans.find(p => p.id === planId)
    if (found) {
      setPlan(found)
      const progress = getPlanProgress(planId)
      if (progress) {
        setCompletedDays(progress.completedDays)
        for (let i = 1; i <= found.totalDays; i++) {
          if (!progress.completedDays.includes(i)) {
            setCurrentDay(i)
            break
          }
        }
        setStreak(getStreak(planId))
      } else {
        initializePlan(planId)
      }
    }
  }, [planId])

  const handleToggleDay = (day: number) => {
    const progress = toggleDayComplete(planId, day)
    setCompletedDays(progress.completedDays)
    setStreak(getStreak(planId))
    
    // Celebration animation
    setCelebratingDay(day)
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 3000)
    
    // Move to next day if complete
    if (progress.completedDays.includes(day)) {
      for (let i = day + 1; i <= (plan?.totalDays || 0); i++) {
        if (!progress.completedDays.includes(i)) {
          setTimeout(() => setCurrentDay(i), 500)
          break
        }
      }
    }
  }

  const handleSelectChapter = (book: string, chapter: string) => {
    onSelectVerse(`${book} ${chapter}`)
  }

  if (!plan) {
    return <div className={styles.loading}>Loading...</div>
  }

  const percentage = getProgressPercentage(planId)
  const dayChapters = getPlanChapters(planId, currentDay)
  const isDayComplete = completedDays.includes(currentDay)
  const totalDays = plan.totalDays
  const isComplete = percentage === 100

  // Daily verse
  const dailyVerses = [
    { text: 'Your word is a lamp to my feet and a light to my path.', ref: 'Psalm 119:105' },
    { text: 'Blessed is the man who walks not in the counsel of the wicked...', ref: 'Psalm 1:1' },
    { text: 'The grass withers, the flower fades, but the word of God stands forever.', ref: 'Isaiah 40:8' },
    { text: 'Man shall not live by bread alone, but by every word that comes from the mouth of God.', ref: 'Matthew 4:4' },
    { text: 'The law of the Lord is perfect, reviving the soul.', ref: 'Psalm 19:7' },
    { text: 'All Scripture is breathed out by God and profitable for teaching.', ref: '2 Timothy 3:16' },
    { text: 'Open my eyes, that I may behold wondrous things out of your law.', ref: 'Psalm 119:18' }
  ]
  const dailyVerse = dailyVerses[currentDay % dailyVerses.length]

  return (
    <div className={styles.container}>
      {/* Ambient Background */}
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <button className={styles.backBtn} onClick={onBack}>
            <ChevronLeft size={18} />
            <span>Back</span>
          </button>
          <div className={styles.headerInfo}>
            <span className={styles.headerPlan}>{plan.icon} {plan.name}</span>
            <span className={styles.headerProgress}>{Math.round(percentage)}%</span>
          </div>
        </div>

        {/* Journey Path Progress */}
        <div className={styles.journeyPath}>
          <div className={styles.pathContainer}>
            <div className={styles.pathLine}>
              <div 
                className={styles.pathLineFill}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <div className={styles.pathNodes}>
              {Array.from({ length: Math.min(totalDays, 12) }, (_, i) => {
                const day = Math.floor((i / 11) * (totalDays - 1)) + 1
                const isCompleted = day <= completedDays.length
                const isCurrent = day === currentDay
                return (
                  <div
                    key={i}
                    className={`${styles.node} ${isCompleted ? styles.nodeCompleted : ''} ${isCurrent ? styles.nodeCurrent : ''}`}
                    onClick={() => setCurrentDay(day)}
                  >
                    {isCompleted ? '●' : '○'}
                  </div>
                )
              })}
            </div>
            <div className={styles.pathLabels}>
              <span>Start</span>
              <span>Finish</span>
            </div>
          </div>
        </div>

        {/* Today's Destination */}
        <motion.div 
          className={styles.destinationCard}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: TIMING.NORMAL / 1000 }}
        >
          <div className={styles.destinationHeader}>
            <div className={styles.destinationBadge}>
              <Icons.Destination />
              <span>Today's Destination</span>
            </div>
            <span className={styles.destinationDay}>Day {currentDay} of {totalDays}</span>
          </div>

          <h3 className={styles.destinationTitle}>{plan.name}</h3>
          
          <div className={styles.destinationReading}>
            <h4 className={styles.destinationReadingTitle}>Today's Reading</h4>
            <div className={styles.destinationChapterList}>
              {dayChapters.map((book) => (
                <button
                  key={book}
                  className={styles.destinationChapter}
                  onClick={() => handleSelectChapter(book, '1')}
                >
                  <span>{book}</span>
                  <BookOpen size={14} />
                </button>
              ))}
            </div>
          </div>

          <div className={styles.destinationMeta}>
            <span className={styles.destinationTime}>
              <Clock size={14} />
              ~{plan.chaptersPerDay * 3} min
            </span>
          </div>

          {/* Daily Verse */}
          <div className={styles.dailyVerse}>
            <p className={styles.dailyVerseText}>"{dailyVerse.text}"</p>
            <p className={styles.dailyVerseRef}>— {dailyVerse.ref}</p>
          </div>

          <button 
            className={`${styles.completeBtn} ${isDayComplete ? styles.completed : ''}`}
            onClick={() => handleToggleDay(currentDay)}
          >
            {isDayComplete ? (
              <>
                <CheckCircle size={18} />
                Completed
              </>
            ) : isComplete ? (
              <>
                <Crown size={18} />
                Journey Complete!
              </>
            ) : (
              <>
                <Circle size={18} />
                Complete Day {currentDay}
              </>
            )}
            {!isDayComplete && !isComplete && <ArrowRight size={18} />}
          </button>

          {/* Streak */}
          {streak > 0 && (
            <div className={styles.streakDisplay}>
              <Flame size={16} />
              <span>{streak} day{streak > 1 ? 's' : ''} streak</span>
            </div>
          )}
        </motion.div>

        {/* Completion Celebration */}
        <AnimatePresence>
          {showCelebration && celebratingDay && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={styles.celebration}
            >
              <div className={styles.celebrationContent}>
                <Sparkles size={32} className={styles.celebrationIcon} />
                <h4>Day {celebratingDay} Complete!</h4>
                <p>You've walked another step in your journey.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Footer */}
        <div className={styles.statsFooter}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{completedDays.length}</span>
            <span className={styles.statLabel}>Days</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{streak}</span>
            <span className={styles.statLabel}>Streak</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{Math.round(percentage)}%</span>
            <span className={styles.statLabel}>Complete</span>
          </div>
        </div>
      </div>
    </div>
  )
}
