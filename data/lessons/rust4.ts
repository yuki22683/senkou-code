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
          "title": "トレイトとは？",
          "content": "# 共通のインターフェース\n\n**トレイト** は、型が持つべきメソッドを定義します。\n\n```rust\ntrait Greet {\n    fn greet(&self) -> String;\n}\n```"
        },
        {
          "title": "実装",
          "content": "# impl で実装\n\n```rust\nstruct Person { name: String }\n\nimpl Greet for Person {\n    fn greet(&self) -> String {\n        format!(\"Hello, {}\", self.name)\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "trait Speak {\n    fn speak(&self) -> String;\n}\n\nstruct Dog;\n\nimpl Speak for Dog {\n    fn speak(&self) -> String {\n        String::from(\"Woof!\")\n    }\n}\n\nfn main() {\n    let dog = Dog;\n    println!(\"{}\", dog.speak());\n}",
      "holeyCode": "___ Speak {\n    fn speak(&self) -> String;\n}\n\nstruct Dog;\n\nimpl Speak for Dog {\n    fn speak(&self) -> String {\n        String::from(\"Woof!\")\n    }\n}\n\nfn main() {\n    let dog = Dog;\n    println!(\"{}\", dog.speak());\n}",
      "correctLines": [
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
      "lineHints": [
        "trait でトレイトを定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "title": "derive とは？",
          "content": "# 自動実装\n\n**#[derive(...)]** で標準トレイトを自動実装できます。\n\n```rust\n#[derive(Debug, Clone, PartialEq)]\nstruct Point {\n    x: i32,\n    y: i32,\n}\n```"
        },
        {
          "title": "よく使うトレイト",
          "content": "# 標準 derive\n\n```rust\nDebug     // {:?} で表示\nClone     // .clone() で複製\nCopy      // コピーセマンティクス\nPartialEq // == で比較\nDefault   // デフォルト値\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "#[derive(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn main() {\n    let user = User { name: String::from(\"Alice\"), age: 30 };\n    println!(\"{:?}\", user);\n}",
      "holeyCode": "#[___(Debug)]\nstruct User {\n    name: String,\n    age: u32,\n}\n\nfn main() {\n    let user = User { name: String::from(\"Alice\"), age: 30 };\n    println!(\"{:?}\", user);\n}",
      "correctLines": [
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
      "lineHints": [
        "derive でトレイトを自動実装します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "title": "Box とは？",
          "content": "# ヒープアロケーション\n\n**Box<T>** は、データをヒープに格納するスマートポインタです。\n\n```rust\nlet b = Box::new(5);\nprintln!(\"{}\", *b);\n```"
        },
        {
          "title": "使いどころ",
          "content": "# 再帰型など\n\n```rust\n// コンパイル時にサイズ不明な型\nenum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let x = Box::new(42);\n    println!(\"{}\", *x);\n}",
      "holeyCode": "fn main() {\n    let x = ___::new(42);\n    println!(\"{}\", *x);\n}",
      "correctLines": [
        "fn main() {",
        "    let x = Box::new(42);",
        "    println!(\"{}\", *x);",
        "}"
      ],
      "lineHints": [
        null,
        "Box::new でヒープに格納します。",
        null,
        null
      ],
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
          "title": "Rc とは？",
          "content": "# 参照カウント\n\n**Rc<T>** は、複数の所有者でデータを共有できます。\n\n```rust\nuse std::rc::Rc;\n\nlet a = Rc::new(5);\nlet b = Rc::clone(&a);\n```"
        },
        {
          "title": "参照カウントの確認",
          "content": "# strong_count\n\n```rust\nprintln!(\"{}\", Rc::strong_count(&a)); // 2\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(String::from(\"Hello\"));\n    let b = Rc::clone(&a);\n    println!(\"{} {}\", a, b);\n}",
      "holeyCode": "use std::rc::Rc;\n\nfn main() {\n    let a = Rc::new(String::from(\"Hello\"));\n    let b = Rc::___(&a);\n    println!(\"{} {}\", a, b);\n}",
      "correctLines": [
        "use std::rc::Rc;",
        "",
        "fn main() {",
        "    let a = Rc::new(String::from(\"Hello\"));",
        "    let b = Rc::clone(&a);",
        "    println!(\"{} {}\", a, b);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "Rc::clone で参照カウントを増やします。",
        null,
        null
      ],
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
          "title": "HashMap とは？",
          "content": "# キーと値のマップ\n\n**HashMap** は、キーと値のペアを格納します。\n\n```rust\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\nscores.insert(\"Blue\", 10);\n```"
        },
        {
          "title": "値の取得",
          "content": "# get メソッド\n\n```rust\nif let Some(score) = scores.get(\"Blue\") {\n    println!(\"{}\", score);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::collections::HashMap;\n\nfn main() {\n    let mut map = HashMap::new();\n    map.insert(\"a\", 1);\n    map.insert(\"b\", 2);\n    println!(\"{:?}\", map.get(\"a\"));\n}",
      "holeyCode": "use std::collections::HashMap;\n\nfn main() {\n    let mut map = HashMap::new();\n    map.___(\"a\", 1);\n    map.insert(\"b\", 2);\n    println!(\"{:?}\", map.get(\"a\"));\n}",
      "correctLines": [
        "use std::collections::HashMap;",
        "",
        "fn main() {",
        "    let mut map = HashMap::new();",
        "    map.insert(\"a\", 1);",
        "    map.insert(\"b\", 2);",
        "    println!(\"{:?}\", map.get(\"a\"));",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "insert でキーと値を追加します。",
        null,
        null,
        null
      ],
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
          "content": "# 一意な値の集合\n\n**HashSet** は、重複のない値の集合です。\n\n```rust\nuse std::collections::HashSet;\n\nlet mut set = HashSet::new();\nset.insert(1);\nset.insert(2);\nset.insert(1); // 重複は無視\n```"
        },
        {
          "title": "集合演算",
          "content": "# 和集合、積集合など\n\n```rust\nset1.union(&set2)\nset1.intersection(&set2)\nset1.difference(&set2)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "use std::collections::HashSet;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(1);\n    set.insert(2);\n    set.insert(1);\n    println!(\"{}\", set.len());\n}",
      "holeyCode": "use std::collections::___;\n\nfn main() {\n    let mut set = HashSet::new();\n    set.insert(1);\n    set.insert(2);\n    set.insert(1);\n    println!(\"{}\", set.len());\n}",
      "correctLines": [
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
      "lineHints": [
        "HashSet をインポートします。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "content": "# 追加条件\n\n**if** でパターンに追加条件をつけられます。\n\n```rust\nmatch x {\n    n if n < 0 => println!(\"negative\"),\n    n if n > 0 => println!(\"positive\"),\n    _ => println!(\"zero\"),\n}\n```"
        },
        {
          "title": "使用例",
          "content": "# 複雑な条件分岐\n\n```rust\nmatch Some(5) {\n    Some(x) if x % 2 == 0 => println!(\"even\"),\n    Some(x) => println!(\"odd: {}\", x),\n    None => println!(\"none\"),\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let num = 7;\n    match num {\n        n if n % 2 == 0 => println!(\"even\"),\n        _ => println!(\"odd\"),\n    }\n}",
      "holeyCode": "fn main() {\n    let num = 7;\n    match num {\n        n ___ n % 2 == 0 => println!(\"even\"),\n        _ => println!(\"odd\"),\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let num = 7;",
        "    match num {",
        "        n if n % 2 == 0 => println!(\"even\"),",
        "        _ => println!(\"odd\"),",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        "if でマッチガードを追加します。",
        null,
        null,
        null
      ],
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
          "content": "# 戻り値の型を抽象化\n\n**impl Trait** で、トレイトを実装する型を返せます。\n\n```rust\nfn make_iter() -> impl Iterator<Item = i32> {\n    vec![1, 2, 3].into_iter()\n}\n```"
        },
        {
          "title": "引数にも使える",
          "content": "# ジェネリクスの代わり\n\n```rust\nfn print_all(iter: impl Iterator<Item = i32>) {\n    for x in iter {\n        println!(\"{}\", x);\n    }\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn doubles(n: i32) -> impl Iterator<Item = i32> {\n    (0..n).map(|x| x * 2)\n}\n\nfn main() {\n    for x in doubles(3) {\n        println!(\"{}\", x);\n    }\n}",
      "holeyCode": "fn doubles(n: i32) -> ___ Iterator<Item = i32> {\n    (0..n).map(|x| x * 2)\n}\n\nfn main() {\n    for x in doubles(3) {\n        println!(\"{}\", x);\n    }\n}",
      "correctLines": [
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
      "lineHints": [
        "impl でトレイトを実装する型を返します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
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
          "content": "# イテレータをコレクションに\n\n**collect** は、イテレータをVecやHashMapなどに変換します。\n\n```rust\nlet v: Vec<_> = (0..5).collect();\nlet s: String = vec!['a', 'b'].into_iter().collect();\n```"
        },
        {
          "title": "型ヒント",
          "content": "# 変換先を指定\n\n```rust\n// ターボフィッシュ構文\nlet v = (0..5).collect::<Vec<_>>();\n\n// 変数の型注釈\nlet v: Vec<i32> = (0..5).collect();\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums: Vec<i32> = (1..=5).collect();\n    println!(\"{:?}\", nums);\n}",
      "holeyCode": "fn main() {\n    let nums: Vec<i32> = (1..=5).___();\n    println!(\"{:?}\", nums);\n}",
      "correctLines": [
        "fn main() {",
        "    let nums: Vec<i32> = (1..=5).collect();",
        "    println!(\"{:?}\", nums);",
        "}"
      ],
      "lineHints": [
        null,
        "collect でVecに変換します。",
        null,
        null
      ],
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
          "title": "enumerate とは？",
          "content": "# インデックスと要素\n\n**enumerate** は、(インデックス, 要素) のタプルを返します。\n\n```rust\nfor (i, x) in vec![\"a\", \"b\", \"c\"].iter().enumerate() {\n    println!(\"{}: {}\", i, x);\n}\n```"
        },
        {
          "title": "使用例",
          "content": "# 位置情報が必要なとき\n\n```rust\nlet v = vec![10, 20, 30];\nfor (idx, val) in v.iter().enumerate() {\n    println!(\"Index {}: {}\", idx, val);\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let items = vec![\"a\", \"b\", \"c\"];\n    for (i, item) in items.iter().enumerate() {\n        println!(\"{}: {}\", i, item);\n    }\n}",
      "holeyCode": "fn main() {\n    let items = vec![\"a\", \"b\", \"c\"];\n    for (i, item) in items.iter().___() {\n        println!(\"{}: {}\", i, item);\n    }\n}",
      "correctLines": [
        "fn main() {",
        "    let items = vec![\"a\", \"b\", \"c\"];",
        "    for (i, item) in items.iter().enumerate() {",
        "        println!(\"{}: {}\", i, item);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "enumerate でインデックスを付けます。",
        null,
        null,
        null
      ],
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
