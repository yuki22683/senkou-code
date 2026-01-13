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
      "description": "複数の型のどれかを許容する「ユニオン型」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ユニオン型とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 複数の型を許容する\n\n`|` を使って、複数の型のうちどれかを受け入れる型を作れます。\n\n```typescript\nlet value: string | number;\nvalue = 'hello';  // OK\nvalue = 42;       // OK\n```"
        },
        {
          "title": "ユニオン型の使い方",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 柔軟な関数の引数\n\n関数の引数に使うと、柔軟性が増します。\n\n```typescript\nfunction printId(id: string | number) {\n    console.log('ID:', id);\n}\n\nprintId('abc');  // OK\nprintId(123);    // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// | でユニオン型を定義\nfunction show(value: string | number): void {\n    console.log(value);\n}\n\nshow('Hello');\nshow(42);",
      "holeyCode": "// | でユニオン型を定義\nfunction show(value: string ___ number): void {\n    // valueを出力\n    console.log(___);\n}\n\n// 文字列を渡す\nshow(___);\n// 数値を渡す\nshow(___);",
      "correctLines": [
        "// string または number を受け取る",
        "function show(value: string | number): void {",
        "    console.log(value);",
        "}",
        "",
        "show('Hello');",
        "show(42);"
      ],
      "lineHints": [
        null,
        "ユニオン型は `|` で区切ります。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["|", "&", "||", "&&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n42\n"
        }
      ]
    },
    {
      "title": "インターフェース",
      "description": "オブジェクトの形を定義する「インターフェース」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "インターフェースとは？",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# オブジェクトの設計図\n\n`interface` でオブジェクトが持つべきプロパティを定義できます。\n\n```typescript\ninterface User {\n    name: string;\n    age: number;\n}\n\nconst user: User = {\n    name: 'Taro',\n    age: 20\n};\n```"
        },
        {
          "title": "型チェックの恩恵",
          "image": "/illustrations/3d/robot.png",
          "content": "# 間違いを防ぐ\n\nインターフェースに合わないオブジェクトはエラーになります。\n\n```typescript\ninterface User {\n    name: string;\n    age: number;\n}\n\n// エラー: 'age' がない\nconst user: User = { name: 'Taro' };\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// interface キーワードで定義\ninterface Person {\n    name: string;\n    age: number;\n}\n\nconst p: Person = { name: 'Alice', age: 25 };\nconsole.log(p.name);",
      "holeyCode": "// interface キーワードで定義\n___ Person {\n    // 名前プロパティの型\n    name: ___;\n    // 年齢プロパティの型\n    age: ___;\n}\n\n// Personオブジェクトを作成\nconst p: Person = { name: 'Alice', age: ___ };\n// 名前を出力\nconsole.log(p.___);\n",
      "correctLines": [
        "// Personインターフェースを定義",
        "interface Person {",
        "    name: string;",
        "    age: number;",
        "}",
        "",
        "const p: Person = { name: 'Alice', age: 25 };",
        "console.log(p.name);"
      ],
      "lineHints": [
        null,
        "`interface` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["interface", "type", "class", "struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Alice\n"
        }
      ]
    },
    {
      "title": "オプショナルプロパティ",
      "description": "あってもなくてもいいプロパティを定義する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "? でオプショナルに",
          "image": "/illustrations/3d/robot.png",
          "content": "# 省略可能なプロパティ\n\nプロパティ名の後に `?` をつけると、そのプロパティは省略可能になります。\n\n```typescript\ninterface User {\n    name: string;\n    email?: string;  // あってもなくてもOK\n}\n```"
        },
        {
          "title": "オプショナルの使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 柔軟なオブジェクト\n\n```typescript\ninterface User {\n    name: string;\n    email?: string;\n}\n\nconst user1: User = { name: 'Taro' };  // OK\nconst user2: User = { name: 'Hanako', email: 'h@example.com' };  // OK\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// nicknameは省略可能\ninterface Profile {\n    name: string;\n    // ? でオプショナルに\n    nickname?: string;\n}\n\nconst prof: Profile = { name: 'Bob' };\nconsole.log(prof.name);",
      "holeyCode": "// nicknameは省略可能\ninterface Profile {\n    // 名前プロパティの型\n    name: ___;\n    // ? でオプショナルに\n    nickname___: string;\n}\n\n// Profileオブジェクトを作成\nconst prof: Profile = { name: ___ };\n// 名前を出力\nconsole.log(prof.___);",
      "correctLines": [
        "// nicknameは省略可能",
        "interface Profile {",
        "    name: string;",
        "    nickname?: string;",
        "}",
        "",
        "const prof: Profile = { name: 'Bob' };",
        "console.log(prof.name);"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`?` を使うとオプショナルになります。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["?", "!", "*", "&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Bob\n"
        }
      ]
    },
    {
      "title": "型エイリアス",
      "description": "型に名前をつける「型エイリアス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "型エイリアスとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型に別名をつける\n\n`type` を使って型に名前をつけられます。\n\n```typescript\ntype ID = string | number;\n\nlet userId: ID = 'abc';\nlet orderId: ID = 123;\n```"
        },
        {
          "title": "複雑な型を整理",
          "image": "/illustrations/3d/robot.png",
          "content": "# 読みやすいコードに\n\n```typescript\ntype Point = {\n    x: number;\n    y: number;\n};\n\nconst origin: Point = { x: 0, y: 0 };\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// type キーワードで型エイリアスを定義\ntype Score = number;\n\nconst math: Score = 85;\nconst english: Score = 90;\nconsole.log(math + english);",
      "holeyCode": "// type キーワードで型エイリアスを定義\n___ Score = number;\n\n// 数学の点数\nconst math: Score = ___;\n// 英語の点数\nconst english: Score = ___;\n// 合計を出力\nconsole.log(math ___ english);",
      "correctLines": [
        "// 型エイリアスを定義",
        "type Score = number;",
        "",
        "const math: Score = 85;",
        "const english: Score = 90;",
        "console.log(math + english);"
      ],
      "lineHints": [
        null,
        "`type` キーワードを使います。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["type", "interface", "const", "let"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "175\n"
        }
      ]
    },
    {
      "title": "readonly プロパティ",
      "description": "読み取り専用のプロパティを定義する方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "readonlyとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 書き換え禁止\n\n`readonly` をつけると、そのプロパティは変更できなくなります。\n\n```typescript\ninterface Config {\n    readonly apiKey: string;\n}\n\nconst config: Config = { apiKey: 'abc123' };\nconfig.apiKey = 'xyz';  // エラー！\n```"
        },
        {
          "title": "readonlyの活用",
          "image": "/illustrations/3d/robot.png",
          "content": "# 安全なコード\n\n変更されたくない値を守れます。\n\n```typescript\ninterface User {\n    readonly id: number;\n    name: string;\n}\n\nconst user: User = { id: 1, name: 'Taro' };\nuser.name = 'Jiro';  // OK\nuser.id = 2;         // エラー！\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// idは読み取り専用\ninterface Item {\n    // readonly で読み取り専用に\n    readonly id: number;\n    name: string;\n}\n\nconst item: Item = { id: 1, name: 'Apple' };\nconsole.log(item.id);",
      "holeyCode": "// idは読み取り専用\ninterface Item {\n    // readonly で読み取り専用に\n    ___ id: number;\n    // 名前プロパティの型\n    name: ___;\n}\n\n// Itemオブジェクトを作成\nconst item: Item = { id: 1, name: ___ };\n// idを出力\nconsole.log(item.___);",
      "correctLines": [
        "// idは読み取り専用",
        "interface Item {",
        "    readonly id: number;",
        "    name: string;",
        "}",
        "",
        "const item: Item = { id: 1, name: 'Apple' };",
        "console.log(item.id);"
      ],
      "lineHints": [
        null,
        null,
        "`readonly` キーワードを使います。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["readonly", "const", "final", "immutable"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "列挙型（enum）",
      "description": "関連する定数をグループ化する「列挙型」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "enumとは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 名前付きの定数群\n\n`enum` を使うと、関連する定数に名前をつけてグループ化できます。\n\n```typescript\nenum Direction {\n    Up,\n    Down,\n    Left,\n    Right\n}\n\nlet dir: Direction = Direction.Up;\n```"
        },
        {
          "title": "enumの値",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 自動で番号が振られる\n\nデフォルトでは 0 から順番に数値が割り当てられます。\n\n```typescript\nenum Color {\n    Red,    // 0\n    Green,  // 1\n    Blue    // 2\n}\n\nconsole.log(Color.Green);  // 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// enum キーワードで列挙型を定義\nenum Day {\n    Sun,\n    Mon,\n    Tue\n}\n\nconst today: Day = Day.Mon;\nconsole.log(today);",
      "holeyCode": "// enum キーワードで列挙型を定義\n___ Day {\n    // 日曜日\n    ___,\n    // 月曜日\n    ___,\n    // 火曜日\n    ___\n}\n\n// 月曜日を代入\nconst today: Day = Day.___;\n// 出力\nconsole.log(___);",
      "correctLines": [
        "// 曜日のenum",
        "enum Day {",
        "    Sun,",
        "    Mon,",
        "    Tue",
        "}",
        "",
        "const today: Day = Day.Mon;",
        "console.log(today);"
      ],
      "lineHints": [
        null,
        "`enum` キーワードを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["enum", "type", "const", "class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "ジェネリクス入門",
      "description": "型を引数のように扱う「ジェネリクス」の基本を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 型を変数のように使う\n\n**ジェネリクス**とは、関数やクラスで扱う型を後から指定できる仕組みです。`<T>` のように型パラメータ（型の変数）を定義します。\n\n```typescript\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nidentity<string>('hello');  // string\nidentity<number>(42);       // number\n```"
        },
        {
          "title": "型推論と一緒に",
          "image": "/illustrations/3d/robot.png",
          "content": "# TypeScriptが型を推測\n\n型推論（TypeScriptが値から型を自動的に判断する機能）により、多くの場合、型引数を省略できます。\n\n```typescript\nfunction identity<T>(arg: T): T {\n    return arg;\n}\n\nconst str = identity('hello');  // string と推論\nconst num = identity(42);       // number と推論\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// <T> で型パラメータを定義\nfunction wrap<T>(value: T): T[] {\n    return [value];\n}\n\nconst arr = wrap(5);\nconsole.log(arr);",
      "holeyCode": "// <T> で型パラメータを定義\nfunction wrap___T___(value: T): T[] {\n    // 値を配列に入れて返す\n    return [___];\n}\n\n// 関数を呼び出し\nconst arr = wrap(___);\n// 結果を出力\nconsole.log(___);",
      "correctLines": [
        "// ジェネリック関数",
        "function wrap<T>(value: T): T[] {",
        "    return [value];",
        "}",
        "",
        "const arr = wrap(5);",
        "console.log(arr);"
      ],
      "lineHints": [
        null,
        "型パラメータは `<T>` のように書きます。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["<", ">", "(", ")"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[ 5 ]\n"
        }
      ]
    },
    {
      "title": "ジェネリクスとインターフェース",
      "description": "インターフェースでジェネリクスを使う方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "ジェネリックインターフェース",
          "image": "/illustrations/3d_advanced/interface_blueprint.png",
          "content": "# 柔軟なデータ構造\n\nインターフェースにも型パラメータを使えます。\n\n```typescript\ninterface Box<T> {\n    value: T;\n}\n\nconst numBox: Box<number> = { value: 42 };\nconst strBox: Box<string> = { value: 'hi' };\n```"
        },
        {
          "title": "実践的な例",
          "image": "/illustrations/3d/robot.png",
          "content": "# APIレスポンスなどに\n\n```typescript\ninterface Response<T> {\n    data: T;\n    status: number;\n}\n\ninterface User { name: string; }\n\nconst res: Response<User> = {\n    data: { name: 'Taro' },\n    status: 200\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// T で型パラメータを定義\ninterface Container<T> {\n    item: T;\n}\n\nconst box: Container<string> = { item: 'Hello' };\nconsole.log(box.item);",
      "holeyCode": "// T で型パラメータを定義\ninterface Container<___> {\n    // アイテムプロパティ\n    item: ___;\n}\n\n// Containerオブジェクトを作成\nconst box: Container<string> = { item: ___ };\n// アイテムを出力\nconsole.log(box.___);",
      "correctLines": [
        "// ジェネリックインターフェース",
        "interface Container<T> {",
        "    item: T;",
        "}",
        "",
        "const box: Container<string> = { item: 'Hello' };",
        "console.log(box.item);"
      ],
      "lineHints": [
        null,
        "型パラメータ `T` を使います。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "variables": ["T", "U", "V", "Type"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    },
    {
      "title": "typeof 型演算子",
      "description": "既存の変数から型を取得する `typeof` を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "typeof型演算子",
          "image": "/illustrations/3d/gear.png",
          "content": "# 変数から型を取得\n\n`typeof` を使うと、変数の型を取得できます。\n\n```typescript\nconst user = { name: 'Taro', age: 20 };\n\ntype UserType = typeof user;\n// { name: string; age: number; }\n```"
        },
        {
          "title": "同じ型の変数を作る",
          "image": "/illustrations/3d/robot.png",
          "content": "# 型の再利用\n\n```typescript\nconst config = {\n    api: 'https://...',\n    timeout: 5000\n};\n\nconst config2: typeof config = {\n    api: 'https://other...',\n    timeout: 3000\n};\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 変数から型を取得\nconst point = { x: 10, y: 20 };\n// typeof で変数の型を取得\nconst point2: typeof point = { x: 5, y: 15 };\nconsole.log(point2.x);",
      "holeyCode": "// 変数から型を取得\nconst point = { x: 10, y: ___ };\n// typeof で変数の型を取得\nconst point2: ___ point = { x: 5, y: 15 };\n// x座標を出力\nconsole.log(point2.___);",
      "correctLines": [
        "// 変数から型を取得",
        "const point = { x: 10, y: 20 };",
        "",
        "const point2: typeof point = { x: 5, y: 15 };",
        "console.log(point2.x);"
      ],
      "lineHints": [
        null,
        null,
        null,
        "`typeof` で変数の型を取得します。",
        null
      ],
      "candidates": {
        "keywords": ["typeof", "keyof", "instanceof", "type"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "インターフェースの拡張",
      "description": "既存のインターフェースを拡張して新しいインターフェースを作る方法を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "extendsで拡張",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# インターフェースの継承\n\n`extends` を使って、既存のインターフェースを拡張できます。\n\n```typescript\ninterface Animal {\n    name: string;\n}\n\ninterface Dog extends Animal {\n    breed: string;\n}\n```"
        },
        {
          "title": "複数の拡張",
          "image": "/illustrations/3d/robot.png",
          "content": "# 複数から継承\n\n```typescript\ninterface A { a: string; }\ninterface B { b: number; }\n\ninterface C extends A, B {\n    c: boolean;\n}\n\nconst obj: C = { a: 'hi', b: 1, c: true };\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 基本のインターフェース\ninterface Base {\n    id: number;\n}\n\n// extends でインターフェースを拡張\ninterface User extends Base {\n    name: string;\n}\n\nconst u: User = { id: 1, name: 'Taro' };\nconsole.log(u.name);",
      "holeyCode": "// 基本のインターフェース\ninterface Base {\n    // idプロパティの型\n    id: ___;\n}\n\n// extends でインターフェースを拡張\ninterface User ___ Base {\n    // 名前プロパティの型\n    name: ___;\n}\n\n// Userオブジェクトを作成\nconst u: User = { id: 1, name: ___ };\n// 名前を出力\nconsole.log(u.___);",
      "correctLines": [
        "// 基本のインターフェース",
        "interface Base {",
        "    id: number;",
        "}",
        "",
        "// 拡張したインターフェース",
        "interface User extends Base {",
        "    name: string;",
        "}",
        "",
        "const u: User = { id: 1, name: 'Taro' };",
        "console.log(u.name);"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        "`extends` キーワードを使います。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["extends", "implements", "with", "include"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Taro\n"
        }
      ]
    }
  ]
};
