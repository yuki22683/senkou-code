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
      "content": "`reified` を使うと、実行時に型情報を利用できます。\\n\\n```kotlin\\ninline fun <reified T> isType(value: Any): Boolean {\\n    return value is T\\n}\\n\\nprintln(isType<String>(\"テスト\"))\\nprintln(isType<Int>(\"テスト\"))  \\n```\\n\\n=> true\\n\\n=> false\\n\\n通常のジェネリクスでは消去される型情報が保持されます。\\n\\n`reified` は `inline` 関数でのみ使用可能です。"
    },
    {
      "title": "スコープ関数（apply / also）",
      "content": "スコープ関数を使うと、オブジェクトの設定を簡潔に書けます。\\n\\n```kotlin\\n// apply: オブジェクト自身を返す\\nval config = Config().apply {\\n    host = \"localhost\"\\n    port = 8080\\n}\\n\\n// also: 副作用を実行してオブジェクトを返す\\nval num = 42.also { println(\"値: $it\") }\\n```\\n\\n`apply` はオブジェクトの設定に、`also` はログ出力などに便利です。"
    },
    {
      "title": "スコープ関数（run / let）",
      "content": "`run` と `let` は処理結果を返すスコープ関数です。\\n\\n```kotlin\\n// run: ブロックの結果を返す\\nval length = \"Hello World\".run {\\n    split(\" \").size\\n}\\nprintln(length)\\n\\n// let: nullableとの組み合わせ\\nval num: Int? = 42\\nnum?.let { println(it * 2) }\\n```\\n\\n=> 2\\n\\n=> 84\\n\\n`let` は特にnullチェックとの組み合わせでよく使われます。"
    }
  ],
  "exercises": [
    {
      "title": "suspend 関数",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "suspend（サスペンド）関数とは？",
          "content": "# 一時停止できる関数\\n\\n**suspend** は英語で「中断する」という意味です。\\n\\n普通の関数は最後まで一気に実行されますが、suspend関数は途中で「待機」できます。\\n\\n例えば、ネットからデータを取ってくる間、他の処理を進められます。"
        },
        {
          "title": "コルーチンとは？",
          "content": "# 軽い並行処理\\n\\n**コルーチン** は、複数の処理を効率よく進める仕組みです。\\n\\n料理で例えると、お湯を沸かしている間に野菜を切る、というイメージです。\\n\\nsuspend関数はコルーチンの中で使います。"
        },
        {
          "title": "suspend関数の書き方",
          "content": "# fun の前に suspend をつける\\n\\n```kotlin\\nsuspend fun fetchData(): String {\\n    delay(1000)  // 1秒待機\\n    return \"data\"\\n}\\n```\\n\\n`delay()` は「指定した時間だけ待つ」関数です。\\n\\nsuspend関数の中でだけ使えます。"
        },
        {
          "title": "runBlocking で実行",
          "content": "# コルーチンを開始する\\n\\n```kotlin\\nrunBlocking {\\n    val result = fetchData()\\n    println(result)\\n}\\n```\\n\\n`runBlocking` はコルーチンを開始して、終わるまで待ちます。\\n\\nこの中でsuspend関数を呼び出せます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nsuspend関数を作って呼び出しましょう。\\n\\n1. `suspend fun getMessage()` を定義\\n2. `delay(100)` で100ミリ秒待機\\n3. `\"Hello\"` を返す\\n4. `runBlocking` の中で呼び出して表示"
        }
      ],
      "correctCode": "// coroutinesをインポート\\nimport kotlinx.coroutines.*\\n\\n// suspend funでgetMessage関数を定義\\nsuspend fun getMessage(): String {\\n    // delay関数（引数100）で100ミリ秒待機\\n    delay(100)\\n    // 「こんにちは」を返す\\n    return \"こんにちは\"\\n// ブロックを閉じる\\n}\\n\\n// fun main()をrunBlockingで定義\\nfun main() = runBlocking {\\n    // printlnでgetMessage()を出力\\n    println(getMessage())\\n// ブロックを閉じる\\n}",
      "holeyCode": "// coroutinesをインポート\\n___ ___.___.___\\n___\\n// suspend funでgetMessage関数を定義\\n___ ___ ___(): ___ {\\n    // delay関数（引数100）で100ミリ秒待機\\n    ___(___)\\n    // 「こんにちは」を返す\\n    ___ \"___\"\\n// ブロックを閉じる\\n___\\n___\\n// fun main()をrunBlockingで定義\\n___ ___() = ___ {\\n    // printlnでgetMessage()を出力\\n    ___(___(___))\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// coroutinesをインポート",
          "import kotlinx.coroutines.*",
          "",
          "// suspend funでgetMessage関数を定義",
          "suspend fun getMessage(): String {",
          "    // delay関数（引数100）で100ミリ秒待機",
          "    delay(100)",
          "    // 「こんにちは」を返す",
          "    return \"こんにちは\"",
          "// ブロックを閉じる",
          "}",
          "",
          "// fun main()をrunBlockingで定義",
          "fun main() = runBlocking {",
          "    // printlnでgetMessage()を出力",
          "    println(getMessage())",
          "// ブロックを閉じる",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "sequenceについて学びます",
      "tutorialSlides": [
        {
          "title": "sequence（シーケンス）とは？",
          "content": "# 必要なときだけ計算する\\n\\n**sequence** は「遅延評価」でデータを生成します。\\n\\n遅延評価とは「必要になるまで計算しない」という仕組みです。\\n\\n蛇口をひねると水が出るように、使うときに初めてデータが作られます。"
        },
        {
          "title": "なぜシーケンスが便利？",
          "content": "# メモリを節約できる\\n\\nリストは全部のデータをメモリに持ちますが、シーケンスは使う分だけ作ります。\\n\\n例えば、1億個の数から最初の5個だけ欲しいとき、シーケンスなら5個分しかメモリを使いません。"
        },
        {
          "title": "generateSequence の使い方",
          "content": "# 無限のシーケンスを作る\\n\\n```kotlin\\nval nums = generateSequence(1) { it * 2 }\\n```\\n\\nこれは「1から始めて、次は2倍」という無限のシーケンスです。\\n\\n1, 2, 4, 8, 16, 32... と続きます。\\n\\n無限でも、使う分だけ計算されるので大丈夫です。"
        },
        {
          "title": "take と toList",
          "content": "# 必要な分だけ取り出す\\n\\n```kotlin\\ngenerateSequence(1) { it * 2 }\\n    .take(4)      // 最初の4つを取る\\n    .toList()     // リストに変換\\n// [1, 2, 4, 8]\\n```\\n\\n`take(4)` で「4個だけ」、`toList()` で実際にリストにします。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n2倍ずつ増えるシーケンスを作りましょう。\\n\\n1. `generateSequence(1) { it * 2 }` で開始\\n2. `.take(4)` で4つ取る\\n3. `.toList()` でリストに変換\\n4. 結果は `[1, 2, 4, 8]` になる"
        }
      ],
      "correctCode": "// fun main()でmain関数を定義\\nfun main() {\\n    // generateSequence関数（初期値1）で無限シーケンスを生成\\n    val nums = generateSequence(1) { it * 2 }\\n        // take関数で4つ取得\\n        .take(4)\\n        // toListでリストに変換\\n        .toList()\\n    // printlnでnumsを出力\\n    println(nums)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// fun main()でmain関数を定義\\n___ ___() {\\n    // generateSequence関数（初期値1）で無限シーケンスを生成\\n    ___ ___ = ___(___) { ___ * ___ }\\n        // take関数で4つ取得\\n        .___(___)\\n        // toListでリストに変換\\n        .___()\\n    // printlnでnumsを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // generateSequence関数（初期値1）で無限シーケンスを生成",
          "    val nums = generateSequence(1) { it * 2 }",
          "        // take関数で4つ取得",
          "        .take(4)",
          "        // toListでリストに変換",
          "        .toList()",
          "    // printlnでnumsを出力",
          "    println(nums)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "generateSequenceで無限シーケンスを生成します。",
          null,
          "takeで最初の4つを取得します。",
          null,
          "toListでリストに変換します。",
          null,
          "printlnでnumsを出力します。",
          null,
          "ブロックを閉じます。"
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "inline（インライン）関数とは？",
          "content": "# 関数の中身を直接埋め込む\\n\\n**inline** は、関数を呼び出す代わりに、中身をその場に展開します。\\n\\nコピー＆ペーストで貼り付けるイメージです。\\n\\nこうすると、関数呼び出しの時間がなくなって速くなります。"
        },
        {
          "title": "なぜ inline が必要？",
          "content": "# ラムダを渡すときに便利\\n\\n関数にラムダを渡すと、内部で「ラムダオブジェクト」が作られます。\\n\\nこれは少しメモリと時間を使います。\\n\\n`inline` をつけると、この無駄をなくせます。"
        },
        {
          "title": "inline 関数の書き方",
          "content": "# fun の前に inline をつける\\n\\n```kotlin\\ninline fun repeat(times: Int, action: (Int) -> Unit) {\\n    for (i in 0 until times) action(i)\\n}\\n```\\n\\n`(Int) -> Unit` は「Intを受け取って何も返さない関数」という型です。"
        },
        {
          "title": "inline 関数を使う",
          "content": "# 普通の関数と同じように使える\\n\\n```kotlin\\nrepeat(3) { println(it) }\\n// 0, 1, 2 が表示される\\n```\\n\\n呼び出し方は普通の関数と同じですが、内部では展開されて高速に動きます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\ninline関数を作ってみましょう。\\n\\n1. `inline fun repeat(times: Int, action: (Int) -> Unit)` を定義\\n2. `for` ループで action を呼び出す\\n3. `repeat(3) { println(it) }` で0, 1, 2を表示"
        }
      ],
      "correctCode": "// inline funでrepeat関数を定義\\ninline fun repeat(times: Int, action: (Int) -> Unit) {\\n    // for inで0からtimesまで繰り返す\\n    for (i in 0 until times) action(i)\\n// ブロックを閉じる\\n}\\n\\n// fun main()でmain関数を定義\\nfun main() {\\n    // repeat関数（引数3）でラムダを3回実行\\n    repeat(3) { println(it) }\\n// ブロックを閉じる\\n}",
      "holeyCode": "// inline funでrepeat関数を定義\\n___ ___ ___(___: ___, ___: (___) -> ___) {\\n    // for inで0からtimesまで繰り返す\\n    for (___ in ___ ___ ___) ___(___)\\n// ブロックを閉じる\\n___\\n___\\n// fun main()でmain関数を定義\\n___ ___() {\\n    // repeat関数（引数3）でラムダを3回実行\\n    ___(___) { ___(___) }\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// inline funでrepeat関数を定義",
          "inline fun repeat(times: Int, action: (Int) -> Unit) {",
          "    // for inで0からtimesまで繰り返す",
          "    for (i in 0 until times) action(i)",
          "// ブロックを閉じる",
          "}",
          "",
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // repeat関数（引数3）でラムダを3回実行",
          "    repeat(3) { println(it) }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "inline funで高階関数repeat定義します。",
          null,
          "for inで0からtimesまでaction(i)を実行します。",
          null,
          "ブロックを閉じます。",
          null,
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "repeat(3)で0、1、2を出力します。",
          null,
          "ブロックを閉じます。"
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
          "others": ["repeat", "times", "Int", "action", "Unit", "i", "0", "until", "}", "", "main", "3", "println", "it", "// main 関数を定義する", "// repeat関数（引数3）を呼び出す"]
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
          "content": "# 実行時に型情報を使う\\n\\n通常、ジェネリクス（型パラメータ）の型情報は実行時には消えてしまいます。\\n\\n**reified** をつけると、実行時にも型情報を使えます。\\n\\n「reify」は「具体化する」という意味です。"
        },
        {
          "title": "なぜ reified が必要？",
          "content": "# 型チェックをするため\\n\\n普通のジェネリクスでは `value is T` のような型チェックができません。\\n\\n```kotlin\\nfun <T> check(value: Any): Boolean {\\n    return value is T  // エラー！\\n}\\n```\\n\\n`reified` をつけると、これができるようになります。"
        },
        {
          "title": "reified の使い方",
          "content": "# inline + reified のセット\\n\\n`reified` は必ず `inline` 関数と一緒に使います。\\n\\n```kotlin\\ninline fun <reified T> checkType(value: Any): Boolean {\\n    return value is T\\n}\\n```\\n\\n`<reified T>` で「型Tを具体化して使う」という意味になります。"
        },
        {
          "title": "reified 関数を呼び出す",
          "content": "# 型を指定して呼び出す\\n\\n```kotlin\\ncheckType<String>(\"hello\")  // true\\ncheckType<Int>(\"hello\")     // false\\n```\\n\\n`<String>` や `<Int>` で「どの型かチェックするか」を指定します。\\n\\n文字列は String 型なので true、Int 型ではないので false になります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n型チェック関数を作りましょう。\\n\\n1. `inline fun <reified T> checkType` を定義\\n2. `value is T` で型チェック\\n3. `checkType<String>(\"test\")` は true\\n4. `checkType<Int>(\"test\")` は false"
        }
      ],
      "correctCode": "// inline fun <reified T>でcheckType関数を定義\\ninline fun <reified T> checkType(value: Any): Boolean {\\n    // return value is Tで型チェック\\n    return value is T\\n// ブロックを閉じる\\n}\\n\\n// fun main()でmain関数を定義\\nfun main() {\\n    // checkType<String>でString型かチェック\\n    println(checkType<String>(\"テスト\"))\\n    // checkType<Int>でInt型かチェック\\n    println(checkType<Int>(\"テスト\"))\\n// ブロックを閉じる\\n}",
      "holeyCode": "// inline fun <reified T>でcheckType関数を定義\\n___ ___ <___ ___> ___(___: ___): ___ {\\n    // return value is Tで型チェック\\n    ___ ___ ___ ___\\n// ブロックを閉じる\\n___\\n___\\n// fun main()でmain関数を定義\\n___ ___() {\\n    // checkType<String>でString型かチェック\\n    ___(___<___>(\"___\"))\\n    // checkType<Int>でInt型かチェック\\n    ___(___<___>(\"___\"))\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// inline fun <reified T>でcheckType関数を定義",
          "inline fun <reified T> checkType(value: Any): Boolean {",
          "    // return value is Tで型チェック",
          "    return value is T",
          "// ブロックを閉じる",
          "}",
          "",
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // checkType<String>でString型かチェック",
          "    println(checkType<String>(\"テスト\"))",
          "    // checkType<Int>でInt型かチェック",
          "    println(checkType<Int>(\"テスト\"))",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "inline fun <reified T>で型パラメータを実行時に使えます。",
          null,
          "value is Tでvalueの型をチェックします。",
          null,
          "ブロックを閉じます。",
          null,
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "checkType<String>でString型かチェックします。",
          null,
          "checkType<Int>でInt型かチェックします。",
          null,
          "ブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "reified",
            "inline",
            "fun",
            "return",
            "is"
          ],
          "others": ["T", "checkType", "value", "Any", "Boolean", "}", "", "main", "println", "String", "テスト", "Int", "// main 関数を定義する", "// String 型かチェックする", "// Int 型かチェックする"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "apply（アプライ）スコープ関数とは？",
          "content": "# オブジェクトを設定して返す\\n\\n**apply** は「適用する」という意味です。\\n\\nオブジェクトに対して設定を行い、そのオブジェクト自体を返します。\\n\\n新しいオブジェクトを作って設定するときに便利です。"
        },
        {
          "title": "apply の中では this が使える",
          "content": "# this でオブジェクトにアクセス\\n\\n`apply { }` の中では、対象のオブジェクトが `this` になります。\\n\\n```kotlin\\nval person = Person().apply {\\n    this.name = \"Alice\"  // this は省略できる\\n    name = \"Alice\"       // これでもOK\\n}\\n```\\n\\n`this.` を省略できるので、シンプルに書けます。"
        },
        {
          "title": "apply でオブジェクトを初期化",
          "content": "# 作ってすぐ設定\\n\\n```kotlin\\ndata class Config(var host: String = \"\", var port: Int = 0)\\n\\nval cfg = Config().apply {\\n    host = \"localhost\"\\n    port = 8080\\n}\\n```\\n\\nオブジェクトを作って、すぐに中身を設定できます。"
        },
        {
          "title": "apply は自分自身を返す",
          "content": "# 設定したオブジェクトがそのまま返る\\n\\n```kotlin\\nval cfg = Config().apply {\\n    host = \"localhost\"\\n}\\nprintln(cfg)  // Config(host=localhost, port=0)\\n```\\n\\n`apply` の結果は設定されたオブジェクト自体です。\\n\\nこれが `let` との違いです（letはラムダの戻り値を返す）。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\napplyでConfigを設定しましょう。\\n\\n1. `Config()` で新しいオブジェクトを作る\\n2. `.apply { }` で設定する\\n3. `host` を \"localhost\" に\\n4. `port` を 8080 に"
        }
      ],
      "correctCode": "// data classでConfigを定義\\ndata class Config(var host: String = \"\", var port: Int = 0)\\n\\n// fun main()でmain関数を定義\\nfun main() {\\n    // Configインスタンスをapplyで設定しcfgに代入\\n    val cfg = Config().apply {\\n        // hostに\"localhost\"を設定\\n        host = \"localhost\"\\n        // portに8080を設定\\n        port = 8080\\n    // applyブロックを閉じる\\n    }\\n    // printlnでcfgを出力\\n    println(cfg)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// data classでConfigを定義\\n___ ___ ___(var ___: ___ = \"\", var ___: ___ = ___)\\n___\\n// fun main()でmain関数を定義\\n___ ___() {\\n    // Configインスタンスをapplyで設定しcfgに代入\\n    ___ ___ = ___().___ {\\n        // hostに\"localhost\"を設定\\n        ___ = \"___\"\\n        // portに8080を設定\\n        ___ = ___\\n    // applyブロックを閉じる\\n    ___\\n    // printlnでcfgを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// data classでConfigを定義",
          "data class Config(var host: String = \"\", var port: Int = 0)",
          "",
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // Configインスタンスをapplyで設定しcfgに代入",
          "    val cfg = Config().apply {",
          "        // hostに\"localhost\"を設定",
          "        host = \"localhost\"",
          "        // portに8080を設定",
          "        port = 8080",
          "    // applyブロックを閉じる",
          "    }",
          "    // printlnでcfgを出力",
          "    println(cfg)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "data classでConfigデータクラスを定義します。",
          null,
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "Config().applyでオブジェクトを設定します。",
          null,
          "hostに\"localhost\"を設定します。",
          null,
          "portに8080を設定します。",
          null,
          "applyブロックを閉じます。",
          null,
          "printlnでcfgを出力します。",
          null,
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "apply",
            "also",
            "run"
          ],
          "others": ["data", "class", "Config", "host", "String", "port", "Int", "0", "", "fun", "main", "val", "cfg", "localhost", "8080", "}", "println", "// cfg を出力する"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "also（オールソー）スコープ関数とは？",
          "content": "# 何かをして、オブジェクトを返す\\n\\n**also** は「〜もまた」という意味の英語です。\\n\\nオブジェクトに対して何かの処理（副作用）をして、そのオブジェクト自体を返します。\\n\\nログ出力やデバッグに便利です。"
        },
        {
          "title": "also の中では it が使える",
          "content": "# it でオブジェクトにアクセス\\n\\n`also { }` の中では、対象のオブジェクトを `it` で参照します。\\n\\n```kotlin\\nval num = 42.also {\\n    println(\"Value: $it\")  // it は 42\\n}\\n```\\n\\n`apply` との違いは、`this` ではなく `it` を使うことです。"
        },
        {
          "title": "also でログを出力",
          "content": "# 処理の途中で確認する\\n\\n```kotlin\\ngetData()\\n    .also { println(\"Got: $it\") }  // ここでログ\\n    .process()\\n```\\n\\n処理の流れを止めずに、途中の値を確認できます。\\n\\nデバッグのときにとても便利です。"
        },
        {
          "title": "also は自分自身を返す",
          "content": "# 元のオブジェクトがそのまま返る\\n\\n```kotlin\\nval num = 42.also {\\n    println(\"Value: $it\")\\n}\\nprintln(num)  // 42\\n```\\n\\n`{ }` の中で何をしても、返されるのは元のオブジェクト（42）です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nalsoで値を確認しましょう。\\n\\n1. `42.also { }` で42に対して処理する\\n2. `println(\"Value: $it\")` でログ出力\\n3. 結果の num は 42 のまま"
        }
      ],
      "correctCode": "// fun main()でmain関数を定義\\nfun main() {\\n    // 42にalsoで副作用を実行しnumに代入\\n    val num = 42.also {\\n        // printlnで「Value: $it」を出力\\n        println(\"Value: $it\")\\n    // alsoブロックを閉じる\\n    }\\n    // printlnでnumを出力\\n    println(num)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// fun main()でmain関数を定義\\n___ ___() {\\n    // 42にalsoで副作用を実行しnumに代入\\n    ___ ___ = ___.___ {\\n        // printlnで「Value: $it」を出力\\n        ___(\"___: $___\")\\n    // alsoブロックを閉じる\\n    ___\\n    // printlnでnumを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // 42にalsoで副作用を実行しnumに代入",
          "    val num = 42.also {",
          "        // printlnで「Value: $it」を出力",
          "        println(\"Value: $it\")",
          "    // alsoブロックを閉じる",
          "    }",
          "    // printlnでnumを出力",
          "    println(num)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "42.alsoで副作用を実行し42をnumに代入します。",
          null,
          "printlnで「Value: 42」を出力します。",
          null,
          "alsoブロックを閉じます。",
          null,
          "printlnでnumを出力します。",
          null,
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "also",
            "apply",
            "let"
          ],
          "others": ["fun", "main", "val", "num", "42", "also", "println", "Value", "it", "}", "}", "// num を出力する"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "run（ラン）スコープ関数とは？",
          "content": "# 処理を実行して結果を返す\\n\\n**run** は「実行する」という意味です。\\n\\nオブジェクトに対して処理を行い、その処理の結果を返します。\\n\\n`apply` や `also` と違って、オブジェクト自体ではなく計算結果を返します。"
        },
        {
          "title": "run の中では this が使える",
          "content": "# this でオブジェクトにアクセス\\n\\n```kotlin\\nval length = \"Hello\".run {\\n    println(this)  // Hello\\n    length         // 戻り値は5\\n}\\n```\\n\\n`{ }` の最後の式が戻り値になります。\\n\\n`this` は省略できるので `length` だけでOKです。"
        },
        {
          "title": "run で計算をまとめる",
          "content": "# 複数の処理を一つのブロックに\\n\\nレシーバなしでも使えます。\\n\\n```kotlin\\nval result = run {\\n    val a = 10\\n    val b = 20\\n    a + b  // 30が返る\\n}\\n```\\n\\n関連する処理をまとめたいときに便利です。"
        },
        {
          "title": "run の戻り値",
          "content": "# 最後の式が戻り値\\n\\n```kotlin\\nval result = \"Hello World\".run {\\n    split(\" \").size  // スペースで分割して数を数える\\n}\\nprintln(result)  // 2\\n```\\n\\n`split(\" \")` で [\"Hello\", \"World\"] に分割、`.size` で 2 を取得。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nrunで文字列を分割して単語数を数えましょう。\\n\\n1. `\"Hello World\".run { }` を使う\\n2. `split(\" \")` でスペースで分割\\n3. `.size` で要素数を取得\\n4. 結果は 2 になる"
        }
      ],
      "correctCode": "// fun main()でmain関数を定義\\nfun main() {\\n    // 文字列にrunでブロックを実行しresultに代入\\n    val result = \"Hello World\".run {\\n        // splitでスペース区切りしsizeで単語数を取得\\n        split(\" \").size\\n    // runブロックを閉じる\\n    }\\n    // printlnでresultを出力\\n    println(result)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// fun main()でmain関数を定義\\n___ ___() {\\n    // 文字列にrunでブロックを実行しresultに代入\\n    ___ ___ = \"___ ___\".___ {\\n        // splitでスペース区切りしsizeで単語数を取得\\n        ___(\"___\").___\\n    // runブロックを閉じる\\n    ___\\n    // printlnでresultを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // 文字列にrunでブロックを実行しresultに代入",
          "    val result = \"Hello World\".run {",
          "        // splitでスペース区切りしsizeで単語数を取得",
          "        split(\" \").size",
          "    // runブロックを閉じる",
          "    }",
          "    // printlnでresultを出力",
          "    println(result)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "\"Hello World\".runでブロックの結果をresultに代入します。",
          null,
          "split(\" \").sizeでスペースで分割した配列のサイズを取得します。",
          null,
          "runブロックを閉じます。",
          null,
          "printlnでresultを出力します。",
          null,
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "run",
            "let",
            "with"
          ],
          "others": ["fun", "main", "val", "result", "Hello", "World", "split", " ", "size", "}", "println", "// result を出力する"]
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
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "takeIf（テイクイフ）とは？",
          "content": "# 条件を満たせば値を取る\\n\\n**takeIf** は「もし〜なら取る」という意味です。\\n\\n条件が `true` なら値を返し、`false` なら `null` を返します。\\n\\n条件付きで値を使いたいときに便利です。"
        },
        {
          "title": "takeIf の使い方",
          "content": "# 条件を満たせば値、そうでなければ null\\n\\n```kotlin\\nval num = 10.takeIf { it > 5 }   // 10\\nval num2 = 3.takeIf { it > 5 }   // null\\n```\\n\\n10は5より大きいので10が返ります。\\n\\n3は5より大きくないのでnullが返ります。"
        },
        {
          "title": "takeUnless（テイクアンレス）とは？",
          "content": "# 条件を満たさなければ値を取る\\n\\n**takeUnless** は takeIf の逆です。\\n\\n条件が `false` なら値を返し、`true` なら `null` を返します。\\n\\n```kotlin\\nval num = 10.takeUnless { it > 5 }  // null\\nval num2 = 3.takeUnless { it > 5 }  // 3\\n```"
        },
        {
          "title": "takeIf と takeUnless の違い",
          "content": "# If = 「〜なら」、Unless = 「〜でなければ」\\n\\n```kotlin\\n// takeIf: 条件がtrueなら値\\n10.takeIf { it > 5 }     // 10\\n\\n// takeUnless: 条件がfalseなら値\\n10.takeUnless { it > 5 } // null\\n```\\n\\n「unless」は「〜でない限り」という意味の英語です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\ntakeIfで条件付きの値を取得しましょう。\\n\\n1. `10.takeIf { it > 5 }` を実行\\n2. 10は5より大きいので条件を満たす\\n3. 結果は 10 になる（nullではない）"
        }
      ],
      "correctCode": "// fun main()でmain関数を定義\\nfun main() {\\n    // 10にtakeIfで5より大きければnumに代入\\n    val num = 10.takeIf { it > 5 }\\n    // printlnでnumを出力\\n    println(num)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// fun main()でmain関数を定義\\n___ ___() {\\n    // 10にtakeIfで5より大きければnumに代入\\n    ___ ___ = ___.___ { ___ > ___ }\\n    // printlnでnumを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // 10にtakeIfで5より大きければnumに代入",
          "    val num = 10.takeIf { it > 5 }",
          "    // printlnでnumを出力",
          "    println(num)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "10.takeIfで条件it>5を満たせば10を返します。",
          null,
          "printlnでnumを出力します。",
          null,
          "ブロックを閉じます。"
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
      "description": "groupByについて学びます",
      "tutorialSlides": [
        {
          "title": "groupBy（グループバイ）とは？",
          "content": "# 仲間ごとに分ける\\n\\n**groupBy** は、要素を「グループ」に分ける関数です。\\n\\n学校のクラス分けのように、ある基準で要素を分類します。\\n\\n結果は「キー → リスト」の Map になります。"
        },
        {
          "title": "groupBy の使い方",
          "content": "# グループ分けの基準を指定\\n\\n```kotlin\\nval words = listOf(\"a\", \"bb\", \"ccc\")\\nval byLength = words.groupBy { it.length }\\n// {1=[a], 2=[bb], 3=[ccc]}\\n```\\n\\n文字数でグループ分け：\\n- 1文字グループ: [\"a\"]\\n- 2文字グループ: [\"bb\"]\\n- 3文字グループ: [\"ccc\"]"
        },
        {
          "title": "数値のグループ分け",
          "content": "# 偶数と奇数に分ける\\n\\n```kotlin\\nval nums = listOf(1, 2, 3, 4, 5)\\nval grouped = nums.groupBy { it % 2 }\\n// {1=[1, 3, 5], 0=[2, 4]}\\n```\\n\\n`% 2` で2で割った余りをキーに：\\n- 余り1（奇数）: [1, 3, 5]\\n- 余り0（偶数）: [2, 4]"
        },
        {
          "title": "groupBy の結果はMap",
          "content": "# キーと値のペア\\n\\n`groupBy` の結果は `Map<キー, List<値>>` 型です。\\n\\n```kotlin\\nval grouped = nums.groupBy { it % 2 }\\nval oddNumbers = grouped[1]  // [1, 3, 5]\\n```\\n\\nキーを指定してそのグループを取り出せます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n数を偶数・奇数でグループ分けしましょう。\\n\\n1. `listOf(1, 2, 3, 4, 5)` でリストを作る\\n2. `.groupBy { it % 2 }` でグループ化\\n3. 結果は `{1=[1, 3, 5], 0=[2, 4]}` になる"
        }
      ],
      "correctCode": "// fun main()でmain関数を定義\\nfun main() {\\n    // valでnumsにlistOf(1〜5)を代入\\n    val nums = listOf(1, 2, 3, 4, 5)\\n    // numsをgroupByで偶奇でグループ化しgroupedに代入\\n    val grouped = nums.groupBy { it % 2 }\\n    // printlnでgroupedを出力\\n    println(grouped)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// fun main()でmain関数を定義\\n___ ___() {\\n    // valでnumsにlistOf(1〜5)を代入\\n    ___ ___ = ___(___,___, ___,___, ___)\\n    // numsをgroupByで偶奇でグループ化しgroupedに代入\\n    ___ ___ = ___.___ { ___ % ___ }\\n    // printlnでgroupedを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // valでnumsにlistOf(1〜5)を代入",
          "    val nums = listOf(1, 2, 3, 4, 5)",
          "    // numsをgroupByで偶奇でグループ化しgroupedに代入",
          "    val grouped = nums.groupBy { it % 2 }",
          "    // printlnでgroupedを出力",
          "    println(grouped)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "valでnumsにlistOf(1〜5)を代入します。",
          null,
          "groupByでit%2（偶奇）でグループ化します。",
          null,
          "printlnでgroupedを出力します。",
          null,
          "ブロックを閉じます。"
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
      "description": "配列の要素を集約して1つの値にする方法を学びます",
      "tutorialSlides": [
        {
          "title": "fold（フォールド）とは？",
          "content": "# 要素を1つにまとめる\\n\\n**fold** は「畳む」という意味です。\\n\\nリストの要素を順番に処理して、1つの値にまとめます。\\n\\n洗濯物を畳んで小さくするイメージです。"
        },
        {
          "title": "fold の仕組み",
          "content": "# 初期値から始めて累積\\n\\n```kotlin\\nlistOf(1, 2, 3).fold(0) { acc, n -> acc + n }\\n```\\n\\n- `0` が初期値\\n- `acc` は累積値（これまでの結果）\\n- `n` は今見ている要素\\n\\n0 + 1 = 1 → 1 + 2 = 3 → 3 + 3 = 6"
        },
        {
          "title": "fold で掛け算",
          "content": "# 全部かけ合わせる\\n\\n```kotlin\\nval product = listOf(1, 2, 3, 4).fold(1) { acc, n -> acc * n }\\n// 24\\n```\\n\\n1 * 1 = 1 → 1 * 2 = 2 → 2 * 3 = 6 → 6 * 4 = 24\\n\\n掛け算の初期値は 1 です（0だと結果が0になってしまう）。"
        },
        {
          "title": "reduce（リデュース）との違い",
          "content": "# reduce は最初の要素が初期値\\n\\n```kotlin\\nlistOf(1, 2, 3).reduce { acc, n -> acc + n }\\n// 6\\n```\\n\\n`reduce` は初期値を指定しません。リストの最初の要素が初期値になります。\\n\\n`fold` は初期値を自由に決められます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nfoldで1から4までの積を計算しましょう。\\n\\n1. `listOf(1, 2, 3, 4)` でリストを作る\\n2. `.fold(1) { acc, n -> acc * n }` で掛け算\\n3. 結果は 24 (= 1 * 2 * 3 * 4) になる"
        }
      ],
      "correctCode": "// fun main()でmain関数を定義\\nfun main() {\\n    // valでnumsにlistOf(1〜4)を代入\\n    val nums = listOf(1, 2, 3, 4)\\n    // numsをfold（初期値1）でaccとnの積を畳み込みproductに代入\\n    val product = nums.fold(1) { acc, n -> acc * n }\\n    // printlnでproductを出力\\n    println(product)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// fun main()でmain関数を定義\\n___ ___() {\\n    // valでnumsにlistOf(1〜4)を代入\\n    ___ ___ = ___(___,___, ___,___)\\n    // numsをfold（初期値1）でaccとnの積を畳み込みproductに代入\\n    ___ ___ = ___.___(___) { ___,___ -> ___ * ___ }\\n    // printlnでproductを出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// fun main()でmain関数を定義",
          "fun main() {",
          "    // valでnumsにlistOf(1〜4)を代入",
          "    val nums = listOf(1, 2, 3, 4)",
          "    // numsをfold（初期値1）でaccとnの積を畳み込みproductに代入",
          "    val product = nums.fold(1) { acc, n -> acc * n }",
          "    // printlnでproductを出力",
          "    println(product)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "fun main()でメイン関数を定義します。",
          null,
          "valでnumsにlistOf(1〜4)を代入します。",
          null,
          "fold(1)で初期値1から全要素を掛け算します。",
          null,
          "printlnでproductを出力します。",
          null,
          "ブロックを閉じます。"
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
