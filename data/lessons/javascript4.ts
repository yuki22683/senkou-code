export const javascriptData4 = {
  "language": "javascript",
  "lessonId": "javascript-4",
  "lessonTitle": "JavaScript IV - 関数型プログラミング",
  "lessonDescription": "JavaScriptの関数型プログラミングを学びます。高階関数、カリー化、合成関数などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "配列のevery",
      "correctCode": "// [80, 90, 75, 85] の配列を定義\\nconst scores = [80, 90, 75, 85];\\n// every で全要素をチェック\\nconst allPassed = scores.every(score => score >= 60);\\n// allPassedを出力\\nconsole.log(allPassed);",
      "holeyCode": "// [80, 90, 75, 85] の配列を定義\\nconst ___ = [80, 90, 75, 85];\\n// every で全要素をチェック\\nconst ___ = scores.every(score => score >= 60);\\n// allPassedを出力\\nconsole.log(___);",
      "correctLines": [
          "// [80, 90, 75, 85] の配列を定義",
          "const scores = [80, 90, 75, 85];",
          "// every で全要素をチェック",
          "const allPassed = scores.every(score => score >= 60);",
          "// allPassedを出力",
          "console.log(allPassed);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "全ての要素をチェックするメソッドです。",
          null,
          "allPassed を出力します。"
        ],
        "candidates": {
          "keywords": [
            "every",
            "some",
            "all"
          ],
          "others": ["75", "log", "scores", "allPassed"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\n"
          }
        ]
      },
    {
      "title": "配列のsome",
      "correctCode": "// [15, 22, 17, 19] の配列を定義\\nconst ages = [15, 22, 17, 19];\\n// some でいずれかの要素をチェック\\nconst hasAdult = ages.some(age => age >= 20);\\n// hasAdultを出力\\nconsole.log(hasAdult);",
      "holeyCode": "// [15, 22, 17, 19] の配列を定義\\nconst ___ = [15, 22, 17, 19];\\n// some でいずれかの要素をチェック\\nconst ___ = ages.some(age => age >= 20);\\n// hasAdultを出力\\nconsole.log(___);",
      "correctLines": [
          "// [15, 22, 17, 19] の配列を定義",
          "const ages = [15, 22, 17, 19];",
          "// some でいずれかの要素をチェック",
          "const hasAdult = ages.some(age => age >= 20);",
          "// hasAdultを出力",
          "console.log(hasAdult);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "いずれかの要素をチェックするメソッドです。",
          null,
          "hasAdult を出力します。"
        ],
        "candidates": {
          "keywords": [
            "some",
            "every",
            "any"
          ],
          "others": ["22", "log", "ages", "hasAdult"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "true\\n"
          }
        ]
      },
    {
      "title": "flatMapで展開と変換",
      "correctCode": "// ['こんにちは', '世界'] の配列を定義\\nconst words = ['こんにちは', '世界'];\\n// flatMap でmapと平坦化を同時に行う\\nconst chars = words.flatMap(w => w.split(''));\\n// charsを出力\\nconsole.log(chars);",
      "holeyCode": "// ['こんにちは', '世界'] の配列を定義\\nconst ___ = ['こんにちは', '世界'];\\n// flatMap でmapと平坦化を同時に行う\\nconst ___ = words.flatMap(w => w.split(''));\\n// charsを出力\\nconsole.log(___);",
      "correctLines": [
          "// ['こんにちは', '世界'] の配列を定義",
          "const words = ['こんにちは', '世界'];",
          "// flatMap でmapと平坦化を同時に行う",
          "const chars = words.flatMap(w => w.split(''));",
          "// charsを出力",
          "console.log(chars);"
        ],
      "lineHints": [
          null,
          "['こんにちは', '世界'] の配列を作ります。",
          null,
          "mapと平坦化を同時に行うメソッドです。",
          null,
          "chars を出力します。"
        ],
        "candidates": {
          "keywords": [
            "flatMap",
            "map",
            "flat"
          ],
          "others": ["世界", "log", "words", "chars"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[\\n  'h', 'e', 'l', 'l',\\n  'o', 'w', 'o', 'r',\\n  'l', 'd'\\n]\\n"
          }
        ]
      },
    {
      "title": "Object.entries",
      "correctCode": "// name: '太郎', age: 25 のオブジェクトを定義\\nconst user = { name: '太郎', age: 25 };\\n// entries でキーと値のペアを取得\\nfor (const [key, value] of Object.entries(user)) {\\n  // テンプレートリテラルで出力\\n  console.log(`${key}: ${value}`);\\n}",
      "holeyCode": "// name: '太郎', age: 25 のオブジェクトを定義\\nconst ___ = { name: '太郎', age: 25 };\\n// entries でキーと値のペアを取得\\nfor (const [key, value] of Object.entries(___)) {\\n  // テンプレートリテラルで出力\\n  console.___(`${key}: ${value}`);\\n___",
      "correctLines": [
          "// name: '太郎', age: 25 のオブジェクトを定義",
          "const user = { name: '太郎', age: 25 };",
          "// entries でキーと値のペアを取得",
          "for (const [key, value] of Object.entries(user)) {",
          "  // テンプレートリテラルで出力",
          "  console.log(`${key}: ${value}`);",
          "}"
        ],
      "lineHints": [
          null,
          "{ name: '太郎', age: 25 } のオブジェクトを作ります。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "コンソールに出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "entries",
            "keys",
            "values"
          ],
          "others": ["Taro", "key", "user", "log", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "name: 太郎\\nage: 25\\n"
          }
        ]
      },
    {
      "title": "Object.fromEntries",
      "correctCode": "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義\\nconst pairs = [['名前', 'Python'], ['バージョン', '3.12']];\\n// objにObject.fromEntries(pairs)を代入\\nconst obj = Object.fromEntries(pairs);\\n// objを出力\\nconsole.log(obj);",
      "holeyCode": "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義\\nconst ___ = [['名前', 'Python'], ['バージョン', '3.12']];\\n// objにObject.fromEntries(pairs)を代入\\nconst ___ = Object.fromEntries(pairs);\\n// objを出力\\nconsole.log(___);",
      "correctLines": [
          "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義",
          "const pairs = [['名前', 'Python'], ['バージョン', '3.12']];",
          "// objにObject.fromEntries(pairs)を代入",
          "const obj = Object.fromEntries(pairs);",
          "// objを出力",
          "console.log(obj);"
        ],
      "lineHints": [
          null,
          "キーと値のペアの配列を作ります。",
          null,
          "配列からオブジェクトを作るメソッドです。",
          null,
          "obj を出力します。"
        ],
        "candidates": {
          "keywords": [
            "fromEntries",
            "entries",
            "create"
          ],
          "others": ["Python", "log", "pairs", "obj"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{ name: 'Python', version: '3.12' }\\n"
          }
        ]
      },
    {
      "title": "カリー化",
      "correctCode": "// a*bを返すmultiply関数を定義（カリー化）\\nconst multiply = a => b => a * b;\\n// 部分適用で2倍する関数を作成\\nconst double = multiply(2);\\n// double(5)を出力\\nconsole.log(double(5));",
      "holeyCode": "// a*bを返すmultiply関数を定義（カリー化）\\nconst ___ = a => b => a * b;\\n// 部分適用で2倍する関数を作成\\nconst ___ = multiply(2);\\n// double(5)を出力\\nconsole.___(double(5));",
      "correctLines": [
          "// a*bを返すmultiply関数を定義（カリー化）",
          "const multiply = a => b => a * b;",
          "// 部分適用で2倍する関数を作成",
          "const double = multiply(2);",
          "// double(5)を出力",
          "console.log(double(5));"
        ],
      "lineHints": [
          null,
          "アロー関数を連鎖させます。",
          null,
          "multiply(2) で2倍する関数を作ります。",
          null,
          "double(5) の結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "=>",
            "->",
            "function"
          ],
          "others": ["multiply", "5", "double", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "関数合成",
      "correctCode": "// g を先に実行してfに渡す\\nconst compose = (f, g) => x => f(g(x));\\n// 2乗する関数\\nconst square = x => x * x;\\n// 符号を反転する関数\\nconst negate = x => -x;\\n// 関数を合成\\nconst squareThenNegate = compose(negate, square);\\n// squareThenNegate(3)を出力\\nconsole.log(squareThenNegate(3));",
      "holeyCode": "// g を先に実行してfに渡す\\nconst ___ = (f, g) => x => f(g(x));\\n// 2乗する関数\\nconst ___ = x => x * x;\\n// 符号を反転する関数\\nconst ___ = x => -x;\\n// 関数を合成\\nconst ___ = compose(negate, square);\\n// squareThenNegate(3)を出力\\nconsole.___(squareThenNegate(3));",
      "correctLines": [
          "// g を先に実行してfに渡す",
          "const compose = (f, g) => x => f(g(x));",
          "// 2乗する関数",
          "const square = x => x * x;",
          "// 符号を反転する関数",
          "const negate = x => -x;",
          "// 関数を合成",
          "const squareThenNegate = compose(negate, square);",
          "// squareThenNegate(3)を出力",
          "console.log(squareThenNegate(3));"
        ],
      "lineHints": [
          null,
          "gを先に実行してfに渡します。",
          null,
          "x * x で2乗します。",
          null,
          "-x で符号を反転します。",
          null,
          "compose で関数を合成します。",
          null,
          "squareThenNegate(3) の結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "g",
            "f",
            "x"
          ],
          "others": ["*", "-", "compose", "3", "square", "negate", "squareThenNegate", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "-9\\n"
          }
        ]
      },
    {
      "title": "クロージャでカウンター",
      "correctCode": "// createCounter関数を定義\\nfunction createCounter() {\\n  // countを0で初期化\\n  let count = 0;\\n  // ++ でインクリメントして返す\\n  return () => ++count;\\n}\\n// カウンターを作成\\nconst counter = createCounter();\\n// 1回目の呼び出し\\nconsole.log(counter());\\n// 2回目の呼び出し\\nconsole.log(counter());\\n// 3回目の呼び出し\\nconsole.log(counter());",
      "holeyCode": "// createCounter関数を定義\\nfunction ___() {\\n  // countを0で初期化\\n  let ___ = 0;\\n  // ++ でインクリメントして返す\\n  return () => ++___;\\n___\\n// カウンターを作成\\nconst ___ = createCounter();\\n// 1回目の呼び出し\\nconsole.___(counter());\\n// 2回目の呼び出し\\nconsole.___(counter());\\n// 3回目の呼び出し\\nconsole.___(counter());",
      "correctLines": [
          "// createCounter関数を定義",
          "function createCounter() {",
          "  // countを0で初期化",
          "  let count = 0;",
          "  // ++ でインクリメントして返す",
          "  return () => ++count;",
          "}",
          "// カウンターを作成",
          "const counter = createCounter();",
          "// 1回目の呼び出し",
          "console.log(counter());",
          "// 2回目の呼び出し",
          "console.log(counter());",
          "// 3回目の呼び出し",
          "console.log(counter());"
        ],
      "lineHints": [
          null,
          "function で関数を定義します。",
          null,
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "インクリメント演算子 ++ を使います。",
          "createCounter を呼び出します。",
          null,
          "counter を呼び出します。",
          null,
          "counter を呼び出します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "++",
            "--",
            "+="
          ],
          "others": ["function", "let", "createCounter", "counter());", "counter", "count", "}", "log", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "メモ化",
      "correctCode": "// memoize関数を定義\\nfunction memoize(fn) {\\n  // cacheに{}を代入\\n  const cache = {};\\n  return (x) => {\\n    // in でオブジェクトにキーが存在するかチェック\\n    if (!(x in cache)) {\\n      // キャッシュに結果を保存\\n      cache[x] = fn(x);\\n    }\\n    // return でキャッシュから返す\\n    return cache[x];\\n  };\\n}\\n// メモ化されたsquare関数を作成\\nconst square = memoize(x => x * x);\\n// square(5)を出力\\nconsole.log(square(5));\\nconsole.log(square(5));",
      "holeyCode": "// memoize関数を定義\\nfunction memoize(___) {\\n  // cacheに{}を代入\\n  const ___ = {};\\n  return (___) => {\\n    // in でオブジェクトにキーが存在するかチェック\\n    if (!(x in ___)) {\\n      // キャッシュに結果を保存\\n      cache[___] = fn(x);\\n    ___\\n    // return でキャッシュから返す\\n    return cache[___];\\n  ___\\n___\\n// メモ化されたsquare関数を作成\\nconst ___ = memoize(x => x * x);\\n// square(5)を出力\\nconsole.___(square(5));\\nconsole.___(square(5));",
      "correctLines": [
          "// memoize関数を定義",
          "function memoize(fn) {",
          "  // cacheに{}を代入",
          "  const cache = {};",
          "  return (x) => {",
          "    // in でオブジェクトにキーが存在するかチェック",
          "    if (!(x in cache)) {",
          "      // キャッシュに結果を保存",
          "      cache[x] = fn(x);",
          "    }",
          "    // return でキャッシュから返す",
          "    return cache[x];",
          "  };",
          "}",
          "// メモ化されたsquare関数を作成",
          "const square = memoize(x => x * x);",
          "// square(5)を出力",
          "console.log(square(5));",
          "console.log(square(5));"
        ],
      "lineHints": [
          null,
          "function で関数を定義します。",
          null,
          "空のオブジェクト {} を作ります。",
          "in でキーが存在するかチェックします。",
          null,
          "fn(x) で計算して保存します。",
          null,
          "return でキャッシュから返します。",
          "memoize で関数をラップします。",
          null,
          "5 を引数として渡します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "of",
            "has"
          ],
          "others": ["function", "{}", "fn", "return", "memoize", "5", "cache", "x", "}", "};", "square", "log", "}", "};", "}", "};", "}", "};\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n25\\n"
          }
        ]
      },
    {
      "title": "パイプライン",
      "correctCode": "// pipe関数を定義\\nconst pipe = (...fns) => x =>\\n  // reduce で累積値 v を使って関数を連鎖\\n  fns.reduce((v, f) => f(v), x);\\n\\n// パイプラインで関数を連結\\nconst process = pipe(\\n  // +1 する関数\\n  x => x + 1,\\n  // *2 する関数\\n  x => x * 2,\\n  // -3 する関数\\n  x => x - 3\\n);\\n// process(5)を出力\\nconsole.log(process(5));",
      "holeyCode": "// pipe関数を定義\\nconst ___ = (...fns) => x =>\\n  // reduce で累積値 v を使って関数を連鎖\\n  fns.reduce((v, f) => f(v), ___);\\n___\\n// パイプラインで関数を連結\\nconst ___ = pipe(\\n  // +1 する関数\\n  x => x ___ 1,\\n  // *2 する関数\\n  x => x ___ 2,\\n  // -3 する関数\\n  x => x ___ 3\\n___\\n// process(5)を出力\\nconsole.___(process(5));",
      "correctLines": [
          "// pipe関数を定義",
          "const pipe = (...fns) => x =>",
          "  // reduce で累積値 v を使って関数を連鎖",
          "  fns.reduce((v, f) => f(v), x);",
          "",
          "// パイプラインで関数を連結",
          "const process = pipe(",
          "  // +1 する関数",
          "  x => x + 1,",
          "  // *2 する関数",
          "  x => x * 2,",
          "  // -3 する関数",
          "  x => x - 3",
          ");",
          "// process(5)を出力",
          "console.log(process(5));"
        ],
      "lineHints": [
          null,
          "const でパイプライン関数を定義します。",
          null,
          "reduceを使い、vは累積値です。",
          null,
          null,
          "1 を足します。",
          null,
          "2 を掛けます。",
          null,
          "process(5) の結果を出力します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "reduce",
            "v"
          ],
          "others": ["const", "pipe", "1", "*", "5", "x", "process", "+", "-", ");", "log", "", ");"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "9\\n"
          }
        ]
      }
  ]
};
