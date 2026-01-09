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
      "description": "Rustを使って画面に文字を表示してみましょう。println! という特別な関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Rust（ラスト）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 安全で高速な最新の言葉\n\nRustは、メモリの管理がとても厳格で、間違いを未然に防ぐのが非常に得意なプログラミング言語です。世界中のプログラマーから「最も愛されている言語」の一つとして選ばれています。"
        },
        {
          "title": "Rustの「おまじない」",
          "image": "/illustrations/common/monitor.png",
          "content": "# ! がつく関数\n\n画面に文字を出したいときは、`println!()` を使います。さいごに `!` がつくのがRustの面白い特徴です。プログラムは `fn main() { ... }` の中に書いていきます。\n\n**コード例：**\n```rust\nfn main() {\n    println!(\"ヤッホー！\");\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // Hello, Rust! と表示する\n    println!(\"Hello, Rust!\");\n}",
      "holeyCode": "fn main() {\n    // Hello, Rust! と表示する\n    println!(\"___\");\n}",
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
      "title": "たくさんのデータをまとめましょう「ベクタ」",
      "description": "「ベクタ（Vec）」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "ベクタ（Vec）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **ベクタ（Vec）** です。買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "ベクタの番号は「0」から！",
          "image": "/illustrations/common/list.png",
          "content": "# 番号で指定しましょう\n\nベクタの中身を取り出すときは、何番目かを指定します。プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n```rust\nfn main() {\n    let fruits = vec![\"りんご\", \"バナナ\", \"みかん\"];\n    println!(\"{}\", fruits[0]);\n}\n```\n=> りんご"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // colors というベクタを作る（'あか', 'あお'の順）\n    let colors = vec![\"あか\", \"あお\"];\n    // 2番目のデータ（1番）を出す\n    println!(\"{}\", colors[1]);\n}",
      "holeyCode": "fn main() {\n    // colors というベクタを作る（'あか', 'あお'の順）\n    let colors = vec![\"___\", \"___\"];\n    // 2番目のデータ（1番）を出す\n    println!(\"{}\", colors[___]);\n}",
      "correctLines": [
        "fn main() {",
        "    // colors というベクタを作る（'あか', 'あお'の順）",
        "    let colors = vec![\"あか\", \"あお\"];",
        "    // 2番目のデータ（1番）を出す",
        "    println!(\"{}\", colors[1]);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "vec![\"あか\", \"あお\"] と入力しましょう。",
        null,
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。",
        null
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
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "あお\n"
        }
      ]
    },
    {
      "title": "名前で引き出す「辞書」",
      "description": "「辞書（HashMap）」を使うと、名前をつけてデータを保存し、その名前で取り出せます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "辞書（HashMap）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができます。\n\n**コード例：**\n```rust\nuse std::collections::HashMap;\nfn main() {\n    let mut fruits = HashMap::new();\n    fruits.insert(\"りんご\", \"あか\");\n    println!(\"{}\", fruits[\"りんご\"]);\n}\n```"
        },
        {
          "title": "辞書の使い方",
          "image": "/illustrations/common/dict.png",
          "content": "# [ ] で取り出しましょう\n\n辞書から値を取り出すには `[キー]` を使います。\n\n```rust\nuse std::collections::HashMap;\nfn main() {\n    let mut fruits = HashMap::new();\n    fruits.insert(\"りんご\", \"あか\");\n    println!(\"{}\", fruits[\"りんご\"]);\n}\n```\n=> あか"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::collections::HashMap;\nfn main() {\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\n    let mut colors = HashMap::new();\n    colors.insert(\"みかん\", \"オレンジ\");\n    // 中身を出す\n    println!(\"{}\", colors[\"みかん\"]);\n}",
      "holeyCode": "use std::collections::HashMap;\nfn main() {\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\n    let mut colors = HashMap::new();\n    colors.insert(\"___\", \"___\");\n    // 中身を出す\n    println!(\"{}\", colors[\"___\"]);\n}",
      "correctLines": [
        "use std::collections::HashMap;",
        "fn main() {",
        "    // 辞書を作る（キーは'みかん'、値は'オレンジ'）",
        "    let mut colors = HashMap::new();",
        "    colors.insert(\"みかん\", \"オレンジ\");",
        "    // 中身を出す",
        "    println!(\"{}\", colors[\"みかん\"]);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "insert(\"みかん\", \"オレンジ\") と入力しましょう。",
        null,
        "colors[\"みかん\"] と入力しましょう。",
        null
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
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "オレンジ\n"
        }
      ]
    }
  ]
};