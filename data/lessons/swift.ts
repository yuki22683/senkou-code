export const swiftData = {
  "language": "swift",
  "lessonId": "swift-1",
  "lessonTitle": "Swift I",
  "lessonDescription": "Appleのプラットフォーム向け言語Swiftの基礎を学びます。iOSアプリ開発などで必須の言語です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "Swiftで文字を出力してみましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "print関数",
          "content": "# 文字の出力\n\nSwiftでは `print()` 関数を使ってコンソールに文字を出力します。\n\n```swift\nprint(\"表示したい文字\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`Hello, World!` と出力してみましょう。\n\n**コード例：**\n```swift\nprint(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力\nprint(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力",
        "print(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "print関数を使います。"
      ],
      "candidates": {
        "functions": [
          "print"
        ],
        "strings": [
          "\"Hello, World!\""
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "定数と変数",
      "description": "Swiftでの変数の扱い方を学びましょう。定数(let)と変数(var)があります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "let と var",
          "content": "# let（定数）\n値を変更しない場合は `let` を使います。\n\n# var（変数）\n値を変更する可能性がある場合は `var` を使います。\n\n```swift\nlet name = \"Swift\"\nvar count = 0\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n定数 name に `\"Swift\"` を代入して表示してみましょう。\n\n**コード例：**\n```swift\nlet name = \"Swift\"\nprint(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 定数nameを定義\nlet name = \"Swift\"\n// 出力\nprint(name)",
      "holeyCode": "// 定数nameを定義\n___ name = \"Swift\"\n// 出力\nprint(___)",
      "correctLines": [
        "// 定数nameを定義",
        "let name = \"Swift\"",
        "// 出力",
        "print(name)"
      ],
      "lineHints": [
        null,
        "変更しない値なので let を使います。",
        null,
        "変数名 name を指定します。"
      ],
      "candidates": {
        "keywords": [
          "let",
          "var"
        ],
        "variables": [
          "name"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Swift\n"
        }
      ]
    },
    {
      "title": "型の明示",
      "description": "変数の型を明示的に指定する方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "型注釈",
          "content": "# コロンで型を指定\n\nSwiftは型推論がありますが、明示的に型を書くこともできます。\n\n```swift\nvar age: Int = 20\nvar name: String = \"Alice\"\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n整数型の変数 age に `20` を代入して表示しましょう。\n\n**コード例：**\n```swift\nvar age: Int = 20\nprint(age)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var age: Int = 20\nprint(age)",
      "holeyCode": "var age: ___ = 20\nprint(age)",
      "correctLines": [
        "var age: Int = 20",
        "print(age)"
      ],
      "lineHints": [
        "整数型 Int を指定します。",
        null
      ],
      "candidates": {
        "types": [
          "Int",
          "String"
        ],
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "文字列への埋め込み",
      "description": "文字列の中に変数の値を埋め込む方法（String Interpolation）を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "バックスラッシュ記法",
          "content": "# \\(変数名)\n\n文字列の中で `\\(変数名)` と書くことで、その変数の値を展開できます。\n\n```swift\nlet score = 100\nprint(\"Score: \\(score)\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 score に `100` を代入し、「Score: 100」と表示しましょう。\n\n**コード例：**\n```swift\nlet score = 100\nprint(\"Score: \\(score)\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let score = 100\nprint(\"Score: \\(score)\")",
      "holeyCode": "let score = 100\nprint(\"Score: \\(___)\")",
      "correctLines": [
        "let score = 100",
        "print(\"Score: \\(score)\")"
      ],
      "lineHints": [
        null,
        "括弧の中に変数名 score を入れます。"
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "\"Score: \\(score)\""
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Score: 100\n"
        }
      ]
    },
    {
      "title": "配列",
      "description": "複数のデータを管理する配列の使い方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列の作成",
          "content": "# [] を使う\n\n```swift\nvar fruits = [\"Apple\", \"Orange\"]\nprint(fruits[0]) // Apple\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n配列 fruits を作成し、最初の要素（Apple）を表示しましょう。\n\n**コード例：**\n```swift\nvar fruits = [\"Apple\", \"Orange\"]\nprint(fruits[0])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var fruits = [\"Apple\", \"Orange\"]\nprint(fruits[0])",
      "holeyCode": "var fruits = [\"Apple\", \"Orange\"]\nprint(fruits[___])",
      "correctLines": [
        "var fruits = [\"Apple\", \"Orange\"]",
        "print(fruits[0])"
      ],
      "lineHints": [
        null,
        "最初の要素のインデックスは 0 です。"
      ],
      "candidates": {
        "variables": [
          "fruits"
        ],
        "functions": [
          "print"
        ],
        "numbers": [
          "0"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Apple\n"
        }
      ]
    },
    {
      "title": "辞書",
      "description": "キーと値のペアでデータを管理する辞書の使い方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "辞書の作成",
          "content": "# [Key: Value]\n\n```swift\nvar user = [\"name\": \"Alice\", \"country\": \"USA\"]\nprint(user[\"name\"]!)\n```\n※ `!` は値が存在することを保証する強制アンラップです（ここでは簡単のため使用）。"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n辞書 user からキー `\"name\"` の値を取り出して表示しましょう。\n\n**コード例：**\n```swift\nvar user = [\"name\": \"Alice\"]\nprint(user[\"name\"]!)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var user = [\"name\": \"Alice\"]\nprint(user[\"name\"]!)",
      "holeyCode": "var user = [\"name\": \"Alice\"]\nprint(user[\"___\"]!)",
      "correctLines": [
        "var user = [\"name\": \"Alice\"]",
        "print(user[\"name\"]!)"
      ],
      "lineHints": [
        null,
        "キー \"name\" を指定して値を取り出します。"
      ],
      "candidates": {
        "variables": [
          "user"
        ],
        "strings": [
          "name",
          "Alice"
        ],
        "functions": [
          "print"
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
      "title": "条件分岐",
      "description": "if文を使って条件分岐を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "if文の書き方",
          "content": "# 条件を括弧で囲まなくてもOK\n\nSwiftのif文は条件式を `()` で囲む必要はありませんが、`{}` は必須です。\n\n```swift\nif score > 80 {\n    print(\"Excellent\")\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nscore が `90` のとき、`80` より大きければ `Excellent` と表示させましょう。\n\n**コード例：**\n```swift\nvar score = 90\nif score > 80 {\n    print(\"Excellent\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var score = 90\nif score > 80 {\n    print(\"Excellent\")\n}",
      "holeyCode": "var score = 90\nif score ___ 80 {\n    print(\"Excellent\")\n}",
      "correctLines": [
        "var score = 90",
        "if score > 80 {",
        "    print(\"Excellent\")",
        "}"
      ],
      "lineHints": [
        null,
        "比較演算子 > を使います。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "operators": [
          ">"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Excellent\n"
        }
      ]
    },
    {
      "title": "繰り返し (for-in)",
      "description": "for-inループを使って配列の要素を順に処理しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "for-inループ",
          "content": "# 配列の反復\n\n```swift\nlet names = [\"Alice\", \"Bob\"]\nfor name in names {\n    print(name)\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n配列 names の要素をループで取り出して表示しましょう。\n\n**コード例：**\n```swift\nlet names = [\"Alice\", \"Bob\"]\nfor name in names {\n    print(name)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let names = [\"Alice\", \"Bob\"]\nfor name in names {\n    print(name)\n}",
      "holeyCode": "let names = [\"Alice\", \"Bob\"]\nfor name ___ names {\n    print(name)\n}",
      "correctLines": [
        "let names = [\"Alice\", \"Bob\"]",
        "for name in names {",
        "    print(name)",
        "}"
      ],
      "lineHints": [
        null,
        "in キーワードを使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "for",
          "in"
        ],
        "variables": [
          "name",
          "names"
        ],
        "functions": [
          "print"
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
      "title": "関数",
      "description": "関数の定義と呼び出し方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "関数定義",
          "content": "# funcキーワード\n\n```swift\nfunc greet() {\n    print(\"Hello\")\n}\ngreet()\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`Hello` と表示する関数 `greet` を定義して呼び出してみましょう。\n\n**コード例：**\n```swift\nfunc greet() {\n    print(\"Hello\")\n}\ngreet()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func greet() {\n    print(\"Hello\")\n}\ngreet()",
      "holeyCode": "___ greet() {\n    print(\"Hello\")\n}\n___()",
      "correctLines": [
        "func greet() {",
        "    print(\"Hello\")",
        "}",
        "greet()"
      ],
      "lineHints": [
        "関数定義には func を使います。",
        null,
        null,
        "関数名 greet を呼び出します。"
      ],
      "candidates": {
        "keywords": [
          "func"
        ],
        "functions": [
          "greet",
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "Optional型",
      "description": "値が無いかもしれない状態を扱うOptional型について学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "nilの可能性",
          "content": "# ? を付ける\n\n型名の後に `?` を付けると、その変数は `nil`（値なし）を入れることができます。\n\n```swift\nvar name: String? = \"Alice\"\nname = nil\nprint(\"OK\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nString型のOptional変数 name を定義し、`nil` を代入してみましょう（出力はしません）。\n\n**コード例：**\n```swift\nvar name: String? = \"Alice\"\nname = nil\nprint(\"OK\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var name: String? = \"Alice\"\nname = nil\nprint(\"OK\")",
      "holeyCode": "var name: String___ = \"Alice\"\nname = ___\nprint(\"OK\")",
      "correctLines": [
        "var name: String? = \"Alice\"",
        "name = nil",
        "print(\"OK\")"
      ],
      "lineHints": [
        "Optional型にするには ? を付けます。",
        "値なしを表す nil を代入します。",
        null
      ],
      "candidates": {
        "types": [
          "String",
          "Int"
        ],
        "keywords": [
          "nil",
          "?"
        ],
        "variables": [
          "name"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "OK\n"
        }
      ]
    }
  ]
};
