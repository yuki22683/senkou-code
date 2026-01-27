import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const lessonsDir = path.join(process.cwd(), 'data', 'lessons');

const rules = [
  { keywords: ['sort', 'OrderBy', '昇順', '降順', '並べ替え'], img: 'common/sorting_cards.png' },
  { keywords: ['await', 'async', 'delay', 'Sleep', '待機', '非同期'], img: 'common/hourglass_waiting.png' },
  { keywords: ['try', 'catch', 'finally', 'Option', 'Result', 'pcall', 'error', '安全', '例外'], img: 'common/safety_net.png' },
  { keywords: ['class', 'struct', 'interface', 'record', '定義', '設計図', '構造体'], img: 'common/blueprint.png' },
  { keywords: ['pipe', 'パイプ', 'つなぐ'], img: 'common/pipeline.png' },
  { keywords: ['リダイレクト', '標準出力', '標準エラー', '出力先'], img: 'common/hose_bucket.png' },
  { keywords: ['if', 'else', 'switch', 'match', 'when', '分岐', '条件'], img: 'common/split_road.png' },
  { keywords: ['for', 'while', 'each', 'repeat', 'ループ', '繰り返し', 'map', 'filter', 'iterate'], img: 'common/circular_arrow.png' },
  { keywords: ['stack', 'push', 'pop', 'スタック', '積み'], img: 'common/stack_boxes.png' },
  { keywords: ['join', 'split', '連結', '分解', '結合'], img: 'common/chain_links.png' },
  { keywords: ['sum', '平均', '計算', '算術', '足し算', '引き算', '掛け算', '割り算', '演算'], img: 'common/abacus.png' },
  { keywords: ['func', 'method', 'greet', '挨拶', '呼び出し', 'サブルーチン'], img: 'common/robot_greet.png' },
  { keywords: ['Map', 'HashMap', '辞書', 'Dictionary', 'Hash', '連想配列'], img: 'common/dictionary_book.png' },
  { keywords: ['pointer', 'ポインタ', '参照', '番地', 'アドレス'], img: 'common/address_pointer.png' },
  { keywords: ['regex', '検索', 'test', '探す', '正規表現', 'マッチ'], img: 'common/magnifying_glass.png' },
  { keywords: ['file', 'open', 'close', 'ファイル', '読み込み', '書き込み'], img: 'common/file_folder.png' },
  { keywords: ['print', 'echo', 'log', '表示', '出力'], img: 'common/monitor.png' },
];

async function fixAllImages() {
  const files = await glob('data/lessons/*.ts');
  let totalFixed = 0;

  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    // 演習オブジェクトごとに処理
    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      // 演習全体のタイトルと説明を結合してコンテキストとする
      const exTitle = (exerciseMatch.match(/"title":\s*"([^"]+)"/) || ["", ""])[1];
      const exDesc = (exerciseMatch.match(/"description":\s*"([^"]+)"/) || ["", ""])[1];
      
      // スライド部分を置換
      const slidesRegex = /\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"image":\s*"\/illustrations\/3d\/gear\.png"[\s\S]*?"content":\s*"([\s\S]*?)"[\s\S]*?\}/g;
      
      return exerciseMatch.replace(slidesRegex, (slideMatch, slideTitle, slideContent) => {
        const combinedText = (exTitle + exDesc + slideTitle + slideContent).toLowerCase();
        
        // 最もマッチするルールを探す
        let bestImg = 'common/gear.png'; // デフォルト
        for (const rule of rules) {
          if (rule.keywords.some(k => combinedText.includes(k.toLowerCase()))) {
            bestImg = rule.img;
            break;
          }
        }
        
        if (bestImg !== 'common/gear.png') {
          modified = true;
          totalFixed++;
          return slideMatch.replace('/illustrations/3d/gear.png', `/illustrations/${bestImg}`);
        }
        return slideMatch;
      });
    });

    if (modified) {
      console.log(`Updated images in ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
  console.log(`Total images updated: ${totalFixed}`);
}

fixAllImages();
