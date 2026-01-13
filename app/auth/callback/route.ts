import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const origin = requestUrl.origin;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Error exchanging code for session:', error);
      return NextResponse.redirect(`${origin}?error=auth_error`);
    }

    // ユーザー情報をusersテーブルに保存
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      // usersテーブルに存在しない場合は作成
      const { error: upsertError } = await supabase
        .from('users')
        .upsert({
          id: user.id,
          email: user.email!,
          display_name: user.user_metadata.full_name || user.email!.split('@')[0],
          avatar_url: user.user_metadata.avatar_url,
        }, {
          onConflict: 'id',
        });

      if (upsertError) {
        // ユーザー情報の保存に失敗しても認証フロー自体は完了させる
        // 次回ログイン時に再試行される
        console.error('Error upserting user:', upsertError);
      }
    }
  }

  // ホームにリダイレクト
  return NextResponse.redirect(`${origin}`);
}
