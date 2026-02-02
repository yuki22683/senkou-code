// コード内の文字列リテラルを日本語から英語に翻訳するスクリプト
// コメントは日本語のまま維持する
// 【警告】このスクリプトは1回のみ実行可能。複数回実行すると破損する。
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// ========== 安全チェック ==========
// 破損パターンを検出して実行を中断する
function checkForCorruption() {
  const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');
  const corruptionPattern = /\d{2}[a-zA-Z]+[a-zA-Z]+ = /;
  const corruptedFiles = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
    if (corruptionPattern.test(content)) {
      corruptedFiles.push(file);
    }
  }

  if (corruptedFiles.length > 0) {
    console.error('【エラー】破損が検出されました。スクリプトを中断します。');
    console.error('破損ファイル:', corruptedFiles.join(', '));
    console.error('手動で修正してから再実行してください。');
    process.exit(1);
  }

  // 既に英語化済みかどうかをチェック（日本語文字列が少ない場合は警告）
  let japaneseCount = 0;
  for (const file of files) {
    const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
    // correctCode/holeyCode内の日本語文字列をカウント
    const matches = content.match(/"correctCode":\s*"[^"]*[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF][^"]*"/g);
    if (matches) {
      japaneseCount += matches.length;
    }
  }

  if (japaneseCount < 10) {
    console.warn('【警告】日本語文字列が少ないです（' + japaneseCount + '件）。');
    console.warn('既に翻訳済みの可能性があります。本当に実行しますか？');
    console.warn('5秒後に続行します... Ctrl+C で中断できます。');
    // 同期的に5秒待機
    const start = Date.now();
    while (Date.now() - start < 5000) {}
  }

  console.log('安全チェック完了。処理を開始します。');
}

checkForCorruption();

// 日本語→英語の翻訳マッピング
const translations = new Map([
  // 一般的な挨拶・メッセージ
  ['こんにちは', 'Hello'],
  ['ごうかく！', 'Pass!'],
  ['ごうかく', 'Pass'],
  ['合格！', 'Pass!'],
  ['合格', 'Pass'],
  ['不合格', 'Fail'],
  ['おとな', 'Adult'],
  ['こども', 'Child'],
  ['大人', 'Adult'],
  ['子供', 'Child'],
  ['大人です', 'Adult'],
  ['子供です', 'Child'],
  ['Adultです', 'Adult'],

  // 色
  ['赤', 'red'],
  ['青', 'blue'],
  ['緑', 'green'],
  ['黄色', 'yellow'],
  ['あか', 'red'],
  ['あお', 'blue'],
  ['オレンジ', 'orange'],

  // 果物
  ['りんご', 'apple'],
  ['バナナ', 'banana'],
  ['みかん', 'orange'],

  // 名前
  ['太郎', 'Taro'],
  ['花子', 'Hanako'],
  ['たろう', 'Taro'],
  ['はなこ', 'Hanako'],

  // メッセージ
  ['私は{age}歳です', "I am {age} years old"],
  ['ボーナスあり合格', 'Pass with bonus'],
  ['ボーナスありPass', 'Pass with bonus'],
  ['20代です', 'In 20s'],
  ['関数を呼び出します', 'Calling function'],
  ['は楽しい！', ' is fun!'],
  ['大きい', 'big'],
  ['小さい', 'small'],

  // 動物
  ['犬', 'dog'],
  ['猫', 'cat'],
  ['鳥', 'bird'],

  // 果物追加
  ['ぶどう', 'grape'],

  // 書籍・人名
  ['Python入門', 'Python Basics'],
  ['田中', 'Tanaka'],

  // その他
  ['ざんねん', 'Sorry'],
  ['今日の日付', "Today's date"],

  // 年齢関連
  ['歳です', ' years old'],
  ['私は', 'I am '],
]);

function isCommentLine(line) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('//') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('--') ||
    trimmed.startsWith(';') ||
    trimmed.startsWith('/*') ||
    trimmed.startsWith('*') ||
    trimmed.startsWith('{-')
  );
}

function translateStringLiterals(code) {
  const lines = code.split('\n');
  const translatedLines = [];
  let changed = false;

  for (const line of lines) {
    // コメント行はスキップ
    if (isCommentLine(line)) {
      translatedLines.push(line);
      continue;
    }

    let translatedLine = line;

    // 文字列リテラル内の日本語を翻訳
    for (const [japanese, english] of translations) {
      // シングルクォートとダブルクォートの両方をチェック
      const patterns = [
        new RegExp(`'${japanese}'`, 'g'),
        new RegExp(`"${japanese}"`, 'g'),
        // 文字列の一部として含まれている場合
        new RegExp(`'([^']*?)${japanese}([^']*?)'`, 'g'),
        new RegExp(`"([^"]*?)${japanese}([^"]*?)"`, 'g'),
      ];

      for (const pattern of patterns) {
        if (pattern.test(translatedLine)) {
          translatedLine = translatedLine.replace(pattern, (match, p1, p2) => {
            if (p1 !== undefined && p2 !== undefined) {
              // 部分マッチの場合
              const quote = match.startsWith("'") ? "'" : '"';
              return `${quote}${p1}${english}${p2}${quote}`;
            }
            // 完全マッチの場合
            const quote = match.startsWith("'") ? "'" : '"';
            return `${quote}${english}${quote}`;
          });
          changed = true;
        }
      }
    }

    translatedLines.push(translatedLine);
  }

  return { code: translatedLines.join('\n'), changed };
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

  // correctCode
  content = content.replace(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    const decoded = code.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const { code: translated, changed } = translateStringLiterals(decoded);
    if (changed) {
      fileChanged = true;
      return `"correctCode": "${escapeForJson(translated)}"`;
    }
    return match;
  });

  // holeyCode
  content = content.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    const decoded = code.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const { code: translated, changed } = translateStringLiterals(decoded);
    if (changed) {
      fileChanged = true;
      return `"holeyCode": "${escapeForJson(translated)}"`;
    }
    return match;
  });

  // correctLines
  content = content.replace(/"correctLines":\s*\[([\s\S]*?)\]/g, (match, linesContent) => {
    let changed = false;
    const fixed = linesContent.replace(/"((?:[^"\\]|\\.)*)"/g, (lineMatch, line) => {
      const decoded = line.replace(/\\\\/g, '\\').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");

      // コメント行でなければ翻訳
      if (!isCommentLine(decoded)) {
        const { code: translated, changed: lineChanged } = translateStringLiterals(decoded);
        if (lineChanged) {
          changed = true;
          return `"${escapeForJson(translated)}"`;
        }
      }

      return lineMatch;
    });

    if (changed) {
      fileChanged = true;
      return `"correctLines": [${fixed}]`;
    }
    return match;
  });

  if (fileChanged) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Translated: ${file}`);
    totalFixed++;
  }
}

console.log(`\n合計 ${totalFixed} ファイルを翻訳しました。`);
