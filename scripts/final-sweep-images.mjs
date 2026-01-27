import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const rules = [
  { keywords: ['sort', 'OrderBy', '昇順', '降順', '並べ替え', 'rank', 'row_number'], img: 'common/sorting_cards.png' },
  { keywords: ['await', 'async', 'delay', 'Sleep', '待機', '非同期'], img: 'common/hourglass_waiting.png' },
  { keywords: ['try', 'catch', 'finally', 'Option', 'Result', 'pcall', 'error', '安全', '例外', 'assert'], img: 'common/safety_net.png' },
  { keywords: ['class', 'struct', 'interface', 'record', '定義', '設計図', '構造体', 'typedef', 'enum', 'associatedtype', 'typealias', 'some', 'impl trait'], img: 'common/blueprint.png' },
  { keywords: ['pipe', 'パイプ', 'つなぐ'], img: 'common/pipeline.png' },
  { keywords: ['リダイレクト', '標準出力', '標準エラー', '出力先', 'fprintf', 'stderr', '2>', '>', '>>', '<'], img: 'common/hose_bucket.png' },
  { keywords: ['if', 'else', 'switch', 'match', 'when', '分岐', '条件', '判定', 'takeif', 'takeunless'], img: 'common/split_road.png' },
  { keywords: ['for', 'while', 'each', 'repeat', 'ループ', '繰り返し', 'map', 'filter', 'iterate', 'stream', 'lazy', 'sequence', 'flatMap', 'every', 'some', 'reduce'], img: 'common/circular_arrow.png' },
  { keywords: ['stack', 'push', 'pop', 'スタック', '積み', 'deque'], img: 'common/stack_boxes.png' },
  { keywords: ['配列', 'array', 'list', 'set', 'コレクション', '要素', 'items', 'vector', 'スライス', 'distinct'], img: 'common/collection_cubes.png' },
  { keywords: ['join', 'split', '連結', '分解', '結合', 'substring', '部分文字列', 'slice'], img: 'common/chain_links.png' },
  { keywords: ['sum', '平均', '計算', '算術', '足し算', '引き算', '掛け算', '割り算', '演算', 'neg', 'abs', 'math', '累算', 'accumulate'], img: 'common/abacus.png' },
  { keywords: ['xor', 'and', 'or', 'shl', 'shr', 'ビット', 'bitwise', 'test命令', '論理'], img: 'common/logic_circuit.png' },
  { keywords: ['func', 'method', 'greet', '挨拶', '呼び出し', 'サブルーチン', 'call', 'callback', 'コールバック', 'robot'], img: 'common/robot_greet.png' },
  { keywords: ['Map', 'HashMap', '辞書', 'Dictionary', 'Hash', '連想配列', 'Object.entries', 'Object.fromEntries'], img: 'common/dictionary_book.png' },
  { keywords: ['pointer', 'ポインタ', '参照', '番地', 'アドレス', 'move', '所有権', '&str', 'borrow', 'deref', '二重ポインタ'], img: 'common/address_pointer.png' },
  { keywords: ['regex', '検索', 'test', '探す', '正規表現', 'マッチ', 're.sub', 're.search', 'findall', 'length', '長さ'], img: 'common/magnifying_glass.png' },
  { keywords: ['file', 'open', 'close', 'ファイル', '読み込み', '書き込み', 'fopen', 'fclose', 'fgets', 'ヒアドキュメント', 'read', 'INSERT', 'UPDATE', 'DELETE'], img: 'common/file_folder.png' },
  { keywords: ['print', 'echo', 'log', '表示', '出力', 'monitor', 'Console.WriteLine'], img: 'common/monitor.png' },
];

async function finalSweep() {
  const files = await glob('data/lessons/*.ts');
  let totalFixed = 0;

  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // もし gear.png が含まれていないならスキップ
    if (!content.includes('/illustrations/3d/gear.png')) continue;

    // 演習オブジェクトごとに分割して、より広いコンテキストで判断
    const exerciseParts = content.split(/\{[\s\n]*"title":/);
    const header = exerciseParts.shift();
    
    const fixedParts = exerciseParts.map(part => {
      // 分割された各パートは、演習一つ分（または末尾）
      if (!part.includes('/illustrations/3d/gear.png')) return part;

      // このパート全体（タイトル、説明、スライド、コード、ヒントすべて）をスキャン対象にする
      const lowerPart = part.toLowerCase();
      
      let bestImg = 'common/robot_greet.png'; // 最終デフォルト
      for (const rule of rules) {
        if (rule.keywords.some(k => lowerPart.includes(k.toLowerCase()))) {
          bestImg = rule.img;
          break;
        }
      }

      // この演習内にあるすべての gear.png を置換
      return part.replace(/\/illustrations\/3d\/gear\.png/g, `/illustrations/${bestImg}`);
    });

    const newContent = header + fixedParts.join('{"title":');
    if (content !== newContent) {
      console.log(`Swept all gear.png in ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
      
      // 置換された数をカウント
      const matches = content.match(/\/illustrations\/3d\/gear\.png/g);
      totalFixed += matches ? matches.length : 0;
    }
  }
  console.log(`Total gear.png instances swept: ${totalFixed}`);
}

finalSweep();
