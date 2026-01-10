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
      "correctCode": "# 'test.txt' と入力してファイル名を定義\nfilename = 'test.txt'\n# open と入力してファイルを開く\nwith open(filename, 'w') as f:\n    # f.write('Hello, Python!') と入力\n    f.write('Hello, Python!')\n\n# open(filename, 'r') と入力\nwith open(filename, 'r') as f:\n    # f.read() と入力\n    print(f.read())",
      "holeyCode": "# ファイルを読み込む（テスト用）\n# 'test.txt' と入力\nfilename = ___\n# open関数でファイルを開く\n# open と入力\nwith ___(filename, 'w') as f:\n    # f.write('Hello, Python!') と入力\n    ___\n\n# open(filename, 'r') と入力\nwith ___ as f:\n    # f.read() と入力\n    print(___)",
      "correctLines": [
        "# ファイルを読み込む（テスト用）",
        "# 'test.txt' と入力",
        "filename = 'test.txt'",
        "# open関数でファイルを開く",
        "# open と入力",
        "with open(filename, 'w') as f:",
        "    # f.write('Hello, Python!') と入力",
        "    f.write('Hello, Python!')",
        "",
        "# open(filename, 'r') と入力",
        "with open(filename, 'r') as f:",
        "    # f.read() と入力",
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
      "correctCode": "# ファイルを1行ずつ読む\n# open('test.txt', 'w') と入力\nwith open('test.txt', 'w') as f:\n    # f.write('line1\\\\nline2\\\\nline3') と入力\n    f.write('line1\\nline2\\nline3')\n\n# open('test.txt', 'r') と入力\nwith open('test.txt', 'r') as f:\n    # in と入力してファイルをループ\n    for line in f:\n        # line.strip() と入力\n        print(line.strip())",
      "holeyCode": "# ファイルを1行ずつ読む\n# open('test.txt', 'w') と入力\nwith ___ as f:\n    # f.write('line1\\\\nline2\\\\nline3') と入力\n    ___\n\n# open('test.txt', 'r') と入力\nwith ___ as f:\n    # inでファイルをループ\n    # in と入力\n    for line ___ f:\n        # line.strip() と入力\n        print(___)",
      "correctLines": [
        "# ファイルを1行ずつ読む",
        "# open('test.txt', 'w') と入力",
        "with open('test.txt', 'w') as f:",
        "    # f.write('line1\\\\nline2\\\\nline3') と入力",
        "    f.write('line1\\nline2\\nline3')",
        "",
        "# open('test.txt', 'r') と入力",
        "with open('test.txt', 'r') as f:",
        "    # inでファイルをループ",
        "    # in と入力",
        "    for line in f:",
        "        # line.strip() と入力",
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
      "correctCode": "# json と入力\nimport json\n\n# '{\"name\": \"Python\", \"version\": 3.12}' と入力\njson_str = '{\"name\": \"Python\", \"version\": 3.12}'\n# loads と入力してJSON文字列を変換\ndata = json.loads(json_str)\n# data['name'] と入力\nprint(data['name'])",
      "holeyCode": "# json と入力\nimport ___\n\n# '{\"name\": \"Python\", \"version\": 3.12}' と入力\njson_str = ___\n# loadsでJSON文字列を変換\n# loads と入力\ndata = json.___(json_str)\n# data['name'] と入力\nprint(___)",
      "correctLines": [
        "# json と入力",
        "import json",
        "",
        "# '{\"name\": \"Python\", \"version\": 3.12}' と入力",
        "json_str = '{\"name\": \"Python\", \"version\": 3.12}'",
        "# loadsでJSON文字列を変換",
        "# loads と入力",
        "data = json.loads(json_str)",
        "# data['name'] と入力",
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
      "correctCode": "# json と入力\nimport json\n\n# {'language': 'Python', 'level': 'advanced'} と入力\ndata = {'language': 'Python', 'level': 'advanced'}\n# dumps と入力してJSON文字列に変換\njson_str = json.dumps(data)\n# json_str と入力\nprint(json_str)",
      "holeyCode": "# json と入力\nimport ___\n\n# {'language': 'Python', 'level': 'advanced'} と入力\ndata = ___\n# dumpsでJSON文字列に変換\n# dumps と入力\njson_str = json.___(data)\n# json_str と入力\nprint(___)",
      "correctLines": [
        "# json と入力",
        "import json",
        "",
        "# {'language': 'Python', 'level': 'advanced'} と入力",
        "data = {'language': 'Python', 'level': 'advanced'}",
        "# dumpsでJSON文字列に変換",
        "# dumps と入力",
        "json_str = json.dumps(data)",
        "# json_str と入力",
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
      "correctCode": "# re と入力\nimport re\n\n# 'Call me at 090-1234-5678' と入力\ntext = 'Call me at 090-1234-5678'\n# search と入力してパターン検索\nmatch = re.search(r'\d{3}-\d{4}-\d{4}', text)\n# match と入力\nif match:\n    # match.group() と入力\n    print(match.group())",
      "holeyCode": "# re と入力\nimport ___\n\n# 'Call me at 090-1234-5678' と入力\ntext = ___\n# searchでパターン検索\n# search と入力\nmatch = re.___(r'\\d{3}-\\d{4}-\\d{4}', text)\n# match と入力\nif ___:\n    # match.group() と入力\n    print(___)",
      "correctLines": [
        "# re と入力",
        "import re",
        "",
        "# 'Call me at 090-1234-5678' と入力",
        "text = 'Call me at 090-1234-5678'",
        "# searchでパターン検索",
        "# search と入力",
        "match = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)",
        "# match と入力",
        "if match:",
        "    # match.group() と入力",
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
      "correctCode": "# re と入力\nimport re\n\n# 'email1@test.com and email2@test.com' と入力\ntext = 'email1@test.com and email2@test.com'\n# findall と入力して全ての一致を取得\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\n# emails と入力\nprint(emails)",
      "holeyCode": "# re と入力\nimport ___\n\n# 'email1@test.com and email2@test.com' と入力\ntext = ___\n# findallで全ての一致を取得\n# findall と入力\nemails = re.___(r'\\w+@\\w+\\.\\w+', text)\n# emails と入力\nprint(___)",
      "correctLines": [
        "# re と入力",
        "import re",
        "",
        "# 'email1@test.com and email2@test.com' と入力",
        "text = 'email1@test.com and email2@test.com'",
        "# findallで全ての一致を取得",
        "# findall と入力",
        "emails = re.findall(r'\\w+@\\w+\\.\\w+', text)",
        "# emails と入力",
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
      "correctCode": "# re と入力\nimport re\n\n# 'Hello   World   Python' と入力\ntext = 'Hello   World   Python'\n# sub と入力してパターンを置換\nresult = re.sub(r'\\s+', ' ', text)\n# result と入力\nprint(result)",
      "holeyCode": "# re と入力\nimport ___\n\n# 'Hello   World   Python' と入力\ntext = ___\n# subでパターンを置換\n# sub と入力\nresult = re.___(r'\\s+', ' ', text)\n# result と入力\nprint(___)",
      "correctLines": [
        "# re と入力",
        "import re",
        "",
        "# 'Hello   World   Python' と入力",
        "text = 'Hello   World   Python'",
        "# subでパターンを置換",
        "# sub と入力",
        "result = re.sub(r'\\s+', ' ', text)",
        "# result と入力",
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
      "correctCode": "# Counter と入力\nfrom collections import Counter\n\n# 'hello world' と入力\ntext = 'hello world'\n# Counter(text) と入力\ncount = Counter(text)\n# count.most_common(3) と入力\nprint(count.most_common(3))",
      "holeyCode": "# Counter と入力\nfrom collections import ___\n\n# 'hello world' と入力\ntext = ___\n# Counter(text) と入力\ncount = ___\n# count.most_common(3) と入力\nprint(___)",
      "correctLines": [
        "# Counter と入力",
        "from collections import Counter",
        "",
        "# 'hello world' と入力",
        "text = 'hello world'",
        "# Counter(text) と入力",
        "count = Counter(text)",
        "# count.most_common(3) と入力",
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
      "correctCode": "# defaultdict と入力\nfrom collections import defaultdict\n\n# defaultdict(list) と入力\nd = defaultdict(list)\n# d['fruits'].append('apple') と入力\nd['fruits'].append('apple')\n# d['fruits'].append('banana') と入力\nd['fruits'].append('banana')\n# d['fruits'] と入力\nprint(d['fruits'])",
      "holeyCode": "# defaultdict と入力\nfrom collections import ___\n\n# defaultdict(list) と入力\nd = ___\n# d['fruits'].append('apple') と入力\n___\n# d['fruits'].append('banana') と入力\n___\n# d['fruits'] と入力\nprint(___)",
      "correctLines": [
        "# defaultdict と入力",
        "from collections import defaultdict",
        "",
        "# defaultdict(list) と入力",
        "d = defaultdict(list)",
        "# d['fruits'].append('apple') と入力",
        "d['fruits'].append('apple')",
        "# d['fruits'].append('banana') と入力",
        "d['fruits'].append('banana')",
        "# d['fruits'] と入力",
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
      "correctCode": "# chain と入力\nfrom itertools import chain\n\n# [1, 2, 3] と入力\nlist1 = [1, 2, 3]\n# [4, 5, 6] と入力\nlist2 = [4, 5, 6]\n# list(chain(list1, list2)) と入力\nresult = list(chain(list1, list2))\n# result と入力\nprint(result)",
      "holeyCode": "# chain と入力\nfrom itertools import ___\n\n# [1, 2, 3] と入力\nlist1 = ___\n# [4, 5, 6] と入力\nlist2 = ___\n# list(chain(list1, list2)) と入力\nresult = ___\n# result と入力\nprint(___)",
      "correctLines": [
        "# chain と入力",
        "from itertools import chain",
        "",
        "# [1, 2, 3] と入力",
        "list1 = [1, 2, 3]",
        "# [4, 5, 6] と入力",
        "list2 = [4, 5, 6]",
        "# list(chain(list1, list2)) と入力",
        "result = list(chain(list1, list2))",
        "# result と入力",
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
