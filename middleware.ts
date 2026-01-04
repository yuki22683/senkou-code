import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // セッションをリフレッシュ
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 未認証ユーザーが演習ページ（tutorial以外）にアクセスしようとした場合のみリダイレクト
  // レッスン一覧、演習一覧、チュートリアルは認証なしで閲覧可能
  const isExercisePage = request.nextUrl.pathname.match(
    /^\/lessons\/[^\/]+\/[^\/]+\/exercises\/[^\/]+$/
  );

  if (!user && isExercisePage) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('redirected', 'true');
    url.searchParams.set('message', 'ログインして演習を始めましょう');
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * 以下を除くすべてのリクエストパスに一致:
     * - _next/static (静的ファイル)
     * - _next/image (画像最適化ファイル)
     * - favicon.ico (ファビコンファイル)
     * - public フォルダ内のファイル
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
