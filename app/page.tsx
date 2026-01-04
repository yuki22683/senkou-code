"use client";

import { LANGUAGES } from "@/data/languages";
import { LanguageCard } from "@/components/home/LanguageCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const searchParams = useSearchParams();
  const [showMessage, setShowMessage] = useState(false);
  const message = searchParams.get("message");

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {showMessage && message && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-800">{message}</p>
          </div>
        )}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            閃光コード
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            穴埋め形式で楽しく学ぶプログラミング演習プラットフォーム
          </p>
          <p className="text-sm text-gray-600">
            学びたい言語を選んで、今すぐ学習を始めましょう！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANGUAGES.map((language) => (
            <LanguageCard key={language.id} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
