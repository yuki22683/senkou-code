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
        "description": "全てのプロパティをオプショナルにするPartialを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "Partial とは？",
            "content": "# 全プロパティをオプショナルに\n\n**Partial<T>**（パーシャル）は、TypeScriptに組み込まれた「便利な型変換ツール」（ユーティリティ型）の1つです。型Tの全てのプロパティを「あってもなくてもOK」に変えます。\n\n## たとえ話\n\n「必ず全部書いて！」というアンケートを、「書きたい項目だけでOK！」に変えるようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\ninterface User {\n  name: string;   // 必須\n  age: number;    // 必須\n}\n\ntype PartialUser = Partial<User>;\n// ↓ これと同じ意味になる\n// { name?: string; age?: number; }\n// 全部オプショナル（?付き）になった！\n```"
          },
          {
            "title": "使いどころ",
            "content": "# 部分的な更新に便利\n\nデータの一部だけを更新したいときに便利です。全項目を毎回指定しなくていいのです！\n\n## たとえ話\n\nプロフィールの「名前だけ変えたい」「年齢だけ変えたい」というとき、変えたい項目だけ指定できます。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction updateUser(user: User, updates: Partial<User>) {\n  return { ...user, ...updates };\n}\n\n// 名前だけ更新、ageは省略OK！\nupdateUser(user, { name: 'Bob' });\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "interface Config {\n  // ホスト名の型\n  host: string;\n  // ポート番号の型\n  port: number;\n}\n// Partial で全プロパティをオプショナルに\nfunction update(config: Config, patch: Partial<Config>): Config {\n  return { ...config, ...patch };\n}\n\n// 設定オブジェクトを作成\nconst cfg = { host: 'localhost', port: 3000 };\n// 更新してポートを出力\nconsole.log(update(cfg, { port: 8080 }).port);",
        "holeyCode": "interface ___ {\n  // ホスト名の型\n  host: ___;\n  // ポート番号の型\n  port: ___;\n___\n// Partial で全プロパティをオプショナルに\nfunction update(config: ___, patch: Partial<Config>): Config {\n  return { ...config, ...___ };\n___\n\n// 設定オブジェクトを作成\nconst ___ = { host: 'localhost', port: 3000 };\n// 更新してポートを出力\nconsole.___(update(cfg, { port: 8080 }).port);",
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
          "// 設定オブジェクトを作成",
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
          null,
          null,
          null,
          null,
          null,
          null,
          null
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
            "expected_output": "8080\n"
          }
        ]
      },
    {
        "title": "Required<T>",
        "description": "全てのプロパティを必須にするRequiredを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "Required とは？",
            "content": "# 全プロパティを必須に\n\n**Required<T>**（リクワイアード）は、Partialの逆で、全てのプロパティを「必ず書いて！」に変えます。\n\n## たとえ話\n\n「任意」だったアンケート項目を、「全部必須」に変えるようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\ninterface Props {\n  name?: string;   // オプショナル（任意）\n  age?: number;    // オプショナル（任意）\n}\n\ntype RequiredProps = Required<Props>;\n// ↓ これと同じ意味になる\n// { name: string; age: number; }\n// ?が消えて、全部必須になった！\n```"
          },
          {
            "title": "使いどころ",
            "content": "# オプショナルを必須に変換\n\n「ここでは全項目が揃っていることを保証したい」というときに使います。\n\n## たとえ話\n\n登録時は一部の項目が任意でも、「最終確認画面」では全項目が入力されていることを確認したいですよね。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction processUser(user: Required<User>) {\n  // 全プロパティが存在することが保証される！\n  console.log(user.name.toUpperCase());\n}\n```\n\nこれで「nameがないかも」と心配せずに安全にコードが書けます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "interface Options {\n  // デバッグ設定の型\n  debug?: boolean;\n  // 詳細出力設定の型\n  verbose?: boolean;\n}\n// Required で全プロパティを必須に\nfunction init(opts: Required<Options>) {\n  // debugを出力\n  console.log(opts.debug);\n}\n\n// オプションを渡して初期化\ninit({ debug: true, verbose: false });",
        "holeyCode": "interface ___ {\n  // デバッグ設定の型\n  debug?: ___;\n  // 詳細出力設定の型\n  verbose?: ___;\n___\n// Required で全プロパティを必須に\nfunction init(opts: Required<___>) {\n  // debugを出力\n  console.___(opts.debug);\n___\n\n// オプションを渡して初期化\n___({ debug: true, verbose: false });",
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
          null,
          null,
          null,
          null,
          null
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
            "expected_output": "true\n"
          }
        ]
      },
    {
        "title": "Pick<T, K>",
        "description": "特定のプロパティだけを取り出すPickを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "Pick とは？",
            "content": "# 特定のプロパティを選択\n\n**Pick<T, K>**（ピック）は、型Tから「欲しいプロパティだけ」を選んで取り出します。\n\n## たとえ話\n\n名簿の中から「名前と電話番号だけ」を抜き出して別のリストを作るようなものです。全部の情報は要らなくて、必要な部分だけ欲しいときに使います。\n\n## コードで書くとこうなるよ\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\n// id と name だけを選ぶ\ntype UserPreview = Pick<User, 'id' | 'name'>;\n// ↓ これと同じ意味になる\n// { id: number; name: string; }\n// emailは含まれない！\n```"
          },
          {
            "title": "使いどころ",
            "content": "# 必要な情報だけを抽出\n\n一部の情報だけ使いたいとき、Pickで新しい型を作れます。\n\n## たとえ話\n\n全ユーザー情報のうち、「名前だけ表示するカード」を作りたいとき。パスワードやメールは不要ですよね。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction getPreview(user: User): Pick<User, 'name'> {\n  return { name: user.name };\n}\n```\n\nこれで「nameだけを持つ型」が作れます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "interface Product {\n  // IDの型\n  id: number;\n  // 名前の型\n  name: string;\n  // 価格の型\n  price: number;\n}\n// Pick で特定のプロパティを選択\ntype ProductName = Pick<Product, 'name'>;\n\n// 商品名のみを持つオブジェクト\nconst item: ProductName = { name: 'Apple' };\n// 名前を出力\nconsole.log(item.name);",
        "holeyCode": "interface ___ {\n  // IDの型\n  id: ___;\n  // 名前の型\n  name: ___;\n  // 価格の型\n  price: ___;\n___\n// Pick で特定のプロパティを選択\ntype ProductName = Pick<Product, '___'>;\n\n// 商品名のみを持つオブジェクト\nconst item: ProductName = { name: '___' };\n// 名前を出力\nconsole.___(item.name);",
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
          "type ProductName = Pick<Product, 'name'>;",
          "",
          "// 商品名のみを持つオブジェクト",
          "const item: ProductName = { name: 'Apple' };",
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
          null,
          null,
          null
        ],
        "candidates": {
          "types": [
            "Pick",
            "Omit",
            "Extract"
          ],
          "others": ["number", "string", "'Apple'", "name", "Product", "}", "Apple", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Apple\n"
          }
        ]
      },
    {
        "title": "Omit<T, K>",
        "description": "特定のプロパティを除外するOmitを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "Omit とは？",
            "content": "# 特定のプロパティを除外\n\n**Omit<T, K>**（オミット）は、Pickの逆で、「指定したプロパティを除外」します。\n\n## たとえ話\n\n名簿から「電話番号だけ消して」他の情報はそのまま使いたいとき、Omitが便利です。「これだけ要らない」というときに使います。\n\n## コードで書くとこうなるよ\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  password: string;  // 秘密の情報\n}\n\n// passwordだけ除外する\ntype PublicUser = Omit<User, 'password'>;\n// ↓ これと同じ意味になる\n// { id: number; name: string; }\n// passwordが消えた！\n```"
          },
          {
            "title": "使いどころ",
            "content": "# 機密情報を除外\n\n「見せたくない情報」を除いて公開用のデータを作るときに便利です。\n\n## たとえ話\n\nユーザーのパスワードは他の人に見せてはいけませんよね。公開するデータからパスワードだけ除外できます。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction toPublic(user: User): Omit<User, 'password'> {\n  const { password, ...rest } = user;\n  return rest;\n}\n```\n\nこれで安全に公開用データが作れます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "interface User {\n  // IDの型\n  id: number;\n  // 名前の型\n  name: string;\n  // 秘密情報の型\n  secret: string;\n}\n// Omit で特定のプロパティを除外\ntype SafeUser = Omit<User, 'secret'>;\n\n// secretを除いたユーザー\nconst user: SafeUser = { id: 1, name: 'Alice' };\n// 名前を出力\nconsole.log(user.name);",
        "holeyCode": "interface ___ {\n  // IDの型\n  id: ___;\n  // 名前の型\n  name: ___;\n  // 秘密情報の型\n  secret: ___;\n___\n// Omit で特定のプロパティを除外\ntype SafeUser = Omit<User, '___'>;\n\n// secretを除いたユーザー\nconst user: SafeUser = { id: ___, name: 'Alice' };\n// 名前を出力\nconsole.___(user.name);",
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
          "type SafeUser = Omit<User, 'secret'>;",
          "",
          "// secretを除いたユーザー",
          "const user: SafeUser = { id: 1, name: 'Alice' };",
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
          null,
          null,
          null
        ],
        "candidates": {
          "types": [
            "Omit",
            "Pick",
            "Exclude"
          ],
          "others": ["number", "string", "'Alice'", "name", "User", "}", "secret", "1", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Alice\n"
          }
        ]
      },
    {
        "title": "Record<K, V>",
        "description": "キーと値の型を指定したオブジェクト型を作りましょう。",
        "difficulty": "hard",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "Record とは？",
            "content": "# キーと値の型を指定\n\n**Record<K, V>**（レコード）は、「キー（項目名）」と「値」の型を指定したオブジェクト型を作ります。\n\n## たとえ話\n\n成績表を想像してみてください。「科目名」がキーで、「点数」が値ですよね。\n- 数学 → 90点\n- 英語 → 85点\n\nこんな構造を型で表せます！\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Scores = Record<string, number>;\n// キーは文字列、値は数字\n\nconst scores: Scores = {\n  math: 90,     // 数学の点数\n  english: 85   // 英語の点数\n};\n```"
          },
          {
            "title": "リテラル型と組み合わせ",
            "content": "# 特定のキーに限定\n\nキーを特定の値だけに限定することもできます。これで「決まったキーしか使えない」オブジェクトが作れます。\n\n## たとえ話\n\n信号機の色は「赤・黄・緑」の3つだけですよね。「紫」は無いはず！Recordで決まったキーだけを許可できます。\n\n## コードで書くとこうなるよ\n\n```typescript\n// 決まった状態だけを許可\ntype Status = 'pending' | 'done' | 'error';\ntype StatusColors = Record<Status, string>;\n\nconst colors: StatusColors = {\n  pending: 'yellow',  // 保留中は黄色\n  done: 'green',      // 完了は緑\n  error: 'red'        // エラーは赤\n};\n// この3つ以外は使えない！\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// フルーツのユニオン型\ntype Fruit = 'apple' | 'banana';\n// Record でキーと値の型を指定\ntype Prices = Record<Fruit, number>;\n\n// 価格オブジェクト\nconst prices: Prices = {\n  // りんごの価格\n  apple: 100,\n  // バナナの価格\n  banana: 80\n};\n\n// りんごの価格を出力\nconsole.log(prices.apple);",
        "holeyCode": "// フルーツのユニオン型\ntype Fruit = 'apple' | '___';\n// Record でキーと値の型を指定\ntype Prices = Record<Fruit, ___>;\n\n// 価格オブジェクト\nconst prices: ___ = {\n  // りんごの価格\n  apple: ___,\n  // バナナの価格\n  banana: ___\n___\n\n// りんごの価格を出力\nconsole.___(prices.apple);",
        "correctLines": [
                  "// フルーツのユニオン型",
                  "type Fruit = 'apple' | 'banana';",
                  "// Record でキーと値の型を指定",
                  "type Prices = Record<Fruit, number>;",
                  "",
                  "// 価格オブジェクト",
                  "const prices: Prices = {",
                  "  // りんごの価格",
                  "  apple: 100,",
                  "  // バナナの価格",
                  "  banana: 80",
                  "};",
                  "",
                  "// りんごの価格を出力",
                  "console.log(prices.apple);"
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
                  null,
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "types": [
            "Record",
            "Map",
            "Object"
          ],
          "others": ["|", "100", "80", "apple", "banana", "number", "Prices", "};", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\n"
          }
        ]
      },
    {
        "title": "ReturnType<T>",
        "description": "関数の戻り値の型を取得しましょう。",
        "difficulty": "hard",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "ReturnType とは？",
            "content": "# 関数の戻り値の型を抽出\n\n**ReturnType<T>**（リターンタイプ）は、関数が「何を返すか」の型を取得します。\n\n## たとえ話\n\n自動販売機にお金を入れると「ジュース」が出てきますよね。ReturnTypeは「この自動販売機から何が出てくるか」を調べるようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction getUser() {\n  return { id: 1, name: 'Alice' };\n}\n\n// この関数は何を返す？\ntype User = ReturnType<typeof getUser>;\n// ↓ これと同じ意味になる\n// { id: number; name: string; }\n```"
          },
          {
            "title": "使いどころ",
            "content": "# 型を二重管理しない\n\n関数の戻り値と同じ型を使いたいとき、わざわざ別の場所で型を定義しなくて済みます。\n\n## たとえ話\n\n料理のレシピを変えたら、自動で「完成品の説明」も変わってほしいですよね。ReturnTypeなら、関数を変えれば型も自動で変わります！\n\n## コードで書くとこうなるよ\n\n```typescript\n// 関数の戻り値から型を自動取得\ntype Result = ReturnType<typeof fetchData>;\n\nfunction processResult(result: Result) {\n  // 関数の戻り値と同じ型が使える！\n}\n```\n\nこれで型の書き忘れや不一致を防げます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "function createPoint() {\n  // 座標オブジェクトを返す\n  return { x: 10, y: 20 };\n}\n// ReturnType で戻り値の型を取得\ntype Point = ReturnType<typeof createPoint>;\n\n// Pointオブジェクトを作成\nconst p: Point = { x: 5, y: 15 };\n// 座標の合計を出力\nconsole.log(p.x + p.y);",
        "holeyCode": "function ___() {\n  // 座標オブジェクトを返す\n  return { x: ___, y: 20 };\n___\n// ReturnType で戻り値の型を取得\ntype Point = ReturnType<typeof ___>;\n\n// Pointオブジェクトを作成\nconst p: Point = { x: ___, y: 15 };\n// 座標の合計を出力\nconsole.___(p.x + p.y);",
        "correctLines": [
          "function createPoint() {",
          "  // 座標オブジェクトを返す",
          "  return { x: 10, y: 20 };",
          "}",
          "// ReturnType で戻り値の型を取得",
          "type Point = ReturnType<typeof createPoint>;",
          "",
          "// Pointオブジェクトを作成",
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
          null,
          null,
          null
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
            "expected_output": "20\n"
          }
        ]
      },
    {
        "title": "条件型（Conditional Types）",
        "description": "条件によって型を変える条件型を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "条件型とは？",
            "content": "# 型レベルの「もし〜なら」\n\n**条件型**（Conditional Types）は、「もしこの型なら、こっち。そうでなければ、あっち」という分岐ができます。\n\n## たとえ話\n\n「もし犬なら『ワン』、そうでなければ『ニャー』と鳴く」のように、条件によって結果が変わりますよね。型でも同じことができるのです！\n\n## 書き方\n\n`T extends U ? X : Y` という形で書きます。\n- もしTがUに当てはまるなら → X\n- そうでなければ → Y\n\n## コードで書くとこうなるよ\n\n```typescript\ntype IsString<T> = T extends string ? 'yes' : 'no';\n\ntype A = IsString<string>;  // 'yes'（文字列だから）\ntype B = IsString<number>;  // 'no'（数字だから）\n```"
          },
          {
            "title": "実用例",
            "content": "# 型に応じた変換\n\n配列なら中身を取り出す、そうでなければそのまま...といった処理ができます。\n\n## たとえ話\n\n「箱なら中身を見せて。箱じゃなければそのまま見せて」という感じです。\n\n## コードで書くとこうなるよ\n\n```typescript\n// 配列なら中身の型を取り出す\ntype Flatten<T> = T extends Array<infer U> ? U : T;\n\ntype A = Flatten<string[]>;  // string（配列の中身）\ntype B = Flatten<number>;    // number（そのまま）\n```\n\n`infer` は「ここの型を推測して！」という意味です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// extends で条件型を定義\ntype IsArray<T> = T extends any[] ? true : false;\n\n// 配列型をチェック\ntype A = IsArray<number[]>;\n// 非配列型をチェック\ntype B = IsArray<string>;\n\n// aに配列判定結果を代入\nconst a: A = true;\n// bに非配列判定結果を代入\nconst b: B = false;\n// aとbを出力\nconsole.log(a, b);",
        "holeyCode": "// extends で条件型を定義\ntype IsArray<T> = T extends any[] ? true : ___;\n\n// 配列型をチェック\ntype A = IsArray<___[]>;\n// 非配列型をチェック\ntype B = IsArray<___>;\n\n// aに配列判定結果を代入\nconst a: A = ___;\n// bに非配列判定結果を代入\nconst b: B = ___;\n// aとbを出力\nconsole.___(a, b);",
        "correctLines": [
          "// extends で条件型を定義",
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
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "typeof"
          ],
          "others": ["number", "string", "true", "false", "b", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true false\n"
          }
        ]
      },
    {
        "title": "infer キーワード",
        "description": "条件型の中で型を推論するinferを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "infer とは？",
            "content": "# 型を推論して抽出\n\n**infer**（インファー）は、条件型の中で「ここの型を自動で見つけて！」とお願いできるキーワードです。\n\n## たとえ話\n\n「この箱の中身は何？」と聞いて、TypeScriptに中身の型を教えてもらうようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\n// 配列の中身の型を取り出す\ntype GetArrayElement<T> = \n  T extends (infer U)[] ? U : never;\n// 「Uを推測して！」とお願い\n\ntype A = GetArrayElement<string[]>; // string\n// 「string[]の中身はstring」と見つけてくれた！\n```"
          },
          {
            "title": "関数の引数型を抽出",
            "content": "# 関数の引数の型も取り出せる\n\ninferを使えば、関数が受け取る引数の型も取り出せます。\n\n## たとえ話\n\n「この関数は何を受け取る？」と聞いて、引数の型を教えてもらえます。\n\n## コードで書くとこうなるよ\n\n```typescript\n// 最初の引数の型を取り出す\ntype FirstArg<T> = \n  T extends (arg: infer A, ...args: any[]) => any \n    ? A \n    : never;\n// 「Aを推測して！」とお願い\n\ntype A = FirstArg<(x: number) => void>; \n// number と見つけてくれた！\n```\n\nこれがTypeScript組み込みの `Parameters` 型の仕組みです！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// infer で型を推論して抽出\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\n\n// Promise<string>をアンラップ\ntype A = Unwrap<Promise<string>>;\n// numberはそのまま\ntype B = Unwrap<number>;\n\n// aに文字列を代入\nconst a: A = 'hello';\n// bに数値を代入\nconst b: B = 42;\n// aとbを出力\nconsole.log(a, b);",
        "holeyCode": "// infer で型を推論して抽出\ntype Unwrap<___> = T extends Promise<infer U> ? U : T;\n\n// Promise<string>をアンラップ\ntype A = Unwrap<Promise<___>>;\n// numberはそのまま\ntype B = Unwrap<___>;\n\n// aに文字列を代入\nconst a: A = '___';\n// bに数値を代入\nconst b: B = ___;\n// aとbを出力\nconsole.___(a, b);",
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
                  "const a: A = 'hello';",
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
                  null,
                  null,
                  null
        ],
        "candidates": {
          "keywords": [
            "infer",
            "typeof",
            "keyof"
          ],
          "others": ["string", "number", "'hello'", "42", "b", "T", "hello", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "hello 42\n"
          }
        ]
      },
    {
        "title": "keyof 演算子",
        "description": "オブジェクト型のキーを取得するkeyofを学びましょう。",
        "difficulty": "hard",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "keyof とは？",
            "content": "# オブジェクトのキーをUnion型に\n\n**keyof**（キーオブ）は、オブジェクト型の「キー（項目名）」をすべて取り出して、ユニオン型にします。\n\n## たとえ話\n\n生徒カードの項目を想像してみてください。「名前」「年齢」「クラス」...といった項目名がありますよね。keyofは「このカードにはどんな項目がある？」と聞くようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n}\n\ntype UserKeys = keyof User; // 'id' | 'name'\n// Userのキーは 'id' か 'name' のどちらか\n```"
          },
          {
            "title": "型安全なアクセス",
            "content": "# 動的アクセスを型安全に\n\nkeyofを使うと、「存在するキーだけ使える」という安全な関数が作れます。\n\n## たとえ話\n\nロッカーを開けるとき、「存在する番号」しか使えませんよね。keyofで「存在するキー」だけを許可できます。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction getValue<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { id: 1, name: 'Alice' };\ngetValue(user, 'name'); // OK! 'name'は存在する\ngetValue(user, 'age');  // エラー！ 'age'は存在しない\n```\n\n存在しないキーを使おうとするとエラーで教えてくれます！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "interface Person {\n  // 名前の型\n  name: string;\n  // 年齢の型\n  age: number;\n}\n// keyof でオブジェクトのキーを取得\nfunction getProperty<K extends keyof Person>(p: Person, key: K) {\n  // キーで値を取得して返す\n  return p[key];\n}\n\n// Personオブジェクトを作成\nconst person = { name: 'Bob', age: 30 };\n// 名前を取得して出力\nconsole.log(getProperty(person, 'name'));",
        "holeyCode": "interface ___ {\n  // 名前の型\n  name: ___;\n  // 年齢の型\n  age: ___;\n___\n// keyof でオブジェクトのキーを取得\nfunction getProperty<___ extends keyof Person>(p: Person, key: K) {\n  // キーで値を取得して返す\n  return p[___];\n___\n\n// Personオブジェクトを作成\nconst ___ = { name: 'Bob', age: 30 };\n// 名前を取得して出力\nconsole.___(getProperty(person, 'name'));",
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
          "// Personオブジェクトを作成",
          "const person = { name: 'Bob', age: 30 };",
          "// 名前を取得して出力",
          "console.log(getProperty(person, 'name'));"
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
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "keyof",
            "typeof",
            "instanceof"
          ],
          "others": ["string", "number", "key", "30", "'name'", "Person", "}", "K", "person", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Bob\n"
          }
        ]
      },
    {
        "title": "マップ型（Mapped Types）",
        "description": "既存の型を変換するマップ型を学びましょう。",
        "difficulty": "hard",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "マップ型とは？",
            "content": "# プロパティを変換\n\n**マップ型**（Mapped Types）は、既存の型の「すべてのプロパティ」に対して、同じ変換を適用できます。\n\n## たとえ話\n\nクラス全員に「帽子をかぶせる」ような感じです。一人一人に同じ処理をするのではなく、「全員に」適用できます。\n\n## 書き方\n\n`[K in keyof T]` で「Tのすべてのキーに対して」という意味になります。\n\n## コードで書くとこうなるよ\n\n```typescript\n// すべてのプロパティをreadonlyにする\ntype Readonly<T> = {\n  readonly [K in keyof T]: T[K];\n};\n// 「Tのすべてのキーに対して、readonlyをつける」\n```"
          },
          {
            "title": "カスタムマップ型",
            "content": "# 独自の変換を定義\n\n自分だけの変換ルールを作ることもできます。\n\n## たとえ話\n\n「すべての項目に『nullでもOK』を追加する」といった変換ができます。\n\n## コードで書くとこうなるよ\n\n```typescript\n// すべてのプロパティを「nullでもOK」にする\ntype Nullable<T> = {\n  [K in keyof T]: T[K] | null;\n};\n\ninterface User {\n  name: string;\n}\n\ntype NullableUser = Nullable<User>;\n// { name: string | null; }\n// nameがnullでもOKになった！\n```\n\nこうやって、型を「一括変換」できるのがマップ型の強みです！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// マップ型の定義\ntype Optional<T> = {\n  // in でキーをイテレート\n  [K in keyof T]?: T[K];\n};\n\ninterface Config {\n  // ホスト名の型\n  host: string;\n  // ポート番号の型\n  port: number;\n}\n\n// 部分的なConfigオブジェクト\nconst partial: Optional<Config> = { host: 'localhost' };\n// ホスト名を出力\nconsole.log(partial.host);",
        "holeyCode": "// マップ型の定義\ntype Optional<___> = {\n  // in でキーをイテレート\n  [___ in keyof T]?: T[K];\n___\n\ninterface ___ {\n  // ホスト名の型\n  host: ___;\n  // ポート番号の型\n  port: ___;\n___\n\n// 部分的なConfigオブジェクト\nconst partial: Optional<Config> = { host: '___' };\n// ホスト名を出力\nconsole.___(partial.host);",
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
          "keywords": [
            "in",
            "of",
            "from"
          ],
          "others": ["string", "number", "'localhost'", "host", "T", "K", "};", "Config", "}", "localhost", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "localhost\n"
          }
        ]
      }
  ]
}
