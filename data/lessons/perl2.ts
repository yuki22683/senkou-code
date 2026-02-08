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
      "holeyCode": "# 変数に文字列を代入\\nmy $___ = \"Hello World\";\\n# =~でパターンマッチング（iで大文字小文字を無視）\\nif ($text =~ /___/i) {\\n    # printで出力\\n    ___ \"found\\n___\\n___",
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
          "変数に文字列を代入します。",
          null,
          "=~ でパターンマッチングします。",
          null,
          "print で出力します。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "=~"
          ],
          "others": ["\"hello world\"", "print", "text", "world", "}", "\";"]
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
      "holeyCode": "# 変数に文字列を代入\\nmy $___ = \"cat\";\\n# sで置換\\n$text =~ s/cat/___/;\\n# printで出力\\n___ \"$text\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "s"
          ],
          "others": ["\"cat\"", "print", "text", "dog", "\";"]
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
      "holeyCode": "# @で配列を宣言\\nmy @___ = (\"りんご\", \"バナナ\");\\n# printで出力\\n___ $fruits[1] . \"\\n___",
      "correctLines": [
          "# @で配列を宣言",
          "my @fruits = (\"りんご\", \"バナナ\");",
          "# printで出力",
          "print $fruits[1] . \"",
          "\";"
        ],
      "lineHints": [
          null,
          "@ で配列を宣言します。",
          null,
          "print で出力します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "@"
          ],
          "others": ["print", "fruits", "\";"]
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
      "holeyCode": "# %でハッシュを宣言\\n___ %scores = (\"___\" => 90);\\n# printで出力\\n___ $scores{\"math\"} . \"\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "%"
          ],
          "others": ["print", "math", "my", "\";"]
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
      "holeyCode": "# 配列を宣言（1, 2, 3）\\nmy @___ = (1, 2, 3);\\n# foreachで各要素を処理\\nforeach my $n (@___) {\\n    # printで出力\\n    ___ \"$n\\n___\\n___",
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
          "この行を正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "foreach"
          ],
          "others": ["3", "print", "nums", "}", "\";"]
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
      "holeyCode": "# subでサブルーチンを定義\\nsub ___ {\\n    # shiftで引数を取得\\n    my $___ = shift;\\n    # returnで戻り値を返す\\n    return $n * ___;\\n___\\n# printで出力\\nprint ___(5) . \"___\";\\n___",
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
          "ここを正しく入力してください。",
          null,
          "print で出力します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "sub"
          ],
          "others": ["shift", "return", "print", "double", "n", "2", "}", "}", "", "\";"]
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
      "holeyCode": "# 配列を宣言（10, 20）\\nmy @___ = (10, 20);\\n# \\でリファレンスを作成\\nmy $___ = \\\\@nums;\\n# printで出力\\n___ $ref->[1] . \"\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
          ],
          "others": ["20", "print", "nums", "ref", "\";"]
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
      "holeyCode": "# [で無名配列を作成\\nmy $___ = [5, 10, 15];\\n# printで出力\\n___ $ref->[2] . \"\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "["
          ],
          "others": ["print", "ref", "\";"]
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
      "holeyCode": "# 配列を宣言（1, 2, 3）\\nmy @___ = (1, 2, 3);\\n# mapで各要素を変換\\nmy @___ = map { $_ * $_ } @nums;\\n# printで出力\\n___ \"@squared\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "map"
          ],
          "others": ["3", "print", "nums", "squared", "\";"]
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
      "holeyCode": "# 配列を宣言（1, 2, 3, 4, 5）\\nmy @___ = (1, 2, 3, 4, 5);\\n# grepで条件に合う要素を抽出\\nmy @___ = grep { $_ >= 3 } @nums;\\n# printで出力\\n___ \"@result\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "grep"
          ],
          "others": ["5", "print", "nums", "result", "\";"]
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
