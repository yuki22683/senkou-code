"use client";

import { LANGUAGES } from "@/data/languages";
import { LanguageCard } from "@/components/home/LanguageCard";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Fragment, useMemo } from "react";
import HomeWrapper from "@/components/layout/HomeWrapper";
import RandomAffiliateBanner from "@/components/home/RandomAffiliateBanner";
import { AmazonAdCard, AmazonAdType } from "@/components/home/AmazonAdCard";

export default function HomePage() {
  const searchParams = useSearchParams();
  const [showMessage, setShowMessage] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const message = searchParams.get("message");

  useEffect(() => {
    setIsMounted(true);
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => setShowMessage(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Mix Amazon ads into the language grid
  const items = useMemo(() => {
    // マウント前は空か固定の配列を返す
    if (!isMounted) return LANGUAGES.map(lang => ({ type: 'lang', lang }));
    
    const adTypes: AmazonAdType[] = ['book', 'furusato', 'ranking', 'timesale'];
    // ... (以下同じロジック)
    // Shuffle ad types
    const shuffledAds = [...adTypes].sort(() => Math.random() - 0.5);
    
    const totalLanguages = LANGUAGES.length;
    const totalAds = shuffledAds.length;
    const totalItems = totalLanguages + totalAds;
    const desktopColumns = 3;
    const mobileColumns = 2;
    // We group by a multiple of both 2 and 3 to ensure ads line up with row ends on both mobile and desktop
    const itemsPerGroup = 6; 
    const totalGroups = Math.ceil(totalItems / itemsPerGroup);
    
    const mixedItems: any[] = [];
    let langIndex = 0;
    let adIndex = 0;
    
    // Distribute ads across groups
    // Since we have 4 ads and usually ~3-4 groups, we'll put at least one in each group
    for (let i = 0; i < totalItems; i++) {
      // Logic to sprinkle ads: every 5th item approx, or random within group
      // But user wants "at most one ad per row". 
      // In 6-item group (2 rows desktop, 3 rows mobile):
      // We'll just keep the original logic but ensure it works with the new structure
    }

    // Re-implementing simplified sprinkle logic for the mixed grid
    const result: any[] = [];
    const adPositions = new Set<number>();
    while (adPositions.size < totalAds) {
      const pos = Math.floor(Math.random() * totalItems);
      // Ensure no more than one ad per 3-item block (approx row)
      let tooClose = false;
      for (const existingPos of Array.from(adPositions)) {
        if (Math.abs(Math.floor(existingPos / 3) - Math.floor(pos / 3)) < 1) tooClose = true;
      }
      if (!tooClose) adPositions.add(pos);
    }

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
  }, [items, isMounted]);

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
      <div className="max-w-5xl mx-auto">
        <HomeWrapper uniqueKey="home">
          {showMessage && message && (
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-blue-800">{message}</p>
            </div>
          )}

          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              閃光コード
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground mb-2 sm:mb-4">
              完全無料のプログラミング演習プラットフォーム
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              学びたい言語を選んで、今すぐ学習を始めましょう！
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {rowGroups.map((group, groupIndex) => (
              <Fragment key={`group-${groupIndex}`}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6">
                  {group.map((item, idx) => (
                    item.type === 'lang' ? (
                      <LanguageCard key={item.lang.id} language={item.lang} />
                    ) : (
                      <AmazonAdCard key={`ad-${groupIndex}-${idx}`} type={item.adType} />
                    )
                  ))}
                </div>
                
                {/* Affiliate Banners Row (except after the last group) */}
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
        </HomeWrapper>
      </div>
    </div>
  );
}
