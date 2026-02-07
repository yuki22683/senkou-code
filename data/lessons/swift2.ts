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
            "content": "# 「あるかもしれない」を表す仕組み\\n\\n**オプショナル** は、「値があるかもしれないし、ないかもしれない」ことを表す仕組みです。\\n\\n例えば、プレゼントの箱を想像してください。中身が入っているかもしれないし、空っぽかもしれません。\\n\\n**nil（ニル）** は「何もない」という意味の特別な値です。"
          },
          {
            "title": "オプショナルの宣言方法",
            "content": "# 型の後に ? をつける\\n\\n型名の後に **?（クエスチョンマーク）** をつけると、オプショナル型になります。\\n\\n```swift\\nvar name: String? = \"Taro\"  // 値がある\\nname = nil  // 値をなくす（OK）\\n```\\n\\n`String?` は「文字列があるかもしれないし、nilかもしれない」という意味です。"
          },
          {
            "title": "オプショナルを使う理由",
            "content": "# 安全なプログラムを作るため\\n\\nSwiftでは、普通の変数に `nil` を入れることはできません。\\n\\n```swift\\nvar name: String = \"Taro\"\\nname = nil  // エラーになる！\\n```\\n\\nオプショナルを使うことで、「この変数はnilになるかもしれないよ」と明示的に示せます。"
          },
          {
            "title": "アンラップとは？",
            "content": "# 包みを開けて中身を取り出す\\n\\nオプショナルは「箱に入った状態」なので、中身を使うには **アンラップ（包みを開ける）** が必要です。\\n\\n`!` をつけると強制的に開けられます。\\n\\n```swift\\nvar num: Int? = 42\\nprint(num!)  // 42（箱を開けて中身を表示）\\n```\\n\\n**注意：** nilのとき`!`を使うとエラーになります。"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["nil", "!", "42", "num", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\
"
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
            "content": "# 安全に箱を開ける方法\\n\\n**if let（イフ・レット）** は、オプショナルを安全に開ける方法です。\\n\\n`!` を使った強制アンラップは、中身がないとエラーになります。でも **if let** なら、中身があるときだけ処理できます。\\n\\n宅配便の不在票をイメージしてください。荷物が届いていれば受け取る、届いていなければ何もしない、という感じです。"
          },
          {
            "title": "if let の書き方",
            "content": "# 値があれば取り出す\\n\\n```swift\\nif let 新しい変数名 = オプショナル変数 {\\n    // 値があるときの処理\\n}\\n```\\n\\n**コード例：**\\n```swift\\nvar name: String? = \"Taro\"\\nif let n = name {\\n    print(n)  // \"Taro\"と表示される\\n}\\n```\\n\\n`name` に値があれば `n` に取り出して使えます。nilなら `{ }` の中は実行されません。"
          },
          {
            "title": "if let が安全な理由",
            "content": "# エラーを防げる\\n\\n**強制アンラップ（!）の場合：**\\n```swift\\nvar num: Int? = nil\\nprint(num!)  // エラー！クラッシュする\\n```\\n\\n**if let の場合：**\\n```swift\\nvar num: Int? = nil\\nif let n = num {\\n    print(n)  // 実行されない（安全）\\n}\\n```\\n\\nnilのときは何も起きないので、安全です。"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["?", "print", "100", "val", "n", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\
"
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
            "title": "構造体（こうぞうたい）とは？",
            "content": "# データをまとめる「型紙」\\n\\n**構造体（struct・ストラクト）** は、関連するデータをひとまとめにする仕組みです。\\n\\n例えば、ゲームのキャラクターには「名前」「HP」「攻撃力」などのデータがありますよね。これらをバラバラに管理するのは大変です。\\n\\n構造体を使えば、これらを1つのまとまりとして扱えます。"
          },
          {
            "title": "構造体の作り方",
            "content": "# struct で定義する\\n\\n**struct（ストラクト）** は「構造」という意味の英語です。\\n\\n```swift\\nstruct Point {\\n    var x: Int  // x座標\\n    var y: Int  // y座標\\n}\\n```\\n\\nこれで「Point」という新しい型ができました。x座標とy座標の2つのデータを持ちます。"
          },
          {
            "title": "構造体を使う",
            "content": "# インスタンスを作る\\n\\n構造体から実際のデータを作ることを **インスタンス化** と言います。\\n\\n```swift\\nlet p = Point(x: 3, y: 4)\\nprint(p.x)  // 3\\nprint(p.y)  // 4\\n```\\n\\n`Point(x: 3, y: 4)` で、x=3、y=4の点を作っています。`.`（ドット）で各データにアクセスできます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n四角形（しかくけい）を表す構造体を作りましょう。\\n\\n1. `Rect` という構造体を作る\\n2. `width`（横幅）と `height`（高さ）を持たせる\\n3. インスタンスを作って `width` を表示する"
          }
        ],
        "initialDisplayMode": "holey",
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
          "width と入力しましょう。",
          null,
          "height と入力しましょう。",
          "自動生成されるイニシャライザを使います。",
          null,
          "width と入力しましょう。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["width", "height", "Rect", "Int", "}", "r"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\
"
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
            "content": "# オブジェクトの「設計図」\\n\\n**クラス（class）** は、構造体（struct）に似ていますが、いくつか違いがあります。\\n\\nクラスは **参照型（さんしょうがた）** です。コピーしても、同じものを指し続けます。\\n\\n例えると、構造体は「コピー機でコピーした別の紙」、クラスは「同じ紙を複数の人で見ている」イメージです。"
          },
          {
            "title": "クラスの定義方法",
            "content": "# class で作る\\n\\n```swift\\nclass Dog {\\n    var name: String\\n}\\n```\\n\\n構造体とよく似ていますが、**class** というキーワードを使います。"
          },
          {
            "title": "init（イニシャライザ）とは？",
            "content": "# 初期設定をする場所\\n\\n**init（イニット）** は、インスタンスを作るときの初期設定です。「initialize（初期化）」の略です。\\n\\n```swift\\nclass Dog {\\n    var name: String\\n    init(name: String) {\\n        self.name = name\\n    }\\n}\\n```\\n\\n`self.name` の **self** は「自分自身」を指します。「このクラスのnameに、もらったnameを入れる」という意味です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\nネコのクラスを作りましょう。\\n\\n1. `Cat` というクラスを作る\\n2. `name` プロパティを持たせる\\n3. `init` で名前を設定できるようにする\\n4. 「Tama」という名前のネコを作って表示する"
          }
        ],
        "initialDisplayMode": "holey",
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
          "name と入力しましょう。",
          null,
          "init でイニシャライザを定義します。",
          null,
          "self と入力しましょう。",
          "Tama と入力しましょう。",
          "name と入力しましょう。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "class"
          ],
          "others": ["name", "init", "self", "Tama", "Cat", "String", "}", "cat"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "タマ\
"
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
            "content": "# 「約束事」を定義する仕組み\\n\\n**プロトコル（protocol）** は、「この機能を持っていてね」という約束事を定義する仕組みです。\\n\\n例えば、「話せる」というプロトコルがあれば、人も動物も「話す」機能を持つことを約束します。\\n\\n他の言語では「インターフェース」と呼ばれることもあります。"
          },
          {
            "title": "プロトコルの作り方",
            "content": "# protocol で定義する\\n\\n```swift\\nprotocol Greet {\\n    func hello()  // 「hello()を持っていてね」という約束\\n}\\n```\\n\\nこれは「Greetに準拠するなら、hello()という関数を持っていてね」という意味です。\\n\\n**注意：** プロトコルでは中身は書かず、「名前だけ」宣言します。"
          },
          {
            "title": "プロトコルに準拠する",
            "content": "# : プロトコル名 で準拠を宣言\\n\\n```swift\\nstruct Person: Greet {  // Greetに準拠\\n    func hello() {\\n        print(\"こんにちは\")  // 中身を実装\\n    }\\n}\\n```\\n\\n「準拠（じゅんきょ）」とは、約束を守ることです。\\n\\nプロトコルで宣言された関数の中身を、実際に書きます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n「話せる」プロトコルを作って、犬に準拠させましょう。\\n\\n1. `Speaker` プロトコルを作る\\n2. `speak()` という関数を宣言\\n3. `Dog` 構造体を `Speaker` に準拠させる\\n4. `speak()` で「woof」と鳴くようにする"
          }
        ],
        "initialDisplayMode": "holey",
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
          "woof と入力しましょう。",
          null,
          "Dog と入力しましょう。",
          "speak と入力しましょう。",
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
          "others": ["speak", "Speaker", "woof", "Dog", "speak()", "}", "print", "d"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "woof\
"
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
            "content": "# 名前のない関数\\n\\n**クロージャ（closure）** は、名前をつけずに作る関数です。「閉じ込める」という意味の英語から来ています。\\n\\n普通の関数は `func 名前() { }` と名前をつけますが、クロージャは名前なしでサッと作れます。\\n\\n使い捨ての短い処理を書きたいときに便利です。"
          },
          {
            "title": "クロージャの書き方",
            "content": "# { 引数 in 処理 }\\n\\nクロージャは `{ }` で囲んで書きます。\\n\\n```swift\\n{ (引数) in\\n    処理\\n}\\n```\\n\\n**in（イン）** で「引数」と「処理」を区切ります。"
          },
          {
            "title": "クロージャの例",
            "content": "# 変数に入れて使う\\n\\n```swift\\nlet add = { (a: Int, b: Int) in\\n    return a + b\\n}\\nprint(add(2, 3))  // 5\\n```\\n\\n`add` という変数に「2つの数を足す」クロージャを入れています。\\n\\n`add(2, 3)` で普通の関数のように呼び出せます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n数を2倍にするクロージャを作りましょう。\\n\\n1. `double` という変数にクロージャを入れる\\n2. 引数 `n` を受け取る\\n3. `n * 2` を返す\\n4. `double(5)` で10と表示されるか確認"
          }
        ],
        "initialDisplayMode": "holey",
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
          "double と入力しましょう。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "in"
          ],
          "others": ["*", "double", "2", "}", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\
"
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
            "title": "map（マップ）とは？",
            "content": "# 全部まとめて変換する\\n\\n**map（マップ）** は、配列の各要素を変換して新しい配列を作る機能です。\\n\\n例えば、テストの点数リストがあって、全員に10点ボーナスをあげたいとき、mapを使えば一発で全員の点数を変換できます。\\n\\nfor文で1つずつ処理するより、ずっと短く書けます。"
          },
          {
            "title": "$0 という省略記法",
            "content": "# $0 は「最初の引数」\\n\\nクロージャでは **$0（ドルゼロ）** で「最初の引数」を表せます。\\n\\n```swift\\n{ n in n * 2 }  // 普通の書き方\\n{ $0 * 2 }      // $0を使った短い書き方\\n```\\n\\n`$0` は1つ目の引数、`$1` は2つ目の引数...という意味です。"
          },
          {
            "title": "map の使い方",
            "content": "# 配列.map { 変換処理 }\\n\\n```swift\\nlet nums = [1, 2, 3]\\nlet doubled = nums.map { $0 * 2 }\\n// doubled は [2, 4, 6]\\n```\\n\\n各要素（1, 2, 3）をそれぞれ2倍して、新しい配列（2, 4, 6）を作っています。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n配列の各数を2乗（じじょう：同じ数を2回かける）しましょう。\\n\\n- `[1, 2, 3]` → `[1, 4, 9]` に変換\\n- `$0 * $0` で2乗できます"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "[1, 4, 9]\
"
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
            "title": "filter（フィルター）とは？",
            "content": "# 条件に合うものだけ残す\\n\\n**filter（フィルター）** は、条件に合う要素だけを残して新しい配列を作る機能です。\\n\\nコーヒーのフィルターが豆かすを取り除くように、条件に合わないものを取り除きます。\\n\\n例：テストの点数リストから、合格点（60点以上）の人だけを抽出する"
          },
          {
            "title": "filter の仕組み",
            "content": "# true/false で判定\\n\\nfilterに渡すクロージャは、各要素について「残す（true）」か「取り除く（false）」を判定します。\\n\\n```swift\\n[1, 2, 3, 4, 5].filter { $0 > 3 }\\n// 1 > 3 → false（取り除く）\\n// 2 > 3 → false（取り除く）\\n// 3 > 3 → false（取り除く）\\n// 4 > 3 → true（残す）\\n// 5 > 3 → true（残す）\\n// 結果: [4, 5]\\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n配列から3以上の数だけを取り出しましょう。\\n\\n- `[1, 2, 3, 4, 5]` から\\n- 3以上（`$0 >= 3`）のものを残す\\n- 結果は `[3, 4, 5]` になるはず"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "[3, 4, 5]\
"
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
            "title": "guard（ガード）とは？",
            "content": "# 「ダメならすぐ出る」仕組み\\n\\n**guard（ガード）** は、条件を満たさない場合にすぐ関数から出る仕組みです。\\n\\n「guard」は英語で「守る」という意味。プログラムを問題から守ります。\\n\\n入り口で身分証をチェックして、持っていなければ入れないゲートのようなイメージです。"
          },
          {
            "title": "guard の書き方",
            "content": "# guard 条件 else { 脱出 }\\n\\n```swift\\nguard 条件 else {\\n    return  // 条件を満たさないなら脱出\\n}\\n// ここからは条件を満たしている\\n```\\n\\n`else { }` の中には必ず関数から出る処理（return）を書きます。"
          },
          {
            "title": "guard let でオプショナルを開く",
            "content": "# nilなら即リターン\\n\\n```swift\\nfunc check(_ val: Int?) {\\n    guard let n = val else {\\n        print(\"nil\")  // 値がないときの処理\\n        return        // 関数から出る\\n    }\\n    print(n)  // 値があるとき、nが使える\\n}\\n```\\n\\n**if let** と違い、取り出した変数 `n` を関数全体で使えるのがポイントです。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\nオプショナルの値をguardでチェックする関数を作りましょう。\\n\\n1. `check` 関数を作る\\n2. 引数がnilなら「nil」と表示してreturn\\n3. 値があれば、その値を表示\\n4. `check(10)` で10と表示されるか確認"
          }
        ],
        "initialDisplayMode": "holey",
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
          "nil と入力しましょう。",
          null,
          "関数の実行を終了し、呼び出し元に戻ります。",
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。",
          "ここを正しく入力してください。",
          null,
          "check と入力しましょう。"
        ],
        "candidates": {
          "keywords": [
            "guard"
          ],
          "others": ["check", "nil", "return", "n", "check(_", "else", "print", "}", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\
"
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
            "title": "列挙型（れっきょがた）とは？",
            "content": "# 決まった選択肢を定義する\\n\\n**enum（イーナム）** は「列挙型（れっきょがた）」を作る仕組みです。「enumerate（列挙する）」の略です。\\n\\n例えば、信号は「赤・黄・青」の3つしかありませんよね。こういう「決まった選択肢」を定義するのに使います。\\n\\n曜日（月〜日）や、方向（上下左右）なども同じです。"
          },
          {
            "title": "enum の作り方",
            "content": "# case で選択肢を定義\\n\\n```swift\\nenum Direction {\\n    case up      // 上\\n    case down    // 下\\n    case left    // 左\\n    case right   // 右\\n}\\n```\\n\\n**case（ケース）** は「場合」という意味です。各選択肢を case で定義します。"
          },
          {
            "title": "enum を使う",
            "content": "# switch でパターンマッチング\\n\\n```swift\\nlet d = Direction.up\\n\\nswitch d {\\ncase .up:\\n    print(\"上\")\\ncase .down:\\n    print(\"下\")\\n// ... 他のcase\\n}\\n```\\n\\n**switch** で「どのケースか」を判定できます。`.` だけで省略して書けます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n色の列挙型を作って、switchで判定しましょう。\\n\\n1. `Color` enumを作る（red, green, blue）\\n2. `Color.red` を変数に入れる\\n3. switchで各ケースを判定して色名を表示"
          }
        ],
        "initialDisplayMode": "holey",
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
          "red を入力しましょう。",
          "red を入力しましょう。",
          null,
          "c を入力しましょう。",
          null,
          "red を入力しましょう。",
          "green を入力しましょう。",
          null,
          "blue を入力しましょう。",
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
          "others": ["red", "c", "green", "blue", "Color", "}", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "赤\
"
          }
        ]
      }
  ]
}
