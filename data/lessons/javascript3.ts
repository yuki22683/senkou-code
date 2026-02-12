export const javascriptData3 = {
  "language": "javascript",
  "lessonId": "javascript-3",
  "lessonTitle": "JavaScript III - 非同期処理",
  "lessonDescription": "JavaScriptの非同期処理を学びます。Promise、async/await、そしてモダンなJavaScriptの機能を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "非同期処理とは",
      "content": "時間のかかる処理を**待たずに**次へ進む仕組みです。\\n\\n- ファイルの読み込み\\n- サーバーへの通信\\n- タイマー処理\\n\\nこれらは完了を待つと画面が固まってしまいます。"
    },
    {
      "title": "Promise",
      "content": "非同期処理の結果を表すオブジェクトです。\\n\\n```javascript\\nconst p = new Promise((resolve) => {\\n  resolve('完了！');\\n});\\np.then(msg => console.log(msg));\\n```\\n\\n`then` で完了後の処理を書きます。"
    },
    {
      "title": "async/await",
      "content": "Promiseをより簡潔に書けます。\\n\\n```javascript\\nasync function getData() {\\n  const result = await fetch(url);\\n  return result;\\n}\\n```\\n\\n`await` で完了を待ちます。"
    },
    {
      "title": "エラー処理 catch",
      "content": "非同期処理のエラーを捕捉します。\\n\\n```javascript\\np.then(data => console.log(data))\\n .catch(err => console.log('エラー'));\\n```"
    }
  ],
  "exercises": [
    {
      "title": "Promise の基本",
      "description": "非同期処理について学びます",
      "tutorialSlides": [
        {
          "title": "Promise（プロミス）とは？",
          "content": "# 「あとで届くよ」という約束\\n\\n**非同期処理** とは、時間のかかる処理を待たずに次の処理を進める仕組みです。\\n\\n**身近なたとえ：**\\nピザの宅配を想像してください。注文したら「30分後に届けます」という **約束（Promise）** をもらいますよね。届くまで待たずに他のことができます。\\n\\n**Promise は「約束の証明書」：**\\n- 処理が成功したら結果を届ける（resolve）\\n- 失敗したらエラーを届ける（reject）\\n\\n**コード例：**\\n```javascript\\nconst promise = new Promise((resolve, reject) => {\\n  resolve('成功！');  // 約束を果たす\\n});\\n```"
        },
        {
          "title": "then で結果を受け取る",
          "content": "# 約束が届いたときの処理\\n\\n**then（ゼン）** は「約束が届いたらこれをする」という意味です。\\n\\n**書き方：**\\n- `.then()` ：成功したときの処理\\n- `.catch()` ：失敗したときの処理\\n\\n**コード例：**\\n```javascript\\npromise\\n  .then(result => console.log(result))   // 成功！\\n  .catch(error => console.log(error));   // エラー時\\n```\\n\\n**ピザの例でいうと：**\\n- `.then()` ：ピザが届いたら食べる\\n- `.catch()` ：届かなかったらお店に電話する"
        }
      ],
      "correctCode": "// Promise コンストラクタで作成\\nconst p = new Promise((resolve) => {\\n  // 'こんにちは Promise!' で解決\\n  resolve('こんにちは Promise!');\\n// 文を実行\\n});\\n\\n// then でコールバックを登録\\np.then(msg => console.log(msg));",
      "holeyCode": "// Promise コンストラクタで作成\\n___ ___ = ___ ___((___) => {\\n  // 'こんにちは Promise!' で解決\\n  ___('___');\\n// 文を実行\\n___\\n___\\n// then でコールバックを登録\\n___.___(___ => ___.___(___));",
      "correctLines": [
          "// Promise コンストラクタで作成",
          "const p = new Promise((resolve) => {",
          "  // 'こんにちは Promise!' で解決",
          "  resolve('こんにちは Promise!');",
          "// 文を実行",
          "});",
          "",
          "// then でコールバックを登録",
          "p.then(msg => console.log(msg));"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          ""
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
      "description": "Promise.resolve()について学びます",
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "async（アシンク）とは？",
          "content": "# 非同期関数を作る魔法の言葉\\n\\n**async** を関数の前につけると、その関数は自動的に Promise を返すようになります。\\n\\n**身近なたとえ：**\\n「async」は「この関数は約束を返しますよ」という看板のようなものです。\\n\\n**書き方：**\\n```javascript\\nasync function hello() {\\n  return 'Hello!';\\n}\\n// hello() を呼ぶと Promise が返ってくる\\n```\\n\\n**ポイント：**\\n`return` で返した値は、自動的に Promise に包まれます。"
        },
        {
          "title": "async の使い方",
          "content": "# 戻り値は自動で Promise になる！\\n\\n普通に値を `return` するだけで、Promise として扱えます。\\n\\n**コード例：**\\n```javascript\\nasync function getData() {\\n  return { name: 'Alice' };\\n}\\n\\n// 普通のオブジェクトを返しているけど...\\n// Promise として扱える！\\ngetData().then(data => console.log(data.name));\\n```\\n**実行結果：**\\n```\\nAlice\\n```"
        }
      ],
      "correctCode": "// async キーワードで非同期関数を定義\\nasync function getMessage() {\\n  // return で値を返す\\n  return '非同期成功！';\\n}\\n\\n// then でメッセージを出力\\ngetMessage().then(msg => console.log(msg));",
      "holeyCode": "// async キーワードで非同期関数を定義\\n___ ___ ___() {\\n  // return で値を返す\\n  ___ '___';\\n// ブロックを閉じる\\n___\\n___\\n// then でメッセージを出力\\n___().___(___ => ___.___(___));",
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
          "",
          null,
          "",
          null,
          "",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "async",
            "await",
            "function",
            "return"
          ],
          "others": ["getMessage", "then", "msg", "console", "log", "非同期成功！", "}", "", "// then でメッセージを出力"]
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
      "description": "awaitについて学びます",
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
      "correctCode": "// awaitでPromiseを待つasync main()関数を定義\\nasync function main() {\\n  // await でPromiseの結果を待つ\\n  const value = await Promise.resolve(100);\\n  // console.log で出力\\n  console.log(value);\\n}\\n\\n// main関数を呼び出す\\nmain();",
      "holeyCode": "// awaitでPromiseを待つasync main()関数を定義\\n___ ___ ___() {\\n  // await でPromiseの結果を待つ\\n  ___ ___ = ___ ___.___(___);\\n  // console.log で出力\\n  ___.___(___);\\n// ブロックを閉じる\\n___\\n___\\n// main関数を呼び出す\\n___();",
      "correctLines": [
          "// awaitでPromiseを待つasync main()関数を定義",
          "async function main() {",
          "  // await でPromiseの結果を待つ",
          "  const value = await Promise.resolve(100);",
          "  // console.log で出力",
          "  console.log(value);",
          "}",
          "",
          "// main関数を呼び出す",
          "main();"
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
          null
        ],
        "candidates": {
          "keywords": [
            "await",
            "async",
            "return",
            "const",
            "function"
          ],
          "others": ["main", "value", "Promise", "resolve", "100", "console", "log", "}", "", "// main関数を呼び出す"]
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
      "description": "Promise.allの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Promise.all とは？",
          "content": "# 複数の Promise を同時に待つ\\n\\n**Promise.all** は、複数の Promise を同時に実行して、全部が完了するのを待ちます。\\n\\n**身近なたとえ：**\\n3人の友達にそれぞれ買い物をお願いして、全員が戻ってきたら出発する、というイメージです。\\n\\n**コード例：**\\n```javascript\\nconst p1 = Promise.resolve(1);\\nconst p2 = Promise.resolve(2);\\n\\nPromise.all([p1, p2]).then(results => {\\n  console.log(results);  // [1, 2]\\n});\\n```\\n\\n**ポイント：**\\n結果は配列で返ってきます！"
        },
        {
          "title": "並行処理の利点",
          "content": "# 同時に実行すると速い！\\n\\n**順番に実行 vs 同時に実行：**\\n- 順番：3秒 + 3秒 = 6秒かかる\\n- 同時：3秒で両方終わる！\\n\\n**コード例：**\\n```javascript\\nasync function fetchAll() {\\n  // 2つのリクエストを同時に実行！\\n  const [users, posts] = await Promise.all([\\n    fetch('/users'),\\n    fetch('/posts')\\n  ]);\\n}\\n```\\n\\n**ポイント：**\\n互いに関係のない処理は、`Promise.all` で同時に実行すると時間短縮できます。"
        }
      ],
      "correctCode": "// p1 = 10 で解決するPromiseを作成\\nconst p1 = Promise.resolve(10);\\n// p2 = 20 で解決するPromiseを作成\\nconst p2 = Promise.resolve(20);\\n// all で全てのPromiseを待つ\\nPromise.all([p1, p2]).then(nums => {\\n  // 1番目と2番目の値を足して合計を出力\\n  console.log(nums[0] + nums[1]);\\n});",
      "holeyCode": "// p1 = 10 で解決するPromiseを作成\\n___ ___ = ___.___(___);\\n// p2 = 20 で解決するPromiseを作成\\n___ ___ = ___.___(___);\\n// all で全てのPromiseを待つ\\n___.___([___, ___]).___(___ => {\\n  // 1番目と2番目の値を足して合計を出力\\n  ___.___(___[___] + ___[___]);\\n// 文を実行\\n___);",
      "correctLines": [
          "// p1 = 10 で解決するPromiseを作成",
          "const p1 = Promise.resolve(10);",
          "// p2 = 20 で解決するPromiseを作成",
          "const p2 = Promise.resolve(20);",
          "// all で全てのPromiseを待つ",
          "Promise.all([p1, p2]).then(nums => {",
          "  // 1番目と2番目の値を足して合計を出力",
          "  console.log(nums[0] + nums[1]);",
          "});"
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
          null
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
      "description": "クラスの定義の仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "class（クラス）とは？",
          "content": "# オブジェクトの「設計図」\\n\\n**class** は、オブジェクトを作るための設計図です。\\n\\n**身近なたとえ：**\\nたい焼きの「型」を想像してください。同じ型から何個でもたい焼きを作れますよね。class も同じで、同じ設計図から何個でもオブジェクトを作れます。\\n\\n**コード例：**\\n```javascript\\nclass Person {\\n  // 初期設定（constructor = コンストラクタ）\\n  constructor(name) {\\n    this.name = name;  // this は「自分」という意味\\n  }\\n  // できること（メソッド）\\n  greet() {\\n    console.log(`Hello, ${this.name}!`);\\n  }\\n}\\n```"
        },
        {
          "title": "インスタンスの作成",
          "content": "# new で実際のオブジェクトを作る\\n\\n設計図から作った実際のオブジェクトを **インスタンス** と呼びます。\\n\\n**身近なたとえ：**\\n- class（設計図）= たい焼きの型\\n- インスタンス = 実際のたい焼き\\n\\n**コード例：**\\n```javascript\\n// new で Person クラスからインスタンスを作る\\nconst alice = new Person('Alice');\\nalice.greet();\\n```\\n**実行結果：**\\n```\\nHello, Alice!\\n```\\n\\n**ポイント：**\\n`new` をつけて class を呼び出すと、インスタンスが作られます。"
        }
      ],
      "correctCode": "// Dogクラスを定義\\nclass Dog {\\n  // constructorでnameを初期化\\n  constructor(name) {\\n    // this.nameにnameを代入\\n    this.name = name;\\n  }\\n  bark() {\\n    // テンプレートリテラルで出力\\n    console.log(`${this.name}: ワン！`);\\n  }\\n}\\n\\n// dogにDogインスタンス（引数'ポチ'）を代入\\nconst dog = new Dog('ポチ');\\n// barkメソッドを呼び出し\\ndog.bark();",
      "holeyCode": "// Dogクラスを定義\\n___ ___ {\\n  // constructorでnameを初期化\\n  ___(___) {\\n    // this.nameにnameを代入\\n    ___.___ = ___;\\n  // ブロックを閉じる\\n  ___\\n  // ブロックを開始\\n  ___() {\\n    // テンプレートリテラルで出力\\n    ___.___(`${___.___}___`);\\n  // ブロックを閉じる\\n  ___\\n// ブロックを閉じる\\n___\\n___\\n// dogにDogインスタンス（引数'ポチ'）を代入\\n___ ___ = ___ ___(___);\\n// barkメソッドを呼び出し\\n___.___();",
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
          "// dogにDogインスタンス（引数'ポチ'）を代入",
          "const dog = new Dog('ポチ');",
          "// barkメソッドを呼び出し",
          "dog.bark();"
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
          null
        ],
        "candidates": {
          "keywords": [
            "class",
            "function",
            "const",
            "new"
          ],
          "others": ["Dog", "constructor", "name", "this", "bark", "console", "log", ": ワン！", "'ポチ'", "dog", "}", "", "bark() {", "console.log", "dogにnew Dog('ポチ')を代入", "// barkメソッドを呼び出し", "dog.bark();", "dogにDogインスタンス（引数'ポチ'）を代入"]
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
      "description": "既存のクラスの機能を引き継いで、新しいクラスを作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "extends（継承・けいしょう）とは？",
          "content": "# 既存のクラスを拡張する\\n\\n**extends** を使うと、既存のクラスの機能を引き継いで新しいクラスを作れます。これを **継承** と呼びます。\\n\\n**身近なたとえ：**\\n「動物」というグループがあって、その下に「猫」「犬」があるイメージです。猫も犬も動物の特徴を持っていますよね。\\n\\n**コード例：**\\n```javascript\\nclass Animal {\\n  speak() { console.log('...'); }\\n}\\n\\n// Animal の機能を引き継いで Cat を作る\\nclass Cat extends Animal {\\n  speak() { console.log('Meow!'); }  // 上書き\\n}\\n```"
        },
        {
          "title": "super（スーパー）の使い方",
          "content": "# 親クラスの処理を呼び出す\\n\\n**super** は「親クラス」のことを指します。親の constructor やメソッドを呼び出せます。\\n\\n**身近なたとえ：**\\n「お母さん（親クラス）がやってくれることは任せて、自分（子クラス）は追加でやる」というイメージです。\\n\\n**コード例：**\\n```javascript\\nclass Cat extends Animal {\\n  constructor(name) {\\n    super();  // 親の constructor を呼ぶ\\n    this.name = name;  // 自分だけの設定を追加\\n  }\\n}\\n```\\n\\n**ポイント：**\\n子クラスの constructor では、最初に `super()` を呼ぶ必要があります！"
        }
      ],
      "correctCode": "// 親クラスAnimalを定義\\nclass Animal {\\n  // speakメソッドを定義\\n  speak() { console.log('...'); }\\n}\\n\\n// CatクラスがAnimalを継承\\nclass Cat extends Animal {\\n  // speakメソッドをオーバーライド\\n  speak() { console.log('ニャー！'); }\\n}\\n\\n// catにCatインスタンスを代入\\nconst cat = new Cat();\\n// 鳴き声メソッドを呼び出し\\ncat.speak();",
      "holeyCode": "// 親クラスAnimalを定義\\n___ ___ {\\n  // speakメソッドを定義\\n  ___() { ___.___(___); }\\n// ブロックを閉じる\\n___\\n___\\n// CatクラスがAnimalを継承\\n___ ___ ___ ___ {\\n  // speakメソッドをオーバーライド\\n  ___() { ___.___(___); }\\n// ブロックを閉じる\\n___\\n___\\n// catにCatインスタンスを代入\\n___ ___ = ___ ___();\\n// 鳴き声メソッドを呼び出し\\n___.___();",
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
          "// catにCatインスタンスを代入",
          "const cat = new Cat();",
          "// 鳴き声メソッドを呼び出し",
          "cat.speak();"
        ],
      "lineHints": [
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
          null,
          null,
          ""
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
          "others": ["Animal", "Cat", "speak", "console", "log", "'...'", "'ニャー！'", "cat", "}", "", "// CatクラスがAnimalを継承", "//", "speakメソッドをオーバーライド", "// catにCatインスタンスを代入", "const cat = new Cat();", "cat.speak();"]
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
      "description": "静的メソッドの仕組みと使い方を学びます",
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
      "correctCode": "// Calculatorクラスを定義\\nclass Calculator {\\n  // static multiplyメソッドを定義\\n  static multiply(a, b) {\\n    // 2つの数を掛けた結果を返す\\n    return a * b;\\n  }\\n}\\n\\n// 3と4を掛けた結果を出力\\nconsole.log(Calculator.multiply(3, 4));",
      "holeyCode": "// Calculatorクラスを定義\\n___ ___ {\\n  // static multiplyメソッドを定義\\n  ___ ___(___, ___) {\\n    // 2つの数を掛けた結果を返す\\n    ___ ___ * ___;\\n  // ブロックを閉じる\\n  ___\\n// ブロックを閉じる\\n___\\n___\\n// 3と4を掛けた結果を出力\\n___.___(___.___(___,___));",
      "correctLines": [
          "// Calculatorクラスを定義",
          "class Calculator {",
          "  // static multiplyメソッドを定義",
          "  static multiply(a, b) {",
          "    // 2つの数を掛けた結果を返す",
          "    return a * b;",
          "  }",
          "}",
          "",
          "// 3と4を掛けた結果を出力",
          "console.log(Calculator.multiply(3, 4));"
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
          null
        ],
        "candidates": {
          "keywords": [
            "static",
            "public",
            "private",
            "class",
            "return"
          ],
          "others": ["Calculator", "multiply", "a", "b", "console", "log", "3", "4", "}", "", "// 3と4を掛けた結果を出力", "console.log(Calculator.multiply(3, 4));"]
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
      "description": "?.について学びます",
      "tutorialSlides": [
        {
          "title": "Optional Chaining（オプショナルチェイニング）とは？",
          "content": "# 安全にプロパティにアクセスする\\n\\n**?.** を使うと、データがなくてもエラーにならずに `undefined` を返します。\\n\\n**身近なたとえ：**\\n「友達の→お姉さんの→ペットの名前」を聞くとき、お姉さんがいなかったら「わからない」と答えますよね。`?.` も同じで、途中でデータがなければ「undefined（わからない）」を返します。\\n\\n**コード例：**\\n```javascript\\nconst user = { name: 'Alice' };\\nconsole.log(user?.name);           // Alice\\nconsole.log(user?.address?.city);  // undefined（エラーにならない！）\\n```"
        },
        {
          "title": "従来の方法との比較",
          "content": "# コードがシンプルに！\\n\\n**従来の書き方：** 毎回「存在するか」をチェック\\n```javascript\\nconst city = user && user.address && user.address.city;\\n```\\n\\n**Optional Chaining：** `?.` だけでOK！\\n```javascript\\nconst city = user?.address?.city;\\n```\\n\\n**ポイント：**\\n- `?.` は「あれば進む、なければ undefined」\\n- エラーを防ぎながら、コードが短くなる！"
        }
      ],
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
      "description": "??について学びます",
      "tutorialSlides": [
        {
          "title": "Nullish Coalescing（??）とは？",
          "content": "# null/undefined のときだけ代わりの値を使う\\n\\n**??** は「左側が null か undefined のときだけ、右側の値を使う」という演算子です。\\n\\n**身近なたとえ：**\\n「名前を教えて。わからなかったら『ゲスト』と呼ぶね」というイメージです。\\n\\n**コード例：**\\n```javascript\\nconst name = null ?? 'Guest';\\nconsole.log(name);  // Guest（null だから）\\n\\nconst count = 0 ?? 10;\\nconsole.log(count);  // 0（0 は null じゃない！）\\n```"
        },
        {
          "title": "|| との違い",
          "content": "# ?? と || の違いを理解しよう\\n\\n**|| は「falsy な値」全部に反応：**\\n- `0`, `''`（空文字）, `false`, `null`, `undefined` 全部\\n\\n**?? は「null と undefined」だけに反応：**\\n- `0` や `''` は「ちゃんとした値」として扱う\\n\\n**比較：**\\n```javascript\\n// || は 0 を「なし」と判断\\nconst a = 0 || 10;    // 10\\n\\n// ?? は 0 を「ちゃんとした値」と判断\\nconst b = 0 ?? 10;    // 0\\n```\\n\\n**ポイント：**\\n「0 や空文字も有効な値として使いたい」なら `??` を使おう！"
        }
      ],
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
