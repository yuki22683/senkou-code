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
      "description": "画面にメッセージを出してみましょうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Lua（ルア）とは？",
          "content": "# ゲーム開発で大人気の言葉！\\n\\n**Lua**（ルア）は、とても軽くて速いプログラミング言語です。\\n\\n**名前の由来：** ポルトガル語で「月」という意味です。\\n\\n**どこで使われてる？**\\n- ゲーム（Roblox、World of Warcraftなど）\\n- 組み込みシステム\\n- Webサーバー\\n\\n**たとえば：** 大きなゲームの中に Lua を組み込んで、簡単にカスタマイズできるようにすることが多いです。まるで「接着剤」のような役割をします。"
        },
        {
          "title": "print で画面に文字を出す",
          "content": "# print（プリント）＝「印刷する」\\n\\n画面に文字を出したいときは、`print`（プリント）を使います。\\n\\n**書き方：**\\n1. `print` と書く\\n2. カッコ `( )` で囲む\\n3. 文字は `\" \"` で囲む\\n\\n**ポイント：** Lua ではセミコロン `;` は必須ではありません！"
        },
        {
          "title": "コードを書いてみよう",
          "content": "# メッセージを表示\\n\\n**このコードは何をしているの？**\\n```lua\\nprint(\"Hello, Lua!\")\\n```\\n\\n**解説：**\\n1. `print` で画面に出力\\n2. `\"Hello, Lua!\"` が表示される\\n\\n**Luaの特徴：** 他の言語と比べてシンプル！余計な記号がほとんどありません。"
        }
      ],
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
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "content": "# データを入れておく「箱」\\n\\n**変数**（Variable＝ヴァリアブル）は、数字や文字を入れておく箱のようなものです。\\n\\n**たとえば：** 名前を書いた箱に物を入れておくと、後で「あの箱の中身は？」と取り出せますよね。\\n\\nプログラムでも同じように、データに名前をつけて保存できます。"
        },
        {
          "title": "local で変数を作る",
          "content": "# local（ローカル）＝「この場所だけ」\\n\\nLuaでは `local`（ローカル＝「地元の」）をつけて変数を作ります。\\n\\n**このコードは何をしているの？**\\n```lua\\nlocal count = 5\\nprint(count)\\n```\\n\\n**解説：**\\n1. `local count = 5` で count という箱に 5 を入れる\\n2. `print(count)` で count の中身（5）を表示\\n\\n**なぜ local をつけるの？**\\n- 「この範囲だけで使う」という意味\\n- local をつけないと、どこからでも使える（混乱の元になることも）"
        }
      ],
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
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Luaで計算しよう",
          "content": "# コンピュータは計算が得意！\\n\\nコンピュータは人間よりもずっと速く計算できます。\\n\\n**たとえば：** 1秒間に何億回もの計算ができます。電卓のように使えますが、もっと複雑なことも自動でできます。\\n\\nLuaでも、算数と同じ記号を使って計算します。"
        },
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号！\\n\\n| 記号 | 意味 | 例 |\\n|------|------|----|\\n| `+` | たし算 | 5 + 3 = 8 |\\n| `-` | ひき算 | 5 - 3 = 2 |\\n| `*` | かけ算 | 5 * 3 = 15 |\\n| `/` | わり算 | 6 / 3 = 2 |\\n\\n**このコードは何をしているの？**\\n```lua\\nlocal a = 5\\nlocal b = 3\\nprint(a + b)  -- 8が表示される\\n```\\n\\n**解説：** a（5）と b（3）を足して結果（8）を表示します。"
        }
      ],
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