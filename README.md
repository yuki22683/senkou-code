# 令和プログラミング (Reiwa Programming)

完全無料のプログラミング演習プラットフォーム

## 技術スタック

- **フロントエンド**: Next.js 14 (App Router) + TypeScript
- **UI**: Tailwind CSS + shadcn/ui
- **認証・DB**: Supabase
- **コード実行**: Judge0 (Self-Hosted)
- **状態管理**: Zustand
- **エディタ**: Monaco Editor

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Supabase Service Role Key (管理者用、シードスクリプトで使用)
# Supabase Dashboard → Settings → API → service_role (secret)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Judge0 (Self-Hosted)
JUDGE0_API_URL=http://localhost:2358

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**重要:** `SUPABASE_SERVICE_ROLE_KEY` は管理者権限を持つため、外部に公開しないでください。

### 3. Judge0 の起動（Self-Hosted）

Judge0をDockerで起動します:

```bash
docker-compose up -d
```

Judge0が起動するまで1-2分かかる場合があります。以下のコマンドで起動状態を確認できます:

```bash
docker-compose ps
```

Judge0のヘルスチェック:

```bash
curl http://localhost:2358/system_info
```

### 4. Supabase データベースのセットアップ

Supabaseプロジェクトでテーブルを作成します。`supabase/migrations/001_initial_schema.sql` を実行してください（Phase 2で作成予定）。

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 にアクセスしてください。

## プロジェクト構造

```
reiwaprograming/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx           # ホーム画面
│   └── lessons/           # レッスン・演習ページ（Phase 2以降）
├── components/
│   ├── ui/                # shadcn/ui コンポーネント
│   ├── layout/            # Header, Footer
│   ├── home/              # LanguageCard
│   ├── lessons/           # レッスン関連（Phase 2以降）
│   └── exercises/         # 演習エディタ（Phase 4以降）
├── lib/
│   ├── supabase/          # Supabase クライアント
│   └── utils.ts
├── data/
│   └── languages.ts       # 対応言語定義
├── middleware.ts          # 認証ミドルウェア
└── docker-compose.yml     # Judge0 設定
```

## 対応プログラミング言語

- Python (Judge0 ID: 71)
- JavaScript (Judge0 ID: 63)
- Java (Judge0 ID: 62)
- C++ (Judge0 ID: 54)
- C# (Judge0 ID: 51)
- Go (Judge0 ID: 60)
- Rust (Judge0 ID: 73)
- Ruby (Judge0 ID: 72)
- PHP (Judge0 ID: 68)

## 開発フェーズ

### Phase 1: プロジェクト基盤 + 認証 ✅
- Next.js環境構築
- Supabase認証設定
- ホーム画面（言語カード表示）

### Phase 2: データベース設計 + 基本画面遷移（実装予定）
- Supabaseテーブル作成
- レッスン/演習一覧ページ
- 進捗管理

### Phase 3: 解説スライド機能（実装予定）
- スライド形式の解説ページ
- Markdown対応

### Phase 4: 演習機能 - Monaco Editor（実装予定）
- 穴埋めコード実装
- 候補ボタン
- 行単位の自動チェック

### Phase 5: Judge0 API統合（実装予定）
- コード実行機能
- コンソール出力表示

### Phase 6: 完了処理 + UX改善（実装予定）
- 演習クリアアニメーション
- ヒント機能
- メニュー機能

### Phase 7: 最適化 + テスト（実装予定）
- レスポンシブ対応
- アクセシビリティ
- パフォーマンス最適化

## Judge0 の停止

```bash
docker-compose down
```

データも含めて完全削除する場合:

```bash
docker-compose down -v
```

## トラブルシューティング

### Judge0が起動しない

1. Dockerが起動しているか確認
2. ポート2358が使用されていないか確認: `lsof -i :2358`
3. ログを確認: `docker-compose logs judge0-server`

### Supabaseに接続できない

1. `.env.local` の環境変数が正しく設定されているか確認
2. Supabaseプロジェクトが起動しているか確認

## ライセンス

MIT
