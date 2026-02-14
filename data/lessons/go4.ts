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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n    // syncパッケージをインポート\\n    \"sync\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // varでmuにsync.Mutex型を宣言\\n    var mu sync.Mutex\\n    // :=でcountに0を代入\\n    count := 0\\n    \\n    // muのLockメソッドでロックを取得\\n    mu.Lock()\\n    // countを1増加\\n    count++\\n    // muのUnlockメソッドでロックを解放\\n    mu.Unlock()\\n    \\n    // fmt.Printlnでcountを出力\\n    fmt.Println(count)\\n// ブロックを閉じる\\n}",
      "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n    // syncパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // varでmuにsync.Mutex型を宣言\\n    var ___ ___.___\\n    // :=でcountに0を代入\\n    ___ := ___\\n    \\n    // muのLockメソッドでロックを取得\\n    ___.___()\\n    // countを1増加\\n    ___++\\n    // muのUnlockメソッドでロックを解放\\n    ___.___()\\n    \\n    // fmt.Printlnでcountを出力\\n    ___.___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "    // syncパッケージをインポート",
          "    \"sync\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // varでmuにsync.Mutex型を宣言",
          "    var mu sync.Mutex",
          "    // :=でcountに0を代入",
          "    count := 0",
          "    ",
          "    // muのLockメソッドでロックを取得",
          "    mu.Lock()",
          "    // countを1増加",
          "    count++",
          "    // muのUnlockメソッドでロックを解放",
          "    mu.Unlock()",
          "    ",
          "    // fmt.Printlnでcountを出力",
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n    // syncパッケージをインポート\\n    \"sync\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // varでwgにsync.WaitGroup型を宣言\\n    var wg sync.WaitGroup\\n    // wgのAddメソッドで待機カウンタを1増やす\\n    wg.Add(1)\\n    \\n    // goで無名関数を別のゴルーチンで実行\\n    go func() {\\n        // deferでwgのDoneメソッドを関数終了時に呼び出し\\n        defer wg.Done()\\n        // fmt.Printlnで「goroutine」を出力\\n        fmt.Println(\"goroutine\")\\n    // 無名関数を閉じて即座に実行\\n    }()\\n    \\n    // wgのWaitメソッドでカウンタが0になるまで待機\\n    wg.Wait()\\n    // fmt.Printlnで「done」を出力\\n    fmt.Println(\"done\")\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n    // syncパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // varでwgにsync.WaitGroup型を宣言\\n    var ___ ___.___\\n    // wgのAddメソッドで待機カウンタを1増やす\\n    ___.___(___)\\n    \\n    // goで無名関数を別のゴルーチンで実行\\n    go func___ ___\\n        // deferでwgのDoneメソッドを関数終了時に呼び出し\\n        defer ___.___()\\n        // fmt.Printlnで「goroutine」を出力\\n        ___.___(\\\"\\\")\\n    // 無名関数を閉じて即座に実行\\n    ___()\\n    \\n    // wgのWaitメソッドでカウンタが0になるまで待機\\n    ___.___()\\n    // fmt.Printlnで「done」を出力\\n    ___.___(\\\"\\\")\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "    // syncパッケージをインポート",
          "    \"sync\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // varでwgにsync.WaitGroup型を宣言",
          "    var wg sync.WaitGroup",
          "    // wgのAddメソッドで待機カウンタを1増やす",
          "    wg.Add(1)",
          "    ",
          "    // goで無名関数を別のゴルーチンで実行",
          "    go func() {",
          "        // deferでwgのDoneメソッドを関数終了時に呼び出し",
          "        defer wg.Done()",
          "        // fmt.Printlnで「goroutine」を出力",
          "        fmt.Println(\"goroutine\")",
          "    // 無名関数を閉じて即座に実行",
          "    }()",
          "    ",
          "    // wgのWaitメソッドでカウンタが0になるまで待機",
          "    wg.Wait()",
          "    // fmt.Printlnで「done」を出力",
          "    fmt.Println(\"done\")",
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // contextパッケージをインポート\\n    \"context\"\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でctxにcontext.Background()でルートコンテキストを作成して代入\\n    ctx := context.Background()\\n    // fmt.PrintlnでctxのErrメソッドの結果を出力\\n    fmt.Println(ctx.Err())\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // contextパッケージをインポート\\n    \\\"___\\\"\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でctxにcontext.Background()でルートコンテキストを作成して代入\\n    ___ := ___.___()\\n    // fmt.PrintlnでctxのErrメソッドの結果を出力\\n    ___.___(___.___())\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // contextパッケージをインポート",
          "    \"context\"",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でctxにcontext.Background()でルートコンテキストを作成して代入",
          "    ctx := context.Background()",
          "    // fmt.PrintlnでctxのErrメソッドの結果を出力",
          "    fmt.Println(ctx.Err())",
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // contextパッケージをインポート\\n    \"context\"\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でctxとcancelにWithCancelでキャンセル可能なコンテキストを作成して代入\\n    ctx, cancel := context.WithCancel(context.Background())\\n    // cancel関数を呼び出してコンテキストをキャンセル\\n    cancel()\\n    // fmt.PrintlnでctxのErrメソッドの結果を出力\\n    fmt.Println(ctx.Err())\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // contextパッケージをインポート\\n    \\\"___\\\"\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でctxとcancelにWithCancelでキャンセル可能なコンテキストを作成して代入\\n    ___, ___ := ___.___(___.___())\\n    // cancel関数を呼び出してコンテキストをキャンセル\\n    ___()\\n    // fmt.PrintlnでctxのErrメソッドの結果を出力\\n    ___.___(___.___())\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // contextパッケージをインポート",
          "    \"context\"",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でctxとcancelにWithCancelでキャンセル可能なコンテキストを作成して代入",
          "    ctx, cancel := context.WithCancel(context.Background())",
          "    // cancel関数を呼び出してコンテキストをキャンセル",
          "    cancel()",
          "    // fmt.PrintlnでctxのErrメソッドの結果を出力",
          "    fmt.Println(ctx.Err())",
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
          "",
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n    // timeパッケージをインポート\\n    \"time\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でdに500ミリ秒を代入\\n    d := 500 * time.Millisecond\\n    // fmt.Printlnでdを出力\\n    fmt.Println(d)\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n    // timeパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でdに500ミリ秒を代入\\n    ___ := ___ * ___.___\\n    // fmt.Printlnでdを出力\\n    ___.___(___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "    // timeパッケージをインポート",
          "    \"time\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でdに500ミリ秒を代入",
          "    d := 500 * time.Millisecond",
          "    // fmt.Printlnでdを出力",
          "    fmt.Println(d)",
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
          ""
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // encoding/jsonパッケージをインポート\\n    \"encoding/json\"\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n// インポートブロックを閉じる\\n)\\n\\n// type ItemでItem構造体を定義\\ntype Item struct {\\n    // Nameフィールド（string型、JSONタグname）を定義\\n    Name string `json:\"name\"`\\n// 構造体定義を閉じる\\n}\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でitemにItem構造体（Nameに\"Apple\"）を代入\\n    item := Item{Name: \"Apple\"}\\n    // :=でdataにjson.Marshalでitemを変換した結果を代入\\n    data, _ := json.Marshal(item)\\n    // fmt.Printlnでdataを文字列に変換して出力\\n    fmt.Println(string(data))\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // encoding/jsonパッケージをインポート\\n    \\\"___\\\"\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// type ItemでItem構造体を定義\\ntype ___ struct ___\\n    // Nameフィールド（string型、JSONタグname）を定義\\n    ___ ___ `json:\\\"___\\\"`\\n// 構造体定義を閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でitemにItem構造体（Nameに\"Apple\"）を代入\\n    ___ := ___{___: \\\"___\\\"}\\n    // :=でdataにjson.Marshalでitemを変換した結果を代入\\n    ___, _ := ___.___(___)\\n    // fmt.Printlnでdataを文字列に変換して出力\\n    ___.___(___(___))\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // encoding/jsonパッケージをインポート",
          "    \"encoding/json\"",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// type ItemでItem構造体を定義",
          "type Item struct {",
          "    // Nameフィールド（string型、JSONタグname）を定義",
          "    Name string `json:\"name\"`",
          "// 構造体定義を閉じる",
          "}",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でitemにItem構造体（Nameに\"Apple\"）を代入",
          "    item := Item{Name: \"Apple\"}",
          "    // :=でdataにjson.Marshalでitemを変換した結果を代入",
          "    data, _ := json.Marshal(item)",
          "    // fmt.Printlnでdataを文字列に変換して出力",
          "    fmt.Println(string(data))",
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
          "",
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // encoding/jsonパッケージをインポート\\n    \"encoding/json\"\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n// インポートブロックを閉じる\\n)\\n\\n// type ItemでItem構造体を定義\\ntype Item struct {\\n    // Nameフィールド（string型、JSONタグname）を定義\\n    Name string `json:\"name\"`\\n// 構造体定義を閉じる\\n}\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でdataにJSON文字列のバイト列を代入\\n    data := []byte(`{\"name\":\"Banana\"}`)\\n    // varでitemにItem型を宣言\\n    var item Item\\n    // json.Unmarshalでdataをitemにパース\\n    json.Unmarshal(data, &item)\\n    // itemのNameフィールドを出力\\n    fmt.Println(item.Name)\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // encoding/jsonパッケージをインポート\\n    \\\"___\\\"\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// type ItemでItem構造体を定義\\ntype ___ struct ___\\n    // Nameフィールド（string型、JSONタグname）を定義\\n    ___ ___ `json:\\\"___\\\"`\\n// 構造体定義を閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でdataにJSON文字列のバイト列を代入\\n    ___ := []___(`{\\\"___\\\":\\\"___\\\"}`)\\n    // varでitemにItem型を宣言\\n    var ___ ___\\n    // json.Unmarshalでdataをitemにパース\\n    ___.___(___, &___)\\n    // itemのNameフィールドを出力\\n    ___.___(___.___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // encoding/jsonパッケージをインポート",
          "    \"encoding/json\"",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// type ItemでItem構造体を定義",
          "type Item struct {",
          "    // Nameフィールド（string型、JSONタグname）を定義",
          "    Name string `json:\"name\"`",
          "// 構造体定義を閉じる",
          "}",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でdataにJSON文字列のバイト列を代入",
          "    data := []byte(`{\"name\":\"Banana\"}`)",
          "    // varでitemにItem型を宣言",
          "    var item Item",
          "    // json.Unmarshalでdataをitemにパース",
          "    json.Unmarshal(data, &item)",
          "    // itemのNameフィールドを出力",
          "    fmt.Println(item.Name)",
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
          "",
          null,
          "",
          null,
          ""
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n    // stringsパッケージをインポート\\n    \"strings\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でsに\"hello,world\"を代入\\n    s := \"hello,world\"\\n    // :=でpartsにstrings.Splitでsをカンマで分割した結果を代入\\n    parts := strings.Split(s, \",\")\\n    // partsのインデックス0を出力\\n    fmt.Println(parts[0])\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n    // stringsパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でsに\"hello,world\"を代入\\n    ___ := \\\"___\\\"\\n    // :=でpartsにstrings.Splitでsをカンマで分割した結果を代入\\n    ___ := ___.___(___, \\\",\\\")\\n    // partsのインデックス0を出力\\n    ___.___(___[___])\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "    // stringsパッケージをインポート",
          "    \"strings\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でsに\"hello,world\"を代入",
          "    s := \"hello,world\"",
          "    // :=でpartsにstrings.Splitでsをカンマで分割した結果を代入",
          "    parts := strings.Split(s, \",\")",
          "    // partsのインデックス0を出力",
          "    fmt.Println(parts[0])",
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
          "",
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n    // strconvパッケージをインポート\\n    \"strconv\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // :=でnumにstrconv.Atoiで\"42\"を整数変換した結果を代入\\n    num, _ := strconv.Atoi(\"42\")\\n    // numの2倍を出力\\n    fmt.Println(num * 2)\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n    // strconvパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // :=でnumにstrconv.Atoiで\"42\"を整数変換した結果を代入\\n    ___, _ := ___.___(\\\"\\\")\\n    // numの2倍を出力\\n    ___.___(___ * ___)\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "    // strconvパッケージをインポート",
          "    \"strconv\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // :=でnumにstrconv.Atoiで\"42\"を整数変換した結果を代入",
          "    num, _ := strconv.Atoi(\"42\")",
          "    // numの2倍を出力",
          "    fmt.Println(num * 2)",
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
          ""
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
      "correctCode": "// package mainでモジュールを宣言\\npackage main\\n\\n// import (でインポートブロックを開始\\nimport (\\n    // fmtパッケージをインポート\\n    \"fmt\"\\n    // osパッケージをインポート\\n    \"os\"\\n// インポートブロックを閉じる\\n)\\n\\n// func mainでmain関数を定義\\nfunc main() {\\n    // fmt.Printlnでos.Argsの長さを出力\\n    fmt.Println(len(os.Args))\\n// ブロックを閉じる\\n}", "holeyCode": "// package mainでモジュールを宣言\\npackage ___\\n\\n// import (でインポートブロックを開始\\nimport ___\\n    // fmtパッケージをインポート\\n    \\\"___\\\"\\n    // osパッケージをインポート\\n    \\\"___\\\"\\n// インポートブロックを閉じる\\n___\\n\\n// func mainでmain関数を定義\\nfunc ___() ___\\n    // fmt.Printlnでos.Argsの長さを出力\\n    ___.___(___(___.___))\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// package mainでモジュールを宣言",
          "package main",
          "",
          "// import (でインポートブロックを開始",
          "import (",
          "    // fmtパッケージをインポート",
          "    \"fmt\"",
          "    // osパッケージをインポート",
          "    \"os\"",
          "// インポートブロックを閉じる",
          ")",
          "",
          "// func mainでmain関数を定義",
          "func main() {",
          "    // fmt.Printlnでos.Argsの長さを出力",
          "    fmt.Println(len(os.Args))",
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
