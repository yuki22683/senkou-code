export const assembly2Data = {
  "language": "assembly",
  "lessonId": "assembly-2",
  "lessonTitle": "Assembly II - レジスタと演算",
  "lessonDescription": "アセンブリ言語の基本的な演算と制御フローを学びます。レジスタの使い方、算術演算、条件分岐の仕組みを理解しましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "レジスタに値を入れる",
      "description": "mov命令でレジスタに値を格納する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "レジスタとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# CPUの小さな机\n\n**レジスタ** は、CPUが直接操作できる超高速な記憶領域です。rax, rbx, rcx, rdxなどがあります。"
        },
        {
          "title": "mov 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# mov 先, 値\n\n`mov` は、値をレジスタや変数に格納します。\n\n**コード例：**\n```asm\nmov rax, 42  ; rax に 42 を入れる\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  ; movで値をレジスタに格納\n  mov rax, 60\n  mov rdi, 0\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; movで値をレジスタに格納\n  ___ rax, 60\n  ; 終了コード0を設定\n  mov ___, 0\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 60",
        "  mov rdi, 0",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "mov で値をレジスタに格納します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["mov"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "add で足し算",
      "description": "add命令で加算を行う方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "add 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 足し算\n\n**add** は、2つの値を足してレジスタに格納します。"
        },
        {
          "title": "add の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# add 先, 値\n\n先のレジスタに値を足します。\n\n**コード例：**\n```asm\nmov rax, 5\nadd rax, 3  ; rax = 8\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 10\n  ; addで 10 が入った rax に 5 を足す\n  add rax, 5\n  mov rdi, rax\n  mov rax, 60\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; raxに10を格納\n  mov rax, ___\n  ; addで 10 が入った rax に 5 を足す\n  ___ rax, 5\n  ; 結果をrdiにコピー\n  mov ___, rax\n  ; 60は終了コマンド\n  mov rax, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 10",
        "  add rax, 5",
        "  mov rdi, rax",
        "  mov rax, 60",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "add で足し算します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["add"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "sub で引き算",
      "description": "sub命令で減算を行う方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "sub 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 引き算\n\n**sub** は、レジスタから値を引きます。"
        },
        {
          "title": "sub の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# sub 先, 値\n\n先のレジスタから値を引きます。\n\n**コード例：**\n```asm\nmov rax, 10\nsub rax, 3  ; rax = 7\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 20\n  ; subで 20 が入った rax から 5 を引く\n  sub rax, 5\n  mov rdi, rax\n  mov rax, 60\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; raxに20を格納\n  mov rax, ___\n  ; subで 20 が入った rax から 5 を引く\n  ___ rax, 5\n  ; 結果をrdiにコピー\n  mov ___, rax\n  ; 60は終了コマンド\n  mov rax, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 20",
        "  sub rax, 5",
        "  mov rdi, rax",
        "  mov rax, 60",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "sub で引き算します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["sub"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "mul で掛け算",
      "description": "mul命令で乗算を行う方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "mul 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 掛け算\n\n**mul** は、raxの値に指定した値を掛けます。結果はraxに入ります。"
        },
        {
          "title": "mul の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# mul 値\n\nrax × 値 の結果がraxに入ります。\n\n**コード例：**\n```asm\nmov rax, 5\nmov rbx, 3\nmul rbx  ; rax = 15\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 4\n  mov rbx, 3\n  ; mulで rax(4) と rbx(3) を掛ける\n  mul rbx\n  mov rdi, rax\n  mov rax, 60\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; raxに4を格納\n  mov rax, ___\n  ; rbxに3を格納\n  mov rbx, ___\n  ; mulで rax(4) と rbx(3) を掛ける\n  ___ rbx\n  ; 結果をrdiにコピー\n  mov ___, rax\n  ; 60は終了コマンド\n  mov rax, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 4",
        "  mov rbx, 3",
        "  mul rbx",
        "  mov rdi, rax",
        "  mov rax, 60",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "mul で掛け算します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["mul"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "cmp で比較",
      "description": "cmp命令で値を比較する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "cmp 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 比較\n\n**cmp** は、2つの値を比較してフラグを設定します。条件分岐の前に使います。"
        },
        {
          "title": "cmp の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# cmp A, B\n\nA - B を計算し、結果に応じてフラグを立てます（実際の値は変わりません）。\n\n**コード例：**\n```asm\ncmp rax, 10  ; rax と 10 を比較\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 5\n  ; cmpで rax(5) と 5 を比較\n  cmp rax, 5\n  mov rax, 60\n  mov rdi, 0\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; raxに5を格納\n  mov rax, ___\n  ; cmpで rax(5) と 5 を比較\n  ___ rax, 5\n  ; 60は終了コマンド\n  mov rax, ___\n  ; 終了コード0を設定\n  mov rdi, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 5",
        "  cmp rax, 5",
        "  mov rax, 60",
        "  mov rdi, 0",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "cmp で比較します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["cmp"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "jmp で無条件ジャンプ",
      "description": "jmp命令で別の場所に飛ぶ方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "jmp 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 無条件ジャンプ\n\n**jmp** は、指定したラベルに無条件でジャンプします。"
        },
        {
          "title": "jmp の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# jmp ラベル\n\nプログラムの実行位置をラベルに移動します。\n\n**コード例：**\n```asm\njmp end\n...\nend:\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  ; jmpで done ラベルにジャンプ\n  jmp done\ndone:\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; jmpで done ラベルにジャンプ\n  ___ done\n; ジャンプ先のラベル\n___:\n  ; 60は終了コマンド\n  mov rax, ___\n  ; rdiを0にクリア\n  xor rdi, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  jmp done",
        "done:",
        "  mov rax, 60",
        "  xor rdi, rdi",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "jmp でジャンプします。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["jmp"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "je で等しければジャンプ",
      "description": "je命令で条件ジャンプを行う方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "je 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 等しければジャンプ\n\n**je** (Jump if Equal) は、cmpの結果が等しい場合にジャンプします。"
        },
        {
          "title": "je の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# cmp の後に使う\n\n比較結果に応じて分岐できます。\n\n**コード例：**\n```asm\ncmp rax, 5\nje equal  ; 等しければ equal へ\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 5\n  cmp rax, 5\n  ; jeで等しければ done にジャンプ\n  je done\ndone:\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; raxに5を格納\n  mov rax, ___\n  ; raxと5を比較\n  cmp rax, ___\n  ; jeで等しければ done にジャンプ\n  ___ done\n; ジャンプ先のラベル\n___:\n  ; 60は終了コマンド\n  mov rax, ___\n  ; rdiを0にクリア\n  xor rdi, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 5",
        "  cmp rax, 5",
        "  je done",
        "done:",
        "  mov rax, 60",
        "  xor rdi, rdi",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "",
        "je で等しければジャンプします。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["je"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "push と pop でスタック操作",
      "description": "スタックにデータを保存・復元する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "スタックとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 後入れ先出し\n\n**スタック** は、最後に入れたものを最初に取り出すデータ構造です。関数呼び出しで使います。"
        },
        {
          "title": "push と pop",
          "image": "/illustrations/3d/gear.png",
          "content": "# push で入れ、pop で取り出す\n\n`push` でスタックに入れ、`pop` で取り出します。\n\n**コード例：**\n```perl\npush rax  ; スタックに保存\npop rbx   ; スタックから復元\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 42\n  ; pushで rax(42) をスタックに保存\n  push rax\n  ; popでスタックから rbx に取り出す\n  pop rbx\n  mov rax, 60\n  mov rdi, rbx\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; raxに42を格納\n  mov rax, ___\n  ; pushで rax(42) をスタックに保存\n  ___ rax\n  ; popでスタックから rbx に取り出す\n  pop ___\n  ; 60は終了コマンド\n  mov rax, ___\n  ; rbxの値を終了コードに設定\n  mov rdi, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 42",
        "  push rax",
        "  pop rbx",
        "  mov rax, 60",
        "  mov rdi, rbx",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "push でスタックに保存します。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["push"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "xor でゼロクリア",
      "description": "xor命令でレジスタをゼロにする方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "xor 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 排他的論理和\n\n**xor** は、排他的論理和を計算します。同じ値同士のxorは0になります。"
        },
        {
          "title": "ゼロクリアのテクニック",
          "image": "/illustrations/3d/gear.png",
          "content": "# xor A, A で 0 に\n\n`xor rax, rax` は rax を 0 にする効率的な方法です。\n\n**コード例：**\n```asm\nxor rax, rax  ; rax = 0\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  mov rax, 60\n  ; xorで rdi を 0 にする\n  xor rdi, rdi\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; 60は終了コマンド\n  mov rax, ___\n  ; xorで rdi を 0 にする\n  ___ rdi, rdi\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  mov rax, 60",
        "  xor rdi, rdi",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "",
        "xor で rdi を 0 にします。",
        ""
      ],
      "candidates": {
        "keywords": ["xor"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "call で関数呼び出し",
      "description": "call命令でサブルーチンを呼び出す方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "call 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# サブルーチン呼び出し\n\n**call** は、サブルーチン（関数）を呼び出します。戻りアドレスがスタックに保存されます。"
        },
        {
          "title": "call と ret",
          "image": "/illustrations/3d/gear.png",
          "content": "# ret で戻る\n\n`call` で呼び出し、`ret` で呼び出し元に戻ります。\n\n**コード例：**\n```asm\ncall func\n...\nfunc:\n  ...\n  ret\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n_start:\n  ; callで done サブルーチンを呼び出す\n  call done\ndone:\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n; プログラムの開始地点\n___:\n  ; callで done サブルーチンを呼び出す\n  ___ done\n; サブルーチンのラベル\n___:\n  ; 60は終了コマンド\n  mov rax, ___\n  ; rdiを0にクリア\n  xor rdi, ___\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "section .text",
        "  global _start",
        "_start:",
        "  call done",
        "done:",
        "  mov rax, 60",
        "  xor rdi, rdi",
        "  syscall"
      ],
      "lineHints": [
        "",
        "",
        "",
        "call でサブルーチンを呼び出します。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["call"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    }
  ]
}
