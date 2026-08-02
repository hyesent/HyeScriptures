// src/components/Games/XPBar.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  getLevel, 
  getNextLevel, 
  getProgressToNextLevel, 
  getXpToNextLevel,
  getLevelColor,
  getLevelIconComponent
} from '../../lib/games/levels';
import styles from './XPBar.module.css';

interface XPBarProps {
  xp: number;
  showDetails?: boolean;
  compact?: boolean;
}

export const XPBar: React.FC<XPBarProps> = ({ xp, showDetails = true, compact = false }) => {
  const level = getLevel(xp);
  const nextLevel = getNextLevel(xp);
  const progress = getProgressToNextLevel(xp);
  const xpToNext = getXpToNextLevel(xp);
  const color = getLevelColor(xp);
  const icon = getLevelIconComponent(xp);

  if (compact) {
    return (
      <div className={styles.compactContainer}>
        <div 
          className={styles.compactIcon}
          style={{ backgroundColor: `${color}20`, borderColor: color }}
        >
          {icon}
        </div>
        <div className={styles.compactInfo}>
          <div className={styles.compactTitle}>{level.title}</div>
          <div className={styles.compactXp}>{xp.toLocaleString()} XP</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Level Display */}
      <div className={styles.levelDisplay}>
        <div 
          className={styles.levelIcon}
          style={{ backgroundColor: `${color}20`, borderColor: color }}
        >
          {icon}
        </div>
        <div>
          <div className={styles.levelTitle}>{level.title}</div>
          <div className={styles.levelDescription}>{level.description}</div>
        </div>
        {nextLevel && (
          <div className={styles.nextLevel}>
            <span className={styles.nextLevelLabel}>Next</span>
            <span className={styles.nextLevelTitle}>{nextLevel.title}</span>
          </div>
        )}
      </div>

      {/* XP Bar */}
      <div className={styles.xpBar}>
        <div className={styles.xpTrack}>
          <motion.div 
            className={styles.xpFill}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, progress)}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ background: `linear-gradient(90deg, ${color}, ${color}dd)` }}
          />
        </div>
        {showDetails && (
          <div className={styles.xpDetails}>
            <span className={styles.xpCurrent}>{xp.toLocaleString()} XP</span>
            {nextLevel && (
              <span className={styles.xpNext}>{xpToNext.toLocaleString()} XP to {nextLevel.title}</span>
            )}
          </div>
        )}
      </div>

      {/* Rank Badge */}
      <div className={styles.rankBadge}>
        <span>Rank {level.rank} of 17</span>
      </div>
    </div>
  );
};