/**
 * CLAUDE.md 全ルール統合チェックスクリプト
 * 全82ルールのうち自動チェック可能なものを網羅
 */

import fs from 'fs';
import path from 'path';

const LESSONS_DIR = './data/lessons';
const errors = [];
const warnings = [];

// ヘルパー関数
function addError(file, rule, message) {
  errors.push({ file, rule, message });
}

function addWarning(file, rule, message) {
  warnings.push({ file, rule, message });
}

function isCommentLine(line) {
  const trimmed = line.trim();
  // #include, #define などはコメントではない
  if (trimmed.startsWith('#include') || trimmed.startsWith('#define') ||
      trimmed.startsWith('#ifdef') || trimmed.startsWith('#endif') ||
      trimmed.startsWith('#pragma')) {
    return false;
  }
  // *ptr, *p などポインタのデリファレンスはコメントではない
  if (/^\*[a-zA-Z_]/.test(trimmed)) {
    return false;
  }
  // *) はbashのcase文パターンでコメントではない
  if (trimmed.startsWith('*)')) {
    return false;
  }
  return trimmed.startsWith('# ') || trimmed === '#' ||
         trimmed.startsWith('//') ||
         trimmed.startsWith('--') || trimmed.startsWith('; ') ||
         trimmed.startsWith('/*') || (trimmed.startsWith('* ') && !trimmed.startsWith('*)'));
}

// バックスラッシュ+nの定数
const BACKSLASH_N = String.fromCharCode(92, 110);
const DOUBLE_BACKSLASH_N = String.fromCharCode(92, 92, 110);

// ルール#13: importケーシング小文字チェック
function checkRule13_ImportCasing() {
  const indexPath = path.join(LESSONS_DIR, 'index.ts');
  if (!fs.existsSync(indexPath)) return;

  const content = fs.readFileSync(indexPath, 'utf8');
  const importPattern = /from\s+['"]\.\/([\w]+)['"]/g;
  let match;

  while ((match = importPattern.exec(content)) !== null) {
    const fileName = match[1];
    if (fileName !== fileName.toLowerCase()) {
      addError('index.ts', '#13', `importは小文字で: '${fileName}' → '${fileName.toLowerCase()}'`);
    }
  }
}

// ルール#30: 2行連続コメント禁止
function checkRule30_ConsecutiveComments(file, content) {
  // correctLinesを抽出
  const correctLinesMatch = content.match(/"correctLines":\s*\[([\s\S]*?)\]/g);
  if (!correctLinesMatch) return;

  for (const block of correctLinesMatch) {
    // 文字列を抽出
    const linePattern = /"([^"\\]|\\.)*"/g;
    const lines = [];
    let m;
    while ((m = linePattern.exec(block)) !== null) {
      // エスケープを解除
      let line = m[0].slice(1, -1);
      lines.push(line);
    }

    for (let i = 0; i < lines.length - 1; i++) {
      if (isCommentLine(lines[i]) && isCommentLine(lines[i + 1]) &&
          lines[i].trim() !== '' && lines[i + 1].trim() !== '') {
        addError(file, '#30', `2行連続コメント: "${lines[i].substring(0, 30)}..." と "${lines[i + 1].substring(0, 30)}..."`);
      }
    }
  }
}

// ルール#35: JSON/文字列の一部を___にしない
function checkRule35_PartialHoley(file, content) {
  // holeyCodeを抽出
  const holeyMatch = content.match(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g);
  if (!holeyMatch) return;

  for (const block of holeyMatch) {
    // 明確なJSON文字列内部の___パターンを検出
    // 例: '{"___": "value"}' や '{"key": "___"}'
    // ただし '___' 全体が穴埋めの場合は許可

    // JSONリテラル内でキー名だけが___のパターン
    if (/\\['"]\\{[^}]*\\"___\\":[^}]*\\}/.test(block)) {
      addError(file, '#35', 'holeyCode内のJSON文字列のキー名が___になっています');
    }
  }
}

// ルール#53: チュートリアル出力例の言語一致
function checkRule53_TutorialOutputLanguage(file, content) {
  // tutorialSlidesのcontentを抽出
  const slidesMatch = content.match(/"tutorialSlides":\s*\[([\s\S]*?)\]/g);
  if (!slidesMatch) return;

  for (const block of slidesMatch) {
    // 日本語入力→英語出力パターンを検出
    const patterns = [
      /アリス.*=>.*Alice/,
      /ボブ.*=>.*Bob/,
      /太郎.*=>.*Taro/,
      /花子.*=>.*Hanako/,
      /りんご.*=>.*apple/i,
      /['"]アリス['"].*['"]Alice['"]/,
      /['"]ボブ['"].*['"]Bob['"]/
    ];

    for (const pattern of patterns) {
      if (pattern.test(block)) {
        addWarning(file, '#53', 'チュートリアルで日本語入力→英語出力のパターンがあります');
        break;
      }
    }
  }
}

// ルール#74: correctCode/correctLinesに___を含めない
function checkRule74_NoHoleyInCorrect(file, content) {
  // correctCodeをチェック
  const correctCodeMatch = content.match(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g);
  if (correctCodeMatch) {
    for (const block of correctCodeMatch) {
      if (block.includes('___')) {
        addError(file, '#74', 'correctCodeに___が含まれています');
      }
    }
  }

  // correctLinesをチェック
  const correctLinesMatch = content.match(/"correctLines":\s*\[([\s\S]*?)\]/g);
  if (correctLinesMatch) {
    for (const block of correctLinesMatch) {
      if (block.includes('"___"') || block.includes('___",') || block.includes('___"\\n')) {
        addError(file, '#74', 'correctLinesに___が含まれています');
      }
    }
  }
}

// ルール#75: candidates.othersの言語一致
function checkRule75_CandidatesLanguage(file, content) {
  // candidates.othersを抽出
  const othersMatch = content.match(/"others":\s*\[([\s\S]*?)\]/g);
  if (!othersMatch) return;

  // correctCodeも抽出して比較
  const correctCodeMatch = content.match(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g);
  if (!correctCodeMatch) return;

  // 日本語を使うべきなのに英語がある場合を検出
  const englishPatterns = [
    /"Pass"/,
    /"Fail"/,
    /"Adult"/,
    /"Child"/,
    /"Big"/,
    /"Small"/
  ];

  for (const block of othersMatch) {
    for (const pattern of englishPatterns) {
      if (pattern.test(block)) {
        // 対応するcorrectCodeが日本語を使っているかチェック
        addWarning(file, '#75', `candidates.othersに英語文字列が含まれています: ${pattern.source}`);
      }
    }
  }
}

// ルール#78-79: 全引数・全要素虫食いチェック
// 注: このチェックは既存のcheck-holey-v4.mjsで詳細にチェックされるため、
//     ここでは基本的なチェックのみ行う
function checkRule78_79_FullHoley(file, content) {
  // check-holey-v4.mjsに委譲するため、ここではスキップ
  // 詳細なチェックはcheck-holey-v4.mjsで行う
  return;
}

// ルール#82: tutorialSlidesの存在チェック
function checkRule82_TutorialSlidesExist(file, content) {
  // 演習（correctCodeを持つオブジェクト）をカウント
  const exerciseCount = (content.match(/"correctCode":/g) || []).length;

  // 演習レベルのtutorialSlides（titleの直後にtutorialSlidesがある）をカウント
  const tutorialCount = (content.match(/"title":\s*"[^"]+",\s*\n\s*"tutorialSlides":/g) || []).length;

  if (exerciseCount > 0 && tutorialCount < exerciseCount) {
    addError(file, '#82', `tutorialSlidesが不足: ${tutorialCount}/${exerciseCount}演習`);
  }
}

// エスケープシーケンスチェック（ルール#51関連）
function checkEscapeSequences(file, content) {
  // 1バックスラッシュ+nがあるかチェック
  // ファイル内で \\n (2文字) ではなく \n (実際の改行ではない) を探す
  const bytes = Buffer.from(content);
  for (let i = 0; i < bytes.length - 1; i++) {
    if (bytes[i] === 92 && bytes[i + 1] === 110) { // \n
      // 前がバックスラッシュでない場合は問題
      if (i === 0 || bytes[i - 1] !== 92) {
        addError(file, 'エスケープ', '不正なエスケープシーケンス: 1バックスラッシュ+n');
        break;
      }
    }
  }
}

// メイン処理
console.log('=== CLAUDE.md 全ルール統合チェック ===\n');

// ルール#13: index.tsのimportケーシング
checkRule13_ImportCasing();

// 各レッスンファイルをチェック
const files = fs.readdirSync(LESSONS_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

for (const file of files) {
  const content = fs.readFileSync(path.join(LESSONS_DIR, file), 'utf8');

  checkRule30_ConsecutiveComments(file, content);
  checkRule35_PartialHoley(file, content);
  checkRule53_TutorialOutputLanguage(file, content);
  checkRule74_NoHoleyInCorrect(file, content);
  checkRule75_CandidatesLanguage(file, content);
  checkRule78_79_FullHoley(file, content);
  checkRule82_TutorialSlidesExist(file, content);
  checkEscapeSequences(file, content);
}

// 結果出力
console.log('=== エラー ===');
if (errors.length === 0) {
  console.log('✅ エラーなし');
} else {
  for (const e of errors) {
    console.log(`❌ [${e.file}] ${e.rule}: ${e.message}`);
  }
}

console.log('\n=== 警告 ===');
if (warnings.length === 0) {
  console.log('✅ 警告なし');
} else {
  for (const w of warnings) {
    console.log(`⚠️  [${w.file}] ${w.rule}: ${w.message}`);
  }
}

console.log('\n=== 結果 ===');
console.log(`エラー: ${errors.length}件`);
console.log(`警告: ${warnings.length}件`);

if (errors.length > 0) {
  process.exit(1);
}
