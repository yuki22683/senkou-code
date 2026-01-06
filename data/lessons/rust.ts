export const rustData = {
  "language": "rust",
  "lessonId": "rust-1",
  "lessonTitle": "Rust (ラスト) にちょうせん！",
  "lessonDescription": "間違いを見つけるのがとても得意な言葉「Rust（ラスト）」のきほんを学びましょう。きっちりしたルールを身につけて、安全なプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Rustを使って画面に文字を表示してみましょう。println! という特別な関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Rustの「おまじない」",
          "content": "# ! がつく関数\n\n画面に文字を出したいときは、`println!()` を使います。さいごに `!` がつくのがRustの面白い特徴ですよ。プログラムは `fn main() { ... }` の中に書いていきます。\n\n**コード例：**\n```rust\nfn main() {\n    println!(\"Hello, Rust!\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // 画面にメッセージを出す関数\n    println!(\"Hello, Rust!\");\n}",
      "holeyCode": "fn main() {\n    // 画面にメッセージを出す関数\n    println!(\"___\");\n}",
      "correctLines": [
        "fn main() {",
        "    println!(\"Hello, Rust!\");",
        "}"
      ],
      "lineHints": [
        "ここからプログラムがスタートします、という合図です。",
        "println! を使って、() の中の文字を画面に出します。",
        "プログラムの終わりです。"
      ],
      "candidates": {
        "strings": [
          "Hello, Rust!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Rust!\n"
        }
      ]
    },
    {
      "title": "数字を入れる「はこ」",
      "description": "数字をしまっておく「はこ」を作って、中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "let でラベルを貼ります",
          "content": "# let を使いましょう\n\nRustでは、`let` という言葉を使って「はこ（変数）」を作ります。Rustのはこは、一度入れたら中身を変えないのが基本という、とても慎重なルールがあるのですよ。\n\n**コード例：**\n```rust\nlet x = 10;\nprintln!(\"{}\", x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // x というはこに 10 を入れる\n    let x = 10;\n    println!(\"{}\", x);\n}",
      "holeyCode": "fn main() {\n    // x というはこに 10 を入れる\n    let x = ___ ;\n    println!(\"{}\", ___);\n}",
      "correctLines": [
        "fn main() {",
        "    let x = 10;",
        "    println!(\"{}\", x);",
        "}"
      ],
      "lineHints": [
        null,
        "let x = 10 と入力して、はこを作ります。",
        "はこの名前 x を指定して、表示させます。"
      ],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Rustを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 四則演算\n\nRustでも、算数と同じ記号を使って計算をします。計算結果を出すときは `{}` という窓（プレースホルダー）を使いますよ。\n\n**コード例：**\n```rust\nlet a = 5;\nlet b = 3;\nprintln!(\"{}\", a + b);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let a = 5;\n    let b = 3;\n    // たし算した答えを出す\n    println!(\"{}\", a + b);\n}",
      "holeyCode": "fn main() {\n    let a = 5;\n    let b = 3;\n    println!(\"{}\", a ___ b);\n}",
      "correctLines": [
        "fn main() {",
        "    let a = 5;",
        "    let b = 3;",
        "    println!(\"{}\", a + b);",
        "}"
      ],
      "lineHints": [
        null,
        "a に 5 を入力します。",
        "b に 3 を入力します。",
        "たし算なので `+\` を使います。"
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "println! の `{}` を使って、文章の中に「はこ（変数）」の中身を表示します。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "{}（なみかっこ）を使いましょう",
          "content": "# データの埋め込み\n\n`\" \"` の中で `{}` と入力したところに、あとの方の変数のなかみが入る仕組みです。\n\n**コード例：**\n```rust\nlet age = 10;\nprintln!(\"私は {} 歳です\", age);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let age = 10;\n    println!(\"I am {} years old.\", age);\n}",
      "holeyCode": "fn main() {\n    let age = 10;\n    println!(\"I am {} years old.\", ___);\n}",
      "correctLines": [
        "fn main() {",
        "    let age = 10;",
        "    println!(\"I am {} years old.\", age);",
        "}"
      ],
      "lineHints": [
        null,
        "age に 10 を入力します。",
        "はこの名前 age を指定します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 10 years old.\n"
        }
      ]
    },
    {
      "title": "データをならべる「ベクタ」",
      "description": "「ベクタ」という機能を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "vec!（ベック）を使いましょう",
          "content": "# 動的な配列\n\n`vec![ ]` という言葉を使うと、中身を自由に入れ替えられる配列が作れます。インデックスは 0 から数えますよ。\n\n**コード例：**\n```rust\nlet v = vec![10, 20];\nprintln!(\"{}\", v[1]); // 20 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![10, 20];\n    // 2番目（番号は1）を出す\n    println!(\"{}\", nums[1]);\n}",
      "holeyCode": "fn main() {\n    let nums = vec![10, 20];\n    println!(\"{}\", nums[___]);\n}",
      "correctLines": [
        "fn main() {",
        "    let nums = vec![10, 20];",
        "    println!(\"{}\", nums[1]);",
        "}"
      ],
      "lineHints": [
        null,
        "vec![10, 20] と入力して配列を作ります。",
        "2番目のデータの番号は 1 です。 `nums[1]` と入力してください。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# { } を使いましょう\n\nRustでも、`if 条件` のあとに `{ }` を入力して、その中にやりたいことを入力します。条件のまわりに `( )` は必要ありませんよ。\n\n**コード例：**\n```rust\nif score > 80 {\n    println!(\"合格！\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let score = 100;\n    if score > 80 {\n        println!(\"Great\");\n    }\n}",
      "holeyCode": "fn main() {\n    let score = 100;\n    if score ___ 80 {\n        println!(\"___");\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let score = 100;",
        "    if score > 80 {",
        "        println!(\"Great\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "Great と表示します。",
        "さいごに } で閉じるのを忘れないでください。"
      ],
      "candidates": {
        "operators": [
          ">
        ],
        "strings": [
          "Great"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else で分けます",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。Rustでは `} else {` というふうに続けて書くのが一般的ですよ。\n\n**コード例：**\n```rust\nif x > 10 {\n    println!(\"大きい\");\n} else {\n    println!(\"小さい\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let x = 5;\n    if x > 10 {\n        println!(\"Big\");\n    } else {\n        println!(\"Small\");\n    }\n}",
      "holeyCode": "fn main() {\n    let x = 5;\n    if x > 10 {\n        println!(\"Big\");\n    } ___ {\n        println!(\"Small\");\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let x = 5;",
        "    if x > 10 {",
        "        println!(\"Big\");",
        "    } else {",
        "        println!(\"Small\");",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "x に 5 を入力します。",
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        "なみかっこを閉じます。"
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "for ループを使って、配列（ベクタ）の中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "in を使いましょう",
          "content": "# 全部取り出します\n\n`for 名前 in &配列` と入力すると、中身を一つずつ取り出して処理できます。 `&` をつけるのがRustのきっちりしたルールです。\n\n**コード例：**\n```rust\nlet nums = vec![1, 2, 3];\nfor n in &nums {\n    println!(\"{}\", n);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![1, 2, 3];\n    // 全部取り出すループ\n    for n in &nums {\n        println!(\"{}\", n);\n    }\n}",
      "holeyCode": "fn main() {\n    let nums = vec![1, 2, 3];\n    for n in &___ {\n        println!(\"{}\", n);\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let nums = vec![1, 2, 3];",
        "    for n in &nums {",
        "        println!(\"{}\", n);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        "vec![1, 2, 3] と入力して配列を作ります。",
        "取り出したい対象の配列 `nums` を指定します。"
      ],
      "candidates": {
        "variables": [
          "nums"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "名前で探す「じしょ」",
      "description": "HashMap（ハッシュマップ）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "HashMap",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができますよ。 Rustでは、さいしょに `use` という準備が必要です。\n\n**コード例：**\n```rust\nuse std::collections::HashMap;\nlet mut scores = HashMap::new();\nscores.insert(\"Math\", 90);\nprintln!(\"{}\", scores[\"Math\"]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::collections::HashMap;\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(\"Math\", 90);\n    println!(\"{}\", scores[\"Math\"]);\n}",
      "holeyCode": "use std::collections::HashMap;\nfn main() {\n    let mut scores = HashMap::new();\n    scores.___(\"Math\", 90);\n    println!(\"{}\", scores[\"___\"]);\n}",
      "correctLines": [
        "use std::collections::HashMap;",
        "fn main() {",
        "    let mut scores = HashMap::new();",
        "    scores.insert(\"Math\", 90);",
        "    println!(\"{}\", scores[\"Math\"]);",
        "}"
      ],
      "lineHints": [
        "HashMapを使えるように準備します。",
        null,
        "新しくはこを作ります。",
        "insert（インサート）でデータを入れます。",
        "\"Math\" という名前を指定してデータを取り出します。"
      ],
      "candidates": {
        "functions": [
          "insert"
        ],
        "strings": [
          "Math"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "fn と名前",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。 Rustでは `fn` という言葉を使います。\n\n**コード例：**\n```rust\nfn aisatsu() {\n    println!(\"こんにちは\");\n}\n\nfn main() {\n    aisatsu();\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn greet() {\n    println!(\"Hello\");\n}\nfn main() {\n    greet();\n}",
      "holeyCode": "fn greet() {\n    println!(\"Hello\");\n}\nfn main() {\n    ___();\n}",
      "correctLines": [
        "fn greet() {",
        "    println!(\"Hello\");",
        "}",
        "fn main() {",
        "    greet();",
        "}"
      ],
      "lineHints": [
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        null,
        "greet(); と入力して、関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
};