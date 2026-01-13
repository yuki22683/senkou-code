export const javascriptData3 = {
  "language": "javascript",
  "lessonId": "javascript-3",
  "lessonTitle": "JavaScript III - 非同期処理",
  "lessonDescription": "JavaScriptの非同期処理を学びます。Promise、async/await、そしてモダンなJavaScriptの機能を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "Promise の基本",
      "description": "非同期処理を扱うPromiseを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "Promise とは？",
          "image": "/illustrations/3d/task_async.png",
          "content": "# 非同期処理の約束\n\n非同期処理とは、時間のかかる処理（通信やファイル読み込みなど）を待たずに次の処理を進める仕組みです。**Promise** は、その処理が将来完了することを表すオブジェクトです。\n\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  resolve('成功！');\n});\n```"
        },
        {
          "title": "then で結果を受け取る",
          "image": "/illustrations/3d/task_async.png",
          "content": "# then メソッド\n\n`.then()` で成功時の処理、`.catch()` で失敗時の処理を書きます。\n\n```javascript\npromise\n  .then(result => console.log(result))\n  .catch(error => console.log(error));\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// Promise コンストラクタで作成\nconst p = new Promise((resolve) => {\n  // 'Hello Promise!' で解決\n  resolve('Hello Promise!');\n});\n\n// then でコールバックを登録\np.then(msg => console.log(msg));",
      "holeyCode": "// Promise コンストラクタで作成\nconst p = new ___((resolve) => {\n  // 'Hello Promise!' で解決\n  ___('Hello Promise!');\n});\n\n// then でコールバックを登録\np.___(msg => console.log(msg));",
      "correctLines": [
        "// Promise コンストラクタで作成",
        "const p = new Promise((resolve) => {",
        "  resolve('Hello Promise!');",
        "});",
        "",
        "p.then(msg => console.log(msg));"
      ],
      "lineHints": [
        null,
        "Promise コンストラクタを使います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["Promise", "Function", "Object"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello Promise!\n"
        }
      ]
    },
    {
      "title": "Promise.resolve",
      "description": "即座に解決するPromiseを作りましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "Promise.resolve とは？",
          "image": "/illustrations/3d/task_async.png",
          "content": "# 即座に解決するPromise\n\n`Promise.resolve()` は、すぐに成功状態のPromiseを作ります。\n\n```javascript\nPromise.resolve('即座に完了')\n  .then(msg => console.log(msg));\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/task_async.png",
          "content": "# 統一的なインターフェース\n\n同期的な値もPromiseとして扱いたいときに便利です。\n\n```javascript\nfunction getData(useCache) {\n  if (useCache) {\n    return Promise.resolve(cachedData);\n  }\n  return fetch('/api/data');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// resolve で即座に解決するPromise\nPromise.resolve(42)\n  // then で結果を処理\n  .then(n => console.log(n * 2));",
      "holeyCode": "// resolve で即座に解決するPromise\nPromise.___(42)\n  // then で結果を処理\n  .___(n => console.log(n * 2));",
      "correctLines": [
        "// resolve で即座に解決するPromise",
        "Promise.resolve(42)",
        "  .then(n => console.log(n * 2));"
      ],
      "lineHints": [
        null,
        "resolve で即座に解決します。",
        null
      ],
      "candidates": {
        "methods": ["resolve", "reject", "all"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "84\n"
        }
      ]
    },
    {
      "title": "async 関数",
      "description": "async キーワードで非同期関数を定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "async とは？",
          "image": "/illustrations/3d/task_async.png",
          "content": "# 非同期関数を定義\n\n**async** を付けると、関数は自動的にPromiseを返します。\n\n```javascript\nasync function hello() {\n  return 'Hello!';\n}\n// hello() は Promise を返す\n```"
        },
        {
          "title": "async の使い方",
          "image": "/illustrations/3d/task_async.png",
          "content": "# 戻り値は自動でPromiseに包まれる\n\n```javascript\nasync function getData() {\n  return { name: 'Alice' };\n}\n\ngetData().then(data => console.log(data.name));\n// Alice\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// async キーワードで非同期関数を定義\nasync function getMessage() {\n  // return で値を返す\n  return 'Async works!';\n}\n\n// then でメッセージを出力\ngetMessage().then(msg => console.log(msg));",
      "holeyCode": "// async キーワードで非同期関数を定義\n___ function getMessage() {\n  // return で値を返す\n  ___ 'Async works!';\n}\n\n// then でメッセージを出力\ngetMessage().___(msg => console.log(msg));",
      "correctLines": [
        "// async キーワードで非同期関数を定義",
        "async function getMessage() {",
        "  return 'Async works!';",
        "}",
        "",
        "getMessage().then(msg => console.log(msg));"
      ],
      "lineHints": [
        null,
        "async キーワードで非同期関数にします。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["async", "await", "function"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Async works!\n"
        }
      ]
    },
    {
      "title": "await で待機",
      "description": "Promiseの結果を待つawaitを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "await とは？",
          "image": "/illustrations/3d/task_async.png",
          "content": "# Promiseの完了を待つ\n\n**await** を使うと、Promiseの結果を待ってから次の処理に進みます。\n\n```javascript\nasync function main() {\n  const result = await Promise.resolve('完了');\n  console.log(result);\n}\n```"
        },
        {
          "title": "await の注意点",
          "image": "/illustrations/3d/task_async.png",
          "content": "# async関数内でのみ使用可能\n\nawait は async 関数の中でしか使えません。\n\n```javascript\nasync function fetchData() {\n  const data = await fetch('/api');\n  const json = await data.json();\n  return json;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// awaitでPromiseを待つ\n// async で非同期関数を宣言\nasync function main() {\n  // await でPromiseの結果を待つ\n  const value = await Promise.resolve(100);\n  // console.log で出力\n  console.log(value);\n}\n\n// main() で関数を呼び出す\nmain();",
      "holeyCode": "// awaitでPromiseを待つ\n// async で非同期関数を宣言\n___ function main() {\n  // await でPromiseの結果を待つ\n  const value = ___ Promise.resolve(100);\n  // console.log で出力\n  console.___(value);\n}\n\n// main() で関数を呼び出す\n___();",
      "correctLines": [
        "// awaitでPromiseを待つ",
        "async function main() {",
        "  // await でPromiseの結果を待つ",
        "  const value = await Promise.resolve(100);",
        "  console.log(value);",
        "}",
        "",
        "main();"
      ],
      "lineHints": [
        null,
        null,
        null,
        "await でPromiseの結果を待ちます。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["await", "async", "return"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "100\n"
        }
      ]
    },
    {
      "title": "Promise.all",
      "description": "複数のPromiseを並行して実行しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Promise.all とは？",
          "image": "/illustrations/3d/goroutine_concurrent.png",
          "content": "# 複数のPromiseを同時に待つ\n\n**Promise.all** は、全てのPromiseが完了するまで待ちます。\n\n```javascript\nconst p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\n\nPromise.all([p1, p2]).then(results => {\n  console.log(results); // [1, 2]\n});\n```"
        },
        {
          "title": "並行処理の利点",
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# 処理時間の短縮\n\n順番に待つより、同時に実行した方が速いです。\n\n```javascript\nasync function fetchAll() {\n  const [users, posts] = await Promise.all([\n    fetch('/users'),\n    fetch('/posts')\n  ]);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// p1 = 10, p2 = 20 で解決し、複数のPromiseを同時に実行\nconst p1 = Promise.resolve(10);\nconst p2 = Promise.resolve(20);\n// all で全てのPromiseを待つ\nPromise.all([p1, p2]).then(nums => {\n  // nums[0] + nums[1] で合計を計算\n  console.log(nums[0] + nums[1]);\n});",
      "holeyCode": "// p1 = 10, p2 = 20 で解決し、複数のPromiseを同時に実行\nconst p1 = Promise.___(10);\nconst p2 = Promise.___(20);\n// all で全てのPromiseを待つ\nPromise.___([p1, p2]).then(nums => {\n  // nums[0] + nums[1] で合計を計算\n  console.log(nums[___] + nums[1]);\n});",
      "correctLines": [
        "// 複数のPromiseを同時に実行",
        "const p1 = Promise.resolve(10);",
        "const p2 = Promise.resolve(20);",
        "// all で全てのPromiseを待つ",
        "Promise.all([p1, p2]).then(nums => {",
        "  console.log(nums[0] + nums[1]);",
        "});"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "all で全てのPromiseを待ちます。",
        null,
        null
      ],
      "candidates": {
        "methods": ["all", "race", "resolve"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "30\n"
        }
      ]
    },
    {
      "title": "クラスの定義",
      "description": "ES6のクラス構文を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "class とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# オブジェクトの設計図\n\n**class** を使うと、オブジェクトの設計図を作れます。\n\n```javascript\nclass Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log(`Hello, ${this.name}!`);\n  }\n}\n```"
        },
        {
          "title": "インスタンスの作成",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# new でオブジェクトを作る\n\n```javascript\nconst alice = new Person('Alice');\nalice.greet(); // Hello, Alice!\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// class キーワードでクラスを定義\nclass Dog {\n  // constructor でインスタンスを初期化\n  constructor(name) {\n    // this.name にnameを代入\n    this.name = name;\n  }\n  bark() {\n    // テンプレートリテラルで出力\n    console.log(`${this.name}: Woof!`);\n  }\n}\n\n// new でインスタンスを作成\nconst dog = new Dog('Pochi');\n// bark() メソッドを呼び出し\ndog.bark();",
      "holeyCode": "// class キーワードでクラスを定義\n___ Dog {\n  // constructor でインスタンスを初期化\n  ___(name) {\n    // this.name にnameを代入\n    this.___ = name;\n  }\n  bark() {\n    // テンプレートリテラルで出力\n    console.log(`${this.___}: Woof!`);\n  }\n}\n\n// new でインスタンスを作成\nconst dog = ___ Dog('Pochi');\n// bark() メソッドを呼び出し\ndog.___();",
      "correctLines": [
        "// class キーワードでクラスを定義",
        "class Dog {",
        "  constructor(name) {",
        "    this.name = name;",
        "  }",
        "  bark() {",
        "    console.log(`${this.name}: Woof!`);",
        "  }",
        "}",
        "",
        "const dog = new Dog('Pochi');",
        "dog.bark();"
      ],
      "lineHints": [
        null,
        "class キーワードでクラスを定義します。",
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
        "keywords": ["class", "function", "const"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pochi: Woof!\n"
        }
      ]
    },
    {
      "title": "クラスの継承",
      "description": "extends でクラスを拡張しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "extends とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 既存クラスを拡張\n\n**extends** を使うと、既存のクラスを継承して新しいクラスを作れます。\n\n```javascript\nclass Animal {\n  speak() { console.log('...'); }\n}\n\nclass Cat extends Animal {\n  speak() { console.log('Meow!'); }\n}\n```"
        },
        {
          "title": "super の使い方",
          "image": "/illustrations/3d/super_parent_call.png",
          "content": "# 親クラスのメソッドを呼ぶ\n\n```javascript\nclass Cat extends Animal {\n  constructor(name) {\n    super(); // 親のconstructor\n    this.name = name;\n  }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 親クラス\n// class でクラスを定義\nclass Animal {\n  // speak メソッドを定義\n  speak() { console.log('...'); }\n}\n\n// extends で親クラスを継承する\nclass Cat extends Animal {\n  // speak メソッドをオーバーライド\n  speak() { console.log('Meow!'); }\n}\n\n// new でインスタンスを作成\nconst cat = new Cat();\n// speak() を呼び出し\ncat.speak();",
      "holeyCode": "// 親クラス\n// class でクラスを定義\n___ Animal {\n  // speak メソッドを定義\n  ___() { console.log('...'); }\n}\n\n// extends で親クラスを継承する\nclass Cat ___ Animal {\n  // speak メソッドをオーバーライド\n  speak() { console.log('___'); }\n}\n\n// new でインスタンスを作成\nconst cat = ___ Cat();\n// speak() を呼び出し\ncat.___();",
      "correctLines": [
        "// 親クラス",
        "class Animal {",
        "  speak() { console.log('...'); }",
        "}",
        "",
        "// extends で親クラスを継承する",
        "class Cat extends Animal {",
        "  speak() { console.log('Meow!'); }",
        "}",
        "",
        "const cat = new Cat();",
        "cat.speak();"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "extends で継承します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["extends", "implements", "with"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Meow!\n"
        }
      ]
    },
    {
      "title": "静的メソッド",
      "description": "クラスに紐づくstaticメソッドを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "static とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# インスタンスなしで呼べるメソッド\n\n**static** メソッドは、クラス自体から直接呼べます。\n\n```javascript\nclass MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n}\n\nconsole.log(MathUtil.add(1, 2)); // 3\n```"
        },
        {
          "title": "static の使いどころ",
          "image": "/illustrations/3d/gear.png",
          "content": "# ユーティリティ関数として\n\nインスタンスに依存しない処理に使います。\n\n```javascript\nclass DateUtil {\n  static today() {\n    return new Date().toLocaleDateString();\n  }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 静的メソッドを持つクラス\n// class でクラスを定義\nclass Calculator {\n  // static でクラスメソッドを定義\n  static multiply(a, b) {\n    // return で戻り値\n    return a * b;\n  }\n}\n\n// クラス名.メソッド名() で静的メソッドを呼び出し\nconsole.log(Calculator.multiply(3, 4));",
      "holeyCode": "// 静的メソッドを持つクラス\n// class でクラスを定義\n___ Calculator {\n  // static でクラスメソッドを定義\n  ___ multiply(a, b) {\n    // return で戻り値\n    ___ a * b;\n  }\n}\n\n// クラス名.メソッド名() で静的メソッドを呼び出し\nconsole.log(___.multiply(3, 4));",
      "correctLines": [
        "// 静的メソッドを持つクラス",
        "class Calculator {",
        "  // static でクラスメソッドを定義",
        "  static multiply(a, b) {",
        "    return a * b;",
        "  }",
        "}",
        "",
        "console.log(Calculator.multiply(3, 4));"
      ],
      "lineHints": [
        null,
        null,
        null,
        "static でクラスメソッドにします。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["static", "public", "private"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "12\n"
        }
      ]
    },
    {
      "title": "Optional Chaining",
      "description": "安全にプロパティにアクセスする ?. を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Optional Chaining とは？",
          "image": "/illustrations/3d/null_safe.png",
          "content": "# 安全なプロパティアクセス\n\n**?.** を使うと、null や undefined でもエラーにならずに undefined を返します。\n\n```javascript\nconst user = { name: 'Alice' };\nconsole.log(user?.name);    // Alice\nconsole.log(user?.address?.city); // undefined\n```"
        },
        {
          "title": "従来の方法との比較",
          "image": "/illustrations/3d/null_safe.png",
          "content": "# コードがシンプルに\n\n```javascript\n// 従来\nconst city = user && user.address && user.address.city;\n\n// Optional Chaining\nconst city = user?.address?.city;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// user: { name: 'Bob' } を持つオブジェクトを定義し、Optional Chainingで安全にアクセス\nconst data = { user: { name: 'Bob' } };\n// ?. で安全にプロパティにアクセス\nconsole.log(data?.user?.name);\n// 存在しないプロパティにアクセス\nconsole.log(data?.profile?.age);",
      "holeyCode": "// user: { name: 'Bob' } を持つオブジェクトを定義し、Optional Chainingで安全にアクセス\nconst data = { user: { name: '___' } };\n// ?. で安全にプロパティにアクセス\nconsole.log(data___user___name);\n// 存在しないプロパティにアクセス\nconsole.log(data___profile?.age);",
      "correctLines": [
        "// Optional Chainingで安全にアクセス",
        "const data = { user: { name: 'Bob' } };",
        "// ?. で安全にプロパティにアクセス",
        "console.log(data?.user?.name);",
        "console.log(data?.profile?.age);"
      ],
      "lineHints": [
        null,
        null,
        null,
        "?. で安全にアクセスします。",
        null
      ],
      "candidates": {
        "operators": ["?.", ".", "?."]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Bob\nundefined\n"
        }
      ]
    },
    {
      "title": "Nullish Coalescing",
      "description": "null/undefined のデフォルト値を設定する ?? を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "?? とは？",
          "image": "/illustrations/3d/null_coalescing.png",
          "content": "# null/undefinedの時だけデフォルト値\n\n**??** は、左辺が null または undefined の場合のみ右辺を返します。\n\n```javascript\nconst name = null ?? 'Guest';\nconsole.log(name); // Guest\n\nconst count = 0 ?? 10;\nconsole.log(count); // 0 (0はnullでない)\n```"
        },
        {
          "title": "|| との違い",
          "image": "/illustrations/3d/null_coalescing.png",
          "content": "# || は falsy 全てに反応\n\n```javascript\n// || は 0, '', false も置き換える\nconst a = 0 || 10;   // 10\nconst b = '' || 'default'; // 'default'\n\n// ?? は null/undefined のみ\nconst c = 0 ?? 10;   // 0\nconst d = '' ?? 'default'; // ''\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// undefined を代入し、Nullish Coalescingでデフォルト値\nconst value = undefined;\n// ?? でnull/undefinedのデフォルト値を設定\nconst result = value ?? 'default';\n// console.log で結果を出力\nconsole.log(result);",
      "holeyCode": "// undefined を代入し、Nullish Coalescingでデフォルト値\nconst value = ___;\n// ?? でnull/undefinedのデフォルト値を設定\nconst result = value ___ 'default';\n// console.log で結果を出力\nconsole.___(result);",
      "correctLines": [
        "// Nullish Coalescingでデフォルト値",
        "const value = undefined;",
        "// ?? でnull/undefinedのデフォルト値を設定",
        "const result = value ?? 'default';",
        "console.log(result);"
      ],
      "lineHints": [
        null,
        null,
        null,
        "?? で null/undefined のデフォルト値を設定します。",
        null
      ],
      "candidates": {
        "operators": ["??", "||", "&&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "default\n"
        }
      ]
    }
  ]
}
