export const rust4Data = {
  "language": "rust",
  "lessonId": "rust-4",
  "lessonTitle": "Rust IV - トレイトとスマートポインタ",
  "lessonDescription": "Rustのトレイトとスマートポインタを学びます。抽象化と所有権の高度なパターンを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "トレイトの定義",
      "description": "共通の振る舞いを定義するトレイトを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "トレイトとは？（復習）",
          "image": "/illustrations/common/variable_label.png",
          "content": "# 「できること」の約束\n\n**トレイト** は、型が持つべきメソッドを定義する仕組みです。\n\n**たとえば：**\n- 「あいさつできる」トレイト → greet() メソッドを持つ\n- 「表示できる」トレイト → display() メソッドを持つ\n\n**コード例：**\n```rust\ntrait Greet {\n    fn greet(&self) -> String;  // メソッドの「約束」\n}\n```\n\nこれは「Greetできる型は、greet()メソッドを持つ」という約束です。"
        },
        {
          "title": "トレイトの実装",
          "image": "/illustrations/common/loop_infinity.png",
          "content": "# impl で約束を守る\n\n構造体にトレイトを実装すると、その構造体は「約束を守る」ことになります。\n\n**コード例：**\n```rust\nstruct Person { name: String }\n\nimpl Greet for Person {\n    fn greet(&self) -> String {\n        format!(\"Hello, {}\", self.name)\n    }\n}\n```\n\n**読み方：**\n- `impl Greet for Person` → 「PersonはGreetを実装する」\n- これでPersonは「あいさつできる」ようになった！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// trait でトレイトを定義\ntrait Speak {\n    fn speak(&self) -> String;\n}\n\nstruct Dog;\n\nimpl Speak for Dog {\n    fn speak(&self) -> String {\n        String::from(\"Woof!\")\n    }\n}\n\nfn main() {\n    let dog = Dog;\n    println!(\"{}\", dog.speak());\n}",
      "holeyCode": "// trait でトレイトを定義\n___ Speak {\n    fn speak(&self) -> String;\n}\n\nstruct Dog;\n\nimpl Speak for Dog {\n    fn speak(&self) -> String {\n        String::from(\"Woof!\")\n    }\n}\n\nfn main() {\n    let dog = Dog;\n    println!(\"{}\", dog.speak());\n}",
      "correctLines": [
        "// trait でトレイトを定義",
        "trait Speak {",
        "    fn speak(&self) -> String;",
        "}",
        "",
        "struct Dog;",
        "",
        "impl Speak for Dog {",
        "    fn speak(&self) -> String {",
        "        String::from(\"Woof!\")",
        "    }",
        "}",
        "",
        "fn main() {",
        "    let dog = Dog;",
        "    println!(\"{}\", dog.speak());",
        "}"
      ],
      "lineHints": [null, "trait でトレイトを定義します。", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      "candidates": {
        "keywords": ["trait", "impl", "struct"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Woof!\n"
        }
      ]
    },
    {
      "title": "derive 属性",
      "description": "トレイトを自動実装するderiveを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "derive（デライブ）とは？",
          "image": "/illustrations/common/box_container_open.png",
          "content": "# トレイトを「自動で」実装\n\n**#[derive(...)]** を使うと、よく使うトレイトを自分で書かなくても自動で実装してくれます。\n\n**たとえば：**\n構造体を `println!` で表示したいとき、普通は Display トレイトを実装する必要がありますが、`#[derive(Debug)]` を書くだけでOK！\n\n**コード例：**\n```rust\n#[derive(Debug)]  // Debug トレイトを自動実装\nstruct Point {\n    x: i32,\n    y: i32,\n}\n\nlet p = Point { x: 1, y: 2 };\nprintln!(\"{:?}\", p);  // Point { x: 1, y: 2 }\n```"
        },
        {
          "title": "よく使う derive トレイト",
          "image": "/illustrations/common/clipboard_list.png",
          "content": "# 覚えておくと便利な5つ\n\n**よく使うderiveトレイト：**\n```rust\nDebug     // {:?} でデバッグ表示できる\nClone     // .clone() でコピーを作れる\nCopy      // 代入時に自動でコピー（小さい型向け）\nPartialEq // == で比較できる\nDefault   // 初期値を自動で作れる\n```\n\n**複数指定もOK：**\n```rust\n#[derive(Debug, Clone, PartialEq)]\nstruct User {\n    name: String,\n    age: u32,\n}\n```\n\n`Debug` は特によく使います。デバッグ時に構造体の中身を見れて便利！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// derive でトレイトを自動実装\n#[derive(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn main() {\n    let user = User { name: String::from(\"Alice\"), age: 30 };\n    println!(\"{:?}\", user);\n}",
      "holeyCode": "// derive でトレイトを自動実装\n#[___(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn main() {\n    let user = User { name: String::from(\"Alice\"), age: 30 };\n    println!(\"{:?}\", user);\n}",
      "correctLines": [
        "// derive でトレイトを自動実装",
        "#[derive(Debug)]",
        "struct User {",
        "    name: String,",
        "    age: u32,",
        "}",
        "",
        "fn main() {",
        "    let user = User { name: String::from(\"Alice\"), age: 30 };",
        "    println!(\"{:?}\", user);",
        "}"
      ],
      "lineHints": [null, "derive でトレイトを自動実装します。", null, null, null, null, null, null, null, null, null],
      "candidates": {
        "attributes": ["derive", "cfg", "allow"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "User { name: \"Alice\", age: 30 }\n"
        }
      ]
    },
    {
      "title": "Box<T>",
      "description": "ヒープにデータを格納するBoxを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "Box（ボックス）とは？",
          "image": "/illustrations/common/beads_chain.png",
          "content": "# データを「ヒープ」に置く箱\n\n**Box<T>** は、データを「ヒープ」という特別な場所に置くための箱です。\n\n**メモリの2つの場所：**\n- **スタック**：小さくて速い。サイズが決まっているデータ向け\n- **ヒープ**：大きくて柔軟。サイズが大きいor変わるデータ向け\n\n**コード例：**\n```rust\nlet b = Box::new(5);  // 5をヒープに置く\nprintln!(\"{}\", *b);   // *で中身を取り出す → 5\n```\n\n`*` は「箱を開けて中身を見る」操作です。"
        },
        {
          "title": "いつ使う？",
          "image": "/illustrations/3d/loop.png",
          "content": "# サイズが決まらないとき\n\nBoxは、コンパイル時にサイズがわからない型に使います。\n\n**たとえば再帰的な型：**\n```rust\n// リストは「値 + 次のリスト」の繰り返し\nenum List {\n    Cons(i32, Box<List>),  // Boxで次を指す\n    Nil,                   // 終わり\n}\n```\n\n**なぜBoxが必要？**\n- `List` の中に `List` がある → 無限に大きくなる？\n- `Box` を使うと、サイズが固定（ポインタのサイズ）になる\n\n「中身」ではなく「中身への矢印」を持つイメージです。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // Box::new でヒープに格納\n    let x = Box::new(42);\n    println!(\"{}\", *x);\n}",
      "holeyCode": "fn main() {\n    // Box::new でヒープに格納\n    let x = ___::new(42);\n    println!(\"{}\", *x);\n}",
      "correctLines": [
        "fn main() {",
        "    // Box::new でヒープに格納",
        "    let x = Box::new(42);",
        "    println!(\"{}\", *x);",
        "}"
      ],
      "lineHints": [null, null, "Box::new でヒープに格納します。", null, null],
      "candidates": {
        "types": ["Box", "Rc", "Arc"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "Rc<T>",
      "description": "参照カウントでデータを共有しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "Rc（アールシー）とは？",
          "image": "/illustrations/common/nested_boxes.png",
          "content": "# 複数の「持ち主」を許可する仕組み\n\n**Rc<T>** は「Reference Counted（参照カウント）」の略で、複数の所有者でデータを共有できます。\n\n**普通の所有権：**\n1人だけが持ち主。渡したら元の人は使えない。\n\n**Rc を使うと：**\n複数人が同じデータの「持ち主」になれる！\n\n**コード例：**\n```rust\nuse std::rc::Rc;\n\nlet a = Rc::new(5);       // Rcでラップ\nlet b = Rc::clone(&a);    // bも持ち主になる\n// a も b も使える！\n```"
        },
        {
          "title": "参照カウントの仕組み",
          "image": "/illustrations/common/struct_block.png",
          "content": "# 「何人が持っているか」を数える\n\nRcは「今何人がこのデータを持っているか」を数えています。\n\n**コード例：**\n```rust\nlet a = Rc::new(5);\nprintln!(\"{}\", Rc::strong_count(&a));  // 1\n\nlet b = Rc::clone(&a);\nprintln!(\"{}\", Rc::strong_count(&a));  // 2\n```\n\n**いつデータが消える？**\n- カウントが0になったとき（誰も持っていないとき）\n- 最後の持ち主がいなくなると自動で片付けられる\n\n`Rc::clone` は「持ち主を1人増やす」操作です。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(String::from(\"Hello\"));\n    // clone で参照カウントを増やす\n    let b = Rc::clone(&a);\n    println!(\"{} {}\", a, b);\n}",
      "holeyCode": "use std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(String::from(\"Hello\"));\n    // clone で参照カウントを増やす\n    let b = Rc::___(&a);\n    println!(\"{} {}\", a, b);\n}",
      "correctLines": [
        "use std::rc::Rc;",
        "",
        "fn main() {",
        "    let a = Rc::new(String::from(\"Hello\"));",
        "    // clone で参照カウントを増やす",
        "    let b = Rc::clone(&a);",
        "    println!(\"{} {}\", a, b);",
        "}"
      ],
      "lineHints": [null, null, null, null, null, "Rc::clone で参照カウントを増やします。", null, null],
      "candidates": {
        "methods": ["clone", "new", "copy"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello Hello\n"
        }
      ]
    },
    {
      "title": "HashMap",
      "description": "キーと値のペアを格納しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "HashMap（ハッシュマップ）とは？",
          "image": "/illustrations/common/loop_gears.png",
          "content": "# 名前で引ける「辞書」\n\n**HashMap** は、「キー（名前）」と「値（データ）」をセットで保存する辞書です。\n\n**たとえば：**\n- 「青チーム」→ 10点\n- 「赤チーム」→ 15点\n\n**コード例：**\n```rust\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\nscores.insert(\"Blue\", 10);   // 追加\nscores.insert(\"Red\", 15);    // 追加\n```\n\n`use` で機能を読み込んでから使います。"
        },
        {
          "title": "値の取得",
          "image": "/illustrations/3d/either_fork.png",
          "content": "# get で安全に取り出す\n\n`get()` メソッドで値を取り出せます。見つからない可能性があるので、`Option` が返ってきます。\n\n**コード例：**\n```rust\n// getはOption<&V>を返す\nif let Some(score) = scores.get(\"Blue\") {\n    println!(\"青チームは{}点\", score);\n}\n```\n\n**ポイント：**\n- キーがあれば `Some(値)` が返る\n- キーがなければ `None` が返る\n- `if let` で安全に取り出せる\n\n存在しないキーでアクセスしてもプログラムが落ちない！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::collections::HashMap;\n\nfn main() {\n    let mut map = HashMap::new();\n    // insert でキーと値を追加\n    map.insert(\"a\", 1);\n    map.insert(\"b\", 2);\n    println!(\"{:?}\", map.get(\"a\"));\n}",
      "holeyCode": "use std::collections::HashMap;\n\nfn main() {\n    let mut map = HashMap::new();\n    // insert でキーと値を追加\n    map.___(\"a\", 1);\n    map.insert(\"b\", 2);\n    println!(\"{:?}\", map.get(\"a\"));\n}",
      "correctLines": [
        "use std::collections::HashMap;",
        "",
        "fn main() {",
        "    let mut map = HashMap::new();",
        "    // insert でキーと値を追加",
        "    map.insert(\"a\", 1);",
        "    map.insert(\"b\", 2);",
        "    println!(\"{:?}\", map.get(\"a\"));",
        "}"
      ],
      "lineHints": [null, null, null, null, null, "insert でキーと値を追加します。", null, null, null],
      "candidates": {
        "methods": ["insert", "put", "add"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Some(1)\n"
        }
      ]
    },
    {
      "title": "HashSet",
      "description": "一意な値の集合を管理しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "HashSet とは？",
          "image": "/illustrations/common/box.png",
          "content": "# 一意な値の集合\n\n**HashSet** は、重複のない値の集合です。\n\n```rust\nuse std::collections::HashSet;\n\nlet mut set = HashSet::new();\nset.insert(1);\nset.insert(2);\nset.insert(1); // 重複は無視\n```"
        },
        {
          "title": "集合演算",
          "image": "/illustrations/common/labeled_box.png",
          "content": "# 和集合、積集合など\n\n```rust\nset1.union(&set2)\nset1.intersection(&set2)\nset1.difference(&set2)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// HashSet をインポート\nuse std::collections::HashSet;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(1);\n    set.insert(2);\n    set.insert(1);\n    println!(\"{}\", set.len());\n}",
      "holeyCode": "// HashSet をインポート\nuse std::collections::___;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(1);\n    set.insert(2);\n    set.insert(1);\n    println!(\"{}\", set.len());\n}",
      "correctLines": [
        "// HashSet をインポート",
        "use std::collections::HashSet;",
        "",
        "fn main() {",
        "    let mut set = HashSet::new();",
        "    set.insert(1);",
        "    set.insert(2);",
        "    set.insert(1);",
        "    println!(\"{}\", set.len());",
        "}"
      ],
      "lineHints": [null, "HashSet をインポートします。", null, null, null, null, null, null, null, null],
      "candidates": {
        "types": ["HashSet", "HashMap", "BTreeSet"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    },
    {
      "title": "match ガード",
      "description": "パターンマッチに条件を追加しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "match ガードとは？",
          "image": "/illustrations/common/logic_gate_or.png",
          "content": "# 追加条件\n\n**if** でパターンに追加条件をつけられます。\n\n```rust\nmatch x {\n    n if n < 0 => println!(\"negative\"),\n    n if n > 0 => println!(\"positive\"),\n    _ => println!(\"zero\"),\n}\n```"
        },
        {
          "title": "使用例",
          "image": "/illustrations/common/branching_paths.png",
          "content": "# 複雑な条件分岐\n\n```rust\nmatch Some(5) {\n    Some(x) if x % 2 == 0 => println!(\"even\"),\n    Some(x) => println!(\"odd: {}\", x),\n    None => println!(\"none\"),\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let num = 7;\n    match num {\n        // if でマッチガードを追加\n        n if n % 2 == 0 => println!(\"even\"),\n        _ => println!(\"odd\"),\n    }\n}",
      "holeyCode": "fn main() {\n    let num = 7;\n    match num {\n        // if でマッチガードを追加\n        n ___ n % 2 == 0 => println!(\"even\"),\n        _ => println!(\"odd\"),\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let num = 7;",
        "    match num {",
        "        // if でマッチガードを追加",
        "        n if n % 2 == 0 => println!(\"even\"),",
        "        _ => println!(\"odd\"),",
        "    }",
        "}"
      ],
      "lineHints": [null, null, null, null, "マクロを使用して、文字列と改行を標準出力に出力します。", null, null, null],
      "candidates": {
        "keywords": ["if", "when", "where"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "odd\n"
        }
      ]
    },
    {
      "title": "impl Trait",
      "description": "トレイトを返す関数を簡潔に書きましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "impl Trait とは？",
          "image": "/illustrations/common/split_road.png",
          "content": "# 戻り値の型を抽象化\n\n**impl Trait** で、トレイトを実装する型を返せます。\n\n```rust\nfn make_iter() -> impl Iterator<Item = i32> {\n    vec![1, 2, 3].into_iter()\n}\n```"
        },
        {
          "title": "引数にも使える",
          "image": "/illustrations/common/circular_arrow.png",
          "content": "# ジェネリクスの代わり\n\n```rust\nfn print_all(iter: impl Iterator<Item = i32>) {\n    for x in iter {\n        println!(\"{}\", x);\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// impl でトレイトを実装する型を返す\nfn doubles(n: i32) -> impl Iterator<Item = i32> {\n    (0..n).map(|x| x * 2)\n}\n\nfn main() {\n    for x in doubles(3) {\n        println!(\"{}\", x);\n    }\n}",
      "holeyCode": "// impl でトレイトを実装する型を返す\nfn doubles(n: i32) -> ___ Iterator<Item = i32> {\n    (0..n).map(|x| x * 2)\n}\n\nfn main() {\n    for x in doubles(3) {\n        println!(\"{}\", x);\n    }\n}",
      "correctLines": [
        "// impl でトレイトを実装する型を返す",
        "fn doubles(n: i32) -> impl Iterator<Item = i32> {",
        "    (0..n).map(|x| x * 2)",
        "}",
        "",
        "fn main() {",
        "    for x in doubles(3) {",
        "        println!(\"{}\", x);",
        "    }",
        "}"
      ],
      "lineHints": [null, "関数（doubles）を定義します。", null, null, null, null, null, null, null, null],
      "candidates": {
        "keywords": ["impl", "dyn", "type"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0\n2\n4\n"
        }
      ]
    },
    {
      "title": "collect で変換",
      "description": "イテレータをコレクションに変換しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "collect とは？",
          "image": "/illustrations/common/cycle_arrows.png",
          "content": "# イテレータをコレクションに\n\n**collect** は、イテレータをVecやHashMapなどに変換します。\n\n```rust\nlet v: Vec<_> = (0..5).collect();\nlet s: String = vec!['a', 'b'].into_iter().collect();\n```"
        },
        {
          "title": "型ヒント",
          "image": "/illustrations/common/loading_spinner.png",
          "content": "# 変換先を指定\n\n```rust\n// ターボフィッシュ構文\nlet v = (0..5).collect::<Vec<_>>();\n\n// 変数の型注釈\nlet v: Vec<i32> = (0..5).collect();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // collect で Vec に変換\n    let nums: Vec<i32> = (1..=5).collect();\n    println!(\"{:?}\", nums);\n}",
      "holeyCode": "fn main() {\n    // collect で Vec に変換\n    let nums: Vec<i32> = (1..=5).___();\n    println!(\"{:?}\", nums);\n}",
      "correctLines": [
        "fn main() {",
        "    // collect で Vec に変換",
        "    let nums: Vec<i32> = (1..=5).collect();",
        "    println!(\"{:?}\", nums);",
        "}"
      ],
      "lineHints": [null, null, "collect でVecに変換します。", null, null],
      "candidates": {
        "methods": ["collect", "into", "to_vec"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 2, 3, 4, 5]\n"
        }
      ]
    },
    {
      "title": "enumerate でインデックス付き",
      "description": "イテレータにインデックスを付けましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "enumerate（イニュメレート）とは？",
          "image": "/illustrations/common/loop_infinity.png",
          "content": "# 番号と要素を一緒にもらう\n\n**enumerate** は、「何番目か」と「その要素」をセットで取り出せるメソッドです。\n\n**たとえば：**\n- 0番目: りんご\n- 1番目: バナナ\n- 2番目: みかん\n\n**コード例：**\n```rust\nfor (i, x) in vec![\"a\", \"b\", \"c\"].iter().enumerate() {\n    println!(\"{}: {}\", i, x);\n}\n// 0: a\n// 1: b\n// 2: c\n```"
        },
        {
          "title": "いつ使う？",
          "image": "/illustrations/3d/loop.png",
          "content": "# 「何番目か」が必要なとき\n\n番号（インデックス）と要素の両方が必要なときに便利です。\n\n**コード例：**\n```rust\nlet v = vec![10, 20, 30];\nfor (idx, val) in v.iter().enumerate() {\n    println!(\"{}番目の値は{}\", idx, val);\n}\n// 0番目の値は10\n// 1番目の値は20\n// 2番目の値は30\n```\n\n**ポイント：**\n- `(i, x)` でタプル（2つのセット）を受け取る\n- `i` にインデックス、`x` に要素が入る\n- インデックスは0から始まる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let items = vec![\"a\", \"b\", \"c\"];\n    // 1番目の i にインデックス、2番目の item に要素が入る\n    for (i, item) in items.iter().enumerate() {\n        println!(\"{}: {}\", i, item);\n    }\n}",
      "holeyCode": "fn main() {\n    let items = vec![\"a\", \"b\", \"c\"];\n    // 1番目の i にインデックス、2番目の item に要素が入る\n    for (i, item) in items.iter().___() {\n        println!(\"{}: {}\", i, item);\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let items = vec![\"a\", \"b\", \"c\"];",
        "    // 1番目の i にインデックス、2番目の item に要素が入る",
        "    for (i, item) in items.iter().enumerate() {",
        "        println!(\"{}: {}\", i, item);",
        "    }",
        "}"
      ],
      "lineHints": [null, null, null, "指定された回数や範囲で、繰り返し処理（ループ）を行います。", null, null, null],
      "candidates": {
        "methods": ["enumerate", "zip", "indexed"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "0: a\n1: b\n2: c\n"
        }
      ]
    }
  ]
}
