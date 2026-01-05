export const goData = {
  "language": "go",
  "lessonId": "go-1",
  "lessonTitle": "Go I",
  "lessonDescription": "Googleが開発したGo言語の基本を学びます。シンプルで効率的な構文、goroutineなどの特徴がありますが、まずは基本構文から。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Goで画面に文字を表示するには fmt パッケージを使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "基本構造",
          "content": "# package main\n\nGoのプログラムは `package main` から始まり、`fmt` パッケージをインポートして使います。\n\n**コード例：**\n```go\npackage main\nimport \"fmt\"\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    fmt.Println(\"___\")\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    fmt.Println(\"Hello, Go!\")",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "Hello, Go! を出力します。"
      ],
      "candidates": {
        "strings": [
          "Hello, Go!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Go!\n"
        }
      ]
    },
    {
      "title": "変数",
      "description": "変数を宣言して値を代入しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数宣言",
          "content": "# := 演算子\n\n型推論を使った短い宣言方法がよく使われます。\n\n**コード例：**\n```go\nx := 10\nfmt.Println(x)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 10\n    fmt.Println(x)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := ___\n    fmt.Println(___)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    x := 10",
        "    fmt.Println(x)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "10を代入します。",
        "xを出力します。"
      ],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算",
          "content": "# 四則演算\n\n+, -, *, / などが使えます。\n\n**コード例：**\n```go\na := 5\nb := 3\nfmt.Println(a + b)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    a := 5\n    b := 3\n    fmt.Println(a + b)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    a := 5\n    b := 3\n    fmt.Println(a ___ b)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    a := 5",
        "    b := 3",
        "    fmt.Println(a + b)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "a + b を出力します。"
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "フォーマット出力",
      "description": "fmt.Printfを使ってフォーマット出力を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Printf",
          "content": "# 書式指定子\n\n`%d` で整数、`%s` で文字列を埋め込めます。\n\n**コード例：**\n```go\nage := 20\nfmt.Printf(\"Age: %d\\n\", age)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    age := 20\n    fmt.Printf(\"I am %d years old.\\n\", age)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    age := 20\n    fmt.Printf(\"I am %d years old.\\n\", ___)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    age := 20",
        "    fmt.Printf(\"I am %d years old.\\n\", age)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "age変数を指定します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 20 years old.\n"
        }
      ]
    },
    {
      "title": "スライス (可変長配列)",
      "description": "Goでは配列よりもスライスがよく使われます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "スライス",
          "content": "# データのリスト\n\n同じ種類のデータをまとめて扱います。インデックスは0から始まります。\n\n**コード例：**\n```go\nnums := []int{10, 20}\nfmt.Println(nums[1]) // 20 を出力\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    fmt.Println(nums[1])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    fmt.Println(nums[___])\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    nums := []int{10, 20}",
        "    fmt.Println(nums[1])",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "インデックス1を指定します。"
      ],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# 括弧は不要\n\nGoのif文では条件式の周りの丸括弧 `( )` は不要です。\n\n**コード例：**\n```go\nif score > 80 {\n    fmt.Println(\"合格\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    if score > 80 {\n        fmt.Println(\"Great\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    if score ___ 80 {\n        fmt.Println(\"___\")\n    }\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    score := 100",
        "    if score > 80 {",
        "        fmt.Println(\"Great\")",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "比較演算子 > を使います。",
        "Great を出力します。"
      ],
      "candidates": {
        "operators": [
          ">"
        ],
        "strings": [
          "Great"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# 書き方の注意\n\nGoでは `} else {` のように、`else` を閉じ括弧と同じ行に書く必要があります。\n\n**コード例：**\n```go\nif x > 10 {\n    fmt.Println(\"Big\")\n} else {\n    fmt.Println(\"Small\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    if x > 10 {\n        fmt.Println(\"Big\")\n    } else {\n        fmt.Println(\"Small\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    if x > 10 {\n        fmt.Println(\"Big\")\n    } ___ {\n        fmt.Println(\"Small\")\n    }\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    x := 5",
        "    if x > 10 {",
        "        fmt.Println(\"Big\")",
        "    } else {",
        "        fmt.Println(\"Small\")",
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
        "else を記述します。"
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "for文",
      "description": "Goのループはforのみです。rangeを使ってスライスを走査しましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "range",
          "content": "# ループ処理\n\n`for index, value := range` の形式で、要素を一つずつ取り出します。\n\n**コード例：**\n```go\nnums := []int{1, 2, 3}\nfor _, n := range nums {\n    fmt.Println(n)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    for _, n := range nums {\n        fmt.Println(n)\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    for _, n := ___ nums {\n        fmt.Println(n)\n    }\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    nums := []int{1, 2, 3}",
        "    for _, n := range nums {",
        "        fmt.Println(n)",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "range を使います。"
      ],
      "candidates": {
        "keywords": [
          "range"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "Map",
      "description": "キーと値のペアを扱うMapを使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Map",
          "content": "# 連想配列\n\nキーを使ってデータを管理します。\n\n**コード例：**\n```go\nscores := map[string]int{\"Math\": 90}\nfmt.Println(scores[\"Math\"])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    scores := map[string]int{\"Math\": 90}\n    fmt.Println(scores[\"Math\"])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    scores := map[___]int{\"Math\": 90}\n    fmt.Println(scores[\"___\"])\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    scores := map[string]int{\"Math\": 90}",
        "    fmt.Println(scores[\"Math\"])",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "キー型は string です。",
        "Math キーを指定します。"
      ],
      "candidates": {
        "strings": [
          "string",
          "Math"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\n"
        }
      ]
    },
    {
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数",
          "content": "# 処理のひとまとめ\n\n`func` キーワードを使って定義し、呼び出します。\n\n**コード例：**\n```go\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\n\n// main内で呼び出し\ngreet()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\nfunc main() {\n    greet()\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\nfunc main() {\n    ___()\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func greet() {",
        "    fmt.Println(\"Hello\")",
        "}",
        "func main() {",
        "    greet()",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "greet() で呼び出します。"
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}
