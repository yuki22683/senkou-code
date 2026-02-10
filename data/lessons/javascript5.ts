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
      "correctCode": "// / で正規表現リテラルを定義\\nconst pattern = /javascript/i;\\n// test でマッチをテスト\\nconsole.log(pattern.test('JavaScriptは楽しい'));",
      "holeyCode": "// / で正規表現リテラルを定義\\n___ ___ = /___/___;\\n// test でマッチをテスト\\n___.___(___.___('___'));",
      "correctLines": [
          "// / で正規表現リテラルを定義",
          "const pattern = /javascript/i;",
          "// test でマッチをテスト",
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
      "correctCode": "// 正規表現パターンを定義\\nconst emailPattern = /\\w+@\\w+\\.\\w+/;\\n// test() で 'test@example.com' をテスト\\nconsole.log(emailPattern.test('test@example.com'));\\n// 無効なメールをテスト\\nconsole.log(emailPattern.test('invalid-email'));",
      "holeyCode": "// 正規表現パターンを定義\\n___ ___ = /___/;\\n// test() で 'test@example.com' をテスト\\n___.___(___.___('___'));\\n// 無効なメールをテスト\\n___.___(___.___('___'));",
      "correctLines": [
          "// 正規表現パターンを定義",
          "const emailPattern = /\\w+@\\w+\\.\\w+/;",
          "// test() で 'test@example.com' をテスト",
          "console.log(emailPattern.test('test@example.com'));",
          "// 無効なメールをテスト",
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
      "correctCode": "// 090-1234-5678 を含む文字列を定義\\nconst text = 'Contact: 090-1234-5678 or 080-9876-5432';\\n// match() で 090-1234-5678 と 080-9876-5432 を抽出\\nconst phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);\\n// 結果を出力\\nconsole.log(phones);",
      "holeyCode": "// 090-1234-5678 を含む文字列を定義\\n___ ___ = '___';\\n// match() で 090-1234-5678 と 080-9876-5432 を抽出\\n___ ___ = ___.___(/___/___);\\n// 結果を出力\\n___.___(___);",
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
      "correctCode": "// 'Hello   World' を定義\\nconst text = 'Hello   World';\\n// replace() で連続する空白を1つの空白に置換\\nconst result = text.replace(/\\s+/g, ' ');\\n// 結果を出力\\nconsole.log(result);",
      "holeyCode": "// 'Hello   World' を定義\\n___ ___ = '___';\\n// replace() で連続する空白を1つの空白に置換\\n___ ___ = ___.___(/___/___, '___');\\n// 結果を出力\\n___.___(___);",
      "correctLines": [
          "// 'Hello   World' を定義",
          "const text = 'Hello   World';",
          "// replace() で連続する空白を1つの空白に置換",
          "const result = text.replace(/\\s+/g, ' ');",
          "// 結果を出力",
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
      "correctCode": "// try ブロックを開始\\ntry {\\n  // JSON.parse でパース\\n  const result = JSON.parse('不正なJSON');\\n// catch(e)でエラーをキャッチ\\n} catch (e) {\\n  // エラーメッセージを出力\\n  console.log('エラー:', e.message);",
      "holeyCode": "// try ブロックを開始\\n___ {\\n  // JSON.parse でパース\\n  ___ ___ = ___.___('___');\\n// catch(e)でエラーをキャッチ\\n} ___ (___) {\\n  // エラーメッセージを出力\\n  ___.___('___', ___.___);",
      "correctLines": [
          "// try ブロックを開始",
          "try {",
          "  // JSON.parse でパース",
          "  const result = JSON.parse('不正なJSON');",
          "// catch(e)でエラーをキャッチ",
          "} catch (e) {",
          "  // エラーメッセージを出力",
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
      "correctCode": "// process関数を定義\\nfunction process() {\\n  // try ブロック\\n  try {\\n    console.log('処理中...');\\n    // throw new Error('エラー！')でエラーを投げる\\n    throw new Error('エラー！');\\n  } catch (e) {\\n    // エラーメッセージを出力\\n    console.log('Caught:', e.message);\\n  // finally で常に実行されるブロック\\n  } finally {\\n    console.log('クリーンアップ完了');\\n  }\\n}\\n// 関数を呼び出し\\nprocess();",
      "holeyCode": "// process関数を定義\\n___ ___() {\\n  // try ブロック\\n  ___ {\\n    ___.___('___');\\n    // throw new Error('エラー！')でエラーを投げる\\n    ___ new ___('___');\\n  } ___ (___) {\\n    // エラーメッセージを出力\\n    ___.___('___', ___.___)\\n  // finally で常に実行されるブロック\\n  } ___ {\\n    ___.___('___');\\n  ___\\n___\\n// 関数を呼び出し\\n___();",
      "correctLines": [
          "// process関数を定義",
          "function process() {",
          "  // try ブロック",
          "  try {",
          "    console.log('処理中...');",
          "    // throw new Error('エラー！')でエラーを投げる",
          "    throw new Error('エラー！');",
          "  } catch (e) {",
          "    // エラーメッセージを出力",
          "    console.log('Caught:', e.message);",
          "  // finally で常に実行されるブロック",
          "  } finally {",
          "    console.log('クリーンアップ完了');",
          "  }",
          "}",
          "// 関数を呼び出し",
          "process();"
        ],
      "lineHints": [
          null,
          "functionでprocess関数を定義します。",
          null,
          "tryでエラーが発生する可能性のある処理を開始します。",
          "console.logで'処理中...'を出力します。",
          null,
          "throwでnew Errorを投げます。",
          "catchで変数eでエラーをキャッチします。",
          null,
          "console.logで'Caught:'とe.messageを出力します。",
          null,
          "finallyで常に実行されるブロックを定義します。",
          "console.logで'クリーンアップ完了'を出力します。",
          "finallyブロックを閉じます。",
          "process関数のブロックを閉じます。",
          null,
          "process関数を呼び出します。"
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
          "others": ["process", "console", "log", "処理中...", "Error", "エラー！", "e", "Caught:", "message", "クリーンアップ完了", "}", ";"]
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
      "correctCode": "// extends でErrorクラスを継承\\nclass ValidationError extends Error {\\n  // constructor で初期化\\n  constructor(message) {\\n    // super で親クラスのコンストラクタを呼び出し\\n    super(message);\\n    // this.name にクラス名を設定\\n    this.name = 'Validationエラー';\\n  }\\n}\\n\\n// tryでエラー処理を開始\\ntry {\\n  // throw new ValidationError('無効な入力')でエラーを投げる\\n  throw new ValidationError('無効な入力');\\n// catchでエラーをキャッチ\\n} catch (e) {\\n  // エラー情報を出力\\n  console.log(`${e.name}: ${e.message}`);\\n}",
      "holeyCode": "// extends でErrorクラスを継承\\n___ ___ ___ ___ {\\n  // constructor で初期化\\n  ___(___) {\\n    // super で親クラスのコンストラクタを呼び出し\\n    ___(___);\\n    // this.name にクラス名を設定\\n    ___.___ = '___';\\n  ___\\n___\\n___\\n// tryでエラー処理を開始\\n___ {\\n  // throw new ValidationError('無効な入力')でエラーを投げる\\n  ___ ___ ___('___');\\n// catchでエラーをキャッチ\\n} ___ (___) {\\n  // エラー情報を出力\\n  ___.___(`${___.___}: ${___.___}`);\\n___",
      "correctLines": [
          "// extends でErrorクラスを継承",
          "class ValidationError extends Error {",
          "  // constructor で初期化",
          "  constructor(message) {",
          "    // super で親クラスのコンストラクタを呼び出し",
          "    super(message);",
          "    // this.name にクラス名を設定",
          "    this.name = 'Validationエラー';",
          "  }",
          "}",
          "",
          "// tryでエラー処理を開始",
          "try {",
          "  // throw new ValidationError('無効な入力')でエラーを投げる",
          "  throw new ValidationError('無効な入力');",
          "// catchでエラーをキャッチ",
          "} catch (e) {",
          "  // エラー情報を出力",
          "  console.log(`${e.name}: ${e.message}`);",
          "}"
        ],
      "lineHints": [
          null,
          "classでValidationErrorを定義し、extendsでErrorを継承します。",
          null,
          "constructorで引数messageを受け取ります。",
          null,
          "superで親クラスのコンストラクタにmessageを渡します。",
          null,
          "this.nameに'Validationエラー'を設定します。",
          "constructorのブロックを閉じます。",
          "ValidationErrorクラスのブロックを閉じます。",
          null,
          null,
          "tryでエラー処理を開始します。",
          null,
          "throwでnew ValidationErrorを投げます。",
          null,
          "catchで変数eでエラーをキャッチします。",
          null,
          "console.logでe.nameとe.messageを出力します。",
          "catchブロックを閉じます。"
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
          "others": ["ValidationError", "Error", "constructor", "message", "super", "this", "name", "Validationエラー", "無効な入力", "e", "console", "log", "}"]
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
      "correctCode": "// Symbol('秘密')でsecretを作成\\nconst secret = Symbol('秘密');\\n// userオブジェクトを作成\\nconst user = {\\n  // nameに'太郎'を設定\\n  name: '太郎',\\n  // [secret]に'パスワード123'を設定\\n  [secret]: 'パスワード123'\\n};\\n// user.nameをconsole.logで出力\\nconsole.log(user.name);\\n// user[secret]をconsole.logで出力\\nconsole.log(user[secret]);",
      "holeyCode": "// Symbol('秘密')でsecretを作成\\n___ ___ = ___('___');\\n// userオブジェクトを作成\\n___ ___ = {\\n  // nameに'太郎'を設定\\n  ___: '___',\\n  // [secret]に'パスワード123'を設定\\n  [___]: '___'\\n};\\n// user.nameをconsole.logで出力\\n___.___(___.___);\\n// user[secret]をconsole.logで出力\\n___.___(___[___]);",
      "correctLines": [
          "// Symbol('秘密')でsecretを作成",
          "const secret = Symbol('秘密');",
          "// userオブジェクトを作成",
          "const user = {",
          "  // nameに'太郎'を設定",
          "  name: '太郎',",
          "  // [secret]に'パスワード123'を設定",
          "  [secret]: 'パスワード123'",
          "};",
          "// user.nameをconsole.logで出力",
          "console.log(user.name);",
          "// user[secret]をconsole.logで出力",
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
          "console.logでuser[secret]を出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "let",
            "var"
          ],
          "others": ["secret", "Symbol", "秘密", "user", "name", "太郎", "パスワード123", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎\\nパスワード123\\n"
          }
        ]
      },
    {
      "title": "WeakMap",
      "correctCode": "// privateDataにnew WeakMap()を代入\\nconst privateData = new WeakMap();\\n\\n// Userクラスを定義\\nclass User {\\n  // constructorでnameを初期化\\n  constructor(name) {\\n    // privateData.set()でデータを設定\\n    privateData.set(this, { password: '秘密' });\\n    // this.nameにnameを代入\\n    this.name = name;\\n  }\\n  getPassword() {\\n    // privateData.get()でデータを取得\\n    return privateData.get(this).password;\\n  }\\n}\\n\\n// userにnew User('太郎')を代入\\nconst user = new User('太郎');\\n// getPassword()を呼び出し\\nconsole.log(user.getPassword());",
      "holeyCode": "// privateDataにnew WeakMap()を代入\\n___ ___ = ___ ___();\\n___\\n// Userクラスを定義\\n___ ___ {\\n  // constructorでnameを初期化\\n  ___(___) {\\n    // privateData.set()でデータを設定\\n    ___.___(this, { ___: '___' });\\n    // this.nameにnameを代入\\n    ___.___ = ___;\\n  ___\\n  ___() {\\n    // privateData.get()でデータを取得\\n    ___ ___.___(this).___;\\n  ___\\n___\\n___\\n// userにnew User('太郎')を代入\\n___ ___ = ___ ___('___');\\n// getPassword()を呼び出し\\n___.___(___.___());",
      "correctLines": [
          "// privateDataにnew WeakMap()を代入",
          "const privateData = new WeakMap();",
          "",
          "// Userクラスを定義",
          "class User {",
          "  // constructorでnameを初期化",
          "  constructor(name) {",
          "    // privateData.set()でデータを設定",
          "    privateData.set(this, { password: '秘密' });",
          "    // this.nameにnameを代入",
          "    this.name = name;",
          "  }",
          "  getPassword() {",
          "    // privateData.get()でデータを取得",
          "    return privateData.get(this).password;",
          "  }",
          "}",
          "",
          "// userにnew User('太郎')を代入",
          "const user = new User('太郎');",
          "// getPassword()を呼び出し",
          "console.log(user.getPassword());"
        ],
      "lineHints": [
          null,
          "constで定数privateDataを宣言し、new WeakMap()を代入します。",
          null,
          null,
          "classでUserクラスを定義します。",
          null,
          "constructorで引数nameを受け取ります。",
          null,
          "privateData.setでthisをキーに{ password: '秘密' }を設定します。",
          null,
          "this.nameにnameを代入します。",
          "constructorのブロックを閉じます。",
          "getPasswordメソッドを定義します。",
          null,
          "returnでprivateData.get(this).passwordを返します。",
          "getPasswordメソッドのブロックを閉じます。",
          "Userクラスのブロックを閉じます。",
          null,
          null,
          "constで定数userを宣言し、new User('太郎')を代入します。",
          null,
          "console.logでuser.getPassword()の結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "class",
            "new",
            "return"
          ],
          "others": ["privateData", "WeakMap", "User", "constructor", "name", "set", "password", "秘密", "this", "getPassword", "get", "user", "太郎", "console", "log", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "秘密\\n"
          }
        ]
      },
    {
      "title": "Proxy",
      "correctCode": "// ハンドラオブジェクトを定義\\nconst handler = {\\n  // get トラップを定義\\n  get(target, prop) {\\n    // アクセスをログ出力\\n    console.log(`Getting ${prop}`);\\n    // return でプロパティ値を返す\\n    return target[prop];\\n  }\\n};\\n// name: '太郎' を持つオブジェクトの操作をインターセプト\\nconst user = new Proxy({ name: '太郎' }, handler);\\n// name プロパティにアクセス\\nconsole.log(user.name);",
      "holeyCode": "// ハンドラオブジェクトを定義\\n___ ___ = {\\n  // get トラップを定義\\n  ___(___,___) {\\n    // アクセスをログ出力\\n    ___.___(`Getting ${___}`);\\n    // return でプロパティ値を返す\\n    ___ ___[___];\\n  ___\\n};\\n// name: '太郎' を持つオブジェクトの操作をインターセプト\\n___ ___ = ___ ___({ ___: '___' }, ___);\\n// name プロパティにアクセス\\n___.___(___.___);",
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
          "// name: '太郎' を持つオブジェクトの操作をインターセプト",
          "const user = new Proxy({ name: '太郎' }, handler);",
          "// name プロパティにアクセス",
          "console.log(user.name);"
        ],
      "lineHints": [
          null,
          "constで定数handlerを宣言し、オブジェクトを代入します。",
          null,
          "getメソッドを定義し、引数targetとpropを受け取ります。",
          null,
          "console.logで`Getting ${prop}`を出力します。",
          null,
          "returnでtarget[prop]を返します。",
          "getメソッドのブロックを閉じます。",
          null,
          null,
          "constで定数userを宣言し、new Proxyを代入します。",
          null,
          "console.logでuser.nameを出力します。"
        ],
        "candidates": {
          "keywords": [
            "const",
            "new",
            "return"
          ],
          "others": ["handler", "get", "target", "prop", "console", "log", "Proxy", "user", "name", "太郎", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Getting name\\n太郎\\n"
          }
        ]
      }
  ]
};
