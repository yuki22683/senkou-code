export const ruby3Data = {
  "language": "ruby",
  "lessonId": "ruby-3",
  "lessonTitle": "Ruby III - メタプログラミングと関数型スタイル",
  "lessonDescription": "Rubyの高度な機能を学びます。ブロック、Proc、ラムダ、メタプログラミングなどRubyの真髄を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "yieldとブロック",
      "content": "`yield` でメソッドに渡されたブロックを実行できます。\\n\\n```ruby\\ndef twice\\n  yield\\n  yield\\nend\\n\\ntwice { puts 'こんにちは' }\\n# => こんにちは\\n# => こんにちは\\n```\\n\\n`yield` はブロックを呼び出す特別なキーワードです。"
    },
    {
      "title": "Procとラムダ",
      "content": "ブロックをオブジェクトとして保存できます。\\n\\n```ruby\\n# Proc\\nsquare = Proc.new { |x| x ** 2 }\\nputs square.call(5)  # => 25\\n\\n# ラムダ（引数チェックあり）\\ncube = ->(x) { x ** 3 }\\nputs cube.call(3)    # => 27\\n```\\n\\n`->` はラムダを作る記法で、`lambda` と同じです。"
    },
    {
      "title": "シンボルとProc変換",
      "content": "`&:メソッド名` でシンボルをProcに変換できます。\\n\\n```ruby\\nwords = ['ruby', 'python', 'go']\\n\\n# 通常の書き方\\nresult = words.map { |w| w.upcase }\\n\\n# &:を使った省略形\\nresult = words.map(&:upcase)\\nputs result  # => [\"RUBY\", \"PYTHON\", \"GO\"]\\n```\\n\\n各要素に対してそのメソッドを呼び出します。"
    },
    {
      "title": "reduceメソッド",
      "content": "`reduce` で配列を1つの値にまとめます。\\n\\n```ruby\\nnums = [1, 2, 3, 4, 5]\\n\\n# 合計を計算\\nsum = nums.reduce(0) { |acc, n| acc + n }\\nputs sum  # => 15\\n\\n# 積を計算\\nproduct = nums.reduce(1) { |acc, n| acc * n }\\nputs product  # => 120\\n```\\n\\n`acc` は累積値、`n` は各要素です。"
    },
    {
      "title": "スプラット演算子",
      "content": "`*` で可変長引数を受け取れます。\\n\\n```ruby\\ndef sum_all(*numbers)\\n  numbers.reduce(0) { |acc, n| acc + n }\\nend\\n\\nputs sum_all(1, 2, 3)     # => 6\\nputs sum_all(1, 2, 3, 4)  # => 10\\n```\\n\\n`*numbers` で任意の数の引数を配列として受け取ります。"
    },
    {
      "title": "method_missing",
      "content": "`method_missing` で未定義メソッドの呼び出しを捕捉できます。\\n\\n```ruby\\nclass FlexibleClass\\n  def method_missing(name, *args)\\n    \"Unknown: #{name}\"\\n  end\\nend\\n\\nobj = FlexibleClass.new\\nputs obj.hello    # => Unknown: hello\\nputs obj.goodbye  # => Unknown: goodbye\\n```\\n\\nメタプログラミングの基礎となる強力な機能です。"
    }
  ],
  "exercises": [
    {
      "title": "yieldとブロック",
      "correctCode": "# defでメソッドを定義\\ndef twice\\n  # yieldでブロックを実行\\n  yield\\n  # yieldでブロックを実行\\n  yield\\n# endで終了\\nend",
      "holeyCode": "# defでメソッドを定義\\ndef ___\\n  # yieldでブロックを実行\\n  ___\\n  # yieldでブロックを実行\\n  ___\\n# endで終了\\n___",
      "correctLines": [
          "# defでメソッドを定義",
          "def twice",
          "  # yieldでブロックを実行",
          "  yield",
          "  # yieldでブロックを実行",
          "  yield",
          "# endで終了",
          "end"
        ],
      "lineHints": [
          null,
          "def でメソッドを定義します。",
          null,
          "yield でブロックを呼び出します。",
          null,
          "yield でブロックを呼び出します。",
          null,
          "ブロックを終了する。"
        ],
        "candidates": {
          "2": [
            "yield",
            "call",
            "block",
            "return"
          ],
          "3": [
            "yield",
            "call",
            "block",
            "return"
          ],
          "others": ["def", "end", "twice", "twice", "yield"]
        },
        "testCases": [
          {
            "input": "result = []; twice { result << 1 }; result",
            "expected_output": "[1, 1]"
          }
        ]
      },
    {
      "title": "Procオブジェクト",
      "correctCode": "# Procでブロックをオブジェクト化、**で累乗\\nsquarer = Proc.new { |x| x ** 2 }",
      "holeyCode": "# Procでブロックをオブジェクト化、**で累乗\\n___ = ___.new { |___| ___ ___ ___ }",
      "correctLines": [
          "# Procでブロックをオブジェクト化、**で累乗",
          "squarer = Proc.new { |x| x ** 2 }"
        ],
      "lineHints": [
          null,
          "Procでブロックをオブジェクト化し、xの2乗を計算します。"
        ],
        "candidates": {
          "1": [
            "Proc",
            "Block",
            "Lambda",
            "Function"
          ],
          "others": [
            "squarer",
            "Proc",
            "x",
            "**",
            "2"
          ]
        },
        "testCases": [
          {
            "input": "squarer.call(5)",
            "expected_output": "25"
          }
        ]
      },
    {
      "title": "ラムダ",
      "correctCode": "# ->でラムダを定義、**で累乗\\ncube = ->(x) { x ** 3 }",
      "holeyCode": "# ->でラムダを定義、**で累乗\\n___ = ___(___) { ___ ___ ___ }",
      "correctLines": [
          "# ->でラムダを定義、**で累乗",
          "cube = ->(x) { x ** 3 }"
        ],
      "lineHints": [
          null,
          "->でラムダを定義し、xの3乗を計算します。"
        ],
        "candidates": {
          "1": [
            "->",
            "=>",
            "lambda",
            "proc"
          ],
          "others": ["cube", "->", "x", "x", "**", "3"]
        },
        "testCases": [
          {
            "input": "cube.call(3)",
            "expected_output": "27"
          }
        ]
      },
    {
      "title": "シンボルとProc変換",
      "correctCode": "# mapで変換、upcaseで大文字化\\nresult = ['ruby', 'python', 'go'].map(&:upcase)",
      "holeyCode": "# mapで変換、upcaseで大文字化\\n___ = [___, ___, ___].___(___:___)",
      "correctLines": [
          "# mapで変換、upcaseで大文字化",
          "result = ['ruby', 'python', 'go'].map(&:upcase)"
        ],
      "lineHints": [
          null,
          "mapと&:upcaseで配列の各要素を大文字化します。"
        ],
        "candidates": {
          "1": [
            "map",
            "each",
            "select",
            "filter"
          ],
          "others": [
            "result",
            "'ruby'",
            "'python'",
            "'go'",
            "map",
            "&",
            "upcase"
          ]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "[\"RUBY\", \"PYTHON\", \"GO\"]"
          }
        ]
      },
    {
      "title": "reduceメソッド",
      "correctCode": "# reduceで畳み込み、+で加算\\nsum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
      "holeyCode": "# reduceで畳み込み、+で加算\\n___ = [___, ___, ___, ___, ___].___(___) { |___, ___| ___ ___ ___ }",
      "correctLines": [
          "# reduceで畳み込み、+で加算",
          "sum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }"
        ],
      "lineHints": [
          null,
          "reduceで配列を初期値0から畳み込み、acc+nで累積します。"
        ],
        "candidates": {
          "1": [
            "reduce",
            "fold",
            "inject",
            "sum"
          ],
          "others": ["sum", "1", "2", "3", "4", "5", "reduce", "0", "acc", "n", "acc", "+", "n"]
        },
        "testCases": [
          {
            "input": "sum",
            "expected_output": "15"
          }
        ]
      },
    {
      "title": "selectとreject",
      "correctCode": "# selectでフィルタ、evenで偶数判定\\nevens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }",
      "holeyCode": "# selectでフィルタ、evenで偶数判定\\n___ = [___, ___, ___, ___, ___, ___].___ { |___| ___.___ }",
      "correctLines": [
          "# selectでフィルタ、evenで偶数判定",
          "evens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }"
        ],
      "lineHints": [
          null,
          "selectで配列から偶数（even?）の要素を抽出します。"
        ],
        "candidates": {
          "1": [
            "select",
            "filter",
            "find_all",
            "reject"
          ],
          "others": ["evens", "1", "2", "3", "4", "5", "6", "select", "n", "n", "even?"]
        },
        "testCases": [
          {
            "input": "evens",
            "expected_output": "[2, 4, 6]"
          }
        ]
      },
    {
      "title": "スプラット演算子",
      "correctCode": "# *で可変長引数を受け取る\\ndef sum_all(*numbers)\\n  # reduceで畳み込み\\n  numbers.reduce(0) { |acc, n| acc + n }\\n# endで終了\\nend",
      "holeyCode": "# *で可変長引数を受け取る\\n___ ___(___)\\n  # reduceで畳み込み\\n  ___.___(___) { |___, ___| ___ ___ ___ }\\n# endで終了\\n___",
      "correctLines": [
          "# *で可変長引数を受け取る",
          "def sum_all(*numbers)",
          "  # reduceで畳み込み",
          "  numbers.reduce(0) { |acc, n| acc + n }",
          "# endで終了",
          "end"
        ],
      "lineHints": [
          null,
          "*numbersで可変長引数を受け取るsum_allメソッドを定義します。",
          null,
          "reduceで初期値0から畳み込み、acc+nで累積します。",
          null,
          "ブロックを終了します。"
        ],
        "candidates": {
          "1": [
            "*",
            "**",
            "&",
            "..."
          ],
          "2": [
            "reduce",
            "sum",
            "fold",
            "inject"
          ],
          "others": ["def", "sum_all", "*numbers", "numbers", "reduce", "0", "acc", "n", "acc", "+", "n", "end"]
        },
        "testCases": [
          {
            "input": "sum_all(1, 2, 3)",
            "expected_output": "6"
          }
        ]
      },
    {
      "title": "method_missing",
      "correctCode": "# classでクラスを定義\\nclass FlexibleClass\\n  # method_missingで未定義メソッドを捕捉\\n  def method_missing(name, *args)\\n    # nameでメソッド名を参照\\n    \"Unknown method: #{name}\"\\n  # endで終了\\n  end\\n# endで終了\\nend",
      "holeyCode": "# classでクラスを定義\\n___ ___\\n  # method_missingで未定義メソッドを捕捉\\n  ___ ___(___, ___)\\n    # nameでメソッド名を参照\\n    ___\\n  # endで終了\\n  ___\\n# endで終了\\n___",
      "correctLines": [
          "# classでクラスを定義",
          "class FlexibleClass",
          "  # method_missingで未定義メソッドを捕捉",
          "  def method_missing(name, *args)",
          "    # nameでメソッド名を参照",
          "    \"Unknown method: #{name}\"",
          "  # endで終了",
          "  end",
          "# endで終了",
          "end"
        ],
      "lineHints": [
          null,
          "classでFlexibleClassを定義します。",
          null,
          "method_missingで未定義メソッドを捕捉し、*argsで可変長引数を受け取ります。",
          null,
          "未定義メソッド名を含むエラーメッセージを返します。",
          null,
          "メソッドを終了します。",
          null,
          "クラスを終了します。"
        ],
        "candidates": {
          "2": [
            "method_missing",
            "missing_method",
            "no_method",
            "undefined"
          ],
          "3": [
            "name",
            "method",
            "args",
            "self"
          ],
          "others": ["class", "FlexibleClass", "def", "method_missing", "name", "*args", "\"Unknown method: #{name}\"", "end", "end"]
        },
        "testCases": [
          {
            "input": "FlexibleClass.new.hello",
            "expected_output": "Unknown method: hello"
          }
        ]
      },
    {
      "title": "Struct",
      "correctCode": "# Structで簡易クラス、name, ageの順で属性名\\nPerson = Struct.new(:name, :age)",
      "holeyCode": "# Structで簡易クラス、name, ageの順で属性名\\n___ = ___.___(:___, :___)",
      "correctLines": [
          "# Structで簡易クラス、name, ageの順で属性名",
          "Person = Struct.new(:name, :age)"
        ],
      "lineHints": [
          null,
          "Struct.newで:nameと:ageを持つPerson構造体を作成します。"
        ],
        "candidates": {
          "1": [
            "Struct",
            "Class",
            "Object",
            "Data"
          ],
          "others": [
            "Person",
            "Struct",
            "new",
            "name",
            "age"
          ]
        },
        "testCases": [
          {
            "input": "Person.new('アリス', 30).name",
            "expected_output": "アリス"
          }
        ]
      },
    {
      "title": "tapメソッド",
      "correctCode": "# tapで自身を返す、pushで要素追加\\nresult = [1, 2, 3].tap { |arr| arr.push(4) }",
      "holeyCode": "# tapで自身を返す、pushで要素追加\\n___ = [___, ___, ___].___ { |___| ___.___(___) }",
      "correctLines": [
          "# tapで自身を返す、pushで要素追加",
          "result = [1, 2, 3].tap { |arr| arr.push(4) }"
        ],
      "lineHints": [
          null,
          "tapで自身を返しながらpush(4)で要素を追加します。"
        ],
        "candidates": {
          "1": [
            "tap",
            "then",
            "yield_self",
            "itself"
          ],
          "others": ["result", "1", "2", "3", "tap", "arr", "arr", "push", "4"]
        },
        "testCases": [
          {
            "input": "result",
            "expected_output": "[1, 2, 3, 4]"
          }
        ]
      }
  ]
};
