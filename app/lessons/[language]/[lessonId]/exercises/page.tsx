import { createClient } from "@/lib/supabase/server";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { getLanguageById, LANGUAGE_COLORS } from "@/data/languages";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: {
    language: string;
    lessonId: string;
  };
}

export default async function ExercisesPage({ params }: PageProps) {
  const { language, lessonId } = params;
  const languageInfo = getLanguageById(language);

  if (!languageInfo) {
    redirect('/');
  }

  const colorClass = LANGUAGE_COLORS[language] || 'bg-gray-50 border-gray-200';
  const supabase = await createClient();

  // レッスン情報を取得
  const { data: lesson, error: lessonError } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', lessonId)
    .eq('language', language)
    .single();

  if (lessonError || !lesson) {
    redirect(`/lessons/${language}`);
  }

  // 演習一覧を取得
  const { data: exercises, error: exercisesError } = await supabase
    .from('exercises')
    .select('*')
    .eq('lesson_id', lessonId)
    .order('order_index', { ascending: true });

  if (exercisesError) {
    console.error('Error fetching exercises:', exercisesError);
  }

  // ユーザーのログイン状態を取得
  const { data: { user } } = await supabase.auth.getUser();
  const isLoggedIn = !!user;
  let progressMap: Record<string, any> = {};

  if (user && exercises) {
    const { data: progressData } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .in('exercise_id', exercises.map(e => e.id));

    if (progressData) {
      progressMap = Object.fromEntries(
        progressData.map(p => [p.exercise_id, p])
      );
    }
  }

  // 進捗統計
  const totalExercises = exercises?.length || 0;
  const completedCount = Object.values(progressMap).filter(
    (p: any) => p.status === 'completed'
  ).length;
  const progressPercent = totalExercises > 0
    ? Math.round((completedCount / totalExercises) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href={`/lessons/${language}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              レッスン一覧に戻る
            </Link>
          </Button>

          <div className={`rounded-lg p-6 mb-6 border-2 ${colorClass.split(' ').filter(c => !c.startsWith('hover')).join(' ')}`}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">{lesson.title}</h1>
              </div>
              <div>
                {lesson.description && (
                  <p className="text-muted-foreground mb-4">{lesson.description}</p>
                )}

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">言語:</span>
                    <span className="font-medium">{languageInfo.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">難易度:</span>
                    <span className="font-medium">
                      {lesson.difficulty === 'easy' && '初級'}
                      {lesson.difficulty === 'medium' && '中級'}
                      {lesson.difficulty === 'hard' && '上級'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">演習数:</span>
                    <span className="font-medium">{totalExercises}</span>
                  </div>
                </div>

                {user && totalExercises > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">あなたの進捗</span>
                      <span className="font-medium">
                        {completedCount} / {totalExercises} 完了 ({progressPercent}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {!isLoggedIn ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              レッスンを始めるにはログインが必要です。
            </p>
          </div>
        ) : !exercises || exercises.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              このレッスンの演習は準備中です
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">演習一覧</h2>
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                language={language}
                lessonId={lessonId}
                progress={progressMap[exercise.id]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}