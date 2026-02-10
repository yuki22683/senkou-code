export const swift4Data = {
  "language": "swift",
  "lessonId": "swift-4",
  "lessonTitle": "Swift IV - プロトコルとジェネリクス",
  "lessonDescription": "Swiftのプロトコルとジェネリクスを学びます。抽象化と型安全なコードを書くスキルを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "プロトコル",
      "content": "**プロトコル**はメソッドの約束事です。\\n\\n```swift\\nprotocol Speakable {\\n    func speak() -> String\\n}\\n```\\n\\n準拠する型はこのメソッドを実装する必要があります。"
    },
    {
      "title": "プロトコル拡張",
      "content": "プロトコルに**デフォルト実装**を追加できます。\\n\\n```swift\\nextension Speakable {\\n    func greet() {\\n        print(\\\"Hello, \\\" + speak())\\n    }\\n}\\n```"
    },
    {
      "title": "ジェネリクス",
      "content": "**ジェネリクス**で型を抽象化できます。\\n\\n```swift\\nfunc swap<T>(_ a: inout T, _ b: inout T) {\\n    let temp = a\\n    a = b\\n    b = temp\\n}\\n```\\n\\n`<T>` でジェネリック型を定義します。"
    },
    {
      "title": "型制約",
      "content": "ジェネリクスに**制約**をつけられます。\\n\\n```swift\\nfunc compare<T: Comparable>(_ a: T, _ b: T) -> Bool {\\n    return a < b\\n}\\n```\\n\\n`T: Comparable` はComparableに準拠する型のみ受け付けます。"
    },
    {
      "title": "Associated Type",
      "content": "プロトコルで型を抽象化できます。\\n\\n```swift\\nprotocol Container {\\n    associatedtype Item\\n    func add(_ item: Item)\\n}\\n```"
    },
    {
      "title": "where句",
      "content": "`where` でより細かい制約をつけられます。\\n\\n```swift\\nfunc allEqual<C: Collection>(_ c: C) -> Bool\\n    where C.Element: Equatable {\\n    // ...\\n}\\n```"
    }
  ],
  "exercises": [
    {
      "title": "プロトコルの定義",
      "correctCode": "// protocolでプロトコルを定義\\nprotocol Speakable {\\n    // speakメソッドを宣言\\n    func speak() -> String\\n}\\n\\n// Speakableに準拠\\nstruct Dog: Speakable {\\n    // speakメソッドを実装\\n    func speak() -> String {\\n        // Woof!を返す\\n        return \"ワン！\"\\n    }\\n}\\n\\n// インスタンスを作成\\nlet dog = Dog()\\n// speakを呼び出し\\nprint(dog.speak())",
      "holeyCode": "// protocolでプロトコルを定義\\nprotocol ___ {\\n    // speakメソッドを宣言\\n    func ___() -> ___\\n___\\n\\n// Speakableに準拠\\nstruct ___: ___ {\\n    // speakメソッドを実装\\n    func ___() -> ___ {\\n        // Woof!を返す\\n        return \\\"___\\\"\\n    ___\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___()\\n// speakを呼び出し\\n___(___.___()",
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
          "protocolキーワードで「話す」能力を表すプロトコルを定義します。",
          null,
          "戻り値がString型のメソッドを宣言します。",
          "プロトコル定義のブロックを閉じます。",
          null,
          null,
          "Speakableプロトコルに準拠した構造体を定義します。",
          null,
          "プロトコルで宣言されたメソッドを実装します。",
          null,
          "犬の鳴き声を文字列として返します。",
          "メソッドのブロックを閉じます。",
          "構造体定義のブロックを閉じます。",
          null,
          null,
          "インスタンスを作成して定数に代入します。",
          null,
          "インスタンスのメソッドを呼び出して結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "protocol",
            "struct",
            "func",
            "return",
            "let"
          ],
          "others": ["speak", "Speakable", "String", "Dog", "dog", "ワン！", "print", "()", "}", "{"]
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
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // idプロパティを宣言\\n    var ___: ___ { ___ }\\n___\\n\\n// extensionでプロトコルを拡張\\nextension ___ {\\n    // デフォルト実装\\n    func ___() { ___(\\\"___: \\\\(___)\\\") }\\n___\\n\\n// Identifiableに準拠\\nstruct ___: ___ {\\n    // idプロパティ\\n    var ___: ___\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___(___: ___)\\n// displayを呼び出し\\n___.___(",
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
          "識別可能であることを表すプロトコルを定義します。",
          null,
          "読み取り専用の整数型プロパティを宣言します。",
          "プロトコル定義のブロックを閉じます。",
          null,
          null,
          "既存のプロトコルに機能を追加する拡張を定義します。",
          null,
          "ID情報を表示するデフォルト実装を提供します。",
          "拡張定義のブロックを閉じます。",
          null,
          null,
          "プロトコルに準拠した構造体を定義します。",
          null,
          "プロトコルで要求されたプロパティを実装します。",
          "構造体定義のブロックを閉じます。",
          null,
          null,
          "初期値を持つインスタンスを作成します。",
          null,
          "拡張で追加されたメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "extension",
            "protocol",
            "struct",
            "var",
            "func",
            "let"
          ],
          "others": ["Identifiable", "Int", "display", "id", "42", "get", "}", "User", "user", "print", "ID", "()", "{"]
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
      "holeyCode": "// <T>で型パラメータを定義\\nfunc ___<___>(_ ___: [___]) -> ___? {\\n    // array.firstを返す\\n    return ___.___ \\n___\\n\\n// numsに[10, 20, 30]を代入\\nlet ___ = [___, ___, ___]\\n// first(nums) ?? 0をprintで出力\\n___(___(___)  ?? ___)",
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
          "任意の型の配列を受け取れるジェネリック関数を定義します。",
          null,
          "配列の最初の要素を返します。",
          "関数定義のブロックを閉じます。",
          null,
          null,
          "整数配列を作成します。",
          null,
          "関数を呼び出し、nilの場合は0を代わりに出力します。"
        ],
        "candidates": {
          "keywords": [
            "func",
            "return",
            "let"
          ],
          "others": ["first", "T", "array", "nums", "10", "20", "30", "0", "print", "}", "??"]
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
      "correctCode": "// Comparableで比較可能な型に制限\\nfunc maximum<T: Comparable>(_ a: T, _ b: T) -> T {\\n    // 大きい方を返す\\n    return a > b ? a : b\\n}\\n\\n// maximum関数を呼び出し（第1引数に5, 第2引数に3）\\nprint(maximum(5, 3))",
      "holeyCode": "// Comparableで比較可能な型に制限\\nfunc ___<___: ___>(_ ___: ___, _ ___: ___) -> ___ {\\n    // 大きい方を返す\\n    return ___ > ___ ? ___ : ___\\n___\\n\\n// maximum関数を呼び出し（第1引数に5, 第2引数に3）\\n___(___(___, ___))",
      "correctLines": [
          "// Comparableで比較可能な型に制限",
          "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {",
          "    // 大きい方を返す",
          "    return a > b ? a : b",
          "}",
          "",
          "// maximum関数を呼び出し（第1引数に5, 第2引数に3）",
          "print(maximum(5, 3))"
        ],
      "lineHints": [
          null,
          "比較可能な型に制約されたジェネリック関数を定義します。",
          null,
          "三項演算子で大きい方の値を返します。",
          "関数定義のブロックを閉じます。",
          null,
          null,
          "2つの値を比較して大きい方を出力します。"
        ],
        "candidates": {
          "keywords": [
            "func",
            "return"
          ],
          "protocols": [
            "Comparable",
            "Equatable",
            "Hashable"
          ],
          "others": ["maximum", "T", "a", "b", "5", "3", "print", "}", "?", ":"]
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
      "holeyCode": "// Foundationをインポート\\nimport ___\\n\\n// CodableでJSON変換可能に\\nstruct ___: ___ {\\n    // nameプロパティ\\n    var ___: ___\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___(___: \\\"___\\\")\\n// エンコーダを作成\\nlet ___ = ___()\\n// JSONに変換\\nif let ___ = try? ___.___(___ ),\\n   let ___ = ___(___: ___, ___: .___) {\\n    // JSONを出力\\n    ___(___) \\n___",
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
          "JSON変換に必要なフレームワークをインポートします。",
          null,
          null,
          "JSON変換可能なプロトコルに準拠した構造体を定義します。",
          null,
          "文字列型のプロパティを定義します。",
          "構造体定義のブロックを閉じます。",
          null,
          null,
          "データ構造のインスタンスを作成します。",
          null,
          "JSON変換を行うエンコーダを作成します。",
          null,
          "構造体をJSON形式のデータに変換します。",
          "バイナリデータを文字列に変換します。",
          null,
          "変換されたJSON文字列を出力します。",
          "if文のブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "import",
            "struct",
            "var",
            "let",
            "if",
            "try?"
          ],
          "protocols": [
            "Codable",
            "Encodable",
            "Decodable"
          ],
          "others": ["Foundation", "Item", "name", "String", "りんご", "item", "encoder", "JSONEncoder", "data", "encode", "json", "encoding", "utf8", "print", "}", "item),"]
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
      "correctCode": "// Calculatorクラスを定義\\nclass Calculator {\\n    // lazyで遅延初期化\\n    lazy var result: Int = {\\n        // 計算中と出力\\n        print(\"計算中...\")\\n        // 100を返す\\n        return 100\\n    }()\\n}\\n\\n// インスタンスを作成\\nlet calc = Calculator()\\n// resultを出力\\nprint(calc.result)",
      "holeyCode": "// Calculatorクラスを定義\\nclass ___ {\\n    // lazyで遅延初期化\\n    lazy var ___: ___ = {\\n        // 計算中と出力\\n        ___(\\\"___\\\")\\n        // 100を返す\\n        return ___\\n    ___()\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___()\\n// resultを出力\\n___(___.___ )",
      "correctLines": [
          "// Calculatorクラスを定義",
          "class Calculator {",
          "    // lazyで遅延初期化",
          "    lazy var result: Int = {",
          "        // 計算中と出力",
          "        print(\"計算中...\")",
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
          "計算機能を持つクラスを定義します。",
          null,
          "初回アクセス時に初期化される遅延プロパティを定義します。",
          null,
          "計算処理中であることを出力します。",
          null,
          "計算結果の値を返します。",
          "クロージャを即時実行して値を取得します。",
          "クラス定義のブロックを閉じます。",
          null,
          null,
          "計算機のインスタンスを作成します。",
          null,
          "遅延プロパティにアクセスして値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "lazy",
            "var",
            "class",
            "return",
            "let"
          ],
          "others": ["Calculator", "result", "Int", "print", "計算中...", "100", "}", "calc", "()", "{", "result)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "計算中...\\n100\\n"
          }
        ]
      },
    {
      "title": "defer 文",
      "correctCode": "// test関数を定義\\nfunc test() {\\n    // deferでスコープ終了時に実行\\n    defer { print(\"end\") }\\n    // startと出力\\n    print(\"start\")\\n}\\n\\n// 関数を呼び出し\\ntest()",
      "holeyCode": "// test関数を定義\\nfunc ___() {\\n    // deferでスコープ終了時に実行\\n    defer { ___(\\\"___\\\") }\\n    // startと出力\\n    ___(\\\"___\\\")\\n___\\n\\n// 関数を呼び出し\\n___()",
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
          "テスト用の関数を定義します。",
          null,
          "スコープ終了時に実行される処理を登録します。",
          null,
          "処理の開始を示すメッセージを出力します。",
          "関数定義のブロックを閉じます。",
          null,
          null,
          "定義した関数を呼び出して実行します。"
        ],
        "candidates": {
          "keywords": [
            "func",
            "defer"
          ],
          "others": ["test", "print", "end", "start", "}", "{"]
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
      "holeyCode": "// check関数を定義\\nfunc ___(___  ___: ___?) {\\n    // guardで早期リターン\\n    guard let ___ = ___ else {\\n        // nilと出力\\n        ___(\\\"___\\\")\\n        // 早期リターン\\n        ___\\n    ___\\n    // n * 2を出力\\n    ___(___ * ___)\\n___\\n\\n// 関数を呼び出し\\n___(___)",
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
          "Optional型の引数を受け取る関数を定義します。",
          null,
          "nilでない場合のみ処理を続行する早期リターンを定義します。",
          null,
          "nilの場合のエラーメッセージを出力します。",
          null,
          "関数を早期に終了します。",
          "elseブロックを閉じます。",
          null,
          "アンラップした値を2倍して出力します。",
          "関数定義のブロックを閉じます。",
          null,
          null,
          "値を渡して関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "func",
            "guard",
            "let",
            "else",
            "return"
          ],
          "others": ["check", "_", "num", "Int", "n", "print", "nil", "2", "5", "}", "*", "um"]
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
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // associatedtypeで関連型を定義\\n    associatedtype ___\\n    // pushメソッドを宣言\\n    mutating func ___(___ ___: ___)\\n___\\n\\n// Stackに準拠\\nstruct ___: ___ {\\n    // items配列\\n    var ___: [___] = []\\n    // pushメソッドを実装\\n    mutating func ___(___ ___: ___) {\\n        // 要素を追加\\n        ___.___(___)\\n    ___\\n___\\n\\n// インスタンスを作成\\nvar ___ = ___()\\n// 要素を追加\\n___.___(___) \\n// itemsを出力\\n___(___.___ )",
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
          "スタック操作を抽象化するプロトコルを定義します。",
          null,
          "スタックが保持する要素の型を表す関連型を定義します。",
          null,
          "要素を追加するmutatingメソッドを宣言します。",
          "プロトコル定義のブロックを閉じます。",
          null,
          null,
          "整数型のスタックを実装する構造体を定義します。",
          null,
          "整数配列を空で初期化します。",
          null,
          "プロトコルで宣言されたメソッドを実装します。",
          null,
          "配列に新しい要素を追加します。",
          "メソッド定義のブロックを閉じます。",
          "構造体定義のブロックを閉じます。",
          null,
          null,
          "スタックのインスタンスを変数に代入します。",
          null,
          "スタックに要素を追加します。",
          null,
          "スタックの中身を出力します。"
        ],
        "candidates": {
          "keywords": [
            "protocol",
            "associatedtype",
            "mutating",
            "func",
            "struct",
            "var",
            "let"
          ],
          "others": ["Stack", "Element", "push", "_", "item", "IntStack", "items", "Int", "append", "10", "stack", "print", "}", "[]", "items)"]
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
      "holeyCode": "// someで不透明な型を返す\\nfunc ___() -> some ___ {\\n    // 配列を返す\\n    return [___, ___, ___]\\n___\\n\\n// 関数を呼び出し\\nlet ___ = ___()\\n// 要素数を出力\\n___(___.___)",
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
          "具体的な型を隠して不透明な型を返す関数を定義します。",
          null,
          "整数の配列を返します。",
          "関数定義のブロックを閉じます。",
          null,
          null,
          "関数を呼び出して結果を定数に代入します。",
          null,
          "コレクションの要素数を出力します。"
        ],
        "candidates": {
          "keywords": [
            "func",
            "some",
            "return",
            "let"
          ],
          "others": ["makeCollection", "Collection", "1", "2", "3", "c", "print", "count", "}"]
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
