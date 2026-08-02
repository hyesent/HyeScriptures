// src/components/Games/GameCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Star, TrendingUp, Crown, Calendar, Zap } from 'lucide-react';
import styles from './GameCard.module.css';

interface GameCardProps {
  title: string;
  icon: string;
  description: string;
  category: string;
  difficulty: string;
  reward: string;
  onClick: () => void;
  bestScore?: number;
  locked?: boolean;
  isDaily?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  icon,
  description,
  category,
  difficulty,
  reward,
  onClick,
  bestScore = 0,
  locked = false,
  isDaily = false
}) => {
  // Color mapping based on difficulty
  const difficultyColors = {
    'Beginner': { color: '#5FAF75', dark: '#3d8a5a' },
    'Intermediate': { color: '#D4AF37', dark: '#b8941a' },
    'Advanced': { color: '#B86161', dark: '#8a4a4a' },
    'Variable': { color: '#8a7aaa', dark: '#6a5a8a' }
  };

  const diffColor = difficultyColors[difficulty as keyof typeof difficultyColors] || difficultyColors['Beginner'];

  return (
    <motion.div
      whileHover={!locked ? { y: -4, scale: 1.01 } : {}}
      whileTap={!locked ? { scale: 0.98 } : {}}
      onClick={!locked ? onClick : undefined}
      className={`${styles.card} ${locked ? styles.locked : ''}`}
      style={{ 
        '--card-color': diffColor.color,
        '--card-color-dark': diffColor.dark,
        '--icon-bg': `${diffColor.color}15`,
        '--icon-border': `${diffColor.color}25`
      } as React.CSSProperties}
    >
      {/* Top bar */}
      <div className={styles.topBar} />

      {/* Badge */}
      {isDaily && !locked && (
        <div className={styles.badge}>
          <Calendar size={12} />
          Daily
        </div>
      )}

      {!isDaily && bestScore > 0 && !locked && (
        <div className={styles.badge} style={{ 
          background: 'rgba(255,255,255,0.06)', 
          color: '#94A3B8',
          border: '1px solid rgba(255,255,255,0.04)'
        }}>
          <Star size={12} />
          Best: {bestScore}
        </div>
      )}

      {/* Lock Overlay */}
      {locked && (
        <div className={styles.lockOverlay}>
          <Lock size={28} />
          <span>Coming Soon</span>
        </div>
      )}

      {/* Content */}
      <div className={styles.topSection}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <div className={styles.titleGroup}>
          <h3>{title}</h3>
          <span className={styles.category}>{category}</span>
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      {/* Difficulty & Reward */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        marginBottom: '16px',
        fontSize: '12px',
        color: '#94A3B8'
      }}>
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          padding: '2px 12px',
          borderRadius: '12px',
          background: `${diffColor.color}15`,
          color: diffColor.color,
          fontSize: '11px',
          fontWeight: '600'
        }}>
          <Zap size={12} />
          {difficulty}
        </span>
        <span style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: '#D4AF37'
        }}>
          <Crown size={14} />
          {reward}
        </span>
      </div>

      {/* Best Score */}
      {bestScore > 0 && !locked && !isDaily && (
        <div className={styles.bestScore}>
          <TrendingUp size={14} />
          <span>Best Score: {bestScore} pts</span>
        </div>
      )}

      {/* Play Button */}
      {!locked && (
        <div className={styles.playArea}>
          <span className={styles.playLabel}>
            {isDaily ? 'Start Challenge →' : 'Play →'}
          </span>
          <div className={styles.playBtn}>
            <span style={{ fontSize: '14px' }}>▶</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GameCard;