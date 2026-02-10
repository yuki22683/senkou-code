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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc minmax(a, b int) (int, int) {\\n    if a < b {\\n        // a, bの順で返す\\n        return a, b\\n    }\\n    // b, aの順で返す\\n    return b, a\\n}\\nfunc main() {\\n    // minmax関数を呼び出し（第1引数に5, 第2引数に3）\\n    min, max := minmax(5, 3)\\n    fmt.Println(min, max)\\n}",
      "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___(___,  ___ ___) (___, ___) {\\n    if ___ < ___ {\\n        // a, bの順で返す\\n        return ___, ___\\n    ___\\n    // b, aの順で返す\\n    return ___, ___\\n___\\nfunc ___() {\\n    // minmax関数を呼び出し（第1引数に5, 第2引数に3）\\n    ___, ___ := ___(___, ___)\\n    ___.___(___,  ___)\\n___",
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
          "    // minmax関数を呼び出し（第1引数に5, 第2引数に3）",
          "    min, max := minmax(5, 3)",
          "    fmt.Println(min, max)",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "minmax関数を定義します。引数a, bはint型で、戻り値も2つのint型です。",
          "aがbより小さいか比較します。",
          null,
          "aとbを返します（aが小さい場合）。",
          "if文の閉じ括弧です。",
          null,
          "bとaを返します（bが小さい場合）。",
          "関数の閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "minmax関数を呼び出し、結果をmin, maxに代入します。",
          "fmt.Printlnでmin, maxを出力します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "return", "if"
          ],
          "others": ["main", "fmt", "minmax", "a", "b", "int", "min", "max", "5", "3", "Println", "}", "ax"]
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
      "holeyCode": "package ___\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\nfunc ___(___  ___) (___, ___) {\\n    if ___ < ___ {\\n        // errors.New でエラーを作成\\n        return ___, ___.___( \\\"___\\\")\\n    ___\\n    // nil でエラーなしを表す\\n    return ___, ___\\n___\\nfunc ___() {\\n    // 関数から2つの戻り値を受け取る\\n    ___, ___ := ___(___)\\n    if ___ != ___ {\\n        ___.___(___) \\n    ___ else {\\n        ___.___(___) \\n    ___\\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "複数パッケージをインポートする開始括弧です。",
          "errorsパッケージをインポートします。",
          "fmtパッケージをインポートします。",
          "インポートの閉じ括弧です。",
          "check関数を定義します。引数nはint型で、戻り値はintとerrorです。",
          "nが0より小さいか比較します。",
          null,
          "0とerrors.New(\\\"negative\\\")を返します。",
          "if文の閉じ括弧です。",
          null,
          "nとnilを返します（エラーなし）。",
          "関数の閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "check関数を呼び出し、結果をval, errに代入します。",
          "errがnilでないか比較します。",
          "fmt.Printlnでerrを出力します。",
          "条件が偽の場合の処理です。",
          "fmt.Printlnでvalを出力します。",
          "elseブロックの閉じ括弧です。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "if", "else", "return"
          ],
          "others": ["main", "errors", "fmt", "check", "n", "int", "error", "0", "New", "negative", "nil", "val", "err", "5", "Println", "(", ")", "}", "nt", "egative"]
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
      "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___() {\\n    ___ := ___\\n    // & でアドレスを取得\\n    ___ := &___\\n    // *p でポインタの値を変更\\n    *___ = ___\\n    ___.___(___) \\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "変数xを宣言し、5を代入します。",
          null,
          "変数pにxのアドレスを代入します。",
          null,
          "ポインタpが指す値を10に変更します。",
          "fmt.Printlnでxを出力します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["main", "fmt", "x", "5", "p", "10", "Println", "}"]
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
      "holeyCode": "package ___\\nimport \\\"___\\\"\\n// Point構造体を定義\\ntype ___ struct {\\n    // フィールド名と型を定義\\n    ___ ___\\n    ___ ___\\n___\\nfunc ___() {\\n    // 構造体を初期化\\n    ___ := ___{ ___: ___, ___: ___}\\n    ___.___(___.___)\\n___",
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
          "fmtパッケージをインポートします。",
          null,
          "Point構造体を定義します。",
          null,
          "int型のフィールドXを定義します。",
          "int型のフィールドYを定義します。",
          "構造体定義の閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "Point構造体を初期化し、pに代入します。X: 3, Y: 4を指定。",
          "fmt.Printlnでp.Xを出力します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["main", "fmt", "Point", "X", "Y", "int", "p", "3", "4", "Println", "}"]
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
      "holeyCode": "package ___\\nimport \\\"___\\\"\\ntype ___ struct {\\n    ___ ___\\n    ___ ___\\n___\\nfunc (___ ___) ___() ___ {\\n    // * でかけ算\\n    return ___.___ * ___.___\\n___\\nfunc ___() {\\n    // 構造体を初期化\\n    ___ := ___{ ___: ___, ___: ___}\\n    // メソッドを呼び出す\\n    ___.___(___.___(  ))\\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "Rect構造体を定義します。",
          "int型のフィールドWを定義します。",
          "int型のフィールドHを定義します。",
          "構造体定義の閉じ括弧です。",
          "Rect型のメソッドAreaを定義します。戻り値はint型です。",
          null,
          "r.WとrHの掛け算結果を返します。",
          "メソッドの閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "Rect構造体を初期化し、rectに代入します。W: 3, H: 4を指定。",
          null,
          "fmt.Printlnでrect.Area()の結果を出力します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["main", "fmt", "Rect", "W", "H", "int", "r", "Area", "rect", "3", "4", "Println", "}"]
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
      "correctCode": "package main\\nimport \"fmt\"\\n// Speakerインターフェースを定義\\ntype Speaker interface {\\n    Speak()\\n}\\ntype Dog struct{}\\nfunc (d Dog) Speak() {\\n    fmt.Println(\"ワン！\")\\n}\\nfunc main() {\\n    // インターフェース型の変数に代入\\n    var s Speaker = Dog{}\\n    // インターフェースのメソッドを呼び出す\\n    s.Speak()\\n}",
      "holeyCode": "package ___\\nimport \\\"___\\\"\\n// Speakerインターフェースを定義\\ntype ___ interface {\\n    ___()\\n___\\ntype ___ struct{}\\nfunc (___ ___) ___() {\\n    ___.___(\\\"___\\\")\\n___\\nfunc ___() {\\n    // インターフェース型の変数に代入\\n    var ___ ___ = ___{}\\n    // インターフェースのメソッドを呼び出す\\n    ___.___()\\n___",
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
          "    // インターフェースのメソッドを呼び出す",
          "    s.Speak()",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          null,
          "Speakerインターフェースを定義します。",
          "Speak()メソッドのシグネチャを定義します。",
          "インターフェース定義の閉じ括弧です。",
          "空のDog構造体を定義します。",
          "Dog型にSpeakメソッドを実装します。",
          "fmt.Printlnで\\\"ワン！\\\"を出力します。",
          "メソッドの閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "Speaker型の変数sにDog{}を代入します。",
          null,
          "s.Speak()でメソッドを呼び出します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "interface", "struct", "var"
          ],
          "others": ["main", "fmt", "Speaker", "Speak", "Dog", "d", "Println", "ワン！", "s", "}"]
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // defer で関数終了時に実行\\n    defer fmt.Println(\"end\")\\n    // これが先に実行される\\n    fmt.Println(\"start\")\\n}",
      "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___() {\\n    // defer で関数終了時に実行\\n    defer ___.___(\\\"___\\\")\\n    // これが先に実行される\\n    ___.___(\\\"___\\\")\\n___",
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
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "defer fmt.Println(\\\"end\\\")で関数終了時に実行します。",
          null,
          "fmt.Println(\\\"start\\\")を先に実行します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "defer"
          ],
          "others": ["main", "fmt", "Println", "end", "start", "}"]
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
      "holeyCode": "package ___\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\nfunc ___(___ ___) {\\n    ___.___(___) \\n___\\nfunc ___() {\\n    // go でゴルーチンを起動\\n    go ___(\\\"___\\\")\\n    // ゴルーチンの完了を待つ\\n    ___.___(___ * ___.___)\\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "複数パッケージをインポートする開始括弧です。",
          "fmtパッケージをインポートします。",
          "timeパッケージをインポートします。",
          "インポートの閉じ括弧です。",
          "say関数を定義します。引数msgはstring型です。",
          "fmt.Printlnでmsgを出力します。",
          "関数の閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "goキーワードでゴルーチンを起動し、say(\\\"こんにちは\\\")を実行します。",
          null,
          "time.Sleepで100ミリ秒待機します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "go"
          ],
          "others": ["main", "fmt", "time", "say", "msg", "string", "Println", "こんにちは", "Sleep", "100", "Millisecond", "(", ")", "}"]
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
      "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___() {\\n    // chにmake(chan int)を代入\\n    ___ := ___(chan ___)\\n    go ___() {\\n        // チャネルに値を送信\\n        ___ <- ___\\n    ___()\\n    // チャネルから値を受信\\n    ___ := <-___\\n    ___.___(___) \\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "make(chan int)でint型のチャネルを作成し、chに代入します。",
          "無名関数をゴルーチンとして起動します。",
          null,
          "ch <- 100でチャネルに100を送信します。",
          "無名関数を即時実行します。",
          null,
          "<-chでチャネルから値を受信し、valに代入します。",
          "fmt.Printlnでvalを出力します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "chan", "func", "go"
          ],
          "others": ["main", "fmt", "ch", "make", "int", "100", "val", "Println", "}"]
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
      "holeyCode": "package ___\\nimport \\\"___\\\"\\nfunc ___() {\\n    ___ := ___\\n    // doubleに無名関数を代入\\n    ___ := func() ___ {\\n        // 外側の変数 n を参照\\n        return ___ * ___\\n    ___\\n    ___.___(___())\\n___",
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
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "変数nを宣言し、5を代入します。",
          null,
          "無名関数を定義し、doubleに代入します。戻り値はint型です。",
          null,
          "n * 2の結果を返します。外側の変数nを参照しています。",
          "無名関数の閉じ括弧です。",
          "fmt.Printlnでdouble()の結果を出力します。",
          "main関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "func", "return"
          ],
          "others": ["main", "fmt", "n", "5", "double", "int", "2", "Println", "}"]
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
