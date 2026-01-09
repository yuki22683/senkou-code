-- 管理者機能の追加

-- 1. usersテーブルにis_adminカラムを追加
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE;

-- 2. feedbackテーブルのtypeカラムにinquiryを追加
ALTER TABLE feedback DROP CONSTRAINT IF EXISTS feedback_type_check;
ALTER TABLE feedback ADD CONSTRAINT feedback_type_check
  CHECK (type IN ('bug', 'improvement', 'other', 'inquiry'));

-- 3. feedbackテーブルにstatusカラムを追加
ALTER TABLE feedback ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';
ALTER TABLE feedback DROP CONSTRAINT IF EXISTS feedback_status_check;
ALTER TABLE feedback ADD CONSTRAINT feedback_status_check
  CHECK (status IN ('pending', 'resolved', 'ignored'));

-- 4. 管理者メールアドレスを設定
UPDATE users SET is_admin = TRUE WHERE email = 'yuki22683@gmail.com';

-- 5. 管理者用のRLSポリシーを追加

-- 管理者はすべてのフィードバックを閲覧可能
DROP POLICY IF EXISTS "Admins can view all feedback" ON feedback;
CREATE POLICY "Admins can view all feedback" ON feedback
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.is_admin = TRUE
    )
  );

-- 管理者はフィードバックのステータスを更新可能
DROP POLICY IF EXISTS "Admins can update feedback" ON feedback;
CREATE POLICY "Admins can update feedback" ON feedback
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.is_admin = TRUE
    )
  );

-- 管理者は全ユーザー情報を閲覧可能
DROP POLICY IF EXISTS "Admins can view all users" ON users;
CREATE POLICY "Admins can view all users" ON users
  FOR SELECT
  USING (
    auth.uid() = id OR
    EXISTS (
      SELECT 1 FROM users AS u
      WHERE u.id = auth.uid()
      AND u.is_admin = TRUE
    )
  );

-- 匿名ユーザーもフィードバック投稿可能に変更
DROP POLICY IF EXISTS "Anyone can submit feedback" ON feedback;
CREATE POLICY "Anyone can submit feedback" ON feedback
  FOR INSERT
  WITH CHECK (TRUE);

-- インデックス追加
CREATE INDEX IF NOT EXISTS idx_users_is_admin ON users(is_admin);
CREATE INDEX IF NOT EXISTS idx_feedback_status ON feedback(status);
