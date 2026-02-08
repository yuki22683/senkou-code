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
      "holeyCode": "// Promise コンストラクタで作成\\nconst p = new ___((resolve) => {\\n  // 'こんにちは Promise!' で解決\\n  ___('こんにちは Promise!');\\n___\\n___\\n// then でコールバックを登録\\np.___(msg => console.log(msg));",
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
          "Promise コンストラクタを使います。",
          null,
          "resolve で Promise を解決します。",
          "この行を正しく入力してください。",
          null,
          null,
          "変数msgの値をコンソールに出力します。"
        ],
        "candidates": {
          "keywords": [
            "Promise",
            "Function",
            "Object"
          ],
          "others": ["resolve", "then", "});", "});", ""]
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
      "holeyCode": "// resolve で即座に解決するPromise\\nPromise.___(42)\\n  // then で結果を処理\\n  .___(n => console.log(n * 2));",
      "correctLines": [
          "// resolve で即座に解決するPromise",
          "Promise.resolve(42)",
          "  // then で結果を処理",
          "  .then(n => console.log(n * 2));"
        ],
      "lineHints": [
          null,
          "resolve で即座に解決します。",
          null,
          "then でコールバックを登録します。"
        ],
        "candidates": {
          "methods": [
            "resolve",
            "reject",
            "all"
          ],
          "others": [
            "then"
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
      "holeyCode": "// async キーワードで非同期関数を定義\\n___ function getMessage() {\\n  // return で値を返す\\n  ___ '非同期成功！';\\n___\\n___\\n// then でメッセージを出力\\ngetMessage().___(msg => console.log(msg));",
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
          "async キーワードで非同期関数にします。",
          null,
          "return で値を返します。",
          "この行を正しく入力してください。",
          null,
          null,
          "変数msgの値をコンソールに出力します。"
        ],
        "candidates": {
          "keywords": [
            "async",
            "await",
            "function"
          ],
          "others": ["return", "then", "}", ""]
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
      "correctCode": "// awaitでPromiseを待つ\\n// async main()を宣言\\nasync function main() {\\n  // await でPromiseの結果を待つ\\n  const value = await Promise.resolve(100);\\n  // console.log で出力\\n  console.log(value);\\n}\\n\\n// main() で関数を呼び出す\\nmain();",
      "holeyCode": "// awaitでPromiseを待つ\\n// async main()を宣言\\n___ function main() {\\n  // await でPromiseの結果を待つ\\n  const value = ___ Promise.resolve(100);\\n  // console.log で出力\\n  console.___(value);\\n___\\n___\\n// main() で関数を呼び出す\\n___();",
      "correctLines": [
          "// awaitでPromiseを待つ",
          "// async main()を宣言",
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
          null,
          "async キーワードで非同期関数にします。",
          null,
          "await でPromiseの結果を待ちます。",
          null,
          "console.log で出力します。",
          "この行を正しく入力してください。",
          null,
          null,
          "関数（main）を呼び出して実行します。"
        ],
        "candidates": {
          "keywords": [
            "await",
            "async",
            "return"
          ],
          "others": ["log", "main", "}", ""]
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
      "holeyCode": "// p1 = 10 で解決するPromiseを作成\\nconst p1 = Promise.___(10);\\n// p2 = 20 で解決するPromiseを作成\\nconst p2 = Promise.___(20);\\n// all で全てのPromiseを待つ\\nPromise.___([p1, p2]).then(nums => {\\n  // nums[0] + nums[1] で合計を計算\\n  console.log(nums[___] + nums[1]);\\n___);",
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
          "resolve で即座に解決するPromiseを作ります。",
          null,
          "resolve で即座に解決するPromiseを作ります。",
          null,
          "all で全てのPromiseを待ちます。",
          null,
          "0番目の要素にアクセスします。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "all",
            "race",
            "resolve"
          ],
          "others": ["0", "}"]
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
      "holeyCode": "// Dogクラスを定義\\n___ Dog {\\n  // constructorでnameを初期化\\n  ___(name) {\\n    // this.nameにnameを代入\\n    this.___ = name;\\n  ___\\n  ___\\n    // テンプレートリテラルで出力\\n    console.log(`${this.___}: ワン！`);\\n  ___\\n___\\n___\\n// dogにnew Dog('ポチ')を代入\\nconst dog = ___ Dog('ポチ');\\n// bark()メソッドを呼び出し\\ndog.___();",
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
          "新しいクラス（Dog）を定義します。",
          null,
          "constructor でインスタンスを初期化します。",
          null,
          "this.name に名前を代入します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "this.nameで犬の名前にアクセスします。",
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
            "class",
            "function",
            "const"
          ],
          "others": ["constructor", "name", "new", "bark", "名前", "bark() {", "}", "bark() {", ""]
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
      "holeyCode": "// 親クラスAnimalを定義\\n___ Animal {\\n  // speakメソッドを定義\\n  ___() { console.log('...'); }\\n___\\n___\\n// CatクラスがAnimalを継承\\nclass Cat ___ Animal {\\n  // speakメソッドをオーバーライド\\n  speak() { console.log('___'); }\\n___\\n___\\n// catにnew Cat()を代入\\nconst cat = ___ Cat();\\n// speak()を呼び出し\\ncat.___();",
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
          "Animalクラスを定義します。",
          null,
          "console.log('...')を出力します。",
          "この行を正しく入力してください。",
          null,
          null,
          "extendsでAnimalを継承します。",
          null,
          "'ニャー！'を出力します。",
          "この行を正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "with"
          ],
          "others": ["class", "speak", "Meow!", "new", "ニャー！", "}", ""]
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
      "holeyCode": "// Calculatorクラスを定義\\n___ Calculator {\\n  // static multiplyメソッドを定義\\n  ___ multiply(a, b) {\\n    // a * bを返す\\n    ___ a * b;\\n  ___\\n___\\n___\\n// Calculator.multiply(3, 4)を出力\\nconsole.log(___.multiply(3, 4));",
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
          "classでクラスを定義します。",
          null,
          "staticでクラスメソッドにします。",
          null,
          "returnで計算結果を返します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "クラス名.メソッド名()でstaticを呼び出せます。"
        ],
        "candidates": {
          "keywords": [
            "static",
            "public",
            "private"
          ],
          "others": ["class", "return", "Calculator", "}", ""]
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
      "holeyCode": "// user: { name: 'ボブ' } を持つオブジェクトを定義し、Optional Chainingで安全にアクセス\\nconst data = { user: { name: '___' } };\\n// ?. で安全にプロパティにアクセス\\nconsole.log(data___user___name);\\n// 存在しないプロパティにアクセス\\nconsole.log(data___profile?.age);",
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
          "{ user: { name: 'ボブ' } } のオブジェクトを作ります。",
          null,
          "?. で安全にアクセスします。",
          null,
          "?. で安全にアクセスします。"
        ],
        "candidates": {
          "operators": [
            "?.",
            ".",
            "?."
          ],
          "others": ["Bob", "ボブ"]
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
      "holeyCode": "// undefined を代入し、Nullish Coalescingでデフォルト値\\nconst value = ___;\\n// ?? でnull/undefinedのデフォルト値を設定\\nconst result = value ___ 'デフォルト';\\n// console.log で結果を出力\\nconsole.___(result);",
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
          "undefined を代入します。",
          null,
          "?? で null/undefined のデフォルト値を設定します。",
          null,
          "console.log で出力します。"
        ],
        "candidates": {
          "operators": [
            "??",
            "||",
            "&&"
          ],
          "others": [
            "undefined",
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
