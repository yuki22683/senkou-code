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
          "content": "# 全ての要素をチェック\n\n**every()**は、配列の全ての要素が条件を満たすかチェックします。\n\n```javascript\nconst nums = [2, 4, 6, 8];\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven); // true\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const scores = [80, 90, 75, 85];\nconst allPassed = scores.every(score => score >= 60);\nconsole.log(allPassed);",
      "holeyCode": "const scores = [80, 90, 75, 85];\nconst allPassed = scores.___(score => score >= 60);\nconsole.log(allPassed);",
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
          "content": "# いずれかの要素をチェック\n\n**some()**は、配列のいずれかの要素が条件を満たすかチェックします。\n\n```javascript\nconst nums = [1, 3, 5, 8];\nconst hasEven = nums.some(n => n % 2 === 0);\nconsole.log(hasEven); // true\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const ages = [15, 22, 17, 19];\nconst hasAdult = ages.some(age => age >= 20);\nconsole.log(hasAdult);",
      "holeyCode": "const ages = [15, 22, 17, 19];\nconst hasAdult = ages.___(age => age >= 20);\nconsole.log(hasAdult);",
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
          "content": "# map + flat を一度に\n\n**flatMap()**は、mapして平坦化を一度に行います。\n\n```javascript\nconst arr = [1, 2, 3];\nconst result = arr.flatMap(x => [x, x * 2]);\nconsole.log(result); // [1, 2, 2, 4, 3, 6]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const words = ['hello', 'world'];\nconst chars = words.flatMap(w => w.split(''));\nconsole.log(chars);",
      "holeyCode": "const words = ['hello', 'world'];\nconst chars = words.___(w => w.split(''));\nconsole.log(chars);",
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
          "content": "# キーと値のペアを取得\n\n**Object.entries()**は、オブジェクトを[key, value]の配列に変換します。\n\n```javascript\nconst obj = { a: 1, b: 2 };\nconst entries = Object.entries(obj);\nconsole.log(entries); // [['a', 1], ['b', 2]]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const user = { name: 'Taro', age: 25 };\nfor (const [key, value] of Object.entries(user)) {\n  console.log(`${key}: ${value}`);\n}",
      "holeyCode": "const user = { name: 'Taro', age: 25 };\nfor (const [key, value] of Object.___(user)) {\n  console.log(`${key}: ${value}`);\n}",
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
          "content": "# 配列からオブジェクトを作成\n\n**Object.fromEntries()**は、[key, value]の配列をオブジェクトに変換します。\n\n```javascript\nconst entries = [['a', 1], ['b', 2]];\nconst obj = Object.fromEntries(entries);\nconsole.log(obj); // { a: 1, b: 2 }\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const pairs = [['name', 'Python'], ['version', '3.12']];\nconst obj = Object.fromEntries(pairs);\nconsole.log(obj);",
      "holeyCode": "const pairs = [['name', 'Python'], ['version', '3.12']];\nconst obj = Object.___(pairs);\nconsole.log(obj);",
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
          "content": "# 引数を1つずつ受け取る\n\n**カリー化**とは、複数の引数を取る関数を、引数を1つずつ受け取る関数に変換することです。\n\n```javascript\nconst add = a => b => a + b;\nconst add5 = add(5);\nconsole.log(add5(3)); // 8\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const multiply = a => b => a * b;\nconst double = multiply(2);\nconsole.log(double(5));",
      "holeyCode": "const multiply = a ___ b => a * b;\nconst double = multiply(2);\nconsole.log(double(5));",
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
          "content": "# 関数を組み合わせる\n\n**関数合成**とは、複数の関数を組み合わせて新しい関数を作ることです。\n\n```javascript\nconst compose = (f, g) => x => f(g(x));\nconst double = x => x * 2;\nconst addOne = x => x + 1;\nconst doubleThenAdd = compose(addOne, double);\nconsole.log(doubleThenAdd(5)); // 11\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const compose = (f, g) => x => f(g(x));\nconst square = x => x * x;\nconst negate = x => -x;\nconst squareThenNegate = compose(negate, square);\nconsole.log(squareThenNegate(3));",
      "holeyCode": "const compose = (f, g) => x => f(___(x));\nconst square = x => x * x;\nconst negate = x => -x;\nconst squareThenNegate = compose(negate, square);\nconsole.log(squareThenNegate(3));",
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
          "content": "# 状態を閉じ込める\n\n**クロージャ**は、関数が定義されたスコープの変数を覚えている機能です。\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());\nconsole.log(counter());",
      "holeyCode": "function createCounter() {\n  let count = 0;\n  return () => ___count;\n}\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());\nconsole.log(counter());",
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
          "content": "# 計算結果をキャッシュ\n\n**メモ化**は、関数の結果をキャッシュして同じ引数での再計算を避ける技法です。\n\n```javascript\nfunction memoize(fn) {\n  const cache = {};\n  return (x) => {\n    if (!(x in cache)) {\n      cache[x] = fn(x);\n    }\n    return cache[x];\n  };\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "function memoize(fn) {\n  const cache = {};\n  return (x) => {\n    if (!(x in cache)) {\n      cache[x] = fn(x);\n    }\n    return cache[x];\n  };\n}\nconst square = memoize(x => x * x);\nconsole.log(square(5));\nconsole.log(square(5));",
      "holeyCode": "function memoize(fn) {\n  const cache = {};\n  return (x) => {\n    if (!(x ___ cache)) {\n      cache[x] = fn(x);\n    }\n    return cache[x];\n  };\n}\nconst square = memoize(x => x * x);\nconsole.log(square(5));\nconsole.log(square(5));",
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
          "content": "# 関数を順番に適用\n\n**パイプライン**は、複数の関数を順番に適用する技法です。\n\n```javascript\nconst pipe = (...fns) => x =>\n  fns.reduce((v, f) => f(v), x);\n\nconst process = pipe(\n  x => x * 2,\n  x => x + 1,\n  x => x * 3\n);\nconsole.log(process(5)); // 33\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "const pipe = (...fns) => x =>\n  fns.reduce((v, f) => f(v), x);\n\nconst process = pipe(\n  x => x + 1,\n  x => x * 2,\n  x => x - 3\n);\nconsole.log(process(5));",
      "holeyCode": "const pipe = (...fns) => x =>\n  fns.___((___, f) => f(v), x);\n\nconst process = pipe(\n  x => x + 1,\n  x => x * 2,\n  x => x - 3\n);\nconsole.log(process(5));",
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
