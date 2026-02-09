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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc minmax(a, b int) (int, int) {\\n    if a < b {\\n        // return で複数の値を返す\\n        return a, b\\n    }\\n    // return で2つの値を返す\\n    return b, a\\n}\\nfunc main() {\\n    // 関数から2つの戻り値を受け取る\\n    min, max := minmax(5, 3)\\n    fmt.Println(min, max)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ (a, b int) (int, int) {\\n    if a < ___ {\\n        // return で複数の値を返す\\n        return a, ___\\n    ___\\n    // return で2つの値を返す\\n    return b, ___\\n___\\nfunc ___ () {\\n    // 関数から2つの戻り値を受け取る\\n    min, max := minmax(___, 3)\\n    fmt.___(min, max)\\n___",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": ["minmax", "main", "fmt", "minmax(a,", "b", "}", "a", "main()", "5", "Println", "mt\"", "import", "main", "b", "}", "a"]
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
      "correctCode": "package main\\nimport (\\n    \"errors\"\\n    \"fmt\"\\n)\\nfunc check(n int) (int, error) {\\n    if n < 0 {\\n        // errors.New でエラーを作成\\n        return 0, errors.New(\"negative\")\\n    }\\n    // nil でエラーなしを表す\\n    return n, nil\\n}\\nfunc main() {\\n    // 関数から2つの戻り値を受け取る\\n    val, err := check(5)\\n    if err != nil {\\n        fmt.Println(err)\\n    } else {\\n        fmt.Println(val)\\n    }\\n}",
      "holeyCode": "package ___\\nimport ___\\n    \"___\"\\n    \\\"___\\\"\\n___\\nfunc ___ (n int) (int, error) {\\n    if n ___ 0 {\\n        // errors.New でエラーを作成\\n        return 0, errors.New(\"___\")\\n    ___\\n    // nil でエラーなしを表す\\n    return n, ___\\n___\\nfunc ___ () {\\n    // 関数から2つの戻り値を受け取る\\n    val, err := check(___)\\n    if err != ___ {\\n        fmt.___(err)\\n    } ___ {\\n        fmt.___(val)\\n    ___\\n___",
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
          "errors.New でエラーオブジェクトを作成します。",
          "エラーがないときは nil を返します。",
          "関数名 check を入力して呼び出します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "関数（check）を定義します。",
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "条件が偽の場合の処理を定義する。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "nil"
          ],
          "others": ["New", "check", "main", "(", "errors", "fmt", ")", "check(n", "<", "negative", "}", "main()", "5", "Println", "else", "mt\"", "errors", "main", "(", ")", "}", "nil"]
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    x := 5\\n    // & でアドレスを取得\\n    p := &x\\n    // *p でポインタの値を変更\\n    *p = 10\\n    fmt.Println(x)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := 5\\n    // & でアドレスを取得\\n    ___ := &x\\n    // *p でポインタの値を変更\\n    *p = 10\\n    fmt.___(x)\\n___",
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
          "プログラムの実行開始地点（main関数）を定義します。",
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["*", "main", "fmt", "main()", "x", "p", "Println", "}", "mt\"", "import", "*p = 10", "main"]
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
      "correctCode": "package main\\nimport \"fmt\"\\n// Point構造体を定義\\ntype Point struct {\\n    // フィールド名と型を定義\\n    X int\\n    Y int\\n}\\nfunc main() {\\n    // 構造体を初期化\\n    p := Point{X: 3, Y: 4}\\n    fmt.Println(p.X)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\n// Point構造体を定義\\ntype Point ___ {\\n    // フィールド名と型を定義\\n    X ___\\n    Y ___\\n___\\nfunc ___ () {\\n    // 構造体を初期化\\n    ___ := Point{X: 3, Y: 4}\\n    fmt.___(p.X)\\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "ここを正しく入力してください。",
          null,
          "struct で構造体を定義します。",
          null,
          "int 型のフィールドを定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "Y に 4 を指定して構造体を初期化します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["int", "4", "main", "fmt", "}", "main()", "p", "Println", "mt\"", "import", "main", "int", "}"]
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
      "correctCode": "package main\\nimport \"fmt\"\\ntype Rect struct {\\n    W int\\n    H int\\n}\\nfunc (r Rect) Area() int {\\n    // * でかけ算\\n    return r.W * r.H\\n}\\nfunc main() {\\n    // 構造体を初期化\\n    rect := Rect{W: 3, H: 4}\\n    // メソッドを呼び出す\\n    fmt.Println(rect.Area())\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\ntype Rect ___ {\\n    W ___\\n    H ___\\n___\\nfunc (r Rect) Area() ___ {\\n    // * でかけ算\\n    return r.W * r.___\\n___\\nfunc ___ () {\\n    // 構造体を初期化\\n    ___ := Rect{W: 3, H: 4}\\n    // メソッドを呼び出す\\n    fmt.___(rect.Area())\\n___",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["4", "Area", "main", "fmt", "struct", "int", "}", "H", "main()", "rect", "Println", "mt\"", "import", "main", "int", "}", "H"]
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
      "correctCode": "package main\\nimport \"fmt\"\\n// Speakerインターフェースを定義\\ntype Speaker interface {\\n    Speak()\\n}\\ntype Dog struct{}\\nfunc (d Dog) Speak() {\\n    fmt.Println(\"woof\")\\n}\\nfunc main() {\\n    // インターフェース型の変数に代入\\n    var s Speaker = Dog{}\\n    // インターフェースのメソッドを呼び出す\\n    s.Speak()\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\n// Speakerインターフェースを定義\\ntype Speaker ___ {\\n    ___()\\n___\\ntype Dog ___{}\\nfunc (d Dog) ___() {\\n    fmt.___(\"woof\")\\n___\\nfunc ___ () {\\n    // インターフェース型の変数に代入\\n    var s Speaker = ___{}\\n    // インターフェースのメソッドを呼び出す\\n    s.___()\\n___",
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
          "ここを正しく入力してください。",
          null,
          "メソッド名 Speak を入力して呼び出します。",
          "関数（Speak）を呼び出して実行する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "Dog{} でインスタンスを作成して代入します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "interface"
          ],
          "others": ["Dog{}", "Speak", "main", "fmt", "}", "struct", "Println", "main()", "Dog", "mt\"", "import", "main", "}"]
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // defer で関数終了時に実行\\n    defer fmt.Println(\"end\")\\n    // これが先に実行される\\n    fmt.Println(\"start\")\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // defer で関数終了時に実行\\n    defer fmt.___(\"end\")\\n    // これが先に実行される\\n    fmt.___(\"start\")\\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "フォーマットパッケージを使って文字列を出力します。",
          null,
          "フォーマットパッケージを使って文字列を出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "defer"
          ],
          "others": ["Println", "main", "fmt", "main()", "}", "mt\"", "import", "main"]
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "関数（say）を定義します。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "go"
          ],
          "others": ["Sleep", "main", "(", "fmt", "time", ")", "say(msg", "Println", "}", "main()", "100", "mt\"", "ime\"", "こんにちは", "main", "(", ")", "}"]
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // chにmake(chan int)を代入\\n    ch := make(chan int)\\n    go func() {\\n        // チャネルに値を送信\\n        ch <- 100\\n    }()\\n    // チャネルから値を受信\\n    val := <-ch\\n    fmt.Println(val)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // chにmake(chan int)を代入\\n    ___ := make(chan int)\\n    go ___() {\\n        // チャネルに値を送信\\n        ch <- ___\\n    ___()\\n    // チャネルから値を受信\\n    ___ := <-ch\\n    fmt.___(val)\\n___",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "chan"
          ],
          "others": ["<-", "main", "fmt", "main()", "ch", "func", "100", "}", "val", "Println", "mt\"", "import", "main", "100"]
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    n := 5\\n    // doubleに無名関数を代入\\n    double := func() int {\\n        // 外側の変数 n を参照\\n        return n * 2\\n    }\\n    fmt.Println(double())\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := 5\\n    // doubleに無名関数を代入\\n    ___ := func() int {\\n        // 外側の変数 n を参照\\n        return n * ___\\n    ___\\n    fmt.___(double())\\n___",
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
          "プログラムの実行開始地点（main関数）を定義します。",
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "func"
          ],
          "others": ["*", "main", "fmt", "main()", "n", "double", "2", "}", "Println", "mt\"", "import", "main", "2", "}"]
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
