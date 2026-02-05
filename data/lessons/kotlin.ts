export const kotlinData = {
  "language": "kotlin",
  "lessonId": "kotlin-1",
  "lessonTitle": "Kotlin (コトリン) に挑戦！",
  "lessonDescription": "Android（アンドロイド）スマホのアプリ作りなどで大人気の言葉「Kotlin（コトリン）」のきほんを学びましょう。新しくて使いやすい機能がたくさんあります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
        "title": "画面にメッセージを出しましょう",
        "description": "Kotlinを使って画面に「こんにちは」と表示させてみましょう。println（プリント・ライン）という関数を使います。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "Kotlin（コトリン）とは？",
            "content": "# Android（アンドロイド）アプリを作る言葉\\n\\n**Kotlin（コトリン）** は、Android（アンドロイド）スマホのアプリを作るための **プログラミング言語（げんご）** です。\\n\\nGoogleという会社が「Androidアプリを作るならKotlinがおすすめ！」と言っているほど、人気のある言葉です。\\n\\n短くてわかりやすいコードが書けるのが特徴（とくちょう）です。"
          },
          {
            "title": "画面に文字を出すには？",
            "content": "# println（プリント・ライン）という命令\\n\\nプログラムから画面に文字を出すには、**println（プリント・ライン）** という命令を使います。\\n\\n「print」は「印刷する」、「ln」は「line（行）」の略です。文字を表示して、次の行に移動します。\\n\\n文字は `\" \"`（ダブルクォート）で囲みます。これは「ここからここまでが文字だよ」という目印です。"
          },
          {
            "title": "println を使いましょう",
            "content": "# 関数（かんすう）とは？\\n\\n`println()` のように、何かの仕事をしてくれる命令のまとまりを **関数（かんすう）** と呼びます。\\n\\n自動販売機のボタンを押すとジュースが出てくるように、`println()` を使うと文字が画面に出ます。\\n\\n**書き方：**\\n```kotlin\\nprintln(\"表示したい文字\")\\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n`println()` を使って `Hello, World!` と画面に表示させましょう。\\n\\nこれはプログラミングを始めるときの「おまじない」のようなもので、世界中のプログラマーが最初に書くコードです。\\n\\n**入力するコード：**\\n```kotlin\\nprintln(\"Hello, World!\")\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// println で出力する\\nprintln(\"Hello, World!\")",
        "holeyCode": "// println で出力する\\n___(\"Hello, World!\")",
        "correctLines": [
          "// println で出力する",
          "println(\"Hello, World!\")"
        ],
        "lineHints": [
          null,
          "関数は println です。 L ではなく 小文字の l（エル）です。"
        ],
        "candidates": {
          "functions": [
            "println"
          ],
          "strings": [
            "\"Hello, World!\""
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, World!\\n"
          }
        ]
      },
    {
        "title": "便利な「はこ」変数（へんすう）",
        "description": "データに名前をつけて保存できる「変数（へんすう）」を使ってみましょう。",
        "difficulty": "easy",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "変数（へんすう）とは？",
            "content": "# データを保存する「はこ」\\n\\nプログラムでは、数字や文字をしまっておく「はこ」を作れます。この「はこ」を **変数（へんすう）** と呼びます。\\n\\n本棚に本をしまうように、変数にはデータをしまえます。\\n\\nKotlinでは `val`（バル）を使って変数を作ります。\\n\\n```kotlin\\nval x = 10\\nprintln(x)  // 10と表示される\\n```"
          },
          {
            "title": "val と var の違い",
            "content": "# 中身を変えられる？変えられない？\\n\\nKotlinには2種類の変数があります。\\n\\n- **val（バル）**: 中身を変えられない変数（一度入れたら固定）\\n- **var（バー）**: 中身を後から変えられる変数\\n\\n金庫のように一度しまったら変えられないのが `val`、引き出しのように出し入れ自由なのが `var` です。\\n\\n今回は `val` を使って練習しましょう。"
          },
          {
            "title": "計算の記号",
            "content": "# 四則演算（しそくえんざん）\\n\\nプログラムでも算数と同じように計算ができます。\\n\\n- **+** : たし算（例：5 + 3 = 8）\\n- **-** : ひき算（例：5 - 3 = 2）\\n- **\\*** : かけ算（例：5 * 3 = 15）\\n- **/** : わり算（例：6 / 3 = 2）\\n\\n```kotlin\\nval a = 10\\nval b = 5\\nprintln(a + b)  // 15と表示される\\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n2つの変数を作って、たし算をしてみましょう。\\n\\n1. `x` という変数に `10` を入れる\\n2. `y` という変数に `5` を入れる\\n3. `x + y` の結果を画面に表示する\\n\\n答えは `15` になるはずです。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// x に 10 を入れる\\nval x = 10\\n// y に 5 を入れる\\nval y = 5\\n// + でたし算する\\nprintln(x + y)",
        "holeyCode": "// x に 10 を入れる\\nval x = ___\\n// y に 5 を入れる\\nval y = ___\\n// + でたし算する\\n___(x + y)",
        "correctLines": [
          "// x に 10 を入れる",
          "val x = 10",
          "// y に 5 を入れる",
          "val y = 5",
          "// + でたし算する",
          "println(x + y)"
        ],
        "lineHints": [
          null,
          "10 と入力しましょう。",
          null,
          "5 と入力しましょう。",
          null,
          "たし算なので + を使います。"
        ],
        "candidates": {
          "numbers": [
            "10",
            "5"
          ],
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
        "title": "剰余演算子（%）",
        "description": "割り算の「あまり」を求める「%」（パーセント）演算子を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "あまりを求める演算子（えんざんし）",
            "content": "# 剰余演算子（じょうよえんざんし）とは？\\n\\n**%（パーセント）** は割り算の **あまり** を計算する記号です。\\n\\n「剰余（じょうよ）」は難しい言葉ですが、「あまり」のことです。\\n\\n例えば、10このアメを3人で分けると、1人3こずつもらえて、1こあまりますよね。\\n\\n`10 % 3` は、この「1こあまる」の **1** を計算してくれます。"
          },
          {
            "title": "% の使い方",
            "content": "# コードで見てみよう\\n\\n```kotlin\\nprintln(10 % 3)  // 1（10÷3=3あまり1）\\nprintln(8 % 4)   // 0（8÷4=2あまり0、割り切れる）\\nprintln(7 % 2)   // 1（7÷2=3あまり1）\\n```\\n\\n**あまりが0** のときは、割り切れたということです。\\n\\n偶数（ぐうすう）か奇数（きすう）かを調べるときにも便利です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n10を3で割ったあまりを画面に表示しましょう。\\n\\n答えは `1` になるはずです。\\n\\n**ヒント：** `%` 記号を使います。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 10 を 3 で割ったあまりを出力する\\nprintln(10 % 3)",
        "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___(10 % 3)",
        "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "println(10 % 3)"
        ],
        "lineHints": [
          null,
          "あまりを求める `%` 演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["println"]
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
        "description": "変数の値を手軽に増やしたり減らしたりする「+=」「-=」を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "累算代入演算子（るいさんだいにゅうえんざんし）とは？",
            "content": "# 値を増やしたり減らしたりする便利な記号\\n\\n**累算代入演算子（るいさんだいにゅうえんざんし）** は、変数の値を増やしたり減らしたりする便利な記号です。\\n\\n- **+=** : 今の値に足す（プラスイコール）\\n- **-=** : 今の値から引く（マイナスイコール）\\n\\n貯金箱にお金を入れたり出したりするイメージです。"
          },
          {
            "title": "var を使って変えられる変数を作る",
            "content": "# var（バー）で変更できる変数を作る\\n\\n値を変えるには、`val` ではなく **var（バー）** を使います。\\n\\n```kotlin\\nvar score = 100   // スコアは100点\\nscore += 10       // 10点プラス！\\n// scoreは110になる\\n```\\n\\n`score += 10` は `score = score + 10` と同じ意味ですが、短く書けて便利です。"
          },
          {
            "title": "ゲームのHP（体力）で考えてみよう",
            "content": "# 実際に使ってみよう\\n\\nゲームのキャラクターのHP（体力）を想像してください。\\n\\n```kotlin\\nvar hp = 100   // 最初の体力は100\\nhp += 20       // 回復して20増える → 120\\nhp -= 50       // ダメージで50減る → 70\\n```\\n\\n最終的なHPは **70** になります。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n1. `var hp = 100` でHPを100にする\\n2. `+=` を使って20を足す\\n3. `-=` を使って50を引く\\n4. 最後のHPを表示する\\n\\n答えは `70` になるはずです。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// var で変更可能な変数を作る\\nvar hp = 100\\n// += で 20 を足す\\nhp += 20\\n// -= で 50 を引く\\nhp -= 50\\nprintln(hp)",
        "holeyCode": "// var で変更可能な変数を作る\\nvar ___ = 100\\n// += で 20 を足す\\nhp += ___\\n// -= で 50 を引く\\nhp -= ___\\nprintln(___)",
        "correctLines": [
          "// var で変更可能な変数を作る",
          "var hp = 100",
          "// += で 20 を足す",
          "hp += 20",
          "// -= で 50 を引く",
          "hp -= 50",
          "println(hp)"
        ],
        "lineHints": [
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["hp", "20", "50"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
        "title": "「もし〜なら」で分けましょう",
        "description": "条件によって動きを変える if文を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "条件分岐（じょうけんぶんき）とは？",
            "content": "# プログラムに判断させよう\\n\\n**条件分岐（じょうけんぶんき）** とは、「もし〜なら、こうする」という判断をプログラムにさせることです。\\n\\n例えば、信号が青なら渡る、赤なら止まる、というように状況によって行動を変えますよね。\\n\\nプログラムも同じように、条件によって動きを変えられます。"
          },
          {
            "title": "if（イフ）文の使い方",
            "content": "# if は「もし」という意味\\n\\n**if（イフ）** は英語で「もし」という意味です。\\n\\n```kotlin\\nif (score > 80) {\\n    println(\"合格！\")\\n}\\n```\\n\\nこのコードは「もしスコアが80より大きいなら、『合格！』と表示する」という意味です。\\n\\nKotlinでは条件を `( )` で囲みます。"
          },
          {
            "title": "比較の記号",
            "content": "# 大きい？小さい？を比べる記号\\n\\n- **>** : より大きい（例：100 > 80 は「100は80より大きい」）\\n- **<** : より小さい（例：50 < 80 は「50は80より小さい」）\\n- **>=** : 以上（例：80 >= 80 は「80は80以上」）\\n- **<=** : 以下（例：70 <= 80 は「70は80以下」）\\n- **==** : 等しい（例：10 == 10 は「10は10と等しい」）"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\nスコアが80点より大きいときに「Great!」と表示するプログラムを作りましょう。\\n\\n1. `score` に `100` を入れる\\n2. `if` を使って `score > 80` かチェックする\\n3. 条件が合えば「Great!」と表示する\\n\\nスコアは100点なので、「Great!」と表示されます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// score に 100 を入れる\\nval score = 100\\n// > で比較する\\nif (score > 80) {\\n    println(\"Great!\")\\n}",
        "holeyCode": "// score に 100 を入れる\\nval score = ___\\n// > で比較する\\nif (score ___ 80) {\\n    ___(\"Great!\")\\n___",
        "correctLines": [
          "// score に 100 を入れる",
          "val score = 100",
          "// > で比較する",
          "if (score > 80) {",
          "    println(\"Great!\")",
          "}"
        ],
        "lineHints": [
          null,
          "100 と入力しましょう。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          null
        ],
        "candidates": {
          "numbers": [
            "100"
          ],
          "operators": [
            ">",
            "<",
            ">=",
            "<="
          ],
          "others": ["println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Great!\\n"
          }
        ]
      },
    {
        "title": "論理演算子（&&、||）",
        "description": "複数の条件を組み合わせる「&&（かつ）」と「||（または）」を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "論理演算子（ろんりえんざんし）とは？",
            "content": "# 複数の条件を組み合わせよう\\n\\n**論理演算子（ろんりえんざんし）** を使うと、2つ以上の条件を組み合わせられます。\\n\\n例えば「晴れていて、かつ、休みの日ならピクニックに行く」のように、複数の条件を同時に確認したいときがありますよね。"
          },
          {
            "title": "&& と || の意味",
            "content": "# 「かつ」と「または」\\n\\n- **&&（アンド）**: 「かつ」という意味。両方の条件が成り立つとき\\n- **||（オア）**: 「または」という意味。どちらかの条件が成り立つとき\\n\\n**例えで考えると：**\\n- 「晴れ **かつ** 休み」→ 両方そろわないとダメ\\n- 「雨 **または** 雪」→ どちらかあればOK"
          },
          {
            "title": "コードで見てみよう",
            "content": "# && を使った例\\n\\n```kotlin\\nif (age >= 18 && hasTicket) {\\n    println(\"入場できます\")\\n}\\n```\\n\\n「18歳以上 **かつ** チケットを持っている」の両方が成り立つときだけ、入場できます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\nスコアが70以上、かつボーナスが0より大きいときに「Bonus Pass」と表示しましょう。\\n\\n- `score = 80`（70以上なのでOK）\\n- `bonus = 10`（0より大きいのでOK）\\n\\n両方の条件を満たしているので、「Bonus Pass」と表示されます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "val score = 80\\nval bonus = 10\\n// && で両方の条件をチェック\\nif (score >= 70 && bonus > 0) {\\n    println(\"Bonus Pass\")\\n}",
        "holeyCode": "val score = ___\\nval bonus = ___\\n// && で両方の条件をチェック\\nif (score >= ___ && bonus > 0) {\\n    ___(\"Bonus Pass\")\\n___",
        "correctLines": [
          "val score = 80",
          "val bonus = 10",
          "// && で両方の条件をチェック",
          "if (score >= 70 && bonus > 0) {",
          "    println(\"Bonus Pass\")",
          "}"
        ],
        "lineHints": [
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["80", "10", "70", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Bonus Pass\\n"
          }
        ]
      },
    {
        "title": "たくさんのデータをまとめましょう「リスト」",
        "description": "「リスト」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
        "difficulty": "easy",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "リストとは？",
            "content": "# たくさんのデータを入れる「長いはこ」\\n\\n**リスト** は、たくさんのデータを順番に並べて保存できる「長いはこ」です。\\n\\nロッカーのように、1つ1つの場所にデータをしまうイメージです。\\n\\n買い物リストや、クラスの名簿など、複数のデータをまとめて管理するのに便利です。"
          },
          {
            "title": "listOf でリストを作る",
            "content": "# listOf() で作成\\n\\n**listOf()** は、リストを作るための関数です。カッコの中にデータをカンマ `,` で区切って並べます。\\n\\n```kotlin\\nval fruits = listOf(\"りんご\", \"バナナ\", \"みかん\")\\n```\\n\\nこれで `fruits` という名前のリストに、3つのくだものの名前が入りました。"
          },
          {
            "title": "リストの番号は「0」から始まる！",
            "content": "# インデックス（番号）のルール\\n\\nリストの中身を取り出すときは、番号を指定します。\\n\\n**重要：** プログラミングでは、最初のデータは **0番** から数えます！\\n\\n```kotlin\\nval fruits = listOf(\"りんご\", \"バナナ\", \"みかん\")\\n//                    0番       1番        2番\\nprintln(fruits[0])  // りんご\\nprintln(fruits[1])  // バナナ\\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\n色のリストを作って、2番目のデータを取り出しましょう。\\n\\n1. `colors` というリストに「あか」「あお」を入れる\\n2. 2番目のデータ（インデックス1）を表示する\\n\\n答えは「あお」になります。\\n\\n**注意：** 2番目のデータは `colors[1]` です（0番から数えるから）。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// colors というリストを作る（'あか', 'あお'の順）\\nval colors = listOf(\"あか\", \"あお\")\\n// 2番目のデータ（インデックス1）を出す\\nprintln(colors[1])",
        "holeyCode": "// colors というリストを作る（'あか', 'あお'の順）\\nval colors = listOf(\"___\", \"あお\")\\n// 2番目のデータ（インデックス1）を出す\\n___(colors[1])",
        "correctLines": [
          "// colors というリストを作る（'あか', 'あお'の順）",
          "val colors = listOf(\"あか\", \"あお\")",
          "// 2番目のデータ（インデックス1）を出す",
          "println(colors[1])"
        ],
        "lineHints": [
          null,
          "listOf(\"あか\", \"あお\") と入力しましょう。",
          null,
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "println",
            "listOf"
          ],
          "strings": [
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
        "title": "名前で引き出す「辞書」",
        "description": "「辞書」を使うと、名前をつけてデータを保存し、その名前で取り出せます。",
        "difficulty": "easy",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "辞書（Map）とは？",
            "content": "# 名前で探せる「しおり付きノート」\\n\\n**マップ（Map）** は、「名前」と「データ」をペアにして保存できる仕組みです。\\n\\n本物の辞書のように、「りんご」と調べれば「赤い果物」と出てくるイメージです。\\n\\n- **キー（名前）**: 探すときに使う名前\\n- **バリュー（値）**: 実際のデータ"
          },
          {
            "title": "mapOf でマップを作る",
            "content": "# キー to 値 の形で書く\\n\\n**mapOf()** で辞書を作ります。`キー to 値` の形で書きます。\\n\\n```kotlin\\nval fruits = mapOf(\"りんご\" to \"あか\", \"バナナ\" to \"きいろ\")\\n```\\n\\n**to** は「〜は〜です」という意味のつなぎ言葉です。\\n\\nこれで「りんご」を調べると「あか」が出てきます。"
          },
          {
            "title": "辞書から取り出す方法",
            "content": "# [ ] でキーを指定\\n\\n辞書から値を取り出すには `[キー]` を使います。\\n\\n```kotlin\\nval fruits = mapOf(\"りんご\" to \"あか\")\\nprintln(fruits[\"りんご\"])  // あか\\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標（もくひょう）\\n\\nくだものの辞書を作って、色を調べましょう。\\n\\n1. `colors` というマップを作る\\n2. キーは「みかん」、値は「オレンジ」\\n3. 「みかん」の色を表示する\\n\\n答えは「オレンジ」になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nval colors = mapOf(\"みかん\" to \"オレンジ\")\\n// 中身を出す\\nprintln(colors[\"みかん\"])",
        "holeyCode": "// 辞書を作る（キーは'みかん'、値は'オレンジ'）\\nval colors = mapOf(\"___\" to \"オレンジ\")\\n// 中身を出す\\n___(colors[\"みかん\"])",
        "correctLines": [
          "// 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "val colors = mapOf(\"みかん\" to \"オレンジ\")",
          "// 中身を出す",
          "println(colors[\"みかん\"])"
        ],
        "lineHints": [
          null,
          "mapOf(\"みかん\" to \"オレンジ\") と入力しましょう。",
          null,
          "colors[\"みかん\"] と入力しましょう。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "println",
            "mapOf"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      }
  ]
};