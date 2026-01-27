import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// 画像ごとの使用上限
const LIMIT = 40;
const usageCounts = {};

const megaRules = [
  { keywords: ['% ', 'modulo', '剰余', 'あまり'], img: 'common/modulo_percent.png' },
  { keywords: ['mutex', 'lock', '排他', 'mu.'], img: 'common/key_mutex.png' },
  { keywords: ['async', 'await', 'delay', 'sleep', '非同期', '待機'], img: 'common/cloud_async.png' },
  { keywords: ['timeout', 'timer', '時計', '時間'], img: 'common/timer_clock.png' },
  { keywords: ['private', 'protected', 'アクセス制限', 'カプセル化', 'shield', '守る'], img: 'common/shield_private.png' },
  { keywords: ['garbage', 'メモリ解放', 'trash', 'dispose', 'free('], img: 'common/trash_memory.png' }, // 厳格化
  { keywords: ['find', 'filter', 'search', '検索', '探索', 'magnifying'], img: 'common/magnifying_data.png' },
  { keywords: ['inheritance', '継承', 'extends', '階層', 'hierarchy'], img: 'common/hierarchy_tree.png' },
  { keywords: ['module', 'package', 'import', 'from', 'モジュール'], img: 'common/modular_blocks.png' },
  { keywords: ['static', 'utility', '道具箱', 'toolbox'], img: 'common/toolbox_static.png' },
  { keywords: ['send', 'receive', 'spawn', 'message', '通信', 'pid'], img: 'common/envelope_message.png' },
  { keywords: ['generic', 'T>', '<T>', 'dna'], img: 'common/dna_generics.png' },
  { keywords: ['path', 'route', 'filepath', 'アドレス'], img: 'common/compass_path.png' },
  { keywords: ['state', 'agent', 'battery', '状態'], img: 'common/battery_state.png' },
  { keywords: ['tip', 'hint', 'concept', '仕組み', '説明'], img: 'common/light_bulb_hint.png' },
  { keywords: ['performance', 'speed', 'optimize', '最適化', 'inline', 'engine'], img: 'common/engine_speed.png' },
  { keywords: ['doc', 'reference', '辞書', 'dictionary'], img: 'common/book_reference.png' },
  { keywords: ['length', 'size', 'measure', '長さ', '大きさ'], img: 'common/ruler_measure.png' },
  { keywords: ['binary', '0x', '0b', 'bitwise', 'ビット', 'xor', 'and', 'or', 'shl', 'shr', 'logic'], img: 'common/binary_code.png' },
  { keywords: ['null', 'option', 'maybe', 'safe', 'エルビス', '安全'], img: 'common/option_lightbulb.png' }, // trashから分離
  { keywords: ['sort', 'order', '昇順', '降順', '順序'], img: 'common/sorting_cards.png' },
  { keywords: ['try', 'catch', 'finally', 'result', 'pcall', 'error', '例外'], img: 'common/rescue_buoy.png' },
  { keywords: ['class', 'struct', 'interface', 'record', '定義', '構造体'], img: 'common/blueprint.png' },
  { keywords: ['pipe', 'パイプ', '|'], img: 'common/pipeline.png' },
  { keywords: ['リダイレクト', '>', '<', 'stderr', 'stdout'], img: 'common/hose_bucket.png' },
  { keywords: ['if', 'else', 'switch', 'match', 'when', '分岐', '条件'], img: 'common/split_road.png' },
  { keywords: ['for', 'while', 'each', 'repeat', 'ループ', '繰り返し', 'map', 'stream'], img: 'common/circular_arrow.png' },
  { keywords: ['stack', 'push', 'pop', 'deque'], img: 'common/stack_boxes.png' },
  { keywords: ['join', 'split', '連結', '分解', '結合'], img: 'common/chain_links.png' },
  { keywords: ['sum', '平均', '計算', '算術', '演算', 'accumulate', 'reduce'], img: 'common/abacus.png' },
  { keywords: ['print', 'echo', 'log', '表示', '出力'], img: 'common/monitor.png' },
  { keywords: ['func', 'method', 'greet', '挨拶', '呼び出し'], img: 'common/robot_greet.png' },
  { keywords: ['Map', 'HashMap', 'Dictionary', 'Hash', '連想配列'], img: 'common/dictionary_book.png' },
];

const fallbackImgs = [
  'common/robot_greet.png',
  'common/blueprint.png',
  'common/light_bulb_hint.png',
  'common/monitor.png'
];

function getBestImage(text) {
  const lowerText = text.toLowerCase();
  for (const rule of megaRules) {
    if (rule.keywords.some(k => lowerText.includes(k.toLowerCase()))) {
      const count = usageCounts[rule.img] || 0;
      if (count < LIMIT) {
        usageCounts[rule.img] = count + 1;
        return rule.img;
      }
    }
  }
  
  // フォールバック（上限を超えた場合やヒットしない場合）
  for (const img of fallbackImgs) {
    const count = usageCounts[img] || 0;
    if (count < LIMIT * 2) {
      usageCounts[img] = count + 1;
      return img;
    }
  }
  return 'common/robot_greet.png';
}

async function hyperDispersion() {
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
    console.log(`Hyper-dispersed images in ${file}`);
  }
  console.log('Hyper-dispersion complete.');
}

hyperDispersion();
