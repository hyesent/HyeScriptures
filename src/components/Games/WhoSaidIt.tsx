// src/components/Games/WhoSaidIt.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Crown,
  ChevronRight,
  CheckCircle,
  XCircle,
  User,
  BookOpen,
  Target,
  TrendingUp
} from 'lucide-react';
import { getWhoSaidItQuestions, } from '../../data/games/who-said-it';
import type { QuoteQuestion } from '../../data/games/who-said-it';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './WhoSaidIt.module.css';

interface WhoSaidItProps {
  onBack: () => void;
}

const WhoSaidIt: React.FC<WhoSaidItProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuoteQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<QuoteQuestion['difficulty']>('easy');
  const [gameStarted, setGameStarted] = useState(false);
  const [results, setResults] = useState<{ correct: boolean; speaker: string }[]>([]);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const totalQuestions = 10;

  const startGame = () => {
    const qs = getWhoSaidItQuestions(totalQuestions);
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setGameOver(false);
    setScore(0);
    setStreak(0);
    setXpEarned(0);
    setResults([]);
    setGameStarted(true);
    setBestScore(gameEngine.getBestScore('who-said-it'));
    gameEngine.resetScore();
  };

  const handleAnswer = (speaker: string) => {
    if (selectedAnswer) return;

    const question = questions[currentIndex];
    const correct = speaker === question.speaker;
    setSelectedAnswer(speaker);

    const result = gameEngine.recordAnswer('who-said-it', correct, 'characters');
    setScore(result.score);
    setStreak(result.streak);
    setResults([...results, { correct, speaker: question.speaker }]);
    
    if (correct) {
      const baseXP = 40;
      const streakBonus = Math.min(streak * 8, 40);
      setXpEarned(prev => prev + baseXP + streakBonus);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setGameOver(true);
    }
  };

  // ============================================================
  // START SCREEN
  // ============================================================
  if (!gameStarted) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <button className={styles.backBtn} onClick={onBack}>
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <motion.div 
            className={`${styles.quizCard} ${styles.startCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.startIcon}>🗣️</div>
            <h2 className={styles.startTitle}>Who Said It?</h2>
            <p className={styles.startSubtitle}>Match Bible quotes to their speakers</p>

            <div className={styles.startOptions}>
              <div>
                <span className={styles.startLabel}>Difficulty</span>
                <div className={styles.startChipGroup}>
                  {['easy', 'medium', 'hard'].map((diff) => (
                    <button
                      key={diff}
                      className={`${styles.startChip} ${difficulty === diff ? styles.active : ''}`}
                      onClick={() => setDifficulty(diff as QuoteQuestion['difficulty'])}
                    >
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.startBtn}
                onClick={startGame}
              >
                Begin Mission →
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // RESULTS SCREEN
  // ============================================================
  if (gameOver) {
    const correctCount = results.filter(r => r.correct).length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const isNewBest = score >= bestScore && score > 0;
    
    let emoji = '💪';
    let message = 'Keep studying. You\'ll improve.';
    let messageClass = styles.purple;
    
    if (percentage >= 90) {
      emoji = '🌟';
      message = 'Incredible! You know the voices!';
      messageClass = styles.gold;
    } else if (percentage >= 70) {
      emoji = '👏';
      message = 'Great job! Keep pressing on!';
      messageClass = styles.blue;
    } else if (percentage >= 50) {
      emoji = '💪';
      message = 'Good effort! Keep learning!';
      messageClass = styles.purple;
    }

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={`${styles.quizCard} ${styles.resultsCard}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
          >
            <motion.span 
              className={styles.resultsEmoji}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            >
              {emoji}
            </motion.span>

            <h2 className={styles.resultsTitle}>Mission Complete</h2>
            <p className={`${styles.resultsMessage} ${messageClass}`}>{message}</p>

            {isNewBest && (
              <motion.div 
                className={styles.newBest}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                🏆 New Best Score!
              </motion.div>
            )}

            <div className={styles.resultsStats}>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{correctCount}/{totalQuestions}</span>
                <span className={styles.resultsStatLabel}>Correct</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{percentage}%</span>
                <span className={styles.resultsStatLabel}>Accuracy</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{score}</span>
                <span className={styles.resultsStatLabel}>Score</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{streak}</span>
                <span className={styles.resultsStatLabel}>Best Streak</span>
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
                🔄 Train Again
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondary}
                onClick={onBack}
              >
                🏠 Return
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // QUESTION SCREEN
  // ============================================================
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <motion.div 
          className={styles.quizCard}
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: TIMING.NORMAL / 1000 }}
        >
          {/* Progress Header */}
          <div className={styles.progressHeader}>
            <span className={styles.missionLabel}>
              Mission <strong>{currentIndex + 1}</strong> · Who Said It?
            </span>
            <div className={styles.scoreDisplay}>
              <span className={styles.scoreItem}>
                <Trophy size={16} />
                {score}
              </span>
              {streak > 1 && (
                <span className={styles.streakBadge}>
                  <Zap size={12} />
                  {streak}x
                </span>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: TIMING.LARGE / 1000 }}
            />
          </div>

          {/* Tags */}
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagCategory}`}>
              <User size={12} />
              Characters
            </span>
            <span className={`${styles.tag} ${styles.tagDifficulty}`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          {/* Quote */}
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>
              "{currentQuestion.text}"
            </p>
            <p className={styles.quoteReference}>
              {currentQuestion.reference}
            </p>
          </div>

          {/* Question Prompt */}
          <h4 className={styles.questionPrompt}>Who said this?</h4>

          {/* Options */}
          <div className={styles.options}>
            {currentQuestion.options.map((speaker, index) => {
              const isSelected = selectedAnswer === speaker;
              const isCorrect = speaker === currentQuestion.speaker;
              const showResult = selectedAnswer !== null;
              
              let optionClass = styles.option;
              if (showResult) optionClass += ` ${styles.disabled}`;
              if (showResult && isSelected && isCorrect) optionClass += ` ${styles.correct}`;
              if (showResult && isSelected && !isCorrect) optionClass += ` ${styles.wrong}`;
              if (showResult && !isSelected && isCorrect) optionClass += ` ${styles.showCorrect}`;

              return (
                <motion.button
                  key={speaker}
                  whileHover={!showResult ? { x: 4 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(speaker)}
                  disabled={showResult}
                  className={optionClass}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: TIMING.NORMAL / 1000 
                  }}
                >
                  <span className={styles.optionLetter}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className={styles.optionText}>{speaker}</span>
                  {showResult && isCorrect && (
                    <CheckCircle size={20} className={styles.optionIcon} />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle size={20} className={styles.optionIcon} />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {selectedAnswer && (
              <motion.div 
                className={`${styles.explanation} ${selectedAnswer === currentQuestion.speaker ? styles.correct : styles.wrong}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: TIMING.FAST / 1000 }}
              >
                <strong>
                  {selectedAnswer === currentQuestion.speaker ? '✓ Correct!' : '✗ Incorrect'}
                </strong>
                <p>
                  {selectedAnswer === currentQuestion.speaker 
                    ? 'Great job recognizing this voice from Scripture!'
                    : `This was said by ${currentQuestion.speaker}.`
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {selectedAnswer && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.nextBtn}
              onClick={nextQuestion}
              transition={{ duration: TIMING.FAST / 1000 }}
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  Next Question
                  <ChevronRight size={18} />
                </>
              ) : (
                <>
                  View Results
                  <Trophy size={18} />
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WhoSaidIt;