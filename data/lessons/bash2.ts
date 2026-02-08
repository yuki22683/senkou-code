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
      "correctCode": "# 配列を定義（10, 20, 30）\\nnums=(10 20 30)\\n# 3番目の要素にアクセスするインデックス（0から数える）\\necho ${nums[2]}",
      "holeyCode": "# 配列を定義（10, 20, 30）\\nnums=(___ 20 30)\\n# 3番目の要素にアクセスするインデックス（0から数える）\\necho ${nums[___]}",
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
          "ここを正しく入力してください。"
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
            "expected_output": "30\\n"
          }
        ]
      },
    {
      "title": "文字列の長さを取得",
      "correctCode": "# 変数に文字列を代入\\nword=\"Bash\"\\n# 文字列の長さを取得する記号\\necho ${#word}",
      "holeyCode": "# 変数に文字列を代入\\n___=\"___\"\\n# 文字列の長さを取得する記号\\necho ${___word}",
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
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "#"
          ],
          "others": ["Bash", "word"]
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
      "correctCode": "# 変数に文字列を代入\\ntext=\"Hello World\"\\n# Worldが始まる位置（0から数える）\\necho ${text:6:5}",
      "holeyCode": "# 変数に文字列を代入\\n___=\"___\"\\n# Worldが始まる位置（0から数える）\\necho ${text:___:5}",
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
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "6"
          ],
          "others": ["Hello World", "text"]
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
      "correctCode": "# add関数を定義\\nadd() {\\n    # 最初の引数を参照する変数\\n    echo $(($1 + $2))\\n}\\n# 関数を呼び出す\\nadd 3 5",
      "holeyCode": "# add関数を定義\\n___() {\\n    # 最初の引数を参照する変数\\n    echo $((___ + $2))\\n___\\n# 関数を呼び出す\\nadd ___ 5",
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
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "$1"
          ],
          "others": ["add", "3", "}"]
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
      "correctCode": "# square関数を定義\\nsquare() {\\n    # 引数を2乗する\\n    echo $(($1 * $1))\\n}\\n# コマンドの出力を取得する構文\\nresult=$(square 4)\\n# resultを表示\\necho $result",
      "holeyCode": "# square関数を定義\\n___() {\\n    # 引数を2乗する\\n    echo $(($1 * ___))\\n___\\n# コマンドの出力を取得する構文\\nresult=$(___ ___)\\n# resultを表示\\necho ___",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を展開して表示します。"
        ],
        "candidates": {
          "operators": [
            "$"
          ],
          "others": ["square", "$1))", "result", "$1", "}", "4", "$result", "}"]
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
      "correctCode": "# iを1で初期化\\ni=1\\n# 条件が真の間繰り返すキーワード\\nwhile [ $i -le 3 ]; do\\n    # $iをechoで出力\\n    echo $i\\n    # iを1増やす\\n    i=$((i + 1))\\ndone",
      "holeyCode": "# iを1で初期化\\ni=___\\n# 条件が真の間繰り返すキーワード\\n___ [ $i -le 3 ]; do\\n    # $iをechoで出力\\n    echo $___\\n    # iを1増やす\\n    i=$((___ + 1))\\n___",
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
          "条件が真の間、繰り返し処理を実行する。",
          null,
          "変数の内容を展開して表示します。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "while"
          ],
          "others": ["1", "i", "done"]
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
      "correctCode": "# 変数に値を代入\\nfruit=\"りんご\"\\n# パターンマッチで分岐するキーワード\\ncase $fruit in\\n    # りんごの場合\\n    りんご) echo \"赤\";;\\n    # バナナの場合\\n    バナナ) echo \"黄色\";;\\n    # その他の場合\\n    *) echo \"その他\";;\\nesac",
      "holeyCode": "# 変数に値を代入\\n___=\"___\"\\n# パターンマッチで分岐するキーワード\\n___ $fruit in\\n    # りんごの場合\\n    りんご) echo \"___\";;\\n    # バナナの場合\\n    ___\\n    # その他の場合\\n    *) echo \"その他\";;\\n___",
      "correctLines": [
          "# 変数に値を代入",
          "fruit=\"りんご\"",
          "# パターンマッチで分岐するキーワード",
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
          "ここを正しく入力してください。",
          null,
          "case で分岐します。",
          null,
          "「赤」と表示します。",
          null,
          "この行を正しく入力してください。",
          null,
          null,
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "case"
          ],
          "others": ["りんご", "赤", "fruit", "バナナ) echo \"黄色\";;", "esac"]
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
      "correctCode": "# コマンドの出力を変数に格納する構文\\nfiles=$(echo \"テスト\")\\n# \"Files: $files\"をechoで出力\\necho \"Files: $files\"",
      "holeyCode": "# コマンドの出力を変数に格納する構文\\nfiles=___(___)\\n# \"Files: $files\"をechoで出力\\necho \"Files: $___\"",
      "correctLines": [
          "# コマンドの出力を変数に格納する構文",
          "files=$(echo \"テスト\")",
          "# \"Files: $files\"をechoで出力",
          "echo \"Files: $files\""
        ],
      "lineHints": [
          null,
          "$() でコマンドの出力を取得します。",
          null,
          "ここを正しく入力してください."
        ],
        "candidates": {
          "operators": [
            "$"
          ],
          "others": ["echo \"test\"", "files", "echo \"テスト\""]
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
      "correctCode": "# 標準入力を変数に読み込むコマンド\\necho \"入力:\" && read val && echo \"You entered: $val\"",
      "holeyCode": "# 標準入力を変数に読み込むコマンド\\n___ \"入力:\" && ___ val && ___ \"You entered: $___\"",
      "correctLines": [
          "# 標準入力を変数に読み込むコマンド",
          "echo \"入力:\" && read val && echo \"You entered: $val\""
        ],
      "lineHints": [
          null,
          "echo でメッセージを出し、read で変数 val に読み込みます。"
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
            "expected_output": "入力:\\nYou entered: test\\n"
          }
        ]
      },
    {
      "title": "ヒアドキュメント",
      "correctCode": "# ヒアドキュメントを開始する演算子\\ncat <<END\\n# 1行目のテキストを入力\\nHello\\n# 2行目のテキストを入力\\nWorld\\nEND",
      "holeyCode": "# ヒアドキュメントを開始する演算子\\ncat ___END\\n# 1行目のテキストを入力\\n___\\n# 2行目のテキストを入力\\n___\\n___",
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
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "<<"
          ],
          "others": ["Hello", "World", "END", "Hello", "World"]
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