export const perl2Data = {
  "language": "perl",
  "lessonId": "perl-2",
  "lessonTitle": "Perl II - 正規表現とリファレンス",
  "lessonDescription": "Perlの最強機能「正規表現」とデータ構造を学びます。テキスト処理の達人になりましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
        "title": "正規表現でマッチング",
        "description": "文字列がパターンに合うか調べる「正規表現」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "正規表現（せいきひょうげん）とは？",
            "content": "# 文字のパターンを探す魔法\n\n**正規表現**（Regular Expression＝レギュラー・エクスプレッション）は、文字列の中から特定のパターンを探すための特別な書き方です。\n\n**たとえば：** 「hello」という言葉を探したい、「数字が3つ並んでいる」ところを探したい、といった「パターン」を指定して検索できます。\n\nPerlは正規表現が最も得意な言語として有名です！"
          },
          {
            "title": "=~ でパターンマッチング",
            "content": "# /パターン/ の書き方\n\n**このコードは何をしているの？**\n```perl\nif ($text =~ /hello/) {\n    print \"found\\n\";\n}\n```\n\n**解説：**\n1. `$text =~ /hello/` で「$text の中に hello がある？」をチェック\n2. `=~` → マッチング演算子（「〜に合う？」の意味）\n3. `/hello/` → 探したいパターン\n4. 見つかったら \"found\" と表示\n\n**ポイント：** パターンは `/` と `/` で囲みます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 変数に文字列を代入\\nmy $text = \"hello world\";\\n# =~でパターンマッチング\\nif ($text =~ /world/) {\\n    # printで出力\\n    print \"found\\n\";\\n}",
        "holeyCode": "# 変数に文字列を代入\nmy $text = ___;\n# =~でパターンマッチング\nif ($text ___ /world/) {\n    # printで出力\n    ___ \"found\\n\";\n}",
        "correctLines": [
          "# 変数に文字列を代入",
          "my $text = \"hello world\";",
          "# =~でパターンマッチング",
          "if ($text =~ /world/) {",
          "    # printで出力",
          "    print \"found",
          "\";",
          "}"
        ],
        "lineHints": [
          null,
          "変数に文字列を代入します。",
          null,
          "=~ でパターンマッチングします。",
          null,
          "print で出力します。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "=~"
          ],
          "others": [
            "\"hello world\"",
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "found\n"
          }
        ]
      },
    {
        "title": "正規表現で置換",
        "description": "文字列を別の文字列に置き換える「置換」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "置換（ちかん）とは？",
            "content": "# 文字を入れ替える\n\n**置換**（Substitution＝サブスティテューション）とは、ある文字を別の文字に入れ替えることです。\n\n**たとえば：** 作文で「りんご」を全部「みかん」に書き換えたいとき、手作業だと大変ですよね。置換を使えば一瞬で全部書き換えられます。\n\nPerlでは `s///` という演算子を使います。"
          },
          {
            "title": "s/古い/新しい/ の書き方",
            "content": "# s は substitute の略\n\n**このコードは何をしているの？**\n```perl\nmy $text = \"hello\";\n$text =~ s/hello/hi/;\nprint $text; # hi\n```\n\n**解説：**\n1. `$text` に \"hello\" を入れる\n2. `s/hello/hi/` で \"hello\" を \"hi\" に置換\n3. `$text` の中身が \"hi\" に変わる\n\n**書き方：** `s/探すパターン/置き換える文字/`\n\n**全部置換するには：** 最後に `g` をつける（`s/a/b/g`）"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 変数に文字列を代入\\nmy $text = \"cat\";\\n# sで置換\\n$text =~ s/cat/dog/;\\n# printで出力\\nprint \"$text\\n\";",
        "holeyCode": "# 変数に文字列を代入\nmy $text = ___;\n# sで置換\n$text =~ ___/cat/dog/;\n# printで出力\n___ \"$text\\n\";",
        "correctLines": [
          "# 変数に文字列を代入",
          "my $text = \"cat\";",
          "# sで置換",
          "$text =~ s/cat/dog/;",
          "# printで出力",
          "print \"$text",
          "\";"
        ],
        "lineHints": [
          null,
          "変数に文字列を代入します。",
          null,
          "s で置換します。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "s"
          ],
          "others": [
            "\"cat\"",
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "dog\n"
          }
        ]
      },
    {
        "title": "配列を使おう",
        "description": "複数のデータを格納する「配列」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "配列（はいれつ）の復習",
            "content": "# 複数の値を順番に入れる\n\n**配列**（Array＝アレイ）は、複数の値を順番に格納するデータ構造です。\n\n**たとえば：** ロッカーの1番、2番、3番...に物を入れるようなイメージです。\n\nPerlでは配列名の前に `@`（アットマーク）をつけます。"
          },
          {
            "title": "@ と $ の使い分け",
            "content": "# 全体 vs 1つの要素\n\n| 書き方 | 意味 |\n|--------|------|\n| `@array` | 配列全体 |\n| `$array[番号]` | 1つの要素 |\n\n**このコードは何をしているの？**\n```perl\nmy @nums = (1, 2, 3);\nprint $nums[0]; # 1\n```\n\n**解説：**\n- `@nums` で配列全体を作る\n- `$nums[0]` で1番目（0番目）の要素を取得\n\n**注意：** 1つの値を取り出すときは `$` を使います！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# @で配列を宣言\\nmy @fruits = (\"apple\", \"banana\");\\n# printで出力\\nprint $fruits[1] . \"\\n\";",
        "holeyCode": "# @で配列を宣言\nmy ___fruits = (\"apple\", \"banana\");\n# printで出力\n___ $fruits[1] . \"\\n\";",
        "correctLines": [
          "# @で配列を宣言",
          "my @fruits = (\"apple\", \"banana\");",
          "# printで出力",
          "print $fruits[1] . \"",
          "\";"
        ],
        "lineHints": [
          null,
          "@ で配列を宣言します。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "@"
          ],
          "others": [
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "banana\n"
          }
        ]
      },
    {
        "title": "ハッシュを使おう",
        "description": "キーと値のペアを格納する「ハッシュ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "ハッシュの復習",
            "content": "# 名前で値を管理する\n\n**ハッシュ**（Hash）は、「キー（名前）」と「値」のペアでデータを格納します。\n\n**配列との違い：**\n- 配列 → 番号で管理（0番目、1番目...）\n- ハッシュ → 名前で管理（\"name\", \"age\"...）\n\n**たとえば：** 電話帳のように「田中さん → 090-xxxx」と名前で検索できます。\n\nPerlではハッシュ名の前に `%`（パーセント）をつけます。"
          },
          {
            "title": "% と $ の使い分け",
            "content": "# 全体 vs 1つの値\n\n| 書き方 | 意味 |\n|--------|------|\n| `%hash` | ハッシュ全体 |\n| `$hash{キー}` | 1つの値 |\n\n**このコードは何をしているの？**\n```perl\nmy %person = (\"name\" => \"Taro\");\nprint $person{\"name\"}; # Taro\n```\n\n**解説：**\n- `%person` でハッシュ全体を作る\n- `$person{\"name\"}` で \"name\" キーの値を取得\n\n**注意：** 1つの値を取り出すときは `$` + `{ }` を使います！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# %でハッシュを宣言\\nmy %scores = (\"math\" => 90);\\n# printで出力\\nprint $scores{\"math\"} . \"\\n\";",
        "holeyCode": "# %でハッシュを宣言\nmy ___scores = (\"math\" => 90);\n# printで出力\n___ $scores{\"math\"} . \"\\n\";",
        "correctLines": [
          "# %でハッシュを宣言",
          "my %scores = (\"math\" => 90);",
          "# printで出力",
          "print $scores{\"math\"} . \"",
          "\";"
        ],
        "lineHints": [
          null,
          "% でハッシュを宣言します。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "%"
          ],
          "others": [
            "print"
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
        "title": "foreach でループ",
        "description": "配列の各要素を処理する「foreach」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "foreach（フォーイーチ）の復習",
            "content": "# 配列を1つずつ処理する\n\n**foreach**（フォーイーチ＝「それぞれについて」）は、配列の各要素を順番に処理するループです。\n\n**たとえば：** クラスの出席を取るとき、名簿の名前を1人ずつ読み上げるようなイメージです。"
          },
          {
            "title": "foreach の書き方",
            "content": "# foreach my $変数 (@配列)\n\n**このコードは何をしているの？**\n```perl\nforeach my $n (@nums) {\n    print \"$n\\n\";\n}\n```\n\n**解説：**\n1. `@nums` から要素を1つ取り出す\n2. それを `$n` に入れる\n3. `{ }` の中を実行\n4. 次の要素に進む\n5. 全部終わるまで繰り返す\n\n**ポイント：** `for` と書いても同じ動きをします（Perlでは同じ）。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列を宣言（1, 2, 3）\\nmy @nums = (1, 2, 3);\\n# foreachで各要素を処理\\nforeach my $n (@nums) {\\n    # printで出力\\n    print \"$n\\n\";\\n}",
        "holeyCode": "# 配列を宣言（1, 2, 3）\nmy @nums = (1, 2, ___);\n# foreachで各要素を処理\n___ my $n (@nums) {\n    # printで出力\n    ___ \"$n\\n\";\n}",
        "correctLines": [
          "# 配列を宣言（1, 2, 3）",
          "my @nums = (1, 2, 3);",
          "# foreachで各要素を処理",
          "foreach my $n (@nums) {",
          "    # printで出力",
          "    print \"$n",
          "\";",
          "}"
        ],
        "lineHints": [
          null,
          "配列を宣言します。",
          null,
          "foreach で各要素を処理します。",
          null,
          "print で出力します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "foreach"
          ],
          "others": [
            "3",
            "print"
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
        "title": "サブルーチンを作ろう",
        "description": "処理をまとめる「サブルーチン」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "サブルーチンと引数",
            "content": "# 引数を受け取るサブルーチン\n\nPerlの **サブルーチン**（関数）は、引数を受け取って処理することができます。\n\n**たとえば：** 「名前を教えてくれたら、挨拶を返す」という機能を作れます。\n\n引数は特別な配列 `@_` に入ります。"
          },
          {
            "title": "shift で引数を取り出す",
            "content": "# @_ から1つずつ取り出す\n\n**このコードは何をしているの？**\n```perl\nsub greet {\n    my $name = shift;\n    print \"Hello, $name\\n\";\n}\ngreet(\"Taro\");\n```\n\n**解説：**\n1. `greet(\"Taro\")` で \"Taro\" が `@_` に入る\n2. `shift` で `@_` の先頭を取り出す\n3. `$name` に \"Taro\" が入る\n4. \"Hello, Taro\" と表示\n\n**shift とは：** 配列の先頭を取り出すコマンド。`shift @_` の略です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# subでサブルーチンを定義\\nsub double {\\n    # shiftで引数を取得\\n    my $n = shift;\\n    # returnで戻り値を返す\\n    return $n * 2;\\n}\\n# printで出力\\nprint double(5) . \"\\n\";",
        "holeyCode": "# subでサブルーチンを定義\n___ double {\n    # shiftで引数を取得\n    my $n = ___;\n    # returnで戻り値を返す\n    ___ $n * 2;\n}\n# printで出力\n___ double(5) . \"\\n\";",
        "correctLines": [
          "# subでサブルーチンを定義",
          "sub double {",
          "    # shiftで引数を取得",
          "    my $n = shift;",
          "    # returnで戻り値を返す",
          "    return $n * 2;",
          "}",
          "# printで出力",
          "print double(5) . \"",
          "\";"
        ],
        "lineHints": [
          null,
          "sub でサブルーチンを定義します。",
          null,
          "shift で引数を取り出します。",
          null,
          "return で戻り値を返します。",
          "print で出力します。",
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "sub"
          ],
          "others": [
            "shift",
            "return",
            "print"
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
        "title": "リファレンスを学ぼう",
        "description": "変数への「参照」を作る「リファレンス」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "リファレンスとは？",
            "content": "# 変数への「参照」\n\n**リファレンス**（Reference＝リファレンス＝「参照」）は、変数がどこにあるかを示す「住所」のようなものです。\n\n**たとえば：** 友達の家に遊びに行くとき、住所を知っていれば直接行けますよね。リファレンスは変数の「住所メモ」のようなものです。\n\n`\\`（バックスラッシュ）をつけるとリファレンスが作れます。"
          },
          {
            "title": "\\ と -> の使い方",
            "content": "# リファレンスの作成とアクセス\n\n**このコードは何をしているの？**\n```perl\nmy @arr = (1, 2, 3);\nmy $ref = \\@arr;\nprint $ref->[0]; # 1\n```\n\n**解説：**\n1. `@arr` に配列を作る\n2. `\\@arr` で配列への「参照」を作る\n3. `$ref` にその参照を入れる\n4. `$ref->[0]` で参照先の0番目にアクセス\n\n**ポイント：**\n- `\\` → リファレンスを作る\n- `->` → リファレンス経由でアクセス"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列を宣言（10, 20）\\nmy @nums = (10, 20);\\n# \\でリファレンスを作成\\nmy $ref = \\@nums;\\n# printで出力\\nprint $ref->[1] . \"\\n\";",
        "holeyCode": "# 配列を宣言（10, 20）\nmy @nums = (10, ___);\n# \\でリファレンスを作成\nmy $ref = ___@nums;\n# printで出力\n___ $ref->[1] . \"\\n\";",
        "correctLines": [
          "# 配列を宣言（10, 20）",
          "my @nums = (10, 20);",
          "# \\でリファレンスを作成",
          "my $ref = \\@nums;",
          "# printで出力",
          "print $ref->[1] . \"",
          "\";"
        ],
        "lineHints": [
          null,
          "配列を宣言します。",
          null,
          "\\ でリファレンスを作ります。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "\\"
          ],
          "others": [
            "20",
            "print"
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
        "title": "無名配列リファレンス",
        "description": "その場で配列を作る「無名配列」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "無名配列（むめいはいれつ）とは？",
            "content": "# 名前なしで配列を作る\n\n**無名配列**（Anonymous Array＝アノニマス・アレイ）は、名前をつけずにその場で作る配列です。\n\n**普通の方法：**\n```perl\nmy @arr = (1, 2, 3);  # 名前は @arr\nmy $ref = \\@arr;\n```\n\n**無名配列：**\n```perl\nmy $ref = [1, 2, 3];  # 名前なし！\n```\n\n`[ ]` で囲むだけで、リファレンスが直接作れます。"
          },
          {
            "title": "[ ] の使い方",
            "content": "# [ ] は配列リファレンスを返す\n\n**このコードは何をしているの？**\n```perl\nmy $ref = [1, 2, 3];\nprint $ref->[0]; # 1\n```\n\n**解説：**\n1. `[1, 2, 3]` で無名配列のリファレンスを作る\n2. `$ref` にそのリファレンスを入れる\n3. `$ref->[0]` で1番目の要素にアクセス\n\n**便利な使い方：** 一時的なデータを作りたいときに名前をつけなくて済みます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# [で無名配列を作成\\nmy $ref = [5, 10, 15];\\n# printで出力\\nprint $ref->[2] . \"\\n\";",
        "holeyCode": "# [で無名配列を作成\nmy $ref = ___5, 10, 15];\n# printで出力\n___ $ref->[2] . \"\\n\";",
        "correctLines": [
          "# [で無名配列を作成",
          "my $ref = [5, 10, 15];",
          "# printで出力",
          "print $ref->[2] . \"",
          "\";"
        ],
        "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "operators": [
            "["
          ],
          "others": [
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\n"
          }
        ]
      },
    {
        "title": "map で変換",
        "description": "配列の各要素を変換する「map」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "map（マップ）とは？",
            "content": "# 各要素を変換して新しい配列を作る\n\n**map**（マップ＝「写像」）は、配列の各要素に処理を適用して、新しい配列を作ります。\n\n**たとえば：** 1, 2, 3 という数字があって、全部を2倍にしたいとき、map を使えば一発で 2, 4, 6 という新しい配列が作れます。\n\nforeachと似ていますが、mapは結果を配列として返します。"
          },
          {
            "title": "map { } @配列 の書き方",
            "content": "# $_ は現在の要素\n\n**このコードは何をしているの？**\n```perl\nmy @doubled = map { $_ * 2 } (1, 2, 3);\n# (2, 4, 6)\n```\n\n**解説：**\n1. (1, 2, 3) の各要素を処理\n2. `$_` に1が入る → `$_ * 2` = 2\n3. `$_` に2が入る → `$_ * 2` = 4\n4. `$_` に3が入る → `$_ * 2` = 6\n5. 結果 (2, 4, 6) が `@doubled` に入る\n\n**$_ とは：** Perlの特別な変数で、「現在処理中の要素」を表します。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列を宣言（1, 2, 3）\\nmy @nums = (1, 2, 3);\\n# mapで各要素を変換\\nmy @squared = map { $_ * $_ } @nums;\\n# printで出力\\nprint \"@squared\\n\";",
        "holeyCode": "# 配列を宣言（1, 2, 3）\nmy @nums = (1, 2, ___);\n# mapで各要素を変換\nmy @squared = ___ { $_ * $_ } @nums;\n# printで出力\n___ \"@squared\\n\";",
        "correctLines": [
          "# 配列を宣言（1, 2, 3）",
          "my @nums = (1, 2, 3);",
          "# mapで各要素を変換",
          "my @squared = map { $_ * $_ } @nums;",
          "# printで出力",
          "print \"@squared",
          "\";"
        ],
        "lineHints": [
          null,
          "配列を宣言します。",
          null,
          "map で各要素を変換します。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": [
            "3",
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1 4 9\n"
          }
        ]
      },
    {
        "title": "grep でフィルタ",
        "description": "条件に合う要素だけを抽出する「grep」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "grep（グレップ）とは？",
            "content": "# 条件に合う要素だけを選ぶ\n\n**grep**（グレップ）は、条件を満たす要素だけを選んで新しい配列を作ります。\n\n**たとえば：** 1, 2, 3, 4, 5 の中から「3より大きい数だけ」選びたいとき、grep を使えば 4, 5 だけの配列が作れます。\n\nmapが「変換」なら、grepは「選別」です。"
          },
          {
            "title": "grep { 条件 } @配列 の書き方",
            "content": "# 条件が真の要素だけ残る\n\n**このコードは何をしているの？**\n```perl\nmy @big = grep { $_ > 3 } (1, 2, 3, 4, 5);\n# (4, 5)\n```\n\n**解説：**\n1. (1, 2, 3, 4, 5) の各要素をチェック\n2. `$_ > 3` の条件で判定\n3. 1, 2, 3 は条件を満たさない → 除外\n4. 4, 5 は条件を満たす → 残る\n5. 結果 (4, 5) が `@big` に入る\n\n**mapとの違い：**\n- map → 要素を変換\n- grep → 要素を選別"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列を宣言（1, 2, 3, 4, 5）\\nmy @nums = (1, 2, 3, 4, 5);\\n# grepで条件に合う要素を抽出\\nmy @result = grep { $_ >= 3 } @nums;\\n# printで出力\\nprint \"@result\\n\";",
        "holeyCode": "# 配列を宣言（1, 2, 3, 4, 5）\nmy @nums = (1, 2, 3, 4, ___);\n# grepで条件に合う要素を抽出\nmy @result = ___ { $_ >= 3 } @nums;\n# printで出力\n___ \"@result\\n\";",
        "correctLines": [
          "# 配列を宣言（1, 2, 3, 4, 5）",
          "my @nums = (1, 2, 3, 4, 5);",
          "# grepで条件に合う要素を抽出",
          "my @result = grep { $_ >= 3 } @nums;",
          "# printで出力",
          "print \"@result",
          "\";"
        ],
        "lineHints": [
          null,
          "配列を宣言します。",
          null,
          "grep で条件に合う要素を抽出します。",
          null,
          "print で出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "grep"
          ],
          "others": [
            "5",
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3 4 5\n"
          }
        ]
      }
  ]
}
