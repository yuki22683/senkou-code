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
          "image": "/illustrations/3d/if.png",
          "content": "# 型を絞り込む\n\n**型ガード**（Type Guard）は、「この値は○○型です！」と確認する関数です。確認した後は、TypeScriptがその型として扱ってくれます。\n\n## たとえ話\n\n「この箱の中身は何？」と確認してから使うような感じです。中身が「りんご」だとわかれば、りんごとして扱えます。\n\n## 書き方のポイント\n\n戻り値の型を `x is string` のように書きます。これは「xはstringです」という意味の特別な書き方です。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction isString(x: unknown): x is string {\n  return typeof x === 'string';\n}\n// 「xがstringかどうかチェックする関数」\n```"
        },
        {
          "title": "型ガードの使い方",
          "image": "/illustrations/3d/if.png",
          "content": "# 安全に型を使う\n\n型ガードでチェックした後は、TypeScriptがその型として扱ってくれるので、安全にメソッドなどを使えます。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction isString(x: unknown): x is string {\n  return typeof x === 'string';\n}\n\nconst value: unknown = 'hello';\n\nif (isString(value)) {\n  // ここではvalueはstring型！\n  console.log(value.toUpperCase());\n  // 文字列のメソッドが使える！\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// is で型ガードの戻り値型を定義\nfunction isNumber(x: unknown): x is number {\n  return typeof x === 'number';\n}\n\nconst value: unknown = 42;\nif (isNumber(value)) {\n  console.log(value * 2);\n}",
      "holeyCode": "// is で型ガードの戻り値型を定義\nfunction isNumber(x: unknown): x ___ number {\n  // typeofで型をチェック\n  return typeof x === ___;\n}\n\n// unknown型の値\nconst value: unknown = ___;\n// 型ガードでチェック\nif (isNumber(___)) {\n  // 数値として計算\n  console.log(value * ___);\n}",
      "correctLines": [
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
          "title": "in演算子とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# プロパティで型を絞り込む\n\n**in演算子**は、オブジェクトに「特定のプロパティがあるかどうか」をチェックします。これで型を絞り込むことができます。\n\n## たとえ話\n\n「羽があれば鳥、ひれがあれば魚」のように、特徴で見分けるような感じです。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Fish = { swim: () => void };  // 泳げる\ntype Bird = { fly: () => void };   // 飛べる\n\nfunction move(animal: Fish | Bird) {\n  if ('swim' in animal) {\n    // swimがある = 魚！\n    animal.swim();\n  } else {\n    // swimがない = 鳥！\n    animal.fly();\n  }\n}\n```"
        },
        {
          "title": "in演算子の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 書き方のポイント\n\n`'プロパティ名' in オブジェクト` という形で書きます。\n\n## 注意点\n\n- プロパティ名は文字列（クォートで囲む）\n- 存在すればtrue、なければfalseが返る\n\n## たとえ話\n\n「このオブジェクトに○○という項目はある？」と聞いているようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\nconst obj = { name: 'Taro', age: 10 };\n\nif ('age' in obj) {\n  console.log('ageがあります！');\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Car = { drive: () => void };\ntype Boat = { sail: () => void };\n\nfunction operate(vehicle: Car | Boat): void {\n  // in でプロパティの存在をチェック\n  if ('drive' in vehicle) {\n    console.log('Driving');\n  } else {\n    console.log('Sailing');\n  }\n}\n\noperate({ drive: () => {} });",
      "holeyCode": "// 車の型\ntype Car = { drive: () => ___ };\n// 船の型\ntype Boat = { sail: () => ___ };\n\nfunction operate(vehicle: Car | Boat): void {\n  // in でプロパティの存在をチェック\n  if ('drive' ___ vehicle) {\n    // 車の操作\n    console.log(___);\n  } else {\n    // 船の操作\n    console.log(___);\n  }\n}\n\n// 車を操作\noperate({ drive: () => {} });",
      "correctLines": [
        "type Car = { drive: () => void };",
        "type Boat = { sail: () => void };",
        "",
        "function operate(vehicle: Car | Boat): void {",
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
          "content": "# 判別プロパティで型を区別\n\n**Discriminated Union**（判別可能なユニオン）は、共通の「目印プロパティ」を使って、どの型かを見分ける方法です。\n\n## たとえ話\n\nお菓子の袋に「種類：チョコ」「種類：クッキー」と書いてあれば、中身を開けなくても何が入っているかわかりますよね。\n\n## コードで書くとこうなるよ\n\n```typescript\n// kindが「目印」になる\ntype Circle = { kind: 'circle'; radius: number };\ntype Square = { kind: 'square'; size: number };\ntype Shape = Circle | Square;\n\nfunction area(s: Shape): number {\n  switch (s.kind) {  // kindで判別\n    case 'circle': return Math.PI * s.radius ** 2;\n    case 'square': return s.size ** 2;\n  }\n}\n```"
        },
        {
          "title": "Discriminated Unionの利点",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# なぜ便利なの？\n\n判別プロパティ（kindなど）を見れば、TypeScriptがその型だと自動で理解してくれます。\n\n## メリット\n\n1. **switch文で簡単に分岐できる**\n2. **各caseで正しいプロパティが使える**\n3. **漏れがあるとエラーで教えてくれる**\n\n## たとえ話\n\n「円」と「四角」では使えるプロパティが違います。kindを見て判別すれば、円なら「radius」、四角なら「size」が使えると自動でわかります！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Success = { status: 'success'; data: string };\ntype Failure = { status: 'failure'; error: string };\ntype Result = Success | Failure;\n\nfunction handle(result: Result): void {\n  // status で判別プロパティを使う\n  switch (result.status) {\n    case 'success':\n      console.log(result.data);\n      break;\n    case 'failure':\n      console.log(result.error);\n      break;\n  }\n}\n\nhandle({ status: 'success', data: 'OK' });",
      "holeyCode": "// 成功時の型\ntype Success = { status: 'success'; data: ___ };\n// 失敗時の型\ntype Failure = { status: 'failure'; error: ___ };\n// 結果のユニオン型\ntype Result = Success ___ Failure;\n\nfunction handle(result: Result): void {\n  // status で判別プロパティを使う\n  switch (result.___) {\n    case 'success':\n      // データを出力\n      console.log(result.___);\n      break;\n    case 'failure':\n      // エラーを出力\n      console.log(result.___);\n      break;\n  }\n}\n\n// 成功結果を処理\nhandle({ status: 'success', data: ___ });",
      "correctLines": [
        "type Success = { status: 'success'; data: string };",
        "type Failure = { status: 'failure'; error: string };",
        "type Result = Success | Failure;",
        "",
        "function handle(result: Result): void {",
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
          "image": "/illustrations/3d/error.png",
          "content": "# 到達不能な型\n\n**never型**は「絶対にここには来ない」という意味の特別な型です。値を持たない型なので、何も代入できません。\n\n## たとえ話\n\n「ありえない」を型で表現したものです。例えば、全ての可能性を処理した後の「残り」は「ありえない」ですよね。\n\n## いつ使うの？\n\nswitch文で「全てのケースを処理したか」をチェックするのに使います。もし処理し忘れたケースがあると、TypeScriptがエラーで教えてくれます！\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction exhaustiveCheck(x: never): never {\n  throw new Error('Unexpected value');\n}\n// 「ここには絶対来ないはず」という関数\n```"
        },
        {
          "title": "網羅性チェック",
          "image": "/illustrations/3d/error.png",
          "content": "# 処理し忘れを防ぐ\n\nswitch文のdefaultでnever型を使うと、全ケースを処理したかチェックできます。\n\n## たとえ話\n\n「赤・青・緑」の3色を処理するとき、もし「青」を忘れていたらエラーで教えてくれます。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Color = 'red' | 'blue';\n\nfunction handle(c: Color) {\n  switch (c) {\n    case 'red': return '#ff0000';\n    case 'blue': return '#0000ff';\n    default:\n      // 全ケース処理済みなら、ここには来ない\n      const _check: never = c;\n      return _check;\n  }\n}\n```\n\n新しい色を追加したとき、処理を忘れるとエラーになります！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Color = 'red' | 'green' | 'blue';\n\nfunction getHex(color: Color): string {\n  switch (color) {\n    case 'red': return '#ff0000';\n    case 'green': return '#00ff00';\n    case 'blue': return '#0000ff';\n    default:\n      // never で到達不能な型を表す\n      const _exhaustive: never = color;\n      return _exhaustive;\n  }\n}\n\nconsole.log(getHex('red'));",
      "holeyCode": "// 色のユニオン型\ntype Color = 'red' | 'green' ___ 'blue';\n\nfunction getHex(color: Color): string {\n  switch (color) {\n    // 赤のカラーコード\n    case 'red': return ___;\n    // 緑のカラーコード\n    case 'green': return ___;\n    // 青のカラーコード\n    case 'blue': return ___;\n    default:\n      // never で到達不能な型を表す\n      const _exhaustive: ___ = color;\n      return ___;\n  }\n}\n\n// 赤のカラーコードを出力\nconsole.log(getHex(___));",
      "correctLines": [
        "type Color = 'red' | 'green' | 'blue';",
        "",
        "function getHex(color: Color): string {",
        "  switch (color) {",
        "    case 'red': return '#ff0000';",
        "    case 'green': return '#00ff00';",
        "    case 'blue': return '#0000ff';",
        "    default:",
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
          "title": "テンプレートリテラル型とは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 文字列型を組み合わせる\n\n**テンプレートリテラル型**は、文字列リテラル型を組み合わせて、新しい文字列パターンを作る機能です。\n\n## たとえ話\n\n「サイズ」と「色」を組み合わせて「小-赤」「大-青」などのパターンを自動で作れます。全部手で書かなくてOK！\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Color = 'red' | 'blue';\ntype Size = 'small' | 'large';\ntype Style = `${Size}-${Color}`;\n// 自動で4パターンができる！\n// 'small-red' | 'small-blue' | 'large-red' | 'large-blue'\n```"
        },
        {
          "title": "テンプレートリテラル型の書き方",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 書き方のポイント\n\nバッククォート（`）で囲んで、`${型名}` で他の型を埋め込みます。\n\n## 便利な使い方\n\nAPIのルートや、CSSのクラス名など、決まったパターンの文字列を型で表現できます。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Method = 'get' | 'post';\ntype Path = '/users' | '/posts';\n\n// メソッドとパスの組み合わせ\ntype Route = `${Method} ${Path}`;\n// 'get /users' | 'get /posts' | 'post /users' | 'post /posts'\n\nconst route: Route = 'get /users';  // OK!\nconst bad: Route = 'delete /users'; // エラー！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Method = 'get' | 'post';\ntype Endpoint = '/users' | '/posts';\n// ` でテンプレートリテラル型を定義\ntype Route = `${Method} ${Endpoint}`;\n\nconst route: Route = 'get /users';\nconsole.log(route);",
      "holeyCode": "// HTTPメソッドのユニオン型\ntype Method = 'get' ___ 'post';\n// エンドポイントのユニオン型\ntype Endpoint = '/users' ___ '/posts';\n// ` でテンプレートリテラル型を定義\ntype Route = ___${Method} ${Endpoint}`;\n\n// ルートを定義\nconst route: Route = ___;\n// 出力\nconsole.log(___);",
      "correctLines": [
        "type Method = 'get' | 'post';",
        "type Endpoint = '/users' | '/posts';",
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
          "title": "Exclude<T, U>とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# ユニオン型から除外する\n\n**Exclude**（エクスクルード）は、ユニオン型から特定の型を「除外」します。\n\n## たとえ話\n\n「りんご・みかん・バナナ」の中から「バナナ」を除外すると「りんご・みかん」になりますよね。Excludeはまさにそれ！\n\n## コードで書くとこうなるよ\n\n```typescript\ntype T = 'a' | 'b' | 'c';\ntype Without_A = Exclude<T, 'a'>;\n// 'b' | 'c'\n// 'a' が除外された！\n```"
        },
        {
          "title": "Excludeの使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 特定の状態を除外\n\n「使いたくない状態」を除外した新しい型を作れます。\n\n## たとえ話\n\nすべてのステータスの中から「キャンセル済み」だけを除外して、「アクティブなステータス」だけを使いたいときに便利です。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Status = 'pending' | 'success' | 'error' | 'cancelled';\n\n// cancelledを除外\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\n// 'pending' | 'success' | 'error'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Status = 'pending' | 'success' | 'error' | 'cancelled';\n// Exclude でユニオン型から特定の型を除外\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\n\nconst status: ActiveStatus = 'pending';\nconsole.log(status);",
      "holeyCode": "// ステータスのユニオン型\ntype Status = 'pending' | 'success' | 'error' ___ 'cancelled';\n// Exclude でユニオン型から特定の型を除外\ntype ActiveStatus = ___<Status, 'cancelled'>;\n\n// アクティブなステータスを代入\nconst status: ActiveStatus = ___;\n// 出力\nconsole.log(___);",
      "correctLines": [
        "type Status = 'pending' | 'success' | 'error' | 'cancelled';",
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
          "title": "Extract<T, U>とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# ユニオン型から抽出する\n\n**Extract**（エクストラクト）は、Excludeの逆で、ユニオン型から「欲しい型だけ」を抽出します。\n\n## たとえ話\n\n「りんご・みかん・バナナ」の中から「りんご・みかん」だけを選び出すようなものです。「これだけ欲しい！」というときに使います。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype T = 'a' | 'b' | 'c';\ntype Only_AB = Extract<T, 'a' | 'b'>;\n// 'a' | 'b'\n// 'a' と 'b' だけ抽出された！\n```"
        },
        {
          "title": "Extractの使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 特定の種類だけを抽出\n\n「使いたい型だけ」を選び出せます。\n\n## たとえ話\n\nすべてのイベントの中から「マウス関連のイベント」だけを選びたいときに便利です。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Event = 'click' | 'scroll' | 'keydown';\n\n// マウス関連だけを抽出\ntype MouseEvent = Extract<Event, 'click' | 'scroll'>;\n// 'click' | 'scroll'\n```\n\nExcludeが「除外」、Extractが「抽出」と覚えましょう！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type Event = 'click' | 'scroll' | 'mouseover' | 'keydown';\n// Extract でユニオン型から特定の型を抽出\ntype MouseEvent = Extract<Event, 'click' | 'scroll' | 'mouseover'>;\n\nconst event: MouseEvent = 'click';\nconsole.log(event);",
      "holeyCode": "// イベントのユニオン型\ntype Event = 'click' | 'scroll' | 'mouseover' ___ 'keydown';\n// Extract でユニオン型から特定の型を抽出\ntype MouseEvent = ___<Event, 'click' | 'scroll' | 'mouseover'>;\n\n// マウスイベントを代入\nconst event: MouseEvent = ___;\n// 出力\nconsole.log(___);",
      "correctLines": [
        "type Event = 'click' | 'scroll' | 'mouseover' | 'keydown';",
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
          "title": "NonNullable<T>とは？",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# null/undefinedを除外\n\n**NonNullable**（ノンナラブル）は、型から `null` と `undefined` を除外します。「確実に値がある」ことを保証したいときに使います。\n\n## たとえ話\n\n「空っぽかもしれない」状態から「必ず中身がある」状態に変えるようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype T = string | null | undefined;\ntype NonNull = NonNullable<T>;\n// string\n// null と undefined が消えた！\n```"
        },
        {
          "title": "NonNullableの使い方",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# 安全に値を使う\n\nnullやundefinedの可能性を排除して、安全に値を使えるようにします。\n\n## たとえ話\n\nデータを取得したとき「まだない」場合はnullかもしれません。でも「確実にある」場面ではNonNullableで保証できます。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype MaybeString = string | null | undefined;\n\n// null/undefinedを除外\ntype DefiniteString = NonNullable<MaybeString>;\n// string\n\nconst text: DefiniteString = 'Hello';\n// null や undefined は代入できない！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type MaybeString = string | null | undefined;\n// NonNullable でnull/undefinedを除外\ntype DefiniteString = NonNullable<MaybeString>;\n\nconst text: DefiniteString = 'Hello';\nconsole.log(text);",
      "holeyCode": "// nullまたはundefinedを含む型\ntype MaybeString = string | null ___ undefined;\n// NonNullable でnull/undefinedを除外\ntype DefiniteString = ___<MaybeString>;\n\n// 確定した文字列を代入\nconst text: DefiniteString = ___;\n// 出力\nconsole.log(___);",
      "correctLines": [
        "type MaybeString = string | null | undefined;",
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
          "title": "Parameters<T>とは？",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 関数の引数型を取得\n\n**Parameters**（パラメーターズ）は、関数が「何を受け取るか」の型を取得します。引数の型がタプル（順番付きの配列）として返ってきます。\n\n## たとえ話\n\n料理のレシピを見て「材料リスト」を知るようなものです。関数がどんな材料（引数）を必要としているかがわかります。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype Fn = (a: string, b: number) => void;\ntype Params = Parameters<Fn>;\n// [string, number]\n// 「1番目はstring、2番目はnumber」\n```"
        },
        {
          "title": "Parametersの使い方",
          "image": "/illustrations/3d/arguments.png",
          "content": "# 引数を再利用する\n\n既存の関数と同じ引数を使いたいときに便利です。\n\n## たとえ話\n\n「この関数と同じ材料で、別の料理を作る」ような感じです。引数の型を一から書かなくて済みます。\n\n## コードで書くとこうなるよ\n\n```typescript\nfunction greet(name: string, age: number): void {\n  console.log(`${name} is ${age}`);\n}\n\n// 関数の引数の型を取得\ntype GreetParams = Parameters<typeof greet>;\n// [string, number]\n\n// 同じ型の引数を使える！\nconst args: GreetParams = ['Taro', 25];\ngreet(...args);  // 'Taro is 25'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function greet(name: string, age: number): void {\n  console.log(`${name} is ${age}`);\n}\n// Parameters で関数の引数型を取得\ntype GreetParams = Parameters<typeof greet>;\nconst args: GreetParams = ['Taro', 25];\n// 引数の配列 args を渡して呼び出し\ngreet(...args);",
      "holeyCode": "function greet(name: string, age: number): void {\n  // テンプレート文字列で出力\n  console.log(`${name} is ${___}`);\n}\n// Parameters で関数の引数型を取得\ntype GreetParams = ___<typeof greet>;\n// 引数の配列を定義\nconst args: GreetParams = ['Taro', ___];\n// 引数の配列 args を渡して呼び出し\ngreet(...___);",
      "correctLines": [
        "function greet(name: string, age: number): void {",
        "  console.log(`${name} is ${age}`);",
        "}",
        "",
        "type GreetParams = Parameters<typeof greet>;",
        "const args: GreetParams = ['Taro', 25];",
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
          "title": "Awaited<T>とは？",
          "image": "/illustrations/3d/task_async.png",
          "content": "# Promiseの中身の型を取得\n\n**Awaited**（アウェイテッド）は、Promise（「後で届く約束」のようなもの）が解決したときの型を取得します。\n\n## たとえ話\n\n「配達中の荷物」を想像してみてください。荷物が届く前から「中身は本です」とわかっていれば準備できますよね。AwaitedはPromiseの「中身の型」を教えてくれます。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype P = Promise<string>;  // 「後でstringが届く」約束\ntype T = Awaited<P>;\n// string\n// Promiseの中身はstringだとわかった！\n```"
        },
        {
          "title": "Awaitedの使い方",
          "image": "/illustrations/3d/task_async.png",
          "content": "# 非同期処理の結果の型\n\nWebからデータを取得するなど、非同期処理の結果の型を知りたいときに使います。\n\n## たとえ話\n\n「この注文をすると、何が届く？」という質問に答えるようなものです。\n\n## コードで書くとこうなるよ\n\n```typescript\ntype AsyncResult = Promise<{ data: string }>;\n\n// Promiseが解決したら何になる？\ntype Result = Awaited<AsyncResult>;\n// { data: string }\n\n// 同じ型の変数を作れる\nconst result: Result = { data: 'success' };\n```\n\nasync/awaitで取得する値の型がわかって便利です！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "type AsyncResult = Promise<{ data: string }>;\n// Awaited でPromiseの解決型を取得\ntype Result = Awaited<AsyncResult>;\n\nconst result: Result = { data: 'success' };\nconsole.log(result.data);",
      "holeyCode": "// Promiseの型を定義\ntype AsyncResult = Promise<{ data: ___ }>;\n// Awaited でPromiseの解決型を取得\ntype Result = ___<AsyncResult>;\n\n// 結果オブジェクトを作成\nconst result: Result = { data: ___ };\n// データを出力\nconsole.log(result.___);",
      "correctLines": [
        "type AsyncResult = Promise<{ data: string }>;",
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
