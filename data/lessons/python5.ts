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
          "image": "/illustrations/3d/robot.png",
          "content": "# 安全にファイルを扱う\n\n**with文**を使うと、ファイルが自動的に閉じられます。\n\n```python\nwith open('file.txt', 'r') as f:\n    content = f.read()\n    print(content)\n# ファイルは自動で閉じられる\n```"
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
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "open関数を使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "image": "/illustrations/3d/robot.png",
          "content": "# forループでファイルを読む\n\nファイルオブジェクトはイテレータなので、forループで1行ずつ読めます。\n\n```python\nwith open('file.txt', 'r') as f:\n    for line in f:\n        print(line.strip())\n```"
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
        null,
        "inキーワードを使います。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["in", "from", "of"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "line1\nline2\nline3\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# JSON文字列をPythonに変換\n\n**json.loads()**でJSON文字列を辞書やリストに変換できます。\n\n```python\nimport json\n\ndata = json.loads('{\"name\": \"Taro\", \"age\": 25}')\nprint(data['name'])  # Taro\n```"
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
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "JSON文字列を読み込むメソッドです。",
        null,
        null
      ],
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
          "image": "/illustrations/3d/robot.png",
          "content": "# PythonをJSONに変換\n\n**json.dumps()**でPythonのデータをJSON文字列に変換できます。\n\n```python\nimport json\n\ndata = {'name': 'Taro', 'age': 25}\njson_str = json.dumps(data)\nprint(json_str)  # {\"name\": \"Taro\", \"age\": 25}\n```"
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
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "JSONに変換するメソッドです。",
        null,
        null
      ],
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
          "image": "/illustrations/3d/robot.png",
          "content": "# パターンを検索\n\n**re.search()**で文字列内のパターンを検索できます。\n\n```python\nimport re\n\ntext = 'my email is test@example.com'\nmatch = re.search(r'\\w+@\\w+\\.\\w+', text)\nif match:\n    print(match.group())  # test@example.com\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 正規表現モジュールをインポート\nimport re\n\n# 電話番号を含む文字列を定義\ntext = 'Call me at 090-1234-5678'\n# パターンに一致する部分を検索\nmatch = re.search(r'\d{3}-\d{4}-\d{4}', text)\n# 一致した場合\nif match:\n    # 一致した文字列を表示\n    print(match.group())",
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
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "パターンを検索するメソッドです。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["search", "match", "find"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "090-1234-5678\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 全ての一致を取得\n\n**re.findall()**でパターンに一致する全ての部分をリストで取得できます。\n\n```python\nimport re\n\ntext = 'I have 3 apples and 5 oranges'\nnumbers = re.findall(r'\\d+', text)\nprint(numbers)  # ['3', '5']\n```"
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
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "全ての一致を取得するメソッドです。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["findall", "finditer", "search"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "['email1@test.com', 'email2@test.com']\n"
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
          "image": "/illustrations/3d/gear.png",
          "content": "# パターンを置換\n\n**re.sub()**でパターンに一致する部分を置換できます。\n\n```python\nimport re\n\ntext = 'I have 3 apples'\nresult = re.sub(r'\\d+', 'many', text)\nprint(result)  # I have many apples\n```"
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
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "置換するメソッドです。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["sub", "replace", "swap"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello World Python\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 要素を数える\n\n**Counter**を使うと、要素の出現回数を簡単にカウントできます。\n\n```python\nfrom collections import Counter\n\nwords = ['apple', 'banana', 'apple', 'cherry']\ncount = Counter(words)\nprint(count['apple'])  # 2\n```"
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
      "lineHints": [
        null,
        "Counterをインポートします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "image": "/illustrations/3d/robot.png",
          "content": "# デフォルト値を持つ辞書\n\n**defaultdict**を使うと、存在しないキーにアクセスしてもエラーになりません。\n\n```python\nfrom collections import defaultdict\n\nd = defaultdict(int)\nd['a'] += 1\nprint(d['a'])  # 1\nprint(d['b'])  # 0（デフォルト値）\n```"
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
      "lineHints": [
        null,
        "defaultdictをインポートします。",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# イテラブルを連結\n\n**chain()**を使うと、複数のイテラブルを1つに連結できます。\n\n```python\nfrom itertools import chain\n\na = [1, 2, 3]\nb = [4, 5, 6]\nfor x in chain(a, b):\n    print(x)  # 1 2 3 4 5 6\n```"
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
      "lineHints": [
        null,
        "chainをインポートします。",
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
