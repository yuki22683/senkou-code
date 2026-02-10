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
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "ユニオン型とは？",
          "content": "# 複数の型を許容する\\n\\n**ユニオン型**は、「AまたはB」のように、複数の型のうちどれかを受け入れる型です。\\n\\n## たとえ話\\n\\n「飲み物専用」と「お菓子専用」の両方OKな引き出しがあったら便利ですよね。ユニオン型はまさにそれ！「文字でも数字でもOK」というラベルを作れます。\\n\\n## 書き方のポイント\\n\\n`|`（パイプ・縦棒）で型をつなげます。\\n\\n```typescript\\nlet value: string | number;  // 文字か数字のどちらかOK\\nvalue = 'hello';  // 文字 → OK!\\nvalue = 42;       // 数字 → OK!\\n```"
        },
        {
          "title": "ユニオン型の使い方",
          "content": "# 柔軟な関数の引数\\n\\n関数の引数にユニオン型を使うと、いろんな種類のデータを受け取れるようになります。\\n\\n## たとえ話\\n\\nIDカードを想像してみてください。番号だけのID（例：12345）もあれば、文字入りのID（例：ABC-001）もありますよね。どちらも受け付けられる関数を作れます！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction printId(id: string | number) {\\n    console.log('ID:', id);\\n}\\n\\nprintId('abc');  // 文字のID → OK!\\nprintId(123);    // 数字のID → OK!\\n```"
        }
      ],
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
      "description": "インターフェースの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "content": "# オブジェクトの設計図\\n\\n**インターフェース**（interface）は、オブジェクトが持つべきプロパティ（属性・特徴）を定義する「設計図」のようなものです。\\n\\n## たとえ話\\n\\n「生徒カード」を作るときの規則を想像してみてください。\\n- 必ず「名前」を書く\\n- 必ず「年齢」を書く\\n\\nインターフェースは、こんな規則をプログラムで表現したものです。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface User {\\n    name: string;  // 名前は必須\\n    age: number;   // 年齢も必須\\n}\\n\\nconst user: User = {\\n    name: 'Taro',\\n    age: 20\\n};\\n```"
        },
        {
          "title": "型チェックの恩恵",
          "content": "# 間違いを防ぐ\\n\\nインターフェースの規則に合わないオブジェクトを作ろうとすると、TypeScriptがエラーで教えてくれます。\\n\\n## たとえ話\\n\\n「名前と年齢を両方書いてね」というルールなのに、名前だけ書いて提出しようとしたら「年齢も書いて！」と言われますよね。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface User {\\n    name: string;\\n    age: number;\\n}\\n\\n// エラー！ 'age' がありません\\nconst user: User = { name: 'Taro' };\\n```\\n\\nこうやって、うっかり忘れを防いでくれるんです！"
        }
      ],
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
      "description": "オプショナルプロパティについて学びます",
      "tutorialSlides": [
        {
          "title": "? でオプショナルに",
          "content": "# 省略可能なプロパティ\\n\\n**オプショナルプロパティ**は、「あってもなくてもOK」な項目のことです。プロパティ名の後に `?`（クエスチョンマーク）をつけると設定できます。\\n\\n## たとえ話\\n\\nアンケート用紙を想像してみてください。\\n- 名前：必須\\n- メールアドレス：任意（書いても書かなくてもOK）\\n\\nプログラミングでも同じように、「必須の項目」と「あればいいな」の項目を分けられます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface User {\\n    name: string;     // 必須\\n    email?: string;   // ?がついているので省略OK\\n}\\n```"
        },
        {
          "title": "オプショナルの使い方",
          "content": "# 柔軟なオブジェクト\\n\\n`?` をつけたプロパティは、あってもなくてもエラーになりません。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface User {\\n    name: string;\\n    email?: string;  // オプショナル\\n}\\n\\n// emailなし → OK!\\nconst user1: User = { name: 'Taro' };\\n\\n// emailあり → もちろんOK!\\nconst user2: User = { name: 'Hanako', email: 'h@example.com' };\\n```\\n\\nどちらもエラーにならず、柔軟に対応できますね！"
        }
      ],
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
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "型エイリアスとは？",
          "content": "# 型に別名をつける\\n\\n**型エイリアス**（Type Alias）は、型に自分で名前をつける機能です。`type` というキーワードを使います。\\n\\n## たとえ話\\n\\n「ID」というものを考えてみてください。学校では「出席番号」、お店では「会員番号」など、いろんな名前がありますが、どれも「番号」や「コード」ですよね。\\n\\n型エイリアスを使うと、「この型は ID と呼ぶことにしよう！」と決められます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype ID = string | number;  // IDという名前をつける\\n\\nlet userId: ID = 'abc';   // 文字のID\\nlet orderId: ID = 123;    // 数字のID\\n```"
        },
        {
          "title": "複雑な型を整理",
          "content": "# 読みやすいコードに\\n\\n型エイリアスを使うと、複雑な型に分かりやすい名前をつけられます。\\n\\n## たとえ話\\n\\n「緯度と経度のペア」を毎回 `{ latitude: number; longitude: number; }` と書くのは大変ですよね。\\n「座標」という名前をつけておけば、すっきり書けます！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ntype Point = {\\n    x: number;\\n    y: number;\\n};\\n\\nconst origin: Point = { x: 0, y: 0 };\\n```\\n\\nこれで何度も同じ型を書かなくて済みますし、コードも読みやすくなります！"
        }
      ],
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
      "description": "readonly プロパティの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "readonlyとは？",
          "content": "# 書き換え禁止\\n\\n**readonly**（リードオンリー）は、「読み取り専用」という意味です。このキーワードをつけたプロパティは、一度値を入れたら変更できなくなります。\\n\\n## たとえ話\\n\\n図書館の本を想像してみてください。借りて読むことはできますが、書き込みはできませんよね。`readonly` はまさにそれ！「読むだけで、書き換えは禁止」です。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface Config {\\n    readonly apiKey: string;  // 読み取り専用\\n}\\n\\nconst config: Config = { apiKey: 'abc123' };\\nconfig.apiKey = 'xyz';  // エラー！変更できません\\n```"
        },
        {
          "title": "readonlyの活用",
          "content": "# 安全なコード\\n\\n「絶対に変更されたくない値」を守れます。例えば、ユーザーのIDは変わってはいけませんよね。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface User {\\n    readonly id: number;  // IDは変更禁止\\n    name: string;         // 名前は変更OK\\n}\\n\\nconst user: User = { id: 1, name: 'Taro' };\\nuser.name = 'Jiro';  // OK! 名前は変えられる\\nuser.id = 2;         // エラー！ IDは変えられない\\n```\\n\\nこうやって、大切なデータを間違って変更してしまうのを防げます！"
        }
      ],
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
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "enumとは？",
          "content": "# 名前付きの定数群\\n\\n**enum**（イーナム）は、「列挙型」と呼ばれ、関連する値に名前をつけてグループ化できる機能です。\\n\\n## たとえ話\\n\\n方角を考えてみてください。「上・下・左・右」という4つの決まった選択肢がありますよね。これをプログラムで表すのに便利なのが enum です！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nenum Direction {  // 「方角」というグループ\\n    Up,     // 上\\n    Down,   // 下\\n    Left,   // 左\\n    Right   // 右\\n}\\n\\nlet dir: Direction = Direction.Up;  // 「上」を選択\\n```\\n\\nこれで「Up」「Down」など、決まった値だけを使えるようになります！"
        },
        {
          "title": "enumの値",
          "content": "# 自動で番号が振られる\\n\\nenumを作ると、自動で0から順番に番号が割り当てられます。\\n\\n## たとえ話\\n\\nクラスの出席番号のようなものです。1番目の人が0番、2番目の人が1番...というふうに自動で番号がつきます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nenum Color {\\n    Red,    // 0 が自動で割り当て\\n    Green,  // 1 が自動で割り当て\\n    Blue    // 2 が自動で割り当て\\n}\\n\\nconsole.log(Color.Green);  // 1 と表示される\\n```\\n\\n0から始まるのがポイントです！"
        }
      ],
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
      "description": "ジェネリクス入門の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "content": "# 型を変数のように使う\\n\\n**ジェネリクス**（Generics）とは、「後から型を決められる」仕組みです。`<T>` のように書いて、Tの部分に好きな型を入れられます。\\n\\n## たとえ話\\n\\n「何でも入る箱」を想像してみてください。りんごを入れれば「りんご箱」、おもちゃを入れれば「おもちゃ箱」になりますよね。\\n\\nジェネリクスも同じで、使うときに「これは文字用」「これは数字用」と決められるのです！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction identity<T>(arg: T): T {\\n    return arg;\\n}\\n\\nidentity<string>('hello');  // 文字列用として使う\\nidentity<number>(42);       // 数値用として使う\\n```"
        },
        {
          "title": "型推論と一緒に",
          "content": "# TypeScriptが型を推測\\n\\nTypeScriptは賢いので、渡した値から型を自動的に判断してくれます。これを **型推論** と呼びます。\\n\\n## たとえ話\\n\\n「りんご」を箱に入れたら、わざわざ「これはりんご箱です」と言わなくても、見ればわかりますよね。TypeScriptも同じです！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nfunction identity<T>(arg: T): T {\\n    return arg;\\n}\\n\\n// <string> を書かなくても、TypeScriptが推測してくれる！\\nconst str = identity('hello');  // string と推論\\nconst num = identity(42);       // number と推論\\n```\\n\\n便利ですね！"
        }
      ],
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
      "description": "ジェネリクスとインターフェースの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "ジェネリックインターフェース",
          "content": "# 柔軟なデータ構造\\n\\nインターフェース（設計図）にもジェネリクスを使えます。「中身の型は後で決める箱」のような設計図を作れるのです！\\n\\n## たとえ話\\n\\n「プレゼント箱」の設計図があるとします。中身は「おもちゃ」でも「お菓子」でも「本」でも何でもOK。箱の形は同じで、中身だけ変わりますよね。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface Box<T> {   // Tは後で決める\\n    value: T;\\n}\\n\\nconst numBox: Box<number> = { value: 42 };  // 数字の箱\\nconst strBox: Box<string> = { value: 'hi' }; // 文字の箱\\n```"
        },
        {
          "title": "実践的な例",
          "content": "# APIレスポンスなどに\\n\\nWebサイトからデータを取得するとき、「成功/失敗」と「データ」がセットで返ってくることが多いです。ジェネリクスを使うと、いろんなデータに対応できる型を作れます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\n// 汎用的なレスポンスの型\\ninterface Response<T> {\\n    data: T;         // データ（型は後で決める）\\n    status: number;  // 状態コード（200=成功など）\\n}\\n\\ninterface User { name: string; }\\n\\n// ユーザー情報のレスポンス\\nconst res: Response<User> = {\\n    data: { name: 'Taro' },\\n    status: 200\\n};\\n```\\n\\nこれで同じ型を使いまわせて便利です！"
        }
      ],
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
      "description": "データの種類（型）について理解します",
      "tutorialSlides": [
        {
          "title": "typeof型演算子",
          "content": "# 変数から型を取得\\n\\n**typeof**（タイプオブ）を使うと、「この変数と同じ型」という意味になります。既に作った変数の型をコピーできるのです！\\n\\n## たとえ話\\n\\n「太郎くんと同じ服を買いたい」というとき、太郎くんの服を見れば何を買えばいいかわかりますよね。typeofも同じで、既にある変数を見て型を決められます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nconst user = { name: 'Taro', age: 20 };\\n\\ntype UserType = typeof user;\\n// UserTypeは { name: string; age: number; } と同じ意味になる\\n```"
        },
        {
          "title": "同じ型の変数を作る",
          "content": "# 型の再利用\\n\\n既にある変数と「まったく同じ形」の新しい変数を作りたいときに便利です。\\n\\n## たとえ話\\n\\n設定ファイルを2つ作りたいとき、「1つ目の設定と同じ項目を持つ2つ目の設定」を作れます。\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\nconst config = {\\n    api: 'https://...',\\n    timeout: 5000\\n};\\n\\n// configと同じ形の別の設定を作る\\nconst config2: typeof config = {\\n    api: 'https://other...',\\n    timeout: 3000\\n};\\n```\\n\\nこうすれば、同じ項目を忘れずに設定できます！"
        }
      ],
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
      "description": "インターフェースの拡張の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "extendsで拡張",
          "content": "# インターフェースの継承\\n\\n**extends**（エクステンズ）を使うと、既存のインターフェースを「土台」にして、新しいプロパティを追加できます。\\n\\n## たとえ話\\n\\n「動物カード」には「名前」が書いてあります。「犬カード」は動物なので名前があり、さらに「犬種」も書いてあります。\\n\\nつまり「犬カード」は「動物カード」を拡張したものですね！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface Animal {\\n    name: string;  // 動物の名前\\n}\\n\\ninterface Dog extends Animal {\\n    breed: string;  // 犬種を追加！\\n}\\n// Dogはnameとbreedの両方を持つ\\n```"
        },
        {
          "title": "複数の拡張",
          "content": "# 複数から継承\\n\\n複数のインターフェースを組み合わせることもできます。カンマ（,）で区切って書きます。\\n\\n## たとえ話\\n\\n「歌える」という能力と「踊れる」という能力があるとします。「アイドル」は両方の能力を持っていますよね！\\n\\n## コードで書くとこうなるよ\\n\\n```typescript\\ninterface A { a: string; }  // Aの特徴\\ninterface B { b: number; }  // Bの特徴\\n\\n// AとBの両方を継承\\ninterface C extends A, B {\\n    c: boolean;  // Cだけの特徴\\n}\\n\\nconst obj: C = { a: 'hi', b: 1, c: true };\\n// a, b, c すべて必要！\\n```"
        }
      ],
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
