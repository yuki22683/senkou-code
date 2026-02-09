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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; movで値をレジスタに格納\\n  mov rax, 60\\n  ; 終了コード0を設定\\n  mov rdi, 0\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; movで値をレジスタに格納\\n  mov ___, ___\\n  ; 終了コード0を設定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi に 0 を格納します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "60", "rdi", "0", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに10を格納\\n  mov rax, 10\\n  ; 10 が入った rax に 5 を足す\\n  add rax, 5\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに10を格納\\n  mov ___, ___\\n  ; 10 が入った rax に 5 を足す\\n  add ___, ___\\n  ; 結果をrdiにコピー\\n  mov ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 10 を格納します。",
          null,
          "rax に 5 を加算する add 命令と、レジスタ rax 、数値 5 を入力します。",
          null,
          "rdi に rax の値をコピーします。",
          null,
          "rax に 60 を格納します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "10", "add", "5", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに20を格納\\n  mov rax, 20\\n  ; 20 が入った rax から 5 を引く\\n  sub rax, 5\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに20を格納\\n  mov ___, ___\\n  ; 20 が入った rax から 5 を引く\\n  sub ___, ___\\n  ; 結果をrdiにコピー\\n  mov ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 20 を格納します。",
          null,
          "rax から 5 を減算する sub 命令と、レジスタ rax 、数値 5 を入力します。",
          null,
          "rdi に rax の値をコピーします。",
          null,
          "rax に 60 を格納します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "20", "sub", "5", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに4を格納\\n  mov rax, 4\\n  ; rbxに3を格納\\n  mov rbx, 3\\n  ; rax(4) と rbx(3) を掛ける\\n  mul rbx\\n  ; 結果をrdiにコピー\\n  mov rdi, rax\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに4を格納\\n  mov ___, ___\\n  ; rbxに3を格納\\n  mov ___, ___\\n  ; rax(4) と rbx(3) を掛ける\\n  mul ___\\n  ; 結果をrdiにコピー\\n  mov ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 4 を格納します。",
          null,
          "rbx に 3 を格納します。",
          null,
          "rax に rbx の値を掛ける mul 命令と、レジスタ rbx を入力します。",
          null,
          "rdi に rax の値をコピーします。",
          null,
          "rax に 60 を格納します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "4", "rbx", "3", "mul", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに5を格納\\n  mov rax, 5\\n  ; rax(5) と 5 を比較\\n  cmp rax, 5\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; 終了コード0を設定\\n  mov rdi, 0\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに5を格納\\n  mov ___, ___\\n  ; rax(5) と 5 を比較\\n  cmp ___, ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; 終了コード0を設定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 5 を格納します。",
          null,
          "rax と 5 を比較する cmp 命令と、比較対象の rax , 5 を入力します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi に 0 を格納します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "5", "cmp", "60", "rdi", "0", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; done ラベルにジャンプ\\n  jmp done\\n; ジャンプ先のラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; done ラベルにジャンプ\\n  jmp ___\\n; ジャンプ先のラベル\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdiを0にクリア\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "done ラベルへジャンプする jmp 命令と、ラベル名 done を入力します。",
          null,
          "ラベル名 done: を入力します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi を 0 にクリアする xor 命令と、対象の rdi を入力します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "jmp", "done", "rax", "60", "xor", "rdi", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに5を格納\\n  mov rax, 5\\n  ; raxと5を比較\\n  cmp rax, 5\\n  ; 等しければ done にジャンプ\\n  je done\\n; ジャンプ先のラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに5を格納\\n  mov ___, ___\\n  ; raxと5を比較\\n  cmp ___, ___\\n  ; 等しければ done にジャンプ\\n  je ___\\n; ジャンプ先のラベル\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdiを0にクリア\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 5 を格納します。",
          null,
          "rax と 5 を比較します。",
          null,
          "等しい場合に done ラベルへジャンプする je 命令と、ラベル名 done を入力します。",
          null,
          "ラベル名 done: を入力します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi を 0 にクリアします。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "5", "je", "done", "60", "rdi", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; raxに42を格納\\n  mov rax, 42\\n  ; rax(42) をスタックに保存\\n  push rax\\n  ; スタックから rbx に取り出す\\n  pop rbx\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rbxの値を終了コードに設定\\n  mov rdi, rbx\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; raxに42を格納\\n  mov ___, ___\\n  ; rax(42) をスタックに保存\\n  push ___\\n  ; スタックから rbx に取り出す\\n  pop ___\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rbxの値を終了コードに設定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 42 を格納します。",
          null,
          "値をスタックへ保存する push 命令と、対象の rax を入力します。",
          null,
          "スタックから値を取り出す pop 命令と、格納先の rbx を入力します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi に rbx の値をコピーします。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "42", "push", "pop", "rbx", "60", "rdi", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdi を 0 にする\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdi を 0 にする\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi を 0 にクリアする xor 命令と、対象の rdi を入力します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "60", "xor", "rdi", "syscall"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; done サブルーチンを呼び出す\\n  call done\\n; サブルーチンのラベル\\ndone:\\n  ; 60は終了コマンド\\n  mov rax, 60\\n  ; rdiを0にクリア\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n\\n; プログラムの開始地点\\n___:\\n  ; done サブルーチンを呼び出す\\n  call ___\\n; サブルーチンのラベル\\n___:\\n  ; 60は終了コマンド\\n  mov ___, ___\\n  ; rdiを0にクリア\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "テキストセクション .text を宣言します。",
          null,
          "グローバルシンボル _start を宣言します。",
          null,
          null,
          "開始ラベル _start: を定義します。",
          null,
          "サブルーチンを呼び出す call 命令と、ラベル名 done を入力します。",
          null,
          "ラベル名 done: を入力します。",
          null,
          "rax に 60 を格納します。",
          null,
          "rdi を 0 にクリアします。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "call", "done", "rax", "60", "rdi", "syscall"]
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