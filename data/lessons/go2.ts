export const go2Data = {
  "language": "go",
  "lessonId": "go-2",
  "lessonTitle": "Go II - 構造体と並行処理",
  "lessonDescription": "Go言語の強力な機能「構造体」「インターフェース」「ゴルーチン」を学びます。並行処理ができるGo言語の真の力を体験しましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "複数の値を返す関数",
      "content": "Go言語では、関数から複数の値を返すことができます。\\n\\n```go\\nfunc minmax(a, b int) (int, int) {\\n    if a < b {\\n        return a, b\\n    }\\n    return b, a\\n}\\n\\nmin, max := minmax(5, 3)\\n```\\n\\n戻り値の型を `(int, int)` のようにカンマで区切って書きます。"
    },
    {
      "title": "構造体 struct",
      "content": "**構造体**は、複数のデータをまとめて扱えます。\\n\\n```go\\ntype Person struct {\\n    Name string\\n    Age  int\\n}\\n\\np := Person{Name: \\\"太郎\\\", Age: 20}\\nfmt.Println(p.Name) // 太郎\\n```\\n\\n`type 名前 struct { }` で定義します。"
    },
    {
      "title": "メソッド",
      "content": "構造体に**メソッド**を追加できます。\\n\\n```go\\nfunc (p Person) Greet() string {\\n    return \\\"こんにちは、\\\" + p.Name\\n}\\n\\np := Person{Name: \\\"太郎\\\"}\\nfmt.Println(p.Greet())\\n```\\n\\n`(p Person)` はレシーバと呼ばれ、メソッドが属する型を指定します。"
    },
    {
      "title": "インターフェース",
      "content": "**インターフェース**は、メソッドの集まりを定義します。\\n\\n```go\\ntype Greeter interface {\\n    Greet() string\\n}\\n```\\n\\n同じメソッドを持つ型は、自動的にそのインターフェースを満たします。"
    },
    {
      "title": "ゴルーチン",
      "content": "**ゴルーチン**で、処理を並行して実行できます。\\n\\n```go\\ngo func() {\\n    fmt.Println(\\\"並行処理中！\\\")\\n}()\\n```\\n\\n`go` を関数呼び出しの前につけるだけです。とても簡単！"
    },
    {
      "title": "チャネル",
      "content": "**チャネル**で、ゴルーチン間でデータをやり取りします。\\n\\n```go\\nch := make(chan int)\\ngo func() { ch <- 42 }()\\nvalue := <-ch\\n```\\n\\n`<-` でデータを送受信します。"
    }
  ],
  "exercises": [
    {
      "title": "複数の値を返す関数",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "複数の戻り値",
          "content": "# 関数から2つ以上の結果を返す\\n\\n普通の関数は結果を1つだけ返しますが、Go言語では **2つ以上の値** を同時に返すことができます！\\n\\n**たとえば：**\\n- わり算の「答え」と「あまり」を同時に返す\\n- 「結果」と「うまくいったかどうか」を同時に返す\\n\\nこれは他の言語にはあまりない、Go言語の便利な機能です。"
        },
        {
          "title": "戻り値の書き方",
          "content": "# カッコで複数の型を指定\\n\\n戻り値の型を `(型1, 型2)` のように、かっこで囲んで書きます。\\n\\n**コード例：**\\n```go\\n// わり算の答えとあまりを両方返す関数\\nfunc divide(a, b int) (int, int) {\\n    return a / b, a % b  // 2つの値を返す\\n}\\n\\n// 2つの変数で受け取る\\nq, r := divide(10, 3)\\n// q=3（答え）, r=1（あまり）\\n```\\n\\n**ポイント：**\\n- `return` のあとにカンマで区切って複数の値を書く\\n- 受け取るときもカンマで区切った変数で受ける"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc minmax(a, b int) (int, int) {\\n    if a < b {\\n        // a, bの順で返す\\n        return a, b\\n    }\\n    // b, aの順で返す\\n    return b, a\\n}\\nfunc main() {\\n    // minmax関数（第1引数に5, 第2引数に3）を呼び出してmin, maxに代入\\n    min, max := minmax(5, 3)\\n    fmt.Println(min, max)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// minmax関数を定義\\nfunc ___(___,  ___ ___) (___, ___) {\\n    // 条件分岐\\n    if ___ < ___ {\\n        // a, bの順で返す\\n        return ___, ___\\n    // ブロックを閉じる\\n    ___\\n    // b, aの順で返す\\n    return ___, ___\\n// ブロックを閉じる\\n___\\n// main関数を定義\\nfunc ___() {\\n    // minmax関数（第1引数に5, 第2引数に3）を呼び出してmin, maxに代入\\n    ___, ___ := ___(___, ___)\\n    // 出力\\n    ___.___(___,  ___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func minmax(a, b int) (int, int) {",
          "    if a < b {",
          "        // a, bの順で返す",
          "        return a, b",
          "    }",
          "    // b, aの順で返す",
          "    return b, a",
          "}",
          "func main() {",
          "    // minmax関数（第1引数に5, 第2引数に3）を呼び出してmin, maxに代入",
          "    min, max := minmax(5, 3)",
          "    fmt.Println(min, max)",
          "}"
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
          null
        ],
        "candidates": {
          "keywords": [
            "return", "if"
          ],
          "others": ["main", "fmt", "minmax", "a", "b", "int", "min", "max", "5", "3", "Println", "}", "ax", "fmt\"", "< b {", "return a, b", "b,", "順で返す", "// minmax関数（第1引数に5, 第2引数に3）を呼び出してmin, maxに代入", "ntln(min", "max)"]
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
      "description": "エラー処理の基本の仕組みと使い方を学びます",
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
      "correctCode": "package main\\nimport (\\n    \"errors\"\\n    \"fmt\"\\n)\\nfunc check(n int) (int, error) {\\n    if n < 0 {\\n        // errors.New でエラーを作成\\n        return 0, errors.New(\"negative\")\\n    }\\n    // nil でエラーなしを表す\\n    return n, nil\\n}\\nfunc main() {\\n    // 関数から2つの戻り値を受け取る\\n    val, err := check(5)\\n    if err != nil {\\n        fmt.Println(err)\\n    } else {\\n        fmt.Println(val)\\n    }\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n// check関数を定義\\nfunc ___(___  ___) (___, ___) {\\n    // 条件分岐\\n    if ___ < ___ {\\n        // errors.New でエラーを作成\\n        return ___, ___.___( \\\"___\\\")\\n    // ブロックを閉じる\\n    ___\\n    // nil でエラーなしを表す\\n    return ___, ___\\n// ブロックを閉じる\\n___\\n// main関数を定義\\nfunc ___() {\\n    // 関数から2つの戻り値を受け取る\\n    ___, ___ := ___(___)\\n    // 条件分岐\\n    if ___ != ___ {\\n        // 出力\\n        ___.___(___) \\n    // else分岐\\n    ___ else {\\n        // 出力\\n        ___.___(___) \\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "package main",
          "import (",
          "    \"errors\"",
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
          "\\\\\\\"\\\\\\\"",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "if", "else", "return"
          ],
          "others": ["main", "errors", "fmt", "check", "n", "int", "error", "0", "New", "negative", "nil", "val", "err", "5", "Println", "(", ")", "}", "nt", "egative", "t\"", "check(n int) (int, error) {", "// errors.New でエラーを作成", "eturn n, nil", "in()", "check(5)", "fmt.Println(err)", ".Println(val)"]
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
      "description": "ポインタについて学びます",
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    x := 5\\n    // & でアドレスを取得\\n    p := &x\\n    // *p でポインタの値を変更\\n    *p = 10\\n    fmt.Println(x)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// main関数を定義\\nfunc ___() {\\n    // 変数を宣言\\n    ___ := ___\\n    // & でアドレスを取得\\n    ___ := &___\\n    // *p でポインタの値を変更\\n    *___ = ___\\n    ___.___(___) \\n// ブロックを閉じる\\n___",
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
          "operators": [
            "&"
          ],
          "others": ["main", "fmt", "x", "5", "p", "10", "Println", "}", "fmt\"", ":= &x", "*p", "0"]
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
      "description": "構造体（struct・ストラクト）について学びます",
      "tutorialSlides": [
        {
          "title": "構造体とは？",
          "content": "# いくつかのデータをまとめる「設計図」\\n\\n**構造体（struct・ストラクト）** は、関係のあるデータをひとまとめにする仕組みです。\\n\\n**たとえば「人」のデータ：**\\n- 名前（Name）\\n- 年齢（Age）\\n- 身長（Height）\\n\\nこれらをバラバラに管理するのは大変です。構造体を使えば「人」という1つの入れ物にまとめられます。\\n\\n**イメージ：**\\n構造体は「データの設計図」のようなもの。どんな情報を持つかを決めておきます。"
        },
        {
          "title": "struct の定義のしかた",
          "content": "# type で新しい型を作る\\n\\n`type 名前 struct { }` で構造体を定義します。中にはフィールド（項目）を書きます。\\n\\n**コード例：**\\n```go\\n// Person という構造体を定義\\ntype Person struct {\\n    Name string  // 名前フィールド（文字列）\\n    Age  int     // 年齢フィールド（整数）\\n}\\n\\n// 構造体を使ってデータを作る\\np := Person{Name: \"Taro\", Age: 20}\\nfmt.Println(p.Name)  // Taro が表示される\\n```\\n\\n**ポイント：**\\n- `type 名前 struct` で設計図を作る\\n- `{ }` の中にフィールド名と型を書く\\n- `.フィールド名` でデータにアクセス"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\n// Point構造体を定義\\ntype Point struct {\\n    // フィールド名と型を定義\\n    X int\\n    Y int\\n}\\nfunc main() {\\n    // 構造体を初期化\\n    p := Point{X: 3, Y: 4}\\n    fmt.Println(p.X)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// Point構造体を定義\\ntype ___ struct {\\n    // フィールド名と型を定義\\n    ___ ___\\n    // フィールドを定義\\n    ___ ___\\n// ブロックを閉じる\\n___\\n// main関数を定義\\nfunc ___() {\\n    // 構造体を初期化\\n    ___ := ___{ ___: ___, ___: ___}\\n    // 出力\\n    ___.___(___.___)\\n// ブロックを閉じる\\n___",
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
          null
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["main", "fmt", "Point", "X", "Y", "int", "p", "3", "4", "Println", "}", "fmt\"", "nt struct {", "//", "構造体を初期化", "fmt.Println(p.X)"]
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
      "description": "メソッドについて学びます",
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
      "correctCode": "package main\\nimport \"fmt\"\\ntype Rect struct {\\n    W int\\n    H int\\n}\\nfunc (r Rect) Area() int {\\n    // * でかけ算\\n    return r.W * r.H\\n}\\nfunc main() {\\n    // 構造体を初期化\\n    rect := Rect{W: 3, H: 4}\\n    // rect.Area()を呼び出して表示\\n    fmt.Println(rect.Area())\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// ブロックを開始\\ntype ___ struct {\\n    // フィールドを定義\\n    ___ ___\\n    // フィールドを定義\\n    ___ ___\\n// ブロックを閉じる\\n___\\n// Area関数を定義\\nfunc (___ ___) ___() ___ {\\n    // * でかけ算\\n    return ___.___ * ___.___\\n// ブロックを閉じる\\n___\\n// main関数を定義\\nfunc ___() {\\n    // 構造体を初期化\\n    ___ := ___{ ___: ___, ___: ___}\\n    // rect.Area()を呼び出して表示\\n    ___.___(___.___(  ))\\n// ブロックを閉じる\\n___",
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
          "    // rect.Area()を呼び出して表示",
          "    fmt.Println(rect.Area())",
          "}"
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
          ""
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["main", "fmt", "Rect", "W", "H", "int", "r", "Area", "rect", "3", "4", "Println", "}", "fmt\"", "t", "//", "* でかけ算", "// 構造体を初期化", "rect.Area(", "呼び出して表示"]
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
      "description": "インターフェースについて学びます",
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "content": "# 「約束事」を決める仕組み\\n\\n**インターフェース** は、「この型には絶対このメソッドがあるよ」という約束を定義します。\\n\\n**たとえば「鳴ける動物」：**\\n- 犬は「ワン」と鳴く\\n- 猫は「ニャー」と鳴く\\n- 鳥は「ピヨピヨ」と鳴く\\n\\n全部違う鳴き方だけど、「鳴ける」という共通点があります。この「鳴ける」がインターフェースです。\\n\\n**Go言語の特徴：**\\n「このメソッドを持っていれば、自動的にそのインターフェースを満たす」という仕組みです。"
        },
        {
          "title": "interface の定義のしかた",
          "content": "# メソッドの名前だけ書く\\n\\nインターフェースには「中身」は書きません。「こういうメソッドがあるはず」という約束だけです。\\n\\n**コード例：**\\n```go\\n// Speaker インターフェースを定義\\ntype Speaker interface {\\n    Speak()  // Speak メソッドを持っている約束\\n}\\n\\n// Dog は Speak() を持つので Speaker として使える\\ntype Dog struct{}\\nfunc (d Dog) Speak() {\\n    fmt.Println(\"ワン！\")\\n}\\n```\\n\\n**ポイント：**\\n- `interface { }` の中にメソッド名だけ書く\\n- そのメソッドを持つ型は自動的にインターフェースを満たす\\n- 「implements」などの宣言は不要（Go言語の特徴！）"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\n// Speakerインターフェースを定義\\ntype Speaker interface {\\n    Speak()\\n}\\ntype Dog struct{}\\nfunc (d Dog) Speak() {\\n    fmt.Println(\"ワン！\")\\n}\\nfunc main() {\\n    // インターフェース型の変数に代入\\n    var s Speaker = Dog{}\\n    // s.Speak()を呼び出す\\n    s.Speak()\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// Speakerインターフェースを定義\\ntype ___ interface {\\n    // Speak()メソッドシグネチャ\\n    ___()\\n// ブロックを閉じる\\n___\\n// 空の構造体を定義\\ntype ___ struct{}\\n// Speak関数を定義\\nfunc (___ ___) ___() {\\n    // \\\"\\\"\\n    ___.___(\\\"___\\\")\\n// ブロックを閉じる\\n___\\n// main関数を定義\\nfunc ___() {\\n    // インターフェース型の変数に代入\\n    var ___ ___ = ___{}\\n    // s.Speak()を呼び出す\\n    ___.___()\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "// Speakerインターフェースを定義",
          "type Speaker interface {",
          "    Speak()",
          "}",
          "type Dog struct{}",
          "func (d Dog) Speak() {",
          "    fmt.Println(\"ワン！\")",
          "}",
          "func main() {",
          "    // インターフェース型の変数に代入",
          "    var s Speaker = Dog{}",
          "    // s.Speak()を呼び出す",
          "    s.Speak()",
          "}"
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
          "\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\""
        ],
        "candidates": {
          "keywords": [
            "interface", "struct", "var"
          ],
          "others": ["main", "fmt", "Speaker", "Speak", "Dog", "d", "Println", "ワン！", "s", "}", "fmt\"", "aker interface {", "/", "インターフェースのメソッドを呼び出す", "s.Speak(", "呼び出す"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ワン！\\n"
          }
        ]
      },
    {
      "title": "defer で後処理",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // defer で関数終了時に実行\\n    defer fmt.Println(\"end\")\\n    // これが先に実行される\\n    fmt.Println(\"start\")\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// main関数を定義\\nfunc ___() {\\n    // defer で関数終了時に実行\\n    defer ___.___(\\\"___\\\")\\n    // これが先に実行される\\n    ___.___(\\\"___\\\")\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "\\\\\\\"\\\\\\\""
        ],
        "candidates": {
          "keywords": [
            "defer"
          ],
          "others": ["main", "fmt", "Println", "end", "start", "}", "fmt\"", "efer で関数終了時に実行", "/ これが先に実行される"]
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
      "description": "ゴルーチンについて学びます",
      "tutorialSlides": [
        {
          "title": "ゴルーチンとは？",
          "content": "# 同時にいくつもの仕事をする\\n\\n**ゴルーチン** は、複数の処理を「同時に」実行する仕組みです。Go言語の大きな特徴の1つです。\\n\\n**たとえば料理：**\\n- パスタを茹でながら\\n- ソースを作りながら\\n- サラダを準備する\\n\\n1つずつやるより、同時にやった方が早いですよね！\\n\\n**プログラミングでも同じ：**\\n- ファイルをダウンロードしながら\\n- 画面を表示しながら\\n- ユーザーの入力を待つ\\n\\nこれを「並行処理」と呼びます。"
        },
        {
          "title": "go キーワードで並行実行",
          "content": "# 「go」をつけるだけ！\\n\\n関数を呼び出すときに `go` をつけると、その関数が別のゴルーチン（別の流れ）で実行されます。\\n\\n**コード例：**\\n```go\\nfunc say(msg string) {\\n    fmt.Println(msg)\\n}\\n\\nfunc main() {\\n    go say(\"hello\")  // 別のゴルーチンで実行\\n    say(\"world\")     // こちらは普通に実行\\n}\\n```\\n\\n**ポイント：**\\n- `go 関数名()` で別のゴルーチンで実行\\n- 元の処理は待たずに次に進む\\n- 終了を待ちたい場合は別の仕組みが必要"
        }
      ],
      "correctCode": "package main\\nimport (\\n    \"fmt\"\\n    \"time\"\\n)\\nfunc say(msg string) {\\n    fmt.Println(msg)\\n}\\nfunc main() {\\n    // go でゴルーチンを起動\\n    go say(\"こんにちは\")\\n    // ゴルーチンの完了を待つ\\n    time.Sleep(100 * time.Millisecond)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n// say関数を定義\\nfunc ___(___ ___) {\\n    // 出力\\n    ___.___(___) \\n// ブロックを閉じる\\n___\\n// main関数を定義\\nfunc ___() {\\n    // go でゴルーチンを起動\\n    go ___(\\\"___\\\")\\n    // ゴルーチンの完了を待つ\\n    ___.___(___ * ___.___)\\n// ブロックを閉じる\\n___",
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
          ""
        ],
        "candidates": {
          "keywords": [
            "go"
          ],
          "others": ["main", "fmt", "time", "say", "msg", "string", "Println", "こんにちは", "Sleep", "100", "Millisecond", "(", ")", "}", "me\"", "say(msg string) {", "// go でゴルーチンを起動", "/ ゴルーチンの完了を待つ"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "チャネルで通信",
      "description": "チャネルについて学びます",
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // chにmake(chan int)を代入\\n    ch := make(chan int)\\n    go func() {\\n        // チャネルに値を送信\\n        ch <- 100\\n    }()\\n    // チャネルから値を受信\\n    val := <-ch\\n    fmt.Println(val)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// main関数を定義\\nfunc ___() {\\n    // chにmake(chan int)を代入\\n    ___ := ___(chan ___)\\n    // ゴルーチンを起動\\n    go ___() {\\n        // チャネルに値を送信\\n        ___ <- ___\\n    // クロージャを閉じて実行\\n    ___()\\n    // チャネルから値を受信\\n    ___ := <-___\\n    // 出力\\n    ___.___(___) \\n// ブロックを閉じる\\n___",
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
          null
        ],
        "candidates": {
          "keywords": [
            "chan", "func", "go"
          ],
          "others": ["main", "fmt", "ch", "make", "int", "100", "val", "Println", "}", "fmt\"", "hにmake(chan int)を代入", "o func", "ch <- 100", "チャネルから値を受信", "Println(val)"]
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "無名関数とは？",
          "content": "# 名前をつけない「使い捨て」の関数\\n\\n**無名関数** は、名前をつけずにその場で作る関数です。「今だけ使いたい」ときに便利です。\\n\\n**たとえば：**\\n- 1回しか使わない処理\\n- ゴルーチンですぐ実行したい処理\\n- 他の関数に渡す小さな処理\\n\\n**コード例：**\\n```go\\n// 普通の関数\\nfunc add(a, b int) int {\\n    return a + b\\n}\\n\\n// 無名関数（その場で定義）\\nresult := func(a, b int) int {\\n    return a + b\\n}(3, 5)  // すぐに実行もできる\\n```"
        },
        {
          "title": "クロージャ：外の変数を使える",
          "content": "# 周りの変数を「覚えている」関数\\n\\n無名関数は、自分の外側にある変数を使うことができます。この仕組みを **クロージャ** と呼びます。\\n\\n**コード例：**\\n```go\\nx := 10\\nfn := func() int {\\n    return x * 2  // 外側の x を使っている！\\n}\\nfmt.Println(fn())  // 20\\n```\\n\\n**イメージ：**\\n無名関数が作られたとき、周りの変数を「写真に撮って覚えておく」ようなものです。\\n\\n**使いどころ：**\\n- カウンターを作る\\n- 設定を保持したまま何度も使う関数\\n- ゴルーチンで外のデータを使う"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    n := 5\\n    // doubleに無名関数を代入\\n    double := func() int {\\n        // 外側の変数 n を参照\\n        return n * 2\\n    }\\n    fmt.Println(double())\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\nimport \\\"___\\\"\\n// main関数を定義\\nfunc ___() {\\n    // 変数を宣言\\n    ___ := ___\\n    // doubleに無名関数を代入\\n    ___ := func() ___ {\\n        // 外側の変数 n を参照\\n        return ___ * ___\\n    // ブロックを閉じる\\n    ___\\n    // 出力\\n    ___.___(___())\\n// ブロックを閉じる\\n___",
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
          null
        ],
        "candidates": {
          "keywords": [
            "func", "return"
          ],
          "others": ["main", "fmt", "n", "5", "double", "int", "2", "Println", "}", "fmt\"", "ouble := func", "return n * 2", "fmt.Println(double())"]
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
