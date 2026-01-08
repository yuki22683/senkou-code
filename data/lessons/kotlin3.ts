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
      "description": "一時停止可能な関数を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "suspend とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 一時停止可能\n\n**suspend** 関数は、実行を一時停止して後で再開できます。\n\n```kotlin\nsuspend fun fetchData(): String {\n    delay(1000)  // 1秒待機\n    return \"data\"\n}\n```"
        },
        {
          "title": "コルーチンで呼び出し",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# launch や async で実行\n\n```kotlin\nrunBlocking {\n    val result = fetchData()\n    println(result)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import kotlinx.coroutines.*\n\nsuspend fun getMessage(): String {\n    delay(100)\n    return \"Hello\"\n}\n\nfun main() = runBlocking {\n    println(getMessage())\n}",
      "holeyCode": "import kotlinx.coroutines.*\n\n// ここに suspend と入力して一時停止できるようにしてね\n___ fun getMessage(): String {\n    delay(100)\n    return \"Hello\"\n}\n\nfun main() = runBlocking {\n    println(getMessage())\n}",
      "correctLines": [
        "import kotlinx.coroutines.*",
        "",
        "// ここに suspend と入力して一時停止できるようにしてね",
        "suspend fun getMessage(): String {",
        "    delay(100)",
        "    return \"Hello\"",
        "}",
        "",
        "fun main() = runBlocking {",
        "    println(getMessage())",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "suspend で一時停止可能な関数にします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["suspend", "async", "await"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "sequence（シーケンス）",
      "description": "遅延評価のシーケンスを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "sequence とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 遅延評価\n\n**sequence** は、要素を遅延評価で生成します。\n\n```kotlin\nval seq = sequence {\n    yield(1)\n    yield(2)\n    yield(3)\n}\n```"
        },
        {
          "title": "大量データの効率的処理",
          "image": "/illustrations/3d/robot.png",
          "content": "# 必要な分だけ計算\n\n```kotlin\nval nums = generateSequence(1) { it + 1 }\n    .take(5)\n    .toList()  // [1, 2, 3, 4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val nums = generateSequence(1) { it * 2 }\n        .take(4)\n        .toList()\n    println(nums)\n}",
      "holeyCode": "fun main() {\n    // ここに generateSequence と入力して順番に数字を作ってね\n    val nums = ___(1) { it * 2 }\n        .take(4)\n        .toList()\n    println(nums)\n}",
      "correctLines": [
        "fun main() {",
        "    // ここに generateSequence と入力して順番に数字を作ってね",
        "    val nums = generateSequence(1) { it * 2 }",
        "        .take(4)",
        "        .toList()",
        "    println(nums)",
        "}"
      ],
      "lineHints": [
        null,
        "generateSequence で無限シーケンスを生成します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["generateSequence", "sequence", "listOf"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 2, 4, 8]\n"
        }
      ]
    },
    {
      "title": "inline 関数",
      "description": "関数をインライン展開しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "inline とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数呼び出しをなくす\n\n**inline** をつけると、関数がコンパイル時に展開されます。\n\n```kotlin\ninline fun measure(block: () -> Unit) {\n    val start = System.currentTimeMillis()\n    block()\n    println(System.currentTimeMillis() - start)\n}\n```"
        },
        {
          "title": "高階関数の最適化",
          "image": "/illustrations/3d/robot.png",
          "content": "# ラムダのオーバーヘッドを削減\n\n```kotlin\n// ラムダがインライン化される\nmeasure {\n    // 処理\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "inline fun repeat(times: Int, action: (Int) -> Unit) {\n    for (i in 0 until times) action(i)\n}\n\nfun main() {\n    repeat(3) { println(it) }\n}",
      "holeyCode": "// ここに inline と入力して中身を埋め込んでね\n___ fun repeat(times: Int, action: (Int) -> Unit) {\n    for (i in 0 until times) action(i)\n}\n\nfun main() {\n    repeat(3) { println(it) }\n}",
      "correctLines": [
        "// ここに inline と入力して中身を埋め込んでね",
        "inline fun repeat(times: Int, action: (Int) -> Unit) {",
        "    for (i in 0 until times) action(i)",
        "}",
        "",
        "fun main() {",
        "    repeat(3) { println(it) }",
        "}"
      ],
      "lineHints": [
        "inline で関数をインライン化します。",
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
      "description": "実行時に型情報を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "reified とは？",
          "image": "/illustrations/3d/if.png",
          "content": "# 型情報を保持\n\n**reified** で、実行時に型パラメータを使えます。\n\n```kotlin\ninline fun <reified T> isType(value: Any): Boolean {\n    return value is T\n}\n```"
        },
        {
          "title": "型チェックに使用",
          "image": "/illustrations/3d/robot.png",
          "content": "# is や as が使える\n\n```kotlin\nisType<String>(\"hello\")  // true\nisType<Int>(\"hello\")     // false\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "inline fun <reified T> checkType(value: Any): Boolean {\n    return value is T\n}\n\nfun main() {\n    println(checkType<String>(\"test\"))\n    println(checkType<Int>(\"test\"))\n}",
      "holeyCode": "// ここに reified と入力して型の種類を教えてね\ninline fun <___ T> checkType(value: Any): Boolean {\n    return value is T\n}\n\nfun main() {\n    println(checkType<String>(\"test\"))\n    println(checkType<Int>(\"test\"))\n}",
      "correctLines": [
        "// ここに reified と入力して型の種類を教えてね",
        "inline fun <reified T> checkType(value: Any): Boolean {",
        "    return value is T",
        "}",
        "",
        "fun main() {",
        "    println(checkType<String>(\"test\"))",
        "    println(checkType<Int>(\"test\"))",
        "}"
      ],
      "lineHints": [
        "reified で実行時に型情報を使えます。",
        null,
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
          "expected_output": "true\nfalse\n"
        }
      ]
    },
    {
      "title": "apply スコープ関数",
      "description": "オブジェクトを設定して返しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "apply とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 設定してオブジェクトを返す\n\n**apply** は、レシーバを設定してそのまま返します。\n\n```kotlin\nval person = Person().apply {\n    name = \"Alice\"\n    age = 25\n}\n```"
        },
        {
          "title": "ビルダーパターン",
          "image": "/illustrations/3d/robot.png",
          "content": "# 初期化に便利\n\n```kotlin\nval sb = StringBuilder().apply {\n    append(\"Hello\")\n    append(\" World\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "data class Config(var host: String = \"\", var port: Int = 0)\n\nfun main() {\n    val cfg = Config().apply {\n        host = \"localhost\"\n        port = 8080\n    }\n    println(cfg)\n}",
      "holeyCode": "data class Config(var host: String = \"\", var port: Int = 0)\n\nfun main() {\n    // ここに apply と入力して中身を設定してね\n    val cfg = Config().___ {\n        host = \"localhost\"\n        port = 8080\n    }\n    println(cfg)\n}",
      "correctLines": [
        "data class Config(var host: String = \"\", var port: Int = 0)",
        "",
        "fun main() {",
        "    // ここに apply と入力して中身を設定してね",
        "    val cfg = Config().apply {",
        "        host = \"localhost\"",
        "        port = 8080",
        "    }",
        "    println(cfg)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "apply で設定してオブジェクトを返します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["apply", "also", "run"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Config(host=localhost, port=8080)\n"
        }
      ]
    },
    {
      "title": "also スコープ関数",
      "description": "副作用を実行してオブジェクトを返しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "also とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 副作用後にオブジェクトを返す\n\n**also** は、it でオブジェクトにアクセスし、そのまま返します。\n\n```kotlin\nval nums = mutableListOf(1, 2).also {\n    println(\"Adding 3\")\n    it.add(3)\n}\n```"
        },
        {
          "title": "デバッグに便利",
          "image": "/illustrations/3d/robot.png",
          "content": "# ログ出力など\n\n```kotlin\ngetUser()\n    .also { println(\"Got: $it\") }\n    .process()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val num = 42.also {\n        println(\"Value: $it\")\n    }\n    println(num)\n}",
      "holeyCode": "fun main() {\n    // ここに also と入力してね\n    val num = 42.___ {\n        println(\"Value: $it\")\n    }\n    println(num)\n}",
      "correctLines": [
        "fun main() {",
        "    // ここに also と入力してね",
        "    val num = 42.also {",
        "        println(\"Value: $it\")",
        "    }",
        "    println(num)",
        "}"
      ],
      "lineHints": [
        null,
        "also で副作用を実行してオブジェクトを返します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["also", "apply", "let"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Value: 42\n42\n"
        }
      ]
    },
    {
      "title": "run スコープ関数",
      "description": "ブロックを実行して結果を返しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "run とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ブロックの結果を返す\n\n**run** は、レシーバでブロックを実行し、最後の式を返します。\n\n```kotlin\nval length = \"Hello\".run {\n    println(this)\n    length  // 戻り値\n}\n```"
        },
        {
          "title": "計算に使用",
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数の処理をまとめる\n\n```kotlin\nval result = run {\n    val a = 10\n    val b = 20\n    a + b\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val result = \"Hello World\".run {\n        split(\" \").size\n    }\n    println(result)\n}",
      "holeyCode": "fun main() {\n    // ここに run と入力して処理を実行してね\n    val result = \"Hello World\".___ {\n        split(\" \").size\n    }\n    println(result)\n}",
      "correctLines": [
        "fun main() {",
        "    // ここに run と入力して処理を実行してね",
        "    val result = \"Hello World\".run {",
        "        split(\" \").size",
        "    }",
        "    println(result)",
        "}"
      ],
      "lineHints": [
        null,
        "run でブロックを実行して結果を返します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["run", "let", "with"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    },
    {
      "title": "takeIf と takeUnless",
      "description": "条件に応じて値を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "takeIf とは？",
          "image": "/illustrations/3d/if.png",
          "content": "# 条件を満たせば値を返す\n\n**takeIf** は、条件が true なら値を、false なら null を返します。\n\n```kotlin\nval num = 10.takeIf { it > 5 }  // 10\nval num2 = 3.takeIf { it > 5 }  // null\n```"
        },
        {
          "title": "takeUnless",
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件を満たさなければ値を返す\n\n```kotlin\nval num = 10.takeUnless { it > 5 }  // null\nval num2 = 3.takeUnless { it > 5 }  // 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val num = 10.takeIf { it > 5 }\n    println(num)\n}",
      "holeyCode": "fun main() {\n    // ここに takeIf と入力して条件をチェックしてね\n    val num = 10.___ { it > 5 }\n    println(num)\n}",
      "correctLines": [
        "fun main() {",
        "    // ここに takeIf と入力して条件をチェックしてね",
        "    val num = 10.takeIf { it > 5 }",
        "    println(num)",
        "}"
      ],
      "lineHints": [
        null,
        "takeIf で条件を満たせば値を返します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["takeIf", "takeUnless", "filter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "groupBy",
      "description": "要素をグループ化しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "groupBy とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# キーでグループ化\n\n**groupBy** は、キーに基づいて要素をグループ化します。\n\n```kotlin\nval words = listOf(\"a\", \"bb\", \"ccc\")\nval byLength = words.groupBy { it.length }\n// {1=[a], 2=[bb], 3=[ccc]}\n```"
        },
        {
          "title": "値の変換",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 第2引数で変換\n\n```kotlin\nwords.groupBy({ it.length }, { it.uppercase() })\n// {1=[A], 2=[BB], 3=[CCC]}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val nums = listOf(1, 2, 3, 4, 5)\n    val grouped = nums.groupBy { it % 2 }\n    println(grouped)\n}",
      "holeyCode": "fun main() {\n    val nums = listOf(1, 2, 3, 4, 5)\n    // ここに groupBy と入力してグループにわけてね\n    val grouped = nums.___ { it % 2 }\n    println(grouped)\n}",
      "correctLines": [
        "fun main() {",
        "    val nums = listOf(1, 2, 3, 4, 5)",
        "    // ここに groupBy と入力してグループにわけてね",
        "    val grouped = nums.groupBy { it % 2 }",
        "    println(grouped)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "groupBy でグループ化します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["groupBy", "partition", "associate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "{1=[1, 3, 5], 0=[2, 4]}\n"
        }
      ]
    },
    {
      "title": "fold と reduce",
      "description": "要素を畳み込みましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "fold とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 初期値ありの畳み込み\n\n**fold** は、初期値から始めて要素を1つずつ畳み込みます。\n\n```kotlin\nval sum = listOf(1, 2, 3).fold(0) { acc, n -> acc + n }\n// 6\n```"
        },
        {
          "title": "reduce",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 初期値なし\n\n```kotlin\nval sum = listOf(1, 2, 3).reduce { acc, n -> acc + n }\n// 6（最初の要素が初期値）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val nums = listOf(1, 2, 3, 4)\n    val product = nums.fold(1) { acc, n -> acc * n }\n    println(product)\n}",
      "holeyCode": "fun main() {\n    val nums = listOf(1, 2, 3, 4)\n    // ここに fold と入力して畳み込んでね\n    val product = nums.___(1) { acc, n -> acc * n }\n    println(product)\n}",
      "correctLines": [
        "fun main() {",
        "    val nums = listOf(1, 2, 3, 4)",
        "    // ここに fold と入力して畳み込んでね",
        "    val product = nums.fold(1) { acc, n -> acc * n }",
        "    println(product)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "fold で畳み込みます。",
        null,
        null
      ],
      "candidates": {
        "methods": ["fold", "reduce", "aggregate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "24\n"
        }
      ]
    }
  ]
}
