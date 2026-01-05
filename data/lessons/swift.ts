export const swiftData = {
  "language": "swift",
  "lessonId": "swift-1",
  "lessonTitle": "Swift I",
  "lessonDescription": "Appleのプラットフォーム向け言語Swiftの基礎を学びます。iOSアプリ開発などで必須の言語です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "Swiftで文字を出力してみましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "print関数",
          "content": "# 文字の出力\n\nSwiftでは `print()` 関数を使ってコンソールに文字を出力します。\n\n```swift\nprint(\"表示したい文字\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`Hello, World!` と出力してみましょう。\n\n**コード例：**\n```swift\nprint(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力\nprint(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力\n___(\"Hello, World!\")",
      "correctLines": ["// Hello, World!と出力", "print(\"Hello, World!\")"],
      "lineHints": [
        null,
        "print関数を使います。"
      ],
      "candidates": {
        "functions": ["print"],
        "strings": ["\"Hello, World!\""]
      },
      "testCases": [{ "input": "", "expected_output": "Hello, World!\n" }]
    },
    {
      "title": "定数と変数",
      "description": "Swiftでの変数の扱い方を学びましょう。定数(let)と変数(var)があります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "let と var",
          "content": "# let（定数）\n値を変更しない場合は `let` を使います。\n\n# var（変数）\n値を変更する可能性がある場合は `var` を使います。\n\n```swift\nlet name = \"Swift\"\nvar count = 0\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n定数 `name` に `\"Swift\"` を代入して表示してみましょう。\n\n**コード例：**\n```swift\nlet name = \"Swift\"\nprint(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 定数nameを定義\nlet name = \"Swift\"\n// 出力\nprint(name)",
      "holeyCode": "// 定数nameを定義\n___ name = \"Swift\"\n// 出力\nprint(___)",
      "correctLines": ["// 定数nameを定義", "let name = \"Swift\"", "// 出力", "print(name)"],
      "lineHints": [
        null,
        "変更しない値なので let を使います。",
        null,
        "変数名 name を指定します。"
      ],
      "candidates": {
        "keywords": ["let", "var"],
        "variables": ["name"],
        "functions": ["print"]
      },
      "testCases": [{ "input": "", "expected_output": "Swift\n" }]
    },
    {
      "title": "条件分岐",
      "description": "if文を使って条件分岐を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "if文の書き方",
          "content": "# 条件を括弧で囲まなくてもOK\n\nSwiftのif文は条件式を `()` で囲む必要はありませんが、`{}` は必須です。\n\n```swift\nif score > 80 {\n    print(\"Excellent\")\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`score` が `90` のとき、`80` より大きければ `Excellent` と表示させましょう。\n\n**コード例：**\n```swift\nvar score = 90\nif score > 80 {\n    print(\"Excellent\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var score = 90\nif score > 80 {\n    print(\"Excellent\")\n}",
      "holeyCode": "var score = 90\nif score ___ 80 {\n    print(\"Excellent\")\n}",
      "correctLines": ["var score = 90", "if score > 80 {", "    print(\"Excellent\")", "}"],
      "lineHints": [
        null,
        "比較演算子 > を使います。",
        null,
        null
      ],
      "candidates": {
        "variables": ["score"],
        "operators": [">"],
        "functions": ["print"]
      },
      "testCases": [{ "input": "", "expected_output": "Excellent\n" }]
    }
  ]
};

