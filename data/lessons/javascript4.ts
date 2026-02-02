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
            "content": "# 「全部」が条件を満たすかチェック\n\n**every()** は、配列の **全ての要素** が条件を満たしているか確認します。\n\n**身近なたとえ：**\n「クラス全員が宿題を出したか？」をチェックするイメージです。一人でも出していなければ false になります。\n\n**コード例：**\n```javascript\nconst nums = [2, 4, 6, 8];\n// 全部が偶数か？\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven);  // true（全部偶数！）\n```\n\n**ポイント：**\n- 全部 true → true\n- 1つでも false → false"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [80, 90, 75, 85] の配列を定義\nconst scores = [80, 90, 75, 85];\n// every で全要素をチェック\nconst allPassed = scores.every(score => score >= 60);\n// allPassedを出力\nconsole.log(allPassed);",
        "holeyCode": "// [80, 90, 75, 85] の配列を定義\nconst ___ = [80, 90, 75, 85];\n// every で全要素をチェック\nconst ___ = scores.every(score => score >= 60);\n// allPassedを出力\nconsole.log(___);",
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
            "content": "# 「1つでも」条件を満たすかチェック\n\n**some()** は、配列の中に **1つでも** 条件を満たすものがあるか確認します。\n\n**身近なたとえ：**\n「クラスに誕生日が今日の人はいる？」をチェックするイメージです。1人でもいれば true です。\n\n**コード例：**\n```javascript\nconst nums = [1, 3, 5, 8];\n// 偶数が1つでもあるか？\nconst hasEven = nums.some(n => n % 2 === 0);\nconsole.log(hasEven);  // true（8が偶数！）\n```\n\n**every と some の違い：**\n- every：全部 true なら true\n- some：1つでも true なら true"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [15, 22, 17, 19] の配列を定義\nconst ages = [15, 22, 17, 19];\n// some でいずれかの要素をチェック\nconst hasAdult = ages.some(age => age >= 20);\n// hasAdultを出力\nconsole.log(hasAdult);",
        "holeyCode": "// [15, 22, 17, 19] の配列を定義\nconst ___ = [15, 22, 17, 19];\n// some でいずれかの要素をチェック\nconst ___ = ages.some(age => age >= 20);\n// hasAdultを出力\nconsole.log(___);",
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
            "content": "# map して平らにする\n\n**flatMap()** は、`map` と `flat`（平坦化）を一度に行います。\n\n**身近なたとえ：**\n各人にお菓子の袋を配って、全員の袋を開けて机に広げるイメージです。「配る → 広げる」を一度に！\n\n**平坦化（へいたんか）とは？**\n配列の中の配列を「平ら」にすること。\n`[[1, 2], [3, 4]]` → `[1, 2, 3, 4]`\n\n**コード例：**\n```javascript\nconst arr = [1, 2, 3];\n// 各要素を [x, x*2] に変換して平らにする\nconst result = arr.flatMap(x => [x, x * 2]);\nconsole.log(result);  // [1, 2, 2, 4, 3, 6]\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// ['hello', 'world'] の配列を定義\nconst words = ['hello', 'world'];\n// flatMap でmapと平坦化を同時に行う\nconst chars = words.flatMap(w => w.split(''));\n// charsを出力\nconsole.log(chars);",
        "holeyCode": "// ['hello', 'world'] の配列を定義\nconst ___ = ['hello', 'world'];\n// flatMap でmapと平坦化を同時に行う\nconst ___ = words.flatMap(w => w.split(''));\n// charsを出力\nconsole.log(___);",
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
          "others": ["world", "log", "words", "chars"]
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
            "content": "# オブジェクトを [キー, 値] のペアに変換\n\n**Object.entries()** は、オブジェクトの中身を `[キー, 値]` のペアの配列に変換します。\n\n**身近なたとえ：**\n辞書（オブジェクト）の「見出し語」と「意味」をセットにして、カードにして並べるイメージです。\n\n**コード例：**\n```javascript\nconst obj = { a: 1, b: 2 };\nconst entries = Object.entries(obj);\nconsole.log(entries);\n```\n**実行結果：**\n```\n[['a', 1], ['b', 2]]\n```\n\n**ポイント：**\nfor...of と組み合わせると、キーと値を順番に処理できます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// name: 'Taro', age: 25 のオブジェクトを定義\nconst user = { name: 'Taro', age: 25 };\n// entries でキーと値のペアを取得\nfor (const [key, value] of Object.entries(user)) {\n  // テンプレートリテラルで出力\n  console.log(`${key}: ${value}`);\n}",
        "holeyCode": "// name: 'Taro', age: 25 のオブジェクトを定義\nconst ___ = { name: 'Taro', age: 25 };\n// entries でキーと値のペアを取得\nfor (const [key, value] of Object.entries(___)) {\n  // テンプレートリテラルで出力\n  console.___(`${key}: ${value}`);\n___",
        "correctLines": [
          "// name: 'Taro', age: 25 のオブジェクトを定義",
          "const user = { name: 'Taro', age: 25 };",
          "// entries でキーと値のペアを取得",
          "for (const [key, value] of Object.entries(user)) {",
          "  // テンプレートリテラルで出力",
          "  console.log(`${key}: ${value}`);",
          "}"
        ],
        "lineHints": [
          null,
          "{ name: 'Taro', age: 25 } のオブジェクトを作ります。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          null,
          "コンソールに出力します。",
          null
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
            "content": "# [キー, 値] のペアからオブジェクトを作る\n\n**Object.fromEntries()** は、`entries()` の逆で、ペアの配列からオブジェクトを作ります。\n\n**身近なたとえ：**\n「見出し語」と「意味」が書かれたカードを、辞書（オブジェクト）にまとめるイメージです。\n\n**コード例：**\n```javascript\nconst entries = [['a', 1], ['b', 2]];\nconst obj = Object.fromEntries(entries);\nconsole.log(obj);\n```\n**実行結果：**\n```\n{ a: 1, b: 2 }\n```\n\n**ポイント：**\n`entries()` → 配列に → `fromEntries()` で戻す、という変換ができます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義\nconst pairs = [['name', 'Python'], ['version', '3.12']];\n// fromEntries で配列からオブジェクトを作成\nconst obj = Object.fromEntries(pairs);\n// objを出力\nconsole.log(obj);",
        "holeyCode": "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義\nconst ___ = [['name', 'Python'], ['version', '3.12']];\n// fromEntries で配列からオブジェクトを作成\nconst ___ = Object.fromEntries(pairs);\n// objを出力\nconsole.log(___);",
        "correctLines": [
          "// name: 'Python', version: '3.12' のキーと値のペアの配列を定義",
          "const pairs = [['name', 'Python'], ['version', '3.12']];",
          "// fromEntries で配列からオブジェクトを作成",
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
            "content": "# 引数を1つずつ受け取る関数に変える\n\n**カリー化** は、複数の引数を取る関数を、引数を1つずつ受け取る関数に変換する技法です。\n\n**身近なたとえ：**\n「カレー」の語源となった数学者カリー（Curry）さんにちなんで名付けられました。\n「5を足す関数」「10をかける関数」など、一部の引数を固定した関数を簡単に作れます。\n\n**コード例：**\n```javascript\n// 普通の書き方：add(5, 3)\n// カリー化：add(5)(3) と2段階で呼べる\nconst add = a => b => a + b;\n\n// 「5を足す関数」を作る\nconst add5 = add(5);\nconsole.log(add5(3));  // 8（5 + 3）\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// => でアロー関数を連鎖させる\nconst multiply = a => b => a * b;\n// 部分適用で2倍する関数を作成\nconst double = multiply(2);\n// double(5)を出力\nconsole.log(double(5));",
        "holeyCode": "// => でアロー関数を連鎖させる\nconst ___ = a => b => a * b;\n// 部分適用で2倍する関数を作成\nconst ___ = multiply(2);\n// double(5)を出力\nconsole.___(double(5));",
        "correctLines": [
          "// => でアロー関数を連鎖させる",
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
            "title": "関数合成（かんすうごうせい）とは？",
            "content": "# 関数を組み合わせて新しい関数を作る\n\n**関数合成** は、複数の関数をつなげて、1つの新しい関数を作ることです。\n\n**身近なたとえ：**\n料理で「野菜を切る → 炒める → 味付けする」という手順をまとめて「野菜炒めを作る」という1つの手順にするイメージです。\n\n**compose の仕組み：**\n`compose(f, g)` は「gを実行してから、その結果をfに渡す」という関数を作ります。\n\n**コード例：**\n```javascript\nconst compose = (f, g) => x => f(g(x));\nconst double = x => x * 2;     // 2倍にする\nconst addOne = x => x + 1;     // 1を足す\n\n// 「2倍してから1を足す」関数を作る\nconst doubleThenAdd = compose(addOne, double);\nconsole.log(doubleThenAdd(5));  // 11（5*2=10, 10+1=11）\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// g を先に実行してfに渡す\nconst compose = (f, g) => x => f(g(x));\n// 2乗する関数\nconst square = x => x * x;\n// 符号を反転する関数\nconst negate = x => -x;\n// 関数を合成\nconst squareThenNegate = compose(negate, square);\n// squareThenNegate(3)を出力\nconsole.log(squareThenNegate(3));",
        "holeyCode": "// g を先に実行してfに渡す\nconst ___ = (f, g) => x => f(g(x));\n// 2乗する関数\nconst ___ = x => x * x;\n// 符号を反転する関数\nconst ___ = x => -x;\n// 関数を合成\nconst ___ = compose(negate, square);\n// squareThenNegate(3)を出力\nconsole.___(squareThenNegate(3));",
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
            "content": "# 状態を「閉じ込める」仕組み\n\n**クロージャ** は、関数が「自分が作られた場所の変数」を覚えておく機能です。\n\n**身近なたとえ：**\n秘密の部屋（関数）に宝物（変数）を置いて、その部屋の鍵（内部の関数）だけが宝物にアクセスできる、というイメージです。\n\n**なぜ便利？**\n- 外からは見えない「プライベートな状態」を持てる\n- カウンターなど「状態を持つ関数」を作れる\n\n**コード例：**\n```javascript\nfunction createCounter() {\n  let count = 0;  // この変数は外から見えない\n  return () => ++count;  // でもこの関数からは見える！\n}\nconst counter = createCounter();\nconsole.log(counter());  // 1\nconsole.log(counter());  // 2（ちゃんと増える！）\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// function でカウンター生成関数を定義\nfunction createCounter() {\n  // let で変数を初期化\n  let count = 0;\n  // ++ でインクリメントして返す\n  return () => ++count;\n}\n// カウンターを作成\nconst counter = createCounter();\n// 1回目の呼び出し\nconsole.log(counter());\n// 2回目の呼び出し\nconsole.log(counter());\n// 3回目の呼び出し\nconsole.log(counter());",
        "holeyCode": "// function でカウンター生成関数を定義\nfunction ___() {\n  // let で変数を初期化\n  let ___ = 0;\n  // ++ でインクリメントして返す\n  return () => ++___;\n___\n// カウンターを作成\nconst ___ = createCounter();\n// 1回目の呼び出し\nconsole.___(counter());\n// 2回目の呼び出し\nconsole.___(counter());\n// 3回目の呼び出し\nconsole.___(counter());",
        "correctLines": [
          "// function でカウンター生成関数を定義",
          "function createCounter() {",
          "  // let で変数を初期化",
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
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "++",
            "--",
            "+="
          ],
          "others": ["function", "let", "createCounter", "counter());", "counter", "count", "}", "log"]
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
            "content": "# 計算結果を保存して再利用\n\n**メモ化** は、一度計算した結果を保存（キャッシュ）しておき、同じ計算が来たら保存した結果を返す技法です。\n\n**身近なたとえ：**\n「3 × 7 = ?」と聞かれて一度計算したら、メモしておく。次に同じ質問が来たらメモを見て「21」と即答できる！\n\n**なぜ便利？**\n- 重い計算を何度もしなくて済む\n- 同じ引数での呼び出しが速くなる\n\n**仕組み：**\n```javascript\nfunction memoize(fn) {\n  const cache = {};  // 結果を保存する場所\n  return (x) => {\n    if (!(x in cache)) {  // まだ計算してない？\n      cache[x] = fn(x);   // 計算して保存\n    }\n    return cache[x];  // 保存した結果を返す\n  };\n}\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// function でメモ化関数を定義\nfunction memoize(fn) {\n  // const でキャッシュオブジェクトを作成\n  const cache = {};\n  return (x) => {\n    // in でオブジェクトにキーが存在するかチェック\n    if (!(x in cache)) {\n      // キャッシュに結果を保存\n      cache[x] = fn(x);\n    }\n    // return でキャッシュから返す\n    return cache[x];\n  };\n}\n// メモ化されたsquare関数を作成\nconst square = memoize(x => x * x);\n// square(5)を出力\nconsole.log(square(5));\nconsole.log(square(5));",
        "holeyCode": "// function でメモ化関数を定義\nfunction memoize(___) {\n  // const でキャッシュオブジェクトを作成\n  const ___ = {};\n  return (___) => {\n    // in でオブジェクトにキーが存在するかチェック\n    if (!(x in ___)) {\n      // キャッシュに結果を保存\n      cache[___] = fn(x);\n    ___\n    // return でキャッシュから返す\n    return cache[___];\n  ___\n___\n// メモ化されたsquare関数を作成\nconst ___ = memoize(x => x * x);\n// square(5)を出力\nconsole.___(square(5));\nconsole.___(square(5));",
        "correctLines": [
          "// function でメモ化関数を定義",
          "function memoize(fn) {",
          "  // const でキャッシュオブジェクトを作成",
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
          "others": ["function", "{}", "fn", "return", "memoize", "5", "cache", "x", "}", "};", "square", "log"]
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
            "content": "# 関数を順番に流す\n\n**パイプライン** は、データを複数の関数に順番に通す技法です。\n\n**身近なたとえ：**\n工場の組み立てラインを想像してください。部品が「切る → 磨く → 塗る」と順番に流れていきますよね。パイプラインも同じで、データが関数を順番に通ります。\n\n**compose との違い：**\n- compose：右から左（g → f）\n- pipe：左から右（f → g）※こっちが直感的！\n\n**コード例：**\n```javascript\nconst pipe = (...fns) => x =>\n  fns.reduce((v, f) => f(v), x);\n\nconst process = pipe(\n  x => x * 2,   // 5 * 2 = 10\n  x => x + 1,   // 10 + 1 = 11\n  x => x * 3    // 11 * 3 = 33\n);\nconsole.log(process(5));  // 33\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// const でパイプライン関数を定義\nconst pipe = (...fns) => x =>\n  // reduce で累積値 v を使って関数を連鎖\n  fns.reduce((v, f) => f(v), x);\n\n// パイプラインで関数を連結\nconst process = pipe(\n  // +1 する関数\n  x => x + 1,\n  // *2 する関数\n  x => x * 2,\n  // -3 する関数\n  x => x - 3\n);\n// process(5)を出力\nconsole.log(process(5));",
        "holeyCode": "// const でパイプライン関数を定義\nconst ___ = (...fns) => x =>\n  // reduce で累積値 v を使って関数を連鎖\n  fns.reduce((v, f) => f(v), ___);\n\n// パイプラインで関数を連結\nconst ___ = pipe(\n  // +1 する関数\n  x => x ___ 1,\n  // *2 する関数\n  x => x ___ 2,\n  // -3 する関数\n  x => x ___ 3\n___\n// process(5)を出力\nconsole.___(process(5));",
        "correctLines": [
                  "// const でパイプライン関数を定義",
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
                  null,
                  null,
                  null,
                  null
        ],
        "candidates": {
          "keywords": [
            "reduce",
            "v"
          ],
          "others": ["const", "pipe", "1", "*", "5", "x", "process", "+", "-", ");", "log"]
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
