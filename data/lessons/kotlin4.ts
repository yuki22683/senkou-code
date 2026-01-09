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
      "description": "制限された継承階層を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Sealed Class とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 継承を制限\n\n**sealed class** は、継承できるクラスを同じファイル内に制限します。\n\n```kotlin\nsealed class Result\nclass Success(val data: String) : Result()\nclass Error(val message: String) : Result()\n```"
        },
        {
          "title": "when で網羅的に",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# else が不要\n\n```kotlin\nwhen (result) {\n    is Success -> println(result.data)\n    is Error -> println(result.message)\n}  // else 不要\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "sealed class Shape\nclass Circle(val radius: Double) : Shape()\nclass Rectangle(val w: Double, val h: Double) : Shape()\n\nfun area(s: Shape): Double = when (s) {\n    is Circle -> 3.14 * s.radius * s.radius\n    is Rectangle -> s.w * s.h\n}\n\nfun main() {\n    println(area(Circle(2.0)))\n}",
      "holeyCode": "___\n___\n___\n\n___\n    ___\n    ___\n___\n\n___\n    ___\n___",
      "correctLines": [
        
        
        "sealed class Shape",
        "class Circle(val radius: Double) : Shape()",
        "class Rectangle(val w: Double, val h: Double) : Shape()",
        "",
        "fun area(s: Shape): Double = when (s) {",
        "    is Circle -> 3.14 * s.radius * s.radius",
        "    is Rectangle -> s.w * s.h",
        "}",
        "",
        "fun main() {",
        "    println(area(Circle(2.0)))",
        "}"
      ],
      "lineHints": [
        "sealed で継承を制限します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["sealed", "abstract", "open"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12.56\n"
        }
      ]
    },
    {
      "title": "object 宣言",
      "description": "シングルトンを簡単に作りましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "object とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# シングルトン\n\n**object** でシングルトンオブジェクトを定義できます。\n\n```kotlin\nobject Logger {\n    fun log(msg: String) = println(msg)\n}\n\nLogger.log(\"Hello\")  // インスタンス化不要\n```"
        },
        {
          "title": "companion object",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# クラス内の静的メンバ\n\n```kotlin\nclass MyClass {\n    companion object {\n        fun create() = MyClass()\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "object Counter {\n    private var count = 0\n    fun increment() { count++ }\n    fun get() = count\n}\n\nfun main() {\n    Counter.increment()\n    Counter.increment()\n    println(Counter.get())\n}",
      "holeyCode": "___\n    ___\n    ___\n    ___\n___\n\n___\n    ___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "object Counter {",
        "    private var count = 0",
        "    fun increment() { count++ }",
        "    fun get() = count",
        "}",
        "",
        "fun main() {",
        "    Counter.increment()",
        "    Counter.increment()",
        "    println(Counter.get())",
        "}"
      ],
      "lineHints": [
        "object でシングルトンを定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["object", "class", "companion"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    },
    {
      "title": "委譲プロパティ by lazy",
      "description": "遅延初期化を実装しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "by lazy とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 遅延初期化\n\n**by lazy** で、最初のアクセス時に初期化されるプロパティを定義できます。\n\n```kotlin\nval data: String by lazy {\n    println(\"Loading...\")\n    \"Data\"\n}\n```"
        },
        {
          "title": "スレッドセーフ",
          "image": "/illustrations/3d/robot.png",
          "content": "# デフォルトで同期\n\n```kotlin\n// 単一スレッドでのみ使う場合\nby lazy(LazyThreadSafetyMode.NONE) { ... }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Config {\n    val value: Int by lazy {\n        println(\"Init\")\n        42\n    }\n}\n\nfun main() {\n    val c = Config()\n    println(\"Created\")\n    println(c.value)\n}",
      "holeyCode": "___\n    ___\n        ___\n        ___\n    ___\n___\n\\n___\n    ___\n    ___\n    ___\n___"Init\")\n        42\n    }\n}\n\nfun main() {\n    val c = Config()\n    println(\"Created\")\n    println(c.value)\n}",
      "correctLines": [
        "class Config {",
        "    val value: Int by lazy {",
        "        println("Init")",
        "        42",
        "    }",
        "}",
        "",
        "fun main() {",
        "    val c = Config()",
        "    println("Created")",
        "    println(c.value)",
        "}"
      ],
      "lineHints": [
        null,
        "lazy で遅延初期化します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["lazy", "lateinit", "init"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Created\nInit\n42\n"
        }
      ]
    },
    {
      "title": "lateinit 修飾子",
      "description": "後から初期化するプロパティを宣言しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "lateinit とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 後から初期化\n\n**lateinit** で、初期化を遅らせることができます（varのみ）。\n\n```kotlin\nclass Service {\n    lateinit var name: String\n    \n    fun setup(n: String) { name = n }\n}\n```"
        },
        {
          "title": "isInitialized",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 初期化チェック\n\n```kotlin\nif (::name.isInitialized) {\n    println(name)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Service {\n    lateinit var config: String\n    \n    fun setup(c: String) { config = c }\n}\n\nfun main() {\n    val s = Service()\n    s.setup(\"OK\")\n    println(s.config)\n}",
      "holeyCode": "___\n    ___\n    \\n    ___\n___\n\\n___\n    ___\n    ___\n    ___\n___"OK\")\n    println(s.config)\n}",
      "correctLines": [
        "class Service {",
        "    lateinit var config: String",
        "    ",
        "    fun setup(c: String) { config = c }",
        "}",
        "",
        "fun main() {",
        "    val s = Service()",
        "    s.setup("OK")",
        "    println(s.config)",
        "}"
      ],
      "lineHints": [
        null,
        "lateinit で後から初期化を宣言します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["lateinit", "lazy", "init"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "OK\n"
        }
      ]
    },
    {
      "title": "inline 関数",
      "description": "ラムダのオーバーヘッドを削減しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "inline とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数をインライン展開\n\n**inline** で、関数呼び出しをインライン展開します。\n\n```kotlin\ninline fun measure(block: () -> Unit) {\n    val start = System.currentTimeMillis()\n    block()\n    println(\"Time: ${System.currentTimeMillis() - start}\")\n}\n```"
        },
        {
          "title": "効果",
          "image": "/illustrations/3d/robot.png",
          "content": "# パフォーマンス向上\n\n- ラムダのオブジェクト生成を避ける\n- 関数呼び出しのオーバーヘッドを削減"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "inline fun repeat(times: Int, action: (Int) -> Unit) {\n    for (i in 0 until times) {\n        action(i)\n    }\n}\n\nfun main() {\n    repeat(3) { println(it) }\n}",
      "holeyCode": "___\n    ___\n        ___\n    ___\n___\n\n___\n    ___\n___",
      "correctLines": [
        
        
        "inline fun repeat(times: Int, action: (Int) -> Unit) {",
        "    for (i in 0 until times) {",
        "        action(i)",
        "    }",
        "}",
        "",
        "fun main() {",
        "    repeat(3) { println(it) }",
        "}"
      ],
      "lineHints": [
        "inline でインライン展開します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["inline", "noinline", "crossinline"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n1\n2\n"
        }
      ]
    },
    {
      "title": "reified 型パラメータ",
      "description": "実行時に型情報を保持しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "reified とは？",
          "image": "/illustrations/3d/if.png",
          "content": "# 型消去を回避\n\n**reified** で、inline関数内で型パラメータを実行時に使えます。\n\n```kotlin\ninline fun <reified T> isType(value: Any): Boolean {\n    return value is T\n}\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型チェックやキャスト\n\n```kotlin\ninline fun <reified T> filterByType(list: List<Any>): List<T> {\n    return list.filterIsInstance<T>()\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "inline fun <reified T> typeOf(): String {\n    return T::class.simpleName ?: \"Unknown\"\n}\n\nfun main() {\n    println(typeOf<String>())\n}",
      "holeyCode": "___\n    ___\n___\n\\n___\n    ___\n___"Unknown\"\n}\n\nfun main() {\n    println(typeOf<String>())\n}",
      "correctLines": [
        "inline fun <reified T> typeOf(): String {",
        "    return T::class.simpleName ?: "Unknown"",
        "}",
        "",
        "fun main() {",
        "    println(typeOf<String>())",
        "}"
      ],
      "lineHints": [
        "reified で型情報を保持します。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["reified", "inline", "generic"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "String\n"
        }
      ]
    },
    {
      "title": "拡張関数",
      "description": "既存クラスに関数を追加しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "拡張関数とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# クラスを拡張\n\n**拡張関数** で、既存クラスに新しいメソッドを追加できます。\n\n```kotlin\nfun String.addExclamation() = this + \"!\"\n\n\"Hello\".addExclamation()  // \"Hello!\"\n```"
        },
        {
          "title": "標準ライブラリでも多用",
          "image": "/illustrations/3d/robot.png",
          "content": "# 便利な拡張\n\n```kotlin\nlist.firstOrNull()\nstring.isNotBlank()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun Int.isEven() = this % 2 == 0\n\nfun main() {\n    println(4.isEven())\n    println(7.isEven())\n}",
      "holeyCode": "___\n\n___\n    ___\n    ___\n___",
      "correctLines": [
        
        
        "fun Int.isEven() = this % 2 == 0",
        "",
        "fun main() {",
        "    println(4.isEven())",
        "    println(7.isEven())",
        "}"
      ],
      "lineHints": [
        "isEven() で拡張関数を定義します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "names": ["isEven()", "even()", "checkEven()"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "true\nfalse\n"
        }
      ]
    },
    {
      "title": "scope 関数 let",
      "description": "オブジェクトに対して処理を行いましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "let とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# オブジェクトを it で参照\n\n**let** は、オブジェクトを `it` として参照し、結果を返します。\n\n```kotlin\nval result = \"hello\".let {\n    it.uppercase()\n}\n```"
        },
        {
          "title": "null チェック",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# ?. と組み合わせ\n\n```kotlin\nnullableString?.let {\n    println(it)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val result = \"hello\".let {\n        it.uppercase()\n    }\n    println(result)\n}",
      "holeyCode": "___\n    // let と入力して、変換しましょう\\n    ___\n        ___\n    ___\n    ___\n___"hello\".___ {\n        it.uppercase()\n    }\n    println(result)\n}",
      "correctLines": [
        "fun main() {",
        "    // let と入力して、変換しましょう",
        "    val result = "hello".let {",
        "        it.uppercase()",
        "    }",
        "    println(result)",
        "}"
      ],
      "lineHints": [
        null,
        "let で変換処理を行います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["let", "also", "run"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "HELLO\n"
        }
      ]
    },
    {
      "title": "scope 関数 apply",
      "description": "オブジェクトを設定しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "apply とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# オブジェクトを this で参照\n\n**apply** は、オブジェクトを設定して自身を返します。\n\n```kotlin\nval person = Person().apply {\n    name = \"Alice\"\n    age = 30\n}\n```"
        },
        {
          "title": "ビルダーパターン",
          "image": "/illustrations/3d/robot.png",
          "content": "# 初期化に便利\n\n```kotlin\nStringBuilder().apply {\n    append(\"Hello\")\n    append(\" World\")\n}.toString()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "data class Config(var host: String = \"\", var port: Int = 0)\n\nfun main() {\n    val config = Config().apply {\n        host = \"localhost\"\n        port = 8080\n    }\n    println(\"${config.host}:${config.port}\")\n}",
      "holeyCode": "___\n\\n___\n    // apply と入力して、設定しましょう\\n    ___\n        ___\n        ___\n    ___\n    ___\n___"\", var port: Int = 0)\n\nfun main() {\n    // apply と入力して、設定しましょう\n    val config = Config().___ {\n        host = \"localhost\"\n        port = 8080\n    }\n    println(\"${config.host}:${config.port}\")\n}",
      "correctLines": [
        "data class Config(var host: String = "", var port: Int = 0)",
        "",
        "fun main() {",
        "    // apply と入力して、設定しましょう",
        "    val config = Config().apply {",
        "        host = "localhost"",
        "        port = 8080",
        "    }",
        "    println("${config.host}:${config.port}")",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "apply でオブジェクトを設定します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["apply", "also", "with"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "localhost:8080\n"
        }
      ]
    },
    {
      "title": "typealias",
      "description": "型に別名をつけましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "typealias とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型の別名\n\n**typealias** で、型に別名をつけられます。\n\n```kotlin\ntypealias UserMap = Map<Int, String>\ntypealias Handler = (String) -> Unit\n```"
        },
        {
          "title": "可読性向上",
          "image": "/illustrations/3d/robot.png",
          "content": "# 長い型を短く\n\n```kotlin\ntypealias OnClick = (View, Int) -> Boolean\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "typealias StringList = List<String>\n\nfun printAll(items: StringList) {\n    items.forEach { println(it) }\n}\n\nfun main() {\n    printAll(listOf(\"A\", \"B\", \"C\"))\n}",
      "holeyCode": "___\n\\n___\n    ___\n___\n\\n___\n    ___\n___"A\", \"B\", \"C\"))\n}",
      "correctLines": [
        "typealias StringList = List<String>",
        "",
        "fun printAll(items: StringList) {",
        "    items.forEach { println(it) }",
        "}",
        "",
        "fun main() {",
        "    printAll(listOf("A", "B", "C"))",
        "}"
      ],
      "lineHints": [
        "typealias で型に別名をつけます。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["typealias", "type", "alias"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\nB\nC\n"
        }
      ]
    }
  ]
}
