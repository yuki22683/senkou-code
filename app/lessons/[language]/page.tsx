import { createClient } from "@/lib/supabase/server";
import { LessonCard } from "@/components/lessons/LessonCard";
import { ResetProgressButton } from "@/components/lessons/ResetProgressButton";
import { getLanguageById, LANGUAGE_COLORS } from "@/data/languages";
import { redirect } from "next/navigation";
import { NavigationLink } from "@/components/layout/NavigationLink";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// キャッシュを無効化して、常に最新の進捗データを取得する
export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    language: string;
  };
}

export default async function LessonsPage({ params }: PageProps) {
  const { language } = params;
  const languageInfo = getLanguageById(language);

  if (!languageInfo) {
    redirect('/');
  }

  const colorClass = LANGUAGE_COLORS[language] || 'bg-gray-50 border-gray-200';
  const supabase = await createClient();

  // レッスン一覧を取得
  const { data: lessons, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('language', language)
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching lessons:', error);
  }

  // ユーザーのログイン状態を取得
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;

  // 各レッスンの演習数を取得
  const lessonsWithExerciseCount = await Promise.all(
    (lessons || []).map(async (lesson) => {
      const { count: totalExercises } = await supabase
        .from('exercises')
        .select('*', { count: 'exact', head: true })
        .eq('lesson_id', lesson.id);

      // ユーザーの進捗を取得（認証済みの場合）
      let progressCount = 0;

      if (user) {
        const { count } = await supabase
          .from('user_progress')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', user.id)
          .eq('status', 'completed')
          .in(
            'exercise_id',
            (await supabase
              .from('exercises')
              .select('id')
              .eq('lesson_id', lesson.id)).data?.map(e => e.id) || []
          );

        progressCount = count || 0;
      }

      return {
        ...lesson,
        totalExercises: totalExercises || 0,
        progressCount,
      };
    })
  );

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <NavigationLink href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              言語選択に戻る
            </NavigationLink>
          </Button>

          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-16 h-16 shadow-md rounded-full flex items-center justify-center p-3 border ${colorClass.split(' ').filter(c => !c.startsWith('hover')).join(' ')}`}>
              <div className="relative w-full h-full">
                <Image
                  src={languageInfo.icon}
                  alt={languageInfo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{languageInfo.name} レッスン</h1>
              <p className="text-muted-foreground">{languageInfo.description}</p>
              {isLoggedIn && (
                <div className="mt-2">
                  <ResetProgressButton language={language} languageName={languageInfo.name} />
                </div>
              )}
            </div>
          </div>
        </div>

        {!isLoggedIn ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56">
                <Image 
                  src="/illustrations/decorations/login_invite.png" 
                  alt="Login Invitation" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 text-xl font-medium mb-4">
              新しい冒険（ぼうけん）に出かけよう！
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              レッスンを始めるにはログインが必要です。
            </p>
          </div>
        ) : !lessons || lessons.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 grayscale opacity-70">
                <Image 
                  src="/illustrations/decorations/under_construction.png" 
                  alt="Under Construction" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-500 text-xl font-medium">
              この言語のレッスンは準備中です
            </p>
            <p className="text-sm text-gray-400 mt-2">
              データベースにサンプルデータを投入してください: <code className="bg-gray-200 px-2 py-1 rounded">npm run seed:db</code>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessonsWithExerciseCount.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                language={language}
                progressCount={lesson.progressCount}
                totalExercises={lesson.totalExercises}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}