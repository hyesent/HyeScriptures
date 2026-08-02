// src/lib/games/levels.ts

export interface Level {
  title: string;
  minXp: number;
  maxXp: number;
  description: string;
  color: string;
  rank: number;
}

export const LEVELS: Level[] = [
  {
    title: 'Seeker',
    minXp: 0,
    maxXp: 499,
    description: 'One who is searching for truth',
    color: '#6B7280',
    rank: 1
  },
  {
    title: 'Believer',
    minXp: 500,
    maxXp: 1499,
    description: 'One who has placed their faith',
    color: '#6a9aaa',
    rank: 2
  },
  {
    title: 'Disciple',
    minXp: 1500,
    maxXp: 3499,
    description: 'One who learns from the Master',
    color: '#5FAF75',
    rank: 3
  },
  {
    title: 'Servant',
    minXp: 3500,
    maxXp: 6999,
    description: 'One who serves faithfully',
    color: '#8a7aaa',
    rank: 4
  },
  {
    title: 'Shepherd',
    minXp: 7000,
    maxXp: 11999,
    description: 'One who cares for others',
    color: '#7a9aaa',
    rank: 5
  },
  {
    title: 'Warrior',
    minXp: 12000,
    maxXp: 19999,
    description: 'One who fights the good fight',
    color: '#B86161',
    rank: 6
  },
  {
    title: 'Prophet',
    minXp: 20000,
    maxXp: 34999,
    description: 'One who speaks truth',
    color: '#D4AF37',
    rank: 7
  },
  {
    title: 'Priest',
    minXp: 35000,
    maxXp: 54999,
    description: 'One who intercedes for others',
    color: '#C0A060',
    rank: 8
  },
  {
    title: 'Elder',
    minXp: 55000,
    maxXp: 79999,
    description: 'One who provides wisdom',
    color: '#B8941A',
    rank: 9
  },
  {
    title: 'Apostle',
    minXp: 80000,
    maxXp: 119999,
    description: 'One who is sent out',
    color: '#D4AF37',
    rank: 10
  },
  {
    title: 'Patriarch',
    minXp: 120000,
    maxXp: 199999,
    description: 'One who leads generations',
    color: '#F8C84A',
    rank: 11
  },
  {
    title: 'Prophet-Priest',
    minXp: 200000,
    maxXp: 349999,
    description: 'One who speaks and intercedes',
    color: '#E8B040',
    rank: 12
  },
  {
    title: 'Sage',
    minXp: 350000,
    maxXp: 549999,
    description: 'One who possesses deep wisdom',
    color: '#D4B84A',
    rank: 13
  },
  {
    title: 'Stalwart',
    minXp: 550000,
    maxXp: 799999,
    description: 'One who stands firm',
    color: '#C8A84A',
    rank: 14
  },
  {
    title: 'Luminary',
    minXp: 800000,
    maxXp: 1199999,
    description: 'One who shines light',
    color: '#F8D84A',
    rank: 15
  },
  {
    title: 'Patriarch of Faith',
    minXp: 1200000,
    maxXp: 1999999,
    description: 'One whose faith inspires generations',
    color: '#F8E84A',
    rank: 16
  },
  {
    title: 'Shepherd of Shepherds',
    minXp: 2000000,
    maxXp: Infinity,
    description: 'One who leads all in faith',
    color: '#F8F6F2',
    rank: 17
  }
];

export function getLevel(xp: number): Level {
  return LEVELS.find(level => xp >= level.minXp && xp <= level.maxXp) || LEVELS[0];
}

export function getNextLevel(xp: number): Level | null {
  const current = getLevel(xp);
  const nextIndex = LEVELS.findIndex(l => l.rank === current.rank + 1);
  if (nextIndex === -1) return null;
  return LEVELS[nextIndex];
}

export function getXpToNextLevel(xp: number): number {
  const next = getNextLevel(xp);
  if (!next) return 0;
  return next.minXp - xp;
}

export function getProgressToNextLevel(xp: number): number {
  const current = getLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.minXp - current.minXp;
  const progress = xp - current.minXp;
  return Math.min(100, (progress / range) * 100);
}

export function getLevelTitle(xp: number): string {
  return getLevel(xp).title;
}

export function getLevelRank(xp: number): number {
  return getLevel(xp).rank;
}

export function getLevelColor(xp: number): string {
  return getLevel(xp).color;
}