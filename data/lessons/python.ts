export const pythonData = {
  "language": "python",
  "lessonId": "python-1",
  "lessonTitle": "Python I",
  "lessonDescription": "Pythonの基本的な文法を学びます。変数、リスト、条件分岐、ループ、関数など、プログラミングの根幹となる概念を習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello Worldを出力しよう",
      "description": "Pythonプログラミングの第一歩として、画面に「Hello, World!」という文字を表示させる方法を学びましょう。Hello, World!と表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Pythonへようこそ！",
          "content": "# Pythonとは？\n\nPython（パイソン）は、読みやすく書きやすいことが特徴のプログラミング言語です。\nAI開発、データ分析、Webアプリ制作など、世界中で幅広く使われています。"
        },
        {
          "title": "文字を出力する print関数",
          "content": "# print関数\n\nコンピュータに何かを表示させるには、`print()` という命令（関数）を使います。\n\n```python\nprint(表示したいもの)\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`print()` 関数を使って、画面に `Hello, World!` と出力してみましょう。\n\n**コード例：**\n```python\nprint('Hello, World!')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 「Hello, World!」と出力\nprint('Hello, World!')",
      "holeyCode": "# 「Hello, World!」と出力\nprint('___')",
      "correctLines": [
        "# 「Hello, World!」と出力",
        "print('Hello, World!')"
      ],
      "lineHints": [
        null,
        "命令は「print」。表示する文字は引用符「'」で囲み、「Hello, World!」と記述します。"
      ],
      "candidates": {
        "functions": [
          "print"
        ],
        "strings": [
          "Hello, World!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "変数を使ってみよう",
      "description": "データに名前を付けて保存する「変数」の使い方を学びましょう。変数 name に文字列 'Python' を代入して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数とは？",
          "content": "# 変数はデータの「箱」\n\n変数は、データ（数値や文字列など）を一時的に保存しておくための「箱」のようなものです。"
        },
        {
          "title": "代入の書き方",
          "content": "# = 記号を使う\n\nPythonでは = を使って右側の値を左側の変数に入れます（代入）。\n\n```python\nname = 'Python'\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 name に文字列 `'Python'` を代入し、その変数を出力してみましょう。\n\n**コード例：**\n```python\nname = 'Python'\nprint(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数nameに'Python'を代入\nname = 'Python'\n# 変数nameを出力\nprint(name)",
      "holeyCode": "# 変数nameに'Python'を代入\nname = '___'\n# 変数nameを出力\nprint(___)",
      "correctLines": [
        "# 変数nameに'Python'を代入",
        "name = 'Python'",
        "# 変数nameを出力",
        "print(name)"
      ],
      "lineHints": [
        null,
        "変数名 name を使い、等号(=)の右側に文字列 'Python' を指定します。",
        null,
        "print関数の引数に変数の名前（name）を指定して出力します。"
      ],
      "candidates": {
        "variables": [
          "name"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "Python"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Python\n"
        }
      ]
    },
    {
      "title": "数値の計算",
      "description": "Pythonを使って数値の計算を行う方法を学びましょう。変数 x と y の足し算結果を表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Pythonは強力な計算機",
          "content": "# 算術演算子\n\n- **+** : 足し算\n- **-** : 引き算\n- **\\*** : 掛け算\n- **/** : 割り算"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 x に `10`、変数 y に 5 を代入し、その合計を表示してみましょう。\n\n**コード例：**\n```python\nx = 10\ny = 5\nprint(x + y)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# xに10を代入\nx = 10\n# yに5を代入\ny = 5\n# x + y を出力\nprint(x + y)",
      "holeyCode": "# xに10を代入\nx = ___\n# yに5を代入\ny = ___\n# x + y を出力\nprint(x ___ y)",
      "correctLines": [
        "# xに10を代入",
        "x = 10",
        "# yに5を代入",
        "y = 5",
        "# x + y を出力",
        "print(x + y)"
      ],
      "lineHints": [
        null,
        "x = 10 と記述します。",
        null,
        "y = 5 と記述します。",
        null,
        "x と y を + で繋いで print 関数に入れます。"
      ],
      "candidates": {
        "variables": [
          "x",
          "y"
        ],
        "functions": [
          "print"
        ],
        "numbers": [
          "10",
          "5"
        ],
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "文字列の埋め込み (f-string)",
      "description": "f-stringを使って変数 age の値を文章の中に埋め込んで表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "f-string",
          "content": "# f-stringの書き方\n\n文字列の前に f を付け、中括弧 `{}` の中に変数名を書くことで、値を文字列の中に埋め込むことができます。\n\n```python\nage = 20\nprint(f'私は{age}歳です')\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n変数 age に `20` を代入し、f-stringを使って「私は20歳です」と表示してみましょう。\n\n**コード例：**\n```python\nage = 20\nprint(f'私は{age}歳です')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 変数ageに20を代入\nage = 20\n# f-stringで出力\nprint(f'私は{age}歳です')",
      "holeyCode": "# 変数ageに20を代入\nage = ___\n# f-stringで出力\nprint(f'私は{___}歳です')",
      "correctLines": [
        "# 変数ageに20を代入",
        "age = 20",
        "# f-stringで出力",
        "print(f'私は{age}歳です')"
      ],
      "lineHints": [
        null,
        "age = 20 とします。",
        null,
        "中括弧 {} の中に変数名 age を入れます。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ],
        "numbers": [
          "20"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は20歳です\n"
        }
      ]
    },
    {
      "title": "リストの基本",
      "description": "リスト colors から 2番目の要素を取り出して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リスト",
          "content": "# 番号（インデックス）で指定\n\n複数のデータをまとめて管理するにはリストを使います。\nプログラミングでは「0」から数え始めるというルールがあります。\n\n```python\nitems = ['A', 'B']\nprint(items[1]) # 2番目の要素 'B' を表示\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nリスト colors を作成し、2番目の要素を表示してみましょう。\n\n**コード例：**\n```python\ncolors = ['red', 'blue']\nprint(colors[1])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# リストcolorsを作成\ncolors = ['red', 'blue']\n# 2番目の要素を出力\nprint(colors[1])",
      "holeyCode": "# リストcolorsを作成\ncolors = ['___', '___']\n# 2番目の要素を出力\nprint(colors[___])",
      "correctLines": [
        "# リストcolorsを作成",
        "colors = ['red', 'blue']",
        "# 2番目の要素を出力",
        "print(colors[1])"
      ],
      "lineHints": [
        null,
        "['red', 'blue'] と記述します。",
        null,
        "2番目のインデックスは 1 です。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "red",
          "blue"
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "blue\n"
        }
      ]
    },
    {
      "title": "if文による条件分岐",
      "description": "score が 80より大きい場合にのみ合格メッセージを表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "if文",
          "content": "# コロン（:）とインデント\n\nPythonでは条件のあとに : を書き、次の行をインデント（行頭の空白）します。\n\n```python\nif score > 80:\n    print('合格！')\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nscore が `80` より大きい場合に「満点です！」と表示してみましょう。\n\n**コード例：**\n```python\nscore = 100\nif score > 80:\n    print('満点です！')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# scoreを定義\nscore = 100\n# 80より大きい場合に実行\nif score > 80:\n    print('満点です！')",
      "holeyCode": "# scoreを定義\nscore = ___\n# 80より大きい場合に実行\nif score ___ 80:\n    print('___')",
      "correctLines": [
        "# scoreを定義",
        "score = 100",
        "# 80より大きい場合に実行",
        "if score > 80:",
        "    print('満点です！')"
      ],
      "lineHints": [
        null,
        "score = 100 と代入します。",
        null,
        "比較演算子 > を使います。行末にコロン（:）を忘れずに。",
        "print('満点です！') と記述します。インデントも正確に入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "functions": [
          "print"
        ],
        "operators": [
          ">"
        ],
        "strings": [
          "満点です！"
        ],
        "numbers": [
          "100"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "満点です！\n"
        }
      ]
    },
    {
      "title": "if-else文",
      "description": "年齢に応じて「大人」か「未成年」かを表示し分けるプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "else文",
          "content": "# if と else のインデントを揃える\n\n条件に当てはまらない場合の処理は `else:` を使います。\n\n```python\nage = 20\nif age >= 20:\n    print('大人')\nelse:\n    print('未成年')\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nage に `18` を代入し、`20` 歳以上かどうかで表示を切り替えてみましょう。\n\n**コード例：**\n```python\nage = 18\nif age >= 20:\n    print('大人')\nelse:\n    print('未成年')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ageを定義\nage = 18\n# 条件分岐\nif age >= 20:\n    print('大人')\nelse:\n    print('未成年')",
      "holeyCode": "# ageを定義\nage = ___\n# 条件分岐\nif age >= 20:\n    print('大人')\nelse:\n    print('___')",
      "correctLines": [
        "# ageを定義",
        "age = 18",
        "# 条件分岐",
        "if age >= 20:",
        "    print('大人')",
        "else:",
        "    print('未成年')"
      ],
      "lineHints": [
        null,
        "age = 18 と代入します。",
        null,
        null,
        null,
        "else: と記述します。",
        "print('未成年') と出力します。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "未成年"
        ],
        "numbers": [
          "18"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "未成年\n"
        }
      ]
    },
    {
      "title": "for文による繰り返し",
      "description": "リスト names に入っている名前を一つずつ順番に表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "for文",
          "content": "# 基本の構文\n\nリストの要素を一つずつ取り出して処理するには `for` を使います。\n\n```python\nfor 変数名 in リスト名:\n    繰り返したい処理\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nリスト names の要素をループで一つずつ表示してみましょう。\n\n**コード例：**\n```python\nnames = ['Alice', 'Bob']\nfor name in names:\n    print(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# リスト作成\nnames = ['Alice', 'Bob']\n# ループ処理\nfor name in names:\n    print(name)",
      "holeyCode": "# リスト作成\nnames = ['Alice', 'Bob']\n# ループ処理\nfor ___ in ___:\n    print(___)",
      "correctLines": [
        "# リスト作成",
        "names = ['Alice', 'Bob']",
        "# ループ処理",
        "for name in names:",
        "    print(name)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "for name in names: と記述します。",
        "取り出した名前（name）を print します。"
      ],
      "candidates": {
        "variables": [
          "name",
          "names"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\nBob\n"
        }
      ]
    },
    {
      "title": "辞書の基本",
      "description": "辞書 user からキー 'name' を使って値を取り出して表示するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "辞書",
          "content": "# キー: 値 のペア\n\nキー（名前）を使ってデータを取り出すには辞書を使います。\n\n```python\nuser = {'name': 'Alice'}\nprint(user['name']) # 'Alice' を表示\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n辞書 user を作成し、キー `'name'` に対応する値を表示してみましょう。\n\n**コード例：**\n```python\nuser = {'name': 'Alice'}\nprint(user['name'])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 辞書を作成\nuser = {'name': 'Alice'}\n# 値を表示\nprint(user['name'])",
      "holeyCode": "# 辞書を作成\nuser = {'___': '___'}\n# 値を表示\nprint(user['___'])",
      "correctLines": [
        "# 辞書を作成",
        "user = {'name': 'Alice'}",
        "# 値を表示",
        "print(user['name'])"
      ],
      "lineHints": [
        null,
        "{'name': 'Alice'} と記述します。",
        null,
        "辞書名の後に ['name'] を付けて特定のデータを取り出します。"
      ],
      "candidates": {
        "variables": [
          "user"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "name",
          "Alice"
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
      "title": "関数の定義と呼び出し",
      "description": "挨拶を表示する関数 greet を定義し、それを呼び出して実行するプログラムを作りましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数の定義",
          "content": "# defキーワード\n\n処理をひとまとめにして名前を付けるには `def` を使います。\n\n```python\ndef greet():\n    print('Good morning')\n\ngreet() # 関数を呼び出して実行\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n関数 `greet` を定義し、その中でメッセージを表示してから、最後に関数を呼び出してみましょう。\n\n**コード例：**\n```python\ndef greet():\n    print('Good morning')\n\ngreet()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 関数greetを定義\ndef greet():\n    print('Good morning')\n# 関数を呼び出す\ngreet()",
      "holeyCode": "# 関数greetを定義\ndef ___():\n    print('___')\n# 関数を呼び出す\n___()",
      "correctLines": [
        "# 関数greetを定義",
        "def greet():",
        "    print('Good morning')",
        "# 関数を呼び出す",
        "greet()"
      ],
      "lineHints": [
        null,
        "def greet(): と記述して関数を定義します。",
        "表示したい文字列「Good morning」を print します。",
        null,
        "greet() と書いて、関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet",
          "print"
        ],
        "strings": [
          "Good morning"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Good morning\n"
        }
      ]
    }
  ]
}
