export const csharpData = {
  "language": "csharp",
  "lessonId": "csharp-1",
  "lessonTitle": "C# (シーシャープ) に挑戦！",
  "lessonDescription": "Microsoftが開発した、多機能で強力な言葉「C#（シーシャープ）」のきほんを学びましょう。Unityを使ったゲーム作りにも欠かせない言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "C#へようこそ！",
      "content": "**C#（シーシャープ）** は、Microsoft（マイクロソフト）が2000年に作ったプログラミング言語です。\\n\\nUnityでゲームを作ったり、Windowsアプリを作ったりするのに使います。\\n\\nJavaに似ていて、覚えやすい言語です。"
    },
    {
      "title": "画面に文字を出す",
      "content": "C#で画面に文字を出すには `Console.WriteLine` を使います。\\n\\n```csharp\\nConsole.WriteLine(\\\"Hello, C#!\\\");\\n```\\n\\n`Console` はコンソール（画面）を操作するクラスです。"
    },
    {
      "title": "変数を使う",
      "content": "C#では型を指定して変数を作ります。\\n\\n```csharp\\nstring name = \\\"太郎\\\";  // 文字列\\nint age = 10;           // 整数\\ndouble price = 99.9;    // 小数\\n```\\n\\n`var` を使うと型を自動で決めてくれます。"
    },
    {
      "title": "計算する",
      "content": "C#では数字を計算できます。\\n\\n```csharp\\nint a = 5;\\nint b = 3;\\nConsole.WriteLine(a + b);  // 8\\nConsole.WriteLine(10 % 3); // 1（あまり）\\n```\\n\\n`//` から後ろはコメントです。"
    },
    {
      "title": "条件分岐 if文",
      "content": "「もし〜なら」という条件で処理を分けられます。\\n\\n```csharp\\nint score = 85;\\nif (score > 80)\\n{\\n    Console.WriteLine(\\\"すごい！\\\");\\n}\\nelse\\n{\\n    Console.WriteLine(\\\"がんばろう\\\");\\n}\\n```"
    },
    {
      "title": "配列とDictionary",
      "content": "複数のデータをまとめて扱えます。\\n\\n**配列**:\\n```csharp\\nstring[] colors = {\\\"赤\\\", \\\"青\\\"};\\nConsole.WriteLine(colors[0]);\\n```\\n\\n**Dictionary**（辞書）:\\n```csharp\\nvar scores = new Dictionary<string, int>();\\nscores[\\\"Math\\\"] = 90;\\n```"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "プログラムの基本！画面にメッセージを表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "C#（シーシャープ）とは？",
          "content": "# ゲーム作りにも使われるプログラミング言語\\n\\nC#（シーシャープ）は、Microsoft（マイクロソフト）という大きな会社が作ったプログラミング言語です。\\n\\n**C#でできること：**\\n- パソコンのアプリを作る\\n- Unity（ユニティ）というツールでゲームを作る\\n- ウェブサイトを作る\\n\\nC#は書き方のルールがしっかりしているので、間違いの少ない安全なプログラムが作れます。まるでレゴブロックのように、決まったパーツを組み合わせてプログラムを作っていきます。"
        },
        {
          "title": "画面に文字を出すには？",
          "content": "# Console.WriteLine（コンソール・ライトライン）\\n\\n画面に文字を出したいときは、`Console.WriteLine()` という命令を使います。\\n\\n**Console** は「画面」、**WriteLine** は「1行書く」という意味です。つまり「画面に1行書いてね」とコンピュータにお願いしているんです。\\n\\n**大事なルール：**\\nC#では、文の最後に必ず `;`（セミコロン）をつけます。これは日本語の「。」と同じ役割です。忘れないようにしましょう！\\n\\n**コード例（文字を出すプログラム）：**\\n```csharp\\nConsole.WriteLine(\"ヤッホー！\");\\n```\\n=> ヤッホー！"
        }
      ],
      "correctCode": "// ライブラリを読み込む\\nusing System;\\n\\n// Programクラスを定義\\nclass Program {\\n    // メソッドを定義\\n    static void Main() {\\n        // 画面にメッセージを出す関数\\n        Console.WriteLine(\"Hello, C#!\");\\n    // ブロックを閉じる\\n    }\\n// ブロックを閉じる\\n}",
      "holeyCode": "// ライブラリを読み込む\\nusing ___;\\n___\\n// Programクラスを定義\\nclass ___ {\\n    // メソッドを定義\\n    static void ___() {\\n        // 画面にメッセージを出す関数\\n        ___.___(\"___\");\\n    // ブロックを閉じる\\n    ___\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ライブラリを読み込む",
          "using System;",
          "",
          "// Programクラスを定義",
          "class Program {",
          "    // メソッドを定義",
          "    static void Main() {",
          "        // 画面にメッセージを出す関数",
          "        Console.WriteLine(\\\"Hello, C#!\\\");",
          "    // ブロックを閉じる",
          "    }",
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
          ""
        ],
        "candidates": {
          "functions": [
            "Console.WriteLine"
          ],
          "strings": [
            "Hello, C#!"
          ],
          "others": ["System", "Program", "Main", "WriteLine", "}", "Console", "Hello, C#!"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, C#!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "変数とは？",
          "content": "# データを保存する「はこ」\\n\\nプログラムでは、数字や文字をしまっておく「はこ」を作ることができます。これを**変数**と呼びます。\\n\\n**身近な例え：**\\n変数は、おもちゃ箱のようなものです。おもちゃ箱に「つみき」と名前をつけておけば、どこにつみきがあるかすぐにわかりますよね。プログラムでも同じように、データに名前をつけて保存します。\\n\\n**ポイント：**\\n- 変数には好きな名前をつけられる\\n- 中身はあとから変更できる\\n- 何が入っているかわかりやすい名前をつけよう"
        },
        {
          "title": "はこに「ラベル」を貼ろう",
          "content": "# string（ストリング）ラベル\\n\\nC#では、変数を作るときに「このはこには何を入れますか？」と決める必要があります。これを**型**と呼びます。\\n\\n文字を入れたいときは、`string`（ストリング）という型を使います。stringは英語で「ひも」という意味で、文字がひものようにつながっているイメージです。\\n\\n**コード例（文字を保存して表示）：**\\n```csharp\\nstring name = \"C#\";\\nConsole.WriteLine(name);\\n```\\n=> C#\\n\\n**解説：**\\n1. `string name` で「文字を入れるはこ」を作る\\n2. `= \"C#\"` で「C#」という文字を入れる\\n3. `Console.WriteLine(name)` ではこの中身を表示"
        }
      ],
      "correctCode": "// nameというはこに \"CSharp\" を入れる\\nstring name = \"CSharp\";\\n// はこの中身を画面に出す\\nConsole.WriteLine(name);",
      "holeyCode": "// nameというはこに \"CSharp\" を入れる\\n___ ___ = \"___\";\\n// はこの中身を画面に出す\\n___.___(___);",
      "correctLines": [
          "// nameというはこに \"CSharp\" を入れる",
          "string name = \"CSharp\";",
          "// はこの中身を画面に出す",
          "Console.WriteLine(name);"
        ],
      "lineHints": [
          null,
          "string型の変数nameに文字列\"CSharp\"を代入します。",
          null,
          "ConsoleクラスのWriteLineメソッドで変数nameの内容を出力します。"
        ],
        "candidates": {
          "types": [
            "string",
            "int"
          ],
          "variables": [
            "name"
          ],
          "strings": [
            "CSharp"
          ],
          "others": ["Console", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "CSharp\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算しましょう",
      "description": "プログラムで数値を計算する方法を学びます",
      "tutorialSlides": [
        {
          "title": "数値を扱う",
          "content": "# int（イント）ラベル\\n\\n数字（整数：せいすう）を扱いたいときは、**int**（イント）という型を使います。intは「integer（インテジャー）」の略で、「整数」という意味です。\\n\\n**整数とは？**\\n1, 2, 3, 10, 100のように、小数点（.）がない数字のことです。\\n\\n**型の使い分け：**\\n- 文字を入れるはこ → `string`\\n- 数字を入れるはこ → `int`\\n\\nこのように入れるものによって型を使い分けるのがC#の大事なルールです。"
        },
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\\n\\nコンピュータで計算するときは、算数と同じような記号を使います。\\n\\n- **+** : たし算（足し算）\\n- **-** : ひき算（引き算）\\n- **\\*** : かけ算（掛け算）※キーボードの「*」\\n- **/** : わり算（割り算）※キーボードの「/」\\n\\n**コード例（計算して結果を表示）：**\\n```csharp\\nint x = 10;\\nint y = 5;\\nConsole.WriteLine(x + y);\\n```\\n\\n=> 15\\n\\n**解説：**\\n1. `int x = 10;` で「xというはこに10を入れる」\\n2. `int y = 5;` で「yというはこに5を入れる」\\n3. `x + y` で「10 + 5」を計算して表示"
        }
      ],
      "correctCode": "// xというはこに 10 を入れる\\nint x = 10;\\n// yというはこに 5 を入れる\\nint y = 5;\\n// x と y をたした答えを出す\\nConsole.WriteLine(x + y);",
      "holeyCode": "// xというはこに 10 を入れる\\n___ ___ = ___;\\n// yというはこに 5 を入れる\\n___ ___ = ___;\\n// x と y をたした答えを出す\\n___.___(__ ___ ___);",
      "correctLines": [
          "// xというはこに 10 を入れる",
          "int x = 10;",
          "// yというはこに 5 を入れる",
          "int y = 5;",
          "// x と y をたした答えを出す",
          "Console.WriteLine(x + y);"
        ],
      "lineHints": [
          null,
          "int型の変数xに10を代入します。",
          null,
          "int型の変数yに5を代入します。",
          null,
          "Console.WriteLineでx + yの結果を出力します。"
        ],
        "candidates": {
          "types": [
            "int",
            "string"
          ],
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
          "others": ["Console", "WriteLine", "x", "y"]
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
      "description": "剰余演算子（%）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "あまりを求める",
          "content": "# 割り算の「あまり」を知りたい！\\n\\n割り算をしたときに、割り切れなくて「あまり」が出ることがありますよね。\\n\\n**身近な例え：**\\nクッキーが10個あって、3人で分けるとします。1人3個ずつもらうと、9個使って1個あまりますね。この「1個」があまりです。\\n\\nプログラムでは `%`（パーセント記号）を使うと、その**あまり**だけを計算してくれます。これを「剰余」または「モジュロ」と呼びます。"
        },
        {
          "title": "% の使い方",
          "content": "# あまりを計算してみよう\\n\\n**例1：割り切れない場合**\\n```csharp\\nConsole.WriteLine(10 % 3);\\n```\\n\\n=> 1\\n10 ÷ 3 = 3 あまり 1 なので、「1」が表示されます。\\n\\n**例2：割り切れる場合**\\n```csharp\\nConsole.WriteLine(8 % 2);\\n```\\n\\n=> 0\\n8 ÷ 2 = 4 あまり 0 なので、「0」になります（ぴったり割り切れるということです！）\\n\\n**よく使う場面：**\\n- 偶数・奇数を調べる（2で割ったあまりが0なら偶数）\\n- 何かを順番にくり返すとき"
        }
      ],
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nConsole.WriteLine(10 % 3);",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___.___(__ ___ ___);",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "Console.WriteLine(10 % 3);"
        ],
      "lineHints": [
          null,
          "Console.WriteLineで10 % 3（あまり）を出力します。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["Console", "WriteLine", "10", "3"]
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
          "title": "中身を増やしたいとき",
          "content": "# はこの中身をパワーアップ\\n\\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\\n\\n**身近な例え：**\\n貯金箱に100円入っていて、さらに10円を入れると110円になりますよね。`+=` はこのように「今ある数字に足して、そのまま保存する」という合体技です。\\n\\n**コード例（スコアを増やす）：**\\n```csharp\\nint score = 100;\\nscore += 10;  // score に 10 を足して保存\\n// score は 110 になる\\n```\\n\\n**ポイント：**\\n`score += 10;` は `score = score + 10;` と同じ意味です。短く書けるので便利！"
        },
        {
          "title": "-= も使える",
          "content": "# 引き算バージョン\\n\\n`-=` を使えば、「今の数字から引いて保存」ができます。\\n\\n**身近な例え：**\\nゲームでHP（ヒットポイント＝体力）が100あって、敵から30のダメージを受けると70になりますよね。\\n\\n**コード例（HPを減らす）：**\\n```csharp\\nint hp = 100;\\nhp -= 30;  // hp から 30 を引いて保存\\n// hp は 70 になる\\n```\\n\\n**他にもある！：**\\n- `*=` : かけ算して保存\\n- `/=` : わり算して保存"
        }
      ],
      "correctCode": "// hp に 100 を入れる\\nint hp = 100;\\n// += で 20 を足す\\nhp += 20;\\n// -= で 50 を引く\\nhp -= 50;\\n// hpを出力\\nConsole.WriteLine(hp);",
      "holeyCode": "// hp に 100 を入れる\\n___ ___ = ___;\\n// += で 20 を足す\\n___ ___ ___;\\n// -= で 50 を引く\\n___ ___ ___;\\n// hpを出力\\n___.___(___);",
      "correctLines": [
          "// hp に 100 を入れる",
          "int hp = 100;",
          "// += で 20 を足す",
          "hp += 20;",
          "// -= で 50 を引く",
          "hp -= 50;",
          "// hpを出力",
          "Console.WriteLine(hp);"
        ],
      "lineHints": [
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
          "others": ["int", "hp", "100", "20", "50", "Console", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
      "title": "文章の中に変数を入れましょう",
      "description": "データを名前をつけて保存する「変数」の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "文章と変数をドッキング",
          "content": "# テンプレートリテラル（文字列補間：もじれつほかん）\\n\\n文章の途中に、変数の中身を入れたいときに使います。\\n\\n**身近な例え：**\\n「私の名前は○○です」という文章があって、○○の部分だけを変えたいとき、ありますよね。テンプレートリテラルを使うと、その「変わる部分」に変数の中身を入れられます。\\n\\n**メリット：**\\n- 状況に合わせて中身が変わる便利な文章を作れる\\n- 文字をくっつけるより読みやすい"
        },
        {
          "title": "$記号で合体！",
          "content": "# 文字列補間の使い方\\n\\n文字列の前に `$`（ドルマーク）をつけて、`{}`（波かっこ）の中に変数名を入れます。\\n\\n**コード例（年齢を文章に入れる）：**\\n```csharp\\nint age = 10;\\nConsole.WriteLine($\"私は{age}歳です\");\\n```\\n=> 私は10歳です\\n\\n**解説：**\\n1. `$` で「これから変数を入れるよ」と宣言\\n2. `{age}` の部分が、ageの中身（10）に置き換わる\\n3. 結果として「私は10歳です」という文章になる\\n\\n**ポイント：**\\n`$` を忘れると、`{age}` がそのまま表示されてしまうので注意！"
        }
      ],
      "correctCode": "// ageというはこに 10 を入れる\\nint age = 10;\\n// 文字列補間を使ってメッセージを出す\\nConsole.WriteLine($\"私は{age}歳です\");",
      "holeyCode": "// ageというはこに 10 を入れる\\n___ ___ = ___;\\n// 文字列補間を使ってメッセージを出す\\n___.___($\"私は{___}歳です\");",
      "correctLines": [
          "// ageというはこに 10 を入れる",
          "int age = 10;",
          "// 文字列補間を使ってメッセージを出す",
          "Console.WriteLine($\"私は{age}歳です\");"
        ],
      "lineHints": [
          null,
          "int型の変数ageに10を代入します。",
          null,
          "Console.WriteLineで$\"私は{age}歳です\"を出力します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "numbers": [
            "10"
          ],
          "operators": [
            "$"
          ],
          "others": ["int", "Console", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "content": "# データをまとめて整理整頓\\n\\nたくさんのデータを順番に並べておきたいときに使うのが**配列**です。\\n\\n**身近な例え：**\\n配列は「ロッカー」のようなものです。1番、2番、3番...と番号がついていて、それぞれのロッカーにものを入れられます。「買い物リスト」や「クラスの名簿」のように、関連するものを一つにまとめて管理できます。\\n\\n**メリット：**\\n- たくさんのデータをスッキリ管理できる\\n- 順番に処理するのが簡単"
        },
        {
          "title": "データの番号は 0 から！",
          "content": "# 配列の作り方と使い方\\n\\n型の後ろに `[]`（角かっこ）をつけると配列になります。\\n\\n**大事なルール：**\\n配列の番号は **0番** から始まります！1番目のデータは「0番」、2番目は「1番」です。\\n\\n**コード例（くだものリストを作る）：**\\n```csharp\\nstring[] fruits = {\"りんご\", \"バナナ\"};\\nConsole.WriteLine(fruits[0]); // \"りんご\" が表示される\\nConsole.WriteLine(fruits[1]); // \"バナナ\" が表示される\\n```\\n\\n**解説：**\\n- `string[]` で「文字の配列」を宣言\\n- `{\"りんご\", \"バナナ\"}` で中身を入れる\\n- `fruits[0]` で1番目（0番）のデータを取り出す"
        }
      ],
      "correctCode": "// colorsに{\"赤\", \"青\", \"緑\"}を代入\\nstring[] colors = {\"赤\", \"青\", \"緑\"};\\n// 2番目のデータを出す\\nConsole.WriteLine(colors[1]);",
      "holeyCode": "// colorsに{\"赤\", \"青\", \"緑\"}を代入\\n___[] ___ = {\"___\", \"___\", \"___\"};\\n// 2番目のデータを出す\\n___.___(___[___]);",
      "correctLines": [
          "// colorsに{\"赤\", \"青\", \"緑\"}を代入",
          "string[] colors = {\"赤\", \"青\", \"緑\"};",
          "// 2番目のデータを出す",
          "Console.WriteLine(colors[1]);"
        ],
      "lineHints": [
          null,
          "string[]型の変数colorsに{\"赤\", \"青\", \"緑\"}を代入します。",
          null,
          "Console.WriteLineでcolors[1]（2番目の要素）を出力します。"
        ],
        "candidates": {
          "strings": [
            "赤",
            "青",
            "緑"
          ],
          "numbers": [
            "0",
            "1",
            "2"
          ],
          "others": ["string", "colors", "Console", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "青\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって処理を分ける「条件分岐」を学びます",
      "tutorialSlides": [
        {
          "title": "条件分岐とは？",
          "content": "# プログラムに判断させてみよう\\n\\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」\\nこんなふうに、状況によって動きを変えることを**条件分岐**と呼びます。\\n\\n**身近な例え：**\\n信号機を思い浮かべてください。「青なら進む」「赤なら止まる」のように、条件によって行動が変わりますよね。プログラムでも同じように「もし○○なら△△する」という判断ができます。"
        },
        {
          "title": "もし〜なら（if）",
          "content": "# if文（イフぶん）の書き方\\n\\nC#では、`if (条件)` のあとに `{ }`（波かっこ）を書いて、その中にやりたいことを入力します。\\n\\n**コード例（点数が80より大きければ合格）：**\\n```csharp\\nint score = 100;\\nif (score > 80)\\n{\\n    Console.WriteLine(\"合格！\");\\n}\\n```\\n\\n**解説：**\\n1. `score > 80` は「scoreが80より大きいか？」という条件\\n2. この条件が正しい（True）なら、`{ }` の中を実行\\n3. 100は80より大きいので「合格！」と表示される\\n\\n**比較の記号：**\\n- `>` : より大きい\\n- `<` : より小さい\\n- `>=` : 以上（同じでもOK）\\n- `<=` : 以下（同じでもOK）"
        }
      ],
      "correctCode": "// scoreに100を入れる\\nint score = 100;\\n// もし80より大きかったら\\nif (score > 80)\\n{\\n    // 「合格！」と表示する\\n    Console.WriteLine(\"合格！\");\\n}",
      "holeyCode": "// scoreに100を入れる\\n___ ___ = ___;\\n// もし80より大きかったら\\nif (___ ___ ___)\\n// ブロックを開始\\n___\\n    // 「合格！」と表示する\\n    ___.___(\"___\");\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// scoreに100を入れる",
          "int score = 100;",
          "// もし80より大きかったら",
          "if (score > 80)",
          "// ブロックを開始",
          "{",
          "    // 「合格！」と表示する",
          "    Console.WriteLine(\\\"合格！\\\");",
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
          ""
        ],
        "candidates": {
          "keywords": [
            "if",
            "while"
          ],
          "numbers": [
            "100",
            "80"
          ],
          "strings": [
            "合格！"
          ],
          "others": ["int", "score", ">", "{", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "合格！\\n"
          }
        ]
      },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "条件に合わない場合の処理を追加する方法を学びます",
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "content": "# else（エルス）の役割\\n\\n条件に当てはまらなかったときの別のルートを作るのが**else（エルス）**です。elseは英語で「その他」という意味です。\\n\\n**身近な例え：**\\n「テストで80点以上なら合格、そうでなければ不合格」のように、プログラムの道を2つに分けることができます。\\n\\n**ポイント：**\\n- ifの条件が正しい → ifの中を実行\\n- ifの条件が正しくない → elseの中を実行\\n\\nどちらか一方だけが必ず実行されます。"
        },
        {
          "title": "そうじゃなければ（else）",
          "content": "# if-else文の書き方\\n\\n条件にあてはまらなかったときの動きは `else` を使って書きます。\\n\\n**コード例（年齢で大人か子供か判定）：**\\n```csharp\\nint age = 10;\\nif (age >= 20)\\n{\\n    Console.WriteLine(\"大人\");\\n}\\nelse\\n{\\n    Console.WriteLine(\"子供\");\\n}\\n```\\n=> 子供\\n\\n**解説：**\\n1. `age >= 20` は「ageが20以上か？」という条件\\n2. ageは10なので、条件は正しくない（False）\\n3. だから `else` の中の「子供」が表示される"
        }
      ],
      "correctCode": "// ageに10を入れる\\nint age = 10;\\n// 20歳以上かどうかで分ける\\nif (age >= 20)\\n{\\n    // 「大人」と出力\\n    Console.WriteLine(\"大人\");\\n}\\n// else でそれ以外の場合\\nelse\\n{\\n    // 「子供」と出力\\n    Console.WriteLine(\"子供\");\\n}",
      "holeyCode": "// ageに10を入れる\\n___ ___ = ___;\\n// 20歳以上かどうかで分ける\\nif (___ ___ ___)\\n// ブロックを開始\\n___\\n    // 「大人」と出力\\n    ___.___(\"___\");\\n// ブロックを閉じる\\n___\\n// else でそれ以外の場合\\n___\\n// ブロックを開始\\n___\\n    // 「子供」と出力\\n    ___.___(\"___\");\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ageに10を入れる",
          "int age = 10;",
          "// 20歳以上かどうかで分ける",
          "if (age >= 20)",
          "// ブロックを開始",
          "{",
          "    // 「大人」と出力",
          "    Console.WriteLine(\\\"大人\\\");",
          "// ブロックを閉じる",
          "}",
          "// else でそれ以外の場合",
          "else",
          "// ブロックを開始",
          "{",
          "    // 「子供」と出力",
          "    Console.WriteLine(\\\"子供\\\");",
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
          "",
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "else",
            "elif"
          ],
          "numbers": [
            "10",
            "20"
          ],
          "strings": [
            "大人",
            "子供"
          ],
          "others": ["int", "age", ">=", "{", "Console", "WriteLine", "}", "else"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "子供\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件を組み合わせる",
          "content": "# もっと細かい条件で判断しよう\\n\\n「10歳以上、かつ、20歳未満」のように、2つの条件を両方クリアしているかチェックしたいときがあります。\\n\\n**2つの記号：**\\n- `&&`（アンド）: 両方の条件を満たす必要がある（「かつ」）\\n- `||`（オア）: どちらか片方を満たせばOK（「または」）\\n\\n**身近な例え：**\\n- 遊園地の乗り物「身長120cm以上 **かつ** 年齢10歳以上」→ `&&`\\n- お休みの日「土曜日 **または** 日曜日」→ `||`"
        },
        {
          "title": "&& と || の使い方",
          "content": "# 論理演算子の使い方\\n\\n**例1：両方の条件を満たす（かつ）**\\n```csharp\\nif (score >= 80 && attendance >= 90)\\n{\\n    Console.WriteLine(\"優秀！\");\\n}\\n```\\n→ 点数が80以上 **かつ** 出席率が90以上のときだけ「優秀！」と表示\\n\\n**例2：どちらかを満たす（または）**\\n```csharp\\nif (day == \"土曜日\" || day == \"日曜日\")\\n{\\n    Console.WriteLine(\"お休み\");\\n}\\n```\\n→ 土曜日 **または** 日曜日なら「お休み」と表示\\n\\n**ポイント：**\\n- `&&` は両方が正しい（True）ときだけ全体が正しい\\n- `||` はどちらか一方でも正しければ全体が正しい"
        }
      ],
      "correctCode": "// score と bonus を定義\\nint score = 80;\\nint bonus = 10;\\n// && で両方の条件をチェック\\nif (score >= 70 && bonus > 0)\\n{\\n    Console.WriteLine(\"ボーナスあり合格\");\\n}",
      "holeyCode": "// score と bonus を定義\\n___ ___ = ___;\\n// 変数を宣言\\n___ ___ = ___;\\n// && で両方の条件をチェック\\nif (___ ___ ___ ___ ___ ___ ___)\\n// ブロックを開始\\n___\\n    // \"\"\\n    ___.___(\"___\");\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// score と bonus を定義",
          "int score = 80;",
          "// 変数を宣言",
          "int bonus = 10;",
          "// && で両方の条件をチェック",
          "if (score >= 70 && bonus > 0)",
          "// ブロックを開始",
          "{",
          "    // \\\"\\\"",
          "    Console.WriteLine(\\\"ボーナスあり合格\\\");",
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
          "\\\"\\\"",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            ">=",
            ">"
          ],
          "others": ["int", "score", "bonus", "80", "10", "70", "0", "{", "Console", "WriteLine", "ボーナスあり合格", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボーナスあり合格\\n"
          }
        ]
      },
    {
      "title": "ぐるぐる回す foreach",
      "description": "同じ処理を何度も実行する「繰り返し」を学びます",
      "tutorialSlides": [
        {
          "title": "繰り返し処理（ループ）",
          "content": "# 自動で順番に処理する\\n\\n同じ作業を何度も繰り返すための仕組みが**ループ（繰り返し）**です。\\n\\n**身近な例え：**\\nクラスの出席を取るとき、先生は名簿の1人目から順番に名前を呼んでいきますよね。「名前を呼ぶ」という同じ作業を、全員分くり返しています。\\n\\nプログラムでも、配列の中身を一つずつ順番に処理するときにループを使います。手作業でやるよりずっと楽で速いです！"
        },
        {
          "title": "foreach（フォーイーチ）",
          "content": "# 配列を順番に処理する\\n\\n配列の中身を最初から最後まで順番に取り出すときは、**foreach**（フォーイーチ）を使うと便利です。「for each」は「それぞれに対して」という意味です。\\n\\n**コード例（名前を順番に表示）：**\\n```csharp\\nstring[] names = {\"太郎\", \"花子\"};\\nforeach (string name in names)\\n{\\n    Console.WriteLine(name);\\n}\\n```\\n=> 太郎\\n=> 花子\\n\\n**解説：**\\n1. `foreach (string name in names)` で「namesの中身を1つずつnameに入れて」と指示\\n2. 1回目のループ：nameに「太郎」が入り、表示される\\n3. 2回目のループ：nameに「花子」が入り、表示される\\n4. 全部終わったらループを抜ける"
        }
      ],
      "correctCode": "// namesに{\"太郎\", \"花子\"}を代入\\nstring[] names = {\"太郎\", \"花子\"};\\n// 順番に取り出すループ\\nforeach (string name in names)\\n{\\n    // 取り出した名前を表示\\n    Console.WriteLine(name);\\n}",
      "holeyCode": "// namesに{\"太郎\", \"花子\"}を代入\\n___[] ___ = {\"___\", \"___\"};\\n// 順番に取り出すループ\\nforeach (___ ___ in ___)\\n// ブロックを開始\\n___\\n    // 取り出した名前を表示\\n    ___.___(___);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// namesに{\\\"太郎\\\", \\\"花子\\\"}を代入",
          "string[] names = {\\\"太郎\\\", \\\"花子\\\"};",
          "// 順番に取り出すループ",
          "foreach (string name in names)",
          "// ブロックを開始",
          "{",
          "    // 取り出した名前を表示",
          "    Console.WriteLine(name);",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "\\\"\\\"\\\"\\\"",
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
            "foreach",
            "for"
          ],
          "variables": [
            "name"
          ],
          "strings": [
            "太郎",
            "花子"
          ],
          "others": ["string", "names", "{", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎\\n花子\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「Dictionary」",
      "description": "キーと値のペアでデータを管理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "Dictionary（ディクショナリー）とは？",
          "content": "# キーワードで検索！\\n\\n「名前」と「データ」をセットにして保存できるのが**Dictionary**（ディクショナリー）です。Dictionaryは英語で「辞書」という意味です。\\n\\n**身近な例え：**\\n電話帳を思い浮かべてください。「太郎」という名前を調べると「090-1234-5678」という電話番号が見つかりますよね。Dictionaryも同じで、キーワード（名前）を使って目的のデータ（値）をすぐに見つけられます。\\n\\n**用語：**\\n- **キー（Key）**: 検索に使う「名前」の部分\\n- **値（Value）**: キーに対応する「データ」の部分"
        },
        {
          "title": "使い方の例",
          "content": "# Dictionaryの作り方と使い方\\n\\n**コード例（くだものと色の辞書を作る）：**\\n```csharp\\n// <キーの型, 値の型> を指定して作る\\nvar dict = new Dictionary<string, string>();\\ndict[\"りんご\"] = \"赤\";   // キー「りんご」に値「赤」を登録\\ndict[\"バナナ\"] = \"黄\";   // キー「バナナ」に値「黄」を登録\\n\\nConsole.WriteLine(dict[\"りんご\"]);\\n```\\n\\n=> 赤\\n\\n**解説：**\\n1. `Dictionary<string, string>` で「キーも値も文字」の辞書を作る\\n2. `dict[\"りんご\"] = \"赤\"` で「りんごの色は赤」と登録\\n3. `dict[\"りんご\"]` で「りんごの色」を取り出す"
        }
      ],
      "correctCode": "// Dictionaryを作る\\nvar fruits = new Dictionary<string, string>();\\n// キーと値を追加\\nfruits[\"みかん\"] = \"オレンジ\";\\n// キーを指定して値を取り出す\\nConsole.WriteLine(fruits[\"みかん\"]);",
      "holeyCode": "// Dictionaryを作る\\n___ ___ = new ___<___, ___>();\\n// キーと値を追加\\n___[\"___\"] = \"___\";\\n// キーを指定して値を取り出す\\n___.___(___[\"___\"]);",
      "correctLines": [
          "// Dictionaryを作る",
          "var fruits = new Dictionary<string, string>();",
          "// キーと値を追加",
          "fruits[\"みかん\"] = \"オレンジ\";",
          "// キーを指定して値を取り出す",
          "Console.WriteLine(fruits[\"みかん\"]);"
        ],
      "lineHints": [
          null,
          "var型の変数fruitsにDictionary<string, string>を作成します。",
          null,
          "fruits[\"みかん\"]に\"オレンジ\"を代入します。",
          null,
          "Console.WriteLineでfruits[\"みかん\"]の値を出力します。"
        ],
        "candidates": {
          "types": [
            "Dictionary",
            "List"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["var", "fruits", "string", "Console", "WriteLine"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "メソッド（関数）とは？",
          "content": "# オリジナルの技を作ろう\\n\\nよく使う処理をひとまとめにして、名前をつけることができます。これを**メソッド**（または関数：かんすう）と呼びます。\\n\\n**身近な例え：**\\n料理のレシピを思い浮かべてください。「カレーの作り方」というレシピがあれば、いつでも同じ手順でカレーが作れますよね。メソッドも同じで、「処理の手順」に名前をつけておいて、いつでも呼び出せるようにします。\\n\\n**メリット：**\\n- 同じコードを何度も書かなくていい\\n- プログラムが読みやすくなる\\n- 修正するときも1か所直せばOK"
        },
        {
          "title": "メソッドを定義",
          "content": "# メソッドの作り方\\n\\nC#でメソッドを作るときは、`static void` と書いてから、メソッドの名前をつけます。\\n\\n**用語の意味：**\\n- `static`（スタティック）: 「このまま使える」という意味（詳しくは後で学びます）\\n- `void`（ボイド）: 「結果を返さない」という意味（「空っぽ」のイメージ）\\n\\n**コード例（あいさつメソッドを作る）：**\\n```csharp\\n// メソッドを定義（作る）\\nstatic void Greet()\\n{\\n    Console.WriteLine(\"こんにちは\");\\n}\\n\\n// メソッドを呼び出す（使う）\\nGreet();\\n```\\n=> こんにちは\\n\\n**解説：**\\n1. `static void Greet()` でGreetという名前のメソッドを作る\\n2. `{ }` の中に、やりたい処理を書く\\n3. `Greet();` でメソッドを呼び出して実行する"
        }
      ],
      "correctCode": "// Greetというメソッドを定義\\nstatic void Greet()\\n{\\n    // こんにちは と表示\\n    Console.WriteLine(\"こんにちは\");\\n}\\n// Greetメソッドを呼び出す\\nGreet();",
      "holeyCode": "// Greetというメソッドを定義\\nstatic void ___()\\n// ブロックを開始\\n___\\n    // こんにちは と表示\\n    ___.___(\"___\");\\n// ブロックを閉じる\\n___\\n// Greetメソッドを呼び出す\\n___();",
      "correctLines": [
          "// Greetというメソッドを定義",
          "static void Greet()",
          "// ブロックを開始",
          "{",
          "    // こんにちは と表示",
          "    Console.WriteLine(\\\"こんにちは\\\");",
          "// ブロックを閉じる",
          "}",
          "// Greetメソッドを呼び出す",
          "Greet();"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "void",
            "int"
          ],
          "methods": [
            "Greet"
          ],
          "strings": [
            "こんにちは"
          ],
          "others": ["{", "Console", "WriteLine", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
};