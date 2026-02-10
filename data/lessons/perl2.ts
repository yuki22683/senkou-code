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
      "correctCode": "# 変数に文字列を代入\\nmy $text = \"Hello World\";\\n# =~でパターンマッチング（iで大文字小文字を無視）\\nif ($text =~ /world/i) {\\n    # printで出力\\n    print \"found\\n\";\\n}",
      "holeyCode": "# 変数に文字列を代入\\nmy $___=___\\n# =~でパターンマッチング（iで大文字小文字を無視）\\nif (___=~/___/___) {\\n    # printで出力\\n    ___\\n___\\n___",
      "correctLines": [
          "# 変数に文字列を代入",
          "my $text = \"Hello World\";",
          "# =~でパターンマッチング（iで大文字小文字を無視）",
          "if ($text =~ /world/i) {",
          "    # printで出力",
          "    print \"found",
          "\";",
          "}"
        ],
      "lineHints": [
          null,
          "$textに\"Hello World\"を代入します。",
          null,
          "$textがworldにマッチするか判定します（iで大文字小文字を無視）。",
          null,
          "print \"found で出力を開始します。",
          "文字列を閉じて文を終了します。",
          "ifブロックを閉じます。"
        ],
        "candidates": {
          "operators": [
            "=~"
          ],
          "others": ["\"Hello World\";", "print \"found", "$text", "text", "world", "world/i", "i", "}", "\";"]
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
      "correctCode": "# 変数に文字列を代入\\nmy $text = \"cat\";\\n# sで置換\\n$text =~ s/cat/dog/;\\n# printで出力\\nprint \"$text\\n\";",
      "holeyCode": "# 変数に文字列を代入\\nmy $___=___\\n# sで置換\\n$___=~ s/___/___/;\\n# printで出力\\n___\\n___",
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
          "$textに\"cat\"を代入します。",
          null,
          "catをdogに置換します。",
          null,
          "print \"$text で出力を開始します。",
          "文字列を閉じて文を終了します。"
        ],
        "candidates": {
          "keywords": [
            "s"
          ],
          "others": ["\"cat\";", "print \"$text", "text", "cat", "dog", "\";"]
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
      "correctCode": "# @で配列を宣言\\nmy @fruits = (\"りんご\", \"バナナ\");\\n# printで出力\\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "# @で配列を宣言\\nmy @___=___\\n# printで出力\\n___ $___[___] . \"\\n___",
      "correctLines": [
          "# @で配列を宣言",
          "my @fruits = (\"りんご\", \"バナナ\");",
          "# printで出力",
          "print $fruits[1] . \"",
          "\";"
        ],
      "lineHints": [
          null,
          "@fruitsに(\"りんご\", \"バナナ\")を代入します。",
          null,
          "print $fruits[1]で2番目の要素を出力します。",
          "文字列を閉じて文を終了します。"
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
      "correctCode": "# %でハッシュを宣言\\nmy %scores = (\"math\" => 90);\\n# printで出力\\nprint $scores{\"math\"} . \"\\n\";",
      "holeyCode": "# %でハッシュを宣言\\nmy %___=___\\n# printで出力\\n___ $___{___} . \"\\n___",
      "correctLines": [
          "# %でハッシュを宣言",
          "my %scores = (\"math\" => 90);",
          "# printで出力",
          "print $scores{\"math\"} . \"",
          "\";"
        ],
      "lineHints": [
          null,
          "%scoresに\"math\"=>90のハッシュを代入します。",
          null,
          "print $scores{\"math\"}で\"math\"キーの値を出力します。",
          "文字列を閉じて文を終了します。"
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
      "correctCode": "# 配列を宣言（1, 2, 3）\\nmy @nums = (1, 2, 3);\\n# foreachで各要素を処理\\nforeach my $n (@nums) {\\n    # printで出力\\n    print \"$n\\n\";\\n}",
      "holeyCode": "# 配列を宣言（1, 2, 3）\\nmy @___=___\\n# foreachで各要素を処理\\nforeach my $___ (@___) {\\n    # printで出力\\n    ___\\n___\\n___",
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
          "@numsに(1, 2, 3)を代入します。",
          null,
          "foreach my $nで@numsの各要素を処理します。",
          null,
          "print \"$n で$nを出力します。",
          "文字列を閉じて文を終了します。",
          "foreachブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "foreach"
          ],
          "others": ["(1, 2, 3);", "print \"$n", "nums", "n", "}", "\";"]
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
      "correctCode": "# subでサブルーチンを定義\\nsub double {\\n    # shiftで引数を取得\\n    my $n = shift;\\n    # returnで戻り値を返す\\n    return $n * 2;\\n}\\n# printで出力\\nprint double(5) . \"\\n\";",
      "holeyCode": "# subでサブルーチンを定義\\nsub ___ {\\n    # shiftで引数を取得\\n    my $___=___\\n    # returnで戻り値を返す\\n    return $___ * ___;\\n___\\n# printで出力\\n___ ___(___) . \"\\n___",
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
          "sub doubleでサブルーチンを定義します。",
          null,
          "$nにshiftで取得した引数を代入します。",
          null,
          "return $n * 2 で2倍の値を返します。",
          "サブルーチンを閉じます。",
          null,
          "print double(5)でdouble(5)の結果を出力します。",
          "文字列を閉じて文を終了します。"
        ],
        "candidates": {
          "keywords": [
            "sub", "return"
          ],
          "others": ["shift;", "print", "double", "n", "2", "5", "}", "\";"]
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
      "correctCode": "# 配列を宣言（10, 20）\\nmy @nums = (10, 20);\\n# \\でリファレンスを作成\\nmy $ref = \\@nums;\\n# printで出力\\nprint $ref->[1] . \"\\n\";",
      "holeyCode": "# 配列を宣言（10, 20）\\nmy @___=___\\n# \\でリファレンスを作成\\nmy $___=\\\\@___;\\n# printで出力\\n___ $___->[___] . \"\\n___",
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
          "@numsに(10, 20)を代入します。",
          null,
          "$refに\\@numsでリファレンスを代入します。",
          null,
          "print $ref->[1]で2番目の要素を出力します。",
          "文字列を閉じて文を終了します。"
        ],
        "candidates": {
          "operators": [
          ],
          "others": ["(10, 20);", "print", "nums", "@nums", "ref", "1", "\";"]
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
      "correctCode": "# [で無名配列を作成\\nmy $ref = [5, 10, 15];\\n# printで出力\\nprint $ref->[2] . \"\\n\";",
      "holeyCode": "# [で無名配列を作成\\nmy $___=___\\n# printで出力\\n___ $___->[___] . \"\\n___",
      "correctLines": [
          "# [で無名配列を作成",
          "my $ref = [5, 10, 15];",
          "# printで出力",
          "print $ref->[2] . \"",
          "\";"
        ],
      "lineHints": [
          null,
          "$refに[5, 10, 15]の無名配列リファレンスを代入します。",
          null,
          "print $ref->[2]で3番目の要素を出力します。",
          "文字列を閉じて文を終了します。"
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
      "correctCode": "# 配列を宣言（1, 2, 3）\\nmy @nums = (1, 2, 3);\\n# mapで各要素を変換\\nmy @squared = map { $_ * $_ } @nums;\\n# printで出力\\nprint \"@squared\\n\";",
      "holeyCode": "# 配列を宣言（1, 2, 3）\\nmy @___=___\\n# mapで各要素を変換\\nmy @___=___ { $___ * $___ } @___;\\n# printで出力\\n___\\n___",
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
          "@numsに(1, 2, 3)を代入します。",
          null,
          "@squaredにmap { $_ * $_ } @numsの結果を代入します。",
          null,
          "print \"@squared で配列を出力します。",
          "文字列を閉じて文を終了します。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["(1, 2, 3);", "print \"@squared", "nums", "@nums", "squared", "_", "_ }", "_ } @nums", "\";"]
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
      "correctCode": "# 配列を宣言（1, 2, 3, 4, 5）\\nmy @nums = (1, 2, 3, 4, 5);\\n# grepで条件に合う要素を抽出\\nmy @result = grep { $_ >= 3 } @nums;\\n# printで出力\\nprint \"@result\\n\";",
      "holeyCode": "# 配列を宣言（1, 2, 3, 4, 5）\\nmy @___=___\\n# grepで条件に合う要素を抽出\\nmy @___=___ { $___ >= ___ } @___;\\n# printで出力\\n___\\n___",
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
          "@numsに(1, 2, 3, 4, 5)を代入します。",
          null,
          "@resultにgrep { $_ >= 3 } @numsの結果を代入します。",
          null,
          "print \"@result で配列を出力します。",
          "文字列を閉じて文を終了します。"
        ],
        "candidates": {
          "functions": [
            "grep"
          ],
          "others": ["(1, 2, 3, 4, 5);", "print \"@result", "nums", "@nums", "result", "_", "3", "3 }", "3 } @nums", "p", "\";"]
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
