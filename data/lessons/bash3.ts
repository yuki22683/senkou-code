export const bash3Data = {
  "language": "bash",
  "lessonId": "bash-3",
  "lessonTitle": "Bash III - ファイルとパイプライン",
  "lessonDescription": "Bashの真髄「パイプライン」とファイル処理を学びます。コマンドを組み合わせて強力なスクリプトを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "コマンドをつなぐ パイプ",
      "content": "パイプ `|` を使うと、あるコマンドの出力を別のコマンドの入力として渡せます。\\n\\n```bash\\necho \"Hello World\" | wc -w # 単語数をカウント\\n```"
    },
    {
      "title": "出力を保存する リダイレクト",
      "content": "コマンドの結果をファイルに保存するにはリダイレクト `>` を使います。\\n\\n```bash\\necho \"テスト\" > result.txt\\n```\\n\\n`>` は上書き、`>>` は追記です。"
    }
  ],
  "exercises": [
    {
      "title": "パイプでコマンドをつなぐ",
      "correctCode": "# echoの出力をwcコマンドに渡す\\necho \"Hello World\" | wc -w",
      "holeyCode": "# echoの出力をwcコマンドに渡す\\n___ \"___ ___\" ___ ___ ___",
      "correctLines": [
          "# echoの出力をwcコマンドに渡す",
          "echo \"Hello World\" | wc -w"
        ],
      "lineHints": [
          null,
          "パイプ|でコマンドの出力を次のコマンドに渡します。wcの-wオプションで単語数を数えます。"
        ],
        "candidates": {
          "operators": [
            "|"
          ],
          "others": ["echo", "Hello", "World", "wc", "-w"]
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
      "correctCode": "# echoの結果をファイルout.txtに保存\\necho \"テスト\" > /tmp/out.txt && cat /tmp/out.txt",
      "holeyCode": "# echoの結果をファイルout.txtに保存\\n___ \"___\" ___ ___ ___ ___ ___",
      "correctLines": [
          "# echoの結果をファイルout.txtに保存",
          "echo \"テスト\" > /tmp/out.txt && cat /tmp/out.txt"
        ],
      "lineHints": [
          null,
          ">でファイルに出力を書き込み、&&で次のコマンドを実行します。"
        ],
        "candidates": {
          "operators": [
            ">",
            "&&"
          ],
          "others": ["echo", "テスト", "/tmp/out.txt", "&&", "cat"]
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
      "correctCode": "# in.txtを作成してから読み込む\\necho \"line1\" > /tmp/in.txt\\nwc -l < /tmp/in.txt",
      "holeyCode": "# in.txtを作成してから読み込む\\n___ \"___\" ___ ___\\n___ ___ ___ ___",
      "correctLines": [
          "# in.txtを作成してから読み込む",
          "echo \"line1\" > /tmp/in.txt",
          "wc -l < /tmp/in.txt"
        ],
      "lineHints": [
          null,
          ">でファイルに出力を書き込みます。",
          "<でファイルから入力を読み込みます。-lで行数を数えます。"
        ],
        "candidates": {
          "operators": [
            "<",
            ">"
          ],
          "others": ["echo", "line1", "/tmp/in.txt", "wc", "-l", "<"]
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
      "correctCode": "# エラーをnullに捨てて成否を判定\\nls /nonexistent 2> /dev/null && echo \"ok\" || echo \"エラー\"",
      "holeyCode": "# エラーをnullに捨てて成否を判定\\n___ ___ ___> ___ ___ ___ \"___\" ___ ___ \"___\"",
      "correctLines": [
          "# エラーをnullに捨てて成否を判定",
          "ls /nonexistent 2> /dev/null && echo \"ok\" || echo \"エラー\""
        ],
      "lineHints": [
          null,
          "2>でエラー出力をリダイレクト、&&は成功時、||は失敗時に実行されます。"
        ],
        "candidates": {
          "numbers": [
            "2"
          ],
          "others": ["ls", "/nonexistent", "/dev/null", "&&", "echo", "ok", "||", "エラー"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー\\n"
          }
        ]
      },
    {
      "title": "テストでファイルを確認",
      "correctCode": "# -fでファイルが存在するか確認\\nif [ -f /etc/passwd ]; then\\n    # 「存在します」と表示\\n    echo \"存在します\"\\nfi",
      "holeyCode": "# -fでファイルが存在するか確認\\nif [ ___ ___ ]; then\\n    # 「存在します」と表示\\n    ___ \"___\"\\nfi",
      "correctLines": [
          "# -fでファイルが存在するか確認",
          "if [ -f /etc/passwd ]; then",
          "    # 「存在します」と表示",
          "    echo \"存在します\"",
          "fi"
        ],
      "lineHints": [
          null,
          "-fでファイルの存在を確認します。条件が真ならthen以降を実行します。",
          null,
          "条件が真のときに実行される出力処理です。",
          null
        ],
        "candidates": {
          "operators": [
            "-f"
          ],
          "others": ["echo", "存在します", "-f", "/etc/passwd"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "存在します\\n"
          }
        ]
      },
    {
      "title": "xargs でコマンドに渡す",
      "correctCode": "# 出力を引数に変換してxargsに渡す\\necho \"Hello\" | xargs echo \"Message:\"",
      "holeyCode": "# 出力を引数に変換してxargsに渡す\\n___ \"___\" ___ ___ ___ \"___\"",
      "correctLines": [
          "# 出力を引数に変換してxargsに渡す",
          "echo \"Hello\" | xargs echo \"Message:\""
        ],
      "lineHints": [
          null,
          "xargsはパイプからの入力を引数としてコマンドに渡します。"
        ],
        "candidates": {
          "commands": [
            "xargs"
          ],
          "others": ["echo", "Hello", "|", "Message:"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Message: Hello\\n"
          }
        ]
      },
    {
      "title": "sed で置換",
      "correctCode": "# 文字列をsedで置換\\necho \"りんご\" | sed 's/りんご/バナナ/'",
      "holeyCode": "# 文字列をsedで置換\\n___ \"___\" ___ ___ 's/___/___/'",
      "correctLines": [
          "# 文字列をsedで置換",
          "echo \"りんご\" | sed 's/りんご/バナナ/'"
        ],
      "lineHints": [
          null,
          "sedの's/検索/置換/'で文字列を置き換えます。"
        ],
        "candidates": {
          "commands": [
            "sed"
          ],
          "others": ["echo", "りんご", "|", "バナナ"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "バナナ\\n"
          }
        ]
      },
    {
      "title": "awk でフィールドを抽出",
      "correctCode": "# スペース区切りの2番目を表示\\necho \"A 100 B\" | awk '{print $2}'",
      "holeyCode": "# スペース区切りの2番目を表示\\n___ \"___\" ___ ___ '{___ $___}'",
      "correctLines": [
          "# スペース区切りの2番目を表示",
          "echo \"A 100 B\" | awk '{print $2}'"
        ],
      "lineHints": [
          null,
          "awkはフィールドを抽出します。$2は2番目のフィールドを指します。"
        ],
        "candidates": {
          "commands": [
            "awk"
          ],
          "others": ["echo", "A 100 B", "|", "print", "2"]
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
      "correctCode": "# 複数行出力を並べ替える\\necho -e \"b\\na\\nc\" | sort",
      "holeyCode": "# 複数行出力を並べ替える\\n___ ___ \"___\\n___\\n___\" ___ ___",
      "correctLines": [
          "# 複数行出力を並べ替える",
          "echo -e \"b",
          "a",
          "c\" | sort"
        ],
      "lineHints": [
          null,
          "-eオプションでエスケープシーケンス（\\n等）を有効にします。",
          "\\nで改行された次の文字です。",
          "sortコマンドで行をアルファベット順に並べ替えます。"
        ],
        "candidates": {
          "commands": [
            "sort"
          ],
          "others": ["echo", "-e", "b", "a", "c", "|"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "a\\nb\\nc\\n"
          }
        ]
      },
    {
      "title": "uniq で重複を除去",
      "correctCode": "# 重複をuniqで取り除く\\necho -e \"a\\na\\nb\" | uniq",
      "holeyCode": "# 重複をuniqで取り除く\\n___ ___ \"___\\n___\\n___\" ___ ___",
      "correctLines": [
          "# 重複をuniqで取り除く",
          "echo -e \"a",
          "a",
          "b\" | uniq"
        ],
      "lineHints": [
          null,
          "-eオプションでエスケープシーケンスを有効にします。",
          "\\nで改行された次の文字です。",
          "uniqコマンドで連続する重複行を1つにまとめます。"
        ],
        "candidates": {
          "commands": [
            "uniq"
          ],
          "others": ["echo", "-e", "a", "b", "|"]
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