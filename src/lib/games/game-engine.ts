// src/lib/games/game-engine.ts
import { 
  getLevel, 
  getNextLevel, 
  getProgressToNextLevel, 
  getXpToNextLevel,
  getLevelTitle,
  getLevelColor,
  LEVELS
} from './level';

export interface GameStats {
  totalGames: number;
  totalCorrect: number;
  totalWrong: number;
  streak: number;
  bestStreak: number;
  accuracy: number;
  favoriteCategory: string;
  gamesPlayed: {
    [key: string]: number;
  };
  scores: {
    [key: string]: number[];
  };
  bestScores: {
    [key: string]: number;
  };
  // NEW: XP System
  xp: number;
  totalXp: number;
  levelTitle: string;
  levelRank: number;
  levelColor: string;
  xpHistory: {
    date: string;
    amount: number;
    source: string;
  }[];
}

export interface GameResult {
  correct: boolean;
  score: number;
  streak: number;
  totalCorrect: number;
  totalAttempted: number;
  accuracy: number;
  xpEarned: number;
  levelUp: boolean;
  newLevel?: string;
  message?: string;
}

export class GameEngine {
  private stats: GameStats;
  private currentStreak: number = 0;
  private currentScore: number = 0;
  private totalCorrect: number = 0;
  private totalAttempted: number = 0;
  private currentXp: number = 0;

  constructor() {
    this.stats = this.loadStats();
    this.currentStreak = this.stats.streak || 0;
    this.totalCorrect = this.stats.totalCorrect || 0;
    this.totalAttempted = this.stats.totalCorrect + this.stats.totalWrong || 0;
    this.currentXp = this.stats.totalXp || 0;
  }

  private loadStats(): GameStats {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bible_game_stats');
      if (saved) {
        try {
          const data = JSON.parse(saved);
          // Ensure XP fields exist (migration)
          if (!data.xp) data.xp = 0;
          if (!data.totalXp) data.totalXp = 0;
          if (!data.levelTitle) data.levelTitle = 'Seeker';
          if (!data.levelRank) data.levelRank = 1;
          if (!data.levelColor) data.levelColor = '#6B7280';
          if (!data.xpHistory) data.xpHistory = [];
          return data;
        } catch {
          return this.defaultStats();
        }
      }
    }
    return this.defaultStats();
  }

  private defaultStats(): GameStats {
    return {
      totalGames: 0,
      totalCorrect: 0,
      totalWrong: 0,
      streak: 0,
      bestStreak: 0,
      accuracy: 0,
      favoriteCategory: 'mixed',
      gamesPlayed: {},
      scores: {},
      bestScores: {},
      xp: 0,
      totalXp: 0,
      levelTitle: 'Seeker',
      levelRank: 1,
      levelColor: '#6B7280',
      xpHistory: []
    };
  }

  private saveStats() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bible_game_stats', JSON.stringify(this.stats));
    }
  }

  // ============================================================
  // XP SYSTEM
  // ============================================================

  addXP(amount: number, source: string = 'game'): { xpEarned: number; levelUp: boolean; newLevel?: string } {
    const oldLevel = this.stats.levelTitle;
    this.stats.totalXp += amount;
    this.stats.xp = amount;
    this.currentXp = this.stats.totalXp;

    // Update level info
    const level = getLevel(this.stats.totalXp);
    this.stats.levelTitle = level.title;
    this.stats.levelRank = level.rank;
    this.stats.levelColor = level.color;

    // Track XP history
    this.stats.xpHistory.push({
      date: new Date().toISOString(),
      amount,
      source
    });

    // Keep only last 100 entries
    if (this.stats.xpHistory.length > 100) {
      this.stats.xpHistory = this.stats.xpHistory.slice(-100);
    }

    const levelUp = oldLevel !== level.title;

    this.saveStats();

    return {
      xpEarned: amount,
      levelUp,
      newLevel: levelUp ? level.title : undefined
    };
  }

  getXP(): number {
    return this.stats.totalXp;
  }

  getLevelInfo() {
    return {
      title: this.stats.levelTitle,
      rank: this.stats.levelRank,
      color: this.stats.levelColor,
      xp: this.stats.totalXp,
      nextLevelXp: getXpToNextLevel(this.stats.totalXp),
      progress: getProgressToNextLevel(this.stats.totalXp)
    };
  }

  // ============================================================
  // GAME RECORDING
  // ============================================================

  recordAnswer(gameId: string, correct: boolean, category: string): GameResult {
    this.totalAttempted++;
    let xpEarned = 0;
    let levelUp = false;
    let newLevel: string | undefined;

    if (correct) {
      this.totalCorrect++;
      this.currentStreak++;
      const streakBonus = this.currentStreak > 1 ? Math.min(this.currentStreak * 2, 10) : 0;
      this.currentScore += 10 + streakBonus;
      
      // Calculate XP earned
      const baseXP = 10;
      const streakXP = Math.min(this.currentStreak * 2, 15);
      const bonusXP = this.currentStreak > 5 ? 5 : 0;
      xpEarned = baseXP + streakXP + bonusXP;

      // Add XP
      const result = this.addXP(xpEarned, gameId);
      levelUp = result.levelUp;
      newLevel = result.newLevel;

      if (this.currentStreak > this.stats.bestStreak) {
        this.stats.bestStreak = this.currentStreak;
      }
    } else {
      this.totalWrong++;
      this.currentStreak = 0;
      // Small XP for trying
      xpEarned = 2;
      this.addXP(xpEarned, gameId);
    }

    // Update stats
    this.stats.totalGames++;
    this.stats.totalCorrect = this.totalCorrect;
    this.stats.totalWrong = this.totalWrong;
    this.stats.streak = this.currentStreak;
    this.stats.accuracy = this.totalAttempted > 0 
      ? Math.round((this.totalCorrect / this.totalAttempted) * 100) 
      : 0;

    // Track games played
    if (!this.stats.gamesPlayed[gameId]) {
      this.stats.gamesPlayed[gameId] = 0;
    }
    this.stats.gamesPlayed[gameId]++;

    // Track scores per category
    if (!this.stats.scores[category]) {
      this.stats.scores[category] = [];
    }
    this.stats.scores[category].push(correct ? 1 : 0);

    // Track best score for game
    if (!this.stats.bestScores[gameId] || this.currentScore > this.stats.bestScores[gameId]) {
      this.stats.bestScores[gameId] = this.currentScore;
    }

    // Calculate favorite category
    let maxScore = 0;
    let favorite = 'mixed';
    for (const [cat, scores] of Object.entries(this.stats.scores)) {
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      if (avg > maxScore) {
        maxScore = avg;
        favorite = cat;
      }
    }
    this.stats.favoriteCategory = favorite;

    this.saveStats();

    return {
      correct,
      score: this.currentScore,
      streak: this.currentStreak,
      totalCorrect: this.totalCorrect,
      totalAttempted: this.totalAttempted,
      accuracy: this.stats.accuracy,
      xpEarned,
      levelUp,
      newLevel,
      message: levelUp ? `🎉 Level Up! You are now a ${newLevel}!` : undefined
    };
  }

  // ============================================================
  // RESET
  // ============================================================

  resetScore() {
    this.currentScore = 0;
    this.currentStreak = 0;
  }

  // ============================================================
  // GETTERS
  // ============================================================

  getStats(): GameStats {
    return this.stats;
  }

  getBestScore(gameId: string): number {
    return this.stats.bestScores[gameId] || 0;
  }

  getLeaderboard(): { category: string; score: number }[] {
    const leaderboard: { category: string; score: number }[] = [];
    for (const [category, scores] of Object.entries(this.stats.scores)) {
      const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
      leaderboard.push({ category, score: Math.round(avg * 100) });
    }
    return leaderboard.sort((a, b) => b.score - a.score);
  }

  getXpHistory(): { date: string; amount: number; source: string }[] {
    return this.stats.xpHistory;
  }
}

export const gameEngine = new GameEngine();