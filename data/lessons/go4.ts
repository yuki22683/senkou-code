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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    var ___ ___.___\\n    ___ := ___\\n    \\n    // Lock でロックを取得\\n    ___.___()\\n    ___++\\n    // Unlock でロックを解放\\n    ___.___()\\n    \\n    ___.___(___)\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "fmtパッケージをインポートします。",
          "syncパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          "sync.Mutex型の変数muを宣言します。",
          "変数countを0で初期化します。",
          null,
          null,
          "mu.Lock()でロックを取得します。",
          "countをインクリメントします。",
          null,
          "mu.Unlock()でロックを解放します。",
          null,
          "fmt.Printlnでcountの値を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "methods": [
            "Lock",
            "Acquire",
            "Enter"
          ],
          "others": ["Unlock", "main", "fmt", "sync", "Mutex", "count", "Println", "mu", "0", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    var ___ ___.___\\n    // Add でカウンタを増やす\\n    ___.___(___)\\n    \\n    go func___ ___\\n        // Done でカウンタを減らす\\n        defer ___.___()\\n        ___.___(\\\"\")\\n    ___()\\n    \\n    // Wait でカウンタが0になるまで待つ\\n    ___.___()\\n    ___.___(\\\"\")\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "fmtパッケージをインポートします。",
          "syncパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          "sync.WaitGroup型の変数wgを宣言します。",
          null,
          "wg.Add(1)でカウンタを1増やします。",
          null,
          "goキーワードでgoroutineを起動し、無名関数を定義します。",
          null,
          "deferでwg.Done()をgoroutine終了時に実行します。",
          "fmt.Printlnで\"goroutine\"を出力します。",
          "閉じ波括弧と()で無名関数を即時実行します。",
          null,
          null,
          "wg.Wait()でカウンタが0になるまで待ちます。",
          "fmt.Printlnで\"done\"を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "methods": [
            "Done",
            "Finish",
            "Complete"
          ],
          "others": ["Add", "Wait", "main", "fmt", "sync", "WaitGroup", "1", "Println", "wg", "goroutine", "done", "(", ")", "{", "}", "()"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    // Background でルートコンテキストを作成\\n    ___ := ___.___()\\n    // Err でエラーを取得\\n    ___.___(___.___())\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "contextパッケージをインポートします。",
          "fmtパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "context.Background()でルートコンテキストを作成し、ctxに代入します。",
          null,
          "fmt.Printlnでctx.Err()の結果を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "Background",
            "WithCancel",
            "WithTimeout"
          ],
          "others": ["Err", "main", "context", "fmt", "ctx", "Println", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    // WithCancel でキャンセル可能に\\n    ___, ___ := ___.___(___.___())\\n    // cancel でキャンセル\\n    ___()\\n    ___.___(___.___())\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "contextパッケージをインポートします。",
          "fmtパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "context.WithCancelでキャンセル可能なコンテキストを作成し、ctxとcancelに代入します。",
          null,
          "cancel関数を呼び出してコンテキストをキャンセルします。",
          "fmt.Printlnでctx.Err()の結果を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "WithCancel",
            "WithTimeout",
            "WithValue"
          ],
          "others": ["cancel", "main", "context", "fmt", "Background", "Println", "ctx", "Err", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    // Millisecond でミリ秒を表す\\n    ___ := ___ * ___.___\\n    ___.___(___)\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "fmtパッケージをインポートします。",
          "timeパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "500 * time.Millisecondで500ミリ秒を表すDuration値を作成し、dに代入します。",
          "fmt.Printlnでdの値を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "constants": [
            "Millisecond",
            "Second",
            "Minute"
          ],
          "others": ["main", "fmt", "time", "d", "Println", "500", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\ntype ___ struct ___\\n    ___ ___ `json:\\\"___\\\"`\\n___\\n\\nfunc ___() ___\\n    // \"Apple\" で構造体を初期化\\n    ___ := ___{___: \\\"___\\\"}\\n    // Marshal で JSON に変換\\n    ___, _ := ___.___(___)\\n    ___.___(___(___))\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "encoding/jsonパッケージをインポートします。",
          "fmtパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "type と struct で構造体を定義し、開き波括弧でブロックを開始します。",
          "Name フィールド（string型）にJSONタグ \"name\" を付けます。",
          "閉じ波括弧で構造体の定義を終了します。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "Item構造体をName: \"Apple\"で初期化し、itemに代入します。",
          null,
          "json.Marshalでitemを JSON バイト列に変換し、dataに代入します。",
          "fmt.Printlnでstring(data)を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "Marshal",
            "Encode",
            "Stringify"
          ],
          "others": ["Apple", "main", "encoding/json", "fmt", "Item", "Name", "string", "name", "item", "data", "json", "Println", "(", ")", "{", "}", ":"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\ntype ___ struct ___\\n    ___ ___ `json:\\\"___\\\"`\\n___\\n\\nfunc ___() ___\\n    // \"Banana\" を含むJSON文字列をバイト列に変換\\n    ___ := []___(`{\\\"___\\\":\\\"___\\\"}`)\\n    var ___ ___\\n    // Unmarshal で JSON をパース\\n    ___.___(___, &___)\\n    ___.___(___.___)\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "encoding/jsonパッケージをインポートします。",
          "fmtパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "type と struct で構造体を定義し、開き波括弧でブロックを開始します。",
          "Name フィールド（string型）にJSONタグ \"name\" を付けます。",
          "閉じ波括弧で構造体の定義を終了します。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "JSON文字列をbyteスライスに変換し、dataに代入します。",
          "Item型の変数itemを宣言します。",
          null,
          "json.Unmarshalでdataをパースし、itemに格納します。",
          "fmt.Printlnでitem.Nameを出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "Unmarshal",
            "Decode",
            "Parse"
          ],
          "others": ["Banana", "main", "encoding/json", "fmt", "Item", "Name", "string", "name", "data", "item", "json", "Println", "byte", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    // 分割する文字列 \"hello,world\"\\n    ___ := \\\"___\\\"\\n    // Split で文字列を分割\\n    ___ := ___.___(___, \\\",\\\")\\n    ___.___(___[___])\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "fmtパッケージをインポートします。",
          "stringsパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "文字列 \"hello,world\" を変数sに代入します。",
          null,
          "strings.Splitでsを \",\" で分割し、partsに代入します。",
          "fmt.Printlnでparts[0]（最初の要素）を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "Split",
            "Join",
            "Cut"
          ],
          "others": ["hello,world", "main", "fmt", "strings", "s", "parts", "Println", "0", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    // Atoi で文字列を整数に変換\\n    ___, _ := ___.___(\\\"\")\\n    ___.___(___ * ___)\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "fmtパッケージをインポートします。",
          "strconvパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "strconv.Atoiで文字列\"42\"を整数に変換し、numに代入します。",
          "fmt.Printlnでnum * 2の結果を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "Atoi",
            "ParseInt",
            "ToInt"
          ],
          "others": ["main", "fmt", "strconv", "42", "Println", "num", "2", "(", ")", "{", "}"]
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
      "holeyCode": "package ___\\n\\nimport ___\\n    \\\"___\\\"\\n    \\\"___\\\"\\n___\\n\\nfunc ___() ___\\n    // Args でコマンドライン引数を取得\\n    ___.___(___(___.___))\\n___",
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
          "mainパッケージを宣言します。",
          null,
          "importの開き括弧です。",
          "fmtパッケージをインポートします。",
          "osパッケージをインポートします。",
          "importの閉じ括弧です。",
          null,
          "main関数を定義し、開き波括弧でブロックを開始します。",
          null,
          "fmt.Printlnでlen(os.Args)の結果を出力します。",
          "閉じ波括弧で関数ブロックを終了します。"
        ],
        "candidates": {
          "variables": [
            "Args",
            "Argv",
            "Arguments"
          ],
          "others": ["main", "fmt", "os", "Println", "len", "(", ")", "{", "}"]
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
