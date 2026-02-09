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
      "correctCode": "// protocolでプロトコルを定義\\nprotocol Speakable {\\n    // speakメソッドを宣言\\n    func speak() -> String\\n}\\n\\n// Speakableに準拠\\nstruct Dog: Speakable {\\n    // speakメソッドを実装\\n    func speak() -> String {\\n        // Woof!を返す\\n        return \"ワン！\"\\n    }\\n}\\n\\n// インスタンスを作成\\nlet dog = Dog()\\n// speakを呼び出し\\nprint(dog.speak())",
      "holeyCode": "// protocolでプロトコルを定義\\nprotocol ___ {\\n    // speakメソッドを宣言\\n    func ___ () -> String\\n___\\n___\\n// Speakableに準拠\\nstruct Dog: ___ {\\n    // speakメソッドを実装\\n    func ___ () -> String {\\n        // Woof!を返す\\n        ___ \"___\"\\n    ___\\n___\\n___\\n// インスタンスを作成\\nlet ___ = Dog()\\n// speakを呼び出し\\nprint(dog.___())",
      "correctLines": [
          "// protocolでプロトコルを定義",
          "protocol Speakable {",
          "    // speakメソッドを宣言",
          "    func speak() -> String",
          "}",
          "",
          "// Speakableに準拠",
          "struct Dog: Speakable {",
          "    // speakメソッドを実装",
          "    func speak() -> String {",
          "        // Woof!を返す",
          "        return \"ワン！\"",
          "    }",
          "}",
          "",
          "// インスタンスを作成",
          "let dog = Dog()",
          "// speakを呼び出し",
          "print(dog.speak())"
        ],
      "lineHints": [
          null,
          "protocol でプロトコルを定義します。",
          null,
          "関数（speak）を定義します。",
          "ここを正しく入力してください。",
          null,
          null,
          "構造体（Dog）を定義します。",
          null,
          "関数（speak）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "protocol",
            "struct",
            "class"
          ],
          "others": ["speak", "Speakable", "String", "Woof!", "Dog", "speak()", "}", "dog", "ワン！", "return"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ワン！\\n"
          }
        ]
      },
    {
      "title": "プロトコル拡張",
      "correctCode": "// プロトコルを定義\\nprotocol Identifiable {\\n    // idプロパティを宣言\\n    var id: Int { get }\\n}\\n\\n// extensionでプロトコルを拡張\\nextension Identifiable {\\n    // デフォルト実装\\n    func display() { print(\"ID: \\(id)\") }\\n}\\n\\n// Identifiableに準拠\\nstruct User: Identifiable {\\n    // idプロパティ\\n    var id: Int\\n}\\n\\n// インスタンスを作成\\nlet user = User(id: 42)\\n// displayを呼び出し\\nuser.display()",
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // idプロパティを宣言\\n    var id: Int { ___ }\\n___\\n___\\n// extensionでプロトコルを拡張\\nextension ___ {\\n    // デフォルト実装\\n    func ___ () { print(\"ID: \\\\(id)\") }\\n___\\n___\\n// Identifiableに準拠\\nstruct User: ___ {\\n    // idプロパティ\\n    var id: ___\\n___\\n___\\n// インスタンスを作成\\nlet ___ = User(id: 42)\\n// displayを呼び出し\\nuser.___()",
      "correctLines": [
          "// プロトコルを定義",
          "protocol Identifiable {",
          "    // idプロパティを宣言",
          "    var id: Int { get }",
          "}",
          "",
          "// extensionでプロトコルを拡張",
          "extension Identifiable {",
          "    // デフォルト実装",
          "    func display() { print(\"ID: \\(id)\") }",
          "}",
          "",
          "// Identifiableに準拠",
          "struct User: Identifiable {",
          "    // idプロパティ",
          "    var id: Int",
          "}",
          "",
          "// インスタンスを作成",
          "let user = User(id: 42)",
          "// displayを呼び出し",
          "user.display()"
        ],
      "lineHints": [
          null,
          "extension でプロトコルを拡張します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "構造体（User）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extension",
            "protocol",
            "struct"
          ],
          "others": ["Identifiable", "Int", "display", "id", "42", "get", "}", "display()", "user"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ID: 42\\n"
          }
        ]
      },
    {
      "title": "ジェネリック関数",
      "correctCode": "// <T>で型パラメータを定義\\nfunc first<T>(_ array: [T]) -> T? {\\n    // array.firstを返す\\n    return array.first\\n}\\n\\n// numsに[10, 20, 30]を代入\\nlet nums = [10, 20, 30]\\n// first(nums) ?? 0をprintで出力\\nprint(first(nums) ?? 0)",
      "holeyCode": "// <T>で型パラメータを定義\\nfunc first<___>(_ array: [T]) -> T? {\\n    // array.firstを返す\\n    return array.___\\n___\\n___\\n// numsに[10, 20, 30]を代入\\nlet ___ = [10, 20, 30]\\n// first(nums) ?? 0をprintで出力\\nprint(first(nums) ?? ___)",
      "correctLines": [
          "// <T>で型パラメータを定義",
          "func first<T>(_ array: [T]) -> T? {",
          "    // array.firstを返す",
          "    return array.first",
          "}",
          "",
          "// numsに[10, 20, 30]を代入",
          "let nums = [10, 20, 30]",
          "// first(nums) ?? 0をprintで出力",
          "print(first(nums) ?? 0)"
        ],
      "lineHints": [
          null,
          "<T> で型パラメータを定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "symbols": [
            "<",
            ">"
          ],
          "others": ["first", "10", "T", "}", "nums", "0", "first", "}", "", "first", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "where 制約",
      "correctCode": "// Comparableで比較可能な型に制限\\nfunc maximum<T: Comparable>(_ a: T, _ b: T) -> T {\\n    // 大きい方を返す\\n    return a > b ? a : b\\n}\\n\\n// maximum(5, 3)を出力\\nprint(maximum(5, 3))",
      "holeyCode": "// Comparableで比較可能な型に制限\\nfunc maximum<___: Comparable>(_ a: T, _ b: T) -> T {\\n    // 大きい方を返す\\n    return a > ___ ? a : b\\n___\\n___\\n// maximum(5, 3)を出力\\nprint(maximum(___, 3))",
      "correctLines": [
          "// Comparableで比較可能な型に制限",
          "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {",
          "    // 大きい方を返す",
          "    return a > b ? a : b",
          "}",
          "",
          "// maximum(5, 3)を出力",
          "print(maximum(5, 3))"
        ],
      "lineHints": [
          null,
          "Comparable で比較可能な型に制限します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "protocols": [
            "Comparable",
            "Equatable",
            "Hashable"
          ],
          "others": [">", "maximum", "T", "b", "}", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "Codable でJSON変換",
      "correctCode": "// Foundationをインポート\\nimport Foundation\\n\\n// CodableでJSON変換可能に\\nstruct Item: Codable {\\n    // nameプロパティ\\n    var name: String\\n}\\n\\n// インスタンスを作成\\nlet item = Item(name: \"りんご\")\\n// エンコーダを作成\\nlet encoder = JSONEncoder()\\n// JSONに変換\\nif let data = try? encoder.encode(item),\\n   let json = String(data: data, encoding: .utf8) {\\n    // JSONを出力\\n    print(json)\\n}",
      "holeyCode": "// Foundationをインポート\\nimport ___\\n___\\n// CodableでJSON変換可能に\\nstruct Item: ___ {\\n    // nameプロパティ\\n    var name: ___\\n___\\n___\\n// インスタンスを作成\\nlet ___ = Item(name: \"りんご\")\\n// エンコーダを作成\\nlet ___ = JSONEncoder()\\n// JSONに変換\\nif let data = try? encoder.encode(___),\\n   let ___ = String(data: data, encoding: .utf8) {\\n    // JSONを出力\\n    print(___)\\n___",
      "correctLines": [
          "// Foundationをインポート",
          "import Foundation",
          "",
          "// CodableでJSON変換可能に",
          "struct Item: Codable {",
          "    // nameプロパティ",
          "    var name: String",
          "}",
          "",
          "// インスタンスを作成",
          "let item = Item(name: \"りんご\")",
          "// エンコーダを作成",
          "let encoder = JSONEncoder()",
          "// JSONに変換",
          "if let data = try? encoder.encode(item),",
          "   let json = String(data: data, encoding: .utf8) {",
          "    // JSONを出力",
          "    print(json)",
          "}"
        ],
      "lineHints": [
          null,
          "構造体（Item）を定義します。",
          null,
          null,
          "構造体（Item）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "protocols": [
            "Codable",
            "Encodable",
            "Decodable"
          ],
          "others": ["Foundation", "name", "りんご", "JSONEncoder", "item", "json", "String", "}", "encoder"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{\"name\":\"りんご\"}\\n"
          }
        ]
      },
    {
      "title": "lazy プロパティ",
      "correctCode": "// Calculatorクラスを定義\\nclass Calculator {\\n    // lazyで遅延初期化\\n    lazy var result: Int = {\\n        // 計算中と出力\\n        print(\"Computing...\")\\n        // 100を返す\\n        return 100\\n    }()\\n}\\n\\n// インスタンスを作成\\nlet calc = Calculator()\\n// resultを出力\\nprint(calc.result)",
      "holeyCode": "// Calculatorクラスを定義\\nclass ___ {\\n    // lazyで遅延初期化\\n    lazy var result: ___ = {\\n        // 計算中と出力\\n        ___(\"Computing...\")\\n        // 100を返す\\n        return ___\\n    ___()\\n___\\n___\\n// インスタンスを作成\\nlet ___ = Calculator()\\n// resultを出力\\nprint(calc.___)",
      "correctLines": [
          "// Calculatorクラスを定義",
          "class Calculator {",
          "    // lazyで遅延初期化",
          "    lazy var result: Int = {",
          "        // 計算中と出力",
          "        print(\"Computing...\")",
          "        // 100を返す",
          "        return 100",
          "    }()",
          "}",
          "",
          "// インスタンスを作成",
          "let calc = Calculator()",
          "// resultを出力",
          "print(calc.result)"
        ],
      "lineHints": [
          null,
          "lazy で遅延初期化します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "数値を呼び出し元に返す（戻り値）。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "lazy",
            "static",
            "computed"
          ],
          "others": ["Calculator", "Computing...", "100", "result", "Int", "print", "}", "calc"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Computing...\\n100\\n"
          }
        ]
      },
    {
      "title": "defer 文",
      "correctCode": "// test関数を定義\\nfunc test() {\\n    // deferでスコープ終了時に実行\\n    defer { print(\"end\") }\\n    // startと出力\\n    print(\"start\")\\n}\\n\\n// 関数を呼び出し\\ntest()",
      "holeyCode": "// test関数を定義\\nfunc ___ () {\\n    // deferでスコープ終了時に実行\\n    ___ { print(\"___\") }\\n    // startと出力\\n    ___(\"start\")\\n___\\n___\\n// 関数を呼び出し\\n___()",
      "correctLines": [
          "// test関数を定義",
          "func test() {",
          "    // deferでスコープ終了時に実行",
          "    defer { print(\"end\") }",
          "    // startと出力",
          "    print(\"start\")",
          "}",
          "",
          "// 関数を呼び出し",
          "test()"
        ],
      "lineHints": [
          null,
          "defer でスコープ終了時の処理を登録します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "関数（test）を呼び出して実行する。"
        ],
        "candidates": {
          "keywords": [
            "defer",
            "finally",
            "cleanup"
          ],
          "others": ["test", "start", "test()", "end", "print", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "start\\nend\\n"
          }
        ]
      },
    {
      "title": "guard 文",
      "correctCode": "// check関数を定義\\nfunc check(_ num: Int?) {\\n    // guardで早期リターン\\n    guard let n = num else {\\n        // nilと出力\\n        print(\"nil\")\\n        // 早期リターン\\n        return\\n    }\\n    // n * 2を出力\\n    print(n * 2)\\n}\\n\\n// 関数を呼び出し\\ncheck(5)",
      "holeyCode": "// check関数を定義\\nfunc ___ (_ num: Int?) {\\n    // guardで早期リターン\\n    guard let n = num ___ {\\n        // nilと出力\\n        ___(\"nil\")\\n        // 早期リターン\\n        ___\\n    ___\\n    // n * 2を出力\\n    print(n * ___)\\n___\\n___\\n// 関数を呼び出し\\ncheck(___)",
      "correctLines": [
          "// check関数を定義",
          "func check(_ num: Int?) {",
          "    // guardで早期リターン",
          "    guard let n = num else {",
          "        // nilと出力",
          "        print(\"nil\")",
          "        // 早期リターン",
          "        return",
          "    }",
          "    // n * 2を出力",
          "    print(n * 2)",
          "}",
          "",
          "// 関数を呼び出し",
          "check(5)"
        ],
      "lineHints": [
          null,
          "guard で早期リターンします。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "関数の実行を終了して呼び出し元に戻る。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "guard",
            "if",
            "unless"
          ],
          "others": ["check", "nil", "return", "*", "check(_", "else", "print", "}", "2", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "associatedtype",
      "correctCode": "// プロトコルを定義\\nprotocol Stack {\\n    // associatedtypeで関連型を定義\\n    associatedtype Element\\n    // pushメソッドを宣言\\n    mutating func push(_ item: Element)\\n}\\n\\n// Stackに準拠\\nstruct IntStack: Stack {\\n    // items配列\\n    var items: [Int] = []\\n    // pushメソッドを実装\\n    mutating func push(_ item: Int) {\\n        // 要素を追加\\n        items.append(item)\\n    }\\n}\\n\\n// インスタンスを作成\\nvar stack = IntStack()\\n// 要素を追加\\nstack.push(10)\\n// itemsを出力\\nprint(stack.items)",
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // associatedtypeで関連型を定義\\n    associatedtype ___\\n    // pushメソッドを宣言\\n    mutating func push(_ item: ___)\\n___\\n___\\n// Stackに準拠\\nstruct IntStack: ___ {\\n    // items配列\\n    var items: [___] = []\\n    // pushメソッドを実装\\n    mutating func push(_ item: ___) {\\n        // 要素を追加\\n        items.append(___)\\n    ___\\n___\\n___\\n// インスタンスを作成\\nvar ___ = IntStack()\\n// 要素を追加\\nstack.push(___)\\n// itemsを出力\\nprint(stack.___)",
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
          "var stack = IntStack()",
          "// 要素を追加",
          "stack.push(10)",
          "// itemsを出力",
          "print(stack.items)"
        ],
      "lineHints": [
          null,
          "associatedtype で関連型を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "構造体（IntStack）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
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
            "type"
          ],
          "others": ["Stack", "Element", "Int", "push", "append", "IntStack", "10", "items", "}", "item", "stack", "}", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[10]\\n"
          }
        ]
      },
    {
      "title": "some キーワード",
      "correctCode": "// someで不透明な型を返す\\nfunc makeCollection() -> some Collection {\\n    // 配列を返す\\n    return [1, 2, 3]\\n}\\n\\n// 関数を呼び出し\\nlet c = makeCollection()\\n// 要素数を出力\\nprint(c.count)",
      "holeyCode": "// someで不透明な型を返す\\nfunc ___ () -> some Collection {\\n    // 配列を返す\\n    return [___, 2, 3]\\n___\\n___\\n// 関数を呼び出し\\nlet ___ = makeCollection()\\n// 要素数を出力\\nprint(c.___)",
      "correctLines": [
          "// someで不透明な型を返す",
          "func makeCollection() -> some Collection {",
          "    // 配列を返す",
          "    return [1, 2, 3]",
          "}",
          "",
          "// 関数を呼び出し",
          "let c = makeCollection()",
          "// 要素数を出力",
          "print(c.count)"
        ],
      "lineHints": [
          null,
          "関数（makeCollection）を定義します。",
          null,
          "配列を複数の値で初期化する。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "some",
            "any",
            "opaque"
          ],
          "others": ["1", "makeCollection", "count", "makeCollection()", "}", "c", "}", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      }
  ]
}
