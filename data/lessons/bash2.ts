export const bash2Data = {
  "language": "bash",
  "lessonId": "bash-2",
  "lessonTitle": "Bash II - スクリプトと自動化",
  "lessonDescription": "Bashの高度な機能を学びます。配列、文字列操作、ファイル処理などシステム管理に役立つ技法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
        "title": "配列を使おう",
        "description": "Bashでの配列の使い方を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "配列とは？",
            "content": "# 複数の値を格納\n\nBashの **配列** は、複数の値を格納できます。`( )` で作成し、インデックスは0から始まります。"
          },
          {
            "title": "配列の使い方",
            "content": "# ${配列[番号]} でアクセス\n\n`${配列[@]}` ですべての要素を取得できます。\n\n**コード例：**\n```bash\narr=(\"a\" \"b\" \"c\")\necho ${arr[1]} # b\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 配列を定義（10, 20, 30）\nnums=(10 20 30)\n# 3番目の要素にアクセスするインデックス（0から数える）\necho ${nums[2]}",
        "holeyCode": "# 配列を定義（10, 20, 30）\nnums=(___ 20 30)\n# 3番目の要素にアクセスするインデックス（0から数える）\necho ${nums[___]}",
        "correctLines": [
          "# 配列を定義（10, 20, 30）",
          "nums=(10 20 30)",
          "# 3番目の要素にアクセスするインデックス（0から数える）",
          "echo ${nums[2]}"
        ],
        "lineHints": [
          null,
          "インデックス 2 で3番目の要素にアクセスします。",
          null,
          null
        ],
        "candidates": {
          "numbers": [
            "2"
          ],
          "others": [
            "10"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\n"
          }
        ]
      },
    {
        "title": "文字列の長さを取得",
        "description": "文字列の長さを取得する方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "文字列の長さ",
            "content": "# ${#変数} で長さを取得\n\n`#` を変数名の前につけると、その長さを取得できます。"
          },
          {
            "title": "長さの取得",
            "content": "# 文字数を返す\n\n配列の場合は要素数を返します。\n\n**コード例：**\n```bash\ntext=\"Hello\"\necho ${#text} # 5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 変数に文字列を代入\nword=\"Bash\"\n# 文字列の長さを取得する記号\necho ${#word}",
        "holeyCode": "# 変数に文字列を代入\nword=\"___\"\n# 文字列の長さを取得する記号\necho ${___word}",
        "correctLines": [
          "# 変数に文字列を代入",
          "word=\"Bash\"",
          "# 文字列の長さを取得する記号",
          "echo ${#word}"
        ],
        "lineHints": [
          null,
          "# で長さを取得します。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "#"
          ],
          "others": [
            "Bash"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\n"
          }
        ]
      },
    {
        "title": "文字列の部分取得",
        "description": "文字列の一部を取り出す方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "部分文字列",
            "content": "# ${変数:開始:長さ}\n\n開始位置と長さを指定して部分文字列を取得できます。"
          },
          {
            "title": "スライス",
            "content": "# 位置は0から\n\n開始位置は0から数えます。\n\n**コード例：**\n```bash\ntext=\"Hello World\"\necho ${text:0:5} # Hello\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 変数に文字列を代入\ntext=\"Hello World\"\n# Worldが始まる位置（0から数える）\necho ${text:6:5}",
        "holeyCode": "# 変数に文字列を代入\ntext=\"___\"\n# Worldが始まる位置（0から数える）\necho ${text:___:5}",
        "correctLines": [
          "# 変数に文字列を代入",
          "text=\"Hello World\"",
          "# Worldが始まる位置（0から数える）",
          "echo ${text:6:5}"
        ],
        "lineHints": [
          null,
          "6 から始めて World を取得します。",
          null,
          null
        ],
        "candidates": {
          "numbers": [
            "6"
          ],
          "others": [
            "Hello World"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "World\n"
          }
        ]
      },
    {
        "title": "関数に引数を渡す",
        "description": "関数に引数を渡す方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "関数の引数",
            "content": "# $1, $2, ... で引数\n\n関数内では `$1`, `$2` などで引数を参照します。"
          },
          {
            "title": "引数の使い方",
            "content": "# 位置パラメータ\n\n`$1` が1番目、`$2` が2番目の引数です。\n\n**コード例：**\n```bash\ngreet() {\n    echo \"Hello, $1\"\n}\ngreet \"Taro\" # Hello, Taro\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# add関数を定義\nadd() {\n    # 最初の引数を参照する変数\n    echo $(($1 + $2))\n}\n# 関数を呼び出す\nadd 3 5",
        "holeyCode": "# add関数を定義\n___() {\n    # 最初の引数を参照する変数\n    echo $((___ + $2))\n}\n# 関数を呼び出す\nadd ___ 5",
        "correctLines": [
          "# add関数を定義",
          "add() {",
          "    # 最初の引数を参照する変数",
          "    echo $(($1 + $2))",
          "}",
          "# 関数を呼び出す",
          "add 3 5"
        ],
        "lineHints": [
          null,
          "$1 で最初の引数を参照します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "$1"
          ],
          "others": [
            "add",
            "3"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8\n"
          }
        ]
      },
    {
        "title": "戻り値を使おう",
        "description": "関数から値を返す方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "戻り値",
            "content": "# echo で返す\n\nBashでは `echo` で出力した値を `$()` で受け取るのが一般的です。"
          },
          {
            "title": "値の受け取り",
            "content": "# $(関数) で取得\n\n`result=$(関数)` で関数の出力を受け取ります。\n\n**コード例：**\n```bash\ndouble() {\n    echo $(($1 * 2))\n}\nresult=$(double 5)\necho $result # 10\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# square関数を定義\nsquare() {\n    # 引数を2乗する\n    echo $(($1 * $1))\n}\n# コマンドの出力を取得する構文\nresult=$(square 4)\n# resultを表示\necho $result",
        "holeyCode": "# square関数を定義\n___() {\n    # 引数を2乗する\n    echo $(($1 * ___))\n___\n# コマンドの出力を取得する構文\nresult=$(___ ___)\n# resultを表示\necho ___",
        "correctLines": [
          "# square関数を定義",
          "square() {",
          "    # 引数を2乗する",
          "    echo $(($1 * $1))",
          "}",
          "# コマンドの出力を取得する構文",
          "result=$(square 4)",
          "# resultを表示",
          "echo $result"
        ],
        "lineHints": [
          null,
          "$() で関数の出力を受け取ります。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "$"
          ],
          "others": ["square", "$1))", "result", "$1", "}", "4", "$result"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "16\n"
          }
        ]
      },
    {
        "title": "while ループ",
        "description": "条件が真の間繰り返す「while」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "while とは？",
            "content": "# 条件が真の間ループ\n\n**while** は、条件が真の間処理を繰り返します。"
          },
          {
            "title": "while の使い方",
            "content": "# while [ 条件 ]; do\n\n`do` と `done` で処理を囲みます。\n\n**コード例：**\n```bash\ni=0\nwhile [ $i -lt 3 ]; do\n    echo $i\n    i=$((i + 1))\ndone\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# iを1で初期化\ni=1\n# 条件が真の間繰り返すキーワード\nwhile [ $i -le 3 ]; do\n    # $iをechoで出力\n    echo $i\n    # iを1増やす\n    i=$((i + 1))\ndone",
        "holeyCode": "# iを1で初期化\ni=___\n# 条件が真の間繰り返すキーワード\n___ [ $i -le 3 ]; do\n    # $iをechoで出力\n    echo $___\n    # iを1増やす\n    i=$((___ + 1))\ndone",
        "correctLines": [
          "# iを1で初期化",
          "i=1",
          "# 条件が真の間繰り返すキーワード",
          "while [ $i -le 3 ]; do",
          "    # $iをechoで出力",
          "    echo $i",
          "    # iを1増やす",
          "    i=$((i + 1))",
          "done"
        ],
        "lineHints": [
          null,
          "条件が満たされている間、処理を繰り返します。",
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
            "while"
          ],
          "others": [
            "1",
            "i"
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
        "title": "case で分岐",
        "description": "複数の条件で分岐する「case」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "case とは？",
            "content": "# パターンで分岐\n\n**case** は、値がパターンに一致するかで分岐します。"
          },
          {
            "title": "case の使い方",
            "content": "# パターン) 処理;;\n\n`;;` で各パターンの処理を終えます。`*` はその他すべてです。\n\n**コード例：**\n```bash\ncase $x in\n    1) echo \"one\";;\n    2) echo \"two\";;\n    *) echo \"other\";;\nesac\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 変数に値を代入\nfruit=\"apple\"\n# パターンマッチで分岐するキーワード\ncase $fruit in\n    # appleの場合\n    apple) echo \"red\";;\n    # bananaの場合\n    banana) echo \"yellow\";;\n    # その他の場合\n    *) echo \"unknown\";;\nesac", "holeyCode": "# 変数に値を代入\nfruit=\"___\"\n# パターンマッチで分岐するキーワード\n___ $fruit in\n    # appleの場合\n    apple) echo \"___\";;\n    # bananaの場合\n    banana) echo \"yellow\";;\n    # その他の場合\n    *) echo \"unknown\";;\nesac",
        "correctLines": [
          "# 変数に値を代入",
          "fruit=\"apple\"",
          "# パターンマッチで分岐するキーワード",
          "case $fruit in",
          "    # appleの場合",
          "    apple) echo \"red\";;",
          "    # bananaの場合",
          "    banana) echo \"yellow\";;",
          "    # その他の場合",
          "    *) echo \"unknown\";;",
          "esac"
        ],
        "lineHints": [
          null,
          "case で分岐します。",
          null,
          "red と表示します。",
          null,
          "unknown と表示します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "case"
          ],
          "others": [
            "apple",
            "red",
            "unknown"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "red\n"
          }
        ]
      },
    {
        "title": "コマンド置換",
        "description": "コマンドの出力を変数に入れる方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "コマンド置換とは？",
            "content": "# コマンドの出力を取得\n\n**$()** を使うと、コマンドの出力を変数に格納できます。"
          },
          {
            "title": "コマンド置換の使い方",
            "content": "# $(コマンド)\n\n任意のコマンドの出力を取得できます。\n\n**コード例：**\n```bash\ntoday=$(date +%Y-%m-%d)\necho $today\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# コマンドの出力を変数に格納する構文\nfiles=$(echo \"test\")\n# \"Files: $files\"をechoで出力\necho \"Files: $files\"",
        "holeyCode": "# コマンドの出力を変数に格納する構文\nfiles=___(___)\n# \"Files: $files\"をechoで出力\necho \"Files: $___\"",
        "correctLines": [
          "# コマンドの出力を変数に格納する構文",
          "files=$(echo \"test\")",
          "# \"Files: $files\"をechoで出力",
          "echo \"Files: $files\""
        ],
        "lineHints": [
          null,
          "$() でコマンドの出力を取得します。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "$"
          ],
          "others": [
            "echo \"test\"",
            "files"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Files: test\n"
          }
        ]
      },
    {
        "title": "read で入力を受け取る",
        "description": "ユーザーからの入力を受け取る「read」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "read とは？",
            "content": "# 入力を変数に格納\n\n**read** は、標準入力から読み取った値を変数に格納します。"
          },
          {
            "title": "read の使い方",
            "content": "# read 変数名\n\nスペースで区切って複数の変数に分けることもできます。\n\n**コード例：**\n```bash\necho \"Name?\"\nread name\necho \"Hello, $name\"\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 標準入力を変数に読み込むコマンド\necho \"input:\" && read val && echo \"You entered: $val\"",
        "holeyCode": "# 標準入力を変数に読み込むコマンド\necho \"input:\" && ___ val && echo \"You entered: $val\"",
        "correctLines": [
          "# 標準入力を変数に読み込むコマンド",
          "echo \"input:\" && read val && echo \"You entered: $val\""
        ],
        "lineHints": [
          null,
          "文字列を標準出力に表示します。"
        ],
        "candidates": {
          "keywords": [
            "read"
          ]
        },
        "testCases": [
          {
            "input": "test\n",
            "expected_output": "input:\nYou entered: test\n"
          }
        ]
      },
    {
        "title": "ヒアドキュメント",
        "description": "複数行のテキストを扱う「ヒアドキュメント」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "ヒアドキュメントとは？",
            "content": "# 複数行のテキスト\n\n**<<** を使うと、複数行のテキストをまとめて扱えます。"
          },
          {
            "title": "ヒアドキュメントの使い方",
            "content": "# <<WORD ... WORD\n\n終端文字列までがテキストになります。\n\n**コード例：**\n```bash\ncat <<EOF\nLine 1\nLine 2\nEOF\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# ヒアドキュメントを開始する演算子\ncat <<END\n# 1行目のテキストを入力\nHello\n# 2行目のテキストを入力\nWorld\nEND",
        "holeyCode": "# ヒアドキュメントを開始する演算子\ncat ___END\n# 1行目のテキストを入力\n___\n# 2行目のテキストを入力\n___\nEND",
        "correctLines": [
          "# ヒアドキュメントを開始する演算子",
          "cat <<END",
          "# 1行目のテキストを入力",
          "Hello",
          "# 2行目のテキストを入力",
          "World",
          "END"
        ],
        "lineHints": [
          null,
          "<< でヒアドキュメントを始めます。",
          null,
          "Hello と入力しましょう。",
          null,
          "World と入力しましょう。",
          null
        ],
        "candidates": {
          "operators": [
            "<<"
          ],
          "others": [
            "Hello",
            "World"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello\nWorld\n"
          }
        ]
      }
  ]
}
