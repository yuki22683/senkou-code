export const go3Data = {
  "language": "go",
  "lessonId": "go-3",
  "lessonTitle": "Go III - ジェネリクスとテスト",
  "lessonDescription": "Go言語の高度な機能を学びます。ジェネリクス、テスト、コンテキストなど、本格的なGoプログラミングを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ジェネリクスの基本",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// any で任意の型を受け入れる\\nfunc First[T any](slice []T) T {\\n    // スライスの最初の要素を返す\\n    return slice[0]\\n}\\n\\nfunc main() {\\n    // 10, 20, 30 でスライスを初期化\\n    nums := []int{10, 20, 30}\\n    fmt.Println(First(nums))\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\n// any で任意の型を受け入れる\\nfunc ___[___ ___](___ []___) ___ {\\n    // スライスの最初の要素を返す\\n    return ___[___]\\n}\\n\\nfunc ___() {\\n    // 10, 20, 30 でスライスを初期化\\n    ___ := []___{___, ___, ___}\\n    ___.___(___(___)\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "// any で任意の型を受け入れる",
          "func First[T any](slice []T) T {",
          "    // スライスの最初の要素を返す",
          "    return slice[0]",
          "}",
          "",
          "func main() {",
          "    // 10, 20, 30 でスライスを初期化",
          "    nums := []int{10, 20, 30}",
          "    fmt.Println(First(nums))",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          null,
          "First関数を型パラメータTとanyで定義します。",
          null,
          "sliceの0番目の要素を返します。",
          null,
          null,
          "main関数を定義します。",
          null,
          "numsにint型のスライスを代入します。",
          "fmt.Printlnで結果を出力します。",
          null
        ],
        "candidates": {
          "types": [
            "any",
            "interface{}",
            "comparable"
          ],
          "others": ["main", "import", "fmt", "First", "T", "slice", "int", "0", "10", "20", "30", "nums", "Println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "型制約 comparable",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// comparable で比較可能な型に制限\\nfunc IndexOf[T comparable](slice []T, v T) int {\\n    // range でスライスをイテレート\\n    for i, x := range slice {\\n        // == で比較\\n        if x == v {\\n            return i\\n        }\\n    }\\n    return -1\\n}\\n\\nfunc main() {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    names := []string{\"a\", \"b\", \"c\"}\\n    fmt.Println(IndexOf(names, \"b\"))\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\n// comparable で比較可能な型に制限\\nfunc ___[___ ___](___ []___, ___ ___) ___ {\\n    // range でスライスをイテレート\\n    for ___, ___ := range ___ {\\n        // == で比較\\n        if ___ == ___ {\\n            return ___\\n        }\\n    }\\n    return -___\\n}\\n\\nfunc ___() {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    ___ := []___{\\\"\",  \\\"___\\\", \\\"___\\\"}\\n    ___.___(___(___, \\\"___\\\"))\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "// comparable で比較可能な型に制限",
          "func IndexOf[T comparable](slice []T, v T) int {",
          "    // range でスライスをイテレート",
          "    for i, x := range slice {",
          "        // == で比較",
          "        if x == v {",
          "            return i",
          "        }",
          "    }",
          "    return -1",
          "}",
          "",
          "func main() {",
          "    // \"a\", \"b\", \"c\" でスライスを初期化",
          "    names := []string{\"a\", \"b\", \"c\"}",
          "    fmt.Println(IndexOf(names, \"b\"))",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          null,
          "IndexOf関数を型パラメータTとcomparableで定義します。",
          null,
          "for文でrangeを使ってsliceをイテレートします。",
          null,
          "xとvを==で比較します。",
          "iを返します。",
          null,
          null,
          "-1を返します（見つからなかった場合）。",
          null,
          null,
          "main関数を定義します。",
          null,
          "namesにstring型のスライスを代入します。",
          "fmt.PrintlnでIndexOfの結果を出力します。",
          null
        ],
        "candidates": {
          "types": [
            "comparable",
            "any",
            "ordered"
          ],
          "others": ["main", "import", "fmt", "IndexOf", "T", "slice", "v", "int", "i", "x", "1", "names", "string", "a", "b", "c", "Println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "make でスライス作成",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // numsにmake([]int, 3)を代入\\n    nums := make([]int, 3)\\n    // インデックス 0 に 10 を代入\\n    nums[0] = 10\\n    nums[1] = 20\\n    nums[2] = 30\\n    fmt.Println(nums)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // numsにmake([]int, 3)を代入\\n    ___ := ___([]___, ___)\\n    // インデックス 0 に 10 を代入\\n    ___[___] = ___\\n    ___[___] = ___\\n    ___[___] = ___\\n    ___.___(___\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "func main() {",
          "    // numsにmake([]int, 3)を代入",
          "    nums := make([]int, 3)",
          "    // インデックス 0 に 10 を代入",
          "    nums[0] = 10",
          "    nums[1] = 20",
          "    nums[2] = 30",
          "    fmt.Println(nums)",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "numsにmakeでint型スライスを作成して代入します。",
          null,
          "nums[0]に10を代入します。",
          "nums[1]に20を代入します。",
          "nums[2]に30を代入します。",
          "fmt.Printlnでnumsを出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "make",
            "new",
            "create"
          ],
          "others": ["main", "import", "fmt", "nums", "int", "3", "0", "10", "1", "20", "2", "30", "Println", "nums)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[10 20 30]\\n"
          }
        ]
      },
    {
      "title": "append でスライス結合",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // スライスを初期化\\n    a := []int{1, 2}\\n    b := []int{3, 4}\\n    // ... でスライスを展開\\n    c := append(a, b...)\\n    fmt.Println(c)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // スライスを初期化\\n    ___ := []___{___, ___}\\n    ___ := []___{___, ___}\\n    // ... でスライスを展開\\n    ___ := ___(___, ___...)\\n    ___.___(___\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "func main() {",
          "    // スライスを初期化",
          "    a := []int{1, 2}",
          "    b := []int{3, 4}",
          "    // ... でスライスを展開",
          "    c := append(a, b...)",
          "    fmt.Println(c)",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "aにint型のスライス{1, 2}を代入します。",
          "bにint型のスライス{3, 4}を代入します。",
          null,
          "cにappendでaとbを結合した結果を代入します。",
          "fmt.Printlnでcを出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "...",
            "..",
            ","
          ],
          "others": ["main", "import", "fmt", "a", "b", "c", "int", "1", "2", "3", "4", "append", "Println", "c)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1 2 3 4]\\n"
          }
        ]
      },
    {
      "title": "copy でスライスコピー",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // コピー元のスライス (10, 20, 30)\\n    src := []int{10, 20, 30}\\n    // dstにmake([]int, len(src))を代入\\n    dst := make([]int, len(src))\\n    // copy でスライスをコピー\\n    copy(dst, src)\\n    fmt.Println(dst)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // コピー元のスライス (10, 20, 30)\\n    ___ := []___{___, ___, ___}\\n    // dstにmake([]int, len(src))を代入\\n    ___ := ___([]___, ___(___))\\n    // copy でスライスをコピー\\n    ___(___, ___)\\n    ___.___(___\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "func main() {",
          "    // コピー元のスライス (10, 20, 30)",
          "    src := []int{10, 20, 30}",
          "    // dstにmake([]int, len(src))を代入",
          "    dst := make([]int, len(src))",
          "    // copy でスライスをコピー",
          "    copy(dst, src)",
          "    fmt.Println(dst)",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "srcにint型のスライス{10, 20, 30}を代入します。",
          null,
          "dstにmakeでlen(src)の長さのスライスを作成して代入します。",
          null,
          "copyでdstにsrcをコピーします。",
          "fmt.Printlnでdstを出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "copy",
            "clone",
            "dup"
          ],
          "others": ["main", "import", "fmt", "src", "dst", "int", "10", "20", "30", "make", "len", "Println", "dst)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[10 20 30]\\n"
          }
        ]
      },
    {
      "title": "select で複数チャネル",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // バッファ付きチャネルを作成\\n    ch1 := make(chan int, 1)\\n    ch2 := make(chan int, 1)\\n    // チャネルに値を送信\\n    ch1 <- 10\\n    \\n    // select で複数チャネルを待機\\n    select {\\n    case v := <-ch1:\\n        fmt.Println(v)\\n    case v := <-ch2:\\n        fmt.Println(v)\\n    }\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // バッファ付きチャネルを作成\\n    ___ := ___(___ ___, ___)\\n    ___ := ___(___ ___, ___)\\n    // チャネルに値を送信\\n    ___ <- ___\\n    \\n    // select で複数チャネルを待機\\n    ___ ___\\n    case ___ := <-___:\\n        ___.___(___\\n    case ___ := <-___:\\n        ___.___(___\\n    ___\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "func main() {",
          "    // バッファ付きチャネルを作成",
          "    ch1 := make(chan int, 1)",
          "    ch2 := make(chan int, 1)",
          "    // チャネルに値を送信",
          "    ch1 <- 10",
          "    ",
          "    // select で複数チャネルを待機",
          "    select {",
          "    case v := <-ch1:",
          "        fmt.Println(v)",
          "    case v := <-ch2:",
          "        fmt.Println(v)",
          "    }",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "ch1にバッファサイズ1のintチャネルを作成します。",
          "ch2にバッファサイズ1のintチャネルを作成します。",
          null,
          "ch1に10を送信します。",
          null,
          null,
          "selectで複数チャネルを待機するブロックを開始します。",
          "ch1から値を受信してvに代入します。",
          "fmt.Printlnでvを出力します。",
          "ch2から値を受信してvに代入します。",
          "fmt.Printlnでvを出力します。",
          "selectブロックを閉じます。",
          null
        ],
        "candidates": {
          "keywords": [
            "select",
            "switch",
            "case"
          ],
          "others": ["main", "import", "fmt", "ch1", "ch2", "make", "chan", "int", "1", "10", "v", "Println", "v)", "{", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "range で辞書をループ",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // マップを初期化 (math: 90, english: 85)\\n    scores := map[string]int{\"math\": 90, \"english\": 85}\\n    // range で辞書をイテレート\\n    for k, v := range scores {\\n        fmt.Printf(\"%s: %d\\n\", k, v)\\n    }\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // マップを初期化 (math: 90, english: 85)\\n    ___ := ___[___]___{\\\"___\\\": ___, \\\"___\\\": ___}\\n    // range で辞書をイテレート\\n    for ___, ___ := range ___ {\\n        ___.___(\\\"___: ___\\n\\\", ___, ___)\\n    }\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "func main() {",
          "    // マップを初期化 (math: 90, english: 85)",
          "    scores := map[string]int{\"math\": 90, \"english\": 85}",
          "    // range で辞書をイテレート",
          "    for k, v := range scores {",
          "        fmt.Printf(\"%s: %d\\n\", k, v)",
          "    }",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "scoresにstring-intのマップを代入します。",
          null,
          "for-rangeでscoresをイテレートします。",
          "fmt.Printfでキーと値を出力します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "range",
            "in",
            "each"
          ],
          "others": ["main", "import", "fmt", "scores", "map", "string", "int", "math", "90", "english", "85", "k", "v", "Printf", "%s", "%d", "%d\\n\", k, v)", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "math: 90\\nenglish: 85\\n"
          }
        ]
      },
    {
      "title": "type で新しい型",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// Age型を定義\\ntype Age int\\n\\nfunc main() {\\n    // ageに25を代入\\n    var age Age = 25\\n    fmt.Println(age)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\n// Age型を定義\\ntype ___ ___\\n\\nfunc ___() {\\n    // ageに25を代入\\n    var ___ ___ = ___\\n    ___.___(___\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "// Age型を定義",
          "type Age int",
          "",
          "func main() {",
          "    // ageに25を代入",
          "    var age Age = 25",
          "    fmt.Println(age)",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          null,
          "AgeをintのエイリアスとしてAge型を定義します。",
          null,
          "main関数を定義します。",
          null,
          "Age型の変数ageに25を代入します。",
          "fmt.Printlnでageを出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "type",
            "var",
            "const"
          ],
          "others": ["main", "import", "fmt", "Age", "int", "age", "25", "Println", "age)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "埋め込み（Embedding）",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\ntype Base struct {\\n    Value int\\n}\\n\\ntype Extended struct {\\n    // Base を埋め込む\\n    Base\\n    Extra string\\n}\\n\\nfunc main() {\\n    // 埋め込み構造体を初期化\\n    e := Extended{Base: Base{Value: 100}, Extra: \"テスト\"}\\n    fmt.Println(e.Value)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\ntype ___ struct {\\n    ___ ___\\n}\\n\\ntype ___ struct {\\n    // Base を埋め込む\\n    ___\\n    ___ ___\\n}\\n\\nfunc ___() {\\n    // 埋め込み構造体を初期化\\n    ___ := ___{___: ___{___: ___}, ___: \\\"___\\\"}\\n    ___.___(___.___)\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "type Base struct {",
          "    Value int",
          "}",
          "",
          "type Extended struct {",
          "    // Base を埋め込む",
          "    Base",
          "    Extra string",
          "}",
          "",
          "func main() {",
          "    // 埋め込み構造体を初期化",
          "    e := Extended{Base: Base{Value: 100}, Extra: \"テスト\"}",
          "    fmt.Println(e.Value)",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "Base構造体を定義します。",
          "Valueフィールド（int型）を定義します。",
          null,
          null,
          "Extended構造体を定義します。",
          null,
          "Baseを埋め込みます。",
          "Extra フィールド（string型）を定義します。",
          null,
          null,
          "main関数を定義します。",
          null,
          "eにExtended構造体を代入します。",
          "fmt.Printlnでe.Valueを出力します。",
          null
        ],
        "candidates": {
          "types": [
            "Base",
            "*Base",
            "base Base"
          ],
          "others": ["main", "import", "fmt", "struct", "Value", "int", "Extended", "Extra", "string", "e", "100", "テスト", "Println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "panic と recover",
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    defer func() {\\n        // recover でパニックを捕捉\\n        if r := recover(); r != nil {\\n            fmt.Println(\"caught\")\\n        }\\n    }()\\n    // panic でパニックを発生\\n    panic(\"エラー\")\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    defer ___() {\\n        // recover でパニックを捕捉\\n        if ___ := ___(); ___ != ___ {\\n            ___.___(\\\"___\\\")\\n        }\\n    ___()\\n    // panic でパニックを発生\\n    ___(\\\"___\\\")\\n}",
      "correctLines": [
          "package main",
          "",
          "import \"fmt\"",
          "",
          "func main() {",
          "    defer func() {",
          "        // recover でパニックを捕捉",
          "        if r := recover(); r != nil {",
          "            fmt.Println(\"caught\")",
          "        }",
          "    }()",
          "    // panic でパニックを発生",
          "    panic(\"エラー\")",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          "deferでfunc()を遅延実行します。",
          null,
          "recoverでパニックを捕捉し、rがnilでなければ処理します。",
          "fmt.Printlnで\"caught\"を出力します。",
          null,
          "無名関数を閉じて即時実行します。",
          null,
          "panicで\"エラー\"を発生させます。",
          null
        ],
        "candidates": {
          "functions": [
            "recover",
            "catch",
            "handle"
          ],
          "others": ["main", "import", "fmt", "func", "r", "nil", "Println", "caught", "panic", "エラー", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "caught\\n"
          }
        ]
      }
  ]
}
