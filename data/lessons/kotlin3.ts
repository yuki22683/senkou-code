export const kotlin3Data = {
  "language": "kotlin",
  "lessonId": "kotlin-3",
  "lessonTitle": "Kotlin III - コルーチンとDSL",
  "lessonDescription": "Kotlinの高度な機能を学びます。コルーチン、シーケンス、DSLなどモダンKotlinを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "コルーチンとは",
      "content": "**コルーチン**は、非同期処理を簡潔に書ける仕組みです。\\n\\n```kotlin\\nimport kotlinx.coroutines.*\\n\\nsuspend fun fetchData(): String {\\n    delay(1000)  // 1秒待機\\n    return \"データ\"\\n}\\n\\nfun main() = runBlocking {\\n    val data = fetchData()\\n    println(data)\\n}\\n```\\n\\n`suspend` を付けた関数は「中断可能」になり、待機中に他の処理ができます。"
    },
    {
      "title": "シーケンス（遅延評価）",
      "content": "**シーケンス**は要素を必要なときだけ計算する仕組みです。\\n\\n```kotlin\\n// 無限シーケンス\\nval nums = generateSequence(1) { it + 1 }\\n\\n// 最初の5個だけ取得\\nprintln(nums.take(5).toList())\\n// => [1, 2, 3, 4, 5]\\n```\\n\\n大量のデータや無限のデータを効率的に処理できます。"
    },
    {
      "title": "inline関数",
      "content": "`inline` を付けた関数は、呼び出し箇所にコードが展開されます。\\n\\n```kotlin\\ninline fun measure(action: () -> Unit) {\\n    val start = System.currentTimeMillis()\\n    action()\\n    println(\"実行時間: ${System.currentTimeMillis() - start}ms\")\\n}\\n\\nmeasure {\\n    Thread.sleep(100)\\n}\\n```\\n\\nラムダを受け取る関数を `inline` にすると、パフォーマンスが向上します。"
    },
    {
      "title": "reified型パラメータ",
      "content": "`reified` を使うと、実行時に型情報を利用できます。\\n\\n```kotlin\\ninline fun <reified T> isType(value: Any): Boolean {\\n    return value is T\\n}\\n\\nprintln(isType<String>(\"テスト\"))  // => true\\nprintln(isType<Int>(\"テスト\"))     // => false\\n```\\n\\n通常のジェネリクスでは消去される型情報が保持されます。\\n\\n`reified` は `inline` 関数でのみ使用可能です。"
    },
    {
      "title": "スコープ関数（apply / also）",
      "content": "スコープ関数を使うと、オブジェクトの設定を簡潔に書けます。\\n\\n```kotlin\\n// apply: オブジェクト自身を返す\\nval config = Config().apply {\\n    host = \"localhost\"\\n    port = 8080\\n}\\n\\n// also: 副作用を実行してオブジェクトを返す\\nval num = 42.also { println(\"値: $it\") }\\n```\\n\\n`apply` はオブジェクトの設定に、`also` はログ出力などに便利です。"
    },
    {
      "title": "スコープ関数（run / let）",
      "content": "`run` と `let` は処理結果を返すスコープ関数です。\\n\\n```kotlin\\n// run: ブロックの結果を返す\\nval length = \"Hello World\".run {\\n    split(\" \").size\\n}\\nprintln(length)  // => 2\\n\\n// let: nullableとの組み合わせ\\nval num: Int? = 42\\nnum?.let { println(it * 2) }  // => 84\\n```\\n\\n`let` は特にnullチェックとの組み合わせでよく使われます。"
    }
  ],
  "exercises": [
    {
      "title": "suspend 関数",
      "correctCode": "// coroutines をインポートする\\nimport kotlinx.coroutines.*\\n\\n// getMessage関数をsuspendで定義\\nsuspend fun getMessage(): String {\\n    // 100ミリ秒待機する\\n    delay(100)\\n    // \"Hello\" を返す\\n    return \"こんにちは\"\\n}\\n\\n// main 関数を定義する\\nfun main() = runBlocking {\\n    // getMessage() を出力する\\n    println(getMessage())\\n}",
      "holeyCode": "// coroutines をインポートする\\n___ ___.___.___\\n___\\n// getMessage関数をsuspendで定義\\n___ ___ ___(): ___ {\\n    // 100ミリ秒待機する\\n    ___(___)\\n    // \"Hello\" を返す\\n    ___ \"___\"\\n___\\n___\\n// main 関数を定義する\\n___ ___() = ___ {\\n    // getMessage() を出力する\\n    ___(___(___))\\n___",
      "correctLines": [
          "// coroutines をインポートする",
          "import kotlinx.coroutines.*",
          "",
          "// getMessage関数をsuspendで定義",
          "suspend fun getMessage(): String {",
          "    // 100ミリ秒待機する",
          "    delay(100)",
          "    // \"Hello\" を返す",
          "    return \"こんにちは\"",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() = runBlocking {",
          "    // getMessage() を出力する",
          "    println(getMessage())",
          "}"
        ],
      "lineHints": [
          null,
          "importでライブラリを読み込みます。",
          null,
          null,
          "suspendで中断可能な関数を定義します。",
          null,
          "delayで待機します。",
          null,
          "returnで値を返します。",
          "関数やブロックを閉じる括弧です。",
          null,
          null,
          "funでメイン関数を定義します。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "keywords": [
            "suspend",
            "async",
            "await",
            "fun",
            "return"
          ],
          "others": ["import", "kotlinx", "coroutines", "*", "getMessage", "String", "delay", "100", "こんにちは", "}", "", "main", "runBlocking", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "sequence（シーケンス）",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // generateSequence で無限シーケンスを生成する\\n    val nums = generateSequence(1) { it * 2 }\\n        // 4つ取得する\\n        .take(4)\\n        // リストに変換する\\n        .toList()\\n    // nums を出力する\\n    println(nums)\\n}",
      "holeyCode": "// main 関数を定義する\\n___ ___() {\\n    // generateSequence で無限シーケンスを生成する\\n    ___ ___ = ___(___) { ___ * ___ }\\n        // 4つ取得する\\n        .___(___)\\n        // リストに変換する\\n        .___()\\n    // nums を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // generateSequence で無限シーケンスを生成する",
          "    val nums = generateSequence(1) { it * 2 }",
          "        // 4つ取得する",
          "        .take(4)",
          "        // リストに変換する",
          "        .toList()",
          "    // nums を出力する",
          "    println(nums)",
          "}"
        ],
      "lineHints": [
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、generateSequenceで無限シーケンスを生成します。",
          null,
          "takeで指定した数だけ取得します。",
          null,
          "toListでリストに変換します。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "functions": [
            "generateSequence",
            "sequence",
            "listOf"
          ],
          "others": ["fun", "main", "val", "nums", "1", "it", "2", "take", "4", "toList", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 2, 4, 8]\\n"
          }
        ]
      },
    {
      "title": "inline 関数",
      "correctCode": "// repeat関数をinlineで定義\\ninline fun repeat(times: Int, action: (Int) -> Unit) {\\n    // 0 から times まで繰り返す\\n    for (i in 0 until times) action(i)\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // repeat を呼び出す\\n    repeat(3) { println(it) }\\n}",
      "holeyCode": "// repeat関数をinlineで定義\\n___ ___ ___(___: ___, ___: (___) -> ___) {\\n    // 0 から times まで繰り返す\\n    for (___ in ___ ___ ___) ___(___)\\n___\\n___\\n// main 関数を定義する\\n___ ___() {\\n    // repeat を呼び出す\\n    ___(___) { ___(___) }\\n___",
      "correctLines": [
          "// repeat関数をinlineで定義",
          "inline fun repeat(times: Int, action: (Int) -> Unit) {",
          "    // 0 から times まで繰り返す",
          "    for (i in 0 until times) action(i)",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // repeat を呼び出す",
          "    repeat(3) { println(it) }",
          "}"
        ],
      "lineHints": [
          null,
          "inlineで関数をインライン化します。",
          null,
          "forで繰り返し処理を行います。",
          "関数やブロックを閉じる括弧です。",
          null,
          null,
          "funでメイン関数を定義します。",
          null,
          "repeat関数を呼び出します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "keywords": [
            "inline",
            "noinline",
            "crossinline",
            "fun",
            "for",
            "in"
          ],
          "others": ["repeat", "times", "Int", "action", "Unit", "i", "0", "until", "}", "", "main", "3", "println", "it"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n1\\n2\\n"
          }
        ]
      },
    {
      "title": "reified 型パラメータ",
      "correctCode": "// checkType関数をreifiedで定義\\ninline fun <reified T> checkType(value: Any): Boolean {\\n    // value が T 型かチェックする\\n    return value is T\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // String 型かチェックする\\n    println(checkType<String>(\"テスト\"))\\n    // Int 型かチェックする\\n    println(checkType<Int>(\"テスト\"))\\n}",
      "holeyCode": "// checkType関数をreifiedで定義\\n___ ___ <___ ___> ___(___: ___): ___ {\\n    // value が T 型かチェックする\\n    ___ ___ ___ ___\\n___\\n___\\n// main 関数を定義する\\n___ ___() {\\n    // String 型かチェックする\\n    ___(___<___>(\"___\"))\\n    // Int 型かチェックする\\n    ___(___<___>(\"___\"))\\n___",
      "correctLines": [
          "// checkType関数をreifiedで定義",
          "inline fun <reified T> checkType(value: Any): Boolean {",
          "    // value が T 型かチェックする",
          "    return value is T",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // String 型かチェックする",
          "    println(checkType<String>(\"テスト\"))",
          "    // Int 型かチェックする",
          "    println(checkType<Int>(\"テスト\"))",
          "}"
        ],
      "lineHints": [
          null,
          "inlineとreifiedで実行時に型情報を使えます。",
          null,
          "returnとisで型チェック結果を返します。",
          "関数やブロックを閉じる括弧です。",
          null,
          null,
          "funでメイン関数を定義します。",
          null,
          "printlnでString型チェック結果を出力します。",
          null,
          "printlnでInt型チェック結果を出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "keywords": [
            "reified",
            "inline",
            "fun",
            "return",
            "is"
          ],
          "others": ["T", "checkType", "value", "Any", "Boolean", "}", "", "main", "println", "String", "テスト", "Int"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\nfalse\\n"
          }
        ]
      },
    {
      "title": "apply スコープ関数",
      "correctCode": "// data class を定義する\\ndata class Config(var host: String = \"\", var port: Int = 0)\\n\\n// main 関数を定義する\\nfun main() {\\n    // apply で設定してオブジェクトを返す\\n    val cfg = Config().apply {\\n        // hostを設定する\\n        host = \"localhost\"\\n        // portを設定する\\n        port = 8080\\n    }\\n    // cfg を出力する\\n    println(cfg)\\n}",
      "holeyCode": "// data class を定義する\\n___ ___ ___(var ___: ___ = \"\", var ___: ___ = ___)\\n___\\n// main 関数を定義する\\n___ ___() {\\n    // apply で設定してオブジェクトを返す\\n    ___ ___ = ___().___ {\\n        // hostを設定する\\n        ___ = \"___\"\\n        // portを設定する\\n        ___ = ___\\n    ___\\n    // cfg を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// data class を定義する",
          "data class Config(var host: String = \"\", var port: Int = 0)",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // apply で設定してオブジェクトを返す",
          "    val cfg = Config().apply {",
          "        // hostを設定する",
          "        host = \"localhost\"",
          "        // portを設定する",
          "        port = 8080",
          "    }",
          "    // cfg を出力する",
          "    println(cfg)",
          "}"
        ],
      "lineHints": [
          null,
          "data classでConfigクラスを定義します。",
          null,
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、applyで設定します。",
          null,
          "hostにlocalhostを設定します。",
          null,
          "portに8080を設定します。",
          "ブロックを閉じる括弧です。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "methods": [
            "apply",
            "also",
            "run"
          ],
          "others": ["data", "class", "Config", "host", "String", "port", "Int", "0", "", "fun", "main", "val", "cfg", "localhost", "8080", "}", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Config(host=localhost, port=8080)\\n"
          }
        ]
      },
    {
      "title": "also スコープ関数",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // also で副作用を実行してオブジェクトを返す\\n    val num = 42.also {\\n        // 値を出力する\\n        println(\"Value: $it\")\\n    }\\n    // num を出力する\\n    println(num)\\n}",
      "holeyCode": "// main 関数を定義する\\n___ ___() {\\n    // also で副作用を実行してオブジェクトを返す\\n    ___ ___ = ___.___ {\\n        // 値を出力する\\n        ___(\"___: $___\")\\n    ___\\n    // num を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // also で副作用を実行してオブジェクトを返す",
          "    val num = 42.also {",
          "        // 値を出力する",
          "        println(\"Value: $it\")",
          "    }",
          "    // num を出力する",
          "    println(num)",
          "}"
        ],
      "lineHints": [
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、alsoで副作用を実行します。",
          null,
          "printlnで値を出力します。",
          "ブロックを閉じる括弧です。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "methods": [
            "also",
            "apply",
            "let"
          ],
          "others": ["fun", "main", "val", "num", "42", "also", "println", "Value", "it", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Value: 42\\n42\\n"
          }
        ]
      },
    {
      "title": "run スコープ関数",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // run でブロックを実行して結果を返す\\n    val result = \"Hello World\".run {\\n        // スペースで分割してサイズを取得する\\n        split(\" \").size\\n    }\\n    // result を出力する\\n    println(result)\\n}",
      "holeyCode": "// main 関数を定義する\\n___ ___() {\\n    // run でブロックを実行して結果を返す\\n    ___ ___ = \"___ ___\".___ {\\n        // スペースで分割してサイズを取得する\\n        ___(\"___\").___\\n    ___\\n    // result を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // run でブロックを実行して結果を返す",
          "    val result = \"Hello World\".run {",
          "        // スペースで分割してサイズを取得する",
          "        split(\" \").size",
          "    }",
          "    // result を出力する",
          "    println(result)",
          "}"
        ],
      "lineHints": [
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、runでブロックを実行します。",
          null,
          "splitでスペース区切りで分割し、sizeを取得します。",
          "ブロックを閉じる括弧です。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "methods": [
            "run",
            "let",
            "with"
          ],
          "others": ["fun", "main", "val", "result", "Hello", "World", "split", " ", "size", "}", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "takeIf と takeUnless",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // takeIf で条件を満たせば値を返す\\n    val num = 10.takeIf { it > 5 }\\n    // num を出力する\\n    println(num)\\n}",
      "holeyCode": "// main 関数を定義する\\n___ ___() {\\n    // takeIf で条件を満たせば値を返す\\n    ___ ___ = ___.___ { ___ > ___ }\\n    // num を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // takeIf で条件を満たせば値を返す",
          "    val num = 10.takeIf { it > 5 }",
          "    // num を出力する",
          "    println(num)",
          "}"
        ],
      "lineHints": [
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、takeIfで条件を満たせば値を返します。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "methods": [
            "takeIf",
            "takeUnless",
            "filter"
          ],
          "others": ["fun", "main", "val", "num", "10", "it", "5", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "groupBy",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // numsにlistOf(1, 2, 3, 4, 5)を代入\\n    val nums = listOf(1, 2, 3, 4, 5)\\n    // groupBy でグループ化する\\n    val grouped = nums.groupBy { it % 2 }\\n    // grouped を出力する\\n    println(grouped)\\n}",
      "holeyCode": "// main 関数を定義する\\n___ ___() {\\n    // numsにlistOf(1, 2, 3, 4, 5)を代入\\n    ___ ___ = ___(___,___, ___,___, ___)\\n    // groupBy でグループ化する\\n    ___ ___ = ___.___ { ___ % ___ }\\n    // grouped を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // numsにlistOf(1, 2, 3, 4, 5)を代入",
          "    val nums = listOf(1, 2, 3, 4, 5)",
          "    // groupBy でグループ化する",
          "    val grouped = nums.groupBy { it % 2 }",
          "    // grouped を出力する",
          "    println(grouped)",
          "}"
        ],
      "lineHints": [
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、listOfでリストを作成します。",
          null,
          "valで変数を宣言し、groupByでグループ化します。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "methods": [
            "groupBy",
            "partition",
            "associate"
          ],
          "others": ["fun", "main", "val", "nums", "listOf", "1", "2", "3", "4", "5", "grouped", "it", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{1=[1, 3, 5], 0=[2, 4]}\\n"
          }
        ]
      },
    {
      "title": "fold と reduce",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // numsにlistOf(1, 2, 3, 4)を代入\\n    val nums = listOf(1, 2, 3, 4)\\n    // fold で畳み込む\\n    val product = nums.fold(1) { acc, n -> acc * n }\\n    // product を出力する\\n    println(product)\\n}",
      "holeyCode": "// main 関数を定義する\\n___ ___() {\\n    // numsにlistOf(1, 2, 3, 4)を代入\\n    ___ ___ = ___(___,___, ___,___)\\n    // fold で畳み込む\\n    ___ ___ = ___.___(___) { ___,___ -> ___ * ___ }\\n    // product を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // numsにlistOf(1, 2, 3, 4)を代入",
          "    val nums = listOf(1, 2, 3, 4)",
          "    // fold で畳み込む",
          "    val product = nums.fold(1) { acc, n -> acc * n }",
          "    // product を出力する",
          "    println(product)",
          "}"
        ],
      "lineHints": [
          null,
          "funでメイン関数を定義します。",
          null,
          "valで変数を宣言し、listOfでリストを作成します。",
          null,
          "valで変数を宣言し、foldで畳み込みます。",
          null,
          "printlnで出力します。",
          "関数やブロックを閉じる括弧です。"
        ],
        "candidates": {
          "methods": [
            "fold",
            "reduce",
            "aggregate"
          ],
          "others": ["fun", "main", "val", "nums", "listOf", "1", "2", "3", "4", "product", "fold", "acc", "n", "println", "}", ">", "c"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "24\\n"
          }
        ]
      }
  ]
}
