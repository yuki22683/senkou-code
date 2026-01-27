export const pythonData5 = {
  "language": "python",
  "lessonId": "python-5",
  "lessonTitle": "Python V - ファイルとデータ処理",
  "lessonDescription": "Pythonでファイル操作とデータ処理を学びます。ファイルの読み書き、JSON、正規表現などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "exercises": [
    {
      "title": "ファイルを開く（with文）",
      "description": "with文を使って安全にファイルを開きましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "with文でファイルを開く",
          "image": "/illustrations/common/key_silver.png",
          "content": "# 安全にファイルを扱う\n\n**with文（ウィズぶん）** を使うと、**ファイルが自動的に閉じられます**。\n\n**たとえ話：** 冷蔵庫（ファイル）を開けたら、使い終わったら必ず閉める必要があります。\n- with文なし: 自分で閉めないといけない（忘れるとトラブル！）\n- with文あり: 自動で閉まる（安心！）\n\n**ファイルを開くときのモード：**\n- `'r'` = 読み込み（Read）モード\n- `'w'` = 書き込み（Write）モード（上書き）\n- `'a'` = 追記（Append）モード\n\n**例：** ファイルを読み込もう！\n\n```python\nwith open('file.txt', 'r') as f:\n    content = f.read()  # 全部読む\n    print(content)\n# ← ここでファイルは自動で閉じられる！\n```\n\n**何をしているか：**\n1. `open('file.txt', 'r')` でファイルを読み込みモードで開く\n2. `as f` でファイルオブジェクトを `f` という名前で使う\n3. `f.read()` でファイルの中身を全部読む\n4. `with` のブロックを抜けたら自動でファイルが閉じる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ファイル名を変数に保存\nfilename = 'test.txt'\n# 書き込みモードでファイルを開く\nwith open(filename, 'w') as f:\n    # ファイルにテキストを書き込む\n    f.write('Hello, Python!')\n\n# 読み込みモードでファイルを開く\nwith open(filename, 'r') as f:\n    # ファイルの内容を読み込んで表示\n    print(f.read())",
      "holeyCode": "# ファイル名を変数に保存\nfilename = ___\n# 書き込みモードでファイルを開く\nwith ___(filename, 'w') as f:\n    # ファイルにテキストを書き込む\n    ___\n\n# 読み込みモードでファイルを開く\nwith ___ as f:\n    # ファイルの内容を読み込んで表示\n    print(___)",
      "correctLines": [
        "# ファイル名を変数に保存",
        "filename = 'test.txt'",
        "# 書き込みモードでファイルを開く",
        "with open(filename, 'w') as f:",
        "    # ファイルにテキストを書き込む",
        "    f.write('Hello, Python!')",
        "",
        "# 読み込みモードでファイルを開く",
        "with open(filename, 'r') as f:",
        "    # ファイルの内容を読み込んで表示",
        "    print(f.read())"
      ],
      "lineHints": [null, null, null, null, null, "open関数を使います。", null, null, null, null, null],
      "candidates": {
        "keywords": ["open", "file", "read"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, Python!\n"
        }
      ]
    },
    {
      "title": "ファイルを1行ずつ読む",
      "description": "ファイルの各行をループで処理しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "1行ずつ読み込む",
          "image": "/illustrations/3d/loop.png",
          "content": "# forループでファイルを読む\n\nファイルオブジェクトは **イテレータ**（繰り返し処理できるもの）なので、**forループで1行ずつ読めます**。\n\n**たとえ話：** 本のページをめくるように、1行ずつ順番に読んでいきます。\n- `f.read()`: 本を丸ごとコピーする（メモリをたくさん使う）\n- `for line in f`: 1ページずつ読む（メモリに優しい）\n\n**例：** ファイルを1行ずつ処理しよう！\n\n```python\nwith open('file.txt', 'r') as f:\n    for line in f:\n        print(line.strip())  # 余分な空白を取り除いて表示\n```\n\n**何をしているか：**\n1. `for line in f` でファイルから1行ずつ取り出す\n2. `line` には1行分のテキストが入る（改行文字`\\n`も含む）\n3. `line.strip()` で前後の空白や改行を取り除く\n\n**ポイント：** 大きなファイルを読むときは、`for line in f` を使うとメモリを節約できます！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ファイルを1行ずつ読む\n# 書き込みモードでファイルを開く\nwith open('test.txt', 'w') as f:\n    # 複数行のテキストを書き込む\n    f.write('line1\\nline2\\nline3')\n\n# 読み込みモードでファイルを開く\nwith open('test.txt', 'r') as f:\n    # ファイルから1行ずつ取得してループ\n    for line in f:\n        # 前後の空白を除去して表示\n        print(line.strip())",
      "holeyCode": "# ファイルを1行ずつ読む\n# 書き込みモードでファイルを開く\nwith ___ as f:\n    # 複数行のテキストを書き込む\n    ___\n\n# 読み込みモードでファイルを開く\nwith ___ as f:\n    # ファイルから1行ずつ取得してループ\n    for line ___ f:\n        # 前後の空白を除去して表示\n        print(___)",
      "correctLines": [
        "# ファイルを1行ずつ読む",
        "# 書き込みモードでファイルを開く",
        "with open('test.txt', 'w') as f:",
        "    # 複数行のテキストを書き込む",
        "    f.write('line1\\nline2\\nline3')",
        "",
        "# 読み込みモードでファイルを開く",
        "with open('test.txt', 'r') as f:",
        "    # ファイルから1行ずつ取得してループ",
        "    for line in f:",
        "        # 前後の空白を除去して表示",
        "        print(line.strip())"
      ],
      "lineHints": [null, null, null, null, null, null, null, null, null, null, "inキーワードを使います。", null],
      "candidates": {
        "keywords": ["in", "from", "of"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "line1line2line3\n"
        }
      ]
    },
    {
      "title": "JSONを読み込む",
      "description": "JSONファイルをPythonのデータに変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "json.loads()",
          "image": "/illustrations/common/shield_private.png",
          "content": "# JSON文字列をPythonに変換\n\n**JSON（ジェイソン）** とは、データを保存したり送ったりするための **世界共通の書き方** です。\n\n**JSONの例：**\n```json\n{\"name\": \"Taro\", \"age\": 25}\n```\n\n**json.loads()（ロードエス）** で **JSON文字列をPythonの辞書やリストに変換** できます。\n\n**たとえ話：** 外国語（JSON）を日本語（Python）に翻訳するようなものです。\n\n**例：** JSON文字列を辞書に変換しよう！\n\n```python\nimport json\n\n# JSON形式の文字列\njson_str = '{\"name\": \"Taro\", \"age\": 25}'\n# Pythonの辞書に変換\ndata = json.loads(json_str)\nprint(data['name'])  # Taro\n```\n\n**何をしているか：**\n1. `import json` でJSONモジュールを読み込む\n2. JSON形式の文字列を用意（ダブルクォートを使うのがJSONのルール）\n3. `json.loads()` で文字列（String）をPythonオブジェクトに変換\n\n**ポイント：** `loads` の 's' は **String（文字列）** の意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# JSONモジュールをインポート\nimport json\n\n# JSON形式の文字列を定義\njson_str = '{\"name\": \"Python\", \"version\": 3.12}'\n# JSON文字列をPythonオブジェクトに変換\ndata = json.loads(json_str)\n# 辞書からnameキーの値を取得して表示\nprint(data['name'])",
      "holeyCode": "# JSONモジュールをインポート\nimport ___\n\n# JSON形式の文字列を定義\njson_str = ___\n# JSON文字列をPythonオブジェクトに変換\ndata = json.___(json_str)\n# 辞書からnameキーの値を取得して表示\nprint(___)",
      "correctLines": [
        "# JSONモジュールをインポート",
        "import json",
        "",
        "# JSON形式の文字列を定義",
        "json_str = '{\"name\": \"Python\", \"version\": 3.12}'",
        "# JSON文字列をPythonオブジェクトに変換",
        "data = json.loads(json_str)",
        "# 辞書からnameキーの値を取得して表示",
        "print(data['name'])"
      ],
      "lineHints": [null, null, null, null, null, null, null, "JSON文字列を読み込むメソッドです。", null],
      "candidates": {
        "keywords": ["loads", "load", "parse"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Python\n"
        }
      ]
    },
    {
      "title": "JSONに変換する",
      "description": "PythonのデータをJSON文字列に変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "json.dumps()",
          "image": "/illustrations/common/return_value.png",
          "content": "# PythonをJSONに変換\n\n**json.dumps()（ダンプエス）** で **Pythonの辞書やリストをJSON文字列に変換** できます。\n\n**たとえ話：** 日本語（Python）を外国語（JSON）に翻訳するようなものです。\n- `loads`: 外国語 → 日本語（読み込み）\n- `dumps`: 日本語 → 外国語（書き出し）\n\n**例：** 辞書をJSON文字列に変換しよう！\n\n```python\nimport json\n\ndata = {'name': 'Taro', 'age': 25}\njson_str = json.dumps(data)\nprint(json_str)  # {\"name\": \"Taro\", \"age\": 25}\n```\n\n**何をしているか：**\n1. Pythonの辞書 `{'name': 'Taro', 'age': 25}` を作る\n2. `json.dumps()` でJSON形式の文字列に変換\n3. シングルクォートがダブルクォートに変わる（JSONのルール）\n\n**便利なオプション：**\n- `json.dumps(data, indent=2)`: 見やすく整形\n- `json.dumps(data, ensure_ascii=False)`: 日本語をそのまま表示\n\n**ポイント：** `dumps` の 's' は **String（文字列）** に変換するという意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# JSONモジュールをインポート\nimport json\n\n# 辞書データを定義\ndata = {'language': 'Python', 'level': 'advanced'}\n# PythonオブジェクトをJSON文字列に変換\njson_str = json.dumps(data)\n# JSON文字列を表示\nprint(json_str)",
      "holeyCode": "# JSONモジュールをインポート\nimport ___\n\n# 辞書データを定義\ndata = ___\n# PythonオブジェクトをJSON文字列に変換\njson_str = json.___(data)\n# JSON文字列を表示\nprint(___)",
      "correctLines": [
        "# JSONモジュールをインポート",
        "import json",
        "",
        "# 辞書データを定義",
        "data = {'language': 'Python', 'level': 'advanced'}",
        "# PythonオブジェクトをJSON文字列に変換",
        "json_str = json.dumps(data)",
        "# JSON文字列を表示",
        "print(json_str)"
      ],
      "lineHints": [null, null, null, null, null, null, null, "JSONに変換するメソッドです。", null],
      "candidates": {
        "keywords": ["dumps", "dump", "stringify"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "{\"language\": \"Python\", \"level\": \"advanced\"}\n"
        }
      ]
    },
    {
      "title": "正規表現（search）",
      "description": "正規表現でパターンを検索しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "re.search()",
          "image": "/illustrations/common/split_road.png",
          "content": "# パターンを検索\n\n**正規表現（せいきひょうげん）** とは、文字の **パターン（形）** を表す特別な書き方です。\n\n**たとえ話：** 「3桁の数字」「@が入ったメールアドレス」のような「形」で文字を探せます。\n\n**re.search()（サーチ）** で **文字列の中からパターンに合う部分を探します**。\n\n**よく使う記号：**\n- `\\d` = 数字1文字（0-9）\n- `\\w` = 英数字1文字（a-z, A-Z, 0-9, _）\n- `+` = 1回以上の繰り返し\n- `{3}` = ちょうど3回\n\n**例：** メールアドレスを探そう！\n\n```python\nimport re\n\ntext = 'my email is test@example.com'\nmatch = re.search(r'\\w+@\\w+\\.\\w+', text)\nif match:\n    print(match.group())  # test@example.com\n```\n\n**何をしているか：**\n1. `import re` で正規表現モジュールを読み込む\n2. `re.search(パターン, 文字列)` で検索\n3. 見つかったら `match` オブジェクトが返る\n4. `match.group()` で一致した文字列を取得\n\n**ポイント：** パターンの前に `r` をつけると、`\\` をそのまま使えます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 正規表現モジュールをインポート\nimport re\n\n# 電話番号を含む文字列を定義\ntext = 'Call me at 090-1234-5678'\n# パターンに一致する部分を検索\nmatch = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)\n# 一致した場合\nif match:\n    # 一致した文字列を表示\n    print(match.group())",
      "holeyCode": "# 正規表現モジュールをインポート\nimport ___\n\n# 電話番号を含む文字列を定義\ntext = ___\n# パターンに一致する部分を検索\nmatch = re.___(r'\\d{3}-\\d{4}-\\d{4}', text)\n# 一致した場合\nif ___:\n    # 一致した文字列を表示\n    print(___)",
      "correctLines": [
        "# 正規表現モジュールをインポート",
        "import re",
        "",
        "# 電話番号を含む文字列を定義",
        "text = 'Call me at 090-1234-5678'",
        "# パターンに一致する部分を検索",
        "match = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)",
        "# 一致した場合",
        "if match:",
        "    # 一致した文字列を表示",
        "    print(match.group())"
      ],
      "lineHints": [null, null, null, null, null, null, null, "パターンを検索するメソッドです。", null, null, null],
      "candidates": {
        "keywords": ["search", "match", "find"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": ""
        }
      ]
    },
    {
      "title": "正規表現（findall）",
      "description": "パターンに一致する全ての部分を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "re.findall()",
          "image": "/illustrations/common/crossroad.png",
          "content": "# 全ての一致を取得\n\n**re.findall()（ファインドオール）** で **パターンに一致する全ての部分をリストで取得** できます。\n\n**searchとの違い：**\n- `search`: 最初に見つかった1つだけ\n- `findall`: 全部見つけてリストにする\n\n**たとえ話：** 文章の中から「数字」を全部探し出すイメージです。\n\n**例：** 文章の中の全ての数字を取り出そう！\n\n```python\nimport re\n\ntext = 'I have 3 apples and 5 oranges'\nnumbers = re.findall(r'\\d+', text)\nprint(numbers)  # ['3', '5']\n```\n\n**何をしているか：**\n1. `re.findall(パターン, 文字列)` で全て検索\n2. `\\d+` は「1つ以上の数字」というパターン\n3. 見つかった全ての部分がリストで返ってくる\n4. 見つからない場合は空のリスト `[]` が返る\n\n**ポイント：** `findall` は常にリストを返すので、`if` でチェックしなくてもOK！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 正規表現モジュールをインポート\nimport re\n\n# 複数のメールアドレスを含む文字列を定義\ntext = 'email1@test.com and email2@test.com'\n# パターンに一致する全ての部分をリストで取得\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\n# 取得したメールアドレスのリストを表示\nprint(emails)",
      "holeyCode": "# 正規表現モジュールをインポート\nimport ___\n\n# 複数のメールアドレスを含む文字列を定義\ntext = ___\n# パターンに一致する全ての部分をリストで取得\nemails = re.___(r'\\w+@\\w+\\.\\w+', text)\n# 取得したメールアドレスのリストを表示\nprint(___)",
      "correctLines": [
        "# 正規表現モジュールをインポート",
        "import re",
        "",
        "# 複数のメールアドレスを含む文字列を定義",
        "text = 'email1@test.com and email2@test.com'",
        "# パターンに一致する全ての部分をリストで取得",
        "emails = re.findall(r'\\w+@\\w+\\.\\w+', text)",
        "# 取得したメールアドレスのリストを表示",
        "print(emails)"
      ],
      "lineHints": [null, null, null, null, null, null, null, "全ての一致を取得するメソッドです。", null],
      "candidates": {
        "keywords": ["findall", "finditer", "search"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[]\n"
        }
      ]
    },
    {
      "title": "正規表現（sub）",
      "description": "パターンに一致する部分を置換しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "re.sub()",
          "image": "/illustrations/3d/compose_gear.png",
          "content": "# パターンを置換\n\n**re.sub()（サブスティテュート）** で **パターンに一致する部分を別の文字に置き換え** られます。\n\n**たとえ話：** 文章の中の「犬」を全部「猫」に置き換えるような処理です。\n\n**書き方：** `re.sub(パターン, 置換後, 文字列)`\n\n**例：** 数字を「many」に置き換えよう！\n\n```python\nimport re\n\ntext = 'I have 3 apples'\nresult = re.sub(r'\\d+', 'many', text)\nprint(result)  # I have many apples\n```\n\n**何をしているか：**\n1. `re.sub(パターン, 置換後, 文字列)` で置換\n2. `\\d+`（1つ以上の数字）を `'many'` に置き換え\n3. 全ての一致箇所が置き換わる\n\n**便利な使い方：**\n- 余分な空白を1つにまとめる: `re.sub(r'\\s+', ' ', text)`\n- 数字を消す: `re.sub(r'\\d+', '', text)`\n\n**ポイント：** 元の文字列は変わらず、新しい文字列が返ってきます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 正規表現モジュールをインポート\nimport re\n\n# 複数の空白を含む文字列を定義\ntext = 'Hello   World   Python'\n# パターンに一致する部分を置換\nresult = re.sub(r'\\s+', ' ', text)\n# 置換結果を表示\nprint(result)",
      "holeyCode": "# 正規表現モジュールをインポート\nimport ___\n\n# 複数の空白を含む文字列を定義\ntext = ___\n# パターンに一致する部分を置換\nresult = re.___(r'\\s+', ' ', text)\n# 置換結果を表示\nprint(___)",
      "correctLines": [
        "# 正規表現モジュールをインポート",
        "import re",
        "",
        "# 複数の空白を含む文字列を定義",
        "text = 'Hello   World   Python'",
        "# パターンに一致する部分を置換",
        "result = re.sub(r'\\s+', ' ', text)",
        "# 置換結果を表示",
        "print(result)"
      ],
      "lineHints": [null, null, null, null, null, null, null, "置換するメソッドです。", null],
      "candidates": {
        "keywords": ["sub", "replace", "swap"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello   World   Python\n"
        }
      ]
    },
    {
      "title": "collections.Counter",
      "description": "要素の出現回数をカウントしましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Counterとは？",
          "image": "/illustrations/common/variable_label.png",
          "content": "# 要素を数える\n\n**Counter（カウンター）** を使うと、**要素の出現回数を簡単にカウント** できます。\n\n**たとえ話：** クラスで「好きな果物」アンケートを取って、りんごが何票、バナナが何票...と数えるようなものです。\n\n**例：** 果物の出現回数を数えよう！\n\n```python\nfrom collections import Counter\n\nwords = ['apple', 'banana', 'apple', 'cherry']\ncount = Counter(words)\nprint(count['apple'])  # 2（appleは2回出てきた）\nprint(count['banana']) # 1\n```\n\n**何をしているか：**\n1. `from collections import Counter` でインポート\n2. `Counter(リスト)` でカウント開始\n3. `count['apple']` で「apple」の出現回数を取得\n\n**便利なメソッド：**\n- `count.most_common(3)`: 多い順に3つ取得\n- `count.total()`: 全要素の合計数\n\n**ポイント：** 文字列を渡すと、1文字ずつカウントします！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Counterクラスをインポート\nfrom collections import Counter\n\n# カウント対象の文字列を定義\ntext = 'hello world'\n# 文字の出現回数をカウント\ncount = Counter(text)\n# 最も多い3つを取得して表示\nprint(count.most_common(3))",
      "holeyCode": "# Counterクラスをインポート\nfrom collections import ___\n\n# カウント対象の文字列を定義\ntext = ___\n# 文字の出現回数をカウント\ncount = ___\n# 最も多い3つを取得して表示\nprint(___)",
      "correctLines": [
        "# Counterクラスをインポート",
        "from collections import Counter",
        "",
        "# カウント対象の文字列を定義",
        "text = 'hello world'",
        "# 文字の出現回数をカウント",
        "count = Counter(text)",
        "# 最も多い3つを取得して表示",
        "print(count.most_common(3))"
      ],
      "lineHints": [null, "collectionsモジュールから特定の機能（Counter）を読み込みます。", null, null, null, null, null, null, null],
      "candidates": {
        "keywords": ["Counter", "Count", "Dict"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[('l', 3), ('o', 2), ('h', 1)]\n"
        }
      ]
    },
    {
      "title": "collections.defaultdict",
      "description": "デフォルト値を持つ辞書を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "defaultdictとは？",
          "image": "/illustrations/common/box_container_open.png",
          "content": "# デフォルト値を持つ辞書\n\n**defaultdict（デフォルトディクト）** を使うと、**存在しないキーにアクセスしてもエラーにならない** 辞書が作れます。\n\n**普通の辞書の問題：**\n```python\nd = {}\nd['a'] += 1  # エラー！キー'a'が存在しない\n```\n\n**defaultdictなら：**\n```python\nd = defaultdict(int)\nd['a'] += 1  # OK！自動で 0 が入る\n```\n\n**たとえ話：** 出席簿のようなもの。名前が書いてなくても、自動で新しい欄が作られます。\n\n**デフォルト値の種類：**\n- `defaultdict(int)`: 数値 `0` がデフォルト\n- `defaultdict(list)`: 空のリスト `[]` がデフォルト\n- `defaultdict(str)`: 空の文字列 `''` がデフォルト\n\n**何をしているか：**\n1. `defaultdict(型)` でデフォルト値の型を指定\n2. 存在しないキーにアクセスすると自動でデフォルト値が入る\n3. その後は普通の辞書と同じように使える\n\n**ポイント：** キーの存在確認が不要になり、コードがシンプルになります！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# defaultdictクラスをインポート\nfrom collections import defaultdict\n\n# デフォルト値としてリストを生成する辞書を作成\nd = defaultdict(list)\n# fruitsキーにappleを追加\nd['fruits'].append('apple')\n# fruitsキーにbananaを追加\nd['fruits'].append('banana')\n# fruitsキーの値を表示\nprint(d['fruits'])",
      "holeyCode": "# defaultdictクラスをインポート\nfrom collections import ___\n\n# デフォルト値としてリストを生成する辞書を作成\nd = ___\n# fruitsキーにappleを追加\n___\n# fruitsキーにbananaを追加\n___\n# fruitsキーの値を表示\nprint(___)",
      "correctLines": [
        "# defaultdictクラスをインポート",
        "from collections import defaultdict",
        "",
        "# デフォルト値としてリストを生成する辞書を作成",
        "d = defaultdict(list)",
        "# fruitsキーにappleを追加",
        "d['fruits'].append('apple')",
        "# fruitsキーにbananaを追加",
        "d['fruits'].append('banana')",
        "# fruitsキーの値を表示",
        "print(d['fruits'])"
      ],
      "lineHints": [null, "collectionsモジュールから特定の機能（defaultdict）を読み込みます。", null, null, null, null, null, null, null, null, null],
      "candidates": {
        "keywords": ["defaultdict", "dict", "OrderedDict"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "['apple', 'banana']\n"
        }
      ]
    },
    {
      "title": "itertools.chain",
      "description": "複数のイテラブルを連結しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "itertools.chain()",
          "image": "/illustrations/common/loop_gears.png",
          "content": "# イテラブルを連結\n\n**chain()（チェーン）** を使うと、**複数のリストやイテラブルを1つにつなげて** 処理できます。\n\n**たとえ話：** 電車の連結のようなもの。複数の車両（リスト）をつなげて1つの長い電車にします。\n\n**リストの `+` との違い：**\n- `a + b`: 新しいリストを作る（メモリを使う）\n- `chain(a, b)`: つなげて順番に取り出す（メモリに優しい）\n\n**例：** 2つのリストをつなげてループしよう！\n\n```python\nfrom itertools import chain\n\na = [1, 2, 3]\nb = [4, 5, 6]\nfor x in chain(a, b):\n    print(x)  # 1 2 3 4 5 6 の順に出力\n```\n\n**何をしているか：**\n1. `from itertools import chain` でインポート\n2. `chain(a, b)` で2つのリストを連結\n3. `for` ループで1つずつ取り出せる\n4. `list(chain(a, b))` でリストに変換も可能\n\n**ポイント：** 3つ以上も連結可能！ `chain(a, b, c, d, ...)` のように書けます。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# chain関数をインポート\nfrom itertools import chain\n\n# 1つ目のリストを定義\nlist1 = [1, 2, 3]\n# 2つ目のリストを定義\nlist2 = [4, 5, 6]\n# 2つのリストを連結してリストに変換\nresult = list(chain(list1, list2))\n# 連結結果を表示\nprint(result)",
      "holeyCode": "# chain関数をインポート\nfrom itertools import ___\n\n# 1つ目のリストを定義\nlist1 = ___\n# 2つ目のリストを定義\nlist2 = ___\n# 2つのリストを連結してリストに変換\nresult = ___\n# 連結結果を表示\nprint(___)",
      "correctLines": [
        "# chain関数をインポート",
        "from itertools import chain",
        "",
        "# 1つ目のリストを定義",
        "list1 = [1, 2, 3]",
        "# 2つ目のリストを定義",
        "list2 = [4, 5, 6]",
        "# 2つのリストを連結してリストに変換",
        "result = list(chain(list1, list2))",
        "# 連結結果を表示",
        "print(result)"
      ],
      "lineHints": [null, "itertoolsモジュールから特定の機能（chain）を読み込みます。", null, null, null, null, null, null, null, null, null],
      "candidates": {
        "keywords": ["chain", "concat", "merge"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 2, 3, 4, 5, 6]\n"
        }
      ]
    }
  ]
};
