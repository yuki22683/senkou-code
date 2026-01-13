"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import { calculateLevel, formatXp, calculateLevelProgress } from "@/lib/xp";
import { Zap } from "lucide-react";

export function UserXpDisplay() {
  const { user, loading } = useAuth();
  const [totalXp, setTotalXp] = useState<number | null>(null);
  const [isLoadingXp, setIsLoadingXp] = useState(false);

  useEffect(() => {
    if (!user) {
      setTotalXp(null);
      return;
    }

    async function fetchXp() {
      setIsLoadingXp(true);
      const supabase = createClient();

      const { data, error } = await supabase
        .from("users")
        .select("total_xp")
        .eq("id", user!.id)
        .single();

      if (!error && data) {
        setTotalXp(data.total_xp || 0);
      }
      setIsLoadingXp(false);
    }

    fetchXp();
  }, [user]);

  // 未ログインまたはローディング中は表示しない
  if (loading || !user || isLoadingXp || totalXp === null) {
    return null;
  }

  // XPが0の場合は表示しない
  if (totalXp === 0) {
    return null;
  }

  const level = calculateLevel(totalXp);
  const progress = calculateLevelProgress(totalXp);

  return (
    <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
      <div className="flex items-center gap-1">
        <span className="text-xs sm:text-sm font-bold text-yellow-700">
          Lv.{level}
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-1 text-yellow-600">
        <Zap className="w-3.5 h-3.5" />
        <span className="text-xs font-medium">{formatXp(totalXp)}</span>
      </div>
      {/* レベル進捗バー（PCのみ） */}
      <div className="hidden md:block w-12 h-1.5 bg-yellow-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-500 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
