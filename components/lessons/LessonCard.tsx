"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lesson } from "@/types/database";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { LANGUAGE_COLORS } from "@/data/languages";

interface LessonCardProps {
  lesson: Lesson;
  language: string;
  progressCount?: number;
  totalExercises?: number;
}

export function LessonCard({ lesson, language, progressCount = 0, totalExercises = 0 }: LessonCardProps) {
  const progressPercent = totalExercises > 0 ? Math.round((progressCount / totalExercises) * 100) : 0;
  const colorClass = LANGUAGE_COLORS[language] || 'bg-gray-50 border-gray-200';

  const difficultyColor = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  }[lesson.difficulty] || 'bg-gray-100 text-gray-700';

  return (
    <Link href={`/lessons/${language}/${lesson.id}/exercises`}>
      <Card className={`transition-all hover:shadow-lg hover:scale-105 cursor-pointer border-2 h-[200px] flex flex-col ${colorClass}`}>
        <CardHeader className="flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg line-clamp-1">{lesson.title}</CardTitle>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${difficultyColor}`}>
              {lesson.difficulty === 'easy' && '初級'}
              {lesson.difficulty === 'medium' && '中級'}
              {lesson.difficulty === 'hard' && '上級'}
            </span>
          </div>
          {lesson.description && (
            <CardDescription className="mt-2 line-clamp-2">{lesson.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="space-y-2">
            {totalExercises > 0 && (
              <>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">進捗</span>
                  <span className="font-medium">
                    {progressCount} / {totalExercises} 完了
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                {progressCount === totalExercises && (
                  <div className="flex items-center space-x-1 text-green-600 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>完了！</span>
                  </div>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
