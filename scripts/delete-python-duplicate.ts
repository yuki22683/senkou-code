import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function deletePythonDuplicate() {
  // Pythonレッスンを取得
  const { data: pythonLessons, error: lessonError } = await supabase
    .from('lessons')
    .select('id, title, order_index')
    .eq('language', 'python')
    .order('order_index');

  if (lessonError) {
    console.error('Error fetching lessons:', lessonError);
    return;
  }

  console.log('Python lessons:');
  if (pythonLessons) {
    for (const lesson of pythonLessons) {
      console.log(`  Lesson ID: ${lesson.id}, Order: ${lesson.order_index}, Title: ${lesson.title}`);
    }
  }

  // Python I（order_index = 1）のレッスンを取得
  const pythonLesson1 = pythonLessons?.find(l => l.order_index === 1);
  if (!pythonLesson1) {
    console.log('Python I lesson not found');
    return;
  }

  console.log(`\nChecking exercises for Python I (${pythonLesson1.id}):`);

  // そのレッスンの「自分だけの関数」演習を確認
  const { data: exercises, error } = await supabase
    .from('exercises')
    .select('id, title, description, order_index')
    .eq('lesson_id', pythonLesson1.id)
    .like('title', '%自分だけの関数%');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('\nFound exercises in Python I:');
  if (exercises) {
    for (const ex of exercises) {
      console.log(`  ID: ${ex.id}, Order: ${ex.order_index}, Title: ${ex.title}, Desc: ${ex.description}`);
    }
  }

  // 重複がある場合、order_index 13 以外を削除
  if (exercises && exercises.length > 1) {
    console.log('\nDeleting duplicates...');
    const toDelete = exercises.filter(ex => ex.order_index !== 13);

    for (const ex of toDelete) {
      console.log(`  Deleting ID: ${ex.id}, Order: ${ex.order_index}`);
      const { error: delError } = await supabase
        .from('exercises')
        .delete()
        .eq('id', ex.id);

      if (delError) {
        console.error(`  Error: ${delError.message}`);
      } else {
        console.log(`  Deleted successfully`);
      }
    }

    // order_index 13 が複数ある場合
    const remaining = exercises.filter(ex => ex.order_index === 13);
    if (remaining.length > 1) {
      console.log('\nMultiple exercises with order_index 13, keeping one...');
      const sorted = remaining.sort((a, b) => a.id.localeCompare(b.id));
      const extraToDelete = sorted.slice(0, -1);
      for (const ex of extraToDelete) {
        console.log(`  Deleting ID: ${ex.id}`);
        const { error: delError } = await supabase
          .from('exercises')
          .delete()
          .eq('id', ex.id);

        if (delError) {
          console.error(`  Error: ${delError.message}`);
        } else {
          console.log(`  Deleted successfully`);
        }
      }
    }
  } else {
    console.log('\nNo duplicates found in Python I.');
  }
}

deletePythonDuplicate();
