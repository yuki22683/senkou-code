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
            "content": "# 短く書ける関数の書き方\\\\n\\\\n**アロー関数** は、`function` を使わずに関数を短く書く方法です。\\\\n`=>`（イコールと大なり）が矢印（アロー）に見えることから名付けられました。\\\\n\\\\n**身近なたとえ：**\\\\n同じ文章でも、長い言い方と短い言い方がありますよね。\\\\n「私はお腹が空きました」→「腹ペコ」のような感じです！\\\\n\\\\n**比較してみよう：**\\\\n```javascript\\\\n// 通常の関数（長い書き方）\\\\nfunction add(a, b) {\\\\n    return a + b;\\\\n}\\\\n\\\\n// アロー関数（短い書き方）\\\\nconst add = (a, b) => a + b;\\\\n```"
          },
          {
            "title": "アロー関数の書き方",
            "content": "# 省略できるルール\\\\n\\\\n**基本の形：**\\\\n```\\\\nconst 関数名 = (引数) => 処理;\\\\n```\\\\n\\\\n**省略ルール：**\\\\n1. 処理が1行なら `{ }` と `return` を省略できる\\\\n2. 引数が1つなら `( )` も省略できる\\\\n\\\\n**コード例：**\\\\n```javascript\\\\n// 引数1つ → ()省略可能\\\\nconst double = x => x * 2;\\\\n\\\\n// 引数なし → ()は必要\\\\nconst greet = () => console.log('Hi!');\\\\n\\\\n// 引数2つ以上 → ()は必要\\\\nconst add = (a, b) => a + b;\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// => でアロー関数を定義する\\\\nconst square = x => x * x;\\\\n\\\\n// 使ってみる（引数は5）\\\\nconsole.log(square(5));",
        "holeyCode": "// => でアロー関数を定義する\\\\nconst square = x ___ x * x;\\\\n\\\\n// 使ってみる（引数は5）\\\\nconsole.log(square(___));",
        "correctLines": [
          "// => でアロー関数を定義する",
          "const square = x => x * x;",
          "",
          "// 使ってみる（引数は5）",
          "console.log(square(5));"
        ],
        "lineHints": [
          null,
          "アロー関数は `=>` を使います。",
          "square(5) で5の2乗を計算します。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "=>",
            "->",
            "=",
            ":"
          ],
          "others": [
            "5"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\\\n"
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
            "content": "# 配列の全ての要素を変換する\\\\n\\\\n**map（マップ）** は、配列の中身を一つずつ変換して、新しい配列を作るメソッドです。\\\\n\\\\n**身近なたとえ：**\\\\n工場のベルトコンベアを想像してください。原料が流れてきて、全部同じ加工をして製品になりますよね。mapも同じで、配列の要素を全部同じルールで変換します！\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst numbers = [1, 2, 3];\\\\nconst doubled = numbers.map(x => x * 2);\\\\nconsole.log(doubled);\\\\n```\\\\n**実行結果：**\\\\n```\\\\n[2, 4, 6]\\\\n```"
          },
          {
            "title": "mapの使い方",
            "content": "# 元の配列は変わらない！\\\\n\\\\n**大事なポイント：**\\\\n`map` は新しい配列を作って返します。元の配列はそのまま残ります。\\\\n\\\\n**書き方：**\\\\n```\\\\n配列.map(要素 => 変換処理)\\\\n```\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst names = ['アリス', 'ボブ'];\\\\n// 全部大文字に変換\\\\nconst upper = names.map(n => n.toUpperCase());\\\\nconsole.log(upper);  // ['アリス', 'ボブ']\\\\nconsole.log(names);  // ['アリス', 'ボブ']（元のまま！）\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [1, 2, 3] の各要素を3倍にする\\\\nconst nums = [1, 2, 3];\\\\n// map メソッドで変換する\\\\nconst tripled = nums.map(n => n * 3);\\\\n// tripledを表示\\\\nconsole.log(tripled);",
        "holeyCode": "// [1, 2, 3] の各要素を3倍にする\\\\nconst nums = [___, ___, ___];\\\\n// map メソッドで変換する\\\\nconst tripled = nums.___(n => n * 3);\\\\n// tripledを表示\\\\nconsole.log(___);",
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
          "others": [
            "1",
            "2",
            "3",
            "tripled"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 3, 6, 9 ]\\\\n"
          }
        ]
      },
    {
        "title": "剰余演算子（%）",
        "description": "割り算の「余り」を求める演算子を学びましょう。偶数・奇数の判定などに便利です。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "剰余演算子（%）とは？",
            "content": "# 割り算の「余り」を求める\\\\n\\\\n**剰余演算子（じょうよえんざんし）** `%` は、割り算の余りを計算します。\\\\n\\\\n**身近なたとえ：**\\\\n7個のお菓子を3人で分けると、一人2個ずつで **1個余る** よね？\\\\nこの「余り」を計算するのが `%` です！\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconsole.log(7 % 3);   // 1（7÷3=2 余り1）\\\\nconsole.log(10 % 5);  // 0（10÷5=2 余り0）\\\\nconsole.log(8 % 3);   // 2（8÷3=2 余り2）\\\\n```"
          },
          {
            "title": "偶数・奇数の判定",
            "content": "# 2で割った余りで判定しよう\\\\n\\\\n**偶数（ぐうすう）と奇数（きすう）：**\\\\n- 偶数：2で割り切れる数（2, 4, 6, 8...）\\\\n- 奇数：2で割ると1余る数（1, 3, 5, 7...）\\\\n\\\\n**判定の仕組み：**\\\\n- `数 % 2 === 0` → 偶数！\\\\n- `数 % 2 === 1` → 奇数！\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst num = 6;\\\\nif (num % 2 === 0) {\\\\n  console.log('偶数です');\\\\n} else {\\\\n  console.log('奇数です');\\\\n}\\\\n```\\\\n**実行結果：** 6 ÷ 2 = 3 余り0 なので...\\\\n```\\\\n偶数です\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 10を3で割った余りを計算\\\\nconst remainder = 10 % 3;\\\\n// 結果を表示\\\\nconsole.log(remainder);",
        "holeyCode": "// 10を3で割った余りを計算\\\\nconst remainder = 10 ___ 3;\\\\n// 結果を表示\\\\nconsole.log(remainder);",
        "correctLines": [
          "// 10を3で割った余りを計算",
          "const remainder = 10 % 3;",
          "// 結果を表示",
          "console.log(remainder);"
        ],
        "lineHints": [
          null,
          "定数を宣言し、数値を代入します。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "+"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\n"
          }
        ]
      },
    {
        "title": "累算代入演算子（+=、-=）",
        "description": "変数の値を増やしたり減らしたりする便利な書き方を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "累算代入演算子（+=）とは？",
            "content": "# 変数に足し算する省略記法\\\\n\\\\n**累算代入演算子（るいさんだいにゅうえんざんし）** は、変数の値を更新する短い書き方です。\\\\n\\\\n**身近なたとえ：**\\\\n貯金箱にお金を入れるとき、「今ある金額 + 新しいお金」になりますよね。\\\\n`+=` はまさにこれ！「今の値に足して更新」します。\\\\n\\\\n**比較してみよう：**\\\\n```javascript\\\\nlet count = 0;\\\\ncount = count + 1;  // 長い書き方\\\\ncount += 1;         // 短い書き方（同じ意味！）\\\\n```\\\\n\\\\n**実行例：**\\\\n```javascript\\\\nlet count = 0;\\\\ncount += 1;  // 0 + 1 = 1\\\\ncount += 5;  // 1 + 5 = 6\\\\nconsole.log(count);  // 6\\\\n```"
          },
          {
            "title": "-= と他の演算子",
            "content": "# 引き算・かけ算・割り算も同じ！\\\\n\\\\n| 演算子 | 意味 | 例 |\\\\n|:---:|:---:|:---:|\\\\n| `+=` | 足して更新 | x += 3 → x = x + 3 |\\\\n| `-=` | 引いて更新 | x -= 3 → x = x - 3 |\\\\n| `*=` | かけて更新 | x *= 3 → x = x * 3 |\\\\n| `/=` | 割って更新 | x /= 3 → x = x / 3 |\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nlet x = 10;\\\\nx -= 3;   // 10 - 3 = 7\\\\nx *= 2;   // 7 * 2 = 14\\\\nx /= 7;   // 14 / 7 = 2\\\\nconsole.log(x);  // 2\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 初期値を設定\\\\nlet total = 0;\\\\n// totalに10を足す\\\\ntotal += 10;\\\\n// totalに5を足す\\\\ntotal += 5;\\\\n// 結果を表示\\\\nconsole.log(total);",
        "holeyCode": "// 初期値を設定\\\\nlet total = 0;\\\\n// totalに10を足す\\\\ntotal ___ 10;\\\\n// totalに5を足す\\\\ntotal ___ 5;\\\\n// 結果を表示\\\\nconsole.log(total);",
        "correctLines": [
          "// 初期値を設定",
          "let total = 0;",
          "// totalに10を足す",
          "total += 10;",
          "// totalに5を足す",
          "total += 5;",
          "// 結果を表示",
          "console.log(total);"
        ],
        "lineHints": [
          null,
          "変数の値を計算して、その結果を同じ変数に再代入します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\\\n"
          }
        ]
      },
    {
        "title": "論理演算子（&&、||）",
        "description": "複数の条件を組み合わせる論理演算子を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "論理演算子（&&と||）とは？",
            "content": "# 複数の条件を組み合わせる\\\\n\\\\n**論理演算子（ろんりえんざんし）** は、条件を組み合わせるときに使います。\\\\n\\\\n**身近なたとえ：**\\\\n- 「晴れ **かつ** 暖かい」→ 両方OK ならお出かけ（**&&**）\\\\n- 「土曜日 **または** 日曜日」→ どちらかならお休み（**||**）\\\\n\\\\n| 記号 | 読み方 | 意味 |\\\\n|:---:|:---:|:---:|\\\\n| `&&` | アンド | 両方true → true |\\\\n| `\\|\\|` | オア | どちらかtrue → true |\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst x = 5;\\\\nif (x > 0 && x < 10) {\\\\n  console.log('0より大きく10より小さい');\\\\n}\\\\n```"
          },
          {
            "title": "! で否定（ひてい）",
            "content": "# 条件を反転させる\\\\n\\\\n`!`（エクスクラメーション）は、true と false を **ひっくり返す** 演算子です。\\\\n\\\\n**変換ルール：**\\\\n- `!true` → `false`\\\\n- `!false` → `true`\\\\n\\\\n**身近なたとえ：**\\\\n「雨が降っていない」= 「雨が降っている」の反対！\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst isRaining = false;\\\\n\\\\nif (!isRaining) {\\\\n  // isRaining が false なので\\\\n  // !false → true となり、この中が実行される\\\\n  console.log('雨は降っていません');\\\\n}\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 年齢を設定\\\\nconst age = 25;\\\\n// 20以上かつ30未満かどうか判定\\\\nif (age >= 20 && age < 30) {\\\\n    console.log('20代です');\\\\n}",
        "holeyCode": "// 年齢を設定\\\\nconst age = 25;\\\\n// 20以上かつ30未満かどうか判定\\\\nif (age >= 20 ___ age < 30) {\\\\n    console.log('20代です');\\\\n}",
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
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "!"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20代です\\\\n"
          }
        ]
      },
    {
        "title": "配列のfilter",
        "description": "条件に合う要素だけを取り出す `filter` メソッドを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "filterとは？",
            "content": "# 条件に合うものだけ選ぶ\\\\n\\\\n**filter（フィルター）** は、条件に合う要素だけを選んで新しい配列を作るメソッドです。\\\\n\\\\n**身近なたとえ：**\\\\nコーヒーのフィルターは、コーヒーの粉を通さずに液体だけを通しますよね。プログラムの filter も同じで、条件に合うものだけを通して残します！\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst numbers = [1, 2, 3, 4, 5];\\\\n// 偶数だけを選ぶ\\\\nconst evens = numbers.filter(x => x % 2 === 0);\\\\nconsole.log(evens);\\\\n```\\\\n**実行結果：**\\\\n```\\\\n[2, 4]\\\\n```"
          },
          {
            "title": "filterの使い方",
            "content": "# true を返す要素だけ残る\\\\n\\\\n**filterの仕組み：**\\\\n1. 配列の要素を一つずつチェック\\\\n2. 条件が `true` の要素だけ新しい配列に入る\\\\n3. `false` の要素は捨てられる\\\\n\\\\n**書き方：**\\\\n```\\\\n配列.filter(要素 => 条件)\\\\n```\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst words = ['こんにちは', 'こんにちは', 'おーい'];\\\\n// 文字数が2より多いものだけ選ぶ\\\\nconst long = words.filter(w => w.length > 2);\\\\nconsole.log(long);\\\\n```\\\\n**実行結果：**\\\\n```\\\\n['こんにちは', 'おーい']\\\\n```\\\\n'こんにちは' は2文字なので除外されました！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [5, 15, 8, 20] から 10より大きい数だけ取り出す\\\\nconst nums = [5, 15, 8, 20];\\\\n// filter メソッドで絞り込む\\\\nconst big = nums.filter(n => n > 10);\\\\n// bigを表示\\\\nconsole.log(big);",
        "holeyCode": "// [5, 15, 8, 20] から 10より大きい数だけ取り出す\\\\nconst nums = [___, ___, ___, ___];\\\\n// filter メソッドで絞り込む\\\\nconst big = nums.___(n => n > 10);\\\\n// bigを表示\\\\nconsole.log(___);",
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
          "others": [
            "5",
            "15",
            "8",
            "20",
            "big"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 15, 20 ]\\\\n"
          }
        ]
      },
    {
        "title": "配列のreduce",
        "description": "配列の要素を1つの値にまとめる `reduce` メソッドを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "reduceとは？",
            "content": "# 配列を1つの値にまとめる\\\\n\\\\n**reduce（リデュース）** は、配列の全要素を処理して、1つの値にまとめるメソッドです。\\\\n\\\\n**身近なたとえ：**\\\\n買い物かごの中身の合計金額を計算するイメージです。\\\\n100円 + 200円 + 300円 = 600円 のように、一つずつ足していって最終的に1つの数字にまとめます。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst numbers = [1, 2, 3, 4];\\\\nconst sum = numbers.reduce((acc, cur) => acc + cur, 0);\\\\nconsole.log(sum);  // 10\\\\n```"
          },
          {
            "title": "reduceの仕組み",
            "content": "# 累積値（るいせきち）と現在値（げんざいち）\\\\n\\\\n**2つの大事な値：**\\\\n- `acc`（アキュムレーター）：これまでの合計（累積値）\\\\n- `cur`（カレント）：今見ている要素（現在値）\\\\n\\\\n**書き方：**\\\\n```\\\\n配列.reduce((累積値, 現在値) => 計算, 初期値)\\\\n```\\\\n\\\\n**実行の流れ：**\\\\n```javascript\\\\n[1, 2, 3].reduce((acc, cur) => acc + cur, 0)\\\\n```\\\\n1. 初期値 0 からスタート\\\\n2. 0 + 1 = 1\\\\n3. 1 + 2 = 3\\\\n4. 3 + 3 = 6 ← これが答え！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [10, 20, 30] の合計を計算\\\\nconst nums = [10, 20, 30];\\\\n// reduce メソッドで累積値 acc を使う\\\\nconst total = nums.reduce((acc, n) => acc + n, 0);\\\\n// totalを表示\\\\nconsole.log(total);",
        "holeyCode": "// [10, 20, 30] の合計を計算\\\\nconst nums = [___, ___, ___];\\\\n// reduce メソッドで累積値 acc を使う\\\\nconst total = nums.___((___, n) => acc + n, 0);\\\\n// totalを表示\\\\nconsole.log(___);",
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
          "others": [
            "10",
            "20",
            "30"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\\\n"
          }
        ]
      },
    {
        "title": "分割代入（配列）",
        "description": "配列の要素を個別の変数に簡単に取り出す「分割代入」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "分割代入（ぶんかつだいにゅう）とは？",
            "content": "# 配列から一度に取り出す\\\\n\\\\n**分割代入** は、配列の中身を一度に複数の変数に取り出す便利な書き方です。\\\\n\\\\n**身近なたとえ：**\\\\nプレゼントの箱を開けたら、中に3つのおもちゃが入っていて、それぞれ違う人にあげるイメージです。\\\\n\\\\n**比較してみよう：**\\\\n```javascript\\\\n// 普通の書き方（長い）\\\\nconst arr = [1, 2];\\\\nconst a = arr[0];\\\\nconst b = arr[1];\\\\n\\\\n// 分割代入（短い！）\\\\nconst [a, b] = [1, 2];\\\\nconsole.log(a); // 1\\\\nconsole.log(b); // 2\\\\n```"
          },
          {
            "title": "分割代入の便利な使い方",
            "content": "# 関数の戻り値にも使える！\\\\n\\\\n関数が配列を返すとき、分割代入を使うと一度に受け取れます。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nfunction getPoint() {\\\\n    return [10, 20];\\\\n}\\\\n\\\\n// 戻り値を一度に受け取る\\\\nconst [x, y] = getPoint();\\\\nconsole.log(x); // 10\\\\nconsole.log(y); // 20\\\\n```\\\\n\\\\n**ポイント：**\\\\n左側の `[ ]` の中に、受け取りたい変数名を順番に書きます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// ['赤', '緑', '青'] から値を取り出す\\\nconst colors = ['赤', '緑', '青'];\\\n// second で2番目の要素を受け取る\\\nconst [first, second] = colors;\\\n// firstを表示\\\nconsole.log(first);\\\n// secondを表示\\\nconsole.log(second);",
        "holeyCode": "// ['赤', '緑', '青'] から値を取り出す\\\\nconst colors = ['___', '___', '___'];\\\\n// second で2番目の要素を受け取る\\\\nconst [first, ___] = colors;\\\\n// firstを表示\\\\nconsole.log(___);\\\\n// secondを表示\\\\nconsole.log(___);",
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
          "others": [
            "red",
            "green",
            "blue",
            "first"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "red\\\\ngreen\\\\n"
          }
        ]
      },
    {
        "title": "分割代入（オブジェクト）",
        "description": "オブジェクトのプロパティを個別の変数に取り出す方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "オブジェクトの分割代入",
            "content": "# プロパティ名で取り出す\\\\n\\\\nオブジェクトでも分割代入が使えます。**プロパティ名と同じ名前の変数** に自動で入ります。\\\\n\\\\n**身近なたとえ：**\\\\n名刺から「名前」と「年齢」の情報を取り出すイメージです。「名前」という項目は「名前」という変数に入ります。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst person = { name: '太郎', age: 20 };\\\\n// { } を使って取り出す\\\\nconst { name, age } = person;\\\\nconsole.log(name); // '太郎'\\\\nconsole.log(age);  // 20\\\\n```"
          },
          {
            "title": "よく使うパターン",
            "content": "# 関数の引数でも使える！\\\\n\\\\n関数にオブジェクトを渡すとき、必要なプロパティだけ取り出せます。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nfunction greet({ name }) {\\\\n    // オブジェクトから name だけ取り出す\\\\n    console.log(`Hello, ${name}!`);\\\\n}\\\\n\\\\ngreet({ name: '太郎', age: 20 });\\\\n```\\\\n**実行結果：**\\\\n```\\\\nHello, Taro!\\\\n```\\\\n\\\\n**ポイント：**\\\\n`{ }` の中に欲しいプロパティ名を書くだけ！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// name: 'アリス', score: 100 のオブジェクトから値を取り出す\\\nconst user = { name: 'アリス', score: 100 };\\\n// name プロパティを取り出す\\\nconst { name, score } = user;\\\n// nameを表示\\\nconsole.log(name);\\\n// scoreを表示\\\nconsole.log(score);",
        "holeyCode": "// name: 'アリス', score: 100 のオブジェクトから値を取り出す\\\\nconst user = { name: '___', score: ___ };\\\\n// name プロパティを取り出す\\\\nconst { ___, score } = user;\\\\n// nameを表示\\\\nconsole.log(___);\\\\n// scoreを表示\\\\nconsole.log(___);",
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
            "name",
            "user",
            "value",
            "key"
          ],
          "others": [
            "Alice",
            "100",
            "score"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Alice\\\\n100\\\\n"
          }
        ]
      },
    {
        "title": "スプレッド演算子（配列）",
        "description": "配列を展開する `...` （スプレッド演算子）を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "スプレッド演算子とは？",
            "content": "# 配列を「展開」する魔法の記号\\\\n\\\\n**スプレッド演算子** `...` は、配列の中身を一つずつ展開（てんかい）する記号です。\\\\n\\\\n**身近なたとえ：**\\\\nトランプの束をテーブルに広げるイメージです。束（配列）を `...` で広げると、1枚1枚のカードになります。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst a = [1, 2];\\\\nconst b = [3, 4];\\\\n// 両方の配列を展開して合体！\\\\nconst c = [...a, ...b];\\\\nconsole.log(c);\\\\n```\\\\n**実行結果：**\\\\n```\\\\n[1, 2, 3, 4]\\\\n```"
          },
          {
            "title": "配列のコピーにも使える",
            "content": "# 配列を安全にコピーする\\\\n\\\\n`...` を使うと、配列のコピーを簡単に作れます。\\\\n\\\\n**なぜコピーが必要？**\\\\n普通に `=` で代入すると、同じ配列を指してしまいます。\\\\n`...` でコピーすれば、元の配列に影響を与えません！\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst original = [1, 2, 3];\\\\nconst copy = [...original];  // コピーを作る\\\\ncopy.push(4);  // コピーに追加\\\\nconsole.log(original); // [1, 2, 3]（元のまま！）\\\\nconsole.log(copy);     // [1, 2, 3, 4]\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [1, 2] と [3, 4] の2つの配列を合体させる\\\\nconst arr1 = [1, 2];\\\\n// arr2を定義する\\\\nconst arr2 = [3, 4];\\\\n// ... スプレッド演算子で展開する\\\\nconst merged = [...arr1, ...arr2];\\\\n// mergedを表示\\\\nconsole.log(merged);",
        "holeyCode": "// [1, 2] と [3, 4] の2つの配列を合体させる\\\\nconst arr1 = [___, ___];\\\\n// arr2を定義する\\\\nconst arr2 = [___, ___];\\\\n// ... スプレッド演算子で展開する\\\\nconst merged = [___arr1, ...arr2];\\\\n// mergedを表示\\\\nconsole.log(___);",
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
          "others": [
            "1",
            "2",
            "3",
            "4",
            "merged"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 1, 2, 3, 4 ]\\\\n"
          }
        ]
      },
    {
        "title": "三項演算子",
        "description": "if-elseを1行で書ける「三項演算子」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 11,
        "tutorialSlides": [
          {
            "title": "三項演算子（さんこうえんざんし）とは？",
            "content": "# if-else を1行で書く方法\\\\n\\\\n**三項演算子** は、if-else を短く書ける便利な書き方です。\\\\n\\\\n**書き方：**\\\\n```\\\\n条件 ? trueのときの値 : falseのときの値\\\\n```\\\\n\\\\n**身近なたとえ：**\\\\n「晴れ？傘いらない：傘いる」のように、条件によって2つのうちどちらかを選びます。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst age = 20;\\\\nconst status = age >= 18 ? '成人' : '未成年';\\\\nconsole.log(status); // '成人'\\\\n```"
          },
          {
            "title": "三項演算子の使いどころ",
            "content": "# 変数への代入に便利！\\\\n\\\\n**if-else と比較：**\\\\n```javascript\\\\n// if-else（長い）\\\\nlet result;\\\\nif (score >= 60) {\\\\n    result = '合格';\\\\n} else {\\\\n    result = '不合格';\\\\n}\\\\n\\\\n// 三項演算子（短い！）\\\\nconst result = score >= 60 ? '合格' : '不合格';\\\\n```\\\\n\\\\n**ポイント：**\\\\n- `?` の左に条件\\\\n- `?` の右に true のときの値\\\\n- `:` の右に false のときの値"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// 数値 5 が正か負かを判定\\\\nconst num = 5;\\\\n// ? で三項演算子を使う\\\\nconst sign = num >= 0 ? '正' : '負';\\\\n// signを表示\\\\nconsole.log(sign);",
        "holeyCode": "// 数値 5 が正か負かを判定\\\\nconst num = ___;\\\\n// ? で三項演算子を使う\\\\nconst sign = num >= 0 ___ '正' : '負';\\\\n// signを表示\\\\nconsole.log(___);",
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
          "others": [
            "5",
            "sign"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "positive\\\\n"
          }
        ]
      },
    {
        "title": "配列のfind",
        "description": "条件に合う最初の要素を見つける `find` メソッドを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 12,
        "tutorialSlides": [
          {
            "title": "findとは？",
            "content": "# 条件に合う最初の要素を見つける\\\\n\\\\n**find（ファインド）** は、条件に合う **最初の** 要素を返すメソッドです。\\\\n\\\\n**身近なたとえ：**\\\\nクラスで「身長150cm以上の人」を探すとき、最初に見つかった人を答えるイメージです。\\\\n\\\\n**ポイント：**\\\\n- 最初の1つだけ返す（filter は全部返す）\\\\n- 見つからなかったら `undefined`\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst nums = [1, 5, 10, 15];\\\\nconst found = nums.find(n => n > 7);\\\\nconsole.log(found); // 10（最初に見つかった）\\\\n```"
          },
          {
            "title": "findの使い方",
            "content": "# オブジェクトの配列でも使える！\\\\n\\\\nユーザーリストから特定のIDの人を探すときなどに便利です。\\\\n\\\\n**コード例：**\\\\n```javascript\\\\nconst users = [\\\\n    { id: 1, name: 'アリス' },\\\\n    { id: 2, name: 'ボブ' }\\\\n];\\\\n// id が 2 のユーザーを探す\\\\nconst user = users.find(u => u.id === 2);\\\\nconsole.log(user.name);\\\\n```\\\\n**実行結果：**\\\\n```\\\\nBob\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// [1, 3, 4, 7, 8] から最初の偶数を見つける\\\\nconst numbers = [1, 3, 4, 7, 8];\\\\n// find メソッドで最初の要素を探す\\\\nconst firstEven = numbers.find(n => n % 2 === 0);\\\\n// firstEvenを表示\\\\nconsole.log(firstEven);",
        "holeyCode": "// [1, 3, 4, 7, 8] から最初の偶数を見つける\\\\nconst numbers = [___, ___, ___, ___, ___];\\\\n// find メソッドで最初の要素を探す\\\\nconst firstEven = numbers.___(n => n % 2 === 0);\\\\n// firstEvenを表示\\\\nconsole.log(___);",
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
          "others": [
            "1",
            "3",
            "4",
            "7",
            "8",
            "firstEven"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "4\\\\n"
          }
        ]
      },
    {
        "title": "オブジェクトのショートハンド",
        "description": "オブジェクトを作るときの便利な省略記法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 13,
        "tutorialSlides": [
          {
            "title": "プロパティのショートハンド",
            "content": "# 同じ名前なら省略できる！\\\\n\\\\n変数名とプロパティ名が同じなら、省略（ショートハンド）できます。\\\\n\\\\n**身近なたとえ：**\\\\n「名前は『名前』です」と言わなくても「名前」だけで伝わりますよね。それと同じです！\\\\n\\\\n**比較してみよう：**\\\\n```javascript\\\\nconst name = '太郎';\\\\nconst age = 20;\\\\n\\\\n// 通常の書き方（長い）\\\\nconst obj1 = { name: name, age: age };\\\\n\\\\n// ショートハンド（短い！同じ意味）\\\\nconst obj2 = { name, age };\\\\n```"
          },
          {
            "title": "メソッドのショートハンド",
            "content": "# メソッドも短く書ける！\\\\n\\\\nオブジェクトの中にメソッド（関数）を書くときも省略できます。\\\\n\\\\n**比較してみよう：**\\\\n```javascript\\\\nconst obj = {\\\\n    // 通常の書き方\\\\n    greet: function() { \\\\n        console.log('こんにちは'); \\\\n    },\\\\n    \\\\n    // ショートハンド（: function を省略）\\\\n    sayBye() { \\\\n        console.log('バイバイ'); \\\\n    }\\\\n};\\\\n```\\\\n\\\\n**ポイント：**\\\\n`: function` を省略して、関数名のあとに直接 `()` を書けます。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る\\\\nconst x = 10;\\\\n// y = 20\\\\nconst y = 20;\\\\n// ショートハンドで x をプロパティとして追加する\\\\nconst point = { x, y };\\\\n// point.xを表示\\\\nconsole.log(point.x);\\\\n// point.yを表示\\\\nconsole.log(point.y);",
        "holeyCode": "// x = 10, y = 20 をプロパティとして持つオブジェクトを作る\\\\nconst x = ___;\\\\n// y = 20\\\\nconst y = ___;\\\\n// ショートハンドで x をプロパティとして追加する\\\\nconst point = { ___, y };\\\\n// point.xを表示\\\\nconsole.log(point.___);\\\\n// point.yを表示\\\\nconsole.log(point.___);",
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
          "others": [
            "10",
            "20",
            "y"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\\\n20\\\\n"
          }
        ]
      }
  ]
};
