export const goData = {
  "language": "go",
  "lessonId": "go-1",
  "lessonTitle": "Go (ゴー) 言語にちょうせん！",
  "lessonDescription": "Google（グーグル）が作った言葉「Go（ゴー）言語」のきほんを学びましょう。シンプルですばやく動くプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "Go言語を使って画面に「こんにちは」と表示させてみましょう。fmt（エフエムティー）という機能を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Go言語の「きまり文句」",
          "content": "# おまじないを入力しましょう\n\nGo言語でプログラムを入力するときは、必ず入力しなければいけない「決まり文句」があります。\n\n```go\npackage main\nimport \"fmt\"\nfunc main() {\n    // ここにやりたいことを入力します\n}\n```\n\n画面に文字を出したいときは、`fmt.Println()` という名前の関数を使います。"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`fmt.Println()` を使って、画面に `Hello, Go!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```go\nfmt.Println(\"Hello, Go!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // 画面にメッセージを出す関数\n    fmt.Println(\"Hello, Go!\")\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // 画面にメッセージを出す関数\n    fmt.Println(\"___")\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    fmt.Println(\"Hello, Go!\")",
        "}"
      ],
      "lineHints": [
        "プログラムのグループ名を決めます。",
        "画面に文字を出すための機能を準備します。",
        "ここからプログラムがスタートします、という合図です。",
        "fmt.Println を使って、() の中の文字を画面に出します。",
        "プログラムの終わりです。"
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
      "title": "便利な「はこ」",
      "description": "数字をしまっておく「はこ」を作って、中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "「:=」を使いましょう",
          "content": "# 短いはこの作りかた\n\nGo言語では、`:=` という記号を使うと、中身の種類を自動で予想して「はこ」を作ってくれます。\n\n**コード例：**\n```go\nx := 10\nfmt.Println(x)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // x というはこに 10 を入れる\n    x := 10\n    fmt.Println(x)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // x というはこに 10 を入れる\n    x := ___\n    fmt.Println(___)\n}",
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
        "x := 10 と入力して、はこを作ります。",
        "はこの名前 x を指定して、表示させます。"
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
      "title": "コンピュータで計算しましょう",
      "description": "Go言語を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nGo言語でも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    a := 5\n    b := 3\n    // たし算した答えを出す\n    fmt.Println(a + b)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    a := 5\n    b := 3\n    // たし算した答えを出す\n    fmt.Println(a ___ b)\n}",
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
        "a = 5 と入力しましょう。",
        "b = 3 と入力しましょう。",
        "たし算なので `+""""` を使います。"
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
      "title": "文章の中に「はこ」を入れましょう",
      "description": "Printf（プリントエフ）を使って、文章の中に「はこ（変数）」の中身を表示します。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "書式を使いましょう",
          "content": "# データの埋め込み\n\n`%d` と入力したところに、あとの方の変数のなかみが入る仕組みです。\n\n**コード例：**\n```go\nage := 10\nfmt.Printf(\"私は %d 歳です\\n\", age)
```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    age := 10\n    fmt.Printf(\"I am %d years old.\\n\", age)
}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    age := 10\n    fmt.Printf(\"I am %d years old.\\n\", ___)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    age := 10",
        "    fmt.Printf(\"I am %d years old.\\n\", age)",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "age に 10 を入力します。",
        "はこの名前 age を指定します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 10 years old.\n"
        }
      ]
    },
    {
      "title": "データをならべる「スライス」",
      "description": "「スライス」という機能を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "データの番号は 0 から！",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\nスライスの中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールですよ。\n\n**コード例：**\n```go\nnums := []int{10, 20}\nfmt.Println(nums[0]) // 10 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    // 2番目（番号は1）を出す\n    fmt.Println(nums[1])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    // 2番目（番号は1）を出す\n    fmt.Println(nums[___])\n}",
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
        "[]int{10, 20} と入力して初期化します。",
        "2番目のデータの番号は 1 です。 `nums[1]` と入力してください。"
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
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# { } を使いましょう\n\nGo言語では、`if 条件` のあとに `{ }` を入力して、その中にやりたいことを入力します。条件のまわりに `( )` は必要ありませんよ。\n\n**コード例：**\n```go\nif score > 80 {\n    fmt.Println(\"合格！\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    if score > 80 {\n        fmt.Println(\"Great\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    if score ___ 80 {\n        fmt.Println(\"___")\n    }\n}",
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
        "score = 100 と入力しましょう。",
        "比較するための記号 `>` を入力しましょう。",
        "Great と表示します。",
        "さいごに } で閉じるのを忘れないでください。"
      ],
      "candidates": {
        "operators": [
          ">
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
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else の書きかた",
          "content": "# } と同じ行に書きましょう\n\nGo言語では、`} else {` というふうに、なみかっこと同じ行に `else` を入力するのがルールです。\n\n**コード例：**\n```go\nif x > 10 {\n    fmt.Println(\"大きい\")\n} else {\n    fmt.Println(\"小さい\")\n}\n```"
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
        "x に 5 を入力します。",
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。"
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
      "title": "中身を全部出してみましょう",
      "description": "range（レンジ）という機能を使って、スライスの中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "range（レンジ）",
          "content": "# 全部取り出しましょう\n\n「はこ（スライス）」の中に入っているものを、最初から最後まで順番に取り出す便利なループです。\n\n**コード例：**\n```go\nnums := []int{1, 2, 3}\nfor _, n := range nums {\n    fmt.Println(n)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    // 全部取り出すループ\n    for _, n := range nums {\n        fmt.Println(n)\n    }\n}",
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
        "範囲をあらわす `range` を入力しましょう。"
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
      "title": "名前で探す「じしょ」",
      "description": "Map（マップ）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Map",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができますよ。\n\n**コード例：**\n```go\nscores := map[string]int{\"Math\": 90}\nfmt.Println(scores[\"Math\"])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    scores := map[string]int{\"Math\": 90}\n    fmt.Println(scores[\"Math\"])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    scores := map[___]int{\"Math\": 90}\n    fmt.Println(scores[\"___"])\n}",
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
        "名前（キー）の種類として `string` と入力しましょう。",
        "\"Math\" という名前を指定してデータを取り出します。"
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
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "手順をまとめる",
          "content": "# func のあとに名前をつける\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。\n\n**コード例：**\n```go\nfunc greet() {\n    fmt.Println(\"こんにちは\")\n}\n\n// mainの中で\ngreet()\n```"
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
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        null,
        "greet(); と入力して、関数を実行します。"
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