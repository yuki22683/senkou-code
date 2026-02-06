"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SyntaxHighlightedCode } from "@/components/exercise/SyntaxHighlightedCode";
import Image from "next/image";
import type { Exercise, TutorialSlide } from "@/types/database";
import { useNavigationLoading } from "@/components/layout/NavigationLoadingProvider";

export default function TutorialPage() {
  const params = useParams();
  const language = params.language as string;
  const lessonId = params.lessonId as string;
  const exerciseId = params.exerciseId as string;

  const { navigateTo, isNavigating } = useNavigationLoading();
  const supabase = createClient();

  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [slides, setSlides] = useState<TutorialSlide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // スライド切り替え時にスクロール位置をトップにリセット
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlide]);

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

        // tutorial_slides を処理
        if (data.tutorial_slides) {
          // Supabaseは自動的にJSONBをパースするので、
          // すでに配列の場合とJSON文字列の場合の両方に対応
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let parsedSlides: any = data.tutorial_slides;

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
    };

    loadExercise();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseId]);

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
    navigateTo(`/lessons/${language}/${lessonId}/exercises/${exerciseId}`);
  }

  function handleBack() {
    navigateTo(`/lessons/${language}/${lessonId}/exercises`);
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const currentSlideData: any = slides[currentSlide] || { title: "", content: "" };
  const isLastSlide = currentSlide === slides.length - 1;

  // スライドがない場合
  if (!isLoading && slides.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-600 mb-4">スライドがありません</p>
          <Button onClick={handleStartExercise} disabled={isNavigating}>演習を始める</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-6 sm:py-8 lg:py-12 lg:flex lg:justify-center">
      <div className="w-full lg:w-[800px] lg:max-w-[90vw]">
        {/* ヘッダー */}
        <div className="mb-4 lg:mb-8 flex items-center gap-2 lg:gap-4">
          <Button
            variant="outline"
            size="icon"
            className="lg:h-12 lg:w-12"
            onClick={handleBack}
            disabled={isNavigating}
          >
            <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </Button>

          <div className="bg-white rounded-lg shadow-sm p-2 lg:p-4 border flex-1">
            <h1 className="text-lg lg:text-2xl font-bold">{exercise?.title || "読み込み中..."}</h1>
          </div>
        </div>

        {/* スライドコンテンツ */}
        <div
          className="bg-white rounded-lg shadow-lg p-4 lg:p-8 mb-4 lg:mb-8 border"
        >
          <h2 className="text-lg lg:text-2xl font-bold mb-3 lg:mb-6 text-gray-800">
            {currentSlideData.title || "タイトルなし"}
          </h2>

          {/* イラスト画像 */}
          {currentSlideData.image && (
            <div className="flex justify-center mb-4 lg:mb-8 relative h-40 lg:h-80">
              <Image
                src={currentSlideData.image}
                alt={currentSlideData.title || "イラスト"}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-sm lg:prose-lg max-w-none">
            {typeof currentSlideData.content === 'string' ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // コードブロックのスタイリング
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  code: ({ inline, className, children, ...props }: any) => {
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
                      <div className="rounded-lg overflow-hidden my-4 lg:my-8">
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
                    <h2 className="text-xl lg:text-2xl font-bold mt-5 lg:mt-10 mb-3 lg:mb-6">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg lg:text-xl font-bold mt-4 lg:mt-8 mb-2 lg:mb-4">{children}</h3>
                  ),
                  // リストのスタイリング（マーカー非表示）
                  ul: ({ children }) => (
                    <div className="my-4 lg:my-8 space-y-2 lg:space-y-4">{children}</div>
                  ),
                  ol: ({ children }) => (
                    <div className="my-4 lg:my-8 space-y-2 lg:space-y-4">{children}</div>
                  ),
                  li: ({ children }) => (
                    <div className="text-gray-700 lg:text-lg">{children}</div>
                  ),
                  // 段落のスタイリング
                  p: ({ children }) => (
                    <div className="my-0.5 lg:my-4 leading-relaxed lg:leading-loose text-gray-700 lg:text-lg">
                      {children}
                    </div>
                  ),
                  // preタグの無効化（コードブロック用）
                  pre: ({ children }) => <>{children}</>,
                }}
              >
                {currentSlideData.content.replace(/\\n/g, '\n').replace(/\\\\n/g, '\n')}
              </ReactMarkdown>
            ) : (
              <div className="text-gray-700 lg:text-lg whitespace-pre-wrap leading-relaxed lg:leading-loose">
                {JSON.stringify(currentSlideData.content, null, 2)}
              </div>
            )}

            {currentSlideData.code && (
              <div className="mt-6 lg:mt-12 rounded-lg overflow-hidden">
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
            disabled={currentSlide === 0 || isNavigating}
            className="lg:h-12 lg:px-6 lg:text-lg"
          >
            <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
            前へ
          </Button>

          <div className="flex gap-2 lg:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                disabled={isNavigating}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-blue-600 w-8 lg:w-12"
                    : "bg-gray-300 hover:bg-gray-400"
                } ${isNavigating ? "opacity-50 cursor-not-allowed" : ""}`}
              />
            ))}
          </div>

          {isLastSlide ? (
            <Button
              onClick={handleStartExercise}
              disabled={isNavigating}
              className="bg-green-600 hover:bg-green-700 lg:h-12 lg:px-6 lg:text-lg"
            >
              <Play className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              演習を始める
            </Button>
          ) : (
            <Button onClick={handleNextSlide} disabled={isNavigating} className="lg:h-12 lg:px-6 lg:text-lg">
              次へ
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </Button>
          )}
        </div>

        {/* スキップボタン */}
        <div className="mt-6 lg:mt-10 text-center">
          <Button variant="ghost" onClick={handleStartExercise} disabled={isNavigating} className="text-gray-500 lg:text-lg">
            解説をスキップして演習へ
          </Button>
        </div>
      </div>
    </div>
  );
}
