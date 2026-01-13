import { create } from 'zustand';
import { UserProgress } from '@/types/database';

interface ProgressState {
  progress: Record<string, UserProgress>;
  setProgress: (exerciseId: string, progress: UserProgress) => void;
  updateProgress: (exerciseId: string, updates: Partial<UserProgress>) => void;
  clearProgress: () => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  progress: {},

  setProgress: (exerciseId, progress) =>
    set((state) => ({
      progress: {
        ...state.progress,
        [exerciseId]: progress,
      },
    })),

  updateProgress: (exerciseId, updates) =>
    set((state) => ({
      progress: {
        ...state.progress,
        [exerciseId]: {
          ...state.progress[exerciseId],
          ...updates,
        },
      },
    })),

  clearProgress: () => set({ progress: {} }),
}));
