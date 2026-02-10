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
    },
    {
      "title": "リスト内包表記",
      "content": "**リスト内包表記**は、forループを1行で書ける便利な書き方です。\\n\\n```python\\n# 従来のforループ\\nnums = []\\nfor x in range(1, 4):\\n    nums.append(x * 2)\\n# nums = [2, 4, 6]\\n\\n# リスト内包表記なら1行！\\nnums = [x * 2 for x in range(1, 4)]\\n# nums = [2, 4, 6]\\n```\\n\\n**構文**: `[式 for 変数 in イテラブル]`\\n- `式`: 各要素に適用する処理（例: `x * 2`）\\n- `変数`: ループ変数（例: `x`）\\n- `イテラブル`: 繰り返し対象（例: `range(1, 4)`）"
    }
  ],
  "exercises": [
    {
      "title": "引数（ひきすう）を使った関数",
      "correctCode": "# 名前を受け取ってあいさつする関数\\ndef hello(name):\\n    # f-stringで名前を表示\\n    print(f'こんにちは、{name}！')\\n\\n# 関数を呼び出す\\nhello('Python')",
      "holeyCode": "# 名前を受け取ってあいさつする関数\\ndef ___(___):\\n    # f-stringで名前を表示\\n    ___(f'こんにちは、{___}！')\\n\\n# 関数を呼び出す\\n___('___')",
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
        "hello関数を定義し、引数nameを受け取ります。",
        null,
        "printでf-stringを出力し、{name}で変数を埋め込みます。",
        null,
        null,
        "hello関数に文字列Pythonを渡して呼び出します。"
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
      "correctCode": "# デフォルト引数を持つsay_hello関数\\ndef say_hello(name='World'):\\n    # Hello, 名前!と表示\\n    print(f'Hello, {name}!')\\n\\n# 引数なしで呼び出す\\nsay_hello()",
      "holeyCode": "# デフォルト引数を持つsay_hello関数\\ndef ___(___='___'):\\n    # Hello, 名前!と表示\\n    ___(f'Hello, {___}!')\\n\\n# 引数なしで呼び出す\\n___()",
      "correctLines": [
        "# デフォルト引数を持つsay_hello関数",
        "def say_hello(name='World'):",
        "    # Hello, 名前!と表示",
        "    print(f'Hello, {name}!')",
        "",
        "# 引数なしで呼び出す",
        "say_hello()"
      ],
      "lineHints": [
        null,
        "say_hello関数を定義し、引数nameにデフォルト値'World'を設定します。",
        null,
        "printでf-stringを出力し、{name}で変数を埋め込みます。",
        null,
        null,
        "say_hello関数を引数なしで呼び出します。"
      ],
      "candidates": {
        "variables": ["name"],
        "functions": ["say_hello", "print"],
        "strings": ["World"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\\n"
        }
      ]
    },
    {
      "title": "戻り値（return）",
      "correctCode": "# 2つの数を足して返すadd関数\\ndef add(a, b):\\n    # aとbの和を返す\\n    return a + b\\n\\n# add関数を呼び出し（第1引数に10, 第2引数に20）\\nresult = add(10, 20)\\nprint(result)",
      "holeyCode": "# 2つの数を足して返すadd関数\\ndef ___(___, ___):\\n    # aとbの和を返す\\n    ___ ___ + ___\\n\\n# add関数を呼び出し（第1引数に10, 第2引数に20）\\n___ = ___(___, ___)\\n___(___)",
      "correctLines": [
        "# 2つの数を足して返すadd関数",
        "def add(a, b):",
        "    # aとbの和を返す",
        "    return a + b",
        "",
        "# add関数を呼び出し（第1引数に10, 第2引数に20）",
        "result = add(10, 20)",
        "print(result)"
      ],
      "lineHints": [
        null,
        "add関数を定義し、引数a, bを受け取ります。",
        null,
        "returnでa + bの計算結果を返します。",
        null,
        null,
        "resultにadd(10, 20)の戻り値を代入します。",
        "printでresultを出力します。"
      ],
      "candidates": {
        "keywords": ["return"],
        "variables": ["a", "b", "result"],
        "functions": ["add", "print"],
        "others": ["10", "20"]
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
      "correctCode": "# 2つの値を返すcalc関数\\ndef calc(x):\\n    # x+1, x*2の順で返す\\n    return x + 1, x * 2\\n\\n# 2つの変数a, bで受け取る\\na, b = calc(5)\\nprint(a)\\nprint(b)",
      "holeyCode": "# 2つの値を返すcalc関数\\ndef ___(___):\\n    # x+1, x*2の順で返す\\n    ___ ___ + 1, ___ ___ 2\\n\\n# 2つの変数a, bで受け取る\\n___, ___ = ___(___)\\n___(___)\\n___(___)",
      "correctLines": [
        "# 2つの値を返すcalc関数",
        "def calc(x):",
        "    # x+1, x*2の順で返す",
        "    return x + 1, x * 2",
        "",
        "# 2つの変数a, bで受け取る",
        "a, b = calc(5)",
        "print(a)",
        "print(b)"
      ],
      "lineHints": [
        null,
        "calc関数を定義し、引数xを受け取ります。",
        null,
        "returnでx+1とx*2の2つの値を返します。",
        null,
        null,
        "a, bにcalc(5)の戻り値を代入します。",
        "printでaを出力します。",
        "printでbを出力します。"
      ],
      "candidates": {
        "keywords": ["return"],
        "operators": ["*"],
        "variables": ["x", "a", "b"],
        "functions": ["calc", "print"],
        "others": ["5"]
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
      "holeyCode": "# wordに'Python'を代入\\n___ = '___'\\n# 最初の2文字（インデックス0から2の手前まで）を表示\\n___(___[___:___])",
      "correctLines": [
        "# wordに'Python'を代入",
        "word = 'Python'",
        "# 最初の2文字（インデックス0から2の手前まで）を表示",
        "print(word[0:2])"
      ],
      "lineHints": [
        null,
        "wordに文字列'Python'を代入します。",
        null,
        "printでword[0:2]のスライス結果を出力します。"
      ],
      "candidates": {
        "variables": ["word"],
        "strings": ["Python"],
        "functions": ["print"],
        "numbers": ["0", "2"]
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
      "holeyCode": "# 1から5までの数を2倍にしたリストdoubledを作る\\n___ = [___ * 2 ___ ___ in ___(___, ___)]\\n# リストを表示\\n___(___)",
      "correctLines": [
        "# 1から5までの数を2倍にしたリストdoubledを作る",
        "doubled = [x * 2 for x in range(1, 6)]",
        "# リストを表示",
        "print(doubled)"
      ],
      "lineHints": [
        null,
        "doubledにリスト内包表記[x*2 for x in range(1,6)]を代入します。",
        null,
        "printでdoubledを出力します。"
      ],
      "candidates": {
        "keywords": ["for"],
        "variables": ["doubled", "x"],
        "functions": ["print", "range"],
        "numbers": ["1", "6"]
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
      "holeyCode": "# 1から10で偶数（2の倍数）だけを集めるevensを作る\\n___ = [___ for ___ in ___(___, ___) ___ ___ % ___ == ___]\\n# リストを表示\\n___(___)",
      "correctLines": [
        "# 1から10で偶数（2の倍数）だけを集めるevensを作る",
        "evens = [n for n in range(1, 11) if n % 2 == 0]",
        "# リストを表示",
        "print(evens)"
      ],
      "lineHints": [
        null,
        "evensに条件付きリスト内包表記[n for n in range(1,11) if n%2==0]を代入します。",
        null,
        "printでevensを出力します。"
      ],
      "candidates": {
        "keywords": ["for", "if"],
        "variables": ["evens", "n"],
        "functions": ["print", "range"],
        "numbers": ["0", "1", "2", "11"]
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
      "holeyCode": "# エラーが起きる可能性のある処理をtryに入れる\\n___:\\n    # 文字列を数値に変換（エラーになる）\\n    ___ = ___('___')\\n# エラーが起きたときの処理をexceptに入れる\\n___:\\n    # 'エラー'と表示\\n    ___('___')",
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
        "numにint('abc')の結果を代入しようとしてエラーが発生します。",
        null,
        "例外が発生したときの処理を定義します。",
        null,
        "例外時に実行される出力処理です。"
      ],
      "candidates": {
        "keywords": ["try", "except"],
        "variables": ["num"],
        "functions": ["print", "int"],
        "strings": ["abc", "エラー"]
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
      "holeyCode": "# Catクラスを定義\\n___ ___:\\n    # meowメソッドを定義\\n    ___ ___(___):\\n        # 'ニャー！'を表示\\n        ___('___')\\n\\n# インスタンスcatを作って呼び出す\\n___ = ___()\\n___.___()",
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
        "classキーワードでCatクラスを定義します。",
        null,
        "defキーワードでmeowメソッドを定義し、selfを受け取ります。",
        null,
        "printで'ニャー！'を出力します。",
        null,
        null,
        "catにCat()のインスタンスを代入します。",
        "cat.meow()でメソッドを呼び出します。"
      ],
      "candidates": {
        "keywords": ["class", "def"],
        "variables": ["self", "cat"],
        "functions": ["meow", "Cat", "print"],
        "strings": ["ニャー！"]
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
