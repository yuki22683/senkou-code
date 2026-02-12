// 曖昧なコメントを検出するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 曖昧なパターン（具体的な値が不明なコメント）
const vaguePatterns = [
  /^#\s*(メッセージを表示|値を表示|結果を表示|出力する)$/,
  /^#\s*(値を返す|結果を返す|戻り値を返す)$/,
  /^#\s*(処理を実行|関数を実行|メソッドを実行)$/,
  /^#\s*(値を[^\s]*に[^\s]*する)$/,
  /^\/\/\s*(メッセージを表示|値を表示|結果を表示|出力する)$/,
  /^\/\/\s*(値を返す|結果を返す|戻り値を返す)$/,
  /^\/\/\s*(処理を実行|関数を実行|メソッドを実行)$/,
  // 「〜を定義」「〜を作成」で具体的な名前がないもの
  /^#\s*(クラスを定義|関数を定義|メソッドを定義)$/,
  /^\/\/\s*(クラスを定義|関数を定義|メソッドを定義)$/,
  // 「値を1つずつ返す」など
  /^#\s*値を1つずつ返す$/,
  /^#\s*値を配列に入れて返す$/,
  /^\/\/\s*値を1つずつ返す$/,
  /^\/\/\s*値を配列に入れて返す$/,
  // 追加: 具体的な変数名/メソッド名がない曖昧なパターン
  /^#\s*.*を属性に保存$/,              // 「〜を属性に保存」（self.xxxに代入と書くべき）
  /^#\s*.*リストで初期化するメソッド.*$/,  // 「〜リストで初期化するメソッド〜」
  /^#\s*len\(\)関数に対応するメソッドを定義$/,  // len()対応メソッドなら__len__と明記
  /^#\s*.*の数を返す$/,                // 「〜の数を返す」（len(self.xxx)を返すと明記）
  /^\/\/\s*.*を属性に保存$/,           // 同上（//コメント用）
  /^\/\/\s*.*の数を返す$/,             // 同上（//コメント用）
  // 追加: 「〜を定義」「〜を作成」系の曖昧パターン（ルール#12）
  /^#\s*(リストを定義|辞書データを定義|辞書を定義|文字列を定義|配列を定義|変数を定義)$/,
  /^\/\/\s*(リストを定義|辞書データを定義|辞書を定義|文字列を定義|配列を定義|変数を定義)$/,
  /^#\s*(配列を作成|リストを作成|辞書を作成|ハッシュを作成|変数を作成)$/,
  /^\/\/\s*(配列を作成|リストを作成|辞書を作成|ハッシュを作成|変数を作成)$/,
  /^#\s*(名前の配列を作る|色の配列を作る|.*という配列を作る)$/,
  /^\/\/\s*(名前の配列を作る|色の配列を作る|.*という配列を作る)$/,
  /^#\s*変数を表示$/,
  /^\/\/\s*変数を表示$/,
  // 追加: 「〜という名前のはこを作る」パターン（具体的な値がない）
  /という名前のはこを作る/,
  /ラベルを貼ったはこを作る/,
  // 追加: 「〜 で配列を作成」「〜 で変数を宣言」など（具体的な値がない）
  /^\/\/\s*(vector|int|string|var|let|const|auto)\s*で\s*(配列を作成|変数を宣言|変数を定義)$/,
  /^\/\/\s*\w+\s*で\s*(オブジェクトを作成|インスタンスを作成)$/,
  /^\/\/\s*(asList|Arrays\.asList)\s*で\s*(リストを作成|配列を作成).*$/,
  /^\/\/\s*null許容型の変数を定義$/,
  /^\/\/\s*新しい型の変数を宣言$/,
  /^#\s*新しい型の変数を宣言$/,
  // 追加: 「メソッドを呼び出す」「関数を呼び出す」パターン（関数名なし or 日本語説明のみ）
  /^\/\/\s*メソッドを呼び出す$/,
  /^#\s*メソッドを呼び出す$/,
  /^\/\/\s*関数を呼び出す$/,
  /^#\s*関数を呼び出す$/,
  // 日本語説明のみ（実際の関数名がない）のパターン
  /^\/\/\s*[ぁ-んァ-ン一-龥]+メソッドを呼び出す$/,  // 「あいさつメソッドを呼び出す」など
  /^#\s*[ぁ-んァ-ン一-龥]+メソッドを呼び出す$/,
  /^\/\/\s*[ぁ-んァ-ン一-龥]+関数を呼び出す$/,  // 「あいさつ関数を呼び出す」など
  /^#\s*[ぁ-んァ-ン一-龥]+関数を呼び出す$/,
  // 追加: 「関数を実行する」「メソッドを実行」パターン（関数名なし or 日本語説明のみ）
  /^\/\/\s*関数を実行する$/,
  /^#\s*関数を実行する$/,
  /^\/\/\s*[ぁ-んァ-ン一-龥]+関数を実行$/,  // 「あいさつ関数を実行」など
  /^#\s*[ぁ-んァ-ン一-龥]+関数を実行$/,
  /^\/\/\s*[ぁ-んァ-ン一-龥]+メソッドを実行$/,  // 「あいさつメソッドを実行」など
  /^#\s*[ぁ-んァ-ン一-龥]+メソッドを実行$/,
];

// より広範な曖昧パターン（警告レベル）
const warnPatterns = [
  /を表示$/,
  /を返す$/,
  /を出力$/,
  /を実行$/,
  /を定義$/,
  /を作成$/,
  /を設定$/,
  /を保存$/,
];

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

function checkForVagueComments(code, filename, fieldName) {
  const issues = [];
  const lines = code.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!isCommentLine(line)) continue;

    // 次の行がコード行（虫食い行）かチェック
    const nextLine = lines[i + 1];
    const hasCodeNext = nextLine && !isCommentLine(nextLine) && nextLine.trim() !== '';

    // 曖昧なパターンをチェック
    for (const pattern of vaguePatterns) {
      if (pattern.test(trimmed)) {
        issues.push({
          line: i + 1,
          comment: trimmed,
          nextLine: nextLine?.trim() || '',
          severity: 'error',
          hasCodeNext
        });
        break;
      }
    }

    // 警告パターンをチェック（具体的な内容がなさそうなもの）
    if (issues.length === 0 || issues[issues.length - 1].line !== i + 1) {
      // コメントが短すぎる、または具体性がない
      const commentContent = trimmed.replace(/^[#\/\-;*{]+\s*/, '');
      if (commentContent.length < 5 && hasCodeNext) {
        issues.push({
          line: i + 1,
          comment: trimmed,
          nextLine: nextLine?.trim() || '',
          severity: 'warn',
          hasCodeNext,
          reason: 'コメントが短すぎる'
        });
      }
    }
  }

  return issues;
}

const files = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

console.log('=== 曖昧なコメント検出 ===\n');

let totalErrors = 0;
let totalWarnings = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');

  // correctCodeをチェック
  const codeMatches = content.matchAll(/"correctCode":\s*"((?:[^"\\]|\\.)*)"/g);
  for (const m of codeMatches) {
    const code = m[1].replace(/\\\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const issues = checkForVagueComments(code, file, 'correctCode');

    if (issues.length > 0) {
      for (const issue of issues) {
        if (issue.severity === 'error') {
          console.log(`[ERROR] ${file} (correctCode line ${issue.line}):`);
          console.log(`  Comment: ${issue.comment}`);
          console.log(`  Next line: ${issue.nextLine}`);
          console.log('');
          totalErrors++;
        }
      }
    }
  }

  // holeyCodeをチェック
  const holeyMatches = content.matchAll(/"holeyCode":\s*"((?:[^"\\]|\\.)*)"/g);
  for (const m of holeyMatches) {
    const code = m[1].replace(/\\\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\'/g, "'");
    const issues = checkForVagueComments(code, file, 'holeyCode');

    if (issues.length > 0) {
      for (const issue of issues) {
        if (issue.severity === 'error') {
          console.log(`[ERROR] ${file} (holeyCode line ${issue.line}):`);
          console.log(`  Comment: ${issue.comment}`);
          console.log(`  Next line: ${issue.nextLine}`);
          console.log('');
          totalErrors++;
        }
      }
    }
  }

  // lineHintsをチェック
  const lineHintsMatches = content.matchAll(/"lineHints":\s*\[([\s\S]*?)\]/g);
  for (const m of lineHintsMatches) {
    const hintsStr = m[1];
    // 各ヒントを抽出（nullと空文字列を除く）
    const hintMatches = hintsStr.matchAll(/"([^"]+)"/g);
    for (const hm of hintMatches) {
      const hint = hm[1];
      if (!hint || hint === 'null') continue;

      // lineHints用の曖昧パターン（コメント記号なし）
      const vagueHintPatterns = [
        /^メソッドを呼び出します。?$/,
        /^関数を呼び出します。?$/,
        /^メソッドを実行します。?$/,
        /^関数を実行します。?$/,
        /^.*のメソッドを呼び出します。?$/,  // 「インスタンスのメソッドを呼び出します」など
        /^.*の関数を呼び出します。?$/,
        /^.*された関数を呼び出します。?$/,  // 「デコレートされた関数を呼び出します」など
        /^.*の関数を実行します。?$/,
      ];

      for (const pattern of vagueHintPatterns) {
        if (pattern.test(hint)) {
          console.log(`[ERROR] ${file} (lineHints):`);
          console.log(`  Hint: ${hint}`);
          console.log('');
          totalErrors++;
          break;
        }
      }
    }
  }
}

console.log(`\n=== 結果 ===`);
console.log(`エラー: ${totalErrors}件`);
console.log(`警告: ${totalWarnings}件`);
