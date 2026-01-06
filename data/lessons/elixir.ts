export const elixirData = {
  "language": "elixir",
  "lessonId": "elixir-1",
  "lessonTitle": "Elixir (エリクサー) にちょうせん！",
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
          "title": "IO.puts を使いましょう",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`IO.puts` と入力して、そのあとに表示したい文字を続けます。\n\n**コード例：**\n```elixir\nIO.puts \"Hello, Elixir!\"
```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "IO.puts \"Hello, Elixir!\"",
      "holeyCode": "IO.puts \"___\"",
      "correctLines": [
        "IO.puts \"Hello, Elixir!\""
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
          "title": "名前をつけます",
          "content": "# 変数（へんすう）の作りかた\n\n`名前 = 中身` と入力することで、データに名前をつけることができます。\n\n**コード例：**\n```elixir\nx = 10\nIO.puts x\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 10\nIO.puts x",
      "holeyCode": "x = ___\nIO.puts ___",
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
          "title": "計算の記号",
          "content": "# 計算の記号\n\nElixirでも、こんな記号を使って計算をしますよ。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "a = 5\nb = 3\nIO.puts a + b",
      "holeyCode": "a = 5\nb = 3\nIO.puts a ___ b",
      "correctLines": [
        "a = 5",
        "b = 3",
        "IO.puts a + b"
      ],
      "lineHints": [
        null,
        null,
        "たし算なので `+` を使います。"
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
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "#{ }（なみかっこ）を使いましょう",
          "content": "# 文字列の中に入れる方法\n\n`\" \"` で囲んだ文章の中で `#{はその名前}` と入力すると、中身を文章に入れられますよ。\n\n**コード例：**\n```elixir\nage = 10\nIO.puts \"私は #{age} 歳です\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "age = 20\nIO.puts \"Age: #{age}\"",
      "holeyCode": "age = 20\nIO.puts \"Age: #{___}\"",
      "correctLines": [
        "age = 20",
        "IO.puts \"Age: #{age}\""
      ],
      "lineHints": [
        null,
        "はこの名前 age を指定します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Age: 20\n"
        }
      ]
    },
    {
      "title": "データをならべる「リスト」",
      "description": "たくさんのデータを一つの「列」にまとめて並べられる「リスト」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リストの作りかた",
          "content": "# [ ]（しかくい かっこ）を使います\n\nリストの中身を取り出すときは `Enum.at`（イーナム・アット）という機能を使います。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```elixir\nlist = [10, 20]\nIO.puts Enum.at(list, 1) # 20 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "list = [10, 20]\nIO.puts Enum.at(list, 1)",
      "holeyCode": "list = [10, 20]\nIO.puts Enum.at(list, ___)",
      "correctLines": [
        "list = [10, 20]",
        "IO.puts Enum.at(list, 1)"
      ],
      "lineHints": [
        null,
        "2番目のデータの番号は 1 です。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって動きを変えてみましょう。 if（イフ）を使います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if と do と end",
          "content": "# まとまりを作りましょう\n\nElixirでは、`if 条件 do` と入力し、最後に `end` と入力して終わらせるのがルールです。\n\n**コード例：**\n```elixir\nif score > 80 do\n  IO.puts \"合格！\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "score = 100\nif score > 80 do\n  IO.puts \"Great\"\nend",
      "holeyCode": "score = 100\nif score ___ 80 do\n  IO.puts \"Great\"\nend",
      "correctLines": [
        "score = 100",
        "if score > 80 do",
        "  IO.puts \"Great\"",
        "end"
      ],
      "lineHints": [
        null,
        "比較するための記号 `>` を入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "elseブロック",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```elixir\nif age >= 20 do\n  IO.puts \"大人です\"\nelse\n  IO.puts \"子供です\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 5\nif x > 10 do\n  IO.puts \"Big\"\nelse\n  IO.puts \"Small\"\nend",
      "holeyCode": "x = 5\nif x > 10 do\n  IO.puts \"Big\"\n___ \n  IO.puts \"Small\"\nend",
      "correctLines": [
        "x = 5",
        "if x > 10 do",
        "  IO.puts \"Big\"",
        "else",
        "  IO.puts \"Small\"",
        "end"
      ],
      "lineHints": [
        null,
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "Enum（イーナム）という機能を使って、リストの中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Enum.each ループ",
          "content": "# ひとつずつ取り出します\n\n`Enum.each(リスト, fn x -> ... end)` という形を使って、中身を順番に処理します。ちょっと独特な書き方ですが、データの流れを作るのに便利ですよ。\n\n**コード例：**\n```elixir\nlist = [1, 2, 3]\nEnum.each(list, fn x -> IO.puts x end)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "list = [1, 2, 3]\nEnum.each(list, fn x -> \n  IO.puts x \nend)",
      "holeyCode": "list = [1, 2, 3]\nEnum.each(list, fn x -> \n  IO.puts ___ \nend)",
      "correctLines": [
        "list = [1, 2, 3]",
        "Enum.each(list, fn x -> ",
        "  IO.puts x ",
        "end)"
      ],
      "lineHints": [
        null,
        null,
        "取り出したデータ x を表示します。",
        null
      ],
      "candidates": {
        "variables": [
          "x"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "名前で探す「マップ」",
      "description": "名前を指定してデータを取り出せる「マップ」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Map（マップ）",
          "content": "# %{ } を使います\n\n「名前」と「データ」をセットにして保存できます。矢印のような記号 `=>` を使うのがElixirのスタイルです。\n\n**コード例：**\n```elixir\nmap = %{\"name\" => \"たろう\"}\nIO.puts map[\"name\"] # 「たろう」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "user = %{\"name\" => \"Alice\"}\nIO.puts user[\"name\"]",
      "holeyCode": "user = %{\"name\" => \"Alice\"}\nIO.puts user[\"___\"]",
      "correctLines": [
        "user = %{\"name\" => \"Alice\"}",
        "IO.puts user[\"name\"]"
      ],
      "lineHints": [
        null,
        "\"name\" という名前を指定してデータを取り出します。"
      ],
      "candidates": {
        "strings": [
          "name"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "自分だけの「モジュール」を作りましょう",
      "description": "いくつかの関数をまとめて、名前をつけた「モジュール」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "defmodule と def",
          "content": "# チーム（モジュール）作り\n\nやりたいことをひとまとめにしたものを「モジュール」と呼びます。その中に `def` を使って関数を作りますよ。\n\n**コード例：**\n```elixir\ndefmodule Main do\n  def aisatsu do\n    IO.puts \"こんにちは\"\n  end\nend\n\nMain.aisatsu() # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Main do\n  def greet do\n    IO.puts \"Hello\"\n  end\nend\nMain.greet()",
      "holeyCode": "defmodule Main do\n  def greet do\n    IO.puts \"Hello\"\n  end\nend\nMain.___()",
      "correctLines": [
        "defmodule Main do",
        "  def greet do",
        "    IO.puts \"Hello\"",
        "  end",
        "end",
        "Main.greet()"
      ],
      "lineHints": [
        "Main という名前のモジュールを作ります。",
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "モジュールの終わりです。",
        "Main モジュールの greet 関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}