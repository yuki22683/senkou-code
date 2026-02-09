export const kotlin4Data = {
  "language": "kotlin",
  "lessonId": "kotlin-4",
  "lessonTitle": "Kotlin IV - Sealed ClassとDelegation",
  "lessonDescription": "Kotlinの高度な型システムを学びます。Sealed Class、委譲、inline関数などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "Sealed Class",
      "correctCode": "// Shapeをsealed classで定義\\nsealed class Shape\\n// Circle クラスを定義する\\nclass Circle(val radius: Double) : Shape()\\n// Rectangle クラスを定義する\\nclass Rectangle(val w: Double, val h: Double) : Shape()\\n\\n// 面積を計算する関数\\nfun area(s: Shape): Double = when (s) {\\n    // Circle の場合 (radius * radius)\\n    is Circle -> 3.14 * s.radius * s.radius\\n    // Rectangle の場合 (w * h)\\n    is Rectangle -> s.w * s.h\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // area を出力する\\n    println(area(Circle(2.0)))\\n}",
      "holeyCode": "// Shapeをsealed classで定義\\nsealed class ___\\n// Circle クラスを定義する\\nclass ___(val radius: Double) : Shape()\\n// Rectangle クラスを定義する\\nclass ___(val w: Double, val h: Double) : Shape()\\n___\\n// 面積を計算する関数\\nfun area(___: Shape): Double = when (s) {\\n    // Circle の場合 (radius * radius)\\n    is Circle -> ___.14 * s.radius * s.radius\\n    // Rectangle の場合 (w * h)\\n    is Rectangle -> s.w * s.___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // area を出力する\\n    ___(area(Circle(2.0)))\\n___",
      "correctLines": [
          "// Shapeをsealed classで定義",
          "sealed class Shape",
          "// Circle クラスを定義する",
          "class Circle(val radius: Double) : Shape()",
          "// Rectangle クラスを定義する",
          "class Rectangle(val w: Double, val h: Double) : Shape()",
          "",
          "// 面積を計算する関数",
          "fun area(s: Shape): Double = when (s) {",
          "    // Circle の場合 (radius * radius)",
          "    is Circle -> 3.14 * s.radius * s.radius",
          "    // Rectangle の場合 (w * h)",
          "    is Rectangle -> s.w * s.h",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // area を出力する",
          "    println(area(Circle(2.0)))",
          "}"
        ],
      "lineHints": [
          null,
          "sealed で継承を制限します。",
          null,
          "新しいクラス（Circle）を定義します。",
          null,
          "新しいクラス（Rectangle）を定義します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "円の半径プロパティにアクセスします。",
          null,
          "四角形の高さプロパティにアクセスします。",
          "ここを正しく入力してください。",
          null,
          null,
          "プログラムの開始点となる関数です。",
          null,
          "標準出力に値を出力する関数です。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "sealed",
            "abstract",
            "open"
          ],
          "others": ["Circle", "Rectangle", "Shape", "radius", "w", "main", "println", "s", "3", "h", "}", "Shape", "", "h", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12.56\\n"
          }
        ]
      },
    {
      "title": "object 宣言",
      "correctCode": "// Counterシングルトンを定義\\nobject Counter {\\n    // count を初期化する\\n    private var count = 0\\n    // increment 関数を定義する\\n    fun increment() { count++ }\\n    // get 関数を定義する\\n    fun get() = count\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // 1回目の increment を呼び出す\\n    Counter.increment()\\n    // 2回目の increment を呼び出す\\n    Counter.increment()\\n    // get を出力する\\n    println(Counter.get())\\n}",
      "holeyCode": "// Counterシングルトンを定義\\nobject ___ {\\n    // count を初期化する\\n    private var count = ___\\n    // increment 関数を定義する\\n    fun increment() { ___++ }\\n    // get 関数を定義する\\n    fun get() = ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // 1回目の increment を呼び出す\\n    Counter.___()\\n    // 2回目の increment を呼び出す\\n    Counter.___()\\n    // get を出力する\\n    ___(Counter.get())\\n___",
      "correctLines": [
          "// Counterシングルトンを定義",
          "object Counter {",
          "    // count を初期化する",
          "    private var count = 0",
          "    // increment 関数を定義する",
          "    fun increment() { count++ }",
          "    // get 関数を定義する",
          "    fun get() = count",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // 1回目の increment を呼び出す",
          "    Counter.increment()",
          "    // 2回目の increment を呼び出す",
          "    Counter.increment()",
          "    // get を出力する",
          "    println(Counter.get())",
          "}"
        ],
      "lineHints": [
          null,
          "object でシングルトンを定義します。",
          null,
          "カウンタの初期値を設定します。",
          null,
          "カウンタを増加させるメソッドを呼び出します。",
          null,
          "内部のカウンタ変数を返します。",
          "プログラムの開始点となる関数です。",
          null,
          null,
          "カウンタを増加させるメソッドを呼び出します。",
          null,
          "カウンタの値を取得するメソッドです。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "object",
            "class",
            "companion"
          ],
          "others": ["0", "increment", "count", "main", "get", "Counter", "}", "println", "0", "count", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "委譲プロパティ by lazy",
      "correctCode": "// Config クラスを定義する\\nclass Config {\\n    // valueをlazyで遅延初期化\\n    val value: Int by lazy {\\n        // \"Init\" を出力する\\n        println(\"Init\")\\n        // 42 を返す\\n        42\\n    }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // Config のインスタンスを作成する\\n    val c = Config()\\n    // \"Created\" を出力する\\n    println(\"Created\")\\n    // c.value を出力する\\n    println(c.value)\\n}",
      "holeyCode": "// Config クラスを定義する\\nclass ___ {\\n    // valueをlazyで遅延初期化\\n    val value: Int by ___ {\\n        // \"Init\" を出力する\\n        ___(\"Init\")\\n        // 42 を返す\\n        ___\\n    ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // Config のインスタンスを作成する\\n    val c = ___()\\n    // \"Created\" を出力する\\n    ___(\"Created\")\\n    // c.value を出力する\\n    ___(c.value)\\n___",
      "correctLines": [
          "// Config クラスを定義する",
          "class Config {",
          "    // valueをlazyで遅延初期化",
          "    val value: Int by lazy {",
          "        // \"Init\" を出力する",
          "        println(\"Init\")",
          "        // 42 を返す",
          "        42",
          "    }",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // Config のインスタンスを作成する",
          "    val c = Config()",
          "    // \"Created\" を出力する",
          "    println(\"Created\")",
          "    // c.value を出力する",
          "    println(c.value)",
          "}"
        ],
      "lineHints": [
          null,
          "新しいクラス（Config）を定義します。",
          null,
          "lazy で遅延初期化します。",
          null,
          "初期化時に出力されるメッセージです。",
          null,
          "lazyブロックから返される値です。",
          "プログラムの開始点となる関数です。",
          "Configクラスのインスタンスを作成します。",
          null,
          null,
          "lazyで初期化されたプロパティにアクセスします。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "lazy",
            "lateinit",
            "init"
          ],
          "others": ["Config", "Init", "42", "main", "Created", "value", "println", "}", "42", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Created\\nInit\\n42\\n"
          }
        ]
      },
    {
      "title": "lateinit 修飾子",
      "correctCode": "// Service クラスを定義する\\nclass Service {\\n    // configをlateinitで宣言\\n    lateinit var config: String\\n    \\n    // setup 関数を定義する\\n    fun setup(c: String) { config = c }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // Service のインスタンスを作成する\\n    val s = Service()\\n    // setup を呼び出す\\n    s.setup(\"OK\")\\n    // s.config を出力する\\n    println(s.config)\\n}",
      "holeyCode": "// Service クラスを定義する\\nclass ___ {\\n    // configをlateinitで宣言\\n    lateinit var config: ___\\n    ___\\n    // setup 関数を定義する\\n    fun setup(___: String) { config = c }\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // Service のインスタンスを作成する\\n    val s = ___()\\n    // setup を呼び出す\\n    ___.setup(\"___\")\\n    // s.config を出力する\\n    ___(s.config)\\n___",
      "correctLines": [
          "// Service クラスを定義する",
          "class Service {",
          "    // configをlateinitで宣言",
          "    lateinit var config: String",
          "    ",
          "    // setup 関数を定義する",
          "    fun setup(c: String) { config = c }",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // Service のインスタンスを作成する",
          "    val s = Service()",
          "    // setup を呼び出す",
          "    s.setup(\"OK\")",
          "    // s.config を出力する",
          "    println(s.config)",
          "}"
        ],
      "lineHints": [
          null,
          "新しいクラス（Service）を定義します。",
          null,
          "lateinit で後から初期化を宣言します。",
          "この行を正しく入力してください。",
          null,
          "プログラムの開始点となる関数です。",
          "Serviceクラスのインスタンスを作成します。",
          null,
          null,
          "lateinitで宣言されたプロパティに値を設定します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "lateinit",
            "lazy",
            "init"
          ],
          "others": ["Service", "setup", "main", "config", "String", "c", "}", "OK", "println", "s", "String", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "OK\\n"
          }
        ]
      },
    {
      "title": "inline 関数",
      "correctCode": "// repeat関数をinlineで定義\\ninline fun repeat(times: Int, action: (Int) -> Unit) {\\n    // 0 から times まで繰り返す\\n    for (i in 0 until times) {\\n        // action を呼び出す\\n        action(i)\\n    }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // repeat を呼び出す\\n    repeat(3) { println(it) }\\n}",
      "holeyCode": "// repeat関数をinlineで定義\\ninline fun repeat(times: Int, action: (Int) -> ___) {\\n    // 0 から times まで繰り返す\\n    for (i in ___ until times) {\\n        // action を呼び出す\\n        action(___)\\n    ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // repeat を呼び出す\\n    repeat(___) { println(it) }\\n___",
      "correctLines": [
          "// repeat関数をinlineで定義",
          "inline fun repeat(times: Int, action: (Int) -> Unit) {",
          "    // 0 から times まで繰り返す",
          "    for (i in 0 until times) {",
          "        // action を呼び出す",
          "        action(i)",
          "    }",
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
          "inline でインライン展開します。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "引数として渡された関数を実行します。",
          "プログラムの開始点となる関数です。",
          "定義したinline関数を呼び出します。",
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
          "others": ["times", "action", "main", "repeat", "Unit", "0", "i", "}", "3", "}", ""]
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
      "correctCode": "// typeOf関数をreifiedで定義\\ninline fun <reified T> typeOf(): String {\\n    // 型名を返す\\n    return T::class.simpleName ?: \"Unknown\"\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // typeOf<String>() を出力する\\n    println(typeOf<String>())\\n}",
      "holeyCode": "// typeOf関数をreifiedで定義\\ninline fun <reified T> typeOf(): ___ {\\n    // 型名を返す\\n    ___ T::class.simpleName ?: \"___\"\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // typeOf<String>() を出力する\\n    ___(typeOf<String>())\\n___",
      "correctLines": [
          "// typeOf関数をreifiedで定義",
          "inline fun <reified T> typeOf(): String {",
          "    // 型名を返す",
          "    return T::class.simpleName ?: \"Unknown\"",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // typeOf<String>() を出力する",
          "    println(typeOf<String>())",
          "}"
        ],
      "lineHints": [
          null,
          "reified で型情報を保持します。",
          null,
          "型のシンプルな名前を取得するプロパティです。",
          "プログラムの開始点となる関数です。",
          null,
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
          "others": ["simpleName", "main", "String>())", "String", "Unknown", "}", "println", "return", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "String\\n"
          }
        ]
      },
    {
      "title": "拡張関数",
      "correctCode": "// isEven() で拡張関数を定義する\\nfun Int.isEven() = this % 2 == 0\\n\\n// main 関数を定義する\\nfun main() {\\n    // 4.isEven() を出力する\\n    println(4.isEven())\\n    // 7.isEven() を出力する\\n    println(7.isEven())\\n}",
      "holeyCode": "// isEven() で拡張関数を定義する\\nfun Int.isEven() = this % ___ == 0\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // 4.isEven() を出力する\\n    ___(4.isEven())\\n    // 7.isEven() を出力する\\n    ___(7.isEven())\\n___",
      "correctLines": [
          "// isEven() で拡張関数を定義する",
          "fun Int.isEven() = this % 2 == 0",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // 4.isEven() を出力する",
          "    println(4.isEven())",
          "    // 7.isEven() を出力する",
          "    println(7.isEven())",
          "}"
        ],
      "lineHints": [
          null,
          "isEven() で拡張関数を定義します。",
          null,
          null,
          "偶数かどうかを判定する拡張関数を呼び出します。",
          null,
          "偶数かどうかを判定する拡張関数を呼び出します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "names": [
            "isEven()",
            "even()",
            "checkEven()"
          ],
          "others": ["main", "isEven", "2", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\nfalse\\n"
          }
        ]
      },
    {
      "title": "scope 関数 let",
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // letで\"hello\"を大文字に変換\\n    val result = \"hello\".let {\\n        // 大文字に変換する\\n        it.uppercase()\\n    }\\n    // result を出力する\\n    println(result)\\n}",
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // letで\"hello\"を大文字に変換\\n    val result = \"___\".let {\\n        // 大文字に変換する\\n        it.___()\\n    ___\\n    // result を出力する\\n    println(___)\\n___",
      "correctLines": [
          "// main 関数を定義する",
          "fun main() {",
          "    // letで\"hello\"を大文字に変換",
          "    val result = \"hello\".let {",
          "        // 大文字に変換する",
          "        it.uppercase()",
          "    }",
          "    // result を出力する",
          "    println(result)",
          "}"
        ],
      "lineHints": [
          null,
          "プログラムの開始点となる関数です。",
          null,
          "let で変換処理を行います。",
          null,
          "文字列を大文字に変換するメソッドです。",
          "ここを正しく入力してください。",
          null,
          "標準出力に値を出力する関数です。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "let",
            "also",
            "run"
          ],
          "others": ["main", "uppercase", "println", "hello", "}", "result", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "HELLO\\n"
          }
        ]
      },
    {
      "title": "scope 関数 apply",
      "correctCode": "// data class を定義する\\ndata class Config(var host: String = \"\", var port: Int = 0)\\n\\n// main 関数を定義する\\nfun main() {\\n    // apply でオブジェクトを設定する\\n    val config = Config().apply {\\n        // hostに\"localhost\"、portに8080を設定\\n        host = \"localhost\"\\n        // port を設定する\\n        port = 8080\\n    }\\n    // config を出力する\\n    println(\"${config.host}:${config.port}\")\\n}",
      "holeyCode": "// data class を定義する\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // apply でオブジェクトを設定する\\n    val config = Config().___ {\\n        // hostに\"localhost\"、portに8080を設定\\n        host = \"___\"\\n        // port を設定する\\n        port = ___\\n    ___\\n    // config を出力する\\n    ___(\"${config.host}:${config.port}\")\\n___",
      "correctLines": [
          "// data class を定義する",
          "data class Config(var host: String = \"\", var port: Int = 0)",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // apply でオブジェクトを設定する",
          "    val config = Config().apply {",
          "        // hostに\"localhost\"、portに8080を設定",
          "        host = \"localhost\"",
          "        // port を設定する",
          "        port = 8080",
          "    }",
          "    // config を出力する",
          "    println(\"${config.host}:${config.port}\")",
          "}"
        ],
      "lineHints": [
          null,
          "この行を正しく入力してください。",
          null,
          null,
          "apply でオブジェクトを設定します。",
          null,
          "ホスト名を設定する文字列です。",
          null,
          "変数に数値を代入（保存）します。",
          null,
          "applyブロック内でプロパティを出力します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "apply",
            "also",
            "with"
          ],
          "others": ["data", "main", "localhost", "8080", "host", "port", "}", "println", "data class Config(var host: String = \" var port: Int = 0)", "data class Config(var host: String = \" var port: Int = 0)", "", "8080", "}", "data class Config(var host: String = \" var port: Int = 0)", "data class Config(var host: String = \"\", var port: Int = 0)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "localhost:8080\\n"
          }
        ]
      },
    {
      "title": "typealias",
      "correctCode": "// StringList型エイリアスを定義\\ntypealias StringList = List<String>\\n\\n// printAll 関数を定義する\\nfun printAll(items: StringList) {\\n    // forEach で各要素を出力する\\n    items.forEach { println(it) }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // printAll を呼び出す\\n    printAll(listOf(\"A\", \"B\", \"C\"))\\n}",
      "holeyCode": "// StringList型エイリアスを定義\\ntypealias StringList = List<___>\\n___\\n// printAll 関数を定義する\\nfun printAll(items: ___) {\\n    // forEach で各要素を出力する\\n    items.forEach { println(___) }\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // printAll を呼び出す\\n    ___(listOf(\"___\", \"B\", \"C\"))\\n___",
      "correctLines": [
          "// StringList型エイリアスを定義",
          "typealias StringList = List<String>",
          "",
          "// printAll 関数を定義する",
          "fun printAll(items: StringList) {",
          "    // forEach で各要素を出力する",
          "    items.forEach { println(it) }",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // printAll を呼び出す",
          "    printAll(listOf(\"A\", \"B\", \"C\"))",
          "}"
        ],
      "lineHints": [
          null,
          "typealias で型に別名をつけます。",
          null,
          null,
          "型エイリアスを引数の型として使用します。",
          null,
          "コレクションの各要素に対して処理を実行します。",
          "ここを正しく入力してください。",
          null,
          null,
          "プログラムの開始点となる関数です。",
          null,
          "定義した関数を呼び出してリストを出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "typealias",
            "type",
            "alias"
          ],
          "others": ["printAll", "forEach", "main", "String", "StringList", "it", "}", "A", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "A\\nB\\nC\\n"
          }
        ]
      }
  ]
}
