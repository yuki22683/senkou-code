import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lessonsDir = path.join(__dirname, '..', 'data', 'lessons');

// 言語ごとのコメント形式
const commentFormats = {
  python: '# この行を完成させましょう',
  javascript: '// この行を完成させましょう',
  typescript: '// この行を完成させましょう',
  java: '// この行を完成させましょう',
  c: '// この行を完成させましょう',
  cpp: '// この行を完成させましょう',
  csharp: '// この行を完成させましょう',
  go: '// この行を完成させましょう',
  rust: '// この行を完成させましょう',
  ruby: '# この行を完成させましょう',
  php: '// この行を完成させましょう',
  bash: '# この行を完成させましょう',
  haskell: '-- この行を完成させましょう',
  elixir: '# この行を完成させましょう',
  lua: '-- この行を完成させましょう',
  assembly: '; この行を完成させましょう',
  sql: '-- この行を完成させましょう',
  kotlin: '// この行を完成させましょう',
  swift: '// この行を完成させましょう',
  perl: '# この行を完成させましょう',
};

// コメント行かどうかを判定
function isCommentLine(line, language) {
  const trimmed = line.trim();
  if (trimmed === '') return true;
  if (trimmed.startsWith('//')) return true;
  if (trimmed.startsWith('#') && ['python', 'ruby', 'bash', 'perl', 'elixir'].includes(language)) return true;
  if (trimmed.startsWith('--') && ['sql', 'lua', 'haskell'].includes(language)) return true;
  if (trimmed.startsWith(';') && language === 'assembly') return true;
  if (trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.endsWith('*/')) return true;
  return false;
}

// 構造的な行かどうかを判定
function isStructuralLine(line) {
  const trimmed = line.trim();
  if (/^[\s{}()\[\]]*$/.test(trimmed)) return true;
  if (/^[\s})\]]+[;]?$/.test(trimmed)) return true;
  if (trimmed === '{' || trimmed === '}' || trimmed === '};') return true;
  return false;
}

// 虫食い行かどうかを判定
function isHoleyLine(line) {
  return line.includes('___');
}

// インデントを取得
function getIndent(line) {
  const match = line.match(/^(\s*)/);
  return match ? match[1] : '';
}

// エスケープされた文字列の終端を見つける
function findStringEnd(content, startIdx) {
  let i = startIdx;
  while (i < content.length) {
    if (content[i] === '\\' && i + 1 < content.length) {
      i += 2;
    } else if (content[i] === '"') {
      return i;
    } else {
      i++;
    }
  }
  return -1;
}

// JSON配列の終端を見つける（文字列内の]を無視する）
function findArrayEnd(content, startIdx) {
  let i = startIdx;
  let depth = 1;
  while (i < content.length && depth > 0) {
    if (content[i] === '"') {
      // 文字列をスキップ
      i++;
      while (i < content.length) {
        if (content[i] === '\\' && i + 1 < content.length) {
          i += 2;
        } else if (content[i] === '"') {
          i++;
          break;
        } else {
          i++;
        }
      }
    } else if (content[i] === '[') {
      depth++;
      i++;
    } else if (content[i] === ']') {
      depth--;
      if (depth === 0) return i;
      i++;
    } else {
      i++;
    }
  }
  return -1;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const language = path.basename(filePath, '.ts').replace(/\d+$/, '');
  const comment = commentFormats[language] || '// この行を完成させましょう';

  let totalInserted = 0;

  // 各演習を見つけて処理
  let searchStart = 0;
  while (true) {
    // holeyCodeを探す
    const holeyMarker = '"holeyCode": "';
    const holeyIdx = content.indexOf(holeyMarker, searchStart);
    if (holeyIdx === -1) break;

    const holeyStart = holeyIdx + holeyMarker.length;
    const holeyEnd = findStringEnd(content, holeyStart);
    if (holeyEnd === -1) break;

    // correctLinesを探す
    const clMarker = '"correctLines": [';
    const clIdx = content.indexOf(clMarker, holeyEnd);
    if (clIdx === -1 || clIdx > holeyEnd + 1000) {
      searchStart = holeyEnd + 1;
      continue;
    }

    const clStart = clIdx + clMarker.length;
    const clEnd = findArrayEnd(content, clStart);
    if (clEnd === -1) {
      searchStart = holeyEnd + 1;
      continue;
    }

    // lineHintsを探す
    const lhMarker = '"lineHints": [';
    const lhIdx = content.indexOf(lhMarker, clEnd);
    if (lhIdx === -1 || lhIdx > clEnd + 500) {
      searchStart = holeyEnd + 1;
      continue;
    }

    const lhStart = lhIdx + lhMarker.length;
    const lhEnd = findArrayEnd(content, lhStart);
    if (lhEnd === -1) {
      searchStart = holeyEnd + 1;
      continue;
    }

    // holeyCodeの内容を取得
    const holeyCode = content.substring(holeyStart, holeyEnd);
    const holeyLines = holeyCode.split('\\n');

    // correctLinesをパース
    const clContent = content.substring(clStart, clEnd);
    const correctLines = [];
    const clRegex = /"((?:[^"\\]|\\.)*)"/g;
    let clMatch;
    while ((clMatch = clRegex.exec(clContent)) !== null) {
      correctLines.push(clMatch[1]);
    }

    // lineHintsをパース
    const lhContent = content.substring(lhStart, lhEnd);
    const lineHints = [];
    const lhRegex = /(null|"((?:[^"\\]|\\.)*)")/g;
    let lhMatch;
    while ((lhMatch = lhRegex.exec(lhContent)) !== null) {
      if (lhMatch[1] === 'null') {
        lineHints.push(null);
      } else {
        lineHints.push(lhMatch[2] || '');
      }
    }

    // 虫食い行を見つけてコメントを挿入
    const newHoleyLines = [];
    const newCorrectLines = [];
    const newLineHints = [];
    let inserted = 0;

    for (let i = 0; i < holeyLines.length; i++) {
      const line = holeyLines[i];

      // この行が虫食いで、コメントでも構造的な行でもない場合
      if (isHoleyLine(line) && !isCommentLine(line, language) && !isStructuralLine(line)) {
        // 前の行がすでにコメント行でなければコメントを挿入
        const prevLine = newHoleyLines[newHoleyLines.length - 1];
        if (!prevLine || !isCommentLine(prevLine, language)) {
          const indent = getIndent(line);
          newHoleyLines.push(indent + comment);
          newCorrectLines.push(indent + comment);
          newLineHints.push(null);
          inserted++;
        }
      }

      newHoleyLines.push(line);
      if (i < correctLines.length) {
        newCorrectLines.push(correctLines[i]);
      }
      if (i < lineHints.length) {
        newLineHints.push(lineHints[i]);
      } else {
        newLineHints.push(null);
      }
    }

    // 残りを追加
    for (let i = holeyLines.length; i < correctLines.length; i++) {
      newCorrectLines.push(correctLines[i]);
    }
    for (let i = holeyLines.length; i < lineHints.length; i++) {
      newLineHints.push(lineHints[i]);
    }

    if (inserted === 0) {
      searchStart = lhEnd + 1;
      continue;
    }

    totalInserted += inserted;

    // 新しい内容を構築
    const newHoleyCode = newHoleyLines.join('\\n');
    const newClContent = newCorrectLines.map(l => '"' + l + '"').join(', ');
    const newLhContent = newLineHints.map(h => h === null ? 'null' : '"' + h + '"').join(', ');

    // 後ろから置換（インデックスがずれないように）
    content = content.substring(0, lhStart) + newLhContent + content.substring(lhEnd);

    // clEndとlhIdxの位置調整
    const lhDelta = newLhContent.length - (lhEnd - lhStart);

    content = content.substring(0, clStart) + newClContent + content.substring(clEnd);

    // holeyEndの位置調整
    const clDelta = newClContent.length - (clEnd - clStart);

    content = content.substring(0, holeyStart) + newHoleyCode + content.substring(holeyEnd);

    searchStart = holeyStart + newHoleyCode.length + 100;
  }

  if (totalInserted > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }

  return totalInserted;
}

// メイン処理
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalInserted = 0;
const modifiedFiles = [];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  try {
    const inserted = processFile(filePath);
    if (inserted > 0) {
      console.log(file + ': ' + inserted + '行挿入');
      modifiedFiles.push(file);
      totalInserted += inserted;
    }
  } catch (err) {
    console.error(file + ': エラー - ' + err.message);
  }
}

console.log('\\n合計: ' + totalInserted + '行を挿入 (' + modifiedFiles.length + 'ファイル)');
