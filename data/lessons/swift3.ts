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
      "holeyCode": "// エラー型を定義\\nenum ___: ___ { case ___ }\\n___\\n// check関数を定義\\nfunc ___(_ ___: ___) -> ___<___, ___> {\\n    // 負の場合は失敗\\n    if ___ < ___ { return .___(.___) }\\n    // successで成功を返す\\n    return .___(___)\\n___\\n___\\n// 関数を呼び出し\\nlet ___ = ___(___)\\n// switchでパターンマッチ\\nswitch ___ {\\n// 成功の場合\\ncase .___(let ___): ___(___)\\n// 失敗の場合\\ncase .___(_): ___(\"___\")\\n___",
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
          "MyError, Error, negative を指定します。",
          null,
          null,
          "check, n, Int, Result, Int, MyError を指定します。",
          null,
          "n, 0, failure, negative を指定します。",
          null,
          "success, n を指定します。",
          "この行を正しく入力してください。",
          null,
          null,
          "result, check, 10 を指定します。",
          null,
          "result を指定します。",
          null,
          "success, v, print, v を指定します。",
          null,
          "failure, print, エラー を指定します。",
          "この行を正しく入力してください。"
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
      "correctCode": "// numsに[\"1\", \"a\", \"2\", \"b\", \"3\"]を代入\\nlet nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]\\n// nums.compactMapでInt変換しintsに代入\\nlet ints = nums.compactMap { Int($0) }\\n// intsをprintで出力\\nprint(ints)",
      "holeyCode": "// numsに[\"1\", \"a\", \"2\", \"b\", \"3\"]を代入\\nlet ___ = [\"___\", \"___\", \"___\", \"___\", \"___\"]\\n// nums.compactMapでInt変換しintsに代入\\nlet ___ = ___.___ { ___($___) }\\n// intsをprintで出力\\n___(___)",
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
      "correctCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet nums = [1, 2, 3, 4, 5]\\n// nums.reduce(1)で積を計算しproductに代入\\nlet product = nums.reduce(1) { $0 * $1 }\\n// productをprintで出力\\nprint(product)",
      "holeyCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet ___ = [___, ___, ___, ___, ___]\\n// nums.reduce(1)で積を計算しproductに代入\\nlet ___ = ___.___(___) { $___ * $___ }\\n// productをprintで出力\\n___(___)",
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
      "correctCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet nums = [1, 2, 3, 4, 5]\\n// nums.lazy.mapで最初の要素*10をresultに代入\\nlet result = nums.lazy.map { $0 * 10 }.first!\\n// resultをprintで出力\\nprint(result)",
      "holeyCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet ___ = [___, ___, ___, ___, ___]\\n// nums.lazy.mapで最初の要素*10をresultに代入\\nlet ___ = ___.___.map { $___ * ___ }.___!\\n// resultをprintで出力\\n___(___)",
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
      "correctCode": "// numsに[1, -2, 3, -4, 5]を代入\\nlet nums = [1, -2, 3, -4, 5]\\n// for-in whereでn>0の要素をループ\\nfor n in nums where n > 0 {\\n    // nをprintで出力\\n    print(n)\\n}",
      "holeyCode": "// numsに[1, -2, 3, -4, 5]を代入\\nlet ___ = [___, ___, ___, ___, ___]\\n// for-in whereでn>0の要素をループ\\nfor ___ in ___ ___ ___ > ___ {\\n    // nをprintで出力\\n    ___(___)\\n___",
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
          "nums, 1, -2, 3, -4, 5 を指定します。",
          null,
          "n, nums, where, n, 0 を指定します。",
          null,
          "print, n を指定します。",
          "この行を正しく入力してください。"
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
      "correctCode": "// test関数を定義\\nfunc test() {\\n    // deferでスコープ終了時に実行\\n    defer { print(\"end\") }\\n    // startと出力\\n    print(\"start\")\\n}\\n// 関数を呼び出し\\ntest()",
      "holeyCode": "// test関数を定義\\nfunc ___() {\\n    // deferでスコープ終了時に実行\\n    ___ { ___(\"___\") }\\n    // startと出力\\n    ___(\"___\")\\n___\\n// 関数を呼び出し\\n___()",
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
          "test を指定します。",
          null,
          "defer, print, end を指定します。",
          null,
          "print, start を指定します。",
          "この行を正しく入力してください。",
          null,
          "test を指定します。"
        ],
        "candidates": {
          "keywords": [
            "defer",
            "finally",
            "cleanup"
          ],
          "others": ["test", "print", "end", "start", "}"]
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
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // associatedtypeで関連型を定義\\n    ___ ___\\n    // pushメソッドを宣言\\n    mutating func ___(_ ___: ___)\\n___\\n___\\n// Stackに準拠\\nstruct ___: ___ {\\n    // items配列\\n    var ___: [___] = []\\n    // pushメソッドを実装\\n    mutating func ___(_ ___: ___) {\\n        // 要素を追加\\n        ___.___(___)\\n    ___\\n___\\n___\\n// インスタンスを作成\\nvar ___ = ___()\\n// 要素を追加\\n___.___(___)\\n// itemsを出力\\n___(___.___)",
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
          "Stack を指定します。",
          null,
          "associatedtype, Element を指定します。",
          null,
          "push, item, Element を指定します。",
          "この行を正しく入力してください。",
          null,
          null,
          "IntStack, Stack を指定します。",
          null,
          "items, Int を指定します。",
          null,
          "push, item, Int を指定します。",
          null,
          "items, append, item を指定します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "s, IntStack を指定します。",
          null,
          "s, push, 10 を指定します。",
          null,
          "print, s, items を指定します。"
        ],
        "candidates": {
          "keywords": [
            "associatedtype",
            "typealias",
            "generic"
          ],
          "others": ["Stack", "Element", "push", "item", "IntStack", "items", "Int", "append", "s", "10", "print", "}", ""]
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
      "holeyCode": "// エラー型を定義\\nenum ___: ___ { case ___ }\\n___\\n// throwsでエラーを投げる可能性を示す\\nfunc ___(_ ___: ___) ___ -> ___ {\\n    // 負の場合はエラー\\n    if ___ < ___ { ___ ___.___ }\\n    // nを返す\\n    return ___\\n___\\n___\\n// do-catchでエラー処理\\n___ {\\n    // tryで呼び出し\\n    let ___ = ___ ___(___)\\n    // vを出力\\n    ___(___)\\n} ___ {\\n    // エラーを出力\\n    ___(\"___\")\\n___",
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
          "MyError, Error, invalid を指定します。",
          null,
          null,
          "check, n, Int, throws, Int を指定します。",
          null,
          "n, 0, throw, MyError, invalid を指定します。",
          null,
          "n を指定します。",
          "この行を正しく入力してください。",
          null,
          null,
          "do を指定します。",
          null,
          "v, try, check, 10 を指定します。",
          null,
          "print, v を指定します。",
          "catch を指定します。",
          null,
          "print, エラー を指定します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "throws",
            "throw",
            "error"
          ],
          "others": ["MyError", "Error", "invalid", "check", "n", "Int", "0", "do", "v", "try", "10", "print", "catch", "エラー", "", "}"]
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
      "correctCode": "// 構造体を定義\\nstruct Counter {\\n    // countプロパティ\\n    var count = 0\\n    // mutatingで構造体を変更可能に\\n    mutating func increment() {\\n        // countを1増やす\\n        count += 1\\n    }\\n}\\n\\n// インスタンスを作成\\nvar c = Counter()\\n// 1回目のincrementを呼び出し\\nc.increment()\\n// 2回目のincrementを呼び出し\\nc.increment()\\n// countを出力\\nprint(c.count)",
      "holeyCode": "// 構造体を定義\\nstruct ___ {\\n    // countプロパティ\\n    var ___ = ___\\n    // mutatingで構造体を変更可能に\\n    ___ func ___() {\\n        // countを1増やす\\n        ___ += ___\\n    ___\\n___\\n___\\n// インスタンスを作成\\nvar ___ = ___()\\n// 1回目のincrementを呼び出し\\n___.___()\\n// 2回目のincrementを呼び出し\\n___.___()\\n// countを出力\\n___(___.___)",
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
          "Counter を指定します。",
          null,
          "count, 0 を指定します。",
          null,
          "mutating, increment を指定します。",
          null,
          "count, 1 を指定します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "c, Counter を指定します。",
          null,
          "c, increment を指定します。",
          null,
          "c, increment を指定します。",
          null,
          "print, c, count を指定します。"
        ],
        "candidates": {
          "keywords": [
            "mutating",
            "mutable",
            "var"
          ],
          "others": ["Counter", "count", "0", "increment", "1", "c", "print", "}", ""]
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
