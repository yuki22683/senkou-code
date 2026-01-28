export const kotlin2Data = {
  "language": "kotlin",
  "lessonId": "kotlin-2",
  "lessonTitle": "Kotlin II - Null安全とラムダ",
  "lessonDescription": "KotlinのNull安全機能とラムダ式を学びます。Androidアプリ開発に必要なモダンな記法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
        "title": "Null安全を学ぼう",
        "description": "Kotlinの安全な null 処理を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "Null安全（ヌルあんぜん）とは？",
            "content": "# 「何もない」ことによるエラーを防ぐ\n\n**null（ヌル）** は「何もない」という特別な値です。\n\nnullのデータに対して何かしようとするとエラー（NullPointerException）が起きます。\n\nKotlinは、このエラーを防ぐ仕組みが最初から入っています。これを **Null安全** と呼びます。"
          },
          {
            "title": "nullable型（ヌラブルがた）",
            "content": "# ? をつけると null を許可\n\nKotlinでは、普通の変数には null を入れられません。\n\n型名の後に **?** をつけると「nullかもしれない」型になります。\n\n```kotlin\nvar name: String = \"Taro\"   // nullは入れられない\nvar name: String? = \"Taro\"  // nullを入れられる\nname = null  // OK\n```"
          },
          {
            "title": "nullチェック",
            "content": "# nullでないか確認してから使う\n\n```kotlin\nvar num: Int? = 42\nif (num != null) {\n    println(num)  // nullでないことが確定\n}\n```\n\n`!=` は「等しくない」という意味。`num != null` は「numがnullでないなら」という条件です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nnullable型の変数を作り、nullチェックしてから表示しましょう。\n\n1. `Int?` 型の変数 `num` に 42 を入れる\n2. `if` で null でないかチェック\n3. null でなければ表示する"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// ? で nullable 型にする\nvar num: Int? = 42\n// null チェックをする\nif (num != null) {\n    // num を出力する\n    println(num)\n}",
        "holeyCode": "// ? で nullable 型にする\nvar num: Int___ = ___\n// null チェックをする\nif (num != ___) {\n    // num を出力する\n    ___(num)\n}",
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
          "? で nullable 型にします。",
          null,
          "null チェックをします。",
          null,
          "println で出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "?"
          ],
          "others": [
            "42",
            "null",
            "println"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\n"
          }
        ]
      },
    {
        "title": "セーフコール演算子 ?.",
        "description": "null かもしれない値を安全に扱う「?.」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "セーフコール演算子（えんざんし）とは？",
            "content": "# 安全に呼び出す「?.」\n\n**?.（セーフコール）** は、「nullなら何もしない、そうでなければ処理する」という演算子です。\n\n普通の `.` だと、nullのときエラーになります。でも `?.` なら安全です。"
          },
          {
            "title": "?. の動き",
            "content": "# nullなら処理をスキップ\n\n```kotlin\nval name: String? = \"hello\"\nprintln(name?.length)  // 5（helloの文字数）\n\nval empty: String? = null\nprintln(empty?.length)  // null（エラーにならない）\n```\n\n左側がnullのときは、プロパティにアクセスせずnullを返します。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nセーフコール `?.` を使って、文字列の長さを安全に取得しましょう。\n\n1. `String?` 型の変数に「Hello」を入れる\n2. `?.length` で長さを取得\n\n答えは `5` になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// nullable 型の変数を宣言する\nval text: String? = \"Hello\"\n// ?. で安全にプロパティにアクセスする\nprintln(text?.length)",
        "holeyCode": "// nullable 型の変数を宣言する\nval text: ___? = \"Hello\"\n// ?. で安全にプロパティにアクセスする\nprintln(text___length)",
        "correctLines": [
          "// nullable 型の変数を宣言する",
          "val text: String? = \"Hello\"",
          "// ?. で安全にプロパティにアクセスする",
          "println(text?.length)"
        ],
        "lineHints": [
          null,
          "型名の後に ? をつけると nullable 型になります。",
          null,
          "?. で安全にアクセスします。"
        ],
        "candidates": {
          "operators": [
            "?."
          ],
          "others": [
            "String"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\n"
          }
        ]
      },
    {
        "title": "エルビス演算子 ?:",
        "description": "null の場合のデフォルト値を設定する「?:」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "エルビス演算子（えんざんし）とは？",
            "content": "# nullなら代わりの値を使う「?:」\n\n**?:（エルビス演算子）** は、左側がnullなら右側の値を返す演算子です。\n\n記号を横から見ると、歌手エルビス・プレスリーの髪型に見えることから名付けられました。\n\n「デフォルト値」を設定するのに便利です。"
          },
          {
            "title": "?: の動き",
            "content": "# nullなら代替値を使う\n\n```kotlin\nval name: String? = null\nprintln(name ?: \"Guest\")  // Guest（nameがnullなので）\n\nval name2: String? = \"Taro\"\nprintln(name2 ?: \"Guest\")  // Taro（nullでないので）\n```\n\n`a ?: b` は「aがnullでなければa、nullならb」という意味です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nエルビス演算子 `?:` を使って、nullのときに0を表示しましょう。\n\n1. `Int?` 型の変数に null を入れる\n2. `?: 0` でデフォルト値を設定\n\n答えは `0` になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// nullable 型の変数を宣言する\nval value: Int? = null\n// ?: でデフォルト値を指定する\nprintln(value ?: 0)",
        "holeyCode": "// nullable 型の変数を宣言する\nval value: Int? = ___\n// ?: でデフォルト値を指定する\nprintln(value ___ 0)",
        "correctLines": [
          "// nullable 型の変数を宣言する",
          "val value: Int? = null",
          "// ?: でデフォルト値を指定する",
          "println(value ?: 0)"
        ],
        "lineHints": [
          null,
          "null を入力しましょう。",
          null,
          "?: でデフォルト値を指定します。"
        ],
        "candidates": {
          "operators": [
            "?:"
          ],
          "others": [
            "null"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\n"
          }
        ]
      },
    {
        "title": "データクラスを使おう",
        "description": "データを保持するための「データクラス」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "データクラスとは？",
            "content": "# データを入れるための特別なクラス\n\n**data class（データクラス）** は、データを保持するための特別なクラスです。\n\n普通のクラスと違って、`toString()`（文字列変換）や `equals()`（比較）などが自動的に作られます。\n\nユーザー情報や座標など、データを扱うときに便利です。"
          },
          {
            "title": "data class の作り方",
            "content": "# data をつけるだけ\n\n`class` の前に **data** をつけると、データクラスになります。\n\n```kotlin\ndata class User(val name: String, val age: Int)\n\nval u = User(\"Taro\", 20)\nprintln(u)  // User(name=Taro, age=20)\n```\n\n中身が見やすく表示されるのが特徴です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\n座標を表すデータクラスを作りましょう。\n\n1. `data class Point(val x: Int, val y: Int)` を定義\n2. `Point(3, 4)` でインスタンスを作成\n3. 表示すると `Point(x=3, y=4)` と出る"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// data でデータクラスを定義する\ndata class Point(val x: Int, val y: Int)\n// Point のインスタンスを作成する\nval p = Point(3, 4)\n// p を出力する\nprintln(p)",
        "holeyCode": "// data でデータクラスを定義する\n___ class Point(val x: Int, val y: Int)\n// Point のインスタンスを作成する\nval p = ___(3, 4)\n// p を出力する\n___(p)",
        "correctLines": [
          "// data でデータクラスを定義する",
          "data class Point(val x: Int, val y: Int)",
          "// Point のインスタンスを作成する",
          "val p = Point(3, 4)",
          "// p を出力する",
          "println(p)"
        ],
        "lineHints": [
          null,
          "data でデータクラスにします。",
          null,
          "Point と入力しましょう。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "data"
          ],
          "others": [
            "Point",
            "println"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Point(x=3, y=4)\n"
          }
        ]
      },
    {
        "title": "ラムダ式を使おう",
        "description": "名前のない関数「ラムダ式」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "ラムダ式（しき）とは？",
            "content": "# 名前のない関数（かんすう）\n\n**ラムダ式** は、名前をつけずに作る小さな関数です。\n\n普通の関数は `fun` で名前をつけますが、ラムダ式は名前なしで `{ }` の中に直接書きます。\n\nちょっとした処理を手軽に作りたいときに便利です。"
          },
          {
            "title": "ラムダ式の書き方",
            "content": "# { 引数（ひきすう） -> 処理（しょり） }\n\n`->` の前が「受け取るデータ（引数）」、後ろが「処理の内容」です。\n\n```kotlin\nval add = { a: Int, b: Int -> a + b }\n```\n\nこれは「aとbを受け取って、足し算して返す」という処理です。\n\n矢印 `->` は「〜したら〜する」というイメージです。"
          },
          {
            "title": "ラムダ式を使ってみよう",
            "content": "# 変数に入れて呼び出す\n\nラムダ式は変数に入れて、関数のように呼び出せます。\n\n```kotlin\nval add = { a: Int, b: Int -> a + b }\nprintln(add(2, 3))  // 5\n```\n\n`add(2, 3)` で「2と3を足す」処理が実行されます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\n数を2倍にするラムダ式を作りましょう。\n\n1. `{ n: Int -> n * 2 }` でラムダ式を作る\n2. 変数 `double` に入れる\n3. `double(5)` で呼び出すと 10 になる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// -> で引数と処理を区切る\nval double = { n: Int -> n * 2 }\n// double(5) を出力する\nprintln(double(5))",
        "holeyCode": "// -> で引数と処理を区切る\nval double = { n: Int ___ n * 2 }\n// double(5) を出力する\nprintln(___(5))",
        "correctLines": [
          "// -> で引数と処理を区切る",
          "val double = { n: Int -> n * 2 }",
          "// double(5) を出力する",
          "println(double(5))"
        ],
        "lineHints": [
          null,
          "-> で引数と処理を区切ります。",
          null,
          "double と入力しましょう。"
        ],
        "candidates": {
          "operators": [
            "->"
          ],
          "others": [
            "double"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\n"
          }
        ]
      },
    {
        "title": "map で変換しよう",
        "description": "リストの各要素を変換する「map」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "map（マップ）とは？",
            "content": "# 全部を変身（へんしん）させる魔法\n\n**map** は、リストの中身を一つずつ変換する関数です。\n\n例えば、1, 2, 3 を全部2倍にすると 2, 4, 6 になります。\n\nリストの「形を変える」というイメージです。"
          },
          {
            "title": "it（イット）って何？",
            "content": "# 暗黙（あんもく）の引数\n\nラムダ式で引数が1つのとき、**it** という名前で自動的に使えます。\n\n`it` は英語で「それ」という意味。「今見ている要素」のことです。\n\n```kotlin\nlistOf(1, 2, 3).map { it * 2 }\n```\n\n「それ（it）を2倍にする」と読みます。"
          },
          {
            "title": "map を使ってみよう",
            "content": "# リストの各要素を変換\n\n```kotlin\nval nums = listOf(1, 2, 3)\nval doubled = nums.map { it * 2 }\nprintln(doubled)  // [2, 4, 6]\n```\n\n1は2に、2は4に、3は6に変換されます。元のリストは変わりません。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nリストの各数を2乗（じじょう）しましょう。\n\n1. `listOf(1, 2, 3)` でリストを作る\n2. `.map { it * it }` で各要素を2乗\n3. 結果は `[1, 4, 9]` になる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// listOf でリストを作成する\nval nums = listOf(1, 2, 3)\n// map で各要素を変換する\nval squared = nums.map { it * it }\n// squared を出力する\nprintln(squared)",
        "holeyCode": "// listOf でリストを作成する\nval nums = ___(1, 2, 3)\n// map で各要素を変換する\nval squared = nums.___ { it * it }\n// squared を出力する\n___(squared)",
        "correctLines": [
          "// listOf でリストを作成する",
          "val nums = listOf(1, 2, 3)",
          "// map で各要素を変換する",
          "val squared = nums.map { it * it }",
          "// squared を出力する",
          "println(squared)"
        ],
        "lineHints": [
          null,
          "listOf と入力しましょう。",
          null,
          "map で各要素を2乗します。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": [
            "listOf",
            "println"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 4, 9]\n"
          }
        ]
      },
    {
        "title": "filter で絞り込もう",
        "description": "条件に合う要素だけを抽出する「filter」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "filter（フィルター）とは？",
            "content": "# ふるいにかける\n\n**filter** は、条件に合うものだけを選び出す関数です。\n\nコーヒーのフィルターが豆のカスを取り除くように、条件に合わないものを取り除きます。\n\n元のリストは変わらず、新しいリストができます。"
          },
          {
            "title": "filter の仕組み",
            "content": "# true（真）のものだけ残す\n\nラムダ式が `true`（正しい）を返す要素だけが残ります。\n\n```kotlin\nlistOf(1, 2, 3, 4, 5).filter { it > 3 }\n// [4, 5]\n```\n\n「それ（it）が3より大きい？」と一つずつチェックして、大きいものだけ残します。"
          },
          {
            "title": "filter を使ってみよう",
            "content": "# 条件に合う要素を抽出（ちゅうしゅつ）\n\n```kotlin\nval nums = listOf(1, 2, 3, 4, 5)\nval result = nums.filter { it >= 3 }\nprintln(result)  // [3, 4, 5]\n```\n\n`>=` は「以上」という意味。3以上のものだけ残します。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nリストから3以上の数だけを取り出しましょう。\n\n1. `listOf(1, 2, 3, 4, 5)` でリストを作る\n2. `.filter { it >= 3 }` で3以上を抽出\n3. 結果は `[3, 4, 5]` になる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// listOf でリストを作成する\nval nums = listOf(1, 2, 3, 4, 5)\n// filter で条件に合う要素を抽出する\nval result = nums.filter { it >= 3 }\n// result を出力する\nprintln(result)",
        "holeyCode": "// listOf でリストを作成する\nval nums = ___(1, 2, 3, 4, 5)\n// filter で条件に合う要素を抽出する\nval result = nums.___ { it >= 3 }\n// result を出力する\n___(result)",
        "correctLines": [
          "// listOf でリストを作成する",
          "val nums = listOf(1, 2, 3, 4, 5)",
          "// filter で条件に合う要素を抽出する",
          "val result = nums.filter { it >= 3 }",
          "// result を出力する",
          "println(result)"
        ],
        "lineHints": [
          null,
          "listOf と入力しましょう。",
          null,
          "filter で 3 以上を抽出します。",
          null,
          "println と入力しましょう。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": [
            "listOf",
            "println"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 4, 5]\n"
          }
        ]
      },
    {
        "title": "when 式を使おう",
        "description": "複数の条件分岐を簡潔に書く「when」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "when（ウェン）式とは？",
            "content": "# 複数の道を選ぶ分岐（ぶんき）\n\n**when** は「〜のとき」という意味の英語です。\n\n値によって、いくつもの道に分かれる処理を書けます。\n\n自動販売機のボタンのように、押したボタンによって出てくる飲み物が変わるイメージです。"
          },
          {
            "title": "when の書き方",
            "content": "# 値 -> 結果 で分岐\n\n```kotlin\nwhen (x) {\n    1 -> \"one\"    // xが1なら\"one\"\n    2 -> \"two\"    // xが2なら\"two\"\n    else -> \"other\"  // それ以外は\"other\"\n}\n```\n\n`->` の左が「条件」、右が「結果」です。\n\n`else` は「どれにも当てはまらないとき」の処理です。"
          },
          {
            "title": "when は値を返せる",
            "content": "# 結果を変数に入れる\n\n```kotlin\nval result = when (x) {\n    1 -> \"one\"\n    2 -> \"two\"\n    else -> \"other\"\n}\n```\n\n`when` 全体が値を返すので、そのまま変数に入れられます。\n\nこれはKotlinならではの便利な機能です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nwhenで数字を英語に変換しましょう。\n\n1. `x` に 2 を入れる\n2. `when (x)` で分岐する\n3. 1は\"one\"、2は\"two\"、それ以外は\"other\"\n4. 結果は \"two\" になる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// x に 2 を代入する\nval x = 2\n// when で分岐する\nval result = when (x) {\n    // 1 の場合\n    1 -> \"one\"\n    // 2 の場合\n    2 -> \"two\"\n    // その他の場合\n    else -> \"other\"\n}\n// result を出力する\nprintln(result)",
        "holeyCode": "// x に 2 を代入する\nval x = ___\n// when で分岐する\nval result = ___ (x) {\n    // 1 の場合\n    1 -> \"___\"\n    // 2 の場合\n    2 -> \"___\"\n    // その他の場合\n    else -> \"___\"\n}\n// result を出力する\n___(result)",
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
          "2 と入力しましょう。",
          null,
          "when で分岐します。",
          null,
          "one と入力しましょう。",
          null,
          "two と入力しましょう。",
          null,
          "other と入力しましょう。",
          "println と入力しましょう。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "when"
          ],
          "others": [
            "2",
            "one",
            "two",
            "other",
            "println"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "two\n"
          }
        ]
      },
    {
        "title": "拡張関数を作ろう",
        "description": "既存のクラスに関数を追加する「拡張関数」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "拡張関数（かくちょうかんすう）とは？",
            "content": "# 既存の型に新しい機能を追加\n\n**拡張関数** は、すでにある型（IntやStringなど）に新しい関数を追加する機能です。\n\nスマートフォンにアプリを追加するように、元の型を変えずに機能を拡張できます。\n\nKotlinの強力な機能の一つです。"
          },
          {
            "title": "拡張関数の書き方",
            "content": "# fun 型.関数名() = 処理\n\n`fun` の後に「どの型に追加するか」を `.` でつなげて書きます。\n\n```kotlin\nfun String.hello() = \"Hello, $this\"\n```\n\nこれで String 型に `hello()` という関数が追加されます。"
          },
          {
            "title": "this（ディス）って何？",
            "content": "# 自分自身を指す\n\n**this** は「自分自身」という意味です。\n\n```kotlin\nfun String.hello() = \"Hello, $this\"\n\"World\".hello()  // Hello, World\n```\n\n`\"World\".hello()` を呼ぶと、`this` は \"World\" になります。\n\n`$this` で文字列の中に埋め込めます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nInt型に「2倍にする」関数を追加しましょう。\n\n1. `fun Int.double() = this * 2` で拡張関数を定義\n2. `5.double()` で呼び出す\n3. 結果は 10 になる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// this でレシーバを参照する\nfun Int.double() = this * 2\n// 5.double() を出力する\nprintln(5.double())",
        "holeyCode": "// this でレシーバを参照する\nfun Int.double() = ___ * 2\n// 5.double() を出力する\nprintln(5.___())",
        "correctLines": [
          "// this でレシーバを参照する",
          "fun Int.double() = this * 2",
          "// 5.double() を出力する",
          "println(5.double())"
        ],
        "lineHints": [
          null,
          "this でレシーバを参照します。",
          null,
          "double と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "this"
          ],
          "others": [
            "double"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\n"
          }
        ]
      },
    {
        "title": "スコープ関数 let",
        "description": "オブジェクトに対して処理を行う「let」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "let（レット）とは？",
            "content": "# 値に対して処理を実行する\n\n**let** は、オブジェクトに対してラムダを実行する関数です。\n\n`let` は英語で「〜させる」という意味。「その値を使って処理させる」というイメージです。\n\n特にnullチェックと組み合わせると便利です。"
          },
          {
            "title": "?.let の組み合わせ",
            "content": "# nullでなければ処理する\n\n`?.let { }` は「nullでなければ処理する」という意味になります。\n\n```kotlin\nval name: String? = \"Taro\"\nname?.let { println(it) }  // Taro\n```\n\nnameがnullなら何もせず、nullでなければ `{ }` の中を実行します。"
          },
          {
            "title": "let の中での it",
            "content": "# it で値を使う\n\n`let` の中では、対象の値を `it` で使えます。\n\n```kotlin\nval num: Int? = 42\nnum?.let { println(it * 2) }  // 84\n```\n\n`it` は num の値（42）を指しています。\n\nnullでないことが保証されているので、安全に計算できます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\n\nnullでなければ2倍して表示しましょう。\n\n1. `Int?` 型の変数に 42 を入れる\n2. `?.let { }` でnullチェック\n3. `it * 2` で2倍にして表示\n4. 結果は 84 になる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// nullable 型の変数を宣言する\nval num: Int? = 42\n// let で処理を実行する\nnum?.let { println(it * 2) }",
        "holeyCode": "// nullable 型の変数を宣言する\nval num: Int? = ___\n// let で処理を実行する\nnum?.___ { println(it * 2) }",
        "correctLines": [
          "// nullable 型の変数を宣言する",
          "val num: Int? = 42",
          "// let で処理を実行する",
          "num?.let { println(it * 2) }"
        ],
        "lineHints": [
          null,
          "42 と入力しましょう。",
          null,
          "let で処理を実行します。"
        ],
        "candidates": {
          "functions": [
            "let"
          ],
          "others": [
            "42"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\n"
          }
        ]
      }
  ]
}
