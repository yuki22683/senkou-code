export const goData = {
  "language": "go",
  "lessonId": "go-1",
  "lessonTitle": "Go (ゴー) 言語に挑戦！",
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
          "title": "Go言語（ゴー）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# シンプルで高速な言葉\n\nGo言語は、Googleが開発したプログラミング言語です。複雑な機能を省いて、シンプルに書けるように工夫されています。サーバーなどの大きなシステムを動かすのが得意です。"
        },
        {
          "title": "Go言語の「きまり文句」",
          "image": "/illustrations/common/monitor.png",
          "content": "# おまじないを入力しましょう\n\nGo言語でプログラムを入力するときは、必ず入力しなければいけない「決まり文句」があります。\n\n```go\npackage main\nimport \"fmt\"\nfunc main() {\n    // ここにやりたいことを入力します\n}\n```\n\n画面に文字を出したいときは、`fmt.Println()` という名前の関数を使います。例えば：\n\n```go\nfmt.Println(\"ヤッホー\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // Hello, Go! と表示する\n    fmt.Println(\"Hello, Go!\")\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ここに \"Hello, Go!\" と入力してね\n    fmt.Println(\"___\")\n}",
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
        "fmt.Println を使って、() の中の文字を画面に出します。",
        null
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
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する場所\n\nプログラムで使う数字や文字に名前をつけて、あとで使いやすくするための仕組みが **変数（へんすう）** です。"
        },
        {
          "title": "「:=」を使いましょう",
          "image": "/illustrations/common/box.png",
          "content": "# 短いはこの作りかた\n\nGo言語では、`:=` という記号を使うと、中身の種類を自動で予想して「はこ」を作ってくれます。\n\n**コード例：**\n```go\napple := 5\nfmt.Println(apple)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // 10 を代入する\n    x := 10\n    // x を表示する\n    fmt.Println(x)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ここに 10 を入力してね\n    x := ___\n    // ここに x と入力して中身を表示してね\n    fmt.Println(___)\n}",
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
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 高速な計算処理\n\nコンピュータは人間よりもずっと速く計算できます。プログラミングでは、算数と同じ記号を使って計算の指示を出します。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nGo言語でも、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\*** : かけ算\n- **/** : わり算\n\n**コード例：**\n```go\nx := 100\ny := 20\nfmt.Println(x + y) // 120 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // はこに数字を入れる\n    a := 5\n    b := 3\n    // + でたし算する\n    fmt.Println(a + b)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // はこに数字を入れる\n    a := 5\n    b := 3\n    // ここに + を入力してたし算してね\n    fmt.Println(a ___ b)\n}",
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
        "たし算なので `+` を使います。"
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
          "title": "書式指定（しょきしてい）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文字列の中にはめ込む\n\n文章の途中に、変数（はこ）の中身を流し込みたいときに使う仕組みです。Go言語では `%d` などの特別な記号を使います。"
        },
        {
          "title": "書式を使いましょう",
          "image": "/illustrations/common/fstring.png",
          "content": "# データの埋め込み\n\n`%d` と入力したところに、あとの方の変数のなかみが入る仕組みです。\n\n**コード例：**\n```go\nmonth := 12\nfmt.Printf(\"今は %d 月です\\n\", month)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ageに10を入れる\n    age := 10\n    // age を埋め込む\n    fmt.Printf(\"I am %d years old.\\n\", age)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ageに10を入れる\n    age := 10\n    // ここに age と入力して年齢を表示してね\n    fmt.Printf(\"I am %d years old.\\n\", ___)\n}",
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
        null,
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
          "title": "スライスとは？",
          "image": "/illustrations/3d_advanced/slicing.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **スライス** です。順番に 0, 1, 2... と番号をつけて管理します。"
        },
        {
          "title": "データの番号は 0 から！",
          "image": "/illustrations/common/list.png",
          "content": "# [ ]（しかくい かっこ）を使いましょう\n\nスライスの中身を取り出すときは、何番目かを指定します。さいしょのデータは **「0番」** から数えるのがルールです。\n\n**コード例：**\n```go\nitems := []int{100, 200}\nfmt.Println(items[0]) // 100 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    // インデックス 1 で2番目を取得\n    fmt.Println(nums[1])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    // 2番目の中身を取り出すために 1 を入力してね\n    fmt.Println(nums[___])\n}",
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
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断させる\n\n状況によって動きを変えることを **条件分岐** と呼びます。プログラムに賢い判断をさせてみましょう。"
        },
        {
          "title": "if文",
          "image": "/illustrations/common/if.png",
          "content": "# { } を使いましょう\n\nGo言語では、`if 条件` のあとに `{ }` を入力して、その中にやりたいことを入力します。条件のまわりに `( )` は必要ありません。\n\n**コード例：**\n```go\nif score > 80 {\n    fmt.Println(\"すごい！\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    // > で比較する\n    if score > 80 {\n        // Great と表示する\n        fmt.Println(\"Great\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    // ここに > を入力して「大きい」を表してね\n    if score ___ 80 {\n        // ここに \"Great\" と入力してね\n        fmt.Println(\"___\" )\n    }\n}",
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
        "比較するための記号 `>` を入力しましょう。",
        "Great と表示します。",
        null,
        null
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
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが **else（エルス）** です。「もし〜なら」とセットで使うことで、プログラムのルートを2つに分けることができます。"
        },
        {
          "title": "else の書きかた",
          "image": "/illustrations/common/if.png",
          "content": "# } と同じ行に書きましょう\n\nGo言語では、`} else {` というふうに, なみかっこと同じ行に `else` を入力するのがルールです。\n\n**コード例：**\n```go\nif hour < 12 {\n    fmt.Println(\"午前\")\n} else {\n    fmt.Println(\"午後\")\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    if x > 10 {\n        fmt.Println(\"Big\")\n    // else で「そうでなければ」\n    } else {\n        fmt.Println(\"Small\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    if x > 10 {\n        fmt.Println(\"Big\")\n    // ここに else と入力してね\n    } ___ {\n        fmt.Println(\"Small\")\n    }\n}",
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
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        null,
        null
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
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 自動で順番に処理する\n\n同じ作業を何度も繰り返すための仕組みが **ループ** です。配列の中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "range（レンジ）",
          "image": "/illustrations/common/loop.png",
          "content": "# 全部取り出しましょう\n\n「はこ（スライス）」の中に入っているものを、最初から最後まで順番に取り出す便利なループです。\n\n**コード例：**\n```go\ncolors := []string{\"赤\", \"青\"}\nfor _, c := range colors {\n    fmt.Println(c)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    // range で全要素をループ\n    for _, n := range nums {\n        fmt.Println(n)\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    // ここに range と入力して順番に取り出してね\n    for _, n := ___ nums {\n        fmt.Println(n)\n    }\n}",
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
        "範囲をあらわす `range` を入力しましょう。",
        null,
        null,
        null
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
      "title": "名前で探しましょう「じしょ」",
      "description": "Map（マップ）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "マップとは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索できる仕組み\n\n「名前」と「データ」をセットにして保存できるのが **Map** です。辞書を引くように、キーワードを使って目的のデータをすぐに見つけられます。"
        },
        {
          "title": "Map",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# キーとあたいのペア\n\n「名前」と「データ」をセットにして保存できます。辞書のように使うことができます。\n\n**コード例：**\n```go\ncolors := map[string]string{\"red\": \"あか\"}\nfmt.Println(colors[\"red\"])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // string をキーの型に指定\n    scores := map[string]int{\"Math\": 90}\n    // Math をキーに指定\n    fmt.Println(scores[\"Math\"])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ここに string と入力してね\n    scores := map[___]int{\"Math\": 90}\n    // ここに \"Math\" と入力してね\n    fmt.Println(scores[\"___\"])\n}",
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
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理のパッケージ化\n\nやりたいことをひとまとめにして、名前をつけたものを **関数** と呼びます。一度作れば名前を呼ぶだけで何度でも実行できる、便利なショートカットのようなものです。"
        },
                {
                  "title": "手順をまとめる",
                  "image": "/illustrations/common/function.png",
                  "content": "# func のあとに名前をつける\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出す だけでいつでも動かせます。\n\n**コード例：**\n```go\nfunc sayHello() {\n    fmt.Println(\"こんにちは\")\n}\n\n// mainの中で\nsayHello()\n```"
                }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\nfunc main() {\n    // greet 関数を呼び出す\n    greet()\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\nfunc main() {\n    // ここに greet と入力して関数を動かしてね\n    ___()\n}",
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
        null,
        null,
        null,
        "関数名 `greet` を入力して、実行します。"
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