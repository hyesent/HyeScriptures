// src/components/Games/AchievementToast.tsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievementSlide } from '../../lib/animations';
import styles from './AchievementToast.module.css';

interface AchievementToastProps {
  title: string;
  description: string;
  reward: string;
  icon?: string;
  onHide: () => void;
  autoHideDelay?: number;
}

export const AchievementToast: React.FC<AchievementToastProps> = ({
  title,
  description,
  reward,
  icon = '🏆',
  onHide,
  autoHideDelay = 4000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, autoHideDelay);

    return () => clearTimeout(timer);
  }, [onHide, autoHideDelay]);

  return (
    <motion.div 
      className={styles.toast}
      variants={achievementSlide}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div 
        className={styles.icon}
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ 
          duration: 0.6,
          delay: 0.2,
          ease: 'easeInOut'
        }}
      >
        {icon}
      </motion.div>
      <div className={styles.content}>
        <motion.h4
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {title}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {description}
        </motion.p>
      </div>
      <motion.span 
        className={styles.reward}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: 0.3
        }}
      >
        {reward}
      </motion.span>
    </motion.div>
  );
};