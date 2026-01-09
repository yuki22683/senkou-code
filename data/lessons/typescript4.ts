export const typescriptData4 = {
  "language": "typescript",
  "lessonId": "typescript-4",
  "lessonTitle": "TypeScript IV - デコレータと高度なパターン",
  "lessonDescription": "TypeScriptのデコレータと高度なパターンを学びます。メタプログラミング、型ガード、ユーティリティなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "型ガード関数",
      "description": "カスタム型ガードを作成しましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "型ガードとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を絞り込む\n\n**型ガード**は、条件分岐で型を絞り込む関数です。\n\n```typescript\nfunction isString(x: unknown): x is string {\n  return typeof x === 'string';\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// is で型ガードの戻り値型を定義\nfunction isNumber(x: unknown): x is number {\n  return typeof x === 'number';\n}\n\nconst value: unknown = 42;\nif (isNumber(value)) {\n  console.log(value * 2);\n}",
      "holeyCode": "// is と入力して、x が number かどうか教えてね\n___\n  ___\n___\n\n___\n___\n  ___\n___",
      "correctLines": [
        
        
        "// is と入力して、x が number かどうか教えてね",
        "function isNumber(x: unknown): x is number {",
        "  return typeof x === 'number';",
        "}",
        "",
        "const value: unknown = 42;",
        "if (isNumber(value)) {",
        "  console.log(value * 2);",
        "}"
      ],
      "lineHints": [
        "型ガードの戻り値型を定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["is", "as", "in"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "84\n"
        }
      ]
    },
    {
      "title": "in演算子での型絞り込み",
      "description": "プロパティの存在で型を絞り込みましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "in演算子",
          "image": "/illustrations/3d/gear.png",
          "content": "# プロパティで型を絞り込む\n\n**in**演算子でプロパティの存在をチェックし、型を絞り込めます。\n\n```typescript\ntype Fish = { swim: () => void };\ntype Bird = { fly: () => void };\n\nfunction move(animal: Fish | Bird) {\n  if ('swim' in animal) {\n    animal.swim();\n  }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Car = { drive: () => void };\ntype Boat = { sail: () => void };\n\nfunction operate(vehicle: Car | Boat): void {\n  // in でプロパティの存在をチェック\n  if ('drive' in vehicle) {\n    console.log('Driving');\n  } else {\n    console.log('Sailing');\n  }\n}\n\noperate({ drive: () => {} });",
      "holeyCode": "___\n___\n\n___\n  // in と入力して、プロパティがあるかチェックしましょう\n  ___\n    ___\n  ___\n    ___\n  ___\n___\n\n___",
      "correctLines": [
        
        
        "type Car = { drive: () => void };",
        "type Boat = { sail: () => void };",
        "",
        "function operate(vehicle: Car | Boat): void {",
        "  // in と入力して、プロパティがあるかチェックしましょう",
        "  if ('drive' in vehicle) {",
        "    console.log('Driving');",
        "  } else {",
        "    console.log('Sailing');",
        "  }",
        "}",
        "",
        "operate({ drive: () => {} });"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "プロパティの存在をチェックします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["in", "of", "has"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Driving\n"
        }
      ]
    },
    {
      "title": "Discriminated Union",
      "description": "判別可能なユニオン型を使いましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Discriminated Unionとは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 判別プロパティで型を区別\n\n共通のリテラル型プロパティで型を判別できます。\n\n```typescript\ntype Circle = { kind: 'circle'; radius: number };\ntype Square = { kind: 'square'; size: number };\ntype Shape = Circle | Square;\n\nfunction area(s: Shape): number {\n  switch (s.kind) {\n    case 'circle': return Math.PI * s.radius ** 2;\n    case 'square': return s.size ** 2;\n  }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Success = { status: 'success'; data: string };\ntype Failure = { status: 'failure'; error: string };\ntype Result = Success | Failure;\n\nfunction handle(result: Result): void {\n  // status で判別プロパティを使う\n  switch (result.status) {\n    case 'success':\n      console.log(result.data);\n      break;\n    case 'failure':\n      console.log(result.error);\n      break;\n  }\n}\n\nhandle({ status: 'success', data: 'OK' });",
      "holeyCode": "___\n___\n___\n\n___\n  // status と入力して、今の状態をチェックしましょう\n  ___\n    ___\n      ___\n      ___\n    ___\n      ___\n      ___\n  ___\n___\n\n___",
      "correctLines": [
        
        
        "type Success = { status: 'success'; data: string };",
        "type Failure = { status: 'failure'; error: string };",
        "type Result = Success | Failure;",
        "",
        "function handle(result: Result): void {",
        "  // status と入力して、今の状態をチェックしましょう",
        "  switch (result.status) {",
        "    case 'success':",
        "      console.log(result.data);",
        "      break;",
        "    case 'failure':",
        "      console.log(result.error);",
        "      break;",
        "  }",
        "}",
        "",
        "handle({ status: 'success', data: 'OK' });"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "判別プロパティを使います。",
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
        "keywords": ["status", "type", "kind"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "OK\n"
        }
      ]
    },
    {
      "title": "never型で網羅性チェック",
      "description": "switch文の網羅性をチェックしましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "never型とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 到達不能な型\n\n**never**型は値を持たない型です。switch文の網羅性チェックに使えます。\n\n```typescript\nfunction exhaustiveCheck(x: never): never {\n  throw new Error('Unexpected value');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Color = 'red' | 'green' | 'blue';\n\nfunction getHex(color: Color): string {\n  switch (color) {\n    case 'red': return '#ff0000';\n    case 'green': return '#00ff00';\n    case 'blue': return '#0000ff';\n    default:\n      // never で到達不能な型を表す\n      const _exhaustive: never = color;\n      return _exhaustive;\n  }\n}\n\nconsole.log(getHex('red'));",
      "holeyCode": "___\n\n___\n  ___\n    ___\n    ___\n    ___\n    ___\n      // never と入力して、絶対に来ないことを教えてね\n      ___\n      ___\n  ___\n___\n\n___",
      "correctLines": [
        
        
        "type Color = 'red' | 'green' | 'blue';",
        "",
        "function getHex(color: Color): string {",
        "  switch (color) {",
        "    case 'red': return '#ff0000';",
        "    case 'green': return '#00ff00';",
        "    case 'blue': return '#0000ff';",
        "    default:",
        "      // never と入力して、絶対に来ないことを教えてね",
        "      const _exhaustive: never = color;",
        "      return _exhaustive;",
        "  }",
        "}",
        "",
        "console.log(getHex('red'));"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "到達不能な型を使います。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["never", "void", "unknown"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "#ff0000\n"
        }
      ]
    },
    {
      "title": "テンプレートリテラル型",
      "description": "文字列リテラル型を組み合わせましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "テンプレートリテラル型",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 文字列型を組み合わせる\n\nテンプレートリテラル型で文字列パターンを定義できます。\n\n```typescript\ntype Color = 'red' | 'blue';\ntype Size = 'small' | 'large';\ntype Style = `${Size}-${Color}`;\n// 'small-red' | 'small-blue' | 'large-red' | 'large-blue'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Method = 'get' | 'post';\ntype Endpoint = '/users' | '/posts';\n// ` でテンプレートリテラル型を定義\ntype Route = `${Method} ${Endpoint}`;\n\nconst route: Route = 'get /users';\nconsole.log(route);",
      "holeyCode": "___\n___\n// ` を入力して、文字を組み合わせてね\n___\n\n___\n___",
      "correctLines": [
        
        
        "type Method = 'get' | 'post';",
        "type Endpoint = '/users' | '/posts';",
        "// ` を入力して、文字を組み合わせてね",
        "type Route = `${Method} ${Endpoint}`;",
        "",
        "const route: Route = 'get /users';",
        "console.log(route);"
      ],
      "lineHints": [
        null,
        null,
        "テンプレートリテラルを使います。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["`", "'", "\""]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "get /users\n"
        }
      ]
    },
    {
      "title": "Exclude型",
      "description": "ユニオン型から特定の型を除外しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "Exclude<T, U>",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を除外する\n\n**Exclude**はユニオン型から特定の型を除外します。\n\n```typescript\ntype T = 'a' | 'b' | 'c';\ntype Without_A = Exclude<T, 'a'>;\n// 'b' | 'c'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Status = 'pending' | 'success' | 'error' | 'cancelled';\n// Exclude でユニオン型から特定の型を除外\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\n\nconst status: ActiveStatus = 'pending';\nconsole.log(status);",
      "holeyCode": "___\n// Exclude と入力して、特定の型をのぞいてね\n___\n\n___\n___",
      "correctLines": [
        
        
        "type Status = 'pending' | 'success' | 'error' | 'cancelled';",
        "// Exclude と入力して、特定の型をのぞいてね",
        "type ActiveStatus = Exclude<Status, 'cancelled'>;",
        "",
        "const status: ActiveStatus = 'pending';",
        "console.log(status);"
      ],
      "lineHints": [
        null,
        "型を除外するユーティリティ型です。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["Exclude", "Omit", "Extract"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "pending\n"
        }
      ]
    },
    {
      "title": "Extract型",
      "description": "ユニオン型から特定の型を抽出しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Extract<T, U>",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を抽出する\n\n**Extract**はユニオン型から特定の型を抽出します。\n\n```typescript\ntype T = 'a' | 'b' | 'c';\ntype Only_AB = Extract<T, 'a' | 'b'>;\n// 'a' | 'b'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Event = 'click' | 'scroll' | 'mouseover' | 'keydown';\n// Extract でユニオン型から特定の型を抽出\ntype MouseEvent = Extract<Event, 'click' | 'scroll' | 'mouseover'>;\n\nconst event: MouseEvent = 'click';\nconsole.log(event);",
      "holeyCode": "___\n// Extract と入力して、特定の型だけ取り出しましょう\n___\n\n___\n___",
      "correctLines": [
        
        
        "type Event = 'click' | 'scroll' | 'mouseover' | 'keydown';",
        "// Extract と入力して、特定の型だけ取り出しましょう",
        "type MouseEvent = Extract<Event, 'click' | 'scroll' | 'mouseover'>;",
        "",
        "const event: MouseEvent = 'click';",
        "console.log(event);"
      ],
      "lineHints": [
        null,
        "型を抽出するユーティリティ型です。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["Extract", "Exclude", "Pick"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "click\n"
        }
      ]
    },
    {
      "title": "NonNullable型",
      "description": "nullとundefinedを除外しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "NonNullable<T>",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# null/undefinedを除外\n\n**NonNullable**はnullとundefinedを除外します。\n\n```typescript\ntype T = string | null | undefined;\ntype NonNull = NonNullable<T>;\n// string\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type MaybeString = string | null | undefined;\n// NonNullable でnull/undefinedを除外\ntype DefiniteString = NonNullable<MaybeString>;\n\nconst text: DefiniteString = 'Hello';\nconsole.log(text);",
      "holeyCode": "___\n// NonNullable と入力して、空っぽじゃないようにしましょう\n___\n\n___\n___",
      "correctLines": [
        
        
        "type MaybeString = string | null | undefined;",
        "// NonNullable と入力して、空っぽじゃないようにしましょう",
        "type DefiniteString = NonNullable<MaybeString>;",
        "",
        "const text: DefiniteString = 'Hello';",
        "console.log(text);"
      ],
      "lineHints": [
        null,
        "null/undefinedを除外するユーティリティ型です。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["NonNullable", "Required", "Exclude"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "Parameters型",
      "description": "関数の引数の型を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "Parameters<T>",
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数の引数型を取得\n\n**Parameters**は関数の引数の型をタプルで取得します。\n\n```typescript\ntype Fn = (a: string, b: number) => void;\ntype Params = Parameters<Fn>;\n// [string, number]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function greet(name: string, age: number): void {\n  console.log(`${name} is ${age}`);\n}\n// Parameters で関数の引数型を取得\ntype GreetParams = Parameters<typeof greet>;\nconst args: GreetParams = ['Taro', 25];\ngreet(...args);",
      "holeyCode": "___\n___\n___",
      "correctLines": [
        ""function greet(name: string",
        "age: number): void {",\n        "  console.log(`${name} is ${age}`);",\n        "}",\n        "",\n        "// Parameters と入力して、引数の型を取得しましょう",\n        "type GreetParams = Parameters<typeof greet>;",\n        "const args: GreetParams = ['Taro'",
        "25"
      ];",
        "greet(...args);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "関数の引数型を取得するユーティリティ型です。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["Parameters", "ReturnType", "Arguments"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Taro is 25\n"
        }
      ]
    },
    {
      "title": "Awaited型",
      "description": "Promiseの解決型を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "Awaited<T>",
          "image": "/illustrations/3d/robot.png",
          "content": "# Promiseの中身の型を取得\n\n**Awaited**はPromiseが解決する型を取得します。\n\n```typescript\ntype P = Promise<string>;\ntype T = Awaited<P>;\n// string\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type AsyncResult = Promise<{ data: string }>;\n// Awaited でPromiseの解決型を取得\ntype Result = Awaited<AsyncResult>;\n\nconst result: Result = { data: 'success' };\nconsole.log(result.data);",
      "holeyCode": "___\n// Awaited と入力して、Promise の中身の型を教えてね\n___\n\n___\n___",
      "correctLines": [
        
        
        "type AsyncResult = Promise<{ data: string }>;",
        "// Awaited と入力して、Promise の中身の型を教えてね",
        "type Result = Awaited<AsyncResult>;",
        "",
        "const result: Result = { data: 'success' };",
        "console.log(result.data);"
      ],
      "lineHints": [
        null,
        "Promiseの解決型を取得するユーティリティ型です。",
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["Awaited", "Promise", "Resolved"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "success\n"
        }
      ]
    }
  ]
};
