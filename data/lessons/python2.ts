export const pythonData2 = {
  "language": "python",
  "lessonId": "python-2",
  "lessonTitle": "Python II - ステップアップ！",
  "lessonDescription": "Pythonの基本をマスターしたら、次のステップへ進みましょう！関数の引数、戻り値、リスト内包表記など、より実践的なスキルを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "引数（ひきすう）とは？",
      "content": "関数を定義するとき、カッコの中に「材料」を受け取る場所を作れます。これを **引数（ひきすう）** と呼びます。\\n\\n```python\\ndef greet(name):\\n    print(f'こんにちは、{name}さん！')\\n\\ngreet('太郎')\\n```\\n=> こんにちは、太郎さん！"
    },
    {
      "title": "戻り値（return）",
      "content": "`return` を使うと、関数の中で計算した結果を呼び出し元に「返す」ことができます。\\n\\n```python\\ndef add(a, b):\\n    return a + b\\n\\nresult = add(3, 5) # result に 8 が入る\\n```"
    }
  ],
  "exercises": [
    {
      "title": "引数（ひきすう）を使った関数",
      "correctCode": "# 名前を受け取ってあいさつする関数\\ndef hello(name):\\n    # f-stringで名前を表示\\n    print(f'こんにちは、{name}！')\\n\\n# 関数を呼び出す\\nhello('Python')",
      "holeyCode": "# 名前を受け取ってあいさつする関数\\ndef ___(name):\\n    # f-stringで名前を表示\\n    ___(f'こんにちは、{name}！')\\n\\n# 関数を呼び出す\\n___('Python')",
      "correctLines": [
        "# 名前を受け取ってあいさつする関数",
        "def hello(name):",
        "    # f-stringで名前を表示",
        "    print(f'こんにちは、{name}！')",
        "",
        "# 関数を呼び出す",
        "hello('Python')"
      ],
      "lineHints": [
        null,
        "defキーワードで関数を定義します。",
        null,
        "f-stringを使って変数を埋め込んだメッセージを出力します。",
        null,
        null,
        "定義した関数 hello を呼び出します。"
      ],
      "candidates": {
        "variables": ["name"],
        "functions": ["hello", "print"],
        "strings": ["Python"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは、Python！\\n"
        }
      ]
    },
    {
      "title": "デフォルト引数",
      "correctCode": "# デフォルト引数を持つsay_hi関数\\ndef say_hi(name='世界'):\\n    # やあ、名前！と表示\\n    print(f'やあ、{name}！')\\n\\n# 引数なしで呼び出す\\nsay_hi()",
      "holeyCode": "# デフォルト引数を持つsay_hi関数\\ndef ___(name='世界'):\\n    # やあ、名前！と表示\\n    ___(f'やあ、{name}！')\\n\\n# 引数なしで呼び出す\\n___()",
      "correctLines": [
        "# デフォルト引数を持つsay_hi関数",
        "def say_hi(name='世界'):",
        "    # やあ、名前！と表示",
        "    print(f'やあ、{name}！')",
        "",
        "# 引数なしで呼び出す",
        "say_hi()"
      ],
      "lineHints": [
        null,
        "デフォルト引数を持つ関数を定義します。",
        null,
        "f-stringで引数を埋め込んだメッセージを出力します。",
        null,
        null,
        "定義した関数 say_hi を引数なしで呼び出します。"
      ],
      "candidates": {
        "functions": ["say_hi", "print"],
        "strings": ["世界"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "やあ、世界！\\n"
        }
      ]
    },
    {
      "title": "戻り値（return）",
      "correctCode": "# 2つの数を足して返すadd関数\\ndef add(a, b):\\n    # 計算結果を返す\\n    return a + b\\n\\n# 結果を変数resultに入れて表示\\nresult = add(10, 20)\\nprint(result)",
      "holeyCode": "# 2つの数を足して返すadd関数\\ndef ___(a, b):\\n    # 計算結果を返す\\n    ___ a + b\\n\\n# 結果を変数resultに入れて表示\\nresult = ___(10, 20)\\n___(result)",
      "correctLines": [
        "# 2つの数を足して返すadd関数",
        "def add(a, b):",
        "    # 計算結果を返す",
        "    return a + b",
        "",
        "# 結果を変数resultに入れて表示",
        "result = add(10, 20)",
        "print(result)"
      ],
      "lineHints": [
        null,
        "2つの引数を受け取る関数を定義します。",
        null,
        "計算結果を呼び出し元に返します。",
        null,
        null,
        "add関数を呼び出して結果を変数 result に代入します。",
        "関数の戻り値を出力します。"
      ],
      "candidates": {
        "keywords": ["return"],
        "functions": ["add", "print"],
        "others": ["result"]
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
      "correctCode": "# 2つの値を返すcalc関数\\ndef calc(x):\\n    # カンマで区切って複数の値を返す\\n    return x + 1, x * 2\\n\\n# 2つの変数a, bで受け取る\\na, b = calc(5)\\nprint(a)\\nprint(b)",
      "holeyCode": "# 2つの値を返すcalc関数\\ndef ___(x):\\n    # カンマで区切って複数の値を返す\\n    return x + 1, x ___ 2\\n\\n# 2つの変数a, bで受け取る\\na, b = ___(5)\\n___(a)\\n___(b)",
      "correctLines": [
        "# 2つの値を返すcalc関数",
        "def calc(x):",
        "    # カンマで区切って複数の値を返す",
        "    return x + 1, x * 2",
        "",
        "# 2つの変数a, bで受け取る",
        "a, b = calc(5)",
        "print(a)",
        "print(b)"
      ],
      "lineHints": [
        null,
        "複数の戻り値を返す関数を定義します。",
        null,
        "乗算演算子を使って2倍の値を計算します。",
        null,
        null,
        "calc関数を呼び出して結果を a と b に代入します。",
        "戻り値の1つ目を出力します。",
        "戻り値の2つ目を出力します。"
      ],
      "candidates": {
        "operators": ["*"],
        "functions": ["calc", "print"]
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
      "correctCode": "# wordに'Python'を代入\\nword = 'Python'\\n# 最初の2文字（インデックス0から2の手前まで）を表示\\nprint(word[0:2])",
      "holeyCode": "# wordに'Python'を代入\\nword = '___'\\n# 最初の2文字（インデックス0から2の手前まで）を表示\\n___(word[0:___])",
      "correctLines": [
        "# wordに'Python'を代入",
        "word = 'Python'",
        "# 最初の2文字（インデックス0から2の手前まで）を表示",
        "print(word[0:2])"
      ],
      "lineHints": [
        null,
        "スライス対象の文字列を変数に代入します。",
        null,
        "[開始:終了]でスライスした結果を出力します。"
      ],
      "candidates": {
        "strings": ["Python"],
        "functions": ["print"],
        "numbers": ["2", "0"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Py\\n"
        }
      ]
    },
    {
      "title": "リスト内包表記",
      "correctCode": "# 1から5までの数を2倍にしたリストdoubledを作る\\ndoubled = [x * 2 for x in range(1, 6)]\\n# リストを表示\\nprint(doubled)",
      "holeyCode": "# 1から5までの数を2倍にしたリストdoubledを作る\\ndoubled = [x * 2 ___ x in range(1, 6)]\\n# リストを表示\\n___(doubled)",
      "correctLines": [
        "# 1から5までの数を2倍にしたリストdoubledを作る",
        "doubled = [x * 2 for x in range(1, 6)]",
        "# リストを表示",
        "print(doubled)"
      ],
      "lineHints": [
        null,
        "内包表記で各要素を順番に処理します。",
        null,
        "結果のリストを出力します。"
      ],
      "candidates": {
        "keywords": ["for"],
        "functions": ["print"]
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
      "correctCode": "# 1から10で偶数（2の倍数）だけを集めるevensを作る\\nevens = [n for n in range(1, 11) if n % 2 == 0]\\n# リストを表示\\nprint(evens)",
      "holeyCode": "# 1から10で偶数（2の倍数）だけを集めるevensを作る\\nevens = [n for n in range(1, 11) ___ n % 2 == 0]\\n# リストを表示\\n___(evens)",
      "correctLines": [
        "# 1から10で偶数（2の倍数）だけを集めるevensを作る",
        "evens = [n for n in range(1, 11) if n % 2 == 0]",
        "# リストを表示",
        "print(evens)"
      ],
      "lineHints": [
        null,
        "条件を満たす要素だけをフィルタリングします。",
        null,
        "結果のリストを出力します。"
      ],
      "candidates": {
        "keywords": ["if"],
        "functions": ["print"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[2, 4, 6, 8, 10]\\n"
        }
      ]
    },
    {
      "title": "例外処理（try-except）",
      "correctCode": "# エラーが起きる可能性のある処理をtryに入れる\\ntry:\\n    # 文字列を数値に変換（エラーになる）\\n    num = int('abc')\\n# エラーが起きたときの処理をexceptに入れる\\nexcept:\\n    # 'エラー'と表示\\n    print('エラー')",
      "holeyCode": "# エラーが起きる可能性のある処理をtryに入れる\\n___:\\n    # 文字列を数値に変換（エラーになる）\\n    num = int('abc')\\n# エラーが起きたときの処理をexceptに入れる\\n___:\\n    # 'エラー'と表示\\n    ___('エラー')",
      "correctLines": [
        "# エラーが起きる可能性のある処理をtryに入れる",
        "try:",
        "    # 文字列を数値に変換（エラーになる）",
        "    num = int('abc')",
        "# エラーが起きたときの処理をexceptに入れる",
        "except:",
        "    # 'エラー'と表示",
        "    print('エラー')"
      ],
      "lineHints": [
        null,
        "例外が発生する可能性のあるコードを囲みます。",
        null,
        null,
        null,
        "例外が発生したときの処理を定義します。",
        null,
        "例外時に実行される出力処理です。"
      ],
      "candidates": {
        "keywords": ["try", "except"],
        "functions": ["print"]
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
      "correctCode": "# Catクラスを定義\\nclass Cat:\\n    # meowメソッドを定義\\n    def meow(self):\\n        # 'ニャー！'を表示\\n        print('ニャー！')\\n\\n# インスタンスcatを作って呼び出す\\ncat = Cat()\\ncat.meow()",
      "holeyCode": "# Catクラスを定義\\nclass ___:\\n    # meowメソッドを定義\\n    def ___(self):\\n        # 'ニャー！'を表示\\n        ___('ニャー！')\\n\\n# インスタンスcatを作って呼び出す\\ncat = ___()\\ncat.___()",
      "correctLines": [
        "# Catクラスを定義",
        "class Cat:",
        "    # meowメソッドを定義",
        "    def meow(self):",
        "        # 'ニャー！'を表示",
        "        print('ニャー！')",
        "",
        "# インスタンスcatを作って呼び出す",
        "cat = Cat()",
        "cat.meow()"
      ],
      "lineHints": [
        null,
        "classキーワードでクラスを定義します。",
        null,
        "クラス内でメソッドを定義します。",
        null,
        "メソッド内で実行される出力処理です。",
        null,
        null,
        "クラス Cat を呼び出してインスタンスを生成します。",
        "インスタンスの meow メソッドを呼び出します。"
      ],
      "candidates": {
        "variables": ["self"],
        "functions": ["meow", "Cat", "print"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ニャー！\\n"
        }
      ]
    }
  ]
};
