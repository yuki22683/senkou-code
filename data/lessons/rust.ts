export const rustData = {
  "language": "rust",
  "lessonId": "rust-1",
  "lessonTitle": "Rust I",
  "lessonDescription": "安全性と速度を兼ね備えたRustの基本を学びます。所有権という独自概念がありますが、まずは基本構文から。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Rustで画面に文字を表示するには println! マクロを使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "println!",
          "content": "# マクロ\n\n`!` が付いているのは関数ではなくマクロと呼ばれます。`fn main()` がエントリーポイントです。\n\n**コード例：**\n```rust\nfn main() {\n    println!(\"Hello, Rust!\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    println!(\"Hello, Rust!\");\n}",
      "holeyCode": "fn main() {\n    println!(\"___\");\n}",
      "correctLines": ["fn main() {", "    println!(\"Hello, Rust!\");", "}"],
      "lineHints": [null, "Hello, Rust! を出力します。"],
      "candidates": { "strings": ["Hello, Rust!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, Rust!\n" }]
    },
    {
      "title": "変数",
      "description": "変数を宣言して値を代入しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "let",
          "content": "# 不変性\n\nRustの変数はデフォルトで値を変更できません。\n\n**コード例：**\n```rust\nlet x = 10;\nprintln!(\"{}\", x);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let x = 10;\n    println!(\"{}\", x);\n}",
      "holeyCode": "fn main() {\n    let x = ___ ;\n    println!(\"{}\", ___);\n}",
      "correctLines": ["fn main() {", "    let x = 10;", "    println!(\"{}\", x);", "}"],
      "lineHints": [null, "10を代入します。", "変数xを出力します。"],
      "candidates": { "variables": ["x"], "numbers": ["10"] },
      "testCases": [{ "input": "", "expected_output": "10\n" }]
    },
    {
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算",
          "content": "# 四則演算\n\n他言語と同様に直感的に記述できます。\n\n**コード例：**\n```rust\nlet a = 5;\nlet b = 3;\nprintln!(\"{}\", a + b);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let a = 5;\n    let b = 3;\n    println!(\"{}\", a + b);\n}",
      "holeyCode": "fn main() {\n    let a = 5;\n    let b = 3;\n    println!(\"{}\", a ___ b);\n}",
      "correctLines": ["fn main() {", "    let a = 5;", "    let b = 3;", "    println!(\"{}\", a + b);", "}"],
      "lineHints": [null, null, null, "a + b を出力します。"],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8\n" }]
    },
    {
      "title": "フォーマット出力",
      "description": "変数の値を埋め込んで表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "プレースホルダー",
          "content": "# {}\n\n`{}` の部分に変数の値が埋め込まれます。\n\n**コード例：**\n```rust\nlet age = 20;\nprintln!(\"年齢は {} 歳です\", age);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let age = 20;\n    println!(\"I am {} years old.\", age);\n}",
      "holeyCode": "fn main() {\n    let age = 20;\n    println!(\"I am {} years old.\", ___);\n}",
      "correctLines": ["fn main() {", "    let age = 20;", "    println!(\"I am {} years old.\", age);", "}"],
      "lineHints": [null, null, "age変数を指定します。"],
      "candidates": { "variables": ["age"] },
      "testCases": [{ "input": "", "expected_output": "I am 20 years old.\n" }]
    },
    {
      "title": "ベクタ (可変長配列)",
      "description": "可変長配列であるベクタを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "vec!マクロ",
          "content": "# 動的配列\n\n可変長のリストとして使えます。インデックスは0から始まります。\n\n**コード例：**\n```rust\nlet v = vec![10, 20];\nprintln!(\"{}\", v[1]); // 20 を出力\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![10, 20];\n    println!(\"{}\", nums[1]);\n}",
      "holeyCode": "fn main() {\n    let nums = vec![10, 20];\n    println!(\"{}\", nums[___]);\n}",
      "correctLines": ["fn main() {", "    let nums = vec![10, 20];", "    println!(\"{}\", nums[1]);", "}"],
      "lineHints": [null, null, "インデックス1を指定します。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "20\n" }]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# 括弧不要\n\nRustでは条件式の丸括弧は不要です。\n\n**コード例：**\n```rust\nif score > 80 {\n    println!(\"合格\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let score = 100;\n    if score > 80 {\n        println!(\"Great\");\n    }\n}",
      "holeyCode": "fn main() {\n    let score = 100;\n    if score ___ 80 {\n        println!(\"___\");\n    }\n}",
      "correctLines": ["fn main() {", "    let score = 100;", "    if score > 80 {", "        println!(\"Great\");", "    }", "}"],
      "lineHints": [null, null, "比較演算子 > を使います。", "Great を出力します。"],
      "candidates": { "operators": [">"], "strings": ["Great"] },
      "testCases": [{ "input": "", "expected_output": "Great\n" }]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# 分岐\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```rust\nif x > 10 {\n    println!(\"Big\");\n} else {\n    println!(\"Small\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let x = 5;\n    if x > 10 {\n        println!(\"Big\");\n    } else {\n        println!(\"Small\");\n    }\n}",
      "holeyCode": "fn main() {\n    let x = 5;\n    if x > 10 {\n        println!(\"Big\");\n    } ___ {\n        println!(\"Small\");\n    }\n}",
      "correctLines": ["fn main() {", "    let x = 5;", "    if x > 10 {", "        println!(\"Big\");", "    } else {", "        println!(\"Small\");", "    }", "}"],
      "lineHints": [null, null, null, null, "else を記述します。"],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": "", "expected_output": "Small\n" }]
    },
    {
      "title": "for文",
      "description": "forループを使ってベクタの要素を走査します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "イテレータ",
          "content": "# 要素の取り出し\n\n`for x in &v` のように要素を一つずつ取り出します。\n\n**コード例：**\n```rust\nlet nums = vec![1, 2, 3];\nfor n in &nums {\n    println!(\"{}\", n);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![1, 2, 3];\n    for n in &nums {\n        println!(\"{}\", n);\n    }\n}",
      "holeyCode": "fn main() {\n    let nums = vec![1, 2, 3];\n    for n in &___ {\n        println!(\"{}\", n);\n    }\n}",
      "correctLines": ["fn main() {", "    let nums = vec![1, 2, 3];", "    for n in &nums {", "        println!(\"{}\", n);", "    }", "}"],
      "lineHints": [null, null, "nums ベクタを指定します。"],
      "candidates": { "variables": ["nums"] },
      "testCases": [{ "input": "", "expected_output": "1\n2\n3\n" }]
    },
    {
      "title": "HashMap",
      "description": "キーと値のペアを扱うHashMapを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "HashMap",
          "content": "# 連想配列\n\nキー（名前）を使ってデータを管理します。インポートが必要です。\n\n**コード例：**\n```rust\nuse std::collections::HashMap;\nlet mut scores = HashMap::new();\nscores.insert(\"Math\", 90);\nprintln!(\"{}\", scores[\"Math\"]);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::collections::HashMap;\nfn main() {\n    let mut scores = HashMap::new();\n    scores.insert(\"Math\", 90);\n    println!(\"{}\", scores[\"Math\"]);\n}",
      "holeyCode": "use std::collections::HashMap;\nfn main() {\n    let mut scores = HashMap::new();\n    scores.___(\"Math\", 90);\n    println!(\"{}\", scores[\"___\"]);\n}",
      "correctLines": ["use std::collections::HashMap;", "fn main() {", "    let mut scores = HashMap::new();", "    scores.insert(\"Math\", 90);", "    println!(\"{}\", scores[\"Math\"]);", "}"],
      "lineHints": [null, null, null, "insert メソッドを使います。", "Math キーを指定します。"],
      "candidates": { "functions": ["insert"], "strings": ["Math"] },
      "testCases": [{ "input": "", "expected_output": "90\n" }]
    },
    {
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数定義",
          "content": "# fn キーワード\n\n処理をひとまとめにして名前を付けます。\n\n**コード例：**\n```rust\nfn greet() {\n    println!(\"Hello\");\n}\n\nfn main() {\n    greet();\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn greet() {\n    println!(\"Hello\");\n}\nfn main() {\n    greet();\n}",
      "holeyCode": "fn greet() {\n    println!(\"Hello\");\n}\nfn main() {\n    ___();\n}",
      "correctLines": ["fn greet() {", "    println!(\"Hello\");", "}", "fn main() {", "    greet();", "}"],
      "lineHints": [null, null, null, null, "greet(); で呼び出します。"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    }
  ]
};
