export const elixirData = {
  "language": "elixir",
  "lessonId": "elixir-1",
  "lessonTitle": "Elixir (エリクサー) に挑戦！",
  "lessonDescription": "たくさんの指示を同時になおかつ正確にこなすのが得意な言葉「Elixir（エリクサー）」のきほんを学びましょう。データの流れをスムーズに作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "correctCode": "# こんにちは, Elixir!を表示\\nIO.puts \"こんにちは, Elixir!\"",
      "holeyCode": "# こんにちは, Elixir!を表示\\n___.___ \"___\"",
      "correctLines": [
          "# こんにちは, Elixir!を表示",
          "IO.puts \"こんにちは, Elixir!\""
        ],
      "lineHints": [
          null,
          "IO.puts を使って、そのあとの文字を画面に出します。"
        ],
        "candidates": {
          "strings": [
            "こんにちは, Elixir!"
          ],
          "others": ["IO", "puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Elixir!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」",
      "correctCode": "# 10を入力\\nx = 10\\n# xを入力\\nIO.puts x",
      "holeyCode": "# 10を入力\\n___ = ___\\n# xを入力\\n___.___ ___",
      "correctLines": [
          "# 10を入力",
          "x = 10",
          "# xを入力",
          "IO.puts x"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "はこの名前 x を指定して、表示させます。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["IO", "puts"]
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
      "correctCode": "# 5を入力\\na = 5\\n# 3を入力\\nb = 3\\n# +でたし算\\nIO.puts a + b",
      "holeyCode": "# 5を入力\\n___ = ___\\n# 3を入力\\n___ = ___\\n# +でたし算\\n___.___ ___ + ___",
      "correctLines": [
          "# 5を入力",
          "a = 5",
          "# 3を入力",
          "b = 3",
          "# +でたし算",
          "IO.puts a + b"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "変数に数値を代入（保存）します。",
          null,
          "たし算なので `+` を使います。"
        ],
        "candidates": {
          "numbers": [
            "5",
            "3"
          ],
          "operators": [
            "+"
          ],
          "others": ["a", "b", "IO", "puts"]
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