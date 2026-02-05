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
            "content": "# 関数に「材料」を渡そう！\n\n**引数（ひきすう）** とは、関数に渡す「**材料**」のことです。\n\nたとえば、料理を作るとき「野菜」や「お肉」などの材料が必要ですよね。\n\n関数も同じで、**どんな材料（データ）を使うか** を教えてあげる必要があることがあります。\n\n**書き方：** カッコの中に「材料を受け取る場所」を作ります。\n\n```python\ndef greet(name):\n    print(f'こんにちは、{name}さん！')\n```\n\nここでの `name` が「材料を入れる場所」（引数）です。"
          },
          {
            "title": "引数の使い方",
            "content": "# 関数を呼び出すときに材料を渡す\n\n関数を使うとき、カッコの中に **値（あたい）を入れる** と、その値が引数に入ります。\n\n**例：** いろんな人にあいさつしよう！\n\n```python\ndef greet(name):\n    print(f'こんにちは、{name}さん！')\n\ngreet('太郎')\n```\n=> こんにちは、太郎さん！\n\n**何をしているか：**\n1. `greet('太郎')` で関数を呼び出す\n2. `'太郎'` という値が `name` に入る\n3. `f'こんにちは、{name}さん！'` の `{name}` が「太郎」に置き換わる\n4. 「こんにちは、太郎さん！」と表示される！\n\n**便利なところ：** 名前を変えるだけで、いろんな人にあいさつできます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 名前を受け取ってあいさつする関数\ndef hello(name):\n    # f'Hello, {name}!'を出力\n    print(f'Hello, {name}!')\n\n# 関数を'Python'を渡して呼び出す\nhello('Python')",
        "holeyCode": "# 名前を受け取ってあいさつする関数\ndef ___(name):\n    # f'Hello, {name}!'を出力\n    ___(f'Hello, {name}!')\n\n# 関数を'Python'を渡して呼び出す\nhello('___')",
        "correctLines": [
          "# 名前を受け取ってあいさつする関数",
          "def hello(name):",
          "    # f'Hello, {name}!'を出力",
          "    print(f'Hello, {name}!')",
          "",
          "# 関数を'Python'を渡して呼び出す",
          "hello('Python')"
        ],
        "lineHints": [
          null,
          "関数（hello）を新しく定義します。",
          null,
          "f-string の中で `name` を使います。",
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "functions": [
            "hello",
            "print"
          ],
          "strings": [
            "Python",
            "Hello"
          ],
          "others": [
            "hello('Python')"
          ]
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
            "content": "# 「最初から入っている値」を設定しよう\n\n**デフォルト引数** とは、**材料（引数）に「最初から入っている値」** を設定しておくことです。\n\n**デフォルト** は「初期設定（しょきせってい）」という意味です。\n\nたとえば、ゲームで名前を入力しないと「ゲスト」と表示されることがありますよね。それと同じです！\n\n**書き方：** 引数に `=` で値を設定します。\n\n```python\ndef greet(name='ゲスト'):\n    print(f'ようこそ、{name}さん！')\n```\n\n`name='ゲスト'` で「何も渡されなかったら『ゲスト』を使う」という意味になります。"
          },
          {
            "title": "省略（しょうりゃく）できる引数",
            "content": "# 渡しても渡さなくてもOK！\n\nデフォルト引数があると、**柔軟（じゅうなん）に関数を使えます**。\n\n**例：** いろんなパターンで呼び出そう！\n\n```python\ndef greet(name='ゲスト'):\n    print(f'ようこそ、{name}さん！')\n\ngreet()        # 何も渡さない\ngreet('太郎')  # '太郎'を渡す\n```\n=> ようこそ、ゲストさん！\n=> ようこそ、太郎さん！\n\n**何をしているか：**\n- `greet()` → 何も渡していないので、デフォルトの「ゲスト」が使われる\n- `greet('太郎')` → 「太郎」を渡したので、そちらが使われる\n\n**便利なところ：** 毎回値を渡さなくても、よく使う値で動いてくれます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# デフォルト引数を持つ関数\ndef say_hi(name='World'):\n    # 「Hi, 名前!」の形式で表示\n    print(f'Hi, {name}!')\n\n# 引数なしで呼び出す\nsay_hi()",
        "holeyCode": "# デフォルト引数を持つ関数\ndef ___(name='World'):\n    # 「Hi, 名前!」の形式で表示\n    ___(f'Hi, {name}!')\n\n# 引数なしで呼び出す\n___()",
        "correctLines": [
          "# デフォルト引数を持つ関数",
          "def say_hi(name='World'):",
          "    # 「Hi, 名前!」の形式で表示",
          "    print(f'Hi, {name}!')",
          "",
          "# 引数なしで呼び出す",
          "say_hi()"
        ],
        "lineHints": [
          null,
          "関数（say_hi）を新しく定義します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "strings": [
            "'World'",
            "World"
          ],
          "others": ["say_hi", "print"]
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
            "content": "# 関数から「答え」を返そう！\n\n**戻り値（もどりち）** とは、関数が **「計算した結果」を返してくれる値** のことです。\n\nたとえば、電卓（でんたく）に「3 + 5」と入力すると「8」という答えが返ってきますよね。\n\nそれと同じで、関数も **答えを返す** ことができるのです！\n\n**`return`（リターン）** を使うと、関数の中で作った値を **呼び出した場所に返せます**。\n\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(3, 5)  # result に 8 が入る\n```"
          },
          {
            "title": "return の使い方",
            "content": "# 計算結果を受け取ろう！\n\n`return` で返された値は、**変数に入れたり**、**そのまま使ったり** できます。\n\n**例：** 2倍にする関数を作ろう！\n\n```python\ndef double(x):\n    return x * 2\n\nprint(double(5))  # => 10\n```\n\n**何をしているか：**\n1. `double(5)` で関数を呼び出す\n2. 関数の中で `5 * 2 = 10` が計算される\n3. `return` で 10 が返される\n4. `print()` がその 10 を表示する！\n\n**ポイント：**\n- `return` を使うと、関数は **答えを返す機械** になります\n- 返された値は変数に保存したり、そのまま使ったりできます"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 2つの数を足して返す関数\ndef add(a, b):\n    # 計算結果をreturnで返す\n    return a + b\n\n# 結果を変数に入れて表示（引数は10と20）\nresult = add(10, 20)\n# resultを表示\nprint(result)",
        "holeyCode": "# 2つの数を足して返す関数\ndef ___(a, b):\n    # 計算結果をreturnで返す\n    return a + ___\n\n# 結果を変数に入れて表示（引数は10と20）\nresult = add(___, 20)\n# resultを表示\n___(result)",
        "correctLines": [
          "# 2つの数を足して返す関数",
          "def add(a, b):",
          "    # 計算結果をreturnで返す",
          "    return a + b",
          "",
          "# 結果を変数に入れて表示（引数は10と20）",
          "result = add(10, 20)",
          "# resultを表示",
          "print(result)"
        ],
        "lineHints": [
          null,
          "`return` を使って計算結果を返します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "variables": [
            "a",
            "b",
            "result"
          ],
          "others": ["10", "20", "add", "print"]
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
            "content": "# いくつもの答えを返そう！\n\n関数から **複数（ふくすう）の値** を同時に返すことができます。\n\nたとえば、テストの結果で「最高点」と「最低点」を **両方いっぺんに** 知りたいときがありますよね。\n\n**書き方：** `return` のあとに値を **カンマ（,）で区切って** 並べます。\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n```\n\nこの関数は「最小値」と「最大値」の **2つの値を同時に返します**！"
          },
          {
            "title": "複数の変数で受け取る",
            "content": "# 複数の値を別々の変数に入れよう！\n\n返ってきた複数の値を、**別々の変数で受け取れます**。\n\n**例：** 最小値と最大値を調べよう！\n\n```python\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nsmallest, largest = min_max([3, 1, 4])\nprint(smallest)  # => 1\nprint(largest)   # => 4\n```\n\n**何をしているか：**\n1. `min_max([3, 1, 4])` でリスト [3, 1, 4] を渡す\n2. 関数が最小値 1 と最大値 4 を返す\n3. `smallest, largest` で2つの変数に **同時に代入**\n4. それぞれの値を表示！\n\n**ポイント：** 受け取る変数の数と、返す値の数は **同じ** にしましょう！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 2つの値を返す関数\ndef calc(x):\n    # x+1 と x*2 を返す\n    return x + 1, x * 2\n\n# 2つの変数で受け取る（引数は5）\na, b = calc(5)\n# aを表示\nprint(a)\n# bを表示\nprint(b)",
        "holeyCode": "# 2つの値を返す関数\ndef ___(x):\n    # x+1 と x*2 を返す\n    return x + ___, x * 2\n\n# 2つの変数で受け取る（引数は5）\na, b = calc(___)\n# aを表示\n___(a)\n# bを表示\n___(b)",
        "correctLines": [
          "# 2つの値を返す関数",
          "def calc(x):",
          "    # x+1 と x*2 を返す",
          "    return x + 1, x * 2",
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
          "かけ算の記号 `*` を使います。",
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
          "operators": [
            "*",
            "+",
            "-",
            "/"
          ],
          "others": ["5", "a", "b", "calc", "1", "print"]
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
            "content": "# 文字列の一部を切り取ろう！\n\n**スライス** とは、文字列やリストの **一部分だけを取り出す** ことです。\n\nたとえば、「こんにちは」から「にち」だけを取り出したいとき、スライスを使います。\n\nパンをスライス（薄切り）するように、**文字列を切り取る** イメージです！\n\n**書き方：** `[開始:終了]` の形で指定します。\n\n```python\ntext = 'Python'\nprint(text[0:2])  # => 'Py'\n```\n\nこれで「Python」の **0番目から2番目の手前まで**（Py）が取り出せます！"
          },
          {
            "title": "スライスの書き方",
            "content": "# 開始と終了を指定しよう！\n\n`[開始:終了]` で、開始位置から **終了位置の手前まで** を取り出します。\n\n**注意：** 終了位置の文字は **含まれません**！\n\n**例：** いろんな切り取り方をしよう！\n\n```python\ntext = 'Hello'\nprint(text[1:4])  # => 'ell'\nprint(text[:3])   # => 'Hel' (最初から)\nprint(text[2:])   # => 'llo' (最後まで)\n```\n\n**何をしているか：**\n- `text[1:4]` → 1番目から4番目の手前まで = 'ell'\n- `text[:3]` → 最初（0番目）から3番目の手前まで = 'Hel'\n- `text[2:]` → 2番目から最後まで = 'llo'\n\n**ポイント：** 開始を省略すると「最初から」、終了を省略すると「最後まで」になります！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 文字列を用意（'Programming'）\nword = 'Programming'\n# 最初の4文字（0から4の手前まで）を取り出す\nprint(word[0:4])",
        "holeyCode": "# 文字列を用意（'Programming'）\nword = '___'\n# 最初の4文字（0から4の手前まで）を取り出す\n___(word[0:4])",
        "correctLines": [
          "# 文字列を用意（'Programming'）",
          "word = 'Programming'",
          "# 最初の4文字（0から4の手前まで）を取り出す",
          "print(word[0:4])"
        ],
        "lineHints": [
          null,
          "開始は `0`、終了は `4` です。",
          null,
          null
        ],
        "candidates": {
          "numbers": [
            "0",
            "4",
            "1",
            "3"
          ],
          "others": ["Programming", "print"]
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
            "content": "# 数の列を自動で作ろう！\n\n**range（レンジ）** を使うと、**連続（れんぞく）した数の列** を簡単に作れます。\n\nたとえば「0, 1, 2, 3, 4」という数の列を作りたいとき、いちいち書かなくても、`range(5)` で作れます！\n\n**例：** 0から4までの数を順番に表示しよう！\n\n```python\nfor i in range(5):\n    print(i)\n```\n=> 0\n=> 1\n=> 2\n=> 3\n=> 4\n\n`range(5)` は「0から始まって、5個の数を作る」という意味です。"
          },
          {
            "title": "range() の使い方",
            "content": "# 開始と終了を指定しよう！\n\n**いろんな書き方ができます：**\n\n```python\nrange(5)        # 0, 1, 2, 3, 4（0から始まって5個）\nrange(1, 6)     # 1, 2, 3, 4, 5（1から6の手前まで）\nrange(0, 10, 2) # 0, 2, 4, 6, 8（2ずつ増える）\n```\n\n**書き方の解説：**\n- `range(終了)` → 0から「終了の手前」まで\n- `range(開始, 終了)` → 「開始」から「終了の手前」まで\n- `range(開始, 終了, 増える量)` → 指定した量ずつ増える\n\n**例：** 1から5までカウントしたい！\n\n```python\nfor i in range(1, 6):\n    print(i)\n```\n=> 1, 2, 3, 4, 5\n\n**ポイント：** 終了の数は **含まれない** ので注意！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 1から5までの数を順番に表示\nfor i in range(1, 6):\n    # 変数iを出力\n    print(i)",
        "holeyCode": "# 1から5までの数を順番に表示\nfor i in range(___, 6):\n    # 変数iを出力\n    ___(i)",
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
          "functions": [
            "range",
            "list",
            "len"
          ],
          "variables": [
            "i"
          ],
          "others": ["1", "print"]
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
            "content": "# 変数に足し算して保存しよう！\n\n`+=`（プラスイコール）を使うと、**変数の値に足し算して上書き** できます。\n\nこれは **「今の値に足して、同じ変数に保存する」** という便利な書き方です。\n\n**例：** カウントを増やそう！\n\n```python\ncount = 0\ncount += 1  # count = count + 1 と同じ\nprint(count)  # => 1\n\ncount += 5\nprint(count)  # => 6\n```\n\n**何をしているか：**\n- 最初 `count` は 0\n- `count += 1` で 0 + 1 = 1 になる\n- `count += 5` で 1 + 5 = 6 になる\n\nゲームのスコアを増やすときなどに便利です！"
          },
          {
            "title": "-= と他の演算子",
            "content": "# 引き算や掛け算もできる！\n\n同じように `-=`、`*=`、`/=` も使えます。\n\n**例：** いろんな計算をしよう！\n\n```python\nx = 10\nx -= 3   # x = x - 3 → 7（引き算）\nx *= 2   # x = x * 2 → 14（掛け算）\nx /= 7   # x = x / 7 → 2.0（割り算）\n```\n\n**まとめ：**\n- `+=` → 足して保存\n- `-=` → 引いて保存\n- `*=` → 掛けて保存\n- `/=` → 割って保存\n\nこれらを **累算代入演算子（るいさんだいにゅうえんざんし）** と呼びます。\n長い名前ですが、「**計算して保存する記号**」と覚えておけばOKです！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 初期値を設定\ntotal = 0\n# totalに10を足す\ntotal += 10\n# totalに5を足す\ntotal += 5\n# totalを表示\nprint(total)",
        "holeyCode": "# 初期値を設定\ntotal = ___\n# totalに10を足す\ntotal += ___\n# totalに5を足す\ntotal += ___\n# totalを表示\n___(total)",
        "correctLines": [
          "# 初期値を設定",
          "total = 0",
          "# totalに10を足す",
          "total += 10",
          "# totalに5を足す",
          "total += 5",
          "# totalを表示",
          "print(total)"
        ],
        "lineHints": [
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["0", "10", "5", "print"]
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
            "content": "# 余りを求める記号！\n\n`%`（パーセント）は **割り算の余り** を求める演算子（えんざんし）です。\n\nこれを **剰余演算子（じょうよえんざんし）** と呼びます。「余りを求める記号」と覚えましょう！\n\n**例：** いろんな余りを計算しよう！\n\n```python\nprint(7 % 3)   # => 1（7÷3=2 余り1）\nprint(10 % 5)  # => 0（10÷5=2 余り0）\nprint(8 % 3)   # => 2（8÷3=2 余り2）\n```\n\n**何をしているか：**\n- `7 % 3` → 7を3で割ると、2余り **1** なので 1 が出る\n- `10 % 5` → ぴったり割り切れるので余りは **0**\n- `8 % 3` → 8を3で割ると、2余り **2** なので 2 が出る"
          },
          {
            "title": "倍数の判定",
            "content": "# 割り切れるかチェックしよう！\n\n余りが **0** なら **割り切れる**（倍数）と判定できます。\n\nこれはとても便利なテクニックです！\n\n**例：** 偶数・奇数を判定しよう！\n\n```python\n# 偶数かどうか判定（2で割って余りが0なら偶数）\nif 6 % 2 == 0:\n    print('偶数です')\n\n# 3の倍数かどうか判定（3で割って余りが0なら3の倍数）\nif 9 % 3 == 0:\n    print('3の倍数です')\n```\n\n**使いどころ：**\n- **偶数判定**：`数 % 2 == 0` なら偶数\n- **奇数判定**：`数 % 2 == 1` なら奇数\n- **〇の倍数判定**：`数 % 〇 == 0` なら〇の倍数"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 10を3で割った余りを計算\nremainder = 10 % 3\n# remainderを表示\nprint(remainder)",
        "holeyCode": "# 10を3で割った余りを計算\nremainder = ___ % 3\n# remainderを表示\n___(remainder)",
        "correctLines": [
          "# 10を3で割った余りを計算",
          "remainder = 10 % 3",
          "# remainderを表示",
          "print(remainder)"
        ],
        "lineHints": [
          null,
          "`%` で余りを求めます。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "//",
            "*"
          ],
          "others": ["10", "print"]
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
            "content": "# 条件を組み合わせよう！\n\n**and（アンド）** と **or（オア）** を使うと、複数の条件を組み合わせられます。\n\n- **and** = 「**かつ**」= **両方の条件がOK** のとき True（正しい）\n- **or** = 「**または**」= **どちらか一方がOK** のとき True（正しい）\n\n**例：** 数字の範囲をチェックしよう！\n\n```python\nx = 5\n# 両方の条件を満たすか\nif x > 0 and x < 10:\n    print('0より大きく10より小さい')\n\n# どちらかの条件を満たすか\nif x < 0 or x > 3:\n    print('0未満か3より大きい')\n```\n\n**何をしているか：**\n- `x > 0 and x < 10` → 5は0より大きい(OK) **かつ** 10より小さい(OK) → 表示される\n- `x < 0 or x > 3` → 5は0未満(NG) **または** 3より大きい(OK) → 表示される"
          },
          {
            "title": "not で否定（ひてい）",
            "content": "# 条件を反転（はんてん）させよう！\n\n**not（ノット）** は True（正しい）と False（正しくない）を **ひっくり返します**。\n\nたとえば「雨が降っている」の **反対** は「雨が降っていない」ですよね。\n\n**例：** 天気をチェックしよう！\n\n```python\nis_raining = False  # 雨は降っていない\n\nif not is_raining:\n    print('雨は降っていません')\n```\n=> 雨は降っていません\n\n**何をしているか：**\n- `is_raining` は False（雨は降っていない）\n- `not is_raining` で反転して True になる\n- 条件が True なのでメッセージが表示される！\n\n**まとめ：**\n- `not True` → False\n- `not False` → True"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 年齢を設定\nage = 25\n# 20以上かつ30未満かどうか判定\nif age >= 20 and age < 30:\n    print('20代です')",
        "holeyCode": "# 年齢を設定\nage = ___\n# 20以上かつ30未満かどうか判定\nif age ___ 20 and age < 30:\n    ___('20代です')",
        "correctLines": [
          "# 年齢を設定",
          "age = 25",
          "# 20以上かつ30未満かどうか判定",
          "if age >= 20 and age < 30:",
          "    print('20代です')"
        ],
        "lineHints": [
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "and",
            "or",
            "not"
          ],
          "others": ["25", ">=", "print"]
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
            "title": "リスト内包表記（ないほうひょうき）とは？",
            "content": "# 1行でリストを作ろう！\n\n**リスト内包表記** とは、**for文を使わずに1行でリストを作れる** 便利な書き方です。\n\n**普通のやり方（3行）：**\n```python\nnumbers = []\nfor i in range(5):\n    numbers.append(i * 2)\n```\n\n**リスト内包表記（1行）：**\n```python\nnumbers = [i * 2 for i in range(5)]\n```\n\n同じ結果が、なんと **たったの1行** で書けます！\n\nPythonの得意技の一つで、慣（な）れるととても便利です。"
          },
          {
            "title": "内包表記の書き方",
            "content": "# [式 for 変数 in イテラブル]\n\n**イテラブル** とは、リストや range など **繰り返し処理できるもの** のことです。\n\n**書き方：** `[ ]` の中に、「**作りたい値の式**」と「**for文**」を書きます。\n\n**例：** 0から4の2乗（じじょう）を作ろう！\n\n```python\nsquares = [x ** 2 for x in range(5)]\nprint(squares)  # => [0, 1, 4, 9, 16]\n```\n\n**何をしているか：**\n1. `range(5)` で 0, 1, 2, 3, 4 を順番に取り出す\n2. 取り出した数を `x` に入れる\n3. `x ** 2`（xの2乗）を計算する\n4. 計算結果をリストに追加していく\n\n**ポイント：** 「**何を作るか**」を最初に書いて、「**どこから取り出すか**」をあとに書きます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 1から5までの数を2倍にしたリストを作る\ndoubled = [x * 2 for x in range(1, 6)]\nprint(doubled)",
        "holeyCode": "# 1から5までの数を2倍にしたリストを作る\ndoubled = [x * ___ for x in range(1, 6)]\n___(doubled)",
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
          "keywords": [
            "for",
            "in",
            "if"
          ],
          "others": ["2", "print"]
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
            "content": "# if を追加して選別（せんべつ）しよう！\n\n**フィルタリング** とは、条件に合うものだけを **ふるいにかけて選ぶ** ことです。\n\nリスト内包表記の最後に `if` を追加すると、**条件に合うものだけ** をリストに入れられます。\n\n**例：** 偶数だけを取り出そう！\n\n```python\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)  # => [0, 2, 4, 6, 8]\n```\n\n**何をしているか：**\n1. 0から9までの数を順番に取り出す\n2. `if x % 2 == 0` で偶数かチェック\n3. 偶数のときだけリストに追加される\n4. 結果は [0, 2, 4, 6, 8] になる！"
          },
          {
            "title": "条件付き内包表記の書き方",
            "content": "# [式 for 変数 in イテラブル if 条件]\n\n条件を **満たす要素だけ** がリストに入ります。\n\n**例：** 短い単語だけを集めよう！\n\n```python\nwords = ['apple', 'banana', 'cherry']\n# 5文字以下の単語だけ\nshort = [w for w in words if len(w) <= 5]\nprint(short)  # => ['apple']\n```\n\n**何をしているか：**\n1. `words` から単語を順番に取り出す\n2. `len(w) <= 5` で文字数が5以下かチェック\n3. 条件に合う 'apple'（5文字）だけがリストに入る\n4. 'banana'（6文字）と 'cherry'（6文字）は含まれない\n\n**ポイント：** `if` は最後に書きます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 1から10で3の倍数だけを集める\nmultiples = [n for n in range(1, 11) if n % 3 == 0]\nprint(multiples)",
        "holeyCode": "# 1から10で3の倍数だけを集める\nmultiples = [n for n in range(___, 11) if n % 3 == 0]\n___(multiples)",
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
          "keywords": [
            "if",
            "for",
            "in"
          ],
          "others": ["1", "print"]
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
            "title": "例外（れいがい）とは？",
            "content": "# プログラムの「想定外（そうていがい）」の問題\n\n**例外（れいがい）** とは、プログラムを実行中に起きる **予想外の問題** のことです。「エラー」とも呼びます。\n\nたとえば、0で割り算しようとすると、コンピュータは計算できません。\n\n```python\nresult = 10 / 0  # ZeroDivisionError!\n```\n\nこのように、やってはいけないことをするとプログラムが **止まってしまいます**。\n\nでも大丈夫！例外を **上手に処理する方法** があります。"
          },
          {
            "title": "try-except で対処（たいしょ）しよう",
            "content": "# エラーをキャッチする「安全ネット」\n\n**try-except** は、**エラーが起きてもプログラムが止まらないようにする** 仕組みです。\n\nサーカスの安全ネットのように、落ちても大丈夫なようにしてくれます！\n\n**例：** エラーをキャッチしよう！\n\n```python\ntry:\n    result = 10 / 0  # エラーが起きる\nexcept:\n    print('エラーが発生しました')\n```\n=> エラーが発生しました\n\n**何をしているか：**\n1. `try:` の中のコードを実行してみる\n2. エラーが起きたら `except:` に移動する\n3. `except:` の中の処理を実行する\n4. プログラムは止まらずに続く！\n\n**ポイント：** `try` は「試（ため）す」、`except` は「例外（を処理する）」という意味です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# エラーが起きる可能性のある処理\ntry:\n    # 文字列'abc'を数値に変換（エラー発生）\n    num = int('abc')\n# 例外をキャッチするキーワード\nexcept:\n    # エラーメッセージ（'Error'）\n    print('Error')",
        "holeyCode": "# エラーが起きる可能性のある処理\n___:\n    # 文字列'abc'を数値に変換（エラー発生）\n    num = int('___')\n# 例外をキャッチするキーワード\n___:\n    # エラーメッセージ（'Error'）\n    ___('Error')",
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
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          "`except` キーワードで例外をキャッチします。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "try",
            "except",
            "finally"
          ],
          "others": ["abc", "Error", "print"]
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
            "content": "# 「設計図（せっけいず）」を作ろう！\n\n**クラス** は、モノを作るための **「設計図」** です。\n\nたとえば、おもちゃの車を作る工場を想像してください。\n- **クラス** = 車の設計図（どんな形で、どう動くかが書いてある）\n- **オブジェクト** = 設計図から作られた実際の車\n\n設計図（クラス）には、そのモノが持つ **データ（属性）** と **動き（メソッド）** を書きます。\n\n**例：** 犬のクラスを作ろう！\n\n```python\nclass Dog:\n    def bark(self):\n        print('ワン！')\n```\n\nこれで「犬」の設計図ができました！"
          },
          {
            "title": "インスタンスを作る",
            "content": "# 設計図からモノを作ろう！\n\n設計図（クラス）から実際に作られたモノを **インスタンス**（または **オブジェクト**）と呼びます。\n\nクラス名の後ろに `()` をつけると、インスタンスが作られます。\n\n**例：** 犬を作って吠（ほ）えさせよう！\n\n```python\nclass Dog:\n    def bark(self):\n        print('ワン！')\n\ndog = Dog()  # インスタンス作成\ndog.bark()   # => ワン！\n```\n\n**何をしているか：**\n1. `Dog()` で犬のインスタンス（実体）を作る\n2. 作った犬を `dog` という変数に入れる\n3. `dog.bark()` で犬に「吠える」という動作をさせる\n\n**ポイント：** 同じ設計図から、たくさんの犬を作ることができます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Catクラスを定義\nclass Cat:\n    # メソッドの第一引数はself\n    def meow(self):\n        # メッセージ（'Meow!'）\n        print('Meow!')\n\n# インスタンスを作って呼び出す\ncat = Cat()\n# meowメソッドを呼び出す\ncat.meow()",
        "holeyCode": "# Catクラスを定義\nclass ___:\n    # メソッドの第一引数はself\n    def ___(self):\n        # メッセージ（'Meow!'）\n        ___('Meow!')\n\n# インスタンスを作って呼び出す\ncat = ___()\n# meowメソッドを呼び出す\ncat.___()",
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
          "関数（meow）を新しく定義します。",
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
          "variables": [
            "self",
            "cat"
          ],
          "keywords": [
            "class",
            "def"
          ],
          "others": ["Cat", "Meow!", "meow", "print"]
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
            "title": "__init__ メソッド（初期化）",
            "content": "# 作られた瞬間に自動で動く！\n\n`__init__`（イニット）は **オブジェクトが作られるときに自動で呼ばれる** 特別なメソッドです。\n\n**コンストラクタ**（「構築するもの」という意味）とも呼びます。\n\nたとえば、ロボットを作るとき、最初に名前をつけたいですよね。`__init__` で **最初の設定** ができます。\n\n**例：** 名前を設定できる人クラス！\n\n```python\nclass Person:\n    def __init__(self, name):\n        self.name = name\n```\n\n`Person('太郎')` と呼ぶと、自動で `__init__` が動いて `name` に「太郎」が入ります！"
          },
          {
            "title": "属性（ぞくせい）を設定する",
            "content": "# self でオブジェクトにデータを保存しよう！\n\n**self（セルフ）** は「自分自身」を指す特別な変数です。\n\n`self.属性名 = 値` と書くと、オブジェクトにデータを保存できます。\n\n**例：** 自己紹介する人クラス！\n\n```python\nclass Person:\n    def __init__(self, name):\n        self.name = name  # 名前を保存\n    \n    def greet(self):\n        print(f'私は{self.name}です')\n\np = Person('太郎')\np.greet()  # => 私は太郎です\n```\n\n**何をしているか：**\n1. `Person('太郎')` で人を作る\n2. `__init__` が自動で動き、`self.name` に「太郎」が保存される\n3. `greet()` で `self.name`（太郎）を使って自己紹介！\n\n**ポイント：** `self` は「このオブジェクト自身」を表します。メソッドの最初の引数には必ず `self` を書きます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Robotクラスを定義\nclass Robot:\n    # コンストラクタを定義\n    def __init__(self, name):\n        # selfを使って属性を保存\n        self.name = name\n    \n    def say_name(self):\n        # self.nameを表示\n        print(self.name)\n\n# インスタンスを作る（名前は'R2D2'）\nr = Robot('R2D2')\n# say_nameメソッドを呼び出す\nr.say_name()",
        "holeyCode": "# Robotクラスを定義\nclass ___:\n    # コンストラクタを定義\n    def ___(self, name):\n        # selfを使って属性を保存\n        self.___ = name\n    \n    def ___(self):\n        # self.nameを表示\n        ___(self.name)\n\n# インスタンスを作る（名前は'R2D2'）\nr = Robot('R___D2')\n# say_nameメソッドを呼び出す\nr.___()",
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
          "関数（__init__）を新しく定義します。",
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
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "self",
            "name",
            "r"
          ],
          "others": ["Robot", "__init__", "R2D2", "say_name", "print", "2"]
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
