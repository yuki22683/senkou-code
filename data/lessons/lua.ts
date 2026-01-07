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
          "image": "/illustrations/python/monitor.png",
          "content": "# ゲーム開発で大人気の言葉\n\nLuaは、とても軽量で動作が速いため、ゲーム制作の現場でよく使われています。プログラムの中の中身を簡単に組み込める「接着剤」のような役割が得意な言葉です。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/python/monitor.png",
          "content": "# print（プリント）\n\n画面に文字を出したいときは、`print` 命令を使います。文字は `\" \"`（ダブルクォート）で囲って入力しましょう。"
        },
        {
          "title": "print を使いましょう",
          "image": "/illustrations/python/magic.png",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print` と入力して、そのあとに `\" \"` で囲んだ文字を続けます。\n\n**コード例：**\n```lua\nprint(\"Hello, Lua!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "print(\"Hello, Lua!\")",
      "holeyCode": "print(\"___\")",
      "correctLines": [
        "print(\"Hello, Lua!\")"
      ],
      "lineHints": [
        "print を使って、そのあとの文字を画面に出します。"
      ],
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
          "image": "/illustrations/python/box.png",
          "content": "# データを保存する仕組み\n\nプログラムの中で数字や文字を使い回すために、名前をつけて保存する場所を **変数（へんすう）** と呼びます。"
        },
        {
          "title": "local をつけましょう",
          "image": "/illustrations/python/box.png",
          "content": "# 自分だけの変数\n\nLuaでは、`local` という言葉をつけてから「はこ」を作ります。これは「この場所だけで使います」という合図になります。\n\n**コード例：**\n```lua\nlocal count = 5\nprint(count)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// x というはこに 10 を入れる\nlocal x = 10\n// 中身を表示する\nprint(x)",
      "holeyCode": "// x というはこに 10 を入れる\nlocal x = ___
// 中身を表示する\nprint(___)",
      "correctLines": [
        "local x = 10",
        "print(x)"
      ],
      "lineHints": [
        "x という名前のはこに 10 を入力します。 `local` を忘れずに入力しましょう。",
        "はこの名前 x を指定して、中身を表示します。"
      ],
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
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/python/robot_math.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/python/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nLuaでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local a = 5\nlocal b = 3\n// たし算した結果を表示する\nprint(a + b)",
      "holeyCode": "local a = 5\nlocal b = 3\n// たし算した結果を表示する\nprint(a ___ b)",
      "correctLines": [
        "local a = 5",
        "local b = 3",
        "print(a + b)"
      ],
      "lineHints": [
        null,
        null,
        "たし算なので `+\` を使います。"
      ],
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