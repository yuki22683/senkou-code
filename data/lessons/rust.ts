export const rustData = {
  "language": "rust",
  "lessonId": "rust-1",
  "lessonTitle": "Rust (ラスト) に挑戦！",
  "lessonDescription": "間違いを見つけるのがとても得意な言葉「Rust（ラスト）」のきほんを学びましょう。きっちりしたルールを身につけて、安全なプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "fn main() {\\n    // Hello, Rust! と表示する\\n    println!(\"Hello, Rust!\");\\n}",
      "holeyCode": "fn ___ () {\\n    // Hello, Rust! と表示する\\n    ___!(\"Hello, Rust!\");\\n___",
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
      "holeyCode": "fn ___ () {\\n    // x に 10 を入れる\\n    let ___ = 10;\\n    // y に 5 を入れる\\n    let ___ = 5;\\n    // + でたし算する\\n    ___!(\"{}\", x + y);\\n___",
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
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
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
          "others": ["main()", "x", "y", "println", "}"]
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
      "holeyCode": "fn ___ () {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___!(\"{}\", 10 % 3);\\n___",
      "correctLines": [
          "fn main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    println!(\"{}\", 10 % 3);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["main()", "println", "}"]
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
      "holeyCode": "fn ___ () {\\n    // mut で変更可能にする\\n    let mut ___ = 100;\\n    // += で 20 を足す\\n    hp += ___;\\n    // -= で 50 を引く\\n    hp -= ___;\\n    ___!(\"{}\", hp);\\n___",
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
          "変数hpを宣言し、100を設定します。",
          null,
          "変数hpに20を加算して再代入する。",
          null,
          "変数hpから50を減算して再代入する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["main()", "hp", "20", "50", "println", "}"]
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
      "holeyCode": "fn ___ () {\\n    // score に 100 を入れる\\n    let ___ = 100;\\n    // > で比較する\\n    if score ___ 80 {\\n        ___!(\"すごい！\");\\n    ___\\n___",
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
          "変数scoreを宣言し、100を設定します。",
          null,
          "条件に基づいて分岐処理を行います。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "100"
          ],
          "operators": [
            ">",
            "<",
            ">=",
            "<="
          ],
          "others": ["main()", "score", "println", "}", "}"]
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
      "holeyCode": "fn ___ () {\\n    let ___ = 80;\\n    let ___ = 10;\\n    // && で両方の条件をチェック\\n    if score ___ 70 && bonus > 0 {\\n        ___!(\"ボーナス合格！\");\\n    ___\\n___",
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
          "再代入可能な変数を宣言し、数値を代入します。",
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["main()", "score", "bonus", ">=", "println", "}", "}"]
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
      "holeyCode": "fn ___ () {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let ___ = vec![\"あか\", \"あお\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    ___!(\"{}\", colors[1]);\\n___",
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
          "vec!マクロで文字列のベクタを作成します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "macros": [
            "vec!",
            "println!"
          ],
          "strings": [
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ],
          "others": ["main()", "println", "}"]
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
      "holeyCode": "use std::___::___;\\nfn ___ () {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut ___ = HashMap::new();\\n    // キーと値を追加\\n    colors.___(\"みかん\", \"オレンジ\");\\n    // 中身を出す\\n    ___!(\"{}\", colors[\"みかん\"]);\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "insertメソッドでキーと値のペアを追加します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "macros": [
            "println!"
          ],
          "functions": [
            "insert"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["collections", "HashMap", "main()", "println", "}"]
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