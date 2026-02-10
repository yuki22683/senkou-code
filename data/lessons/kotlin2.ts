export const kotlin2Data = {
  "language": "kotlin",
  "lessonId": "kotlin-2",
  "lessonTitle": "Kotlin II - Null安全とラムダ",
  "lessonDescription": "KotlinのNull安全機能とラムダ式を学びます。Androidアプリ開発に必要なモダンな記法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "Null安全について学ぼう",
      "content": "**Null（ヌル）** とは「何もない」を表す特別な値です。\\n\\nKotlinでは、変数が**nullになりうるか**を型で明示します。\\n\\n```kotlin\\n// nullを許容しない型\\nvar name: String = \"太郎\"\\n\\n// ?を付けるとnullを許容\\nvar nickname: String? = null\\n```\\n\\n`?` を付けた型を「nullable型」と呼びます。"
    },
    {
      "title": "セーフコール演算子 ?.",
      "content": "nullable型のプロパティやメソッドに安全にアクセスするには `?.` を使います。\\n\\n```kotlin\\nval text: String? = \"こんにちは\"\\nprintln(text?.length)  // => 5\\n\\nval empty: String? = null\\nprintln(empty?.length)  // => null（エラーにならない）\\n```\\n\\n`?.` を使うと、値がnullの場合はnullを返し、エラーを防げます。"
    },
    {
      "title": "エルビス演算子 ?:",
      "content": "nullの場合にデフォルト値を指定するには `?:` を使います。\\n\\n```kotlin\\nval value: Int? = null\\nprintln(value ?: 0)  // => 0\\n\\nval num: Int? = 42\\nprintln(num ?: 0)  // => 42\\n```\\n\\n`?:` の左側がnullなら右側の値が使われます。\\n\\n形が歌手エルビスの髪型に似ていることから「エルビス演算子」と呼ばれます。"
    },
    {
      "title": "データクラス",
      "content": "`data class` を使うと、データを持つクラスを簡単に作れます。\\n\\n```kotlin\\ndata class User(val name: String, val age: Int)\\n\\nval user = User(\"太郎\", 20)\\nprintln(user)  // => User(name=太郎, age=20)\\n```\\n\\nデータクラスには自動で以下が生成されます：\\n- `toString()` - 見やすい文字列表現\\n- `equals()` - 値の比較\\n- `copy()` - コピーの作成"
    },
    {
      "title": "ラムダ式",
      "content": "**ラムダ式**は関数を短く書く記法です。\\n\\n```kotlin\\n// 通常の関数\\nfun double(n: Int) = n * 2\\n\\n// ラムダ式\\nval double = { n: Int -> n * 2 }\\n\\nprintln(double(5))  // => 10\\n```\\n\\n`{ 引数 -> 処理 }` の形で書きます。\\n\\nラムダ式は変数に代入したり、他の関数に渡したりできます。"
    },
    {
      "title": "コレクション操作（map / filter）",
      "content": "`map` と `filter` でコレクションを変換・抽出できます。\\n\\n```kotlin\\nval nums = listOf(1, 2, 3, 4, 5)\\n\\n// map: 各要素を変換\\nval doubled = nums.map { it * 2 }\\nprintln(doubled)  // => [2, 4, 6, 8, 10]\\n\\n// filter: 条件に合う要素を抽出\\nval evens = nums.filter { it % 2 == 0 }\\nprintln(evens)  // => [2, 4]\\n```\\n\\n`it` は暗黙の引数名で、各要素を表します。"
    }
  ],
  "exercises": [
    {
      "title": "Null安全を学ぼう",
      "correctCode": "// ? で nullable 型にする\\nvar num: Int? = 42\\n// null チェックをする\\nif (num != null) {\\n    // num を出力する\\n    println(num)\\n}",
      "holeyCode": "// ? で nullable 型にする\\nvar ___: ___? = ___\\n// null チェックをする\\nif (___ != ___) ___\\n    // num を出力する\\n    ___(___)\\n___",
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
          "変数numにnullable型のInt?で42を代入します。",
          null,
          "nullでないかチェックします。",
          null,
          "printlnで出力します。",
          "ブロックを閉じる記号です。"
        ],
        "candidates": {
          "operators": [
            "?"
          ],
          "others": ["42", "null", "println", "num", "}", "Int", "{"]
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
      "holeyCode": "// numに42を代入（nullable型）\\n___ ___: ___? = \"___\"\\n// ?. で安全にプロパティにアクセスする\\n___(___?.___)",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val text: String? = \"こんにちは\"",
          "// ?. で安全にプロパティにアクセスする",
          "println(text?.length)"
        ],
      "lineHints": [
          null,
          "valでtextにnullable型のString?で文字列を代入します。",
          null,
          "?.で安全にlengthプロパティにアクセスします。"
        ],
        "candidates": {
          "operators": [
            "?."
          ],
          "others": ["String", "println", "こんにちは", "val", "text", "length"]
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
      "holeyCode": "// numに42を代入（nullable型）\\n___ ___: ___? = ___\\n// ?: でデフォルト値を指定する\\n___(___ ?: ___)",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val value: Int? = null",
          "// ?: でデフォルト値を指定する",
          "println(value ?: 0)"
        ],
      "lineHints": [
          null,
          "valでvalueにnullable型のInt?でnullを代入します。",
          null,
          "?:でnullの場合のデフォルト値0を指定します。"
        ],
        "candidates": {
          "operators": [
            "?:"
          ],
          "others": ["null", "println", "val", "value", "Int", "0"]
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
      "correctCode": "// Pointデータクラスを定義\\ndata class Point(val x: Int, val y: Int)\\n// Pointを作成（x座標に3, y座標に4）\\nval p = Point(3, 4)\\n// p を出力する\\nprintln(p)",
      "holeyCode": "// Pointデータクラスを定義\\ndata class ___(val ___: ___, val ___: ___)\\n// Pointを作成（x座標に3, y座標に4）\\n___ ___ = ___(___,  ___)\\n// p を出力する\\n___(___)",
      "correctLines": [
          "// Pointデータクラスを定義",
          "data class Point(val x: Int, val y: Int)",
          "// Pointを作成（x座標に3, y座標に4）",
          "val p = Point(3, 4)",
          "// p を出力する",
          "println(p)"
        ],
      "lineHints": [
          null,
          "dataでPointデータクラスを定義します。",
          null,
          "Pointインスタンスを作成します。",
          null,
          "printlnでpを出力します。"
        ],
        "candidates": {
          "keywords": [
            "data"
          ],
          "others": ["Point", "println", "Int", "3", "4", "p", "val", "x", "y"]
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
      "holeyCode": "// nを2倍にするdouble関数を定義\\n___ ___ = { ___: ___ -> ___ * ___ }\\n// double(5) を出力する\\n___(___(___))",
      "correctLines": [
          "// nを2倍にするdouble関数を定義",
          "val double = { n: Int -> n * 2 }",
          "// double(5) を出力する",
          "println(double(5))"
        ],
      "lineHints": [
          null,
          "valでdoubleにラムダ式を代入します。",
          null,
          "printlnでdouble(5)を出力します。"
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": ["double", "2", "println", "val", "n", "Int", "5"]
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
      "holeyCode": "// numsにlistOf(1, 2, 3)を代入\\n___ ___ = ___(___,  ___,  ___)\\n// map で各要素を変換する\\n___ ___ = ___.___ { ___ * ___ }\\n// squared を出力する\\n___(___)",
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
          "valでnumsにlistOfでリストを代入します。",
          null,
          "mapで各要素を2乗します。",
          null,
          "printlnでsquaredを出力します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["listOf", "println", "1", "it", "squared", "val", "nums", "2", "3"]
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
      "holeyCode": "// numsにlistOf(1, 2, 3, 4, 5)を代入\\n___ ___ = ___(___,  ___,  ___,  ___,  ___)\\n// filter で条件に合う要素を抽出する\\n___ ___ = ___.___ { ___ >= ___ }\\n// result を出力する\\n___(___)",
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
          "valでnumsにlistOfでリストを代入します。",
          null,
          "filterで3以上を抽出します。",
          null,
          "printlnでresultを出力します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": ["listOf", "println", "1", "3", "result", "val", "nums", "it", "2", "4", "5"]
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
      "correctCode": "// x に 2 を代入する\\nval x = 2\\n// when で分岐する\\nval result = when (x) {\\n    // 1 の場合\\n    1 -> \"one\"\\n    // 2 の場合\\n    2 -> \"two\"\\n    // その他の場合\\n    else -> \"other\"\\n}\\n// result を出力する\\nprintln(result)",
      "holeyCode": "// x に 2 を代入する\\n___ ___ = ___\\n// when で分岐する\\n___ ___ = when (___) ___\\n    // 1 の場合\\n    ___ -> \"___\"\\n    // 2 の場合\\n    ___ -> \"___\"\\n    // その他の場合\\n    else -> \"___\"\\n___\\n// result を出力する\\n___(___)",
      "correctLines": [
          "// x に 2 を代入する",
          "val x = 2",
          "// when で分岐する",
          "val result = when (x) {",
          "    // 1 の場合",
          "    1 -> \"one\"",
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
          "valでxに2を代入します。",
          null,
          "whenでxの値に応じて分岐します。",
          null,
          "1の場合は\"one\"を返します。",
          null,
          "2の場合は\"two\"を返します。",
          null,
          "その他の場合は\"other\"を返します。",
          "ブロックを閉じる記号です。",
          null,
          "printlnでresultを出力します。"
        ],
        "candidates": {
          "keywords": [
            "when", "else"
          ],
          "others": ["2", "1", "one", "two", "other", "println", "x", "}", "result", "val", "{"]
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
      "holeyCode": "// this でレシーバを参照する\\nfun ___.___() = this * ___\\n// 5.double() を出力する\\n___(___.___())",
      "correctLines": [
          "// this でレシーバを参照する",
          "fun Int.double() = this * 2",
          "// 5.double() を出力する",
          "println(5.double())"
        ],
      "lineHints": [
          null,
          "Int型にdouble拡張関数を定義します。",
          null,
          "printlnで5.double()を出力します。"
        ],
        "candidates": {
          "keywords": [
            "this"
          ],
          "others": ["double", "2", "println", "Int", "5"]
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
      "holeyCode": "// numに42を代入（nullable型）\\n___ ___: ___? = ___\\n// letでit * 2を出力\\n___?.___ { ___(___ * ___) }",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val num: Int? = 42",
          "// letでit * 2を出力",
          "num?.let { println(it * 2) }"
        ],
      "lineHints": [
          null,
          "valでnumにnullable型のInt?で42を代入します。",
          null,
          "letでnullでない場合にprintlnを実行します。"
        ],
        "candidates": {
          "functions": [
            "let"
          ],
          "others": ["42", "2", "val", "num", "Int", "println", "it"]
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
