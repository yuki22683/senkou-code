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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; movで値をレジスタに格納\\n  mov rax, 60\\n  ; 終了コード0を設定\\n  mov rdi, 0\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; movで値をレジスタに格納\\n  mov ___, ___\\n  ; 終了コード0を設定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
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
          "mov で値をレジスタに格納します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "mov"
          ],
          "others": [".text", "_start", "rdi", "syscall", "text", "rax", "60", "0", "text", "_start", "60", "0"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; raxに10を格納\\n  mov rax, 10\\n  ; addで 10 が入った rax に 5 を足す\\n  add rax, 5\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; raxに10を格納\\n  mov ___, ___\\n  ; addで 10 が入った rax に 5 を足す\\n  add rax, ___\\n  ; 結果をrdiにコピー\\n  mov ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに10を格納",
          "  mov rax, 10",
          "  ; addで 10 が入った rax に 5 を足す",
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
          "add で足し算します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "add"
          ],
          "others": [".text", "_start", "10", "rdi", "60", "syscall", "text", "rax", "5", "text", "_start", "10", "5", "rax", "60"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; raxに20を格納\\n  mov rax, 20\\n  ; subで 20 が入った rax から 5 を引く\\n  sub rax, 5\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; raxに20を格納\\n  mov ___, ___\\n  ; subで 20 が入った rax から 5 を引く\\n  sub rax, ___\\n  ; 結果をrdiにコピー\\n  mov ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに20を格納",
          "  mov rax, 20",
          "  ; subで 20 が入った rax から 5 を引く",
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
          "sub で引き算します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "sub"
          ],
          "others": [".text", "_start", "20", "rdi", "60", "syscall", "text", "rax", "5", "text", "_start", "20", "5", "rax", "60"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; raxに4を格納\\n  mov rax, 4\\n  ; rbxに3を格納\\n  mov rbx, 3\\n  ; mulで rax(4) と rbx(3) を掛ける\\n  mul rbx\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; raxに4を格納\\n  mov ___, ___\\n  ; rbxに3を格納\\n  mov ___, ___\\n  ; mulで rax(4) と rbx(3) を掛ける\\n  mul ___\\n  ; 結果をrdiにコピー\\n  mov ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに4を格納",
          "  mov rax, 4",
          "  ; rbxに3を格納",
          "  mov rbx, 3",
          "  ; mulで rax(4) と rbx(3) を掛ける",
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
          "mul で掛け算します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "mul"
          ],
          "others": [".text", "_start", "4", "3", "rdi", "60", "syscall", "text", "rax", "rbx", "text", "_start", "4", "3", "rbx", "rax", "60"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; raxに5を格納\\n  mov rax, 5\\n  ; cmpで rax(5) と 5 を比較\\n  cmp rax, 5\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; 終了コード0を設定\\n  mov rdi, 0\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; raxに5を格納\\n  mov ___, ___\\n  ; cmpで rax(5) と 5 を比較\\n  cmp ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; 終了コード0を設定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに5を格納",
          "  mov rax, 5",
          "  ; cmpで rax(5) と 5 を比較",
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
          "cmp で比較します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "cmp"
          ],
          "others": [".text", "_start", "5", "60", "0", "syscall", "text", "rax", "rdi", "text", "_start", "5", "60", "0"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; jmpで done ラベルにジャンプ\\n  jmp done\\n; ジャンプ先のラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; jmpで done ラベルにジャンプ\\n  jmp ___\\n; ジャンプ先のラベル\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdiを0にクリア\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; jmpで done ラベルにジャンプ",
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
          "jmp でジャンプします。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "jmp"
          ],
          "others": [".text", "_start", "done", "60", "rdi", "syscall", "text", "rax", "text", "_start", "done", "60", "rdi"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; raxに5を格納\\n  mov rax, 5\\n  ; raxと5を比較\\n  cmp rax, 5\\n  ; jeで等しければ done にジャンプ\\n  je done\\n; ジャンプ先のラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; raxに5を格納\\n  mov ___, ___\\n  ; raxと5を比較\\n  cmp ___, ___\\n  ; jeで等しければ done にジャンプ\\n  je ___\\n; ジャンプ先のラベル\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdiを0にクリア\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに5を格納",
          "  mov rax, 5",
          "  ; raxと5を比較",
          "  cmp rax, 5",
          "  ; jeで等しければ done にジャンプ",
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
          "je で等しければジャンプします。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "je"
          ],
          "others": [".text", "_start", "5", "done", "60", "rdi", "syscall", "text", "rax", "text", "_start", "5", "done", "60", "rdi"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; raxに42を格納\\n  mov rax, 42\\n  ; pushで rax(42) をスタックに保存\\n  push rax\\n  ; popでスタックから rbx に取り出す\\n  pop rbx\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rbxの値を終了コードに設定\\n  mov rdi, rbx\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; raxに42を格納\\n  mov ___, ___\\n  ; pushで rax(42) をスタックに保存\\n  push ___\\n  ; popでスタックから rbx に取り出す\\n  pop ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rbxの値を終了コードに設定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; raxに42を格納",
          "  mov rax, 42",
          "  ; pushで rax(42) をスタックに保存",
          "  push rax",
          "  ; popでスタックから rbx に取り出す",
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
          "push でスタックに保存します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "push"
          ],
          "others": [".text", "_start", "42", "rbx", "60", "syscall", "text", "rax", "rdi", "text", "_start", "42", "rax", "rbx", "60"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; xorで rdi を 0 にする\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; xorで rdi を 0 にする\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; 60は終了コマンド",
          "  mov rax, 60",
          "  ; xorで rdi を 0 にする",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "xor で rdi を 0 にします。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "xor"
          ],
          "others": [".text", "_start", "60", "syscall", "text", "rax", "rdi", "text", "_start", "60", "rdi"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n; プログラムの開始地点\\n_start:\\n  ; callで done サブルーチンを呼び出す\\n  call done\\n; サブルーチンのラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n; プログラムの開始地点\\n___:\\n  ; callで done サブルーチンを呼び出す\\n  call ___\\n; サブルーチンのラベル\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdiを0にクリア\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "; プログラムの開始地点",
          "_start:",
          "  ; callで done サブルーチンを呼び出す",
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
          "call でサブルーチンを呼び出します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "call"
          ],
          "others": [".text", "_start", "done", "60", "rdi", "syscall", "text", "rax", "text", "_start", "done", "60", "rdi"]
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
