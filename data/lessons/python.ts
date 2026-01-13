export const pythonData = {
  "language": "python",
  "lessonId": "python-1",
  "lessonTitle": "Python (パイソン) に挑戦！",
  "lessonDescription": "プログラミング言語「Python（パイソン）」のきほんを学びましょう。コンピュータに指示（しじ）を出して、動かす方法を身につけます。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "プログラミングのさいしょの一歩です！コンピュータに「こんにちは」とあいさつさせてみましょう。print（プリント）という関数（かんすう）を使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Python（パイソン）とは？",
          "image": "/illustrations/common/snake.png",
          "content": "# コンピュータとお話ししましょう\n\nPython（パイソン）は、世界中で使われている「プログラミング言語」のひとつです。人間が入力した言葉を、コンピュータにわかるように伝えてくれます。"
        },
        {
          "title": "画面に文字を出すとは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# 出力（しゅつりょく）\n\nコンピュータに何かを教えたり、結果を見たりするために、画面に文字を出すことがあります。これを「出力（しゅつりょく）」と呼びます。"
        },
        {
          "title": "文字を出してくれる関数 print",
          "image": "/illustrations/common/monitor.png",
          "content": "# print（プリント）のまほう\n\n画面に何かを表示（ひょうじ）したいときは、`print()` という名前の関数（かんすう）を使います。\n\n```python\nprint(出したいもの)\n```\n\n例えば、こんなふうに書きます。\n```python\nprint('Python最高！')\n```\n=> Python最高！\n\n文字を出したいときは `' '`（引用符：いんようふ）で囲むのがルールです。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 画面に「Hello, World!」と出す関数\nprint('Hello, World!')",
      "holeyCode": "# 画面に「Hello, World!」と出す関数\nprint('___')",
      "correctLines": [
        "# 画面に「Hello, World!」と出す関数",
        "print('Hello, World!')"
      ],
      "lineHints": [
        null,
        "関数は「print」です。文字を出しましょうときは、左右を '（ちょんちょん）で囲むのを忘れないでください！"
      ],
      "candidates": {
        "functions": [
          "print"
        ],
        "strings": [
          "Hello, World!"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "便利な「はこ」変数（へんすう）",
      "description": "データに名前をつけて保存（ほぞん）できる「変数（へんすう）」を使ってみましょう。nameという名前の「はこ」に 'Python' という文字を入れてみます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "変数（へんすう）とは？",
          "image": "/illustrations/common/box.png",
          "content": "# データを保存する「はこ」\n\nプログラムの中では、数字や文字をしまっておく「はこ」を作ることができます。これを **変数（へんすう）** と呼びます。"
        },
        {
          "title": "はこに中身を入れる（代入）",
          "image": "/illustrations/common/box.png",
          "content": "# =（イコール）の使い方\n\n算数では「同じ」という意味の `=` ですが、プログラミングでは **「右のものを左のはこに入れる」** という意味になります。\n\n```python\nfruit = 'りんご'\nprint(fruit)\n```\n=> りんご\n\nこれだけで、`fruit` という名前のはこに `'りんご'` がしまわれ、画面に表示されました！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# nameというはこに 'Python' を入れる\nname = 'Python'\n# はこの中身を画面に出す\nprint(name)",
      "holeyCode": "# nameというはこに 'Python' を入れる\nname = '___'\n# はこの中身を画面に出す\nprint(___)",
      "correctLines": [
        "# nameというはこに 'Python' を入れる",
        "name = 'Python'",
        "# はこの中身を画面に出す",
        "print(name)"
      ],
      "lineHints": [
        null,
        "はこ（変数）の名前は `name` です。 `=` のあとに `'Python'` と入力しましょう。",
        null,
        "print のなかに、はこの名前 `name` を入力すると、中身が表示されます！"
      ],
      "candidates": {
        "variables": [
          "name"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "Python"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Python\n"
        }
      ]
    },
    {
      "title": "コンピュータで計算（けいさん）しましょう",
      "description": "Pythonを使って、たし算をしてみましょう。x というはこと y というはこの中身をたして、答えを出してみます。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "算数とプログラミング",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 計算はコンピュータの得意技\n\nコンピュータの一番の得意なことは「正確で速い計算」です。複雑な計算も、プログラミングで指示を出せば一瞬で解いてくれます。"
        },
        {
          "title": "計算の記号",
          "image": "/illustrations/common/robot_math.png",
          "content": "# 四則演算（しそくえんざん）\n\nPythonでは、こんな記号を使って計算をします。\n\n- **+** : たし算\n- **-** : ひき算\n- **\\*** : かけ算\n- **/** : わり算\n\n例えば、わり算はこんな感じです。\n```python\ncookies = 10\nfriends = 2\nprint(cookies / friends)\n```\n=> 5.0"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# xというはこに 10 を入れる\nx = 10\n# yというはこに 5 を入れる\ny = 5\n# x と y をたした答えを出す\nprint(x + y)",
      "holeyCode": "# xというはこに 10 を入れる\nx = ___\n# yというはこに 5 を入れる\ny = ___\n# x と y をたした答えを出す\nprint(x ___ y)",
      "correctLines": [
        "# xというはこに 10 を入れる",
        "x = 10",
        "# yというはこに 5 を入れる",
        "y = 5",
        "# x と y をたした答えを出す",
        ["print(x + y)", "print(y + x)"]
      ],
      "lineHints": [
        null,
        "x = 10 と入力しましょう。",
        null,
        "y = 5 と入力しましょう。",
        null,
        "たし算なので `+` を使います。 `print(x + y)` と入力してください。"
      ],
      "candidates": {
        "variables": [
          "x",
          "y"
        ],
        "functions": [
          "print"
        ],
        "numbers": [
          "10",
          "5"
        ],
        "operators": [
          "+"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
        }
      ]
    },
    {
      "title": "文章の中に「はこ」を入れましょう",
      "description": "f-string（エフストリング）という書き方を使って、文章の中に「はこ（変数）」の中身を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "f-string（エフストリング）とは？",
          "image": "/illustrations/common/fstring.png",
          "content": "# 文章と変数を組み合わせる\n\n文章の途中に、変数（はこ）の中身を入れたいときに使うのが **f-string** です。ただの文章よりも、状況に合わせて中身が変わる便利な文章を作れます。"
        },
        {
          "title": "f-string の書き方",
          "image": "/illustrations/common/fstring.png",
          "content": "# f 記号と { }\n\n文字のまえに `f` をつけて、`{ }`（ちゅうかっこ）の中に「はこ」の名前を入力すると、その中身を文章に入れられます。\n\n```python\nfruit = 'りんご'\nprint(f'私は{fruit}が好きです')\n```\n=> 私はりんごが好きです\n\nこれで「私はりんごが好きです」と表示されます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ageというはこに 10 を入れる\nage = 10\n# f-stringを使ってメッセージを出す\nprint(f'私は{age}歳です')",
      "holeyCode": "# ageというはこに 10 を入れる\nage = ___\n# f-stringを使ってメッセージを出す\nprint(f'私は{___}歳です')",
      "correctLines": [
        "# ageというはこに 10 を入れる",
        "age = 10",
        "# f-stringを使ってメッセージを出す",
        "print(f'私は{age}歳です')"
      ],
      "lineHints": [
        null,
        "age = 10 と入力しましょう。",
        null,
        "print(f'私は{age}歳です') と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "私は10歳です\n"
        }
      ]
    },
    {
      "title": "たくさんのデータをまとめましょう「リスト」",
      "description": "「リスト」というものを使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "リストとは？",
          "image": "/illustrations/common/list.png",
          "content": "# データの行列\n\nたくさんのデータを順番に並べておきたいときに使うのが **リスト** です。例えば、買い物リストなどを一つの変数にまとめて管理できます。"
        },
        {
          "title": "リストの番号は「0」から！",
          "image": "/illustrations/common/list.png",
          "content": "# 番号で指定しましょう\n\nリストの中身を取り出すときは、何番目かを指定します。プログラミングでは、**さいしょのデータは「0番」** と数えるルールなのです。\n\n```python\nfruits = ['りんご', 'バナナ', 'みかん']\nprint(fruits[0])\n```\n=> りんご"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# colors というリストを作る（'あか', 'あお'の順）\ncolors = ['あか', 'あお']\n# 2番目のデータ（1番）を出す\nprint(colors[1])",
      "holeyCode": "# colors というリストを作る（'あか', 'あお'の順）\ncolors = ['___', '___']\n# 2番目のデータ（1番）を出す\nprint(colors[___])",
      "correctLines": [
        "# colors というリストを作る（'あか', 'あお'の順）",
        "colors = ['あか', 'あお']",
        "# 2番目のデータ（1番）を出す",
        "print(colors[1])"
      ],
      "lineHints": [
        null,
        "['あか', 'あお'] と入力しましょう。",
        null,
        "2番目のデータの番号は 1 です。 `colors[1]` と入力してください。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "あか",
          "あお"
        ],
        "numbers": [
          "1"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "あお\n"
        }
      ]
    },
    {
      "title": "「もし〜なら」で分ける if文",
      "description": "点数（score）が 80点より高いときだけ、メッセージを出すようにしてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "条件分岐（じょうけんぶんき）とは？",
          "image": "/illustrations/common/if.png",
          "content": "# プログラムに判断をさせる\n\n状況によって動きを変えることを **条件分岐（じょうけんぶんき）** と呼びます。「もしテストが100点なら褒める」のように、プログラムに条件を与えてみましょう。"
        },
        {
          "title": "もし〜なら（if）",
          "image": "/illustrations/common/if.png",
          "content": "# if の使い方\n\n`if` のあとに条件を書きます。条件が正しい（True）なら中の処理を実行し、間違い（False）ならスキップします。\n\n```python\ntemperature = 30\nif temperature >= 25:  # True なので実行\n    print('今日はあついですね')\n```\n=> 今日はあついですね"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# score に 100 を入れる\nscore = 100\n# もし 80 より大きかったら\nif score > 80:\n    # メッセージを表示する\n    print('ごうかく！')",
      "holeyCode": "# score に 100 を入れる\nscore = ___\n# もし 80 より大きかったら\nif score ___ 80:\n    # メッセージを表示する\n    print('___')",
      "correctLines": [
        "# score に 100 を入れる",
        "score = 100",
        "# もし 80 より大きかったら",
        "if score > 80:",
        "    # メッセージを表示する",
        "    print('ごうかく！')"
      ],
      "lineHints": [
        null,
        "score = 100 と入力しましょう。",
        null,
        "`>` を使います。さいごに `:` を忘れないでください！",
        null,
        "`print('ごうかく！')` と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "score"
        ],
        "functions": [
          "print"
        ],
        "operators": [
          ">"
        ],
        "strings": [
          "ごうかく！"
        ],
        "numbers": [
          "100"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ごうかく！\n"
        }
      ]
    },
    {
      "title": "ちがう場合は？ if-else文",
      "description": "「もし〜なら」のあとに、「そうじゃなければ」という別の動きも作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "それ以外の場合は？",
          "image": "/illustrations/common/if.png",
          "content": "# else（エルス）の役割\n\n「もし〜なら」に当てはまらなかったときの動きを作るのが **else（エルス）** です。「合格でなければ不合格と出す」のように、2つのルートを作れます。"
        },
        {
          "title": "else の使い方",
          "image": "/illustrations/common/if.png",
          "content": "# 2つのルート\n\n条件にあてはまらなかったときの動きは `else:` を使って書きます。\n\n```python\nmoney = 500\nif money >= 1000:\n    print('買えます！')\nelse:\n    print('お金が足りません')\n```\n=> お金が足りません"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# age に 10 を入れる\nage = 10\n# 20さい以上かどうかで分ける\nif age >= 20:\n    print('おとな')\nelse:\n    # それ以外の場合\n    print('こども')",
      "holeyCode": "# age に 10 を入れる\nage = ___\n# 20以上かを比較する演算子\nif age ___ 20:\n    # 20歳以上のときのメッセージ（'おとな'）\n    print('___')\n# 「そうでなければ」のキーワード\n___:\n    # それ以外の場合（'こども'）\n    print('___')",
      "correctLines": [
        "# age に 10 を入れる",
        "age = 10",
        "# 20以上かを比較する演算子",
        "if age >= 20:",
        "    # 20歳以上のときのメッセージ（'おとな'）",
        "    print('おとな')",
        "# 「そうでなければ」のキーワード",
        "else:",
        "    # それ以外の場合（'こども'）",
        "    print('こども')"
      ],
      "lineHints": [
        null,
        "age = 10 と入力しましょう。",
        null,
        "if age >= 20: と入力しましょう。>= は「以上」を意味します。",
        null,
        "print('おとな') と入力しましょう。",
        null,
        "else: と入力しましょう。 `:` を忘れないでください。",
        null,
        "print('こども') と入力しましょう。"
      ],
      "candidates": {
        "variables": [
          "age"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "おとな",
          "こども"
        ],
        "numbers": [
          "10"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こども\n"
        }
      ]
    },
    {
      "title": "ぐるぐる回す for文",
      "description": "リストに入っているたくさんのデータを、一つずつ順番に表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "繰り返し（ループ）とは？",
          "image": "/illustrations/common/loop.png",
          "content": "# 作業を自動化する\n\n同じ処理を何度も繰り返すための仕組みが **ループ** です。リストの中身を一つずつ順番に全部チェックしたいときなどに非常に役立ちます。"
        },
        {
          "title": "くりかえし（for）",
          "image": "/illustrations/common/loop.png",
          "content": "# リストから順番に取り出す\n\nリストの中身を全部見たいときは `for` を使うと便利です。\n\n```python\nstations = ['東京', '品川', '横浜']\nfor s in stations:\n    print(s)\n```\n=> 東京\n=> 品川\n=> 横浜"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# リストを作る（'たろう', 'はなこ'の順）\nnames = ['たろう', 'はなこ']\n# 順番に取り出すループ\nfor name in names:\n    # 取り出した名前を表示\n    print(name)",
      "holeyCode": "# リストを作る（'たろう', 'はなこ'の順）\nnames = ['___', '___']\n# 順番に取り出すループ\nfor ___ in ___:\n    # 取り出した名前を表示\n    print(___)",
      "correctLines": [
        "# リストを作る（'たろう', 'はなこ'の順）",
        "names = ['たろう', 'はなこ']",
        "# 順番に取り出すループ",
        "for name in names:",
        "    # 取り出した名前を表示",
        "    print(name)"
      ],
      "lineHints": [
        null,
        null,
        null,
        "for name in names: と入力します。さいごの `:` も忘れないでください！",
        "取り出した名前（name）を print で表示します。"
      ],
      "candidates": {
        "variables": [
          "name",
          "names"
        ],
        "functions": [
          "print"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "たろう\nはなこ\n"
        }
      ]
    },
    {
      "title": "名前で探しましょう「じしょ」辞書",
      "description": "「辞書（じしょ）」というものを使うと、名前（キー）を指定してデータを取り出せます。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "辞書とは？",
          "image": "/illustrations/common/dict.png",
          "content": "# キーワードで検索できる仕組み\n\n「言葉」と「その意味」のように、関連する2つの情報をセットにして保存できるのが **辞書** です。キーワードを使って目的のデータをすぐに見つけられます。"
        },
        {
          "title": "キーワードで取り出しましょう",
          "image": "/illustrations/common/dict.png",
          "content": "# キー : あたい\n\n辞書は、キーワードとデータのセットになっています。\n\n```python\ncolors = {'りんご': 'あか', 'バナナ': 'きいろ'}\nprint(colors['りんご'])\n```\n=> あか"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 辞書を作る（キーは'みかん'、値は'オレンジ'）\ncolors = {'みかん': 'オレンジ'}\n# 中身を出す\nprint(colors['みかん'])",
      "holeyCode": "# 辞書を作る（キーは'みかん'、値は'オレンジ'）\ncolors = {'___': '___'}\n# 中身を出す\nprint(colors['___'])",
      "correctLines": [
        "# 辞書を作る（キーは'みかん'、値は'オレンジ'）",
        "colors = {'みかん': 'オレンジ'}",
        "# 中身を出す",
        "print(colors['みかん'])"
      ],
      "lineHints": [
        null,
        "{ 'みかん': 'オレンジ' } と入力しましょう。",
        null,
        "['みかん'] をつけて、特定のデータを取り出します。"
      ],
      "candidates": {
        "variables": [
          "colors"
        ],
        "functions": [
          "print"
        ],
        "strings": [
          "みかん",
          "オレンジ"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "オレンジ\n"
        }
      ]
    },
    {
      "title": "自分だけの関数を作ろう",
      "description": "自分だけの新しい関数（かんすう）を作ってみましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "関数（かんすう）とは？",
          "image": "/illustrations/common/function.png",
          "content": "# 処理のパッケージ化\n\n一連の処理をひとまとめにして、名前をつけたものを **関数** と呼びます。一度作っておけば、何度でも再利用できる便利な「魔法の言葉」になります。"
        },
        {
          "title": "関数を定義（ていぎ）する",
          "image": "/illustrations/common/function.png",
          "content": "# def のあとに名前をつける\n\n関数を新しく作るときは `def` を使います。作った関数は、あとで呼び出すと動くのです。\n\n```python\ndef introduce():\n    print('私はロボットです')\n\nintroduce() # これで関数が動きます！\n```\n=> 私はロボットです"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# greet という関数を定義する（'こんにちは'と表示）\ndef greet():\n    # 'こんにちは'と表示\n    print('こんにちは')\n# 関数を呼び出す\ngreet()",
      "holeyCode": "# greet という関数を定義する（'こんにちは'と表示）\ndef ___():\n    # 'こんにちは'と表示\n    print('___')\n# 関数を呼び出す\n___()",
      "correctLines": [
        "# greet という関数を定義する（'こんにちは'と表示）",
        "def greet():",
        "    # 'こんにちは'と表示",
        "    print('こんにちは')",
        "# 関数を呼び出す",
        "greet()"
      ],
      "lineHints": [
        null,
        "def greet(): と入力して、関数を定義します。",
        "print('こんにちは') と入力しましょう。",
        null,
        "greet() と入力して、関数を実行します。"
      ],
      "candidates": {
        "functions": [
          "greet",
          "print"
        ],
        "strings": [
          "こんにちは"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    }
  ]
}