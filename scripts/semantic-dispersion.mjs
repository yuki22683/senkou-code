import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LIMIT = 29;
const usageCounts = {};

// セマンティック・バケットの定義
const BUCKETS = {
  BRANCHING: [
    'common/branching_paths.png', 'common/split_road.png', 'common/crossroad.png', 
    'common/traffic_light.png', 'common/decision_tree.png', '3d/either_fork.png'
  ],
  LOOPING: [
    'common/loop_gears.png', 'common/circular_arrow.png', 'common/cycle_arrows.png', 
    'common/loading_spinner.png', 'common/loop_infinity.png', '3d/loop.png'
  ],
  DATA_STRUCT: [
    'common/variable_label.png', 'common/box_container_open.png', 'common/clipboard_list.png',
    'common/beads_chain.png', 'common/nested_boxes.png', 'common/struct_block.png', 'common/box.png'
  ],
  FUNCTION: [
    'common/function_gear.png', 'common/action_button.png', 'common/gear_cogs.png',
    'common/passing_value.png', 'common/return_value.png', '3d/compose_gear.png'
  ],
  LOW_LEVEL: [
    'common/cpu_chip.png', 'common/binary_code.png', 'common/microchip_logic.png',
    'common/vacuum_tube.png', 'common/electric_circuit.png', 'common/logic_gate.png'
  ],
  SQL: [
    'common/data_storage.png', 'common/database_table_3d.png', 'common/database_aggregate.png',
    'common/sql_query_magnifier.png', 'common/magnifying_glass_search.png'
  ],
  SECURITY: [
    'common/shield_private.png', 'common/key_security_lock.png', 'common/key_mutex.png',
    'common/padlock_open.png', 'common/shield_gold.png', 'common/key_silver.png'
  ],
  MODULAR: [
    'common/puzzle_pieces.png', 'common/modular_blocks.png', 'common/package_delivery.png',
    'common/pipeline.png', 'common/bridge_connection.png'
  ],
  GENERAL_EXPLAIN: [
    'common/robot_greet.png', 'common/light_bulb_hint.png', 'common/monitor.png',
    'common/blueprint.png', 'common/intro_robot.png', 'common/pencil.png', 
    'common/book.png', 'common/speech_bubble_code.png'
  ]
};

const rules = [
  { keywords: ['assembly', 'cpu', 'レジスタ', '機語', 'rax', 'rdi', 'rdx', 'syscall'], bucket: 'LOW_LEVEL' },
  { keywords: ['if ', 'else', '分岐', 'もし', 'when', 'match', 'switch', 'or ', 'and ', '&&', '||'], bucket: 'BRANCHING' },
  { keywords: ['for ', 'while', 'ループ', '繰り返し', 'each', 'map', 'stream'], bucket: 'LOOPING' },
  { keywords: ['変数', 'const ', 'let ', 'var ', '宣言', 'ラベル', '配列', 'array', 'list', '要素', 'アイテム', 'set'], bucket: 'DATA_STRUCT' },
  { keywords: ['引数', 'parameter', 'argument', '渡す', '戻り値', 'return', '結果', 'function', '関数', 'メソッド', 'call'], bucket: 'FUNCTION' },
  { keywords: ['sql', 'database', 'テーブル', 'db', 'query', 'count', 'sum', 'avg', '集計'], bucket: 'SQL' },
  { keywords: ['private', 'protected', 'アクセス', 'カプセル化', 'shield', 'lock', 'mutex', '安全'], bucket: 'SECURITY' },
  { keywords: ['module', 'package', 'import', '結合', 'pipeline', 'つなぐ'], bucket: 'MODULAR' },
];

function pickFromBucket(bucketName) {
  const bucket = BUCKETS[bucketName] || BUCKETS.GENERAL_EXPLAIN;
  // そのバケツの中で、上限に達していないものを、使用回数が少ない順に並び替え
  const candidates = bucket
    .map(img => ({ img, count: usageCounts[img] || 0 }))
    .filter(c => c.count < LIMIT)
    .sort((a, b) => a.count - b.count);

  if (candidates.length > 0) {
    const best = candidates[0].img;
    usageCounts[best] = (usageCounts[best] || 0) + 1;
    return best;
  }
  
  // バケツが空なら GENERAL_EXPLAIN から選ぶ
  if (bucketName !== 'GENERAL_EXPLAIN') return pickFromBucket('GENERAL_EXPLAIN');
  
  return 'common/robot_greet.png';
}

function getSemanticImage(text) {
  const lowerText = text.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some(k => lowerText.includes(k.toLowerCase()))) {
      return pickFromBucket(rule.bucket);
    }
  }
  return pickFromBucket('GENERAL_EXPLAIN');
}

async function semanticDispersion() {
  const files = await glob('data/lessons/*.ts');
  
  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      const lowerMatch = exerciseMatch.toLowerCase();
      const slidesRegex = /\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"image":\s*"\/illustrations\/([^"]+)"[\s\S]*?"content":\s*"([\s\S]*?)"[\s\S]*?\}/g;
      
      return exerciseMatch.replace(slidesRegex, (slideMatch, slideTitle, currentImg, slideContent) => {
        const combinedText = (slideTitle + slideContent + lowerMatch).toLowerCase();
        const bestImg = getSemanticImage(combinedText);
        return slideMatch.replace(`/illustrations/${currentImg}`, `/illustrations/${bestImg}`);
      });
    });

    fs.writeFileSync(file, newContent, 'utf-8');
    console.log(`Semantically dispersed images in ${file}`);
  }
  console.log('Semantic dispersion complete.');
}

semanticDispersion();
