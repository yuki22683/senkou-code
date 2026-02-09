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
      "correctCode": "# yでタプルの2番目を受け取る\\n{x, y} = {10, 20}\\n# xを入力\\nIO.puts x",
      "holeyCode": "# yでタプルの2番目を受け取る\\n{x, y} = {___, 20}\\n# xを入力\\nIO.puts ___",
      "correctLines": [
          "# yでタプルの2番目を受け取る",
          "{x, y} = {10, 20}",
          "# xを入力",
          "IO.puts x"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "xの値を表示します。"
        ],
        "candidates": {
          "variables": [
            "y",
            "x"
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "リストのパターンマッチ",
      "correctCode": "# |でリストを分解\\n[head | tail] = [1, 2, 3]\\n# headを入力\\nIO.puts head",
      "holeyCode": "# |でリストを分解\\n[head | tail] = [___, 2, 3]\\n# headを入力\\nIO.puts ___",
      "correctLines": [
          "# |でリストを分解",
          "[head | tail] = [1, 2, 3]",
          "# headを入力",
          "IO.puts head"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "headの値を表示します。"
        ],
        "candidates": {
          "operators": [
            "|"
          ],
          "variables": [
            "head"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "パイプ演算子を使おう",
      "correctCode": "# 1..5で範囲を作成\\n1..5\\n# |>でパイプ\\n|> Enum.sum()\\n# |>でパイプ\\n|> IO.puts()",
      "holeyCode": "# 1..5で範囲を作成\\n___..5\\n# |>でパイプ\\n|> Enum.___()\\n# |>でパイプ\\n|> IO.___()",
      "correctLines": [
          "# 1..5で範囲を作成",
          "1..5",
          "# |>でパイプ",
          "|> Enum.sum()",
          "# |>でパイプ",
          "|> IO.puts()"
        ],
      "lineHints": [
          null,
          "1から5の範囲を作ります。",
          null,
          "|> でパイプします。",
          null,
          "|> でパイプします。"
        ],
        "candidates": {
          "ranges": [
            "1..5"
          ],
          "operators": [
            "|>"
          ],
          "others": ["1", "sum", "puts"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "Enum.map で変換",
      "correctCode": "# mapで各要素を変換\\nresult = Enum.map([1, 2, 3], fn x -> x * x end)\\n# resultを入力\\nIO.inspect result",
      "holeyCode": "# mapで各要素を変換\\n___\\n# resultを入力\\nIO.inspect ___",
      "correctLines": [
          "# mapで各要素を変換",
          "result = Enum.map([1, 2, 3], fn x -> x * x end)",
          "# resultを入力",
          "IO.inspect result"
        ],
      "lineHints": [
          null,
          "この行を正しく入力してください。",
          null,
          "resultの値を表示します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "variables": [
            "result"
          ],
          "others": ["map([1, 2, 3], fn x -> x * x end)", "result = Enum.map([1, 2, 3], fn x -> x * x end)", "result = Enum.map([1, 2, 3], fn x -> x * x end)\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 4, 9]\\n"
          }
        ]
      },
    {
      "title": "Enum.filter で絞り込み",
      "correctCode": "# filterで条件に合う要素を抽出\\nresult = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)\\n# resultを入力\\nIO.inspect result",
      "holeyCode": "# filterで条件に合う要素を抽出\\nresult = Enum.filter([___, 2, 3, 4, 5], fn x -> x >= 3 end)\\n# resultを入力\\nIO.inspect ___",
      "correctLines": [
          "# filterで条件に合う要素を抽出",
          "result = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)",
          "# resultを入力",
          "IO.inspect result"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "resultの値を表示します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "variables": [
            "result"
          ],
          "others": ["filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 4, 5]\\n"
          }
        ]
      },
    {
      "title": "case でパターンマッチ",
      "correctCode": "# 2を入力\\nx = 2\\n# caseでパターンマッチ\\nresult = case x do\\n  1 -> \"one\"\\n  2 -> \"two\"\\n  _ -> \"other\"\\nend\\n# resultを入力\\nIO.puts result",
      "holeyCode": "# 2を入力\\nx = ___\\n# caseでパターンマッチ\\nresult = case x ___\\n  ___ -> \"___\"\\n  2 -> \"___\"\\n  _ -> \"___\"\\n___\\n# resultを入力\\nIO.puts ___",
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
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "case でパターンマッチします。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "_ はワイルドカードです。",
          "ブロックを終了する。",
          null,
          "resultの値を表示します。"
        ],
        "candidates": {
          "numbers": [
            "2"
          ],
          "keywords": [
            "case"
          ],
          "variables": [
            "result"
          ],
          "others": ["do", "one", "two", "other", "end", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "two\\n"
          }
        ]
      },
    {
      "title": "関数を定義しよう",
      "correctCode": "# defmoduleでモジュールを定義\\ndefmodule Calc do\\n  # defで関数を定義\\n  def triple(x), do: x * 3\\nend\\n# Calc.triple(4)を入力\\nIO.puts Calc.triple(4)",
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule Calc ___\\n  # defで関数を定義\\n  def triple(x), do: x * ___\\n___\\n# Calc.triple(4)を入力\\nIO.puts Calc.triple(___)",
      "correctLines": [
          "# defmoduleでモジュールを定義",
          "defmodule Calc do",
          "  # defで関数を定義",
          "  def triple(x), do: x * 3",
          "end",
          "# Calc.triple(4)を入力",
          "IO.puts Calc.triple(4)"
        ],
      "lineHints": [
          null,
          "defmodule でモジュールを定義します。",
          null,
          "関数（triple）を新しく定義します。",
          "ブロックを終了する。",
          null,
          "Calc.triple(4) で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "defmodule",
            "def"
          ],
          "functions": [
            "Calc.triple(4)"
          ],
          "others": ["do", "3", "end", "4", "do", "3", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
      "title": "再帰で計算しよう",
      "correctCode": "# defmoduleでモジュールを定義\\ndefmodule Math do\\n  def factorial(0), do: 1\\n  # factorialを再帰的に呼び出す\\n  def factorial(n), do: n * factorial(n - 1)\\nend\\n# Math.factorial(5)を入力\\nIO.puts Math.factorial(5)",
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule Math ___\\n  def factorial(___), do: 1\\n  # factorialを再帰的に呼び出す\\n  def factorial(n), do: n * factorial(n - ___)\\n___\\n# Math.factorial(5)を入力\\nIO.puts Math.factorial(___)",
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
      "lineHints": [
          null,
          "defmodule でモジュールを定義します。",
          "関数（factorial）を新しく定義します。",
          null,
          "関数（factorial）を新しく定義します。",
          "ブロックを終了する。",
          null,
          "Math.factorial(5) で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "defmodule"
          ],
          "functions": [
            "factorial",
            "Math.factorial(5)"
          ],
          "others": ["do", "0", "1", "end", "5", "do", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "120\\n"
          }
        ]
      },
    {
      "title": "プロセスを作ろう",
      "correctCode": "# spawnでプロセスを作成\\nspawn(fn -> IO.puts \"こんにちは\" end)\\n# 100を入力\\nProcess.sleep(100)",
      "holeyCode": "# spawnでプロセスを作成\\n___(fn -> IO.puts \"___\" end)\\n# 100を入力\\nProcess.sleep(___)",
      "correctLines": [
          "# spawnでプロセスを作成",
          "spawn(fn -> IO.puts \"こんにちは\" end)",
          "# 100を入力",
          "Process.sleep(100)"
        ],
      "lineHints": [
          null,
          "spawn でプロセスを作ります。",
          null,
          "プロセスの完了を待ちます。"
        ],
        "candidates": {
          "functions": [
            "spawn"
          ],
          "numbers": [
            "100"
          ],
          "others": ["こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "メッセージを送ろう",
      "correctCode": "# sendでメッセージを送る\\nsend(self(), {:msg, 42})\\n# receiveでメッセージを受け取る\\nreceive do\\n  {:msg, n} -> IO.puts n\\nend",
      "holeyCode": "# sendでメッセージを送る\\nsend(self(), {:msg, ___})\\n# receiveでメッセージを受け取る\\nreceive ___\\n  {:msg, ___} -> IO.puts n\\n___",
      "correctLines": [
          "# sendでメッセージを送る",
          "send(self(), {:msg, 42})",
          "# receiveでメッセージを受け取る",
          "receive do",
          "  {:msg, n} -> IO.puts n",
          "end"
        ],
      "lineHints": [
          null,
          "send でメッセージを送ります。",
          null,
          "receive でメッセージを受け取ります。",
          "パターンマッチでメッセージを受け取ります。",
          "ブロックを終了する。"
        ],
        "candidates": {
          "functions": [
            "send"
          ],
          "keywords": [
            "receive"
          ],
          "others": ["42", "do", "n", "end", "do"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      }
  ]
}
