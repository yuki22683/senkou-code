export const swift3Data = {
  "language": "swift",
  "lessonId": "swift-3",
  "lessonTitle": "Swift III - 並行処理とResult",
  "lessonDescription": "Swiftの高度な機能を学びます。async/await、Result型、高階関数などモダンSwiftを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "Result型",
      "description": "成功と失敗を表すResult型を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Result型（リザルトがた）とは？",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 「成功」か「失敗」かを表す型\n\n**Result（リザルト）** は、処理の結果が「成功」か「失敗」かを表す型です。\n\n例えば、ネットワークからデータを取得するとき、うまくいくこともあれば、接続エラーで失敗することもありますよね。\n\nResult型を使うと、この2つの状態を明確に表現できます。"
        },
        {
          "title": "Result型の使い方",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# .success と .failure\n\nResult型には2つの状態があります。\n\n- **.success（サクセス）**: 成功。結果の値を持つ\n- **.failure（フェイリャー）**: 失敗。エラー情報を持つ\n\n```swift\n// 成功を返す\nreturn .success(計算結果)\n\n// 失敗を返す\nreturn .failure(エラー)\n```"
        },
        {
          "title": "switch で結果を処理",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 成功・失敗で分岐\n\n```swift\nswitch result {\ncase .success(let value):\n    print(\"成功: \\(value)\")\ncase .failure(let error):\n    print(\"失敗: \\(error)\")\n}\n```\n\n`let value` で成功時の値を、`let error` で失敗時のエラーを取り出せます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 目標（もくひょう）\n\n数が負（マイナス）なら失敗、そうでなければ成功を返す関数を作りましょう。\n\n1. `MyError` というエラー型を定義\n2. `check` 関数を作る\n3. 負の数なら `.failure`、そうでなければ `.success` を返す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "enum MyError: Error { case negative }\n\nfunc check(_ n: Int) -> Result<Int, MyError> {\n    if n < 0 { return .failure(.negative) }\n    return .success(n)\n}\n\nlet result = check(10)\nswitch result {\ncase .success(let v): print(v)\ncase .failure(_): print(\"error\")\n}",
      "holeyCode": "// エラー型を定義\nenum MyError: ___ { case negative }\n\n// 関数を定義\nfunc check(_ n: Int) -> Result<Int, MyError> {\n    // 負の場合は失敗\n    if n < 0 { return .failure(.___) }\n    // successで成功を返す\n    return .___(n)\n}\n\n// 関数を呼び出し\nlet result = ___(10)\n// switchでパターンマッチ\nswitch ___ {\n// 成功の場合\ncase .success(let v): print(___)\n// 失敗の場合\ncase .failure(_): print(\"___\")\n}",
      "correctLines": [
        "// エラー型を定義",
        "enum MyError: Error { case negative }",
        "",
        "// 関数を定義",
        "func check(_ n: Int) -> Result<Int, MyError> {",
        "    // 負の場合は失敗",
        "    if n < 0 { return .failure(.negative) }",
        "    // successで成功を返す",
        "    return .success(n)",
        "}",
        "",
        "// 関数を呼び出し",
        "let result = check(10)",
        "// switchでパターンマッチ",
        "switch result {",
        "// 成功の場合",
        "case .success(let v): print(v)",
        "// 失敗の場合",
        "case .failure(_): print(\"error\")",
        "}"
      ],
      "lineHints": [null, "Error と入力しましょう。", null, null, null, null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, ".success で成功を返します。", null, null, null, "check と入力しましょう。", null, "result と入力しましょう。", null, "変数の内容を画面に出力します。", null, "error と入力しましょう。", null],
      "candidates": {
        "methods": ["success", "ok", "value"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "compactMap",
      "description": "nilを除外して変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "compactMap（コンパクトマップ）とは？",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# nilを取り除きながら変換\n\n**compactMap（コンパクトマップ）** は、mapと似ていますが、結果が nil のものを自動的に取り除いてくれます。\n\n「compact」は「ぎゅっと詰める」という意味。nilを取り除いて詰めるイメージです。\n\n文字列を数値に変換するとき、変換できない文字は無視したいときに便利です。"
        },
        {
          "title": "map との違い",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# nilが混ざるかどうか\n\n```swift\nlet strings = [\"1\", \"a\", \"2\"]  // \"a\"は数値に変換できない\n\n// mapの場合: nilが混ざる\nlet a = strings.map { Int($0) }\n// [1, nil, 2]（Int?型の配列）\n\n// compactMapの場合: nilを除外\nlet b = strings.compactMap { Int($0) }\n// [1, 2]（Int型の配列、nilなし）\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 目標（もくひょう）\n\n文字列の配列から、数値に変換できるものだけを取り出しましょう。\n\n- `[\"1\", \"a\", \"2\", \"b\", \"3\"]` を\n- compactMapで `[1, 2, 3]` に変換\n\n「a」や「b」は数値に変換できないので、自動的に除外されます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]\nlet ints = nums.compactMap { Int($0) }\nprint(ints)",
      "holeyCode": "// 配列を作成\nlet nums = [\"___\", \"a\", \"2\", \"b\", \"3\"]\n// compactMapでnilを除外して変換\nlet ints = nums.___ { Int($0) }\n// 結果を出力\nprint(___)",
      "correctLines": [
        "// 配列を作成",
        "let nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]",
        "// compactMapでnilを除外して変換",
        "let ints = nums.compactMap { Int($0) }",
        "// 結果を出力",
        "print(ints)"
      ],
      "lineHints": [null, "1 と入力しましょう。", null, "compactMap で nil を除外します。", null, "変数の内容を画面に出力します。"],
      "candidates": {
        "methods": ["compactMap", "flatMap", "map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 2, 3]\n"
        }
      ]
    },
    {
      "title": "reduce",
      "description": "要素を1つの値にまとめましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "reduce（リデュース）とは？",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 配列を1つの値にまとめる\n\n**reduce（リデュース）** は、配列の全要素を計算して1つの値にまとめる機能です。\n\n「reduce」は「減らす」という意味。たくさんの要素を1つに減らすイメージです。\n\n例えば、テストの点数リストの合計点を計算するときに使えます。"
        },
        {
          "title": "reduce の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 初期値と処理を指定\n\n```swift\n配列.reduce(初期値) { 途中の結果, 次の要素 in\n    // 新しい結果を返す\n}\n```\n\n**合計の例：**\n```swift\nlet sum = [1, 2, 3].reduce(0) { $0 + $1 }\n// 0 + 1 = 1\n// 1 + 2 = 3\n// 3 + 3 = 6 （結果）\n```\n\n`$0` は途中の結果、`$1` は次の要素です。"
        },
        {
          "title": "いろいろな集約",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# かけ算や文字列結合も\n\n```swift\n// 全部をかける（積）\n[1, 2, 3, 4].reduce(1) { $0 * $1 }\n// 1 * 1 * 2 * 3 * 4 = 24\n\n// 文字を全部つなげる\n[\"a\", \"b\", \"c\"].reduce(\"\") { $0 + $1 }\n// \"\" + \"a\" + \"b\" + \"c\" = \"abc\"\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 目標（もくひょう）\n\n配列の全要素をかけ算して、積（せき）を求めましょう。\n\n- `[1, 2, 3, 4, 5]` の全要素をかける\n- 初期値は `1`（かけ算なので）\n- 結果は `120`（1*2*3*4*5）になるはず"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, 2, 3, 4, 5]\nlet product = nums.reduce(1) { $0 * $1 }\nprint(product)",
      "holeyCode": "// 配列を作成\nlet nums = [___, 2, 3, 4, 5]\n// reduceで畳み込み\nlet product = nums._____(1) { $0 * $1 }\n// 結果を出力\nprint(___)",
      "correctLines": [
        "// 配列を作成",
        "let nums = [1, 2, 3, 4, 5]",
        "// reduceで畳み込み",
        "let product = nums.reduce(1) { $0 * $1 }",
        "// 結果を出力",
        "print(product)"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "reduce で畳み込みます。", null, "変数の内容を画面に出力します。"],
      "candidates": {
        "methods": ["reduce", "fold", "aggregate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "120\n"
        }
      ]
    },
    {
      "title": "lazy",
      "description": "遅延評価で効率的に処理しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "lazy（レイジー）とは？",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 必要になるまで計算しない\n\n**lazy（レイジー）** は「怠け者」という意味です。\n\n普通、mapやfilterは配列全体を一度に処理します。でもlazyを使うと、本当に必要になるまで計算を先延ばしにします。\n\n100万件のデータがあっても、最初の1件だけ欲しいなら、最初の1件だけ計算すればいいですよね。"
        },
        {
          "title": "lazy の効果",
          "image": "/illustrations/common/lazy_sleeping_robot.png",
          "content": "# 効率アップ\n\n```swift\n// 普通のmap: 全部計算してから最初を取る\nlet result = [1, 2, 3, 4, 5].map { $0 * 10 }.first!\n\n// lazy: 最初だけ計算\nlet result = [1, 2, 3, 4, 5].lazy.map { $0 * 10 }.first!\n```\n\n大量のデータを扱うとき、lazyを使うとプログラムが速くなります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 目標（もくひょう）\n\nlazyを使って、配列の最初の要素だけを10倍しましょう。\n\n1. 配列に `.lazy` をつける\n2. `.map { $0 * 10 }` で10倍\n3. `.first!` で最初の1つを取得\n\n結果は `10`（1 * 10）になります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, 2, 3, 4, 5]\nlet result = nums.lazy.map { $0 * 10 }.first!\nprint(result)",
      "holeyCode": "// 配列を作成\nlet nums = [___, 2, 3, 4, 5]\n// lazyで遅延評価\nlet result = nums.___.map { $0 * 10 }.first!\n// 結果を出力\nprint(___)",
      "correctLines": [
        "// 配列を作成",
        "let nums = [1, 2, 3, 4, 5]",
        "// lazyで遅延評価",
        "let result = nums.lazy.map { $0 * 10 }.first!",
        "// 結果を出力",
        "print(result)"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "lazy で遅延評価します。", null, "変数の内容を画面に出力します。"],
      "candidates": {
        "properties": ["lazy", "eager", "delayed"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "where 句",
      "description": "条件を追加しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "where（ウェア）とは？",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 「〜の場合だけ」という条件を追加\n\n**where（ウェア）** は、for文やswitch文に「追加の条件」をつけられる便利な機能です。\n\n「where」は英語で「〜の場所」という意味ですが、プログラミングでは「〜の場合」という条件を表します。\n\nfilterを使わなくても、for文に直接条件をつけられます。"
        },
        {
          "title": "for文で使う",
          "image": "/illustrations/common/lazy_sleeping_robot.png",
          "content": "# 条件に合う要素だけ処理\n\n```swift\nlet nums = [1, -2, 3, -4, 5]\n\n// whereで条件を追加\nfor n in nums where n > 0 {\n    print(n)  // 1, 3, 5 だけ表示\n}\n```\n\n負の数はスキップして、正の数だけ処理されます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 目標（もくひょう）\n\n配列の中から、正の数（0より大きい数）だけを表示しましょう。\n\n- `[1, -2, 3, -4, 5]` の中から\n- `where n > 0` で正の数だけ選ぶ\n- 結果は `1, 3, 5` が表示される"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, -2, 3, -4, 5]\nfor n in nums where n > 0 {\n    print(n)\n}",
      "holeyCode": "// 配列を作成\nlet nums = [___, -2, 3, -4, 5]\n// whereで条件を追加\nfor n in nums ___ n > 0 {\n    // nを出力\n    print(___)\n}",
      "correctLines": [
        "// 配列を作成",
        "let nums = [1, -2, 3, -4, 5]",
        "// whereで条件を追加",
        "for n in nums where n > 0 {",
        "    // nを出力",
        "    print(n)",
        "}"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "指定された回数や範囲で、繰り返し処理（ループ）を行います。", null, "変数の内容を画面に出力します。", null],
      "candidates": {
        "keywords": ["where", "if", "when"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n3\n5\n"
        }
      ]
    },
    {
      "title": "defer",
      "description": "スコープ終了時の処理を登録しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "defer（ディファー）とは？",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 「後片付け」を予約する\n\n**defer（ディファー）** は、「関数が終わるときに必ず実行する」処理を予約する仕組みです。\n\n「defer」は「延期する」という意味。処理を後回しにして、最後に実行します。\n\n部屋を出るときに「電気を消す」ことを先に予約しておくようなイメージです。"
        },
        {
          "title": "defer の実行順序",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 最後に実行される\n\n```swift\nfunc process() {\n    defer { print(\"後片付け\") }\n    print(\"作業中\")\n}\n\nprocess()\n// 出力:\n// 作業中\n// 後片付け\n```\n\n`defer` の中身は、関数の最後（`}` の直前）で実行されます。"
        },
        {
          "title": "defer が便利な場面",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# ファイルを閉じるなど\n\n```swift\nfunc readFile() {\n    let file = open()\n    defer { file.close() }  // 必ずファイルを閉じる\n    \n    // ファイルの処理...\n    // エラーが起きても defer は実行される\n}\n```\n\nどんな状況でも必ず実行されるので、後片付け処理に最適です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 目標（もくひょう）\n\ndeferを使って「start」の後に「end」と表示する関数を作りましょう。\n\n1. `test` 関数を作る\n2. `defer { print(\"end\") }` を書く\n3. `print(\"start\")` を書く\n\n実行すると「start」→「end」の順に表示されます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func test() {\n    defer { print(\"end\") }\n    print(\"start\")\n}\ntest()",
      "holeyCode": "// 関数を定義\nfunc ___() {\n    // deferでスコープ終了時に実行\n    ___ { print(\"end\") }\n    // startと出力\n    print(\"___\")\n}\n// 関数を呼び出し\n___()",
      "correctLines": [
        "// 関数を定義",
        "func test() {",
        "    // deferでスコープ終了時に実行",
        "    defer { print(\"end\") }",
        "    // startと出力",
        "    print(\"start\")",
        "}",
        "// 関数を呼び出し",
        "test()"
      ],
      "lineHints": [null, "関数（test）を定義します。", null, "defer でスコープ終了時の処理を登録します。", null, "start と入力しましょう。", null, null, "関数（test）を呼び出して実行します。"],
      "candidates": {
        "keywords": ["defer", "finally", "cleanup"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "start\nend\n"
        }
      ]
    },
    {
      "title": "associatedtype",
      "description": "プロトコルに関連型を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "associatedtype（アソシエイテッドタイプ）とは？",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# プロトコルで「型を後で決める」仕組み\n\n**associatedtype（アソシエイテッドタイプ）** は、プロトコルの中で「型を後から決める」ための仕組みです。\n\n「associated」は「関連した」という意味。プロトコルに関連する型を表します。\n\n例えば「入れ物」というプロトコルで、中身の型（数字なのか文字なのか）は後から決めたいときに使います。"
        },
        {
          "title": "associatedtype の定義",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# プロトコル内で宣言\n\n```swift\nprotocol Container {\n    associatedtype Item  // 「Item」という型を後で決める\n    func add(_ item: Item)\n}\n```\n\n`Item` が何の型かは、このプロトコルに準拠する型が決めます。"
        },
        {
          "title": "準拠する側で型を決める",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 実際の型を指定\n\n```swift\n// 整数を入れるコンテナ\nstruct IntBox: Container {\n    func add(_ item: Int) { }  // ItemはIntに決定\n}\n\n// 文字列を入れるコンテナ\nstruct StringBox: Container {\n    func add(_ item: String) { }  // ItemはStringに決定\n}\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 目標（もくひょう）\n\nスタック（積み重ね）のプロトコルを作りましょう。\n\n1. `Stack` プロトコルを作る\n2. `associatedtype Element` を宣言\n3. `push` メソッドを宣言\n4. `IntStack` 構造体で準拠を実装"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Stack {\n    associatedtype Element\n    mutating func push(_ item: Element)\n}\n\nstruct IntStack: Stack {\n    var items: [Int] = []\n    mutating func push(_ item: Int) {\n        items.append(item)\n    }\n}\n\nvar s = IntStack()\ns.push(10)\nprint(s.items)",
      "holeyCode": "// プロトコルを定義\nprotocol ___ {\n    // associatedtypeで関連型を定義\n    ___ Element\n    // pushメソッドを宣言\n    mutating func push(_ item: ___)\n}\n\n// Stackに準拠\nstruct IntStack: Stack {\n    // items配列\n    var items: [___] = []\n    // pushメソッドを実装\n    mutating func ___(_ item: Int) {\n        // 要素を追加\n        items.___(item)\n    }\n}\n\n// インスタンスを作成\nvar s = ___()\n// 要素を追加\ns.push(___)\n// itemsを出力\nprint(s.___)",
      "correctLines": [
        "// プロトコルを定義",
        "protocol Stack {",
        "    // associatedtypeで関連型を定義",
        "    associatedtype Element",
        "    // pushメソッドを宣言",
        "    mutating func push(_ item: Element)",
        "}",
        "",
        "// Stackに準拠",
        "struct IntStack: Stack {",
        "    // items配列",
        "    var items: [Int] = []",
        "    // pushメソッドを実装",
        "    mutating func push(_ item: Int) {",
        "        // 要素を追加",
        "        items.append(item)",
        "    }",
        "}",
        "",
        "// インスタンスを作成",
        "var s = IntStack()",
        "// 要素を追加",
        "s.push(10)",
        "// itemsを出力",
        "print(s.items)"
      ],
      "lineHints": [null, "Stack と入力しましょう。", null, "associatedtype で関連型を定義します。", null, "Element と入力しましょう。", null, null, null, null, null, "Int と入力しましょう。", null, "push と入力しましょう。", null, "append と入力しましょう。", null, null, null, null, "IntStack と入力しましょう。", null, "10 と入力しましょう。", null, "items と入力しましょう。"],
      "candidates": {
        "keywords": ["associatedtype", "typealias", "generic"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[10]\n"
        }
      ]
    },
    {
      "title": "throws と rethrows",
      "description": "エラーを投げる関数を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "throws（スローズ）とは？",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 「エラーを投げる可能性がある」宣言\n\n**throws（スローズ）** は、関数が「エラーを投げる可能性がある」ことを宣言します。\n\n「throw」は「投げる」という意味。野球でボールを投げるように、問題が起きたときにエラーを「投げ」ます。\n\n例えば、0で割り算しようとしたときにエラーを投げるような関数です。"
        },
        {
          "title": "throws関数の作り方",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# -> の前に throws\n\n```swift\nfunc divide(_ a: Int, _ b: Int) throws -> Int {\n    if b == 0 {\n        throw MyError.divByZero  // エラーを投げる\n    }\n    return a / b\n}\n```\n\n`throws` を書くことで「この関数はエラーを投げるかもしれないよ」と伝えます。"
        },
        {
          "title": "try と do-catch",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# エラーを受け止める\n\n```swift\ndo {\n    let result = try divide(10, 0)  // tryで呼び出し\n    print(result)\n} catch {\n    print(\"エラー発生: \\(error)\")  // エラーを処理\n}\n```\n\n- **try**: 「エラーが起きるかも」と覚悟して呼び出す\n- **do-catch**: エラーが起きたときの処理を書く"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 目標（もくひょう）\n\n数が負のときにエラーを投げる関数を作りましょう。\n\n1. `MyError` エラー型を定義（invalid case）\n2. `check` 関数を `throws` で作る\n3. 負の数なら `throw` でエラー\n4. `try` と `do-catch` で呼び出す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "enum MyError: Error { case invalid }\n\nfunc check(_ n: Int) throws -> Int {\n    if n < 0 { throw MyError.invalid }\n    return n\n}\n\ndo {\n    let v = try check(10)\n    print(v)\n} catch {\n    print(\"error\")\n}",
      "holeyCode": "// エラー型を定義\nenum MyError: Error { case ___ }\n\n// throwsでエラーを投げる可能性を示す\nfunc check(_ n: Int) ___ -> Int {\n    // 負の場合はエラー\n    if n < 0 { throw MyError.___ }\n    // 値を返す\n    return ___\n}\n\n// do-catchでエラー処理\ndo {\n    // tryで呼び出し\n    let v = ___ check(10)\n    // 値を出力\n    print(___)\n} catch {\n    // エラーを出力\n    print(\"___\")\n}",
      "correctLines": [
        "// エラー型を定義",
        "enum MyError: Error { case invalid }",
        "",
        "// throwsでエラーを投げる可能性を示す",
        "func check(_ n: Int) throws -> Int {",
        "    // 負の場合はエラー",
        "    if n < 0 { throw MyError.invalid }",
        "    // 値を返す",
        "    return n",
        "}",
        "",
        "// do-catchでエラー処理",
        "do {",
        "    // tryで呼び出し",
        "    let v = try check(10)",
        "    // 値を出力",
        "    print(v)",
        "} catch {",
        "    // エラーを出力",
        "    print(\"error\")",
        "}"
      ],
      "lineHints": [null, "invalid と入力しましょう。", null, null, "関数（check）を定義します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "変数の値を呼び出し元に返します（戻り値）。", null, null, null, null, null, "try と入力しましょう。", null, "変数の内容を画面に出力します。", null, null, "error と入力しましょう。", null],
      "candidates": {
        "keywords": ["throws", "throw", "error"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "Set（集合）",
      "description": "重複のないコレクションを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Set（セット）とは？",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# 重複しないデータの集まり\n\n**Set（セット）** は、同じ値を持たないデータの集まりです。\n\n配列と違って、同じ値を入れても1つにまとめられます。\n\nクラスの出席番号のように、同じ番号が2つあるとおかしいですよね。そういうデータにSetを使います。"
        },
        {
          "title": "Setの特徴",
          "image": "/illustrations/common/enum_list.png",
          "content": "# 重複が自動的に除かれる\n\n```swift\nvar set: Set = [1, 2, 2, 3, 3, 3]\nprint(set.count)  // 3（重複は1つになる）\n// setの中身は {1, 2, 3}\n```\n\n2を2回、3を3回入れても、それぞれ1つずつになります。"
        },
        {
          "title": "集合演算（しゅうごうえんざん）",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 数学の集合と同じ計算ができる\n\n```swift\nlet a: Set = [1, 2, 3]\nlet b: Set = [2, 3, 4]\n\na.union(b)        // 合わせる → {1, 2, 3, 4}\na.intersection(b) // 共通部分 → {2, 3}\na.subtracting(b)  // 差（aだけ） → {1}\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 目標（もくひょう）\n\n重複のあるデータをSetに入れて、実際の要素数を確認しましょう。\n\n- `[1, 2, 2, 3, 3, 3]` をSetに入れる\n- `.count` で要素数を表示\n- 答えは `3` になる（重複が除かれるから）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var s: Set = [1, 2, 2, 3, 3, 3]\nprint(s.count)",
      "holeyCode": "// Setで重複なしのコレクション\nvar s: ___ = [1, 2, 2, 3, 3, 3]\n// 要素数を出力\nprint(s.___)",
      "correctLines": [
        "// Setで重複なしのコレクション",
        "var s: Set = [1, 2, 2, 3, 3, 3]",
        "// 要素数を出力",
        "print(s.count)"
      ],
      "lineHints": [null, "複数の値をまとめて格納する配列（またはリスト）を作成します。", null, "count と入力しましょう。"],
      "candidates": {
        "types": ["Set", "Array", "List"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
        }
      ]
    },
    {
      "title": "mutating",
      "description": "構造体のメソッドで自身を変更しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "mutating（ミューテイティング）とは？",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 「自分を変更する」宣言\n\n**mutating（ミューテイティング）** は、構造体のメソッドで「自分自身を変更します」と宣言するキーワードです。\n\n「mutate」は「変化する」という意味。自分自身を変化させるメソッドに必要です。\n\n構造体は「値型」なので、普通は自分自身を変更できません。でも `mutating` をつけると変更できるようになります。"
        },
        {
          "title": "mutating の使い方",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# func の前に mutating\n\n```swift\nstruct Counter {\n    var count = 0\n    \n    mutating func increment() {\n        count += 1  // 自分のcountを変更\n    }\n}\n```\n\n`mutating` がないと、`count += 1` でエラーになります。"
        },
        {
          "title": "なぜ mutating が必要？",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 構造体は「値型」だから\n\n構造体は、変数にコピーすると別々の値になります（値型）。\n\n自分自身を変更するのは特別なことなので、「このメソッドは自分を変えますよ」と宣言する必要があります。\n\nクラスは「参照型」なので mutating は不要です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/key_mutex.png",
          "content": "# 目標（もくひょう）\n\nカウンターの構造体を作って、数を増やせるようにしましょう。\n\n1. `Counter` 構造体を作る\n2. `count` プロパティを持つ\n3. `mutating func increment()` で1増やす\n4. 2回呼び出して `2` と表示されるか確認"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "struct Counter {\n    var count = 0\n    mutating func increment() {\n        count += 1\n    }\n}\n\nvar c = Counter()\nc.increment()\nc.increment()\nprint(c.count)",
      "holeyCode": "// 構造体を定義\nstruct ___ {\n    // countプロパティ\n    var count = ___\n    // mutatingで構造体を変更可能に\n    ___ func increment() {\n        // countを1増やす\n        count += ___\n    }\n}\n\n// インスタンスを作成\nvar c = ___()\n// 1回目のincrementを呼び出し\nc.___()\n// 2回目のincrementを呼び出し\nc.___()\n// countを出力\nprint(c.___)",
      "correctLines": [
        "// 構造体を定義",
        "struct Counter {",
        "    // countプロパティ",
        "    var count = 0",
        "    // mutatingで構造体を変更可能に",
        "    mutating func increment() {",
        "        // countを1増やす",
        "        count += 1",
        "    }",
        "}",
        "",
        "// インスタンスを作成",
        "var c = Counter()",
        "// 1回目のincrementを呼び出し",
        "c.increment()",
        "// 2回目のincrementを呼び出し",
        "c.increment()",
        "// countを出力",
        "print(c.count)"
      ],
      "lineHints": [null, "構造体（Counter）を定義します。", null, "変数を宣言し、数値を代入します。", null, "mutating で構造体を変更可能にします。", null, "変数の値を計算して、その結果を同じ変数に再代入します。", null, null, null, null, "Counter と入力しましょう。", null, "increment と入力しましょう。", null, "increment と入力しましょう。", null, "count と入力しましょう。"],
      "candidates": {
        "keywords": ["mutating", "mutable", "var"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    }
  ]
}
