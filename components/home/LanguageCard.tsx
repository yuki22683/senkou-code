"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Language, LANGUAGE_COLORS } from "@/data/languages";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useNavigationLoading } from "@/components/layout/NavigationLoadingProvider";

interface LanguageCardProps {
  language: Language;
  progressCount?: number;
  totalExercises?: number;
}

export function LanguageCard({ language, progressCount = 0, totalExercises = 0 }: LanguageCardProps) {
  const { startNavigation, isNavigating } = useNavigationLoading();
  const colorClass = LANGUAGE_COLORS[language.id] || 'bg-gray-50 hover:bg-gray-100 border-gray-200';
  const progressPercent = totalExercises > 0 ? Math.round((progressCount / totalExercises) * 100) : 0;
  const isCompleted = totalExercises > 0 && progressCount === totalExercises;

  return (
    <Link
      href={`/lessons/${language.id}`}
      onClick={(e) => {
        if (isNavigating) {
          e.preventDefault();
          return;
        }
        startNavigation();
      }}
      className={isNavigating ? "pointer-events-none" : ""}
    >
      <Card className={`transition-all hover:shadow-lg hover:scale-105 cursor-pointer border-2 h-full ${colorClass}`}>
        <CardHeader className="p-3 sm:p-6">
          <div className="flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 mb-2 sm:mb-4 rounded-full bg-white shadow-md overflow-hidden p-2 sm:p-3">
            <div className="relative w-full h-full">
              <Image
                src={language.icon}
                alt={language.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <CardTitle className="text-sm sm:text-xl font-bold">{language.name}</CardTitle>
          <CardDescription className="text-gray-700 text-[10px] sm:text-sm line-clamp-2 sm:line-clamp-none">
            {language.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
          <div className="flex items-center justify-between text-[10px] sm:text-sm text-gray-600">
            <span>{language.extension}</span>
            {isCompleted && (
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">完了</span>
              </span>
            )}
          </div>
          {totalExercises > 0 && (
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                <span>進捗</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-primary h-1.5 sm:h-2 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
