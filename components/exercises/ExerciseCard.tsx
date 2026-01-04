"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Exercise, UserProgress } from "@/types/database";
import { Code2, CheckCircle2, PlayCircle } from "lucide-react";

interface ExerciseCardProps {
  exercise: Exercise;
  language: string;
  lessonId: string;
  progress?: UserProgress | null;
}

export function ExerciseCard({ exercise, language, lessonId, progress }: ExerciseCardProps) {
  const isCompleted = progress?.status === 'completed';
  const isInProgress = progress?.status === 'in_progress';

  const difficultyColor = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  }[exercise.difficulty] || 'bg-gray-100 text-gray-700';

  return (
    <Link href={`/lessons/${language}/${lessonId}/exercises/${exercise.id}/tutorial`}>
      <Card className={`transition-all hover:shadow-lg hover:scale-105 cursor-pointer ${
        isCompleted ? 'border-green-500 border-2' : ''
      }`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              {isCompleted ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : isInProgress ? (
                <PlayCircle className="w-5 h-5 text-blue-600" />
              ) : (
                <Code2 className="w-5 h-5 text-gray-400" />
              )}
              <CardTitle className="text-lg">{exercise.title}</CardTitle>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColor}`}>
              {exercise.difficulty === 'easy' && '初級'}
              {exercise.difficulty === 'medium' && '中級'}
              {exercise.difficulty === 'hard' && '上級'}
            </span>
          </div>
          {exercise.description && (
            <CardDescription className="mt-2">{exercise.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between text-sm">
            {isCompleted ? (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">完了</span>
              </div>
            ) : isInProgress ? (
              <div className="flex items-center space-x-2 text-blue-600">
                <PlayCircle className="w-4 h-4" />
                <span className="font-medium">進行中</span>
              </div>
            ) : (
              <div className="text-muted-foreground">未開始</div>
            )}

            {exercise.hints && exercise.hints.length > 0 && (
              <div className="text-xs text-muted-foreground">
                ヒント {exercise.hints.length}個
              </div>
            )}
          </div>

          {progress?.completed_at && (
            <div className="mt-2 text-xs text-muted-foreground">
              完了日: {new Date(progress.completed_at).toLocaleDateString('ja-JP')}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
