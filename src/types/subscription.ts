export type Tier = 'free' | 'elder'

export type Feature =
  | 'bible_reader' | 'search' | 'devotional' | 'bookmarks'
  | 'prayer_journal' | 'badges' | 'theme_settings' | 'profile'
  | 'verse_share' | 'reminders' | 'community'
  | 'ai_chat' | 'quiz_generator' | 'bible_maps' | 'timeline'
  | 'cross_references' | 'prophecy_tracker' | 'first_mentions'
  | 'emotion_heatmap' | 'memory_verses' | 'journal' | 'notes'
  | 'reading_plans' | 'audio_bible' | 'topics' | 'bible_games'
  | 'sermon_builder' | 'strongs' | 'full_audio_bible'
  | 'premium_themes' | 'custom_logo' | 'elder_badge'
  | 'early_access' | 'elder_community' | 'vote_roadmap' | 'no_ads'

export const AI_LIMITS: Record<Tier, number> = {
  free: 2,
  elder: 7,
}

export const TIER_FEATURES: Record<Tier, Feature[]> = {
  free: [
    'bible_reader', 'search', 'devotional', 'bookmarks',
    'prayer_journal', 'badges', 'theme_settings', 'profile',
    'verse_share', 'reminders', 'community',
    'bible_maps', 'timeline', 'cross_references',
    'prophecy_tracker', 'first_mentions', 'emotion_heatmap',
    'memory_verses', 'journal', 'notes', 'reading_plans',
    'audio_bible', 'topics', 'bible_games', 'no_ads',
  ],
  elder: [
    'bible_reader', 'search', 'devotional', 'bookmarks',
    'prayer_journal', 'badges', 'theme_settings', 'profile',
    'verse_share', 'reminders', 'community',
    'bible_maps', 'timeline', 'cross_references',
    'prophecy_tracker', 'first_mentions', 'emotion_heatmap',
    'memory_verses', 'journal', 'notes', 'reading_plans',
    'audio_bible', 'topics', 'bible_games',
    'ai_chat', 'quiz_generator', 'sermon_builder', 'strongs',
    'full_audio_bible',
    'premium_themes', 'custom_logo', 'elder_badge',
    'early_access', 'elder_community', 'vote_roadmap', 'no_ads',
  ],
}
