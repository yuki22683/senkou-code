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
      "description": "プロトコル（protocol）について学びます",
      "tutorialSlides": [
        {
          "title": "プロトコルとは？",
          "content": "# 「この機能を持ってね」という約束\\n\\n**プロトコル（protocol）** は、「この機能を持っていてね」という約束を定義する仕組みです。\\n\\n例えば「あいさつができる」というプロトコルがあれば、人も動物も「あいさつする」機能を持つことを約束します。\\n\\n設計図のような役割で、「何ができるか」だけを決めます。"
        },
        {
          "title": "プロトコルの作り方",
          "content": "# protocol で定義する\\n\\n```swift\\nprotocol Greetable {\\n    var name: String { get }  // 名前を持つ\\n    func greet() -> String    // あいさつできる\\n}\\n```\\n\\n`{ get }` は「読み取れる」という意味です。プロトコルでは中身は書かず、「名前だけ」宣言します。"
        },
        {
          "title": "プロトコルに準拠する",
          "content": "# : プロトコル名 で準拠を宣言\\n\\n```swift\\nstruct Person: Greetable {  // 準拠を宣言\\n    var name: String        // 名前を実装\\n    func greet() -> String {\\n        return \"Hello, \\(name)\"\\n    }\\n}\\n```\\n\\n「準拠」とは、約束を守ることです。プロトコルで宣言された機能を実際に作ります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n「話せる」プロトコルを作って、犬に準拠させましょう。\\n\\n1. `Speakable` プロトコルを作る\\n2. `speak()` という関数を宣言\\n3. `Dog` 構造体で準拠を実装\\n4. `speak()` で「Woof!」と返す"
        }
      ],
      "correctCode": "// protocolでプロトコルを定義\\nprotocol Speakable {\\n    // speakメソッドを宣言\\n    func speak() -> String\\n// ブロックを閉じる\\n}\\n\\n// Speakableに準拠\\nstruct Dog: Speakable {\\n    // speakメソッドを実装\\n    func speak() -> String {\\n        // Woof!を返す\\n        return \"ワン！\"\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}\\n\\n// インスタンスを作成\\nlet dog = Dog()\\n// speakを呼び出し\\nprint(dog.speak())",
      "holeyCode": "// protocolでプロトコルを定義\\nprotocol ___ {\\n    // speakメソッドを宣言\\n    func ___() -> ___\\n// ブロックを閉じる\\n___\\n\\n// Speakableに準拠\\nstruct ___: ___ {\\n    // speakメソッドを実装\\n    func ___() -> ___ {\\n        // Woof!を返す\\n        return \\\"___\\\"\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___()\\n// speakを呼び出し\\n___(___.___()",
      "correctLines": [
          "// protocolでプロトコルを定義",
          "protocol Speakable {",
          "    // speakメソッドを宣言",
          "    func speak() -> String",
          "// ブロックを閉じる",
          "}",
          "",
          "// Speakableに準拠",
          "struct Dog: Speakable {",
          "    // speakメソッドを実装",
          "    func speak() -> String {",
          "        // Woof!を返す",
          "        return \\\"ワン！\\\"",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}",
          "",
          "// インスタンスを作成",
          "let dog = Dog()",
          "// speakを呼び出し",
          "print(dog.speak())"
        ],
      "lineHints": [
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
          null,
          "",
          null,
          ""
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
      "description": "extension（エクステンション）について学びます",
      "tutorialSlides": [
        {
          "title": "プロトコル拡張とは？",
          "content": "# 「デフォルト機能」を追加する\\n\\n**extension（エクステンション）** を使うと、プロトコルに「デフォルトの実装」を追加できます。\\n\\n「extension」は「拡張」という意味です。\\n\\n準拠する型が何も書かなくても、この機能が使えるようになります。"
        },
        {
          "title": "デフォルト実装の書き方",
          "content": "# extension プロトコル名 { }\\n\\n```swift\\nprotocol Describable {\\n    var description: String { get }\\n}\\n\\nextension Describable {\\n    var description: String { \"説明なし\" }  // デフォルト\\n}\\n```\\n\\nこれで、準拠する型が `description` を実装しなくても「説明なし」が使われます。"
        },
        {
          "title": "デフォルトを上書き（オーバーライド）",
          "content": "# 必要なら独自の実装を書ける\\n\\n```swift\\nstruct Item: Describable {\\n    var description: String { \"これはアイテムです\" }\\n}\\n```\\n\\nデフォルトが用意されていても、自分で書けば上書きできます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`Identifiable` プロトコルを作り、extensionでデフォルト機能を追加しましょう。\\n\\n1. `id` プロパティを持つプロトコルを作る\\n2. extensionで `display()` 関数を追加\\n3. `User` 構造体で準拠\\n4. デフォルトの `display()` を使う"
        }
      ],
      "correctCode": "// プロトコルを定義\\nprotocol Identifiable {\\n    // idプロパティを宣言\\n    var id: Int { get }\\n}\\n\\n// extensionでプロトコルを拡張\\nextension Identifiable {\\n    // デフォルト実装\\n    func display() { print(\"ID: \\(id)\") }\\n}\\n\\n// Identifiableに準拠\\nstruct User: Identifiable {\\n    // idプロパティ\\n    var id: Int\\n}\\n\\n// インスタンスを作成\\nlet user = User(id: 42)\\n// displayを呼び出し\\nuser.display()",
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // idプロパティを宣言\\n    var ___: ___ { ___ }\\n// ブロックを閉じる\\n___\\n\\n// extensionでプロトコルを拡張\\nextension ___ {\\n    // デフォルト実装\\n    func ___() { ___(\\\"___: \\\\(___)\\\") }\\n// ブロックを閉じる\\n___\\n\\n// Identifiableに準拠\\nstruct ___: ___ {\\n    // idプロパティ\\n    var ___: ___\\n// ブロックを閉じる\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___(___: ___)\\n// displayを呼び出し\\n___.___(",
      "correctLines": [
          "// プロトコルを定義",
          "protocol Identifiable {",
          "    // idプロパティを宣言",
          "    var id: Int { get }",
          "// ブロックを閉じる",
          "}",
          "",
          "// extensionでプロトコルを拡張",
          "extension Identifiable {",
          "    // デフォルト実装",
          "    func display() { print(\\\"ID: \\\\(id)\\\") }",
          "// ブロックを閉じる",
          "}",
          "",
          "// Identifiableに準拠",
          "struct User: Identifiable {",
          "    // idプロパティ",
          "    var id: Int",
          "// ブロックを閉じる",
          "}",
          "",
          "// インスタンスを作成",
          "let user = User(id: 42)",
          "// displayを呼び出し",
          "user.display()"
        ],
      "lineHints": [
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
          ""
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "content": "# 「どんな型でも使える」コード\\n\\n**ジェネリクス（generics）** は、型を「後から決められる」仕組みです。\\n\\n「generic」は「汎用的な」という意味です。\\n\\n例えば「箱に入れて返す」関数を作るとき、中身がリンゴでもミカンでも同じコードで対応できます。"
        },
        {
          "title": "型パラメータ <T>",
          "content": "# <T> で型を仮置き\\n\\n```swift\\nfunc first<T>(_ array: [T]) -> T? {\\n    return array.first\\n}\\n```\\n\\n`<T>` は「Tという型を後で決めます」という意味。実際に使うときに、IntでもStringでも使えます。\\n\\n`T` は「Type（型）」の頭文字で、よく使われる名前です。"
        },
        {
          "title": "型推論で自動決定",
          "content": "# 使うときに型が決まる\\n\\n```swift\\nlet nums = [10, 20, 30]\\nprint(first(nums) ?? 0)  // TはIntと推論\\n\\nlet words = [\"a\", \"b\", \"c\"]\\nprint(first(words) ?? \"\")  // TはStringと推論\\n```\\n\\n渡したデータの型を見て、自動的に `T` の型が決まります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n配列の最初の要素を返すジェネリック関数を作りましょう。\\n\\n1. `first<T>` という関数を作る\\n2. `[T]` 型の配列を受け取る\\n3. `T?` 型（オプショナル）を返す\\n4. `[10, 20, 30]` で試して `10` と表示"
        }
      ],
      "correctCode": "// <T>で型パラメータを定義\\nfunc first<T>(_ array: [T]) -> T? {\\n    // array.firstを返す\\n    return array.first\\n}\\n\\n// numsに[10, 20, 30]を代入\\nlet nums = [10, 20, 30]\\n// first(nums) ?? 0をprintで出力\\nprint(first(nums) ?? 0)",
      "holeyCode": "// <T>で型パラメータを定義\\nfunc ___<___>(_ ___: [___]) -> ___? {\\n    // array.firstを返す\\n    return ___.___ \\n// ブロックを閉じる\\n___\\n\\n// numsに[10, 20, 30]を代入\\nlet ___ = [___, ___, ___]\\n// first(nums) ?? 0をprintで出力\\n___(___(___)  ?? ___)",
      "correctLines": [
          "// <T>で型パラメータを定義",
          "func first<T>(_ array: [T]) -> T? {",
          "    // array.firstを返す",
          "    return array.first",
          "// ブロックを閉じる",
          "}",
          "",
          "// numsに[10, 20, 30]を代入",
          "let nums = [10, 20, 30]",
          "// first(nums) ?? 0をprintで出力",
          "print(first(nums) ?? 0)"
        ],
      "lineHints": [
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
          ""
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
      "description": "条件を指定してデータを絞り込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "型に条件をつける",
          "content": "# 「比較できる型だけ」という制限\\n\\nジェネリクスで「どんな型でもOK」は便利ですが、時には「比較できる型だけ」のように制限したいことがあります。\\n\\n**where** や **:** を使って、型に条件（制約）をつけられます。"
        },
        {
          "title": ": プロトコル で制約をつける",
          "content": "# 型パラメータに条件を追加\\n\\n```swift\\nfunc maximum<T: Comparable>(_ a: T, _ b: T) -> T {\\n    return a > b ? a : b\\n}\\n```\\n\\n`<T: Comparable>` は「TはComparable（比較可能）に準拠している型だけ」という意味です。\\n\\n`Comparable` に準拠していない型は使えません。"
        },
        {
          "title": "Comparable（コンパラブル）とは？",
          "content": "# 比較できることを保証するプロトコル\\n\\n**Comparable（コンパラブル）** は、`<`、`>`、`==` などで比較できることを保証するプロトコルです。\\n\\nInt、String、Doubleなど、多くの基本的な型が準拠しています。\\n\\n「compare」は「比較する」という意味です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n2つの値のうち大きい方を返す関数を作りましょう。\\n\\n1. `maximum<T: Comparable>` という関数を作る\\n2. 2つの引数 `a` と `b` を受け取る\\n3. `a > b` なら `a` を、そうでなければ `b` を返す\\n4. `maximum(5, 3)` で `5` と表示"
        }
      ],
      "correctCode": "// Comparableで比較可能な型に制限\\nfunc maximum<T: Comparable>(_ a: T, _ b: T) -> T {\\n    // 大きい方を返す\\n    return a > b ? a : b\\n}\\n\\n// maximum関数を呼び出し（第1引数に5, 第2引数に3）\\nprint(maximum(5, 3))",
      "holeyCode": "// Comparableで比較可能な型に制限\\nfunc ___<___: ___>(_ ___: ___, _ ___: ___) -> ___ {\\n    // 大きい方を返す\\n    return ___ > ___ ? ___ : ___\\n// ブロックを閉じる\\n___\\n\\n// maximum関数を呼び出し（第1引数に5, 第2引数に3）\\n___(___(___, ___))",
      "correctLines": [
          "// Comparableで比較可能な型に制限",
          "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {",
          "    // 大きい方を返す",
          "    return a > b ? a : b",
          "// ブロックを閉じる",
          "}",
          "",
          "// maximum関数を呼び出し（第1引数に5, 第2引数に3）",
          "print(maximum(5, 3))"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          ""
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
      "description": "Codable（コーダブル）について学びます",
      "tutorialSlides": [
        {
          "title": "Codable（コーダブル）とは？",
          "content": "# データを他の形式に変換する仕組み\\n\\n**Codable（コーダブル）** は、データをJSON（ジェイソン）などの形式に変換できることを示すプロトコルです。\\n\\n「code」は「符号化する」という意味。データを別の形式に「符号化」して送ったり保存したりできます。\\n\\nWebのAPIとやりとりするときによく使います。"
        },
        {
          "title": "JSONとは？",
          "content": "# テキスト形式のデータ\\n\\n**JSON（JavaScript Object Notation）** は、データをテキストで表す形式です。\\n\\n```\\n{\"name\":\"Taro\",\"age\":20}\\n```\\n\\nWebでよく使われる形式で、人間にも読めるのが特徴です。"
        },
        {
          "title": "Codable の使い方",
          "content": "# 構造体を Codable に準拠させる\\n\\n```swift\\nstruct User: Codable {\\n    var name: String\\n    var age: Int\\n}\\n```\\n\\n`: Codable` をつけるだけで、JSONへの変換・JSONからの変換が使えるようになります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nCodableな構造体を作って、JSONに変換しましょう。\\n\\n1. `Item` 構造体を `Codable` に準拠させる\\n2. `name` プロパティを持たせる\\n3. `JSONEncoder()` でJSONに変換\\n4. 結果を表示する"
        }
      ],
      "correctCode": "// Foundationをインポート\\nimport Foundation\\n\\n// CodableでJSON変換可能に\\nstruct Item: Codable {\\n    // nameプロパティ\\n    var name: String\\n}\\n\\n// インスタンスを作成\\nlet item = Item(name: \"りんご\")\\n// エンコーダを作成\\nlet encoder = JSONEncoder()\\n// JSONに変換\\nif let data = try? encoder.encode(item),\\n   let json = String(data: data, encoding: .utf8) {\\n    // JSONを出力\\n    print(json)\\n}",
      "holeyCode": "// Foundationをインポート\\nimport ___\\n\\n// CodableでJSON変換可能に\\nstruct ___: ___ {\\n    // nameプロパティ\\n    var ___: ___\\n// ブロックを閉じる\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___(___: \\\"___\\\")\\n// エンコーダを作成\\nlet ___ = ___()\\n// JSONに変換\\nif let ___ = try? ___.___(___ ),\\n   // ブロックを開始\\n   let ___ = ___(___: ___, ___: .___) {\\n    // JSONを出力\\n    ___(___) \\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// Foundationをインポート",
          "import Foundation",
          "",
          "// CodableでJSON変換可能に",
          "struct Item: Codable {",
          "    // nameプロパティ",
          "    var name: String",
          "// ブロックを閉じる",
          "}",
          "",
          "// インスタンスを作成",
          "let item = Item(name: \\\"りんご\\\")",
          "// エンコーダを作成",
          "let encoder = JSONEncoder()",
          "// JSONに変換",
          "if let data = try? encoder.encode(item),",
          "   // ブロックを開始",
          "   let json = String(data: data, encoding: .utf8) {",
          "    // JSONを出力",
          "    print(json)",
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
      "description": "lazy（レイジー）について学びます",
      "tutorialSlides": [
        {
          "title": "lazy（レイジー）とは？",
          "content": "# 必要になるまで作らない\\n\\n**lazy（レイジー）** は「怠け者」という意味です。\\n\\n普通のプロパティは、インスタンスを作るときにすぐ初期化されます。でも `lazy` をつけると、実際に使うときまで初期化を先延ばしにできます。\\n\\n重い処理を、本当に必要になるまでやらないようにできます。"
        },
        {
          "title": "lazy プロパティの書き方",
          "content": "# lazy var で宣言\\n\\n```swift\\nclass Calculator {\\n    lazy var result: Int = {\\n        print(\"計算中...\")  // 初めてアクセスしたとき実行\\n        return 100\\n    }()\\n}\\n```\\n\\n最後の `()` は「このクロージャを実行する」という意味です。"
        },
        {
          "title": "lazy が便利な場面",
          "content": "# 重い処理を後回しに\\n\\n- ファイルの読み込み\\n- ネットワーク通信\\n- 複雑な計算\\n\\n使わないかもしれない重い処理は、`lazy` にしておくとプログラムが速くなります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nlazyプロパティを持つクラスを作りましょう。\\n\\n1. `Calculator` クラスを作る\\n2. `lazy var result` を定義\\n3. 初期化時に「Computing...」と表示して100を返す\\n4. インスタンスを作って `result` にアクセス"
        }
      ],
      "correctCode": "// Calculatorクラスを定義\\nclass Calculator {\\n    // lazyで遅延初期化\\n    lazy var result: Int = {\\n        // 計算中と出力\\n        print(\"計算中...\")\\n        // 100を返す\\n        return 100\\n    }()\\n}\\n\\n// インスタンスを作成\\nlet calc = Calculator()\\n// resultを出力\\nprint(calc.result)",
      "holeyCode": "// Calculatorクラスを定義\\nclass ___ {\\n    // lazyで遅延初期化\\n    lazy var ___: ___ = {\\n        // 計算中と出力\\n        ___(\\\"___\\\")\\n        // 100を返す\\n        return ___\\n    // クロージャを閉じて実行\\n    ___()\\n// ブロックを閉じる\\n___\\n\\n// インスタンスを作成\\nlet ___ = ___()\\n// resultを出力\\n___(___.___ )",
      "correctLines": [
          "// Calculatorクラスを定義",
          "class Calculator {",
          "    // lazyで遅延初期化",
          "    lazy var result: Int = {",
          "        // 計算中と出力",
          "        print(\\\\\\\"計算中...\\\\\\\")",
          "        // 100を返す",
          "        return 100",
          "    // クロージャを閉じて実行",
          "    }()",
          "// ブロックを閉じる",
          "}",
          "",
          "// インスタンスを作成",
          "let calc = Calculator()",
          "// resultを出力",
          "print(calc.result)"
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
          ""
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "defer（ディファー）とは？",
          "content": "# 「後片付け」を予約する\\n\\n**defer（ディファー）** は、「関数が終わるときに必ず実行する」処理を予約する仕組みです。\\n\\n「defer」は「延期する」という意味。処理を後回しにして、最後に実行します。\\n\\n部屋を出るときに「電気を消す」ことを先に予約しておくようなイメージです。"
        },
        {
          "title": "defer の実行順序",
          "content": "# 最後に実行される\\n\\n```swift\\nfunc process() {\\n    defer { print(\"Cleanup\") }\\n    print(\"Processing\")\\n}\\n// 出力:\\n// Processing\\n// Cleanup\\n```\\n\\n`defer` の中身は、関数の最後で実行されます。"
        },
        {
          "title": "defer が便利な場面",
          "content": "# 必ず実行したい後処理\\n\\n- ファイルを閉じる\\n- ロックを解除する\\n- リソースを解放する\\n\\nエラーが起きても `defer` は必ず実行されるので、後片付けを忘れません。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\ndeferを使って「start」の後に「end」と表示する関数を作りましょう。\\n\\n1. `test` 関数を作る\\n2. `defer { print(\"end\") }` を書く\\n3. `print(\"start\")` を書く\\n\\n「start」→「end」の順に表示されます。"
        }
      ],
      "correctCode": "// test関数を定義\\nfunc test() {\\n    // deferでスコープ終了時に実行\\n    defer { print(\"end\") }\\n    // startと出力\\n    print(\"start\")\\n}\\n\\n// test関数を呼び出し\\ntest()",
      "holeyCode": "// test関数を定義\\nfunc ___() {\\n    // deferでスコープ終了時に実行\\n    defer { ___(\\\"___\\\") }\\n    // startと出力\\n    ___(\\\"___\\\")\\n// ブロックを閉じる\\n___\\n\\n// test関数を呼び出し\\n___()",
      "correctLines": [
          "// test関数を定義",
          "func test() {",
          "    // deferでスコープ終了時に実行",
          "    defer { print(\\\"end\\\") }",
          "    // startと出力",
          "    print(\\\"start\\\")",
          "// ブロックを閉じる",
          "}",
          "",
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
          null,
          ""
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
      "description": "guard（ガード）について学びます",
      "tutorialSlides": [
        {
          "title": "guard（ガード）とは？",
          "content": "# 「ダメならすぐ出る」仕組み\\n\\n**guard（ガード）** は、条件を満たさない場合にすぐ関数から出る仕組みです。\\n\\n「guard」は英語で「守る」という意味。プログラムを問題から守ります。\\n\\n入り口で身分証をチェックして、持っていなければ入れないゲートのようなイメージです。"
        },
        {
          "title": "guard の書き方",
          "content": "# guard 条件 else { 脱出 }\\n\\n```swift\\nfunc check(_ value: Int?) {\\n    guard let v = value else {\\n        print(\"値がない\")  // 条件を満たさない\\n        return  // 関数から出る\\n    }\\n    print(v)  // 条件を満たす場合\\n}\\n```"
        },
        {
          "title": "if let との違い",
          "content": "# 取り出した値のスコープ\\n\\n**if let** では取り出した値は `{ }` の中だけで使えます。\\n\\n**guard let** では取り出した値は関数全体で使えます。\\n\\n```swift\\nguard let x = opt else { return }\\nprint(x)  // guardの後でもxが使える！\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nguardでオプショナルをチェックする関数を作りましょう。\\n\\n1. `check` 関数を作る（引数は `Int?`）\\n2. `guard let` で値を取り出す\\n3. nilなら「nil」と表示してreturn\\n4. 値があれば2倍して表示\\n\\n`check(5)` で `10` と表示されます。"
        }
      ],
      "correctCode": "// check関数を定義\\nfunc check(_ num: Int?) {\\n    // guardで早期リターン\\n    guard let n = num else {\\n        // nilと出力\\n        print(\"nil\")\\n        // 早期リターン\\n        return\\n    }\\n    // n * 2を出力\\n    print(n * 2)\\n}\\n\\n// check関数を呼び出し（引数5）\\ncheck(5)",
      "holeyCode": "// check関数を定義\\nfunc ___(___  ___: ___?) {\\n    // guardで早期リターン\\n    guard let ___ = ___ else {\\n        // nilと出力\\n        ___(\\\"___\\\")\\n        // 早期リターン\\n        ___\\n    // ブロックを閉じる\\n    ___\\n    // n * 2を出力\\n    ___(___ * ___)\\n// ブロックを閉じる\\n___\\n\\n// check関数を呼び出し（引数5）\\n___(___)",
      "correctLines": [
          "// check関数を定義",
          "func check(_ num: Int?) {",
          "    // guardで早期リターン",
          "    guard let n = num else {",
          "        // nilと出力",
          "        print(\\\"nil\\\")",
          "        // 早期リターン",
          "        return",
          "    // ブロックを閉じる",
          "    }",
          "    // n * 2を出力",
          "    print(n * 2)",
          "// ブロックを閉じる",
          "}",
          "",
          "// check関数を呼び出し（引数5）",
          "check(5)"
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
          "",
          null,
          null,
          ""
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
      "description": "associatedtypeについて学びます",
      "tutorialSlides": [
        {
          "title": "associatedtype（アソシエイテッドタイプ）とは？",
          "content": "# プロトコルで「型を後で決める」\\n\\n**associatedtype** は、プロトコルの中で「型を後から決める」ための仕組みです。\\n\\n「associated」は「関連した」という意味。プロトコルに関連する型を表します。\\n\\n例えば「入れ物」プロトコルで、中身の型（数字か文字か）を後から決めたいときに使います。"
        },
        {
          "title": "associatedtype の定義",
          "content": "# プロトコル内で宣言\\n\\n```swift\\nprotocol Container {\\n    associatedtype Item  // 型を後で決める\\n    func add(_ item: Item)\\n}\\n```\\n\\n`Item` が何の型かは、準拠する型が決めます。"
        },
        {
          "title": "準拠する側で型を決める",
          "content": "# 具体的な型で実装\\n\\n```swift\\nstruct IntStack: Stack {\\n    var items: [Int] = []  // ItemはInt\\n    mutating func push(_ item: Int) {\\n        items.append(item)\\n    }\\n}\\n```\\n\\n`push` の引数型を `Int` にすることで、`Item = Int` が自動的に決まります。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nスタック（積み重ね）のプロトコルを作りましょう。\\n\\n1. `Stack` プロトコルに `associatedtype Element` を定義\\n2. `push` メソッドを宣言\\n3. `IntStack` 構造体で準拠を実装\\n4. 10をpushしてitemsを表示"
        }
      ],
      "correctCode": "// プロトコルを定義\\nprotocol Stack {\\n    // associatedtypeで関連型を定義\\n    associatedtype Element\\n    // pushメソッドを宣言\\n    mutating func push(_ item: Element)\\n}\\n\\n// Stackに準拠\\nstruct IntStack: Stack {\\n    // items配列\\n    var items: [Int] = []\\n    // pushメソッドを実装\\n    mutating func push(_ item: Int) {\\n        // 要素を追加\\n        items.append(item)\\n    }\\n}\\n\\n// インスタンスを作成\\nvar stack = IntStack()\\n// 要素を追加\\nstack.push(10)\\n// itemsを出力\\nprint(stack.items)",
      "holeyCode": "// プロトコルを定義\\nprotocol ___ {\\n    // associatedtypeで関連型を定義\\n    associatedtype ___\\n    // pushメソッドを宣言\\n    mutating func ___(___ ___: ___)\\n// ブロックを閉じる\\n___\\n\\n// Stackに準拠\\nstruct ___: ___ {\\n    // items配列\\n    var ___: [___] = []\\n    // pushメソッドを実装\\n    mutating func ___(___ ___: ___) {\\n        // 要素を追加\\n        ___.___(___)\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___\\n\\n// インスタンスを作成\\nvar ___ = ___()\\n// 要素を追加\\n___.___(___) \\n// itemsを出力\\n___(___.___ )",
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
          "var stack = IntStack()",
          "// 要素を追加",
          "stack.push(10)",
          "// itemsを出力",
          "print(stack.items)"
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
      "description": "some（サム）について学びます",
      "tutorialSlides": [
        {
          "title": "some（サム）とは？",
          "content": "# 「具体的な型を隠す」仕組み\\n\\n**some（サム）** は、「何かの型」という意味で、具体的な型を隠して返すことができます。\\n\\n「some」は「ある」「何らかの」という意味です。\\n\\n呼び出す側は具体的な型を知らなくても、プロトコルに準拠していることだけがわかります。"
        },
        {
          "title": "some の使い方",
          "content": "# some プロトコル名\\n\\n```swift\\nfunc makeCollection() -> some Collection {\\n    return [1, 2, 3]  // 実際はArray<Int>\\n}\\n```\\n\\n戻り値の型は「Collectionに準拠した何らかの型」と宣言しています。実際はArrayですが、隠しています。"
        },
        {
          "title": "SwiftUI でよく使う",
          "content": "# some View\\n\\nSwiftUIでは `some View` をよく見かけます。\\n\\n```swift\\nvar body: some View {\\n    Text(\"Hello\")\\n}\\n```\\n\\n「何らかのViewを返す」という意味です。Textが返されますが、型を隠しています。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\nsome を使って、具体的な型を隠して返す関数を作りましょう。\\n\\n1. `makeCollection` 関数を作る\\n2. 戻り値を `some Collection` にする\\n3. `[1, 2, 3]` を返す\\n4. `.count` で要素数を表示"
        }
      ],
      "correctCode": "// someで不透明な型を返す\\nfunc makeCollection() -> some Collection {\\n    // 配列を返す\\n    return [1, 2, 3]\\n}\\n\\n// cにmakeCollection関数の結果を代入\\nlet c = makeCollection()\\n// 要素数を出力\\nprint(c.count)",
      "holeyCode": "// someで不透明な型を返す\\nfunc ___() -> some ___ {\\n    // 配列を返す\\n    return [___, ___, ___]\\n// ブロックを閉じる\\n___\\n\\n// makeCollection関数を呼び出し\\nlet ___ = ___()\\n// 要素数を出力\\n___(___.___)",
      "correctLines": [
          "// someで不透明な型を返す",
          "func makeCollection() -> some Collection {",
          "    // 配列を返す",
          "    return [1, 2, 3]",
          "// ブロックを閉じる",
          "}",
          "",
          "// cにmakeCollection関数の結果を代入",
          "let c = makeCollection()",
          "// 要素数を出力",
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
          null,
          "",
          null,
          ""
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
