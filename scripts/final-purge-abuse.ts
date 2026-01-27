import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LIMIT = 29;
const usageCounts: Record<string, number> = {};

// 画像プールの構築（重複・不適切画像を排除）
const commonImgs = fs.readdirSync('public/illustrations/common').map(f => `common/${f}`);
const advancedImgs = fs.readdirSync('public/illustrations/3d_advanced').map(f => `3d_advanced/${f}`);
const basic3dImgs = fs.readdirSync('public/illustrations/3d').map(f => `3d/${f}`);
const ALL_IMAGES = [...commonImgs, ...advancedImgs, ...basic3dImgs]
  .filter(f => f.endsWith('.png'))
  .filter(f => !f.includes('gear.png') && !f.includes('blueprint.png'));

// セマンティック・グループ（優先順位）
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

// 汎用・解説系（これを優先的に分散させる）
const GENERAL = [
  'common/robot_greet.png', 'common/light_bulb_hint.png', 'common/monitor.png',
  'common/intro_robot.png', 'common/pencil.png', 'common/book.png', 
  'common/select.png', 'common/filter.png', 'common/speech_bubble_code.png'
];

const rules = [
  { keywords: ['assembly', 'cpu', 'レジスタ', '機語', 'rax', 'rdi', 'rdx', 'syscall'], bucket: 'LOW' },
  { keywords: ['if ', 'else', '分岐', 'もし', 'when', 'match', 'switch'], bucket: 'BRANCH' },
  { keywords: ['for ', 'while', 'ループ', '繰り返し', 'each', 'map', 'stream'], bucket: 'LOOP' },
  { keywords: ['変数', 'const ', 'let ', 'var ', '宣言', 'ラベル', '配列', 'array', 'list', '要素', 'アイテム', 'set'], bucket: 'DATA' },
  { keywords: ['引数', 'parameter', 'argument', '渡す', '戻り値', 'return', '結果', 'function', '関数', 'メソッド', 'call'], bucket: 'FUNC' },
  { keywords: ['sql', 'database', 'テーブル', 'db', 'query', 'count', 'sum', 'avg', '集計'], bucket: 'SQL' },
  { keywords: ['private', 'protected', 'アクセス', 'カプセル化', 'shield', 'lock', 'mutex', '安全'], bucket: 'SEC' },
  { keywords: ['module', 'package', 'import', '結合', 'pipeline', 'つなぐ'], bucket: 'MOD' },
];

function pickBest(text: string) {
  const lower = text.toLowerCase();
  
  // 1. バケツ一致
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
  
  // 2. GENERAL バケツ（これを robot_greet 以外のバリエーションに強制）
  const bestGeneral = GENERAL
    .map(img => ({ img, count: usageCounts[img] || 0 }))
    .filter(c => c.count < LIMIT)
    .sort((a, b) => a.count - b.count)[0];
  if (bestGeneral) {
    usageCounts[bestGeneral.img] = (usageCounts[bestGeneral.img] || 0) + 1;
    return bestGeneral.img;
  }

  // 3. 最終手段：全プール
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
    
    // スライドの image フィールドを全件抽出し、強制的に pickBest で再定義
    const regex = /"image":\s*"\/illustrations\/[^"]+"/g;
    let matchCount = 0;
    const newContent = content.replace(regex, (match) => {
      const offset = content.indexOf(match);
      const context = content.substring(Math.max(0, offset - 500), Math.min(content.length, offset + 500));
      const best = pickBest(context);
      matchCount++;
      return `"image": "/illustrations/${best}"`;
    });
    
    fs.writeFileSync(file, newContent, 'utf-8');
    console.log(`Purged and dispersed ${matchCount} images in ${file}`);
  }
  
  const bad = Object.entries(usageCounts).filter(([img, count]) => count >= 30);
  console.log('--- FINAL AUDIT ---');
  if (bad.length > 0) {
    console.error('VIOLATION FOUND:', bad);
  } else {
    console.log('VICTORY: ALL IMAGES UNDER 30.');
  }
  console.log('Max usage count:', Math.max(...Object.values(usageCounts)));
}

run();
