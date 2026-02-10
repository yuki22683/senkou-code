export const javascriptData4 = {
  "language": "javascript",
  "lessonId": "javascript-4",
  "lessonTitle": "JavaScript IV - 関数型プログラミング",
  "lessonDescription": "JavaScriptの関数型プログラミングを学びます。高階関数、カリー化、合成関数などを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "高階関数とは",
      "content": "関数を引数に取る、または関数を返す関数です。\\n\\n```javascript\\nconst nums = [1, 2, 3];\\nnums.map(x => x * 2);  // 関数を引数に取る\\n```\\n\\n`map`, `filter`, `reduce` などが高階関数です。"
    },
    {
      "title": "every と some",
      "content": "配列の要素をまとめてチェックします。\\n\\n```javascript\\n[1, 2, 3].every(x => x > 0);  // true（全て）\\n[1, 2, 3].some(x => x > 2);   // true（どれか）\\n```"
    },
    {
      "title": "reduce",
      "content": "配列を1つの値にまとめます。\\n\\n```javascript\\n[1, 2, 3].reduce((acc, x) => acc + x, 0);\\n// => 6（合計）\\n```\\n\\n`acc` は累積値、`0` は初期値です。"
    },
    {
      "title": "メソッドチェーン",
      "content": "メソッドを連続して呼び出せます。\\n\\n```javascript\\n[1, 2, 3, 4, 5]\\n  .filter(x => x % 2 === 0)\\n  .map(x => x * 2);\\n// => [4, 8]\\n```"
    }
  ],
  "exercises": [
    {
      "title": "配列のevery",
      "correctCode": "// [80, 90, 75, 85] の配列を定義\\nconst scores = [80, 90, 75, 85];\\n// every で全要素をチェック\\nconst allPassed = scores.every(score => score >= 60);\\n// allPassedを出力\\nconsole.log(allPassed);",
      "holeyCode": "// [80, 90, 75, 85] の配列を定義\\nconst ___ = [___, ___, ___, ___];\\n// every で全要素をチェック\\nconst ___ = ___.___(___ => ___ >= ___);\\n// allPassedを出力\\n___.___(__);",
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
          "[80, 90, 75, 85] の配列を作ります。",
          null,
          "全ての要素が条件を満たすかチェックするメソッドです。",
          null,
          "allPassed を出力します。"
        ],
        "candidates": {
          "keywords": [
            "every",
            "some",
            "all"
          ],
          "others": ["80", "90", "75", "85", "60", "scores", "allPassed", "score", "console", "log"]
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
      "holeyCode": "// [15, 22, 17, 19] の配列を定義\\nconst ___ = [___, ___, ___, ___];\\n// some でいずれかの要素をチェック\\nconst ___ = ___.___(__ => ___ ___ ___);\\n// hasAdultを出力\\n___.___(___);",
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
          "[15, 22, 17, 19] の配列を作ります。",
          null,
          "いずれかの要素が条件を満たすかチェックするメソッドです。",
          null,
          "hasAdult を出力します。"
        ],
        "candidates": {
          "keywords": [
            "some",
            "every",
            "any"
          ],
          "others": ["15", "22", "17", "19", "20", ">=", "ages", "hasAdult", "age", "console", "log", ">= 20"]
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
      "correctCode": "// ['hello', 'world'] の配列を定義\\nconst words = ['hello', 'world'];\\n// flatMap でmapと平坦化を同時に行う\\nconst chars = words.flatMap(w => w.split(''));\\n// charsを出力\\nconsole.log(chars);",
      "holeyCode": "// ['hello', 'world'] の配列を定義\\nconst ___ = [___, ___];\\n// flatMap でmapと平坦化を同時に行う\\nconst ___ = ___.___(___ => ___.___(___));\\n// charsを出力\\n___.___(___);",
      "correctLines": [
          "// ['hello', 'world'] の配列を定義",
          "const words = ['hello', 'world'];",
          "// flatMap でmapと平坦化を同時に行う",
          "const chars = words.flatMap(w => w.split(''));",
          "// charsを出力",
          "console.log(chars);"
        ],
      "lineHints": [
          null,
          "['hello', 'world'] の配列を作ります。",
          null,
          "mapと平坦化を同時に行うメソッドです。split('')で1文字ずつ分割します。",
          null,
          "chars を出力します。"
        ],
        "candidates": {
          "keywords": [
            "flatMap",
            "map",
            "flat"
          ],
          "others": ["'hello'", "'world'", "''", "words", "chars", "w", "split", "console", "log"]
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
      "holeyCode": "// name: '太郎', age: 25 のオブジェクトを定義\\nconst ___ = { ___: ___, ___: ___ };\\n// entries でキーと値のペアを取得\\nfor (const [___, ___] of ___.___(___)) {\\n  // テンプレートリテラルで出力\\n  ___.___(___);\\n___",
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
          "Object.entriesでキーと値のペアを取得し、分割代入でkey, valueに代入します。",
          null,
          "テンプレートリテラル `${key}: ${value}` で出力します。",
          "forループのブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "entries",
            "keys",
            "values"
          ],
          "others": ["user", "name", "'太郎'", "age", "25", "key", "value", "Object", "`${key}: ${value}`", "console", "log", "}"]
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
      "correctCode": "// '名前': 'Python', 'バージョン': '3.12' のキーと値のペアの配列を定義\\nconst pairs = [['名前', 'Python'], ['バージョン', '3.12']];\\n// objにObject.fromEntries(pairs)を代入\\nconst obj = Object.fromEntries(pairs);\\n// objを出力\\nconsole.log(obj);",
      "holeyCode": "// '名前': 'Python', 'バージョン': '3.12' のキーと値のペアの配列を定義\\nconst ___ = [[___, ___], [___, ___]];\\n// objにObject.fromEntries(pairs)を代入\\nconst ___ = ___.___(___);\\n// objを出力\\n___.___(___);",
      "correctLines": [
          "// '名前': 'Python', 'バージョン': '3.12' のキーと値のペアの配列を定義",
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
          "Object.fromEntriesで配列からオブジェクトを作ります。",
          null,
          "obj を出力します。"
        ],
        "candidates": {
          "keywords": [
            "fromEntries",
            "entries",
            "create"
          ],
          "others": ["pairs", "'名前'", "'Python'", "'バージョン'", "'3.12'", "obj", "Object", "console", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "{ '名前': 'Python', 'バージョン': '3.12' }\\n"
          }
        ]
      },
    {
      "title": "カリー化",
      "correctCode": "// a*bを返すmultiply関数を定義（カリー化）\\nconst multiply = a => b => a * b;\\n// 部分適用で2倍する関数を作成\\nconst double = multiply(2);\\n// double(5)を出力\\nconsole.log(double(5));",
      "holeyCode": "// a*bを返すmultiply関数を定義（カリー化）\\nconst ___ = ___ => ___ => ___ ___ ___;\\n// 部分適用で2倍する関数を作成\\nconst ___ = ___(___);\\n// double(5)を出力\\n___.___(___(_));",
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
          "アロー関数を連鎖させて a * b を返します。",
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
          "others": ["multiply", "a", "b", "*", "double", "2", "5", "console", "log"]
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
      "holeyCode": "// g を先に実行してfに渡す\\nconst ___ = (___, ___) => ___ => ___(___(___));\\n// 2乗する関数\\nconst ___ = ___ => ___ ___ ___;\\n// 符号を反転する関数\\nconst ___ = ___ => ______;\\n// 関数を合成\\nconst ___ = ___(___, ___);\\n// squareThenNegate(3)を出力\\n___.___(___(_));",
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
          "f(g(x)) の形で g を先に実行して f に渡します。",
          null,
          "x * x で2乗します。",
          null,
          "-x で符号を反転します。",
          null,
          "compose(negate, square) で関数を合成します。",
          null,
          "squareThenNegate(3) の結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "=>",
            "->",
            "function"
          ],
          "others": ["compose", "f", "g", "x", "*", "-x", "-x;", "square", "negate", "squareThenNegate", "3", "console", "log"]
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
      "holeyCode": "// createCounter関数を定義\\nfunction ___() {\\n  // countを0で初期化\\n  let ___ = ___;\\n  // ++ でインクリメントして返す\\n  return () => ______;\\n___\\n// カウンターを作成\\nconst ___ = ___();\\n// 1回目の呼び出し\\n___.___(_());\\n// 2回目の呼び出し\\n___.___(_());\\n// 3回目の呼び出し\\n___.___(_());",
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
          "createCounter という関数を定義します。",
          null,
          "count を 0 で初期化します。",
          null,
          "++count でインクリメントして返します。",
          "createCounter関数の定義を完了します。",
          null,
          "createCounter() を呼び出して counter に代入します。",
          null,
          "counter() を呼び出して結果を出力します。",
          null,
          "counter() を呼び出して結果を出力します。",
          null,
          "counter() を呼び出して結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "++",
            "--",
            "+="
          ],
          "others": ["createCounter", "count", "0", "++count", "++count;", "counter", "console", "log", "}"]
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
      "holeyCode": "// memoize関数を定義\\nfunction ___(___) {\\n  // cacheに{}を代入\\n  const ___ = ___;\\n  return (___) => {\\n    // in でオブジェクトにキーが存在するかチェック\\n    if (!(___ in ___)) {\\n      // キャッシュに結果を保存\\n      ___[___] = ___(___);\\n    ___\\n    // return でキャッシュから返す\\n    return ___[___];\\n  ___\\n___\\n// メモ化されたsquare関数を作成\\nconst ___ = ___(___ => ___ ___ ___);\\n// square(5)を出力\\n___.___(___(___));\\n___.___(___(___));",
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
          "memoize という関数を定義します。引数は fn です。",
          null,
          "cache に空のオブジェクト {} を代入します。",
          "引数 x を受け取る関数を返します。",
          null,
          "x in cache でキーが存在するかチェックします。",
          null,
          "cache[x] に fn(x) の結果を保存します。",
          "if文のブロックを閉じます。",
          null,
          "cache[x] を返します。",
          "内部関数の定義を完了します。",
          "memoize関数の定義を完了します。",
          null,
          "memoize で x * x を返す関数をラップします。",
          null,
          "square(5) を出力します。",
          "square(5) を出力します。"
        ],
        "candidates": {
          "keywords": [
            "in",
            "of",
            "has"
          ],
          "others": ["memoize", "fn", "cache", "{}", "x", "*", "square", "5", "console", "log", "}", "};"]
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
      "holeyCode": "// pipe関数を定義\\nconst ___ = (...___) => ___ =>\\n  // reduce で累積値 v を使って関数を連鎖\\n  ___.___((___, ___) => ___(_), ___);\\n___\\n// パイプラインで関数を連結\\nconst ___ = ___(\\n  // +1 する関数\\n  ___ => ___ ___ ___,\\n  // *2 する関数\\n  ___ => ___ ___ ___,\\n  // -3 する関数\\n  ___ => ___ ___ ___\\n___\\n// process(5)を出力\\n___.___(___(___));",
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
          "スプレッド構文 ...fns で関数配列を受け取ります。",
          null,
          "reduce で累積値 v を使って関数を連鎖させます。",
          null,
          null,
          "pipe に関数を渡します。",
          null,
          "x + 1 を返す関数です。",
          null,
          "x * 2 を返す関数です。",
          null,
          "x - 3 を返す関数です。",
          "pipe関数の呼び出しを完了します。",
          null,
          "process(5) の結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "reduce",
            "map",
            "filter"
          ],
          "others": ["pipe", "fns", "x", "v", "f", "+", "*", "-", "1", "2", "3", "5", "process", "console", "log", "", ");"]
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
