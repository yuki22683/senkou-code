# 学習コンテンツ チェックリスト

## 使い方

### 単一ファイルをチェック
```bash
node scripts/check-lesson-file.mjs python.ts
```

### 全ファイルをチェック
```bash
node scripts/check-lesson-file.mjs
```

---

## チェック項目一覧

### 1. エスケープシーケンス
- **内容**: `\\n` が正しく2バックスラッシュ+nになっているか
- **エラー時**: 改行が正しく表示されない、コードブロックが壊れる
- **修正**: `node scripts/fix-escape-normalize.mjs`

### 2. lineHints長さ
- **内容**: `lineHints` 配列の長さが `correctLines` と一致しているか
- **エラー時**: ヒントが表示されない、またはずれる
- **修正**: `node scripts/fix-linehints-length-v3.mjs`

### 3. expected_output
- **内容**: `expected_output` が空でないか（assembly系は除外）
- **エラー時**: 正解判定ができない
- **修正**: 手動で正しい出力を設定

### 4. 曖昧コメント
- **内容**: コメントが具体的な内容を示しているか
- **禁止例**: `# 結果を表示`、`// 関数を定義`
- **正しい例**: `# scoreを表示`、`// add関数を定義`
- **修正**: `node scripts/fix-vague-output-comments.mjs`

### 5. holeyCode穴埋め
- **内容**: holeyCodeの全コード行に `___` が含まれているか
- **除外**: コメント行、空行、短い構造行（`{`, `}`等）
- **修正**: 手動で `___` を追加

### 6. コメント整合性
- **内容**: correctCode と holeyCode のコメントが一致しているか
- **エラー時**: ヒントと実際のコードが矛盾する
- **修正**: `node scripts/sync-comments-to-holey.mjs`

### 7. 連続コメント
- **内容**: 2行連続でコメントがないか
- **理由**: どのコメントがどのコードを説明しているか不明確になる
- **修正**: コメントを1行にまとめる

### 8. 日本語文字列
- **内容**: 文字列リテラルが日本語になっているか
- **除外**: `Hello World`、言語名、技術用語
- **修正**: `node scripts/translate-string-literals.mjs`

### 9. tutorialSlides
- **内容**: tutorialSlidesが存在するか
- **エラー時**: 解説なしで演習が始まる

### 10. 画像パス
- **内容**: 画像パスが絶対パス（`/`で始まる）か
- **エラー時**: 画像が表示されない

---

## チェック結果の見方

| 記号 | 意味 |
|------|------|
| ❌ | エラー（必ず修正が必要） |
| ⚠️ | 警告（修正推奨） |
| ✅ | パス |

---

## ファイル修正後の確認手順

1. 修正を加える
2. `node scripts/check-lesson-file.mjs <ファイル名>` を実行
3. エラーと警告が0件になるまで修正
4. `npm run seed:db` でDBに反映
5. UIで表示を確認

---

## 既存の個別チェックスクリプト

| スクリプト | 用途 |
|-----------|------|
| `check-escape-sequences.mjs` | エスケープシーケンス |
| `check-expected-output.mjs` | lineHints長さ・candidates |
| `check-vague-comments.mjs` | 曖昧コメント |
| `check-comment-consistency-v3.mjs` | コメント整合性 |
| `check-candidates-final.mjs` | candidates不足 |
| `check-holey-v4.mjs` | holeyCode整合性 |
| `check-tutorial-exercise-similarity.mjs` | チュートリアルと演習の類似性 |
| `check-python-syntax.mjs` | Python構文チェック |
