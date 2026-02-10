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
      "holeyCode": "// ?でオプショナル型\\nvar ___: ___? = ___\\n// nilチェック\\nif ___ != ___ ___\\n    // !でアンラップ\\n    ___(___!)\\n___",
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
          "変数名はnum、型はInt?、値は42です。",
          null,
          "numがnilでないことを確認する条件式です。",
          null,
          "print関数でnum!を出力します。",
          "閉じ括弧でブロックを終了します。"
        ],
        "candidates": {
          "operators": [
            "?"
          ],
          "others": ["nil", "!", "42", "num", "}", "Int", "{", "print"]
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
      "holeyCode": "// ?でオプショナル型\\nvar ___: ___? = ___\\n// letで値を取り出す\\nif let ___ = ___ ___\\n    // nを出力\\n    ___(___)\\n___",
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
          "変数名はval、型はInt?、値は100です。",
          null,
          "letでnに値を束縛し、valからアンラップします。",
          null,
          "print関数でnを出力します。",
          "閉じ括弧でブロックを終了します。"
        ],
        "candidates": {
          "keywords": [
            "let"
          ],
          "others": ["?", "print", "100", "val", "n", "}", "Int", "{"]
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
      "holeyCode": "// structで構造体を定義\\nstruct ___ ___\\n    // widthプロパティ\\n    var ___: ___\\n    // heightプロパティ\\n    var ___: ___\\n___\\n// インスタンスを作成\\nlet ___ = ___(___: ___, ___: ___)\\n// widthを出力\\n___(___.___)",
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
          "構造体名はRect、開き括弧を続けます。",
          null,
          "プロパティ名はwidth、型はIntです。",
          null,
          "プロパティ名はheight、型はIntです。",
          "閉じ括弧で構造体定義を終了します。",
          null,
          "rにRect(width: 3, height: 4)を代入します。",
          null,
          "print(r.width)でwidthを出力します。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["width", "height", "Rect", "Int", "}", "r", "{", "3", "4", "print"]
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
      "holeyCode": "// classでクラスを定義\\nclass ___ ___\\n    // nameプロパティ\\n    var ___: ___\\n    // initでイニシャライザ\\n    ___(___: ___) ___\\n        // selfで自身のプロパティにアクセス\\n        ___.___ = ___\\n    ___\\n___\\n// インスタンスを作成\\nlet ___ = ___(___ ___)\\n// nameを出力\\n___(___.___)",
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
          "クラス名はCat、開き括弧を続けます。",
          null,
          "プロパティ名はname、型はStringです。",
          null,
          "init(name: String)でイニシャライザを定義します。",
          null,
          "self.nameにnameを代入します。",
          "閉じ括弧でイニシャライザを終了します。",
          "閉じ括弧でクラス定義を終了します。",
          null,
          "catにCat(name: \"タマ\")を代入します。",
          null,
          "print(cat.name)でnameを出力します。"
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["name", "init", "self", "\"タマ\"", "Cat", "String", "}", "cat", "{", "print", ":", "name:"]
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
      "correctCode": "// protocolでプロトコルを定義\\nprotocol Speaker {\\n    // speakメソッドを宣言\\n    func speak()\\n}\\n// Speakerに準拠\\nstruct Dog: Speaker {\\n    // speakメソッドを実装\\n    func speak() {\\n        // ワン！と出力\\n        print(\"ワン！\")\\n    }\\n}\\n// インスタンスを作成\\nlet d = Dog()\\n// speakを呼び出し\\nd.speak()",
      "holeyCode": "// protocolでプロトコルを定義\\nprotocol ___ ___\\n    // speakメソッドを宣言\\n    func ___()\\n___\\n// Speakerに準拠\\nstruct ___: ___ ___\\n    // speakメソッドを実装\\n    func ___() ___\\n        // ワン！と出力\\n        ___(___)\\n    ___\\n___\\n// インスタンスを作成\\nlet ___ = ___()\\n// speakを呼び出し\\n___.___() ",
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
          "        // ワン！と出力",
          "        print(\"ワン！\")",
          "    }",
          "}",
          "// インスタンスを作成",
          "let d = Dog()",
          "// speakを呼び出し",
          "d.speak()"
        ],
      "lineHints": [
          null,
          "プロトコル名はSpeaker、開き括弧を続けます。",
          null,
          "speakメソッドを宣言します。",
          "閉じ括弧でプロトコル定義を終了します。",
          null,
          "構造体DogがSpeakerに準拠します。",
          null,
          "speakメソッドを実装します。",
          null,
          "print(\"ワン！\")で出力します。",
          "閉じ括弧でメソッドを終了します。",
          "閉じ括弧で構造体を終了します。",
          null,
          "dにDog()を代入します。",
          null,
          "d.speak()でメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "protocol"
          ],
          "others": ["speak", "Speaker", "\"ワン！\"", "Dog", "}", "print", "d", "{"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ワン！\\n"
          }
        ]
      },
    {
      "title": "クロージャを使おう",
      "correctCode": "// inで引数と処理を分ける\\nlet double = { (n: Int) in\\n    // n * 2を返す\\n    return n * 2\\n}\\n// doubleを呼び出し\\nprint(double(5))",
      "holeyCode": "// inで引数と処理を分ける\\nlet ___ = ___ (___: ___) in\\n    // n * 2を返す\\n    return ___ ___ ___\\n___\\n// doubleを呼び出し\\n___(___(___))",
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
          "doubleに{ (n: Int) inでクロージャを定義します。",
          null,
          "return n * 2で2倍を返します。",
          "閉じ括弧でクロージャを終了します。",
          null,
          "print(double(5))で結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "in"
          ],
          "others": ["*", "double", "2", "}", "5", "n", "Int", "{", "print"]
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
      "holeyCode": "// numsに[1, 2, 3]を代入\\nlet ___ = ___\\n// nums.mapで各要素を2乗しsquaredに代入\\nlet ___ = ___.___ ___ ___ ___ ___ ___\\n// squaredをprintで出力\\n___(___)",
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
          "numsに[1, 2, 3]を代入します。",
          null,
          "nums.map { $0 * $0 }で各要素を2乗します。",
          null,
          "print(squared)で結果を出力します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["[1, 2, 3]", "squared", "nums", "{", "$0", "*", "}", "print"]
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
      "holeyCode": "// numsに[1, 2, 3, 4, 5]を代入\\nlet ___ = ___\\n// nums.filterで3以上を抽出しresultに代入\\nlet ___ = ___.___ ___ ___ ___ ___ ___\\n// resultをprintで出力\\n___(___)",
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
          "numsに[1, 2, 3, 4, 5]を代入します。",
          null,
          "nums.filter { $0 >= 3 }で3以上を抽出します。",
          null,
          "print(result)で結果を出力します。"
        ],
        "candidates": {
          "functions": [
            "filter"
          ],
          "others": ["[1, 2, 3, 4, 5]", "result", "nums", "{", "$0", ">=", "3", "}", "print"]
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
      "holeyCode": "// check関数を定義\\nfunc ___(___ ___: ___?) ___\\n    // guardで早期リターン\\n    guard let ___ = ___ else ___\\n        // nilと出力\\n        ___(___)\\n        // 早期リターン\\n        ___\\n    ___\\n    // nを出力\\n    ___(___)\\n___\\n// 関数を呼び出し\\n___(___)",
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
          "func check(_ val: Int?)で関数を定義します。",
          null,
          "guard let n = val elseで条件をチェックします。",
          null,
          "print(\"nil\")でnilと出力します。",
          null,
          "returnで関数を早期終了します。",
          "閉じ括弧でelseブロックを終了します。",
          null,
          "print(n)でnを出力します。",
          "閉じ括弧で関数を終了します。",
          null,
          "check(10)で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "guard", "return"
          ],
          "others": ["check", "\"nil\"", "n", "_", "val", "Int", "print", "}", "10", "{"]
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
      "holeyCode": "// enumで列挙型を定義\\nenum ___ ___\\n    // caseでケースを定義\\n    case ___, ___, ___\\n___\\n// Color.redを代入\\nlet ___ = ___.___\\n// switchでパターンマッチ\\nswitch ___ ___\\ncase .___:\\n    // 赤色を出力\\n    ___(___)\\ncase .___:\\n    // 緑色を出力\\n    ___(___)\\ncase .___:\\n    // 青色を出力\\n    ___(___)\\n___",
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
          "列挙型名はColor、開き括弧を続けます。",
          null,
          "case red, green, blueでケースを定義します。",
          "閉じ括弧で列挙型定義を終了します。",
          null,
          "cにColor.redを代入します。",
          null,
          "switch c {でパターンマッチを開始します。",
          "case .red:で赤のケースを処理します。",
          null,
          "print(\"赤\")で赤色を出力します。",
          "case .green:で緑のケースを処理します。",
          null,
          "print(\"緑\")で緑色を出力します。",
          "case .blue:で青のケースを処理します。",
          null,
          "print(\"青\")で青色を出力します。",
          "閉じ括弧でswitch文を終了します。"
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["red", "c", "green", "blue", "Color", "}", "print", "{", "\"赤\"", "\"緑\"", "\"青\""]
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
