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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // こんにちは, Go! と表示する\\n    fmt.Println(\"こんにちは, Go!\")\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // こんにちは, Go! と表示する\\n    fmt.___(\"こんにちは, Go!\")\\n___",
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
          "fmt.Printlnで文字列を出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "Hello, Go!"
          ],
          "others": ["main", "fmt", "main()", "Println", "}", "mt\"", "import", "main"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // x に 10 を代入する\\n    ___ := 10\\n    // x を表示する\\n    fmt.___(x)\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          null,
          "はこの名前 x を指定して、表示させます。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "x"
          ],
          "numbers": [
            "10"
          ],
          "others": ["main", "fmt", "main()", "Println", "}", "mt\"", "import", "main"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // はこに数字を入れる\\n    ___ := 4\\n    ___ := 3\\n    // * でかけ算する\\n    fmt.___(a * b)\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          "変数を宣言し、同時に数値を代入します（型推論を使用）。",
          null,
          "かけ算なので `*` を使います。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["main", "fmt", "main()", "a", "b", "Println", "}", "mt\"", "import", "main"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // 10 を 3 で割ったあまりを出力する\\n    fmt.___(10 % 3)\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "あまりを求める `%` 演算子を使います。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["main", "fmt", "main()", "Println", "}", "mt\"", "import", "main"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := 100\\n    // += で 20 を足す\\n    hp += ___\\n    // -= で 50 を引く\\n    hp -= ___\\n    fmt.___(hp)\\n___",
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
          "hpに20を加算します。",
          null,
          "hpから50を減算します。",
          "Printlnで出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["main", "fmt", "main()", "hp", "20", "50", "Println", "}", "mt\"", "import", "main", "20", "50"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // ageに10を入れる\\n    ___ := 10\\n    // age を埋め込む\\n    fmt.___(\"I am %d years old.\\n___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    // ageに10を入れる",
          "    age := 10",
          "    // age を埋め込む",
          "    fmt.Printf(\"I am %d years old.",
          "\", age)",
          "}"
        ],
      "lineHints": [
          "このファイルが属するパッケージ（main）を宣言します。",
          "フォーマットパッケージをインポートします。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "変数ageに10を代入します。",
          null,
          "fmt.Printfで文字列を埋め込んで出力します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "others": ["main", "fmt", "main()", "Printf", "}", "mt\"", "import", " age)", "main", " age)", " age)", "\", age)"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := []int{10, 20}\\n    // インデックス 1 で2番目を取得\\n    fmt.___(nums[1])\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "スライスに複数の値を格納します。",
          null,
          "2番目のデータはインデックス1です。 `nums[1]` と入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "1"
          ],
          "others": ["main", "fmt", "main()", "nums", "Println", "}", "mt\"", "import", "main"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // scoreに100を入れる\\n    ___ := 100\\n    // > で比較する\\n    if score ___ 80 {\\n        // Great と表示する\\n        fmt.___(\"すごい\")\\n    ___\\n___",
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
          "scoreが80より大きいかを判定します。",
          null,
          "Printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            ">"
          ],
          "strings": [
            "Great"
          ],
          "others": ["100", "Great\")", "main", "fmt", "main()", "score", "Println", "}", "mt\"", "import", "main", "}"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // xに5を入れる\\n    ___ := 5\\n    // 10より大きいかを比較する演算子\\n    if x ___ 10 {\\n        // 10より大きいときのメッセージ（'大きい'）\\n        fmt.___(\"大きい\")\\n    // elseで10以下の場合の処理\\n    } ___ {\\n        // それ以外のメッセージ（'小さい'）\\n        fmt.___(\"小さい\")\\n    ___\\n___",
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
          "xが10より大きいかを判定します。",
          null,
          "Printlnで出力します。",
          null,
          "elseで条件不成立時の処理を記述します。",
          null,
          "Printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "else"
          ],
          "others": ["5", ">", "Big", "Small", "main", "fmt", "main()", "x", "Println", "}", "{", "mt\"", "main", "import", "}"]
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
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    score := 80\\n    bonus := 10\\n    // && で両方の条件をチェック\\n    if score >= 70 && bonus > 0 {\\n        fmt.Println(\"Bonus 合格\")\\n    }\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := 80\\n    ___ := 10\\n    // && で両方の条件をチェック\\n    if score ___ 70 && bonus > 0 {\\n        fmt.___(\"Bonus 合格\")\\n    ___\\n___",
      "correctLines": [
          "package main",
          "import \"fmt\"",
          "func main() {",
          "    score := 80",
          "    bonus := 10",
          "    // && で両方の条件をチェック",
          "    if score >= 70 && bonus > 0 {",
          "        fmt.Println(\"Bonus 合格\")",
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
          "scoreが70以上かつbonusが0より大きいかを判定します。",
          "Printlnで出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["main", "fmt", "main()", "score", "bonus", ">=", "Println", "}", "mt\"", "import", "main", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Bonus 合格\\n"
          }
        ]
      },
    {
      "title": "中身を全部出してみましょう",
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    nums := []int{1, 2, 3}\\n    // range で全要素をループ\\n    for _, n := range nums {\\n        fmt.Println(n)\\n    }\\n}",
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    ___ := []int{1, 2, 3}\\n    // range で全要素をループ\\n    for _, n := range ___ {\\n        fmt.___(n)\\n    ___\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "スライスに複数の値を格納します。",
          null,
          "配列やスライスを反復処理するキーワードです。",
          "変数の値を標準出力に出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "range"
          ],
          "others": ["main", "fmt", "main()", "nums", "Println", "}", "mt\"", "import", "main", "}", "}", "}\\"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    // string をキーの型に指定\\n    ___ := map[string]int{\"Math\": 90}\\n    // 'Math' をキーに指定\\n    fmt.___(scores[\"Math\"])\\n___",
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
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "名前（キー）の種類として `string` と入力しましょう。",
          null,
          " という名前を指定してデータを取り出します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "string",
            "Math"
          ],
          "others": ["main", "fmt", "main()", "scores", "Println", "}", "mt\"", "import", "main"]
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
      "holeyCode": "package ___\\n___ \\\"___\\\"\\nfunc ___ () {\\n    fmt.___(\"こんにちは\")\\n___\\nfunc ___ () {\\n    // greet 関数を呼び出す\\n    ___()\\n___",
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
          "ここを正しく入力してください。",
          "void型の値を返す関数（greet）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "関数（greet）を呼び出して実行します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "greet"
          ],
          "others": ["main", "fmt", "greet()", "Println", "}", "main()", "mt\"", "import", "main", "}"]
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