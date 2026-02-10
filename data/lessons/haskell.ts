export const haskellData = {
  "language": "haskell",
  "lessonId": "haskell-1",
  "lessonTitle": "Haskell (ハスケル) に挑戦！",
  "lessonDescription": "数学のようなきっちりした美しさを持つ言葉「Haskell（ハスケル）」のきほんを学びましょう。計算の答えを次の計算にパスしていくような、独特な作りかたを体験できます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "correctCode": "-- Welcome to FP!を表示\\nmain = putStrLn \"Welcome to FP!\"",
      "holeyCode": "-- Welcome to FP!を表示\\n___ = ___ \"___\"",
      "correctLines": [
          "-- Welcome to FP!を表示",
          "main = putStrLn \"Welcome to FP!\""
        ],
      "lineHints": [
          null,
          "putStrLn を使って、そのあとの文字を画面に出します。"
        ],
        "candidates": {
          "functions": [
            "putStrLn"
          ],
          "strings": [
            "Welcome to FP!"
          ],
          "others": ["main"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Welcome to FP!\\n"
          }
        ]
      },
    {
      "title": "名前に「あたい」をつけましょう",
      "correctCode": "-- 10を入力\\nx = 10\\n-- xを入力\\nmain = print x",
      "holeyCode": "-- 10を入力\\n___ = ___\\n-- xを入力\\n___ = ___ ___",
      "correctLines": [
          "-- 10を入力",
          "x = 10",
          "-- xを入力",
          "main = print x"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "print 関数を使って、中身を表示します。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["main", "print", "x"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "correctCode": "-- 5を入力\\na = 5\\n-- 3を入力\\nb = 3\\n-- +でたし算\\nmain = print (a + b)",
      "holeyCode": "-- 5を入力\\n___ = ___\\n-- 3を入力\\n___ = ___\\n-- +でたし算\\n___ = ___ (___ ___ ___)",
      "correctLines": [
          "-- 5を入力",
          "a = 5",
          "-- 3を入力",
          "b = 3",
          "-- +でたし算",
          "main = print (a + b)"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "変数に数値を代入（保存）します。",
          null,
          "たし算なので `+` を使います。 ( ) で囲むと計算を先にします。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["main", "print", "a", "b", "5", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      }
  ]
};