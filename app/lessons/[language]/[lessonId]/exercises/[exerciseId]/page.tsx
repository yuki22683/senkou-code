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
  MoreHorizontal,
  FileCode,
  Undo2,
  Flag,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import axios from "axios";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [correctOutput, setCorrectOutput] = useState("");
  const [correctError, setCorrectError] = useState("");
  const [isCorrectRunning, setIsCorrectRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("console");
  const [currentLine, setCurrentLine] = useState(0);
  const [showHintDialog, setShowHintDialog] = useState(false);
  const [showAnswerDialog, setShowAnswerDialog] = useState(false);
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);
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

    const isExampleMode = activeTab === "examples";
    const sourceCode = isExampleMode
      ? exercise.correct_code
      : typeof codeOverride === "string"
      ? codeOverride
      : code;

    if (isExampleMode) {
      setIsCorrectRunning(true);
      setCorrectOutput("");
      setCorrectError("");
    } else {
      setIsRunning(true);
      setOutput("");
      setError("");
    }

    try {
      const response = await axios.post("/api/judge", {
        source_code: sourceCode,
        language_id: exercise.language_id,
        stdin: exercise.test_input || "",
      }, {
        timeout: 40000 // フロントエンド側でも40秒でタイムアウト
      });

      const result = response.data;

      if (result.stderr) {
        // エラー内容をクリーンアップ
        const stderr = result.stderr;
        const errorLines = stderr.split("\n");
        const lineMatches = Array.from(stderr.matchAll(/line (\d+)/g)) as RegExpMatchArray[];
        let lineNo = lineMatches.length > 0 ? lineMatches[lineMatches.length - 1][1] : null;

        const errorContent = errorLines
          .filter((l: string) => {
            const t = l.trim();
            return (
              t !== "" &&
              t !== "^" &&
              !t.startsWith('File "') &&
              !/^line \d+$/.test(t) &&
              !t.includes("Traceback (most recent call last):")
            );
          })
          .pop()
          ?.trim();

        let displayError = errorContent || stderr;
        const totalLines = sourceCode.trimEnd().split("\n").length;
        if (lineNo && parseInt(lineNo) > totalLines) {
          lineNo = totalLines.toString();
        }

        if (lineNo) {
          displayError = `line ${lineNo}: ${displayError}`;
        }

        if (isExampleMode) {
          setCorrectError(displayError);
        } else {
          setError(displayError);
        }
      } else if (result.compile_output) {
        if (isExampleMode) {
          setCorrectError(result.compile_output);
        } else {
          setError(result.compile_output);
        }
      } else {
        const stdout = result.stdout || "実行完了（出力なし）";
        if (isExampleMode) {
          setCorrectOutput(stdout);
        } else {
          setOutput(stdout);

          // 正解チェック
          if (
            exercise.expected_output &&
            result.stdout?.trim() === exercise.expected_output.trim()
          ) {
            setTimeout(async () => {
              await handleComplete();
            }, 1000);
          }
        }
      }
    } catch (err: any) {
      console.error("Run code error:", err);
      
      let errorMsg = "コードの実行中にエラーが発生しました";
      
      if (err.code === "ECONNABORTED" || err.message?.includes("timeout")) {
        errorMsg = "実行がタイムアウトしました。サーバーからの応答がありません。";
      } else if (err.response?.data?.error) {
        errorMsg = err.response.data.error;
      } else if (err.message) {
        errorMsg = err.message;
      }

      if (isExampleMode) {
        setCorrectError(errorMsg);
      } else {
        setError(errorMsg);
      }
    } finally {
      if (isExampleMode) {
        setIsCorrectRunning(false);
      } else {
        setIsRunning(false);
      }
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
      await supabase.from("user_progress").upsert({
        user_id: user.id,
        exercise_id: exerciseId,
        status: "in_progress",
        current_code: code,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exercise_id' });
    }
    router.push(`/lessons/${language}/${lessonId}/exercises`);
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
      await supabase.from("user_progress").upsert({
        user_id: user.id,
        exercise_id: exerciseId,
        status: "completed",
        completed_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exercise_id' });

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
    setOutput("");
    setError("");
    setCorrectOutput("");
    setCorrectError("");
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
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() =>
                router.push(`/lessons/${language}/${lessonId}/exercises`)
              }
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
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-sm">
                    main.{exercise.file_extension || "txt"}
                  </span>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={handleShowAnswer} className="cursor-pointer">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-600" />
                      <span>答えを見る</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleReset} className="cursor-pointer">
                      <Undo2 className="mr-2 h-4 w-4 text-blue-600" />
                      <span>コードをリセット</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setShowFeedbackDialog(true)} className="cursor-pointer text-orange-600">
                      <Flag className="mr-2 h-4 w-4" />
                      <span>問題を報告</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleInterruptLesson} className="cursor-pointer text-red-600">
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
                    exercise.initial_display_mode === "editable"
                      ? exercise.starter_code || ""
                      : exercise.holey_code || exercise.starter_code || ""
                  }
                  correctCode={exercise.correct_code || ""}
                  language={language}
                  onChange={(value) => setCode(value || "")}
                  onRun={handleRunCode}
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
                    onTabChange={setActiveTab}
                  />
                </div>

                {/* コンソール下部のボタン */}
                <div className="bg-white border border-t-0 rounded-b-lg p-3">
                  <div className="flex items-center gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-base flex-1"
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
                      className="text-base flex-1"
                      onClick={() => setShowHintDialog(true)}
                      disabled={!exercise.hints || !exercise.hints[currentLine]}
                    >
                      <Lightbulb className="w-5 h-5 lg:mr-2" />
                      <span className="hidden lg:inline">ヒント</span>
                    </Button>
                    {showNextButton && (
                      <Button
                        onClick={handleNextExercise}
                        size="sm"
                        className="text-base flex-1"
                      >
                        次の演習へ
                      </Button>
                    )}
                    <Button
                      onClick={() => handleRunCode()}
                      disabled={isRunning}
                      className="bg-green-600 hover:bg-green-700 text-white text-base flex-1"
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
              {exercise.hints && exercise.hints[currentLine]
                ? exercise.hints[currentLine]
                : "この行にはヒントがありません"}
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
            <Button variant="outline" onClick={() => setShowFeedbackDialog(false)}>
              キャンセル
            </Button>
            <Button 
              onClick={handleSubmitFeedback} 
              disabled={isSubmittingFeedback || !feedbackMessage.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSubmittingFeedback ? "送信中..." : "送信する"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
