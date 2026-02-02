// コード内の日本語コメントを英語に翻訳するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// 日本語→英語の翻訳マッピング（長いフレーズを先に、一般的なパターンは後に）
const translations = new Map([
  // ===== 最高優先度：完全フレーズ =====
  // C#
  ['usingでSystem名前空間をインポート', 'Import System namespace'],
  ['usingでLinq名前空間をインポート', 'Import Linq namespace'],
  ['Programクラスを定義', 'Define Program class'],
  ['Mainメソッドを定義', 'Define Main method'],
  ['10 を 3 で割ったあまりを出力する', 'Print 10 mod 3'],
  ['score に 100 を入れる', 'Set score to 100'],
  ['scoreに100を入れる', 'Set score to 100'],
  ['scoreに50を入れる', 'Set score to 50'],
  ['scoreに85を入れる', 'Set score to 85'],

  // Java/Kotlin
  ['main 関数を定義する', 'Define main function'],
  ['println で出力する', 'Print with println'],
  ['asList でリストを作成する', 'Create list with asList'],
  ['int型のListを作成', 'Create Int List'],
  ['listOf でリストを作成する', 'Create list with listOf'],
  ['foreachでループ', 'Loop with foreach'],
  ['new でインスタンスを作成する', 'Create instance with new'],
  ['newでインスタンスを作成', 'Create instance with new'],

  // C言語
  ['標準入出力ライブラリを読み込む', 'Include stdio library'],
  ['mainはプログラムのエントリーポイント', 'main is the entry point'],
  ['正常終了を示す0を返す', 'Return 0 for success'],
  ['プログラムの開始地点', 'Program start'],

  // Assembly
  ['システムコールを実行', 'Execute syscall'],
  ['テキストセクションを宣言', 'Declare text section'],
  ['データセクションを宣言', 'Declare data section'],
  ['エントリーポイントを公開', 'Export entry point'],
  ['60は終了コマンド', '60 is exit syscall'],
  ['結果をrdiにコピー', 'Copy result to rdi'],
  ['rdiを0にクリア', 'Clear rdi to 0'],
  ['rdiを0にする', 'Set rdi to 0'],

  // Python/Ruby/Elixir
  ['endで終了', 'End block'],
  ['classでクラスを定義', 'Define class with class'],
  ['class でクラスを定義', 'Define class with class'],
  ['defmoduleでモジュールを定義', 'Define module with defmodule'],
  ['defで関数を定義', 'Define function with def'],
  ['defでメソッドを定義', 'Define method with def'],

  // JS/TS
  ['functionで関数を定義', 'Define function with function'],
  ['classで定義', 'Define with class'],

  // Go
  ['vector で配列を作成', 'Create array with vector'],

  // SQL
  ['SELECTで列を取得', 'Get columns with SELECT'],
  ['SELECTでデータを取得', 'Get data with SELECT'],
  ['CREATE TABLEでテーブルを作成', 'Create table with CREATE TABLE'],
  ['INSERTでデータを挿入', 'Insert data with INSERT'],

  // PHP/Perl
  ['echoで出力', 'Print with echo'],
  ['printで出力', 'Print with print'],
  ['putsで出力', 'Print with puts'],

  // 変数・代入
  ['変数に文字列を代入', 'Assign string to variable'],
  ['ageに10を入れる', 'Set age to 10'],
  ['ageに18を入れる', 'Set age to 18'],
  ['xに10を入れる', 'Set x to 10'],
  ['yに5を入れる', 'Set y to 5'],
  ['xというはこに 10 を入れる', 'Set x (box) to 10'],
  ['yというはこに 5 を入れる', 'Set y (box) to 5'],
  ['ageというはこに 10 を入れる', 'Set age (box) to 10'],
  ['age というはこに 10 を入れる', 'Set age (box) to 10'],
  ['age に 10 を入れる', 'Set age to 10'],
  ['x に 10 を入れる', 'Set x to 10'],
  ['y に 5 を入れる', 'Set y to 5'],
  ['はこに数字を入れる', 'Put number in box'],
  ['はこの中身を画面に出す', 'Print contents of box'],
  ['x と y をたした答えを出す', 'Print x + y result'],

  // 条件・比較
  ['20以上かを比較する演算子', 'Comparison operator (>= 20)'],
  ['+= で 20 を足す', 'Add 20 with +='],
  ['-= で 50 を引く', 'Subtract 50 with -='],
  ['10点プラスする', 'Add 10 points'],
  ['80以上 かつ 100以下 ならメッセージを出す', 'Print message if 80-100'],
  ['&& で両方の条件をチェック', 'Check both conditions with &&'],
  ['20歳以上のときのメッセージ（\'Adult\'）', 'Message for age >= 20 (Adult)'],
  ['20歳以上のときのメッセージ（\'おとな\'）', 'Message for age >= 20 (adult)'],
  ['それ以外のメッセージ（\'Minor\'）', 'Message for else (Minor)'],
  ['それ以外のメッセージ（\'こども\'）', 'Message for else (child)'],
  ['else でそれ以外の場合', 'else for other cases'],

  // コレクション
  ['mapで各要素を変換', 'Transform elements with map'],
  ['filterで条件に合う要素を抽出', 'Filter elements by condition'],
  ['reduceで畳み込み', 'Fold elements with reduce'],
  ['put でキーと値を追加する', 'Add key-value with put'],
  ['辞書を作る（キーは\'みかん\'、値は\'オレンジ\'）', 'Create dict (key: mikan, value: orange)'],
  ['2番目のデータ（インデックス1）を出す', 'Get 2nd element (index 1)'],

  // ループ
  ['順番に取り出すループ', 'Loop to iterate in order'],
  ['取り出した名前を表示', 'Print extracted name'],
  [': で範囲for文', 'Range for loop with :'],
  ['> で比較する', 'Compare with >'],

  // 入力パターン
  ['xを入力', 'Input x'],
  ['10を入力', 'Input 10'],
  ['5を入力', 'Input 5'],
  ['3を入力', 'Input 3'],
  ['resultを入力', 'Input result'],
  ['Intを入力', 'Input Int'],
  ['Maybe Intを入力', 'Input Maybe Int'],

  // 出力
  ['結果を表示', 'Print result'],
  ['resultを出力', 'Print result'],
  ['result を出力する', 'Print result'],
  ['画面に出力', 'Print to screen'],
  ['名前を出力', 'Print name'],
  ['+でたし算', 'Addition with +'],

  // その他
  ['publicでアクセス修飾子', 'Access modifier: public'],
  ['その他の場合', 'Otherwise/else'],
  ['中身を出す', 'Print contents'],

  // ===== 中優先度：一般的なフレーズ =====
  ['関数を呼び出し', 'Call function'],
  ['メソッドを呼び出す', 'Call method'],
  ['インスタンスを作成', 'Create instance'],
  ['配列を作成', 'Create array'],
  ['関数を定義', 'Define function'],
  ['クラスを定義', 'Define class'],
  ['メソッドを定義', 'Define method'],
  ['モジュールを定義', 'Define module'],
  ['構造体を定義', 'Define struct'],
  ['要素を追加', 'Add element'],
  ['要素を削除', 'Remove element'],
  ['要素を取得', 'Get element'],
  ['変数を宣言', 'Declare variable'],
  ['定数を宣言', 'Declare constant'],
  ['変数を初期化', 'Initialize variable'],
  ['リストを作成', 'Create list'],
  ['文字列を定義', 'Define string'],
  ['エントリーポイント', 'Entry point'],
  ['正常終了', 'Exit normally'],
  ['コンストラクタ', 'Constructor'],
  ['プロパティ', 'Property'],
  ['エラー処理', 'Error handling'],
  ['例外をスロー', 'Throw exception'],
  ['例外をキャッチ', 'Catch exception'],
  ['条件分岐', 'Conditional'],
  ['ループ処理', 'Loop'],
  ['終了コード', 'Exit code'],
  ['インデックス', 'index'],

  // ===== 低優先度：単語 =====
  ['出力', 'Print'],
  ['終了', 'End'],
  ['繰り返し', 'Loop'],
  ['計算', 'Calculate'],
  ['足し算', 'Addition'],
  ['引き算', 'Subtraction'],
  ['掛け算', 'Multiplication'],
  ['割り算', 'Division'],
  ['あまり', 'Remainder'],
  ['余り', 'Remainder'],
  ['キーワード', 'keyword'],

  // ===== 追加パターン（残りの頻出パターン）=====
  // 変数操作
  ['enumで列挙型を定義', 'Define enum type'],
  ['throwで例外を投げる', 'Throw exception'],
  ['traitでトレイトを定義', 'Define trait'],
  ['正規表現モジュールをインポート', 'Import regex module'],
  ['elseでそれ以外の場合', 'else for other cases'],
  ['sortで並べ替え', 'Sort with sort'],
  ['xに10を代入する', 'Assign 10 to x'],
  ['scoreに85を代入する', 'Assign 85 to score'],
  ['Tで型パラメータを定義', 'Define type parameter T'],
  ['catchで例外を捕まえる', 'Catch exception with catch'],
  ['autoで型を推論', 'Infer type with auto'],
  ['constexprでコンパイル時に計算', 'Compile-time calculation with constexpr'],
  ['*pで中身にアクセス', 'Access contents with *p'],
  ['画面にメッセージを出す関数', 'Function to print message'],
  ['もし80より大きかったら', 'If greater than 80'],
  ['もし 80 より大きかったら', 'If greater than 80'],
  ['20歳以上かどうかで分ける', 'Branch by age >= 20'],
  ['名前の配列を作成', 'Create array of names'],
  ['キーと値を追加', 'Add key and value'],
  ['キーを指定して値を取り出す', 'Get value by key'],
  ['こんにちは と表示', 'Print hello'],
  ['catchで例外を捕捉', 'Catch exception'],
  ['変数を定義', 'Define variable'],
  ['配列を定義', 'Define array'],
  ['null許容型の変数を定義', 'Define nullable variable'],
  ['nullable 型の変数を宣言する', 'Declare nullable variable'],
  ['|>でパイプ', 'Pipe with |>'],
  ['endでモジュールを閉じる', 'Close module with end'],
  ['endでブロックを閉じる', 'Close block with end'],
  ['endで関数を閉じる', 'Close function with end'],
  ['関数から2つの戻り値を受け取る', 'Receive 2 return values'],
  ['構造体を初期化', 'Initialize struct'],
  ['チャネルに値を送信', 'Send value to channel'],
  ['tryで例外が起きる可能性のある処理を囲む', 'Wrap code that may throw with try'],
  ['finallyで必ず実行する', 'Always execute with finally'],
  ['addで要素を追加する', 'Add element with add'],
  ['getで要素を取得する', 'Get element with get'],
  ['newでHashMapを作成する', 'Create HashMap with new'],
  ['offerでキューに要素を追加する', 'Add to queue with offer'],
  ['pushでスタックに積む', 'Push to stack'],
  ['throwで例外をスローする', 'Throw exception with throw'],
  ['配列を作る（\'たろう\', \'はなこ\'の順）', 'Create array (taro, hanako order)'],
  ['greetという関数を定義する（\'こんにちは\'と表示）', 'Define greet function (print hello)'],
  ['\'こんにちは\'と表示', 'Print hello'],
  ['10を3で割ったあまりを計算', 'Calculate 10 mod 3'],
  ['初期値を設定', 'Set initial value'],
  ['年齢を設定', 'Set age'],
  ['20以上かつ30未満かどうか判定', 'Check if 20 <= x < 30'],
  ['テンプレートリテラルで出力', 'Print with template literal'],
  ['エラーメッセージを出力', 'Print error message'],
  ['throwでエラーを投げる', 'Throw error'],
  ['constructorで初期化', 'Initialize with constructor'],
  ['varで変更可能な変数を作る', 'Create mutable variable with var'],
  ['colorsというリストを作る（\'あか\', \'あお\'の順）', 'Create colors list (aka, ao order)'],
  ['0からtimesまで繰り返す', 'Loop from 0 to times'],
  ['repeat を呼び出す', 'Call repeat'],
  ['repeatを呼び出す', 'Call repeat'],
  ['data classを定義する', 'Define data class'],
  ['1番目の k にキー、2番目の v に値が入る', 'k gets key, v gets value'],
  ['n * 2を返す', 'Return n * 2'],
  ['文字をつなげる', 'Concatenate strings'],
  ['ハッシュを作る', 'Create hash'],
  ['raxに5を格納', 'Store 5 in rax'],

  // 残りのパターン
  ['num を出力する', 'Print num'],
  ['名前プロパティの型', 'Name property type'],
  ['名前の型', 'Name type'],
  ['->でメソッドを呼び出し', 'Call method with ->'],
  ['speakを呼び出し', 'Call speak'],
  ['関数を実行する', 'Execute function'],
  ['スタックに保存', 'Push to stack'],
  ['スタックから取り出す', 'Pop from stack'],
  ['サブルーチンを呼び出す', 'Call subroutine'],
  ['等しければジャンプ', 'Jump if equal'],
  ['ジャンプ先のラベル', 'Jump target label'],
  ['サブルーチンのラベル', 'Subroutine label'],
  ['文字列msgを定義', 'Define string msg'],
  ['文字の長さを指定', 'Specify string length'],
  ['1は標準出力', '1 is stdout'],
  ['結果を終了コードに', 'Use result as exit code'],
  ['エラーコード0', 'Error code 0'],
  ['表示したい文字列を定義', 'Define string to display'],
  ['msgで表示する文字を指定', 'Set msg as string to print'],
  ['1は「書く」という命令', '1 is write syscall'],
  ['60は「終了」という命令', '60 is exit syscall'],
  ['は2文字+改行で3バイト', 'is 2 chars + newline = 3 bytes'],
  ['doneに直接ジャンプ', 'Jump directly to done'],
  ['データソースを指定', 'Specify data source'],
  ['値の列', 'Column of values'],

  // 日本語特有文字の置換
  ['（', '('],
  ['）', ')'],
  ['「', '"'],
  ['」', '"'],
]);

// 日本語を含むかチェック
function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

// コメントを翻訳
function translateComment(comment) {
  if (!containsJapanese(comment)) return comment;

  let translated = comment;

  // 翻訳マッピングを適用（長いものから優先）
  const sortedTranslations = [...translations.entries()].sort((a, b) => b[0].length - a[0].length);
  for (const [jp, en] of sortedTranslations) {
    translated = translated.split(jp).join(en);
  }

  // 連続スペースを1つに
  translated = translated.replace(/\s+/g, ' ').trim();

  return translated;
}

// コード文字列を処理
function processCodeString(code) {
  if (!containsJapanese(code)) return code;

  // 改行でエスケープされた文字列を分割
  const lines = code.split('\\n');
  const processedLines = lines.map(line => {
    // コメント行を検出して翻訳
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
    // 各文字列要素を処理
    newContent = newContent.replace(/"((?:[^"\\]|\\.)*)"/g, (m, line) => {
      // コメント行をチェック
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
for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf-8');

  // correctCode/holeyCodeをチェック
  const codeMatches = content.matchAll(/"(correctCode|holeyCode)":\s*"((?:[^"\\]|\\.)*)"/g);
  for (const match of codeMatches) {
    if (containsJapanese(match[2])) {
      remainingCount++;
    }
  }
}
console.log(`Remaining fields with Japanese: ${remainingCount}`);
