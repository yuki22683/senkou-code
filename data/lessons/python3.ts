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
      "holeyCode": "# 2乗を計算するlambda式をsquareに代入\\n___ = lambda x: x ___ 2\\n# square(5)の結果を表示\\n___(square(5))",
      "correctLines": [
          "# 2乗を計算するlambda式をsquareに代入",
          "square = lambda x: x ** 2",
          "# square(5)の結果を表示",
          "print(square(5))"
        ],
      "lineHints": [
          null,
          "lambda式を代入する変数名 square と、べき乗演算子 ** を入力します。",
          null,
          "結果を表示するための print 関数です。"
        ],
        "candidates": {
          "keywords": [
            "lambda"
          ],
          "operators": ["**"],
          "others": ["square", "print", "2"]
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
      "holeyCode": "# 全ての数値から最大値を求めるfind_max関数を定義\\ndef ___(*args):\\n    # 最大値を最初の引数で初期化\\n    max_val = args[___]\\n    # 渡された全ての引数をループで処理\\n    for n in ___:\\n        # より大きい値があれば更新\\n        if n ___ max_val:\\n            max_val = ___\\n    # 最終的な最大値を返す\\n    return ___\\n\\n# find_max(3, 7, 2, 9, 5)の結果を表示\\n___(find_max(3, 7, 2, 9, 5))",
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
          "可変長引数を受け取る関数を定義します。",
          null,
          "最初の引数の位置（インデックス0）を指定します。",
          null,
          "可変長引数の塊である args を指定します。",
          null,
          "「より大きい」を比較する演算子です。",
          "新しい最大値 n を代入します。",
          null,
          "変数 max_val を返します。",
          null,
          null,
          "結果を表示する print 関数です。"
        ],
        "candidates": {
          "variables": ["args", "n", "max_val"],
          "others": ["find_max", "0", ">", "print"]
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
      "holeyCode": "# キーワード引数を受け取って表示するprint_info関数を定義\\ndef ___(___):\\n    # 1番目の k にキー、2番目の v に値が入る\\n    for k, v in kwargs.___():\\n        # キーと値をイコールで繋いで表示\\n        ___(f'{k} = {v}')\\n\\n# print_info(x=10, y=20)を実行\\n___(x=10, y=20)",
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
          "関数名 print_info と可変長キーワード引数 **kwargs を入力します。",
          null,
          "辞書のキーと値をペアで取り出す items メソッドを呼び出します。",
          null,
          "表示のための print 関数です。",
          null,
          null,
          "定義した関数 print_info を呼び出します。"
        ],
        "candidates": {
          "others": ["print_info", "**kwargs", "items", "print"]
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
      "holeyCode": "# 赤、緑、青の3色を含むリストを作成\\ncolors = ['赤', '緑', '___']\\n# 1番目の i に番号、2番目の color に要素が入る\\nfor i, color in ___(___):\\n    # 「番号: 色」の形式で画面に出力\\n    ___(f'{i}: {color}')",
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
          "リストの3番目の色を指定します。",
          null,
          "enumerate関数にリスト colors を渡します。",
          null,
          "結果を表示する print 関数です。"
        ],
        "candidates": {
          "functions": [
            "enumerate"
          ],
          "others": ["青", "colors", "print"]
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
      "holeyCode": "# 英単語 a, b, c のリストを定義\\nkeys = ['a', 'b', '___']\\n# 数値 1, 2, 3 のリストを定義\\nvalues = [___, 2, 3]\\n# 1番目の k, 2番目の v で、zip の引数も keys, values の順\\nfor k, v in ___(___, ___):\\n    # 「キー: 値」の形式で画面に出力\\n    ___(f'{k}: {v}')",
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
          "リストの3番目の英単語を指定します。",
          null,
          "リストの最初の要素（数値）を指定します。",
          null,
          "zip関数に keys と values を渡します。",
          null,
          "結果を表示する print 関数です。"
        ],
        "candidates": {
          "functions": [
            "zip"
          ],
          "others": ["c", "1", "keys", "values", "print"]
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
      "holeyCode": "# 偶数を生成するeven_numbersジェネレータ関数を定義\\ndef ___(n):\\n    # 指定された回数ループ\\n    for i in ___(___):\\n        # i * 2（偶数）を返す\\n        ___ i * 2\\n\\n# even_numbers(4)から値を取り出して表示\\nfor num in ___(___):\\n    # 取り出した値を表示\\n    ___(num)",
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
          "yieldで値を生成するジェネレータ関数を定義します。",
          null,
          "range関数に引数 n を渡します。",
          null,
          "ジェネレータで値を生成する yield キーワードを入力します。",
          null,
          null,
          "even_numbers関数を引数 4 で呼び出します。",
          null,
          "値を表示する print 関数です。"
        ],
        "candidates": {
          "keywords": [
            "yield"
          ],
          "others": ["even_numbers", "range", "n", "4", "print"]
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
      "correctCode": "# 1から5までの範囲オブジェクトを作成\\nnums = range(1, 6)\\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\\ntotal = sum(x * x for x in nums)\\n# 合計を表示\\nprint(total)",
      "holeyCode": "# 1から5までの範囲オブジェクトを作成\\nnums = ___(___, 6)\\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\\ntotal = ___(___ * x for x in ___)\\n# 合計を表示\\n___(total)",
      "correctLines": [
          "# 1から5までの範囲オブジェクトを作成",
          "nums = range(1, 6)",
          "# ジェネレータ式で各要素の2乗を計算し、その合計を出す",
          "total = sum(x * x for x in nums)",
          "# 合計を表示",
          "print(total)"
        ],
      "lineHints": [
          null,
          "range関数で 1 からの範囲を作ります。",
          null,
          "sum関数を使ってジェネレータ式の結果を合計します。x * x で2乗を計算し、対象は nums です。",
          null,
          "結果を表示する print 関数です。"
        ],
        "candidates": {
          "functions": ["range", "sum"],
          "others": ["1", "x", "nums", "print"]
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
      "holeyCode": "# show_callデコレータ関数を定義\\ndef ___(func):\\n    # 内部関数wrapperを定義\\n    def ___():\\n        # 実行前のメッセージを表示\\n        ___('関数を呼び出します')\\n        # 本来の関数を実行\\n        ___()\\n    # wrapperを返す\\n    return ___\\n\\n# @show_callを適用\\n@___\\n# greet関数を定義\\ndef ___():\\n    # 'こんにちは！'を表示\\n    ___('こんにちは！')\\n\\n# greet関数を実行\\n___()",
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
          "関数名 show_call を定義します。",
          null,
          "内部関数名 wrapper を定義します。",
          null,
          "メッセージを出す print 関数です。",
          null,
          "引数として受け取った関数 func を呼び出します。",
          null,
          "内部関数 wrapper を返します。",
          null,
          null,
          "デコレータ @show_call を指定します。",
          null,
          "対象となる関数 greet を定義します。",
          null,
          "挨拶を出す print 関数です。",
          null,
          null,
          "関数 greet を呼び出します。"
        ],
        "candidates": {
          "others": ["show_call", "wrapper", "print", "func", "greet"]
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
      "holeyCode": "# 1から5までの数値リストを作成\\nnums = [___, 2, 3, 4, 5]\\n# 全要素が0より大きいか判定する関数を使用\\nresult = ___(___ > 0 for x in nums)\\n# 判定結果を画面に表示\\n___(result)",
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
          "リストの最初の要素（数値）を指定します。",
          null,
          "すべての要素が真であることを確認する all 関数と、判定式の x を入力します。",
          null,
          "結果を表示する print 関数です。"
        ],
        "candidates": {
          "functions": ["all"],
          "others": ["1", "x", "print"]
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