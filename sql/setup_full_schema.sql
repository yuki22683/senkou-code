-- 閃光コード - データベース完全セットアップ

-- ==========================================
-- 1. テーブル作成 (存在しない場合のみ)
-- ==========================================

-- Users テーブル
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lessons テーブル
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  language TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(language, order_index)
);

-- Exercises テーブル
CREATE TABLE IF NOT EXISTS exercises (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  order_index INTEGER NOT NULL,

  -- 解説スライド (JSONB配列)
  tutorial_slides JSONB NOT NULL DEFAULT '[]',

  -- コード関連
  correct_code TEXT NOT NULL,
  holey_code TEXT NOT NULL,
  correct_lines JSONB NOT NULL DEFAULT '[]',

  -- 候補データ (JSONB)
  candidates JSONB NOT NULL DEFAULT '{}',

  -- テストケース (Judge0用)
  test_cases JSONB DEFAULT '[]',

  -- ヒント
  hints JSONB DEFAULT '[]',

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(lesson_id, order_index)
);

-- User Progress テーブル (進捗管理)
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  exercise_id UUID NOT NULL REFERENCES exercises(id) ON DELETE CASCADE,

  status TEXT CHECK (status IN ('not_started', 'in_progress', 'completed', 'hint_used')) DEFAULT 'not_started',
  current_code TEXT,
  completed_at TIMESTAMP WITH TIME ZONE,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, exercise_id)
);

-- Feedback テーブル (問題報告)
CREATE TABLE IF NOT EXISTS feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  exercise_id UUID REFERENCES exercises(id) ON DELETE CASCADE,

  type TEXT CHECK (type IN ('bug', 'improvement', 'other')),
  message TEXT NOT NULL,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================
-- 2. カラム追加 (Judge0対応用)
-- ==========================================

ALTER TABLE exercises
ADD COLUMN IF NOT EXISTS language_id INTEGER NOT NULL DEFAULT 71,
ADD COLUMN IF NOT EXISTS file_extension TEXT NOT NULL DEFAULT 'py',
ADD COLUMN IF NOT EXISTS starter_code TEXT,
ADD COLUMN IF NOT EXISTS test_input TEXT,
ADD COLUMN IF NOT EXISTS expected_output TEXT,
ADD COLUMN IF NOT EXISTS initial_display_mode TEXT DEFAULT 'holey';

-- ==========================================
-- 3. インデックスとコメント
-- ==========================================

-- インデックス
CREATE INDEX IF NOT EXISTS idx_lessons_language ON lessons(language);
CREATE INDEX IF NOT EXISTS idx_lessons_order ON lessons(language, order_index);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson_id ON exercises(lesson_id);
CREATE INDEX IF NOT EXISTS idx_exercises_order ON exercises(lesson_id, order_index);
CREATE INDEX IF NOT EXISTS idx_exercises_language_id ON exercises(language_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_exercise_id ON user_progress(exercise_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_status ON user_progress(user_id, status);
CREATE INDEX IF NOT EXISTS idx_feedback_exercise_id ON feedback(exercise_id);

-- コメント
COMMENT ON COLUMN exercises.language_id IS 'Judge0 language ID';
COMMENT ON COLUMN exercises.file_extension IS 'File extension without dot (e.g., py, js, java)';
COMMENT ON COLUMN exercises.starter_code IS 'Initial code shown in editor';
COMMENT ON COLUMN exercises.test_input IS 'Input for code execution test';
COMMENT ON COLUMN exercises.expected_output IS 'Expected output for test validation';

-- ==========================================
-- 4. RLS (Row Level Security) 設定
-- ==========================================

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;

-- Users ポリシー
DROP POLICY IF EXISTS "Users can view own data" ON users;
CREATE POLICY "Users can view own data" ON users FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own data" ON users;
CREATE POLICY "Users can update own data" ON users FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own data" ON users;
CREATE POLICY "Users can insert own data" ON users FOR INSERT WITH CHECK (auth.uid() = id);

-- User Progress ポリシー
DROP POLICY IF EXISTS "Users can view own progress" ON user_progress;
CREATE POLICY "Users can view own progress" ON user_progress FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own progress" ON user_progress;
CREATE POLICY "Users can insert own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON user_progress;
CREATE POLICY "Users can update own progress" ON user_progress FOR UPDATE USING (auth.uid() = user_id);

-- Feedback ポリシー
DROP POLICY IF EXISTS "Users can submit feedback" ON feedback;
CREATE POLICY "Users can submit feedback" ON feedback FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can view own feedback" ON feedback;
CREATE POLICY "Users can view own feedback" ON feedback FOR SELECT USING (auth.uid() = user_id);

-- Lessons/Exercises (全認証ユーザー閲覧可)
DROP POLICY IF EXISTS "Authenticated users can view lessons" ON lessons;
CREATE POLICY "Authenticated users can view lessons" ON lessons FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Authenticated users can view exercises" ON exercises;
CREATE POLICY "Authenticated users can view exercises" ON exercises FOR SELECT TO authenticated USING (true);

-- 匿名ユーザー(未ログイン)のアクセス許可（必要に応じて）
DROP POLICY IF EXISTS "Public lessons access" ON lessons;
CREATE POLICY "Public lessons access" ON lessons FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public exercises access" ON exercises;
CREATE POLICY "Public exercises access" ON exercises FOR SELECT USING (true);

-- ==========================================
-- 5. トリガー関数 (更新日時用)
-- ==========================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_users_updated_at ON users;
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_lessons_updated_at ON lessons;
CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON lessons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_exercises_updated_at ON exercises;
CREATE TRIGGER update_exercises_updated_at BEFORE UPDATE ON exercises FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_user_progress_updated_at ON user_progress;
CREATE TRIGGER update_user_progress_updated_at BEFORE UPDATE ON user_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
