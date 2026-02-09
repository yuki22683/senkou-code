export const typescriptData3 = {
  "language": "typescript",
  "lessonId": "typescript-3",
  "lessonTitle": "TypeScript III - 高度な型",
  "lessonDescription": "TypeScriptの高度な型システムを学びます。ユーティリティ型、条件型、マップ型など、型の達人を目指しましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "Partial<T>",
      "correctCode": "interface Config {\\n  // ホスト名の型\\n  host: string;\\n  // ポート番号の型\\n  port: number;\\n}\\n// Partial で全プロパティをオプショナルに\\nfunction update(config: Config, patch: Partial<Config>): Config {\\n  return { ...config, ...patch };\\n}\\n\\n// cfgに{host: 'localhost', port: 3000}を代入\\nconst cfg = { host: 'localhost', port: 3000 };\\n// 更新してポートを出力\\nconsole.log(update(cfg, { port: 8080 }).port);",
      "holeyCode": "interface ___ {\\n  // ホスト名の型\\n  host: ___;\\n  // ポート番号の型\\n  port: ___;\\n___\\n// Partial で全プロパティをオプショナルに\\nfunction update(config: ___, patch: Partial<Config>): Config {\\n  return { ...config, ...___ };\\n___\\n___\\n// cfgに{host: 'localhost', port: 3000}を代入\\nconst ___ = { host: 'localhost', port: 3000 };\\n// 更新してポートを出力\\nconsole.___(update(cfg, { port: 8080 }).port);",
      "correctLines": [
          "interface Config {",
          "  // ホスト名の型",
          "  host: string;",
          "  // ポート番号の型",
          "  port: number;",
          "}",
          "// Partial で全プロパティをオプショナルに",
          "function update(config: Config, patch: Partial<Config>): Config {",
          "  return { ...config, ...patch };",
          "}",
          "",
          "// cfgに{host: 'localhost', port: 3000}を代入",
          "const cfg = { host: 'localhost', port: 3000 };",
          "// 更新してポートを出力",
          "console.log(update(cfg, { port: 8080 }).port);"
        ],
      "lineHints": [
          "ホスト名は文字列なので `string` です。",
          null,
          "ポート番号は数値なので `number` です。",
          null,
          "Partial で全プロパティをオプショナルにします。",
          "ポート番号の初期値を数値で指定します。",
          null,
          "取得したいプロパティ名を指定します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Partial",
            "Required",
            "Pick"
          ],
          "others": ["string", "number", "3000", "port", "Config", "}", "patch", "cfg", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "8080\\n"
          }
        ]
      },
    {
      "title": "Required<T>",
      "correctCode": "interface Options {\\n  // デバッグ設定の型\\n  debug?: boolean;\\n  // 詳細出力設定の型\\n  verbose?: boolean;\\n}\\n// Required で全プロパティを必須に\\nfunction init(opts: Required<Options>) {\\n  // debugを出力\\n  console.log(opts.debug);\\n}\\n\\n// オプションを渡して初期化\\ninit({ debug: true, verbose: false });",
      "holeyCode": "interface ___ {\\n  // デバッグ設定の型\\n  debug?: ___;\\n  // 詳細出力設定の型\\n  verbose?: ___;\\n___\\n// Required で全プロパティを必須に\\nfunction init(opts: Required<___>) {\\n  // debugを出力\\n  console.___(opts.debug);\\n___\\n___\\n// オプションを渡して初期化\\n___({ debug: true, verbose: false });",
      "correctLines": [
          "interface Options {",
          "  // デバッグ設定の型",
          "  debug?: boolean;",
          "  // 詳細出力設定の型",
          "  verbose?: boolean;",
          "}",
          "// Required で全プロパティを必須に",
          "function init(opts: Required<Options>) {",
          "  // debugを出力",
          "  console.log(opts.debug);",
          "}",
          "",
          "// オプションを渡して初期化",
          "init({ debug: true, verbose: false });"
        ],
      "lineHints": [
          "デバッグ設定は真偽値なので `boolean` です。",
          null,
          "詳細出力設定は真偽値なので `boolean` です。",
          null,
          "Required で全プロパティを必須にします。",
          "取得したいプロパティ名を指定します。",
          null,
          "verboseの値を真偽値で指定します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Required",
            "Partial",
            "Readonly"
          ],
          "others": ["boolean", "debug", "false", "Options", "}", "log", "init"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\n"
          }
        ]
      },
    {
      "title": "Pick<T, K>",
      "correctCode": "interface Product {\\n  // IDの型\\n  id: number;\\n  // 名前の型\\n  name: string;\\n  // 価格の型\\n  price: number;\\n}\\n// Pick で特定のプロパティを選択\\ntype ProductName = Pick<Product, '名前'>;\\n\\n// 商品名のみを持つオブジェクト\\nconst item: ProductName = { name: 'りんご' };\\n// 名前を出力\\nconsole.log(item.name);",
      "holeyCode": "interface ___ {\\n  // IDの型\\n  id: ___;\\n  // 名前の型\\n  name: ___;\\n  // 価格の型\\n  price: ___;\\n___\\n// Pick で特定のプロパティを選択\\ntype ProductName = Pick<Product, '___'>;\\n___\\n// 商品名のみを持つオブジェクト\\nconst item: ProductName = { name: '___' };\\n// 名前を出力\\nconsole.___(item.name);",
      "correctLines": [
          "interface Product {",
          "  // IDの型",
          "  id: number;",
          "  // 名前の型",
          "  name: string;",
          "  // 価格の型",
          "  price: number;",
          "}",
          "// Pick で特定のプロパティを選択",
          "type ProductName = Pick<Product, '名前'>;",
          "",
          "// 商品名のみを持つオブジェクト",
          "const item: ProductName = { name: 'りんご' };",
          "// 名前を出力",
          "console.log(item.name);"
        ],
      "lineHints": [
          "IDは数値なので `number` です。",
          null,
          "名前は文字列なので `string` です。",
          null,
          "価格は数値なので `number` です。",
          null,
          "Pick で特定のプロパティを選択します。",
          "商品名の値を文字列で指定します。",
          null,
          "取得したいプロパティ名を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Pick",
            "Omit",
            "Extract"
          ],
          "others": ["number", "string", "'りんご'", "name", "Product", "}", "log", "名前", "りんご"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "りんご\\n"
          }
        ]
      },
    {
      "title": "Omit<T, K>",
      "correctCode": "interface User {\\n  // IDの型\\n  id: number;\\n  // 名前の型\\n  name: string;\\n  // 秘密情報の型\\n  secret: string;\\n}\\n// Omit で特定のプロパティを除外\\ntype SafeUser = Omit<User, '秘密'>;\\n\\n// secretを除いたユーザー\\nconst user: SafeUser = { id: 1, name: 'アリス' };\\n// 名前を出力\\nconsole.log(user.name);",
      "holeyCode": "interface ___ {\\n  // IDの型\\n  id: ___;\\n  // 名前の型\\n  name: ___;\\n  // 秘密情報の型\\n  secret: ___;\\n___\\n// Omit で特定のプロパティを除外\\ntype SafeUser = Omit<User, '___'>;\\n___\\n// secretを除いたユーザー\\nconst user: SafeUser = { id: ___, name: 'アリス' };\\n// 名前を出力\\nconsole.___(user.name);",
      "correctLines": [
          "interface User {",
          "  // IDの型",
          "  id: number;",
          "  // 名前の型",
          "  name: string;",
          "  // 秘密情報の型",
          "  secret: string;",
          "}",
          "// Omit で特定のプロパティを除外",
          "type SafeUser = Omit<User, '秘密'>;",
          "",
          "// secretを除いたユーザー",
          "const user: SafeUser = { id: 1, name: 'アリス' };",
          "// 名前を出力",
          "console.log(user.name);"
        ],
      "lineHints": [
          "IDは数値なので `number` です。",
          null,
          "名前は文字列なので `string` です。",
          null,
          "秘密情報は文字列なので `string` です。",
          null,
          "Omit で特定のプロパティを除外します。",
          "名前の値を文字列で指定します。",
          null,
          "取得したいプロパティ名を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Omit",
            "Pick",
            "Exclude"
          ],
          "others": ["number", "string", "'アリス'", "name", "User", "}", "secret", "1", "log", "秘密"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "アリス\\n"
          }
        ]
      },
    {
      "title": "Record<K, V>",
      "correctCode": "// フルーツのユニオン型\\ntype Fruit = 'りんご' | 'バナナ';\\n// Record でキーと値の型を指定\\ntype Prices = Record<Fruit, number>;\\n\\n// 価格オブジェクト\\nconst prices: Prices = {\\n  // りんごの価格\\n  'りんご': 100,\\n  // バナナの価格\\n  'バナナ': 80\\n};\\n\\n// りんごの価格を出力\\nconsole.log(prices['りんご']);",
      "holeyCode": "// フルーツのユニオン型\\ntype Fruit = 'りんご' | '___';\\n// Record でキーと値の型を指定\\ntype Prices = Record<Fruit, ___>;\\n___\\n// 価格オブジェクト\\nconst prices: ___ = {\\n  // りんごの価格\\n  'りんご': ___,\\n  // バナナの価格\\n  'バナナ': ___\\n___\\n___\\n// りんごの価格を出力\\nconsole.___(prices['りんご']);",
      "correctLines": [
          "// フルーツのユニオン型",
          "type Fruit = 'りんご' | 'バナナ';",
          "// Record でキーと値の型を指定",
          "type Prices = Record<Fruit, number>;",
          "",
          "// 価格オブジェクト",
          "const prices: Prices = {",
          "  // りんごの価格",
          "  'りんご': 100,",
          "  // バナナの価格",
          "  'バナナ': 80",
          "};",
          "",
          "// りんごの価格を出力",
          "console.log(prices['りんご']);"
        ],
      "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "Record でキーと値の型を指定します。",
          null,
          null,
          "バナナの価格を数値で指定します。",
          null,
          "取得したいプロパティ名を指定します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Record",
            "Map",
            "Object"
          ],
          "others": ["|", "100", "80", "'りんご'", "'バナナ'", "number", "Prices", "};", "log", "バナナ"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "ReturnType<T>",
      "correctCode": "function createPoint() {\\n  // 座標オブジェクトを返す\\n  return { x: 10, y: 20 };\\n}\\n// ReturnType で戻り値の型を取得\\ntype Point = ReturnType<typeof createPoint>;\\n\\n// pに{x: 5, y: 15}を代入\\nconst p: Point = { x: 5, y: 15 };\\n// 座標の合計を出力\\nconsole.log(p.x + p.y);",
      "holeyCode": "function ___() {\\n  // 座標オブジェクトを返す\\n  return { x: ___, y: 20 };\\n___\\n// ReturnType で戻り値の型を取得\\ntype Point = ReturnType<typeof ___>;\\n___\\n// pに{x: 5, y: 15}を代入\\nconst p: Point = { x: ___, y: 15 };\\n// 座標の合計を出力\\nconsole.___(p.x + p.y);",
      "correctLines": [
          "function createPoint() {",
          "  // 座標オブジェクトを返す",
          "  return { x: 10, y: 20 };",
          "}",
          "// ReturnType で戻り値の型を取得",
          "type Point = ReturnType<typeof createPoint>;",
          "",
          "// pに{x: 5, y: 15}を代入",
          "const p: Point = { x: 5, y: 15 };",
          "// 座標の合計を出力",
          "console.log(p.x + p.y);"
        ],
      "lineHints": [
          "y座標の値を数値で指定します。",
          null,
          "ReturnType で戻り値の型を取得します。",
          "y座標の値を数値で指定します。",
          null,
          "x座標のプロパティ名を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "ReturnType",
            "Parameters",
            "InstanceType"
          ],
          "others": ["20", "15", "x", "createPoint", "10", "}", "5", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "条件型（Conditional Types）",
      "correctCode": "// IsArray条件型を定義\\ntype IsArray<T> = T extends any[] ? true : false;\\n\\n// 配列型をチェック\\ntype A = IsArray<number[]>;\\n// 非配列型をチェック\\ntype B = IsArray<string>;\\n\\n// aに配列判定結果を代入\\nconst a: A = true;\\n// bに非配列判定結果を代入\\nconst b: B = false;\\n// aとbを出力\\nconsole.log(a, b);",
      "holeyCode": "// IsArray条件型を定義\\ntype IsArray<T> = T extends any[] ? true : ___;\\n___\\n// 配列型をチェック\\ntype A = IsArray<___[]>;\\n// 非配列型をチェック\\ntype B = IsArray<___>;\\n___\\n// aに配列判定結果を代入\\nconst a: A = ___;\\n// bに非配列判定結果を代入\\nconst b: B = ___;\\n// aとbを出力\\nconsole.___(a, b);",
      "correctLines": [
          "// IsArray条件型を定義",
          "type IsArray<T> = T extends any[] ? true : false;",
          "",
          "// 配列型をチェック",
          "type A = IsArray<number[]>;",
          "// 非配列型をチェック",
          "type B = IsArray<string>;",
          "",
          "// aに配列判定結果を代入",
          "const a: A = true;",
          "// bに非配列判定結果を代入",
          "const b: B = false;",
          "// aとbを出力",
          "console.log(a, b);"
        ],
      "lineHints": [
          null,
          "条件型で「TがUに当てはまるなら」を表すキーワードです。",
          null,
          null,
          "非配列の型を指定します。",
          null,
          "number[]は配列なので結果はtrueになります。",
          null,
          null,
          "2つ目の変数を出力に追加します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "typeof"
          ],
          "others": ["number", "string", "true", "false", "b", "log", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true false\\n"
          }
        ]
      },
    {
      "title": "infer キーワード",
      "correctCode": "// infer で型を推論して抽出\\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\\n\\n// Promise<string>をアンラップ\\ntype A = Unwrap<Promise<string>>;\\n// numberはそのまま\\ntype B = Unwrap<number>;\\n\\n// aに文字列を代入\\nconst a: A = 'こんにちは';\\n// bに数値を代入\\nconst b: B = 42;\\n// aとbを出力\\nconsole.log(a, b);",
      "holeyCode": "// infer で型を推論して抽出\\ntype Unwrap<___> = T extends Promise<infer U> ? U : T;\\n___\\n// Promise<string>をアンラップ\\ntype A = Unwrap<Promise<___>>;\\n// numberはそのまま\\ntype B = Unwrap<___>;\\n___\\n// aに文字列を代入\\nconst a: A = '___';\\n// bに数値を代入\\nconst b: B = ___;\\n// aとbを出力\\nconsole.___(a, b);",
      "correctLines": [
          "// infer で型を推論して抽出",
          "type Unwrap<T> = T extends Promise<infer U> ? U : T;",
          "",
          "// Promise<string>をアンラップ",
          "type A = Unwrap<Promise<string>>;",
          "// numberはそのまま",
          "type B = Unwrap<number>;",
          "",
          "// aに文字列を代入",
          "const a: A = 'こんにちは';",
          "// bに数値を代入",
          "const b: B = 42;",
          "// aとbを出力",
          "console.log(a, b);"
        ],
      "lineHints": [
          null,
          "Promiseの中身の型を推論して取り出すキーワードです。",
          null,
          null,
          "Promiseではない型を指定します。",
          null,
          "Promise<string>をアンラップした結果の値です。",
          null,
          null,
          "2つ目の変数を出力に追加します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "infer",
            "typeof",
            "keyof"
          ],
          "others": ["string", "number", "'こんにちは'", "42", "b", "T", "log", "こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは 42\\n"
          }
        ]
      },
    {
      "title": "keyof 演算子",
      "correctCode": "interface Person {\\n  // 名前の型\\n  name: string;\\n  // 年齢の型\\n  age: number;\\n}\\n// keyof でオブジェクトのキーを取得\\nfunction getProperty<K extends keyof Person>(p: Person, key: K) {\\n  // キーで値を取得して返す\\n  return p[key];\\n}\\n\\n// personに{name: 'ボブ', age: 30}を代入\\nconst person = { name: 'ボブ', age: 30 };\\n// 名前を取得して出力\\nconsole.log(getProperty(person, '名前'));",
      "holeyCode": "interface ___ {\\n  // 名前の型\\n  name: ___;\\n  // 年齢の型\\n  age: ___;\\n___\\n// keyof でオブジェクトのキーを取得\\nfunction getProperty<___ extends keyof Person>(p: Person, key: K) {\\n  // キーで値を取得して返す\\n  return p[___];\\n___\\n___\\n// personに{name: 'ボブ', age: 30}を代入\\nconst ___ = { name: 'ボブ', age: 30 };\\n// 名前を取得して出力\\nconsole.___(getProperty(person, '名前'));",
      "correctLines": [
          "interface Person {",
          "  // 名前の型",
          "  name: string;",
          "  // 年齢の型",
          "  age: number;",
          "}",
          "// keyof でオブジェクトのキーを取得",
          "function getProperty<K extends keyof Person>(p: Person, key: K) {",
          "  // キーで値を取得して返す",
          "  return p[key];",
          "}",
          "",
          "// personに{name: 'ボブ', age: 30}を代入",
          "const person = { name: 'ボブ', age: 30 };",
          "// 名前を取得して出力",
          "console.log(getProperty(person, '名前'));"
        ],
      "lineHints": [
          "名前は文字列なのでstring型です。",
          null,
          "年齢は数値なのでnumber型です。",
          null,
          "オブジェクトのキーをユニオン型として取得するキーワードです。",
          "引数で受け取ったkeyを使ってプロパティにアクセスします。",
          null,
          "Bobの年齢を数値で指定します。",
          null,
          "取得したいプロパティ名を文字列で指定します。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "keyof",
            "typeof",
            "instanceof"
          ],
          "others": ["string", "number", "key", "30", "'名前'", "Person", "}", "K", "person", "log", "}", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボブ\\n"
          }
        ]
      },
    {
      "title": "マップ型（Mapped Types）",
      "correctCode": "// マップ型の定義\\ntype Optional<T> = {\\n  // in でキーをイテレート\\n  [K in keyof T]?: T[K];\\n};\\n\\ninterface Config {\\n  // ホスト名の型\\n  host: string;\\n  // ポート番号の型\\n  port: number;\\n}\\n\\n// 部分的なConfigオブジェクト\\nconst partial: Optional<Config> = { host: 'localhost' };\\n// ホスト名を出力\\nconsole.log(partial.host);",
      "holeyCode": "// マップ型の定義\\ntype Optional<___> = {\\n  // in でキーをイテレート\\n  [___ in keyof T]?: T[K];\\n___\\n___\\ninterface ___ {\\n  // ホスト名の型\\n  host: ___;\\n  // ポート番号の型\\n  port: ___;\\n___\\n___\\n// 部分的なConfigオブジェクト\\nconst partial: Optional<Config> = { host: '___' };\\n// ホスト名を出力\\nconsole.___(partial.host);",
      "correctLines": [
          "// マップ型の定義",
          "type Optional<T> = {",
          "  // in でキーをイテレート",
          "  [K in keyof T]?: T[K];",
          "};",
          "",
          "interface Config {",
          "  // ホスト名の型",
          "  host: string;",
          "  // ポート番号の型",
          "  port: number;",
          "}",
          "",
          "// 部分的なConfigオブジェクト",
          "const partial: Optional<Config> = { host: 'localhost' };",
          "// ホスト名を出力",
          "console.log(partial.host);"
        ],
      "lineHints": [
          null,
          "Tの全てのキーに対して処理を行うキーワードです。",
          null,
          "ホスト名は文字列なので `string` です。",
          "ポート番号は数値なので `number` です。",
          null,
          "出力するプロパティ名を指定します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "of",
            "from"
          ],
          "others": ["string", "number", "'localhost'", "host", "T", "K", "};", "Config", "}", "localhost", "log", "};", "", "}", "};", "", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "localhost\\n"
          }
        ]
      }
  ]
}
