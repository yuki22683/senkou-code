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
          "title": "所有権（しょゆうけん）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# データの「持ち主」を決めるルール\n\n**所有権** は、Rust最大の特徴です。「このデータの持ち主は誰か」をはっきりさせる仕組みです。\n\n**ルール：**\n- データには必ず1人だけ「持ち主」がいる\n- 持ち主がいなくなると、データは自動的に片付けられる\n\n**たとえるなら：**\n- おもちゃは1人しか持てない\n- 持ち主が部屋を出たら、おもちゃは片付けられる\n\nこのルールのおかげで、Rustは「メモリリーク」（データが片付けられないバグ）を防げます！"
        },
        {
          "title": "ムーブ（移動）",
          "image": "/illustrations/3d/gear.png",
          "content": "# 所有権は「移動」する\n\n変数を別の変数に代入すると、所有権が **移動（ムーブ）** します。元の変数は使えなくなります。\n\n**コード例：**\n```rust\nlet s1 = String::from(\"hello\");  // s1 が持ち主\nlet s2 = s1;  // 所有権が s2 に移動！\n// ↓ s1 はもう使えない（エラーになる）\n// println!(\"{}\", s1);  // ダメ！\nprintln!(\"{}\", s2);  // OK！\n```\n\n**イメージ：**\nおもちゃを友だちにあげたら、自分はもう使えない。これがムーブです。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let s1 = String::from(\"hello\");\n    // s1 の所有権を移動\n    let s2 = s1;\n    println!(\"{}\", s2);\n}",
      "holeyCode": "fn main() {\n    let s1 = String::from(\"hello\");\n    // s1 の所有権を移動\n    let s2 = ___;\n    println!(\"{}\", s2);\n}",
      "correctLines": [
        "fn main() {",
        "    let s1 = String::from(\"hello\");",
        "    // s1 の所有権を移動",
        "    let s2 = s1;",
        "    println!(\"{}\", s2);",
        "}"
      ],
      "lineHints": [null, "String を作成します。", null, "s1 の所有権を s2 に移動します。", "マクロを使用して、文字列と改行を標準出力に出力します。", null],
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
          "title": "参照（さんしょう）とは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 所有権を渡さずに「借りる」\n\n**参照** を使うと、所有権を移さずにデータを「見せてもらう」ことができます。\n\n**たとえるなら：**\n- ムーブ = おもちゃをあげる（自分は使えない）\n- 参照 = おもちゃを見せる（自分も使える）\n\n**作り方：**\n`&`（アンパサンド）をつけると参照を作れます。\n\n```rust\nlet s = String::from(\"hello\");\nlet r = &s;  // sを借りる（見せてもらう）\n// s も r も使える！\n```"
        },
        {
          "title": "参照の使い方",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 関数に借りてもらう\n\n関数にデータを渡すとき、`&` をつけると「借りる」形になります。元の変数はそのまま使い続けられます。\n\n**コード例：**\n```rust\nfn calc_len(s: &String) -> usize {\n    s.len()  // 長さを返す\n}\n\nfn main() {\n    let text = String::from(\"hello\");\n    let len = calc_len(&text);  // textを貸す\n    // text はまだ使える！\n    println!(\"{}の長さは{}\", text, len);\n}\n```\n\n`&String` は「Stringを借りる」という意味です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn print_len(s: &String) {\n    println!(\"{}\", s.len());\n}\nfn main() {\n    let text = String::from(\"hello\");\n    // & で参照を渡す\n    print_len(&text);\n}",
      "holeyCode": "fn print_len(s: &String) {\n    println!(\"{}\", s.len());\n}\nfn main() {\n    let text = String::from(\"hello\");\n    // & で参照を渡す\n    print_len(___text);\n}",
      "correctLines": [
        "fn print_len(s: &String) {",
        "    println!(\"{}\", s.len());",
        "}",
        "fn main() {",
        "    let text = String::from(\"hello\");",
        "    // & で参照を渡す",
        "    print_len(&text);",
        "}"
      ],
      "lineHints": ["関数（print_len）を定義します。", null, null, null, null, null, "& で参照を渡します。", null],
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
          "title": "可変参照（かへんさんしょう）とは？",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# 「書き換えできる」借り方\n\n普通の参照 `&` は「見るだけ」ですが、**可変参照** `&mut` は「変更もできる」借り方です。\n\n**たとえるなら：**\n- `&` = 本を見せてもらう（読むだけ）\n- `&mut` = ノートを借りる（書き込みOK）\n\n**大事なルール：**\n- 可変参照は同時に1つだけ！\n- 「みんなで見る」か「1人で書く」かのどちらか\n\nこのルールで、データが同時に書き換えられるバグを防いでいます。"
        },
        {
          "title": "&mut の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# mut が2か所に必要\n\n変更できるようにするには、変数と参照の両方に `mut` が必要です。\n\n**コード例：**\n```rust\n// 1. 変数を mut で作る\nlet mut s = String::from(\"hello\");\n\n// 2. &mut で可変参照を渡す\nchange(&mut s);\n\nfn change(s: &mut String) {\n    s.push_str(\" world\");  // 変更できる！\n}\n```\n\n**ポイント：**\n- `let mut 変数` で変数を変更可能に\n- `&mut 変数` で可変参照を作る\n- 両方ないと変更できない！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn add_world(s: &mut String) {\n    s.push_str(\" world\");\n}\nfn main() {\n    // mut で可変変数にする\n    let mut text = String::from(\"hello\");\n    add_world(&mut text);\n    println!(\"{}\", text);\n}",
      "holeyCode": "fn add_world(s: &mut String) {\n    s.push_str(\" world\");\n}\nfn main() {\n    // mut で可変変数にする\n    let ___ text = String::from(\"hello\");\n    add_world(&mut text);\n    println!(\"{}\", text);\n}",
      "correctLines": [
        "fn add_world(s: &mut String) {",
        "    s.push_str(\" world\");",
        "}",
        "fn main() {",
        "    // mut で可変変数にする",
        "    let mut text = String::from(\"hello\");",
        "    add_world(&mut text);",
        "    println!(\"{}\", text);",
        "}"
      ],
      "lineHints": ["関数（add_world）を定義します。", "参照先を変更します。", null, null, null, "mut で可変変数にします。", "&mut で可変参照を渡します。", null, null],
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
          "title": "構造体（こうぞうたい）とは？",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# 関係あるデータをまとめる「設計図」\n\n**構造体（struct）** は、いくつかのデータをひとまとめにする仕組みです。\n\n**たとえば「点（座標）」のデータ：**\n- x座標\n- y座標\n\nこの2つは関係があるので、「Point（点）」としてまとめると便利です。\n\n**たとえば「人」のデータ：**\n- 名前\n- 年齢\n\nこれも「Person（人）」としてまとめられます。\n\n構造体は「こういうデータを持つ」という設計図です。"
        },
        {
          "title": "struct の定義のしかた",
          "image": "/illustrations/3d_advanced/class_template.png",
          "content": "# struct キーワードで定義\n\n`struct 名前 { フィールド }` で構造体を定義します。フィールドには名前と型を書きます。\n\n**コード例：**\n```rust\n// Point 構造体を定義\nstruct Point {\n    x: i32,  // xフィールド（整数）\n    y: i32,  // yフィールド（整数）\n}\n\n// 使い方\nlet p = Point { x: 10, y: 20 };\nprintln!(\"x={}, y={}\", p.x, p.y);\n```\n\n**ポイント：**\n- `struct 名前` で構造体を作る\n- `{ フィールド名: 型 }` でどんなデータを持つか決める\n- `.フィールド名` でアクセス"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// struct で構造体を定義\nstruct Rect {\n    width: i32,\n    height: i32,\n}\nfn main() {\n    let r = Rect { width: 3, height: 4 };\n    println!(\"{}\", r.width);\n}",
      "holeyCode": "// struct で構造体を定義\n___ Rect {\n    width: i32,\n    height: i32,\n}\nfn main() {\n    let r = Rect { width: 3, height: 4 };\n    println!(\"{}\", r.width);\n}",
      "correctLines": [
        "// struct で構造体を定義",
        "struct Rect {",
        "    width: i32,",
        "    height: i32,",
        "}",
        "fn main() {",
        "    let r = Rect { width: 3, height: 4 };",
        "    println!(\"{}\", r.width);",
        "}"
      ],
      "lineHints": [null, "構造体（Rect）を定義します。", null, null, null, null, "構造体のインスタンスを作成します。", "マクロを使用して、文字列と改行を標準出力に出力します。", null],
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
          "image": "/illustrations/3d/gear.png",
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
      "holeyCode": "struct Square {\n    side: i32,\n}\n// impl でメソッドを実装\n___ Square {\n    fn area(&self) -> i32 {\n        self.side * self.side\n    }\n}\nfn main() {\n    let s = Square { side: 5 };\n    println!(\"{}\", s.area());\n}",
      "correctLines": [
        "struct Square {",
        "    side: i32,",
        "}",
        "// impl でメソッドを実装",
        "impl Square {",
        "    fn area(&self) -> i32 {",
        "        self.side * self.side",
        "    }",
        "}",
        "fn main() {",
        "    let s = Square { side: 5 };",
        "    println!(\"{}\", s.area());",
        "}"
      ],
      "lineHints": [null, null, null, null, "impl でメソッドを実装します。", "関数（area）を定義します。", null, null, null, null, null, "マクロを使用して、文字列と改行を標準出力に出力します。", null],
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
      "holeyCode": "// enum で列挙型を定義\n___ Direction {\n    Up,\n    Down,\n}\nfn main() {\n    let d = Direction::Up;\n    match d {\n        Direction::Up => println!(\"up\"),\n        Direction::Down => println!(\"down\"),\n    }\n}",
      "correctLines": [
        "// enum で列挙型を定義",
        "enum Direction {",
        "    Up,",
        "    Down,",
        "}",
        "fn main() {",
        "    let d = Direction::Up;",
        "    match d {",
        "        Direction::Up => println!(\"up\"),",
        "        Direction::Down => println!(\"down\"),",
        "    }",
        "}"
      ],
      "lineHints": [null, "enum で列挙型を定義します。", null, null, null, null, "Direction::Up を使います。", "match でパターンマッチングします。", null, null, null, null],
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
          "title": "Option（オプション）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 「あるかもしれない、ないかもしれない」\n\n**Option<T>** は、値が「あるかもしれないし、ないかもしれない」ことを表す型です。\n\n**たとえば：**\n- 辞書で単語を探す → 見つかるかもしれないし、ないかもしれない\n- ゲームでアイテムを拾う → 落ちてるかもしれないし、ないかもしれない\n\n**2つの状態：**\n- `Some(値)` → 値がある！\n- `None` → 値がない...\n\n他の言語では `null` を使いますが、Rustでは `Option` で安全に扱います。"
        },
        {
          "title": "Option の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# match で安全に取り出す\n\n`match` を使って「ある場合」と「ない場合」で処理を分けます。\n\n**コード例：**\n```rust\nlet x: Option<i32> = Some(5);  // 値あり\n\nmatch x {\n    Some(n) => println!(\"値は{}です\", n),  // 5\n    None => println!(\"値がありません\"),\n}\n```\n\n**なぜ安全？**\n- `null` のように「あるつもりでアクセスしたら無かった」エラーが起きない\n- 「ない場合」の処理を書かないとコンパイルエラーになる\n- 強制的に両方のケースを考えることになる！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // Some で値があることを示す\n    let val: Option<i32> = Some(42);\n    match val {\n        Some(n) => println!(\"{}\", n),\n        None => println!(\"none\"),\n    }\n}",
      "holeyCode": "fn main() {\n    // Some で値があることを示す\n    let val: Option<i32> = ___(42);\n    match val {\n        Some(n) => println!(\"{}\", n),\n        None => println!(\"none\"),\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    // Some で値があることを示す",
        "    let val: Option<i32> = Some(42);",
        "    match val {",
        "        Some(n) => println!(\"{}\", n),",
        "        None => println!(\"none\"),",
        "    }",
        "}"
      ],
      "lineHints": [null, null, "Some で値があることを示します。", null, "マクロを使用して、文字列と改行を標準出力に出力します。", null, null, null],
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
          "title": "Result（リザルト）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 「成功」か「失敗」かを表す\n\n**Result<T, E>** は、処理が「成功したか失敗したか」を表す型です。\n\n**たとえば：**\n- ファイルを開く → 成功（内容）か失敗（エラー）\n- 0で割り算 → 成功（答え）か失敗（0で割れない！）\n\n**2つの状態：**\n- `Ok(値)` → 成功！値が入っている\n- `Err(エラー)` → 失敗...エラー情報が入っている\n\n`Option` は「あるか・ないか」、`Result` は「成功か・失敗か」という違いです。"
        },
        {
          "title": "Result の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# match で成功と失敗を分ける\n\n`match` で「成功したら」「失敗したら」の処理を書き分けます。\n\n**コード例：**\n```rust\nfn divide(a: i32, b: i32) -> Result<i32, String> {\n    if b == 0 {\n        return Err(\"0で割れません\".to_string());\n    }\n    Ok(a / b)  // 成功なら答えを返す\n}\n\nmatch divide(10, 2) {\n    Ok(v) => println!(\"答えは{}\", v),\n    Err(e) => println!(\"エラー: {}\", e),\n}\n```\n\n**ポイント：**\n- `Ok(値)` で成功を返す\n- `Err(エラー)` で失敗を返す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn half(n: i32) -> Result<i32, String> {\n    if n % 2 != 0 {\n        return Err(\"odd\".to_string());\n    }\n    // Ok で成功を返す\n    Ok(n / 2)\n}\nfn main() {\n    match half(10) {\n        Ok(v) => println!(\"{}\", v),\n        Err(e) => println!(\"{}\", e),\n    }\n}",
      "holeyCode": "fn half(n: i32) -> Result<i32, String> {\n    if n % 2 != 0 {\n        return Err(\"odd\".to_string());\n    }\n    // Ok で成功を返す\n    ___(n / 2)\n}\nfn main() {\n    match half(10) {\n        Ok(v) => println!(\"{}\", v),\n        Err(e) => println!(\"{}\", e),\n    }\n}",
      "correctLines": [
        "fn half(n: i32) -> Result<i32, String> {",
        "    if n % 2 != 0 {",
        "        return Err(\"odd\".to_string());",
        "    }",
        "    // Ok で成功を返す",
        "    Ok(n / 2)",
        "}",
        "fn main() {",
        "    match half(10) {",
        "        Ok(v) => println!(\"{}\", v),",
        "        Err(e) => println!(\"{}\", e),",
        "    }",
        "}"
      ],
      "lineHints": [null, null, "Err でエラーを返します。", null, null, "Ok で成功を返します。", null, null, null, null, null, null, null],
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
          "image": "/illustrations/3d/gear.png",
          "content": "# 「できること」の約束\n\n**トレイト** は、「この型はこういうことができる」という約束を定義します。\n\n**たとえば「鳴ける」という約束：**\n- 犬は「ワン」と鳴く\n- 猫は「ニャー」と鳴く\n- 両方とも「鳴ける」能力がある\n\nトレイトは「鳴ける動物は、鳴き声を出すメソッドを持つ」という約束です。\n\n**他の言語との比較：**\n- Java: インターフェース\n- TypeScript: インターフェース\n\nに似た概念です。"
        },
        {
          "title": "trait の定義と実装",
          "image": "/illustrations/3d/gear.png",
          "content": "# 約束を作って、守る\n\n1. `trait` で「約束」を定義\n2. `impl トレイト for 型` で「約束を守る」実装をする\n\n**コード例：**\n```rust\n// 1. トレイト（約束）を定義\ntrait Speak {\n    fn speak(&self);  // 鳴くメソッドを持つ約束\n}\n\n// 2. Dog構造体がトレイトを実装\nstruct Dog;\nimpl Speak for Dog {\n    fn speak(&self) {\n        println!(\"woof\");\n    }\n}\n```\n\n「DogはSpeakができる」ということになります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// trait でトレイトを定義\ntrait Speak {\n    fn speak(&self);\n}\nstruct Dog;\nimpl Speak for Dog {\n    fn speak(&self) {\n        println!(\"woof\");\n    }\n}\nfn main() {\n    let d = Dog;\n    d.speak();\n}",
      "holeyCode": "// trait でトレイトを定義\n___ Speak {\n    fn speak(&self);\n}\nstruct Dog;\nimpl Speak for Dog {\n    fn speak(&self) {\n        println!(\"woof\");\n    }\n}\nfn main() {\n    let d = Dog;\n    d.speak();\n}",
      "correctLines": [
        "// trait でトレイトを定義",
        "trait Speak {",
        "    fn speak(&self);",
        "}",
        "struct Dog;",
        "impl Speak for Dog {",
        "    fn speak(&self) {",
        "        println!(\"woof\");",
        "    }",
        "}",
        "fn main() {",
        "    let d = Dog;",
        "    d.speak();",
        "}"
      ],
      "lineHints": [null, "trait でトレイトを定義します。", null, null, null, "Dog に Speak を実装します。", null, null, null, null, null, null, null, null],
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
          "content": "# どんな型でも使える「万能」の仕組み\n\n**ジェネリクス** は、型を後から決められる仕組みです。\n\n**なぜ便利？**\n同じような関数を何度も書かなくてすみます。\n\n**たとえば：**\n- 数字の配列の最初の要素を取る関数\n- 文字列の配列の最初の要素を取る関数\n\n両方とも「最初の要素を取る」のは同じなのに、型が違うだけで別の関数を書くのは大変！\n\nジェネリクスなら、`<T>` で「型は後で決める」と書くだけで、どんな型でも使える関数が作れます。"
        },
        {
          "title": "ジェネリック関数の書き方",
          "image": "/illustrations/3d/gear.png",
          "content": "# <T> で型を「あとで決める」\n\n関数名の後に `<T>` をつけて、`T` を「型」として使います。\n\n**コード例：**\n```rust\n// Tはどんな型でもOK\nfn first<T>(arr: &[T]) -> &T {\n    &arr[0]  // 最初の要素を返す\n}\n\n// 使い方\nfirst(&[1, 2, 3]);         // Tはi32\nfirst(&[\"a\", \"b\", \"c\"]);   // Tは&str\n```\n\n**読み方：**\n- `<T>` → 「Tという名前の型を使うよ」\n- `T` は慣習で「Type（型）」の頭文字\n- 複数の型が必要なら `<T, U>` のように書く"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// T を型パラメータとして使う\nfn print_val<T: std::fmt::Display>(val: T) {\n    println!(\"{}\", val);\n}\nfn main() {\n    print_val(42);\n    print_val(\"hello\");\n}",
      "holeyCode": "// T を型パラメータとして使う\nfn print_val<___: std::fmt::Display>(val: T) {\n    println!(\"{}\", val);\n}\nfn main() {\n    print_val(42);\n    print_val(\"hello\");\n}",
      "correctLines": [
        "// T を型パラメータとして使う",
        "fn print_val<T: std::fmt::Display>(val: T) {",
        "    println!(\"{}\", val);",
        "}",
        "fn main() {",
        "    print_val(42);",
        "    print_val(\"hello\");",
        "}"
      ],
      "lineHints": [null, "T を型パラメータとして使います。", null, null, null, "i32 型で呼び出します。", "&str 型で呼び出します。", null],
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
