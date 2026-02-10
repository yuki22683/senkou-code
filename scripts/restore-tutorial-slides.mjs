import fs from 'fs';

// 古いファイルと新しいファイルを読み込む
const oldContent = fs.readFileSync('/tmp/old_python2.ts', 'utf8');
let newContent = fs.readFileSync('./data/lessons/python2.ts', 'utf8');

// 古いファイルから演習ごとのtutorialSlidesを抽出
function extractExerciseTutorials(content) {
  const result = {};

  // exercises配列を見つける
  const exercisesMatch = content.match(/"exercises":\s*\[/);
  if (!exercisesMatch) return result;

  const exercisesStart = content.indexOf(exercisesMatch[0]);

  // 各演習を抽出
  const lines = content.split('\n');
  let currentTitle = null;
  let inTutorialSlides = false;
  let bracketCount = 0;
  let tutorialContent = '';
  let tutorialStartLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // タイトルを検出
    const titleMatch = line.match(/"title":\s*"([^"]+)"/);
    if (titleMatch && !inTutorialSlides) {
      currentTitle = titleMatch[1];
    }

    // tutorialSlidesの開始を検出
    if (line.includes('"tutorialSlides":') && currentTitle) {
      inTutorialSlides = true;
      tutorialStartLine = i;
      bracketCount = 0;
      tutorialContent = '';
    }

    if (inTutorialSlides) {
      tutorialContent += line + '\n';

      // ブラケットをカウント
      for (const char of line) {
        if (char === '[') bracketCount++;
        if (char === ']') bracketCount--;
      }

      // 閉じブラケットで終了
      if (bracketCount === 0 && line.includes(']')) {
        // tutorialSlides部分を抽出（"tutorialSlides": [...] の部分）
        result[currentTitle] = tutorialContent.trim();
        inTutorialSlides = false;
        tutorialContent = '';
      }
    }
  }

  return result;
}

// 新しいファイルで演習にtutorialSlidesがあるか確認
function hasExerciseTutorialSlides(content, title) {
  // タイトルを見つける
  const titlePattern = new RegExp(`"title":\\s*"${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
  const titleMatch = titlePattern.exec(content);
  if (!titleMatch) return false;

  // 次のtitleまでの範囲を取得
  const startIdx = titleMatch.index;
  const nextTitleMatch = content.slice(startIdx + titleMatch[0].length).match(/"title":\s*"/);
  const endIdx = nextTitleMatch
    ? startIdx + titleMatch[0].length + nextTitleMatch.index
    : content.length;

  const exerciseBlock = content.slice(startIdx, endIdx);
  return exerciseBlock.includes('"tutorialSlides":');
}

// 新しいファイルにtutorialSlidesを挿入
function insertTutorialSlides(content, title, tutorialSlides) {
  // タイトルを見つける
  const titlePattern = new RegExp(`("title":\\s*"${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}")`, 'g');
  const titleMatch = titlePattern.exec(content);
  if (!titleMatch) {
    console.log(`  ⚠️ タイトルが見つかりません: ${title}`);
    return content;
  }

  const insertPos = titleMatch.index + titleMatch[0].length;

  // 次の行に挿入
  const beforeInsert = content.slice(0, insertPos);
  const afterInsert = content.slice(insertPos);

  // tutorialSlidesを整形（インデントを調整）
  const formattedSlides = ',\n' + tutorialSlides;

  return beforeInsert + formattedSlides + afterInsert;
}

// メイン処理
const oldTutorials = extractExerciseTutorials(oldContent);
console.log('=== 古いファイルから抽出したtutorialSlides ===');
Object.keys(oldTutorials).forEach(title => {
  console.log('  ' + title);
});
console.log('合計:', Object.keys(oldTutorials).length, '件');
console.log('');

// 欠けているtutorialSlidesを特定して追加
let updatedContent = newContent;
let addedCount = 0;

for (const [title, slides] of Object.entries(oldTutorials)) {
  if (!hasExerciseTutorialSlides(newContent, title)) {
    console.log(`追加: ${title}`);
    updatedContent = insertTutorialSlides(updatedContent, title, slides);
    addedCount++;
  } else {
    console.log(`既存: ${title}`);
  }
}

console.log('');
console.log(`追加: ${addedCount}件`);

// ファイルを保存
if (addedCount > 0) {
  fs.writeFileSync('./data/lessons/python2.ts', updatedContent);
  console.log('python2.ts を更新しました');
}
