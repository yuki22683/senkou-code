"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { UserProgress } from '@/types/database';
import { useAuthStore } from '@/stores/authStore';
import { useProgressStore } from '@/stores/progressStore';

export function useProgress(exerciseId: string) {
  const { user } = useAuthStore();
  const { progress, setProgress } = useProgressStore();
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    // 進捗データを取得
    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('exercise_id', exerciseId)
        .single();

      if (error) {
        // PGRST116 is "no rows returned" which is expected for new exercises
        if (error.code !== 'PGRST116') {
          console.error('Error fetching progress:', error);
        }
      } else if (data) {
        setProgress(exerciseId, data);
      }

      setLoading(false);
    };

    fetchProgress();
  }, [user, exerciseId, supabase, setProgress]);

  return {
    progress: progress[exerciseId],
    loading,
  };
}

export async function saveProgress(
  exerciseId: string,
  updates: Partial<UserProgress>
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('User not authenticated');
  }

  // 既存の進捗を確認
  const { data: existingProgress } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('exercise_id', exerciseId)
    .single();

  if (existingProgress) {
    // 更新
    const { data, error } = await supabase
      .from('user_progress')
      .update(updates)
      .eq('id', existingProgress.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } else {
    // 新規作成
    const { data, error } = await supabase
      .from('user_progress')
      .insert({
        user_id: user.id,
        exercise_id: exerciseId,
        ...updates,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
}

export async function markAsCompleted(exerciseId: string) {
  return saveProgress(exerciseId, {
    status: 'completed',
    completed_at: new Date().toISOString(),
  });
}

export async function updateCurrentCode(exerciseId: string, code: string) {
  return saveProgress(exerciseId, {
    status: 'in_progress',
    current_code: code,
  });
}
