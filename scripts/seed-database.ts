/**
 * データベースシードスクリプト
 * sample-exercises.json のデータを Supabase に投入します
 *
 * 実行方法:
 * npm run seed:db
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { allLessons } from '../data/lessons';
import { getLanguageById } from '../data/languages';

// .env.local を読み込む
config({ path: '.env.local' });

// 環境変数チェック
if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Error: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
  console.error('');
  console.error('Get your Service Role Key from:');
  console.error('  Supabase Dashboard → Settings → API → service_role (secret)');
  console.error('');
  console.error('Current values:');
  console.error('  NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL || '(not set)');
  console.error('  SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '(set)' : '(not set)');
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

/**
 * 文字列内のエスケープシーケンス \\n を実際の改行に変換
 */
function unescapeNewlines(str: string): string {
  return str.replace(/\\n/g, '\n');
}

/**
 * tutorialSlidesのcontentフィールドのエスケープを解除
 */
function processTutorialSlides(slides: any[]): any[] {
  if (!Array.isArray(slides)) return slides;
  return slides.map(slide => ({
    ...slide,
    content: typeof slide.content === 'string' ? unescapeNewlines(slide.content) : slide.content
  }));
}

/**
 * 文字列配列の各要素のエスケープを解除
 */
function processStringArray(arr: string[]): string[] {
  if (!Array.isArray(arr)) return arr;
  return arr.map(s => typeof s === 'string' ? unescapeNewlines(s) : s);
}

async function seedDatabase() {
  console.log('Starting database seeding...\n');

  let totalLessons = 0;
  let totalExercises = 0;

  for (const lessonData of allLessons) {
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
        continue;
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
        continue;
      }

      lessonId = newLesson!.id;
      console.log(`  ✓ Created new lesson (ID: ${lessonId})`);
      totalLessons++;
    }

    // 言語情報を取得
    const languageInfo = getLanguageById(lessonData.language);
    if (!languageInfo) {
      console.error(`  ❌ Language not found: ${lessonData.language}`);
      continue;
    }

    // 演習を挿入
    for (const [index, exercise] of lessonData.exercises.entries()) {
      const orderIndex = exercise.orderIndex ?? (index + 1);

      // 既存の演習をチェック
      const { data: existingExercise } = await supabase
        .from('exercises')
        .select('id')
        .eq('lesson_id', lessonId)
        .eq('order_index', orderIndex)
        .single();

      // テストケースから test_input と expected_output を取得
      const firstTestCase = exercise.testCases?.[0];
      const testInput = firstTestCase?.input || '';
      const expectedOutput = firstTestCase?.expected_output || '';

      const exerciseData = {
        lesson_id: lessonId,
        title: exercise.title,
        description: exercise.description || null,
        difficulty: exercise.difficulty,
        order_index: orderIndex,
        tutorial_slides: processTutorialSlides(exercise.tutorialSlides),
        correct_code: unescapeNewlines(exercise.correctCode || ''),
        holey_code: unescapeNewlines(exercise.holeyCode || ''),
        starter_code: unescapeNewlines((exercise as any).starterCode || (exercise.initialDisplayMode === 'editable' ? '' : exercise.holeyCode) || ''),
        // initial_display_mode: exercise.initialDisplayMode || 'holey',
        correct_lines: processStringArray(exercise.correctLines || []),
        candidates: exercise.candidates,
        test_cases: exercise.testCases,
        hints: exercise.lineHints,
        language_id: languageInfo.judge0Id,
        file_extension: languageInfo.extension.replace('.', ''),
        test_input: unescapeNewlines(testInput),
        expected_output: unescapeNewlines(expectedOutput),
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
          totalExercises++;
        }
      }
    }

    console.log('');
  }

  console.log('✅ Database seeding completed!');
  console.log(`   ${totalLessons} lessons created`);
  console.log(`   ${totalExercises} exercises created`);

  // 重複演習チェック
  console.log('\nChecking for duplicate exercises...');
  const { data: allExercises, error: checkError } = await supabase
    .from('exercises')
    .select('title, lesson_id');

  if (checkError) {
    console.error('❌ Error checking duplicates:', checkError.message);
  } else {
    const counts = new Map<string, number>();
    for (const ex of allExercises) {
      const key = `${ex.lesson_id}:${ex.title}`;
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    const duplicates = [...counts.entries()].filter(([_, count]) => count > 1);

    if (duplicates.length === 0) {
      console.log('✅ No duplicate exercises found');
    } else {
      console.log('❌ Duplicate exercises found:');
      for (const [key, count] of duplicates) {
        console.log(`   ${key} (${count} duplicates)`);
      }
      console.log('\n⚠️  Run: npx ts-node scripts/delete-exercise.ts "タイトル"');
      console.log('   Then re-run: npm run seed:db');
    }
  }
}

// スクリプト実行
seedDatabase().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
