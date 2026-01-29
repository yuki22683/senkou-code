export const perlData = {
  "language": "perl",
  "lessonId": "perl-1",
  "lessonTitle": "Perl (パール) に挑戦！",
  "lessonDescription": "文字をいじったり、整理したりするのが得意な言葉「Perl（パール）」のきほんを学びましょう。古くからたくさんの人に愛されている言葉です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
        "title": "画面に文字を出してみましょう",
        "description": "Perlを使って画面に文字を表示させてみましょう。print（プリント）という関数を使います。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "Perl（パール）とは？",
            "content": "# テキスト処理の達人！\n\n**Perl**（パール）は、文字や文章を扱うのがとても得意なプログラミング言語です。\n\n**名前の由来：** 「Pearl（真珠）」ではなく、「Practical Extraction and Report Language（実用的なデータ取り出しとレポートの言語）」の略です。\n\n**たとえば：** 大量のファイルの中から特定の言葉を探したり、文章を自動で書き換えたりするのが得意です。まるで文章整理の達人のようです。\n\n**トレードマーク：** ラクダ（キャメル）がシンボルです。"
          },
          {
            "title": "print で画面に文字を出す",
            "content": "# print（プリント）＝「印刷する」\n\n画面に文字を出したいときは、`print`（プリント＝印刷する）を使います。\n\n**書き方のルール：**\n1. `print` と書く\n2. 文字は `\" \"` で囲む\n3. 最後に `;`（セミコロン）をつける\n\n**大事なポイント：** Perlでは、命令の終わりに必ず `;` をつけます。日本語の「。」のようなものです。"
          },
          {
            "title": "\\n は改行の記号",
            "content": "# 改行（かいぎょう）って何？\n\n`\\n` は「改行」を意味する特別な記号です。\n\n**たとえば：** 作文で次の行に移るとき、Enterキーを押しますよね。`\\n` はそれと同じ役割をします。\n\n**このコードは何をしているの？**\n```perl\nprint \"表示したい文字\\n\";\n```\n\n**解説：**\n1. `print` で画面に出力\n2. \"表示したい文字\" が表示される\n3. `\\n` で次の行に移動\n4. `;` で命令終了"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n`print` を使って `Hello, World!` と表示させてみましょう。\n\n**完成形：**\n```perl\nprint \"Hello, World!\\n\";\n```\n\n**チェックポイント：**\n- `print` は小文字で書く\n- 文字は `\"` で囲む\n- 最後に `\\n` と `;` を忘れずに！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# printで出力\\nprint \"Hello, World!\\n\";",
        "holeyCode": "# printで出力\\\n___ \"Hello, World!\\\n\";",
        "correctLines": [
          "# printで出力",
          "print \"Hello, World!",
          "\";"
        ],
        "lineHints": [
          null,
          "画面に出す関数は `print` です。",
          null
        ],
        "candidates": {
          "functions": [
            "print"
          ],
          "strings": [
            "\"Hello, World!\\n\""
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, World!\n"
          }
        ]
      },
    {
        "title": "変数を使ってみましょう",
        "description": "Perlでは変数名の前に$（ドル記号）をつけます。変数に文字を入れて表示してみましょう。",
        "difficulty": "easy",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "変数（へんすう）とは？",
            "content": "# データを入れる箱\n\n**変数**（Variable＝ヴァリアブル）は、データを入れておく箱のようなものです。\n\n**たとえば：** 名前を書いた付箋を貼った箱に、中身を入れておくイメージです。後で「あの箱の中身は何だっけ？」と取り出せます。\n\nPerlには変数が3種類あり、それぞれ頭につける記号が違います。"
          },
          {
            "title": "スカラー変数 $",
            "content": "# $ で始まる変数\n\n**スカラー変数**（Scalar＝スカラー＝「1つの」）は、1つの値だけを入れる変数です。\n\n名前の前に `$`（ドル記号）をつけます。\n\n**このコードは何をしているの？**\n```perl\nmy $name = \"太郎\";\n```\n\n**解説：**\n- `my` → 「新しい変数を作ります」という宣言\n- `$name` → 変数の名前（$がついてる）\n- `=` → 代入（右の値を左に入れる）\n- `\"太郎\"` → 入れる値"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n変数 `$message` に `\"Perl\"` を入れて、それを表示しましょう。\n\n**ポイント：** `print` の中で変数を使うと、中身が表示されます。\n```perl\nprint \"$message\\n\";  # Perlと表示される\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 変数に文字を入れる\\nmy $message = \"Perl\";\\nprint \"$message\\n\";",
        "holeyCode": "# 変数に文字を入れる\\\nmy $___ = \"Perl\";\\\n___ \"$message\\\n\";",
        "correctLines": [
          "# 変数に文字を入れる",
          "my $message = \"Perl\";",
          "print \"$message",
          "\";"
        ],
        "lineHints": [
          null,
          "変数を宣言するキーワードを入力しましょう。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "my",
            "our",
            "local",
            "var"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Perl\n"
          }
        ]
      },
    {
        "title": "計算をしてみましょう",
        "description": "変数を使って数字の計算をしてみましょう。",
        "difficulty": "easy",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "Perlで計算しよう",
            "content": "# 数字の計算もできる！\n\nPerlでは、普通の算数と同じように計算ができます。\n\n| 記号 | 意味 | 例 |\n|------|------|----|\n| `+` | 足し算 | 5 + 3 = 8 |\n| `-` | 引き算 | 5 - 3 = 2 |\n| `*` | かけ算 | 5 * 3 = 15 |\n| `/` | わり算 | 6 / 3 = 2 |\n\n**たとえば：** 電卓と同じように使えます！"
          },
          {
            "title": "計算結果を変数に入れる",
            "content": "# 計算して保存\n\n**このコードは何をしているの？**\n```perl\nmy $sum = 10 + 5;\nprint $sum;  # 15が表示される\n```\n\n**解説：**\n1. `10 + 5` を計算 → 15になる\n2. その結果を `$sum` に入れる\n3. `print $sum` で 15 を表示"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n`$a` に7、`$b` に3を入れて、足し算の結果を `$sum` に入れて表示しましょう。\n\n**ヒント：** 変数同士の計算もできます！\n```perl\nmy $sum = $a + $b;  # 7 + 3 = 10\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 足し算する\\nmy $a = 7;\\nmy $b = 3;\\n# 2つの変数を足し算する\\nmy $sum = $a + $b;\\nprint \"$sum\\n\";",
        "holeyCode": "# 足し算する\\\nmy $___ = 7;\\\nmy $___ = 3;\\\n# 2つの変数を足し算する\\\nmy $___ = $a + $b;\\\n___ \"$sum\\\n\";",
        "correctLines": [
          "# 足し算する",
          "my $a = 7;",
          "my $b = 3;",
          "# 2つの変数を足し算する",
          "my $sum = $a + $b;",
          "print \"$sum",
          "\";"
        ],
        "lineHints": [
          null,
          "足し算の記号を入力しましょう。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "+",
            "-",
            "*",
            "/"
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
        "title": "文字をつなげましょう",
        "description": "ドット（.）を使って文字と文字をつなげてみましょう。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "文字の連結（れんけつ）",
            "content": "# 文字と文字をつなげる\n\n**連結**（Concatenation＝コンカテネーション）とは、文字と文字をくっつけることです。\n\n**たとえば：** 「おはよう」と「ございます」をつなげて「おはようございます」にするイメージです。\n\nPerlでは `.`（ドット）を使ってつなげます。"
          },
          {
            "title": ". でつなげる",
            "content": "# ドットは文字連結の記号\n\n**このコードは何をしているの？**\n```perl\nmy $result = \"Hello\" . \"World\";\n# 結果: \"HelloWorld\"\n```\n\n**解説：**\n1. \"Hello\" と \"World\" を `.` でつなげる\n2. 結果は \"HelloWorld\" になる\n3. それを `$result` に入れる\n\n**注意：** 数字の足し算は `+`、文字のつなげは `.` です。間違えないように！"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n`\"Hello, \"` と `\"Perl!\"` をつなげて表示しましょう。\n\n**ヒント：** `.` を使って2つの文字列をつなげます。\n```perl\n\"Hello, \" . \"Perl!\"  # Hello, Perl!\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 文字をつなげる\\nmy $greeting = \"Hello, \" . \"Perl!\";\\nprint \"$greeting\\n\";",
        "holeyCode": "# 文字をつなげる\\\nmy $___ = \"Hello, \" . \"Perl!\";\\\n___ \"$greeting\\\n\";",
        "correctLines": [
          "# 文字をつなげる",
          "my $greeting = \"Hello, \" . \"Perl!\";",
          "print \"$greeting",
          "\";"
        ],
        "lineHints": [
          null,
          "文字をつなげる記号を入力しましょう。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            ".",
            "+",
            ",",
            "&"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, Perl!\n"
          }
        ]
      },
    {
        "title": "配列を使いましょう",
        "description": "@（アットマーク）を使って、複数の値をまとめて入れる配列を作りましょう。",
        "difficulty": "easy",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "配列（はいれつ）とは？",
            "content": "# 複数の値をまとめて入れる箱\n\n**配列**（Array＝アレイ）は、複数の値をまとめて入れられる特別な変数です。\n\n**たとえば：** 引き出しが何段もあるタンスのようなものです。1段目に「りんご」、2段目に「みかん」、3段目に「ぶどう」...と入れられます。\n\nPerlでは配列の名前の前に `@`（アットマーク）をつけます。"
          },
          {
            "title": "@ で配列を作る",
            "content": "# 配列の作り方\n\n**このコードは何をしているの？**\n```perl\nmy @colors = (\"赤\", \"青\", \"緑\");\n```\n\n**解説：**\n- `@colors` → 配列の名前（@がついてる）\n- `( )` → カッコで囲む\n- `\"赤\", \"青\", \"緑\"` → カンマで区切って値を並べる\n\n**Perlの変数記号：**\n- `$` → スカラー（1つの値）\n- `@` → 配列（複数の値）"
          },
          {
            "title": "配列から値を取り出す",
            "content": "# $配列名[番号] で取り出す\n\n配列から1つの値を取り出すときは `$` を使います（1つの値だから）。\n\n**番号（インデックス）：**\n```\n@fruits = (\"りんご\", \"みかん\", \"ぶどう\")\n           [0]        [1]       [2]\n```\n\n**注意：** 番号は **0から** 始まります！\n\n**目標：** `@fruits` の最初の要素（りんご）を表示しましょう。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列を作る\\nmy @fruits = (\"りんご\", \"みかん\", \"ぶどう\");\\nprint \"$fruits[0]\\n\";",
        "holeyCode": "# 配列を作る\\\nmy @___ = (\"りんご\", \"みかん\", \"ぶどう\");\\\n___ \"$fruits[0]\\\n\";",
        "correctLines": [
          "# 配列を作る",
          "my @fruits = (\"りんご\", \"みかん\", \"ぶどう\");",
          "print \"$fruits[0]",
          "\";"
        ],
        "lineHints": [
          null,
          "配列名を入力しましょう。@をつけます。",
          null,
          null
        ],
        "candidates": {
          "variables": [
            "@fruits",
            "@colors",
            "$fruits",
            "$colors"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "りんご\n"
          }
        ]
      },
    {
        "title": "if文で条件分岐しましょう",
        "description": "ifを使って、条件が正しいときだけ実行するプログラムを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "if文（イフぶん）とは？",
            "content": "# 「もし〜なら」の条件分岐\n\n**if**（イフ＝「もし」）は、条件が正しいときだけ処理を実行します。\n\n**たとえば：** 「もし晴れたら、公園に行く」のような判断をコンピュータにさせることができます。\n\n日常の「もし〜なら〜する」をプログラムで書けるようになります！"
          },
          {
            "title": "if の書き方",
            "content": "# if (条件) { 処理 }\n\n**このコードは何をしているの？**\n```perl\nif ($age >= 18) {\n  print \"大人です\\n\";\n}\n```\n\n**解説：**\n1. `$age >= 18` が条件（18以上かどうか）\n2. 条件が正しければ `{ }` の中を実行\n3. 正しくなければスキップ\n\n**比較の記号：**\n- `==` 等しい\n- `>=` 以上\n- `<=` 以下\n- `>` より大きい\n- `<` より小さい"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n`$score` が100のとき、`'満点！'` と表示しましょう。\n\n**ヒント：** 「等しい」は `==` を使います（`=` は代入なので注意！）\n```perl\nif ($score == 100) { ... }\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 条件分岐\\nmy $score = 100;\\n# もしスコアが100なら\\nif ($score == 100) {\\n  print \"満点！\\n\";\\n}",
        "holeyCode": "# 条件分岐\\\nmy $___ = 100;\\\n# もしスコアが100なら\\\nif ($score ___ == ___) {\\\n  ___ \"満点！\\\n\";\\\n___",
        "correctLines": [
          "# 条件分岐",
          "my $score = 100;",
          "# もしスコアが100なら",
          "if ($score == 100) {",
          "  print \"満点！",
          "\";",
          "}"
        ],
        "lineHints": [
          null,
          "条件分岐のキーワードを入力しましょう。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "if",
            "unless",
            "while",
            "for"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "満点！\n"
          }
        ]
      },
    {
        "title": "if-elseを使いましょう",
        "description": "条件が正しくないときの処理もelseで書いてみましょう。",
        "difficulty": "easy",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "else（エルス）とは？",
            "content": "# 「そうでなければ」の処理\n\n**else**（エルス＝「それ以外」）は、if の条件に合わなかったときの処理を書きます。\n\n**たとえば：** 「もし晴れたら公園に行く、**そうでなければ**家で本を読む」のように、どちらの場合も対応できます。\n\nこれで「AかBか」の2択の処理が書けます！"
          },
          {
            "title": "if-else の書き方",
            "content": "# if ... else の構造\n\n**このコードは何をしているの？**\n```perl\nif ($age >= 18) {\n  print \"大人\\n\";\n} else {\n  print \"子供\\n\";\n}\n```\n\n**解説：**\n1. `$age >= 18` をチェック\n2. 条件が正しい → \"大人\" を表示\n3. 条件が間違い → \"子供\" を表示\n\n**ポイント：** 必ずどちらかが実行されます。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n`$num` が10以上なら `'大きい'`、そうでなければ `'小さい'` と表示しましょう。\n\n**ヒント：** `$num = 5` なので、10以上ではありません。「小さい」が表示されるはずです。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# if-else\\nmy $num = 5;\\nif ($num >= 10) {\\n  print \"大きい\\n\";\\n# そうでなければ\\n} else {\\n  print \"小さい\\n\";\\n}",
        "holeyCode": "# if-else\\\nmy $___ = 5;\\\nif ($num ___ >= ___) {\\\n  ___ \"大きい\\\n\";\\\n# そうでなければ\\\n} ___ {\\\n  ___ \"小さい\\\n\";\\\n___",
        "correctLines": [
          "# if-else",
          "my $num = 5;",
          "if ($num >= 10) {",
          "  print \"大きい",
          "\";",
          "# そうでなければ",
          "} else {",
          "  print \"小さい",
          "\";",
          "}"
        ],
        "lineHints": [
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
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
            "else",
            "elsif",
            "then",
            "otherwise"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "小さい\n"
          }
        ]
      },
    {
        "title": "foreachでループしましょう",
        "description": "foreachを使って配列の要素を順番に処理しましょう。",
        "difficulty": "easy",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "foreach（フォーイーチ）とは？",
            "content": "# 配列を1つずつ処理する\n\n**foreach**（フォーイーチ＝「それぞれについて」）は、配列の要素を1つずつ取り出して処理します。\n\n**たとえば：** クラスの出席を取るとき、「田中さん」「佐藤さん」「鈴木さん」...と順番に名前を呼ぶようなイメージです。\n\n同じ処理を繰り返したいときに便利です。"
          },
          {
            "title": "foreach の書き方",
            "content": "# foreach my $変数 (@配列) { 処理 }\n\n**このコードは何をしているの？**\n```perl\nforeach my $item (@list) {\n  print \"$item\\n\";\n}\n```\n\n**解説：**\n1. `@list` から要素を1つ取り出す\n2. それを `$item` に入れる\n3. `{ }` の中の処理を実行\n4. 次の要素に進む\n5. 全部終わるまで繰り返す\n\n**ポイント：** 配列は `@` で始まりますが、1つの要素は `$` で受け取ります。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n配列 `@animals` の動物を順番に表示しましょう。\n\n**期待される結果：**\n```\n犬\n猫\n鳥\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列をループ\\nmy @animals = (\"犬\", \"猫\", \"鳥\");\\n# 配列の各要素について繰り返す\\nforeach my $animal (@animals) {\\n  print \"$animal\\n\";\\n}",
        "holeyCode": "# 配列をループ\\\nmy @___ = (\"犬\", \"猫\", \"鳥\");\\\n# 配列の各要素について繰り返す\\\nforeach my $animal (@___) {\\\n  ___ \"$animal\\\n\";\\\n___",
        "correctLines": [
          "# 配列をループ",
          "my @animals = (\"犬\", \"猫\", \"鳥\");",
          "# 配列の各要素について繰り返す",
          "foreach my $animal (@animals) {",
          "  print \"$animal",
          "\";",
          "}"
        ],
        "lineHints": [
          null,
          "配列をループするキーワードを入力しましょう。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "foreach",
            "for",
            "while",
            "until"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "犬\n猫\n鳥\n"
          }
        ]
      },
    {
        "title": "ハッシュを使いましょう",
        "description": "%（パーセント）を使って、キーと値のペアを保存するハッシュを作りましょう。",
        "difficulty": "easy",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "ハッシュとは？",
            "content": "# 名前と値のペアで保存\n\n**ハッシュ**（Hash＝ハッシュ）は、「名前（キー）」と「値」のペアでデータを保存できます。\n\n**たとえば：** 連絡帳のようなものです。「田中さん」→「090-xxxx」のように、名前をキーにして情報を探せます。\n\nPerlではハッシュの名前の前に `%`（パーセント）をつけます。\n\n**Perlの3つの変数記号：**\n- `$` → スカラー（1つの値）\n- `@` → 配列（複数の値、番号で管理）\n- `%` → ハッシュ（複数の値、名前で管理）"
          },
          {
            "title": "% でハッシュを作る",
            "content": "# ハッシュの作り方\n\n**このコードは何をしているの？**\n```perl\nmy %person = (\n  \"name\" => \"太郎\",\n  \"age\" => 10\n);\n```\n\n**解説：**\n- `%person` → ハッシュの名前\n- `\"name\" => \"太郎\"` → nameキーに\"太郎\"を保存\n- `=>` は「矢印」と呼び、キーと値をつなげます\n\n**値の取り出し方：**\n```perl\n$person{name}  # \"太郎\"\n$person{age}   # 10\n```"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\nハッシュ `%fruit` に `color => '赤'` を入れて、colorの値を表示しましょう。\n\n**ヒント：** 1つの値を取り出すときは `$` を使います。\n```perl\n$fruit{color}  # \"赤\"\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# ハッシュを作る\\nmy %fruit = (\"color\" => \"赤\");\\nprint \"$fruit{color}\\n\";",
        "holeyCode": "# ハッシュを作る\\\nmy %fruit = (\"___\" => \"赤\");\\\n___ \"$fruit{color}\\\n\";",
        "correctLines": [
          "# ハッシュを作る",
          "my %fruit = (\"color\" => \"赤\");",
          "print \"$fruit{color}",
          "\";"
        ],
        "lineHints": [
          null,
          "ハッシュ名を入力しましょう。%をつけます。",
          null,
          null
        ],
        "candidates": {
          "variables": [
            "%fruit",
            "%color",
            "@fruit",
            "$fruit"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "赤\n"
          }
        ]
      },
    {
        "title": "サブルーチンを作りましょう",
        "description": "subを使って、繰り返し使える処理（サブルーチン）を作りましょう。",
        "difficulty": "easy",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "サブルーチンとは？",
            "content": "# 処理をまとめて名前をつける\n\n**サブルーチン**（Subroutine＝サブルーチン）は、処理をまとめて名前をつけたものです。他の言語では「関数」と呼ばれることもあります。\n\n**たとえば：** 料理のレシピのようなものです。「カレーの作り方」というレシピを書いておけば、「カレーを作って！」と言うだけで同じ料理ができます。\n\n同じ処理を何度も書かなくて済むようになります！"
          },
          {
            "title": "sub でサブルーチンを作る",
            "content": "# sub 名前 { 処理 }\n\n**このコードは何をしているの？**\n```perl\nsub greet {\n  print \"こんにちは！\\n\";\n}\n\ngreet();  # 呼び出し\n```\n\n**解説：**\n1. `sub greet { ... }` でサブルーチンを定義（作る）\n2. この時点ではまだ実行されない\n3. `greet();` で呼び出すと実行される\n\n**ポイント：** `sub` は subroutine の略です。"
          },
          {
            "title": "やってみましょう！",
            "content": "# 目標\n\n`'Welcome!'` と表示するサブルーチン `welcome` を作って呼び出しましょう。\n\n**手順：**\n1. `sub welcome { ... }` で定義\n2. `welcome();` で呼び出し"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# サブルーチンを定義\\nsub welcome {\\n  print \"Welcome!\\n\";\\n}\\n\\n# 呼び出し\\nwelcome();",
        "holeyCode": "# サブルーチンを定義\\\nsub ___ {\\\n  ___ \"Welcome!\\\n\";\\\n___\\\n\\ ___\n# 呼び出し\\\n___();",
        "correctLines": [
          "# サブルーチンを定義",
          "sub welcome {",
          "  print \"Welcome!",
          "\";",
          "}",
          "",
          "# 呼び出し",
          "welcome();"
        ],
        "lineHints": [
          null,
          "サブルーチンを定義するキーワードを入力しましょう。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "sub",
            "def",
            "function",
            "fn"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Welcome!\n"
          }
        ]
      }
  ]
};
