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
            "content": "# どんな型でも使える「万能関数」\\n\\n**ジェネリクス** は、型（数字、文字など）を後から決められる仕組みです。同じ処理を色々な型で使い回せます。\\n\\n**たとえば：**\\n- 数字のリストから最初の要素を取る\\n- 文字列のリストから最初の要素を取る\\n\\n両方とも「最初を取る」という同じ処理なのに、型が違うだけで別の関数を書くのは大変ですよね？\\n\\n**ジェネリクスを使うと：**\\n```go\\nfunc Print[T any](v T) {\\n    fmt.Println(v)  // Tは何の型でもOK\\n}\\nPrint(42)       // 数字でもOK\\nPrint(\"hello\")  // 文字でもOK\\n```"
          },
          {
            "title": "型制約（かたせいやく）",
            "content": "# 「この型だけ使える」と制限する\\n\\n何でも受け入れると困ることもあります。「比較できる型だけ」など、制限をつけられます。\\n\\n**よく使う制約：**\\n- `any`：どんな型でもOK\\n- `comparable`：`==` で比較できる型だけ\\n\\n**コード例：**\\n```go\\n// comparable で比較できる型に制限\\nfunc Equal[T comparable](a, b T) bool {\\n    return a == b  // == が使える！\\n}\\n```\\n\\n`[T comparable]` は「Tは比較できる型だけね」という意味です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// any で任意の型を受け入れる\\nfunc First[T any](slice []T) T {\\n    // スライスの最初の要素を返す\\n    return slice[0]\\n}\\n\\nfunc main() {\\n    // 10, 20, 30 でスライスを初期化\\n    nums := []int{10, 20, 30}\\n    fmt.Println(First(nums))\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\n// any で任意の型を受け入れる\\nfunc First[___ any](slice []T) T {\\n    // スライスの最初の要素を返す\\n    return slice[___]\\n___\\n\\nfunc ___ () {\\n    // 10, 20, 30 でスライスを初期化\\n    ___ := []int{10, 20, 30}\\n    fmt.___(First(nums))\\n___",
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
          "any で任意の型を受け入れます。",
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
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
          "types": [
            "any",
            "interface{}",
            "comparable"
          ],
          "others": ["slice", "30", "main", "fmt", "T", "0", "}", "main()", "nums", "Println", "mt\""]
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
        "description": "比較可能な型に制限する方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// comparable で比較可能な型に制限\\nfunc IndexOf[T comparable](slice []T, v T) int {\\n    // range でスライスをイテレート\\n    for i, x := range slice {\\n        // == で比較\\n        if x == v {\\n            return i\\n        }\\n    }\\n    return -1\\n}\\n\\nfunc main() {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    names := []string{\"a\", \"b\", \"c\"}\\n    fmt.Println(IndexOf(names, \"b\"))\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\n// comparable で比較可能な型に制限\\nfunc IndexOf[T comparable](slice []T, v T) ___ {\\n    // range でスライスをイテレート\\n    for i, x := range ___ {\\n        // == で比較\\n        if x == ___ {\\n            return ___\\n        ___\\n    ___\\n    return -___\\n___\\n\\nfunc ___ () {\\n    // \"a\", \"b\", \"c\" でスライスを初期化\\n    ___ := []string{\"a\", \"b\", \"c\"}\\n    fmt.___(IndexOf(names, \"b\"))\\n___",
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
          "comparable で比較可能な型に制限します。",
          null,
          "== で値が一致するか比較します。",
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
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "types": [
            "comparable",
            "any",
            "ordered"
          ],
          "others": ["range", "==", "\"c\"", "main", "fmt", "int", "slice", "v", "i", "}", "1", "main()", "names", "Println", "mt\""]
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
        "description": "容量を指定してスライスを作成しましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // numsにmake([]int, 3)を代入\\n    nums := make([]int, 3)\\n    // インデックス 0 に 10 を代入\\n    nums[0] = 10\\n    nums[1] = 20\\n    nums[2] = 30\\n    fmt.Println(nums)\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\nfunc ___ () {\\n    // numsにmake([]int, 3)を代入\\n    ___ := make([]int, 3)\\n    // インデックス 0 に 10 を代入\\n    nums[___] = 10\\n    nums[___] = 20\\n    nums[___] = 30\\n    fmt.___(nums)\\n___",
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
          "make でスライスを作成します。",
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
          "functions": [
            "make",
            "new",
            "create"
          ],
          "others": ["10", "main", "fmt", "main()", "nums", "0", "1", "2", "Println", "}", "mt\""]
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
        "description": "スライスに要素を追加しましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // スライスを初期化\\n    a := []int{1, 2}\\n    b := []int{3, 4}\\n    // ... でスライスを展開\\n    c := append(a, b...)\\n    fmt.Println(c)\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\nfunc ___ () {\\n    // スライスを初期化\\n    ___ := []int{1, 2}\\n    ___ := []int{3, 4}\\n    // ... でスライスを展開\\n    ___ := append(a, b...)\\n    fmt.___(c)\\n___",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
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
          "operators": [
            "...",
            "..",
            ","
          ],
          "others": ["2", "main", "fmt", "main()", "a", "b", "c", "Println", "}", "mt\""]
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
        "description": "スライスの内容をコピーしましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // コピー元のスライス (10, 20, 30)\\n    src := []int{10, 20, 30}\\n    // dstにmake([]int, len(src))を代入\\n    dst := make([]int, len(src))\\n    // copy でスライスをコピー\\n    copy(dst, src)\\n    fmt.Println(dst)\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\nfunc ___ () {\\n    // コピー元のスライス (10, 20, 30)\\n    ___ := []int{10, 20, 30}\\n    // dstにmake([]int, len(src))を代入\\n    ___ := make([]int, len(src))\\n    // copy でスライスをコピー\\n    copy(dst, ___)\\n    fmt.___(dst)\\n___",
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
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "copy でスライスをコピーします。",
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
          "functions": [
            "copy",
            "clone",
            "dup"
          ],
          "others": ["30", "make", "main", "fmt", "main()", "src", "dst", "Println", "}", "mt\""]
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
        "description": "複数のチャネルを同時に待機しましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // バッファ付きチャネルを作成\\n    ch1 := make(chan int, 1)\\n    ch2 := make(chan int, 1)\\n    // チャネルに値を送信\\n    ch1 <- 10\\n    \\n    // select で複数チャネルを待機\\n    select {\\n    case v := <-ch1:\\n        fmt.Println(v)\\n    case v := <-ch2:\\n        fmt.Println(v)\\n    }\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\nfunc ___ () {\\n    // バッファ付きチャネルを作成\\n    ___ := make(chan int, 1)\\n    ___ := make(chan int, 1)\\n    // チャネルに値を送信\\n    ch___ <- 10\\n    \\n    // select で複数チャネルを待機\\n    ___ {\\n    case v := <-ch___:\\n        fmt.___(v)\\n    case v := <-ch___:\\n        fmt.___(v)\\n    ___\\n___",
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
                  "1 を入力してバッファ付きチャネルを作成します。",
                  null,
                  "select で複数チャネルを待機します。",
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
                  null,
                  null
        ],
        "candidates": {
          "keywords": [
            "select",
            "switch",
            "case"
          ],
          "others": ["1", "<-", "main", "fmt", "main()", "ch1", "ch2", "Println", "2", "}", "mt\""]
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
        "description": "辞書のキーと値をイテレートしましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    // マップを初期化 (math: 90, english: 85)\\n    scores := map[string]int{\"math\": 90, \"english\": 85}\\n    // range で辞書をイテレート\\n    for k, v := range scores {\\n        fmt.Printf(\"%s: %d\\n\", k, v)\\n    }\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\nfunc ___ () {\\n    // マップを初期化 (math: 90, english: 85)\\n    ___ := map[string]int{\"math\": 90, \"english\": 85}\\n    // range で辞書をイテレート\\n    for k, v := range ___ {\\n        fmt.___(\"%s: %d\\n\", k, v)\\n    ___\\n___",
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
          "        fmt.Printf(\"%s: %d",
          "\", k, v)",
          "    }",
          "}"
        ],
        "lineHints": [
          "85 を入力してマップを完成させます。",
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
          "keywords": [
            "range",
            "in",
            "each"
          ],
          "others": ["85", "main", "fmt", "main()", "scores", "Printf", "}", "mt\""]
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
        "description": "既存の型から新しい型を定義しましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\n// Age型を定義\\ntype Age int\\n\\nfunc main() {\\n    // ageに25を代入\\n    var age Age = 25\\n    fmt.Println(age)\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\n// Age型を定義\\ntype Age ___\\n\\nfunc ___ () {\\n    // ageに25を代入\\n    var age Age = ___\\n    fmt.___(age)\\n___",
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
                  "type で新しい型を定義します。",
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
          "keywords": [
            "type",
            "var",
            "const"
          ],
          "others": ["25", "main", "fmt", "int", "main()", "Println", "}", "mt\""]
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
        "description": "構造体に別の構造体を埋め込みましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\ntype Base struct {\\n    Value int\\n}\\n\\ntype Extended struct {\\n    // Base を埋め込む\\n    Base\\n    Extra string\\n}\\n\\nfunc main() {\\n    // 埋め込み構造体を初期化\\n    e := Extended{Base: Base{Value: 100}, Extra: \"テスト\"}\\n    fmt.Println(e.Value)\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\ntype Base ___ {\\n    Value ___\\n___\\n\\ntype Extended ___ {\\n    // Base を埋め込む\\n    ___\\n    Extra ___\\n___\\n\\nfunc ___ () {\\n    // 埋め込み構造体を初期化\\n    ___ := Extended{Base: Base{Value: 100}, Extra: \"テスト\"}\\n    fmt.___(e.Value)\\n___",
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
                  "Base を埋め込みます。",
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
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "types": [
            "Base",
            "*Base",
            "base Base"
          ],
          "others": ["100", "main", "fmt", "struct", "int", "}", "string", "main()", "e", "Println", "mt\""]
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
        "description": "パニックから回復する方法を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
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
        "initialDisplayMode": "holey",
        "correctCode": "package main\\n\\nimport \"fmt\"\\n\\nfunc main() {\\n    defer func() {\\n        // recover でパニックを捕捉\\n        if r := recover(); r != nil {\\n            fmt.Println(\"caught\")\\n        }\\n    }()\\n    // panic でパニックを発生\\n    panic(\"エラー\")\\n}",
        "holeyCode": "package ___\\n\\nimport \\\"___\\\"\\n\\nfunc ___ () {\\n    defer ___() {\\n        // recover でパニックを捕捉\\n        if r := recover(); r != ___ {\\n            fmt.___(\"caught\")\\n        ___\\n    ___()\\n    // panic でパニックを発生\\n    panic(\"___\")\\n___",
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
                  "recover でパニックを捕捉します。",
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
                  null
        ],
        "candidates": {
          "functions": [
            "recover",
            "catch",
            "handle"
          ],
          "others": ["panic", "main", "fmt", "main()", "func", "nil", "Println", "}", "error", "mt\"", "エラー"]
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
