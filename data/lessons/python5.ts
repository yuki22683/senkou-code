export const pythonData5 = {
  "language": "python",
  "lessonId": "python-5",
  "lessonTitle": "Python V - ファイルとデータ処理",
  "lessonDescription": "Pythonでファイル操作とデータ処理を学びます。ファイルの読み書き、JSON、正規表現などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "tutorialSlides": [
    {
      "title": "ファイルの読み書き",
      "content": "Pythonでファイルを開くときは `with open()` を使うのが安全です。\\n\\n```python\\nwith open(\"data.txt\", \"r\") as f:\\n    content = f.read()\\n```\\n\\n`\"r\"` は読み込み、`\"w\"` は上書き、`\"a\"` は追記モードです。"
    },
    {
      "title": "JSONデータの扱い",
      "content": "Webなどでよく使われるJSON形式のデータは、`json` モジュールを使って簡単にPythonの辞書に変換できます。\\n\\n```python\\nimport json\\ndata = json.loads('{\"name\": \"Python\"}')\\n```"
    },
    {
      "title": "正規表現（せいきひょうげん）",
      "content": "文字列のパターンを探すには**正規表現**を使います。\\n\\n- `\\d` : 数字\\n- `+` : 1回以上の繰り返し\\n- `[a-z]` : 小文字のアルファベット"
    }
  ],
  "exercises": [
    {
      "title": "ファイルを開く（with文）",
      "correctCode": "# ファイル名を変数に保存\\nfilename = 'テスト.txt'\\n# 書き込みモードでファイルを開く\\nwith open(filename, 'w') as f:\\n    # テキストを書き込む\\n    f.write('こんにちは, Python!')\\n\\n# 読み込みモードでファイルを開く\\nwith open(filename, 'r') as f:\\n    # 内容を読み込んで表示\\n    print(f.read())",
      "holeyCode": "# ファイル名を変数に保存\\n___ = 'テスト.txt'\\n# 書き込みモードでファイルを開く\\nwith ___(filename, 'w') as ___:\\n    # テキストを書き込む\\n    f.write('こんにちは, ___!')\\n\\n# 読み込みモードでファイルを開く\\nwith ___(filename, 'r') as f:\\n    # 内容を読み込んで表示\\n    ___(f.read())",
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
          "変数名 filename を入力します。",
          null,
          "open 関数とファイルオブジェクト変数 f を入力します。",
          null,
          "書き込む文字列 'Python' を指定します。",
          null,
          null,
          "ファイルを開く open 関数を入力します。",
          null,
          "内容を表示する print 関数を入力します。"
        ],
        "candidates": {
          "functions": ["open", "print"],
          "others": ["filename", "f", "Python"]
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
      "holeyCode": "# jsonモジュールをimportする\\nimport ___\\n\\n# JSON文字列を用意\\n___ = '{\"名前\": \"Python\", \"version\": 3.12}'\\n# 辞書に変換\\ndata = json.___(___)\\n# 名前を表示\\n___(data['名前'])",
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
          "モジュール名 json を入力します。",
          null,
          null,
          "変数名 json_str を指定します。",
          null,
          "文字列から変換する loads メソッドと、対象の json_str を入力します。",
          null,
          "表示のための print 関数を入力します。"
        ],
        "candidates": {
          "keywords": ["json", "loads"],
          "others": ["json_str", "print"]
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
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# 電話番号を含むテキスト\\ntext = 'Call me at ___'\\n# 3桁-4桁-4桁の数字パターンを検索\\n___ = re.___(___, text)\\n# 見つかった場合\\nif ___:\\n    # 見つかった電話番号を表示\\n    ___(___.group())",
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
          "不足している番号 '090-1234-5678' を入力します。",
          null,
          "変数 match 、検索メソッド search 、パターン文字列 r'\\d{3}-\\d{4}-\\d{4}' を入力します。",
          null,
          "変数 match を指定します。",
          null,
          "表示のための print 関数と、変数 match を指定します。"
        ],
      "candidates": {
        "keywords": ["re", "search"],
        "variables": ["match"],
        "others": ["r'\\d{3}-\\d{4}-\\d{4}'", "print", "090-1234-5678"]
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
      "holeyCode": "# Counterクラスをインポート\\nfrom ___ import ___\\n\\n# テキストを用意\\ntext = 'hello ___'\\n# 文字をカウント\\ncount = ___(text)\\n# 出現回数が多い順に3つ表示\\n___(count.___(___))",
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
          "不足している単語 'world' を入力します。",
          null,
          "クラス名 Counter を指定します。",
          null,
          "表示のための print 関数、取得のための most_common メソッド、引数の 3 を入力します。"
        ],
        "candidates": {
          "keywords": ["collections", "Counter"],
          "others": ["world", "print", "most_common", "3"]
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