"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export default function ExerciseError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams();
  const language = params?.language as string;
  const lessonId = params?.lessonId as string;

  useEffect(() => {
    console.error("Exercise error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center border">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          演習の読み込みに失敗しました
        </h1>
        <p className="text-gray-600 mb-6">
          演習データの取得中にエラーが発生しました。
          <br />
          もう一度お試しください。
        </p>
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            再読み込み
          </Button>
          {language && lessonId && (
            <Button
              variant="outline"
              onClick={() =>
                (window.location.href = `/lessons/${language}/${lessonId}/exercises`)
              }
              className="w-full"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              演習一覧に戻る
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
