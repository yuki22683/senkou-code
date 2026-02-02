import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function deleteDuplicate() {
  // まず重複を確認
  const { data: exercises, error } = await supabase
    .from('exercises')
    .select('id, title, description, order_index, lesson_id')
    .like('title', '%自分だけの関数%');

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Found exercises:');
  if (exercises) {
    for (const ex of exercises) {
      const desc = ex.description ? ex.description.substring(0, 50) : '';
      console.log(`  ID: ${ex.id}, Title: ${ex.title}, Order: ${ex.order_index}, Desc: ${desc}`);
    }
  }

  // 重複がある場合、古い方を削除
  if (exercises && exercises.length > 1) {
    // order_index が 13 でないものを削除（正しいのは 13）
    const toDelete = exercises.filter(ex => ex.order_index !== 13);

    if (toDelete.length > 0) {
      console.log('\nDeleting duplicates with wrong order_index:');
      for (const ex of toDelete) {
        console.log(`  Deleting ID: ${ex.id}, Order: ${ex.order_index}`);
        const { error: delError } = await supabase
          .from('exercises')
          .delete()
          .eq('id', ex.id);

        if (delError) {
          console.error(`  Error deleting: ${delError.message}`);
        } else {
          console.log(`  Deleted successfully`);
        }
      }
    } else {
      console.log('\nAll have order_index 13. Deleting all but one (keeping newest)...');
      // order_index が同じ場合は、1つだけ残して削除
      const sorted = exercises.sort((a, b) => a.id.localeCompare(b.id));
      const toDeleteById = sorted.slice(0, -1); // 最後の1つ以外を削除
      for (const ex of toDeleteById) {
        console.log(`  Deleting ID: ${ex.id}`);
        const { error: delError } = await supabase
          .from('exercises')
          .delete()
          .eq('id', ex.id);

        if (delError) {
          console.error(`  Error deleting: ${delError.message}`);
        } else {
          console.log(`  Deleted successfully`);
        }
      }
    }
  } else {
    console.log('\nNo duplicates found.');
  }
}

deleteDuplicate();
