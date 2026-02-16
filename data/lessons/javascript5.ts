export const javascriptData5 = {
  "language": "javascript",
  "lessonId": "javascript-5",
  "lessonTitle": "JavaScript V - 正規表現とエラー処理",
  "lessonDescription": "JavaScriptの正規表現とエラー処理を学びます。パターンマッチング、例外処理、デバッグなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 5,
  "tutorialSlides": [
    {
      "title": "正規表現リテラル",
      "content": "`/パターン/` で正規表現を作ります。\\n\\n```javascript\\nconst pattern = /hello/i;  // iは大文字小文字無視\\npattern.test('Hello');  // true\\n```"
    },
    {
      "title": "正規表現メソッド",
      "content": "文字列の検索・置換ができます。\\n\\n```javascript\\n'hello world'.match(/\\\\w+/g);\\n// => ['hello', 'world']\\n\\n'hello'.replace(/l/g, 'L');\\n// => 'heLLo'\\n```"
    },
    {
      "title": "try-catch",
      "content": "エラーを捕捉して処理できます。\\n\\n```javascript\\ntry {\\n  // エラーが起きるかもしれない処理\\n  JSON.parse('invalid');\\n} catch (e) {\\n  console.log('エラー発生');\\n}\\n```"
    },
    {
      "title": "throw でエラーを投げる",
      "content": "意図的にエラーを発生させます。\\n\\n```javascript\\nfunction divide(a, b) {\\n  if (b === 0) throw new Error('0で割れません');\\n  return a / b;\\n}\\n```"
    }
  ],
  "exercises": [
    {
      "title": "正規表現リテラル",
      "description": "パターンを使って文字列を検索・置換する方法を学びます",
      "tutorialSlides": [
        {
          "title": "正規表現リテラルとは？",
          "content": "# 文字のパターンを定義する\\n\\n**正規表現** は、文字列の「パターン」を表現する方法です。\\n\\n**身近なたとえ：**\\n「『あ』で始まる言葉を探して」とお願いするイメージです。正規表現を使えば、もっと複雑なパターンも探せます。\\n\\n**書き方：**\\nパターンを `/` で囲みます。\\n\\n**コード例：**\\n```javascript\\nconst pattern = /hello/;\\n// 'hello world' に 'hello' が含まれる？\\nconsole.log(pattern.test('hello world'));\\n```\\n**実行結果：**\\n```\\ntrue\\n```"
        }
      ],
      "correctCode": "// /javascript/iの正規表現リテラルをpatternに代入\\nconst pattern = /javascript/i;\\n// consoleのlogメソッドでpatternのtestメソッドの結果を表示\\nconsole.log(pattern.test('JavaScriptは楽しい'));",
      "holeyCode": "// /javascript/iの正規表現リテラルをpatternに代入\\n___ ___ = /___/___;\\n// consoleのlogメソッドでpatternのtestメソッドの結果を表示\\n___.___(___.___('___'));",
      "correctLines": [
          "// /javascript/iの正規表現リテラルをpatternに代入",
          "const pattern = /javascript/i;",
          "// consoleのlogメソッドでpatternのtestメソッドの結果を表示",
          "console.log(pattern.test('JavaScriptは楽しい'));"
        ],
      "lineHints": [
          null,
          "constで定数patternを宣言し、正規表現リテラルを代入します。",
          null,
          "console.logでpattern.testの結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "let",
            "var"
          ],
          "others": [
            "javascript",
            "i",
            "pattern",
            "console",
            "log",
            "test",
            "JavaScriptは楽しい"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\n"
          }
        ]
      },
    {
      "title": "test()メソッド",
      "description": "test()について学びます",
      "tutorialSlides": [
        {
          "title": "test()メソッドとは？",
          "content": "# パターンに合うかチェック\\n\\n**test()** は、文字列がパターンに合うかどうかを true/false で返します。\\n\\n**身近なたとえ：**\\n「この文章に数字は含まれている？」と質問して、「はい」か「いいえ」で答えてもらうイメージです。\\n\\n**よく使う記号：**\\n- `\\d` ... 数字（0-9）\\n- `+` ... 1回以上の繰り返し\\n\\n**コード例：**\\n```javascript\\nconst pattern = /\\d+/;  // 1個以上の数字\\nconsole.log(pattern.test('abc123'));  // true（数字あり）\\nconsole.log(pattern.test('abc'));     // false（数字なし）\\n```"
        }
      ],
      "correctCode": "// メール形式の正規表現パターンをemailPatternに代入\\nconst emailPattern = /\\w+@\\w+\\.\\w+/;\\n// consoleのlogメソッドでemailPatternのtestメソッドの結果を表示（有効なメール）\\nconsole.log(emailPattern.test('test@example.com'));\\n// consoleのlogメソッドでemailPatternのtestメソッドの結果を表示（無効なメール）\\nconsole.log(emailPattern.test('invalid-email'));",
      "holeyCode": "// メール形式の正規表現パターンをemailPatternに代入\\n___ ___ = /___/;\\n// consoleのlogメソッドでemailPatternのtestメソッドの結果を表示（有効なメール）\\n___.___(___.___('___'));\\n// consoleのlogメソッドでemailPatternのtestメソッドの結果を表示（無効なメール）\\n___.___(___.___('___'));",
      "correctLines": [
          "// メール形式の正規表現パターンをemailPatternに代入",
          "const emailPattern = /\\w+@\\w+\\.\\w+/;",
          "// consoleのlogメソッドでemailPatternのtestメソッドの結果を表示（有効なメール）",
          "console.log(emailPattern.test('test@example.com'));",
          "// consoleのlogメソッドでemailPatternのtestメソッドの結果を表示（無効なメール）",
          "console.log(emailPattern.test('invalid-email'));"
        ],
      "lineHints": [
          null,
          "constで定数emailPatternを宣言し、正規表現リテラルを代入します。",
          null,
          "console.logでemailPattern.testの結果を出力します。",
          null,
          "emailPattern.testで'invalid-email'をテストします。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "let",
            "var"
          ],
          "others": ["\\w+@\\w+\\.\\w+", "emailPattern", "console", "log", "test", "test@example.com", "invalid-email"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\nfalse\\n"
          }
        ]
      },
    {
      "title": "match()メソッド",
      "description": "match()メソッドの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "match()メソッドとは？",
          "content": "# パターンに合う部分を取り出す\\n\\n**match()** は、パターンに合った部分を配列で返します。\\n\\n**身近なたとえ：**\\n「この文章から数字を全部抜き出して」とお願いするイメージです。\\n\\n**フラグ g について：**\\n`/g` をつけると「全部探す」（global）という意味になります。\\n\\n**コード例：**\\n```javascript\\nconst text = 'I have 3 apples and 5 oranges';\\nconst numbers = text.match(/\\d+/g);\\nconsole.log(numbers);\\n```\\n**実行結果：**\\n```\\n['3', '5']\\n```\\n\\n**ポイント：**\\n見つからなかった場合は `null` が返ります。"
        }
      ],
      "correctCode": "// 電話番号を含む文字列をtextに代入\\nconst text = 'Contact: 090-1234-5678 or 080-9876-5432';\\n// textのmatchメソッドで電話番号を抽出しphonesに代入\\nconst phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);\\n// consoleのlogメソッドでphonesを表示\\nconsole.log(phones);",
      "holeyCode": "// 電話番号を含む文字列をtextに代入\\n___ ___ = '___';\\n// textのmatchメソッドで電話番号を抽出しphonesに代入\\n___ ___ = ___.___(/___/___);\\n// consoleのlogメソッドでphonesを表示\\n___.___(___);",
      "correctLines": [
          "// 電話番号を含む文字列をtextに代入",
          "const text = 'Contact: 090-1234-5678 or 080-9876-5432';",
          "// textのmatchメソッドで電話番号を抽出しphonesに代入",
          "const phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);",
          "// consoleのlogメソッドでphonesを表示",
          "console.log(phones);"
        ],
      "lineHints": [
          null,
          "constで定数textを宣言し、電話番号を含む文字列を代入します。",
          null,
          "constで定数phonesを宣言し、text.matchの結果を代入します。",
          null,
          "console.logでphonesを出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "let",
            "var"
          ],
          "others": [
            "text",
            "phones",
            "match",
            "console",
            "log",
            "Contact: 090-1234-5678 or 080-9876-5432",
            "\\d{3}-\\d{4}-\\d{4}",
            "g"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ '090-1234-5678', '080-9876-5432' ]\\n"
          }
        ]
      },
    {
      "title": "replace()メソッド",
      "description": "replace()について学びます",
      "tutorialSlides": [
        {
          "title": "replace()メソッドとは？",
          "content": "# パターンに合う部分を置き換える\\n\\n**replace()** は、パターンに合った部分を別の文字列に置き換えます。\\n\\n**身近なたとえ：**\\n「この文章の『りんご』を全部『みかん』に変えて」とお願いするイメージです。\\n\\n**書き方：**\\n```\\n文字列.replace(/パターン/g, '置き換え後')\\n```\\n\\n**コード例：**\\n```javascript\\nconst text = 'hello world';\\nconst result = text.replace(/world/, 'JavaScript');\\nconsole.log(result);\\n```\\n**実行結果：**\\n```\\nhello JavaScript\\n```"
        }
      ],
      "correctCode": "// 'Hello   World'をtextに代入\\nconst text = 'Hello   World';\\n// textのreplaceメソッドで空白を1つに置換しresultに代入\\nconst result = text.replace(/\\s+/g, ' ');\\n// consoleのlogメソッドでresultを表示\\nconsole.log(result);",
      "holeyCode": "// 'Hello   World'をtextに代入\\n___ ___ = '___';\\n// textのreplaceメソッドで空白を1つに置換しresultに代入\\n___ ___ = ___.___(/___/___, '___');\\n// consoleのlogメソッドでresultを表示\\n___.___(___);",
      "correctLines": [
          "// 'Hello   World'をtextに代入",
          "const text = 'Hello   World';",
          "// textのreplaceメソッドで空白を1つに置換しresultに代入",
          "const result = text.replace(/\\s+/g, ' ');",
          "// consoleのlogメソッドでresultを表示",
          "console.log(result);"
        ],
      "lineHints": [
          null,
          "constで定数textを宣言し、空白を含む文字列を代入します。",
          null,
          "constで定数resultを宣言し、text.replaceの結果を代入します。",
          null,
          "console.logでresultを出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "let",
            "var"
          ],
          "others": ["text", "result", "replace", "console", "log", "Hello   World", "\\s+", "g", " "]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello World\\n"
          }
        ]
      },
    {
      "title": "try-catch文",
      "description": "プログラムのエラーを適切に処理して、安全に動作させる方法を学びます",
      "tutorialSlides": [
        {
          "title": "try-catch文とは？",
          "content": "# エラーを捕まえて対処する\\n\\n**try-catch** は、エラーが起きてもプログラムが止まらないようにする仕組みです。\\n\\n**身近なたとえ：**\\nサッカーのゴールキーパーを想像してください。シュートが来たら（エラーが起きたら）キャッチする！\\n\\n**仕組み：**\\n- `try` ... 「試してみる」処理を書く\\n- `catch` ... エラーが起きたときの処理を書く\\n\\n**コード例：**\\n```javascript\\ntry {\\n  throw new Error('Something went wrong');\\n} catch (e) {\\n  console.log(e.message);  // エラーメッセージを表示\\n}\\n```\\n\\n**ポイント：**\\nエラーが起きても catch で処理すれば、プログラムは続行できます！"
        }
      ],
      "correctCode": "// try ブロックを開始\\ntry {\\n  // JSONのparseメソッドで'不正なJSON'をパースしresultに代入\\n  const result = JSON.parse('不正なJSON');\\n// catchでエラーをキャッチ\\n} catch (e) {\\n  // consoleのlogメソッドでエラーメッセージを表示\\n  console.log('エラー:', e.message);",
      "holeyCode": "// try ブロックを開始\\n___ {\\n  // JSONのparseメソッドで'不正なJSON'をパースしresultに代入\\n  ___ ___ = ___.___('___');\\n// catchでエラーをキャッチ\\n} ___ (___) {\\n  // consoleのlogメソッドでエラーメッセージを表示\\n  ___.___('___', ___.___);",
      "correctLines": [
          "// try ブロックを開始",
          "try {",
          "  // JSONのparseメソッドで'不正なJSON'をパースしresultに代入",
          "  const result = JSON.parse('不正なJSON');",
          "// catchでエラーをキャッチ",
          "} catch (e) {",
          "  // consoleのlogメソッドでエラーメッセージを表示",
          "  console.log('エラー:', e.message);"
        ],
      "lineHints": [
          null,
          "tryでエラーが発生する可能性のある処理を開始します。",
          null,
          "constで定数resultを宣言し、JSON.parseの結果を代入します。",
          null,
          "catchでエラーを変数eでキャッチします。",
          null,
          "console.logで'エラー:'とe.messageを出力します。"
        ],
        "candidates": {
          "keywords": [
            "try",
            "catch",
            "const",
            "let"
          ],
          "others": [
            "result",
            "JSON",
            "parse",
            "不正なJSON",
            "e",
            "console",
            "log",
            "エラー:",
            "message"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "エラー: Unexpected token i in JSON at position 0\\n"
          }
        ]
      },
    {
      "title": "finally節",
      "description": "finallyについて学びます",
      "tutorialSlides": [
        {
          "title": "finally節とは？",
          "content": "# 必ず実行される処理\\n\\n**finally** は、エラーが起きても起きなくても **必ず** 実行される部分です。\\n\\n**身近なたとえ：**\\n「試合に勝っても負けても、最後に握手する」というルールのようなものです。\\n\\n**使いどころ：**\\n- ファイルを閉じる処理\\n- データベース接続を切る処理\\n- 「お片付け」的な処理\\n\\n**コード例：**\\n```javascript\\ntry {\\n  // 処理を試す\\n} catch (e) {\\n  // エラーがあれば処理\\n} finally {\\n  // 必ずここを通る！\\n}\\n```"
        }
      ],
      "correctCode": "// process関数を定義\\nfunction process() {\\n  // try ブロック\\n  try {\\n    // consoleのlogメソッドで'処理中...'を表示\\n    console.log('処理中...');\\n    // Errorインスタンス（メッセージ'エラー！'）を投げる\\n    throw new Error('エラー！');\\n  } catch (e) {\\n    // consoleのlogメソッドでエラーメッセージを表示\\n    console.log('Caught:', e.message);\\n  // finally で常に実行されるブロック\\n  } finally {\\n    // consoleのlogメソッドで'クリーンアップ完了'を表示\\n    console.log('クリーンアップ完了');\\n  }\\n}\\n// process関数を呼び出し\\nprocess();",
      "holeyCode": "// process関数を定義\\n___ ___() {\\n  // try ブロック\\n  ___ {\\n    // consoleのlogメソッドで'処理中...'を表示\\n    ___.___('___');\\n    // Errorインスタンス（メッセージ'エラー！'）を投げる\\n    ___ new ___('___');\\n  // ブロックを開始\\n  } ___ (___) {\\n    // consoleのlogメソッドでエラーメッセージを表示\\n    ___.___('___', ___.___)\\n  // finally で常に実行されるブロック\\n  } ___ {\\n    // consoleのlogメソッドで'クリーンアップ完了'を表示\\n    ___.___('___');\\n  // ブロックを閉じる\\n  ___\\n// ブロックを閉じる\\n___\\n// process関数を呼び出し\\n___();",
      "correctLines": [
          "// process関数を定義",
          "function process() {",
          "  // try ブロック",
          "  try {",
          "    // consoleのlogメソッドで'処理中...'を表示",
          "    console.log('処理中...');",
          "    // Errorインスタンス（メッセージ'エラー！'）を投げる",
          "    throw new Error('エラー！');",
          "  } catch (e) {",
          "    // consoleのlogメソッドでエラーメッセージを表示",
          "    console.log('Caught:', e.message);",
          "  // finally で常に実行されるブロック",
          "  } finally {",
          "    // consoleのlogメソッドで'クリーンアップ完了'を表示",
          "    console.log('クリーンアップ完了');",
          "  }",
          "}",
          "// process関数を呼び出し",
          "process();"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "function",
            "try",
            "catch",
            "finally",
            "throw",
            "new"
          ],
          "others": ["process", "console", "log", "処理中...", "Error", "エラー！", "e", "Caught:", "message", "クリーンアップ完了", "}", ";", "// throw new Error('エラー！')でエラーを投げる", "{", "console.log('Caught:',", ".message", "finally {", "rocess関数を呼び出し", "//", "ラーメッセージを出力", "finally で常に実行されるブロック", "process関数を呼び出し"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "処理中...\\nCaught: エラー！\\nクリーンアップ完了\\n"
          }
        ]
      },
    {
      "title": "カスタムエラー",
      "description": "カスタムエラーについて学びます",
      "tutorialSlides": [
        {
          "title": "カスタムエラーとは？",
          "content": "# 自分だけのエラーを作る\\n\\n**カスタムエラー** は、Error クラスを継承して作る独自のエラーです。\\n\\n**なぜ作る？**\\n- エラーの種類を区別できる（「入力エラー」「ネットワークエラー」など）\\n- エラーの原因が分かりやすくなる\\n\\n**作り方：**\\n```javascript\\nclass ValidationError extends Error {\\n  constructor(message) {\\n    super(message);  // 親クラスを呼ぶ\\n    this.name = 'ValidationError';  // エラー名を設定\\n  }\\n}\\n```\\n\\n**使い方：**\\n```javascript\\nthrow new ValidationError('入力が無効です');\\n```"
        }
      ],
      "correctCode": "// ValidationErrorクラスをErrorクラスを継承して定義\\nclass ValidationError extends Error {\\n  // constructorでmessageを受け取り初期化\\n  constructor(message) {\\n    // superで親クラスのコンストラクタを呼び出し\\n    super(message);\\n    // this.nameにクラス名を設定\\n    this.name = 'Validationエラー';\\n  }\\n}\\n\\n// tryでエラー処理を開始\\ntry {\\n  // ValidationErrorインスタンス（メッセージ'無効な入力'）を投げる\\n  throw new ValidationError('無効な入力');\\n// catchでエラーをキャッチ\\n} catch (e) {\\n  // consoleのlogメソッドでエラー情報を表示\\n  console.log(`${e.name}: ${e.message}`);\\n}",
      "holeyCode": "// ValidationErrorクラスをErrorクラスを継承して定義\\n___ ___ ___ ___ {\\n  // constructorでmessageを受け取り初期化\\n  ___(___) {\\n    // superで親クラスのコンストラクタを呼び出し\\n    ___(___);\\n    // this.nameにクラス名を設定\\n    ___.___ = '___';\\n  // ブロックを閉じる\\n  ___\\n// ブロックを閉じる\\n___\\n___\\n// tryでエラー処理を開始\\n___ {\\n  // ValidationErrorインスタンス（メッセージ'無効な入力'）を投げる\\n  ___ ___ ___('___');\\n// catchでエラーをキャッチ\\n} ___ (___) {\\n  // consoleのlogメソッドでエラー情報を表示\\n  ___.___(`${___.___}: ${___.___}`);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// ValidationErrorクラスをErrorクラスを継承して定義",
          "class ValidationError extends Error {",
          "  // constructorでmessageを受け取り初期化",
          "  constructor(message) {",
          "    // superで親クラスのコンストラクタを呼び出し",
          "    super(message);",
          "    // this.nameにクラス名を設定",
          "    this.name = 'Validationエラー';",
          "  }",
          "}",
          "",
          "// tryでエラー処理を開始",
          "try {",
          "  // ValidationErrorインスタンス（メッセージ'無効な入力'）を投げる",
          "  throw new ValidationError('無効な入力');",
          "// catchでエラーをキャッチ",
          "} catch (e) {",
          "  // consoleのlogメソッドでエラー情報を表示",
          "  console.log(`${e.name}: ${e.message}`);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "class",
            "extends",
            "try",
            "catch",
            "throw",
            "new"
          ],
          "others": ["ValidationError", "Error", "constructor", "message", "super", "this", "name", "Validationエラー", "無効な入力", "e", "console", "log", "}", "// tryでエラー処理を開始", "try {", "(e)", "{", "console.log(`${e.name}:", "{e.message}`"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Validationエラー: 無効な入力\\n"
          }
        ]
      },
    {
      "title": "Symbol",
      "description": "Symbolの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Symbolとは？",
          "content": "# 絶対に重複しないユニークな値\\n\\n**Symbol** は、世界に一つだけの「印」を作る機能です。\\n\\n**身近なたとえ：**\\n指紋は人それぞれ違いますよね。Symbol も同じで、作るたびに必ず違う値になります。同じ名前で作っても、中身は別物です！\\n\\n**なぜ使う？**\\n- プロパティ名の衝突を避けられる\\n- 「隠し」プロパティを作れる\\n\\n**コード例：**\\n```javascript\\nconst id = Symbol('id');\\nconst obj = {\\n  [id]: 12345  // [id] で Symbol をキーにする\\n};\\nconsole.log(obj[id]);  // 12345\\n```"
        }
      ],
      "correctCode": "// Symbol関数を引数'ひみつ'で呼び出しsecretに代入\\nconst secret = Symbol('ひみつ');\\n// userオブジェクトを作成\\nconst user = {\\n  // nameに'たろう'を設定\\n  name: 'たろう',\\n  // ひみつキーにパスワードを設定\\n  [secret]: 'パスワード123'\\n};\\n// consoleのlogメソッドでuser.nameを表示\\nconsole.log(user.name);\\n// consoleのlogメソッドでuserのsecretキーの値を表示\\nconsole.log(user[secret]);",
      "holeyCode": "// Symbol関数を引数'ひみつ'で呼び出しsecretに代入\\n___ ___ = ___('___');\\n// userオブジェクトを作成\\n___ ___ = {\\n  // nameに'たろう'を設定\\n  ___: '___',\\n  // ひみつキーにパスワードを設定\\n  [___]: '___'\\n};\\n// consoleのlogメソッドでuser.nameを表示\\n___.___(___.___);\\n// consoleのlogメソッドでuserのsecretキーの値を表示\\n___.___(___[___]);",
      "correctLines": [
          "// Symbol関数を引数'ひみつ'で呼び出しsecretに代入",
          "const secret = Symbol('ひみつ');",
          "// userオブジェクトを作成",
          "const user = {",
          "  // nameに'たろう'を設定",
          "  name: 'たろう',",
          "  // ひみつキーにパスワードを設定",
          "  [secret]: 'パスワード123'",
          "};",
          "// consoleのlogメソッドでuser.nameを表示",
          "console.log(user.name);",
          "// consoleのlogメソッドでuserのsecretキーの値を表示",
          "console.log(user[secret]);"
        ],
      "lineHints": [
          null,
          "constで定数secretを宣言し、Symbolで'秘密'を作成します。",
          null,
          "constで定数userを宣言し、オブジェクトを代入します。",
          null,
          "nameプロパティに'太郎'を設定します。",
          null,
          "[secret]キーに'パスワード123'を設定します。",
          null,
          null,
          "console.logでuser.nameを出力します。",
          null,
          "console.logでuserのsecretキーの値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "let",
            "var"
          ],
          "others": ["secret", "Symbol", "ひみつ", "user", "name", "たろう", "パスワード123", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\nパスワード123\\n"
          }
        ]
      },
    {
      "title": "WeakMap",
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "WeakMapとは？",
          "content": "# 弱参照のMap\\n\\n**WeakMap** は、オブジェクトをキーにできる特殊な Map です。\\n\\n**「弱参照」って何？**\\nオブジェクトが不要になったら、自動で片付けられる（ガベージコレクション）という意味です。メモリを節約できます！\\n\\n**身近なたとえ：**\\n付箋（メモ）を本に貼るイメージです。本を捨てたら、付箋も一緒に捨てられます。\\n\\n**コード例：**\\n```javascript\\nconst cache = new WeakMap();\\nconst obj = {};\\ncache.set(obj, 'cached value');  // キーはオブジェクト\\nconsole.log(cache.get(obj));     // 'cached value'\\n```\\n\\n**使いどころ：**\\nプライベートなデータを安全に保存したいとき"
        }
      ],
      "correctCode": "// privateDataにWeakMapインスタンスを代入\\nconst privateData = new WeakMap();\\n\\n// Userクラスを定義\\nclass User {\\n  // constructorでnameを受け取り初期化\\n  constructor(name) {\\n    // ひみつデータをWeakMapに保存\\n    privateData.set(this, { password: 'ひみつ' });\\n    // this.nameにnameを代入\\n    this.name = name;\\n  }\\n  getPassword() {\\n    // WeakMapからひみつデータを取得して返す\\n    return privateData.get(this).password;\\n  }\\n}\\n\\n// userにUserインスタンス（引数'たろう'）を代入\\nconst user = new User('たろう');\\n// consoleのlogメソッドでuserのgetPasswordメソッドの結果を表示\\nconsole.log(user.getPassword());",
      "holeyCode": "// privateDataにWeakMapインスタンスを代入\\n___ ___ = ___ ___();\\n___\\n// Userクラスを定義\\n___ ___ {\\n  // constructorでnameを受け取り初期化\\n  ___(___) {\\n    // ひみつデータをWeakMapに保存\\n    ___.___(this, { ___: '___' });\\n    // this.nameにnameを代入\\n    ___.___ = ___;\\n  // ブロックを閉じる\\n  ___\\n  // ブロックを開始\\n  ___() {\\n    // WeakMapからひみつデータを取得して返す\\n    ___ ___.___(this).___;\\n  // ブロックを閉じる\\n  ___\\n// ブロックを閉じる\\n___\\n___\\n// userにUserインスタンス（引数'たろう'）を代入\\n___ ___ = ___ ___('___');\\n// consoleのlogメソッドでuserのgetPasswordメソッドの結果を表示\\n___.___(___.___());",
      "correctLines": [
          "// privateDataにWeakMapインスタンスを代入",
          "const privateData = new WeakMap();",
          "",
          "// Userクラスを定義",
          "class User {",
          "  // constructorでnameを受け取り初期化",
          "  constructor(name) {",
          "    // ひみつデータをWeakMapに保存",
          "    privateData.set(this, { password: 'ひみつ' });",
          "    // this.nameにnameを代入",
          "    this.name = name;",
          "  }",
          "  getPassword() {",
          "    // WeakMapからひみつデータを取得して返す",
          "    return privateData.get(this).password;",
          "  }",
          "}",
          "",
          "// userにUserインスタンス（引数'たろう'）を代入",
          "const user = new User('たろう');",
          "// consoleのlogメソッドでuserのgetPasswordメソッドの結果を表示",
          "console.log(user.getPassword());"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "const",
            "class",
            "new",
            "return"
          ],
          "others": ["privateData", "WeakMap", "User", "constructor", "name", "set", "password", "ひみつ", "this", "getPassword", "get", "user", "たろう", "console", "log", "}", "getPassword() {", "return privateData.get", "userにnew User('たろう')を代入", "// パスワードを取得して表示", "console.log(user.getPassword());", "userにUserインスタンス（引数'たろう'）を代入", "userにUserインスタンス（引数'たろう'）を代入"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ひみつ\\n"
          }
        ]
      },
    {
      "title": "Proxy",
      "description": "Proxyの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Proxyとは？",
          "content": "# 操作を「横取り」する\\n\\n**Proxy** は、オブジェクトへの操作を途中でキャッチして、カスタマイズできる機能です。\\n\\n**身近なたとえ：**\\n「受付係」を想像してください。お客さん（コード）が社員（オブジェクト）に会いたいとき、受付係が間に入って「名前を聞く」「記録を残す」などができます。\\n\\n**できること：**\\n- プロパティにアクセスしたときの処理を変える\\n- 存在しないプロパティに「デフォルト値」を返す\\n- アクセスをログに残す\\n\\n**コード例：**\\n```javascript\\nconst handler = {\\n  get(target, prop) {\\n    // ない場合は 'not found' を返す\\n    return prop in target ? target[prop] : 'not found';\\n  }\\n};\\nconst obj = new Proxy({}, handler);\\n```"
        }
      ],
      "correctCode": "// ハンドラオブジェクトをhandlerに代入\\nconst handler = {\\n  // getトラップを定義\\n  get(target, prop) {\\n    // consoleのlogメソッドでアクセスログを表示\\n    console.log(`Getting ${prop}`);\\n    // targetのpropキーの値を返す\\n    return target[prop];\\n  }\\n};\\n// name:'たろう'を持つオブジェクトをProxyでラップしuserに代入\\nconst user = new Proxy({ name: 'たろう' }, handler);\\n// consoleのlogメソッドでuser.nameを表示\\nconsole.log(user.name);",
      "holeyCode": "// ハンドラオブジェクトをhandlerに代入\\n___ ___ = {\\n  // getトラップを定義\\n  ___(___,___) {\\n    // consoleのlogメソッドでアクセスログを表示\\n    ___.___(`Getting ${___}`);\\n    // targetのpropキーの値を返す\\n    ___ ___[___];\\n  // ブロックを閉じる\\n  ___\\n};\\n// name:'たろう'を持つオブジェクトをProxyでラップしuserに代入\\n___ ___ = ___ ___({ ___: '___' }, ___);\\n// consoleのlogメソッドでuser.nameを表示\\n___.___(___.___);",
      "correctLines": [
          "// ハンドラオブジェクトをhandlerに代入",
          "const handler = {",
          "  // getトラップを定義",
          "  get(target, prop) {",
          "    // consoleのlogメソッドでアクセスログを表示",
          "    console.log(`Getting ${prop}`);",
          "    // targetのpropキーの値を返す",
          "    return target[prop];",
          "  }",
          "};",
          "// name:'たろう'を持つオブジェクトをProxyでラップしuserに代入",
          "const user = new Proxy({ name: 'たろう' }, handler);",
          "// consoleのlogメソッドでuser.nameを表示",
          "console.log(user.name);"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "const",
            "new",
            "return"
          ],
          "others": ["handler", "get", "target", "prop", "console", "log", "Proxy", "user", "name", "たろう", "}", "//", "パティにアクセス"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Getting name\\nたろう\\n"
          }
        ]
      }
  ]
};
