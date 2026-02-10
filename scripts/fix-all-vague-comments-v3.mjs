// 全ての曖昧なコメントを修正するスクリプト v3
// holeyCodeの曖昧コメントを、correctCodeの対応行から具体的なコメントに変換
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

function isCommentLine(line) {
  const trimmed = line.trim();
  return trimmed.startsWith('//') || trimmed.startsWith('#');
}

function isVagueComment(line) {
  const trimmed = line.trim();
  const patterns = [
    '// 値を返す',
    '# 値を返す',
    '// 関数を定義',
    '# 関数を定義',
    '// メソッドを定義',
    '// クラスを定義',
    '# 配列を定義',
  ];
  return patterns.includes(trimmed);
}

function findMatchingCorrectLine(holeyNextLine, correctLines) {
  // ___をワイルドカードパターンに変換
  const holeyClean = holeyNextLine.trim();

  // holeyCodeの構造パターンを作成
  // スペースを柔軟にマッチ、___を識別子にマッチ
  const pattern = holeyClean
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')  // 正規表現のエスケープ
    .replace(/\s+/g, '\\s*')  // スペースを柔軟に
    .replace(/___/g, '\\w+');  // ___を識別子にマッチ

  try {
    const regex = new RegExp('^\\s*' + pattern + '\\s*$');
    for (const correctLine of correctLines) {
      if (regex.test(correctLine)) {
        return correctLine;
      }
    }
  } catch (e) {
    // regex error
  }

  // フォールバック: 特定のパターンを直接検索
  // Go関数: func ___ () { → func main() {
  if (holeyClean.match(/func\s+___\s*\(\)/)) {
    for (const correctLine of correctLines) {
      if (correctLine.match(/func\s+\w+\s*\(\)/)) {
        return correctLine;
      }
    }
  }

  // return文: ___ ___; → return 0;
  if (holeyClean.match(/^___\s+___\s*;?$/)) {
    for (const correctLine of correctLines) {
      if (correctLine.match(/^\s*return\s+/)) {
        return correctLine;
      }
    }
  }

  // Perl配列: @___ = (...) or my @___ = (...)
  if (holeyClean.match(/@___\s*=/)) {
    for (const correctLine of correctLines) {
      if (correctLine.match(/@\w+\s*=/)) {
        return correctLine;
      }
    }
  }

  return null;
}

function makeSpecificComment(vagueComment, matchedCorrectLine, commentPrefix) {
  const trimmedVague = vagueComment.trim();
  const trimmedCorrect = matchedCorrectLine.trim();

  if (trimmedVague === '// 値を返す' || trimmedVague === '# 値を返す') {
    const match = trimmedCorrect.match(/return\s+(.+?)\s*;?\s*$/);
    if (match) {
      const returnValue = match[1].trim();
      if (returnValue.length < 40) {
        return commentPrefix + ' ' + returnValue + 'を返す';
      }
    }
    return null;
  }

  if (trimmedVague === '// 関数を定義' || trimmedVague === '# 関数を定義') {
    const patterns = [
      /func\s+(\w+)/,
      /function\s+(\w+)/,
      /def\s+(\w+)/,
      /(?:void|int|string|bool|double|float|String|Integer|boolean)\s+(\w+)\s*\(/,
    ];
    for (const pattern of patterns) {
      const match = trimmedCorrect.match(pattern);
      if (match) {
        return commentPrefix + ' ' + match[1] + '関数を定義';
      }
    }
    if (trimmedCorrect.includes('main')) {
      return commentPrefix + ' main関数を定義';
    }
    return null;
  }

  if (trimmedVague === '// メソッドを定義') {
    const match = trimmedCorrect.match(/(?:void|int|String|boolean|public|private|static)\s+(\w+)\s*\(/);
    if (match) {
      return commentPrefix + ' ' + match[1] + 'メソッドを定義';
    }
    return null;
  }

  if (trimmedVague === '// クラスを定義') {
    const match = trimmedCorrect.match(/class\s+(\w+)/);
    if (match) {
      return commentPrefix + ' ' + match[1] + 'クラスを定義';
    }
    return null;
  }

  if (trimmedVague === '# 配列を定義') {
    const match = trimmedCorrect.match(/(\w+)\s*=\s*\[(.+)\]/);
    if (match) {
      const varName = match[1];
      const content = match[2].length < 30 ? match[2] : '...';
      return commentPrefix + ' ' + varName + 'に[' + content + ']を代入';
    }
    return null;
  }

  return null;
}

// TSファイル内のJSON文字列をデコード（\\n → \n）
function decodeJsonString(str) {
  // TSファイル内では \\n が2バックスラッシュ+n として保存されている
  // JavaScriptの正規表現では \\\\n で2バックスラッシュ+nにマッチ
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
let totalComments = 0;

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let fileChanged = false;

  // correctCodeとholeyCodeのペアを抽出
  const pairRegex = /"correctCode":\s*"((?:[^"\\]|\\.)*)"\s*,\s*"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g;

  content = content.replace(pairRegex, (match, correctEncoded, holeyEncoded) => {
    const correctCode = decodeJsonString(correctEncoded);
    const holeyCode = decodeJsonString(holeyEncoded);

    const correctLines = correctCode.split('\n');
    const holeyLines = holeyCode.split('\n');

    const fixedHoleyLines = [];
    let changed = false;

    for (let i = 0; i < holeyLines.length; i++) {
      const line = holeyLines[i];

      if (isVagueComment(line)) {
        // 次の非コメント行を探す
        let nextIdx = i + 1;
        let foundMatch = false;

        while (nextIdx < holeyLines.length) {
          const nextLine = holeyLines[nextIdx];
          const nextTrimmed = nextLine.trim();

          if (nextTrimmed && !isCommentLine(nextTrimmed)) {
            // correctCodeから対応する行を探す
            const matchedCorrectLine = findMatchingCorrectLine(nextLine, correctLines);

            if (matchedCorrectLine) {
              const prefix = line.trim().startsWith('//') ? '//' : '#';
              const specificComment = makeSpecificComment(line, matchedCorrectLine, prefix);

              if (specificComment) {
                const indent = line.match(/^(\s*)/)[1];
                fixedHoleyLines.push(indent + specificComment);
                changed = true;
                totalComments++;
                foundMatch = true;
              }
            }
            break;
          }
          nextIdx++;
        }

        if (!foundMatch) {
          fixedHoleyLines.push(line);
        }
      } else {
        fixedHoleyLines.push(line);
      }
    }

    if (changed) {
      fileChanged = true;
      const fixedHoleyCode = fixedHoleyLines.join('\n');
      return '"correctCode": "' + correctEncoded + '", "holeyCode": "' + escapeForJson(fixedHoleyCode) + '"';
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
console.log('修正したコメント数: ' + totalComments);
