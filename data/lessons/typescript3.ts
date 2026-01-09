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
          "image": "/illustrations/3d/robot.png",
          "content": "# 全プロパティをオプショナルに\n\n**Partial<T>** は、型Tの全てのプロパティをオプショナル（?）にします。\n\n```typescript\ninterface User {\n  name: string;\n  age: number;\n}\n\ntype PartialUser = Partial<User>;\n// { name?: string; age?: number; }\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 部分的な更新に便利\n\n```typescript\nfunction updateUser(user: User, updates: Partial<User>) {\n  return { ...user, ...updates };\n}\n\nupdateUser(user, { name: 'Bob' }); // age は省略OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface Config {\n  host: string;\n  port: number;\n}\n// Partial で全プロパティをオプショナルに\nfunction update(config: Config, patch: Partial<Config>): Config {\n  return { ...config, ...patch };\n}\n\nconst cfg = { host: 'localhost', port: 3000 };\nconsole.log(update(cfg, { port: 8080 }).port);",
      "holeyCode": "___\n  ___\n  ___\n___\n\n// Partial と入力して、全部「あってもなくてもいいよ」にしましょう\n___\n  ___\n___\n\n___\n___",
      "correctLines": [
        
        
        "interface Config {",
        "  host: string;",
        "  port: number;",
        "}",
        "",
        "// Partial と入力して、全部「あってもなくてもいいよ」にしましょう",
        "function update(config: Config, patch: Partial<Config>): Config {",
        "  return { ...config, ...patch };",
        "}",
        "",
        "const cfg = { host: 'localhost', port: 3000 };",
        "console.log(update(cfg, { port: 8080 }).port);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "Partial で全プロパティをオプショナルにします。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Partial", "Required", "Pick"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 全プロパティを必須に\n\n**Required<T>** は、Partialの逆で、全てのプロパティを必須にします。\n\n```typescript\ninterface Props {\n  name?: string;\n  age?: number;\n}\n\ntype RequiredProps = Required<Props>;\n// { name: string; age: number; }\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# オプショナルを必須に変換\n\n```typescript\nfunction processUser(user: Required<User>) {\n  // 全プロパティが存在することが保証される\n  console.log(user.name.toUpperCase());\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface Options {\n  debug?: boolean;\n  verbose?: boolean;\n}\n// Required で全プロパティを必須に\nfunction init(opts: Required<Options>) {\n  console.log(opts.debug);\n}\n\ninit({ debug: true, verbose: false });",
      "holeyCode": "___\n  ___\n  ___\n___\n\n// Required と入力して、全部「必ず入力しましょう」にしましょう\n___\n  ___\n___\n\n___",
      "correctLines": [
        
        
        "interface Options {",
        "  debug?: boolean;",
        "  verbose?: boolean;",
        "}",
        "",
        "// Required と入力して、全部「必ず入力しましょう」にしましょう",
        "function init(opts: Required<Options>) {",
        "  console.log(opts.debug);",
        "}",
        "",
        "init({ debug: true, verbose: false });"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "Required で全プロパティを必須にします。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Required", "Partial", "Readonly"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 特定のプロパティを選択\n\n**Pick<T, K>** は、型Tから指定したプロパティKだけを取り出します。\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\ntype UserPreview = Pick<User, 'id' | 'name'>;\n// { id: number; name: string; }\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 必要な情報だけを抽出\n\n```typescript\nfunction getPreview(user: User): Pick<User, 'name'> {\n  return { name: user.name };\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface Product {\n  id: number;\n  name: string;\n  price: number;\n}\n// Pick で特定のプロパティを選択\ntype ProductName = Pick<Product, 'name'>;\n\nconst item: ProductName = { name: 'Apple' };\nconsole.log(item.name);",
      "holeyCode": "___\n  ___\n  ___\n  ___\n___\n\n// Pick と入力して、好きなプロパティだけ選んでね\n___\n\n___\n___",
      "correctLines": [
        
        
        "interface Product {",
        "  id: number;",
        "  name: string;",
        "  price: number;",
        "}",
        "",
        "// Pick と入力して、好きなプロパティだけ選んでね",
        "type ProductName = Pick<Product, 'name'>;",
        "",
        "const item: ProductName = { name: 'Apple' };",
        "console.log(item.name);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "Pick で特定のプロパティを選択します。",
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Pick", "Omit", "Extract"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 特定のプロパティを除外\n\n**Omit<T, K>** は、Pickの逆で、指定したプロパティを除外します。\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  password: string;\n}\n\ntype PublicUser = Omit<User, 'password'>;\n// { id: number; name: string; }\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 機密情報を除外\n\n```typescript\nfunction toPublic(user: User): Omit<User, 'password'> {\n  const { password, ...rest } = user;\n  return rest;\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface User {\n  id: number;\n  name: string;\n  secret: string;\n}\n// Omit で特定のプロパティを除外\ntype SafeUser = Omit<User, 'secret'>;\n\nconst user: SafeUser = { id: 1, name: 'Alice' };\nconsole.log(user.name);",
      "holeyCode": "___\n  ___\n  ___\n  ___\n___\n\n// Omit と入力して、いらないプロパティをのぞいてね\n___\n\n___\n___",
      "correctLines": [
        
        
        "interface User {",
        "  id: number;",
        "  name: string;",
        "  secret: string;",
        "}",
        "",
        "// Omit と入力して、いらないプロパティをのぞいてね",
        "type SafeUser = Omit<User, 'secret'>;",
        "",
        "const user: SafeUser = { id: 1, name: 'Alice' };",
        "console.log(user.name);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "Omit で特定のプロパティを除外します。",
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Omit", "Pick", "Exclude"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# キーと値の型を指定\n\n**Record<K, V>** は、キーの型Kと値の型Vを持つオブジェクト型を作ります。\n\n```typescript\ntype Scores = Record<string, number>;\n\nconst scores: Scores = {\n  math: 90,\n  english: 85\n};\n```"
        },
        {
          "title": "リテラル型と組み合わせ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 特定のキーに限定\n\n```typescript\ntype Status = 'pending' | 'done' | 'error';\ntype StatusColors = Record<Status, string>;\n\nconst colors: StatusColors = {\n  pending: 'yellow',\n  done: 'green',\n  error: 'red'\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Fruit = 'apple' | 'banana';\n// Record でキーと値の型を指定\ntype Prices = Record<Fruit, number>;\n\nconst prices: Prices = {\n  apple: 100,\n  banana: 80\n};\n\nconsole.log(prices.apple);",
      "holeyCode": "___\n// Record と入力して、キーとデータの種類を決めてね\n___\n\n___\n  ___\n  ___\n___\n\n___",
      "correctLines": [
        
        
        "type Fruit = 'apple' | 'banana';",
        "// Record と入力して、キーとデータの種類を決めてね",
        "type Prices = Record<Fruit, number>;",
        "",
        "const prices: Prices = {",
        "  apple: 100,",
        "  banana: 80",
        "};",
        "",
        "console.log(prices.apple);"
      ],
      "lineHints": [
        null,
        "Record でキーと値の型を指定します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["Record", "Map", "Object"]
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
          "image": "/illustrations/3d/return.png",
          "content": "# 関数の戻り値の型を抽出\n\n**ReturnType<T>** は、関数型Tの戻り値の型を取得します。\n\n```typescript\nfunction getUser() {\n  return { id: 1, name: 'Alice' };\n}\n\ntype User = ReturnType<typeof getUser>;\n// { id: number; name: string; }\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を二重管理しない\n\n```typescript\n// 関数の実装から型を自動導出\ntype Result = ReturnType<typeof fetchData>;\n\nfunction processResult(result: Result) {\n  // ...\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function createPoint() {\n  return { x: 10, y: 20 };\n}\n// ReturnType で戻り値の型を取得\ntype Point = ReturnType<typeof createPoint>;\n\nconst p: Point = { x: 5, y: 15 };\nconsole.log(p.x + p.y);",
      "holeyCode": "___\n  ___\n___\n\n// ReturnType と入力して、関数の戻り値の型を教えてね\n___\n\n___\n___",
      "correctLines": [
        
        
        "function createPoint() {",
        "  return { x: 10, y: 20 };",
        "}",
        "",
        "// ReturnType と入力して、関数の戻り値の型を教えてね",
        "type Point = ReturnType<typeof createPoint>;",
        "",
        "const p: Point = { x: 5, y: 15 };",
        "console.log(p.x + p.y);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "ReturnType で戻り値の型を取得します。",
        null,
        null,
        null
      ],
      "candidates": {
        "types": ["ReturnType", "Parameters", "InstanceType"]
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
          "image": "/illustrations/3d/if.png",
          "content": "# 型レベルの三項演算子\n\n**T extends U ? X : Y** の形で、条件によって型を変えられます。\n\n```typescript\ntype IsString<T> = T extends string ? 'yes' : 'no';\n\ntype A = IsString<string>;  // 'yes'\ntype B = IsString<number>;  // 'no'\n```"
        },
        {
          "title": "実用例",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型に応じた変換\n\n```typescript\ntype Flatten<T> = T extends Array<infer U> ? U : T;\n\ntype A = Flatten<string[]>;  // string\ntype B = Flatten<number>;    // number\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// extends で条件型を定義\ntype IsArray<T> = T extends any[] ? true : false;\n\ntype A = IsArray<number[]>;\ntype B = IsArray<string>;\n\nconst a: A = true;\nconst b: B = false;\nconsole.log(a, b);",
      "holeyCode": "___",
      "correctLines": [
        ""// extends と入力して「もし〜なら」という条件を作ってね",\n        "type IsArray<T> = T extends any["
      ] ? true : false;",
        "",
        "type A = IsArray<number[]>;",
        "type B = IsArray<string>;",
        "",
        "const a: A = true;",
        "const b: B = false;",
        "console.log(a, b);"
      ],
      "lineHints": [
        "extends で条件を指定します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["extends", "implements", "typeof"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を推論して抽出\n\n**infer** を使うと、条件型の中で型を推論して使えます。\n\n```typescript\ntype GetArrayElement<T> = \n  T extends (infer U)[] ? U : never;\n\ntype A = GetArrayElement<string[]>; // string\n```"
        },
        {
          "title": "関数の引数型を抽出",
          "image": "/illustrations/3d/arguments.png",
          "content": "# Parameters と同じ仕組み\n\n```typescript\ntype FirstArg<T> = \n  T extends (arg: infer A, ...args: any[]) => any \n    ? A \n    : never;\n\ntype A = FirstArg<(x: number) => void>; // number\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// infer で型を推論して抽出\ntype Unwrap<T> = T extends Promise<infer U> ? U : T;\n\ntype A = Unwrap<Promise<string>>;\ntype B = Unwrap<number>;\n\nconst a: A = 'hello';\nconst b: B = 42;\nconsole.log(a, b);",
      "holeyCode": "// infer と入力して、Promise の中身を予想しましょう\n___\n\n___\n___\n\n___\n___\n___",
      "correctLines": [
        
        
        "// infer と入力して、Promise の中身を予想しましょう",
        "type Unwrap<T> = T extends Promise<infer U> ? U : T;",
        "",
        "type A = Unwrap<Promise<string>>;",
        "type B = Unwrap<number>;",
        "",
        "const a: A = 'hello';",
        "const b: B = 42;",
        "console.log(a, b);"
      ],
      "lineHints": [
        "infer で型を推論して抽出します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["infer", "typeof", "keyof"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# オブジェクトのキーをUnion型に\n\n**keyof** は、オブジェクト型のキーをUnion型として取得します。\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n}\n\ntype UserKeys = keyof User; // 'id' | 'name'\n```"
        },
        {
          "title": "型安全なアクセス",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 動的アクセスを型安全に\n\n```typescript\nfunction getValue<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { id: 1, name: 'Alice' };\ngetValue(user, 'name'); // OK\ngetValue(user, 'age');  // Error!\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "interface Person {\n  name: string;\n  age: number;\n}\n// keyof でオブジェクトのキーを取得\nfunction getProperty<K extends keyof Person>(p: Person, key: K) {\n  return p[key];\n}\n\nconst person = { name: 'Bob', age: 30 };\nconsole.log(getProperty(person, 'name'));",
      "holeyCode": "___\\n___",
      "correctLines": [
        ""interface Person {",\n        "  name: string;",\n        "  age: number;",\n        "}",\n        "",\n        "// keyof と入力して、オブジェクトのキーを取得しましょう",\n        "function getProperty<K extends keyof Person>(p: Person",
        "key: K) {",\n        "  return p[key"
      ];",
        "}",
        "",
        "const person = { name: 'Bob', age: 30 };",
        "console.log(getProperty(person, 'name'));"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "keyof でオブジェクトのキーを取得します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["keyof", "typeof", "instanceof"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# プロパティを変換\n\n**マップ型** は、既存の型の各プロパティを変換して新しい型を作ります。\n\n```typescript\ntype Readonly<T> = {\n  readonly [K in keyof T]: T[K];\n};\n```"
        },
        {
          "title": "カスタムマップ型",
          "image": "/illustrations/3d/robot.png",
          "content": "# 独自の変換を定義\n\n```typescript\ntype Nullable<T> = {\n  [K in keyof T]: T[K] | null;\n};\n\ninterface User {\n  name: string;\n}\n\ntype NullableUser = Nullable<User>;\n// { name: string | null; }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// in でキーをイテレートするマップ型\ntype Optional<T> = {\n  [K in keyof T]?: T[K];\n};\n\ninterface Config {\n  host: string;\n  port: number;\n}\n\nconst partial: Optional<Config> = { host: 'localhost' };\nconsole.log(partial.host);",
      "holeyCode": "___",
      "correctLines": [
        ""// in と入力して、キーを順番に取り出しましょう",\n        "type Optional<T> = {",\n        "  [K in keyof T"
      ]?: T[K];",
        "};",
        "",
        "interface Config {",
        "  host: string;",
        "  port: number;",
        "}",
        "",
        "const partial: Optional<Config> = { host: 'localhost' };",
        "console.log(partial.host);"
      ],
      "lineHints": [
        null,
        "in でキーをイテレートします。",
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
        "keywords": ["in", "of", "from"]
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
