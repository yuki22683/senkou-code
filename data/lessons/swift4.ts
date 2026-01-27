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
          "image": "/illustrations/common/shield_private.png",
          "content": "# 「この機能を持ってね」という約束\n\n**プロトコル（protocol）** は、「この機能を持っていてね」という約束を定義する仕組みです。\n\n例えば「あいさつができる」というプロトコルがあれば、人も動物も「あいさつする」機能を持つことを約束します。\n\n設計図のような役割で、「何ができるか」だけを決めます。"
        },
        {
          "title": "プロトコルの作り方",
          "image": "/illustrations/common/shield_private.png",
          "content": "# protocol で定義する\n\n```swift\nprotocol Greetable {\n    var name: String { get }  // 名前を持つ\n    func greet() -> String    // あいさつできる\n}\n```\n\n`{ get }` は「読み取れる」という意味です。プロトコルでは中身は書かず、「名前だけ」宣言します。"
        },
        {
          "title": "プロトコルに準拠する",
          "image": "/illustrations/common/shield_private.png",
          "content": "# : プロトコル名 で準拠を宣言\n\n```swift\nstruct Person: Greetable {  // 準拠を宣言\n    var name: String        // 名前を実装\n    func greet() -> String {\n        return \"Hello, \\(name)\"\n    }\n}\n```\n\n「準拠（じゅんきょ）」とは、約束を守ることです。プロトコルで宣言された機能を実際に作ります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 目標（もくひょう）\n\n「話せる」プロトコルを作って、犬に準拠させましょう。\n\n1. `Speakable` プロトコルを作る\n2. `speak()` という関数を宣言\n3. `Dog` 構造体で準拠を実装\n4. `speak()` で「Woof!」と返す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Speakable {\n    func speak() -> String\n}\n\nstruct Dog: Speakable {\n    func speak() -> String {\n        return \"Woof!\"\n    }\n}\n\nlet dog = Dog()\nprint(dog.speak())",
      "holeyCode": "// protocolでプロトコルを定義\n___ Speakable {\n    // speakメソッドを宣言\n    func ___() -> String\n}\n\n// Speakableに準拠\nstruct Dog: ___ {\n    // speakメソッドを実装\n    func speak() -> ___ {\n        // Woof!を返す\n        return \"___\"\n    }\n}\n\n// インスタンスを作成\nlet dog = ___()\n// speakを呼び出し\nprint(dog.___())",
      "correctLines": [
        "protocol Speakable {",
        "    func speak() -> String",
        "}",
        "",
        "struct Dog: Speakable {",
        "    func speak() -> String {",
        "        return \"Woof!\"",
        "    }",
        "}",
        "",
        "let dog = Dog()",
        "print(dog.speak())"
      ],
      "lineHints": ["protocol でプロトコルを定義します。", null, null, null, null, null, null, null, null, null, null, null],
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
          "title": "プロトコル拡張（かくちょう）とは？",
          "image": "/illustrations/common/hierarchy_tree.png",
          "content": "# 「デフォルト機能」を追加する\n\n**extension（エクステンション）** を使うと、プロトコルに「デフォルトの実装」を追加できます。\n\n「extension」は「拡張」という意味です。\n\n準拠する型が何も書かなくても、この機能が使えるようになります。"
        },
        {
          "title": "デフォルト実装の書き方",
          "image": "/illustrations/common/hierarchy_tree.png",
          "content": "# extension プロトコル名 { }\n\n```swift\nprotocol Describable {\n    var description: String { get }\n}\n\nextension Describable {\n    var description: String { \"説明なし\" }  // デフォルト\n}\n```\n\nこれで、準拠する型が `description` を実装しなくても「説明なし」が使われます。"
        },
        {
          "title": "デフォルトを上書き（オーバーライド）",
          "image": "/illustrations/common/hierarchy_tree.png",
          "content": "# 必要なら独自の実装を書ける\n\n```swift\nstruct Item: Describable {\n    var description: String { \"これはアイテムです\" }\n}\n```\n\nデフォルトが用意されていても、自分で書けば上書きできます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/hierarchy_tree.png",
          "content": "# 目標（もくひょう）\n\n`Identifiable` プロトコルを作り、extensionでデフォルト機能を追加しましょう。\n\n1. `id` プロパティを持つプロトコルを作る\n2. extensionで `display()` 関数を追加\n3. `User` 構造体で準拠\n4. デフォルトの `display()` を使う"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Identifiable {\n    var id: Int { get }\n}\n\nextension Identifiable {\n    func display() { print(\"ID: \\(id)\") }\n}\n\nstruct User: Identifiable {\n    var id: Int\n}\n\nlet user = User(id: 42)\nuser.display()",
      "holeyCode": "// プロトコルを定義\nprotocol ___ {\n    // idプロパティを宣言\n    var id: ___ { get }\n}\n\n// extensionでプロトコルを拡張\n___ Identifiable {\n    // デフォルト実装\n    func ___() { print(\"ID: \\(id)\") }\n}\n\n// Identifiableに準拠\nstruct User: ___ {\n    // idプロパティ\n    var ___: Int\n}\n\n// インスタンスを作成\nlet user = User(id: ___)\n// displayを呼び出し\nuser.___()",
      "correctLines": [
        "protocol Identifiable {",
        "    var id: Int { get }",
        "}",
        "",
        "extension Identifiable {",
        "    func display() { print(\"ID: \\(id)\") }",
        "}",
        "",
        "struct User: Identifiable {",
        "    var id: Int",
        "}",
        "",
        "let user = User(id: 42)",
        "user.display()"
      ],
      "lineHints": [null, null, null, null, "extension でプロトコルを拡張します。", null, null, null, null, null, null, null, null, null],
      "candidates": {
        "keywords": ["extension", "protocol", "struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ID: \(id)\n"
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
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 「どんな型でも使える」コード\n\n**ジェネリクス（generics）** は、型を「後から決められる」仕組みです。\n\n「generic」は「汎用的な」という意味です。\n\n例えば「箱に入れて返す」関数を作るとき、中身がリンゴでもミカンでも同じコードで対応できます。"
        },
        {
          "title": "型パラメータ <T>",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# <T> で型を仮置き\n\n```swift\nfunc first<T>(_ array: [T]) -> T? {\n    return array.first\n}\n```\n\n`<T>` は「Tという型を後で決めます」という意味。実際に使うときに、IntでもStringでも使えます。\n\n`T` は「Type（型）」の頭文字で、よく使われる名前です。"
        },
        {
          "title": "型推論で自動決定",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 使うときに型が決まる\n\n```swift\nlet nums = [10, 20, 30]\nprint(first(nums) ?? 0)  // TはIntと推論\n\nlet words = [\"a\", \"b\", \"c\"]\nprint(first(words) ?? \"\")  // TはStringと推論\n```\n\n渡したデータの型を見て、自動的に `T` の型が決まります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 目標（もくひょう）\n\n配列の最初の要素を返すジェネリック関数を作りましょう。\n\n1. `first<T>` という関数を作る\n2. `[T]` 型の配列を受け取る\n3. `T?` 型（オプショナル）を返す\n4. `[10, 20, 30]` で試して `10` と表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func first<T>(_ array: [T]) -> T? {\n    return array.first\n}\n\nlet nums = [10, 20, 30]\nprint(first(nums) ?? 0)",
      "holeyCode": "// <T>で型パラメータを定義\nfunc first___T___(_ array: [T]) -> T? {\n    // 最初の要素を返す\n    return array.___\n}\n\n// 配列を作成\nlet nums = [___, 20, 30]\n// 最初の要素を出力\nprint(___(nums) ?? 0)",
      "correctLines": [
        "func first<T>(_ array: [T]) -> T? {",
        "    return array.first",
        "}",
        "",
        "let nums = [10, 20, 30]",
        "print(first(nums) ?? 0)"
      ],
      "lineHints": ["<T> で型パラメータを定義します。", null, null, null, null, null],
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
          "title": "型に条件をつける",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 「比較できる型だけ」という制限\n\nジェネリクスで「どんな型でもOK」は便利ですが、時には「比較できる型だけ」のように制限したいことがあります。\n\n**where** や **:** を使って、型に条件（制約）をつけられます。"
        },
        {
          "title": ": プロトコル で制約をつける",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 型パラメータに条件を追加\n\n```swift\nfunc maximum<T: Comparable>(_ a: T, _ b: T) -> T {\n    return a > b ? a : b\n}\n```\n\n`<T: Comparable>` は「TはComparable（比較可能）に準拠している型だけ」という意味です。\n\n`Comparable` に準拠していない型は使えません。"
        },
        {
          "title": "Comparable（コンパラブル）とは？",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 比較できることを保証するプロトコル\n\n**Comparable（コンパラブル）** は、`<`、`>`、`==` などで比較できることを保証するプロトコルです。\n\nInt、String、Doubleなど、多くの基本的な型が準拠しています。\n\n「compare」は「比較する」という意味です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 目標（もくひょう）\n\n2つの値のうち大きい方を返す関数を作りましょう。\n\n1. `maximum<T: Comparable>` という関数を作る\n2. 2つの引数 `a` と `b` を受け取る\n3. `a > b` なら `a` を、そうでなければ `b` を返す\n4. `maximum(5, 3)` で `5` と表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {\n    return a > b ? a : b\n}\n\nprint(maximum(5, 3))",
      "holeyCode": "// Comparableで比較可能な型に制限\nfunc maximum<T: ___>(_ a: T, _ b: T) -> T {\n    // 大きい方を返す\n    return a ___ b ? a : b\n}\n\n// 結果を出力\nprint(___(5, 3))",
      "correctLines": [
        "func maximum<T: Comparable>(_ a: T, _ b: T) -> T {",
        "    return a > b ? a : b",
        "}",
        "",
        "print(maximum(5, 3))"
      ],
      "lineHints": ["Comparable で比較可能な型に制限します。", null, null, null, null],
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
          "title": "Codable（コーダブル）とは？",
          "image": "/illustrations/common/modular_blocks.png",
          "content": "# データを他の形式に変換する仕組み\n\n**Codable（コーダブル）** は、データをJSON（ジェイソン）などの形式に変換できることを示すプロトコルです。\n\n「code」は「符号化する」という意味。データを別の形式に「符号化」して送ったり保存したりできます。\n\nWebのAPIとやりとりするときによく使います。"
        },
        {
          "title": "JSONとは？",
          "image": "/illustrations/common/modular_blocks.png",
          "content": "# テキスト形式のデータ\n\n**JSON（JavaScript Object Notation）** は、データをテキストで表す形式です。\n\n```\n{\"name\":\"Taro\",\"age\":20}\n```\n\nWebでよく使われる形式で、人間にも読めるのが特徴です。"
        },
        {
          "title": "Codable の使い方",
          "image": "/illustrations/common/modular_blocks.png",
          "content": "# 構造体を Codable に準拠させる\n\n```swift\nstruct User: Codable {\n    var name: String\n    var age: Int\n}\n```\n\n`: Codable` をつけるだけで、JSONへの変換・JSONからの変換が使えるようになります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/modular_blocks.png",
          "content": "# 目標（もくひょう）\n\nCodableな構造体を作って、JSONに変換しましょう。\n\n1. `Item` 構造体を `Codable` に準拠させる\n2. `name` プロパティを持たせる\n3. `JSONEncoder()` でJSONに変換\n4. 結果を表示する"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "import Foundation\n\nstruct Item: Codable {\n    var name: String\n}\n\nlet item = Item(name: \"Apple\")\nlet encoder = JSONEncoder()\nif let data = try? encoder.encode(item),\n   let json = String(data: data, encoding: .utf8) {\n    print(json)\n}",
      "holeyCode": "// Foundationをインポート\nimport ___\n\n// CodableでJSON変換可能に\nstruct Item: ___ {\n    // nameプロパティ\n    var ___: String\n}\n\n// インスタンスを作成\nlet item = Item(name: \"___\")\n// エンコーダを作成\nlet encoder = ___()\n// JSONに変換\nif let data = try? encoder.encode(___),\n   let json = String(data: data, encoding: .utf8) {\n    // JSONを出力\n    print(___)\n}",
      "correctLines": [
        "import Foundation",
        "",
        "struct Item: Codable {",
        "    var name: String",
        "}",
        "",
        "let item = Item(name: \"Apple\")",
        "let encoder = JSONEncoder()",
        "if let data = try? encoder.encode(item),",
        "   let json = String(data: data, encoding: .utf8) {",
        "    print(json)",
        "}"
      ],
      "lineHints": [null, null, "構造体（Item）を定義します。", null, null, null, null, null, null, null, null, null],
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
          "title": "lazy（レイジー）とは？",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 必要になるまで作らない\n\n**lazy（レイジー）** は「怠け者」という意味です。\n\n普通のプロパティは、インスタンスを作るときにすぐ初期化されます。でも `lazy` をつけると、実際に使うときまで初期化を先延ばしにできます。\n\n重い処理を、本当に必要になるまでやらないようにできます。"
        },
        {
          "title": "lazy プロパティの書き方",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# lazy var で宣言\n\n```swift\nclass Calculator {\n    lazy var result: Int = {\n        print(\"計算中...\")  // 初めてアクセスしたとき実行\n        return 100\n    }()\n}\n```\n\n最後の `()` は「このクロージャを実行する」という意味です。"
        },
        {
          "title": "lazy が便利な場面",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 重い処理を後回しに\n\n- ファイルの読み込み\n- ネットワーク通信\n- 複雑な計算\n\n使わないかもしれない重い処理は、`lazy` にしておくとプログラムが速くなります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 目標（もくひょう）\n\nlazyプロパティを持つクラスを作りましょう。\n\n1. `Calculator` クラスを作る\n2. `lazy var result` を定義\n3. 初期化時に「Computing...」と表示して100を返す\n4. インスタンスを作って `result` にアクセス"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Calculator {\n    lazy var result: Int = {\n        print(\"Computing...\")\n        return 100\n    }()\n}\n\nlet calc = Calculator()\nprint(calc.result)",
      "holeyCode": "// クラスを定義\nclass ___ {\n    // lazyで遅延初期化\n    ___ var result: Int = {\n        // 計算中と出力\n        print(\"___\")\n        // 100を返す\n        return ___\n    }()\n}\n\n// インスタンスを作成\nlet calc = ___()\n// resultを出力\nprint(calc.___)",
      "correctLines": [
        "class Calculator {",
        "    lazy var result: Int = {",
        "        print(\"Computing...\")",
        "        return 100",
        "    }()",
        "}",
        "",
        "let calc = Calculator()",
        "print(calc.result)"
      ],
      "lineHints": [null, "lazy で遅延初期化します。", null, null, null, null, null, null, null],
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
          "title": "defer（ディファー）とは？",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 「後片付け」を予約する\n\n**defer（ディファー）** は、「関数が終わるときに必ず実行する」処理を予約する仕組みです。\n\n「defer」は「延期する」という意味。処理を後回しにして、最後に実行します。\n\n部屋を出るときに「電気を消す」ことを先に予約しておくようなイメージです。"
        },
        {
          "title": "defer の実行順序",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 最後に実行される\n\n```swift\nfunc process() {\n    defer { print(\"Cleanup\") }\n    print(\"Processing\")\n}\n// 出力:\n// Processing\n// Cleanup\n```\n\n`defer` の中身は、関数の最後で実行されます。"
        },
        {
          "title": "defer が便利な場面",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 必ず実行したい後処理\n\n- ファイルを閉じる\n- ロックを解除する\n- リソースを解放する\n\nエラーが起きても `defer` は必ず実行されるので、後片付けを忘れません。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cloud_async.png",
          "content": "# 目標（もくひょう）\n\ndeferを使って「start」の後に「end」と表示する関数を作りましょう。\n\n1. `test` 関数を作る\n2. `defer { print(\"end\") }` を書く\n3. `print(\"start\")` を書く\n\n「start」→「end」の順に表示されます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func test() {\n    defer { print(\"end\") }\n    print(\"start\")\n}\n\ntest()",
      "holeyCode": "// 関数を定義\nfunc ___() {\n    // deferでスコープ終了時に実行\n    ___ { print(\"end\") }\n    // startと出力\n    print(\"___\")\n}\n\n// 関数を呼び出し\n___()",
      "correctLines": [
        "func test() {",
        "    defer { print(\"end\") }",
        "    print(\"start\")",
        "}",
        "",
        "test()"
      ],
      "lineHints": [null, "defer でスコープ終了時の処理を登録します。", null, null, null, null],
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
          "title": "guard（ガード）とは？",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 「ダメならすぐ出る」仕組み\n\n**guard（ガード）** は、条件を満たさない場合にすぐ関数から出る仕組みです。\n\n「guard」は英語で「守る」という意味。プログラムを問題から守ります。\n\n入り口で身分証をチェックして、持っていなければ入れないゲートのようなイメージです。"
        },
        {
          "title": "guard の書き方",
          "image": "/illustrations/common/shield_private.png",
          "content": "# guard 条件 else { 脱出 }\n\n```swift\nfunc check(_ value: Int?) {\n    guard let v = value else {\n        print(\"値がない\")  // 条件を満たさない\n        return  // 関数から出る\n    }\n    print(v)  // 条件を満たす場合\n}\n```"
        },
        {
          "title": "if let との違い",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 取り出した値のスコープ\n\n**if let** では取り出した値は `{ }` の中だけで使えます。\n\n**guard let** では取り出した値は関数全体で使えます。\n\n```swift\nguard let x = opt else { return }\nprint(x)  // guardの後でもxが使える！\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/shield_private.png",
          "content": "# 目標（もくひょう）\n\nguardでオプショナルをチェックする関数を作りましょう。\n\n1. `check` 関数を作る（引数は `Int?`）\n2. `guard let` で値を取り出す\n3. nilなら「nil」と表示してreturn\n4. 値があれば2倍して表示\n\n`check(5)` で `10` と表示されます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func check(_ num: Int?) {\n    guard let n = num else {\n        print(\"nil\")\n        return\n    }\n    print(n * 2)\n}\n\ncheck(5)",
      "holeyCode": "// 関数を定義\nfunc ___(_ num: Int?) {\n    // guardで早期リターン\n    ___ let n = num else {\n        // nilと出力\n        print(\"___\")\n        // 早期リターン\n        ___\n    }\n    // n * 2を出力\n    print(n ___ 2)\n}\n\n// 関数を呼び出し\n___(5)",
      "correctLines": [
        "func check(_ num: Int?) {",
        "    guard let n = num else {",
        "        print(\"nil\")",
        "        return",
        "    }",
        "    print(n * 2)",
        "}",
        "",
        "check(5)"
      ],
      "lineHints": [null, "guard で早期リターンします。", null, null, null, null, null, null, null],
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
          "title": "associatedtype（アソシエイテッドタイプ）とは？",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# プロトコルで「型を後で決める」\n\n**associatedtype** は、プロトコルの中で「型を後から決める」ための仕組みです。\n\n「associated」は「関連した」という意味。プロトコルに関連する型を表します。\n\n例えば「入れ物」プロトコルで、中身の型（数字か文字か）を後から決めたいときに使います。"
        },
        {
          "title": "associatedtype の定義",
          "image": "/illustrations/common/light_bulb_hint.png",
          "content": "# プロトコル内で宣言\n\n```swift\nprotocol Container {\n    associatedtype Item  // 型を後で決める\n    func add(_ item: Item)\n}\n```\n\n`Item` が何の型かは、準拠する型が決めます。"
        },
        {
          "title": "準拠する側で型を決める",
          "image": "/illustrations/common/interface_network.png",
          "content": "# 具体的な型で実装\n\n```swift\nstruct IntStack: Stack {\n    var items: [Int] = []  // ItemはInt\n    mutating func push(_ item: Int) {\n        items.append(item)\n    }\n}\n```\n\n`push` の引数型を `Int` にすることで、`Item = Int` が自動的に決まります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 目標（もくひょう）\n\nスタック（積み重ね）のプロトコルを作りましょう。\n\n1. `Stack` プロトコルに `associatedtype Element` を定義\n2. `push` メソッドを宣言\n3. `IntStack` 構造体で準拠を実装\n4. 10をpushしてitemsを表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Stack {\n    associatedtype Element\n    mutating func push(_ item: Element)\n}\n\nstruct IntStack: Stack {\n    var items: [Int] = []\n    mutating func push(_ item: Int) {\n        items.append(item)\n    }\n}\n\nvar stack = IntStack()\nstack.push(10)\nprint(stack.items)",
      "holeyCode": "// プロトコルを定義\nprotocol ___ {\n    // associatedtypeで関連型を定義\n    ___ Element\n    // pushメソッドを宣言\n    mutating func push(_ item: ___)\n}\n\n// Stackに準拠\nstruct IntStack: Stack {\n    // items配列\n    var items: [___] = []\n    // pushメソッドを実装\n    mutating func ___(_ item: Int) {\n        // 要素を追加\n        items.___(item)\n    }\n}\n\n// インスタンスを作成\nvar stack = ___()\n// 要素を追加\nstack.push(___)\n// itemsを出力\nprint(stack.___)",
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
        "var stack = IntStack()",
        "stack.push(10)",
        "print(stack.items)"
      ],
      "lineHints": [null, "associatedtype で関連型を定義します。", null, null, null, null, null, null, null, null, null, null, null, null, null],
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
          "title": "some（サム）とは？",
          "image": "/illustrations/common/dna_generics.png",
          "content": "# 「具体的な型を隠す」仕組み\n\n**some（サム）** は、「何かの型」という意味で、具体的な型を隠して返すことができます。\n\n「some」は「ある」「何らかの」という意味です。\n\n呼び出す側は具体的な型を知らなくても、プロトコルに準拠していることだけがわかります。"
        },
        {
          "title": "some の使い方",
          "image": "/illustrations/common/interface_network.png",
          "content": "# some プロトコル名\n\n```swift\nfunc makeCollection() -> some Collection {\n    return [1, 2, 3]  // 実際はArray<Int>\n}\n```\n\n戻り値の型は「Collectionに準拠した何らかの型」と宣言しています。実際はArrayですが、隠しています。"
        },
        {
          "title": "SwiftUI でよく使う",
          "image": "/illustrations/3d/if.png",
          "content": "# some View\n\nSwiftUIでは `some View` をよく見かけます。\n\n```swift\nvar body: some View {\n    Text(\"Hello\")\n}\n```\n\n「何らかのViewを返す」という意味です。Textが返されますが、型を隠しています。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/magnifying_glass.png",
          "content": "# 目標（もくひょう）\n\nsome を使って、具体的な型を隠して返す関数を作りましょう。\n\n1. `makeCollection` 関数を作る\n2. 戻り値を `some Collection` にする\n3. `[1, 2, 3]` を返す\n4. `.count` で要素数を表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func makeCollection() -> some Collection {\n    return [1, 2, 3]\n}\n\nlet c = makeCollection()\nprint(c.count)",
      "holeyCode": "// someで不透明な型を返す\nfunc makeCollection() -> ___ Collection {\n    // 配列を返す\n    return [___, 2, 3]\n}\n\n// 関数を呼び出し\nlet c = ___()\n// 要素数を出力\nprint(c.___)",
      "correctLines": [
        "func makeCollection() -> some Collection {",
        "    return [1, 2, 3]",
        "}",
        "",
        "let c = makeCollection()",
        "print(c.count)"
      ],
      "lineHints": ["関数（makeCollection）を定義します。", null, null, null, null, null],
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
