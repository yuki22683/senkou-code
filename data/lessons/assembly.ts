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
      "holeyCode": "; データセクションを宣言\\n___ .___\\n  ; 文字列msgを定義\\n  ___ ___ \"___\", ___\\n\\n; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; 1は「書く」という命令\\n  ___ ___, ___\\n  ; 1は標準出力\\n  ___ ___, ___\\n  ; msgで表示する文字を指定\\n  ___ ___, ___\\n  ; 文字のバイト数を指定\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___\\n\\n  ; 60は「終了」という命令\\n  ___ ___, ___\\n  ; エラーコード0\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
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
          "section でデータセクションを宣言します。",
          null,
          "db ディレクティブで msg という名前の文字列を定義します。0xA は改行コードです。",
          null,
          null,
          "section でコードセクションを宣言します。",
          null,
          "global で _start を外部公開します。",
          null,
          null,
          "プログラムの開始ラベル _start: を定義します。",
          null,
          "mov で rax に「書き込み」命令の番号 1 をセットします。",
          null,
          "mov で rdi に「標準出力」を示す番号 1 をセットします。",
          null,
          "mov で rsi に、表示する文字列のアドレス msg をセットします。",
          null,
          "mov で rdx に、書き込むバイト数 16 をセットします。",
          null,
          "syscall でシステムコールを実行します。",
          null,
          null,
          "mov で rax に「終了」命令の番号 60 をセットします。",
          null,
          "xor 命令で rdi を 0 にクリアします。",
          null,
          "syscall でプログラムを終了します。"
        ],
        "candidates": {
          "variables": [
            "msg"
          ],
          "others": ["section", "data", "db", "こんにちは", "0xA", "text", "global", "_start", "mov", "rax", "1", "rdi", "rsi", "rdx", "16", "syscall", "60", "xor"]
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
      "correctCode": "; データセクションを宣言\\nsection .data\\n  ; 表示したい文字列を定義\\n  msg db \"Hi\", 0xA\\n\\n; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; 1は書き込み命令\\n  mov rax, 1\\n  ; 1は標準出力\\n  mov rdi, 1\\n  ; msgを指定\\n  mov rsi, msg\\n  ; Hiは2文字+改行で3バイト\\n  mov rdx, 3\\n  ; システムコールを実行\\n  syscall\\n\\n  ; 終了処理\\n  mov rax, 60\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "; データセクションを宣言\\n___ .___\\n  ; 表示したい文字列を定義\\n  ___ ___ \"___\", ___\\n\\n; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; 1は書き込み命令\\n  ___ ___, ___\\n  ; 1は標準出力\\n  ___ ___, ___\\n  ; msgを指定\\n  ___ ___, ___\\n  ; Hiは2文字+改行で3バイト\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; データセクションを宣言",
          "section .data",
          "  ; 表示したい文字列を定義",
          "  msg db \"Hi\", 0xA",
          "",
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; 1は書き込み命令",
          "  mov rax, 1",
          "  ; 1は標準出力",
          "  mov rdi, 1",
          "  ; msgを指定",
          "  mov rsi, msg",
          "  ; Hiは2文字+改行で3バイト",
          "  mov rdx, 3",
          "  ; システムコールを実行",
          "  syscall",
          "",
          "  ; 終了処理",
          "  mov rax, 60",
          "  xor rdi, rdi",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でデータセクションを宣言します。",
          null,
          "db ディレクティブで msg という名前の文字列を定義します。0xA は改行コードです。",
          null,
          null,
          "section でテキストセクションを宣言します。",
          null,
          "global で _start を外部公開します。",
          null,
          null,
          "ラベル _start: を定義します。",
          null,
          "mov で rax に命令番号 1 を代入します。",
          null,
          "mov で rdi に出力先番号 1 を代入します。",
          null,
          "mov で rsi に文字列のアドレス msg を代入します。",
          null,
          "mov で rdx にバイト数 3 を指定します。",
          null,
          "syscall を呼び出します。",
          null,
          null,
          "mov で rax に終了番号 60 をセットします。",
          "xor で rdi を 0 にします。",
          "syscall を呼び出します。"
        ],
        "candidates": {
          "strings": [
            "Hi"
          ],
          "others": ["section", "data", "msg", "db", "0xA", "text", "global", "_start", "mov", "rax", "1", "rdi", "rsi", "rdx", "3", "syscall", "60", "xor"]
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
      "correctCode": "; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; 終了システムコール60\\n  mov rax, 60\\n  ; 終了コード0をセット\\n  xor rdi, rdi\\n  ; システムコールを実行\\n  syscall",
      "holeyCode": "; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; 終了システムコール60\\n  ___ ___, ___\\n  ; 終了コード0をセット\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___",
      "correctLines": [
          "; テキストセクションを宣言",
          "section .text",
          "  ; エントリーポイントを公開",
          "  global _start",
          "",
          "; プログラムの開始地点",
          "_start:",
          "  ; 終了システムコール60",
          "  mov rax, 60",
          "  ; 終了コード0をセット",
          "  xor rdi, rdi",
          "  ; システムコールを実行",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でコードセクションを宣言します。",
          null,
          "global で _start を外部公開します。",
          null,
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "mov で rax に終了番号 60 を代入します。",
          null,
          "xor でレジスタをゼロクリアします。",
          null,
          "syscall でシステムコールを実行します。"
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
      "title": "数字を足し算しましょう",
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに10を入れる\\n  mov rax, 10\\n  ; raxに5を足す\\n  add rax, 5\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに10を入れる\\n  ___ ___, ___\\n  ; raxに5を足す\\n  ___ ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; raxに10を入れる",
          "  mov rax, 10",
          "  ; raxに5を足す",
          "  add rax, 5",
          "",
          "  ; 結果raxをrdiにコピー",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "mov で rax に 10 を代入します。",
          null,
          "add で rax に 5 を加算します。",
          null,
          null,
          "mov で rdi に rax の値をコピーします。",
          null,
          "mov で rax に 60 を代入します。",
          "syscall でシステムコールを実行します。"
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
      "title": "数字を引き算しましょう",
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに20を入れる\\n  mov rax, 20\\n  ; raxから8を引く\\n  sub rax, 8\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに20を入れる\\n  ___ ___, ___\\n  ; raxから8を引く\\n  ___ ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; raxに20を入れる",
          "  mov rax, 20",
          "  ; raxから8を引く",
          "  sub rax, 8",
          "",
          "  ; 結果raxをrdiにコピー",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "mov で rax に 20 を代入します。",
          null,
          "sub で rax から 8 を減算します。",
          null,
          null,
          "mov で rdi に rax の値をコピーします。",
          null,
          "mov で rax に 60 を代入します。",
          "syscall でシステムコールを実行します。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "20", "sub", "8", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに25を入れる\\n  mov rax, 25\\n  ; raxをrdiにコピー\\n  mov rdi, rax\\n\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに25を入れる\\n  ___ ___, ___\\n  ; raxをrdiにコピー\\n  ___ ___, ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; raxに25を入れる",
          "  mov rax, 25",
          "  ; raxをrdiにコピー",
          "  mov rdi, rax",
          "",
          "  ; 終了処理",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "mov で rax に 25 を代入します。",
          null,
          "mov で rdi に rax を代入します。",
          null,
          null,
          "mov で rax に 60 を代入します。",
          "syscall でシステムコールを実行します。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "25", "rdi", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5を入れる\\n  mov rax, 5\\n  ; raxと10を比較\\n  cmp rax, 10\\n\\n  ; 終了処理\\n  mov rax, 60\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに5を入れる\\n  ___ ___, ___\\n  ; raxと10を比較\\n  ___ ___, ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; raxに5を入れる",
          "  mov rax, 5",
          "  ; raxと10を比較",
          "  cmp rax, 10",
          "",
          "  ; 終了処理",
          "  mov rax, 60",
          "  xor rdi, rdi",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "mov で rax に 5 を代入します。",
          null,
          "cmp で rax と 10 を比較します。",
          null,
          null,
          "mov で rax に 60 を代入します。",
          "xor で rdi を 0 にします。",
          "syscall でシステムコールを実行します。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "5", "cmp", "10", "60", "xor", "rdi", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  mov rax, 5\\n  cmp rax, 5\\n  ; 等しければequalへジャンプ\\n  je equal\\n  mov rdi, 1\\n  jmp done\\n\\nequal:\\n  mov rdi, 0\\n\\ndone:\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ___ ___, ___\\n  ___ ___, ___\\n  ; 等しければequalへジャンプ\\n  ___ ___\\n  ___ ___, ___\\n  ___ ___\\n\\n___:\\n  ___ ___, ___\\n\\n___:\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  mov rax, 5",
          "  cmp rax, 5",
          "  ; 等しければequalへジャンプ",
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
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          "mov で rax に 5 を代入します。",
          "cmp で rax と 5 を比較します。",
          null,
          "je（jump if equal）で equal ラベルへジャンプします。",
          "mov で rdi に 1 を代入します。",
          "jmp で done ラベルへ無条件ジャンプします。",
          null,
          "ラベル equal: を定義します。",
          "mov で rdi に 0 を代入します。",
          null,
          "ラベル done: を定義します。",
          "mov で rax に 60 を代入します。",
          "syscall でシステムコールを実行します。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "5", "cmp", "je", "equal", "rdi", "1", "jmp", "done", "0", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; doneに直接ジャンプ\\n  jmp done\\n\\nskip:\\n  mov rdi, 1\\n\\ndone:\\n  xor rdi, rdi\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; doneに直接ジャンプ\\n  ___ ___\\n\\n___:\\n  ___ ___, ___\\n\\n___:\\n  ___ ___, ___\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
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
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "jmp で done ラベルへジャンプします。",
          null,
          "ラベル skip: を定義します。",
          "mov で rdi に 1 を代入します。",
          null,
          "ラベル done: を定義します。",
          "xor で rdi を 0 にします。",
          "mov で rax に 60 を代入します。",
          "syscall でシステムコールを実行します。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "jmp", "done", "skip", "mov", "rdi", "1", "xor", "rax", "60", "syscall"]
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
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに9を入れる\\n  mov rax, 9\\n  ; raxを1増やす\\n  inc rax\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ___ ___\\n\\n___:\\n  ; raxに9を入れる\\n  ___ ___, ___\\n  ; raxを1増やす\\n  ___ ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  global _start",
          "",
          "_start:",
          "  ; raxに9を入れる",
          "  mov rax, 9",
          "  ; raxを1増やす",
          "  inc rax",
          "",
          "  ; 結果raxをrdiにコピー",
          "  mov rdi, rax",
          "  ; 終了処理",
          "  mov rax, 60",
          "  syscall"
        ],
      "lineHints": [
          null,
          "section でコードセクションを宣言します。",
          "global で _start を外部公開します。",
          null,
          "プログラムのエントリーポイントを定義するラベルです。",
          null,
          "mov で rax に 9 を代入します。",
          null,
          "inc で rax の値を 1 増加させます。",
          null,
          null,
          "mov で rdi に rax の値をコピーします。",
          null,
          "mov で rax に 60 を代入します。",
          "syscall でシステムコールを実行します。"
        ],
        "candidates": {
          "others": ["section", "text", "global", "_start", "mov", "rax", "9", "inc", "rdi", "60", "syscall"]
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