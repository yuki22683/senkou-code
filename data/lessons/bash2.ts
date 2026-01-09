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
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数の値を格納\n\nBashの **配列** は、複数の値を格納できます。`( )` で作成し、インデックスは0から始まります。"
        },
        {
          "title": "配列の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# ${配列[番号]} でアクセス\n\n`${配列[@]}` ですべての要素を取得できます。\n\n**コード例：**\n```bash\narr=(\"a\" \"b\" \"c\")\necho ${arr[1]} # b\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "nums=(10 20 30)\n# 2で3番目の要素を取得\necho ${nums[2]}",
      "holeyCode": "___",
      "correctLines": [
        ""nums=(10 20 30)",\n        "echo ${nums[2"
      ]}"
      ],
      "lineHints": [
        "",
        "インデックス 2 で3番目の要素にアクセスします。"
      ],
      "candidates": {
        "numbers": ["2"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# ${#変数} で長さを取得\n\n`#` を変数名の前につけると、その長さを取得できます。"
        },
        {
          "title": "長さの取得",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字数を返す\n\n配列の場合は要素数を返します。\n\n**コード例：**\n```bash\ntext=\"Hello\"\necho ${#text} # 5\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "word=\"Bash\"\n# #で文字列の長さを取得\necho ${#word}",
      "holeyCode": "___\n___"Bash\"\n# # と入力して長さを調べてね\necho ${___word}",
      "correctLines": [
        "word="Bash"",
        "echo ${#word}"
      ],
      "lineHints": [
        "",
        "# で長さを取得します。"
      ],
      "candidates": {
        "operators": ["#"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# ${変数:開始:長さ}\n\n開始位置と長さを指定して部分文字列を取得できます。"
        },
        {
          "title": "スライス",
          "image": "/illustrations/3d_advanced/slicing.png",
          "content": "# 位置は0から\n\n開始位置は0から数えます。\n\n**コード例：**\n```bash\ntext=\"Hello World\"\necho ${text:0:5} # Hello\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "text=\"Hello World\"\n# 6で開始位置を指定\necho ${text:6:5}",
      "holeyCode": "___\n___"Hello World\"\n# 6 と入力して、7文字目から取り出しましょう\necho ${text:___:5}",
      "correctLines": [
        "text="Hello World"",
        "echo ${text:6:5}"
      ],
      "lineHints": [
        "",
        "6 から始めて World を取得します。"
      ],
      "candidates": {
        "numbers": ["6"]
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
          "image": "/illustrations/3d/arguments.png",
          "content": "# $1, $2, ... で引数\n\n関数内では `$1`, `$2` などで引数を参照します。"
        },
        {
          "title": "引数の使い方",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 位置パラメータ\n\n`$1` が1番目、`$2` が2番目の引数です。\n\n**コード例：**\n```bash\ngreet() {\n    echo \"Hello, $1\"\n}\ngreet \"Taro\" # Hello, Taro\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "add() {\n    # $1で最初の引数を参照\n    echo $(($1 + $2))\n}\nadd 3 5",
      "holeyCode": "___\n    ___\n___\n___",
      "correctLines": [
        
        
        "add() {",
        "    echo $(($1 + $2))",
        "}",
        "add 3 5"
      ],
      "lineHints": [
        "",
        "$1 で最初の引数を参照します。",
        "",
        ""
      ],
      "candidates": {
        "variables": ["$1"]
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
          "image": "/illustrations/3d/return.png",
          "content": "# echo で返す\n\nBashでは `echo` で出力した値を `$()` で受け取るのが一般的です。"
        },
        {
          "title": "値の受け取り",
          "image": "/illustrations/3d/robot.png",
          "content": "# $(関数) で取得\n\n`result=$(関数)` で関数の出力を受け取ります。\n\n**コード例：**\n```bash\ndouble() {\n    echo $(($1 * 2))\n}\nresult=$(double 5)\necho $result # 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "square() {\n    echo $(($1 * $1))\n}\n# $で関数の出力を受け取る\nresult=$(square 4)\necho $result",
      "holeyCode": "___\n    ___\n___\n___\n___",
      "correctLines": [
        
        
        "square() {",
        "    echo $(($1 * $1))",
        "}",
        "result=$(square 4)",
        "echo $result"
      ],
      "lineHints": [
        "",
        "",
        "",
        "$() で関数の出力を受け取ります。",
        ""
      ],
      "candidates": {
        "operators": ["$"]
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
          "image": "/illustrations/3d/loop.png",
          "content": "# 条件が真の間ループ\n\n**while** は、条件が真の間処理を繰り返します。"
        },
        {
          "title": "while の使い方",
          "image": "/illustrations/3d/loop.png",
          "content": "# while [ 条件 ]; do\n\n`do` と `done` で処理を囲みます。\n\n**コード例：**\n```bash\ni=0\nwhile [ $i -lt 3 ]; do\n    echo $i\n    i=$((i + 1))\ndone\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "i=1\n# whileで条件ループ\nwhile [ $i -le 3 ]; do\n    echo $i\n    i=$((i + 1))\ndone",
      "holeyCode": "___",
      "correctLines": [
        ""i=1",\n        "while [ $i -le 3"
      ]; do",
        "    echo $i",
        "    i=$((i + 1))",
        "done"
      ],
      "lineHints": [
        "",
        "while で条件ループします。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["while"]
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
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# パターンで分岐\n\n**case** は、値がパターンに一致するかで分岐します。"
        },
        {
          "title": "case の使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# パターン) 処理;;\n\n`;;` で各パターンの処理を終えます。`*` はその他すべてです。\n\n**コード例：**\n```bash\ncase $x in\n    1) echo \"one\";;\n    2) echo \"two\";;\n    *) echo \"other\";;\nesac\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fruit=\"apple\"\n# caseで分岐\ncase $fruit in\n    apple) echo \"red\";;\n    banana) echo \"yellow\";;\n    *) echo \"unknown\";;\nesac",
      "holeyCode": "___\n___\n    ___\n    ___\n    *) echo \"unknown\";;\\n___"apple\"\n# case と入力して、条件でわけてね\n___ $fruit in\n    apple) echo \"red\";;\n    banana) echo \"yellow\";;\n    *) echo \"unknown\";;\nesac",
      "correctLines": [
        "fruit="apple"",
        "case $fruit in",
        "    apple) echo "red";;",
        "    banana) echo "yellow";;",
        "    *) echo "unknown";;",
        "esac"
      ],
      "lineHints": [
        "",
        "case で分岐します。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["case"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# コマンドの出力を取得\n\n**$()** を使うと、コマンドの出力を変数に格納できます。"
        },
        {
          "title": "コマンド置換の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# $(コマンド)\n\n任意のコマンドの出力を取得できます。\n\n**コード例：**\n```bash\ntoday=$(date +%Y-%m-%d)\necho $today\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# $でコマンドの出力を取得\nfiles=$(ls)\necho \"Files: $files\"",
      "holeyCode": "___\n___"Files: $files\"",
      "correctLines": [
        "files=$(ls)",
        "echo "Files: $files""
      ],
      "lineHints": [
        "$() でコマンドの出力を取得します。",
        ""
      ],
      "candidates": {
        "operators": ["$"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Files: \n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 入力を変数に格納\n\n**read** は、標準入力から読み取った値を変数に格納します。"
        },
        {
          "title": "read の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# read 変数名\n\nスペースで区切って複数の変数に分けることもできます。\n\n**コード例：**\n```bash\necho \"Name?\"\nread name\necho \"Hello, $name\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# readで入力を受け取る\necho \"input:\" && read val && echo \"You entered: $val\"",
      "holeyCode": "___"input:\" && ___ val && echo \"You entered: $val\"",
      "correctLines": [
        "echo "input:" && read val && echo "You entered: $val""
      ],
      "lineHints": [
        "read で入力を受け取ります。"
      ],
      "candidates": {
        "keywords": ["read"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数行のテキスト\n\n**<<** を使うと、複数行のテキストをまとめて扱えます。"
        },
        {
          "title": "ヒアドキュメントの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# <<WORD ... WORD\n\n終端文字列までがテキストになります。\n\n**コード例：**\n```bash\ncat <<EOF\nLine 1\nLine 2\nEOF\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# <<でヒアドキュメントを開始\ncat <<END\nHello\nWorld\nEND",
      "holeyCode": "___\n___\n___\n___",
      "correctLines": [
        
        
        "cat <<END",
        "Hello",
        "World",
        "END"
      ],
      "lineHints": [
        "<< でヒアドキュメントを始めます。",
        "",
        "",
        ""
      ],
      "candidates": {
        "operators": ["<<"]
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
