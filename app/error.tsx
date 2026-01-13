"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center border">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          エラーが発生しました
        </h1>
        <p className="text-gray-600 mb-6">
          ページの読み込み中にエラーが発生しました。
          <br />
          もう一度お試しください。
        </p>
        <div className="space-y-3">
          <Button onClick={reset} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            もう一度試す
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/")}
            className="w-full"
          >
            <Home className="w-4 h-4 mr-2" />
            ホームに戻る
          </Button>
        </div>
      </div>
    </div>
  );
}
