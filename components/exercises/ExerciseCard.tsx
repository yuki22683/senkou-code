"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Exercise, UserProgress } from "@/types/database";
import { Code2, CheckCircle2, PlayCircle, Lock } from "lucide-react";

interface ExerciseCardProps {
  exercise: Exercise;
  language: string;
  lessonId: string;
  progress?: UserProgress | null;
  isLocked?: boolean;
  isNext?: boolean;
}

export function ExerciseCard({ exercise, language, lessonId, progress, isLocked = false, isNext = false }: ExerciseCardProps) {
  const isCompleted = progress?.status === 'completed';
  const isInProgress = progress?.status === 'in_progress';

  const difficultyColor = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  }[exercise.difficulty] || 'bg-gray-100 text-gray-700';

  // ロックされている場合
  if (isLocked) {
    return (
      <div className="cursor-not-allowed">
        <Card className="transition-all bg-gray-50 border-gray-200 opacity-70">
          <CardHeader className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Lock className="w-6 h-6 text-gray-400" />
                <CardTitle className="text-xl text-gray-400">{exercise.title}</CardTitle>
              </div>
              <span className={`px-3 py-1.5 rounded text-sm font-medium bg-gray-100 text-gray-400`}>
                {exercise.difficulty === 'easy' && '初級'}
                {exercise.difficulty === 'medium' && '中級'}
                {exercise.difficulty === 'hard' && '上級'}
              </span>
            </div>
            {exercise.description && (
              <CardDescription className="mt-3 text-gray-400">{exercise.description}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Lock className="w-4 h-4" />
              <span>前の演習をクリアすると解放されます</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleClick = () => {
    // 一時保存されたコードをクリア
    const savedCodeKey = `exercise_temp_code_${exercise.id}`;
    sessionStorage.removeItem(savedCodeKey);
  };

  return (
    <Link href={`/lessons/${language}/${lessonId}/exercises/${exercise.id}/tutorial`} onClick={handleClick}>
      <Card className={`transition-all hover:shadow-lg hover:scale-105 cursor-pointer ${
        isCompleted ? 'border-green-500 border-2' : isNext ? 'border-orange-400 border-2 shadow-md' : ''
      }`}>
        <CardHeader className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : isInProgress ? (
                <PlayCircle className="w-6 h-6 text-blue-600" />
              ) : (
                <Code2 className="w-6 h-6 text-gray-400" />
              )}
              <CardTitle className="text-xl">{exercise.title}</CardTitle>
            </div>
            <span className={`px-3 py-1.5 rounded text-sm font-medium ${difficultyColor}`}>
              {exercise.difficulty === 'easy' && '初級'}
              {exercise.difficulty === 'medium' && '中級'}
              {exercise.difficulty === 'hard' && '上級'}
            </span>
          </div>
          {exercise.description && (
            <CardDescription className="mt-3">{exercise.description}</CardDescription>
          )}
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <div className="flex items-center justify-between text-sm">
            {isCompleted ? (
              null
            ) : isInProgress ? (
              <div className="flex items-center space-x-2 text-blue-600">
                <PlayCircle className="w-5 h-5" />
                <span className="font-medium">進行中</span>
              </div>
            ) : null}
          </div>

          {progress?.completed_at && (
            <div className="mt-3 text-sm text-muted-foreground">
              完了日: {new Date(progress.completed_at).toLocaleDateString('ja-JP')}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
