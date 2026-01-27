import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const megaRules = [
  // 1. 最優先：非常に具体的なキーワード
  { keywords: ['% ', 'modulo', '剰余', 'あまり'], img: 'common/modulo_percent.png' },
  { keywords: ['mutex', 'lock', '排他', 'mu.'], img: 'common/key_mutex.png' },
  { keywords: ['async', 'await', 'delay', 'sleep', '非同期', '待機'], img: 'common/cloud_async.png' },
  { keywords: ['timeout', 'timer', '時計', '時間'], img: 'common/timer_clock.png' },
  { keywords: ['private', 'protected', 'アクセス制限', 'カプセル化', 'shield'], img: 'common/shield_private.png' },
  { keywords: ['garbage', 'null', 'メモリ解放', 'trash', 'dispose'], img: 'common/trash_memory.png' },
  { keywords: ['find', 'filter', 'search', '検索', '探索'], img: 'common/magnifying_data.png' },
  { keywords: ['inheritance', '継承', 'extends', '階層'], img: 'common/hierarchy_tree.png' },
  { keywords: ['module', 'package', 'import', 'from', 'モジュール'], img: 'common/modular_blocks.png' },
  { keywords: ['static', 'utility', '道具箱', 'toolbox'], img: 'common/toolbox_static.png' },
  { keywords: ['send', 'receive', 'spawn', 'message', '通信', 'pid'], img: 'common/envelope_message.png' },
  { keywords: ['generic', 'T>', '<T>', 'dna'], img: 'common/dna_generics.png' },
  { keywords: ['path', 'route', 'filepath', 'アドレス'], img: 'common/compass_path.png' },
  { keywords: ['state', 'agent', 'battery', '状態'], img: 'common/battery_state.png' },
  { keywords: ['tip', 'hint', 'concept', '仕組み'], img: 'common/light_bulb_hint.png' },
  { keywords: ['performance', 'speed', 'optimize', '最適化', 'inline'], img: 'common/engine_speed.png' },
  { keywords: ['doc', 'reference', '辞書', 'dictionary'], img: 'common/book_reference.png' },
  { keywords: ['length', 'size', 'measure', '長さ', '大きさ'], img: 'common/ruler_measure.png' },
  { keywords: ['binary', '0x', '0b', 'bitwise', 'ビット', 'xor', 'and', 'or', 'shl', 'shr'], img: 'common/binary_code.png' },
  
  // 2. 次点：一般的なキーワード
  { keywords: ['sort', 'order', '昇順', '降順', '順序'], img: 'common/sorting_cards.png' },
  { keywords: ['try', 'catch', 'finally', 'option', 'result', 'pcall', 'error', '安全', '例外'], img: 'common/rescue_buoy.png' },
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

async function megaDispersion() {
  const files = await glob('data/lessons/*.ts');
  let totalUpdated = 0;

  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      const lowerMatch = exerciseMatch.toLowerCase();
      
      const slidesRegex = /\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"image":\s*"\/illustrations\/([^"]+)"[\s\S]*?"content":\s*"([\s\S]*?)"[\s\S]*?\}/g;
      
      return exerciseMatch.replace(slidesRegex, (slideMatch, slideTitle, currentImg, slideContent) => {
        const combinedText = (slideTitle + slideContent + lowerMatch).toLowerCase();
        
        // 既存の画像が common/ 以下の汎用画像である場合、より良いものにアップグレード
        if (currentImg.startsWith('common/') || currentImg.startsWith('3d/')) {
          for (const rule of megaRules) {
            if (rule.keywords.some(k => combinedText.includes(k.toLowerCase()))) {
              if (currentImg !== rule.img) {
                totalUpdated++;
                return slideMatch.replace(`/illustrations/${currentImg}`, `/illustrations/${rule.img}`);
              }
              break; 
            }
          }
        }
        return slideMatch;
      });
    });

    if (content !== newContent) {
      console.log(`Dispersed images in ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
  console.log(`Total images improved and dispersed: ${totalUpdated}`);
}

megaDispersion();
