// コード内の日本語コメントを包括的に英語に翻訳するスクリプト
import fs from 'fs';
import path from 'path';

const lessonsDir = './data/lessons';

// ===== 完全一致翻訳マッピング（全パターン）=====
const translations = new Map([
  // 高頻度パターン（46-40回）
  ['結果を表示', 'Print result'],
  ['usingでSystem名前空間をインポート', 'Import System namespace'],
  ['Programクラスを定義', 'Define Program class'],
  ['main 関数を定義する', 'Define main function'],
  ['Mainメソッドを定義', 'Define Main method'],
  ['println で出力する', 'Print with println'],
  ['endで終了', 'End block'],
  ['標準入出力ライブラリを読み込む', 'Include stdio library'],
  ['mainはプログラムのエントリーポイント', 'main is the entry point'],
  ['正常終了を示す0を返す', 'Return 0 for success'],

  // 高頻度パターン（24-22回）
  ['システムコールを実行', 'Execute syscall'],
  ['classでクラスを定義', 'Define class'],
  ['テキストセクションを宣言', 'Declare text section'],
  ['データセクションを宣言', 'Declare data section'],
  ['エントリーポイントを公開', 'Export entry point'],
  ['プログラムの開始地点', 'Program start'],
  ['10 を 3 で割ったあまりを出力する', 'Print 10 mod 3'],
  ['printで出力', 'Print output'],
  ['インスタンスを作成', 'Create instance'],

  // 高頻度パターン（20-18回）
  ['asList でリストを作成する', 'Create list with asList'],
  ['60は終了コマンド', '60 is exit syscall'],
  ['関数を呼び出し', 'Call function'],

  // 高頻度パターン（16-14回）
  ['画面に出力', 'Print to screen'],
  ['関数を定義', 'Define function'],
  ['new でインスタンスを作成する', 'Create instance with new'],
  ['2番目のデータ（インデックス1）を出す', 'Get 2nd element (index 1)'],
  ['echoで出力', 'Print with echo'],
  ['配列を作成', 'Create array'],

  // 高頻度パターン（12-10回）
  ['scoreに100を入れる', 'Set score to 100'],
  ['20以上かを比較する演算子', 'Comparison operator >= 20'],
  ['+= で 20 を足す', 'Add 20 with +='],
  ['-= で 50 を引く', 'Subtract 50 with -='],
  ['score に 100 を入れる', 'Set score to 100'],
  ['scoreに50を入れる', 'Set score to 50'],
  ['10点プラスする', 'Add 10 points'],
  ['scoreに85を入れる', 'Set score to 85'],
  ['80以上 かつ 100以下 ならメッセージを出す', 'Print message if 80-100'],
  ['vector で配列を作成', 'Create vector array'],
  ['&& で両方の条件をチェック', 'Check both with &&'],
  ['usingでLinq名前空間をインポート', 'Import Linq namespace'],
  ['xを入力', 'Input x'],
  ['mapで各要素を変換', 'Map each element'],
  ['resultを出力', 'Print result'],
  ['newでインスタンスを作成', 'Create instance with new'],
  ['SELECTで列を取得', 'Get columns with SELECT'],
  ['出力', 'Print'],

  // 高頻度パターン（8回）
  ['+でたし算', 'Addition with +'],
  ['変数に文字列を代入', 'Assign string to variable'],
  ['ageに10を入れる', 'Set age to 10'],
  ['class でクラスを定義', 'Define class'],
  ['順番に取り出すループ', 'Loop in order'],
  ['取り出した名前を表示', 'Print extracted name'],
  ['defmoduleでモジュールを定義', 'Define module'],
  ['> で比較する', 'Compare with >'],
  ['put でキーと値を追加する', 'Add key-value with put'],
  ['辞書を作る（キーは\'みかん\'、値は\'オレンジ\'）', 'Create dict (mikan: orange)'],
  ['中身を出す', 'Print contents'],
  ['result を出力する', 'Print result'],
  ['functionで関数を定義', 'Define function'],
  ['publicでアクセス修飾子', 'Public access modifier'],
  ['SELECTでデータを取得', 'Get data with SELECT'],
  ['要素を追加', 'Add element'],
  ['名前を出力', 'Print name'],

  // 高頻度パターン（6回）
  ['結果をrdiにコピー', 'Copy result to rdi'],
  ['rdiを0にクリア', 'Clear rdi to 0'],
  ['はこに数字を入れる', 'Put number in box'],
  ['20歳以上のときのメッセージ（\'Adult\'）', 'Message if >= 20 (Adult)'],
  ['それ以外のメッセージ（\'Minor\'）', 'Message else (Minor)'],
  ['その他の場合', 'Else case'],
  [': で範囲for文', 'Range for with :'],
  ['はこの中身を画面に出す', 'Print box contents'],
  ['xというはこに 10 を入れる', 'Set box x to 10'],
  ['yというはこに 5 を入れる', 'Set box y to 5'],
  ['x と y をたした答えを出す', 'Print x + y'],
  ['ageというはこに 10 を入れる', 'Set box age to 10'],
  ['else でそれ以外の場合', 'Else case'],
  ['メソッドを呼び出す', 'Call method'],
  ['int型のListを作成', 'Create Int List'],
  ['foreachでループ', 'Loop with foreach'],
  ['10を入力', 'Input 10'],
  ['5を入力', 'Input 5'],
  ['3を入力', 'Input 3'],
  ['resultを入力', 'Input result'],
  ['filterで条件に合う要素を抽出', 'Filter by condition'],
  ['defで関数を定義', 'Define function with def'],
  ['reduceで畳み込み', 'Fold with reduce'],
  ['Intを入力', 'Input Int'],
  ['Maybe Intを入力', 'Input Maybe Int'],
  ['age というはこに 10 を入れる', 'Set box age to 10'],
  ['age に 10 を入れる', 'Set age to 10'],
  ['20歳以上のときのメッセージ（\'おとな\'）', 'Message if >= 20 (adult)'],
  ['配列を作る', 'Create array'],
  ['new でインスタンスを作成', 'Create instance with new'],
  ['x に 10 を入れる', 'Set x to 10'],
  ['y に 5 を入れる', 'Set y to 5'],
  ['+ でたし算する', 'Addition with +'],
  ['num を出力する', 'Print num'],
  ['nullable 型の変数を宣言する', 'Declare nullable variable'],
  ['listOf でリストを作成する', 'Create list with listOf'],
  ['関数を実行する', 'Execute function'],
  ['->でメソッドを呼び出し', 'Call method with ->'],
  ['正規表現モジュールをインポート', 'Import regex module'],
  ['putsで出力', 'Print with puts'],
  ['speakを呼び出し', 'Call speak'],
  ['値の列', 'Column of values'],
  ['データソースを指定', 'Specify data source'],
  ['CREATE TABLEでテーブルを作成', 'Create table with CREATE TABLE'],
  ['INSERTでデータを挿入', 'Insert data with INSERT'],
  ['nを出力', 'Print n'],
  ['プロトコルを定義', 'Define protocol'],
  ['名前プロパティの型', 'Name property type'],
  ['名前の型', 'Name type'],

  // 中頻度パターン（4回）
  ['結果を終了コードに', 'Use result as exit code'],
  ['終了', 'End'],
  ['終了コード0を設定', 'Set exit code 0'],
  ['raxに5を格納', 'Store 5 in rax'],
  ['ジャンプ先のラベル', 'Jump target label'],
  ['ageに18を入れる', 'Set age to 18'],
  ['関数を呼び出す', 'Call function'],
  ['変数を表示', 'Print variable'],
  ['sortで並べ替え', 'Sort with sort'],
  ['xに10を代入する', 'Assign 10 to x'],
  ['scoreに85を代入する', 'Assign 85 to score'],
  ['enum で列挙型を定義', 'Define enum'],
  ['T で型パラメータを定義', 'Define type parameter T'],
  ['throw で例外を投げる', 'Throw exception'],
  ['catch で例外を捕まえる', 'Catch exception'],
  ['auto で型を推論', 'Infer type with auto'],
  ['constexpr でコンパイル時計算', 'Compile-time calculation'],
  ['*p で中身にアクセス', 'Access contents with *p'],
  ['画面にメッセージを出す関数', 'Function to print message'],
  ['hp に 100 を入れる', 'Set hp to 100'],
  ['colorsという配列を作る', 'Create colors array'],
  ['もし80より大きかったら', 'If greater than 80'],
  ['「合格！」と表示する', 'Print pass'],
  ['20歳以上かどうかで分ける', 'Branch by age >= 20'],
  ['名前の配列を作る', 'Create name array'],
  ['キーと値を追加', 'Add key and value'],
  ['キーを指定して値を取り出す', 'Get value by key'],
  ['こんにちは と表示', 'Print hello'],
  ['interfaceでインターフェースを定義', 'Define interface'],
  ['Itemクラスを定義', 'Define Item class'],
  ['catchで例外を捕捉', 'Catch exception'],
  ['変数を定義', 'Define variable'],
  ['Pointインスタンスを作成', 'Create Point instance'],
  ['配列を定義', 'Define array'],
  ['null許容型の変数を定義', 'Define nullable variable'],
  ['|>でパイプ', 'Pipe with |>'],
  ['defstructで構造体を定義', 'Define struct'],
  ['endでモジュールを閉じる', 'Close module with end'],
  ['endでブロックを閉じる', 'Close block with end'],
  ['endで関数を閉じる', 'Close function with end'],
  ['x に 10 を代入する', 'Assign 10 to x'],
  ['関数から2つの戻り値を受け取る', 'Receive 2 return values'],
  ['struct で構造体を定義', 'Define struct'],
  ['構造体を初期化', 'Initialize struct'],
  ['チャネルに値を送信', 'Send value to channel'],
  ['+で足し算', 'Addition with +'],
  ['*で掛け算', 'Multiplication with *'],
  ['try で例外が起きる可能性のある処理を囲む', 'Wrap with try'],
  ['finally で必ず実行する', 'Always execute with finally'],
  ['add で要素を追加する', 'Add element with add'],
  ['get で要素を取得する', 'Get element with get'],
  ['new で HashMap を作成する', 'Create HashMap with new'],
  ['offer でキューに要素を追加する', 'Add to queue with offer'],
  ['push でスタックに積む', 'Push to stack'],
  ['throw で例外をスローする', 'Throw exception'],
  ['はこの中身を出す', 'Print box contents'],
  ['もし 80 より大きかったら', 'If greater than 80'],
  ['「ごうかく！」と表示する', 'Print pass'],
  ['「そうでなければ」を表すキーワード', 'Keyword for else'],
  ['それ以外の場合（\'こども\'）', 'Else case (child)'],
  ['配列を作る（\'たろう\', \'はなこ\'の順）', 'Create array (taro, hanako)'],
  ['greet という関数を定義する（\'こんにちは\'と表示）', 'Define greet (print hello)'],
  ['\'こんにちは\'と表示', 'Print hello'],
  ['10を3で割った余りを計算', 'Calculate 10 mod 3'],
  ['初期値を設定', 'Set initial value'],
  ['totalに10を足す', 'Add 10 to total'],
  ['totalに5を足す', 'Add 5 to total'],
  ['年齢を設定', 'Set age'],
  ['20以上かつ30未満かどうか判定', 'Check if 20-30'],
  ['テンプレートリテラルで出力', 'Print with template literal'],
  ['エラーメッセージを出力', 'Print error message'],
  ['throw でエラーを投げる', 'Throw error'],
  ['constructor で初期化', 'Initialize with constructor'],
  ['var で変更可能な変数を作る', 'Create mutable variable'],
  ['colors というリストを作る（\'あか\', \'あお\'の順）', 'Create colors list (red, blue)'],
  ['0 から times まで繰り返す', 'Loop from 0 to times'],
  ['repeat を呼び出す', 'Call repeat'],
  ['data class を定義する', 'Define data class'],
  ['1番目の k にキー、2番目の v に値が入る', 'k gets key, v gets value'],
  ['n * 2を返す', 'Return n * 2'],
  ['文字をつなげる', 'Concatenate strings'],
  ['条件分岐', 'Conditional'],
  ['ハッシュを作る', 'Create hash'],
  ['配列を宣言（1, 2, 3）', 'Declare array (1, 2, 3)'],
  ['__constructでコンストラクタを定義', 'Define constructor'],
  ['print_rで配列を出力', 'Print array with print_r'],
  ['functionでメソッドを定義', 'Define method'],
  ['nullを代入', 'Assign null'],
  ['=>で値をマッピング', 'Map value with =>'],
  ['名前を初期設定するメソッド', 'Method to init name'],
  ['本を表すクラス', 'Book class'],
  ['タイトルを属性に保存', 'Save title attribute'],
  ['著者を属性に保存', 'Save author attribute'],
  ['書き込みモードでファイルを開く', 'Open file for write'],
  ['読み込みモードでファイルを開く', 'Open file for read'],
  ['JSONモジュールをインポート', 'Import JSON module'],
  ['numsに配列を代入（1, 2, 3）', 'Assign array to nums'],
  ['yieldでブロックを実行', 'Execute block with yield'],
  ['trait でトレイトを定義', 'Define trait'],
  ['SELECT文でデータを作成', 'Create data with SELECT'],
  ['SELECT文でデータを取得', 'Get data with SELECT'],
  ['カテゴリを定義', 'Define category'],
  ['データを追加', 'Add data'],
  ['テーブルaを作成', 'Create table a'],
  ['テーブルbを作成', 'Create table b'],
  ['結合条件を指定', 'Specify join condition'],
  ['データを作成', 'Create data'],
  ['?でオプショナル型', 'Optional type with ?'],
  ['protocolでプロトコルを定義', 'Define protocol'],
  ['speakメソッドを宣言', 'Declare speak method'],
  ['speakメソッドを実装', 'Implement speak method'],
  ['guardで早期リターン', 'Early return with guard'],
  ['nilと出力', 'Print nil'],
  ['早期リターン', 'Early return'],
  ['switchでパターンマッチ', 'Pattern match with switch'],
  ['エラー型を定義', 'Define error type'],
  ['deferでスコープ終了時に実行', 'Execute at scope end with defer'],
  ['startと出力', 'Print start'],

  // 残りのパターン（2回以下）
  ['raxに10を格納', 'Store 10 in rax'],
  ['rbxに5を格納', 'Store 5 in rbx'],
  ['1は標準出力', '1 is stdout'],
  ['syscallで実行', 'Execute with syscall'],
  ['msgで表示する文字を指定', 'Set msg as string'],
  ['msgは2文字+改行で3バイト', 'msg is 3 bytes'],
  ['1は「書く」という命令', '1 is write syscall'],
  ['60は「終了」という命令', '60 is exit syscall'],
  ['表示したい文字列を定義', 'Define string to display'],
  ['文字列msgを定義', 'Define string msg'],
  ['文字の長さを指定', 'Specify string length'],
  ['エラーコード0', 'Error code 0'],
  ['メインラベル', 'Main label'],
  ['スタートラベル', 'Start label'],
  ['readで入力', 'Read input'],
  ['whileでループ', 'Loop with while'],
  ['forで繰り返し', 'Loop with for'],
  ['ifで条件分岐', 'Conditional with if'],
  ['スタックに保存', 'Push to stack'],
  ['スタックから取り出す', 'Pop from stack'],
  ['サブルーチンを呼び出す', 'Call subroutine'],
  ['等しければジャンプ', 'Jump if equal'],
  ['サブルーチンのラベル', 'Subroutine label'],
  ['rdiを0にする', 'Set rdi to 0'],
  ['doneに直接ジャンプ', 'Jump directly to done'],
  ['終了システムコール', 'Exit syscall'],
  ['rdiに5を設定', 'Set rdi to 5'],
  ['終了コマンド', 'Exit command'],
  ['コンストラクタ', 'Constructor'],
  ['プロパティ', 'Property'],
  ['インデックス', 'index'],
  ['エラー処理', 'Error handling'],
  ['例外をスロー', 'Throw exception'],
  ['例外をキャッチ', 'Catch exception'],
  ['ループ処理', 'Loop'],
  ['正常終了', 'Exit normally'],
  ['エントリーポイント', 'Entry point'],
  ['クラスを定義', 'Define class'],
  ['メソッドを定義', 'Define method'],
  ['モジュールを定義', 'Define module'],
  ['構造体を定義', 'Define struct'],
  ['インターフェースを定義', 'Define interface'],
  ['要素を削除', 'Remove element'],
  ['要素を取得', 'Get element'],
  ['変数を宣言', 'Declare variable'],
  ['定数を宣言', 'Declare constant'],
  ['変数を初期化', 'Initialize variable'],
  ['リストを作成', 'Create list'],
  ['文字列を定義', 'Define string'],
  ['キーワード', 'keyword'],
  ['計算', 'Calculate'],
  ['足し算', 'Addition'],
  ['引き算', 'Subtraction'],
  ['掛け算', 'Multiplication'],
  ['割り算', 'Division'],
  ['あまり', 'Remainder'],
  ['余り', 'Remainder'],
  ['繰り返し', 'Loop'],

  // 追加パターン（4回以上）
  ['名前を初期設定するメソッドを定義', 'Define method to init name'],
  ['本を表すクラスを定義', 'Define Book class'],
  ['インスタンスを表示', 'Print instance'],
  ['nameプロパティ', 'name property'],
  ['associatedtypeで関連型を定義', 'Define associated type'],
  ['pushメソッドを宣言', 'Declare push method'],
  ['Stackに準拠', 'Conform to Stack'],
  ['items配列', 'items array'],
  ['pushメソッドを実装', 'Implement push method'],
  ['itemsを出力', 'Print items'],
  ['エラーを出力', 'Print error'],
  ['要素数を出力', 'Print element count'],
  ['ホスト名の型', 'Host type'],
  ['ポート番号の型', 'Port type'],
  ['IDの型', 'ID type'],
  ['aとbを出力', 'Print a and b'],
  ['データを出力', 'Print data'],

  // Assembly追加パターン
  ['Hiは2文字+改行で3バイト', 'Hi is 2 chars + newline = 3 bytes'],
  ['終了コード0', 'Exit code 0'],
  ['10を入れる', 'Store 10'],
  ['5を足す', 'Add 5'],
  ['20を入れる', 'Store 20'],
  ['8を引く', 'Subtract 8'],
  ['25を入れる', 'Store 25'],
  ['raxをrdiにコピー', 'Copy rax to rdi'],
  ['raxと10を比較', 'Compare rax with 10'],
  ['1増やす', 'Increment by 1'],
  ['movで値をレジスタに格納', 'Store value with mov'],
  ['addで 10 が入った rax に 5 を足す', 'Add 5 to rax (10)'],
  ['raxに20を格納', 'Store 20 in rax'],
  ['subで 20 が入った rax から 5 を引く', 'Subtract 5 from rax (20)'],
  ['raxに4を格納', 'Store 4 in rax'],
  ['rbxに3を格納', 'Store 3 in rbx'],
  ['mulで rax(4) と rbx(3) を掛ける', 'Multiply rax(4) by rbx(3)'],
  ['cmpで rax(5) と 5 を比較', 'Compare rax(5) with 5'],
  ['jmpで done ラベルにジャンプ', 'Jump to done label'],
  ['raxと5を比較', 'Compare rax with 5'],
  ['jeで等しければ done にジャンプ', 'Jump to done if equal'],
  ['raxに42を格納', 'Store 42 in rax'],
  ['pushで rax(42) をスタックに保存', 'Push rax(42) to stack'],
  ['popでスタックから rbx に取り出す', 'Pop from stack to rbx'],
  ['rbxの値を終了コードに設定', 'Set rbx as exit code'],
  ['xorで rdi を 0 にする', 'Clear rdi with xor'],
  ['callで done サブルーチンを呼び出す', 'Call done subroutine'],
  ['decで1減らす', 'Decrement with dec'],
  ['imulで掛け算', 'Multiply with imul'],
  ['pushでスタックに保存', 'Push to stack'],
  ['popでスタックから取り出す', 'Pop from stack'],
  ['andでビットAND', 'Bitwise AND'],
  ['orでビットOR', 'Bitwise OR'],

  // Bash/Shell パターン
  ['shlで左シフト', 'Left shift with shl'],
  ['shrで右シフト', 'Right shift with shr'],
  ['testでビットを検査', 'Test bits'],
  ['negで符号反転', 'Negate with neg'],
  ['Hello, World!と入力する', 'Enter Hello, World!'],
  ['\'Bash\' と入力する', 'Enter Bash'],
  ['はこの名前 \'name\' と入力する', 'Enter box name'],
  ['-gtで「より大きい」を指定', 'Use -gt for greater than'],
  ['メッセージ（\'Great\'）', 'Message (Great)'],
  ['fiでif文を閉じる', 'Close if with fi'],
  ['elseでそれ以外の場合', 'else for other cases'],
  ['inで配列の中身を取り出す', 'Extract array elements with in'],
  ['doneでループを終了', 'End loop with done'],
  ['greetで関数を呼び出す', 'Call greet function'],
  ['配列を定義（10, 20, 30）', 'Define array (10, 20, 30)'],
  ['3番目の要素にアクセスするインデックス（0から数える）', 'Index for 3rd element (0-based)'],
  ['文字列の長さを取得する記号', 'Symbol to get string length'],
  ['Worldが始まる位置（0から数える）', 'Position where World starts (0-based)'],
  ['最初の引数を参照する変数', 'Variable for first argument'],
  ['引数を2乗する', 'Square the argument'],
  ['コマンドの出力を取得する構文', 'Syntax to capture command output'],
  ['条件が真の間繰り返すキーワード', 'Loop while true keyword'],
  ['iを1増やす', 'Increment i by 1'],
  ['変数に値を代入', 'Assign value to variable'],
  ['パターンマッチで分岐するキーワード', 'Pattern match keyword'],
  ['appleの場合', 'Case apple'],
  ['bananaの場合', 'Case banana'],
  ['コマンドの出力を変数に格納する構文', 'Syntax to store command output'],
  ['標準入力を変数に読み込むコマンド', 'Command to read stdin'],
  ['ヒアドキュメントを開始する演算子', 'Heredoc operator'],
  ['1行目のテキストを入力', 'Input first line text'],
  ['2行目のテキストを入力', 'Input second line text'],
  ['|でパイプを使う', 'Use pipe with |'],
  ['>でファイルに出力', 'Output to file with >'],
  ['<でファイルから読み込む', 'Read from file with <'],
  ['2>でエラー出力をリダイレクト', 'Redirect stderr with 2>'],
  ['-fでファイルが存在するか確認', 'Check file exists with -f'],
  ['xargsで引数に変換', 'Convert to args with xargs'],
  ['sedで置換', 'Replace with sed'],
  ['awkでフィールドを抽出', 'Extract fields with awk'],
  ['uniqで重複を除去', 'Remove duplicates with uniq'],
  ['Hello, World!を表示する', 'Print Hello, World!'],
  ['xの値を表示する', 'Print x value'],
  ['aに10を代入する', 'Assign 10 to a'],
  ['bに3を代入する', 'Assign 3 to b'],
  ['a - bの結果を表示する', 'Print a - b result'],
  ['10 % 3の結果を表示する', 'Print 10 % 3 result'],
  ['scoreに80を代入する', 'Assign 80 to score'],
  ['scoreに10を加算する', 'Add 10 to score'],
  ['scoreの値を表示する', 'Print score value'],

  // C/C++ 追加パターン
  ['配列numsを初期化する', 'Initialize array nums'],
  ['nums[1]を表示する（インデックス1は20）', 'Print nums[1] (index 1 = 20)'],
  ['Print iの値', 'Print i value'],
  ['p.xに10を代入する', 'Assign 10 to p.x'],
  ['Print p.xの値', 'Print p.x value'],
  ['Helloと表示する', 'Print Hello'],
  ['xのアドレスを取得する演算子', 'Operator to get x address'],
  ['ptrが指す先の値にアクセスする演算子', 'Operator to access ptr value'],
  ['使っている引数名をDefine with printf', 'Define arg name for printf'],
  ['計算結果を呼び出し元に返すキーワード', 'Keyword to return result'],
  ['配列の先頭アドレスを代入', 'Assign array head address'],
  ['文字列を表示する書式指定子', 'Format specifier for string'],
  ['valのアドレスを取得する演算子', 'Operator to get val address'],
  ['確保したメモリを解放する関数', 'Function to free memory'],
  ['ポインタからメンバにアクセスする演算子', 'Operator to access member from pointer'],
  ['列挙型の変数を宣言するキーワード', 'Keyword to declare enum variable'],
  ['関数ポインタを宣言する記法', 'Syntax to declare function pointer'],
  ['引数で受け取った関数ポインタを呼び出す', 'Call received function pointer'],
  ['両方のビットが1の場合のみ1になる演算子', 'Operator: both bits 1 -> 1'],
  ['どちらかのビットが1なら1になる演算子', 'Operator: either bit 1 -> 1'],
  ['ビットを左に移動する演算子', 'Operator to shift bits left'],
  ['型や変数のバイト数を取得する演算子', 'Operator to get byte size'],
  ['型に別名をつけるキーワード', 'Keyword to alias type'],
  ['指す先を変更不可にするキーワード', 'Keyword for const pointer target'],
  ['関数を抜けても値を保持するキーワード', 'Keyword to retain value'],
  ['プリプロセッサでマクロを定義するディレクティブ', 'Directive to define macro'],
  ['fopen でファイルを開く', 'Open file with fopen'],
  ['fclose でファイルを閉じる', 'Close file with fclose'],
  ['fprintf でファイルに書き込む', 'Write to file with fprintf'],
  ['fgets で1行読み込む', 'Read line with fgets'],
  ['fseek でファイル位置を移動', 'Move file position with fseek'],
  ['ftell で現在位置を取得', 'Get current position with ftell'],
  ['union で共用体を定義', 'Define union'],
  ['** で二重ポインタを宣言', 'Declare double pointer with **'],
  ['va_start で可変長引数を初期化', 'Initialize varargs with va_start'],
  ['+ でたし算', 'Addition with +'],
  ['1 と入力（2番目のデータはインデックス1）', 'Enter 1 (2nd element is index 1)'],
  ['> で「より大きい」を比較', 'Compare greater than with >'],
  ['else で「それ以外」', 'else for other cases'],
  ['「Pass」と出力', 'Print Pass'],
  ['nums で配列を指定', 'Specify nums array'],
  ['\'Math\' と入力（キー名）', 'Enter Math (key name)'],
  ['\'Math\' と入力（同じキー名）', 'Enter Math (same key)'],
  ['greet で関数を呼び出す', 'Call greet function'],
  ['string でメンバ変数を定義', 'Define member variable'],
  ['Cat でオブジェクトを作成', 'Create Cat object'],
  ['Counter でコンストラクタを定義', 'Define Counter constructor'],
  ['count に値を代入', 'Assign value to count'],
  ['iの値を表示する', 'Print i value'],
  ['p.xの値を表示する', 'Print p.x value'],
  ['scoreが80以上ならPassと表示する', 'Print Pass if score >= 80'],
  ['xが5より大きいか判定する', 'Check if x > 5'],
  ['scoreが80以上かつ100以下ならPassと表示する', 'Print Pass if 80 <= score <= 100'],
  ['iが0から2までループする', 'Loop i from 0 to 2'],
  ['Point構造体を定義する', 'Define Point struct'],
  ['Point型の変数pを作成する', 'Create Point variable p'],

  // C++ 追加パターン
  ['「私は12歳です」と表示する', 'Print I am 12 years old'],
  ['Counter(5) でオブジェクトを作成', 'Create object with Counter(5)'],
  ['* で掛け算', 'Multiplication with *'],
  ['Rect でオブジェクトを作成', 'Create Rect object'],
  ['area() でメンバ関数を呼び出し', 'Call area() member function'],
  ['& で参照を作る', 'Create reference with &'],
  ['ref に 100 を代入', 'Assign 100 to ref'],
  ['public で継承', 'Inherit with public'],
  ['move() でメンバ関数を呼び出し', 'Call move() member function'],
  ['virtual で仮想関数を定義', 'Define virtual function'],
  ['override で上書き', 'Override'],
  ['draw() でメンバ関数を呼び出し', 'Call draw() member function'],
  ['bigger で大きい方を取得', 'Get bigger value'],
  ['{ でラムダ本体を開始', 'Start lambda body with {'],
  ['square(4) でラムダを呼び出し', 'Call lambda with square(4)'],
  ['make_unique でスマートポインタを作成', 'Create smart pointer with make_unique'],
  ['*ptr で中身にアクセス', 'Access contents with *ptr'],
  ['nullptr でヌルポインタを設定', 'Set nullptr'],
  ['nullptr と比較', 'Compare with nullptr'],
  ['{ で初期化子リスト', 'Initializer list with {'],
  ['make_shared で共有ポインタを作成', 'Create shared pointer with make_shared'],
  ['string で文字列を作成', 'Create string'],
  ['move で所有権を移動', 'Move ownership'],
  ['optional で値を保持', 'Hold value with optional'],
  ['has_value で値の有無をチェック', 'Check has_value'],
  ['array で固定長配列を定義', 'Define fixed-size array'],
  ['int で変数を宣言', 'Declare int variable'],
  ['x でコピーキャプチャ', 'Capture x by copy'],
  ['make_unique で排他的ポインタを作成', 'Create unique pointer'],
  ['variant で複数型のうち1つを保持', 'Hold one of multiple types'],
  ['get<型> で値を取得', 'Get value with get<type>'],
  ['tuple で複数の値をまとめる', 'Bundle values with tuple'],
  ['auto で構造化束縛', 'Structured binding with auto'],
  ['string_view で文字列ビューを受け取る', 'Receive string_view'],
  ['greet で関数を呼び出し', 'Call greet function'],
  ['transform で各要素を変換', 'Transform elements'],
  ['accumulate で要素を集約', 'Accumulate elements'],
  ['find_if で条件に合う要素を検索', 'Find element with find_if'],
  ['sort でソート', 'Sort with sort'],
  ['noexcept で例外を投げないことを宣言', 'Declare noexcept'],
  ['+ で足し算', 'Addition with +'],

  // C# 追加パターン
  ['nameというはこに \"CSharp\" を入れる', 'Set name box to CSharp'],
  ['文字列補間を使ってメッセージを出す', 'Print message with interpolation'],
  ['2番目のデータを出す', 'Print 2nd element'],
  ['「大人」と出力', 'Print adult'],
  ['「子供」と出力', 'Print child'],
  ['score と bonus を定義', 'Define score and bonus'],
  ['Dictionaryを作る', 'Create Dictionary'],
  ['Greetというメソッドを定義', 'Define Greet method'],

  // C# 継承/インターフェース/LINQ
  ['Vehicleクラスを定義', 'Define Vehicle class'],
  ['Moveメソッドを定義', 'Define Move method'],
  [':で継承', 'Inherit with :'],
  ['Carインスタンスを作成', 'Create Car instance'],
  ['Moveメソッドを呼び出し', 'Call Move method'],
  ['Shapeクラスを定義', 'Define Shape class'],
  ['Shapeを継承', 'Inherit Shape'],
  ['Circleインスタンスを作成', 'Create Circle instance'],
  ['Drawメソッドを呼び出し', 'Call Draw method'],
  ['Runメソッドを宣言', 'Declare Run method'],
  ['IRunnerを実装', 'Implement IRunner'],
  ['Runメソッドを実装', 'Implement Run method'],
  ['Robotインスタンスを作成', 'Create Robot instance'],
  ['Runメソッドを呼び出し', 'Call Run method'],
  ['Itemインスタンスを作成', 'Create Item instance'],
  ['Priceに値を設定', 'Set Price value'],
  ['tripleを呼び出して表示', 'Call triple and print'],
  ['例外を投げる', 'Throw exception'],
  ['非同期処理を待機 with await', 'Wait async with await'],
  ['遅延を待機', 'Wait for delay'],
  ['空の配列を定義', 'Define empty array'],

  // 日本語括弧（引用符は変換しない - JSONを壊すため）
  ['（', '('],
  ['）', ')'],
]);

// 日本語を含むかチェック
function containsJapanese(str) {
  return /[ぁ-んァ-ン一-龥]/.test(str);
}

// パターンベースの翻訳ルール
const patternRules = [
  // 「Aを表示する」「Aを出力する」
  [/^(.+)を表示する$/, (m) => `Print ${m[1]}`],
  [/^(.+)を出力する$/, (m) => `Print ${m[1]}`],
  [/^(.+)を出力$/, (m) => `Print ${m[1]}`],
  [/^(.+)を表示$/, (m) => `Print ${m[1]}`],

  // 「AにBを代入する」「AにBを入れる」
  [/^(\w+)に(\d+)を代入する$/, (m) => `Assign ${m[2]} to ${m[1]}`],
  [/^(\w+) に (\d+) を代入する$/, (m) => `Assign ${m[2]} to ${m[1]}`],
  [/^(\w+)に(\d+)を入れる$/, (m) => `Set ${m[1]} to ${m[2]}`],
  [/^(\w+) に (\d+) を入れる$/, (m) => `Set ${m[1]} to ${m[2]}`],
  [/^(\w+)に(\d+)を加算する$/, (m) => `Add ${m[2]} to ${m[1]}`],
  [/^(\w+)に(\d+)を足す$/, (m) => `Add ${m[2]} to ${m[1]}`],

  // 「AでBを定義する」
  [/^(\w+)で(\w+)を定義する$/, (m) => `Define ${m[2]} with ${m[1]}`],
  [/^(\w+) で(\w+)を定義する$/, (m) => `Define ${m[2]} with ${m[1]}`],
  [/^(\w+)で(\w+)を定義$/, (m) => `Define ${m[2]} with ${m[1]}`],

  // 「AがBならCと表示する」
  [/^(\w+)が(\d+)以上なら(.+)と表示する$/, (m) => `If ${m[1]} >= ${m[2]}, print ${m[3]}`],
  [/^(\w+)が(\d+)より大きいか判定する$/, (m) => `Check if ${m[1]} > ${m[2]}`],
  [/^(\w+)が(\d+)以上かつ(\d+)以下なら(.+)と表示する$/, (m) => `If ${m[1]} ${m[2]}-${m[3]}, print ${m[4]}`],

  // 「Aが0からBまでループする」
  [/^(\w+)が(\d+)から(\d+)までループする$/, (m) => `Loop ${m[1]} from ${m[2]} to ${m[3]}`],

  // 「Aの値を表示する」
  [/^(\w+)の値を表示する$/, (m) => `Print ${m[1]} value`],

  // 「A構造体を定義する」「Aクラスを定義する」
  [/^(\w+)構造体を定義する$/, (m) => `Define ${m[1]} struct`],
  [/^(\w+)クラスを定義する$/, (m) => `Define ${m[1]} class`],

  // 「A型の変数Bを作成する」
  [/^(\w+)型の変数(\w+)を作成する$/, (m) => `Create ${m[1]} variable ${m[2]}`],

  // 「A関数を定義する」「A関数を呼び出す」
  [/^(\w+)関数を定義する$/, (m) => `Define ${m[1]} function`],
  [/^(\w+)関数を呼び出す$/, (m) => `Call ${m[1]} function`],

  // 「AでBする」一般
  [/^(\w+)で(.+)$/, (m) => {
    let action = m[2];
    // Common verb endings
    action = action.replace(/する$/, '');
    action = action.replace(/定義$/, 'Define');
    action = action.replace(/出力$/, 'Print');
    action = action.replace(/表示$/, 'Print');
    action = action.replace(/作成$/, 'Create');
    action = action.replace(/初期化$/, 'Initialize');
    action = action.replace(/比較$/, 'Compare');
    action = action.replace(/取得$/, 'Get');
    action = action.replace(/追加$/, 'Add');
    action = action.replace(/削除$/, 'Delete');
    return `${action} with ${m[1]}`;
  }],

  // 「AとB」
  [/^(\w+)と(\w+)$/, (m) => `${m[1]} and ${m[2]}`],

  // 「Aを返す」
  [/^(.+)を返す$/, (m) => `Return ${m[1]}`],

  // 「Aと入力」
  [/^(.+)と入力$/, (m) => `Enter ${m[1]}`],
  [/^(.+) と入力$/, (m) => `Enter ${m[1]}`],
];

// 単語置換（フォールバック用）
const wordReplacements = [
  ['を表示', ' and print'],
  ['を出力', ' and print'],
  ['を入力', ' to input'],
  ['を代入', ' to assign'],
  ['を定義', ' to define'],
  ['を作成', ' to create'],
  ['を初期化', ' to initialize'],
  ['を呼び出す', ' to call'],
  ['を実行', ' to execute'],
  ['を取得', ' to get'],
  ['を追加', ' to add'],
  ['を削除', ' to delete'],
  ['を返す', ' to return'],
  ['で', ' with '],
  ['を', ' '],
  ['が', ' '],
  ['に', ' to '],
  ['の', ' of '],
  ['は', ' is '],
  ['演算子', 'operator'],
  ['キーワード', 'keyword'],
  ['変数', 'variable'],
  ['定数', 'constant'],
  ['関数', 'function'],
  ['メソッド', 'method'],
  ['クラス', 'class'],
  ['構造体', 'struct'],
  ['配列', 'array'],
  ['リスト', 'list'],
  ['文字列', 'string'],
  ['数値', 'number'],
  ['値', 'value'],
  ['型', 'type'],
  ['結果', 'result'],
  ['条件', 'condition'],
  ['ループ', 'loop'],
  ['繰り返し', 'loop'],
  ['終了', 'end'],
  ['開始', 'start'],
  ['初期', 'initial'],
  ['比較', 'compare'],
  ['判定', 'check'],
  ['確認', 'check'],
  ['以上', '>='],
  ['以下', '<='],
  ['より大きい', '>'],
  ['より小さい', '<'],
  ['場合', 'case'],
  ['場合', 'case'],
  ['ならば', 'if'],
  ['なら', 'if'],
  ['かつ', 'and'],
  ['または', 'or'],
  ['（', '('],
  ['）', ')'],
];

// コメントを翻訳
function translateComment(comment) {
  if (!containsJapanese(comment)) return comment;

  // 完全一致をチェック
  if (translations.has(comment)) {
    return translations.get(comment);
  }

  // 連続スペースを正規化して再度チェック
  const normalized = comment.replace(/\s+/g, ' ').trim();
  if (translations.has(normalized)) {
    return translations.get(normalized);
  }

  // シングルクォートをエスケープ版と非エスケープ版で両方試す
  const withEscapedQuotes = comment.replace(/'/g, "\\'");
  if (translations.has(withEscapedQuotes)) {
    return translations.get(withEscapedQuotes);
  }

  const withoutEscapedQuotes = comment.replace(/\\'/g, "'");
  if (translations.has(withoutEscapedQuotes)) {
    return translations.get(withoutEscapedQuotes);
  }

  // パターンルールを試す
  let translated = comment;
  for (const [pattern, replacer] of patternRules) {
    const match = translated.match(pattern);
    if (match) {
      translated = replacer(match);
      if (!containsJapanese(translated)) {
        return translated.replace(/\s+/g, ' ').trim();
      }
    }
  }

  // 単語置換は混合テキストを生成するため無効化
  // const sortedReplacements = [...wordReplacements].sort((a, b) => b[0].length - a[0].length);
  // for (const [jp, en] of sortedReplacements) {
  //   translated = translated.split(jp).join(en);
  // }

  return translated.replace(/\s+/g, ' ').trim();
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
  console.log(`\nRemaining unique patterns: ${remainingPatterns.size}`);
  console.log('\nTop 50 remaining patterns:');
  const sorted = [...remainingPatterns.entries()].sort((a, b) => b[1] - a[1]).slice(0, 50);
  for (const [text, count] of sorted) {
    console.log(`${count}x: ${text}`);
  }
}
