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
          "lineNumber",
          null,
          "hint",
          null,
          "ブロックを呼び出すキーワード",
          null,
          "lineNumber"
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
      "holeyCode": "# Procでブロックをオブジェクト化、**で累乗\\nsquarer = Proc.new { |x| x ** ___ }",
      "correctLines": [
          "# Procでブロックをオブジェクト化、**で累乗",
          "squarer = Proc.new { |x| x ** 2 }"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "Proc",
            "Block",
            "Lambda",
            "Function"
          ],
          "others": [
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
      "holeyCode": "# ->でラムダを定義、**で累乗\\ncube = ->(x) { x ** ___ }",
      "correctLines": [
          "# ->でラムダを定義、**で累乗",
          "cube = ->(x) { x ** 3 }"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "->",
            "=>",
            "lambda",
            "proc"
          ],
          "others": ["**", "3"]
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
      "holeyCode": "# mapで変換、upcaseで大文字化\\nresult = ['ruby', 'python', 'go'].map(&:___)",
      "correctLines": [
          "# mapで変換、upcaseで大文字化",
          "result = ['ruby', 'python', 'go'].map(&:upcase)"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "map",
            "each",
            "select",
            "filter"
          ],
          "others": [
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
      "holeyCode": "# reduceで畳み込み、+で加算\\nsum = [___, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }",
      "correctLines": [
          "# reduceで畳み込み、+で加算",
          "sum = [1, 2, 3, 4, 5].reduce(0) { |acc, n| acc + n }"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "reduce",
            "fold",
            "inject",
            "sum"
          ],
          "others": ["+", "1"]
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
      "holeyCode": "# selectでフィルタ、evenで偶数判定\\nevens = [___, 2, 3, 4, 5, 6].select { |n| n.even? }",
      "correctLines": [
          "# selectでフィルタ、evenで偶数判定",
          "evens = [1, 2, 3, 4, 5, 6].select { |n| n.even? }"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "select",
            "filter",
            "find_all",
            "reject"
          ],
          "others": ["even", "1"]
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
      "holeyCode": "# *で可変長引数を受け取る\\ndef sum_all(*___)\\n  # reduceで畳み込み\\n  numbers.reduce(___) { |acc, n| acc + n }\\n# endで終了\\n___",
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
          "lineNumber",
          null,
          "hint",
          null,
          "関数（sum_all）を新しく定義します。"
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
          "others": ["def", "end", "numbers", "0"]
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
      "holeyCode": "# classでクラスを定義\\nclass ___\\n  # method_missingで未定義メソッドを捕捉\\n  def method_missing(name, *___)\\n    # nameでメソッド名を参照\\n    \"___\"\\n  # endで終了\\n  ___\\n# endで終了\\n___",
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
          "lineNumber",
          null,
          "hint",
          null,
          "関数（method_missing）を新しく定義します。",
          null,
          "lineNumber",
          null,
          "hint"
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
          "others": ["class", "end", "FlexibleClass", "Unknown method: #{name}", "Unknown method: #{name}", "FlexibleClass", "end"]
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
      "holeyCode": "# Structで簡易クラス、name, ageの順で属性名\\nPerson = Struct.new(:name, :___)",
      "correctLines": [
          "# Structで簡易クラス、name, ageの順で属性名",
          "Person = Struct.new(:name, :age)"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "Struct",
            "Class",
            "Object",
            "Data"
          ],
          "others": [
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
      "holeyCode": "# tapで自身を返す、pushで要素追加\\nresult = [___, 2, 3].tap { |arr| arr.push(4) }",
      "correctLines": [
          "# tapで自身を返す、pushで要素追加",
          "result = [1, 2, 3].tap { |arr| arr.push(4) }"
        ],
      "lineHints": [
          null,
          "lineNumber"
        ],
        "candidates": {
          "1": [
            "tap",
            "then",
            "yield_self",
            "itself"
          ],
          "others": ["push", "1"]
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
