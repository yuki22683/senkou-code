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
      "content": "**Counter** で**要素の出現回数**を簡単にカウントできます。\\n\\n```python\\nfrom collections import Counter\\n\\nwords = ['apple', 'banana', 'apple']\\ncount = Counter(words)\\nprint(count['apple'])  # 2\\n\\n# 多い順に取得\\nprint(count.most_common(2))\\n# [('apple', 2), ('banana', 1)]\\n```\\n\\n文字列を渡すと1文字ずつカウントします。"
    }
  ],
  "exercises": [
    {
      "title": "ファイルを開く（with文）",
      "correctCode": "# ファイル名を変数に保存\\nfilename = 'テスト.txt'\\n# 書き込みモードでファイルを開く\\nwith open(filename, 'w') as f:\\n    # テキストを書き込む\\n    f.write('こんにちは, Python!')\\n\\n# 読み込みモードでファイルを開く\\nwith open(filename, 'r') as f:\\n    # 内容を読み込んで表示\\n    print(f.read())",
      "holeyCode": "# ファイル名を変数に保存\\n___ = '___'\\n# 書き込みモードでファイルを開く\\nwith ___(___,  '___') as ___:\\n    # テキストを書き込む\\n    ___.___('___')\\n\\n# 読み込みモードでファイルを開く\\nwith ___(___, '___') as ___:\\n    # 内容を読み込んで表示\\n    ___(___.___())",
      "correctLines": [
          "# ファイル名を変数に保存",
          "filename = 'テスト.txt'",
          "# 書き込みモードでファイルを開く",
          "with open(filename, 'w') as f:",
          "    # テキストを書き込む",
          "    f.write('こんにちは, Python!')",
          "",
          "# 読み込みモードでファイルを開く",
          "with open(filename, 'r') as f:",
          "    # 内容を読み込んで表示",
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
      "correctCode": "# jsonモジュールをimportする\\nimport json\\n\\n# JSON文字列を用意\\njson_str = '{\"名前\": \"Python\", \"version\": 3.12}'\\n# 辞書に変換\\ndata = json.loads(json_str)\\n# 名前を表示\\nprint(data['名前'])",
      "holeyCode": "# jsonモジュールをimportする\\nimport ___\\n\\n# JSON文字列を用意\\n___ = '___'\\n# 辞書に変換\\n___ = ___.___(___)\\n# 名前を表示\\n___(___['___'])",
      "correctLines": [
          "# jsonモジュールをimportする",
          "import json",
          "",
          "# JSON文字列を用意",
          "json_str = '{\"名前\": \"Python\", \"version\": 3.12}'",
          "# 辞書に変換",
          "data = json.loads(json_str)",
          "# 名前を表示",
          "print(data['名前'])"
        ],
      "lineHints": [
          null,
          "JSON形式のデータを扱うためのモジュールです。",
          null,
          null,
          "変数名json_strと、JSON形式の文字列を指定します。",
          null,
          "結果を格納する変数data、jsonモジュール、loadsメソッド、変数json_strを指定します。",
          null,
          "print関数、変数data、キー'名前'を指定します。"
        ],
        "candidates": {
          "keywords": ["json", "loads"],
          "others": ["json_str", "print", "data", "{\"名前\": \"Python\", \"version\": 3.12}", "名前"]
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
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# 電話番号を含むテキスト\\ntext = 'Call me at 090-1234-5678'\\n# 3桁-4桁-4桁の数字パターンを検索\\nmatch = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)\\n# 見つかった場合\\nif match:\\n    # 見つかった電話番号を表示\\n    print(match.group())",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# 電話番号を含むテキスト\\n___ = '___'\\n# 3桁-4桁-4桁の数字パターンを検索\\n___ = ___.___(___, ___)\\n# 見つかった場合\\nif ___:\\n    # 見つかった電話番号を表示\\n    ___(___.___())",
      "correctLines": [
          "# 正規表現モジュールをインポート",
          "import re",
          "",
          "# 電話番号を含むテキスト",
          "text = 'Call me at 090-1234-5678'",
          "# 3桁-4桁-4桁の数字パターンを検索",
          "match = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)",
          "# 見つかった場合",
          "if match:",
          "    # 見つかった電話番号を表示",
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
      "correctCode": "# Counterクラスをインポート\\nfrom collections import Counter\\n\\n# テキストを用意\\ntext = 'hello world'\\n# 文字をカウント\\ncount = Counter(text)\\n# 出現回数が多い順に3つ表示\\nprint(count.most_common(3))",
      "holeyCode": "# Counterクラスをインポート\\nfrom ___ import ___\\n\\n# テキストを用意\\n___ = '___'\\n# 文字をカウント\\n___ = ___(___) \\n# 出現回数が多い順に3つ表示\\n___(___.___(___))",
      "correctLines": [
          "# Counterクラスをインポート",
          "from collections import Counter",
          "",
          "# テキストを用意",
          "text = 'hello world'",
          "# 文字をカウント",
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
      }
  ]
};