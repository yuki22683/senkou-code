# データベース マイグレーション手順

ホーム画面から遷移できない問題を解決するため、データベーススキーマを更新する必要があります。

## 問題

`exercises` テーブルに以下のカラムが不足しています：
- `language_id` - Judge0の言語ID
- `file_extension` - ファイル拡張子
- `starter_code` - エディタの初期コード
- `test_input` - テスト入力
- `expected_output` - 期待される出力

## 解決手順

### 1. Supabase Dashboardにアクセス

https://mxvqiympzlkcgnywaabq.supabase.co にアクセスしてログインしてください。

### 2. SQL Editorを開く

左サイドバーから **SQL Editor** をクリックします。

### 3. マイグレーションSQLを実行

**New query** をクリックして、以下のSQLをコピー&ペーストして実行してください：

```sql
-- 演習テーブルに必要なカラムを追加
ALTER TABLE exercises
ADD COLUMN IF NOT EXISTS language_id INTEGER NOT NULL DEFAULT 71,
ADD COLUMN IF NOT EXISTS file_extension TEXT NOT NULL DEFAULT 'py',
ADD COLUMN IF NOT EXISTS starter_code TEXT,
ADD COLUMN IF NOT EXISTS test_input TEXT,
ADD COLUMN IF NOT EXISTS expected_output TEXT;

-- language_id にインデックスを追加（検索パフォーマンス向上）
CREATE INDEX IF NOT EXISTS idx_exercises_language_id ON exercises(language_id);

-- コメントを追加
COMMENT ON COLUMN exercises.language_id IS 'Judge0 language ID';
COMMENT ON COLUMN exercises.file_extension IS 'File extension without dot (e.g., py, js, java)';
COMMENT ON COLUMN exercises.starter_code IS 'Initial code shown in editor (usually same as holey_code)';
COMMENT ON COLUMN exercises.test_input IS 'Input for code execution test';
COMMENT ON COLUMN exercises.expected_output IS 'Expected output for test validation';
```

**Run** ボタンをクリックして実行します。

### 4. データベースにサンプルデータを再投入

ターミナルで以下を実行してください：

```bash
npm run seed:db
```

成功すると、以下のようなメッセージが表示されます：

```
✓ Updated exercise: Hello Worldを出力しよう
✓ Updated exercise: 変数を使ってみよう
```

### 5. 開発サーバーを起動

```bash
npm run dev
```

### 6. ブラウザで確認

http://localhost:3001 にアクセスして、言語カードをクリックしてレッスン一覧に遷移できることを確認してください。

## トラブルシューティング

### SQLエラーが出る場合

- すでにカラムが存在する場合は無視されます（`IF NOT EXISTS` を使用）
- エラーメッセージを確認して、権限の問題がないか確認してください

### シードスクリプトでエラーが出る場合

- `.env.local` の `SUPABASE_SERVICE_ROLE_KEY` が正しく設定されているか確認
- Supabase Dashboardで exercises テーブルの構造を確認

---

以上で遷移機能が正常に動作するようになります。
