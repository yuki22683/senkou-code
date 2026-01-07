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
      "description": "型パラメータを使った汎用関数を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "content": "# 型パラメータで汎用化\n\nGo 1.18以降、**ジェネリクス** で型に依存しない関数が書けます。\n\n```go\nfunc Print[T any](v T) {\n    fmt.Println(v)\n}\n\nPrint(42)      // int\nPrint(\"hello\") // string\n```"
        },
        {
          "title": "型制約",
          "content": "# comparable や constraints\n\n```go\nfunc Equal[T comparable](a, b T) bool {\n    return a == b\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc First[T any](slice []T) T {\n    return slice[0]\n}\n\nfunc main() {\n    nums := []int{10, 20, 30}\n    fmt.Println(First(nums))\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc First[T ___](slice []T) T {\n    return slice[0]\n}\n\nfunc main() {\n    nums := []int{10, 20, 30}\n    fmt.Println(First(nums))\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func First[T any](slice []T) T {",
        "    return slice[0]",
        "}",
        "",
        "func main() {",
        "    nums := []int{10, 20, 30}",
        "    fmt.Println(First(nums))",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "any で任意の型を受け入れます。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["any", "interface{}", "comparable"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "型制約 comparable",
      "description": "比較可能な型に制限する方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "comparable とは？",
          "content": "# == で比較できる型\n\n**comparable** は、== や != で比較できる型に制限します。\n\n```go\nfunc Contains[T comparable](slice []T, v T) bool {\n    for _, x := range slice {\n        if x == v {\n            return true\n        }\n    }\n    return false\n}\n```"
        },
        {
          "title": "使用例",
          "content": "# 要素の検索\n\n```go\nnums := []int{1, 2, 3}\nfmt.Println(Contains(nums, 2))  // true\nfmt.Println(Contains(nums, 5))  // false\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc IndexOf[T comparable](slice []T, v T) int {\n    for i, x := range slice {\n        if x == v {\n            return i\n        }\n    }\n    return -1\n}\n\nfunc main() {\n    names := []string{\"a\", \"b\", \"c\"}\n    fmt.Println(IndexOf(names, \"b\"))\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc IndexOf[T ___](slice []T, v T) int {\n    for i, x := range slice {\n        if x == v {\n            return i\n        }\n    }\n    return -1\n}\n\nfunc main() {\n    names := []string{\"a\", \"b\", \"c\"}\n    fmt.Println(IndexOf(names, \"b\"))\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func IndexOf[T comparable](slice []T, v T) int {",
        "    for i, x := range slice {",
        "        if x == v {",
        "            return i",
        "        }",
        "    }",
        "    return -1",
        "}",
        "",
        "func main() {",
        "    names := []string{\"a\", \"b\", \"c\"}",
        "    fmt.Println(IndexOf(names, \"b\"))",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "comparable で比較可能な型に制限します。",
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
        "types": ["comparable", "any", "ordered"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "make でスライス作成",
      "description": "容量を指定してスライスを作成しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "make とは？",
          "content": "# スライスの初期化\n\n**make** でスライスの長さと容量を指定できます。\n\n```go\n// 長さ5、容量5のスライス\ns1 := make([]int, 5)\n\n// 長さ0、容量10のスライス\ns2 := make([]int, 0, 10)\n```"
        },
        {
          "title": "パフォーマンス向上",
          "content": "# 再アロケーションを防ぐ\n\n```go\n// 容量を事前確保\nresult := make([]int, 0, 100)\nfor i := 0; i < 100; i++ {\n    result = append(result, i)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    nums := make([]int, 3)\n    nums[0] = 10\n    nums[1] = 20\n    nums[2] = 30\n    fmt.Println(nums)\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    nums := ___([]int, 3)\n    nums[0] = 10\n    nums[1] = 20\n    nums[2] = 30\n    fmt.Println(nums)\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func main() {",
        "    nums := make([]int, 3)",
        "    nums[0] = 10",
        "    nums[1] = 20",
        "    nums[2] = 30",
        "    fmt.Println(nums)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "make でスライスを作成します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["make", "new", "create"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[10 20 30]\n"
        }
      ]
    },
    {
      "title": "append でスライス結合",
      "description": "スライスに要素を追加しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "append とは？",
          "content": "# スライスに追加\n\n**append** でスライスに要素を追加できます。\n\n```go\nnums := []int{1, 2}\nnums = append(nums, 3)      // [1, 2, 3]\nnums = append(nums, 4, 5)   // [1, 2, 3, 4, 5]\n```"
        },
        {
          "title": "スライス同士の結合",
          "content": "# ... で展開\n\n```go\na := []int{1, 2}\nb := []int{3, 4}\nc := append(a, b...)  // [1, 2, 3, 4]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    a := []int{1, 2}\n    b := []int{3, 4}\n    c := append(a, b...)\n    fmt.Println(c)\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    a := []int{1, 2}\n    b := []int{3, 4}\n    c := append(a, b___)\n    fmt.Println(c)\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func main() {",
        "    a := []int{1, 2}",
        "    b := []int{3, 4}",
        "    c := append(a, b...)",
        "    fmt.Println(c)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "... でスライスを展開します。",
        null,
        null
      ],
      "candidates": {
        "operators": ["...", "..", ","]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1 2 3 4]\n"
        }
      ]
    },
    {
      "title": "copy でスライスコピー",
      "description": "スライスの内容をコピーしましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "copy とは？",
          "content": "# 要素をコピー\n\n**copy** は、スライスの要素を別のスライスにコピーします。\n\n```go\nsrc := []int{1, 2, 3}\ndst := make([]int, len(src))\ncopy(dst, src)\n```"
        },
        {
          "title": "部分コピー",
          "content": "# 短い方に合わせる\n\n```go\nsrc := []int{1, 2, 3, 4, 5}\ndst := make([]int, 3)\nn := copy(dst, src)  // n = 3\n// dst = [1, 2, 3]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    src := []int{10, 20, 30}\n    dst := make([]int, len(src))\n    copy(dst, src)\n    fmt.Println(dst)\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    src := []int{10, 20, 30}\n    dst := make([]int, len(src))\n    ___(dst, src)\n    fmt.Println(dst)\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func main() {",
        "    src := []int{10, 20, 30}",
        "    dst := make([]int, len(src))",
        "    copy(dst, src)",
        "    fmt.Println(dst)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "copy でスライスをコピーします。",
        null,
        null
      ],
      "candidates": {
        "functions": ["copy", "clone", "dup"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[10 20 30]\n"
        }
      ]
    },
    {
      "title": "select で複数チャネル",
      "description": "複数のチャネルを同時に待機しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "select とは？",
          "content": "# 複数チャネルの待機\n\n**select** は、複数のチャネル操作を同時に待機します。\n\n```go\nselect {\ncase v := <-ch1:\n    fmt.Println(\"ch1:\", v)\ncase v := <-ch2:\n    fmt.Println(\"ch2:\", v)\n}\n```"
        },
        {
          "title": "default ケース",
          "content": "# ノンブロッキング\n\n```go\nselect {\ncase v := <-ch:\n    fmt.Println(v)\ndefault:\n    fmt.Println(\"no data\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch1 := make(chan int, 1)\n    ch2 := make(chan int, 1)\n    ch1 <- 10\n    \n    select {\n    case v := <-ch1:\n        fmt.Println(v)\n    case v := <-ch2:\n        fmt.Println(v)\n    }\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    ch1 := make(chan int, 1)\n    ch2 := make(chan int, 1)\n    ch1 <- 10\n    \n    ___ {\n    case v := <-ch1:\n        fmt.Println(v)\n    case v := <-ch2:\n        fmt.Println(v)\n    }\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func main() {",
        "    ch1 := make(chan int, 1)",
        "    ch2 := make(chan int, 1)",
        "    ch1 <- 10",
        "    ",
        "    select {",
        "    case v := <-ch1:",
        "        fmt.Println(v)",
        "    case v := <-ch2:",
        "        fmt.Println(v)",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "select で複数チャネルを待機します。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["select", "switch", "case"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "range でマップをループ",
      "description": "マップのキーと値をイテレートしましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "マップの range",
          "content": "# キーと値を取得\n\n**range** でマップのキーと値を取得できます。\n\n```go\nm := map[string]int{\"a\": 1, \"b\": 2}\nfor k, v := range m {\n    fmt.Println(k, v)\n}\n```"
        },
        {
          "title": "キーだけ取得",
          "content": "# 値を無視\n\n```go\nfor k := range m {\n    fmt.Println(k)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    scores := map[string]int{\"math\": 90, \"english\": 85}\n    for k, v := range scores {\n        fmt.Printf(\"%s: %d\\n\", k, v)\n    }\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    scores := map[string]int{\"math\": 90, \"english\": 85}\n    for k, v := ___ scores {\n        fmt.Printf(\"%s: %d\\n\", k, v)\n    }\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func main() {",
        "    scores := map[string]int{\"math\": 90, \"english\": 85}",
        "    for k, v := range scores {",
        "        fmt.Printf(\"%s: %d\\n\", k, v)",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "range でマップをイテレートします。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["range", "in", "each"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "math: 90\nenglish: 85\n"
        }
      ]
    },
    {
      "title": "type で新しい型",
      "description": "既存の型から新しい型を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "型定義",
          "content": "# 新しい型を作る\n\n**type** で既存の型を基に新しい型を定義できます。\n\n```go\ntype UserID int\ntype Email string\n\nvar id UserID = 123\nvar email Email = \"test@example.com\"\n```"
        },
        {
          "title": "型安全性",
          "content": "# 誤った代入を防ぐ\n\n```go\ntype Celsius float64\ntype Fahrenheit float64\n\nvar c Celsius = 25\nvar f Fahrenheit = c  // コンパイルエラー！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\ntype Age int\n\nfunc main() {\n    var age Age = 25\n    fmt.Println(age)\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\n___ Age int\n\nfunc main() {\n    var age Age = 25\n    fmt.Println(age)\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "type Age int",
        "",
        "func main() {",
        "    var age Age = 25",
        "    fmt.Println(age)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "type で新しい型を定義します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["type", "var", "const"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "埋め込み（Embedding）",
      "description": "構造体に別の構造体を埋め込みましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "埋め込みとは？",
          "content": "# 構造体の継承的な機能\n\nGoでは **埋め込み** で構造体を合成できます。\n\n```go\ntype Person struct {\n    Name string\n}\n\ntype Employee struct {\n    Person  // 埋め込み\n    ID int\n}\n```"
        },
        {
          "title": "フィールドへのアクセス",
          "content": "# 直接アクセス可能\n\n```go\ne := Employee{Person: Person{Name: \"Alice\"}, ID: 1}\nfmt.Println(e.Name)  // Alice（直接アクセス）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\ntype Base struct {\n    Value int\n}\n\ntype Extended struct {\n    Base\n    Extra string\n}\n\nfunc main() {\n    e := Extended{Base: Base{Value: 100}, Extra: \"test\"}\n    fmt.Println(e.Value)\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\ntype Base struct {\n    Value int\n}\n\ntype Extended struct {\n    ___\n    Extra string\n}\n\nfunc main() {\n    e := Extended{Base: Base{Value: 100}, Extra: \"test\"}\n    fmt.Println(e.Value)\n}",
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
        "    Base",
        "    Extra string",
        "}",
        "",
        "func main() {",
        "    e := Extended{Base: Base{Value: 100}, Extra: \"test\"}",
        "    fmt.Println(e.Value)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Base を埋め込みます。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Base", "*Base", "base Base"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "panic と recover",
      "description": "パニックから回復する方法を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "panic とは？",
          "content": "# プログラムの異常終了\n\n**panic** は、回復不能なエラーを発生させます。\n\n```go\nfunc main() {\n    panic(\"something went wrong\")\n    // この行は実行されない\n}\n```"
        },
        {
          "title": "recover で回復",
          "content": "# defer 内で回復\n\n```go\nfunc main() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println(\"Recovered:\", r)\n        }\n    }()\n    panic(\"error!\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    defer func() {\n        if r := recover(); r != nil {\n            fmt.Println(\"caught\")\n        }\n    }()\n    panic(\"error\")\n}",
      "holeyCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    defer func() {\n        if r := ___(); r != nil {\n            fmt.Println(\"caught\")\n        }\n    }()\n    panic(\"error\")\n}",
      "correctLines": [
        "package main",
        "",
        "import \"fmt\"",
        "",
        "func main() {",
        "    defer func() {",
        "        if r := recover(); r != nil {",
        "            fmt.Println(\"caught\")",
        "        }",
        "    }()",
        "    panic(\"error\")",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "recover でパニックを捕捉します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["recover", "catch", "handle"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "caught\n"
        }
      ]
    }
  ]
}
