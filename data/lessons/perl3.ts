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
      "holeyCode": "# openでファイルを開く\\n___(my $___, \"___\", \"___\") or ___;\\n___ $___ \"___\";\\n___(___);\\n___ \"___\";",
      "correctLines": [
          "# openでファイルを開く",
          "open(my $fh, \">\", \"/tmp/テスト.txt\") or die;",
          "print $fh \"hello\\n\";",
          "close($fh);",
          "print \"written\\n\";"
        ],
      "lineHints": [
          null,
          "open関数でファイルハンドルを作成し、書き込みモード(>)でファイルを開きます。",
          "print文でファイルハンドルに文字列を書き込みます。",
          "close関数でファイルハンドルを閉じます。",
          "print文で完了メッセージを出力します。"
        ],
        "candidates": {
          "functions": [
            "open",
            "fopen",
            "file",
            "read"
          ],
          "others": ["\"", "close", "print", "fh", "$fh", "die", ";", ">", "/tmp/テスト.txt", "hello\\n", "written\\n", "hello", "written"]
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
      "holeyCode": "___(my $___, \"___\", \"___\") or ___;\\n___ $___ \"___\";\\n# closeでファイルを閉じる\\n___(___);\\n___ \"___\";",
      "correctLines": [
          "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;",
          "print $fh \"data\\n\";",
          "# closeでファイルを閉じる",
          "close($fh);",
          "print \"closed\\n\";"
        ],
      "lineHints": [
          "open関数でファイルハンドルを作成し、書き込みモード(>)でファイルを開きます。",
          "print文でファイルハンドルに文字列を書き込みます。",
          null,
          "close関数でファイルハンドルを閉じます。",
          "print文で完了メッセージを出力します。"
        ],
        "candidates": {
          "functions": [
            "close",
            "fclose",
            "end",
            "shut"
          ],
          "others": ["\"", "print", "open", "fh", "$fh", "die", ";", ">", "/tmp/テスト2.txt", "data\\n", "closed\\n", "data", "closed"]
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
      "holeyCode": "my $___ = \"___\";\\n# chompで改行を除去\\n___(___);\\n___ \"[$___]\";",
      "correctLines": [
          "my $text = \"hello\\n\";",
          "# chompで改行を除去",
          "chomp($text);",
          "print \"[$text]\\n\";"
        ],
      "lineHints": [
          "変数$textに改行を含む文字列を代入します。",
          null,
          "chomp関数で文字列末尾の改行を除去します。",
          "print文で角括弧で囲んだ$textを出力します。"
        ],
        "candidates": {
          "functions": [
            "chomp",
            "chop",
            "trim",
            "strip"
          ],
          "others": ["text", "$text", "print", "\"", ";", "hello\\n", "[$text]\\n", "hello"]
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
      "holeyCode": "my $___ = \"___\";\\n# splitで分割\\nmy @___ = ___(/___/, $___);\\n___ $___[___] . \"\\n\";",
      "correctLines": [
          "my $data = \"りんご:バナナ:さくらんぼ\";",
          "# splitで分割",
          "my @fruits = split(/:/, $data);",
          "print $fruits[1] . \"\\n\";"
        ],
      "lineHints": [
          "変数$dataにコロン区切りの文字列を代入します。",
          null,
          "split関数でコロンを区切り文字として配列@fruitsに分割します。",
          "配列のインデックス1（2番目）の要素を出力します。"
        ],
        "candidates": {
          "functions": [
            "split",
            "explode",
            "divide",
            "cut"
          ],
          "others": ["data", "fruits", "print", "\"", ";", ":", "1", "りんご:バナナ:さくらんぼ"]
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
      "correctCode": "my @words = (\"hello\", \"world\");\\n# joinで結合\\nmy $sentence = join(\" \", @words);\\nprint \"$sentence\\n\";",
      "holeyCode": "my @___ = (\"___\", \"___\");\\n# joinで結合\\nmy $___ = ___(\"___\", @___);\\n___ \"$___\\n\";",
      "correctLines": [
          "my @words = (\"hello\", \"world\");",
          "# joinで結合",
          "my $sentence = join(\" \", @words);",
          "print \"$sentence\\n\";"
        ],
      "lineHints": [
          "配列@wordsに2つの文字列を代入します。",
          null,
          "join関数でスペースを区切り文字として配列を結合します。",
          "print文で結合した文字列を出力します。"
        ],
        "candidates": {
          "functions": [
            "join",
            "implode",
            "concat",
            "merge"
          ],
          "others": ["words", "sentence", "print", "\"", ";", " ", "hello", "world", "sentence\\n\";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "hello world\\n"
          }
        ]
      },
    {
      "title": "push で配列に追加",
      "correctCode": "my @nums = (1, 2);\\n# pushで追加\\npush(@nums, 3);\\nprint \"@nums\\n\";",
      "holeyCode": "my @___ = (___, ___);\\n# pushで追加\\n___(@___, ___);\\n___ \"@___\\n\";",
      "correctLines": [
          "my @nums = (1, 2);",
          "# pushで追加",
          "push(@nums, 3);",
          "print \"@nums\\n\";"
        ],
      "lineHints": [
          "配列@numsに初期値1と2を代入します。",
          null,
          "push関数で配列の末尾に3を追加します。",
          "print文で配列の内容を出力します。"
        ],
        "candidates": {
          "functions": [
            "push",
            "append",
            "add",
            "insert"
          ],
          "others": ["nums", "1", "2", "3", "print", "\"", ";", "nums\\n\";"]
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
      "holeyCode": "my @___ = (___, ___, ___);\\n# popで取り出す\\nmy $___ = ___(@___);\\n___ \"$___\\n\";",
      "correctLines": [
          "my @nums = (10, 20, 30);",
          "# popで取り出す",
          "my $last = pop(@nums);",
          "print \"$last\\n\";"
        ],
      "lineHints": [
          "配列@numsに初期値10、20、30を代入します。",
          null,
          "pop関数で配列の末尾から要素を取り出し$lastに代入します。",
          "print文で取り出した値を出力します。"
        ],
        "candidates": {
          "functions": [
            "pop",
            "remove",
            "take",
            "get"
          ],
          "others": ["nums", "last", "10", "20", "30", "print", "\"", ";", "last\\n\";"]
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
      "holeyCode": "my @___ = (\"___\", \"___\", \"___\");\\n# sortで並べ替え\\nmy @___ = ___ @___;\\n___ \"$___[___]\\n\";",
      "correctLines": [
          "my @words = (\"バナナ\", \"りんご\", \"さくらんぼ\");",
          "# sortで並べ替え",
          "my @sorted = sort @words;",
          "print \"$sorted[0]\\n\";"
        ],
      "lineHints": [
          "配列@wordsに3つの果物名を代入します。",
          null,
          "sort関数で配列をアルファベット順に並べ替えます。",
          "print文でソート後の最初の要素を出力します。"
        ],
        "candidates": {
          "functions": [
            "sort",
            "order",
            "arrange",
            "rank"
          ],
          "others": ["words", "sorted", "print", "\"", ";", "バナナ", "りんご", "さくらんぼ", "0"]
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
      "holeyCode": "my @___ = (___, ___, ___);\\n# reverseで逆順に\\nmy @___ = ___ @___;\\n___ \"@___\\n\";",
      "correctLines": [
          "my @nums = (1, 2, 3);",
          "# reverseで逆順に",
          "my @rev = reverse @nums;",
          "print \"@rev\\n\";"
        ],
      "lineHints": [
          "配列@numsに1、2、3を代入します。",
          null,
          "reverse関数で配列の順序を逆にします。",
          "print文で逆順の配列を出力します。"
        ],
        "candidates": {
          "functions": [
            "reverse",
            "flip",
            "invert",
            "back"
          ],
          "others": ["nums", "rev", "1", "2", "3", "print", "\"", ";", "rev\\n\";"]
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
      "holeyCode": "my $___ = \"___\";\\n# lengthで長さを取得\\nmy $___ = ___($___)___\\n___ \"$___\\n\";",
      "correctLines": [
          "my $text = \"Perl\";",
          "# lengthで長さを取得",
          "my $len = length($text);",
          "print \"$len\\n\";"
        ],
      "lineHints": [
          "変数$textに文字列\"Perl\"を代入します。",
          null,
          "length関数で文字列の長さを取得し$lenに代入します。",
          "print文で文字列の長さを出力します。"
        ],
        "candidates": {
          "functions": [
            "length",
            "len",
            "size",
            "count"
          ],
          "others": ["text", "len", "print", "\"", ";", "Perl", "len\\n\";"]
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
