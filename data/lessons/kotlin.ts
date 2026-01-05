export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin I",
  "lessonDescription": "Kotlinの基本的な文法を学びます。Androidアプリ開発などで広く使われているモダンな言語です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "Kotlinで画面に文字を表示する方法を学びましょう。「Hello, World!」と出力するプログラムを作ります。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "文字の出力",
          "content": "# println関数\n\nKotlinで文字を出力して改行するには `println()` を使います。\n\n```kotlin\nprintln(\"表示したい文字\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`println()` を使って `Hello, World!` と表示しましょう。\n\n**コード例：**\n```kotlin\nprintln(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力\nprintln(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力",
        "println(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "命令は println です。"
      ],
      "candidates": {
        "functions": [
          "println"
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
      "title": "変数を使う",
      "description": "データを保存する「変数」の使い方を学びましょう。変更できない変数(val)を使ってみます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数の定義",
          "content": "# val キーワード\n\n値を変更しない変数は `val` を使って定義します。\n型推論が効くので、型を書かなくても自動的に判断してくれます。\n\n```kotlin\nval name = \"Kotlin\"\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 name に `\"Kotlin\"` を代入し、それを `println` で表示しましょう。\n\n**コード例：**\n```kotlin\nval name = \"Kotlin\"\nprintln(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 変数nameに\"Kotlin\"を代入\nval name = \"Kotlin\"\n// 変数を出力\nprintln(name)",
      "holeyCode": "// 変数nameに\"Kotlin\"を代入\n___ name = \"Kotlin\"\n// 変数を出力\nprintln(___)",
      "correctLines": [
        "// 変数nameに\"Kotlin\"を代入",
        "val name = \"Kotlin\"",
        "// 変数を出力",
        "println(name)"
      ],
      "lineHints": [
        null,
        "定数の定義には val を使います。",
        null,
        "変数名 name を指定します。"
      ],
      "candidates": {
        "variables": [
          "name"
        ],
        "functions": [
          "println"
        ],
        "keywords": [
          "val"
        ],
        "strings": [
          "\"Kotlin\""
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Kotlin\n"
        }
      ]
    },
    {
      "title": "数値の計算",
      "description": "変数を使って数値の計算を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "四則演算",
          "content": "# 基本的な演算子\n\n- **+** : 足し算\n- **-** : 引き算\n- **\\*** : 掛け算\n- **/** : 割り算\n\n```kotlin\nval x = 10\nval y = 5\nprintln(x + y)\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 width に `10`、height に 5 を代入し、面積（掛け算の結果）を表示しましょう。\n\n**コード例：**\n```kotlin\nval width = 10\nval height = 5\nprintln(width * height)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val width = 10\nval height = 5\nprintln(width * height)",
      "holeyCode": "val width = 10\nval height = 5\nprintln(width ___ height)",
      "correctLines": [
        "val width = 10",
        "val height = 5",
        "println(width * height)"
      ],
      "lineHints": [
        null,
        null,
        "掛け算の演算子 * を使います。"
      ],
      "candidates": {
        "variables": [
          "width",
          "height"
        ],
        "operators": [
          "*"
        ],
        "functions": [
          "println"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "50\n"
        }
      ]
    },
    {
      "title": "文字列テンプレート",
      "description": "文字列の中に変数の値を埋め込んで表示する方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文字列テンプレート",
          "content": "# $記号\n\n文字列の中で `$変数名` と書くことで、その変数の値を埋め込むことができます。\n\n```kotlin\nval age = 20\nprintln(\"I am $age years old.\")\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 age に `20` を代入し、「I am 20 years old.」と表示しましょう。\n\n**コード例：**\n```kotlin\nval age = 20\nprintln(\"I am $age years old.\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val age = 20\nprintln(\"I am $age years old.\")",
      "holeyCode": "val age = 20\nprintln(\"I am ___ years old.\")",
      "correctLines": [
        "val age = 20",
        "println(\"I am $age years old.\")"
      ],
      "lineHints": [
        null,
        "$age と記述して変数を埋め込みます。"
      ],
      "candidates": {
        "variables": [
          "age",
          "$age"
        ],
        "functions": [
          "println"
        ],
        "strings": [
          "\"I am $age years old.\""
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
      "title": "リスト (配列)",
      "description": "複数のデータをまとめて扱うリストの使い方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "listOf関数",
          "content": "# リストの作成\n\n`listOf()` を使ってリストを作成できます。\n要素には `[インデックス]` でアクセスします。\n\n```kotlin\nval items = listOf(\"A\", \"B\")\nprintln(items[0]) // A\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`\"Apple\"`, `\"Banana\"` が入ったリスト fruits を作成し、2番目の要素（Banana）を表示しましょう。\n\n**コード例：**\n```kotlin\nval fruits = listOf(\"Apple\", \"Banana\")\nprintln(fruits[1])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val fruits = listOf(\"Apple\", \"Banana\")\nprintln(fruits[1])",
      "holeyCode": "val fruits = listOf(\"Apple\", \"Banana\")\nprintln(fruits[___])",
      "correctLines": [
        "val fruits = listOf(\"Apple\", \"Banana\")",
        "println(fruits[1])"
      ],
      "lineHints": [
        null,
        "2番目の要素のインデックスは 1 です。"
      ],
      "candidates": {
        "variables": [
          "fruits"
        ],
        "functions": [
          "println",
          "listOf"
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Banana\n"
        }
      ]
    },
    {
      "title": "条件分岐 (if)",
      "description": "if文を使って、条件に応じた処理を行ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# 条件分岐\n\n条件によって処理を分けるには `if` を使います。\n\n```kotlin\nif (score > 80) {\n    println(\"Great!\")\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nscore が `100` のとき、`80` より大きければ `Great!` と表示するコードを完成させましょう。\n\n**コード例：**\n```kotlin\nval score = 100\nif (score > 80) {\n    println(\"Great!\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val score = 100\nif (score > 80) {\n    println(\"Great!\")\n}",
      "holeyCode": "val score = 100\nif (score ___ 80) {\n    println(\"Great!\")\n}",
      "correctLines": [
        "val score = 100",
        "if (score > 80) {",
        "    println(\"Great!\")",
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
          "println"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great!\n"
        }
      ]
    },
    {
      "title": "条件分岐 (if-else)",
      "description": "if-elseを使って、条件に当てはまらない場合の処理も書いてみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# その他の場合\n\n`else` ブロックを使うと、条件が偽の場合の処理を書くことができます。\n\n```kotlin\nif (score >= 60) {\n    println(\"Pass\")\n} else {\n    println(\"Fail\")\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`score` が `50` のとき、`60` 未満なので `Fail` と表示されるようにコードを完成させましょう。\n\n**コード例：**\n```kotlin\nval score = 50\nif (score >= 60) {\n    println(\"Pass\")\n} else {\n    println(\"Fail\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val score = 50\nif (score >= 60) {\n    println(\"Pass\")\n} else {\n    println(\"Fail\")\n}",
      "holeyCode": "val score = 50\nif (score >= 60) {\n    println(\"Pass\")\n} ___ {\n    println(\"Fail\")\n}",
      "correctLines": [
        "val score = 50",
        "if (score >= 60) {",
        "    println(\"Pass\")",
        "} else {",
        "    println(\"Fail\")",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "条件に合わない場合は else を使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "else"
        ],
        "functions": [
          "println"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Fail\n"
        }
      ]
    },
    {
      "title": "繰り返し (for)",
      "description": "forループを使って、リストの要素を順番に処理しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "forループ",
          "content": "# リストの反復\n\n`for (変数 in リスト)` でリストの要素を一つずつ取り出せます。\n\n```kotlin\nval nums = listOf(1, 2, 3)\nfor (num in nums) {\n    println(num)\n}\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nリスト names の要素を順番に取り出して表示しましょう。\n\n**コード例：**\n```kotlin\nval names = listOf(\"Alice\", \"Bob\")\nfor (name in names) {\n    println(name)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val names = listOf(\"Alice\", \"Bob\")\nfor (name in names) {\n    println(name)\n}",
      "holeyCode": "val names = listOf(\"Alice\", \"Bob\")\nfor (name ___ names) {\n    println(name)\n}",
      "correctLines": [
        "val names = listOf(\"Alice\", \"Bob\")",
        "for (name in names) {",
        "    println(name)",
        "}"
      ],
      "lineHints": [
        null,
        "for (要素 in リスト) の形式で記述します。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "in",
          "for"
        ],
        "variables": [
          "name",
          "names"
        ],
        "functions": [
          "println"
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
      "description": "処理をまとめる「関数」の定義と呼び出し方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "関数の定義",
          "content": "# funキーワード\n\n関数は `fun` キーワードを使って定義します。\n\n```kotlin\nfun greet() {\n    println(\"Hello\")\n}\n\ngreet() // 呼び出し\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`Hello` と表示する関数 `sayHello` を定義し、呼び出してみましょう。\n\n**コード例：**\n```kotlin\nfun sayHello() {\n    println(\"Hello\")\n}\nsayHello()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun sayHello() {\n    println(\"Hello\")\n}\nsayHello()",
      "holeyCode": "___ sayHello() {\n    println(\"Hello\")\n}\n___()",
      "correctLines": [
        "fun sayHello() {",
        "    println(\"Hello\")",
        "}",
        "sayHello()"
      ],
      "lineHints": [
        "関数定義のキーワードは fun です。",
        null,
        null,
        "定義した関数名 sayHello を呼び出します。"
      ],
      "candidates": {
        "keywords": [
          "fun"
        ],
        "functions": [
          "sayHello",
          "println"
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
      "title": "クラスの基本",
      "description": "オブジェクト指向の基本であるクラスの使い方を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "クラスとインスタンス",
          "content": "# クラスの定義\n\n```kotlin\nclass User(val name: String)\n```\n\n# インスタンス化\n\n```kotlin\nval user = User(\"Alice\")\nprintln(user.name)\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nname プロパティを持つ `User` クラスを定義し、インスタンスを作成して name を表示しましょう。\n\n**コード例：**\n```kotlin\nclass User(val name: String)\nval user = User(\"Alice\")\nprintln(user.name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class User(val name: String)\nval user = User(\"Alice\")\nprintln(user.name)",
      "holeyCode": "class User(val name: String)\nval user = ___(\"Alice\")\nprintln(user.___)",
      "correctLines": [
        "class User(val name: String)",
        "val user = User(\"Alice\")",
        "println(user.name)"
      ],
      "lineHints": [
        null,
        "クラス名 User を使ってインスタンスを作ります。",
        "user変数の name プロパティにアクセスします。"
      ],
      "candidates": {
        "keywords": [
          "class"
        ],
        "variables": [
          "user",
          "name"
        ],
        "functions": [
          "User",
          "println"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    }
  ]
}
