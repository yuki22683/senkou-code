export const kotlin3Data = {
  "language": "kotlin",
  "lessonId": "kotlin-3",
  "lessonTitle": "Kotlin III - コルーチンとDSL",
  "lessonDescription": "Kotlinの高度な機能を学びます。コルーチン、シーケンス、DSLなどモダンKotlinを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "suspend 関数",
      "correctCode": "// coroutines をインポートする\\nimport kotlinx.coroutines.*\\n\\n// getMessage関数をsuspendで定義\\nsuspend fun getMessage(): String {\\n    // 100ミリ秒待機する\\n    delay(100)\\n    // \"Hello\" を返す\\n    return \"こんにちは\"\\n}\\n\\n// main 関数を定義する\\nfun main() = runBlocking {\\n    // getMessage() を出力する\\n    println(getMessage())\\n}",
      "holeyCode": "// coroutines をインポートする\\nimport kotlinx.___.*\\n___\\n// getMessage関数をsuspendで定義\\nsuspend fun getMessage(): ___ {\\n    // 100ミリ秒待機する\\n    delay(___)\\n    // \"Hello\" を返す\\n    return \"___\"\\n___\\n___\\n// main 関数を定義する\\nfun main() = ___ {\\n    // getMessage() を出力する\\n    ___(getMessage())\\n___",
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
          "* でワイルドカードインポートします。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "delay で待機します。",
          null,
          "Hello と入力しましょう。",
          "ここを正しく入力してください。",
          null,
          null,
          "main と入力しましょう。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "suspend",
            "async",
            "await"
          ],
          "others": ["*", "delay", "Hello", "main", "println", "coroutines", "String", "100", "}", "runBlocking", "こんにちは", "", "}"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // generateSequence で無限シーケンスを生成する\\n    val nums = generateSequence(___) { it * 2 }\\n        // 4つ取得する\\n        .take(___)\\n        // リストに変換する\\n        .___()\\n    // nums を出力する\\n    println(___)\\n___",
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
          "main と入力しましょう。",
          null,
          "generateSequence で無限シーケンスを生成します。",
          null,
          "4 と入力しましょう。",
          null,
          "toList() と入力しましょう。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "generateSequence",
            "sequence",
            "listOf"
          ],
          "others": ["main", "4", "toList()", "println", "1", "toList", "nums", "}"]
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
      "holeyCode": "// repeat関数をinlineで定義\\ninline fun repeat(times: Int, action: (Int) -> ___) {\\n    // 0 から times まで繰り返す\\n    for (i in ___ until times) action(i)\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // repeat を呼び出す\\n    repeat(___) { println(it) }\\n___",
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
          "inline で関数をインライン化します。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          "main と入力しましょう。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "inline",
            "noinline",
            "crossinline"
          ],
          "others": ["action", "main", "repeat", "Unit", "0", "}", "3", "}", ""]
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
      "holeyCode": "// checkType関数をreifiedで定義\\ninline fun <reified T> checkType(value: Any): ___ {\\n    // value が T 型かチェックする\\n    return value is ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // String 型かチェックする\\n    ___(checkType<String>(\"テスト\"))\\n    // Int 型かチェックする\\n    ___(checkType<Int>(\"テスト\"))\\n___",
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
          "reified で実行時に型情報を使えます。",
          null,
          "is と入力しましょう。",
          "main と入力しましょう。",
          null,
          null,
          "Int と入力しましょう。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "reified",
            "inline",
            "generic"
          ],
          "others": ["is", "main", "String", "Int", "Boolean", "T", "}", "println", "T", "}", ""]
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
      "holeyCode": "// data class を定義する\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // apply で設定してオブジェクトを返す\\n    val cfg = Config().___ {\\n        // hostを設定する\\n        ___ = \"___\"\\n        // portを設定する\\n        port = ___\\n    ___\\n    // cfg を出力する\\n    println(___)\\n___",
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
          "この行を正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "apply で設定してオブジェクトを返します。",
          null,
          "localhost と入力しましょう。",
          null,
          "変数に数値を代入（保存）します。",
          "ここを正しく入力してください。",
          null,
          "println で出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "apply",
            "also",
            "run"
          ],
          "others": ["data", "main", "localhost", "8080", "println", "}", "cfg", "data class Config(var host: String = \" var port: Int = 0)", "host", "data class Config(var host: String = \" var port: Int = 0)", "", "8080", "}", "data class Config(var host: String = \" var port: Int = 0)", "data class Config(var host: String = \"\", var port: Int = 0)"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // also で副作用を実行してオブジェクトを返す\\n    val num = ___.also {\\n        // 値を出力する\\n        ___(\"Value: $it\")\\n    ___\\n    // num を出力する\\n    println(___)\\n___",
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
          "main と入力しましょう。",
          null,
          "also で副作用を実行してオブジェクトを返します。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "num と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "also",
            "apply",
            "let"
          ],
          "others": ["main", "42", "it", "println", "}", "num", "}"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // run でブロックを実行して結果を返す\\n    ___ result = \"___\".run {\\n        // スペースで分割してサイズを取得する\\n        split(\"___\").size\\n    ___\\n    // result を出力する\\n    println(___)\\n___",
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
          "main と入力しましょう。",
          null,
          "run でブロックを実行して結果を返します。",
          null,
          "スペース1文字を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "run",
            "let",
            "with"
          ],
          "others": ["main", "size", "println", "Hello World", "}", "result", "val", "}"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // takeIf で条件を満たせば値を返す\\n    val num = ___.takeIf { it > 5 }\\n    // num を出力する\\n    println(___)\\n___",
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
          "main と入力しましょう。",
          null,
          "takeIf で条件を満たせば値を返します。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "takeIf",
            "takeUnless",
            "filter"
          ],
          "others": ["main", "10", "println", "num", "}"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // numsにlistOf(1, 2, 3, 4, 5)を代入\\n    val nums = listOf(___, 2, 3, 4, 5)\\n    // groupBy でグループ化する\\n    val grouped = nums.groupBy { it % ___ }\\n    // grouped を出力する\\n    println(___)\\n___",
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
          "main と入力しましょう。",
          null,
          "listOf と入力しましょう。",
          null,
          "groupBy でグループ化します。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "groupBy",
            "partition",
            "associate"
          ],
          "others": ["main", "listOf", "println", "1", "2", "grouped", "}"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // numsにlistOf(1, 2, 3, 4)を代入\\n    val nums = listOf(___, 2, 3, 4)\\n    // fold で畳み込む\\n    val product = nums.fold(___) { acc, n -> acc * n }\\n    // product を出力する\\n    println(___)\\n___",
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
          "main と入力しましょう。",
          null,
          "listOf と入力しましょう。",
          null,
          "fold で畳み込みます。",
          null,
          "println と入力しましょう。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "fold",
            "reduce",
            "aggregate"
          ],
          "others": ["main", "listOf", "println", "1", "product", "}"]
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
