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
      "correctCode": "// isNumber型ガード関数を定義\\nfunction isNumber(x: unknown): x is number {\\n  // typeofで型をチェック\\n  return typeof x === '数値';\\n}\\n\\n// unknown型の値\\nconst value: unknown = 42;\\n// 型ガードでチェック\\nif (isNumber(value)) {\\n  // 数値として計算\\n  console.log(value * 2);\\n}",
      "holeyCode": "// isNumber型ガード関数を定義\\nfunction isNumber(x: unknown): x ___ number {\\n  // typeofで型をチェック\\n  return typeof x === ___;\\n___\\n___\\n// unknown型の値\\nconst value: unknown = ___;\\n// 型ガードでチェック\\nif (isNumber(___)) {\\n  // 数値として計算\\n  console.log(value * ___);\\n___",
      "correctLines": [
          "// isNumber型ガード関数を定義",
          "function isNumber(x: unknown): x is number {",
          "  // typeofで型をチェック",
          "  return typeof x === '数値';",
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
          "この行を正しく入力してください。",
          null,
          null,
          "掛け算の倍数を数値で指定します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "is",
            "as",
            "in"
          ],
          "others": ["'数値'", "42", "value", "2", "}"]
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
      "correctCode": "// 車の型\\ntype Car = { 運転: () => void };\\n// 船の型\\ntype Boat = { sail: () => void };\\n\\nfunction operate(vehicle: Car | Boat): void {\\n  // in でプロパティの存在をチェック\\n  if ('運転' in vehicle) {\\n    // 車の操作\\n    console.log('運転中');\\n  } else {\\n    // 船の操作\\n    console.log('航海中');\\n  }\\n}\\n\\n// 車を操作\\noperate({ 運転: () => {} });",
      "holeyCode": "// 車の型\\ntype Car = { 運転: () => ___ };\\n// 船の型\\ntype Boat = { sail: () => ___ };\\n___\\n___\\n  // in でプロパティの存在をチェック\\n  if ('運転' ___ vehicle) {\\n    // 車の操作\\n    console.log(___);\\n  ___\\n    // 船の操作\\n    console.log(___);\\n  ___\\n___\\n___\\n// 車を操作\\n___",
      "correctLines": [
          "// 車の型",
          "type Car = { 運転: () => void };",
          "// 船の型",
          "type Boat = { sail: () => void };",
          "",
          "function operate(vehicle: Car | Boat): void {",
          "  // in でプロパティの存在をチェック",
          "  if ('運転' in vehicle) {",
          "    // 車の操作",
          "    console.log('運転中');",
          "  } else {",
          "    // 船の操作",
          "    console.log('航海中');",
          "  }",
          "}",
          "",
          "// 車を操作",
          "operate({ 運転: () => {} });"
        ],
      "lineHints": [
          null,
          "戻り値がないことを示す型です。",
          null,
          "戻り値がないことを示す型です。",
          null,
          "この行を正しく入力してください。",
          null,
          "コンソールに文字列を出力します。",
          null,
          "console.log で結果を表示します。",
          "この行を正しく入力してください。",
          null,
          "console.log で結果を表示します。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "この行を正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "of",
            "has"
          ],
          "others": ["void", "'運転中'", "'航海中'", "'運転'", "function operate(vehicle: Car | Boat): void {", "} else {", "operate({ 運転: () => {} });", "}"]
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
      "correctCode": "// 成功時の型\\ntype Success = { status: '成功'; data: string };\\n// 失敗時の型\\ntype Failure = { status: '失敗'; error: string };\\n// 結果のユニオン型\\ntype Result = Success | Failure;\\n\\nfunction handle(result: Result): void {\\n  // status で判別プロパティを使う\\n  switch (result.status) {\\n    case '成功':\\n      // データを出力\\n      console.log(result.data);\\n      break;\\n    case '失敗':\\n      // エラーを出力\\n      console.log(result.error);\\n      break;\\n  }\\n}\\n\\n// 成功結果を処理\\nhandle({ status: '成功', データ: 'OK' });",
      "holeyCode": "// 成功時の型\\ntype Success = { status: '成功'; data: ___ };\\n// 失敗時の型\\ntype Failure = { status: '失敗'; error: ___ };\\n// 結果のユニオン型\\ntype Result = Success ___ Failure;\\n___\\n___\\n  // status で判別プロパティを使う\\n  switch (result.___) {\\n    ___\\n      // データを出力\\n      console.log(result.___);\\n      ___\\n    ___\\n      // エラーを出力\\n      console.log(result.___);\\n      ___\\n  ___\\n___\\n___\\n// 成功結果を処理\\nhandle({ status: '成功', data: ___ });",
      "correctLines": [
          "// 成功時の型",
          "type Success = { status: '成功'; data: string };",
          "// 失敗時の型",
          "type Failure = { status: '失敗'; error: string };",
          "// 結果のユニオン型",
          "type Result = Success | Failure;",
          "",
          "function handle(result: Result): void {",
          "  // status で判別プロパティを使う",
          "  switch (result.status) {",
          "    case '成功':",
          "      // データを出力",
          "      console.log(result.data);",
          "      break;",
          "    case '失敗':",
          "      // エラーを出力",
          "      console.log(result.error);",
          "      break;",
          "  }",
          "}",
          "",
          "// 成功結果を処理",
          "handle({ status: '成功', データ: 'OK' });"
        ],
      "lineHints": [
          null,
          "データは文字列なので `string` です。",
          null,
          "エラーは文字列なので `string` です。",
          null,
          "ユニオン型を作る演算子です。",
          null,
          "この行を正しく入力してください。",
          null,
          "失敗時に取得するプロパティ名を指定します。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "status",
            "type",
            "kind"
          ],
          "others": ["string", "|", "data", "error", "'OK'", "OK'", "function handle(result: Result): void {", "case '成功':", "break;", "case '失敗':", "}"]
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
      "correctCode": "// 色のユニオン型\\ntype Color = '赤' | '緑' | '青';\\n\\nfunction getHex(color: Color): string {\\n  switch (color) {\\n    // 赤のカラーコード\\n    case '赤': return '#ff0000';\\n    // 緑のカラーコード\\n    case '緑': return '#00ff00';\\n    // 青のカラーコード\\n    case '青': return '#0000ff';\\n    // 全ケース処理済みの場合\\n    default:\\n      // never で到達不能な型を表す\\n      const _exhaustive: never = color;\\n      // exhaustive変数を返す\\n      return _exhaustive;\\n  }\\n}\\n\\n// 赤のカラーコードを出力\\nconsole.log(getHex('赤'));",
      "holeyCode": "// 色のユニオン型\\ntype Color = '赤' | '緑' ___ '青';\\n___\\n___\\n  ___\\n    // 赤のカラーコード\\n    case '赤': return ___;\\n    // 緑のカラーコード\\n    case '緑': return ___;\\n    // 青のカラーコード\\n    case '青': return ___;\\n    // 全ケース処理済みの場合\\n    ___:\\n      // never で到達不能な型を表す\\n      const _exhaustive: ___ = color;\\n      // exhaustive変数を返す\\n      return ___;\\n  ___\\n___\\n___\\n// 赤のカラーコードを出力\\nconsole.log(getHex(___));",
      "correctLines": [
          "// 色のユニオン型",
          "type Color = '赤' | '緑' | '青';",
          "",
          "function getHex(color: Color): string {",
          "  switch (color) {",
          "    // 赤のカラーコード",
          "    case '赤': return '#ff0000';",
          "    // 緑のカラーコード",
          "    case '緑': return '#00ff00';",
          "    // 青のカラーコード",
          "    case '青': return '#0000ff';",
          "    // 全ケース処理済みの場合",
          "    default:",
          "      // never で到達不能な型を表す",
          "      const _exhaustive: never = color;",
          "      // exhaustive変数を返す",
          "      return _exhaustive;",
          "  }",
          "}",
          "",
          "// 赤のカラーコードを出力",
          "console.log(getHex('赤'));"
        ],
      "lineHints": [
          null,
          "ユニオン型に色を追加する演算子です。",
          null,
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "全ケースを処理した後は到達しないことを示す型です。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の値を呼び出し元に返します（戻り値）。",
          "この行を正しく入力してください。",
          "この行を正しく入力してください。",
          null,
          null,
          "カラーコードを取得したい色を指定します。"
        ],
        "candidates": {
          "keywords": [
            "never",
            "void",
            "unknown"
          ],
          "others": ["|", "'#ff0000'", "'#00ff00'", "'#0000ff'", "_exhaustive", "'赤'", "default", "function getHex(color: Color): string {", "switch (color) {", "}"]
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
      "correctCode": "// HTTPメソッドのユニオン型\\ntype Method = 'get' | '投稿';\\n// エンドポイントのユニオン型\\ntype Endpoint = '/users' | '/posts';\\n// ` でテンプレートリテラル型を定義\\ntype Route = `${Method} ${Endpoint}`;\\n\\n// ルートを定義\\nconst route: Route = 'get /users';\\n// 出力\\nconsole.log(route);",
      "holeyCode": "// HTTPメソッドのユニオン型\\ntype Method = 'get' ___ '投稿';\\n// エンドポイントのユニオン型\\ntype Endpoint = '/users' ___ '/posts';\\n// ` でテンプレートリテラル型を定義\\ntype Route = ___${Method} ${Endpoint}`;\\n___\\n// ルートを定義\\nconst route: Route = ___;\\n// 出力\\nconsole.log(___);",
      "correctLines": [
          "// HTTPメソッドのユニオン型",
          "type Method = 'get' | '投稿';",
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
          null,
          null,
          "出力する変数を指定します。",
          null,
          "変数routeの値をコンソールに出力します。"
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
            "expected_output": "get /users\\n"
          }
        ]
      },
    {
      "title": "Exclude型",
      "correctCode": "// ステータスのユニオン型\\ntype Status = '保留中' | '成功' | 'エラー' | 'キャンセル済み';\\n// Exclude でユニオン型から特定の型を除外\\ntype ActiveStatus = Exclude<Status, 'キャンセル済み'>;\\n\\n// アクティブなステータスを代入\\nconst status: ActiveStatus = '保留中';\\n// 出力\\nconsole.log(status);",
      "holeyCode": "// ステータスのユニオン型\\ntype Status = '保留中' | '成功' | 'エラー' ___ 'キャンセル済み';\\n// Exclude でユニオン型から特定の型を除外\\ntype ActiveStatus = ___<Status, 'キャンセル済み'>;\\n___\\n// アクティブなステータスを代入\\nconst status: ActiveStatus = ___;\\n// 出力\\nconsole.log(___);",
      "correctLines": [
          "// ステータスのユニオン型",
          "type Status = '保留中' | '成功' | 'エラー' | 'キャンセル済み';",
          "// Exclude でユニオン型から特定の型を除外",
          "type ActiveStatus = Exclude<Status, 'キャンセル済み'>;",
          "",
          "// アクティブなステータスを代入",
          "const status: ActiveStatus = '保留中';",
          "// 出力",
          "console.log(status);"
        ],
      "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "型を除外するユーティリティ型です。",
          null,
          null,
          "出力する変数を指定します。",
          null,
          "変数statusの値をコンソールに出力します。"
        ],
        "candidates": {
          "keywords": [
            "Exclude",
            "Omit",
            "Extract"
          ],
          "others": ["|", "'保留中'", "status", "'保留中'"]
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
      "correctCode": "// イベントのユニオン型\\ntype Event = 'クリック' | 'スクロール' | 'マウスオーバー' | 'キーdown';\\n// Extract でユニオン型から特定の型を抽出\\ntype MouseEvent = Extract<Event, 'クリック' | 'スクロール' | 'マウスオーバー'>;\\n\\n// マウスイベントを代入\\nconst event: MouseEvent = 'クリック';\\n// 出力\\nconsole.log(event);",
      "holeyCode": "// イベントのユニオン型\\ntype Event = 'クリック' | 'スクロール' | 'マウスオーバー' ___ 'キーdown';\\n// Extract でユニオン型から特定の型を抽出\\ntype MouseEvent = ___<Event, 'クリック' | 'スクロール' | 'マウスオーバー'>;\\n___\\n// マウスイベントを代入\\nconst event: MouseEvent = ___;\\n// 出力\\nconsole.log(___);",
      "correctLines": [
          "// イベントのユニオン型",
          "type Event = 'クリック' | 'スクロール' | 'マウスオーバー' | 'キーdown';",
          "// Extract でユニオン型から特定の型を抽出",
          "type MouseEvent = Extract<Event, 'クリック' | 'スクロール' | 'マウスオーバー'>;",
          "",
          "// マウスイベントを代入",
          "const event: MouseEvent = 'クリック';",
          "// 出力",
          "console.log(event);"
        ],
      "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "型を抽出するユーティリティ型です。",
          null,
          null,
          "出力する変数を指定します。",
          null,
          "変数eventの値をコンソールに出力します。"
        ],
        "candidates": {
          "keywords": [
            "Extract",
            "Exclude",
            "Pick"
          ],
          "others": ["|", "'クリック'", "event", "'クリック'"]
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
      "correctCode": "// nullまたはundefinedを含む型\\ntype MaybeString = string | null | undefined;\\n// NonNullable でnull/undefinedを除外\\ntype DefiniteString = NonNullable<MaybeString>;\\n\\n// 確定した文字列を代入\\nconst text: DefiniteString = 'こんにちは';\\n// 出力\\nconsole.log(text);",
      "holeyCode": "// nullまたはundefinedを含む型\\ntype MaybeString = string | null ___ undefined;\\n// NonNullable でnull/undefinedを除外\\ntype DefiniteString = ___<MaybeString>;\\n___\\n// 確定した文字列を代入\\nconst text: DefiniteString = ___;\\n// 出力\\nconsole.log(___);",
      "correctLines": [
          "// nullまたはundefinedを含む型",
          "type MaybeString = string | null | undefined;",
          "// NonNullable でnull/undefinedを除外",
          "type DefiniteString = NonNullable<MaybeString>;",
          "",
          "// 確定した文字列を代入",
          "const text: DefiniteString = 'こんにちは';",
          "// 出力",
          "console.log(text);"
        ],
      "lineHints": [
          null,
          "ユニオン型を作る演算子です。",
          null,
          "null/undefinedを除外するユーティリティ型です。",
          null,
          null,
          "出力する変数を指定します。",
          null,
          "変数textの値をコンソールに出力します。"
        ],
        "candidates": {
          "keywords": [
            "NonNullable",
            "Required",
            "Exclude"
          ],
          "others": ["|", "'Hello'", "text", "'こんにちは'"]
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
      "correctCode": "function greet(name: string, age: number): void {\\n  // テンプレート文字列で出力\\n  console.log(`${name} is ${age}`);\\n}\\n// Parameters で関数の引数型を取得\\ntype GreetParams = Parameters<typeof greet>;\\n// argsに['太郎', 25]を代入\\nconst args: GreetParams = ['太郎', 25];\\n// 引数の配列 args を渡して呼び出し\\ngreet(...args);",
      "holeyCode": "function greet(___, age: number): void {\\n  // テンプレート文字列で出力\\n  console.log(`${name} is ${___}`);\\n___\\n// Parameters で関数の引数型を取得\\ntype GreetParams = ___<typeof greet>;\\n// argsに['太郎', 25]を代入\\nconst args: GreetParams = ['太郎', ___];\\n// 引数の配列 args を渡して呼び出し\\ngreet(...___);",
      "correctLines": [
          "function greet(name: string, age: number): void {",
          "  // テンプレート文字列で出力",
          "  console.log(`${name} is ${age}`);",
          "}",
          "// Parameters で関数の引数型を取得",
          "type GreetParams = Parameters<typeof greet>;",
          "// argsに['太郎', 25]を代入",
          "const args: GreetParams = ['太郎', 25];",
          "// 引数の配列 args を渡して呼び出し",
          "greet(...args);"
        ],
      "lineHints": [
          "ここを正しく入力してください。",
          null,
          "関数の引数型を取得するユーティリティ型です。",
          "この行を正しく入力してください。",
          null,
          "スプレッド構文で展開する配列を指定します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Parameters",
            "ReturnType",
            "Arguments"
          ],
          "others": ["name: string", "age", "25", "args", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎 is 25\\n"
          }
        ]
      },
    {
      "title": "Awaited型",
      "correctCode": "// AsyncResult型を定義\\ntype AsyncResult = Promise<{ data: string }>;\\n// Awaited でPromiseの解決型を取得\\ntype Result = Awaited<AsyncResult>;\\n\\n// resultに{data: '成功'}を代入\\nconst result: Result = { data: '成功' };\\n// データを出力\\nconsole.log(result.data);",
      "holeyCode": "// AsyncResult型を定義\\ntype AsyncResult = Promise<{ data: ___ }>;\\n// Awaited でPromiseの解決型を取得\\ntype Result = ___<AsyncResult>;\\n___\\n// resultに{data: '成功'}を代入\\nconst result: Result = { data: ___ };\\n// データを出力\\nconsole.log(result.___);",
      "correctLines": [
          "// AsyncResult型を定義",
          "type AsyncResult = Promise<{ data: string }>;",
          "// Awaited でPromiseの解決型を取得",
          "type Result = Awaited<AsyncResult>;",
          "",
          "// resultに{data: '成功'}を代入",
          "const result: Result = { data: '成功' };",
          "// データを出力",
          "console.log(result.data);"
        ],
      "lineHints": [
          null,
          "データの型は文字列なので `string` です。",
          null,
          "Promiseの解決型を取得するユーティリティ型です。",
          null,
          null,
          "取得したいプロパティ名を指定します。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Awaited",
            "Promise",
            "Resolved"
          ],
          "others": [
            "string",
            "'成功'",
            "data"
          ]
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
