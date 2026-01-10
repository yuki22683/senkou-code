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
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "構造体はキーが決まった辞書です。defstructで定義します。\n\n```elixir\ndefmodule User do\n  defstruct name: \"\", age: 0\nend\n\nuser = %User{name: \"Alice\", age: 25}\nuser.name  # \"Alice\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Person do\n  # defstructで構造体を定義\n  defstruct name: \"\", email: \"\"\nend\n\nperson = %Person{name: \"Bob\", email: \"bob@example.com\"}",
      "holeyCode": "# defmoduleでモジュールを定義\n___ Person do\n  # defstructで構造体を定義\n  ___ name: \"\", email: \"\"\n# endでモジュールを閉じる\n___\n\n# %Person{...}で構造体を作成\nperson = %Person{name: \"___\", email: \"___\"}",
      "correctLines": [
        { "lineNumber": 2, "content": "  defstruct name: \"\", email: \"\"" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "構造体を定義するマクロです" }
      ],
      "candidates": {
        "keywords": ["defmodule", "defstruct", "end"],
        "strings": ["Bob", "bob@example.com"]
      },
      "testCases": [
        { "input": "person.name", "expected_output": "\"Bob\"" }
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
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "構造体は辞書と同様に更新できます。\n\n```elixir\nuser = %User{name: \"Alice\", age: 25}\nupdated = %{user | age: 26}\n# %User{name: \"Alice\", age: 26}\n\n# Map.putも使える\nupdated2 = Map.put(user, :age, 27)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "defmodule Product do\n  defstruct name: \"\", price: 0\nend\n\nproduct = %Product{name: \"Book\", price: 1000}\n# |で辞書を更新\nupdated = %{product | price: 1200}",
      "holeyCode": "# defmoduleでモジュールを定義\n___ Product do\n  # defstructで構造体を定義\n  ___ name: \"\", price: 0\n# endでモジュールを閉じる\n___\n\n# %Product{...}で構造体を作成\nproduct = %Product{name: \"___\", price: ___}\n# |で辞書を更新\nupdated = %{product ___ price: ___}",
      "correctLines": [
        { "lineNumber": 6, "content": "updated = %{product | price: 1200}" }
      ],
      "lineHints": [
        { "lineNumber": 6, "hint": "辞書更新の構文で使う記号です" }
      ],
      "candidates": {
        "keywords": ["defmodule", "defstruct", "end"],
        "strings": ["Book"],
        "numbers": ["1000", "1200"],
        "operators": ["|"]
      },
      "testCases": [
        { "input": "updated.price", "expected_output": "1200" }
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "reduceはリストを単一の値に畳み込みます。\n\n```elixir\nsum = Enum.reduce([1, 2, 3, 4], 0, fn x, acc -> x + acc end)\n# 10\n\nproduct = Enum.reduce([1, 2, 3, 4], 1, &(&1 * &2))\n# 24\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "numbers = [1, 2, 3, 4, 5]\n# reduceで畳み込み\nsum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)",
      "holeyCode": "# リストを定義\nnumbers = [___, ___, ___, ___, ___]\n# reduceで畳み込み\nsum = Enum.___(numbers, 0, fn x, acc -> x + acc end)",
      "correctLines": [
        { "lineNumber": 2, "content": "sum = Enum.reduce(numbers, 0, fn x, acc -> x + acc end)" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "リストを畳み込む関数です" }
      ],
      "candidates": {
        "numbers": ["1", "2", "3", "4", "5"],
        "functions": ["reduce"]
      },
      "testCases": [
        { "input": "sum", "expected_output": "15" }
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
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "group_byは要素をキーでグループ化します。\n\n```elixir\nwords = [\"apple\", \"ant\", \"banana\", \"berry\"]\nEnum.group_by(words, &String.first/1)\n# %{\"a\" => [\"apple\", \"ant\"], \"b\" => [\"banana\", \"berry\"]}\n\nnums = [1, 2, 3, 4, 5]\nEnum.group_by(nums, &rem(&1, 2))\n# %{0 => [2, 4], 1 => [1, 3, 5]}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "users = [{\"Alice\", 25}, {\"Bob\", 30}, {\"Carol\", 25}]\n# group_byでグループ化\ngrouped = Enum.group_by(users, fn {_name, age} -> age end)",
      "holeyCode": "# タプルのリストを定義\nusers = [{\"___\", ___}, {\"___\", ___}, {\"___\", ___}]\n# group_byでグループ化\ngrouped = Enum.___(users, fn {_name, age} -> age end)",
      "correctLines": [
        { "lineNumber": 2, "content": "grouped = Enum.group_by(users, fn {_name, age} -> age end)" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "要素をグループ化する関数です" }
      ],
      "candidates": {
        "strings": ["Alice", "Bob", "Carol"],
        "numbers": ["25", "30"],
        "functions": ["group_by"]
      },
      "testCases": [
        { "input": "Map.keys(grouped) |> Enum.sort()", "expected_output": "[25, 30]" }
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "for式はリスト内包表記を提供します。\n\n```elixir\nfor x <- [1, 2, 3], do: x * 2\n# [2, 4, 6]\n\n# フィルタリング\nfor x <- 1..10, rem(x, 2) == 0, do: x\n# [2, 4, 6, 8, 10]\n\n# 複数のジェネレータ\nfor x <- [1, 2], y <- [:a, :b], do: {x, y}\n# [{1, :a}, {1, :b}, {2, :a}, {2, :b}]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# forで内包表記\nsquares = for x <- 1..5, do: x * x",
      "holeyCode": "# forで内包表記\nsquares = ___ x <- ___...___, do: x * x",
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
        { "input": "squares", "expected_output": "[1, 4, 9, 16, 25]" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "with式は複数のパターンマッチを連鎖させ、すべて成功した場合のみdoブロックを実行します。\n\n```elixir\nwith {:ok, file} <- File.read(\"test.txt\"),\n     {:ok, json} <- Jason.decode(file) do\n  {:ok, json}\nelse\n  {:error, reason} -> {:error, reason}\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "def process(map) do\n  # withでパターンマッチを連鎖\n  with {:ok, name} <- Map.fetch(map, :name),\n       {:ok, age} <- Map.fetch(map, :age) do\n    {:ok, \"#{name} is #{age} years old\"}\n  else\n    :error -> {:error, \"Missing field\"}\n  end\nend",
      "holeyCode": "def process(map) do\n  # withでパターンマッチを連鎖\n  ___ {:ok, name} <- Map.fetch(map, :name),\n       {:ok, age} <- Map.fetch(map, :age) do\n    {:ok, \"#{name} is #{age} years old\"}\n  else\n    :error -> {:error, \"Missing field\"}\n  end\nend",
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
        { "input": "process(%{name: \"Alice\", age: 25})", "expected_output": "{:ok, \"Alice is 25 years old\"}" }
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
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "プロトコルはポリモーフィズムを実現します。\n\n```elixir\ndefprotocol Stringify do\n  def to_string(data)\nend\n\ndefimpl Stringify, for: Integer do\n  def to_string(num), do: Integer.to_string(num)\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# defprotocolでプロトコルを定義\ndefprotocol Describable do\n  def describe(data)\nend",
      "holeyCode": "# defprotocolでプロトコルを定義\n___ Describable do\n  def describe(data)\nend",
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
        { "input": "true", "expected_output": "true" }
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
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "defimplで特定の型にプロトコルを実装します。\n\n```elixir\ndefimpl Stringify, for: List do\n  def to_string(list) do\n    Enum.join(list, \", \")\n  end\nend\n\nStringify.to_string([1, 2, 3])  # \"1, 2, 3\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# defimplでプロトコルを実装\ndefimpl Describable, for: Map do\n  def describe(map) do\n    \"Map with #{map_size(map)} keys\"\n  end\nend",
      "holeyCode": "# defimplでプロトコルを実装\n___ Describable, for: Map do\n  def describe(map) do\n    \"Map with #{map_size(map)} keys\"\n  end\nend",
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
        { "input": "true", "expected_output": "true" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "Agentはシンプルな状態管理を提供します。\n\n```elixir\n{:ok, agent} = Agent.start_link(fn -> 0 end)\nAgent.get(agent, & &1)      # 0\nAgent.update(agent, &(&1 + 1))\nAgent.get(agent, & &1)      # 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# start_linkでAgentを開始\n{:ok, counter} = Agent.start_link(fn -> 0 end)\nAgent.update(counter, fn state -> state + 1 end)\nvalue = Agent.get(counter, fn state -> state end)",
      "holeyCode": "# start_linkでAgentを開始\n{:ok, counter} = Agent.___(fn -> 0 end)\nAgent.update(counter, fn state -> state + 1 end)\nvalue = Agent.get(counter, fn state -> state end)",
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
        { "input": "value", "expected_output": "1" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "Taskは非同期処理を簡単に実行できます。\n\n```elixir\ntask = Task.async(fn -> expensive_computation() end)\n# 他の処理を実行\nresult = Task.await(task)\n\n# 複数のTaskを並列実行\ntasks = Enum.map(1..5, fn i -> Task.async(fn -> i * 2 end) end)\nresults = Task.await_many(tasks)  # [2, 4, 6, 8, 10]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# asyncで非同期タスクを開始\ntask = Task.async(fn -> 1 + 2 end)\nresult = Task.await(task)",
      "holeyCode": "# asyncで非同期タスクを開始\ntask = Task.___(fn -> 1 + 2 end)\nresult = Task.await(task)",
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
        { "input": "result", "expected_output": "3" }
      ]
    }
  ]
}
