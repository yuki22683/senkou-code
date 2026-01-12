"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { calculateLevel, getLevelTitle, formatXp } from "@/lib/xp";
import { Trophy, Medal, Award, User as UserIcon, Zap, BookOpen, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RandomAffiliateBanner from "@/components/home/RandomAffiliateBanner";

interface RankedUser {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  total_xp: number;
  completed_exercises_count: number;
  completed_lessons_count: number;
  rank: number;
}

export default function RankingPage() {
  const [users, setUsers] = useState<RankedUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [currentUserRank, setCurrentUserRank] = useState<RankedUser | null>(null);

  useEffect(() => {
    fetchRanking();
  }, []);

  async function fetchRanking() {
    const supabase = createClient();

    // 現在のユーザーを取得
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      setCurrentUserId(user.id);
    }

    // ランキングを取得（上位100名、管理者アカウントは除外）
    const { data, error } = await supabase
      .from("users")
      .select("id, display_name, avatar_url, total_xp, completed_exercises_count, completed_lessons_count")
      .gt("total_xp", 0)
      .neq("email", "yuki22683@gmail.com")
      .order("total_xp", { ascending: false })
      .limit(100);

    if (error) {
      console.error("Error fetching ranking:", error);
      setIsLoading(false);
      return;
    }

    // ランクを付与
    const rankedUsers: RankedUser[] = (data || []).map((u, index) => ({
      ...u,
      total_xp: u.total_xp || 0,
      completed_exercises_count: u.completed_exercises_count || 0,
      completed_lessons_count: u.completed_lessons_count || 0,
      rank: index + 1,
    }));

    setUsers(rankedUsers);

    // 現在のユーザーがランキング内にいるか確認
    if (user) {
      const userInRanking = rankedUsers.find((u) => u.id === user.id);
      if (userInRanking) {
        setCurrentUserRank(userInRanking);
      } else {
        // ランキング外の場合、ユーザーの順位を計算
        const { data: userData } = await supabase
          .from("users")
          .select("id, display_name, avatar_url, total_xp, completed_exercises_count, completed_lessons_count")
          .eq("id", user.id)
          .single();

        if (userData && userData.total_xp > 0) {
          // 自分より上のユーザー数をカウント
          const { count } = await supabase
            .from("users")
            .select("id", { count: "exact", head: true })
            .gt("total_xp", userData.total_xp);

          setCurrentUserRank({
            ...userData,
            total_xp: userData.total_xp || 0,
            completed_exercises_count: userData.completed_exercises_count || 0,
            completed_lessons_count: userData.completed_lessons_count || 0,
            rank: (count || 0) + 1,
          });
        }
      }
    }

    setIsLoading(false);
  }

  function getRankIcon(rank: number) {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 text-center font-bold text-gray-500">{rank}</span>;
    }
  }

  function getRankBgClass(rank: number) {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-300";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300";
      case 3:
        return "bg-gradient-to-r from-amber-50 to-amber-100 border-amber-300";
      default:
        return "bg-white border-gray-200";
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">ランキングを読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8 text-yellow-500" />
            経験点ランキング
          </h1>
          <p className="text-gray-600">
            演習をクリアして経験点を獲得しよう！
          </p>
        </div>

        {/* 自分の順位（ランキング外の場合） */}
        {currentUserRank && currentUserRank.rank > 100 && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-blue-600">#{currentUserRank.rank}</span>
                <div>
                  <p className="font-medium text-gray-900">あなたの順位</p>
                  <p className="text-sm text-gray-600">
                    Lv.{calculateLevel(currentUserRank.total_xp)} • {formatXp(currentUserRank.total_xp)} XP
                  </p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {currentUserRank.completed_lessons_count}レッスン
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {currentUserRank.completed_exercises_count}演習
                    </span>
                  </div>
                </div>
              </div>
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        )}

        {/* ランキングリスト */}
        {users.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border">
            <UserIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">まだランキングに参加しているユーザーがいません</p>
            <Link href="/">
              <Button>演習を始める</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {users.map((user, index) => {
              const level = calculateLevel(user.total_xp);
              const isCurrentUser = user.id === currentUserId;
              // 10件ごとにアフィリエイトバナーを表示
              const showBannerAfter = (index + 1) % 10 === 0 && index < users.length - 1;

              return (
                <div key={user.id}>
                  <div
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                      getRankBgClass(user.rank)
                    } ${isCurrentUser ? "ring-2 ring-blue-500 ring-offset-2" : ""}`}
                  >
                    {/* 順位 */}
                    <div className="flex-shrink-0 w-8 flex items-center justify-center">
                      {getRankIcon(user.rank)}
                    </div>

                    {/* アバター */}
                    <div className="flex-shrink-0">
                      {user.avatar_url ? (
                        <img
                          src={user.avatar_url}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <UserIcon className="w-5 h-5 text-gray-500" />
                        </div>
                      )}
                    </div>

                    {/* ユーザー情報 */}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">
                        {user.display_name || "匿名ユーザー"}
                        {isCurrentUser && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                            あなた
                          </span>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">
                        Lv.{level} {getLevelTitle(level)}
                      </p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {user.completed_lessons_count}レッスン
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {user.completed_exercises_count}演習
                        </span>
                      </div>
                    </div>

                    {/* XP */}
                    <div className="flex-shrink-0 text-right">
                      <p className="font-bold text-gray-900 flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        {formatXp(user.total_xp)}
                      </p>
                      <p className="text-xs text-gray-500">XP</p>
                    </div>
                  </div>
                  {/* 10件ごとにアフィリエイトバナー */}
                  {showBannerAfter && (
                    <div className="my-4">
                      <RandomAffiliateBanner index={Math.floor(index / 10)} className="max-w-md mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* アフィリエイトバナー */}
        {users.length > 0 && (
          <div className="mt-6">
            <RandomAffiliateBanner index={10} className="max-w-md mx-auto" />
          </div>
        )}

        {/* フッター */}
        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline">ホームに戻る</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
