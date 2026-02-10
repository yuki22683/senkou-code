export const assemblyData = {
  "language": "assembly",
  "lessonId": "assembly-1",
  "lessonTitle": "Assembly (アセンブリ) に挑戦！",
  "lessonDescription": "コンピュータの「脳みそ」に直接、短い暗号で指示を出す「アセンブリ言語」のきほんを学びましょう。コンピュータがどうやって動いているのか、その秘密がわかります。",
  "lessonDifficulty": "medium",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "アセンブリ言語へようこそ！",
      "content": "**Assembly（アセンブリ）** は、コンピュータのCPU（脳みそ）に直接命令を出す言語です。\\n\\n他の言語より低レベル（機械に近い）なので、コンピュータの仕組みがよくわかります。\\n\\nこのレッスンでは x86-64 アセンブリを学びます。"
    },
    {
      "title": "レジスタとは",
      "content": "**レジスタ**は、CPU内部にある小さな記憶場所です。\\n\\n主なレジスタ：\\n- `rax` - 計算結果や戻り値\\n- `rdi` - 第1引数\\n- `rsi` - 第2引数\\n- `rdx` - 第3引数\\n\\nデータをレジスタに入れて計算します。"
    },
    {
      "title": "mov命令",
      "content": "`mov` はデータを移動（コピー）する命令です。\\n\\n```asm\\nmov rax, 10    ; raxに10を入れる\\nmov rdi, rax   ; raxの値をrdiにコピー\\n```\\n\\n`mov 先, 元` の順番で書きます。`;` はコメントです。"
    },
    {
      "title": "計算する",
      "content": "足し算や引き算ができます。\\n\\n```asm\\nmov rax, 10\\nadd rax, 5    ; raxに5を足す（rax = 15）\\nsub rax, 3    ; raxから3を引く（rax = 12）\\n```\\n\\n`add` は足し算、`sub` は引き算です。"
    },
    {
      "title": "システムコール",
      "content": "OSに何かを頼むには `syscall` を使います。\\n\\n```asm\\nmov rax, 1    ; 1 = 書き込み\\nmov rdi, 1    ; 1 = 標準出力\\nmov rsi, msg  ; 出力する文字列\\nmov rdx, 5    ; 文字数\\nsyscall       ; OSに実行してもらう\\n```\\n\\n番号60は「プログラム終了」です。"
    },
    {
      "title": "プログラムの構造",
      "content": "アセンブリプログラムの基本構造：\\n\\n```asm\\nsection .data    ; データセクション\\n  msg db \\\"Hi\\\", 0xA\\n\\nsection .text    ; コードセクション\\n  global _start\\n\\n_start:          ; 開始地点\\n  ; ここに処理を書く\\n```\\n\\n`_start` がプログラムの入口です。"
    }
  ],
  "exercises": [
    {
      "title": "画面にメッセージを出してみましょう",
      "description": "アセンブリ言語で文字列を画面に表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "アセンブリ言語とは？",
          "content": "# コンピュータの「生」の言葉\\n\\nアセンブリ言語は、コンピュータのCPUという脳みそが直接理解できる言葉（機械語）に最も近いプログラミング言語です。ハードウェアを限界まで操ることができます。"
        },
        {
          "title": "画面に文字を出すには？",
          "content": "# システムコール\\n\\nアセンブリ言語では、OS（オペレーティングシステム）というコンピュータの「ボス」に、「画面にこれを書いてください！」とお願いする命令を送ります。これを「システムコール」と呼びます。"
        },
        {
          "title": "コンピュータとの直接対話",
          "content": "# syscall（システムコール）\\n\\nアセンブリ言語では、`rax` や `rdi` という名前の「小さな机（レジスタ）」に数字を置いてから、`syscall` という合図を送ります。すると、コンピュータのボスが画面に文字を出してくれます。\\n\\n**暗号の意味：**\\n- `mov rax, 1` : 「画面に書く」という指示を机に置きます\\n- `mov rdi, 1` : 「標準の画面」を指定します\\n- `syscall` : 「さあ、やってください！」という合図です"
        }
      ],
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
      "description": "複数の文字列を順番に表示する方法を学びます",
      "tutorialSlides": [
        {
          "title": "文字列の長さ",
          "content": "# 文字の長さを数える\\n\\nアセンブリでは、文字の長さを正確に指定する必要があります。`Hi` は2文字ですが、改行 `0xA` を含めて3バイトになります。\\n\\n`rdx` レジスタに長さを指定します。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`Hi` という文字を表示させましょう。長さは3（Hi + 改行）です。"
        }
      ],
      "correctCode": "; データセクションを宣言\\nsection .data\\n  ; 表示したい文字列を定義\\n  msg db \"Hi\", 0xA\\n\\n; テキストセクションを宣言\\nsection .text\\n  ; エントリーポイントを公開\\n  global _start\\n\\n; プログラムの開始地点\\n_start:\\n  ; 1は書き込み命令\\n  mov rax, 1\\n  ; 1は標準出力\\n  mov rdi, 1\\n  ; msgを指定\\n  mov rsi, msg\\n  ; Hiは2文字+改行で3バイト\\n  mov rdx, 3\\n  ; システムコールを実行\\n  syscall\\n\\n  ; 終了処理\\n  mov rax, 60\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "; データセクションを宣言\\n___ .___\\n  ; 表示したい文字列を定義\\n  ___ ___ \"___\", ___\\n\\n; テキストセクションを宣言\\n___ .___\\n  ; エントリーポイントを公開\\n  ___ ___\\n\\n; プログラムの開始地点\\n___:\\n  ; 1は書き込み命令\\n  ___ ___, ___\\n  ; 1は標準出力\\n  ___ ___, ___\\n  ; msgを指定\\n  ___ ___, ___\\n  ; Hiは2文字+改行で3バイト\\n  ___ ___, ___\\n  ; システムコールを実行\\n  ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; XOR演算（ゼロクリア）\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; データセクションを宣言",
          "section .data",
          "  ; 表示したい文字列を定義",
          "  msg db \\\"Hi\\\", 0xA",
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
          "  ; XOR演算（ゼロクリア）",
          "  xor rdi, rdi",
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
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "プログラムの終了コードをOSに返す方法を学びます",
      "tutorialSlides": [
        {
          "title": "終了コード",
          "content": "# プログラムの結果を報告\\n\\n終了コードは、プログラムが正常に終わったかどうかを報告する数字です。\\n\\n- `0` : 正常終了（成功）\\n- それ以外 : エラー\\n\\n`xor rdi, rdi` は `rdi = 0` と同じ意味です。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n何も表示せず、終了コード0で正常終了するプログラムを作りましょう。\\n\\n`mov rax, 60` は「終了」という命令です。"
        }
      ],
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
      "description": "数の足し算（加算）をプログラムで行う方法を学びます",
      "tutorialSlides": [
        {
          "title": "add命令（アッド）",
          "content": "# 足し算をする\\n\\n`add` 命令は、2つの値を足し算します。\\n\\n```asm\\nmov rax, 5   ; raxに5を入れる\\nadd rax, 3   ; raxに3を足す（結果：8）\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`rax` に10を入れて、5を足して15にしましょう。\\n\\n結果は終了コードとして返します。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに10を入れる\\n  mov rax, 10\\n  ; raxに5を足す\\n  add rax, 5\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; raxに10を入れる\\n  ___ ___, ___\\n  ; raxに5を足す\\n  ___ ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
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
          "  ; raxに5を足す",
          "  add rax, 5",
          "",
          "  ; 結果raxをrdiにコピー",
          "  mov rdi, rax",
          "  ; 終了処理",
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
      "description": "数の引き算（減算）をプログラムで行う方法を学びます",
      "tutorialSlides": [
        {
          "title": "sub命令（サブ）",
          "content": "# 引き算をする\\n\\n`sub` 命令は、値を引き算します。\\n\\n```asm\\nmov rax, 10  ; raxに10を入れる\\nsub rax, 3   ; raxから3を引く（結果：7）\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`rax` に20を入れて、8を引いて12にしましょう。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに20を入れる\\n  mov rax, 20\\n  ; raxから8を引く\\n  sub rax, 8\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; raxに20を入れる\\n  ___ ___, ___\\n  ; raxから8を引く\\n  ___ ___, ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
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
      "description": "CPUの高速記憶装置「レジスタ」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "レジスタ間のコピー",
          "content": "# 値を移動する\\n\\n`mov` 命令はレジスタ間で値をコピーできます。\\n\\n```asm\\nmov rax, 42   ; raxに42を入れる\\nmov rbx, rax  ; raxの値をrbxにコピー\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`rax` に25を入れて、それを `rdi` にコピーしてから終了しましょう。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに25を入れる\\n  mov rax, 25\\n  ; raxをrdiにコピー\\n  mov rdi, rax\\n\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; raxに25を入れる\\n  ___ ___, ___\\n  ; raxをrdiにコピー\\n  ___ ___, ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに25を入れる",
          "  mov rax, 25",
          "  ; raxをrdiにコピー",
          "  mov rdi, rax",
          "",
          "  ; 終了処理",
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
          ""
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
      "description": "値の大小や等しさを比較する方法を学びます",
      "tutorialSlides": [
        {
          "title": "cmp命令（コンペア）",
          "content": "# 比較をする\\n\\n`cmp` 命令は、2つの値を比較して結果を「フラグ」に保存します。\\n\\n```asm\\ncmp rax, 10  ; raxと10を比較\\n```\\n\\n比較結果は、次のジャンプ命令で使えます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`rax` に5を入れて、10と比較してみましょう。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに5を入れる\\n  mov rax, 5\\n  ; raxと10を比較\\n  cmp rax, 10\\n\\n  ; 終了処理\\n  mov rax, 60\\n  xor rdi, rdi\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; raxに5を入れる\\n  ___ ___, ___\\n  ; raxと10を比較\\n  ___ ___, ___\\n\\n  ; 終了処理\\n  ___ ___, ___\\n  ; XOR演算（ゼロクリア）\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; raxに5を入れる",
          "  mov rax, 5",
          "  ; raxと10を比較",
          "  cmp rax, 10",
          "",
          "  ; 終了処理",
          "  mov rax, 60",
          "  ; XOR演算（ゼロクリア）",
          "  xor rdi, rdi",
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
      "description": "条件ジャンプを使いましょうの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "条件ジャンプ",
          "content": "# 条件付きジャンプ\\n\\n`je` は「等しければジャンプ」という命令です。\\n\\n- `je` : 等しい（Jump if Equal）\\n- `jne` : 等しくない\\n- `jg` : より大きい\\n- `jl` : より小さい"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`rax` が5と等しければ `equal` ラベルにジャンプしましょう。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  mov rax, 5\\n  cmp rax, 5\\n  ; 等しければequalへジャンプ\\n  je equal\\n  mov rdi, 1\\n  jmp done\\n\\nequal:\\n  mov rdi, 0\\n\\ndone:\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; 値を転送\n  ___ ___, ___\\n  ; 値を比較\n  ___ ___, ___\\n  ; 等しければequalへジャンプ\\n  ___ ___\\n  ; 値を転送\n  ___ ___, ___\\n  ; 無条件ジャンプ\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; 値を転送\n  ___ ___, ___\\n\\n; ラベルを定義\n___:\\n  ; 値を転送\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; 値を転送",
          "  mov rax, 5",
          "  ; 値を比較",
          "  cmp rax, 5",
          "  ; 等しければequalへジャンプ",
          "  je equal",
          "  ; 値を転送",
          "  mov rdi, 1",
          "  ; 無条件ジャンプ",
          "  jmp done",
          "",
          "; ラベルを定義",
          "equal:",
          "  ; 値を転送",
          "  mov rdi, 0",
          "",
          "; ラベルを定義",
          "done:",
          "  ; 値を転送",
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
      "description": "jmp命令でプログラムの実行位置を移動させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "無条件ジャンプ",
          "content": "# jmp命令（ジャンプ）\\n\\n`jmp` は無条件で指定したラベルにジャンプします。\\n\\n```asm\\njmp done  ; doneラベルに飛ぶ\\n```"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`skip` ラベルを飛び越えて `done` ラベルに直接ジャンプしましょう。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; doneに直接ジャンプ\\n  jmp done\\n\\nskip:\\n  mov rdi, 1\\n\\ndone:\\n  xor rdi, rdi\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; doneに直接ジャンプ\\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; 値を転送\n  ___ ___, ___\\n\\n; ラベルを定義\n___:\\n  ; XOR演算（ゼロクリア）\n  ___ ___, ___\\n  ; 値を転送\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
          "_start:",
          "  ; doneに直接ジャンプ",
          "  jmp done",
          "",
          "; ラベルを定義",
          "skip:",
          "  ; 値を転送",
          "  mov rdi, 1",
          "",
          "; ラベルを定義",
          "done:",
          "  ; XOR演算（ゼロクリア）",
          "  xor rdi, rdi",
          "  ; 値を転送",
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
          ""
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
      "description": "inc命令でレジスタの値を1増やす方法を学びます",
      "tutorialSlides": [
        {
          "title": "inc命令（インクリメント）",
          "content": "# 値を1増やす\\n\\n`inc` 命令は、レジスタの値を1だけ増やします。\\n\\n```asm\\nmov rax, 5  ; raxに5\\ninc rax     ; raxが6になる\\n```\\n\\n`add rax, 1` と同じ意味ですが、より短く書けます。"
        },
        {
          "title": "やってみましょう！",
          "content": "# 目標\\n\\n`rax` に9を入れて、`inc` で10にしましょう。"
        }
      ],
      "correctCode": "; テキストセクション\\nsection .text\\n  global _start\\n\\n_start:\\n  ; raxに9を入れる\\n  mov rax, 9\\n  ; raxを1増やす\\n  inc rax\\n\\n  ; 結果raxをrdiにコピー\\n  mov rdi, rax\\n  ; 終了処理\\n  mov rax, 60\\n  syscall",
      "holeyCode": "; テキストセクション\\n___ .___\\n  ; グローバルシンボルを宣言\n  ___ ___\\n\\n; ラベルを定義\n___:\\n  ; raxに9を入れる\\n  ___ ___, ___\\n  ; raxを1増やす\\n  ___ ___\\n\\n  ; 結果raxをrdiにコピー\\n  ___ ___, ___\\n  ; 終了処理\\n  ___ ___, ___\\n  ; システムコール実行\n  ___",
      "correctLines": [
          "; テキストセクション",
          "section .text",
          "  ; グローバルシンボルを宣言",
          "  global _start",
          "",
          "; ラベルを定義",
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