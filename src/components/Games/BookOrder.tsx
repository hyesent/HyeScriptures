// src/components/Games/BookOrder.tsx
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Crown,
  ChevronRight,
  CheckCircle,
  XCircle,
  BookOpen,
  Target,
  Clock,
  Heart,
  Flame,
  Star,
  Layers,
  Shuffle,
  Brain,
  Lightbulb,
  Loader2
} from 'lucide-react';
import { getTestaments, oldTestamentBooks, newTestamentBooks } from '../../data/games/book-order';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './BookOrder.module.css';

interface BookOrderProps {
  onBack: () => void;
}

type GameMode = 'classic' | 'speed' | 'challenge' | 'categories' | 'reorder' | 'memory';
type Difficulty = 'easy' | 'medium' | 'hard';

const BookOrder: React.FC<BookOrderProps> = ({ onBack }) => {
  // Game State
  const [testament, setTestament] = useState<'old' | 'new'>('old');
  const [gameMode, setGameMode] = useState<GameMode>('classic');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [availableBooks, setAvailableBooks] = useState<string[]>([]);
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [streak, setStreak] = useState(0);
  const [combo, setCombo] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);
  const [lives, setLives] = useState(3);
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isWrong, setIsWrong] = useState(false);
  const [shuffledBooks, setShuffledBooks] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [showHint, setShowHint] = useState(false);

  const correctOrder = testament === 'old' ? oldTestamentBooks : newTestamentBooks;
  const maxAttempts = difficulty === 'easy' ? 3 : difficulty === 'medium' ? 2 : 1;

  // Game Mode Configurations
  const gameModes = [
    { id: 'classic' as GameMode, label: 'Classic', icon: <Target size={20} />, desc: 'Place books in order' },
    { id: 'speed' as GameMode, label: 'Speed', icon: <Clock size={20} />, desc: 'Race against time' },
    { id: 'challenge' as GameMode, label: 'Challenge', icon: <Flame size={20} />, desc: '3 lives' },
    { id: 'categories' as GameMode, label: 'Categories', icon: <Layers size={20} />, desc: 'Group by type' },
    { id: 'reorder' as GameMode, label: 'Reorder', icon: <Shuffle size={20} />, desc: 'Swap to correct order' },
    { id: 'memory' as GameMode, label: 'Memory', icon: <Brain size={20} />, desc: 'Find matching pairs' }
  ];

  // Category Groups
  const getCategoryGroups = () => {
    if (testament === 'old') {
      return {
        'Law': ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'],
        'History': ['Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', 
                    '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther'],
        'Wisdom': ['Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
        'Prophets': ['Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 
                     'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 
                     'Haggai', 'Zechariah', 'Malachi']
      };
    } else {
      return {
        'Gospels': ['Matthew', 'Mark', 'Luke', 'John'],
        'History': ['Acts'],
        'Pauline': ['Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 
                    'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', 
                    '1 Timothy', '2 Timothy', 'Titus', 'Philemon'],
        'General': ['Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude'],
        'Prophecy': ['Revelation']
      };
    }
  };

  // ============================================================
  // GAME FUNCTIONS
  // ============================================================

  const getGameBooks = useCallback(() => {
    if (gameMode === 'categories') {
      return Object.values(getCategoryGroups()).flat();
    }
    return correctOrder;
  }, [gameMode, correctOrder]);

  const startGame = useCallback(() => {
    const gameBooks = getGameBooks();
    const shuffled = [...gameBooks].sort(() => Math.random() - 0.5);
    
    setShuffledBooks(shuffled);
    setAvailableBooks(shuffled);
    setSelectedBooks([]);
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setAttempts(0);
    setTime(0);
    setStreak(0);
    setCombo(0);
    setLevel(1);
    setTotalCorrect(0);
    setTotalWrong(0);
    setXpEarned(0);
    setLives(3);
    setIsWrong(false);
    setSelectedIndex(null);
    setHintsRemaining(3);
    setShowHint(false);
    setBestScore(gameEngine.getBestScore('book-order'));
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      setTime(prev => {
        const newTime = prev + 1;
        if (gameMode === 'speed' && newTime > 60) {
          setGameOver(true);
          if (timerInterval) clearInterval(timerInterval);
        }
        return newTime;
      });
    }, 1000);
    setTimerInterval(interval);
  }, [gameMode, getGameBooks]);

  // ============================================================
  // HANDLERS
  // ============================================================

  const handleBookClick = (book: string) => {
    if (gameOver) return;
    
    const nextIndex = selectedBooks.length;
    const correctBook = correctOrder[nextIndex];
    
    if (book === correctBook) {
      setIsWrong(false);
      setSelectedBooks([...selectedBooks, book]);
      setAvailableBooks(availableBooks.filter(b => b !== book));
      
      const points = 10 + (combo * 2) + (gameMode === 'speed' ? 5 : 0);
      setScore(prev => prev + points);
      setTotalCorrect(prev => prev + 1);
      setStreak(prev => prev + 1);
      setCombo(prev => prev + 1);
      setAttempts(0);
      setShowHint(false);
      
      const baseXP = 15;
      const streakBonus = Math.min(streak * 5, 25);
      setXpEarned(prev => prev + baseXP + streakBonus);
      
      if ((totalCorrect + 1) % 5 === 0 && totalCorrect > 0) {
        setLevel(prev => prev + 1);
      }
      
      if (selectedBooks.length + 1 === correctOrder.length) {
        setGameOver(true);
        if (timerInterval) {
          clearInterval(timerInterval);
          setTimerInterval(null);
        }
        const bonus = Math.max(0, 100 - time);
        setScore(prev => prev + bonus);
        gameEngine.recordAnswer('book-order', true, testament === 'old' ? 'old-testament' : 'new-testament');
        if (score > highScore) setHighScore(score);
      }
    } else {
      setIsWrong(true);
      setAttempts(prev => prev + 1);
      setTotalWrong(prev => prev + 1);
      setStreak(0);
      setCombo(0);
      
      setAvailableBooks(availableBooks.filter(b => b !== book));
      
      if (gameMode === 'challenge') {
        setLives(prev => prev - 1);
        if (lives <= 1) {
          setGameOver(true);
          if (timerInterval) clearInterval(timerInterval);
        }
      }
    }
  };

  const handleReorderClick = (index: number) => {
    if (gameOver) return;
    
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      const newShuffled = [...shuffledBooks];
      const temp = newShuffled[selectedIndex];
      newShuffled[selectedIndex] = newShuffled[index];
      newShuffled[index] = temp;
      setShuffledBooks(newShuffled);
      setSelectedIndex(null);
      
      const isCorrect = newShuffled.every((book, i) => book === correctOrder[i]);
      if (isCorrect) {
        setGameOver(true);
        if (timerInterval) clearInterval(timerInterval);
        const points = 100 - (time * 2);
        setScore(Math.max(points, 10));
        gameEngine.recordAnswer('book-order', true, testament === 'old' ? 'old-testament' : 'new-testament');
      }
    }
  };

  // HINT - Gives a clue WITHOUT revealing the exact book
  const useHint = () => {
    if (hintsRemaining > 0 && !gameOver) {
      setShowHint(true);
      setHintsRemaining(prev => prev - 1);
    }
  };

  // Generate hint based on the next book's position
  const getHintForBook = (bookName: string): string => {
    const index = correctOrder.indexOf(bookName);
    const total = correctOrder.length;
    const position = index + 1;
    
    const hints = [
      `This book is in the ${position <= total / 3 ? 'first' : position <= total * 2 / 3 ? 'middle' : 'last'} third of the ${testament === 'old' ? 'Old' : 'New'} Testament`,
      `This book comes after ${index > 0 ? correctOrder[index - 1] : 'the beginning'}`,
      `There are ${total - position} books after this one`,
      `This book is ${position} of ${total} in the ${testament === 'old' ? 'Old' : 'New'} Testament`,
      `This book is ${position <= total / 2 ? 'earlier' : 'later'} in the ${testament === 'old' ? 'Old' : 'New'} Testament`
    ];
    
    return hints[Math.floor(Math.random() * hints.length)];
  };

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ============================================================
  // RENDER FUNCTIONS
  // ============================================================

  // CATEGORIES MODE
  const renderCategoriesMode = () => {
    const categories = getCategoryGroups();
    
    return (
      <div className={styles.gameCard}>
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              <Layers size={16} />
              Categories
            </span>
            <span className={styles.gameProgress}>
              Group books by category
            </span>
          </div>
          <div className={styles.gameStats}>
            <span className={styles.gameScore}>
              <Trophy size={14} />
              {score}
            </span>
            <span className={styles.gameTime}>
              <Clock size={14} />
              {getTimeString(time)}
            </span>
          </div>
        </div>

        <div className={styles.categoryGrid}>
          {Object.entries(categories).map(([category, books]) => (
            <div key={category} className={styles.categoryGroup}>
              <h4 className={styles.categoryTitle}>{category}</h4>
              <div className={styles.categoryBooks}>
                {books.map(book => (
                  <span key={book} className={styles.categoryBook}>
                    {book}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // REORDER MODE
  const renderReorderMode = () => {
    return (
      <div className={styles.gameCard}>
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              <Shuffle size={16} />
              Reorder
            </span>
            <span className={styles.gameProgress}>
              Swap books to correct order
            </span>
          </div>
          <div className={styles.gameStats}>
            <span className={styles.gameScore}>
              <Trophy size={14} />
              {score}
            </span>
            <span className={styles.gameTime}>
              <Clock size={14} />
              {getTimeString(time)}
            </span>
          </div>
        </div>

        <div className={styles.reorderGrid}>
          {shuffledBooks.map((book, index) => (
            <motion.button
              key={book + index}
              className={`${styles.reorderBook} ${selectedIndex === index ? styles.selected : ''}`}
              onClick={() => handleReorderClick(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {book}
              {selectedIndex === index && ' 👆'}
            </motion.button>
          ))}
        </div>

        <div className={styles.reorderHint}>
          {selectedIndex === null ? 'Click a book to select' : 'Click another book to swap'}
        </div>
      </div>
    );
  };

  // MEMORY MODE (Coming Soon)
  const renderMemoryMode = () => (
    <div className={styles.gameCard}>
      <div className={styles.comingSoon}>
        <span className={styles.comingSoonIcon}><Brain size={48} /></span>
        <h3>Memory Mode Coming Soon</h3>
        <p>Try other modes while we prepare this feature</p>
      </div>
    </div>
  );

  // START SCREEN
  const renderStartScreen = () => (
    <motion.div 
      className={styles.startCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: TIMING.NORMAL / 1000 }}
    >
      <div className={styles.startIcon}>
        <BookOpen size={48} strokeWidth={1.5} />
      </div>
      <h2 className={styles.startTitle}>Book Order</h2>
      <p className={styles.startSubtitle}>Master the order of the Bible books</p>

      <div className={styles.startSection}>
        <span className={styles.startLabel}>Testament</span>
        <div className={styles.chipGroup}>
          {getTestaments().map((t) => (
            <button
              key={t.value}
              className={`${styles.chip} ${testament === t.value ? styles.active : ''}`}
              onClick={() => setTestament(t.value)}
            >
              {t.label}
              <span className={styles.chipCount}>{t.count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.startSection}>
        <span className={styles.startLabel}>Game Mode</span>
        <div className={styles.modeGrid}>
          {gameModes.map((mode) => (
            <button
              key={mode.id}
              className={`${styles.modeChip} ${gameMode === mode.id ? styles.active : ''}`}
              onClick={() => setGameMode(mode.id)}
            >
              <span className={styles.modeIcon}>{mode.icon}</span>
              <span className={styles.modeLabel}>{mode.label}</span>
              <span className={styles.modeDesc}>{mode.desc}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.startSection}>
        <span className={styles.startLabel}>Difficulty</span>
        <div className={styles.chipGroup}>
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
            <button
              key={d}
              className={`${styles.chip} ${difficulty === d ? styles.active : ''}`}
              onClick={() => setDifficulty(d)}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
              <span className={styles.chipCount}>
                {d === 'easy' ? '3 tries' : d === 'medium' ? '2 tries' : '1 try'}
              </span>
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
        Begin Mission
        <ChevronRight size={18} />
      </motion.button>
    </motion.div>
  );

  // GAME OVER SCREEN
  const renderGameOver = () => {
    const isWin = totalCorrect > totalWrong || selectedBooks.length === correctOrder.length;
    const percentage = totalCorrect + totalWrong > 0 
      ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
      : 0;
    const isNewBest = score >= bestScore && score > 0;
    
    return (
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
          {isWin ? '🏆' : '💪'}
        </motion.span>

        <h2 className={styles.resultsTitle}>
          {isWin ? 'Mission Complete!' : 'Keep Practicing'}
        </h2>
        {isWin && (
          <p className={styles.resultsSubtitle}>
            Completed in {getTimeString(time)}
          </p>
        )}

        {isNewBest && (
          <motion.div 
            className={styles.newBest}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Star size={14} />
            New Best Score!
          </motion.div>
        )}

        <div className={styles.resultsStats}>
          <div className={styles.resultsStat}>
            <span className={styles.resultsStatValue}>{score}</span>
            <span className={styles.resultsStatLabel}>Score</span>
          </div>
          <div className={styles.resultsStat}>
            <span className={styles.resultsStatValue}>{totalCorrect}</span>
            <span className={styles.resultsStatLabel}>Correct</span>
          </div>
          <div className={styles.resultsStat}>
            <span className={styles.resultsStatValue}>{totalWrong}</span>
            <span className={styles.resultsStatLabel}>Wrong</span>
          </div>
          <div className={styles.resultsStat}>
            <span className={styles.resultsStatValue}>{percentage}%</span>
            <span className={styles.resultsStatLabel}>Accuracy</span>
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
            Train Again
          </motion.button>
          <div className={styles.resultsSecondaryGroup}>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondary}
              onClick={() => {
                setGameStarted(false);
                setGameOver(false);
              }}
            >
              Change Mode
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondary}
              onClick={onBack}
            >
              Menu
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  // ACTIVE GAME
  const renderActiveGame = () => {
    // Render different modes
    if (gameMode === 'categories') return renderCategoriesMode();
    if (gameMode === 'reorder') return renderReorderMode();
    if (gameMode === 'memory') return renderMemoryMode();

    // Classic, Speed, Challenge modes
    const progress = (selectedBooks.length / correctOrder.length) * 100;
    const nextBookName = correctOrder[selectedBooks.length];
    const hintText = nextBookName ? getHintForBook(nextBookName) : '';

    return (
      <div className={styles.gameCard}>
        <div className={styles.gameHeader}>
          <div>
            <span className={styles.gameModeLabel}>
              {gameMode === 'classic' && <Target size={16} />}
              {gameMode === 'speed' && <Clock size={16} />}
              {gameMode === 'challenge' && <Flame size={16} />}
              {gameMode.charAt(0).toUpperCase() + gameMode.slice(1)}
            </span>
            <span className={styles.gameProgress}>
              Level {level} • {selectedBooks.length} of {correctOrder.length}
            </span>
          </div>
          <div className={styles.gameStats}>
            <span className={styles.gameScore}>
              <Trophy size={14} />
              {score}
            </span>
            <span className={styles.gameTime}>
              <Clock size={14} />
              {getTimeString(time)}
            </span>
            {gameMode === 'challenge' && (
              <span className={styles.gameLives}>
                <Heart size={14} />
                {lives}
              </span>
            )}
          </div>
        </div>

        <div className={styles.progressTrack}>
          <motion.div 
            className={styles.progressFill}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: TIMING.LARGE / 1000 }}
          />
        </div>

        <div className={styles.statsBar}>
          <span><Flame size={12} /> Streak: {streak}</span>
          <span><Zap size={12} /> Combo: {combo}x</span>
          {gameMode === 'speed' && (
            <span><Clock size={12} /> {60 - time}s left</span>
          )}
          <span><Target size={12} /> {attempts}/{maxAttempts} tries</span>
          <span><Lightbulb size={12} /> {hintsRemaining} hints</span>
        </div>

        <div className={styles.targetBox}>
          <div className={styles.targetContent}>
            <div>
              <p className={styles.targetLabel}>
                Place the next book in order
              </p>
              {showHint && nextBookName && (
                <p className={styles.hintText}>
                  <Lightbulb size={14} />
                  {hintText}
                </p>
              )}
            </div>
            {hintsRemaining > 0 && (
              <button
                onClick={useHint}
                className={styles.hintBtn}
              >
                <Lightbulb size={14} />
                Hint ({hintsRemaining})
              </button>
            )}
          </div>
          {isWrong && attempts > 0 && (
            <p className={styles.attemptsWarning}>
              Wrong! {maxAttempts - attempts} tries remaining
            </p>
          )}
        </div>

        <div className={styles.booksGrid}>
          {availableBooks.map((book) => (
            <motion.button
              key={book}
              className={styles.bookBtn}
              onClick={() => handleBookClick(book)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              {book}
            </motion.button>
          ))}
        </div>

        <div className={styles.bottomStats}>
          <span>Placed: {selectedBooks.length}</span>
          <span>Remaining: {availableBooks.length}</span>
          <span>
            Accuracy: {totalCorrect + totalWrong > 0 
              ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100) 
              : 0}%
          </span>
        </div>
      </div>
    );
  };

  // ============================================================
  // MAIN RENDER
  // ============================================================

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <button className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {!gameStarted && renderStartScreen()}
        {gameStarted && !gameOver && renderActiveGame()}
        {gameOver && renderGameOver()}
      </div>
    </div>
  );
};

export default BookOrder;