export const pythonData2 = {
  "language": "python",
  "lessonId": "python-2",
  "lessonTitle": "Python II - ステップアップ！",
  "lessonDescription": "Pythonの基本をマスターしたら、次のステップへ進みましょう！関数の引数、戻り値、リスト内包表記など、より実践的なスキルを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "引数とは？",
      "content": "関数を定義するとき、カッコの中に「材料」を受け取る場所を作れます。これを **引数** と呼びます。\\n\\n```python\\ndef greet(name):\\n    print(f'こんにちは、{name}さん！')\\n\\ngreet('太郎')\\n```\\n=> こんにちは、太郎さん！"
    },
    {
      "title": "戻り値（return）",
      "content": "`return` を使うと、関数の中で計算した結果を呼び出し元に「返す」ことができます。\\n\\n```python\\ndef add(a, b):\\n    return a + b\\n\\nresult = add(3, 5) # result に 8 が入る\\n```"
    },
    {
      "title": "リスト内包表記",
      "content": "**リスト内包表記**は、forループを1行で書ける便利な書き方です。\\n\\n```python\\n# 従来のforループ\\nnums = []\\nfor x in range(1, 4):\\n    nums.append(x * 2)\\n# nums = [2, 4, 6]\\n\\n# リスト内包表記なら1行！\\nnums = [x * 2 for x in range(1, 4)]\\n# nums = [2, 4, 6]\\n```\\n\\n**構文**: `[式 for 変数 in イテラブル]`\\n- `式`: 各要素に適用する処理（例: `x * 2`）\\n- `変数`: ループ変数（例: `x`）\\n- `イテラブル`: 繰り返し対象（例: `range(1, 4)`）"
    }
  ],
  "exercises": [
    {
      "title": "引数を使った関数",
      "description": "関数に「材料」を渡して、柔軟に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "引数とは？",
          "content": "# 関数に「材料」を渡そう！\\n\\n**引数** とは、関数に渡す「**材料**」のことです。\\n\\nたとえば、料理を作るとき「野菜」や「お肉」などの材料が必要ですよね。\\n\\n関数も同じで、**どんな材料（データ）を使うか** を教えてあげる必要があることがあります。\\n\\n**書き方：** カッコの中に「材料を受け取る場所」を作ります。\\n\\n```python\\ndef greet(name):\\n    print(f'こんにちは、{name}さん！')\\n```\\n\\nここでの `name` が「材料を入れる場所」（引数）です。"
        },
        {
          "title": "引数の使い方",
          "content": "# 関数を呼び出すときに材料を渡す\\n\\n関数を使うとき、カッコの中に **値を入れる** と、その値が引数に入ります。\\n\\n**例：** いろんな人にあいさつしよう！\\n\\n```python\\ndef greet(name):\\n    print(f'こんにちは、{name}さん！')\\n\\ngreet('太郎')\\n```\\n=> こんにちは、太郎さん！\\n\\n**何をしているか：**\\n1. `greet('太郎')` で関数を呼び出す\\n2. `'太郎'` という値が `name` に入る\\n3. `f'こんにちは、{name}さん！'` の `{name}` が「太郎」に置き換わる\\n4. 「こんにちは、太郎さん！」と表示される！\\n\\n**便利なところ：** 名前を変えるだけで、いろんな人にあいさつできます！"
        }
      ],
      "correctCode": "# 名前を受け取ってあいさつする関数\\ndef hello(name):\\n    # f-stringで名前を表示\\n    print(f'こんにちは、{name}！')\\n\\n# hello関数を'Python'で呼び出す\\nhello('Python')",
      "holeyCode": "# 名前を受け取ってあいさつする関数\\ndef ___(___):\\n    # f-stringで名前を表示\\n    ___(f'こんにちは、{___}！')\\n\\n# hello関数を'Python'で呼び出す\\n___('___')",
      "correctLines": [
        "# 名前を受け取ってあいさつする関数",
        "def hello(name):",
        "    # f-stringで名前を表示",
        "    print(f'こんにちは、{name}！')",
        "",
        "# hello関数を'Python'で呼び出す",
        "hello('Python')"
      ],
      "lineHints": [
        null,
        "hello関数を定義し、引数nameを受け取ります。",
        null,
        "printでf-stringを出力し、{name}で変数を埋め込みます。",
        null,
        null,
        "hello関数に文字列Pythonを渡して呼び出します。"
      ],
      "candidates": {
        "variables": ["name"],
        "functions": ["hello", "print"],
        "strings": ["Python"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは、Python！\\n"
        }
      ]
    },
    {
      "title": "デフォルト引数",
      "description": "引数を省略したときに使われる「初期値」の設定方法を学びます",
      "tutorialSlides": [
        {
          "title": "デフォルト引数とは？",
          "content": "# 「最初から入っている値」を設定しよう\\n\\n**デフォルト引数** とは、**材料（引数）に「最初から入っている値」** を設定しておくことです。\\n\\n**デフォルト** は「初期設定」という意味です。\\n\\nたとえば、ゲームで名前を入力しないと「ゲスト」と表示されることがありますよね。それと同じです！\\n\\n**書き方：** 引数に `=` で値を設定します。\\n\\n```python\\ndef greet(name='ゲスト'):\\n    print(f'ようこそ、{name}さん！')\\n```\\n\\n`name='ゲスト'` で「何も渡されなかったら『ゲスト』を使う」という意味になります。"
        },
        {
          "title": "省略できる引数",
          "content": "# 渡しても渡さなくてもOK！\\n\\nデフォルト引数があると、**柔軟に関数を使えます**。\\n\\n**例：** いろんなパターンで呼び出そう！\\n\\n```python\\ndef greet(name='ゲスト'):\\n    print(f'ようこそ、{name}さん！')\\n\\ngreet()        # 何も渡さない\\ngreet('太郎')  # '太郎'を渡す\\n```\\n=> ようこそ、ゲストさん！\\n=> ようこそ、太郎さん！\\n\\n**何をしているか：**\\n- `greet()` → 何も渡していないので、デフォルトの「ゲスト」が使われる\\n- `greet('太郎')` → 「太郎」を渡したので、そちらが使われる\\n\\n**便利なところ：** 毎回値を渡さなくても、よく使う値で動いてくれます！"
        }
      ],
      "correctCode": "# デフォルト引数を持つsay_hello関数\\ndef say_hello(name='World'):\\n    # Hello, 名前!と表示\\n    print(f'Hello, {name}!')\\n\\n# 引数なしで呼び出す\\nsay_hello()",
      "holeyCode": "# デフォルト引数を持つsay_hello関数\\ndef ___(___='___'):\\n    # Hello, 名前!と表示\\n    ___(f'Hello, {___}!')\\n\\n# 引数なしで呼び出す\\n___()",
      "correctLines": [
        "# デフォルト引数を持つsay_hello関数",
        "def say_hello(name='World'):",
        "    # Hello, 名前!と表示",
        "    print(f'Hello, {name}!')",
        "",
        "# 引数なしで呼び出す",
        "say_hello()"
      ],
      "lineHints": [
        null,
        "say_hello関数を定義し、引数nameにデフォルト値'World'を設定します。",
        null,
        "printでf-stringを出力し、{name}で変数を埋め込みます。",
        null,
        null,
        "say_hello関数を引数なしで呼び出します。"
      ],
      "candidates": {
        "variables": ["name"],
        "functions": ["say_hello", "print"],
        "strings": ["World"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\\n"
        }
      ]
    },
    {
      "title": "戻り値（return）",
      "description": "関数の処理結果を呼び出し元に返す方法を学びます",
      "tutorialSlides": [
        {
          "title": "戻り値とは？",
          "content": "# 関数から「答え」を返そう！\\n\\n**戻り値** とは、関数が **「計算した結果」を返してくれる値** のことです。\\n\\nたとえば、電卓に「3 + 5」と入力すると「8」という答えが返ってきますよね。\\n\\nそれと同じで、関数も **答えを返す** ことができるのです！\\n\\n**`return`（リターン）** を使うと、関数の中で作った値を **呼び出した場所に返せます**。\\n\\n```python\\ndef add(a, b):\\n    return a + b\\n\\nresult = add(3, 5)  # result に 8 が入る\\n```"
        },
        {
          "title": "return の使い方",
          "content": "# 計算結果を受け取ろう！\\n\\n`return` で返された値は、**変数に入れたり**、**そのまま使ったり** できます。\\n\\n**例：** 2倍にする関数を作ろう！\\n\\n```python\\ndef double(x):\\n    return x * 2\\n\\nprint(double(5))\\n```\\n\\n=> 10\\n\\n**何をしているか：**\\n1. `double(5)` で関数を呼び出す\\n2. 関数の中で `5 * 2 = 10` が計算される\\n3. `return` で 10 が返される\\n4. `print()` がその 10 を表示する！\\n\\n**ポイント：**\\n- `return` を使うと、関数は **答えを返す機械** になります\\n- 返された値は変数に保存したり、そのまま使ったりできます"
        }
      ],
      "correctCode": "# add関数を定義（第1引数a, 第2引数b）\\ndef add(a, b):\\n    # aとbの和を返す\\n    return a + b\\n\\n# resultにadd関数（第1引数がa, 第2引数がb）の結果を代入\\nresult = add(10, 20)\\n# resultを表示\\nprint(result)",
      "holeyCode": "# add関数を定義（第1引数a, 第2引数b）\\ndef ___(___, ___):\\n    # aとbの和を返す\\n    ___ ___ + ___\\n\\n# resultにadd関数（第1引数がa, 第2引数がb）の結果を代入\\n___ = ___(___, ___)\\n# resultを表示\\n___(___)",
      "correctLines": [
        "# add関数を定義（第1引数a, 第2引数b）",
        "def add(a, b):",
        "    # aとbの和を返す",
        "    return a + b",
        "",
        "# resultにadd関数（第1引数がa, 第2引数がb）の結果を代入",
        "result = add(10, 20)",
        "# resultを表示",
        "print(result)"
      ],
      "lineHints": [
        null,
        "add関数を定義し、引数a, bを受け取ります。",
        null,
        "returnでa + bの計算結果を返します。",
        null,
        null,
        "resultにadd(10, 20)の戻り値を代入します。",
        null,
        "printでresultを出力します。"
      ],
      "candidates": {
        "keywords": ["return"],
        "variables": ["a", "b", "result"],
        "functions": ["add", "print"],
        "others": ["10", "20"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "30\\n"
        }
      ]
    },
    {
      "title": "複数の戻り値",
      "description": "1つの関数から複数の値をまとめて返す方法を学びます",
      "tutorialSlides": [
        {
          "title": "複数の値を返す",
          "content": "# いくつもの答えを返そう！\\n\\n関数から **複数の値** を同時に返すことができます。\\n\\nたとえば、テストの結果で「最高点」と「最低点」を **両方いっぺんに** 知りたいときがありますよね。\\n\\n**書き方：** `return` のあとに値を **カンマ（,）で区切って** 並べます。\\n\\n```python\\ndef min_max(numbers):\\n    return min(numbers), max(numbers)\\n```\\n\\nこの関数は「最小値」と「最大値」の **2つの値を同時に返します**！"
        },
        {
          "title": "複数の変数で受け取る",
          "content": "# 複数の値を別々の変数に入れよう！\\n\\n返ってきた複数の値を、**別々の変数で受け取れます**。\\n\\n**例：** 最小値と最大値を調べよう！\\n\\n```python\\ndef min_max(numbers):\\n    return min(numbers), max(numbers)\\n\\nsmallest, largest = min_max([3, 1, 4])\\nprint(smallest)\\nprint(largest)\\n```\\n\\n=> 1\\n\\n=> 4\\n\\n**何をしているか：**\\n1. `min_max([3, 1, 4])` でリスト [3, 1, 4] を渡す\\n2. 関数が最小値 1 と最大値 4 を返す\\n3. `smallest, largest` で2つの変数に **同時に代入**\\n4. それぞれの値を表示！\\n\\n**ポイント：** 受け取る変数の数と、返す値の数は **同じ** にしましょう！"
        }
      ],
      "correctCode": "# 2つの値を返すcalc関数\\ndef calc(x):\\n    # x+1, x*2の順で返す\\n    return x + 1, x * 2\\n\\n# 2つの変数a, bで受け取る\\na, b = calc(5)\\nprint(a)\\nprint(b)",
      "holeyCode": "# 2つの値を返すcalc関数\\ndef ___(___):\\n    # x+1, x*2の順で返す\\n    ___ ___ + 1, ___ ___ 2\\n\\n# 2つの変数a, bで受け取る\\n___, ___ = ___(___)\\n___(___)\\n___(___)",
      "correctLines": [
        "# 2つの値を返すcalc関数",
        "def calc(x):",
        "    # x+1, x*2の順で返す",
        "    return x + 1, x * 2",
        "",
        "# 2つの変数a, bで受け取る",
        "a, b = calc(5)",
        "print(a)",
        "print(b)"
      ],
      "lineHints": [
        null,
        "calc関数を定義し、引数xを受け取ります。",
        null,
        "returnでx+1とx*2の2つの値を返します。",
        null,
        null,
        "a, bにcalc(5)の戻り値を代入します。",
        "printでaを出力します。",
        "printでbを出力します。"
      ],
      "candidates": {
        "keywords": ["return"],
        "operators": ["*"],
        "variables": ["x", "a", "b"],
        "functions": ["calc", "print"],
        "others": ["5"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "6\\n10\\n"
        }
      ]
    },
    {
      "title": "文字列スライス",
      "description": "文字列の一部を切り出す「スライス」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "スライスとは？",
          "content": "# 文字列の一部を切り取ろう！\\n\\n**スライス** とは、文字列やリストの **一部分だけを取り出す** ことです。\\n\\nたとえば、「こんにちは」から「にち」だけを取り出したいとき、スライスを使います。\\n\\nパンをスライス（薄切り）するように、**文字列を切り取る** イメージです！\\n\\n**書き方：** `[開始:終了]` の形で指定します。\\n\\n```python\\ntext = 'Python'\\nprint(text[0:2])\\n```\\n\\n=> 'Py'\\n\\nこれで「Python」の **0番目から2番目の手前まで**（Py）が取り出せます！"
        },
        {
          "title": "スライスの書き方",
          "content": "# 開始と終了を指定しよう！\\n\\n`[開始:終了]` で、開始位置から **終了位置の手前まで** を取り出します。\\n\\n**注意：** 終了位置の文字は **含まれません**！\\n\\n**例：** いろんな切り取り方をしよう！\\n\\n```python\\ntext = 'Hello'\\nprint(text[1:4])\\nprint(text[:3])\\nprint(text[2:])\\n```\\n\\n=> 'ell'\\n\\n=> 'Hel' (最初から)\\n\\n=> 'llo' (最後まで)\\n\\n**何をしているか：**\\n- `text[1:4]` → 1番目から4番目の手前まで = 'ell'\\n- `text[:3]` → 最初（0番目）から3番目の手前まで = 'Hel'\\n- `text[2:]` → 2番目から最後まで = 'llo'\\n\\n**ポイント：** 開始を省略すると「最初から」、終了を省略すると「最後まで」になります！"
        }
      ],
      "correctCode": "# wordに'Python'を代入\\nword = 'Python'\\n# 最初の2文字（インデックス0から2の手前まで）を表示\\nprint(word[0:2])",
      "holeyCode": "# wordに'Python'を代入\\n___ = '___'\\n# 最初の2文字（インデックス0から2の手前まで）を表示\\n___(___[___:___])",
      "correctLines": [
        "# wordに'Python'を代入",
        "word = 'Python'",
        "# 最初の2文字（インデックス0から2の手前まで）を表示",
        "print(word[0:2])"
      ],
      "lineHints": [
        null,
        "wordに文字列'Python'を代入します。",
        null,
        "printでword[0:2]のスライス結果を出力します。"
      ],
      "candidates": {
        "variables": ["word"],
        "strings": ["Python"],
        "functions": ["print"],
        "numbers": ["0", "2"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Py\\n"
        }
      ]
    },
    {
      "title": "range() で数列を作る",
      "description": "連続した数の列を簡単に作れる range() 関数を学びます",
      "tutorialSlides": [
        {
          "title": "range() とは？",
          "content": "# 数の列を自動で作ろう！\\n\\n**range（レンジ）** を使うと、**連続した数の列** を簡単に作れます。\\n\\nたとえば「0, 1, 2, 3, 4」という数の列を作りたいとき、いちいち書かなくても、`range(5)` で作れます！\\n\\n**例：** 0から4までの数を順番に表示しよう！\\n\\n```python\\nfor i in range(5):\\n    print(i)\\n```\\n=> 0\\n=> 1\\n=> 2\\n=> 3\\n=> 4\\n\\n`range(5)` は「0から始まって、5個の数を作る」という意味です。"
        },
        {
          "title": "range() の使い方",
          "content": "# 開始と終了を指定しよう！\\n\\n**いろんな書き方ができます：**\\n\\n```python\\nrange(5)        # 0, 1, 2, 3, 4（0から始まって5個）\\nrange(1, 6)     # 1, 2, 3, 4, 5（1から6の手前まで）\\nrange(0, 10, 2) # 0, 2, 4, 6, 8（2ずつ増える）\\n```\\n\\n**書き方の解説：**\\n- `range(終了)` → 0から「終了の手前」まで\\n- `range(開始, 終了)` → 「開始」から「終了の手前」まで\\n- `range(開始, 終了, 増える量)` → 指定した量ずつ増える\\n\\n**例：** 1から5までカウントしたい！\\n\\n```python\\nfor i in range(1, 6):\\n    print(i)\\n```\\n=> 1, 2, 3, 4, 5\\n\\n**ポイント：** 終了の数は **含まれない** ので注意！"
        }
      ],
      "correctCode": "# 1から5までの数を順番に表示\\nfor i in range(1, 6):\\n    # 変数iを出力\\n    print(i)",
      "holeyCode": "# 1から5までの数を順番に表示\\n___ ___ ___ ___(___, ___):\\n    # 変数iを出力\\n    ___(___)",
      "correctLines": [
        "# 1から5までの数を順番に表示",
        "for i in range(1, 6):",
        "    # 変数iを出力",
        "    print(i)"
      ],
      "lineHints": [
        null,
        "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
        null,
        "変数の内容を画面に出力します。"
      ],
      "candidates": {
        "keywords": ["for", "in"],
        "functions": ["range", "print"],
        "variables": ["i"],
        "numbers": ["1", "6"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\\n2\\n3\\n4\\n5\\n"
        }
      ]
    },
    {
      "title": "リスト内包表記",
      "description": "forループを1行で書ける「リスト内包表記」をマスターします",
      "tutorialSlides": [
        {
          "title": "リスト内包表記とは？",
          "content": "# 1行でリストを作ろう！\\n\\n**リスト内包表記** とは、**for文を使わずに1行でリストを作れる** 便利な書き方です。\\n\\n**普通のやり方（3行）：**\\n```python\\nnumbers = []\\nfor i in range(5):\\n    numbers.append(i * 2)\\n```\\n\\n**リスト内包表記（1行）：**\\n```python\\nnumbers = [i * 2 for i in range(5)]\\n```\\n\\n同じ結果が、なんと **たったの1行** で書けます！\\n\\nPythonの得意技の一つで、慣れるととても便利です。"
        },
        {
          "title": "内包表記の書き方",
          "content": "# [式 for 変数 in イテラブル]\\n\\n**イテラブル** とは、リストや range など **繰り返し処理できるもの** のことです。\\n\\n**書き方：** `[ ]` の中に、「**作りたい値の式**」と「**for文**」を書きます。\\n\\n**例：** 0から4の2乗を作ろう！\\n\\n```python\\nsquares = [x ** 2 for x in range(5)]\\nprint(squares)\\n```\\n\\n=> [0, 1, 4, 9, 16]\\n\\n**何をしているか：**\\n1. `range(5)` で 0, 1, 2, 3, 4 を順番に取り出す\\n2. 取り出した数を `x` に入れる\\n3. `x ** 2`（xの2乗）を計算する\\n4. 計算結果をリストに追加していく\\n\\n**ポイント：** 「**何を作るか**」を最初に書いて、「**どこから取り出すか**」をあとに書きます！"
        }
      ],
      "correctCode": "# 1から5までの数を2倍にしたリストdoubledを作る\\ndoubled = [x * 2 for x in range(1, 6)]\\n# リストを表示\\nprint(doubled)",
      "holeyCode": "# 1から5までの数を2倍にしたリストdoubledを作る\\n___ = [___ * 2 ___ ___ in ___(___, ___)]\\n# リストを表示\\n___(___)",
      "correctLines": [
        "# 1から5までの数を2倍にしたリストdoubledを作る",
        "doubled = [x * 2 for x in range(1, 6)]",
        "# リストを表示",
        "print(doubled)"
      ],
      "lineHints": [
        null,
        "doubledにリスト内包表記[x*2 for x in range(1,6)]を代入します。",
        null,
        "printでdoubledを出力します。"
      ],
      "candidates": {
        "keywords": ["for"],
        "variables": ["doubled", "x"],
        "functions": ["print", "range"],
        "numbers": ["1", "6"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[2, 4, 6, 8, 10]\\n"
        }
      ]
    },
    {
      "title": "条件付きリスト内包表記",
      "description": "リスト内包表記に条件を加えて、特定の要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "条件でフィルタリング",
          "content": "# if を追加して選別しよう！\\n\\n**フィルタリング** とは、条件に合うものだけを **ふるいにかけて選ぶ** ことです。\\n\\nリスト内包表記の最後に `if` を追加すると、**条件に合うものだけ** をリストに入れられます。\\n\\n**例：** 偶数だけを取り出そう！\\n\\n```python\\nevens = [x for x in range(10) if x % 2 == 0]\\nprint(evens)\\n```\\n\\n=> [0, 2, 4, 6, 8]\\n\\n**何をしているか：**\\n1. 0から9までの数を順番に取り出す\\n2. `if x % 2 == 0` で偶数かチェック\\n3. 偶数のときだけリストに追加される\\n4. 結果は [0, 2, 4, 6, 8] になる！"
        },
        {
          "title": "条件付き内包表記の書き方",
          "content": "# [式 for 変数 in イテラブル if 条件]\\n\\n条件を **満たす要素だけ** がリストに入ります。\\n\\n**例：** 短い単語だけを集めよう！\\n\\n```python\\nwords = ['apple', 'banana', 'cherry']\\n# 5文字以下の単語だけ\\nshort = [w for w in words if len(w) <= 5]\\nprint(short)\\n```\\n\\n=> ['apple']\\n\\n**何をしているか：**\\n1. `words` から単語を順番に取り出す\\n2. `len(w) <= 5` で文字数が5以下かチェック\\n3. 条件に合う 'apple'（5文字）だけがリストに入る\\n4. 'banana'（6文字）と 'cherry'（6文字）は含まれない\\n\\n**ポイント：** `if` は最後に書きます！"
        }
      ],
      "correctCode": "# 1から10で偶数（2の倍数）だけを集めるevensを作る\\nevens = [n for n in range(1, 11) if n % 2 == 0]\\n# リストを表示\\nprint(evens)",
      "holeyCode": "# 1から10で偶数（2の倍数）だけを集めるevensを作る\\n___ = [___ for ___ in ___(___, ___) ___ ___ % ___ == ___]\\n# リストを表示\\n___(___)",
      "correctLines": [
        "# 1から10で偶数（2の倍数）だけを集めるevensを作る",
        "evens = [n for n in range(1, 11) if n % 2 == 0]",
        "# リストを表示",
        "print(evens)"
      ],
      "lineHints": [
        null,
        "evensに条件付きリスト内包表記[n for n in range(1,11) if n%2==0]を代入します。",
        null,
        "printでevensを出力します。"
      ],
      "candidates": {
        "keywords": ["for", "if"],
        "variables": ["evens", "n"],
        "functions": ["print", "range"],
        "numbers": ["0", "1", "2", "11"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[2, 4, 6, 8, 10]\\n"
        }
      ]
    },
    {
      "title": "例外処理（try-except）",
      "description": "プログラムのエラーを適切に処理して、安全に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "例外とは？",
          "content": "# プログラムの「想定外」の問題\\n\\n**例外** とは、プログラムを実行中に起きる **予想外の問題** のことです。「エラー」とも呼びます。\\n\\nたとえば、0で割り算しようとすると、コンピュータは計算できません。\\n\\n```python\\nresult = 10 / 0  # ZeroDivisionError!\\n```\\n\\nこのように、やってはいけないことをするとプログラムが **止まってしまいます**。\\n\\nでも大丈夫！例外を **上手に処理する方法** があります。"
        },
        {
          "title": "try-except で対処しよう",
          "content": "# エラーをキャッチする「安全ネット」\\n\\n**try-except** は、**エラーが起きてもプログラムが止まらないようにする** 仕組みです。\\n\\nサーカスの安全ネットのように、落ちても大丈夫なようにしてくれます！\\n\\n**例：** エラーをキャッチしよう！\\n\\n```python\\ntry:\\n    result = 10 / 0  # エラーが起きる\\nexcept:\\n    print('エラーが発生しました')\\n```\\n=> エラーが発生しました\\n\\n**何をしているか：**\\n1. `try:` の中のコードを実行してみる\\n2. エラーが起きたら `except:` に移動する\\n3. `except:` の中の処理を実行する\\n4. プログラムは止まらずに続く！\\n\\n**ポイント：** `try` は「試す」、`except` は「例外（を処理する）」という意味です。"
        }
      ],
      "correctCode": "# エラーが起きる可能性のある処理をtryに入れる\\ntry:\\n    # 文字列を数値に変換（エラーになる）\\n    num = int('abc')\\n# エラーが起きたときの処理をexceptに入れる\\nexcept:\\n    # 'エラー'と表示\\n    print('エラー')",
      "holeyCode": "# エラーが起きる可能性のある処理をtryに入れる\\n___:\\n    # 文字列を数値に変換（エラーになる）\\n    ___ = ___('___')\\n# エラーが起きたときの処理をexceptに入れる\\n___:\\n    # 'エラー'と表示\\n    ___('___')",
      "correctLines": [
        "# エラーが起きる可能性のある処理をtryに入れる",
        "try:",
        "    # 文字列を数値に変換（エラーになる）",
        "    num = int('abc')",
        "# エラーが起きたときの処理をexceptに入れる",
        "except:",
        "    # 'エラー'と表示",
        "    print('エラー')"
      ],
      "lineHints": [
        null,
        "例外が発生する可能性のあるコードを囲みます。",
        null,
        "numにint('abc')の結果を代入しようとしてエラーが発生します。",
        null,
        "例外が発生したときの処理を定義します。",
        null,
        "例外時に実行される出力処理です。"
      ],
      "candidates": {
        "keywords": ["try", "except"],
        "variables": ["num"],
        "functions": ["print", "int"],
        "strings": ["abc", "エラー"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "エラー\\n"
        }
      ]
    },
    {
      "title": "クラスの基本",
      "description": "データと処理をひとまとめにする「クラス」の基本を学びます",
      "tutorialSlides": [
        {
          "title": "クラスとは？",
          "content": "# 「設計図」を作ろう！\\n\\n**クラス** は、モノを作るための **「設計図」** です。\\n\\nたとえば、おもちゃの車を作る工場を想像してください。\\n- **クラス** = 車の設計図（どんな形で、どう動くかが書いてある）\\n- **オブジェクト** = 設計図から作られた実際の車\\n\\n設計図（クラス）には、そのモノが持つ **データ（属性）** と **動き（メソッド）** を書きます。\\n\\n**例：** 犬のクラスを作ろう！\\n\\n```python\\nclass Dog:\\n    def bark(self):\\n        print('ワン！')\\n```\\n\\nこれで「犬」の設計図ができました！"
        },
        {
          "title": "インスタンスを作る",
          "content": "# 設計図からモノを作ろう！\\n\\n設計図（クラス）から実際に作られたモノを **インスタンス**（または **オブジェクト**）と呼びます。\\n\\nクラス名の後ろに `()` をつけると、インスタンスが作られます。\\n\\n**例：** 犬を作って吠えさせよう！\\n\\n```python\\nclass Dog:\\n    def bark(self):\\n        print('ワン！')\\n\\ndog = Dog()  # インスタンス作成\\ndog.bark()\\n```\\n\\n=> ワン！\\n\\n**何をしているか：**\\n1. `Dog()` で犬のインスタンス（実体）を作る\\n2. 作った犬を `dog` という変数に入れる\\n3. `dog.bark()` で犬に「吠える」という動作をさせる\\n\\n**ポイント：** 同じ設計図から、たくさんの犬を作ることができます！"
        }
      ],
      "correctCode": "# Catクラスを定義\\nclass Cat:\\n    # meowメソッドを定義\\n    def meow(self):\\n        # 'ニャー！'を表示\\n        print('ニャー！')\\n\\n# インスタンスcatを作って呼び出す\\ncat = Cat()\\ncat.meow()",
      "holeyCode": "# Catクラスを定義\\n___ ___:\\n    # meowメソッドを定義\\n    ___ ___(___):\\n        # 'ニャー！'を表示\\n        ___('___')\\n\\n# インスタンスcatを作って呼び出す\\n___ = ___()\\n___.___()",
      "correctLines": [
        "# Catクラスを定義",
        "class Cat:",
        "    # meowメソッドを定義",
        "    def meow(self):",
        "        # 'ニャー！'を表示",
        "        print('ニャー！')",
        "",
        "# インスタンスcatを作って呼び出す",
        "cat = Cat()",
        "cat.meow()"
      ],
      "lineHints": [
        null,
        "classキーワードでCatクラスを定義します。",
        null,
        "defキーワードでmeowメソッドを定義し、selfを受け取ります。",
        null,
        "printで'ニャー！'を出力します。",
        null,
        null,
        "catにCat()のインスタンスを代入します。",
        "cat.meow()でメソッドを呼び出します。"
      ],
      "candidates": {
        "keywords": ["class", "def"],
        "variables": ["self", "cat"],
        "functions": ["meow", "Cat", "print"],
        "strings": ["ニャー！"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ニャー！\\n"
        }
      ]
    }
  ]
};
