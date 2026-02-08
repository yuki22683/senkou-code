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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\n// any で任意の型を受け入れる\\nfunc First[___ any](slice []T) T {\\n    // スライスの最初の要素を返す\\n    return slice[___]\\n___\\n___\\nfunc ___ () {\\n    // 10, 20, 30 でスライスを初期化\\n    ___ := []int{10, 20, 30}\\n    fmt.___(First(nums))\\n___",
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
          "any で任意の型を受け入れます。",
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "配列を複数の値で初期化する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "any",
            "interface{}",
            "comparable"
          ],
          "others": ["slice", "30", "main", "fmt", "T", "0", "}", "main()", "nums", "Println", "mt\"", "import", "main", "", "}", "}", "", "}"]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\n// comparable で比較可能な型に制限\\nfunc IndexOf[T comparable](slice []T, v T) ___ {\\n    // range でスライスをイテレート\\n    for i, x := range ___ {\\n        // == で比較\\n        if x == ___ {\\n            return ___\\n        ___\\n    ___\\n    return -___\\n___\\n___\\nfunc ___ () {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    ___ := []string{\"a\", \"b\", \"c\"}\\n    fmt.___(IndexOf(names, \"b\"))\\n___",
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
          "comparable で比較可能な型に制限します。",
          null,
          "== で値が一致するか比較します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "変数の値を呼び出し元に返す（戻り値）。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "comparable",
            "any",
            "ordered"
          ],
          "others": ["range", "==", "\"c\"", "main", "fmt", "int", "slice", "v", "i", "}", "1", "main()", "names", "Println", "mt\"", "import", "main", "", "i", "}", "1", "i", "}", "1", "", "i", "}", "1"]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\nfunc ___ () {\\n    // numsにmake([]int, 3)を代入\\n    ___ := make([]int, 3)\\n    // インデックス 0 に 10 を代入\\n    nums[___] = 10\\n    nums[___] = 20\\n    nums[___] = 30\\n    fmt.___(nums)\\n___",
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
          "make でスライスを作成します。",
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "make",
            "new",
            "create"
          ],
          "others": ["10", "main", "fmt", "main()", "nums", "0", "1", "2", "Println", "}", "mt\"", "import", "main", ""]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\nfunc ___ () {\\n    // スライスを初期化\\n    ___ := []int{1, 2}\\n    ___ := []int{3, 4}\\n    // ... でスライスを展開\\n    ___ := append(a, b...)\\n    fmt.___(c)\\n___",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "配列を複数の値で初期化する。",
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "...",
            "..",
            ","
          ],
          "others": ["2", "main", "fmt", "main()", "a", "b", "c", "Println", "}", "mt\"", "import", "main", ""]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\nfunc ___ () {\\n    // コピー元のスライス (10, 20, 30)\\n    ___ := []int{10, 20, 30}\\n    // dstにmake([]int, len(src))を代入\\n    ___ := make([]int, len(src))\\n    // copy でスライスをコピー\\n    copy(dst, ___)\\n    fmt.___(dst)\\n___",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "copy でスライスをコピーします。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "copy",
            "clone",
            "dup"
          ],
          "others": ["30", "make", "main", "fmt", "main()", "src", "dst", "Println", "}", "mt\"", "import", "main", ""]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\nfunc ___ () {\\n    // バッファ付きチャネルを作成\\n    ___ := make(chan int, 1)\\n    ___ := make(chan int, 1)\\n    // チャネルに値を送信\\n    ch___ <- 10\\n    ___\\n    // select で複数チャネルを待機\\n    ___ {\\n    case v := <-ch___:\\n        fmt.___(v)\\n    case v := <-ch___:\\n        fmt.___(v)\\n    ___\\n___",
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
          "1 を入力してバッファ付きチャネルを作成します。",
          null,
          "select で複数チャネルを待機します。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "select",
            "switch",
            "case"
          ],
          "others": ["1", "<-", "main", "fmt", "main()", "ch1", "ch2", "Println", "2", "}", "mt\"", "import", "main", "", "}"]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\nfunc ___ () {\\n    // マップを初期化 (math: 90, english: 85)\\n    ___ := map[string]int{\"math\": 90, \"english\": 85}\\n    // range で辞書をイテレート\\n    for k, v := range ___ {\\n        fmt.___(\"%s: %d\\n___\\n    ___\\n___",
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
          "        fmt.Printf(\"%s: %d",
          "\", k, v)",
          "    }",
          "}"
        ],
      "lineHints": [
          "85 を入力してマップを完成させます。",
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "range",
            "in",
            "each"
          ],
          "others": ["85", "main", "fmt", "main()", "scores", "Printf", "}", "mt\"", "import", " k, v)", "main", "", " k, v)", "}", " k, v)", "}", "\", k, v)", "}\\"]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\n// Age型を定義\\ntype Age ___\\n___\\nfunc ___ () {\\n    // ageに25を代入\\n    var age Age = ___\\n    fmt.___(age)\\n___",
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
          "type で新しい型を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "var",
            "const"
          ],
          "others": ["25", "main", "fmt", "int", "main()", "Println", "}", "mt\"", "import", "main", "", "int", "25"]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\ntype Base ___ {\\n    Value ___\\n___\\n___\\ntype Extended ___ {\\n    // Base を埋め込む\\n    ___\\n    Extra ___\\n___\\n___\\nfunc ___ () {\\n    // 埋め込み構造体を初期化\\n    ___ := Extended{Base: Base{Value: 100}, Extra: \"テスト\"}\\n    fmt.___(e.Value)\\n___",
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
          "Base を埋め込みます。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Base",
            "*Base",
            "base Base"
          ],
          "others": ["100", "main", "fmt", "struct", "int", "}", "string", "main()", "e", "Println", "mt\"", "import", "main", "", "int", "}", "Base", "string"]
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
      "holeyCode": "package ___\\n___\\n___ \\\"___\\\"\\n___\\nfunc ___ () {\\n    defer ___() {\\n        // recover でパニックを捕捉\\n        if r := recover(); r != ___ {\\n            fmt.___(\"caught\")\\n        ___\\n    ___()\\n    // panic でパニックを発生\\n    panic(\"___\")\\n___",
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
          "recover でパニックを捕捉します。",
          null,
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "recover",
            "catch",
            "handle"
          ],
          "others": ["panic", "main", "fmt", "main()", "func", "nil", "Println", "}", "error", "mt\"", "エラー", "import", "main", "", "}"]
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
