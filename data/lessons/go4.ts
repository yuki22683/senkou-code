export const go4Data = {
  "language": "go",
  "lessonId": "go-4",
  "lessonTitle": "Go IV - 並行処理とネットワーク",
  "lessonDescription": "Go言語の並行処理とネットワークプログラミングを学びます。context、sync、httpなど、実用的なパターンを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "sync.Mutex",
      "description": "排他制御でデータを保護しましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Mutex とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 排他的ロック\n\n**sync.Mutex** は、共有データへの排他的アクセスを保証します。\n\n```go\nvar mu sync.Mutex\nvar count int\n\nmu.Lock()\ncount++\nmu.Unlock()\n```"
        },
        {
          "title": "defer と組み合わせ",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# 安全なアンロック\n\n```go\nmu.Lock()\ndefer mu.Unlock()\n// 処理...\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var mu sync.Mutex\n    count := 0\n    \n    // Lock でロックを取得\n    mu.Lock()\n    count++\n    mu.Unlock()\n    \n    fmt.Println(count)\n}",
      "holeyCode": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var mu sync.Mutex\n    count := 0\n    \n    // Lock でロックを取得\n    mu.___()\n    count++\n    // Unlock でロックを解放\n    mu.___()\n    \n    fmt.Println(count)\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"fmt\"",
        "    \"sync\"",
        ")",
        "",
        "func main() {",
        "    var mu sync.Mutex",
        "    count := 0",
        "    ",
        "    mu.Lock()",
        "    count++",
        "    mu.Unlock()",
        "    ",
        "    fmt.Println(count)",
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
        null,
        null,
        "Lock でロックを取得します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["Lock", "Acquire", "Enter"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "sync.WaitGroup",
      "description": "複数のゴルーチンの完了を待機しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "WaitGroup とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ゴルーチンの同期\n\n**sync.WaitGroup** で複数のゴルーチンの完了を待てます。\n\n```go\nvar wg sync.WaitGroup\nwg.Add(1)\ngo func() {\n    defer wg.Done()\n    // 処理\n}()\nwg.Wait()\n```"
        },
        {
          "title": "メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 3つのメソッド\n\n```go\nwg.Add(n)  // カウンタを増やす\nwg.Done()  // カウンタを減らす\nwg.Wait()  // カウンタが0になるまで待つ\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    wg.Add(1)\n    \n    go func() {\n        // Done でカウンタを減らす\n        defer wg.Done()\n        fmt.Println(\"goroutine\")\n    }()\n    \n    wg.Wait()\n    fmt.Println(\"done\")\n}",
      "holeyCode": "package main\n\nimport (\n    \"fmt\"\n    \"sync\"\n)\n\nfunc main() {\n    var wg sync.WaitGroup\n    // Add でカウンタを増やす\n    wg.___(1)\n    \n    go func() {\n        // Done でカウンタを減らす\n        defer wg.___()\n        fmt.Println(\"goroutine\")\n    }()\n    \n    // Wait でカウンタが0になるまで待つ\n    wg.___()\n    fmt.Println(\"done\")\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"fmt\"",
        "    \"sync\"",
        ")",
        "",
        "func main() {",
        "    var wg sync.WaitGroup",
        "    wg.Add(1)",
        "    ",
        "    go func() {",
        "        defer wg.Done()",
        "        fmt.Println(\"goroutine\")",
        "    }()",
        "    ",
        "    wg.Wait()",
        "    fmt.Println(\"done\")",
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
        null,
        null,
        null,
        "Done でカウンタを減らします。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["Done", "Finish", "Complete"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "goroutine\ndone\n"
        }
      ]
    },
    {
      "title": "context.Background",
      "description": "コンテキストの基本を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "context とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# リクエストスコープの値\n\n**context** パッケージは、リクエストのキャンセルやタイムアウトを管理します。\n\n```go\nctx := context.Background()\n```"
        },
        {
          "title": "派生コンテキスト",
          "image": "/illustrations/3d/robot.png",
          "content": "# WithCancel, WithTimeout\n\n```go\nctx, cancel := context.WithCancel(context.Background())\ndefer cancel()\n\nctx, cancel := context.WithTimeout(ctx, 5*time.Second)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\nfunc main() {\n    // Background でルートコンテキストを作成\n    ctx := context.Background()\n    fmt.Println(ctx.Err())\n}",
      "holeyCode": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\nfunc main() {\n    // Background でルートコンテキストを作成\n    ctx := context.___()\n    // Err でエラーを取得\n    fmt.Println(ctx.___())\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"context\"",
        "    \"fmt\"",
        ")",
        "",
        "func main() {",
        "    ctx := context.Background()",
        "    fmt.Println(ctx.Err())",
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
        "Background でルートコンテキストを作成します。",
        null,
        null
      ],
      "candidates": {
        "functions": ["Background", "WithCancel", "WithTimeout"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "<nil>\n"
        }
      ]
    },
    {
      "title": "context.WithCancel",
      "description": "キャンセル可能なコンテキストを作成しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "WithCancel とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# キャンセル可能なコンテキスト\n\n**WithCancel** でキャンセル可能なコンテキストを作成できます。\n\n```go\nctx, cancel := context.WithCancel(context.Background())\ndefer cancel()\n```"
        },
        {
          "title": "キャンセルの確認",
          "image": "/illustrations/3d/robot.png",
          "content": "# Done チャネル\n\n```go\nselect {\ncase <-ctx.Done():\n    return ctx.Err()\ndefault:\n    // 処理続行\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\nfunc main() {\n    // WithCancel でキャンセル可能に\n    ctx, cancel := context.WithCancel(context.Background())\n    cancel()\n    fmt.Println(ctx.Err())\n}",
      "holeyCode": "package main\n\nimport (\n    \"context\"\n    \"fmt\"\n)\n\nfunc main() {\n    // WithCancel でキャンセル可能に\n    ctx, cancel := context.___(context.Background())\n    // cancel でキャンセル\n    ___()\n    fmt.Println(ctx.Err())\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"context\"",
        "    \"fmt\"",
        ")",
        "",
        "func main() {",
        "    ctx, cancel := context.WithCancel(context.Background())",
        "    cancel()",
        "    fmt.Println(ctx.Err())",
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
        "WithCancel でキャンセル可能にします。",
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["WithCancel", "WithTimeout", "WithValue"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "context canceled\n"
        }
      ]
    },
    {
      "title": "time.Duration",
      "description": "時間の長さを扱いましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Duration とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 時間の長さ\n\n**time.Duration** は、ナノ秒単位の時間を表します。\n\n```go\nd := 5 * time.Second\nd := 100 * time.Millisecond\nd := 2 * time.Hour\n```"
        },
        {
          "title": "Sleep で一時停止",
          "image": "/illustrations/3d/robot.png",
          "content": "# 処理を一時停止\n\n```go\ntime.Sleep(1 * time.Second)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    // Millisecond でミリ秒を表す\n    d := 500 * time.Millisecond\n    fmt.Println(d)\n}",
      "holeyCode": "package main\n\nimport (\n    \"fmt\"\n    \"time\"\n)\n\nfunc main() {\n    // Millisecond でミリ秒を表す\n    d := 500 * time.___\n    fmt.Println(d)\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"fmt\"",
        "    \"time\"",
        ")",
        "",
        "func main() {",
        "    d := 500 * time.Millisecond",
        "    fmt.Println(d)",
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
        "Millisecond でミリ秒を表します。",
        null,
        null
      ],
      "candidates": {
        "constants": ["Millisecond", "Second", "Minute"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "500ms\n"
        }
      ]
    },
    {
      "title": "json.Marshal",
      "description": "構造体をJSONに変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "Marshal とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# Go → JSON\n\n**json.Marshal** で Go の値を JSON に変換します。\n\n```go\ntype User struct {\n    Name string `json:\"name\"`\n    Age  int    `json:\"age\"`\n}\n\ndata, _ := json.Marshal(user)\n```"
        },
        {
          "title": "タグ",
          "image": "/illustrations/3d/robot.png",
          "content": "# JSON キー名を指定\n\n```go\ntype Person struct {\n    Name string `json:\"name\"`\n    Age  int    `json:\"age,omitempty\"`\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Item struct {\n    Name string `json:\"name\"`\n}\n\nfunc main() {\n    item := Item{Name: \"Apple\"}\n    // Marshal で JSON に変換\n    data, _ := json.Marshal(item)\n    fmt.Println(string(data))\n}",
      "holeyCode": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Item struct {\n    Name string `json:\"name\"`\n}\n\nfunc main() {\n    // \"Apple\" で構造体を初期化\n    item := Item{Name: ___}\n    // Marshal で JSON に変換\n    data, _ := json.___(item)\n    fmt.Println(string(data))\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"encoding/json\"",
        "    \"fmt\"",
        ")",
        "",
        "type Item struct {",
        "    Name string `json:\"name\"`",
        "}",
        "",
        "func main() {",
        "    item := Item{Name: \"Apple\"}",
        "    data, _ := json.Marshal(item)",
        "    fmt.Println(string(data))",
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
        null,
        null,
        null,
        null,
        "Marshal で JSON に変換します。",
        null,
        null
      ],
      "candidates": {
        "functions": ["Marshal", "Encode", "Stringify"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "{\"name\":\"Apple\"}\n"
        }
      ]
    },
    {
      "title": "json.Unmarshal",
      "description": "JSONを構造体に変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Unmarshal とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# JSON → Go\n\n**json.Unmarshal** で JSON を Go の値に変換します。\n\n```go\nvar user User\nerr := json.Unmarshal(data, &user)\n```"
        },
        {
          "title": "ポインタを渡す",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# & を忘れずに\n\n```go\njson.Unmarshal(data, &result)  // OK\njson.Unmarshal(data, result)   // NG\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Item struct {\n    Name string `json:\"name\"`\n}\n\nfunc main() {\n    data := []byte(`{\"name\":\"Banana\"}`)\n    var item Item\n    // Unmarshal で JSON をパース\n    json.Unmarshal(data, &item)\n    fmt.Println(item.Name)\n}",
      "holeyCode": "package main\n\nimport (\n    \"encoding/json\"\n    \"fmt\"\n)\n\ntype Item struct {\n    Name string `json:\"name\"`\n}\n\nfunc main() {\n    // \"Banana\" を含むJSON文字列をバイト列に変換\n    data := []byte(`{\"name\":___}`)\n    var item Item\n    // Unmarshal で JSON をパース\n    json.___(data, &item)\n    fmt.Println(item.Name)\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"encoding/json\"",
        "    \"fmt\"",
        ")",
        "",
        "type Item struct {",
        "    Name string `json:\"name\"`",
        "}",
        "",
        "func main() {",
        "    data := []byte(`{\"name\":\"Banana\"}`)",
        "    var item Item",
        "    json.Unmarshal(data, &item)",
        "    fmt.Println(item.Name)",
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
        null,
        null,
        null,
        null,
        null,
        "Unmarshal で JSON をパースします。",
        null,
        null
      ],
      "candidates": {
        "functions": ["Unmarshal", "Decode", "Parse"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Banana\n"
        }
      ]
    },
    {
      "title": "strings パッケージ",
      "description": "文字列操作関数を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "strings パッケージ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列操作\n\n**strings** パッケージには便利な関数があります。\n\n```go\nstrings.Contains(s, \"hello\")\nstrings.HasPrefix(s, \"pre\")\nstrings.Split(s, \",\")\n```"
        },
        {
          "title": "よく使う関数",
          "image": "/illustrations/3d/robot.png",
          "content": "# 変換と検索\n\n```go\nstrings.ToUpper(s)\nstrings.ToLower(s)\nstrings.TrimSpace(s)\nstrings.Replace(s, \"old\", \"new\", -1)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    s := \"hello,world\"\n    // Split で文字列を分割\n    parts := strings.Split(s, \",\")\n    fmt.Println(parts[0])\n}",
      "holeyCode": "package main\n\nimport (\n    \"fmt\"\n    \"strings\"\n)\n\nfunc main() {\n    // 分割する文字列 \"hello,world\"\n    s := ___\n    // Split で文字列を分割\n    parts := strings.___(s, \",\")\n    fmt.Println(parts[0])\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"fmt\"",
        "    \"strings\"",
        ")",
        "",
        "func main() {",
        "    s := \"hello,world\"",
        "    parts := strings.Split(s, \",\")",
        "    fmt.Println(parts[0])",
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
        "Split で文字列を分割します。",
        null,
        null
      ],
      "candidates": {
        "functions": ["Split", "Join", "Cut"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello\n"
        }
      ]
    },
    {
      "title": "strconv.Atoi",
      "description": "文字列を数値に変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "strconv パッケージ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列と数値の変換\n\n**strconv.Atoi** で文字列を整数に変換します。\n\n```go\nnum, err := strconv.Atoi(\"123\")\nif err != nil {\n    // エラー処理\n}\n```"
        },
        {
          "title": "逆変換",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 数値から文字列\n\n```go\ns := strconv.Itoa(123)  // \"123\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    // Atoi で文字列を整数に変換\n    num, _ := strconv.Atoi(\"42\")\n    fmt.Println(num * 2)\n}",
      "holeyCode": "package main\n\nimport (\n    \"fmt\"\n    \"strconv\"\n)\n\nfunc main() {\n    // Atoi で文字列を整数に変換\n    num, _ := strconv.___(\"42\")\n    fmt.Println(num * 2)\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"fmt\"",
        "    \"strconv\"",
        ")",
        "",
        "func main() {",
        "    num, _ := strconv.Atoi(\"42\")",
        "    fmt.Println(num * 2)",
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
        "Atoi で文字列を整数に変換します。",
        null,
        null
      ],
      "candidates": {
        "functions": ["Atoi", "ParseInt", "ToInt"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "84\n"
        }
      ]
    },
    {
      "title": "os.Args",
      "description": "コマンドライン引数を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "os.Args とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# コマンドライン引数\n\n**os.Args** でコマンドライン引数を取得できます。\n\n```go\n// go run main.go arg1 arg2\nos.Args[0]  // \"main\" (プログラム名)\nos.Args[1]  // \"arg1\"\nos.Args[2]  // \"arg2\"\n```"
        },
        {
          "title": "len で引数数を確認",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 引数の数をチェック\n\n```go\nif len(os.Args) < 2 {\n    fmt.Println(\"Usage: program <arg>\")\n    return\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n)\n\nfunc main() {\n    // Args でコマンドライン引数を取得\n    fmt.Println(len(os.Args))\n}",
      "holeyCode": "package main\n\nimport (\n    \"fmt\"\n    \"os\"\n)\n\nfunc main() {\n    // Args でコマンドライン引数を取得\n    fmt.Println(len(os.___))\n}",
      "correctLines": [
        "package main",
        "",
        "import (",
        "    \"fmt\"",
        "    \"os\"",
        ")",
        "",
        "func main() {",
        "    fmt.Println(len(os.Args))",
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
        "Args でコマンドライン引数を取得します。",
        null
      ],
      "candidates": {
        "variables": ["Args", "Argv", "Arguments"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    }
  ]
}
