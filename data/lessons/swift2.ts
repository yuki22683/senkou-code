export const swift2Data = {
  "language": "swift",
  "lessonId": "swift-2",
  "lessonTitle": "Swift II - オプショナルとプロトコル",
  "lessonDescription": "Swiftの安全機能「オプショナル」とオブジェクト指向を学びます。iOSアプリ開発に必要な知識を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "オプショナルを学ぼう",
      "description": "値があるかないかを表す「オプショナル」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "オプショナルとは？",
          "image": "/illustrations/3d/optional_concept.png",
          "content": "# 値があるかもしれない\n\n**オプショナル** は、値があるか `nil`（ない）かを表す型です。`?` をつけて宣言します。"
        },
        {
          "title": "オプショナルの宣言",
          "image": "/illustrations/3d/optional_declaration.png",
          "content": "# 型の後に ?\n\n`Int?` のように書くと、Int または nil になります。\n\n**コード例：**\n```swift\nvar name: String? = \"Taro\"\nname = nil // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var num: Int? = 42\nif num != nil {\n    print(num!)\n}",
      "holeyCode": "// ?でオプショナル型\nvar num: Int___ = 42\n// nilチェック\nif num != ___ {\n    // !でアンラップ\n    print(num___)\n}",
      "correctLines": [
        "var num: Int? = 42",
        "if num != nil {",
        "    print(num!)",
        "}"
      ],
      "lineHints": [
        "? でオプショナル型にします。",
        "nil チェックをします。",
        "! でアンラップします。",
        ""
      ],
      "candidates": {
        "operators": ["?"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "オプショナルバインディング",
      "description": "安全にオプショナルを開く「if let」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "if let とは？",
          "image": "/illustrations/3d/if.png",
          "content": "# 安全なアンラップ\n\n**if let** は、オプショナルに値があれば取り出し、なければスキップします。"
        },
        {
          "title": "if let の使い方",
          "image": "/illustrations/3d/if.png",
          "content": "# 値を安全に取り出す\n\n`if let 変数 = オプショナル` で値を取り出せます。\n\n**コード例：**\n```swift\nif let name = optionalName {\n    print(name) // 値がある場合のみ実行\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "var val: Int? = 100\nif let n = val {\n    print(n)\n}",
      "holeyCode": "// ?でオプショナル型\nvar val: Int___ = 100\n// letで値を取り出す\nif ___ n = val {\n    // 値を出力\n    ___(n)\n}",
      "correctLines": [
        "var val: Int? = 100",
        "if let n = val {",
        "    print(n)",
        "}"
      ],
      "lineHints": [
        "",
        "let で値を取り出します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["let"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "構造体を作ろう",
      "description": "値型の「構造体」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "構造体とは？",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# 値型のデータ構造\n\n**構造体（struct）** は、関連するデータをまとめる仕組みです。コピーすると独立した値になります。"
        },
        {
          "title": "struct の定義",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# struct キーワード\n\n`struct 名前 { }` で定義します。\n\n**コード例：**\n```swift\nstruct Point {\n    var x: Int\n    var y: Int\n}\nlet p = Point(x: 3, y: 4)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "struct Rect {\n    var width: Int\n    var height: Int\n}\nlet r = Rect(width: 3, height: 4)\nprint(r.width)",
      "holeyCode": "// structで構造体を定義\n___ Rect {\n    // widthプロパティ\n    var ___: Int\n    // heightプロパティ\n    var ___: Int\n}\n// インスタンスを作成\nlet r = ___(width: 3, height: 4)\n// widthを出力\nprint(r.___)",
      "correctLines": [
        "struct Rect {",
        "    var width: Int",
        "    var height: Int",
        "}",
        "let r = Rect(width: 3, height: 4)",
        "print(r.width)"
      ],
      "lineHints": [
        "struct で構造体を定義します。",
        "",
        "",
        "",
        "自動生成されるイニシャライザを使います。",
        ""
      ],
      "candidates": {
        "keywords": ["struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
        }
      ]
    },
    {
      "title": "クラスを作ろう",
      "description": "参照型の「クラス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 参照型のデータ構造\n\n**クラス** は、参照型です。コピーしても同じインスタンスを指します。継承もできます。"
        },
        {
          "title": "class の定義",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# init でイニシャライザ\n\n`init` でプロパティを初期化します。\n\n**コード例：**\n```swift\nclass Dog {\n    var name: String\n    init(name: String) {\n        self.name = name\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Cat {\n    var name: String\n    init(name: String) {\n        self.name = name\n    }\n}\nlet cat = Cat(name: \"Tama\")\nprint(cat.name)",
      "holeyCode": "// classでクラスを定義\n___ Cat {\n    // nameプロパティ\n    var ___: String\n    // initでイニシャライザ\n    ___(name: String) {\n        // selfで自身のプロパティにアクセス\n        ___.name = name\n    }\n}\n// インスタンスを作成\nlet cat = Cat(name: \"___\")\n// nameを出力\nprint(cat.___)",
      "correctLines": [
        "class Cat {",
        "    var name: String",
        "    init(name: String) {",
        "        self.name = name",
        "    }",
        "}",
        "let cat = Cat(name: \"Tama\")",
        "print(cat.name)"
      ],
      "lineHints": [
        "class でクラスを定義します。",
        "",
        "init でイニシャライザを定義します。",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Tama\n"
        }
      ]
    },
    {
      "title": "プロトコルを使おう",
      "description": "型が準拠すべき要件を定義する「プロトコル」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "プロトコルとは？",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 要件の定義\n\n**プロトコル** は、型が実装すべきメソッドやプロパティを定義します。インターフェースに似ています。"
        },
        {
          "title": "protocol の定義",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 型が準拠\n\n`protocol` で定義し、型が準拠して実装します。\n\n**コード例：**\n```swift\nprotocol Greet {\n    func hello()\n}\nstruct Person: Greet {\n    func hello() { print(\"hi\") }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "protocol Speaker {\n    func speak()\n}\nstruct Dog: Speaker {\n    func speak() {\n        print(\"woof\")\n    }\n}\nlet d = Dog()\nd.speak()",
      "holeyCode": "// protocolでプロトコルを定義\n___ Speaker {\n    // speakメソッドを宣言\n    func ___()\n}\n// Speakerに準拠\nstruct Dog: ___ {\n    // speakメソッドを実装\n    func ___() {\n        // woofと出力\n        print(\"___\")\n    }\n}\n// インスタンスを作成\nlet d = ___()\n// speakを呼び出し\nd.___()",
      "correctLines": [
        "protocol Speaker {",
        "    func speak()",
        "}",
        "struct Dog: Speaker {",
        "    func speak() {",
        "        print(\"woof\")",
        "    }",
        "}",
        "let d = Dog()",
        "d.speak()"
      ],
      "lineHints": [
        "protocol でプロトコルを定義します。",
        "",
        "",
        "Dog が Speaker に準拠します。",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["protocol"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "woof\n"
        }
      ]
    },
    {
      "title": "クロージャを使おう",
      "description": "名前のない関数「クロージャ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "クロージャとは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 無名関数\n\n**クロージャ** は、名前をつけずに定義する関数です。`{ }` で囲んで書きます。"
        },
        {
          "title": "クロージャの書き方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# { 引数 in 処理 }\n\n`in` の前が引数、後が処理本体です。\n\n**コード例：**\n```swift\nlet add = { (a: Int, b: Int) in\n    return a + b\n}\nprint(add(2, 3)) // 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let double = { (n: Int) in\n    return n * 2\n}\nprint(double(5))",
      "holeyCode": "// inで引数と処理を分ける\nlet double = { (n: Int) ___\n    // n * 2を返す\n    return n ___ 2\n}\n// doubleを呼び出し\nprint(___(5))",
      "correctLines": [
        "let double = { (n: Int) in",
        ["    return n * 2", "    return 2 * n"],
        "}",
        "print(double(5))"
      ],
      "lineHints": [
        "in の前が引数です。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["in"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "map で変換しよう",
      "description": "配列の各要素を変換する「map」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 各要素を変換\n\n**map** は、配列の各要素にクロージャを適用して新しい配列を作ります。"
        },
        {
          "title": "map の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# クロージャを渡す\n\n`$0` で最初の引数を参照できます。\n\n**コード例：**\n```swift\nlet nums = [1, 2, 3]\nlet doubled = nums.map { $0 * 2 }\n// [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, 2, 3]\nlet squared = nums.map { $0 * $0 }\nprint(squared)",
      "holeyCode": "// 配列を作成\nlet nums = [___, 2, 3]\n// mapで各要素を変換\nlet squared = nums.___ { $0 * $0 }\n// 結果を出力\nprint(___)",
      "correctLines": [
        "let nums = [1, 2, 3]",
        "let squared = nums.map { $0 * $0 }",
        "print(squared)"
      ],
      "lineHints": [
        "",
        "map で各要素を2乗します。",
        ""
      ],
      "candidates": {
        "functions": ["map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 4, 9]\n"
        }
      ]
    },
    {
      "title": "filter で絞り込もう",
      "description": "条件に合う要素だけを抽出する「filter」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "filter とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件でフィルタ\n\n**filter** は、条件を満たす要素だけを残した新しい配列を作ります。"
        },
        {
          "title": "filter の使い方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 真を返す要素を残す\n\nクロージャが真を返す要素だけが残ります。\n\n**コード例：**\n```swift\nlet nums = [1, 2, 3, 4, 5]\nlet big = nums.filter { $0 > 3 }\n// [4, 5]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "let nums = [1, 2, 3, 4, 5]\nlet result = nums.filter { $0 >= 3 }\nprint(result)",
      "holeyCode": "// 配列を作成\nlet nums = [___, 2, 3, 4, 5]\n// filterで条件に合う要素を抽出\nlet result = nums.___ { $0 >= 3 }\n// 結果を出力\nprint(___)",
      "correctLines": [
        "let nums = [1, 2, 3, 4, 5]",
        "let result = nums.filter { $0 >= 3 }",
        "print(result)"
      ],
      "lineHints": [
        "",
        "filter で 3 以上を抽出します。",
        ""
      ],
      "candidates": {
        "functions": ["filter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[3, 4, 5]\n"
        }
      ]
    },
    {
      "title": "guard で早期リターン",
      "description": "条件を満たさない場合に早期リターンする「guard」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "guard とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 早期リターン\n\n**guard** は、条件を満たさない場合に早期にリターンします。オプショナルのアンラップにも便利です。"
        },
        {
          "title": "guard let",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 条件を満たさなければ抜ける\n\n`guard let` で値を取り出し、なければ即座にリターンします。\n\n**コード例：**\n```swift\nguard let name = optionalName else {\n    return\n}\n// name を使える\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "func check(_ val: Int?) {\n    guard let n = val else {\n        print(\"nil\")\n        return\n    }\n    print(n)\n}\ncheck(10)",
      "holeyCode": "// 関数を定義\nfunc ___(_ val: Int?) {\n    // guardで早期リターン\n    ___ let n = val else {\n        // nilと出力\n        print(\"___\")\n        // 早期リターン\n        ___\n    }\n    // nを出力\n    print(___)\n}\n// 関数を呼び出し\n___(10)",
      "correctLines": [
        "func check(_ val: Int?) {",
        "    guard let n = val else {",
        "        print(\"nil\")",
        "        return",
        "    }",
        "    print(n)",
        "}",
        "check(10)"
      ],
      "lineHints": [
        "",
        "guard で条件をチェックします。",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["guard"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "列挙型を使おう",
      "description": "複数の状態を表す「列挙型（enum）」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "enum とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 状態の列挙\n\n**enum** は、いくつかの状態のうちの一つを表します。各ケースに値を持たせることもできます。"
        },
        {
          "title": "enum の定義",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# case でケースを定義\n\n`switch` でパターンマッチングできます。\n\n**コード例：**\n```swift\nenum Direction {\n    case up, down\n}\nlet d = Direction.up\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "enum Color {\n    case red, green, blue\n}\nlet c = Color.red\nswitch c {\ncase .red:\n    print(\"red\")\ncase .green:\n    print(\"green\")\ncase .blue:\n    print(\"blue\")\n}",
      "holeyCode": "// enumで列挙型を定義\n___ Color {\n    // caseでケースを定義\n    case ___, green, blue\n}\n// Color.redを代入\nlet c = Color.___\n// switchでパターンマッチ\nswitch ___ {\ncase .red:\n    print(\"___\")\ncase .green:\n    print(\"___\")\ncase .blue:\n    print(\"___\")\n}",
      "correctLines": [
        "enum Color {",
        "    case red, green, blue",
        "}",
        "let c = Color.red",
        "switch c {",
        "case .red:",
        "    print(\"red\")",
        "case .green:",
        "    print(\"green\")",
        "case .blue:",
        "    print(\"blue\")",
        "}"
      ],
      "lineHints": [
        "enum で列挙型を定義します。",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["enum"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "red\n"
        }
      ]
    }
  ]
}
