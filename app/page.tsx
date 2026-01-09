"use client";

import { LANGUAGES } from "@/data/languages";
import { LanguageCard } from "@/components/home/LanguageCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Fragment, useMemo, Suspense, useCallback } from "react";
import RandomAffiliateBanner from "@/components/home/RandomAffiliateBanner";
import { AmazonAdCard, AmazonAdType } from "@/components/home/AmazonAdCard";
import { createClient } from "@/lib/supabase/client";

// 言語別の進捗情報
interface LanguageProgress {
  totalExercises: number;
  completedCount: number;
}

type GridItem =
  | { type: 'lang'; lang: typeof LANGUAGES[number] }
  | { type: 'ad'; adType: AmazonAdType };

function HomePageContent() {
  const searchParams = useSearchParams();
  const [showMessage, setShowMessage] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [languageProgress, setLanguageProgress] = useState<Record<string, LanguageProgress>>({});
  const message = searchParams.get("message");

  // 言語別の進捗を取得
  const fetchLanguageProgress = useCallback(async () => {
    const supabase = createClient();

    // ユーザー認証状態を確認
    const { data: { user } } = await supabase.auth.getUser();

    // 各言語の総演習数を取得
    const progressMap: Record<string, LanguageProgress> = {};

    for (const lang of LANGUAGES) {
      // この言語のレッスンを取得
      const { data: lessons } = await supabase
        .from("lessons")
        .select("id")
        .eq("language", lang.id);

      if (!lessons || lessons.length === 0) {
        progressMap[lang.id] = { totalExercises: 0, completedCount: 0 };
        continue;
      }

      const lessonIds = lessons.map((l) => l.id);

      // この言語の全演習を取得
      const { data: exercises } = await supabase
        .from("exercises")
        .select("id")
        .in("lesson_id", lessonIds);

      const totalExercises = exercises?.length || 0;

      // ログインユーザーの場合、完了した演習数を取得
      let completedCount = 0;
      if (user && exercises && exercises.length > 0) {
        const exerciseIds = exercises.map((e) => e.id);
        const { data: progress } = await supabase
          .from("user_progress")
          .select("exercise_id")
          .eq("user_id", user.id)
          .eq("status", "completed")
          .in("exercise_id", exerciseIds);

        completedCount = progress?.length || 0;
      }

      progressMap[lang.id] = { totalExercises, completedCount };
    }

    setLanguageProgress(progressMap);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    fetchLanguageProgress();
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [message, fetchLanguageProgress]);

  // Mix Amazon ads into the language grid
  const items = useMemo(() => {
    // マウント前は空か固定の配列を返す
    if (!isMounted) return LANGUAGES.map(lang => ({ type: 'lang' as const, lang }));
    
    const adTypes: AmazonAdType[] = ['book', 'furusato', 'ranking', 'timesale'];
    
    // Shuffle ad types
    const shuffledAds = [...adTypes].sort(() => Math.random() - 0.5);
    
    const totalLanguages = LANGUAGES.length;
    const totalAds = shuffledAds.length;
    const totalItems = totalLanguages + totalAds;
    
    const result: GridItem[] = [];
    const adPositions = new Set<number>();
    let attempts = 0;
    while (adPositions.size < totalAds && attempts < 100) {
      const pos = Math.floor(Math.random() * totalItems);
      let tooClose = false;
      for (const existingPos of Array.from(adPositions)) {
        if (Math.abs(Math.floor(existingPos / 3) - Math.floor(pos / 3)) < 1) tooClose = true;
      }
      if (!tooClose) adPositions.add(pos);
      attempts++;
    }

    let langIndex = 0;
    let adIndex = 0;
    for (let i = 0; i < totalItems; i++) {
      if (adPositions.has(i) && adIndex < totalAds) {
        result.push({ type: 'ad', adType: shuffledAds[adIndex++] });
      } else if (langIndex < totalLanguages) {
        result.push({ type: 'lang', lang: LANGUAGES[langIndex++] });
      } else if (adIndex < totalAds) {
        result.push({ type: 'ad', adType: shuffledAds[adIndex++] });
      }
    }
    return result;
  }, [isMounted]);

  // Group items into groups of 6 to handle both 2-col and 3-col row breaks
  const rowGroups = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < items.length; i += 6) {
      grouped.push(items.slice(i, i + 6));
    }
    return grouped;
  }, [items]);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
      <div className="max-w-5xl mx-auto">
        {showMessage && message && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-800">{message}</p>
          </div>
        )}

        <div className="text-center mb-8 sm:mb-12">
          <p className="text-lg sm:text-2xl text-muted-foreground mb-4 font-medium">
            完全無料のプログラミング演習
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            プログラミングの第一歩を、ここから。
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {rowGroups.map((group, groupIndex) => (
            <Fragment key={`group-${groupIndex}`}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
                {group.map((item, idx) => (
                  item.type === 'lang' ? (
                    <LanguageCard
                      key={item.lang.id}
                      language={item.lang}
                      progressCount={languageProgress[item.lang.id]?.completedCount}
                      totalExercises={languageProgress[item.lang.id]?.totalExercises}
                    />
                  ) : (
                    <AmazonAdCard key={`ad-${groupIndex}-${idx}`} type={item.adType} />
                  )
                ))}
              </div>

              {groupIndex < rowGroups.length - 1 && (
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 overflow-hidden">
                  <RandomAffiliateBanner
                    index={groupIndex * 2}
                    className="flex-1 min-w-[288px] max-w-[345px] md:min-w-[432px] md:max-w-[518px]"
                  />
                  <RandomAffiliateBanner
                    index={groupIndex * 2 + 1}
                    className="flex-1 min-w-[288px] max-w-[345px] md:min-w-[432px] md:max-w-[518px] hidden md:flex"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
}