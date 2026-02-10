export const elixirData = {
  "language": "elixir",
  "lessonId": "elixir-1",
  "lessonTitle": "Elixir (エリクサー) に挑戦！",
  "lessonDescription": "たくさんの指示を同時になおかつ正確にこなすのが得意な言葉「Elixir（エリクサー）」のきほんを学びましょう。データの流れをスムーズに作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Elixirへようこそ！",
      "content": "**Elixir（エリクサー）** は、2011年にJose Valimさんが作ったプログラミング言語です。\\n\\nたくさんの処理を同時に実行できるのが得意です。\\n\\nWebサービスやリアルタイム通信でよく使われています。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Elixirで画面に文字を出すには `IO.puts` を使います。\\n\\n```elixir\\nIO.puts \\\"こんにちは, Elixir!\\\"\\n```\\n\\n`IO` は入出力を扱うモジュールです。"
    },
    {
      "title": "変数を使う",
      "content": "データを入れておく「はこ」を**変数**と呼びます。\\n\\n```elixir\\nx = 10\\nname = \\\"太郎\\\"\\nIO.puts x\\nIO.puts name\\n```\\n\\n変数の再代入もできます。"
    },
    {
      "title": "計算する",
      "content": "Elixirでは数字を計算できます。\\n\\n```elixir\\na = 5\\nb = 3\\nIO.puts a + b  # 8\\nIO.puts rem(10, 3) # 1（あまり）\\n```\\n\\n`#` から後ろはコメント（メモ）です。あまりは `rem` 関数を使います。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```elixir\\nscore = 85\\nif score > 80 do\\n  IO.puts \\\"すごい！\\\"\\nelse\\n  IO.puts \\\"がんばろう\\\"\\nend\\n```\\n\\n`do` と `end` がポイントです。"
    },
    {
      "title": "リストとマップ",
      "content": "複数のデータをまとめて扱えます。\\n\\n**リスト**:\\n```elixir\\ncolors = [\\\"赤\\\", \\\"青\\\"]\\nIO.puts hd(colors) # 赤（先頭）\\n```\\n\\n**マップ**（辞書）:\\n```elixir\\nuser = %{name: \\\"太郎\\\"}\\nIO.puts user.name\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "tutorialSlides": [
        {
          "title": "Elixir（エリクサー）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 並列処理が得意な現代の言葉\\n\\nElixirは、大量のアクセスを同時に裁くのが得意なプログラミング言語です。リアルタイムのチャットや、たくさんの人が遊ぶオンラインゲームの裏側などで活躍しています。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# IO.puts（アイオー・プッツ）\\n\\n画面に文字を出したいときは、`IO.puts` という命令を使います。文字は `\" \"`（ダブルクォート）で囲んで入力しましょう。"
        },
        {
          "title": "IO.puts を使いましょう",
          "image": "/illustrations/common/monitor.png",
          "content": "# メッセージを表示します\\n\\n画面に文字を出したいときは、`IO.puts` と入力して、そのあとに表示したい文字を続けます。\\n\\n**コード例：**\\n```elixir\\nIO.puts \\\"Hello, Elixir!\\\"\\n```"
        }
      ],
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
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する仕組み\\n\\nプログラムの中で数字や文字を使い回すために、名前をつけて保存する場所を **変数（へんすう）** と呼びます。"
        },
        {
          "title": "名前をつけます",
          "image": "/illustrations/common/box.png",
          "content": "# 変数（へんすう）の作りかた\\n\\n`名前 = 中身` と入力することで、データに名前をつけることができます。\\n\\n**コード例：**\\n```elixir\\ncount = 5\\nIO.puts count\\n```"
        }
      ],
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
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 高速な計算処理\\n\\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 計算の記号\\n\\nElixirでも、こんな記号を使って計算をします。\\n\\n- **+** : たし算\\n- **-** : ひき算\\n- **\\*** : かけ算\\n- **/** : わり算"
        }
      ],
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