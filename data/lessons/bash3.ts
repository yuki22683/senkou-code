export const bash3Data = {
  "language": "bash",
  "lessonId": "bash-3",
  "lessonTitle": "Bash III - ファイルとパイプライン",
  "lessonDescription": "Bashの真髄「パイプライン」とファイル処理を学びます。コマンドを組み合わせて強力なスクリプトを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "パイプでコマンドをつなぐ",
      "correctCode": "# |でパイプを使う\\necho \"Hello World\" | wc -w",
      "holeyCode": "# |でパイプを使う\\n___ \"___\" ___ wc -___",
      "correctLines": [
          "# |でパイプを使う",
          "echo \"Hello World\" | wc -w"
        ],
      "lineHints": [
          null,
          "echo で出力し、| でパイプをつなぎます。"
        ],
        "candidates": {
          "operators": [
            "|",
            "&",
            ">",
            "<"
          ],
          "others": ["echo", "Hello World", "wc", "w"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "ファイルにリダイレクト",
      "correctCode": "# >でファイルに出力\\necho \"テスト\" > /tmp/out.txt && cat /tmp/out.txt",
      "holeyCode": "# >でファイルに出力\\n___ \"___\" ___ /tmp/out.txt ___ ___ /tmp/out.txt",
      "correctLines": [
          "# >でファイルに出力",
          "echo \"テスト\" > /tmp/out.txt && cat /tmp/out.txt"
        ],
      "lineHints": [
          null,
          "echo で出力し、> でリダイレクトします。 && で cat を実行しましょう。"
        ],
        "candidates": {
          "operators": [
            ">",
            ">>",
            "|",
            "<"
          ],
          "others": ["echo", "テスト", "&&", "cat"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "テスト\\n"
          }
        ]
      },
    {
      "title": "ファイルから読み込む",
      "correctCode": "echo \"line1\" > /tmp/in.txt\\n# <でファイルから読み込む\\nwc -l < /tmp/in.txt",
      "holeyCode": "___ \"___\" ___ /tmp/in.txt\\n# <でファイルから読み込む\\n___ -___ ___ /tmp/in.___",
      "correctLines": [
          "echo \"line1\" > /tmp/in.txt",
          "# <でファイルから読み込む",
          "wc -l < /tmp/in.txt"
        ],
      "lineHints": [
          "echo でファイルを作成します。",
          null,
          "wc コマンドで読み込みます。"
        ],
        "candidates": {
          "operators": [
            "<",
            ">",
            "|",
            "<<"
          ],
          "others": ["echo", "line1", "wc", "l", "txt"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "エラー出力をリダイレクト",
      "correctCode": "# 2>でエラー出力をリダイレクト\\nls /nonexistent 2> /dev/null && echo \"ok\" || echo \"エラー hidden\"",
      "holeyCode": "# 2>でエラー出力をリダイレクト\\n___ /nonexistent ___> /dev/null && ___ \"___\" ___ ___ \"エラー hidden\"",
      "correctLines": [
          "# 2>でエラー出力をリダイレクト",
          "ls /nonexistent 2> /dev/null && echo \"ok\" || echo \"エラー hidden\""
        ],
      "lineHints": [
          null,
          "ls コマンドの結果を 2> でリダイレクトし、&& と || で成否判定します。"
        ],
        "candidates": {
          "numbers": [
            "2",
            "1",
            "0",
            "3"
          ],
          "others": ["ls", "echo", "ok", "||"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー hidden\\n"
          }
        ]
      },
    {
      "title": "テストでファイルを確認",
      "correctCode": "# -fでファイルが存在するか確認\\nif [ -f /etc/passwd ]; then\\n    echo \"file exists\"\\nfi",
      "holeyCode": "# -fでファイルが存在するか確認\\n___ [ -___ /etc/passwd ]; ___\\n    ___ \"___\"\\n___",
      "correctLines": [
          "# -fでファイルが存在するか確認",
          "if [ -f /etc/passwd ]; then",
          "    echo \"file exists\"",
          "fi"
        ],
      "lineHints": [
          null,
          "if 文を開始し、-f でファイル存在チェックをします。",
          "echo でメッセージを表示します。",
          "fi で if 文を閉じます。"
        ],
        "candidates": {
          "operators": [
            "-f",
            "-d",
            "-e",
            "-r"
          ],
          "others": ["if", "then", "echo", "file exists", "fi", "f"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "file exists\\n"
          }
        ]
      },
    {
      "title": "xargs でコマンドに渡す",
      "correctCode": "# xargsで引数に変換\\necho \"Hello World\" | xargs echo \"Message:\"",
      "holeyCode": "# xargsで引数に変換\\n___ \"___\" ___ ___ ___ \"Message:\"",
      "correctLines": [
          "# xargsで引数に変換",
          "echo \"Hello World\" | xargs echo \"Message:\""
        ],
      "lineHints": [
          null,
          "echo の出力をパイプ経由で xargs に渡します。"
        ],
        "candidates": {
          "commands": [
            "xargs",
            "exec",
            "eval",
            "args"
          ],
          "others": ["echo", "Hello World", "|"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Message: Hello World\\n"
          }
        ]
      },
    {
      "title": "sed で置換",
      "correctCode": "# sedで置換\\necho \"猫\" | sed 's/猫/犬/'",
      "holeyCode": "# sedで置換\\n___ \"___\" ___ ___ 's/___/___/'",
      "correctLines": [
          "# sedで置換",
          "echo \"猫\" | sed 's/猫/犬/'"
        ],
      "lineHints": [
          null,
          "echo の出力を sed コマンドに渡して置換します。"
        ],
        "candidates": {
          "commands": [
            "sed",
            "awk",
            "tr",
            "grep"
          ],
          "others": ["echo", "猫", "|", "犬"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "犬\\n"
          }
        ]
      },
    {
      "title": "awk でフィールドを抽出",
      "correctCode": "# awkでフィールドを抽出\\necho \"りんご 100 yen\" | awk '{print $2}'",
      "holeyCode": "# awkでフィールドを抽出\\n___ \"___\" ___ ___ '{___ $___}'",
      "correctLines": [
          "# awkでフィールドを抽出",
          "echo \"りんご 100 yen\" | awk '{print $2}'"
        ],
      "lineHints": [
          null,
          "echo の出力を awk に渡し、2番目のフィールドを表示します。"
        ],
        "candidates": {
          "commands": [
            "awk",
            "sed",
            "cut",
            "tr"
          ],
          "others": ["echo", "りんご 100 yen", "|", "print", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "sort で並べ替え",
      "correctCode": "# sortで並べ替え\\necho -e \"banana\\napple\\ncherry\" | sort",
      "holeyCode": "# sortで並べ替え\\n___ -e \"banana\\n___\\ncherry\" ___ ___",
      "correctLines": [
          "# sortで並べ替え",
          "echo -e \"banana",
          "apple",
          "cherry\" | sort"
        ],
      "lineHints": [
          null,
          "echo -e で複数行出力し、sort コマンドに渡します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "commands": [
            "sort",
            "uniq",
            "head",
            "tail"
          ],
          "others": ["echo", "apple", "|", "apple"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "apple\\nbanana\\ncherry\\n"
          }
        ]
      },
    {
      "title": "uniq で重複を除去",
      "correctCode": "# uniqで重複を除去\\necho -e \"a\\nb\\na\\nb\" | sort | uniq",
      "holeyCode": "# uniqで重複を除去\\n___ -e \"a\\n___\\n___\\nb\" ___ ___ ___ ___",
      "correctLines": [
          "# uniqで重複を除去",
          "echo -e \"a",
          "b",
          "a",
          "b\" | sort | uniq"
        ],
      "lineHints": [
          null,
          "echo -e で出力した結果を sort し、さらに uniq コマンドに渡します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "commands": [
            "uniq",
            "sort",
            "head",
            "tail"
          ],
          "others": ["echo", "b", "a", "|", "b", "a"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "a\\nb\\n"
          }
        ]
      }
  ]
};