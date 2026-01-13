// データベース型定義

export type Difficulty = 'easy' | 'medium' | 'hard';
export type ProgressStatus = 'not_started' | 'in_progress' | 'completed' | 'hint_used';
export type FeedbackType = 'bug' | 'improvement' | 'other';

export interface User {
  id: string;
  email: string;
  display_name: string | null;
  avatar_url: string | null;
  total_xp: number;
  completed_exercises_count: number;
  completed_lessons_count: number;
  created_at: string;
  updated_at: string;
}

export interface XpHistory {
  id: string;
  user_id: string;
  exercise_id: string;
  xp_amount: number;
  reason: string;
  earned_date: string;
  created_at: string;
}

export interface UserWithRank extends User {
  rank?: number;
}

export interface Lesson {
  id: string;
  language: string;
  title: string;
  description: string | null;
  difficulty: Difficulty;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface TutorialSlide {
  title: string;
  content: string;
}

export interface Candidates {
  variables?: string[];
  functions?: string[];
  keywords?: string[];
  numbers?: string[];
  strings?: string[];
  operators?: string[];
}

export interface TestCase {
  input: string;
  expected_output: string;
}

export interface Hint {
  level: number;
  content: string;
}

export interface Exercise {
  id: string;
  lesson_id: string;
  title: string;
  description: string | null;
  difficulty: Difficulty;
  order_index: number;
  tutorial_slides: TutorialSlide[];
  correct_code: string;
  holey_code: string;
  starter_code: string | null;
  correct_lines: (string | string[])[];  // Each line can have multiple correct answers
  candidates: Candidates;
  test_cases: TestCase[];
  line_hints: (string | null)[];
  language_id: number;
  file_extension: string;
  test_input: string | null;
  expected_output: string | null;
  initial_display_mode?: 'holey' | 'editable';
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  exercise_id: string;
  status: ProgressStatus;
  current_code: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Feedback {
  id: string;
  user_id: string | null;
  exercise_id: string | null;
  type: FeedbackType;
  message: string;
  created_at: string;
}

// Supabase レスポンス型
export interface LessonWithProgress extends Lesson {
  exercises?: Exercise[];
  progress_count?: number;
  total_exercises?: number;
}

export interface ExerciseWithProgress extends Exercise {
  progress?: UserProgress;
  lesson?: Lesson;
}
