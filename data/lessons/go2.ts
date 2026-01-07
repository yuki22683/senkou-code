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
          "title": "複数の戻り値",
          "content": "# 一度に複数の結果を返す\n\nGo言語では、関数から2つ以上の値を返すことができます。エラーと結果を同時に返すのによく使います。"
        },
        {
          "title": "戻り値の書き方",
          "content": "# カッコで複数の型を指定\n\n戻り値の型を `(型1, 型2)` のように書きます。\n\n**コード例：**\n```go\nfunc divide(a, b int) (int, int) {\n    return a / b, a % b\n}\nq, r := divide(10, 3)\n// q=3, r=1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc minmax(a, b int) (int, int) {\n    if a < b {\n        return a, b\n    }\n    return b, a\n}\nfunc main() {\n    min, max := minmax(5, 3)\n    fmt.Println(min, max)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc minmax(a, b int) (int, int) {\n    if a < b {\n        ___ a, b\n    }\n    return b, a\n}\nfunc main() {\n    min, max := minmax(5, 3)\n    fmt.Println(min, max)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func minmax(a, b int) (int, int) {",
        "    if a < b {",
        "        return a, b",
        "    }",
        "    return b, a",
        "}",
        "func main() {",
        "    min, max := minmax(5, 3)",
        "    fmt.Println(min, max)",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "2つの int を返す関数です。",
        "",
        "return で複数の値を返します。",
        "",
        "",
        "",
        "",
        "2つの値を受け取ります。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["return"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3 5\n"
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
          "image": "/illustrations/common/if.png",
          "content": "# error 型\n\nGo言語では、エラーは `error` 型として返します。エラーがなければ `nil` を返します。"
        },
        {
          "title": "エラーのチェック",
          "image": "/illustrations/common/if.png",
          "content": "# nil かどうか確認\n\n関数を呼んだ後、エラーが `nil` でないかチェックします。\n\n**コード例：**\n```go\nresult, err := someFunc()\nif err != nil {\n    fmt.Println(\"Error!\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport (\n    \"errors\"\n    \"fmt\"\n)\nfunc check(n int) (int, error) {\n    if n < 0 {\n        return 0, errors.New(\"negative\")\n    }\n    return n, nil\n}\nfunc main() {\n    val, err := check(5)\n    if err != nil {\n        fmt.Println(err)\n    } else {\n        fmt.Println(val)\n    }\n}",
      "holeyCode": "package main\nimport (\n    \"errors\"\n    \"fmt\"\n)\nfunc check(n int) (int, error) {\n    if n < 0 {\n        return 0, errors.New(\"negative\")\n    }\n    return n, ___\n}\nfunc main() {\n    val, err := check(5)\n    if err != nil {\n        fmt.Println(err)\n    } else {\n        fmt.Println(val)\n    }\n}",
      "correctLines": [
        "package main",
        "import (",
        "    \"errors\"",
        "    \"fmt\"",
        ")",
        "func check(n int) (int, error) {",
        "    if n < 0 {",
        "        return 0, errors.New(\"negative\")",
        "    }",
        "    return n, nil",
        "}",
        "func main() {",
        "    val, err := check(5)",
        "    if err != nil {",
        "        fmt.Println(err)",
        "    } else {",
        "        fmt.Println(val)",
        "    }",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "エラーがないときは nil を返します。",
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
        "keywords": ["nil"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
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
          "image": "/illustrations/common/box.png",
          "content": "# メモリの住所\n\n**ポインタ** は、変数が保存されているメモリのアドレスを指します。`&` でアドレスを取得し、`*` で中身にアクセスします。"
        },
        {
          "title": "ポインタの使い方",
          "image": "/illustrations/common/box.png",
          "content": "# & と * の使い分け\n\n`&変数` でアドレスを取得、`*ポインタ` で値にアクセスします。\n\n**コード例：**\n```go\nx := 10\np := &x  // p は x のアドレス\n*p = 20  // x が 20 になる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    p := &x\n    *p = 10\n    fmt.Println(x)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    p := ___x\n    *p = 10\n    fmt.Println(x)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    x := 5",
        "    p := &x",
        "    *p = 10",
        "    fmt.Println(x)",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "& でアドレスを取得します。",
        "*p で値を変更します。",
        "x が 10 になっています。",
        ""
      ],
      "candidates": {
        "operators": ["&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
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
          "title": "構造体とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# データのまとまり\n\n**構造体（struct）** は、関連するデータをひとまとめにする仕組みです。例えば「人」は「名前」と「年齢」を持ちます。"
        },
        {
          "title": "struct の定義",
          "image": "/illustrations/common/dict.png",
          "content": "# type で新しい型を作る\n\n`type 名前 struct { }` で構造体を定義します。\n\n**コード例：**\n```go\ntype Person struct {\n    Name string\n    Age  int\n}\np := Person{Name: \"Taro\", Age: 20}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\ntype Point struct {\n    X int\n    Y int\n}\nfunc main() {\n    p := Point{X: 3, Y: 4}\n    fmt.Println(p.X)\n}",
      "holeyCode": "package main\nimport \"fmt\"\ntype Point ___ {\n    X int\n    Y int\n}\nfunc main() {\n    p := Point{X: 3, Y: 4}\n    fmt.Println(p.X)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "type Point struct {",
        "    X int",
        "    Y int",
        "}",
        "func main() {",
        "    p := Point{X: 3, Y: 4}",
        "    fmt.Println(p.X)",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "struct で構造体を定義します。",
        "",
        "",
        "",
        "",
        "構造体を初期化します。",
        "p.X でフィールドにアクセスします。",
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
      "title": "メソッドを作ろう",
      "description": "構造体に関連付けられた関数「メソッド」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "メソッドとは？",
          "content": "# 構造体の関数\n\n**メソッド** は、特定の型に紐づいた関数です。その型の値に対して操作を行えます。"
        },
        {
          "title": "メソッドの定義",
          "content": "# レシーバを指定\n\n`func (r 型) メソッド名()` のように、関数名の前にレシーバを書きます。\n\n**コード例：**\n```go\nfunc (p Person) Greet() {\n    fmt.Println(\"Hi, I'm\", p.Name)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\ntype Rect struct {\n    W int\n    H int\n}\nfunc (r Rect) Area() int {\n    return r.W * r.H\n}\nfunc main() {\n    rect := Rect{W: 3, H: 4}\n    fmt.Println(rect.Area())\n}",
      "holeyCode": "package main\nimport \"fmt\"\ntype Rect struct {\n    W int\n    H int\n}\nfunc (r Rect) Area() int {\n    return r.W ___ r.H\n}\nfunc main() {\n    rect := Rect{W: 3, H: 4}\n    fmt.Println(rect.Area())\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "type Rect struct {",
        "    W int",
        "    H int",
        "}",
        "func (r Rect) Area() int {",
        "    return r.W * r.H",
        "}",
        "func main() {",
        "    rect := Rect{W: 3, H: 4}",
        "    fmt.Println(rect.Area())",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "",
        "(r Rect) がレシーバです。",
        "* で掛け算します。",
        "",
        "",
        "",
        "rect.Area() でメソッドを呼びます。",
        ""
      ],
      "candidates": {
        "operators": ["*"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12\n"
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
          "image": "/illustrations/common/box.png",
          "content": "# メソッドの約束\n\n**インターフェース** は、型が持つべきメソッドを定義します。明示的な実装宣言は不要で、メソッドがあれば自動的に満たされます。"
        },
        {
          "title": "interface の定義",
          "image": "/illustrations/common/box.png",
          "content": "# 暗黙の実装\n\nメソッドを持っていれば、そのインターフェースを実装したことになります。\n\n**コード例：**\n```go\ntype Greeter interface {\n    Greet()\n}\n// Greet() を持つ型は Greeter\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\ntype Speaker interface {\n    Speak()\n}\ntype Dog struct{}\nfunc (d Dog) Speak() {\n    fmt.Println(\"woof\")\n}\nfunc main() {\n    var s Speaker = Dog{}\n    s.Speak()\n}",
      "holeyCode": "package main\nimport \"fmt\"\ntype Speaker ___ {\n    Speak()\n}\ntype Dog struct{}\nfunc (d Dog) Speak() {\n    fmt.Println(\"woof\")\n}\nfunc main() {\n    var s Speaker = Dog{}\n    s.Speak()\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "type Speaker interface {",
        "    Speak()",
        "}",
        "type Dog struct{}",
        "func (d Dog) Speak() {",
        "    fmt.Println(\"woof\")",
        "}",
        "func main() {",
        "    var s Speaker = Dog{}",
        "    s.Speak()",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "interface でインターフェースを定義します。",
        "",
        "",
        "",
        "Dog が Speak() を実装します。",
        "",
        "",
        "",
        "Speaker 型の変数に Dog を代入できます。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["interface"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "woof\n"
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
          "title": "defer とは？",
          "content": "# 後始末を予約\n\n**defer** は、関数が終わるときに実行したい処理を予約します。ファイルのクローズなどに便利です。"
        },
        {
          "title": "defer の使い方",
          "content": "# 関数の最後に実行\n\n`defer` をつけた文は、関数の終了時に実行されます。\n\n**コード例：**\n```go\nfunc main() {\n    defer fmt.Println(\"last\")\n    fmt.Println(\"first\")\n}\n// first → last の順で表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    defer fmt.Println(\"end\")\n    fmt.Println(\"start\")\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    ___ fmt.Println(\"end\")\n    fmt.Println(\"start\")\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    defer fmt.Println(\"end\")",
        "    fmt.Println(\"start\")",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "defer で関数終了時に実行を予約します。",
        "これが先に実行されます。",
        ""
      ],
      "candidates": {
        "keywords": ["defer"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "start\nend\n"
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
          "image": "/illustrations/common/loop.png",
          "content": "# 軽量な並行処理\n\n**ゴルーチン** は、Go言語の軽量スレッドです。`go` キーワードで関数を並行に実行できます。"
        },
        {
          "title": "go キーワード",
          "image": "/illustrations/common/loop.png",
          "content": "# 並行に実行\n\n`go 関数()` と書くと、その関数が別のゴルーチンで実行されます。\n\n**コード例：**\n```go\ngo fmt.Println(\"hello\")\n// 別のゴルーチンで実行\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport (\n    \"fmt\"\n    \"time\"\n)\nfunc say(msg string) {\n    fmt.Println(msg)\n}\nfunc main() {\n    go say(\"hello\")\n    time.Sleep(100 * time.Millisecond)\n}",
      "holeyCode": "package main\nimport (\n    \"fmt\"\n    \"time\"\n)\nfunc say(msg string) {\n    fmt.Println(msg)\n}\nfunc main() {\n    ___ say(\"hello\")\n    time.Sleep(100 * time.Millisecond)\n}",
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
        "    go say(\"hello\")",
        "    time.Sleep(100 * time.Millisecond)",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "go でゴルーチンを起動します。",
        "ゴルーチンの完了を待ちます。",
        ""
      ],
      "candidates": {
        "keywords": ["go"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello\n"
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
          "image": "/illustrations/common/box.png",
          "content": "# ゴルーチン間の通信路\n\n**チャネル** は、ゴルーチン間でデータを安全にやり取りするための仕組みです。`make(chan 型)` で作成します。"
        },
        {
          "title": "チャネルの使い方",
          "image": "/illustrations/common/box.png",
          "content": "# 送信と受信\n\n`ch <- 値` で送信、`<-ch` で受信します。\n\n**コード例：**\n```go\nch := make(chan int)\ngo func() { ch <- 42 }()\nval := <-ch // 42 を受信\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    ch := make(chan int)\n    go func() {\n        ch <- 100\n    }()\n    val := <-ch\n    fmt.Println(val)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    ch := make(___ int)\n    go func() {\n        ch <- 100\n    }()\n    val := <-ch\n    fmt.Println(val)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    ch := make(chan int)",
        "    go func() {",
        "        ch <- 100",
        "    }()",
        "    val := <-ch",
        "    fmt.Println(val)",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "chan でチャネルを作成します。",
        "無名関数をゴルーチンで実行します。",
        "チャネルに値を送信します。",
        "",
        "チャネルから値を受信します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["chan"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
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
          "title": "無名関数とは？",
          "content": "# 名前のない関数\n\n**無名関数** は、名前をつけずにその場で定義する関数です。変数に代入したり、すぐに実行したりできます。"
        },
        {
          "title": "クロージャ",
          "content": "# 外の変数を捕捉\n\n無名関数は、外側の変数にアクセスできます。これを **クロージャ** と呼びます。\n\n**コード例：**\n```go\nx := 10\nfn := func() int {\n    return x * 2\n}\nfmt.Println(fn()) // 20\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    n := 5\n    double := func() int {\n        return n * 2\n    }\n    fmt.Println(double())\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    n := 5\n    double := ___() int {\n        return n * 2\n    }\n    fmt.Println(double())\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    n := 5",
        "    double := func() int {",
        "        return n * 2",
        "    }",
        "    fmt.Println(double())",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "func で無名関数を定義します。",
        "外側の n にアクセスできます。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["func"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    }
  ]
}
