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
      "correctCode": "// Promise コンストラクタで作成\\nconst p = new Promise((resolve) => {\\n  // 'こんにちは Promise!' で解決\\n  resolve('こんにちは Promise!');\\n});\\n\\n// then でコールバックを登録\\np.then(msg => console.log(msg));",
      "holeyCode": "// Promise コンストラクタで作成\\n___ ___ = ___ ___((___) => {\\n  // 'こんにちは Promise!' で解決\\n  ___('___');\\n___\\n___\\n// then でコールバックを登録\\n___.___(___ => ___.___(___));",
      "correctLines": [
          "// Promise コンストラクタで作成",
          "const p = new Promise((resolve) => {",
          "  // 'こんにちは Promise!' で解決",
          "  resolve('こんにちは Promise!');",
          "});",
          "",
          "// then でコールバックを登録",
          "p.then(msg => console.log(msg));"
        ],
      "lineHints": [
          null,
          "const p = new Promise((resolve) => { で Promiseを作成します。",
          null,
          "resolve('こんにちは Promise!') で Promise を解決します。",
          "Promiseコンストラクタのコールバック関数を閉じます。",
          null,
          null,
          "p.then(msg => console.log(msg)) でコールバックを登録します。"
        ],
        "candidates": {
          "keywords": [
            "Promise",
            "Function",
            "Object",
            "const",
            "new"
          ],
          "others": ["p", "resolve", "then", "msg", "console", "log", "こんにちは Promise!", "});", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは Promise!\\n"
          }
        ]
      },
    {
      "title": "Promise.resolve",
      "correctCode": "// resolve で即座に解決するPromise\\nPromise.resolve(42)\\n  // then で結果を処理\\n  .then(n => console.log(n * 2));",
      "holeyCode": "// resolve で即座に解決するPromise\\n___.___(___) \\n  // then で結果を処理\\n  .___(___ => ___.___(___*___));",
      "correctLines": [
          "// resolve で即座に解決するPromise",
          "Promise.resolve(42)",
          "  // then で結果を処理",
          "  .then(n => console.log(n * 2));"
        ],
      "lineHints": [
          null,
          "Promise.resolve(42) で即座に解決します。",
          null,
          ".then(n => console.log(n * 2)) でコールバックを登録します。"
        ],
        "candidates": {
          "methods": [
            "resolve",
            "reject",
            "all",
            "then",
            "log"
          ],
          "others": [
            "Promise",
            "n",
            "console",
            "42",
            "2"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\\n"
          }
        ]
      },
    {
      "title": "async 関数",
      "correctCode": "// async キーワードで非同期関数を定義\\nasync function getMessage() {\\n  // return で値を返す\\n  return '非同期成功！';\\n}\\n\\n// then でメッセージを出力\\ngetMessage().then(msg => console.log(msg));",
      "holeyCode": "// async キーワードで非同期関数を定義\\n___ ___ ___() {\\n  // return で値を返す\\n  ___ '___';\\n___\\n___\\n// then でメッセージを出力\\n___().___(___ => ___.___(___));",
      "correctLines": [
          "// async キーワードで非同期関数を定義",
          "async function getMessage() {",
          "  // return で値を返す",
          "  return '非同期成功！';",
          "}",
          "",
          "// then でメッセージを出力",
          "getMessage().then(msg => console.log(msg));"
        ],
      "lineHints": [
          null,
          "async function getMessage() { で非同期関数を定義します。",
          null,
          "return '非同期成功！' で値を返します。",
          "関数本体のブロックを閉じます。",
          null,
          null,
          "getMessage().then(msg => console.log(msg)) でコールバックを登録します。"
        ],
        "candidates": {
          "keywords": [
            "async",
            "await",
            "function",
            "return"
          ],
          "others": ["getMessage", "then", "msg", "console", "log", "非同期成功！", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "非同期成功！\\n"
          }
        ]
      },
    {
      "title": "await で待機",
      "correctCode": "// awaitでPromiseを待つasync main()関数を定義\\nasync function main() {\\n  // await でPromiseの結果を待つ\\n  const value = await Promise.resolve(100);\\n  // console.log で出力\\n  console.log(value);\\n}\\n\\n// main() で関数を呼び出す\\nmain();",
      "holeyCode": "// awaitでPromiseを待つasync main()関数を定義\\n___ ___ ___() {\\n  // await でPromiseの結果を待つ\\n  ___ ___ = ___ ___.___(___);\\n  // console.log で出力\\n  ___.___(___);\\n___\\n___\\n// main() で関数を呼び出す\\n___();",
      "correctLines": [
          "// awaitでPromiseを待つasync main()関数を定義",
          "async function main() {",
          "  // await でPromiseの結果を待つ",
          "  const value = await Promise.resolve(100);",
          "  // console.log で出力",
          "  console.log(value);",
          "}",
          "",
          "// main() で関数を呼び出す",
          "main();"
        ],
      "lineHints": [
          null,
          "async function main() { で非同期関数を定義します。",
          null,
          "const value = await Promise.resolve(100) でPromiseを待ちます。",
          null,
          "console.log(value) で出力します。",
          "関数本体のブロックを閉じます。",
          null,
          null,
          "main() で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "await",
            "async",
            "return",
            "const",
            "function"
          ],
          "others": ["main", "value", "Promise", "resolve", "100", "console", "log", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "Promise.all",
      "correctCode": "// p1 = 10 で解決するPromiseを作成\\nconst p1 = Promise.resolve(10);\\n// p2 = 20 で解決するPromiseを作成\\nconst p2 = Promise.resolve(20);\\n// all で全てのPromiseを待つ\\nPromise.all([p1, p2]).then(nums => {\\n  // nums[0] + nums[1] で合計を計算\\n  console.log(nums[0] + nums[1]);\\n});",
      "holeyCode": "// p1 = 10 で解決するPromiseを作成\\n___ ___ = ___.___(___);\\n// p2 = 20 で解決するPromiseを作成\\n___ ___ = ___.___(___);\\n// all で全てのPromiseを待つ\\n___.___([___, ___]).___(___ => {\\n  // nums[0] + nums[1] で合計を計算\\n  ___.___(___[___] + ___[___]);\\n___);",
      "correctLines": [
          "// p1 = 10 で解決するPromiseを作成",
          "const p1 = Promise.resolve(10);",
          "// p2 = 20 で解決するPromiseを作成",
          "const p2 = Promise.resolve(20);",
          "// all で全てのPromiseを待つ",
          "Promise.all([p1, p2]).then(nums => {",
          "  // nums[0] + nums[1] で合計を計算",
          "  console.log(nums[0] + nums[1]);",
          "});"
        ],
      "lineHints": [
          null,
          "const p1 = Promise.resolve(10) でPromiseを作成します。",
          null,
          "const p2 = Promise.resolve(20) でPromiseを作成します。",
          null,
          "Promise.all([p1, p2]).then(nums => { で全てのPromiseを待ちます。",
          null,
          "console.log(nums[0] + nums[1]) で合計を出力します。",
          "thenコールバックのブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "all",
            "race",
            "resolve",
            "then",
            "log"
          ],
          "others": ["const", "p1", "p2", "Promise", "nums", "console", "10", "20", "0", "1", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\\n"
          }
        ]
      },
    {
      "title": "クラスの定義",
      "correctCode": "// Dogクラスを定義\\nclass Dog {\\n  // constructorでnameを初期化\\n  constructor(name) {\\n    // this.nameにnameを代入\\n    this.name = name;\\n  }\\n  bark() {\\n    // テンプレートリテラルで出力\\n    console.log(`${this.name}: ワン！`);\\n  }\\n}\\n\\n// dogにnew Dog('ポチ')を代入\\nconst dog = new Dog('ポチ');\\n// bark()メソッドを呼び出し\\ndog.bark();",
      "holeyCode": "// Dogクラスを定義\\n___ ___ {\\n  // constructorでnameを初期化\\n  ___(___) {\\n    // this.nameにnameを代入\\n    ___.___ = ___;\\n  ___\\n  ___() {\\n    // テンプレートリテラルで出力\\n    ___.___(`${___.___}___`);\\n  ___\\n___\\n___\\n// dogにnew Dog('ポチ')を代入\\n___ ___ = ___ ___(___);\\n// bark()メソッドを呼び出し\\n___.___();",
      "correctLines": [
          "// Dogクラスを定義",
          "class Dog {",
          "  // constructorでnameを初期化",
          "  constructor(name) {",
          "    // this.nameにnameを代入",
          "    this.name = name;",
          "  }",
          "  bark() {",
          "    // テンプレートリテラルで出力",
          "    console.log(`${this.name}: ワン！`);",
          "  }",
          "}",
          "",
          "// dogにnew Dog('ポチ')を代入",
          "const dog = new Dog('ポチ');",
          "// bark()メソッドを呼び出し",
          "dog.bark();"
        ],
      "lineHints": [
          null,
          "class Dog { でDogクラスを定義します。",
          null,
          "constructor(name) { でコンストラクタを定義します。",
          null,
          "this.name = name でプロパティに代入します。",
          "constructorメソッドのブロックを閉じます。",
          "bark() { でメソッドを定義します。",
          null,
          "console.log(`${this.name}: ワン！`) でテンプレートリテラルを使います。",
          "barkメソッドのブロックを閉じます。",
          "Dogクラスの定義を閉じます。",
          null,
          null,
          "const dog = new Dog('ポチ') でインスタンスを作成します。",
          null,
          "dog.bark() でメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "class",
            "function",
            "const",
            "new"
          ],
          "others": ["Dog", "constructor", "name", "this", "bark", "console", "log", ": ワン！", "'ポチ'", "dog", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ポチ: ワン！\\n"
          }
        ]
      },
    {
      "title": "クラスの継承",
      "correctCode": "// 親クラスAnimalを定義\\nclass Animal {\\n  // speakメソッドを定義\\n  speak() { console.log('...'); }\\n}\\n\\n// CatクラスがAnimalを継承\\nclass Cat extends Animal {\\n  // speakメソッドをオーバーライド\\n  speak() { console.log('ニャー！'); }\\n}\\n\\n// catにnew Cat()を代入\\nconst cat = new Cat();\\n// speak()を呼び出し\\ncat.speak();",
      "holeyCode": "// 親クラスAnimalを定義\\n___ ___ {\\n  // speakメソッドを定義\\n  ___() { ___.___(___); }\\n___\\n___\\n// CatクラスがAnimalを継承\\n___ ___ ___ ___ {\\n  // speakメソッドをオーバーライド\\n  ___() { ___.___(___); }\\n___\\n___\\n// catにnew Cat()を代入\\n___ ___ = ___ ___();\\n// speak()を呼び出し\\n___.___();",
      "correctLines": [
          "// 親クラスAnimalを定義",
          "class Animal {",
          "  // speakメソッドを定義",
          "  speak() { console.log('...'); }",
          "}",
          "",
          "// CatクラスがAnimalを継承",
          "class Cat extends Animal {",
          "  // speakメソッドをオーバーライド",
          "  speak() { console.log('ニャー！'); }",
          "}",
          "",
          "// catにnew Cat()を代入",
          "const cat = new Cat();",
          "// speak()を呼び出し",
          "cat.speak();"
        ],
      "lineHints": [
          null,
          "class Animal { でAnimalクラスを定義します。",
          null,
          "speak() { console.log('...'); } でメソッドを定義します。",
          "Animalクラスの定義を閉じます。",
          null,
          null,
          "class Cat extends Animal { で継承します。",
          null,
          "speak() { console.log('ニャー！'); } でオーバーライドします。",
          "Catクラスの定義を閉じます。",
          null,
          null,
          "const cat = new Cat() でインスタンスを作成します。",
          null,
          "cat.speak() でメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "with",
            "class",
            "const",
            "new"
          ],
          "others": ["Animal", "Cat", "speak", "console", "log", "'...'", "'ニャー！'", "cat", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ニャー！\\n"
          }
        ]
      },
    {
      "title": "静的メソッド",
      "correctCode": "// Calculatorクラスを定義\\nclass Calculator {\\n  // static multiplyメソッドを定義\\n  static multiply(a, b) {\\n    // a * bを返す\\n    return a * b;\\n  }\\n}\\n\\n// Calculator.multiply(3, 4)を出力\\nconsole.log(Calculator.multiply(3, 4));",
      "holeyCode": "// Calculatorクラスを定義\\n___ ___ {\\n  // static multiplyメソッドを定義\\n  ___ ___(___, ___) {\\n    // a * bを返す\\n    ___ ___ * ___;\\n  ___\\n___\\n___\\n// Calculator.multiply(3, 4)を出力\\n___.___(___.___(___,___));",
      "correctLines": [
          "// Calculatorクラスを定義",
          "class Calculator {",
          "  // static multiplyメソッドを定義",
          "  static multiply(a, b) {",
          "    // a * bを返す",
          "    return a * b;",
          "  }",
          "}",
          "",
          "// Calculator.multiply(3, 4)を出力",
          "console.log(Calculator.multiply(3, 4));"
        ],
      "lineHints": [
          null,
          "class Calculator { でクラスを定義します。",
          null,
          "static multiply(a, b) { でクラスメソッドにします。",
          null,
          "return a * b で計算結果を返します。",
          "multiplyメソッドのブロックを閉じます。",
          "Calculatorクラスの定義を閉じます。",
          null,
          null,
          "console.log(Calculator.multiply(3, 4)) でstaticメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "static",
            "public",
            "private",
            "class",
            "return"
          ],
          "others": ["Calculator", "multiply", "a", "b", "console", "log", "3", "4", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\\n"
          }
        ]
      },
    {
      "title": "Optional Chaining",
      "correctCode": "// user: { name: 'ボブ' } を持つオブジェクトを定義し、Optional Chainingで安全にアクセス\\nconst data = { user: { name: 'ボブ' } };\\n// ?. で安全にプロパティにアクセス\\nconsole.log(data?.user?.name);\\n// 存在しないプロパティにアクセス\\nconsole.log(data?.profile?.age);",
      "holeyCode": "// user: { name: 'ボブ' } を持つオブジェクトを定義し、Optional Chainingで安全にアクセス\\n___ ___ = { ___: { ___: '___' } };\\n// ?. で安全にプロパティにアクセス\\n___.___(___?.___?.___);\\n// 存在しないプロパティにアクセス\\n___.___(___?.___?.___);",
      "correctLines": [
          "// user: { name: 'ボブ' } を持つオブジェクトを定義し、Optional Chainingで安全にアクセス",
          "const data = { user: { name: 'ボブ' } };",
          "// ?. で安全にプロパティにアクセス",
          "console.log(data?.user?.name);",
          "// 存在しないプロパティにアクセス",
          "console.log(data?.profile?.age);"
        ],
      "lineHints": [
          null,
          "const data = { user: { name: 'ボブ' } } でオブジェクトを作ります。",
          null,
          "console.log(data?.user?.name) で ?. を使って安全にアクセスします。",
          null,
          "console.log(data?.profile?.age) で ?. を使って安全にアクセスします。"
        ],
        "candidates": {
          "operators": [
            "?.",
            ".",
            "??"
          ],
          "others": ["const", "data", "user", "name", "ボブ", "console", "log", "profile", "age"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボブ\\nundefined\\n"
          }
        ]
      },
    {
      "title": "Nullish Coalescing",
      "correctCode": "// undefined を代入し、Nullish Coalescingでデフォルト値\\nconst value = undefined;\\n// ?? でnull/undefinedのデフォルト値を設定\\nconst result = value ?? 'デフォルト';\\n// console.log で結果を出力\\nconsole.log(result);",
      "holeyCode": "// undefined を代入し、Nullish Coalescingでデフォルト値\\n___ ___ = ___;\\n// ?? でnull/undefinedのデフォルト値を設定\\n___ ___ = ___ ___ '___';\\n// console.log で結果を出力\\n___.___(___);",
      "correctLines": [
          "// undefined を代入し、Nullish Coalescingでデフォルト値",
          "const value = undefined;",
          "// ?? でnull/undefinedのデフォルト値を設定",
          "const result = value ?? 'デフォルト';",
          "// console.log で結果を出力",
          "console.log(result);"
        ],
      "lineHints": [
          null,
          "const value = undefined で undefined を代入します。",
          null,
          "const result = value ?? 'デフォルト' で ?? を使ってデフォルト値を設定します。",
          null,
          "console.log(result) で出力します。"
        ],
        "candidates": {
          "operators": [
            "??",
            "||",
            "&&"
          ],
          "others": [
            "const",
            "value",
            "undefined",
            "result",
            "デフォルト",
            "console",
            "log"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "デフォルト\\n"
          }
        ]
      }
  ]
}
