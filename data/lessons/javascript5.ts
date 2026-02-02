export const javascriptData5 = {
  "language": "javascript",
  "lessonId": "javascript-5",
  "lessonTitle": "JavaScript V - 正規表現とエラー処理",
  "lessonDescription": "JavaScriptの正規表現とエラー処理を学びます。パターンマッチング、例外処理、デバッグなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "exercises": [
    {
        "title": "正規表現リテラル",
        "description": "正規表現リテラルでパターンを定義しましょう。",
        "difficulty": "hard",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "正規表現（せいきひょうげん）リテラルとは？",
            "content": "# 文字のパターンを定義する\\\\n\\\\n**正規表現** は、文字列の「パターン」を表現する方法です。\\\\n\\\\n**身近なたとえ：**\\\\n「『あ』で始まる言葉を探して」とお願いするイメージです。正規表現を使えば、もっと複雑なパターンも探せます。\\\\n\\\\n**書き方：**\\\\nパターンを `/` で囲みます。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst pattern = /hello/;\\\\n// 'hello world' に 'hello' が含まれる？\\\\nconsole.log(pattern.test('hello world'));\\\\n```\\\\n**実行結果：**\\\\n```\\\\ntrue\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// / で正規表現リテラルを定義\\\\nconst pattern = /javascript/i;\\\\n// test でマッチをテスト\\\\nconsole.log(pattern.test('I love JavaScript'));",
        "holeyCode": "// / で正規表現リテラルを定義\\\\nconst pattern = ___javascript/i;\\\\n// test でマッチをテスト\\\\nconsole.log(pattern.___('I love JavaScript'));",
        "correctLines": [
          "// / で正規表現リテラルを定義",
          "const pattern = /javascript/i;",
          "// test でマッチをテスト",
          "console.log(pattern.test('I love JavaScript'));"
        ],
        "lineHints": [
          null,
          "正規表現はスラッシュで囲みます。",
          null,
          "test でパターンにマッチするかテストします。"
        ],
        "candidates": {
          "keywords": [
            "/",
            "\"",
            "'"
          ],
          "others": [
            "test"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\\\n"
          }
        ]
      },
    {
        "title": "test()メソッド",
        "description": "パターンにマッチするかテストしましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "test()メソッドとは？",
            "content": "# パターンに合うかチェック\\\\n\\\\n**test()** は、文字列がパターンに合うかどうかを true/false で返します。\\\\n\\\\n**身近なたとえ：**\\\\n「この文章に数字は含まれている？」と質問して、「はい」か「いいえ」で答えてもらうイメージです。\\\\n\\\\n**よく使う記号：**\\\\n- `\\d` ... 数字（0-9）\\\\n- `+` ... 1回以上の繰り返し\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst pattern = /\\d+/;  // 1個以上の数字\\\\nconsole.log(pattern.test('abc123'));  // true（数字あり）\\\\nconsole.log(pattern.test('abc'));     // false（数字なし）\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 正規表現パターンを定義\\\\nconst emailPattern = /\\w+@\\w+\\.\\w+/;\\\\n// test() で 'test@example.com' と 'invalid-email' をテスト\\\\nconsole.log(emailPattern.test('test@example.com'));\\\\n// 無効なメールをテスト\\\\nconsole.log(emailPattern.test('invalid-email'));",
        "holeyCode": "// 正規表現パターンを定義\\\\nconst emailPattern = ___\\w+@\\w+\\.\\w+/;\\\\n// test() で 'test@example.com' と 'invalid-email' をテスト\\\\nconsole.log(emailPattern.___)('test@example.com'));\\\\n// 無効なメールをテスト\\\\nconsole.log(emailPattern.test('___'));",
        "correctLines": [
          "// 正規表現パターンを定義",
          "const emailPattern = /\\w+@\\w+\\.\\w+/;",
          "// test() で 'test@example.com' と 'invalid-email' をテスト",
          "console.log(emailPattern.test('test@example.com'));",
          "// 無効なメールをテスト",
          "console.log(emailPattern.test('invalid-email'));"
        ],
        "lineHints": [
          null,
          "正規表現はスラッシュで囲みます。",
          null,
          "マッチをテストするメソッドです。",
          null,
          "invalid-email でテストします。"
        ],
        "candidates": {
          "keywords": [
            "test(",
            "match(",
            "exec("
          ],
          "others": ["/", "test('test@example.com'));", "invalid-email", "test('test@example.com'"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "false\\\\nfalse\\\\n"
          }
        ]
      },
    {
        "title": "match()メソッド",
        "description": "マッチした部分を取得しましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "match()メソッドとは？",
            "content": "# パターンに合う部分を取り出す\\\\n\\\\n**match()** は、パターンに合った部分を配列で返します。\\\\n\\\\n**身近なたとえ：**\\\\n「この文章から数字を全部抜き出して」とお願いするイメージです。\\\\n\\\\n**フラグ g について：**\\\\n`/g` をつけると「全部探す」（global）という意味になります。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst text = 'I have 3 apples and 5 oranges';\\\\nconst numbers = text.match(/\\d+/g);\\\\nconsole.log(numbers);\\\\n```\\\\n**実行結果：**\\\\n```\\\\n['3', '5']\\\\n```\\\\n\\\\n**ポイント：**\\\\n見つからなかった場合は `null` が返ります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 090-1234-5678 を含む文字列を定義\\\\nconst text = 'Contact: 090-1234-5678 or 080-9876-5432';\\\\n// match() で 090-1234-5678 と 080-9876-5432 を抽出\\\\nconst phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);\\\\n// 結果を出力\\\\nconsole.log(phones);",
        "holeyCode": "// 090-1234-5678 を含む文字列を定義\\\\nconst text = 'Contact: ___-1234-5678 or 080-9876-5432';\\\\n// match() で 090-1234-5678 と 080-9876-5432 を抽出\\\\nconst phones = text.___(___\\d{3}-\\d{4}-\\d{4}/g);\\\\n// 結果を出力\\\\nconsole.___(phones);",
        "correctLines": [
          "// 090-1234-5678 を含む文字列を定義",
          "const text = 'Contact: 090-1234-5678 or 080-9876-5432';",
          "// match() で 090-1234-5678 と 080-9876-5432 を抽出",
          "const phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);",
          "// 結果を出力",
          "console.log(phones);"
        ],
        "lineHints": [
          null,
          "定数を宣言し、文字列を代入します。",
          null,
          "match()と正規表現リテラルを使います。",
          null,
          "phones を出力します。"
        ],
        "candidates": {
          "keywords": [
            "match(",
            "/"
          ],
          "others": [
            "090",
            "match",
            "log"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "null\\\\n"
          }
        ]
      },
    {
        "title": "replace()メソッド",
        "description": "パターンにマッチした部分を置換しましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "replace()メソッドとは？",
            "content": "# パターンに合う部分を置き換える\\\\n\\\\n**replace()** は、パターンに合った部分を別の文字列に置き換えます。\\\\n\\\\n**身近なたとえ：**\\\\n「この文章の『りんご』を全部『みかん』に変えて」とお願いするイメージです。\\\\n\\\\n**書き方：**\\\\n```\\\\n文字列.replace(/パターン/g, '置き換え後')\\\\n```\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst text = 'hello world';\\\\nconst result = text.replace(/world/, 'JavaScript');\\\\nconsole.log(result);\\\\n```\\\\n**実行結果：**\\\\n```\\\\nhello JavaScript\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 'Hello   World   JavaScript' を定義\\\\nconst text = 'Hello   World   JavaScript';\\\\n// replace() で連続する空白を1つの空白に置換\\\\nconst result = text.replace(/\\s+/g, ' ');\\\\n// 結果を出力\\\\nconsole.log(result);",
        "holeyCode": "// 'Hello   World   JavaScript' を定義\\\\nconst text = '___   World   JavaScript';\\\\n// replace() で連続する空白を1つの空白に置換\\\\nconst result = text.___(___\\s+/g, ' ');\\\\n// 結果を出力\\\\nconsole.___(result);",
        "correctLines": [
          "// 'Hello   World   JavaScript' を定義",
          "const text = 'Hello   World   JavaScript';",
          "// replace() で連続する空白を1つの空白に置換",
          "const result = text.replace(/\\s+/g, ' ');",
          "// 結果を出力",
          "console.log(result);"
        ],
        "lineHints": [
          null,
          "定数を宣言し、文字列を代入します。",
          null,
          "replace()と正規表現を使います。",
          null,
          "result を出力します。"
        ],
        "candidates": {
          "keywords": [
            "replace(",
            "/"
          ],
          "others": [
            "Hello",
            "replace",
            "log"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello   World   JavaScript\\\\n"
          }
        ]
      },
    {
        "title": "try-catch文",
        "description": "エラーをキャッチして処理しましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "try-catch文とは？",
            "content": "# エラーを捕まえて対処する\\\\n\\\\n**try-catch** は、エラーが起きてもプログラムが止まらないようにする仕組みです。\\\\n\\\\n**身近なたとえ：**\\\\nサッカーのゴールキーパーを想像してください。シュートが来たら（エラーが起きたら）キャッチする！\\\\n\\\\n**仕組み：**\\\\n- `try` ... 「試してみる」処理を書く\\\\n- `catch` ... エラーが起きたときの処理を書く\\\\n\\\\n**コード例：**\\\\n```javascript\\\\ntry {\\\\n  throw new Error('Something went wrong');\\\\n} catch (e) {\\\\n  console.log(e.message);  // エラーメッセージを表示\\\\n}\\\\n```\\\\n\\\\n**ポイント：**\\\\nエラーが起きても catch で処理すれば、プログラムは続行できます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// try ブロックを開始\\\\ntry {\\\\n  // JSON.parse でパース\\\\n  const result = JSON.parse('invalid json');\\\\n// catch でエラーをキャッチ\\\\n} catch (e) {\\\\n  // エラーメッセージを出力\\\\n  console.log('Error:', e.message);",
        "holeyCode": "// try ブロックを開始\\\\n___ {\\\\n  // JSON.parse でパース\\\\n  const result = JSON.___('invalid json');\\\\n// catch でエラーをキャッチ\\\\n} ___ (e) {\\\\n  // エラーメッセージを出力\\\\n  console.log('Error:', e.___);",
        "correctLines": [
          "// try ブロックを開始",
          "try {",
          "  // JSON.parse でパース",
          "  const result = JSON.parse('invalid json');",
          "// catch でエラーをキャッチ",
          "} catch (e) {",
          "  // エラーメッセージを出力",
          "  console.log('Error:', e.message);"
        ],
        "lineHints": [
          null,
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          "JSON.parse でJSONをパースします。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。"
        ],
        "candidates": {
          "keywords": [
            "catch",
            "except",
            "handle"
          ],
          "others": [
            "try",
            "parse",
            "message"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Error: Unexpected token i in JSON at position 0\\\\n"
          }
        ]
      },
    {
        "title": "finally節",
        "description": "常に実行される処理を書きましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "finally節とは？",
            "content": "# 必ず実行される処理\\\\n\\\\n**finally** は、エラーが起きても起きなくても **必ず** 実行される部分です。\\\\n\\\\n**身近なたとえ：**\\\\n「試合に勝っても負けても、最後に握手する」というルールのようなものです。\\\\n\\\\n**使いどころ：**\\\\n- ファイルを閉じる処理\\\\n- データベース接続を切る処理\\\\n- 「お片付け」的な処理\\\\n\\\\n**コード例：**\\\\n```javascript\\\\ntry {\\\\n  // 処理を試す\\\\n} catch (e) {\\\\n  // エラーがあれば処理\\\\n} finally {\\\\n  // 必ずここを通る！\\\\n}\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// function で関数を定義\\\\nfunction process() {\\\\n  // try ブロック\\\\n  try {\\\\n    console.log('Processing...');\\\\n    // throw でエラーを投げる\\\\n    throw new Error('Error!');\\\\n  } catch (e) {\\\\n    // エラーメッセージを出力\\\\n    console.log('Caught:', e.message);\\\\n  // finally で常に実行されるブロック\\\\n  } finally {\\\\n    console.log('Cleanup done');\\\\n  }\\\\n}\\\\n// 関数を呼び出し\\\\nprocess();",
        "holeyCode": "// function で関数を定義\\\\n___ process() {\\\\n  // try ブロック\\\\n  ___ {\\\\n    console.log('Processing...');\\\\n    // throw でエラーを投げる\\\\n    ___ new Error('Error!');\\\\n  } catch (e) {\\\\n    // エラーメッセージを出力\\\\n    console.log('Caught:', e.___);\\\\n  // finally で常に実行されるブロック\\\\n  } ___ {\\\\n    console.log('Cleanup done');\\\\n  }\\\\n}\\\\n// 関数を呼び出し\\\\n___();",
        "correctLines": [
          "// function で関数を定義",
          "function process() {",
          "  // try ブロック",
          "  try {",
          "    console.log('Processing...');",
          "    // throw でエラーを投げる",
          "    throw new Error('Error!');",
          "  } catch (e) {",
          "    // エラーメッセージを出力",
          "    console.log('Caught:', e.message);",
          "  // finally で常に実行されるブロック",
          "  } finally {",
          "    console.log('Cleanup done');",
          "  }",
          "}",
          "// 関数を呼び出し",
          "process();"
        ],
        "lineHints": [
          null,
          "function で関数を定義します。",
          null,
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
          null,
          null,
          "関数（process）を呼び出して実行します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "finally",
            "always",
            "end"
          ],
          "others": [
            "function",
            "try",
            "throw",
            "message",
            "process"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Processing...\\\\nCaught: Error!\\\\nCleanup done\\\\n"
          }
        ]
      },
    {
        "title": "カスタムエラー",
        "description": "独自のエラークラスを作成しましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "カスタムエラーとは？",
            "content": "# 自分だけのエラーを作る\\\\n\\\\n**カスタムエラー** は、Error クラスを継承して作る独自のエラーです。\\\\n\\\\n**なぜ作る？**\\\\n- エラーの種類を区別できる（「入力エラー」「ネットワークエラー」など）\\\\n- エラーの原因が分かりやすくなる\\\\n\\\\n**作り方：**\\\\n```javascript\\\\nclass ValidationError extends Error {\\\\n  constructor(message) {\\\\n    super(message);  // 親クラスを呼ぶ\\\\n    this.name = 'ValidationError';  // エラー名を設定\\\\n  }\\\\n}\\\\n```\\\\n\\\\n**使い方：**\\\\n```javascript\\\\nthrow new ValidationError('入力が無効です');\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// extends でErrorクラスを継承\\\\nclass ValidationError extends Error {\\\\n  // constructor で初期化\\\\n  constructor(message) {\\\\n    // super で親クラスのコンストラクタを呼び出し\\\\n    super(message);\\\\n    // this.name にクラス名を設定\\\\n    this.name = 'ValidationError';\\\\n  }\\\\n}\\\\n\\\\n// try でエラーを試行\\\\ntry {\\\\n  // throw でエラーを投げる\\\\n  throw new ValidationError('Invalid input');\\\\n} catch (e) {\\\\n  // エラー情報を出力\\\\n  console.log(`${e.name}: ${e.message}`);\\\\n}",
        "holeyCode": "// extends でErrorクラスを継承\\\\nclass ValidationError ___ Error {\\\\n  // constructor で初期化\\\\n  ___(message) {\\\\n    // super で親クラスのコンストラクタを呼び出し\\\\n    ___(message);\\\\n    // this.name にクラス名を設定\\\\n    this.___ = 'ValidationError';\\\\n  }\\\\n}\\\\n\\\\n// try でエラーを試行\\\\n___ {\\\\n  // throw でエラーを投げる\\\\n  ___ new ValidationError('Invalid input');\\\\n} catch (e) {\\\\n  // エラー情報を出力\\\\n  console.log(`${e.___}: ${e.message}`);\\\\n}",
        "correctLines": [
          "// extends でErrorクラスを継承",
          "class ValidationError extends Error {",
          "  // constructor で初期化",
          "  constructor(message) {",
          "    // super で親クラスのコンストラクタを呼び出し",
          "    super(message);",
          "    // this.name にクラス名を設定",
          "    this.name = 'ValidationError';",
          "  }",
          "}",
          "",
          "// try でエラーを試行",
          "try {",
          "  // throw でエラーを投げる",
          "  throw new ValidationError('Invalid input');",
          "} catch (e) {",
          "  // エラー情報を出力",
          "  console.log(`${e.name}: ${e.message}`);",
          "}"
        ],
        "lineHints": [
          null,
          "新しいクラス（ValidationError）を定義します。",
          null,
          "constructor で初期化します。",
          null,
          "super で親クラスを呼び出します。",
          null,
          "this.name に名前を設定します。",
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
          null
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "inherits"
          ],
          "others": [
            "constructor",
            "super",
            "name",
            "try",
            "throw"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ValidationError: Invalid input\\\\n"
          }
        ]
      },
    {
        "title": "Symbol",
        "description": "ユニークな識別子を作成しましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "Symbolとは？",
            "content": "# 絶対に重複しないユニークな値\\\\n\\\\n**Symbol** は、世界に一つだけの「印」を作る機能です。\\\\n\\\\n**身近なたとえ：**\\\\n指紋は人それぞれ違いますよね。Symbol も同じで、作るたびに必ず違う値になります。同じ名前で作っても、中身は別物です！\\\\n\\\\n**なぜ使う？**\\\\n- プロパティ名の衝突を避けられる\\\\n- 「隠し」プロパティを作れる\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst id = Symbol('id');\\\\nconst obj = {\\\\n  [id]: 12345  // [id] で Symbol をキーにする\\\\n};\\\\nconsole.log(obj[id]);  // 12345\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Symbol('secret')でsecretを作成\\\\nconst secret = Symbol('secret');\\\\n// userオブジェクトを作成\\\\nconst user = {\\\\n  // nameに'Taro'を設定\\\\n  name: 'Taro',\\\\n  // [secret]に'password123'を設定\\\\n  [secret]: 'password123'\\\\n};\\\\n// user.nameをconsole.logで出力\\\\nconsole.log(user.name);\\\\n// user[secret]をconsole.logで出力\\\\nconsole.log(user[secret]);",
        "holeyCode": "// Symbol('secret')でsecretを作成\\\\nconst secret = ___('secret');\\\\n// userオブジェクトを作成\\\\nconst user = {\\\\n  // nameに'Taro'を設定\\\\n  name: '___',\\\\n  // [secret]に'password123'を設定\\\\n  [secret]: '___'\\\\n};\\\\n// user.nameをconsole.logで出力\\\\nconsole.log(user.___);\\\\n// user[secret]をconsole.logで出力\\\\nconsole.log(user[___]);",
        "correctLines": [
          "// Symbol('secret')でsecretを作成",
          "const secret = Symbol('secret');",
          "// userオブジェクトを作成",
          "const user = {",
          "  // nameに'Taro'を設定",
          "  name: 'Taro',",
          "  // [secret]に'password123'を設定",
          "  [secret]: 'password123'",
          "};",
          "// user.nameをconsole.logで出力",
          "console.log(user.name);",
          "// user[secret]をconsole.logで出力",
          "console.log(user[secret]);"
        ],
        "lineHints": [
          null,
          "ユニークな識別子を作る関数です。",
          null,
          null,
          null,
          "password123 を設定します。",
          null,
          "user.name を出力します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "Symbol",
            "Unique",
            "Key"
          ],
          "others": [
            "Taro",
            "password123",
            "name",
            "secret"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Taro\\\\npassword123\\\\n"
          }
        ]
      },
    {
        "title": "WeakMap",
        "description": "弱参照のMapを使いましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "WeakMapとは？",
            "content": "# 弱参照（じゃくさんしょう）のMap\\\\n\\\\n**WeakMap** は、オブジェクトをキーにできる特殊な Map です。\\\\n\\\\n**「弱参照」って何？**\\\\nオブジェクトが不要になったら、自動で片付けられる（ガベージコレクション）という意味です。メモリを節約できます！\\\\n\\\\n**身近なたとえ：**\\\\n付箋（メモ）を本に貼るイメージです。本を捨てたら、付箋も一緒に捨てられます。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst cache = new WeakMap();\\\\nconst obj = {};\\\\ncache.set(obj, 'cached value');  // キーはオブジェクト\\\\nconsole.log(cache.get(obj));     // 'cached value'\\\\n```\\\\n\\\\n**使いどころ：**\\\\nプライベートなデータを安全に保存したいとき"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// WeakMap で弱参照のMapを作成\\\\nconst privateData = new WeakMap();\\\\n\\\\n// class でクラスを定義\\\\nclass User {\\\\n  // constructor で初期化\\\\n  constructor(name) {\\\\n    // set でプライベートデータを設定\\\\n    privateData.set(this, { password: 'secret' });\\\\n    // this.name に名前を代入\\\\n    this.name = name;\\\\n  }\\\\n  getPassword() {\\\\n    // get でプライベートデータを取得\\\\n    return privateData.get(this).password;\\\\n  }\\\\n}\\\\n\\\\n// new でインスタンスを作成\\\\nconst user = new User('Taro');\\\\n// getPassword() を呼び出し\\\\nconsole.log(user.getPassword());",
        "holeyCode": "// WeakMap で弱参照のMapを作成\\\\nconst privateData = new ___();\\\\n\\\\n// class でクラスを定義\\\\n___ User {\\\\n  // constructor で初期化\\\\n  ___(name) {\\\\n    // set でプライベートデータを設定\\\\n    privateData.___(this, { password: 'secret' });\\\\n    // this.name に名前を代入\\\\n    this.___ = name;\\\\n  }\\\\n  getPassword() {\\\\n    // get でプライベートデータを取得\\\\n    return privateData.___(this).password;\\\\n  }\\\\n}\\\\n\\\\n// new でインスタンスを作成\\\\nconst user = ___ User('Taro');\\\\n// getPassword() を呼び出し\\\\nconsole.log(user.___());",
        "correctLines": [
          "// WeakMap で弱参照のMapを作成",
          "const privateData = new WeakMap();",
          "",
          "// class でクラスを定義",
          "class User {",
          "  // constructor で初期化",
          "  constructor(name) {",
          "    // set でプライベートデータを設定",
          "    privateData.set(this, { password: 'secret' });",
          "    // this.name に名前を代入",
          "    this.name = name;",
          "  }",
          "  getPassword() {",
          "    // get でプライベートデータを取得",
          "    return privateData.get(this).password;",
          "  }",
          "}",
          "",
          "// new でインスタンスを作成",
          "const user = new User('Taro');",
          "// getPassword() を呼び出し",
          "console.log(user.getPassword());"
        ],
        "lineHints": [
          null,
          "弱参照のMapを作成します。",
          null,
          null,
          "constructor で初期化します。",
          null,
          "set でデータを設定します。",
          null,
          "this.name に名前を代入します。",
          null,
          "get でデータを取得します。",
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
          null
        ],
        "candidates": {
          "keywords": [
            "WeakMap",
            "Map",
            "HashMap"
          ],
          "others": [
            "class",
            "constructor",
            "set",
            "name",
            "get",
            "new",
            "getPassword"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "secret\\\\n"
          }
        ]
      },
    {
        "title": "Proxy",
        "description": "オブジェクトの操作をインターセプトしましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "Proxyとは？",
            "content": "# 操作を「横取り」する\\\\n\\\\n**Proxy** は、オブジェクトへの操作を途中でキャッチして、カスタマイズできる機能です。\\\\n\\\\n**身近なたとえ：**\\\\n「受付係」を想像してください。お客さん（コード）が社員（オブジェクト）に会いたいとき、受付係が間に入って「名前を聞く」「記録を残す」などができます。\\\\n\\\\n**できること：**\\\\n- プロパティにアクセスしたときの処理を変える\\\\n- 存在しないプロパティに「デフォルト値」を返す\\\\n- アクセスをログに残す\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst handler = {\\\\n  get(target, prop) {\\\\n    // ない場合は 'not found' を返す\\\\n    return prop in target ? target[prop] : 'not found';\\\\n  }\\\\n};\\\\nconst obj = new Proxy({}, handler);\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// ハンドラオブジェクトを定義\\\\nconst handler = {\\\\n  // get トラップを定義\\\\n  get(target, prop) {\\\\n    // アクセスをログ出力\\\\n    console.log(`Getting ${prop}`);\\\\n    // return でプロパティ値を返す\\\\n    return target[prop];\\\\n  }\\\\n};\\\\n// name: 'Taro' を持つオブジェクトの操作をインターセプト\\\\nconst user = new Proxy({ name: 'Taro' }, handler);\\\\n// name プロパティにアクセス\\\\nconsole.log(user.name);",
        "holeyCode": "// ハンドラオブジェクトを定義\\\\nconst handler = {\\\\n  // get トラップを定義\\\\n  ___(target, prop) {\\\\n    // アクセスをログ出力\\\\n    console.log(`Getting ${___}`);\\\\n    // return でプロパティ値を返す\\\\n    ___ target[prop];\\\\n  }\\\\n};\\\\n// name: 'Taro' を持つオブジェクトの操作をインターセプト\\\\nconst user = new ___({ name: 'Taro' }, handler);\\\\n// name プロパティにアクセス\\\\nconsole.log(user.___);",
        "correctLines": [
          "// ハンドラオブジェクトを定義",
          "const handler = {",
          "  // get トラップを定義",
          "  get(target, prop) {",
          "    // アクセスをログ出力",
          "    console.log(`Getting ${prop}`);",
          "    // return でプロパティ値を返す",
          "    return target[prop];",
          "  }",
          "};",
          "// name: 'Taro' を持つオブジェクトの操作をインターセプト",
          "const user = new Proxy({ name: 'Taro' }, handler);",
          "// name プロパティにアクセス",
          "console.log(user.name);"
        ],
        "lineHints": [
          null,
          null,
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
          null,
          "return でプロパティ値を返します。",
          null,
          "Proxyを作成します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "Proxy",
            "Handler",
            "Wrapper"
          ],
          "others": [
            "get",
            "prop",
            "return",
            "name"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Getting name\\\\nTaro\\\\n"
          }
        ]
      }
  ]
};
