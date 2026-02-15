/**
 * DB内の重複演習をチェックするスクリプト
 */
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkDuplicates() {
  const { data, error } = await supabase
    .from('exercises')
    .select('title, lesson_id');

  if (error) {
    console.error('Error:', error.message);
    return;
  }

  const counts = new Map<string, number>();
  for (const ex of data) {
    const key = `${ex.lesson_id}:${ex.title}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  const duplicates = [...counts.entries()].filter(([_, count]) => count > 1);

  if (duplicates.length === 0) {
    console.log('✅ 重複演習なし');
  } else {
    console.log('❌ 重複演習が見つかりました:');
    for (const [key, count] of duplicates) {
      console.log(`  ${key} (${count}件)`);
    }
  }
}

checkDuplicates();
