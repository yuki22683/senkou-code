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
        "description": "dec命令を使ってレジスタの値を1減らしてみましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "dec命令（デクリメント）",
            "content": "# 値を1減らす\n\n**dec** 命令は、レジスタの値を1だけ減らします。`sub rax, 1` と同じ意味です。"
          },
          {
            "title": "dec の使い方",
            "content": "# dec レジスタ\n\n```asm\nmov rax, 10\ndec rax     ; raxが9になる\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 10\n  ; decで1減らす\n  dec rax\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; decで1減らす\n  dec ___\n\n  mov ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "dec",
            "inc",
            "sub",
            "add"
          ],
          "others": ["text", "_start", "rax", "10", "rdi", "60", "syscall"]
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
        "description": "imul命令を使って掛け算をしてみましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "imul命令",
            "content": "# 符号付き整数の掛け算\n\n**imul** 命令は、符号付き整数の掛け算を行います。"
          },
          {
            "title": "imul の使い方",
            "content": "# imul 先, 元, 値\n\n結果を先のレジスタに格納します。\n\n```asm\nimul rax, rbx, 5  ; rax = rbx * 5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rbx, 3\n  ; imulで掛け算\n  imul rax, rbx, 4\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; imulで掛け算\n  imul rax, rbx, ___\n\n  mov ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "imul",
            "mul",
            "add",
            "sub"
          ],
          "others": ["text", "_start", "rbx", "3", "4", "rdi", "rax", "60", "syscall"]
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
        "description": "push命令を使ってレジスタの値をスタックに保存しましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "push命令",
            "content": "# スタックに積む\n\n**push** 命令は、値をスタックの一番上に積みます。後で取り出すことができます。"
          },
          {
            "title": "push の使い方",
            "content": "# push 値\n\nレジスタや即値をスタックに積みます。\n\n```asm\npush rax    ; raxの値をスタックに\npush 42     ; 42をスタックに\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 42\n  ; pushでスタックに保存\n  push rax\n  pop rdi\n\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; pushでスタックに保存\n  push ___\n  pop ___\n\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "push",
            "pop",
            "mov",
            "store"
          ],
          "others": ["text", "_start", "rax", "42", "rdi", "60", "syscall"]
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
        "description": "pop命令を使ってスタックから値を取り出しましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "pop命令",
            "content": "# スタックから取り出す\n\n**pop** 命令は、スタックの一番上から値を取り出してレジスタに入れます。"
          },
          {
            "title": "pop の使い方",
            "content": "# pop レジスタ\n\n最後にpushした値が取り出されます（LIFO）。\n\n```asm\npop rax    ; スタックの値をraxに\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  push 99\n  ; popでスタックから取り出す\n  pop rdi\n\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  push ___\n  ; popでスタックから取り出す\n  pop ___\n\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "pop",
            "push",
            "mov",
            "load"
          ],
          "others": ["text", "_start", "99", "rdi", "rax", "60", "syscall"]
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
        "description": "and命令を使ってビット論理ANDを行いましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "and命令",
            "content": "# ビットごとのAND\n\n**and** 命令は、2つの値のビットごとのANDを計算します。"
          },
          {
            "title": "and の使い方",
            "content": "# and 先, 元\n\n両方のビットが1の場合のみ1になります。\n\n```asm\nand rax, 0xFF  ; 下位8ビットだけ残す\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 0xFF\n  ; andでビットAND\n  and rax, 0x0F\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; andでビットAND\n  and rax, ___x0F\n\n  mov ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "and",
            "or",
            "xor",
            "not"
          ],
          "others": ["text", "_start", "rax", "0xFF", "0", "rdi", "60", "syscall"]
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
        "description": "or命令を使ってビット論理ORを行いましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "or命令",
            "content": "# ビットごとのOR\n\n**or** 命令は、2つの値のビットごとのORを計算します。"
          },
          {
            "title": "or の使い方",
            "content": "# or 先, 元\n\nどちらかのビットが1なら1になります。\n\n```asm\nor rax, 0x01  ; 最下位ビットを1にする\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 0x10\n  ; orでビットOR\n  or rax, 0x01\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; orでビットOR\n  or rax, ___x01\n\n  mov ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "or",
            "and",
            "xor",
            "not"
          ],
          "others": ["text", "_start", "rax", "0x10", "0", "rdi", "60", "syscall"]
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
        "description": "shl命令を使ってビットを左にシフトしましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "shl命令",
            "content": "# ビットを左にシフト\n\n**shl** 命令は、ビットを左に移動させます。1ビットシフトは2倍と同じです。"
          },
          {
            "title": "shl の使い方",
            "content": "# shl 先, シフト数\n\n```asm\nmov rax, 4\nshl rax, 1  ; rax = 8 (4 * 2)\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 5\n  ; shlで左シフト\n  shl rax, 2\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; shlで左シフト\n  shl rax, ___\n\n  mov ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "shl",
            "shr",
            "rol",
            "ror"
          ],
          "others": ["text", "_start", "rax", "5", "2", "rdi", "60", "syscall"]
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
        "description": "shr命令を使ってビットを右にシフトしましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "shr命令",
            "content": "# ビットを右にシフト\n\n**shr** 命令は、ビットを右に移動させます。1ビットシフトは2で割るのと同じです。"
          },
          {
            "title": "shr の使い方",
            "content": "# shr 先, シフト数\n\n```asm\nmov rax, 16\nshr rax, 2  ; rax = 4 (16 / 4)\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 20\n  ; shrで右シフト\n  shr rax, 1\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; shrで右シフト\n  shr rax, ___\n\n  mov ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "shr",
            "shl",
            "ror",
            "rol"
          ],
          "others": ["text", "_start", "rax", "20", "1", "rdi", "60", "syscall"]
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
        "description": "test命令を使ってビットを検査しましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "test命令",
            "content": "# ビットをテスト\n\n**test** 命令は、ANDを計算してフラグを設定しますが、結果は保存しません。"
          },
          {
            "title": "test の使い方",
            "content": "# test 先, 元\n\n特定のビットが立っているか確認するのに使います。\n\n```asm\ntest rax, 1  ; 最下位ビットをチェック\njnz odd      ; 0でなければジャンプ\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 5\n  ; testでビットを検査\n  test rax, 1\n  jnz is_odd\n  mov rdi, 0\n  jmp done\nis_odd:\n  mov rdi, 1\ndone:\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; testでビットを検査\n  test rax, ___\n  jnz ___\n  mov ___, ___\n  jmp ___\n___:\n  mov ___, ___\n___:\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "test",
            "cmp",
            "and",
            "check"
          ],
          "others": ["text", "_start", "rax", "5", "1", "is_odd", "rdi", "0", "done", "60", "syscall"]
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
        "description": "neg命令を使って値の符号を反転しましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "neg命令",
            "content": "# 符号を反転\n\n**neg** 命令は、値の符号を反転します（2の補数を取ります）。"
          },
          {
            "title": "neg の使い方",
            "content": "# neg レジスタ\n\n正の数が負に、負の数が正になります。\n\n```asm\nmov rax, 5\nneg rax     ; rax = -5\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 10\n  ; negで符号反転\n  neg rax\n\n  xor rdi, rdi\n  mov rax, 60\n  syscall",
        "holeyCode": "section .___\n  global ___\n\n___:\n  mov ___, ___\n  ; negで符号反転\n  neg ___\n\n  xor ___, ___\n  mov ___, ___\n  ___",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "instructions": [
            "neg",
            "not",
            "inv",
            "sub"
          ],
          "others": ["text", "_start", "rax", "10", "rdi", "60", "syscall"]
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
