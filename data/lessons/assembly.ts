export const assemblyData = {
  "language": "assembly",
  "lessonId": "assembly-1",
  "lessonTitle": "Assembly I",
  "lessonDescription": "コンピュータの動作原理に最も近いアセンブリ言語(x86-64)を学びます。レジスタ、メモリ、システムコールを直接操作します。",
  "lessonDifficulty": "medium",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "システムコールを使って画面に文字を表示します。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "システムコール",
          "content": "# sys_write (1)\n\nraxに1(システムコール番号)、rdiに1(stdout)、rsiにアドレス、rdxに長さをセットして `syscall` を呼びます。\n\n**コード例：**\n```assembly\nmov rax, 1\nmov rdi, 1\nmov rsi, msg\nmov rdx, 6\nsyscall\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  msg db \"Hello\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, msg\n  mov rdx, 6\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .data\n  msg db \"Hello\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, ___\n  mov rdx, 6\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .data", "  msg db \"Hello\", 0xA", "", "section .text", "  global _start", "", "_start:", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, msg", "  mov rdx, 6", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, "メッセージのアドレス(msg)をrsiにセットします。"],
      "candidates": { "variables": ["msg"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    },
    {
      "title": "レジスタと数値出力",
      "description": "レジスタに値をセットし、文字として出力します（'0'を足してASCIIコードに変換します）。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "レジスタ",
          "content": "# mov命令\n\n`mov rax, 5` でraxレジスタに5を入れます。ASCIIの '0' (48) を足すと、数値の文字になります。\n\n**コード例：**\n```assembly\nmov rax, 5\nadd rax, 48\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, ___\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rax, 5", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, "5をセットします。", "ASCII変換のため48を足します。", null, null, null, null, null, "1バイト出力します。"],
      "candidates": { "numbers": ["1"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    },
    {
      "title": "足し算",
      "description": "add命令を使って計算を行います。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "add",
          "content": "# add <a>, <b>\n\n`a = a + b` の意味になります。\n\n**コード例：**\n```assembly\nmov rax, 3\nadd rax, 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 3\n  add rax, 2\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 3\n  add rax, ___\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rax, 3", "  add rax, 2", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, "2を足します。", null, null],
      "candidates": { "numbers": ["2"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    },
    {
      "title": "引き算",
      "description": "sub命令を使って引き算を行います。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "sub",
          "content": "# sub <a>, <b>\n\n`a = a - b` の意味になります。\n\n**コード例：**\n```assembly\nmov rax, 9\nsub rax, 4\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 9\n  sub rax, 4\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 9\n  sub rax, ___\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rax, 9", "  sub rax, 4", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, "4を引きます。", null, null],
      "candidates": { "numbers": ["4"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    },
    {
      "title": "比較と分岐",
      "description": "cmp命令とje命令を使って、条件分岐を行います。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "分岐",
          "content": "# cmp と je\n\n`cmp a, b` で比較し、`je label` で等しい場合にlabelへジャンプします。\n\n**コード例：**\n```assembly\ncmp rax, 5\nje equal_label\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  yes db \"Y\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  cmp rax, 5\n  je equal\n  \n  mov rax, 60\n  xor rdi, rdi\n  syscall\n\nequal:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, yes\n  mov rdx, 2\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .data\n  yes db \"Y\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  cmp rax, 5\n  je ___\n  \n  mov rax, 60\n  xor rdi, rdi\n  syscall\n\nequal:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, yes\n  mov rdx, 2\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .data", "  yes db \"Y\", 0xA", "", "section .text", "  global _start", "", "_start:", "  mov rax, 5", "  cmp rax, 5", "  je equal", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall", "", "equal:", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, yes", "  mov rdx, 2", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, "equalラベルへジャンプします。"],
      "candidates": { "strings": ["equal"] },
      "testCases": [{ "input": "", "expected_output": "Y\n" }]
    },
    {
      "title": "条件ジャンプ（不一致）",
      "description": "jne (Jump if Not Equal) を使います。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "jne",
          "content": "# 等しくない場合\n\n`cmp` の結果が等しくなければジャンプします。\n\n**コード例：**\n```assembly\ncmp rax, 3\njne not_equal_label\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  no db \"N\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  cmp rax, 3\n  jne not_equal\n  \n  mov rax, 60\n  syscall\n\nnot_equal:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, no\n  mov rdx, 2\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .data\n  no db \"N\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  cmp rax, 3\n  jne ___\n  \n  mov rax, 60\n  syscall\n\nnot_equal:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, no\n  mov rdx, 2\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .data", "  no db \"N\", 0xA", "", "section .text", "  global _start", "", "_start:", "  mov rax, 5", "  cmp rax, 3", "  jne not_equal", "", "  mov rax, 60", "  syscall", "", "not_equal:", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, no", "  mov rdx, 2", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, "not_equalラベルへジャンプします。"],
      "candidates": { "strings": ["not_equal"] },
      "testCases": [{ "input": "", "expected_output": "N\n" }]
    },
    {
      "title": "ループ処理",
      "description": "decとjnzを使ってループ処理を作ります。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ループ",
          "content": "# デクリメントとジャンプ\n\n`dec` で値を減らし、`jnz` (Jump if Not Zero) で0になるまで繰り返します。\n\n**コード例：**\n```assembly\nloop_start:\n  ; 処理\n  dec rbx\n  jnz loop_start\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rbx, 3\nloop_start:\n  mov rax, rbx\n  add rax, 48\n  mov [res], al\n  \n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  dec rbx\n  jnz loop_start\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rbx, 3\nloop_start:\n  mov rax, rbx\n  add rax, 48\n  mov [res], al\n  \n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  dec rbx\n  jnz ___\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rbx, 3", "loop_start:", "  mov rax, rbx", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  dec rbx", "  jnz loop_start", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "loop_startへジャンプします。"],
      "candidates": { "strings": ["loop_start"] },
      "testCases": [{ "input": "", "expected_output": "321" }]
    },
    {
      "title": "スタック",
      "description": "pushとpopを使って値を保存・復元します。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Stack",
          "content": "# LIFO\n\n最後に保存したものが最初に取り出されます。\n\n**コード例：**\n```assembly\npush rax\npop rbx\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  push rax\n  mov rax, 0\n  pop rax\n\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 5\n  push rax\n  mov rax, 0\n  pop ___\n\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov rax, 5", "  push rax", "  mov rax, 0", "  pop rax", "", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, "raxに復元します。"],
      "candidates": { "variables": ["rax"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    },
    {
      "title": "メモリアクセス",
      "description": "メモリ上のデータにアクセスします。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "メモリ",
          "content": "# [ ]\n\n`[label]` でそのアドレスにある値を取得します。\n\n**コード例：**\n```assembly\nmov al, [data_label]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  val db 7\n\nsection .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov al, [val]\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .data\n  val db 7\n\nsection .bss\n  res resb 1\n\nsection .text\n  global _start\n\n_start:\n  mov al, [___]\n  add rax, 48\n  mov [res], al\n\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .data", "  val db 7", "", "section .bss", "  res resb 1", "", "section .text", "  global _start", "", "_start:", "  mov al, [val]", "  add rax, 48", "  mov [res], al", "", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, "valアドレスの値を取得します。"],
      "candidates": { "variables": ["val"] },
      "testCases": [{ "input": "", "expected_output": "7" }]
    },
    {
      "title": "サブルーチン（関数）",
      "description": "callとretを使って関数呼び出しを行います。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "call",
          "content": "# call label\n\n関数を呼び出し、`ret` で戻ります。\n\n**コード例：**\n```assembly\ncall my_function\n\nmy_function:\n  ; 処理\n  ret\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\nprint_5:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n  ret\n\n_start:\n  call print_5\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .bss\n  res resb 1\n\nsection .text\n  global _start\n\nprint_5:\n  mov rax, 5\n  add rax, 48\n  mov [res], al\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, res\n  mov rdx, 1\n  syscall\n  ret\n\n_start:\n  call ___\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "correctLines": ["section .bss", "  res resb 1", "", "section .text", "  global _start", "", "print_5:", "  mov rax, 5", "  add rax, 48", "  mov [res], al", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, res", "  mov rdx, 1", "  syscall", "  ret", "", "_start:", "  call print_5", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "print_5 を呼び出します。"],
      "candidates": { "functions": ["print_5"] },
      "testCases": [{ "input": "", "expected_output": "5" }]
    }
  ]
};