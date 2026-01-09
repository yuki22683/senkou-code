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
      "correctCode": "# ラムダ式で2乗を計算\nsquare = lambda x: x ** 2\nprint(square(5))",
      "holeyCode": "# ラムダ式で2乗を計算\nsquare = ___ x: x ** 2\nprint(square(5))",
      "correctLines": [
        "# ラムダ式で2乗を計算",
        "square = lambda x: x ** 2",
        "print(square(5))"
      ],
      "lineHints": [
        null,
        "lambda キーワードを使います。",
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
      "correctCode": "# 全ての数を足す関数\ndef add_all(*args):\n    total = 0\n    for n in args:\n        total += n\n    return total\n\nprint(add_all(1, 2, 3, 4))",
      "holeyCode": "# 全ての数を足す関数\ndef add_all(___args):\n    total = 0\n    for n in args:\n        total += n\n    return total\n\nprint(add_all(1, 2, 3, 4))",
      "correctLines": [
        "# 全ての数を足す関数",
        "def add_all(*args):",
        "    total = 0",
        "    for n in args:",
        "        total += n",
        "    return total",
        "",
        "print(add_all(1, 2, 3, 4))"
      ],
      "lineHints": [
        null,
        "* を付けて可変長引数にします。",
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
      "correctCode": "# キーワード引数を表示する関数\ndef print_info(**kwargs):\n    for k, v in kwargs.items():\n        print(f'{k} = {v}')\n\nprint_info(x=10, y=20)",
      "holeyCode": "# キーワード引数を表示する関数\ndef print_info(___kwargs):\n    for k, v in kwargs.items():\n        print(f'{k} = {v}')\n\nprint_info(x=10, y=20)",
      "correctLines": [
        "# キーワード引数を表示する関数",
        "def print_info(**kwargs):",
        "    for k, v in kwargs.items():",
        "        print(f'{k} = {v}')",
        "",
        "print_info(x=10, y=20)"
      ],
      "lineHints": [
        null,
        "** を付けてキーワード引数にします。",
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
      "correctCode": "# 番号付きでリストを表示\ncolors = ['red', 'green', 'blue']\n# enumerateでインデックスと要素を取得\nfor i, color in enumerate(colors):\n    print(f'{i}: {color}')",
      "holeyCode": "# 番号付きでリストを表示\ncolors = ['red', 'green', 'blue']\n# enumerateでインデックスと要素を取得\nfor i, color in ___(colors):\n    print(f'{i}: {color}')",
      "correctLines": [
        "# 番号付きでリストを表示",
        "colors = ['red', 'green', 'blue']",
        "# enumerateでインデックスと要素を取得",
        "for i, color in enumerate(colors):",
        "    print(f'{i}: {color}')"
      ],
      "lineHints": [
        null,
        null,
        null,
        "enumerate でインデックスと要素を取得します。",
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
      "correctCode": "# 2つのリストを同時にループ\nkeys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\n# zipでペアを作る\nfor k, v in zip(keys, values):\n    print(f'{k}: {v}')",
      "holeyCode": "# 2つのリストを同時にループ\nkeys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\n# zipでペアを作る\nfor k, v in ___(keys, values):\n    print(f'{k}: {v}')",
      "correctLines": [
        "# 2つのリストを同時にループ",
        "keys = ['a', 'b', 'c']",
        "values = [1, 2, 3]",
        "# zipでペアを作る",
        "for k, v in zip(keys, values):",
        "    print(f'{k}: {v}')"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "zip で複数のリストを同時にループします。",
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
      "correctCode": "# 偶数を生成するジェネレータ\ndef even_numbers(n):\n    for i in range(n):\n        # yieldで値を1つずつ返す\n        yield i * 2\n\nfor num in even_numbers(4):\n    print(num)",
      "holeyCode": "# 偶数を生成するジェネレータ\ndef even_numbers(n):\n    for i in range(n):\n        # yieldで値を1つずつ返す\n        ___ i * 2\n\nfor num in even_numbers(4):\n    print(num)",
      "correctLines": [
        "# 偶数を生成するジェネレータ",
        "def even_numbers(n):",
        "    for i in range(n):",
        "        # yieldで値を1つずつ返す",
        "        yield i * 2",
        "",
        "for num in even_numbers(4):",
        "    print(num)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "yield で値を1つずつ返します。",
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
      "correctCode": "# ジェネレータ式で合計を計算\nnums = range(1, 6)\n# forでジェネレータ式を作る\ntotal = sum(x * x for x in nums)\nprint(total)",
      "holeyCode": "# ジェネレータ式で合計を計算\nnums = range(1, 6)\n# forでジェネレータ式を作る\ntotal = sum(x * x ___ x in nums)\nprint(total)",
      "correctLines": [
        "# ジェネレータ式で合計を計算",
        "nums = range(1, 6)",
        "# forでジェネレータ式を作る",
        "total = sum(x * x for x in nums)",
        "print(total)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "for を使ってジェネレータ式を作ります。",
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
      "correctCode": "# 実行時間を表示するデコレータ\ndef show_call(func):\n    def wrapper():\n        print('関数を呼び出します')\n        func()\n    return wrapper\n\n# @でデコレータを適用\n@show_call\ndef greet():\n    print('Hello!')\n\ngreet()",
      "holeyCode": "# 実行時間を表示するデコレータ\ndef show_call(func):\n    def wrapper():\n        print('関数を呼び出します')\n        func()\n    return wrapper\n\n# @でデコレータを適用\n___show_call\ndef greet():\n    print('Hello!')\n\ngreet()",
      "correctLines": [
        "# 実行時間を表示するデコレータ",
        "def show_call(func):",
        "    def wrapper():",
        "        print('関数を呼び出します')",
        "        func()",
        "    return wrapper",
        "",
        "# @でデコレータを適用",
        "@show_call",
        "def greet():",
        "    print('Hello!')",
        "",
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
        "@ でデコレータを適用します。",
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
      "correctCode": "# 全ての数が正かチェック\nnums = [1, 2, 3, 4, 5]\n# allで全要素の条件チェック\nresult = all(x > 0 for x in nums)\nprint(result)",
      "holeyCode": "# 全ての数が正かチェック\nnums = [1, 2, 3, 4, 5]\n# allで全要素の条件チェック\nresult = ___(x > 0 for x in nums)\nprint(result)",
      "correctLines": [
        "# 全ての数が正かチェック",
        "nums = [1, 2, 3, 4, 5]",
        "# allで全要素の条件チェック",
        "result = all(x > 0 for x in nums)",
        "print(result)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "all で全ての要素が条件を満たすかチェックします。",
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
      "correctCode": "# with文でファイルを開く（テスト用に模擬）\nclass MockFile:\n    def __enter__(self):\n        print('opened')\n        return self\n    def __exit__(self, *args):\n        print('closed')\n\n# withでコンテキストマネージャを使用\nwith MockFile() as f:\n    print('using')",
      "holeyCode": "# with文でファイルを開く（テスト用に模擬）\nclass MockFile:\n    def __enter__(self):\n        print('opened')\n        return self\n    def __exit__(self, *args):\n        print('closed')\n\n# withでコンテキストマネージャを使用\n___ MockFile() as f:\n    print('using')",
      "correctLines": [
        "# with文でファイルを開く（テスト用に模擬）",
        "class MockFile:",
        "    def __enter__(self):",
        "        print('opened')",
        "        return self",
        "    def __exit__(self, *args):",
        "        print('closed')",
        "",
        "# withでコンテキストマネージャを使用",
        "with MockFile() as f:",
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
        "with でコンテキストマネージャを使います。",
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
