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
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに10を入れる\\n  ___ ___, ___\\n  ; raxを1減らす\\n  ___ ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "データ転送命令で rax に 10 を格納します。",
          null,
          "レジスタの値を1減少させる命令です。",
          null,
          null,
          "データ転送命令で rdi に rax の値をコピーします。",
          null,
          "データ転送命令で rax に 60 を格納します。",
          null,
          "syscall で実行します。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; rbxに3を入れる\\n  mov rbx, 3\\n  ; rbx(3)と4を掛けて結果をraxへ\\n  imul rax, rbx, 4\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; rbxに3を入れる\\n  ___ ___, ___\\n  ; rbx(3)と4を掛けて結果をraxへ\\n  ___ ___, ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "データ転送命令で rbx に 3 を格納します。",
          null,
          "符号付き乗算を行う命令です。",
          null,
          null,
          "データ転送命令で rdi に rax を代入します。",
          null,
          "データ転送命令で rax に 60 を代入します。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに42を入れる\\n  mov rax, 42\\n  ; スタックにraxを保存\\n  push rax\\n  ; スタックからrdiに取り出す\\n  pop rdi\\n\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに42を入れる\\n  ___ ___, ___\\n  ; スタックにraxを保存\\n  ___ ___\\n  ; スタックからrdiに取り出す\\n  ___ ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "データ転送命令で rax に 42 を格納します。",
          null,
          "値をスタックに保存する命令です。",
          null,
          "スタックから値を取り出す命令です。",
          null,
          null,
          "データ転送命令で rax に 60 をセットします。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; 数値99をスタックへ\\n  push 99\\n  ; スタックからrdiへ\\n  pop rdi\\n\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; 数値99をスタックへ\\n  ___ ___\\n  ; スタックからrdiへ\\n  ___ ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "push命令で 99 をスタックに保存します。",
          null,
          "pop命令でスタックの値を rdi に取り出します。",
          null,
          null,
          "データ転送命令で rax に 60 を格納します。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに0xFFをセット\\n  mov rax, 0xFF\\n  ; raxと0x0FのビットAND\\n  and rax, 0x0F\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに0xFFをセット\\n  ___ ___, ___\\n  ; raxと0x0FのビットAND\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "データ転送命令で rax に 0xFF を代入します。",
          null,
          "ビット単位の論理積を行う命令です。",
          null,
          null,
          "データ転送命令で rdi に rax を代入します。",
          null,
          "データ転送命令で rax に 60 を代入します。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに0x10をセット\\n  mov rax, 0x10\\n  ; raxと0x01のビットOR\\n  or rax, 0x01\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに0x10をセット\\n  ___ ___, ___\\n  ; raxと0x01のビットOR\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "データ転送命令で rax に 0x10 をセットします。",
          null,
          "ビット単位の論理和を行う命令です。",
          null,
          null,
          "データ転送命令で rdi に rax を代入します。",
          null,
          "データ転送命令で rax に 60 を代入します。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5をセット\\n  mov rax, 5\\n  ; raxを2ビット左シフト\\n  shl rax, 2\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに5をセット\\n  ___ ___, ___\\n  ; raxを2ビット左シフト\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "データ転送命令で rax に 5 を格納します。",
          null,
          "ビットを左にシフトする命令です。",
          null,
          null,
          "データ転送命令で rdi に rax を代入します。",
          null,
          "データ転送命令で rax に 60 を代入します。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに20をセット\\n  mov rax, 20\\n  ; raxを1ビット右シフト\\n  shr rax, 1\\n\\n  ; 結果をrdiへ\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  ; 実行\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに20をセット\\n  ___ ___, ___\\n  ; raxを1ビット右シフト\\n  ___ ___, ___\\n\\n  ; 結果をrdiへ\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; 実行\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "データ転送命令で rax に 20 を代入します。",
          null,
          "ビットを右にシフトする命令です。",
          null,
          null,
          "データ転送命令で rdi に rax をコピーします。",
          null,
          "データ転送命令で rax に 60 をセットします。",
          null,
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5をセット\\n  mov rax, 5\\n  ; ビット検査(rax AND 1)\\n  test rax, 1\\n  ; 0でなければ(奇数なら)ジャンプ\\n  jnz is_odd\\n  ; 0なら(偶数なら)rdi=0\\n  mov rdi, 0\\n  jmp done\\nis_odd:\\n  ; rdi=1\\n  mov rdi, 1\\ndone:\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに5をセット\\n  ___ ___, ___\\n  ; ビット検査(rax AND 1)\\n  ___ ___, ___\\n  ; 0でなければ(奇数なら)ジャンプ\\n  ___ ___\\n  ; 0なら(偶数なら)rdi=0\\n  ___ ___, ___\\n  ___ ___\\n___:\\n  ; rdi=1\\n  ___ ___, ___\\n___:\\n  ; 終了\\n  ___ ___, ___\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "ラベル _start: を定義します。",
          null,
          "データ転送命令で rax に 5 を格納します。",
          null,
          "ビット単位の検査を行う命令です。",
          null,
          "ゼロでない場合にジャンプする命令です。",
          null,
          "データ転送命令で rdi に 0 を代入します。",
          "無条件ジャンプ命令で done ラベルへジャンプします。",
          "ラベル is_odd: を定義します。",
          null,
          "データ転送命令で rdi に 1 を代入します。",
          "ラベル done: を定義します。",
          null,
          "データ転送命令で rax に 60 をセットします。",
          "OSにシステムコールを実行させる命令です。"
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに10をセット\\n  mov rax, 10\\n  ; 符号反転(-10になる)\\n  neg rax\\n\\n  ; rdiを0に\\n  xor rdi, rdi\\n  ; 終了\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに10をセット\\n  ___ ___, ___\\n  ; 符号反転(-10になる)\\n  ___ ___\\n\\n  ; rdiを0に\\n  ___ ___, ___\\n  ; 終了\\n  ___ ___, ___\\n  ___",
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
          "セクション宣言のディレクティブと .text を入力します。",
          "グローバル宣言のディレクティブと _start を入力します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "データ転送命令で rax に 10 をセットします。",
          null,
          "符号を反転させる命令です。",
          null,
          null,
          "排他的論理和で rdi を 0 にします。",
          null,
          "データ転送命令で rax に 60 をセットします。",
          "OSにシステムコールを実行させる命令です。"
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