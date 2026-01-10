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
          "title": "正規表現リテラル",
          "image": "/illustrations/3d/robot.png",
          "content": "# パターンを定義する\n\n**/pattern/**で正規表現を定義します。\n\n```javascript\nconst pattern = /hello/;\nconsole.log(pattern.test('hello world')); // true\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// / で正規表現リテラルを定義\nconst pattern = /javascript/i;\nconsole.log(pattern.test('I love JavaScript'));",
      "holeyCode": "// / で正規表現リテラルを定義\nconst pattern = ___javascript/i;\n// test でマッチをテスト\nconsole.log(pattern.___('I love JavaScript'));",
      "correctLines": [
        "const pattern = /javascript/i;",
        "console.log(pattern.test('I love JavaScript'));"
      ],
      "lineHints": [
        "正規表現はスラッシュで囲みます。",
        null
      ],
      "candidates": {
        "keywords": ["/", "\"", "'"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "true\n"
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
          "title": "test()メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# マッチするかチェック\n\n**test()**は、パターンにマッチするかtrue/falseで返します。\n\n```javascript\nconst pattern = /\\d+/;\nconsole.log(pattern.test('abc123')); // true\nconsole.log(pattern.test('abc')); // false\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const emailPattern = /\\w+@\\w+\\.\\w+/;\n// test( でマッチをテスト\nconsole.log(emailPattern.test('test@example.com'));\nconsole.log(emailPattern.test('invalid-email'));",
      "holeyCode": "// 正規表現パターンを定義\nconst emailPattern = ___\\w+@\\w+\\.\\w+/;\n// test( でマッチをテスト\nconsole.log(emailPattern.___)('test@example.com'));\n// 無効なメールをテスト\nconsole.log(emailPattern.test('___'));",
      "correctLines": [
        "const emailPattern = /\\w+@\\w+\\.\\w+/;",
        "console.log(emailPattern.test('test@example.com'));",
        "console.log(emailPattern.test('invalid-email'));"
      ],
      "lineHints": [
        null,
        "マッチをテストするメソッドです。",
        null
      ],
      "candidates": {
        "keywords": ["test(", "match(", "exec("]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "true\nfalse\n"
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
          "title": "match()メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# マッチした部分を取得\n\n**match()**は、マッチした部分を配列で返します。\n\n```javascript\nconst text = 'I have 3 apples and 5 oranges';\nconst numbers = text.match(/\\d+/g);\nconsole.log(numbers); // ['3', '5']\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const text = 'Contact: 090-1234-5678 or 080-9876-5432';\n// match( と / でパターンマッチ\nconst phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);\nconsole.log(phones);",
      "holeyCode": "// 文字列を定義\nconst text = 'Contact: ___-1234-5678 or 080-9876-5432';\n// match( と / でパターンマッチ\nconst phones = text.___(___\\d{3}-\\d{4}-\\d{4}/g);\n// 結果を出力\nconsole.___(phones);",
      "correctLines": [
        "const text = 'Contact: 090-1234-5678 or 080-9876-5432';",
        "const phones = text.match(/\\d{3}-\\d{4}-\\d{4}/g);",
        "console.log(phones);"
      ],
      "lineHints": [
        null,
        "match()と正規表現リテラルを使います。",
        null
      ],
      "candidates": {
        "keywords": ["match(", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[ '090-1234-5678', '080-9876-5432' ]\n"
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
          "title": "replace()メソッド",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# マッチした部分を置換\n\n**replace()**で正規表現にマッチした部分を置換できます。\n\n```javascript\nconst text = 'hello world';\nconst result = text.replace(/world/, 'JavaScript');\nconsole.log(result); // hello JavaScript\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const text = 'Hello   World   JavaScript';\n// replace( と / で置換\nconst result = text.replace(/\\s+/g, ' ');\nconsole.log(result);",
      "holeyCode": "// 文字列を定義\nconst text = '___   World   JavaScript';\n// replace( と / で置換\nconst result = text.___(___\\s+/g, ' ');\n// 結果を出力\nconsole.___(result);",
      "correctLines": [
        "const text = 'Hello   World   JavaScript';",
        "const result = text.replace(/\\s+/g, ' ');",
        "console.log(result);"
      ],
      "lineHints": [
        null,
        "replace()と正規表現を使います。",
        null
      ],
      "candidates": {
        "keywords": ["replace(", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello World JavaScript\n"
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
          "title": "try-catch文",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# エラーをキャッチする\n\n**try-catch**でエラーをキャッチして適切に処理できます。\n\n```javascript\ntry {\n  throw new Error('Something went wrong');\n} catch (e) {\n  console.log(e.message);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "try {\n  const result = JSON.parse('invalid json');\n// catch でエラーをキャッチ\n} catch (e) {\n  console.log('Error:', e.message);\n}",
      "holeyCode": "// try ブロックを開始\n___ {\n  // JSON.parse でパース\n  const result = JSON.___('invalid json');\n// catch でエラーをキャッチ\n} ___ (e) {\n  // エラーメッセージを出力\n  console.log('Error:', e.___);",
      "correctLines": [
        "try {",
        "  const result = JSON.parse('invalid json');",
        "} catch (e) {",
        "  console.log('Error:', e.message);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "エラーをキャッチするキーワードです。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["catch", "except", "handle"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Error: Unexpected token 'i', \"invalid json\" is not valid JSON\n"
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
          "title": "finally節",
          "image": "/illustrations/3d/robot.png",
          "content": "# 常に実行される\n\n**finally**はエラーの有無に関わらず必ず実行されます。\n\n```javascript\ntry {\n  // 処理\n} catch (e) {\n  // エラー処理\n} finally {\n  // 必ず実行\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function process() {\n  try {\n    console.log('Processing...');\n    throw new Error('Error!');\n  } catch (e) {\n    console.log('Caught:', e.message);\n  // finally で常に実行されるブロック\n  } finally {\n    console.log('Cleanup done');\n  }\n}\nprocess();",
      "holeyCode": "// function で関数を定義\n___ process() {\n  // try ブロック\n  ___ {\n    console.log('Processing...');\n    // throw でエラーを投げる\n    ___ new Error('Error!');\n  } catch (e) {\n    // エラーメッセージを出力\n    console.log('Caught:', e.___);\n  // finally で常に実行されるブロック\n  } ___ {\n    console.log('Cleanup done');\n  }\n}\n// 関数を呼び出し\n___();",
      "correctLines": [
        "function process() {",
        "  try {",
        "    console.log('Processing...');",
        "    throw new Error('Error!');",
        "  } catch (e) {",
        "    console.log('Caught:', e.message);",
        "  } finally {",
        "    console.log('Cleanup done');",
        "  }",
        "}",
        "process();"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "常に実行されるブロックです。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["finally", "always", "end"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Processing...\nCaught: Error!\nCleanup done\n"
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
          "title": "カスタムエラー",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 独自のエラーを定義\n\nErrorクラスを継承して独自のエラーを作れます。\n\n```javascript\nclass ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'ValidationError';\n  }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// extends でErrorクラスを継承\nclass ValidationError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = 'ValidationError';\n  }\n}\n\ntry {\n  throw new ValidationError('Invalid input');\n} catch (e) {\n  console.log(`${e.name}: ${e.message}`);\n}",
      "holeyCode": "// extends でErrorクラスを継承\nclass ValidationError ___ Error {\n  // constructor で初期化\n  ___(message) {\n    // super で親クラスのコンストラクタを呼び出し\n    ___(message);\n    // this.name にクラス名を設定\n    this.___ = 'ValidationError';\n  }\n}\n\n// try でエラーを試行\n___ {\n  // throw でエラーを投げる\n  ___ new ValidationError('Invalid input');\n} catch (e) {\n  // エラー情報を出力\n  console.log(`${e.___}: ${e.message}`);\n}",
      "correctLines": [
        "class ValidationError extends Error {",
        "  constructor(message) {",
        "    super(message);",
        "    this.name = 'ValidationError';",
        "  }",
        "}",
        "",
        "try {",
        "  throw new ValidationError('Invalid input');",
        "} catch (e) {",
        "  console.log(`${e.name}: ${e.message}`);",
        "}"
      ],
      "lineHints": [
        "クラスを継承するキーワードです。",
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
        "keywords": ["extends", "implements", "inherits"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "ValidationError: Invalid input\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# ユニークな識別子\n\n**Symbol**は一意の識別子を作成します。\n\n```javascript\nconst id = Symbol('id');\nconst obj = {\n  [id]: 12345\n};\nconsole.log(obj[id]); // 12345\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Symbol でユニークな識別子を作成\nconst secret = Symbol('secret');\nconst user = {\n  name: 'Taro',\n  [secret]: 'password123'\n};\nconsole.log(user.name);\nconsole.log(user[secret]);",
      "holeyCode": "// Symbol でユニークな識別子を作成\nconst secret = ___('secret');\n// オブジェクトを定義\nconst user = {\n  // name プロパティ\n  name: '___',\n  // 計算プロパティ名でシークレットを設定\n  [secret]: '___'\n};\n// name を出力\nconsole.log(user.___);\n// secret を出力\nconsole.log(user[___]);",
      "correctLines": [
        "const secret = Symbol('secret');",
        "const user = {",
        "  name: 'Taro',",
        "  [secret]: 'password123'",
        "};",
        "console.log(user.name);",
        "console.log(user[secret]);"
      ],
      "lineHints": [
        "ユニークな識別子を作る関数です。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["Symbol", "Unique", "Key"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Taro\npassword123\n"
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
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 弱参照のMap\n\n**WeakMap**はキーがオブジェクトで、弱参照のため不要になると自動でガベージコレクションされます。\n\n```javascript\nconst cache = new WeakMap();\nconst obj = {};\ncache.set(obj, 'cached value');\nconsole.log(cache.get(obj));\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// WeakMap で弱参照のMapを作成\nconst privateData = new WeakMap();\n\nclass User {\n  constructor(name) {\n    privateData.set(this, { password: 'secret' });\n    this.name = name;\n  }\n  getPassword() {\n    return privateData.get(this).password;\n  }\n}\n\nconst user = new User('Taro');\nconsole.log(user.getPassword());",
      "holeyCode": "// WeakMap で弱参照のMapを作成\nconst privateData = new ___();\n\n// class でクラスを定義\n___ User {\n  // constructor で初期化\n  ___(name) {\n    // set でプライベートデータを設定\n    privateData.___(this, { password: 'secret' });\n    // this.name に名前を代入\n    this.___ = name;\n  }\n  getPassword() {\n    // get でプライベートデータを取得\n    return privateData.___(this).password;\n  }\n}\n\n// new でインスタンスを作成\nconst user = ___ User('Taro');\n// getPassword() を呼び出し\nconsole.log(user.___());",
      "correctLines": [
        "const privateData = new WeakMap();",
        "",
        "class User {",
        "  constructor(name) {",
        "    privateData.set(this, { password: 'secret' });",
        "    this.name = name;",
        "  }",
        "  getPassword() {",
        "    return privateData.get(this).password;",
        "  }",
        "}",
        "",
        "const user = new User('Taro');",
        "console.log(user.getPassword());"
      ],
      "lineHints": [
        "弱参照のMapを作成します。",
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
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["WeakMap", "Map", "HashMap"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "secret\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 操作をインターセプト\n\n**Proxy**でオブジェクトの操作をインターセプトできます。\n\n```javascript\nconst handler = {\n  get(target, prop) {\n    return prop in target ? target[prop] : 'not found';\n  }\n};\nconst obj = new Proxy({}, handler);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const handler = {\n  get(target, prop) {\n    console.log(`Getting ${prop}`);\n    return target[prop];\n  }\n};\n// Proxy で操作をインターセプト\nconst user = new Proxy({ name: 'Taro' }, handler);\nconsole.log(user.name);",
      "holeyCode": "// ハンドラオブジェクトを定義\nconst handler = {\n  // get トラップを定義\n  ___(target, prop) {\n    // アクセスをログ出力\n    console.log(`Getting ${___}`);\n    // return でプロパティ値を返す\n    ___ target[prop];\n  }\n};\n// Proxy で操作をインターセプト\nconst user = new ___({ name: 'Taro' }, handler);\n// name プロパティにアクセス\nconsole.log(user.___);",
      "correctLines": [
        "const handler = {",
        "  get(target, prop) {",
        "    console.log(`Getting ${prop}`);",
        "    return target[prop];",
        "  }",
        "};",
        "",
        "const user = new Proxy({ name: 'Taro' }, handler);",
        "console.log(user.name);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Proxyを作成します。",
        null
      ],
      "candidates": {
        "keywords": ["Proxy", "Handler", "Wrapper"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Getting name\nTaro\n"
        }
      ]
    }
  ]
};
