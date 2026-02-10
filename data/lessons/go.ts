export const goData = {
  "language": "go",
  "lessonId": "go-1",
  "lessonTitle": "Go (ゴー) 言語に挑戦！",
  "lessonDescription": "Google（グーグル）が作った言葉「Go（ゴー）言語」のきほんを学びましょう。シンプルですばやく動くプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Go言語へようこそ！",
      "content": "**Go（ゴー）** は、Google（グーグル）が2009年に作ったプログラミング言語です。\\n\\nシンプルで覚えやすく、とても速く動くのが特徴です。\\n\\nWebサービスやクラウドのシステムを作るのによく使われています。"
    },
    {
      "title": "画面に文字を出す",
      "content": "Go言語で画面に文字を出すには `fmt.Println` を使います。\\n\\n```go\\npackage main\\nimport \\\"fmt\\\"\\nfunc main() {\\n    fmt.Println(\\\"こんにちは！\\\")\\n}\\n```\\n\\n`package main` はプログラムの始まり、`import \\\"fmt\\\"` は出力機能を読み込み、`func main()` はプログラムの実行開始地点です。"
    },
    {
      "title": "変数を使う",
      "content": "データを入れておく「はこ」を**変数**（へんすう）と呼びます。\\n\\n```go\\nx := 10\\nname := \\\"太郎\\\"\\n```\\n\\n`:=` を使うと、変数の型を自動で決めてくれます。`var x int = 10` と書くこともできます。"
    },
    {
      "title": "計算する",
      "content": "Go言語では数字を計算できます。\\n\\n```go\\na := 5\\nb := 3\\nfmt.Println(a + b)  // 8\\nfmt.Println(a * b)  // 15\\nfmt.Println(10 % 3) // 1（あまり）\\n```\\n\\n`+`（足す）、`-`（引く）、`*`（かける）、`/`（割る）、`%`（あまり）が使えます。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```go\\nscore := 85\\nif score > 80 {\\n    fmt.Println(\\\"すごい！\\\")\\n} else {\\n    fmt.Println(\\\"がんばろう\\\")\\n}\\n```\\n\\n条件が正しければ `{ }` の中が実行されます。`else` はそうでない場合です。"
    },
    {
      "title": "スライスとマップ",
      "content": "複数のデータをまとめて扱えます。\\n\\n**スライス**（配列のようなもの）:\\n```go\\nnums := []int{1, 2, 3}\\nfmt.Println(nums[0]) // 1\\n```\\n\\n**マップ**（辞書のようなもの）:\\n```go\\nscores := map[string]int{\\\"Math\\\": 90}\\nfmt.Println(scores[\\\"Math\\\"]) // 90\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // こんにちは, Go! と表示する\\n    fmt.Println(\"こんにちは, Go!\")\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // こんにちは, Go! と表示する\\n    ___.___(\\\"___\\\")\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // こんにちは, Go! と表示する",
          "    fmt.Println(\"こんにちは, Go!\")",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "フォーマットパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "fmtパッケージのPrintln関数で「こんにちは, Go!」と出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "strings": [
            "こんにちは, Go!"
          ],
          "others": ["main", "fmt", "main()", "Println", "}", "import"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Go!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // x に 10 を代入する\\n    x := 10\\n    // x を表示する\\n    fmt.Println(x)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // x に 10 を代入する\\n    ___ := ___\\n    // x を表示する\\n    ___.___(___) \\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // x に 10 を代入する",
          "    x := 10",
          "    // x を表示する",
          "    fmt.Println(x)",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数xに10を代入します。",
          null,
          "fmt.Printlnで変数xの値を出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["main", "fmt", "main()", "Println", "}", "import"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // はこに数字を入れる\\n    a := 4\\n    b := 3\\n    // * でかけ算する\\n    fmt.Println(a * b)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // はこに数字を入れる\\n    ___ := ___\\n    ___ := ___\\n    // * でかけ算する\\n    ___.___(___  ___ ___)\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // はこに数字を入れる",
          "    a := 4",
          "    b := 3",
          "    // * でかけ算する",
          "    fmt.Println(a * b)",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数aに4を代入します。",
          "変数bに3を代入します。",
          null,
          "fmt.Printlnでa * bの結果を出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["main", "fmt", "main()", "a", "b", "Println", "}", "import", "4", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    fmt.Println(10 % 3)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___.___(___  ___ ___)\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    fmt.Println(10 % 3)",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "fmt.Printlnで10 % 3（あまり）を出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["main", "fmt", "main()", "Println", "}", "import", "10", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    hp := 100\\n    // += で 20 を足す\\n    hp += 20\\n    // -= で 50 を引く\\n    hp -= 50\\n    fmt.Println(hp)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := ___\\n    // += で 20 を足す\\n    ___ += ___\\n    // -= で 50 を引く\\n    ___ -= ___\\n    ___.___(___) \\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    hp := 100",
          "    // += で 20 を足す",
          "    hp += 20",
          "    // -= で 50 を引く",
          "    hp -= 50",
          "    fmt.Println(hp)",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          "fmtパッケージをインポートします。",
          "main関数を定義します。",
          "hpに100を代入します。",
          null,
          "hp += 20でhpに20を加算します。",
          null,
          "hp -= 50でhpから50を減算します。",
          "fmt.Printlnでhpの値を出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["main", "fmt", "main()", "hp", "20", "50", "Println", "}", "import", "100"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // ageに10を入れる\\n    age := 10\\n    // age を埋め込む\\n    fmt.Printf(\"I am %d years old.\\n\", age)\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // ageに10を入れる\\n    ___ := ___\\n    // age を埋め込む\\n    ___.___(___ ___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // ageに10を入れる",
          "    age := 10",
          "    // age を埋め込む",
          "    fmt.Printf(\"I am %d years old.\\n\", age)",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数ageに10を代入します。",
          null,
          "fmt.Printfでフォーマット文字列と変数ageを渡します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "others": ["main", "fmt", "main()", "Printf", "}", "import", "10", "\"I am %d years old.\\n\", age)", "\"I", "am %d years old.\\n\", age)"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "I am 10 years old.\\n"
          }
        ]
      },
    {
      "title": "データをならべる「スライス」",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    nums := []int{10, 20}\\n    // インデックス 1 で2番目を取得\\n    fmt.Println(nums[1])\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := []___  {___, ___}\\n    // インデックス 1 で2番目を取得\\n    ___.___(___[___])\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    nums := []int{10, 20}",
          "    // インデックス 1 で2番目を取得",
          "    fmt.Println(nums[1])",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "numsにint型スライス{10, 20}を代入します。",
          null,
          "fmt.Printlnでnums[1]（2番目の要素）を出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "numbers": [
            "1", "10", "20"
          ],
          "others": ["main", "fmt", "main()", "nums", "Println", "}", "import", "int", "int{10,"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分けましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // scoreに100を入れる\\n    score := 100\\n    // > で比較する\\n    if score > 80 {\\n        // Great と表示する\\n        fmt.Println(\"すごい\")\\n    }\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // scoreに100を入れる\\n    ___ := ___\\n    // > で比較する\\n    if ___ ___ ___ {\\n        // Great と表示する\\n        ___.___(\\\"___\\\")\\n    ___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // scoreに100を入れる",
          "    score := 100",
          "    // > で比較する",
          "    if score > 80 {",
          "        // Great と表示する",
          "        fmt.Println(\"すごい\")",
          "    }",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          "fmtパッケージをインポートします。",
          "main関数を定義します。",
          null,
          "scoreに100を代入します。",
          null,
          "if score > 80 で scoreが80より大きいかを判定します。",
          null,
          "fmt.Printlnで「すごい」と出力します。",
          "ブロックの終わりを示す閉じ括弧です。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "すごい"
          ],
          "others": ["100", "main", "fmt", "main()", "score", "Println", "}", "import", "80"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "すごい\\n"
          }
        ]
      },
    {
      "title": "ちがう場合はどうしましょう？",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // xに5を入れる\\n    x := 5\\n    // 10より大きいかを比較する演算子\\n    if x > 10 {\\n        // 10より大きいときのメッセージ（'大きい'）\\n        fmt.Println(\"大きい\")\\n    // elseで10以下の場合の処理\\n    } else {\\n        // それ以外のメッセージ（'小さい'）\\n        fmt.Println(\"小さい\")\\n    }\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // xに5を入れる\\n    ___ := ___\\n    // 10より大きいかを比較する演算子\\n    if ___ ___ ___ {\\n        // 10より大きいときのメッセージ（'大きい'）\\n        ___.___(\\\"___\\\")\\n    // elseで10以下の場合の処理\\n    } ___ {\\n        // それ以外のメッセージ（'小さい'）\\n        ___.___(\\\"___\\\")\\n    ___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // xに5を入れる",
          "    x := 5",
          "    // 10より大きいかを比較する演算子",
          "    if x > 10 {",
          "        // 10より大きいときのメッセージ（'大きい'）",
          "        fmt.Println(\"大きい\")",
          "    // elseで10以下の場合の処理",
          "    } else {",
          "        // それ以外のメッセージ（'小さい'）",
          "        fmt.Println(\"小さい\")",
          "    }",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          "fmtパッケージをインポートします。",
          "main関数を定義します。",
          null,
          "xに5を代入します。",
          null,
          "if x > 10 でxが10より大きいかを判定します。",
          null,
          "fmt.Printlnで「大きい」と出力します。",
          null,
          "elseで条件不成立時の処理を記述します。",
          null,
          "fmt.Printlnで「小さい」と出力します。",
          "ブロックの終わりを示す閉じ括弧です。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "others": ["5", ">", "大きい", "小さい", "main", "fmt", "main()", "x", "Println", "}", "import", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "小さい\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    score := 80\\n    bonus := 10\\n    // && で両方の条件をチェック\\n    if score >= 70 && bonus > 0 {\\n        fmt.Println(\"ボーナス合格！\")\\n    }\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := ___\\n    ___ := ___\\n    // && で両方の条件をチェック\\n    if ___ ___ ___ && ___ ___ ___ {\\n        ___.___(\\\"___\\\")\\n    ___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    score := 80",
          "    bonus := 10",
          "    // && で両方の条件をチェック",
          "    if score >= 70 && bonus > 0 {",
          "        fmt.Println(\"ボーナス合格！\")",
          "    }",
          "}"
        ],
      "lineHints": [
          "mainパッケージを宣言します。",
          "fmtパッケージをインポートします。",
          "main関数を定義します。",
          "scoreに80を代入します。",
          "bonusに10を代入します。",
          null,
          "score >= 70 && bonus > 0 で両方の条件をチェックします。",
          "fmt.Printlnで「ボーナス合格！」と出力します。",
          "ブロックの終わりを示す閉じ括弧です。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|",
            ">=",
            ">"
          ],
          "others": ["main", "fmt", "main()", "score", "bonus", "Println", "}", "import", "80", "10", "70", "0", "ボーナス合格！"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナス合格！\\n"
          }
        ]
      },
    {
      "title": "中身を全部出してみましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    nums := []int{1, 2, 3}\\n    // range で全要素をループ\\n    for _, n := range nums {\\n        fmt.Println(n)\\n    }\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := []___  {___, ___, ___}\\n    // range で全要素をループ\\n    for ___, ___ := ___ ___ {\\n        ___.___(___) \\n    ___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    nums := []int{1, 2, 3}",
          "    // range で全要素をループ",
          "    for _, n := range nums {",
          "        fmt.Println(n)",
          "    }",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "numsにint型スライス{1, 2, 3}を代入します。",
          null,
          "for _, n := range nums で全要素をループします。",
          "fmt.Printlnで変数nの値を出力します。",
          "ブロックの終わりを示す閉じ括弧です。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "range"
          ],
          "others": ["main", "fmt", "main()", "nums", "Println", "}", "import", "int", "1", "2", "3", "_", "n", "int{1,", "3}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「じしょ」",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // string をキーの型に指定\\n    scores := map[string]int{\"Math\": 90}\\n    // 'Math' をキーに指定\\n    fmt.Println(scores[\"Math\"])\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // string をキーの型に指定\\n    ___ := ___[___]___  {\\\"___\\\": ___}\\n    // 'Math' をキーに指定\\n    ___.___(___[\\\"___\\\"])\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // string をキーの型に指定",
          "    scores := map[string]int{\"Math\": 90}",
          "    // 'Math' をキーに指定",
          "    fmt.Println(scores[\"Math\"])",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "scoresにmap[string]int{\"Math\": 90}を代入します。",
          null,
          "fmt.Printlnでscores[\"Math\"]の値を出力します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "strings": [
            "string",
            "Math"
          ],
          "others": ["main", "fmt", "main()", "scores", "Println", "}", "import", "map", "int", "90", "int{\"Math\":"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "90\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作りましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc greet() {\\n    fmt.Println(\"こんにちは\")\\n}\\nfunc main() {\\n    // greet 関数を呼び出す\\n    greet()\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___.___(\\\"___\\\")\\n___\\nfunc ___ () {\\n    // greet 関数を呼び出す\\n    ___()\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func greet() {",
          "    fmt.Println(\"こんにちは\")",
          "}",
          "func main() {",
          "    // greet 関数を呼び出す",
          "    greet()",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "fmtパッケージをインポートします。",
          "greet関数を定義します。",
          "fmt.Printlnで「こんにちは」と出力します。",
          "関数の終わりを示す閉じ括弧です。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "greet関数を呼び出して実行します。",
          "関数の終わりを示す閉じ括弧です。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["main", "fmt", "greet()", "Println", "}", "main()", "import", "こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}