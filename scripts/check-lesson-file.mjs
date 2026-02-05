// 学習コンテンツ包括チェックスクリプト
// 使い方: node scripts/check-lesson-file.mjs [ファイル名]
// 例: node scripts/check-lesson-file.mjs python.ts
// 引数なしで全ファイルをチェック

import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';
const targetFile = process.argv[2];

// チェック結果
const results = {
  errors: [],
  warnings: [],
  passed: []
};

function addError(file, check, message) {
  results.errors.push({ file, check, message });
}

function addWarning(file, check, message) {
  results.warnings.push({ file, check, message });
}

function addPassed(file, check) {
  results.passed.push({ file, check });
}

// エクササイズを抽出する正規表現
function extractExercises(content) {
  const exercises = [];
  const regex = /\{[^{}]*"title":\s*"([^"]+)"[^{}]*"correctCode":\s*"((?:[^"\\]|\\.)*)"/g;

  // より正確な抽出のため、exercisesブロック全体を探す
  const exerciseBlockRegex = /\{\s*"title":\s*"([^"]+)"[\s\S]*?"correctCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"holeyCode":\s*"((?:[^"\\]|\\.)*)"[\s\S]*?"correctLines":\s*\[([\s\S]*?)\],\s*"lineHints":\s*\[([\s\S]*?)\],[\s\S]*?"expected_output":\s*"([^"]*)"/g;

  let match;
  while ((match = exerciseBlockRegex.exec(content)) !== null) {
    exercises.push({
      title: match[1],
      correctCode: match[2],
      holeyCode: match[3],
      correctLinesRaw: match[4],
      lineHintsRaw: match[5],
      expectedOutput: match[6]
    });
  }
  return exercises;
}

// 1. エスケープシーケンスチェック
function checkEscapeSequences(file, content) {
  const checkName = 'エスケープシーケンス';

  // 正しくない\\nパターンを検出（1個か3個以上のバックスラッシュ）
  const badPatterns = [
    { regex: /[^\\]\\n/g, desc: '1バックスラッシュ+n' },
    { regex: /\\\\\\n/g, desc: '3バックスラッシュ+n' },
    { regex: /\\\\\\\\\\n/g, desc: '5バックスラッシュ+n' }
  ];

  let hasError = false;
  for (const { regex, desc } of badPatterns) {
    if (regex.test(content)) {
      addError(file, checkName, `不正なエスケープ: ${desc}`);
      hasError = true;
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 2. lineHints長さチェック
function checkLineHintsLength(file, content) {
  const checkName = 'lineHints長さ';
  const exercises = extractExercises(content);

  let hasError = false;
  for (const ex of exercises) {
    const clCount = (ex.correctLinesRaw.match(/"(?:[^"\\]|\\.)*"/g) || []).length;
    const lhCount = (ex.lineHintsRaw.match(/null|"(?:[^"\\]|\\.)*"/g) || []).length;

    if (clCount !== lhCount && clCount > 0) {
      addError(file, checkName, `「${ex.title}」: correctLines=${clCount}, lineHints=${lhCount}`);
      hasError = true;
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 3. expected_output空チェック
function checkExpectedOutput(file, content) {
  const checkName = 'expected_output';

  // assembly系は除外
  if (file.includes('assembly')) {
    addPassed(file, checkName + '(assembly除外)');
    return;
  }

  const exercises = extractExercises(content);
  let hasError = false;

  for (const ex of exercises) {
    if (ex.expectedOutput === '') {
      addError(file, checkName, `「${ex.title}」: expected_outputが空`);
      hasError = true;
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 4. 曖昧コメントチェック
function checkVagueComments(file, content) {
  const checkName = '曖昧コメント';

  const vaguePatterns = [
    /# 結果を表示$/m,
    /\/\/ 結果を表示$/m,
    /# 関数を定義$/m,
    /\/\/ 関数を定義$/m,
    /# クラスを定義$/m,
    /\/\/ クラスを定義$/m,
    /# 変数を定義$/m,
    /\/\/ 変数を定義$/m,
    /# リストを定義$/m,
    /# 配列を定義$/m,
    /\/\/ 配列を定義$/m,
    /# 辞書を定義$/m,
    /# 値を返す$/m,
    /\/\/ 値を返す$/m,
    /# メッセージを表示$/m,
    /\/\/ メッセージを表示$/m,
  ];

  let hasError = false;
  for (const pattern of vaguePatterns) {
    const matches = content.match(pattern);
    if (matches) {
      addWarning(file, checkName, `曖昧なコメント検出: ${matches[0]}`);
      hasError = true;
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 5. holeyCodeの___チェック
function checkHoleyCode(file, content) {
  const checkName = 'holeyCode穴埋め';
  const exercises = extractExercises(content);

  let hasError = false;
  for (const ex of exercises) {
    const holeyCode = ex.holeyCode.replace(/\\n/g, '\n');
    const lines = holeyCode.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      // 空行、コメント行はスキップ
      if (line === '' ||
          line.startsWith('#') ||
          line.startsWith('//') ||
          line.startsWith('/*') ||
          line.startsWith('*') ||
          line.startsWith('--') ||
          line.startsWith(';')) {
        continue;
      }

      // コード行に___がない場合
      if (!line.includes('___')) {
        // 構造的な行（{, }, end等）も穴埋めが必要
        if (line.match(/^[{}()\[\]]+$/) || line === 'end' || line === 'begin') {
          continue; // これらは許容
        }
        // 短い構造行も許容
        if (line.length <= 3) {
          continue;
        }
        addWarning(file, checkName, `「${ex.title}」行${i + 1}: 穴埋めなし「${line.substring(0, 50)}」`);
        hasError = true;
      }
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 6. コメント整合性チェック
function checkCommentConsistency(file, content) {
  const checkName = 'コメント整合性';
  const exercises = extractExercises(content);

  let hasError = false;
  for (const ex of exercises) {
    const correctCode = ex.correctCode.replace(/\\n/g, '\n');
    const holeyCode = ex.holeyCode.replace(/\\n/g, '\n');

    // コメント行を抽出して比較
    const correctComments = correctCode.split('\n').filter(l =>
      l.trim().startsWith('#') || l.trim().startsWith('//')
    );
    const holeyComments = holeyCode.split('\n').filter(l =>
      l.trim().startsWith('#') || l.trim().startsWith('//')
    );

    if (correctComments.length !== holeyComments.length) {
      addError(file, checkName, `「${ex.title}」: コメント行数不一致 (correct=${correctComments.length}, holey=${holeyComments.length})`);
      hasError = true;
    } else {
      for (let i = 0; i < correctComments.length; i++) {
        if (correctComments[i].trim() !== holeyComments[i].trim()) {
          addError(file, checkName, `「${ex.title}」: コメント不一致\n  correct: ${correctComments[i].trim()}\n  holey: ${holeyComments[i].trim()}`);
          hasError = true;
          break;
        }
      }
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 7. 2行連続コメントチェック
function checkConsecutiveComments(file, content) {
  const checkName = '連続コメント';
  const exercises = extractExercises(content);

  let hasError = false;
  for (const ex of exercises) {
    const correctCode = ex.correctCode.replace(/\\n/g, '\n');
    const lines = correctCode.split('\n');

    for (let i = 0; i < lines.length - 1; i++) {
      const current = lines[i].trim();
      const next = lines[i + 1].trim();

      const isComment = (line) =>
        line.startsWith('#') || line.startsWith('//');

      if (isComment(current) && isComment(next)) {
        addWarning(file, checkName, `「${ex.title}」行${i + 1}-${i + 2}: 2行連続コメント`);
        hasError = true;
      }
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// 8. 日本語文字列チェック
function checkJapaneseStrings(file, content) {
  const checkName = '日本語文字列';
  const exercises = extractExercises(content);

  // 英語のままでOKなパターン
  const allowedPatterns = [
    /^Hello,?\s*World!?$/i,
    /^Python$/i, /^JavaScript$/i, /^Ruby$/i, /^Java$/i,
    /^TypeScript$/i, /^Go$/i, /^Rust$/i, /^C\+\+$/i,
    /^true$/i, /^false$/i, /^null$/i, /^undefined$/i,
    /^localhost$/i, /^Math$/i, /^console$/i,
    /^[A-Z][a-z]+Error$/,  // TypeError等
    /^\d+$/, // 数字のみ
    /^\\n$/, /^\\t$/, // エスケープシーケンス
  ];

  let hasWarning = false;
  for (const ex of exercises) {
    const correctCode = ex.correctCode;
    // シングルクォート文字列を抽出
    const strings = correctCode.match(/'([^'\\]|\\.)*'/g) || [];

    for (const str of strings) {
      const value = str.slice(1, -1);
      if (value.length < 2) continue;

      // 日本語が含まれていればOK
      if (/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(value)) continue;

      // 許可パターンならOK
      if (allowedPatterns.some(p => p.test(value))) continue;

      // 英語のみの文字列は警告
      if (/^[A-Za-z\s!.,?]+$/.test(value) && value.length > 3) {
        addWarning(file, checkName, `「${ex.title}」: 英語文字列 '${value}'`);
        hasWarning = true;
      }
    }
  }

  if (!hasWarning) {
    addPassed(file, checkName);
  }
}

// 9. tutorialSlidesの存在チェック
function checkTutorialSlides(file, content) {
  const checkName = 'tutorialSlides';

  const hasTutorial = content.includes('"tutorialSlides"');
  if (!hasTutorial) {
    addWarning(file, checkName, 'tutorialSlidesが見つかりません');
  } else {
    addPassed(file, checkName);
  }
}

// 10. 画像パスの存在チェック
function checkImagePaths(file, content) {
  const checkName = '画像パス';

  const imageMatches = content.match(/"image":\s*"([^"]+)"/g) || [];
  let hasError = false;

  for (const match of imageMatches) {
    const imagePath = match.match(/"image":\s*"([^"]+)"/)[1];
    if (imagePath && !imagePath.startsWith('/')) {
      addWarning(file, checkName, `相対パスの画像: ${imagePath}`);
      hasError = true;
    }
  }

  if (!hasError) {
    addPassed(file, checkName);
  }
}

// メイン処理
function checkFile(file) {
  const filePath = path.join(lessonsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  console.log(`\n📁 ${file} をチェック中...`);

  checkEscapeSequences(file, content);
  checkLineHintsLength(file, content);
  checkExpectedOutput(file, content);
  checkVagueComments(file, content);
  checkHoleyCode(file, content);
  checkCommentConsistency(file, content);
  checkConsecutiveComments(file, content);
  checkJapaneseStrings(file, content);
  checkTutorialSlides(file, content);
  checkImagePaths(file, content);
}

// 実行
console.log('═══════════════════════════════════════════════════════════');
console.log('  学習コンテンツ包括チェック');
console.log('═══════════════════════════════════════════════════════════');

const files = targetFile
  ? [targetFile]
  : fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of files) {
  checkFile(file);
}

// 結果表示
console.log('\n');
console.log('═══════════════════════════════════════════════════════════');
console.log('  チェック結果サマリー');
console.log('═══════════════════════════════════════════════════════════');

if (results.errors.length > 0) {
  console.log(`\n❌ エラー: ${results.errors.length}件`);
  console.log('-----------------------------------------------------------');
  for (const e of results.errors) {
    console.log(`  [${e.file}] ${e.check}`);
    console.log(`    → ${e.message}`);
  }
}

if (results.warnings.length > 0) {
  console.log(`\n⚠️  警告: ${results.warnings.length}件`);
  console.log('-----------------------------------------------------------');
  for (const w of results.warnings) {
    console.log(`  [${w.file}] ${w.check}`);
    console.log(`    → ${w.message}`);
  }
}

console.log(`\n✅ パス: ${results.passed.length}件`);

console.log('\n═══════════════════════════════════════════════════════════');
if (results.errors.length === 0 && results.warnings.length === 0) {
  console.log('  🎉 全てのチェックにパスしました！');
} else {
  console.log(`  結果: エラー ${results.errors.length}件 / 警告 ${results.warnings.length}件`);
}
console.log('═══════════════════════════════════════════════════════════');
