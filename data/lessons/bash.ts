export const bashData = {
  "language": "bash",
  "lessonId": "bash-1",
  "lessonTitle": "Bash I",
  "lessonDescription": "Linux/Unixシステムの操作や自動化に欠かせないBashシェルの基本を学びます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Bashで画面に文字を表示するには echo コマンドを使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "echo",
          "content": "# 出力コマンド\n\n`echo` コマンドの後ろに文字を書くことで表示できます。\n\n**コード例：**\n```bash\necho \"Hello, Bash!\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "echo \"Hello, Bash!\"",
      "holeyCode": "echo \"___\"",
      "correctLines": ["echo \"Hello, Bash!\""],
      "lineHints": ["Hello, Bash! を出力します。"],
      "candidates": { "strings": ["Hello, Bash!"] },
      "testCases": [{ "input": "", "expected_output": "Hello, Bash!\n" }]
    },
    {
      "title": "変数",
      "description": "変数を定義して出力しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数定義",
          "content": "# スペースを入れない\n\nBashでは代入時に `=` の前後にスペースを入れてはいけません。参照するときは `$` を付けます。\n\n**コード例：**\n```bash\nNAME=\"Bash\"\necho $NAME\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "NAME=\"Bash\"\necho $NAME",
      "holeyCode": "NAME=\"___\"\necho $___",
      "correctLines": ["NAME=\"Bash\"", "echo $NAME"],
      "lineHints": ["Bashを代入します。", "変数NAMEを出力します。"],
      "candidates": { "variables": ["NAME"], "strings": ["Bash"] },
      "testCases": [{ "input": "", "expected_output": "Bash\n" }]
    },
    {
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "算術式展開",
          "content": "# $(( ))\n\n二重括弧の中で計算ができます。\n\n**コード例：**\n```bash\nA=5\nB=3\necho $((A + B))\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "A=5\nB=3\necho $((A + B))",
      "holeyCode": "A=5\nB=3\necho $((A ___ B))",
      "correctLines": ["A=5", "B=3", "echo $((A + B))"],
      "lineHints": [null, null, "+ を使います。"],
      "candidates": { "operators": ["+"] },
      "testCases": [{ "input": "", "expected_output": "8\n" }]
    },
    {
      "title": "変数展開",
      "description": "文字列の中に変数を埋め込みましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "ダブルクォート",
          "content": "# 文字列内での展開\n\nダブルクォートの中では変数が値に置き換わります。\n\n**コード例：**\n```bash\nAGE=20\necho \"年齢は $AGE です\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "AGE=20\necho \"I am $AGE years old.\"",
      "holeyCode": "AGE=20\necho \"I am $___ years old.\"",
      "correctLines": ["AGE=20", "echo \"I am $AGE years old.\""],
      "lineHints": [null, "AGE変数を埋め込みます。"],
      "candidates": { "variables": ["AGE"] },
      "testCases": [{ "input": "", "expected_output": "I am 20 years old.\n" }]
    },
    {
      "title": "配列",
      "description": "配列を作成して要素を取り出しましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列",
          "content": "# ( )\n\n複数の値を丸括弧で囲んで作成します。アクセス時は `${ }` が必要です。\n\n**コード例：**\n```bash\nARR=(\"red\" \"blue\")\necho ${ARR[1]} # blue を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "COLORS=(\"red\" \"blue\")\necho ${COLORS[1]}",
      "holeyCode": "COLORS=(\"red\" \"blue\")\necho ${COLORS[___]}",
      "correctLines": ["COLORS=(\"red\" \"blue\")", "echo ${COLORS[1]}"],
      "lineHints": [null, "インデックス1を指定します。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "blue\n" }]
    },
    {
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# [ 条件式 ]\n\n数値の比較には `-gt` (より大きい) や `-eq` (等しい) を使います。スペースが重要です。\n\n**コード例：**\n```bash\nif [ $SCORE -gt 80 ]; then\n    echo \"合格\"\nfi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SCORE=100\nif [ $SCORE -gt 80 ]; then\n    echo \"Great\"\nfi",
      "holeyCode": "SCORE=100\nif [ $SCORE ___ 80 ]; then\n    echo \"Great\"\nfi",
      "correctLines": ["SCORE=100", "if [ $SCORE -gt 80 ]; then", "    echo \"Great\"", "fi"],
      "lineHints": [null, "-gt を使います。", null, null],
      "candidates": { "operators": ["-gt"] },
      "testCases": [{ "input": "", "expected_output": "Great\n" }]
    },
    {
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# elseブロック\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```bash\nif [ $AGE -ge 20 ]; then\n    echo \"大人\"\nelse\n    echo \"子供\"\nfi\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "AGE=18\nif [ $AGE -ge 20 ]; then\n    echo \"Adult\"\nelse\n    echo \"Minor\"\nfi",
      "holeyCode": "AGE=18\nif [ $AGE -ge 20 ]; then\n    echo \"Adult\"\n___ \n    echo \"Minor\"\nfi",
      "correctLines": ["AGE=18", "if [ $AGE -ge 20 ]; then", "    echo \"Adult\"", "else", "    echo \"Minor\"", "fi"],
      "lineHints": [null, null, null, "else を記述します。"],
      "candidates": { "keywords": ["else"] },
      "testCases": [{ "input": "", "expected_output": "Minor\n" }]
    },
    {
      "title": "for文",
      "description": "ループを使って配列を走査します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "forループ",
          "content": "# 要素の繰り返し\n\n配列の全ての要素を処理します。\n\n**コード例：**\n```bash\nNAMES=(\"Alice\" \"Bob\")\nfor NAME in \"${NAMES[@]}\"; do\n    echo $NAME\ndone\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "NAMES=(\"Alice\" \"Bob\")\nfor NAME in \"${NAMES[@]}\"; do\n    echo $NAME\ndone",
      "holeyCode": "NAMES=(\"Alice\" \"Bob\")\nfor NAME in \"${___[@]}\"; do\n    echo $NAME\ndone",
      "correctLines": ["NAMES=(\"Alice\" \"Bob\")", "for NAME in \"${NAMES[@]}\"; do", "    echo $NAME", "done"],
      "lineHints": [null, "配列NAMESを指定します。"],
      "candidates": { "variables": ["NAMES"] },
      "testCases": [{ "input": "", "expected_output": "Alice\nBob\n" }]
    },
    {
      "title": "連想配列",
      "description": "連想配列を使ってみましょう（Bash 4.0以降）。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "declare -A",
          "content": "# キー付き配列\n\n`declare -A` で連想配列を宣言します。\n\n**コード例：**\n```bash\ndeclare -A USER\nUSER[name]=\"Alice\"\necho ${USER[name]}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "declare -A USER\nUSER[name]=\"Alice\"\necho ${USER[name]}",
      "holeyCode": "declare -A USER\nUSER[___]=\"Alice\"\necho ${USER[___]}",
      "correctLines": ["declare -A USER", "USER[name]=\"Alice\"", "echo ${USER[name]}"],
      "lineHints": [null, "キー name を使います。", "キー name を使います。"],
      "candidates": { "strings": ["name"] },
      "testCases": [{ "input": "", "expected_output": "Alice\n" }]
    },
    {
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数定義",
          "content": "# 処理のまとめ\n\n名前を付けて処理を定義します。\n\n**コード例：**\n```bash\ngreet() {\n    echo \"Hello\"\n}\n\ngreet # 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "greet() {\n    echo \"Hello\"\n}\ngreet",
      "holeyCode": "greet() {\n    echo \"Hello\"\n}\n___",
      "correctLines": ["greet() {", "    echo \"Hello\"", "}", "greet"],
      "lineHints": [null, null, null, "greet で呼び出します。"],
      "candidates": { "functions": ["greet"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    }
  ]
};