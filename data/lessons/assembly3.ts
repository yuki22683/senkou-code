export const assembly3Data = {
  "language": "assembly",
  "lessonId": "assembly-3",
  "lessonTitle": "Assembly III - メモリとスタック",
  "lessonDescription": "アセンブリ言語のメモリ操作とスタックを学びます。データの保存と取り出しをマスターしましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "値を減らしましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 10\\n  ; decで1減らす\\n  dec rax\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; decで1減らす\\n  dec ___\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 10",
          "  ; decで1減らす",
          "  dec rax",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "値を1減らす命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "dec",
            "inc",
            "sub",
            "add"
          ],
          "others": ["text", "_start", "rax", "10", "rdi", "60", "syscall", "text", "_start", "", "10", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "掛け算をしましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rbx, 3\\n  ; imulで掛け算\\n  imul rax, rbx, 4\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; imulで掛け算\\n  imul rax, rbx, ___\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rbx, 3",
          "  ; imulで掛け算",
          "  imul rax, rbx, 4",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "掛け算の命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "imul",
            "mul",
            "add",
            "sub"
          ],
          "others": ["text", "_start", "rbx", "3", "4", "rdi", "rax", "60", "syscall", "text", "_start", "", "3", "4", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "スタックに保存",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 42\\n  ; pushでスタックに保存\\n  push rax\\n  pop rdi\\n\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; pushでスタックに保存\\n  push ___\\n  pop ___\\n___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 42",
          "  ; pushでスタックに保存",
          "  push rax",
          "  pop rdi",
          "",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "スタックに保存する命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "push",
            "pop",
            "mov",
            "store"
          ],
          "others": ["text", "_start", "rax", "42", "rdi", "60", "syscall", "text", "_start", "", "42", "rax", "rdi", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "スタックから取り出す",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  push 99\\n  ; popでスタックから取り出す\\n  pop rdi\\n\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  push ___\\n  ; popでスタックから取り出す\\n  pop ___\\n___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  push 99",
          "  ; popでスタックから取り出す",
          "  pop rdi",
          "",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "スタックから取り出す命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "pop",
            "push",
            "mov",
            "load"
          ],
          "others": ["text", "_start", "99", "rdi", "rax", "60", "syscall", "text", "_start", "", "99", "rdi", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "論理AND演算",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 0xFF\\n  ; andでビットAND\\n  and rax, 0x0F\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; andでビットAND\\n  and rax, ___x0F\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 0xFF",
          "  ; andでビットAND",
          "  and rax, 0x0F",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "ビットANDの命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "and",
            "or",
            "xor",
            "not"
          ],
          "others": ["text", "_start", "rax", "0xFF", "0", "rdi", "60", "syscall", "text", "_start", "", "0xFF", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "論理OR演算",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 0x10\\n  ; orでビットOR\\n  or rax, 0x01\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; orでビットOR\\n  or rax, ___x01\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 0x10",
          "  ; orでビットOR",
          "  or rax, 0x01",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "ビットORの命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "or",
            "and",
            "xor",
            "not"
          ],
          "others": ["text", "_start", "rax", "0x10", "0", "rdi", "60", "syscall", "text", "_start", "", "0x10", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "左シフト演算",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 5\\n  ; shlで左シフト\\n  shl rax, 2\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; shlで左シフト\\n  shl rax, ___\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 5",
          "  ; shlで左シフト",
          "  shl rax, 2",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "左シフトの命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "shl",
            "shr",
            "rol",
            "ror"
          ],
          "others": ["text", "_start", "rax", "5", "2", "rdi", "60", "syscall", "text", "_start", "", "5", "2", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "右シフト演算",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 20\\n  ; shrで右シフト\\n  shr rax, 1\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; shrで右シフト\\n  shr rax, ___\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 20",
          "  ; shrで右シフト",
          "  shr rax, 1",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "右シフトの命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "shr",
            "shl",
            "ror",
            "rol"
          ],
          "others": ["text", "_start", "rax", "20", "1", "rdi", "60", "syscall", "text", "_start", "", "20", "1", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "test命令で検査",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 5\\n  ; testでビットを検査\\n  test rax, 1\\n  jnz is_odd\\n  mov rdi, 0\\n  jmp done\\nis_odd:\\n  mov rdi, 1\\ndone:\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; testでビットを検査\\n  test rax, ___\\n  jnz ___\\n  mov ___, ___\\n  jmp ___\\n___:\\n  mov ___, ___\\n___:\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 5",
          "  ; testでビットを検査",
          "  test rax, 1",
          "  jnz is_odd",
          "  mov rdi, 0",
          "  jmp done",
          "is_odd:",
          "  mov rdi, 1",
          "done:",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "ビットを検査する命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "test",
            "cmp",
            "and",
            "check"
          ],
          "others": ["text", "_start", "rax", "5", "1", "is_odd", "rdi", "0", "done", "60", "syscall", "text", "_start", "", "5", "1", "is_odd", "0", "done", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "neg命令で符号反転",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 10\\n  ; negで符号反転\\n  neg rax\\n\\n  xor rdi, rdi\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; negで符号反転\\n  neg ___\\n___\\n  xor ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 10",
          "  ; negで符号反転",
          "  neg rax",
          "",
          "  xor rdi, rdi",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "符号を反転する命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "neg",
            "not",
            "inv",
            "sub"
          ],
          "others": ["text", "_start", "rax", "10", "rdi", "60", "syscall", "text", "_start", "", "10", "rax", "rdi", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      }
  ]
};
