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
      "correctCode": "// ?でオプショナル型\\nvar num: Int? = 42\\n// nilチェック\\nif num != nil {\\n    // !でアンラップ\\n    print(num!)\\n}",
      "holeyCode": "// ?でオプショナル型\\nvar num: Int? = ___\\n// nilチェック\\nif num != ___ {\\n    // !でアンラップ\\n    print(___!)\\n___",
      "correctLines": [
          "// ?でオプショナル型",
          "var num: Int? = 42",
          "// nilチェック",
          "if num != nil {",
          "    // !でアンラップ",
          "    print(num!)",
          "}"
        ],
      "lineHints": [
          null,
          "? でオプショナル型にします。",
          null,
          "nil チェックをします。",
          null,
          "! でアンラップします。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "?"
          ],
          "others": ["nil", "!", "42", "num", "}", "42"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "オプショナルバインディング",
      "correctCode": "// ?でオプショナル型\\nvar val: Int? = 100\\n// letで値を取り出す\\nif let n = val {\\n    // nを出力\\n    print(n)\\n}",
      "holeyCode": "// ?でオプショナル型\\nvar val: Int? = ___\\n// letで値を取り出す\\nif let n = ___ {\\n    // nを出力\\n    print(___)\\n___",
      "correctLines": [
          "// ?でオプショナル型",
          "var val: Int? = 100",
          "// letで値を取り出す",
          "if let n = val {",
          "    // nを出力",
          "    print(n)",
          "}"
        ],
      "lineHints": [
          null,
          "? でオプショナル型にします。",
          null,
          "let で値を取り出します。",
          null,
          "変数の内容を画面に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "let"
          ],
          "others": ["?", "print", "100", "val", "n", "}", "100"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "構造体を作ろう",
      "correctCode": "// structで構造体を定義\\nstruct Rect {\\n    // widthプロパティ\\n    var width: Int\\n    // heightプロパティ\\n    var height: Int\\n}\\n// インスタンスを作成\\nlet r = Rect(width: 3, height: 4)\\n// widthを出力\\nprint(r.width)",
      "holeyCode": "// structで構造体を定義\\nstruct ___ {\\n    // widthプロパティ\\n    var width: ___\\n    // heightプロパティ\\n    var height: ___\\n___\\n// インスタンスを作成\\nlet ___ = Rect(width: 3, height: 4)\\n// widthを出力\\nprint(r.___)",
      "correctLines": [
          "// structで構造体を定義",
          "struct Rect {",
          "    // widthプロパティ",
          "    var width: Int",
          "    // heightプロパティ",
          "    var height: Int",
          "}",
          "// インスタンスを作成",
          "let r = Rect(width: 3, height: 4)",
          "// widthを出力",
          "print(r.width)"
        ],
      "lineHints": [
          null,
          "構造体（Rect）を定義します。",
          null,
          "width を指定します。",
          null,
          "height を指定します。",
          "自動生成されるイニシャライザを使います。",
          null,
          "width を指定します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["width", "height", "Rect", "Int", "}", "r", "Int", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "クラスを作ろう",
      "correctCode": "// classでクラスを定義\\nclass Cat {\\n    // nameプロパティ\\n    var name: String\\n    // initでイニシャライザ\\n    init(name: String) {\\n        // selfで自身のプロパティにアクセス\\n        self.name = name\\n    }\\n}\\n// インスタンスを作成\\nlet cat = Cat(name: \"タマ\")\\n// nameを出力\\nprint(cat.name)",
      "holeyCode": "// classでクラスを定義\\nclass ___ {\\n    // nameプロパティ\\n    var name: ___\\n    // initでイニシャライザ\\n    init(name: ___) {\\n        // selfで自身のプロパティにアクセス\\n        self.___ = name\\n    ___\\n___\\n// インスタンスを作成\\nlet ___ = Cat(name: \"タマ\")\\n// nameを出力\\nprint(cat.___)",
      "correctLines": [
          "// classでクラスを定義",
          "class Cat {",
          "    // nameプロパティ",
          "    var name: String",
          "    // initでイニシャライザ",
          "    init(name: String) {",
          "        // selfで自身のプロパティにアクセス",
          "        self.name = name",
          "    }",
          "}",
          "// インスタンスを作成",
          "let cat = Cat(name: \"タマ\")",
          "// nameを出力",
          "print(cat.name)"
        ],
      "lineHints": [
          null,
          "新しいクラス（Cat）を定義します。",
          null,
          "name を指定します。",
          null,
          "init でイニシャライザを定義します。",
          null,
          "self を指定します。",
          "Tama を指定します。",
          "name を指定します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["name", "init", "self", "Tama", "Cat", "String", "}", "cat", "String", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "タマ\\n"
          }
        ]
      },
    {
      "title": "プロトコルを使おう",
      "correctCode": "// protocolでプロトコルを定義\\nprotocol Speaker {\\n    // speakメソッドを宣言\\n    func speak()\\n}\\n// Speakerに準拠\\nstruct Dog: Speaker {\\n    // speakメソッドを実装\\n    func speak() {\\n        // woofと出力\\n        print(\"woof\")\\n    }\\n}\\n// インスタンスを作成\\nlet d = Dog()\\n// speakを呼び出し\\nd.speak()",
      "holeyCode": "// protocolでプロトコルを定義\\nprotocol ___ {\\n    // speakメソッドを宣言\\n    func ___ ()\\n___\\n// Speakerに準拠\\nstruct Dog: ___ {\\n    // speakメソッドを実装\\n    func ___ () {\\n        // woofと出力\\n        ___(\"woof\")\\n    ___\\n___\\n// インスタンスを作成\\nlet ___ = Dog()\\n// speakを呼び出し\\nd.___()",
      "correctLines": [
          "// protocolでプロトコルを定義",
          "protocol Speaker {",
          "    // speakメソッドを宣言",
          "    func speak()",
          "}",
          "// Speakerに準拠",
          "struct Dog: Speaker {",
          "    // speakメソッドを実装",
          "    func speak() {",
          "        // woofと出力",
          "        print(\"woof\")",
          "    }",
          "}",
          "// インスタンスを作成",
          "let d = Dog()",
          "// speakを呼び出し",
          "d.speak()"
        ],
      "lineHints": [
          null,
          "protocol でプロトコルを定義します。",
          null,
          "関数（speak）を定義します。",
          "構造体（Dog）を定義します。",
          null,
          "関数（speak）を定義します。",
          null,
          "woof を指定します。",
          null,
          "Dog を指定します。",
          "speak を指定します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "protocol"
          ],
          "others": ["speak", "Speaker", "woof", "Dog", "speak()", "}", "print", "d", "speak()", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "woof\\n"
          }
        ]
      },
    {
      "title": "クロージャを使おう",
      "correctCode": "// inで引数と処理を分ける\\nlet double = { (n: Int) in\\n    // n * 2を返す\\n    return n * 2\\n}\\n// doubleを呼び出し\\nprint(double(5))",
      "holeyCode": "// inで引数と処理を分ける\\nlet ___ = { (n: Int) in\\n    // n * 2を返す\\n    return n * ___\\n___\\n// doubleを呼び出し\\nprint(double(___))",
      "correctLines": [
          "// inで引数と処理を分ける",
          "let double = { (n: Int) in",
          "    // n * 2を返す",
          "    return n * 2",
          "}",
          "// doubleを呼び出し",
          "print(double(5))"
        ],
      "lineHints": [
          null,
          "in の前が引数です。",
          null,
          "* で掛け算します。",
          "double を指定します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "in"
          ],
          "others": ["*", "double", "2", "}", "5", "2", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "map で変換しよう",
      "correctCode": "// numsに[1, 2, 3]を代入\\nlet nums = [1, 2, 3]\\n// nums.mapで各要素を2乗しsquaredに代入\\nlet squared = nums.map { $0 * $0 }\\n// squaredをprintで出力\\nprint(squared)",
      "holeyCode": "// numsに[1, 2, 3]を代入\\nlet ___ = [1, 2, 3]\\n// nums.mapで各要素を2乗しsquaredに代入\\nlet ___ = nums.map { $0 * $0 }\\n// squaredをprintで出力\\nprint(___)",
      "correctLines": [
          "// numsに[1, 2, 3]を代入",
          "let nums = [1, 2, 3]",
          "// nums.mapで各要素を2乗しsquaredに代入",
          "let squared = nums.map { $0 * $0 }",
          "// squaredをprintで出力",
          "print(squared)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "map で各要素を2乗します。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["1", "squared", "nums"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 4, 9]\\n"
          }
        ]
      },
    {
      "title": "filter で絞り込もう",
      "correctCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet nums = [1, 2, 3, 4, 5]\\n// nums.filterで3以上を抽出しresultに代入\\nlet result = nums.filter { $0 >= 3 }\\n// resultをprintで出力\\nprint(result)",
      "holeyCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet ___ = [1, 2, 3, 4, 5]\\n// nums.filterで3以上を抽出しresultに代入\\nlet ___ = nums.filter { $0 >= 3 }\\n// resultをprintで出力\\nprint(___)",
      "correctLines": [
          "// numsに[1, 2, 3, 4, 5]を代入",
          "let nums = [1, 2, 3, 4, 5]",
          "// nums.filterで3以上を抽出しresultに代入",
          "let result = nums.filter { $0 >= 3 }",
          "// resultをprintで出力",
          "print(result)"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "filter で 3 以上を抽出します。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": ["1", "result", "nums"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 4, 5]\\n"
          }
        ]
      },
    {
      "title": "guard で早期リターン",
      "correctCode": "// check関数を定義\\nfunc check(_ val: Int?) {\\n    // guardで早期リターン\\n    guard let n = val else {\\n        // nilと出力\\n        print(\"nil\")\\n        // 早期リターン\\n        return\\n    }\\n    // nを出力\\n    print(n)\\n}\\n// 関数を呼び出し\\ncheck(10)",
      "holeyCode": "// check関数を定義\\nfunc ___ (_ val: Int?) {\\n    // guardで早期リターン\\n    guard let n = val ___ {\\n        // nilと出力\\n        ___(\"nil\")\\n        // 早期リターン\\n        ___\\n    ___\\n    // nを出力\\n    print(___)\\n___\\n// 関数を呼び出し\\ncheck(___)",
      "correctLines": [
          "// check関数を定義",
          "func check(_ val: Int?) {",
          "    // guardで早期リターン",
          "    guard let n = val else {",
          "        // nilと出力",
          "        print(\"nil\")",
          "        // 早期リターン",
          "        return",
          "    }",
          "    // nを出力",
          "    print(n)",
          "}",
          "// 関数を呼び出し",
          "check(10)"
        ],
      "lineHints": [
          null,
          "関数（check）を定義します。",
          null,
          "guard で条件をチェックします。",
          null,
          "nil を指定します。",
          null,
          "関数の実行を終了し、呼び出し元に戻ります。",
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。",
          "ここを正しく入力してください。",
          null,
          "check を指定します。"
        ],
        "candidates": {
          "keywords": [
            "guard"
          ],
          "others": ["check", "nil", "return", "n", "check(_", "else", "print", "}", "10", "return", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "列挙型を使おう",
      "correctCode": "// enumで列挙型を定義\\nenum Color {\\n    // caseでケースを定義\\n    case red, green, blue\\n}\\n// Color.redを代入\\nlet c = Color.red\\n// switchでパターンマッチ\\nswitch c {\\ncase .red:\\n    // 赤色を出力\\n    print(\"赤\")\\ncase .green:\\n    // 緑色を出力\\n    print(\"緑\")\\ncase .blue:\\n    // 青色を出力\\n    print(\"青\")\\n}",
      "holeyCode": "// enumで列挙型を定義\\nenum ___ {\\n    // caseでケースを定義\\n    case red, green, ___\\n___\\n// Color.redを代入\\nlet ___ = Color.red\\n// switchでパターンマッチ\\nswitch ___ {\\ncase .___:\\n    // 赤色を出力\\n    ___(\"赤\")\\ncase .___:\\n    // 緑色を出力\\n    ___(\"緑\")\\ncase .___:\\n    // 青色を出力\\n    ___(\"青\")\\n___",
      "correctLines": [
          "// enumで列挙型を定義",
          "enum Color {",
          "    // caseでケースを定義",
          "    case red, green, blue",
          "}",
          "// Color.redを代入",
          "let c = Color.red",
          "// switchでパターンマッチ",
          "switch c {",
          "case .red:",
          "    // 赤色を出力",
          "    print(\"赤\")",
          "case .green:",
          "    // 緑色を出力",
          "    print(\"緑\")",
          "case .blue:",
          "    // 青色を出力",
          "    print(\"青\")",
          "}"
        ],
      "lineHints": [
          null,
          "enum で列挙型を定義します。",
          null,
          "red を指定します。",
          "red を指定します。",
          null,
          "c を指定します。",
          null,
          "red を指定します。",
          "green を指定します。",
          null,
          "blue を指定します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["red", "c", "green", "blue", "Color", "}", "print", "blue", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "赤\\n"
          }
        ]
      }
  ]
}
