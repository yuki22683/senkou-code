export const assemblyData = {
  "language": "assembly",
  "lessonId": "assembly-1",
  "lessonTitle": "Assembly (アセンブリ) にちょうせん！",
  "lessonDescription": "コンピュータの「脳みそ」に直接、短い暗号で指示を出す「アセンブリ言語」のきほんを学びましょう。コンピュータがどうやって動いているのか、その秘密がわかりますよ。",
  "lessonDifficulty": "medium",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出してみましょう",
      "description": "アセンブリ言語を使って画面に「Hello」と表示させてみましょう。コンピュータの「ボス（OS）」に頼みごとをする特別な命令を使います。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "コンピュータとの直接対話",
          "content": "# syscall（システムコール）\n\nアセンブリ言語では、`rax` や `rdi` という名前の「小さな机（レジスタ）」に数字を置いてから、`syscall` という合図を送ります。すると、コンピュータのボスが画面に文字を出してくれますよ。\n\n**暗号の意味：**\n- `mov rax, 1` : 「画面に書く」という指示を机に置きます\n- `mov rdi, 1` : 「標準の画面」を指定します\n- `syscall` : 「さあ、やってください！」という合図です"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  msg db \"Hello\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, msg\n  mov rdx, 6\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .data\n  msg db \"Hello\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, ___\n  mov rdx, 6\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .data", "  msg db \"Hello\", 0xA", "", "section .text", "  global _start", "", "_start:", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, msg", "  mov rdx, 6", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [
        "ここはおまじない（データの場所）です。",
        "表示したい文字を準備します。",
        null,
        "ここはおまじない（手順の場所）です。",
        "ここもおまじない（スタートの目印）です。",
        null,
        "ここからスタートします！",
        "指示「1（書く）」を机に置きます。",
        "場所「1（画面）」を机に置きます。",
        "表示する文字の名前 `msg` を入力しましょう。",
        "文字の長さ（6文字分）を机に置きます。",
        "ボスに実行を頼みます！",
        null,
        "プログラムを終わる準備です。",
        "エラーがないことを報告します。",
        "最後のお願いをします。"
      ],
      "candidates": { "variables": ["msg"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    },
    {
      "title": "机の上に数字を置きましょう",
      "description": "「レジスタ」という小さな机に数字を置いて、画面に表示させてみましょう。数字を文字に変えるには `48` を足すのがルールです。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "mov（ムーブ）命令",
          "content": "# mov 机, 数字\n\n`mov` は「移動（Move）」の略ですが、実際には「コピーして置く」という意味です。 `rax` という名前の机に数字の `5` を置いてみましょう。\n\n**コード例：**\n```assembly\nmov rax, 5\nadd rax, 48\n```\n※ `48` を足すと、コンピュータがその数字を画面に表示できる「文字」として認識してくれるようになります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, ___\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rax, 5", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "机 rax に数字の 5 を入力します。",
        "数字を文字に変えるため 48 を足します。",
        "結果を一時的に保存します。",
        null,
        null,
        null,
        null,
        "1文字分だけ表示するので `1` と入力しましょう。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    },
    {
      "title": "コンピュータでたし算しましょう",
      "description": "add（アド）という暗号を使って、たし算をしてみましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "add（アド）",
          "content": "# add 左, 右\n\n`add rax, 2` と入力すると、「机 `rax` に置いてある数字に `2` を足す」という意味になります。\n\n**コード例：**\n```assembly\nmov rax, 3\nadd rax, 2\n```\nこれで `rax` の中身は `5` になりますよ。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 3\n  add rax, 2\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 3\n  add rax, ___\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rax, 3", "  add rax, 2", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "3 に 2 を足したいので `2` を入力しましょう。",
        null,
        null
      ],
      "candidates": { "numbers": ["2"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    },
    {
      "title": "暗号をまとめて呼び出しましょう",
      "description": "よく使う手順をまとめて、名前をつけた「サブルーチン（関数）」を使ってみましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "call（コール）",
          "content": "# call 名前\n\n`call` と入力すると、別の場所に書いた手順を呼び出すことができます。呼び出された先で `ret` と入力すると、元の場所に戻ってきますよ。\n\n**コード例：**\n```assembly\ncall aisatsu\n\naisatsu:\n  ; ここに手順を書きます\n  ret\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\nprint_5:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n  ret\n\n_start:\n  call print_5\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\nprint_5:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n  ret\n\n_start:\n  call ___\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "print_5:", "  mov rax, 5", "  add rax, 48", "  mov [res], al", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "  ret", "", "_start:", "  call print_5", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "ここからサブルーチンの手順です。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "元の場所に戻ります。",
        null,
        "メインのスタート地点です。",
        "さっき作った `print_5` を呼び出します。",
        null,
        null,
        null,
        null
      ],
      "candidates": { "functions": ["print_5"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    }
  ]
};