export const pythonData = {
  "language": "python",
  "lessonId": "python-1",
  "lessonTitle": "Python (パイソン) に挑戦！",
  "lessonDescription": "プログラミング言語「Python（パイソン）」のきほんを学びましょう。コンピュータに指示（しじ）を出して、動かす方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "correctCode": "# 画面に「Hello, World!」と出す関数\\nprint('Hello, World!')",
      "holeyCode": "# 画面に「Hello, World!」と出す関数\\n___('Hello, World!')",
      "correctLines": [
          "# 画面に「Hello, World!」と出す関数",
          "print('Hello, World!')"
        ],
      "lineHints": [
          null,
          "指定された文字列を画面に出力する関数を使用します。"
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
            "expected_output": "Hello, World!\\n"
          }
        ]
      },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "correctCode": "# nameというはこに 'Python' を入れる\\nname = 'Python'\\n# はこの中身を画面に出す\\nprint(name)",
      "holeyCode": "# nameというはこに 'Python' を入れる\\nname = '___'\\n# はこの中身を画面に出す\\n___(name)",
      "correctLines": [
          "# nameというはこに 'Python' を入れる",
          "name = 'Python'",
          "# はこの中身を画面に出す",
          "print(name)"
        ],
      "lineHints": [
          null,
          "変数に文字列データを代入（保存）します。",
          null,
          "変数の内容を画面に出力します。"
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
            "expected_output": "Python\\n"
          }
        ]
      },
    {
      "title": "コンピュータで計算（けいさん）しましょう",
      "correctCode": "# xというはこに 10 を入れる\\nx = 10\\n# yというはこに 5 を入れる\\ny = 5\\n# x と y をたした答えを出す\\nprint(x + y)",
      "holeyCode": "# xというはこに 10 を入れる\\nx = ___\\n# yというはこに 5 を入れる\\ny = ___\\n# x と y をたした答えを出す\\n___(x + y)",
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
          "変数に数値を代入（保存）します。",
          null,
          "変数に数値を代入（保存）します。",
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
          ],
          "others": ["10", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "# 10 を 3 で割ったあまりを出力する\\nprint(10 % 3)",
      "holeyCode": "# 10 を 3 で割ったあまりを出力する\\n___(10 % 3)",
      "correctLines": [
          "# 10 を 3 で割ったあまりを出力する",
          "print(10 % 3)"
        ],
      "lineHints": [
          null,
          "あまりを求める % 演算子を使います。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "# scoreに50を入れる\\nscore = 50\\n# 10点プラスする\\nscore += 10\\n# scoreを表示\\nprint(score)",
      "holeyCode": "# scoreに50を入れる\\nscore = ___\\n# 10点プラスする\\nscore += ___\\n# scoreを表示\\n___(score)",
      "correctLines": [
          "# scoreに50を入れる",
          "score = 50",
          "# 10点プラスする",
          "score += 10",
          "# scoreを表示",
          "print(score)"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "numbers": [
            "50",
            "10"
          ],
          "others": ["print", "50", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "correctCode": "# ageというはこに 10 を入れる\\nage = 10\\n# f-stringを使ってメッセージを出す\\nprint(f'私は{age}歳です')",
      "holeyCode": "# ageというはこに 10 を入れる\\nage = ___\\n# f-stringを使ってメッセージを出す\\n___(f'私は{age}歳です')",
      "correctLines": [
          "# ageというはこに 10 を入れる",
          "age = 10",
          "# f-stringを使ってメッセージを出す",
          "print(f'私は{age}歳です')"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "print(f'私は{age}歳です') と入力しましょう。"
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
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "たくさんのデータをまとめましょう「リスト」",
      "correctCode": "# colorsに['あか', 'あお']を代入\\ncolors = ['あか', 'あお']\\n# colors[1]を表示\\nprint(colors[1])",
      "holeyCode": "# colorsに['あか', 'あお']を代入\\n___ = ['あか', 'あお']\\n# colors[1]を表示\\n___(colors[1])",
      "correctLines": [
          "# colorsに['あか', 'あお']を代入",
          "colors = ['あか', 'あお']",
          "# colors[1]を表示",
          "print(colors[1])"
        ],
      "lineHints": [
          null,
          "['あか', 'あお'] と入力しましょう。",
          null,
          "2番目のデータはインデックス1です。 `colors[1]` と入力してください。"
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
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「もし〜なら」で分ける if文",
      "correctCode": "# score に 100 を入れる\\nscore = 100\\n# もし 80 より大きかったら\\nif score > 80:\\n    # 「ごうかく！」と表示する\\n    print('ごうかく！')",
      "holeyCode": "# score に 100 を入れる\\nscore = ___\\n# もし 80 より大きかったら\\nif score ___ 80:\\n    # 「ごうかく！」と表示する\\n    ___('ごうかく！')",
      "correctLines": [
          "# score に 100 を入れる",
          "score = 100",
          "# もし 80 より大きかったら",
          "if score > 80:",
          "    # 「ごうかく！」と表示する",
          "    print('ごうかく！')"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。"
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
            "ごうかく！"
          ],
          "numbers": [
            "100"
          ],
          "others": ["100"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく！\\n"
          }
        ]
      },
    {
      "title": "ちがう場合は？ if-else文",
      "correctCode": "# age に 10 を入れる\\nage = 10\\n# 20以上かを比較する演算子\\nif age >= 20:\\n    # 20歳以上のときのメッセージ（'おとな'）\\n    print('おとな')\\n# 「そうでなければ」のキーワード\\nelse:\\n    # それ以外の場合（'こども'）\\n    print('こども')",
      "holeyCode": "# age に 10 を入れる\\nage = ___\\n# 20以上かを比較する演算子\\nif age ___ 20:\\n    # 20歳以上のときのメッセージ（'おとな'）\\n    ___('おとな')\\n# 「そうでなければ」のキーワード\\n___:\\n    # それ以外の場合（'こども'）\\n    ___('こども')",
      "correctLines": [
          "# age に 10 を入れる",
          "age = 10",
          "# 20以上かを比較する演算子",
          "if age >= 20:",
          "    # 20歳以上のときのメッセージ（'おとな'）",
          "    print('おとな')",
          "# 「そうでなければ」のキーワード",
          "else:",
          "    # それ以外の場合（'こども'）",
          "    print('こども')"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。",
          null,
          "もし条件が満たされなかった場合に実行する処理を記述します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "functions": [
            "print"
          ],
          "strings": [
            "おとな",
            "こども"
          ],
          "numbers": [
            "10"
          ],
          "others": [">=", "else", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こども\\n"
          }
        ]
      },
    {
      "title": "論理演算子（and, or）",
      "correctCode": "# scoreに85を入れる\\nscore = 85\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif score >= 80 and score <= 100:\\n    # 「ごうかく！」と出力\\n    print('ごうかく！')",
      "holeyCode": "# scoreに85を入れる\\nscore = ___\\n# 80以上 かつ 100以下 ならメッセージを出す\\nif score ___ 80 and score <= 100:\\n    # 「ごうかく！」と出力\\n    ___('ごうかく！')",
      "correctLines": [
          "# scoreに85を入れる",
          "score = 85",
          "# 80以上 かつ 100以下 ならメッセージを出す",
          "if score >= 80 and score <= 100:",
          "    # 「ごうかく！」と出力",
          "    print('ごうかく！')"
        ],
      "lineHints": [
          null,
          "変数に数値を代入（保存）します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。"
        ],
        "candidates": {
          "keywords": [
            "and",
            "or"
          ],
          "numbers": [
            "85"
          ],
          "strings": [
            "ごうかく！"
          ],
          "others": [">=", "print", "85"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく！\\n"
          }
        ]
      },
    {
      "title": "ぐるぐる回す for文",
      "correctCode": "# namesに['たろう', 'はなこ']を代入\\nnames = ['たろう', 'はなこ']\\n# forでnamesをループ\\nfor name in names:\\n    # nameを表示\\n    print(name)",
      "holeyCode": "# namesに['たろう', 'はなこ']を代入\\n___ = ['たろう', 'はなこ']\\n# forでnamesをループ\\nfor name in ___:\\n    # nameを表示\\n    ___(name)",
      "correctLines": [
          "# namesに['たろう', 'はなこ']を代入",
          "names = ['たろう', 'はなこ']",
          "# forでnamesをループ",
          "for name in names:",
          "    # nameを表示",
          "    print(name)"
        ],
      "lineHints": [
          null,
          "リストを格納する変数名を入力します。",
          null,
          "ループで回すリストの変数名を入力します。",
          null,
          "変数の内容を画面に出力する関数を使用します。"
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "functions": [
            "print"
          ],
          "others": [
            "たろう",
            "はなこ"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\nはなこ\\n"
          }
        ]
      },
    {
      "title": "名前で探しましょう「じしょ」辞書",
      "correctCode": "# colorsに{'みかん': 'オレンジ'}を代入\\ncolors = {'みかん': 'オレンジ'}\\n# colors['みかん']を表示\\nprint(colors['みかん'])",
      "holeyCode": "# colorsに{'みかん': 'オレンジ'}を代入\\n___ = {'みかん': 'オレンジ'}\\n# colors['みかん']を表示\\n___(colors['みかん'])",
      "correctLines": [
          "# colorsに{'みかん': 'オレンジ'}を代入",
          "colors = {'みかん': 'オレンジ'}",
          "# colors['みかん']を表示",
          "print(colors['みかん'])"
        ],
      "lineHints": [
          null,
          "{ 'みかん': 'オレンジ' } と入力しましょう。",
          null,
          "['みかん'] をつけて、特定のデータを取り出します。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "print"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      },
    {
      "title": "自分だけの関数を作ろう",
      "correctCode": "# greet という関数を定義する（'こんにちは'と表示）\\ndef greet():\\n    # 'こんにちは'と表示\\n    print('こんにちは')\\n# greet関数を呼び出す\\ngreet()",
      "holeyCode": "# greet という関数を定義する（'こんにちは'と表示）\\ndef ___():\\n    # 'こんにちは'と表示\\n    ___('こんにちは')\\n# greet関数を呼び出す\\n___()",
      "correctLines": [
          "# greet という関数を定義する（'こんにちは'と表示）",
          "def greet():",
          "    # 'こんにちは'と表示",
          "    print('こんにちは')",
          "# greet関数を呼び出す",
          "greet()"
        ],
      "lineHints": [
          null,
          "関数（greet）を新しく定義します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。",
          null,
          "関数（greet）を呼び出して実行します。"
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
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}