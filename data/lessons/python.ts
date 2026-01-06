export const pythonData = {
  "language": "python",
  "lessonId": "python-1",
  "lessonTitle": "Python (パイソン) にちょうせん！",
  "lessonDescription": "プログラミング言語「Python（パイソン）」のきほんを学びましょう。コンピュータに指示（しじ）を出して、動かす方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみよう",
      "description": "プログラミングのさいしょの一歩です！コンピュータに「こんにちは」とあいさつさせてみましょう。print（プリント）という関数（かんすう）を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Python（パイソン）ってなに？",
          "content": "# コンピュータとお話ししましょう\n\nPython（パイソン）は、世界中で使われている「プログラミング言語」のひとつです。\n人間が入力した言葉を、コンピュータにわかるように伝えてくれます。\nAI（人工知能）を作ったり、ロボットを動かしたりするのにも使われていますよ！"
        },
        {
          "title": "文字を出してくれる関数 print",
          "content": "# print（プリント）のまほう\n\n画面に何かを表示（ひょうじ）したいときは、`print()` という名前の関数（かんすう）を使います。\n\n```python\nprint(出したいもの)\n```\n\n文字を出したいときは `' '`（引用符：いんようふ）で囲むのがルールです。"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`print()` を使って、画面に `Hello, World!` と表示させてみましょう。\n\n**入力するコードのヒント：**\n```python\nprint('Hello, World!')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 画面に「Hello, World!」と出す関数\nprint('Hello, World!')",
      "holeyCode": "# 画面に「Hello, World!」と出す関数\nprint('___')",
      "correctLines": [
        "# 画面に「Hello, World!」と出す関数",
        "print('Hello, World!')"
      ],
      "lineHints": [
        null,
        "関数は「print」です。文字を出すときは、左右を '（ちょんちょん）で囲むのを忘れないでください！"
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
      "title": "便利な「はこ」変数（へんすう）",
      "description": "データに名前をつけて保存（ほぞん）できる「変数（へんすう）」を使ってみましょう。nameという名前の「はこ」に 'Python' という文字を入れてみます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "content": "# 変数は「名前がついた はこ」です\n\nプログラミングでは、文字や数字をしまっておく「はこ」を作ることができます。\nこの「はこ」のことを **変数（へんすう）** と呼びます。中身が何かわかるように名前をつけてあげましょう！"
        },
        {
          "title": "はこに中身を入れる（代入）",
          "content": "# =（イコール）の使い方\n\n算数では「同じ」という意味の `=` ですが、プログラミングでは **「右のものを左のはこに入れる」** という意味になります。\n\n```python\nname = 'Python'\n```\nこれだけで、`name` という名前のはこに `'Python'` がしまわれましたよ！"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`name` というはこに `'Python'` と入れて、そのあとで中身を画面に出してみましょう。\n\n**入力するコードのヒント：**\n```python\nname = 'Python'\nprint(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# nameというはこに 'Python' を入れる\nname = 'Python'\n# はこの中身を画面に出す\nprint(name)",
      "holeyCode": "# nameというはこに 'Python' を入れる\nname = '___'\n# はこの中身を画面に出す\nprint(___)",
      "correctLines": [
        "# nameというはこに 'Python' を入れる",
        "name = 'Python'",
        "# はこの中身を画面に出す",
        "print(name)"
      ],
      "lineHints": [
        null,
        "はこ（変数）の名前は `name` です。 `=` のあとに `'Python'` と入力しましょう。",
        null,
        "print のなかに、はこの名前 `name` を入力すると、中身が表示されますよ！"
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
      "title": "コンピュータで計算（けいさん）",
      "description": "Pythonを使って、たし算をしてみましょう。x というはこと y というはこの中身をたして、答えを出してみます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Pythonは計算が得意です！",
          "content": "# 計算の記号\n\nPythonでは、こんな記号を使って計算をしますよ。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算（× のかわり）\n- **/** : わり算（÷ のかわり）"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`x` に `10`、`y` に `5` を入れて、たし算の答えを出してみましょう。\n\n**入力するコードのヒント：**\n```python\nx = 10\ny = 5\nprint(x + y)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# xというはこに 10 を入れる\nx = 10\n# yというはこに 5 を入れる\ny = 5\n# x と y をたした答えを出す\nprint(x + y)",
      "holeyCode": "# xというはこに 10 を入れる\nx = ___\n# yというはこに 5 を入れる\ny = ___\n# x と y をたした答えを出す\nprint(x ___ y)",
      "correctLines": [
        "# xというはこに 10 を入れる",
        "x = 10",
        "# yというはこに 5 を入れる",
        "y = 5",
        "# x と y をたした答えを出す",
        "print(x + y)"
      ],
      "lineHints": [
        null,
        "x = 10 と入力しましょう。",
        null,
        "y = 5 と入力しましょう。",
        null,
        "たし算なので `+` を使います。 `print(x + y)` と入力してください。"
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
      "title": "文章の中に「はこ」を入れる",
      "description": "f-string（エフストリング）という書き方を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "文章と変数をくっつけましょう",
          "content": "# f-string の書き方\n\n文字のまえに `f` をつけて、`{ }`（ちゅうかっこ）の中に「はこ」の名前を入力すると、その中身を文章に入れられますよ。\n\n```python\nage = 10\nprint(f'私は{age}歳です')\n```\nこれで「私は10歳です」と表示されます！"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`age` というはこに `10` を入れて、f-stringを使って「私は10歳です」と表示してみましょう。\n\n**入力するコードのヒント：**\n```python\nage = 10\nprint(f'私は{age}歳です')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ageというはこに 10 を入れる\nage = 10\n# 文章の中に age の中身を入れる\nprint(f'私は{age}歳です')",
      "holeyCode": "# ageというはこに 10 を入れる\nage = ___\n# 文章の中に age の中身を入れる\nprint(f'私は{___}歳です')",
      "correctLines": [
        "# ageというはこに 10 を入れる",
        "age = 10",
        "# 文章の中に age の中身を入れる",
        "print(f'私は{age}歳です')"
      ],
      "lineHints": [
        null,
        "age = 10 と入力しましょう。",
        null,
        "{ } のなかに、はこの名前 age を入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "たくさんのデータをまとめる「リスト」",
      "description": "「リスト」というものを使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リストの番号は「0」から！",
          "content": "# 番号で指定しましょう\n\nリストの中身を取り出すときは、何番目かを指定します。\nでも気をつけてください！プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n```python\nanimals = ['いぬ', 'ねこ']\nprint(animals[0]) # 「いぬ」が表示されます\nprint(animals[1]) # 「ねこ」が表示されます\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`colors` というリストを作って、2番目のデータ（番号は1）を表示してみましょう。\n\n**入力するコードのヒント：**\n```python\ncolors = ['あか', 'あお']\nprint(colors[1])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# colors というリストを作る\ncolors = ['あか', 'あお']\n# 2番目のデータ（1番）を出す\nprint(colors[1])",
      "holeyCode": "# colors というリストを作る\ncolors = ['___', '___']\n# 2番目のデータ（1番）を出す\nprint(colors[___])",
      "correctLines": [
        "# colors というリストを作る",
        "colors = ['あか', 'あお']",
        "# 2番目のデータ（1番）を出す",
        "print(colors[1])"
      ],
      "lineHints": [
        null,
        "['あか', 'あお'] と入力しましょう。",
        null,
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "あか",
          "あお"
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "あお\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "もし〜なら（if）",
          "content": "# コロン（:）を忘れずに\n\nPythonでは、`if` のあとに条件を入力して、最後に `:`（コロン）をつけるのがルールです。\n\n```python\nif score > 80:\n    print('すごい！')\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`score` が `80` より大きいときに「ごうかく！」と表示してみましょう。\n\n**入力するコードのヒント：**\n```python\nscore = 100\nif score > 80:\n    print('ごうかく！')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# score に 100 を入れる\nscore = 100\n# もし 80 より大きかったら\nif score > 80:\n    print('ごうかく！')",
      "holeyCode": "# score に 100 を入れる\nscore = ___\n# もし 80 より大きかったら\nif score ___ 80:\n    print('___')",
      "correctLines": [
        "# score に 100 を入れる",
        "score = 100",
        "# もし 80 より大きかったら",
        "if score > 80:",
        "    print('ごうかく！')"
      ],
      "lineHints": [
        null,
        "score = 100 と入力しましょう。",
        null,
        "`>` を使います。さいごに `:` を忘れないでください！",
        "`print('ごうかく！')` と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "functions": [
          "print"
        ],
        "operators": [
          ">
        ],
        "strings": [
          "ごうかく！"
        ],
        "numbers": [
          "100"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ごうかく！\n"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "そうじゃなければ（else）",
          "content": "# else の使い方\n\n条件にあてはまらなかったときの動きは `else:` を使って書きますよ。\n\n```python\nage = 18\nif age >= 20:\n    print('おとな')\nelse:\n    print('こども')\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`age` に `10` を入れて、`20` さい以上かどうかで表示を変えてみましょう。\n\n**入力するコードのヒント：**\n```python\nage = 10\nif age >= 20:\n    print('おとな')\nelse:\n    print('こども')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# age に 10 を入れる\nage = 10\n# 条件で分ける\nif age >= 20:\n    print('おとな')\nelse:\n    print('こども')",
      "holeyCode": "# age に 10 を入れる\nage = ___\n# 条件で分ける\nif age >= 20:\n    print('おとな')\nelse:\n    print('___')",
      "correctLines": [
        "# age に 10 を入れる",
        "age = 10",
        "# 条件で分ける",
        "if age >= 20:",
        "    print('おとな')",
        "else:",
        "    print('こども')"
      ],
      "lineHints": [
        null,
        "age = 10 と入力しましょう。",
        null,
        null,
        null,
        "else: と入力しましょう。 `:` を忘れないでください。",
        "print('こども') と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "こども"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こども\n"
        }
      ]
    },
    {
      "title": "ぐるぐる回す for文",
      "description": "リストに入っているたくさんのデータを、一つずつ順番に表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "くりかえし（for）",
          "content": "# 順番に取り出しましょう\n\nリストの中身を全部見たいときは `for` を使うと便利ですよ。\n\n```python\nfor 変数名 in リスト名:\n    やりたいこと\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`names` というリストの中身を、ループで一つずつ表示してみましょう。\n\n**入力するコードのヒント：**\n```python\nnames = ['たろう', 'はなこ']\nfor name in names:\n    print(name)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# リストを作る\nnames = ['たろう', 'はなこ']\n# 順番に取り出す\nfor name in names:\n    print(name)",
      "holeyCode": "# リストを作る\nnames = ['たろう', 'はなこ']\n# 順番に取り出す\nfor ___ in ___:\n    print(___)",
      "correctLines": [
        "# リストを作る",
        "names = ['たろう', 'はなこ']",
        "# 順番に取り出す",
        "for name in names:",
        "    print(name)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "for name in names: と入力します。さいごの `:` も忘れないでください！",
        "取り出した名前（name）を print で表示します。"
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
          "expected_output": "たろう\nはなこ\n"
        }
      ]
    },
    {
      "title": "名前で探す「じしょ」辞書",
      "description": "「辞書（じしょ）」というものを使うと、名前（キー）を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "キーワードで取り出しましょう",
          "content": "# キー : あたい\n\n辞書は、キーワードとデータのセットになっていますよ。\n\n```python\nuser = {'name': 'たろう'}\nprint(user['name']) # 「たろう」が表示されます\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`user` という辞書を作って、`'name'` の中身を表示してみましょう。\n\n**入力するコードのヒント：**\n```python\nuser = {'name': 'たろう'}\nprint(user['name'])\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 辞書を作る\nuser = {'name': 'たろう'}\n# 中身を出す\nprint(user['name'])",
      "holeyCode": "# 辞書を作る\nuser = {'___': '___'}\n# 中身を出す\nprint(user['___'])",
      "correctLines": [
        "# 辞書を作る",
        "user = {'name': 'たろう'}",
        "# 中身を出す",
        "print(user['name'])"
      ],
      "lineHints": [
        null,
        "{'name': 'たろう'} と入力しましょう。",
        null,
        "['name'] をつけて、特定のデータを取り出します。"
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
          "たろう"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "たろう\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう",
      "description": "自分だけの新しい関数（かんすう）を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数を定義（ていぎ）する",
          "content": "# def のあとに名前をつける\n\n関数を新しく作るときは `def` を使いますよ。作った関数は、あとで呼び出すと動くのです。\n\n```python\ndef aisatsu():\n    print('おはよう！')\n\naisatsu() # これで関数が動きますよ！\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`greet` という関数を定義（ていぎ）して、あとで呼び出してみましょう。\n\n**入力するコードのヒント：**\n```python\ndef greet():\n    print('こんにちは')\n\ngreet()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# greet という関数を定義する\ndef greet():\n    print('こんにちは')\n# 関数を呼び出す\ngreet()",
      "holeyCode": "# greet という関数を定義する\ndef ___():\n    print('___')\n# 関数を呼び出す\n___()",
      "correctLines": [
        "# greet という関数を定義する",
        "def greet():",
        "    print('こんにちは')",
        "# 関数を呼び出す",
        "greet()"
      ],
      "lineHints": [
        null,
        "def greet(): と入力して、関数を定義します。",
        "print('こんにちは') と入力しましょう。",
        null,
        "greet() と入力して、関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet",
          "print"
        ],
        "strings": [
          "こんにちは"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    }
  ]
}