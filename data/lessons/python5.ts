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
            "content": "# 安全にファイルを扱う\\n\\n**with文（ウィズぶん）** を使うと、**ファイルが自動的に閉じられます**。\\n\\n**たとえ話：** 冷蔵庫（ファイル）を開けたら、使い終わったら必ず閉める必要があります。\\n- with文なし: 自分で閉めないといけない（忘れるとトラブル！）\\n- with文あり: 自動で閉まる（安心！）\\n\\n**ファイルを開くときのモード：**\\n- `'r'` = 読み込み（Read）モード\\n- `'w'` = 書き込み（Write）モード（上書き）\\n- `'a'` = 追記（Append）モード\\n\\n**例：** ファイルを読み込もう！\\n\\n```python\\nwith open('file.txt', 'r') as f:\\n    content = f.read()  # 全部読む\\n    print(content)\\n# ← ここでファイルは自動で閉じられる！\\n```\\n\\n**何をしているか：**\\n1. `open('file.txt', 'r')` でファイルを読み込みモードで開く\\n2. `as f` でファイルオブジェクトを `f` という名前で使う\\n3. `f.read()` でファイルの中身を全部読む\\n4. `with` のブロックを抜けたら自動でファイルが閉じる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# ファイル名を変数に保存\\nfilename = 'テスト.txt'\\n# 書き込みモードでファイルを開く\\nwith open(filename, 'w') as f:\\n    # ファイルにテキストを書き込む\\n    f.write('こんにちは, Python!')\\n\\n# 読み込みモードでファイルを開く\\nwith open(filename, 'r') as f:\\n    # ファイルの内容を読み込んで表示\\n    print(f.read())",
        "holeyCode": "# ファイル名を変数に保存\\nfilename = 'テスト.___'\\n# 書き込みモードでファイルを開く\\nwith open(filename, 'w') as ___:\\n    # ファイルにテキストを書き込む\\n    f.write('こんにちは, ___!')\\n\\n# 読み込みモードでファイルを開く\\nwith open(filename, 'r') as ___:\\n    # ファイルの内容を読み込んで表示\\n    ___(f.read())",
        "correctLines": [
          "# ファイル名を変数に保存",
          "filename = 'テスト.txt'",
          "# 書き込みモードでファイルを開く",
          "with open(filename, 'w') as f:",
          "    # ファイルにテキストを書き込む",
          "    f.write('こんにちは, Python!')",
          "",
          "# 読み込みモードでファイルを開く",
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
          "others": ["'test.txt'", "f.write('Hello, Python!')", "open(filename, 'r')", "f.read(", "txt", "f", "Python", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは, Python!\
"
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
            "content": "# forループでファイルを読む\\n\\nファイルオブジェクトは **イテレータ**（繰り返し処理できるもの）なので、**forループで1行ずつ読めます**。\\n\\n**たとえ話：** 本のページをめくるように、1行ずつ順番に読んでいきます。\\n- `f.read()`: 本を丸ごとコピーする（メモリをたくさん使う）\\n- `for line in f`: 1ページずつ読む（メモリに優しい）\\n\\n**例：** ファイルを1行ずつ処理しよう！\\n\\n```python\\nwith open('file.txt', 'r') as f:\\n    for line in f:\\n        print(line.strip())  # 余分な空白を取り除いて表示\\n```\\n\\n**何をしているか：**\\n1. `for line in f` でファイルから1行ずつ取り出す\\n2. `line` には1行分のテキストが入る（改行文字`\\n`も含む）\\n3. `line.strip()` で前後の空白や改行を取り除く\\n\\n**ポイント：** 大きなファイルを読むときは、`for line in f` を使うとメモリを節約できます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 書き込みモードでファイルを開く\\nwith open('テスト.txt', 'w') as f:\\n    # 'line1\\nline2\\nline3'を書き込む\\n    f.write('line1\\nline2\\nline3')\\n# 読み込みモードでファイルを開く\\nwith open('テスト.txt', 'r') as f:\\n    # forでfをループ\\n    for line in f:\\n        # line.strip()を表示\\n        print(line.strip())",
        "holeyCode": "# 書き込みモードでファイルを開く\\nwith open('テスト.txt', '___') as f:\\n    # 'line1\\nline2\\nline3'を書き込む\\n    f.write('line1\\nline2\\nline3')\\n# 読み込みモードでファイルを開く\\nwith open('テスト.txt', '___') as f:\\n    # forでfをループ\\n    for line ___ f:\\n        # line.strip()を表示\\n        print(line.___())",
        "correctLines": [
          "# 書き込みモードでファイルを開く",
          "with open('テスト.txt', 'w') as f:",
          "    # 'line1\\nline2\\nline3'を書き込む",
          "    f.write('line1\\nline2\\nline3')",
          "# 読み込みモードでファイルを開く",
          "with open('テスト.txt', 'r') as f:",
          "    # forでfをループ",
          "    for line in f:",
          "        # line.strip()を表示",
          "        print(line.strip())"
        ],
        "lineHints": [
          null,
          "'w'は書き込みモードを表します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "strip()は前後の空白を除去します。"
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
          "others": ["ip())"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "line1\
line2\
line3\
"
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
            "content": "# JSON文字列をPythonに変換\\n\\n**JSON（ジェイソン）** とは、データを保存したり送ったりするための **世界共通の書き方** です。\\n\\n**JSONの例：**\\n```json\\n{\"name\": \"Taro\", \"age\": 25}\\n```\\n\\n**json.loads()（ロードエス）** で **JSON文字列をPythonの辞書やリストに変換** できます。\\n\\n**たとえ話：** 外国語（JSON）を日本語（Python）に翻訳するようなものです。\\n\\n**例：** JSON文字列を辞書に変換しよう！\\n\\n```python\\nimport json\\n\\n# JSON形式の文字列\\njson_str = '{\"name\": \"Taro\", \"age\": 25}'\\n# Pythonの辞書に変換\\ndata = json.loads(json_str)\\nprint(data['名前'])  # Taro\\n```\\n\\n**何をしているか：**\\n1. `import json` でJSONモジュールを読み込む\\n2. JSON形式の文字列を用意（ダブルクォートを使うのがJSONのルール）\\n3. `json.loads()` で文字列（String）をPythonオブジェクトに変換\\n\\n**ポイント：** `loads` の 's' は **String（文字列）** の意味です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# jsonモジュールをimportする\\nimport json\\n\\n# 'で囲んだJSON: {の中に\"キー\": 値をカンマ区切りで並べる（name=\"Python\", version=3.12）\\njson_str = '{\"名前\": \"Python\", \"version\": 3.12}'\\n# json_strをjson.loadsで辞書に変換しdataに代入する\\ndata = json.loads(json_str)\\n# data['名前']をprintで出力する\\nprint(data['名前'])",
        "holeyCode": "# jsonモジュールをimportする\\nimport ___\\n\\n# 'で囲んだJSON: {の中に\"キー\": 値をカンマ区切りで並べる（name=\"Python\", version=3.12）\\njson_str = ___\\n# json_strをjson.loadsで辞書に変換しdataに代入する\\ndata = json.___(json_str)\\n# data['名前']をprintで出力する\\n___(data['名前'])",
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
          "others": ["json", "'{\"name\": \"Python\", \"version\": 3.12}'", "print", "'{\"名前\": \"Python\", \"version\": 3.12}'"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Python\
"
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
            "content": "# PythonをJSONに変換\\n\\n**json.dumps()（ダンプエス）** で **Pythonの辞書やリストをJSON文字列に変換** できます。\\n\\n**たとえ話：** 日本語（Python）を外国語（JSON）に翻訳するようなものです。\\n- `loads`: 外国語 → 日本語（読み込み）\\n- `dumps`: 日本語 → 外国語（書き出し）\\n\\n**例：** 辞書をJSON文字列に変換しよう！\\n\\n```python\\nimport json\\n\\ndata = {'name': 'Taro', 'age': 25}\\njson_str = json.dumps(data)\\nprint(json_str)  # {\"name\": \"Taro\", \"age\": 25}\\n```\\n\\n**何をしているか：**\\n1. Pythonの辞書 `{'名前': '太郎', '年齢': 25}` を作る\\n2. `json.dumps()` でJSON形式の文字列に変換\\n3. シングルクォートがダブルクォートに変わる（JSONのルール）\\n\\n**便利なオプション：**\\n- `json.dumps(data, indent=2)`: 見やすく整形\\n- `json.dumps(data, ensure_ascii=False)`: 日本語をそのまま表示\\n\\n**ポイント：** `dumps` の 's' は **String（文字列）** に変換するという意味です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# JSONモジュールをインポート\\nimport json\\n\\n# dataにlanguage='Python', level='advanced'の辞書を代入\\ndata = {'language': 'Python', 'level': 'advanced'}\\n# json.dumps(data)でJSON文字列に変換しjson_strに代入\\njson_str = json.dumps(data)\\n# json_strをprintで出力\\nprint(json_str)",
        "holeyCode": "# JSONモジュールをインポート\\nimport ___\\n\\n# dataにlanguage='Python', level='advanced'の辞書を代入\\ndata = {'language': 'Python', 'level': '___'}\\n# json.dumps(data)でJSON文字列に変換しjson_strに代入\\njson_str = json.dumps(___)\\n# json_strをprintで出力\\n___(json_str)",
        "correctLines": [
          "# JSONモジュールをインポート",
          "import json",
          "",
          "# dataにlanguage='Python', level='advanced'の辞書を代入",
          "data = {'language': 'Python', 'level': 'advanced'}",
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
          "others": ["json", "{'language': 'Python', 'level': 'advanced'}", "json_str", "data", "print", "advanced"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{\"language\": \"Python\", \"level\": \"advanced\"}\
"
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
            "content": "# パターンを検索\\n\\n**正規表現（せいきひょうげん）** とは、文字の **パターン（形）** を表す特別な書き方です。\\n\\n**たとえ話：** 「3桁の数字」「@が入ったメールアドレス」のような「形」で文字を探せます。\\n\\n**re.search()（サーチ）** で **文字列の中からパターンに合う部分を探します**。\\n\\n**よく使う記号：**\\n- `\\d` = 数字1文字（0-9）\\n- `\\w` = 英数字1文字（a-z, A-Z, 0-9, _）\\n- `\\.` = ドット文字そのもの（`.`は特殊文字なので`\\`でエスケープ）\\n- `+` = 1回以上の繰り返し\\n- `{3}` = ちょうど3回\\n\\n**例：** メールアドレスを探そう！\\n\\n```python\\nimport re\\n\\ntext = 'my email is test@example.com'\\nmatch = re.search(r'\\w+@\\w+\\.\\w+', text)\\nif match:\\n    print(match.group())  # test@example.com\\n```\\n\\n**パターン `\\w+@\\w+\\.\\w+` の意味：**\\n- `\\w+` = 英数字が1文字以上（test）\\n- `@` = @マークそのまま\\n- `\\w+` = 英数字が1文字以上（example）\\n- `\\.` = ドット文字（.）\\n- `\\w+` = 英数字が1文字以上（com）\\n\\n**何をしているか：**\\n1. `import re` で正規表現モジュールを読み込む\\n2. `re.search(パターン, 文字列)` で検索\\n3. 見つかったら `match` オブジェクトが返る\\n4. `match.group()` で一致した文字列を取得\\n\\n**ポイント：なぜ `r` をつけるの？**\\n\\nPythonでは `\\` は特殊な意味を持ちます（`\\n` = 改行、`\\t` = タブ）。\\n\\nでも正規表現では `\\d` や `\\w` のように `\\` をそのまま使いたい。\\n\\n`r'...'` と書くと、`\\` が特殊文字として解釈されず、書いたままの文字列になります。正規表現では `r` をつけるのが定番です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'Call me at 090-1234-5678'を代入\\ntext = 'Call me at 090-1234-5678'\\n# re.search()でtextから3桁-4桁-4桁パターンを検索しmatchに代入\\nmatch = re.search(r'\\d{3}-\\d{4}-\\d{4}', text)\\n# matchが存在する場合\\nif match:\\n    # match.group()をprintで出力\\n    print(match.group())",
        "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# textに'Call me at 090-1234-5678'を代入\\ntext = 'Call me at ___-1234-5678'\\n# re.search()でtextから3桁-4桁-4桁パターンを検索しmatchに代入\\nmatch = re.search(r'\\\\d{___}-\\\\d{4}-\\\\d{4}', text)\\n# matchが存在する場合\\nif ___:\\n    # match.group()をprintで出力\\n    ___(match.group())",
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
          "others": ["re", "'Call me at 090-1234-5678'", "match.group(", "090", "print", "3"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "090-1234-5678\
"
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
            "content": "# 全ての一致を取得\\n\\n**re.findall()（ファインドオール）** で **パターンに一致する全ての部分をリストで取得** できます。\\n\\n**searchとの違い：**\\n- `search`: 最初に見つかった1つだけ\\n- `findall`: 全部見つけてリストにする\\n\\n**たとえ話：** 文章の中から「数字」を全部探し出すイメージです。\\n\\n**例：** 文章の中の全ての数字を取り出そう！\\n\\n```python\\nimport re\\n\\ntext = 'りんご3個とみかん5個'\\nnumbers = re.findall(r'\\d+', text)\\nprint(numbers)  # ['3', '5']\\n```\\n\\n**パターン `\\d+` の意味：**\\n- `\\d` = 数字1文字（0-9）\\n- `+` = 1回以上の繰り返し\\n- つまり「1桁以上の数字」にマッチ\\n\\n**何をしているか：**\\n1. `re.findall(パターン, 文字列)` で全て検索\\n2. 見つかった全ての部分がリストで返ってくる\\n3. 見つからない場合は空のリスト `[]` が返る\\n\\n**ポイント：** `findall` は常にリストを返すので、`if` でチェックしなくてもOK！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'email1@test.com and email2@test.com'を代入\\ntext = 'email1@test.com and email2@test.com'\\n# re.findall()でtextからメールアドレスを検索しemailsに代入\\nemails = re.findall(r'\\w+@\\w+\\.\\w+', text)\\n# emailsをprintで出力\\nprint(emails)",
        "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# textに'email1@test.com and email2@test.com'を代入\\ntext = 'email___@test.com and email2@test.com'\\n# re.findall()でtextからメールアドレスを検索しemailsに代入\\nemails = re.findall(r'\\\\w+@\\\\w+\\\\.\\\\w+', ___)\\n# emailsをprintで出力\\n___(emails)",
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
          "others": ["re", "'email1@test.com and email2@test.com'", "emails", "1", "print", "text"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "['email1@test.com', 'email2@test.com']\
"
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
            "content": "# パターンを置換\\n\\n**re.sub()（サブスティテュート）** で **パターンに一致する部分を別の文字に置き換え** られます。\\n\\n**たとえ話：** 文章の中の「犬」を全部「猫」に置き換えるような処理です。\\n\\n**書き方：** `re.sub(パターン, 置換後, 文字列)`\\n\\n**例：** 数字を「many」に置き換えよう！\\n\\n```python\\nimport re\\n\\ntext = 'りんご3個'\\nresult = re.sub(r'\\d+', 'many', text)\\nprint(result)  # りんごmany個\\n```\\n\\n**パターン `\\d+` の意味：**\\n- `\\d` = 数字1文字（0-9）\\n- `+` = 1回以上の繰り返し\\n- つまり「1桁以上の数字」にマッチ\\n\\n**何をしているか：**\\n1. `re.sub(パターン, 置換後, 文字列)` で置換\\n2. 全ての一致箇所が置き換わる\\n\\n**便利な使い方：**\\n- 余分な空白を1つにまとめる: `re.sub(r'\\s+', ' ', text)`\\n  - `\\s` = 空白文字（スペース、タブ、改行）\\n  - `\\s+` = 1つ以上の連続した空白\\n- 数字を消す: `re.sub(r'\\d+', '', text)`\\n\\n**ポイント：** 元の文字列は変わらず、新しい文字列が返ってきます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 正規表現モジュールをインポート\\nimport re\\n\\n# textに'こんにちは   世界   Python'を代入\\ntext = 'こんにちは   世界   Python'\\n# re.sub()でtextの連続空白を単一空白に置換しresultに代入\\nresult = re.sub(r'\\s+', ' ', text)\\n# resultをprintで出力\\nprint(result)",
        "holeyCode": "# 正規表現モジュールをインポート\\nimport ___\\n\\n# textに'こんにちは   世界   Python'を代入\\ntext = 'こんにちは   世界   ___'\\n# re.sub()でtextの連続空白を単一空白に置換しresultに代入\\nresult = re.sub(r'\\\\s+', ' ', ___)\\n# resultをprintで出力\\n___(result)",
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
          "others": ["re", "'Hello   World   Python'", "result", "Python", "ext", "print", "text"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは 世界 Python\
"
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
            "content": "# 要素を数える\\n\\n**Counter（カウンター）** を使うと、**要素の出現回数を簡単にカウント** できます。\\n\\n**たとえ話：** クラスで「好きな果物」アンケートを取って、りんごが何票、バナナが何票...と数えるようなものです。\\n\\n**例：** 果物の出現回数を数えよう！\\n\\n```python\\nfrom collections import Counter\\n\\nwords = ['りんご', 'バナナ', 'りんご', 'さくらんぼ']\\ncount = Counter(words)\\nprint(count['りんご'])  # 2（りんごは2回出てきた）\\nprint(count['バナナ']) # 1\\n```\\n\\n**何をしているか：**\\n1. `from collections import Counter` でインポート\\n2. `Counter(リスト)` でカウント開始\\n3. `count['りんご']` で「りんご」の出現回数を取得\\n\\n**便利なメソッド：**\\n- `count.most_common(3)`: 多い順に3つ取得\\n- `count.total()`: 全要素の合計数\\n\\n**ポイント：** 文字列を渡すと、1文字ずつカウントします！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Counterクラスをインポート\\nfrom collections import Counter\\n\\n# textに'hello world'を代入\\ntext = 'hello world'\\n# Counter(text)で文字をカウントしcountに代入\\ncount = Counter(text)\\n# count.most_common(3)をprintで出力\\nprint(count.most_common(3))",
        "holeyCode": "# Counterクラスをインポート\\nfrom collections import ___\\n\\n# textに'hello world'を代入\\ntext = 'hello ___'\\n# Counter(text)で文字をカウントしcountに代入\\ncount = Counter(___)\\n# count.most_common(3)をprintで出力\\n___(count.most_common(3))",
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
          "others": ["'こんにちは世界'", "Counter(text)", "count.most_common(3", "world", "text", "print", "世界", "World"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[('l', 3), ('o', 2), ('h', 1)]\
"
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
            "content": "# デフォルト値を持つ辞書\\n\\n**defaultdict（デフォルトディクト）** を使うと、**存在しないキーにアクセスしてもエラーにならない** 辞書が作れます。\\n\\n**普通の辞書の問題：**\\n```python\\nd = {}\\nd['a'] += 1  # エラー！キー'a'が存在しない\\n```\\n\\n**defaultdictなら：**\\n```python\\nd = defaultdict(int)\\nd['a'] += 1  # OK！自動で 0 が入る\\n```\\n\\n**たとえ話：** ゲームのスコアボード。新しいプレイヤーが参加すると、自動で「0点」からスタートできます。\\n\\n**デフォルト値の種類：**\\n- `defaultdict(int)`: 数値 `0` がデフォルト\\n- `defaultdict(list)`: 空のリスト `[]` がデフォルト\\n- `defaultdict(str)`: 空の文字列 `''` がデフォルト\\n\\n**何をしているか：**\\n1. `defaultdict(型)` でデフォルト値の型を指定\\n2. 存在しないキーにアクセスすると自動でデフォルト値が入る\\n3. その後は普通の辞書と同じように使える\\n\\n**ポイント：** キーの存在確認が不要になり、コードがシンプルになります！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# defaultdictクラスをインポート\\nfrom collections import defaultdict\\n\\n# dにdefaultdict(list)を代入\\nd = defaultdict(list)\\n# d['くだもの']に'りんご'をappend\\nd['くだもの'].append('りんご')\\n# d['くだもの']に'バナナ'をappend\\nd['くだもの'].append('バナナ')\\n# d['くだもの']をprintで出力\\nprint(d['くだもの'])",
        "holeyCode": "# defaultdictクラスをインポート\\nfrom collections import ___\\n\\n# dにdefaultdict(list)を代入\\nd = defaultdict(___)\\n# d['くだもの']に'りんご'をappend\\nd['くだもの'].append('___')\\n# d['くだもの']に'バナナ'をappend\\nd['くだもの'].append('___')\\n# d['くだもの']をprintで出力\\n___(d['くだもの'])",
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
          "others": ["defaultdict(list)", "d['くだもの'].append('りんご')", "d['くだもの'].append('バナナ')", "d['くだもの']", "list", "print", "(", "りんご", "バナナ"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "['りんご', 'バナナ']\
"
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
            "content": "# イテラブルを連結\\n\\n**chain()（チェーン）** を使うと、**複数のリストやイテラブルを1つにつなげて** 処理できます。\\n\\n**たとえ話：** 電車の連結のようなもの。複数の車両（リスト）をつなげて1つの長い電車にします。\\n\\n**リストの `+` との違い：**\\n- `a + b`: 新しいリストを作る（メモリを使う）\\n- `chain(a, b)`: つなげて順番に取り出す（メモリに優しい）\\n\\n**例：** 2つのリストをつなげてループしよう！\\n\\n```python\\nfrom itertools import chain\\n\\na = [1, 2, 3]\\nb = [4, 5, 6]\\nfor x in chain(a, b):\\n    print(x)  # 1 2 3 4 5 6 の順に出力\\n```\\n\\n**何をしているか：**\\n1. `from itertools import chain` でインポート\\n2. `chain(a, b)` で2つのリストを連結\\n3. `for` ループで1つずつ取り出せる\\n4. `list(chain(a, b))` でリストに変換も可能\\n\\n**ポイント：** 3つ以上も連結可能！ `chain(a, b, c, d, ...)` のように書けます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# chain関数をインポート\\nfrom itertools import chain\\n\\n# list1に[1, 2, 3]を代入\\nlist1 = [1, 2, 3]\\n# list2に[4, 5, 6]を代入\\nlist2 = [4, 5, 6]\\n# chain(list1, list2)をlist()でリスト化しresultに代入\\nresult = list(chain(list1, list2))\\n# resultをprintで出力\\nprint(result)",
        "holeyCode": "# chain関数をインポート\\nfrom itertools import ___\\n\\n# list1に[1, 2, 3]を代入\\nlist___ = [1, 2, 3]\\n# list2に[4, 5, 6]を代入\\nlist___ = [4, 5, 6]\\n# chain(list1, list2)をlist()でリスト化しresultに代入\\nresult = list(chain(list___, list2))\\n# resultをprintで出力\\n___(result)",
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
          "others": ["[1, 2, 3]", "[4, 5, 6]", "list(chain(list1, list2))", "result", "1", "2", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 2, 3, 4, 5, 6]\
"
          }
        ]
      }
  ]
};
