export const luaData = {
  "language": "lua",
  "lessonId": "lua-1",
  "lessonTitle": "Lua I",
  "lessonDescription": "ゲーム組み込み言語として有名なLuaの基本を学びます。シンプルで軽量、かつ柔軟なテーブル構造が特徴です。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Luaで画面に文字を表示するには print 関数を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "print",
          "content": "# 表示関数\n\n`print` 関数の後ろに文字を書くことで表示できます。\n\n**コード例：**\n```lua\nprint(\"Hello, Lua!\")\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "print(\"Hello, Lua!\")",
      "holeyCode": "print(\"___\")",
      "correctLines": [
        "print(\"Hello, Lua!\")"
      ],
      "lineHints": [
        "Hello, Lua! を出力します。"
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
      "title": "変数",
      "description": "変数を定義して出力しましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "local",
          "content": "# ローカル変数\n\n`local` を付けることで、その範囲内だけで有効な変数になります。\n\n**コード例：**\n```lua\nlocal x = 10\nprint(x)\n```"
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
        "10を代入します。",
        "変数xを出力します。"
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
      "title": "計算",
      "description": "計算を行いましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "演算",
          "content": "# 四則演算\n\n+, -, *, / などが使えます。\n\n**コード例：**\n```lua\nprint(5 + 3)\n```"
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
        "a + b を出力します。"
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
      "title": "文字列結合",
      "description": "文字列を結合して表示しましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "結合演算子",
          "content": "# .. (ドット2つ)\n\nLuaでの文字列結合は `..` です。\n\n**コード例：**\n```lua\nlocal age = 20\nprint(\"年齢は \" .. age .. \" 歳です\")\n```"
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
        ".. 演算子を使います。"
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
      "title": "テーブル（配列）",
      "description": "Luaの主要データ構造であるテーブルを配列として使いましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "テーブル",
          "content": "# { }\n\n複数のデータをまとめて扱います。**Luaのインデックスは1から始まる**ことに注意しましょう。\n\n**コード例：**\n```lua\nlocal t = {10, 20}\nprint(t[2]) -- 20 を表示\n```"
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
        "2番目の要素を指定します。"
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
      "title": "if文",
      "description": "条件分岐を行います。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if",
          "content": "# if ... then ... end\n\n条件を満たす場合のみ処理を実行します。\n\n**コード例：**\n```lua\nif score > 80 then\n  print(\"合格\")\nend\n```"
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
        "比較演算子 > を使います。",
        null,
        null
      ],
      "candidates": {
        "operators": [
          ">"
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
      "title": "if-else文",
      "description": "elseを使って分岐します。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else",
          "content": "# else\n\n条件に当てはまらない時の処理は `else` を使います。\n\n**コード例：**\n```lua\nif age >= 20 then\n  print(\"大人\")\nelse\n  print(\"子供\")\nend\n```"
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
        "else を記述します。"
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
      "title": "ループ（ipairs）",
      "description": "ipairsを使って配列を走査します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ipairs",
          "content": "# 要素の繰り返し\n\nテーブルの要素を一つずつ取り出して処理します。\n\n**コード例：**\n```lua\nlocal nums = {1, 2, 3}\nfor i, n in ipairs(nums) do\n  print(n)\nend\n```"
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
        "テーブル nums を指定します。"
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
      "title": "テーブル（連想配列）",
      "description": "テーブルを連想配列（辞書）として使いましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "連想配列",
          "content": "# キー指定\n\n名前付きのキーでデータを管理します。ドット記法でアクセスできます。\n\n**コード例：**\n```lua\nlocal user = {name=\"Alice\"}\nprint(user.name) -- \"Alice\" を表示\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local user = {name=\"Alice\"}\nprint(user.name)",
      "holeyCode": "local user = {name=\"Alice\"}\nprint(user.name)",
      "correctLines": [
        "local user = {name=\"Alice\"}",
        "print(user.name)"
      ],
      "lineHints": [
        null,
        "nameプロパティにアクセスします。"
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
      "title": "関数",
      "description": "関数を定義して呼び出します。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "function",
          "content": "# 処理の定義\n\n名前を付けて処理を定義します。\n\n**コード例：**\n```lua\nfunction greet()\n  print(\"Hello\")\nend\n\ngreet() -- 呼び出し\n```"
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
        null,
        null,
        null,
        "greet を呼び出します。"
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
