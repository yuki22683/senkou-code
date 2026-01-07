/**
 * Pythonレッスンのみをデータベースに投入するスクリプト
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { pythonData } from '../data/lessons/python';
import { getLanguageById } from '../data/languages';

// .env.local を読み込む
config({ path: '.env.local' });

// 環境変数チェック
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
  process.exit(1);
}

// サービスロールキーを使用してRLSをバイパス
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

async function seedPythonLesson() {
  console.log('Seeding Python lesson...\n');

  const lessonData = pythonData;

  console.log(`Processing lesson: ${lessonData.lessonTitle} (${lessonData.language})`);

  // レッスンを挿入または更新
  const { data: existingLesson } = await supabase
    .from('lessons')
    .select('id')
    .eq('language', lessonData.language)
    .eq('order_index', lessonData.lessonOrder)
    .single();

  let lessonId: string;

  if (existingLesson) {
    // 既存のレッスンを更新
    const { data: updatedLesson, error: updateError } = await supabase
      .from('lessons')
      .update({
        title: lessonData.lessonTitle,
        description: lessonData.lessonDescription,
        difficulty: lessonData.lessonDifficulty,
      })
      .eq('id', existingLesson.id)
      .select('id')
      .single();

    if (updateError) {
      console.error(`  ❌ Error updating lesson:`, updateError.message);
      return;
    }

    lessonId = updatedLesson!.id;
    console.log(`  ✓ Updated existing lesson (ID: ${lessonId})`);
  } else {
    // 新しいレッスンを挿入
    const { data: newLesson, error: insertError } = await supabase
      .from('lessons')
      .insert({
        language: lessonData.language,
        title: lessonData.lessonTitle,
        description: lessonData.lessonDescription,
        difficulty: lessonData.lessonDifficulty,
        order_index: lessonData.lessonOrder,
      })
      .select('id')
      .single();

    if (insertError) {
      console.error(`  ❌ Error inserting lesson:`, insertError.message);
      return;
    }

    lessonId = newLesson!.id;
    console.log(`  ✓ Created new lesson (ID: ${lessonId})`);
  }

  // 言語情報を取得
  const languageInfo = getLanguageById(lessonData.language);
  if (!languageInfo) {
    console.error(`  ❌ Language not found: ${lessonData.language}`);
    return;
  }

  // 演習を挿入
  let exerciseCount = 0;
  for (const exercise of lessonData.exercises) {
    // 既存の演習をチェック
    const { data: existingExercise } = await supabase
      .from('exercises')
      .select('id')
      .eq('lesson_id', lessonId)
      .eq('order_index', exercise.orderIndex)
      .single();

    // テストケースから test_input と expected_output を取得
    const firstTestCase = exercise.testCases?.[0];
    const testInput = firstTestCase?.input || '';
    const expectedOutput = firstTestCase?.expected_output || '';

    const exerciseData = {
      lesson_id: lessonId,
      title: exercise.title,
      description: exercise.description,
      difficulty: exercise.difficulty,
      order_index: exercise.orderIndex,
      tutorial_slides: exercise.tutorialSlides,
      correct_code: exercise.correctCode,
      holey_code: exercise.holeyCode,
      starter_code: exercise.starterCode || (exercise.initialDisplayMode === 'editable' ? '' : exercise.holeyCode),
      correct_lines: exercise.correctLines,
      candidates: exercise.candidates,
      test_cases: exercise.testCases,
      hints: exercise.lineHints,
      language_id: languageInfo.judge0Id,
      file_extension: languageInfo.extension.replace('.', ''),
      test_input: testInput,
      expected_output: expectedOutput,
    };

    if (existingExercise) {
      // 既存の演習を更新
      const { error: updateError } = await supabase
        .from('exercises')
        .update(exerciseData)
        .eq('id', existingExercise.id);

      if (updateError) {
        console.error(`    ❌ Error updating exercise "${exercise.title}":`, updateError.message);
      } else {
        console.log(`    ✓ Updated exercise: ${exercise.title}`);
        exerciseCount++;
      }
    } else {
      // 新しい演習を挿入
      const { error: insertError } = await supabase
        .from('exercises')
        .insert(exerciseData);

      if (insertError) {
        console.error(`    ❌ Error inserting exercise "${exercise.title}":`, insertError.message);
      } else {
        console.log(`    ✓ Created exercise: ${exercise.title}`);
        exerciseCount++;
      }
    }
  }

  console.log(`\n✅ Python lesson seeding completed!`);
  console.log(`   ${exerciseCount} exercises processed`);
}

// スクリプト実行
seedPythonLesson().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
