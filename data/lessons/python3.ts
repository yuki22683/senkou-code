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
      "title": "*args 可変長引数",
      "content": "関数に**いくつでも引数を渡せる**ようにするには `*args` を使います。\\n\\n```python\\ndef total(*args):\\n    result = 0\\n    for n in args:\\n        result += n\\n    return result\\n\\nprint(total(1, 2, 3))  # 6\\nprint(total(10, 20))   # 30\\n```\\n\\n`*args` はタプルとして受け取られ、ループで1つずつ取り出せます。"
    },
    {
      "title": "**kwargs キーワード引数",
      "content": "**名前付きの引数**をいくつでも受け取るには `**kwargs` を使います。\\n\\n```python\\ndef show(**kwargs):\\n    for key, value in kwargs.items():\\n        print(f'{key}: {value}')\\n\\nshow(name='太郎', age=20)\\n# name: 太郎\\n# age: 20\\n```\\n\\n`**kwargs` は辞書として受け取られ、`.items()` でキーと値を取り出せます。"
    },
    {
      "title": "番号付きで繰り返す enumerate",
      "content": "ループを回すときに、要素と一緒にインデックス（何番目か）を取得できます。\\n\\n```python\\nnames = ['Python', 'Ruby']\\nfor i, name in enumerate(names):\\n    print(f\"{i}: {name}\")\\n```\\n\\n番号を自分で管理する必要がなくなります。"
    },
    {
      "title": "zip で複数リストを同時ループ",
      "content": "2つ以上のリストを**同時にループ**するには `zip` を使います。\\n\\n```python\\nnames = ['太郎', '花子']\\nages = [20, 25]\\nfor name, age in zip(names, ages):\\n    print(f'{name}は{age}歳')\\n# 太郎は20歳\\n# 花子は25歳\\n```\\n\\n同じ位置の要素がペアになって取り出されます。"
    },
    {
      "title": "ジェネレータ yield",
      "content": "`return` の代わりに `yield` を使うと、値を**1つずつ返す**関数（ジェネレータ）が作れます。\\n\\n```python\\ndef countdown(n):\\n    while n > 0:\\n        yield n\\n        n -= 1\\n\\nfor num in countdown(3):\\n    print(num)  # 3, 2, 1\\n```\\n\\n大量のデータを扱うときもメモリを節約できます。"
    },
    {
      "title": "ジェネレータ式",
      "content": "リスト内包表記と似た形で、ジェネレータを作れます。\\n\\n```python\\n# リスト内包（メモリを全部使う）\\nsquares = [x * x for x in range(100)]\\n\\n# ジェネレータ式（必要なときだけ計算）\\nsquares = (x * x for x in range(100))\\n```\\n\\n`[]` を `()` に変えるだけ。`sum()` などと組み合わせると便利です。"
    },
    {
      "title": "デコレータ",
      "content": "関数に**追加の処理を付け加える**仕組みがデコレータです。\\n\\n```python\\ndef logger(func):\\n    def wrapper():\\n        print('開始')\\n        func()\\n        print('終了')\\n    return wrapper\\n\\n@logger\\ndef hello():\\n    print('こんにちは')\\n\\nhello()\\n# 開始\\n# こんにちは\\n# 終了\\n```\\n\\n`@デコレータ名` を関数の上に書くと、その関数が拡張されます。"
    },
    {
      "title": "any と all",
      "content": "リストの要素をまとめてチェックする関数です。\\n\\n```python\\nnums = [1, 2, 3, 4, 5]\\n\\n# 全てが条件を満たすか\\nprint(all(x > 0 for x in nums))  # True\\n\\n# どれか1つでも満たすか\\nprint(any(x > 4 for x in nums))  # True\\n```\\n\\n`all` は「全部」、`any` は「どれか1つでも」を判定します。"
    }
  ],
  "exercises": [
    {
      "title": "ラムダ式（無名関数）",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "ラムダ式とは？",
          "content": "# 名前のない「ミニ関数」を作ろう！\\n\\n**ラムダ式**（または **無名関数**）は、**名前をつけない小さな関数** を1行で書く方法です。\\n\\n普通の関数は `def` を使って名前をつけますが、ラムダ式は名前なしで **サッと作ってすぐ使える** 関数です。\\n\\n**比較：** 同じことをする2つの書き方\\n\\n```python\\n# 通常の関数（名前つき）\\ndef double(x):\\n    return x * 2\\n\\n# ラムダ式（名前なし）\\ndouble = lambda x: x * 2\\n```\\n\\nどちらも「xを2倍にする」という同じ働きをします。\\n\\n**ポイント：** ラムダ式は **1行で済む簡単な計算** に向いています！"
        },
        {
          "title": "ラムダ式の使い方",
          "content": "# lambda 引数: 戻り値\\n\\n**書き方：** `lambda 引数: 計算式`\\n\\nラムダ式は `map` や `filter` などの関数と組み合わせると特に便利です。\\n\\n**例：** リストの全ての数を2倍にしよう！\\n\\n```python\\nnums = [1, 2, 3]\\ndoubled = list(map(lambda x: x * 2, nums))\\nprint(doubled)  # [2, 4, 6]\\n```\\n\\n**何をしているか：**\\n1. `nums` は [1, 2, 3] というリスト\\n2. `map()` でリストの各要素に関数を適用する\\n3. `lambda x: x * 2` で「xを2倍にする」関数を定義\\n4. 結果として [2, 4, 6] ができる！\\n\\n**使いどころ：** 1回しか使わない簡単な関数を、わざわざ名前をつけずにサッと作りたいとき！"
        }
      ],
      "correctCode": "# 引数xの2乗を計算するlambda式をsquareに代入\\nsquare = lambda x: x ** 2\\n# print関数でsquare関数を引数5で呼び出した結果を表示\\nprint(square(5))",
      "holeyCode": "# 引数xの2乗を計算するlambda式をsquareに代入\\n___ = lambda ___: ___ ___ ___\\n# print関数でsquare関数を引数5で呼び出した結果を表示\\n___(___(___))",
      "correctLines": [
          "# 引数xの2乗を計算するlambda式をsquareに代入",
          "square = lambda x: x ** 2",
          "# print関数でsquare関数を引数5で呼び出した結果を表示",
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
      "description": "*args（可変長引数）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "*args とは？",
          "content": "# いくつでも引数を受け取れる！\\n\\n**\\*args（アスタリスク・アーグス）** を使うと、**何個でも引数を受け取れる** 関数が作れます。\\n\\n「args」は「arguments（引数）」の略です。\\n\\nたとえば、「1個でも、10個でも、100個でも数を受け取って合計する」という関数が作れます！\\n\\n**例：** 全部足し算しよう！\\n\\n```python\\ndef sum_all(*args):\\n    return sum(args)\\n\\nprint(sum_all(1, 2, 3))\\nprint(sum_all(1, 2, 3, 4, 5))\\n```\\n\\n=> 6\\n\\n=> 15\\n\\n**ポイント：** 受け取った引数は **タプル**（リストに似たデータ）として扱われます。"
        },
        {
          "title": "*args の使い方",
          "content": "# 引数名は自由につけられる！\\n\\n`*args` の「args」の部分は、好きな名前に変えてOKです。\\n\\n大事なのは **「*」（アスタリスク）** をつけることです！\\n\\n**例：** みんなにあいさつしよう！\\n\\n```python\\ndef greet(*names):\\n    for name in names:\\n        print(f'Hello, {name}!')\\n\\ngreet('Alice', 'Bob', 'Charlie')\\n```\\n=> Hello, Alice!\\n=> Hello, Bob!\\n=> Hello, Charlie!\\n\\n**何をしているか：**\\n1. `greet('Alice', 'Bob', 'Charlie')` で3人の名前を渡す\\n2. `*names` で全ての名前をまとめて受け取る\\n3. `for` ループで1人ずつあいさつする\\n\\n**使いどころ：** 引数の数が決まっていない関数を作りたいとき！"
        }
      ],
      "correctCode": "# defでfind_max関数を定義（引数*args）\\ndef find_max(*args):\\n    # argsのインデックス0をmax_valに代入\\n    max_val = args[0]\\n    # forでargsの各要素をnに代入してループ\\n    for n in args:\\n        # ifでnがmax_valより大きい場合\\n        if n > max_val:\\n            # max_valにnを代入\\n            max_val = n\\n    # returnでmax_valを返す\\n    return max_val\\n\\n# print関数でfind_max関数（引数3、7、2、9、5）の結果を表示\\nprint(find_max(3, 7, 2, 9, 5))",
      "holeyCode": "# defでfind_max関数を定義（引数*args）\\ndef ___(*___):\\n    # argsのインデックス0をmax_valに代入\\n    ___ = ___[___]\\n    # forでargsの各要素をnに代入してループ\\n    for ___ in ___:\\n        # ifでnがmax_valより大きい場合\\n        if ___ ___ ___:\\n            # max_valにnを代入\\n            ___ = ___\\n    # returnでmax_valを返す\\n    return ___\\n\\n# print関数でfind_max関数（引数3、7、2、9、5）の結果を表示\\n___(___(3, 7, 2, 9, 5))",
      "correctLines": [
          "# defでfind_max関数を定義（引数*args）",
          "def find_max(*args):",
          "    # argsのインデックス0をmax_valに代入",
          "    max_val = args[0]",
          "    # forでargsの各要素をnに代入してループ",
          "    for n in args:",
          "        # ifでnがmax_valより大きい場合",
          "        if n > max_val:",
          "            # max_valにnを代入",
          "            max_val = n",
          "    # returnでmax_valを返す",
          "    return max_val",
          "",
          "# print関数でfind_max関数（引数3、7、2、9、5）の結果を表示",
          "print(find_max(3, 7, 2, 9, 5))"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "variables": ["args", "n", "max_val"],
          "others": ["find_max", "0", ">", "print", "*", "値を返す"]
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
      "description": "名前付きの引数について学びます",
      "tutorialSlides": [
        {
          "title": "**kwargs とは？",
          "content": "# 「名前付き」の引数をいくつでも受け取れる！\\n\\n**\\*\\*kwargs（ダブルアスタリスク・クワーグス）** を使うと、**名前付きの引数** をいくつでも受け取れます。\\n\\n「kwargs」は「keyword arguments（キーワード引数）」の略です。\\n\\n**\\*args** は「1, 2, 3」のような **値だけ** を受け取りますが、\\n**\\*\\*kwargs** は「name='太郎', age=20」のような **名前と値のペア** を受け取ります。\\n\\n**例：** 情報を表示しよう！\\n\\n```python\\ndef show_info(**kwargs):\\n    for key, value in kwargs.items():\\n        print(f'{key}: {value}')\\n\\nshow_info(name='太郎', age=20)\\n```\\n=> name: 太郎\\n=> age: 20"
        },
        {
          "title": "**kwargs の使い方",
          "content": "# 辞書として扱える！\\n\\n受け取った `kwargs` は **辞書** として使えます。\\n\\n`.items()`, `.keys()`, `.values()` などのメソッドが使えます！\\n\\n**例：** ユーザー情報を作ろう！\\n\\n```python\\ndef create_user(**kwargs):\\n    return kwargs\\n\\nuser = create_user(name='花子', email='hanako@example.com')\\nprint(user['name'])\\n```\\n\\n=> 花子\\n\\n**何をしているか：**\\n1. `create_user(name='花子', email='...')` で名前付き引数を渡す\\n2. `**kwargs` でそれらを辞書として受け取る\\n3. `{'name': '花子', 'email': '...'}` という辞書が返される\\n4. `user['name']` で「花子」が取り出せる！\\n\\n**使いどころ：** 設定項目（オプション）をたくさん渡したいとき！"
        }
      ],
      "correctCode": "# defでprint_info関数を定義（引数**kwargs）\\ndef print_info(**kwargs):\\n    # kwargsからitems()でキーkと値vを取得してループ\\n    for k, v in kwargs.items():\\n        # print関数でkとvを埋め込んで「(kの値) = (vの値)」形式で出力\\n        print(f'{k} = {v}')\\n\\n# print_info関数をキーワード引数（xに10、yに20）で呼び出す\\nprint_info(x=10, y=20)",
      "holeyCode": "# defでprint_info関数を定義（引数**kwargs）\\ndef ___(___):\\n    # kwargsからitems()でキーkと値vを取得してループ\\n    for ___, ___ in ___.___():\\n        # print関数でkとvを埋め込んで「(kの値) = (vの値)」形式で出力\\n        ___(f'{___} = {___}')\\n\\n# print_info関数をキーワード引数（xに10、yに20）で呼び出す\\n___(___=___, ___=___)",
      "correctLines": [
          "# defでprint_info関数を定義（引数**kwargs）",
          "def print_info(**kwargs):",
          "    # kwargsからitems()でキーkと値vを取得してループ",
          "    for k, v in kwargs.items():",
          "        # print関数でkとvを埋め込んで「(kの値) = (vの値)」形式で出力",
          "        print(f'{k} = {v}')",
          "",
          "# print_info関数をキーワード引数（xに10、yに20）で呼び出す",
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
      "description": "enumerate で番号付きループの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "enumerate とは？",
          "content": "# 番号と要素を一緒に取得しよう！\\n\\n**enumerate（イニュメレイト）** を使うと、ループで **番号（インデックス）と要素を同時に** 取得できます。\\n\\n「enumerate」は「番号をつける」という意味です。\\n\\nたとえば、「1番目のりんご、2番目のバナナ...」と番号付きで表示したいときに便利です！\\n\\n**例：** くだものに番号をつけよう！\\n\\n```python\\nfruits = ['apple', 'banana', 'cherry']\\nfor i, fruit in enumerate(fruits):\\n    print(f'{i}: {fruit}')\\n```\\n=> 0: apple\\n=> 1: banana\\n=> 2: cherry\\n\\n`i` に番号、`fruit` に要素が入ります！"
        },
        {
          "title": "開始番号を指定する",
          "content": "# start で開始番号を変えられる！\\n\\nデフォルトでは0から始まりますが、`start=1` で **1から始める** こともできます。\\n\\n人間は「1番目、2番目...」と数えることが多いですよね。そんなときに便利です！\\n\\n**例：** 1番目から始めよう！\\n\\n```python\\nfruits = ['apple', 'banana', 'cherry']\\nfor i, fruit in enumerate(fruits, start=1):\\n    print(f'{i}番目: {fruit}')\\n```\\n=> 1番目: apple\\n=> 2番目: banana\\n=> 3番目: cherry\\n\\n**何をしているか：**\\n- `start=1` で開始番号を1に設定\\n- ループするたびに番号が1ずつ増える\\n\\n**ポイント：** `start` を使わないと0から始まります！"
        }
      ],
      "correctCode": "# 色配列（あか、みどり、あお）をcolorsに代入\\ncolors = ['あか', 'みどり', 'あお']\\n# colorsからenumerate()でインデックスiと要素colorを取得しループ\\nfor i, color in enumerate(colors):\\n    # print関数でiとcolorを埋め込んで「(iの値): (colorの値)」形式で出力\\n    print(f'{i}: {color}')",
      "holeyCode": "# 色配列（あか、みどり、あお）をcolorsに代入\\n___ = ['___', '___', '___']\\n# colorsからenumerate()でインデックスiと要素colorを取得しループ\\nfor ___, ___ in ___(___):\\n    # print関数でiとcolorを埋め込んで「(iの値): (colorの値)」形式で出力\\n    ___(f'{___}: {___}')",
      "correctLines": [
          "# 色配列（あか、みどり、あお）をcolorsに代入",
          "colors = ['あか', 'みどり', 'あお']",
          "# colorsからenumerate()でインデックスiと要素colorを取得しループ",
          "for i, color in enumerate(colors):",
          "    # print関数でiとcolorを埋め込んで「(iの値): (colorの値)」形式で出力",
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
          "others": ["colors", "あか", "みどり", "あお", "i", "color", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0: あか\\n1: みどり\\n2: あお\\n"
          }
        ]
      },
    {
      "title": "zip で複数リストを同時にループ",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "zip とは？",
          "content": "# 複数のリストを「ジッパー」でつなごう！\\n\\n**zip（ジップ）** を使うと、**複数のリストの要素を同時に** 取り出せます。\\n\\n「zip」はジッパー（ファスナー）のことです。2つのものを噛み合わせるイメージです！\\n\\nたとえば、「名前のリスト」と「年齢のリスト」を **ペアにして** 処理したいときに便利です。\\n\\n**例：** 名前と年齢をペアにしよう！\\n\\n```python\\nnames = ['Alice', 'Bob']\\nages = [20, 25]\\nfor name, age in zip(names, ages):\\n    print(f'{name} is {age}')\\n```\\n=> Alice is 20\\n=> Bob is 25\\n\\n1番目どうし、2番目どうしがペアになります！"
        },
        {
          "title": "zip の使い方",
          "content": "# 短い方に合わせる！\\n\\nリストの長さが違う場合、**短い方に合わせて** ループが終了します。\\n\\n**例：** 長さの違うリストを zip しよう！\\n\\n```python\\na = [1, 2, 3]\\nb = ['x', 'y']\\nprint(list(zip(a, b)))  # [(1, 'x'), (2, 'y')]\\n```\\n\\n**何をしているか：**\\n- `a` は3つ、`b` は2つの要素がある\\n- 短い `b` に合わせて2ペアだけ作られる\\n- 3番目の「3」は相手がいないので含まれない\\n\\n**注意：** はみ出した要素は無視されます！\\n\\n**使いどころ：** 2つ以上のリストを **並行して（同時に）** 処理したいとき！"
        }
      ],
      "correctCode": "# 英単語配列（a、b、c）をkeysに代入\\nkeys = ['a', 'b', 'c']\\n# 数値配列（1、2、3）をvaluesに代入\\nvalues = [1, 2, 3]\\n# zip関数（引数keys, values）からkとvのペアを取得してループ\\nfor k, v in zip(keys, values):\\n    # print関数でkとvを埋め込んで「(kの値): (vの値)」形式で出力\\n    print(f'{k}: {v}')",
      "holeyCode": "# 英単語配列（a、b、c）をkeysに代入\\n___ = ['___', '___', '___']\\n# 数値配列（1、2、3）をvaluesに代入\\n___ = [___, ___, ___]\\n# zip関数（引数keys, values）からkとvのペアを取得してループ\\nfor ___, ___ in ___(___, ___):\\n    # print関数でkとvを埋め込んで「(kの値): (vの値)」形式で出力\\n    ___(f'{___}: {___}')",
      "correctLines": [
          "# 英単語配列（a、b、c）をkeysに代入",
          "keys = ['a', 'b', 'c']",
          "# 数値配列（1、2、3）をvaluesに代入",
          "values = [1, 2, 3]",
          "# zip関数（引数keys, values）からkとvのペアを取得してループ",
          "for k, v in zip(keys, values):",
          "    # print関数でkとvを埋め込んで「(kの値): (vの値)」形式で出力",
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
      "description": "メモリを節約しながら値を順番に生成する仕組みを学びます",
      "tutorialSlides": [
        {
          "title": "ジェネレータとは？",
          "content": "# 値を「1つずつ」作る工場！\\n\\n**ジェネレータ** とは、値を **一度に全部作らず、必要なときに1つずつ生成する** 特別な関数です。\\n\\nたとえば、パン工場で1000個のパンを作るとき：\\n- **リスト** = 1000個全部作ってから渡す（場所をたくさん使う）\\n- **ジェネレータ** = 1個作って渡す、1個作って渡す...（場所を節約）\\n\\n**yield（イールド）** キーワードを使って定義します。「yield」は「生み出す」という意味です。\\n\\n**例：** 数を1つずつ生成しよう！\\n\\n```python\\ndef count_up(n):\\n    for i in range(n):\\n        yield i\\n\\nfor num in count_up(3):\\n    print(num)  # 0, 1, 2\\n```"
        },
        {
          "title": "ジェネレータの利点",
          "content": "# 大量のデータを効率よく処理！\\n\\nリストは全データを **メモリ（コンピュータの記憶場所）** に保持しますが、ジェネレータは **1つずつ作るのでメモリを節約** できます。\\n\\n**例：** 1億個の数を生成しても大丈夫！\\n\\n```python\\ndef big_range(n):\\n    i = 0\\n    while i < n:\\n        yield i\\n        i += 1\\n```\\n\\n**何をしているか：**\\n- `yield i` で値を1つ返す\\n- 次に呼ばれるまで **一時停止**\\n- 次に呼ばれたら `i += 1` して続きを実行\\n\\n**ポイント：**\\n- `return` は関数を終了して値を返す\\n- `yield` は値を返すけど関数は **一時停止** するだけ（終了しない）\\n\\n**使いどころ：** 大量のデータを扱うとき、メモリを節約したいとき！"
        }
      ],
      "correctCode": "# defでeven_numbersジェネレータ関数を定義（引数n）\\ndef even_numbers(n):\\n    # forでiを0からn-1までrange関数でループ\\n    for i in range(n):\\n        # yieldでiの2倍（偶数）を返す\\n        yield i * 2\\n\\n# even_numbers関数（引数4）の各結果をnumに代入してループ\\nfor num in even_numbers(4):\\n    # print関数でnumを表示\\n    print(num)",
      "holeyCode": "# defでeven_numbersジェネレータ関数を定義（引数n）\\ndef ___(___):\\n    # forでiを0からn-1までrange関数でループ\\n    for ___ in ___(___):\\n        # yieldでiの2倍（偶数）を返す\\n        ___ ___ ___ ___\\n\\n# even_numbers関数（引数4）の各結果をnumに代入してループ\\nfor ___ in ___(___):\\n    # print関数でnumを表示\\n    ___(___)",
      "correctLines": [
          "# defでeven_numbersジェネレータ関数を定義（引数n）",
          "def even_numbers(n):",
          "    # forでiを0からn-1までrange関数でループ",
          "    for i in range(n):",
          "        # yieldでiの2倍（ぐうすう）を返す",
          "        yield i * 2",
          "",
          "# even_numbers関数（引数4）の各結果をnumに代入してループ",
          "for num in even_numbers(4):",
          "    # print関数でnumを表示",
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
      "description": "メモリを節約しながら値を順番に生成する仕組みを学びます",
      "tutorialSlides": [
        {
          "title": "ジェネレータ式とは？",
          "content": "# カッコを変えるだけでジェネレータに！\\n\\n**ジェネレータ式** は、リスト内包表記の `[ ]` を `( )` に変えるだけで作れます。\\n\\nとても簡単！\\n\\n**比較：** リスト内包表記 vs ジェネレータ式\\n\\n```python\\n# リスト内包表記 → 全部作ってメモリに保存\\nsquares = [x**2 for x in range(5)]\\n\\n# ジェネレータ式 → 必要なときに1つずつ作る\\nsquares = (x**2 for x in range(5))\\n```\\n\\n見た目はほとんど同じですが、カッコが違うだけで **動きが全然違います**！\\n\\n**使い分け：**\\n- 全データを何度も使う → リスト `[ ]`\\n- 1回だけ順番に使う → ジェネレータ `( )`"
        },
        {
          "title": "ジェネレータ式の使い方",
          "content": "# sum や max と組み合わせると便利！\\n\\n`sum()`（合計）や `max()`（最大値）などの関数に **直接渡す** と効率的です。\\n\\n**例：** 2乗の合計を計算しよう！\\n\\n```python\\ntotal = sum(x**2 for x in range(5))\\nprint(total)\\n```\\n\\n=> 30\\n\\n**何をしているか：**\\n1. `range(5)` で 0, 1, 2, 3, 4 を生成\\n2. 各数を2乗（0, 1, 4, 9, 16）\\n3. `sum()` で合計 → 0+1+4+9+16 = 30\\n\\n**ポイント：** `sum()` に渡すとき、外側のカッコを省略できます！\\n\\n```python\\n# これでOK（カッコを省略）\\nsum(x**2 for x in range(5))\\n\\n# こう書かなくてもいい\\nsum((x**2 for x in range(5)))\\n```"
        }
      ],
      "correctCode": "# numsにrange関数（引数1、6）を代入\\nnums = range(1, 6)\\n# sum関数でnumsの各xを2乗した合計をtotalに代入（ジェネレータ式）\\ntotal = sum(x * x for x in nums)\\n# print関数でtotalを表示\\nprint(total)",
      "holeyCode": "# numsにrange関数（引数1、6）を代入\\n___ = ___(___, ___)\\n# sum関数でnumsの各xを2乗した合計をtotalに代入（ジェネレータ式）\\n___ = ___(___ ___ ___ for ___ in ___)\\n# print関数でtotalを表示\\n___(___)",
      "correctLines": [
          "# numsにrange関数（引数1、6）を代入",
          "nums = range(1, 6)",
          "# sum関数でnumsの各xを2乗した合計をtotalに代入（ジェネレータ式）",
          "total = sum(x * x for x in nums)",
          "# print関数でtotalを表示",
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
      "description": "関数の機能を後から拡張できる「デコレータ」を学びます",
      "tutorialSlides": [
        {
          "title": "デコレータとは？",
          "content": "# 関数を「飾り付け」しよう！\\n\\n**デコレータ** は、関数に **追加の機能をつける** 仕組みです。\\n\\n「デコレーション」は「飾り付け」という意味ですね。ケーキにクリームで飾りをつけるように、関数に機能を追加します！\\n\\n**例：** 関数の前後にメッセージを追加！\\n\\n```python\\ndef my_decorator(func):\\n    def wrapper():\\n        print('Before')  # 前に追加\\n        func()           # 元の関数を実行\\n        print('After')   # 後に追加\\n    return wrapper\\n\\n@my_decorator\\ndef say_hello():\\n    print('Hello!')\\n```\\n\\n**仕組み：**\\n- デコレータは「関数を受け取って、新しい関数を返す関数」\\n- 元の関数を「包んで」、追加の処理をつける"
        },
        {
          "title": "デコレータの使い方",
          "content": "# @ で関数に適用しよう！\\n\\n`@デコレータ名` を関数の上に書くだけで適用できます。\\n\\n**例：** デコレータを使ってみよう！\\n\\n```python\\n@my_decorator\\ndef say_hello():\\n    print('Hello!')\\n\\nsay_hello()\\n```\\n=> Before\\n=> Hello!\\n=> After\\n\\n**何をしているか：**\\n1. `@my_decorator` で `say_hello` 関数にデコレータを適用\\n2. `say_hello()` を呼ぶと、まず「Before」が表示される\\n3. 次に元の `say_hello`（「Hello!」）が実行される\\n4. 最後に「After」が表示される\\n\\n**使いどころ：**\\n- ログ（記録）を残したいとき\\n- 実行時間を計りたいとき\\n- 権限チェックをしたいとき"
        }
      ],
      "correctCode": "# defでshow_callデコレータ関数を定義（引数func）\\ndef show_call(func):\\n    # defで内部関数wrapperを定義\\n    def wrapper():\\n        # print関数で「関数を呼び出します」を表示\\n        print('関数を呼び出します')\\n        # func関数を呼び出す\\n        func()\\n    # returnでwrapperを返す\\n    return wrapper\\n\\n# @show_callを適用\\n@show_call\\n# defでgreet関数を定義\\ndef greet():\\n    # print関数で「こんにちは！」を表示\\n    print('こんにちは！')\\n\\n# greet関数を呼び出す\\ngreet()",
      "holeyCode": "# defでshow_callデコレータ関数を定義（引数func）\\ndef ___(___) :\\n    # defで内部関数wrapperを定義\\n    def ___():\\n        # print関数で「関数を呼び出します」を表示\\n        ___('___')\\n        # func関数を呼び出す\\n        ___()\\n    # returnでwrapperを返す\\n    return ___\\n\\n# @show_callを適用\\n@___\\n# defでgreet関数を定義\\ndef ___():\\n    # print関数で「こんにちは！」を表示\\n    ___('___')\\n\\n# greet関数を呼び出す\\n___()",
      "correctLines": [
          "# defでshow_callデコレータ関数を定義（引数func）",
          "def show_call(func):",
          "    # defで内部関数wrapperを定義",
          "    def wrapper():",
          "        # print関数で「関数を呼び出します」を表示",
          "        print('関数を呼び出します')",
          "        # func関数を呼び出す",
          "        func()",
          "    # returnでwrapperを返す",
          "    return wrapper",
          "",
          "# @show_callを適用",
          "@show_call",
          "# defでgreet関数を定義",
          "def greet():",
          "    # print関数で「こんにちは！」を表示",
          "    print('こんにちは！')",
          "",
          "# greet関数を呼び出す",
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
          "引数として受け取った関数を実行します。",
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
          "greet()を呼び出します。"
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
      "description": "any と allの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "any とは？",
          "content": "# 「1つでもOKならOK！」をチェック\\n\\n**any（エニー）** は、リストの中に **1つでも True（正しい）があれば True** を返します。\\n\\n「any」は「どれか」という意味です。「どれか1つでも当てはまる？」とチェックします。\\n\\n**例：** 合格者がいるかチェック！\\n\\n```python\\nnums = [0, 0, 1, 0]\\nprint(any(nums))\\n\\n# 5より大きい数はある？\\nprint(any(x > 5 for x in [1, 2, 10]))\\n```\\n\\n=> True（1が True）\\n\\n=> True（10が該当）\\n\\n**ポイント：** 0は False、0以外の数は True として扱われます。"
        },
        {
          "title": "all とは？",
          "content": "# 「全部OKならOK！」をチェック\\n\\n**all（オール）** は、リストの **全てが True のときだけ True** を返します。\\n\\n「all」は「全て」という意味です。「全部当てはまる？」とチェックします。\\n\\n**例：** 全員合格かチェック！\\n\\n```python\\nnums = [1, 2, 3]\\nprint(all(nums))\\n\\n# 全部0より大きい？\\nprint(all(x > 0 for x in [1, 2, 3]))\\nprint(all(x > 0 for x in [1, -1, 3]))\\n```\\n\\n=> True（全部0以外）\\n\\n=> True\\n\\n=> False（-1がNG）\\n\\n**any vs all の違い：**\\n- **any** = 1つでも True なら True（「または」的）\\n- **all** = 全部 True なら True（「かつ」的）"
        }
      ],
      "correctCode": "# 数値配列（1、2、3、4、5）をnumsに代入\\nnums = [1, 2, 3, 4, 5]\\n# all関数でnumsの各要素xが0より大きいか判定しresultに代入\\nresult = all(x > 0 for x in nums)\\n# print関数でresultを表示\\nprint(result)",
      "holeyCode": "# 数値配列（1、2、3、4、5）をnumsに代入\\n___ = [___, ___, ___, ___, ___]\\n# all関数でnumsの各要素xが0より大きいか判定しresultに代入\\n___ = ___(___ ___ ___ for ___ in ___)\\n# print関数でresultを表示\\n___(___)",
      "correctLines": [
          "# 数値配列（1、2、3、4、5）をnumsに代入",
          "nums = [1, 2, 3, 4, 5]",
          "# all関数でnumsの各要素xが0より大きいか判定しresultに代入",
          "result = all(x > 0 for x in nums)",
          "# print関数でresultを表示",
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