export const typescriptData2 = {
  "language": "typescript",
  "lessonId": "typescript-2",
  "lessonTitle": "TypeScript II - ステップアップ！",
  "lessonDescription": "TypeScriptの基本をマスターしたら、より高度な型システムを学びましょう！ユニオン型、インターフェース、ジェネリクスなどを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "ユニオン型",
      "correctCode": "// | でユニオン型を定義\\nfunction show(value: string | number): void {\\n    // valueを出力\\n    console.log(value);\\n}\\n\\n// 文字列を渡す\\nshow('こんにちは');\\n// 数値を渡す\\nshow(42);",
      "holeyCode": "// | でユニオン型を定義\\nfunction show(value: string | number): ___ {\\n    // valueを出力\\n    console.log(___);\\n___\\n___\\n// 文字列を渡す\\n___('こんにちは');\\n// 数値を渡す\\n___(42);",
      "correctLines": [
          "// | でユニオン型を定義",
          "function show(value: string | number): void {",
          "    // valueを出力",
          "    console.log(value);",
          "}",
          "",
          "// 文字列を渡す",
          "show('こんにちは');",
          "// 数値を渡す",
          "show(42);"
        ],
      "lineHints": [
          null,
          "ユニオン型は `|` で区切ります。",
          null,
          "出力する変数を指定します。",
          "文字列の引数を渡します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "|",
            "&",
            "||",
            "&&"
          ],
          "others": ["value", "42", "void", "}", "show"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n42\\n"
          }
        ]
      },
    {
      "title": "インターフェース",
      "correctCode": "// interface キーワードで定義\\ninterface Product {\\n    // 商品IDプロパティの型\\n    id: number;\\n    // 商品名プロパティの型\\n    name: string;\\n    // 価格プロパティの型\\n    price: number;\\n}\\n\\n// Productオブジェクトを作成\\nconst item: Product = { id: 1, name: 'りんご', price: 150 };\\n// 商品名を出力\\nconsole.log(item.name);\\n",
      "holeyCode": "// interface キーワードで定義\\ninterface ___ {\\n    // 商品IDプロパティの型\\n    id: ___;\\n    // 商品名プロパティの型\\n    name: ___;\\n    // 価格プロパティの型\\n    price: ___;\\n___\\n___\\n// Productオブジェクトを作成\\nconst item: Product = { id: ___, name: 'りんご', price: 150 };\\n// 商品名を出力\\nconsole.___(item.name);\\n",
      "correctLines": [
          "// interface キーワードで定義",
          "interface Product {",
          "    // 商品IDプロパティの型",
          "    id: number;",
          "    // 商品名プロパティの型",
          "    name: string;",
          "    // 価格プロパティの型",
          "    price: number;",
          "}",
          "",
          "// Productオブジェクトを作成",
          "const item: Product = { id: 1, name: 'りんご', price: 150 };",
          "// 商品名を出力",
          "console.log(item.name);",
          ""
        ],
      "lineHints": [
          null,
          "商品を表すインターフェース名です。",
          null,
          "IDは数値なので `number` です。",
          null,
          "商品名は文字列なので `string` です。",
          null,
          "価格も数値なので `number` です。",
          "ここを正しく入力してください。",
          null,
          null,
          "商品名を文字列で指定します。",
          null,
          "コンソールに出力するメソッドです。",
          null
        ],
        "candidates": {
          "keywords": [
            "interface",
            "type",
            "class",
            "struct"
          ],
          "others": ["Product", "string", "number", "りんご", "150", "log", "}", "1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "りんご\\n"
          }
        ]
      },
    {
      "title": "オプショナルプロパティ",
      "correctCode": "// nicknameは省略可能\\ninterface Profile {\\n    // 名前プロパティの型\\n    name: string;\\n    // ? でオプショナルに\\n    nickname?: string;\\n}\\n\\n// Profileオブジェクトを作成\\nconst prof: Profile = { name: 'ボブ' };\\n// 名前を出力\\nconsole.log(prof.name);",
      "holeyCode": "// nicknameは省略可能\\ninterface ___ {\\n    // 名前プロパティの型\\n    name: ___;\\n    // ? でオプショナルに\\n    nickname?: ___;\\n___\\n___\\n// Profileオブジェクトを作成\\nconst prof: Profile = { name: '___' };\\n// 名前を出力\\nconsole.___(prof.name);",
      "correctLines": [
          "// nicknameは省略可能",
          "interface Profile {",
          "    // 名前プロパティの型",
          "    name: string;",
          "    // ? でオプショナルに",
          "    nickname?: string;",
          "}",
          "",
          "// Profileオブジェクトを作成",
          "const prof: Profile = { name: 'ボブ' };",
          "// 名前を出力",
          "console.log(prof.name);"
        ],
      "lineHints": [
          null,
          "名前は文字列なので `string` です。",
          null,
          "`?` を使うとオプショナルになります。",
          null,
          "名前の値を文字列で指定します。",
          "取得したいプロパティ名を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "?",
            "!",
            "*",
            "&"
          ],
          "others": ["string", "'ボブ'", "name", "Profile", "}", "log", "ボブ"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ボブ\\n"
          }
        ]
      },
    {
      "title": "型エイリアス",
      "correctCode": "// type キーワードで型エイリアスを定義\\ntype Score = number;\\n\\n// 数学の点数\\nconst math: Score = 85;\\n// 英語の点数\\nconst english: Score = 90;\\n// 合計を出力\\nconsole.log(math + english);",
      "holeyCode": "// type キーワードで型エイリアスを定義\\ntype Score = ___;\\n___\\n// 数学の点数\\nconst math: Score = ___;\\n// 英語の点数\\nconst english: Score = ___;\\n// 合計を出力\\nconsole.___(math + english);",
      "correctLines": [
          "// type キーワードで型エイリアスを定義",
          "type Score = number;",
          "",
          "// 数学の点数",
          "const math: Score = 85;",
          "// 英語の点数",
          "const english: Score = 90;",
          "// 合計を出力",
          "console.log(math + english);"
        ],
      "lineHints": [
          null,
          "`type` キーワードを使います。",
          null,
          null,
          "英語の点数を数値で指定します。",
          null,
          "足し算の演算子を使います。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "interface",
            "const",
            "let"
          ],
          "others": ["85", "90", "+", "number", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "175\\n"
          }
        ]
      },
    {
      "title": "readonly プロパティ",
      "correctCode": "// idは読み取り専用\\ninterface Item {\\n    // readonly で読み取り専用に\\n    readonly id: number;\\n    // 名前プロパティの型\\n    name: string;\\n}\\n\\n// itemに{id: 1, name: 'りんご'}を代入\\nconst item: Item = { id: 1, name: 'りんご' };\\n// idを出力\\nconsole.log(item.id);",
      "holeyCode": "// idは読み取り専用\\ninterface ___ {\\n    // readonly で読み取り専用に\\n    readonly id: ___;\\n    // 名前プロパティの型\\n    name: ___;\\n___\\n___\\n// itemに{id: 1, name: 'りんご'}を代入\\nconst item: Item = { id: ___, name: 'りんご' };\\n// idを出力\\nconsole.___(item.id);",
      "correctLines": [
          "// idは読み取り専用",
          "interface Item {",
          "    // readonly で読み取り専用に",
          "    readonly id: number;",
          "    // 名前プロパティの型",
          "    name: string;",
          "}",
          "",
          "// itemに{id: 1, name: 'りんご'}を代入",
          "const item: Item = { id: 1, name: 'りんご' };",
          "// idを出力",
          "console.log(item.id);"
        ],
      "lineHints": [
          null,
          "`readonly` キーワードを使います。",
          null,
          "名前は文字列なので `string` です。",
          null,
          "名前の値を文字列で指定します。",
          "取得したいプロパティ名を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "readonly",
            "const",
            "final",
            "immutable"
          ],
          "others": ["string", "'りんご'", "id", "Item", "number", "}", "1", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "列挙型（enum）",
      "correctCode": "// enum キーワードで列挙型を定義\\nenum Day {\\n    // 日曜日\\n    Sun,\\n    // 月曜日\\n    Mon,\\n    // 火曜日\\n    Tue\\n}\\n\\n// 月曜日を代入\\nconst today: Day = Day.Mon;\\n// 出力\\nconsole.log(today);",
      "holeyCode": "// enum キーワードで列挙型を定義\\nenum ___ {\\n    // 日曜日\\n    ___,\\n    // 月曜日\\n    ___,\\n    // 火曜日\\n    ___\\n___\\n___\\n// 月曜日を代入\\nconst today: Day = Day.___;\\n// 出力\\nconsole.log(___);",
      "correctLines": [
          "// enum キーワードで列挙型を定義",
          "enum Day {",
          "    // 日曜日",
          "    Sun,",
          "    // 月曜日",
          "    Mon,",
          "    // 火曜日",
          "    Tue",
          "}",
          "",
          "// 月曜日を代入",
          "const today: Day = Day.Mon;",
          "// 出力",
          "console.log(today);"
        ],
      "lineHints": [
          null,
          "`enum` キーワードを使います。",
          null,
          "日曜日を表す値を指定します。",
          null,
          "月曜日を表す値を指定します。",
          null,
          "火曜日を表す値を指定します。",
          "月曜日の列挙値を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "変数todayの値をコンソールに出力します。"
        ],
        "candidates": {
          "keywords": [
            "enum",
            "type",
            "const",
            "class"
          ],
          "others": ["Sun", "Mon", "Tue", "today", "Day", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "ジェネリクス入門",
      "correctCode": "// <T> で型パラメータを定義\\nfunction wrap<T>(value: T): T[] {\\n    // valueを配列に入れて返す\\n    return [value];\\n}\\n\\n// 関数を呼び出し\\nconst arr = wrap(5);\\n// arrを出力\\nconsole.log(arr);",
      "holeyCode": "// <T> で型パラメータを定義\\nfunction wrap<___>(value: T): T[] {\\n    // valueを配列に入れて返す\\n    return [___];\\n___\\n___\\n// 関数を呼び出し\\nconst ___ = wrap(5);\\n// arrを出力\\nconsole.log(___);",
      "correctLines": [
          "// <T> で型パラメータを定義",
          "function wrap<T>(value: T): T[] {",
          "    // valueを配列に入れて返す",
          "    return [value];",
          "}",
          "",
          "// 関数を呼び出し",
          "const arr = wrap(5);",
          "// arrを出力",
          "console.log(arr);"
        ],
      "lineHints": [
          null,
          "型パラメータは `<T>` のように書きます。",
          null,
          "引数で受け取った値を配列に入れて返します。",
          "配列に入れる値を指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "変数arrの値をコンソールに出力します。"
        ],
        "candidates": {
          "operators": [
            "<",
            ">",
            "(",
            ")"
          ],
          "others": ["value", "5", "arr", "T", "}", "}", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[ 5 ]\\n"
          }
        ]
      },
    {
      "title": "ジェネリクスとインターフェース",
      "correctCode": "// 型パラメータTを定義\\ninterface Container<T> {\\n    // アイテムプロパティ\\n    item: T;\\n}\\n\\n// Containerオブジェクトを作成\\nconst box: Container<string> = { item: 'こんにちは' };\\n// アイテムを出力\\nconsole.log(box.item);",
      "holeyCode": "// 型パラメータTを定義\\ninterface Container<___> {\\n    // アイテムプロパティ\\n    item: ___;\\n___\\n___\\n// Containerオブジェクトを作成\\nconst box: Container<string> = { item: '___' };\\n// アイテムを出力\\nconsole.___(box.item);",
      "correctLines": [
          "// 型パラメータTを定義",
          "interface Container<T> {",
          "    // アイテムプロパティ",
          "    item: T;",
          "}",
          "",
          "// Containerオブジェクトを作成",
          "const box: Container<string> = { item: 'こんにちは' };",
          "// アイテムを出力",
          "console.log(box.item);"
        ],
      "lineHints": [
          null,
          "型パラメータ `T` を使います。",
          null,
          "型パラメータで指定した型を使います。",
          "アイテムの値を文字列で指定します。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "T",
            "U",
            "V",
            "Type"
          ],
          "others": ["item", "}", "log", "こんにちは"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "typeof 型演算子",
      "correctCode": "// 変数から型を取得\\nconst point = { x: 10, y: 20 };\\n// typeof で変数の型を取得\\nconst point2: typeof point = { x: 5, y: 15 };\\n// x座標を出力\\nconsole.log(point2.x);",
      "holeyCode": "// 変数から型を取得\\nconst ___ = { x: 10, y: 20 };\\n// typeof で変数の型を取得\\nconst point___: typeof point = { x: 5, y: 15 };\\n// x座標を出力\\nconsole.___(point2.x);",
      "correctLines": [
          "// 変数から型を取得",
          "const point = { x: 10, y: 20 };",
          "// typeof で変数の型を取得",
          "const point2: typeof point = { x: 5, y: 15 };",
          "// x座標を出力",
          "console.log(point2.x);"
        ],
      "lineHints": [
          null,
          "y座標の値を数値で指定します。",
          null,
          "`typeof` で変数の型を取得します。",
          null,
          "取得したいプロパティ名を指定します。"
        ],
        "candidates": {
          "keywords": [
            "typeof",
            "keyof",
            "instanceof",
            "type"
          ],
          "others": ["20", "x", "point", "2", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "インターフェースの拡張",
      "correctCode": "// 基本のインターフェース\\ninterface Base {\\n    // idプロパティの型\\n    id: number;\\n}\\n\\n// extends でインターフェースを拡張\\ninterface User extends Base {\\n    // 名前プロパティの型\\n    name: string;\\n}\\n\\n// uに{id: 1, name: '太郎'}を代入\\nconst u: User = { id: 1, name: '太郎' };\\n// 名前を出力\\nconsole.log(u.name);",
      "holeyCode": "// 基本のインターフェース\\ninterface ___ {\\n    // idプロパティの型\\n    id: ___;\\n___\\n___\\n// extends でインターフェースを拡張\\ninterface User extends ___ {\\n    // 名前プロパティの型\\n    name: ___;\\n___\\n___\\n// uに{id: 1, name: '太郎'}を代入\\nconst u: User = { id: ___, name: '太郎' };\\n// 名前を出力\\nconsole.___(u.name);",
      "correctLines": [
          "// 基本のインターフェース",
          "interface Base {",
          "    // idプロパティの型",
          "    id: number;",
          "}",
          "",
          "// extends でインターフェースを拡張",
          "interface User extends Base {",
          "    // 名前プロパティの型",
          "    name: string;",
          "}",
          "",
          "// uに{id: 1, name: '太郎'}を代入",
          "const u: User = { id: 1, name: '太郎' };",
          "// 名前を出力",
          "console.log(u.name);"
        ],
      "lineHints": [
          null,
          "IDは数値なので `number` です。",
          null,
          "`extends` キーワードを使います。",
          "名前は文字列なので `string` です。",
          null,
          null,
          "取得したいプロパティ名を指定します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "with",
            "include"
          ],
          "others": ["number", "string", "'太郎'", "name", "Base", "}", "1", "log"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎\\n"
          }
        ]
      }
  ]
};
