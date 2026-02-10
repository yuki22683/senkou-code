// 全ての曖昧なコメントを修正するスクリプト - 最終版
// correctCodeとholeyCode両方を修正
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

const vaguePatterns = [
  '// 値を返す',
  '# 値を返す',
  '// 関数を定義',
  '# 関数を定義',
  '// メソッドを定義',
  '// クラスを定義',
  '# 配列を定義',
];

function isVagueComment(line) {
  const trimmed = line.trim();
  return vaguePatterns.includes(trimmed);
}

function isCommentLine(line) {
  const trimmed = line.trim();
  return trimmed.startsWith('//') || trimmed.startsWith('#');
}

function makeSpecificComment(vagueComment, nextLine, commentPrefix) {
  const trimmedVague = vagueComment.trim();
  const trimmedNext = nextLine.trim();

  // 値を返す
  if (trimmedVague === '// 値を返す' || trimmedVague === '# 値を返す') {
    const match = trimmedNext.match(/return\s+(.+?)\s*;?\s*$/);
    if (match) {
      const returnValue = match[1].trim();
      if (returnValue.length < 40) {
        return commentPrefix + ' ' + returnValue + 'を返す';
      }
    }
    return null;
  }

  // 関数を定義
  if (trimmedVague === '// 関数を定義' || trimmedVague === '# 関数を定義') {
    const patterns = [
      /func\s+(\w+)/,
      /function\s+(\w+)/,
      /def\s+(\w+)/,
      /sub\s+(\w+)/,  // Perl
      /fn\s+(\w+)/,   // Rust
      /(?:void|int|string|bool|double|float|String|Integer|boolean|char)\s+(\w+)\s*\(/,
    ];
    for (const pattern of patterns) {
      const match = trimmedNext.match(pattern);
      if (match) {
        return commentPrefix + ' ' + match[1] + '関数を定義';
      }
    }
    // main関数のフォールバック
    if (trimmedNext.includes('main')) {
      return commentPrefix + ' main関数を定義';
    }
    return null;
  }

  // メソッドを定義
  if (trimmedVague === '// メソッドを定義') {
    const patterns = [
      /(?:public|private|protected|static)?\s*(?:void|int|String|boolean|char|double|float)?\s*(\w+)\s*\(/,
      /fn\s+(\w+)/,
      /func\s+(\w+)/,
    ];
    for (const pattern of patterns) {
      const match = trimmedNext.match(pattern);
      if (match && match[1] !== 'if' && match[1] !== 'for' && match[1] !== 'while') {
        return commentPrefix + ' ' + match[1] + 'メソッドを定義';
      }
    }
    return null;
  }

  // クラスを定義
  if (trimmedVague === '// クラスを定義') {
    const match = trimmedNext.match(/class\s+(\w+)/);
    if (match) {
      return commentPrefix + ' ' + match[1] + 'クラスを定義';
    }
    return null;
  }

  // 配列を定義 (Perl)
  if (trimmedVague === '# 配列を定義') {
    // my @words = ("hello", "world");
    const match = trimmedNext.match(/(?:my\s+)?@(\w+)\s*=\s*\((.+)\)/);
    if (match) {
      const varName = match[1];
      const content = match[2].length < 30 ? match[2] : '...';
      return commentPrefix + ' @' + varName + 'に(' + content + ')を代入';
    }
    return null;
  }

  return null;
}

function fixVagueCommentsInCode(code) {
  const lines = code.split('\n');
  const fixedLines = [];
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (isVagueComment(line)) {
      // 次の非コメント、非空行を探す
      let nextIdx = i + 1;
      while (nextIdx < lines.length) {
        const nextLine = lines[nextIdx].trim();
        if (nextLine && !isCommentLine(nextLine)) {
          const prefix = line.trim().startsWith('//') ? '//' : '#';
          const specificComment = makeSpecificComment(line, lines[nextIdx], prefix);

          if (specificComment) {
            const indent = line.match(/^(\s*)/)[1];
            fixedLines.push(indent + specificComment);
            changed = true;
          } else {
            fixedLines.push(line);
          }
          break;
        }
        nextIdx++;
      }
      if (nextIdx >= lines.length) {
        fixedLines.push(line);
      }
    } else {
      fixedLines.push(line);
    }
  }

  return { code: fixedLines.join('\n'), changed };
}

function decodeJsonString(str) {
  return str
    .replace(/\\\\n/g, '\n')
    .replace(/\\\\t/g, '\t')
    .replace(/\\\\r/g, '\r')
    .replace(/\\\\"/g, '"')
    .replace(/\\\\/g, '\\');
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

  // correctCodeを修正
  content = content.replace(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    const decoded = decodeJsonString(code);
    const { code: fixed, changed } = fixVagueCommentsInCode(decoded);
    if (changed) {
      fileChanged = true;
      return '"correctCode": "' + escapeForJson(fixed) + '"';
    }
    return match;
  });

  // holeyCodeを修正
  content = content.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    const decoded = decodeJsonString(code);
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
