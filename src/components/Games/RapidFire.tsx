// src/components/Games/RapidFire.tsx
import React, { useState, useEffect, useCallback } from 'react';
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
  Award,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { getRapidFireQuestions, } from '../../data/games/rapid-fire';
import type {  RapidFireQuestion } from '../../data/games/rapid-fire';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './RapidFire.module.css';

interface RapidFireProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Rapid: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  True: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  False: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
};

const RapidFire: React.FC<RapidFireProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<RapidFireQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{ show: boolean; correct: boolean; text: string }>({ show: false, correct: false, text: '' });
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isAnswering, setIsAnswering] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const totalQuestions = 15;

  const startGame = () => {
    const qs = getRapidFireQuestions(totalQuestions);
    setQuestions(qs);
    setCurrentIndex(0);
    setQuestionNumber(0);
    setScore(0);
    setAnswered(0);
    setCorrect(0);
    setTimeLeft(60);
    setStreak(0);
    setXpEarned(0);
    setIsAnswering(false);
    setGameStarted(true);
    setGameOver(false);
    setBestScore(gameEngine.getBestScore('rapid-fire'));
    setFeedback({ show: false, correct: false, text: '' });
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimerInterval(interval);
  };

  const handleAnswer = (answer: boolean) => {
    if (gameOver) return;
    if (currentIndex >= questions.length) return;
    if (isAnswering) return;
    
    setIsAnswering(true);
    const question = questions[currentIndex];
    const isCorrect = answer === question.isTrue;
    
    setAnswered(prev => prev + 1);
    setQuestionNumber(prev => prev + 1);
    
    if (isCorrect) {
      setCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      const bonus = Math.min(streak, 5);
      const points = 10 + bonus;
      setScore(prev => prev + points);
      
      const baseXP = 8;
      const streakBonus = Math.min(streak * 2, 10);
      setXpEarned(prev => prev + baseXP + streakBonus);
    } else {
      setStreak(0);
    }
    
    setFeedback({
      show: true,
      correct: isCorrect,
      text: isCorrect ? 'Correct!' : `Incorrect - ${question.explanation}`
    });
    
    setTimeout(() => {
      setFeedback({ show: false, correct: false, text: '' });
      setIsAnswering(false);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setGameOver(true);
        if (timerInterval) clearInterval(timerInterval);
        gameEngine.recordAnswer('rapid-fire', true, 'mixed');
      }
    }, 700);
  };

  const getTimeColor = () => {
    if (timeLeft > 30) return styles.timeHigh;
    if (timeLeft > 15) return styles.timeMedium;
    return styles.timeLow;
  };

  const getTimePercentage = () => {
    return (timeLeft / 60) * 100;
  };

  // ============================================================
  // START SCREEN
  // ============================================================
  if (!gameStarted) {
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
              <Icons.Rapid />
            </div>
            <h2 className={styles.startTitle}>Rapid Fire</h2>
            <p className={styles.startSubtitle}>Answer as many True/False questions as you can in 60 seconds!</p>
            <p className={styles.startCount}>15 questions available</p>
            
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.startBtn}
              onClick={startGame}
            >
              <Zap size={18} />
              Begin Rapid Fire
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // GAME OVER SCREEN
  // ============================================================
  if (gameOver) {
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    const isNewBest = score >= bestScore && score > 0;
    
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
              ⚡
            </motion.span>

            <h2 className={styles.resultsTitle}>Time's Up!</h2>
            <p className={styles.resultsSubtitle}>
              You answered {answered} questions
            </p>

            {isNewBest && (
              <motion.div 
                className={styles.newBest}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Crown size={14} />
                New Best Score!
              </motion.div>
            )}
            
            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{score}</span>
                <span className={styles.resultsStatLabel}>Score</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{accuracy}%</span>
                <span className={styles.resultsStatLabel}>Accuracy</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{correct}</span>
                <span className={styles.resultsStatLabel}>Correct</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{answered}</span>
                <span className={styles.resultsStatLabel}>Answered</span>
              </div>
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
                className={styles.primary}
                onClick={startGame}
              >
                <Zap size={16} />
                Play Again
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondary}
                onClick={() => {
                  if (timerInterval) clearInterval(timerInterval);
                  setGameStarted(false);
                  setGameOver(false);
                }}
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
  // ACTIVE GAME
  // ============================================================
  const currentQ = questions[currentIndex];
  const progress = (questionNumber / totalQuestions) * 100;
  const timeProgress = getTimePercentage();

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <div className={styles.gameCard}>
          {/* Header */}
          <div className={styles.gameHeader}>
            <div>
              <span className={styles.gameModeLabel}>
                <Zap size={16} />
                Rapid Fire
              </span>
              <span className={styles.gameProgress}>
                Question {questionNumber + 1} of {totalQuestions}
              </span>
            </div>
            <div className={styles.gameStats}>
              <span className={styles.gameScore}>
                <Trophy size={14} />
                {score}
              </span>
              {streak > 1 && (
                <span className={styles.streakBadge}>
                  <Flame size={12} />
                  {streak}x
                </span>
              )}
              <span className={styles.gameTime}>
                <Clock size={14} />
                {timeLeft}s
              </span>
            </div>
          </div>

          {/* Timer Bar */}
          <div className={styles.timerTrack}>
            <motion.div 
              className={`${styles.timerFill} ${getTimeColor()}`}
              initial={{ width: '100%' }}
              animate={{ width: `${timeProgress}%` }}
              transition={{ duration: TIMING.FAST / 1000 }}
            />
          </div>

          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: TIMING.NORMAL / 1000 }}
            />
          </div>

          {/* Question */}
          <div className={styles.questionContainer}>
            <p className={styles.questionText}>
              {currentQ?.statement}
            </p>
            {feedback.show && (
              <motion.div 
                className={`${styles.feedback} ${feedback.correct ? styles.feedbackCorrect : styles.feedbackWrong}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className={styles.feedbackIcon}>
                  {feedback.correct ? <Icons.True /> : <XCircle size={18} />}
                </span>
                <span>{feedback.text}</span>
              </motion.div>
            )}
          </div>

          {/* Answer Buttons */}
          <div className={styles.answerGrid}>
            <motion.button
              onClick={() => handleAnswer(true)}
              disabled={feedback.show || isAnswering}
              className={`${styles.answerBtn} ${styles.answerTrue}`}
              whileHover={!feedback.show && !isAnswering ? { scale: 1.02 } : {}}
              whileTap={!feedback.show && !isAnswering ? { scale: 0.95 } : {}}
            >
              <Icons.True />
              True
            </motion.button>
            <motion.button
              onClick={() => handleAnswer(false)}
              disabled={feedback.show || isAnswering}
              className={`${styles.answerBtn} ${styles.answerFalse}`}
              whileHover={!feedback.show && !isAnswering ? { scale: 1.02 } : {}}
              whileTap={!feedback.show && !isAnswering ? { scale: 0.95 } : {}}
            >
              <Icons.False />
              False
            </motion.button>
          </div>

          {/* Bottom Stats */}
          <div className={styles.bottomStats}>
            <span>Score: {score}</span>
            {streak > 1 && <span className={styles.streakText}>🔥 {streak} streak</span>}
            <span>Answered: {answered}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RapidFire;