// 祝賀メッセージライブラリ

export type CelebrationType = 'exercise' | 'lesson' | 'language';

export interface CelebrationMessage {
  japanese: string;
  english: string;
}

/**
 * 演習完了時のメッセージ
 */
const exerciseMessages: CelebrationMessage[] = [
  { japanese: 'よくできました！', english: 'Well done!' },
  { japanese: '素晴らしい！', english: 'Excellent!' },
  { japanese: '正解！', english: 'Correct!' },
  { japanese: 'がんばったね！', english: 'You worked hard!' },
  { japanese: 'その調子！', english: 'Keep it up!' },
  { japanese: 'いいね！', english: 'Nice!' },
  { japanese: 'すごい！', english: 'Amazing!' },
  { japanese: '完璧！', english: 'Perfect!' },
  { japanese: 'やったね！', english: 'You did it!' },
];

/**
 * レッスン完了時のメッセージ
 */
const lessonMessages: CelebrationMessage[] = [
  { japanese: 'レッスン完了！', english: 'Lesson complete!' },
  { japanese: '素晴らしい進歩です！', english: 'Wonderful progress!' },
  { japanese: 'よく頑張りました！', english: 'You worked really hard!' },
  { japanese: '一歩前進！', english: 'One step forward!' },
  { japanese: '大変よくできました！', english: 'Very well done!' },
];

/**
 * 言語コース完了時のメッセージ
 */
const languageMessages: CelebrationMessage[] = [
  { japanese: 'おめでとうございます！', english: 'Congratulations!' },
  { japanese: 'コース完了！', english: 'Course complete!' },
  { japanese: '偉業達成！', english: 'Great achievement!' },
  { japanese: 'あなたは最高です！', english: 'You are the best!' },
  { japanese: '言語マスター！', english: 'Language master!' },
];

const messagePools: Record<CelebrationType, CelebrationMessage[]> = {
  exercise: exerciseMessages,
  lesson: lessonMessages,
  language: languageMessages,
};

const lastMessageIndex: Record<CelebrationType, number | null> = {
  exercise: null,
  lesson: null,
  language: null,
};

/**
 * ランダムなメッセージを取得（連続で同じメッセージを避ける）
 */
export function getRandomMessage(type: CelebrationType): CelebrationMessage {
  const pool = messagePools[type];
  const lastIndex = lastMessageIndex[type];

  let randomIndex: number;
  if (pool.length <= 1) {
    randomIndex = 0;
  } else {
    do {
      randomIndex = Math.floor(Math.random() * pool.length);
    } while (randomIndex === lastIndex);
  }

  lastMessageIndex[type] = randomIndex;
  return pool[randomIndex];
}
