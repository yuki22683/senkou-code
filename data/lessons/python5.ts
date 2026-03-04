export const pythonData5 = {
  "language": "python",
  "lessonId": "python-5",
  "lessonTitle": "Python V - ファイルとデータ処理",
  "lessonDescription": "Pythonでファイル操作とデータ処理を学びます。ファイルの読み書き、JSON、正規表現などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "tutorialSlides": [
    {
      "title": "with文でファイルを開く",
      "content": "**with文** を使うと、**ファイルが自動的に閉じられます**。\\n\\n```python\\nwith open('file.txt', 'r') as f:\\n    content = f.read()\\n# ← ここで自動で閉じる\\n```\\n\\n**モードの種類：**\\n- `'r'` = 読み込みモード\\n- `'w'` = 書き込みモード（上書き）\\n- `'a'` = 追記モード"
    },
    {
      "title": "JSONデータの扱い",
      "content": "JSON形式のデータは `json` モジュールで変換できます。\\n\\n```python\\nimport json\\n\\n# JSON文字列 → Python辞書\\ndata = json.loads('{\"name\": \"Python\"}'）\\nprint(data['name'])  # Python\\n\\n# Python辞書 → JSON文字列\\njson_str = json.dumps(data)\\n```"
    },
    {
      "title": "正規表現の基本",
      "content": "**正規表現**で文字の**パターン（形）**を表します。\\n\\n**よく使う記号：**\\n- `\\d` = 数字1文字\\n- `\\w` = 英数字1文字\\n- `\\s` = 空白文字\\n- `+` = 1回以上の繰り返し\\n- `{n}` = ちょうどn回の繰り返し\\n- `{3,4}` = 3〜4回の繰り返し\\n\\n```python\\nimport re\\nmatch = re.search(r'\\d{3}-\\d{4}', text)\\n```\\n\\n`\\d{3}` は「数字3桁」を意味します。"
    },
    {
      "title": "re.search と re.findall",
      "content": "**re.search()** は最初の1つ、**re.findall()** は全部を取得します。\\n\\n```python\\nimport re\\ntext = 'a@b.com and c@d.com'\\n\\n# 最初の1つだけ\\nmatch = re.search(r'\\w+@\\w+', text)\\nprint(match.group())  # a@b\\n\\n# 全部リストで取得\\nall = re.findall(r'\\w+@\\w+', text)\\nprint(all)  # ['a@b', 'c@d']\\n```"
    },
    {
      "title": "collections.Counter",
      "content": "**Counter** で**要素の出現回数**を簡単にカウントできます。\\n\\n```python\\nfrom collections import Counter\\n\\nwords = ['apple', 'banana', 'apple']\\ncount = Counter(words)\\nprint(count['apple'])\\n\\n# 多い順に取得\\nprint(count.most_common(2))\\n# [('apple', 2), ('banana', 1)]\\n```\\n\\n=> 2\\n\\n文字列を渡すと1文字ずつカウントします。"
    }
  ],
  "exercises": [
    {
      "title": "ファイルを開く（with文）",
      "description": "ファイルを開いてデータを読み込む方法を学びます",
      "tutorialSlides": [
        {
          "title": "with文でファイルを開く",
          "content": "# 安全にファイルを扱う\\n\\n**with文（ウィズぶん）** を使うと、**ファイルが自動的に閉じられます**。\\n\\n**たとえ話：** 冷蔵庫（ファイル）を開けたら、使い終わったら必ず閉める必要があります。\\n- with文なし: 自分で閉めないといけない（忘れるとトラブル！）\\n- with文あり: 自動で閉まる（安心！）\\n\\n**ファイルを開くときのモード：**\\n- `'r'` = 読み込み（Read）モード\\n- `'w'` = 書き込み（Write）モード（上書き）\\n- `'a'` = 追記（Append）モード\\n\\n**例：** ファイルを読み込もう！\\n\\n```python\\nwith open('file.txt', 'r') as f:\\n    content = f.read()  # 全部読む\\n    print(content)\\n# ← ここでファイルは自動で閉じられる！\\n```\\n\\n**何をしているか：**\\n1. `open('file.txt', 'r')` でファイルを読み込みモードで開く\\n2. `as f` でファイルオブジェクトを `f` という名前で使う\\n3. `f.read()` でファイルの中身を全部読む\\n4. `with` のブロックを抜けたら自動でファイルが閉じる"
        }
      ],
      "correctCode": "# filenameに'テスト.txt'を代入\\nfilename = 'テスト.txt'\\n# withでfilenameを書き込みモードで開きfに代入\\nwith open(filename, 'w') as f:\\n    # ファイルに「こんにちは, Python!」を書き込む\\n    f.write('こんにちは, Python!')\\n\\n# withでfilenameを読み込みモードで開きfに代入\\nwith open(filename, 'r') as f:\\n    # ファイル内容を表示\\n    print(f.read())",
      "holeyCode": "# filenameに'テスト.txt'を代入\\n___ = '___'\\n# withでfilenameを書き込みモードで開きfに代入\\nwith ___(___,  '___') as ___:\\n    # ファイルに「こんにちは, Python!」を書き込む\\n    ___.___('___')\\n\\n# withでfilenameを読み込みモードで開きfに代入\\nwith ___(___, '___') as ___:\\n    # ファイル内容を表示\\n    ___(___.___())",
      "correctLines": [
          "# filenameに'テスト.txt'を代入",
          "filename = 'テスト.txt'",
          "# withでfilenameを書き込みモードで開きfに代入",
          "with open(filename, 'w') as f:",
          "    # ファイルに「こんにちは, Python!」を書き込む",
          "    f.write('こんにちは, Python!')",
          "",
          "# withでfilenameを読み込みモードで開きfに代入",
          "with open(filename, 'r') as f:",
          "    # ファイル内容を表示",
          "    print(f.read())"
        ],
      "lineHints": [
          null,
          "ファイル名を格納する変数名と、ファイルパス文字列を指定します。",
          null,
          "open関数、変数filename、モード'w'、ファイルハンドル変数fを指定します。",
          null,
          "ファイルハンドル変数f、writeメソッド、書き込む文字列を指定します。",
          null,
          null,
          "open関数、変数filename、モード'r'、ファイルハンドル変数fを指定します。",
          null,
          "print関数、ファイルハンドル変数f、readメソッドを指定します。"
        ],
        "candidates": {
          "functions": ["open", "print", "write", "read"],
          "others": ["filename", "f", "テスト.txt", "w", "r", "こんにちは, Python!"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Python!\\n"
          }
        ]
      },
    {
      "title": "JSONを読み込む",
      "description": "JSONを読み込むの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "json.loads()",
          "content": "# JSON文字列をPythonに変換\\n\\n**JSON（ジェイソン）** とは、データを保存したり送ったりするための **世界共通の書き方** です。\\n\\n**JSONの例：**\\n```json\\n{\"name\": \"Taro\", \"age\": 25}\\n```\\n\\n**json.loads()（ロードエス）** で **JSON文字列をPythonの辞書やリストに変換** できます。\\n\\n**たとえ話：** 外国語（JSON）を日本語（Python）に翻訳するようなものです。\\n\\n**例：** JSON文字列を辞書に変換しよう！\\n\\n```python\\nimport json\\n\\n# JSON形式の文字列\\njson_str = '{\"name\": \"Taro\", \"age\": 25}'\\n# Pythonの辞書に変換\\ndata = json.loads(json_str)\\nprint(data['name'])  # Taro\\n```\\n\\n**何をしているか：**\\n1. `import json` でJSONモジュールを読み込む\\n2. JSON形式の文字列を用意（ダブルクォートを使うのがJSONのルール）\\n3. `json.loads()` で文字列（String）をPythonオブジェクトに変換\\n\\n**ポイント：** `loads` の 's' は **String（文字列）** の意味です。"
        }
      ],
      "correctCode": "# jsonモジュールをimportする\\nimport json\\n\\n# json_strに言語名（Python）とバージョン（3.12）を持つJSON文字列を代入\\njson_str = '{\"name\": \"Python\", \"version\": 3.12}'\\n# json_strを辞書に変換してdataに代入\\ndata = json.loads(json_str)\\n# data辞書の'name'キーの値を表示\\nprint(data['name'])",
      "holeyCode": "# jsonモジュールをimportする\\nimport ___\\n\\n# json_strに言語名（Python）とバージョン（3.12）を持つJSON文字列を代入\\n___ = '___'\\n# json_strを辞書に変換してdataに代入\\n___ = ___.___(___)\\n# data辞書の'name'キーの値を表示\\n___(___['___'])",
      "correctLines": [
          "# jsonモジュールをimportする",
          "import json",
          "",
          "# json_strに言語名（Python）とバージョン（3.12）を持つJSON文字列を代入",
          "json_str = '{\"name\": \"Python\", \"version\": 3.12}'",
          "# json_strを辞書に変換してdataに代入",
          "data = json.loads(json_str)",
          "# data辞書の'name'キーの値を表示",
          "print(data['name'])"
        ],
      "lineHints": [
          null,
          "JSON形式のデータを扱うためのモジュールです。",
          null,
          null,
          "変数名json_strと、JSON形式の文字列を指定します。",
          null,
          "変数data（変換後の辞書）、jsonモジュール、loadsメソッド、変数json_strを指定します。",
          null,
          "print関数、変数data、キー'名前'を指定します。"
        ],
        "candidates": {
          "keywords": ["json", "loads"],
          "others": ["json_str", "print", "data", "{\"name\": \"Python\", \"version\": 3.12}", "name"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Python\\n"
          }
        ]
      },
    {
      "title": "正規表現（search）",
      "description": "パターンを使って文字列を検索・置換する方法を学びます",
      "tutorialSlides": [
        {
          "title": "re.search()",
          "content": "# パターンを検索\\n\\n**正規表現** とは、文字の **パターン（形）** を表す特別な書き方です。\\n\\n**たとえ話：** 「3桁の数字」「@が入ったメールアドレス」のような「形」で文字を探せます。\\n\\n**re.search()（サーチ）** で **文字列の中からパターンに合う部分を探します**。\\n\\n**よく使う記号：**\\n- `\\d` = 数字1文字（0-9）\\n- `\\w` = 英数字1文字（a-z, A-Z, 0-9, _）\\n- `+` = 1回以上の繰り返し\\n- `{3}` = ちょうど3回\\n\\n**例：** メールアドレスを探そう！\\n\\n```python\\nimport re\\n\\ntext = 'my email is test@example.com'\\nmatch = re.search(r'\\w+@\\w+\\.\\w+', text)\\nif match:\\n    print(match.group())  # test@example.com\\n```\\n\\n**何をしているか：**\\n1. `import re` で正規表現モジュールを読み込む\\n2. `re.search(パターン, 文字列)` で検索\\n3. 見つかったら `match` オブジェクトが返る\\n4. `match.group()` で一致した文字列を取得\\n\\n**ポイント：** パターンの前に `r` をつけると、`\\` をそのまま使えます。"
        }
      ],
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに電話番号を含む文字列を代入\\ntext = 'Call me at 090-1234-5678'\\n# textからre.searchで3桁-4桁-4桁パターンを検索しmatchに代入\\nmatch = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)\\n# matchがある場合\\nif match:\\n    # printでmatchのgroupメソッドから一致した電話番号を表示\\n    print(match.group())",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# textに電話番号を含む文字列を代入\\n___ = '___'\\n# textからre.searchで3桁-4桁-4桁パターンを検索しmatchに代入\\n___ = ___.___(___, ___)\\n# matchがある場合\\nif ___:\\n    # printでmatchのgroupメソッドから一致した電話番号を表示\\n    ___(___.___())",
      "correctLines": [
          "# 正規表現モジュールをインポート",
          "import re",
          "",
          "# textに電話番号を含む文字列を代入",
          "text = 'Call me at 090-1234-5678'",
          "# textからre.searchで3桁-4桁-4桁パターンを検索しmatchに代入",
          "match = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)",
          "# matchがある場合",
          "if match:",
          "    # printでmatchのgroupメソッドから一致した電話番号を表示",
          "    print(match.group())"
        ],
      "lineHints": [
          null,
          "re モジュールをインポートします。",
          null,
          null,
          "変数textと、電話番号を含む文字列を指定します。",
          null,
          "変数match、reモジュール、searchメソッド、正規表現パターン、変数textを指定します。",
          null,
          "変数matchを指定します。",
          null,
          "print関数、変数match、groupメソッドを指定します。"
        ],
      "candidates": {
        "keywords": ["re", "search"],
        "variables": ["match", "text"],
        "others": ["r'\\d{3}-\\d{4}-\\d{4}'", "print", "Call me at 090-1234-5678", "group"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "090-1234-5678\\n"
        }
      ]
    },
    {
      "title": "collections.Counter",
      "description": "collections.Counterの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Counterとは？",
          "content": "# 要素を数える\\n\\n**Counter（カウンター）** を使うと、**要素の出現回数を簡単にカウント** できます。\\n\\n**たとえ話：** クラスで「好きな果物」アンケートを取って、りんごが何票、バナナが何票...と数えるようなものです。\\n\\n**例：** 果物の出現回数を数えよう！\\n\\n```python\\nfrom collections import Counter\\n\\nwords = ['apple', 'banana', 'apple', 'cherry']\\ncount = Counter(words)\\nprint(count['apple'])\\nprint(count['banana'])\\n```\\n\\n=> 2（appleは2回出てきた）\\n=> 1\\n\\n**何をしているか：**\\n1. `from collections import Counter` でインポート\\n2. `Counter(リスト)` でカウント開始\\n3. `count['apple']` で「apple」の出現回数を取得\\n\\n**便利なメソッド：**\\n- `count.most_common(3)`: 多い順に3つ取得\\n- `count.total()`: 全要素の合計数\\n\\n**ポイント：** 文字列を渡すと、1文字ずつカウントします！"
        }
      ],
      "correctCode": "# Counterクラスをインポート\\nfrom collections import Counter\\n\\n# textに'hello world'を代入\\ntext = 'hello world'\\n# textの各文字をカウントしてcountに代入\\ncount = Counter(text)\\n# 出現回数が多い順に3つ表示\\nprint(count.most_common(3))",
      "holeyCode": "# Counterクラスをインポート\\nfrom ___ import ___\\n\\n# textに'hello world'を代入\\n___ = '___'\\n# textの各文字をカウントしてcountに代入\\n___ = ___(___) \\n# 出現回数が多い順に3つ表示\\n___(___.___(___))",
      "correctLines": [
          "# Counterクラスをインポート",
          "from collections import Counter",
          "",
          "# textに'hello world'を代入",
          "text = 'hello world'",
          "# textの各文字をカウントしてcountに代入",
          "count = Counter(text)",
          "# 出現回数が多い順に3つ表示",
          "print(count.most_common(3))"
        ],
      "lineHints": [
          null,
          "collections モジュールから Counter クラスをインポートします。",
          null,
          null,
          "変数textと、カウント対象の文字列を指定します。",
          null,
          "変数count、Counterクラス、変数textを指定します。",
          null,
          "print関数、変数count、most_commonメソッド、取得件数3を指定します。"
        ],
        "candidates": {
          "keywords": ["collections", "Counter"],
          "others": ["hello world", "print", "most_common", "3", "text", "count"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[('l', 3), ('o', 2), ('h', 1)]\\n"
          }
        ]
      },
    {
      "title": "正規表現（findall）",
      "description": "パターンに一致する全ての部分を取得しましょう。",
      "tutorialSlides": [
        {
          "title": "re.findall()",
          "content": "# 全ての一致を取得\\n\\n**re.findall()（ファインドオール）** で **パターンに一致する全ての部分をリストで取得** できます。\\n\\n**searchとの違い：**\\n- `search`: 最初に見つかった1つだけ\\n- `findall`: 全部見つけてリストにする\\n\\n**たとえ話：** 文章の中から「数字」を全部探し出すイメージです。\\n\\n**例：** 文章の中の全ての数字を取り出そう！\\n\\n```python\\nimport re\\n\\ntext = 'りんご3個とみかん5個'\\nnumbers = re.findall(r'\\d+', text)\\nprint(numbers)  # ['3', '5']\\n```\\n\\n**パターン `\\d+` の意味：**\\n- `\\d` = 数字1文字（0-9）\\n- `+` = 1回以上の繰り返し\\n- つまり「1桁以上の数字」にマッチ\\n\\n**何をしているか：**\\n1. `re.findall(パターン, 文字列)` で全て検索\\n2. 見つかった全ての部分がリストで返ってくる\\n3. 見つからない場合は空のリスト `[]` が返る\\n\\n**ポイント：** `findall` は常にリストを返すので、`if` でチェックしなくてもOK！"
        }
      ],
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'email1@test.com and email2@test.com'を代入\\ntext = 'email1@test.com and email2@test.com'\\n# 正規表現のfindallでtextからメールアドレスを全検索しemailsに代入\\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\\n# emailsをprintで出力\\nprint(emails)",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# textに'email1@test.com and email2@test.com'を代入\\n___ = '___'\\n# 正規表現のfindallでtextからメールアドレスを全検索しemailsに代入\\n___ = ___.___(___, ___)\\n# emailsをprintで出力\\n___(___)",
      "correctLines": [
        "# 正規表現モジュールをインポート",
        "import re",
        "",
        "# textに'email1@test.com and email2@test.com'を代入",
        "text = 'email1@test.com and email2@test.com'",
        "# 正規表現のfindallでtextからメールアドレスを全検索しemailsに代入",
        "emails = re.findall(r'\\w+@\\w+\\.\\w+', text)",
        "# emailsをprintで出力",
        "print(emails)"
      ],
      "lineHints": [
        null,
        "re モジュールをインポートします。",
        null,
        null,
        "変数textと、メールアドレスを含む文字列を指定します。",
        null,
        "変数emails、reモジュール、findallメソッド、正規表現パターン、変数textを指定します。",
        null,
        "print関数と変数emailsを指定します。"
      ],
      "candidates": {
        "keywords": ["re", "findall"],
        "variables": ["emails", "text"],
        "others": ["r'\\w+@\\w+\\.\\w+'", "print", "email1@test.com and email2@test.com"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "['email1@test.com', 'email2@test.com']\\n"
        }
      ]
    },
    {
      "title": "正規表現（sub）",
      "description": "パターンに一致する部分を置換しましょう。",
      "tutorialSlides": [
        {
          "title": "re.sub()",
          "content": "# パターンを置換\\n\\n**re.sub()（サブスティテュート）** で **パターンに一致する部分を別の文字に置き換え** られます。\\n\\n**たとえ話：** 文章の中の「犬」を全部「猫」に置き換えるような処理です。\\n\\n**書き方：** `re.sub(パターン, 置換後, 文字列)`\\n\\n**例：** 数字を「many」に置き換えよう！\\n\\n```python\\nimport re\\n\\ntext = 'りんご3個'\\nresult = re.sub(r'\\d+', 'many', text)\\nprint(result)  # りんごmany個\\n```\\n\\n**パターン `\\d+` の意味：**\\n- `\\d` = 数字1文字（0-9）\\n- `+` = 1回以上の繰り返し\\n- つまり「1桁以上の数字」にマッチ\\n\\n**何をしているか：**\\n1. `re.sub(パターン, 置換後, 文字列)` で置換\\n2. 全ての一致箇所が置き換わる\\n\\n**便利な使い方：**\\n- 余分な空白を1つにまとめる: `re.sub(r'\\s+', ' ', text)`\\n  - `\\s` = 空白文字（スペース、タブ、改行）\\n  - `\\s+` = 1つ以上の連続した空白\\n- 数字を消す: `re.sub(r'\\d+', '', text)`\\n\\n**ポイント：** 元の文字列は変わらず、新しい文字列が返ってきます。"
        }
      ],
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'hello  world Python'を代入\\ntext = 'hello  world Python'\\n# 正規表現のsubでtextの連続空白を単一空白に置換しresultに代入\\nresult = re.sub(r'\\s+', ' ', text)\\n# resultをprintで出力\\nprint(result)",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# textに'hello  world Python'を代入\\n___ = '___'\\n# 正規表現のsubでtextの連続空白を単一空白に置換しresultに代入\\n___ = ___.___(___, ___, ___)\\n# resultをprintで出力\\n___(___)",
      "correctLines": [
        "# 正規表現モジュールをインポート",
        "import re",
        "",
        "# textに'hello  world Python'を代入",
        "text = 'hello  world Python'",
        "# 正規表現のsubでtextの連続空白を単一空白に置換しresultに代入",
        "result = re.sub(r'\\s+', ' ', text)",
        "# resultをprintで出力",
        "print(result)"
      ],
      "lineHints": [
        null,
        "re モジュールをインポートします。",
        null,
        null,
        "変数textと、連続した空白を含む文字列を指定します。",
        null,
        "変数result、reモジュール、subメソッド、正規表現パターン、置換文字列、変数textを指定します。",
        null,
        "print関数と変数resultを指定します。"
      ],
      "candidates": {
        "keywords": ["re", "sub"],
        "variables": ["result", "text"],
        "others": ["r'\\s+'", "' '", "print", "hello  world Python"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello world Python\\n"
        }
      ]
    },
    {
      "title": "collections.defaultdict",
      "description": "デフォルト値を持つ辞書を使いましょう。",
      "tutorialSlides": [
        {
          "title": "defaultdictとは？",
          "content": "# デフォルト値を持つ辞書\\n\\n**defaultdict（デフォルトディクト）** を使うと、**存在しないキーにアクセスしてもエラーにならない** 辞書が作れます。\\n\\n**普通の辞書の問題：**\\n```python\\nd = {}\\nd['a'] += 1  # エラー！キー'a'が存在しない\\n```\\n\\n**defaultdictなら：**\\n```python\\nd = defaultdict(int)\\nd['a'] += 1  # OK！自動で 0 が入る\\n```\\n\\n**たとえ話：** ゲームのスコアボード。新しいプレイヤーが参加すると、自動で「0点」からスタートできます。\\n\\n**デフォルト値の種類：**\\n- `defaultdict(int)`: 数値 `0` がデフォルト\\n- `defaultdict(list)`: 空のリスト `[]` がデフォルト\\n- `defaultdict(str)`: 空の文字列 `''` がデフォルト\\n\\n**何をしているか：**\\n1. `defaultdict(型)` でデフォルト値の型を指定\\n2. 存在しないキーにアクセスすると自動でデフォルト値が入る\\n3. その後は普通の辞書と同じように使える\\n\\n**ポイント：** キーの存在確認が不要になり、コードがシンプルになります！"
        }
      ],
      "correctCode": "# defaultdictクラスをインポート\\nfrom collections import defaultdict\\n\\n# dにdefaultdict(list)を代入\\nd = defaultdict(list)\\n# d['くだもの']に'りんご'をappend\\nd['くだもの'].append('りんご')\\n# d['くだもの']に'バナナ'をappend\\nd['くだもの'].append('バナナ')\\n# d['くだもの']をprintで出力\\nprint(d['くだもの'])",
      "holeyCode": "# defaultdictクラスをインポート\\nfrom ___ import ___\\n\\n# dにdefaultdict(list)を代入\\n___ = ___(list)\\n# d['くだもの']に'りんご'をappend\\n___['___'].___('___')\\n# d['くだもの']に'バナナ'をappend\\n___['___'].___('___')\\n# d['くだもの']をprintで出力\\n___(___['___'])",
      "correctLines": [
        "# defaultdictクラスをインポート",
        "from collections import defaultdict",
        "",
        "# dにdefaultdict(list)を代入",
        "d = defaultdict(list)",
        "# d['くだもの']に'りんご'をappend",
        "d['くだもの'].append('りんご')",
        "# d['くだもの']に'バナナ'をappend",
        "d['くだもの'].append('バナナ')",
        "# d['くだもの']をprintで出力",
        "print(d['くだもの'])"
      ],
      "lineHints": [
        null,
        "collections モジュールから defaultdict クラスをインポートします。",
        null,
        null,
        "変数dと、defaultdict(list)を指定します。",
        null,
        "変数d、キー'くだもの'、appendメソッド、'りんご'を指定します。",
        null,
        "変数d、キー'くだもの'、appendメソッド、'バナナ'を指定します。",
        null,
        "print関数、変数d、キー'くだもの'を指定します。"
      ],
      "candidates": {
        "keywords": ["collections", "defaultdict"],
        "others": ["d", "list", "くだもの", "append", "りんご", "バナナ", "print"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "['りんご', 'バナナ']\\n"
        }
      ]
    },
    {
      "title": "itertools.chain",
      "description": "複数のイテラブルを連結しましょう。",
      "tutorialSlides": [
        {
          "title": "itertools.chain()",
          "content": "# イテラブルを連結\\n\\n**chain()（チェーン）** を使うと、**複数のリストやイテラブルを1つにつなげて** 処理できます。\\n\\n**たとえ話：** 電車の連結のようなもの。複数の車両（リスト）をつなげて1つの長い電車にします。\\n\\n**リストの `+` との違い：**\\n- `a + b`: 新しいリストを作る（メモリを使う）\\n- `chain(a, b)`: つなげて順番に取り出す（メモリに優しい）\\n\\n**例：** 2つのリストをつなげてループしよう！\\n\\n```python\\nfrom itertools import chain\\n\\na = [1, 2, 3]\\nb = [4, 5, 6]\\nfor x in chain(a, b):\\n    print(x)\\n```\\n\\n=> 1, 2, 3, 4, 5, 6\\n\\n**何をしているか：**\\n1. `from itertools import chain` でインポート\\n2. `chain(a, b)` で2つのリストを連結\\n3. `for` ループで1つずつ取り出せる\\n4. `list(chain(a, b))` でリストに変換も可能\\n\\n**ポイント：** 3つ以上も連結可能！ `chain(a, b, c, d, ...)` のように書けます。"
        }
      ],
      "correctCode": "# chain関数をインポート\\nfrom itertools import chain\\n\\n# list1に[1, 2, 3]を代入\\nlist1 = [1, 2, 3]\\n# list2に[4, 5, 6]を代入\\nlist2 = [4, 5, 6]\\n# chain(list1, list2)をlist()でリスト化しresultに代入\\nresult = list(chain(list1, list2))\\n# resultをprintで出力\\nprint(result)",
      "holeyCode": "# chain関数をインポート\\nfrom ___ import ___\\n\\n# list1に[1, 2, 3]を代入\\n___ = [___, ___, ___]\\n# list2に[4, 5, 6]を代入\\n___ = [___, ___, ___]\\n# chain(list1, list2)をlist()でリスト化しresultに代入\\n___ = ___(___(___, ___))\\n# resultをprintで出力\\n___(___)",
      "correctLines": [
        "# chain関数をインポート",
        "from itertools import chain",
        "",
        "# list1に[1, 2, 3]を代入",
        "list1 = [1, 2, 3]",
        "# list2に[4, 5, 6]を代入",
        "list2 = [4, 5, 6]",
        "# chain(list1, list2)をlist()でリスト化しresultに代入",
        "result = list(chain(list1, list2))",
        "# resultをprintで出力",
        "print(result)"
      ],
      "lineHints": [
        null,
        "itertools モジュールから chain 関数をインポートします。",
        null,
        null,
        "変数list1と、1, 2, 3を含むリストを指定します。",
        null,
        "変数list2と、4, 5, 6を含むリストを指定します。",
        null,
        "変数result、list関数、chain関数、変数list1、変数list2を指定します。",
        null,
        "print関数と変数resultを指定します。"
      ],
      "candidates": {
        "keywords": ["itertools", "chain"],
        "others": ["list1", "list2", "result", "list", "1", "2", "3", "4", "5", "6", "print"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 2, 3, 4, 5, 6]\\n"
        }
      ]
    }
  ]
};