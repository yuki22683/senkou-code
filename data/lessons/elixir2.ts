export const elixir2Data = {
  "language": "elixir",
  "lessonId": "elixir-2",
  "lessonTitle": "Elixir II - パターンマッチと並行処理",
  "lessonDescription": "Elixirの強力な機能「パターンマッチング」と「プロセス」を学びます。関数型プログラミングの考え方を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "パターンマッチングの基本",
      "description": "Elixirの核となる「パターンマッチング」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "パターンマッチとは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# = は代入ではない\n\nElixirの `=` は **マッチ演算子** です。左辺と右辺が一致するかを確認し、変数を束縛します。"
        },
        {
          "title": "パターンマッチの使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 構造で分解\n\nタプルやリストを分解して変数に代入できます。\n\n**コード例：**\n```elixir\n{a, b} = {1, 2}\n# a = 1, b = 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# yでタプルの2番目を受け取る\n{x, y} = {10, 20}\nIO.puts x",
      "holeyCode": "# yでタプルの2番目を受け取る\n{x, ___} = {10, 20}\nIO.puts x",
      "correctLines": [
        "{x, y} = {10, 20}",
        "IO.puts x"
      ],
      "lineHints": [
        "y でタプルの2番目の要素を受け取ります。",
        ""
      ],
      "candidates": {
        "variables": ["y"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "リストのパターンマッチ",
      "description": "リストの先頭と残りを分解する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "head | tail",
          "image": "/illustrations/3d/robot.png",
          "content": "# リストの分解\n\n`[head | tail]` パターンで、リストの先頭と残りに分解できます。"
        },
        {
          "title": "| の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 先頭と残り\n\n`|` の左が先頭要素、右が残りのリストです。\n\n**コード例：**\n```elixir\n[first | rest] = [1, 2, 3]\n# first = 1, rest = [2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# |でリストを分解\n[head | tail] = [1, 2, 3]\nIO.puts head",
      "holeyCode": "# |でリストを分解\n[head ___ tail] = [1, 2, 3]\nIO.puts head",
      "correctLines": [
        "[head | tail] = [1, 2, 3]",
        "IO.puts head"
      ],
      "lineHints": [
        "| でリストを分解します。",
        ""
      ],
      "candidates": {
        "operators": ["|"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "パイプ演算子を使おう",
      "description": "データを流すように処理する「|>」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "パイプ演算子とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# データを流す\n\n**|>** は、左側の結果を右側の関数の第1引数に渡します。処理の流れが読みやすくなります。"
        },
        {
          "title": "|> の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 連鎖させる\n\n複数の関数を連鎖させて処理できます。\n\n**コード例：**\n```elixir\n\"hello\"\n|> String.upcase()\n|> IO.puts()\n# HELLO\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "1..5\n# |>でパイプ\n|> Enum.sum()\n|> IO.puts()",
      "holeyCode": "1..5\n# |>でパイプ\n___ Enum.sum()\n|> IO.puts()",
      "correctLines": [
        "1..5",
        "|> Enum.sum()",
        "|> IO.puts()"
      ],
      "lineHints": [
        "1から5の範囲を作ります。",
        "|> でパイプします。",
        ""
      ],
      "candidates": {
        "operators": ["|>"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "Enum.map で変換",
      "description": "リストの各要素を変換する「Enum.map」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Enum.map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を変換\n\n**Enum.map** は、リストの各要素に関数を適用して新しいリストを作ります。"
        },
        {
          "title": "Enum.map の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 無名関数を渡す\n\n`fn x -> x * 2 end` のような無名関数を渡します。\n\n**コード例：**\n```elixir\nEnum.map([1, 2, 3], fn x -> x * 2 end)\n# [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# mapで各要素を変換\nresult = Enum.map([1, 2, 3], fn x -> x * x end)\nIO.inspect result",
      "holeyCode": "# mapで各要素を変換\nresult = Enum.___ ([1, 2, 3], fn x -> x * x end)\nIO.inspect result",
      "correctLines": [
        "result = Enum.map([1, 2, 3], fn x -> x * x end)",
        "IO.inspect result"
      ],
      "lineHints": [
        "map で各要素を変換します。",
        ""
      ],
      "candidates": {
        "functions": ["map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 4, 9]\n"
        }
      ]
    },
    {
      "title": "Enum.filter で絞り込み",
      "description": "条件に合う要素だけを抽出する「Enum.filter」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Enum.filter とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件でフィルタ\n\n**Enum.filter** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "Enum.filter の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 真を返す要素を残す\n\n関数が真を返す要素だけが残ります。\n\n**コード例：**\n```elixir\nEnum.filter([1, 2, 3, 4, 5], fn x -> x > 3 end)\n# [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# filterで条件に合う要素を抽出\nresult = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)\nIO.inspect result",
      "holeyCode": "# filterで条件に合う要素を抽出\nresult = Enum.___ ([1, 2, 3, 4, 5], fn x -> x >= 3 end)\nIO.inspect result",
      "correctLines": [
        "result = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)",
        "IO.inspect result"
      ],
      "lineHints": [
        "filter で条件に合う要素を抽出します。",
        ""
      ],
      "candidates": {
        "functions": ["filter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[3, 4, 5]\n"
        }
      ]
    },
    {
      "title": "case でパターンマッチ",
      "description": "複数のパターンで分岐する「case」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "case とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# パターンで分岐\n\n**case** は、値をパターンとマッチさせて分岐する構文です。"
        },
        {
          "title": "case の使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 複数のパターン\n\n`->` で各パターンの処理を書きます。\n\n**コード例：**\n```elixir\ncase x do\n  1 -> \"one\"\n  2 -> \"two\"\n  _ -> \"other\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 2\n# caseでパターンマッチ\nresult = case x do\n  1 -> \"one\"\n  2 -> \"two\"\n  _ -> \"other\"\nend\nIO.puts result",
      "holeyCode": "x = 2\n# caseでパターンマッチ\nresult = ___ x do\n  1 -> \"one\"\n  2 -> \"two\"\n  _ -> \"other\"\nend\nIO.puts result",
      "correctLines": [
        "x = 2",
        "result = case x do",
        "  1 -> \"one\"",
        "  2 -> \"two\"",
        "  _ -> \"other\"",
        "end",
        "IO.puts result"
      ],
      "lineHints": [
        "",
        "case でパターンマッチします。",
        "",
        "",
        "_ はワイルドカードです。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["case"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "two\n"
        }
      ]
    },
    {
      "title": "関数を定義しよう",
      "description": "モジュール内に関数を定義する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "defmodule と def",
          "image": "/illustrations/3d/robot.png",
          "content": "# モジュールと関数\n\n**defmodule** でモジュールを定義し、**def** で公開関数を定義します。"
        },
        {
          "title": "関数の定義",
          "image": "/illustrations/3d/robot.png",
          "content": "# def 関数名 do ... end\n\nパターンマッチを使った複数の関数定義もできます。\n\n**コード例：**\n```elixir\ndefmodule Math do\n  def double(x), do: x * 2\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Calc do\n  # defで関数を定義\n  def triple(x), do: x * 3\nend\nIO.puts Calc.triple(4)",
      "holeyCode": "defmodule Calc do\n  # defで関数を定義\n  ___ triple(x), do: x * 3\nend\nIO.puts Calc.triple(4)",
      "correctLines": [
        "defmodule Calc do",
        "  def triple(x), do: x * 3",
        "end",
        "IO.puts Calc.triple(4)"
      ],
      "lineHints": [
        "",
        "def で関数を定義します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["def"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12\n"
        }
      ]
    },
    {
      "title": "再帰で計算しよう",
      "description": "関数型プログラミングの基本「再帰」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "再帰とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 自分自身を呼び出す\n\n**再帰** は、関数が自分自身を呼び出す手法です。ループの代わりに使います。"
        },
        {
          "title": "再帰の書き方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 終了条件を忘れずに\n\n必ず終了条件を設定します。\n\n**コード例：**\n```elixir\ndef sum(0), do: 0\ndef sum(n), do: n + sum(n - 1)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Math do\n  def factorial(0), do: 1\n  # factorialを再帰的に呼び出す\n  def factorial(n), do: n * factorial(n - 1)\nend\nIO.puts Math.factorial(5)",
      "holeyCode": "defmodule Math do\n  def factorial(0), do: 1\n  # factorialを再帰的に呼び出す\n  def factorial(n), do: n * ___(n - 1)\nend\nIO.puts Math.factorial(5)",
      "correctLines": [
        "defmodule Math do",
        "  def factorial(0), do: 1",
        "  def factorial(n), do: n * factorial(n - 1)",
        "end",
        "IO.puts Math.factorial(5)"
      ],
      "lineHints": [
        "",
        "終了条件です。",
        "factorial を再帰的に呼び出します。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["factorial"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "120\n"
        }
      ]
    },
    {
      "title": "プロセスを作ろう",
      "description": "軽量プロセスを作る「spawn」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "プロセスとは？",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# 軽量な並行処理\n\nElixirの **プロセス** は、非常に軽量で大量に作成できます。`spawn` で新しいプロセスを作ります。"
        },
        {
          "title": "spawn の使い方",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# 関数を渡す\n\n`spawn` に関数を渡すと、新しいプロセスで実行されます。\n\n**コード例：**\n```elixir\nspawn(fn -> IO.puts \"hello\" end)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# spawnでプロセスを作成\nspawn(fn -> IO.puts \"hello\" end)\nProcess.sleep(100)",
      "holeyCode": "# spawnでプロセスを作成\n___(fn -> IO.puts \"hello\" end)\nProcess.sleep(100)",
      "correctLines": [
        "spawn(fn -> IO.puts \"hello\" end)",
        "Process.sleep(100)"
      ],
      "lineHints": [
        "spawn でプロセスを作ります。",
        "プロセスの完了を待ちます。"
      ],
      "candidates": {
        "functions": ["spawn"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello\n"
        }
      ]
    },
    {
      "title": "メッセージを送ろう",
      "description": "プロセス間でメッセージを送受信する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "send と receive",
          "image": "/illustrations/3d/robot.png",
          "content": "# プロセス間通信\n\n**send** でメッセージを送り、**receive** で受け取ります。アクターモデルの基本です。"
        },
        {
          "title": "メッセージの送受信",
          "image": "/illustrations/3d/robot.png",
          "content": "# self() で自分のPID\n\n`self()` で自分のプロセスIDを取得できます。\n\n**コード例：**\n```elixir\nsend(self(), :hello)\nreceive do\n  :hello -> IO.puts \"got hello\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# sendでメッセージを送る\nsend(self(), {:msg, 42})\nreceive do\n  {:msg, n} -> IO.puts n\nend",
      "holeyCode": "# sendでメッセージを送る\n___(self(), {:msg, 42})\nreceive do\n  {:msg, n} -> IO.puts n\nend",
      "correctLines": [
        "send(self(), {:msg, 42})",
        "receive do",
        "  {:msg, n} -> IO.puts n",
        "end"
      ],
      "lineHints": [
        "send でメッセージを送ります。",
        "",
        "パターンマッチでメッセージを受け取ります。",
        ""
      ],
      "candidates": {
        "functions": ["send"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    }
  ]
}
