export const luaData = {
  "language": "lua",
  "lessonId": "lua-1",
  "lessonTitle": "Lua (ルア) に挑戦！",
  "lessonDescription": "ゲーム作りなどでよく使われる、シンプルで軽い言葉「Lua（ルア）」のきほんを学びましょう。いろいろなものを入れることができる「テーブル」という機能が特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Luaへようこそ！",
      "content": "**Lua（ルア）** は、ブラジルで1993年に作られたプログラミング言語です。\\n\\nとても軽くて速いので、ゲームに組み込んで使われることが多いです。\\n\\nRobloxやMinecraftのModでも使われています。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Luaで画面に文字を出すには `print` を使います。\\n\\n```lua\\nprint(\\\"こんにちは, Lua!\\\")\\n```\\n\\nシンプルで覚えやすいですね。"
    },
    {
      "title": "変数を使う",
      "content": "データを入れておく「はこ」を**変数**と呼びます。\\n\\n```lua\\nlocal x = 10\\nlocal name = \\\"太郎\\\"\\nprint(x)\\nprint(name)\\n```\\n\\n`local` をつけるとローカル変数になります。"
    },
    {
      "title": "計算する",
      "content": "Luaでは数字を計算できます。\\n\\n```lua\\nlocal a = 5\\nlocal b = 3\\nprint(a + b)  -- 8\\nprint(10 % 3) -- 1（あまり）\\n```\\n\\n`--` から後ろはコメント（メモ）です。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```lua\\nlocal score = 85\\nif score > 80 then\\n  print(\\\"すごい！\\\")\\nelse\\n  print(\\\"がんばろう\\\")\\nend\\n```\\n\\n`then` と `end` がポイントです。"
    },
    {
      "title": "テーブル",
      "content": "Luaの**テーブル**は配列と辞書の両方として使えます。\\n\\n**配列として**:\\n```lua\\nlocal fruits = {\\\"りんご\\\", \\\"みかん\\\"}\\nprint(fruits[1]) -- りんご（1から始まる）\\n```\\n\\n**辞書として**:\\n```lua\\nlocal user = {name = \\\"太郎\\\"}\\nprint(user.name)\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出してみましょう",
      "correctCode": "-- こんにちは, Lua!を表示\\nprint(\"こんにちは, Lua!\")",
      "holeyCode": "-- こんにちは, Lua!を表示\\n___(\"___\")",
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
          "others": ["print", "こんにちは, Lua!"]
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
      "holeyCode": "-- 10を入力\\nlocal ___ = ___\\n-- xを入力\\n___(___)",
      "correctLines": [
          "-- 10を入力",
          "local x = 10",
          "-- xを入力",
          "print(x)"
        ],
      "lineHints": [
          null,
          "localキーワードでローカル変数を宣言します。",
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
      "holeyCode": "-- 5を入力\\nlocal ___ = ___\\n-- 3を入力\\nlocal ___ = ___\\n-- +でたし算\\n___(___ ___ ___)",
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
          "1つ目の数値を格納する変数を宣言します。",
          null,
          "2つ目の数値を格納する変数を宣言します。",
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