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
            "content": "# 型を絞り込む\\\\n\\\\n**型ガード**（Type Guard）は、「この値は○○型です！」と確認する関数です。確認した後は、TypeScriptがその型として扱ってくれます。\\\\n\\\\n## たとえ話\\\\n\\\\n「この箱の中身は何？」と確認してから使うような感じです。中身が「りんご」だとわかれば、りんごとして扱えます。\\\\n\\\\n## 書き方のポイント\\\\n\\\\n戻り値の型を `x is string` のように書きます。これは「xはstringです」という意味の特別な書き方です。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\nfunction isString(x: unknown): x is string {\\\\n  return typeof x === 'string';\\\\n}\\\\n// 「xがstringかどうかチェックする関数」\\\\n```"
          },
          {
            "title": "型ガードの使い方",
            "content": "# 安全に型を使う\\\\n\\\\n型ガードでチェックした後は、TypeScriptがその型として扱ってくれるので、安全にメソッドなどを使えます。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\nfunction isString(x: unknown): x is string {\\\\n  return typeof x === 'string';\\\\n}\\\\n\\\\nconst value: unknown = 'hello';\\\\n\\\\nif (isString(value)) {\\\\n  // ここではvalueはstring型！\\\\n  console.log(value.toUpperCase());\\\\n  // 文字列のメソッドが使える！\\\\n}\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// is で型ガードの戻り値型を定義\\\\nfunction isNumber(x: unknown): x is number {\\\\n  // typeofで型をチェック\\\\n  return typeof x === 'number';\\\\n}\\\\n\\\\n// unknown型の値\\\\nconst value: unknown = 42;\\\\n// 型ガードでチェック\\\\nif (isNumber(value)) {\\\\n  // 数値として計算\\\\n  console.log(value * 2);\\\\n}",
        "holeyCode": "// is で型ガードの戻り値型を定義\\\\nfunction isNumber(x: unknown): x ___ number {\\\\n  // typeofで型をチェック\\\\n  return typeof x === ___;\\\\n}\\\\n\\\\n// unknown型の値\\\\nconst value: unknown = ___;\\\\n// 型ガードでチェック\\\\nif (isNumber(___)) {\\\\n  // 数値として計算\\\\n  console.log(value * ___);\\\\n}",
        "correctLines": [
          "// is で型ガードの戻り値型を定義",
          "function isNumber(x: unknown): x is number {",
          "  // typeofで型をチェック",
          "  return typeof x === 'number';",
          "}",
          "",
          "// unknown型の値",
          "const value: unknown = 42;",
          "// 型ガードでチェック",
          "if (isNumber(value)) {",
          "  // 数値として計算",
          "  console.log(value * 2);",
          "}"
        ],
        "lineHints": [
          null,
          "型ガードの戻り値型を定義します。",
          null,
          "チェックする型名を文字列で指定します。",
          "チェックする値を数値で指定します。",
          "型ガード関数に渡す変数を指定します。",
          null,
          "掛け算の倍数を数値で指定します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "is",
            "as",
            "in"
          ],
          "others": [
            "'number'",
            "42",
            "value",
            "2"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\\\\n"
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
            "content": "# プロパティで型を絞り込む\\\\n\\\\n**in演算子**は、オブジェクトに「特定のプロパティがあるかどうか」をチェックします。これで型を絞り込むことができます。\\\\n\\\\n## たとえ話\\\\n\\\\n「羽があれば鳥、ひれがあれば魚」のように、特徴で見分けるような感じです。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Fish = { swim: () => void };  // 泳げる\\\\ntype Bird = { fly: () => void };   // 飛べる\\\\n\\\\nfunction move(animal: Fish | Bird) {\\\\n  if ('swim' in animal) {\\\\n    // swimがある = 魚！\\\\n    animal.swim();\\\\n  } else {\\\\n    // swimがない = 鳥！\\\\n    animal.fly();\\\\n  }\\\\n}\\\\n```"
          },
          {
            "title": "in演算子の使い方",
            "content": "# 書き方のポイント\\\\n\\\\n`'プロパティ名' in オブジェクト` という形で書きます。\\\\n\\\\n## 注意点\\\\n\\\\n- プロパティ名は文字列（クォートで囲む）\\\\n- 存在すればtrue、なければfalseが返る\\\\n\\\\n## たとえ話\\\\n\\\\n「このオブジェクトに○○という項目はある？」と聞いているようなものです。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\nconst obj = { name: 'Taro', age: 10 };\\\\n\\\\nif ('age' in obj) {\\\\n  console.log('ageがあります！');\\\\n}\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 車の型\\\\ntype Car = { drive: () => void };\\\\n// 船の型\\\\ntype Boat = { sail: () => void };\\\\n\\\\nfunction operate(vehicle: Car | Boat): void {\\\\n  // in でプロパティの存在をチェック\\\\n  if ('drive' in vehicle) {\\\\n    // 車の操作\\\\n    console.log('Driving');\\\\n  } else {\\\\n    // 船の操作\\\\n    console.log('Sailing');\\\\n  }\\\\n}\\\\n\\\\n// 車を操作\\\\noperate({ drive: () => {} });",
        "holeyCode": "// 車の型\\\\ntype Car = { drive: () => ___ };\\\\n// 船の型\\\\ntype Boat = { sail: () => ___ };\\\\n\\\\nfunction operate(vehicle: Car | Boat): void {\\\\n  // in でプロパティの存在をチェック\\\\n  if ('drive' ___ vehicle) {\\\\n    // 車の操作\\\\n    console.log(___);\\\\n  } else {\\\\n    // 船の操作\\\\n    console.log(___);\\\\n  }\\\\n}\\\\n\\\\n// 車を操作\\\\noperate({ drive: () => {} });",
        "correctLines": [
          "// 車の型",
          "type Car = { drive: () => void };",
          "// 船の型",
          "type Boat = { sail: () => void };",
          "",
          "function operate(vehicle: Car | Boat): void {",
          "  // in でプロパティの存在をチェック",
          "  if ('drive' in vehicle) {",
          "    // 車の操作",
          "    console.log('Driving');",
          "  } else {",
          "    // 船の操作",
          "    console.log('Sailing');",
          "  }",
          "}",
          "",
          "// 車を操作",
          "operate({ drive: () => {} });"
        ],
        "lineHints": [
          null,
          "戻り値がないことを示す型です。",
          null,
          "戻り値がないことを示す型です。",
          "プロパティの存在をチェックする演算子です。",
          "デバッグ用コンソールなどに文字列を出力します。",
          null,
          "デバッグ用コンソールなどに文字列を出力します。",
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
            "has"
          ],
          "others": [
            "void",
            "'Driving'",
            "'Sailing'"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Driving\\\\n"
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
            "content": "# 判別プロパティで型を区別\\\\n\\\\n**Discriminated Union**（判別可能なユニオン）は、共通の「目印プロパティ」を使って、どの型かを見分ける方法です。\\\\n\\\\n## たとえ話\\\\n\\\\nお菓子の袋に「種類：チョコ」「種類：クッキー」と書いてあれば、中身を開けなくても何が入っているかわかりますよね。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\n// kindが「目印」になる\\\\ntype Circle = { kind: 'circle'; radius: number };\\\\ntype Square = { kind: 'square'; size: number };\\\\ntype Shape = Circle | Square;\\\\n\\\\nfunction area(s: Shape): number {\\\\n  switch (s.kind) {  // kindで判別\\\\n    case 'circle': return Math.PI * s.radius ** 2;\\\\n    case 'square': return s.size ** 2;\\\\n  }\\\\n}\\\\n```"
          },
          {
            "title": "Discriminated Unionの利点",
            "content": "# なぜ便利なの？\\\\n\\\\n判別プロパティ（kindなど）を見れば、TypeScriptがその型だと自動で理解してくれます。\\\\n\\\\n## メリット\\\\n\\\\n1. **switch文で簡単に分岐できる**\\\\n2. **各caseで正しいプロパティが使える**\\\\n3. **漏れがあるとエラーで教えてくれる**\\\\n\\\\n## たとえ話\\\\n\\\\n「円」と「四角」では使えるプロパティが違います。kindを見て判別すれば、円なら「radius」、四角なら「size」が使えると自動でわかります！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 成功時の型\\\\ntype Success = { status: 'success'; data: string };\\\\n// 失敗時の型\\\\ntype Failure = { status: 'failure'; error: string };\\\\n// 結果のユニオン型\\\\ntype Result = Success | Failure;\\\\n\\\\nfunction handle(result: Result): void {\\\\n  // status で判別プロパティを使う\\\\n  switch (result.status) {\\\\n    case 'success':\\\\n      // データを出力\\\\n      console.log(result.data);\\\\n      break;\\\\n    case 'failure':\\\\n      // エラーを出力\\\\n      console.log(result.error);\\\\n      break;\\\\n  }\\\\n}\\\\n\\\\n// 成功結果を処理\\\\nhandle({ status: 'success', data: 'OK' });",
        "holeyCode": "// 成功時の型\\\\ntype Success = { status: 'success'; data: ___ };\\\\n// 失敗時の型\\\\ntype Failure = { status: 'failure'; error: ___ };\\\\n// 結果のユニオン型\\\\ntype Result = Success ___ Failure;\\\\n\\\\nfunction handle(result: Result): void {\\\\n  // status で判別プロパティを使う\\\\n  switch (result.___) {\\\\n    case 'success':\\\\n      // データを出力\\\\n      console.log(result.___);\\\\n      break;\\\\n    case 'failure':\\\\n      // エラーを出力\\\\n      console.log(result.___);\\\\n      break;\\\\n  }\\\\n}\\\\n\\\\n// 成功結果を処理\\\\nhandle({ status: 'success', data: ___ });",
        "correctLines": [
          "// 成功時の型",
          "type Success = { status: 'success'; data: string };",
          "// 失敗時の型",
          "type Failure = { status: 'failure'; error: string };",
          "// 結果のユニオン型",
          "type Result = Success | Failure;",
          "",
          "function handle(result: Result): void {",
          "  // status で判別プロパティを使う",
          "  switch (result.status) {",
          "    case 'success':",
          "      // データを出力",
          "      console.log(result.data);",
          "      break;",
          "    case 'failure':",
          "      // エラーを出力",
          "      console.log(result.error);",
          "      break;",
          "  }",
          "}",
          "",
          "// 成功結果を処理",
          "handle({ status: 'success', data: 'OK' });"
        ],
        "lineHints": [
          null,
          "データは文字列なので `string` です。",
          null,
          "エラーは文字列なので `string` です。",
          null,
          "ユニオン型を作る演算子です。",
          "判別プロパティ名を指定します。",
          "成功時に取得するプロパティ名を指定します。",
          null,
          "失敗時に取得するプロパティ名を指定します。",
          "成功時のデータ値を文字列で指定します。",
          null,
          null,
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
            "status",
            "type",
            "kind"
          ],
          "others": [
            "string",
            "|",
            "data",
            "error",
            "'OK'"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "OK\\\\n"
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
            "content": "# 到達不能な型\\\\n\\\\n**never型**は「絶対にここには来ない」という意味の特別な型です。値を持たない型なので、何も代入できません。\\\\n\\\\n## たとえ話\\\\n\\\\n「ありえない」を型で表現したものです。例えば、全ての可能性を処理した後の「残り」は「ありえない」ですよね。\\\\n\\\\n## いつ使うの？\\\\n\\\\nswitch文で「全てのケースを処理したか」をチェックするのに使います。もし処理し忘れたケースがあると、TypeScriptがエラーで教えてくれます！\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\nfunction exhaustiveCheck(x: never): never {\\\\n  throw new Error('Unexpected value');\\\\n}\\\\n// 「ここには絶対来ないはず」という関数\\\\n```"
          },
          {
            "title": "網羅性チェック",
            "content": "# 処理し忘れを防ぐ\\\\n\\\\nswitch文のdefaultでnever型を使うと、全ケースを処理したかチェックできます。\\\\n\\\\n## たとえ話\\\\n\\\\n「赤・青・緑」の3色を処理するとき、もし「青」を忘れていたらエラーで教えてくれます。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Color = 'red' | 'blue';\\\\n\\\\nfunction handle(c: Color) {\\\\n  switch (c) {\\\\n    case 'red': return '#ff0000';\\\\n    case 'blue': return '#0000ff';\\\\n    default:\\\\n      // 全ケース処理済みなら、ここには来ない\\\\n      const _check: never = c;\\\\n      return _check;\\\\n  }\\\\n}\\\\n```\\\\n\\\\n新しい色を追加したとき、処理を忘れるとエラーになります！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 色のユニオン型\\\\ntype Color = 'red' | 'green' | 'blue';\\\\n\\\\nfunction getHex(color: Color): string {\\\\n  switch (color) {\\\\n    // 赤のカラーコード\\\\n    case 'red': return '#ff0000';\\\\n    // 緑のカラーコード\\\\n    case 'green': return '#00ff00';\\\\n    // 青のカラーコード\\\\n    case 'blue': return '#0000ff';\\\\n    default:\\\\n      // never で到達不能な型を表す\\\\n      const _exhaustive: never = color;\\\\n      // exhaustive変数を返す\\\\n      return _exhaustive;\\\\n  }\\\\n}\\\\n\\\\n// 赤のカラーコードを出力\\\\nconsole.log(getHex('red'));",
        "holeyCode": "// 色のユニオン型\\\\ntype Color = 'red' | 'green' ___ 'blue';\\\\n\\\\nfunction getHex(color: Color): string {\\\\n  switch (color) {\\\\n    // 赤のカラーコード\\\\n    case 'red': return ___;\\\\n    // 緑のカラーコード\\\\n    case 'green': return ___;\\\\n    // 青のカラーコード\\\\n    case 'blue': return ___;\\\\n    default:\\\\n      // never で到達不能な型を表す\\\\n      const _exhaustive: ___ = color;\\\\n      // exhaustive変数を返す\\\\n      return ___;\\\\n  }\\\\n}\\\\n\\\\n// 赤のカラーコードを出力\\\\nconsole.log(getHex(___));",
        "correctLines": [
          "// 色のユニオン型",
          "type Color = 'red' | 'green' | 'blue';",
          "",
          "function getHex(color: Color): string {",
          "  switch (color) {",
          "    // 赤のカラーコード",
          "    case 'red': return '#ff0000';",
          "    // 緑のカラーコード",
          "    case 'green': return '#00ff00';",
          "    // 青のカラーコード",
          "    case 'blue': return '#0000ff';",
          "    default:",
          "      // never で到達不能な型を表す",
          "      const _exhaustive: never = color;",
          "      // exhaustive変数を返す",
          "      return _exhaustive;",
          "  }",
          "}",
          "",
          "// 赤のカラーコードを出力",
          "console.log(getHex('red'));"
        ],
        "lineHints": [
          null,
          "ユニオン型に色を追加する演算子です。",
          "赤色のカラーコードを16進数で返します。",
          "緑色のカラーコードを16進数で返します。",
          "青色のカラーコードを16進数で返します。",
          null,
          "全ケースを処理した後は到達しないことを示す型です。",
          null,
          "変数の値を呼び出し元に返します（戻り値）。",
          null,
          "カラーコードを取得したい色を指定します。",
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
            "never",
            "void",
            "unknown"
          ],
          "others": [
            "|",
            "'#ff0000'",
            "'#00ff00'",
            "'#0000ff'",
            "_exhaustive",
            "'red'"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "#ff0000\\\\n"
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
            "content": "# 文字列型を組み合わせる\\\\n\\\\n**テンプレートリテラル型**は、文字列リテラル型を組み合わせて、新しい文字列パターンを作る機能です。\\\\n\\\\n## たとえ話\\\\n\\\\n「サイズ」と「色」を組み合わせて「小-赤」「大-青」などのパターンを自動で作れます。全部手で書かなくてOK！\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Color = 'red' | 'blue';\\\\ntype Size = 'small' | 'large';\\\\ntype Style = `${Size}-${Color}`;\\\\n// 自動で4パターンができる！\\\\n// 'small-red' | 'small-blue' | 'large-red' | 'large-blue'\\\\n```"
          },
          {
            "title": "テンプレートリテラル型の書き方",
            "content": "# 書き方のポイント\\\\n\\\\nバッククォート（`）で囲んで、`${型名}` で他の型を埋め込みます。\\\\n\\\\n## 便利な使い方\\\\n\\\\nAPIのルートや、CSSのクラス名など、決まったパターンの文字列を型で表現できます。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Method = 'get' | 'post';\\\\ntype Path = '/users' | '/posts';\\\\n\\\\n// メソッドとパスの組み合わせ\\\\ntype Route = `${Method} ${Path}`;\\\\n// 'get /users' | 'get /posts' | 'post /users' | 'post /posts'\\\\n\\\\nconst route: Route = 'get /users';  // OK!\\\\nconst bad: Route = 'delete /users'; // エラー！\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// HTTPメソッドのユニオン型\\\\ntype Method = 'get' | 'post';\\\\n// エンドポイントのユニオン型\\\\ntype Endpoint = '/users' | '/posts';\\\\n// ` でテンプレートリテラル型を定義\\\\ntype Route = `${Method} ${Endpoint}`;\\\\n\\\\n// ルートを定義\\\\nconst route: Route = 'get /users';\\\\n// 出力\\\\nconsole.log(route);",
        "holeyCode": "// HTTPメソッドのユニオン型\\\\ntype Method = 'get' ___ 'post';\\\\n// エンドポイントのユニオン型\\\\ntype Endpoint = '/users' ___ '/posts';\\\\n// ` でテンプレートリテラル型を定義\\\\ntype Route = ___${Method} ${Endpoint}`;\\\\n\\\\n// ルートを定義\\\\nconst route: Route = ___;\\\\n// 出力\\\\nconsole.log(___);",
        "correctLines": [
          "// HTTPメソッドのユニオン型",
          "type Method = 'get' | 'post';",
          "// エンドポイントのユニオン型",
          "type Endpoint = '/users' | '/posts';",
          "// ` でテンプレートリテラル型を定義",
          "type Route = `${Method} ${Endpoint}`;",
          "",
          "// ルートを定義",
          "const route: Route = 'get /users';",
          "// 出力",
          "console.log(route);"
        ],
        "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "ユニオン型を作る演算子です。",
          null,
          "テンプレートリテラルを開始するバッククォートです。",
          "有効なルートパターンを文字列で指定します。",
          null,
          "出力する変数を指定します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "`",
            "'",
            "\""
          ],
          "others": [
            "|",
            "'get /users'",
            "route"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "get /users\\\\n"
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
            "content": "# ユニオン型から除外する\\\\n\\\\n**Exclude**（エクスクルード）は、ユニオン型から特定の型を「除外」します。\\\\n\\\\n## たとえ話\\\\n\\\\n「りんご・みかん・バナナ」の中から「バナナ」を除外すると「りんご・みかん」になりますよね。Excludeはまさにそれ！\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype T = 'a' | 'b' | 'c';\\\\ntype Without_A = Exclude<T, 'a'>;\\\\n// 'b' | 'c'\\\\n// 'a' が除外された！\\\\n```"
          },
          {
            "title": "Excludeの使い方",
            "content": "# 特定の状態を除外\\\\n\\\\n「使いたくない状態」を除外した新しい型を作れます。\\\\n\\\\n## たとえ話\\\\n\\\\nすべてのステータスの中から「キャンセル済み」だけを除外して、「アクティブなステータス」だけを使いたいときに便利です。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Status = 'pending' | 'success' | 'error' | 'cancelled';\\\\n\\\\n// cancelledを除外\\\\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\\\\n// 'pending' | 'success' | 'error'\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// ステータスのユニオン型\\\\ntype Status = 'pending' | 'success' | 'error' | 'cancelled';\\\\n// Exclude でユニオン型から特定の型を除外\\\\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\\\\n\\\\n// アクティブなステータスを代入\\\\nconst status: ActiveStatus = 'pending';\\\\n// 出力\\\\nconsole.log(status);",
        "holeyCode": "// ステータスのユニオン型\\\\ntype Status = 'pending' | 'success' | 'error' ___ 'cancelled';\\\\n// Exclude でユニオン型から特定の型を除外\\\\ntype ActiveStatus = ___<Status, 'cancelled'>;\\\\n\\\\n// アクティブなステータスを代入\\\\nconst status: ActiveStatus = ___;\\\\n// 出力\\\\nconsole.log(___);",
        "correctLines": [
          "// ステータスのユニオン型",
          "type Status = 'pending' | 'success' | 'error' | 'cancelled';",
          "// Exclude でユニオン型から特定の型を除外",
          "type ActiveStatus = Exclude<Status, 'cancelled'>;",
          "",
          "// アクティブなステータスを代入",
          "const status: ActiveStatus = 'pending';",
          "// 出力",
          "console.log(status);"
        ],
        "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "型を除外するユーティリティ型です。",
          "除外されていないステータスを文字列で指定します。",
          null,
          "出力する変数を指定します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "Exclude",
            "Omit",
            "Extract"
          ],
          "others": [
            "|",
            "'pending'",
            "status"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "pending\\\\n"
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
            "content": "# ユニオン型から抽出する\\\\n\\\\n**Extract**（エクストラクト）は、Excludeの逆で、ユニオン型から「欲しい型だけ」を抽出します。\\\\n\\\\n## たとえ話\\\\n\\\\n「りんご・みかん・バナナ」の中から「りんご・みかん」だけを選び出すようなものです。「これだけ欲しい！」というときに使います。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype T = 'a' | 'b' | 'c';\\\\ntype Only_AB = Extract<T, 'a' | 'b'>;\\\\n// 'a' | 'b'\\\\n// 'a' と 'b' だけ抽出された！\\\\n```"
          },
          {
            "title": "Extractの使い方",
            "content": "# 特定の種類だけを抽出\\\\n\\\\n「使いたい型だけ」を選び出せます。\\\\n\\\\n## たとえ話\\\\n\\\\nすべてのイベントの中から「マウス関連のイベント」だけを選びたいときに便利です。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Event = 'click' | 'scroll' | 'keydown';\\\\n\\\\n// マウス関連だけを抽出\\\\ntype MouseEvent = Extract<Event, 'click' | 'scroll'>;\\\\n// 'click' | 'scroll'\\\\n```\\\\n\\\\nExcludeが「除外」、Extractが「抽出」と覚えましょう！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// イベントのユニオン型\\\\ntype Event = 'click' | 'scroll' | 'mouseover' | 'keydown';\\\\n// Extract でユニオン型から特定の型を抽出\\\\ntype MouseEvent = Extract<Event, 'click' | 'scroll' | 'mouseover'>;\\\\n\\\\n// マウスイベントを代入\\\\nconst event: MouseEvent = 'click';\\\\n// 出力\\\\nconsole.log(event);",
        "holeyCode": "// イベントのユニオン型\\\\ntype Event = 'click' | 'scroll' | 'mouseover' ___ 'keydown';\\\\n// Extract でユニオン型から特定の型を抽出\\\\ntype MouseEvent = ___<Event, 'click' | 'scroll' | 'mouseover'>;\\\\n\\\\n// マウスイベントを代入\\\\nconst event: MouseEvent = ___;\\\\n// 出力\\\\nconsole.log(___);",
        "correctLines": [
          "// イベントのユニオン型",
          "type Event = 'click' | 'scroll' | 'mouseover' | 'keydown';",
          "// Extract でユニオン型から特定の型を抽出",
          "type MouseEvent = Extract<Event, 'click' | 'scroll' | 'mouseover'>;",
          "",
          "// マウスイベントを代入",
          "const event: MouseEvent = 'click';",
          "// 出力",
          "console.log(event);"
        ],
        "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "型を抽出するユーティリティ型です。",
          "抽出されたマウスイベントを文字列で指定します。",
          null,
          "出力する変数を指定します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "Extract",
            "Exclude",
            "Pick"
          ],
          "others": [
            "|",
            "'click'",
            "event"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "click\\\\n"
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
            "content": "# null/undefinedを除外\\\\n\\\\n**NonNullable**（ノンナラブル）は、型から `null` と `undefined` を除外します。「確実に値がある」ことを保証したいときに使います。\\\\n\\\\n## たとえ話\\\\n\\\\n「空っぽかもしれない」状態から「必ず中身がある」状態に変えるようなものです。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype T = string | null | undefined;\\\\ntype NonNull = NonNullable<T>;\\\\n// string\\\\n// null と undefined が消えた！\\\\n```"
          },
          {
            "title": "NonNullableの使い方",
            "content": "# 安全に値を使う\\\\n\\\\nnullやundefinedの可能性を排除して、安全に値を使えるようにします。\\\\n\\\\n## たとえ話\\\\n\\\\nデータを取得したとき「まだない」場合はnullかもしれません。でも「確実にある」場面ではNonNullableで保証できます。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype MaybeString = string | null | undefined;\\\\n\\\\n// null/undefinedを除外\\\\ntype DefiniteString = NonNullable<MaybeString>;\\\\n// string\\\\n\\\\nconst text: DefiniteString = 'Hello';\\\\n// null や undefined は代入できない！\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// nullまたはundefinedを含む型\\\\ntype MaybeString = string | null | undefined;\\\\n// NonNullable でnull/undefinedを除外\\\\ntype DefiniteString = NonNullable<MaybeString>;\\\\n\\\\n// 確定した文字列を代入\\\\nconst text: DefiniteString = 'Hello';\\\\n// 出力\\\\nconsole.log(text);",
        "holeyCode": "// nullまたはundefinedを含む型\\\\ntype MaybeString = string | null ___ undefined;\\\\n// NonNullable でnull/undefinedを除外\\\\ntype DefiniteString = ___<MaybeString>;\\\\n\\\\n// 確定した文字列を代入\\\\nconst text: DefiniteString = ___;\\\\n// 出力\\\\nconsole.log(___);",
        "correctLines": [
          "// nullまたはundefinedを含む型",
          "type MaybeString = string | null | undefined;",
          "// NonNullable でnull/undefinedを除外",
          "type DefiniteString = NonNullable<MaybeString>;",
          "",
          "// 確定した文字列を代入",
          "const text: DefiniteString = 'Hello';",
          "// 出力",
          "console.log(text);"
        ],
        "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "null/undefinedを除外するユーティリティ型です。",
          "確定した文字列の値を指定します。",
          null,
          "出力する変数を指定します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "NonNullable",
            "Required",
            "Exclude"
          ],
          "others": [
            "|",
            "'Hello'",
            "text"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello\\\\n"
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
            "content": "# 関数の引数型を取得\\\\n\\\\n**Parameters**（パラメーターズ）は、関数が「何を受け取るか」の型を取得します。引数の型がタプル（順番付きの配列）として返ってきます。\\\\n\\\\n## たとえ話\\\\n\\\\n料理のレシピを見て「材料リスト」を知るようなものです。関数がどんな材料（引数）を必要としているかがわかります。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype Fn = (a: string, b: number) => void;\\\\ntype Params = Parameters<Fn>;\\\\n// [string, number]\\\\n// 「1番目はstring、2番目はnumber」\\\\n```"
          },
          {
            "title": "Parametersの使い方",
            "content": "# 引数を再利用する\\\\n\\\\n既存の関数と同じ引数を使いたいときに便利です。\\\\n\\\\n## たとえ話\\\\n\\\\n「この関数と同じ材料で、別の料理を作る」ような感じです。引数の型を一から書かなくて済みます。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\nfunction greet(name: string, age: number): void {\\\\n  console.log(`${name} is ${age}`);\\\\n}\\\\n\\\\n// 関数の引数の型を取得\\\\ntype GreetParams = Parameters<typeof greet>;\\\\n// [string, number]\\\\n\\\\n// 同じ型の引数を使える！\\\\nconst args: GreetParams = ['Taro', 25];\\\\ngreet(...args);  // 'Taro is 25'\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "function greet(name: string, age: number): void {\\\\n  // テンプレート文字列で出力\\\\n  console.log(`${name} is ${age}`);\\\\n}\\\\n// Parameters で関数の引数型を取得\\\\ntype GreetParams = Parameters<typeof greet>;\\\\n// 引数の配列を定義\\\\nconst args: GreetParams = ['Taro', 25];\\\\n// 引数の配列 args を渡して呼び出し\\\\ngreet(...args);",
        "holeyCode": "function greet(name: string, age: number): void {\\\\n  // テンプレート文字列で出力\\\\n  console.log(`${name} is ${___}`);\\\\n}\\\\n// Parameters で関数の引数型を取得\\\\ntype GreetParams = ___<typeof greet>;\\\\n// 引数の配列を定義\\\\nconst args: GreetParams = ['Taro', ___];\\\\n// 引数の配列 args を渡して呼び出し\\\\ngreet(...___);",
        "correctLines": [
          "function greet(name: string, age: number): void {",
          "  // テンプレート文字列で出力",
          "  console.log(`${name} is ${age}`);",
          "}",
          "// Parameters で関数の引数型を取得",
          "type GreetParams = Parameters<typeof greet>;",
          "// 引数の配列を定義",
          "const args: GreetParams = ['Taro', 25];",
          "// 引数の配列 args を渡して呼び出し",
          "greet(...args);"
        ],
        "lineHints": [
          "デバッグ用コンソールなどに文字列を出力します。",
          null,
          "関数の引数型を取得するユーティリティ型です。",
          "年齢の値を数値で指定します。",
          null,
          "スプレッド構文で展開する配列を指定します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "Parameters",
            "ReturnType",
            "Arguments"
          ],
          "others": [
            "age",
            "25",
            "args"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Taro is 25\\\\n"
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
            "content": "# Promiseの中身の型を取得\\\\n\\\\n**Awaited**（アウェイテッド）は、Promise（「後で届く約束」のようなもの）が解決したときの型を取得します。\\\\n\\\\n## たとえ話\\\\n\\\\n「配達中の荷物」を想像してみてください。荷物が届く前から「中身は本です」とわかっていれば準備できますよね。AwaitedはPromiseの「中身の型」を教えてくれます。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype P = Promise<string>;  // 「後でstringが届く」約束\\\\ntype T = Awaited<P>;\\\\n// string\\\\n// Promiseの中身はstringだとわかった！\\\\n```"
          },
          {
            "title": "Awaitedの使い方",
            "content": "# 非同期処理の結果の型\\\\n\\\\nWebからデータを取得するなど、非同期処理の結果の型を知りたいときに使います。\\\\n\\\\n## たとえ話\\\\n\\\\n「この注文をすると、何が届く？」という質問に答えるようなものです。\\\\n\\\\n## コードで書くとこうなるよ\\\\n\\\\n```typescript\\\\ntype AsyncResult = Promise<{ data: string }>;\\\\n\\\\n// Promiseが解決したら何になる？\\\\ntype Result = Awaited<AsyncResult>;\\\\n// { data: string }\\\\n\\\\n// 同じ型の変数を作れる\\\\nconst result: Result = { data: 'success' };\\\\n```\\\\n\\\\nasync/awaitで取得する値の型がわかって便利です！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// Promiseの型を定義\\\\ntype AsyncResult = Promise<{ data: string }>;\\\\n// Awaited でPromiseの解決型を取得\\\\ntype Result = Awaited<AsyncResult>;\\\\n\\\\n// 結果オブジェクトを作成\\\\nconst result: Result = { data: 'success' };\\\\n// データを出力\\\\nconsole.log(result.data);",
        "holeyCode": "// Promiseの型を定義\\\\ntype AsyncResult = Promise<{ data: ___ }>;\\\\n// Awaited でPromiseの解決型を取得\\\\ntype Result = ___<AsyncResult>;\\\\n\\\\n// 結果オブジェクトを作成\\\\nconst result: Result = { data: ___ };\\\\n// データを出力\\\\nconsole.log(result.___);",
        "correctLines": [
          "// Promiseの型を定義",
          "type AsyncResult = Promise<{ data: string }>;",
          "// Awaited でPromiseの解決型を取得",
          "type Result = Awaited<AsyncResult>;",
          "",
          "// 結果オブジェクトを作成",
          "const result: Result = { data: 'success' };",
          "// データを出力",
          "console.log(result.data);"
        ],
        "lineHints": [
          null,
          "データの型は文字列なので `string` です。",
          null,
          "Promiseの解決型を取得するユーティリティ型です。",
          "データの値を文字列で指定します。",
          null,
          "取得したいプロパティ名を指定します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "Awaited",
            "Promise",
            "Resolved"
          ],
          "others": [
            "string",
            "'success'",
            "data"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "success\\\\n"
          }
        ]
      }
  ]
};
