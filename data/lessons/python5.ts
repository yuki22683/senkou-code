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
      "correctCode": "# ファイルを読み込む（テスト用）\nfilename = 'test.txt'\n# open関数でファイルを開く\nwith open(filename, 'w') as f:\n    f.write('Hello, Python!')\n\nwith open(filename, 'r') as f:\n    print(f.read())",
      "holeyCode": "# ファイルを読み込む（テスト用）\n___\n# open と入力してファイルを開いてね\n___\n    ___\n\n___\n    ___",
      "correctLines": [
        
        
        "# ファイルを読み込む（テスト用）",
        "filename = 'test.txt'",
        "# open と入力してファイルを開いてね",
        "with open(filename, 'w') as f:",
        "    f.write('Hello, Python!')",
        "",
        "with open(filename, 'r') as f:",
        "    print(f.read())"
      ],
      "lineHints": [
        null,
        null,
        null,
        "open関数を使います。",
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
      "correctCode": "# ファイルを1行ずつ読む\nwith open('test.txt', 'w') as f:\n    f.write('line1\\nline2\\nline3')\n\nwith open('test.txt', 'r') as f:\n    # inでファイルをループ\n    for line in f:\n        print(line.strip())",
      "holeyCode": "# ファイルを1行ずつ読む\n___\n    ___\n\n___\n    # in と入力して1行ずつ取り出しましょう\n    ___\n        ___",
      "correctLines": [
        
        
        "# ファイルを1行ずつ読む",
        "with open('test.txt', 'w') as f:",
        "    f.write('line1\\\nline2\\\nline3')",
        "",
        "with open('test.txt', 'r') as f:",
        "    # in と入力して1行ずつ取り出しましょう",
        "    for line in f:",
        "        print(line.strip())"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "inキーワードを使います。",
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
      "correctCode": "import json\n\njson_str = '{\"name\": \"Python\", \"version\": 3.12}'\n# loadsでJSON文字列を変換\ndata = json.loads(json_str)\nprint(data['name'])",
      "holeyCode": "___\n___"name\": \"Python\", \"version\": 3.12}'\n# 変数 loads を使いましょう\ndata = json.___(json_str)\nprint(data['name'])",
      "correctLines": [
        "import json",\n        "",\n        "json_str = '{"name": "Python\\",
        ""version": 3.12}'",\n        "# 変数 loads を使いましょう",\n        "data = json.loads(json_str)",\n        "print(data['name'"
      ])"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "JSON文字列を読み込むメソッドです。",
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
      "correctCode": "import json\n\ndata = {'language': 'Python', 'level': 'advanced'}\n# dumpsでJSON文字列に変換\njson_str = json.dumps(data)\nprint(json_str)",
      "holeyCode": "___\n\n___\n# 変数 dumps を使いましょう\n___\n___",
      "correctLines": [
        
        
        "import json",
        "",
        "data = {'language': 'Python', 'level': 'advanced'}",
        "# 変数 dumps を使いましょう",
        "json_str = json.dumps(data)",
        "print(json_str)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "JSONに変換するメソッドです。",
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
      "correctCode": "import re\n\ntext = 'Call me at 090-1234-5678'\n# searchでパターン検索\nmatch = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)\nif match:\n    print(match.group())",
      "holeyCode": "___\n\n___\n# 変数 search を使いましょう\n___\n___\n    ___",
      "correctLines": [
        
        
        "import re",
        "",
        "text = 'Call me at 090-1234-5678'",
        "# 変数 search を使いましょう",
        "match = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)",
        "if match:",
        "    print(match.group())"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "パターンを検索するメソッドです。",
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
      "correctCode": "import re\n\ntext = 'email1@test.com and email2@test.com'\n# findallで全ての一致を取得\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\nprint(emails)",
      "holeyCode": "___\n\n___\n# 変数 findall を使いましょう\n___\n___",
      "correctLines": [
        
        
        "import re",
        "",
        "text = 'email1@test.com and email2@test.com'",
        "# 変数 findall を使いましょう",
        "emails = re.findall(r'\\w+@\\w+\\.\\w+', text)",
        "print(emails)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "全ての一致を取得するメソッドです。",
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
      "correctCode": "import re\n\ntext = 'Hello   World   Python'\n# subでパターンを置換\nresult = re.sub(r'\\s+', ' ', text)\nprint(result)",
      "holeyCode": "___\n\n___\n# 変数 sub を使いましょう\n___\n___",
      "correctLines": [
        
        
        "import re",
        "",
        "text = 'Hello   World   Python'",
        "# 変数 sub を使いましょう",
        "result = re.sub(r'\\s+', ' ', text)",
        "print(result)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "置換するメソッドです。",
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
      "correctCode": "from collections import Counter\n\ntext = 'hello world'\ncount = Counter(text)\nprint(count.most_common(3))",
      "holeyCode": "___\n\n___\n# 変数 Counter を使いましょう\n___\n___",
      "correctLines": [
        
        
        "from collections import Counter",
        "",
        "text = 'hello world'",
        "# 変数 Counter を使いましょう",
        "count = Counter(text)",
        "print(count.most_common(3))"
      ],
      "lineHints": [
        "Counterをインポートします。",
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
      "correctCode": "from collections import defaultdict\n\nd = defaultdict(list)\nd['fruits'].append('apple')\nd['fruits'].append('banana')\nprint(d['fruits'])",
      "holeyCode": "___",
      "correctLines": [
        ""from collections import defaultdict",\n        "",\n        "# 変数 defaultdict を使いましょう",\n        "d = defaultdict(list)",\n        "d['fruits'"
      ].append('apple')",
        "d['fruits'].append('banana')",
        "print(d['fruits'])"
      ],
      "lineHints": [
        "defaultdictをインポートします。",
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
      "correctCode": "from itertools import chain\n\nlist1 = [1, 2, 3]\nlist2 = [4, 5, 6]\nresult = list(chain(list1, list2))\nprint(result)",
      "holeyCode": "___\n___\n___",
      "correctLines": [
        ""from itertools import chain",\n        "",\n        "list1 = [1",
        "2",
        "3"
      ]",
        "list2 = [4, 5, 6]",
        "# 変数 chain を使いましょう",
        "result = list(chain(list1, list2))",
        "print(result)"
      ],
      "lineHints": [
        "chainをインポートします。",
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
