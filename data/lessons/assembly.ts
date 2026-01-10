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
          "title": "アセンブリ言語とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# コンピュータの「生（なま）」の言葉\n\nアセンブリ言語は、コンピュータのCPUという脳みそが直接理解できる言葉（機械語）に最も近いプログラミング言語です。ハードウェアを限界まで操ることができます。"
        },
        {
          "title": "画面に文字を出すには？",
          "image": "/illustrations/common/monitor.png",
          "content": "# システムコール\n\nアセンブリ言語では、OS（オペレーティングシステム）というコンピュータの「ボス」に、「画面にこれを書いてください！」とお願いする命令を送ります。これを「システムコール」と呼びます。"
        },
        {
          "title": "コンピュータとの直接対話",
          "image": "/illustrations/common/monitor.png",
          "content": "# syscall（システムコール）\n\nアセンブリ言語では、`rax` や `rdi` という名前の「小さな机（レジスタ）」に数字を置いてから、`syscall` という合図を送ります。すると、コンピュータのボスが画面に文字を出してくれます。\n\n**暗号の意味：**\n- `mov rax, 1` : 「画面に書く」という指示を机に置きます\n- `mov rdi, 1` : 「標準の画面」を指定します\n- `syscall` : 「さあ、やってください！」という合図です"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "section .data\n  msg db \"Hello\", 0xA\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1\n  mov rdi, 1\n  ; msgで表示する文字を指定\n  mov rsi, msg\n  mov rdx, 6\n  syscall\n\n  mov rax, 60\n  xor rdi, rdi\n  syscall",
      "holeyCode": "; データセクションを宣言\nsection ___\n  ; 文字列msgを定義\n  msg db \"___\", 0xA\n\n; テキストセクションを宣言\nsection ___\n  ; エントリーポイントを公開\n  global ___\n\n; プログラムの開始地点\n___:\n  ; 1は「書く」という命令\n  mov rax, ___\n  ; 1は標準出力\n  mov rdi, ___\n  ; msgで表示する文字を指定\n  mov rsi, ___\n  ; 文字の長さを指定\n  mov rdx, ___\n  ; システムコールを実行\n  ___\n\n  ; 60は「終了」という命令\n  mov rax, ___\n  ; エラーコード0\n  xor ___, rdi\n  ; システムコールを実行\n  ___",
      "correctLines": ["section .data", "  msg db \"Hello\", 0xA", "", "section .text", "  global _start", "", "_start:", "  mov rax, 1", "  mov rdi, 1", "  mov rsi, msg", "  mov rdx, 6", "  syscall", "", "  mov rax, 60", "  xor rdi, rdi", "  syscall"],
      "lineHints": [
        "ここはおまじない（データの場所）です。",
        "表示したい文字を準備します。",
        null,
        "ここはおまじない（手順の場所）です。",
        "ここもおまじない（スタートの目印）です。",
        null,
        "ここからスタートします！",
        "指示「1（書く）」を机に置きます。",
        "場所「1（画面）」を机に置きます。",
        "表示する文字の名前 `msg` を入力しましょう。",
        "文字の長さ（6文字分）を机に置きます。",
        "ボスに実行を頼みます！",
        null,
        "プログラムを終わる準備です。",
        "エラーがないことを報告します。",
        "最後のお願いをします。"
      ],
      "candidates": { "variables": ["msg"] },
      "testCases": [{ "input": "", "expected_output": "Hello\n" }]
    }
  ]
};