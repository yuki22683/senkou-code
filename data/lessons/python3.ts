export const pythonData3 = {
  "language": "python",
  "lessonId": "python-3",
  "lessonTitle": "Python III - 上級テクニック",
  "lessonDescription": "Pythonの高度な機能を学びます。ラムダ式、ジェネレータ、デコレータなど、プロ級のテクニックを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "短い関数 ラムダ式",
      "content": "名前をつけずに1行で書ける関数を**ラムダ式**（無名関数）と呼びます。\\n\\n```python\\nadd = lambda x, y: x + y\\nprint(add(10, 5)) # 15\\n```\\n\\n`lambda 引数: 処理` の形式で書き、簡単な処理をサッと書きたいときに便利です。"
    },
    {
      "title": "番号付きで繰り返す enumerate",
      "content": "ループを回すときに、要素と一緒にインデックス（何番目か）を取得できます。\\n\\n```python\\nnames = ['Python', 'Ruby']\\nfor i, name in enumerate(names):\\n    print(f\"{i}: {name}\")\\n```\\n\\n番号を自分で管理する必要がなくなります。"
    }
  ],
  "exercises": [
    {
      "title": "ラムダ式（無名関数）",
      "correctCode": "# 2乗を計算するlambda式をsquareに代入\\nsquare = lambda x: x ** 2\\n# square(5)の結果を表示\\nprint(square(5))",
      "holeyCode": "# 2乗を計算するlambda式をsquareに代入\\n___ = lambda ___: ___ ___ ___\\n# square(5)の結果を表示\\n___(___(___))",
      "correctLines": [
          "# 2乗を計算するlambda式をsquareに代入",
          "square = lambda x: x ** 2",
          "# square(5)の結果を表示",
          "print(square(5))"
        ],
      "lineHints": [
          null,
          "引数をべき乗する無名関数（ラムダ式）を変数に代入します。",
          null,
          "定義したラムダ式を5で呼び出し、結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "lambda"
          ],
          "operators": ["**"],
          "others": ["square", "print", "x", "2", "5"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "*args（可変長引数）",
      "correctCode": "# 全ての数値から最大値を求めるfind_max関数を定義\\ndef find_max(*args):\\n    # 最大値を最初の引数で初期化\\n    max_val = args[0]\\n    # 渡された全ての引数をループで処理\\n    for n in args:\\n        # より大きい値があれば更新\\n        if n > max_val:\\n            max_val = n\\n    # 最終的な最大値を返す\\n    return max_val\\n\\n# find_max(3, 7, 2, 9, 5)の結果を表示\\nprint(find_max(3, 7, 2, 9, 5))",
      "holeyCode": "# 全ての数値から最大値を求めるfind_max関数を定義\\ndef ___(*___):\\n    # 最大値を最初の引数で初期化\\n    ___ = ___[___]\\n    # 渡された全ての引数をループで処理\\n    for ___ in ___:\\n        # より大きい値があれば更新\\n        if ___ ___ ___:\\n            ___ = ___\\n    # 最終的な最大値を返す\\n    return ___\\n\\n# find_max(3, 7, 2, 9, 5)の結果を表示\\n___(___(3, 7, 2, 9, 5))",
      "correctLines": [
          "# 全ての数値から最大値を求めるfind_max関数を定義",
          "def find_max(*args):",
          "    # 最大値を最初の引数で初期化",
          "    max_val = args[0]",
          "    # 渡された全ての引数をループで処理",
          "    for n in args:",
          "        # より大きい値があれば更新",
          "        if n > max_val:",
          "            max_val = n",
          "    # 最終的な最大値を返す",
          "    return max_val",
          "",
          "# find_max(3, 7, 2, 9, 5)の結果を表示",
          "print(find_max(3, 7, 2, 9, 5))"
        ],
      "lineHints": [
          null,
          "任意の数の引数を受け取れる可変長引数関数を定義します。",
          null,
          "最大値の候補を最初の引数で初期化します。",
          null,
          "渡された全ての引数に対してループ処理を行います。",
          null,
          "現在の値が暫定最大値より大きいか比較します。",
          "より大きい値が見つかった場合、最大値を更新します。",
          null,
          "最終的に求まった最大値を返却します。",
          null,
          null,
          "結果を画面に出力して確認します。"
        ],
        "candidates": {
          "variables": ["args", "n", "max_val"],
          "others": ["find_max", "0", ">", "print", "*"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "9\\n"
          }
        ]
      },
    {
      "title": "**kwargs（キーワード引数）",
      "correctCode": "# キーワード引数を受け取って表示するprint_info関数を定義\\ndef print_info(**kwargs):\\n    # 1番目の k にキー、2番目の v に値が入る\\n    for k, v in kwargs.items():\\n        # キーと値をイコールで繋いで表示\\n        print(f'{k} = {v}')\\n\\n# print_info(x=10, y=20)を実行\\nprint_info(x=10, y=20)",
      "holeyCode": "# キーワード引数を受け取って表示するprint_info関数を定義\\ndef ___(___):\\n    # 1番目の k にキー、2番目の v に値が入る\\n    for ___, ___ in ___.___():\\n        # キーと値をイコールで繋いで表示\\n        ___(f'{___} = {___}')\\n\\n# print_info(x=10, y=20)を実行\\n___(___=___, ___=___)",
      "correctLines": [
          "# キーワード引数を受け取って表示するprint_info関数を定義",
          "def print_info(**kwargs):",
          "    # 1番目の k にキー、2番目の v に値が入る",
          "    for k, v in kwargs.items():",
          "        # キーと値をイコールで繋いで表示",
          "        print(f'{k} = {v}')",
          "",
          "# print_info(x=10, y=20)を実行",
          "print_info(x=10, y=20)"
        ],
      "lineHints": [
          null,
          "キーワード引数を辞書として受け取る関数を定義します。",
          null,
          "辞書のキーと値のペアを順番に取り出すループです。",
          null,
          "キーと値を整形して画面に出力します。",
          null,
          null,
          "定義した関数をキーワード引数で呼び出します。"
        ],
        "candidates": {
          "others": ["print_info", "**kwargs", "items", "print", "k", "v", "kwargs", "x", "y", "10", "20"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "x = 10\\ny = 20\\n"
          }
        ]
      },
    {
      "title": "enumerate で番号付きループ",
      "correctCode": "# 赤、緑、青の3色を含むリストを作成\\ncolors = ['赤', '緑', '青']\\n# 1番目の i に番号、2番目の color に要素が入る\\nfor i, color in enumerate(colors):\\n    # 「番号: 色」の形式で画面に出力\\n    print(f'{i}: {color}')",
      "holeyCode": "# 赤、緑、青の3色を含むリストを作成\\n___ = ['___', '___', '___']\\n# 1番目の i に番号、2番目の color に要素が入る\\nfor ___, ___ in ___(___):\\n    # 「番号: 色」の形式で画面に出力\\n    ___(f'{___}: {___}')",
      "correctLines": [
          "# 赤、緑、青の3色を含むリストを作成",
          "colors = ['赤', '緑', '青']",
          "# 1番目の i に番号、2番目の color に要素が入る",
          "for i, color in enumerate(colors):",
          "    # 「番号: 色」の形式で画面に出力",
          "    print(f'{i}: {color}')"
        ],
      "lineHints": [
          null,
          "3つの色名を含むリストを作成します。",
          null,
          "インデックスと要素を同時に取得するenumerate関数を使用します。",
          null,
          "インデックスと色名を整形して出力します。"
        ],
        "candidates": {
          "functions": [
            "enumerate"
          ],
          "others": ["colors", "赤", "緑", "青", "i", "color", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0: 赤\\n1: 緑\\n2: 青\\n"
          }
        ]
      },
    {
      "title": "zip で複数リストを同時にループ",
      "correctCode": "# 英単語 a, b, c のリストを定義\\nkeys = ['a', 'b', 'c']\\n# 数値 1, 2, 3 のリストを定義\\nvalues = [1, 2, 3]\\n# 1番目の k, 2番目の v で、zip の引数も keys, values の順\\nfor k, v in zip(keys, values):\\n    # 「キー: 値」の形式で画面に出力\\n    print(f'{k}: {v}')",
      "holeyCode": "# 英単語 a, b, c のリストを定義\\n___ = ['___', '___', '___']\\n# 数値 1, 2, 3 のリストを定義\\n___ = [___, ___, ___]\\n# 1番目の k, 2番目の v で、zip の引数も keys, values の順\\nfor ___, ___ in ___(___, ___):\\n    # 「キー: 値」の形式で画面に出力\\n    ___(f'{___}: {___}')",
      "correctLines": [
          "# 英単語 a, b, c のリストを定義",
          "keys = ['a', 'b', 'c']",
          "# 数値 1, 2, 3 のリストを定義",
          "values = [1, 2, 3]",
          "# 1番目の k, 2番目の v で、zip の引数も keys, values の順",
          "for k, v in zip(keys, values):",
          "    # 「キー: 値」の形式で画面に出力",
          "    print(f'{k}: {v}')"
        ],
      "lineHints": [
          null,
          "キーとして使う英単語のリストを作成します。",
          null,
          "値として使う数値のリストを作成します。",
          null,
          "2つのリストを並行してループするzip関数を使用します。",
          null,
          "キーと値のペアを整形して出力します。"
        ],
        "candidates": {
          "functions": [
            "zip"
          ],
          "others": ["keys", "values", "a", "b", "c", "1", "2", "3", "k", "v", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "a: 1\\nb: 2\\nc: 3\\n"
          }
        ]
      },
    {
      "title": "ジェネレータ（yield）",
      "correctCode": "# 偶数を生成するeven_numbersジェネレータ関数を定義\\ndef even_numbers(n):\\n    # 指定された回数ループ\\n    for i in range(n):\\n        # i * 2（偶数）を返す\\n        yield i * 2\\n\\n# even_numbers(4)から値を取り出して表示\\nfor num in even_numbers(4):\\n    # 取り出した値を表示\\n    print(num)",
      "holeyCode": "# 偶数を生成するeven_numbersジェネレータ関数を定義\\ndef ___(___):\\n    # 指定された回数ループ\\n    for ___ in ___(___):\\n        # i * 2（偶数）を返す\\n        ___ ___ ___ ___\\n\\n# even_numbers(4)から値を取り出して表示\\nfor ___ in ___(___):\\n    # 取り出した値を表示\\n    ___(___)",
      "correctLines": [
          "# 偶数を生成するeven_numbersジェネレータ関数を定義",
          "def even_numbers(n):",
          "    # 指定された回数ループ",
          "    for i in range(n):",
          "        # i * 2（偶数）を返す",
          "        yield i * 2",
          "",
          "# even_numbers(4)から値を取り出して表示",
          "for num in even_numbers(4):",
          "    # 取り出した値を表示",
          "    print(num)"
        ],
      "lineHints": [
          null,
          "値を1つずつ生成するジェネレータ関数を定義します。",
          null,
          "指定回数だけループを繰り返すための範囲を指定します。",
          null,
          "yieldキーワードで偶数（iの2倍）を1つずつ返します。",
          null,
          null,
          "ジェネレータから4つの偶数を順番に取り出します。",
          null,
          "取り出した値を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "yield"
          ],
          "others": ["even_numbers", "range", "n", "4", "print", "i", "*", "2", "num"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n2\\n4\\n6\\n"
          }
        ]
      },
    {
      "title": "ジェネレータ式",
      "correctCode": "# numsにrangeを代入（開始に1, 終了に6）\\nnums = range(1, 6)\\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\\ntotal = sum(x * x for x in nums)\\n# 合計を表示\\nprint(total)",
      "holeyCode": "# numsにrangeを代入（開始に1, 終了に6）\\n___ = ___(___, ___)\\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\\n___ = ___(___ ___ ___ for ___ in ___)\\n# 合計を表示\\n___(___)",
      "correctLines": [
          "# numsにrangeを代入（開始に1, 終了に6）",
          "nums = range(1, 6)",
          "# ジェネレータ式で各要素の2乗を計算し、その合計を出す",
          "total = sum(x * x for x in nums)",
          "# 合計を表示",
          "print(total)"
        ],
      "lineHints": [
          null,
          "1から5までの範囲を作成してnumsに保存します。",
          null,
          "各要素を2乗して合計を計算するジェネレータ式を使用します。",
          null,
          "計算結果の合計を画面に出力します。"
        ],
        "candidates": {
          "functions": ["range", "sum"],
          "others": ["nums", "1", "6", "total", "x", "*", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "55\\n"
          }
        ]
      },
    {
      "title": "デコレータの基本",
      "correctCode": "# show_callデコレータ関数を定義\\ndef show_call(func):\\n    # 内部関数wrapperを定義\\n    def wrapper():\\n        # 実行前のメッセージを表示\\n        print('関数を呼び出します')\\n        # 本来の関数を実行\\n        func()\\n    # wrapperを返す\\n    return wrapper\\n\\n# @show_callを適用\\n@show_call\\n# greet関数を定義\\ndef greet():\\n    # 'こんにちは！'を表示\\n    print('こんにちは！')\\n\\n# greet関数を実行\\ngreet()",
      "holeyCode": "# show_callデコレータ関数を定義\\ndef ___(___) :\\n    # 内部関数wrapperを定義\\n    def ___():\\n        # 実行前のメッセージを表示\\n        ___('___')\\n        # 本来の関数を実行\\n        ___()\\n    # wrapperを返す\\n    return ___\\n\\n# @show_callを適用\\n@___\\n# greet関数を定義\\ndef ___():\\n    # 'こんにちは！'を表示\\n    ___('___')\\n\\n# greet関数を実行\\n___()",
      "correctLines": [
          "# show_callデコレータ関数を定義",
          "def show_call(func):",
          "    # 内部関数wrapperを定義",
          "    def wrapper():",
          "        # 実行前のメッセージを表示",
          "        print('関数を呼び出します')",
          "        # 本来の関数を実行",
          "        func()",
          "    # wrapperを返す",
          "    return wrapper",
          "",
          "# @show_callを適用",
          "@show_call",
          "# greet関数を定義",
          "def greet():",
          "    # 'こんにちは！'を表示",
          "    print('こんにちは！')",
          "",
          "# greet関数を実行",
          "greet()"
        ],
      "lineHints": [
          null,
          "デコレータとなる関数を定義します。元の関数を引数として受け取ります。",
          null,
          "元の関数をラップする内部関数を定義します。",
          null,
          "関数呼び出し前にメッセージを表示します。",
          null,
          "引数として受け取った元の関数を実行します。",
          null,
          "ラッパー関数を返してデコレータを完成させます。",
          null,
          null,
          "デコレータを適用する構文です。",
          null,
          "デコレータが適用される対象の関数を定義します。",
          null,
          "挨拶メッセージを画面に出力します。",
          null,
          null,
          "デコレートされた関数を呼び出します。"
        ],
        "candidates": {
          "others": ["show_call", "wrapper", "print", "func", "greet", "関数を呼び出します", "こんにちは！"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "関数を呼び出します\\nこんにちは！\\n"
          }
        ]
      },
    {
      "title": "any と all",
      "correctCode": "# 1から5までの数値リストを作成\\nnums = [1, 2, 3, 4, 5]\\n# 全要素が0より大きいか判定する関数を使用\\nresult = all(x > 0 for x in nums)\\n# 判定結果を画面に表示\\nprint(result)",
      "holeyCode": "# 1から5までの数値リストを作成\\n___ = [___, ___, ___, ___, ___]\\n# 全要素が0より大きいか判定する関数を使用\\n___ = ___(___ ___ ___ for ___ in ___)\\n# 判定結果を画面に表示\\n___(___)",
      "correctLines": [
          "# 1から5までの数値リストを作成",
          "nums = [1, 2, 3, 4, 5]",
          "# 全要素が0より大きいか判定する関数を使用",
          "result = all(x > 0 for x in nums)",
          "# 判定結果を画面に表示",
          "print(result)"
        ],
      "lineHints": [
          null,
          "1から5までの数値を含むリストを作成します。",
          null,
          "全ての要素が条件を満たすかをチェックするall関数を使用します。",
          null,
          "判定結果（TrueかFalse）を画面に出力します。"
        ],
        "candidates": {
          "functions": ["all"],
          "others": ["nums", "1", "2", "3", "4", "5", "result", "x", ">", "0", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\\n"
          }
        ]
      }
  ]
};