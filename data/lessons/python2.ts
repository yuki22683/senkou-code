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
      "description": "関数に「材料」を渡して、いろいろな動きをさせてみましょう。この「材料」のことを引数（ひきすう）と呼びます。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "引数（ひきすう）とは？",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 関数に材料を渡す\n\n関数を定義するとき、カッコの中に「材料」を受け取る場所を作れます。これを **引数（ひきすう）** と呼びます。\n\n```python\ndef greet(name):\n    print(f'こんにちは、{name}さん！')\n```"
        },
        {
          "title": "引数の使い方",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 関数を呼び出すときに渡す\n\n関数を使うとき、カッコの中に値を入れると、その値が引数に入ります。\n\n```python\ndef greet(name):\n    print(f'こんにちは、{name}さん！')\n\ngreet('太郎')\n```\n=> こんにちは、太郎さん！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 名前を受け取ってあいさつする関数\ndef hello(name):\n    # f'Hello, {name}!'を出力\n    print(f'Hello, {name}!')\n\n# 関数を呼び出す\nhello('Python')",
      "holeyCode": "# 名前を受け取ってあいさつする関数\ndef hello(___):\n    # f'Hello, {name}!'を出力\n    print(f'Hello, {___}!')\n\n# 関数を呼び出す\nhello('Python')",
      "correctLines": [
        "# 名前を受け取ってあいさつする関数",
        "def hello(name):",
        "    # f'Hello, {name}!'を出力",
        "    print(f'Hello, {name}!')",
        "",
        "# 関数を呼び出す",
        "hello('Python')"
      ],
      "lineHints": [
        null,
        "引数の名前を `name` にしましょう。",
        null,
        "f-string の中で `name` を使います。",
        null,
        null,
        null
      ],
      "candidates": {
        "variables": ["name"],
        "functions": ["hello", "print"],
        "strings": ["Python", "Hello"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Python!\n"
        }
      ]
    },
    {
      "title": "デフォルト引数",
      "description": "引数に「初期値」を設定すると、値を渡さなくても関数が動くようになります。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "デフォルト引数とは？",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 初期値を設定する\n\n引数に `=` で値を設定しておくと、関数を呼ぶときに何も渡さなければその値が使われます。\n\n```python\ndef greet(name='ゲスト'):\n    print(f'ようこそ、{name}さん！')\n```"
        },
        {
          "title": "省略できる引数",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 渡しても渡さなくてもOK\n\nデフォルト引数があると、柔軟に関数を使えます。\n\n```python\ndef greet(name='ゲスト'):\n    print(f'ようこそ、{name}さん！')\n\ngreet()        # => ようこそ、ゲストさん！\ngreet('太郎')  # => ようこそ、太郎さん！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# デフォルト引数を持つ関数\ndef say_hi(name='World'):\n    print(f'Hi, {name}!')\n\n# 引数なしで呼び出す\nsay_hi()",
      "holeyCode": "# デフォルト引数を持つ関数\ndef say_hi(name=___):\n    print(f'Hi, {name}!')\n\n# 引数なしで呼び出す\nsay_hi()",
      "correctLines": [
        "# デフォルト引数を持つ関数",
        "def say_hi(name='World'):",
        "    print(f'Hi, {name}!')",
        "",
        "# 引数なしで呼び出す",
        "say_hi()"
      ],
      "lineHints": [
        null,
        "デフォルト値として `'World'` を設定しましょう。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "variables": ["name"],
        "strings": ["'World'", "World"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hi, World!\n"
        }
      ]
    },
    {
      "title": "戻り値（return）",
      "description": "関数で計算した結果を「返す」ことで、その値を別の場所で使えるようになります。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "戻り値（もどりち）とは？",
          "image": "/illustrations/3d/return.png",
          "content": "# 関数から値を返す\n\n`return` を使うと、関数の中で作った値を呼び出し元に返すことができます。\n\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(3, 5)  # result に 8 が入る\n```"
        },
        {
          "title": "return の使い方",
          "image": "/illustrations/3d/return.png",
          "content": "# 計算結果を受け取る\n\n`return` で返された値は、変数に入れたり、そのまま使ったりできます。\n\n```python\ndef double(x):\n    return x * 2\n\nprint(double(5))  # => 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 2つの数を足して返す関数\ndef add(a, b):\n    # 計算結果をreturnで返す\n    return a + b\n\n# 結果を変数に入れて表示\nresult = add(10, 20)\nprint(result)",
      "holeyCode": "# 2つの数を足して返す関数\ndef add(a, b):\n    # 計算結果をreturnで返す\n    ___ a + b\n\n# 結果を変数に入れて表示\nresult = add(10, 20)\nprint(result)",
      "correctLines": [
        "# 2つの数を足して返す関数",
        "def add(a, b):",
        "    # 計算結果をreturnで返す",
        "    return a + b",
        "",
        "# 結果を変数に入れて表示",
        "result = add(10, 20)",
        "print(result)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`return` を使って計算結果を返します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["return"],
        "variables": ["a", "b", "result"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "30\n"
        }
      ]
    },
    {
      "title": "複数の戻り値",
      "description": "Pythonでは、1つの関数から複数の値を同時に返すことができます。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "複数の値を返す",
          "image": "/illustrations/3d/robot.png",
          "content": "# カンマで区切って返す\n\n`return` でカンマ区切りにすると、複数の値をまとめて返せます。\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n```"
        },
        {
          "title": "複数の変数で受け取る",
          "image": "/illustrations/3d/robot.png",
          "content": "# 同時に代入\n\n返ってきた複数の値を、別々の変数で受け取れます。\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nsmallest, largest = min_max([3, 1, 4])\nprint(smallest)  # => 1\nprint(largest)   # => 4\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 2つの値を返す関数\ndef calc(x):\n    # 足し算とかけ算の結果を返す\n    return x + 1, x * 2\n\n# 2つの変数で受け取る\na, b = calc(5)\nprint(a)\nprint(b)",
      "holeyCode": "# 2つの値を返す関数\ndef calc(x):\n    # 足し算とかけ算の結果を返す\n    return x + 1, x ___ 2\n\n# 2つの変数で受け取る\na, b = calc(5)\nprint(a)\nprint(b)",
      "correctLines": [
        "# 2つの値を返す関数",
        "def calc(x):",
        "    # 足し算とかけ算の結果を返す",
        "    return x + 1, x * 2",
        "",
        "# 2つの変数で受け取る",
        "a, b = calc(5)",
        "print(a)",
        "print(b)"
      ],
      "lineHints": [
        null,
        null,
        "かけ算の記号 `*` を使います。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["*", "+", "-", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "6\n10\n"
        }
      ]
    },
    {
      "title": "文字列スライス",
      "description": "文字列の一部分だけを取り出す「スライス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "スライスとは？",
          "image": "/illustrations/3d_advanced/slicing.png",
          "content": "# 文字列の一部を取り出す\n\n文字列やリストの一部分を取り出すことを **スライス** と呼びます。`[開始:終了]` の形で指定します。\n\n```python\ntext = 'Python'\nprint(text[0:2])  # => 'Py'\n```"
        },
        {
          "title": "スライスの書き方",
          "image": "/illustrations/3d_advanced/slicing.png",
          "content": "# 開始と終了を指定\n\n`[開始:終了]` で、開始位置から終了位置の **手前まで** を取り出します。\n\n```python\ntext = 'Hello'\nprint(text[1:4])  # => 'ell'\nprint(text[:3])   # => 'Hel' (最初から)\nprint(text[2:])   # => 'llo' (最後まで)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 文字列を用意\nword = 'Programming'\n# 最初の4文字を取り出す\nprint(word[0:4])",
      "holeyCode": "# 文字列を用意\nword = 'Programming'\n# 最初の4文字（0から4の手前まで）を取り出す\nprint(word[0:4])",
      "correctLines": [
        "# 文字列を用意",
        "word = 'Programming'",
        "# 最初の4文字を取り出す",
        "print(word[0:4])"
      ],
      "lineHints": [
        null,
        null,
        null,
        "開始は `0`、終了は `4` です。"
      ],
      "candidates": {
        "numbers": ["0", "4", "1", "3"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Prog\n"
        }
      ]
    },
    {
      "title": "リスト内包表記",
      "description": "リストを短いコードで作る「リスト内包表記」を学びましょう。Pythonならではの便利な書き方です。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "リスト内包表記とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 1行でリストを作る\n\nfor文を使わずに、1行でリストを作れる書き方です。\n\n```python\n# 通常のfor文\nnumbers = []\nfor i in range(5):\n    numbers.append(i * 2)\n\n# リスト内包表記\nnumbers = [i * 2 for i in range(5)]\n```"
        },
        {
          "title": "内包表記の書き方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# [式 for 変数 in イテラブル]\n\n`[ ]` の中に、作りたい値の式とfor文を書きます。\n\n```python\n# 0から4の2乗を作る\nsquares = [x ** 2 for x in range(5)]\nprint(squares)  # => [0, 1, 4, 9, 16]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 1から5までの数を2倍にしたリストを作る\ndoubled = [x * 2 for x in range(1, 6)]\nprint(doubled)",
      "holeyCode": "# 1から5までの数を2倍にしたリストを作る\ndoubled = [x * 2 ___ x in range(1, 6)]\nprint(doubled)",
      "correctLines": [
        "# 1から5までの数を2倍にしたリストを作る",
        "doubled = [x * 2 for x in range(1, 6)]",
        "print(doubled)"
      ],
      "lineHints": [
        null,
        "内包表記では `for` キーワードを使います。",
        null
      ],
      "candidates": {
        "keywords": ["for", "in", "if"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[2, 4, 6, 8, 10]\n"
        }
      ]
    },
    {
      "title": "条件付きリスト内包表記",
      "description": "リスト内包表記に条件を追加して、特定の値だけを取り出しましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "条件でフィルタリング",
          "image": "/illustrations/3d/if.png",
          "content": "# if を追加する\n\nリスト内包表記の最後に `if` を追加すると、条件に合うものだけを取り出せます。\n\n```python\n# 偶数だけを取り出す\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)  # => [0, 2, 4, 6, 8]\n```"
        },
        {
          "title": "条件付き内包表記の書き方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# [式 for 変数 in イテラブル if 条件]\n\n条件を満たす要素だけがリストに入ります。\n\n```python\nwords = ['apple', 'banana', 'cherry']\n# 5文字以下の単語だけ\nshort = [w for w in words if len(w) <= 5]\nprint(short)  # => ['apple']\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 1から10で3の倍数だけを集める\nmultiples = [n for n in range(1, 11) if n % 3 == 0]\nprint(multiples)",
      "holeyCode": "# 1から10で3の倍数だけを集める\nmultiples = [n for n in range(1, 11) ___ n % 3 == 0]\nprint(multiples)",
      "correctLines": [
        "# 1から10で3の倍数だけを集める",
        "multiples = [n for n in range(1, 11) if n % 3 == 0]",
        "print(multiples)"
      ],
      "lineHints": [
        null,
        "条件を追加するには `if` を使います。",
        null
      ],
      "candidates": {
        "keywords": ["if", "for", "in"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[3, 6, 9]\n"
        }
      ]
    },
    {
      "title": "例外処理（try-except）",
      "description": "プログラムでエラーが起きたときに、クラッシュせずに対処する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "例外（エラー）とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# プログラムの問題\n\nプログラムを実行中に問題が起きると「例外」が発生します。例えば、0で割ろうとするとエラーになります。\n\n```python\nresult = 10 / 0  # ZeroDivisionError!\n```"
        },
        {
          "title": "try-except で対処",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーをキャッチする\n\n`try` の中でエラーが起きたら、`except` の処理が実行されます。\n\n```python\ntry:\n    result = 10 / 0\nexcept:\n    print('エラーが発生しました')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# エラーが起きる可能性のある処理\ntry:\n    num = int('abc')\nexcept:\n    print('Error')",
      "holeyCode": "# エラーが起きる可能性のある処理\n___:\n    num = int('abc')\nexcept:\n    print('Error')",
      "correctLines": [
        "# エラーが起きる可能性のある処理",
        "try:",
        "    num = int('abc')",
        "except:",
        "    print('Error')"
      ],
      "lineHints": [
        null,
        "`try` キーワードでエラーを捕まえる準備をします。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["try", "except", "finally"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Error\n"
        }
      ]
    },
    {
      "title": "クラスの基本",
      "description": "データと処理をまとめた「クラス」を作ってみましょう。オブジェクト指向プログラミングの入門です。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 設計図を作る\n\n**クラス** は、データ（属性）と処理（メソッド）をまとめた「設計図」です。この設計図から実際のモノ（オブジェクト）を作ります。\n\n```python\nclass Dog:\n    def bark(self):\n        print('ワン！')\n```"
        },
        {
          "title": "インスタンスを作る",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 設計図からモノを作る\n\nクラス名の後ろに `()` をつけると、オブジェクト（インスタンス）が作られます。\n\n```python\nclass Dog:\n    def bark(self):\n        print('ワン！')\n\ndog = Dog()  # インスタンス作成\ndog.bark()   # => ワン！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Catクラスを定義\nclass Cat:\n    # メソッドの第一引数はself\n    def meow(self):\n        print('Meow!')\n\n# インスタンスを作って呼び出す\ncat = Cat()\ncat.meow()",
      "holeyCode": "# Catクラスを定義\nclass Cat:\n    # メソッドの第一引数はself\n    def meow(___):\n        print('Meow!')\n\n# インスタンスを作って呼び出す\ncat = Cat()\ncat.meow()",
      "correctLines": [
        "# Catクラスを定義",
        "class Cat:",
        "    # メソッドの第一引数はself",
        "    def meow(self):",
        "        print('Meow!')",
        "",
        "# インスタンスを作って呼び出す",
        "cat = Cat()",
        "cat.meow()"
      ],
      "lineHints": [
        null,
        null,
        null,
        "メソッドの最初の引数は必ず `self` です。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "variables": ["self", "cat"],
        "keywords": ["class", "def"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Meow!\n"
        }
      ]
    },
    {
      "title": "コンストラクタ（__init__）",
      "description": "オブジェクトを作るときに自動で呼ばれる特別なメソッド「コンストラクタ」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "__init__ メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 初期化処理\n\n`__init__` はオブジェクトが作られるときに自動で呼ばれます。初期値を設定するのに使います。\n\n```python\nclass Person:\n    def __init__(self, name):\n        self.name = name\n```"
        },
        {
          "title": "属性を設定する",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# self で属性を保存\n\n`self.属性名 = 値` で、オブジェクトにデータを保存できます。\n\n```python\nclass Person:\n    def __init__(self, name):\n        self.name = name\n    \n    def greet(self):\n        print(f'私は{self.name}です')\n\np = Person('太郎')\np.greet()  # => 私は太郎です\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Robotクラスを定義\nclass Robot:\n    def __init__(self, name):\n        # selfを使って属性を保存\n        self.name = name\n    \n    def say_name(self):\n        print(self.name)\n\n# インスタンスを作る\nr = Robot('R2D2')\nr.say_name()",
      "holeyCode": "# Robotクラスを定義\nclass Robot:\n    def __init__(self, name):\n        # selfを使って属性を保存\n        ___.name = name\n    \n    def say_name(self):\n        print(self.name)\n\n# インスタンスを作る\nr = Robot('R2D2')\nr.say_name()",
      "correctLines": [
        "# Robotクラスを定義",
        "class Robot:",
        "    def __init__(self, name):",
        "        # selfを使って属性を保存",
        "        self.name = name",
        "    ",
        "    def say_name(self):",
        "        print(self.name)",
        "",
        "# インスタンスを作る",
        "r = Robot('R2D2')",
        "r.say_name()"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "`self` を使ってオブジェクトに属性を保存します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "variables": ["self", "name", "r"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "R2D2\n"
        }
      ]
    }
  ]
};
