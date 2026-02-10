export const bash2Data = {
  "language": "bash",
  "lessonId": "bash-2",
  "lessonTitle": "Bash II - スクリプトと自動化",
  "lessonDescription": "Bashの高度な機能を学びます。配列、文字列操作、ファイル処理などシステム管理に役立つ技法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "配列（はいれつ）",
      "content": "複数の値を格納できる**配列**を作るには `( )` を使います。\\n\\n```bash\\narr=(\"a\" \"b\" \"c\")\\necho ${arr[0]}  # a\\necho ${arr[1]}  # b\\n```\\n\\nインデックスは 0 から始まります。`${arr[@]}` で全要素を取得できます。"
    },
    {
      "title": "文字列の長さ ${#変数}",
      "content": "`#` を変数名の前につけると、**文字列の長さ**を取得できます。\\n\\n```bash\\ntext=\"Hello\"\\necho ${#text}  # 5\\n```\\n\\n配列の場合は要素数を返します。"
    },
    {
      "title": "文字列の部分取得",
      "content": "`${変数:開始:長さ}` で**部分文字列**を取り出せます。\\n\\n```bash\\ntext=\"Hello World\"\\necho ${text:0:5}   # Hello\\necho ${text:6:5}   # World\\n```\\n\\n開始位置は0から数えます。"
    },
    {
      "title": "関数の定義",
      "content": "Bashでも**関数**を定義できます。\\n\\n```bash\\ngreet() {\\n    echo \"Hello, $1\"\\n}\\ngreet \"太郎\"  # Hello, 太郎\\n```\\n\\n`$1`, `$2` で引数にアクセスします。"
    },
    {
      "title": "コマンド置換 $()",
      "content": "コマンドの出力を変数に入れるには `$( )` を使います。\\n\\n```bash\\nresult=$(echo \"Hello\")\\necho $result  # Hello\\n```\\n\\n関数の戻り値もこの方法で取得します。"
    }
  ],
  "exercises": [
    {
      "title": "配列を使おう",
      "tutorialSlides": [
        {
          "title": "配列とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 複数の値を格納\\n\\nBashの **配列** は、複数の値を格納できます。`( )` で作成し、インデックスは0から始まります。"
        },
        {
          "title": "配列の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# ${配列[番号]} でアクセス\\n\\n`${配列[@]}` ですべての要素を取得できます。\\n\\n**コード例：**\\n```bash\\narr=(\"a\" \"b\" \"c\")\\necho ${arr[1]} # b\\n```"
        }
      ],
      "correctCode": "# 配列numsを定義\\nnums=(10 20 30)\\n# インデックス2（3つ目の要素）にアクセス\\necho ${nums[2]}",
      "holeyCode": "# 配列numsを定義\\n___=(___ 20 30)\\n# インデックス2（3つ目の要素）にアクセス\\n___ ${___[___]}",
      "correctLines": [
          "# 配列numsを定義",
          "nums=(10 20 30)",
          "# インデックス2（3つ目の要素）にアクセス",
          "echo ${nums[2]}"
        ],
      "lineHints": [
          null,
          "配列名と括弧内に並べた要素で配列を作成します。",
          null,
          "${配列名[インデックス]}で配列の要素にアクセスします。"
        ],
        "candidates": {
          "numbers": [
            "2",
            "10"
          ],
          "others": ["nums", "echo"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\\n"
          }
        ]
      },
    {
      "title": "文字列の長さを取得",
      "tutorialSlides": [
        {
          "title": "文字列の長さ",
          "image": "/illustrations/3d/gear.png",
          "content": "# ${#変数} で長さを取得\\n\\n`#` を変数名の前につけると、その長さを取得できます。"
        },
        {
          "title": "長さの取得",
          "image": "/illustrations/3d/gear.png",
          "content": "# 文字数を返す\\n\\n配列の場合は要素数を返します。\\n\\n**コード例：**\\n```bash\\ntext=\"Hello\"\\necho ${#text} # 5\\n```"
        }
      ],
      "correctCode": "# 変数wordに文字列を代入\\nword=\"Bash\"\\n# 文字列の長さを表示\\necho ${#word}",
      "holeyCode": "# 変数wordに文字列を代入\\n___=\"___\"\\n# 文字列の長さを表示\\n___ ${______}",
      "correctLines": [
          "# 変数wordに文字列を代入",
          "word=\"Bash\"",
          "# 文字列の長さを表示",
          "echo ${#word}"
        ],
      "lineHints": [
          null,
          "文字列を変数に代入します。",
          null,
          "${#変数名}で文字列の長さを取得できます。"
        ],
        "candidates": {
          "operators": [
            "#"
          ],
          "others": ["Bash", "word", "echo", "#word"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\\n"
          }
        ]
      },
    {
      "title": "文字列の部分取得",
      "tutorialSlides": [
        {
          "title": "部分文字列",
          "image": "/illustrations/3d/gear.png",
          "content": "# ${変数:開始:長さ}\\n\\n開始位置と長さを指定して部分文字列を取得できます。"
        },
        {
          "title": "スライス",
          "image": "/illustrations/3d_advanced/slicing.png",
          "content": "# 位置は0から\\n\\n開始位置は0から数えます。\\n\\n**コード例：**\\n```bash\\ntext=\"Hello World\"\\necho ${text:0:5} # Hello\\n```"
        }
      ],
      "correctCode": "# 変数textに文字列を代入\\ntext=\"Hello World\"\\n# インデックス6から5文字分を取得\\necho ${text:6:5}",
      "holeyCode": "# 変数textに文字列を代入\\n___=\"___\"\\n# インデックス6から5文字分を取得\\n___ ${___:___:5}",
      "correctLines": [
          "# 変数textに文字列を代入",
          "text=\"Hello World\"",
          "# インデックス6から5文字分を取得",
          "echo ${text:6:5}"
        ],
      "lineHints": [
          null,
          "部分取得対象の文字列を変数に代入します。",
          null,
          "${変数名:開始位置:長さ}で部分文字列を取得します。"
        ],
        "candidates": {
          "numbers": [
            "6"
          ],
          "others": ["Hello World", "text", "echo"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "World\\n"
          }
        ]
      },
    {
      "title": "関数に引数を渡す",
      "tutorialSlides": [
        {
          "title": "関数の引数",
          "image": "/illustrations/3d/arguments.png",
          "content": "# $1, $2, ... で引数\\n\\n関数内では `$1`, `$2` などで引数を参照します。"
        },
        {
          "title": "引数の使い方",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 位置パラメータ\\n\\n`$1` が1番目、`$2` が2番目の引数です。\\n\\n**コード例：**\\n```bash\\ngreet() {\\n    echo \"Hello, $1\"\\n}\\ngreet \"Taro\" # Hello, Taro\\n```"
        }
      ],
      "correctCode": "# add関数を定義\\nadd() {\\n    # 引数1と引数2を足して表示\\n    echo $(($1 + $2))\\n}\\n# 3と5を引数に渡して呼び出す\\nadd 3 5",
      "holeyCode": "# add関数を定義\\n___() {\\n    # 引数1と引数2を足して表示\\n    ___ $((___ + ___))\\n___\\n# 3と5を引数に渡して呼び出す\\n___ ___ ___",
      "correctLines": [
          "# add関数を定義",
          "add() {",
          "    # 引数1と引数2を足して表示",
          "    echo $(($1 + $2))",
          "}",
          "# 3と5を引数に渡して呼び出す",
          "add 3 5"
        ],
      "lineHints": [
          null,
          "関数名 add を定義します。",
          null,
          "$1は1番目、$2は2番目の引数を表す特殊変数です。",
          "関数ブロックを閉じます。",
          null,
          "関数を呼び出し、スペース区切りで引数を渡します。"
        ],
        "candidates": {
          "variables": [
            "$1",
            "$2"
          ],
          "others": ["add", "3", "5", "}", "echo"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\\n"
          }
        ]
      },
    {
      "title": "戻り値を使おう",
      "tutorialSlides": [
        {
          "title": "戻り値",
          "image": "/illustrations/3d/return.png",
          "content": "# echo で返す\\n\\nBashでは `echo` で出力した値を `$()` で受け取るのが一般的です。"
        },
        {
          "title": "値の受け取り",
          "image": "/illustrations/3d/gear.png",
          "content": "# $(関数) で取得\\n\\n`result=$(関数)` で関数の出力を受け取ります。\\n\\n**コード例：**\\n```bash\\ndouble() {\\n    echo $(($1 * 2))\\n}\\nresult=$(double 5)\\necho $result # 10\\n```"
        }
      ],
      "correctCode": "# square関数を定義\\nsquare() {\\n    # 引数を2乗する\\n    echo $(($1 * $1))\\n}\\n# 関数の出力をresultに格納\\nresult=$(square 4)\\n# $resultを表示\\necho $result",
      "holeyCode": "# square関数を定義\\n___() {\\n    # 引数を2乗する\\n    ___ $((___ * ___))\\n___\\n# 関数の出力をresultに格納\\n___=$(___ ___)\\n# $resultを表示\\n___ $___",
      "correctLines": [
          "# square関数を定義",
          "square() {",
          "    # 引数を2乗する",
          "    echo $(($1 * $1))",
          "}",
          "# 関数の出力をresultに格納",
          "result=$(square 4)",
          "# $resultを表示",
          "echo $result"
        ],
      "lineHints": [
          null,
          "関数名 square を定義します。",
          null,
          "$1を2回使って2乗を計算します。",
          "関数ブロックを閉じます。",
          null,
          "コマンド置換$()で関数の出力を変数に格納します。",
          null,
          "$記号で変数の値を展開して表示します。"
        ],
        "candidates": {
          "operators": [
            "*"
          ],
          "others": ["square", "$1", "echo", "}", "result", "4", "$result"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "16\\n"
          }
        ]
      },
    {
      "title": "while ループ",
      "tutorialSlides": [
        {
          "title": "while とは？",
          "image": "/illustrations/3d/loop.png",
          "content": "# 条件が真の間ループ\\n\\n**while** は、条件が真の間処理を繰り返します。"
        },
        {
          "title": "while の使い方",
          "image": "/illustrations/3d/loop.png",
          "content": "# while [ 条件 ]; do\\n\\n`do` と `done` で処理を囲みます。\\n\\n**コード例：**\\n```bash\\ni=0\\nwhile [ $i -lt 3 ]; do\\n    echo $i\\n    i=$((i + 1))\\ndone\\n```"
        }
      ],
      "correctCode": "# 変数iを1で初期化\\ni=1\\n# iが3以下の間ループ\\nwhile [ $i -le 3 ]; do\\n    # 現在のiを表示\\n    echo $i\\n    # iを1増やす\\n    i=$((i + 1))\\ndone",
      "holeyCode": "# 変数iを1で初期化\\n___=___\\n# iが3以下の間ループ\\n___ [ $___ -___ ___ ]; do\\n    # 現在のiを表示\\n    ___ $___\\n    # iを1増やす\\n    ___=$((___ + 1))\\n___",
      "correctLines": [
          "# 変数iを1で初期化",
          "i=1",
          "# iが3以下の間ループ",
          "while [ $i -le 3 ]; do",
          "    # 現在のiを表示",
          "    echo $i",
          "    # iを1増やす",
          "    i=$((i + 1))",
          "done"
        ],
      "lineHints": [
          null,
          "ループカウンタを初期化します。",
          null,
          "whileで条件が真の間繰り返します。-leは「以下」の比較演算子です。",
          null,
          "ループ内で現在の値を出力します。",
          null,
          "算術展開で変数を1増やします。",
          "ループブロックを終了するキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "while",
            "done"
          ],
          "others": ["1", "i", "echo", "le", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "case で分岐",
      "tutorialSlides": [
        {
          "title": "case とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# パターンで分岐\\n\\n**case** は、値がパターンに一致するかで分岐します。"
        },
        {
          "title": "case の使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# パターン) 処理;;\\n\\n`;;` で各パターンの処理を終えます。`*` はその他すべてです。\\n\\n**コード例：**\\n```bash\\ncase $x in\\n    1) echo \"one\";;\\n    2) echo \"two\";;\\n    *) echo \"other\";;\\nesac\\n```"
        }
      ],
      "correctCode": "# 変数fruitに値を代入\\nfruit=\"りんご\"\\n# fruitの値で分岐\\ncase $fruit in\\n    # りんごの場合\\n    りんご) echo \"赤\";;\\n    # バナナの場合\\n    バナナ) echo \"黄色\";;\\n    # その他の場合\\n    *) echo \"その他\";;\\nesac",
      "holeyCode": "# 変数fruitに値を代入\\n___=\"___\"\\n# fruitの値で分岐\\n___ $___ in\\n    # りんごの場合\\n    りんご) ___ \"___\";;\\n    # バナナの場合\\n    ___) ___ \"___\";;\\n    # その他の場合\\n    *) ___ \"その他\";;\\n___",
      "correctLines": [
          "# 変数fruitに値を代入",
          "fruit=\"りんご\"",
          "# fruitの値で分岐",
          "case $fruit in",
          "    # りんごの場合",
          "    りんご) echo \"赤\";;",
          "    # バナナの場合",
          "    バナナ) echo \"黄色\";;",
          "    # その他の場合",
          "    *) echo \"その他\";;",
          "esac"
        ],
      "lineHints": [
          null,
          "分岐対象の値を変数に代入します。",
          null,
          "caseで変数の値に応じて処理を分岐します。",
          null,
          "パターンにマッチした場合の処理です。;;で区切ります。",
          null,
          "2つ目のパターンと処理を記述します。",
          null,
          "デフォルトパターン(*)にマッチした場合の処理です。",
          "case文を終了するキーワードです（caseの逆さ綴り）。"
        ],
        "candidates": {
          "keywords": [
            "case",
            "esac"
          ],
          "others": ["fruit", "りんご", "バナナ", "echo", "赤", "黄色"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "赤\\n"
          }
        ]
      },
    {
      "title": "コマンド置換",
      "tutorialSlides": [
        {
          "title": "コマンド置換とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# コマンドの出力を取得\\n\\n**$()** を使うと、コマンドの出力を変数に格納できます。"
        },
        {
          "title": "コマンド置換の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# $(コマンド)\\n\\n任意のコマンドの出力を取得できます。\\n\\n**コード例：**\\n```bash\\ntoday=$(date +%Y-%m-%d)\\necho $today\\n```"
        }
      ],
      "correctCode": "# 出力を変数filesに格納\\nfiles=$(echo \"テスト\")\\n# $filesの内容を表示\\necho \"Files: $files\"",
      "holeyCode": "# 出力を変数filesに格納\\n___=$(___ \"___\")\\n# $filesの内容を表示\\n___ \"___: $___\"",
      "correctLines": [
          "# 出力を変数filesに格納",
          "files=$(echo \"テスト\")",
          "# $filesの内容を表示",
          "echo \"Files: $files\""
        ],
      "lineHints": [
          null,
          "$()内のコマンドの出力を変数に格納します。",
          null,
          "ダブルクォート内で$変数名を展開して表示します。"
        ],
      "candidates": {
        "others": ["files", "echo", "テスト", "Files"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Files: テスト\\n"
        }
      ]
    },
    {
      "title": "read で入力を受け取る",
      "tutorialSlides": [
        {
          "title": "read とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 入力を変数に格納\\n\\n**read** は、標準入力から読み取った値を変数に格納します。"
        },
        {
          "title": "read の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# read 変数名\\n\\nスペースで区切って複数の変数に分けることもできます。\\n\\n**コード例：**\\n```bash\\necho \"Name?\"\\nread name\\necho \"Hello, $name\"\\n```"
        }
      ],
      "correctCode": "# メッセージを出して入力を変数valに読み込む\\necho \"入力:\" && read val && echo \"入力内容は: $val\"",
      "holeyCode": "# メッセージを出して入力を変数valに読み込む\\n___ \"入力:\" && ___ ___ && ___ \"入力内容は: $___\"",
      "correctLines": [
          "# メッセージを出して入力を変数valに読み込む",
          "echo \"入力:\" && read val && echo \"入力内容は: $val\""
        ],
      "lineHints": [
          null,
          "readコマンドでユーザー入力を受け取り、変数に格納します。"
        ],
        "candidates": {
          "keywords": [
            "read"
          ],
          "others": ["echo", "val"]
        },
        "testCases": [
          {
            "input": "test\\n",
            "expected_output": "入力:\\n入力内容は: test\\n"
          }
        ]
      },
    {
      "title": "ヒアドキュメント",
      "tutorialSlides": [
        {
          "title": "ヒアドキュメントとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 複数行のテキスト\\n\\n**<<** を使うと、複数行のテキストをまとめて扱えます。"
        },
        {
          "title": "ヒアドキュメントの使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# <<WORD ... WORD\\n\\n終端文字列までがテキストになります。\\n\\n**コード例：**\\n```bash\\ncat <<EOF\\nLine 1\\nLine 2\\nEOF\\n```"
        }
      ],
      "correctCode": "# ENDラベルまでをcatに渡す\\ncat <<END\\nHello\\nWorld\\nEND",
      "holeyCode": "# ENDラベルまでをcatに渡す\\n___ ___END\\n___\\n___\\n___",
      "correctLines": [
          "# ENDラベルまでをcatに渡す",
          "cat <<END",
          "Hello",
          "World",
          "END"
        ],
      "lineHints": [
          null,
          "<<でヒアドキュメントを開始します。ENDまでの内容がcatに渡されます。",
          "ヒアドキュメントの内容の1行目です。",
          "ヒアドキュメントの内容の2行目です。",
          "開始時と同じラベルでヒアドキュメントを終了します。"
        ],
        "candidates": {
          "operators": [
            "<<"
          ],
          "others": ["cat", "Hello", "World", "END"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello\\nWorld\\n"
          }
        ]
      }
  ]
}