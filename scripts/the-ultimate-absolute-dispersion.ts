import fs from 'fs';
import { glob } from 'glob';

const LIMIT = 29;
const usageCounts: Record<string, number> = {};

// 全画像プール（100枚以上）
const commonImgs = fs.readdirSync('public/illustrations/common').map(f => `common/${f}`);
const advancedImgs = fs.readdirSync('public/illustrations/3d_advanced').map(f => `3d_advanced/${f}`);
const basic3dImgs = fs.readdirSync('public/illustrations/3d').map(f => `3d/${f}`);
const ALL_IMAGES = [...commonImgs, ...advancedImgs, ...basic3dImgs].filter(f => f.endsWith('.png'));

// バケツ定義（意味の整合性用）
const BUCKETS: Record<string, string[]> = {
  BRANCH: ['common/branching_paths.png', 'common/split_road.png', 'common/crossroad.png', 'common/traffic_light.png', 'common/decision_tree.png', '3d/either_fork.png', 'common/logic_gate_or.png'],
  LOOP: ['common/loop_gears.png', 'common/circular_arrow.png', 'common/cycle_arrows.png', 'common/loading_spinner.png', 'common/loop_infinity.png', '3d/loop.png'],
  DATA: ['common/variable_label.png', 'common/box_container_open.png', 'common/clipboard_list.png', 'common/beads_chain.png', 'common/nested_boxes.png', 'common/struct_block.png', 'common/box.png', 'common/labeled_box.png'],
  FUNC: ['common/function_gear.png', 'common/action_button.png', 'common/gear_cogs.png', 'common/passing_value.png', 'common/return_value.png', '3d/compose_gear.png'],
  LOW: ['common/cpu_chip.png', 'common/binary_code.png', 'common/microchip_logic.png', 'common/vacuum_tube.png', 'common/electric_circuit.png', 'common/logic_gate.png', 'common/cpu.png'],
  SQL: ['common/data_storage.png', 'common/database_table_3d.png', 'common/database_aggregate.png', 'common/sql_query_magnifier.png', 'common/magnifying_glass_search.png'],
  SEC: ['common/shield_private.png', 'common/key_security_lock.png', 'common/key_mutex.png', 'common/padlock_open.png', 'common/shield_gold.png', 'common/key_silver.png'],
  MOD: ['common/puzzle_pieces.png', 'common/modular_blocks.png', 'common/package_delivery.png', 'common/pipeline.png', 'common/bridge_connection.png'],
};

const rules = [
  { keywords: ['assembly', 'cpu', 'レジスタ', '機語', 'rax', 'rdi', 'rdx', 'syscall'], bucket: 'LOW' },
  { keywords: ['if ', 'else', '分岐', 'もし', 'when', 'match', 'switch', '論理'], bucket: 'BRANCH' },
  { keywords: ['for ', 'while', 'ループ', '繰り返し', 'each', 'map', 'stream'], bucket: 'LOOP' },
  { keywords: ['変数', 'const ', 'let ', 'var ', '宣言', 'ラベル', '配列', 'array', 'list', '要素', 'アイテム', 'set'], bucket: 'DATA' },
  { keywords: ['引数', 'parameter', 'argument', '渡す', '戻り値', 'return', '結果', 'function', '関数', 'メソッド', 'call'], bucket: 'FUNC' },
  { keywords: ['sql', 'database', 'テーブル', 'db', 'query', 'count', 'sum', 'avg', '集計'], bucket: 'SQL' },
  { keywords: ['private', 'protected', 'アクセス', 'カプセル化', 'shield', 'lock', 'mutex', '安全'], bucket: 'SEC' },
  { keywords: ['module', 'package', 'import', '結合', 'pipeline', 'つなぐ'], bucket: 'MOD' },
];

function pickBest(text: string) {
  const lower = text.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some(k => lower.includes(k.toLowerCase()))) {
      const best = BUCKETS[rule.bucket]
        .map(img => ({ img, count: usageCounts[img] || 0 }))
        .filter(c => c.count < LIMIT)
        .sort((a, b) => a.count - b.count)[0];
      if (best) {
        usageCounts[best.img] = (usageCounts[best.img] || 0) + 1;
        return best.img;
      }
    }
  }
  const globalBest = ALL_IMAGES
    .map(img => ({ img, count: usageCounts[img] || 0 }))
    .filter(c => c.count < LIMIT)
    .sort((a, b) => a.count - b.count)[0];
  if (globalBest) {
    usageCounts[globalBest.img] = (usageCounts[globalBest.img] || 0) + 1;
    return globalBest.img;
  }
  return 'common/robot_greet.png';
}

async function run() {
  const files = await glob('data/lessons/*.ts');
  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // 画像パスの全出現箇所を特定し、1つずつ独立して置換
    let offset = 0;
    while (true) {
      const match = content.substring(offset).match(/\/illustrations\/[a-zA-Z0-9_\/\-\.]+\.png/);
      if (!match) break;
      
      const start = offset + (match.index || 0);
      const end = start + match[0].length;
      
      // 前後500文字を文脈として取得
      const contextText = content.substring(Math.max(0, start - 500), Math.min(content.length, end + 500));
      const bestImg = pickBest(contextText);
      
      const replacement = `/illustrations/${bestImg}`;
      content = content.substring(0, start) + replacement + content.substring(end);
      
      // 次の検索位置へ（無限ループ防止）
      offset = start + replacement.length;
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`The ultimate absolute dispersion: ${file}`);
  }
  
  const bad = Object.entries(usageCounts).filter(([img, count]) => count >= 30);
  if (bad.length > 0) {
    console.error('VIOLATION:', bad);
  } else {
    console.log('VICTORY: ALL IMAGES UNDER 30.');
  }
}

run();
