export const csharpData = {
  "language": "csharp",
  "lessonId": "csharp-1",
  "lessonTitle": "C# (シーシャープ) に挑戦！",
  "lessonDescription": "Microsoftが開発した、多機能で強力な言葉「C#（シーシャープ）」のきほんを学びましょう。Unityを使ったゲーム作りにも欠かせない言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "C#を使って画面にメッセージを出してみましょう。Console.WriteLine という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C#（シーシャープ）とは？",
          "image": "/illustrations/python/monitor.png",
          "content": "# 幅広く使われる万能な言葉\n\nC#は、デスクトップアプリからスマホアプリ、さらにはゲーム開発（Unity）まで、何でも作れる非常に強力な言葉です。ルールがしっかり決まっていて、大規模な開発に向いています。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/python/magic.png",
          "content": "# Console.WriteLine\n\n画面に文字を出したいときは、`Console.WriteLine()` という命令を使います。最後には `;`（セミコロン）を忘れないようにしましょう。\n\n**コード例：**\n```csharp\nConsole.WriteLine(\"ヤッホー！\");\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 画面にメッセージを出す関数\nConsole.WriteLine(\"Hello, C#!\");",
      "holeyCode": "// 画面にメッセージを出す関数\nConsole.WriteLine(\"___\");",
      "correctLines": [
        "// 画面にメッセージを出す関数",
        "Console.WriteLine(\"Hello, C#!\");"
      ],
      "lineHints": [
        null,
        "Console.WriteLine を使って文字を出します。"
      ],
      "candidates": {
        "functions": [
          "Console.WriteLine"
        ],
        "strings": [
          "Hello, C#!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, C#!\n"
        }
      ]
    }
  ]
};