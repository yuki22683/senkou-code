-- 経験点（XP）システムのマイグレーション

-- Users テーブルに total_xp カラムを追加
ALTER TABLE users ADD COLUMN IF NOT EXISTS total_xp INTEGER NOT NULL DEFAULT 0;

-- XP履歴テーブル（いつ、どの演習で、何XP獲得したかを記録）
CREATE TABLE IF NOT EXISTS xp_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  exercise_id UUID NOT NULL REFERENCES exercises(id) ON DELETE CASCADE,
  xp_amount INTEGER NOT NULL,
  reason TEXT NOT NULL DEFAULT 'exercise_completion',
  earned_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- 同じ演習で複数回XPを獲得可能（繰り返し学習）
  -- ただし、同じ日に同じ演習では1回のみ（daily制限）
  UNIQUE(user_id, exercise_id, earned_date)
);

-- インデックス作成
CREATE INDEX IF NOT EXISTS idx_xp_history_user_id ON xp_history(user_id);
CREATE INDEX IF NOT EXISTS idx_xp_history_created_at ON xp_history(created_at);
CREATE INDEX IF NOT EXISTS idx_users_total_xp ON users(total_xp DESC);

-- Row Level Security
ALTER TABLE xp_history ENABLE ROW LEVEL SECURITY;

-- XP履歴のポリシー
DROP POLICY IF EXISTS "Users can view own xp history" ON xp_history;
CREATE POLICY "Users can view own xp history" ON xp_history
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own xp history" ON xp_history;
CREATE POLICY "Users can insert own xp history" ON xp_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ランキング用：全ユーザーのXPを閲覧可能にするポリシー
DROP POLICY IF EXISTS "Anyone can view user xp for ranking" ON users;
CREATE POLICY "Anyone can view user xp for ranking" ON users
  FOR SELECT USING (true);
