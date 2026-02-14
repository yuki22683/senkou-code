export const swift3Data = {
  "language": "swift",
  "lessonId": "swift-3",
  "lessonTitle": "Swift III - 並行処理とResult",
  "lessonDescription": "Swiftの高度な機能を学びます。async/await、Result型、高階関数などモダンSwiftを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "Result型",
      "content": "**Result型**は成功か失敗を表します。\\n\\n```swift\\nfunc divide(_ a: Int, by b: Int) -> Result<Int, Error> {\\n    if b == 0 {\\n        return .failure(MyError.divisionByZero)\\n    }\\n    return .success(a / b)\\n}\\n```"
    },
    {
      "title": "Resultのパターンマッチ",
      "content": "`switch` でResultを処理します。\\n\\n```swift\\nlet result = divide(10, by: 2)\\nswitch result {\\ncase .success(let value):\\n    print(value)\\ncase .failure(let error):\\n    print(error)\\n}\\n```"
    },
    {
      "title": "高階関数 map",
      "content": "`map` で配列を変換できます。\\n\\n```swift\\nlet nums = [1, 2, 3]\\nlet doubled = nums.map { $0 * 2 }\\n// [2, 4, 6]\\n```\\n\\n`$0` は引数を表すショートカットです。"
    },
    {
      "title": "高階関数 filter",
      "content": "`filter` で条件に合う要素だけを抽出します。\\n\\n```swift\\nlet nums = [1, 2, 3, 4, 5]\\nlet evens = nums.filter { $0 % 2 == 0 }\\n// [2, 4]\\n```"
    },
    {
      "title": "クロージャ",
      "content": "**クロージャ**は名前のない関数です。\\n\\n```swift\\nlet add = { (a: Int, b: Int) -> Int in\\n    return a + b\\n}\\nprint(add(2, 3)) // 5\\n```"
    },
    {
      "title": "async/await",
      "content": "非同期処理には `async/await` を使います。\\n\\n```swift\\nfunc fetchData() async -> String {\\n    // 非同期処理...\\n    return \\\"データ\\\"\\n}\\n\\nlet data = await fetchData()\\n```"
    }
  ],
  "exercises": [
    {
      "title": "Result型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "Result型（リザルトがた）とは？",
          "content": "# 「成功」か「失敗」かを表す型\\n\\n**Result（リザルト）** は、処理の結果が「成功」か「失敗」かを表す型です。\\n\\n例えば、ネットワークからデータを取得するとき、うまくいくこともあれば、接続エラーで失敗することもありますよね。\\n\\nResult型を使うと、この2つの状態を明確に表現できます。"
        },
        {
          "title": "Result型の使い方",
          "content": "# .success と .failure\\n\\nResult型には2つの状態があります。\\n\\n- **.success（サクセス）**: 成功。結果の値を持つ\\n- **.failure（フェイリャー）**: 失敗。エラー情報を持つ\\n\\n```swift\\n// 成功を返す\\nreturn .success(計算結果)\\n\\n// 失敗を返す\\nreturn .failure(エラー)\\n```"
        },
        {
          "title": "switch で結果を処理",
          "content": "# 成功・失敗で分岐\\n\\n```swift\\nswitch result {\\ncase .success(let value):\\n    print(\"成功: \\(value)\")\\ncase .failure(let error):\\n    print(\"失敗: \\(error)\")\\n}\\n```\\n\\n`let value` で成功時の値を、`let error` で失敗時のエラーを取り出せます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n数が負（マイナス）なら失敗、そうでなければ成功を返す関数を作りましょう。\\n\\n1. `MyError` というエラー型を定義\\n2. `check` 関数を作る\\n3. 負の数なら `.failure`、そうでなければ `.success` を返す"
        }
      ],
      "correctCode": "// エラー型を定義\\nenum MyError: Error { case negative }\\n\\n// check関数を定義\\nfunc check(_ n: Int) -> Result<Int, MyError> {\\n    // 負の場合は失敗\\n    if n < 0 { return .failure(.negative) }\\n    // successで成功を返す\\n    return .success(n)\\n// ブロックを閉じる\\n}\\n\\n// resultにcheck関数（引数10）の結果を代入\\nlet result = check(10)\\n// switchでパターンマッチ\\nswitch result {\\n// 成功の場合\\ncase .success(let v): print(v)\\n// 失敗の場合\\ncase .failure(_): print(\"エラー\")\\n// ブロックを閉じる\\n}",
      "holeyCode": "// エラー型を定義\\nenum ___: ___ { case ___ }\\n___\\n// check関数を定義\\nfunc ___(_ ___: ___) -> ___<___, ___> {\\n    // 負の場合は失敗\\n    if ___ < ___ { return .___(.___) }\\n    // successで成功を返す\\n    return .___(___)\\n// ブロックを閉じる\\n___\\n___\\n// resultにcheck関数（引数10）の結果を代入\\nlet ___ = ___(___)\\n// switchでパターンマッチ\\nswitch ___ {\\n// 成功の場合\\ncase .___(let ___): ___(___)\\n// 失敗の場合\\ncase .___(_): ___(\"___\")\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// エラー型を定義",
          "enum MyError: Error { case negative }",
          "",
          "// check関数を定義",
          "func check(_ n: Int) -> Result<Int, MyError> {",
          "    // 負の場合は失敗",
          "    if n < 0 { return .failure(.negative) }",
          "    // successで成功を返す",
          "    return .success(n)",
          "// ブロックを閉じる",
          "}",
          "",
          "// resultにcheck関数（引数10）の結果を代入",
          "let result = check(10)",
          "// switchでパターンマッチ",
          "switch result {",
          "// 成功の場合",
          "case .success(let v): print(v)",
          "// 失敗の場合",
          "case .failure(_): print(\"エラー\")",
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
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "methods": [
            "success",
            "ok",
            "value"
          ],
          "others": ["MyError", "Error", "negative", "check", "n", "Int", "Result", "0", "failure", "result", "10", "v", "print", "エラー", "", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "compactMap",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "compactMap（コンパクトマップ）とは？",
          "content": "# nilを取り除きながら変換\\n\\n**compactMap（コンパクトマップ）** は、mapと似ていますが、結果が nil のものを自動的に取り除いてくれます。\\n\\n「compact」は「ぎゅっと詰める」という意味。nilを取り除いて詰めるイメージです。\\n\\n文字列を数値に変換するとき、変換できない文字は無視したいときに便利です。"
        },
        {
          "title": "map との違い",
          "content": "# nilが混ざるかどうか\\n\\n```swift\\nlet strings = [\"1\", \"a\", \"2\"]  // \"a\"は数値に変換できない\\n\\n// mapの場合: nilが混ざる\\nlet a = strings.map { Int($0) }\\n// [1, nil, 2]（Int?型の配列）\\n\\n// compactMapの場合: nilを除外\\nlet b = strings.compactMap { Int($0) }\\n// [1, 2]（Int型の配列、nilなし）\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n文字列の配列から、数値に変換できるものだけを取り出しましょう。\\n\\n- `[\"1\", \"a\", \"2\", \"b\", \"3\"]` を\\n- compactMapで `[1, 2, 3]` に変換\\n\\n「a」や「b」は数値に変換できないので、自動的に除外されます。"
        }
      ],
      "correctCode": "// 文字列配列（数字と文字が混在）をnumsに代入\\nlet nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]\\n// numsをcompactMapでInt変換しintsに代入\\nlet ints = nums.compactMap { Int($0) }\\n// intsをprintで出力\\nprint(ints)",
      "holeyCode": "// 文字列配列（数字と文字が混在）をnumsに代入\\nlet ___ = [\"___\", \"___\", \"___\", \"___\", \"___\"]\\n// numsをcompactMapでInt変換しintsに代入\\nlet ___ = ___.___ { ___($___) }\\n// intsをprintで出力\\n___(___)",
      "correctLines": [
          "// 文字列配列（数字と文字が混在）をnumsに代入",
          "let nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]",
          "// numsをcompactMapでInt変換しintsに代入",
          "let ints = nums.compactMap { Int($0) }",
          "// intsをprintで出力",
          "print(ints)"
        ],
      "lineHints": [
          null,
          "nums, 1, a, 2, b, 3 を指定します。",
          null,
          "ints, nums, compactMap, Int, 0 を指定します。",
          null,
          "print, ints を指定します。"
        ],
        "candidates": {
          "methods": [
            "compactMap",
            "flatMap",
            "map"
          ],
          "others": [
            "nums", "1", "a", "2", "b", "3", "ints", "Int", "0", "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 2, 3]\\n"
          }
        ]
      },
    {
      "title": "reduce",
      "description": "配列の要素を集約して1つの値にする方法を学びます",
      "tutorialSlides": [
        {
          "title": "reduce（リデュース）とは？",
          "content": "# 配列を1つの値にまとめる\\n\\n**reduce（リデュース）** は、配列の全要素を計算して1つの値にまとめる機能です。\\n\\n「reduce」は「減らす」という意味。たくさんの要素を1つに減らすイメージです。\\n\\n例えば、テストの点数リストの合計点を計算するときに使えます。"
        },
        {
          "title": "reduce の使い方",
          "content": "# 初期値と処理を指定\\n\\n```swift\\n配列.reduce(初期値) { 途中の結果, 次の要素 in\\n    // 新しい結果を返す\\n}\\n```\\n\\n**合計の例：**\\n```swift\\nlet sum = [1, 2, 3].reduce(0) { $0 + $1 }\\n// 0 + 1 = 1\\n// 1 + 2 = 3\\n// 3 + 3 = 6 （結果）\\n```\\n\\n`$0` は途中の結果、`$1` は次の要素です。"
        },
        {
          "title": "いろいろな集約",
          "content": "# かけ算や文字列結合も\\n\\n```swift\\n// 全部をかける（積）\\n[1, 2, 3, 4].reduce(1) { $0 * $1 }\\n// 1 * 1 * 2 * 3 * 4 = 24\\n\\n// 文字を全部つなげる\\n[\"a\", \"b\", \"c\"].reduce(\"\") { $0 + $1 }\\n// \"\" + \"a\" + \"b\" + \"c\" = \"abc\"\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n配列の全要素をかけ算して、積を求めましょう。\\n\\n- `[1, 2, 3, 4, 5]` の全要素をかける\\n- 初期値は `1`（かけ算なので）\\n- 結果は `120`（1*2*3*4*5）になるはず"
        }
      ],
      "correctCode": "// 数値配列（1〜5）をnumsに代入\\nlet nums = [1, 2, 3, 4, 5]\\n// 配列の全要素の積を計算\\nlet product = nums.reduce(1) { $0 * $1 }\\n// productをprintで出力\\nprint(product)",
      "holeyCode": "// 数値配列（1〜5）をnumsに代入\\nlet ___ = [___, ___, ___, ___, ___]\\n// 配列の全要素の積を計算\\nlet ___ = ___.___(___) { $___ * $___ }\\n// productをprintで出力\\n___(___)",
      "correctLines": [
          "// 数値配列（1〜5）をnumsに代入",
          "let nums = [1, 2, 3, 4, 5]",
          "// 配列の全要素の積を計算",
          "let product = nums.reduce(1) { $0 * $1 }",
          "// productをprintで出力",
          "print(product)"
        ],
      "lineHints": [
          null,
          "nums, 1, 2, 3, 4, 5 を指定します。",
          null,
          "product, nums, reduce, 1, 0, 1 を指定します。",
          null,
          "print, product を指定します。"
        ],
        "candidates": {
          "methods": [
            "reduce",
            "fold",
            "aggregate"
          ],
          "others": ["nums", "1", "2", "3", "4", "5", "product", "0", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "120\\n"
          }
        ]
      },
    {
      "title": "lazy",
      "description": "lazy（レイジー）について学びます",
      "tutorialSlides": [
        {
          "title": "lazy（レイジー）とは？",
          "content": "# 必要になるまで計算しない\\n\\n**lazy（レイジー）** は「怠け者」という意味です。\\n\\n普通、mapやfilterは配列全体を一度に処理します。でもlazyを使うと、本当に必要になるまで計算を先延ばしにします。\\n\\n100万件のデータがあっても、最初の1件だけ欲しいなら、最初の1件だけ計算すればいいですよね。"
        },
        {
          "title": "lazy の効果",
          "content": "# 効率アップ\\n\\n```swift\\n// 普通のmap: 全部計算してから最初を取る\\nlet result = [1, 2, 3, 4, 5].map { $0 * 10 }.first!\\n\\n// lazy: 最初だけ計算\\nlet result = [1, 2, 3, 4, 5].lazy.map { $0 * 10 }.first!\\n```\\n\\n大量のデータを扱うとき、lazyを使うとプログラムが速くなります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nlazyを使って、配列の最初の要素だけを10倍しましょう。\\n\\n1. 配列に `.lazy` をつける\\n2. `.map { $0 * 10 }` で10倍\\n3. `.first!` で最初の1つを取得\\n\\n結果は `10`（1 * 10）になります。"
        }
      ],
      "correctCode": "// 数値配列（1〜5）をnumsに代入\\nlet nums = [1, 2, 3, 4, 5]\\n// numsにlazyとmapで最初の要素を10倍しresultに代入\\nlet result = nums.lazy.map { $0 * 10 }.first!\\n// resultをprintで出力\\nprint(result)",
      "holeyCode": "// 数値配列（1〜5）をnumsに代入\\nlet ___ = [___, ___, ___, ___, ___]\\n// numsにlazyとmapで最初の要素を10倍しresultに代入\\nlet ___ = ___.___.map { $___ * ___ }.___!\\n// resultをprintで出力\\n___(___)",
      "correctLines": [
          "// 数値配列（1〜5）をnumsに代入",
          "let nums = [1, 2, 3, 4, 5]",
          "// numsにlazyとmapで最初の要素を10倍しresultに代入",
          "let result = nums.lazy.map { $0 * 10 }.first!",
          "// resultをprintで出力",
          "print(result)"
        ],
      "lineHints": [
          null,
          "nums, 1, 2, 3, 4, 5 を指定します。",
          null,
          "result, nums, lazy, 0, 10, first を指定します。",
          null,
          "print, result を指定します。"
        ],
        "candidates": {
          "properties": [
            "lazy",
            "eager",
            "delayed"
          ],
          "others": [
            "nums", "1", "2", "3", "4", "5", "result", "0", "10", "first", "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "where 句",
      "description": "条件を指定してデータを絞り込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "where（ウェア）とは？",
          "content": "# 「〜の場合だけ」という条件を追加\\n\\n**where（ウェア）** は、for文やswitch文に「追加の条件」をつけられる便利な機能です。\\n\\n「where」は英語で「〜の場所」という意味ですが、プログラミングでは「〜の場合」という条件を表します。\\n\\nfilterを使わなくても、for文に直接条件をつけられます。"
        },
        {
          "title": "for文で使う",
          "content": "# 条件に合う要素だけ処理\\n\\n```swift\\nlet nums = [1, -2, 3, -4, 5]\\n\\n// whereで条件を追加\\nfor n in nums where n > 0 {\\n    print(n)  // 1, 3, 5 だけ表示\\n}\\n```\\n\\n負の数はスキップして、正の数だけ処理されます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n配列の中から、正の数（0より大きい数）だけを表示しましょう。\\n\\n- `[1, -2, 3, -4, 5]` の中から\\n- `where n > 0` で正の数だけ選ぶ\\n- 結果は `1, 3, 5` が表示される"
        }
      ],
      "correctCode": "// 数値配列（正負が交互）をnumsに代入\\nlet nums = [1, -2, 3, -4, 5]\\n// for-in whereでnが0より大きい要素をループ\\nfor n in nums where n > 0 {\\n    // nをprintで出力\\n    print(n)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// 数値配列（正負が交互）をnumsに代入\\nlet ___ = [___, ___, ___, ___, ___]\\n// for-in whereでnが0より大きい要素をループ\\nfor ___ in ___ ___ ___ > ___ {\\n    // nをprintで出力\\n    ___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// 数値配列（正負が交互）をnumsに代入",
          "let nums = [1, -2, 3, -4, 5]",
          "// for-in whereでnが0より大きい要素をループ",
          "for n in nums where n > 0 {",
          "    // nをprintで出力",
          "    print(n)",
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
          ""
        ],
        "candidates": {
          "keywords": [
            "where",
            "if",
            "when"
          ],
          "others": ["nums", "1", "-2", "3", "-4", "5", "n", "0", "print", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n3\\n5\\n"
          }
        ]
      },
    {
      "title": "defer",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
              {
                      "title": "deferとは",
                      "content": "# 後片付けを予約\\n\\ndeferはスコープを抜けるときに実行されます。\\n\\n```swift\\nfunc test() {\\n    defer { print(\"終了\") }\\n    print(\"処理\")\\n}\\n// 処理 → 終了\\n```"
              },
              {
                      "title": "deferの使い道",
                      "content": "# リソースの解放に便利\\n\\n```swift\\nfunc readFile() {\\n    let file = open(\"test.txt\")\\n    defer { file.close() }\\n    // ファイルを読む\\n}  // 自動でclose\\n```\\n\\n忘れずに後片付けできます！"
              }
      ],
      "correctCode": "// test関数を定義\\nfunc test() {\\n    // deferでスコープ終了時に実行\\n    defer { print(\"end\") }\\n    // startと出力\\n    print(\"start\")\\n// ブロックを閉じる\\n}\\n// test関数を呼び出し\\ntest()",
      "holeyCode": "// test関数を定義\\nfunc ___() {\\n    // deferでスコープ終了時に実行\\n    ___ { ___(\"___\") }\\n    // startと出力\\n    ___(\"___\")\\n// ブロックを閉じる\\n___\\n// test関数を呼び出し\\n___()",
      "correctLines": [
          "// test関数を定義",
          "func test() {",
          "    // deferでスコープ終了時に実行",
          "    defer { print(\"end\") }",
          "    // startと出力",
          "    print(\"start\")",
          "// ブロックを閉じる",
          "}",
          "// test関数を呼び出し",
          "test()"
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
          ""
        ],
        "candidates": {
          "keywords": [
            "defer",
            "finally",
            "cleanup"
          ],
          "others": ["test", "print", "end", "start", "}", "// test関数を呼び出し"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "start\\nend\\n"
          }
        ]
      },
    {
      "title": "associatedtype",
      "description": "associatedtype（アソシエイテッドタイプ）について学びます",
      "tutorialSlides": [
        {
          "title": "associatedtype（アソシエイテッドタイプ）とは？",
          "content": "# プロトコルで「型を後で決める」仕組み\\n\\n**associatedtype（アソシエイテッドタイプ）** は、プロトコルの中で「型を後から決める」ための仕組みです。\\n\\n「associated」は「関連した」という意味。プロトコルに関連する型を表します。\\n\\n例えば「入れ物」というプロトコルで、中身の型（数字なのか文字なのか）は後から決めたいときに使います。"
        },
        {
          "title": "associatedtype の定義",
          "content": "# プロトコル内で宣言\\n\\n```swift\\nprotocol Container {\\n    associatedtype Item  // 「Item」という型を後で決める\\n    func add(_ item: Item)\\n}\\n```\\n\\n`Item` が何の型かは、このプロトコルに準拠する型が決めます。"
        },
        {
          "title": "準拠する側で型を決める",
          "content": "# 実際の型を指定\\n\\n```swift\\n// 整数を入れるコンテナ\\nstruct IntBox: Container {\\n    func add(_ item: Int) { }  // ItemはIntに決定\\n}\\n\\n// 文字列を入れるコンテナ\\nstruct StringBox: Container {\\n    func add(_ item: String) { }  // ItemはStringに決定\\n}\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nスタック（積み重ね）のプロトコルを作りましょう。\\n\\n1. `Stack` プロトコルを作る\\n2. `associatedtype Element` を宣言\\n3. `push` メソッドを宣言\\n4. `IntStack` 構造体で準拠を実装"
        }
      ],
      "correctCode": "// プロトコルを定義\\nprotocol Stack {\\n    // associatedtypeで関連型を定義\\n    associatedtype Element\\n    // pushメソッドを宣言\\n    mutating func push(_ item: Element)\\n// ブロックを閉じる\\n}\\n\\n// Stackに準拠\\nstruct IntStack: Stack {\\n    // items配列\\n    var items: [Int] = []\\n    // pushメソッドを実装\\n    mutating func push(_ item: Int) {\\n        // 要素を追加\\n        items.append(item)\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}\\n\\n// インスタンスを作成\\nvar s = IntStack()\\n// 要素を追加\\ns.push(10)\\n// itemsを出力\\nprint(s.items)",
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // associatedtypeで関連型を定義\\n    ___ ___\\n    // pushメソッドを宣言\\n    mutating func ___(_ ___: ___)\\n// ブロックを閉じる\\n___\\n___\\n// Stackに準拠\\nstruct ___: ___ {\\n    // items配列\\n    var ___: [___] = []\\n    // pushメソッドを実装\\n    mutating func ___(_ ___: ___) {\\n        // 要素を追加\\n        ___.___(___)\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n___\\n// インスタンスを作成\\nvar ___ = ___()\\n// 要素を追加\\n___.___(___)\\n// itemsを出力\\n___(___.___)",
      "correctLines": [
          "// プロトコルを定義",
          "protocol Stack {",
          "    // associatedtypeで関連型を定義",
          "    associatedtype Element",
          "    // pushメソッドを宣言",
          "    mutating func push(_ item: Element)",
          "// ブロックを閉じる",
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
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "",
          "// インスタンスを作成",
          "var s = IntStack()",
          "// 要素を追加",
          "s.push(10)",
          "// itemsを出力",
          "print(s.items)"
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
          "",
          null,
          "",
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
            "associatedtype",
            "typealias",
            "generic"
          ],
          "others": ["Stack", "Element", "push", "item", "IntStack", "items", "Int", "append", "s", "10", "print", "}", "", "// Stackに準拠", "items配列", "ushメソッドを実装", "var s = IntStack()", "// 要素を追加", "temsを出力"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[10]\\n"
          }
        ]
      },
    {
      "title": "throws と rethrows",
      "description": "throws（スローズ）について学びます",
      "tutorialSlides": [
        {
          "title": "throws（スローズ）とは？",
          "content": "# 「エラーを投げる可能性がある」宣言\\n\\n**throws（スローズ）** は、関数が「エラーを投げる可能性がある」ことを宣言します。\\n\\n「throw」は「投げる」という意味。野球でボールを投げるように、問題が起きたときにエラーを「投げ」ます。\\n\\n例えば、0で割り算しようとしたときにエラーを投げるような関数です。"
        },
        {
          "title": "throws関数の作り方",
          "content": "# -> の前に throws\\n\\n```swift\\nfunc divide(_ a: Int, _ b: Int) throws -> Int {\\n    if b == 0 {\\n        throw MyError.divByZero  // エラーを投げる\\n    }\\n    return a / b\\n}\\n```\\n\\n`throws` を書くことで「この関数はエラーを投げるかもしれないよ」と伝えます。"
        },
        {
          "title": "try と do-catch",
          "content": "# エラーを受け止める\\n\\n```swift\\ndo {\\n    let result = try divide(10, 0)  // tryでcheck関数を呼び出す\\n    print(result)\\n} catch {\\n    print(\"エラー発生: \\(error)\")  // エラーを処理\\n}\\n```\\n\\n- **try**: 「エラーが起きるかも」と覚悟して呼び出す\\n- **do-catch**: エラーが起きたときの処理を書く"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n数が負のときにエラーを投げる関数を作りましょう。\\n\\n1. `MyError` エラー型を定義（invalid case）\\n2. `check` 関数を `throws` で作る\\n3. 負の数なら `throw` でエラー\\n4. `try` と `do-catch` で呼び出す"
        }
      ],
      "correctCode": "// エラー型を定義\\nenum MyError: Error { case invalid }\\n\\n// throwsでエラーを投げる可能性を示す\\nfunc check(_ n: Int) throws -> Int {\\n    // 負の場合はエラー\\n    if n < 0 { throw MyError.invalid }\\n    // nを返す\\n    return n\\n// ブロックを閉じる\\n}\\n\\n// do-catchでエラー処理\\ndo {\\n    // tryでcheck関数を呼び出す\\n    let v = try check(10)\\n    // vを出力\\n    print(v)\\n// ブロックを開始\\n} catch {\\n    // エラーを出力\\n    print(\"エラー\")\\n// ブロックを閉じる\\n}",
      "holeyCode": "// エラー型を定義\\nenum ___: ___ { case ___ }\\n___\\n// throwsでエラーを投げる可能性を示す\\nfunc ___(_ ___: ___) ___ -> ___ {\\n    // 負の場合はエラー\\n    if ___ < ___ { ___ ___.___ }\\n    // nを返す\\n    return ___\\n// ブロックを閉じる\\n___\\n___\\n// do-catchでエラー処理\\n___ {\\n    // tryでcheck関数を呼び出す\\n    let ___ = ___ ___(___)\\n    // vを出力\\n    ___(___)\\n// ブロックを開始\\n} ___ {\\n    // エラーを出力\\n    ___(\"___\")\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// エラー型を定義",
          "enum MyError: Error { case invalid }",
          "",
          "// throwsでエラーを投げる可能性を示す",
          "func check(_ n: Int) throws -> Int {",
          "    // 負の場合はエラー",
          "    if n < 0 { throw MyError.invalid }",
          "    // nを返す",
          "    return n",
          "// ブロックを閉じる",
          "}",
          "",
          "// do-catchでエラー処理",
          "do {",
          "    // tryでcheck関数を呼び出す",
          "    let v = try check(10)",
          "    // vを出力",
          "    print(v)",
          "// ブロックを開始",
          "} catch {",
          "    // エラーを出力",
          "    print(\"エラー\")",
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
            "throws",
            "throw",
            "error"
          ],
          "others": ["MyError", "Error", "invalid", "check", "n", "Int", "0", "do", "v", "try", "10", "print", "catch", "エラー", "", "}", "// do-catchでエラー処理", "を出力", "tch {"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "Set（集合）",
      "description": "Set（セット）について学びます",
      "tutorialSlides": [
        {
          "title": "Set（セット）とは？",
          "content": "# 重複しないデータの集まり\\n\\n**Set（セット）** は、同じ値を持たないデータの集まりです。\\n\\n配列と違って、同じ値を入れても1つにまとめられます。\\n\\nクラスの出席番号のように、同じ番号が2つあるとおかしいですよね。そういうデータにSetを使います。"
        },
        {
          "title": "Setの特徴",
          "content": "# 重複が自動的に除かれる\\n\\n```swift\\nvar set: Set = [1, 2, 2, 3, 3, 3]\\nprint(set.count)  // 3（重複は1つになる）\\n// setの中身は {1, 2, 3}\\n```\\n\\n2を2回、3を3回入れても、それぞれ1つずつになります。"
        },
        {
          "title": "集合演算",
          "content": "# 数学の集合と同じ計算ができる\\n\\n```swift\\nlet a: Set = [1, 2, 3]\\nlet b: Set = [2, 3, 4]\\n\\na.union(b)        // 合わせる → {1, 2, 3, 4}\\na.intersection(b) // 共通部分 → {2, 3}\\na.subtracting(b)  // 差（aだけ） → {1}\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n重複のあるデータをSetに入れて、実際の要素数を確認しましょう。\\n\\n- `[1, 2, 2, 3, 3, 3]` をSetに入れる\\n- `.count` で要素数を表示\\n- 答えは `3` になる（重複が除かれるから）"
        }
      ],
      "correctCode": "// Setで重複なしのコレクション\\nvar s: Set = [1, 2, 2, 3, 3, 3]\\n// 要素数を出力\\nprint(s.count)",
      "holeyCode": "// Setで重複なしのコレクション\\nvar ___: ___ = [___, ___, ___, ___, ___, ___]\\n// 要素数を出力\\n___(___.___)",
      "correctLines": [
          "// Setで重複なしのコレクション",
          "var s: Set = [1, 2, 2, 3, 3, 3]",
          "// 要素数を出力",
          "print(s.count)"
        ],
      "lineHints": [
          null,
          "s, Set, 1, 2, 2, 3, 3, 3 を指定します。",
          null,
          "print, s, count を指定します。"
        ],
        "candidates": {
          "types": [
            "Set",
            "Array",
            "List"
          ],
          "others": [
            "s", "1", "2", "3", "print", "count"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "mutating",
      "description": "mutating（ミューテイティング）について学びます",
      "tutorialSlides": [
        {
          "title": "mutating（ミューテイティング）とは？",
          "content": "# 「自分を変更する」宣言\\n\\n**mutating（ミューテイティング）** は、構造体のメソッドで「自分自身を変更します」と宣言するキーワードです。\\n\\n「mutate」は「変化する」という意味。自分自身を変化させるメソッドに必要です。\\n\\n構造体は「値型」なので、普通は自分自身を変更できません。でも `mutating` をつけると変更できるようになります。"
        },
        {
          "title": "mutating の使い方",
          "content": "# func の前に mutating\\n\\n```swift\\nstruct Counter {\\n    var count = 0\\n    \\n    mutating func increment() {\\n        count += 1  // 自分のcountを変更\\n    }\\n}\\n```\\n\\n`mutating` がないと、`count += 1` でエラーになります。"
        },
        {
          "title": "なぜ mutating が必要？",
          "content": "# 構造体は「値型」だから\\n\\n構造体は、変数にコピーすると別々の値になります（値型）。\\n\\n自分自身を変更するのは特別なことなので、「このメソッドは自分を変えますよ」と宣言する必要があります。\\n\\nクラスは「参照型」なので mutating は不要です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nカウンターの構造体を作って、数を増やせるようにしましょう。\\n\\n1. `Counter` 構造体を作る\\n2. `count` プロパティを持つ\\n3. `mutating func increment()` で1増やす\\n4. 2回呼び出して `2` と表示されるか確認"
        }
      ],
      "correctCode": "// 構造体を定義\\nstruct Counter {\\n    // countプロパティ\\n    var count = 0\\n    // mutatingで構造体を変更可能に\\n    mutating func increment() {\\n        // countを1増やす\\n        count += 1\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}\\n\\n// インスタンスを作成\\nvar c = Counter()\\n// 1回目のincrementを呼び出し\\nc.increment()\\n// 2回目のincrementを呼び出し\\nc.increment()\\n// countを出力\\nprint(c.count)",
      "holeyCode": "// 構造体を定義\\nstruct ___ {\\n    // countプロパティ\\n    var ___ = ___\\n    // mutatingで構造体を変更可能に\\n    ___ func ___() {\\n        // countを1増やす\\n        ___ += ___\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n___\\n// インスタンスを作成\\nvar ___ = ___()\\n// 1回目のincrementを呼び出し\\n___.___()\\n// 2回目のincrementを呼び出し\\n___.___()\\n// countを出力\\n___(___.___)",
      "correctLines": [
          "// 構造体を定義",
          "struct Counter {",
          "    // countプロパティ",
          "    var count = 0",
          "    // mutatingで構造体を変更可能に",
          "    mutating func increment() {",
          "        // countを1増やす",
          "        count += 1",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
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
          ""
        ],
        "candidates": {
          "keywords": [
            "mutating",
            "mutable",
            "var"
          ],
          "others": ["Counter", "count", "0", "increment", "1", "c", "print", "}", "", "// インスタンスを作成", "var c = Counter()", "crement()", "print(c", "count)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      }
  ]
}
