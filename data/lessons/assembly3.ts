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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに10を入れる\\n  mov rax, 10\\n  ; raxを1減らす\\n  dec rax\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに10を入れる\\n  mov ___, ___\\n  ; raxを1減らす\\n  dec ___\\n\\n  ; 結果raxをrdiにコピー\\n  mov ___, ___\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "テキストセクション .text を宣言します。",
          "グローバルシンボル _start を宣言します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "rax に 10 を格納します。",
          null,
          "値を1減らす dec 命令と、対象の rax を入力します。",
          null,
          null,
          "rdi に rax の値をコピーします。",
          null,
          "rax に 60 を格納します。",
          null,
          "syscall で実行します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "10", "dec", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; rbxに3を入れる\\n  mov rbx, 3\\n  ; rbx(3)と4を掛けて結果をraxへ\\n  imul rax, rbx, 4\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; rbxに3を入れる\\n  mov ___, ___\\n  ; rbx(3)と4を掛けて結果をraxへ\\n  imul ___, ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  mov ___, ___\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション名 .text を入力します。",
          "グローバルシンボル _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "rbx に 3 を格納します。",
          null,
          "掛け算を行う imul 命令と、結果格納先の rax 、対象の rbx 、掛ける数 4 を入力します。",
          null,
          null,
          "rdi に rax を代入します。",
          null,
          "rax に 60 を代入します。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rbx", "3", "imul", "rax", "4", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに42を入れる\\n  mov rax, 42\\n  ; スタックにraxを保存\\n  push rax\\n  ; スタックからrdiに取り出す\\n  pop rdi\\n\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに42を入れる\\n  mov ___, ___\\n  ; スタックにraxを保存\\n  push ___\\n  ; スタックからrdiに取り出す\\n  pop ___\\n\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション名 .text を入力します。",
          "グローバルシンボル _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "rax に 42 を格納します。",
          null,
          "値をスタックへ保存する push 命令と、対象の rax を入力します。",
          null,
          "スタックから値を取り出す pop 命令と、対象の rdi を入力します。",
          null,
          null,
          "rax に 60 をセットします。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "42", "push", "pop", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; 数値99をスタックへ\\n  push 99\\n  ; スタックからrdiへ\\n  pop rdi\\n\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; 数値99をスタックへ\\n  push ___\\n  ; スタックからrdiへ\\n  pop ___\\n\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション .text を宣言します。",
          "グローバル _start を宣言します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "push命令で 99 をスタックに保存します。",
          null,
          "pop命令でスタックの値を rdi に取り出します。",
          null,
          null,
          "rax に 60 を格納します。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに0xFFをセット\\n  mov rax, 0xFF\\n  ; raxと0x0FのビットAND\\n  and rax, 0x0F\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに0xFFをセット\\n  mov ___, ___\\n  ; raxと0x0FのビットAND\\n  and ___, ___\\n\\n  ; 結果をrdiへ\\n  mov ___, ___\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション .text を宣言します。",
          "グローバル _start を宣言します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "rax に 0xFF を代入します。",
          null,
          "ビット論理積 and 命令と、対象の rax , 0x0F を入力します。",
          null,
          null,
          "rdi に rax を代入します。",
          null,
          "rax に 60 を代入します。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "0xFF", "and", "0x0F", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに0x10をセット\\n  mov rax, 0x10\\n  ; raxと0x01のビットOR\\n  or rax, 0x01\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに0x10をセット\\n  mov ___, ___\\n  ; raxと0x01のビットOR\\n  or ___, ___\\n\\n  ; 結果をrdiへ\\n  mov ___, ___\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション .text を宣言します。",
          "グローバル _start を宣言します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "rax に 0x10 をセットします。",
          null,
          "ビット論理和 or 命令と、対象の rax , 0x01 を入力します。",
          null,
          null,
          "rdi に rax を代入します。",
          null,
          "rax に 60 を代入します。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "0x10", "or", "0x01", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5をセット\\n  mov rax, 5\\n  ; raxを2ビット左シフト\\n  shl rax, 2\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに5をセット\\n  mov ___, ___\\n  ; raxを2ビット左シフト\\n  shl ___, ___\\n\\n  ; 結果をrdiへ\\n  mov ___, ___\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション名 .text を入力します。",
          "シンボル名 _start を入力します。",
          null,
          "ラベル名 _start: を入力します。",
          null,
          "rax に 5 を格納します。",
          null,
          "左シフト shl 命令と、対象の rax , 2 を入力します。",
          null,
          null,
          "rdi に rax を代入します。",
          null,
          "rax に 60 を代入します。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "5", "shl", "2", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに20をセット\\n  mov rax, 20\\n  ; raxを1ビット右シフト\\n  shr rax, 1\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに20をセット\\n  mov ___, ___\\n  ; raxを1ビット右シフト\\n  shr ___, ___\\n\\n  ; 結果をrdiへ\\n  mov ___, ___\\n  ; 終了処理\\n  mov ___, ___\\n  ; 実行\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "セクション .text を入力します。",
          "シンボル _start を入力します。",
          null,
          "開始ラベル _start: を入力します。",
          null,
          "rax に 20 を代入します。",
          null,
          "右シフト shr 命令と、対象の rax , 1 を入力します。",
          null,
          null,
          "rdi に rax をコピーします。",
          null,
          "rax に 60 をセットします。",
          null,
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "20", "shr", "1", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5をセット\\n  mov rax, 5\\n  ; ビット検査(rax AND 1)\\n  test rax, 1\\n  ; 0でなければ(奇数なら)ジャンプ\\n  jnz is_odd\\n  ; 0なら(偶数なら)rdi=0\\n  mov rdi, 0\\n  jmp done\\nis_odd:\\n  ; rdi=1\\n  mov rdi, 1\\ndone:\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに5をセット\\n  mov ___, ___\\n  ; ビット検査(rax AND 1)\\n  test ___, ___\\n  ; 0でなければ(奇数なら)ジャンプ\\n  jnz ___\\n  ; 0なら(偶数なら)rdi=0\\n  mov ___, ___\\n  jmp ___\\n___:\\n  ; rdi=1\\n  mov ___, ___\\n___:\\n  ; 終了\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; raxに5をセット",
          "  mov rax, 5",
          "  ; ビット検査(rax AND 1)",
          "  test rax, 1",
          "  ; 0でなければ(奇数なら)ジャンプ",
          "  jnz is_odd",
          "  ; 0なら(偶数なら)rdi=0",
          "  mov rdi, 0",
          "  jmp done",
          "is_odd:",
          "  ; rdi=1",
          "  mov rdi, 1",
          "done:",
          "  ; 終了",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション .text を宣言します。",
          "グローバル _start を宣言します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "rax に 5 を格納します。",
          null,
          "ビット検査 test 命令と、対象の rax , 1 を入力します。",
          null,
          "0でなければジャンプする jnz 命令と、飛び先 is_odd を入力します。",
          null,
          "rdi に 0 を代入します。",
          "done ラベルへジャンプします。",
          "ラベル is_odd: を定義します。",
          null,
          "rdi に 1 を代入します。",
          "ラベル done: を定義します。",
          null,
          "rax に 60 をセットします。",
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "5", "test", "1", "is_odd", "rdi", "0", "done", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに10をセット\\n  mov rax, 10\\n  ; 符号反転(-10になる)\\n  neg rax\\n\\n  ; rdiを0に\\n  xor rdi, rdi\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\nsection .___\\n  global ___\\n\\n___:\\n  ; raxに10をセット\\n  mov ___, ___\\n  ; 符号反転(-10になる)\\n  neg ___\\n\\n  ; rdiを0に\\n  xor ___, ___\\n  ; 終了\\n  mov ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
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
          "  syscall"
        ],
      "lineHints": [
          null,
          "セクション .text を入力します。",
          "グローバル _start を入力します。",
          null,
          "開始ラベル _start: を入力します。",
          null,
          "rax に 10 をセットします。",
          null,
          "符号反転 neg 命令と、対象の rax を入力します。",
          null,
          null,
          "rdi を 0 にします。",
          null,
          "rax に 60 をセットします。",
          "syscall を入力します。"
        ],
        "candidates": {
          "others": ["text", "_start", "rax", "10", "neg", "rdi", "60", "syscall"]
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