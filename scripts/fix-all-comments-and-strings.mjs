// コメントを具体的に修正し、文字列リテラルを英語化するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 文字列リテラルの翻訳マッピング
const stringTranslations = new Map([
  // 一般的な出力メッセージ
  ['ごうかく！', 'Pass!'],
  ['ごうかく', 'Pass'],
  ['合格！', 'Pass!'],
  ['合格', 'Pass'],
  ['不合格', 'Fail'],
  ['満点！', 'Perfect!'],
  ['大人', 'Adult'],
  ['子供', 'Child'],
  ['おとな', 'Adult'],
  ['こども', 'Child'],
  ['こんにちは', 'Hello'],
  ['さようなら', 'Goodbye'],
  ['ボーナスあり合格', 'Pass with bonus'],
  ['ボーナスあり', 'Bonus'],
  ['20代です', 'In 20s'],
  ['大きい', 'Big'],
  ['小さい', 'Small'],

  // 名前
  ['たろう', 'Taro'],
  ['太郎', 'Taro'],
  ['はなこ', 'Hanako'],
  ['花子', 'Hanako'],
  ['田中', 'Tanaka'],

  // 色
  ['あか', 'red'],
  ['あお', 'blue'],
  ['赤', 'red'],
  ['青', 'blue'],
  ['緑', 'green'],

  // 果物
  ['りんご', 'apple'],
  ['みかん', 'orange'],
  ['ぶどう', 'grape'],
  ['バナナ', 'banana'],
  ['オレンジ', 'orange'],

  // 動物
  ['犬', 'dog'],
  ['猫', 'cat'],
  ['鳥', 'bird'],

  // フォーマット文字列
  ['私は${age}歳です', 'I am ${age} years old'],
  ['私は %d 歳です', 'I am %d years old'],
  ['私は\" + age + \"歳です', 'I am \" + age + \" years old'],
  ['私は{age}歳です', 'I am {age} years old'],
  ['私は#{age}歳です', 'I am #{age} years old'],
  ['私は', 'I am '],
  ['歳です', ' years old'],

  // 追加の文字列
  ['は楽しい！', ' is fun!'],
  ['今日の日付', "Today's date"],
  ['関数を呼び出します', 'Calling function'],
  ['入門', 'Introduction'],
  ['ざんねん', 'Too bad'],
]);

// コメント行かどうかを判定
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

// 日本語を含むかチェック
function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

// 文字列リテラル内の日本語のみを翻訳（コメントは除外）
function translateStringLiteralsInCode(code) {
  const lines = code.split('\\n');
  const translatedLines = lines.map(line => {
    // コメント行はそのまま返す
    if (isCommentLine(line)) {
      return line;
    }

    // コード部分の文字列リテラル内の日本語を翻訳
    let translated = line;

    // シングルクォート文字列 'xxx'
    translated = translated.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (match, content) => {
      if (!containsJapanese(content)) return match;
      let newContent = content;
      for (const [jp, en] of stringTranslations) {
        newContent = newContent.split(jp).join(en);
      }
      return `'${newContent}'`;
    });

    // ダブルクォート文字列 \"xxx\"
    translated = translated.replace(/\\"([^"\\]*(?:\\.[^"\\]*)*)\\"/g, (match, content) => {
      if (!containsJapanese(content)) return match;
      let newContent = content;
      for (const [jp, en] of stringTranslations) {
        newContent = newContent.split(jp).join(en);
      }
      return `\\"${newContent}\\"`;
    });

    return translated;
  });

  return translatedLines.join('\\n');
}

// ファイルを処理
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const original = content;

  // correctCode を処理
  content = content.replace(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    if (!containsJapanese(code)) return match;
    const translated = translateStringLiteralsInCode(code);
    if (translated !== code) {
      return `"correctCode": "${translated}"`;
    }
    return match;
  });

  // holeyCode を処理
  content = content.replace(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g, (match, code) => {
    if (!containsJapanese(code)) return match;
    const translated = translateStringLiteralsInCode(code);
    if (translated !== code) {
      return `"holeyCode": "${translated}"`;
    }
    return match;
  });

  // correctLines を処理（各行を個別に処理）
  content = content.replace(/"correctLines":\s*\[([\s\S]*?)\]/g, (match, linesContent) => {
    if (!containsJapanese(linesContent)) return match;

    let newContent = linesContent.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (lineMatch, lineContent) => {
      if (!containsJapanese(lineContent)) return lineMatch;

      // この行がコメント行かチェック
      const decodedLine = lineContent.replace(/\\n/g, '\n').replace(/\\"/g, '"');
      if (isCommentLine(decodedLine)) {
        return lineMatch; // コメント行はそのまま
      }

      // 文字列リテラル内の日本語のみ翻訳
      let translated = lineContent;

      // シングルクォート内
      translated = translated.replace(/'([^'\\]*)'/g, (m, c) => {
        if (!containsJapanese(c)) return m;
        let t = c;
        for (const [jp, en] of stringTranslations) {
          t = t.split(jp).join(en);
        }
        return `'${t}'`;
      });

      // エスケープされたダブルクォート内
      translated = translated.replace(/\\"([^"\\]*)\\"/g, (m, c) => {
        if (!containsJapanese(c)) return m;
        let t = c;
        for (const [jp, en] of stringTranslations) {
          t = t.split(jp).join(en);
        }
        return `\\"${t}\\"`;
      });

      if (translated !== lineContent) {
        return `"${translated}"`;
      }
      return lineMatch;
    });

    if (newContent !== linesContent) {
      return `"correctLines": [${newContent}]`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// メイン処理
const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

let fixedCount = 0;
for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  if (processFile(filePath)) {
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`\nTotal: ${fixedCount} files fixed`);
