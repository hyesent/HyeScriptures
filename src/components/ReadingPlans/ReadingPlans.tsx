import React from 'react'
import { 
  readingPlans, 
  getProgressPercentage, 
  getStreak,
  getCompletedCount,
  initializePlan 
} from '../../lib/reading-plans'
import { 
  Calendar, 
  ChevronRight, 
  Zap, 
  BookOpen, 
  Flame,
  TrendingUp,
  Award
} from 'lucide-react'
import styles from './ReadingPlans.module.css'

interface ReadingPlansProps {
  onSelectPlan: (planId: string) => void
}

const planIcons: Record<string, React.ElementType> = {
  '30-days': Zap,
  '90-days': BookOpen,
  '1-year': Calendar
}

const planColors: Record<string, string> = {
  '30-days': '#f59e0b',
  '90-days': '#3b82f6',
  '1-year': '#22c55e'
}

export const ReadingPlans: React.FC<ReadingPlansProps> = ({ onSelectPlan }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Reading Plans</h2>
        <p className={styles.subtitle}>Choose a plan to start reading through the Bible</p>
      </div>

      <div className={styles.grid}>
        {readingPlans.map((plan) => {
          const Icon = planIcons[plan.id] || BookOpen
          const percentage = getProgressPercentage(plan.id)
          const completed = getCompletedCount(plan.id)
          const streak = getStreak(plan.id)
          const color = planColors[plan.id] || '#c9a84c'

          return (
            <div 
              key={plan.id} 
              className={styles.planCard}
              onClick={() => {
                initializePlan(plan.id)
                onSelectPlan(plan.id)
              }}
            >
              <div className={styles.planIcon} style={{ background: `${color}15`, color }}>
                <Icon size={28} strokeWidth={1.5} />
              </div>
              
              <div className={styles.planInfo}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>
              
              <div className={styles.stats}>
                <span className={styles.stat}>
                  <span className={styles.statValue}>{plan.totalDays}</span>
                  <span className={styles.statLabel}>days</span>
                </span>
                <span className={styles.stat}>
                  <span className={styles.statValue}>{plan.chaptersPerDay}</span>
                  <span className={styles.statLabel}>chapters/day</span>
                </span>
              </div>

              <div className={styles.progress}>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${percentage}%`, background: color }}
                  />
                </div>
                <div className={styles.progressInfo}>
                  <span>{percentage}% complete</span>
                  <span>{completed} / {plan.totalDays} days</span>
                </div>
              </div>

              {streak > 0 && (
                <div className={styles.streak}>
                  <Flame size={14} />
                  {streak} day{streak > 1 ? 's' : ''} streak
                </div>
              )}

              <button className={styles.selectBtn}>
                {percentage === 0 ? 'Start Plan' : percentage === 100 ? 'Completed ✓' : 'Continue'}
                <ChevronRight size={16} />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}