export const luaData = {
  "language": "lua",
  "lessonId": "lua-1",
  "lessonTitle": "Lua (ルア) に挑戦！",
  "lessonDescription": "ゲーム作りなどでよく使われる、シンプルで軽い言葉「Lua（ルア）」のきほんを学びましょう。いろいろなものを入れることができる「テーブル」という機能が特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出してみましょう",
      "correctCode": "-- こんにちは, Lua!を表示\\nprint(\"こんにちは, Lua!\")",
      "holeyCode": "-- こんにちは, Lua!を表示\\n___(\"こんにちは, Lua!\")",
      "correctLines": [
          "-- こんにちは, Lua!を表示",
          "print(\"こんにちは, Lua!\")"
        ],
      "lineHints": [
          null,
          "print を使って、そのあとの文字を画面に出します。"
        ],
        "candidates": {
          "strings": [
            "Hello, Lua!"
          ],
          "others": ["print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Lua!\\n"
          }
        ]
      },
    {
      "title": "自分専用の「はこ」",
      "correctCode": "-- 10を入力\\nlocal x = 10\\n-- xを入力\\nprint(x)",
      "holeyCode": "-- 10を入力\\nlocal ___ = 10\\n-- xを入力\\n___(x)",
      "correctLines": [
          "-- 10を入力",
          "local x = 10",
          "-- xを入力",
          "print(x)"
        ],
      "lineHints": [
          null,
          "x という名前のはこに 10 を入力します。 `local` を忘れずに入力しましょう。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["print"]
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
      "correctCode": "-- 5を入力\\nlocal a = 5\\n-- 3を入力\\nlocal b = 3\\n-- +でたし算\\nprint(a + b)",
      "holeyCode": "-- 5を入力\\nlocal ___ = 5\\n-- 3を入力\\nlocal ___ = 3\\n-- +でたし算\\n___(a + b)",
      "correctLines": [
          "-- 5を入力",
          "local a = 5",
          "-- 3を入力",
          "local b = 3",
          "-- +でたし算",
          "print(a + b)"
        ],
      "lineHints": [
          null,
          "a に 5 を入力します。",
          null,
          "b に 3 を入力します。",
          null,
          "たし算なので `+` を使います。"
        ],
        "candidates": {
          "operators": [
            "+"
          ],
          "others": ["5", "3", "a", "b", "print"]
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