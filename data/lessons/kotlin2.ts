export const kotlin2Data = {
  "language": "kotlin",
  "lessonId": "kotlin-2",
  "lessonTitle": "Kotlin II - Null安全とラムダ",
  "lessonDescription": "KotlinのNull安全機能とラムダ式を学びます。Androidアプリ開発に必要なモダンな記法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "Null安全を学ぼう",
      "description": "Kotlinの安全な null 処理を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Null安全とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# NullPointerException を防ぐ\n\nKotlinでは、デフォルトで変数に `null` を入れられません。`?` をつけると null を許可します。"
        },
        {
          "title": "nullable 型",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 型の後に ?\n\n`String?` は null を許可する型です。\n\n**コード例：**\n```kotlin\nvar name: String? = \"Taro\"\nname = null // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var num: Int? = 42\nif (num != null) {\n    println(num)\n}",
      "holeyCode": "// ? で nullable 型にする\nvar num: Int___ = ___\n// null チェックをする\nif (num != ___) {\n    // num を出力する\n    ___(num)\n}",
      "correctLines": [
        "var num: Int? = 42",
        "if (num != null) {",
        "    println(num)",
        "}"
      ],
      "lineHints": [
        "? で nullable 型にします。",
        "null チェックをします。",
        "",
        ""
      ],
      "candidates": {
        "operators": ["?"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "セーフコール演算子 ?.",
      "description": "null かもしれない値を安全に扱う「?.」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "セーフコールとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# null なら null を返す\n\n**?.** は、左側が null なら null を返し、そうでなければプロパティにアクセスします。"
        },
        {
          "title": "?. の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 安全なアクセス\n\nNullPointerException を防げます。\n\n**コード例：**\n```kotlin\nval name: String? = \"hello\"\nprintln(name?.length) // 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val text: String? = \"Hello\"\nprintln(text?.length)",
      "holeyCode": "// nullable 型の変数を宣言する\nval text: ___? = \"Hello\"\n// ?. で安全にプロパティにアクセスする\nprintln(text___length)",
      "correctLines": [
        "val text: String? = \"Hello\"",
        "println(text?.length)"
      ],
      "lineHints": [
        "",
        "?. で安全にアクセスします。"
      ],
      "candidates": {
        "operators": ["?."]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "エルビス演算子 ?:",
      "description": "null の場合のデフォルト値を設定する「?:」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "エルビス演算子とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# null のときの代替値\n\n**?:** は、左側が null なら右側の値を返します。デフォルト値の設定に便利です。"
        },
        {
          "title": "?: の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# シンプルな null 置換\n\n`a ?: b` は、a が null なら b を返します。\n\n**コード例：**\n```kotlin\nval name: String? = null\nprintln(name ?: \"Guest\") // Guest\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val value: Int? = null\nprintln(value ?: 0)",
      "holeyCode": "// nullable 型の変数を宣言する\nval value: Int? = ___\n// ?: でデフォルト値を指定する\nprintln(value ___ 0)",
      "correctLines": [
        "val value: Int? = null",
        "println(value ?: 0)"
      ],
      "lineHints": [
        "",
        "?: でデフォルト値を指定します。"
      ],
      "candidates": {
        "operators": ["?:"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n"
        }
      ]
    },
    {
      "title": "データクラスを使おう",
      "description": "データを保持するための「データクラス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "データクラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# データ用のクラス\n\n**data class** は、equals, hashCode, toString などを自動生成してくれる便利なクラスです。"
        },
        {
          "title": "data class の定義",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# data をつけるだけ\n\n`data class` でデータクラスを定義します。\n\n**コード例：**\n```kotlin\ndata class User(val name: String, val age: Int)\nval u = User(\"Taro\", 20)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "data class Point(val x: Int, val y: Int)\nval p = Point(3, 4)\nprintln(p)",
      "holeyCode": "// data でデータクラスを定義する\n___ class Point(val x: Int, val y: Int)\n// Point のインスタンスを作成する\nval p = ___(3, 4)\n// p を出力する\n___(p)",
      "correctLines": [
        "data class Point(val x: Int, val y: Int)",
        "val p = Point(3, 4)",
        "println(p)"
      ],
      "lineHints": [
        "data でデータクラスにします。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["data"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Point(x=3, y=4)\n"
        }
      ]
    },
    {
      "title": "ラムダ式を使おう",
      "description": "名前のない関数「ラムダ式」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 無名関数\n\n**ラムダ式** は、名前をつけずに定義する関数です。`{ }` で囲んで書きます。"
        },
        {
          "title": "ラムダの書き方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# { 引数 -> 処理 }\n\n`->` の前が引数、後が処理本体です。\n\n**コード例：**\n```kotlin\nval add = { a: Int, b: Int -> a + b }\nprintln(add(2, 3)) // 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val double = { n: Int -> n * 2 }\nprintln(double(5))",
      "holeyCode": "// -> で引数と処理を区切る\nval double = { n: Int ___ n * 2 }\n// double(5) を出力する\nprintln(___(5))",
      "correctLines": [
        ["val double = { n: Int -> n * 2 }", "val double = { n: Int -> 2 * n }"],
        "println(double(5))"
      ],
      "lineHints": [
        "-> で引数と処理を区切ります。",
        ""
      ],
      "candidates": {
        "operators": ["->"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "map で変換しよう",
      "description": "リストの各要素を変換する「map」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を変換\n\n**map** は、リストの各要素にラムダを適用して新しいリストを作ります。"
        },
        {
          "title": "map の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# it で暗黙の引数\n\n引数が1つなら `it` で参照できます。\n\n**コード例：**\n```kotlin\nlistOf(1, 2, 3).map { it * 2 }\n// [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val nums = listOf(1, 2, 3)\nval squared = nums.map { it * it }\nprintln(squared)",
      "holeyCode": "// listOf でリストを作成する\nval nums = ___(1, 2, 3)\n// map で各要素を変換する\nval squared = nums.___ { it * it }\n// squared を出力する\n___(squared)",
      "correctLines": [
        "val nums = listOf(1, 2, 3)",
        "val squared = nums.map { it * it }",
        "println(squared)"
      ],
      "lineHints": [
        "",
        "map で各要素を2乗します。",
        ""
      ],
      "candidates": {
        "functions": ["map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 4, 9]\n"
        }
      ]
    },
    {
      "title": "filter で絞り込もう",
      "description": "条件に合う要素だけを抽出する「filter」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "filter とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件でフィルタ\n\n**filter** は、条件を満たす要素だけを残した新しいリストを作ります。"
        },
        {
          "title": "filter の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 真を返す要素を残す\n\nラムダが真を返す要素だけが残ります。\n\n**コード例：**\n```kotlin\nlistOf(1, 2, 3, 4, 5).filter { it > 3 }\n// [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val nums = listOf(1, 2, 3, 4, 5)\nval result = nums.filter { it >= 3 }\nprintln(result)",
      "holeyCode": "// listOf でリストを作成する\nval nums = ___(1, 2, 3, 4, 5)\n// filter で条件に合う要素を抽出する\nval result = nums.___ { it >= 3 }\n// result を出力する\n___(result)",
      "correctLines": [
        "val nums = listOf(1, 2, 3, 4, 5)",
        "val result = nums.filter { it >= 3 }",
        "println(result)"
      ],
      "lineHints": [
        "",
        "filter で 3 以上を抽出します。",
        ""
      ],
      "candidates": {
        "functions": ["filter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[3, 4, 5]\n"
        }
      ]
    },
    {
      "title": "when 式を使おう",
      "description": "複数の条件分岐を簡潔に書く「when」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "when とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 強力な分岐\n\n**when** は、switch に似た式ですが、より柔軟に条件を書けます。"
        },
        {
          "title": "when の使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 式としても使える\n\n結果を変数に代入できます。\n\n**コード例：**\n```kotlin\nval result = when (x) {\n    1 -> \"one\"\n    2 -> \"two\"\n    else -> \"other\"\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val x = 2\nval result = when (x) {\n    1 -> \"one\"\n    2 -> \"two\"\n    else -> \"other\"\n}\nprintln(result)",
      "holeyCode": "// x に 2 を代入する\nval x = ___\n// when で分岐する\nval result = ___ (x) {\n    // 1 の場合\n    1 -> \"___\"\n    // 2 の場合\n    2 -> \"___\"\n    // その他の場合\n    else -> \"___\"\n}\n// result を出力する\n___(result)",
      "correctLines": [
        "val x = 2",
        "val result = when (x) {",
        "    1 -> \"one\"",
        "    2 -> \"two\"",
        "    else -> \"other\"",
        "}",
        "println(result)"
      ],
      "lineHints": [
        "",
        "when で分岐します。",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["when"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "two\n"
        }
      ]
    },
    {
      "title": "拡張関数を作ろう",
      "description": "既存のクラスに関数を追加する「拡張関数」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "拡張関数とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# クラスに関数を追加\n\n**拡張関数** を使うと、既存のクラスを継承せずにメソッドを追加できます。"
        },
        {
          "title": "拡張関数の定義",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型.関数名()\n\n`fun 型.関数名()` で定義します。`this` でレシーバを参照します。\n\n**コード例：**\n```kotlin\nfun String.hello() = \"Hello, $this\"\n\"World\".hello() // Hello, World\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun Int.double() = this * 2\nprintln(5.double())",
      "holeyCode": "// this でレシーバを参照する\nfun Int.double() = ___ * 2\n// 5.double() を出力する\nprintln(5.___())",
      "correctLines": [
        ["fun Int.double() = this * 2", "fun Int.double() = 2 * this"],
        "println(5.double())"
      ],
      "lineHints": [
        "this でレシーバを参照します。",
        ""
      ],
      "candidates": {
        "keywords": ["this"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "スコープ関数 let",
      "description": "オブジェクトに対して処理を行う「let」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "let とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# スコープ関数\n\n**let** は、オブジェクトに対してラムダを実行し、結果を返します。null チェックと組み合わせると便利です。"
        },
        {
          "title": "?.let の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# null でなければ実行\n\n`?.let { }` で null でない場合のみ処理を実行します。\n\n**コード例：**\n```kotlin\nval name: String? = \"Taro\"\nname?.let { println(it) }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "val num: Int? = 42\nnum?.let { println(it * 2) }",
      "holeyCode": "// nullable 型の変数を宣言する\nval num: Int? = ___\n// let で処理を実行する\nnum?.___ { println(it * 2) }",
      "correctLines": [
        "val num: Int? = 42",
        "num?.let { println(it * 2) }"
      ],
      "lineHints": [
        "",
        "let で処理を実行します。"
      ],
      "candidates": {
        "functions": ["let"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "84\n"
        }
      ]
    }
  ]
}
