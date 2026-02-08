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
      "correctCode": "# ファイル名を変数に保存\\nfilename = 'テスト.txt'\\n# 書き込みモードでファイルを開く（変数f）\\nwith open(filename, 'w') as f:\\n    # ファイルにテキストを書き込む\\n    f.write('こんにちは, Python!')\\n\\n# 読み込みモードでファイルを開く（変数f）\\nwith open(filename, 'r') as f:\\n    # ファイルの内容を読み込んで表示\\n    print(f.read())",
      "holeyCode": "# ファイル名を変数に保存\\nfilename = 'テスト.___'\\n# 書き込みモードでファイルを開く（変数f）\\nwith open(filename, 'w') as ___:\\n    # ファイルにテキストを書き込む\\n    f.write('こんにちは, ___!')\\n___\\n# 読み込みモードでファイルを開く（変数f）\\nwith open(filename, 'r') as ___:\\n    # ファイルの内容を読み込んで表示\\n    ___(f.read())",
      "correctLines": [
          "# ファイル名を変数に保存",
          "filename = 'テスト.txt'",
          "# 書き込みモードでファイルを開く（変数f）",
          "with open(filename, 'w') as f:",
          "    # ファイルにテキストを書き込む",
          "    f.write('こんにちは, Python!')",
          "",
          "# 読み込みモードでファイルを開く（変数f）",
          "with open(filename, 'r') as f:",
          "    # ファイルの内容を読み込んで表示",
          "    print(f.read())"
        ],
      "lineHints": [
          null,
          "open関数を使います。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "open",
            "file",
            "read"
          ],
          "others": ["'test.txt'", "f.write('Hello, Python!')", "open(filename, 'r')", "f.read(", "txt", "f", "Python", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Python!\\n"
          }
        ]
      },
    {
      "title": "ファイルを1行ずつ読む",
      "correctCode": "# 書き込みモードでファイルを開く（変数f）\\nwith open('テスト.txt', 'w') as f:\\n    # 'line1\\nline2\\nline3'を書き込む\\n    f.write('line1\\nline2\\nline3')\\n# 読み込みモードでファイルを開く（変数f）\\nwith open('テスト.txt', 'r') as f:\\n    # ファイルオブジェクトfをループ\\n    for line in f:\\n        # line.strip()を表示\\n        print(line.strip())",
      "holeyCode": "# 書き込みモードでファイルを開く（変数f）\\nwith open('テスト.txt', '___') as f:\\n    # 'line1\\n___\\n___'を書き込む\\n    ___.write('line1\\n___\\n___')\\n# 読み込みモードでファイルを開く（変数f）\\nwith open('テスト.txt', '___') as f:\\n    # ファイルオブジェクトfをループ\\n    for line ___ f:\\n        # line.strip()を表示\\n        print(line.___())",
      "correctLines": [
          "# 書き込みモードでファイルを開く（変数f）",
          "with open('テスト.txt', 'w') as f:",
          "    # 'line1",
          "line2",
          "line3'を書き込む",
          "    f.write('line1",
          "line2",
          "line3')",
          "# 読み込みモードでファイルを開く（変数f）",
          "with open('テスト.txt', 'r') as f:",
          "    # ファイルオブジェクトfをループ",
          "    for line in f:",
          "        # line.strip()を表示",
          "        print(line.strip())"
        ],
      "lineHints": [
          null,
          "'w'は書き込みモードを表します。",
          null,
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "strip()は前後の空白を除去します。",
          null,
          "この行を正しく入力してください。",
          null,
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "for"
          ],
          "strings": [
            "w",
            "r"
          ],
          "methods": [
            "strip"
          ],
          "others": ["ip())", "f.write('line1\\nline2\\nline3')", "# 読み込みモードでファイルを開く（変数f）", "open('テスト", "# ファイルオブジェクトfをループ", "for line in f:", "line2", "line3", "f"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "line1\\nline2\\nline3\\n"
          }
        ]
      },
    {
      "title": "JSONを読み込む",
      "correctCode": "# jsonモジュールをimportする\\nimport json\\n\\n# 'で囲んだJSON: {の中に\"キー\": 値をカンマ区切りで並べる（name=\"Python\", version=3.12）\\njson_str = '{\"名前\": \"Python\", \"version\": 3.12}'\\n# json_strをjson.loadsで辞書に変換しdataに代入する\\ndata = json.loads(json_str)\\n# data['名前']をprintで出力する\\nprint(data['名前'])",
      "holeyCode": "# jsonモジュールをimportする\\nimport ___\\n___\\n# 'で囲んだJSON: {の中に\"キー\": 値をカンマ区切りで並べる（name=\"Python\", version=3.12）\\njson_str = ___\\n# json_strをjson.loadsで辞書に変換しdataに代入する\\ndata = json.___(json_str)\\n# data['名前']をprintで出力する\\n___(data['名前'])",
      "correctLines": [
          "# jsonモジュールをimportする",
          "import json",
          "",
          "# 'で囲んだJSON: {の中に\"キー\": 値をカンマ区切りで並べる（name=\"Python\", version=3.12）",
          "json_str = '{\"名前\": \"Python\", \"version\": 3.12}'",
          "# json_strをjson.loadsで辞書に変換しdataに代入する",
          "data = json.loads(json_str)",
          "# data['名前']をprintで出力する",
          "print(data['名前'])"
        ],
      "lineHints": [
          null,
          "JSON処理に必要な標準モジュール名です。",
          null,
          null,
          "'で開始→{→\"キー\":値,\"キー\":値→}→'で終了の構造です。",
          null,
          "loadはファイル用、loadsは文字列(String)用です。",
          null,
          "出力関数printと辞書のキー'名前'を使います。"
        ],
        "candidates": {
          "keywords": [
            "loads",
            "load",
            "parse"
          ],
          "others": ["json", "'{\"name\": \"Python \"version\": 3.12}'", "print", "'{\"名前\": \"Python \"version\": 3.12}'", "json", "", "'{\"名前\": \"Python \"version\": 3.12}'", "'{\"名前\": \"Python \"version\": 3.12}'", "'{\"名前\": \"Python\", \"version\": 3.12}'"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Python\\n"
          }
        ]
      },
    {
      "title": "JSONに変換する",
      "correctCode": "# JSONモジュールをインポート\\nimport json\\n\\n# dataに言語='Python', レベル='上級'の辞書を代入\\ndata = {'言語': 'Python', 'レベル': '上級'}\\n# json.dumps(data)でJSON文字列に変換しjson_strに代入\\njson_str = json.dumps(data)\\n# json_strをprintで出力\\nprint(json_str)",
      "holeyCode": "# JSONモジュールをインポート\\nimport ___\\n___\\n# dataに言語='Python', レベル='上級'の辞書を代入\\ndata = {'言語': 'Python', 'レベル': '___'}\\n# json.dumps(data)でJSON文字列に変換しjson_strに代入\\njson_str = json.dumps(___)\\n# json_strをprintで出力\\n___(json_str)",
      "correctLines": [
          "# JSONモジュールをインポート",
          "import json",
          "",
          "# dataに言語='Python', レベル='上級'の辞書を代入",
          "data = {'言語': 'Python', 'レベル': '上級'}",
          "# json.dumps(data)でJSON文字列に変換しjson_strに代入",
          "json_str = json.dumps(data)",
          "# json_strをprintで出力",
          "print(json_str)"
        ],
      "lineHints": [
          null,
          "JSONに変換するメソッドです。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "dumps",
            "dump",
            "stringify"
          ],
          "others": ["json", "{'言語': 'Python', 'レベル': '上級'}", "json_str", "data", "print", "上級", "json", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{\"言語\": \"Python\", \"レベル\": \"上級\"}\
"
          }
        ]
      },
    {
      "title": "正規表現（search）",
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'Call me at 090-1234-5678'を代入\\ntext = 'Call me at 090-1234-5678'\\n# re.search()でtextから3桁-4桁-4桁パターンを検索しmatchに代入\\nmatch = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)\\n# matchが存在する場合\\nif match:\\n    # match.group()をprintで出力\\n    print(match.group())",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n___\\n# textに'Call me at 090-1234-5678'を代入\\ntext = 'Call me at ___-1234-5678'\\n# re.search()でtextから3桁-4桁-4桁パターンを検索しmatchに代入\\nmatch = re.search(r'\\\\d{___}-\\\\d{4}-\\\\d{4}', text)\\n# matchが存在する場合\\nif ___:\\n    # match.group()をprintで出力\\n    ___(match.group())",
      "correctLines": [
          "# 正規表現モジュールをインポート",
          "import re",
          "",
          "# textに'Call me at 090-1234-5678'を代入",
          "text = 'Call me at 090-1234-5678'",
          "# re.search()でtextから3桁-4桁-4桁パターンを検索しmatchに代入",
          "match = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)",
          "# matchが存在する場合",
          "if match:",
          "    # match.group()をprintで出力",
          "    print(match.group())"
        ],
      "lineHints": [
          null,
          "パターンを検索するメソッドです。",
          null,
          null,
          "変数に文字列データを代入（保存）します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "search",
            "match",
            "find"
          ],
          "others": ["re", "'Call me at 090-1234-5678'", "match.group(", "090", "print", "3", "re", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "090-1234-5678\\n"
          }
        ]
      },
    {
      "title": "正規表現（findall）",
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'email1@test.com and email2@test.com'を代入\\ntext = 'email1@test.com and email2@test.com'\\n# re.findall()でtextからメールアドレスを検索しemailsに代入\\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\\n# emailsをprintで出力\\nprint(emails)",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n___\\n# textに'email1@test.com and email2@test.com'を代入\\ntext = 'email___@test.com and email2@test.com'\\n# re.findall()でtextからメールアドレスを検索しemailsに代入\\nemails = re.findall(r'\\\\w+@\\\\w+\\\\.\\\\w+', ___)\\n# emailsをprintで出力\\n___(emails)",
      "correctLines": [
          "# 正規表現モジュールをインポート",
          "import re",
          "",
          "# textに'email1@test.com and email2@test.com'を代入",
          "text = 'email1@test.com and email2@test.com'",
          "# re.findall()でtextからメールアドレスを検索しemailsに代入",
          "emails = re.findall(r'\\w+@\\w+\\.\\w+', text)",
          "# emailsをprintで出力",
          "print(emails)"
        ],
      "lineHints": [
          null,
          "全ての一致を取得するメソッドです。",
          null,
          null,
          "変数に文字列データを代入（保存）します。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "findall",
            "finditer",
            "search"
          ],
          "others": ["re", "'email1@test.com and email2@test.com'", "emails", "1", "print", "text", "re", ""]
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
      "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'こんにちは   世界   Python'を代入\\ntext = 'こんにちは   世界   Python'\\n# re.sub()でtextの連続空白を単一空白に置換しresultに代入\\nresult = re.sub(r'\\s+', ' ', text)\\n# resultをprintで出力\\nprint(result)",
      "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n___\\n# textに'こんにちは   世界   Python'を代入\\ntext = 'こんにちは   世界   ___'\\n# re.sub()でtextの連続空白を単一空白に置換しresultに代入\\nresult = re.sub(r'\\\\s+', ' ', ___)\\n# resultをprintで出力\\n___(result)",
      "correctLines": [
          "# 正規表現モジュールをインポート",
          "import re",
          "",
          "# textに'こんにちは   世界   Python'を代入",
          "text = 'こんにちは   世界   Python'",
          "# re.sub()でtextの連続空白を単一空白に置換しresultに代入",
          "result = re.sub(r'\\s+', ' ', text)",
          "# resultをprintで出力",
          "print(result)"
        ],
      "lineHints": [
          null,
          "置換するメソッドです。",
          null,
          null,
          "変数に文字列データを代入（保存）します。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "sub",
            "replace",
            "swap"
          ],
          "others": ["re", "'Hello   World   Python'", "result", "Python", "ext", "print", "text", "re", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは 世界 Python\\n"
          }
        ]
      },
    {
      "title": "collections.Counter",
      "correctCode": "# Counterクラスをインポート\\nfrom collections import Counter\\n\\n# textに'hello world'を代入\\ntext = 'hello world'\\n# Counter(text)で文字をカウントしcountに代入\\ncount = Counter(text)\\n# count.most_common(3)をprintで出力\\nprint(count.most_common(3))",
      "holeyCode": "# Counterクラスをインポート\\nfrom collections import ___\\n___\\n# textに'hello world'を代入\\ntext = 'hello ___'\\n# Counter(text)で文字をカウントしcountに代入\\ncount = Counter(___)\\n# count.most_common(3)をprintで出力\\n___(count.most_common(3))",
      "correctLines": [
          "# Counterクラスをインポート",
          "from collections import Counter",
          "",
          "# textに'hello world'を代入",
          "text = 'hello world'",
          "# Counter(text)で文字をカウントしcountに代入",
          "count = Counter(text)",
          "# count.most_common(3)をprintで出力",
          "print(count.most_common(3))"
        ],
      "lineHints": [
          null,
          "collectionsモジュールから特定の機能（Counter）を読み込みます。",
          null,
          null,
          "変数に文字列データを代入（保存）します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Counter",
            "Count",
            "Dict"
          ],
          "others": ["'こんにちは世界'", "Counter(text)", "count.most_common(3", "world", "text", "print", "世界", "World", "Counter", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[('l', 3), ('o', 2), ('h', 1)]\\n"
          }
        ]
      },
    {
      "title": "collections.defaultdict",
      "correctCode": "# defaultdictクラスをインポート\\nfrom collections import defaultdict\\n\\n# dにdefaultdict(list)を代入\\nd = defaultdict(list)\\n# d['くだもの']に'りんご'をappend\\nd['くだもの'].append('りんご')\\n# d['くだもの']に'バナナ'をappend\\nd['くだもの'].append('バナナ')\\n# d['くだもの']をprintで出力\\nprint(d['くだもの'])",
      "holeyCode": "# defaultdictクラスをインポート\\nfrom collections import ___\\n___\\n# dにdefaultdict(list)を代入\\nd = defaultdict(___)\\n# d['くだもの']に'りんご'をappend\\nd['くだもの'].append('___')\\n# d['くだもの']に'バナナ'をappend\\nd['くだもの'].append('___')\\n# d['くだもの']をprintで出力\\n___(d['くだもの'])",
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
          "collectionsモジュールから特定の機能（defaultdict）を読み込みます。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "defaultdict",
            "dict",
            "OrderedDict"
          ],
          "others": ["defaultdict(list)", "d['くだもの'].append('りんご')", "d['くだもの'].append('バナナ')", "d['くだもの']", "list", "print", "(", "りんご", "バナナ", "defaultdict"]
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
      "correctCode": "# chain関数をインポート\\nfrom itertools import chain\\n\\n# list1に[1, 2, 3]を代入\\nlist1 = [1, 2, 3]\\n# list2に[4, 5, 6]を代入\\nlist2 = [4, 5, 6]\\n# chain(list1, list2)をlist()でリスト化しresultに代入\\nresult = list(chain(list1, list2))\\n# resultをprintで出力\\nprint(result)",
      "holeyCode": "# chain関数をインポート\\nfrom itertools import ___\\n___\\n# list1に[1, 2, 3]を代入\\nlist___ = [1, 2, 3]\\n# list2に[4, 5, 6]を代入\\nlist___ = [4, 5, 6]\\n# chain(list1, list2)をlist()でリスト化しresultに代入\\nresult = list(chain(list___, list2))\\n# resultをprintで出力\\n___(result)",
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
          "itertoolsモジュールから特定の機能（chain）を読み込みます。",
          null,
          null,
          "配列を複数の値で初期化する。",
          null,
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "chain",
            "concat",
            "merge"
          ],
          "others": ["[1, 2, 3]", "[4, 5, 6]", "list(chain(list1, list2))", "result", "1", "2", "print", "chain"]
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
