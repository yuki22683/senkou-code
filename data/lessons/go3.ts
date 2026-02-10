export const go3Data = {
  "language": "go",
  "lessonId": "go-3",
  "lessonTitle": "Go III - ジェネリクスとテスト",
  "lessonDescription": "Go言語の高度な機能を学びます。ジェネリクス、テスト、コンテキストなど、本格的なGoプログラミングを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "ジェネリクス",
      "content": "**ジェネリクス**で、どんな型でも使える関数を作れます。\\n\\n```go\\nfunc First[T any](slice []T) T {\\n    return slice[0]\\n}\\n\\nFirst([]int{1, 2, 3})    // 1\\nFirst([]string{\\\"a\\\"})    // a\\n```\\n\\n`[T any]` で型パラメータを定義します。"
    },
    {
      "title": "型制約",
      "content": "型パラメータに**制約**をつけられます。\\n\\n```go\\ntype Number interface {\\n    int | float64\\n}\\n\\nfunc Sum[T Number](nums []T) T {\\n    var sum T\\n    for _, n := range nums {\\n        sum += n\\n    }\\n    return sum\\n}\\n```\\n\\n`|` で許可する型を指定します。"
    },
    {
      "title": "defer",
      "content": "`defer` で、関数終了時に実行する処理を登録できます。\\n\\n```go\\nfunc readFile() {\\n    f := os.Open(\\\"file.txt\\\")\\n    defer f.Close() // 関数終了時に実行\\n    // ファイル処理...\\n}\\n```\\n\\nリソースの解放に便利です。"
    },
    {
      "title": "panic と recover",
      "content": "`panic` でプログラムを停止、`recover` で回復できます。\\n\\n```go\\nfunc safe() {\\n    defer func() {\\n        if r := recover(); r != nil {\\n            fmt.Println(\\\"回復:\\\", r)\\n        }\\n    }()\\n    panic(\\\"エラー発生！\\\")\\n}\\n```"
    },
    {
      "title": "テストを書く",
      "content": "Goには標準でテスト機能があります。\\n\\n```go\\n// math_test.go\\nfunc TestAdd(t *testing.T) {\\n    result := Add(2, 3)\\n    if result != 5 {\\n        t.Errorf(\\\"期待: 5, 実際: %d\\\", result)\\n    }\\n}\\n```\\n\\n`go test` で実行します。"
    },
    {
      "title": "context",
      "content": "`context` で処理のキャンセルやタイムアウトを制御します。\\n\\n```go\\nctx, cancel := context.WithTimeout(\\n    context.Background(),\\n    time.Second,\\n)\\ndefer cancel()\\n```\\n\\nAPIリクエストなどで重要です。"
    }
  ],
  "exercises": [
    {
      "title": "ジェネリクスの基本",
      "description": "ジェネリクスの基本の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "content": "# どんな型でも使える「万能関数」\\n\\n**ジェネリクス** は、型（数字、文字など）を後から決められる仕組みです。同じ処理を色々な型で使い回せます。\\n\\n**たとえば：**\\n- 数字のリストから最初の要素を取る\\n- 文字列のリストから最初の要素を取る\\n\\n両方とも「最初を取る」という同じ処理なのに、型が違うだけで別の関数を書くのは大変ですよね？\\n\\n**ジェネリクスを使うと：**\\n```go\\nfunc Print[T any](v T) {\\n    fmt.Println(v)  // Tは何の型でもOK\\n}\\nPrint(42)       // 数字でもOK\\nPrint(\"hello\")  // 文字でもOK\\n```"
        },
        {
          "title": "型制約（かたせいやく）",
          "content": "# 「この型だけ使える」と制限する\\n\\n何でも受け入れると困ることもあります。「比較できる型だけ」など、制限をつけられます。\\n\\n**よく使う制約：**\\n- `any`：どんな型でもOK\\n- `comparable`：`==` で比較できる型だけ\\n\\n**コード例：**\\n```go\\n// comparable で比較できる型に制限\\nfunc Equal[T comparable](a, b T) bool {\\n    return a == b  // == が使える！\\n}\\n```\\n\\n`[T comparable]` は「Tは比較できる型だけね」という意味です。"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// any で任意の型を受け入れる\\nfunc First[T any](slice []T) T {\\n    // スライスの最初の要素を返す\\n    return slice[0]\\n}\\n\\nfunc main() {\\n    // 10, 20, 30 でスライスを初期化\\n    nums := []int{10, 20, 30}\\n    fmt.Println(First(nums))\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\n// any で任意の型を受け入れる\\nfunc ___[___ ___](___ []___) ___ {\\n    // スライスの最初の要素を返す\\n    return ___[___]\\n}\\n\\nfunc ___() {\\n    // 10, 20, 30 でスライスを初期化\\n    ___ := []___{___, ___, ___}\\n    ___.___(___(___)\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          null,
          "First関数を型パラメータTとanyで定義します。",
          null,
          "sliceの0番目の要素を返します。",
          null,
          null,
          "main関数を定義します。",
          null,
          "numsにint型のスライスを代入します。",
          "fmt.Printlnで結果を出力します。",
          null
        ],
        "candidates": {
          "types": [
            "any",
            "interface{}",
            "comparable"
          ],
          "others": ["main", "import", "fmt", "First", "T", "slice", "int", "0", "10", "20", "30", "nums", "Println"]
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
      "description": "データの種類（型）について学びます",
      "tutorialSlides": [
        {
          "title": "comparable とは？",
          "content": "# == で比較できる型\\n\\n**comparable** は、== や != で比較できる型に制限します。\\n\\n```go\\nfunc Contains[T comparable](slice []T, v T) bool {\\n    for _, x := range slice {\\n        if x == v {\\n            return true\\n        }\\n    }\\n    return false\\n}\\n```"
        },
        {
          "title": "使用例",
          "content": "# 要素の検索\\n\\n```go\\nnums := []int{1, 2, 3}\\nfmt.Println(Contains(nums, 2))  // true\\nfmt.Println(Contains(nums, 5))  // false\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// comparable で比較可能な型に制限\\nfunc IndexOf[T comparable](slice []T, v T) int {\\n    // range でスライスをイテレート\\n    for i, x := range slice {\\n        // == で比較\\n        if x == v {\\n            return i\\n        }\\n    }\\n    return -1\\n}\\n\\nfunc main() {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    names := []string{\"a\", \"b\", \"c\"}\\n    fmt.Println(IndexOf(names, \"b\"))\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\n// comparable で比較可能な型に制限\\nfunc ___[___ ___](___ []___, ___ ___) ___ {\\n    // range でスライスをイテレート\\n    for ___, ___ := range ___ {\\n        // == で比較\\n        if ___ == ___ {\\n            return ___\\n        }\\n    }\\n    return -___\\n}\\n\\nfunc ___() {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    ___ := []___{\\\"\",  \\\"___\\\", \\\"___\\\"}\\n    ___.___(___(___, \\\"___\\\"))\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          null,
          "IndexOf関数を型パラメータTとcomparableで定義します。",
          null,
          "for文でrangeを使ってsliceをイテレートします。",
          null,
          "xとvを==で比較します。",
          "iを返します。",
          null,
          null,
          "-1を返します（見つからなかった場合）。",
          null,
          null,
          "main関数を定義します。",
          null,
          "namesにstring型のスライスを代入します。",
          "fmt.PrintlnでIndexOfの結果を出力します。",
          null
        ],
        "candidates": {
          "types": [
            "comparable",
            "any",
            "ordered"
          ],
          "others": ["main", "import", "fmt", "IndexOf", "T", "slice", "v", "int", "i", "x", "1", "names", "string", "a", "b", "c", "Println"]
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
      "description": "make でスライス作成の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "make（メイク）でスライスを作る",
          "content": "# サイズを指定してスライスを作る\\n\\n**make** を使うと、最初からサイズを指定してスライスを作れます。\\n\\n**たとえるなら：**\\n- `[]int{1,2,3}` → 「中身入り」のお弁当箱を用意\\n- `make([]int, 5)` → 「5つ分の空の」お弁当箱を用意\\n\\n**コード例：**\\n```go\\n// 長さ5のスライスを作る（中身は0で埋まる）\\ns1 := make([]int, 5)\\n// s1 = [0, 0, 0, 0, 0]\\n\\n// 長さ0、でも10個分の場所を確保\\ns2 := make([]int, 0, 10)\\n```"
        },
        {
          "title": "なぜ make を使う？",
          "content": "# 速くて効率的になる\\n\\nスライスに `append` で要素を追加していくと、容量が足りなくなるたびに新しい場所を確保し直します。これは時間がかかります。\\n\\n**make で先に場所を確保：**\\n```go\\n// 最初から100個分の場所を確保\\nresult := make([]int, 0, 100)\\n\\nfor i := 0; i < 100; i++ {\\n    result = append(result, i)  // 場所の確保し直しが不要！\\n}\\n```\\n\\n「100個追加する」とわかっているなら、先に100個分の場所を用意しておく方が効率的です。"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // numsにmake([]int, 3)を代入\\n    nums := make([]int, 3)\\n    // インデックス 0 に 10 を代入\\n    nums[0] = 10\\n    nums[1] = 20\\n    nums[2] = 30\\n    fmt.Println(nums)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // numsにmake([]int, 3)を代入\\n    ___ := ___([]___, ___)\\n    // インデックス 0 に 10 を代入\\n    ___[___] = ___\\n    ___[___] = ___\\n    ___[___] = ___\\n    ___.___(___\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "numsにmakeでint型スライスを作成して代入します。",
          null,
          "nums[0]に10を代入します。",
          "nums[1]に20を代入します。",
          "nums[2]に30を代入します。",
          "fmt.Printlnでnumsを出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "make",
            "new",
            "create"
          ],
          "others": ["main", "import", "fmt", "nums", "int", "3", "0", "10", "1", "20", "2", "30", "Println", "nums)"]
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
      "description": "append でスライス結合の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "append とは？",
          "content": "# スライスに追加\\n\\n**append** でスライスに要素を追加できます。\\n\\n```go\\nnums := []int{1, 2}\\nnums = append(nums, 3)      // [1, 2, 3]\\nnums = append(nums, 4, 5)   // [1, 2, 3, 4, 5]\\n```"
        },
        {
          "title": "スライス同士の結合",
          "content": "# ... で展開\\n\\n```go\\na := []int{1, 2}\\nb := []int{3, 4}\\nc := append(a, b...)  // [1, 2, 3, 4]\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // スライスを初期化\\n    a := []int{1, 2}\\n    b := []int{3, 4}\\n    // ... でスライスを展開\\n    c := append(a, b...)\\n    fmt.Println(c)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // スライスを初期化\\n    ___ := []___{___, ___}\\n    ___ := []___{___, ___}\\n    // ... でスライスを展開\\n    ___ := ___(___, ___...)\\n    ___.___(___\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "aにint型のスライス{1, 2}を代入します。",
          "bにint型のスライス{3, 4}を代入します。",
          null,
          "cにappendでaとbを結合した結果を代入します。",
          "fmt.Printlnでcを出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "...",
            "..",
            ","
          ],
          "others": ["main", "import", "fmt", "a", "b", "c", "int", "1", "2", "3", "4", "append", "Println", "c)"]
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
      "description": "copy でスライスコピーの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "copy とは？",
          "content": "# 要素をコピー\\n\\n**copy** は、スライスの要素を別のスライスにコピーします。\\n\\n```go\\nsrc := []int{1, 2, 3}\\ndst := make([]int, len(src))\\ncopy(dst, src)\\n```"
        },
        {
          "title": "部分コピー",
          "content": "# 短い方に合わせる\\n\\n```go\\nsrc := []int{1, 2, 3, 4, 5}\\ndst := make([]int, 3)\\nn := copy(dst, src)  // n = 3\\n// dst = [1, 2, 3]\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // コピー元のスライス (10, 20, 30)\\n    src := []int{10, 20, 30}\\n    // dstにmake([]int, len(src))を代入\\n    dst := make([]int, len(src))\\n    // copy でスライスをコピー\\n    copy(dst, src)\\n    fmt.Println(dst)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // コピー元のスライス (10, 20, 30)\\n    ___ := []___{___, ___, ___}\\n    // dstにmake([]int, len(src))を代入\\n    ___ := ___([]___, ___(___))\\n    // copy でスライスをコピー\\n    ___(___, ___)\\n    ___.___(___\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "srcにint型のスライス{10, 20, 30}を代入します。",
          null,
          "dstにmakeでlen(src)の長さのスライスを作成して代入します。",
          null,
          "copyでdstにsrcをコピーします。",
          "fmt.Printlnでdstを出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "copy",
            "clone",
            "dup"
          ],
          "others": ["main", "import", "fmt", "src", "dst", "int", "10", "20", "30", "make", "len", "Println", "dst)"]
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
      "description": "select で複数チャネルの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "select（セレクト）とは？",
          "content": "# 複数のチャネルを同時に待つ\\n\\n**select** は、複数のチャネルからの受信を「どれか1つ」待ちます。\\n\\n**たとえるなら：**\\n- 電話が2台あって、どちらかが鳴るのを待つ\\n- 先に鳴った方の電話を取る\\n\\n**コード例：**\\n```go\\nselect {\\ncase v := <-ch1:\\n    fmt.Println(\"ch1から受信:\", v)\\ncase v := <-ch2:\\n    fmt.Println(\"ch2から受信:\", v)\\n}\\n// ch1 か ch2、先にデータが来た方を処理\\n```"
        },
        {
          "title": "default で待たない",
          "content": "# すぐに次に進む方法\\n\\n`default` をつけると、どのチャネルもすぐに受信できない場合に待たずに進めます。\\n\\n**コード例：**\\n```go\\nselect {\\ncase v := <-ch:\\n    fmt.Println(\"受信:\", v)\\ndefault:\\n    fmt.Println(\"データがない！\")  // 待たずにここが実行される\\n}\\n```\\n\\n**使いどころ：**\\n- データがあれば処理、なければ別のことをする\\n- プログラムを止めたくないとき"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // バッファ付きチャネルを作成\\n    ch1 := make(chan int, 1)\\n    ch2 := make(chan int, 1)\\n    // チャネルに値を送信\\n    ch1 <- 10\\n    \\n    // select で複数チャネルを待機\\n    select {\\n    case v := <-ch1:\\n        fmt.Println(v)\\n    case v := <-ch2:\\n        fmt.Println(v)\\n    }\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // バッファ付きチャネルを作成\\n    ___ := ___(___ ___, ___)\\n    ___ := ___(___ ___, ___)\\n    // チャネルに値を送信\\n    ___ <- ___\\n    \\n    // select で複数チャネルを待機\\n    ___ ___\\n    case ___ := <-___:\\n        ___.___(___\\n    case ___ := <-___:\\n        ___.___(___\\n    ___\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "ch1にバッファサイズ1のintチャネルを作成します。",
          "ch2にバッファサイズ1のintチャネルを作成します。",
          null,
          "ch1に10を送信します。",
          null,
          null,
          "selectで複数チャネルを待機するブロックを開始します。",
          "ch1から値を受信してvに代入します。",
          "fmt.Printlnでvを出力します。",
          "ch2から値を受信してvに代入します。",
          "fmt.Printlnでvを出力します。",
          "selectブロックを閉じます。",
          null
        ],
        "candidates": {
          "keywords": [
            "select",
            "switch",
            "case"
          ],
          "others": ["main", "import", "fmt", "ch1", "ch2", "make", "chan", "int", "1", "10", "v", "Println", "v)", "{", "}"]
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
      "description": "同じ処理を繰り返す方法を学びます",
      "tutorialSlides": [
        {
          "title": "辞書の range",
          "content": "# キーと値を取得\\n\\n**range** で辞書のキーと値を取得できます。\\n\\n```go\\nm := map[string]int{\"a\": 1, \"b\": 2}\\nfor k, v := range m {\\n    fmt.Println(k, v)\\n}\\n```"
        },
        {
          "title": "キーだけ取得",
          "content": "# 値を無視\\n\\n```go\\nfor k := range m {\\n    fmt.Println(k)\\n}\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // マップを初期化 (math: 90, english: 85)\\n    scores := map[string]int{\"math\": 90, \"english\": 85}\\n    // range で辞書をイテレート\\n    for k, v := range scores {\\n        fmt.Printf(\"%s: %d\\n\", k, v)\\n    }\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    // マップを初期化 (math: 90, english: 85)\\n    ___ := ___[___]___{\\\"___\\\": ___, \\\"___\\\": ___}\\n    // range で辞書をイテレート\\n    for ___, ___ := range ___ {\\n        ___.___(\\\"___: ___\\n\\\", ___, ___)\\n    }\\n}",
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
          "        fmt.Printf(\"%s: %d\\n\", k, v)",
          "    }",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          null,
          "scoresにstring-intのマップを代入します。",
          null,
          "for-rangeでscoresをイテレートします。",
          "fmt.Printfでキーと値を出力します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "range",
            "in",
            "each"
          ],
          "others": ["main", "import", "fmt", "scores", "map", "string", "int", "math", "90", "english", "85", "k", "v", "Printf", "%s", "%d", "%d\\n\", k, v)", "}"]
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
      "description": "データの種類（型）について学びます",
      "tutorialSlides": [
        {
          "title": "型定義",
          "content": "# 新しい型を作る\\n\\n**type** で既存の型を基に新しい型を定義できます。\\n\\n```go\\ntype UserID int\\ntype Email string\\n\\nvar id UserID = 123\\nvar email Email = \"test@example.com\"\\n```"
        },
        {
          "title": "型安全性",
          "content": "# 誤った代入を防ぐ\\n\\n```go\\ntype Celsius float64\\ntype Fahrenheit float64\\n\\nvar c Celsius = 25\\nvar f Fahrenheit = c  // コンパイルエラー！\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// Age型を定義\\ntype Age int\\n\\nfunc main() {\\n    // ageに25を代入\\n    var age Age = 25\\n    fmt.Println(age)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\n// Age型を定義\\ntype ___ ___\\n\\nfunc ___() {\\n    // ageに25を代入\\n    var ___ ___ = ___\\n    ___.___(___\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          null,
          "AgeをintのエイリアスとしてAge型を定義します。",
          null,
          "main関数を定義します。",
          null,
          "Age型の変数ageに25を代入します。",
          "fmt.Printlnでageを出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "type",
            "var",
            "const"
          ],
          "others": ["main", "import", "fmt", "Age", "int", "age", "25", "Println", "age)"]
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
      "description": "埋め込み（Embedding）の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "埋め込みとは？",
          "content": "# 構造体の継承的な機能\\n\\nGoでは **埋め込み** で構造体を合成できます。\\n\\n```go\\ntype Person struct {\\n    Name string\\n}\\n\\ntype Employee struct {\\n    Person  // 埋め込み\\n    ID int\\n}\\n```"
        },
        {
          "title": "フィールドへのアクセス",
          "content": "# 直接アクセス可能\\n\\n```go\\ne := Employee{Person: Person{Name: \"Alice\"}, ID: 1}\\nfmt.Println(e.Name)  // Alice（直接アクセス）\\n```"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\ntype Base struct {\\n    Value int\\n}\\n\\ntype Extended struct {\\n    // Base を埋め込む\\n    Base\\n    Extra string\\n}\\n\\nfunc main() {\\n    // 埋め込み構造体を初期化\\n    e := Extended{Base: Base{Value: 100}, Extra: \"テスト\"}\\n    fmt.Println(e.Value)\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\ntype ___ struct {\\n    ___ ___\\n}\\n\\ntype ___ struct {\\n    // Base を埋め込む\\n    ___\\n    ___ ___\\n}\\n\\nfunc ___() {\\n    // 埋め込み構造体を初期化\\n    ___ := ___{___: ___{___: ___}, ___: \\\"___\\\"}\\n    ___.___(___.___)\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "Base構造体を定義します。",
          "Valueフィールド（int型）を定義します。",
          null,
          null,
          "Extended構造体を定義します。",
          null,
          "Baseを埋め込みます。",
          "Extra フィールド（string型）を定義します。",
          null,
          null,
          "main関数を定義します。",
          null,
          "eにExtended構造体を代入します。",
          "fmt.Printlnでe.Valueを出力します。",
          null
        ],
        "candidates": {
          "types": [
            "Base",
            "*Base",
            "base Base"
          ],
          "others": ["main", "import", "fmt", "struct", "Value", "int", "Extended", "Extra", "string", "e", "100", "テスト", "Println"]
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
      "description": "panic と recoverの使い方を学びます",
      "tutorialSlides": [
        {
          "title": "panic（パニック）とは？",
          "content": "# 「大変だ！」とプログラムを止める\\n\\n**panic** は、「これはもう続けられない！」という深刻なエラーを起こして、プログラムを強制的に止めます。\\n\\n**たとえるなら：**\\n- 火災報知器が鳴る → 全員避難！\\n- 普通のエラーは「ちょっと困った」\\n- panic は「もうダメだ！」\\n\\n**コード例：**\\n```go\\nfunc main() {\\n    panic(\"大変なことが起きた！\")\\n    // ↓ ここには来ない（プログラムが止まる）\\n    fmt.Println(\"これは表示されない\")\\n}\\n```"
        },
        {
          "title": "recover（リカバー）で回復",
          "content": "# パニックから立ち直る方法\\n\\n**recover** を使うと、panic で止まりかけたプログラムを救出できます。ただし `defer` の中でしか使えません。\\n\\n**コード例：**\\n```go\\nfunc main() {\\n    defer func() {\\n        if r := recover(); r != nil {\\n            // パニックを捕まえた！\\n            fmt.Println(\"回復しました:\", r)\\n        }\\n    }()\\n    \\n    panic(\"エラー！\")  // パニック発生\\n}\\n// → 「回復しました: エラー！」と表示されて続行\\n```\\n\\n**ポイント：**\\n- recover は defer の中で使う\\n- panic の値を受け取れる"
        }
      ],
      "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    defer func() {\\n        // recover でパニックを捕捉\\n        if r := recover(); r != nil {\\n            fmt.Println(\"caught\")\\n        }\\n    }()\\n    // panic でパニックを発生\\n    panic(\"エラー\")\\n}",
      "holeyCode": "package ___\\n\\n___ \\\"___\\\"\\n\\nfunc ___() {\\n    defer ___() {\\n        // recover でパニックを捕捉\\n        if ___ := ___(); ___ != ___ {\\n            ___.___(\\\"___\\\")\\n        }\\n    ___()\\n    // panic でパニックを発生\\n    ___(\\\"___\\\")\\n}",
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
          "mainパッケージを宣言します。",
          null,
          "fmtパッケージをインポートします。",
          null,
          "main関数を定義します。",
          "deferでfunc()を遅延実行します。",
          null,
          "recoverでパニックを捕捉し、rがnilでなければ処理します。",
          "fmt.Printlnで\"caught\"を出力します。",
          null,
          "無名関数を閉じて即時実行します。",
          null,
          "panicで\"エラー\"を発生させます。",
          null
        ],
        "candidates": {
          "functions": [
            "recover",
            "catch",
            "handle"
          ],
          "others": ["main", "import", "fmt", "func", "r", "nil", "Println", "caught", "panic", "エラー", "}"]
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
