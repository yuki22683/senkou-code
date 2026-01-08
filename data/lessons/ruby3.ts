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
          "image": "/illustrations/3d/robot.png",
          "content": "yieldはメソッドに渡されたブロックを実行するキーワードです。\n\n```ruby\ndef greet\n  yield\nend\n\ngreet { puts 'こんにちは' }\n# => こんにちは\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "def twice\n  # yieldでブロックを実行\n  yield\n  # yieldでブロックを実行\n  yield\nend",
      "holeyCode": "def twice\n  # yieldでブロックを実行\n  ___\n  # yieldでブロックを実行\n  ___\nend",
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
        { "input": "result = []; twice { result << 1 }; result", "expected_output": "[1, 1]" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "Procはブロックをオブジェクト化したものです。変数に代入できます。\n\n```ruby\nmy_proc = Proc.new { puts 'Hello' }\nmy_proc.call  # => Hello\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Procでブロックをオブジェクト化、*で乗算\ndoubler = Proc.new { |x| x * 2 }",
      "holeyCode": "# Procでブロックをオブジェクト化、*で乗算\ndoubler = ___.new { |x| x ___ 2 }",
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
        { "input": "doubler.call(5)", "expected_output": "10" }
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
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "ラムダはProcの一種ですが、引数のチェックが厳格です。\n\n```ruby\nmy_lambda = ->(x) { x * 2 }\nmy_lambda.call(5)  # => 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ->でラムダを定義、**で累乗\ncube = ->(x) { x ** 3 }",
      "holeyCode": "# ->でラムダを定義、**で累乗\ncube = ___(x) { x ___ 3 }",
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
        { "input": "cube.call(3)", "expected_output": "27" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "&:を使うと、シンボルをProcに変換してブロックとして渡せます。\n\n```ruby\n[1, 2, 3].map(&:to_s)\n# => ['1', '2', '3']\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# mapで変換、upcaseで大文字化\nresult = ['ruby', 'python', 'go'].map(&:upcase)",
      "holeyCode": "# mapで変換、upcaseで大文字化\nresult = ['ruby', 'python', 'go'].___(&:___)",
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
        { "input": "result", "expected_output": "[\"RUBY\", \"PYTHON\", \"GO\"]" }
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "reduceは配列を単一の値に畳み込むメソッドです。\n\n```ruby\n[1, 2, 3].reduce(0) { |acc, n| acc + n }\n# => 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# reduceで畳み込み、+で加算\nsum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
      "holeyCode": "# reduceで畳み込み、+で加算\nsum = [1, 2, 3, 4, 5].___(0) { |acc, n| acc ___ n }",
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
        { "input": "sum", "expected_output": "15" }
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
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "selectは条件に一致する要素だけを抽出します。\n\n```ruby\n[1, 2, 3, 4, 5].select { |n| n > 3 }\n# => [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# selectでフィルタ、evenで偶数判定\nevens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }",
      "holeyCode": "# selectでフィルタ、evenで偶数判定\nevens = [1, 2, 3, 4, 5, 6].___ { |n| n.___? }",
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
        { "input": "evens", "expected_output": "[2, 4, 6]" }
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
          "image": "/illustrations/3d/gear.png",
          "content": "スプラット演算子(*)は可変長引数を受け取るために使います。\n\n```ruby\ndef greet(*names)\n  names.each { |name| puts name }\nend\ngreet('Alice', 'Bob')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# *で可変長引数を受け取る\ndef sum_all(*numbers)\n  # reduceで畳み込み\n  numbers.reduce(0) { |acc, n| acc + n }\nend",
      "holeyCode": "# *で可変長引数を受け取る\ndef sum_all(___numbers)\n  # reduceで畳み込み\n  numbers.___(0) { |acc, n| acc + n }\nend",
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
        { "input": "sum_all(1, 2, 3)", "expected_output": "6" }
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
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "method_missingは存在しないメソッドが呼ばれた時に実行されます。\n\n```ruby\nclass MyClass\n  def method_missing(name, *args)\n    puts \"#{name}が呼ばれました\"\n  end\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class FlexibleClass\n  # method_missingで未定義メソッドを捕捉\n  def method_missing(name, *args)\n    # nameでメソッド名を参照\n    \"Unknown method: #{name}\"\n  end\nend",
      "holeyCode": "class FlexibleClass\n  # method_missingで未定義メソッドを捕捉\n  def ___(name, *args)\n    # nameでメソッド名を参照\n    \"Unknown method: #{___}\"\n  end\nend",
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
        { "input": "FlexibleClass.new.hello", "expected_output": "\"Unknown method: hello\"" }
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
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "Structは属性だけを持つ簡易的なクラスを作成できます。\n\n```ruby\nPoint = Struct.new(:x, :y)\np = Point.new(10, 20)\nputs p.x  # => 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Structで簡易クラス、nameとageは属性名\nPerson = Struct.new(:name, :age)",
      "holeyCode": "# Structで簡易クラス、nameとageは属性名\nPerson = ___.new(:___, :___)",
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
        { "input": "Person.new('Alice', 30).name", "expected_output": "\"Alice\"" }
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
          "image": "/illustrations/3d/robot.png",
          "content": "tapはブロックを実行した後、レシーバ自身を返すメソッドです。\n\n```ruby\n[1, 2].tap { |arr| arr << 3 }\n# => [1, 2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# tapで自身を返す、pushで要素追加\nresult = [1, 2, 3].tap { |arr| arr.push(4) }",
      "holeyCode": "# tapで自身を返す、pushで要素追加\nresult = [1, 2, 3].___ { |arr| arr.___(4) }",
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
        { "input": "result", "expected_output": "[1, 2, 3, 4]" }
      ]
    }
  ]
};
