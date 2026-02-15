export const perl2Data = {
  "language": "perl",
  "lessonId": "perl-2",
  "lessonTitle": "Perl II - 正規表現とリファレンス",
  "lessonDescription": "Perlの最強機能「正規表現」とデータ構造を学びます。テキスト処理の達人になりましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "正規表現でマッチング",
      "content": "Perlは正規表現が言語に組み込まれています。\\n\\n```perl\\nmy $text = \"Hello World\";\\n\\n# =~ でパターンマッチング\\nif ($text =~ /world/i) {\\n    print \"found\\n\";\\n}\\n```\\n\\n`/パターン/` で正規表現を書き、`i` フラグで大文字小文字を無視します。"
    },
    {
      "title": "正規表現で置換",
      "content": "`s/パターン/置換/` で文字列を置換します。\\n\\n```perl\\nmy $text = \"cat\";\\n$text =~ s/cat/dog/;\\nprint \"$text\\n\";\\n```\\n\\n=> dog\\n\\n`g` フラグを付けると全ての箇所を置換します。\\n\\n```perl\\n$text =~ s/a/x/g;  # 全ての a を x に\\n```"
    },
    {
      "title": "配列とハッシュ",
      "content": "`@` で配列、`%` でハッシュを宣言します。\\n\\n```perl\\n# 配列\\nmy @fruits = (\"りんご\", \"バナナ\");\\nprint $fruits[0];\\n\\n# ハッシュ\\nmy %scores = (\"math\" => 90);\\nprint $scores{\"math\"};\\n```\\n\\n=> りんご\\n\\n=> 90\\n\\nアクセス時は `$` を使うことに注意！"
    },
    {
      "title": "サブルーチン",
      "content": "`sub` でサブルーチン（関数）を定義します。\\n\\n```perl\\nsub double {\\n    my $n = shift;  # 引数を取得\\n    return $n * 2;\\n}\\n\\nprint double(5);\\n```\\n\\n=> 10\\n\\n`@_` に全引数が入り、`shift` で1つずつ取り出します。"
    },
    {
      "title": "リファレンス",
      "content": "`\\` でリファレンス（参照）を作成します。\\n\\n```perl\\nmy @nums = (10, 20);\\nmy $ref = \\@nums;  # 配列への参照\\n\\nprint $ref->[1];\\n\\n# 無名配列リファレンス\\nmy $aref = [5, 10, 15];\\nprint $aref->[2];\\n```\\n\\n=> 20\\n\\n=> 15\\n\\n`->` でリファレンス経由でアクセスします。"
    },
    {
      "title": "map と grep",
      "content": "`map` で変換、`grep` で抽出します。\\n\\n```perl\\nmy @nums = (1, 2, 3);\\n\\n# map: 各要素を変換\\nmy @squared = map { $_ * $_ } @nums;\\n```\\n\\n=> (1, 4, 9)\\n\\n```\\n# grep: 条件に合う要素を抽出\\nmy @big = grep { $_ >= 2 } @nums;\\n```\\n\\n=> (2, 3)\\n\\n`$_` は現在の要素を表す特殊変数です。"
    }
  ],
  "exercises": [
    {
      "title": "正規表現でマッチング",
      "description": "パターンを使って文字列を検索・置換する方法を学びます",
      "tutorialSlides": [
        {
          "title": "正規表現とは？",
          "content": "# 文字のパターンを探す魔法\\n\\n**正規表現**（Regular Expression＝レギュラー・エクスプレッション）は、文字列の中から特定のパターンを探すための特別な書き方です。\\n\\n**たとえば：** 「hello」という言葉を探したい、「数字が3つ並んでいる」ところを探したい、といった「パターン」を指定して検索できます。\\n\\nPerlは正規表現が最も得意な言語として有名です！"
        },
        {
          "title": "=~ でパターンマッチング",
          "content": "# /パターン/ の書き方\\n\\n**このコードは何をしているの？**\\n```perl\\nif ($text =~ /hello/) {\\n    print \"found\\n\";\\n}\\n```\\n\\n**解説：**\\n1. `$text =~ /hello/` で「$text の中に hello がある？」をチェック\\n2. `=~` → マッチング演算子（「〜に合う？」の意味）\\n3. `/hello/` → 探したいパターン\\n4. 見つかったら \"found\" と表示\\n\\n**ポイント：** パターンは `/` と `/` で囲みます。"
        }
      ],
      "correctCode": "# 変数に文字列を代入\\nmy $text = \"Hello World\";\\n# =~でパターンマッチング（iで大文字小文字を無視）\\nif ($text =~ /world/i) {\\n    # printで出力\\n    print \"found\\n# 文を実行\\n\";\\n# ブロックを閉じる\\n}",
      "holeyCode": "# 変数に文字列を代入\\nmy $___=___\\n# =~でパターンマッチング（iで大文字小文字を無視）\\nif (___=~/___/___) {\\n    # printで出力\\n    ___\\n# 文を実行\\n___\\n# ブロックを閉じる\\n___",
      "correctLines": [
          "# 変数に文字列を代入",
          "my $text = \"Hello World\";",
          "# =~でパターンマッチング（iで大文字小文字を無視）",
          "if ($text =~ /world/i) {",
          "    # printで出力",
          "    print \"found\\n# 文を実行\\n\";",
          "# ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          "\\\"",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "=~"
          ],
          "others": ["\"Hello World\";", "print \"found", "$text", "text", "world", "world/i", "i", "}", "\";", "print \"found\\n# 文を実行\\n\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "found\\n"
          }
        ]
      },
    {
      "title": "正規表現で置換",
      "description": "パターンを使って文字列を検索・置換する方法を学びます",
      "tutorialSlides": [
        {
          "title": "置換とは？",
          "content": "# 文字を入れ替える\\n\\n**置換**（Substitution＝サブスティテューション）とは、ある文字を別の文字に入れ替えることです。\\n\\n**たとえば：** 作文で「りんご」を全部「みかん」に書き換えたいとき、手作業だと大変ですよね。置換を使えば一瞬で全部書き換えられます。\\n\\nPerlでは `s///` という演算子を使います。"
        },
        {
          "title": "s/古い/新しい/ の書き方",
          "content": "# s は substitute の略\\n\\n**このコードは何をしているの？**\\n```perl\\nmy $text = \"hello\";\\n$text =~ s/hello/hi/;\\nprint $text; # hi\\n```\\n\\n**解説：**\\n1. `$text` に \"hello\" を入れる\\n2. `s/hello/hi/` で \"hello\" を \"hi\" に置換\\n3. `$text` の中身が \"hi\" に変わる\\n\\n**書き方：** `s/探すパターン/置き換える文字/`\\n\\n**全部置換するには：** 最後に `g` をつける（`s/a/b/g`）"
        }
      ],
      "correctCode": "# 変数に文字列を代入\\nmy $text = \"cat\";\\n# sで置換\\n$text =~ s/cat/dog/;\\n# printで出力\\nprint \"$text\\n\";",
      "holeyCode": "# 変数に文字列を代入\\nmy $___=___\\n# sで置換\\n$___=~ s/___/___/;\\n# printで出力\\n___\\n# 文を実行\\n___",
      "correctLines": [
          "# 変数に文字列を代入",
          "my $text = \"cat\";",
          "# sで置換",
          "$text =~ s/cat/dog/;",
          "# printで出力",
          "print \"$text\\n\";"
        ],
      "lineHints": [
          null,
          "\\\"\\\"",
          null,
          "",
          null,
          "\\\""
        ],
        "candidates": {
          "keywords": [
            "s"
          ],
          "others": ["\"cat\";", "print \"$text", "text", "cat", "dog", "\";", "print \"$text\\n\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "dog\\n"
          }
        ]
      },
    {
      "title": "配列を使おう",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "配列の復習",
          "content": "# 複数の値を順番に入れる\\n\\n**配列**（Array＝アレイ）は、複数の値を順番に格納するデータ構造です。\\n\\n**たとえば：** ロッカーの1番、2番、3番...に物を入れるようなイメージです。\\n\\nPerlでは配列名の前に `@`（アットマーク）をつけます。"
        },
        {
          "title": "@ と $ の使い分け",
          "content": "# 全体 vs 1つの要素\\n\\n| 書き方 | 意味 |\\n|--------|------|\\n| `@array` | 配列全体 |\\n| `$array[番号]` | 1つの要素 |\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @nums = (1, 2, 3);\\nprint $nums[0]; # 1\\n```\\n\\n**解説：**\\n- `@nums` で配列全体を作る\\n- `$nums[0]` で1番目（0番目）の要素を取得\\n\\n**注意：** 1つの値を取り出すときは `$` を使います！"
        }
      ],
      "correctCode": "# @で配列を宣言\\nmy @fruits = (\"りんご\", \"バナナ\");\\n# printで出力\\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "# @で配列を宣言\\nmy @___=___\\n# printで出力\\n___ $___[___] . \"\\n# 文を実行\\n___",
      "correctLines": [
          "# @で配列を宣言",
          "my @fruits = (\"りんご\", \"バナナ\");",
          "# printで出力",
          "print $fruits[1] . \"\\n\";"
        ],
      "lineHints": [
          null,
          "\\\"\\\"\\\"\\\"",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "@"
          ],
          "others": ["print", "fruits", "(\"りんご\", \"バナナ\");", "1", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "バナナ\\n"
          }
        ]
      },
    {
      "title": "ハッシュを使おう",
      "description": "キーと値のペアでデータを管理する方法を学びます",
      "tutorialSlides": [
        {
          "title": "ハッシュの復習",
          "content": "# 名前で値を管理する\\n\\n**ハッシュ**（Hash）は、「キー（名前）」と「値」のペアでデータを格納します。\\n\\n**配列との違い：**\\n- 配列 → 番号で管理（0番目、1番目...）\\n- ハッシュ → 名前で管理（\"name\", \"age\"...）\\n\\n**たとえば：** 電話帳のように「田中さん → 090-xxxx」と名前で検索できます。\\n\\nPerlではハッシュ名の前に `%`（パーセント）をつけます。"
        },
        {
          "title": "% と $ の使い分け",
          "content": "# 全体 vs 1つの値\\n\\n| 書き方 | 意味 |\\n|--------|------|\\n| `%hash` | ハッシュ全体 |\\n| `$hash{キー}` | 1つの値 |\\n\\n**このコードは何をしているの？**\\n```perl\\nmy %person = (\"name\" => \"Taro\");\\nprint $person{\"name\"}; # Taro\\n```\\n\\n**解説：**\\n- `%person` でハッシュ全体を作る\\n- `$person{\"name\"}` で \"name\" キーの値を取得\\n\\n**注意：** 1つの値を取り出すときは `$` + `{ }` を使います！"
        }
      ],
      "correctCode": "# %でハッシュを宣言\\nmy %scores = (\"math\" => 90);\\n# printで出力\\nprint $scores{\"math\"} . \"\\n\";",
      "holeyCode": "# %でハッシュを宣言\\nmy %___=___\\n# printで出力\\n___ $___{___} . \"\\n# 文を実行\\n___",
      "correctLines": [
          "# %でハッシュを宣言",
          "my %scores = (\"math\" => 90);",
          "# printで出力",
          "print $scores{\"math\"} . \"\\n\";"
        ],
      "lineHints": [
          null,
          "\\\"\\\"",
          null,
          "\\\"\\\"\\\"\\\""
        ],
        "candidates": {
          "operators": [
            "%"
          ],
          "others": ["print", "scores", "(\"math\" => 90);", "\"math\"", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "90\\n"
          }
        ]
      },
    {
      "title": "foreach でループ",
      "description": "同じ処理を何度も実行する「繰り返し」を学びます",
      "tutorialSlides": [
        {
          "title": "foreach（フォーイーチ）の復習",
          "content": "# 配列を1つずつ処理する\\n\\n**foreach**（フォーイーチ＝「それぞれについて」）は、配列の各要素を順番に処理するループです。\\n\\n**たとえば：** クラスの出席を取るとき、名簿の名前を1人ずつ読み上げるようなイメージです。"
        },
        {
          "title": "foreach の書き方",
          "content": "# foreach my $変数 (@配列)\\n\\n**このコードは何をしているの？**\\n```perl\\nforeach my $n (@nums) {\\n    print \"$n\\n\";\\n}\\n```\\n\\n**解説：**\\n1. `@nums` から要素を1つ取り出す\\n2. それを `$n` に入れる\\n3. `{ }` の中を実行\\n4. 次の要素に進む\\n5. 全部終わるまで繰り返す\\n\\n**ポイント：** `for` と書いても同じ動きをします（Perlでは同じ）。"
        }
      ],
      "correctCode": "# 配列を宣言（1, 2, 3）\\nmy @nums = (1, 2, 3);\\n# foreachで各要素を処理\\nforeach my $n (@nums) {\\n    # printで出力\\n    print \"$n\\n\";\\n}",
      "holeyCode": "# 配列を宣言（1, 2, 3）\\nmy @___=___\\n# foreachで各要素を処理\\nforeach my $___ (@___) {\\n    # printで出力\\n    ___\\n# 文を実行\\n___\\n# ブロックを閉じる\\n___",
      "correctLines": [
          "# 配列を宣言（1, 2, 3）",
          "my @nums = (1, 2, 3);",
          "# foreachで各要素を処理",
          "foreach my $n (@nums) {",
          "    # printで出力",
          "    print \"$n\\n\";",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "\\\"",
          null
        ],
        "candidates": {
          "keywords": [
            "foreach"
          ],
          "others": ["(1, 2, 3);", "print \"$n", "nums", "n", "}", "\";", "print \"$n\\n\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "サブルーチンを作ろう",
      "description": "サブルーチンを作ろうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "サブルーチンと引数",
          "content": "# 引数を受け取るサブルーチン\\n\\nPerlの **サブルーチン**（関数）は、引数を受け取って処理することができます。\\n\\n**たとえば：** 「名前を教えてくれたら、挨拶を返す」という機能を作れます。\\n\\n引数は特別な配列 `@_` に入ります。"
        },
        {
          "title": "shift で引数を取り出す",
          "content": "# @_ から1つずつ取り出す\\n\\n**このコードは何をしているの？**\\n```perl\\nsub greet {\\n    my $name = shift;\\n    print \"Hello, $name\\n\";\\n}\\ngreet(\"Taro\");\\n```\\n\\n**解説：**\\n1. `greet(\"Taro\")` で \"Taro\" が `@_` に入る\\n2. `shift` で `@_` の先頭を取り出す\\n3. `$name` に \"Taro\" が入る\\n4. \"Hello, Taro\" と表示\\n\\n**shift とは：** 配列の先頭を取り出すコマンド。`shift @_` の略です。"
        }
      ],
      "correctCode": "# subでdoubleサブルーチンを定義\\nsub double {\\n    # shiftで引数を取得\\n    my $n = shift;\\n    # returnで戻り値を返す\\n    return $n * 2;\\n}\\n# printで出力\\nprint double(5) . \"\\n\";",
      "holeyCode": "# subでdoubleサブルーチンを定義\\nsub ___ {\\n    # shiftで引数を取得\\n    my $___=___\\n    # returnで戻り値を返す\\n    return $___ * ___;\\n# ブロックを閉じる\\n___\\n# printで出力\\n___ ___(___) . \"\\n# 文を実行\\n___",
      "correctLines": [
          "# subでdoubleサブルーチンを定義",
          "sub double {",
          "    # shiftで引数を取得",
          "    my $n = shift;",
          "    # returnで戻り値を返す",
          "    return $n * 2;",
          "}",
          "# printで出力",
          "print double(5) . \"\\n\";"
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
          null
        ],
        "candidates": {
          "keywords": [
            "sub", "return"
          ],
          "others": ["shift;", "print", "double", "n", "2", "5", "}", "\";", "# printで出力"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "リファレンスを学ぼう",
      "description": "リファレンスを学ぼうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "リファレンスとは？",
          "content": "# 変数への「参照」\\n\\n**リファレンス**（Reference＝リファレンス＝「参照」）は、変数がどこにあるかを示す「住所」のようなものです。\\n\\n**たとえば：** 友達の家に遊びに行くとき、住所を知っていれば直接行けますよね。リファレンスは変数の「住所メモ」のようなものです。\\n\\n`\\`（バックスラッシュ）をつけるとリファレンスが作れます。"
        },
        {
          "title": "\\ と -> の使い方",
          "content": "# リファレンスの作成とアクセス\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @arr = (1, 2, 3);\\nmy $ref = \\@arr;\\nprint $ref->[0]; # 1\\n```\\n\\n**解説：**\\n1. `@arr` に配列を作る\\n2. `\\@arr` で配列への「参照」を作る\\n3. `$ref` にその参照を入れる\\n4. `$ref->[0]` で参照先の0番目にアクセス\\n\\n**ポイント：**\\n- `\\` → リファレンスを作る\\n- `->` → リファレンス経由でアクセス"
        }
      ],
      "correctCode": "# 配列を宣言（10, 20）\\nmy @nums = (10, 20);\\n# \\でリファレンスを作成\\nmy $ref = \\@nums;\\n# printで出力\\nprint $ref->[1] . \"\\n\";",
      "holeyCode": "# 配列を宣言（10, 20）\\nmy @___=___\\n# \\でリファレンスを作成\\nmy $___=\\\\@___;\\n# printで出力\\n___ $___->[___] . \"\\n# 文を実行\\n___",
      "correctLines": [
          "# 配列を宣言（10, 20）",
          "my @nums = (10, 20);",
          "# \\でリファレンスを作成",
          "my $ref = \\@nums;",
          "# printで出力",
          "print $ref->[1] . \"\\n\";"
        ],
      "lineHints": [
          null,
          "",
          null,
          "\\\\",
          null,
          ""
        ],
        "candidates": {
          "operators": [
          ],
          "others": ["(10, 20);", "print", "nums", "@nums", "ref", "1", "\";", "\\@nums"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "無名配列リファレンス",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "無名配列とは？",
          "content": "# 名前なしで配列を作る\\n\\n**無名配列**（Anonymous Array＝アノニマス・アレイ）は、名前をつけずにその場で作る配列です。\\n\\n**普通の方法：**\\n```perl\\nmy @arr = (1, 2, 3);  # 名前は @arr\\nmy $ref = \\@arr;\\n```\\n\\n**無名配列：**\\n```perl\\nmy $ref = [1, 2, 3];  # 名前なし！\\n```\\n\\n`[ ]` で囲むだけで、リファレンスが直接作れます。"
        },
        {
          "title": "[ ] の使い方",
          "content": "# [ ] は配列リファレンスを返す\\n\\n**このコードは何をしているの？**\\n```perl\\nmy $ref = [1, 2, 3];\\nprint $ref->[0]; # 1\\n```\\n\\n**解説：**\\n1. `[1, 2, 3]` で無名配列のリファレンスを作る\\n2. `$ref` にそのリファレンスを入れる\\n3. `$ref->[0]` で1番目の要素にアクセス\\n\\n**便利な使い方：** 一時的なデータを作りたいときに名前をつけなくて済みます。"
        }
      ],
      "correctCode": "# 無名配列（5, 10, 15の順）を作成しrefに代入\\nmy $ref = [5, 10, 15];\\n# 3番目の要素を出力\\nprint $ref->[2] . \"\\n\";",
      "holeyCode": "# 無名配列（5, 10, 15の順）を作成しrefに代入\\nmy $___=___\\n# 3番目の要素を出力\\n___ $___->[___] . \"\\n# 文を実行\\n___",
      "correctLines": [
          "# 無名配列（5, 10, 15の順）を作成しrefに代入",
          "my $ref = [5, 10, 15];",
          "# 3番目の要素を出力",
          "print $ref->[2] . \"\\n\";"
        ],
      "lineHints": [
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "operators": [
            "["
          ],
          "others": ["print", "ref", "[5, 10, 15];", "2", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "map で変換",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "map（マップ）とは？",
          "content": "# 各要素を変換して新しい配列を作る\\n\\n**map**（マップ＝「写像」）は、配列の各要素に処理を適用して、新しい配列を作ります。\\n\\n**たとえば：** 1, 2, 3 という数字があって、全部を2倍にしたいとき、map を使えば一発で 2, 4, 6 という新しい配列が作れます。\\n\\nforeachと似ていますが、mapは結果を配列として返します。"
        },
        {
          "title": "map { } @配列 の書き方",
          "content": "# $_ は現在の要素\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @doubled = map { $_ * 2 } (1, 2, 3);\\n# (2, 4, 6)\\n```\\n\\n**解説：**\\n1. (1, 2, 3) の各要素を処理\\n2. `$_` に1が入る → `$_ * 2` = 2\\n3. `$_` に2が入る → `$_ * 2` = 4\\n4. `$_` に3が入る → `$_ * 2` = 6\\n5. 結果 (2, 4, 6) が `@doubled` に入る\\n\\n**$_ とは：** Perlの特別な変数で、「現在処理中の要素」を表します。"
        }
      ],
      "correctCode": "# 配列を宣言（1, 2, 3）\\nmy @nums = (1, 2, 3);\\n# numsの各要素を2乗してsquaredに代入\\nmy @squared = map { $_ * $_ } @nums;\\n# printで出力\\nprint \"@squared\\n\";",
      "holeyCode": "# 配列を宣言（1, 2, 3）\\nmy @___=___\\n# numsの各要素を2乗してsquaredに代入\\nmy @___=___ { $___ * $___ } @___;\\n# printで出力\\n___\\n# 文を実行\\n___",
      "correctLines": [
          "# 配列を宣言（1, 2, 3）",
          "my @nums = (1, 2, 3);",
          "# numsの各要素を2乗してsquaredに代入",
          "my @squared = map { $_ * $_ } @nums;",
          "# printで出力",
          "print \"@squared\\n\";"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "\\\""
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["(1, 2, 3);", "print \"@squared", "nums", "@nums", "squared", "_", "_ }", "_ } @nums", "\";", "print \"@squared\\n\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1 4 9\\n"
          }
        ]
      },
    {
      "title": "grep でフィルタ",
      "description": "条件に合う要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "grep（グレップ）とは？",
          "content": "# 条件に合う要素だけを選ぶ\\n\\n**grep**（グレップ）は、条件を満たす要素だけを選んで新しい配列を作ります。\\n\\n**たとえば：** 1, 2, 3, 4, 5 の中から「3より大きい数だけ」選びたいとき、grep を使えば 4, 5 だけの配列が作れます。\\n\\nmapが「変換」なら、grepは「選別」です。"
        },
        {
          "title": "grep { 条件 } @配列 の書き方",
          "content": "# 条件が真の要素だけ残る\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @big = grep { $_ > 3 } (1, 2, 3, 4, 5);\\n# (4, 5)\\n```\\n\\n**解説：**\\n1. (1, 2, 3, 4, 5) の各要素をチェック\\n2. `$_ > 3` の条件で判定\\n3. 1, 2, 3 は条件を満たさない → 除外\\n4. 4, 5 は条件を満たす → 残る\\n5. 結果 (4, 5) が `@big` に入る\\n\\n**mapとの違い：**\\n- map → 要素を変換\\n- grep → 要素を選別"
        }
      ],
      "correctCode": "# 配列を宣言（1, 2, 3, 4, 5）\\nmy @nums = (1, 2, 3, 4, 5);\\n# grepで条件に合う要素を抽出\\nmy @result = grep { $_ >= 3 } @nums;\\n# printで出力\\nprint \"@result\\n\";",
      "holeyCode": "# 配列を宣言（1, 2, 3, 4, 5）\\nmy @___=___\\n# grepで条件に合う要素を抽出\\nmy @___=___ { $___ >= ___ } @___;\\n# printで出力\\n___\\n# 文を実行\\n___",
      "correctLines": [
          "# 配列を宣言（1, 2, 3, 4, 5）",
          "my @nums = (1, 2, 3, 4, 5);",
          "# grepで条件に合う要素を抽出",
          "my @result = grep { $_ >= 3 } @nums;",
          "# printで出力",
          "print \"@result\\n\";"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "\\\""
        ],
        "candidates": {
          "functions": [
            "grep"
          ],
          "others": ["(1, 2, 3, 4, 5);", "print \"@result", "nums", "@nums", "result", "_", "3", "3 }", "3 } @nums", "p", "\";", "print \"@result\\n\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3 4 5\\n"
          }
        ]
      }
  ]
}
