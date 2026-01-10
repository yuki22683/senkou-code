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
      "correctCode": "# ラムダ式で2乗を計算\n# lambda と入力\nsquare = lambda x: x ** 2\n# square(5) と入力\nprint(square(5))",
      "holeyCode": "# ラムダ式で2乗を計算\n# lambda と入力\nsquare = ___ x: x ** 2\n# square(5) と入力\nprint(___)",
      "correctLines": [
        "# ラムダ式で2乗を計算",
        "# lambda と入力",
        "square = lambda x: x ** 2",
        "# square(5) と入力",
        "print(square(5))"
      ],
      "lineHints": [
        null,
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数の引数をまとめて受け取る\n\n**\\*args** を使うと、何個でも引数を受け取れます。引数はタプルとして受け取ります。\n\n```python\ndef sum_all(*args):\n    return sum(args)\n\nprint(sum_all(1, 2, 3))  # 6\n```"
        },
        {
          "title": "*args の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 引数名は何でもOK\n\n`*numbers` など、名前は自由につけられます。\n\n```python\ndef greet(*names):\n    for name in names:\n        print(f'Hello, {name}!')\n\ngreet('Alice', 'Bob', 'Charlie')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 全ての数を足す関数\n# * と入力\ndef add_all(*args):\n    # 0 と入力\n    total = 0\n    # args と入力\n    for n in args:\n        # n と入力\n        total += n\n    # total と入力\n    return total\n\n# add_all(1, 2, 3, 4) と入力\nprint(add_all(1, 2, 3, 4))",
      "holeyCode": "# 全ての数を足す関数\n# * と入力\ndef add_all(___args):\n    # 0 と入力\n    total = ___\n    # args と入力\n    for n in ___:\n        # n と入力\n        total += ___\n    # total と入力\n    return ___\n\n# add_all(1, 2, 3, 4) と入力\nprint(___)",
      "correctLines": [
        "# 全ての数を足す関数",
        "# * と入力",
        "def add_all(*args):",
        "    # 0 と入力",
        "    total = 0",
        "    # args と入力",
        "    for n in args:",
        "        # n と入力",
        "        total += n",
        "    # total と入力",
        "    return total",
        "",
        "# add_all(1, 2, 3, 4) と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 名前付き引数をまとめて受け取る\n\n**\\*\\*kwargs** を使うと、名前付きの引数を辞書として受け取れます。\n\n```python\ndef show_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f'{key}: {value}')\n\nshow_info(name='太郎', age=20)\n```"
        },
        {
          "title": "**kwargs の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 辞書として扱える\n\n`.items()`, `.keys()`, `.values()` などが使えます。\n\n```python\ndef create_user(**kwargs):\n    return kwargs\n\nuser = create_user(name='花子', email='hanako@example.com')\nprint(user['name'])  # 花子\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# キーワード引数を表示する関数\n# ** と入力\ndef print_info(**kwargs):\n    # kwargs.items() と入力\n    for k, v in kwargs.items():\n        # f-stringで \"キー = 値\" の形式で表示\n        print(f'{k} = {v}')\n\n# print_info(x=10, y=20) と入力\nprint_info(x=10, y=20)",
      "holeyCode": "# キーワード引数を表示する関数\n# ** と入力\ndef print_info(___kwargs):\n    # kwargs.items() と入力\n    for k, v in ___:\n        # f'{k} = {v}' と入力\n        print(___)\n\n# print_info(x=10, y=20) と入力\n___",
      "correctLines": [
        "# キーワード引数を表示する関数",
        "# ** と入力",
        "def print_info(**kwargs):",
        "    # kwargs.items() と入力",
        "    for k, v in kwargs.items():",
        "        # f'{k} = {v}' と入力",
        "        print(f'{k} = {v}')",
        "",
        "# print_info(x=10, y=20) と入力",
        "print_info(x=10, y=20)"
      ],
      "lineHints": [
        null,
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
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# インデックスと要素を同時に取得\n\n**enumerate** を使うと、ループで番号（インデックス）と要素を同時に取得できます。\n\n```python\nfruits = ['apple', 'banana', 'cherry']\nfor i, fruit in enumerate(fruits):\n    print(f'{i}: {fruit}')\n```"
        },
        {
          "title": "開始番号を指定",
          "image": "/illustrations/3d/robot.png",
          "content": "# start で開始番号を変更\n\nデフォルトは0から始まりますが、`start=1` で1から始められます。\n\n```python\nfor i, fruit in enumerate(fruits, start=1):\n    print(f'{i}番目: {fruit}')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ['red', 'green', 'blue'] と入力して番号付きでリストを表示\ncolors = ['red', 'green', 'blue']\n# enumerate と入力してインデックスと要素を取得\nfor i, color in enumerate(colors):\n    # f-stringで \"番号: 色\" の形式で表示\n    print(f'{i}: {color}')",
      "holeyCode": "# ['red', 'green', 'blue'] と入力して番号付きでリストを表示\ncolors = ___\n# enumerate と入力してインデックスと要素を取得\nfor i, color in ___(colors):\n    # f'{i}: {color}' と入力\n    print(___)",
      "correctLines": [
        "# ['red', 'green', 'blue'] と入力して番号付きでリストを表示",
        "colors = ['red', 'green', 'blue']",
        "# enumerate と入力してインデックスと要素を取得",
        "for i, color in enumerate(colors):",
        "    # f'{i}: {color}' と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数のリストをまとめる\n\n**zip** を使うと、複数のリストの要素を同時に取り出せます。\n\n```python\nnames = ['Alice', 'Bob']\nages = [20, 25]\nfor name, age in zip(names, ages):\n    print(f'{name} is {age}')\n```"
        },
        {
          "title": "zip の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 短い方に合わせる\n\nリストの長さが違う場合、短い方に合わせて終了します。\n\n```python\na = [1, 2, 3]\nb = ['x', 'y']\nprint(list(zip(a, b)))  # [(1, 'x'), (2, 'y')]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ['a', 'b', 'c'] と入力して2つのリストを同時にループ\nkeys = ['a', 'b', 'c']\n# [1, 2, 3] と入力\nvalues = [1, 2, 3]\n# zip と入力してペアを作る\nfor k, v in zip(keys, values):\n    # f-stringで \"キー: 値\" の形式で表示\n    print(f'{k}: {v}')",
      "holeyCode": "# ['a', 'b', 'c'] と入力して2つのリストを同時にループ\nkeys = ___\n# [1, 2, 3] と入力\nvalues = ___\n# zip と入力してペアを作る\nfor k, v in ___(keys, values):\n    # f'{k}: {v}' と入力\n    print(___)",
      "correctLines": [
        "# ['a', 'b', 'c'] と入力して2つのリストを同時にループ",
        "keys = ['a', 'b', 'c']",
        "# [1, 2, 3] と入力",
        "values = [1, 2, 3]",
        "# zip と入力してペアを作る",
        "for k, v in zip(keys, values):",
        "    # f'{k}: {v}' と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# yield で値を1つずつ返す\n\n**yield** を使うと、値を1つずつ返す関数が作れます。メモリ効率が良いです。\n\n```python\ndef count_up(n):\n    for i in range(n):\n        yield i\n\nfor num in count_up(3):\n    print(num)  # 0, 1, 2\n```"
        },
        {
          "title": "ジェネレータの利点",
          "image": "/illustrations/3d/robot.png",
          "content": "# 大量のデータを効率よく処理\n\nリストと違い、全データをメモリに保持しません。\n\n```python\n# メモリを使わず1億個の数を生成\ndef big_range(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# even_numbers(n) と入力して偶数を生成するジェネレータ\ndef even_numbers(n):\n    # range(n) と入力\n    for i in range(n):\n        # yield と入力して値を1つずつ返す\n        yield i * 2\n\n# even_numbers(4) と入力\nfor num in even_numbers(4):\n    # num と入力\n    print(num)",
      "holeyCode": "# even_numbers(n) と入力して偶数を生成するジェネレータ\ndef ___:\n    # range(n) と入力\n    for i in ___:\n        # yield と入力して値を1つずつ返す\n        ___ i * 2\n\n# even_numbers(4) と入力\nfor num in ___:\n    # num と入力\n    print(___)",
      "correctLines": [
        "# even_numbers(n) と入力して偶数を生成するジェネレータ",
        "def even_numbers(n):",
        "    # range(n) と入力",
        "    for i in range(n):",
        "        # yield と入力して値を1つずつ返す",
        "        yield i * 2",
        "",
        "# even_numbers(4) と入力",
        "for num in even_numbers(4):",
        "    # num と入力",
        "    print(num)"
      ],
      "lineHints": [
        null,
        null,
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
          "image": "/illustrations/3d/robot.png",
          "content": "# () でジェネレータを作る\n\nリスト内包表記の `[]` を `()` に変えるとジェネレータになります。\n\n```python\n# リスト内包表記\nsquares = [x**2 for x in range(5)]\n\n# ジェネレータ式\nsquares = (x**2 for x in range(5))\n```"
        },
        {
          "title": "ジェネレータ式の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# sum や max と組み合わせる\n\n関数に直接渡すと効率的です。\n\n```python\ntotal = sum(x**2 for x in range(5))\nprint(total)  # 30\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# range(1, 6) と入力してジェネレータ式で合計を計算\nnums = range(1, 6)\n# for と入力してジェネレータ式を作る\ntotal = sum(x * x for x in nums)\n# total と入力\nprint(total)",
      "holeyCode": "# range(1, 6) と入力してジェネレータ式で合計を計算\nnums = ___\n# for と入力してジェネレータ式を作る\ntotal = sum(x * x ___ x in nums)\n# total と入力\nprint(___)",
      "correctLines": [
        "# range(1, 6) と入力してジェネレータ式で合計を計算",
        "nums = range(1, 6)",
        "# for と入力してジェネレータ式を作る",
        "total = sum(x * x for x in nums)",
        "# total と入力",
        "print(total)"
      ],
      "lineHints": [
        null,
        null,
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数を包んで機能を追加\n\n**デコレータ** は関数を受け取って、新しい関数を返す関数です。`@` で適用します。\n\n```python\ndef my_decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n        print('After')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')\n```"
        },
        {
          "title": "デコレータの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# @ で関数に適用\n\n`@decorator` を関数の上に書くだけで適用できます。\n\n```python\n@my_decorator\ndef say_hello():\n    print('Hello!')\n\nsay_hello()\n# Before\n# Hello!\n# After\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# show_call(func) と入力して実行時間を表示するデコレータ\ndef show_call(func):\n    # wrapper() と入力\n    def wrapper():\n        # '関数を呼び出します' と入力\n        print('関数を呼び出します')\n        # func() と入力\n        func()\n    # wrapper と入力\n    return wrapper\n\n# @ と入力してデコレータを適用\n@show_call\n# greet() と入力\ndef greet():\n    # 'Hello!' と入力\n    print('Hello!')\n\n# greet() と入力\ngreet()",
      "holeyCode": "# show_call(func) と入力して実行時間を表示するデコレータ\ndef ___:\n    # wrapper() と入力\n    def ___:\n        # '関数を呼び出します' と入力\n        print(___)\n        # func() と入力\n        ___\n    # wrapper と入力\n    return ___\n\n# @ と入力してデコレータを適用\n___show_call\n# greet() と入力\ndef ___:\n    # 'Hello!' と入力\n    print(___)\n\n# greet() と入力\n___",
      "correctLines": [
        "# show_call(func) と入力して実行時間を表示するデコレータ",
        "def show_call(func):",
        "    # wrapper() と入力",
        "    def wrapper():",
        "        # '関数を呼び出します' と入力",
        "        print('関数を呼び出します')",
        "        # func() と入力",
        "        func()",
        "    # wrapper と入力",
        "    return wrapper",
        "",
        "# @ と入力してデコレータを適用",
        "@show_call",
        "# greet() と入力",
        "def greet():",
        "    # 'Hello!' と入力",
        "    print('Hello!')",
        "",
        "# greet() と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 1つでも True なら True\n\n**any** は、イテラブルの中に1つでも True があれば True を返します。\n\n```python\nnums = [0, 0, 1, 0]\nprint(any(nums))  # True\n\nprint(any(x > 5 for x in [1, 2, 10]))  # True\n```"
        },
        {
          "title": "all とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 全部 True なら True\n\n**all** は、イテラブルの全てが True の場合に True を返します。\n\n```python\nnums = [1, 2, 3]\nprint(all(nums))  # True\n\nprint(all(x > 0 for x in [1, 2, 3]))  # True\nprint(all(x > 0 for x in [1, -1, 3]))  # False\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# [1, 2, 3, 4, 5] と入力して全ての数が正かチェック\nnums = [1, 2, 3, 4, 5]\n# all と入力して全要素の条件チェック\nresult = all(x > 0 for x in nums)\n# result と入力\nprint(result)",
      "holeyCode": "# [1, 2, 3, 4, 5] と入力して全ての数が正かチェック\nnums = ___\n# all と入力して全要素の条件チェック\nresult = ___(x > 0 for x in nums)\n# result と入力\nprint(___)",
      "correctLines": [
        "# [1, 2, 3, 4, 5] と入力して全ての数が正かチェック",
        "nums = [1, 2, 3, 4, 5]",
        "# all と入力して全要素の条件チェック",
        "result = all(x > 0 for x in nums)",
        "# result と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# リソースを自動で後片付け\n\n**with** を使うと、ファイルなどのリソースを自動的に閉じてくれます。\n\n```python\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# ここで自動的にファイルが閉じられる\n```"
        },
        {
          "title": "with文の利点",
          "image": "/illustrations/3d/robot.png",
          "content": "# エラーが起きても安全\n\nエラーが発生しても、確実にリソースを解放します。\n\n```python\n# 従来の方法（close忘れの危険）\nf = open('file.txt')\ntry:\n    content = f.read()\nfinally:\n    f.close()\n\n# with文（安全で簡潔）\nwith open('file.txt') as f:\n    content = f.read()\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# MockFile と入力してwith文でファイルを開く（模擬）\nclass MockFile:\n    # __enter__(self) と入力\n    def __enter__(self):\n        # 'opened' と入力\n        print('opened')\n        # self と入力\n        return self\n    # __exit__(self, *args) と入力\n    def __exit__(self, *args):\n        # 'closed' と入力\n        print('closed')\n\n# with と入力してコンテキストマネージャを使用\nwith MockFile() as f:\n    # 'using' と入力\n    print('using')",
      "holeyCode": "# MockFile と入力してwith文でファイルを開く（模擬）\nclass ___:\n    # __enter__(self) と入力\n    def ___:\n        # 'opened' と入力\n        print(___)\n        # self と入力\n        return ___\n    # __exit__(self, *args) と入力\n    def ___:\n        # 'closed' と入力\n        print(___)\n\n# with と入力してコンテキストマネージャを使用\n___ MockFile() as f:\n    # 'using' と入力\n    print(___)",
      "correctLines": [
        "# MockFile と入力してwith文でファイルを開く（模擬）",
        "class MockFile:",
        "    # __enter__(self) と入力",
        "    def __enter__(self):",
        "        # 'opened' と入力",
        "        print('opened')",
        "        # self と入力",
        "        return self",
        "    # __exit__(self, *args) と入力",
        "    def __exit__(self, *args):",
        "        # 'closed' と入力",
        "        print('closed')",
        "",
        "# with と入力してコンテキストマネージャを使用",
        "with MockFile() as f:",
        "    # 'using' と入力",
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
