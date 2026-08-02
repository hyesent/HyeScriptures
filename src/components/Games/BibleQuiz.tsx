// src/components/Games/BibleQuiz.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Target, 
  Zap, 
  Trophy,
  CheckCircle,
  XCircle,
  ChevronRight,
  Crown,
  Star,
  TrendingUp
} from 'lucide-react';
import { getQuizQuestions, getCategories, getDifficulties } from '../../data/games/bible-quiz';
import type { QuizQuestion } from '../../data/games/bible-quiz';
import { gameEngine } from '../../lib/games/game-engine';
import styles from './BibleQuiz.module.css';

interface BibleQuizProps {
  onBack: () => void;
}

const BibleQuiz: React.FC<BibleQuizProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [category, setCategory] = useState<QuizQuestion['category']>('mixed');
  const [difficulty, setDifficulty] = useState<QuizQuestion['difficulty']>('easy');
  const [gameStarted, setGameStarted] = useState(false);
  const [results, setResults] = useState<{ correct: boolean; question: string }[]>([]);
  const [xpEarned, setXpEarned] = useState(0);

  const totalQuestions = 10;

  const startGame = () => {
    const qs = getQuizQuestions(category, difficulty, totalQuestions);
    if (qs.length === 0) {
      alert('No questions found. Try another category.');
      return;
    }
    setQuestions(qs);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setGameOver(false);
    setScore(0);
    setStreak(0);
    setXpEarned(0);
    setResults([]);
    setGameStarted(true);
    gameEngine.resetScore();
  };

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;

    const question = questions[currentIndex];
    const correct = index === question.correct;
    setSelectedAnswer(index);
    setShowExplanation(true);

    const result = gameEngine.recordAnswer('bible-quiz', correct, question.category);
    setScore(result.score);
    setStreak(result.streak);
    setResults([...results, { correct, question: question.question }]);
    
    if (correct) {
      // XP earned: base + streak bonus
      const baseXP = 50;
      const streakBonus = Math.min(streak * 10, 50);
      setXpEarned(prev => prev + baseXP + streakBonus);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameOver(true);
    }
  };

  if (!gameStarted) {
    return <StartScreen 
      onBack={onBack} 
      category={category} 
      difficulty={difficulty} 
      setCategory={setCategory} 
      setDifficulty={setDifficulty} 
      startGame={startGame} 
    />;
  }

  if (gameOver) {
    const correctCount = results.filter(r => r.correct).length;
    const bestScore = gameEngine.getBestScore('bible-quiz');
    const isNewBest = score >= bestScore && score > 0;
    
    return <ResultsScreen 
      correctCount={correctCount} 
      totalQuestions={totalQuestions} 
      score={score} 
      streak={streak} 
      results={results} 
      xpEarned={xpEarned}
      isNewBest={isNewBest} 
      onPlayAgain={startGame} 
      onBack={onBack} 
    />;
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return <QuestionScreen 
    currentQuestion={currentQuestion} 
    currentIndex={currentIndex} 
    totalQuestions={totalQuestions} 
    progress={progress} 
    score={score} 
    streak={streak} 
    selectedAnswer={selectedAnswer} 
    showExplanation={showExplanation} 
    handleAnswer={handleAnswer} 
    nextQuestion={nextQuestion} 
    onBack={onBack} 
  />;
};

// ========== START SCREEN ==========
const StartScreen: React.FC<{
  onBack: () => void;
  category: QuizQuestion['category'];
  difficulty: QuizQuestion['difficulty'];
  setCategory: (c: QuizQuestion['category']) => void;
  setDifficulty: (d: QuizQuestion['difficulty']) => void;
  startGame: () => void;
}> = ({ onBack, category, difficulty, setCategory, setDifficulty, startGame }) => {
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
          <div className={styles.startIcon}>📖</div>
          <h2 className={styles.startTitle}>Bible Quiz</h2>
          <p className={styles.startSubtitle}>Test your knowledge with {10} questions</p>

          <div className={styles.startOptions}>
            <div>
              <span className={styles.startLabel}>Category</span>
              <div className={styles.startChipGroup}>
                {getCategories().map((cat) => (
                  <button
                    key={cat.value}
                    className={`${styles.startChip} ${category === cat.value ? styles.active : ''}`}
                    onClick={() => setCategory(cat.value)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className={styles.startLabel}>Difficulty</span>
              <div className={`${styles.startChipGroup} ${styles.difficulty}`}>
                {getDifficulties().map((diff) => (
                  <button
                    key={diff.value}
                    className={`${styles.startChip} ${difficulty === diff.value ? styles.active : ''}`}
                    onClick={() => setDifficulty(diff.value)}
                  >
                    {diff.label}
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
};

// ========== QUESTION SCREEN ==========
const QuestionScreen: React.FC<{
  currentQuestion: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  progress: number;
  score: number;
  streak: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  handleAnswer: (index: number) => void;
  nextQuestion: () => void;
  onBack: () => void;
}> = ({ currentQuestion, currentIndex, totalQuestions, progress, score, streak, selectedAnswer, showExplanation, handleAnswer, nextQuestion, onBack }) => {
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
        >
          {/* Progress Header */}
          <div className={styles.progressHeader}>
            <span className={styles.missionLabel}>
              Mission <strong>{currentIndex + 1}</strong> · {currentQuestion.category.replace('-', ' ')}
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
              transition={{ duration: 0.45 }}
            />
          </div>

          {/* Tags */}
          <div className={styles.tags}>
            <span className={`${styles.tag} ${styles.tagCategory}`}>
              {currentQuestion.category.replace('-', ' ')}
            </span>
            <span className={`${styles.tag} ${styles.tagDifficulty}`}>
              {currentQuestion.difficulty}
            </span>
          </div>

          {/* Question */}
          <h3 className={styles.question}>{currentQuestion.question}</h3>

          {/* Options */}
          <div className={styles.options}>
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correct;
              const showResult = selectedAnswer !== null;
              
              let optionClass = styles.option;
              if (showResult) optionClass += ` ${styles.disabled}`;
              if (showResult && isSelected && isCorrect) optionClass += ` ${styles.correct}`;
              if (showResult && isSelected && !isCorrect) optionClass += ` ${styles.wrong}`;
              if (showResult && !isSelected && isCorrect) optionClass += ` ${styles.showCorrect}`;

              return (
                <motion.button
                  key={index}
                  whileHover={!showResult ? { x: 4 } : {}}
                  whileTap={!showResult ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={optionClass}
                >
                  <span className={styles.optionLetter}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
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
            {showExplanation && (
              <motion.div 
                className={`${styles.explanation} ${selectedAnswer === currentQuestion.correct ? styles.correct : styles.wrong}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <strong>{selectedAnswer === currentQuestion.correct ? '✓ Correct!' : '✗ Incorrect'}</strong>
                <p>{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {showExplanation && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.nextBtn}
              onClick={nextQuestion}
            >
              {currentIndex < totalQuestions - 1 ? (
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

// ========== RESULTS SCREEN ==========
const ResultsScreen: React.FC<{
  correctCount: number;
  totalQuestions: number;
  score: number;
  streak: number;
  results: { correct: boolean; question: string }[];
  xpEarned: number;
  isNewBest: boolean;
  onPlayAgain: () => void;
  onBack: () => void;
}> = ({ correctCount, totalQuestions, score, streak, results, xpEarned, isNewBest, onPlayAgain, onBack }) => {
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  
  let emoji = '💪';
  let message = 'Keep reading. You\'ll improve.';
  let messageClass = styles.purple;
  
  if (percentage >= 90) {
    emoji = '🌟';
    message = 'Excellent! You\'re a Bible Scholar!';
    messageClass = styles.gold;
  } else if (percentage >= 70) {
    emoji = '👏';
    message = 'Great Job! Keep pressing on!';
    messageClass = styles.blue;
  } else if (percentage >= 50) {
    emoji = '💪';
    message = 'Good effort! Keep learning!';
    messageClass = styles.purple;
  } else {
    messageClass = styles.green;
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

          {/* Stats */}
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

          {/* XP Earned */}
          <motion.div 
            className={styles.newBest}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ 
              background: 'rgba(212,175,55,0.08)',
              borderColor: 'rgba(212,175,55,0.15)',
              marginBottom: '24px'
            }}
          >
            <span style={{ fontSize: '20px' }}>✨</span>
            <span style={{ fontSize: '16px' }}>+{xpEarned} XP</span>
          </motion.div>

          {/* Results List */}
          <div className={styles.resultsList}>
            {results.map((result, index) => (
              <div 
                key={index} 
                className={`${styles.resultsListItem} ${result.correct ? styles.correct : styles.wrong}`}
              >
                <span>{result.correct ? '✓' : '✗'}</span>
                <span>{result.question}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className={styles.resultsButtons}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.primary}
              onClick={onPlayAgain}
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
};

export default BibleQuiz;