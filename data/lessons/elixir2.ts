export const elixir2Data = {
  "language": "elixir",
  "lessonId": "elixir-2",
  "lessonTitle": "Elixir II - パターンマッチと並行処理",
  "lessonDescription": "Elixirの強力な機能「パターンマッチング」と「プロセス」を学びます。関数型プログラミングの考え方を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "パターンマッチングの基本",
      "content": "Elixirでは`=`は代入ではなく**パターンマッチ**です。\\n\\n```elixir\\n{x, y} = {10, 20}\\nIO.puts x\\nIO.puts y\\n```\\n\\n=> 10\\n\\n=> 20\\n\\n左辺のパターンが右辺の値と一致すると、変数に値が束縛されます。"
    },
    {
      "title": "リストのパターンマッチ",
      "content": "`[head | tail]`でリストを先頭と残りに分解できます。\\n\\n```elixir\\n[head | tail] = [1, 2, 3]\\nIO.puts head\\nIO.inspect tail\\n```\\n\\n=> 1\\n\\n=> [2, 3]\\n\\n`|`演算子はリストの構造を分解するのに便利です。"
    },
    {
      "title": "パイプ演算子 |>",
      "content": "`|>`は前の式の結果を次の関数の第1引数に渡します。\\n\\n```elixir\\n1..5\\n|> Enum.sum()\\n|> IO.puts()\\n```\\n\\n=> 15\\n\\nデータの流れが左から右に読めて分かりやすくなります。"
    },
    {
      "title": "Enum.map と Enum.filter",
      "content": "`Enum.map`で変換、`Enum.filter`で絞り込みができます。\\n\\n```elixir\\n# 各要素を2乗\\nEnum.map([1, 2, 3], fn x -> x * x end)\\n```\\n\\n=> [1, 4, 9]\\n\\n```\\n# 偶数だけ抽出\\nEnum.filter([1, 2, 3, 4], fn x -> rem(x, 2) == 0 end)\\n```\\n\\n=> [2, 4]"
    },
    {
      "title": "case式でパターンマッチ",
      "content": "`case`式で値に応じた処理を分岐できます。\\n\\n```elixir\\ncase x do\\n  1 -> \"one\"\\n  2 -> \"two\"\\n  _ -> \"other\"\\nend\\n```\\n\\n`_`はワイルドカードで、どんな値にもマッチします。"
    },
    {
      "title": "プロセスとメッセージ",
      "content": "Elixirでは`spawn`で軽量プロセスを作り、`send`/`receive`でメッセージをやり取りします。\\n\\n```elixir\\nspawn(fn -> IO.puts \"こんにちは\" end)\\n\\nsend(self(), {:msg, 42})\\nreceive do\\n  {:msg, n} -> IO.puts n\\nend\\n```\\n\\n並行処理がシンプルに書けます。"
    }
  ],
  "exercises": [
    {
      "title": "パターンマッチングの基本",
      "description": "パターンマッチングの基本の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "パターンマッチとは？",
          "content": "# = は代入ではない\\n\\nElixirの `=` は **マッチ演算子** です。左辺と右辺が一致するかを確認し、変数を束縛します。"
        },
        {
          "title": "パターンマッチの使い方",
          "content": "# 構造で分解\\n\\nタプルやリストを分解して変数に代入できます。\\n\\n**コード例：**\\n```elixir\\n{a, b} = {1, 2}\\n# a = 1, b = 2\\n```"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "head | tail",
          "content": "# リストの分解\\n\\n`[head | tail]` パターンで、リストの先頭と残りに分解できます。"
        },
        {
          "title": "| の使い方",
          "content": "# 先頭と残り\\n\\n`|` の左が先頭要素、右が残りのリストです。\\n\\n**コード例：**\\n```elixir\\n[first | rest] = [1, 2, 3]\\n# first = 1, rest = [2, 3]\\n```"
        }
      ],
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
      "description": "|>について学びます",
      "tutorialSlides": [
        {
          "title": "パイプ演算子とは？",
          "content": "# データを流す\\n\\n**|>** は、左側の結果を右側の関数の第1引数に渡します。処理の流れが読みやすくなります。"
        },
        {
          "title": "|> の使い方",
          "content": "# 連鎖させる\\n\\n複数の関数を連鎖させて処理できます。\\n\\n**コード例：**\\n```elixir\\n\"hello\"\\n|> String.upcase()\\n|> IO.puts()\\n# HELLO\\n```"
        }
      ],
      "correctCode": "# 1から5の範囲を作成\\n1..5\\n# |>でパイプ\\n|> Enum.sum()\\n# |>でパイプ\\n|> IO.puts()",
      "holeyCode": "# 1から5の範囲を作成\\n___..___\\n# |>でパイプ\\n|> ___.___()\\n# |>でパイプ\\n|> ___.___()",
      "correctLines": [
          "# 1から5の範囲を作成",
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
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Enum.map とは？",
          "content": "# 各要素を変換\\n\\n**Enum.map** は、リストの各要素に関数を適用して新しいリストを作ります。"
        },
        {
          "title": "Enum.map の使い方",
          "content": "# 無名関数を渡す\\n\\n`fn x -> x * 2 end` のような無名関数を渡します。\\n\\n**コード例：**\\n```elixir\\nEnum.map([1, 2, 3], fn x -> x * 2 end)\\n# [2, 4, 6]\\n```"
        }
      ],
      "correctCode": "# 配列の各要素を2乗してresultに代入\\nresult = Enum.map([1, 2, 3], fn x -> x * x end)\\n# resultを入力\\nIO.inspect result",
      "holeyCode": "# 配列の各要素を2乗してresultに代入\\n___ = ___.___([___, ___, ___], fn ___ -> ___ * ___ end)\\n# resultを入力\\n___.___ ___",
      "correctLines": [
          "# 配列の各要素を2乗してresultに代入",
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
      "description": "条件に合う要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Enum.filter とは？",
          "content": "# 条件でフィルタ\\n\\n**Enum.filter** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "Enum.filter の使い方",
          "content": "# 真を返す要素を残す\\n\\n関数が真を返す要素だけが残ります。\\n\\n**コード例：**\\n```elixir\\nEnum.filter([1, 2, 3, 4, 5], fn x -> x > 3 end)\\n# [4, 5]\\n```"
        }
      ],
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
      "description": "caseについて学びます",
      "tutorialSlides": [
        {
          "title": "case とは？",
          "content": "# パターンで分岐\\n\\n**case** は、値をパターンとマッチさせて分岐する構文です。"
        },
        {
          "title": "case の使い方",
          "content": "# 複数のパターン\\n\\n`->` で各パターンの処理を書きます。\\n\\n**コード例：**\\n```elixir\\ncase x do\\n  1 -> \"one\"\\n  2 -> \"two\"\\n  _ -> \"other\"\\nend\\n```"
        }
      ],
      "correctCode": "# 2を入力\\nx = 2\\n# caseでパターンマッチ\\nresult = case x do\\n  1 -> \"one\"\\n  2 -> \"two\"\\n  _ -> \"other\"\\nend\\n# resultを入力\\nIO.puts result",
      "holeyCode": "# 2を入力\\n___ = ___\\n# caseでパターンマッチ\\n___ = case ___ do\\n  # \"\"\\n  ___ -> \"___\"\\n  # \"\"\\n  ___ -> \"___\"\\n  # \"\"\\n  ___ -> \"___\"\\n# ブロックを終了\\n___\\n# resultを入力\\n___.___ ___",
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
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "\\\"\\\"",
          null,
          "\\\"\\\""
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
          "others": ["one", "two", "other", "IO", "puts", "end", "d", ".puts", "lt"]
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
      "description": "処理をひとまとめにして名前をつける「関数定義」を学びます",
      "tutorialSlides": [
        {
          "title": "defmodule と def",
          "content": "# モジュールと関数\\n\\n**defmodule** でモジュールを定義し、**def** で公開関数を定義します。"
        },
        {
          "title": "関数の定義",
          "content": "# def 関数名 do ... end\\n\\nパターンマッチを使った複数の関数定義もできます。\\n\\n**コード例：**\\n```elixir\\ndefmodule Math do\\n  def double(x), do: x * 2\\nend\\n```"
        }
      ],
      "correctCode": "# defmoduleでCalcモジュールを定義\\ndefmodule Calc do\\n  # defでtriple関数を定義\\n  def triple(x), do: x * 3\\nend\\n# 4の3倍を計算して表示\\nIO.puts Calc.triple(4)",
      "holeyCode": "# defmoduleでCalcモジュールを定義\\ndefmodule ___ do\\n  # defでtriple関数を定義\\n  def ___(___), do: ___ * ___\\n# ブロックを終了\\n___\\n# 4の3倍を計算して表示\\n___.___ ___.___(___)",
      "correctLines": [
          "# defmoduleでCalcモジュールを定義",
          "defmodule Calc do",
          "  # defでtriple関数を定義",
          "  def triple(x), do: x * 3",
          "end",
          "# 4の3倍を計算して表示",
          "IO.puts Calc.triple(4)"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null
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
          "others": ["Calc", "3", "4", "IO", "puts", "end", "# 4の3倍を計算して表示"]
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
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
        {
          "title": "再帰とは？",
          "content": "# 自分自身を呼び出す\\n\\n**再帰** は、関数が自分自身を呼び出す手法です。ループの代わりに使います。"
        },
        {
          "title": "再帰の書き方",
          "content": "# 終了条件を忘れずに\\n\\n必ず終了条件を設定します。\\n\\n**コード例：**\\n```elixir\\ndef sum(0), do: 0\\ndef sum(n), do: n + sum(n - 1)\\n```"
        }
      ],
      "correctCode": "# defmoduleでMathモジュールを定義\\ndefmodule Math do\\n  def factorial(0), do: 1\\n  # factorialを再帰的に呼び出す\\n  def factorial(n), do: n * factorial(n - 1)\\nend\\n# 5の階乗を計算して表示\\nIO.puts Math.factorial(5)", "holeyCode": "# defmoduleでMathモジュールを定義\\ndefmodule ___ do\\n  # factorial関数を定義\\n  def ___(___), do: ___\\n  # factorialを再帰的に呼び出す\\n  def ___(___), do: ___ * ___(___ - ___)\\n# ブロックを終了\\n___\\n# 5の階乗を計算して表示\\n___.___ ___.___(___)",
      "correctLines": [
          "# defmoduleでMathモジュールを定義",
          "defmodule Math do",
          "  def factorial(0), do: 1",
          "  # factorialを再帰的に呼び出す",
          "  def factorial(n), do: n * factorial(n - 1)",
          "end",
          "# 5の階乗を計算して表示",
          "IO.puts Math.factorial(5)"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
          "others": ["Math", "0", "1", "5", "IO", "puts", "end", "ctorialを再帰的に呼び出す", "IO.puts Math.factorial(5)"]
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
      "description": "プロセスについて学びます",
      "tutorialSlides": [
        {
          "title": "プロセスとは？",
          "content": "# 軽量な並行処理\\n\\nElixirの **プロセス** は、非常に軽量で大量に作成できます。`spawn` で新しいプロセスを作ります。"
        },
        {
          "title": "spawn の使い方",
          "content": "# 関数を渡す\\n\\n`spawn` に関数を渡すと、新しいプロセスで実行されます。\\n\\n**コード例：**\\n```elixir\\nspawn(fn -> IO.puts \"hello\" end)\\n```"
        }
      ],
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
      "description": "メッセージを送ろうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "send と receive",
          "content": "# プロセス間通信\\n\\n**send** でメッセージを送り、**receive** で受け取ります。アクターモデルの基本です。"
        },
        {
          "title": "メッセージの送受信",
          "content": "# self() で自分のPID\\n\\n`self()` で自分のプロセスIDを取得できます。\\n\\n**コード例：**\\n```elixir\\nsend(self(), :hello)\\nreceive do\\n  :hello -> IO.puts \"got hello\"\\nend\\n```"
        }
      ],
      "correctCode": "# sendでメッセージを送る\\nsend(self(), {:msg, 42})\\n# receiveでメッセージを受け取る\\nreceive do\\n  {:msg, n} -> IO.puts n\\nend",
      "holeyCode": "# sendでメッセージを送る\\n___(___(), {:___, ___})\\n# receiveでメッセージを受け取る\\n___ ___\\n  # パターンマッチの分岐\\n  {:___, ___} -> ___.___ ___\\n# ブロックを終了\\n___",
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
          "",
          null,
          "",
          null,
          ""
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
