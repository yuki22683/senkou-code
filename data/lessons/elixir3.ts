export const elixir3Data = {
  "language": "elixir",
  "lessonId": "elixir-3",
  "lessonTitle": "Elixir III - 構造体とプロトコル",
  "lessonDescription": "Elixirの構造体（Struct）、プロトコル、高度なEnum操作、内包表記、そしてAgentの基礎を学びます。より実践的なElixirプログラミングを習得しましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "構造体（Struct）",
      "correctCode": "# defmoduleでモジュールを定義\\ndefmodule Person do\\n  # defstructで構造体を定義\\n  defstruct name: \"\", email: \"\"\\n# endでモジュールを閉じる\\nend\\n\\n# nameに\"ボブ\"、emailに\"bob@example.com\"を指定して構造体を作成\\nperson = %Person{name: \"ボブ\", email: \"bob@example.com\"}",
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule Person ___\\n  # defstructで構造体を定義\\n  ___ name: \"\", email: \"___\"\\n# endでモジュールを閉じる\\n___\\n___\\n# nameに\"ボブ\"、emailに\"bob@example.com\"を指定して構造体を作成\\nperson = %Person{name: \"___\", email: \"bob@example.com\"}",
      "correctLines": [
          "# defmoduleでモジュールを定義",
          "defmodule Person do",
          "  # defstructで構造体を定義",
          "  defstruct name: \"\", email: \"\"",
          "# endでモジュールを閉じる",
          "end",
          "",
          "# nameに\"ボブ\"、emailに\"bob@example.com\"を指定して構造体を作成",
          "person = %Person{name: \"ボブ\", email: \"bob@example.com\"}"
        ],
      "lineHints": [
          null,
          "defmodule でモジュールを定義します。",
          null,
          "構造体を定義するマクロです。",
          null,
          "ブロックを終了する。",
          null,
          null,
          "構造体を作成してpersonに代入します。"
        ],
        "candidates": {
          "keywords": [
            "defmodule",
            "defstruct",
            "end"
          ],
          "strings": [
            "Bob",
            "bob@example.com"
          ],
          "others": ["do", "ボブ", "do", "end", ""]
        },
        "testCases": [
          {
            "input": "person.name",
            "expected_output": "\"ボブ\""
          }
        ]
      },
    {
      "title": "構造体の更新",
      "correctCode": "# defmoduleでモジュールを定義\\ndefmodule Product do\\n  # defstructで構造体を定義\\n  defstruct name: \"\", price: 0\\n# endでモジュールを閉じる\\nend\\n\\n# nameに\"Book\"、priceに1000を指定して構造体を作成\\nproduct = %Product{name: \"Book\", price: 1000}\\n# |で辞書を更新（priceを1200に）\\nupdated = %{product | price: 1200}",
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule Product ___\\n  # defstructで構造体を定義\\n  ___ name: \"\", price: 0\\n# endでモジュールを閉じる\\n___\\n___\\n# nameに\"Book\"、priceに1000を指定して構造体を作成\\nproduct = %Product{name: \"___\", price: 1000}\\n# |で辞書を更新（priceを1200に）\\nupdated = %{product | price: ___}",
      "correctLines": [
          "# defmoduleでモジュールを定義",
          "defmodule Product do",
          "  # defstructで構造体を定義",
          "  defstruct name: \"\", price: 0",
          "# endでモジュールを閉じる",
          "end",
          "",
          "# nameに\"Book\"、priceに1000を指定して構造体を作成",
          "product = %Product{name: \"Book\", price: 1000}",
          "# |で辞書を更新（priceを1200に）",
          "updated = %{product | price: 1200}"
        ],
      "lineHints": [
          null,
          "defmoduleでモジュールを定義します。",
          null,
          "defstructで構造体を定義します。",
          null,
          "endでモジュールを閉じます。",
          null,
          null,
          "構造体を作成してproductに代入します。",
          null,
          "|で辞書を更新します。"
        ],
        "candidates": {
          "keywords": [
            "defmodule",
            "defstruct",
            "end"
          ],
          "strings": [
            "Book"
          ],
          "numbers": [
            "1000",
            "1200"
          ],
          "operators": [
            "|"
          ],
          "others": ["do", "do", "end", ""]
        },
        "testCases": [
          {
            "input": "updated.price",
            "expected_output": "1200"
          }
        ]
      },
    {
      "title": "Enum.reduce",
      "correctCode": "# numbersに[1, 2, 3, 4, 5]を代入\\nnumbers = [1, 2, 3, 4, 5]\\n# Enum.reduce(numbers, 0, fn)でsumに畳み込み結果を代入\\nsum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)",
      "holeyCode": "# numbersに[1, 2, 3, 4, 5]を代入\\nnumbers = [___, 2, 3, 4, 5]\\n# Enum.reduce(numbers, 0, fn)でsumに畳み込み結果を代入\\nsum = Enum.reduce(numbers, ___, fn x, acc -> x + acc end)",
      "correctLines": [
          "# numbersに[1, 2, 3, 4, 5]を代入",
          "numbers = [1, 2, 3, 4, 5]",
          "# Enum.reduce(numbers, 0, fn)でsumに畳み込み結果を代入",
          "sum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "リストを畳み込む関数です。"
        ],
        "candidates": {
          "numbers": [
            "1",
            "2",
            "3",
            "4",
            "5"
          ],
          "functions": [
            "reduce"
          ],
          "others": ["0"]
        },
        "testCases": [
          {
            "input": "sum",
            "expected_output": "15"
          }
        ]
      },
    {
      "title": "Enum.group_by",
      "correctCode": "# アリス(25), ボブ(30), キャロル(25) のタプルのリストを定義\\nusers = [{\"アリス\", 25}, {\"ボブ\", 30}, {\"キャロル\", 25}]\\n# group_byでグループ化\\ngrouped = Enum.group_by(users, fn {_name, age} -> age end)",
      "holeyCode": "# アリス(25), ボブ(30), キャロル(25) のタプルのリストを定義\\n___ = [{\"___\", 25}, {\"ボブ\", 30}, {\"キャロル\", 25}]\\n# group_byでグループ化\\ngrouped = Enum.group_by(users, fn {_name, age} -> age ___)",
      "correctLines": [
          "# アリス(25), ボブ(30), キャロル(25) のタプルのリストを定義",
          "users = [{\"アリス\", 25}, {\"ボブ\", 30}, {\"キャロル\", 25}]",
          "# group_byでグループ化",
          "grouped = Enum.group_by(users, fn {_name, age} -> age end)"
        ],
      "lineHints": [
          null,
          "ユーザーのタプルリストを定義します。",
          null,
          "要素をグループ化する関数です。"
        ],
        "candidates": {
          "strings": [
            "アリス",
            "ボブ",
            "キャロル"
          ],
          "numbers": [
            "25",
            "30"
          ],
          "functions": [
            "group_by"
          ],
          "others": ["end", "users"]
        },
        "testCases": [
          {
            "input": "Map.keys(grouped) |> Enum.sort()",
            "expected_output": "[25, 30]"
          }
        ]
      },
    {
      "title": "内包表記（for）",
      "correctCode": "# forで内包表記\\nsquares = for x <- 1..5, do: x * x",
      "holeyCode": "# forで内包表記\\nsquares = for x <- ___..5, do: x * x",
      "correctLines": [
          "# forで内包表記",
          "squares = for x <- 1..5, do: x * x"
        ],
      "lineHints": [
          null,
          "リスト内包表記を開始するキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "for"
          ],
          "numbers": [
            "1",
            "5"
          ],
          "others": [
            "1..5, do: x * x"
          ]
        },
        "testCases": [
          {
            "input": "squares",
            "expected_output": "[1, 4, 9, 16, 25]"
          }
        ]
      },
    {
      "title": "with式",
      "correctCode": "# defで関数を定義\\ndef process(map) do\\n  # withでパターンマッチを連鎖\\n  with {:ok, name} <- Map.fetch(map, :name),\\n       {:ok, age} <- Map.fetch(map, :age) do\\n    {:ok, \"#{name} is #{age}歳です\"}\\n  # elseでエラー処理\\n  else\\n    :error -> {:error, \"Missing field\"}\\n  # endでブロックを閉じる\\n  end\\n# endで関数を閉じる\\nend",
      "holeyCode": "# defで関数を定義\\ndef process(map) ___\\n  # withでパターンマッチを連鎖\\n  with {:___, ___} <- Map.fetch(map, :name),\\n       {:___, age} <- Map.fetch(map, :age) ___\\n    {:___, \"___\"}\\n  # elseでエラー処理\\n  ___\\n    :error -> {:error, \"___\"}\\n  # endでブロックを閉じる\\n  ___\\n# endで関数を閉じる\\n___",
      "correctLines": [
          "# defで関数を定義",
          "def process(map) do",
          "  # withでパターンマッチを連鎖",
          "  with {:ok, name} <- Map.fetch(map, :name),",
          "       {:ok, age} <- Map.fetch(map, :age) do",
          "    {:ok, \"#{name} is #{age}歳です\"}",
          "  # elseでエラー処理",
          "  else",
          "    :error -> {:error, \"Missing field\"}",
          "  # endでブロックを閉じる",
          "  end",
          "# endで関数を閉じる",
          "end"
        ],
      "lineHints": [
          null,
          "関数（process）を新しく定義します。",
          null,
          "パターンマッチを連鎖させるキーワードです。",
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          "ここを正しく入力してください。",
          null,
          "条件が偽の場合の処理を定義する。",
          "ここを正しく入力してください。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "def",
            "with",
            "else",
            "end"
          ],
          "others": ["do", "name", "Missing field", "#{name} is #{age}歳です", "ok"]
        },
        "testCases": [
          {
            "input": "process(%{name: \"Alice\", age: 25})",
            "expected_output": "{:ok, \"Alice is 25歳です\"}"
          }
        ]
      },
    {
      "title": "プロトコルの定義",
      "correctCode": "# defprotocolでプロトコルを定義\\ndefprotocol Describable do\\n  # defで関数を宣言\\n  def describe(data)\\n# endでプロトコルを閉じる\\nend",
      "holeyCode": "# defprotocolでプロトコルを定義\\ndefprotocol Describable ___\\n  # defで関数を宣言\\n  def describe(___)\\n# endでプロトコルを閉じる\\n___",
      "correctLines": [
          "# defprotocolでプロトコルを定義",
          "defprotocol Describable do",
          "  # defで関数を宣言",
          "  def describe(data)",
          "# endでプロトコルを閉じる",
          "end"
        ],
      "lineHints": [
          null,
          "プロトコルを定義するキーワードです。",
          null,
          "関数（describe）を新しく定義します。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "defprotocol",
            "def",
            "end"
          ],
          "others": ["do", "data", "do"]
        },
        "testCases": [
          {
            "input": "true",
            "expected_output": "true"
          }
        ]
      },
    {
      "title": "プロトコルの実装",
      "correctCode": "# defimplでプロトコルを実装\\ndefimpl Describable, for: Map do\\n  # defで関数を定義\\n  def describe(map) do\\n    \"Map with #{map_size(map)} keys\"\\n  # endで関数を閉じる\\n  end\\n# endでブロックを閉じる\\nend",
      "holeyCode": "# defimplでプロトコルを実装\\ndefimpl Describable, for: Map ___\\n  # defで関数を定義\\n  def describe(map) ___\\n    \"___\"\\n  # endで関数を閉じる\\n  ___\\n# endでブロックを閉じる\\n___",
      "correctLines": [
          "# defimplでプロトコルを実装",
          "defimpl Describable, for: Map do",
          "  # defで関数を定義",
          "  def describe(map) do",
          "    \"Map with #{map_size(map)} keys\"",
          "  # endで関数を閉じる",
          "  end",
          "# endでブロックを閉じる",
          "end"
        ],
      "lineHints": [
          null,
          "プロトコルを実装するキーワードです。",
          null,
          "関数（describe）を新しく定義します。",
          "ここを正しく入力してください。",
          null,
          "ブロックを終了する。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "keywords": [
            "defimpl",
            "def",
            "end"
          ],
          "others": ["do", "Map with #{map_size(map)} keys", "Map with #{map_size(map)} keys", "do", "end"]
        },
        "testCases": [
          {
            "input": "true",
            "expected_output": "true"
          }
        ]
      },
    {
      "title": "Agent",
      "correctCode": "# start_linkでAgentを開始\\n{:ok, counter} = Agent.start_link(fn -> 0 end)\\n# updateでAgentの状態を更新\\nAgent.update(counter, fn state -> state + 1 end)\\n# getでAgentの状態を取得\\nvalue = Agent.get(counter, fn state -> state end)",
      "holeyCode": "# start_linkでAgentを開始\\n{:___, counter} = Agent.start_link(fn -> ___ end)\\n# updateでAgentの状態を更新\\nAgent.update(counter, fn state -> state + ___ end)\\n# getでAgentの状態を取得\\nvalue = Agent.get(counter, fn state -> state ___)",
      "correctLines": [
          "# start_linkでAgentを開始",
          "{:ok, counter} = Agent.start_link(fn -> 0 end)",
          "# updateでAgentの状態を更新",
          "Agent.update(counter, fn state -> state + 1 end)",
          "# getでAgentの状態を取得",
          "value = Agent.get(counter, fn state -> state end)"
        ],
      "lineHints": [
          null,
          "Agentを開始してプロセスにリンクする関数です。",
          null,
          "Agentの状態を更新する関数です。",
          null,
          "Agentの状態を取得する関数です。"
        ],
        "candidates": {
          "functions": [
            "start_link",
            "update",
            "get"
          ],
          "others": ["0", "1", "end", "ok"]
        },
        "testCases": [
          {
            "input": "value",
            "expected_output": "1"
          }
        ]
      },
    {
      "title": "Task",
      "correctCode": "# asyncで非同期タスクを開始\\ntask = Task.async(fn -> 1 + 2 end)\\n# awaitでタスクの結果を待機\\nresult = Task.await(task)",
      "holeyCode": "# asyncで非同期タスクを開始\\ntask = Task.async(fn -> ___ + 2 end)\\n# awaitでタスクの結果を待機\\nresult = Task.await(___)",
      "correctLines": [
          "# asyncで非同期タスクを開始",
          "task = Task.async(fn -> 1 + 2 end)",
          "# awaitでタスクの結果を待機",
          "result = Task.await(task)"
        ],
      "lineHints": [
          null,
          "非同期タスクを開始する関数です。",
          null,
          "タスクの結果を待機する関数です。"
        ],
        "candidates": {
          "functions": [
            "async",
            "await"
          ],
          "others": ["1", "task"]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "3"
          }
        ]
      }
  ]
}
