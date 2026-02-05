export const go2Data = {
  "language": "go",
  "lessonId": "go-2",
  "lessonTitle": "Go II - 構造体と並行処理",
  "lessonDescription": "Go言語の強力な機能「構造体」「インターフェース」「ゴルーチン」を学びます。並行処理ができるGo言語の真の力を体験しましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
        "title": "複数の値を返す関数",
        "description": "Go言語では、関数から複数の値を返すことができます。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "複数の戻り値（もどりち）",
            "content": "# 関数から2つ以上の結果を返す\\n\\n普通の関数は結果を1つだけ返しますが、Go言語では **2つ以上の値** を同時に返すことができます！\\n\\n**たとえば：**\\n- わり算の「答え」と「あまり」を同時に返す\\n- 「結果」と「うまくいったかどうか」を同時に返す\\n\\nこれは他の言語にはあまりない、Go言語の便利な機能です。"
          },
          {
            "title": "戻り値の書き方",
            "content": "# カッコで複数の型を指定\\n\\n戻り値（もどりち）の型を `(型1, 型2)` のように、かっこで囲んで書きます。\\n\\n**コード例：**\\n```go\\n// わり算の答えとあまりを両方返す関数\\nfunc divide(a, b int) (int, int) {\\n    return a / b, a % b  // 2つの値を返す\\n}\\n\\n// 2つの変数で受け取る\\nq, r := divide(10, 3)\\n// q=3（答え）, r=1（あまり）\\n```\\n\\n**ポイント：**\\n- `return` のあとにカンマで区切って複数の値を書く\\n- 受け取るときもカンマで区切った変数で受ける"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\nfunc minmax(a, b int) (int, int) {\\n    if a < b {\\n        // return で複数の値を返す\\n        return a, b\\n    }\\n    // return で2つの値を返す\\n    return b, a\\n}\\nfunc main() {\\n    // 関数から2つの戻り値を受け取る\\n    min, max := minmax(5, 3)\\n    fmt.Println(min, max)\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___ (a, b int) (int, int) {\\n    if a < ___ {\\n        // return で複数の値を返す\\n        return a, ___\\n    ___\\n    // return で2つの値を返す\\n    return b, ___\\n___\\nfunc ___ () {\\n    // 関数から2つの戻り値を受け取る\\n    min, max := minmax(___, 3)\\n    fmt.___(min, max)\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "func minmax(a, b int) (int, int) {",
          "    if a < b {",
          "        // return で複数の値を返す",
          "        return a, b",
          "    }",
          "    // return で2つの値を返す",
          "    return b, a",
          "}",
          "func main() {",
          "    // 関数から2つの戻り値を受け取る",
          "    min, max := minmax(5, 3)",
          "    fmt.Println(min, max)",
          "}"
        ],
        "lineHints": [
          "return で複数の値を返します。",
          "return で複数の値を返します。",
          "関数名 minmax を入力して呼び出します。",
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
          "keywords": [
            "return"
          ],
          "others": ["minmax", "main", "fmt", "minmax(a,", "b", "}", "a", "main()", "5", "Println", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3 5\\n"
          }
        ]
      },
    {
        "title": "エラー処理の基本",
        "description": "Go言語でのエラーの扱い方を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "エラーを返す",
            "content": "# error（エラー）型で問題を伝える\\n\\nプログラムは時々うまくいかないことがあります。Go言語では、問題が起きたことを `error`（エラー）型で伝えます。\\n\\n**たとえば：**\\n- ファイルが見つからない\\n- 0で割り算しようとした\\n- ネットワークがつながらない\\n\\n**Go言語のルール：**\\n- 問題がなければ `nil`（ニル＝「何もない」という意味）を返す\\n- 問題があれば `error` を返す\\n\\n`nil` は「空っぽ」「何もない」という特別な値です。"
          },
          {
            "title": "エラーのチェック",
            "content": "# エラーがあるかどうか確認しよう\\n\\n関数を呼んだあと、エラーが起きていないかチェックするのがGo言語の作法です。\\n\\n**コード例：**\\n```go\\n// 結果とエラーの両方を受け取る\\nresult, err := someFunc()\\n\\n// err が nil じゃなければエラーが起きている\\nif err != nil {\\n    fmt.Println(\"エラーが起きました！\")\\n}\\n```\\n\\n**チェックの流れ：**\\n1. 関数から「結果」と「エラー」を受け取る\\n2. `err != nil` でエラーがあるか確認\\n3. エラーがあれば対処、なければ続行"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport (\\n    \"エラーs\"\\n    \"fmt\"\\n)\\nfunc check(n int) (int, error) {\\n    if n < 0 {\\n        // errors.New でエラーを作成\\n        return 0, errors.New(\"negative\")\\n    }\\n    // nil でエラーなしを表す\\n    return n, nil\\n}\\nfunc main() {\\n    // 関数から2つの戻り値を受け取る\\n    val, err := check(5)\\n    if err != nil {\\n        fmt.Println(err)\\n    } else {\\n        fmt.Println(val)\\n    }\\n}",
        "holeyCode": "package ___\\nimport ___\\n    \"___\"\\n    \\\"___\\\"\\n___\\nfunc ___ (n int) (int, error) {\\n    if n ___ 0 {\\n        // errors.New でエラーを作成\\n        return 0, errors.New(\"___\")\\n    ___\\n    // nil でエラーなしを表す\\n    return n, ___\\n___\\nfunc ___ () {\\n    // 関数から2つの戻り値を受け取る\\n    val, err := check(___)\\n    if err != ___ {\\n        fmt.___(err)\\n    } ___ {\\n        fmt.___(val)\\n    ___\\n___",
        "correctLines": [
          "package main",
          "import (",
          "    \"エラーs\"",
          "    \"fmt\"",
          ")",
          "func check(n int) (int, error) {",
          "    if n < 0 {",
          "        // errors.New でエラーを作成",
          "        return 0, errors.New(\"negative\")",
          "    }",
          "    // nil でエラーなしを表す",
          "    return n, nil",
          "}",
          "func main() {",
          "    // 関数から2つの戻り値を受け取る",
          "    val, err := check(5)",
          "    if err != nil {",
          "        fmt.Println(err)",
          "    } else {",
          "        fmt.Println(val)",
          "    }",
          "}"
        ],
        "lineHints": [
          "errors.New でエラーオブジェクトを作成します。",
          "エラーがないときは nil を返します。",
          "関数名 check を入力して呼び出します。",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "nil"
          ],
          "others": ["New", "check", "main", "(", "errors", "fmt", ")", "check(n", "<", "negative", "}", "main()", "5", "Println", "else", "mt\"", "エラーs"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
        "title": "ポインタを使おう",
        "description": "変数のアドレスを扱う「ポインタ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "ポインタとは？",
            "content": "# 変数の「住所」を覚えておく\\n\\n**ポインタ** は、変数がコンピュータのどこに保存されているかを指し示す「住所」のようなものです。\\n\\n**たとえるなら：**\\n- 変数 = 家\\n- ポインタ = その家の住所\\n\\n住所を知っていれば、直接その家に行って中身を変えることができます。\\n\\n**2つの記号：**\\n- `&`（アンパサンド）：変数の「住所」を取得\\n- `*`（アスタリスク）：住所を使って「中身」にアクセス"
          },
          {
            "title": "ポインタの使い方",
            "content": "# & と * の使い分け\\n\\n`&` は「住所を調べる」、`*` は「住所を使って中身を見る・変える」という意味です。\\n\\n**コード例：**\\n```go\\nx := 10      // x という変数に 10 を入れる\\np := &x      // p に x の住所を入れる\\n*p = 20      // 住所を使って中身を 20 に変更\\nfmt.Println(x)  // 20 が表示される！\\n```\\n\\n**なぜ便利？**\\n- 関数に変数を渡すとき、コピーではなく本体を渡せる\\n- 大きなデータをコピーせずに扱える\\n- 「中身を変更できる」関数が作れる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    x := 5\\n    // & でアドレスを取得\\n    p := &x\\n    // *p でポインタの値を変更\\n    *p = 10\\n    fmt.Println(x)\\n}", "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___ () {\\n    ___ := 5\\n    // & でアドレスを取得\\n    ___ := &x\\n    // *p でポインタの値を変更\\n    *p = 10\\n    fmt.___(x)\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    x := 5",
          "    // & でアドレスを取得",
          "    p := &x",
          "    // *p でポインタの値を変更",
          "    *p = 10",
          "    fmt.Println(x)",
          "}"
        ],
        "lineHints": [
          "& でアドレスを取得します。",
          "*p で値を変更します。",
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
          "operators": [
            "&"
          ],
          "others": ["*", "main", "fmt", "main()", "x", "p", "Println", "}", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
        "title": "構造体を定義しよう",
        "description": "関連するデータをまとめる「構造体」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "構造体（こうぞうたい）とは？",
            "content": "# いくつかのデータをまとめる「設計図」\\n\\n**構造体（struct・ストラクト）** は、関係のあるデータをひとまとめにする仕組みです。\\n\\n**たとえば「人」のデータ：**\\n- 名前（Name）\\n- 年齢（Age）\\n- 身長（Height）\\n\\nこれらをバラバラに管理するのは大変です。構造体を使えば「人」という1つの入れ物にまとめられます。\\n\\n**イメージ：**\\n構造体は「データの設計図」のようなもの。どんな情報を持つかを決めておきます。"
          },
          {
            "title": "struct の定義のしかた",
            "content": "# type で新しい型を作る\\n\\n`type 名前 struct { }` で構造体を定義します。中にはフィールド（項目）を書きます。\\n\\n**コード例：**\\n```go\\n// Person という構造体を定義\\ntype Person struct {\\n    Name string  // 名前フィールド（文字列）\\n    Age  int     // 年齢フィールド（整数）\\n}\\n\\n// 構造体を使ってデータを作る\\np := Person{Name: \"Taro\", Age: 20}\\nfmt.Println(p.Name)  // Taro が表示される\\n```\\n\\n**ポイント：**\\n- `type 名前 struct` で設計図を作る\\n- `{ }` の中にフィールド名と型を書く\\n- `.フィールド名` でデータにアクセス"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\n// Point構造体を定義\\ntype Point struct {\\n    // フィールド名と型を定義\\n    X int\\n    Y int\\n}\\nfunc main() {\\n    // 構造体を初期化\\n    p := Point{X: 3, Y: 4}\\n    fmt.Println(p.X)\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\n// Point構造体を定義\\ntype Point ___ {\\n    // フィールド名と型を定義\\n    X ___\\n    Y ___\\n___\\nfunc ___ () {\\n    // 構造体を初期化\\n    ___ := Point{X: 3, Y: 4}\\n    fmt.___(p.X)\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "// Point構造体を定義",
          "type Point struct {",
          "    // フィールド名と型を定義",
          "    X int",
          "    Y int",
          "}",
          "func main() {",
          "    // 構造体を初期化",
          "    p := Point{X: 3, Y: 4}",
          "    fmt.Println(p.X)",
          "}"
        ],
        "lineHints": [
          "struct で構造体を定義します。",
          "int 型のフィールドを定義します。",
          null,
          "Y に 4 を指定して構造体を初期化します。",
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
          "keywords": [
            "struct"
          ],
          "others": ["int", "4", "main", "fmt", "}", "main()", "p", "Println", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
        "title": "メソッドを作ろう",
        "description": "構造体に関連付けられた関数「メソッド」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "メソッドとは？",
            "content": "# 構造体に「できること」を追加\\n\\n**メソッド** は、構造体に関連づけられた特別な関数です。「この構造体は何ができるか」を定義します。\\n\\n**たとえば「四角形」構造体なら：**\\n- 面積を計算する\\n- 周囲の長さを計算する\\n- 大きさを2倍にする\\n\\nこれらの「できること」をメソッドとして追加できます。\\n\\n**普通の関数との違い：**\\n- 普通の関数：単独で動く\\n- メソッド：特定の構造体と一緒に動く"
          },
          {
            "title": "メソッドの定義のしかた",
            "content": "# レシーバ（受け取り手）を指定\\n\\n`func (r 型) メソッド名()` と書きます。`(r 型)` の部分を「レシーバ（受け取り手）」と呼びます。\\n\\n**コード例：**\\n```go\\n// Rect構造体に Area メソッドを追加\\nfunc (r Rect) Area() int {\\n    return r.W * r.H  // 幅 × 高さ\\n}\\n\\n// 使い方\\nrect := Rect{W: 3, H: 4}\\nfmt.Println(rect.Area())  // 12 が表示される\\n```\\n\\n**読み方：**\\n- `(r Rect)` → 「Rect型のrが」\\n- `Area()` → 「Area というメソッドを持つ」\\n- `r.W * r.H` → 「自分のWとHを使って計算」"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\ntype Rect struct {\\n    W int\\n    H int\\n}\\nfunc (r Rect) Area() int {\\n    // * でかけ算\\n    return r.W * r.H\\n}\\nfunc main() {\\n    // 構造体を初期化\\n    rect := Rect{W: 3, H: 4}\\n    // メソッドを呼び出す\\n    fmt.Println(rect.Area())\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\ntype Rect ___ {\\n    W ___\\n    H ___\\n___\\nfunc (r Rect) Area() ___ {\\n    // * でかけ算\\n    return r.W * r.___\\n___\\nfunc ___ () {\\n    // 構造体を初期化\\n    ___ := Rect{W: 3, H: 4}\\n    // メソッドを呼び出す\\n    fmt.___(rect.Area())\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "type Rect struct {",
          "    W int",
          "    H int",
          "}",
          "func (r Rect) Area() int {",
          "    // * でかけ算",
          "    return r.W * r.H",
          "}",
          "func main() {",
          "    // 構造体を初期化",
          "    rect := Rect{W: 3, H: 4}",
          "    // メソッドを呼び出す",
          "    fmt.Println(rect.Area())",
          "}"
        ],
        "lineHints": [
          "* で掛け算します。",
          "H に 4 を指定して構造体を初期化します。",
          "メソッド名 Area を入力して呼び出します。",
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
          "operators": [
            "*"
          ],
          "others": ["4", "Area", "main", "fmt", "struct", "int", "}", "H", "main()", "rect", "Println", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
        "title": "インターフェースを使おう",
        "description": "共通の振る舞いを定義する「インターフェース」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "インターフェースとは？",
            "content": "# 「約束事」を決める仕組み\\n\\n**インターフェース** は、「この型には絶対このメソッドがあるよ」という約束を定義します。\\n\\n**たとえば「鳴ける動物」：**\\n- 犬は「ワン」と鳴く\\n- 猫は「ニャー」と鳴く\\n- 鳥は「ピヨピヨ」と鳴く\\n\\n全部違う鳴き方だけど、「鳴ける」という共通点があります。この「鳴ける」がインターフェースです。\\n\\n**Go言語の特徴：**\\n「このメソッドを持っていれば、自動的にそのインターフェースを満たす」という仕組みです。"
          },
          {
            "title": "interface の定義のしかた",
            "content": "# メソッドの名前だけ書く\\n\\nインターフェースには「中身」は書きません。「こういうメソッドがあるはず」という約束だけです。\\n\\n**コード例：**\\n```go\\n// Speaker インターフェースを定義\\ntype Speaker interface {\\n    Speak()  // Speak メソッドを持っている約束\\n}\\n\\n// Dog は Speak() を持つので Speaker として使える\\ntype Dog struct{}\\nfunc (d Dog) Speak() {\\n    fmt.Println(\"woof\")\\n}\\n```\\n\\n**ポイント：**\\n- `interface { }` の中にメソッド名だけ書く\\n- そのメソッドを持つ型は自動的にインターフェースを満たす\\n- 「implements」などの宣言は不要（Go言語の特徴！）"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\n// Speakerインターフェースを定義\\ntype Speaker interface {\\n    Speak()\\n}\\ntype Dog struct{}\\nfunc (d Dog) Speak() {\\n    fmt.Println(\"woof\")\\n}\\nfunc main() {\\n    // インターフェース型の変数に代入\\n    var s Speaker = Dog{}\\n    // インターフェースのメソッドを呼び出す\\n    s.Speak()\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\n// Speakerインターフェースを定義\\ntype Speaker ___ {\\n    ___()\\n___\\ntype Dog ___{}\\nfunc (d Dog) ___() {\\n    fmt.___(\"woof\")\\n___\\nfunc ___ () {\\n    // インターフェース型の変数に代入\\n    var s Speaker = ___{}\\n    // インターフェースのメソッドを呼び出す\\n    s.___()\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "// Speakerインターフェースを定義",
          "type Speaker interface {",
          "    Speak()",
          "}",
          "type Dog struct{}",
          "func (d Dog) Speak() {",
          "    fmt.Println(\"woof\")",
          "}",
          "func main() {",
          "    // インターフェース型の変数に代入",
          "    var s Speaker = Dog{}",
          "    // インターフェースのメソッドを呼び出す",
          "    s.Speak()",
          "}"
        ],
        "lineHints": [
          "interface でインターフェースを定義します。",
          "Dog{} でインスタンスを作成して代入します。",
          null,
          "メソッド名 Speak を入力して呼び出します。",
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
          "keywords": [
            "interface"
          ],
          "others": ["Dog{}", "Speak", "main", "fmt", "}", "struct", "Println", "main()", "Dog", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "woof\\n"
          }
        ]
      },
    {
        "title": "defer で後処理",
        "description": "関数の終了時に実行される「defer」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "defer（ディファー）とは？",
            "content": "# 「あとでやること」を予約する\\n\\n**defer**（ディファー）は、「関数が終わるときに必ずやること」を予約する仕組みです。\\n\\n**たとえば：**\\n- 冷蔵庫を開けたら → 必ず閉める\\n- ファイルを開いたら → 必ず閉じる\\n- 部屋に入ったら → 出るとき電気を消す\\n\\n`defer` を使うと、「開いたらすぐ横に閉じる処理を書ける」ので、閉じ忘れを防げます！"
          },
          {
            "title": "defer の使い方",
            "content": "# 書いた瞬間ではなく、最後に実行\\n\\n`defer` をつけた文は、その行を通り過ぎても実行されず、関数が終わるときに実行されます。\\n\\n**コード例：**\\n```go\\nfunc main() {\\n    defer fmt.Println(\"last\")   // あとで実行\\n    fmt.Println(\"first\")        // 先に実行\\n}\\n// 出力: first → last\\n```\\n\\n**実行の流れ：**\\n1. `defer` の行を通る → 「lastを表示」を予約\\n2. 「first」を表示\\n3. 関数が終わる → 予約していた「last」を表示\\n\\n`defer` は「関数の出口で必ず実行」と覚えましょう！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // defer で関数終了時に実行\\n    defer fmt.Println(\"end\")\\n    // これが先に実行される\\n    fmt.Println(\"start\")\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___ () {\\n    // defer で関数終了時に実行\\n    defer fmt.___(\"end\")\\n    // これが先に実行される\\n    fmt.___(\"start\")\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // defer で関数終了時に実行",
          "    defer fmt.Println(\"end\")",
          "    // これが先に実行される",
          "    fmt.Println(\"start\")",
          "}"
        ],
        "lineHints": [
          "フォーマットパッケージを使って文字列を出力します。",
          "フォーマットパッケージを使って文字列を出力します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "defer"
          ],
          "others": ["Println", "main", "fmt", "main()", "}", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "start\\nend\\n"
          }
        ]
      },
    {
        "title": "ゴルーチンで並行処理",
        "description": "軽量スレッド「ゴルーチン」を使って並行処理を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "ゴルーチンとは？",
            "content": "# 同時にいくつもの仕事をする\\n\\n**ゴルーチン** は、複数の処理を「同時に」実行する仕組みです。Go言語の大きな特徴の1つです。\\n\\n**たとえば料理：**\\n- パスタを茹でながら\\n- ソースを作りながら\\n- サラダを準備する\\n\\n1つずつやるより、同時にやった方が早いですよね！\\n\\n**プログラミングでも同じ：**\\n- ファイルをダウンロードしながら\\n- 画面を表示しながら\\n- ユーザーの入力を待つ\\n\\nこれを「並行処理（へいこうしょり）」と呼びます。"
          },
          {
            "title": "go キーワードで並行実行",
            "content": "# 「go」をつけるだけ！\\n\\n関数を呼び出すときに `go` をつけると、その関数が別のゴルーチン（別の流れ）で実行されます。\\n\\n**コード例：**\\n```go\\nfunc say(msg string) {\\n    fmt.Println(msg)\\n}\\n\\nfunc main() {\\n    go say(\"hello\")  // 別のゴルーチンで実行\\n    say(\"world\")     // こちらは普通に実行\\n}\\n```\\n\\n**ポイント：**\\n- `go 関数名()` で別のゴルーチンで実行\\n- 元の処理は待たずに次に進む\\n- 終了を待ちたい場合は別の仕組みが必要"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport (\\n    \"fmt\"\\n    \"time\"\\n)\\nfunc say(msg string) {\\n    fmt.Println(msg)\\n}\\nfunc main() {\\n    // go でゴルーチンを起動\\n    go say(\"こんにちは\")\\n    // ゴルーチンの完了を待つ\\n    time.Sleep(100 * time.Millisecond)\\n}",
        "holeyCode": "package ___\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\nfunc ___ (msg string) {\\n    fmt.___(msg)\\n___\\nfunc ___ () {\\n    // go でゴルーチンを起動\\n    go say(\"___\")\\n    // ゴルーチンの完了を待つ\\n    time.Sleep(___ * time.Millisecond)\\n___",
        "correctLines": [
          "package main",
          "import (",
          "    \"fmt\"",
          "    \"time\"",
          ")",
          "func say(msg string) {",
          "    fmt.Println(msg)",
          "}",
          "func main() {",
          "    // go でゴルーチンを起動",
          "    go say(\"こんにちは\")",
          "    // ゴルーチンの完了を待つ",
          "    time.Sleep(100 * time.Millisecond)",
          "}"
        ],
        "lineHints": [
          "go でゴルーチンを起動します。",
          "Sleep でゴルーチンの完了を待ちます。",
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
          "keywords": [
            "go"
          ],
          "others": ["Sleep", "main", "(", "fmt", "time", ")", "say(msg", "Println", "}", "main()", "hello", "100", "mt\"", "ime\"", "こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "hello\\n"
          }
        ]
      },
    {
        "title": "チャネルで通信",
        "description": "ゴルーチン間でデータをやり取りする「チャネル」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "チャネルとは？",
            "content": "# ゴルーチン同士の「通信パイプ」\\n\\n**チャネル** は、ゴルーチン同士がデータをやり取りするための「パイプ」のようなものです。\\n\\n**たとえるなら：**\\n- 筒（パイプ）の片方から手紙を入れる\\n- もう片方から手紙を受け取る\\n\\n**なぜ必要？**\\nゴルーチンは別々に動いているので、直接データを渡せません。チャネルを使えば安全にやり取りできます。\\n\\n**チャネルの作り方：**\\n```go\\nch := make(chan int)  // int型を送れるチャネル\\n```"
          },
          {
            "title": "チャネルの使い方",
            "content": "# <- で送信と受信\\n\\n矢印 `<-` の向きでデータの流れを表します。\\n\\n**送信と受信：**\\n- `ch <- 値` → チャネルに値を送る（入れる）\\n- `<-ch` → チャネルから値を受け取る（取り出す）\\n\\n**コード例：**\\n```go\\nch := make(chan int)  // チャネルを作成\\n\\n// 別のゴルーチンで送信\\ngo func() { \\n    ch <- 42  // チャネルに42を送る\\n}()\\n\\nval := <-ch  // チャネルから受け取る\\n// val は 42 になる\\n```\\n\\n**ポイント：**\\n受信側は、データが届くまで待ちます。これで同期（タイミングを合わせる）ができます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // chにmake(chan int)を代入\\n    ch := make(chan int)\\n    go func() {\\n        // チャネルに値を送信\\n        ch <- 100\\n    }()\\n    // チャネルから値を受信\\n    val := <-ch\\n    fmt.Println(val)\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___ () {\\n    // chにmake(chan int)を代入\\n    ___ := make(chan int)\\n    go ___() {\\n        // チャネルに値を送信\\n        ch <- ___\\n    ___()\\n    // チャネルから値を受信\\n    ___ := <-ch\\n    fmt.___(val)\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // chにmake(chan int)を代入",
          "    ch := make(chan int)",
          "    go func() {",
          "        // チャネルに値を送信",
          "        ch <- 100",
          "    }()",
          "    // チャネルから値を受信",
          "    val := <-ch",
          "    fmt.Println(val)",
          "}"
        ],
        "lineHints": [
          "chan でチャネルを作成します。",
          "<- でチャネルに値を送信します。",
          "<- でチャネルから値を受信します。",
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
          "keywords": [
            "chan"
          ],
          "others": ["<-", "main", "fmt", "main()", "ch", "func", "100", "}", "val", "Println", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
        "title": "無名関数とクロージャ",
        "description": "名前のない関数「無名関数」と変数を捕捉する「クロージャ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "無名関数（むめいかんすう）とは？",
            "content": "# 名前をつけない「使い捨て」の関数\\n\\n**無名関数** は、名前をつけずにその場で作る関数です。「今だけ使いたい」ときに便利です。\\n\\n**たとえば：**\\n- 1回しか使わない処理\\n- ゴルーチンですぐ実行したい処理\\n- 他の関数に渡す小さな処理\\n\\n**コード例：**\\n```go\\n// 普通の関数\\nfunc add(a, b int) int {\\n    return a + b\\n}\\n\\n// 無名関数（その場で定義）\\nresult := func(a, b int) int {\\n    return a + b\\n}(3, 5)  // すぐに実行もできる\\n```"
          },
          {
            "title": "クロージャ：外の変数を使える",
            "content": "# 周りの変数を「覚えている」関数\\n\\n無名関数は、自分の外側にある変数を使うことができます。この仕組みを **クロージャ** と呼びます。\\n\\n**コード例：**\\n```go\\nx := 10\\nfn := func() int {\\n    return x * 2  // 外側の x を使っている！\\n}\\nfmt.Println(fn())  // 20\\n```\\n\\n**イメージ：**\\n無名関数が作られたとき、周りの変数を「写真に撮って覚えておく」ようなものです。\\n\\n**使いどころ：**\\n- カウンターを作る\\n- 設定を保持したまま何度も使う関数\\n- ゴルーチンで外のデータを使う"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    n := 5\\n    // doubleに無名関数を代入\\n    double := func() int {\\n        // 外側の変数 n を参照\\n        return n * 2\\n    }\\n    fmt.Println(double())\\n}",
        "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___ () {\\n    ___ := 5\\n    // doubleに無名関数を代入\\n    ___ := func() int {\\n        // 外側の変数 n を参照\\n        return n * ___\\n    ___\\n    fmt.___(double())\\n___",
        "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    n := 5",
          "    // doubleに無名関数を代入",
          "    double := func() int {",
          "        // 外側の変数 n を参照",
          "        return n * 2",
          "    }",
          "    fmt.Println(double())",
          "}"
        ],
        "lineHints": [
          "func で無名関数を定義します。",
          "* で掛け算をして外側の n にアクセスします。",
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
          "keywords": [
            "func"
          ],
          "others": ["*", "main", "fmt", "main()", "n", "double", "2", "}", "Println", "mt\""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      }
  ]
}
