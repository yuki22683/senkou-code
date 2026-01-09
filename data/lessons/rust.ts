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
      "holeyCode": "___\\n___\\n___\\n___\\n___\\n___"Hello, Rust!\" と入力してね\n    println!(\"___\");\n}",
      "correctLines": [
        "fn main() {",
        ""    // "Hello",
        "Rust!" と入力しましょう"",
        ""    println!("Hello",
        "Rust!");"",
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
    }
  ]
};