// コード内の日本語コメントを英語に翻訳するスクリプト v2
// パターンマッチングベースのより包括的な翻訳
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// ===== 完全一致マッピング（高頻度パターン優先）=====
const exactTranslations = new Map([
  // C# (高頻度)
  ['usingでSystem名前空間をインポート', 'Import System namespace'],
  ['usingでLinq名前空間をインポート', 'Import Linq namespace'],
  ['Programクラスを定義', 'Define Program class'],
  ['Mainメソッドを定義', 'Define Main method'],
  ['10 を 3 で割ったあまりを出力する', 'Print 10 mod 3'],

  // Java (高頻度)
  ['main 関数を定義する', 'Define main function'],
  ['println で出力する', 'Print with println'],
  ['asList でリストを作成する', 'Create list with asList'],

  // 共通 (高頻度)
  ['結果を表示', 'Print result'],
  ['endで終了', 'End block'],
  ['標準入出力ライブラリを読み込む', 'Include stdio library'],
  ['mainはプログラムのエントリーポイント', 'main is the entry point'],
  ['正常終了を示す0を返す', 'Return 0 for success'],
  ['システムコールを実行', 'Execute syscall'],
  ['classでクラスを定義', 'Define class'],
  ['class でクラスを定義', 'Define class'],
  ['テキストセクションを宣言', 'Declare text section'],
  ['データセクションを宣言', 'Declare data section'],
  ['エントリーポイントを公開', 'Export entry point'],
  ['プログラムの開始地点', 'Program start'],
  ['printで出力', 'Print output'],
  ['インスタンスを作成', 'Create instance'],
  ['60は終了コマンド', '60 is exit syscall'],
  ['関数を呼び出し', 'Call function'],
  ['画面に出力', 'Print to screen'],
  ['関数を定義', 'Define function'],
  ['new でインスタンスを作成する', 'Create instance with new'],
  ['newでインスタンスを作成', 'Create instance with new'],
  ['2番目のデータ（インデックス1）を出す', 'Get 2nd element (index 1)'],
  ['echoで出力', 'Print with echo'],
  ['配列を作成', 'Create array'],
  ['scoreに100を入れる', 'Set score to 100'],
  ['score に 100 を入れる', 'Set score to 100'],
  ['scoreに50を入れる', 'Set score to 50'],
  ['scoreに85を入れる', 'Set score to 85'],
  ['20以上かを比較する演算子', 'Comparison operator >= 20'],
  ['+= で 20 を足す', 'Add 20 with +='],
  ['-= で 50 を引く', 'Subtract 50 with -='],
  ['80以上 かつ 100以下 ならメッセージを出す', 'Print message if 80-100'],
  ['vector で配列を作成', 'Create vector array'],
  ['&& で両方の条件をチェック', 'Check both with &&'],
  ['xを入力', 'Input x'],
  ['mapで各要素を変換', 'Map each element'],
  ['resultを出力', 'Print result'],
  ['result を出力する', 'Print result'],
  ['SELECTで列を取得', 'Get columns with SELECT'],
  ['SELECTでデータを取得', 'Get data with SELECT'],
  ['出力', 'Print'],
  ['+でたし算', 'Addition with +'],
  ['変数に文字列を代入', 'Assign string to variable'],
  ['ageに10を入れる', 'Set age to 10'],
  ['順番に取り出すループ', 'Loop in order'],
  ['取り出した名前を表示', 'Print extracted name'],
  ['defmoduleでモジュールを定義', 'Define module'],
  ['> で比較する', 'Compare with >'],
  ['put でキーと値を追加する', 'Add key-value with put'],
  ['辞書を作る（キーは\'みかん\'、値は\'オレンジ\'）', 'Create dict (mikan: orange)'],
  ['中身を出す', 'Print contents'],
  ['functionで関数を定義', 'Define function'],
  ['publicでアクセス修飾子', 'Public access modifier'],
  ['要素を追加', 'Add element'],
  ['名前を出力', 'Print name'],
  ['結果をrdiにコピー', 'Copy result to rdi'],
  ['rdiを0にクリア', 'Clear rdi to 0'],
  ['はこに数字を入れる', 'Put number in box'],
  ['20歳以上のときのメッセージ（\'Adult\'）', 'Message if age >= 20 (Adult)'],
  ['20歳以上のときのメッセージ（\'おとな\'）', 'Message if age >= 20 (adult)'],
  ['それ以外のメッセージ（\'Minor\'）', 'Message for else (Minor)'],
  ['それ以外のメッセージ（\'こども\'）', 'Message for else (child)'],
  ['その他の場合', 'Else case'],
  [': で範囲for文', 'Range for with :'],
  ['はこの中身を画面に出す', 'Print box contents'],
  ['xというはこに 10 を入れる', 'Set box x to 10'],
  ['yというはこに 5 を入れる', 'Set box y to 5'],
  ['x と y をたした答えを出す', 'Print x + y'],
  ['ageというはこに 10 を入れる', 'Set box age to 10'],
  ['age というはこに 10 を入れる', 'Set box age to 10'],
  ['else でそれ以外の場合', 'Else case'],
  ['メソッドを呼び出す', 'Call method'],
  ['int型のListを作成', 'Create Int List'],
  ['foreachでループ', 'Loop with foreach'],
  ['10を入力', 'Input 10'],
  ['5を入力', 'Input 5'],
  ['3を入力', 'Input 3'],
  ['resultを入力', 'Input result'],
  ['Intを入力', 'Input Int'],
  ['Maybe Intを入力', 'Input Maybe Int'],
  ['10点プラスする', 'Add 10 points'],

  // 追加パターン（2回目実行後の残り）
  ['filterで条件に合う要素を抽出', 'Filter by condition'],
  ['defでDefine function', 'Define function with def'],
  ['reduceで畳み込み', 'Fold with reduce'],
  ['new でCreate instance', 'Create instance with new'],
  ['+ でたし算する', 'Addition with +'],
  ['num をPrintする', 'Print num'],
  ['nullable typeのDeclare variableする', 'Declare nullable variable'],
  ['listOf でCreate listする', 'Create list with listOf'],
  ['functionをExecuteする', 'Execute function'],
  ['->でmethodをCall', 'Call method with ->'],
  ['正規表現moduleをインポート', 'Import regex module'],
  ['speakをCall', 'Call speak'],
  ['valueの列', 'Column of values'],
  ['データソースを指定', 'Specify data source'],
  ['CREATE TABLEでテーブルをCreate', 'Create table with CREATE TABLE'],
  ['INSERTでデータを挿入', 'Insert data with INSERT'],
  ['namePropertyのtype', 'Name property type'],
  ['nameのtype', 'Name type'],
  ['resultをExit codeに', 'Use result as exit code'],
  ['Exit code0をSet', 'Set exit code 0'],
  ['Store raxに5', 'Store 5 in rax'],
  ['ジャンプ先のラベル', 'Jump target label'],
  ['variableをPrint', 'Print variable'],
  ['sortで並べ替え', 'Sort with sort'],
  ['xに10をAssignする', 'Assign 10 to x'],
  ['scoreに85をAssignする', 'Assign 85 to score'],
  ['enum でDefine enum', 'Define enum'],
  ['else で', 'else case'],
  ['greet でCall function', 'Call greet function'],
  ['T でtypeパラメータをDefine', 'Define type parameter T'],
]);

// ===== パターンベースの翻訳ルール =====
const patternRules = [
  // 「AでBを定義」パターン
  [/^(\w+)で(\w+)を定義$/, (m) => `Define ${m[2]} with ${m[1]}`],
  [/^(\w+) で(\w+)を定義$/, (m) => `Define ${m[2]} with ${m[1]}`],
  [/^(\w+)でDefine (\w+)$/, (m) => `Define ${m[2]} with ${m[1]}`],

  // 「AでB」パターン
  [/^(\w+)で出力$/, (m) => `Print with ${m[1]}`],
  [/^(\w+) で出力$/, (m) => `Print with ${m[1]}`],
  [/^(\w+)でループ$/, (m) => `Loop with ${m[1]}`],
  [/^(\w+) でループ$/, (m) => `Loop with ${m[1]}`],

  // 「AにBを入れる」パターン
  [/^(\w+)に(\d+)を入れる$/, (m) => `Set ${m[1]} to ${m[2]}`],
  [/^(\w+) に (\d+) を入れる$/, (m) => `Set ${m[1]} to ${m[2]}`],
  [/^(\w+)に(\w+)を入れる$/, (m) => `Set ${m[1]} to ${m[2]}`],

  // 「AをB」パターン
  [/^(\w+)を出力$/, (m) => `Print ${m[1]}`],
  [/^(\w+) を出力$/, (m) => `Print ${m[1]}`],
  [/^(\w+)を表示$/, (m) => `Print ${m[1]}`],
  [/^(\w+) を表示$/, (m) => `Print ${m[1]}`],
  [/^(\w+)をプリント$/, (m) => `Print ${m[1]}`],
  [/^(\w+)を入力$/, (m) => `Input ${m[1]}`],

  // 「AというB」パターン
  [/^(\w+)という(\w+)を作る.*$/, (m) => `Create ${m[2]} ${m[1]}`],
  [/^(\w+) という(\w+)を作る.*$/, (m) => `Create ${m[2]} ${m[1]}`],

  // 「配列/リストを作る」パターン
  [/^配列を作る.*$/, () => 'Create array'],
  [/^リストを作る.*$/, () => 'Create list'],
  [/^ハッシュを作る.*$/, () => 'Create hash'],
  [/^辞書を作る.*$/, () => 'Create dictionary'],

  // 「AをBする」パターン
  [/^(\w+)を作成$/, (m) => `Create ${m[1]}`],
  [/^(\w+)を定義$/, (m) => `Define ${m[1]}`],
  [/^(\w+)を宣言$/, (m) => `Declare ${m[1]}`],
  [/^(\w+)を初期化$/, (m) => `Initialize ${m[1]}`],

  // Assembly特有
  [/^(.+)を格納$/, (m) => `Store ${m[1]}`],
  [/^(.+)にジャンプ$/, (m) => `Jump to ${m[1]}`],

  // その他のパターン
  [/^こんにちは.*$/, () => 'Print hello'],
  [/^'こんにちは'.*$/, () => 'Print hello'],
  [/^もし\s*(\d+)\s*より大きかったら$/, (m) => `If greater than ${m[1]}`],
  [/^もし\s*(\d+)\s*以上.*$/, (m) => `If >= ${m[1]}`],
];

// ===== 単語置換マッピング（最終フォールバック）=====
const wordReplacements = [
  ['関数を呼び出す', 'Call function'],
  ['関数を呼び出し', 'Call function'],
  ['メソッドを呼び出す', 'Call method'],
  ['インスタンスを作成', 'Create instance'],
  ['クラスを定義', 'Define class'],
  ['関数を定義', 'Define function'],
  ['メソッドを定義', 'Define method'],
  ['モジュールを定義', 'Define module'],
  ['構造体を定義', 'Define struct'],
  ['インターフェースを定義', 'Define interface'],
  ['プロトコルを定義', 'Define protocol'],
  ['列挙型を定義', 'Define enum'],
  ['トレイトを定義', 'Define trait'],
  ['配列を作成', 'Create array'],
  ['リストを作成', 'Create list'],
  ['変数を宣言', 'Declare variable'],
  ['定数を宣言', 'Declare constant'],
  ['変数を初期化', 'Initialize variable'],
  ['文字列を定義', 'Define string'],
  ['要素を追加', 'Add element'],
  ['要素を削除', 'Remove element'],
  ['要素を取得', 'Get element'],
  ['エントリーポイント', 'Entry point'],
  ['正常終了', 'Exit normally'],
  ['終了コード', 'Exit code'],
  ['コンストラクタ', 'Constructor'],
  ['プロパティ', 'Property'],
  ['エラー処理', 'Error handling'],
  ['例外をスロー', 'Throw exception'],
  ['例外をキャッチ', 'Catch exception'],
  ['例外を捕まえる', 'Catch exception'],
  ['例外を捕捉', 'Catch exception'],
  ['例外を投げる', 'Throw exception'],
  ['条件分岐', 'Conditional'],
  ['ループ処理', 'Loop'],
  ['繰り返し', 'Loop'],
  ['繰り返す', 'Loop'],
  ['終了', 'End'],
  ['計算', 'Calculate'],
  ['足し算', 'Addition'],
  ['引き算', 'Subtraction'],
  ['掛け算', 'Multiplication'],
  ['割り算', 'Division'],
  ['あまり', 'Remainder'],
  ['余り', 'Remainder'],
  ['キーワード', 'keyword'],
  ['インデックス', 'index'],
  ['出力', 'Print'],
  ['表示', 'Print'],
  ['初期化', 'Initialize'],
  ['初期値', 'Initial value'],
  ['初期設定', 'Initialize'],
  ['代入', 'Assign'],
  ['宣言', 'Declare'],
  ['定義', 'Define'],
  ['作成', 'Create'],
  ['取得', 'Get'],
  ['追加', 'Add'],
  ['削除', 'Remove'],
  ['変更', 'Modify'],
  ['設定', 'Set'],
  ['確認', 'Check'],
  ['判定', 'Check'],
  ['比較', 'Compare'],
  ['変換', 'Convert'],
  ['返す', 'Return'],
  ['呼び出し', 'Call'],
  ['呼び出す', 'Call'],
  ['実行', 'Execute'],
  ['開始', 'Start'],
  ['保存', 'Save'],
  ['読み込み', 'Read'],
  ['書き込み', 'Write'],
  ['モード', 'mode'],
  ['ファイル', 'file'],
  ['モジュール', 'module'],
  ['クラス', 'class'],
  ['関数', 'function'],
  ['メソッド', 'method'],
  ['変数', 'variable'],
  ['定数', 'constant'],
  ['配列', 'array'],
  ['リスト', 'list'],
  ['辞書', 'dictionary'],
  ['ハッシュ', 'hash'],
  ['文字列', 'string'],
  ['数字', 'number'],
  ['数値', 'number'],
  ['値', 'value'],
  ['型', 'type'],
  ['名前', 'name'],
  ['結果', 'result'],
  ['エラー', 'error'],
  ['メッセージ', 'message'],
  ['画面', 'screen'],
  ['スタック', 'stack'],
  ['キュー', 'queue'],
  ['キー', 'key'],
  ['属性', 'attribute'],
  ['タイトル', 'title'],
  ['著者', 'author'],
  ['本', 'book'],
  ['それ以外', 'else'],
  ['その他', 'other'],
  ['以上', '>='],
  ['以下', '<='],
  ['未満', '<'],
  ['より大き', '>'],
  ['かつ', 'and'],
  ['または', 'or'],
  ['でなければ', 'if not'],
  ['ならば', 'if'],
  ['のとき', 'when'],
  ['場合', 'case'],
  ['年齢', 'age'],
  ['点', 'points'],
  ['番目', 'th'],
  ['入力', 'input'],
  ['はこ', 'box'],
  ['中身', 'contents'],
  // 日本語括弧
  ['（', '('],
  ['）', ')'],
  ['「', '"'],
  ['」', '"'],
  ['、', ', ']
];

// 日本語を含むかチェック
function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

// コメントを翻訳
function translateComment(comment) {
  if (!containsJapanese(comment)) return comment;

  let translated = comment;

  // 1. 完全一致をチェック
  if (exactTranslations.has(translated)) {
    return exactTranslations.get(translated);
  }

  // 2. パターンルールを適用
  for (const [pattern, replacer] of patternRules) {
    const match = translated.match(pattern);
    if (match) {
      translated = replacer(match);
      if (!containsJapanese(translated)) {
        return translated;
      }
    }
  }

  // 3. 単語置換を適用（長いものから）
  const sortedReplacements = [...wordReplacements].sort((a, b) => b[0].length - a[0].length);
  for (const [jp, en] of sortedReplacements) {
    translated = translated.split(jp).join(en);
  }

  // 4. 連続スペースを整理
  translated = translated.replace(/\s+/g, ' ').trim();

  return translated;
}

// コード文字列を処理
function processCodeString(code) {
  if (!containsJapanese(code)) return code;

  const lines = code.split('\\n');
  const processedLines = lines.map(line => {
    // // comment
    if (line.match(/^\s*\/\//)) {
      const match = line.match(/^(\s*\/\/\s*)(.*)$/);
      if (match) {
        return match[1] + translateComment(match[2]);
      }
    }
    // # comment (but not #include, #define, etc.)
    if (line.match(/^\s*#/) && !line.match(/^\s*#(include|define|!|ifdef|endif|pragma)/)) {
      const match = line.match(/^(\s*#\s*)(.*)$/);
      if (match) {
        return match[1] + translateComment(match[2]);
      }
    }
    // ; comment (assembly)
    if (line.match(/^\s*;/)) {
      const match = line.match(/^(\s*;\s*)(.*)$/);
      if (match) {
        return match[1] + translateComment(match[2]);
      }
    }
    // -- comment (SQL, Haskell, Lua)
    if (line.match(/^\s*--/)) {
      const match = line.match(/^(\s*--\s*)(.*)$/);
      if (match) {
        return match[1] + translateComment(match[2]);
      }
    }
    return line;
  });

  return processedLines.join('\\n');
}

// ファイルを処理
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // correctCode と holeyCode を処理
  content = content.replace(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g, (match, field, code) => {
    const processed = processCodeString(code);
    if (processed !== code) {
      modified = true;
      return `"${field}": "${processed}"`;
    }
    return match;
  });

  // correctLines を処理
  content = content.replace(/"correctLines":\s*\[([\s\S]*?)\]/g, (match, linesContent) => {
    if (!containsJapanese(linesContent)) return match;

    let newContent = linesContent;
    newContent = newContent.replace(/"((?:[^"\\]|\\.)*)"/g, (m, line) => {
      if (line.match(/^(\s*)(\/\/|#|;|--)\s*/)) {
        const processed = processCodeString(line);
        if (processed !== line) {
          modified = true;
          return `"${processed}"`;
        }
      }
      return m;
    });

    if (newContent !== linesContent) {
      return `"correctLines": [${newContent}]`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
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

// 残りの日本語をチェック
console.log('\n=== Checking remaining Japanese in code ===');
let remainingCount = 0;
const remainingPatterns = new Map();

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');
  const codeMatches = content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g);

  for (const match of codeMatches) {
    if (containsJapanese(match[2])) {
      remainingCount++;
      // Extract remaining Japanese comments
      const lines = match[2].split('\\n');
      for (const line of lines) {
        if (containsJapanese(line)) {
          const commentMatch = line.match(/^\s*(\/\/|#|;|--)\s*(.+)$/);
          if (commentMatch) {
            const text = commentMatch[2].trim();
            remainingPatterns.set(text, (remainingPatterns.get(text) || 0) + 1);
          }
        }
      }
    }
  }
}

console.log(`Remaining fields with Japanese: ${remainingCount}`);

if (remainingPatterns.size > 0) {
  console.log('\nTop 30 remaining patterns:');
  const sorted = [...remainingPatterns.entries()].sort((a, b) => b[1] - a[1]).slice(0, 30);
  for (const [text, count] of sorted) {
    console.log(`${count}x: ${text}`);
  }
}
