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
        "description": "「open」を使ってファイルを開きましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "open（オープン）とは？",
            "content": "# ファイルを開く\n\n**open**（オープン＝「開く」）は、ファイルを開いてプログラムから読み書きできるようにします。\n\n**たとえば：** 本を読むには、まず本を開かなければいけません。ファイルも同じで、読み書きする前に「開く」操作が必要です。\n\n開いたファイルは **ファイルハンドル** という「つまみ」を使って操作します。"
          },
          {
            "title": "open のモード",
            "content": "# 読む？書く？を指定する\n\n| モード | 意味 | 動作 |\n|--------|------|------|\n| `<` | 読み込み | ファイルの内容を読む |\n| `>` | 書き込み | 新しく書く（上書き） |\n| `>>` | 追記 | 末尾に追加する |\n\n**このコードは何をしているの？**\n```perl\nopen(my $fh, \"<\", \"file.txt\");\n```\n\n**解説：**\n- `my $fh` → ファイルハンドル（操作用のつまみ）\n- `\"<\"` → 読み込みモード\n- `\"file.txt\"` → 開くファイル名"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# openでファイルを開く\nopen(my $fh, \">\", \"/tmp/テスト.txt\") or die;\nprint $fh \"hello\n\";\nclose($fh);\nprint \"written\n\";",
        "holeyCode": "# openでファイルを開く\n___\\(my $fh, \">\", \"/tmp/テスト.txt\") or die;\nprint $fh ___hello\n\";\n___($fh);\n___ \"written\n\";",
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
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "open",
            "fopen",
            "file",
            "read"
          ],
          "others": ["open(my $fh, \">\", \"/tmp/test.txt\") or die;", "\"", "close", "print", "open(my $fh, \">\", \"/tmp/テスト.txt\") or die;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "written\n"
          }
        ]
      },
    {
        "title": "ファイルを閉じよう",
        "description": "「close」を使ってファイルを閉じましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "close（クローズ）とは？",
            "content": "# ファイルを閉じる\n\n**close**（クローズ＝「閉じる」）は、開いたファイルを閉じて、使用を終了します。\n\n**たとえば：** 本を読み終わったら本を閉じますよね。閉じないと他の人が使えなかったり、本が傷んだりします。\n\nファイルも同じで、使い終わったら **必ず閉じる** のがマナーです。"
          },
          {
            "title": "close の使い方",
            "content": "# close(ファイルハンドル)\n\n**このコードは何をしているの？**\n```perl\nclose($fh);\n```\n\n**解説：**\n- `$fh`（ファイルハンドル）で開いたファイルを閉じる\n\n**なぜ閉じるの？**\n1. 書き込んだデータを確実に保存するため\n2. コンピュータのリソース（メモリなど）を解放するため\n3. 他のプログラムがファイルを使えるようにするため"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;\nprint $fh \"data\n\";\n# closeでファイルを閉じる\nclose($fh);\nprint \"closed\n\";",
        "holeyCode": "___\\(my $fh, \">\", \"/tmp/テスト2.txt\") or die;\nprint $fh ___data\n\";\n# closeでファイルを閉じる\n___($fh);\n___ \"closed\n\";",
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
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "close",
            "fclose",
            "end",
            "shut"
          ],
          "others": ["open(my $fh, \">\", \"/tmp/test2.txt\") or die;", "\"", "print", "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "closed\n"
          }
        ]
      },
    {
        "title": "chomp で改行を除去",
        "description": "「chomp」を使って文字列末尾の改行を除去しましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "chomp（チョンプ）とは？",
            "content": "# 末尾の改行を取り除く\n\n**chomp**（チョンプ＝「かじり取る」）は、文字列の末尾にある改行文字（`\\n`）を取り除きます。\n\n**たとえば：** ファイルから1行読み込むと、行末に改行がついてきます。これを取り除かないと余計な空行が入ってしまいます。\n\nファイル処理でとてもよく使う関数です！"
          },
          {
            "title": "chomp の使い方",
            "content": "# chomp($変数)\n\n**このコードは何をしているの？**\n```perl\nmy $line = \"hello\n\";\nchomp($line);\nprint $line; # hello\n```\n\n**解説：**\n1. `$line` に \"hello\n\"（改行付き）を入れる\n2. `chomp($line)` で末尾の `\\n` を除去\n3. `$line` は \"hello\" になる\n\n**ポイント：** chompは変数の中身を直接変更します。戻り値は使いません。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my $text = \"hello\n\";\n# chompで改行を除去\nchomp($text);\nprint \"[$text]\n\";",
        "holeyCode": "my $___ = \"hello\n\";\n# chompで改行を除去\nchomp($___);\n___ \"[$text]\n\";",
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
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "chomp",
            "chop",
            "trim",
            "strip"
          ],
          "others": ["text", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[hello]\n"
          }
        ]
      },
    {
        "title": "split で文字列を分割",
        "description": "「split」を使って文字列を分割しましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "split（スプリット）とは？",
            "content": "# 文字列をバラバラに分ける\n\n**split**（スプリット＝「分割する」）は、文字列を指定した区切り文字で分けて配列にします。\n\n**たとえば：** \"りんご,みかん,バナナ\" という文字列をカンマで分けて、3つの果物の配列を作れます。\n\nCSVファイル（カンマ区切りのデータ）を読むときによく使います。"
          },
          {
            "title": "split の使い方",
            "content": "# split(/区切り/, 文字列)\n\n**このコードは何をしているの？**\n```perl\nmy @parts = split(/,/, \"a,b,c\");\nprint $parts[1]; # b\n```\n\n**解説：**\n1. \"a,b,c\" をカンマ `,` で分割\n2. 結果は (\"a\", \"b\", \"c\") の配列\n3. `$parts[1]` で2番目の要素 \"b\" を取得\n\n**区切り文字いろいろ：**\n- `/,/` → カンマで分割\n- `/::/` → コロンで分割\n- `/\\s+/` → 空白で分割"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my $data = \"りんご:バナナ:さくらんぼ\";\n# splitで分割\nmy @fruits = split(/:/, $data);\nprint $fruits[1] . \"\n\";",
        "holeyCode": "my $___ = \"りんご:バナナ:さくらんぼ\";\n# splitで分割\nmy @___ = split(/:/, $data);\n___ $fruits[1] . \"\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "split",
            "explode",
            "divide",
            "cut"
          ],
          "others": ["data", "fruits", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "banana\n"
          }
        ]
      },
    {
        "title": "join で配列を結合",
        "description": "「join」を使って配列を文字列に結合しましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "join（ジョイン）とは？",
            "content": "# 配列を1つの文字列につなげる\n\n**join**（ジョイン＝「結合する」）は、配列の要素を区切り文字でつなげて1つの文字列にします。\n\n**たとえば：** (\"りんご\", \"みかん\", \"バナナ\") という配列を \"りんご,みかん,バナナ\" という1つの文字列にできます。\n\nsplit の反対の操作です！"
          },
          {
            "title": "join の使い方",
            "content": "# join(区切り文字, @配列)\n\n**このコードは何をしているの？**\n```perl\nmy @arr = (\"a\", \"b\", \"c\");\nmy $str = join(\"-\", @arr);\nprint $str; # a-b-c\n```\n\n**解説：**\n1. (\"a\", \"b\", \"c\") の配列を `-` でつなげる\n2. 結果は \"a-b-c\" という文字列\n\n**split と join の関係：**\n- split → 文字列を配列に分解\n- join → 配列を文字列にまとめる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my @words = (\"こんにちは\", \"世界\");\n# joinで結合\nmy $sentence = join(\" \", @words);\nprint \"$sentence\n\";",
        "holeyCode": "my @___ = (\"こんにちは\", \"世界\");\n# joinで結合\nmy $___ = join(\" \", @words);\n___ \"$sentence\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "join",
            "implode",
            "concat",
            "merge"
          ],
          "others": ["words", "sentence", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello World\n"
          }
        ]
      },
    {
        "title": "push で配列に追加",
        "description": "「push」を使って配列の末尾に要素を追加しましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "push（プッシュ）とは？",
            "content": "# 配列の末尾に追加する\n\n**push**（プッシュ＝「押し込む」）は、配列の末尾に新しい要素を追加します。\n\n**たとえば：** 行列の最後に人が並ぶようなイメージです。(1, 2) という配列に 3 を push すると (1, 2, 3) になります。"
          },
          {
            "title": "push の使い方",
            "content": "# push(@配列, 追加する値)\n\n**このコードは何をしているの？**\n```perl\nmy @arr = (1, 2);\npush(@arr, 3);\nprint $arr[2]; # 3\n```\n\n**解説：**\n1. @arr は (1, 2)\n2. push で 3 を末尾に追加\n3. @arr は (1, 2, 3) になる\n4. `$arr[2]` は 3\n\n**複数追加：** `push(@arr, 3, 4, 5)` で一度に複数追加できます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my @nums = (1, 2);\n# pushで追加\npush(@nums, 3);\nprint \"@nums\n\";",
        "holeyCode": "my @___ = (1, 2);\n# pushで追加\npush(@nums, ___);\n___ \"@nums\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "push",
            "append",
            "add",
            "insert"
          ],
          "others": ["nums", "3", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1 2 3\n"
          }
        ]
      },
    {
        "title": "pop で配列から取り出す",
        "description": "「pop」を使って配列の末尾から要素を取り出しましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "pop（ポップ）とは？",
            "content": "# 配列の末尾から取り出す\n\n**pop**（ポップ＝「ポンと取り出す」）は、配列の末尾から要素を取り出します。取り出した要素は配列からなくなります。\n\n**たとえば：** トランプの山札から1枚取るようなイメージです。(1, 2, 3) から pop すると 3 が取れて、配列は (1, 2) になります。\n\npush の反対の操作です！"
          },
          {
            "title": "pop の使い方",
            "content": "# pop(@配列)\n\n**このコードは何をしているの？**\n```perl\nmy @arr = (1, 2, 3);\nmy $last = pop(@arr);\nprint $last; # 3\n```\n\n**解説：**\n1. @arr は (1, 2, 3)\n2. pop で末尾の 3 を取り出す\n3. `$last` に 3 が入る\n4. @arr は (1, 2) になる\n\n**push と pop の関係：**\n- push → 末尾に追加\n- pop → 末尾から取り出し"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my @nums = (10, 20, 30);\n# popで取り出す\nmy $last = pop(@nums);\nprint \"$last\n\";",
        "holeyCode": "my @___ = (10, 20, 30);\n# popで取り出す\nmy $___ = pop(@nums);\n___ \"$last\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "pop",
            "remove",
            "take",
            "get"
          ],
          "others": ["nums", "last", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\n"
          }
        ]
      },
    {
        "title": "sort で配列を並べ替え",
        "description": "「sort」を使って配列を並べ替えましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "sort（ソート）とは？",
            "content": "# 配列を順番に並べ替える\n\n**sort**（ソート＝「並べ替える」）は、配列の要素を順番に並べ替えた新しいリストを返します。\n\n**たとえば：** バラバラのトランプを小さい順に並べ直すようなイメージです。\n\nデフォルトはアルファベット順（辞書順）で並べます。"
          },
          {
            "title": "sort の使い方",
            "content": "# sort @配列\n\n**このコードは何をしているの？**\n```perl\nmy @sorted = sort @arr;\nmy @nums = sort { $a <=> $b } @nums;\n```\n\n**解説：**\n- `sort @arr` → 文字列順に並べ替え\n- `sort { $a <=> $b } @nums` → 数値順に並べ替え\n\n**なぜ数値順は違う書き方？**\n- デフォルトは文字列比較（\"10\" < \"2\" になる）\n- `<=>` は数値比較（10 > 2 になる）\n- `$a` と `$b` は比較する2つの値を表す特別な変数"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my @words = (\"バナナ\", \"りんご\", \"さくらんぼ\");\n# sortで並べ替え\nmy @sorted = sort @words;\nprint \"$sorted[0]\n\";",
        "holeyCode": "my @___ = (\"バナナ\", \"りんご\", \"さくらんぼ\");\n# sortで並べ替え\nmy @___ = sort @words;\n___ \"$sorted[0]\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "sort",
            "order",
            "arrange",
            "rank"
          ],
          "others": ["words", "sorted", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "apple\n"
          }
        ]
      },
    {
        "title": "reverse で配列を逆順に",
        "description": "「reverse」を使って配列を逆順にしましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "reverse（リバース）とは？",
            "content": "# 順番をひっくり返す\n\n**reverse**（リバース＝「逆にする」）は、配列の要素を逆順にした新しいリストを返します。\n\n**たとえば：** (1, 2, 3) を reverse すると (3, 2, 1) になります。トランプの山を裏返すようなイメージです。\n\n文字列にも使えます（\"hello\" → \"olleh\"）。"
          },
          {
            "title": "reverse の使い方",
            "content": "# reverse @配列 または reverse 文字列\n\n**このコードは何をしているの？**\n```perl\nmy @rev = reverse @arr;\nmy $str = reverse \"hello\"; # olleh\n```\n\n**解説：**\n- `reverse @arr` → 配列を逆順に\n- `reverse \"hello\"` → 文字列を逆順に（\"olleh\"）\n\n**sort と reverse を組み合わせ：**\n```perl\nmy @desc = reverse sort @arr;  # 降順\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my @nums = (1, 2, 3);\n# reverseで逆順に\nmy @rev = reverse @nums;\nprint \"@rev\n\";",
        "holeyCode": "my @___ = (1, 2, 3);\n# reverseで逆順に\nmy @___ = reverse @nums;\n___ \"@rev\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "reverse",
            "flip",
            "invert",
            "back"
          ],
          "others": ["nums", "rev", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3 2 1\n"
          }
        ]
      },
    {
        "title": "length で文字列の長さ",
        "description": "「length」を使って文字列の長さを取得しましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "length（レングス）とは？",
            "content": "# 文字列の長さを調べる\n\n**length**（レングス＝「長さ」）は、文字列が何文字あるかを返します。\n\n**たとえば：**\n- \"hello\" → 5文字\n- \"Perl\" → 4文字\n- \"\" → 0文字（空文字列）\n\n入力チェック（「5文字以上入力してください」など）によく使います。"
          },
          {
            "title": "length の使い方",
            "content": "# length(文字列)\n\n**このコードは何をしているの？**\n```perl\nmy $len = length(\"hello\");\nprint $len; # 5\n```\n\n**解説：**\n1. \"hello\" の文字数を数える\n2. 結果は 5\n3. `$len` に 5 が入る\n\n**配列の要素数を知りたいとき：**\n- 配列は `scalar(@arr)` または `@arr` を数値として使う\n- `length` は文字列専用です"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "my $text = \"Perl\";\n# lengthで長さを取得\nmy $len = length($text);\nprint \"$len\n\";",
        "holeyCode": "my $___ = \"Perl\";\n# lengthで長さを取得\nmy $___ = length($text);\n___ \"$len\n\";",
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
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "length",
            "len",
            "size",
            "count"
          ],
          "others": ["text", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\n"
          }
        ]
      }
  ]
};
