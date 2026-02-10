export const typescriptData = {
  "language": "typescript",
  "lessonId": "typescript-1",
  "lessonTitle": "TypeScript (タイプスクリプト) に挑戦！",
  "lessonDescription": "JavaScriptに「ラベル（型）」をつけて、もっと使いやすくした TypeScript（タイプスクリプト）を学びましょう。間違いの少ないプログラミングができるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    { "title": "TypeScript（タイプスクリプト）とは？", "content": "# 安心・安全なプログラミング\\n\\nTypeScript（タイプスクリプト）は、JavaScript（ジャバスクリプト）に「型（かた）」というルールを追加した言語です。\\n\\n## どうして便利なの？\\n\\nお弁当箱に「おにぎり専用」と書いてあったら、間違えてサンドイッチを入れようとしたとき気づけますよね。\\n\\nTypeScriptも同じで、「ここには文字だけ」「数字だけ」と決めておくと、間違った種類のデータを入れようとしたときに「ここ間違ってるよ！」と先に教えてくれます。" },
    { "title": "ラベル（型）とは？", "content": "# はこに中身を教えてあげましょう\\n\\nプログラミングでは、データを入れておく「はこ」のことを **変数（へんすう）** と呼びます。\\n\\nTypeScriptでは、このはこを作るときに「このはこには文字を入れます！」「数字を入れます！」と先に決めることができます。\\n\\nおもちゃ箱に「ブロック」「ぬいぐるみ」などのラベルを貼っておくと片付けるときに迷わないですよね。この「中身の決まり」を **型** と呼びます。" },
    { "title": "ラベルの貼りかた", "content": "# :（コロン）のあとに種類を書く\\n\\nはこ（変数）の名前のあとに、`:`（コロン）をつけてから種類を書きます。\\n\\n## よく使うラベルの種類\\n\\n- **string**（ストリング）: 文字を入れるときのラベル\\n- **number**（ナンバー）: 数字を入れるときのラベル\\n\\n```typescript\\nconst animal: string = 'いぬ';\\nconsole.log(animal);\\n```\\n**実行結果：** いぬ" },
    { "title": "数値型（すうちがた）とは？", "content": "# 計算するためのラベル\\n\\n「10」や「3.14」のような数字を扱うときに使うのが **number（ナンバー）** ラベルです。\\n\\n## いつ使うの？\\n\\n- テストの点数を計算したいとき\\n- ゲームのスコアを足したいとき\\n- おこづかいの計算をしたいとき\\n\\n```typescript\\nconst base: number = 100;\\nconst bonus: number = 50;\\nconsole.log(base + bonus); // => 150\\n```" },
    { "title": "あまりを求める演算子", "content": "# %（パーセント）でわり算のあまりを計算\\n\\nクッキーが10枚あって3人で分けるとどうなるかな？1人3枚ずつもらえて、1枚あまる！\\n\\nこの「あまり」だけを計算してくれるのが `%` という記号です。\\n\\n```typescript\\nconsole.log(10 % 3);  // => 1（あまり）\\nconsole.log(8 % 2);   // => 0（割り切れた！）\\n```" },
    { "title": "累算代入演算子", "content": "# += と -= で便利に計算\\n\\n「今の点数に10点プラスしたい！」というとき、`+=` を使うと便利です。\\n\\n```typescript\\nlet x: number = 10;\\nx += 5;  // x = x + 5 と同じ\\nconsole.log(x);  // => 15\\n```\\n\\n`-=` を使えば引き算も同じようにできます。\\n\\n```typescript\\nlet y: number = 10;\\ny -= 3;  // y = y - 3 と同じ\\nconsole.log(y);  // => 7\\n```" }
  ],
  "exercises": [
    {
      "title": "はこに「ラベル」をはりましょう",
      "correctCode": "// messageに'こんにちは TS'を代入（型: string）\\nconst message: string = 'こんにちは TS';\\n// はこの中身を出す\\nconsole.log(message);",
      "holeyCode": "// messageに'こんにちは TS'を代入（型: string）\\nconst ___: ___ = '___';\\n// はこの中身を出す\\n___.___(___);",
      "correctLines": [
          "// messageに'こんにちは TS'を代入（型: string）",
          "const message: string = 'こんにちは TS';",
          "// はこの中身を出す",
          "console.log(message);"
        ],
      "lineHints": [
          null,
          "変数名、文字列型を表す型注釈、代入する文字列リテラルを指定します。",
          null,
          "consoleオブジェクトのlogメソッドを呼び出し、変数名を渡します。"
        ],
        "candidates": {
          "variables": [
            "message"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "こんにちは TS"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは TS\\n"
          }
        ]
      },
    {
      "title": "数字のラベルで計算しましょう",
      "correctCode": "// 数字を入れるためのラベルのはこを作る\\nconst x: number = 10;\\n// yにも同じラベルを貼る\\nconst y: number = 5;\\n// たし算した答えを出す\\nconsole.log(x + y);",
      "holeyCode": "// 数字を入れるためのラベルのはこを作る\\nconst ___: ___ = ___;\\n// yにも同じラベルを貼る\\nconst ___: ___ = ___;\\n// たし算した答えを出す\\n___.___(___  ___ ___);",
      "correctLines": [
          "// 数字を入れるためのラベルのはこを作る",
          "const x: number = 10;",
          "// yにも同じラベルを貼る",
          "const y: number = 5;",
          "// たし算した答えを出す",
          "console.log(x + y);"
        ],
      "lineHints": [
          null,
          "変数名xに `number` ラベルを貼り、10を代入します。",
          null,
          "変数名yにも `number` ラベルを貼り、5を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでたし算（+）の結果を出力します。"
        ],
        "candidates": {
          "variables": [
            "x",
            "y"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number"
          ],
          "operators": [
            "+"
          ],
          "numbers": [
            "10",
            "5"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "剰余演算子（%）",
      "correctCode": "// 10 を 3 で割ったあまりを出力する\\nconsole.log(10 % 3);",
      "holeyCode": "// 10 を 3 で割ったあまりを出力する\\n___.___(___  ___ ___);",
      "correctLines": [
          "// 10 を 3 で割ったあまりを出力する",
          "console.log(10 % 3);"
        ],
      "lineHints": [
          null,
          "consoleオブジェクトのlogメソッドで、10 % 3（10を3で割ったあまり）を出力します。"
        ],
        "candidates": {
          "operators": [
            "%",
            "+",
            "-",
            "*",
            "/"
          ],
          "functions": [
            "log"
          ],
          "numbers": [
            "10",
            "3"
          ],
          "others": ["console"]
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
      "correctCode": "// scoreに50を入れる\\nlet score: number = 50;\\n// 10点プラスする\\nscore += 10;\\n// scoreを表示\\nconsole.log(score);",
      "holeyCode": "// scoreに50を入れる\\nlet ___: ___ = ___;\\n// 10点プラスする\\n___ ___ ___;\\n// scoreを表示\\n___.___(___);",
      "correctLines": [
          "// scoreに50を入れる",
          "let score: number = 50;",
          "// 10点プラスする",
          "score += 10;",
          "// scoreを表示",
          "console.log(score);"
        ],
      "lineHints": [
          null,
          "変数名score、型numberを指定し、50を代入します。",
          null,
          "変数scoreに累算代入演算子（+=）で10を加算します。",
          null,
          "consoleオブジェクトのlogメソッドでscoreを出力します。"
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "numbers": [
            "50",
            "10"
          ],
          "variables": [
            "score"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "ラベルを貼ったはこを文章に入れましょう",
      "correctCode": "// age というはこに 10 を入れる\\nconst age: number = 10;\\n// 文章の中に中身を入れる\\nconsole.log(`私は${age}歳です`);",
      "holeyCode": "// age というはこに 10 を入れる\\nconst ___: ___ = ___;\\n// 文章の中に中身を入れる\\n___.___(___);",
      "correctLines": [
          "// age というはこに 10 を入れる",
          "const age: number = 10;",
          "// 文章の中に中身を入れる",
          "console.log(`私は${age}歳です`);"
        ],
      "lineHints": [
          null,
          "変数名age、型numberを指定し、10を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでテンプレート文字列を出力します。"
        ],
        "candidates": {
          "variables": [
            "age"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number",
            "`私は${age}歳です`"
          ],
          "numbers": [
            "10"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "私は10歳です\\n"
          }
        ]
      },
    {
      "title": "同じラベルを並べる「配列」",
      "correctCode": "// 文字列のラベルがついた配列を作る\\nconst colors: string[] = ['あか', 'あお'];\\n// 2番目のデータ（インデックス1）を出す\\nconsole.log(colors[1]);",
      "holeyCode": "// 文字列のラベルがついた配列を作る\\nconst ___: ___[] = ['___', '___'];\\n// 2番目のデータ（インデックス1）を出す\\n___.___(___[___]);",
      "correctLines": [
          "// 文字列のラベルがついた配列を作る",
          "const colors: string[] = ['あか', 'あお'];",
          "// 2番目のデータ（インデックス1）を出す",
          "console.log(colors[1]);"
        ],
      "lineHints": [
          null,
          "変数名colors、型string[]を指定し、'あか'と'あお'の配列を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでcolors配列のインデックス1を出力します。"
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
      "title": "「はい」か「いいえ」のラベル",
      "correctCode": "// 真偽値（はい/いいえ）を入れるためのラベルを貼る\\nconst isAdult: boolean = true;\\n// もし 正しかったら（trueなら）\\nif (isAdult) {\\n    // メッセージ（'おとなです'）\\n    console.log('おとなです');\\n}",
      "holeyCode": "// 真偽値（はい/いいえ）を入れるためのラベルを貼る\\nconst ___: ___ = ___;\\n// もし 正しかったら（trueなら）\\nif (___) {\\n    // メッセージ（'おとなです'）\\n    ___.___(___);\\n___",
      "correctLines": [
          "// 真偽値（はい/いいえ）を入れるためのラベルを貼る",
          "const isAdult: boolean = true;",
          "// もし 正しかったら（trueなら）",
          "if (isAdult) {",
          "    // メッセージ（'おとなです'）",
          "    console.log('おとなです');",
          "}"
        ],
      "lineHints": [
          null,
          "変数名isAdult、型boolean、値trueを指定します。",
          null,
          "if文の条件にisAdultを指定します。",
          null,
          "consoleオブジェクトのlogメソッドで'おとなです'を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "isAdult"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "boolean",
            "'おとなです'"
          ],
          "keywords": [
            "true"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "おとなです\\n"
          }
        ]
      },
    {
      "title": "点数で分けてみましょう",
      "correctCode": "// score というはこに 75 を入れる\\nconst score: number = 75;\\n// 80以上かを比較する演算子\\nif (score >= 80) {\\n    // 80点以上のときのメッセージ（'ごうかく'）\\n    console.log('ごうかく');\\n// 「そうでなければ」を表すキーワード\\n} else {\\n    // それ以外の場合（'ざんねん'）\\n    console.log('ざんねん');\\n}",
      "holeyCode": "// score というはこに 75 を入れる\\nconst ___: ___ = ___;\\n// 80以上かを比較する演算子\\nif (___ ___ ___) {\\n    // 80点以上のときのメッセージ（'ごうかく'）\\n    ___.___(___);\\n// 「そうでなければ」を表すキーワード\\n} ___ {\\n    // それ以外の場合（'ざんねん'）\\n    ___.___(___);\\n___",
      "correctLines": [
          "// score というはこに 75 を入れる",
          "const score: number = 75;",
          "// 80以上かを比較する演算子",
          "if (score >= 80) {",
          "    // 80点以上のときのメッセージ（'ごうかく'）",
          "    console.log('ごうかく');",
          "// 「そうでなければ」を表すキーワード",
          "} else {",
          "    // それ以外の場合（'ざんねん'）",
          "    console.log('ざんねん');",
          "}"
        ],
      "lineHints": [
          null,
          "変数名score、型number、値75を指定します。",
          null,
          "score >= 80 の条件式を評価します。",
          null,
          "consoleオブジェクトのlogメソッドで'ごうかく'を出力します。",
          null,
          "elseキーワードで条件が満たされなかった場合の処理を記述します。",
          null,
          "consoleオブジェクトのlogメソッドで'ざんねん'を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "score"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "number",
            "'ごうかく'",
            "'ざんねん'"
          ],
          "keywords": [
            "else"
          ],
          "numbers": [
            "75",
            "80"
          ],
          "operators": [
            ">="
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ざんねん\\n"
          }
        ]
      },
    {
      "title": "論理演算子（&&、||）",
      "correctCode": "// scoreに85を入れる\\nconst score: number = 85;\\n// 80以上 かつ 100以下 ならメッセージを出す\\nif (score >= 80 && score <= 100) {\\n    // ごうかくと出力\\n    console.log('ごうかく');\\n}",
      "holeyCode": "// scoreに85を入れる\\nconst ___: ___ = ___;\\n// 80以上 かつ 100以下 ならメッセージを出す\\nif (___ >= ___ ___ ___ <= ___) {\\n    // ごうかくと出力\\n    ___.___(___);\\n___",
      "correctLines": [
          "// scoreに85を入れる",
          "const score: number = 85;",
          "// 80以上 かつ 100以下 ならメッセージを出す",
          "if (score >= 80 && score <= 100) {",
          "    // ごうかくと出力",
          "    console.log('ごうかく');",
          "}"
        ],
      "lineHints": [
          null,
          "変数名score、型number、値85を指定します。",
          null,
          "score >= 80 && score <= 100 の条件式を評価します。",
          null,
          "consoleオブジェクトのlogメソッドで'ごうかく'を出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "score"
          ],
          "operators": [
            "&&",
            "||"
          ],
          "numbers": [
            "85",
            "80",
            "100"
          ],
          "strings": [
            "number",
            "'ごうかく'"
          ],
          "functions": [
            "log"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ごうかく\\n"
          }
        ]
      },
    {
      "title": "順番に出してみましょう",
      "correctCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst names: string[] = ['たろう', 'はなこ'];\\n// 順番にループする\\nfor (const name of names) {\\n    console.log(name);\\n}",
      "holeyCode": "// 配列を作る（'たろう', 'はなこ'の順）\\nconst ___: ___[] = ['___', '___'];\\n// 順番にループする\\nfor (const ___ of ___) {\\n    ___.___(___);\\n___",
      "correctLines": [
          "// 配列を作る（'たろう', 'はなこ'の順）",
          "const names: string[] = ['たろう', 'はなこ'];",
          "// 順番にループする",
          "for (const name of names) {",
          "    console.log(name);",
          "}"
        ],
      "lineHints": [
          null,
          "変数名names、型string[]、値['たろう', 'はなこ']を指定します。",
          null,
          "for...ofでnames配列をループし、各要素をnameに代入します。",
          "consoleオブジェクトのlogメソッドでnameを出力します。",
          "閉じ括弧を入力してください。"
        ],
        "candidates": {
          "variables": [
            "name",
            "names"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "たろう",
            "はなこ"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\nはなこ\\n"
          }
        ]
      },
    {
      "title": "自分だけのラベルを作ってみましょう",
      "correctCode": "// User型を定義（nameはstring）\\ntype User = { name: string };\\n// userに{ name: 'たろう' }を代入\\nconst user: User = { name: 'たろう' };\\n// nameプロパティを出す\\nconsole.log(user.name);",
      "holeyCode": "// User型を定義（nameはstring）\\ntype ___ = { ___: ___ };\\n// userに{ name: 'たろう' }を代入\\nconst ___: ___ = { ___: '___' };\\n// nameプロパティを出す\\n___.___(___.___);",
      "correctLines": [
          "// User型を定義（nameはstring）",
          "type User = { name: string };",
          "// userに{ name: 'たろう' }を代入",
          "const user: User = { name: 'たろう' };",
          "// nameプロパティを出す",
          "console.log(user.name);"
        ],
      "lineHints": [
          null,
          "型名User、プロパティnameの型stringを指定します。",
          null,
          "変数名user、型User、プロパティnameに'たろう'を代入します。",
          null,
          "consoleオブジェクトのlogメソッドでuser.nameを出力します。"
        ],
        "candidates": {
          "variables": [
            "user"
          ],
          "functions": [
            "log"
          ],
          "strings": [
            "string",
            "User",
            "name",
            "たろう"
          ],
          "others": ["console"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "たろう\\n"
          }
        ]
      },
    {
      "title": "関数の「入り口」にラベルをはりましょう",
      "correctCode": "// 受け取るデータのラベルを指定する\\nfunction greet(name: string) {\\n    console.log(`こんにちは、${name}`);\\n}\\n// 関数を実行する\\ngreet('TypeScript');",
      "holeyCode": "// 受け取るデータのラベルを指定する\\nfunction ___(___: ___) {\\n    ___.___(___);\\n___\\n// 関数を実行する\\n___(___);",
      "correctLines": [
          "// 受け取るデータのラベルを指定する",
          "function greet(name: string) {",
          "    console.log(`こんにちは、${name}`);",
          "}",
          "// 関数を実行する",
          "greet('TypeScript');"
        ],
      "lineHints": [
          null,
          "関数名greet、引数name、型stringを指定します。",
          "consoleオブジェクトのlogメソッドでテンプレート文字列を出力します。",
          "閉じ括弧を入力してください。",
          null,
          "greet関数を'TypeScript'を引数に呼び出します。"
        ],
        "candidates": {
          "variables": [
            "name"
          ],
          "functions": [
            "greet",
            "log"
          ],
          "strings": [
            "string",
            "`こんにちは、${name}`",
            "'TypeScript'"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは、TypeScript\\n"
          }
        ]
      },
    {
      "title": "「なにも返さない」というラベル",
      "correctCode": "// 何も返さないときに使うラベル\\nfunction showDate(): void {\\n    console.log('今日の日付');\\n}\\n// 関数を実行する\\nshowDate();",
      "holeyCode": "// 何も返さないときに使うラベル\\nfunction ___(): ___ {\\n    ___.___(___);\\n___\\n// 関数を実行する\\n___();",
      "correctLines": [
          "// 何も返さないときに使うラベル",
          "function showDate(): void {",
          "    console.log('今日の日付');",
          "}",
          "// 関数を実行する",
          "showDate();"
        ],
      "lineHints": [
          null,
          "関数名showDate、戻り値の型voidを指定します。",
          "consoleオブジェクトのlogメソッドで'今日の日付'を出力します。",
          "閉じ括弧を入力してください。",
          null,
          "showDate関数を引数なしで呼び出します。"
        ],
        "candidates": {
          "functions": [
            "showDate",
            "log"
          ],
          "strings": [
            "void",
            "'今日の日付'"
          ],
          "others": ["console", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "今日の日付\\n"
          }
        ]
      }
  ]
}
