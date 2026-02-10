export const pythonData = {
  "language": "python",
  "lessonId": "python-1",
  "lessonTitle": "Python (パイソン) に挑戦！",
  "lessonDescription": "プログラミング言語「Python（パイソン）」のきほんを学びましょう。コンピュータに指示（しじ）を出して、動かす方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "Pythonの世界へようこそ！",
      "content": "Python（パイソン）は、人工知能の開発からWebサイト作りまで、世界中で使われている大人気の言葉です。\\n\\n**Pythonの特徴：**\\n- **読みやすい：** シンプルな書き方で、初心者でもすぐに覚えられます。\\n- **多機能：** たくさんの「道具箱（ライブラリ）」があり、やりたいことがすぐに実現できます。\\n- **将来性：** データ分析やAIの分野では欠かせないスキルです。"
    },
    {
      "title": "文字を出す print",
      "content": "コンピュータにメッセージを表示させるには `print`（プリント）を使います。\\n\\n```python\\nprint(\"こんにちは\")\\n```\\n\\n文字列は `\" \"` または `' '` で囲むのがルールです。"
    }
  ],
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
          "メッセージを画面に表示するための print 関数を入力します。"
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
      "holeyCode": "# nameというはこに 'Python' を入れる\\n___ = '___'\\n# はこの中身を画面に出す\\n___(___)",
      "correctLines": [
          "# nameというはこに 'Python' を入れる",
          "name = 'Python'",
          "# はこの中身を画面に出す",
          "print(name)"
        ],
      "lineHints": [
          null,
          "nameに文字列'Python'を代入します。",
          null,
          "printでnameを出力します。"
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
      "holeyCode": "# xというはこに 10 を入れる\\n___ = ___\\n# yというはこに 5 を入れる\\n___ = ___\\n# x と y をたした答えを出す\\n___(___ + ___)",
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
          "xに10を代入します。",
          null,
          "yに5を代入します。",
          null,
          "printでx+yを出力します。"
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
          "割り算の「あまり」を計算する % 記号を print の中で使います。"
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
      "holeyCode": "# scoreに50を入れる\\n___ = ___\\n# 10点プラスする\\n___ ___ ___\\n# scoreを表示\\n___(___)",
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
          "scoreに50を代入します。",
          null,
          "score += 10で10を加算します。",
          null,
          "printでscoreを出力します。"
        ],
        "candidates": {
          "variables": ["score"],
          "operators": ["+="],
          "functions": ["print"],
          "numbers": ["50", "10"]
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
      "holeyCode": "# ageというはこに 10 を入れる\\n___ = ___\\n# f-stringを使ってメッセージを出す\\n___(f'私は{___}歳です')",
      "correctLines": [
          "# ageというはこに 10 を入れる",
          "age = 10",
          "# f-stringを使ってメッセージを出す",
          "print(f'私は{age}歳です')"
        ],
      "lineHints": [
          null,
          "ageに10を代入します。",
          null,
          "printでf-stringを使い、{age}に変数を埋め込みます。"
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
      "holeyCode": "# colorsに['あか', 'あお']を代入\\n___ = ['___', '___']\\n# colors[1]を表示\\n___(___[___])",
      "correctLines": [
          "# colorsに['あか', 'あお']を代入",
          "colors = ['あか', 'あお']",
          "# colors[1]を表示",
          "print(colors[1])"
        ],
      "lineHints": [
          null,
          "colorsに['あか', 'あお']を代入します。",
          null,
          "printでcolors[1]を出力します。"
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
      "holeyCode": "# score に 100 を入れる\\n___ = ___\\n# もし 80 より大きかったら\\n___ ___ ___ ___:\\n    # 「ごうかく！」と表示する\\n    ___('___')",
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
          "scoreに100を代入します。",
          null,
          "if score > 80:で条件分岐します。",
          null,
          "printで'ごうかく！'を出力します。"
        ],
        "candidates": {
          "keywords": ["if"],
          "variables": ["score"],
          "functions": ["print"],
          "operators": [">"],
          "strings": ["ごうかく！"],
          "numbers": ["80", "100"]
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
      "holeyCode": "# age に 10 を入れる\\n___ = ___\\n# 20以上かを比較する演算子\\n___ ___ ___ ___:\\n    # 20歳以上のときのメッセージ（'おとな'）\\n    ___('___')\\n# 「そうでなければ」のキーワード\\n___:\\n    # それ以外の場合（'こども'）\\n    ___('___')",
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
          "ageに10を代入します。",
          null,
          "if age >= 20:で条件分岐します。",
          null,
          "printで'おとな'を出力します。",
          null,
          "elseで条件を満たさない場合の処理を定義します。",
          null,
          "printで'こども'を出力します。"
        ],
        "candidates": {
          "keywords": ["if", "else"],
          "variables": ["age"],
          "functions": ["print"],
          "operators": [">="],
          "strings": ["おとな", "こども"],
          "numbers": ["10", "20"]
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
      "holeyCode": "# scoreに85を入れる\\n___ = ___\\n# 80以上 かつ 100以下 ならメッセージを出す\\n___ ___ ___ ___ ___ ___ ___ ___:\\n    # 「ごうかく！」と出力\\n    ___('___')",
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
          "scoreに85を代入します。",
          null,
          "if score >= 80 and score <= 100:で複合条件を判定します。",
          null,
          "printで'ごうかく！'を出力します。"
        ],
        "candidates": {
          "keywords": ["if", "and"],
          "variables": ["score"],
          "functions": ["print"],
          "operators": [">=", "<="],
          "strings": ["ごうかく！"],
          "numbers": ["80", "85", "100"]
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
      "holeyCode": "# namesに['たろう', 'はなこ']を代入\\n___ = ['___', '___']\\n# forでnamesをループ\\n___ ___ ___ ___:\\n    # nameを表示\\n    ___(___)",
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
          "namesに['たろう', 'はなこ']を代入します。",
          null,
          "for name in names:でループします。",
          null,
          "printでnameを出力します。"
        ],
        "candidates": {
          "keywords": ["for", "in"],
          "variables": ["name", "names"],
          "functions": ["print"],
          "strings": ["たろう", "はなこ"]
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
      "holeyCode": "# colorsに{'みかん': 'オレンジ'}を代入\\n___ = {'___': '___'}\\n# colors['みかん']を表示\\n___(___['___'])",
      "correctLines": [
          "# colorsに{'みかん': 'オレンジ'}を代入",
          "colors = {'みかん': 'オレンジ'}",
          "# colors['みかん']を表示",
          "print(colors['みかん'])"
        ],
      "lineHints": [
          null,
          "colorsに{'みかん': 'オレンジ'}を代入します。",
          null,
          "printでcolors['みかん']を出力します。"
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
      "holeyCode": "# greet という関数を定義する（'こんにちは'と表示）\\n___ ___():\\n    # 'こんにちは'と表示\\n    ___('___')\\n# greet関数を呼び出す\\n___()",
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
          "def greet():で関数を定義します。",
          null,
          "printで'こんにちは'を出力します。",
          null,
          "greet()で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": ["def"],
          "functions": ["greet", "print"],
          "strings": ["こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
};
