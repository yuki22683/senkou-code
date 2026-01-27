import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const LIMIT = 29; // 絶対上限：30未満
const usageCounts = {};

// 画像プールの構築
const commonImgs = fs.readdirSync('public/illustrations/common').map(f => `common/${f}`);
const advancedImgs = fs.readdirSync('public/illustrations/3d_advanced').map(f => `3d_advanced/${f}`);
const basic3dImgs = fs.readdirSync('public/illustrations/3d').map(f => `3d/${f}`);
const ALL_IMAGES = [...commonImgs, ...advancedImgs, ...basic3dImgs].filter(f => f.endsWith('.png'));

const rules = [
  { keywords: ['assembly', 'cpu', 'レジスタ', '機語', 'rax', 'rdi', 'rdx'], img: 'common/cpu_chip.png' },
  { keywords: ['syscall', 'システムコール'], img: 'common/system_call.png' },
  { keywords: ['echo ', 'terminal', 'コマンド', 'bash'], img: 'common/terminal_command.png' },
  { keywords: ['変数', 'const ', 'let ', 'var ', '宣言', 'ラベル'], img: 'common/variable_label.png' },
  { keywords: ['引数', 'parameter', 'argument', '渡す'], img: 'common/passing_value.png' },
  { keywords: ['戻り値', 'return', '結果'], img: 'common/return_value.png' },
  { keywords: ['if ', 'else', '分岐', 'もし', 'when', 'match'], img: 'common/branching_paths.png' },
  { keywords: ['for ', 'while', 'ループ', '繰り返し', 'each', 'map'], img: 'common/loop_gears.png' },
  { keywords: ['class ', 'オブジェクト', '継承', 'extends'], img: 'common/class_building.png' },
  { keywords: ['sql', 'database', 'テーブル', 'db'], img: 'common/data_storage.png' },
  { keywords: ['error', '例外', 'warning', '失敗'], img: 'common/error_warning.png' },
  { keywords: ['完了', '成功', '目標', 'success', 'おめでとう'], img: 'common/success_check.png' },
  { keywords: ['bitwise', 'ビット', 'xor', 'and', 'or', 'shl', 'shr', 'logic'], img: 'common/microchip_logic.png' },
  { keywords: ['module', 'package', 'import', '結合', 'puzzle'], img: 'common/puzzle_pieces.png' },
  { keywords: ['実行', 'start', 'launch', 'プログラム'], img: 'common/rocket_launch.png' },
  { keywords: ['exit', '終了', 'stop'], img: 'common/stop_sign.png' },
  { keywords: ['input', 'read', '入力', 'keyboard'], img: 'common/input_keyboard.png' },
  { keywords: ['print', 'display', '表示', 'monitor', 'output'], img: 'common/output_monitor.png' },
  { keywords: ['配列', 'array', 'list', '要素', 'アイテム', 'set'], img: 'common/clipboard_list.png' },
  { keywords: ['find', 'search', '検索', '探索'], img: 'common/magnifying_glass_search.png' },
  { keywords: ['% ', 'modulo', '剰余'], img: 'common/modulo_percent.png' },
  { keywords: ['mutex', 'lock', '排他'], img: 'common/key_mutex.png' },
  { keywords: ['async', 'await', '非同期'], img: 'common/cloud_async.png' },
  { keywords: ['private', 'protected', 'アクセス制限'], img: 'common/shield_private.png' },
  { keywords: ['tip', 'hint', 'concept', '仕組み'], img: 'common/light_bulb_hint.png' },
  { keywords: ['doc', 'reference', '辞書', 'dictionary'], img: 'common/book_reference.png' },
  { keywords: ['progression', 'レベル', '進捗'], img: 'common/mountain_climb.png' },
  { keywords: ['stream', 'flow', '流れ'], img: 'common/ocean_wave.png' },
  { keywords: ['ecosystem', 'environment', '環境'], img: 'common/solar_system.png' },
  { keywords: ['future', 'observation', '観察'], img: 'common/telescope.png' },
  { keywords: ['bridge', 'link', '連結'], img: 'common/bridge_connection.png' },
  { keywords: ['stable', 'persistence', '永続', '保存'], img: 'common/anchor_safety.png' },
  { keywords: ['scale', 'high level', '大規模'], img: 'common/hot_air_balloon.png' },
  { keywords: ['zoom', 'detail', '詳細'], img: 'common/magnifying_glass_plus.png' },
  { keywords: ['public', 'open', '公開'], img: 'common/padlock_open.png' },
  { keywords: ['time', 'duration', '期間'], img: 'common/sand_timer.png' },
  { keywords: ['hidden', 'unknown', '不明'], img: 'common/light_bulb_off.png' },
  { keywords: ['base', 'helix', 'DNA'], img: 'common/dna_structure.png' },
  { keywords: ['low level', 'hardware'], img: 'common/microscope_lens.png' },
  { keywords: ['global', 'universal', '世界'], img: 'common/world_globe.png' },
  { keywords: ['discovery', 'find'], img: 'common/map_treasure.png' },
  { keywords: ['direction', 'routing', '方位'], img: 'common/compass_rose.png' },
  { keywords: ['protect', 'gold', '最後'], img: 'common/shield_gold.png' },
  { keywords: ['access', 'key', '秘密'], img: 'common/key_silver.png' },
  { keywords: ['build', 'tool', '道具'], img: 'common/hammer_wrench.png' },
  { keywords: ['core', 'engine', '核'], img: 'common/cogwheel_large.png' },
  { keywords: ['write', 'meta', '羽'], img: 'common/feather_pen.png' },
  { keywords: ['attach', 'ref', 'クリップ'], img: 'common/paper_clip.png' },
  { keywords: ['calculator', 'math', '計算'], img: 'common/calculator_retro.png' },
  { keywords: ['speed', 'light', '光'], img: 'common/light_beam.png' },
  { keywords: ['dynamic', 'battery', '充電'], img: 'common/battery_charging.png' },
  { keywords: ['automation', 'arm', 'アーム'], img: 'common/robot_arm.png' },
  { keywords: ['snapshot', 'camera', 'レンズ'], img: 'common/camera_lens.png' },
  { keywords: ['package', 'result', 'ギフト'], img: 'common/gift_box.png' },
  { keywords: ['complete', 'trophy', '優勝'], img: 'common/trophy_gold.png' },
];

function getBestImage(text) {
  const lowerText = text.toLowerCase();
  
  // 1. キーワードマッチかつ上限未満
  for (const rule of rules) {
    if (rule.keywords.some(k => lowerText.includes(k.toLowerCase()))) {
      const count = usageCounts[rule.img] || 0;
      if (count < LIMIT) {
        usageCounts[rule.img] = count + 1;
        return rule.img;
      }
    }
  }
  
  // 2. 上限に達していない画像の中から、最も使用回数が少ないものを選択（完全な均等分散）
  const availableImgs = ALL_IMAGES
    .map(img => ({ img, count: usageCounts[img] || 0 }))
    .filter(item => item.count < LIMIT)
    .sort((a, b) => a.count - b.count);
    
  if (availableImgs.length > 0) {
    const best = availableImgs[0].img;
    usageCounts[best] = (usageCounts[best] || 0) + 1;
    return best;
  }
  
  // 万が一の極限状態（ほぼありえない）
  return 'common/robot_greet.png';
}

async function absoluteFix() {
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
    console.log(`Absolutely fixed images in ${file}`);
  }
  
  // 最終確認用ログ
  const sorted = Object.entries(usageCounts).sort((a, b) => b[1] - a[1]);
  console.log('Final Global Usage Counts:', JSON.stringify(sorted, null, 2));
}

absoluteFix();