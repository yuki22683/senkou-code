"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SyntaxHighlightedCode } from "@/components/exercise/SyntaxHighlightedCode";

export default function TutorialPage() {
  const params = useParams();
  const language = params.language as string;
  const lessonId = params.lessonId as string;
  const exerciseId = params.exerciseId as string;

  const router = useRouter();
  const supabase = createClient();

  const [exercise, setExercise] = useState<any>(null);
  const [slides, setSlides] = useState<any[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // スワイプ用の状態
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    loadExercise();
  }, [exerciseId]);

  // スライド進捗をlocalStorageから復元
  useEffect(() => {
    if (typeof window !== "undefined" && exerciseId && slides.length > 0) {
      const savedSlide = localStorage.getItem(`tutorial-slide-${exerciseId}`);
      if (savedSlide !== null) {
        const slideIndex = parseInt(savedSlide, 10);
        if (!isNaN(slideIndex) && slideIndex >= 0) {
          // スライド数を超えている場合は最後のスライドに設定
          setCurrentSlide(Math.min(slideIndex, slides.length - 1));
        }
      }
    }
  }, [exerciseId, slides.length]);

  // スライド進捗をlocalStorageに保存
  useEffect(() => {
    if (typeof window !== "undefined" && exerciseId && slides.length > 0) {
      localStorage.setItem(`tutorial-slide-${exerciseId}`, currentSlide.toString());
    }
  }, [currentSlide, exerciseId, slides.length]);

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

      // tutorial_slides を処理
      if (data.tutorial_slides) {
        // Supabaseは自動的にJSONBをパースするので、
        // すでに配列の場合とJSON文字列の場合の両方に対応
        let parsedSlides = data.tutorial_slides;

        if (typeof data.tutorial_slides === 'string') {
          try {
            parsedSlides = JSON.parse(data.tutorial_slides);
          } catch (e) {
            console.error("Failed to parse tutorial slides:", e);
            parsedSlides = [
              {
                title: "解説",
                content: data.tutorial_slides,
              },
            ];
          }
        }

        setSlides(Array.isArray(parsedSlides) ? parsedSlides : [parsedSlides]);
      } else {
        setSlides([
          {
            title: "この演習について",
            content: data.description || "解説スライドが準備中です。",
          },
        ]);
      }
    } catch (err) {
      console.error("Error loading exercise:", err);
    } finally {
      setIsLoading(false);
    }
  }

  function handlePrevSlide() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function handleNextSlide() {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function handleStartExercise() {
    router.push(`/lessons/${language}/${lessonId}/exercises/${exerciseId}`);
  }

  // スワイプハンドラー
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  }, [currentSlide, slides.length]);

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

  const currentSlideData = slides[currentSlide] || { title: "", content: "" };
  const isLastSlide = currentSlide === slides.length - 1;

  // スライドがない場合
  if (!isLoading && slides.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">スライドがありません</p>
          <Button onClick={handleStartExercise}>演習を始める</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-2 py-4 max-w-4xl">
        {/* ヘッダー */}
        <div className="mb-4 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              router.push(`/lessons/${language}/${lessonId}/exercises`)
            }
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="bg-white rounded-lg shadow-sm p-2 border flex-1">
            <h1 className="text-lg font-bold">{exercise?.title || "読み込み中..."}</h1>
          </div>
        </div>

        {/* スライドコンテンツ */}
        <div
          className="bg-white rounded-lg shadow-lg p-4 mb-4 border"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <h2 className="text-lg font-bold mb-3 text-gray-800">
            {currentSlideData.title || "タイトルなし"}
          </h2>

          {/* イラスト画像 */}
          {currentSlideData.image && (
            <div className="flex justify-center mb-4">
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title || "イラスト"}
                className="max-w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 object-contain rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-sm max-w-none">
            {typeof currentSlideData.content === 'string' ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // コードブロックのスタイリング
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  code: ({ node, inline, className, children, style, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    const lang = match ? match[1] : language;
                    const codeString = String(children).replace(/\n$/, '');

                    if (inline) {
                      return (
                        <code {...props}>
                          {children}
                        </code>
                      );
                    }

                    // ブロックコード
                    return (
                      <div className="rounded-lg overflow-hidden my-4">
                        <SyntaxHighlightedCode
                          code={codeString}
                          language={lang}
                        />
                      </div>
                    );
                  },
                  // 見出しのスタイリング（h1は非表示にしてタイトルの重複を避ける）
                  h1: () => null,
                  h2: ({ children }) => (
                    <h2 className="text-xl font-bold mt-5 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-bold mt-4 mb-2">{children}</h3>
                  ),
                  // リストのスタイリング（マーカー非表示）
                  ul: ({ children }) => (
                    <div className="my-4 space-y-2">{children}</div>
                  ),
                  ol: ({ children }) => (
                    <div className="my-4 space-y-2">{children}</div>
                  ),
                  li: ({ children }) => (
                    <div className="text-gray-700">{children}</div>
                  ),
                  // 段落のスタイリング
                  p: ({ children }) => (
                    <div className="my-0.5 lg:my-3 leading-relaxed text-gray-700">
                      {children}
                    </div>
                  ),
                  // preタグの無効化（コードブロック用）
                  pre: ({ children }) => <>{children}</>,
                }}
              >
                {currentSlideData.content}
              </ReactMarkdown>
            ) : (
              <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {JSON.stringify(currentSlideData.content, null, 2)}
              </div>
            )}

            {currentSlideData.code && (
              <div className="mt-6 rounded-lg overflow-hidden">
                <SyntaxHighlightedCode
                  code={currentSlideData.code}
                  language={language}
                />
              </div>
            )}
          </div>
        </div>

        {/* ナビゲーション */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            前へ
          </Button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {isLastSlide ? (
            <Button
              onClick={handleStartExercise}
              className="bg-green-600 hover:bg-green-700"
            >
              <Play className="w-4 h-4 mr-2" />
              演習を始める
            </Button>
          ) : (
            <Button onClick={handleNextSlide}>
              次へ
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        {/* スキップボタン */}
        <div className="mt-6 text-center">
          <Button variant="ghost" onClick={handleStartExercise} className="text-gray-500">
            解説をスキップして演習へ
          </Button>
        </div>
      </div>
    </div>
  );
}
