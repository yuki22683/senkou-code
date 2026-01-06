export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin (コトリン) にちょうせん！",
  "lessonDescription": "Android（アンドロイド）スマホのアプリ作りなどで大人気の言葉「Kotlin（コトリン）」のきほんを学びましょう。新しくて使いやすい機能がたくさんありますよ。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Kotlinを使って画面に「こんにちは」と表示させてみましょう。println（プリント・ライン）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "println を使いましょう",
          "content": "# メッセージを表示します\n\n画面に文字を出して改行（かいぎょう）したいときは、`println()` という名前の関数を使います。カッコの中に表示したいものを入力しましょう。\n\n```kotlin\nprintln(\"表示したい文字\")\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`println()` を使って `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```kotlin\nprintln(\"Hello, World!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Hello, World!と出力する関数\nprintln(\"Hello, World!\")",
      "holeyCode": "// Hello, World!と出力する関数\n___(\"Hello, World!\")",
      "correctLines": [
        "// Hello, World!と出力する関数",
        "println(\"Hello, World!\")"
      ],
      "lineHints": [
        null,
        "関数は println です。 L ではなく 小文字の l（エル）ですよ。"
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
      "title": "一度決めたらずっと使う「はこ」",
      "description": "データをしまっておく「はこ（変数）」を使ってみましょう。Kotlinでは val（バル）というラベルを貼ります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "val を使いましょう",
          "content": "# 変わらない変数\n\n中身をあとから変えずにずっと使うときは、`val` という言葉をつけて「はこ」を作ります。Kotlinは賢いので、中身を見てラベル（型）を自動で判断してくれますよ。\n\n```kotlin\nval name = \"Kotlin\"\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`name` というはこに `\"Kotlin\"` と入れて、そのあとで中身を画面に出してみましょう。\n\n**入力するコードのヒント：**\n```kotlin\nval name = \"Kotlin\"\nprintln(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// name というはこに \"Kotlin\" を入れる\nval name = \"Kotlin\"\n// はこの中身を出す\nprintln(name)",
      "holeyCode": "// name というはこに \"Kotlin\" を入れる\n___ name = \"Kotlin\"\n// はこの中身を出す\nprintln(___)",
      "correctLines": [
        "// name というはこに \"Kotlin\" を入れる",
        "val name = \"Kotlin\"",
        "// はこの中身を出す",
        "println(name)"
      ],
      "lineHints": [
        null,
        "変わらないはこを作るには `val` と入力しましょう。",
        null,
        "はこ の名前 name を指定します。"
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
      "title": "コンピュータで計算しましょう",
      "description": "Kotlinを使って、たし算やかかけ算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nKotlinでも、こんな記号を使って計算をしますよ。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算（× のかわり）\n- **/** : わり算（÷ のかわり）"
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
        "かけ算なので `*` を入力します。"
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
      "title": "文章の中に「はこ」を入れましょう",
      "description": "$（ドル記号）を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "$（ダラー）を使いましょう",
          "content": "# 文字列テンプレート\n\n`\" \"` で囲んだ文章の中で `$ はこの名前` と入力すると、中身を文章に入れられますよ。\n\n**コード例：**\n```kotlin\nval age = 10\nprintln(\"私は $age 歳です\")\n```"
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
        "$age と入力して、はこ の中身を文章に入れます。"
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
      "title": "データをならべる「リスト」",
      "description": "たくさんのデータを一つの「長い はこ」にまとめて入れられる「リスト」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "listOf（リスト・オブ）関数",
          "content": "# [ ]（しかくい かっこ）を使います\n\nリストの中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```kotlin\nval items = listOf(\"あか\", \"あお\")\nprintln(items[0]) // 「あか」が表示されます\n```"
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
        "2番目のデータの番号は 1 です。 `fruits[1]` と入力してください。"
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
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。 if（イフ）を使います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# ( ) と { } を使いましょう\n\nKotlinでは、`if (条件)` のあとに `{ }` を入力して、その中にやりたいことを入力します。\n\n**コード例：**\n```kotlin\nif (score > 80) {\n    println(\"合格！\")\n}\n```"
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
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "elseブロック",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```kotlin\nif (score >= 60) {\n    println(\"Pass\")\n} else {\n    println(\"Fail\")\n}\n```"
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
        "そうでなければ、をあらわす `else` を入力しましょう。",
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
      "title": "中身を全部出してみましょう",
      "description": "for ループを使って、リストの中身を一つずつ順番に表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "in を使いましょう",
          "content": "# 全部取り出します\n\n`for (名前 in リスト)` と入力すると、中身を一つずつ取り出して処理できます。\n\n**コード例：**\n```kotlin\nval nums = listOf(1, 2, 3)\nfor (num in nums) {\n    println(num)\n}\n```"
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
        "「〜の中で」をあらわす `in` キーワードを入力します。",
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
      "title": "自分だけの関数を作りましょう",
      "description": "よく使う手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "fun と名前",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。 Kotlinでは `fun` という言葉を使います。\n\n**コード例：**\n```kotlin\nfun aisatsu() {\n    println(\"こんにちは\")\n}\naisatsu() // 呼び出し\n```"
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
        "関数を定義するための言葉 `fun` と入力します。",
        null,
        "関数の終わりです。",
        "関数名 `sayHello` を入力して、実行します。"
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
      "title": "同じ種類をまとめる「クラス」",
      "description": "「名前」などのデータを持つ、自分だけの新しい種類（クラス）を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "class と名前",
          "content": "# データの設計図\n\n`class` という言葉を使うと、どんなデータを持っているかのルールを自分で決められます。それを使って実際に作ったものを「インスタンス」と呼びますよ。\n\n**コード例：**\n```kotlin\nclass User(val name: String)\nval user = User(\"Alice\")\nprintln(user.name)\n```"
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
        "User という名前のクラス（設計図）です。",
        "User クラスから、実際にひとつのデータ（インスタンス）を作ります。",
        "user の中の `name` というデータを取り出して表示させます。"
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