import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const rules = [
  { keywords: ['lazy'], img: 'common/lazy_sleeping_robot.png' },
  { keywords: ['lateinit', '初期化', '構築', 'constructor'], img: 'common/construction_site.png' },
  { keywords: ['interface', 'プロトコル'], img: 'common/interface_network.png' },
  { keywords: ['struct', '構造体'], img: 'common/struct_block.png' },
  { keywords: ['enum', '列挙型', 'status'], img: 'common/enum_list.png' },
  { keywords: ['generic', 'T>', '<T>', 'ジェネリクス', 'associatedtype'], img: 'common/generic_box.png' },
  { keywords: ['sql', 'count', 'sum', 'avg', '集計', 'group by'], img: 'common/database_aggregate.png' },
  { keywords: ['複雑', '高度', '論理', '推論', 'メタ', 'infer'], img: 'common/brain_logic.png' },
  { keywords: ['stack', 'queue', 'deque', 'コンテナ', '入れ物'], img: 'common/box_container_open.png' },
  { keywords: ['実行', '順序', 'ライフタイム', 'roadmap', 'path'], img: 'common/roadmap_path.png' },
  { keywords: ['function', '関数', 'メソッド', '定義', 'サブルーチン', 'call'], img: 'common/function_gear.png' },
  { keywords: ['xor', 'and', 'or', 'shl', 'shr', 'ビット', 'bitwise'], img: 'common/logic_gate.png' },
  { keywords: ['try', 'catch', 'finally', 'Option', 'Result', '安全', '例外', 'pcall', 'error', 'rescue', 'assert'], img: 'common/rescue_buoy.png' },
  { keywords: ['sort', 'OrderBy', '昇順', '降順', '並べ替え', 'rank', 'row_number'], img: 'common/sorting_cards.png' },
  { keywords: ['pipeline', 'パイプ', 'つなぐ'], img: 'common/pipeline.png' },
  { keywords: ['リダイレクト', '標準出力', '標準エラー', '出力先', 'fprintf', 'stderr', '2>', '>', '>>', '<'], img: 'common/hose_bucket.png' },
  { keywords: ['if', 'else', 'switch', 'match', 'when', '分岐', '条件', '判定'], img: 'common/split_road.png' },
  { keywords: ['for', 'while', 'each', 'repeat', 'ループ', '繰り返し', 'map', 'filter', 'iterate', 'stream', 'lazy', 'sequence', 'flatMap', 'every', 'reduce'], img: 'common/circular_arrow.png' },
  { keywords: ['print', 'echo', 'log', '表示', '出力', 'monitor', 'Console.WriteLine', 'System.out.println'], img: 'common/monitor.png' },
  { keywords: ['pointer', 'ポインタ', '参照', '番地', 'アドレス', 'move', '所有権', '&str', 'borrow', 'deref'], img: 'common/address_pointer.png' },
  { keywords: ['regex', '検索', 'test', '探す', '正規表現', 'マッチ', 're.sub', 're.search', 'findall', 'length'], img: 'common/magnifying_glass.png' },
  { keywords: ['file', 'open', 'close', 'ファイル', '読み込み', '書き込み', 'fopen', 'fclose', 'fgets', 'read'], img: 'common/file_folder.png' },
];

async function comprehensiveFix() {
  const files = await glob('data/lessons/*.ts');
  let totalFixed = 0;

  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    // gear.png と blueprint.png 両方を対象にする
    if (!content.includes('/illustrations/3d/gear.png') && !content.includes('/illustrations/common/blueprint.png')) continue;

    // 演習オブジェクトを安全に抽出 (非破壊的)
    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      const lowerMatch = exerciseMatch.toLowerCase();
      
      // スライドごとの個別判断ではなく、演習全体の文脈で最適な画像を選ぶ
      let bestImg = 'common/robot_greet.png';
      for (const rule of rules) {
        if (rule.keywords.some(k => lowerMatch.includes(k.toLowerCase()))) {
          bestImg = rule.img;
          break;
        }
      }

      // この演習内にある不適切な画像をすべて置換
      let result = exerciseMatch.replace(/\/illustrations\/3d\/gear\.png/g, `/illustrations/${bestImg}`);
      result = result.replace(/\/illustrations\/common\/blueprint\.png/g, `/illustrations/${bestImg}`);
      return result;
    });

    if (content !== newContent) {
      console.log(`Fixed all images in ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
      totalFixed++;
    }
  }
  console.log(`Total files fixed: ${totalFixed}`);
}

comprehensiveFix();
