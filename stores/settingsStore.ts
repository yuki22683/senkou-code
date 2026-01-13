import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
  toggleAnimations: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      animationsEnabled: true,

      setAnimationsEnabled: (enabled) => set({ animationsEnabled: enabled }),
      toggleAnimations: () =>
        set((state) => ({ animationsEnabled: !state.animationsEnabled })),
    }),
    { name: 'user-settings' }
  )
);
