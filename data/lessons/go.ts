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
      "description": "プログラムの基本！画面にメッセージを表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Go言語（ゴー）とは？",
          "content": "# シンプルで速い言葉\\n\\nGo言語（ゴーげんご）は、Google（グーグル）という大きな会社が作ったプログラミング言語です。\\n\\n**Go言語のとくちょう：**\\n- 書き方がシンプルで覚えやすい\\n- プログラムがとても速く動く\\n- 大きなシステム（たくさんのコンピュータを動かすしくみ）を作るのが得意\\n\\nまるで「シンプルだけどパワフルな車」のような言語です。むずかしい部品を減らして、だれでも運転（プログラミング）しやすくしています。"
        },
        {
          "title": "Go言語の「きまり文句」",
          "content": "# おまじないを入力しましょう\\n\\nGo言語でプログラムを書くときは、最初に必ず入力する「きまり文句」があります。これは「おまじない」のようなものです。\\n\\n**3つのきまり文句：**\\n- `package main`（パッケージ メイン）：「このプログラムを動かせますよ」という合図\\n- `import \"fmt\"`（インポート エフエムティー）：画面に文字を出す機能を使う準備\\n- `func main()`（ファンク メイン）：プログラムがここからスタート！\\n\\n**コード例：**\\n```go\\npackage main\\nimport \"fmt\"\\nfunc main() {\\n    fmt.Println(\"ヤッホー\")\\n}\\n```\\n\\n`fmt.Println`（エフエムティー プリントライン）で、かっこの中の文字を画面に表示できます。"
        }
      ],
      "correctCode": "// モジュールを宣言\\npackage main\\n// パッケージをインポート\\nimport \"fmt\"\\n// main関数を定義\\nfunc main() {\\n    // こんにちは, Go! と表示する\\n    fmt.Println(\"こんにちは, Go!\")\\n// ブロックを閉じる\\n}",
      "holeyCode": "// モジュールを宣言\\npackage ___\\n// パッケージをインポート\\n___ \\\"___\\\"\\n// main関数を定義\\nfunc ___ () {\\n    // こんにちは, Go! と表示する\\n    ___.___(\\\"___\\\")\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// main関数を定義",
          "func main() {",
          "    // こんにちは, Go! と表示する",
          "    fmt.Println(\\\"こんにちは, Go!\\\")",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
              {
                      "title": "変数とは",
                      "content": "# 変数は「はこ」のようなもの\\n\\n変数は値を入れておく箱です。\\n\\n```go\\nname := \"太郎\"\\nage := 12\\n```\\n\\n:= で変数を作れます！"
              },
              {
                      "title": "変数の使い方",
                      "content": "# 値を入れて使おう\\n\\n```go\\nx := 10\\nx = 20  // 値を変える\\nfmt.Println(x)  // 20\\n```\\n\\n一度作った変数は = で値を変えられます。"
              }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // x に 10 を代入する\\n    x := 10\\n    // x を表示する\\n    fmt.Println(x)\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // x に 10 を代入する\n    ___ := ___\n    // x を表示する\n    ___.___(___) \n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // x に 10 を代入する",
          "    x := 10",
          "    // x を表示する",
          "    fmt.Println(x)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
              {
                      "title": "計算をしてみよう",
                      "content": "# Go言語で計算\\n\\n算数と同じ記号で計算できます。\\n\\n```go\\na := 10 + 5   // 15\\nb := 10 - 3   // 7\\nc := 4 * 2    // 8\\nd := 10 / 2   // 5\\n```"
              },
              {
                      "title": "余りを求める",
                      "content": "# % で余り\\n\\n```go\\nx := 7 % 3  // 7÷3の余り = 1\\n```\\n\\n偶数・奇数の判定に便利！"
              }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // はこに数字を入れる\\n    a := 4\\n    b := 3\\n    // * でかけ算する\\n    fmt.Println(a * b)\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // はこに数字を入れる\n    ___ := ___\n    // 変数を宣言\n    ___ := ___\n    // * でかけ算する\n    ___.___(___  ___ ___)\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // はこに数字を入れる",
          "    a := 4",
          "    // 変数を宣言",
          "    b := 3",
          "    // * でかけ算する",
          "    fmt.Println(a * b)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          ""
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
      "description": "「あまり」について学びます",
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "content": "# 剰余演算子「%」\\n\\n`%`（パーセント記号）は、割り算の **「あまり」** を計算する特別な記号です。\\n\\n**わかりやすい例：**\\n- 10このアメを3人で分けると？\\n- 1人3こずつで、**1こあまる**\\n- これを `10 % 3` と書くと、答えは `1`\\n\\n```go\\nfmt.Println(10 % 3)  // 1（あまり1）\\nfmt.Println(8 % 4)   // 0（割り切れる！あまりなし）\\n```\\n\\n割り切れるときは「0」になります。"
        },
        {
          "title": "偶数・奇数の判定",
          "content": "# 便利な使い方：偶数と奇数\\n\\n`%` を使うと、数が偶数か奇数かを調べられます。\\n\\n**考え方：**\\n- 2で割ってあまりが **0** → 偶数（2, 4, 6, 8...）\\n- 2で割ってあまりが **1** → 奇数（1, 3, 5, 7...）\\n\\n```go\\nn := 7\\nif n % 2 == 1 {\\n    fmt.Println(\"奇数\")  // 7÷2=3あまり1 なので奇数！\\n}\\n```\\n\\nゲームで「1つおきに色を変える」などに使えます！"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    fmt.Println(10 % 3)\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // 10 を 3 で割ったあまりを出力する\n    ___.___(___  ___ ___)\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    fmt.Println(10 % 3)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
      "description": "累算代入演算子（+=、-=）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "累算代入演算子とは？",
          "content": "# 値をかんたんに増やす・減らす\\n\\n`+=`（プラスイコール）と `-=`（マイナスイコール）は、「はこ」の中身を増やしたり減らしたりする便利な記号です。\\n\\n**イメージ：**\\n- `+=` は「今持っているものに足す」\\n- `-=` は「今持っているものから引く」\\n\\n**たとえばゲームのスコア：**\\n```go\\nscore := 100      // 最初は100点\\nscore += 10       // 10点ゲット！ → 110点に\\n// score = score + 10 と同じ意味です\\n```"
        },
        {
          "title": "コードを短く書こう！",
          "content": "# 便利な書き方\\n\\nこの記号を使うと、同じ変数を2回書かなくてすみます。プログラマーは怠け者（？）なので、短く書く方法が大好きです！\\n\\n**比べてみましょう：**\\n```go\\n// 長い書き方（変数名を2回書く）\\ncount = count + 1\\n\\n// 短い書き方（変数名は1回だけ！）\\ncount += 1\\n```\\n\\n同じ結果なら、短い方がわかりやすいですね。他にも `*=`（かけ算）や `/=`（わり算）もあります。"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    hp := 100\\n    // += で 20 を足す\\n    hp += 20\\n    // -= で 50 を引く\\n    hp -= 50\\n    fmt.Println(hp)\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // 変数を宣言\n    ___ := ___\n    // += で 20 を足す\n    ___ += ___\n    // -= で 50 を引く\n    ___ -= ___\n    // 出力\n    ___.___(___) \n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // 変数を宣言",
          "    hp := 100",
          "    // += で 20 を足す",
          "    hp += 20",
          "    // -= で 50 を引く",
          "    hp -= 50",
          "    // 出力",
          "    fmt.Println(hp)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          "",
          null,
          ""
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
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
              {
                      "title": "fmt.Printfで表示",
                      "content": "# 文章に変数を埋め込もう\\n\\n%v や %d を使って変数を表示します。\\n\\n```go\\nname := \"太郎\"\\nfmt.Printf(\"こんにちは、%sさん\", name)\\n// こんにちは、太郎さん\\n```"
              },
              {
                      "title": "フォーマット指定子",
                      "content": "# %s、%d、%v\\n\\n- **%s** 文字列\\n- **%d** 整数\\n- **%v** 何でも表示\\n\\n```go\\nfmt.Printf(\"%s は %d 歳\", name, age)\\n```"
              }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // ageに10を入れる\\n    age := 10\\n    // age を埋め込む\\n    fmt.Printf(\"I am %d years old.\\n\", age)\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // ageに10を入れる\n    ___ := ___\n    // age を埋め込む\n    ___.___(___ ___\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // ageに10を入れる",
          "    age := 10",
          "    // age を埋め込む",
          "    fmt.Printf(\\\"I am %d years old.\\n\\\", age)",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
      "description": "スライスについて学びます",
      "tutorialSlides": [
        {
          "title": "スライスとは？",
          "content": "# データを並べてまとめる「長い箱」\\n\\n**スライス** は、たくさんのデータを順番に並べて入れられる「長い箱」のようなものです。\\n\\n**たとえば：**\\n- テストの点数を全部まとめて保存\\n- 友だちの名前をリストにする\\n- ゲームのスコアランキング\\n\\nスライスを使うと、100個でも1000個でも、1つの変数でまとめて管理できます。\\n\\n並んでいる順番には番号がついていて、0, 1, 2... と数えます。ロッカーの番号のようなイメージです！"
        },
        {
          "title": "データの番号は「0」から！",
          "content": "# [ ]（角かっこ）で取り出す\\n\\nスライスの中身を取り出すときは、`[番号]` で何番目かを指定します。\\n\\n**大事なルール：番号は「0」からスタート！**\\n- 1番目のデータ → `[0]`\\n- 2番目のデータ → `[1]`\\n- 3番目のデータ → `[2]`\\n\\n**コード例：**\\n```go\\nitems := []int{100, 200, 300}\\n//            ↑0番  ↑1番  ↑2番\\nfmt.Println(items[0]) // 100 が表示されます\\nfmt.Println(items[1]) // 200 が表示されます\\n```\\n\\nプログラミングでは「0から数える」のが世界共通のルールです！"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    nums := []int{10, 20}\\n    // インデックス 1 で2番目を取得\\n    fmt.Println(nums[1])\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // 変数を宣言\n    ___ := []___  {___, ___}\n    // インデックス 1 で2番目を取得\n    ___.___(___[___])\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // 変数を宣言",
          "    nums := []int{10, 20}",
          "    // インデックス 1 で2番目を取得",
          "    fmt.Println(nums[1])",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "content": "# プログラムに「判断」させよう\\n\\n**条件分岐** は、プログラムに「もし〜なら、〇〇する」という判断をさせる仕組みです。\\n\\n**身近な例：**\\n- もし雨なら → 傘を持っていく\\n- もしテストで80点以上なら → 「すごい！」と言う\\n- もしゲームでHPが0なら → ゲームオーバー\\n\\nこのように、状況によって動きを変えることで、プログラムが「賢く」なります！"
        },
        {
          "title": "if文（イフぶん）を使おう",
          "content": "# 「もし〜なら」を書く方法\\n\\n`if`（イフ）は英語で「もし」という意味です。Go言語では次のように書きます。\\n\\n**書き方：**\\n```go\\nif 条件 {\\n    やりたいこと\\n}\\n```\\n\\n**コード例：**\\n```go\\nif score > 80 {\\n    fmt.Println(\"すごい！\")\\n}\\n```\\n\\n**ポイント：**\\n- `if` のあとに条件を書く\\n- `{ }` の中に「条件が正しいときにやること」を書く\\n- Go言語では条件を `( )` で囲まなくてOK！\\n\\n`>` は「より大きい」という意味の記号（比較演算子・ひかくえんざんし）です。"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // scoreに100を入れる\\n    score := 100\\n    // > で比較する\\n    if score > 80 {\\n        // Great と表示する\\n        fmt.Println(\"すごい\")\\n    }\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // scoreに100を入れる\n    ___ := ___\n    // > で比較する\n    if ___ ___ ___ {\n        // Great と表示する\n        ___.___(\\\"___\\\")\n    // ブロックを閉じる\n    ___\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // scoreに100を入れる",
          "    score := 100",
          "    // > で比較する",
          "    if score > 80 {",
          "        // Great と表示する",
          "        fmt.Println(\\\"すごい\\\")",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          "",
          null,
          ""
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
      "description": "ちがう場合はどうしましょう？の仕組みと使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "if-else文",
                      "content": "# 条件が違う場合の処理\\n\\n```go\\nif score >= 60 {\\n    fmt.Println(\"合格\")\\n} else {\\n    fmt.Println(\"不合格\")\\n}\\n```\\n\\nelseで「そうでなければ」を書けます。"
              },
              {
                      "title": "else if",
                      "content": "# 複数の条件\\n\\n```go\\nif score >= 90 {\\n    fmt.Println(\"すごい\")\\n} else if score >= 60 {\\n    fmt.Println(\"合格\")\\n} else {\\n    fmt.Println(\"もう少し\")\\n}\\n```"
              }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // xに5を入れる\\n    x := 5\\n    // 10より大きいかを比較する演算子\\n    if x > 10 {\\n        // 10より大きいときのメッセージ（'大きい'）\\n        fmt.Println(\"大きい\")\\n    // elseで10以下の場合の処理\\n    } else {\\n        // それ以外のメッセージ（'小さい'）\\n        fmt.Println(\"小さい\")\\n    }\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // xに5を入れる\n    ___ := ___\n    // 10より大きいかを比較する演算子\n    if ___ ___ ___ {\n        // 10より大きいときのメッセージ（'大きい'）\n        ___.___(\\\"___\\\")\n    // elseで10以下の場合の処理\n    } ___ {\n        // それ以外のメッセージ（'小さい'）\n        ___.___(\\\"___\\\")\n    // ブロックを閉じる\n    ___\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // xに5を入れる",
          "    x := 5",
          "    // 10より大きいかを比較する演算子",
          "    if x > 10 {",
          "        // 10より大きいときのメッセージ（'大きい'）",
          "        fmt.Println(\\\"大きい\\\")",
          "    // elseで10以下の場合の処理",
          "    } else {",
          "        // それ以外のメッセージ（'小さい'）",
          "        fmt.Println(\\\"小さい\\\")",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "content": "# 論理演算子とは？\\n\\n2つ以上の条件を組み合わせたいときに使う特別な記号です。\\n\\n**2つの記号：**\\n- `&&`（アンドアンド）: 「かつ」＝ **両方とも** 正しいとき\\n- `||`（オアオア）: 「または」＝ **どちらか1つでも** 正しいとき\\n\\n**身近な例：**\\n- 遊園地の乗り物：「18歳以上 **かつ** チケットを持っている」人だけ乗れる\\n- おやつタイム：「宿題が終わった **または** 手伝いをした」らおやつOK"
        },
        {
          "title": "&&（かつ）と ||（または）の使い分け",
          "content": "# どっちを使う？\\n\\n**&&（かつ）：両方とも正しいとき**\\n```go\\nif score >= 70 && bonus > 0 {\\n    // 70点以上「かつ」ボーナスあり\\n    fmt.Println(\"合格！\")\\n}\\n```\\n\\n**||（または）：どちらか1つでも正しいとき**\\n```go\\nif isHoliday || isWeekend {\\n    // 祝日「または」週末\\n    fmt.Println(\"お休み！\")\\n}\\n```\\n\\n**覚え方：**\\n- `&&` → 「A **と** B」両方必要\\n- `||` → 「A **か** B」どっちかでOK"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    score := 80\\n    bonus := 10\\n    // && で両方の条件をチェック\\n    if score >= 70 && bonus > 0 {\\n        fmt.Println(\"ボーナス合格！\")\\n    }\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // 変数を宣言\n    ___ := ___\n    // 変数を宣言\n    ___ := ___\n    // && で両方の条件をチェック\n    if ___ ___ ___ && ___ ___ ___ {\n        // パッケージをインポート\n        ___.___(\\\"___\\\")\n    // ブロックを閉じる\n    ___\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // 変数を宣言",
          "    score := 80",
          "    // 変数を宣言",
          "    bonus := 10",
          "    // && で両方の条件をチェック",
          "    if score >= 70 && bonus > 0 {",
          "        // パッケージをインポート",
          "        fmt.Println(\\\"ボーナス合格！\\\")",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "ループ（繰り返し）について学びます",
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "content": "# 同じことを何度もやりたい！\\n\\n**ループ（繰り返し）** は、同じ作業を何度も自動でやってくれる便利な仕組みです。\\n\\n**たとえば：**\\n- クラス全員の名前を順番に呼ぶ\\n- 買い物リストの商品を1つずつ表示\\n- ゲームで敵キャラ全員を動かす\\n\\n人間がやると大変ですが、コンピュータは「繰り返し」が大得意！1000回でも10000回でも、文句を言わずにやってくれます。"
        },
        {
          "title": "range（レンジ）で全部取り出す",
          "content": "# スライスの中身を順番に処理\\n\\n`range`（レンジ）を使うと、スライスの中身を最初から最後まで **1つずつ順番に** 取り出せます。\\n\\n**コード例：**\\n```go\\ncolors := []string{\"赤\", \"青\", \"黄\"}\\nfor _, c := range colors {\\n    fmt.Println(c)\\n}\\n// 赤、青、黄 の順に表示される\\n```\\n\\n**コードの読み方：**\\n- `for` → 繰り返しスタート\\n- `_` → 番号は使わない（無視する）\\n- `c` → 取り出したデータを入れる変数\\n- `range colors` → colorsの中身を順番に\\n\\n`_`（アンダースコア）は「使わないよ」という意味の特別な記号です。"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    nums := []int{1, 2, 3}\\n    // range で全要素をループ\\n    for _, n := range nums {\\n        fmt.Println(n)\\n    }\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // 変数を宣言\n    ___ := []___  {___, ___, ___}\n    // range で全要素をループ\n    for ___, ___ := ___ ___ {\n        // 出力\n        ___.___(___) \n    // ブロックを閉じる\n    ___\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // 変数を宣言",
          "    nums := []int{1, 2, 3}",
          "    // range で全要素をループ",
          "    for _, n := range nums {",
          "        // 出力",
          "        fmt.Println(n)",
          "    // ブロックを閉じる",
          "    }",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          "",
          null,
          ""
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
      "description": "Map（マップ）について学びます",
      "tutorialSlides": [
        {
          "title": "辞書とは？",
          "content": "# 名前で検索できるしくみ\\n\\n**Map（マップ）** は、「名前」と「データ」をセットにして保存できる便利な仕組みです。本物の辞書のように使えます。\\n\\n**たとえば電話帳：**\\n- 「たろう」→「090-1234-5678」\\n- 「はなこ」→「080-9876-5432」\\n\\nスライスは「番号」で探しますが、Mapは「名前（キー）」で探せます。友だちの名前を言えば、すぐに電話番号がわかる！"
        },
        {
          "title": "Mapの使いかた",
          "content": "# 名前で取り出す\\n\\nMapでは「名前（キー）」と「データ（値）」をセットで保存します。取り出すときは名前を指定するだけ！\\n\\n**コード例：**\\n```go\\n// りんご→あか、バナナ→きいろ のペアを作る\\ncolors := map[string]string{\\n    \"りんご\": \"あか\",\\n    \"バナナ\": \"きいろ\",\\n}\\nfmt.Println(colors[\"りんご\"])  // あか が表示される\\n```\\n\\n**書き方のポイント：**\\n- `map[キーの種類]値の種類` で型を決める\\n- `{\"キー\": \"値\"}` でデータを入れる\\n- `マップ名[\"キー\"]` で取り出す"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc main() {\\n    // string をキーの型に指定\\n    scores := map[string]int{\"Math\": 90}\\n    // 'Math' をキーに指定\\n    fmt.Println(scores[\"Math\"])\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// main関数を定義\nfunc ___ () {\n    // string をキーの型に指定\n    ___ := ___[___]___  {\\\"___\\\": ___}\n    // 'Math' をキーに指定\n    ___.___(___[\\\"___\\\"])\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func main() {",
          "    // string をキーの型に指定",
          "    scores := map[string]int{\\\"Math\\\": 90}",
          "    // 'Math' をキーに指定",
          "    fmt.Println(scores[\\\"Math\\\"])",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "\\\"\\\"",
          null,
          ""
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "関数とは？",
          "content": "# 手順をまとめて名前をつける\\n\\n**関数** は、いくつかの命令をひとまとめにして名前をつけたものです。\\n\\n**身近な例：料理のレシピ**\\n- 「カレーを作る」と言えば、具体的な手順がわかる\\n- いちいち「野菜を切って、炒めて、煮込んで...」と言わなくていい\\n\\n**プログラミングでも同じ！**\\n- 関数に名前をつけておけば、あとは名前を呼ぶだけで実行できる\\n- 同じ処理を何度も書かなくてすむ\\n\\n一度作った関数は、何回でも使い回せます！"
        },
        {
          "title": "関数の作りかた",
          "content": "# func（ファンク）で関数を作る\\n\\n`func`（ファンク）というキーワードの後に名前をつけて、関数を作ります。\\n\\n**コード例：**\\n```go\\n// sayHello という関数を作る\\nfunc sayHello() {\\n    fmt.Println(\"こんにちは\")\\n}\\n\\nfunc main() {\\n    sayHello()  // 関数を呼び出す\\n    sayHello()  // 何回でも使える！\\n}\\n```\\n\\n**書き方：**\\n1. `func 関数名()` で関数を定義\\n2. `{ }` の中にやりたい処理を書く\\n3. 使うときは `関数名()` で呼び出す\\n\\n`()` は「関数を呼び出すよ」という合図です。"
        }
      ],
      "correctCode": "package main\\nimport \"fmt\"\\nfunc greet() {\\n    fmt.Println(\"こんにちは\")\\n}\\nfunc main() {\\n    // greet 関数を呼び出す\\n    greet()\\n}", "holeyCode": "// モジュールを宣言\npackage ___\n// パッケージをインポート\n___ \\\"___\\\"\n// greet関数を定義\nfunc ___ () {\n    // パッケージをインポート\n    ___.___(\\\"___\\\")\n// ブロックを閉じる\n___\n// greet関数を定義\nfunc ___ () {\n    // greet 関数を呼び出す\n    ___()\n// ブロックを閉じる\n___",
      "correctLines": [
          "// モジュールを宣言",
          "package main",
          "// パッケージをインポート",
          "import \\\"fmt\\\"",
          "// 関数を定義",
          "func greet() {",
          "    // パッケージをインポート",
          "    fmt.Println(\\\"こんにちは\\\")",
          "// ブロックを閉じる",
          "}",
          "// 関数を定義",
          "func main() {",
          "    // greet 関数を呼び出す",
          "    greet()",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
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
          "",
          null,
          "",
          null,
          ""
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