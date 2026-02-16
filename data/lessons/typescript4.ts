export const typescriptData4 = {
  "language": "typescript",
  "lessonId": "typescript-4",
  "lessonTitle": "TypeScript IV - デコレータと高度なパターン",
  "lessonDescription": "TypeScriptのデコレータと高度なパターンを学びます。メタプログラミング、型ガード、ユーティリティなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    { "title": "型ガードとは？", "content": "# 型を絞り込む\\n\\n**型ガード**（Type Guard）は「この値は○○型です！」と確認する関数です。\\n\\n戻り値の型を `x is string` のように書きます。\\n\\n```typescript\\nfunction isString(x: unknown): x is string {\\n  return typeof x === 'string';\\n}\\n\\nif (isString(value)) {\\n  // ここではvalueはstring型！\\n  console.log(value.toUpperCase());\\n}\\n```" },
    { "title": "in演算子での型絞り込み", "content": "# プロパティで型を判別\\n\\n**in演算子**は、オブジェクトに特定のプロパティがあるかをチェックします。\\n\\n```typescript\\ntype Fish = { swim: () => void };\\ntype Bird = { fly: () => void };\\n\\nfunction move(animal: Fish | Bird) {\\n  if ('swim' in animal) {\\n    animal.swim();  // Fish!\\n  } else {\\n    animal.fly();   // Bird!\\n  }\\n}\\n```\\n\\n「羽があれば鳥、ひれがあれば魚」のような判別ができます。" },
    { "title": "Discriminated Union", "content": "# 判別プロパティで型を区別\\n\\n**Discriminated Union**は、共通の「目印」プロパティを使って型を見分ける方法です。\\n\\n```typescript\\ntype Circle = { kind: 'circle'; radius: number };\\ntype Square = { kind: 'square'; size: number };\\ntype Shape = Circle | Square;\\n\\nfunction area(s: Shape): number {\\n  switch (s.kind) {\\n    case 'circle': return Math.PI * s.radius ** 2;\\n    case 'square': return s.size ** 2;\\n  }\\n}\\n```" },
    { "title": "never型で網羅性チェック", "content": "# 到達不能な型\\n\\n**never型**は「絶対にここには来ない」という意味の特別な型です。\\n\\nswitch文で全てのケースを処理したかチェックするのに使います。\\n\\n```typescript\\nfunction exhaustiveCheck(x: never): never {\\n  throw new Error('Unexpected value');\\n}\\n\\n// 全ケース処理済みなら、defaultには来ない\\ndefault:\\n  const _check: never = c;\\n```\\n\\n新しいケースを追加して処理を忘れるとエラーになります！" },
    { "title": "Readonly<T>", "content": "# 読み取り専用に\\n\\n**Readonly<T>**は、全てのプロパティを読み取り専用（変更不可）にします。\\n\\n```typescript\\ninterface Point {\\n  x: number;\\n  y: number;\\n}\\n\\nconst p: Readonly<Point> = { x: 10, y: 20 };\\np.x = 5;  // エラー！読み取り専用\\n```\\n\\n誤って値を変更してしまうのを防げます！" }
  ],
  "exercises": [
    {
      "title": "型ガード関数",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "型ガードとは？",
          "content": "# 型を絞り込む\\n\\n**型ガード**（Type Guard）は、「この値は○○型です！」と確認する関数です。確認した後は、TypeScriptがその型として扱ってくれます。\\n\\n## たとえ話\\n\\n「この箱の中身は何？」と確認してから使うような感じです。中身が「りんご」だとわかれば、りんごとして扱えます。\\n\\n## 書き方のポイント\\n\\n戻り値の型を `x is string` のように書きます。これは「xはstringです」という意味の特別な書き方です。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction isString(x: unknown): x is string {\\n  return typeof x === 'string';\\n}\\n// 「xがstringかどうかチェックする関数」\\n```"
        },
        {
          "title": "型ガードの使い方",
          "content": "# 安全に型を使う\\n\\n型ガードでチェックした後は、TypeScriptがその型として扱ってくれるので、安全にメソッドなどを使えます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction isString(x: unknown): x is string {\\n  return typeof x === 'string';\\n}\\n\\nconst value: unknown = 'hello';\\n\\nif (isString(value)) {\\n  // ここではvalueはstring型！\\n  console.log(value.toUpperCase());\\n  // 文字列のメソッドが使える！\\n}\\n```"
        }
      ],
      "correctCode": "// isNumber型ガード関数を定義\\nfunction isNumber(x: unknown): x is number {\\n  // typeofで型をチェック\\n  return typeof x === 'number';\\n}\\n\\n// unknown型の値\\nconst value: unknown = 42;\\n// 型ガードで数値かチェック\\nif (isNumber(value)) {\\n  // consoleのlogメソッドでvalueの2倍を表示\\n  console.log(value * 2);\\n}",
      "holeyCode": "// isNumber型ガード関数を定義\\n___ ___(___: ___): ___ ___ ___ {\\n  // typeofで型をチェック\\n  return typeof ___ === ___;\\n}\\n\\n// unknown型の値\\nconst ___: ___ = ___;\\n// 型ガードで数値かチェック\\nif (___(___)) {\\n  // consoleのlogメソッドでvalueの2倍を表示\\n  ___.___(___ * ___);\\n}",
      "correctLines": [
          "// isNumber型ガード関数を定義",
          "function isNumber(x: unknown): x is number {",
          "  // typeofで型をチェック",
          "  return typeof x === 'number';",
          "}",
          "",
          "// unknown型の値",
          "const value: unknown = 42;",
          "// 型ガードで数値かチェック",
          "if (isNumber(value)) {",
          "  // consoleのlogメソッドでvalueの2倍を表示",
          "  console.log(value * 2);",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
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
            "function",
            "const",
            "if",
            "return",
            "typeof"
          ],
          "others": ["isNumber", "x", "unknown", "is", "number", "'number'", "}", "value", "42", "console", "log", "2"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "84\\n"
          }
        ]
      },
    {
      "title": "in演算子での型絞り込み",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "in演算子とは？",
          "content": "# プロパティで型を絞り込む\\n\\n**in演算子**は、オブジェクトに「特定のプロパティがあるかどうか」をチェックします。これで型を絞り込むことができます。\\n\\n## たとえ話\\n\\n「羽があれば鳥、ひれがあれば魚」のように、特徴で見分けるような感じです。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Fish = { swim: () => void };  // 泳げる\\ntype Bird = { fly: () => void };   // 飛べる\\n\\nfunction move(animal: Fish | Bird) {\\n  if ('swim' in animal) {\\n    // swimがある = 魚！\\n    animal.swim();\\n  } else {\\n    // swimがない = 鳥！\\n    animal.fly();\\n  }\\n}\\n```"
        },
        {
          "title": "in演算子の使い方",
          "content": "# 書き方のポイント\\n\\n`'プロパティ名' in オブジェクト` という形で書きます。\\n\\n## 注意点\\n\\n- プロパティ名は文字列（クォートで囲む）\\n- 存在すればtrue、なければfalseが返る\\n\\n## たとえ話\\n\\n「このオブジェクトに○○という項目はある？」と聞いているようなものです。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nconst obj = { name: 'Taro', age: 10 };\\n\\nif ('age' in obj) {\\n  console.log('ageがあります！');\\n}\\n```"
        }
      ],
      "correctCode": "// 車の型\\ntype Car = { 運転: () => void };\\n// 船の型\\ntype Boat = { sail: () => void };\\n\\n// operate関数（乗り物を操作）を定義\\nfunction operate(vehicle: Car | Boat): void {\\n  // 運転プロパティがあれば車\\n  if ('運転' in vehicle) {\\n    // consoleのlogメソッドで'運転中'を表示\\n    console.log('運転中');\\n  } else {\\n    // consoleのlogメソッドで'航海中'を表示\\n    console.log('航海中');\\n  }\\n}\\n\\n// 車を操作\\noperate({ 運転: () => {} });",
      "holeyCode": "// 車の型\\ntype ___ = { ___: () => ___ };\\n// 船の型\\ntype ___ = { ___: () => ___ };\\n\\n// operate関数（乗り物を操作）を定義\\n___ ___(___: ___ | ___): ___ {\\n  // 運転プロパティがあれば車\\n  if (___ ___ ___) {\\n    // consoleのlogメソッドで'運転中'を表示\\n    ___.___(___);\\n  } ___ {\\n    // consoleのlogメソッドで'航海中'を表示\\n    ___.___(___);\\n  }\\n}\\n\\n// 車を操作\\n___({ ___: () => {} });",
      "correctLines": [
          "// 車の型",
          "type Car = { 運転: () => void };",
          "// 船の型",
          "type Boat = { sail: () => void };",
          "",
          "// operate関数（乗り物を操作）を定義",
          "function operate(vehicle: Car | Boat): void {",
          "  // 運転プロパティがあれば車",
          "  if ('運転' in vehicle) {",
          "    // consoleのlogメソッドで'運転中'を表示",
          "    console.log('運転中');",
          "  } else {",
          "    // consoleのlogメソッドで'航海中'を表示",
          "    console.log('航海中');",
          "  }",
          "}",
          "",
          "// 車を操作",
          "operate({ 運転: () => {} });"
        ],
      "lineHints": [
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
          "",
          null,
          null,
          null,
          null,
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "type",
            "function",
            "if",
            "else",
            "in"
          ],
          "others": ["Car", "運転", "void", "Boat", "sail", "operate", "vehicle", "'運転'", "console", "log", "'運転中'", "'航海中'", "}", "", "// in でプロパティの存在をチェック", "車の操作", "else {", "console.log('航海中');", "車を操作"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "運転中\\n"
          }
        ]
      },
    {
      "title": "Discriminated Union",
      "description": "Discriminated Unionの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Discriminated Unionとは？",
          "content": "# 判別プロパティで型を区別\\n\\n**Discriminated Union**（判別可能なユニオン）は、共通の「目印プロパティ」を使って、どの型かを見分ける方法です。\\n\\n## たとえ話\\n\\nお菓子の袋に「種類：チョコ」「種類：クッキー」と書いてあれば、中身を開けなくても何が入っているかわかりますよね。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\n// kindが「目印」になる\\ntype Circle = { kind: 'circle'; radius: number };\\ntype Square = { kind: 'square'; size: number };\\ntype Shape = Circle | Square;\\n\\nfunction area(s: Shape): number {\\n  switch (s.kind) {  // kindで判別\\n    case 'circle': return Math.PI * s.radius ** 2;\\n    case 'square': return s.size ** 2;\\n  }\\n}\\n```"
        },
        {
          "title": "Discriminated Unionの利点",
          "content": "# なぜ便利なの？\\n\\n判別プロパティ（kindなど）を見れば、TypeScriptがその型だと自動で理解してくれます。\\n\\n## メリット\\n\\n1. **switch文で簡単に分岐できる**\\n2. **各caseで正しいプロパティが使える**\\n3. **漏れがあるとエラーで教えてくれる**\\n\\n## たとえ話\\n\\n「円」と「四角」では使えるプロパティが違います。kindを見て判別すれば、円なら「radius」、四角なら「size」が使えると自動でわかります！"
        }
      ],
      "correctCode": "// 成功時の型\\ntype Success = { status: '成功'; data: string };\\n// 失敗時の型\\ntype Failure = { status: '失敗'; error: string };\\n// 結果のユニオン型\\ntype Result = Success | Failure;\\n\\n// handle関数（結果を処理）を定義\\nfunction handle(result: Result): void {\\n  // statusで成功/失敗を判別\\n  switch (result.status) {\\n    case '成功':\\n      // consoleのlogメソッドでresult.dataを表示\\n      console.log(result.data);\\n      break;\\n    case '失敗':\\n      // consoleのlogメソッドでresult.errorを表示\\n      console.log(result.error);\\n      break;\\n  }\\n}\\n\\n// 成功結果を処理\\nhandle({ status: '成功', data: 'OK' });",
      "holeyCode": "// 成功時の型\\ntype ___ = { ___: ___; ___: ___ };\\n// 失敗時の型\\ntype ___ = { ___: ___; ___: ___ };\\n// 結果のユニオン型\\ntype ___ = ___ ___ ___;\\n\\n// handle関数（結果を処理）を定義\\n___ ___(___: ___): ___ {\\n  // statusで成功/失敗を判別\\n  switch (___.___) {\\n    case ___:\\n      // consoleのlogメソッドでresult.dataを表示\\n      ___.___(___.___)\\n      ___;\\n    case ___:\\n      // consoleのlogメソッドでresult.errorを表示\\n      ___.___(___.___)\\n      ___;\\n  }\\n}\\n\\n// 成功結果を処理\\n___({ ___: ___, ___: ___ });",
      "correctLines": [
          "// 成功時の型",
          "type Success = { status: '成功'; data: string };",
          "// 失敗時の型",
          "type Failure = { status: '失敗'; error: string };",
          "// 結果のユニオン型",
          "type Result = Success | Failure;",
          "",
          "// handle関数（結果を処理）を定義",
          "function handle(result: Result): void {",
          "  // statusで成功/失敗を判別",
          "  switch (result.status) {",
          "    case '成功':",
          "      // consoleのlogメソッドでresult.dataを表示",
          "      console.log(result.data);",
          "      break;",
          "    case '失敗':",
          "      // consoleのlogメソッドでresult.errorを表示",
          "      console.log(result.error);",
          "      break;",
          "  }",
          "}",
          "",
          "// 成功結果を処理",
          "handle({ status: '成功', data: 'OK' });"
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
          "",
          null,
          "",
          "",
          "",
          null,
          "",
          "",
          null,
          null,
          null,
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "type",
            "function",
            "switch",
            "case",
            "break"
          ],
          "others": ["Success", "status", "'成功'", "data", "string", "Failure", "'失敗'", "error", "Result", "|", "handle", "result", "void", "console", "log", "'OK'", "}", "// status で判別プロパティを使う", "成功':", "sole.log(result.data);", "se '失敗':", "console.log(result.error)", "({ status: '成功', data: 'OK' })"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "OK\\n"
          }
        ]
      },
    {
      "title": "never型で網羅性チェック",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "never型とは？",
          "content": "# 到達不能な型\\n\\n**never型**は「絶対にここには来ない」という意味の特別な型です。値を持たない型なので、何も代入できません。\\n\\n## たとえ話\\n\\n「ありえない」を型で表現したものです。例えば、全ての可能性を処理した後の「残り」は「ありえない」ですよね。\\n\\n## いつ使うの？\\n\\nswitch文で「全てのケースを処理したか」をチェックするのに使います。もし処理し忘れたケースがあると、TypeScriptがエラーで教えてくれます！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction exhaustiveCheck(x: never): never {\\n  throw new Error('Unexpected value');\\n}\\n// 「ここには絶対来ないはず」という関数\\n```"
        },
        {
          "title": "網羅性チェック",
          "content": "# 処理し忘れを防ぐ\\n\\nswitch文のdefaultでnever型を使うと、全ケースを処理したかチェックできます。\\n\\n## たとえ話\\n\\n「赤・青・緑」の3色を処理するとき、もし「青」を忘れていたらエラーで教えてくれます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Color = 'red' | 'blue';\\n\\nfunction handle(c: Color) {\\n  switch (c) {\\n    case 'red': return '#ff0000';\\n    case 'blue': return '#0000ff';\\n    default:\\n      // 全ケース処理済みなら、ここには来ない\\n      const _check: never = c;\\n      return _check;\\n  }\\n}\\n```\\n\\n新しい色を追加したとき、処理を忘れるとエラーになります！"
        }
      ],
      "correctCode": "// 色のユニオン型\\ntype Color = 'あか' | 'みどり' | 'あお';\\n\\n// getHex関数（色をカラーコードに変換）を定義\\nfunction getHex(color: Color): string {\\n  // 色ごとにカラーコードを返す\\n  switch (color) {\\n    case 'あか': return '#ff0000';\\n    case 'みどり': return '#00ff00';\\n    case 'あお': return '#0000ff';\\n    default:\\n      // 全ケース処理済みなら到達しない\\n      const _exhaustive: never = color;\\n      return _exhaustive;\\n  }\\n}\\n\\n// consoleのlogメソッドでgetHex('あか')の結果を表示\\nconsole.log(getHex('あか'));",
      "holeyCode": "// 色のユニオン型\\ntype ___ = ___ | ___ ___ ___;\\n\\n// getHex関数（色をカラーコードに変換）を定義\\n___ ___(___: ___): ___ {\\n  // 色ごとにカラーコードを返す\\n  switch (___) {\\n    case ___: return ___;\\n    case ___: return ___;\\n    case ___: return ___;\\n    ___:\\n      // 全ケース処理済みなら到達しない\\n      const ___: ___ = ___;\\n      return ___;\\n  }\\n}\\n\\n// consoleのlogメソッドでgetHex('あか')の結果を表示\\n___.___(___(___))",
      "correctLines": [
          "// 色のユニオン型",
          "type Color = 'あか' | 'みどり' | 'あお';",
          "",
          "// getHex関数（色をカラーコードに変換）を定義",
          "function getHex(color: Color): string {",
          "  // 色ごとにカラーコードを返す",
          "  switch (color) {",
          "    case 'あか': return '#ff0000';",
          "    case 'みどり': return '#00ff00';",
          "    case 'あお': return '#0000ff';",
          "    default:",
          "      // 全ケース処理済みなら到達しない",
          "      const _exhaustive: never = color;",
          "      return _exhaustive;",
          "  }",
          "}",
          "",
          "// consoleのlogメソッドでgetHex('あか')の結果を表示",
          "console.log(getHex('あか'));"
        ],
      "lineHints": [
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          "",
          "",
          "",
          "",
          null,
          "",
          "",
          null,
          null,
          null,
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "type",
            "function",
            "switch",
            "case",
            "const",
            "return",
            "default"
          ],
          "others": ["Color", "'あか'", "'みどり'", "'あお'", "|", "getHex", "color", "string", "'#ff0000'", "'#00ff00'", "'#0000ff'", "_exhaustive", "never", "}", "console", "log", "color) {", "あか': return '#ff0000';", "lt", "const _exhaustive", "_exhaustive;", "あかのカラーコードを出力"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "#ff0000\\n"
          }
        ]
      },
    {
      "title": "テンプレートリテラル型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "テンプレートリテラル型とは？",
          "content": "# 文字列型を組み合わせる\\n\\n**テンプレートリテラル型**は、文字列リテラル型を組み合わせて、新しい文字列パターンを作る機能です。\\n\\n## たとえ話\\n\\n「サイズ」と「色」を組み合わせて「小-赤」「大-青」などのパターンを自動で作れます。全部手で書かなくてOK！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Color = 'red' | 'blue';\\ntype Size = 'small' | 'large';\\ntype Style = `${Size}-${Color}`;\\n// 自動で4パターンができる！\\n// 'small-red' | 'small-blue' | 'large-red' | 'large-blue'\\n```"
        },
        {
          "title": "テンプレートリテラル型の書き方",
          "content": "# 書き方のポイント\\n\\nバッククォート（`）で囲んで、`${型名}` で他の型を埋め込みます。\\n\\n## 便利な使い方\\n\\nAPIのルートや、CSSのクラス名など、決まったパターンの文字列を型で表現できます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Method = 'get' | 'post';\\ntype Path = '/users' | '/posts';\\n\\n// メソッドとパスの組み合わせ\\ntype Route = `${Method} ${Path}`;\\n// 'get /users' | 'get /posts' | 'post /users' | 'post /posts'\\n\\nconst route: Route = 'get /users';  // OK!\\nconst bad: Route = 'delete /users'; // エラー！\\n```"
        }
      ],
      "correctCode": "// HTTPメソッドのユニオン型\\ntype Method = 'get' | '投稿';\\n// エンドポイントのユニオン型\\ntype Endpoint = '/users' | '/posts';\\n// ` でテンプレートリテラル型を定義\\ntype Route = `${Method} ${Endpoint}`;\\n\\n// ルートを定義\\nconst route: Route = 'get /users';\\n// consoleのlogメソッドでrouteを表示\\nconsole.log(route);",
      "holeyCode": "// HTTPメソッドのユニオン型\\ntype ___ = ___ ___ ___;\\n// エンドポイントのユニオン型\\ntype ___ = ___ ___ ___;\\n// ` でテンプレートリテラル型を定義\\ntype ___ = ___${___} ${___}___;\\n\n// ルートを定義\\nconst ___: ___ = ___;\\n// consoleのlogメソッドでrouteを表示\\n___.___(___);", "correctLines": [
          "// HTTPメソッドのユニオン型",
          "type Method = 'get' | '投稿';",
          "// エンドポイントのユニオン型",
          "type Endpoint = '/users' | '/posts';",
          "// ` でテンプレートリテラル型を定義",
          "type Route = `${Method} ${Endpoint}`;",
          "",
          "// ルートを定義",
          "const route: Route = 'get /users';",
          "// consoleのlogメソッドでrouteを表示",
          "console.log(route);"
        ],
      "lineHints": [
          null,
          "Method型を'get'|'投稿'のユニオン型で定義します。",
          null,
          "Endpoint型を'/users'|'/posts'のユニオン型で定義します。",
          null,
          "Route型をテンプレートリテラル型で定義します。",
          null,
          null,
          "route変数にRoute型で'get /users'を代入します。",
          null,
          "console.logでrouteの値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "const"
          ],
          "others": ["Method", "'get'", "|", "'投稿'", "Endpoint", "'/users'", "'/posts'", "Route", "`", "Method", "Endpoint", "route", "'get /users'", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "get /users\\n"
          }
        ]
      },
    {
      "title": "Exclude型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "Exclude<T, U>とは？",
          "content": "# ユニオン型から除外する\\n\\n**Exclude**（エクスクルード）は、ユニオン型から特定の型を「除外」します。\\n\\n## たとえ話\\n\\n「りんご・みかん・バナナ」の中から「バナナ」を除外すると「りんご・みかん」になりますよね。Excludeはまさにそれ！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype T = 'a' | 'b' | 'c';\\ntype Without_A = Exclude<T, 'a'>;\\n// 'b' | 'c'\\n// 'a' が除外された！\\n```"
        },
        {
          "title": "Excludeの使い方",
          "content": "# 特定の状態を除外\\n\\n「使いたくない状態」を除外した新しい型を作れます。\\n\\n## たとえ話\\n\\nすべてのステータスの中から「キャンセル済み」だけを除外して、「アクティブなステータス」だけを使いたいときに便利です。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Status = 'pending' | 'success' | 'error' | 'cancelled';\\n\\n// cancelledを除外\\ntype ActiveStatus = Exclude<Status, 'cancelled'>;\\n// 'pending' | 'success' | 'error'\\n```"
        }
      ],
      "correctCode": "// ステータスのユニオン型\\ntype Status = '保留中' | '成功' | 'エラー' | 'キャンセル済み';\\n// Exclude でユニオン型から特定の型を除外\\ntype ActiveStatus = Exclude<Status, 'キャンセル済み'>;\\n\\n// アクティブなステータスを代入\\nconst status: ActiveStatus = '保留中';\\n// consoleのlogメソッドでstatusを表示\\nconsole.log(status);",
      "holeyCode": "// ステータスのユニオン型\\ntype ___ = ___ | ___ | ___ ___ ___;\\n// Exclude でユニオン型から特定の型を除外\\ntype ___ = ___<___, ___>;\\n\n// アクティブなステータスを代入\\nconst ___: ___ = ___;\\n// consoleのlogメソッドでstatusを表示\\n___.___(___);", "correctLines": [
          "// ステータスのユニオン型",
          "type Status = '保留中' | '成功' | 'エラー' | 'キャンセル済み';",
          "// Exclude でユニオン型から特定の型を除外",
          "type ActiveStatus = Exclude<Status, 'キャンセル済み'>;",
          "",
          "// アクティブなステータスを代入",
          "const status: ActiveStatus = '保留中';",
          "// consoleのlogメソッドでstatusを表示",
          "console.log(status);"
        ],
      "lineHints": [
          null,
          "Status型を4つのステータスのユニオン型で定義します。",
          null,
          "ActiveStatus型をExcludeでStatusから'キャンセル済み'を除外して定義します。",
          null,
          null,
          "status変数にActiveStatus型で'保留中'を代入します。",
          null,
          "console.logでstatusの値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "const"
          ],
          "others": ["Status", "'保留中'", "|", "'成功'", "'エラー'", "'キャンセル済み'", "ActiveStatus", "Exclude", "status", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "保留中\\n"
          }
        ]
      },
    {
      "title": "Extract型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "Extract<T, U>とは？",
          "content": "# ユニオン型から抽出する\\n\\n**Extract**（エクストラクト）は、Excludeの逆で、ユニオン型から「欲しい型だけ」を抽出します。\\n\\n## たとえ話\\n\\n「りんご・みかん・バナナ」の中から「りんご・みかん」だけを選び出すようなものです。「これだけ欲しい！」というときに使います。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype T = 'a' | 'b' | 'c';\\ntype Only_AB = Extract<T, 'a' | 'b'>;\\n// 'a' | 'b'\\n// 'a' と 'b' だけ抽出された！\\n```"
        },
        {
          "title": "Extractの使い方",
          "content": "# 特定の種類だけを抽出\\n\\n「使いたい型だけ」を選び出せます。\\n\\n## たとえ話\\n\\nすべてのイベントの中から「マウス関連のイベント」だけを選びたいときに便利です。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Event = 'click' | 'scroll' | 'keydown';\\n\\n// マウス関連だけを抽出\\ntype MouseEvent = Extract<Event, 'click' | 'scroll'>;\\n// 'click' | 'scroll'\\n```\\n\\nExcludeが「除外」、Extractが「抽出」と覚えましょう！"
        }
      ],
      "correctCode": "// イベントのユニオン型\\ntype Event = 'クリック' | 'スクロール' | 'マウスオーバー' | 'キーdown';\\n// Extract でユニオン型から特定の型を抽出\\ntype MouseEvent = Extract<Event, 'クリック' | 'スクロール' | 'マウスオーバー'>;\\n\\n// マウスイベントを代入\\nconst event: MouseEvent = 'クリック';\\n// consoleのlogメソッドでeventを表示\\nconsole.log(event);",
      "holeyCode": "// イベントのユニオン型\\ntype ___ = ___ | ___ | ___ ___ ___;\\n// Extract でユニオン型から特定の型を抽出\\ntype ___ = ___<___, ___ | ___ | ___>;\\n\n// マウスイベントを代入\\nconst ___: ___ = ___;\\n// consoleのlogメソッドでeventを表示\\n___.___(___);", "correctLines": [
          "// イベントのユニオン型",
          "type Event = 'クリック' | 'スクロール' | 'マウスオーバー' | 'キーdown';",
          "// Extract でユニオン型から特定の型を抽出",
          "type MouseEvent = Extract<Event, 'クリック' | 'スクロール' | 'マウスオーバー'>;",
          "",
          "// マウスイベントを代入",
          "const event: MouseEvent = 'クリック';",
          "// consoleのlogメソッドでeventを表示",
          "console.log(event);"
        ],
      "lineHints": [
          null,
          "Event型を4つのイベントのユニオン型で定義します。",
          null,
          "MouseEvent型をExtractでEventから3つのマウスイベントを抽出して定義します。",
          null,
          null,
          "event変数にMouseEvent型で'クリック'を代入します。",
          null,
          "console.logでeventの値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "const"
          ],
          "others": ["Event", "'クリック'", "|", "'スクロール'", "'マウスオーバー'", "'キーdown'", "MouseEvent", "Extract", "event", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "クリック\\n"
          }
        ]
      },
    {
      "title": "NonNullable型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "NonNullable<T>とは？",
          "content": "# null/undefinedを除外\\n\\n**NonNullable**（ノンナラブル）は、型から `null` と `undefined` を除外します。「確実に値がある」ことを保証したいときに使います。\\n\\n## たとえ話\\n\\n「空っぽかもしれない」状態から「必ず中身がある」状態に変えるようなものです。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype T = string | null | undefined;\\ntype NonNull = NonNullable<T>;\\n// string\\n// null と undefined が消えた！\\n```"
        },
        {
          "title": "NonNullableの使い方",
          "content": "# 安全に値を使う\\n\\nnullやundefinedの可能性を排除して、安全に値を使えるようにします。\\n\\n## たとえ話\\n\\nデータを取得したとき「まだない」場合はnullかもしれません。でも「確実にある」場面ではNonNullableで保証できます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype MaybeString = string | null | undefined;\\n\\n// null/undefinedを除外\\ntype DefiniteString = NonNullable<MaybeString>;\\n// string\\n\\nconst text: DefiniteString = 'Hello';\\n// null や undefined は代入できない！\\n```"
        }
      ],
      "correctCode": "// nullまたはundefinedを含む型\\ntype MaybeString = string | null | undefined;\\n// NonNullable でnull/undefinedを除外\\ntype DefiniteString = NonNullable<MaybeString>;\\n\\n// 確定した文字列を代入\\nconst text: DefiniteString = 'こんにちは';\\n// consoleのlogメソッドでtextを表示\\nconsole.log(text);",
      "holeyCode": "// nullまたはundefinedを含む型\\ntype ___ = ___ | ___ ___ ___;\\n// NonNullable でnull/undefinedを除外\\ntype ___ = ___<___>;\\n\n// 確定した文字列を代入\\nconst ___: ___ = ___;\\n// consoleのlogメソッドでtextを表示\\n___.___(___);", "correctLines": [
          "// nullまたはundefinedを含む型",
          "type MaybeString = string | null | undefined;",
          "// NonNullable でnull/undefinedを除外",
          "type DefiniteString = NonNullable<MaybeString>;",
          "",
          "// 確定した文字列を代入",
          "const text: DefiniteString = 'こんにちは';",
          "// consoleのlogメソッドでtextを表示",
          "console.log(text);"
        ],
      "lineHints": [
          null,
          "MaybeString型をstring|null|undefinedのユニオン型で定義します。",
          null,
          "DefiniteString型をNonNullableでMaybeStringからnull/undefinedを除外して定義します。",
          null,
          null,
          "text変数にDefiniteString型で'こんにちは'を代入します。",
          null,
          "console.logでtextの値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "const"
          ],
          "others": ["MaybeString", "string", "|", "null", "undefined", "DefiniteString", "NonNullable", "text", "'こんにちは'", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "Parameters型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "Parameters<T>とは？",
          "content": "# 関数の引数型を取得\\n\\n**Parameters**（パラメーターズ）は、関数が「何を受け取るか」の型を取得します。引数の型がタプル（順番付きの配列）として返ってきます。\\n\\n## たとえ話\\n\\n料理のレシピを見て「材料リスト」を知るようなものです。関数がどんな材料（引数）を必要としているかがわかります。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Fn = (a: string, b: number) => void;\\ntype Params = Parameters<Fn>;\\n// [string, number]\\n// 「1番目はstring、2番目はnumber」\\n```"
        },
        {
          "title": "Parametersの使い方",
          "content": "# 引数を再利用する\\n\\n既存の関数と同じ引数を使いたいときに便利です。\\n\\n## たとえ話\\n\\n「この関数と同じ材料で、別の料理を作る」ような感じです。引数の型を一から書かなくて済みます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction greet(name: string, age: number): void {\\n  console.log(`${name} is ${age}`);\\n}\\n\\n// 関数の引数の型を取得\\ntype GreetParams = Parameters<typeof greet>;\\n// [string, number]\\n\\n// 同じ型の引数を使える！\\nconst args: GreetParams = ['Taro', 25];\\ngreet(...args);  // 'Taro is 25'\\n```"
        }
      ],
      "correctCode": "// greet関数（名前と年齢を表示）を定義\\nfunction greet(name: string, age: number): void {\\n  // consoleのlogメソッドでテンプレート文字列を表示\\n  console.log(`${name} is ${age}`);\\n}\\n\\n// Parametersで関数の引数型を取得\\ntype GreetParams = Parameters<typeof greet>;\\n// 引数の配列（'たろう', 25）をargsに代入\\nconst args: GreetParams = ['たろう', 25];\\n// greet関数をargsを展開して呼び出す\\ngreet(...args);",
      "holeyCode": "// greet関数（名前と年齢を表示）を定義\\n___ ___(___: ___, ___: ___): ___ {\\n  // consoleのlogメソッドでテンプレート文字列を表示\\n  ___.___(___${___} is ${___}___);\\n}\\n\\n// Parametersで関数の引数型を取得\\ntype ___ = ___<typeof ___>;\\n// 引数の配列（'たろう', 25）をargsに代入\\nconst ___: ___ = [___, ___];\\n// greet関数をargsを展開して呼び出す\\n___(___);",
      "correctLines": [
          "// greet関数（名前と年齢を表示）を定義",
          "function greet(name: string, age: number): void {",
          "  // consoleのlogメソッドでテンプレート文字列を表示",
          "  console.log(`${name} is ${age}`);",
          "}",
          "",
          "// Parametersで関数の引数型を取得",
          "type GreetParams = Parameters<typeof greet>;",
          "// 引数の配列（'たろう', 25）をargsに代入",
          "const args: GreetParams = ['たろう', 25];",
          "// greet関数をargsを展開して呼び出す",
          "greet(...args);"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          null,
          null,
          "",
          null,
          "",
          null,
          ""
        ],
        "candidates": {
          "keywords": [
            "function",
            "type",
            "const",
            "typeof"
          ],
          "others": ["greet", "name", "string", "age", "number", "void", "console", "log", "`", "}", "GreetParams", "Parameters", "args", "'たろう'", "25", "...args", "// テンプレート文字列で出力", "type GreetParams = Parameters<typeof greet>;", "gs: GreetParams = ['たろう', 25];", "...args);"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう is 25\\n"
          }
        ]
      },
    {
      "title": "Awaited型",
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "Awaited<T>とは？",
          "content": "# Promiseの中身の型を取得\\n\\n**Awaited**（アウェイテッド）は、Promise（「後で届く約束」のようなもの）が解決したときの型を取得します。\\n\\n## たとえ話\\n\\n「配達中の荷物」を想像してみてください。荷物が届く前から「中身は本です」とわかっていれば準備できますよね。AwaitedはPromiseの「中身の型」を教えてくれます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype P = Promise<string>;  // 「後でstringが届く」約束\\ntype T = Awaited<P>;\\n// string\\n// Promiseの中身はstringだとわかった！\\n```"
        },
        {
          "title": "Awaitedの使い方",
          "content": "# 非同期処理の結果の型\\n\\nWebからデータを取得するなど、非同期処理の結果の型を知りたいときに使います。\\n\\n## たとえ話\\n\\n「この注文をすると、何が届く？」という質問に答えるようなものです。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype AsyncResult = Promise<{ data: string }>;\\n\\n// Promiseが解決したら何になる？\\ntype Result = Awaited<AsyncResult>;\\n// { data: string }\\n\\n// 同じ型の変数を作れる\\nconst result: Result = { data: 'success' };\\n```\\n\\nasync/awaitで取得する値の型がわかって便利です！"
        }
      ],
      "correctCode": "// AsyncResult型を定義\\ntype AsyncResult = Promise<{ data: string }>;\\n// Awaited でPromiseの解決型を取得\\ntype Result = Awaited<AsyncResult>;\\n\\n// Resultオブジェクト（data:成功）をresultに代入\\nconst result: Result = { data: '成功' };\\n// consoleのlogメソッドでresult.dataを表示\\nconsole.log(result.data);",
      "holeyCode": "// AsyncResult型を定義\\ntype ___ = ___<{ ___: ___ }>;\\n// Awaited でPromiseの解決型を取得\\ntype ___ = ___<___>;\\n___\\n// Resultオブジェクト（data:成功）をresultに代入\\nconst ___: ___ = { ___: ___ };\\n// consoleのlogメソッドでresult.dataを表示\\n___.___(___.___)\\n",
      "correctLines": [
          "// AsyncResult型を定義",
          "type AsyncResult = Promise<{ data: string }>;",
          "// Awaited でPromiseの解決型を取得",
          "type Result = Awaited<AsyncResult>;",
          "",
          "// Resultオブジェクト（data:成功）をresultに代入",
          "const result: Result = { data: '成功' };",
          "// consoleのlogメソッドでresult.dataを表示",
          "console.log(result.data);"
        ],
      "lineHints": [
          null,
          "AsyncResult型をPromise<{data:string}>で定義します。",
          null,
          "Result型をAwaitedでAsyncResultの解決型を取得して定義します。",
          null,
          null,
          "result変数にResult型で{data:'成功'}を代入します。",
          null,
          "console.logでresult.dataを出力します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "const"
          ],
          "others": ["AsyncResult", "Promise", "data", "string", "Result", "Awaited", "result", "'成功'", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "成功\\n"
          }
        ]
      }
  ]
};
