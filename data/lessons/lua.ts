export const luaData = {
  "language": "lua",
  "lessonId": "lua-1",
  "lessonTitle": "Lua (ルア) にちょうせん！",
  "lessonDescription": "ゲーム作りなどでよく使われる、シンプルで軽い言葉「Lua（ルア）」のきほんを学びましょう。いろいろなものを入れることができる「テーブル」という機能が特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面にメッセージを出してみましょう",
      "description": "Luaを使って画面に「こんにちは」と表示させてみましょう。print（プリント）という関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "print を使いましょう",
          "content": "# メッセージを表示します\n\n画面に文字を出したいときは、`print` と入力して、そのあとに `\" \"` で囲んだ文字を続けます。\n\n**コード例：**\n```lua\nprint(\"Hello, Lua!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "print(\"Hello, Lua!\")",
      "holeyCode": "print(\"___")",
      "correctLines": [
        "print(\"Hello, Lua!\")"
      ],
      "lineHints": [
        "print を使って、そのあとの文字を画面に出します。"
      ],
      "candidates": {
        "strings": [
          "Hello, Lua!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Lua!\n"
        }
      ]
    },
    {
      "title": "自分専用の「はこ」",
      "description": "数字や文字をしまっておく「はこ（変数）」を使ってみましょう。その場だけで使う「local（ローカル）」というラベルを貼ります。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "local をつけましょう",
          "content": "# 自分だけの変数\n\nLuaでは、`local` という言葉をつけてから「はこ」を作ります。これは「この場所だけで使います」という合図になりますよ。\n\n**コード例：**\n```lua\nlocal x = 10\nprint(x)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local x = 10\nprint(x)",
      "holeyCode": "local x = ___\nprint(___)",
      "correctLines": [
        "local x = 10",
        "print(x)"
      ],
      "lineHints": [
        "x という名前のはこに 10 を入力します。 `local` を忘れずに入力しましょう。",
        "はこの名前 x を指定して、中身を表示します。"
      ],
      "candidates": {
        "variables": [
          "x"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算しましょう",
      "description": "Luaを使って、たし算をしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算の記号",
          "content": "# 算数と同じ記号を使います\n\nLuaでも、こんな記号を使って計算をしますよ。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local a = 5\nlocal b = 3\nprint(a + b)",
      "holeyCode": "local a = 5\nlocal b = 3\nprint(a ___ b)",
      "correctLines": [
        "local a = 5",
        "local b = 3",
        "print(a + b)"
      ],
      "lineHints": [
        null,
        null,
        "たし算なので `+` を使います。"
      ],
      "candidates": {
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "8\n"
        }
      ]
    },
    {
      "title": "文字と「はこ」をくっつけましょう",
      "description": "Luaでは、ドット2つ（..）を使って、文字とはこをくっつけることができます。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": ".. （ドット2つ）を使いましょう",
          "content": "# 文字の合体\n\n`..` と入力すると、左右の文字や数字をくっつけて一つの文章にできますよ。\n\n**コード例：**\n```lua\nlocal age = 10\nprint(\"私は \" .. age .. \" 歳です\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local age = 20\nprint(\"Age: \" .. age)",
      "holeyCode": "local age = 20\nprint(\"Age: \" ___ age)",
      "correctLines": [
        "local age = 20",
        "print(\"Age: \" .. age)"
      ],
      "lineHints": [
        null,
        "文字をくっつける記号 `..` を入力します。"
      ],
      "candidates": {
        "operators": [
          ".."
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Age: 20\n"
        }
      ]
    },
    {
      "title": "なんでも入る「テーブル」",
      "description": "Luaのいちばんの特徴、いろいろなデータをまとめて入れられる「テーブル」を使ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "番号は 1 から数えます！",
          "content": "# { } を使います\n\nテーブルの中身を取り出すときは、何番目かを指定します。他の多くの言葉とちがって、Luaは **「1番」** から数えるのがルールです。日常の数え方と同じですね！\n\n**コード例：**\n```lua\nlocal t = {10, 20}\nprint(t[2]) -- 20 が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local t = {10, 20}\nprint(t[2])",
      "holeyCode": "local t = {10, 20}\nprint(t[___])",
      "correctLines": [
        "local t = {10, 20}",
        "print(t[2])"
      ],
      "lineHints": [
        null,
        "2番目のデータの番号は 2 です。 `t[2]` と入力してください。"
      ],
      "candidates": {
        "numbers": [
          "2"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分けましょう",
      "description": "条件によって動きを変えてみましょう。 if（イフ）と then（ゼン）を使います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if と then と end",
          "content": "# 言葉でまとまりを作ります\n\nLuaでは、`if 条件 then` と入力し、最後に `end` と入力して終わらせるのがルールです。\n\n**コード例：**\n```lua\nif score > 80 then\n  print(\"合格！\")\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local score = 100\nif score > 80 then\n  print(\"Great\")\nend",
      "holeyCode": "local score = 100\nif score ___ 80 then\n  print(\"Great\")\nend",
      "correctLines": [
        "local score = 100",
        "if score > 80 then",
        "  print(\"Great\")",
        "end"
      ],
      "lineHints": [
        null,
        "比較するための記号 `>` を入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Great\n"
        }
      ]
    },
    {
      "title": "ちがう場合はどうしましょう？",
      "description": "else（エルス）を使って、「そうでなければ」の動きを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "elseブロック",
          "content": "# 二つの動き\n\n条件に当てはまらないときの動きは `else` を使って入力します。\n\n**コード例：**\n```lua\nif age >= 20 then\n  print(\"大人です\")\nelse\n  print(\"子供です\")\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local x = 5\nif x > 10 then\n  print(\"Big\")\nelse\n  print(\"Small\")\nend",
      "holeyCode": "local x = 5\nif x > 10 then\n  print(\"Big\")\n___\n  print(\"Small\")\nend",
      "correctLines": [
        "local x = 5",
        "if x > 10 then",
        "  print(\"Big\")",
        "else",
        "  print(\"Small\")",
        "end"
      ],
      "lineHints": [
        null,
        null,
        null,
        "そうでなければ、をあらわす `else` を入力しましょう。",
        null,
        null
      ],
      "candidates": {
        "keywords": [
          "else"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Small\n"
        }
      ]
    },
    {
      "title": "中身を全部出してみましょう",
      "description": "ipairs（アイペアーズ）という機能を使って、テーブルの中身を一つずつ順番に表示します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "テーブルのループ",
          "content": "# ipairs（アイペアーズ）\n\n`for i, n in ipairs(テーブル) do ... end` という形を使って、中身を一つずつ取り出すことができます。ゲーム内のキャラクター全員を表示するときなどに使われますよ。\n\n**コード例：**\n```lua\nlocal nums = {1, 2, 3}\nfor i, n in ipairs(nums) do\n  print(n)\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local nums = {1, 2, 3}\nfor i, n in ipairs(nums) do\n  print(n)\nend",
      "holeyCode": "local nums = {1, 2, 3}\nfor i, n in ipairs(___) do\n  print(n)\nend",
      "correctLines": [
        "local nums = {1, 2, 3}",
        "for i, n in ipairs(nums) do",
        "  print(n)",
        "end"
      ],
      "lineHints": [
        null,
        "対象となるテーブルの名前 `nums` を指定します。",
        null,
        null
      ],
      "candidates": {
        "variables": [
          "nums"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "名前で探せる「テーブル」",
      "description": "テーブルを使って、名前を指定してデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "キー指定",
          "content": "# ドット（ . ）でつなげます\n\n「名前」と「データ」をセットにして保存できます。取り出すときは `テーブル名.名前` というふうにドットでつなげるのが一般的です。\n\n**コード例：**\n```lua\nlocal user = {name=\"たろう\"}\nprint(user.name) -- 「たろう」が表示されます\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local user = {name=\"Alice\"}\nprint(user.name)",
      "holeyCode": "local user = {name=\"Alice\"}\nprint(user.___)",
      "correctLines": [
        "local user = {name=\"Alice\"}",
        "print(user.name)"
      ],
      "lineHints": [
        null,
        "名前 `name` を指定して、データを取り出します。"
      ],
      "candidates": {
        "strings": [
          "name"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作りましょう",
      "description": "よく使う手順をまとめて、名前をつけた「関数（かんすう）」を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "function と名前",
          "content": "# 関数の定義\n\nやりたいことをひとまとめにして、名前をつけることができます。呼び出すだけでいつでも動かせますよ。 Luaでは `function` という言葉を使います。\n\n**コード例：**\n```lua\nfunction aisatsu()\n  print(\"こんにちは\")\nend\n\naisatsu() -- 呼び出し\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function greet()\n  print(\"Hello\")\nend\ngreet()",
      "holeyCode": "function greet()\n  print(\"Hello\")\nend\n___()",
      "correctLines": [
        "function greet()",
        "  print(\"Hello\")",
        "end",
        "greet()"
      ],
      "lineHints": [
        "greet という名前の関数を定義します。",
        "メッセージを表示します。",
        "関数の終わりです。",
        "greet(); と入力して、関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}