export const javascriptData2 = {
  "language": "javascript",
  "lessonId": "javascript-2",
  "lessonTitle": "JavaScript II - ステップアップ！",
  "lessonDescription": "JavaScriptの基本をマスターしたら、次のステップへ！アロー関数、配列メソッド、分割代入など、モダンJavaScriptの書き方を学びましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "アロー関数 =>",
      "content": "短く関数を書ける**アロー関数**です。\\n\\n```javascript\\n// 従来の書き方\\nconst add = function(a, b) { return a + b; };\\n\\n// アロー関数\\nconst add = (a, b) => a + b;\\n```\\n\\n`=>` で引数と処理を区切ります。"
    },
    {
      "title": "配列メソッド map/filter",
      "content": "配列を変換・絞り込みする便利なメソッドです。\\n\\n```javascript\\nconst nums = [1, 2, 3];\\nnums.map(x => x * 2);    // [2, 4, 6]\\nnums.filter(x => x > 1); // [2, 3]\\n```"
    },
    {
      "title": "分割代入",
      "content": "配列やオブジェクトから値を取り出せます。\\n\\n```javascript\\nconst [a, b] = [1, 2];\\nconst {name, age} = {name: '太郎', age: 20};\\n```"
    },
    {
      "title": "スプレッド構文 ...",
      "content": "配列やオブジェクトを展開できます。\\n\\n```javascript\\nconst arr1 = [1, 2];\\nconst arr2 = [...arr1, 3]; // [1, 2, 3]\\n```"
    },
    {
      "title": "テンプレートリテラル",
      "content": "バッククォートで変数を埋め込めます。\\n\\n```javascript\\nconst name = '太郎';\\nconsole.log(`Hello, ${name}!`);\\n// => Hello, 太郎!\\n```"
    }
  ],
  "exercises": [
    {
      "title": "アロー関数",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "アロー関数とは？",
          "content": "# 短く書ける関数の書き方\\n\\n**アロー関数** は、`function` を使わずに関数を短く書く方法です。\\n`=>`（イコールと大なり）が矢印（アロー）に見えることから名付けられました。\\n\\n**身近なたとえ：**\\n同じ文章でも、長い言い方と短い言い方がありますよね。\\n「私はお腹が空きました」→「腹ペコ」のような感じです！\\n\\n**比較してみよう：**\\n```javascript\\n// 通常の関数（長い書き方）\\nfunction add(a, b) {\\n    return a + b;\\n}\\n\\n// アロー関数（短い書き方）\\nconst add = (a, b) => a + b;\\n```"
        },
        {
          "title": "アロー関数の書き方",
          "content": "# 省略できるルール\\n\\n**基本の形：**\\n```\\nconst 関数名 = (引数) => 処理;\\n```\\n\\n**省略ルール：**\\n1. 処理が1行なら `{ }` と `return` を省略できる\\n2. 引数が1つなら `( )` も省略できる\\n\\n**コード例：**\\n```javascript\\n// 引数1つ → ()省略可能\\nconst double = x => x * 2;\\n\\n// 引数なし → ()は必要\\nconst greet = () => console.log('Hi!');\\n\\n// 引数2つ以上 → ()は必要\\nconst add = (a, b) => a + b;\\n```"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "mapとは？",
          "content": "# 配列の全ての要素を変換する\\n\\n**map（マップ）** は、配列の中身を一つずつ変換して、新しい配列を作るメソッドです。\\n\\n**身近なたとえ：**\\n工場のベルトコンベアを想像してください。原料が流れてきて、全部同じ加工をして製品になりますよね。mapも同じで、配列の要素を全部同じルールで変換します！\\n\\n**コード例：**\\n```javascript\\nconst numbers = [1, 2, 3];\\nconst doubled = numbers.map(x => x * 2);\\nconsole.log(doubled);\\n```\\n**実行結果：**\\n```\\n[2, 4, 6]\\n```"
        },
        {
          "title": "mapの使い方",
          "content": "# 元の配列は変わらない！\\n\\n**大事なポイント：**\\n`map` は新しい配列を作って返します。元の配列はそのまま残ります。\\n\\n**書き方：**\\n```\\n配列.map(要素 => 変換処理)\\n```\\n\\n**コード例：**\\n```javascript\\nconst names = ['alice', 'bob'];\\n// 全部大文字に変換\\nconst upper = names.map(n => n.toUpperCase());\\nconsole.log(upper);  // ['ALICE', 'BOB']\\nconsole.log(names);  // ['alice', 'bob']（元のまま！）\\n```"
        }
      ],
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
      "description": "剰余演算子（%）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "剰余演算子（%）とは？",
          "content": "# 割り算の「余り」を求める\\n\\n**剰余演算子** `%` は、割り算の余りを計算します。\\n\\n**身近なたとえ：**\\n7個のお菓子を3人で分けると、一人2個ずつで **1個余る** よね？\\nこの「余り」を計算するのが `%` です！\\n\\n**コード例：**\\n```javascript\\nconsole.log(7 % 3);   // 1（7÷3=2 余り1）\\nconsole.log(10 % 5);  // 0（10÷5=2 余り0）\\nconsole.log(8 % 3);   // 2（8÷3=2 余り2）\\n```"
        },
        {
          "title": "偶数・奇数の判定",
          "content": "# 2で割った余りで判定しよう\\n\\n**偶数と奇数：**\\n- 偶数：2で割り切れる数（2, 4, 6, 8...）\\n- 奇数：2で割ると1余る数（1, 3, 5, 7...）\\n\\n**判定の仕組み：**\\n- `数 % 2 === 0` → 偶数！\\n- `数 % 2 === 1` → 奇数！\\n\\n**コード例：**\\n```javascript\\nconst num = 6;\\nif (num % 2 === 0) {\\n  console.log('偶数です');\\n} else {\\n  console.log('奇数です');\\n}\\n```\\n**実行結果：** 6 ÷ 2 = 3 余り0 なので...\\n```\\n偶数です\\n```"
        }
      ],
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
      "description": "累算代入演算子について学びます",
      "tutorialSlides": [
        {
          "title": "累算代入演算子（+=）とは？",
          "content": "# 変数に足し算する省略記法\\n\\n**累算代入演算子** は、変数の値を更新する短い書き方です。\\n\\n**身近なたとえ：**\\n貯金箱にお金を入れるとき、「今ある金額 + 新しいお金」になりますよね。\\n`+=` はまさにこれ！「今の値に足して更新」します。\\n\\n**比較してみよう：**\\n```javascript\\nlet count = 0;\\ncount = count + 1;  // 長い書き方\\ncount += 1;         // 短い書き方（同じ意味！）\\n```\\n\\n**実行例：**\\n```javascript\\nlet count = 0;\\ncount += 1;  // 0 + 1 = 1\\ncount += 5;  // 1 + 5 = 6\\nconsole.log(count);  // 6\\n```"
        },
        {
          "title": "-= と他の演算子",
          "content": "# 引き算・かけ算・割り算も同じ！\\n\\n| 演算子 | 意味 | 例 |\\n|:---:|:---:|:---:|\\n| `+=` | 足して更新 | x += 3 → x = x + 3 |\\n| `-=` | 引いて更新 | x -= 3 → x = x - 3 |\\n| `*=` | かけて更新 | x *= 3 → x = x * 3 |\\n| `/=` | 割って更新 | x /= 3 → x = x / 3 |\\n\\n**コード例：**\\n```javascript\\nlet x = 10;\\nx -= 3;   // 10 - 3 = 7\\nx *= 2;   // 7 * 2 = 14\\nx /= 7;   // 14 / 7 = 2\\nconsole.log(x);  // 2\\n```"
        }
      ],
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
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "論理演算子（&&と||）とは？",
          "content": "# 複数の条件を組み合わせる\\n\\n**論理演算子** は、条件を組み合わせるときに使います。\\n\\n**身近なたとえ：**\\n- 「晴れ **かつ** 暖かい」→ 両方OK ならお出かけ（**&&**）\\n- 「土曜日 **または** 日曜日」→ どちらかならお休み（**||**）\\n\\n| 記号 | 読み方 | 意味 |\\n|:---:|:---:|:---:|\\n| `&&` | アンド | 両方true → true |\\n| `\\|\\|` | オア | どちらかtrue → true |\\n\\n**コード例：**\\n```javascript\\nconst x = 5;\\nif (x > 0 && x < 10) {\\n  console.log('0より大きく10より小さい');\\n}\\n```"
        },
        {
          "title": "! で否定",
          "content": "# 条件を反転させる\\n\\n`!`（エクスクラメーション）は、true と false を **ひっくり返す** 演算子です。\\n\\n**変換ルール：**\\n- `!true` → `false`\\n- `!false` → `true`\\n\\n**身近なたとえ：**\\n「雨が降っていない」= 「雨が降っている」の反対！\\n\\n**コード例：**\\n```javascript\\nconst isRaining = false;\\n\\nif (!isRaining) {\\n  // isRaining が false なので\\n  // !false → true となり、この中が実行される\\n  console.log('雨は降っていません');\\n}\\n```"
        }
      ],
      "correctCode": "// 年齢を設定\\nconst age = 25;\\n// 20以上かつ30未満かどうか判定\\nif (age >= 20 && age < 30) {\\n    // console.log('20代です')を出力\\n    console.log('20代です');\\n}",
      "holeyCode": "// 年齢を設定\\nconst ___ = ___;\\n// 20以上かつ30未満かどうか判定\\nif (___ >= ___ ___ ___ < ___) ___\\n    // console.log('20代です')を出力\\n    ___.___('___');\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// 年齢を設定",
          "const age = 25;",
          "// 20以上かつ30未満かどうか判定",
          "if (age >= 20 && age < 30) {",
          "    // console.log('20代です')を出力",
          "    console.log('20代です');",
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "filterとは？",
          "content": "# 条件に合うものだけ選ぶ\\n\\n**filter（フィルター）** は、条件に合う要素だけを選んで新しい配列を作るメソッドです。\\n\\n**身近なたとえ：**\\nコーヒーのフィルターは、コーヒーの粉を通さずに液体だけを通しますよね。プログラムの filter も同じで、条件に合うものだけを通して残します！\\n\\n**コード例：**\\n```javascript\\nconst numbers = [1, 2, 3, 4, 5];\\n// 偶数だけを選ぶ\\nconst evens = numbers.filter(x => x % 2 === 0);\\nconsole.log(evens);\\n```\\n**実行結果：**\\n```\\n[2, 4]\\n```"
        },
        {
          "title": "filterの使い方",
          "content": "# true を返す要素だけ残る\\n\\n**filterの仕組み：**\\n1. 配列の要素を一つずつチェック\\n2. 条件が `true` の要素だけ新しい配列に入る\\n3. `false` の要素は捨てられる\\n\\n**書き方：**\\n```\\n配列.filter(要素 => 条件)\\n```\\n\\n**コード例：**\\n```javascript\\nconst words = ['hi', 'hello', 'hey'];\\n// 文字数が2より多いものだけ選ぶ\\nconst long = words.filter(w => w.length > 2);\\nconsole.log(long);\\n```\\n**実行結果：**\\n```\\n['hello', 'hey']\\n```\\n'hi' は2文字なので除外されました！"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "reduceとは？",
          "content": "# 配列を1つの値にまとめる\\n\\n**reduce（リデュース）** は、配列の全要素を処理して、1つの値にまとめるメソッドです。\\n\\n**身近なたとえ：**\\n買い物かごの中身の合計金額を計算するイメージです。\\n100円 + 200円 + 300円 = 600円 のように、一つずつ足していって最終的に1つの数字にまとめます。\\n\\n**コード例：**\\n```javascript\\nconst numbers = [1, 2, 3, 4];\\nconst sum = numbers.reduce((acc, cur) => acc + cur, 0);\\nconsole.log(sum);  // 10\\n```"
        },
        {
          "title": "reduceの仕組み",
          "content": "# 累積値と現在値\\n\\n**2つの大事な値：**\\n- `acc`（アキュムレーター）：これまでの合計（累積値）\\n- `cur`（カレント）：今見ている要素（現在値）\\n\\n**書き方：**\\n```\\n配列.reduce((累積値, 現在値) => 計算, 初期値)\\n```\\n\\n**実行の流れ：**\\n```javascript\\n[1, 2, 3].reduce((acc, cur) => acc + cur, 0)\\n```\\n1. 初期値 0 からスタート\\n2. 0 + 1 = 1\\n3. 1 + 2 = 3\\n4. 3 + 3 = 6 ← これが答え！"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "分割代入とは？",
          "content": "# 配列から一度に取り出す\\n\\n**分割代入** は、配列の中身を一度に複数の変数に取り出す便利な書き方です。\\n\\n**身近なたとえ：**\\nプレゼントの箱を開けたら、中に3つのおもちゃが入っていて、それぞれ違う人にあげるイメージです。\\n\\n**比較してみよう：**\\n```javascript\\n// 普通の書き方（長い）\\nconst arr = [1, 2];\\nconst a = arr[0];\\nconst b = arr[1];\\n\\n// 分割代入（短い！）\\nconst [a, b] = [1, 2];\\nconsole.log(a); // 1\\nconsole.log(b); // 2\\n```"
        },
        {
          "title": "分割代入の便利な使い方",
          "content": "# 関数の戻り値にも使える！\\n\\n関数が配列を返すとき、分割代入を使うと一度に受け取れます。\\n\\n**コード例：**\\n```javascript\\nfunction getPoint() {\\n    return [10, 20];\\n}\\n\\n// 戻り値を一度に受け取る\\nconst [x, y] = getPoint();\\nconsole.log(x); // 10\\nconsole.log(y); // 20\\n```\\n\\n**ポイント：**\\n左側の `[ ]` の中に、受け取りたい変数名を順番に書きます。"
        }
      ],
      "correctCode": "// 色の配列（あか、みどり、あお）から値を取り出す\\nconst colors = ['あか', 'みどり', 'あお'];\\n// second で2番目の要素を受け取る\\nconst [first, second] = colors;\\n// firstを表示\\nconsole.log(first);\\n// secondを表示\\nconsole.log(second);",
      "holeyCode": "// 色の配列（あか、みどり、あお）から値を取り出す\\nconst ___ = ['___', '___', '___'];\\n// second で2番目の要素を受け取る\\nconst [___, ___] = ___;\\n// firstを表示\\n___.___(___)___\\n// secondを表示\\n___.___(___)___",
      "correctLines": [
          "// 色の配列（あか、みどり、あお）から値を取り出す",
          "const colors = ['あか', 'みどり', 'あお'];",
          "// second で2番目の要素を受け取る",
          "const [first, second] = colors;",
          "// firstを表示",
          "console.log(first);",
          "// secondを表示",
          "console.log(second);"
        ],
      "lineHints": [
          null,
          "色の配列（あか、みどり、あお）を作ります。",
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
          "others": ["あか", "みどり", "あお", "first", "colors", "console", "log", ";"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あか\\nみどり\\n"
          }
        ]
      },
    {
      "title": "分割代入（オブジェクト）",
      "description": "分割代入（オブジェクト）の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "オブジェクトの分割代入",
          "content": "# プロパティ名で取り出す\\n\\nオブジェクトでも分割代入が使えます。**プロパティ名と同じ名前の変数** に自動で入ります。\\n\\n**身近なたとえ：**\\n名刺から「名前」と「年齢」の情報を取り出すイメージです。「名前」という項目は「名前」という変数に入ります。\\n\\n**コード例：**\\n```javascript\\nconst person = { name: 'Taro', age: 20 };\\n// { } を使って取り出す\\nconst { name, age } = person;\\nconsole.log(name); // 'Taro'\\nconsole.log(age);  // 20\\n```"
        },
        {
          "title": "よく使うパターン",
          "content": "# 関数の引数でも使える！\\n\\n関数にオブジェクトを渡すとき、必要なプロパティだけ取り出せます。\\n\\n**コード例：**\\n```javascript\\nfunction greet({ name }) {\\n    // オブジェクトから name だけ取り出す\\n    console.log(`Hello, ${name}!`);\\n}\\n\\ngreet({ name: 'Taro', age: 20 });\\n```\\n**実行結果：**\\n```\\nHello, Taro!\\n```\\n\\n**ポイント：**\\n`{ }` の中に欲しいプロパティ名を書くだけ！"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "スプレッド演算子とは？",
          "content": "# 配列を「展開」する魔法の記号\\n\\n**スプレッド演算子** `...` は、配列の中身を一つずつ展開する記号です。\\n\\n**身近なたとえ：**\\nトランプの束をテーブルに広げるイメージです。束（配列）を `...` で広げると、1枚1枚のカードになります。\\n\\n**コード例：**\\n```javascript\\nconst a = [1, 2];\\nconst b = [3, 4];\\n// 両方の配列を展開して合体！\\nconst c = [...a, ...b];\\nconsole.log(c);\\n```\\n**実行結果：**\\n```\\n[1, 2, 3, 4]\\n```"
        },
        {
          "title": "配列のコピーにも使える",
          "content": "# 配列を安全にコピーする\\n\\n`...` を使うと、配列のコピーを簡単に作れます。\\n\\n**なぜコピーが必要？**\\n普通に `=` で代入すると、同じ配列を指してしまいます。\\n`...` でコピーすれば、元の配列に影響を与えません！\\n\\n**コード例：**\\n```javascript\\nconst original = [1, 2, 3];\\nconst copy = [...original];  // コピーを作る\\ncopy.push(4);  // コピーに追加\\nconsole.log(original); // [1, 2, 3]（元のまま！）\\nconsole.log(copy);     // [1, 2, 3, 4]\\n```"
        }
      ],
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
      "description": "三項演算子について学びます",
      "tutorialSlides": [
        {
          "title": "三項演算子とは？",
          "content": "# if-else を1行で書く方法\\n\\n**三項演算子** は、if-else を短く書ける便利な書き方です。\\n\\n**書き方：**\\n```\\n条件 ? trueのときの値 : falseのときの値\\n```\\n\\n**身近なたとえ：**\\n「晴れ？傘いらない：傘いる」のように、条件によって2つのうちどちらかを選びます。\\n\\n**コード例：**\\n```javascript\\nconst age = 20;\\nconst status = age >= 18 ? '成人' : '未成年';\\nconsole.log(status); // '成人'\\n```"
        },
        {
          "title": "三項演算子の使いどころ",
          "content": "# 変数への代入に便利！\\n\\n**if-else と比較：**\\n```javascript\\n// if-else（長い）\\nlet result;\\nif (score >= 60) {\\n    result = '合格';\\n} else {\\n    result = '不合格';\\n}\\n\\n// 三項演算子（短い！）\\nconst result = score >= 60 ? '合格' : '不合格';\\n```\\n\\n**ポイント：**\\n- `?` の左に条件\\n- `?` の右に true のときの値\\n- `:` の右に false のときの値"
        }
      ],
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
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "findとは？",
          "content": "# 条件に合う最初の要素を見つける\\n\\n**find（ファインド）** は、条件に合う **最初の** 要素を返すメソッドです。\\n\\n**身近なたとえ：**\\nクラスで「身長150cm以上の人」を探すとき、最初に見つかった人を答えるイメージです。\\n\\n**ポイント：**\\n- 最初の1つだけ返す（filter は全部返す）\\n- 見つからなかったら `undefined`\\n\\n**コード例：**\\n```javascript\\nconst nums = [1, 5, 10, 15];\\nconst found = nums.find(n => n > 7);\\nconsole.log(found); // 10（最初に見つかった）\\n```"
        },
        {
          "title": "findの使い方",
          "content": "# オブジェクトの配列でも使える！\\n\\nユーザーリストから特定のIDの人を探すときなどに便利です。\\n\\n**コード例：**\\n```javascript\\nconst users = [\\n    { id: 1, name: 'Alice' },\\n    { id: 2, name: 'Bob' }\\n];\\n// id が 2 のユーザーを探す\\nconst user = users.find(u => u.id === 2);\\nconsole.log(user.name);\\n```\\n**実行結果：**\\n```\\nBob\\n```"
        }
      ],
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
      "description": "オブジェクトのショートハンドの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "プロパティのショートハンド",
          "content": "# 同じ名前なら省略できる！\\n\\n変数名とプロパティ名が同じなら、省略（ショートハンド）できます。\\n\\n**身近なたとえ：**\\n「名前は『名前』です」と言わなくても「名前」だけで伝わりますよね。それと同じです！\\n\\n**比較してみよう：**\\n```javascript\\nconst name = 'Taro';\\nconst age = 20;\\n\\n// 通常の書き方（長い）\\nconst obj1 = { name: name, age: age };\\n\\n// ショートハンド（短い！同じ意味）\\nconst obj2 = { name, age };\\n```"
        },
        {
          "title": "メソッドのショートハンド",
          "content": "# メソッドも短く書ける！\\n\\nオブジェクトの中にメソッド（関数）を書くときも省略できます。\\n\\n**比較してみよう：**\\n```javascript\\nconst obj = {\\n    // 通常の書き方\\n    greet: function() { \\n        console.log('Hi'); \\n    },\\n    \\n    // ショートハンド（: function を省略）\\n    sayBye() { \\n        console.log('Bye'); \\n    }\\n};\\n```\\n\\n**ポイント：**\\n`: function` を省略して、関数名のあとに直接 `()` を書けます。"
        }
      ],
      "correctCode": "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る\\nconst x = 10;\\n// y = 20\\nconst y = 20;\\n// ショートハンドで x をプロパティとして追加する\\nconst point = { x, y };\\n// x座標を表示\\nconsole.log(point.x);\\n// y座標を表示\\nconsole.log(point.y);",
      "holeyCode": "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る\\nconst ___ = ___;\\n// y = 20\\nconst ___ = ___;\\n// ショートハンドで x をプロパティとして追加する\\nconst ___ = { ___, ___ };\\n// x座標を表示\\n___.___(___.___)___\\n// y座標を表示\\n___.___(___.___)___",
      "correctLines": [
          "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る",
          "const x = 10;",
          "// y = 20",
          "const y = 20;",
          "// ショートハンドで x をプロパティとして追加する",
          "const point = { x, y };",
          "// x座標を表示",
          "console.log(point.x);",
          "// y座標を表示",
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
          "x座標を出力します。",
          null,
          "y座標を出力します。"
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
