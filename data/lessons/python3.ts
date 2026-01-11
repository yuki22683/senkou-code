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
      "description": "名前のない小さな関数「ラムダ式」を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 1行で書ける関数\n\n**lambda** を使うと、名前のない小さな関数を1行で書けます。\n\n```python\n# 通常の関数\ndef double(x):\n    return x * 2\n\n# ラムダ式\ndouble = lambda x: x * 2\n```"
        },
        {
          "title": "ラムダ式の使い方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# lambda 引数: 戻り値\n\nmap や filter と組み合わせると便利です。\n\n```python\nnums = [1, 2, 3]\ndoubled = list(map(lambda x: x * 2, nums))\nprint(doubled)  # [2, 4, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 2乗を計算する無名関数を定義\nsquare = lambda x: x ** 2\n# 定義した関数に数値 5 を渡して実行結果を表示\nprint(square(5))",
      "holeyCode": "# 2乗を計算する無名関数を定義\nsquare = ___ x: x ** 2\n# 定義した関数に数値 5 を渡して実行結果を表示\nprint(___)",
      "correctLines": [
        "# 2乗を計算する無名関数を定義",
        "square = lambda x: x ** 2",
        "# 定義した関数に数値 5 を渡して実行結果を表示",
        "print(square(5))"
      ],
      "lineHints": [
        null,
        "lambda キーワードを使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["lambda", "def"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "*args（可変長引数）",
      "description": "いくつでも引数を受け取れる関数を作りましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "*args とは？",
          "image": "/illustrations/python3/args.png",
          "content": "# 複数の引数をまとめて受け取る\n\n**\\*args** を使うと、何個でも引数を受け取れます。引数はタプルとして受け取ります。\n\n```python\ndef sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3))  # 6\n```"
        },
        {
          "title": "*args の使い方",
          "image": "/illustrations/python3/args.png",
          "content": "# 引数名は何でもOK\n\n`*numbers` など、名前は自由につけられます。\n\n```python\ndef greet(*names):\n    for name in names:\n        print(f'Hello, {name}!')\n\ngreet('Alice', 'Bob', 'Charlie')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 全ての数値を受け取って合計を出す関数を定義\ndef add_all(*args):\n    # 合計値を保持する変数を初期化\n    total = 0\n    # 渡された全ての引数をループで処理\n    for n in args:\n        # 各要素を合計に加算\n        total += n\n    # 最終的な合計値を返す\n    return total\n\n# 1, 2, 3, 4 を渡して合計を表示\nprint(add_all(1, 2, 3, 4))",
      "holeyCode": "# 全ての数値を受け取って合計を出す関数を定義\ndef add_all(___args):\n    # 合計値を保持する変数を初期化\n    total = ___\n    # 渡された全ての引数をループで処理\n    for n in ___:\n        # 各要素を合計に加算\n        total += ___\n    # 最終的な合計値を返す\n    return ___\n\n# 1, 2, 3, 4 を渡して合計を表示\nprint(___)",
      "correctLines": [
        "# 全ての数値を受け取って合計を出す関数を定義",
        "def add_all(*args):",
        "    # 合計値を保持する変数を初期化",
        "    total = 0",
        "    # 渡された全ての引数をループで処理",
        "    for n in args:",
        "        # 各要素を合計に加算",
        "        total += n",
        "    # 最終的な合計値を返す",
        "    return total",
        "",
        "# 1, 2, 3, 4 を渡して合計を表示",
        "print(add_all(1, 2, 3, 4))"
      ],
      "lineHints": [
        null,
        null,
        "* を付けて可変長引数にします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["*", "**"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "**kwargs（キーワード引数）",
      "description": "名前付きの引数をいくつでも受け取りましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "**kwargs とは？",
          "image": "/illustrations/python3/kwargs.png",
          "content": "# 名前付き引数をまとめて受け取る\n\n**\\*\\*kwargs** を使うと、名前付きの引数を辞書として受け取れます。\n\n```python\ndef show_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f'{key}: {value}')\n\nshow_info(name='太郎', age=20)\n```"
        },
        {
          "title": "**kwargs の使い方",
          "image": "/illustrations/python3/kwargs.png",
          "content": "# 辞書として扱える\n\n`.items()`, `.keys()`, `.values()` などが使えます。\n\n```python\ndef create_user(**kwargs):\n    return kwargs\n\nuser = create_user(name='花子', email='hanako@example.com')\nprint(user['name'])  # 花子\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# キーワード引数を受け取って表示する関数を定義\ndef print_info(**kwargs):\n    # 1番目の k にキー、2番目の v に値が入る\n    for k, v in kwargs.items():\n        # キーと値をイコールで繋いで表示\n        print(f'{k} = {v}')\n\n# x=10, y=20 を指定して実行\nprint_info(x=10, y=20)",
      "holeyCode": "# キーワード引数を受け取って表示する関数を定義\ndef print_info(___kwargs):\n    # 1番目の k にキー、2番目の v に値が入る\n    for k, v in ___:\n        # キーと値をイコールで繋いで表示\n        print(___)\n\n# x=10, y=20 を指定して実行\n___",
      "correctLines": [
        "# キーワード引数を受け取って表示する関数を定義",
        "def print_info(**kwargs):",
        "    # 1番目の k にキー、2番目の v に値が入る",
        "    for k, v in kwargs.items():",
        "        # キーと値をイコールで繋いで表示",
        "        print(f'{k} = {v}')",
        "",
        "# x=10, y=20 を指定して実行",
        "print_info(x=10, y=20)"
      ],
      "lineHints": [
        null,
        "** を付けてキーワード引数にします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["*", "**"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "x = 10\ny = 20\n"
        }
      ]
    },
    {
      "title": "enumerate で番号付きループ",
      "description": "ループで要素と一緒にインデックスを取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "enumerate とは？",
          "image": "/illustrations/python3/enumerate.png",
          "content": "# インデックスと要素を同時に取得\n\n**enumerate** を使うと、ループで番号（インデックス）と要素を同時に取得できます。\n\n```python\nfruits = ['apple', 'banana', 'cherry']\nfor i, fruit in enumerate(fruits):\n    print(f'{i}: {fruit}')\n```"
        },
        {
          "title": "開始番号を指定",
          "image": "/illustrations/python3/enumerate.png",
          "content": "# start で開始番号を変更\n\nデフォルトは0から始まりますが、`start=1` で1から始められます。\n\n```python\nfor i, fruit in enumerate(fruits, start=1):\n    print(f'{i}番目: {fruit}')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 赤、緑、青の3色を含むリストを作成\ncolors = ['red', 'green', 'blue']\n# 1番目の i に番号、2番目の color に要素が入る\nfor i, color in enumerate(colors):\n    # 「番号: 色」の形式で画面に出力\n    print(f'{i}: {color}')",
      "holeyCode": "# 赤、緑、青の3色を含むリストを作成\ncolors = ___\n# 1番目の i に番号、2番目の color に要素が入る\nfor i, color in ___(colors):\n    # 「番号: 色」の形式で画面に出力\n    print(___)",
      "correctLines": [
        "# 赤、緑、青の3色を含むリストを作成",
        "colors = ['red', 'green', 'blue']",
        "# 1番目の i に番号、2番目の color に要素が入る",
        "for i, color in enumerate(colors):",
        "    # 「番号: 色」の形式で画面に出力",
        "    print(f'{i}: {color}')"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "enumerate でインデックスと要素を取得します。",
        null,
        null
      ],
      "candidates": {
        "functions": ["enumerate", "range", "zip"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0: red\n1: green\n2: blue\n"
        }
      ]
    },
    {
      "title": "zip で複数リストを同時にループ",
      "description": "複数のリストを同時に処理しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "zip とは？",
          "image": "/illustrations/python3/zip.png",
          "content": "# 複数のリストをまとめる\n\n**zip** を使うと、複数のリストの要素を同時に取り出せます。\n\n```python\nnames = ['Alice', 'Bob']\nages = [20, 25]\nfor name, age in zip(names, ages):\n    print(f'{name} is {age}')\n```"
        },
        {
          "title": "zip の使い方",
          "image": "/illustrations/python3/zip.png",
          "content": "# 短い方に合わせる\n\nリストの長さが違う場合、短い方に合わせて終了します。\n\n```python\na = [1, 2, 3]\nb = ['x', 'y']\nprint(list(zip(a, b)))  # [(1, 'x'), (2, 'y')]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 英単語 a, b, c のリストを定義\nkeys = ['a', 'b', 'c']\n# 数値 1, 2, 3 のリストを定義\nvalues = [1, 2, 3]\n# 1番目の k, 2番目の v で、zip の引数も keys, values の順\nfor k, v in zip(keys, values):\n    # 「キー: 値」の形式で画面に出力\n    print(f'{k}: {v}')",
      "holeyCode": "# 英単語 a, b, c のリストを定義\nkeys = ___\n# 数値 1, 2, 3 のリストを定義\nvalues = ___\n# 1番目の k, 2番目の v で、zip の引数も keys, values の順\nfor k, v in ___(keys, values):\n    # 「キー: 値」の形式で画面に出力\n    print(___)",
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
        null,
        null,
        null,
        null,
        null,
        null,
        "zip で複数のリストを同時にループします。",
        null,
        null
      ],
      "candidates": {
        "functions": ["zip", "enumerate", "map"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "a: 1\nb: 2\nc: 3\n"
        }
      ]
    },
    {
      "title": "ジェネレータ（yield）",
      "description": "メモリ効率の良いイテレータを作りましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "ジェネレータとは？",
          "image": "/illustrations/python3/yield.png",
          "content": "# yield で値を1つずつ返す\n\n**yield** を使うと、値を1つずつ返す関数が作れます。メモリ効率が良いです。\n\n```python\ndef count_up(n):\n    for i in range(n):\n        yield i\n\nfor num in count_up(3):\n    print(num)  # 0, 1, 2\n```"
        },
        {
          "title": "ジェネレータの利点",
          "image": "/illustrations/python3/yield.png",
          "content": "# 大量のデータを効率よく処理\n\nリストと違い、全データをメモリに保持しません。\n\n```python\n# メモリを使わず1億個の数を生成\ndef big_range(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 偶数を生成するジェネレータ関数を定義\ndef even_numbers(n):\n    # 指定された回数ループ\n    for i in range(n):\n        # 値を1つずつ返す\n        yield i * 2\n\n# ジェネレータから値を取り出して表示\nfor num in even_numbers(4):\n    # 取り出した値を表示\n    print(num)",
      "holeyCode": "# 偶数を生成するジェネレータ関数を定義\ndef ___:\n    # 指定された回数ループ\n    for i in ___:\n        # 値を1つずつ返す\n        ___ i * 2\n\n# ジェネレータから値を取り出して表示\nfor num in ___:\n    # 取り出した値を表示\n    print(___)",
      "correctLines": [
        "# 偶数を生成するジェネレータ関数を定義",
        "def even_numbers(n):",
        "    # 指定された回数ループ",
        "    for i in range(n):",
        "        # 値を1つずつ返す",
        "        yield i * 2",
        "",
        "# ジェネレータから値を取り出して表示",
        "for num in even_numbers(4):",
        "    # 取り出した値を表示",
        "    print(num)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "yield で値を1つずつ返します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["yield", "return"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n2\n4\n6\n"
        }
      ]
    },
    {
      "title": "ジェネレータ式",
      "description": "リスト内包表記のジェネレータ版を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ジェネレータ式とは？",
          "image": "/illustrations/python3/gen_expr.png",
          "content": "# () でジェネレータを作る\n\nリスト内包表記の `[]` を `()` に変えるとジェネレータになります。\n\n```python\n# リスト内包表記\nsquares = [x**2 for x in range(5)]\n\n# ジェネレータ式\nsquares = (x**2 for x in range(5))\n```"
        },
        {
          "title": "ジェネレータ式の使い方",
          "image": "/illustrations/python3/gen_expr.png",
          "content": "# sum や max と組み合わせる\n\n関数に直接渡すと効率的です。\n\n```python\ntotal = sum(x**2 for x in range(5))\nprint(total)  # 30\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 1から5までの範囲オブジェクトを作成\nnums = range(1, 6)\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\ntotal = sum(x * x for x in nums)\n# 合計を表示\nprint(total)",
      "holeyCode": "# 1から5までの範囲オブジェクトを作成\nnums = ___\n# ジェネレータ式で各要素の2乗を計算し、その合計を出す\ntotal = sum(x * x ___ x in nums)\n# 合計を表示\nprint(___)",
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
        null,
        null,
        "for を使ってジェネレータ式を作ります。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["for", "in", "if"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "55\n"
        }
      ]
    },
    {
      "title": "デコレータの基本",
      "description": "関数を拡張するデコレータを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "デコレータとは？",
          "image": "/illustrations/python3/decorator.png",
          "content": "# 関数を包んで機能を追加\n\n**デコレータ** は関数を受け取って、新しい関数を返す関数です。`@` で適用します。\n\n```python\ndef my_decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n        print('After')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n```"
        },
        {
          "title": "デコレータの使い方",
          "image": "/illustrations/python3/decorator.png",
          "content": "# @ で関数に適用\n\n`@decorator` を関数の上に書くだけで適用できます。\n\n```python\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()\n# Before\n# Hello!\n# After\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 関数の実行前後でメッセージを表示するデコレータを定義\ndef show_call(func):\n    # 実行内容を包む内部関数を定義\n    def wrapper():\n        # 実行前のメッセージを表示\n        print('関数を呼び出します')\n        # 本来の関数を実行\n        func()\n    # 新しく作った関数を返す\n    return wrapper\n\n# デコレータを関数に適用\n@show_call\n# 挨拶を表示する関数を定義\ndef greet():\n    # メッセージを表示\n    print('Hello!')\n\n# 関数を呼び出して実行\ngreet()",
      "holeyCode": "# 関数の実行前後でメッセージを表示するデコレータを定義\ndef ___:\n    # 実行内容を包む内部関数を定義\n    def ___:\n        # 実行前のメッセージを表示\n        print(___)\n        # 本来の関数を実行\n        ___\n    # 新しく作った関数を返す\n    return ___\n\n# デコレータを関数に適用\n___show_call\n# 挨拶を表示する関数を定義\ndef ___:\n    # メッセージを表示\n    print(___)\n\n# 関数を呼び出して実行\n___",
      "correctLines": [
        "# 関数の実行前後でメッセージを表示するデコレータを定義",
        "def show_call(func):",
        "    # 実行内容を包む内部関数を定義",
        "    def wrapper():",
        "        # 実行前のメッセージを表示",
        "        print('関数を呼び出します')",
        "        # 本来の関数を実行",
        "        func()",
        "    # 新しく作った関数を返す",
        "    return wrapper",
        "",
        "# デコレータを関数に適用",
        "@show_call",
        "# 挨拶を表示する関数を定義",
        "def greet():",
        "    # メッセージを表示",
        "    print('Hello!')",
        "",
        "# 関数を呼び出して実行",
        "greet()"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "@ でデコレータを適用します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["@", "#", "$"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "関数を呼び出します\nHello!\n"
        }
      ]
    },
    {
      "title": "any と all",
      "description": "リストの条件チェックを簡単に行いましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "any とは？",
          "image": "/illustrations/python3/any_all.png",
          "content": "# 1つでも True なら True\n\n**any** は、イテラブルの中に1つでも True があれば True を返します。\n\n```python\nnums = [0, 0, 1, 0]\nprint(any(nums))  # True\n\nprint(any(x > 5 for x in [1, 2, 10]))  # True\n```"
        },
        {
          "title": "all とは？",
          "image": "/illustrations/python3/any_all.png",
          "content": "# 全部 True なら True\n\n**all** は、イテラブルの全てが True の場合に True を返します。\n\n```python\nnums = [1, 2, 3]\nprint(all(nums))  # True\n\nprint(all(x > 0 for x in [1, 2, 3]))  # True\nprint(all(x > 0 for x in [1, -1, 3]))  # False\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 1から5までの数値リストを作成\nnums = [1, 2, 3, 4, 5]\n# 全要素が条件を満たすか判定する関数を使用\nresult = all(x > 0 for x in nums)\n# 判定結果を画面に表示\nprint(result)",
      "holeyCode": "# 1から5までの数値リストを作成\nnums = ___\n# 全要素が条件を満たすか判定する関数を使用\nresult = ___(x > 0 for x in nums)\n# 判定結果を画面に表示\nprint(___)",
      "correctLines": [
        "# 1から5までの数値リストを作成",
        "nums = [1, 2, 3, 4, 5]",
        "# 全要素が条件を満たすか判定する関数を使用",
        "result = all(x > 0 for x in nums)",
        "# 判定結果を画面に表示",
        "print(result)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "all で全ての要素が条件を満たすかチェックします。",
        null,
        null
      ],
      "candidates": {
        "functions": ["all", "any", "sum"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "True\n"
        }
      ]
    },
    {
      "title": "with文（コンテキストマネージャ）",
      "description": "リソースを安全に管理するwith文を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "with文とは？",
          "image": "/illustrations/python3/with_context.png",
          "content": "# リソースを自動で後片付け\n\n**with** を使うと、ファイルなどのリソースを自動的に閉じてくれます。\n\n```python\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# ここで自動的にファイルが閉じられる\n```"
        },
        {
          "title": "with文の利点",
          "image": "/illustrations/python3/with_context.png",
          "content": "# エラーが起きても安全\n\nエラーが発生しても、確実にリソースを解放します。\n\n```python\n# 従来の方法（close忘れの危険）\nf = open('file.txt')\ntry:\n    content = f.read()\nfinally:\n    f.close()\n\n# with文（安全で簡潔）\nwith open('file.txt') as f:\n    content = f.read()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ファイル操作を模擬するクラスを定義\nclass MockFile:\n    # ブロック開始時に呼ばれるメソッドを定義\n    def __enter__(self):\n        # 開始メッセージを表示\n        print('opened')\n        # 自身を返す\n        return self\n    # ブロック終了時に呼ばれるメソッドを定義\n    def __exit__(self, *args):\n        # 終了メッセージを表示\n        print('closed')\n\n# コンテキストマネージャを使用してブロックを開始\nwith MockFile() as f:\n    # 使用中のメッセージを表示\n    print('using')",
      "holeyCode": "# ファイル操作を模擬するクラスを定義\nclass ___:\n    # ブロック開始時に呼ばれるメソッドを定義\n    def ___:\n        # 開始メッセージを表示\n        print(___)\n        # 自身を返す\n        return ___\n    # ブロック終了時に呼ばれるメソッドを定義\n    def ___:\n        # 終了メッセージを表示\n        print(___)\n\n# コンテキストマネージャを使用してブロックを開始\n___ MockFile() as f:\n    # 使用中のメッセージを表示\n    print(___)",
      "correctLines": [
        "# ファイル操作を模擬するクラスを定義",
        "class MockFile:",
        "    # ブロック開始時に呼ばれるメソッドを定義",
        "    def __enter__(self):",
        "        # 開始メッセージを表示",
        "        print('opened')",
        "        # 自身を返す",
        "        return self",
        "    # ブロック終了時に呼ばれるメソッドを定義",
        "    def __exit__(self, *args):",
        "        # 終了メッセージを表示",
        "        print('closed')",
        "",
        "# コンテキストマネージャを使用してブロックを開始",
        "with MockFile() as f:",
        "    # 使用中のメッセージを表示",
        "    print('using')"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "with でコンテキストマネージャを使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["with", "for", "if"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "opened\nusing\nclosed\n"
        }
      ]
    }
  ]
}
