-- ユーザー統計カラムの追加

-- Users テーブルに completed_exercises_count と completed_lessons_count カラムを追加
ALTER TABLE users ADD COLUMN IF NOT EXISTS completed_exercises_count INTEGER NOT NULL DEFAULT 0;
ALTER TABLE users ADD COLUMN IF NOT EXISTS completed_lessons_count INTEGER NOT NULL DEFAULT 0;

-- インデックス作成（ランキング用）
CREATE INDEX IF NOT EXISTS idx_users_completed_exercises ON users(completed_exercises_count DESC);
CREATE INDEX IF NOT EXISTS idx_users_completed_lessons ON users(completed_lessons_count DESC);
