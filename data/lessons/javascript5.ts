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
      "correctCode": "// / で正規表現リテラルを定義\\nconst pattern = /javascript/i;\\n// test でマッチをテスト\\nconsole.log(pattern.test('I love JavaScript'));",
      "holeyCode": "// / で正規表現リテラルを定義\\nconst pattern = ___javascript/i;\\n// test でマッチをテスト\\nconsole.log(pattern.___('I love JavaScript'));",
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
            "expected_output": "true\\n"
          }
        ]
      },
    {
      "title": "test()メソッド",
      "correctCode": "// 正規表現パターンを定義\\nconst emailPattern = /\\w+@\\w+\\.\\w+/;\\n// test() で 'test@example.com' をテスト\\nconsole.log(emailPattern.test('test@example.com'));\\n// 無効なメールをテスト\\nconsole.log(emailPattern.test('invalid-email'));",
      "holeyCode": "// 正規表現パターンを定義\\nconst emailPattern = ___\\w+@\\w+\\.\\w+/;\\n// test() で 'test@example.com' をテスト\\nconsole.log(emailPattern.___('test@example.com'));\\n// 無効なメールをテスト\\nconsole.log(emailPattern.test('___'));",
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
          "others": ["/", "test", "invalid-email"]
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
      "holeyCode": "// 090-1234-5678 を含む文字列を定義\\nconst text = 'Contact: ___-1234-5678 or 080-9876-5432';\\n// match() で 090-1234-5678 と 080-9876-5432 を抽出\\nconst phones = text.___(___\\d{3}-\\d{4}-\\d{4}/g);\\n// 結果を出力\\nconsole.___(phones);",
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
            "expected_output": "[ '090-1234-5678', '080-9876-5432' ]\\n"
          }
        ]
      },
    {
      "title": "replace()メソッド",
      "correctCode": "// 'こんにちは   世界   JavaScript' を定義\\nconst text = 'こんにちは   世界   JavaScript';\\n// replace() で連続する空白を1つの空白に置換\\nconst result = text.replace(/\\s+/g, ' ');\\n// 結果を出力\\nconsole.log(result);",
      "holeyCode": "// 'こんにちは   世界   JavaScript' を定義\\nconst text = '___   世界   JavaScript';\\n// replace() で連続する空白を1つの空白に置換\\nconst result = text.___(___\\s+/g, ' ');\\n// 結果を出力\\nconsole.___(result);",
      "correctLines": [
          "// 'こんにちは   世界   JavaScript' を定義",
          "const text = 'こんにちは   世界   JavaScript';",
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
          "others": ["replace", "log", "こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは 世界 JavaScript\\n"
          }
        ]
      },
    {
      "title": "try-catch文",
      "correctCode": "// try ブロックを開始\\ntry {\\n  // JSON.parse でパース\\n  const result = JSON.parse('不正なJSON');\\n// catch(e)でエラーをキャッチ\\n} catch (e) {\\n  // エラーメッセージを出力\\n  console.log('エラー:', e.message);",
      "holeyCode": "// try ブロックを開始\\n___ {\\n  // JSON.parse でパース\\n  const result = JSON.___('不正なJSON');\\n// catch(e)でエラーをキャッチ\\n} ___ (e) {\\n  // エラーメッセージを出力\\n  console.log('エラー:', e.___);",
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
          "エラーが発生する可能性のある処理をここから記述します。",
          null,
          "JSON.parse でJSONをパースします。",
          null,
          "エラー（例外）が発生した場合の処理を記述します。",
          null,
          "コンソールに文字列を出力します。"
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
            "expected_output": "エラー: Unexpected token i in JSON at position 0\\n"
          }
        ]
      },
    {
      "title": "finally節",
      "correctCode": "// process関数を定義\\nfunction process() {\\n  // try ブロック\\n  try {\\n    console.log('処理中...');\\n    // throw new Error('エラー！')でエラーを投げる\\n    throw new Error('エラー！');\\n  } catch (e) {\\n    // エラーメッセージを出力\\n    console.log('Caught:', e.message);\\n  // finally で常に実行されるブロック\\n  } finally {\\n    console.log('クリーンアップ完了');\\n  }\\n}\\n// 関数を呼び出し\\nprocess();",
      "holeyCode": "// process関数を定義\\n___ process() {\\n  // try ブロック\\n  ___ {\\n    ___('処理中...');\\n    // throw new Error('エラー！')でエラーを投げる\\n    ___ new Error('エラー！');\\n  ___\\n    // エラーメッセージを出力\\n    console.log('Caught:', e.___);\\n  // finally で常に実行されるブロック\\n  } ___ {\\n    ___('クリーンアップ完了');\\n  ___\\n___\\n// 関数を呼び出し\\n___();",
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
          "function で関数を定義します。",
          null,
          "エラーが発生する可能性のある処理をここから記述します。",
          "console.log で結果を表示します。",
          null,
          "コンソールに文字列を出力します。",
          "この行を正しく入力してください。",
          null,
          "関数（process）を呼び出して実行します。",
          null,
          "例外の有無に関わらず必ず実行する処理を定義する。",
          "console.log で結果を表示します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "関数（process）を呼び出して実行する。"
        ],
        "candidates": {
          "keywords": [
            "finally",
            "always",
            "end"
          ],
          "others": ["function", "try", "throw", "message", "process", "console.log", "} catch (e) {", "} catch (e) {", "}"]
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
      "holeyCode": "// extends でErrorクラスを継承\\nclass ValidationError ___ Error {\\n  // constructor で初期化\\n  ___(message) {\\n    // super で親クラスのコンストラクタを呼び出し\\n    ___(message);\\n    // this.name にクラス名を設定\\n    this.___ = 'Validationエラー';\\n  ___\\n___\\n___\\n// tryでエラー処理を開始\\n___ {\\n  // throw new ValidationError('無効な入力')でエラーを投げる\\n  ___ new ValidationError('無効な入力');\\n// catchでエラーをキャッチ\\n} ___(e) {\\n  // エラー情報を出力\\n  console.log(`${e.___}: ${e.___}`);\\n___",
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
          "新しいクラス（ValidationError）を定義します。",
          null,
          "constructor で初期化します。",
          null,
          "super で親クラスを呼び出します。",
          null,
          "this.name に名前を設定します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "例外が発生する可能性のある処理を開始する。",
          null,
          "ここを正しく入力してください。",
          null,
          "catch で例外をキャッチします。",
          null,
          "console.log で結果を表示します。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "inherits"
          ],
          "others": ["constructor", "super", "name", "message", "try", "throw", "catch", "}", "", "}"]
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
      "holeyCode": "// Symbol('秘密')でsecretを作成\\nconst secret = ___('秘密');\\n// userオブジェクトを作成\\n___\\n  // nameに'太郎'を設定\\n  name: '___',\\n  // [secret]に'パスワード123'を設定\\n  [secret]: '___'\\n___;\\n// user.nameをconsole.logで出力\\nconsole.log(user.___);\\n// user[secret]をconsole.logで出力\\nconsole.log(user[___]);",
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
          "ユニークな識別子を作る関数です。",
          null,
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "'パスワード123' を設定します。",
          "この行を正しく入力してください。",
          null,
          "user.name を出力します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Symbol",
            "Unique",
            "Key"
          ],
          "others": ["パスワード123", "name", "secret", "太郎", "const user = {", "const user = {", "}"]
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
      "holeyCode": "// privateDataにnew WeakMap()を代入\\nconst privateData = new ___();\\n___\\n// Userクラスを定義\\n___ User {\\n  // constructorでnameを初期化\\n  ___(name) {\\n    // privateData.set()でデータを設定\\n    privateData.___(this, { password: '秘密' });\\n    // this.nameにnameを代入\\n    this.___ = name;\\n  ___\\n  ___\\n    // privateData.get()でデータを取得\\n    return privateData.___(this).password;\\n  ___\\n___\\n___\\n// userにnew User('太郎')を代入\\nconst user = ___ User('太郎');\\n// getPassword()を呼び出し\\nconsole.log(user.___());",
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
          "弱参照のMapを作成します。",
          null,
          null,
          "新しいクラス（User）を定義します。",
          null,
          "constructor で初期化します。",
          null,
          "set でデータを設定します。",
          null,
          "this.name に名前を代入します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "get でデータを取得します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "WeakMap",
            "Map",
            "HashMap"
          ],
          "others": ["class", "constructor", "set", "name", "get", "new", "getPassword", "getPassword() {", "", "}", "getPassword() {"]
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
      "holeyCode": "// ハンドラオブジェクトを定義\\n___\\n  // get トラップを定義\\n  ___(target, prop) {\\n    // アクセスをログ出力\\n    console.log(`Getting ${___}`);\\n    // return でプロパティ値を返す\\n    ___ target[prop];\\n  ___\\n___;\\n// name: '太郎' を持つオブジェクトの操作をインターセプト\\nconst user = new ___({ name: '太郎' }, handler);\\n// name プロパティにアクセス\\nconsole.log(user.___);",
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
          "この行を正しく入力してください。",
          null,
          "コンソールに文字列を出力します。",
          null,
          "return でプロパティ値を返します。",
          null,
          "Proxyを作成します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Proxy",
            "Handler",
            "Wrapper"
          ],
          "others": ["get", "prop", "return", "name", "const handler = {", "const handler = {", "}", "}", "}", "}\\"]
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
