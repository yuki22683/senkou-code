"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

  useEffect(() => {
    loadExercise();
  }, [exerciseId]);

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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* ヘッダー */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() =>
              router.push(`/lessons/${language}/${lessonId}/exercises`)
            }
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            演習一覧に戻る
          </Button>

          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <h1 className="text-2xl font-bold mb-2">{exercise?.title || "読み込み中..."}</h1>
            <p className="text-gray-600">
              解説スライド {currentSlide + 1} / {slides.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* スライドコンテンツ */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 min-h-[400px] border">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            {currentSlideData.title || "タイトルなし"}
          </h2>

          <div className="prose prose-lg max-w-none">
            {typeof currentSlideData.content === 'string' ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // コードブロックのスタイリング
                  code: ({ node, inline, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline ? (
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm my-4">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className="bg-gray-100 text-red-600 px-1 py-0.5 rounded text-sm" {...props}>
                        {children}
                      </code>
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
                  // リストのスタイリング
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
                  ),
                  // 段落のスタイリング
                  p: ({ children }) => (
                    <p className="my-3 leading-relaxed text-gray-700">{children}</p>
                  ),
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
              <div className="mt-6">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm">
                  {currentSlideData.code}
                </pre>
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
