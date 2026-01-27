import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const finalRules = [
  { keywords: ['lazy'], img: 'common/lazy_sleeping_robot.png' },
  { keywords: ['lateinit', '初期化', '構築', '作成'], img: 'common/construction_site.png' },
  { keywords: ['sql', 'count', 'sum', 'avg', '集計', 'group by'], img: 'common/database_aggregate.png' },
  { keywords: ['enum', '列挙', '定数', '不変', 'status', '状態'], img: 'common/scroll_constants.png' },
  { keywords: ['型', 'typeof', 'string', 'int', 'boolean', 'data type'], img: 'common/data_flow_nodes.png' },
  { keywords: ['属性', '詳細', '中身', 'inspect', 'プロパティ'], img: 'common/microscope_inspect.png' },
  { keywords: ['複雑', '高度', '論理', '推論', 'メタ', 'infer'], img: 'common/brain_logic.png' },
  { keywords: ['コンテナ', '入れ物', 'stack', 'queue', 'リスト', 'deque'], img: 'common/box_container_open.png' },
  { keywords: ['パス', 'フロー', '順序', 'ライフタイム', '実行'], img: 'common/roadmap_path.png' },
  { keywords: ['function', '関数', 'サブルーチン', 'メソッド', '定義', '使い方'], img: 'common/function_gear.png' },
];

async function blueprintSweep() {
  const files = await glob('data/lessons/*.ts');
  let totalFixed = 0;

  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    if (!content.includes('/illustrations/common/blueprint.png')) continue;

    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      const lowerMatch = exerciseMatch.toLowerCase();
      
      const slidesRegex = /\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"image":\s*"\/illustrations\/common\/blueprint\.png"[\s\S]*?"content":\s*"([\s\S]*?)"[\s\S]*?\}/g;
      
      return exerciseMatch.replace(slidesRegex, (slideMatch, slideTitle, slideContent) => {
        const combinedText = (slideTitle + slideContent + lowerMatch).toLowerCase();
        
        let bestImg = 'common/function_gear.png'; // 定義系のデフォルト
        for (const rule of finalRules) {
          if (rule.keywords.some(k => combinedText.includes(k.toLowerCase()))) {
            bestImg = rule.img;
            break;
          }
        }
        
        totalFixed++;
        return slideMatch.replace('/illustrations/common/blueprint.png', `/illustrations/${bestImg}`);
      });
    });

    if (content !== newContent) {
      console.log(`Swept blueprint.png in ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
  console.log(`Total blueprint.png instances swept: ${totalFixed}`);
}

blueprintSweep();
