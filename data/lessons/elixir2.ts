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
          "image": "/illustrations/common/chain_links.png",
          "content": "# = は代入ではない\n\nElixirの `=` は **マッチ演算子** です。左辺と右辺が一致するかを確認し、変数を束縛します。"
        },
        {
          "title": "パターンマッチの使い方",
          "image": "/illustrations/common/chain_links.png",
          "content": "# 構造で分解\n\nタプルやリストを分解して変数に代入できます。\n\n**コード例：**\n```elixir\n{a, b} = {1, 2}\n# a = 1, b = 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# yでタプルの2番目を受け取る\n{x, y} = {10, 20}\nIO.puts x",
      "holeyCode": "# yでタプルの2番目を受け取る\n{x, ___} = {10, 20}\n# xを入力\nIO.puts ___",
      "correctLines": [
        "# yでタプルの2番目を受け取る",
        "{x, y} = {10, 20}",
        "# xを入力",
        "IO.puts x"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "xの値を表示します。"],
      "candidates": {
        "variables": ["y", "x"]
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
          "image": "/illustrations/common/chain_links.png",
          "content": "# リストの分解\n\n`[head | tail]` パターンで、リストの先頭と残りに分解できます。"
        },
        {
          "title": "| の使い方",
          "image": "/illustrations/common/chain_links.png",
          "content": "# 先頭と残り\n\n`|` の左が先頭要素、右が残りのリストです。\n\n**コード例：**\n```elixir\n[first | rest] = [1, 2, 3]\n# first = 1, rest = [2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# |でリストを分解\n[head | tail] = [1, 2, 3]\nIO.puts head",
      "holeyCode": "# |でリストを分解\n[head ___ tail] = [1, 2, 3]\n# headを入力\nIO.puts ___",
      "correctLines": [
        "# |でリストを分解",
        "[head | tail] = [1, 2, 3]",
        "# headを入力",
        "IO.puts head"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "headの値を表示します。"],
      "candidates": {
        "operators": ["|"],
        "variables": ["head"]
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
          "image": "/illustrations/common/chain_links.png",
          "content": "# データを流す\n\n**|>** は、左側の結果を右側の関数の第1引数に渡します。処理の流れが読みやすくなります。"
        },
        {
          "title": "|> の使い方",
          "image": "/illustrations/common/chain_links.png",
          "content": "# 連鎖させる\n\n複数の関数を連鎖させて処理できます。\n\n**コード例：**\n```elixir\n\"hello\"\n|> String.upcase()\n|> IO.puts()\n# HELLO\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "1..5\n# |>でパイプ\n|> Enum.sum()\n|> IO.puts()",
      "holeyCode": "# 1..5で範囲を作成\n___\n# |>でパイプ\n___ Enum.sum()\n# |>でパイプ\n___ IO.puts()",
      "correctLines": [
        "# 1..5で範囲を作成",
        "1..5",
        "# |>でパイプ",
        "|> Enum.sum()",
        "# |>でパイプ",
        "|> IO.puts()"
      ],
      "lineHints": [null, "1から5の範囲を作ります。", null, "|> でパイプします。", null, "|> でパイプします。"],
      "candidates": {
        "ranges": ["1..5"],
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
          "image": "/illustrations/common/dictionary_book.png",
          "content": "# 各要素を変換\n\n**Enum.map** は、リストの各要素に関数を適用して新しいリストを作ります。"
        },
        {
          "title": "Enum.map の使い方",
          "image": "/illustrations/common/dictionary_book.png",
          "content": "# 無名関数を渡す\n\n`fn x -> x * 2 end` のような無名関数を渡します。\n\n**コード例：**\n```elixir\nEnum.map([1, 2, 3], fn x -> x * 2 end)\n# [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# mapで各要素を変換\nresult = Enum.map([1, 2, 3], fn x -> x * x end)\nIO.inspect result",
      "holeyCode": "# mapで各要素を変換\nresult = Enum.___ ([1, 2, 3], fn x -> x * x end)\n# resultを入力\nIO.inspect ___",
      "correctLines": [
        "# mapで各要素を変換",
        "result = Enum.map([1, 2, 3], fn x -> x * x end)",
        "# resultを入力",
        "IO.inspect result"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "resultの値を表示します。"],
      "candidates": {
        "functions": ["map"],
        "variables": ["result"]
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
          "image": "/illustrations/common/dictionary_book.png",
          "content": "# 条件でフィルタ\n\n**Enum.filter** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "Enum.filter の使い方",
          "image": "/illustrations/common/dictionary_book.png",
          "content": "# 真を返す要素を残す\n\n関数が真を返す要素だけが残ります。\n\n**コード例：**\n```elixir\nEnum.filter([1, 2, 3, 4, 5], fn x -> x > 3 end)\n# [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# filterで条件に合う要素を抽出\nresult = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)\nIO.inspect result",
      "holeyCode": "# filterで条件に合う要素を抽出\nresult = Enum.___ ([1, 2, 3, 4, 5], fn x -> x >= 3 end)\n# resultを入力\nIO.inspect ___",
      "correctLines": [
        "# filterで条件に合う要素を抽出",
        "result = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)",
        "# resultを入力",
        "IO.inspect result"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "resultの値を表示します。"],
      "candidates": {
        "functions": ["filter"],
        "variables": ["result"]
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
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# パターンで分岐\n\n**case** は、値をパターンとマッチさせて分岐する構文です。"
        },
        {
          "title": "case の使い方",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 複数のパターン\n\n`->` で各パターンの処理を書きます。\n\n**コード例：**\n```elixir\ncase x do\n  1 -> \"one\"\n  2 -> \"two\"\n  _ -> \"other\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "x = 2\n# caseでパターンマッチ\nresult = case x do\n  1 -> \"one\"\n  2 -> \"two\"\n  _ -> \"other\"\nend\nIO.puts result",
      "holeyCode": "# 2を入力\nx = ___\n# caseでパターンマッチ\nresult = ___ x do\n  1 -> \"one\"\n  2 -> \"two\"\n  _ -> \"other\"\nend\n# resultを入力\nIO.puts ___",
      "correctLines": [
        "# 2を入力",
        "x = 2",
        "# caseでパターンマッチ",
        "result = case x do",
        "  1 -> \"one\"",
        "  2 -> \"two\"",
        "  _ -> \"other\"",
        "end",
        "# resultを入力",
        "IO.puts result"
      ],
      "lineHints": [null, "変数に数値を代入（保存）します。", null, "case でパターンマッチします。", null, null, "_ はワイルドカードです。", null, null, "resultの値を表示します。"],
      "candidates": {
        "numbers": ["2"],
        "keywords": ["case"],
        "variables": ["result"]
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
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# モジュールと関数\n\n**defmodule** でモジュールを定義し、**def** で公開関数を定義します。"
        },
        {
          "title": "関数の定義",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# def 関数名 do ... end\n\nパターンマッチを使った複数の関数定義もできます。\n\n**コード例：**\n```elixir\ndefmodule Math do\n  def double(x), do: x * 2\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Calc do\n  # defで関数を定義\n  def triple(x), do: x * 3\nend\nIO.puts Calc.triple(4)",
      "holeyCode": "# defmoduleでモジュールを定義\n___ Calc do\n  # defで関数を定義\n  ___ triple(x), do: x * 3\nend\n# Calc.triple(4)を入力\nIO.puts ___",
      "correctLines": [
        "# defmoduleでモジュールを定義",
        "defmodule Calc do",
        "  # defで関数を定義",
        ["  def triple(x), do: x * 3", "  def triple(x), do: 3 * x"],
        "end",
        "# Calc.triple(4)を入力",
        "IO.puts Calc.triple(4)"
      ],
      "lineHints": [null, "defmodule でモジュールを定義します。", null, "関数（triple）を新しく定義します。", null, null, "Calc.triple(4) で関数を呼び出します。", null],
      "candidates": {
        "keywords": ["defmodule", "def"],
        "functions": ["Calc.triple(4)"]
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
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 自分自身を呼び出す\n\n**再帰** は、関数が自分自身を呼び出す手法です。ループの代わりに使います。"
        },
        {
          "title": "再帰の書き方",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 終了条件を忘れずに\n\n必ず終了条件を設定します。\n\n**コード例：**\n```elixir\ndef sum(0), do: 0\ndef sum(n), do: n + sum(n - 1)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Math do\n  def factorial(0), do: 1\n  # factorialを再帰的に呼び出す\n  def factorial(n), do: n * factorial(n - 1)\nend\nIO.puts Math.factorial(5)",
      "holeyCode": "# defmoduleでモジュールを定義\n___ Math do\n  def factorial(0), do: 1\n  # factorialを再帰的に呼び出す\n  def factorial(n), do: n * ___(n - 1)\nend\n# Math.factorial(5)を入力\nIO.puts ___",
      "correctLines": [
        "# defmoduleでモジュールを定義",
        "defmodule Math do",
        "  def factorial(0), do: 1",
        "  # factorialを再帰的に呼び出す",
        "  def factorial(n), do: n * factorial(n - 1)",
        "end",
        "# Math.factorial(5)を入力",
        "IO.puts Math.factorial(5)"
      ],
      "lineHints": [null, "defmodule でモジュールを定義します。", "関数（factorial）を新しく定義します。", null, "関数（factorial）を新しく定義します。", null, null, "Math.factorial(5) で関数を呼び出します。"],
      "candidates": {
        "keywords": ["defmodule"],
        "functions": ["factorial", "Math.factorial(5)"]
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
          "image": "/illustrations/common/envelope_message.png",
          "content": "# 軽量な並行処理\n\nElixirの **プロセス** は、非常に軽量で大量に作成できます。`spawn` で新しいプロセスを作ります。"
        },
        {
          "title": "spawn の使い方",
          "image": "/illustrations/common/envelope_message.png",
          "content": "# 関数を渡す\n\n`spawn` に関数を渡すと、新しいプロセスで実行されます。\n\n**コード例：**\n```elixir\nspawn(fn -> IO.puts \"hello\" end)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# spawnでプロセスを作成\nspawn(fn -> IO.puts \"hello\" end)\nProcess.sleep(100)",
      "holeyCode": "# spawnでプロセスを作成\n___(fn -> IO.puts \"hello\" end)\n# 100を入力\nProcess.sleep(___)",
      "correctLines": [
        "# spawnでプロセスを作成",
        "spawn(fn -> IO.puts \"hello\" end)",
        "# 100を入力",
        "Process.sleep(100)"
      ],
      "lineHints": [null, "spawn でプロセスを作ります。", null, "プロセスの完了を待ちます。"],
      "candidates": {
        "functions": ["spawn"],
        "numbers": ["100"]
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
          "image": "/illustrations/common/envelope_message.png",
          "content": "# プロセス間通信\n\n**send** でメッセージを送り、**receive** で受け取ります。アクターモデルの基本です。"
        },
        {
          "title": "メッセージの送受信",
          "image": "/illustrations/common/envelope_message.png",
          "content": "# self() で自分のPID\n\n`self()` で自分のプロセスIDを取得できます。\n\n**コード例：**\n```elixir\nsend(self(), :hello)\nreceive do\n  :hello -> IO.puts \"got hello\"\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# sendでメッセージを送る\nsend(self(), {:msg, 42})\nreceive do\n  {:msg, n} -> IO.puts n\nend",
      "holeyCode": "# sendでメッセージを送る\n___(self(), {:msg, 42})\n# receiveでメッセージを受け取る\n___ do\n  {:msg, n} -> IO.puts n\nend",
      "correctLines": [
        "# sendでメッセージを送る",
        "send(self(), {:msg, 42})",
        "# receiveでメッセージを受け取る",
        "receive do",
        "  {:msg, n} -> IO.puts n",
        "end"
      ],
      "lineHints": [null, "send でメッセージを送ります。", null, "receive でメッセージを受け取ります。", "パターンマッチでメッセージを受け取ります。", null],
      "candidates": {
        "functions": ["send"],
        "keywords": ["receive"]
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
