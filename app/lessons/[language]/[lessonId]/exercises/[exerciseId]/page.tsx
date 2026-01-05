"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { MobileCodeEditor } from "@/components/exercise/MobileCodeEditor";
import { ConsolePanel } from "@/components/exercise/ConsolePanel";
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
  Play,
  RotateCcw,
  Lightbulb,
  BookOpen,
  MoreVertical,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";
import { createClient } from "@/lib/supabase/client";

export default function ExercisePage() {
  const params = useParams();
  const language = params.language as string;
  const lessonId = params.lessonId as string;
  const exerciseId = params.exerciseId as string;

  const router = useRouter();
  const supabase = createClient();

  const [exercise, setExercise] = useState<any>(null);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showHintDialog, setShowHintDialog] = useState(false);
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [editorKey, setEditorKey] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadExercise();
  }, [exerciseId]);

  useEffect(() => {
    // スマホ表示の時のみ、output/errorが更新されたら一番下にスクロール
    if ((output || error) && mainContentRef.current) {
      const isMobile = window.innerWidth < 1024; // lg breakpoint
      if (isMobile) {
        setTimeout(() => {
          if (mainContentRef.current) {
            mainContentRef.current.scrollTop = mainContentRef.current.scrollHeight;
          }
        }, 100);
      }
    }
  }, [output, error]);

  async function loadExercise() {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("exercises")
        .select("*")
        .eq("id", exerciseId)
        .single();

      if (error) throw error;

      setExercise(data);
      setCode(data.starter_code || data.holey_code || "");
    } catch (err) {
      console.error("Error loading exercise:", err);
      setError("演習の読み込みに失敗しました");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRunCode(codeOverride?: string) {
    if (!exercise) return;

    setIsRunning(true);
    setOutput("");
    setError("");

    try {
      const response = await axios.post("/api/judge", {
        source_code: typeof codeOverride === 'string' ? codeOverride : code,
        language_id: exercise.language_id,
        stdin: exercise.test_input || "",
      });

      const result = response.data;

      if (result.stderr) {
        setError(result.stderr);
      } else if (result.compile_output) {
        setError(result.compile_output);
      } else {
        setOutput(result.stdout || "実行完了（出力なし）");

        // 正解チェック
        if (
          exercise.expected_output &&
          result.stdout?.trim() === exercise.expected_output.trim()
        ) {
          // コンソールが表示されてから5秒後に正解演出を表示
          setTimeout(async () => {
            await handleComplete();
          }, 5000);
        }
      }
    } catch (err: any) {
      console.error("Run code error:", err);
      setError(
        err.response?.data?.error || "コードの実行中にエラーが発生しました"
      );
    } finally {
      setIsRunning(false);
    }
  }

  async function handleComplete() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase.from("user_progress").upsert({
        user_id: user.id,
        exercise_id: exerciseId,
        status: "completed",
        completed_at: new Date().toISOString(),
      });

      setShowCompleteDialog(true);
    }
  }

  function handleReset() {
    setCode(exercise?.starter_code || exercise?.holey_code || "");
    setOutput("");
    setError("");
    setEditorKey((prev) => prev + 1);
  }

  async function handleNextExercise() {
    if (!exercise) {
      router.push(`/lessons/${language}/${lessonId}/exercises`);
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
        router.push(`/lessons/${language}/${lessonId}/exercises/${data.id}/tutorial`);
      } else {
        router.push(`/lessons/${language}/${lessonId}/exercises`);
      }
    } catch (error) {
      console.error("Error navigating to next exercise:", error);
      router.push(`/lessons/${language}/${lessonId}/exercises`);
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
            <h1 className="text-xl font-bold">{exercise.title}</h1>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              {exercise.difficulty === "easy" && "初級"}
              {exercise.difficulty === "medium" && "中級"}
              {exercise.difficulty === "hard" && "上級"}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              リセット
            </Button>
          </div>
        </div>

        <div className="px-4 pt-4 pb-4 lg:h-[calc(100%-60px)]">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:h-full">
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
            <div className="order-2 flex flex-col min-h-[700px] lg:min-h-0 lg:h-full">
              <div className="bg-white rounded-t-lg border border-b-0 p-3 flex items-center justify-between flex-shrink-0" style={{ height: '50px' }}>
                <span className="font-medium text-sm">
                  main.{exercise.file_extension || "txt"}
                </span>
              </div>
              <div className="bg-white border rounded-b-lg overflow-hidden flex-1">
                <MobileCodeEditor
                  key={editorKey}
                  initialCode={
                    exercise.initial_display_mode === "editable"
                      ? exercise.starter_code || ""
                      : exercise.holey_code || exercise.starter_code || ""
                  }
                  correctCode={exercise.correct_code || ""}
                  language={language}
                  onChange={(value) => setCode(value || "")}
                  onRun={handleRunCode}
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
                    testCases={
                      exercise.test_cases
                        ? typeof exercise.test_cases === 'string'
                          ? JSON.parse(exercise.test_cases)
                          : exercise.test_cases
                        : [
                            {
                              input: exercise.test_input || "",
                              expectedOutput: exercise.expected_output || "",
                            },
                          ]
                    }
                  />
                </div>

                {/* コンソール下部のボタン（常に表示） */}
                <div className="bg-white border border-t-0 rounded-b-lg p-3 flex items-center justify-between gap-2 flex-shrink-0">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-base"
                      onClick={() =>
                        router.push(
                          `/lessons/${language}/${lessonId}/exercises/${exerciseId}/tutorial`
                        )
                      }
                    >
                      <BookOpen className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">スライドを見る</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-base"
                      onClick={() => setShowHintDialog(true)}
                    >
                      <Lightbulb className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">ヒント</span>
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    {showNextButton && (
                      <Button
                        onClick={handleNextExercise}
                        size="sm"
                        className="text-base"
                      >
                        次の演習へ
                      </Button>
                    )}
                    <Button
                      onClick={() => handleRunCode()}
                      disabled={isRunning}
                      className="bg-green-600 hover:bg-green-700 text-white text-base"
                      size="sm"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {isRunning ? "実行中..." : "実行"}
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
              {exercise.hint || "この演習にはヒントがありません"}
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowHintDialog(false)}>閉じる</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 答えダイアログ */}
      <Dialog open={showAnswerDialog} onOpenChange={setShowAnswerDialog}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>正解コード</DialogTitle>
            <DialogDescription>
              参考のため正解コードを表示します
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm">
              {exercise.correct_code || "正解コードが設定されていません"}
            </pre>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowAnswerDialog(false)}>閉じる</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* 完了ダイアログ */}
      <Dialog open={showCompleteDialog} onOpenChange={setShowCompleteDialog}>
        <DialogContent overlayClassName="bg-transparent">
          <DialogHeader>
            <DialogTitle className="flex items-center text-green-600">
              <CheckCircle2 className="w-6 h-6 mr-2" />
              正解です！
            </DialogTitle>
            <DialogDescription>
              おめでとうございます！この演習をクリアしました。
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setShowCompleteDialog(false);
              setShowNextButton(true);
            }}>
              演習を続ける
            </Button>
            <Button onClick={handleNextExercise}>次の演習へ</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
