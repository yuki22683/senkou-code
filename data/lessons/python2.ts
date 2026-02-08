export const pythonData2 = {
  "language": "python",
  "lessonId": "python-2",
  "lessonTitle": "Python II - ステップアップ！",
  "lessonDescription": "Pythonの基本をマスターしたら、次のステップへ進みましょう！関数の引数、戻り値、リスト内包表記など、より実践的なスキルを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "引数（ひきすう）を使った関数",
      "correctCode": "# 名前を受け取ってあいさつするhello関数を定義\\ndef hello(name):\\n    # f'Hello, {name}!'を出力\\n    print(f'Hello, {name}!')\\n\\n# 'Python'を渡してhello関数を呼び出す\\nhello('Python')",
      "holeyCode": "# 名前を受け取ってあいさつするhello関数を定義\\ndef ___(name):\\n    # f'Hello, {name}!'を出力\\n    ___(f'Hello, {name}!')\\n___\\n# 'Python'を渡してhello関数を呼び出す\\nhello('___')",
      "correctLines": [
          "# 名前を受け取ってあいさつするhello関数を定義",
          "def hello(name):",
          "    # f'Hello, {name}!'を出力",
          "    print(f'Hello, {name}!')",
          "",
          "# 'Python'を渡してhello関数を呼び出す",
          "hello('Python')"
        ],
      "lineHints": [
          null,
          "関数（hello）を新しく定義します。",
          null,
          "f-string の中で `name` を使います。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "名前"
          ],
          "functions": [
            "こんにちは",
            "print"
          ],
          "strings": [
            "Python",
            "こんにちは"
          ],
          "others": ["hello('Python')", "", "hello"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, Python!\\n"
          }
        ]
      },
    {
      "title": "デフォルト引数",
      "correctCode": "# デフォルト引数を持つsay_hi関数を定義\\ndef say_hi(name='世界'):\\n    # 「Hi, 名前!」の形式で表示\\n    print(f'Hi, {name}!')\\n\\n# 引数なしでsay_hi関数を呼び出す\\nsay_hi()",
      "holeyCode": "# デフォルト引数を持つsay_hi関数を定義\\ndef ___(name='世界'):\\n    # 「Hi, 名前!」の形式で表示\\n    ___(f'Hi, {name}!')\\n___\\n# 引数なしでsay_hi関数を呼び出す\\n___()",
      "correctLines": [
          "# デフォルト引数を持つsay_hi関数を定義",
          "def say_hi(name='世界'):",
          "    # 「Hi, 名前!」の形式で表示",
          "    print(f'Hi, {name}!')",
          "",
          "# 引数なしでsay_hi関数を呼び出す",
          "say_hi()"
        ],
      "lineHints": [
          null,
          "関数（say_hi）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "関数（say_hi）を呼び出して実行する。"
        ],
        "candidates": {
          "variables": [
            "名前"
          ],
          "strings": [
            "'世界'",
            "世界"
          ],
          "others": ["say_hi", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hi, 世界!\\n"
          }
        ]
      },
    {
      "title": "戻り値（return）",
      "correctCode": "# 2つの数を足して返すadd関数を定義\\ndef add(a, b):\\n    # 計算結果をreturnで返す\\n    return a + b\\n\\n# add(10, 20)の結果をresultに代入\\nresult = add(10, 20)\\n# resultを表示\\nprint(result)",
      "holeyCode": "# 2つの数を足して返すadd関数を定義\\ndef ___(a, b):\\n    # 計算結果をreturnで返す\\n    return a + ___\\n___\\n# add(10, 20)の結果をresultに代入\\nresult = add(___, 20)\\n# resultを表示\\n___(result)",
      "correctLines": [
          "# 2つの数を足して返すadd関数を定義",
          "def add(a, b):",
          "    # 計算結果をreturnで返す",
          "    return a + b",
          "",
          "# add(10, 20)の結果をresultに代入",
          "result = add(10, 20)",
          "# resultを表示",
          "print(result)"
        ],
      "lineHints": [
          null,
          "`return` を使って計算結果を返します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "variables": [
            "a",
            "b",
            "result"
          ],
          "others": ["10", "20", "add", "print", "b", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\\n"
          }
        ]
      },
    {
      "title": "複数の戻り値",
      "correctCode": "# 2つの値を返すcalc関数を定義\\ndef calc(x):\\n    # x+1 と x*2 を返す\\n    return x + 1, x * 2\\n\\n# calc(5)の結果をa, bで受け取る\\na, b = calc(5)\\n# aを表示\\nprint(a)\\n# bを表示\\nprint(b)",
      "holeyCode": "# 2つの値を返すcalc関数を定義\\ndef ___(x):\\n    # x+1 と x*2 を返す\\n    return x + ___, x * 2\\n___\\n# calc(5)の結果をa, bで受け取る\\na, b = calc(___)\\n# aを表示\\n___(a)\\n# bを表示\\n___(b)",
      "correctLines": [
          "# 2つの値を返すcalc関数を定義",
          "def calc(x):",
          "    # x+1 と x*2 を返す",
          "    return x + 1, x * 2",
          "",
          "# calc(5)の結果をa, bで受け取る",
          "a, b = calc(5)",
          "# aを表示",
          "print(a)",
          "# bを表示",
          "print(b)"
        ],
      "lineHints": [
          null,
          "かけ算の記号 `*` を使います。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "operators": [
            "*",
            "+",
            "-",
            "/"
          ],
          "others": ["5", "a", "b", "calc", "1", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "6\\n10\\n"
          }
        ]
      },
    {
      "title": "文字列スライス",
      "correctCode": "# 文字列を用意（'プログラミング'）\\nword = 'プログラミング'\\n# 最初の4文字（0から4の手前まで）を取り出す\\nprint(word[0:4])",
      "holeyCode": "# 文字列を用意（'プログラミング'）\\nword = '___'\\n# 最初の4文字（0から4の手前まで）を取り出す\\n___(word[0:4])",
      "correctLines": [
          "# 文字列を用意（'プログラミング'）",
          "word = 'プログラミング'",
          "# 最初の4文字（0から4の手前まで）を取り出す",
          "print(word[0:4])"
        ],
      "lineHints": [
          null,
          "開始は `0`、終了は `4` です。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "numbers": [
            "0",
            "4",
            "1",
            "3"
          ],
          "others": ["プログラミング", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Prog\\n"
          }
        ]
      },
    {
      "title": "range() で数列を作る",
      "correctCode": "# 1から5までの数を順番に表示\\nfor i in range(1, 6):\\n    # 変数iを出力\\n    print(i)",
      "holeyCode": "# 1から5までの数を順番に表示\\nfor i in range(___, 6):\\n    # 変数iを出力\\n    ___(i)",
      "correctLines": [
          "# 1から5までの数を順番に表示",
          "for i in range(1, 6):",
          "    # 変数iを出力",
          "    print(i)"
        ],
      "lineHints": [
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "functions": [
            "range",
            "list",
            "len"
          ],
          "variables": [
            "i"
          ],
          "others": ["1", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n4\\n5\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "# 初期値を設定\\ntotal = 0\\n# totalに10を足す\\ntotal += 10\\n# totalに5を足す\\ntotal += 5\\n# totalを表示\\nprint(total)",
      "holeyCode": "# 初期値を設定\\ntotal = ___\\n# totalに10を足す\\ntotal += ___\\n# totalに5を足す\\ntotal += ___\\n# totalを表示\\n___(total)",
      "correctLines": [
          "# 初期値を設定",
          "total = 0",
          "# totalに10を足す",
          "total += 10",
          "# totalに5を足す",
          "total += 5",
          "# totalを表示",
          "print(total)"
        ],
      "lineHints": [
          null,
          "変数totalを宣言し、0を設定します。",
          null,
          "変数totalに10を加算して再代入する。",
          null,
          "変数totalに5を加算して再代入する。",
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
          "others": ["0", "10", "5", "print", "0", "10", "5"]
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
      "correctCode": "# 10を3で割った余りを計算\\nremainder = 10 % 3\\n# remainderを表示\\nprint(remainder)",
      "holeyCode": "# 10を3で割った余りを計算\\nremainder = ___ % 3\\n# remainderを表示\\n___(remainder)",
      "correctLines": [
          "# 10を3で割った余りを計算",
          "remainder = 10 % 3",
          "# remainderを表示",
          "print(remainder)"
        ],
      "lineHints": [
          null,
          "`%` で余りを求めます。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "//",
            "*"
          ],
          "others": ["10", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "論理演算子（and, or, not）",
      "correctCode": "# 年齢を設定\\nage = 25\\n# 20以上かつ30未満かどうか判定\\nif age >= 20 and age < 30:\\n    print('20代です')",
      "holeyCode": "# 年齢を設定\\nage = ___\\n# 20以上かつ30未満かどうか判定\\nif age ___ 20 and age < 30:\\n    ___('20代です')",
      "correctLines": [
          "# 年齢を設定",
          "age = 25",
          "# 20以上かつ30未満かどうか判定",
          "if age >= 20 and age < 30:",
          "    print('20代です')"
        ],
      "lineHints": [
          null,
          "変数ageを宣言し、25を設定します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "指定された文字列を画面に出力する関数を使用します。"
        ],
        "candidates": {
          "keywords": [
            "and",
            "or",
            "not"
          ],
          "others": ["25", ">=", "print", "25"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20代です\\n"
          }
        ]
      },
    {
      "title": "リスト内包表記",
      "correctCode": "# 1から5までの数を2倍にしたリストを作る\\ndoubled = [x * 2 for x in range(1, 6)]\\nprint(doubled)",
      "holeyCode": "# 1から5までの数を2倍にしたリストを作る\\ndoubled = [x * ___ for x in range(1, 6)]\\n___(doubled)",
      "correctLines": [
          "# 1から5までの数を2倍にしたリストを作る",
          "doubled = [x * 2 for x in range(1, 6)]",
          "print(doubled)"
        ],
      "lineHints": [
          null,
          "内包表記では `for` キーワードを使います。",
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "for",
            "in",
            "if"
          ],
          "others": ["2", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[2, 4, 6, 8, 10]\\n"
          }
        ]
      },
    {
      "title": "条件付きリスト内包表記",
      "correctCode": "# 1から10で3の倍数だけを集める\\nmultiples = [n for n in range(1, 11) if n % 3 == 0]\\nprint(multiples)",
      "holeyCode": "# 1から10で3の倍数だけを集める\\nmultiples = [n for n in range(___, 11) if n % 3 == 0]\\n___(multiples)",
      "correctLines": [
          "# 1から10で3の倍数だけを集める",
          "multiples = [n for n in range(1, 11) if n % 3 == 0]",
          "print(multiples)"
        ],
      "lineHints": [
          null,
          "条件を追加するには `if` を使います。",
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "for",
            "in"
          ],
          "others": ["1", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 6, 9]\\n"
          }
        ]
      },
    {
      "title": "例外処理（try-except）",
      "correctCode": "# エラーが起きる可能性のある処理\\ntry:\\n    # 文字列'abc'を数値に変換（エラー発生）\\n    num = int('abc')\\n# 例外をキャッチするキーワード\\nexcept:\\n    # 'エラー'と出力\\n    print('エラー')",
      "holeyCode": "# エラーが起きる可能性のある処理\\n___:\\n    # 文字列'abc'を数値に変換（エラー発生）\\n    num = int('___')\\n# 例外をキャッチするキーワード\\n___:\\n    # 'エラー'と出力\\n    ___('エラー')",
      "correctLines": [
          "# エラーが起きる可能性のある処理",
          "try:",
          "    # 文字列'abc'を数値に変換（エラー発生）",
          "    num = int('abc')",
          "# 例外をキャッチするキーワード",
          "except:",
          "    # 'エラー'と出力",
          "    print('エラー')"
        ],
      "lineHints": [
          null,
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          "`except` キーワードで例外をキャッチします。",
          null,
          "ここを正しく入力してください。",
          null,
          "指定された文字列を画面に出力する関数を使用します。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "except",
            "finally"
          ],
          "others": ["abc", "エラー", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー\\n"
          }
        ]
      },
    {
      "title": "クラスの基本",
      "correctCode": "# Catクラスを定義\\nclass Cat:\\n    # meowメソッドを定義（第一引数はself）\\n    def meow(self):\\n        # 'ニャー！'を表示\\n        print('ニャー！')\\n\\n# Catのインスタンスを作成しcatに代入\\ncat = Cat()\\n# catのmeowメソッドを呼び出す\\ncat.meow()",
      "holeyCode": "# Catクラスを定義\\nclass ___:\\n    # meowメソッドを定義（第一引数はself）\\n    def ___(self):\\n        # 'ニャー！'を表示\\n        ___('ニャー！')\\n___\\n# Catのインスタンスを作成しcatに代入\\ncat = ___()\\n# catのmeowメソッドを呼び出す\\ncat.___()",
      "correctLines": [
          "# Catクラスを定義",
          "class Cat:",
          "    # meowメソッドを定義（第一引数はself）",
          "    def meow(self):",
          "        # 'ニャー！'を表示",
          "        print('ニャー！')",
          "",
          "# Catのインスタンスを作成しcatに代入",
          "cat = Cat()",
          "# catのmeowメソッドを呼び出す",
          "cat.meow()"
        ],
      "lineHints": [
          null,
          "関数（meow）を新しく定義します。",
          null,
          "関数（meow）を新しく定義します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "self",
            "cat"
          ],
          "keywords": [
            "class",
            "def"
          ],
          "others": ["Cat", "ニャー！", "meow", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ニャー！\\n"
          }
        ]
      },
    {
      "title": "コンストラクタ（__init__）",
      "correctCode": "# Robotクラスを定義\\nclass Robot:\\n    # __init__メソッド（コンストラクタ）を定義\\n    def __init__(self, name):\\n        # self.nameにnameを代入\\n        self.name = name\\n    \\n    # say_nameメソッドを定義\\n    def say_name(self):\\n        # self.nameを表示\\n        print(self.name)\\n\\n# Robotのインスタンスを作成（名前は'R2D2'）しrに代入\\nr = Robot('R2D2')\\n# rのsay_nameメソッドを呼び出す\\nr.say_name()",
      "holeyCode": "# Robotクラスを定義\\nclass ___:\\n    # __init__メソッド（コンストラクタ）を定義\\n    def ___(self, ___):\\n        # self.nameにnameを代入\\n        self.___ = ___\\n    ___\\n    # say_nameメソッドを定義\\n    def ___(self):\\n        # self.nameを表示\\n        ___(self.___)\\n___\\n# Robotのインスタンスを作成（名前は'R2D2'）しrに代入\\n___ = ___('___')\\n# rのsay_nameメソッドを呼び出す\\n___.___()",
      "correctLines": [
          "# Robotクラスを定義",
          "class Robot:",
          "    # __init__メソッド（コンストラクタ）を定義",
          "    def __init__(self, name):",
          "        # self.nameにnameを代入",
          "        self.name = name",
          "    ",
          "    # say_nameメソッドを定義",
          "    def say_name(self):",
          "        # self.nameを表示",
          "        print(self.name)",
          "",
          "# Robotのインスタンスを作成（名前は'R2D2'）しrに代入",
          "r = Robot('R2D2')",
          "# rのsay_nameメソッドを呼び出す",
          "r.say_name()"
        ],
      "lineHints": [
          null,
          "class で Robot クラスを定義します。",
          null,
          "def __init__ でコンストラクタを定義します。",
          null,
          "self.name に引数の name を代入します。",
          "この行を正しく入力してください。",
          null,
          "def say_name でメソッドを定義します。",
          null,
          "print で self.name を表示します。",
          null,
          null,
          "Robotオブジェクトを作成し r に代入します。",
          null,
          "r の say_name メソッドを呼び出します。"
        ],
        "candidates": {
          "variables": [
            "self",
            "名前",
            "r"
          ],
          "others": ["Robot", "__init__", "R2D2", "say_name", "print", "2", "名前", "", "name"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "R2D2\\n"
          }
        ]
      }
  ]
};
