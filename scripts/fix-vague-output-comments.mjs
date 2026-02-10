// 曖昧なコメントを具体的に修正するスクリプト
// correctCodeのコメントを解析し、holeyCodeにも同じコメントを適用する
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// correctCodeとholeyCodeのコメントを同期させる
function syncCommentsFromCorrectToHoley(correctCode, holeyCode) {
  const correctLines = correctCode.split('\n');
  const holeyLines = holeyCode.split('\n');

  // 各行のコメントを対応させる
  // 両方のコードの行数が同じと仮定
  if (correctLines.length !== holeyLines.length) {
    return holeyCode; // 行数が違う場合はそのまま返す
  }

  const fixedLines = [];
  for (let i = 0; i < holeyLines.length; i++) {
    const holeyLine = holeyLines[i];
    const correctLine = correctLines[i];

    // holeyLineがコメント行で、correctLineもコメント行なら、correctLineのコメントを使う
    const holeyTrimmed = holeyLine.trim();
    const correctTrimmed = correctLine.trim();

    const isHoleyComment = holeyTrimmed.startsWith('//') || holeyTrimmed.startsWith('#') ||
                           holeyTrimmed.startsWith('--') || holeyTrimmed.startsWith(';');
    const isCorrectComment = correctTrimmed.startsWith('//') || correctTrimmed.startsWith('#') ||
                             correctTrimmed.startsWith('--') || correctTrimmed.startsWith(';');

    if (isHoleyComment && isCorrectComment) {
      // correctCodeのコメントを使う（インデントを維持）
      const indent = holeyLine.match(/^(\s*)/)[1];
      fixedLines.push(indent + correctTrimmed);
    } else {
      fixedLines.push(holeyLine);
    }
  }

  return fixedLines.join('\n');
}

function extractVariableName(line) {
  const patterns = [
    /console\.log\(([^)]+)\)/,
    /print\(([^)]+)\)/,
    /puts\s+(.+)/,
    /echo\s+\$?(.+)/,
    /Console\.WriteLine\(([^)]+)\)/,
    /std::cout\s*<<\s*([^\s<]+)/,
  ];

  for (const pattern of patterns) {
    const match = line.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }
  return null;
}

function extractFunctionName(line) {
  const patterns = [
    /func\s+(\w+)/,
    /def\s+(\w+)/,
    /function\s+(\w+)/,
    /(\w+)\s*\(\)\s*\{/,
  ];

  for (const pattern of patterns) {
    const match = line.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }
  return null;
}

function extractClassName(line) {
  const match = line.match(/class\s+(\w+)/);
  return match ? match[1] : null;
}

function extractPrintfContent(line) {
  // C printf: printf("text\n");
  const cMatch = line.match(/printf\s*\(\s*"([^"\\]+)/);
  if (cMatch) return cMatch[1].replace(/\\n$/, '');

  // Rust println!: println!("text");
  const rustMatch = line.match(/println!\s*\(\s*"([^"{}]+)/);
  if (rustMatch) return rustMatch[1];

  // Go fmt.Println: fmt.Println(var)
  const goMatch = line.match(/fmt\.Print(?:ln|f)?\s*\(\s*([^)]+)/);
  if (goMatch) {
    const arg = goMatch[1].replace(/"/g, '').trim();
    return arg;
  }

  // Java System.out.println
  const javaMatch = line.match(/System\.out\.println?\s*\(\s*"?([^")]+)/);
  if (javaMatch) return javaMatch[1];

  return null;
}

function makeSpecificComment(vagueComment, nextLine, commentPrefix) {
  const trimmedNext = nextLine.replace(/___/g, '').trim();

  // Handle // 出力 or # 出力
  if (vagueComment.trim() === '// 出力' || vagueComment.trim() === '# 出力') {
    const content = extractPrintfContent(nextLine);
    if (content) {
      // If it looks like a variable, use varName
      if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(content)) {
        return commentPrefix + ' ' + content + 'を出力';
      }
      // Otherwise use 「content」
      return commentPrefix + ' 「' + content + '」を出力';
    }
  }

  if (vagueComment.includes('結果を表示') || vagueComment.includes('メッセージを表示')) {
    const varName = extractVariableName(nextLine);
    if (varName) {
      const cleanVarName = varName.replace(/\$/, '').replace(/___/, '');
      if (cleanVarName && cleanVarName.trim()) {
        return commentPrefix + ' ' + cleanVarName + 'を表示';
      }
    }
  }

  if (vagueComment.includes('関数を定義')) {
    const funcName = extractFunctionName(nextLine);
    if (funcName && funcName !== '___' && funcName.trim()) {
      return commentPrefix + ' ' + funcName + '関数を定義';
    }
  }

  if (vagueComment.includes('クラスを定義')) {
    const className = extractClassName(nextLine);
    if (className && className !== '___' && className.trim()) {
      return commentPrefix + ' ' + className + 'クラスを定義';
    }
  }

  return null;
}

function fixVagueCommentsInCode(code) {
  const lines = code.split('\n');
  const fixedLines = [];
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const nextLine = lines[i + 1] || '';

    const vaguePatterns = [
      '# 結果を表示',
      '// 結果を表示',
      '# 関数を定義',
      '// 関数を定義',
      '# クラスを定義',
      '// クラスを定義',
      '# メッセージを表示',
      '// メッセージを表示',
      '# 出力',
      '// 出力',
    ];

    let isVague = false;
    for (const pattern of vaguePatterns) {
      if (trimmed === pattern) {
        isVague = true;
        break;
      }
    }

    if (isVague) {
      const prefix = trimmed.startsWith('//') ? '//' : '#';
      const specific = makeSpecificComment(trimmed, nextLine, prefix);
      if (specific) {
        const indent = line.match(/^(\s*)/)[1];
        fixedLines.push(indent + specific);
        changed = true;
        continue;
      }
    }

    fixedLines.push(line);
  }

  return { code: fixedLines.join('\n'), changed };
}

function escapeForJson(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanged = false;

  content = content.replace(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    const decoded = code.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const { code: fixed, changed } = fixVagueCommentsInCode(decoded);
    if (changed) {
      fileChanged = true;
      return '"correctCode": "' + escapeForJson(fixed) + '"';
    }
    return match;
  });

  content = content.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    const decoded = code.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const { code: fixed, changed } = fixVagueCommentsInCode(decoded);
    if (changed) {
      fileChanged = true;
      return '"holeyCode": "' + escapeForJson(fixed) + '"';
    }
    return match;
  });

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed: ' + file);
    totalFixed++;
  }
}

console.log('\n合計 ' + totalFixed + ' ファイルを修正しました。');
