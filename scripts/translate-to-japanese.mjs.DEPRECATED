// コード内の文字列リテラルを英語から日本語に翻訳するスクリプト
// コメントはそのまま維持する
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 英語→日本語の翻訳マッピング（長いものから先にマッチさせる）
const translations = new Map([
  // 完全な文・フレーズ（長いものから）
  ['Hello, World!', 'こんにちは、世界！'],
  ['Hello World!', 'こんにちは、世界！'],
  ['Hello World', 'こんにちは、世界'],
  ['hello world', 'こんにちは、世界'],
  ['Pass with bonus', 'ボーナスあり合格'],
  ['I am {age} years old', '私は{age}歳です'],
  [' is fun!', 'は楽しい！'],
  [' years old', '歳です'],
  ['I am ', '私は'],
  ['In 20s', '20代です'],
  ['Calling function', '関数を呼び出します'],
  ['Python Basics', 'Python入門'],
  ["Today's date", '今日の日付'],
  ['Async works!', '非同期成功！'],
  ['Error!', 'エラー！'],
  ['Invalid input', '無効な入力'],
  ['Not found', '見つかりません'],
  ['Division by zero', 'ゼロ除算エラー'],
  ['File not found', 'ファイルが見つかりません'],
  ['Invalid age', '無効な年齢'],
  ['Connection failed', '接続失敗'],
  ['Operation completed', '操作完了'],
  ['Task done', 'タスク完了'],
  ['Loading...', '読み込み中...'],
  ['Success!', '成功！'],
  ['Failed!', '失敗！'],
  ['Welcome!', 'ようこそ！'],
  ['Goodbye!', 'さようなら！'],
  ['Thank you!', 'ありがとう！'],
  ['Good morning', 'おはよう'],
  ['Good night', 'おやすみ'],
  ['See you', 'またね'],
  ['Hi there', 'やあ'],

  // 挨拶・メッセージ
  ['Hello!', 'こんにちは！'],
  ['Hello', 'こんにちは'],
  ['hello', 'こんにちは'],
  ['Pass!', '合格！'],
  ['Pass', '合格'],
  ['Fail', '不合格'],
  ['Adult', '大人'],
  ['Child', '子供'],
  ['Minor', '未成年'],
  ['Sorry', 'ごめんね'],
  ['Yes', 'はい'],
  ['No', 'いいえ'],
  ['OK', 'OK'],
  ['Cancel', 'キャンセル'],
  ['Error', 'エラー'],
  ['Warning', '警告'],
  ['Info', '情報'],
  ['Success', '成功'],
  ['Excellent', '優秀'],
  ['Good', '良い'],
  ['Bad', '悪い'],
  ['Great', 'すごい'],
  ['Nice', 'いいね'],

  // 色
  ['red', '赤'],
  ['blue', '青'],
  ['green', '緑'],
  ['yellow', '黄色'],
  ['orange', 'オレンジ'],
  ['purple', '紫'],
  ['pink', 'ピンク'],
  ['white', '白'],
  ['black', '黒'],
  ['gray', 'グレー'],
  ['brown', '茶色'],

  // 果物・食べ物
  ['apple', 'りんご'],
  ['Apple', 'りんご'],
  ['banana', 'バナナ'],
  ['Banana', 'バナナ'],
  ['orange', 'みかん'],
  ['grape', 'ぶどう'],
  ['strawberry', 'いちご'],
  ['melon', 'メロン'],
  ['peach', 'もも'],
  ['cherry', 'さくらんぼ'],
  ['lemon', 'レモン'],
  ['mango', 'マンゴー'],
  ['kiwi', 'キウイ'],
  ['pineapple', 'パイナップル'],
  ['watermelon', 'スイカ'],
  ['fruits', 'くだもの'],
  ['Fruits', 'くだもの'],

  // 人名
  ['Taro', '太郎'],
  ['Hanako', '花子'],
  ['Alice', 'アリス'],
  ['Bob', 'ボブ'],
  ['Charlie', 'チャーリー'],
  ['David', 'デイビッド'],
  ['Emma', 'エマ'],
  ['Frank', 'フランク'],
  ['Grace', 'グレース'],
  ['Henry', 'ヘンリー'],
  ['John', 'ジョン'],
  ['Jane', 'ジェーン'],
  ['Mike', 'マイク'],
  ['Lisa', 'リサ'],
  ['Tom', 'トム'],
  ['Mary', 'メアリー'],
  ['Ken', 'ケン'],
  ['Nancy', 'ナンシー'],
  ['Tanaka', '田中'],
  ['Suzuki', '鈴木'],
  ['Yamada', '山田'],
  ['Sato', '佐藤'],
  ['Guest', 'ゲスト'],
  ['User', 'ユーザー'],
  ['Admin', '管理者'],

  // 動物・ペット名
  ['Pochi', 'ポチ'],
  ['Tama', 'タマ'],
  ['Shiro', 'シロ'],
  ['Kuro', 'クロ'],
  ['Meow!', 'ニャー！'],
  ['Woof!', 'ワン！'],
  ['Bark!', 'ワン！'],
  ['dog', '犬'],
  ['Dog', '犬'],
  ['cat', '猫'],
  ['Cat', '猫'],
  ['bird', '鳥'],
  ['Bird', '鳥'],
  ['fish', '魚'],
  ['rabbit', 'うさぎ'],
  ['hamster', 'ハムスター'],
  ['turtle', 'カメ'],
  ['mouse', 'ネズミ'],

  // サイズ・状態
  ['big', '大きい'],
  ['Big', '大きい'],
  ['small', '小さい'],
  ['Small', '小さい'],
  ['large', '大きい'],
  ['medium', '中くらい'],
  ['found', '見つかった'],
  ['not found', '見つからない'],
  ['pending', '保留中'],
  ['completed', '完了'],
  ['cancelled', 'キャンセル済み'],
  ['active', 'アクティブ'],
  ['inactive', '非アクティブ'],
  ['enabled', '有効'],
  ['disabled', '無効'],
  ['success', '成功'],
  ['error', 'エラー'],
  ['moving', '移動中'],

  // プログラミング関連（言語名は維持）
  ['name', '名前'],
  ['age', '年齢'],
  ['click', 'クリック'],
  ['scroll', 'スクロール'],
  ['mouseover', 'マウスオーバー'],
  ['hover', 'ホバー'],
  ['submit', '送信'],
  ['reset', 'リセット'],
  ['load', '読み込み'],
  ['save', '保存'],
  ['delete', '削除'],
  ['update', '更新'],
  ['create', '作成'],
  ['edit', '編集'],
  ['search', '検索'],
  ['filter', 'フィルター'],
  ['sort', '並び替え'],
  ['default', 'デフォルト'],
  ['secret', '秘密'],
  ['password', 'パスワード'],
  ['username', 'ユーザー名'],
  ['email', 'メール'],
  ['message', 'メッセージ'],
  ['title', 'タイトル'],
  ['content', '内容'],
  ['description', '説明'],
  ['category', 'カテゴリ'],
  ['tag', 'タグ'],
  ['item', 'アイテム'],
  ['list', 'リスト'],
  ['data', 'データ'],
  ['value', '値'],
  ['key', 'キー'],
  ['result', '結果'],
  ['output', '出力'],
  ['input', '入力'],

  // その他
  ['world', '世界'],
  ['World', '世界'],
  ['Hello Async!', '非同期こんにちは！'],
  ['abc', 'あいう'],
  ['ABC', 'ABC'],
  ['test', 'テスト'],
  ['Test', 'テスト'],
  ['example', '例'],
  ['Example', '例'],
  ['sample', 'サンプル'],
  ['Sample', 'サンプル'],
  ['demo', 'デモ'],
  ['Demo', 'デモ'],
]);

// 翻訳をソート（長いものから先に処理するため）
const sortedTranslations = [...translations.entries()].sort((a, b) => b[0].length - a[0].length);

function isCommentLine(line) {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('//') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('--') ||
    trimmed.startsWith(';') ||
    trimmed.startsWith('/*') ||
    trimmed.startsWith('*') ||
    trimmed.startsWith('{-') ||
    trimmed.startsWith('REM ') ||
    trimmed.startsWith("'") && trimmed.length > 1 && !trimmed.match(/^'[^']+'\s*$/) // VB comment but not string
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

    // 文字列リテラル内の英語を翻訳（長いものから先に）
    for (const [english, japanese] of sortedTranslations) {
      // シングルクォート、ダブルクォート、バッククォートをチェック
      const quotes = ["'", '"', '`'];

      for (const quote of quotes) {
        // 完全マッチ: 'Hello' → 'こんにちは'
        const exactPattern = new RegExp(`${quote}${escapeRegex(english)}${quote}`, 'g');
        if (exactPattern.test(translatedLine)) {
          translatedLine = translatedLine.replace(exactPattern, `${quote}${japanese}${quote}`);
          changed = true;
        }

        // 部分マッチ: 'Hello World' → 'こんにちは 世界'
        // ただしコメント部分は除外
        const partialPattern = new RegExp(`(${quote}[^${quote}]*?)${escapeRegex(english)}([^${quote}]*?${quote})`, 'g');
        if (partialPattern.test(translatedLine)) {
          translatedLine = translatedLine.replace(partialPattern, `$1${japanese}$2`);
          changed = true;
        }
      }
    }

    translatedLines.push(translatedLine);
  }

  return { code: translatedLines.join('\n'), changed };
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

console.log(`\n合計 ${totalFixed} ファイルを日本語化しました。`);
