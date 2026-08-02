import React, { useState, useEffect } from 'react'
import type { ReadingPlan } from '../../lib/reading-plans'
import { 
  readingPlans,
  getPlanChapters,
  getPlanProgress,
  toggleDayComplete,
  initializePlan,
  getProgressPercentage
} from '../../lib/reading-plans'
import { 
  ChevronLeft, 
  Calendar, 
  CheckCircle, 
  Circle, 
  BookOpen,
  TrendingUp,
  Flame
} from 'lucide-react'
import styles from './PlanDetail.module.css'

interface PlanDetailProps {
  planId: string
  onBack: () => void
  onSelectVerse: (reference: string) => void
}

export const PlanDetail: React.FC<PlanDetailProps> = ({ planId, onBack, onSelectVerse }) => {
  const [plan, setPlan] = useState<ReadingPlan | null>(null)
  const [completedDays, setCompletedDays] = useState<number[]>([])
  const [currentDay, setCurrentDay] = useState<number>(1)

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
      } else {
        initializePlan(planId)
      }
    }
  }, [planId])

  const handleToggleDay = (day: number) => {
    const progress = toggleDayComplete(planId, day)
    setCompletedDays(progress.completedDays)
  }

  const handleSelectChapter = (book: string) => {
    onSelectVerse(`${book} 1:1`)
  }

  if (!plan) {
    return <div className={styles.loading}>Loading...</div>
  }

  const percentage = getProgressPercentage(planId)
  const dayChapters = getPlanChapters(planId, currentDay)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={onBack}>
          <ChevronLeft size={20} />
          Back
        </button>
        <h2>{plan.icon} {plan.name}</h2>
        <span className={styles.percentage}>{percentage}% Complete</span>
      </div>

      <div className={styles.progressSection}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${percentage}%` }} />
        </div>
        <div className={styles.progressInfo}>
          <span>{completedDays.length} / {plan.totalDays} days completed</span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.daySelector}>
          <h3>Day {currentDay}</h3>
          <p className={styles.dayDescription}>
            Read {plan.chaptersPerDay} chapters today
          </p>
          <div className={styles.dayNav}>
            <button 
              className={styles.dayNavBtn}
              onClick={() => setCurrentDay(Math.max(1, currentDay - 1))}
              disabled={currentDay === 1}
            >
              Previous
            </button>
            <button 
              className={styles.dayNavBtn}
              onClick={() => setCurrentDay(Math.min(plan.totalDays, currentDay + 1))}
              disabled={currentDay === plan.totalDays}
            >
              Next
            </button>
          </div>
          <button 
            className={`${styles.completeBtn} ${completedDays.includes(currentDay) ? styles.completed : ''}`}
            onClick={() => handleToggleDay(currentDay)}
          >
            {completedDays.includes(currentDay) ? (
              <>
                <CheckCircle size={16} />
                Completed
              </>
            ) : (
              <>
                <Circle size={16} />
                Mark as Complete
              </>
            )}
          </button>
        </div>

        <div className={styles.chapters}>
          <h4>Today's Reading</h4>
          <div className={styles.chapterList}>
            {dayChapters.map((book) => (
              <button
                key={book}
                className={styles.chapterItem}
                onClick={() => handleSelectChapter(book)}
              >
                <span className={styles.chapterBook}>{book}</span>
                <BookOpen size={14} className={styles.chapterArrow} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.calendar}>
        <h4>Progress Calendar</h4>
        <div className={styles.calendarGrid}>
          {Array.from({ length: plan.totalDays }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`${styles.calendarDay} ${completedDays.includes(day) ? styles.completedDay : ''}`}
              onClick={() => setCurrentDay(day)}
            >
              {day}
              {completedDays.includes(day) && <CheckCircle size={10} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}