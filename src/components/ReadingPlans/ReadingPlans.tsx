// src/components/Reading/ReadingPlans.tsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  ChevronRight, 
  BookOpen, 
  Flame,
  Trophy,
  Target,
  Clock,
  ArrowRight,
  Compass,
  Star,
  Crown,
  ScrollText,
  Sparkles,
  Sun,
  Moon,
  Cloud,
  Wind,
  MapPin,
  Route,
  Cross,
  Scroll,
  Church,
  Tent,
  Mountain,
  Ship,
  Eye,
  Heart,
  Lightbulb,
  Crown as CrownIcon
} from 'lucide-react'
import { 
  readingPlans, 
  getProgressPercentage, 
  getStreak,
  getCompletedCount,
  initializePlan,
  getPlanProgress
} from '../../lib/reading-plans'
import { TIMING, EASING } from '../../lib/animations'
import styles from './ReadingPlans.module.css'

// ============================================================
// ICON MAPPING
// ============================================================

const getPlanIcon = (icon: string, size = 24) => {
  const iconMap: Record<string, React.ReactNode> = {
    '☀': <Sun size={size} />,
    '🧭': <Compass size={size} />,
    '⭐': <Star size={size} />,
    '📜': <ScrollText size={size} />,
    '✨': <Sparkles size={size} />,
    '✝': <Cross size={size} />,
    '🏛': <Church size={size} />,
    '🔥': <Flame size={size} />,
    '📨': <BookOpen size={size} />,
    '🗺': <MapPin size={size} />,
    '🕊': <Heart size={size} />,
    '🌙': <Moon size={size} />
  }
  return iconMap[icon] || <BookOpen size={size} />
}

// ============================================================
// ATMOSPHERE COMPONENTS
// ============================================================

const AtmosphereBackground: React.FC<{ type: string }> = ({ type }) => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 3,
    speed: 0.2 + Math.random() * 0.5,
    delay: Math.random() * 5
  }))

  const rays = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    angle: (i / 6) * 360,
    delay: i * 0.5
  }))

  // Sunrise
  if (type === 'sunrise') {
    return (
      <div className={styles.atmosphereSunrise}>
        <div className={styles.sunGlow} />
        <div className={styles.sunRays}>
          {rays.map((ray) => (
            <div
              key={ray.id}
              className={styles.ray}
              style={{
                transform: `rotate(${ray.angle}deg)`,
                animationDelay: `${ray.delay}s`
              }}
            />
          ))}
        </div>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${10 + p.speed * 5}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    )
  }

  // Sapphire
  if (type === 'sapphire') {
    return (
      <div className={styles.atmosphereSapphire}>
        <div className={styles.sapphireGlow} />
        <div className={styles.sapphireWaves}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={styles.wave}
              style={{
                animationDelay: `${i * 2}s`,
                opacity: 0.3 - i * 0.08
              }}
            />
          ))}
        </div>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.starParticle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${15 + p.speed * 5}s`,
              animationDelay: `${p.delay}s`
            }}
          />
        ))}
      </div>
    )
  }

  // Emerald
  if (type === 'emerald') {
    return (
      <div className={styles.atmosphereEmerald}>
        <div className={styles.emeraldGlow} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.starParticle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 1.5,
              height: p.size * 1.5,
              animationDuration: `${20 + p.speed * 8}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(34, 197, 94, 0.03)'
            }}
          />
        ))}
      </div>
    )
  }

  // Royal
  if (type === 'royal') {
    return (
      <div className={styles.atmosphereRoyal}>
        <div className={styles.royalGlow} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${12 + p.speed * 6}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(138, 90, 154, 0.04)'
            }}
          />
        ))}
      </div>
    )
  }

  // Amber
  if (type === 'amber') {
    return (
      <div className={styles.atmosphereAmber}>
        <div className={styles.amberGlow} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${14 + p.speed * 7}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(212, 168, 74, 0.03)'
            }}
          />
        ))}
      </div>
    )
  }

  // Golden
  if (type === 'golden') {
    return (
      <div className={styles.atmosphereGolden}>
        <div className={styles.goldenGlow} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${16 + p.speed * 8}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(212, 175, 55, 0.03)'
            }}
          />
        ))}
      </div>
    )
  }

  // Crimson
  if (type === 'crimson') {
    return (
      <div className={styles.atmosphereCrimson}>
        <div className={styles.crimsonGlow} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${10 + p.speed * 4}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(184, 34, 34, 0.03)'
            }}
          />
        ))}
      </div>
    )
  }

  // Fiery
  if (type === 'fiery') {
    return (
      <div className={styles.atmosphereFiery}>
        <div className={styles.fieryGlow} />
        {rays.slice(0, 4).map((ray) => (
          <div
            key={ray.id}
            className={styles.ray}
            style={{
              transform: `rotate(${ray.angle + 45}deg)`,
              animationDelay: `${ray.delay}s`,
              opacity: 0.05,
              background: 'linear-gradient(90deg, transparent, rgba(184, 97, 97, 0.05), transparent)'
            }}
          />
        ))}
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 0.5,
              height: p.size * 0.5,
              animationDuration: `${8 + p.speed * 3}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(184, 97, 97, 0.04)'
            }}
          />
        ))}
      </div>
    )
  }

  // Starry
  if (type === 'starry') {
    return (
      <div className={styles.atmosphereStarry}>
        <div className={styles.starryGlow} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.starParticle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 0.8,
              height: p.size * 0.8,
              animationDuration: `${25 + p.speed * 10}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(255, 255, 255, 0.02)',
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.02)'
            }}
          />
        ))}
      </div>
    )
  }

  // Desert
  if (type === 'desert') {
    return (
      <div className={styles.atmosphereDesert}>
        <div className={styles.desertGlow} />
        <div className={styles.desertWaves}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={styles.wave}
              style={{
                animationDelay: `${i * 3}s`,
                opacity: 0.15 - i * 0.04,
                height: `${8 + i * 3}%`,
                background: 'repeating-linear-gradient(90deg, transparent, rgba(200, 168, 74, 0.02) 20px, transparent 40px)'
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  // Still (calm water)
  if (type === 'still') {
    return (
      <div className={styles.atmosphereStill}>
        <div className={styles.stillGlow} />
        {particles.slice(0, 8).map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size * 2,
              height: p.size * 0.5,
              animationDuration: `${30 + p.speed * 15}s`,
              animationDelay: `${p.delay}s`,
              background: 'rgba(106, 154, 170, 0.02)',
              borderRadius: '50%'
            }}
          />
        ))}
      </div>
    )
  }

  // Mountain
  if (type === 'mountain') {
    return (
      <div className={styles.atmosphereMountain}>
        <div className={styles.mountainGlow} />
        <div className={styles.mountainPeaks}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={styles.peak}
              style={{
                left: `${15 + i * 35}%`,
                bottom: '0',
                width: `${40 + i * 10}%`,
                height: `${40 + i * 15}%`,
                opacity: 0.03 - i * 0.005,
                animationDelay: `${i * 4}s`
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  // Default: gentle glow
  return (
    <div className={styles.atmosphereDefault}>
      <div className={styles.defaultGlow} />
      {particles.map((p) => (
        <div
          key={p.id}
          className={styles.particle}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${10 + p.speed * 5}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}
    </div>
  )
}

// ============================================================
// MAIN COMPONENT
// ============================================================

interface ReadingPlansProps {
  onSelectPlan: (planId: string) => void
}

export const ReadingPlans: React.FC<ReadingPlansProps> = ({ onSelectPlan }) => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  const handlePlanClick = (planId: string) => {
    initializePlan(planId)
    onSelectPlan(planId)
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Sacred Journeys</h1>
          <p className={styles.headerSubtitle}>
            Choose a path to walk through Scripture
          </p>
        </div>
        <div className={styles.headerStats}>
          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>{readingPlans.length}</span>
            <span className={styles.headerStatLabel}>Journeys</span>
          </div>
          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>
              {readingPlans.reduce((sum, p) => sum + p.totalDays, 0)}
            </span>
            <span className={styles.headerStatLabel}>Days</span>
          </div>
          <div className={styles.headerStat}>
            <span className={styles.headerStatValue}>
              {readingPlans.reduce((sum, p) => sum + p.totalChapters, 0)}
            </span>
            <span className={styles.headerStatLabel}>Chapters</span>
          </div>
        </div>
      </div>

      {/* Journey Grid */}
      <div className={styles.grid}>
        {readingPlans.map((plan, index) => {
          const percentage = getProgressPercentage(plan.id)
          const completed = getCompletedCount(plan.id)
          const streak = getStreak(plan.id)
          const isHovered = hoveredPlan === plan.id
          const isComplete = percentage === 100
          const IconComponent = getPlanIcon(plan.icon, 24)

          return (
            <motion.div
              key={plan.id}
              className={`${styles.planCard} ${isHovered ? styles.hovered : ''} ${isComplete ? styles.completed : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              onClick={() => handlePlanClick(plan.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.06,
                duration: TIMING.NORMAL / 1000,
                ease: EASING.SMOOTH
              }}
              style={{
                '--plan-color': plan.color,
                '--plan-gradient': plan.gradient
              } as React.CSSProperties}
            >
              {/* Atmosphere Background */}
              <div className={styles.planAtmosphere}>
                <AtmosphereBackground type={plan.atmosphere} />
              </div>

              {/* Plan Card Content */}
              <div className={styles.planContent}>
                <div className={styles.planHeader}>
                  <div className={styles.planIcon} style={{ color: plan.color }}>
                    {IconComponent}
                  </div>
                  {isComplete && (
                    <div className={styles.completedBadge}>
                      <CrownIcon size={12} />
                      Complete
                    </div>
                  )}
                  {plan.category === 'special' && !isComplete && (
                    <div className={styles.specialBadge}>
                      ✦ Special
                    </div>
                  )}
                </div>

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>

                <div className={styles.planMeta}>
                  <span className={styles.planFocus}>
                    <Target size={12} />
                    {plan.focus}
                  </span>
                </div>

                <div className={styles.planStats}>
                  <div className={styles.planStat}>
                    <span className={styles.planStatValue}>{plan.totalDays}</span>
                    <span className={styles.planStatLabel}>Days</span>
                  </div>
                  <div className={styles.planStat}>
                    <span className={styles.planStatValue}>{plan.chaptersPerDay}</span>
                    <span className={styles.planStatLabel}>Chapters/Day</span>
                  </div>
                  <div className={styles.planStat}>
                    <span className={styles.planStatValue}>{plan.totalChapters}</span>
                    <span className={styles.planStatLabel}>Total Chapters</span>
                  </div>
                </div>

                {/* Progress Path */}
                <div className={styles.progressPath}>
                  <div className={styles.pathTrack}>
                    <div 
                      className={styles.pathFill}
                      style={{ width: `${percentage}%`, background: plan.gradient }}
                    />
                    <div 
                      className={styles.pathMarker}
                      style={{ left: `${percentage}%`, background: plan.color }}
                    >
                      {percentage > 0 && (
                        <span className={styles.pathMarkerLabel}>{Math.round(percentage)}%</span>
                      )}
                    </div>
                  </div>
                  
                  {/* Path Nodes */}
                  <div className={styles.pathNodes}>
                    {Array.from({ length: Math.min(plan.totalDays, 12) }, (_, i) => {
                      const day = Math.floor((i / 11) * (plan.totalDays - 1)) + 1
                      const isCompleted = day <= completed
                      const isCurrent = !isCompleted && completed + 1 === day
                      return (
                        <div
                          key={i}
                          className={`${styles.pathNode} ${isCompleted ? styles.completedNode : ''} ${isCurrent ? styles.currentNode : ''}`}
                          style={{
                            backgroundColor: isCompleted ? plan.color : 'rgba(255,255,255,0.06)',
                            borderColor: isCompleted ? plan.color : 'rgba(255,255,255,0.06)'
                          }}
                        />
                      )
                    })}
                  </div>
                </div>

                {/* Streak & Progress Info */}
                <div className={styles.planFooter}>
                  {streak > 0 && (
                    <div className={styles.streakBadge}>
                      <Flame size={14} />
                      <span>{streak} day{streak > 1 ? 's' : ''}</span>
                    </div>
                  )}
                  <div className={styles.progressText}>
                    <span>{completed} of {plan.totalDays} days</span>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`${styles.actionBtn} ${isComplete ? styles.completedAction : ''}`}
                  style={{
                    background: isComplete ? 'rgba(255,255,255,0.06)' : plan.gradient,
                    color: isComplete ? '#94A3B8' : '#07111F'
                  }}
                >
                  {isComplete ? (
                    'Completed ✓'
                  ) : percentage === 0 ? (
                    'Begin Journey'
                  ) : (
                    'Continue Journey'
                  )}
                  {!isComplete && <ArrowRight size={16} />}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
