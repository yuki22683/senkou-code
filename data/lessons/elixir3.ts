export const elixir3Data = {
  "language": "elixir",
  "lessonId": "elixir-3",
  "lessonTitle": "Elixir III - 構造体とプロトコル",
  "lessonDescription": "Elixirの構造体（Struct）、プロトコル、高度なEnum操作、内包表記、そしてAgentの基礎を学びます。より実践的なElixirプログラミングを習得しましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "構造体（Struct）",
      "content": "`defstruct`でマップに似た構造体を定義できます。\\n\\n```elixir\\ndefmodule Person do\\n  defstruct name: \"\", age: 0\\nend\\n\\nperson = %Person{name: \"太郎\", age: 25}\\nIO.puts person.name  # => 太郎\\n```\\n\\n構造体はコンパイル時に型チェックされます。"
    },
    {
      "title": "構造体の更新",
      "content": "`%{struct | field: value}`で構造体の一部を更新できます。\\n\\n```elixir\\nperson = %Person{name: \"太郎\", age: 25}\\nupdated = %{person | age: 26}\\nIO.puts updated.age  # => 26\\n```\\n\\n元の構造体は変更されず、新しい構造体が作られます（イミュータブル）。"
    },
    {
      "title": "Enum.reduce で畳み込み",
      "content": "`Enum.reduce`でリストを1つの値に集約できます。\\n\\n```elixir\\nnumbers = [1, 2, 3, 4, 5]\\nsum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)\\nIO.puts sum  # => 15\\n```\\n\\n第2引数が初期値、`acc`はアキュムレータ（累積値）です。"
    },
    {
      "title": "内包表記（for）",
      "content": "`for`で簡潔にリストを生成できます。\\n\\n```elixir\\nsquares = for x <- 1..5, do: x * x\\n# => [1, 4, 9, 16, 25]\\n\\n# フィルタ条件も追加可能\\nevens = for x <- 1..10, rem(x, 2) == 0, do: x\\n# => [2, 4, 6, 8, 10]\\n```"
    },
    {
      "title": "プロトコル",
      "content": "`defprotocol`でインターフェースを定義し、`defimpl`で型ごとに実装します。\\n\\n```elixir\\ndefprotocol Describable do\\n  def describe(data)\\nend\\n\\ndefimpl Describable, for: Map do\\n  def describe(map), do: \"Map with #{map_size(map)} keys\"\\nend\\n```\\n\\n多態性（ポリモーフィズム）を実現できます。"
    },
    {
      "title": "Agent と Task",
      "content": "`Agent`は状態を保持し、`Task`は非同期処理を行います。\\n\\n```elixir\\n# Agentで状態管理\\n{:ok, counter} = Agent.start_link(fn -> 0 end)\\nAgent.update(counter, fn n -> n + 1 end)\\nAgent.get(counter, fn n -> n end)  # => 1\\n\\n# Taskで非同期処理\\ntask = Task.async(fn -> 1 + 2 end)\\nTask.await(task)  # => 3\\n```"
    }
  ],
  "exercises": [
    {
      "title": "構造体（Struct）",
      "correctCode": "# defmoduleでモジュールを定義\\ndefmodule Person do\\n  # defstructで構造体を定義\\n  defstruct name: \"\", email: \"\"\\n# endでモジュールを閉じる\\nend\\n\\n# nameに\"ボブ\"、emailに\"bob@example.com\"を指定して構造体を作成\\nperson = %Person{name: \"ボブ\", email: \"bob@example.com\"}",
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule ___ ___\\n  # defstructで構造体を定義\\n  defstruct ___: \"___\", ___: \"___\"\\n# endでモジュールを閉じる\\n___\\n___\\n# nameに\"ボブ\"、emailに\"bob@example.com\"を指定して構造体を作成\\n___ = %____{___: \"___\", ___: \"___\"}",
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
          "defmodule でモジュールを定義し、doでブロックを開始します。",
          null,
          "構造体のフィールド名とデフォルト値を定義します。",
          null,
          "ブロックを終了します。",
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
            "ボブ",
            "bob@example.com"
          ],
          "others": ["do", "Person", "name", "email", "", "person", "Person{name: \"ボブ\", email: \"bob@example.com\"}"]
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
      "holeyCode": "# defmoduleでモジュールを定義\\ndefmodule ___ ___\\n  # defstructで構造体を定義\\n  defstruct ___: \"___\", ___: ___\\n# endでモジュールを閉じる\\n___\\n___\\n# nameに\"Book\"、priceに1000を指定して構造体を作成\\n___ = %____{___: \"___\", ___: ___}\\n# |で辞書を更新（priceを1200に）\\n___ = %{___ | ___: ___}",
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
          "defmoduleでモジュールを定義し、doでブロックを開始します。",
          null,
          "構造体のフィールド名とデフォルト値を定義します。",
          null,
          "ブロックを終了します。",
          null,
          null,
          "構造体を作成してproductに代入します。",
          null,
          "|で構造体の一部のフィールドを更新します。"
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
            "0",
            "1000",
            "1200"
          ],
          "operators": [
            "|"
          ],
          "others": ["do", "Product", "name", "price", "", "product", "updated", "Product{name: \"Book\", price: 1000}"]
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
      "holeyCode": "# numbersに[1, 2, 3, 4, 5]を代入\\n___ = [___, ___, ___, ___, ___]\\n# Enum.reduce(numbers, 0, fn)でsumに畳み込み結果を代入\\n___ = ___.___(_____, ___, fn ___, ___ -> ___ + ___ ___)",
      "correctLines": [
          "# numbersに[1, 2, 3, 4, 5]を代入",
          "numbers = [1, 2, 3, 4, 5]",
          "# Enum.reduce(numbers, 0, fn)でsumに畳み込み結果を代入",
          "sum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)"
        ],
      "lineHints": [
          null,
          "変数numbersにリストを代入します。",
          null,
          "Enum.reduceで初期値0から畳み込みを行います。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "end"
          ],
          "numbers": [
            "1",
            "2",
            "3",
            "4",
            "5",
            "0"
          ],
          "functions": [
            "reduce"
          ],
          "others": ["numbers", "sum", "Enum", "x", "acc", "numbers, 0, fn x, acc -> x + acc end)"]
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
      "holeyCode": "# アリス(25), ボブ(30), キャロル(25) のタプルのリストを定義\\n___ = [{\"___\", ___}, {\"___\", ___}, {\"___\", ___}]\\n# group_byでグループ化\\n___ = ___.___(_____, fn {___, ___} -> ___ ___)",
      "correctLines": [
          "# アリス(25), ボブ(30), キャロル(25) のタプルのリストを定義",
          "users = [{\"アリス\", 25}, {\"ボブ\", 30}, {\"キャロル\", 25}]",
          "# group_byでグループ化",
          "grouped = Enum.group_by(users, fn {_name, age} -> age end)"
        ],
      "lineHints": [
          null,
          "ユーザーのタプルリストをusersに代入します。",
          null,
          "Enum.group_byで年齢をキーにしてグループ化します。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "end"
          ],
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
          "others": ["users", "grouped", "Enum", "_name", "age", "users, fn {", "ge} -> age end)"]
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
      "holeyCode": "# forで内包表記\\n___ = for ___ <- ___...___, do: ___ * ___",
      "correctLines": [
          "# forで内包表記",
          "squares = for x <- 1..5, do: x * x"
        ],
      "lineHints": [
          null,
          "forで1から5までの各要素を2乗したリストを作成します。"
        ],
        "candidates": {
          "keywords": [
            "for",
            "do"
          ],
          "numbers": [
            "1",
            "5"
          ],
          "others": [
            "squares",
            "x"
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
      "holeyCode": "# defで関数を定義\\ndef ___(___)___\\n  # withでパターンマッチを連鎖\\n  with {___, ___} <- ___.___(___, ___),\\n       {___, ___} <- ___.___(___, ___) ___\\n    {___, \"___\"}\\n  # elseでエラー処理\\n  ___\\n    ___ -> {___, \"___\"}\\n  # endでブロックを閉じる\\n  ___\\n# endで関数を閉じる\\n___",
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
          "defで関数processを定義し、doでブロックを開始します。",
          null,
          "withで:okパターンにマッチさせてnameを取得します。",
          "続いて:okパターンにマッチさせてageを取得します。",
          "成功時に:okと文字列を含むタプルを返します。",
          null,
          "elseでマッチしなかった場合の処理を定義します。",
          ":errorにマッチした場合にエラータプルを返します。",
          null,
          "with式のブロックを終了します。",
          null,
          "関数定義のブロックを終了します。"
        ],
        "candidates": {
          "keywords": [
            "def",
            "with",
            "else",
            "end",
            "do"
          ],
          "others": ["process", "map", "ok", "name", "Map", "fetch", ":name", ":age", "age", "#{name} is #{age}歳です", ":error", "error", "Missing field", ":ok"]
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
      "holeyCode": "# defprotocolでプロトコルを定義\\ndefprotocol ___ ___\\n  # defで関数を宣言\\n  def ___(_____)\\n# endでプロトコルを閉じる\\n___",
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
          "defprotocolでプロトコルDescribableを定義し、doでブロックを開始します。",
          null,
          "プロトコルの関数describeを引数dataで宣言します。",
          null,
          "プロトコル定義のブロックを終了します。"
        ],
        "candidates": {
          "keywords": [
            "defprotocol",
            "def",
            "end",
            "do"
          ],
          "others": ["Describable", "describe", "data", "data)"]
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
      "holeyCode": "# defimplでプロトコルを実装\\ndefimpl ___, for: ___ ___\\n  # defで関数を定義\\n  def ___(___) ___\\n    \"___\"\\n  # endで関数を閉じる\\n  ___\\n# endでブロックを閉じる\\n___",
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
          "defimplでDescribableをMap型に対して実装します。",
          null,
          "defで関数describeを定義し、doでブロックを開始します。",
          "文字列を返します。#{...}で式を埋め込みます。",
          null,
          "関数定義のブロックを終了します。",
          null,
          "defimplのブロックを終了します。"
        ],
        "candidates": {
          "keywords": [
            "defimpl",
            "def",
            "end",
            "do",
            "for"
          ],
          "others": ["Describable", "Map", "describe", "map", "Map with #{map_size(map)} keys"]
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
      "holeyCode": "# start_linkでAgentを開始\\n{___, ___} = ___._____(fn -> ___ _____)\\n# updateでAgentの状態を更新\\n___.___(_____, fn ___ -> ___ + ___ _____)\\n# getでAgentの状態を取得\\n___ = ___.___(_____, fn ___ -> ___ ___)",
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
          "Agent.start_linkで初期値0のAgentを開始し、:okとcounterを受け取ります。",
          null,
          "Agent.updateでstateに1を加算して状態を更新します。",
          null,
          "Agent.getでAgentの現在の状態を取得します。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "end"
          ],
          "functions": [
            "start_link",
            "update",
            "get"
          ],
          "others": [":ok", "counter", "Agent", "0", "state", "1", "value", "start", "->", "0 end)", "counter, fn state -> state + 1 end)", "counter, fn state -> state end)"]
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
      "holeyCode": "# asyncで非同期タスクを開始\\n___ = ___.___(fn -> ___ + ___ _____)\\n# awaitでタスクの結果を待機\\n___ = ___.___(_____)",
      "correctLines": [
          "# asyncで非同期タスクを開始",
          "task = Task.async(fn -> 1 + 2 end)",
          "# awaitでタスクの結果を待機",
          "result = Task.await(task)"
        ],
      "lineHints": [
          null,
          "Task.asyncで1+2を計算する非同期タスクを開始します。",
          null,
          "Task.awaitでタスクの完了を待ち、結果を取得します。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "end"
          ],
          "functions": [
            "async",
            "await"
          ],
          "numbers": [
            "1",
            "2"
          ],
          "others": ["task", "Task", "result", "end)", "task)"]
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
