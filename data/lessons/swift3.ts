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
          "title": "Result とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 成功か失敗かを表す\n\n**Result** は、成功(.success)か失敗(.failure)を表す型です。\n\n```swift\nfunc divide(_ a: Int, _ b: Int) -> Result<Int, Error> {\n    if b == 0 { return .failure(MyError.divByZero) }\n    return .success(a / b)\n}\n```"
        },
        {
          "title": "結果の取得",
          "image": "/illustrations/3d/robot.png",
          "content": "# switch で分岐\n\n```swift\nswitch result {\ncase .success(let value):\n    print(value)\ncase .failure(let error):\n    print(error)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "enum MyError: Error { case negative }\n\nfunc check(_ n: Int) -> Result<Int, MyError> {\n    if n < 0 { return .failure(.negative) }\n    return .success(n)\n}\n\nlet result = check(10)\nswitch result {\ncase .success(let v): print(v)\ncase .failure(_): print(\"error\")\n}",
      "holeyCode": "// エラー型を定義\nenum MyError: ___ { case negative }\n\n// 関数を定義\nfunc check(_ n: Int) -> Result<Int, MyError> {\n    // 負の場合は失敗\n    if n < 0 { return .failure(.___) }\n    // successで成功を返す\n    return .___(n)\n}\n\n// 関数を呼び出し\nlet result = ___(10)\n// switchでパターンマッチ\nswitch ___ {\ncase .success(let v): print(___)\ncase .failure(_): print(\"___\")\n}",
      "correctLines": [
        "enum MyError: Error { case negative }",
        "",
        "func check(_ n: Int) -> Result<Int, MyError> {",
        "    if n < 0 { return .failure(.negative) }",
        "    return .success(n)",
        "}",
        "",
        "let result = check(10)",
        "switch result {",
        "case .success(let v): print(v)",
        "case .failure(_): print(\"error\")",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        ".success で成功を返します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "title": "compactMap とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# nilを除外して変換\n\n**compactMap** は、mapと同じく変換しますが、nilを除外します。\n\n```swift\nlet strings = [\"1\", \"2\", \"x\", \"3\"]\nlet nums = strings.compactMap { Int($0) }\n// [1, 2, 3]\n```"
        },
        {
          "title": "map との違い",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# Optional を unwrap\n\n```swift\n// map: [Int?]\nlet a = strings.map { Int($0) }\n\n// compactMap: [Int]\nlet b = strings.compactMap { Int($0) }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]\nlet ints = nums.compactMap { Int($0) }\nprint(ints)",
      "holeyCode": "// 配列を作成\nlet nums = [\"___\", \"a\", \"2\", \"b\", \"3\"]\n// compactMapでnilを除外して変換\nlet ints = nums.___ { Int($0) }\n// 結果を出力\nprint(___)",
      "correctLines": [
        "let nums = [\"1\", \"a\", \"2\", \"b\", \"3\"]",
        "let ints = nums.compactMap { Int($0) }",
        "print(ints)"
      ],
      "lineHints": [
        null,
        "compactMap で nil を除外します。",
        null
      ],
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
          "title": "reduce とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 畳み込み\n\n**reduce** は、初期値と関数で要素を1つにまとめます。\n\n```swift\nlet sum = [1, 2, 3].reduce(0) { $0 + $1 }\n// 6\n```"
        },
        {
          "title": "様々な集約",
          "image": "/illustrations/3d/robot.png",
          "content": "# 積や結合\n\n```swift\n// 積\n[1, 2, 3, 4].reduce(1, *)\n\n// 文字列結合\n[\"a\", \"b\", \"c\"].reduce(\"\", +)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, 2, 3, 4, 5]\nlet product = nums.reduce(1) { $0 * $1 }\nprint(product)",
      "holeyCode": "// 配列を作成\nlet nums = [___, 2, 3, 4, 5]\n// reduceで畳み込み\nlet product = nums._____(1) { $0 * $1 }\n// 結果を出力\nprint(___)",
      "correctLines": [
        "let nums = [1, 2, 3, 4, 5]",
        "let product = nums.reduce(1) { $0 * $1 }",
        "print(product)"
      ],
      "lineHints": [
        null,
        "reduce で畳み込みます。",
        null
      ],
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
          "title": "lazy とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 遅延評価\n\n**lazy** を使うと、必要になるまで計算を遅延させます。\n\n```swift\nlet result = (1...1000).lazy.map { $0 * 2 }.first!\n// 全要素を計算せず、最初の1つだけ計算\n```"
        },
        {
          "title": "パフォーマンス向上",
          "image": "/illustrations/3d/robot.png",
          "content": "# 大量データの処理\n\n```swift\nlet big = (1...1_000_000).lazy\n    .filter { $0 % 2 == 0 }\n    .map { $0 * 2 }\n    .prefix(5)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, 2, 3, 4, 5]\nlet result = nums.lazy.map { $0 * 10 }.first!\nprint(result)",
      "holeyCode": "// 配列を作成\nlet nums = [___, 2, 3, 4, 5]\n// lazyで遅延評価\nlet result = nums.___.map { $0 * 10 }.first!\n// 結果を出力\nprint(___)",
      "correctLines": [
        "let nums = [1, 2, 3, 4, 5]",
        "let result = nums.lazy.map { $0 * 10 }.first!",
        "print(result)"
      ],
      "lineHints": [
        null,
        "lazy で遅延評価します。",
        null
      ],
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
          "title": "where とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件を追加\n\n**where** で、for文やswitch文に条件を追加できます。\n\n```swift\nfor n in nums where n > 0 {\n    print(n)\n}\n```"
        },
        {
          "title": "switch での使用",
          "image": "/illustrations/3d/robot.png",
          "content": "# case に条件追加\n\n```swift\nswitch value {\ncase let x where x > 0:\n    print(\"positive\")\ndefault:\n    print(\"other\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, -2, 3, -4, 5]\nfor n in nums where n > 0 {\n    print(n)\n}",
      "holeyCode": "// 配列を作成\nlet nums = [___, -2, 3, -4, 5]\n// whereで条件を追加\nfor n in nums ___ n > 0 {\n    // nを出力\n    print(___)\n}",
      "correctLines": [
        "let nums = [1, -2, 3, -4, 5]",
        "for n in nums where n > 0 {",
        "    print(n)",
        "}"
      ],
      "lineHints": [
        null,
        "where で条件を追加します。",
        null,
        null
      ],
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
          "title": "defer とは？",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# スコープ終了時に実行\n\n**defer** は、現在のスコープを出るときに実行される処理を登録します。\n\n```swift\nfunc process() {\n    defer { print(\"cleanup\") }\n    print(\"working\")\n}  // working, cleanup\n```"
        },
        {
          "title": "リソース管理",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルのクローズなど\n\n```swift\nfunc readFile() {\n    let file = open()\n    defer { file.close() }\n    // ファイル処理\n}  // 自動的にclose\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func test() {\n    defer { print(\"end\") }\n    print(\"start\")\n}\ntest()",
      "holeyCode": "// 関数を定義\nfunc ___() {\n    // deferでスコープ終了時に実行\n    ___ { print(\"end\") }\n    // startと出力\n    print(\"___\")\n}\n// 関数を呼び出し\n___()",
      "correctLines": [
        "func test() {",
        "    defer { print(\"end\") }",
        "    print(\"start\")",
        "}",
        "test()"
      ],
      "lineHints": [
        null,
        "defer でスコープ終了時の処理を登録します。",
        null,
        null,
        null
      ],
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
          "title": "associatedtype とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# プロトコルの関連型\n\n**associatedtype** で、プロトコルにジェネリックな型を定義できます。\n\n```swift\nprotocol Container {\n    associatedtype Item\n    func add(_ item: Item)\n}\n```"
        },
        {
          "title": "実装側で型を決定",
          "image": "/illustrations/3d/robot.png",
          "content": "# 具体的な型を指定\n\n```swift\nstruct IntBox: Container {\n    typealias Item = Int\n    func add(_ item: Int) { }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Stack {\n    associatedtype Element\n    mutating func push(_ item: Element)\n}\n\nstruct IntStack: Stack {\n    var items: [Int] = []\n    mutating func push(_ item: Int) {\n        items.append(item)\n    }\n}\n\nvar s = IntStack()\ns.push(10)\nprint(s.items)",
      "holeyCode": "// プロトコルを定義\nprotocol ___ {\n    // associatedtypeで関連型を定義\n    ___ Element\n    // pushメソッドを宣言\n    mutating func push(_ item: ___)\n}\n\n// Stackに準拠\nstruct IntStack: Stack {\n    // items配列\n    var items: [___] = []\n    // pushメソッドを実装\n    mutating func ___(_ item: Int) {\n        // 要素を追加\n        items.___(item)\n    }\n}\n\n// インスタンスを作成\nvar s = ___()\n// 要素を追加\ns.push(___)\n// itemsを出力\nprint(s.___)",
      "correctLines": [
        "protocol Stack {",
        "    associatedtype Element",
        "    mutating func push(_ item: Element)",
        "}",
        "",
        "struct IntStack: Stack {",
        "    var items: [Int] = []",
        "    mutating func push(_ item: Int) {",
        "        items.append(item)",
        "    }",
        "}",
        "",
        "var s = IntStack()",
        "s.push(10)",
        "print(s.items)"
      ],
      "lineHints": [
        null,
        "associatedtype で関連型を定義します。",
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
        null,
        null,
        null
      ],
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
          "title": "throws とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# エラーを投げる\n\n**throws** 関数は、エラーを投げる可能性があります。\n\n```swift\nfunc divide(_ a: Int, _ b: Int) throws -> Int {\n    if b == 0 { throw MyError.divByZero }\n    return a / b\n}\n```"
        },
        {
          "title": "try で呼び出し",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーハンドリング\n\n```swift\ndo {\n    let result = try divide(10, 0)\n} catch {\n    print(error)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "enum MyError: Error { case invalid }\n\nfunc check(_ n: Int) throws -> Int {\n    if n < 0 { throw MyError.invalid }\n    return n\n}\n\ndo {\n    let v = try check(10)\n    print(v)\n} catch {\n    print(\"error\")\n}",
      "holeyCode": "// エラー型を定義\nenum MyError: Error { case ___ }\n\n// throwsでエラーを投げる可能性を示す\nfunc check(_ n: Int) ___ -> Int {\n    // 負の場合はエラー\n    if n < 0 { throw MyError.___ }\n    // 値を返す\n    return ___\n}\n\n// do-catchでエラー処理\ndo {\n    // tryで呼び出し\n    let v = ___ check(10)\n    // 値を出力\n    print(___)\n} catch {\n    // エラーを出力\n    print(\"___\")\n}",
      "correctLines": [
        "enum MyError: Error { case invalid }",
        "",
        "func check(_ n: Int) throws -> Int {",
        "    if n < 0 { throw MyError.invalid }",
        "    return n",
        "}",
        "",
        "do {",
        "    let v = try check(10)",
        "    print(v)",
        "} catch {",
        "    print(\"error\")",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "throws でエラーを投げる可能性を示します。",
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
          "title": "Set とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 重複なしのコレクション\n\n**Set** は、重複した要素を持たないコレクションです。\n\n```swift\nvar set: Set = [1, 2, 2, 3, 3, 3]\n// {1, 2, 3}\n```"
        },
        {
          "title": "集合演算",
          "image": "/illustrations/3d/gear.png",
          "content": "# 和、積、差\n\n```swift\nlet a: Set = [1, 2, 3]\nlet b: Set = [2, 3, 4]\na.union(b)        // {1, 2, 3, 4}\na.intersection(b) // {2, 3}\na.subtracting(b)  // {1}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var s: Set = [1, 2, 2, 3, 3, 3]\nprint(s.count)",
      "holeyCode": "// Setで重複なしのコレクション\nvar s: ___ = [1, 2, 2, 3, 3, 3]\n// 要素数を出力\nprint(s.___)",
      "correctLines": [
        "var s: Set = [1, 2, 2, 3, 3, 3]",
        "print(s.count)"
      ],
      "lineHints": [
        "Set で重複なしのコレクションを作ります。",
        null
      ],
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
          "title": "mutating とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 構造体を変更するメソッド\n\n**mutating** をつけると、構造体のメソッドで自身を変更できます。\n\n```swift\nstruct Point {\n    var x: Int\n    mutating func moveBy(dx: Int) {\n        x += dx\n    }\n}\n```"
        },
        {
          "title": "なぜ必要？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 値型の特性\n\n構造体は値型なので、デフォルトではメソッド内で自身を変更できません。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "struct Counter {\n    var count = 0\n    mutating func increment() {\n        count += 1\n    }\n}\n\nvar c = Counter()\nc.increment()\nc.increment()\nprint(c.count)",
      "holeyCode": "// 構造体を定義\nstruct ___ {\n    // countプロパティ\n    var count = ___\n    // mutatingで構造体を変更可能に\n    ___ func increment() {\n        // countを1増やす\n        count += ___\n    }\n}\n\n// インスタンスを作成\nvar c = ___()\n// incrementを呼び出し\nc.___()\nc.___()\n// countを出力\nprint(c.___)",
      "correctLines": [
        "struct Counter {",
        "    var count = 0",
        "    mutating func increment() {",
        "        count += 1",
        "    }",
        "}",
        "",
        "var c = Counter()",
        "c.increment()",
        "c.increment()",
        "print(c.count)"
      ],
      "lineHints": [
        null,
        null,
        "mutating で構造体を変更可能にします。",
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
