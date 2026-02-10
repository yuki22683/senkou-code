import fs from 'fs';

const oldContent = fs.readFileSync('/tmp/old_python2.ts', 'utf8');
const newContent = fs.readFileSync('./data/lessons/python2.ts', 'utf8');

// 古いバージョンから演習タイトルとtutorialSlidesを抽出
function extractTutorialSlides(content) {
  const tutorials = {};

  // 演習ブロックを抽出
  const exerciseBlocks = content.split(/"title":\s*"/);

  for (let i = 1; i < exerciseBlocks.length; i++) {
    const block = exerciseBlocks[i];
    const titleEnd = block.indexOf('"');
    if (titleEnd === -1) continue;

    const title = block.substring(0, titleEnd);

    // tutorialSlidesを探す
    const slidesMatch = block.match(/"tutorialSlides":\s*\[/);
    if (slidesMatch) {
      const startIdx = block.indexOf('"tutorialSlides":');
      if (startIdx !== -1) {
        // 配列を抽出
        let bracketCount = 0;
        let inString = false;
        let escaped = false;
        let arrayStart = -1;
        let arrayEnd = -1;

        for (let j = startIdx; j < block.length; j++) {
          const char = block[j];

          if (escaped) {
            escaped = false;
            continue;
          }

          if (char === '\\') {
            escaped = true;
            continue;
          }

          if (char === '"' && !escaped) {
            inString = !inString;
            continue;
          }

          if (!inString) {
            if (char === '[') {
              if (bracketCount === 0) arrayStart = j;
              bracketCount++;
            } else if (char === ']') {
              bracketCount--;
              if (bracketCount === 0) {
                arrayEnd = j + 1;
                break;
              }
            }
          }
        }

        if (arrayStart !== -1 && arrayEnd !== -1) {
          tutorials[title] = block.substring(arrayStart, arrayEnd);
        }
      }
    }
  }

  return tutorials;
}

const oldTutorials = extractTutorialSlides(oldContent);
const newTutorials = extractTutorialSlides(newContent);

console.log('=== 古いバージョンのtutorialSlides ===');
Object.keys(oldTutorials).forEach(title => {
  console.log('  ' + title);
});
console.log('合計:', Object.keys(oldTutorials).length, '件');

console.log('');
console.log('=== 新しいバージョンのtutorialSlides ===');
Object.keys(newTutorials).forEach(title => {
  console.log('  ' + title);
});
console.log('合計:', Object.keys(newTutorials).length, '件');

console.log('');
console.log('=== 欠けているtutorialSlides ===');
const missing = Object.keys(oldTutorials).filter(title => !newTutorials[title]);
missing.forEach(title => {
  console.log('  ' + title);
});
console.log('欠落:', missing.length, '件');

// JSONとして出力
fs.writeFileSync('/tmp/old_tutorials.json', JSON.stringify(oldTutorials, null, 2));
console.log('');
console.log('古いtutorialSlidesを /tmp/old_tutorials.json に保存しました');
