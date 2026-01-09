export const swift4Data = {
  "language": "swift",
  "lessonId": "swift-4",
  "lessonTitle": "Swift IV - プロトコルとジェネリクス",
  "lessonDescription": "Swiftのプロトコルとジェネリクスを学びます。抽象化と型安全なコードを書くスキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "プロトコルの定義",
      "description": "共通のインターフェースを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "プロトコルとは？",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 振る舞いの契約\n\n**protocol** は、型が実装すべきメソッドやプロパティを定義します。\n\n```swift\nprotocol Greetable {\n    var name: String { get }\n    func greet() -> String\n}\n```"
        },
        {
          "title": "準拠",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型がプロトコルに準拠\n\n```swift\nstruct Person: Greetable {\n    var name: String\n    func greet() -> String {\n        return \"Hello, \\(name)\"\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Speakable {\n    func speak() -> String\n}\n\nstruct Dog: Speakable {\n    func speak() -> String {\n        return \"Woof!\"\n    }\n}\n\nlet dog = Dog()\nprint(dog.speak())",
      "holeyCode": "___\\n    ___\\n___\\n\\n___\\n    ___\\n        ___\\n    ___\\n___\\n\\n___\\n___"Woof!\"\n    }\n}\n\nlet dog = Dog()\nprint(dog.speak())",
      "correctLines": [
        "protocol Speakable {",
        "    func speak() -> String",
        "}",
        "",
        "struct Dog: Speakable {",
        "    func speak() -> String {",
        "        return "Woof!"",
        "    }",
        "}",
        "",
        "let dog = Dog()",
        "print(dog.speak())"
      ],
      "lineHints": [
        "protocol でプロトコルを定義します。",
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
        "keywords": ["protocol", "struct", "class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Woof!\n"
        }
      ]
    },
    {
      "title": "プロトコル拡張",
      "description": "プロトコルにデフォルト実装を追加しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "extension で拡張",
          "image": "/illustrations/3d/robot.png",
          "content": "# デフォルト実装\n\n**extension** でプロトコルにデフォルト実装を追加できます。\n\n```swift\nprotocol Describable {\n    var description: String { get }\n}\n\nextension Describable {\n    var description: String { \"No description\" }\n}\n```"
        },
        {
          "title": "オーバーライド可能",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 準拠する型で上書き\n\n```swift\nstruct Item: Describable {\n    var description: String { \"Custom\" }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Identifiable {\n    var id: Int { get }\n}\n\nextension Identifiable {\n    func display() { print(\"ID: \\(id)\") }\n}\n\nstruct User: Identifiable {\n    var id: Int\n}\n\nlet user = User(id: 42)\nuser.display()",
      "holeyCode": "___\\n    ___\\n___\\n\\n// extension と入力して約束を広げてね\\n___\\n    ___\\n___\\n\\n___\\n    ___\\n___\\n\\n___\\n___"ID: \\(id)\") }\n}\n\nstruct User: Identifiable {\n    var id: Int\n}\n\nlet user = User(id: 42)\nuser.display()",
      "correctLines": [
        "protocol Identifiable {",
        "    var id: Int { get }",
        "}",
        "",
        "// extension と入力して約束を広げてね",
        "extension Identifiable {",
        "    func display() { print("ID: \\(id)") }",
        "}",
        "",
        "struct User: Identifiable {",
        "    var id: Int",
        "}",
        "",
        "let user = User(id: 42)",
        "user.display()"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "extension でプロトコルを拡張します。",
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
        "keywords": ["extension", "protocol", "struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ID: 42\n"
        }
      ]
    },
    {
      "title": "ジェネリック関数",
      "description": "型パラメータを使った関数を作りましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 型を後から指定\n\n**ジェネリクス** で、型に依存しない汎用的なコードが書けます。\n\n```swift\nfunc swap<T>(_ a: inout T, _ b: inout T) {\n    let temp = a\n    a = b\n    b = temp\n}\n```"
        },
        {
          "title": "型推論",
          "image": "/illustrations/3d/robot.png",
          "content": "# 呼び出し時に型が決まる\n\n```swift\nvar x = 1, y = 2\nswap(&x, &y)  // T は Int と推論\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func first<T>(_ array: [T]) -> T? {\n    return array.first\n}\n\nlet nums = [10, 20, 30]\nprint(first(nums) ?? 0)",
      "holeyCode": "___",
      "correctLines": [
        ""func first<T>(_ array: [T"
      ]) -> T? {",
        "    return array.first",
        "}",
        "",
        "let nums = [10, 20, 30]",
        "print(first(nums) ?? 0)"
      ],
      "lineHints": [
        "<T> で型パラメータを定義します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "symbols": ["<", ">"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "where 制約",
      "description": "型パラメータに制約を設けましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "where 制約",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型の条件を指定\n\n**where** で型パラメータに制約を追加できます。\n\n```swift\nfunc compare<T>(_ a: T, _ b: T) -> Bool where T: Comparable {\n    return a < b\n}\n```"
        },
        {
          "title": "プロトコル準拠",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 型がプロトコルに準拠することを要求\n\n```swift\nfunc print<T: CustomStringConvertible>(_ item: T) {\n    print(item.description)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {\n    return a > b ? a : b\n}\n\nprint(maximum(5, 3))",
      "holeyCode": "___\n    ___\n___\n\n___",
      "correctLines": [
        
        
        "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {",
        "    return a > b ? a : b",
        "}",
        "",
        "print(maximum(5, 3))"
      ],
      "lineHints": [
        "Comparable で比較可能な型に制限します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "protocols": ["Comparable", "Equatable", "Hashable"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "Codable でJSON変換",
      "description": "構造体とJSONを相互変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Codable とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# エンコード/デコード\n\n**Codable** に準拠すると、JSONとの変換が簡単です。\n\n```swift\nstruct User: Codable {\n    var name: String\n    var age: Int\n}\n```"
        },
        {
          "title": "JSONEncoder/Decoder",
          "image": "/illustrations/3d/robot.png",
          "content": "# 変換方法\n\n```swift\nlet encoder = JSONEncoder()\nlet data = try encoder.encode(user)\n\nlet decoder = JSONDecoder()\nlet user = try decoder.decode(User.self, from: data)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import Foundation\n\nstruct Item: Codable {\n    var name: String\n}\n\nlet item = Item(name: \"Apple\")\nlet encoder = JSONEncoder()\nif let data = try? encoder.encode(item),\n   let json = String(data: data, encoding: .utf8) {\n    print(json)\n}",
      "holeyCode": "___\\n\\n// 変数 Codable を使いましょう\\n___\\n    ___\\n___\\n\\n___\\n___\\n___\\n   ___\\n    ___\\n___"Apple\")\nlet encoder = JSONEncoder()\nif let data = try? encoder.encode(item),\n   let json = String(data: data, encoding: .utf8) {\n    print(json)\n}",
      "correctLines": [
        "import Foundation",
        "",
        "// 変数 Codable を使いましょう",
        "struct Item: Codable {",
        "    var name: String",
        "}",
        "",
        "let item = Item(name: "Apple")",
        "let encoder = JSONEncoder()",
        "if let data = try? encoder.encode(item),",
        "   let json = String(data: data, encoding: .utf8) {",
        "    print(json)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "Codable でJSON変換可能にします。",
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
        "protocols": ["Codable", "Encodable", "Decodable"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "{\"name\":\"Apple\"}\n"
        }
      ]
    },
    {
      "title": "lazy プロパティ",
      "description": "遅延初期化されるプロパティを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "lazy とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 遅延初期化\n\n**lazy** プロパティは、最初にアクセスされたときに初期化されます。\n\n```swift\nclass DataManager {\n    lazy var data: [Int] = {\n        // 重い処理\n        return loadData()\n    }()\n}\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 初期化コストが高い場合\n\n- ファイル読み込み\n- ネットワークリクエスト\n- 計算コストの高い処理"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Calculator {\n    lazy var result: Int = {\n        print(\"Computing...\")\n        return 100\n    }()\n}\n\nlet calc = Calculator()\nprint(calc.result)",
      "holeyCode": "___\\n    // lazy と入力して、のんびり準備しましょう\\n    ___\\n        ___\\n        ___\\n    ___\\n___\\n\\n___\\n___"Computing...\")\n        return 100\n    }()\n}\n\nlet calc = Calculator()\nprint(calc.result)",
      "correctLines": [
        "class Calculator {",
        "    // lazy と入力して、のんびり準備しましょう",
        "    lazy var result: Int = {",
        "        print("Computing...")",
        "        return 100",
        "    }()",
        "}",
        "",
        "let calc = Calculator()",
        "print(calc.result)"
      ],
      "lineHints": [
        null,
        "lazy で遅延初期化します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["lazy", "static", "computed"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Computing...\n100\n"
        }
      ]
    },
    {
      "title": "defer 文",
      "description": "スコープ終了時に実行される処理を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "defer とは？",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# スコープ終了時に実行\n\n**defer** ブロックは、スコープを抜けるときに実行されます。\n\n```swift\nfunc process() {\n    defer { print(\"Cleanup\") }\n    print(\"Processing\")\n}\n// Processing\n// Cleanup\n```"
        },
        {
          "title": "リソース解放",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルのクローズなど\n\n```swift\nfunc readFile() throws {\n    let file = openFile()\n    defer { file.close() }\n    // ファイル処理\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func test() {\n    defer { print(\"end\") }\n    print(\"start\")\n}\n\ntest()",
      "holeyCode": "___\\n    ___\\n    ___\\n___\\n\\n___"end\") }\n    print(\"start\")\n}\n\ntest()",
      "correctLines": [
        "func test() {",
        "    defer { print("end") }",
        "    print("start")",
        "}",
        "",
        "test()"
      ],
      "lineHints": [
        null,
        "defer でスコープ終了時の処理を登録します。",
        null,
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
      "title": "guard 文",
      "description": "早期リターンで可読性を高めましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "guard とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 早期リターン\n\n**guard** は、条件が満たされない場合に早期リターンします。\n\n```swift\nfunc process(_ value: Int?) {\n    guard let v = value else {\n        print(\"No value\")\n        return\n    }\n    print(v)\n}\n```"
        },
        {
          "title": "if let との違い",
          "image": "/illustrations/3d/if.png",
          "content": "# スコープが異なる\n\n```swift\n// guard: アンラップした値はスコープ全体で使える\nguard let x = opt else { return }\nprint(x)  // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func check(_ num: Int?) {\n    guard let n = num else {\n        print(\"nil\")\n        return\n    }\n    print(n * 2)\n}\n\ncheck(5)",
      "holeyCode": "___\\n    ___\\n        ___\\n        ___\\n    ___\\n    ___\\n___\\n\\n___"nil\")\n        return\n    }\n    print(n * 2)\n}\n\ncheck(5)",
      "correctLines": [
        "func check(_ num: Int?) {",
        "    guard let n = num else {",
        "        print("nil")",
        "        return",
        "    }",
        "    print(n * 2)",
        "}",
        "",
        "check(5)"
      ],
      "lineHints": [
        null,
        "guard で早期リターンします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["guard", "if", "unless"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "associatedtype",
      "description": "プロトコルに関連型を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "associatedtype とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# プロトコルの型パラメータ\n\n**associatedtype** で、プロトコルに関連型を定義できます。\n\n```swift\nprotocol Container {\n    associatedtype Item\n    func add(_ item: Item)\n}\n```"
        },
        {
          "title": "準拠する型で具体化",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を具体的に指定\n\n```swift\nstruct IntBox: Container {\n    typealias Item = Int\n    func add(_ item: Int) { }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Stack {\n    associatedtype Element\n    mutating func push(_ item: Element)\n}\n\nstruct IntStack: Stack {\n    var items: [Int] = []\n    mutating func push(_ item: Int) {\n        items.append(item)\n    }\n}\n\nvar stack = IntStack()\nstack.push(10)\nprint(stack.items)",
      "holeyCode": "___",
      "correctLines": [
        ""protocol Stack {",\n        "    associatedtype Element",\n        "    mutating func push(_ item: Element)",\n        "}",\n        "",\n        "struct IntStack: Stack {",\n        "    var items: [Int"
      ] = []",
        "    mutating func push(_ item: Int) {",
        "        items.append(item)",
        "    }",
        "}",
        "",
        "var stack = IntStack()",
        "stack.push(10)",
        "print(stack.items)"
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
        "keywords": ["associatedtype", "typealias", "type"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[10]\n"
        }
      ]
    },
    {
      "title": "some キーワード",
      "description": "不透明な戻り値型を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "some とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 不透明な戻り値型\n\n**some** で、具体的な型を隠して戻り値を返せます。\n\n```swift\nfunc makeSequence() -> some Sequence {\n    return [1, 2, 3]\n}\n```"
        },
        {
          "title": "SwiftUI で多用",
          "image": "/illustrations/3d/if.png",
          "content": "# View プロトコル\n\n```swift\nvar body: some View {\n    Text(\"Hello\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func makeCollection() -> some Collection {\n    return [1, 2, 3]\n}\n\nlet c = makeCollection()\nprint(c.count)",
      "holeyCode": "___\\n___\\n___",
      "correctLines": [
        ""func makeCollection() -> some Collection {",\n        "    return [1",
        "2",
        "3"
      ]",
        "}",
        "",
        "let c = makeCollection()",
        "print(c.count)"
      ],
      "lineHints": [
        "some で不透明な型を返します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["some", "any", "opaque"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
        }
      ]
    }
  ]
}
