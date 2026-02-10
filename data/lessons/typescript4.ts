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
      "correctCode": "// isNumber型ガード関数を定義\\nfunction isNumber(x: unknown): x is number {\\n  // typeofで型をチェック\\n  return typeof x === 'number';\\n}\\n\\n// unknown型の値\\nconst value: unknown = 42;\\n// 型ガードでチェック\\nif (isNumber(value)) {\\n  // 数値として計算\\n  console.log(value * 2);\\n}",
      "holeyCode": "// isNumber型ガード関数を定義\\n___ ___(___: ___): ___ ___ ___ {\\n  // typeofで型をチェック\\n  return typeof ___ === ___;\\n___\\n___\\n// unknown型の値\\nconst ___: ___ = ___;\\n// 型ガードでチェック\\nif (___(___)) {\\n  // 数値として計算\\n  ___.___(___ * ___);\\n___",
      "correctLines": [
          "// isNumber型ガード関数を定義",
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
          "isNumber型ガード関数を定義し、引数xがnumber型かをチェックします。",
          null,
          "typeof演算子でxの型を'number'と比較します。",
          "関数の閉じ括弧です。",
          null,
          null,
          "unknown型のvalue変数に42を代入します。",
          null,
          "isNumber関数でvalueをチェックします。",
          null,
          "console.logでvalue * 2の結果を出力します。",
          "ifブロックの閉じ括弧です。"
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
      "correctCode": "// 車の型\\ntype Car = { 運転: () => void };\\n// 船の型\\ntype Boat = { sail: () => void };\\n\\nfunction operate(vehicle: Car | Boat): void {\\n  // in でプロパティの存在をチェック\\n  if ('運転' in vehicle) {\\n    // 車の操作\\n    console.log('運転中');\\n  } else {\\n    // 船の操作\\n    console.log('航海中');\\n  }\\n}\\n\\n// 車を操作\\noperate({ 運転: () => {} });",
      "holeyCode": "// 車の型\\ntype ___ = { ___: () => ___ };\\n// 船の型\\ntype ___ = { ___: () => ___ };\\n___\\n___ ___(___: ___ | ___): ___ {\\n  // in でプロパティの存在をチェック\\n  if (___ ___ ___) {\\n    // 車の操作\\n    ___.___(___);\\n  } ___ {\\n    // 船の操作\\n    ___.___(___);\\n  ___\\n___\\n___\\n// 車を操作\\n___({ ___: () => {} });",
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
          "Car型を定義し、運転メソッドを持つオブジェクト型にします。",
          null,
          "Boat型を定義し、sailメソッドを持つオブジェクト型にします。",
          null,
          "operate関数を定義し、CarまたはBoatを受け取ります。",
          null,
          "'運転' in vehicleでプロパティの存在をチェックします。",
          null,
          "console.logで'運転中'を出力します。",
          "elseブロックを開始します。",
          null,
          "console.logで'航海中'を出力します。",
          "ifブロックの閉じ括弧です。",
          "関数の閉じ括弧です。",
          null,
          null,
          "operate関数に運転メソッドを持つオブジェクトを渡します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "function",
            "if",
            "else",
            "in"
          ],
          "others": ["Car", "運転", "void", "Boat", "sail", "operate", "vehicle", "'運転'", "console", "log", "'運転中'", "'航海中'", "}", ""]
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
      "correctCode": "// 成功時の型\\ntype Success = { status: '成功'; data: string };\\n// 失敗時の型\\ntype Failure = { status: '失敗'; error: string };\\n// 結果のユニオン型\\ntype Result = Success | Failure;\\n\\nfunction handle(result: Result): void {\\n  // status で判別プロパティを使う\\n  switch (result.status) {\\n    case '成功':\\n      // データを出力\\n      console.log(result.data);\\n      break;\\n    case '失敗':\\n      // エラーを出力\\n      console.log(result.error);\\n      break;\\n  }\\n}\\n\\n// 成功結果を処理\\nhandle({ status: '成功', data: 'OK' });",
      "holeyCode": "// 成功時の型\\ntype ___ = { ___: ___; ___: ___ };\\n// 失敗時の型\\ntype ___ = { ___: ___; ___: ___ };\\n// 結果のユニオン型\\ntype ___ = ___ ___ ___;\\n___\\n___ ___(___: ___): ___ {\\n  // status で判別プロパティを使う\\n  switch (___.___) {\\n    case ___:\\n      // データを出力\\n      ___.___(___.___)\\n      ___;\\n    case ___:\\n      // エラーを出力\\n      ___.___(___.___)\\n      ___;\\n  ___\\n___\\n___\\n// 成功結果を処理\\n___({ ___: ___, ___: ___ });",
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
          "handle({ status: '成功', data: 'OK' });"
        ],
      "lineHints": [
          null,
          "Success型を定義し、status:'成功'とdata:stringを持ちます。",
          null,
          "Failure型を定義し、status:'失敗'とerror:stringを持ちます。",
          null,
          "Result型をSuccessとFailureのユニオン型で定義します。",
          null,
          "handle関数を定義し、Result型を受け取ります。",
          null,
          "result.statusでswitch文の分岐条件を指定します。",
          "'成功'のcaseを定義します。",
          null,
          "console.logでresult.dataを出力します。",
          "break文でswitch文を抜けます。",
          "'失敗'のcaseを定義します。",
          null,
          "console.logでresult.errorを出力します。",
          "break文でswitch文を抜けます。",
          "switch文の閉じ括弧です。",
          "関数の閉じ括弧です。",
          null,
          null,
          "handle関数にstatus:'成功',data:'OK'のオブジェクトを渡します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "function",
            "switch",
            "case",
            "break"
          ],
          "others": ["Success", "status", "'成功'", "data", "string", "Failure", "'失敗'", "error", "Result", "|", "handle", "result", "void", "console", "log", "'OK'", "}"]
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
      "holeyCode": "// 色のユニオン型\\ntype ___ = ___ | ___ ___ ___;\\n___\\n___ ___(___: ___): ___ {\\n  switch (___) {\\n    // 赤のカラーコード\\n    case ___: return ___;\\n    // 緑のカラーコード\\n    case ___: return ___;\\n    // 青のカラーコード\\n    case ___: return ___;\\n    // 全ケース処理済みの場合\\n    ___:\\n      // never で到達不能な型を表す\\n      const ___: ___ = ___;\\n      // exhaustive変数を返す\\n      return ___;\\n  ___\\n___\\n___\\n// 赤のカラーコードを出力\\n___.___(___(___))",
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
          "Color型を'赤'|'緑'|'青'のユニオン型で定義します。",
          null,
          "getHex関数を定義し、Color型を受け取りstringを返します。",
          "switch文でcolorの値を分岐します。",
          null,
          "'赤'の場合は'#ff0000'を返します。",
          null,
          "'緑'の場合は'#00ff00'を返します。",
          null,
          "'青'の場合は'#0000ff'を返します。",
          null,
          "defaultラベルで全ケース処理後の分岐を定義します。",
          null,
          "_exhaustive変数をnever型で宣言しcolorを代入します。",
          null,
          "_exhaustive変数を返します。",
          "switch文の閉じ括弧です。",
          "関数の閉じ括弧です。",
          null,
          null,
          "console.logでgetHex('赤')の結果を出力します。"
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
          "others": ["Color", "'赤'", "'緑'", "'青'", "|", "getHex", "color", "string", "'#ff0000'", "'#00ff00'", "'#0000ff'", "_exhaustive", "never", "}", "console", "log"]
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
      "holeyCode": "// HTTPメソッドのユニオン型\\ntype ___ = ___ ___ ___;\\n// エンドポイントのユニオン型\\ntype ___ = ___ ___ ___;\\n// ` でテンプレートリテラル型を定義\\ntype ___ = ___${___} ${___}___;\\n___\\n// ルートを定義\\nconst ___: ___ = ___;\\n// 出力\\n___.___(___);",
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
      "correctCode": "// ステータスのユニオン型\\ntype Status = '保留中' | '成功' | 'エラー' | 'キャンセル済み';\\n// Exclude でユニオン型から特定の型を除外\\ntype ActiveStatus = Exclude<Status, 'キャンセル済み'>;\\n\\n// アクティブなステータスを代入\\nconst status: ActiveStatus = '保留中';\\n// 出力\\nconsole.log(status);",
      "holeyCode": "// ステータスのユニオン型\\ntype ___ = ___ | ___ | ___ ___ ___;\\n// Exclude でユニオン型から特定の型を除外\\ntype ___ = ___<___, ___>;\\n___\\n// アクティブなステータスを代入\\nconst ___: ___ = ___;\\n// 出力\\n___.___(___);",
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
      "correctCode": "// イベントのユニオン型\\ntype Event = 'クリック' | 'スクロール' | 'マウスオーバー' | 'キーdown';\\n// Extract でユニオン型から特定の型を抽出\\ntype MouseEvent = Extract<Event, 'クリック' | 'スクロール' | 'マウスオーバー'>;\\n\\n// マウスイベントを代入\\nconst event: MouseEvent = 'クリック';\\n// 出力\\nconsole.log(event);",
      "holeyCode": "// イベントのユニオン型\\ntype ___ = ___ | ___ | ___ ___ ___;\\n// Extract でユニオン型から特定の型を抽出\\ntype ___ = ___<___, ___ | ___ | ___>;\\n___\\n// マウスイベントを代入\\nconst ___: ___ = ___;\\n// 出力\\n___.___(___);",
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
      "correctCode": "// nullまたはundefinedを含む型\\ntype MaybeString = string | null | undefined;\\n// NonNullable でnull/undefinedを除外\\ntype DefiniteString = NonNullable<MaybeString>;\\n\\n// 確定した文字列を代入\\nconst text: DefiniteString = 'こんにちは';\\n// 出力\\nconsole.log(text);",
      "holeyCode": "// nullまたはundefinedを含む型\\ntype ___ = ___ | ___ ___ ___;\\n// NonNullable でnull/undefinedを除外\\ntype ___ = ___<___>;\\n___\\n// 確定した文字列を代入\\nconst ___: ___ = ___;\\n// 出力\\n___.___(___);",
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
      "correctCode": "function greet(name: string, age: number): void {\\n  // テンプレート文字列で出力\\n  console.log(`${name} is ${age}`);\\n}\\n// Parameters で関数の引数型を取得\\ntype GreetParams = Parameters<typeof greet>;\\n// argsに['太郎', 25]を代入\\nconst args: GreetParams = ['太郎', 25];\\n// 引数の配列 args を渡して呼び出し\\ngreet(...args);",
      "holeyCode": "___ ___(___: ___, ___: ___): ___ {\\n  // テンプレート文字列で出力\\n  ___.___(___${___} is ${___}___);\\n___\\n// Parameters で関数の引数型を取得\\ntype ___ = ___<typeof ___>;\\n// argsに['太郎', 25]を代入\\nconst ___: ___ = [___, ___];\\n// 引数の配列 args を渡して呼び出し\\n___(___);",
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
          "greet関数を定義し、name:stringとage:numberを受け取ります。",
          null,
          "console.logでテンプレート文字列を出力します。",
          "関数の閉じ括弧です。",
          null,
          "GreetParams型をParametersでgreet関数の引数型を取得して定義します。",
          null,
          "args変数にGreetParams型で['太郎', 25]を代入します。",
          null,
          "greet関数に...argsでスプレッド展開して呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "type",
            "const",
            "typeof"
          ],
          "others": ["greet", "name", "string", "age", "number", "void", "console", "log", "`", "}", "GreetParams", "Parameters", "args", "'太郎'", "25", "...args"]
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
      "holeyCode": "// AsyncResult型を定義\\ntype ___ = ___<{ ___: ___ }>;\\n// Awaited でPromiseの解決型を取得\\ntype ___ = ___<___>;\\n___\\n// resultに{data: '成功'}を代入\\nconst ___: ___ = { ___: ___ };\\n// データを出力\\n___.___(___.___)\\n",
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
