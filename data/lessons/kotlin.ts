export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin I",
  "lessonDescription": "Kotlinの基本的な文法を学びます。Androidアプリ開発などで広く使われているモダンな言語です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "Kotlinで画面に文字を表示する方法を学びましょう。「Hello, World!」と出力するプログラムを作ります。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "文字の出力",
          "content": "# println関数\n\nKotlinで文字を出力して改行するには `println()` を使います。\n\n```kotlin\nprintln(\"表示したい文字\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`println()` を使って `Hello, World!` と表示しましょう。\n\n**コード例：**\n```kotlin\nprintln(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力\nprintln(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力\n___(\"Hello, World!\")",
      "correctLines": ["// Hello, World!と出力", "println(\"Hello, World!\")"],
      "lineHints": [
        null,
        "命令は println です。"
      ],
      "candidates": {
        "functions": ["println"],
        "strings": ["\"Hello, World!\""]
      },
      "testCases": [{ "input": "", "expected_output": "Hello, World!\n" }]
    },
    {
      "title": "変数を使う",
      "description": "データを保存する「変数」の使い方を学びましょう。変更できない変数(val)を使ってみます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数の定義",
          "content": "# val キーワード\n\n値を変更しない変数は `val` を使って定義します。\n\n```kotlin\nval name = \"Kotlin\"\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 `name` に `\"Kotlin\"` を代入し、それを `println` で表示しましょう。\n\n**コード例：**\n```kotlin\nval name = \"Kotlin\"\nprintln(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 変数nameに\"Kotlin\"を代入\nval name = \"Kotlin\"\n// 変数を出力\nprintln(name)",
      "holeyCode": "// 変数nameに\"Kotlin\"を代入\n___ name = \"Kotlin\"\n// 変数を出力\nprintln(___)",
      "correctLines": ["// 変数nameに\"Kotlin\"を代入", "val name = \"Kotlin\"", "// 変数を出力", "println(name)"],
      "lineHints": [
        null,
        "定数の定義には val を使います。",
        null,
        "変数名 name を指定します。"
      ],
      "candidates": {
        "variables": ["name"],
        "functions": ["println"],
        "keywords": ["val"],
        "strings": ["\"Kotlin\""]
      },
      "testCases": [{ "input": "", "expected_output": "Kotlin\n" }]
    },
    {
      "title": "条件分岐",
      "description": "if文を使って、条件に応じた処理を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# 条件分岐\n\n条件によって処理を分けるには `if` を使います。\n\n```kotlin\nif (score > 80) {\n    println(\"Great!\")\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`score` が `100` のとき、`80` より大きければ `Great!` と表示するコードを完成させましょう。\n\n**コード例：**\n```kotlin\nval score = 100\nif (score > 80) {\n    println(\"Great!\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val score = 100\nif (score > 80) {\n    println(\"Great!\")\n}",
      "holeyCode": "val score = 100\nif (score ___ 80) {\n    println(\"Great!\")\n}",
      "correctLines": ["val score = 100", "if (score > 80) {", "    println(\"Great!\")", "}"],
      "lineHints": [
        null,
        "比較演算子 > を使います。",
        null,
        null
      ],
      "candidates": {
        "variables": ["score"],
        "operators": [">"],
        "functions": ["println"]
      },
      "testCases": [{ "input": "", "expected_output": "Great!\n" }]
    }
  ]
};