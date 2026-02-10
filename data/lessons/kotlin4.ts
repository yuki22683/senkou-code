export const kotlin4Data = {
  "language": "kotlin",
  "lessonId": "kotlin-4",
  "lessonTitle": "Kotlin IV - Sealed ClassとDelegation",
  "lessonDescription": "Kotlinの高度な型システムを学びます。Sealed Class、委譲、inline関数などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "Sealed Classとは",
      "content": "**Sealed Class**は、継承できるクラスを制限する仕組みです。\\n\\n```kotlin\\nsealed class Result\\nclass Success(val data: String) : Result()\\nclass Error(val message: String) : Result()\\n```\\n\\n同じファイル内でのみ継承できるため、when式で全ての分岐を網羅できます。\\n\\n```kotlin\\nfun handle(result: Result) = when (result) {\\n    is Success -> result.data\\n    is Error -> result.message\\n    // elseが不要！\\n}\\n```"
    },
    {
      "title": "objectシングルトン",
      "content": "`object` でシングルトンを簡単に作れます。\\n\\n```kotlin\\nobject Logger {\\n    fun log(msg: String) {\\n        println(\"[LOG] $msg\")\\n    }\\n}\\n\\nLogger.log(\"アプリ起動\")\\n// => [LOG] アプリ起動\\n```\\n\\nインスタンスが1つだけ存在することが保証されます。"
    },
    {
      "title": "by lazy（遅延初期化）",
      "content": "`by lazy` を使うと、最初に使われるまで初期化を遅らせます。\\n\\n```kotlin\\nclass Config {\\n    val data: String by lazy {\\n        println(\"初期化中...\")\\n        \"設定データ\"\\n    }\\n}\\n\\nval c = Config()\\nprintln(\"インスタンス作成完了\")\\nprintln(c.data)  // ここで初期化\\nprintln(c.data)  // 2回目はキャッシュ\\n```\\n\\n重い初期化処理を必要になるまで遅らせられます。"
    },
    {
      "title": "lateinit（後から初期化）",
      "content": "`lateinit` は後から値を設定するvarに使います。\\n\\n```kotlin\\nclass Service {\\n    lateinit var config: String\\n    \\n    fun setup(c: String) {\\n        config = c\\n    }\\n}\\n\\nval s = Service()\\ns.setup(\"設定完了\")\\nprintln(s.config)  // => 設定完了\\n```\\n\\n初期化前にアクセスすると `UninitializedPropertyAccessException` が発生します。"
    },
    {
      "title": "拡張関数",
      "content": "既存のクラスにメソッドを追加できます。\\n\\n```kotlin\\nfun Int.isEven() = this % 2 == 0\\n\\nprintln(4.isEven())  // => true\\nprintln(7.isEven())  // => false\\n```\\n\\n元のクラスを変更せずに機能を追加できるため、ライブラリの機能拡張に便利です。\\n\\n`this` は拡張対象のオブジェクトを指します。"
    },
    {
      "title": "typealias（型エイリアス）",
      "content": "`typealias` で型に別名を付けられます。\\n\\n```kotlin\\ntypealias UserMap = Map<String, User>\\ntypealias Handler = (String) -> Unit\\n\\nfun process(handler: Handler) {\\n    handler(\"データ\")\\n}\\n\\nprocess { println(it) }\\n```\\n\\n長い型名を短くしたり、意図を明確にしたりできます。"
    }
  ],
  "exercises": [
    {
      "title": "Sealed Class",
      "correctCode": "// Shapeをsealed classで定義\\nsealed class Shape\\n// Circle クラスを定義する\\nclass Circle(val radius: Double) : Shape()\\n// Rectangle クラスを定義する\\nclass Rectangle(val w: Double, val h: Double) : Shape()\\n\\n// 面積を計算する関数\\nfun area(s: Shape): Double = when (s) {\\n    // Circle の場合 (radius * radius)\\n    is Circle -> 3.14 * s.radius * s.radius\\n    // Rectangle の場合 (w * h)\\n    is Rectangle -> s.w * s.h\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // area を出力する\\n    println(area(Circle(2.0)))\\n}",
      "holeyCode": "// Shapeをsealed classで定義\\nsealed class ___\\n// Circle クラスを定義する\\nclass ___(val ___: ___) : ___()\\n// Rectangle クラスを定義する\\nclass ___(val ___: ___, val ___: ___) : ___()\\n___\\n// 面積を計算する関数\\nfun ___(___: ___): ___ = when (___) {\\n    // Circle の場合 (radius * radius)\\n    is ___ -> ___ * ___.___ * ___.___\\n    // Rectangle の場合 (w * h)\\n    is ___ -> ___.___ * ___.___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // area を出力する\\n    ___(___(___(___)))\\n___",
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
          "sealed classで継承を制限されたShapeを定義します。",
          null,
          "Circleクラスを定義し、radiusプロパティとDouble型を持たせ、Shape()を継承します。",
          null,
          "Rectangleクラスを定義し、w・hプロパティとDouble型を持たせ、Shape()を継承します。",
          null,
          null,
          "area関数を定義し、s引数にShape型を指定し、戻り値にDouble型を指定し、when式でsを分岐します。",
          null,
          "Circleの場合、3.14と変数sのradiusプロパティを掛け合わせます。",
          null,
          "Rectangleの場合、変数sのwとhプロパティを掛け合わせます。",
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "printlnでarea関数にCircle(2.0)を渡した結果を出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "sealed",
            "abstract",
            "open",
            "class",
            "fun",
            "val",
            "is",
            "when"
          ],
          "others": ["Shape", "Circle", "Rectangle", "radius", "Double", "w", "h", "area", "s", "3.14", "println", "2.0", "main", "}"]
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
      "holeyCode": "// Counterシングルトンを定義\\nobject ___ {\\n    // count を初期化する\\n    private var ___ = ___\\n    // increment 関数を定義する\\n    fun ___() { ___++ }\\n    // get 関数を定義する\\n    fun ___() = ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // 1回目の increment を呼び出す\\n    ___.___()\\n    // 2回目の increment を呼び出す\\n    ___.___()\\n    // get を出力する\\n    ___(___.___())\\n___",
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
          "Counterというシングルトンをobjectで定義します。",
          null,
          "count変数を0で初期化します。",
          null,
          "increment関数を定義し、countをインクリメントします。",
          null,
          "get関数を定義し、countを返します。",
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "Counter.increment()を呼び出します。",
          null,
          "Counter.increment()を呼び出します。",
          null,
          "printlnでCounter.get()を出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "object",
            "class",
            "companion",
            "fun",
            "private",
            "var"
          ],
          "others": ["Counter", "count", "0", "increment", "get", "main", "println", "}"]
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
      "holeyCode": "// Config クラスを定義する\\nclass ___ {\\n    // valueをlazyで遅延初期化\\n    val ___: ___ by ___ {\\n        // \"Init\" を出力する\\n        ___(\"___\")\\n        // 42 を返す\\n        ___\\n    ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // Config のインスタンスを作成する\\n    val ___ = ___()\\n    // \"Created\" を出力する\\n    ___(\"___\")\\n    // c.value を出力する\\n    ___(___.___) \\n___",
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
          "Configクラスを定義します。",
          null,
          "valueプロパティをInt型でlazyによる遅延初期化で定義します。",
          null,
          "printlnで\"Init\"を出力します。",
          null,
          "42を返します。",
          null,
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "変数cにConfig()インスタンスを代入します。",
          null,
          "printlnで\"Created\"を出力します。",
          null,
          "printlnでc.valueを出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "lazy",
            "lateinit",
            "init",
            "class",
            "val",
            "fun",
            "by"
          ],
          "others": ["Config", "value", "Int", "println", "Init", "42", "c", "Created", "main", "}"]
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
      "holeyCode": "// Service クラスを定義する\\nclass ___ {\\n    // configをlateinitで宣言\\n    lateinit var ___: ___\\n    ___\\n    // setup 関数を定義する\\n    fun ___(___: ___) { ___ = ___ }\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // Service のインスタンスを作成する\\n    val ___ = ___()\\n    // setup を呼び出す\\n    ___.___(___)\\n    // s.config を出力する\\n    ___(___.___) \\n___",
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
          "Serviceクラスを定義します。",
          null,
          "configプロパティをString型でlateinitで宣言します。",
          null,
          null,
          "setup関数を定義し、c引数にString型を指定し、configにcを代入します。",
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "変数sにService()インスタンスを代入します。",
          null,
          "s.setup()に\"OK\"を渡して呼び出します。",
          null,
          "printlnでs.configを出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "lateinit",
            "lazy",
            "init",
            "class",
            "var",
            "fun",
            "val"
          ],
          "others": ["Service", "config", "String", "setup", "c", "s", "main", "println", "\"OK\"", "}"]
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
      "holeyCode": "// repeat関数をinlineで定義\\ninline fun ___(___: ___, ___: (___) -> ___) {\\n    // 0 から times まで繰り返す\\n    for (___ in ___ until ___) {\\n        // action を呼び出す\\n        ___(___) \\n    ___\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // repeat を呼び出す\\n    ___(___) { ___(___) }\\n___",
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
          "repeat関数を定義し、times引数にInt型を、action引数に(Int)->Unit型を指定します。",
          null,
          "for文でiを0からtimesまで繰り返します。",
          null,
          "action(i)を呼び出します。",
          null,
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "repeat(3)を呼び出し、ラムダ内でprintln(it)を実行します。",
          null
        ],
        "candidates": {
          "keywords": [
            "inline",
            "noinline",
            "crossinline",
            "fun",
            "for",
            "in",
            "until"
          ],
          "others": ["repeat", "times", "Int", "action", "Unit", "i", "0", "main", "3", "println", "it", "}"]
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
      "holeyCode": "// typeOf関数をreifiedで定義\\ninline fun <reified ___> ___(): ___ {\\n    // 型名を返す\\n    return ___::class.___ ?: \"___\"\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // typeOf<String>() を出力する\\n    ___(___(___))\\n___",
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
          "reified T型パラメータでtypeOf関数を定義し、String型を返します。",
          null,
          "T::class.simpleNameでUnknownを返します。",
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "printlnでtypeOf<String>()を出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "reified",
            "inline",
            "fun",
            "return"
          ],
          "others": ["T", "typeOf", "String", "simpleName", "Unknown", "main", "println", "typeOf<String>()", "}", "typeOf<String>"]
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
      "holeyCode": "// isEven() で拡張関数を定義する\\nfun ___.___(___) = ___ % ___ == ___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // 4.isEven() を出力する\\n    ___(___.___())\\n    // 7.isEven() を出力する\\n    ___(___.___())\\n___",
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
          "Int.isEven()拡張関数を定義し、this%2==0の判定を行います。",
          null,
          null,
          "main関数を定義します。",
          null,
          "printlnで4.isEven()を出力します。",
          null,
          "printlnで7.isEven()を出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "fun",
            "this"
          ],
          "others": ["Int", "isEven", "()", "2", "0", "main", "println", "4", "7", "}"]
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
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // letで\"hello\"を大文字に変換\\n    val ___ = \"___\".___ {\\n        // 大文字に変換する\\n        ___.___(___) \\n    ___\\n    // result を出力する\\n    ___(___) \\n___",
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
          "main関数を定義します。",
          null,
          "result変数に\"hello\".let{}の結果を代入します。",
          null,
          "it.uppercase()を呼び出します。",
          null,
          null,
          "println(result)を出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "fun",
            "val"
          ],
          "others": ["main", "result", "hello", "let", "it", "uppercase", "()", "println", "}"]
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
      "holeyCode": "// data class を定義する\\ndata class ___(var ___: ___ = \"\", var ___: ___ = ___)\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // apply でオブジェクトを設定する\\n    val ___ = ___().___ {\\n        // hostに\"localhost\"、portに8080を設定\\n        ___ = \"___\"\\n        // port を設定する\\n        ___ = ___\\n    ___\\n    // config を出力する\\n    ___(\"${___.___}:${___.___}\")\\n___",
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
          "data class ConfigをhostをString型、portをInt型=0で定義します。",
          null,
          null,
          "main関数を定義します。",
          null,
          "config変数にConfig().apply{}の結果を代入します。",
          null,
          "hostに\"localhost\"を代入します。",
          null,
          "portに8080を代入します。",
          null,
          null,
          "printlnで\"${config.host}:${config.port}\"を出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "data",
            "class",
            "var",
            "fun",
            "val"
          ],
          "others": ["Config", "host", "String", "port", "Int", "0", "main", "config", "apply", "localhost", "8080", "println", "}"]
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
      "holeyCode": "// StringList型エイリアスを定義\\ntypealias ___ = ___<___>\\n___\\n// printAll 関数を定義する\\nfun ___(___: ___) {\\n    // forEach で各要素を出力する\\n    ___.___ { ___(___) }\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // printAll を呼び出す\\n    ___(___(___, ___, ___))\\n___",
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
          "typealias StringListをList<String>として定義します。",
          null,
          null,
          "printAll関数を定義し、items引数にStringList型を指定します。",
          null,
          "items.forEachでprintln(it)を実行します。",
          null,
          null,
          null,
          "main関数を定義します。",
          null,
          "printAllにlistOf(\"A\",\"B\",\"C\")を渡します。",
          null
        ],
        "candidates": {
          "keywords": [
            "typealias",
            "fun"
          ],
          "others": ["StringList", "List", "String", "printAll", "items", "forEach", "println", "it", "main", "listOf", "\"A\"", "\"B\"", "\"C\"", "}"]
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
