/**
 * 経験点（XP）システムのユーティリティ関数
 */

import type { Difficulty } from "@/types/database";

// 難易度別のXP付与値
export const XP_VALUES: Record<Difficulty, number> = {
  easy: 10,
  medium: 20,
  hard: 30,
};

// レベルごとの必要累計XP（線形増加）
// レベルN到達に必要な累計XP = 90 * (N-1)
// レベル1: 0, レベル10: 810, レベル100: 8910
// 1430 XP（初級全クリア）→ レベル16（中級者）
// 5160 XP（中級全クリア）→ レベル58（上級者）
// 9120 XP付近 → レベル100（マスター）
export const LEVEL_THRESHOLDS: number[] = [];
for (let level = 1; level <= 100; level++) {
  LEVEL_THRESHOLDS.push(90 * (level - 1));
}

/**
 * 累計XPからレベルを計算
 */
export function calculateLevel(totalXp: number): number {
  for (let level = LEVEL_THRESHOLDS.length; level >= 1; level--) {
    if (totalXp >= LEVEL_THRESHOLDS[level - 1]) {
      return level;
    }
  }
  return 1;
}

/**
 * 現在のレベルでの進捗率を計算（0〜100%）
 */
export function calculateLevelProgress(totalXp: number): number {
  const currentLevel = calculateLevel(totalXp);
  const currentThreshold = LEVEL_THRESHOLDS[currentLevel - 1];
  const nextThreshold = LEVEL_THRESHOLDS[currentLevel] || currentThreshold + 1000;

  const xpInLevel = totalXp - currentThreshold;
  const xpNeeded = nextThreshold - currentThreshold;

  return Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));
}

/**
 * 次のレベルまでに必要なXP
 */
export function xpToNextLevel(totalXp: number): number {
  const currentLevel = calculateLevel(totalXp);
  const nextThreshold = LEVEL_THRESHOLDS[currentLevel] || totalXp + 1000;
  return nextThreshold - totalXp;
}

/**
 * 難易度からXP値を取得
 */
export function getXpForDifficulty(difficulty: Difficulty): number {
  return XP_VALUES[difficulty] || XP_VALUES.easy;
}

/**
 * レベルに応じた称号を取得
 * - 初級演習全クリア（1430 XP）→ レベル16 → 中級者
 * - 中級演習全クリア（5160 XP）→ レベル58 → 上級者
 * - 上級演習全クリア（9120 XP）→ レベル100 → マスター
 */
export function getLevelTitle(level: number): string {
  if (level >= 100) return "マスター";
  if (level >= 58) return "上級者";
  if (level >= 16) return "中級者";
  return "初心者";
}

/**
 * XPをフォーマットして表示用文字列に変換
 */
export function formatXp(xp: number): string {
  if (xp >= 10000) {
    return `${(xp / 1000).toFixed(1)}k`;
  }
  return xp.toLocaleString();
}
