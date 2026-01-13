📌 Claude Code への依頼プロンプト（詳細版・深掘り拡張版）

・アプリ名は"令和プログラミング"(reiwa programming)

🔸パスワードなど
・supabase project Database password: RGVBxPDuJYCvcR57

以下の要件を厳密に満たす Web アプリのスクリプトを作成してください。このプロンプトは、元の仕様を基に、記載不足や記載漏れを考慮して深掘りし、より詳細な記述を追加しています。具体的には、以下の点を拡張・補完しています：
- 機能のエッジケース処理（例: エラー発生時、ネットワーク障害時）。
- データ構造の詳細設計（JSONスキーマのサンプル、Supabaseとの連携）。
- UI/UXの微細な挙動（アニメーション、アクセシビリティ、レスポンシブ対応の具体例）。
- セキュリティとベストプラクティス（APIキー管理、入力検証）。
- 状態管理とコンポーネント設計の詳細（RecoilやZustandの提案、フォルダ構成）。
- 進捗管理やユーザー体験の追加機能（未指定だったユーザープロファイルや進捗保存）。
- テストとデバッグの考慮（ユニットテストのサンプルコード提案）。
- デプロイとメンテナンスのヒント（Vercel連携、環境変数管理）。

これらを考慮し、完全なコードベースを提供してください。コードは実装可能で、エラーフリーを目指し、必要に応じてコメントを挿入して説明してください。

■ 使用技術

- フロントエンド：React (v18.x) + Next.js (v14.x) を使用。TypeScriptを必須とし、型安全性を確保。
- バックエンド：Supabase (認証、データベース、ストレージ)。SupabaseのPostgreSQL DBを活用して、演習データやユーザー進捗を動的に管理（JSONファイルベースを補助的に使用可能だが、DB優先）。
- コード実行：Judge0 API を利用。APIキーは環境変数（process.env.JUDGE0_API_KEY）で管理し、フロントエンドから直接呼び出さず、Next.jsのAPIルート経由でプロキシしてセキュリティを確保。Judge0のCE（Community Edition）またはホスト版を想定。
- 追加ライブラリ：
  - UI: Tailwind CSS (レスポンシブデザイン用)、shadcn/ui または Radix UI (ダイアログ、ボタンなどのコンポーネント)。
  - エディタ: Monaco Editor (VS Codeライクなテキストエディタ、虫食いコード対応)。
  - 状態管理: Recoil または Zustand (グローバル状態管理用、ユーザー認証や演習進捗を扱う)。
  - スライド: React-Slick または Swiper.js (解説スライド用)。
  - その他: Axios (API呼び出し)、React-Hook-Form (フォーム入力)、Lodash (ユーティリティ)。

■ アプリの概要

このアプリは「プログラミング演習学習プラットフォーム」です。ユーザーはGoogle認証でログイン後、対応言語を選択 → レッスン選択 → 演習一覧 → 解説スライド → 虫食い式演習を解く、という流れで学習します。教育向けに、子ども（10歳以上）でも直感的に操作可能にする。進捗はSupabase DBに保存し、再ログイン時に復元。全体として、モダンでクリーンなデザイン（パステルカラー中心、フォントは sans-serif、アイコンはLucide Icons使用）。

■ 機能仕様（詳細深掘り）

1️⃣ ホーム画面 (/)

- Judge0 に対応したプログラミング言語一覧を表示。対応言語（拡張子とIDをJudge0準拠で指定）：
  - Python (ID: 71, 拡張子: .py)
  - JavaScript (ID: 63, 拡張子: .js)
  - Java (ID: 62, 拡張子: .java)
  - C++ (ID: 54, 拡張子: .cpp)
  - C# (ID: 51, 拡張子: .cs)
  - Go (ID: 60, 拡張子: .go)
  - Rust (ID: 73, 拡張子: .rs)
  - Ruby (ID: 72, 拡張子: .rb)
  - PHP (ID: 68, 拡張子: .php)

- 表示形式: 言語カード（グリッドレイアウト、レスポンシブでモバイル時は縦並び）。各カードに言語名、簡単な説明（例: "Python: 初心者向けスクリプト言語"）、アイコン（言語ロゴ画像）。
- クリック時: その言語のレッスン一覧ページへ遷移（/lessons/[language]）。
- 未ログイン時: 言語カードは表示されるが、クリックでログイン促進ダイアログを表示（"Googleでログインして学習を始めましょう"）。
- 追加: ヘッダーにログインボタン、フッターにアプリ説明とプライバシーポリシーリンク。

2️⃣ レッスン一覧画面 (/lessons/[language])

- 選択言語のレッスン一覧を表示（Supabase DBからフェッチ）。レッスン例: 初心者向け（変数宣言）、中級（ループ）、上級（アルゴリズム）。
- 表示形式: リストまたはカード。各アイテムにレッスンタイトル、難易度（Easy/Medium/Hardのバッジ）、進捗率（ユーザー進捗DBから計算、例: 70%）。
- クリック時: 演習一覧ページへ遷移（/lessons/[language]/[lessonId]/exercises）。
- エッジケース: レッスンがない場合、空状態UIを表示（"この言語のレッスンは準備中です"）。

3️⃣ Supabase 認証

- Google 認証のみ許可（Supabase Auth UI使用）。メール/パスワードは無効化。
- ログイン後: ユーザー情報をSupabase DBのusersテーブルに保存（user_id, email, display_name, created_at）。
- 未ログイン時: ホームやレッスンページで演習ボタンをdisabledにし、クリックでモーダルダイアログを表示（Googleログインボタン付き）。
- 追加: ログアウト機能（ヘッダーメニュー）。ユーザー進捗テーブル（progress: user_id, language, lesson_id, exercise_id, completed_at）をDBに作成し、演習クリア時に更新。
- セキュリティ: JWTトークンで認証。Next.jsのmiddlewareで保護ルートを設定（/lessons/* を認証必須）。

4️⃣ 演習一覧ページ (/lessons/[language]/[lessonId]/exercises)

- 選択レッスン内の演習一覧を表示（DBまたはJSONから）。各演習にタイトル、難易度、クリア状態（チェックマーク）。
- クリック時: まず解説ページへ遷移（/lessons/[language]/[lessonId]/exercises/[exerciseId]/tutorial）。
- 追加: ソート機能（難易度順、未クリア優先）。ページネーション（1ページ10演習）。

5️⃣ 解説ページ (/lessons/[language]/[lessonId]/exercises/[exerciseId]/tutorial)

- 演習内容をスライド形式で説明（複数ページ、例: ページ1: 概念説明、ページ2: サンプルコード、ページ3: 注意点）。
- UI: Swiper.jsで横スワイプ対応。ナビゲーションボタン（前へ/次へ）。最後のスライドに「演習を始める」ボタンで演習ページへ遷移。
- 追加: スライド内容はMarkdown対応（React-Markdown使用）。音声読み上げボタン（Web Speech APIでアクセシビリティ向上）。スキップ機能（"直接演習へ"ボタン）。

6️⃣ 演習ページ UI (/lessons/[language]/[lessonId]/exercises/[exerciseId])

- 画面レイアウト: 左右2ペイン（レスポンシブでモバイル時は縦積み、左ペインが上）。
  - 左ペイン: 問題文表示エリア + コンソールタブ。
    - 上部タブ: 「コンソール」（実行結果表示、エラー時は赤色ハイライト）、「見本」（サンプル入力/出力例のテーブル）。
    - 下部ボタン:
      - 左: 「スライドを見る」アイコン（解説ページに戻る）、「ヒント」アイコン（モーダルでヒントテキスト表示、複数レベル）。
      - 右: 「実行」ボタン（Judge0送信、Loadingスピナー表示）。
  - 右ペイン: テキストエディタ（Monaco Editor）。
    - 複数ファイル対応: タブで切り替え（例: main.py, helper.py）。1ファイル時は "main.[ext]" 表示。
    - 虫食いコード初期表示: 穴埋め箇所に空のインライン入力（例: "print(___)"）。カーソル自動フォーカス + 点滅アニメーション（CSS keyframes）。
    - 上部「・・・」メニュー: クリックでダイアログ（Radix UI Popover）。
      - 「答えを見る」（正解コードモーダル、確認後進捗を"ヒント使用"として保存）。
      - 「コードをリセット」（初期虫食い状態に戻す）。
      - 「ページ一覧を開く」（演習一覧に戻る）。
      - 「問題を報告」（フォームでフィードバック送信、Supabase DBに保存）。
      - 「レッスンを中断する」（進捗保存してレッスン一覧へ）。
      - 「キャンセル」。

- 虫食い式入力 UX:
  - エディタ下部: 候補ボタン一覧（変数/関数/予約語/数値）。クリックでカーソル位置に挿入。ドラッグ&ドロップ対応（オプション）。
  - 操作ボタン: ←（左移動）、→（右移動）、Space（スペース挿入）、Del（削除）。キーボードショートカットもサポート。
  - 自動チェック: 行入力完了時（Enter or フォーカスアウト）、正解配列と比較。正解時: 緑色ハイライトアニメーション + 音效（Web Audio API）。自動で次行へカーソル移動 + 候補ボタン更新（使用済み非表示）。
  - エラー時: 赤色ハイライト + ツールチップでヒント。

- 完了処理: 最終行正解時、クリアアニメーション（Confetti.js使用）。ダイアログ「次の演習に進みますか？」（はい: 次演習へ、いいえ: 演習一覧へ）。進捗DB更新。

■ Judge0 連携

- APIエンドポイント: Next.js APIルート (/api/judge) でプロキシ。POSTでコード/言語ID/入力送信 → Judge0 submissions → pollingで結果取得。
- 表示: stdout/stderrを表示。エラー時はスタックトレース折りたたみ。
- エッジケース: タイムアウト（30秒）時、再試行ボタン。ネットワークエラー時、エラーメッセージ。

■ 演習データ仕様（JSON/DB管理）

- データはSupabase DBのexercisesテーブルに保存（JSONBカラムで柔軟）。補助的にJSONファイル（/data/exercises.json）で初期データ管理。
- JSONスキーマサンプル:
  ```json
  {
    "language": "python",
    "lessonId": "beginner-variables",
    "exerciseId": "var-decl-1",
    "tutorialSlides": [
      {"title": "変数とは", "content": "Markdownテキスト..."},
      {"title": "例", "content": "code: print('Hello')"}
    ],
    "correctCode": "print('Hello, World!')",
    "holeyCode": "print('___, World!')",
    "correctLines": ["print('Hello, World!')"],  // 行ごとの正解配列
    "candidates": {
      "variables": ["name", "age"],
      "functions": ["print", "input"],
      "keywords": ["if", "else"],
      "numbers": ["1", "2.5"]
    }
  }
  ```
- DBクエリ: Supabase clientでフェッチ/更新。

■ UI の方向性

- 直感的・教育向け: パステルカラー（青/緑基調）、丸角ボタン、大きなフォント。子ども向けにイラスト（SVGアイコン）追加。
- レスポンシブ: Tailwindのブレークポイント使用（sm/md/lg）。モバイルでペイン縦積み、ボタンサイズ拡大。
- アクセシビリティ: ARIA属性、キーボードナビ、コントラスト比4.5:1以上。

■ 期待するアウトプット

- Next.js + React のフル構成（appルーター使用）。
- Supabase: クライアント初期化コード、認証フック。
- Judge0: APIルート実装。
- JSON/DB: サンプルデータ + フェッチ関数。
- 各ページ: コンポーネント化（例: LanguageCard, ExerciseEditor）。
- 型定義: TypeScriptインターフェース（Exercise, UserProgress）。
- API呼び出し: Axiosラッパー。
- 状態管理: Zustandストア（authStore, progressStore）。
- コンポーネント分割: 原子/分子/ページレベル。
- フォルダ構成案:
  ```
  app/
    api/  // Judge0プロキシ
    components/  // UI部品 (Editor, SlideViewer)
    data/  // JSONサンプル
    hooks/  // useAuth, useProgress
    lib/  // Supabase client
    stores/  // Zustand
    lessons/[language]/  // 動的ルート
  ```
- 追加: ユニットテストサンプル（Jest + React Testing LibraryでEditorコンポーネントテスト）。環境変数例（.env.local）。デプロイ: Vercel推奨、Supabase URL設定。