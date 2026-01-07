export const ruby3Data = {
  "language": "ruby",
  "lessonId": "ruby-3",
  "lessonTitle": "Ruby III - メタプログラミングと関数型スタイル",
  "lessonDescription": "Rubyの高度な機能を学びます。ブロック、Proc、ラムダ、メタプログラミングなどRubyの真髄を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "yieldとブロック",
      "description": "yieldを使ってブロックを呼び出す方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "yieldとは",
          "content": "yieldはメソッドに渡されたブロックを実行するキーワードです。\n\n```ruby\ndef greet\n  yield\nend\n\ngreet { puts 'こんにちは' }\n# => こんにちは\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "def twice\n  yield\n  yield\nend",
      "holeyCode": "def twice\n  ___\n  ___\nend",
      "correctLines": [
        { "lineNumber": 2, "content": "  yield" },
        { "lineNumber": 3, "content": "  yield" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "ブロックを呼び出すキーワード" },
        { "lineNumber": 3, "hint": "もう一度呼び出す" }
      ],
      "candidates": {
        "2": ["yield", "call", "block", "return"],
        "3": ["yield", "call", "block", "return"]
      },
      "testCases": [
        { "input": "result = []; twice { result << 1 }; result", "expected": "[1, 1]" }
      ]
    },
    {
      "title": "Procオブジェクト",
      "description": "ブロックをオブジェクト化したProcを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "Procとは",
          "content": "Procはブロックをオブジェクト化したものです。変数に代入できます。\n\n```ruby\nmy_proc = Proc.new { puts 'Hello' }\nmy_proc.call  # => Hello\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "doubler = Proc.new { |x| x * 2 }",
      "holeyCode": "doubler = ___.new { |x| x ___ 2 }",
      "correctLines": [
        { "lineNumber": 1, "content": "doubler = Proc.new { |x| x * 2 }" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "ブロックをオブジェクト化するクラスと演算子" }
      ],
      "candidates": {
        "1": ["Proc", "Block", "Lambda", "Function"]
      },
      "testCases": [
        { "input": "doubler.call(5)", "expected": "10" }
      ]
    },
    {
      "title": "ラムダ",
      "description": "Procとは異なる振る舞いを持つラムダを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "ラムダとは",
          "content": "ラムダはProcの一種ですが、引数のチェックが厳格です。\n\n```ruby\nmy_lambda = ->(x) { x * 2 }\nmy_lambda.call(5)  # => 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "cube = ->(x) { x ** 3 }",
      "holeyCode": "cube = ___(x) { x ___ 3 }",
      "correctLines": [
        { "lineNumber": 1, "content": "cube = ->(x) { x ** 3 }" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "ラムダのアロー記法と累乗演算子" }
      ],
      "candidates": {
        "1": ["->", "=>", "lambda", "proc"]
      },
      "testCases": [
        { "input": "cube.call(3)", "expected": "27" }
      ]
    },
    {
      "title": "シンボルとProc変換",
      "description": "&演算子を使ったシンボルのProc変換を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "&:記法",
          "content": "&:を使うと、シンボルをProcに変換してブロックとして渡せます。\n\n```ruby\n[1, 2, 3].map(&:to_s)\n# => ['1', '2', '3']\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "result = ['ruby', 'python', 'go'].map(&:upcase)",
      "holeyCode": "result = ['ruby', 'python', 'go'].___(&:___)",
      "correctLines": [
        { "lineNumber": 1, "content": "result = ['ruby', 'python', 'go'].map(&:upcase)" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "変換メソッドと大文字化メソッド" }
      ],
      "candidates": {
        "1": ["map", "each", "select", "filter"]
      },
      "testCases": [
        { "input": "result", "expected": "[\"RUBY\", \"PYTHON\", \"GO\"]" }
      ]
    },
    {
      "title": "reduceメソッド",
      "description": "配列を単一の値に畳み込むreduceを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "reduceとは",
          "content": "reduceは配列を単一の値に畳み込むメソッドです。\n\n```ruby\n[1, 2, 3].reduce(0) { |acc, n| acc + n }\n# => 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "sum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
      "holeyCode": "sum = [1, 2, 3, 4, 5].___(0) { |acc, n| acc ___ n }",
      "correctLines": [
        { "lineNumber": 1, "content": "sum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "畳み込みメソッドと加算演算子" }
      ],
      "candidates": {
        "1": ["reduce", "fold", "inject", "sum"]
      },
      "testCases": [
        { "input": "sum", "expected": "15" }
      ]
    },
    {
      "title": "selectとreject",
      "description": "条件に基づいて要素をフィルタリングする方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "selectメソッド",
          "content": "selectは条件に一致する要素だけを抽出します。\n\n```ruby\n[1, 2, 3, 4, 5].select { |n| n > 3 }\n# => [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "evens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }",
      "holeyCode": "evens = [1, 2, 3, 4, 5, 6].___ { |n| n.___? }",
      "correctLines": [
        { "lineNumber": 1, "content": "evens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "フィルタリングメソッドと偶数判定メソッド" }
      ],
      "candidates": {
        "1": ["select", "filter", "find_all", "reject"]
      },
      "testCases": [
        { "input": "evens", "expected": "[2, 4, 6]" }
      ]
    },
    {
      "title": "スプラット演算子",
      "description": "*演算子を使った可変長引数を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "スプラット演算子とは",
          "content": "スプラット演算子(*)は可変長引数を受け取るために使います。\n\n```ruby\ndef greet(*names)\n  names.each { |name| puts name }\nend\ngreet('Alice', 'Bob')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "def sum_all(*numbers)\n  numbers.reduce(0) { |acc, n| acc + n }\nend",
      "holeyCode": "def sum_all(___numbers)\n  numbers.___(0) { |acc, n| acc + n }\nend",
      "correctLines": [
        { "lineNumber": 1, "content": "def sum_all(*numbers)" },
        { "lineNumber": 2, "content": "  numbers.reduce(0) { |acc, n| acc + n }" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "可変長引数を受け取る演算子" },
        { "lineNumber": 2, "hint": "畳み込みメソッド" }
      ],
      "candidates": {
        "1": ["*", "**", "&", "..."],
        "2": ["reduce", "sum", "fold", "inject"]
      },
      "testCases": [
        { "input": "sum_all(1, 2, 3)", "expected": "6" }
      ]
    },
    {
      "title": "method_missing",
      "description": "メタプログラミングの基本、method_missingを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "method_missingとは",
          "content": "method_missingは存在しないメソッドが呼ばれた時に実行されます。\n\n```ruby\nclass MyClass\n  def method_missing(name, *args)\n    puts \"#{name}が呼ばれました\"\n  end\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class FlexibleClass\n  def method_missing(name, *args)\n    \"Unknown method: #{name}\"\n  end\nend",
      "holeyCode": "class FlexibleClass\n  def ___(name, *args)\n    \"Unknown method: #{___}\"\n  end\nend",
      "correctLines": [
        { "lineNumber": 2, "content": "  def method_missing(name, *args)" },
        { "lineNumber": 3, "content": "    \"Unknown method: #{name}\"" }
      ],
      "lineHints": [
        { "lineNumber": 2, "hint": "存在しないメソッドを捕捉する特殊メソッド" },
        { "lineNumber": 3, "hint": "メソッド名を表す引数" }
      ],
      "candidates": {
        "2": ["method_missing", "missing_method", "no_method", "undefined"],
        "3": ["name", "method", "args", "self"]
      },
      "testCases": [
        { "input": "FlexibleClass.new.hello", "expected": "\"Unknown method: hello\"" }
      ]
    },
    {
      "title": "Struct",
      "description": "簡易的なクラスを作成するStructを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Structとは",
          "content": "Structは属性だけを持つ簡易的なクラスを作成できます。\n\n```ruby\nPoint = Struct.new(:x, :y)\np = Point.new(10, 20)\nputs p.x  # => 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "Person = Struct.new(:name, :age)",
      "holeyCode": "Person = ___.new(:___, :___)",
      "correctLines": [
        { "lineNumber": 1, "content": "Person = Struct.new(:name, :age)" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "簡易クラスを作成するクラスと属性名" }
      ],
      "candidates": {
        "1": ["Struct", "Class", "Object", "Data"]
      },
      "testCases": [
        { "input": "Person.new('Alice', 30).name", "expected": "\"Alice\"" }
      ]
    },
    {
      "title": "tapメソッド",
      "description": "メソッドチェーンのデバッグに便利なtapを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "tapとは",
          "content": "tapはブロックを実行した後、レシーバ自身を返すメソッドです。\n\n```ruby\n[1, 2].tap { |arr| arr << 3 }\n# => [1, 2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "result = [1, 2, 3].tap { |arr| arr.push(4) }",
      "holeyCode": "result = [1, 2, 3].___ { |arr| arr.___(4) }",
      "correctLines": [
        { "lineNumber": 1, "content": "result = [1, 2, 3].tap { |arr| arr.push(4) }" }
      ],
      "lineHints": [
        { "lineNumber": 1, "hint": "自身を返すメソッドと要素追加メソッド" }
      ],
      "candidates": {
        "1": ["tap", "then", "yield_self", "itself"]
      },
      "testCases": [
        { "input": "result", "expected": "[1, 2, 3, 4]" }
      ]
    }
  ]
};
