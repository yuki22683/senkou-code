import { createClient } from "@/lib/supabase/server";
import { ExerciseCard } from "@/components/exercises/ExerciseCard";
import { ResetProgressButton } from "@/components/lessons/ResetProgressButton";
import { getLanguageById, LANGUAGE_COLORS } from "@/data/languages";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { UserProgress } from "@/types/database";

// キャッシュを無効化して、常に最新の進捗データを取得する
export const dynamic = 'force-dynamic';

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
  let progressMap: Record<string, UserProgress> = {};

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
    (p) => p.status === 'completed'
  ).length;
  const progressPercent = totalExercises > 0
    ? Math.round((completedCount / totalExercises) * 100)
    : 0;

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-12">
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
              {isLoggedIn && (
                <div className="mb-4">
                  <ResetProgressButton lessonId={lessonId} lessonTitle={lesson.title} />
                </div>
              )}
              <div>
                {lesson.description && (
                  <p className="text-muted-foreground mb-4">{lesson.description}</p>
                )}

                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-6">
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
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">演習一覧</h2>
            {(() => {
              // 次に実施すべき演習のインデックスを特定
              let nextExerciseIndex = -1;
              for (let i = 0; i < exercises.length; i++) {
                const isLocked = i > 0 && progressMap[exercises[i - 1].id]?.status !== 'completed';
                const isCompleted = progressMap[exercises[i].id]?.status === 'completed';
                if (!isLocked && !isCompleted) {
                  nextExerciseIndex = i;
                  break;
                }
              }

              return exercises.map((exercise, index) => {
                // 最初の演習はロックしない
                // それ以降は前の演習が完了している場合のみアンロック
                const isLocked = index > 0 && progressMap[exercises[index - 1].id]?.status !== 'completed';
                const isNext = index === nextExerciseIndex;

                return (
                  <div key={exercise.id} className="mb-6">
                    <ExerciseCard
                      exercise={exercise}
                      language={language}
                      lessonId={lessonId}
                      progress={progressMap[exercise.id]}
                      isLocked={isLocked}
                      isNext={isNext}
                    />
                  </div>
                );
              });
            })()}
          </div>
        )}
      </div>
    </div>
  );
}