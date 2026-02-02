import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const { data, error } = await supabase
  .from('exercises')
  .select('title, candidates')
  .eq('title', 'JSONを読み込む')
  .single();

if (error) console.log('Error:', error);
console.log('Title:', data?.title);
console.log('Candidates:', JSON.stringify(data?.candidates, null, 2));
