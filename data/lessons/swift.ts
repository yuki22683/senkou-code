export const swiftData = {
  "language": "swift",
  "lessonId": "swift-1",
  "lessonTitle": "Swift (スウィフト) にちょうせん！",
  "lessonDescription": "iPhone（アイフォーン）のアプリ作りなどで使われる言葉「Swift（スウィフト）」のきほんを学びましょう。きれいで分かりやすいプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Swiftを使って画面に「こんにちは」と表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "print を使いましょう",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print()` という名前の関数を使います。カッコの中に表示したいものを入力しましょう。\n\n```swift\nprint(\"表示したい文字\")\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`print()` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```swift\nprint(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力する関数\nprint(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力する関数\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力する関数",
        "print(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "画面に出す関数は `print` です。"
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
      "title": "「ずっと変わらない」はこ",
      "description": "データをしまっておく「はこ（定数）」を使ってみましょう。Swiftでは let（レット）というラベルを貼ります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "let を使いましょう",
          "content": "# 変わらない定数\n\n一度決めたら中身を変えない「はこ」を作るときは、`let` という言葉を使います。これを「定数（ていすう）」と呼びますよ。\n\n**コード例：**\n```swift\nlet name = \"Swift\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 定数nameを定義する\nlet name = \"Swift\"\n// はこの中身を出す\nprint(name)",
      "holeyCode": "// 定数nameを定義する\n___ name = \"Swift\"\n// はこの中身を出す\nprint(___)",
      "correctLines": [
        "// 定数nameを定義する",
        "let name = \"Swift\"",
        "// はこの中身を出す",
        "print(name)"
      ],
      "lineHints": [
        null,
        "変わらないはこを作るには `let` と入力しましょう。",
        null,
        "はこの名前 `name` を指定します。"
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
      "title": "はこに「ラベル」をはりましょう",
      "description": "「このはこには数字を入れます！」というラベル（型）を指定する方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "型の指定（かたのしてい）",
          "content": "# :（コロン）を使います\n\nはこ（変数）の名前のあとに `:` をつけてから種類を書くことができます。整数なら `Int`（イント）というラベルを貼りますよ。\n\n**コード例：**\n```swift\nvar age: Int = 10\n```"
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
        "整数を入れるラベル `Int` と入力しましょう。",
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
      "title": "文章の中に「はこ」を入れましょう",
      "description": "特殊な記号を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "\( ) を使いましょう",
          "content": "# 文字列の埋め込み\n\n`\" \"` で囲んだ文章の中で `\(はこの名前)` と入力すると、その場所にはこの中身を入れられますよ。これを「式展開（しきてんかい）」と呼びます。\n\n**コード例：**\n```swift\nlet score = 100\nprint(\"点数は \\(score) です\")\n```"
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
        "カッコの中に、はこの名前 `score` を入力してください。"
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
      "title": "データをならべる「配列」",
      "description": "たくさんのデータを一つの「長い はこ」にまとめて入れられる「配列（はいれつ）」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# [ ]（しかくい かっこ）を使います\n\n配列の中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```swift\nvar fruits = [\"あか\", \"あお\"]\nprint(fruits[0]) // 「あか」が表示されます\n```"
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
        "一番最初の番号は 0 です。 `fruits[0]` と入力してください。"
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
      "title": "名前で探す「辞書」",
      "description": "「辞書（じしょ）」という機能を使うと、名前を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "キーとあたいのペア",
          "content": "# [名前: データ] の形です\n\n「名前」と「データ」をセットにして保存できます。取り出すときは `[ \"名前\" ]` というふうに指定しますよ。\n\n**コード例：**\n```swift\nvar user = [\"name\": \"たろう\"]\nprint(user[\"name\"]!)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var user = [\"name\": \"Alice\"]\nprint(user[\"name\"]!)",
      "holeyCode": "var user = [\"name\": \"Alice\"]\nprint(user[\"___"]!)",
      "correctLines": [
        "var user = [\"name\": \"Alice\"]",
        "print(user[\"name\"]!)"
      ],
      "lineHints": [
        null,
        "\"name\" という名前を指定してデータを取り出します。"
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
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって表示するメッセージを変えてみましょう。 if（イフ）を使います。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "if文の書きかた",
          "content": "# { } を使いましょう\n\nSwiftでは、`if 条件` のあとに `{ }` を入力して、その中にやりたいことを入力します。条件のまわりに `( )` はつけなくても大丈夫ですよ。\n\n**コード例：**\n```swift\nif score > 80 {\n    print(\"合格！\")\n}\n```"
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
        "比較するための記号 `>` を入力しましょう。",
        null,
        "さいごに } で閉じるのを忘れないでください。"
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
      "title": "中身を全部出してみましょう",
      "description": "for-in ループを使って、配列の中身を一つずつ順番に表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "in を使いましょう",
          "content": "# 全部取り出します\n\n`for 名前 in 配列` と入力すると、中身を一つずつ取り出して処理できます。とても便利な機能ですよ。\n\n**コード例：**\n```swift\nlet names = [\"たろう\", \"はなこ\"]\nfor name in names {\n    print(name)\n}\n```"
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
        "「〜の中で」をあらわす `in` キーワードを入力します。",
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
      "title": "自分だけの関数を作りましょう",
      "description": "よく使う手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "func と名前",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。 Swiftでは `func` という言葉を使います。\n\n**コード例：**\n```swift\nfunc aisatsu() {\n    print(\"こんにちは\")\n}\naisatsu() // 呼び出し\n```"
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
        "関数を定義するための言葉 `func` と入力します。",
        null,
        "関数の終わりです。",
        "関数名 `greet` を入力して、実行します。"
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
      "title": "「空っぽ」かもしれない状態",
      "description": "Swiftの面白い特徴、データが「無い」かもしれないことをあらわす仕組みを学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "nil（ニル）と ?（クエスチョン）",
          "content": "# オプショナル型\n\nラベルのあとに `?` をつけると、そのはこは `nil`（空っぽ）になることができます。空っぽを許さない厳しいルールのおかげで、間違いが減るようになっていますよ。\n\n**コード例：**\n```swift\nvar name: String? = \"たろう\"\nname = nil\nprint(\"OK\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var name: String? = \"Alice\"\nname = nil\nprint(\"OK\")",
      "holeyCode": "var name: String___ = \"Alice\"\nname = ___
print(\"OK\")",
      "correctLines": [
        "var name: String? = \"Alice\"",
        "name = nil",
        "print(\"OK\")"
      ],
      "lineHints": [
        "空っぽになれるラベルにするには `?` を入力しましょう。",
        "空っぽをあらわす `nil` を代入します。",
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
}