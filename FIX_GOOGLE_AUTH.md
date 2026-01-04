# Google認証エラーの修正（redirect_uri_mismatch）

## 問題の原因

Google Cloud Console側で、SupabaseのコールバックURLが許可されていません。

## 解決方法

### ステップ1: Supabaseの認証設定を確認

1. **Supabase Dashboard** にアクセス
   - https://mxvqiympzlkcgnywaabq.supabase.co

2. 左サイドバーから **Authentication** → **Providers** を開く

3. **Google** プロバイダーを探す

4. 以下の情報を確認・コピー:
   - **Callback URL (redirect URL)**:
     ```
     https://mxvqiympzlkcgnywaabq.supabase.co/auth/v1/callback
     ```
     ↑この正確なURLをコピーしてください

### ステップ2: Google Cloud Consoleで設定

#### オプションA: 新しいOAuth 2.0クライアントIDを作成する（推奨）

1. **Google Cloud Console** にアクセス
   - https://console.cloud.google.com/

2. プロジェクトを選択（または新規作成）

3. 左メニューから **APIs & Services** → **Credentials** を開く

4. **+ CREATE CREDENTIALS** → **OAuth client ID** をクリック

5. アプリケーションの種類: **Web application** を選択

6. 名前: `Senkou Code - Supabase Auth`

7. **承認済みのリダイレクト URI** に以下を追加:
   ```
   https://mxvqiympzlkcgnywaabq.supabase.co/auth/v1/callback
   ```

8. **作成** をクリック

9. 表示される **クライアントID** と **クライアントシークレット** をコピー

#### オプションB: 既存のOAuth 2.0クライアントIDを編集する

1. Google Cloud Consoleの **Credentials** ページで既存のOAuth 2.0クライアントIDを探す

2. クライアントIDをクリックして編集

3. **承認済みのリダイレクト URI** セクションで **+ ADD URI** をクリック

4. 以下のURLを追加:
   ```
   https://mxvqiympzlkcgnywaabq.supabase.co/auth/v1/callback
   ```

5. **保存** をクリック

### ステップ3: Supabaseに認証情報を設定

1. Supabase Dashboard に戻る

2. **Authentication** → **Providers** → **Google** を開く

3. **Enable Google provider** をオンにする

4. Google Cloud Consoleからコピーした情報を入力:
   - **Client ID**: `your-google-client-id`
   - **Client Secret**: `your-google-client-secret`

5. **Save** をクリック

### ステップ4: テスト

1. ブラウザのキャッシュをクリア（またはシークレットモードを使用）

2. http://localhost:3001 にアクセス

3. 「Googleでログイン」をクリック

4. Googleのアカウント選択画面が表示されることを確認

## 重要なポイント

⚠️ **正確なURL**
```
https://mxvqiympzlkcgnywaabq.supabase.co/auth/v1/callback
```
- プロジェクトID: `mxvqiympzlkcgnywaabq`
- パス: `/auth/v1/callback`
- 末尾のスラッシュなし

⚠️ **http ではなく https**

⚠️ **設定の反映には数分かかる場合があります**

## トラブルシューティング

### まだエラーが出る場合

1. **Google Cloud Consoleの設定を再確認**
   - URLが完全に一致しているか（スペース、スラッシュなど）
   - https://で始まっているか

2. **5分待ってから再試行**
   - Google側の設定反映に時間がかかる場合があります

3. **ブラウザのキャッシュを完全にクリア**
   ```
   Chrome: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
   「キャッシュされた画像とファイル」と「Cookieと他のサイトデータ」をチェック
   ```

4. **Incognitoモード/プライベートブラウジングで試す**

### エラーメッセージの見方

- `redirect_uri_mismatch`: リダイレクトURIが一致していない
  → Google Cloud ConsoleのURIリストを確認

- `invalid_client`: クライアントIDまたはシークレットが間違っている
  → Supabaseの設定を確認

## 参考: OAuth同意画面の設定

初めてGoogle OAuthを使う場合、OAuth同意画面の設定も必要です：

1. Google Cloud Console → **APIs & Services** → **OAuth consent screen**
2. User Type: **External** を選択
3. 必要な情報を入力:
   - App name: `閃光コード`
   - User support email: あなたのメールアドレス
   - Developer contact information: あなたのメールアドレス
4. **Save and Continue**
