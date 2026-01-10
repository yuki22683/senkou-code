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
      "correctCode": "sealed class Shape\nclass Circle(val radius: Double) : Shape()\nclass Rectangle(val w: Double, val h: Double) : Shape()\n\nfun area(s: Shape): Double = when (s) {\n    // Circle の場合 (radius * radius)\n    is Circle -> 3.14 * s.radius * s.radius\n    // Rectangle の場合 (w * h)\n    is Rectangle -> s.w * s.h\n}\n\nfun main() {\n    println(area(Circle(2.0)))\n}",
      "holeyCode": "// sealed で継承を制限する\n___ class Shape\n// Circle クラスを定義する\nclass ___(val radius: Double) : Shape()\n// Rectangle クラスを定義する\nclass ___(val w: Double, val h: Double) : Shape()\n\n// 面積を計算する関数\nfun area(s: ___): Double = when (s) {\n    // Circle の場合 (radius * radius)\n    is Circle -> 3.14 * s.___ * s.radius\n    // Rectangle の場合 (w * h)\n    is Rectangle -> s.___ * s.h\n}\n\n// main 関数を定義する\nfun ___() {\n    // area を出力する\n    ___(area(Circle(2.0)))\n}",
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
      "holeyCode": "// object でシングルトンを定義する\n___ Counter {\n    // count を初期化する\n    private var count = ___\n    // increment 関数を定義する\n    fun ___() { count++ }\n    // get 関数を定義する\n    fun get() = ___\n}\n\n// main 関数を定義する\nfun ___() {\n    // increment を呼び出す\n    Counter.___()\n    Counter.___()\n    // get を出力する\n    println(Counter.___())\n}",
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
      "holeyCode": "// Config クラスを定義する\nclass ___ {\n    // lazy で遅延初期化する\n    val value: Int by ___ {\n        // \"Init\" を出力する\n        println(\"___\")\n        // 42 を返す\n        ___\n    }\n}\n\n// main 関数を定義する\nfun ___() {\n    // Config のインスタンスを作成する\n    val c = ___()\n    // \"Created\" を出力する\n    println(\"___\")\n    // c.value を出力する\n    println(c.___)\n}",
      "correctLines": [
        "class Config {",
        "    val value: Int by lazy {",
        "        println(\"Init\")",
        "        42",
        "    }",
        "}",
        "",
        "fun main() {",
        "    val c = Config()",
        "    println(\"Created\")",
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
      "holeyCode": "// Service クラスを定義する\nclass ___ {\n    // lateinit で後から初期化を宣言する\n    ___ var config: String\n    \n    // setup 関数を定義する\n    fun ___(c: String) { config = c }\n}\n\n// main 関数を定義する\nfun ___() {\n    // Service のインスタンスを作成する\n    val s = ___()\n    // setup を呼び出す\n    s.___(\"OK\")\n    // s.config を出力する\n    println(s.___)\n}",
      "correctLines": [
        "class Service {",
        "    lateinit var config: String",
        "    ",
        "    fun setup(c: String) { config = c }",
        "}",
        "",
        "fun main() {",
        "    val s = Service()",
        "    s.setup(\"OK\")",
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
      "holeyCode": "// inline でインライン展開する\n___ fun repeat(times: Int, action: (Int) -> Unit) {\n    // 0 から times まで繰り返す\n    for (i in 0 until ___) {\n        // action を呼び出す\n        ___(i)\n    }\n}\n\n// main 関数を定義する\nfun ___() {\n    // repeat を呼び出す\n    ___(3) { println(it) }\n}",
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
      "holeyCode": "// reified で型情報を保持する\ninline fun <___ T> typeOf(): String {\n    // 型名を返す\n    return T::class.___ ?: \"Unknown\"\n}\n\n// main 関数を定義する\nfun ___() {\n    // typeOf<String>() を出力する\n    println(typeOf<___ >())\n}",
      "correctLines": [
        "inline fun <reified T> typeOf(): String {",
        "    return T::class.simpleName ?: \"Unknown\"",
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
      "holeyCode": "// isEven() で拡張関数を定義する\nfun Int.___ = this % 2 == 0\n\n// main 関数を定義する\nfun ___() {\n    // 4.isEven() を出力する\n    println(4.___())\n    // 7.isEven() を出力する\n    println(7.___())\n}",
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
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // let で変換処理を行う\n    val result = \"hello\".___ {\n        // 大文字に変換する\n        it.___()\n    }\n    // result を出力する\n    ___(result)\n}",
      "correctLines": [
        "fun main() {",
        "    val result = \"hello\".let {",
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
      "correctCode": "data class Config(var host: String = \"\", var port: Int = 0)\n\nfun main() {\n    val config = Config().apply {\n        // hostに\"localhost\"、portに8080を設定\n        host = \"localhost\"\n        port = 8080\n    }\n    println(\"${config.host}:${config.port}\")\n}",
      "holeyCode": "// data class を定義する\n___ class Config(var host: String = \"\", var port: Int = 0)\n\n// main 関数を定義する\nfun ___() {\n    // apply でオブジェクトを設定する\n    val config = Config().___ {\n        // hostに\"localhost\"、portに8080を設定\n        host = \"___\"\n        // port を設定する\n        port = ___\n    }\n    // config を出力する\n    println(\"${config.___}:${config.___}\")\n}",
      "correctLines": [
        "data class Config(var host: String = \"\", var port: Int = 0)",
        "",
        "fun main() {",
        "    val config = Config().apply {",
        "        host = \"localhost\"",
        "        port = 8080",
        "    }",
        "    println(\"${config.host}:${config.port}\")",
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
      "holeyCode": "// typealias で型に別名をつける\n___ StringList = List<String>\n\n// printAll 関数を定義する\nfun ___(items: StringList) {\n    // forEach で各要素を出力する\n    items.___ { println(it) }\n}\n\n// main 関数を定義する\nfun ___() {\n    // printAll を呼び出す\n    ___(listOf(\"A\", \"B\", \"C\"))\n}",
      "correctLines": [
        "typealias StringList = List<String>",
        "",
        "fun printAll(items: StringList) {",
        "    items.forEach { println(it) }",
        "}",
        "",
        "fun main() {",
        "    printAll(listOf(\"A\", \"B\", \"C\"))",
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
