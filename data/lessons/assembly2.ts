export const assembly2Data = {
  "language": "assembly",
  "lessonId": "assembly-2",
  "lessonTitle": "Assembly II - レジスタと演算",
  "lessonDescription": "アセンブリ言語の基本的な演算と制御フローを学びます。レジスタの使い方、算術演算、条件分岐の仕組みを理解しましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "レジスタとは",
      "content": "レジスタはCPU内の高速な記憶領域です。x86-64には多くの64ビットレジスタがあります。\\n\\n**よく使うレジスタ:**\\n- `rax` - 戻り値・演算結果\\n- `rbx`, `rcx`, `rdx` - 汎用\\n- `rdi`, `rsi` - 関数の引数\\n- `rsp`, `rbp` - スタックポインタ"
    },
    {
      "title": "mov命令でデータ転送",
      "content": "`mov`命令で値をレジスタに格納します。\\n\\n```nasm\\nmov rax, 60   ; raxに60を入れる\\nmov rdi, 0    ; rdiに0を入れる\\nmov rbx, rax  ; raxの値をrbxにコピー\\n```\\n\\n`mov 先, 元`の順番で書きます。"
    },
    {
      "title": "算術演算命令",
      "content": "**add（加算）・sub（減算）:**\\n```nasm\\nmov rax, 10\\nadd rax, 5   ; rax = 15\\nsub rax, 3   ; rax = 12\\n```\\n\\n**mul（乗算）:**\\n```nasm\\nmov rax, 4\\nmov rbx, 3\\nmul rbx      ; rax = rax * rbx = 12\\n```"
    },
    {
      "title": "比較とジャンプ",
      "content": "`cmp`で値を比較し、条件ジャンプで分岐します。\\n\\n```nasm\\ncmp rax, 5   ; raxと5を比較\\nje equal    ; 等しければジャンプ\\njmp done     ; 無条件ジャンプ\\nequal:\\n  ; 等しい場合の処理\\ndone:\\n```\\n\\n- `je` = 等しい時\\n- `jne` = 等しくない時\\n- `jmp` = 無条件"
    },
    {
      "title": "スタック操作",
      "content": "`push`と`pop`でスタックを操作します。\\n\\n```nasm\\nmov rax, 42\\npush rax     ; スタックに42を保存\\npop rbx      ; スタックから取り出してrbxへ\\n```\\n\\nスタックはLIFO（後入れ先出し）構造です。"
    },
    {
      "title": "xorでゼロクリア",
      "content": "`xor reg, reg`でレジスタを0にするテクニックです。\\n\\n```nasm\\nxor rdi, rdi  ; rdi = 0\\n```\\n\\n`mov rdi, 0`より命令サイズが小さく高速です。\\n\\n同じ値同士のXOR演算は常に0になる性質を利用しています。"
    }
  ],
  "exercises": [
    {
      "title": "レジスタに値を入れる",
      "tutorialSlides": [
        {
          "title": "レジスタとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# CPUの小さな机\\n\\n**レジスタ** は、CPUが直接操作できる超高速な記憶領域です。rax, rbx, rcx, rdxなどがあります。"
        },
        {
          "title": "mov 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# mov 先, 値\\n\\n`mov` は、値をレジスタや変数に格納します。\\n\\n**コード例：**\\n```asm\\nmov rax, 42  ; rax に 42 を入れる\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; movで値をレジスタに格納\\n  mov rax, 60\\n  ; 終了コード0を設定\\n  mov rdi, 0\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; movで値をレジスタに格納\\n  ___ ___, ___\\n  ; 終了コード0を設定\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; movで値をレジスタに格納",
          "  mov rax, 60",
          "  ; 終了コード0を設定",
          "  mov rdi, 0",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、終了コードです。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "60", "rdi", "0", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "add 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 足し算\\n\\n**add** は、2つの値を足してレジスタに格納します。"
        },
        {
          "title": "add の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# add 先, 値\\n\\n先のレジスタに値を足します。\\n\\n**コード例：**\\n```asm\\nmov rax, 5\\nadd rax, 3  ; rax = 8\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに10を格納\\n  mov rax, 10\\n  ; 10 が入った rax に 5 を足す\\n  add rax, 5\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに10を格納\\n  ___ ___, ___\\n  ; 10 が入った rax に 5 を足す\\n  ___ ___, ___\\n  ; 結果をrdiにコピー\\n  ___ ___, ___\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに10を格納",
          "  mov rax, 10",
          "  ; 10 が入った rax に 5 を足す",
          "  add rax, 5",
          "  ; 結果をrdiにコピー",
          "  mov rdi, rax",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "レジスタに値を加算する命令、レジスタ名、加算する値です。",
          null,
          "値をレジスタに格納する命令、結果を格納するレジスタ、コピー元のレジスタです。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "10", "add", "5", "rdi", "60", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "sub 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 引き算\\n\\n**sub** は、レジスタから値を引きます。"
        },
        {
          "title": "sub の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# sub 先, 値\\n\\n先のレジスタから値を引きます。\\n\\n**コード例：**\\n```asm\\nmov rax, 10\\nsub rax, 3  ; rax = 7\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに20を格納\\n  mov rax, 20\\n  ; 20 が入った rax から 5 を引く\\n  sub rax, 5\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに20を格納\\n  ___ ___, ___\\n  ; 20 が入った rax から 5 を引く\\n  ___ ___, ___\\n  ; 結果をrdiにコピー\\n  ___ ___, ___\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに20を格納",
          "  mov rax, 20",
          "  ; 20 が入った rax から 5 を引く",
          "  sub rax, 5",
          "  ; 結果をrdiにコピー",
          "  mov rdi, rax",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "レジスタから値を減算する命令、レジスタ名、減算する値です。",
          null,
          "値をレジスタに格納する命令、結果を格納するレジスタ、コピー元のレジスタです。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "20", "sub", "5", "rdi", "60", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "mul 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 掛け算\\n\\n**mul** は、raxの値に指定した値を掛けます。結果はraxに入ります。"
        },
        {
          "title": "mul の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# mul 値\\n\\nrax × 値 の結果がraxに入ります。\\n\\n**コード例：**\\n```asm\\nmov rax, 5\\nmov rbx, 3\\nmul rbx  ; rax = 15\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに4を格納\\n  mov rax, 4\\n  ; rbxに3を格納\\n  mov rbx, 3\\n  ; rax(4) と rbx(3) を掛ける\\n  mul rbx\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに4を格納\\n  ___ ___, ___\\n  ; rbxに3を格納\\n  ___ ___, ___\\n  ; rax(4) と rbx(3) を掛ける\\n  ___ ___\\n  ; 結果をrdiにコピー\\n  ___ ___, ___\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに4を格納",
          "  mov rax, 4",
          "  ; rbxに3を格納",
          "  mov rbx, 3",
          "  ; rax(4) と rbx(3) を掛ける",
          "  mul rbx",
          "  ; 結果をrdiにコピー",
          "  mov rdi, rax",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "乗算を行う命令と、乗算する値が入ったレジスタ名です。",
          null,
          "値をレジスタに格納する命令、結果を格納するレジスタ、コピー元のレジスタです。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "4", "rbx", "3", "mul", "rdi", "60", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "cmp 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 比較\\n\\n**cmp** は、2つの値を比較してフラグを設定します。条件分岐の前に使います。"
        },
        {
          "title": "cmp の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# cmp A, B\\n\\nA - B を計算し、結果に応じてフラグを立てます（実際の値は変わりません）。\\n\\n**コード例：**\\n```asm\\ncmp rax, 10  ; rax と 10 を比較\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに5を格納\\n  mov rax, 5\\n  ; rax(5) と 5 を比較\\n  cmp rax, 5\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; 終了コード0を設定\\n  mov rdi, 0\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに5を格納\\n  ___ ___, ___\\n  ; rax(5) と 5 を比較\\n  ___ ___, ___\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; 終了コード0を設定\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに5を格納",
          "  mov rax, 5",
          "  ; rax(5) と 5 を比較",
          "  cmp rax, 5",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; 終了コード0を設定",
          "  mov rdi, 0",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "2つの値を比較する命令、レジスタ名、比較する値です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、終了コードです。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "5", "cmp", "60", "rdi", "0", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "jmp 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 無条件ジャンプ\\n\\n**jmp** は、指定したラベルに無条件でジャンプします。"
        },
        {
          "title": "jmp の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# jmp ラベル\\n\\nプログラムの実行位置をラベルに移動します。\\n\\n**コード例：**\\n```asm\\njmp end\\n...\\nend:\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; done ラベルにジャンプ\\n  jmp done\\n; ジャンプ先のラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; done ラベルにジャンプ\\n  ___ ___\\n; ジャンプ先のラベル\\n___:\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; rdiを0にクリア\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; done ラベルにジャンプ",
          "  jmp done",
          "; ジャンプ先のラベル",
          "done:",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; rdiを0にクリア",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "無条件で指定ラベルへジャンプする命令と、ジャンプ先のラベル名です。",
          null,
          "ジャンプ先のラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "XOR演算でレジスタをゼロクリアする命令と、対象のレジスタ名です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "jmp", "done", "mov", "rax", "60", "xor", "rdi", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "je 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 等しければジャンプ\\n\\n**je** (Jump if Equal) は、cmpの結果が等しい場合にジャンプします。"
        },
        {
          "title": "je の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# cmp の後に使う\\n\\n比較結果に応じて分岐できます。\\n\\n**コード例：**\\n```asm\\ncmp rax, 5\\nje equal  ; 等しければ equal へ\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに5を格納\\n  mov rax, 5\\n  ; raxと5を比較\\n  cmp rax, 5\\n  ; 等しければ done にジャンプ\\n  je done\\n; ジャンプ先のラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに5を格納\\n  ___ ___, ___\\n  ; raxと5を比較\\n  ___ ___, ___\\n  ; 等しければ done にジャンプ\\n  ___ ___\\n; ジャンプ先のラベル\\n___:\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; rdiを0にクリア\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに5を格納",
          "  mov rax, 5",
          "  ; raxと5を比較",
          "  cmp rax, 5",
          "  ; 等しければ done にジャンプ",
          "  je done",
          "; ジャンプ先のラベル",
          "done:",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; rdiを0にクリア",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "2つの値を比較する命令、レジスタ名、比較する値です。",
          null,
          "比較結果が等しい場合にジャンプする命令と、ジャンプ先のラベル名です。",
          null,
          "ジャンプ先のラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "XOR演算でレジスタをゼロクリアする命令と、対象のレジスタ名です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "5", "cmp", "je", "done", "60", "xor", "rdi", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "スタックとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 後入れ先出し\\n\\n**スタック** は、最後に入れたものを最初に取り出すデータ構造です。関数呼び出しで使います。"
        },
        {
          "title": "push と pop",
          "image": "/illustrations/3d/gear.png",
          "content": "# push で入れ、pop で取り出す\\n\\n`push` でスタックに入れ、`pop` で取り出します。\\n\\n**コード例：**\\n```perl\\npush rax  ; スタックに保存\\npop rbx   ; スタックから復元\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに42を格納\\n  mov rax, 42\\n  ; rax(42) をスタックに保存\\n  push rax\\n  ; スタックから rbx に取り出す\\n  pop rbx\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rbxの値を終了コードに設定\\n  mov rdi, rbx\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに42を格納\\n  ___ ___, ___\\n  ; rax(42) をスタックに保存\\n  ___ ___\\n  ; スタックから rbx に取り出す\\n  ___ ___\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; rbxの値を終了コードに設定\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに42を格納",
          "  mov rax, 42",
          "  ; rax(42) をスタックに保存",
          "  push rax",
          "  ; スタックから rbx に取り出す",
          "  pop rbx",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; rbxの値を終了コードに設定",
          "  mov rdi, rbx",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、格納する値です。",
          null,
          "値をスタックに保存する命令と、保存するレジスタ名です。",
          null,
          "スタックから値を取り出す命令と、取り出し先のレジスタ名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "値をレジスタに格納する命令、格納先のレジスタ、コピー元のレジスタです。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "42", "push", "pop", "rbx", "60", "rdi", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "xor 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# 排他的論理和\\n\\n**xor** は、排他的論理和を計算します。同じ値同士のxorは0になります。"
        },
        {
          "title": "ゼロクリアのテクニック",
          "image": "/illustrations/3d/gear.png",
          "content": "# xor A, A で 0 に\\n\\n`xor rax, rax` は rax を 0 にする効率的な方法です。\\n\\n**コード例：**\\n```asm\\nxor rax, rax  ; rax = 0\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdi を 0 にする\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; rdi を 0 にする\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; rdi を 0 にする",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "XOR演算でレジスタをゼロクリアする命令と、対象のレジスタ名です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "60", "xor", "rdi", "syscall"]
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
      "tutorialSlides": [
        {
          "title": "call 命令",
          "image": "/illustrations/3d/gear.png",
          "content": "# サブルーチン呼び出し\\n\\n**call** は、サブルーチン（関数）を呼び出します。戻りアドレスがスタックに保存されます。"
        },
        {
          "title": "call と ret",
          "image": "/illustrations/3d/gear.png",
          "content": "# ret で戻る\\n\\n`call` で呼び出し、`ret` で呼び出し元に戻ります。\\n\\n**コード例：**\\n```asm\\ncall func\\n...\\nfunc:\\n  ...\\n  ret\\n```"
        }
      ],
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; done サブルーチンを呼び出す\\n  call done\\n; サブルーチンのラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; done サブルーチンを呼び出す\\n  ___ ___\\n; サブルーチンのラベル\\n___:\\n  ; 60は終了コマンド\\n  ___ ___, ___\\n  ; rdiを0にクリア\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; done サブルーチンを呼び出す",
          "  call done",
          "; サブルーチンのラベル",
          "done:",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; rdiを0にクリア",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション宣言のキーワードと、コードを格納するセクション名です。",
          null,
          "シンボルを外部公開するディレクティブと、エントリーポイント名です。",
          null,
          null,
          "プログラムの開始地点を示すラベル名です。",
          null,
          "サブルーチンを呼び出す命令と、呼び出し先のラベル名です。",
          null,
          "サブルーチンのラベル名です。",
          null,
          "値をレジスタに格納する命令、レジスタ名、システムコール番号です。",
          null,
          "XOR演算でレジスタをゼロクリアする命令と、対象のレジスタ名です。",
          null,
          "OSにシステムコールを実行させる命令です。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "call", "done", "mov", "rax", "60", "xor", "rdi", "syscall"]
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