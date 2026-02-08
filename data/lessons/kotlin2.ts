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
      "correctCode": "// ? で nullable 型にする\\nvar num: Int? = 42\\n// null チェックをする\\nif (num != null) {\\n    // num を出力する\\n    println(num)\\n}",
      "holeyCode": "// ? で nullable 型にする\\nvar num: Int? = ___\\n// null チェックをする\\nif (num != ___) {\\n    // num を出力する\\n    println(___)\\n___",
      "correctLines": [
          "// ? で nullable 型にする",
          "var num: Int? = 42",
          "// null チェックをする",
          "if (num != null) {",
          "    // num を出力する",
          "    println(num)",
          "}"
        ],
      "lineHints": [
          null,
          "? で nullable 型にします。",
          null,
          "null チェックをします。",
          null,
          "println で出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "?"
          ],
          "others": ["42", "null", "println", "num", "}", "42"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "セーフコール演算子 ?.",
      "correctCode": "// numに42を代入（nullable型）\\nval text: String? = \"こんにちは\"\\n// ?. で安全にプロパティにアクセスする\\nprintln(text?.length)",
      "holeyCode": "// numに42を代入（nullable型）\\n___ text: String? = \"___\"\\n// ?. で安全にプロパティにアクセスする\\n___(text?.length)",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val text: String? = \"こんにちは\"",
          "// ?. で安全にプロパティにアクセスする",
          "println(text?.length)"
        ],
      "lineHints": [
          null,
          "型名の後に ? をつけると nullable 型になります。",
          null,
          "?. で安全にアクセスします。"
        ],
        "candidates": {
          "operators": [
            "?."
          ],
          "others": ["String", "Hello", "println", "こんにちは", "val"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "エルビス演算子 ?:",
      "correctCode": "// numに42を代入（nullable型）\\nval value: Int? = null\\n// ?: でデフォルト値を指定する\\nprintln(value ?: 0)",
      "holeyCode": "// numに42を代入（nullable型）\\nval value: Int? = ___\\n// ?: でデフォルト値を指定する\\n___(value ?: 0)",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val value: Int? = null",
          "// ?: でデフォルト値を指定する",
          "println(value ?: 0)"
        ],
      "lineHints": [
          null,
          "null を入力しましょう。",
          null,
          "?: でデフォルト値を指定します。"
        ],
        "candidates": {
          "operators": [
            "?:"
          ],
          "others": ["null", "println", "null"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n"
          }
        ]
      },
    {
      "title": "データクラスを使おう",
      "correctCode": "// Pointデータクラスを定義\\ndata class Point(val x: Int, val y: Int)\\n// Point のインスタンスを作成する\\nval p = Point(3, 4)\\n// p を出力する\\nprintln(p)",
      "holeyCode": "// Pointデータクラスを定義\\ndata class Point(val x: ___, val y: Int)\\n// Point のインスタンスを作成する\\nval p = Point(___, 4)\\n// p を出力する\\nprintln(___)",
      "correctLines": [
          "// Pointデータクラスを定義",
          "data class Point(val x: Int, val y: Int)",
          "// Point のインスタンスを作成する",
          "val p = Point(3, 4)",
          "// p を出力する",
          "println(p)"
        ],
      "lineHints": [
          null,
          "data でデータクラスにします。",
          null,
          "Point と入力しましょう。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "data"
          ],
          "others": ["Point", "println", "Int", "3", "p"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Point(x=3, y=4)\\n"
          }
        ]
      },
    {
      "title": "ラムダ式を使おう",
      "correctCode": "// nを2倍にするdouble関数を定義\\nval double = { n: Int -> n * 2 }\\n// double(5) を出力する\\nprintln(double(5))",
      "holeyCode": "// nを2倍にするdouble関数を定義\\nval double = { n: Int -> n * ___ }\\n// double(5) を出力する\\n___(double(5))",
      "correctLines": [
          "// nを2倍にするdouble関数を定義",
          "val double = { n: Int -> n * 2 }",
          "// double(5) を出力する",
          "println(double(5))"
        ],
      "lineHints": [
          null,
          "-> で引数と処理を区切ります。",
          null,
          "double と入力しましょう。"
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": ["double", "2", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "map で変換しよう",
      "correctCode": "// numsにlistOf(1, 2, 3)を代入\\nval nums = listOf(1, 2, 3)\\n// map で各要素を変換する\\nval squared = nums.map { it * it }\\n// squared を出力する\\nprintln(squared)",
      "holeyCode": "// numsにlistOf(1, 2, 3)を代入\\nval nums = listOf(___, 2, 3)\\n// map で各要素を変換する\\nval squared = nums.map { ___ * it }\\n// squared を出力する\\nprintln(___)",
      "correctLines": [
          "// numsにlistOf(1, 2, 3)を代入",
          "val nums = listOf(1, 2, 3)",
          "// map で各要素を変換する",
          "val squared = nums.map { it * it }",
          "// squared を出力する",
          "println(squared)"
        ],
      "lineHints": [
          null,
          "listOf と入力しましょう。",
          null,
          "map で各要素を2乗します。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["listOf", "println", "1", "it", "squared"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 4, 9]\\n"
          }
        ]
      },
    {
      "title": "filter で絞り込もう",
      "correctCode": "// numsにlistOf(1, 2, 3, 4, 5)を代入\\nval nums = listOf(1, 2, 3, 4, 5)\\n// filter で条件に合う要素を抽出する\\nval result = nums.filter { it >= 3 }\\n// result を出力する\\nprintln(result)",
      "holeyCode": "// numsにlistOf(1, 2, 3, 4, 5)を代入\\nval nums = listOf(___, 2, 3, 4, 5)\\n// filter で条件に合う要素を抽出する\\nval result = nums.filter { it >= ___ }\\n// result を出力する\\nprintln(___)",
      "correctLines": [
          "// numsにlistOf(1, 2, 3, 4, 5)を代入",
          "val nums = listOf(1, 2, 3, 4, 5)",
          "// filter で条件に合う要素を抽出する",
          "val result = nums.filter { it >= 3 }",
          "// result を出力する",
          "println(result)"
        ],
      "lineHints": [
          null,
          "listOf と入力しましょう。",
          null,
          "filter で 3 以上を抽出します。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": ["listOf", "println", "1", "3", "result"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 4, 5]\\n"
          }
        ]
      },
    {
      "title": "when 式を使おう",
      "correctCode": "// x に 2 を代入する\\nval x = 2\\n// when で分岐する\\nval result = when (x) {\\n    // 1 の場合\\n    ___ -> \"one\"\\n    // 2 の場合\\n    2 -> \"two\"\\n    // その他の場合\\n    else -> \"other\"\\n}\\n// result を出力する\\nprintln(result)",
      "holeyCode": "// x に 2 を代入する\\nval x = ___\\n// when で分岐する\\nval result = when (___) {\\n    // 1 の場合\\n    ___ -> \"___\"\\n    // 2 の場合\\n    2 -> \"___\"\\n    // その他の場合\\n    else -> \"___\"\\n___\\n// result を出力する\\nprintln(___)",
      "correctLines": [
          "// x に 2 を代入する",
          "val x = 2",
          "// when で分岐する",
          "val result = when (x) {",
          "    // 1 の場合",
          "    ___ -> \"one\"",
          "    // 2 の場合",
          "    2 -> \"two\"",
          "    // その他の場合",
          "    else -> \"other\"",
          "}",
          "// result を出力する",
          "println(result)"
        ],
      "lineHints": [
          null,
          "2 と入力しましょう。",
          null,
          "when で分岐します。",
          null,
          "one と入力しましょう。",
          null,
          "two と入力しましょう。",
          null,
          "other と入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "when"
          ],
          "others": ["2", "one", "two", "other", "println", "x", "}", "result", "2", "}", "___"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "two\\n"
          }
        ]
      },
    {
      "title": "拡張関数を作ろう",
      "correctCode": "// this でレシーバを参照する\\nfun Int.double() = this * 2\\n// 5.double() を出力する\\nprintln(5.double())",
      "holeyCode": "// this でレシーバを参照する\\nfun Int.double() = this * ___\\n// 5.double() を出力する\\n___(5.double())",
      "correctLines": [
          "// this でレシーバを参照する",
          "fun Int.double() = this * 2",
          "// 5.double() を出力する",
          "println(5.double())"
        ],
      "lineHints": [
          null,
          "this でレシーバを参照します。",
          null,
          "double と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "this"
          ],
          "others": ["double", "2", "println", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "スコープ関数 let",
      "correctCode": "// numに42を代入（nullable型）\\nval num: Int? = 42\\n// letでit * 2を出力\\nnum?.let { println(it * 2) }",
      "holeyCode": "// numに42を代入（nullable型）\\nval num: Int? = ___\\n// letでit * 2を出力\\nnum?.let { println(it * ___) }",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val num: Int? = 42",
          "// letでit * 2を出力",
          "num?.let { println(it * 2) }"
        ],
      "lineHints": [
          null,
          "42 と入力しましょう。",
          null,
          "let で処理を実行します。"
        ],
        "candidates": {
          "functions": [
            "let"
          ],
          "others": ["42", "2", "42"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\\n"
          }
        ]
      }
  ]
}
