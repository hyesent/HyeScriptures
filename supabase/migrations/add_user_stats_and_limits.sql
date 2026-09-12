-- ============================================================
-- USER STATS TABLE
-- ============================================================
create table if not exists user_stats (
  id bigint primary key generated always as identity,
  user_id uuid not null unique references auth.users(id) on delete cascade,
  current_streak int default 0,
  best_streak int default 0,
  last_opened date,
  total_chapters_read int default 0,
  books_completed int default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table user_stats enable row level security;

create policy "Users can read their own stats" on user_stats
  for select using (auth.uid() = user_id);

create policy "Users can update their own stats" on user_stats
  for update using (auth.uid() = user_id);

-- ============================================================
-- AI USAGE LOGS TABLE (explain, shepherd, scripture, sermon)
-- ============================================================
create table if not exists ai_usage_logs (
  id bigint primary key generated always as identity,
  user_id uuid not null references auth.users(id) on delete cascade,
  feature text not null check (feature in ('explain', 'shepherd', 'scripture', 'sermon')),
  date date not null,
  count int not null default 1,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  unique(user_id, feature, date)
);

alter table ai_usage_logs enable row level security;

create policy "Users can read their own usage logs" on ai_usage_logs
  for select using (auth.uid() = user_id);

-- Service role only for inserts/updates (enforced via Edge Function)
create policy "Only authenticated service can update usage" on ai_usage_logs
  for update using (false);

-- ============================================================
-- READING PROGRESS TABLE (tracks completed chapters)
-- ============================================================
create table if not exists reading_progress (
  id bigint primary key generated always as identity,
  user_id uuid not null references auth.users(id) on delete cascade,
  book text not null,
  chapter int not null,
  completed_at timestamp with time zone default now(),
  unique(user_id, book, chapter)
);

alter table reading_progress enable row level security;

create policy "Users can read their own progress" on reading_progress
  for select using (auth.uid() = user_id);

create policy "Users can insert their own progress" on reading_progress
  for insert with check (auth.uid() = user_id);

-- ============================================================
-- SERMON LIMITS TABLE (separate from other AI features)
-- Tracks total sermons generated with metadata
-- ============================================================
create table if not exists sermon_generations (
  id bigint primary key generated always as identity,
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  topic text not null,
  sermon_type text not null check (sermon_type in ('topic', 'passage', 'occasion', 'audience')),
  duration text,
  tone text,
  audience text,
  translation text,
  generated_at timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);

alter table sermon_generations enable row level security;

create policy "Users can read their own sermons" on sermon_generations
  for select using (auth.uid() = user_id);

-- ============================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================
create index if not exists idx_ai_usage_user_date on ai_usage_logs(user_id, date);
create index if not exists idx_sermon_gen_user_date on sermon_generations(user_id, date);
create index if not exists idx_reading_progress_user_book on reading_progress(user_id, book);
