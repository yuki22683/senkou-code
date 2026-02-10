export const javascriptData2 = {
  "language": "javascript",
  "lessonId": "javascript-2",
  "lessonTitle": "JavaScript II - ステップアップ！",
  "lessonDescription": "JavaScriptの基本をマスターしたら、次のステップへ！アロー関数、配列メソッド、分割代入など、モダンJavaScriptの書き方を学びましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "アロー関数",
      "correctCode": "// xの2乗を返すsquare関数を定義\\nconst square = x => x * x;\\n\\n// 使ってみる（引数は5）\\nconsole.log(square(5));",
      "holeyCode": "// xの2乗を返すsquare関数を定義\\nconst ___ = ___ => ___ * ___;\\n___\\n// 使ってみる（引数は5）\\n___.___(___(___));",
      "correctLines": [
          "// xの2乗を返すsquare関数を定義",
          "const square = x => x * x;",
          "",
          "// 使ってみる（引数は5）",
          "console.log(square(5));"
        ],
      "lineHints": [
          null,
          "アロー関数は `=>` を使います。",
          null,
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "=>",
            "->",
            "=",
            ":"
          ],
          "others": ["5", "square", "log", "", "x", "console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "配列のmap",
      "correctCode": "// [1, 2, 3] の各要素を3倍にする\\nconst nums = [1, 2, 3];\\n// map メソッドで変換する\\nconst tripled = nums.map(n => n * 3);\\n// tripledを表示\\nconsole.log(tripled);",
      "holeyCode": "// [1, 2, 3] の各要素を3倍にする\\nconst ___ = [___, ___, ___];\\n// map メソッドで変換する\\nconst ___ = ___.___(___=> ___ * ___);\\n// tripledを表示\\n___.___(___)___",
      "correctLines": [
          "// [1, 2, 3] の各要素を3倍にする",
          "const nums = [1, 2, 3];",
          "// map メソッドで変換する",
          "const tripled = nums.map(n => n * 3);",
          "// tripledを表示",
          "console.log(tripled);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "`map` メソッドを使います。",
          null,
          "tripled を出力します。"
        ],
        "candidates": {
          "functions": [
            "map",
            "filter",
            "forEach",
            "reduce"
          ],
          "others": ["1", "2", "3", "tripled", "nums", "n", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 3, 6, 9 ]\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "// 10を3で割った余りを計算\\nconst remainder = 10 % 3;\\n// remainderを表示\\nconsole.log(remainder);",
      "holeyCode": "// 10を3で割った余りを計算\\nconst ___ = ___ ___ ___;\\n// remainderを表示\\n___.___(___)___",
      "correctLines": [
          "// 10を3で割った余りを計算",
          "const remainder = 10 % 3;",
          "// remainderを表示",
          "console.log(remainder);"
        ],
      "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "変数remainderの値をコンソールに出力します。"
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "+"
          ],
          "others": ["remainder", "10", "3", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "累算代入演算子（+=、-=）",
      "correctCode": "// 初期値を設定\\nlet total = 0;\\n// totalに10を足す\\ntotal += 10;\\n// totalに5を足す\\ntotal += 5;\\n// totalを表示\\nconsole.log(total);",
      "holeyCode": "// 初期値を設定\\nlet ___ = ___;\\n// totalに10を足す\\n___ ___ ___;\\n// totalに5を足す\\n___ ___ ___;\\n// totalを表示\\n___.___(___)___",
      "correctLines": [
          "// 初期値を設定",
          "let total = 0;",
          "// totalに10を足す",
          "total += 10;",
          "// totalに5を足す",
          "total += 5;",
          "// totalを表示",
          "console.log(total);"
        ],
      "lineHints": [
          null,
          "変数totalを宣言し、初期値0を設定します。",
          null,
          "変数totalに10を加算して再代入する。",
          null,
          "変数totalに5を加算して再代入する。",
          null,
          "変数totalの値をコンソールに出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["total", "10", "5", "0", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "// 年齢を設定\\nconst age = 25;\\n// 20以上かつ30未満かどうか判定\\nif (age >= 20 && age < 30) {\\n    console.log('20代です');\\n}",
      "holeyCode": "// 年齢を設定\\nconst ___ = ___;\\n// 20以上かつ30未満かどうか判定\\nif (___ >= ___ ___ ___ < ___) ___\\n    ___.___('___');\\n___",
      "correctLines": [
          "// 年齢を設定",
          "const age = 25;",
          "// 20以上かつ30未満かどうか判定",
          "if (age >= 20 && age < 30) {",
          "    console.log('20代です');",
          "}"
        ],
      "lineHints": [
          null,
          "定数ageを宣言し、25を設定します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "console.log で結果を表示します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "!"
          ],
          "others": ["age", "20", "log", "}", "25", "30", "{", "console", "20代です"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20代です\\n"
          }
        ]
      },
    {
      "title": "配列のfilter",
      "correctCode": "// [5, 15, 8, 20] から 10より大きい数だけ取り出す\\nconst nums = [5, 15, 8, 20];\\n// filter メソッドで絞り込む\\nconst big = nums.filter(n => n > 10);\\n// bigを表示\\nconsole.log(big);",
      "holeyCode": "// [5, 15, 8, 20] から 10より大きい数だけ取り出す\\nconst ___ = [___, ___, ___, ___];\\n// filter メソッドで絞り込む\\nconst ___ = ___.___(___=> ___ > ___);\\n// bigを表示\\n___.___(___)___",
      "correctLines": [
          "// [5, 15, 8, 20] から 10より大きい数だけ取り出す",
          "const nums = [5, 15, 8, 20];",
          "// filter メソッドで絞り込む",
          "const big = nums.filter(n => n > 10);",
          "// bigを表示",
          "console.log(big);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "`filter` メソッドを使います。",
          null,
          "big を出力します。"
        ],
        "candidates": {
          "functions": [
            "filter",
            "map",
            "find",
            "some"
          ],
          "others": ["5", "15", "8", "20", "big", "nums", "n", "10", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 15, 20 ]\\n"
          }
        ]
      },
    {
      "title": "配列のreduce",
      "correctCode": "// [10, 20, 30] の合計を計算\\nconst nums = [10, 20, 30];\\n// reduce メソッドで累積値 acc を使う\\nconst total = nums.reduce((acc, n) => acc + n, 0);\\n// totalを表示\\nconsole.log(total);",
      "holeyCode": "// [10, 20, 30] の合計を計算\\nconst ___ = [___, ___, ___];\\n// reduce メソッドで累積値 acc を使う\\nconst ___ = ___.___((___, ___) => ___ + ___, ___);\\n// totalを表示\\n___.___(___)___",
      "correctLines": [
          "// [10, 20, 30] の合計を計算",
          "const nums = [10, 20, 30];",
          "// reduce メソッドで累積値 acc を使う",
          "const total = nums.reduce((acc, n) => acc + n, 0);",
          "// totalを表示",
          "console.log(total);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "`reduce` を使い、累積値は `acc` です。",
          null,
          "total を出力します。"
        ],
        "candidates": {
          "functions": [
            "reduce"
          ],
          "variables": [
            "acc",
            "sum",
            "total"
          ],
          "others": ["10", "20", "30", "nums", "n", "0", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "分割代入（配列）",
      "correctCode": "// ['赤', '緑', '青'] から値を取り出す\\nconst colors = ['赤', '緑', '青'];\\n// second で2番目の要素を受け取る\\nconst [first, second] = colors;\\n// firstを表示\\nconsole.log(first);\\n// secondを表示\\nconsole.log(second);",
      "holeyCode": "// ['赤', '緑', '青'] から値を取り出す\\nconst ___ = ['___', '___', '___'];\\n// second で2番目の要素を受け取る\\nconst [___, ___] = ___;\\n// firstを表示\\n___.___(___)___\\n// secondを表示\\n___.___(___)___",
      "correctLines": [
          "// ['赤', '緑', '青'] から値を取り出す",
          "const colors = ['赤', '緑', '青'];",
          "// second で2番目の要素を受け取る",
          "const [first, second] = colors;",
          "// firstを表示",
          "console.log(first);",
          "// secondを表示",
          "console.log(second);"
        ],
      "lineHints": [
          null,
          "['赤', '緑', '青'] の配列を作ります。",
          null,
          "2番目の変数名は `second` です。",
          null,
          "first を出力します。",
          null,
          "second を出力します。"
        ],
        "candidates": {
          "variables": [
            "second",
            "third",
            "last",
            "next"
          ],
          "others": ["赤", "緑", "青", "first", "colors", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "赤\\n緑\\n"
          }
        ]
      },
    {
      "title": "分割代入（オブジェクト）",
      "correctCode": "// name: 'アリス', score: 100 のオブジェクトから値を取り出す\\nconst user = { name: 'アリス', score: 100 };\\n// name プロパティを取り出す\\nconst { name, score } = user;\\n// nameを表示\\nconsole.log(name);\\n// scoreを表示\\nconsole.log(score);",
      "holeyCode": "// name: 'アリス', score: 100 のオブジェクトから値を取り出す\\nconst ___ = { ___: '___', ___: ___ };\\n// name プロパティを取り出す\\nconst { ___, ___ } = ___;\\n// nameを表示\\n___.___(___)___\\n// scoreを表示\\n___.___(___)___",
      "correctLines": [
          "// name: 'アリス', score: 100 のオブジェクトから値を取り出す",
          "const user = { name: 'アリス', score: 100 };",
          "// name プロパティを取り出す",
          "const { name, score } = user;",
          "// nameを表示",
          "console.log(name);",
          "// scoreを表示",
          "console.log(score);"
        ],
      "lineHints": [
          null,
          "{ name: 'アリス', score: 100 } のオブジェクトを作ります。",
          null,
          "プロパティ名と同じ `name` を使います。",
          null,
          "name を出力します。",
          null,
          "score を出力します。"
        ],
        "candidates": {
          "variables": [
            "名前",
            "user",
            "value",
            "key"
          ],
          "others": ["アリス", "100", "score", "name", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "アリス\\n100\\n"
          }
        ]
      },
    {
      "title": "スプレッド演算子（配列）",
      "correctCode": "// [1, 2] と [3, 4] の2つの配列を合体させる\\nconst arr1 = [1, 2];\\n// arr2を定義する\\nconst arr2 = [3, 4];\\n// ... スプレッド演算子で展開する\\nconst merged = [...arr1, ...arr2];\\n// mergedを表示\\nconsole.log(merged);",
      "holeyCode": "// [1, 2] と [3, 4] の2つの配列を合体させる\\nconst ___ = [___, ___];\\n// arr2を定義する\\nconst ___ = [___, ___];\\n// ... スプレッド演算子で展開する\\nconst ___ = [_______, _______];\\n// mergedを表示\\n___.___(___)___",
      "correctLines": [
          "// [1, 2] と [3, 4] の2つの配列を合体させる",
          "const arr1 = [1, 2];",
          "// arr2を定義する",
          "const arr2 = [3, 4];",
          "// ... スプレッド演算子で展開する",
          "const merged = [...arr1, ...arr2];",
          "// mergedを表示",
          "console.log(merged);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "スプレッド演算子は `...` です。",
          null,
          "merged を出力します。"
        ],
        "candidates": {
          "operators": [
            "...",
            "..",
            "***",
            "::"
          ],
          "others": ["1", "2", "3", "4", "merged", "arr1", "arr2", "...arr1, ...arr2];", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 1, 2, 3, 4 ]\\n"
          }
        ]
      },
    {
      "title": "三項演算子",
      "correctCode": "// 数値 5 が正か負かを判定\\nconst num = 5;\\n// ? で三項演算子を使う\\nconst sign = num >= 0 ? '正' : '負';\\n// signを表示\\nconsole.log(sign);",
      "holeyCode": "// 数値 5 が正か負かを判定\\nconst ___ = ___;\\n// ? で三項演算子を使う\\nconst ___ = ___ >= ___ ___ '___' ___ '___';\\n// signを表示\\n___.___(___)___",
      "correctLines": [
          "// 数値 5 が正か負かを判定",
          "const num = 5;",
          "// ? で三項演算子を使う",
          "const sign = num >= 0 ? '正' : '負';",
          "// signを表示",
          "console.log(sign);"
        ],
      "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "三項演算子は `?` で真の値を、`:` で偽の値を指定します。",
          null,
          "sign を出力します。"
        ],
        "candidates": {
          "operators": [
            "?",
            ":",
            "&&",
            "||"
          ],
          "others": ["5", "sign", "num", "0", "正", "負", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "正\\n"
          }
        ]
      },
    {
      "title": "配列のfind",
      "correctCode": "// [1, 3, 4, 7, 8] から最初の偶数を見つける\\nconst numbers = [1, 3, 4, 7, 8];\\n// find メソッドで最初の要素を探す\\nconst firstEven = numbers.find(n => n % 2 === 0);\\n// firstEvenを表示\\nconsole.log(firstEven);",
      "holeyCode": "// [1, 3, 4, 7, 8] から最初の偶数を見つける\\nconst ___ = [___, ___, ___, ___, ___];\\n// find メソッドで最初の要素を探す\\nconst ___ = ___.___(___=> ___ ___ ___ === ___);\\n// firstEvenを表示\\n___.___(___)___",
      "correctLines": [
          "// [1, 3, 4, 7, 8] から最初の偶数を見つける",
          "const numbers = [1, 3, 4, 7, 8];",
          "// find メソッドで最初の要素を探す",
          "const firstEven = numbers.find(n => n % 2 === 0);",
          "// firstEvenを表示",
          "console.log(firstEven);"
        ],
      "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "`find` メソッドを使います。",
          null,
          "firstEven を出力します。"
        ],
        "candidates": {
          "functions": [
            "find",
            "filter",
            "some",
            "findIndex"
          ],
          "others": ["1", "3", "4", "7", "8", "firstEven", "numbers", "n", "%", "2", "0", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\\n"
          }
        ]
      },
    {
      "title": "オブジェクトのショートハンド",
      "correctCode": "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る\\nconst x = 10;\\n// y = 20\\nconst y = 20;\\n// ショートハンドで x をプロパティとして追加する\\nconst point = { x, y };\\n// point.xを表示\\nconsole.log(point.x);\\n// point.yを表示\\nconsole.log(point.y);",
      "holeyCode": "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る\\nconst ___ = ___;\\n// y = 20\\nconst ___ = ___;\\n// ショートハンドで x をプロパティとして追加する\\nconst ___ = { ___, ___ };\\n// point.xを表示\\n___.___(___.___)___\\n// point.yを表示\\n___.___(___.___)___",
      "correctLines": [
          "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る",
          "const x = 10;",
          "// y = 20",
          "const y = 20;",
          "// ショートハンドで x をプロパティとして追加する",
          "const point = { x, y };",
          "// point.xを表示",
          "console.log(point.x);",
          "// point.yを表示",
          "console.log(point.y);"
        ],
      "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "定数を宣言し、数値を代入します。",
          null,
          "変数名がそのままプロパティ名になる `x` を使います。",
          null,
          "point.x を出力します。",
          null,
          "point.y を出力します。"
        ],
        "candidates": {
          "variables": [
            "x",
            "x: x",
            "point",
            "value"
          ],
          "others": ["10", "20", "y", "log", "console", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n20\\n"
          }
        ]
      }
  ]
};
