export const rubyData = {
  "language": "ruby",
  "lessonId": "ruby-1",
  "lessonTitle": "Ruby (ルビー) に挑戦！",
  "lessonDescription": "日本で生まれたプログラミング言語「Ruby（ルビー）」のきほんを学びましょう。人間にとって読みやすく、楽しくプログラムを書けるのが特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "Rubyを使って画面に「こんにちは」と表示させてみましょう。puts（プッツ）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Ruby（ルビー）とは？",
          "image": "/illustrations/python/monitor.png",
          "content": "# 楽しさを大事にする言葉\n\nRubyは、まつもとゆきひろさんという日本人が作った言葉です。人間が読みやすく、楽しく書けるように設計されています。世界中で大人気の言葉です。"
        },
        {
          "title": "puts を使いましょう",
          "image": "/illustrations/python/magic.png",
          "content": "# メッセージを表示します\n\nRubyでは `puts` と入力したあとに文字を並べるだけで、簡単に画面に表示させることができます。\n\n**コード例：**\n```ruby\nputs 'ヤッホー！'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 「Hello, Ruby!」と出力する関数\nputs 'Hello, Ruby!'",
      "holeyCode": "# 「Hello, Ruby!」と出力する関数\nputs '___'",
      "correctLines": [
        "# 「Hello, Ruby!」と出力する関数",
        "puts 'Hello, Ruby!'"
      ],
      "lineHints": [
        "",
        "Hello, Ruby! と入力して、画面に表示させます。"
      ],
      "candidates": {
        "strings": [
          "Hello, Ruby!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Ruby!\n"
        }
      ]
    }
  ]
};