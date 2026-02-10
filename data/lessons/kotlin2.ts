export const kotlin2Data = {
  "language": "kotlin",
  "lessonId": "kotlin-2",
  "lessonTitle": "Kotlin II - Null安全とラムダ",
  "lessonDescription": "KotlinのNull安全機能とラムダ式を学びます。Androidアプリ開発に必要なモダンな記法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "Null安全について学ぼう",
      "content": "**Null（ヌル）** とは「何もない」を表す特別な値です。\\n\\nKotlinでは、変数が**nullになりうるか**を型で明示します。\\n\\n```kotlin\\n// nullを許容しない型\\nvar name: String = \"太郎\"\\n\\n// ?を付けるとnullを許容\\nvar nickname: String? = null\\n```\\n\\n`?` を付けた型を「nullable型」と呼びます。"
    },
    {
      "title": "セーフコール演算子 ?.",
      "content": "nullable型のプロパティやメソッドに安全にアクセスするには `?.` を使います。\\n\\n```kotlin\\nval text: String? = \"こんにちは\"\\nprintln(text?.length)  // => 5\\n\\nval empty: String? = null\\nprintln(empty?.length)  // => null（エラーにならない）\\n```\\n\\n`?.` を使うと、値がnullの場合はnullを返し、エラーを防げます。"
    },
    {
      "title": "エルビス演算子 ?:",
      "content": "nullの場合にデフォルト値を指定するには `?:` を使います。\\n\\n```kotlin\\nval value: Int? = null\\nprintln(value ?: 0)  // => 0\\n\\nval num: Int? = 42\\nprintln(num ?: 0)  // => 42\\n```\\n\\n`?:` の左側がnullなら右側の値が使われます。\\n\\n形が歌手エルビスの髪型に似ていることから「エルビス演算子」と呼ばれます。"
    },
    {
      "title": "データクラス",
      "content": "`data class` を使うと、データを持つクラスを簡単に作れます。\\n\\n```kotlin\\ndata class User(val name: String, val age: Int)\\n\\nval user = User(\"太郎\", 20)\\nprintln(user)  // => User(name=太郎, age=20)\\n```\\n\\nデータクラスには自動で以下が生成されます：\\n- `toString()` - 見やすい文字列表現\\n- `equals()` - 値の比較\\n- `copy()` - コピーの作成"
    },
    {
      "title": "ラムダ式",
      "content": "**ラムダ式**は関数を短く書く記法です。\\n\\n```kotlin\\n// 通常の関数\\nfun double(n: Int) = n * 2\\n\\n// ラムダ式\\nval double = { n: Int -> n * 2 }\\n\\nprintln(double(5))  // => 10\\n```\\n\\n`{ 引数 -> 処理 }` の形で書きます。\\n\\nラムダ式は変数に代入したり、他の関数に渡したりできます。"
    },
    {
      "title": "コレクション操作（map / filter）",
      "content": "`map` と `filter` でコレクションを変換・抽出できます。\\n\\n```kotlin\\nval nums = listOf(1, 2, 3, 4, 5)\\n\\n// map: 各要素を変換\\nval doubled = nums.map { it * 2 }\\nprintln(doubled)  // => [2, 4, 6, 8, 10]\\n\\n// filter: 条件に合う要素を抽出\\nval evens = nums.filter { it % 2 == 0 }\\nprintln(evens)  // => [2, 4]\\n```\\n\\n`it` は暗黙の引数名で、各要素を表します。"
    }
  ],
  "exercises": [
    {
      "title": "Null安全を学ぼう",
      "tutorialSlides": [
        {
          "title": "Null安全（ヌルあんぜん）とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 「何もない」ことによるエラーを防ぐ\\n\\n**null（ヌル）** は「何もない」という特別な値です。\\n\\nnullのデータに対して何かしようとするとエラー（NullPointerException）が起きます。\\n\\nKotlinは、このエラーを防ぐ仕組みが最初から入っています。これを **Null安全** と呼びます。"
        },
        {
          "title": "nullable型（ヌラブルがた）",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# ? をつけると null を許可\\n\\nKotlinでは、普通の変数には null を入れられません。\\n\\n型名の後に **?** をつけると「nullかもしれない」型になります。\\n\\n```kotlin\\nvar name: String = \"Taro\"   // nullは入れられない\\nvar name: String? = \"Taro\"  // nullを入れられる\\nname = null  // OK\\n```"
        },
        {
          "title": "nullチェック",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# nullでないか確認してから使う\\n\\n```kotlin\\nvar num: Int? = 42\\nif (num != null) {\\n    println(num)  // nullでないことが確定\\n}\\n```\\n\\n`!=` は「等しくない」という意味。`num != null` は「numがnullでないなら」という条件です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 目標（もくひょう）\\n\\nnullable型の変数を作り、nullチェックしてから表示しましょう。\\n\\n1. `Int?` 型の変数 `num` に 42 を入れる\\n2. `if` で null でないかチェック\\n3. null でなければ表示する"
        }
      ],
      "correctCode": "// ? で nullable 型にする\\nvar num: Int? = 42\\n// null チェックをする\\nif (num != null) {\\n    // num を出力する\\n    println(num)\\n}",
      "holeyCode": "// ? で nullable 型にする\\nvar ___: ___? = ___\\n// null チェックをする\\nif (___ != ___) ___\\n    // num を出力する\\n    ___(___)\\n___",
      "correctLines": [
          "// ? で nullable 型にする",
          "var num: Int? = 42",
          "// null チェックをする",
          "if (num != null) {",
          "    // num を出力する",
          "    println(num)",
          "}"
        ],
      "lineHints": [
          null,
          "変数numにnullable型のInt?で42を代入します。",
          null,
          "nullでないかチェックします。",
          null,
          "printlnで出力します。",
          "ブロックを閉じる記号です。"
        ],
        "candidates": {
          "operators": [
            "?"
          ],
          "others": ["42", "null", "println", "num", "}", "Int", "{"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "セーフコール演算子 ?.",
      "tutorialSlides": [
        {
          "title": "セーフコール演算子（えんざんし）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 安全に呼び出す「?.」\\n\\n**?.（セーフコール）** は、「nullなら何もしない、そうでなければ処理する」という演算子です。\\n\\n普通の `.` だと、nullのときエラーになります。でも `?.` なら安全です。"
        },
        {
          "title": "?. の動き",
          "image": "/illustrations/3d/gear.png",
          "content": "# nullなら処理をスキップ\\n\\n```kotlin\\nval name: String? = \"hello\"\\nprintln(name?.length)  // 5（helloの文字数）\\n\\nval empty: String? = null\\nprintln(empty?.length)  // null（エラーにならない）\\n```\\n\\n左側がnullのときは、プロパティにアクセスせずnullを返します。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d/gear.png",
          "content": "# 目標（もくひょう）\\n\\nセーフコール `?.` を使って、文字列の長さを安全に取得しましょう。\\n\\n1. `String?` 型の変数に「Hello」を入れる\\n2. `?.length` で長さを取得\\n\\n答えは `5` になります。"
        }
      ],
      "correctCode": "// numに42を代入（nullable型）\\nval text: String? = \"こんにちは\"\\n// ?. で安全にプロパティにアクセスする\\nprintln(text?.length)",
      "holeyCode": "// numに42を代入（nullable型）\\n___ ___: ___? = \"___\"\\n// ?. で安全にプロパティにアクセスする\\n___(___?.___)",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val text: String? = \"こんにちは\"",
          "// ?. で安全にプロパティにアクセスする",
          "println(text?.length)"
        ],
      "lineHints": [
          null,
          "valでtextにnullable型のString?で文字列を代入します。",
          null,
          "?.で安全にlengthプロパティにアクセスします。"
        ],
        "candidates": {
          "operators": [
            "?."
          ],
          "others": ["String", "println", "こんにちは", "val", "text", "length"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "エルビス演算子 ?:",
      "tutorialSlides": [
        {
          "title": "エルビス演算子（えんざんし）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# nullなら代わりの値を使う「?:」\\n\\n**?:（エルビス演算子）** は、左側がnullなら右側の値を返す演算子です。\\n\\n記号を横から見ると、歌手エルビス・プレスリーの髪型に見えることから名付けられました。\\n\\n「デフォルト値」を設定するのに便利です。"
        },
        {
          "title": "?: の動き",
          "image": "/illustrations/3d/gear.png",
          "content": "# nullなら代替値を使う\\n\\n```kotlin\\nval name: String? = null\\nprintln(name ?: \"Guest\")  // Guest（nameがnullなので）\\n\\nval name2: String? = \"Taro\"\\nprintln(name2 ?: \"Guest\")  // Taro（nullでないので）\\n```\\n\\n`a ?: b` は「aがnullでなければa、nullならb」という意味です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d/gear.png",
          "content": "# 目標（もくひょう）\\n\\nエルビス演算子 `?:` を使って、nullのときに0を表示しましょう。\\n\\n1. `Int?` 型の変数に null を入れる\\n2. `?: 0` でデフォルト値を設定\\n\\n答えは `0` になります。"
        }
      ],
      "correctCode": "// numに42を代入（nullable型）\\nval value: Int? = null\\n// ?: でデフォルト値を指定する\\nprintln(value ?: 0)",
      "holeyCode": "// numに42を代入（nullable型）\\n___ ___: ___? = ___\\n// ?: でデフォルト値を指定する\\n___(___ ?: ___)",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val value: Int? = null",
          "// ?: でデフォルト値を指定する",
          "println(value ?: 0)"
        ],
      "lineHints": [
          null,
          "valでvalueにnullable型のInt?でnullを代入します。",
          null,
          "?:でnullの場合のデフォルト値0を指定します。"
        ],
        "candidates": {
          "operators": [
            "?:"
          ],
          "others": ["null", "println", "val", "value", "Int", "0"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n"
          }
        ]
      },
    {
      "title": "データクラスを使おう",
      "tutorialSlides": [
        {
          "title": "データクラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# データを入れるための特別なクラス\\n\\n**data class（データクラス）** は、データを保持するための特別なクラスです。\\n\\n普通のクラスと違って、`toString()`（文字列変換）や `equals()`（比較）などが自動的に作られます。\\n\\nユーザー情報や座標など、データを扱うときに便利です。"
        },
        {
          "title": "data class の作り方",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# data をつけるだけ\\n\\n`class` の前に **data** をつけると、データクラスになります。\\n\\n```kotlin\\ndata class User(val name: String, val age: Int)\\n\\nval u = User(\"Taro\", 20)\\nprintln(u)  // User(name=Taro, age=20)\\n```\\n\\n中身が見やすく表示されるのが特徴です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 目標（もくひょう）\\n\\n座標を表すデータクラスを作りましょう。\\n\\n1. `data class Point(val x: Int, val y: Int)` を定義\\n2. `Point(3, 4)` でインスタンスを作成\\n3. 表示すると `Point(x=3, y=4)` と出る"
        }
      ],
      "correctCode": "// Pointデータクラスを定義\\ndata class Point(val x: Int, val y: Int)\\n// Pointを作成（x座標に3, y座標に4）\\nval p = Point(3, 4)\\n// p を出力する\\nprintln(p)",
      "holeyCode": "// Pointデータクラスを定義\\ndata class ___(val ___: ___, val ___: ___)\\n// Pointを作成（x座標に3, y座標に4）\\n___ ___ = ___(___,  ___)\\n// p を出力する\\n___(___)",
      "correctLines": [
          "// Pointデータクラスを定義",
          "data class Point(val x: Int, val y: Int)",
          "// Pointを作成（x座標に3, y座標に4）",
          "val p = Point(3, 4)",
          "// p を出力する",
          "println(p)"
        ],
      "lineHints": [
          null,
          "dataでPointデータクラスを定義します。",
          null,
          "Pointインスタンスを作成します。",
          null,
          "printlnでpを出力します。"
        ],
        "candidates": {
          "keywords": [
            "data"
          ],
          "others": ["Point", "println", "Int", "3", "4", "p", "val", "x", "y"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Point(x=3, y=4)\\n"
          }
        ]
      },
    {
      "title": "ラムダ式を使おう",
      "tutorialSlides": [
        {
          "title": "ラムダ式（しき）とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 名前のない関数（かんすう）\\n\\n**ラムダ式** は、名前をつけずに作る小さな関数です。\\n\\n普通の関数は `fun` で名前をつけますが、ラムダ式は名前なしで `{ }` の中に直接書きます。\\n\\nちょっとした処理を手軽に作りたいときに便利です。"
        },
        {
          "title": "ラムダ式の書き方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# { 引数（ひきすう） -> 処理（しょり） }\\n\\n`->` の前が「受け取るデータ（引数）」、後ろが「処理の内容」です。\\n\\n```kotlin\\nval add = { a: Int, b: Int -> a + b }\\n```\\n\\nこれは「aとbを受け取って、足し算して返す」という処理です。\\n\\n矢印 `->` は「〜したら〜する」というイメージです。"
        },
        {
          "title": "ラムダ式を使ってみよう",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 変数に入れて呼び出す\\n\\nラムダ式は変数に入れて、関数のように呼び出せます。\\n\\n```kotlin\\nval add = { a: Int, b: Int -> a + b }\\nprintln(add(2, 3))  // 5\\n```\\n\\n`add(2, 3)` で「2と3を足す」処理が実行されます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 目標（もくひょう）\\n\\n数を2倍にするラムダ式を作りましょう。\\n\\n1. `{ n: Int -> n * 2 }` でラムダ式を作る\\n2. 変数 `double` に入れる\\n3. `double(5)` で呼び出すと 10 になる"
        }
      ],
      "correctCode": "// nを2倍にするdouble関数を定義\\nval double = { n: Int -> n * 2 }\\n// double(5) を出力する\\nprintln(double(5))",
      "holeyCode": "// nを2倍にするdouble関数を定義\\n___ ___ = { ___: ___ -> ___ * ___ }\\n// double(5) を出力する\\n___(___(___))",
      "correctLines": [
          "// nを2倍にするdouble関数を定義",
          "val double = { n: Int -> n * 2 }",
          "// double(5) を出力する",
          "println(double(5))"
        ],
      "lineHints": [
          null,
          "valでdoubleにラムダ式を代入します。",
          null,
          "printlnでdouble(5)を出力します。"
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": ["double", "2", "println", "val", "n", "Int", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "map で変換しよう",
      "tutorialSlides": [
        {
          "title": "map（マップ）とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 全部を変身（へんしん）させる魔法\\n\\n**map** は、リストの中身を一つずつ変換する関数です。\\n\\n例えば、1, 2, 3 を全部2倍にすると 2, 4, 6 になります。\\n\\nリストの「形を変える」というイメージです。"
        },
        {
          "title": "it（イット）って何？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 暗黙（あんもく）の引数\\n\\nラムダ式で引数が1つのとき、**it** という名前で自動的に使えます。\\n\\n`it` は英語で「それ」という意味。「今見ている要素」のことです。\\n\\n```kotlin\\nlistOf(1, 2, 3).map { it * 2 }\\n```\\n\\n「それ（it）を2倍にする」と読みます。"
        },
        {
          "title": "map を使ってみよう",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# リストの各要素を変換\\n\\n```kotlin\\nval nums = listOf(1, 2, 3)\\nval doubled = nums.map { it * 2 }\\nprintln(doubled)  // [2, 4, 6]\\n```\\n\\n1は2に、2は4に、3は6に変換されます。元のリストは変わりません。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 目標（もくひょう）\\n\\nリストの各数を2乗（じじょう）しましょう。\\n\\n1. `listOf(1, 2, 3)` でリストを作る\\n2. `.map { it * it }` で各要素を2乗\\n3. 結果は `[1, 4, 9]` になる"
        }
      ],
      "correctCode": "// numsにlistOf(1, 2, 3)を代入\\nval nums = listOf(1, 2, 3)\\n// map で各要素を変換する\\nval squared = nums.map { it * it }\\n// squared を出力する\\nprintln(squared)",
      "holeyCode": "// numsにlistOf(1, 2, 3)を代入\\n___ ___ = ___(___,  ___,  ___)\\n// map で各要素を変換する\\n___ ___ = ___.___ { ___ * ___ }\\n// squared を出力する\\n___(___)",
      "correctLines": [
          "// numsにlistOf(1, 2, 3)を代入",
          "val nums = listOf(1, 2, 3)",
          "// map で各要素を変換する",
          "val squared = nums.map { it * it }",
          "// squared を出力する",
          "println(squared)"
        ],
      "lineHints": [
          null,
          "valでnumsにlistOfでリストを代入します。",
          null,
          "mapで各要素を2乗します。",
          null,
          "printlnでsquaredを出力します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["listOf", "println", "1", "it", "squared", "val", "nums", "2", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 4, 9]\\n"
          }
        ]
      },
    {
      "title": "filter で絞り込もう",
      "tutorialSlides": [
        {
          "title": "filter（フィルター）とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# ふるいにかける\\n\\n**filter** は、条件に合うものだけを選び出す関数です。\\n\\nコーヒーのフィルターが豆のカスを取り除くように、条件に合わないものを取り除きます。\\n\\n元のリストは変わらず、新しいリストができます。"
        },
        {
          "title": "filter の仕組み",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# true（真）のものだけ残す\\n\\nラムダ式が `true`（正しい）を返す要素だけが残ります。\\n\\n```kotlin\\nlistOf(1, 2, 3, 4, 5).filter { it > 3 }\\n// [4, 5]\\n```\\n\\n「それ（it）が3より大きい？」と一つずつチェックして、大きいものだけ残します。"
        },
        {
          "title": "filter を使ってみよう",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件に合う要素を抽出（ちゅうしゅつ）\\n\\n```kotlin\\nval nums = listOf(1, 2, 3, 4, 5)\\nval result = nums.filter { it >= 3 }\\nprintln(result)  // [3, 4, 5]\\n```\\n\\n`>=` は「以上」という意味。3以上のものだけ残します。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 目標（もくひょう）\\n\\nリストから3以上の数だけを取り出しましょう。\\n\\n1. `listOf(1, 2, 3, 4, 5)` でリストを作る\\n2. `.filter { it >= 3 }` で3以上を抽出\\n3. 結果は `[3, 4, 5]` になる"
        }
      ],
      "correctCode": "// numsにlistOf(1, 2, 3, 4, 5)を代入\\nval nums = listOf(1, 2, 3, 4, 5)\\n// filter で条件に合う要素を抽出する\\nval result = nums.filter { it >= 3 }\\n// result を出力する\\nprintln(result)",
      "holeyCode": "// numsにlistOf(1, 2, 3, 4, 5)を代入\\n___ ___ = ___(___,  ___,  ___,  ___,  ___)\\n// filter で条件に合う要素を抽出する\\n___ ___ = ___.___ { ___ >= ___ }\\n// result を出力する\\n___(___)",
      "correctLines": [
          "// numsにlistOf(1, 2, 3, 4, 5)を代入",
          "val nums = listOf(1, 2, 3, 4, 5)",
          "// filter で条件に合う要素を抽出する",
          "val result = nums.filter { it >= 3 }",
          "// result を出力する",
          "println(result)"
        ],
      "lineHints": [
          null,
          "valでnumsにlistOfでリストを代入します。",
          null,
          "filterで3以上を抽出します。",
          null,
          "printlnでresultを出力します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": ["listOf", "println", "1", "3", "result", "val", "nums", "it", "2", "4", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 4, 5]\\n"
          }
        ]
      },
    {
      "title": "when 式を使おう",
      "tutorialSlides": [
        {
          "title": "when（ウェン）式とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 複数の道を選ぶ分岐（ぶんき）\\n\\n**when** は「〜のとき」という意味の英語です。\\n\\n値によって、いくつもの道に分かれる処理を書けます。\\n\\n自動販売機のボタンのように、押したボタンによって出てくる飲み物が変わるイメージです。"
        },
        {
          "title": "when の書き方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 値 -> 結果 で分岐\\n\\n```kotlin\\nwhen (x) {\\n    1 -> \"one\"    // xが1なら\"one\"\\n    2 -> \"two\"    // xが2なら\"two\"\\n    else -> \"other\"  // それ以外は\"other\"\\n}\\n```\\n\\n`->` の左が「条件」、右が「結果」です。\\n\\n`else` は「どれにも当てはまらないとき」の処理です。"
        },
        {
          "title": "when は値を返せる",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 結果を変数に入れる\\n\\n```kotlin\\nval result = when (x) {\\n    1 -> \"one\"\\n    2 -> \"two\"\\n    else -> \"other\"\\n}\\n```\\n\\n`when` 全体が値を返すので、そのまま変数に入れられます。\\n\\nこれはKotlinならではの便利な機能です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 目標（もくひょう）\\n\\nwhenで数字を英語に変換しましょう。\\n\\n1. `x` に 2 を入れる\\n2. `when (x)` で分岐する\\n3. 1は\"one\"、2は\"two\"、それ以外は\"other\"\\n4. 結果は \"two\" になる"
        }
      ],
      "correctCode": "// x に 2 を代入する\\nval x = 2\\n// when で分岐する\\nval result = when (x) {\\n    // 1 の場合\\n    1 -> \"one\"\\n    // 2 の場合\\n    2 -> \"two\"\\n    // その他の場合\\n    else -> \"other\"\\n}\\n// result を出力する\\nprintln(result)",
      "holeyCode": "// x に 2 を代入する\\n___ ___ = ___\\n// when で分岐する\\n___ ___ = when (___) ___\\n    // 1 の場合\\n    ___ -> \"___\"\\n    // 2 の場合\\n    ___ -> \"___\"\\n    // その他の場合\\n    else -> \"___\"\\n___\\n// result を出力する\\n___(___)",
      "correctLines": [
          "// x に 2 を代入する",
          "val x = 2",
          "// when で分岐する",
          "val result = when (x) {",
          "    // 1 の場合",
          "    1 -> \"one\"",
          "    // 2 の場合",
          "    2 -> \"two\"",
          "    // その他の場合",
          "    else -> \"other\"",
          "}",
          "// result を出力する",
          "println(result)"
        ],
      "lineHints": [
          null,
          "valでxに2を代入します。",
          null,
          "whenでxの値に応じて分岐します。",
          null,
          "1の場合は\"one\"を返します。",
          null,
          "2の場合は\"two\"を返します。",
          null,
          "その他の場合は\"other\"を返します。",
          "ブロックを閉じる記号です。",
          null,
          "printlnでresultを出力します。"
        ],
        "candidates": {
          "keywords": [
            "when", "else"
          ],
          "others": ["2", "1", "one", "two", "other", "println", "x", "}", "result", "val", "{"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "two\\n"
          }
        ]
      },
    {
      "title": "拡張関数を作ろう",
      "tutorialSlides": [
        {
          "title": "拡張関数（かくちょうかんすう）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 既存の型に新しい機能を追加\\n\\n**拡張関数** は、すでにある型（IntやStringなど）に新しい関数を追加する機能です。\\n\\nスマートフォンにアプリを追加するように、元の型を変えずに機能を拡張できます。\\n\\nKotlinの強力な機能の一つです。"
        },
        {
          "title": "拡張関数の書き方",
          "image": "/illustrations/3d/gear.png",
          "content": "# fun 型.関数名() = 処理\\n\\n`fun` の後に「どの型に追加するか」を `.` でつなげて書きます。\\n\\n```kotlin\\nfun String.hello() = \"Hello, $this\"\\n```\\n\\nこれで String 型に `hello()` という関数が追加されます。"
        },
        {
          "title": "this（ディス）って何？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 自分自身を指す\\n\\n**this** は「自分自身」という意味です。\\n\\n```kotlin\\nfun String.hello() = \"Hello, $this\"\\n\"World\".hello()  // Hello, World\\n```\\n\\n`\"World\".hello()` を呼ぶと、`this` は \"World\" になります。\\n\\n`$this` で文字列の中に埋め込めます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d/gear.png",
          "content": "# 目標（もくひょう）\\n\\nInt型に「2倍にする」関数を追加しましょう。\\n\\n1. `fun Int.double() = this * 2` で拡張関数を定義\\n2. `5.double()` で呼び出す\\n3. 結果は 10 になる"
        }
      ],
      "correctCode": "// this でレシーバを参照する\\nfun Int.double() = this * 2\\n// 5.double() を出力する\\nprintln(5.double())",
      "holeyCode": "// this でレシーバを参照する\\nfun ___.___() = this * ___\\n// 5.double() を出力する\\n___(___.___())",
      "correctLines": [
          "// this でレシーバを参照する",
          "fun Int.double() = this * 2",
          "// 5.double() を出力する",
          "println(5.double())"
        ],
      "lineHints": [
          null,
          "Int型にdouble拡張関数を定義します。",
          null,
          "printlnで5.double()を出力します。"
        ],
        "candidates": {
          "keywords": [
            "this"
          ],
          "others": ["double", "2", "println", "Int", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "スコープ関数 let",
      "tutorialSlides": [
        {
          "title": "let（レット）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 値に対して処理を実行する\\n\\n**let** は、オブジェクトに対してラムダを実行する関数です。\\n\\n`let` は英語で「〜させる」という意味。「その値を使って処理させる」というイメージです。\\n\\n特にnullチェックと組み合わせると便利です。"
        },
        {
          "title": "?.let の組み合わせ",
          "image": "/illustrations/3d/gear.png",
          "content": "# nullでなければ処理する\\n\\n`?.let { }` は「nullでなければ処理する」という意味になります。\\n\\n```kotlin\\nval name: String? = \"Taro\"\\nname?.let { println(it) }  // Taro\\n```\\n\\nnameがnullなら何もせず、nullでなければ `{ }` の中を実行します。"
        },
        {
          "title": "let の中での it",
          "image": "/illustrations/3d/gear.png",
          "content": "# it で値を使う\\n\\n`let` の中では、対象の値を `it` で使えます。\\n\\n```kotlin\\nval num: Int? = 42\\nnum?.let { println(it * 2) }  // 84\\n```\\n\\n`it` は num の値（42）を指しています。\\n\\nnullでないことが保証されているので、安全に計算できます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/3d/gear.png",
          "content": "# 目標（もくひょう）\\n\\nnullでなければ2倍して表示しましょう。\\n\\n1. `Int?` 型の変数に 42 を入れる\\n2. `?.let { }` でnullチェック\\n3. `it * 2` で2倍にして表示\\n4. 結果は 84 になる"
        }
      ],
      "correctCode": "// numに42を代入（nullable型）\\nval num: Int? = 42\\n// letでit * 2を出力\\nnum?.let { println(it * 2) }",
      "holeyCode": "// numに42を代入（nullable型）\\n___ ___: ___? = ___\\n// letでit * 2を出力\\n___?.___ { ___(___ * ___) }",
      "correctLines": [
          "// numに42を代入（nullable型）",
          "val num: Int? = 42",
          "// letでit * 2を出力",
          "num?.let { println(it * 2) }"
        ],
      "lineHints": [
          null,
          "valでnumにnullable型のInt?で42を代入します。",
          null,
          "letでnullでない場合にprintlnを実行します。"
        ],
        "candidates": {
          "functions": [
            "let"
          ],
          "others": ["42", "2", "val", "num", "Int", "println", "it"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\\n"
          }
        ]
      }
  ]
}
