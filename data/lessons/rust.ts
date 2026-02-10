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
      "correctCode": "fn main() {\\n    // Hello, Rust! と表示する\\n    println!(\"Hello, Rust!\");\\n}",
      "holeyCode": "fn ___ () {\\n    // Hello, Rust! と表示する\\n    ___!(\"___\");\\n___",
      "correctLines": [
          "fn main() {",
          "    // Hello, Rust! と表示する",
          "    println!(\"Hello, Rust!\");",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "プログラムの終わりです。"
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
      "title": "便利な「はこ」変数（へんすう）",
      "correctCode": "fn main() {\\n    // x に 10 を入れる\\n    let x = 10;\\n    // y に 5 を入れる\\n    let y = 5;\\n    // + でたし算する\\n    println!(\"{}\", x + y);\\n}",
      "holeyCode": "fn ___ () {\\n    // x に 10 を入れる\\n    let ___ = ___;\\n    // y に 5 を入れる\\n    let ___ = ___;\\n    // + でたし算する\\n    ___!(\"___\", ___ + ___);\\n___",
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
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数xを宣言し、10を代入します。",
          null,
          "変数yを宣言し、5を代入します。",
          null,
          "println!マクロでx + yの計算結果を表示します。フォーマット文字列は{}を使います。",
          "関数のブロックを閉じる括弧です。"
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
      "correctCode": "fn main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    println!(\"{}\", 10 % 3);\\n}",
      "holeyCode": "fn ___ () {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___!(\"___\", ___ ___ ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    println!(\"{}\", 10 % 3);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "println!マクロで10 % 3の計算結果を表示します。フォーマット文字列は{}、剰余演算子は%を使います。",
          "関数のブロックを閉じる括弧です。"
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
      "correctCode": "fn main() {\\n    // mut で変更可能にする\\n    let mut hp = 100;\\n    // += で 20 を足す\\n    hp += 20;\\n    // -= で 50 を引く\\n    hp -= 50;\\n    println!(\"{}\", hp);\\n}",
      "holeyCode": "fn ___ () {\\n    // mut で変更可能にする\\n    let mut ___ = ___;\\n    // += で 20 を足す\\n    ___ += ___;\\n    // -= で 50 を引く\\n    ___ -= ___;\\n    ___!(\"___\", ___);\\n___",
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
          "fn main()でメイン関数を定義します。",
          null,
          "mutキーワードで変更可能な変数hpを宣言し、100を代入します。",
          null,
          "変数hpに+=演算子で20を加算します。",
          null,
          "変数hpから-=演算子で50を減算します。",
          "println!マクロで変数hpの値を表示します。フォーマット文字列は{}を使います。",
          "関数のブロックを閉じる括弧です。"
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
      "correctCode": "fn main() {\\n    // score に 100 を入れる\\n    let score = 100;\\n    // > で比較する\\n    if score > 80 {\\n        println!(\"すごい！\");\\n    }\\n}",
      "holeyCode": "fn ___ () {\\n    // score に 100 を入れる\\n    let ___ = ___;\\n    // > で比較する\\n    if ___ ___ ___ {\\n        ___!(\"___\");\\n    ___\\n___",
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
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数scoreを宣言し、100を代入します。",
          null,
          "if文でscore > 80の条件を評価します。変数score、比較演算子>、比較値80を入力します。",
          "println!マクロで「すごい！」と表示します。",
          "ifブロックを閉じる括弧です。",
          "関数のブロックを閉じる括弧です。"
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
      "correctCode": "fn main() {\\n    let score = 80;\\n    let bonus = 10;\\n    // && で両方の条件をチェック\\n    if score >= 70 && bonus > 0 {\\n        println!(\"ボーナス合格！\");\\n    }\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = ___;\\n    let ___ = ___;\\n    // && で両方の条件をチェック\\n    if ___ ___ ___ ___ ___ ___ ___ {\\n        ___!(\"___\");\\n    ___\\n___",
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
          "fn main()でメイン関数を定義します。",
          "変数scoreを宣言し、80を代入します。",
          "変数bonusを宣言し、10を代入します。",
          null,
          "if文でscore >= 70 && bonus > 0の複合条件を評価します。&&は「かつ」の意味です。",
          "println!マクロで「ボーナス合格！」と表示します。",
          "ifブロックを閉じる括弧です。",
          "関数のブロックを閉じる括弧です。"
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
      "correctCode": "fn main() {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let colors = vec![\"あか\", \"あお\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    println!(\"{}\", colors[1]);\\n}",
      "holeyCode": "fn ___ () {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let ___ = ___![\"___\", \"___\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    ___!(\"___\", ___[___]);\\n___",
      "correctLines": [
          "fn main() {",
          "    // colors というベクタを作る（'あか', 'あお'の順）",
          "    let colors = vec![\"あか\", \"あお\"];",
          "    // 2番目のデータ（インデックス1）を出す",
          "    println!(\"{}\", colors[1]);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数colorsにvec!マクロで「あか」「あお」の文字列ベクタを作成します。",
          null,
          "println!マクロでcolors[1]（インデックス1＝2番目の要素「あお」）を表示します。",
          "関数のブロックを閉じる括弧です。"
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
      "correctCode": "use std::collections::HashMap;\\nfn main() {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut colors = HashMap::new();\\n    // キーと値を追加\\n    colors.insert(\"みかん\", \"オレンジ\");\\n    // 中身を出す\\n    println!(\"{}\", colors[\"みかん\"]);\\n}",
      "holeyCode": "use ___::___::___;\\nfn ___ () {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut ___ = ___::___();\\n    // キーと値を追加\\n    ___.___(\"___\", \"___\");\\n    // 中身を出す\\n    ___!(\"___\", ___[\"___\"]);\\n___",
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
          "std::collections::HashMapをuse文でインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数colorsにHashMap::new()で新しい空のハッシュマップを作成します。",
          null,
          "insertメソッドでキー「みかん」と値「オレンジ」のペアを追加します。",
          null,
          "println!マクロでcolors[\"みかん\"]（キー「みかん」の値）を表示します。",
          "関数のブロックを閉じる括弧です。"
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