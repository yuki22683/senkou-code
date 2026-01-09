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
      "description": "Elixirを使って画面に「こんにちは」と表示させてみましょう。IO.puts（アイオー・プッツ）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Elixir（エリクサー）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 並列処理が得意な現代の言葉\n\nElixirは、大量のアクセスを同時に裁くのが得意なプログラミング言語です。リアルタイムのチャットや、たくさんの人が遊ぶオンラインゲームの裏側などで活躍しています。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# IO.puts（アイオー・プッツ）\n\n画面に文字を出したいときは、`IO.puts` という命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。"
        },
        {
          "title": "IO.puts を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`IO.puts` と入力して、そのあとに表示したい文字を続けます。\n\n**コード例：**\n```elixir\nIO.puts \\\"Hello, Elixir!\\\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Hello, Elixir!を表示\nIO.puts \\\"Hello, Elixir!\\\"",
      "holeyCode": "___\n___"___\"",
      "correctLines": [
        ""IO.puts "Hello",
        "Elixir!"""
      ],
      "lineHints": [
        "IO.puts を使って、そのあとの文字を画面に出します。"
      ],
      "candidates": {
        "strings": [
          "Hello, Elixir!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Elixir!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」",
      "description": "数字や文字をしまっておく「はこ（変数）」を使ってみましょう。Elixirでは一度決めた名前の中身を変えずに使うのが良いやりかたとされています。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する仕組み\n\nプログラムの中で数字や文字を使い回すために、名前をつけて保存する場所を **変数（へんすう）** と呼びます。"
        },
        {
          "title": "名前をつけます",
          "image": "/illustrations/common/box.png",
          "content": "# 変数（へんすう）の作りかた\n\n`名前 = 中身` と入力することで、データに名前をつけることができます。\n\n**コード例：**\n```elixir\ncount = 5\nIO.puts count\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 10を入力\nx = 10\n# xを入力\nIO.puts x",
      "holeyCode": "___\n___",
      "correctLines": [
        
        
        "x = 10",
        "IO.puts x"
      ],
      "lineHints": [
        "x という名前に 10 をセットします。",
        "はこの名前 x を指定して、表示させます。"
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
      "description": "Elixirを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 計算の記号\n\nElixirでも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "a = 5\nb = 3\n# +でたし算\nIO.puts a + b",
      "holeyCode": "___\n___\n___",
      "correctLines": [
        
        
        "a = 5",
        "b = 3",
        "IO.puts a + b"
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