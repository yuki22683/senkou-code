export const pythonData2 = {
  "language": "python",
  "lessonId": "python-2",
  "lessonTitle": "Python II - 中級へのステップ",
  "lessonDescription": "文字列の操作やリストの高度な使い方を学び、Pythonをより自由に使いこなせるようになりましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "文字列の長さ",
      "description": "len() 関数を使って、文字列の長さを調べてみましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "len() 関数",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字の数を数える\n\n**len()** 関数を使うと、文字列やリストの長さを取得できます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 文字列の長さを表示する\nword = 'Python'\nprint(len(word))",
      "holeyCode": "# 変数 word に 'Python' を代入しましょう\n__ _\n# len 関数を使って word の長さを表示しましょう\n___",
      "correctLines": [
        "# 変数 word に 'Python' を代入しましょう",
        "word = 'Python'",
        "# len 関数を使って word の長さを表示しましょう",
        "print(len(word))"
      ],
      "lineHints": [
        null,
        null,
        "len(word) と入力します。"
      ],
      "candidates": {
        "functions": ["len", "print"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "6\n"
        }
      ]
    }
  ]
};