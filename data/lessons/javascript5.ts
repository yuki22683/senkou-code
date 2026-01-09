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
      "holeyCode": "// / と入力して、文字のパターンを囲んでね\n___\n___",
      "correctLines": [
        
        
        "// / と入力して、文字のパターンを囲んでね",
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
      "holeyCode": "___\n// test と入力して、合ってるか調べてね\n___\n___",
      "correctLines": [
        
        
        "const emailPattern = /\\w+@\\w+\\.\\w+/;",
        "// test と入力して、合ってるか調べてね",
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
      "holeyCode": "___\n// match と / を入力して、番号を探しましょう\n___\n___",
      "correctLines": [
        
        
        "const text = 'Contact: 090-1234-5678 or 080-9876-5432';",
        "// match と / を入力して、番号を探しましょう",
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
      "holeyCode": "___\n// replace と / を入力して、入れかえてね\n___\n___",
      "correctLines": [
        
        
        "const text = 'Hello   World   JavaScript';",
        "// replace と / を入力して、入れかえてね",
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
      "holeyCode": "___\n  ___\n___\n  ___\n___",
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
      "holeyCode": "___\n  ___\n    ___\n    ___\n  ___\n    ___\n  ___\n    ___\n  ___\n___\n___",
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
      "holeyCode": "___\n  ___\n    ___\n    ___\n  ___\n___\n\n___\n  ___\n___\n  ___\n___",
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
      "holeyCode": "___\n___",
      "correctLines": [
        ""const secret = Symbol('secret');",\n        "const user = {",\n        "  name: 'Taro'",
        "",\n        "  [secret"
      ]: 'password123'",
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
      "holeyCode": "___\n\n___\n  ___\n    ___\n    ___\n  ___\n  ___\n    ___\n  ___\n___\n\n___\n___",
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
      "holeyCode": "___\n___",
      "correctLines": [
        ""const handler = {",\n        "  get(target",
        "prop) {",\n        "    console.log(`Getting ${prop}`);",\n        "    return target[prop"
      ];",
        "  }",
        "};",
        "",
        "// Proxy と入力して、見張り役を作ってね",
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
