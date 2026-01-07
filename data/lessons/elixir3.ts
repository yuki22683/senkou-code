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
      "description": "defstructで構造体を定義しましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "構造体（Struct）",
          "content": "構造体はキーが決まったマップです。defstructで定義します。\n\n```elixir\ndefmodule User do\n  defstruct name: \"\", age: 0\nend\n\nuser = %User{name: \"Alice\", age: 25}\nuser.name  # \"Alice\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Person do\n  defstruct name: \"\", email: \"\"\nend\n\nperson = %Person{name: \"Bob\", email: \"bob@example.com\"}",
      "holeyCode": "defmodule Person do\n  ___ name: \"\", email: \"\"\nend\n\nperson = %Person{name: \"Bob\", email: \"bob@example.com\"}",
      "correctLines": [
        { "lineNumber": 2, "content": "  defstruct name: \"\", email: \"\"" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "構造体を定義するマクロです" }
      ],
      "candidates": {
        "2": ["defstruct", "struct", "defmap", "record"]
      },
      "testCases": [
        { "input": "person.name", "expected": "\"Bob\"" }
      ]
    },
    {
      "title": "構造体の更新",
      "description": "構造体をイミュータブルに更新しましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "構造体の更新",
          "content": "構造体はマップと同様に更新できます。\n\n```elixir\nuser = %User{name: \"Alice\", age: 25}\nupdated = %{user | age: 26}\n# %User{name: \"Alice\", age: 26}\n\n# Map.putも使える\nupdated2 = Map.put(user, :age, 27)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Product do\n  defstruct name: \"\", price: 0\nend\n\nproduct = %Product{name: \"Book\", price: 1000}\nupdated = %{product | price: 1200}",
      "holeyCode": "defmodule Product do\n  defstruct name: \"\", price: 0\nend\n\nproduct = %Product{name: \"Book\", price: 1000}\nupdated = %{product ___ price: 1200}",
      "correctLines": [
        { "lineNumber": 6, "content": "updated = %{product | price: 1200}" }
      ],
      "lineHints": [
        { "lineNumber": 6, "hint": "マップ更新の構文で使う記号です" }
      ],
      "candidates": {
        "6": ["|", ":", "=>", ","]
      },
      "testCases": [
        { "input": "updated.price", "expected": "1200" }
      ]
    },
    {
      "title": "Enum.reduce",
      "description": "リストを畳み込むreduce関数を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Enum.reduce",
          "content": "reduceはリストを単一の値に畳み込みます。\n\n```elixir\nsum = Enum.reduce([1, 2, 3, 4], 0, fn x, acc -> x + acc end)\n# 10\n\nproduct = Enum.reduce([1, 2, 3, 4], 1, &(&1 * &2))\n# 24\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "numbers = [1, 2, 3, 4, 5]\nsum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)",
      "holeyCode": "numbers = [1, 2, 3, 4, 5]\nsum = Enum.___(numbers, 0, fn x, acc -> x + acc end)",
      "correctLines": [
        { "lineNumber": 2, "content": "sum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "リストを畳み込む関数です" }
      ],
      "candidates": {
        "2": ["reduce", "fold", "aggregate", "sum"]
      },
      "testCases": [
        { "input": "sum", "expected": "15" }
      ]
    },
    {
      "title": "Enum.group_by",
      "description": "要素をグループ化するgroup_by関数を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Enum.group_by",
          "content": "group_byは要素をキーでグループ化します。\n\n```elixir\nwords = [\"apple\", \"ant\", \"banana\", \"berry\"]\nEnum.group_by(words, &String.first/1)\n# %{\"a\" => [\"apple\", \"ant\"], \"b\" => [\"banana\", \"berry\"]}\n\nnums = [1, 2, 3, 4, 5]\nEnum.group_by(nums, &rem(&1, 2))\n# %{0 => [2, 4], 1 => [1, 3, 5]}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "users = [{\"Alice\", 25}, {\"Bob\", 30}, {\"Carol\", 25}]\ngrouped = Enum.group_by(users, fn {_name, age} -> age end)",
      "holeyCode": "users = [{\"Alice\", 25}, {\"Bob\", 30}, {\"Carol\", 25}]\ngrouped = Enum.___(users, fn {_name, age} -> age end)",
      "correctLines": [
        { "lineNumber": 2, "content": "grouped = Enum.group_by(users, fn {_name, age} -> age end)" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "要素をグループ化する関数です" }
      ],
      "candidates": {
        "2": ["group_by", "partition", "chunk_by", "categorize"]
      },
      "testCases": [
        { "input": "Map.keys(grouped) |> Enum.sort()", "expected": "[25, 30]" }
      ]
    },
    {
      "title": "内包表記（for）",
      "description": "for式でリストを生成しましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "内包表記（for）",
          "content": "for式はリスト内包表記を提供します。\n\n```elixir\nfor x <- [1, 2, 3], do: x * 2\n# [2, 4, 6]\n\n# フィルタリング\nfor x <- 1..10, rem(x, 2) == 0, do: x\n# [2, 4, 6, 8, 10]\n\n# 複数のジェネレータ\nfor x <- [1, 2], y <- [:a, :b], do: {x, y}\n# [{1, :a}, {1, :b}, {2, :a}, {2, :b}]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "squares = for x <- 1..5, do: x * x",
      "holeyCode": "squares = ___ x <- 1..5, do: x * x",
      "correctLines": [
        { "lineNumber": 1, "content": "squares = for x <- 1..5, do: x * x" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "リスト内包表記を開始するキーワードです" }
      ],
      "candidates": {
        "1": ["for", "each", "map", "list"]
      },
      "testCases": [
        { "input": "squares", "expected": "[1, 4, 9, 16, 25]" }
      ]
    },
    {
      "title": "with式",
      "description": "with式で複数のパターンマッチを連鎖させましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "with式",
          "content": "with式は複数のパターンマッチを連鎖させ、すべて成功した場合のみdoブロックを実行します。\n\n```elixir\nwith {:ok, file} <- File.read(\"test.txt\"),\n     {:ok, json} <- Jason.decode(file) do\n  {:ok, json}\nelse\n  {:error, reason} -> {:error, reason}\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "def process(map) do\n  with {:ok, name} <- Map.fetch(map, :name),\n       {:ok, age} <- Map.fetch(map, :age) do\n    {:ok, \"#{name} is #{age} years old\"}\n  else\n    :error -> {:error, \"Missing field\"}\n  end\nend",
      "holeyCode": "def process(map) do\n  ___ {:ok, name} <- Map.fetch(map, :name),\n       {:ok, age} <- Map.fetch(map, :age) do\n    {:ok, \"#{name} is #{age} years old\"}\n  else\n    :error -> {:error, \"Missing field\"}\n  end\nend",
      "correctLines": [
        { "lineNumber": 2, "content": "  with {:ok, name} <- Map.fetch(map, :name)," }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "パターンマッチを連鎖させるキーワードです" }
      ],
      "candidates": {
        "2": ["with", "when", "match", "case"]
      },
      "testCases": [
        { "input": "process(%{name: \"Alice\", age: 25})", "expected": "{:ok, \"Alice is 25 years old\"}" }
      ]
    },
    {
      "title": "プロトコルの定義",
      "description": "defprotocolでプロトコルを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "プロトコルの定義",
          "content": "プロトコルはポリモーフィズムを実現します。\n\n```elixir\ndefprotocol Stringify do\n  def to_string(data)\nend\n\ndefimpl Stringify, for: Integer do\n  def to_string(num), do: Integer.to_string(num)\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defprotocol Describable do\n  def describe(data)\nend",
      "holeyCode": "___ Describable do\n  def describe(data)\nend",
      "correctLines": [
        { "lineNumber": 1, "content": "defprotocol Describable do" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "プロトコルを定義するキーワードです" }
      ],
      "candidates": {
        "1": ["defprotocol", "protocol", "definterface", "behaviour"]
      },
      "testCases": [
        { "input": "true", "expected": "true" }
      ]
    },
    {
      "title": "プロトコルの実装",
      "description": "defimplでプロトコルを実装しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "プロトコルの実装",
          "content": "defimplで特定の型にプロトコルを実装します。\n\n```elixir\ndefimpl Stringify, for: List do\n  def to_string(list) do\n    Enum.join(list, \", \")\n  end\nend\n\nStringify.to_string([1, 2, 3])  # \"1, 2, 3\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defimpl Describable, for: Map do\n  def describe(map) do\n    \"Map with #{map_size(map)} keys\"\n  end\nend",
      "holeyCode": "___ Describable, for: Map do\n  def describe(map) do\n    \"Map with #{map_size(map)} keys\"\n  end\nend",
      "correctLines": [
        { "lineNumber": 1, "content": "defimpl Describable, for: Map do" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "プロトコルを実装するキーワードです" }
      ],
      "candidates": {
        "1": ["defimpl", "impl", "implement", "defprotocol"]
      },
      "testCases": [
        { "input": "true", "expected": "true" }
      ]
    },
    {
      "title": "Agent",
      "description": "Agentで状態を管理しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Agent",
          "content": "Agentはシンプルな状態管理を提供します。\n\n```elixir\n{:ok, agent} = Agent.start_link(fn -> 0 end)\nAgent.get(agent, & &1)      # 0\nAgent.update(agent, &(&1 + 1))\nAgent.get(agent, & &1)      # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "{:ok, counter} = Agent.start_link(fn -> 0 end)\nAgent.update(counter, fn state -> state + 1 end)\nvalue = Agent.get(counter, fn state -> state end)",
      "holeyCode": "{:ok, counter} = Agent.___(fn -> 0 end)\nAgent.update(counter, fn state -> state + 1 end)\nvalue = Agent.get(counter, fn state -> state end)",
      "correctLines": [
        { "lineNumber": 1, "content": "{:ok, counter} = Agent.start_link(fn -> 0 end)" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "Agentを開始してプロセスにリンクする関数です" }
      ],
      "candidates": {
        "1": ["start_link", "start", "new", "create"]
      },
      "testCases": [
        { "input": "value", "expected": "1" }
      ]
    },
    {
      "title": "Task",
      "description": "Taskで非同期処理を実行しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "Task",
          "content": "Taskは非同期処理を簡単に実行できます。\n\n```elixir\ntask = Task.async(fn -> expensive_computation() end)\n# 他の処理を実行\nresult = Task.await(task)\n\n# 複数のTaskを並列実行\ntasks = Enum.map(1..5, fn i -> Task.async(fn -> i * 2 end) end)\nresults = Task.await_many(tasks)  # [2, 4, 6, 8, 10]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "task = Task.async(fn -> 1 + 2 end)\nresult = Task.await(task)",
      "holeyCode": "task = Task.___(fn -> 1 + 2 end)\nresult = Task.await(task)",
      "correctLines": [
        { "lineNumber": 1, "content": "task = Task.async(fn -> 1 + 2 end)" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "非同期タスクを開始する関数です" }
      ],
      "candidates": {
        "1": ["async", "start", "spawn", "run"]
      },
      "testCases": [
        { "input": "result", "expected": "3" }
      ]
    }
  ]
}
