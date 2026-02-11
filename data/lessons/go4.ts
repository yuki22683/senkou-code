export const go4Data = {
  "language": "go",
  "lessonId": "go-4",
  "lessonTitle": "Go IV - 並行処理とネットワーク",
  "lessonDescription": "Go言語の並行処理とネットワークプログラミングを学びます。context、sync、httpなど、実用的なパターンを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "sync.Mutex",
      "content": "複数のゴルーチンから安全にデータにアクセスするには `sync.Mutex` を使います。\\n\\n```go\\nvar mu sync.Mutex\\ncount := 0\\n\\nmu.Lock()   // ロック\\ncount++\\nmu.Unlock() // アンロック\\n```\\n\\nロック中は他のゴルーチンは待ちます。"
    },
    {
      "title": "sync.WaitGroup",
      "content": "複数のゴルーチンの完了を待つには `sync.WaitGroup` を使います。\\n\\n```go\\nvar wg sync.WaitGroup\\n\\nwg.Add(1) // カウンタを増やす\\ngo func() {\\n    defer wg.Done() // 完了を通知\\n    // 処理...\\n}()\\nwg.Wait() // 全て完了まで待つ\\n```"
    },
    {
      "title": "select文",
      "content": "`select` で複数のチャネルを待てます。\\n\\n```go\\nselect {\\ncase msg := <-ch1:\\n    fmt.Println(msg)\\ncase msg := <-ch2:\\n    fmt.Println(msg)\\ndefault:\\n    fmt.Println(\\\"データなし\\\")\\n}\\n```\\n\\n最初に準備できたチャネルが選ばれます。"
    },
    {
      "title": "HTTPサーバー",
      "content": "Goで簡単にWebサーバーを作れます。\\n\\n```go\\nhttp.HandleFunc(\\\"/\\\", func(w http.ResponseWriter, r *http.Request) {\\n    fmt.Fprintf(w, \\\"Hello!\\\")\\n})\\nhttp.ListenAndServe(\\\":8080\\\", nil)\\n```\\n\\n数行でサーバーが完成！"
    },
    {
      "title": "HTTPクライアント",
      "content": "HTTPリクエストも簡単です。\\n\\n```go\\nresp, err := http.Get(\\\"https://example.com\\\")\\nif err != nil {\\n    log.Fatal(err)\\n}\\ndefer resp.Body.Close()\\nbody, _ := io.ReadAll(resp.Body)\\n```"
    },
    {
      "title": "JSON処理",
      "content": "JSONの読み書きは `encoding/json` パッケージを使います。\\n\\n```go\\ntype User struct {\\n    Name string `json:\\\"name\\\"`\\n    Age  int    `json:\\\"age\\\"`\\n}\\n\\ndata, _ := json.Marshal(user) // 構造体→JSON\\njson.Unmarshal(data, &user)   // JSON→構造体\\n```"
    }
  ],
  "exercises": [
    {
      "title": "sync.Mutex",
      "description": "Mutexについて学びます",
      "tutorialSlides": [
        {
          "title": "Mutex（ミューテックス）とは？",
          "content": "# 「今は私だけ！」と宣言する仕組み\\n\\n**Mutex** は、複数のゴルーチンが同じデータを同時に変更しないようにする「鍵」です。\\n\\n**たとえるなら：**\\n- トイレの個室のカギ\\n- 入る前に「Lock（ロック）」→ 使用中\\n- 出るときに「Unlock（アンロック）」→ 次の人どうぞ\\n\\n**コード例：**\\n```go\\nvar mu sync.Mutex  // カギを用意\\nvar count int\\n\\nmu.Lock()    // カギを閉める（他の人は待つ）\\ncount++      // 安全にデータを変更\\nmu.Unlock()  // カギを開ける（次の人OK）\\n```"
        },
        {
          "title": "defer と組み合わせると安全",
          "content": "# ロック忘れを防ぐ\\n\\n`defer` と組み合わせると、関数を抜けるときに必ず Unlock されます。\\n\\n**コード例：**\\n```go\\nmu.Lock()\\ndefer mu.Unlock()  // 関数を抜けるとき必ずUnlock\\n\\n// ここで何か処理...\\n// エラーが起きても、returnしても、Unlockされる！\\n```\\n\\n**なぜ大事？**\\n- Unlock を忘れると他のゴルーチンが永遠に待ち続ける\\n- defer を使えば忘れる心配なし！"
        }
      ],
      "correctCode": "// モジュールを宣言\\npackage main\\n\\n// ライブラリを読み込む\\nimport (\\n    // パッケージをインポート\\n    \"fmt\"\\n    // パッケージをインポート\\n    \"sync\"\\n// 関数呼び出しを閉じる\\n)\\n\\n// main関数を定義\\nfunc main() {\\n    // パッケージをインポート\\n    var mu sync.Mutex\\n    // 変数を宣言\\n    count := 0\\n    \\n    // Lock でロックを取得\\n    mu.Lock()\\n    // 変数を更新\\n    count++\\n    // Unlock でロックを解放\\n    mu.Unlock()\\n    \\n    // countを出力\\n    fmt.Println(count)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // パッケージをインポート\\n    var ___ ___.___\\n    // 変数を宣言\\n    ___ := ___\\n    \\n    // Lock でロックを取得\\n    ___.___()\\n    // 変数を更新\\n    ___++\\n    // Unlock でロックを解放\\n    ___.___()\\n    \\n    // countを出力\\n    ___.___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "",
          "// ライブラリを読み込む",
          "import (",
          "    // パッケージをインポート",
          "    \"fmt\"",
          "    // パッケージをインポート",
          "    \"sync\"",
          "// 関数呼び出しを閉じる",
          ")",
          "",
          "// main関数を定義",
          "func main() {",
          "    // パッケージをインポート",
          "    var mu sync.Mutex",
          "    // 変数を宣言",
          "    count := 0",
          "    ",
          "    // Lock でロックを取得",
          "    mu.Lock()",
          "    // 変数を更新",
          "    count++",
          "    // Unlock でロックを解放",
          "    mu.Unlock()",
          "    ",
          "    // countを出力",
          "    fmt.Println(count)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          ""
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
      "description": "WaitGroupについて学びます",
      "tutorialSlides": [
        {
          "title": "WaitGroup（ウェイトグループ）とは？",
          "content": "# 「みんな終わるまで待つ」仕組み\\n\\n**WaitGroup** は、複数のゴルーチンが全部終わるまで待つための仕組みです。\\n\\n**たとえるなら：**\\n- 遠足で全員がバスに戻るまで出発しない\\n- 「あと何人？」をカウントする先生役\\n\\n**コード例：**\\n```go\\nvar wg sync.WaitGroup\\nwg.Add(1)  // 「1人出発するよ」\\n\\ngo func() {\\n    defer wg.Done()  // 「1人戻ったよ」\\n    // 処理...\\n}()\\n\\nwg.Wait()  // 全員戻るまで待つ\\n```"
        },
        {
          "title": "3つのメソッド",
          "content": "# Add, Done, Wait を覚えよう\\n\\n**3つのメソッドの役割：**\\n\\n- `Add(n)` → 「n人出発するよ」カウントを増やす\\n- `Done()` → 「1人終わったよ」カウントを1減らす\\n- `Wait()` → カウントが0になるまで待つ\\n\\n**使い方の流れ：**\\n```go\\nwg.Add(3)  // 3つのゴルーチンを待つ\\n\\ngo func() { defer wg.Done(); /* 処理1 */ }()\\ngo func() { defer wg.Done(); /* 処理2 */ }()\\ngo func() { defer wg.Done(); /* 処理3 */ }()\\n\\nwg.Wait()  // 3つ全部終わるまでここで止まる\\nfmt.Println(\"全員完了！\")\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"sync\"\\n)\\n\\nfunc main() {\\n    var wg sync.WaitGroup\\n    // Add でカウンタを増やす\\n    wg.Add(1)\\n    \\n    go func() {\\n        // Done でカウンタを減らす\\n        defer wg.Done()\\n        fmt.Println(\"goroutine\")\\n    }()\\n    \\n    // Wait でカウンタが0になるまで待つ\\n    wg.Wait()\\n    fmt.Println(\"done\")\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // 変数を宣言\\n    var ___ ___.___\\n    // Add でカウンタを増やす\\n    ___.___(___)\\n    \\n    // ゴルーチンを起動\\n    go func___ ___\\n        // Done でカウンタを減らす\\n        defer ___.___()\\n        // \\\"\\\"\\n        ___.___(\\\"\\\")\\n    // クロージャを閉じて実行\\n    ___()\\n    \\n    // Wait でカウンタが0になるまで待つ\\n    ___.___()\\n    // \\\"\\\"\\n    ___.___(\\\"\\\")\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null
        ],
        "candidates": {
          "methods": [
            "Done",
            "Finish",
            "Complete"
          ],
          "others": ["Add", "Wait", "main", "fmt", "sync", "WaitGroup", "1", "Println", "wg", "goroutine", "done", "(", ")", "{", "}", "()", "nc\"", "ar wg sync.WaitGroup", "wg.Add(1)", "// Done でカウンタを減らす", "fmt.Println(\"goroutine\")", "ntln(\"done\")"]
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
      "description": "contextについて学びます",
      "tutorialSlides": [
        {
          "title": "context（コンテキスト）とは？",
          "content": "# 処理を「キャンセル」したり「制限時間」をつける仕組み\\n\\n**context** は、処理を途中で止めたり、時間制限をつけたりするための仕組みです。\\n\\n**たとえるなら：**\\n- レストランで注文したけど「やっぱりキャンセル」\\n- 「5分待っても料理が来なかったら帰る」\\n\\n**なぜ必要？**\\n- ユーザーがページを閉じたら、データ取得も止めたい\\n- 時間がかかりすぎたら諦めたい\\n\\n**基本のコンテキスト：**\\n```go\\nctx := context.Background()  // 一番基本のコンテキスト\\n```"
        },
        {
          "title": "色々なコンテキスト",
          "content": "# キャンセルや時間制限をつける\\n\\n基本のコンテキストから、機能を追加したコンテキストを作れます。\\n\\n**WithCancel：キャンセルできる**\\n```go\\nctx, cancel := context.WithCancel(context.Background())\\ndefer cancel()  // 関数を抜けるときキャンセル\\n```\\n\\n**WithTimeout：時間制限をつける**\\n```go\\n// 5秒で自動的にキャンセル\\nctx, cancel := context.WithTimeout(ctx, 5*time.Second)\\ndefer cancel()\\n```\\n\\n**ポイント：**\\n`cancel()` を呼ぶと、そのコンテキストを使っている処理に「もう止めて」と伝えられます。"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"context\"\\n    \"fmt\"\\n)\\n\\nfunc main() {\\n    // Background でルートコンテキストを作成\\n    ctx := context.Background()\\n    // Err でエラーを取得\\n    fmt.Println(ctx.Err())\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // Background でルートコンテキストを作成\\n    ___ := ___.___()\\n    // Err でエラーを取得\\n    ___.___(___.___())\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "functions": [
            "Background",
            "WithCancel",
            "WithTimeout"
          ],
          "others": ["Err", "main", "context", "fmt", "ctx", "Println", "(", ")", "{", "}", "t\"", "/ Background でルートコンテキストを作成", "// Err でエラーを取得"]
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
      "description": "context.WithCancelの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "WithCancel とは？",
          "content": "# キャンセル可能なコンテキスト\\n\\n**WithCancel** でキャンセル可能なコンテキストを作成できます。\\n\\n```go\\nctx, cancel := context.WithCancel(context.Background())\\ndefer cancel()\\n```"
        },
        {
          "title": "キャンセルの確認",
          "content": "# Done チャネル\\n\\n```go\\nselect {\\ncase <-ctx.Done():\\n    return ctx.Err()\\ndefault:\\n    // 処理続行\\n}\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"context\"\\n    \"fmt\"\\n)\\n\\nfunc main() {\\n    // WithCancel でキャンセル可能に\\n    ctx, cancel := context.WithCancel(context.Background())\\n    // cancel でキャンセル\\n    cancel()\\n    fmt.Println(ctx.Err())\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // WithCancel でキャンセル可能に\\n    ___, ___ := ___.___(___.___())\\n    // cancel でキャンセル\\n    ___()\\n    // 出力\\n    ___.___(___.___())\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          ""
        ],
        "candidates": {
          "functions": [
            "WithCancel",
            "WithTimeout",
            "WithValue"
          ],
          "others": ["cancel", "main", "context", "fmt", "Background", "Println", "ctx", "Err", "(", ")", "{", "}", "t\"", "/ WithCancel でキャンセル可能に", "// cancel でキャンセル"]
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
      "description": "time.Durationについて学びます",
      "tutorialSlides": [
        {
          "title": "Duration とは？",
          "content": "# 時間の長さ\\n\\n**time.Duration** は、ナノ秒単位の時間を表します。\\n\\n```go\\nd := 5 * time.Second\\nd := 100 * time.Millisecond\\nd := 2 * time.Hour\\n```"
        },
        {
          "title": "Sleep で一時停止",
          "content": "# 処理を一時停止\\n\\n```go\\ntime.Sleep(1 * time.Second)\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"time\"\\n)\\n\\nfunc main() {\\n    // Millisecond でミリ秒を表す\\n    d := 500 * time.Millisecond\\n    fmt.Println(d)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // Millisecond でミリ秒を表す\\n    ___ := ___ * ___.___\\n    // 出力\\n    ___.___(___)\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "constants": [
            "Millisecond",
            "Second",
            "Minute"
          ],
          "others": ["main", "fmt", "time", "d", "Println", "500", "(", ")", "{", "}", "me\"", "/ Millisecond でミリ秒を表す", "fmt.Println(d)"]
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
      "description": "JSONについて学びます",
      "tutorialSlides": [
        {
          "title": "json.Marshal（マーシャル）とは？",
          "content": "# Goのデータ → JSON に変換\\n\\n**JSON** は、データをやり取りするときによく使われる形式です。`json.Marshal` で Go のデータを JSON に変換できます。\\n\\n**たとえるなら：**\\n- Go のデータ = 日本語のメモ\\n- JSON = 世界共通語のメモ\\n- Marshal = 翻訳する\\n\\n**コード例：**\\n```go\\ntype User struct {\\n    Name string `json:\"name\"`\\n    Age  int    `json:\"age\"`\\n}\\n\\nuser := User{Name: \"Taro\", Age: 20}\\ndata, _ := json.Marshal(user)\\n// → {\"name\":\"Taro\",\"age\":20}\\n```"
        },
        {
          "title": "タグでJSONの名前を指定",
          "content": "# バッククォートでタグをつける\\n\\n構造体のフィールドに「タグ」をつけると、JSONでの名前を指定できます。\\n\\n**コード例：**\\n```go\\ntype Person struct {\\n    Name string `json:\"name\"`      // JSONでは\"name\"\\n    Age  int    `json:\"age\"`       // JSONでは\"age\"\\n}\\n```\\n\\n**タグの書き方：**\\n- フィールド名のあとに `` `json:\"名前\"` `` と書く\\n- バッククォート（`）で囲む（シングルクォートではない）\\n\\n**なぜ使う？**\\nGoでは「Name」だけど、JSONでは「name」（小文字）にしたい、など。"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"encoding/json\"\\n    \"fmt\"\\n)\\n\\ntype Item struct {\\n    Name string `json:\"name\"`\\n}\\n\\nfunc main() {\\n    // \"Apple\" で構造体を初期化\\n    item := Item{Name: \"Apple\"}\\n    // Marshal で JSON に変換\\n    data, _ := json.Marshal(item)\\n    fmt.Println(string(data))\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// ブロックを開始\\ntype ___ struct ___\\n    // \\\"\\\"\\n    ___ ___ `json:\\\"___\\\"`\\n// ブロックを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // \\\"Apple\\\" で構造体を初期化\\n    ___ := ___{___: \\\"___\\\"}\\n    // Marshal で JSON に変換\\n    ___, _ := ___.___(___)\\n    // 出力\\n    ___.___(___(___))\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          ""
        ],
        "candidates": {
          "functions": [
            "Marshal",
            "Encode",
            "Stringify"
          ],
          "others": ["Apple", "main", "encoding/json", "fmt", "Item", "Name", "string", "name", "item", "data", "json", "Println", "(", ")", "{", "}", ":", "t\"", "ame string `json:", "tem", "{Name: \"Apple\"}", "data,", "_", ".Marshal(item)"]
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
      "description": "json.Unmarshalの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Unmarshal とは？",
          "content": "# JSON → Go\\n\\n**json.Unmarshal** で JSON を Go の値に変換します。\\n\\n```go\\nvar user User\\nerr := json.Unmarshal(data, &user)\\n```"
        },
        {
          "title": "ポインタを渡す",
          "content": "# & を忘れずに\\n\\n```go\\njson.Unmarshal(data, &result)  // OK\\njson.Unmarshal(data, result)   // NG\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"encoding/json\"\\n    \"fmt\"\\n)\\n\\ntype Item struct {\\n    Name string `json:\"name\"`\\n}\\n\\nfunc main() {\\n    // \"Banana\" を含むJSON文字列をバイト列に変換\\n    data := []byte(`{\"name\":\"Banana\"}`)\\n    var item Item\\n    // Unmarshal で JSON をパース\\n    json.Unmarshal(data, &item)\\n    fmt.Println(item.Name)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// ブロックを開始\\ntype ___ struct ___\\n    // \\\"\\\"\\n    ___ ___ `json:\\\"___\\\"`\\n// ブロックを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // \\\"Banana\\\" を含むJSON文字列をバイト列に変換\\n    ___ := []___(`{\\\"___\\\":\\\"___\\\"}`)\\n    // 変数を宣言\\n    var ___ ___\\n    // Unmarshal で JSON をパース\\n    ___.___(___, &___)\\n    // 出力\\n    ___.___(___.___)\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null
        ],
        "candidates": {
          "functions": [
            "Unmarshal",
            "Decode",
            "Parse"
          ],
          "others": ["Banana", "main", "encoding/json", "fmt", "Item", "Name", "string", "name", "data", "item", "json", "Println", "byte", "(", ")", "{", "}", "t\"", "ame string `json:", "ata", "te(`{\"name\":\"Banana\"}`)", "//", "をパース", "fmt.Println(item.Name)"]
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
      "description": "strings パッケージの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "strings パッケージ",
          "content": "# 文字列操作\\n\\n**strings** パッケージには便利な関数があります。\\n\\n```go\\nstrings.Contains(s, \"hello\")\\nstrings.HasPrefix(s, \"pre\")\\nstrings.Split(s, \",\")\\n```"
        },
        {
          "title": "よく使う関数",
          "content": "# 変換と検索\\n\\n```go\\nstrings.ToUpper(s)\\nstrings.ToLower(s)\\nstrings.TrimSpace(s)\\nstrings.Replace(s, \"old\", \"new\", -1)\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"strings\"\\n)\\n\\nfunc main() {\\n    // 分割する文字列 \"hello,world\"\\n    s := \"hello,world\"\\n    // Split で文字列を分割\\n    parts := strings.Split(s, \",\")\\n    fmt.Println(parts[0])\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // 分割する文字列 \\\"hello,world\\\"\\n    ___ := \\\"___\\\"\\n    // Split で文字列を分割\\n    ___ := ___.___(___, \\\",\\\")\\n    // 出力\\n    ___.___(___[___])\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          ""
        ],
        "candidates": {
          "functions": [
            "Split",
            "Join",
            "Cut"
          ],
          "others": ["hello,world", "main", "fmt", "strings", "s", "parts", "Println", "0", "(", ")", "{", "}", "rings\"", "/ 分割する文字列", "// Split で文字列を分割"]
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
      "description": "strconv.Atoiの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "strconv パッケージ",
          "content": "# 文字列と数値の変換\\n\\n**strconv.Atoi** で文字列を整数に変換します。\\n\\n```go\\nnum, err := strconv.Atoi(\"123\")\\nif err != nil {\\n    // エラー処理\\n}\\n```"
        },
        {
          "title": "逆変換",
          "content": "# 数値から文字列\\n\\n```go\\ns := strconv.Itoa(123)  // \"123\"\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"strconv\"\\n)\\n\\nfunc main() {\\n    // Atoi で文字列を整数に変換\\n    num, _ := strconv.Atoi(\"42\")\\n    fmt.Println(num * 2)\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // Atoi で文字列を整数に変換\\n    ___, _ := ___.___(\\\"\\\")\\n    // 出力\\n    ___.___(___ * ___)\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "functions": [
            "Atoi",
            "ParseInt",
            "ToInt"
          ],
          "others": ["main", "fmt", "strconv", "42", "Println", "num", "2", "(", ")", "{", "}", "rconv\"", "/ Atoi で文字列を整数に変換", "fmt.Println(num * 2)"]
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
      "description": "os.Argsの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "os.Args とは？",
          "content": "# コマンドライン引数\\n\\n**os.Args** でコマンドライン引数を取得できます。\\n\\n```go\\n// go run main.go arg1 arg2\\nos.Args[0]  // \"main\" (プログラム名)\\nos.Args[1]  // \"arg1\"\\nos.Args[2]  // \"arg2\"\\n```"
        },
        {
          "title": "len で引数数を確認",
          "content": "# 引数の数をチェック\\n\\n```go\\nif len(os.Args) < 2 {\\n    fmt.Println(\"Usage: program <arg>\")\\n    return\\n}\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport (\\n    \"fmt\"\\n    \"os\"\\n)\\n\\nfunc main() {\\n    // Args でコマンドライン引数を取得\\n    fmt.Println(len(os.Args))\\n}", "holeyCode": "// モジュールを宣言\\npackage ___\\n\\n// ライブラリを読み込む\\nimport ___\\n    // パッケージをインポート\\n    \\\"___\\\"\\n    // パッケージをインポート\\n    \\\"___\\\"\\n// 関数呼び出しを閉じる\\n___\\n\\n// main関数を定義\\nfunc ___() ___\\n    // Args でコマンドライン引数を取得\\n    ___.___(___(___.___))\\n// ブロックを閉じる\\n___",
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
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "variables": [
            "Args",
            "Argv",
            "Arguments"
          ],
          "others": ["main", "fmt", "os", "Println", "len", "(", ")", "{", "}", "\"", "/ Args でコマンドライン引数を取得"]
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
