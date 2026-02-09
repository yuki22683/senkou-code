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
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"sync\"\\n)\\n\\nfunc main() {\\n    var mu sync.Mutex\\n    count := 0\\n    \\n    // Lock でロックを取得\\n    mu.Lock()\\n    count++\\n    // Unlock でロックを解放\\n    mu.Unlock()\\n    \\n    fmt.Println(count)\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \\\"___\\\"\\n    \"___\"\\n___\\n___\\nfunc ___ () {\\n    var mu sync.___\\n    ___ := 0\\n    ___\\n    // Lock でロックを取得\\n    mu.___()\\n    ___++\\n    // Unlock でロックを解放\\n    mu.___()\\n    ___\\n    fmt.___(count)\\n___",
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
          "    // Lock でロックを取得",
          "    mu.Lock()",
          "    count++",
          "    // Unlock でロックを解放",
          "    mu.Unlock()",
          "    ",
          "    fmt.Println(count)",
          "}"
        ],
      "lineHints": [
          "Lock でロックを取得します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "Lock",
            "Acquire",
            "Enter"
          ],
          "others": ["Unlock", "main", "(", "fmt", "sync", ")", "main()", "Mutex", "count", "Println", "}", "main", "", "(", ")", "Mutex"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "sync.WaitGroup",
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"sync\"\\n)\\n\\nfunc main() {\\n    var wg sync.WaitGroup\\n    // Add でカウンタを増やす\\n    wg.Add(1)\\n    \\n    go func() {\\n        // Done でカウンタを減らす\\n        defer wg.Done()\\n        fmt.Println(\"goroutine\")\\n    }()\\n    \\n    // Wait でカウンタが0になるまで待つ\\n    wg.Wait()\\n    fmt.Println(\"done\")\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \\\"___\\\"\\n    \"___\"\\n___\\n___\\nfunc ___ () {\\n    var wg sync.___\\n    // Add でカウンタを増やす\\n    wg.Add(___)\\n    ___\\n    go ___() {\\n        // Done でカウンタを減らす\\n        defer wg.___()\\n        fmt.___(\"goroutine\")\\n    ___()\\n    ___\\n    // Wait でカウンタが0になるまで待つ\\n    wg.___()\\n    fmt.___(\"done\")\\n___",
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
          "    // Add でカウンタを増やす",
          "    wg.Add(1)",
          "    ",
          "    go func() {",
          "        // Done でカウンタを減らす",
          "        defer wg.Done()",
          "        fmt.Println(\"goroutine\")",
          "    }()",
          "    ",
          "    // Wait でカウンタが0になるまで待つ",
          "    wg.Wait()",
          "    fmt.Println(\"done\")",
          "}"
        ],
      "lineHints": [
          "Add でカウンタを増やします。",
          null,
          "Wait でカウンタが0になるまで待ちます。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "Done",
            "Finish",
            "Complete"
          ],
          "others": ["Add", "Wait", "main", "(", "fmt", "sync", ")", "main()", "WaitGroup", "1", "func", "Println", "}", "main", "", "(", ")", "WaitGroup"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "goroutine\\ndone\\n"
          }
        ]
      },
    {
      "title": "context.Background",
      "correctCode": "package main\\n\\nimport (\\n    \"context\"\\n    \"fmt\"\\n)\\n\\nfunc main() {\\n    // Background でルートコンテキストを作成\\n    ctx := context.Background()\\n    // Err でエラーを取得\\n    fmt.Println(ctx.Err())\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \"___\"\\n    \\\"___\\\"\\n___\\n___\\nfunc ___ () {\\n    // Background でルートコンテキストを作成\\n    ___ := context.Background()\\n    // Err でエラーを取得\\n    fmt.___(ctx.Err())\\n___",
      "correctLines": [
          "package main",
          "",
          "import (",
          "    \"context\"",
          "    \"fmt\"",
          ")",
          "",
          "func main() {",
          "    // Background でルートコンテキストを作成",
          "    ctx := context.Background()",
          "    // Err でエラーを取得",
          "    fmt.Println(ctx.Err())",
          "}"
        ],
      "lineHints": [
          "Background でルートコンテキストを作成します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Background",
            "WithCancel",
            "WithTimeout"
          ],
          "others": ["Err", "main", "(", "context", "fmt", ")", "main()", "ctx", "Println", "}", "main", "", "(", ")"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "<nil>\\n"
          }
        ]
      },
    {
      "title": "context.WithCancel",
      "correctCode": "package main\\n\\nimport (\\n    \"context\"\\n    \"fmt\"\\n)\\n\\nfunc main() {\\n    // WithCancel でキャンセル可能に\\n    ctx, cancel := context.WithCancel(context.Background())\\n    // cancel でキャンセル\\n    cancel()\\n    fmt.Println(ctx.Err())\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \"___\"\\n    \\\"___\\\"\\n___\\n___\\nfunc ___ () {\\n    // WithCancel でキャンセル可能に\\n    ctx, cancel := context.WithCancel(context.___())\\n    // cancel でキャンセル\\n    ___()\\n    fmt.___(ctx.Err())\\n___",
      "correctLines": [
          "package main",
          "",
          "import (",
          "    \"context\"",
          "    \"fmt\"",
          ")",
          "",
          "func main() {",
          "    // WithCancel でキャンセル可能に",
          "    ctx, cancel := context.WithCancel(context.Background())",
          "    // cancel でキャンセル",
          "    cancel()",
          "    fmt.Println(ctx.Err())",
          "}"
        ],
      "lineHints": [
          "WithCancel でキャンセル可能にします。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "関数（cancel）を呼び出して実行する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "WithCancel",
            "WithTimeout",
            "WithValue"
          ],
          "others": ["cancel", "main", "(", "context", "fmt", ")", "main()", "Background", "Println", "}", "main", "", "(", ")"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "context canceled\\n"
          }
        ]
      },
    {
      "title": "time.Duration",
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"time\"\\n)\\n\\nfunc main() {\\n    // Millisecond でミリ秒を表す\\n    d := 500 * time.Millisecond\\n    fmt.Println(d)\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n___\\nfunc ___ () {\\n    // Millisecond でミリ秒を表す\\n    ___ := 500 * time.Millisecond\\n    fmt.___(d)\\n___",
      "correctLines": [
          "package main",
          "",
          "import (",
          "    \"fmt\"",
          "    \"time\"",
          ")",
          "",
          "func main() {",
          "    // Millisecond でミリ秒を表す",
          "    d := 500 * time.Millisecond",
          "    fmt.Println(d)",
          "}"
        ],
      "lineHints": [
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "constants": [
            "Millisecond",
            "Second",
            "Minute"
          ],
          "others": ["main", "(", "fmt", "time", ")", "main()", "d", "Println", "}", "main", "", "(", ")"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "500ms\\n"
          }
        ]
      },
    {
      "title": "json.Marshal",
      "correctCode": "package main\\n\\nimport (\\n    \"encoding/json\"\\n    \"fmt\"\\n)\\n\\ntype Item struct {\\n    Name string `json:\"name\"`\\n}\\n\\nfunc main() {\\n    // \"Apple\" で構造体を初期化\\n    item := Item{Name: \"Apple\"}\\n    // Marshal で JSON に変換\\n    data, _ := json.Marshal(item)\\n    fmt.Println(string(data))\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \"___\"\\n    \\\"___\\\"\\n___\\n___\\ntype Item ___ {\\n    Name string `json:\"___\"`\\n___\\n___\\nfunc ___ () {\\n    // \"Apple\" で構造体を初期化\\n    ___ := Item{Name: \"Apple\"}\\n    // Marshal で JSON に変換\\n    data, _ := json.Marshal(___)\\n    fmt.___(string(data))\\n___",
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
          "    // \"Apple\" で構造体を初期化",
          "    item := Item{Name: \"Apple\"}",
          "    // Marshal で JSON に変換",
          "    data, _ := json.Marshal(item)",
          "    fmt.Println(string(data))",
          "}"
        ],
      "lineHints": [
          " を入力して構造体を初期化します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Marshal",
            "Encode",
            "Stringify"
          ],
          "others": ["\"Apple\"", "main", "(", "encoding/json", "fmt", ")", "struct", "name", "}", "main()", "item", "Println", "main", "", "(", ")", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{\"name\":\"Apple\"}\\n"
          }
        ]
      },
    {
      "title": "json.Unmarshal",
      "correctCode": "package main\\n\\nimport (\\n    \"encoding/json\"\\n    \"fmt\"\\n)\\n\\ntype Item struct {\\n    Name string `json:\"name\"`\\n}\\n\\nfunc main() {\\n    // \"Banana\" を含むJSON文字列をバイト列に変換\\n    data := []byte(`{\"name\":\"Banana\"}`)\\n    var item Item\\n    // Unmarshal で JSON をパース\\n    json.Unmarshal(data, &item)\\n    fmt.Println(item.Name)\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \"___\"\\n    \\\"___\\\"\\n___\\n___\\ntype Item ___ {\\n    Name string `json:\"___\"`\\n___\\n___\\nfunc ___ () {\\n    // \"Banana\" を含むJSON文字列をバイト列に変換\\n    ___ := []byte(`{\"name\":\"Banana\"}`)\\n    var item ___\\n    // Unmarshal で JSON をパース\\n    json.Unmarshal(data, &___)\\n    fmt.___(item.Name)\\n___",
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
          "    // \"Banana\" を含むJSON文字列をバイト列に変換",
          "    data := []byte(`{\"name\":\"Banana\"}`)",
          "    var item Item",
          "    // Unmarshal で JSON をパース",
          "    json.Unmarshal(data, &item)",
          "    fmt.Println(item.Name)",
          "}"
        ],
      "lineHints": [
          " を入力してJSONを完成させます。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
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
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Unmarshal",
            "Decode",
            "Parse"
          ],
          "others": ["\"Banana\"", "main", "(", "encoding/json", "fmt", ")", "struct", "name", "}", "main()", "data", "Item", "item", "Println", "main", "", "(", ")", "}", "Item", "Item", "Item\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Banana\\n"
          }
        ]
      },
    {
      "title": "strings パッケージ",
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"strings\"\\n)\\n\\nfunc main() {\\n    // 分割する文字列 \"hello,world\"\\n    s := \"hello,world\"\\n    // Split で文字列を分割\\n    parts := strings.Split(s, \",\")\\n    fmt.Println(parts[0])\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \\\"___\\\"\\n    \"___\"\\n___\\n___\\nfunc ___ () {\\n    // 分割する文字列 \"hello,world\"\\n    ___ := \"hello,world\"\\n    // Split で文字列を分割\\n    ___ := strings.Split(s, \",\")\\n    fmt.___(parts[0])\\n___",
      "correctLines": [
          "package main",
          "",
          "import (",
          "    \"fmt\"",
          "    \"strings\"",
          ")",
          "",
          "func main() {",
          "    // 分割する文字列 \"hello,world\"",
          "    s := \"hello,world\"",
          "    // Split で文字列を分割",
          "    parts := strings.Split(s, \",\")",
          "    fmt.Println(parts[0])",
          "}"
        ],
      "lineHints": [
          " を入力して文字列を設定します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "Split",
            "Join",
            "Cut"
          ],
          "others": ["\"hello,world\"", "main", "(", "fmt", "strings", ")", "main()", "s", "parts", "Println", "}", "main", "", "(", ")"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "hello\\n"
          }
        ]
      },
    {
      "title": "strconv.Atoi",
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"strconv\"\\n)\\n\\nfunc main() {\\n    // Atoi で文字列を整数に変換\\n    num, _ := strconv.Atoi(\"42\")\\n    fmt.Println(num * 2)\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n___\\nfunc ___ () {\\n    // Atoi で文字列を整数に変換\\n    num, _ := strconv.Atoi(\"___\")\\n    fmt.___(num * 2)\\n___",
      "correctLines": [
          "package main",
          "",
          "import (",
          "    \"fmt\"",
          "    \"strconv\"",
          ")",
          "",
          "func main() {",
          "    // Atoi で文字列を整数に変換",
          "    num, _ := strconv.Atoi(\"42\")",
          "    fmt.Println(num * 2)",
          "}"
        ],
      "lineHints": [
          "Atoi で文字列を整数に変換します。",
          null,
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
          "functions": [
            "Atoi",
            "ParseInt",
            "ToInt"
          ],
          "others": ["main", "(", "fmt", "strconv", ")", "main()", "42", "Println", "}", "main", "", "(", ")"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\\n"
          }
        ]
      },
    {
      "title": "os.Args",
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"os\"\\n)\\n\\nfunc main() {\\n    // Args でコマンドライン引数を取得\\n    fmt.Println(len(os.Args))\\n}",
      "holeyCode": "package ___\\n___\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n___\\nfunc ___ () {\\n    // Args でコマンドライン引数を取得\\n    fmt.___(len(os.Args))\\n___",
      "correctLines": [
          "package main",
          "",
          "import (",
          "    \"fmt\"",
          "    \"os\"",
          ")",
          "",
          "func main() {",
          "    // Args でコマンドライン引数を取得",
          "    fmt.Println(len(os.Args))",
          "}"
        ],
      "lineHints": [
          "Args でコマンドライン引数を取得します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "Args",
            "Argv",
            "Arguments"
          ],
          "others": ["main", "(", "fmt", "os", ")", "main()", "Println", "}", "main", "", "(", ")"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      }
  ]
}
