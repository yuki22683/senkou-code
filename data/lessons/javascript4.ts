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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "every()とは？",
          "content": "# 「全部」が条件を満たすかチェック\\n\\n**every()** は、配列の **全ての要素** が条件を満たしているか確認します。\\n\\n**身近なたとえ：**\\n「クラス全員が宿題を出したか？」をチェックするイメージです。一人でも出していなければ false になります。\\n\\n**コード例：**\\n```javascript\\nconst nums = [2, 4, 6, 8];\\n// 全部が偶数か？\\nconst allEven = nums.every(n => n % 2 === 0);\\nconsole.log(allEven);  // true（全部偶数！）\\n```\\n\\n**ポイント：**\\n- 全部 true → true\\n- 1つでも false → false"
        }
      ],
      "correctCode": "// 数値配列（80、90、75、85）をscoresに代入\\nconst scores = [80, 90, 75, 85];\\n// scoresのeveryメソッドで全要素が60以上かチェックしallPassedに代入\\nconst allPassed = scores.every(score => score >= 60);\\n// consoleのlogメソッドでallPassedを表示\\nconsole.log(allPassed);",
      "holeyCode": "// 数値配列（80、90、75、85）をscoresに代入\\nconst ___ = [___, ___, ___, ___];\\n// scoresのeveryメソッドで全要素が60以上かチェックしallPassedに代入\\nconst ___ = ___.___(___ => ___ >= ___);\\n// consoleのlogメソッドでallPassedを表示\\n___.___(__);",
      "correctLines": [
          "// 数値配列（80、90、75、85）をscoresに代入",
          "const scores = [80, 90, 75, 85];",
          "// scoresのeveryメソッドで全要素が60以上かチェックしallPassedに代入",
          "const allPassed = scores.every(score => score >= 60);",
          "// consoleのlogメソッドでallPassedを表示",
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "some()とは？",
          "content": "# 「1つでも」条件を満たすかチェック\\n\\n**some()** は、配列の中に **1つでも** 条件を満たすものがあるか確認します。\\n\\n**身近なたとえ：**\\n「クラスに誕生日が今日の人はいる？」をチェックするイメージです。1人でもいれば true です。\\n\\n**コード例：**\\n```javascript\\nconst nums = [1, 3, 5, 8];\\n// 偶数が1つでもあるか？\\nconst hasEven = nums.some(n => n % 2 === 0);\\nconsole.log(hasEven);  // true（8が偶数！）\\n```\\n\\n**every と some の違い：**\\n- every：全部 true なら true\\n- some：1つでも true なら true"
        }
      ],
      "correctCode": "// 数値配列（15、22、17、19）をagesに代入\\nconst ages = [15, 22, 17, 19];\\n// agesのsomeメソッドで20以上の要素があるかチェックしhasAdultに代入\\nconst hasAdult = ages.some(age => age >= 20);\\n// consoleのlogメソッドでhasAdultを表示\\nconsole.log(hasAdult);",
      "holeyCode": "// 数値配列（15、22、17、19）をagesに代入\\nconst ___ = [___, ___, ___, ___];\\n// agesのsomeメソッドで20以上の要素があるかチェックしhasAdultに代入\\nconst ___ = ___.___(__ => ___ ___ ___);\\n// consoleのlogメソッドでhasAdultを表示\\n___.___(___);",
      "correctLines": [
          "// 数値配列（15、22、17、19）をagesに代入",
          "const ages = [15, 22, 17, 19];",
          "// agesのsomeメソッドで20以上の要素があるかチェックしhasAdultに代入",
          "const hasAdult = ages.some(age => age >= 20);",
          "// consoleのlogメソッドでhasAdultを表示",
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
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "flatMap()とは？",
          "content": "# map して平らにする\\n\\n**flatMap()** は、`map` と `flat`（平坦化）を一度に行います。\\n\\n**身近なたとえ：**\\n各人にお菓子の袋を配って、全員の袋を開けて机に広げるイメージです。「配る → 広げる」を一度に！\\n\\n**平坦化とは？**\\n配列の中の配列を「平ら」にすること。\\n`[[1, 2], [3, 4]]` → `[1, 2, 3, 4]`\\n\\n**コード例：**\\n```javascript\\nconst arr = [1, 2, 3];\\n// 各要素を [x, x*2] に変換して平らにする\\nconst result = arr.flatMap(x => [x, x * 2]);\\nconsole.log(result);  // [1, 2, 2, 4, 3, 6]\\n```"
        }
      ],
      "correctCode": "// 文字列配列（'hello'、'world'）をwordsに代入\\nconst words = ['hello', 'world'];\\n// wordsのflatMapメソッドで各要素をsplitで1文字ずつ分割しcharsに代入\\nconst chars = words.flatMap(w => w.split(''));\\n// consoleのlogメソッドでcharsを表示\\nconsole.log(chars);",
      "holeyCode": "// 文字列配列（'hello'、'world'）をwordsに代入\\nconst ___ = [___, ___];\\n// wordsのflatMapメソッドで各要素をsplitで1文字ずつ分割しcharsに代入\\nconst ___ = ___.___(___ => ___.___(___));\\n// consoleのlogメソッドでcharsを表示\\n___.___(___);",
      "correctLines": [
          "// 文字列配列（'hello'、'world'）をwordsに代入",
          "const words = ['hello', 'world'];",
          "// wordsのflatMapメソッドで各要素をsplitで1文字ずつ分割しcharsに代入",
          "const chars = words.flatMap(w => w.split(''));",
          "// consoleのlogメソッドでcharsを表示",
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
      "description": "Object.entriesの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Object.entries()とは？",
          "content": "# オブジェクトを [キー, 値] のペアに変換\\n\\n**Object.entries()** は、オブジェクトの中身を `[キー, 値]` のペアの配列に変換します。\\n\\n**身近なたとえ：**\\n辞書（オブジェクト）の「見出し語」と「意味」をセットにして、カードにして並べるイメージです。\\n\\n**コード例：**\\n```javascript\\nconst obj = { a: 1, b: 2 };\\nconst entries = Object.entries(obj);\\nconsole.log(entries);\\n```\\n**実行結果：**\\n```\\n[['a', 1], ['b', 2]]\\n```\\n\\n**ポイント：**\\nfor...of と組み合わせると、キーと値を順番に処理できます。"
        }
      ],
      "correctCode": "// nameに'たろう'、ageに25を持つオブジェクトをuserに代入\\nconst user = { name: 'たろう', age: 25 };\\n// Objectのentriesメソッドでuserからキーkeyと値valueを取得しループ\\nfor (const [key, value] of Object.entries(user)) {\\n  // consoleのlogメソッドでテンプレートリテラルを表示\\n  console.log(`${key}: ${value}`);\\n}",
      "holeyCode": "// nameに'たろう'、ageに25を持つオブジェクトをuserに代入\\nconst ___ = { ___: ___, ___: ___ };\\n// Objectのentriesメソッドでuserからキーkeyと値valueを取得しループ\\nfor (const [___, ___] of ___.___(___)) {\\n  // consoleのlogメソッドでテンプレートリテラルを表示\\n  ___.___(___);\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// nameに'たろう'、ageに25を持つオブジェクトをuserに代入",
          "const user = { name: 'たろう', age: 25 };",
          "// Objectのentriesメソッドでuserからキーkeyと値valueを取得しループ",
          "for (const [key, value] of Object.entries(user)) {",
          "  // consoleのlogメソッドでテンプレートリテラルを表示",
          "  console.log(`${key}: ${value}`);",
          "}"
        ],
      "lineHints": [
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
            "entries",
            "keys",
            "values"
          ],
          "others": ["user", "name", "'たろう'", "age", "25", "key", "value", "Object", "`${key}: ${value}`", "console", "log", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "name: たろう\\nage: 25\\n"
          }
        ]
      },
    {
      "title": "Object.fromEntries",
      "description": "Object.fromEntriesの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Object.fromEntries()とは？",
          "content": "# [キー, 値] のペアからオブジェクトを作る\\n\\n**Object.fromEntries()** は、`entries()` の逆で、ペアの配列からオブジェクトを作ります。\\n\\n**身近なたとえ：**\\n「見出し語」と「意味」が書かれたカードを、辞書（オブジェクト）にまとめるイメージです。\\n\\n**コード例：**\\n```javascript\\nconst entries = [['a', 1], ['b', 2]];\\nconst obj = Object.fromEntries(entries);\\nconsole.log(obj);\\n```\\n**実行結果：**\\n```\\n{ a: 1, b: 2 }\\n```\\n\\n**ポイント：**\\n`entries()` → 配列に → `fromEntries()` で戻す、という変換ができます。"
        }
      ],
      "correctCode": "// キーと値のペア配列（'名前'-'Python'、'バージョン'-'3.12'）をpairsに代入\\nconst pairs = [['名前', 'Python'], ['バージョン', '3.12']];\\n// ObjectのfromEntriesメソッドでpairsをオブジェクトに変換しobjに代入\\nconst obj = Object.fromEntries(pairs);\\n// consoleのlogメソッドでobjを表示\\nconsole.log(obj);",
      "holeyCode": "// キーと値のペア配列（'名前'-'Python'、'バージョン'-'3.12'）をpairsに代入\\nconst ___ = [[___, ___], [___, ___]];\\n// ObjectのfromEntriesメソッドでpairsをオブジェクトに変換しobjに代入\\nconst ___ = ___.___(___);\\n// consoleのlogメソッドでobjを表示\\n___.___(___);",
      "correctLines": [
          "// キーと値のペア配列（'名前'-'Python'、'バージョン'-'3.12'）をpairsに代入",
          "const pairs = [['名前', 'Python'], ['バージョン', '3.12']];",
          "// ObjectのfromEntriesメソッドでpairsをオブジェクトに変換しobjに代入",
          "const obj = Object.fromEntries(pairs);",
          "// consoleのlogメソッドでobjを表示",
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
      "description": "カリー化について学びます",
      "tutorialSlides": [
        {
          "title": "カリー化とは？",
          "content": "# 引数を1つずつ受け取る関数に変える\\n\\n**カリー化** は、複数の引数を取る関数を、引数を1つずつ受け取る関数に変換する技法です。\\n\\n**身近なたとえ：**\\n「カレー」の語源となった数学者カリー（Curry）さんにちなんで名付けられました。\\n「5を足す関数」「10をかける関数」など、一部の引数を固定した関数を簡単に作れます。\\n\\n**コード例：**\\n```javascript\\n// 普通の書き方：add(5, 3)\\n// カリー化：add(5)(3) と2段階で呼べる\\nconst add = a => b => a + b;\\n\\n// 「5を足す関数」を作る\\nconst add5 = add(5);\\nconsole.log(add5(3));  // 8（5 + 3）\\n```"
        }
      ],
      "correctCode": "// aとbの積を返すmultiply関数を定義（カリー化）\\nconst multiply = a => b => a * b;\\n// multiply関数に2を適用してdoubleに代入\\nconst double = multiply(2);\\n// consoleのlogメソッドでdouble関数（引数5）の結果を表示\\nconsole.log(double(5));",
      "holeyCode": "// aとbの積を返すmultiply関数を定義（カリー化）\\nconst ___ = ___ => ___ => ___ ___ ___;\\n// multiply関数に2を適用してdoubleに代入\\nconst ___ = ___(___);\\n// consoleのlogメソッドでdouble関数（引数5）の結果を表示\\n___.___(___(_));",
      "correctLines": [
          "// aとbの積を返すmultiply関数を定義（カリー化）",
          "const multiply = a => b => a * b;",
          "// multiply関数に2を適用してdoubleに代入",
          "const double = multiply(2);",
          "// consoleのlogメソッドでdouble関数（引数5）の結果を表示",
          "console.log(double(5));"
        ],
      "lineHints": [
          null,
          "アロー関数を連鎖させて a * b を返します。",
          null,
          "multiply(2) で2倍する関数を作ります。",
          null,
          "5を2倍した結果を出力します。"
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
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "関数合成とは？",
          "content": "# 関数を組み合わせて新しい関数を作る\\n\\n**関数合成** は、複数の関数をつなげて、1つの新しい関数を作ることです。\\n\\n**身近なたとえ：**\\n料理で「野菜を切る → 炒める → 味付けする」という手順をまとめて「野菜炒めを作る」という1つの手順にするイメージです。\\n\\n**compose の仕組み：**\\n`compose(f, g)` は「gを実行してから、その結果をfに渡す」という関数を作ります。\\n\\n**コード例：**\\n```javascript\\nconst compose = (f, g) => x => f(g(x));\\nconst double = x => x * 2;     // 2倍にする\\nconst addOne = x => x + 1;     // 1を足す\\n\\n// 「2倍してから1を足す」関数を作る\\nconst doubleThenAdd = compose(addOne, double);\\nconsole.log(doubleThenAdd(5));  // 11（5*2=10, 10+1=11）\\n```"
        }
      ],
      "correctCode": "// compose関数を定義（gを先に実行してfに渡す）\\nconst compose = (f, g) => x => f(g(x));\\n// xを2乗するsquare関数を定義\\nconst square = x => x * x;\\n// xの符号を反転するnegate関数を定義\\nconst negate = x => -x;\\n// compose関数でnegateとsquareを合成しsquareThenNegateに代入\\nconst squareThenNegate = compose(negate, square);\\n// consoleのlogメソッドでsquareThenNegate関数（引数3）の結果を表示\\nconsole.log(squareThenNegate(3));",
      "holeyCode": "// compose関数を定義（gを先に実行してfに渡す）\\nconst ___ = (___, ___) => ___ => ___(___(___));\\n// xを2乗するsquare関数を定義\\nconst ___ = ___ => ___ ___ ___;\\n// xの符号を反転するnegate関数を定義\\nconst ___ = ___ => ______;\\n// compose関数でnegateとsquareを合成しsquareThenNegateに代入\\nconst ___ = ___(___, ___);\\n// consoleのlogメソッドでsquareThenNegate関数（引数3）の結果を表示\\n___.___(___(_));",
      "correctLines": [
          "// compose関数を定義（gを先に実行してfに渡す）",
          "const compose = (f, g) => x => f(g(x));",
          "// xを2乗するsquare関数を定義",
          "const square = x => x * x;",
          "// xの符号を反転するnegate関数を定義",
          "const negate = x => -x;",
          "// compose関数でnegateとsquareを合成しsquareThenNegateに代入",
          "const squareThenNegate = compose(negate, square);",
          "// consoleのlogメソッドでsquareThenNegate関数（引数3）の結果を表示",
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
      "description": "クロージャについて学びます",
      "tutorialSlides": [
        {
          "title": "クロージャとは？",
          "content": "# 状態を「閉じ込める」仕組み\\n\\n**クロージャ** は、関数が「自分が作られた場所の変数」を覚えておく機能です。\\n\\n**身近なたとえ：**\\n秘密の部屋（関数）に宝物（変数）を置いて、その部屋の鍵（内部の関数）だけが宝物にアクセスできる、というイメージです。\\n\\n**なぜ便利？**\\n- 外からは見えない「プライベートな状態」を持てる\\n- カウンターなど「状態を持つ関数」を作れる\\n\\n**コード例：**\\n```javascript\\nfunction createCounter() {\\n  let count = 0;  // この変数は外から見えない\\n  return () => ++count;  // でもこの関数からは見える！\\n}\\nconst counter = createCounter();\\nconsole.log(counter());  // 1\\nconsole.log(counter());  // 2（ちゃんと増える！）\\n```"
        }
      ],
      "correctCode": "// createCounter関数を定義\\nfunction createCounter() {\\n  // countを0で初期化\\n  let count = 0;\\n  // countをインクリメントして返す\\n  return () => ++count;\\n}\\n// createCounter関数を呼び出してcounterに代入\\nconst counter = createCounter();\\n// consoleのlogメソッドでcounter関数の結果を表示（1回目）\\nconsole.log(counter());\\n// consoleのlogメソッドでcounter関数の結果を表示（2回目）\\nconsole.log(counter());\\n// consoleのlogメソッドでcounter関数の結果を表示（3回目）\\nconsole.log(counter());",
      "holeyCode": "// createCounter関数を定義\\nfunction ___() {\\n  // countを0で初期化\\n  let ___ = ___;\\n  // countをインクリメントして返す\\n  return () => ______;\\n// ブロックを閉じる\\n___\\n// createCounter関数を呼び出してcounterに代入\\nconst ___ = ___();\\n// consoleのlogメソッドでcounter関数の結果を表示（1回目）\\n___.___(_());\\n// consoleのlogメソッドでcounter関数の結果を表示（2回目）\\n___.___(_());\\n// consoleのlogメソッドでcounter関数の結果を表示（3回目）\\n___.___(_());",
      "correctLines": [
          "// createCounter関数を定義",
          "function createCounter() {",
          "  // countを0で初期化",
          "  let count = 0;",
          "  // countをインクリメントして返す",
          "  return () => ++count;",
          "}",
          "// createCounter関数を呼び出してcounterに代入",
          "const counter = createCounter();",
          "// consoleのlogメソッドでcounter関数の結果を表示（1回目）",
          "console.log(counter());",
          "// consoleのlogメソッドでcounter関数の結果を表示（2回目）",
          "console.log(counter());",
          "// consoleのlogメソッドでcounter関数の結果を表示（3回目）",
          "console.log(counter());"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          "",
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
            "++",
            "--",
            "+="
          ],
          "others": ["createCounter", "count", "0", "++count", "++count;", "counter", "console", "log", "}", "// カウンターを作成", "の呼び出し", "// counter関数を呼び出し（2回目）", "// counter関数を呼び出し（3回目）", "nter関数を呼び出し（1回目）"]
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
      "description": "メモ化の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "メモ化とは？",
          "content": "# 計算結果を保存して再利用\\n\\n**メモ化** は、一度計算した結果を保存（キャッシュ）しておき、同じ計算が来たら保存した結果を返す技法です。\\n\\n**身近なたとえ：**\\n「3 × 7 = ?」と聞かれて一度計算したら、メモしておく。次に同じ質問が来たらメモを見て「21」と即答できる！\\n\\n**なぜ便利？**\\n- 重い計算を何度もしなくて済む\\n- 同じ引数での呼び出しが速くなる\\n\\n**フィボナッチ数列の例：**\\n```javascript\\nconst memo = {};\\nfunction fib(n) {\\n  if (n in memo) return memo[n];  // 計算済み？\\n  if (n <= 1) return n;\\n  memo[n] = fib(n-1) + fib(n-2);  // 保存\\n  return memo[n];\\n}\\n```\\n\\n**演習では：** 汎用的なmemoize関数を作ってみましょう！"
        }
      ],
      "correctCode": "// memoize関数を定義\\nfunction memoize(fn) {\\n  // 空オブジェクトをcacheに代入\\n  const cache = {};\\n  return (x) => {\\n    // xがcacheに存在しないかチェック\\n    if (!(x in cache)) {\\n      // cacheのキーxにfn関数（引数x）の結果を保存\\n      cache[x] = fn(x);\\n    }\\n    // cacheのキーxの値を返す\\n    return cache[x];\\n  };\\n}\\n// memoize関数でxを2乗する関数をsquareに代入\\nconst square = memoize(x => x * x);\\n// consoleのlogメソッドでsquare関数（引数5）の結果を表示\\nconsole.log(square(5));\\n// consoleのlogメソッドでsquare関数（引数5）の結果を表示（キャッシュから取得）\\nconsole.log(square(5));",
      "holeyCode": "// memoize関数を定義\\nfunction ___(___) {\\n  // 空オブジェクトをcacheに代入\\n  const ___ = ___;\\n  // ブロックを開始\\n  return (___) => {\\n    // xがcacheに存在しないかチェック\\n    if (!(___ in ___)) {\\n      // cacheのキーxにfn関数（引数x）の結果を保存\\n      ___[___] = ___(___);\\n    // ブロックを閉じる\\n    ___\\n    // cacheのキーxの値を返す\\n    return ___[___];\\n  // ブロックを閉じる\\n  ___\\n// ブロックを閉じる\\n___\\n// memoize関数でxを2乗する関数をsquareに代入\\nconst ___ = ___(___ => ___ ___ ___);\\n// consoleのlogメソッドでsquare関数（引数5）の結果を表示\\n___.___(___(___));\\n// consoleのlogメソッドでsquare関数（引数5）の結果を表示（キャッシュから取得）\\n___.___(___(___));",
      "correctLines": [
          "// memoize関数を定義",
          "function memoize(fn) {",
          "  // 空オブジェクトをcacheに代入",
          "  const cache = {};",
          "  return (x) => {",
          "    // xがcacheに存在しないかチェック",
          "    if (!(x in cache)) {",
          "      // cacheのキーxにfn関数（引数x）の結果を保存",
          "      cache[x] = fn(x);",
          "    }",
          "    // cacheのキーxの値を返す",
          "    return cache[x];",
          "  };",
          "}",
          "// memoize関数でxを2乗する関数をsquareに代入",
          "const square = memoize(x => x * x);",
          "// consoleのlogメソッドでsquare関数（引数5）の結果を表示",
          "console.log(square(5));",
          "// consoleのlogメソッドでsquare関数（引数5）の結果を表示（キャッシュから取得）",
          "console.log(square(5));"
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
          "",
          null,
          "",
          null,
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "in",
            "of",
            "has"
          ],
          "others": ["memoize", "fn", "cache", "{}", "x", "*", "square", "5", "console", "log", "}", "};", "でオブジェクトにキーが存在するかチェック", "ャッシュに結果を保存", "return cache[x];", "nst square = memoize(x => x * x);", "console.log(square(5));", "e.log(square(5));"]
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
      "description": "パイプラインについて学びます",
      "tutorialSlides": [
        {
          "title": "パイプラインとは？",
          "content": "# 関数を順番に流す\\n\\n**パイプライン** は、データを複数の関数に順番に通す技法です。\\n\\n**身近なたとえ：**\\n工場の組み立てラインを想像してください。部品が「切る → 磨く → 塗る」と順番に流れていきますよね。パイプラインも同じで、データが関数を順番に通ります。\\n\\n**compose との違い：**\\n- compose：右から左（g → f）\\n- pipe：左から右（f → g）※こっちが直感的！\\n\\n**コード例：**\\n```javascript\\nconst pipe = (...fns) => x =>\\n  fns.reduce((v, f) => f(v), x);\\n\\nconst process = pipe(\\n  x => x * 2,   // 5 * 2 = 10\\n  x => x + 1,   // 10 + 1 = 11\\n  x => x * 3    // 11 * 3 = 33\\n);\\nconsole.log(process(5));  // 33\\n```"
        }
      ],
      "correctCode": "// pipe関数を定義\\nconst pipe = (...fns) => x =>\\n  // fnsのreduceメソッドで関数を連鎖（累積値v、関数f）\\n  fns.reduce((v, f) => f(v), x);\\n\\n// pipe関数で複数の関数を連結しprocessに代入\\nconst process = pipe(\\n  // xに1を足す関数\\n  x => x + 1,\\n  // xを2倍する関数\\n  x => x * 2,\\n  // xから3を引く関数\\n  x => x - 3\\n);\\n// consoleのlogメソッドでprocess関数（引数5）の結果を表示\\nconsole.log(process(5));",
      "holeyCode": "// pipe関数を定義\\nconst ___ = (...___) => ___ =>\\n  // fnsのreduceメソッドで関数を連鎖（累積値v、関数f）\\n  ___.___((___, ___) => ___(_), ___);\\n___\\n// pipe関数で複数の関数を連結しprocessに代入\\nconst ___ = ___(\\n  // xに1を足す関数\\n  ___ => ___ ___ ___,\\n  // xを2倍する関数\\n  ___ => ___ ___ ___,\\n  // xから3を引く関数\\n  ___ => ___ ___ ___\\n// 関数呼び出しを閉じる\\n___\\n// consoleのlogメソッドでprocess関数（引数5）の結果を表示\\n___.___(___(___));",
      "correctLines": [
          "// pipe関数を定義",
          "const pipe = (...fns) => x =>",
          "  // fnsのreduceメソッドで関数を連鎖（累積値v、関数f）",
          "  fns.reduce((v, f) => f(v), x);",
          "",
          "// pipe関数で複数の関数を連結しprocessに代入",
          "const process = pipe(",
          "  // xに1を足す関数",
          "  x => x + 1,",
          "  // xを2倍する関数",
          "  x => x * 2,",
          "  // xから3を引く関数",
          "  x => x - 3",
          ");",
          "// consoleのlogメソッドでprocess関数（引数5）の結果を表示",
          "console.log(process(5));"
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
          "",
          null
        ],
        "candidates": {
          "keywords": [
            "reduce",
            "map",
            "filter"
          ],
          "others": ["pipe", "fns", "x", "v", "f", "+", "*", "-", "1", "2", "3", "5", "process", "console", "log", "", ");", "// 5を処理した結果を出力"]
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
