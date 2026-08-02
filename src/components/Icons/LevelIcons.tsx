// src/components/Icons/LevelIcons.tsx
import React from 'react';

export const LevelIcons = {
  // === SEARCHING ===
  Seeker: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  ),

  // === FAITH ===
  Believer: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L15 9H22L16 14L18 21L12 17L6 21L8 14L2 9H9L12 2Z" />
    </svg>
  ),

  // === LEARNING ===
  Disciple: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="10" y1="8" x2="16" y2="8" />
      <line x1="10" y1="12" x2="16" y2="12" />
      <line x1="10" y1="16" x2="13" y2="16" />
    </svg>
  ),

  // === SERVICE ===
  Servant: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.5 2 6 4.5 6 8c0 4 6 12 6 12s6-8 6-12c0-3.5-2.5-6-6-6z" />
      <circle cx="12" cy="8" r="2.5" />
    </svg>
  ),

  // === LEADERSHIP ===
  Shepherd: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18L9 12L14 18L17 14L20 17" />
      <path d="M4 21L9 16L14 21L17 17L20 20" />
      <path d="M12 2L12 8" />
      <path d="M9 5L15 5" />
    </svg>
  ),

  // === WARFARE ===
  Warrior: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 17.5L3 6 6 3L17.5 14.5" />
      <path d="M13 19L19 13" />
      <path d="M16 16L20 20" />
      <path d="M19 21L21 19" />
      <circle cx="7" cy="17" r="3" />
    </svg>
  ),

  // === PROPHECY ===
  Prophet: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 7" />
      <path d="M6 6L9 9" />
      <path d="M18 6L15 9" />
      <path d="M4 13H7" />
      <path d="M17 13H20" />
      <path d="M12 11V16" />
      <path d="M8 21L16 21" />
      <circle cx="12" cy="18" r="3" />
    </svg>
  ),

  // === INTERCESSION ===
  Priest: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),

  // === WISDOM ===
  Elder: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 6" />
      <path d="M4.93 4.93L7.76 7.76" />
      <path d="M19.07 4.93L16.24 7.76" />
      <path d="M2 12L6 12" />
      <path d="M18 12L22 12" />
      <path d="M4.93 19.07L7.76 16.24" />
      <path d="M19.07 19.07L16.24 16.24" />
      <path d="M12 18L12 22" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),

  // === SENT ONES ===
  Apostle: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M12 6V12" />
      <path d="M12 12L16 16" />
      <path d="M8 16L12 12" />
    </svg>
  ),

  // === LEGACY ===
  Patriarch: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 6" />
      <path d="M9 5L15 5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M8 20L16 20" />
      <path d="M12 16V20" />
      <path d="M6 24L18 24" />
    </svg>
  ),

  // === PROPHET-PRIEST ===
  ProphetPriest: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 7" />
      <path d="M6 6L9 9" />
      <path d="M18 6L15 9" />
      <circle cx="12" cy="14" r="5" />
      <line x1="8" y1="19" x2="16" y2="19" />
    </svg>
  ),

  // === SAGE ===
  Sage: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 6" />
      <path d="M4.93 4.93L7.76 7.76" />
      <path d="M19.07 4.93L16.24 7.76" />
      <path d="M2 12L6 12" />
      <path d="M18 12L22 12" />
      <path d="M4.93 19.07L7.76 16.24" />
      <path d="M19.07 19.07L16.24 16.24" />
      <path d="M12 18L12 22" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 8V10" />
    </svg>
  ),

  // === STALWART ===
  Stalwart: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 7" />
      <path d="M12 17L12 22" />
      <path d="M4 12L8 12" />
      <path d="M16 12L20 12" />
      <rect x="6" y="7" width="12" height="10" rx="2" ry="2" />
    </svg>
  ),

  // === LUMINARY ===
  Luminary: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),

  // === PATRIARCH OF FAITH ===
  PatriarchOfFaith: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L12 6" />
      <path d="M9 5L15 5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M8 20L16 20" />
      <path d="M12 16V20" />
      <path d="M6 24L18 24" />
      <path d="M12 8V10" />
      <circle cx="12" cy="12" r="8" fill="none" strokeDasharray="2 2" />
    </svg>
  ),

  // === SHEPHERD OF SHEPHERDS ===
  ShepherdOfShepherds: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18L9 12L14 18L17 14L20 17" />
      <path d="M4 21L9 16L14 21L17 17L20 20" />
      <path d="M12 2L12 8" />
      <path d="M9 5L15 5" />
      <circle cx="12" cy="12" r="6" />
      <path d="M12 8V10" />
      <circle cx="12" cy="12" r="10" fill="none" strokeDasharray="3 3" />
    </svg>
  ),
};

// Helper to get level icon by title
export const getLevelIcon = (title: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    'Seeker': <LevelIcons.Seeker />,
    'Believer': <LevelIcons.Believer />,
    'Disciple': <LevelIcons.Disciple />,
    'Servant': <LevelIcons.Servant />,
    'Shepherd': <LevelIcons.Shepherd />,
    'Warrior': <LevelIcons.Warrior />,
    'Prophet': <LevelIcons.Prophet />,
    'Priest': <LevelIcons.Priest />,
    'Elder': <LevelIcons.Elder />,
    'Apostle': <LevelIcons.Apostle />,
    'Patriarch': <LevelIcons.Patriarch />,
    'Prophet-Priest': <LevelIcons.ProphetPriest />,
    'Sage': <LevelIcons.Sage />,
    'Stalwart': <LevelIcons.Stalwart />,
    'Luminary': <LevelIcons.Luminary />,
    'Patriarch of Faith': <LevelIcons.PatriarchOfFaith />,
    'Shepherd of Shepherds': <LevelIcons.ShepherdOfShepherds />,
  };
  return iconMap[title] || <LevelIcons.Seeker />;
};