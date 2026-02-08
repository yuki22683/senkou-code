export const assemblyData = {
  "language": "assembly",
  "lessonId": "assembly-1",
  "lessonTitle": "Assembly (アセンブリ) に挑戦！",
  "lessonDescription": "コンピュータの「脳みそ」に直接、短い暗号で指示を出す「アセンブリ言語」のきほんを学びましょう。コンピュータがどうやって動いているのか、その秘密がわかります。",
  "lessonDifficulty": "medium",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出してみましょう",
      "correctCode": "; データセクションを宣言\\nsection .data\\n  ; 文字列msgを定義\\n  msg db \"こんにちは\", 0xA\\n\\n; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; 1は「書く」という命令\\n  mov rax, 1\\n  ; 1は標準出力\\n  mov rdi, 1\\n  ; msgで表示する文字を指定\\n  mov rsi, msg\\n  ; 文字のバイト数を指定\\n  mov rdx, 16\\n  ; システムコールを実行\\n  syscall\\n\\n  ; 60は「終了」という命令\\n  mov rax, 60\\n  ; エラーコード0\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; データセクションを宣言\\nsection .___\\n  ; 文字列msgを定義\\n  ___ db \"___\", 0xA\\n___\\n; テキストセクションを宣言\\nsection .___\\n  ; エントリーポイントを公開\\n  global ___\\n___\\n; プログラムの開始地点\\n___:\\n  ; 1は「書く」という命令\\n  mov ___, ___\\n  ; 1は標準出力\\n  mov ___, ___\\n  ; msgで表示する文字を指定\\n  mov ___, ___\\n  ; 文字のバイト数を指定\\n  mov ___, ___\\n  ; システムコールを実行\\n  ___\\n___\\n  ; 60は「終了」という命令\\n  mov ___, ___\\n  ; エラーコード0\\n  xor ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; データセクションを宣言",
          "section .data",
          "  ; 文字列msgを定義",
          "  msg db \"こんにちは\", 0xA",
          "",
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; 1は「書く」という命令",
          "  mov rax, 1",
          "  ; 1は標準出力",
          "  mov rdi, 1",
          "  ; msgで表示する文字を指定",
          "  mov rsi, msg",
          "  ; 文字のバイト数を指定",
          "  mov rdx, 16",
          "  ; システムコールを実行",
          "  syscall",
          "",
          "  ; 60は「終了」という命令",
          "  mov rax, 60",
          "  ; エラーコード0",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "ここはおまじない（データの場所）です。",
          null,
          "表示したい文字を準備します。",
          null,
          null,
          "ここもおまじない（スタートの目印）です。",
          null,
          "ここからスタートします！",
          null,
          null,
          "場所「1（画面）」を机に置きます。",
          null,
          "表示する文字の名前 `msg` を入力しましょう。",
          null,
          "文字のバイト数（16バイト分）を机に置きます。",
          null,
          "ボスに実行を頼みます！",
          null,
          "プログラムを終わる準備です。",
          null,
          "エラーがないことを報告します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "msg"
          ],
          "others": [".data", "Hello", ".text", "_start", "1", "16", "syscall", "60", "rdi", "data", "text", "rax", "rsi", "rdx", "こんにちは", "data", "", "text", "_start", "1", "msg", "16", "syscall", "60", "rdi"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "違うメッセージを表示しましょう",
      "correctCode": "section .data\\n  ; 表示したい文字列を定義\\n  msg db \"Hi\", 0xA\\n\\nsection .text\\n  global _start\\n\\n_start:\\n  mov rax, 1\\n  mov rdi, 1\\n  mov rsi, msg\\n  ; Hiは2文字+改行で3バイト\\n  mov rdx, 3\\n  syscall\\n\\n  mov rax, 60\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "section .___\\n  ; 表示したい文字列を定義\\n  ___ db \"___\", 0xA\\n___\\nsection .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  mov ___, ___\\n  mov ___, ___\\n  ; Hiは2文字+改行で3バイト\\n  mov ___, ___\\n  ___\\n___\\n  mov ___, ___\\n  xor ___, ___\\n  ___",
      "correctLines": [
          "section .data",
          "  ; 表示したい文字列を定義",
          "  msg db \"Hi\", 0xA",
          "",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 1",
          "  mov rdi, 1",
          "  mov rsi, msg",
          "  ; Hiは2文字+改行で3バイト",
          "  mov rdx, 3",
          "  syscall",
          "",
          "  mov rax, 60",
          "  xor rdi, rdi",
          "  syscall"
        ],
      "lineHints": [
          "表示したい文字を入力しましょう。",
          null,
          "文字の長さを入力しましょう。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "strings": [
            "Hi",
            "Hello"
          ],
          "numbers": [
            "3",
            "6",
            "2"
          ],
          "others": ["data", "text", "_start", "rax", "1", "rdi", "rsi", "msg", "rdx", "syscall", "60", "data", "", "text", "_start", "1", "msg", "3", "syscall", "60", "rdi"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hi\\n"
          }
        ]
      },
    {
      "title": "終了コードを返しましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  ; 終了システムコール\\n  mov rax, 60\\n  ; 終了コード0\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  ; 終了システムコール\\n  mov ___, ___\\n  ; 終了コード0\\n  xor ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; 終了システムコール",
          "  mov rax, 60",
          "  ; 終了コード0",
          "  xor rdi, rdi",
          "  syscall"
        ],
      "lineHints": [
          "終了の命令番号を入力しましょう。",
          "レジスタを0にする命令を入力しましょう。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "60",
            "1",
            "0"
          ],
          "instructions": [
            "xor",
            "mov",
            "add"
          ],
          "others": ["text", "_start", "rax", "rdi", "syscall", "text", "_start", "", "60", "rdi"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "数字を足し算しましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  ; 10を入れる\\n  mov rax, 10\\n  ; 5を足す\\n  add rax, 5\\n\\n  ; 結果を終了コードに\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  ; 10を入れる\\n  mov ___, ___\\n  ; 5を足す\\n  add rax, ___\\n___\\n  ; 結果を終了コードに\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; 10を入れる",
          "  mov rax, 10",
          "  ; 5を足す",
          "  add rax, 5",
          "",
          "  ; 結果を終了コードに",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "足し算の命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "add",
            "sub",
            "mul",
            "mov"
          ],
          "others": ["text", "_start", "rax", "10", "5", "rdi", "60", "syscall", "text", "_start", "", "10", "5", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "数字を引き算しましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  ; 20を入れる\\n  mov rax, 20\\n  ; 8を引く\\n  sub rax, 8\\n\\n  ; 結果を終了コードに\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  ; 20を入れる\\n  mov ___, ___\\n  ; 8を引く\\n  sub rax, ___\\n___\\n  ; 結果を終了コードに\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; 20を入れる",
          "  mov rax, 20",
          "  ; 8を引く",
          "  sub rax, 8",
          "",
          "  ; 結果を終了コードに",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "引き算の命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "sub",
            "add",
            "mul",
            "div"
          ],
          "others": ["text", "_start", "rax", "20", "8", "rdi", "60", "syscall", "text", "_start", "", "20", "8", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "レジスタ間でコピーしましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  ; 25を入れる\\n  mov rax, 25\\n  ; raxをrdiにコピー\\n  mov rdi, rax\\n\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  ; 25を入れる\\n  mov ___, ___\\n  ; raxをrdiにコピー\\n  mov ___, ___\\n___\\n  ; 終了\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; 25を入れる",
          "  mov rax, 25",
          "  ; raxをrdiにコピー",
          "  mov rdi, rax",
          "",
          "  ; 終了",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "コピー先のレジスタ名を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "registers": [
            "rdi",
            "rsi",
            "rdx",
            "rbx"
          ],
          "others": ["text", "_start", "rax", "25", "60", "syscall", "text", "_start", "", "25", "rax", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "値を比較しましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 5\\n  ; raxと10を比較\\n  cmp rax, 10\\n\\n  ; 終了\\n  mov rax, 60\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; raxと10を比較\\n  cmp ___, ___\\n___\\n  ; 終了\\n  mov ___, ___\\n  xor ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 5",
          "  ; raxと10を比較",
          "  cmp rax, 10",
          "",
          "  ; 終了",
          "  mov rax, 60",
          "  xor rdi, rdi",
          "  syscall"
        ],
      "lineHints": [
          "比較の命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "cmp",
            "add",
            "sub",
            "test"
          ],
          "others": ["text", "_start", "rax", "5", "10", "60", "rdi", "syscall", "text", "_start", "", "5", "10", "60", "rdi"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "条件ジャンプを使いましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 5\\n  cmp rax, 5\\n  ; 等しければジャンプ\\n  je equal\\n  mov rdi, 1\\n  jmp done\\n\\nequal:\\n  mov rdi, 0\\n\\ndone:\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  cmp ___, ___\\n  ; 等しければジャンプ\\n  je ___\\n  mov ___, ___\\n  jmp ___\\n___\\n___:\\n  mov ___, ___\\n___\\n___:\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 5",
          "  cmp rax, 5",
          "  ; 等しければジャンプ",
          "  je equal",
          "  mov rdi, 1",
          "  jmp done",
          "",
          "equal:",
          "  mov rdi, 0",
          "",
          "done:",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "等しければジャンプする命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "je",
            "jne",
            "jmp",
            "jg",
            "jl"
          ],
          "others": ["text", "_start", "rax", "5", "equal", "rdi", "1", "done", "0", "60", "syscall", "text", "_start", "", "5", "equal", "1", "done", "0", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "ラベルにジャンプしましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  ; doneに直接ジャンプ\\n  jmp done\\n\\nskip:\\n  mov rdi, 1\\n\\ndone:\\n  xor rdi, rdi\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  ; doneに直接ジャンプ\\n  jmp ___\\n___\\n___:\\n  mov ___, ___\\n___\\n___:\\n  xor ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; doneに直接ジャンプ",
          "  jmp done",
          "",
          "skip:",
          "  mov rdi, 1",
          "",
          "done:",
          "  xor rdi, rdi",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "無条件ジャンプの命令を入力しましょう。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "instructions": [
            "jmp",
            "je",
            "jne",
            "call"
          ],
          "others": ["text", "_start", "done", "skip", "rdi", "1", "rax", "60", "syscall", "text", "_start", "", "done", "1", "rdi", "60"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": ""
          }
        ]
      },
    {
      "title": "値を増やしましょう",
      "correctCode": "section .text\\n  global _start\\n\\n_start:\\n  mov rax, 9\\n  ; 1増やす\\n  inc rax\\n\\n  mov rdi, rax\\n  mov rax, 60\\n  syscall",
      "holeyCode": "section .___\\n  global ___\\n___\\n___:\\n  mov ___, ___\\n  ; 1増やす\\n  inc ___\\n___\\n  mov ___, ___\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 9",
          "  ; 1増やす",
          "  inc rax",
          "",
          "  mov rdi, rax",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          "値を1増やす命令を入力しましょう。",
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
            "inc",
            "dec",
            "add",
            "sub"
          ],
          "others": ["text", "_start", "rax", "9", "rdi", "60", "syscall", "text", "_start", "", "9", "rax", "60"]
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
