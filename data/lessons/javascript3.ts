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
            "title": "Promise（プロミス）とは？",
            "content": "# 「あとで届くよ」という約束\\n\\n**非同期処理（ひどうきしょり）** とは、時間のかかる処理を待たずに次の処理を進める仕組みです。\\n\\n**身近なたとえ：**\\nピザの宅配を想像してください。注文したら「30分後に届けます」という **約束（Promise）** をもらいますよね。届くまで待たずに他のことができます。\\n\\n**Promise は「約束の証明書」：**\\n- 処理が成功したら結果を届ける（resolve）\\n- 失敗したらエラーを届ける（reject）\\n\\n**コード例：**\\n```javascript\\nconst promise = new Promise((resolve, reject) => {\\n  resolve('成功！');  // 約束を果たす\\n});\\n```"
          },
          {
            "title": "then で結果を受け取る",
            "content": "# 約束が届いたときの処理\\n\\n**then（ゼン）** は「約束が届いたらこれをする」という意味です。\\n\\n**書き方：**\\n- `.then()` ：成功したときの処理\\n- `.catch()` ：失敗したときの処理\\n\\n**コード例：**\\n```javascript\\npromise\\n  .then(result => console.log(result))   // 成功！\\n  .catch(error => console.log(error));   // エラー時\\n```\\n\\n**ピザの例でいうと：**\\n- `.then()` ：ピザが届いたら食べる\\n- `.catch()` ：届かなかったらお店に電話する"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Promise コンストラクタで作成\\nconst p = new Promise((resolve) => {\\n  // 'こんにちは Promise!' で解決\\n  resolve('こんにちは Promise!');\\n});\\n\\n// then でコールバックを登録\\np.then(msg => console.log(msg));",
        "holeyCode": "// Promise コンストラクタで作成\\nconst p = new ___((resolve) => {\\n  // 'こんにちは Promise!' で解決\\n  ___('こんにちは Promise!');\\n});\\n\\n// then でコールバックを登録\\np.___(msg => console.log(msg));",
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
          null,
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
          "others": [
            "resolve",
            "then"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは Promise!\
"
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
            "content": "# すぐに届く約束を作る\\n\\n**Promise.resolve()** は、待たずにすぐ成功状態になる Promise を作ります。\\n\\n**身近なたとえ：**\\n「ピザを注文→30分待つ」ではなく、「もう手元にあるピザを渡す」イメージです。待ち時間ゼロ！\\n\\n**コード例：**\\n```javascript\\nPromise.resolve('即座に完了')\\n  .then(msg => console.log(msg));\\n```\\n**実行結果：**\\n```\\n即座に完了\\n```"
          },
          {
            "title": "Promise.resolve の使いどころ",
            "content": "# 同じ形式で扱いたいとき\\n\\n**こんなときに便利：**\\nキャッシュ（保存済みデータ）があるときはすぐ返し、ないときはサーバーから取得する、という場合に両方を Promise として統一できます。\\n\\n**コード例：**\\n```javascript\\nfunction getData(useCache) {\\n  if (useCache) {\\n    // すぐに返す\\n    return Promise.resolve(cachedData);\\n  }\\n  // サーバーから取得（時間かかる）\\n  return fetch('/api/data');\\n}\\n```\\n\\n**ポイント：**\\n両方とも Promise なので、同じように `.then()` で受け取れる！"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "84\
"
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
            "title": "async（アシンク）とは？",
            "content": "# 非同期関数を作る魔法の言葉\\n\\n**async** を関数の前につけると、その関数は自動的に Promise を返すようになります。\\n\\n**身近なたとえ：**\\n「async」は「この関数は約束を返しますよ」という看板のようなものです。\\n\\n**書き方：**\\n```javascript\\nasync function hello() {\\n  return 'Hello!';\\n}\\n// hello() を呼ぶと Promise が返ってくる\\n```\\n\\n**ポイント：**\\n`return` で返した値は、自動的に Promise に包まれます。"
          },
          {
            "title": "async の使い方",
            "content": "# 戻り値は自動で Promise になる！\\n\\n普通に値を `return` するだけで、Promise として扱えます。\\n\\n**コード例：**\\n```javascript\\nasync function getData() {\\n  return { name: 'アリス' };\\n}\\n\\n// 普通のオブジェクトを返しているけど...\\n// Promise として扱える！\\ngetData().then(data => console.log(data.name));\\n```\\n**実行結果：**\\n```\\nアリス\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// async キーワードで非同期関数を定義\\nasync function getMessage() {\\n  // return で値を返す\\n  return '非同期成功！';\\n}\\n\\n// then でメッセージを出力\\ngetMessage().then(msg => console.log(msg));",
        "holeyCode": "// async キーワードで非同期関数を定義\\n___ function getMessage() {\\n  // return で値を返す\\n  ___ '非同期成功！';\\n}\\n\\n// then でメッセージを出力\\ngetMessage().___(msg => console.log(msg));",
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
          null,
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
          "others": [
            "return",
            "then"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "非同期成功！\
"
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
            "title": "await（アウェイト）とは？",
            "content": "# Promise の完了を待つ\\n\\n**await** は「待って！」という意味です。Promise が完了するまで待って、結果を受け取ります。\\n\\n**身近なたとえ：**\\nピザの配達を待っている間、ドアの前でじっと待つイメージです。届いたら次のこと（食べる）ができます。\\n\\n**コード例：**\\n```javascript\\nasync function main() {\\n  // Promise が完了するまで待つ\\n  const result = await Promise.resolve('完了');\\n  console.log(result);\\n}\\n```\\n**実行結果：**\\n```\\n完了\\n```"
          },
          {
            "title": "await の注意点",
            "content": "# async 関数の中でしか使えない！\\n\\n**重要なルール：**\\n`await` は必ず `async` 関数の中で使います。\\n\\n**なぜ？**\\n「待つ」という行為は、約束を返す関数の中でないとできないからです。\\n\\n**コード例：**\\n```javascript\\nasync function fetchData() {\\n  // 1. データを取得（待つ）\\n  const data = await fetch('/api');\\n  // 2. JSONに変換（待つ）\\n  const json = await data.json();\\n  // 3. 結果を返す\\n  return json;\\n}\\n```\\n\\n**ポイント：**\\n`await` を使うと、上から順番に実行されるので読みやすい！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// awaitでPromiseを待つ\\n// async main()を宣言\\nasync function main() {\\n  // await でPromiseの結果を待つ\\n  const value = await Promise.resolve(100);\\n  // console.log で出力\\n  console.log(value);\\n}\\n\\n// main() で関数を呼び出す\\nmain();",
        "holeyCode": "// awaitでPromiseを待つ\\n// async main()を宣言\\n___ function main() {\\n  // await でPromiseの結果を待つ\\n  const value = ___ Promise.resolve(100);\\n  // console.log で出力\\n  console.___(value);\\n}\\n\\n// main() で関数を呼び出す\\n___();",
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
          null,
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
          "others": [
            "log",
            "main"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\
"
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
            "content": "# 複数の Promise を同時に待つ\\n\\n**Promise.all** は、複数の Promise を同時に実行して、全部が完了するのを待ちます。\\n\\n**身近なたとえ：**\\n3人の友達にそれぞれ買い物をお願いして、全員が戻ってきたら出発する、というイメージです。\\n\\n**コード例：**\\n```javascript\\nconst p1 = Promise.resolve(1);\\nconst p2 = Promise.resolve(2);\\n\\nPromise.all([p1, p2]).then(results => {\\n  console.log(results);  // [1, 2]\\n});\\n```\\n\\n**ポイント：**\\n結果は配列で返ってきます！"
          },
          {
            "title": "並行処理（へいこうしょり）の利点",
            "content": "# 同時に実行すると速い！\\n\\n**順番に実行 vs 同時に実行：**\\n- 順番：3秒 + 3秒 = 6秒かかる\\n- 同時：3秒で両方終わる！\\n\\n**コード例：**\\n```javascript\\nasync function fetchAll() {\\n  // 2つのリクエストを同時に実行！\\n  const [users, posts] = await Promise.all([\\n    fetch('/users'),\\n    fetch('/posts')\
        ]);\\n}\\n```\\n\\n**ポイント：**\\n互いに関係のない処理は、`Promise.all` で同時に実行すると時間短縮できます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// p1 = 10 で解決するPromiseを作成\\nconst p1 = Promise.resolve(10);\\n// p2 = 20 で解決するPromiseを作成\\nconst p2 = Promise.resolve(20);\\n// all で全てのPromiseを待つ\\nPromise.all([p1, p2]).then(nums => {\\n  // nums[0] + nums[1] で合計を計算\\n  console.log(nums[0] + nums[1]);\\n});",
        "holeyCode": "// p1 = 10 で解決するPromiseを作成\\nconst p1 = Promise.___(10);\\n// p2 = 20 で解決するPromiseを作成\\nconst p2 = Promise.___(20);\\n// all で全てのPromiseを待つ\\nPromise.___([p1, p2]).then(nums => {\\n  // nums[0] + nums[1] で合計を計算\\n  console.log(nums[___] + nums[1]);\\n});",
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
          null
        ],
        "candidates": {
          "methods": [
            "all",
            "race",
            "resolve"
          ],
          "others": [
            "0"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "30\
"
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
            "title": "class（クラス）とは？",
            "content": "# オブジェクトの「設計図」\\n\\n**class** は、オブジェクトを作るための設計図です。\\n\\n**身近なたとえ：**\\nたい焼きの「型」を想像してください。同じ型から何個でもたい焼きを作れますよね。class も同じで、同じ設計図から何個でもオブジェクトを作れます。\\n\\n**コード例：**\\n```javascript\\nclass Person {\\n  // 初期設定（constructor = コンストラクタ）\\n  constructor(name) {\\n    this.name = name;  // this は「自分」という意味\\n  }\\n  // できること（メソッド）\\n  greet() {\\n    console.log(`Hello, ${this.name}!`);\\n  }\\n}\\n```"
          },
          {
            "title": "インスタンスの作成",
            "content": "# new で実際のオブジェクトを作る\\n\\n設計図から作った実際のオブジェクトを **インスタンス** と呼びます。\\n\\n**身近なたとえ：**\\n- class（設計図）= たい焼きの型\\n- インスタンス = 実際のたい焼き\\n\\n**コード例：**\\n```javascript\\n// new で Person クラスからインスタンスを作る\\nconst alice = new Person('アリス');\\nalice.greet();\\n```\\n**実行結果：**\\n```\\nHello, アリス!\\n```\\n\\n**ポイント：**\\n`new` をつけて class を呼び出すと、インスタンスが作られます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Dogクラスを定義\\nclass Dog {\\n  // constructorでnameを初期化\\n  constructor(name) {\\n    // this.nameにnameを代入\\n    this.name = name;\\n  }\\n  bark() {\\n    // テンプレートリテラルで出力\\n    console.log(`${this.name}: ワン！`);\\n  }\\n}\\n\\n// dogにnew Dog('ポチ')を代入\\nconst dog = new Dog('ポチ');\\n// bark()メソッドを呼び出し\\ndog.bark();",
        "holeyCode": "// Dogクラスを定義\\n___ Dog {\\n  // constructorでnameを初期化\\n  ___(name) {\\n    // this.nameにnameを代入\\n    this.___ = name;\\n  }\\n  bark() {\\n    // テンプレートリテラルで出力\\n    console.log(`${this.___}: ワン！`);\\n  }\\n}\\n\\n// dogにnew Dog('ポチ')を代入\\nconst dog = ___ Dog('ポチ');\\n// bark()メソッドを呼び出し\\ndog.___();",
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
          null,
          null,
          null,
          "this.nameで犬の名前にアクセスします。",
          null,
          null,
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
          "others": ["constructor", "name", "new", "bark", "名前"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ポチ: ワン！\
"
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
            "title": "extends（継承・けいしょう）とは？",
            "content": "# 既存のクラスを拡張する\\n\\n**extends** を使うと、既存のクラスの機能を引き継いで新しいクラスを作れます。これを **継承（けいしょう）** と呼びます。\\n\\n**身近なたとえ：**\\n「動物」というグループがあって、その下に「猫」「犬」があるイメージです。猫も犬も動物の特徴を持っていますよね。\\n\\n**コード例：**\\n```javascript\\nclass Animal {\\n  speak() { console.log('...'); }\\n}\\n\\n// Animal の機能を引き継いで Cat を作る\\nclass Cat extends Animal {\\n  speak() { console.log('ニャー！'); }  // 上書き\\n}\\n```"
          },
          {
            "title": "super（スーパー）の使い方",
            "content": "# 親クラスの処理を呼び出す\\n\\n**super** は「親クラス」のことを指します。親の constructor やメソッドを呼び出せます。\\n\\n**身近なたとえ：**\\n「お母さん（親クラス）がやってくれることは任せて、自分（子クラス）は追加でやる」というイメージです。\\n\\n**コード例：**\\n```javascript\\nclass Cat extends Animal {\\n  constructor(name) {\\n    super();  // 親の constructor を呼ぶ\\n    this.name = name;  // 自分だけの設定を追加\\n  }\\n}\\n```\\n\\n**ポイント：**\\n子クラスの constructor では、最初に `super()` を呼ぶ必要があります！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 親クラスAnimalを定義\\nclass Animal {\\n  // speakメソッドを定義\\n  speak() { console.log('...'); }\\n}\\n\\n// CatクラスがAnimalを継承\\nclass Cat extends Animal {\\n  // speakメソッドをオーバーライド\\n  speak() { console.log('ニャー！'); }\\n}\\n\\n// catにnew Cat()を代入\\nconst cat = new Cat();\\n// speak()を呼び出し\\ncat.speak();",
        "holeyCode": "// 親クラスAnimalを定義\\n___ Animal {\\n  // speakメソッドを定義\\n  ___() { console.log('...'); }\\n}\\n\\n// CatクラスがAnimalを継承\\nclass Cat ___ Animal {\\n  // speakメソッドをオーバーライド\\n  speak() { console.log('___'); }\\n}\\n\\n// catにnew Cat()を代入\\nconst cat = ___ Cat();\\n// speak()を呼び出し\\ncat.___();",
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
          null,
          null,
          null,
          "extendsでAnimalを継承します。",
          null,
          "'ニャー！'を出力します。",
          null,
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
          "others": ["class", "speak", "Meow!", "new", "ニャー！"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ニャー！\
"
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
            "title": "static（スタティック）とは？",
            "content": "# インスタンスなしで使えるメソッド\\n\\n**static** メソッドは、`new` でインスタンスを作らなくても、クラスから直接呼び出せます。\\n\\n**身近なたとえ：**\\n電卓アプリを使うとき、いちいち「電卓を1台作る」必要はないですよね。「電卓の機能を使う」だけでOK。static も同じで、クラスの機能をすぐ使えます。\\n\\n**コード例：**\\n```javascript\\nclass MathUtil {\\n  static add(a, b) {\\n    return a + b;\\n  }\\n}\\n\\n// new なしで直接呼べる！\\nconsole.log(MathUtil.add(1, 2));  // 3\\n```"
          },
          {
            "title": "static の使いどころ",
            "content": "# ユーティリティ関数として便利\\n\\n**ユーティリティ関数** = よく使う便利な機能をまとめた関数\\n\\n**こんなときに使う：**\\n- 計算ツール（足し算、掛け算など）\\n- 日付の処理（今日の日付を取得など）\\n- データの変換\\n\\n**コード例：**\\n```javascript\\nclass DateUtil {\\n  static today() {\\n    return new Date().toLocaleDateString();\\n  }\\n}\\n\\n// 今日の日付を取得\\nconsole.log(DateUtil.today());\\n```\\n\\n**ポイント：**\\nインスタンスごとに違う値を持つ必要がない処理に使います。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Calculatorクラスを定義\\nclass Calculator {\\n  // static multiplyメソッドを定義\\n  static multiply(a, b) {\\n    // a * bを返す\\n    return a * b;\\n  }\\n}\\n\\n// Calculator.multiply(3, 4)を出力\\nconsole.log(Calculator.multiply(3, 4));",
        "holeyCode": "// Calculatorクラスを定義\\n___ Calculator {\\n  // static multiplyメソッドを定義\\n  ___ multiply(a, b) {\\n    // a * bを返す\\n    ___ a * b;\\n  }\\n}\\n\\n// Calculator.multiply(3, 4)を出力\\nconsole.log(___.multiply(3, 4));",
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
          null,
          null,
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
          "others": [
            "class",
            "return",
            "Calculator"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "12\
"
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
            "title": "Optional Chaining（オプショナルチェイニング）とは？",
            "content": "# 安全にプロパティにアクセスする\\n\\n**?.** を使うと、データがなくてもエラーにならずに `undefined` を返します。\\n\\n**身近なたとえ：**\\n「友達の→お姉さんの→ペットの名前」を聞くとき、お姉さんがいなかったら「わからない」と答えますよね。`?.` も同じで、途中でデータがなければ「undefined（わからない）」を返します。\\n\\n**コード例：**\\n```javascript\\nconst user = { name: 'アリス' };\\nconsole.log(user?.name);           // アリス\\nconsole.log(user?.address?.city);  // undefined（エラーにならない！）\\n```"
          },
          {
            "title": "従来の方法との比較",
            "content": "# コードがシンプルに！\\n\\n**従来の書き方：** 毎回「存在するか」をチェック\\n```javascript\\nconst city = user && user.address && user.address.city;\\n```\\n\\n**Optional Chaining：** `?.` だけでOK！\\n```javascript\\nconst city = user?.address?.city;\\n```\\n\\n**ポイント：**\\n- `?.` は「あれば進む、なければ undefined」\\n- エラーを防ぎながら、コードが短くなる！"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "ボブ\
undefined\
"
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
            "title": "Nullish Coalescing（??）とは？",
            "content": "# null/undefined のときだけ代わりの値を使う\\n\\n**??** は「左側が null か undefined のときだけ、右側の値を使う」という演算子です。\\n\\n**身近なたとえ：**\\n「名前を教えて。わからなかったら『ゲスト』と呼ぶね」というイメージです。\\n\\n**コード例：**\\n```javascript\\nconst name = null ?? 'ゲスト';\\nconsole.log(name);  // ゲスト（null だから）\\n\\nconst count = 0 ?? 10;\\nconsole.log(count);  // 0（0 は null じゃない！）\\n```"
          },
          {
            "title": "|| との違い",
            "content": "# ?? と || の違いを理解しよう\\n\\n**|| は「falsy な値」全部に反応：**\\n- `0`, `''`（空文字）, `false`, `null`, `undefined` 全部\\n\\n**?? は「null と undefined」だけに反応：**\\n- `0` や `''` は「ちゃんとした値」として扱う\\n\\n**比較：**\\n```javascript\\n// || は 0 を「なし」と判断\\nconst a = 0 || 10;    // 10\\n\\n// ?? は 0 を「ちゃんとした値」と判断\\nconst b = 0 ?? 10;    // 0\\n```\\n\\n**ポイント：**\\n「0 や空文字も有効な値として使いたい」なら `??` を使おう！"
          }
        ],
        "initialDisplayMode": "holey",
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
            "expected_output": "デフォルト\
"
          }
        ]
      }
  ]
}
