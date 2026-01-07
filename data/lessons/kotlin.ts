export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin (コトリン) に挑戦！",
  "lessonDescription": "Android（アンドロイド）スマホのアプリ作りなどで大人気の言葉「Kotlin（コトリン）」のきほんを学びましょう。新しくて使いやすい機能がたくさんあります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Kotlinを使って画面に「こんにちは」と表示させてみましょう。println（プリント・ライン）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Kotlin（コトリン）とは？",
          "image": "/illustrations/python/monitor.png",
          "content": "# Androidアプリ開発の主役\n\nKotlinは、Javaという言葉をベースに、より短く安全に書けるように改良されたモダンなプログラミング言語です。Googleも「Androidアプリ開発の推奨言語」として選んでいる、今注目の言葉です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/python/monitor.png",
          "content": "# println（プリント・ライン）\n\n画面に文字を出したいときは、`println()` という命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。プログラミングの基本です！"
        },
        {
          "title": "println を使いましょう",
          "image": "/illustrations/python/magic.png",
          "content": "# メッセージを表示します\n\n画面に文字を出して改行（かいぎょう）したいときは、`println()` という名前の関数を使います。カッコの中に表示したいものを入力しましょう。\n\n```kotlin\nprintln(\\\"Hello, World!\\\")\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/python/magic.png",
          "content": "# 目標\n\n`println()` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```kotlin\nprintln(\\\"Hello, World!\\\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力する関数\nprintln(\\\"Hello, World!\\\")",
      "holeyCode": "// Hello, World!と出力する関数\n___(\\\"Hello, World!\\\")",
      "correctLines": [
        "// Hello, World!と出力する関数",
        "println(\\\"Hello, World!\\\")"
      ],
      "lineHints": [
        null,
        "関数は println です。 L ではなく 小文字の l（エル）です。"
      ],
      "candidates": {
        "functions": [
          "println"
        ],
        "strings": [
          "\"Hello, World!\""
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    }
  ]
};