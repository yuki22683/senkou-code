import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LIMIT = 30; // 鉄の掟：30回以上使わせない
const usageCounts = {};

const rules = [
  // 1. 最優先：非常に具体的なキーワード
  { keywords: ['assembly', 'cpu', 'レジスタ', '機語', 'rax', 'rdi', 'rdx'], img: 'common/cpu_chip.png' },
  { keywords: ['syscall', 'システムコール'], img: 'common/system_call.png' },
  { keywords: ['echo ', 'terminal', 'コマンド', 'bash'], img: 'common/terminal_command.png' },
  { keywords: ['変数', 'const ', 'let ', 'var ', '宣言', 'ラベル'], img: 'common/variable_label.png' },
  { keywords: ['引数', 'parameter', 'argument', '渡す'], img: 'common/passing_value.png' },
  { keywords: ['戻り値', 'return', '結果'], img: 'common/return_value.png' },
  { keywords: ['if ', 'else', '分岐', 'もし'], img: 'common/branching_paths.png' },
  { keywords: ['for ', 'while', 'ループ', '繰り返し', 'each'], img: 'common/loop_gears.png' },
  { keywords: ['class ', 'オブジェクト', '継承'], img: 'common/class_building.png' },
  { keywords: ['sql', 'database', 'テーブル', 'db'], img: 'common/data_storage.png' },
  { keywords: ['error', '例外', 'warning', '失敗'], img: 'common/error_warning.png' },
  { keywords: ['完了', '成功', 'できました', '目標', 'success'], img: 'common/success_check.png' },
  { keywords: ['bitwise', 'ビット', 'xor', 'and', 'or', 'shl', 'shr', 'logic'], img: 'common/microchip_logic.png' },
  { keywords: ['module', 'package', 'import', '結合', 'puzzle'], img: 'common/puzzle_pieces.png' },
  { keywords: ['実行', 'start', 'launch'], img: 'common/rocket_launch.png' },
  { keywords: ['exit', '終了', 'stop'], img: 'common/stop_sign.png' },
  { keywords: ['input', 'read', '入力', 'keyboard'], img: 'common/input_keyboard.png' },
  { keywords: ['print', 'display', '表示', 'monitor', 'output'], img: 'common/output_monitor.png' },
  { keywords: ['配列', 'array', 'list', '要素', 'アイテム'], img: 'common/clipboard_list.png' },
  { keywords: ['find', 'search', '検索', '探索'], img: 'common/magnifying_glass_search.png' },
  
  // 2. 次点
  { keywords: ['% ', 'modulo', '剰余'], img: 'common/modulo_percent.png' },
  { keywords: ['mutex', 'lock', '排他'], img: 'common/key_mutex.png' },
  { keywords: ['async', 'await', '非同期'], img: 'common/cloud_async.png' },
  { keywords: ['private', 'protected', 'アクセス制限'], img: 'common/shield_private.png' },
  { keywords: ['tip', 'hint', 'concept'], img: 'common/light_bulb_hint.png' },
  { keywords: ['doc', 'reference', '辞書'], img: 'common/book_reference.png' },
];

const fallbacks = [
  'common/robot_greet.png',
  'common/light_bulb_hint.png',
  'common/monitor.png',
  'common/blueprint.png',
  'common/intro_robot.png',
  'common/goal.png',
  'common/pencil.png',
  'common/book.png',
  'common/select.png',
  'common/filter.png'
];

function getBestImage(text) {
  const lowerText = text.toLowerCase();
  
  // 1. キーワードマッチ
  for (const rule of rules) {
    if (rule.keywords.some(k => lowerText.includes(k.toLowerCase()))) {
      const count = usageCounts[rule.img] || 0;
      if (count < LIMIT) {
        usageCounts[rule.img] = count + 1;
        return rule.img;
      }
    }
  }
  
  // 2. フォールバック（回数が少ない順に探す）
  const sortedFallbacks = [...fallbacks].sort((a, b) => (usageCounts[a] || 0) - (usageCounts[b] || 0));
  for (const img of sortedFallbacks) {
    const count = usageCounts[img] || 0;
    usageCounts[img] = count + 1;
    return img;
  }
  
  return 'common/robot_greet.png';
}

async function hyperDispersionV2() {
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
        const bestImg = getBestImage(combinedText);
        return slideMatch.replace(`/illustrations/${currentImg}`, `/illustrations/${bestImg}`);
      });
    });

    fs.writeFileSync(file, newContent, 'utf-8');
    console.log(`Ultra-dispersed images in ${file}`);
  }
  console.log('Ultra-dispersion complete.');
  
  // 最終集計を出力
  console.log('Final Usage Counts:', JSON.stringify(usageCounts, null, 2));
}

hyperDispersionV2();
