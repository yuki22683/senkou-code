import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const upgradeRules = [
  { 
    oldImgs: ['common/blueprint.png'],
    subRules: [
      { keywords: ['interface', 'プロトコル'], img: 'common/interface_network.png' },
      { keywords: ['struct', '構造体'], img: 'common/struct_block.png' },
      { keywords: ['enum', '列挙型'], img: 'common/enum_list.png' },
      { keywords: ['generic', 'T>', '<T>', 'ジェネリクス'], img: 'common/generic_box.png' },
    ]
  },
  {
    oldImgs: ['common/safety_net.png', '3d_advanced/safety_net.png'],
    subRules: [
      { keywords: ['catch', 'rescue', 'pcall', 'error', '例外'], img: 'common/rescue_buoy.png' },
      { keywords: ['option', 'maybe', 'null', 'safe', 'エルビス'], img: 'common/option_lightbulb.png' },
      { keywords: ['private', 'アクセス', '守る', 'カプセル化'], img: 'common/shield_lock.png' },
    ]
  },
  {
    oldImgs: ['common/split_road.png'],
    subRules: [
      { keywords: ['switch', 'match', 'when', '複雑', '多岐', 'tree'], img: 'common/decision_tree.png' },
      { keywords: ['&&', '||', 'and', 'or', '論理', 'gate'], img: 'common/logic_gate.png' },
    ]
  },
  {
    oldImgs: ['common/circular_arrow.png'],
    subRules: [
      { keywords: ['無限', 'infinity'], img: 'common/loop_infinity.png' },
    ]
  }
];

async function horizontalFix() {
  const files = await glob('data/lessons/*.ts');
  let totalUpgraded = 0;

  for (const file of files) {
    if (file.endsWith('index.ts')) continue;
    let content = fs.readFileSync(file, 'utf-8');
    let modified = false;

    const exerciseRegex = /\{[\s\S]*?"title":[\s\S]*?"tutorialSlides":\s*\[([\s\S]*?)\][\s\S]*?\}/g;
    
    const newContent = content.replace(exerciseRegex, (exerciseMatch) => {
      const lowerMatch = exerciseMatch.toLowerCase();
      
      const slidesRegex = /\{[\s\S]*?"title":\s*"([^"]+)"[\s\S]*?"image":\s*"\/illustrations\/([^"]+)"[\s\S]*?"content":\s*"([\s\S]*?)"[\s\S]*?\}/g;
      
      return exerciseMatch.replace(slidesRegex, (slideMatch, slideTitle, imgPath, slideContent) => {
        const combinedText = (slideTitle + slideContent + lowerMatch).toLowerCase();
        
        for (const rule of upgradeRules) {
          if (rule.oldImgs.includes(imgPath)) {
            for (const sub of rule.subRules) {
              if (sub.keywords.some(k => combinedText.includes(k.toLowerCase()))) {
                modified = true;
                totalUpgraded++;
                return slideMatch.replace(`/illustrations/${imgPath}`, `/illustrations/${sub.img}`);
              }
            }
          }
        }
        return slideMatch;
      });
    });

    if (modified) {
      console.log(`Upgraded images in ${file}`);
      fs.writeFileSync(file, newContent, 'utf-8');
    }
  }
  console.log(`Total images upgraded: ${totalUpgraded}`);
}

horizontalFix();
