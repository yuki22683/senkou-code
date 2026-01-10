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
      "description": "パイプ「|」を使ってコマンドの出力を次のコマンドに渡しましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "パイプとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# コマンドを連結\n\n**パイプ（|）** は、あるコマンドの出力を次のコマンドの入力に渡します。"
        },
        {
          "title": "パイプの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# コマンド1 | コマンド2\n\n左のコマンドの出力が右のコマンドに渡されます。\n\n**コード例：**\n```bash\necho \"hello\" | tr 'a-z' 'A-Z'\n# HELLO\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# |でパイプを使う\necho \"hello world\" | wc -w",
      "holeyCode": "# |でパイプを使う\necho \"hello world\" ___ wc -w",
      "correctLines": [
        "echo \"hello world\" | wc -w"
      ],
      "lineHints": [
        "| でコマンドをつなぎます。"
      ],
      "candidates": {
        "operators": ["|", "&", ">", "<"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    },
    {
      "title": "ファイルにリダイレクト",
      "description": "「>」を使って出力をファイルに保存しましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "リダイレクトとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 出力をファイルに\n\n**リダイレクト（>）** を使うと、コマンドの出力をファイルに保存できます。"
        },
        {
          "title": "リダイレクトの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# > で上書き、>> で追記\n\n`>` は上書き、`>>` は追記です。\n\n**コード例：**\n```bash\necho \"hello\" > file.txt\necho \"world\" >> file.txt\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# >でファイルに出力\necho \"test\" > /tmp/out.txt && cat /tmp/out.txt",
      "holeyCode": "# >でファイルに出力\necho \"test\" ___ /tmp/out.txt && cat /tmp/out.txt",
      "correctLines": [
        "echo \"test\" > /tmp/out.txt && cat /tmp/out.txt"
      ],
      "lineHints": [
        "> でファイルに出力します。"
      ],
      "candidates": {
        "operators": [">", ">>", "|", "<"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "test\n"
        }
      ]
    },
    {
      "title": "ファイルから読み込む",
      "description": "「<」を使ってファイルから入力を読み込みましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "入力リダイレクト",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルから入力\n\n**入力リダイレクト（<）** を使うと、ファイルの内容をコマンドに渡せます。"
        },
        {
          "title": "入力リダイレクトの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# コマンド < ファイル\n\nファイルの内容が標準入力として渡されます。\n\n**コード例：**\n```bash\nwc -l < file.txt\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "echo \"line1\" > /tmp/in.txt\n# <でファイルから読み込む\nwc -l < /tmp/in.txt",
      "holeyCode": "echo \"line1\" > /tmp/in.txt\n# <でファイルから読み込む\nwc -l ___ /tmp/in.txt",
      "correctLines": [
        "echo \"line1\" > /tmp/in.txt",
        "wc -l < /tmp/in.txt"
      ],
      "lineHints": [
        null,
        "< でファイルから読み込みます。"
      ],
      "candidates": {
        "operators": ["<", ">", "|", "<<"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "エラー出力をリダイレクト",
      "description": "「2>」を使ってエラー出力をリダイレクトしましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "標準エラー出力",
          "image": "/illustrations/3d/robot.png",
          "content": "# エラーメッセージの出力先\n\nコマンドのエラーは **標準エラー出力（stderr）** に送られます。ファイル記述子は **2** です。"
        },
        {
          "title": "2> の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 2> でエラーをリダイレクト\n\nエラー出力だけをファイルに保存できます。\n\n**コード例：**\n```bash\nls /nonexistent 2> error.txt\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 2>でエラー出力をリダイレクト\nls /nonexistent 2> /dev/null && echo \"ok\" || echo \"error hidden\"",
      "holeyCode": "# 2>でエラー出力をリダイレクト\nls /nonexistent ___> /dev/null && echo \"ok\" || echo \"error hidden\"",
      "correctLines": [
        "ls /nonexistent 2> /dev/null && echo \"ok\" || echo \"error hidden\""
      ],
      "lineHints": [
        "2 でエラー出力を指定します。"
      ],
      "candidates": {
        "numbers": ["2", "1", "0", "3"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "error hidden\n"
        }
      ]
    },
    {
      "title": "テストでファイルを確認",
      "description": "「-f」でファイルが存在するか確認しましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "ファイルテスト",
          "image": "/illustrations/3d/robot.png",
          "content": "# ファイルの状態を調べる\n\nBashでは **テスト** を使ってファイルの存在や種類を確認できます。"
        },
        {
          "title": "テストオプション",
          "image": "/illustrations/3d/robot.png",
          "content": "# -f, -d, -e など\n\n- `-f` : 通常ファイル\n- `-d` : ディレクトリ\n- `-e` : 存在する\n\n**コード例：**\n```bash\nif [ -f file.txt ]; then\n    echo \"exists\"\nfi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# -fでファイルが存在するか確認\nif [ -f /etc/passwd ]; then\n    echo \"file exists\"\nfi",
      "holeyCode": "# -fでファイルが存在するか確認\nif [ ___ /etc/passwd ]; then\n    echo \"file exists\"\nfi",
      "correctLines": [
        "if [ -f /etc/passwd ]; then",
        "    echo \"file exists\"",
        "fi"
      ],
      "lineHints": [
        "-f でファイルの存在を確認します。",
        null,
        null
      ],
      "candidates": {
        "operators": ["-f", "-d", "-e", "-r"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "file exists\n"
        }
      ]
    },
    {
      "title": "xargs でコマンドに渡す",
      "description": "「xargs」を使って標準入力をコマンド引数に変換しましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "xargs とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 入力を引数に変換\n\n**xargs** は、標準入力からデータを読み取り、それを別のコマンドの引数として渡します。"
        },
        {
          "title": "xargs の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# パイプと組み合わせる\n\nパイプで渡されたデータを引数として使えます。\n\n**コード例：**\n```bash\necho \"file1 file2\" | xargs ls\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# xargsで引数に変換\necho \"hello world\" | xargs echo \"Message:\"",
      "holeyCode": "# xargsで引数に変換\necho \"hello world\" | ___ echo \"Message:\"",
      "correctLines": [
        "echo \"hello world\" | xargs echo \"Message:\""
      ],
      "lineHints": [
        "xargs で引数に変換します。"
      ],
      "candidates": {
        "commands": ["xargs", "exec", "eval", "args"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Message: hello world\n"
        }
      ]
    },
    {
      "title": "sed で置換",
      "description": "「sed」を使ってテキストを置換しましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "sed とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ストリームエディタ\n\n**sed** は、テキストを行ごとに処理・変換するコマンドです。置換でよく使います。"
        },
        {
          "title": "sed の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# s/古い/新しい/\n\n`s` コマンドで置換します。\n\n**コード例：**\n```bash\necho \"hello\" | sed 's/hello/hi/'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# sedで置換\necho \"cat\" | sed 's/cat/dog/'",
      "holeyCode": "# sedで置換\necho \"cat\" | ___ 's/cat/dog/'",
      "correctLines": [
        "echo \"cat\" | sed 's/cat/dog/'"
      ],
      "lineHints": [
        "sed で置換します。"
      ],
      "candidates": {
        "commands": ["sed", "awk", "tr", "grep"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "dog\n"
        }
      ]
    },
    {
      "title": "awk でフィールドを抽出",
      "description": "「awk」を使って特定のフィールドを抽出しましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "awk とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# テキスト処理の強力なツール\n\n**awk** は、テキストをフィールドに分割して処理できる強力なコマンドです。"
        },
        {
          "title": "awk の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# $1, $2 でフィールド\n\n`$1` が1番目、`$2` が2番目のフィールドです。\n\n**コード例：**\n```bash\necho \"a b c\" | awk '{print $2}'\n# b\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# awkでフィールドを抽出\necho \"apple 100 yen\" | awk '{print $2}'",
      "holeyCode": "# awkでフィールドを抽出\necho \"apple 100 yen\" | ___ '{print $2}'",
      "correctLines": [
        "echo \"apple 100 yen\" | awk '{print $2}'"
      ],
      "lineHints": [
        "awk でフィールドを抽出します。"
      ],
      "candidates": {
        "commands": ["awk", "sed", "cut", "tr"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "sort で並べ替え",
      "description": "「sort」を使ってテキストを並べ替えましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "sort とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 行を並べ替える\n\n**sort** は、テキストの行をアルファベット順や数値順に並べ替えます。"
        },
        {
          "title": "sort の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# オプションで動作を変更\n\n- `-n` : 数値順\n- `-r` : 逆順\n\n**コード例：**\n```bash\necho -e \"3\\n1\\n2\" | sort -n\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# sortで並べ替え\necho -e \"banana\\napple\\ncherry\" | sort",
      "holeyCode": "# sortで並べ替え\necho -e \"banana\\napple\\ncherry\" | ___",
      "correctLines": [
        "echo -e \"banana\\napple\\ncherry\" | sort"
      ],
      "lineHints": [
        "sort で並べ替えます。"
      ],
      "candidates": {
        "commands": ["sort", "uniq", "head", "tail"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "apple\nbanana\ncherry\n"
        }
      ]
    },
    {
      "title": "uniq で重複を除去",
      "description": "「uniq」を使って重複する行を除去しましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "uniq とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 重複行を除去\n\n**uniq** は、連続する重複行を除去します。通常は `sort` と組み合わせて使います。"
        },
        {
          "title": "uniq の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# sort | uniq\n\n先にソートしてから重複を除去します。\n\n**コード例：**\n```bash\necho -e \"a\\nb\\na\" | sort | uniq\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# uniqで重複を除去\necho -e \"a\\nb\\na\\nb\" | sort | uniq",
      "holeyCode": "# uniqで重複を除去\necho -e \"a\\nb\\na\\nb\" | sort | ___",
      "correctLines": [
        "echo -e \"a\\nb\\na\\nb\" | sort | uniq"
      ],
      "lineHints": [
        "uniq で重複を除去します。"
      ],
      "candidates": {
        "commands": ["uniq", "sort", "head", "tail"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "a\nb\n"
        }
      ]
    }
  ]
};
