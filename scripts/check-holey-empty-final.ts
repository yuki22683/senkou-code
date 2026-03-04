import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function checkAll() {
  const { data: exercises } = await supabase
    .from('exercises')
    .select('id, title, holey_code, correct_lines');

  if (!exercises) return;

  const backslashN = String.fromCharCode(92, 110);
  let problems = 0;

  for (const ex of exercises) {
    if (!ex.holey_code || !ex.correct_lines) continue;
    const holeyLines = ex.holey_code.split(backslashN);
    const correctLines = ex.correct_lines;

    const maxLen = Math.max(holeyLines.length, correctLines.length);

    for (let i = 0; i < maxLen; i++) {
      const holey = holeyLines[i] ?? '(missing)';
      const correct = correctLines[i] ?? '(missing)';

      // correctが空行だがholeyに___がある場合
      if (correct === '' && holey.includes('___')) {
        console.log('問題: ' + ex.title);
        console.log('  index ' + i + ': holey="' + holey + '" correct="' + correct + '"');
        problems++;
      }
    }
  }

  console.log('');
  console.log('総問題数: ' + problems);
}

checkAll();
