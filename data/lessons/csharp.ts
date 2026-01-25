export const csharpData = {
  "language": "csharp",
  "lessonId": "csharp-1",
  "lessonTitle": "C# (シーシャープ) に挑戦！",
  "lessonDescription": "Microsoftが開発した、多機能で強力な言葉「C#（シーシャープ）」のきほんを学びましょう。Unityを使ったゲーム作りにも欠かせない言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出しましょう",
      "description": "C#を使って画面にメッセージを出してみましょう。Console.WriteLine という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "C#（シーシャープ）とは？",
          "image": "/illustrations/languages/csharp.png",
          "content": "# ゲーム作りにも使われるプログラミング言語（げんご）\n\nC#（シーシャープ）は、Microsoft（マイクロソフト）という大きな会社が作ったプログラミング言語です。\n\n**C#でできること：**\n- パソコンのアプリを作る\n- Unity（ユニティ）というツールでゲームを作る\n- ウェブサイトを作る\n\nC#は書き方のルールがしっかりしているので、間違いの少ない安全なプログラムが作れます。まるでレゴブロックのように、決まったパーツを組み合わせてプログラムを作っていきます。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# Console.WriteLine（コンソール・ライトライン）\n\n画面に文字を出したいときは、`Console.WriteLine()` という命令（めいれい）を使います。\n\n**Console** は「画面」、**WriteLine** は「1行書く」という意味です。つまり「画面に1行書いてね」とコンピュータにお願いしているんです。\n\n**大事なルール：**\nC#では、文の最後に必ず `;`（セミコロン）をつけます。これは日本語の「。」と同じ役割です。忘れないようにしましょう！\n\n**コード例（文字を出すプログラム）：**\n```csharp\nConsole.WriteLine(\"ヤッホー！\");\n```\n=> ヤッホー！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "using System;\n\nclass Program {\n    static void Main() {\n        // 画面にメッセージを出す関数\n        Console.WriteLine(\"Hello, C#!\");\n    }\n}",
      "holeyCode": "using System;\n\nclass Program {\n    static void Main() {\n        // 画面にメッセージを出す関数\n        Console.WriteLine(\"___\");\n    }\n}",
      "correctLines": [
        "using System;",
        "",
        "class Program {",
        "    static void Main() {",
        "        // 画面にメッセージを出す関数",
        "        Console.WriteLine(\"Hello, C#!\");",
        "    }",
        "}"
      ],
      "lineHints": [null, null, null, null, null, "文字列をコンソールに出力し、改行します。", null, null],
      "candidates": {
        "functions": ["Console.WriteLine"],
        "strings": ["Hello, C#!"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, C#!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "description": "データに名前をつけて保存できる「変数（へんすう）」を使ってみましょう。C#では型を指定して変数を作ります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する「はこ」\n\nプログラムでは、数字や文字をしまっておく「はこ」を作ることができます。これを**変数（へんすう）**と呼びます。\n\n**身近な例え：**\n変数は、おもちゃ箱のようなものです。おもちゃ箱に「つみき」と名前をつけておけば、どこにつみきがあるかすぐにわかりますよね。プログラムでも同じように、データに名前をつけて保存します。\n\n**ポイント：**\n- 変数には好きな名前をつけられる\n- 中身はあとから変更できる\n- 何が入っているかわかりやすい名前をつけよう"
        },
        {
          "title": "はこに「ラベル」を貼ろう",
          "image": "/illustrations/common/box.png",
          "content": "# string（ストリング）ラベル\n\nC#では、変数を作るときに「このはこには何を入れますか？」と決める必要があります。これを**型（かた）**と呼びます。\n\n文字を入れたいときは、`string`（ストリング）という型を使います。stringは英語で「ひも」という意味で、文字がひものようにつながっているイメージです。\n\n**コード例（文字を保存して表示）：**\n```csharp\nstring name = \"C#\";\nConsole.WriteLine(name);\n```\n=> C#\n\n**解説：**\n1. `string name` で「文字を入れるはこ」を作る\n2. `= \"C#\"` で「C#」という文字を入れる\n3. `Console.WriteLine(name)` ではこの中身を表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// nameというはこに \"CSharp\" を入れる\nstring name = \"CSharp\";\n// はこの中身を画面に出す\nConsole.WriteLine(name);",
      "holeyCode": "// nameというはこに \"CSharp\" を入れる\n___ name = \"___\";\n// はこの中身を画面に出す\nConsole.WriteLine(___);",
      "correctLines": [
        "// nameというはこに \"CSharp\" を入れる",
        "string name = \"CSharp\";",
        "// はこの中身を画面に出す",
        "Console.WriteLine(name);"
      ],
      "lineHints": [null, "文字列型の変数を宣言し、文字列データを代入します。", null, "変数名 name を入力します。"],
      "candidates": {
        "types": ["string", "int"],
        "variables": ["name"],
        "strings": ["CSharp"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "CSharp\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "C#を使って、たし算をしてみましょう。int型の変数を使って計算します。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "数値を扱う",
          "image": "/illustrations/common/robot_math.png",
          "content": "# int（イント）ラベル\n\n数字（整数：せいすう）を扱いたいときは、**int**（イント）という型（かた）を使います。intは「integer（インテジャー）」の略で、「整数」という意味です。\n\n**整数とは？**\n1, 2, 3, 10, 100のように、小数点（.）がない数字のことです。\n\n**型の使い分け：**\n- 文字を入れるはこ → `string`\n- 数字を入れるはこ → `int`\n\nこのように入れるものによって型を使い分けるのがC#の大事なルールです。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 算数と同じ記号を使います\n\nコンピュータで計算するときは、算数と同じような記号を使います。\n\n- **+** : たし算（足し算）\n- **-** : ひき算（引き算）\n- **\\*** : かけ算（掛け算）※キーボードの「*」\n- **/** : わり算（割り算）※キーボードの「/」\n\n**コード例（計算して結果を表示）：**\n```csharp\nint x = 10;\nint y = 5;\nConsole.WriteLine(x + y);  // => 15\n```\n\n**解説：**\n1. `int x = 10;` で「xというはこに10を入れる」\n2. `int y = 5;` で「yというはこに5を入れる」\n3. `x + y` で「10 + 5」を計算して表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// xというはこに 10 を入れる\nint x = 10;\n// yというはこに 5 を入れる\nint y = 5;\n// x と y をたした答えを出す\nConsole.WriteLine(x + y);",
      "holeyCode": "// xというはこに 10 を入れる\n___ x = ___i\n// yというはこに 5 を入れる\n___ y = ___i\n// x と y をたした答えを出す\nConsole.WriteLine(x ___ y);",
      "correctLines": [
        "// xというはこに 10 を入れる",
        "int x = 10;",
        "// yというはこに 5 を入れる",
        "int y = 5;",
        "// x と y をたした答えを出す",
        ["Console.WriteLine(x + y);", "Console.WriteLine(y + x);"]
      ],
      "lineHints": [null, "整数型の変数を宣言し、初期値を代入します。", null, "整数型の変数を宣言し、初期値を代入します。", null, "たし算なので + を使います。", null],
      "candidates": {
        "types": ["int", "string"],
        "numbers": ["10", "5"],
        "operators": ["+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
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
          "content": "# 割り算の「あまり」を知りたい！\n\n割り算をしたときに、割り切れなくて「あまり」が出ることがありますよね。\n\n**身近な例え：**\nクッキーが10個あって、3人で分けるとします。1人3個ずつもらうと、9個使って1個あまりますね。この「1個」があまりです。\n\nプログラムでは `%`（パーセント記号）を使うと、その**あまり**だけを計算してくれます。これを「剰余（じょうよ）」または「モジュロ」と呼びます。"
        },
        {
          "title": "% の使い方",
          "image": "/illustrations/common/robot_math.png",
          "content": "# あまりを計算してみよう\n\n**例1：割り切れない場合**\n```csharp\nConsole.WriteLine(10 % 3);  // => 1\n```\n10 ÷ 3 = 3 あまり 1 なので、「1」が表示されます。\n\n**例2：割り切れる場合**\n```csharp\nConsole.WriteLine(8 % 2);   // => 0\n```\n8 ÷ 2 = 4 あまり 0 なので、「0」になります（ぴったり割り切れるということです！）\n\n**よく使う場面：**\n- 偶数（ぐうすう）・奇数（きすう）を調べる（2で割ったあまりが0なら偶数）\n- 何かを順番にくり返すとき"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 10 を 3 で割ったあまりを出力する\nConsole.WriteLine(10 % 3);",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\nConsole.WriteLine(10 ___ 3);",
      "correctLines": [
        "// 10 を 3 で割ったあまりを出力する",
        "Console.WriteLine(10 % 3);"
      ],
      "lineHints": [null, "あまりを求める `%` 演算子を使います。"],
      "candidates": {
        "operators": ["%", "/", "*", "-"]
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
          "title": "中身を増やしたいとき",
          "image": "/illustrations/common/robot_math.png",
          "content": "# はこの中身をパワーアップ\n\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\n\n**身近な例え：**\n貯金箱に100円入っていて、さらに10円を入れると110円になりますよね。`+=` はこのように「今ある数字に足して、そのまま保存する」という合体技です。\n\n**コード例（スコアを増やす）：**\n```csharp\nint score = 100;\nscore += 10;  // score に 10 を足して保存\n// score は 110 になる\n```\n\n**ポイント：**\n`score += 10;` は `score = score + 10;` と同じ意味です。短く書けるので便利！"
        },
        {
          "title": "-= も使える",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 引き算バージョン\n\n`-=` を使えば、「今の数字から引いて保存」ができます。\n\n**身近な例え：**\nゲームでHP（ヒットポイント＝体力）が100あって、敵から30のダメージを受けると70になりますよね。\n\n**コード例（HPを減らす）：**\n```csharp\nint hp = 100;\nhp -= 30;  // hp から 30 を引いて保存\n// hp は 70 になる\n```\n\n**他にもある！：**\n- `*=` : かけ算して保存\n- `/=` : わり算して保存"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// hp に 100 を入れる\nint hp = 100;\n// += で 20 を足す\nhp += 20;\n// -= で 50 を引く\nhp -= 50;\nConsole.WriteLine(hp);",
      "holeyCode": "// hp に 100 を入れる\nint hp = 100;\n// += で 20 を足す\nhp ___ 20;\n// -= で 50 を引く\nhp ___ 50;\nConsole.WriteLine(hp);",
      "correctLines": [
        "// hp に 100 を入れる",
        "int hp = 100;",
        "// += で 20 を足す",
        "hp += 20;",
        "// -= で 50 を引く",
        "hp -= 50;",
        "Console.WriteLine(hp);"
      ],
      "lineHints": [null, null, null, "変数の値を計算して、その結果を同じ変数に再代入します。", null, "変数の値を計算して、その結果を同じ変数に再代入します。", null],
      "candidates": {
        "operators": ["+=", "-=", "*=", "/="]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "70\n"
        }
      ]
    },
    {
      "title": "文章の中に変数を入れましょう",
      "description": "文字列補間（$記号）を使って、変数の値を文章の中に入れましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "文章と変数をドッキング",
          "image": "/illustrations/common/fstring.png",
          "content": "# テンプレートリテラル（文字列補間：もじれつほかん）\n\n文章の途中に、変数（はこ）の中身を入れたいときに使います。\n\n**身近な例え：**\n「私の名前は○○です」という文章があって、○○の部分だけを変えたいとき、ありますよね。テンプレートリテラルを使うと、その「変わる部分」に変数の中身を入れられます。\n\n**メリット：**\n- 状況に合わせて中身が変わる便利な文章を作れる\n- 文字をくっつけるより読みやすい"
        },
        {
          "title": "$記号で合体！",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文字列補間（もじれつほかん）の使い方\n\n文字列の前に `$`（ドルマーク）をつけて、`{}`（波かっこ）の中に変数名を入れます。\n\n**コード例（年齢を文章に入れる）：**\n```csharp\nint age = 10;\nConsole.WriteLine($\"私は{age}歳です\");\n```\n=> 私は10歳です\n\n**解説：**\n1. `$` で「これから変数を入れるよ」と宣言\n2. `{age}` の部分が、ageの中身（10）に置き換わる\n3. 結果として「私は10歳です」という文章になる\n\n**ポイント：**\n`$` を忘れると、`{age}` がそのまま表示されてしまうので注意！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ageというはこに 10 を入れる\nint age = 10;\n// 文字列補間を使ってメッセージを出す\nConsole.WriteLine($\"私は{age}歳です\");",
      "holeyCode": "// ageというはこに 10 を入れる\nint age = ___i\n// 文字列補間を使ってメッセージを出す\nConsole.WriteLine(___\"私は{___}歳です\");",
      "correctLines": [
        "// ageというはこに 10 を入れる",
        "int age = 10;",
        "// 文字列補間を使ってメッセージを出す",
        "Console.WriteLine($\"私は{age}歳です\");"
      ],
      "lineHints": [null, "整数型の変数を宣言し、初期値を代入します。", null, "$ を先頭につけて、age を {} の中に入力します。"],
      "candidates": {
        "variables": ["age"],
        "numbers": ["10"],
        "operators": ["$"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "たくさんのデータをまとめましょう「配列」",
      "description": "配列を使って、たくさんのデータを一つにまとめて管理しましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "配列（はいれつ）とは？",
          "image": "/illustrations/common/list.png",
          "content": "# データをまとめて整理整頓\n\nたくさんのデータを順番に並べておきたいときに使うのが**配列（はいれつ）**です。\n\n**身近な例え：**\n配列は「ロッカー」のようなものです。1番、2番、3番...と番号がついていて、それぞれのロッカーにものを入れられます。「買い物リスト」や「クラスの名簿」のように、関連するものを一つにまとめて管理できます。\n\n**メリット：**\n- たくさんのデータをスッキリ管理できる\n- 順番に処理するのが簡単"
        },
        {
          "title": "データの番号は 0 から！",
          "image": "/illustrations/common/list.png",
          "content": "# 配列の作り方と使い方\n\n型の後ろに `[]`（角かっこ）をつけると配列になります。\n\n**大事なルール：**\n配列の番号は **0番** から始まります！1番目のデータは「0番」、2番目は「1番」です。\n\n**コード例（くだものリストを作る）：**\n```csharp\nstring[] fruits = {\"りんご\", \"バナナ\"};\nConsole.WriteLine(fruits[0]); // \"りんご\" が表示される\nConsole.WriteLine(fruits[1]); // \"バナナ\" が表示される\n```\n\n**解説：**\n- `string[]` で「文字の配列」を宣言\n- `{\"りんご\", \"バナナ\"}` で中身を入れる\n- `fruits[0]` で1番目（0番）のデータを取り出す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// colorsという配列を作る\nstring[] colors = {\"赤\", \"青\", \"緑\"};\n// 2番目のデータを出す\nConsole.WriteLine(colors[1]);",
      "holeyCode": "// colorsという配列を作る\nstring[] colors = {\"___\", \"___\", \"___\"};\n// 2番目のデータを出す\nConsole.WriteLine(colors[___]);",
      "correctLines": [
        "// colorsという配列を作る",
        "string[] colors = {\"赤\", \"青\", \"緑\"};",
        "// 2番目のデータを出す",
        "Console.WriteLine(colors[1]);"
      ],
      "lineHints": [null, "赤、青、緑 の順で入力しましょう。", null, "2番目のデータのインデックスは 1 です。"],
      "candidates": {
        "strings": ["赤", "青", "緑"],
        "numbers": ["0", "1", "2"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "青\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "条件によって動きを変える if文を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断させてみよう\n\n「雨が降ったら傘をさす」「晴れたら外で遊ぶ」\nこんなふうに、状況によって動きを変えることを**条件分岐（じょうけんぶんき）**と呼びます。\n\n**身近な例え：**\n信号機を思い浮かべてください。「青なら進む」「赤なら止まる」のように、条件によって行動が変わりますよね。プログラムでも同じように「もし○○なら△△する」という判断ができます。"
        },
        {
          "title": "もし〜なら（if）",
          "image": "/illustrations/common/if.png",
          "content": "# if文（イフぶん）の書き方\n\nC#では、`if (条件)` のあとに `{ }`（波かっこ）を書いて、その中にやりたいことを入力します。\n\n**コード例（点数が80より大きければ合格）：**\n```csharp\nint score = 100;\nif (score > 80)\n{\n    Console.WriteLine(\"合格！\");\n}\n```\n\n**解説：**\n1. `score > 80` は「scoreが80より大きいか？」という条件\n2. この条件が正しい（True）なら、`{ }` の中を実行\n3. 100は80より大きいので「合格！」と表示される\n\n**比較の記号：**\n- `>` : より大きい\n- `<` : より小さい\n- `>=` : 以上（同じでもOK）\n- `<=` : 以下（同じでもOK）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// scoreに100を入れる\nint score = 100;\n// もし80より大きかったら\nif (score > 80)\n{\n    // メッセージを表示する\n    Console.WriteLine(\"合格！\");\n}",
      "holeyCode": "// scoreに100を入れる\nint score = ___i\n// もし80より大きかったら\n___ (score > 80)\n{\n    // メッセージを表示する\n    Console.WriteLine(\"___\");\n}",
      "correctLines": [
        "// scoreに100を入れる",
        "int score = 100;",
        "// もし80より大きかったら",
        "if (score > 80)",
        "{",
        "    // メッセージを表示する",
        "    Console.WriteLine(\"合格！\");",
        "}"
      ],
      "lineHints": [null, "整数型の変数を宣言し、初期値を代入します。", null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, null, "文字列をコンソールに出力し、改行します。", null],
      "candidates": {
        "keywords": ["if", "while"],
        "numbers": ["100"],
        "strings": ["合格！"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "合格！\n"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n条件に当てはまらなかったときの別のルートを作るのが**else（エルス）**です。elseは英語で「その他」という意味です。\n\n**身近な例え：**\n「テストで80点以上なら合格、そうでなければ不合格」のように、プログラムの道を2つに分けることができます。\n\n**ポイント：**\n- ifの条件が正しい → ifの中を実行\n- ifの条件が正しくない → elseの中を実行\n\nどちらか一方だけが必ず実行されます。"
        },
        {
          "title": "そうじゃなければ（else）",
          "image": "/illustrations/common/if.png",
          "content": "# if-else文の書き方\n\n条件にあてはまらなかったときの動きは `else` を使って書きます。\n\n**コード例（年齢で大人か子供か判定）：**\n```csharp\nint age = 10;\nif (age >= 20)\n{\n    Console.WriteLine(\"大人\");\n}\nelse\n{\n    Console.WriteLine(\"子供\");\n}\n```\n=> 子供\n\n**解説：**\n1. `age >= 20` は「ageが20以上か？」という条件\n2. ageは10なので、条件は正しくない（False）\n3. だから `else` の中の「子供」が表示される"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ageに10を入れる\nint age = 10;\n// 20歳以上かどうかで分ける\nif (age >= 20)\n{\n    Console.WriteLine(\"大人\");\n}\nelse\n{\n    // それ以外の場合\n    Console.WriteLine(\"子供\");\n}",
      "holeyCode": "// ageに10を入れる\nint age = ___i\n// 20歳以上かどうかで分ける\nif (age >= 20)\n{\n    // 大人というメッセージを出力\n    Console.WriteLine(\"___\");\n}\n// else でそれ以外の場合\n___\n{\n    // それ以外の場合\n    Console.WriteLine(\"___\");\n}",
      "correctLines": [
        "// ageに10を入れる",
        "int age = 10;",
        "// 20歳以上かどうかで分ける",
        "if (age >= 20)",
        "{",
        "    // 大人というメッセージを出力",
        "    Console.WriteLine(\"大人\");",
        "}",
        "// else でそれ以外の場合",
        "else",
        "{",
        "    // それ以外の場合",
        "    Console.WriteLine(\"子供\");",
        "}"
      ],
      "lineHints": [null, "整数型の変数を宣言し、初期値を代入します。", null, null, null, null, "文字列をコンソールに出力し、改行します。", null, null, "もし条件が満たされなかった場合に実行する処理を記述します。", null, null, "文字列をコンソールに出力し、改行します。", null],
      "candidates": {
        "keywords": ["else", "elif"],
        "numbers": ["10"],
        "strings": ["大人", "子供"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "子供\n"
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
          "content": "# もっと細かい条件で判断しよう\n\n「10歳以上、かつ、20歳未満」のように、2つの条件を両方クリアしているかチェックしたいときがあります。\n\n**2つの記号：**\n- `&&`（アンド）: 両方の条件を満たす必要がある（「かつ」）\n- `||`（オア）: どちらか片方を満たせばOK（「または」）\n\n**身近な例え：**\n- 遊園地の乗り物「身長120cm以上 **かつ** 年齢10歳以上」→ `&&`\n- お休みの日「土曜日 **または** 日曜日」→ `||`"
        },
        {
          "title": "&& と || の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 論理演算子（ろんりえんざんし）の使い方\n\n**例1：両方の条件を満たす（かつ）**\n```csharp\nif (score >= 80 && attendance >= 90)\n{\n    Console.WriteLine(\"優秀！\");\n}\n```\n→ 点数が80以上 **かつ** 出席率が90以上のときだけ「優秀！」と表示\n\n**例2：どちらかを満たす（または）**\n```csharp\nif (day == \"土曜日\" || day == \"日曜日\")\n{\n    Console.WriteLine(\"お休み\");\n}\n```\n→ 土曜日 **または** 日曜日なら「お休み」と表示\n\n**ポイント：**\n- `&&` は両方が正しい（True）ときだけ全体が正しい\n- `||` はどちらか一方でも正しければ全体が正しい"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// score と bonus を定義\nint score = 80;\nint bonus = 10;\n// && で両方の条件をチェック\nif (score >= 70 && bonus > 0)\n{\n    Console.WriteLine(\"ボーナスあり合格\");\n}",
      "holeyCode": "// score と bonus を定義\nint score = 80;\nint bonus = 10;\n// && で両方の条件をチェック\nif (score >= 70 ___ bonus > 0)\n{\n    Console.WriteLine(\"ボーナスあり合格\");\n}",
      "correctLines": [
        "// score と bonus を定義",
        "int score = 80;",
        "int bonus = 10;",
        "// && で両方の条件をチェック",
        "if (score >= 70 && bonus > 0)",
        "{",
        "    Console.WriteLine(\"ボーナスあり合格\");",
        "}"
      ],
      "lineHints": [null, null, null, null, "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。", null, null, null],
      "candidates": {
        "operators": ["&&", "||", "&", "|"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ボーナスあり合格\n"
        }
      ]
    },
    {
      "title": "ぐるぐる回す foreach",
      "description": "配列の中身を一つずつ順番に取り出して処理する foreach を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 11,
      "tutorialSlides": [
        {
          "title": "繰り返し処理（ループ）",
          "image": "/illustrations/common/loop.png",
          "content": "# 自動で順番に処理する\n\n同じ作業を何度も繰り返すための仕組みが**ループ（繰り返し）**です。\n\n**身近な例え：**\nクラスの出席を取るとき、先生は名簿の1人目から順番に名前を呼んでいきますよね。「名前を呼ぶ」という同じ作業を、全員分くり返しています。\n\nプログラムでも、配列の中身を一つずつ順番に処理するときにループを使います。手作業でやるよりずっと楽で速いです！"
        },
        {
          "title": "foreach（フォーイーチ）",
          "image": "/illustrations/common/loop.png",
          "content": "# 配列を順番に処理する\n\n配列の中身を最初から最後まで順番に取り出すときは、**foreach**（フォーイーチ）を使うと便利です。「for each」は「それぞれに対して」という意味です。\n\n**コード例（名前を順番に表示）：**\n```csharp\nstring[] names = {\"太郎\", \"花子\"};\nforeach (string name in names)\n{\n    Console.WriteLine(name);\n}\n```\n=> 太郎\n=> 花子\n\n**解説：**\n1. `foreach (string name in names)` で「namesの中身を1つずつnameに入れて」と指示\n2. 1回目のループ：nameに「太郎」が入り、表示される\n3. 2回目のループ：nameに「花子」が入り、表示される\n4. 全部終わったらループを抜ける"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 名前の配列を作る\nstring[] names = {\"太郎\", \"花子\"};\n// 順番に取り出すループ\nforeach (string name in names)\n{\n    // 取り出した名前を表示\n    Console.WriteLine(name);\n}",
      "holeyCode": "// 名前の配列を作る\nstring[] names = {\"___\", \"___\"};\n// 順番に取り出すループ\n___ (string name in names)\n{\n    // 取り出した名前を表示\n    Console.WriteLine(___);\n}",
      "correctLines": [
        "// 名前の配列を作る",
        "string[] names = {\"太郎\", \"花子\"};",
        "// 順番に取り出すループ",
        "foreach (string name in names)",
        "{",
        "    // 取り出した名前を表示",
        "    Console.WriteLine(name);",
        "}"
      ],
      "lineHints": [null, "太郎、花子 の順で入力しましょう。", null, "foreach を使います。", null, null, "変数名 name を入力します。", null],
      "candidates": {
        "keywords": ["foreach", "for"],
        "variables": ["name"],
        "strings": ["太郎", "花子"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "太郎\n花子\n"
        }
      ]
    },
    {
      "title": "名前で探しましょう「Dictionary」",
      "description": "Dictionaryを使うと、名前（キー）を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 12,
      "tutorialSlides": [
        {
          "title": "Dictionary（ディクショナリー）とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索！\n\n「名前」と「データ」をセットにして保存できるのが**Dictionary**（ディクショナリー）です。Dictionaryは英語で「辞書」という意味です。\n\n**身近な例え：**\n電話帳を思い浮かべてください。「太郎」という名前を調べると「090-1234-5678」という電話番号が見つかりますよね。Dictionaryも同じで、キーワード（名前）を使って目的のデータ（値）をすぐに見つけられます。\n\n**用語：**\n- **キー（Key）**: 検索に使う「名前」の部分\n- **値（Value）**: キーに対応する「データ」の部分"
        },
        {
          "title": "使い方の例",
          "image": "/illustrations/common/dict.png",
          "content": "# Dictionaryの作り方と使い方\n\n**コード例（くだものと色の辞書を作る）：**\n```csharp\n// <キーの型, 値の型> を指定して作る\nvar dict = new Dictionary<string, string>();\ndict[\"りんご\"] = \"赤\";   // キー「りんご」に値「赤」を登録\ndict[\"バナナ\"] = \"黄\";   // キー「バナナ」に値「黄」を登録\n\nConsole.WriteLine(dict[\"りんご\"]); // => 赤\n```\n\n**解説：**\n1. `Dictionary<string, string>` で「キーも値も文字」の辞書を作る\n2. `dict[\"りんご\"] = \"赤\"` で「りんごの色は赤」と登録\n3. `dict[\"りんご\"]` で「りんごの色」を取り出す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Dictionaryを作る\nvar fruits = new Dictionary<string, string>();\n// キーと値を追加\nfruits[\"みかん\"] = \"オレンジ\";\n// キーを指定して値を取り出す\nConsole.WriteLine(fruits[\"みかん\"]);",
      "holeyCode": "// Dictionaryを作る\nvar fruits = new ___<string, string>();\n// キーと値を追加\nfruits[\"___\"] = \"___\";\n// キーを指定して値を取り出す\nConsole.WriteLine(fruits[\"___\"]);",
      "correctLines": [
        "// Dictionaryを作る",
        "var fruits = new Dictionary<string, string>();",
        "// キーと値を追加",
        "fruits[\"みかん\"] = \"オレンジ\";",
        "// キーを指定して値を取り出す",
        "Console.WriteLine(fruits[\"みかん\"]);"
      ],
      "lineHints": [null, "Dictionary を使います。", null, "キーは みかん、値は オレンジ です。", null, "キー みかん を入力します。"],
      "candidates": {
        "types": ["Dictionary", "List"],
        "strings": ["みかん", "オレンジ"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "オレンジ\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう「メソッド」",
      "description": "自分だけのメソッド（関数）を作ってみましょう。static void で定義します。",
      "difficulty": "easy",
      "orderIndex": 13,
      "tutorialSlides": [
        {
          "title": "メソッド（関数）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# オリジナルの技を作ろう\n\nよく使う処理をひとまとめにして、名前をつけることができます。これを**メソッド**（または関数：かんすう）と呼びます。\n\n**身近な例え：**\n料理のレシピを思い浮かべてください。「カレーの作り方」というレシピがあれば、いつでも同じ手順でカレーが作れますよね。メソッドも同じで、「処理の手順」に名前をつけておいて、いつでも呼び出せるようにします。\n\n**メリット：**\n- 同じコードを何度も書かなくていい\n- プログラムが読みやすくなる\n- 修正するときも1か所直せばOK"
        },
        {
          "title": "メソッドを定義",
          "image": "/illustrations/common/function.png",
          "content": "# メソッドの作り方\n\nC#でメソッドを作るときは、`static void` と書いてから、メソッドの名前をつけます。\n\n**用語の意味：**\n- `static`（スタティック）: 「このまま使える」という意味（詳しくは後で学びます）\n- `void`（ボイド）: 「結果を返さない」という意味（「空っぽ」のイメージ）\n\n**コード例（あいさつメソッドを作る）：**\n```csharp\n// メソッドを定義（作る）\nstatic void Greet()\n{\n    Console.WriteLine(\"こんにちは\");\n}\n\n// メソッドを呼び出す（使う）\nGreet();\n```\n=> こんにちは\n\n**解説：**\n1. `static void Greet()` でGreetという名前のメソッドを作る\n2. `{ }` の中に、やりたい処理を書く\n3. `Greet();` でメソッドを呼び出して実行する"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Greetというメソッドを定義\nstatic void Greet()\n{\n    // こんにちは と表示\n    Console.WriteLine(\"こんにちは\");\n}\n// メソッドを呼び出す\nGreet();",
      "holeyCode": "// Greetというメソッドを定義\nstatic ___ Greet()\n{\n    // こんにちは と表示\n    Console.WriteLine(\"___\");\n}\n// メソッドを呼び出す\n___();",
      "correctLines": [
        "// Greetというメソッドを定義",
        "static void Greet()",
        "{",
        "    // こんにちは と表示",
        "    Console.WriteLine(\"こんにちは\");",
        "}",
        "// メソッドを呼び出す",
        "Greet();"
      ],
      "lineHints": [null, "戻り値がないので void を使います。", null, null, "文字列をコンソールに出力し、改行します。", null, null, "関数（Greet）を呼び出して実行します。"],
      "candidates": {
        "keywords": ["void", "int"],
        "methods": ["Greet"],
        "strings": ["こんにちは"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    }
  ]
};