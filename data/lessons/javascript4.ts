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
      "description": "全ての要素が条件を満たすか確認しましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "every()とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 全ての要素をチェック\n\n**every()**は、配列の全ての要素が条件を満たすかチェックします。\n\n```javascript\nconst nums = [2, 4, 6, 8];\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven); // true\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// [80, 90, 75, 85] の配列を定義\nconst scores = [80, 90, 75, 85];\n// every で全要素をチェック\nconst allPassed = scores.every(score => score >= 60);\n// 結果を出力\nconsole.log(allPassed);",
      "holeyCode": "// [80, 90, 75, 85] の配列を定義\nconst scores = [80, 90, ___, 85];\n// every で全要素をチェック\nconst allPassed = scores.___(score => score >= 60);\n// 結果を出力\nconsole.___(allPassed);",
      "correctLines": [
        "const scores = [80, 90, 75, 85];",
        "const allPassed = scores.every(score => score >= 60);",
        "console.log(allPassed);"
      ],
      "lineHints": [
        null,
        "全ての要素をチェックするメソッドです。",
        null
      ],
      "candidates": {
        "keywords": ["every", "some", "all"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "true\n"
        }
      ]
    },
    {
      "title": "配列のsome",
      "description": "いずれかの要素が条件を満たすか確認しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "some()とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# いずれかの要素をチェック\n\n**some()**は、配列のいずれかの要素が条件を満たすかチェックします。\n\n```javascript\nconst nums = [1, 3, 5, 8];\nconst hasEven = nums.some(n => n % 2 === 0);\nconsole.log(hasEven); // true\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// [15, 22, 17, 19] の配列を定義\nconst ages = [15, 22, 17, 19];\n// some でいずれかの要素をチェック\nconst hasAdult = ages.some(age => age >= 20);\n// 結果を出力\nconsole.log(hasAdult);",
      "holeyCode": "// [15, 22, 17, 19] の配列を定義\nconst ages = [15, ___, 17, 19];\n// some でいずれかの要素をチェック\nconst hasAdult = ages.___(age => age >= 20);\n// 結果を出力\nconsole.___(hasAdult);",
      "correctLines": [
        "const ages = [15, 22, 17, 19];",
        "const hasAdult = ages.some(age => age >= 20);",
        "console.log(hasAdult);"
      ],
      "lineHints": [
        null,
        "いずれかの要素をチェックするメソッドです。",
        null
      ],
      "candidates": {
        "keywords": ["some", "every", "any"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "true\n"
        }
      ]
    },
    {
      "title": "flatMapで展開と変換",
      "description": "mapとflatを同時に行いましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "flatMap()とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# map + flat を一度に\n\n**flatMap()**は、mapして平坦化を一度に行います。\n\n```javascript\nconst arr = [1, 2, 3];\nconst result = arr.flatMap(x => [x, x * 2]);\nconsole.log(result); // [1, 2, 2, 4, 3, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ['hello', 'world'] の配列を定義\nconst words = ['hello', 'world'];\n// flatMap でmapと平坦化を同時に行う\nconst chars = words.flatMap(w => w.split(''));\n// 結果を出力\nconsole.log(chars);",
      "holeyCode": "// ['hello', 'world'] の配列を定義\nconst words = ['hello', '___'];\n// flatMap でmapと平坦化を同時に行う\nconst chars = words.___(w => w.split(''));\n// 結果を出力\nconsole.___(chars);",
      "correctLines": [
        "const words = ['hello', 'world'];",
        "const chars = words.flatMap(w => w.split(''));",
        "console.log(chars);"
      ],
      "lineHints": [
        null,
        "mapと平坦化を同時に行うメソッドです。",
        null
      ],
      "candidates": {
        "keywords": ["flatMap", "map", "flat"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[\n  'h', 'e', 'l', 'l',\n  'o', 'w', 'o', 'r',\n  'l', 'd'\n]\n"
        }
      ]
    },
    {
      "title": "Object.entries",
      "description": "オブジェクトをキーと値のペアの配列に変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Object.entries()とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# キーと値のペアを取得\n\n**Object.entries()**は、オブジェクトを[key, value]の配列に変換します。\n\n```javascript\nconst obj = { a: 1, b: 2 };\nconst entries = Object.entries(obj);\nconsole.log(entries); // [['a', 1], ['b', 2]]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// name: 'Taro', age: 25 のオブジェクトを定義\nconst user = { name: 'Taro', age: 25 };\n// entries でキーと値のペアを取得\nfor (const [key, value] of Object.entries(user)) {\n  // テンプレートリテラルで出力\n  console.log(`${key}: ${value}`);\n}",
      "holeyCode": "// name: 'Taro', age: 25 のオブジェクトを定義\nconst user = { name: '___', age: 25 };\n// entries でキーと値のペアを取得\nfor (const [key, value] of Object.___(user)) {\n  // テンプレートリテラルで出力\n  console.log(`${___}: ${value}`);\n}",
      "correctLines": [
        "const user = { name: 'Taro', age: 25 };",
        "for (const [key, value] of Object.entries(user)) {",
        "  console.log(`${key}: ${value}`);",
        "}"
      ],
      "lineHints": [
        null,
        "キーと値のペアを取得するメソッドです。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["entries", "keys", "values"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "name: Taro\nage: 25\n"
        }
      ]
    },
    {
      "title": "Object.fromEntries",
      "description": "キーと値のペアの配列からオブジェクトを作成しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "Object.fromEntries()とは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 配列からオブジェクトを作成\n\n**Object.fromEntries()**は、[key, value]の配列をオブジェクトに変換します。\n\n```javascript\nconst entries = [['a', 1], ['b', 2]];\nconst obj = Object.fromEntries(entries);\nconsole.log(obj); // { a: 1, b: 2 }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義\nconst pairs = [['name', 'Python'], ['version', '3.12']];\n// fromEntries で配列からオブジェクトを作成\nconst obj = Object.fromEntries(pairs);\n// 結果を出力\nconsole.log(obj);",
      "holeyCode": "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義\nconst pairs = [['name', '___'], ['version', '3.12']];\n// fromEntries で配列からオブジェクトを作成\nconst obj = Object.___(pairs);\n// 結果を出力\nconsole.___(obj);",
      "correctLines": [
        "const pairs = [['name', 'Python'], ['version', '3.12']];",
        "const obj = Object.fromEntries(pairs);",
        "console.log(obj);"
      ],
      "lineHints": [
        null,
        "配列からオブジェクトを作るメソッドです。",
        null
      ],
      "candidates": {
        "keywords": ["fromEntries", "entries", "create"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "{ name: 'Python', version: '3.12' }\n"
        }
      ]
    },
    {
      "title": "カリー化",
      "description": "関数を部分適用できる形に変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "カリー化とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 引数を1つずつ受け取る\n\n**カリー化**とは、複数の引数を取る関数を、引数を1つずつ受け取る関数に変換することです。\n\n```javascript\nconst add = a => b => a + b;\nconst add5 = add(5);\nconsole.log(add5(3)); // 8\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// => でアロー関数を連鎖させる\nconst multiply = a => b => a * b;\n// 部分適用で2倍する関数を作成\nconst double = multiply(2);\n// 結果を出力\nconsole.log(double(5));",
      "holeyCode": "// => でアロー関数を連鎖させる\nconst multiply = a ___ b => a * b;\n// 部分適用で2倍する関数を作成\nconst double = ___(2);\n// 結果を出力\nconsole.log(double(___));",
      "correctLines": [
        "const multiply = a => b => a * b;",
        "const double = multiply(2);",
        "console.log(double(5));"
      ],
      "lineHints": [
        "アロー関数を連鎖させます。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["=>", "->", "function"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "関数合成",
      "description": "複数の関数を1つに合成しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "関数合成とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数を組み合わせる\n\n**関数合成**とは、複数の関数を組み合わせて新しい関数を作ることです。\n\n```javascript\nconst compose = (f, g) => x => f(g(x));\nconst double = x => x * 2;\nconst addOne = x => x + 1;\nconst doubleThenAdd = compose(addOne, double);\nconsole.log(doubleThenAdd(5)); // 11\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// g を先に実行してfに渡す\nconst compose = (f, g) => x => f(g(x));\n// 2乗する関数\nconst square = x => x * x;\n// 符号を反転する関数\nconst negate = x => -x;\n// 関数を合成\nconst squareThenNegate = compose(negate, square);\n// 結果を出力\nconsole.log(squareThenNegate(3));",
      "holeyCode": "// g を先に実行してfに渡す\nconst compose = (f, g) => x => f(___(x));\n// 2乗する関数\nconst square = x => x ___ x;\n// 符号を反転する関数\nconst negate = x => ___x;\n// 関数を合成\nconst squareThenNegate = ___(negate, square);\n// 結果を出力\nconsole.log(squareThenNegate(___));",
      "correctLines": [
        "const compose = (f, g) => x => f(g(x));",
        "const square = x => x * x;",
        "const negate = x => -x;",
        "const squareThenNegate = compose(negate, square);",
        "console.log(squareThenNegate(3));"
      ],
      "lineHints": [
        "gを先に実行してfに渡します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["g", "f", "x"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "-9\n"
        }
      ]
    },
    {
      "title": "クロージャでカウンター",
      "description": "クロージャを使って状態を保持しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "クロージャとは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 状態を閉じ込める\n\n**クロージャ**は、関数が定義されたスコープの変数を覚えている機能です。\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// function でカウンター生成関数を定義\nfunction createCounter() {\n  // let で変数を初期化\n  let count = 0;\n  // ++ でインクリメントして返す\n  return () => ++count;\n}\n// カウンターを作成\nconst counter = createCounter();\n// 3回呼び出して結果を出力\nconsole.log(counter());\nconsole.log(counter());\nconsole.log(counter());",
      "holeyCode": "// function でカウンター生成関数を定義\n___ createCounter() {\n  // let で変数を初期化\n  ___ count = 0;\n  // ++ でインクリメントして返す\n  return () => ___count;\n}\n// カウンターを作成\nconst counter = ___();\n// 3回呼び出して結果を出力\nconsole.log(___.call());\nconsole.log(counter());\nconsole.log(___());",
      "correctLines": [
        "function createCounter() {",
        "  let count = 0;",
        "  return () => ++count;",
        "}",
        "const counter = createCounter();",
        "console.log(counter());",
        "console.log(counter());",
        "console.log(counter());"
      ],
      "lineHints": [
        null,
        null,
        "インクリメント演算子を使います。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["++", "--", "+="]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "メモ化",
      "description": "計算結果をキャッシュして再利用しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "メモ化とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 計算結果をキャッシュ\n\n**メモ化**は、関数の結果をキャッシュして同じ引数での再計算を避ける技法です。\n\n```javascript\nfunction memoize(fn) {\n  const cache = {};\n  return (x) => {\n    if (!(x in cache)) {\n      cache[x] = fn(x);\n    }\n    return cache[x];\n  };\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// function でメモ化関数を定義\nfunction memoize(fn) {\n  // const でキャッシュオブジェクトを作成\n  const cache = {};\n  return (x) => {\n    // in でオブジェクトにキーが存在するかチェック\n    if (!(x in cache)) {\n      // キャッシュに結果を保存\n      cache[x] = fn(x);\n    }\n    // return でキャッシュから返す\n    return cache[x];\n  };\n}\n// メモ化されたsquare関数を作成\nconst square = memoize(x => x * x);\n// 結果を出力\nconsole.log(square(5));\nconsole.log(square(5));",
      "holeyCode": "// function でメモ化関数を定義\n___ memoize(fn) {\n  // const でキャッシュオブジェクトを作成\n  const cache = ___;\n  return (x) => {\n    // in でオブジェクトにキーが存在するかチェック\n    if (!(x ___ cache)) {\n      // キャッシュに結果を保存\n      cache[x] = ___(x);\n    }\n    // return でキャッシュから返す\n    ___ cache[x];\n  };\n}\n// メモ化されたsquare関数を作成\nconst square = ___(x => x * x);\n// 結果を出力\nconsole.log(square(___));\nconsole.log(square(5));",
      "correctLines": [
        "function memoize(fn) {",
        "  const cache = {};",
        "  return (x) => {",
        "    if (!(x in cache)) {",
        "      cache[x] = fn(x);",
        "    }",
        "    return cache[x];",
        "  };",
        "}",
        "const square = memoize(x => x * x);",
        "console.log(square(5));",
        "console.log(square(5));"
      ],
      "lineHints": [
        null,
        null,
        null,
        "オブジェクトにキーが存在するかチェックします。",
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
        "keywords": ["in", "of", "has"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n25\n"
        }
      ]
    },
    {
      "title": "パイプライン",
      "description": "関数をパイプラインで連鎖させましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "パイプラインとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数を順番に適用\n\n**パイプライン**は、複数の関数を順番に適用する技法です。\n\n```javascript\nconst pipe = (...fns) => x =>\n  fns.reduce((v, f) => f(v), x);\n\nconst process = pipe(\n  x => x * 2,\n  x => x + 1,\n  x => x * 3\n);\nconsole.log(process(5)); // 33\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// const でパイプライン関数を定義\nconst pipe = (...fns) => x =>\n  // reduce で累積値 v を使って関数を連鎖\n  fns.reduce((v, f) => f(v), x);\n\n// +1, *2, -3 の順で関数を連結\nconst process = pipe(\n  // +1 する関数\n  x => x + 1,\n  // *2 する関数\n  x => x * 2,\n  // -3 する関数\n  x => x - 3\n);\n// 結果を出力\nconsole.log(process(5));",
      "holeyCode": "// const でパイプライン関数を定義\n___ pipe = (...fns) => x =>\n  // reduce で累積値 v を使って関数を連鎖\n  fns.___((___, f) => f(v), x);\n\n// パイプラインで関数を連結\nconst process = ___(\n  // +1 する関数\n  x => x + ___,\n  // *2 する関数\n  x => x ___ 2,\n  // -3 する関数\n  x => x - 3\n);\n// 結果を出力\nconsole.log(process(___));",
      "correctLines": [
        "const pipe = (...fns) => x =>",
        "  fns.reduce((v, f) => f(v), x);",
        "",
        "const process = pipe(",
        "  x => x + 1,",
        "  x => x * 2,",
        "  x => x - 3",
        ");",
        "console.log(process(5));"
      ],
      "lineHints": [
        null,
        "reduceを使い、vは累積値です。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["reduce", "v"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "9\n"
        }
      ]
    }
  ]
};
