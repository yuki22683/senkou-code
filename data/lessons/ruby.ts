export const rubyData = {
  "language": "ruby",
  "lessonId": "ruby-1",
  "lessonTitle": "Ruby I",
  "lessonDescription": "日本生まれのプログラミング言語Rubyの基本を学びます。直感的で読みやすいコードが特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Rubyで画面に文字を表示するには puts メソッドを使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "putsメソッド",
          "content": "# シンプルな出力\n\nRubyでは `puts` を使うだけで簡単に文字を表示できます。\n\n**コード例：**\n```ruby\nputs 'Hello, Ruby!'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 「Hello, Ruby!」と出力\nputs 'Hello, Ruby!'",
      "holeyCode": "# 「Hello, Ruby!」と出力\nputs '___'",
      "correctLines": [
        "# 「Hello, Ruby!」と出力",
        "puts 'Hello, Ruby!'"
      ],
      "lineHints": [
        null,
        "Hello, Ruby! を出力します。"
      ],
      "candidates": {
        "strings": [
          "Hello, Ruby!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Ruby!\n"
        }
      ]
    },
    {
      "title": "変数",
      "description": "変数を定義して出力しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数",
          "content": "# 型宣言不要\n\nRubyは動的型付け言語なので、型を書く必要はありません。\n\n**コード例：**\n```ruby\nname = 'Ruby'\nputs name\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数nameを定義\nname = 'Ruby'\nputs name",
      "holeyCode": "# 変数nameを定義\nname = '___'\nputs ___",
      "correctLines": [
        "# 変数nameを定義",
        "name = 'Ruby'",
        "puts name"
      ],
      "lineHints": [
        null,
        "Rubyを代入します。",
        "変数nameを出力します。"
      ],
      "candidates": {
        "variables": [
          "name"
        ],
        "strings": [
          "Ruby"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Ruby\n"
        }
      ]
    },
    {
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算",
          "content": "# 四則演算\n\n他言語と同様です。\n\n**コード例：**\n```ruby\na = 5\nb = 3\nputs a + b\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 計算\na = 5\nb = 3\nputs a + b",
      "holeyCode": "# 計算\na = 5\nb = 3\nputs a ___ b",
      "correctLines": [
        "# 計算",
        "a = 5",
        "b = 3",
        "puts a + b"
      ],
      "lineHints": [
        null,
        null,
        null,
        "a + b を出力します。"
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "式展開",
      "description": "文字列の中に変数を埋め込みましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "式展開",
          "content": "# #{ }\n\nダブルクォート \" で囲んだ文字列の中で `#{変数}` を使います。\n\n**コード例：**\n```ruby\nage = 20\nputs \"年齢は #{age} 歳です\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数埋め込み\nage = 20\nputs \"I am #{age} years old.\"",
      "holeyCode": "# 変数埋め込み\nage = 20\nputs \"I am #{___} years old.\"",
      "correctLines": [
        "# 変数埋め込み",
        "age = 20",
        "puts \"I am #{age} years old.\""
      ],
      "lineHints": [
        null,
        null,
        "age変数を埋め込みます。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 20 years old.\n"
        }
      ]
    },
    {
      "title": "配列",
      "description": "配列を作成して要素を取り出しましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列",
          "content": "# リスト構造\n\n複数のデータをまとめて扱います。インデックスは0から始まります。\n\n**コード例：**\n```ruby\ncolors = ['red', 'blue']\nputs colors[1] # 'blue' を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 配列\ncolors = ['red', 'blue']\nputs colors[1]",
      "holeyCode": "# 配列\ncolors = ['red', 'blue']\nputs colors[___]",
      "correctLines": [
        "# 配列",
        "colors = ['red', 'blue']",
        "puts colors[1]"
      ],
      "lineHints": [
        null,
        null,
        "インデックス1を指定します。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "blue\n"
        }
      ]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# endで閉じる\n\nRubyでは波括弧の代わりに `end` キーワードを使います。\n\n**コード例：**\n```ruby\nif score > 80\n    puts '合格'\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 条件分岐\nscore = 100\nif score > 80\n    puts 'Great'\nend",
      "holeyCode": "# 条件分岐\nscore = 100\nif score ___ 80\n    puts 'Great'\n___",
      "correctLines": [
        "# 条件分岐",
        "score = 100",
        "if score > 80",
        "    puts 'Great'",
        "end"
      ],
      "lineHints": [
        null,
        null,
        "比較演算子 > を使います。",
        null,
        "end で閉じます。"
      ],
      "candidates": {
        "operators": [
          ">"
        ],
        "keywords": [
          "end"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# 分岐\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```ruby\nif age >= 20\n    puts '大人'\nelse\n    puts '子供'\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 分岐\nage = 18\nif age >= 20\n    puts 'Adult'\nelse\n    puts 'Minor'\nend",
      "holeyCode": "# 分岐\nage = 18\nif age >= 20\n    puts 'Adult'\n___ \n    puts 'Minor'\nend",
      "correctLines": [
        "# 分岐",
        "age = 18",
        "if age >= 20",
        "    puts 'Adult'",
        "else",
        "    puts 'Minor'",
        "end"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "else を記述します。"
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Minor\n"
        }
      ]
    },
    {
      "title": "eachメソッド (繰り返し)",
      "description": "Rubyではfor文よりもeachメソッドが一般的です。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "each",
          "content": "# 配列.each do |変数|\n\n要素を一つずつ取り出して処理します。\n\n**コード例：**\n```ruby\nnames = ['Alice', 'Bob']\nnames.each do |name|\n    puts name\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ループ\nnames = ['Alice', 'Bob']\nnames.each do |name|\n    puts name\nend",
      "holeyCode": "# ループ\nnames = ['Alice', 'Bob']\nnames.___ do |name|\n    puts name\nend",
      "correctLines": [
        "# ループ",
        "names = ['Alice', 'Bob']",
        "names.each do |name|",
        "    puts name",
        "end"
      ],
      "lineHints": [
        null,
        null,
        "each メソッドを使います。",
        null,
        null
      ],
      "candidates": {
        "functions": [
          "each"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\nBob\n"
        }
      ]
    },
    {
      "title": "ハッシュ (連想配列)",
      "description": "キーと値のペアを扱うハッシュを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Hash",
          "content": "# キー: 値\n\n名前を付けてデータを管理します。シンボル（`:名前`）をキーにするのが一般的です。\n\n**コード例：**\n```ruby\nuser = { name: 'Alice' }\nputs user[:name] # 'Alice' を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ハッシュ\nuser = { name: 'Alice' }\nputs user[:name]",
      "holeyCode": "# ハッシュ\nuser = { name: 'Alice' }\nputs user[:___]",
      "correctLines": [
        "# ハッシュ",
        "user = { name: 'Alice' }",
        "puts user[:name]"
      ],
      "lineHints": [
        null,
        null,
        "シンボル :name を使ってアクセスします。"
      ],
      "candidates": {
        "strings": [
          "name"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "メソッド定義",
      "description": "メソッドを定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "def",
          "content": "# メソッド\n\n処理をまとめて名前を付けます。\n\n**コード例：**\n```ruby\ndef greet\n    puts 'Hello'\nend\n\ngreet # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 定義\ndef greet\n    puts 'Hello'\nend\n# 呼び出し\ngreet",
      "holeyCode": "# 定義\ndef greet\n    puts 'Hello'\n___\n# 呼び出し\n___",
      "correctLines": [
        "# 定義",
        "def greet",
        "    puts 'Hello'",
        "end",
        "# 呼び出し",
        "greet"
      ],
      "lineHints": [
        null,
        null,
        null,
        "end で閉じます。",
        null,
        "greet で呼び出します。"
      ],
      "candidates": {
        "keywords": [
          "end"
        ],
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}
