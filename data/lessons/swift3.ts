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
      "correctCode": "// エラー型を定義\\nenum MyError: Error { case negative }\\n\\n// check関数を定義\\nfunc check(_ n: Int) -> Result<Int, MyError> {\\n    // 負の場合は失敗\\n    if n < 0 { return .failure(.negative) }\\n    // successで成功を返す\\n    return .success(n)\\n}\\n\\n// 関数を呼び出し\\nlet result = check(10)\\n// switchでパターンマッチ\\nswitch result {\\n// 成功の場合\\ncase .success(let v): print(v)\\n// 失敗の場合\\ncase .failure(_): print(\"エラー\")\\n}",
      "holeyCode": "// エラー型を定義\\nenum MyError: ___ { case negative }\\n___\\n// check関数を定義\\nfunc ___(_ n: Int) -> Result<Int, MyError> {\\n    // 負の場合は失敗\\n    if n < 0 { return .failure(.___) }\\n    // successで成功を返す\\n    return .___(n)\\n___\\n___\\n// 関数を呼び出し\\nlet result = ___(10)\\n// switchでパターンマッチ\\nswitch ___ {\\n// 成功の場合\\ncase .success(let v): print(___)\\n// 失敗の場合\\n___ .failure(_): print(\"___\")\\n___",
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
          "}",
          "",
          "// 関数を呼び出し",
          "let result = check(10)",
          "// switchでパターンマッチ",
          "switch result {",
          "// 成功の場合",
          "case .success(let v): print(v)",
          "// 失敗の場合",
          "case .failure(_): print(\"エラー\")",
          "}"
        ],
      "lineHints": [
          null,
          "Error と入力しましょう。",
          null,
          null,
          "check と入力しましょう。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "result と入力しましょう。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "success",
            "ok",
            "value"
          ],
          "others": ["Error", "negative", "check", "result", "v", "error", "エラー", "case", "", "}", "}"]
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
      "correctCode": "// numsに[\"1\", \"a\", \"2\", \"b\", \"3\"]を代入\\nlet nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]\\n// nums.compactMapでInt変換しintsに代入\\nlet ints = nums.compactMap { Int($0) }\\n// intsをprintで出力\\nprint(ints)",
      "holeyCode": "// numsに[\"1\", \"a\", \"2\", \"b\", \"3\"]を代入\\nlet nums = [\"___\", \"a\", \"2\", \"b\", \"3\"]\\n// nums.compactMapでInt変換しintsに代入\\nlet ints = nums.___ { Int($0) }\\n// intsをprintで出力\\nprint(___)",
      "correctLines": [
          "// numsに[\"1\", \"a\", \"2\", \"b\", \"3\"]を代入",
          "let nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]",
          "// nums.compactMapでInt変換しintsに代入",
          "let ints = nums.compactMap { Int($0) }",
          "// intsをprintで出力",
          "print(ints)"
        ],
      "lineHints": [
          null,
          "1 と入力しましょう。",
          null,
          "compactMap で nil を除外します。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "methods": [
            "compactMap",
            "flatMap",
            "map"
          ],
          "others": [
            "1",
            "ints"
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
      "correctCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet nums = [1, 2, 3, 4, 5]\\n// nums.reduce(1)で積を計算しproductに代入\\nlet product = nums.reduce(1) { $0 * $1 }\\n// productをprintで出力\\nprint(product)",
      "holeyCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet ___ = [___, 2, 3, 4, 5]\\n// nums.reduce(1)で積を計算しproductに代入\\nlet ___ = nums.___(___) { $0 * ___ }\\n// productをprintで出力\\n___(___)",
      "correctLines": [
          "// numsに[1, 2, 3, 4, 5]を代入",
          "let nums = [1, 2, 3, 4, 5]",
          "// nums.reduce(1)で積を計算しproductに代入",
          "let product = nums.reduce(1) { $0 * $1 }",
          "// productをprintで出力",
          "print(product)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "reduce で畳み込みます。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "methods": [
            "reduce",
            "fold",
            "aggregate"
          ],
          "others": ["1", "reduce(1) { $0 * $1 }", "product", "nums", "$1", "print"]
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
      "correctCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet nums = [1, 2, 3, 4, 5]\\n// nums.lazy.mapで最初の要素*10をresultに代入\\nlet result = nums.lazy.map { $0 * 10 }.first!\\n// resultをprintで出力\\nprint(result)",
      "holeyCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet nums = [___, 2, 3, 4, 5]\\n// nums.lazy.mapで最初の要素*10をresultに代入\\nlet result = nums.___.map { $0 * 10 }.first!\\n// resultをprintで出力\\nprint(___)",
      "correctLines": [
          "// numsに[1, 2, 3, 4, 5]を代入",
          "let nums = [1, 2, 3, 4, 5]",
          "// nums.lazy.mapで最初の要素*10をresultに代入",
          "let result = nums.lazy.map { $0 * 10 }.first!",
          "// resultをprintで出力",
          "print(result)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "lazy で遅延評価します。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "properties": [
            "lazy",
            "eager",
            "delayed"
          ],
          "others": [
            "1",
            "result"
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
      "correctCode": "// numsに[1, -2, 3, -4, 5]を代入\\nlet nums = [1, -2, 3, -4, 5]\\n// for-in whereでn>0の要素をループ\\nfor n in nums where n > 0 {\\n    // nをprintで出力\\n    print(n)\\n}",
      "holeyCode": "// numsに[1, -2, 3, -4, 5]を代入\\nlet nums = [___, -2, 3, -4, 5]\\n// for-in whereでn>0の要素をループ\\nfor n in nums ___ n > 0 {\\n    // nをprintで出力\\n    print(___)\\n___",
      "correctLines": [
          "// numsに[1, -2, 3, -4, 5]を代入",
          "let nums = [1, -2, 3, -4, 5]",
          "// for-in whereでn>0の要素をループ",
          "for n in nums where n > 0 {",
          "    // nをprintで出力",
          "    print(n)",
          "}"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "変数の内容を画面に出力します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "where",
            "if",
            "when"
          ],
          "others": ["1", "n", "}"]
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
      "correctCode": "// test関数を定義\\nfunc test() {\\n    // deferでスコープ終了時に実行\\n    defer { print(\"end\") }\\n    // startと出力\\n    print(\"start\")\\n}\\n// 関数を呼び出し\\ntest()",
      "holeyCode": "// test関数を定義\\nfunc ___() {\\n    // deferでスコープ終了時に実行\\n    ___ { print(\"end\") }\\n    // startと出力\\n    print(\"___\")\\n___\\n// 関数を呼び出し\\n___()",
      "correctLines": [
          "// test関数を定義",
          "func test() {",
          "    // deferでスコープ終了時に実行",
          "    defer { print(\"end\") }",
          "    // startと出力",
          "    print(\"start\")",
          "}",
          "// 関数を呼び出し",
          "test()"
        ],
      "lineHints": [
          null,
          "関数（test）を定義します。",
          null,
          "defer でスコープ終了時の処理を登録します。",
          null,
          "start と入力しましょう。",
          "この行を正しく入力してください。",
          null,
          "関数（test）を呼び出して実行する。"
        ],
        "candidates": {
          "keywords": [
            "defer",
            "finally",
            "cleanup"
          ],
          "others": ["test", "start", "}"]
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
      "correctCode": "// プロトコルを定義\\nprotocol Stack {\\n    // associatedtypeで関連型を定義\\n    associatedtype Element\\n    // pushメソッドを宣言\\n    mutating func push(_ item: Element)\\n}\\n\\n// Stackに準拠\\nstruct IntStack: Stack {\\n    // items配列\\n    var items: [Int] = []\\n    // pushメソッドを実装\\n    mutating func push(_ item: Int) {\\n        // 要素を追加\\n        items.append(item)\\n    }\\n}\\n\\n// インスタンスを作成\\nvar s = IntStack()\\n// 要素を追加\\ns.push(10)\\n// itemsを出力\\nprint(s.items)",
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // associatedtypeで関連型を定義\\n    ___ Element\\n    // pushメソッドを宣言\\n    mutating func push(_ item: ___)\\n___\\n___\\n// Stackに準拠\\n___\\n    // items配列\\n    var items: [___] = []\\n    // pushメソッドを実装\\n    mutating func ___(_ item: Int) {\\n        // 要素を追加\\n        items.___(item)\\n    ___\\n___\\n___\\n// インスタンスを作成\\nvar s = ___()\\n// 要素を追加\\ns.push(___)\\n// itemsを出力\\nprint(s.___)",
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
      "lineHints": [
          null,
          "Stack と入力しましょう。",
          null,
          "associatedtype で関連型を定義します。",
          null,
          "Element と入力しましょう。",
          "この行を正しく入力してください。",
          null,
          null,
          "この行を正しく入力してください。",
          null,
          "IntStack と入力しましょう。",
          null,
          "10 と入力しましょう。",
          null,
          "items と入力しましょう。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "associatedtype",
            "typealias",
            "generic"
          ],
          "others": ["Stack", "Element", "Int", "push", "append", "IntStack", "10", "items", "struct IntStack: Stack {", "}", "", "struct IntStack: Stack {", "}", "", "}"]
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
      "correctCode": "// エラー型を定義\\nenum MyError: Error { case invalid }\\n\\n// throwsでエラーを投げる可能性を示す\\nfunc check(_ n: Int) throws -> Int {\\n    // 負の場合はエラー\\n    if n < 0 { throw MyError.invalid }\\n    // nを返す\\n    return n\\n}\\n\\n// do-catchでエラー処理\\ndo {\\n    // tryで呼び出し\\n    let v = try check(10)\\n    // vを出力\\n    print(v)\\n} catch {\\n    // エラーを出力\\n    print(\"エラー\")\\n}",
      "holeyCode": "// エラー型を定義\\nenum MyError: Error { case ___ }\\n___\\n// throwsでエラーを投げる可能性を示す\\nfunc check(_ n: Int) ___ -> Int {\\n    // 負の場合はエラー\\n    if n < 0 { throw MyError.___ }\\n    // nを返す\\n    return ___\\n___\\n___\\n// do-catchでエラー処理\\n___\\n    // tryで呼び出し\\n    let v = ___ check(10)\\n    // vを出力\\n    print(___)\\n___\\n    // エラーを出力\\n    ___(\"___\")\\n___",
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
          "}",
          "",
          "// do-catchでエラー処理",
          "do {",
          "    // tryで呼び出し",
          "    let v = try check(10)",
          "    // vを出力",
          "    print(v)",
          "} catch {",
          "    // エラーを出力",
          "    print(\"エラー\")",
          "}"
        ],
      "lineHints": [
          null,
          "invalid と入力しましょう。",
          null,
          null,
          "関数（check）を定義します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "変数の値を呼び出し元に返します（戻り値）。",
          "この行を正しく入力してください。",
          null,
          null,
          "この行を正しく入力してください。",
          null,
          "try と入力しましょう。",
          null,
          "変数の内容を画面に出力します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "throws",
            "throw",
            "error"
          ],
          "others": ["invalid", "n", "try", "v", "エラー", "do {", "} catch {", "print", "", "n", "}", "do {", "} catch {", "}"]
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
      "correctCode": "// Setで重複なしのコレクション\\nvar s: Set = [1, 2, 2, 3, 3, 3]\\n// 要素数を出力\\nprint(s.count)",
      "holeyCode": "// Setで重複なしのコレクション\\nvar s: ___ = [1, 2, 2, 3, 3, 3]\\n// 要素数を出力\\nprint(s.___)",
      "correctLines": [
          "// Setで重複なしのコレクション",
          "var s: Set = [1, 2, 2, 3, 3, 3]",
          "// 要素数を出力",
          "print(s.count)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "count と入力しましょう。"
        ],
        "candidates": {
          "types": [
            "Set",
            "Array",
            "List"
          ],
          "others": [
            "count"
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
      "correctCode": "// 構造体を定義\\nstruct Counter {\\n    // countプロパティ\\n    var count = 0\\n    // mutatingで構造体を変更可能に\\n    mutating func increment() {\\n        // countを1増やす\\n        count += 1\\n    }\\n}\\n\\n// インスタンスを作成\\nvar c = Counter()\\n// 1回目のincrementを呼び出し\\nc.increment()\\n// 2回目のincrementを呼び出し\\nc.increment()\\n// countを出力\\nprint(c.count)",
      "holeyCode": "// 構造体を定義\\nstruct ___ {\\n    // countプロパティ\\n    var count = ___\\n    // mutatingで構造体を変更可能に\\n    ___ func increment() {\\n        // countを1増やす\\n        count += ___\\n    ___\\n___\\n___\\n// インスタンスを作成\\nvar c = ___()\\n// 1回目のincrementを呼び出し\\nc.___()\\n// 2回目のincrementを呼び出し\\nc.___()\\n// countを出力\\nprint(c.___)",
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
      "lineHints": [
          null,
          "構造体（Counter）を定義します。",
          null,
          "変数を宣言し、数値を代入します。",
          null,
          "mutating で構造体を変更可能にします。",
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "Counter と入力しましょう。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "count と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "mutating",
            "mutable",
            "var"
          ],
          "others": ["Counter", "0", "1", "increment", "count", "0", "1", "}", ""]
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
