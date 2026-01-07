export const perlData = {
  "language": "perl",
  "lessonId": "perl-1",
  "lessonTitle": "Perl (パール) に挑戦！",
  "lessonDescription": "文字をいじったり、整理したりするのが得意な言葉「Perl（パール）」のきほんを学びましょう。古くからたくさんの人に愛されている言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "Perlを使って画面に文字を表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Perl（パール）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# テキスト処理の達人\n\nPerlは、文字情報の処理が非常に得意なプログラミング言語です。「ラクダ」がトレードマークで、昔からWebサーバーの管理や、情報の整理に広く使われてきました。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# print（プリント）\n\n画面に文字を出したいときは、`print` 命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。最後に `;`（セミコロン）を忘れないように！"
        },
        {
          "title": "print を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print` と入力して、そのあとに `\" \"` で囲んだ文字を入力します。さいごに `\\n` と入力すると、改行（かいぎょう）されます。\n\n```perl\nprint \"表示したい文字\\n\";\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`print` を使って `Hello, World!` と表示させてみましょう。さいごに改行 `\\n` とセミコロン `;` を入力するのがルールです。\n\n**入力するコードのヒント：**\n```perl\nprint \"Hello, World!\\n\";\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, World!を表示する関数\nprint \"Hello, World!\\n\";",
      "holeyCode": "# Hello, World!を表示する関数\n___ \"Hello, World!\\n\";",
      "correctLines": [
        "# Hello, World!を表示する関数",
        "print \"Hello, World!\\n\";"
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
          "\"Hello, World!\\n\""
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