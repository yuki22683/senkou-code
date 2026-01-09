export const rust2Data = {
  "language": "rust",
  "lessonId": "rust-2",
  "lessonTitle": "Rust II - 所有権とトレイト",
  "lessonDescription": "Rust最大の特徴「所有権」を中心に、構造体、トレイト、パターンマッチングを学びます。安全で高速なプログラムを書く力を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
      "title": "所有権の基本",
      "description": "Rust独自の概念「所有権」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "所有権とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# メモリの「持ち主」\n\n**所有権** は、値の「持ち主」を明確にする仕組みです。各値には1つの所有者だけが存在し、所有者がスコープを抜けると値は破棄されます。"
        },
        {
          "title": "ムーブ（移動）",
          "image": "/illustrations/3d/robot.png",
          "content": "# 所有権の移動\n\n代入すると所有権が移動（ムーブ）します。元の変数は使えなくなります。\n\n**コード例：**\n```rust\nlet s1 = String::from(\"hello\");\nlet s2 = s1; // 所有権が s2 に移動\n// s1 は使えない\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let s1 = String::from(\"hello\");\n    // s1 の所有権を移動\n    let s2 = s1;\n    println!(\"{}\", s2);\n}",
      "holeyCode": "___\n    ___\n    // s1 と入力して、s2 に「持ち主」を変えてね\\n    ___\n    ___\n___"hello\");\n    // s1 と入力して、s2 に「持ち主」を変えてね\n    let s2 = ___;\n    println!(\"{}\", s2);\n}",
      "correctLines": [
        "fn main() {",
        "    let s1 = String::from("hello");",
        "    // s1 と入力して、s2 に「持ち主」を変えてね",
        "    let s2 = s1;",
        "    println!("{}", s2);",
        "}"
      ],
      "lineHints": [
        "",
        "String を作成します。",
        "s1 の所有権を s2 に移動します。",
        "s2 を表示します。",
        ""
      ],
      "candidates": {
        "variables": ["s1"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello\n"
        }
      ]
    },
    {
      "title": "参照と借用",
      "description": "所有権を移さずに値を借りる「参照」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "参照とは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 借りる仕組み\n\n**参照** を使うと、所有権を移さずに値を「借りる」ことができます。`&` で参照を作ります。"
        },
        {
          "title": "参照の使い方",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# & で借用\n\n`&` をつけると参照を作成できます。元の変数はそのまま使えます。\n\n**コード例：**\n```rust\nlet s = String::from(\"hello\");\nlet len = calc_len(&s);\n// s はまだ使える\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn print_len(s: &String) {\n    println!(\"{}\", s.len());\n}\nfn main() {\n    let text = String::from(\"hello\");\n    // & で参照を渡す\n    print_len(&text);\n}",
      "holeyCode": "___\n    ___\n___\n___\n    ___\n    // & を入力して「貸してあげて」ね\\n    ___\n___"{}\", s.len());\n}\nfn main() {\n    let text = String::from(\"hello\");\n    // & を入力して「貸してあげて」ね\n    print_len(___text);\n}",
      "correctLines": [
        "fn print_len(s: &String) {",
        "    println!("{}", s.len());",
        "}",
        "fn main() {",
        "    let text = String::from("hello");",
        "    // & を入力して「貸してあげて」ね",
        "    print_len(&text);",
        "}"
      ],
      "lineHints": [
        "&String で参照を受け取ります。",
        "",
        "",
        "",
        "",
        "& で参照を渡します。"
      ],
      "candidates": {
        "operators": ["&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "可変参照",
      "description": "参照先の値を変更できる「可変参照」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "可変参照とは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 書き換え可能な参照\n\n**可変参照** `&mut` を使うと、借りた値を変更できます。ただし、同時に1つだけです。"
        },
        {
          "title": "&mut の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 変更を許可\n\n変数自体も `mut` で宣言し、参照も `&mut` で作ります。\n\n**コード例：**\n```rust\nlet mut s = String::from(\"hello\");\nchange(&mut s);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn add_world(s: &mut String) {\n    s.push_str(\" world\");\n}\nfn main() {\n    // mut で可変変数にする\n    let mut text = String::from(\"hello\");\n    add_world(&mut text);\n    println!(\"{}\", text);\n}",
      "holeyCode": "___\n    ___\n___\n___\n    // mut と入力して、中身を変えられるようにしましょう\\n    ___\n    ___\n    ___\n___" world\");\n}\nfn main() {\n    // mut と入力して、中身を変えられるようにしましょう\n    let ___ text = String::from(\"hello\");\n    add_world(&mut text);\n    println!(\"{}\", text);\n}",
      "correctLines": [
        "fn add_world(s: &mut String) {",
        "    s.push_str(" world");",
        "}",
        "fn main() {",
        "    // mut と入力して、中身を変えられるようにしましょう",
        "    let mut text = String::from("hello");",
        "    add_world(&mut text);",
        "    println!("{}", text);",
        "}"
      ],
      "lineHints": [
        "可変参照を受け取ります。",
        "参照先を変更します。",
        "",
        "",
        "mut で可変変数にします。",
        "&mut で可変参照を渡します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["mut"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "hello world\n"
        }
      ]
    },
    {
      "title": "構造体を定義しよう",
      "description": "関連するデータをまとめる「構造体」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "構造体とは？",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# データのまとまり\n\n**構造体（struct）** は、関連するデータをまとめる仕組みです。それぞれのデータにはフィールド名をつけます。"
        },
        {
          "title": "struct の定義",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# struct キーワード\n\n`struct 名前 { フィールド }` で定義します。\n\n**コード例：**\n```rust\nstruct Point {\n    x: i32,\n    y: i32,\n}\nlet p = Point { x: 10, y: 20 };\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// struct で構造体を定義\nstruct Rect {\n    width: i32,\n    height: i32,\n}\nfn main() {\n    let r = Rect { width: 3, height: 4 };\n    println!(\"{}\", r.width);\n}",
      "holeyCode": "___\n    ___\n    ___\n___\n___\n    ___\n    ___\n___"{}\", r.width);\n}",
      "correctLines": [
        "struct Rect {",
        "    width: i32,",
        "    height: i32,",
        "}",
        "fn main() {",
        "    let r = Rect { width: 3, height: 4 };",
        "    println!("{}", r.width);",
        "}"
      ],
      "lineHints": [
        "struct で構造体を定義します。",
        "",
        "",
        "",
        "",
        "構造体のインスタンスを作成します。",
        "フィールドにアクセスします。",
        ""
      ],
      "candidates": {
        "keywords": ["struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
        }
      ]
    },
    {
      "title": "impl でメソッドを追加",
      "description": "構造体にメソッドを追加する「impl」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "impl とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 実装ブロック\n\n**impl** ブロックで、構造体にメソッドを追加できます。`self` で自分自身を参照します。"
        },
        {
          "title": "メソッドの定義",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# &self を使う\n\nメソッドの最初の引数は `&self` です。\n\n**コード例：**\n```rust\nimpl Rect {\n    fn area(&self) -> i32 {\n        self.width * self.height\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "struct Square {\n    side: i32,\n}\n// impl でメソッドを実装\nimpl Square {\n    fn area(&self) -> i32 {\n        self.side * self.side\n    }\n}\nfn main() {\n    let s = Square { side: 5 };\n    println!(\"{}\", s.area());\n}",
      "holeyCode": "___\n    ___\n___\n// impl と入力して「この構造体で使う関数」を作ってね\\n___\n    ___\n        ___\n    ___\n___\n___\n    ___\n    ___\n___"{}\", s.area());\n}",
      "correctLines": [
        "struct Square {",
        "    side: i32,",
        "}",
        "// impl と入力して「この構造体で使う関数」を作ってね",
        "impl Square {",
        "    fn area(&self) -> i32 {",
        "        self.side * self.side",
        "    }",
        "}",
        "fn main() {",
        "    let s = Square { side: 5 };",
        "    println!("{}", s.area());",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "",
        "impl でメソッドを実装します。",
        "&self で自分自身を参照します。",
        "",
        "",
        "",
        "",
        "",
        "s.area() でメソッドを呼びます。",
        ""
      ],
      "candidates": {
        "keywords": ["impl"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "25\n"
        }
      ]
    },
    {
      "title": "enum で状態を表す",
      "description": "複数の状態を表す「列挙型（enum）」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "enum とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 複数の選択肢\n\n**enum** は、値がいくつかの種類のうちの一つであることを表します。各バリアントにデータを持たせることもできます。"
        },
        {
          "title": "enum の定義",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# バリアントを列挙\n\n`enum 名前 { バリアント1, バリアント2, ... }` で定義します。\n\n**コード例：**\n```rust\nenum Color {\n    Red,\n    Green,\n    Blue,\n}\nlet c = Color::Red;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// enum で列挙型を定義\nenum Direction {\n    Up,\n    Down,\n}\nfn main() {\n    let d = Direction::Up;\n    match d {\n        Direction::Up => println!(\"up\"),\n        Direction::Down => println!(\"down\"),\n    }\n}",
      "holeyCode": "___\n    ___\n    ___\n___\n___\n    ___\n    ___\n        ___\n        ___\n    ___\n___"up\"),\n        Direction::Down => println!(\"down\"),\n    }\n}",
      "correctLines": [
        "enum Direction {",
        "    Up,",
        "    Down,",
        "}",
        "fn main() {",
        "    let d = Direction::Up;",
        "    match d {",
        "        Direction::Up => println!("up"),",
        "        Direction::Down => println!("down"),",
        "    }",
        "}"
      ],
      "lineHints": [
        "enum で列挙型を定義します。",
        "",
        "",
        "",
        "",
        "Direction::Up を使います。",
        "match でパターンマッチングします。",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["enum"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "up\n"
        }
      ]
    },
    {
      "title": "Option<T> で null を安全に",
      "description": "値があるかないかを表す「Option」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "Option とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 値があるかもしれない\n\n**Option<T>** は、値があれば `Some(値)`、なければ `None` を表します。null の代わりに使います。"
        },
        {
          "title": "Option の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# Some と None\n\nmatch で安全に値を取り出せます。\n\n**コード例：**\n```rust\nlet x: Option<i32> = Some(5);\nmatch x {\n    Some(n) => println!(\"{}\", n),\n    None => println!(\"none\"),\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // Some で値があることを示す\n    let val: Option<i32> = Some(42);\n    match val {\n        Some(n) => println!(\"{}\", n),\n        None => println!(\"none\"),\n    }\n}",
      "holeyCode": "___\n    ___\n    ___\n        ___\n        ___\n    ___\n___"{}\", n),\n        None => println!(\"none\"),\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let val: Option<i32> = Some(42);",
        "    match val {",
        "        Some(n) => println!("{}", n),",
        "        None => println!("none"),",
        "    }",
        "}"
      ],
      "lineHints": [
        "",
        "Some で値があることを示します。",
        "",
        "Some の中身を取り出します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["Some"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "Result<T, E> でエラー処理",
      "description": "成功と失敗を表す「Result」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "Result とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 成功か失敗か\n\n**Result<T, E>** は、成功なら `Ok(値)`、失敗なら `Err(エラー)` を表します。エラー処理に使います。"
        },
        {
          "title": "Result の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# Ok と Err\n\nmatch で成功と失敗を分岐できます。\n\n**コード例：**\n```rust\nfn divide(a: i32, b: i32) -> Result<i32, String> {\n    if b == 0 {\n        return Err(\"zero\".to_string());\n    }\n    Ok(a / b)\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn half(n: i32) -> Result<i32, String> {\n    if n % 2 != 0 {\n        return Err(\"odd\".to_string());\n    }\n    // Ok で成功を返す\n    Ok(n / 2)\n}\nfn main() {\n    match half(10) {\n        Ok(v) => println!(\"{}\", v),\n        Err(e) => println!(\"{}\", e),\n    }\n}",
      "holeyCode": "___\n    ___\n        ___\n    ___\n    // Ok と入力して成功した答えを返しましょう\\n    ___\n___\n___\n    ___\n        ___\n        ___\n    ___\n___"odd\".to_string());\n    }\n    // Ok と入力して成功した答えを返しましょう\n    ___(n / 2)\n}\nfn main() {\n    match half(10) {\n        Ok(v) => println!(\"{}\", v),\n        Err(e) => println!(\"{}\", e),\n    }\n}",
      "correctLines": [
        "fn half(n: i32) -> Result<i32, String> {",
        "    if n % 2 != 0 {",
        "        return Err("odd".to_string());",
        "    }",
        "    // Ok と入力して成功した答えを返しましょう",
        "    Ok(n / 2)",
        "}",
        "fn main() {",
        "    match half(10) {",
        "        Ok(v) => println!("{}", v),",
        "        Err(e) => println!("{}", e),",
        "    }",
        "}"
      ],
      "lineHints": [
        "",
        "",
        "Err でエラーを返します。",
        "",
        "Ok で成功を返します。",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["Ok"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "トレイトを定義しよう",
      "description": "共通の振る舞いを定義する「トレイト」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "トレイトとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 共通の機能を定義\n\n**トレイト** は、型が持つべきメソッドを定義します。インターフェースに似ています。"
        },
        {
          "title": "trait の定義",
          "image": "/illustrations/3d/robot.png",
          "content": "# trait キーワード\n\n`trait 名前 { メソッド }` で定義し、`impl 型 for トレイト` で実装します。\n\n**コード例：**\n```rust\ntrait Greet {\n    fn greet(&self);\n}\nimpl Greet for Person {\n    fn greet(&self) { ... }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// trait でトレイトを定義\ntrait Speak {\n    fn speak(&self);\n}\nstruct Dog;\nimpl Speak for Dog {\n    fn speak(&self) {\n        println!(\"woof\");\n    }\n}\nfn main() {\n    let d = Dog;\n    d.speak();\n}",
      "holeyCode": "___\n    ___\n___\n___\n___\n    ___\n        ___\n    ___\n___\n___\n    ___\n    ___\n___"woof\");\n    }\n}\nfn main() {\n    let d = Dog;\n    d.speak();\n}",
      "correctLines": [
        "trait Speak {",
        "    fn speak(&self);",
        "}",
        "struct Dog;",
        "impl Speak for Dog {",
        "    fn speak(&self) {",
        "        println!("woof");",
        "    }",
        "}",
        "fn main() {",
        "    let d = Dog;",
        "    d.speak();",
        "}"
      ],
      "lineHints": [
        "trait でトレイトを定義します。",
        "",
        "",
        "",
        "Dog に Speak を実装します。",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["trait"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "woof\n"
        }
      ]
    },
    {
      "title": "ジェネリクスを使おう",
      "description": "型を後から決められる「ジェネリクス」を学びましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "ジェネリクスとは？",
          "image": "/illustrations/3d_advanced/generics_glass.png",
          "content": "# 汎用的な型\n\n**ジェネリクス** を使うと、どんな型でも使える関数や構造体を作れます。`<T>` で型パラメータを定義します。"
        },
        {
          "title": "ジェネリック関数",
          "image": "/illustrations/3d/robot.png",
          "content": "# <T> で型を抽象化\n\n関数名の後に `<T>` をつけて、T を型として使います。\n\n**コード例：**\n```rust\nfn first<T>(arr: &[T]) -> &T {\n    &arr[0]\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// T を型パラメータとして使う\nfn print_val<T: std::fmt::Display>(val: T) {\n    println!(\"{}\", val);\n}\nfn main() {\n    print_val(42);\n    print_val(\"hello\");\n}",
      "holeyCode": "___\n    ___\n___\n___\n    ___\n    ___\n___"{}\", val);\n}\nfn main() {\n    print_val(42);\n    print_val(\"hello\");\n}",
      "correctLines": [
        "fn print_val<T: std::fmt::Display>(val: T) {",
        "    println!("{}", val);",
        "}",
        "fn main() {",
        "    print_val(42);",
        "    print_val("hello");",
        "}"
      ],
      "lineHints": [
        "T を型パラメータとして使います。",
        "",
        "",
        "",
        "i32 型で呼び出します。",
        "&str 型で呼び出します。",
        ""
      ],
      "candidates": {
        "variables": ["T"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\nhello\n"
        }
      ]
    }
  ]
}
