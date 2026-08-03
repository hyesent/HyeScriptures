// src/components/Games/GameHub.tsx
import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Trophy, 
  Target, 
  Zap, 
  Crown,
  Calendar,
  Flame,
  Gamepad2,
  Loader2,
  BookOpen,
  MessageSquare,
  User,
  BookMarked,
  Sword,
  Star,
  Clock,
  Layers,
  Brain,
  Puzzle,
  Zap as ZapIcon,
  Scroll,
  Users,
  Award,
  BarChart,
  PenTool,
  GripVertical,
  TrendingUp,
  Compass
} from 'lucide-react';
import GameCard from './GameCard';
import { gameEngine } from '../../lib/games/game-engine';
import { TIMING, EASING } from '../../lib/animations';
import { getLevelIcon } from '../../components/Icons/LevelIcons';
import { getNextLevel } from '../../lib/games/level';
import styles from './GameHub.module.css';

// ============================================================
// SVG ICONS (No emojis - All game icons)
// ============================================================

const Icons = {
  Bible: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="10" y1="8" x2="14" y2="8" />
      <line x1="10" y1="12" x2="14" y2="12" />
      <line x1="10" y1="16" x2="12" y2="16" />
    </svg>
  ),
  Quote: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  ),
  Books: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Pencil: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  Character: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Hangman: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v8" />
      <path d="M8 18l4-4 4 4" />
      <path d="M8 14l4 4 4-4" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Puzzle: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 3h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4" />
      <path d="M5 11V7a2 2 0 0 1 2-2h2" />
      <path d="M5 15v4a2 2 0 0 0 2 2h2" />
      <path d="M19 15v4a2 2 0 0 1-2 2h-2" />
      <path d="M15 9V5a2 2 0 0 0-2-2H9" />
      <path d="M9 21h4a2 2 0 0 0 2-2v-2" />
    </svg>
  ),
  Memory: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M6 4l2 2" />
      <path d="M18 4l-2 2" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="M6 20l2-2" />
      <path d="M18 20l-2-2" />
      <path d="M12 18v4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  Timeline: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="12" r="2" />
      <line x1="6" y1="8" x2="6" y2="16" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="18" y1="8" x2="18" y2="16" />
    </svg>
  ),
  Rapid: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Crossword: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  Daily: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  Compass: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10-4-10-8-10-8 4-8 10 8 10 8 10z" />
      <path d="M12 6v12" />
      <path d="M12 6l-4 6 4 6 4-6-4-6z" />
    </svg>
  ),
  Scroll: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="16" x2="16" y2="16" />
      <line x1="8" y1="12" x2="12" y2="12" />
    </svg>
  ),
  SwordIcon: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 17.5L3 6 6 3l11.5 11.5" />
      <path d="M13 19l6-6" />
      <path d="M16 16l4 4" />
      <path d="M19 21l2-2" />
    </svg>
  )
};

// ============================================================
// GAME REGISTRY
// ============================================================

interface GameConfig {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Variable';
  reward: string;
  component: React.ComponentType<{ onBack: () => void }>;
  locked?: boolean;
  isNew?: boolean;
  isDaily?: boolean;
  getBestScore?: () => number;
}

// ============================================================
// LAZY LOAD ALL GAME COMPONENTS
// ============================================================

const BibleQuiz = lazy(() => import('./BibleQuiz'));
const WhoSaidIt = lazy(() => import('./WhoSaidIt'));
const BookOrder = lazy(() => import('./BookOrder'));
const Hangman = lazy(() => import('./Hangman'));
const TimelineChallenge = lazy(() => import('./TimelineChallenge'));
const Crossword = lazy(() => import('./Crossword'));
const VersePuzzle = lazy(() => import('./VersePuzzle'));
const FinishVerse = lazy(() => import('./FinishVerse'));
const WhoAmI = lazy(() => import('./WhoAmI'));
const MemoryVerse = lazy(() => import('./MemoryVerse'));
const RapidFire = lazy(() => import('./RapidFire'));
const DailyChallenge = lazy(() => import('./DailyChallenge'));
const MissionaryJourney = lazy(() => import('./MissionaryJourney'));

// ============================================================
// GAME REGISTRY - ALL GAMES UNLOCKED
// ============================================================

const GAME_REGISTRY: GameConfig[] = [
  // ===== TRIVIA =====
  {
    id: 'bible-quiz',
    title: 'Bible Quiz',
    icon: <Icons.Bible />,
    description: 'Test your knowledge with questions across all Scripture',
    category: 'Trivia',
    difficulty: 'Beginner',
    reward: '250 XP',
    component: BibleQuiz,
    getBestScore: () => gameEngine.getBestScore('bible-quiz')
  },
  {
    id: 'who-said-it',
    title: 'Who Said It?',
    icon: <Icons.Quote />,
    description: 'Match powerful Bible quotes to their speakers',
    category: 'Trivia',
    difficulty: 'Intermediate',
    reward: '350 XP',
    component: WhoSaidIt,
    getBestScore: () => gameEngine.getBestScore('who-said-it')
  },
  {
    id: 'who-am-i',
    title: 'Who Am I?',
    icon: <Icons.Character />,
    description: 'Guess the Bible character from clues',
    category: 'Trivia',
    difficulty: 'Advanced',
    reward: '400 XP',
    component: WhoAmI,
    getBestScore: () => gameEngine.getBestScore('who-am-i')
  },

  // ===== MEMORY =====
  {
    id: 'book-order',
    title: 'Book Order',
    icon: <Icons.Books />,
    description: 'Arrange the books of the Bible correctly',
    category: 'Memory',
    difficulty: 'Intermediate',
    reward: '200 XP',
    component: BookOrder,
    getBestScore: () => gameEngine.getBestScore('book-order')
  },
  {
    id: 'finish-verse',
    title: 'Finish the Verse',
    icon: <Icons.Pencil />,
    description: 'Complete the missing words from memory',
    category: 'Memory',
    difficulty: 'Intermediate',
    reward: '300 XP',
    component: FinishVerse,
    getBestScore: () => gameEngine.getBestScore('finish-verse')
  },
  {
    id: 'memory-verse',
    title: 'Memory Verse',
    icon: <Icons.Memory />,
    description: 'Match verse pairs from Scripture',
    category: 'Memory',
    difficulty: 'Advanced',
    reward: '350 XP',
    component: MemoryVerse,
    getBestScore: () => gameEngine.getBestScore('memory-verse')
  },

  // ===== WORD =====
  {
    id: 'hangman',
    title: 'Hangman',
    icon: <Icons.Hangman />,
    description: 'Guess the Bible word before you run out of lives',
    category: 'Word',
    difficulty: 'Beginner',
    reward: '300 XP',
    component: Hangman,
    getBestScore: () => gameEngine.getBestScore('hangman')
  },

  // ===== PUZZLE =====
  {
    id: 'verse-puzzle',
    title: 'Verse Puzzle',
    icon: <Icons.Puzzle />,
    description: 'Unscramble verses to reveal Scripture',
    category: 'Puzzle',
    difficulty: 'Advanced',
    reward: '350 XP',
    component: VersePuzzle,
    getBestScore: () => gameEngine.getBestScore('verse-puzzle')
  },
  {
    id: 'crossword',
    title: 'Crossword',
    icon: <Icons.Crossword />,
    description: 'Solve Bible-themed crossword puzzles',
    category: 'Puzzle',
    difficulty: 'Expert',
    reward: '500 XP',
    component: Crossword,
    getBestScore: () => gameEngine.getBestScore('crossword')
  },

  // ===== HISTORY =====
  {
    id: 'timeline',
    title: 'Timeline Challenge',
    icon: <Icons.Timeline />,
    description: 'Place biblical events in chronological order',
    category: 'History',
    difficulty: 'Expert',
    reward: '400 XP',
    component: TimelineChallenge,
    getBestScore: () => gameEngine.getBestScore('timeline')
  },
  {
    id: 'missionary-journey',
    title: 'Missionary Journey',
    icon: <Icons.Compass />,
    description: 'Travel with Paul and spread the Gospel',
    category: 'History',
    difficulty: 'Intermediate',
    reward: '350 XP',
    component: MissionaryJourney,
    isNew: true,
    getBestScore: () => gameEngine.getBestScore('missionary-journey')
  },

  // ===== SPEED =====
  {
    id: 'rapid-fire',
    title: 'Rapid Fire',
    icon: <Icons.Rapid />,
    description: 'Answer as many questions as you can in 60 seconds',
    category: 'Speed',
    difficulty: 'Advanced',
    reward: '200 XP',
    component: RapidFire,
    getBestScore: () => gameEngine.getBestScore('rapid-fire')
  },

  // ===== SPECIAL =====
  {
    id: 'daily-challenge',
    title: 'Daily Challenge',
    icon: <Icons.Daily />,
    description: 'A new challenge awaits you every day',
    category: 'Special',
    difficulty: 'Variable',
    reward: '500 XP',
    component: DailyChallenge,
    isDaily: true,
    locked: false,
    getBestScore: () => gameEngine.getBestScore('daily-challenge')
  }
];

// ============================================================
// LOADING COMPONENT (Enhanced)
// ============================================================

const LoadingState: React.FC = () => {
  // Random loading messages
  const messages = [
    'Preparing the Sacred Arena...',
    'Sharpening the Sword of the Spirit...',
    'Gathering the Scrolls of Wisdom...',
    'Lighting the Path of Truth...',
    'Calling the Warriors of Faith...',
    'Opening the Gates of Knowledge...',
    'Revealing the Mysteries of Scripture...',
    'Kindling the Flame of Understanding...'
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingContent}>
        <div className={styles.loadingIcon}>
          <Loader2 size={48} className={styles.loadingSpinner} />
        </div>
        <div className={styles.loadingVerse}>
          <p className={styles.loadingVerseText}>
            "Your word is a lamp to my feet and a light to my path."
          </p>
          <p className={styles.loadingVerseRef}>— Psalm 119:105</p>
        </div>
        <p className={styles.loadingMessage}>{messages[messageIndex]}</p>
        <div className={styles.loadingDots}>
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
        </div>
      </div>
    </div>
  );
};

// ============================================================
// GAME HUB COMPONENT
// ============================================================

interface GameHubProps {
  onBack: () => void;
}

export const GameHub: React.FC<GameHubProps> = ({ onBack }) => {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const stats = gameEngine.getStats();
  
  const levelInfo = gameEngine.getLevelInfo();
  const LevelIcon = getLevelIcon(levelInfo.title);
  const nextLevel = getNextLevel(levelInfo.xp);

  const allCategories = ['All', ...new Set(GAME_REGISTRY.map(g => g.category))];
  
  const filteredGames = activeFilter === 'All' 
    ? GAME_REGISTRY 
    : GAME_REGISTRY.filter(g => g.category === activeFilter);

  const dailyGame = GAME_REGISTRY.find(g => g.isDaily);
  const selectedGame = GAME_REGISTRY.find(g => g.id === selectedGameId);

  const renderGame = () => {
    if (!selectedGame) return null;
    const GameComponent = selectedGame.component;

    return (
      <Suspense fallback={<LoadingState />}>
        <GameComponent onBack={() => setSelectedGameId(null)} />
      </Suspense>
    );
  };

  if (selectedGameId) {
    return renderGame();
  }

  return (
    <div className={styles.container}>
      <div className={styles.ambientGlow} />
      <div className={styles.ambientRays} />
      
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button className={styles.backBtn} onClick={onBack}>
              <ArrowLeft size={18} />
              <span>Back</span>
            </button>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Gamepad2 size={20} />
              </div>
              <h1>Bible <span>Arena</span></h1>
            </div>
          </div>
          <div className={styles.headerRight}>
            <span 
              className={styles.headerLevel}
              style={{ 
                color: levelInfo.color,
                borderColor: `${levelInfo.color}30`,
                backgroundColor: `${levelInfo.color}10`
              }}
            >
              <span className={styles.headerLevelIcon}>
                {LevelIcon}
              </span>
              {levelInfo.title}
            </span>
          </div>
        </header>

        <section className={styles.welcome}>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: TIMING.NORMAL / 1000 }}
          >
            Welcome back, <strong>Warrior</strong>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: TIMING.NORMAL / 1000 }}
          >
            <span className={styles.xpDisplay}>
              {levelInfo.xp.toLocaleString()} XP • {levelInfo.title}
            </span>
          </motion.p>
        </section>

        <motion.div 
          className={styles.xpBarContainer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: TIMING.NORMAL / 1000 }}
        >
          <div className={styles.xpBarTrack}>
            <motion.div 
              className={styles.xpBarFill}
              initial={{ width: 0 }}
              animate={{ width: `${levelInfo.progress}%` }}
              transition={{ duration: TIMING.LARGE / 1000 }}
              style={{ 
                background: `linear-gradient(90deg, ${levelInfo.color}, ${levelInfo.color}dd)`
              }}
            />
          </div>
          <div className={styles.xpBarDetails}>
            <span className={styles.xpCurrent}>{levelInfo.xp.toLocaleString()} XP</span>
            {nextLevel && (
              <span className={styles.xpNext}>{levelInfo.nextLevelXp.toLocaleString()} XP to {nextLevel.title}</span>
            )}
          </div>
        </motion.div>

        <motion.div 
          className={styles.statsRow}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: TIMING.NORMAL / 1000 }}
        >
          <StatCard 
            icon={<Trophy size={18} />}
            value={stats.totalGames || 0}
            label="Games Played"
            color="blue"
          />
          <StatCard 
            icon={<Target size={18} />}
            value={`${stats.accuracy || 0}%`}
            label="Accuracy"
            color="green"
          />
          <StatCard 
            icon={<Flame size={18} />}
            value={stats.bestStreak || 0}
            label="Best Streak"
            color="amber"
          />
          <StatCard 
            icon={<Zap size={18} />}
            value={stats.streak || 0}
            label="Current Streak"
            color="purple"
          />
        </motion.div>

        {dailyGame && (
          <motion.div 
            className={styles.dailyChallenge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: TIMING.NORMAL / 1000 }}
          >
            <div className={styles.dailyChallengeLeft}>
              <div className={styles.dailyChallengeBadge}>
                <Calendar size={12} />
                Daily
              </div>
              <div>
                <h3>{dailyGame.title}</h3>
                <p>{dailyGame.description}</p>
              </div>
            </div>
            <div className={styles.dailyChallengeReward}>
              <span>Reward: {dailyGame.reward}</span>
              <button 
                className={styles.dailyChallengeBtn}
                onClick={() => setSelectedGameId(dailyGame.id)}
              >
                Start
              </button>
            </div>
          </motion.div>
        )}

        <motion.div 
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: TIMING.NORMAL / 1000 }}
        >
          {allCategories.map(filter => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: TIMING.NORMAL / 1000 }}
        >
          {filteredGames.map((game, index) => {
            const bestScore = game.getBestScore?.() || 0;
            
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.05 * (index + 1), 
                  duration: TIMING.NORMAL / 1000,
                  ease: EASING.SMOOTH
                }}
              >
                <GameCard
                  title={game.title}
                  icon={game.icon}
                  description={game.description}
                  category={game.category}
                  difficulty={game.difficulty}
                  reward={game.reward}
                  bestScore={bestScore}
                  locked={game.locked || false}
                  isDaily={game.isDaily || false}
                  isNew={game.isNew || false}
                  onClick={() => setSelectedGameId(game.id)}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.footer 
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: TIMING.NORMAL / 1000 }}
        >
          <p>Complete challenges to earn achievements and unlock new games</p>
        </motion.footer>
      </div>
    </div>
  );
};

// ============================================================
// STAT CARD COMPONENT
// ============================================================

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: 'blue' | 'green' | 'amber' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => {
  const colorClass = {
    blue: styles.blue,
    green: styles.green,
    amber: styles.amber,
    purple: styles.purple
  }[color];

  return (
    <motion.div 
      className={styles.statCard}
      whileHover={{ y: -2 }}
      transition={{ duration: TIMING.FAST / 1000 }}
    >
      <div className={`${styles.iconWrapper} ${colorClass}`}>
        {icon}
      </div>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
};

export default GameHub;
