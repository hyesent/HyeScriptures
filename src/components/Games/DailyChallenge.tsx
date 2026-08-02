// src/components/Games/DailyChallenge.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Crown,
  Target,
  Clock,
  Flame,
  Star,
  CheckCircle,
  XCircle,
  Loader2,
  Calendar,
  Award,
  TrendingUp,
  BookOpen,
  MessageSquare,
  BookMarked,
  Sword,
  User,
  PenTool,
  Gamepad2,
  Sparkles
} from 'lucide-react';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './DailyChallenge.module.css';

interface DailyChallengeProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Daily: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  ),
  Streak: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
};

// Game type icons mapping
const gameIcons: Record<string, React.ReactNode> = {
  'quiz': <BookOpen size={24} />,
  'who-said-it': <MessageSquare size={24} />,
  'book-order': <BookMarked size={24} />,
  'hangman': <Sword size={24} />,
  'who-am-i': <User size={24} />,
  'finish-verse': <PenTool size={24} />
};

const DailyChallenge: React.FC<DailyChallengeProps> = ({ onBack }) => {
  const [challenge, setChallenge] = useState<any>(null);
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('daily_challenge');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.date === today) {
        setChallenge(data.challenge);
        setCompleted(data.completed || false);
      }
    }
    
    const streakData = localStorage.getItem('daily_streak');
    if (streakData) {
      setStreak(parseInt(streakData));
    }
  }, []);

  const startChallenge = () => {
    setIsStarting(true);
    
    const games = [
      { type: 'quiz', label: 'Bible Quiz', icon: <BookOpen size={20} /> },
      { type: 'who-said-it', label: 'Who Said It?', icon: <MessageSquare size={20} /> },
      { type: 'book-order', label: 'Book Order', icon: <BookMarked size={20} /> },
      { type: 'hangman', label: 'Hangman', icon: <Sword size={20} /> },
      { type: 'who-am-i', label: 'Who Am I?', icon: <User size={20} /> },
      { type: 'finish-verse', label: 'Finish the Verse', icon: <PenTool size={20} /> },
    ];
    
    const random = games[Math.floor(Math.random() * games.length)];
    const today = new Date().toDateString();
    
    const newChallenge = {
      date: today,
      ...random,
      completed: false
    };
    
    localStorage.setItem('daily_challenge', JSON.stringify(newChallenge));
    setChallenge(newChallenge);
    setCompleted(false);
    setIsStarting(false);
  };

  const completeChallenge = () => {
    const saved = localStorage.getItem('daily_challenge');
    if (saved) {
      const data = JSON.parse(saved);
      data.completed = true;
      localStorage.setItem('daily_challenge', JSON.stringify(data));
      setCompleted(true);
      
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('daily_streak', newStreak.toString());
      
      // XP earned: base 50 + streak bonus
      const baseXP = 50;
      const streakBonus = Math.min(newStreak * 5, 50);
      const totalXP = baseXP + streakBonus;
      setXpEarned(totalXP);
      
      gameEngine.recordAnswer('daily-challenge', true, 'mixed');
    }
  };

  // ============================================================
  // START SCREEN (No Challenge)
  // ============================================================
  if (!challenge) {
    return (
      <div className={styles.container}>
        <div className={styles.ambientGlow} />
        
        <div className={styles.content}>
          <button className={styles.backBtn} onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <motion.div 
            className={styles.startCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
          >
            <div className={styles.startIcon}>
              <Icons.Daily />
            </div>
            <h2 className={styles.startTitle}>Daily Challenge</h2>
            <p className={styles.startSubtitle}>Complete a new challenge every day!</p>
            
            {streak > 0 && (
              <div className={styles.streakDisplay}>
                <Icons.Streak />
                <span>{streak} Day Streak</span>
              </div>
            )}
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.startBtn}
              onClick={startChallenge}
              disabled={isStarting}
            >
              {isStarting ? (
                <Loader2 size={18} className={styles.spinner} />
              ) : (
                <Sparkles size={18} />
              )}
              {isStarting ? 'Loading...' : 'Start Today\'s Challenge'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // COMPLETED SCREEN
  // ============================================================
  if (completed) {
    return (
      <div className={styles.container}>
        <div className={styles.ambientGlow} />
        
        <div className={styles.content}>
          <motion.div 
            className={styles.resultsCard}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
          >
            <motion.span 
              className={styles.resultsEmoji}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            >
              ✅
            </motion.span>

            <h2 className={styles.resultsTitle}>Challenge Complete!</h2>
            <p className={styles.resultsSubtitle}>
              You completed today's {challenge.label}
            </p>

            <div className={styles.streakCard}>
              <Icons.Streak />
              <span className={styles.streakNumber}>{streak}</span>
              <span className={styles.streakLabel}>Day Streak</span>
            </div>

            <motion.div 
              className={styles.xpEarned}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className={styles.xpEmoji}>✨</span>
              <span className={styles.xpValue}>+{xpEarned} XP</span>
            </motion.div>
            
            <div className={styles.resultsButtons}>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondary}
                onClick={onBack}
              >
                Menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // ACTIVE CHALLENGE SCREEN
  // ============================================================
  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <motion.div 
          className={styles.challengeCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: TIMING.NORMAL / 1000 }}
        >
          <div className={styles.challengeIcon}>
            {challenge.icon || <Gamepad2 size={32} />}
          </div>
          
          <h2 className={styles.challengeTitle}>Today's Challenge</h2>
          <p className={styles.challengeLabel}>{challenge.label}</p>
          <p className={styles.challengeHint}>Play this game and complete the challenge!</p>
          
          <div className={styles.challengeActions}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.completeBtn}
              onClick={completeChallenge}
            >
              <CheckCircle size={18} />
              Mark as Complete
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.menuBtn}
              onClick={onBack}
            >
              Menu
            </motion.button>
          </div>
          
          {streak > 0 && (
            <div className={styles.challengeStreak}>
              <Icons.Streak />
              <span>{streak} Day Streak</span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DailyChallenge;