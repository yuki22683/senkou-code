export const pythonData3 = {
  "language": "python",
  "lessonId": "python-3",
  "lessonTitle": "Python III - 上級テクニック",
  "lessonDescription": "Pythonの高度な機能を学びます。ラムダ式、ジェネレータ、デコレータなど、プロ級のテクニックを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ラムダ式（無名関数）",
      "correctCode": "# 2乗を計算するlambda式をsquareに代入\\nsquare = lambda x: x ** 2\\n# square(5)の結果を表示\\nprint(square(5))",
      "holeyCode": "# 2乗を計算するlambda式をsquareに代入\\nsquare = lambda x: x ** ___\\n# square(5)の結果を表示\\n___(square(5))",
      "correctLines": [
          "# 2乗を計算するlambda式をsquareに代入",
          "square = lambda x: x ** 2",
          "# square(5)の結果を表示",
          "print(square(5))"
        ],
      "lineHints": [
          null,
          "lambda キーワードを使います。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "lambda",
            "def"
          ],
          "others": ["square(5", "2", "print", "2"]
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
      "holeyCode": "# 全ての数値から最大値を求めるfind_max関数を定義\\ndef ___(*args):\\n    # 最大値を最初の引数で初期化\\n    max_val = args[___]\\n    # 渡された全ての引数をループで処理\\n    for n in ___:\\n        # より大きい値があれば更新\\n        if n > ___:\\n            max_val = ___\\n    # 最終的な最大値を返す\\n    return ___\\n___\\n# find_max(3, 7, 2, 9, 5)の結果を表示\\n___(find_max(3, 7, 2, 9, 5))",
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
          "最大値を求める関数名です。",
          null,
          "タプルの最初の要素はインデックス0です。",
          null,
          "可変長引数をループ処理します。",
          null,
          "現在の最大値と比較します。",
          "より大きい値で最大値を更新します。",
          null,
          "求めた最大値を返します。",
          null,
          null,
          "結果を画面に出力する関数です。"
        ],
        "candidates": {
          "operators": [
            "*",
            "**"
          ],
          "others": ["find_max", "0", "args", "n", "max_val", "print", "n", "max_val", "", "n", "max_val", "", "n", "max_val"]
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
      "holeyCode": "# キーワード引数を受け取って表示するprint_info関数を定義\\ndef ___(**kwargs):\\n    # 1番目の k にキー、2番目の v に値が入る\\n    for k, v in kwargs.___():\\n        # キーと値をイコールで繋いで表示\\n        ___(f'{k} = {v}')\\n___\\n# print_info(x=10, y=20)を実行\\nprint_info(x=___, y=20)",
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
          "関数（print_info）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "*",
            "**"
          ],
          "others": ["kwargs.items()", "f'{k} = {v}'", "print_info(x=10, y=20)", "print_info", "items", "print", "10", ""]
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
      "holeyCode": "# 赤、緑、青の3色を含むリストを作成\\ncolors = ['赤', '緑', '___']\\n# 1番目の i に番号、2番目の color に要素が入る\\nfor i, color in enumerate(___):\\n    # 「番号: 色」の形式で画面に出力\\n    ___(f'{i}: {color}')",
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
          "enumerate でインデックスと要素を取得します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "enumerate",
            "range",
            "zip"
          ],
          "others": ["['赤', '緑', '青']", "f'{i}: {color}'", "青", "colors", "print", "en"]
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
      "holeyCode": "# 英単語 a, b, c のリストを定義\\nkeys = ['a', 'b', '___']\\n# 数値 1, 2, 3 のリストを定義\\nvalues = [___, 2, 3]\\n# 1番目の k, 2番目の v で、zip の引数も keys, values の順\\nfor k, v in zip(keys, ___):\\n    # 「キー: 値」の形式で画面に出力\\n    ___(f'{k}: {v}')",
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
          "zip で複数のリストを同時にループします。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "zip",
            "enumerate",
            "map"
          ],
          "others": ["['a', 'b', 'c']", "[1, 2, 3]", "f'{k}: {v}'", "c", "1", "values", "print"]
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
      "holeyCode": "# 偶数を生成するeven_numbersジェネレータ関数を定義\\ndef ___(n):\\n    # 指定された回数ループ\\n    for i in range(___):\\n        # i * 2（偶数）を返す\\n        yield i * ___\\n___\\n# even_numbers(4)から値を取り出して表示\\nfor num in even_numbers(___):\\n    # 取り出した値を表示\\n    ___(num)",
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
          "yield で値を1つずつ返します。",
          null,
          "繰り返し処理（ループ）を開始する。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "繰り返し処理（ループ）を開始する。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "yield",
            "return"
          ],
          "variables": [
            "num"
          ],
          "others": ["even_numbers(n)", "range(n)", "even_numbers(4)", "even_numbers", "n", "2", "4", "print", "2", ""]
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
      "holeyCode": "# 1から5までの範囲オブジェクトを作成\\nnums = range(___, 6)\\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\\ntotal = sum(x * x for x in ___)\\n# 合計を表示\\n___(total)",
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
          "for を使ってジェネレータ式を作ります。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "for",
            "in",
            "if"
          ],
          "others": ["range(1, 6)", "total", "1", "nums", "print"]
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
      "holeyCode": "# show_callデコレータ関数を定義\\ndef ___(func):\\n    # 内部関数wrapperを定義\\n    def ___():\\n        # 実行前のメッセージを表示\\n        ___('関数を呼び出します')\\n        # 本来の関数を実行\\n        ___()\\n    # wrapperを返す\\n    return ___\\n___\\n# @show_callを適用\\n@___\\n# greet関数を定義\\ndef ___():\\n    # 'こんにちは！'を表示\\n    ___('こんにちは！')\\n___\\n# greet関数を実行\\n___()",
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
          "@ でデコレータを適用します。",
          null,
          "関数（wrapper）を新しく定義します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。",
          null,
          "関数（func）を呼び出して実行する。",
          null,
          "変数の値を呼び出し元に返す（戻り値）。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "関数（greet）を新しく定義します。",
          null,
          "指定された文字列を画面に出力する関数を使用します。",
          null,
          null,
          "関数（greet）を呼び出して実行する。"
        ],
        "candidates": {
          "operators": [
            "@",
            "#",
            "$"
          ],
          "others": ["show_call(func)", "wrapper()", "'関数を呼び出します'", "func()", "wrapper", "greet()", "'Hello!'", "show_call", "print", "func", "greet", "wrapper", "", "show_call"]
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
      "holeyCode": "# 1から5までの数値リストを作成\\nnums = [___, 2, 3, 4, 5]\\n# 全要素が0より大きいか判定する関数を使用\\nresult = all(x > ___ for x in nums)\\n# 判定結果を画面に表示\\n___(result)",
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
          "all で全ての要素が条件を満たすかチェックします。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "functions": [
            "all",
            "any",
            "sum"
          ],
          "others": ["[1, 2, 3, 4, 5]", "result", "1", "0", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\\n"
          }
        ]
      }
  ]
}
