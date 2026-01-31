"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { useNavigationLoading } from "@/components/layout/NavigationLoadingProvider";
import { MobileCodeEditor } from "@/components/exercise/MobileCodeEditor";
import { ConsolePanel } from "@/components/exercise/ConsolePanel";
import { SyntaxHighlightedCode } from "@/components/exercise/SyntaxHighlightedCode";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Lightbulb,
  BookOpen,
  AlertCircle,
  CheckCircle2,
  MoreHorizontal,
  FileCode,
  Undo2,
  Flag,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Confetti } from "@/components/celebrations/Confetti";
import { CelebrationOverlay } from "@/components/celebrations/CelebrationOverlay";
import { getRandomMessage, CelebrationType, CelebrationMessage } from "@/lib/celebrations/messages";
import type { ParsedError } from "@/lib/parse-execution-errors";
import { getXpForDifficulty } from "@/lib/xp";
import type { Difficulty, Exercise } from "@/types/database";

export default function ExercisePage() {
  const params = useParams();
  const language = params.language as string;
  const lessonId = params.lessonId as string;
  const exerciseId = params.exerciseId as string;

  const { navigateTo, isNavigating } = useNavigationLoading();
  const supabase = createClient();

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [correctOutput, setCorrectOutput] = useState("");
  const [correctError, setCorrectError] = useState("");
  const [isCorrectRunning, setIsCorrectRunning] = useState(false);
  const [parsedError, setParsedError] = useState<ParsedError | null>(null);
  const [correctParsedError, setCorrectParsedError] = useState<ParsedError | null>(null);
  const [activeTab, setActiveTab] = useState("console");
  const [currentLine, setCurrentLine] = useState(0);
  const [showHintDialog, setShowHintDialog] = useState(false);
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
  const [editorKey, setEditorKey] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [savedInitialCode, setSavedInitialCode] = useState<string | null>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // お祝い演出用の状態
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationType, setCelebrationType] = useState<CelebrationType>("exercise");
  const [celebrationMessage, setCelebrationMessage] = useState<CelebrationMessage | null>(null);
  const [earnedXp, setEarnedXp] = useState<number>(0);

  useEffect(() => {
    const loadExercise = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("exercises")
          .select("*")
          .eq("id", exerciseId)
          .single();

        if (error) throw error;

        setExercise(data);

        // sessionStorageから一時保存されたコードを取得
        const savedCodeKey = `exercise_temp_code_${exerciseId}`;
        const savedCode = sessionStorage.getItem(savedCodeKey);

        if (savedCode) {
          // 一時保存されたコードがあれば使用し、sessionStorageから削除
          setSavedInitialCode(savedCode);
          setCode(savedCode);
          sessionStorage.removeItem(savedCodeKey);
        } else {
          setSavedInitialCode(null);
          setCode(data.starter_code || data.holey_code || "");
        }
      } catch (err) {
        console.error("Error loading exercise:", err);
        setError("演習の読み込みに失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    loadExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseId]);

  useEffect(() => {
    // スマホ表示の時のみ、output/errorが更新されたら一番下にスクロール
    // ただし、演習完了演出中はスクロールしない
    if ((output || error) && mainContentRef.current && !showCelebration && !showCompleteDialog) {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      if (isMobile) {
        setTimeout(() => {
          if (mainContentRef.current && !showCelebration && !showCompleteDialog) {
            mainContentRef.current.scrollTop = mainContentRef.current.scrollHeight;
          }
        }, 100);
      }
    }
  }, [output, error, showCelebration, showCompleteDialog]);

  async function handleRunCode(forExampleTab?: boolean) {
    if (!exercise) return;

    // forExampleTabが明示的に渡された場合はそれを使用、そうでなければactiveTabから判断
    const isExampleMode = forExampleTab !== undefined ? forExampleTab : activeTab === "examples";

    if (isExampleMode) {
      // 見本タブ: expected_outputを表示
      setIsCorrectRunning(true);
      setCorrectOutput("");
      setCorrectError("");
      setCorrectParsedError(null);

      // 少し遅延させて実行している風に見せる
      await new Promise(resolve => setTimeout(resolve, 300));

      const output = exercise.expected_output || "実行完了（出力なし）";
      setCorrectOutput(output);
      setIsCorrectRunning(false);
    } else {
      // 全行正解で呼ばれた場合: expected_outputを表示
      setIsRunning(true);
      setOutput("");
      setError("");
      setParsedError(null);

      // 少し遅延させて実行している風に見せる
      await new Promise(resolve => setTimeout(resolve, 500));

      const output = exercise.expected_output || "実行完了（出力なし）";
      setOutput(output);
      setIsRunning(false);

      // 正解処理
      setTimeout(async () => {
        await handleComplete();
      }, 1000);
    }
  }

  async function handleShowAnswer() {
    setShowAnswerDialog(true);
    
    // ヒント使用として進捗を保存
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("user_progress").upsert({
        user_id: user.id,
        exercise_id: exerciseId,
        status: "hint_used",
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exercise_id' });
    }
  }

  async function handleInterruptLesson() {
    // 現在の進捗を保存して一覧へ戻る
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      // 既に完了している場合はステータスを上書きしない
      const { data: existingProgress } = await supabase
        .from("user_progress")
        .select("status")
        .eq("user_id", user.id)
        .eq("exercise_id", exerciseId)
        .single();

      if (existingProgress?.status !== "completed") {
        await supabase.from("user_progress").upsert({
          user_id: user.id,
          exercise_id: exerciseId,
          status: "in_progress",
          current_code: code,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,exercise_id' });
      }
    }
    // キャッシュを無効化するためハードナビゲーション
    navigateTo(`/lessons/${language}/${lessonId}/exercises`, { hardRefresh: true });
  }

  async function handleSubmitFeedback() {
    if (!feedbackMessage.trim()) return;

    setIsSubmittingFeedback(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { error } = await supabase.from("feedback").insert({
        user_id: user?.id || null,
        exercise_id: exerciseId,
        type: "improvement",
        message: feedbackMessage,
      });

      if (error) throw error;

      alert("報告ありがとうございます。フィードバックを送信しました。");
      setFeedbackMessage("");
      setShowFeedbackDialog(false);
    } catch (err) {
      console.error("Feedback error:", err);
      alert("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmittingFeedback(false);
    }
  }

  async function handleComplete() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      // この演習が初めて完了かチェック
      const { data: existingProgress } = await supabase
        .from("user_progress")
        .select("status")
        .eq("user_id", user.id)
        .eq("exercise_id", exerciseId)
        .single();

      const isFirstCompletion = !existingProgress || existingProgress.status !== "completed";

      await supabase.from("user_progress").upsert({
        user_id: user.id,
        exercise_id: exerciseId,
        status: "completed",
        completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exercise_id' });

      // XPを付与（1日1回まで同じ演習でXPを獲得可能）
      const difficulty = (exercise?.difficulty || "easy") as Difficulty;
      const xpAmount = getXpForDifficulty(difficulty);

      try {
        // XP履歴に追加（同じ日・同じ演習の場合はユニーク制約でエラー→無視）
        const { error: xpError } = await supabase.from("xp_history").insert({
          user_id: user.id,
          exercise_id: exerciseId,
          xp_amount: xpAmount,
          reason: "exercise_completion",
        });

        // XP履歴の追加に成功した場合のみ、total_xpを更新
        if (!xpError) {
          // ユーザーの総XPを更新
          const { data: userData } = await supabase
            .from("users")
            .select("total_xp, completed_exercises_count, completed_lessons_count")
            .eq("id", user.id)
            .single();

          const currentXp = userData?.total_xp || 0;
          const currentExercisesCount = userData?.completed_exercises_count || 0;

          // XPと演習クリア数を更新（初回完了の場合のみカウントを増加）
          const updateData: { total_xp: number; completed_exercises_count?: number } = {
            total_xp: currentXp + xpAmount,
          };
          if (isFirstCompletion) {
            updateData.completed_exercises_count = currentExercisesCount + 1;
          }

          await supabase
            .from("users")
            .update(updateData)
            .eq("id", user.id);

          setEarnedXp(xpAmount);
        } else {
          // 既に今日XPを獲得済みの場合でも、初回完了ならカウントを増加
          if (isFirstCompletion) {
            const { data: userData } = await supabase
              .from("users")
              .select("completed_exercises_count")
              .eq("id", user.id)
              .single();

            await supabase
              .from("users")
              .update({ completed_exercises_count: (userData?.completed_exercises_count || 0) + 1 })
              .eq("id", user.id);
          }
          setEarnedXp(0);
        }
      } catch (err) {
        console.error("Error awarding XP:", err);
        setEarnedXp(0);
      }

      // レッスン完了・言語完了をチェック
      let type: CelebrationType = "exercise";
      let isFirstLessonCompletion = false;

      try {
        // このレッスンの全演習を取得
        const { data: lessonExercises } = await supabase
          .from("exercises")
          .select("id")
          .eq("lesson_id", exercise?.lesson_id);

        if (lessonExercises && lessonExercises.length > 0) {
          // ユーザーの進捗を取得（upsert後なので今完了した演習も含まれる）
          const exerciseIds = lessonExercises.map((e) => e.id);
          const { data: progress } = await supabase
            .from("user_progress")
            .select("exercise_id, status")
            .eq("user_id", user.id)
            .in("exercise_id", exerciseIds)
            .eq("status", "completed");

          // 完了済み演習のセットを作成
          const completedIds = new Set(progress?.map((p) => p.exercise_id) || []);
          // 今完了した演習を除いた数（upsert前の状態を再現）
          const previousCompletedCount = completedIds.has(exerciseId) && isFirstCompletion
            ? completedIds.size - 1
            : completedIds.size;
          // 今完了した演習を含める
          completedIds.add(exerciseId);

          // レッスン完了かチェック
          if (completedIds.size >= lessonExercises.length) {
            // 初めてレッスン完了かチェック（以前はレッスン未完了だった）
            isFirstLessonCompletion = previousCompletedCount < lessonExercises.length;
            type = "lesson";

            // 初回レッスン完了の場合、completed_lessons_countを増加
            if (isFirstLessonCompletion) {
              const { data: userData } = await supabase
                .from("users")
                .select("completed_lessons_count")
                .eq("id", user.id)
                .single();

              await supabase
                .from("users")
                .update({ completed_lessons_count: (userData?.completed_lessons_count || 0) + 1 })
                .eq("id", user.id);
            }

            // 言語の全レッスン完了もチェック
            const { data: allLessons } = await supabase
              .from("lessons")
              .select("id")
              .eq("language", language);

            if (allLessons && allLessons.length > 0) {
              // 各レッスンの完了状況をチェック
              let allLessonsComplete = true;
              for (const lesson of allLessons) {
                if (lesson.id === exercise?.lesson_id) continue; // 今完了したレッスンはスキップ

                const { data: lessonExs } = await supabase
                  .from("exercises")
                  .select("id")
                  .eq("lesson_id", lesson.id);

                if (lessonExs && lessonExs.length > 0) {
                  const lessonExIds = lessonExs.map((e) => e.id);
                  const { data: lessonProgress } = await supabase
                    .from("user_progress")
                    .select("exercise_id")
                    .eq("user_id", user.id)
                    .in("exercise_id", lessonExIds)
                    .eq("status", "completed");

                  if (!lessonProgress || lessonProgress.length < lessonExs.length) {
                    allLessonsComplete = false;
                    break;
                  }
                }
              }

              if (allLessonsComplete) {
                type = "language";
              }
            }
          }
        }
      } catch (err) {
        console.error("Error checking completion status:", err);
      }

      // お祝い演出を表示
      setCelebrationType(type);
      setCelebrationMessage(getRandomMessage(type));
      setShowConfetti(true);
      setShowCelebration(true);
    } else {
      // 未ログインの場合は完了ダイアログを直接表示
      setShowCompleteDialog(true);
    }
  }

  function handleReset() {
    let initialCode = "";
    if (exercise?.initial_display_mode === 'editable') {
      initialCode = exercise.starter_code || "";
    } else {
      initialCode = exercise?.holey_code || exercise?.starter_code || "";
    }
    setCode(initialCode);
    setSavedInitialCode(null); // 一時保存をクリア
    setOutput("");
    setError("");
    setCorrectOutput("");
    setCorrectError("");
    setParsedError(null);
    setCorrectParsedError(null);
    setEditorKey((prev) => prev + 1);
  }

  async function handleNextExercise() {
    if (!exercise) {
      // キャッシュを無効化するためハードナビゲーション
      navigateTo(`/lessons/${language}/${lessonId}/exercises`, { hardRefresh: true });
      return;
    }

    // レッスン完了または言語完了の場合は直接レッスン一覧へ
    if (celebrationType === "lesson" || celebrationType === "language") {
      // キャッシュを無効化するためハードナビゲーション
      navigateTo(`/lessons/${language}`, { hardRefresh: true });
      return;
    }

    try {
      const { data } = await supabase
        .from("exercises")
        .select("id")
        .eq("lesson_id", exercise.lesson_id)
        .gt("order_index", exercise.order_index)
        .order("order_index", { ascending: true })
        .limit(1)
        .maybeSingle();

      if (data) {
        // 次の演習のチュートリアルへ（キャッシュ無効化不要）
        navigateTo(`/lessons/${language}/${lessonId}/exercises/${data.id}/tutorial`);
      } else {
        // キャッシュを無効化するためハードナビゲーション
        navigateTo(`/lessons/${language}`, { hardRefresh: true });
      }
    } catch (error) {
      console.error("Error navigating to next exercise:", error);
      // キャッシュを無効化するためハードナビゲーション
      navigateTo(`/lessons/${language}`, { hardRefresh: true });
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!exercise) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600">演習が見つかりませんでした</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100" style={{ height: '90vh', display: 'flex', flexDirection: 'column' }}>
      {/* メインコンテンツ */}
      <div ref={mainContentRef} className="overflow-y-auto lg:overflow-hidden flex-1">
        {/* ヘッダー */}
        <div className="bg-white border-b px-6 flex items-center justify-between flex-shrink-0" style={{ height: '60px' }}>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setShowExitDialog(true)}
              disabled={isNavigating}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <h1 className="text-xl font-bold">{exercise.title}</h1>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {exercise.difficulty === "easy" && "初級"}
              {exercise.difficulty === "medium" && "中級"}
              {exercise.difficulty === "hard" && "上級"}
            </span>
          </div>
        </div>

        <div className="px-1 sm:px-4 pt-2 sm:pt-4 pb-2 sm:pb-4 lg:h-[calc(100%-60px)]">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 sm:gap-4 lg:h-full">
            {/* 問題文（スマホのみ） */}
            <div className="order-1 lg:hidden">
              <div className="bg-white rounded-lg border p-4 overflow-y-auto flex-shrink-0" style={{ maxHeight: '150px' }}>
                <h2 className="text-lg font-semibold mb-2">問題</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap text-sm">{exercise.description}</p>
                </div>
              </div>
            </div>

            {/* エディタ */}
            <div className="order-2 flex flex-col min-h-[200px] sm:min-h-[700px] lg:min-h-0 lg:h-full">
              <div className="bg-white rounded-t-lg border border-b-0 p-2 sm:p-3 flex items-center justify-between flex-shrink-0" style={{ height: '50px' }}>
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-sm">
                    main.{exercise.file_extension || "txt"}
                  </span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild disabled={isNavigating}>
                    <Button variant="ghost" size="icon" className="h-8 w-8" disabled={isNavigating}>
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={handleShowAnswer} className="cursor-pointer" disabled={isNavigating}>
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                      <span>答えを見る</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleReset} className="cursor-pointer" disabled={isNavigating}>
                      <Undo2 className="mr-2 h-4 w-4 text-blue-600" />
                      <span>コードをリセット</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowFeedbackDialog(true)} className="cursor-pointer text-orange-600" disabled={isNavigating}>
                      <Flag className="mr-2 h-4 w-4" />
                      <span>問題を報告</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleInterruptLesson} className="cursor-pointer text-red-600" disabled={isNavigating}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>レッスンを中断する</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="bg-white border rounded-b-lg overflow-hidden flex-1">
                <MobileCodeEditor
                  key={editorKey}
                  initialCode={
                    savedInitialCode !== null
                      ? savedInitialCode
                      : exercise.initial_display_mode === "editable"
                        ? exercise.starter_code || ""
                        : exercise.holey_code || exercise.starter_code || ""
                  }
                  correctLines={exercise.correct_lines || exercise.correct_code?.split("\n") || []}
                  language={language}
                  onChange={(value) => setCode(value || "")}
                  onRun={() => handleRunCode(false)}
                  onCursorChange={(line) => setCurrentLine(line)}
                />
              </div>
            </div>

            {/* コンソール + ボタン */}
            <div className="order-3 lg:order-1 flex flex-col lg:h-full">
              {/* 問題文（PCのみ） */}
              <div className="hidden lg:block bg-white rounded-lg border p-4 overflow-y-auto flex-shrink-0" style={{ maxHeight: '150px' }}>
                <h2 className="text-lg font-semibold mb-2">問題</h2>
                <div className="prose prose-sm max-w-none">
                  <p className="whitespace-pre-wrap text-sm">{exercise.description}</p>
                </div>
              </div>

              {/* コンソール + ボタン */}
              <div className="flex flex-col lg:mt-4 overflow-hidden lg:flex-1 min-h-0">
                <div className="bg-white rounded-t-lg border border-b-0 overflow-hidden lg:flex-1 min-h-0 max-h-[200px] lg:max-h-none">
                  <ConsolePanel
                    output={output}
                    error={error}
                    isLoading={isRunning}
                    correctOutput={correctOutput}
                    correctError={correctError}
                    isCorrectLoading={isCorrectRunning}
                    activeTab={activeTab}
                    onTabChange={(tab) => {
                      setActiveTab(tab);
                      // 見本タブに切り替えた時に自動的にexpected_outputを表示
                      if (tab === "examples" && !correctOutput && !isCorrectRunning) {
                        handleRunCode(true); // 見本タブであることを明示的に渡す
                      }
                    }}
                    onRetry={() => handleRunCode()}
                    parsedError={parsedError}
                    correctParsedError={correctParsedError}
                    showNextButton={showNextButton}
                    nextButtonLabel={
                      celebrationType === "lesson" || celebrationType === "language"
                        ? "レッスン一覧へ"
                        : "次の演習へ"
                    }
                    onNextClick={handleNextExercise}
                    isNavigating={isNavigating}
                  />
                </div>

                {/* コンソール下部のボタン */}
                <div className="bg-white border border-t-0 rounded-b-lg p-3">
                  <div className="flex items-center gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-base flex-1"
                      disabled={isNavigating}
                      onClick={() => {
                        // 現在のコードを一時保存
                        const savedCodeKey = `exercise_temp_code_${exerciseId}`;
                        sessionStorage.setItem(savedCodeKey, code);
                        navigateTo(
                          `/lessons/${language}/${lessonId}/exercises/${exerciseId}/tutorial`
                        );
                      }}
                    >
                      <BookOpen className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">スライドを見る</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-base flex-1"
                      onClick={() => setShowHintDialog(true)}
                      disabled={isNavigating || !exercise.line_hints || !exercise.line_hints[currentLine]}
                    >
                      <Lightbulb className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">ヒント</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ヒントダイアログ */}
      <Dialog open={showHintDialog} onOpenChange={setShowHintDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />
              ヒント
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700 whitespace-pre-wrap">
              {exercise.line_hints && exercise.line_hints[currentLine]
                ? exercise.line_hints[currentLine]
                : "この行にはヒントがありません"}
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowHintDialog(false)} disabled={isNavigating}>閉じる</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 答えダイアログ */}
      <Dialog open={showAnswerDialog} onOpenChange={setShowAnswerDialog}>
        <DialogContent className="max-w-3xl w-[calc(100vw-2rem)] sm:w-auto">
          <DialogHeader>
            <DialogTitle>正解コード</DialogTitle>
            <DialogDescription>
              参考のため正解コードを表示します
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 overflow-x-hidden max-h-[50vh] sm:max-h-none overflow-y-auto">
            {exercise.correct_code ? (
              <SyntaxHighlightedCode
                code={exercise.correct_code}
                language={language}
                className="max-w-full"
              />
            ) : (
              <p className="text-gray-500">正解コードが設定されていません</p>
            )}
          </div>
          <DialogFooter>
            <Button onClick={() => setShowAnswerDialog(false)} disabled={isNavigating}>閉じる</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 完了ダイアログ */}
      <Dialog open={showCompleteDialog} onOpenChange={(open) => {
        setShowCompleteDialog(open);
        if (!open) {
          setShowNextButton(true);
        }
      }}>
        <DialogContent overlayClassName="bg-gray-500/20">
          <DialogHeader>
            <DialogTitle className="flex items-center text-green-600">
              <CheckCircle2 className="w-6 h-6 mr-2" />
              正解です！
            </DialogTitle>
            <DialogDescription>
              おめでとうございます！<br />
              {celebrationType === "lesson" || celebrationType === "language"
                ? "このレッスンの演習をすべてクリアしました。"
                : "この演習をクリアしました。"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setShowCompleteDialog(false);
              setShowNextButton(true);
            }} disabled={isNavigating}>
              演習を続ける
            </Button>
            <Button onClick={handleNextExercise} disabled={isNavigating}>
              {celebrationType === "lesson" || celebrationType === "language"
                ? "レッスン一覧へ"
                : "次の演習へ"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 問題を報告ダイアログ */}
      <Dialog open={showFeedbackDialog} onOpenChange={setShowFeedbackDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>問題を報告する</DialogTitle>
            <DialogDescription>
              演習内容の不備や、使いにくい点などがあれば教えてください。
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <textarea
              className="w-full h-32 p-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="こちらに内容を入力してください..."
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
            />
          </div>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowFeedbackDialog(false)} disabled={isNavigating}>
              キャンセル
            </Button>
            <Button
              onClick={handleSubmitFeedback}
              disabled={isNavigating || isSubmittingFeedback || !feedbackMessage.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSubmittingFeedback ? "送信中..." : "送信する"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 終了確認ダイアログ */}
      <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>演習を終了しますか？</DialogTitle>
            <DialogDescription>
              入力された内容は破棄されます。<br />
              この演習を終了しますか？
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setShowExitDialog(false)} disabled={isNavigating}>
              キャンセル
            </Button>
            <Button
              disabled={isNavigating}
              onClick={() => {
                setShowExitDialog(false);
                // キャッシュを無効化するためハードナビゲーション
                navigateTo(`/lessons/${language}/${lessonId}/exercises`, { hardRefresh: true });
              }}
            >
              終了する
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* お祝い演出 */}
      <Confetti
        isActive={showConfetti}
        particleCount={celebrationType === "language" ? 100 : celebrationType === "lesson" ? 70 : 50}
        duration={celebrationType === "language" ? 5000 : celebrationType === "lesson" ? 4000 : 3000}
        onComplete={() => setShowConfetti(false)}
      />
      {celebrationMessage && (
        <CelebrationOverlay
          isOpen={showCelebration}
          type={celebrationType}
          message={celebrationMessage}
          onClose={() => {
            setShowCelebration(false);
            setShowCompleteDialog(true);
          }}
          autoDismissDelay={celebrationType === "language" ? 5000 : celebrationType === "lesson" ? 4000 : 3000}
          earnedXp={earnedXp}
        />
      )}
    </div>
  );
}
