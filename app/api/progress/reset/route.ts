import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // ユーザー認証チェック
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { language, lessonId } = body;

    if (!language && !lessonId) {
      return NextResponse.json(
        { error: "language または lessonId は必須です" },
        { status: 400 }
      );
    }

    let exerciseIds: string[] = [];

    if (lessonId) {
      // 特定のレッスンの演習のみをリセット
      const { data: exercises, error: exercisesError } = await supabase
        .from("exercises")
        .select("id")
        .eq("lesson_id", lessonId);

      if (exercisesError) {
        console.error("Error fetching exercises:", exercisesError);
        return NextResponse.json(
          { error: "演習の取得に失敗しました" },
          { status: 500 }
        );
      }

      if (!exercises || exercises.length === 0) {
        return NextResponse.json({ success: true, deletedCount: 0 });
      }

      exerciseIds = exercises.map((e) => e.id);
    } else {
      // 言語全体のレッスンをリセット
      const { data: lessons, error: lessonsError } = await supabase
        .from("lessons")
        .select("id")
        .eq("language", language);

      if (lessonsError) {
        console.error("Error fetching lessons:", lessonsError);
        return NextResponse.json(
          { error: "レッスンの取得に失敗しました" },
          { status: 500 }
        );
      }

      if (!lessons || lessons.length === 0) {
        return NextResponse.json(
          { error: "この言語のレッスンが見つかりません" },
          { status: 404 }
        );
      }

      const lessonIds = lessons.map((l) => l.id);

      const { data: exercises, error: exercisesError } = await supabase
        .from("exercises")
        .select("id")
        .in("lesson_id", lessonIds);

      if (exercisesError) {
        console.error("Error fetching exercises:", exercisesError);
        return NextResponse.json(
          { error: "演習の取得に失敗しました" },
          { status: 500 }
        );
      }

      if (!exercises || exercises.length === 0) {
        return NextResponse.json({ success: true, deletedCount: 0 });
      }

      exerciseIds = exercises.map((e) => e.id);
    }

    // ユーザーの進捗を削除
    const { error: deleteError, count } = await supabase
      .from("user_progress")
      .delete({ count: "exact" })
      .eq("user_id", user.id)
      .in("exercise_id", exerciseIds);

    if (deleteError) {
      console.error("Error deleting progress:", deleteError);
      return NextResponse.json(
        { error: "進捗の削除に失敗しました" },
        { status: 500 }
      );
    }

    // ユーザーの統計を再計算
    // 全体の完了済み演習数を再取得
    const { count: totalCompletedExercises } = await supabase
      .from("user_progress")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("status", "completed");

    // 完了済みレッスン数を再計算
    const { data: allLessons } = await supabase
      .from("lessons")
      .select("id");

    let completedLessonsCount = 0;
    if (allLessons) {
      for (const lesson of allLessons) {
        const { data: lessonExercises } = await supabase
          .from("exercises")
          .select("id")
          .eq("lesson_id", lesson.id);

        if (lessonExercises && lessonExercises.length > 0) {
          const lessonExerciseIds = lessonExercises.map((e) => e.id);
          const { count: completedCount } = await supabase
            .from("user_progress")
            .select("*", { count: "exact", head: true })
            .eq("user_id", user.id)
            .eq("status", "completed")
            .in("exercise_id", lessonExerciseIds);

          if (completedCount && completedCount >= lessonExercises.length) {
            completedLessonsCount++;
          }
        }
      }
    }

    // ユーザーの統計を更新
    await supabase
      .from("users")
      .update({
        completed_exercises_count: totalCompletedExercises || 0,
        completed_lessons_count: completedLessonsCount,
      })
      .eq("id", user.id);

    return NextResponse.json({
      success: true,
      deletedCount: count || 0,
    });
  } catch (error: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyError = error as any;
    console.error("Reset progress error:", anyError);
    return NextResponse.json(
      { error: "進捗のリセット中にエラーが発生しました" },
      { status: 500 }
    );
  }
}
