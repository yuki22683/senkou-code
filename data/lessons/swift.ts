export const swiftData = {
  "language": "swift",
  "lessonId": "swift-1",
  "lessonTitle": "Swift (スウィフト) に挑戦！",
  "lessonDescription": "iPhone（アイフォーン）のアプリ作りなどで使われる言葉「Swift（スウィフト）」のきほんを学びましょう。きれいで分かりやすいプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Swiftを使って画面に「こんにちは」と表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Swift（スウィフト）とは？",
          "image": "/illustrations/python/monitor.png",
          "content": "# Apple製品を支える言葉\n\nSwiftは、Appleが開発した、iPhoneやMacのアプリを作るためのプログラミング言語です。動作がとても速く、書いたコードが読みやすいことが大きな特徴です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/python/monitor.png",
          "content": "# print（プリント）\n\n画面に文字を出したいときは、`print()` という命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。プログラミングの基本です！"
        },
        {
          "title": "print を使いましょう",
          "image": "/illustrations/python/magic.png",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print()` という名前の関数を使います。カッコの中に表示したいものを入力しましょう。\n\n```swift\nprint(\"表示したい文字\")\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/python/magic.png",
          "content": "# 目標\n\n`print()` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```swift\nprint(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力する関数\nprint(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力する関数\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力する関数",
        "print(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "画面に出す関数は `print` です。"
      ],
      "candidates": {
        "functions": [
          "print"
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