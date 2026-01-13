# Google認証の設定手順

`redirect_uri_mismatch` エラーを解決するための設定手順です。

## 問題

Google認証時に「アクセスをブロック: このアプリのリクエストは無効です」というエラーが表示されます。
これはSupabaseのリダイレクトURL設定が正しくないことが原因です。

## 解決手順

### 1. Supabase Dashboard にアクセス

https://mxvqiympzlkcgnywaabq.supabase.co にアクセスしてログインします。

### 2. Authentication 設定を開く

左サイドバーから **Authentication** → **URL Configuration** を開きます。

### 3. URL設定を更新

以下の設定を入力してください：

#### Site URL
```
http://localhost:3001
```

#### Redirect URLs
現在の値に以下を**追加**してください（既存の値は削除せず、改行で区切って追加）：

```
http://localhost:3001/auth/callback
http://localhost:3000/auth/callback
```

注意：
- 複数のURLを追加する場合は改行で区切ります
- ポート3000と3001の両方を追加しておくと便利です

#### Additional Redirect URLs (optional)
本番環境用のURLも追加できます：
```
https://your-production-domain.com/auth/callback
```

### 4. 設定を保存

画面下部の **Save** ボタンをクリックして設定を保存します。

### 5. Google Cloud Console の設定確認（必要な場合のみ）

もしSupabaseでGoogle認証を初めて設定する場合、Google Cloud Consoleでも設定が必要です：

1. https://console.cloud.google.com/ にアクセス
2. プロジェクトを選択
3. **APIs & Services** → **Credentials** を開く
4. OAuth 2.0 Client IDs から該当のクライアントIDを選択
5. **Authorized redirect URIs** に以下を追加：
   ```
   https://mxvqiympzlkcgnywaabq.supabase.co/auth/v1/callback
   ```

### 6. ブラウザでテスト

1. ブラウザのキャッシュをクリア（または Incognito/プライベートモードを使用）
2. http://localhost:3001 にアクセス
3. 「Googleでログイン」ボタンをクリック
4. Googleアカウント選択画面が表示されることを確認

## トラブルシューティング

### まだエラーが出る場合

1. **ブラウザのキャッシュをクリア**
   - Chrome: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
   - キャッシュと Cookie を削除

2. **Supabaseの設定が反映されるまで待つ**
   - 設定変更後、数分待ってから再試行

3. **開発サーバーを再起動**
   ```bash
   # Ctrl+C で停止してから
   npm run dev
   ```

4. **ポート番号を確認**
   - 開発サーバーが起動しているポート番号（3000 or 3001）を確認
   - Supabaseの設定と一致しているか確認

### よくある間違い

❌ `http://localhost:3001/` (末尾にスラッシュ)
✅ `http://localhost:3001` (末尾にスラッシュなし)

❌ `http://localhost:3001/auth/callback/` (末尾にスラッシュ)
✅ `http://localhost:3001/auth/callback` (末尾にスラッシュなし)

## 確認方法

正しく設定されていれば：
1. 「Googleでログイン」ボタンをクリック
2. Googleのアカウント選択画面が表示される
3. アカウントを選択するとログインが完了する
4. ホーム画面に戻り、右上にユーザー名が表示される
