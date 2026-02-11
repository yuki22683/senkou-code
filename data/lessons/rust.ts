export const rustData = {
  "language": "rust",
  "lessonId": "rust-1",
  "lessonTitle": "Rust (ラスト) に挑戦！",
  "lessonDescription": "間違いを見つけるのがとても得意な言葉「Rust（ラスト）」のきほんを学びましょう。きっちりしたルールを身につけて、安全なプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Rustへようこそ！",
      "content": "**Rust（ラスト）** は、Mozilla（モジラ）が作った安全で速いプログラミング言語です。\\n\\n間違いを見つけるのがとても得意で、プログラムが壊れにくくなります。\\n\\nシステムプログラミングやWebAssemblyなどに使われています。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Rustで画面に文字を出すには `println!` マクロを使います。\\n\\n```rust\\nfn main() {\\n    println!(\\\"Hello, Rust!\\\");\\n}\\n```\\n\\n`fn main()` はプログラムの開始地点です。`println!` の `!` はマクロであることを示しています。"
    },
    {
      "title": "変数を使う",
      "content": "データを入れておく「はこ」を**変数**と呼びます。\\n\\n```rust\\nlet x = 10;\\nlet name = \\\"太郎\\\";\\n```\\n\\n`let` で変数を作ります。Rustの変数は**変更できない**のがふつうです。変更したいときは `let mut x = 10;` と書きます。"
    },
    {
      "title": "計算する",
      "content": "Rustでは数字を計算できます。\\n\\n```rust\\nlet a = 5;\\nlet b = 3;\\nprintln!(\\\"{}\\\", a + b);  // 8\\nprintln!(\\\"{}\\\", 10 % 3); // 1（あまり）\\n```\\n\\n`{}` は変数の値を埋め込む場所です。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```rust\\nlet score = 85;\\nif score > 80 {\\n    println!(\\\"すごい！\\\");\\n} else {\\n    println!(\\\"がんばろう\\\");\\n}\\n```\\n\\n条件が正しければ `{ }` の中が実行されます。"
    },
    {
      "title": "ベクタとハッシュマップ",
      "content": "複数のデータをまとめて扱えます。\\n\\n**ベクタ**（配列のようなもの）:\\n```rust\\nlet colors = vec![\\\"あか\\\", \\\"あお\\\"];\\nprintln!(\\\"{}\\\", colors[0]);\\n```\\n\\n**ハッシュマップ**（辞書のようなもの）はHashMapを使います。"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "プログラムの基本！画面にメッセージを表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Rust（ラスト）とは？",
          "content": "# 安全で速い！最新のプログラミング言語\\n\\n**Rust**（ラスト）は、「間違いを事前に防ぐ」ことがとても得意なプログラミング言語です。\\n\\n**Rustのすごいところ：**\\n- プログラムのミスを実行する前に見つけてくれる\\n- とても速く動く\\n- 世界中のプログラマーが「一番好き！」と選ぶ人気の言語\\n\\n**たとえるなら：**\\n厳しいけど優しい先生のような言語です。「ここ間違ってるよ」と教えてくれるので、安心してプログラムが書けます！"
        },
        {
          "title": "Rustの「おまじない」",
          "content": "# println! で画面に表示\\n\\nRustで文字を画面に表示するには、`println!`（プリントラインびっくり）を使います。\\n\\n**ポイント：**\\n- `!` がつくのがRustの特徴（マクロと呼ばれます）\\n- プログラムは `fn main() { }` の中に書く\\n- `fn` は「function（関数）」の略\\n\\n**コード例：**\\n```rust\\nfn main() {\\n    println!(\"ヤッホー！\");\\n}\\n// 「ヤッホー！」と画面に表示される\\n```\\n\\n`println!` の `!` は「マクロ」という特別な機能の印です。今は「おまじない」と思っておけばOK！"
        }
      ],
      "correctCode": "// main関数を定義\\nfn main() {\\n    // Hello, Rust! と表示する\\n    println!(\"Hello, Rust!\");\\n// ブロックを閉じる\\n}",
      "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // Hello, Rust! と表示する\\n    ___!(\"___\");\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// main関数を定義",
          "fn main() {",
          "    // Hello, Rust! と表示する",
          "    println!(\"Hello, Rust!\");",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "strings": [
            "Hello, Rust!"
          ],
          "others": ["main()", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, Rust!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "変数とは？",
          "content": "# データを保存する「はこ」\\n\\n**変数** は、数字や文字を入れておける「はこ」のことです。名前をつけて、あとで使うことができます。\\n\\n**たとえば：**\\n- 「りんごの数」というラベルの箱に「5」を入れる\\n- あとで「りんごの数」と呼べば「5」が出てくる\\n\\n**Rustでの書き方：**\\n```rust\\nlet x = 10;  // xという箱に10を入れる\\nprintln!(\"{}\", x);  // xの中身（10）を表示\\n```\\n\\n`let` は「この名前で箱を作るよ」という意味です。"
        },
        {
          "title": "計算の記号（演算子）",
          "content": "# 四則演算\\n\\nRustでも算数と同じ記号で計算ができます。\\n\\n**4つの基本記号：**\\n- **+**（プラス）: たし算\\n- **-**（マイナス）: ひき算\\n- **\\***（アスタリスク）: かけ算（×の代わり）\\n- **/**（スラッシュ）: わり算（÷の代わり）\\n\\n**コード例：**\\n```rust\\nlet a = 10;\\nlet b = 5;\\nprintln!(\"{}\", a + b);  // 15 と表示される\\n```\\n\\n`println!` の `{}` は「ここに値を入れてね」という目印です。"
        }
      ],
      "correctCode": "fn main() {\\n    // x に 10 を入れる\\n    let x = 10;\\n    // y に 5 を入れる\\n    let y = 5;\\n    // + でたし算する\\n    println!(\"{}\", x + y);\\n}", "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // x に 10 を入れる\\n    let ___ = ___;\\n    // y に 5 を入れる\\n    let ___ = ___;\\n    // + でたし算する\\n    ___!(\\\"___\\\", ___ + ___);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "fn main() {",
          "    // x に 10 を入れる",
          "    let x = 10;",
          "    // y に 5 を入れる",
          "    let y = 5;",
          "    // + でたし算する",
          "    println!(\"{}\", x + y);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "numbers": [
            "10",
            "5"
          ],
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["main()", "x", "y", "println", "}", "{}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "description": "「あまり」について学びます",
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "content": "# 剰余演算子「%」\\n\\n`%`（パーセント）は、割り算の **「あまり」** を計算する特別な記号です。\\n\\n**わかりやすい例：**\\n- 10このアメを3人で分けると？\\n- 1人3こずつで、**1こあまる**\\n- これを `10 % 3` と書くと、答えは `1`\\n\\n**コード例：**\\n```rust\\nprintln!(\"{}\", 10 % 3);  // 1（あまり1）\\nprintln!(\"{}\", 8 % 4);   // 0（あまりなし＝割り切れる）\\n```\\n\\n**使いどころ：**\\n- 偶数か奇数か調べる（`n % 2` が0なら偶数）\\n- 時計の計算（24を超えたら0に戻る、など）"
        }
      ],
      "correctCode": "fn main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    println!(\"{}\", 10 % 3);\\n}", "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___!(\\\"___\\\", ___ ___ ___);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "fn main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    println!(\"{}\", 10 % 3);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "numbers": [
            "10",
            "3"
          ],
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["main()", "println", "}", "{}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "累算代入演算子（+=、-=）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "累算代入演算子とは？",
          "content": "# 値をかんたんに増やす・減らす\\n\\n`+=`（プラスイコール）と `-=`（マイナスイコール）は、変数の中身を増やしたり減らしたりする便利な記号です。\\n\\n**Rustの大事なルール：`mut`が必要！**\\nRustでは、変数を変更するには `let mut`（レット ミュート）と書く必要があります。`mut` は「mutable（変更できる）」の略です。\\n\\n**コード例：**\\n```rust\\nlet mut score = 100;  // mut をつけて変更可能に\\nscore += 10;          // 10を足す → 110に\\nscore -= 50;          // 50を引く → 60に\\n```\\n\\n`mut` がないと「この変数は変えちゃダメ！」とRustが怒ります。"
        }
      ],
      "correctCode": "fn main() {\\n    // mut で変更可能にする\\n    let mut hp = 100;\\n    // += で 20 を足す\\n    hp += 20;\\n    // -= で 50 を引く\\n    hp -= 50;\\n    println!(\"{}\", hp);\\n}", "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // mut で変更可能にする\\n    let mut ___ = ___;\\n    // += で 20 を足す\\n    ___ += ___;\\n    // -= で 50 を引く\\n    ___ -= ___;\\n    // 出力\\n    ___!(\\\"___\\\", ___);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "fn main() {",
          "    // mut で変更可能にする",
          "    let mut hp = 100;",
          "    // += で 20 を足す",
          "    hp += 20;",
          "    // -= で 50 を引く",
          "    hp -= 50;",
          "    println!(\"{}\", hp);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "numbers": [
            "100",
            "20",
            "50"
          ],
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["main()", "hp", "println", "}", "{}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "content": "# プログラムに「判断」させよう\\n\\n**条件分岐** は、「もし〜なら、〇〇する」という判断をプログラムにさせる仕組みです。\\n\\n**身近な例：**\\n- もし80点以上なら → 「合格！」と表示\\n- もし雨なら → 傘を持っていく\\n- もしHPが0なら → ゲームオーバー\\n\\n**Rustでの書き方：**\\n```rust\\nif score > 80 {\\n    println!(\"合格！\");\\n}\\n```\\n\\n**読み方：**\\n- `if` →「もし」\\n- `score > 80` →「スコアが80より大きいなら」\\n- `{ }` の中 →「これをやる」"
        }
      ],
      "correctCode": "fn main() {\\n    // score に 100 を入れる\\n    let score = 100;\\n    // > で比較する\\n    if score > 80 {\\n        println!(\"すごい！\");\\n    }\\n}", "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // score に 100 を入れる\\n    let ___ = ___;\\n    // > で比較する\\n    if ___ ___ ___ {\\n        // 出力\\n        ___!(\\\"___\\\");\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "fn main() {",
          "    // score に 100 を入れる",
          "    let score = 100;",
          "    // > で比較する",
          "    if score > 80 {",
          "        println!(\"すごい！\");",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "numbers": [
            "100",
            "80"
          ],
          "strings": [
            "すごい！"
          ],
          "operators": [
            ">",
            "<",
            ">=",
            "<="
          ],
          "others": ["main()", "score", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "すごい！\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "content": "# 論理演算子\\n\\n2つ以上の条件を組み合わせたいときに使う記号です。\\n\\n**2つの記号：**\\n- `&&`（アンドアンド）：「かつ」＝ **両方とも** 正しいとき\\n- `||`（オアオア）：「または」＝ **どちらか** 正しいとき\\n\\n**身近な例：**\\n- 遊園地：「18歳以上 **かつ** チケットあり」なら乗れる\\n- おやつ：「宿題終わった **または** お手伝いした」ならOK\\n\\n**コード例：**\\n```rust\\nif score >= 70 && bonus > 0 {\\n    // 70点以上 かつ ボーナスあり → 合格！\\n    println!(\"合格！\");\\n}\\n```"
        }
      ],
      "correctCode": "fn main() {\\n    let score = 80;\\n    let bonus = 10;\\n    // && で両方の条件をチェック\\n    if score >= 70 && bonus > 0 {\\n        println!(\"ボーナス合格！\");\\n    }\\n}", "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // 変数を宣言\\n    let ___ = ___;\\n    // 変数を宣言\\n    let ___ = ___;\\n    // && で両方の条件をチェック\\n    if ___ ___ ___ ___ ___ ___ ___ {\\n        // 出力\\n        ___!(\\\"___\\\");\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "fn main() {",
          "    let score = 80;",
          "    let bonus = 10;",
          "    // && で両方の条件をチェック",
          "    if score >= 70 && bonus > 0 {",
          "        println!(\"ボーナス合格！\");",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "numbers": [
            "80",
            "10",
            "70",
            "0"
          ],
          "strings": [
            "ボーナス合格！"
          ],
          "operators": [
            "&&",
            "||",
            "&",
            "|",
            ">=",
            ">"
          ],
          "others": ["main()", "score", "bonus", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナス合格！\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「ベクタ」",
      "description": "たくさんのデータをまとめましょう「ベクタ」の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "ベクタ（Vec）とは？",
          "content": "# データを並べてまとめる「長い箱」\\n\\n**ベクタ（Vec）** は、たくさんのデータを順番に並べて入れられる「長い箱」です。\\n\\n**たとえば：**\\n- 買い物リストの商品を全部まとめる\\n- テストの点数を全部まとめる\\n- 友だちの名前を全部まとめる\\n\\n100個でも1000個でも、1つの変数でまとめて管理できます！\\n\\n**作り方：**\\n```rust\\nlet fruits = vec![\"りんご\", \"バナナ\", \"みかん\"];\\n// vec! で ベクタを作る\\n```"
        },
        {
          "title": "ベクタの番号は「0」から！",
          "content": "# [ ]で番号を指定して取り出す\\n\\n`[番号]` で何番目のデータか指定して取り出せます。\\n\\n**大事なルール：番号は「0」から！**\\n- 1番目 → `[0]`\\n- 2番目 → `[1]`\\n- 3番目 → `[2]`\\n\\n**コード例：**\\n```rust\\nlet fruits = vec![\"りんご\", \"バナナ\", \"みかん\"];\\n//                  ↑0番    ↑1番     ↑2番\\nprintln!(\"{}\", fruits[0]);  // りんご\\nprintln!(\"{}\", fruits[1]);  // バナナ\\n```\\n\\nプログラミングでは「0から数える」のが世界共通のルールです！"
        }
      ],
      "correctCode": "fn main() {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let colors = vec![\"あか\", \"あお\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    println!(\"{}\", colors[1]);\\n}", "holeyCode": "// main関数を定義\\nfn ___ () {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let ___ = ___![\\\"___\\\", \\\"___\\\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    ___!(\\\"___\\\", ___[___]);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "fn main() {",
          "    // colors というベクタを作る（'あか', 'あお'の順）",
          "    let colors = vec![\"あか\", \"あお\"];",
          "    // 2番目のデータ（インデックス1）を出す",
          "    println!(\"{}\", colors[1]);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "macros": [
            "vec",
            "println"
          ],
          "strings": [
            "あか",
            "あお",
            "{}"
          ],
          "numbers": [
            "1"
          ],
          "others": ["main()", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "名前で引き出す「辞書」",
      "description": "キーと値のペアでデータを管理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "辞書（HashMap）とは？",
          "content": "# 名前で検索できる「辞書」\\n\\n**HashMap**（ハッシュマップ）は、「名前」と「データ」をセットにして保存できる仕組みです。本物の辞書のように使えます。\\n\\n**たとえば果物の色辞書：**\\n- 「りんご」→「あか」\\n- 「バナナ」→「きいろ」\\n- 「みかん」→「オレンジ」\\n\\n**使う準備：**\\n```rust\\nuse std::collections::HashMap;  // 機能を読み込む\\nlet mut fruits = HashMap::new();  // 空の辞書を作る\\nfruits.insert(\"りんご\", \"あか\");  // データを追加\\n```\\n\\n`use` は「この機能を使うよ」という宣言です。"
        },
        {
          "title": "辞書の使い方",
          "content": "# 名前（キー）で取り出す\\n\\n辞書に入れたデータは、名前（キー）を指定して取り出せます。\\n\\n**コード例：**\\n```rust\\nuse std::collections::HashMap;\\nfn main() {\\n    let mut fruits = HashMap::new();\\n    fruits.insert(\"りんご\", \"あか\");  // 追加\\n    fruits.insert(\"バナナ\", \"きいろ\");  // 追加\\n    \\n    println!(\"{}\", fruits[\"りんご\"]);  // あか と表示\\n}\\n```\\n\\n**ポイント：**\\n- `insert(名前, データ)` で追加\\n- `辞書[名前]` で取り出し\\n- 番号ではなく「名前」で探せるのが便利！"
        }
      ],
      "correctCode": "use std::collections::HashMap;\\nfn main() {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut colors = HashMap::new();\\n    // キーと値を追加\\n    colors.insert(\"みかん\", \"オレンジ\");\\n    // 中身を出す\\n    println!(\"{}\", colors[\"みかん\"]);\\n}", "holeyCode": "// ライブラリを読み込む\\nuse ___::___::___;\\n// main関数を定義\\nfn ___ () {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut ___ = ___::___();\\n    // キーと値を追加\\n    ___.___(\\\"___\\\", \\\"___\\\");\\n    // 中身を出す\\n    ___!(\\\"___\\\", ___[\\\"___\\\"]);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "use std::collections::HashMap;",
          "fn main() {",
          "    // 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "    let mut colors = HashMap::new();",
          "    // キーと値を追加",
          "    colors.insert(\"みかん\", \"オレンジ\");",
          "    // 中身を出す",
          "    println!(\"{}\", colors[\"みかん\"]);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "macros": [
            "println"
          ],
          "functions": [
            "insert",
            "new"
          ],
          "strings": [
            "みかん",
            "オレンジ",
            "{}"
          ],
          "others": ["std", "collections", "HashMap", "main()", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      }
  ]
};