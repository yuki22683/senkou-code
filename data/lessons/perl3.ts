export const perl3Data = {
  "language": "perl",
  "lessonId": "perl-3",
  "lessonTitle": "Perl III - ファイル処理と高度な機能",
  "lessonDescription": "Perlのファイル処理と高度な機能を学びます。実践的なスクリプトを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "ファイルの読み書き",
      "content": "`open` でファイルを開きます。\\n\\n```perl\\n# 書き込みモード (>)\\nopen(my $fh, \">\", \"test.txt\") or die;\\nprint $fh \"hello\\n\";\\nclose($fh);\\n\\n# 読み込みモード (<)\\nopen(my $fh, \"<\", \"test.txt\") or die;\\nwhile (<$fh>) {\\n    print $_;\\n}\\nclose($fh);\\n```"
    },
    {
      "title": "chomp で改行除去",
      "content": "`chomp` で文字列末尾の改行を除去します。\\n\\n```perl\\nmy $text = \"hello\\n\";\\nchomp($text);\\nprint \"[$text]\\n\";\\n```\\n\\n=> [hello]\\n\\nファイルから1行ずつ読み込むときに必須です。\\n\\n```perl\\nwhile (my $line = <$fh>) {\\n    chomp($line);\\n    # 処理...\\n}\\n```"
    },
    {
      "title": "split と join",
      "content": "`split` で文字列を分割、`join` で配列を結合します。\\n\\n```perl\\n# 分割\\nmy $data = \"りんご:バナナ:みかん\";\\nmy @fruits = split(/:/, $data);\\nprint $fruits[0];\\n\\n# 結合\\nmy @words = (\"hello\", \"world\");\\nmy $sentence = join(\" \", @words);\\nprint $sentence;\\n```\\n\\n=> りんご\\n\\n=> hello world"
    },
    {
      "title": "push と pop",
      "content": "`push` で配列の末尾に追加、`pop` で取り出します。\\n\\n```perl\\nmy @nums = (1, 2);\\n\\npush(@nums, 3); \\nmy $last = pop(@nums);  # $last = 3\\n\\n# unshift/shift は先頭を操作\\nunshift(@nums, 0);\\nmy $first = shift(@nums);  # $first = 0\\n```\\n\\n=> (1, 2, 3)\\n\\n=> (0, 1, 2)"
    },
    {
      "title": "sort と reverse",
      "content": "`sort` で並べ替え、`reverse` で逆順にします。\\n\\n```perl\\nmy @words = (\"バナナ\", \"りんご\", \"みかん\");\\nmy @sorted = sort @words;\\n```\\n\\n=> (\"バナナ\", \"みかん\", \"りんご\")\\n\\n```\\nmy @nums = (1, 2, 3);\\nmy @rev = reverse @nums;\\n```\\n\\n=> (3, 2, 1)"
    },
    {
      "title": "length と substr",
      "content": "`length` で文字列の長さ、`substr` で部分文字列を取得します。\\n\\n```perl\\nmy $text = \"Perl\";\\nprint length($text);\\n\\n# substr(文字列, 開始位置, 長さ)\\nprint substr($text, 0, 2);\\nprint substr($text, 2);  \\n```\\n\\n=> 4\\n\\n=> Pe\\n\\n=> rl"
    }
  ],
  "exercises": [
    {
      "title": "ファイルを開こう",
      "description": "ファイルを開いてデータを読み込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "open（オープン）とは？",
          "content": "# ファイルを開く\\n\\n**open**（オープン＝「開く」）は、ファイルを開いてプログラムから読み書きできるようにします。\\n\\n**たとえば：** 本を読むには、まず本を開かなければいけません。ファイルも同じで、読み書きする前に「開く」操作が必要です。\\n\\n開いたファイルは **ファイルハンドル** という「つまみ」を使って操作します。"
        },
        {
          "title": "open のモード",
          "content": "# 読む？書く？を指定する\\n\\n| モード | 意味 | 動作 |\\n|--------|------|------|\\n| `<` | 読み込み | ファイルの内容を読む |\\n| `>` | 書き込み | 新しく書く（上書き） |\\n| `>>` | 追記 | 末尾に追加する |\\n\\n**このコードは何をしているの？**\\n```perl\\nopen(my $fh, \"<\", \"file.txt\");\\n```\\n\\n**解説：**\\n- `my $fh` → ファイルハンドル（操作用のつまみ）\\n- `\"<\"` → 読み込みモード\\n- `\"file.txt\"` → 開くファイル名"
        }
      ],
      "correctCode": "# openでファイルを開く\\nopen(my $fh, \">\", \"/tmp/テスト.txt\") or die;\\n# ファイルに「hello」を書き込む\\nprint $fh \"hello\\n\";\\n# ファイルを閉じる\\nclose($fh);\\n# printで「written」を出力\\nprint \"written\\n\";",
      "holeyCode": "# openでファイルを開く\\n___(my $___, \"___\", \"___\") or ___;\\n# ファイルに「hello」を書き込む\\n___ $___ \"___\\n\";\\n# ファイルを閉じる\\n___(___);\\n# printで「written」を出力\\n___ \"___\\n\";",
      "correctLines": [
          "# openでファイルを開く",
          "open(my $fh, \">\", \"/tmp/テスト.txt\") or die;",
          "# ファイルに「hello」を書き込む",
          "print $fh \"hello\\n\";",
          "# ファイルを閉じる",
          "close($fh);",
          "# printで「written」を出力",
          "print \"written\\n\";"
        ],
      "lineHints": [
          null,
          "openでファイルを開き、失敗時はdieで終了します。",
          null,
          "ファイルハンドル$fhに文字列を書き込みます。",
          null,
          "closeでファイルハンドルを閉じます。",
          null,
          "標準出力に文字列を出力します。"
        ],
        "candidates": {
          "functions": [
            "open",
            "fopen",
            "file",
            "read"
          ],
          "others": ["\"", "close", "print", "fh", "$fh", "die", ";", ">", "/tmp/テスト.txt", "hello\\n", "written\\n", "hello", "written", "hello\\n\";", "# printで「written」を出力"]
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
      "description": "ファイルを正しく閉じてリソースを解放する方法を学びます",
      "tutorialSlides": [
        {
          "title": "close（クローズ）とは？",
          "content": "# ファイルを閉じる\\n\\n**close**（クローズ＝「閉じる」）は、開いたファイルを閉じて、使用を終了します。\\n\\n**たとえば：** 本を読み終わったら本を閉じますよね。閉じないと他の人が使えなかったり、本が傷んだりします。\\n\\nファイルも同じで、使い終わったら **必ず閉じる** のがマナーです。"
        },
        {
          "title": "close の使い方",
          "content": "# close(ファイルハンドル)\\n\\n**このコードは何をしているの？**\\n```perl\\nclose($fh);\\n```\\n\\n**解説：**\\n- `$fh`（ファイルハンドル）で開いたファイルを閉じる\\n\\n**なぜ閉じるの？**\\n1. 書き込んだデータを確実に保存するため\\n2. コンピュータのリソース（メモリなど）を解放するため\\n3. 他のプログラムがファイルを使えるようにするため"
        }
      ],
      "correctCode": "# openでファイルを開く\\nopen(my $fh, \">\", \"/tmp/テスト2.txt\") or die;\\n# ファイルに「data」を書き込む\\nprint $fh \"data\\n\";\\n# closeでファイルを閉じる\\nclose($fh);\\n# printで「closed」を出力\\nprint \"closed\\n\";",
      "holeyCode": "# openでファイルを開く\\n___(my $___, \\\"___\\\", \\\"___\\\") or ___;\\n# ファイルに「data」を書き込む\\n___ $___ \\\"___\\n\\\";\\n# closeでファイルを閉じる\\n___(___);\\n# printで「closed」を出力\\n___ \\\"___\\n\\\";",
      "correctLines": [
          "# openでファイルを開く",
          "open(my $fh, \">\", \"/tmp/テスト2.txt\") or die;",
          "# ファイルに「data」を書き込む",
          "print $fh \"data\\n\";",
          "# closeでファイルを閉じる",
          "close($fh);",
          "# printで「closed」を出力",
          "print \"closed\\n\";"
        ],
      "lineHints": [
          null,
          "openでファイルを開き、失敗時はdieで終了します。",
          null,
          "ファイルハンドル$fhに文字列を書き込みます。",
          null,
          "closeでファイルハンドルを閉じます。",
          null,
          "標準出力に文字列を出力します。"
        ],
        "candidates": {
          "functions": [
            "close",
            "fclose",
            "end",
            "shut"
          ],
          "others": ["\"", "print", "open", "fh", "$fh", "die", ";", ">", "/tmp/テスト2.txt", "data\\n", "closed\\n", "data", "closed", "data\\n\";", "# printで「closed」を出力"]
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
      "description": "chomp で改行を除去の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "chomp（チョンプ）とは？",
          "content": "# 末尾の改行を取り除く\\n\\n**chomp**（チョンプ＝「かじり取る」）は、文字列の末尾にある改行文字（`\\n`）を取り除きます。\\n\\n**たとえば：** ファイルから1行読み込むと、行末に改行がついてきます。これを取り除かないと余計な空行が入ってしまいます。\\n\\nファイル処理でとてもよく使う関数です！"
        },
        {
          "title": "chomp の使い方",
          "content": "# chomp($変数)\\n\\n**このコードは何をしているの？**\\n```perl\\nmy $line = \"hello\\n\";\\nchomp($line);\\nprint $line; # hello\\n```\\n\\n**解説：**\\n1. `$line` に \"hello\\n\"（改行付き）を入れる\\n2. `chomp($line)` で末尾の `\\n` を除去\\n3. `$line` は \"hello\" になる\\n\\n**ポイント：** chompは変数の中身を直接変更します。戻り値は使いません。"
        }
      ],
      "correctCode": "# $textに改行付き文字列を代入\\nmy $text = \"hello\\n\";\\n# chompで改行を除去\\nchomp($text);\\n# printで[$text]を出力\\nprint \"[$text]\\n\";",
      "holeyCode": "# $textに改行付き文字列を代入\\nmy $___ = \\\"___\\n\\\";\\n# chompで改行を除去\\n___(___);\\n# printで[$text]を出力\\n___ \\\"[$___]\\n\\\";",
      "correctLines": [
          "# $textに改行付き文字列を代入",
          "my $text = \"hello\\n\";",
          "# chompで改行を除去",
          "chomp($text);",
          "# printで[$text]を出力",
          "print \"[$text]\\n\";"
        ],
      "lineHints": [
          null,
          "変数$textに改行付きの文字列を代入します。",
          null,
          "chompで末尾の改行を除去します。",
          null,
          "print文で結果を出力します。"
        ],
        "candidates": {
          "functions": [
            "chomp",
            "chop",
            "trim",
            "strip"
          ],
          "others": ["text", "$text", "print", "\"", ";", "hello\\n", "[$text]\\n", "hello", "hello\\n\";", "# printで[$text]を出力"]
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
      "description": "文字列を区切り文字で分割する方法を学びます",
      "tutorialSlides": [
        {
          "title": "split（スプリット）とは？",
          "content": "# 文字列をバラバラに分ける\\n\\n**split**（スプリット＝「分割する」）は、文字列を指定した区切り文字で分けて配列にします。\\n\\n**たとえば：** \"りんご,みかん,バナナ\" という文字列をカンマで分けて、3つの果物の配列を作れます。\\n\\nCSVファイル（カンマ区切りのデータ）を読むときによく使います。"
        },
        {
          "title": "split の使い方",
          "content": "# split(/区切り/, 文字列)\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @parts = split(/,/, \"a,b,c\");\\nprint $parts[1]; # b\\n```\\n\\n**解説：**\\n1. \"a,b,c\" をカンマ `,` で分割\\n2. 結果は (\"a\", \"b\", \"c\") の配列\\n3. `$parts[1]` で2番目の要素 \"b\" を取得\\n\\n**区切り文字いろいろ：**\\n- `/,/` → カンマで分割\\n- `/::/` → コロンで分割\\n- `/\\s+/` → 空白で分割"
        }
      ],
      "correctCode": "# $dataに果物名をコロン区切りで代入\\nmy $data = \"りんご:バナナ:さくらんぼ\";\\n# splitで分割\\nmy @fruits = split(/:/, $data);\\n# printで2番目の果物（バナナ）を出力\\nprint $fruits[1] . \"\\n\";",
      "holeyCode": "# $dataに果物名をコロン区切りで代入\\nmy $___ = \\\"___\\\";\\n# splitで分割\\nmy @___ = ___(/___/, $___);\\n# printで2番目の果物（バナナ）を出力\\n___ $___[___] . \\\"\\n\\\";",
      "correctLines": [
          "# $dataに果物名をコロン区切りで代入",
          "my $data = \"りんご:バナナ:さくらんぼ\";",
          "# splitで分割",
          "my @fruits = split(/:/, $data);",
          "# printで2番目の果物（バナナ）を出力",
          "print $fruits[1] . \"\\n\";"
        ],
      "lineHints": [
          null,
          "変数$dataにコロン区切りの文字列を代入します。",
          null,
          "split関数でコロンを区切り文字として配列@fruitsに分割します。",
          null,
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "join（ジョイン）とは？",
          "content": "# 配列を1つの文字列につなげる\\n\\n**join**（ジョイン＝「結合する」）は、配列の要素を区切り文字でつなげて1つの文字列にします。\\n\\n**たとえば：** (\"りんご\", \"みかん\", \"バナナ\") という配列を \"りんご,みかん,バナナ\" という1つの文字列にできます。\\n\\nsplit の反対の操作です！"
        },
        {
          "title": "join の使い方",
          "content": "# join(区切り文字, @配列)\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @arr = (\"a\", \"b\", \"c\");\\nmy $str = join(\"-\", @arr);\\nprint $str; # a-b-c\\n```\\n\\n**解説：**\\n1. (\"a\", \"b\", \"c\") の配列を `-` でつなげる\\n2. 結果は \"a-b-c\" という文字列\\n\\n**split と join の関係：**\\n- split → 文字列を配列に分解\\n- join → 配列を文字列にまとめる"
        }
      ],
      "correctCode": "# wordsに文字列配列（hello、world）を代入\\nmy @words = (\\\"hello\\\", \\\"world\\\");\\n# joinで結合\\nmy $sentence = join(\\\" \\\", @words);\\n# printで$sentenceを出力\\nprint \\\"$sentence\\n\\\";",
      "holeyCode": "# wordsに文字列配列（hello、world）を代入\\nmy @___ = (\\\"___\\\", \\\"___\\\");\\n# joinで結合\\nmy $___ = ___(\\\"___\\\", @___);\\n# printで$sentenceを出力\\n___ \\\"$___\\n\\\";",
      "correctLines": [
          "# wordsに文字列配列（hello、world）を代入",
          "my @words = (\\\"hello\\\", \\\"world\\\");",
          "# joinで結合",
          "my $sentence = join(\\\" \\\", @words);",
          "# printで$sentenceを出力",
          "print \\\"$sentence\\n\\\";"
        ],
      "lineHints": [
          null,
          "配列@wordsに2つの文字列を代入します。",
          null,
          "join関数でスペースを区切り文字として配列を結合します。",
          null,
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
      "description": "配列やリストに新しい要素を追加する方法を学びます",
      "tutorialSlides": [
        {
          "title": "push（プッシュ）とは？",
          "content": "# 配列の末尾に追加する\\n\\n**push**（プッシュ＝「押し込む」）は、配列の末尾に新しい要素を追加します。\\n\\n**たとえば：** 行列の最後に人が並ぶようなイメージです。(1, 2) という配列に 3 を push すると (1, 2, 3) になります。"
        },
        {
          "title": "push の使い方",
          "content": "# push(@配列, 追加する値)\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @arr = (1, 2);\\npush(@arr, 3);\\nprint $arr[2]; # 3\\n```\\n\\n**解説：**\\n1. @arr は (1, 2)\\n2. push で 3 を末尾に追加\\n3. @arr は (1, 2, 3) になる\\n4. `$arr[2]` は 3\\n\\n**複数追加：** `push(@arr, 3, 4, 5)` で一度に複数追加できます。"
        }
      ],
      "correctCode": "# @numsに(1, 2)を代入\\nmy @nums = (1, 2);\\n# pushで追加\\npush(@nums, 3);\\n# printで@numsを出力\\nprint \\\"@nums\\n\\\";",
      "holeyCode": "# @numsに(1, 2)を代入\\nmy @___ = (___, ___);\\n# pushで追加\\n___(@___, ___);\\n# printで@numsを出力\\n___ \\\"@___\\n\\\";",
      "correctLines": [
          "# @numsに(1, 2)を代入",
          "my @nums = (1, 2);",
          "# pushで追加",
          "push(@nums, 3);",
          "# printで@numsを出力",
          "print \\\"@nums\\n\\\";"
        ],
      "lineHints": [
          null,
          "配列@numsに初期値1と2を代入します。",
          null,
          "push関数で配列の末尾に3を追加します。",
          null,
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
      "description": "配列やリストから要素を取り除く方法を学びます",
      "tutorialSlides": [
        {
          "title": "pop（ポップ）とは？",
          "content": "# 配列の末尾から取り出す\\n\\n**pop**（ポップ＝「ポンと取り出す」）は、配列の末尾から要素を取り出します。取り出した要素は配列からなくなります。\\n\\n**たとえば：** トランプの山札から1枚取るようなイメージです。(1, 2, 3) から pop すると 3 が取れて、配列は (1, 2) になります。\\n\\npush の反対の操作です！"
        },
        {
          "title": "pop の使い方",
          "content": "# pop(@配列)\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @arr = (1, 2, 3);\\nmy $last = pop(@arr);\\nprint $last; # 3\\n```\\n\\n**解説：**\\n1. @arr は (1, 2, 3)\\n2. pop で末尾の 3 を取り出す\\n3. `$last` に 3 が入る\\n4. @arr は (1, 2) になる\\n\\n**push と pop の関係：**\\n- push → 末尾に追加\\n- pop → 末尾から取り出し"
        }
      ],
      "correctCode": "# @numsに(10, 20, 30)を代入\\nmy @nums = (10, 20, 30);\\n# popで取り出す\\nmy $last = pop(@nums);\\n# printで$lastを出力\\nprint \\\"$last\\n\\\";",
      "holeyCode": "# @numsに(10, 20, 30)を代入\\nmy @___ = (___, ___, ___);\\n# popで取り出す\\nmy $___ = ___(@___);\\n# printで$lastを出力\\n___ \\\"$___\\n\\\";",
      "correctLines": [
          "# @numsに(10, 20, 30)を代入",
          "my @nums = (10, 20, 30);",
          "# popで取り出す",
          "my $last = pop(@nums);",
          "# printで$lastを出力",
          "print \\\"$last\\n\\\";"
        ],
      "lineHints": [
          null,
          "配列@numsに初期値10、20、30を代入します。",
          null,
          "pop関数で配列の末尾から要素を取り出し$lastに代入します。",
          null,
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
      "description": "配列やリストの要素を順番に並べ替える方法を学びます",
      "tutorialSlides": [
        {
          "title": "sort（ソート）とは？",
          "content": "# 配列を順番に並べ替える\\n\\n**sort**（ソート＝「並べ替える」）は、配列の要素を順番に並べ替えた新しいリストを返します。\\n\\n**たとえば：** バラバラのトランプを小さい順に並べ直すようなイメージです。\\n\\nデフォルトはアルファベット順（辞書順）で並べます。"
        },
        {
          "title": "sort の使い方",
          "content": "# sort @配列\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @sorted = sort @arr;\\nmy @nums = sort { $a <=> $b } @nums;\\n```\\n\\n**解説：**\\n- `sort @arr` → 文字列順に並べ替え\\n- `sort { $a <=> $b } @nums` → 数値順に並べ替え\\n\\n**なぜ数値順は違う書き方？**\\n- デフォルトは文字列比較（\"10\" < \"2\" になる）\\n- `<=>` は数値比較（10 > 2 になる）\\n- `$a` と `$b` は比較する2つの値を表す特別な変数"
        }
      ],
      "correctCode": "# 果物の配列（バナナ、りんご、さくらんぼ）を作成\\nmy @words = (\\\"バナナ\\\", \\\"りんご\\\", \\\"さくらんぼ\\\");\\n# sortで並べ替え\\nmy @sorted = sort @words;\\n# printでソート後の最初の単語を出力\\nprint \\\"$sorted[0]\\n\\\";",
      "holeyCode": "# 果物の配列（バナナ、りんご、さくらんぼ）を作成\\nmy @___ = (\\\"___\\\", \\\"___\\\", \\\"___\\\");\\n# sortで並べ替え\\nmy @___ = ___ @___;\\n# printでソート後の最初の単語を出力\\n___ \\\"$___[___]\\n\\\";",
      "correctLines": [
          "# 果物の配列（バナナ、りんご、さくらんぼ）を作成",
          "my @words = (\\\"バナナ\\\", \\\"りんご\\\", \\\"さくらんぼ\\\");",
          "# sortで並べ替え",
          "my @sorted = sort @words;",
          "# printでソート後の最初の単語を出力",
          "print \\\"$sorted[0]\\n\\\";"
        ],
      "lineHints": [
          null,
          "配列@wordsに3つの果物名を代入します。",
          null,
          "sort関数で配列をアルファベット順に並べ替えます。",
          null,
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "reverse（リバース）とは？",
          "content": "# 順番をひっくり返す\\n\\n**reverse**（リバース＝「逆にする」）は、配列の要素を逆順にした新しいリストを返します。\\n\\n**たとえば：** (1, 2, 3) を reverse すると (3, 2, 1) になります。トランプの山を裏返すようなイメージです。\\n\\n文字列にも使えます（\"hello\" → \"olleh\"）。"
        },
        {
          "title": "reverse の使い方",
          "content": "# reverse @配列 または reverse 文字列\\n\\n**このコードは何をしているの？**\\n```perl\\nmy @rev = reverse @arr;\\nmy $str = reverse \"hello\"; # olleh\\n```\\n\\n**解説：**\\n- `reverse @arr` → 配列を逆順に\\n- `reverse \"hello\"` → 文字列を逆順に（\"olleh\"）\\n\\n**sort と reverse を組み合わせ：**\\n```perl\\nmy @desc = reverse sort @arr;  # 降順\\n```"
        }
      ],
      "correctCode": "# @numsに(1, 2, 3)を代入\\nmy @nums = (1, 2, 3);\\n# reverseで逆順に\\nmy @rev = reverse @nums;\\n# printで@revを出力\\nprint \\\"@rev\\n\\\";",
      "holeyCode": "# @numsに(1, 2, 3)を代入\\nmy @___ = (___, ___, ___);\\n# reverseで逆順に\\nmy @___ = ___ @___;\\n# printで@revを出力\\n___ \\\"@___\\n\\\";",
      "correctLines": [
          "# @numsに(1, 2, 3)を代入",
          "my @nums = (1, 2, 3);",
          "# reverseで逆順に",
          "my @rev = reverse @nums;",
          "# printで@revを出力",
          "print \\\"@rev\\n\\\";"
        ],
      "lineHints": [
          null,
          "配列@numsに1、2、3を代入します。",
          null,
          "reverse関数で配列の順序を逆にします。",
          null,
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
      "description": "文字列の長さを調べる方法を学びます",
      "tutorialSlides": [
        {
          "title": "length（レングス）とは？",
          "content": "# 文字列の長さを調べる\\n\\n**length**（レングス＝「長さ」）は、文字列が何文字あるかを返します。\\n\\n**たとえば：**\\n- \"hello\" → 5文字\\n- \"Perl\" → 4文字\\n- \"\" → 0文字（空文字列）\\n\\n入力チェック（「5文字以上入力してください」など）によく使います。"
        },
        {
          "title": "length の使い方",
          "content": "# length(文字列)\\n\\n**このコードは何をしているの？**\\n```perl\\nmy $len = length(\"hello\");\\nprint $len; # 5\\n```\\n\\n**解説：**\\n1. \"hello\" の文字数を数える\\n2. 結果は 5\\n3. `$len` に 5 が入る\\n\\n**配列の要素数を知りたいとき：**\\n- 配列は `scalar(@arr)` または `@arr` を数値として使う\\n- `length` は文字列専用です"
        }
      ],
      "correctCode": "# $textに言語名を代入\\nmy $text = \"Perl\";\\n# lengthで長さを取得\\nmy $len = length($text);\\n# printで$lenを出力\\nprint \"$len\\n\";",
      "holeyCode": "# $textに言語名を代入\\nmy $___ = \\\"___\\\";\\n# lengthで長さを取得\\nmy $___ = ___($___);\\n# printで$lenを出力\\n___ \\\"$___\\n\\\";",
      "correctLines": [
          "# $textに言語名を代入",
          "my $text = \"Perl\";",
          "# lengthで長さを取得",
          "my $len = length($text);",
          "# printで$lenを出力",
          "print \"$len\\n\";"
        ],
      "lineHints": [
          null,
          "変数$textに文字列\"Perl\"を代入します。",
          null,
          "length関数で文字列の長さを取得し$lenに代入します。",
          null,
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
