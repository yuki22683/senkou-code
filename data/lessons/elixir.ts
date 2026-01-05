export const elixirData = {
  "language": "elixir",
  "lessonId": "elixir-1",
  "lessonTitle": "Elixir I",
  "lessonDescription": "Erlang VM上で動作する並行処理に強い言語Elixirの基本を学びます。Rubyライクな構文で関数型プログラミングを学べます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Elixirで画面に文字を表示するには IO.puts を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "IO.puts",
          "content": "# 出力関数\n\n`IO.puts` の後ろに文字を書くことで表示できます。\n\n**コード例：**\n```elixir\nIO.puts \"Hello, Elixir!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "IO.puts \"Hello, Elixir!\"",
      "holeyCode": "IO.puts \"___\"",
      "correctLines": ["IO.puts \"Hello, Elixir!\""],
      "lineHints": ["Hello, Elixir! を出力します。"],
      "candidates": { "strings": ["Hello, Elixir!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, Elixir!\n" }]
    },
    {
      "title": "変数",
      "description": "変数を定義して出力しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数",
          "content": "# パターンマッチ\n\nElixirの変数は一度値を決めたら、原則そのまま使います（再代入は可能ですが）。\n\n**コード例：**\n```elixir\nx = 10\nIO.puts x\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 10\nIO.puts x",
      "holeyCode": "x = ___\nIO.puts ___",
      "correctLines": ["x = 10", "IO.puts x"],
      "lineHints": ["10を代入します。", "変数xを出力します。"],
      "candidates": { "variables": ["x"], "numbers": ["10"] },
      "testCases": [{ "input": "", "expected_output": "10\n" }]
    },
    {
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "演算",
          "content": "# 四則演算\n\n`+`, `-`, `*`, `/` などが使えます。\n\n**コード例：**\n```elixir\nIO.puts 5 + 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "a = 5\nb = 3\nIO.puts a + b",
      "holeyCode": "a = 5\nb = 3\nIO.puts a ___ b",
      "correctLines": ["a = 5", "b = 3", "IO.puts a + b"],
      "lineHints": [null, null, "a + b を出力します。"],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8\n" }]
    },
    {
      "title": "式展開",
      "description": "文字列の中に変数を埋め込みましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "式展開",
          "content": "# #{ }\n\n文字列の中で `#{変数}` を使うと、変数の値を埋め込めます。\n\n**コード例：**\n```elixir\nage = 20\nIO.puts \"年齢は #{age} です\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "age = 20\nIO.puts \"Age: #{age}\"",
      "holeyCode": "age = 20\nIO.puts \"Age: #{___}\"",
      "correctLines": ["age = 20", "IO.puts \"Age: #{age}\""],
      "lineHints": [null, "変数ageを埋め込みます。"],
      "candidates": { "variables": ["age"] },
      "testCases": [{ "input": "", "expected_output": "Age: 20\n" }]
    },
    {
      "title": "リスト",
      "description": "リスト（連結リスト）を使いましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リスト",
          "content": "# [ ]\n\n複数のデータをまとめて扱います。インデックスは0から始まります。\n\n**コード例：**\n```elixir\nlist = [10, 20]\nIO.puts Enum.at(list, 1) # 20 を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "list = [10, 20]\nIO.puts Enum.at(list, 1)",
      "holeyCode": "list = [10, 20]\nIO.puts Enum.at(list, ___)",
      "correctLines": ["list = [10, 20]", "IO.puts Enum.at(list, 1)"],
      "lineHints": [null, "インデックス1を指定します。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "20\n" }]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if",
          "content": "# if ... do ... end\n\n条件を満たす場合のみ処理を実行します。\n\n**コード例：**\n```elixir\nif score > 80 do\n  IO.puts \"合格\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "score = 100\nif score > 80 do\n  IO.puts \"Great\"\nend",
      "holeyCode": "score = 100\nif score ___ 80 do\n  IO.puts \"Great\"\nend",
      "correctLines": ["score = 100", "if score > 80 do", "  IO.puts \"Great\"", "end"],
      "lineHints": [null, "比較演算子 > を使います。", null, null],
      "candidates": { "operators": [">"] },
      "testCases": [{ "input": "", "expected_output": "Great\n" }]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# else\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```elixir\nif age >= 20 do\n  IO.puts \"大人\"\nelse\n  IO.puts \"子供\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 5\nif x > 10 do\n  IO.puts \"Big\"\nelse\n  IO.puts \"Small\"\nend",
      "holeyCode": "x = 5\nif x > 10 do\n  IO.puts \"Big\"\n___ \n  IO.puts \"Small\"\nend",
      "correctLines": ["x = 5", "if x > 10 do", "  IO.puts \"Big\"", "else", "  IO.puts \"Small\"", "end"],
      "lineHints": [null, null, null, "else を記述します。"],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": "", "expected_output": "Small\n" }]
    },
    {
      "title": "列挙ング (Enum)",
      "description": "Enumモジュールを使ってリストを走査します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Enum.each",
          "content": "# 要素のループ\n\nリストの要素を一つずつ取り出して、匿名関数で処理します。\n\n**コード例：**\n```elixir\nlist = [1, 2, 3]\nEnum.each(list, fn x -> IO.puts x end)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "list = [1, 2, 3]\nEnum.each(list, fn x -> \n  IO.puts x \nend)",
      "holeyCode": "list = [1, 2, 3]\nEnum.each(list, fn x -> \n  IO.puts ___ \nend)",
      "correctLines": ["list = [1, 2, 3]", "Enum.each(list, fn x -> ", "  IO.puts x ", "end)"],
      "lineHints": [null, null, "変数xを出力します。", null],
      "candidates": { "variables": ["x"] },
      "testCases": [{ "input": "", "expected_output": "1\n2\n3\n" }]
    },
    {
      "title": "マップ",
      "description": "キーと値のペアを扱うマップを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Map",
          "content": "# %{ }\n\n名前付きのキーでデータを管理します。\n\n**コード例：**\n```elixir\nmap = %{\"name\" => \"Alice\"}\nIO.puts map[\"name\"] # \"Alice\" を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "user = %{\"name\" => \"Alice\"}\nIO.puts user[\"name\"]",
      "holeyCode": "user = %{\"name\" => \"Alice\"}\nIO.puts user[\"___\"]",
      "correctLines": ["user = %{\"name\" => \"Alice\"}", "IO.puts user[\"name\"]"],
      "lineHints": [null, "キー name を指定します。"],
      "candidates": { "strings": ["name"] },
      "testCases": [{ "input": "", "expected_output": "Alice\n" }]
    },
    {
      "title": "モジュールと関数",
      "description": "モジュールと関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "defmodule",
          "content": "# 処理のグループ化\n\nモジュールの中に複数の関数を定義できます。\n\n**コード例：**\n```elixir\ndefmodule Main do\n  def greet do\n    IO.puts \"Hello\"\n  end\nend\n\nMain.greet() # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Main do\n  def greet do\n    IO.puts \"Hello\"\n  end\nend\nMain.greet()",
      "holeyCode": "defmodule Main do\n  def greet do\n    IO.puts \"Hello\"\n  end\nend\nMain.___()",
      "correctLines": ["defmodule Main do", "  def greet do", "    IO.puts \"Hello\"", "  end", "end", "Main.greet()"],
      "lineHints": [null, null, null, null, null, "greet を呼び出します。"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    }
  ]
};