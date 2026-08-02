// src/components/Games/Crossword.tsx
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
  Lightbulb,
  BookOpen,
  XCircle,
  CheckCircle,
  Loader2,
  Puzzle,
  Grid,
  LayoutGrid,
  ChevronRight
} from 'lucide-react';
import { 
  getRandomCrossword,
  getTotalPuzzles,
  getAllThemes
} from '../../data/games/crossword';
import type { CrosswordPuzzle,  CrosswordClue } from '../../data/games/crossword';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import styles from './Crossword.module.css';

interface CrosswordProps {
  onBack: () => void;
}

// ============================================================
// SVG ICONS
// ============================================================

const Icons = {
  Crossword: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  Theme: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  )
};

const Crossword: React.FC<CrosswordProps> = ({ onBack }) => {
  const [puzzle, setPuzzle] = useState<CrosswordPuzzle | null>(null);
  const [grid, setGrid] = useState<string[][]>([]);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<'across' | 'down'>('across');
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);
  const [filledCells, setFilledCells] = useState(0);
  const [totalCells, setTotalCells] = useState(0);
  const [clueSelected, setClueSelected] = useState<CrosswordClue | null>(null);
  const [showClue, setShowClue] = useState<CrosswordClue | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [xpEarned, setXpEarned] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [revealed, setRevealed] = useState<string[]>([]);

  const themes = ['all', ...getAllThemes()];

  const startGame = () => {
    let newPuzzle: CrosswordPuzzle;
    
    if (selectedTheme !== 'all') {
      // Get puzzles by theme
      const themedPuzzles = getCrosswordsByTheme(selectedTheme);
      newPuzzle = themedPuzzles[Math.floor(Math.random() * themedPuzzles.length)];
    } else {
      newPuzzle = getRandomCrossword();
    }
    
    setPuzzle(newPuzzle);
    const newGrid = newPuzzle.grid.map(row => [...row]);
    setGrid(newGrid);
    
    let total = 0;
    newGrid.forEach(row => {
      row.forEach(cell => {
        if (cell !== '') total++;
      });
    });
    setTotalCells(total);
    setFilledCells(0);
    setIsComplete(false);
    setRevealed([]);
    
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTime(0);
    setXpEarned(0);
    setSelectedCell(null);
    setClueSelected(null);
    setShowClue(null);
    setBestScore(gameEngine.getBestScore('crossword'));
    
    if (timerInterval) clearInterval(timerInterval);
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  // Helper to get puzzles by theme
  const getCrosswordsByTheme = (theme: string): CrosswordPuzzle[] => {
    // This would need to be implemented in your data file
    // For now, return a single random puzzle
    return [getRandomCrossword()];
  };

  const handleCellClick = (row: number, col: number) => {
    if (gameOver) return;
    if (grid[row][col] === '') return;
    
    setSelectedCell({ row, col });
    
    const clue = puzzle?.clues.find(c => 
      (c.direction === 'across' && c.row === row && c.col <= col && c.col + c.length > col) ||
      (c.direction === 'down' && c.col === col && c.row <= row && c.row + c.length > row)
    );
    
    if (clue) {
      setClueSelected(clue);
      setSelectedDirection(clue.direction);
      setShowClue(clue);
    }
  };

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (!selectedCell || !puzzle) return;
    if (gameOver) return;
    
    const { row, col } = selectedCell;
    const key = e.key.toUpperCase();
    
    if (key >= 'A' && key <= 'Z' && key.length === 1) {
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = key;
      setGrid(newGrid);
      
      let newFilled = 0;
      newGrid.forEach(r => {
        r.forEach(c => {
          if (c !== '') newFilled++;
        });
      });
      setFilledCells(newFilled);
      
      // Move to next cell in direction
      if (selectedDirection === 'across') {
        if (col + 1 < grid[row].length && grid[row][col + 1] !== '') {
          setSelectedCell({ row, col: col + 1 });
        }
      } else {
        if (row + 1 < grid.length && grid[row + 1][col] !== '') {
          setSelectedCell({ row: row + 1, col });
        }
      }
      
      if (newFilled === totalCells) {
        setGameOver(true);
        setIsComplete(true);
        if (timerInterval) {
          clearInterval(timerInterval);
          setTimerInterval(null);
        }
        const result = gameEngine.recordAnswer('crossword', true, 'mixed');
        const timeBonus = Math.max(0, 100 - time);
        const bonusScore = result.score + timeBonus;
        setScore(bonusScore);
        const baseXP = 50;
        const timeBonusXP = Math.floor(time / 10);
        setXpEarned(baseXP + timeBonusXP);
      }
    }
    
    if (e.key === 'Backspace') {
      const newGrid = grid.map(r => [...r]);
      newGrid[row][col] = '';
      setGrid(newGrid);
      
      if (selectedDirection === 'across') {
        if (col - 1 >= 0 && grid[row][col - 1] !== '') {
          setSelectedCell({ row, col: col - 1 });
        }
      } else {
        if (row - 1 >= 0 && grid[row - 1][col] !== '') {
          setSelectedCell({ row: row - 1, col });
        }
      }
    }
    
    if (e.key === 'ArrowRight' && selectedDirection === 'across') {
      if (col + 1 < grid[row].length && grid[row][col + 1] !== '') {
        setSelectedCell({ row, col: col + 1 });
      }
    }
    if (e.key === 'ArrowDown' && selectedDirection === 'down') {
      if (row + 1 < grid.length && grid[row + 1][col] !== '') {
        setSelectedCell({ row: row + 1, col });
      }
    }
    if (e.key === 'ArrowLeft' && selectedDirection === 'across') {
      if (col - 1 >= 0 && grid[row][col - 1] !== '') {
        setSelectedCell({ row, col: col - 1 });
      }
    }
    if (e.key === 'ArrowUp' && selectedDirection === 'down') {
      if (row - 1 >= 0 && grid[row - 1][col] !== '') {
        setSelectedCell({ row: row - 1, col });
      }
    }
  }, [selectedCell, grid, puzzle, gameOver, selectedDirection, timerInterval, totalCells]);

  const getTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getClueNumber = (row: number, col: number): string | null => {
    const clue = puzzle?.clues.find(c => 
      (c.direction === 'across' && c.row === row && c.col === col) ||
      (c.direction === 'down' && c.row === row && c.col === col)
    );
    return clue ? clue.id.replace(/[ad]/g, '') : null;
  };

  const getCellClass = (row: number, col: number): string => {
    const cellValue = grid[row]?.[col];
    let classes = styles.cell;
    
    if (cellValue === '') {
      classes += ` ${styles.cellEmpty}`;
      return classes;
    }
    
    if (selectedCell?.row === row && selectedCell?.col === col) {
      classes += ` ${styles.cellSelected}`;
    }
    
    if (clueSelected && selectedCell) {
      const isPartOfClue = 
        (clueSelected.direction === 'across' && 
         clueSelected.row === row && 
         clueSelected.col <= col && 
         clueSelected.col + clueSelected.length > col) ||
        (clueSelected.direction === 'down' && 
         clueSelected.col === col && 
         clueSelected.row <= row && 
         clueSelected.row + clueSelected.length > row);
      
      if (isPartOfClue) {
        classes += ` ${styles.cellHighlighted}`;
      }
    }
    
    if (cellValue !== '' && cellValue !== puzzle?.grid[row][col]) {
      classes += ` ${styles.cellWrong}`;
    }
    
    if (cellValue !== '' && cellValue === puzzle?.grid[row][col]) {
      classes += ` ${styles.cellCorrect}`;
    }
    
    return classes;
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
              <Icons.Crossword />
            </div>
            <h2 className={styles.startTitle}>Bible Crossword</h2>
            <p className={styles.startSubtitle}>Solve the puzzle by filling in the correct letters</p>
            <p className={styles.startCount}>
              {getTotalPuzzles()} puzzles available
            </p>

            <div className={styles.startSection}>
              <span className={styles.startLabel}>Theme</span>
              <div className={styles.chipGroup}>
                {themes.map((theme) => (
                  <button
                    key={theme}
                    className={`${styles.chip} ${selectedTheme === theme ? styles.active : ''}`}
                    onClick={() => setSelectedTheme(theme)}
                  >
                    {theme === 'all' ? 'All' : theme}
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
              Begin Crossword
              <ChevronRight size={18} />
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
    const completed = totalCells > 0 ? (filledCells / totalCells) * 100 : 0;
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
              🏆
            </motion.span>

            <h2 className={styles.resultsTitle}>Puzzle Complete!</h2>
            <p className={styles.resultsSubtitle}>
              Solved in {getTimeString(time)}
            </p>

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
                <span className={styles.resultsStatValue}>{Math.round(completed)}%</span>
                <span className={styles.resultsStatLabel}>Completed</span>
              </div>
              <div className={styles.resultsStat}>
                <span className={styles.resultsStatValue}>{getTimeString(time)}</span>
                <span className={styles.resultsStatLabel}>Time</span>
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
                New Puzzle
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
          </motion.div>
        </div>
      </div>
    );
  }

  // ============================================================
  // ACTIVE GAME
  // ============================================================
  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      
      <div className={styles.content}>
        <button className={styles.backBtn} onClick={onBack}>
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div 
          className={styles.gameCard} 
          onKeyDown={handleKeyPress} 
          tabIndex={0}
        >
          {/* Header */}
          <div className={styles.gameHeader}>
            <div>
              <span className={styles.gameModeLabel}>
                <Puzzle size={16} />
                Crossword
              </span>
              <span className={styles.gameProgress}>
                {puzzle?.title}
              </span>
            </div>
            <div className={styles.gameStats}>
              <span className={styles.gameTime}>
                <Clock size={14} />
                {getTimeString(time)}
              </span>
              <span className={styles.gameProgress}>
                {filledCells}/{totalCells}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: 0 }}
              animate={{ width: `${totalCells > 0 ? (filledCells / totalCells) * 100 : 0}%` }}
              transition={{ duration: TIMING.NORMAL / 1000 }}
            />
          </div>

          <div className={styles.crosswordLayout}>
            {/* Grid */}
            <div className={styles.gridContainer}>
              <div 
                className={styles.grid}
                style={{ 
                  gridTemplateColumns: `repeat(${puzzle?.grid[0]?.length || 10}, 1fr)`
                }}
              >
                {puzzle?.grid.map((row, rowIndex) => (
                  row.map((cell, colIndex) => {
                    const clueNumber = getClueNumber(rowIndex, colIndex);
                    const cellValue = grid[rowIndex]?.[colIndex] || '';
                    const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                    
                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        className={`${getCellClass(rowIndex, colIndex)} ${isSelected ? styles.selected : ''}`}
                      >
                        {cellValue}
                        {clueNumber && cellValue === '' && cell !== '' && (
                          <span className={styles.clueNumber}>
                            {clueNumber}
                          </span>
                        )}
                      </div>
                    );
                  })
                ))}
              </div>
            </div>

            {/* Clues Panel */}
            <div className={styles.cluesPanel}>
              {/* Selected clue */}
              {showClue && (
                <div className={styles.selectedClue}>
                  <p className={styles.selectedClueLabel}>Selected Clue</p>
                  <p className={styles.selectedClueText}>
                    <span className={styles.selectedClueNumber}>
                      {showClue.id.replace(/[ad]/g, '')}.
                    </span>
                    <span className={styles.selectedClueContent}>{showClue.clue}</span>
                  </p>
                  {showClue.reference && (
                    <p className={styles.selectedClueReference}>
                      <BookOpen size={12} />
                      {showClue.reference}
                    </p>
                  )}
                </div>
              )}

              {/* Across Clues */}
              <div className={styles.clueGroup}>
                <h4 className={styles.clueGroupTitle}>Across</h4>
                {puzzle?.clues.filter(c => c.direction === 'across').map((clue) => (
                  <div 
                    key={clue.id} 
                    className={`${styles.clueItem} ${showClue?.id === clue.id ? styles.active : ''}`}
                    onClick={() => {
                      setShowClue(clue);
                      setSelectedCell({ row: clue.row, col: clue.col });
                      setSelectedDirection('across');
                      setClueSelected(clue);
                    }}
                  >
                    <span className={styles.clueNumber}>{clue.id.replace('a', '')}.</span>
                    <span className={styles.clueText}>{clue.clue}</span>
                  </div>
                ))}
              </div>
              
              {/* Down Clues */}
              <div className={styles.clueGroup}>
                <h4 className={styles.clueGroupTitle}>Down</h4>
                {puzzle?.clues.filter(c => c.direction === 'down').map((clue) => (
                  <div 
                    key={clue.id} 
                    className={`${styles.clueItem} ${showClue?.id === clue.id ? styles.active : ''}`}
                    onClick={() => {
                      setShowClue(clue);
                      setSelectedCell({ row: clue.row, col: clue.col });
                      setSelectedDirection('down');
                      setClueSelected(clue);
                    }}
                  >
                    <span className={styles.clueNumber}>{clue.id.replace('d', '')}.</span>
                    <span className={styles.clueText}>{clue.clue}</span>
                  </div>
                ))}
              </div>

              {/* Instructions */}
              <div className={styles.instructions}>
                <p>Type letters to fill</p>
                <p>Use arrow keys to navigate</p>
                <p>Backspace to delete</p>
                <p>Click a clue to jump to it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crossword;