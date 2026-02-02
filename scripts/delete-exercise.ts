/**
 * 特定の演習をデータベースから削除するスクリプト
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: SUPABASE credentials not set');
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

async function deleteExercise(title: string) {
  console.log(`Searching for exercise: "${title}"...`);

  // 演習を検索
  const { data: exercises, error: searchError } = await supabase
    .from('exercises')
    .select('id, title, lesson_id')
    .eq('title', title);

  if (searchError) {
    console.error('Search error:', searchError.message);
    return;
  }

  if (!exercises || exercises.length === 0) {
    console.log('Exercise not found in database.');
    return;
  }

  console.log(`Found ${exercises.length} exercise(s):`);
  for (const ex of exercises) {
    console.log(`  - ID: ${ex.id}, Title: ${ex.title}`);
  }

  // user_progressを先に削除（外部キー制約）
  for (const ex of exercises) {
    const { error: progressError } = await supabase
      .from('user_progress')
      .delete()
      .eq('exercise_id', ex.id);

    if (progressError) {
      console.error(`Error deleting progress for ${ex.id}:`, progressError.message);
    } else {
      console.log(`  Deleted progress for exercise ${ex.id}`);
    }
  }

  // 演習を削除
  const { error: deleteError } = await supabase
    .from('exercises')
    .delete()
    .eq('title', title);

  if (deleteError) {
    console.error('Delete error:', deleteError.message);
    return;
  }

  console.log(`Successfully deleted exercise: "${title}"`);
}

// 引数から演習タイトルを取得、またはデフォルト
const exerciseTitle = process.argv[2] || 'with文（コンテキストマネージャ）';
deleteExercise(exerciseTitle);
