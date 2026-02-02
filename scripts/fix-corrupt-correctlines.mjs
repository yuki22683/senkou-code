// 破損したcorrectLinesを修正するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanged = false;

  // パターン: ]",\n          " で始まる行（重複している場合）
  // これは correctLines の途中で閉じられ、再度行が続いているケース

  // 具体的なパターン:
  // ]",\n          "# ... (コメント)
  // ]",\n          "text (コード)
  // ...
  // ],

  // 修正: ]",\n...],\n を探して、最初の部分を削除

  const pattern = /\]",\n(\s+"[^"]*",?\n)+\s+\],/g;

  let match;
  const fixes = [];

  while ((match = pattern.exec(content)) !== null) {
    // このパターンは重複を示す
    // 例: ]",\n          "# コメント",\n          "code"\n        ],
    // 修正: 最初の]", から次の], までを削除して ], に置き換え

    const fullMatch = match[0];

    // 最後の ], を見つける
    const lastBracketIndex = fullMatch.lastIndexOf('],');

    // 正しい終端は ],
    // 最初の ]", を ], に置き換え、残りの重複行を削除

    fixes.push({
      original: fullMatch,
      replacement: '],'
    });
  }

  // 別のアプローチ: ]", で閉じられている部分を見つけて、次の ], までを削除
  // より単純なパターン
  const simplePattern = /\]",\n([\s\S]*?)\n\s+\],/g;

  while ((match = simplePattern.exec(content)) !== null) {
    console.log(`Found corrupt pattern in ${file}:`);
    console.log(match[0].substring(0, 100) + '...');
  }

  // 手動で修正
  // パターン: ]",\n...], を ], に置き換え
  const fixPattern = /\]",\n\s+"[^"]*"\n\s+"[^"]*"\n\s+\],/g;
  let count = 0;
  content = content.replace(fixPattern, () => {
    count++;
    return '],';
  });

  // もう一つのパターン: ]",\n...], で3行以上
  const fixPattern2 = /\]",\n(\s+"[^"]*",?\n){2,}\s+\],/g;
  content = content.replace(fixPattern2, () => {
    count++;
    return '],';
  });

  if (count > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed ${count} corrupt blocks in ${file}`);
    totalFixed += count;
    fileChanged = true;
  }
}

console.log(`\n合計 ${totalFixed} 件の破損ブロックを修正しました。`);
