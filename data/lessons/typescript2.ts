export const typescriptData2 = {
  "language": "typescript",
  "lessonId": "typescript-2",
  "lessonTitle": "TypeScript II - ステップアップ！",
  "lessonDescription": "TypeScriptの基本をマスターしたら、より高度な型システムを学びましょう！ユニオン型、インターフェース、ジェネリクスなどを身につけます。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    { "title": "ユニオン型とは？", "content": "# 複数の型を許容する\\n\\n**ユニオン型**は「AまたはB」のように、複数の型のうちどれかを受け入れる型です。\\n\\n`|`（パイプ）で型をつなげます。\\n\\n```typescript\\nlet value: string | number;\\nvalue = 'hello';  // 文字 → OK!\\nvalue = 42;       // 数字 → OK!\\n```\\n\\n「文字でも数字でもOK」というラベルを作れます！" },
    { "title": "インターフェースとは？", "content": "# オブジェクトの設計図\\n\\n**インターフェース**（interface）は、オブジェクトが持つべきプロパティを定義する設計図です。\\n\\n```typescript\\ninterface User {\\n    name: string;  // 名前は必須\\n    age: number;   // 年齢も必須\\n}\\n\\nconst user: User = {\\n    name: '太郎',\\n    age: 20\\n};\\n```\\n\\n規則に合わないオブジェクトはエラーで教えてくれます。" },
    { "title": "オプショナルプロパティ", "content": "# ? で省略可能に\\n\\n**オプショナルプロパティ**は「あってもなくてもOK」な項目です。プロパティ名の後に `?` をつけます。\\n\\n```typescript\\ninterface User {\\n    name: string;     // 必須\\n    email?: string;   // ?がついているので省略OK\\n}\\n\\nconst user1: User = { name: '太郎' };  // emailなし → OK!\\nconst user2: User = { name: '花子', email: 'h@example.com' }; // OK!\\n```" },
    { "title": "型エイリアス", "content": "# typeで型に名前をつける\\n\\n**型エイリアス**は、型に自分で名前をつける機能です。\\n\\n```typescript\\ntype ID = string | number;  // IDという名前をつける\\n\\nlet userId: ID = 'abc';   // 文字のID\\nlet orderId: ID = 123;    // 数字のID\\n```\\n\\n複雑な型に分かりやすい名前をつけると、コードが読みやすくなります！" },
    { "title": "ジェネリクス<T>", "content": "# 型を後から決める\\n\\n**ジェネリクス**は、使うときに型を決める仕組みです。`<T>`のような形で書きます。\\n\\n```typescript\\nfunction getFirst<T>(arr: T[]): T {\\n    return arr[0];\\n}\\n\\ngetFirst<number>([1, 2, 3]);  // number型\\ngetFirst<string>(['a', 'b']); // string型\\n```\\n\\n「Tには何が入るか後で決めますよ」という意味です！" }
  ],
  "exercises": [
    {
      "title": "ユニオン型",
      "correctCode": "// | でユニオン型を定義\\nfunction show(value: string | number): void {\\n    // valueを出力\\n    console.log(value);\\n}\\n\\n// 文字列を渡す\\nshow('こんにちは');\\n// 数値を渡す\\nshow(42);",
      "holeyCode": "// | でユニオン型を定義\\nfunction ___(___ : ___ | ___): ___ {\\n    // valueを出力\\n    ___.___(___);\\n}\\n\\n// 文字列を渡す\\n___('___');\\n// 数値を渡す\\n___(___);",
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
          "関数名と引数、複数の型を`|`で結合します。",
          null,
          "console.logで変数を出力します。",
          null,
          null,
          null,
          "関数名と文字列を指定します。",
          null,
          "関数名と数値を指定します。"
        ],
        "candidates": {
          "operators": [
            "|",
            "&",
            "||",
            "&&"
          ],
          "others": ["show", "value", "string", "number", "void", "console", "log", "こんにちは", "42", "}", "value:", "ring"]
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
      "holeyCode": "// interface キーワードで定義\\ninterface ___ {\\n    // 商品IDプロパティの型\\n    ___: ___;\\n    // 商品名プロパティの型\\n    ___: ___;\\n    // 価格プロパティの型\\n    ___: ___;\\n}\\n\\n// Productオブジェクトを作成\\nconst ___: ___ = { ___: ___, ___: '___', ___: ___ };\\n// 商品名を出力\\n___.___(___.___)\\n",
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
          "インターフェース名を指定します。",
          null,
          "プロパティ名idと型numberを指定します。",
          null,
          "プロパティ名nameと型stringを指定します。",
          null,
          "プロパティ名priceと型numberを指定します。",
          null,
          null,
          null,
          "変数名、型、各プロパティの値を指定します。",
          null,
          "console.logでitem.nameを出力します。",
          null
        ],
        "candidates": {
          "keywords": [
            "interface",
            "type",
            "class",
            "struct"
          ],
          "others": ["Product", "item", "id", "name", "price", "string", "number", "りんご", "150", "1", "console", "log", "}"]
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
      "holeyCode": "// nicknameは省略可能\\ninterface ___ {\\n    // 名前プロパティの型\\n    ___: ___;\\n    // ? でオプショナルに\\n    ___?: ___;\\n}\\n\\n// Profileオブジェクトを作成\\nconst ___: ___ = { ___: '___' };\\n// 名前を出力\\n___.___(___.___);",
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
          "インターフェース名を指定します。",
          null,
          "プロパティ名nameと型stringを指定します。",
          null,
          "オプショナルなプロパティnickname?と型stringを指定します。",
          null,
          null,
          null,
          "変数名、型、nameプロパティの値を指定します。",
          null,
          "console.logでprof.nameを出力します。"
        ],
        "candidates": {
          "operators": [
            "?",
            "!",
            "*",
            "&"
          ],
          "others": ["Profile", "prof", "name", "nickname", "string", "ボブ", "console", "log", "}"]
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
      "holeyCode": "// type キーワードで型エイリアスを定義\\ntype ___ = ___;\\n\\n// 数学の点数\\nconst ___: ___ = ___;\\n// 英語の点数\\nconst ___: ___ = ___;\\n// 合計を出力\\n___.___(___+___);",
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
          "型エイリアス名Scoreと型numberを指定します。",
          null,
          null,
          "変数名math、型Score、値85を指定します。",
          null,
          "変数名english、型Score、値90を指定します。",
          null,
          "console.logでmath+englishを出力します。"
        ],
        "candidates": {
          "keywords": [
            "type",
            "interface",
            "const",
            "let"
          ],
          "others": ["Score", "math", "english", "number", "85", "90", "console", "log"]
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
      "holeyCode": "// idは読み取り専用\\ninterface ___ {\\n    // readonly で読み取り専用に\\n    readonly ___: ___;\\n    // 名前プロパティの型\\n    ___: ___;\\n}\\n\\n// itemに{id: 1, name: 'りんご'}を代入\\nconst ___: ___ = { ___: ___, ___: '___' };\\n// idを出力\\n___.___(___.___);",
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
          "インターフェース名を指定します。",
          null,
          "readonly付きのidプロパティと型numberを指定します。",
          null,
          "nameプロパティと型stringを指定します。",
          null,
          null,
          null,
          "変数名、型、各プロパティの値を指定します。",
          null,
          "console.logでitem.idを出力します。"
        ],
        "candidates": {
          "keywords": [
            "readonly",
            "const",
            "final",
            "immutable"
          ],
          "others": ["Item", "item", "id", "name", "string", "number", "1", "りんご", "console", "log", "}"]
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
      "holeyCode": "// enum キーワードで列挙型を定義\\nenum ___ {\\n    // 日曜日\\n    ___,\\n    // 月曜日\\n    ___,\\n    // 火曜日\\n    ___\\n}\\n\\n// 月曜日を代入\\nconst ___: ___ = ___.___;\\n// 出力\\n___.___(___);" ,
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
          "列挙型名Dayを指定します。",
          null,
          "日曜日を表すSunを指定します。",
          null,
          "月曜日を表すMonを指定します。",
          null,
          "火曜日を表すTueを指定します。",
          null,
          null,
          null,
          "変数名today、型Day、値Day.Monを指定します。",
          null,
          "console.logでtodayを出力します。"
        ],
        "candidates": {
          "keywords": [
            "enum",
            "type",
            "const",
            "class"
          ],
          "others": ["Day", "Sun", "Mon", "Tue", "today", "console", "log", "}"]
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
      "holeyCode": "// <T> で型パラメータを定義\\nfunction ___<___>(___: ___): ___[] {\\n    // valueを配列に入れて返す\\n    return [___];\\n}\\n\\n// 関数を呼び出し\\nconst ___ = ___(___);\\n// arrを出力\\n___.___(___);" ,
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
          "関数名wrap、型パラメータT、引数value: T、戻り値T[]を指定します。",
          null,
          "valueを配列に入れて返します。",
          null,
          null,
          null,
          "変数名arrと関数呼び出しwrap(5)を指定します。",
          null,
          "console.logでarrを出力します。"
        ],
        "candidates": {
          "operators": [
            "<",
            ">",
            "(",
            ")"
          ],
          "others": ["wrap", "value", "T", "arr", "5", "console", "log", "}"]
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
      "holeyCode": "// 型パラメータTを定義\\ninterface ___<___> {\\n    // アイテムプロパティ\\n    ___: ___;\\n}\\n\\n// Containerオブジェクトを作成\\nconst ___: ___<___> = { ___: '___' };\\n// アイテムを出力\\n___.___(___.___);",
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
          "インターフェース名Containerと型パラメータTを指定します。",
          null,
          "プロパティ名itemと型Tを指定します。",
          null,
          null,
          null,
          "変数名box、型Container<string>、itemプロパティの値を指定します。",
          null,
          "console.logでbox.itemを出力します。"
        ],
        "candidates": {
          "variables": [
            "T",
            "U",
            "V",
            "Type"
          ],
          "others": ["Container", "box", "item", "string", "こんにちは", "console", "log", "}"]
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
      "holeyCode": "// 変数から型を取得\\nconst ___ = { ___: ___, ___: ___ };\\n// typeof で変数の型を取得\\nconst ___: typeof ___ = { ___: ___, ___: ___ };\\n// x座標を出力\\n___.___(___.___);",
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
          "変数名pointとx: 10, y: 20の値を指定します。",
          null,
          "変数名point2、typeof pointの型、x: 5, y: 15の値を指定します。",
          null,
          "console.logでpoint2.xを出力します。"
        ],
        "candidates": {
          "keywords": [
            "typeof",
            "keyof",
            "instanceof",
            "type"
          ],
          "others": ["point", "point2", "x", "y", "10", "20", "5", "15", "console", "log"]
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
      "holeyCode": "// 基本のインターフェース\\ninterface ___ {\\n    // idプロパティの型\\n    ___: ___;\\n}\\n\\n// extends でインターフェースを拡張\\ninterface ___ extends ___ {\\n    // 名前プロパティの型\\n    ___: ___;\\n}\\n\\n// uに{id: 1, name: '太郎'}を代入\\nconst ___: ___ = { ___: ___, ___: '___' };\\n// 名前を出力\\n___.___(___.___);",
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
          "インターフェース名Baseを指定します。",
          null,
          "プロパティ名idと型numberを指定します。",
          null,
          null,
          null,
          "インターフェース名UserとBaseをextendsで拡張します。",
          null,
          "プロパティ名nameと型stringを指定します。",
          null,
          null,
          null,
          "変数名u、型User、各プロパティの値を指定します。",
          null,
          "console.logでu.nameを出力します。"
        ],
        "candidates": {
          "keywords": [
            "extends",
            "implements",
            "with",
            "include"
          ],
          "others": ["Base", "User", "u", "id", "name", "number", "string", "1", "太郎", "console", "log", "}"]
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
