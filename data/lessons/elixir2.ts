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
      "holeyCode": "# yでタプルの2番目を受け取る\\n{___, ___} = {___, ___}\\n# xを入力\\n___.___ ___",
      "correctLines": [
          "# yでタプルの2番目を受け取る",
          "{x, y} = {10, 20}",
          "# xを入力",
          "IO.puts x"
        ],
      "lineHints": [
          null,
          "パターンマッチでタプルを分解します。",
          null,
          "IOモジュールのputsでxを表示します。"
        ],
        "candidates": {
          "variables": [
            "y",
            "x"
          ],
          "others": ["10", "20", "IO", "puts"]
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
      "holeyCode": "# |でリストを分解\\n[___ | ___] = [___, ___, ___]\\n# headを入力\\n___.___ ___",
      "correctLines": [
          "# |でリストを分解",
          "[head | tail] = [1, 2, 3]",
          "# headを入力",
          "IO.puts head"
        ],
      "lineHints": [
          null,
          "|演算子でリストを先頭と残りに分解します。",
          null,
          "IOモジュールのputsでheadを表示します。"
        ],
        "candidates": {
          "operators": [
            "|"
          ],
          "variables": [
            "head",
            "tail"
          ],
          "others": ["1", "2", "3", "IO", "puts"]
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
      "holeyCode": "# 1..5で範囲を作成\\n___..___\\n# |>でパイプ\\n|> ___.___()\\n# |>でパイプ\\n|> ___.___()",
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
          "Enumモジュールのsumで合計を計算します。",
          null,
          "IOモジュールのputsで結果を表示します。"
        ],
        "candidates": {
          "ranges": [
            "1..5"
          ],
          "operators": [
            "|>"
          ],
          "others": ["1", "5", "Enum", "sum", "IO", "puts"]
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
      "holeyCode": "# mapで各要素を変換\\n___ = ___.___([___, ___, ___], fn ___ -> ___ * ___ end)\\n# resultを入力\\n___.___ ___",
      "correctLines": [
          "# mapで各要素を変換",
          "result = Enum.map([1, 2, 3], fn x -> x * x end)",
          "# resultを入力",
          "IO.inspect result"
        ],
      "lineHints": [
          null,
          "Enum.mapで各要素にfnを適用し、x * xを計算します。",
          null,
          "IOモジュールのinspectでresultを表示します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "variables": [
            "result",
            "x"
          ],
          "others": ["Enum", "1", "2", "3", "IO", "inspect"]
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
      "holeyCode": "# filterで条件に合う要素を抽出\\n___ = ___.___([___, ___, ___, ___, ___], fn ___ -> ___ >= ___ end)\\n# resultを入力\\n___.___ ___",
      "correctLines": [
          "# filterで条件に合う要素を抽出",
          "result = Enum.filter([1, 2, 3, 4, 5], fn x -> x >= 3 end)",
          "# resultを入力",
          "IO.inspect result"
        ],
      "lineHints": [
          null,
          "Enum.filterで条件x >= 3を満たす要素を抽出します。",
          null,
          "IOモジュールのinspectでresultを表示します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "variables": [
            "result",
            "x"
          ],
          "others": ["Enum", "1", "2", "3", "4", "5", "IO", "inspect"]
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
      "holeyCode": "# 2を入力\\n___ = ___\\n# caseでパターンマッチ\\n___ = case ___ do\\n  ___ -> \"___\"\\n  ___ -> \"___\"\\n  ___ -> \"___\"\\n___\\n# resultを入力\\n___.___ ___",
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
          "変数xに2を代入します。",
          null,
          "case式でxをパターンマッチします。",
          "1にマッチしたら\"one\"を返します。",
          "2にマッチしたら\"two\"を返します。",
          "_はワイルドカードで\"other\"を返します。",
          "case式の終了を表すキーワードです。",
          null,
          "IOモジュールのputsでresultを表示します。"
        ],
        "candidates": {
          "numbers": [
            "1",
            "2"
          ],
          "keywords": [
            "case"
          ],
          "variables": [
            "result",
            "x",
            "_"
          ],
          "others": ["one", "two", "other", "IO", "puts", "end"]
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
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule ___ do\\n  # defで関数を定義\\n  def ___(___), do: ___ * ___\\n___\\n# Calc.triple(4)を入力\\n___.___ ___.___(___)",
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
          "Calcモジュールを定義します。",
          null,
          "triple関数でx * 3を計算します。",
          "defmoduleの終了を表すキーワードです。",
          null,
          "Calc.triple(4)で12を表示します。"
        ],
        "candidates": {
          "keywords": [
            "defmodule",
            "def"
          ],
          "functions": [
            "triple"
          ],
          "variables": [
            "x"
          ],
          "others": ["Calc", "3", "4", "IO", "puts", "end"]
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
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule ___ do\\n  def ___(___), do: ___\\n  # factorialを再帰的に呼び出す\\n  def ___(___), do: ___ * ___(___ - ___)\\n___\\n# Math.factorial(5)を入力\\n___.___ ___.___(___)",
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
          "Mathモジュールを定義します。",
          "factorial(0)の場合は1を返します。",
          null,
          "factorial(n)でn * factorial(n-1)を計算します。",
          "defmoduleの終了を表すキーワードです。",
          null,
          "Math.factorial(5)で120を表示します。"
        ],
        "candidates": {
          "keywords": [
            "defmodule"
          ],
          "functions": [
            "factorial"
          ],
          "variables": [
            "n"
          ],
          "others": ["Math", "0", "1", "5", "IO", "puts", "end"]
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
      "holeyCode": "# spawnでプロセスを作成\\n___(fn -> ___.___ \"___\" end)\\n# 100を入力\\n___.___(___)",
      "correctLines": [
          "# spawnでプロセスを作成",
          "spawn(fn -> IO.puts \"こんにちは\" end)",
          "# 100を入力",
          "Process.sleep(100)"
        ],
      "lineHints": [
          null,
          "spawnでプロセスを作り、IO.putsで\"こんにちは\"を表示します。",
          null,
          "Process.sleep(100)でプロセスの完了を待ちます。"
        ],
        "candidates": {
          "functions": [
            "spawn"
          ],
          "numbers": [
            "100"
          ],
          "others": ["こんにちは", "IO", "Process", "sleep", "puts"]
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
      "holeyCode": "# sendでメッセージを送る\\n___(___(), {:___, ___})\\n# receiveでメッセージを受け取る\\n___ ___\\n  {:___, ___} -> ___.___ ___\\n___",
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
          "send(self(), {:msg, 42})でメッセージを送ります。",
          null,
          "receiveでメッセージを待ち受けます。doでブロック開始。",
          "パターンマッチで{:msg, n}を受け取りIO.putsで表示します。",
          "receiveブロックの終了を表すキーワードです。"
        ],
        "candidates": {
          "functions": [
            "send",
            "self"
          ],
          "keywords": [
            "receive"
          ],
          "variables": [
            "n"
          ],
          "others": ["42", "msg", "IO", "puts", "do", "end"]
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
