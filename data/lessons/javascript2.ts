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
      "description": "関数をもっと短く書ける「アロー関数」を学びましょう。モダンJavaScriptでよく使われる書き方です。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "アロー関数とは？",
          "content": "# => を使った短い関数\n\n`function` の代わりに `=>` を使うと、関数を短く書けます。\n\n```javascript\n// 通常の関数\nfunction add(a, b) {\n    return a + b;\n}\n\n// アロー関数\nconst add = (a, b) => a + b;\n```"
        },
        {
          "title": "アロー関数の書き方",
          "content": "# 省略できる部分\n\n- 1行の場合、`{}` と `return` を省略可能\n- 引数が1つなら `()` も省略可能\n\n```javascript\nconst double = x => x * 2;\nconst greet = () => console.log('Hi!');\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// アロー関数で2乗を計算\nconst square = x => x * x;\n\n// 使ってみる\nconsole.log(square(5));",
      "holeyCode": "// アロー関数で2乗を計算\nconst square = x ___ x * x;\n\n// 使ってみる\nconsole.log(square(5));",
      "correctLines": [
        "// アロー関数で2乗を計算",
        "const square = x => x * x;",
        "",
        "// 使ってみる",
        "console.log(square(5));"
      ],
      "lineHints": [
        null,
        "アロー関数は `=>` を使います。",
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["=>", "->", "=", ":"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "配列のmap",
      "description": "配列の各要素を変換して新しい配列を作る `map` メソッドを学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "mapとは？",
          "image": "/illustrations/common/list.png",
          "content": "# 各要素を変換する\n\n`map` は配列の各要素に関数を適用して、新しい配列を作ります。\n\n```javascript\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(x => x * 2);\nconsole.log(doubled); // [2, 4, 6]\n```"
        },
        {
          "title": "mapの使い方",
          "image": "/illustrations/common/list.png",
          "content": "# 元の配列は変わらない\n\n`map` は新しい配列を返し、元の配列は変更しません。\n\n```javascript\nconst names = ['alice', 'bob'];\nconst upper = names.map(n => n.toUpperCase());\nconsole.log(upper); // ['ALICE', 'BOB']\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列の各要素を3倍にする\nconst nums = [1, 2, 3];\nconst tripled = nums.map(n => n * 3);\nconsole.log(tripled);",
      "holeyCode": "// 配列の各要素を3倍にする\nconst nums = [1, 2, 3];\nconst tripled = nums.___(n => n * 3);\nconsole.log(tripled);",
      "correctLines": [
        "// 配列の各要素を3倍にする",
        "const nums = [1, 2, 3];",
        "const tripled = nums.map(n => n * 3);",
        "console.log(tripled);"
      ],
      "lineHints": [
        null,
        null,
        "`map` メソッドを使います。",
        null
      ],
      "candidates": {
        "functions": ["map", "filter", "forEach", "reduce"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[ 3, 6, 9 ]\n"
        }
      ]
    },
    {
      "title": "配列のfilter",
      "description": "条件に合う要素だけを取り出す `filter` メソッドを学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "filterとは？",
          "image": "/illustrations/common/if.png",
          "content": "# 条件でフィルタリング\n\n`filter` は条件に合う要素だけを集めた新しい配列を作ります。\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(x => x % 2 === 0);\nconsole.log(evens); // [2, 4]\n```"
        },
        {
          "title": "filterの使い方",
          "image": "/illustrations/common/if.png",
          "content": "# trueを返す要素だけ残る\n\n関数が `true` を返す要素だけが新しい配列に入ります。\n\n```javascript\nconst words = ['hi', 'hello', 'hey'];\nconst long = words.filter(w => w.length > 2);\nconsole.log(long); // ['hello', 'hey']\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 10より大きい数だけ取り出す\nconst nums = [5, 15, 8, 20];\nconst big = nums.filter(n => n > 10);\nconsole.log(big);",
      "holeyCode": "// 10より大きい数だけ取り出す\nconst nums = [5, 15, 8, 20];\nconst big = nums.___(n => n > 10);\nconsole.log(big);",
      "correctLines": [
        "// 10より大きい数だけ取り出す",
        "const nums = [5, 15, 8, 20];",
        "const big = nums.filter(n => n > 10);",
        "console.log(big);"
      ],
      "lineHints": [
        null,
        null,
        "`filter` メソッドを使います。",
        null
      ],
      "candidates": {
        "functions": ["filter", "map", "find", "some"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[ 15, 20 ]\n"
        }
      ]
    },
    {
      "title": "配列のreduce",
      "description": "配列の要素を1つの値にまとめる `reduce` メソッドを学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "reduceとは？",
          "image": "/illustrations/common/list.png",
          "content": "# 要素をまとめる\n\n`reduce` は配列の全要素を処理して、1つの値にまとめます。\n\n```javascript\nconst numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, cur) => acc + cur, 0);\nconsole.log(sum); // 10\n```"
        },
        {
          "title": "reduceの仕組み",
          "image": "/illustrations/common/list.png",
          "content": "# 累積値と現在値\n\n- `acc`: 累積値（前回の結果）\n- `cur`: 現在の要素\n- 第2引数: 初期値\n\n```javascript\n// 合計を計算\n[1, 2, 3].reduce((acc, cur) => acc + cur, 0)\n// 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列の合計を計算\nconst nums = [10, 20, 30];\nconst total = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(total);",
      "holeyCode": "// 配列の合計を計算\nconst nums = [10, 20, 30];\nconst total = nums.___((___, n) => acc + n, 0);\nconsole.log(total);",
      "correctLines": [
        "// 配列の合計を計算",
        "const nums = [10, 20, 30];",
        "const total = nums.reduce((acc, n) => acc + n, 0);",
        "console.log(total);"
      ],
      "lineHints": [
        null,
        null,
        "`reduce` を使い、累積値は `acc` です。",
        null
      ],
      "candidates": {
        "functions": ["reduce"],
        "variables": ["acc", "sum", "total"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60\n"
        }
      ]
    },
    {
      "title": "分割代入（配列）",
      "description": "配列の要素を個別の変数に簡単に取り出す「分割代入」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "配列の分割代入",
          "image": "/illustrations/common/box.png",
          "content": "# 一度に複数の変数へ\n\n配列の要素を、対応する変数に一度に代入できます。\n\n```javascript\nconst [a, b] = [1, 2];\nconsole.log(a); // 1\nconsole.log(b); // 2\n```"
        },
        {
          "title": "便利な使い方",
          "image": "/illustrations/common/box.png",
          "content": "# 関数の戻り値にも使える\n\n```javascript\nfunction getPoint() {\n    return [10, 20];\n}\n\nconst [x, y] = getPoint();\nconsole.log(x, y); // 10 20\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 配列から値を取り出す\nconst colors = ['red', 'green', 'blue'];\nconst [first, second] = colors;\nconsole.log(first);\nconsole.log(second);",
      "holeyCode": "// 配列から値を取り出す\nconst colors = ['red', 'green', 'blue'];\nconst [first, ___] = colors;\nconsole.log(first);\nconsole.log(second);",
      "correctLines": [
        "// 配列から値を取り出す",
        "const colors = ['red', 'green', 'blue'];",
        "const [first, second] = colors;",
        "console.log(first);",
        "console.log(second);"
      ],
      "lineHints": [
        null,
        null,
        "2番目の変数名は `second` です。",
        null,
        null
      ],
      "candidates": {
        "variables": ["second", "third", "last", "next"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "red\ngreen\n"
        }
      ]
    },
    {
      "title": "分割代入（オブジェクト）",
      "description": "オブジェクトのプロパティを個別の変数に取り出す方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "オブジェクトの分割代入",
          "image": "/illustrations/common/dict.png",
          "content": "# プロパティ名で取り出す\n\nオブジェクトのプロパティを、同名の変数に取り出せます。\n\n```javascript\nconst person = { name: 'Taro', age: 20 };\nconst { name, age } = person;\nconsole.log(name); // 'Taro'\n```"
        },
        {
          "title": "よく使うパターン",
          "image": "/illustrations/common/dict.png",
          "content": "# 関数の引数でも使える\n\n```javascript\nfunction greet({ name }) {\n    console.log(`Hello, ${name}!`);\n}\n\ngreet({ name: 'Taro', age: 20 });\n// => Hello, Taro!\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// オブジェクトから値を取り出す\nconst user = { name: 'Alice', score: 100 };\nconst { name, score } = user;\nconsole.log(name);\nconsole.log(score);",
      "holeyCode": "// オブジェクトから値を取り出す\nconst user = { name: 'Alice', score: 100 };\nconst { ___, score } = user;\nconsole.log(name);\nconsole.log(score);",
      "correctLines": [
        "// オブジェクトから値を取り出す",
        "const user = { name: 'Alice', score: 100 };",
        "const { name, score } = user;",
        "console.log(name);",
        "console.log(score);"
      ],
      "lineHints": [
        null,
        null,
        "プロパティ名と同じ `name` を使います。",
        null,
        null
      ],
      "candidates": {
        "variables": ["name", "user", "value", "key"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n100\n"
        }
      ]
    },
    {
      "title": "スプレッド演算子（配列）",
      "description": "配列を展開する `...` （スプレッド演算子）を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "スプレッド演算子とは？",
          "image": "/illustrations/common/list.png",
          "content": "# 配列を展開する\n\n`...` を使うと、配列の要素を個別に展開できます。\n\n```javascript\nconst a = [1, 2];\nconst b = [3, 4];\nconst c = [...a, ...b];\nconsole.log(c); // [1, 2, 3, 4]\n```"
        },
        {
          "title": "コピーにも使える",
          "image": "/illustrations/common/list.png",
          "content": "# 配列のコピー\n\n```javascript\nconst original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original); // [1, 2, 3]\nconsole.log(copy);     // [1, 2, 3, 4]\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 2つの配列を合体させる\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2];\nconsole.log(merged);",
      "holeyCode": "// 2つの配列を合体させる\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [___arr1, ...arr2];\nconsole.log(merged);",
      "correctLines": [
        "// 2つの配列を合体させる",
        "const arr1 = [1, 2];",
        "const arr2 = [3, 4];",
        "const merged = [...arr1, ...arr2];",
        "console.log(merged);"
      ],
      "lineHints": [
        null,
        null,
        null,
        "スプレッド演算子は `...` です。",
        null
      ],
      "candidates": {
        "operators": ["...", "..", "***", "::"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[ 1, 2, 3, 4 ]\n"
        }
      ]
    },
    {
      "title": "三項演算子",
      "description": "if-elseを1行で書ける「三項演算子」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "三項演算子とは？",
          "image": "/illustrations/common/if.png",
          "content": "# 条件 ? 真の値 : 偽の値\n\nif-elseを短く書く方法です。\n\n```javascript\nconst age = 20;\nconst status = age >= 18 ? '成人' : '未成年';\nconsole.log(status); // '成人'\n```"
        },
        {
          "title": "使いどころ",
          "image": "/illustrations/common/if.png",
          "content": "# 変数への代入に便利\n\n```javascript\nconst score = 85;\nconst result = score >= 60 ? '合格' : '不合格';\n\n// 同じ意味のif文\nlet result2;\nif (score >= 60) {\n    result2 = '合格';\n} else {\n    result2 = '不合格';\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 数値が正か負かを判定\nconst num = 5;\nconst sign = num >= 0 ? 'positive' : 'negative';\nconsole.log(sign);",
      "holeyCode": "// 数値が正か負かを判定\nconst num = 5;\nconst sign = num >= 0 ___ 'positive' : 'negative';\nconsole.log(sign);",
      "correctLines": [
        "// 数値が正か負かを判定",
        "const num = 5;",
        "const sign = num >= 0 ? 'positive' : 'negative';",
        "console.log(sign);"
      ],
      "lineHints": [
        null,
        null,
        "三項演算子は `?` で真の値を、`:` で偽の値を指定します。",
        null
      ],
      "candidates": {
        "operators": ["?", ":", "&&", "||"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "positive\n"
        }
      ]
    },
    {
      "title": "配列のfind",
      "description": "条件に合う最初の要素を見つける `find` メソッドを学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "findとは？",
          "image": "/illustrations/common/list.png",
          "content": "# 条件に合う最初の要素を返す\n\n`find` は条件を満たす最初の要素を返します。見つからなければ `undefined` になります。\n\n```javascript\nconst nums = [1, 5, 10, 15];\nconst found = nums.find(n => n > 7);\nconsole.log(found); // 10\n```"
        },
        {
          "title": "findの使い方",
          "image": "/illustrations/common/list.png",
          "content": "# オブジェクトの配列でも使える\n\n```javascript\nconst users = [\n    { id: 1, name: 'Alice' },\n    { id: 2, name: 'Bob' }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user.name); // 'Bob'\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 偶数を見つける\nconst numbers = [1, 3, 4, 7, 8];\nconst firstEven = numbers.find(n => n % 2 === 0);\nconsole.log(firstEven);",
      "holeyCode": "// 偶数を見つける\nconst numbers = [1, 3, 4, 7, 8];\nconst firstEven = numbers.___(n => n % 2 === 0);\nconsole.log(firstEven);",
      "correctLines": [
        "// 偶数を見つける",
        "const numbers = [1, 3, 4, 7, 8];",
        "const firstEven = numbers.find(n => n % 2 === 0);",
        "console.log(firstEven);"
      ],
      "lineHints": [
        null,
        null,
        "`find` メソッドを使います。",
        null
      ],
      "candidates": {
        "functions": ["find", "filter", "some", "findIndex"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "4\n"
        }
      ]
    },
    {
      "title": "オブジェクトのショートハンド",
      "description": "オブジェクトを作るときの便利な省略記法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "プロパティの省略",
          "image": "/illustrations/common/dict.png",
          "content": "# 変数名とプロパティ名が同じ場合\n\n変数名とプロパティ名が同じなら、省略できます。\n\n```javascript\nconst name = 'Taro';\nconst age = 20;\n\n// 通常\nconst obj1 = { name: name, age: age };\n\n// ショートハンド\nconst obj2 = { name, age };\n```"
        },
        {
          "title": "メソッドの省略",
          "image": "/illustrations/common/dict.png",
          "content": "# function を省略\n\nオブジェクト内のメソッドも短く書けます。\n\n```javascript\nconst obj = {\n    // 通常\n    greet: function() { console.log('Hi'); },\n    \n    // ショートハンド\n    sayBye() { console.log('Bye'); }\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// ショートハンドでオブジェクトを作る\nconst x = 10;\nconst y = 20;\nconst point = { x, y };\nconsole.log(point.x);\nconsole.log(point.y);",
      "holeyCode": "// ショートハンドでオブジェクトを作る\nconst x = 10;\nconst y = 20;\nconst point = { ___, y };\nconsole.log(point.x);\nconsole.log(point.y);",
      "correctLines": [
        "// ショートハンドでオブジェクトを作る",
        "const x = 10;",
        "const y = 20;",
        "const point = { x, y };",
        "console.log(point.x);",
        "console.log(point.y);"
      ],
      "lineHints": [
        null,
        null,
        null,
        "変数名がそのままプロパティ名になる `x` を使います。",
        null,
        null
      ],
      "candidates": {
        "variables": ["x", "x: x", "point", "value"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n20\n"
        }
      ]
    }
  ]
};
