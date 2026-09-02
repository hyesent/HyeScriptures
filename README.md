# HyeScriptures — Feature Overview

This README lists and briefly explains the app features implemented in this repository. It is intentionally focused on features (what the app does) rather than install or development instructions.

---

## Core Reading

- Bible Reader
  - Full Bible reader with chapter navigation, per-chapter progress, and book-level progress tracking so users can pick up where they left off and view reading completion at a glance.

- Search
  - Scripture search across books and chapters with quick navigation to results and integration with bookmarks/notes.

- Reading Plans
  - Multiple built-in reading plans (e.g., Through the Bible, Yearly Pilgrimage) with day-by-day chapter assignments, plan detail views, and active-plan tracking.

- Bookmarks & Notes
  - Save verses or chapters as bookmarks; attach notes to verses and review a consolidated notes list for study and reflection.

- Verse Share
  - Create and export shareable verse images with bundled backgrounds and simple customization for social sharing.

---

## Audio & Voice

- Audio Bible
  - Full audio playback for Scripture with play/pause, chapter navigation, and support for downloading or exporting audio files.

- TTS & Voice Settings
  - Text-to-speech playback speed presets (0.5x–1.5x) with friendly icons and labels. Settings are persisted to local storage so preferences survive app restarts.

- Filesystem Integration
  - Capacitor Filesystem integration allows saving exported assets (images, audio) to device storage on mobile platforms.

---

## Study & Research Tools

- Cross References
  - View linked related verses and navigate through contextual scripture references while reading.

- Strong's Concordance
  - Greek/Hebrew lookup and Strong’s reference support to aid original-language study (premium feature).

- Timeline & Maps
  - Interactive timeline slider and maps (e.g., Jesus’ ministry map, missionary journeys) to visualize events, locations, and historical flow.

- Topics & First Mentions
  - Topic lists and detail pages for thematic study, plus a tracker for “first mentions” of words/concepts across Scripture.

- Prophecy Tracker
  - Tools to trace Old Testament prophecies and view New Testament fulfillment references side-by-side.

- Emotion Heatmap
  - Visual analytic that highlights emotional tones across passages for reflective study.

- Memory Verses / Spaced Repetition
  - Save memory verses and practice them using spaced-repetition mechanics to aid memorization.

- Devotionals
  - Daily devotionals with an editor, share backgrounds, and integration with community posting.

---

## AI & Content Generation

- AI Chat
  - Context-aware AI chat for study questions and guided exploration. Usage is rate-limited per subscription tier.

- Sermon Builder
  - Generate sermon outlines and structured content via AI with a consistent JSON output format for programmatic use.

- Quiz Generator
  - AI endpoint for generating quizzes by topic; returns structured JSON arrays of question objects.

- Verse Explanation (Dreamverse)
  - AI-assisted short explanations and contextual summaries of verses to support quick devotional insights.

- Supabase Edge Functions
  - Server-side functions implement AI prompts and enforce strict JSON responses for reliable downstream use.

---

## Games & Interactive Training

- Bible Arena (Games)
  - Several game modes to reinforce scripture knowledge and recall:
    - Who Am I – Character-based clue guessing.
    - Who Said It – Match quotes to speakers with scoring, streaks, and XP.
    - Finish Verse – Missing-word challenges with hints and categorized difficulty.
    - Missionary Journey – Map-based missions with trivia questions for historical learning.

- XP & Rewards
  - Earn XP and progress through game interactions; XP ties into badges and gamified progression.

---

## Engagement, Progress & Gamification

- Badges & Achievements
  - Multi-category badges (streaks, verses read, milestones) with explicit requirements driven from in-repo badge data.

- Streak Tracking
  - Daily reading streaks and streak-based badges (e.g., 30/90/180/365-day milestones) to encourage consistent reading.

- Stats & Progress
  - Reading and game stats, chapter-level progress, and visual indicators of progress across plans and books.

---

## Personal & Productivity

- Prayer Journal
  - Create, edit, and categorize prayer requests (personal, family, church, etc.) and manage prayer statuses (answered, in-progress).

- Journal & Notes
  - Long-form journaling alongside verse-linked notes and an organized notes list view.

- Reminders
  - Reading and devotional reminders to help maintain daily habits.

- Profile & Theme Settings
  - User profile management, avatar/icon picker, theme customization, and premium custom app icon support.

---

## Community & Social

- Community Feed
  - Create and interact with posts; feed supports categories like prayer and questions plus sorting (latest, popular, trending).

- Groups & Friends
  - Community groups, friend requests, friends list, and user search to build a small social layer for accountability.

- Sharing Tools
  - Share verse images and devotional posts to the community or externally via OS-level share capabilities.

---

## Subscription & Tiering

- Tiered Features (Free / Elder)
  - Feature gating is implemented with a TierGate component. The `TIER_FEATURES` list and AI limits are defined in code for easy adjustment.

- Elder (Premium) Perks
  - Premium includes AI Chat, Sermon Builder, Quiz Generator, Strong’s Concordance, Full Audio Bible, Premium Themes, Custom App Icon, Elder Badge, early access features, exclusive community perks, and ad removal.

---

## Platform & Integrations

- Web + Mobile-ready
  - Built with Vite, React, and TypeScript and configured for Capacitor to produce mobile builds (iOS/Android) and PWA-ready assets.

- Supabase
  - Authentication, community storage, and serverless functions are powered by Supabase (client and edge functions included in the repo).

- Assets & Build
  - App icons, share backgrounds, and XML assets are bundled and referenced by the build (Vite config includes XML assets).

---

## Developer & Data

- Modular Architecture
  - Reusable React components, CSS modules, hooks (useAuth, useSubscription, useBible, useStreak, etc.), and a ThemeContext enable maintainable growth.

- Data-driven Content
  - Reading plans, badges, maps, games, and question banks are stored as in-repo data objects for offline-first behavior and simple updates.

- Supabase Functions & Edge Logic
  - Server-side logic for AI prompts and scheduled content (e.g., daily devotional) lives in the `supabase/functions` folder.

---

## UX & Utility Features

- Upgrade Flow
  - Clear upgrade UI and TierGate fallbacks that nudge users toward premium features when attempting gated actions.

- Export & Share
  - Copy/share text, export assets to device storage, and download content for offline use.

- Small, Helpful Touches
  - Seeded daily content/greetings, emoji-driven UI touches, and animated transitions make the app feel welcoming and polished.

---

