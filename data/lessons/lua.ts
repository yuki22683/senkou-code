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
      "description": "Luaを使って画面に「こんにちは」と表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Lua（ルア）とは？",
          "image": "/illustrations/languages/lua.png",
          "content": "# ゲーム開発で大人気の言葉！\n\n**Lua**（ルア）は、とても軽くて速いプログラミング言語です。\n\n**名前の由来：** ポルトガル語で「月」という意味です。\n\n**どこで使われてる？**\n- ゲーム（Roblox、World of Warcraftなど）\n- 組み込みシステム\n- Webサーバー\n\n**たとえば：** 大きなゲームの中に Lua を組み込んで、簡単にカスタマイズできるようにすることが多いです。まるで「接着剤」のような役割をします。"
        },
        {
          "title": "print で画面に文字を出す",
          "image": "/illustrations/common/monitor.png",
          "content": "# print（プリント）＝「印刷する」\n\n画面に文字を出したいときは、`print`（プリント）を使います。\n\n**書き方：**\n1. `print` と書く\n2. カッコ `( )` で囲む\n3. 文字は `\" \"` で囲む\n\n**ポイント：** Lua ではセミコロン `;` は必須ではありません！"
        },
        {
          "title": "コードを書いてみよう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示\n\n**このコードは何をしているの？**\n```lua\nprint(\"Hello, Lua!\")\n```\n\n**解説：**\n1. `print` で画面に出力\n2. `\"Hello, Lua!\"` が表示される\n\n**Luaの特徴：** 他の言語と比べてシンプル！余計な記号がほとんどありません。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- Hello, Lua!を表示\nprint(\"Hello, Lua!\")",
      "holeyCode": "-- Hello, Lua!を表示\nprint(\"___\")",
      "correctLines": [
        "-- Hello, Lua!を表示",
        "print(\"Hello, Lua!\")"
      ],
      "lineHints": [null, "print を使って、そのあとの文字を画面に出します。"],
      "candidates": {
        "strings": [
          "Hello, Lua!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Lua!\n"
        }
      ]
    },
    {
      "title": "自分専用の「はこ」",
      "description": "数字や文字をしまっておく「はこ（変数）」を使ってみましょう。その場だけで使う「local（ローカル）」というラベルを貼ります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを入れておく「箱」\n\n**変数**（Variable＝ヴァリアブル）は、数字や文字を入れておく箱のようなものです。\n\n**たとえば：** 名前を書いた箱に物を入れておくと、後で「あの箱の中身は？」と取り出せますよね。\n\nプログラムでも同じように、データに名前をつけて保存できます。"
        },
        {
          "title": "local で変数を作る",
          "image": "/illustrations/common/box.png",
          "content": "# local（ローカル）＝「この場所だけ」\n\nLuaでは `local`（ローカル＝「地元の」）をつけて変数を作ります。\n\n**このコードは何をしているの？**\n```lua\nlocal count = 5\nprint(count)\n```\n\n**解説：**\n1. `local count = 5` で count という箱に 5 を入れる\n2. `print(count)` で count の中身（5）を表示\n\n**なぜ local をつけるの？**\n- 「この範囲だけで使う」という意味\n- local をつけないと、どこからでも使える（混乱の元になることも）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 10を入力\nlocal x = 10\n-- xを入力\nprint(x)",
      "holeyCode": "-- 10を入力\nlocal x = ___\n-- xを入力\nprint(___)",
      "correctLines": [
        "-- 10を入力",
        "local x = 10",
        "-- xを入力",
        "print(x)"
      ],
      "lineHints": [null, "x という名前のはこに 10 を入力します。 `local` を忘れずに入力しましょう。", null, "変数の内容を画面に出力します。"],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Luaを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Luaで計算しよう",
          "image": "/illustrations/common/robot_math.png",
          "content": "# コンピュータは計算が得意！\n\nコンピュータは人間よりもずっと速く計算できます。\n\n**たとえば：** 1秒間に何億回もの計算ができます。電卓のように使えますが、もっと複雑なことも自動でできます。\n\nLuaでも、算数と同じ記号を使って計算します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号！\n\n| 記号 | 意味 | 例 |\n|------|------|----|\n| `+` | たし算 | 5 + 3 = 8 |\n| `-` | ひき算 | 5 - 3 = 2 |\n| `*` | かけ算 | 5 * 3 = 15 |\n| `/` | わり算 | 6 / 3 = 2 |\n\n**このコードは何をしているの？**\n```lua\nlocal a = 5\nlocal b = 3\nprint(a + b)  -- 8が表示される\n```\n\n**解説：** a（5）と b（3）を足して結果（8）を表示します。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local a = 5\nlocal b = 3\n-- +でたし算\nprint(a + b)",
      "holeyCode": "-- 5を入力\nlocal a = ___\n-- 3を入力\nlocal b = ___\n-- +でたし算\nprint(a ___ b)",
      "correctLines": [
        "-- 5を入力",
        "local a = 5",
        "-- 3を入力",
        "local b = 3",
        "-- +でたし算",
        ["print(a + b)", "print(b + a)"]
      ],
      "lineHints": [null, "a に 5 を入力します。", null, "b に 3 を入力します。", null, "たし算なので `+` を使います。", null],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    }
  ]
};