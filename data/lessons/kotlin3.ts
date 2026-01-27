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
          "title": "suspend（サスペンド）関数とは？",
          "image": "/illustrations/common/key_security_lock.png",
          "content": "# 一時停止（いちじていし）できる関数\n\n**suspend** は英語で「中断（ちゅうだん）する」という意味です。\n\n普通の関数は最後まで一気に実行されますが、suspend関数は途中で「待機（たいき）」できます。\n\n例えば、ネットからデータを取ってくる間、他の処理を進められます。"
        },
        {
          "title": "コルーチンとは？",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 軽い並行処理（へいこうしょり）\n\n**コルーチン** は、複数の処理を効率よく進める仕組みです。\n\n料理で例えると、お湯を沸かしている間に野菜を切る、というイメージです。\n\nsuspend関数はコルーチンの中で使います。"
        },
        {
          "title": "suspend関数の書き方",
          "image": "/illustrations/common/padlock_open.png",
          "content": "# fun の前に suspend をつける\n\n```kotlin\nsuspend fun fetchData(): String {\n    delay(1000)  // 1秒待機\n    return \"data\"\n}\n```\n\n`delay()` は「指定した時間だけ待つ」関数です。\n\nsuspend関数の中でだけ使えます。"
        },
        {
          "title": "runBlocking で実行",
          "image": "/illustrations/common/shield_gold.png",
          "content": "# コルーチンを開始する\n\n```kotlin\nrunBlocking {\n    val result = fetchData()\n    println(result)\n}\n```\n\n`runBlocking` はコルーチンを開始して、終わるまで待ちます。\n\nこの中でsuspend関数を呼び出せます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/key_silver.png",
          "content": "# 目標（もくひょう）\n\nsuspend関数を作って呼び出しましょう。\n\n1. `suspend fun getMessage()` を定義\n2. `delay(100)` で100ミリ秒待機\n3. `\"Hello\"` を返す\n4. `runBlocking` の中で呼び出して表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import kotlinx.coroutines.*\n\nsuspend fun getMessage(): String {\n    delay(100)\n    return \"Hello\"\n}\n\nfun main() = runBlocking {\n    println(getMessage())\n}",
      "holeyCode": "// coroutines をインポートする\nimport kotlinx.coroutines.___\n\n// suspend で一時停止可能な関数にする\n___ fun getMessage(): String {\n    // 100ミリ秒待機する\n    ___(100)\n    // \"Hello\" を返す\n    return \"___\"\n}\n\n// main 関数を定義する\nfun ___() = runBlocking {\n    // getMessage() を出力する\n    ___(getMessage())\n}",
      "correctLines": [
        "// coroutines をインポートする",
        "import kotlinx.coroutines.*",
        "",
        "// suspend で一時停止可能な関数にする",
        "suspend fun getMessage(): String {",
        "    // 100ミリ秒待機する",
        "    delay(100)",
        "    // \"Hello\" を返す",
        "    return \"Hello\"",
        "}",
        "",
        "// main 関数を定義する",
        "fun main() = runBlocking {",
        "    // getMessage() を出力する",
        "    println(getMessage())",
        "}"
      ],
      "lineHints": [null, "* でワイルドカードインポートします。", null, null, "suspend で一時停止可能な関数にします。", null, "delay で待機します。", null, "Hello と入力しましょう。", null, null, null, "main と入力しましょう。", null, "println と入力しましょう。", null],
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
          "title": "sequence（シーケンス）とは？",
          "image": "/illustrations/common/select.png",
          "content": "# 必要なときだけ計算する\n\n**sequence** は「遅延評価（ちえんひょうか）」でデータを生成します。\n\n遅延評価とは「必要になるまで計算しない」という仕組みです。\n\n蛇口をひねると水が出るように、使うときに初めてデータが作られます。"
        },
        {
          "title": "なぜシーケンスが便利？",
          "image": "/illustrations/common/filter.png",
          "content": "# メモリを節約できる\n\nリストは全部のデータをメモリに持ちますが、シーケンスは使う分だけ作ります。\n\n例えば、1億個の数から最初の5個だけ欲しいとき、シーケンスなら5個分しかメモリを使いません。"
        },
        {
          "title": "generateSequence の使い方",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 無限（むげん）のシーケンスを作る\n\n```kotlin\nval nums = generateSequence(1) { it * 2 }\n```\n\nこれは「1から始めて、次は2倍」という無限のシーケンスです。\n\n1, 2, 4, 8, 16, 32... と続きます。\n\n無限でも、使う分だけ計算されるので大丈夫です。"
        },
        {
          "title": "take と toList",
          "image": "/illustrations/common/key_security_lock.png",
          "content": "# 必要な分だけ取り出す\n\n```kotlin\ngenerateSequence(1) { it * 2 }\n    .take(4)      // 最初の4つを取る\n    .toList()     // リストに変換\n// [1, 2, 4, 8]\n```\n\n`take(4)` で「4個だけ」、`toList()` で実際にリストにします。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 目標（もくひょう）\n\n2倍ずつ増えるシーケンスを作りましょう。\n\n1. `generateSequence(1) { it * 2 }` で開始\n2. `.take(4)` で4つ取る\n3. `.toList()` でリストに変換\n4. 結果は `[1, 2, 4, 8]` になる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val nums = generateSequence(1) { it * 2 }\n        .take(4)\n        .toList()\n    println(nums)\n}",
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // generateSequence で無限シーケンスを生成する\n    val nums = ___(1) { it * 2 }\n        // 4つ取得する\n        .take(___)\n        // リストに変換する\n        .___\n    // nums を出力する\n    ___(nums)\n}",
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
      "lineHints": [null, "main と入力しましょう。", null, "generateSequence で無限シーケンスを生成します。", null, "4 と入力しましょう。", null, "toList() と入力しましょう。", null, "println と入力しましょう。", null],
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
          "title": "inline（インライン）関数とは？",
          "image": "/illustrations/common/padlock_open.png",
          "content": "# 関数の中身を直接埋め込む\n\n**inline** は、関数を呼び出す代わりに、中身をその場に展開（てんかい）します。\n\nコピー＆ペーストで貼り付けるイメージです。\n\nこうすると、関数呼び出しの時間がなくなって速くなります。"
        },
        {
          "title": "なぜ inline が必要？",
          "image": "/illustrations/common/loop_infinity.png",
          "content": "# ラムダを渡すときに便利\n\n関数にラムダを渡すと、内部で「ラムダオブジェクト」が作られます。\n\nこれは少しメモリと時間を使います。\n\n`inline` をつけると、この無駄をなくせます。"
        },
        {
          "title": "inline 関数の書き方",
          "image": "/illustrations/3d/loop.png",
          "content": "# fun の前に inline をつける\n\n```kotlin\ninline fun repeat(times: Int, action: (Int) -> Unit) {\n    for (i in 0 until times) action(i)\n}\n```\n\n`(Int) -> Unit` は「Intを受け取って何も返さない関数」という型です。"
        },
        {
          "title": "inline 関数を使う",
          "image": "/illustrations/common/loop_gears.png",
          "content": "# 普通の関数と同じように使える\n\n```kotlin\nrepeat(3) { println(it) }\n// 0, 1, 2 が表示される\n```\n\n呼び出し方は普通の関数と同じですが、内部では展開されて高速に動きます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/circular_arrow.png",
          "content": "# 目標（もくひょう）\n\ninline関数を作ってみましょう。\n\n1. `inline fun repeat(times: Int, action: (Int) -> Unit)` を定義\n2. `for` ループで action を呼び出す\n3. `repeat(3) { println(it) }` で0, 1, 2を表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "inline fun repeat(times: Int, action: (Int) -> Unit) {\n    for (i in 0 until times) action(i)\n}\n\nfun main() {\n    repeat(3) { println(it) }\n}",
      "holeyCode": "// inline で関数をインライン化する\n___ fun repeat(times: Int, action: (Int) -> Unit) {\n    // 0 から times まで繰り返す\n    for (i in 0 until times) ___(i)\n}\n\n// main 関数を定義する\nfun ___() {\n    // repeat を呼び出す\n    ___(3) { println(it) }\n}",
      "correctLines": [
        "// inline で関数をインライン化する",
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
      "lineHints": [null, "inline で関数をインライン化します。", null, "指定された回数や範囲で、繰り返し処理（ループ）を行います。", null, null, null, "main と入力しましょう。", null, "repeat と入力しましょう。", null],
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
          "title": "reified（レイファイド）型パラメータとは？",
          "image": "/illustrations/common/speech_bubble_code.png",
          "content": "# 実行時に型情報を使う\n\n通常、ジェネリクス（型パラメータ）の型情報は実行時には消えてしまいます。\n\n**reified** をつけると、実行時にも型情報を使えます。\n\n「reify」は「具体化（ぐたいか）する」という意味です。"
        },
        {
          "title": "なぜ reified が必要？",
          "image": "/illustrations/common/robot_greet.png",
          "content": "# 型チェックをするため\n\n普通のジェネリクスでは `value is T` のような型チェックができません。\n\n```kotlin\nfun <T> check(value: Any): Boolean {\n    return value is T  // エラー！\n}\n```\n\n`reified` をつけると、これができるようになります。"
        },
        {
          "title": "reified の使い方",
          "image": "/illustrations/common/cycle_arrows.png",
          "content": "# inline + reified のセット\n\n`reified` は必ず `inline` 関数と一緒に使います。\n\n```kotlin\ninline fun <reified T> checkType(value: Any): Boolean {\n    return value is T\n}\n```\n\n`<reified T>` で「型Tを具体化して使う」という意味になります。"
        },
        {
          "title": "reified 関数を呼び出す",
          "image": "/illustrations/common/loading_spinner.png",
          "content": "# 型を指定して呼び出す\n\n```kotlin\ncheckType<String>(\"hello\")  // true\ncheckType<Int>(\"hello\")     // false\n```\n\n`<String>` や `<Int>` で「どの型かチェックするか」を指定します。\n\n文字列は String 型なので true、Int 型ではないので false になります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/loop_infinity.png",
          "content": "# 目標（もくひょう）\n\n型チェック関数を作りましょう。\n\n1. `inline fun <reified T> checkType` を定義\n2. `value is T` で型チェック\n3. `checkType<String>(\"test\")` は true\n4. `checkType<Int>(\"test\")` は false"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "inline fun <reified T> checkType(value: Any): Boolean {\n    return value is T\n}\n\nfun main() {\n    println(checkType<String>(\"test\"))\n    println(checkType<Int>(\"test\"))\n}",
      "holeyCode": "// reified で実行時に型情報を使う\ninline fun <___ T> checkType(value: Any): Boolean {\n    // value が T 型かチェックする\n    return value ___ T\n}\n\n// main 関数を定義する\nfun ___() {\n    // String 型かチェックする\n    println(checkType<___>(\"test\"))\n    // Int 型かチェックする\n    println(checkType<___>(\"test\"))\n}",
      "correctLines": [
        "// reified で実行時に型情報を使う",
        "inline fun <reified T> checkType(value: Any): Boolean {",
        "    // value が T 型かチェックする",
        "    return value is T",
        "}",
        "",
        "// main 関数を定義する",
        "fun main() {",
        "    // String 型かチェックする",
        "    println(checkType<String>(\"test\"))",
        "    // Int 型かチェックする",
        "    println(checkType<Int>(\"test\"))",
        "}"
      ],
      "lineHints": [null, "reified で実行時に型情報を使えます。", null, "is と入力しましょう。", null, null, null, "main と入力しましょう。", null, "String と入力しましょう。", null, "Int と入力しましょう。", null],
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
          "title": "apply（アプライ）スコープ関数とは？",
          "image": "/illustrations/common/shield_gold.png",
          "content": "# オブジェクトを設定して返す\n\n**apply** は「適用（てきよう）する」という意味です。\n\nオブジェクトに対して設定を行い、そのオブジェクト自体を返します。\n\n新しいオブジェクトを作って設定するときに便利です。"
        },
        {
          "title": "apply の中では this が使える",
          "image": "/illustrations/common/key_silver.png",
          "content": "# this でオブジェクトにアクセス\n\n`apply { }` の中では、対象のオブジェクトが `this` になります。\n\n```kotlin\nval person = Person().apply {\n    this.name = \"Alice\"  // this は省略できる\n    name = \"Alice\"       // これでもOK\n}\n```\n\n`this.` を省略できるので、シンプルに書けます。"
        },
        {
          "title": "apply でオブジェクトを初期化",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 作ってすぐ設定\n\n```kotlin\ndata class Config(var host: String = \"\", var port: Int = 0)\n\nval cfg = Config().apply {\n    host = \"localhost\"\n    port = 8080\n}\n```\n\nオブジェクトを作って、すぐに中身を設定できます。"
        },
        {
          "title": "apply は自分自身を返す",
          "image": "/illustrations/common/key_security_lock.png",
          "content": "# 設定したオブジェクトがそのまま返る\n\n```kotlin\nval cfg = Config().apply {\n    host = \"localhost\"\n}\nprintln(cfg)  // Config(host=localhost, port=0)\n```\n\n`apply` の結果は設定されたオブジェクト自体です。\n\nこれが `let` との違いです（letはラムダの戻り値を返す）。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 目標（もくひょう）\n\napplyでConfigを設定しましょう。\n\n1. `Config()` で新しいオブジェクトを作る\n2. `.apply { }` で設定する\n3. `host` を \"localhost\" に\n4. `port` を 8080 に"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "data class Config(var host: String = \"\", var port: Int = 0)\n\nfun main() {\n    val cfg = Config().apply {\n        // hostに\"localhost\"、portに8080を設定\n        host = \"localhost\"\n        port = 8080\n    }\n    println(cfg)\n}",
      "holeyCode": "// data class を定義する\n___ class Config(var host: String = \"\", var port: Int = 0)\n\n// main 関数を定義する\nfun ___() {\n    // apply で設定してオブジェクトを返す\n    val cfg = Config().___ {\n        // hostを設定する\n        host = \"___\"\n        // portを設定する\n        port = ___\n    }\n    // cfg を出力する\n    ___(cfg)\n}",
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
      "lineHints": [null, "data で data class を定義します。", null, null, "main と入力しましょう。", null, "apply で設定してオブジェクトを返します。", null, "localhost と入力しましょう。", null, "変数に数値を代入（保存）します。", null, null, "println で出力します。", null],
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
          "title": "also（オールソー）スコープ関数とは？",
          "image": "/illustrations/common/padlock_open.png",
          "content": "# 何かをして、オブジェクトを返す\n\n**also** は「〜もまた」という意味の英語です。\n\nオブジェクトに対して何かの処理（副作用）をして、そのオブジェクト自体を返します。\n\nログ出力やデバッグに便利です。"
        },
        {
          "title": "also の中では it が使える",
          "image": "/illustrations/common/shield_gold.png",
          "content": "# it でオブジェクトにアクセス\n\n`also { }` の中では、対象のオブジェクトを `it` で参照します。\n\n```kotlin\nval num = 42.also {\n    println(\"Value: $it\")  // it は 42\n}\n```\n\n`apply` との違いは、`this` ではなく `it` を使うことです。"
        },
        {
          "title": "also でログを出力",
          "image": "/illustrations/common/key_silver.png",
          "content": "# 処理の途中で確認する\n\n```kotlin\ngetData()\n    .also { println(\"Got: $it\") }  // ここでログ\n    .process()\n```\n\n処理の流れを止めずに、途中の値を確認できます。\n\nデバッグのときにとても便利です。"
        },
        {
          "title": "also は自分自身を返す",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 元のオブジェクトがそのまま返る\n\n```kotlin\nval num = 42.also {\n    println(\"Value: $it\")\n}\nprintln(num)  // 42\n```\n\n`{ }` の中で何をしても、返されるのは元のオブジェクト（42）です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/key_security_lock.png",
          "content": "# 目標（もくひょう）\n\nalsoで値を確認しましょう。\n\n1. `42.also { }` で42に対して処理する\n2. `println(\"Value: $it\")` でログ出力\n3. 結果の num は 42 のまま"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val num = 42.also {\n        println(\"Value: $it\")\n    }\n    println(num)\n}",
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // also で副作用を実行してオブジェクトを返す\n    val num = ___.___ {\n        // 値を出力する\n        println(\"Value: $___\")\n    }\n    // num を出力する\n    ___(num)\n}",
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
      "lineHints": [null, "main と入力しましょう。", null, "also で副作用を実行してオブジェクトを返します。", null, "it と入力しましょう。", null, null, "println と入力しましょう。", null],
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
          "title": "run（ラン）スコープ関数とは？",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 処理を実行して結果を返す\n\n**run** は「実行する」という意味です。\n\nオブジェクトに対して処理を行い、その処理の結果を返します。\n\n`apply` や `also` と違って、オブジェクト自体ではなく計算結果を返します。"
        },
        {
          "title": "run の中では this が使える",
          "image": "/illustrations/common/padlock_open.png",
          "content": "# this でオブジェクトにアクセス\n\n```kotlin\nval length = \"Hello\".run {\n    println(this)  // Hello\n    length         // 戻り値は5\n}\n```\n\n`{ }` の最後の式が戻り値になります。\n\n`this` は省略できるので `length` だけでOKです。"
        },
        {
          "title": "run で計算をまとめる",
          "image": "/illustrations/common/shield_gold.png",
          "content": "# 複数の処理を一つのブロックに\n\nレシーバなしでも使えます。\n\n```kotlin\nval result = run {\n    val a = 10\n    val b = 20\n    a + b  // 30が返る\n}\n```\n\n関連する処理をまとめたいときに便利です。"
        },
        {
          "title": "run の戻り値",
          "image": "/illustrations/common/key_silver.png",
          "content": "# 最後の式が戻り値\n\n```kotlin\nval result = \"Hello World\".run {\n    split(\" \").size  // スペースで分割して数を数える\n}\nprintln(result)  // 2\n```\n\n`split(\" \")` で [\"Hello\", \"World\"] に分割、`.size` で 2 を取得。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 目標（もくひょう）\n\nrunで文字列を分割して単語数を数えましょう。\n\n1. `\"Hello World\".run { }` を使う\n2. `split(\" \")` でスペースで分割\n3. `.size` で要素数を取得\n4. 結果は 2 になる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val result = \"Hello World\".run {\n        split(\" \").size\n    }\n    println(result)\n}",
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // run でブロックを実行して結果を返す\n    val result = \"Hello World\".___ {\n        // スペースで分割してサイズを取得する\n        split(\"___\").___\n    }\n    // result を出力する\n    ___(result)\n}",
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
      "lineHints": [null, "main と入力しましょう。", null, "run でブロックを実行して結果を返します。", null, "スペース1文字を入力しましょう。", null, null, "println と入力しましょう。", null],
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
          "title": "takeIf（テイクイフ）とは？",
          "image": "/illustrations/3d/either_fork.png",
          "content": "# 条件を満たせば値を取る\n\n**takeIf** は「もし〜なら取る」という意味です。\n\n条件が `true` なら値を返し、`false` なら `null` を返します。\n\n条件付きで値を使いたいときに便利です。"
        },
        {
          "title": "takeIf の使い方",
          "image": "/illustrations/common/logic_gate_or.png",
          "content": "# 条件を満たせば値、そうでなければ null\n\n```kotlin\nval num = 10.takeIf { it > 5 }   // 10\nval num2 = 3.takeIf { it > 5 }   // null\n```\n\n10は5より大きいので10が返ります。\n\n3は5より大きくないのでnullが返ります。"
        },
        {
          "title": "takeUnless（テイクアンレス）とは？",
          "image": "/illustrations/common/branching_paths.png",
          "content": "# 条件を満たさなければ値を取る\n\n**takeUnless** は takeIf の逆です。\n\n条件が `false` なら値を返し、`true` なら `null` を返します。\n\n```kotlin\nval num = 10.takeUnless { it > 5 }  // null\nval num2 = 3.takeUnless { it > 5 }  // 3\n```"
        },
        {
          "title": "takeIf と takeUnless の違い",
          "image": "/illustrations/common/split_road.png",
          "content": "# If = 「〜なら」、Unless = 「〜でなければ」\n\n```kotlin\n// takeIf: 条件がtrueなら値\n10.takeIf { it > 5 }     // 10\n\n// takeUnless: 条件がfalseなら値\n10.takeUnless { it > 5 } // null\n```\n\n「unless」は「〜でない限り」という意味の英語です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/crossroad.png",
          "content": "# 目標（もくひょう）\n\ntakeIfで条件付きの値を取得しましょう。\n\n1. `10.takeIf { it > 5 }` を実行\n2. 10は5より大きいので条件を満たす\n3. 結果は 10 になる（nullではない）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val num = 10.takeIf { it > 5 }\n    println(num)\n}",
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // takeIf で条件を満たせば値を返す\n    val num = ___.___ { it > 5 }\n    // num を出力する\n    ___(num)\n}",
      "correctLines": [
        "// main 関数を定義する",
        "fun main() {",
        "    // takeIf で条件を満たせば値を返す",
        "    val num = 10.takeIf { it > 5 }",
        "    // num を出力する",
        "    println(num)",
        "}"
      ],
      "lineHints": [null, "main と入力しましょう。", null, "takeIf で条件を満たせば値を返します。", null, "println と入力しましょう。", null],
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
          "title": "groupBy（グループバイ）とは？",
          "image": "/illustrations/common/traffic_light.png",
          "content": "# 仲間ごとに分ける\n\n**groupBy** は、要素を「グループ」に分ける関数です。\n\n学校のクラス分けのように、ある基準で要素を分類します。\n\n結果は「キー → リスト」の Map になります。"
        },
        {
          "title": "groupBy の使い方",
          "image": "/illustrations/3d/loop.png",
          "content": "# グループ分けの基準を指定\n\n```kotlin\nval words = listOf(\"a\", \"bb\", \"ccc\")\nval byLength = words.groupBy { it.length }\n// {1=[a], 2=[bb], 3=[ccc]}\n```\n\n文字数でグループ分け：\n- 1文字グループ: [\"a\"]\n- 2文字グループ: [\"bb\"]\n- 3文字グループ: [\"ccc\"]"
        },
        {
          "title": "数値のグループ分け",
          "image": "/illustrations/common/loop_gears.png",
          "content": "# 偶数と奇数に分ける\n\n```kotlin\nval nums = listOf(1, 2, 3, 4, 5)\nval grouped = nums.groupBy { it % 2 }\n// {1=[1, 3, 5], 0=[2, 4]}\n```\n\n`% 2` で2で割った余りをキーに：\n- 余り1（奇数）: [1, 3, 5]\n- 余り0（偶数）: [2, 4]"
        },
        {
          "title": "groupBy の結果はMap",
          "image": "/illustrations/common/circular_arrow.png",
          "content": "# キーと値のペア\n\n`groupBy` の結果は `Map<キー, List<値>>` 型です。\n\n```kotlin\nval grouped = nums.groupBy { it % 2 }\nval oddNumbers = grouped[1]  // [1, 3, 5]\n```\n\nキーを指定してそのグループを取り出せます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cycle_arrows.png",
          "content": "# 目標（もくひょう）\n\n数を偶数・奇数でグループ分けしましょう。\n\n1. `listOf(1, 2, 3, 4, 5)` でリストを作る\n2. `.groupBy { it % 2 }` でグループ化\n3. 結果は `{1=[1, 3, 5], 0=[2, 4]}` になる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    val nums = listOf(1, 2, 3, 4, 5)\n    val grouped = nums.groupBy { it % 2 }\n    println(grouped)\n}",
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // listOf でリストを作成する\n    val nums = ___(1, 2, 3, 4, 5)\n    // groupBy でグループ化する\n    val grouped = nums.___ { it % 2 }\n    // grouped を出力する\n    ___(grouped)\n}",
      "correctLines": [
        "// main 関数を定義する",
        "fun main() {",
        "    // listOf でリストを作成する",
        "    val nums = listOf(1, 2, 3, 4, 5)",
        "    // groupBy でグループ化する",
        "    val grouped = nums.groupBy { it % 2 }",
        "    // grouped を出力する",
        "    println(grouped)",
        "}"
      ],
      "lineHints": [null, "main と入力しましょう。", null, "listOf と入力しましょう。", null, "groupBy でグループ化します。", null, "println と入力しましょう。", null],
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
          "title": "fold（フォールド）とは？",
          "image": "/illustrations/common/loading_spinner.png",
          "content": "# 要素を1つにまとめる\n\n**fold** は「畳（たた）む」という意味です。\n\nリストの要素を順番に処理して、1つの値にまとめます。\n\n洗濯物を畳んで小さくするイメージです。"
        },
        {
          "title": "fold の仕組み",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 初期値から始めて累積（るいせき）\n\n```kotlin\nlistOf(1, 2, 3).fold(0) { acc, n -> acc + n }\n```\n\n- `0` が初期値\n- `acc` は累積値（これまでの結果）\n- `n` は今見ている要素\n\n0 + 1 = 1 → 1 + 2 = 3 → 3 + 3 = 6"
        },
        {
          "title": "fold で掛け算",
          "image": "/illustrations/common/monitor.png",
          "content": "# 全部かけ合わせる\n\n```kotlin\nval product = listOf(1, 2, 3, 4).fold(1) { acc, n -> acc * n }\n// 24\n```\n\n1 * 1 = 1 → 1 * 2 = 2 → 2 * 3 = 6 → 6 * 4 = 24\n\n掛け算の初期値は 1 です（0だと結果が0になってしまう）。"
        },
        {
          "title": "reduce（リデュース）との違い",
          "image": "/illustrations/common/intro_robot.png",
          "content": "# reduce は最初の要素が初期値\n\n```kotlin\nlistOf(1, 2, 3).reduce { acc, n -> acc + n }\n// 6\n```\n\n`reduce` は初期値を指定しません。リストの最初の要素が初期値になります。\n\n`fold` は初期値を自由に決められます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/pencil.png",
          "content": "# 目標（もくひょう）\n\nfoldで1から4までの積（せき）を計算しましょう。\n\n1. `listOf(1, 2, 3, 4)` でリストを作る\n2. `.fold(1) { acc, n -> acc * n }` で掛け算\n3. 結果は 24 (= 1 * 2 * 3 * 4) になる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fun main() {\n    // listOf でリスト(1, 2, 3, 4)を作成する\n    val nums = listOf(1, 2, 3, 4)\n    val product = nums.fold(1) { acc, n -> acc * n }\n    println(product)\n}",
      "holeyCode": "// main 関数を定義する\nfun ___() {\n    // listOf でリスト(1, 2, 3, 4)を作成する\n    val nums = ___(1, 2, 3, 4)\n    // fold で畳み込む\n    val product = nums.___(1) { acc, n -> acc * n }\n    // product を出力する\n    ___(product)\n}",
      "correctLines": [
        "// main 関数を定義する",
        "fun main() {",
        "    // listOf でリスト(1, 2, 3, 4)を作成する",
        "    val nums = listOf(1, 2, 3, 4)",
        "    // fold で畳み込む",
        "    val product = nums.fold(1) { acc, n -> acc * n }",
        "    // product を出力する",
        "    println(product)",
        "}"
      ],
      "lineHints": [null, "main と入力しましょう。", null, "listOf と入力しましょう。", null, "fold で畳み込みます。", null, "println と入力しましょう。", null],
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
