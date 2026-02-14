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
      "content": "`lateinit` は後から値を設定するvarに使います。\\n\\n```kotlin\\nclass Service {\\n    lateinit var config: String\\n    \\n    fun setup(c: String) {\\n        config = c\\n    }\\n}\\n\\nval s = Service()\\ns.setup(\"設定完了\")\\nprintln(s.config)\\n```\\n\\n=> 設定完了\\n\\n初期化前にアクセスすると `UninitializedPropertyAccessException` が発生します。"
    },
    {
      "title": "拡張関数",
      "content": "既存のクラスにメソッドを追加できます。\\n\\n```kotlin\\nfun Int.isEven() = this % 2 == 0\\n\\nprintln(4.isEven())\\nprintln(7.isEven())\\n```\\n\\n=> true\\n\\n=> false\\n\\n元のクラスを変更せずに機能を追加できるため、ライブラリの機能拡張に便利です。\\n\\n`this` は拡張対象のオブジェクトを指します。"
    },
    {
      "title": "typealias（型エイリアス）",
      "content": "`typealias` で型に別名を付けられます。\\n\\n```kotlin\\ntypealias UserMap = Map<String, User>\\ntypealias Handler = (String) -> Unit\\n\\nfun process(handler: Handler) {\\n    handler(\"データ\")\\n}\\n\\nprocess { println(it) }\\n```\\n\\n長い型名を短くしたり、意図を明確にしたりできます。"
    }
  ],
  "exercises": [
    {
      "title": "Sealed Class",
      "description": "sealedについて学びます",
      "tutorialSlides": [
        {
          "title": "Sealed Class（シールドクラス）とは？",
          "content": "# 継承を制限するクラス\\n\\n**sealed** は「封印された」という意味です。\\n\\nsealed class は、継承できるクラスを「このファイルの中だけ」に制限します。\\n\\n外部から勝手に継承されないので、すべての種類を把握できます。"
        },
        {
          "title": "なぜ sealed class が便利？",
          "content": "# すべてのパターンを管理できる\\n\\n例えば「結果」を表すとき：\\n\\n```kotlin\\nsealed class Result\\nclass Success(val data: String) : Result()\\nclass Error(val message: String) : Result()\\n```\\n\\n結果は「成功」か「エラー」だけ。他のパターンはありえません。"
        },
        {
          "title": "when と組み合わせる",
          "content": "# すべてのケースを網羅\\n\\n```kotlin\\nwhen (result) {\\n    is Success -> println(result.data)\\n    is Error -> println(result.message)\\n}  // else が要らない！\\n```\\n\\nすべてのパターンを書いているので、`else` が不要です。\\n\\n新しい種類を追加したら、コンパイラが教えてくれます。"
        },
        {
          "title": "is で型チェック",
          "content": "# 型を確認してアクセス\\n\\n```kotlin\\nwhen (shape) {\\n    is Circle -> shape.radius      // Circle型として使える\\n    is Rectangle -> shape.w * shape.h  // Rectangle型として使える\\n}\\n```\\n\\n`is` でチェックした後は、その型のプロパティに直接アクセスできます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n図形の面積を計算するsealed classを作りましょう。\\n\\n1. `sealed class Shape` を定義\\n2. `Circle` と `Rectangle` を継承させる\\n3. `when` ですべてのケースを処理\\n4. 円の面積は 3.14 * r * r"
        }
      ],
      "correctCode": "// Shapeをsealed classで定義\\nsealed class Shape\\n// Circle クラスを定義する\\nclass Circle(val radius: Double) : Shape()\\n// Rectangle クラスを定義する\\nclass Rectangle(val w: Double, val h: Double) : Shape()\\n\\n// 面積を計算する関数\\nfun area(s: Shape): Double = when (s) {\\n    // Circleの場合（半径の2乗を計算）\\n    is Circle -> 3.14 * s.radius * s.radius\\n    // Rectangleの場合（幅と高さの積を計算）\\n    is Rectangle -> s.w * s.h\\n// ブロックを閉じる\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // area を出力する\\n    println(area(Circle(2.0)))\\n// ブロックを閉じる\\n}",
      "holeyCode": "// Shapeをsealed classで定義\\nsealed class ___\\n// Circle クラスを定義する\\nclass ___(val ___: ___) : ___()\\n// Rectangle クラスを定義する\\nclass ___(val ___: ___, val ___: ___) : ___()\\n___\\n// 面積を計算する関数\\nfun ___(___: ___): ___ = when (___) {\\n    // Circleの場合（半径の2乗を計算）\\n    is ___ -> ___ * ___.___ * ___.___\\n    // Rectangleの場合（幅と高さの積を計算）\\n    is ___ -> ___.___ * ___.___\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // area を出力する\\n    ___(___(___(___)))\\n// ブロックを閉じる\\n___",
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
          "    // Circleの場合（半径の2乗を計算）",
          "    is Circle -> 3.14 * s.radius * s.radius",
          "    // Rectangleの場合（幅と高さの積を計算）",
          "    is Rectangle -> s.w * s.h",
          "// ブロックを閉じる",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // area を出力する",
          "    println(area(Circle(2.0)))",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
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
      "description": "objectについて学びます",
      "tutorialSlides": [
        {
          "title": "object（オブジェクト）宣言とは？",
          "content": "# 1つだけのインスタンス\\n\\n**object** は、プログラム全体で1つだけ存在するオブジェクトを作ります。\\n\\nこれを「シングルトン」と呼びます。\\n\\nアプリ全体で共有する設定やログ出力に使います。"
        },
        {
          "title": "object の使い方",
          "content": "# class の代わりに object\\n\\n```kotlin\\nobject Logger {\\n    fun log(msg: String) = println(msg)\\n}\\n\\nLogger.log(\"Hello\")  // 直接使える\\n```\\n\\n`new` や `()` なしで直接使えます。インスタンスは自動で作られます。"
        },
        {
          "title": "なぜ object が便利？",
          "content": "# 状態を共有できる\\n\\n```kotlin\\nobject Counter {\\n    private var count = 0\\n    fun increment() { count++ }\\n    fun get() = count\\n}\\n```\\n\\nどこから呼んでも同じ `count` を使います。\\n\\nログや設定など、アプリ全体で1つでいいものに最適です。"
        },
        {
          "title": "companion object",
          "content": "# クラスの中のobject\\n\\n```kotlin\\nclass MyClass {\\n    companion object {\\n        fun create() = MyClass()\\n    }\\n}\\nMyClass.create()  // 静的メソッドのように使える\\n```\\n\\n他の言語の「静的メソッド」に似た使い方ができます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nカウンターをobjectで作りましょう。\\n\\n1. `object Counter` を定義\\n2. `increment()` でカウントを増やす\\n3. `get()` で現在の値を取得\\n4. 2回 increment して 2 を表示"
        }
      ],
      "correctCode": "// Counterシングルトンを定義\\nobject Counter {\\n    // count を初期化する\\n    private var count = 0\\n    // increment 関数を定義する\\n    fun increment() { count++ }\\n    // get 関数を定義する\\n    fun get() = count\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // 1回目の increment を呼び出す\\n    Counter.increment()\\n    // 2回目の increment を呼び出す\\n    Counter.increment()\\n    // get を出力する\\n    println(Counter.get())\\n}",
      "holeyCode": "// Counterシングルトンを定義\\nobject ___ {\\n    // count を初期化する\\n    private var ___ = ___\\n    // increment 関数を定義する\\n    fun ___() { ___++ }\\n    // get 関数を定義する\\n    fun ___() = ___\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // 1回目の increment を呼び出す\\n    ___.___()\\n    // 2回目の increment を呼び出す\\n    ___.___()\\n    // get を出力する\\n    ___(___.___())\\n// ブロックを閉じる\\n___",
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
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
          "others": ["Counter", "count", "0", "increment", "get", "main", "println", "}", "// main 関数を定義する", "// 1回目の increment を呼び出す", "// 2回目の increment を呼び出す", "// get を出力する"]
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
      "description": "lazyについて学びます",
      "tutorialSlides": [
        {
          "title": "by lazy（バイ レイジー）とは？",
          "content": "# 使うまで初期化しない\\n\\n**lazy** は「怠け者」という意味です。\\n\\n`by lazy` を使うと、プロパティが最初に使われたときに初期化されます。\\n\\n重い処理を必要になるまで遅らせられます。"
        },
        {
          "title": "by lazy の仕組み",
          "content": "# 最初のアクセスで初期化\\n\\n```kotlin\\nval data: String by lazy {\\n    println(\"Loading...\")  // 最初のアクセス時に実行\\n    \"Data\"                 // この値が代入される\\n}\\n```\\n\\n2回目以降は、すでに計算された値がそのまま使われます。"
        },
        {
          "title": "by lazy の例",
          "content": "# 順番を確認しよう\\n\\n```kotlin\\nclass Config {\\n    val value: Int by lazy {\\n        println(\"Init\")\\n        42\\n    }\\n}\\n\\nval c = Config()      // まだ初期化されない\\nprintln(\"Created\")    // \"Created\" が表示\\nprintln(c.value)      // ここで \"Init\" → \"42\" が表示\\n```"
        },
        {
          "title": "by lazy の利点",
          "content": "# パフォーマンス向上\\n\\n- 使わないプロパティは初期化されない\\n- 重い計算を必要なときまで遅らせられる\\n- 一度計算したら結果を再利用\\n\\nデータベース接続や設定ファイル読み込みに便利です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nby lazyで遅延初期化を体験しましょう。\\n\\n1. `val value: Int by lazy { }` を定義\\n2. 中で \"Init\" を表示して 42 を返す\\n3. \"Created\" → \"Init\" → \"42\" の順で表示される"
        }
      ],
      "correctCode": "// Config クラスを定義する\\nclass Config {\\n    // valueをlazyで遅延初期化\\n    val value: Int by lazy {\\n        // \"Init\" を出力する\\n        println(\"Init\")\\n        // 42 を返す\\n        42\\n    }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // Config のインスタンスを作成する\\n    val c = Config()\\n    // \"Created\" を出力する\\n    println(\"Created\")\\n    // cのvalueを出力する\\n    println(c.value)\\n}",
      "holeyCode": "// Config クラスを定義する\\nclass ___ {\\n    // valueをlazyで遅延初期化\\n    val ___: ___ by ___ {\\n        // \"Init\" を出力する\\n        ___(\"___\")\\n        // 42 を返す\\n        ___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // Config のインスタンスを作成する\\n    val ___ = ___()\\n    // \"Created\" を出力する\\n    ___(\"___\")\\n    // cのvalueを出力する\\n    ___(___.___) \\n// ブロックを閉じる\\n___",
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
          "    // cのvalueを出力する",
          "    println(c.value)",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          null,
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
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
          "others": ["Config", "value", "Int", "println", "Init", "42", "c", "Created", "main", "}", "// main 関数を定義する", "fun main() {", "val c = Config", "tln(\"Created\")", ".value)"]
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
      "description": "lateinitについて学びます",
      "tutorialSlides": [
        {
          "title": "lateinit（レイトイニット）とは？",
          "content": "# 後から初期化する宣言\\n\\n**lateinit** は「後で初期化する」という意味です。\\n\\n「今は値がないけど、後で必ず設定する」というプロパティに使います。\\n\\nAndroidの画面部品など、後から設定されるものに便利です。"
        },
        {
          "title": "lateinit の使い方",
          "content": "# var の前に lateinit をつける\\n\\n```kotlin\\nclass Service {\\n    lateinit var config: String  // 今は値がない\\n    \\n    fun setup(c: String) {\\n        config = c  // 後から設定\\n    }\\n}\\n```\\n\\n`lateinit` は `var` にしか使えません（valは不可）。"
        },
        {
          "title": "lateinit と by lazy の違い",
          "content": "# 初期化のタイミングが違う\\n\\n| | lateinit | by lazy |\\n|---|---|---|\\n| 初期化 | 自分で設定 | 自動で設定 |\\n| 変更 | 何度でも可 | 最初の1回だけ |\\n| 型 | var のみ | val のみ |\\n\\n「自分で設定したい」→ lateinit、「自動で設定」→ by lazy"
        },
        {
          "title": "初期化チェック",
          "content": "# isInitialized で確認\\n\\n```kotlin\\nif (::config.isInitialized) {\\n    println(config)\\n}\\n```\\n\\n`::` はプロパティへの参照を取得する記号です。\\n\\n初期化前にアクセスするとエラーになるので、チェックすると安全です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nlateinitで後から初期化しましょう。\\n\\n1. `lateinit var config: String` を宣言\\n2. `setup()` 関数で値を設定\\n3. `s.setup(\"OK\")` で \"OK\" を設定\\n4. `s.config` を表示"
        }
      ],
      "correctCode": "// Service クラスを定義する\\nclass Service {\\n    // configをlateinitで宣言\\n    lateinit var config: String\\n    \\n    // setup 関数を定義する\\n    fun setup(c: String) { config = c }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // Service のインスタンスを作成する\\n    val s = Service()\\n    // setupメソッドを呼び出す\\n    s.setup(\"OK\")\\n    // sのconfigを出力する\\n    println(s.config)\\n}",
      "holeyCode": "// Service クラスを定義する\\nclass ___ {\\n    // configをlateinitで宣言\\n    lateinit var ___: ___\\n    ___\\n    // setup 関数を定義する\\n    fun ___(___: ___) { ___ = ___ }\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // Service のインスタンスを作成する\\n    val ___ = ___()\\n    // setupメソッドを呼び出す\\n    ___.___(___)\\n    // sのconfigを出力する\\n    ___(___.___) \\n// ブロックを閉じる\\n___",
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
          "    // setupメソッドを呼び出す",
          "    s.setup(\"OK\")",
          "    // sのconfigを出力する",
          "    println(s.config)",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          ""
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
          "others": ["Service", "config", "String", "setup", "c", "s", "main", "println", "\"OK\"", "}", "// main 関数を定義する", "// Service のインスタンスを作成する", "etup", "び出す", "// s", "config を出力する"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "inline（インライン）関数とは？",
          "content": "# 関数の中身を直接埋め込む\\n\\n**inline** は、関数を呼び出す代わりに、中身をその場に展開します。\\n\\nコピペで貼り付けるイメージです。\\n\\n関数呼び出しの手間がなくなって速くなります。"
        },
        {
          "title": "ラムダを渡すときに効果的",
          "content": "# オブジェクト生成を避ける\\n\\n普通、関数にラムダを渡すと内部でオブジェクトが作られます。\\n\\n```kotlin\\ninline fun repeat(times: Int, action: (Int) -> Unit) {\\n    for (i in 0 until times) action(i)\\n}\\n```\\n\\n`inline` をつけると、このオブジェクト生成がなくなります。"
        },
        {
          "title": "inline のメリット",
          "content": "# パフォーマンスが向上\\n\\n- ラムダのオブジェクト生成を避ける\\n- 関数呼び出しの手間を削減\\n- コードがその場に展開される\\n\\n何度も呼ばれる小さな関数に特に効果的です。"
        },
        {
          "title": "inline 関数を使う",
          "content": "# 普通の関数と同じように\\n\\n```kotlin\\nrepeat(3) { println(it) }\\n// 0, 1, 2 が表示される\\n```\\n\\n使い方は普通の関数と同じです。\\n\\n内部で最適化されて高速に動きます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\ninline関数を作りましょう。\\n\\n1. `inline fun repeat(times, action)` を定義\\n2. `for` ループで action を呼び出す\\n3. `repeat(3) { println(it) }` で 0, 1, 2 を表示"
        }
      ],
      "correctCode": "// repeat関数をinlineで定義\\ninline fun repeat(times: Int, action: (Int) -> Unit) {\\n    // 0 から times まで繰り返す\\n    for (i in 0 until times) {\\n        // action を呼び出す\\n        action(i)\\n    }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // repeat関数（引数3）を呼び出す\\n    repeat(3) { println(it) }\\n}",
      "holeyCode": "// repeat関数をinlineで定義\\ninline fun ___(___: ___, ___: (___) -> ___) {\\n    // 0 から times まで繰り返す\\n    for (___ in ___ until ___) {\\n        // action を呼び出す\\n        ___(___) \\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // repeat関数（引数3）を呼び出す\\n    ___(___) { ___(___) }\\n// ブロックを閉じる\\n___",
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
          "    // repeat関数（引数3）を呼び出す",
          "    repeat(3) { println(it) }",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          null,
          null,
          "",
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
          "others": ["repeat", "times", "Int", "action", "Unit", "i", "0", "main", "3", "println", "it", "}", "// main 関数を定義する", "fun main() {"]
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
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "reified（レイファイド）型パラメータとは？",
          "content": "# 実行時に型を使う\\n\\n普通のジェネリクス（型パラメータ）は、実行時に型情報が消えてしまいます。\\n\\n**reified** をつけると、実行時にも型情報を使えます。\\n\\n「具体化された」という意味です。"
        },
        {
          "title": "なぜ reified が必要？",
          "content": "# 型チェックをするため\\n\\n普通のジェネリクスでは `value is T` ができません。\\n\\n```kotlin\\n// これはエラー！\\nfun <T> check(value: Any) = value is T\\n```\\n\\n`reified` をつけると、型チェックができるようになります。"
        },
        {
          "title": "reified の使い方",
          "content": "# inline と一緒に使う\\n\\n`reified` は必ず `inline` 関数で使います。\\n\\n```kotlin\\ninline fun <reified T> typeOf(): String {\\n    return T::class.simpleName ?: \"Unknown\"\\n}\\n```\\n\\n`T::class` で型の情報にアクセスできます。"
        },
        {
          "title": "reified を呼び出す",
          "content": "# 型を指定して呼び出す\\n\\n```kotlin\\ntypeOf<String>()  // \"String\"\\ntypeOf<Int>()     // \"Int\"\\n```\\n\\n`<String>` や `<Int>` で「どの型について調べるか」を指定します。\\n\\n実行時に型名を取得できます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n型名を返す関数を作りましょう。\\n\\n1. `inline fun <reified T> typeOf()` を定義\\n2. `T::class.simpleName` で型名を取得\\n3. `typeOf<String>()` は \"String\" を返す"
        }
      ],
      "correctCode": "// typeOf関数をreifiedで定義\\ninline fun <reified T> typeOf(): String {\\n    // 型名を返す\\n    return T::class.simpleName ?: \"Unknown\"\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // typeOf関数（String型）を呼び出して出力\\n    println(typeOf<String>())\\n}",
      "holeyCode": "// typeOf関数をreifiedで定義\\ninline fun <reified ___> ___(): ___ {\\n    // 型名を返す\\n    return ___::class.___ ?: \"___\"\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // typeOf関数（String型）を呼び出して出力\\n    ___(___(___))\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// typeOf関数をreifiedで定義",
          "inline fun <reified T> typeOf(): String {",
          "    // 型名を返す",
          "    return T::class.simpleName ?: \"Unknown\"",
          "}",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // typeOf関数（String型）を呼び出して出力",
          "    println(typeOf<String>())",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "reified",
            "inline",
            "fun",
            "return"
          ],
          "others": ["T", "typeOf", "String", "simpleName", "Unknown", "main", "println", "typeOf<String>()", "}", "typeOf<String>", "// main 関数を定義する", "// typeOf<String>"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "拡張関数とは？",
          "content": "# 既存の型に機能を追加\\n\\n**拡張関数** は、すでにある型に新しい関数を追加する機能です。\\n\\nスマホにアプリを入れるように、IntやStringに自分の機能を追加できます。\\n\\n元のクラスを変更せずに拡張できます。"
        },
        {
          "title": "拡張関数の書き方",
          "content": "# fun 型.関数名() = 処理\\n\\n```kotlin\\nfun String.addExclamation() = this + \"!\"\\n\\n\"Hello\".addExclamation()  // \"Hello!\"\\n```\\n\\n`String.` の部分で「Stringに追加する」と宣言します。\\n\\n`this` で文字列自体（この場合\"Hello\"）にアクセスできます。"
        },
        {
          "title": "Kotlinでよく使われる拡張",
          "content": "# 標準ライブラリにもたくさん\\n\\n```kotlin\\nlist.firstOrNull()   // 最初の要素（なければnull）\\nstring.isNotBlank()  // 空白でないか\\nlist.sumOf { }       // 合計を計算\\n```\\n\\nKotlinの便利な関数の多くは拡張関数です。"
        },
        {
          "title": "this で自分自身を使う",
          "content": "# 拡張元の値にアクセス\\n\\n```kotlin\\nfun Int.isEven() = this % 2 == 0\\n\\n4.isEven()  // true（4は偶数）\\n7.isEven()  // false（7は奇数）\\n```\\n\\n`this` は 4 や 7 を指します。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nIntに「偶数かどうか」を判定する関数を追加しましょう。\\n\\n1. `fun Int.isEven()` を定義\\n2. `this % 2 == 0` で偶数判定\\n3. `4.isEven()` は true、`7.isEven()` は false"
        }
      ],
      "correctCode": "// isEven拡張関数を定義する\\nfun Int.isEven() = this % 2 == 0\\n\\n// main 関数を定義する\\nfun main() {\\n    // 4のisEvenメソッドの結果を出力\\n    println(4.isEven())\\n    // 7のisEvenメソッドの結果を出力\\n    println(7.isEven())\\n}",
      "holeyCode": "// isEven拡張関数を定義する\\nfun ___.___(___) = ___ % ___ == ___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // 4のisEvenメソッドの結果を出力\\n    ___(___.___())\\n    // 7のisEvenメソッドの結果を出力\\n    ___(___.___())\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// isEven拡張関数を定義する",
          "fun Int.isEven() = this % 2 == 0",
          "",
          "// main 関数を定義する",
          "fun main() {",
          "    // 4のisEvenメソッドの結果を出力",
          "    println(4.isEven())",
          "    // 7のisEvenメソッドの結果を出力",
          "    println(7.isEven())",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "let（レット）スコープ関数とは？",
          "content": "# 値を変換して結果を返す\\n\\n**let** は「〜させる」という意味です。\\n\\nオブジェクトに対して処理を行い、その結果を返します。\\n\\n変換や計算を行いたいときに便利です。"
        },
        {
          "title": "let の使い方",
          "content": "# it で値を使う\\n\\n```kotlin\\nval result = \"hello\".let {\\n    it.uppercase()  // 大文字に変換\\n}\\nprintln(result)  // \"HELLO\"\\n```\\n\\n`{ }` の中で `it` として値を使えます。\\n\\n最後の式が戻り値になります。"
        },
        {
          "title": "null チェックと組み合わせ",
          "content": "# ?.let でnullでないときだけ処理\\n\\n```kotlin\\nval name: String? = \"Taro\"\\nname?.let {\\n    println(it)  // nameがnullでないときだけ実行\\n}\\n```\\n\\n`?.let` は「nullでなければ処理する」というパターンです。"
        },
        {
          "title": "let と他のスコープ関数の違い",
          "content": "# let は結果を返す\\n\\n| 関数 | 参照 | 戻り値 |\\n|---|---|---|\\n| let | it | ラムダの結果 |\\n| also | it | 元のオブジェクト |\\n| apply | this | 元のオブジェクト |\\n| run | this | ラムダの結果 |\\n\\n「変換したい」→ let、「設定したい」→ apply"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nletで文字列を大文字に変換しましょう。\\n\\n1. `\"hello\".let { }` を使う\\n2. `it.uppercase()` で大文字に\\n3. 結果は \"HELLO\" になる"
        }
      ],
      "correctCode": "// main 関数を定義する\\nfun main() {\\n    // letで\"hello\"を大文字に変換\\n    val result = \"hello\".let {\\n        // 大文字に変換する\\n        it.uppercase()\\n    }\\n    // result を出力する\\n    println(result)\\n}",
      "holeyCode": "// main 関数を定義する\\nfun ___() {\\n    // letで\"hello\"を大文字に変換\\n    val ___ = \"___\".___ {\\n        // 大文字に変換する\\n        ___.___(___) \\n    // ブロックを閉じる\\n    ___\\n    // result を出力する\\n    ___(___) \\n// ブロックを閉じる\\n___",
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
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          null,
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "fun",
            "val"
          ],
          "others": ["main", "result", "hello", "let", "it", "uppercase", "()", "println", "}", "// result を出力する"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "apply（アプライ）スコープ関数とは？",
          "content": "# オブジェクトを設定して返す\\n\\n**apply** は「適用する」という意味です。\\n\\nオブジェクトに対して設定を行い、そのオブジェクト自体を返します。\\n\\n初期化や設定を行うときに便利です。"
        },
        {
          "title": "apply の使い方",
          "content": "# this でオブジェクトを使う\\n\\n```kotlin\\nval person = Person().apply {\\n    name = \"Alice\"   // this.name = \"Alice\"\\n    age = 30        // this.age = 30\\n}\\n```\\n\\n`{ }` の中では `this` を省略できます。\\n\\n直接プロパティに代入できて便利です。"
        },
        {
          "title": "apply でオブジェクトを初期化",
          "content": "# 作ってすぐ設定\\n\\n```kotlin\\nval config = Config().apply {\\n    host = \"localhost\"\\n    port = 8080\\n}\\n```\\n\\nオブジェクトを作成して、すぐに中身を設定できます。\\n\\nコードがまとまって読みやすくなります。"
        },
        {
          "title": "let との違い",
          "content": "# 戻り値が違う\\n\\n```kotlin\\n// let: ラムダの結果を返す\\n\"hello\".let { it.length }  // 5\\n\\n// apply: 元のオブジェクトを返す\\n\"hello\".apply { println(length) }  // \"hello\"\\n```\\n\\n「設定したい」→ apply、「変換したい」→ let"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\napplyでConfigを設定しましょう。\\n\\n1. `Config().apply { }` を使う\\n2. `host = \"localhost\"` を設定\\n3. `port = 8080` を設定\\n4. 結果は \"localhost:8080\" と表示"
        }
      ],
      "correctCode": "// data class を定義する\\ndata class Config(var host: String = \"\", var port: Int = 0)\\n\\n// main 関数を定義する\\nfun main() {\\n    // apply でオブジェクトを設定する\\n    val config = Config().apply {\\n        // hostに\"localhost\"、portに8080を設定\\n        host = \"localhost\"\\n        // port を設定する\\n        port = 8080\\n    }\\n    // config を出力する\\n    println(\"${config.host}:${config.port}\")\\n}",
      "holeyCode": "// data class を定義する\\ndata class ___(var ___: ___ = \"\", var ___: ___ = ___)\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // apply でオブジェクトを設定する\\n    val ___ = ___().___ {\\n        // hostに\"localhost\"、portに8080を設定\\n        ___ = \"___\"\\n        // port を設定する\\n        ___ = ___\\n    // ブロックを閉じる\\n    ___\\n    // config を出力する\\n    ___(\"${___.___}:${___.___}\")\\n// ブロックを閉じる\\n___",
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
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          null,
          null,
          "\\\"\\\""
        ],
        "candidates": {
          "keywords": [
            "data",
            "class",
            "var",
            "fun",
            "val"
          ],
          "others": ["Config", "host", "String", "port", "Int", "0", "main", "config", "apply", "localhost", "8080", "println", "}", "// config を出力する"]
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
      "description": "typealiasについて学びます",
      "tutorialSlides": [
        {
          "title": "typealias（タイプエイリアス）とは？",
          "content": "# 型に別名（ニックネーム）をつける\\n\\n**typealias** は「型の別名」という意味です。\\n\\n長い型名に短い名前をつけて、コードを読みやすくできます。\\n\\n本名と同じ人が別名でも呼ばれるのと同じです。"
        },
        {
          "title": "typealias の書き方",
          "content": "# typealias 別名 = 元の型\\n\\n```kotlin\\ntypealias StringList = List<String>\\ntypealias UserMap = Map<Int, String>\\n```\\n\\n`List<String>` を `StringList` という短い名前で使えます。\\n\\n中身は同じ型なので、完全に置き換えられます。"
        },
        {
          "title": "関数型にも使える",
          "content": "# 長い関数型を短く\\n\\n```kotlin\\ntypealias Handler = (String) -> Unit\\ntypealias OnClick = (View, Int) -> Boolean\\n```\\n\\n関数型は長くなりがちなので、別名をつけると便利です。\\n\\n何をする関数なのか、名前で分かりやすくなります。"
        },
        {
          "title": "typealias を使ってみよう",
          "content": "# 別名で関数を定義\\n\\n```kotlin\\ntypealias StringList = List<String>\\n\\nfun printAll(items: StringList) {\\n    items.forEach { println(it) }\\n}\\n```\\n\\n`List<String>` の代わりに `StringList` が使えます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\ntypealiasで型に別名をつけましょう。\\n\\n1. `typealias StringList = List<String>` を定義\\n2. `printAll(items: StringList)` 関数を作る\\n3. `forEach` で各要素を表示"
        }
      ],
      "correctCode": "// StringList型エイリアスを定義\\ntypealias StringList = List<String>\\n\\n// printAll 関数を定義する\\nfun printAll(items: StringList) {\\n    // forEach で各要素を出力する\\n    items.forEach { println(it) }\\n}\\n\\n// main 関数を定義する\\nfun main() {\\n    // printAll関数を呼び出す\\n    printAll(listOf(\"A\", \"B\", \"C\"))\\n}",
      "holeyCode": "// StringList型エイリアスを定義\\ntypealias ___ = ___<___>\\n___\\n// printAll 関数を定義する\\nfun ___(___: ___) {\\n    // forEach で各要素を出力する\\n    ___.___ { ___(___) }\\n// ブロックを閉じる\\n___\\n___\\n// main 関数を定義する\\nfun ___() {\\n    // printAll関数を呼び出す\\n    ___(___(___, ___, ___))\\n// ブロックを閉じる\\n___",
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
          "    // printAll関数を呼び出す",
          "    printAll(listOf(\"A\", \"B\", \"C\"))",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          null,
          "",
          null,
          "\\\"\\\"\\\"\\\"\\\"\\\""
        ],
        "candidates": {
          "keywords": [
            "typealias",
            "fun"
          ],
          "others": ["StringList", "List", "String", "printAll", "items", "forEach", "println", "it", "main", "listOf", "\"A\"", "\"B\"", "\"C\"", "}", "// main 関数を定義する", "// printAll関数を呼び出す"]
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
