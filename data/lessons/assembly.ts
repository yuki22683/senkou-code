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
      "description": "アセンブリ言語を使って画面に「Hello」と表示させてみましょう。コンピュータの「ボス（OS）」に頼みごとをする特別な命令を使います。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Assembly（アセンブリ）とは？",
          "image": "/illustrations/common/binary_code.png",
          "content": "# コンピュータの「生（なま）」の言葉\n\nアセンブリ言語は、コンピュータのCPUという脳みそが直接理解できる言葉（機械語）に最も近いプログラミング言語です。ハードウェアを限界まで操ることができます。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/microchip_logic.png",
          "content": "# システムコール\n\nアセンブリ言語では、OS（オペレーティングシステム）というコンピュータの「ボス」に、「画面にこれを書いてください！」とお願いする命令を送ります。これを「システムコール」と呼びます。"
        },
        {
          "title": "コンピュータとの直接対話",
          "image": "/illustrations/common/vacuum_tube.png",
          "content": "# syscall（システムコール）\n\nアセンブリ言語では、`rax` や `rdi` という名前の「小さな机（レジスタ）」に数字を置いてから、`syscall` という合図を送ります。すると、コンピュータのボスが画面に文字を出してくれます。\n\n**暗号の意味：**\n- `mov rax, 1` : 「画面に書く」という指示を机に置きます\n- `mov rdi, 1` : 「標準の画面」を指定します\n- `syscall` : 「さあ、やってください！」という合図です"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  msg db \"Hello\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  ; msgで表示する文字を指定\n  mov rsi, msg\n  mov rdx, 6\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "; データセクションを宣言\nsection ___\n  ; 文字列msgを定義\n  msg db \"___\", 0xA\n\n; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n\n; プログラムの開始地点\n___:\n  ; 1は「書く」という命令\n  mov rax, ___\n  ; 1は標準出力\n  mov rdi, ___\n  ; msgで表示する文字を指定\n  mov rsi, ___\n  ; 文字の長さを指定\n  mov rdx, ___\n  ; システムコールを実行\n  ___\n\n  ; 60は「終了」という命令\n  mov rax, ___\n  ; エラーコード0\n  xor ___, rdi\n  ; システムコールを実行\n  ___",
      "correctLines": [
        "; データセクションを宣言",
        "section .data",
        "  ; 文字列msgを定義",
        "  msg db \"Hello\", 0xA",
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
        "  ; 文字の長さを指定",
        "  mov rdx, 6",
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
        "ここはおまじない（手順の場所）です。",
        null,
        "ここもおまじない（スタートの目印）です。",
        null,
        null,
        "ここからスタートします！",
        null,
        "指示「1（書く）」を机に置きます。",
        null,
        "場所「1（画面）」を机に置きます。",
        null,
        "表示する文字の名前 `msg` を入力しましょう。",
        null,
        "文字の長さ（6文字分）を机に置きます。",
        null,
        "ボスに実行を頼みます！",
        null,
        null,
        "プログラムを終わる準備です。",
        null,
        "エラーがないことを報告します。",
        null,
        "最後のお願いをします。"
      ],
      "candidates": { "variables": ["msg"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    },
    {
      "title": "違うメッセージを表示しましょう",
      "description": "「Hi」という短いメッセージを表示してみましょう。文字の長さも変わります。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "文字列の長さ",
          "image": "/illustrations/common/electric_circuit.png",
          "content": "# 文字の長さを数える\n\nアセンブリでは、文字の長さを正確に指定する必要があります。`Hi` は2文字ですが、改行 `0xA` を含めて3バイトになります。\n\n`rdx` レジスタに長さを指定します。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/logic_gate.png",
          "content": "# 目標\n\n`Hi` という文字を表示させましょう。長さは3（Hi + 改行）です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  msg db \"Hi\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, msg\n  ; Hiは2文字+改行で3バイト\n  mov rdx, 3\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .data\n  ; 表示したい文字列を定義\n  msg db \"___\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  mov rsi, msg\n  ; Hiは2文字+改行で3バイト\n  mov rdx, ___\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
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
        null,
        null,
        "表示したい文字を入力しましょう。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "文字の長さを入力しましょう。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "strings": ["Hi", "Hello"], "numbers": ["3", "6", "2"] },
      "testCases": [{ "input": "", "expected_output": "Hi\n" }]
    },
    {
      "title": "終了コードを返しましょう",
      "description": "プログラムの終了時に、成功を示す終了コード0を返してみましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "終了コード",
          "image": "/illustrations/common/cpu.png",
          "content": "# プログラムの結果を報告\n\n終了コードは、プログラムが正常に終わったかどうかを報告する数字です。\n\n- `0` : 正常終了（成功）\n- それ以外 : エラー\n\n`xor rdi, rdi` は `rdi = 0` と同じ意味です。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cpu_chip.png",
          "content": "# 目標\n\n何も表示せず、終了コード0で正常終了するプログラムを作りましょう。\n\n`mov rax, 60` は「終了」という命令です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  ; 終了システムコール\n  mov rax, 60\n  ; 終了コード0\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  ; 終了システムコール\n  mov rax, ___\n  ; 終了コード0\n  ___ rdi, rdi\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        "終了の命令番号を入力しましょう。",
        null,
        "レジスタを0にする命令を入力しましょう。",
        null
      ],
      "candidates": { "numbers": ["60", "1", "0"], "instructions": ["xor", "mov", "add"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "数字を足し算しましょう",
      "description": "addという命令を使って、2つの数字を足し算してみましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "add命令（アッド）",
          "image": "/illustrations/common/binary_code.png",
          "content": "# 足し算をする\n\n`add` 命令は、2つの値を足し算します。\n\n```asm\nmov rax, 5   ; raxに5を入れる\nadd rax, 3   ; raxに3を足す（結果：8）\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/microchip_logic.png",
          "content": "# 目標\n\n`rax` に10を入れて、5を足して15にしましょう。\n\n結果は終了コードとして返します。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  ; 10を入れる\n  mov rax, 10\n  ; 5を足す\n  add rax, 5\n\n  ; 結果を終了コードに\n  mov rdi, rax\n  mov rax, 60\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  ; 10を入れる\n  mov rax, 10\n  ; 5を足す\n  ___ rax, 5\n\n  ; 結果を終了コードに\n  mov rdi, rax\n  mov rax, 60\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "足し算の命令を入力しましょう。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "instructions": ["add", "sub", "mul", "mov"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "数字を引き算しましょう",
      "description": "subという命令を使って、数字を引き算してみましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "sub命令（サブ）",
          "image": "/illustrations/common/vacuum_tube.png",
          "content": "# 引き算をする\n\n`sub` 命令は、値を引き算します。\n\n```asm\nmov rax, 10  ; raxに10を入れる\nsub rax, 3   ; raxから3を引く（結果：7）\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/electric_circuit.png",
          "content": "# 目標\n\n`rax` に20を入れて、8を引いて12にしましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  ; 20を入れる\n  mov rax, 20\n  ; 8を引く\n  sub rax, 8\n\n  ; 結果を終了コードに\n  mov rdi, rax\n  mov rax, 60\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  ; 20を入れる\n  mov rax, 20\n  ; 8を引く\n  ___ rax, 8\n\n  ; 結果を終了コードに\n  mov rdi, rax\n  mov rax, 60\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "引き算の命令を入力しましょう。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "instructions": ["sub", "add", "mul", "div"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "レジスタ間でコピーしましょう",
      "description": "mov命令を使って、レジスタからレジスタへ値をコピーしてみましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "レジスタ間のコピー",
          "image": "/illustrations/common/logic_gate.png",
          "content": "# 値を移動する\n\n`mov` 命令はレジスタ間で値をコピーできます。\n\n```asm\nmov rax, 42   ; raxに42を入れる\nmov rbx, rax  ; raxの値をrbxにコピー\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cpu.png",
          "content": "# 目標\n\n`rax` に25を入れて、それを `rdi` にコピーしてから終了しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  ; 25を入れる\n  mov rax, 25\n  ; raxをrdiにコピー\n  mov rdi, rax\n\n  ; 終了\n  mov rax, 60\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  ; 25を入れる\n  mov rax, 25\n  ; raxをrdiにコピー\n  mov ___, rax\n\n  ; 終了\n  mov rax, 60\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "コピー先のレジスタ名を入力しましょう。",
        null,
        null,
        null,
        null
      ],
      "candidates": { "registers": ["rdi", "rsi", "rdx", "rbx"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "値を比較しましょう",
      "description": "cmp命令を使って2つの値を比較してみましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "cmp命令（コンペア）",
          "image": "/illustrations/common/cpu_chip.png",
          "content": "# 比較をする\n\n`cmp` 命令は、2つの値を比較して結果を「フラグ」に保存します。\n\n```asm\ncmp rax, 10  ; raxと10を比較\n```\n\n比較結果は、次のジャンプ命令で使えます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/binary_code.png",
          "content": "# 目標\n\n`rax` に5を入れて、10と比較してみましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 5\n  ; raxと10を比較\n  cmp rax, 10\n\n  ; 終了\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  mov rax, 5\n  ; raxと10を比較\n  ___ rax, 10\n\n  ; 終了\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        null,
        "比較の命令を入力しましょう。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "instructions": ["cmp", "add", "sub", "test"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "条件ジャンプを使いましょう",
      "description": "je命令を使って、条件が合えばジャンプするプログラムを作りましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "条件ジャンプ",
          "image": "/illustrations/common/microchip_logic.png",
          "content": "# 条件付きジャンプ\n\n`je` は「等しければジャンプ」という命令です。\n\n- `je` : 等しい（Jump if Equal）\n- `jne` : 等しくない\n- `jg` : より大きい\n- `jl` : より小さい"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/vacuum_tube.png",
          "content": "# 目標\n\n`rax` が5と等しければ `equal` ラベルにジャンプしましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 5\n  cmp rax, 5\n  ; 等しければジャンプ\n  je equal\n  mov rdi, 1\n  jmp done\n\nequal:\n  mov rdi, 0\n\ndone:\n  mov rax, 60\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  mov rax, 5\n  cmp rax, 5\n  ; 等しければジャンプ\n  ___ equal\n  mov rdi, 1\n  jmp done\n\nequal:\n  mov rdi, 0\n\ndone:\n  mov rax, 60\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "等しければジャンプする命令を入力しましょう。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "instructions": ["je", "jne", "jmp", "jg", "jl"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "ラベルにジャンプしましょう",
      "description": "jmp命令を使って、無条件で特定のラベルにジャンプしましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "無条件ジャンプ",
          "image": "/illustrations/common/electric_circuit.png",
          "content": "# jmp命令（ジャンプ）\n\n`jmp` は無条件で指定したラベルにジャンプします。\n\n```asm\njmp done  ; doneラベルに飛ぶ\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/logic_gate.png",
          "content": "# 目標\n\n`skip` ラベルを飛び越えて `done` ラベルに直接ジャンプしましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  ; doneに直接ジャンプ\n  jmp done\n\nskip:\n  mov rdi, 1\n\ndone:\n  xor rdi, rdi\n  mov rax, 60\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  ; doneに直接ジャンプ\n  ___ done\n\nskip:\n  mov rdi, 1\n\ndone:\n  xor rdi, rdi\n  mov rax, 60\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        "無条件ジャンプの命令を入力しましょう。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": { "instructions": ["jmp", "je", "jne", "call"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    },
    {
      "title": "値を増やしましょう",
      "description": "inc命令を使って、レジスタの値を1増やしてみましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "inc命令（インクリメント）",
          "image": "/illustrations/common/cpu.png",
          "content": "# 値を1増やす\n\n`inc` 命令は、レジスタの値を1だけ増やします。\n\n```asm\nmov rax, 5  ; raxに5\ninc rax     ; raxが6になる\n```\n\n`add rax, 1` と同じ意味ですが、より短く書けます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/cpu_chip.png",
          "content": "# 目標\n\n`rax` に9を入れて、`inc` で10にしましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .text\n  global _start\n\n_start:\n  mov rax, 9\n  ; 1増やす\n  inc rax\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
      "holeyCode": "section .text\n  global _start\n\n_start:\n  mov rax, 9\n  ; 1増やす\n  ___ rax\n\n  mov rdi, rax\n  mov rax, 60\n  syscall",
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
        null,
        null,
        null,
        null,
        null,
        null,
        "値を1増やす命令を入力しましょう。",
        null,
        null,
        null,
        null
      ],
      "candidates": { "instructions": ["inc", "dec", "add", "sub"] },
      "testCases": [{ "input": "", "expected_output": "" }]
    }
  ]
};
