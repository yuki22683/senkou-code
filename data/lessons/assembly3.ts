export const assembly3Data = {
  "language": "assembly",
  "lessonId": "assembly-3",
  "lessonTitle": "Assembly III - メモリとスタック",
  "lessonDescription": "アセンブリ言語のメモリ操作とスタックを学びます。データの保存と取り出しをマスターしましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "dec と inc",
      "content": "`dec`（デクリメント）と`inc`（インクリメント）で1ずつ増減できます。\\n\\n```nasm\\nmov rax, 10\\ndec rax      ; rax = 9\\ninc rax      ; rax = 10\\n```\\n\\n`add rax, 1`や`sub rax, 1`より簡潔に書けます。"
    },
    {
      "title": "imul で符号付き乗算",
      "content": "`imul`は符号付き（負の数も扱える）乗算命令です。\\n\\n```nasm\\nmov rbx, 3\\nimul rax, rbx, 4  ; rax = rbx * 4 = 12\\n```\\n\\n3オペランド形式で `結果, 被乗数, 乗数` を指定できます。"
    },
    {
      "title": "ビット論理演算",
      "content": "ビット単位の論理演算ができます。\\n\\n```nasm\\nmov rax, 0xFF\\nand rax, 0x0F  ; AND: rax = 0x0F\\n\\nmov rax, 0x10\\nor rax, 0x01   ; OR: rax = 0x11\\n```\\n\\n- `and` = 両方1なら1\\n- `or` = どちらか1なら1\\n- `xor` = 異なれば1"
    },
    {
      "title": "シフト演算",
      "content": "`shl`（左シフト）と`shr`（右シフト）でビットを移動します。\\n\\n```nasm\\nmov rax, 5     ; 0101\\nshl rax, 2     ; 10100 = 20 (5 * 4)\\n\\nmov rax, 20    ; 10100\\nshr rax, 1     ; 1010 = 10 (20 / 2)\\n```\\n\\n左シフトは2倍、右シフトは2分の1と同じ効果があります。"
    },
    {
      "title": "test命令でビット検査",
      "content": "`test`はAND演算を行い、結果でフラグを設定します（レジスタは変更されません）。\\n\\n```nasm\\nmov rax, 5\\ntest rax, 1    ; 最下位ビットを検査\\njnz is_odd     ; 0でなければジャンプ\\n```\\n\\n奇数偶数判定などに便利です。"
    },
    {
      "title": "neg命令で符号反転",
      "content": "`neg`でレジスタの符号を反転します。\\n\\n```nasm\\nmov rax, 10\\nneg rax        ; rax = -10\\n\\nmov rax, -5\\nneg rax        ; rax = 5\\n```\\n\\n2の補数表現で符号が反転します。"
    }
  ],
  "exercises": [
    {
      "title": "値を減らしましょう",
      "description": "dec命令でレジスタの値を1減らす方法を学びます",
      "tutorialSlides": [
        {
          "title": "dec命令（デクリメント）",
          "content": "# 値を1減らす\\n\\n**dec** 命令は、レジスタの値を1だけ減らします。`sub rax, 1` と同じ意味です。"
        },
        {
          "title": "dec の使い方",
          "content": "# dec レジスタ\\n\\n```asm\\nmov rax, 10\\ndec rax     ; raxが9になる\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  ; グローバルシンボルを宣言\\n  global _start\\n\\n; ラベルを定義\\n_start:\\n  ; raxに10を入れる\\n  mov rax, 10\\n  ; raxを1減らす\\n  dec rax\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに10を入れる\\n  ___ ___, ___\\n  ; raxを1減らす\\n  ___ ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに10を入れる",
          "  mov rax, 10",
          "  ; raxを1減らす",
          "  dec rax",
          "",
          "  ; 結果raxをrdiにコピー",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "10", "dec", "rdi", "60", "syscall"]
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
      "description": "数の掛け算（乗算）をプログラムで行う方法を学びます",
      "tutorialSlides": [
        {
          "title": "imul命令",
          "content": "# 符号付き整数の掛け算\\n\\n**imul** 命令は、符号付き整数の掛け算を行います。"
        },
        {
          "title": "imul の使い方",
          "content": "# imul 先, 元, 値\\n\\n結果を先のレジスタに格納します。\\n\\n```asm\\nimul rax, rbx, 5  ; rax = rbx * 5\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; rbxに3を入れる\\n  mov rbx, 3\\n  ; rbx(3)と4を掛けて結果をraxへ\\n  imul rax, rbx, 4\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; rbxに3を入れる\\n  ___ ___, ___\\n  ; rbx(3)と4を掛けて結果をraxへ\\n  ___ ___, ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; rbxに3を入れる",
          "  mov rbx, 3",
          "  ; rbx(3)と4を掛けて結果をraxへ",
          "  imul rax, rbx, 4",
          "",
          "  ; 結果raxをrdiにコピー",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rbx", "3", "imul", "rax", "4", "rdi", "60", "syscall"]
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
      "description": "push命令でスタックに値を保存する方法を学びます",
      "tutorialSlides": [
        {
          "title": "push命令",
          "content": "# スタックに積む\\n\\n**push** 命令は、値をスタックの一番上に積みます。後で取り出すことができます。"
        },
        {
          "title": "push の使い方",
          "content": "# push 値\\n\\nレジスタや即値をスタックに積みます。\\n\\n```asm\\npush rax    ; raxの値をスタックに\\npush 42     ; 42をスタックに\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに42を入れる\\n  mov rax, 42\\n  ; スタックにraxを保存\\n  push rax\\n  ; スタックからrdiに取り出す\\n  pop rdi\\n\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに42を入れる\\n  ___ ___, ___\\n  ; スタックにraxを保存\\n  ___ ___\\n  ; スタックからrdiに取り出す\\n  ___ ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに42を入れる",
          "  mov rax, 42",
          "  ; スタックにraxを保存",
          "  push rax",
          "  ; スタックからrdiに取り出す",
          "  pop rdi",
          "",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "42", "push", "pop", "rdi", "60", "syscall"]
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
      "description": "pop命令でスタックから値を取り出す方法を学びます",
      "tutorialSlides": [
        {
          "title": "pop命令",
          "content": "# スタックから取り出す\\n\\n**pop** 命令は、スタックの一番上から値を取り出してレジスタに入れます。"
        },
        {
          "title": "pop の使い方",
          "content": "# pop レジスタ\\n\\n最後にpushした値が取り出されます（LIFO）。\\n\\n```asm\\npop rax    ; スタックの値をraxに\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; 数値99をスタックへ\\n  push 99\\n  ; スタックからrdiへ\\n  pop rdi\\n\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; 数値99をスタックへ\\n  ___ ___\\n  ; スタックからrdiへ\\n  ___ ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; 数値99をスタックへ",
          "  push 99",
          "  ; スタックからrdiへ",
          "  pop rdi",
          "",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "push", "99", "pop", "rdi", "mov", "rax", "60", "syscall"]
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
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "and命令",
          "content": "# ビットごとのAND\\n\\n**and** 命令は、2つの値のビットごとのANDを計算します。"
        },
        {
          "title": "and の使い方",
          "content": "# and 先, 元\\n\\n両方のビットが1の場合のみ1になります。\\n\\n```asm\\nand rax, 0xFF  ; 下位8ビットだけ残す\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに0xFFをセット\\n  mov rax, 0xFF\\n  ; raxと0x0FのビットAND\\n  and rax, 0x0F\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに0xFFをセット\\n  ___ ___, ___\\n  ; raxと0x0FのビットAND\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに0xFFをセット",
          "  mov rax, 0xFF",
          "  ; raxと0x0FのビットAND",
          "  and rax, 0x0F",
          "",
          "  ; 結果をrdiへ",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "0xFF", "and", "0x0F", "rdi", "60", "syscall"]
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
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "or命令",
          "content": "# ビットごとのOR\\n\\n**or** 命令は、2つの値のビットごとのORを計算します。"
        },
        {
          "title": "or の使い方",
          "content": "# or 先, 元\\n\\nどちらかのビットが1なら1になります。\\n\\n```asm\\nor rax, 0x01  ; 最下位ビットを1にする\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに0x10をセット\\n  mov rax, 0x10\\n  ; raxと0x01のビットOR\\n  or rax, 0x01\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに0x10をセット\\n  ___ ___, ___\\n  ; raxと0x01のビットOR\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに0x10をセット",
          "  mov rax, 0x10",
          "  ; raxと0x01のビットOR",
          "  or rax, 0x01",
          "",
          "  ; 結果をrdiへ",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "0x10", "or", "0x01", "rdi", "60", "syscall"]
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
      "description": "shl命令でビットを左にシフトする方法を学びます",
      "tutorialSlides": [
        {
          "title": "shl命令",
          "content": "# ビットを左にシフト\\n\\n**shl** 命令は、ビットを左に移動させます。1ビットシフトは2倍と同じです。"
        },
        {
          "title": "shl の使い方",
          "content": "# shl 先, シフト数\\n\\n```asm\\nmov rax, 4\\nshl rax, 1  ; rax = 8 (4 * 2)\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5をセット\\n  mov rax, 5\\n  ; raxを2ビット左シフト\\n  shl rax, 2\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに5をセット\\n  ___ ___, ___\\n  ; raxを2ビット左シフト\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに5をセット",
          "  mov rax, 5",
          "  ; raxを2ビット左シフト",
          "  shl rax, 2",
          "",
          "  ; 結果をrdiへ",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "5", "shl", "2", "rdi", "60", "syscall"]
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
      "description": "shr命令でビットを右にシフトする方法を学びます",
      "tutorialSlides": [
        {
          "title": "shr命令",
          "content": "# ビットを右にシフト\\n\\n**shr** 命令は、ビットを右に移動させます。1ビットシフトは2で割るのと同じです。"
        },
        {
          "title": "shr の使い方",
          "content": "# shr 先, シフト数\\n\\n```asm\\nmov rax, 16\\nshr rax, 2  ; rax = 4 (16 / 4)\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに20をセット\\n  mov rax, 20\\n  ; raxを1ビット右シフト\\n  shr rax, 1\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに20をセット\\n  ___ ___, ___\\n  ; raxを1ビット右シフト\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに20をセット",
          "  mov rax, 20",
          "  ; raxを1ビット右シフト",
          "  shr rax, 1",
          "",
          "  ; 結果をrdiへ",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; 実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "20", "shr", "1", "rdi", "60", "syscall"]
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
      "description": "test命令で論理AND演算を行い、フラグを設定する方法を学びます",
      "tutorialSlides": [
        {
          "title": "test命令",
          "content": "# ビットをテスト\\n\\n**test** 命令は、ANDを計算してフラグを設定しますが、結果は保存しません。"
        },
        {
          "title": "test の使い方",
          "content": "# test 先, 元\\n\\n特定のビットが立っているか確認するのに使います。\\n\\n```asm\\ntest rax, 1  ; 最下位ビットをチェック\\njnz odd      ; 0でなければジャンプ\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5をセット\\n  mov rax, 5\\n  ; ビット検査(rax AND 1)\\n  test rax, 1\\n  ; 0でなければ(奇数なら)ジャンプ\\n  jnz is_odd\\n  ; 0なら(偶数なら)rdi=0\\n  mov rdi, 0\\n  jmp done\\nis_odd:\\n  ; rdi=1\\n  mov rdi, 1\\ndone:\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに5をセット\\n  ___ ___, ___\\n  ; ビット検査(rax AND 1)\\n  ___ ___, ___\\n  ; 0でなければ(奇数なら)ジャンプ\\n  ___ ___\\n  ; 0なら(偶数なら)rdi=0\\n  ___ ___, ___\\n  ; 無条件ジャンプ\\n  ___ ___\\n; ラベルを定義\\n___:\\n  ; rdi=1\\n  ___ ___, ___\\n; ラベルを定義\\n___:\\n  ; 終了\\n  ___ ___, ___\\n  ; システムコール実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに5をセット",
          "  mov rax, 5",
          "  ; ビット検査(rax AND 1)",
          "  test rax, 1",
          "  ; 0でなければ(奇数なら)ジャンプ",
          "  jnz is_odd",
          "  ; 0なら(偶数なら)rdi=0",
          "  mov rdi, 0",
          "  ; 無条件ジャンプ",
          "  jmp done",
          "; ラベルを定義",
          "is_odd:",
          "  ; rdi=1",
          "  mov rdi, 1",
          "; ラベルを定義",
          "done:",
          "  ; 終了",
          "  mov rax, 60",
          "  ; システムコール実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "5", "test", "1", "jnz", "is_odd", "rdi", "0", "jmp", "done", "60", "syscall"]
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
      "description": "neg命令で数値の符号を反転させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "neg命令",
          "content": "# 符号を反転\\n\\n**neg** 命令は、値の符号を反転します（2の補数を取ります）。"
        },
        {
          "title": "neg の使い方",
          "content": "# neg レジスタ\\n\\n正の数が負に、負の数が正になります。\\n\\n```asm\\nmov rax, 5\\nneg rax     ; rax = -5\\n```"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに10をセット\\n  mov rax, 10\\n  ; 符号反転(-10になる)\\n  neg rax\\n\\n  ; rdiを0に\\n  xor rdi, rdi\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\\n  ___ ___\\n\\n; ラベルを定義\\n___:\\n  ; raxに10をセット\\n  ___ ___, ___\\n  ; 符号反転(-10になる)\\n  ___ ___\\n\\n  ; rdiを0に\\n  ___ ___, ___\\n  ; 終了\\n  ___ ___, ___\\n  ; システムコール実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに10をセット",
          "  mov rax, 10",
          "  ; 符号反転(-10になる)",
          "  neg rax",
          "",
          "  ; rdiを0に",
          "  xor rdi, rdi",
          "  ; 終了",
          "  mov rax, 60",
          "  ; システムコール実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "10", "neg", "xor", "rdi", "60", "syscall"]
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