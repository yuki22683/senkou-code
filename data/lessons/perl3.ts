export const perl3Data = {
  "language": "perl",
  "lessonId": "perl-3",
  "lessonTitle": "Perl III - ファイル処理と高度な機能",
  "lessonDescription": "Perlのファイル処理と高度な機能を学びます。実践的なスクリプトを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ファイルを開こう",
      "correctCode": "# openでファイルを開く\\nopen(my $fh, \">\", \"/tmp/テスト.txt\") or die;\\nprint $fh \"hello\\n\";\\nclose($fh);\\nprint \"written\\n\";",
      "holeyCode": "# openでファイルを開く\\n___\\(my $fh, \">\", \"/tmp/テスト.txt\") or die;\\nprint $fh ___hello\\n___\\n___($fh);\\n___ \"written\\n___",
      "correctLines": [
          "# openでファイルを開く",
          "open(my $fh, \">\", \"/tmp/テスト.txt\") or die;",
          "print $fh \"hello",
          "\";",
          "close($fh);",
          "print \"written",
          "\";"
        ],
      "lineHints": [
          null,
          "open でファイルを開きます。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "open",
            "fopen",
            "file",
            "read"
          ],
          "others": ["\"", "close", "print", "open(my $fh, \"> \"/tmp/テスト.txt\") or die;", "\";", "\";", "open(my $fh, \"> \"/tmp/テスト.txt\") or die;", "open(my $fh, \">\", \"/tmp/テスト.txt\") or die;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "written\\n"
          }
        ]
      },
    {
      "title": "ファイルを閉じよう",
      "correctCode": "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;\\nprint $fh \"data\\n\";\\n# closeでファイルを閉じる\\nclose($fh);\\nprint \"closed\\n\";",
      "holeyCode": "___\\(my $fh, \">\", \"/tmp/テスト2.txt\") or die;\\nprint $fh ___data\\n___\\n# closeでファイルを閉じる\\n___($fh);\\n___ \"closed\\n___",
      "correctLines": [
          "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;",
          "print $fh \"data",
          "\";",
          "# closeでファイルを閉じる",
          "close($fh);",
          "print \"closed",
          "\";"
        ],
      "lineHints": [
          "close でファイルを閉じます。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "close",
            "fclose",
            "end",
            "shut"
          ],
          "others": ["\"", "print", "open(my $fh, \"> \"/tmp/テスト2.txt\") or die;", "\";", "\";", "open(my $fh, \"> \"/tmp/テスト2.txt\") or die;", "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "closed\\n"
          }
        ]
      },
    {
      "title": "chomp で改行を除去",
      "correctCode": "my $text = \"hello\\n\";\\n# chompで改行を除去\\nchomp($text);\\nprint \"[$text]\\n\";",
      "holeyCode": "my $___ = \"hello\\n___\\n# chompで改行を除去\\nchomp($___);\\n___ \"[$text]\\n___",
      "correctLines": [
          "my $text = \"hello",
          "\";",
          "# chompで改行を除去",
          "chomp($text);",
          "print \"[$text]",
          "\";"
        ],
      "lineHints": [
          "chomp で改行を除去します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "chomp",
            "chop",
            "trim",
            "strip"
          ],
          "others": ["text", "print", "\";", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[hello]\\n"
          }
        ]
      },
    {
      "title": "split で文字列を分割",
      "correctCode": "my $data = \"りんご:バナナ:さくらんぼ\";\\n# splitで分割\\nmy @fruits = split(/:/, $data);\\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "my $___ = \"りんご:バナナ:さくらんぼ\";\\n# splitで分割\\nmy @___ = split(/:/, $data);\\n___ $fruits[1] . \"\\n___",
      "correctLines": [
          "my $data = \"りんご:バナナ:さくらんぼ\";",
          "# splitで分割",
          "my @fruits = split(/:/, $data);",
          "print $fruits[1] . \"",
          "\";"
        ],
      "lineHints": [
          "split で分割します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "split",
            "explode",
            "divide",
            "cut"
          ],
          "others": ["data", "fruits", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "バナナ\\n"
          }
        ]
      },
    {
      "title": "join で配列を結合",
      "correctCode": "my @words = (\"こんにちは\", \"世界\");\\n# joinで結合\\nmy $sentence = join(\" \", @words);\\nprint \"$sentence\\n\";",
      "holeyCode": "my @___ = (\"こんにちは\", \"世界\");\\n# joinで結合\\nmy $___ = join(\" \", @words);\\n___ \"$sentence\\n___",
      "correctLines": [
          "my @words = (\"こんにちは\", \"世界\");",
          "# joinで結合",
          "my $sentence = join(\" \", @words);",
          "print \"$sentence",
          "\";"
        ],
      "lineHints": [
          "join で結合します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "join",
            "implode",
            "concat",
            "merge"
          ],
          "others": ["words", "sentence", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは 世界\\n"
          }
        ]
      },
    {
      "title": "push で配列に追加",
      "correctCode": "my @nums = (1, 2);\\n# pushで追加\\npush(@nums, 3);\\nprint \"@nums\\n\";",
      "holeyCode": "my @___ = (1, 2);\\n# pushで追加\\npush(@nums, ___);\\n___ \"@nums\\n___",
      "correctLines": [
          "my @nums = (1, 2);",
          "# pushで追加",
          "push(@nums, 3);",
          "print \"@nums",
          "\";"
        ],
      "lineHints": [
          "push で追加します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "push",
            "append",
            "add",
            "insert"
          ],
          "others": ["nums", "3", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1 2 3\\n"
          }
        ]
      },
    {
      "title": "pop で配列から取り出す",
      "correctCode": "my @nums = (10, 20, 30);\\n# popで取り出す\\nmy $last = pop(@nums);\\nprint \"$last\\n\";",
      "holeyCode": "my @___ = (10, 20, 30);\\n# popで取り出す\\nmy $___ = pop(@nums);\\n___ \"$last\\n___",
      "correctLines": [
          "my @nums = (10, 20, 30);",
          "# popで取り出す",
          "my $last = pop(@nums);",
          "print \"$last",
          "\";"
        ],
      "lineHints": [
          "pop で取り出します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "pop",
            "remove",
            "take",
            "get"
          ],
          "others": ["nums", "last", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\\n"
          }
        ]
      },
    {
      "title": "sort で配列を並べ替え",
      "correctCode": "my @words = (\"バナナ\", \"りんご\", \"さくらんぼ\");\\n# sortで並べ替え\\nmy @sorted = sort @words;\\nprint \"$sorted[0]\\n\";",
      "holeyCode": "my @___ = (\"バナナ\", \"りんご\", \"さくらんぼ\");\\n# sortで並べ替え\\nmy @___ = sort @words;\\n___ \"$sorted[0]\\n___",
      "correctLines": [
          "my @words = (\"バナナ\", \"りんご\", \"さくらんぼ\");",
          "# sortで並べ替え",
          "my @sorted = sort @words;",
          "print \"$sorted[0]",
          "\";"
        ],
      "lineHints": [
          "sort で並べ替えます。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "sort",
            "order",
            "arrange",
            "rank"
          ],
          "others": ["words", "sorted", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "さくらんぼ\\n"
          }
        ]
      },
    {
      "title": "reverse で配列を逆順に",
      "correctCode": "my @nums = (1, 2, 3);\\n# reverseで逆順に\\nmy @rev = reverse @nums;\\nprint \"@rev\\n\";",
      "holeyCode": "my @___ = (1, 2, 3);\\n# reverseで逆順に\\nmy @___ = reverse @nums;\\n___ \"@rev\\n___",
      "correctLines": [
          "my @nums = (1, 2, 3);",
          "# reverseで逆順に",
          "my @rev = reverse @nums;",
          "print \"@rev",
          "\";"
        ],
      "lineHints": [
          "reverse で逆順にします。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "reverse",
            "flip",
            "invert",
            "back"
          ],
          "others": ["nums", "rev", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3 2 1\\n"
          }
        ]
      },
    {
      "title": "length で文字列の長さ",
      "correctCode": "my $text = \"Perl\";\\n# lengthで長さを取得\\nmy $len = length($text);\\nprint \"$len\\n\";",
      "holeyCode": "my $___ = \"Perl\";\\n# lengthで長さを取得\\nmy $___ = length($text);\\n___ \"$len\\n___",
      "correctLines": [
          "my $text = \"Perl\";",
          "# lengthで長さを取得",
          "my $len = length($text);",
          "print \"$len",
          "\";"
        ],
      "lineHints": [
          "length で長さを取得します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "length",
            "len",
            "size",
            "count"
          ],
          "others": ["text", "print", "\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\\n"
          }
        ]
      }
  ]
};
