import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LIMIT = 29;
const usageCounts: Record<string, number> = {};

// 画像プールの構築
const commonImgs = fs.readdirSync('public/illustrations/common').map(f => `common/${f}`);
const advancedImgs = fs.readdirSync('public/illustrations/3d_advanced').map(f => `3d_advanced/${f}`);
const basic3dImgs = fs.readdirSync('public/illustrations/3d').map(f => `3d/${f}`);
const ALL_IMAGES = [...commonImgs, ...advancedImgs, ...basic3dImgs].filter(f => f.endsWith('.png'));

const BUCKETS: Record<string, string[]> = {
  BRANCHING: ['common/branching_paths.png', 'common/split_road.png', 'common/crossroad.png', 'common/traffic_light.png', 'common/decision_tree.png', '3d/either_fork.png'],
  LOOPING: ['common/loop_gears.png', 'common/circular_arrow.png', 'common/cycle_arrows.png', 'common/loading_spinner.png', 'common/loop_infinity.png', '3d/loop.png'],
  DATA: ['common/variable_label.png', 'common/box_container_open.png', 'common/clipboard_list.png', 'common/beads_chain.png', 'common/nested_boxes.png', 'common/struct_block.png', 'common/box.png'],
  FUNC: ['common/function_gear.png', 'common/action_button.png', 'common/gear_cogs.png', 'common/passing_value.png', 'common/return_value.png', '3d/compose_gear.png'],
  LOW: ['common/cpu_chip.png', 'common/binary_code.png', 'common/microchip_logic.png', 'common/vacuum_tube.png', 'common/electric_circuit.png', 'common/logic_gate.png'],
  SQL: ['common/data_storage.png', 'common/database_table_3d.png', 'common/database_aggregate.png', 'common/sql_query_magnifier.png', 'common/magnifying_glass_search.png'],
  SEC: ['common/shield_private.png', 'common/key_security_lock.png', 'common/key_mutex.png', 'common/padlock_open.png', 'common/shield_gold.png', 'common/key_silver.png'],
  MOD: ['common/puzzle_pieces.png', 'common/modular_blocks.png', 'common/package_delivery.png', 'common/pipeline.png', 'common/bridge_connection.png'],
};

const rules = [
  { keywords: ['assembly', 'cpu', 'レジスタ', '機語', 'rax', 'rdi', 'rdx', 'syscall'], bucket: 'LOW' },
  { keywords: ['if ', 'else', '分岐', 'もし', 'when', 'match', 'switch'], bucket: 'BRANCHING' },
  { keywords: ['for ', 'while', 'ループ', '繰り返し', 'each', 'map', 'stream'], bucket: 'LOOPING' },
  { keywords: ['変数', 'const ', 'let ', 'var ', '宣言', 'ラベル', '配列', 'array', 'list', '要素', 'アイテム', 'set'], bucket: 'DATA' },
  { keywords: ['引数', 'parameter', 'argument', '渡す', '戻り値', 'return', '結果', 'function', '関数', 'メソッド', 'call'], bucket: 'FUNC' },
  { keywords: ['sql', 'database', 'テーブル', 'db', 'query', 'count', 'sum', 'avg', '集計'], bucket: 'SQL' },
  { keywords: ['private', 'protected', 'アクセス', 'カプセル化', 'shield', 'lock', 'mutex', '安全'], bucket: 'SEC' },
  { keywords: ['module', 'package', 'import', '結合', 'pipeline', 'つなぐ'], bucket: 'MOD' },
];

function pickBest(text: string) {
  const lower = text.toLowerCase();
  
  // 1. キーワードに一致するバケツから探す
  for (const rule of rules) {
    if (rule.keywords.some(k => lower.includes(k.toLowerCase()))) {
      const bucket = BUCKETS[rule.bucket];
      const candidates = bucket
        .map(img => ({ img, count: usageCounts[img] || 0 }))
        .filter(c => c.count < LIMIT)
        .sort((a, b) => a.count - b.count);
      
      if (candidates.length > 0) {
        const best = candidates[0].img;
        usageCounts[best] = (usageCounts[best] || 0) + 1;
        return best;
      }
    }
  }
  
  // 2. バケツが溢れた、またはヒットしない場合 -> 全プールから最も使用回数が少ないもの
  const globalCandidates = ALL_IMAGES
    .map(img => ({ img, count: usageCounts[img] || 0 }))
    .filter(c => c.count < LIMIT)
    .sort((a, b) => a.count - b.count);
    
  if (globalCandidates.length > 0) {
    const best = globalCandidates[0].img;
    usageCounts[best] = (usageCounts[best] || 0) + 1;
    return best;
  }
  
  return 'common/robot_greet.png';
}

async function run() {
  const files = await glob('data/lessons/*.ts');
  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // スライドの image フィールドを置換
    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      const lowerEx = exerciseMatch.toLowerCase();
      const slidesRegex = /\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"image":\s*"\/illustrations\/([^"]+)"[\s\S]*?"content":\s*"([\s\S]*?)"[\s\S]*?\}/g;
      
      return exerciseMatch.replace(slidesRegex, (slideMatch, title, current, body) => {
        const best = pickBest(title + body + lowerEx);
        return slideMatch.replace(`/illustrations/${current}`, `/illustrations/${best}`);
      });
    });
    
    fs.writeFileSync(file, newContent, 'utf-8');
  }
  console.log('Stabilization complete.');
  console.log('Final usage count peek:', Object.entries(usageCounts).sort((a,b)=>b[1]-a[1]).slice(0, 10));
}

run();