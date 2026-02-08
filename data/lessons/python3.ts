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
            "content": "# 名前のない「ミニ関数」を作ろう！\\n\\n**ラムダ式**（または **無名関数**）は、**名前をつけない小さな関数** を1行で書く方法です。\\n\\n普通の関数は `def` を使って名前をつけますが、ラムダ式は名前なしで **サッと作ってすぐ使える** 関数です。\\n\\n**比較：** 同じことをする2つの書き方\\n\\n```python\\n# 通常の関数（名前つき）\\ndef double(x):\\n    return x * 2\\n\\n# ラムダ式（名前なし）\\ndouble = lambda x: x * 2\\n```\\n\\nどちらも「xを2倍にする」という同じ働きをします。\\n\\n**ポイント：** ラムダ式は **1行で済む簡単な計算** に向いています！"
          },
          {
            "title": "ラムダ式の使い方",
            "content": "# lambda 引数: 戻り値\\n\\n**書き方：** `lambda 引数: 計算式`\\n\\nラムダ式は `map` や `filter` などの関数と組み合わせると特に便利です。\\n\\n**例：** リストの全ての数を2倍にしよう！\\n\\n```python\\nnums = [1, 2, 3]\\ndoubled = list(map(lambda x: x * 2, nums))\\nprint(doubled)  # [2, 4, 6]\\n```\\n\\n**何をしているか：**\\n1. `nums` は [1, 2, 3] というリスト\\n2. `map()` でリストの各要素に関数を適用する\\n3. `lambda x: x * 2` で「xを2倍にする」関数を定義\\n4. 結果として [2, 4, 6] ができる！\\n\\n**使いどころ：** 1回しか使わない簡単な関数を、わざわざ名前をつけずにサッと作りたいとき！"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["square(5", "2", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\
"
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
            "content": "# いくつでも引数を受け取れる！\\n\\n**\\*args（アスタリスク・アーグス）** を使うと、**何個でも引数を受け取れる** 関数が作れます。\\n\\n「args」は「arguments（引数）」の略です。\\n\\nたとえば、「1個でも、10個でも、100個でも数を受け取って合計する」という関数が作れます！\\n\\n**例：** 全部足し算しよう！\\n\\n```python\\ndef sum_all(*args):\\n    return sum(args)\\n\\nprint(sum_all(1, 2, 3))  # => 6\\nprint(sum_all(1, 2, 3, 4, 5))  # => 15\\n```\\n\\n**ポイント：** 受け取った引数は **タプル**（リストに似たデータ）として扱われます。"
          },
          {
            "title": "*args の使い方",
            "content": "# 引数名は自由につけられる！\\n\\n`*args` の「args」の部分は、好きな名前に変えてOKです。\\n\\n大事なのは **「*」（アスタリスク）** をつけることです！\\n\\n**例：** みんなにあいさつしよう！\\n\\n```python\\ndef greet(*names):\\n    for name in names:\\n        print(f'こんにちは、{name}さん！')\\n\\ngreet('アリス', 'ボブ', 'チャーリー')\\n```\\n=> こんにちは、アリスさん！\\n=> こんにちは、ボブさん！\\n=> こんにちは、チャーリーさん！\\n\\n**何をしているか：**\\n1. `greet('アリス', 'ボブ', 'チャーリー')` で3人の名前を渡す\\n2. `*names` で全ての名前をまとめて受け取る\\n3. `for` ループで1人ずつあいさつする\\n\\n**使いどころ：** 引数の数が決まっていない関数を作りたいとき！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 全ての数値から最大値を求めるfind_max関数を定義\\ndef find_max(*args):\\n    # 最大値を最初の引数で初期化\\n    max_val = args[0]\\n    # 渡された全ての引数をループで処理\\n    for n in args:\\n        # より大きい値があれば更新\\n        if n > max_val:\\n            max_val = n\\n    # 最終的な最大値を返す\\n    return max_val\\n\\n# find_max(3, 7, 2, 9, 5)の結果を表示\\nprint(find_max(3, 7, 2, 9, 5))",
        "holeyCode": "# 全ての数値から最大値を求めるfind_max関数を定義\\ndef ___(*args):\\n    # 最大値を最初の引数で初期化\\n    max_val = args[___]\\n    # 渡された全ての引数をループで処理\\n    for n in ___:\\n        # より大きい値があれば更新\\n        if n > ___:\\n            max_val = ___\\n    # 最終的な最大値を返す\\n    return ___\\n\\n# find_max(3, 7, 2, 9, 5)の結果を表示\\n___(find_max(3, 7, 2, 9, 5))",
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
          "others": [
            "find_max",
            "0",
            "args",
            "n",
            "max_val",
            "print"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "9\
"
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
            "content": "# 「名前付き」の引数をいくつでも受け取れる！\\n\\n**\\*\\*kwargs（ダブルアスタリスク・クワーグス）** を使うと、**名前付きの引数** をいくつでも受け取れます。\\n\\n「kwargs」は「keyword arguments（キーワード引数）」の略です。\\n\\n**\\*args** は「1, 2, 3」のような **値だけ** を受け取りますが、\\n**\\*\\*kwargs** は「name='太郎', age=20」のような **名前と値のペア** を受け取ります。\\n\\n**例：** 情報を表示しよう！\\n\\n```python\\ndef show_info(**kwargs):\\n    for key, value in kwargs.items():\\n        print(f'{key}: {value}')\\n\\nshow_info(name='太郎', age=20)\\n```\\n=> name: 太郎\\n=> age: 20"
          },
          {
            "title": "**kwargs の使い方",
            "content": "# 辞書（じしょ）として扱える！\\n\\n受け取った `kwargs` は **辞書** として使えます。\\n\\n`.items()`, `.keys()`, `.values()` などのメソッドが使えます！\\n\\n**例：** ユーザー情報を作ろう！\\n\\n```python\\ndef create_user(**kwargs):\\n    return kwargs\\n\\nuser = create_user(name='花子', email='hanako@example.com')\\nprint(user['名前'])  # => 花子\\n```\\n\\n**何をしているか：**\\n1. `create_user(name='花子', email='...')` で名前付き引数を渡す\\n2. `**kwargs` でそれらを辞書として受け取る\\n3. `{'名前': '花子', 'email': '...'}` という辞書が返される\\n4. `user['名前']` で「花子」が取り出せる！\\n\\n**使いどころ：** 設定項目（オプション）をたくさん渡したいとき！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# キーワード引数を受け取って表示するprint_info関数を定義\\ndef print_info(**kwargs):\\n    # 1番目の k にキー、2番目の v に値が入る\\n    for k, v in kwargs.items():\\n        # キーと値をイコールで繋いで表示\\n        print(f'{k} = {v}')\\n\\n# print_info(x=10, y=20)を実行\\nprint_info(x=10, y=20)",
        "holeyCode": "# キーワード引数を受け取って表示するprint_info関数を定義\\ndef ___(**kwargs):\\n    # 1番目の k にキー、2番目の v に値が入る\\n    for k, v in kwargs.___():\\n        # キーと値をイコールで繋いで表示\\n        ___(f'{k} = {v}')\\n\\n# print_info(x=10, y=20)を実行\\nprint_info(x=___, y=20)",
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
          "others": ["kwargs.items()", "f'{k} = {v}'", "print_info(x=10, y=20)", "print_info", "items", "print", "10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "x = 10\
y = 20\
"
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
            "content": "# 番号と要素を一緒に取得しよう！\\n\\n**enumerate（イニュメレイト）** を使うと、ループで **番号（インデックス）と要素を同時に** 取得できます。\\n\\n「enumerate」は「番号をつける」という意味です。\\n\\nたとえば、「1番目のりんご、2番目のバナナ...」と番号付きで表示したいときに便利です！\\n\\n**例：** くだものに番号をつけよう！\\n\\n```python\\nfruits = ['りんご', 'バナナ', 'さくらんぼ']\\nfor i, fruit in enumerate(fruits):\\n    print(f'{i}: {fruit}')\\n```\\n=> 0: りんご\\n=> 1: バナナ\\n=> 2: さくらんぼ\\n\\n`i` に番号、`fruit` に要素が入ります！"
          },
          {
            "title": "開始番号を指定する",
            "content": "# start で開始番号を変えられる！\\n\\nデフォルトでは0から始まりますが、`start=1` で **1から始める** こともできます。\\n\\n人間は「1番目、2番目...」と数えることが多いですよね。そんなときに便利です！\\n\\n**例：** 1番目から始めよう！\\n\\n```python\\nfruits = ['りんご', 'バナナ', 'さくらんぼ']\\nfor i, fruit in enumerate(fruits, start=1):\\n    print(f'{i}番目: {fruit}')\\n```\\n=> 1番目: りんご\\n=> 2番目: バナナ\\n=> 3番目: さくらんぼ\\n\\n**何をしているか：**\\n- `start=1` で開始番号を1に設定\\n- ループするたびに番号が1ずつ増える\\n\\n**ポイント：** `start` を使わないと0から始まります！"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "0: 赤\
1: 緑\
2: 青\
"
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
            "content": "# 複数のリストを「ジッパー」でつなごう！\\n\\n**zip（ジップ）** を使うと、**複数のリストの要素を同時に** 取り出せます。\\n\\n「zip」はジッパー（ファスナー）のことです。2つのものを噛（か）み合わせるイメージです！\\n\\nたとえば、「名前のリスト」と「年齢のリスト」を **ペアにして** 処理したいときに便利です。\\n\\n**例：** 名前と年齢をペアにしよう！\\n\\n```python\\nnames = ['アリス', 'ボブ']\\nages = [20, 25]\\nfor name, age in zip(names, ages):\\n    print(f'{name} is {age}')\\n```\\n=> アリス is 20\\n=> ボブ is 25\\n\\n1番目どうし、2番目どうしがペアになります！"
          },
          {
            "title": "zip の使い方",
            "content": "# 短い方に合わせる！\\n\\nリストの長さが違う場合、**短い方に合わせて** ループが終了します。\\n\\n**例：** 長さの違うリストを zip しよう！\\n\\n```python\\na = [1, 2, 3]\\nb = ['x', 'y']\\nprint(list(zip(a, b)))  # [(1, 'x'), (2, 'y')]\\n```\\n\\n**何をしているか：**\\n- `a` は3つ、`b` は2つの要素がある\\n- 短い `b` に合わせて2ペアだけ作られる\\n- 3番目の「3」は相手がいないので含まれない\\n\\n**注意：** はみ出した要素は無視されます！\\n\\n**使いどころ：** 2つ以上のリストを **並行して（同時に）** 処理したいとき！"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "a: 1\
b: 2\
c: 3\
"
          }
        ]
      },
    {
        "title": "ジェネレータ（yield）",
        "description": "値を1つずつ生成するジェネレータを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "ジェネレータとは？",
            "content": "# 値を「1つずつ」作る工場！\\n\\n**ジェネレータ** とは、値を **一度に全部作らず、必要なときに1つずつ生成する** 特別な関数です。\\n\\nたとえば、パン工場で1000個のパンを作るとき：\\n- **リスト** = 1000個全部作ってから渡す（場所をたくさん使う）\\n- **ジェネレータ** = 1個作って渡す、1個作って渡す...（場所を節約）\\n\\n**yield（イールド）** キーワードを使って定義します。「yield」は「生み出す」という意味です。\\n\\n**例：** 数を1つずつ生成しよう！\\n\\n```python\\ndef count_up(n):\\n    for i in range(n):\\n        yield i\\n\\nfor num in count_up(3):\\n    print(num)  # 0, 1, 2\\n```"
          },
          {
            "title": "ジェネレータの利点（りてん）",
            "content": "# 大量のデータを効率よく処理！\\n\\nリストは全データを **メモリ（コンピュータの記憶場所）** に保持しますが、ジェネレータは **1つずつ作るのでメモリを節約** できます。\\n\\n**例：** 1億個の数を生成しても大丈夫！\\n\\n```python\\ndef big_range(n):\\n    i = 0\\n    while i < n:\\n        yield i\\n        i += 1\\n```\\n\\n**何をしているか：**\\n- `yield i` で値を1つ返す\\n- 次に呼ばれるまで **一時停止**\\n- 次に呼ばれたら `i += 1` して続きを実行\\n\\n**ポイント：**\\n- `return` は関数を終了して値を返す\\n- `yield` は値を返すけど関数は **一時停止** するだけ（終了しない）\\n\\n**使いどころ：** 大量のデータを扱うとき、メモリを節約したいとき！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 偶数を生成するeven_numbersジェネレータ関数を定義\\ndef even_numbers(n):\\n    # 指定された回数ループ\\n    for i in range(n):\\n        # i * 2（偶数）を返す\\n        yield i * 2\\n\\n# even_numbers(4)から値を取り出して表示\\nfor num in even_numbers(4):\\n    # 取り出した値を表示\\n    print(num)",
        "holeyCode": "# 偶数を生成するeven_numbersジェネレータ関数を定義\\ndef ___(n):\\n    # 指定された回数ループ\\n    for i in range(___):\\n        # i * 2（偶数）を返す\\n        yield i * ___\\n\\n# even_numbers(4)から値を取り出して表示\\nfor num in even_numbers(___):\\n    # 取り出した値を表示\\n    ___(num)",
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
          "others": ["even_numbers(n)", "range(n)", "even_numbers(4)", "even_numbers", "n", "2", "4", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\
2\
4\
6\
"
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
            "content": "# カッコを変えるだけでジェネレータに！\\n\\n**ジェネレータ式** は、リスト内包表記の `[ ]` を `( )` に変えるだけで作れます。\\n\\nとても簡単！\\n\\n**比較：** リスト内包表記 vs ジェネレータ式\\n\\n```python\\n# リスト内包表記 → 全部作ってメモリに保存\\nsquares = [x**2 for x in range(5)]\\n\\n# ジェネレータ式 → 必要なときに1つずつ作る\\nsquares = (x**2 for x in range(5))\\n```\\n\\n見た目はほとんど同じですが、カッコが違うだけで **動きが全然違います**！\\n\\n**使い分け：**\\n- 全データを何度も使う → リスト `[ ]`\\n- 1回だけ順番に使う → ジェネレータ `( )`"
          },
          {
            "title": "ジェネレータ式の使い方",
            "content": "# sum や max と組み合わせると便利！\\n\\n`sum()`（合計）や `max()`（最大値）などの関数に **直接渡す** と効率的です。\\n\\n**例：** 2乗の合計を計算しよう！\\n\\n```python\\ntotal = sum(x**2 for x in range(5))\\nprint(total)  # => 30\\n```\\n\\n**何をしているか：**\\n1. `range(5)` で 0, 1, 2, 3, 4 を生成\\n2. 各数を2乗（0, 1, 4, 9, 16）\\n3. `sum()` で合計 → 0+1+4+9+16 = 30\\n\\n**ポイント：** `sum()` に渡すとき、外側のカッコを省略できます！\\n\\n```python\\n# これでOK（カッコを省略）\\nsum(x**2 for x in range(5))\\n\\n# こう書かなくてもいい\\nsum((x**2 for x in range(5)))\\n```"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "55\
"
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
            "content": "# 関数を「飾（かざ）り付け」しよう！\\n\\n**デコレータ** は、関数に **追加の機能をつける** 仕組みです。\\n\\n「デコレーション」は「飾り付け」という意味ですね。ケーキにクリームで飾りをつけるように、関数に機能を追加します！\\n\\n**例：** 関数の前後にメッセージを追加！\\n\\n```python\\ndef my_decorator(func):\\n    def wrapper():\\n        print('前')    # 前に追加\\n        func()         # 元の関数を実行\\n        print('後')  # 後に追加\\n    return wrapper\\n\\n@my_decorator\\ndef say_hello():\\n    print('こんにちは！')\\n```\\n\\n**仕組み：**\\n- デコレータは「関数を受け取って、新しい関数を返す関数」\\n- 元の関数を「包んで」、追加の処理をつける"
          },
          {
            "title": "デコレータの使い方",
            "content": "# @ で関数に適用しよう！\\n\\n`@デコレータ名` を関数の上に書くだけで適用できます。\\n\\n**例：** デコレータを使ってみよう！\\n\\n```python\\n@my_decorator\\ndef say_hello():\\n    print('こんにちは！')\\n\\nsay_hello()\\n```\\n=> 前\\n=> こんにちは！\\n=> 後\\n\\n**何をしているか：**\\n1. `@my_decorator` で `say_hello` 関数にデコレータを適用\\n2. `say_hello()` を呼ぶと、まず「前」が表示される\\n3. 次に元の `say_hello`（「こんにちは！」）が実行される\\n4. 最後に「後」が表示される\\n\\n**使いどころ：**\\n- ログ（記録）を残したいとき\\n- 実行時間を計りたいとき\\n- 権限チェックをしたいとき"
          }
        ],
        "initialDisplayMode": "holey",
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
          "others": ["show_call(func)", "wrapper()", "'関数を呼び出します'", "func()", "wrapper", "greet()", "'Hello!'", "show_call", "print", "func", "greet"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "関数を呼び出します\
こんにちは！\
"
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
            "content": "# 「1つでもOKならOK！」をチェック\\n\\n**any（エニー）** は、リストの中に **1つでも True（正しい）があれば True** を返します。\\n\\n「any」は「どれか」という意味です。「どれか1つでも当てはまる？」とチェックします。\\n\\n**例：** 合格者がいるかチェック！\\n\\n```python\\nnums = [0, 0, 1, 0]\\nprint(any(nums))  # => True（1が True）\\n\\n# 5より大きい数はある？\\nprint(any(x > 5 for x in [1, 2, 10]))  # => True（10が該当）\\n```\\n\\n**ポイント：** 0は False、0以外の数は True として扱われます。"
          },
          {
            "title": "all とは？",
            "content": "# 「全部OKならOK！」をチェック\\n\\n**all（オール）** は、リストの **全てが True のときだけ True** を返します。\\n\\n「all」は「全て」という意味です。「全部当てはまる？」とチェックします。\\n\\n**例：** 全員合格かチェック！\\n\\n```python\\nnums = [1, 2, 3]\\nprint(all(nums))  # => True（全部0以外）\\n\\n# 全部0より大きい？\\nprint(all(x > 0 for x in [1, 2, 3]))   # => True\\nprint(all(x > 0 for x in [1, -1, 3]))  # => False（-1がNG）\\n```\\n\\n**any vs all の違い：**\\n- **any** = 1つでも True なら True（「または」的）\\n- **all** = 全部 True なら True（「かつ」的）"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "True\
"
          }
        ]
      }
  ]
}
