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
      "description": "Go言語を使って画面に「こんにちは」と表示させてみましょう。fmt（エフエムティー）という機能を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Go言語（ゴー）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# シンプルで速い言葉\n\nGo言語（ゴーげんご）は、Google（グーグル）という大きな会社が作ったプログラミング言語です。\n\n**Go言語のとくちょう：**\n- 書き方がシンプルで覚えやすい\n- プログラムがとても速く動く\n- 大きなシステム（たくさんのコンピュータを動かすしくみ）を作るのが得意\n\nまるで「シンプルだけどパワフルな車」のような言語です。むずかしい部品（きのう）を減らして、だれでも運転（プログラミング）しやすくしています。"
        },
        {
          "title": "Go言語の「きまり文句」",
          "image": "/illustrations/common/monitor.png",
          "content": "# おまじないを入力しましょう\n\nGo言語でプログラムを書くときは、最初に必ず入力する「きまり文句」があります。これは「おまじない」のようなものです。\n\n**3つのきまり文句：**\n- `package main`（パッケージ メイン）：「このプログラムを動かせますよ」という合図\n- `import \"fmt\"`（インポート エフエムティー）：画面に文字を出す機能を使う準備\n- `func main()`（ファンク メイン）：プログラムがここからスタート！\n\n**コード例：**\n```go\npackage main\nimport \"fmt\"\nfunc main() {\n    fmt.Println(\"ヤッホー\")\n}\n```\n\n`fmt.Println`（エフエムティー プリントライン）で、かっこの中の文字を画面に表示できます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // Hello, Go! と表示する\n    fmt.Println(\"Hello, Go!\")\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // Hello, Go! と表示する\n    fmt.Println(\"___\")\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    // Hello, Go! と表示する",
        "    fmt.Println(\"Hello, Go!\")",
        "}"
      ],
      "lineHints": [null, null, null, null, "フォーマットパッケージを使って文字列を出力します。", null],
      "candidates": {
        "strings": [
          "Hello, Go!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Go!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」",
      "description": "数字をしまっておく「はこ」を作って、中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する「はこ」\n\nプログラムで使う数字や文字を、名前をつけてしまっておける「はこ」のことを **変数（へんすう）** と呼びます。\n\n**たとえばこんなイメージ：**\n- 「りんごの数」というラベルを貼った箱に「5」を入れる\n- あとで「りんごの数」と呼ぶだけで「5」を取り出せる\n\n変数を使うと、同じ数字や文字を何度も書かなくてすむので、プログラムがすっきりします。"
        },
        {
          "title": "「:=」を使いましょう",
          "image": "/illustrations/common/box.png",
          "content": "# かんたんな「はこ」の作りかた\n\nGo言語では、`:=`（コロン・イコール）という特別な記号を使うと、かんたんに「はこ（変数）」を作れます。\n\n**`:=` のすごいところ：**\n- 中に入れるものを見て、自動で「はこ」の種類を決めてくれる\n- 数字を入れれば「数字用のはこ」に\n- 文字を入れれば「文字用のはこ」に\n\n**コード例：**\n```go\napple := 5          // appleという名前の箱に5を入れる\nfmt.Println(apple)  // 5 が表示される\n```\n\n左側が「はこの名前」、右側が「中に入れるもの」です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // x に 10 を代入する\n    x := 10\n    // x を表示する\n    fmt.Println(x)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // x に 10 を代入する\n    ___ := ___\n    // x を表示する\n    fmt.Println(___)\n}",
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
      "lineHints": [null, null, null, null, "変数を宣言し、同時に数値を代入します（型推論を使用）。", null, "はこの名前 x を指定して、表示させます。", null],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Go言語を使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算はコンピュータにお任せ",
          "image": "/illustrations/common/robot_math.png",
          "content": "# コンピュータは計算が得意！\n\nコンピュータは、人間よりもずーっと速く計算ができます。1秒間に何億回もの計算ができるんです！\n\nプログラミングでは、算数と同じ記号を使って「これを計算して」とお願いします。コンピュータは一瞬で答えを出してくれます。\n\n**たとえば：**\n- 大きな数のたし算\n- むずかしいかけ算\n- 何回も繰り返す計算\n\n全部おまかせできます！"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nGo言語での計算記号は、算数で使うものとほぼ同じです。\n\n**4つの基本記号（演算子・えんざんし）：**\n- **+**（プラス）: たし算\n- **-**（マイナス）: ひき算\n- **\\***（アスタリスク）: かけ算（×の代わり）\n- **/**（スラッシュ）: わり算（÷の代わり）\n\n**コード例：**\n```go\nx := 100\ny := 20\nfmt.Println(x + y) // 120 が表示されます\n```\n\nかけ算は「*」、わり算は「/」を使うのがポイントです！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // はこに数字を入れる\n    a := 5\n    b := 3\n    // + でたし算する\n    fmt.Println(a + b)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // はこに数字を入れる\n    a := 5\n    b := 3\n    // + でたし算する\n    fmt.Println(a ___ b)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    // はこに数字を入れる",
        "    a := 5",
        "    b := 3",
        "    // + でたし算する",
        ["    fmt.Println(a + b)", "    fmt.Println(b + a)"],
        "}"
      ],
      "lineHints": [null, null, null, null, null, null, null, "たし算なので `+` を使います。", null, null],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "剰余演算子（%）",
      "description": "割り算の「あまり」を求める「%」（パーセント）演算子を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 剰余演算子（じょうよえんざんし）「%」\n\n`%`（パーセント記号）は、割り算の **「あまり」** を計算する特別な記号です。\n\n**わかりやすい例：**\n- 10このアメを3人で分けると？\n- 1人3こずつで、**1こあまる**\n- これを `10 % 3` と書くと、答えは `1`\n\n```go\nfmt.Println(10 % 3)  // 1（あまり1）\nfmt.Println(8 % 4)   // 0（割り切れる！あまりなし）\n```\n\n割り切れるときは「0」になります。"
        },
        {
          "title": "偶数・奇数の判定",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 便利な使い方：偶数（ぐうすう）と奇数（きすう）\n\n`%` を使うと、数が偶数か奇数かを調べられます。\n\n**考え方：**\n- 2で割ってあまりが **0** → 偶数（2, 4, 6, 8...）\n- 2で割ってあまりが **1** → 奇数（1, 3, 5, 7...）\n\n```go\nn := 7\nif n % 2 == 1 {\n    fmt.Println(\"奇数\")  // 7÷2=3あまり1 なので奇数！\n}\n```\n\nゲームで「1つおきに色を変える」などに使えます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // 10 を 3 で割ったあまりを出力する\n    fmt.Println(10 % 3)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // 10 を 3 で割ったあまりを出力する\n    fmt.Println(10 ___ 3)\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    // 10 を 3 で割ったあまりを出力する",
        "    fmt.Println(10 % 3)",
        "}"
      ],
      "lineHints": [null, null, null, null, "あまりを求める `%` 演算子を使います。", null],
      "candidates": {
        "operators": [
          "%",
          "/",
          "*",
          "-"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "変数の値を手軽に増やしたり減らしたりする「+=」「-=」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "累算代入演算子（るいさんだいにゅう）とは？",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 値をかんたんに増やす・減らす\n\n`+=`（プラスイコール）と `-=`（マイナスイコール）は、「はこ」の中身を増やしたり減らしたりする便利な記号です。\n\n**イメージ：**\n- `+=` は「今持っているものに足す」\n- `-=` は「今持っているものから引く」\n\n**たとえばゲームのスコア：**\n```go\nscore := 100      // 最初は100点\nscore += 10       // 10点ゲット！ → 110点に\n// score = score + 10 と同じ意味です\n```"
        },
        {
          "title": "コードを短く書こう！",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 便利な書き方\n\nこの記号を使うと、同じ変数を2回書かなくてすみます。プログラマーは怠け者（？）なので、短く書く方法が大好きです！\n\n**比べてみましょう：**\n```go\n// 長い書き方（変数名を2回書く）\ncount = count + 1\n\n// 短い書き方（変数名は1回だけ！）\ncount += 1\n```\n\n同じ結果なら、短い方がわかりやすいですね。他にも `*=`（かけ算）や `/=`（わり算）もあります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    hp := 100\n    // += で 20 を足す\n    hp += 20\n    // -= で 50 を引く\n    hp -= 50\n    fmt.Println(hp)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    hp := 100\n    // += で 20 を足す\n    hp ___ 20\n    // -= で 50 を引く\n    hp ___ 50\n    fmt.Println(hp)\n}",
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
      "lineHints": [null, null, null, null, null, "変数の値を計算して、その結果を同じ変数に再代入します。", null, "変数の値を計算して、その結果を同じ変数に再代入します。", null, null],
      "candidates": {
        "operators": [
          "+=",
          "-=",
          "*=",
          "/="
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "70\n"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "Printf（プリントエフ）を使って、文章の中に「はこ（変数）」の中身を表示します。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "書式指定（しょしきしてい）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文章の中に数字や文字を入れる\n\n「私は○○歳です」のように、文章の一部を変数の中身に入れ替えたいことがあります。\n\n**たとえば：**\n- 「私は **10** 歳です」\n- 「今日は **12** 月です」\n\nこのように、文章の中の「空欄」に変数の値を入れる仕組みを **書式指定（しょしきしてい）** と呼びます。\n\nGo言語では `%d`（パーセントディー）という特別な記号を「空欄」として使います。"
        },
        {
          "title": "Printf（プリントエフ）を使いましょう",
          "image": "/illustrations/common/fstring.png",
          "content": "# %d のところに数字が入る\n\n`Printf`（プリントエフ）を使うと、文章の中の `%d` の部分が、あとで指定した変数の中身に置き換わります。\n\n**コード例：**\n```go\nmonth := 12\nfmt.Printf(\"今は %d 月です\\n\", month)\n// → 「今は 12 月です」と表示される\n```\n\n**記号の意味：**\n- `%d` → 整数（せいすう：小数点のない数）を入れる場所\n- `%s` → 文字列（もじれつ：文字のならび）を入れる場所\n- `\\n` → 改行（かいぎょう：次の行に移る）\n\n`Println` は自動で改行しますが、`Printf` では自分で `\\n` を入れます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ageに10を入れる\n    age := 10\n    // age を埋め込む\n    fmt.Printf(\"I am %d years old.\\n\", age)\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // ageに10を入れる\n    age := 10\n    // age を埋め込む\n    fmt.Printf(\"I am %d years old.\\n\", ___)\n}",
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
      "lineHints": [null, null, null, null, null, null, "フォーマットパッケージを使って文字列を出力します。", null],
      "candidates": {
        "variables": [
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "I am 10 years old.\n"
        }
      ]
    },
    {
      "title": "データをならべる「スライス」",
      "description": "「スライス」という機能を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "スライスとは？",
          "image": "/illustrations/3d_advanced/slicing.png",
          "content": "# データを並べてまとめる「長い箱」\n\n**スライス** は、たくさんのデータを順番に並べて入れられる「長い箱」のようなものです。\n\n**たとえば：**\n- テストの点数を全部まとめて保存\n- 友だちの名前をリストにする\n- ゲームのスコアランキング\n\nスライスを使うと、100個でも1000個でも、1つの変数でまとめて管理できます。\n\n並んでいる順番には番号がついていて、0, 1, 2... と数えます。ロッカーの番号のようなイメージです！"
        },
        {
          "title": "データの番号は「0」から！",
          "image": "/illustrations/common/list.png",
          "content": "# [ ]（角かっこ）で取り出す\n\nスライスの中身を取り出すときは、`[番号]` で何番目かを指定します。\n\n**大事なルール：番号は「0」からスタート！**\n- 1番目のデータ → `[0]`\n- 2番目のデータ → `[1]`\n- 3番目のデータ → `[2]`\n\n**コード例：**\n```go\nitems := []int{100, 200, 300}\n//            ↑0番  ↑1番  ↑2番\nfmt.Println(items[0]) // 100 が表示されます\nfmt.Println(items[1]) // 200 が表示されます\n```\n\nプログラミングでは「0から数える」のが世界共通のルールです！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    // インデックス 1 で2番目を取得\n    fmt.Println(nums[1])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{10, 20}\n    // インデックス 1 で2番目を取得\n    fmt.Println(nums[___])\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    nums := []int{10, 20}",
        "    // インデックス 1 で2番目を取得",
        "    fmt.Println(nums[1])",
        "}"
      ],
      "lineHints": [null, null, null, null, null, "2番目のデータの番号は 1 です。 `nums[1]` と入力してください。", null],
      "candidates": {
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "点数によって表示するメッセージを変えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに「判断」させよう\n\n**条件分岐（じょうけんぶんき）** は、プログラムに「もし〜なら、〇〇する」という判断をさせる仕組みです。\n\n**身近な例：**\n- もし雨なら → 傘を持っていく\n- もしテストで80点以上なら → 「すごい！」と言う\n- もしゲームでHPが0なら → ゲームオーバー\n\nこのように、状況によって動きを変えることで、プログラムが「賢く」なります！"
        },
        {
          "title": "if文（イフぶん）を使おう",
          "image": "/illustrations/common/if.png",
          "content": "# 「もし〜なら」を書く方法\n\n`if`（イフ）は英語で「もし」という意味です。Go言語では次のように書きます。\n\n**書き方：**\n```go\nif 条件 {\n    やりたいこと\n}\n```\n\n**コード例：**\n```go\nif score > 80 {\n    fmt.Println(\"すごい！\")\n}\n```\n\n**ポイント：**\n- `if` のあとに条件を書く\n- `{ }` の中に「条件が正しいときにやること」を書く\n- Go言語では条件を `( )` で囲まなくてOK！\n\n`>` は「より大きい」という意味の記号（比較演算子・ひかくえんざんし）です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 100\n    // > で比較する\n    if score > 80 {\n        // Great と表示する\n        fmt.Println(\"Great\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // scoreに100を入れる\n    score := ___\n    // > で比較する\n    if score ___ 80 {\n        // Great と表示する\n        fmt.Println(\"___\" )\n    }\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    // scoreに100を入れる",
        "    score := 100",
        "    // > で比較する",
        "    if score > 80 {",
        "        // Great と表示する",
        "        fmt.Println(\"Great\")",
        "    }",
        "}"
      ],
      "lineHints": [null, null, null, null, "変数を宣言し、同時に数値を代入します（型推論を使用）。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "フォーマットパッケージを使って文字列を出力します。", null, null],
      "candidates": {
        "operators": [
          ">"
        ],
        "strings": [
          "Great"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）で「そうでなければ」\n\n`else`（エルス）は英語で「そうでなければ」という意味です。`if` の条件に当てはまらなかったときの動きを決められます。\n\n**身近な例：**\n- もし晴れなら → 公園に行く\n- **そうでなければ** → 家で遊ぶ\n\nこのように `if` と `else` をセットで使うと、プログラムの道を「2つに分ける」ことができます。どちらかの道を必ず通ります！"
        },
        {
          "title": "else の書きかた",
          "image": "/illustrations/common/if.png",
          "content": "# } と同じ行に書くのがルール\n\nGo言語では、`else` の書き方に特別なルールがあります。\n\n**正しい書き方：**\n```go\nif hour < 12 {\n    fmt.Println(\"午前\")\n} else {\n    fmt.Println(\"午後\")\n}\n```\n\n**ポイント：**\n- `}` と `else` と `{` は **同じ行** に書く\n- `} else {` とつなげて書くのがGo言語のルール\n\n**やってること：**\n1. hour（時間）が12より小さいかチェック\n2. 小さければ「午前」と表示\n3. そうでなければ「午後」と表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    x := 5\n    if x > 10 {\n        fmt.Println(\"Big\")\n    // else で「そうでなければ」\n    } else {\n        fmt.Println(\"Small\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // xに5を入れる\n    x := ___\n    // 10より大きいかを比較する演算子\n    if x ___ 10 {\n        // 10より大きいときのメッセージ（'Big'）\n        fmt.Println(\"___\")\n    // else で「そうでなければ」\n    } ___ {\n        // それ以外のメッセージ（'Small'）\n        fmt.Println(\"___\")\n    }\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    // xに5を入れる",
        "    x := 5",
        "    // 10より大きいかを比較する演算子",
        "    if x > 10 {",
        "        // 10より大きいときのメッセージ（'Big'）",
        "        fmt.Println(\"Big\")",
        "    // else で「そうでなければ」",
        "    } else {",
        "        // それ以外のメッセージ（'Small'）",
        "        fmt.Println(\"Small\")",
        "    }",
        "}"
      ],
      "lineHints": [null, null, null, null, "変数を宣言し、同時に数値を代入します（型推論を使用）。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, "フォーマットパッケージを使って文字列を出力します。", null, "もし条件が満たされなかった場合に実行する処理を記述します。", null, "フォーマットパッケージを使って文字列を出力します。", null, null],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる「&&（かつ）」と「||（または）」を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "image": "/illustrations/common/if.png",
          "content": "# 論理演算子（ろんりえんざんし）とは？\n\n2つ以上の条件を組み合わせたいときに使う特別な記号です。\n\n**2つの記号：**\n- `&&`（アンドアンド）: 「かつ」＝ **両方とも** 正しいとき\n- `||`（オアオア）: 「または」＝ **どちらか1つでも** 正しいとき\n\n**身近な例：**\n- 遊園地の乗り物：「18歳以上 **かつ** チケットを持っている」人だけ乗れる\n- おやつタイム：「宿題が終わった **または** 手伝いをした」らおやつOK"
        },
        {
          "title": "&&（かつ）と ||（または）の使い分け",
          "image": "/illustrations/common/if.png",
          "content": "# どっちを使う？\n\n**&&（かつ）：両方とも正しいとき**\n```go\nif score >= 70 && bonus > 0 {\n    // 70点以上「かつ」ボーナスあり\n    fmt.Println(\"合格！\")\n}\n```\n\n**||（または）：どちらか1つでも正しいとき**\n```go\nif isHoliday || isWeekend {\n    // 祝日「または」週末\n    fmt.Println(\"お休み！\")\n}\n```\n\n**覚え方：**\n- `&&` → 「A **と** B」両方必要\n- `||` → 「A **か** B」どっちかでOK"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 80\n    bonus := 10\n    // && で両方の条件をチェック\n    if score >= 70 && bonus > 0 {\n        fmt.Println(\"Bonus Pass\")\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    score := 80\n    bonus := 10\n    // && で両方の条件をチェック\n    if score >= 70 ___ bonus > 0 {\n        fmt.Println(\"Bonus Pass\")\n    }\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func main() {",
        "    score := 80",
        "    bonus := 10",
        "    // && で両方の条件をチェック",
        "    if score >= 70 && bonus > 0 {",
        "        fmt.Println(\"Bonus Pass\")",
        "    }",
        "}"
      ],
      "lineHints": [null, null, null, null, null, null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, null, null],
      "candidates": {
        "operators": [
          "&&",
          "||",
          "&",
          "|"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Bonus Pass\n"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "range（レンジ）という機能を使って、スライスの中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 11,
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 同じことを何度もやりたい！\n\n**ループ（繰り返し）** は、同じ作業を何度も自動でやってくれる便利な仕組みです。\n\n**たとえば：**\n- クラス全員の名前を順番に呼ぶ\n- 買い物リストの商品を1つずつ表示\n- ゲームで敵キャラ全員を動かす\n\n人間がやると大変ですが、コンピュータは「繰り返し」が大得意！1000回でも10000回でも、文句を言わずにやってくれます。"
        },
        {
          "title": "range（レンジ）で全部取り出す",
          "image": "/illustrations/common/loop.png",
          "content": "# スライスの中身を順番に処理\n\n`range`（レンジ）を使うと、スライスの中身を最初から最後まで **1つずつ順番に** 取り出せます。\n\n**コード例：**\n```go\ncolors := []string{\"赤\", \"青\", \"黄\"}\nfor _, c := range colors {\n    fmt.Println(c)\n}\n// 赤、青、黄 の順に表示される\n```\n\n**コードの読み方：**\n- `for` → 繰り返しスタート\n- `_` → 番号は使わない（無視する）\n- `c` → 取り出したデータを入れる変数\n- `range colors` → colorsの中身を順番に\n\n`_`（アンダースコア）は「使わないよ」という意味の特別な記号です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    // range で全要素をループ\n    for _, n := range nums {\n        fmt.Println(n)\n    }\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    nums := []int{1, 2, 3}\n    // range で全要素をループ\n    for _, n := ___ nums {\n        fmt.Println(n)\n    }\n}",
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
      "lineHints": [null, null, null, null, null, "範囲をあらわす `range` を入力しましょう。", null, null, null],
      "candidates": {
        "keywords": [
          "range"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "名前で探しましょう「じしょ」",
      "description": "Map（辞書）を使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 12,
      "tutorialSlides": [
        {
          "title": "辞書（じしょ）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# 名前で検索できるしくみ\n\n**Map（マップ）** は、「名前」と「データ」をセットにして保存できる便利な仕組みです。本物の辞書のように使えます。\n\n**たとえば電話帳：**\n- 「たろう」→「090-1234-5678」\n- 「はなこ」→「080-9876-5432」\n\nスライスは「番号」で探しますが、Mapは「名前（キー）」で探せます。友だちの名前を言えば、すぐに電話番号がわかる！"
        },
        {
          "title": "Mapの使いかた",
          "image": "/illustrations/common/dict.png",
          "content": "# 名前で取り出す\n\nMapでは「名前（キー）」と「データ（値）」をセットで保存します。取り出すときは名前を指定するだけ！\n\n**コード例：**\n```go\n// りんご→あか、バナナ→きいろ のペアを作る\ncolors := map[string]string{\n    \"りんご\": \"あか\",\n    \"バナナ\": \"きいろ\",\n}\nfmt.Println(colors[\"りんご\"])  // あか が表示される\n```\n\n**書き方のポイント：**\n- `map[キーの種類]値の種類` で型を決める\n- `{\"キー\": \"値\"}` でデータを入れる\n- `マップ名[\"キー\"]` で取り出す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc main() {\n    // string をキーの型に指定\n    scores := map[string]int{\"Math\": 90}\n    // Math をキーに指定\n    fmt.Println(scores[\"Math\"])\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc main() {\n    // string をキーの型に指定\n    scores := map[___]int{\"Math\": 90}\n    // 'Math' をキーに指定\n    fmt.Println(scores[\"___\"])\n}",
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
      "lineHints": [null, null, null, null, "名前（キー）の種類として `string` と入力しましょう。", null, "\"Math\" という名前を指定してデータを取り出します。", null],
      "candidates": {
        "strings": [
          "string",
          "Math"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "90\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "一連の手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 13,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# 手順をまとめて名前をつける\n\n**関数（かんすう）** は、いくつかの命令をひとまとめにして名前をつけたものです。\n\n**身近な例：料理のレシピ**\n- 「カレーを作る」と言えば、具体的な手順がわかる\n- いちいち「野菜を切って、炒めて、煮込んで...」と言わなくていい\n\n**プログラミングでも同じ！**\n- 関数に名前をつけておけば、あとは名前を呼ぶだけで実行できる\n- 同じ処理を何度も書かなくてすむ\n\n一度作った関数は、何回でも使い回せます！"
        },
        {
          "title": "関数の作りかた",
          "image": "/illustrations/common/function.png",
          "content": "# func（ファンク）で関数を作る\n\n`func`（ファンク）というキーワードの後に名前をつけて、関数を作ります。\n\n**コード例：**\n```go\n// sayHello という関数を作る\nfunc sayHello() {\n    fmt.Println(\"こんにちは\")\n}\n\nfunc main() {\n    sayHello()  // 関数を呼び出す\n    sayHello()  // 何回でも使える！\n}\n```\n\n**書き方：**\n1. `func 関数名()` で関数を定義\n2. `{ }` の中にやりたい処理を書く\n3. 使うときは `関数名()` で呼び出す\n\n`()` は「関数を呼び出すよ」という合図です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "package main\nimport \"fmt\"\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\nfunc main() {\n    // greet 関数を呼び出す\n    greet()\n}",
      "holeyCode": "package main\nimport \"fmt\"\nfunc greet() {\n    fmt.Println(\"Hello\")\n}\nfunc main() {\n    // greet 関数を呼び出す\n    ___()\n}",
      "correctLines": [
        "package main",
        "import \"fmt\"",
        "func greet() {",
        "    fmt.Println(\"Hello\")",
        "}",
        "func main() {",
        "    // greet 関数を呼び出す",
        "    greet()",
        "}"
      ],
      "lineHints": [null, null, null, null, null, null, null, "関数（greet）を呼び出して実行します。", null],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}