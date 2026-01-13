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
      "correctCode": "# 名前を受け取ってあいさつする関数\ndef hello(name):\n    # f'Hello, {name}!'を出力\n    print(f'Hello, {name}!')\n\n# 関数を'Python'を渡して呼び出す\nhello('Python')",
      "holeyCode": "# 名前を受け取ってあいさつする関数\ndef hello(___):\n    # f'Hello, {name}!'を出力\n    print(f'Hello, {___}!')\n\n# 関数を'Python'を渡して呼び出す\n___",
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
      "correctCode": "# デフォルト引数を持つ関数\ndef say_hi(name='World'):\n    # メッセージを表示\n    print(f'Hi, {name}!')\n\n# 引数なしで呼び出す\nsay_hi()",
      "holeyCode": "# デフォルト引数を持つ関数\ndef say_hi(name=___):\n    # メッセージを表示\n    print(f'Hi, {___}!')\n\n# 引数なしで呼び出す\n___()",
      "correctLines": [
        "# デフォルト引数を持つ関数",
        "def say_hi(name='World'):",
        "    # メッセージを表示",
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
      "correctCode": "# 2つの数を足して返す関数\ndef add(a, b):\n    # 計算結果をreturnで返す\n    return a + b\n\n# 結果を変数に入れて表示（引数は10と20）\nresult = add(10, 20)\n# resultを表示\nprint(result)",
      "holeyCode": "# 2つの数を足して返す関数\ndef add(a, b):\n    # 計算結果をreturnで返す\n    ___ a + b\n\n# 結果を変数に入れて表示（引数は10と20）\nresult = add(___, ___)\n# resultを表示\nprint(___)",
      "correctLines": [
        "# 2つの数を足して返す関数",
        "def add(a, b):",
        "    # 計算結果をreturnで返す",
        ["    return a + b", "    return b + a"],
        "",
        "# 結果を変数に入れて表示（引数は10と20）",
        "result = add(10, 20)",
        "# resultを表示",
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
          "image": "/illustrations/3d/multiple_return.png",
          "content": "# カンマで区切って返す\n\n`return` でカンマ区切りにすると、複数の値をまとめて返せます。\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n```"
        },
        {
          "title": "複数の変数で受け取る",
          "image": "/illustrations/3d/multiple_variables.png",
          "content": "# 同時に代入\n\n返ってきた複数の値を、別々の変数で受け取れます。\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nsmallest, largest = min_max([3, 1, 4])\nprint(smallest)  # => 1\nprint(largest)   # => 4\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 2つの値を返す関数\ndef calc(x):\n    # x+1 と x*2 を返す\n    return x + 1, x * 2\n\n# 2つの変数で受け取る（引数は5）\na, b = calc(5)\n# aを表示\nprint(a)\n# bを表示\nprint(b)",
      "holeyCode": "# 2つの値を返す関数\ndef calc(x):\n    # x+1 と x*2 を返す\n    return x + 1, x ___ 2\n\n# 2つの変数で受け取る（引数は5）\na, b = calc(___)\n# aを表示\nprint(___)\n# bを表示\nprint(___)",
      "correctLines": [
        "# 2つの値を返す関数",
        "def calc(x):",
        "    # x+1 と x*2 を返す",
        ["    return x + 1, x * 2", "    return x + 1, 2 * x"],
        "",
        "# 2つの変数で受け取る（引数は5）",
        "a, b = calc(5)",
        "# aを表示",
        "print(a)",
        "# bを表示",
        "print(b)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "かけ算の記号 `*` を使います。",
        null,
        null,
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
      "correctCode": "# 文字列を用意（'Programming'）\nword = 'Programming'\n# 最初の4文字（0から4の手前まで）を取り出す\nprint(word[0:4])",
      "holeyCode": "# 文字列を用意（'Programming'）\nword = '___'\n# 最初の4文字（0から4の手前まで）を取り出す\nprint(word[___:___])",
      "correctLines": [
        "# 文字列を用意（'Programming'）",
        "word = 'Programming'",
        "# 最初の4文字（0から4の手前まで）を取り出す",
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
      "title": "range() で数列を作る",
      "description": "連続した数の列を簡単に作れる range() 関数を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "range() とは？",
          "image": "/illustrations/3d/list.png",
          "content": "# 数の列を作る\n\n`range()` を使うと、連続した数の列を簡単に作れます。\n\n```python\nfor i in range(5):\n    print(i)\n# 0, 1, 2, 3, 4 が順に出力される\n```"
        },
        {
          "title": "range() の使い方",
          "image": "/illustrations/3d/list.png",
          "content": "# 開始と終了を指定\n\n`range(開始, 終了)` で、開始から終了の手前までの数を作ります。\n\n```python\nrange(5)      # 0, 1, 2, 3, 4\nrange(1, 6)   # 1, 2, 3, 4, 5\nrange(0, 10, 2)  # 0, 2, 4, 6, 8（2ずつ増える）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 1から5までの数を順番に表示\nfor i in range(1, 6):\n    print(i)",
      "holeyCode": "# 1から5までの数を順番に表示\nfor i in ___(1, 6):\n    print(___)",
      "correctLines": [
        "# 1から5までの数を順番に表示",
        "for i in range(1, 6):",
        "    print(i)"
      ],
      "lineHints": [
        null,
        "`range()` を使って1から5までの数を作ります。",
        null
      ],
      "candidates": {
        "functions": ["range", "list", "len"],
        "variables": ["i"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n4\n5\n"
        }
      ]
    },
    {
      "title": "累算代入演算子（+=、-=）",
      "description": "変数の値を増やしたり減らしたりする便利な書き方を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "+= とは？",
          "image": "/illustrations/3d/box.png",
          "content": "# 変数に足し算する\n\n`+=` を使うと、変数の値に足し算して上書きできます。\n\n```python\ncount = 0\ncount += 1  # count = count + 1 と同じ\nprint(count)  # => 1\n\ncount += 5\nprint(count)  # => 6\n```"
        },
        {
          "title": "-= と他の演算子",
          "image": "/illustrations/3d/box.png",
          "content": "# 引き算や掛け算も\n\n同じように `-=`、`*=`、`/=` も使えます。\n\n```python\nx = 10\nx -= 3   # x = x - 3 → 7\nx *= 2   # x = x * 2 → 14\nx /= 7   # x = x / 7 → 2.0\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 初期値を設定\ntotal = 0\n# totalに10を足す\ntotal += 10\n# totalに5を足す\ntotal += 5\n# 結果を表示\nprint(total)",
      "holeyCode": "# 初期値を設定\ntotal = 0\n# totalに10を足す\ntotal ___ 10\n# totalに5を足す\ntotal ___ 5\n# 結果を表示\nprint(total)",
      "correctLines": [
        "# 初期値を設定",
        "total = 0",
        "# totalに10を足す",
        "total += 10",
        "# totalに5を足す",
        "total += 5",
        "# 結果を表示",
        "print(total)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`+=` で値を足し算します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["+=", "-=", "*=", "/="]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "剰余演算子（%）",
      "description": "割り算の「余り」を求める演算子を学びましょう。偶数・奇数の判定などに便利です。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "% とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 余りを求める\n\n`%` は割り算の余りを求める演算子です。\n\n```python\nprint(7 % 3)   # => 1（7÷3=2 余り1）\nprint(10 % 5)  # => 0（10÷5=2 余り0）\nprint(8 % 3)   # => 2（8÷3=2 余り2）\n```"
        },
        {
          "title": "倍数の判定",
          "image": "/illustrations/3d/gear.png",
          "content": "# 割り切れるかチェック\n\n余りが0なら割り切れる（倍数）と判定できます。\n\n```python\n# 偶数かどうか判定\nif 6 % 2 == 0:\n    print('偶数です')\n\n# 3の倍数かどうか判定\nif 9 % 3 == 0:\n    print('3の倍数です')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 10を3で割った余りを計算\nremainder = 10 % 3\n# 結果を表示\nprint(remainder)",
      "holeyCode": "# 10を3で割った余りを計算\nremainder = 10 ___ 3\n# 結果を表示\nprint(remainder)",
      "correctLines": [
        "# 10を3で割った余りを計算",
        "remainder = 10 % 3",
        "# 結果を表示",
        "print(remainder)"
      ],
      "lineHints": [
        null,
        "`%` で余りを求めます。",
        null,
        null
      ],
      "candidates": {
        "operators": ["%", "/", "//", "*"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "論理演算子（and, or, not）",
      "description": "複数の条件を組み合わせる論理演算子を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "and と or",
          "image": "/illustrations/3d/if.png",
          "content": "# 条件を組み合わせる\n\n`and` は両方が True のとき True、`or` はどちらかが True のとき True です。\n\n```python\nx = 5\n# 両方の条件を満たすか\nif x > 0 and x < 10:\n    print('0より大きく10より小さい')\n\n# どちらかの条件を満たすか\nif x < 0 or x > 3:\n    print('0未満か3より大きい')\n```"
        },
        {
          "title": "not で否定",
          "image": "/illustrations/3d/if.png",
          "content": "# 条件を反転する\n\n`not` は True と False を反転させます。\n\n```python\nis_raining = False\n\nif not is_raining:\n    print('雨は降っていません')\n\n# not True → False\n# not False → True\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 年齢を設定\nage = 25\n# 20以上かつ30未満かどうか判定\nif age >= 20 and age < 30:\n    print('20代です')",
      "holeyCode": "# 年齢を設定\nage = 25\n# 20以上かつ30未満かどうか判定\nif age >= 20 ___ age < 30:\n    print('20代です')",
      "correctLines": [
        "# 年齢を設定",
        "age = 25",
        "# 20以上かつ30未満かどうか判定",
        "if age >= 20 and age < 30:",
        "    print('20代です')"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`and` で両方の条件を満たすかチェックします。",
        null
      ],
      "candidates": {
        "keywords": ["and", "or", "not"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20代です\n"
        }
      ]
    },
    {
      "title": "リスト内包表記",
      "description": "リストを短いコードで作る「リスト内包表記」を学びましょう。Pythonならではの便利な書き方です。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "リスト内包表記とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 1行でリストを作る\n\nfor文を使わずに、1行でリストを作れる書き方です。\n\n```python\n# 通常のfor文\nnumbers = []\nfor i in range(5):\n    numbers.append(i * 2)\n\n# リスト内包表記\nnumbers = [i * 2 for i in range(5)]\n```"
        },
        {
          "title": "内包表記の書き方",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# [式 for 変数 in イテラブル]\n\nイテラブルとは、リストやrangeなど繰り返し処理できるオブジェクトのことです。`[ ]` の中に、作りたい値の式とfor文を書きます。\n\n```python\n# 0から4の2乗を作る\nsquares = [x ** 2 for x in range(5)]\nprint(squares)  # => [0, 1, 4, 9, 16]\n```"
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
      "orderIndex": 11,
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
      "orderIndex": 12,
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
      "correctCode": "# エラーが起きる可能性のある処理\ntry:\n    # 文字列'abc'を数値に変換（エラー発生）\n    num = int('abc')\n# 例外をキャッチするキーワード\nexcept:\n    # エラーメッセージ（'Error'）\n    print('Error')",
      "holeyCode": "# エラーが起きる可能性のある処理\n___:\n    # 文字列'abc'を数値に変換（エラー発生）\n    num = int('___')\n# 例外をキャッチするキーワード\n___:\n    # エラーメッセージ（'Error'）\n    print('___')",
      "correctLines": [
        "# エラーが起きる可能性のある処理",
        "try:",
        "    # 文字列'abc'を数値に変換（エラー発生）",
        "    num = int('abc')",
        "# 例外をキャッチするキーワード",
        "except:",
        "    # エラーメッセージ（'Error'）",
        "    print('Error')"
      ],
      "lineHints": [
        null,
        "`try` キーワードでエラーを捕まえる準備をします。",
        null,
        null,
        null,
        "`except` キーワードで例外をキャッチします。",
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
      "orderIndex": 13,
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
      "correctCode": "# Catクラスを定義\nclass Cat:\n    # メソッドの第一引数はself\n    def meow(self):\n        # メッセージ（'Meow!'）\n        print('Meow!')\n\n# インスタンスを作って呼び出す\ncat = Cat()\n# meowメソッドを呼び出す\ncat.meow()",
      "holeyCode": "# Catクラスを定義\nclass ___:\n    # メソッドの第一引数はself\n    def meow(___):\n        # メッセージ（'Meow!'）\n        print('___')\n\n# インスタンスを作って呼び出す\ncat = ___()\n# meowメソッドを呼び出す\ncat.___()",
      "correctLines": [
        "# Catクラスを定義",
        "class Cat:",
        "    # メソッドの第一引数はself",
        "    def meow(self):",
        "        # メッセージ（'Meow!'）",
        "        print('Meow!')",
        "",
        "# インスタンスを作って呼び出す",
        "cat = Cat()",
        "# meowメソッドを呼び出す",
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
      "orderIndex": 14,
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
      "correctCode": "# Robotクラスを定義\nclass Robot:\n    # コンストラクタを定義\n    def __init__(self, name):\n        # selfを使って属性を保存\n        self.name = name\n    \n    def say_name(self):\n        # self.nameを表示\n        print(self.name)\n\n# インスタンスを作る（名前は'R2D2'）\nr = Robot('R2D2')\n# say_nameメソッドを呼び出す\nr.say_name()",
      "holeyCode": "# Robotクラスを定義\nclass ___:\n    # コンストラクタを定義\n    def ___(self, name):\n        # selfを使って属性を保存\n        ___.name = name\n    \n    def say_name(self):\n        # self.nameを表示\n        print(self.___)\n\n# インスタンスを作る（名前は'R2D2'）\nr = Robot('___')\n# say_nameメソッドを呼び出す\nr.___()",
      "correctLines": [
        "# Robotクラスを定義",
        "class Robot:",
        "    # コンストラクタを定義",
        "    def __init__(self, name):",
        "        # selfを使って属性を保存",
        "        self.name = name",
        "    ",
        "    def say_name(self):",
        "        # self.nameを表示",
        "        print(self.name)",
        "",
        "# インスタンスを作る（名前は'R2D2'）",
        "r = Robot('R2D2')",
        "# say_nameメソッドを呼び出す",
        "r.say_name()"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`__init__` はコンストラクタです。",
        null,
        "`self` を使ってオブジェクトに属性を保存します。",
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
