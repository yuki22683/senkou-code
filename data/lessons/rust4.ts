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
      "correctCode": "// Speakトレイトを定義\\ntrait Speak {\\n    fn speak(&self) -> String;\\n}\\n\\nstruct Dog;\\n\\nimpl Speak for Dog {\\n    fn speak(&self) -> String {\\n        String::from(\"ワン！\")\\n    }\\n}\\n\\nfn main() {\\n    let dog = Dog;\\n    println!(\"{}\", dog.speak());\\n}",
      "holeyCode": "// Speakトレイトを定義\\ntrait ___ {\\n    fn ___ (&self) -> String;\\n___\\n___\\nstruct ___;\\n___\\nimpl ___ for ___ {\\n    fn ___ (&self) -> String {\\n        String::___(\"ワン！\")\\n    ___\\n___\\n___\\nfn ___ () {\\n    let ___ = Dog;\\n    ___!(\"{}\", dog.speak());\\n___",
      "correctLines": [
          "// Speakトレイトを定義",
          "trait Speak {",
          "    fn speak(&self) -> String;",
          "}",
          "",
          "struct Dog;",
          "",
          "impl Speak for Dog {",
          "    fn speak(&self) -> String {",
          "        String::from(\"ワン！\")",
          "    }",
          "}",
          "",
          "fn main() {",
          "    let dog = Dog;",
          "    println!(\"{}\", dog.speak());",
          "}"
        ],
      "lineHints": [
          null,
          "trait でトレイトを定義します。",
          "関数（speak）を定義します。",
          "ここを正しく入力してください。",
          null,
          "構造体（Dog）を定義します。",
          null,
          "ここを正しく入力してください。",
          "関数（speak）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "trait",
            "impl",
            "struct"
          ],
          "others": ["Speak", "speak(&self)", "}", "Dog", "from", "main()", "dog", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ワン！\\n"
          }
        ]
      },
    {
      "title": "derive 属性",
      "correctCode": "// derive でトレイトを自動実装\\n#[derive(Debug)]\\nstruct User {\\n    name: String,\\n    age: u32,\\n}\\n\\nfn main() {\\n    let user = User { name: String::from(\"アリス\"), age: 30 };\\n    println!(\"{:?}\", user);\\n}",
      "holeyCode": "// derive でトレイトを自動実装\\n___\\nstruct ___ {\\n    name: ___,\\n    age: ___,\\n___\\n___\\nfn ___ () {\\n    let ___ = User { name: String::from(\"アリス\"), age: 30 };\\n    ___!(\"{:?}\", user);\\n___",
      "correctLines": [
          "// derive でトレイトを自動実装",
          "#[derive(Debug)]",
          "struct User {",
          "    name: String,",
          "    age: u32,",
          "}",
          "",
          "fn main() {",
          "    let user = User { name: String::from(\"アリス\"), age: 30 };",
          "    println!(\"{:?}\", user);",
          "}"
        ],
      "lineHints": [
          null,
          "ここを正しく入力してください。",
          "derive でトレイトを自動実装します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "attributes": [
            "derive",
            "cfg",
            "allow"
          ],
          "others": ["User", "String", "u32", "}", "main()", "user", "println", "#[derive(Debug)]", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "User { name: \"アリス\", age: 30 }\
"
          }
        ]
      },
    {
      "title": "Box<T>",
      "correctCode": "fn main() {\\n    // Box::new でヒープに格納\\n    let x = Box::new(42);\\n    println!(\"{}\", *x);\\n}",
      "holeyCode": "fn ___ () {\\n    // Box::new でヒープに格納\\n    let ___ = Box::new(42);\\n    ___!(\"{}\", *x);\\n___",
      "correctLines": [
          "fn main() {",
          "    // Box::new でヒープに格納",
          "    let x = Box::new(42);",
          "    println!(\"{}\", *x);",
          "}"
        ],
      "lineHints": [
          "Box::new でヒープに格納します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "Box",
            "Rc",
            "Arc"
          ],
          "others": ["main()", "x", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "Rc<T>",
      "correctCode": "use std::rc::Rc;\\n\\nfn main() {\\n    let a = Rc::new(String::from(\"こんにちは\"));\\n    // clone で参照カウントを増やす\\n    let b = Rc::clone(&a);\\n    println!(\"{} {}\", a, b);\\n}",
      "holeyCode": "use std::___::___;\\n___\\nfn ___ () {\\n    let ___ = Rc::new(String::from(\"こんにちは\"));\\n    // clone で参照カウントを増やす\\n    let ___ = Rc::clone(&a);\\n    ___!(\"{} {}\", a, b);\\n___",
      "correctLines": [
          "use std::rc::Rc;",
          "",
          "fn main() {",
          "    let a = Rc::new(String::from(\"こんにちは\"));",
          "    // clone で参照カウントを増やす",
          "    let b = Rc::clone(&a);",
          "    println!(\"{} {}\", a, b);",
          "}"
        ],
      "lineHints": [
          "Rc::clone で参照カウントを増やします。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "clone",
            "new",
            "copy"
          ],
          "others": ["rc", "Rc", "main()", "a", "b", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは こんにちは\\n"
          }
        ]
      },
    {
      "title": "HashMap",
      "correctCode": "use std::collections::HashMap;\\n\\nfn main() {\\n    let mut map = HashMap::new();\\n    // insert でキーと値を追加\\n    map.insert(\"a\", 1);\\n    map.insert(\"b\", 2);\\n    println!(\"{:?}\", map.get(\"a\"));\\n}",
      "holeyCode": "use std::___::___;\\n___\\nfn ___ () {\\n    let mut ___ = HashMap::new();\\n    // insert でキーと値を追加\\n    map.___(\"a\", 1);\\n    map.___(\"b\", 2);\\n    ___!(\"{:?}\", map.get(\"a\"));\\n___",
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
      "lineHints": [
          "insert でキーと値を追加します。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "insert",
            "put",
            "add"
          ],
          "others": ["collections", "HashMap", "main()", "map", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Some(1)\\n"
          }
        ]
      },
    {
      "title": "HashSet",
      "correctCode": "// HashSet をインポート\\nuse std::collections::HashSet;\\n\\nfn main() {\\n    let mut set = HashSet::new();\\n    set.insert(1);\\n    set.insert(2);\\n    set.insert(1);\\n    println!(\"{}\", set.len());\\n}",
      "holeyCode": "// HashSet をインポート\\nuse std::___::___;\\n___\\nfn ___ () {\\n    let mut ___ = HashSet::new();\\n    set.___(1);\\n    set.___(2);\\n    set.___(1);\\n    ___!(\"{}\", set.len());\\n___",
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
      "lineHints": [
          null,
          "HashSet をインポートします。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "types": [
            "HashSet",
            "HashMap",
            "BTreeSet"
          ],
          "others": ["collections", "main()", "set", "insert", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "match ガード",
      "correctCode": "fn main() {\\n    let num = 7;\\n    match num {\\n        // if でマッチガードを追加\\n        n if n % 2 == 0 => println!(\"even\"),\\n        _ => println!(\"odd\"),\\n    }\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = 7;\\n    match ___ {\\n        // if でマッチガードを追加\\n        n if n % 2 == 0 => ___!(\"even\"),\\n        _ => ___!(\"odd\"),\\n    ___\\n___",
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
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "再代入可能な変数を宣言し、数値を代入します。",
          "ここを正しく入力してください。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "when",
            "where"
          ],
          "others": ["main()", "num", "println", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "odd\\n"
          }
        ]
      },
    {
      "title": "impl Trait",
      "correctCode": "// impl でトレイトを実装する型を返す\\nfn doubles(n: i32) -> impl Iterator<Item = i32> {\\n    (0..n).map(|x| x * 2)\\n}\\n\\nfn main() {\\n    for x in doubles(3) {\\n        println!(\"{}\", x);\\n    }\\n}",
      "holeyCode": "// impl でトレイトを実装する型を返す\\nfn ___ (n: i32) -> impl Iterator<Item = i32> {\\n    (0..n).___(|x| x * 2)\\n___\\n___\\nfn ___ () {\\n    for x in ___(___) {\\n        ___!(\"{}\", x);\\n    ___\\n___",
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
      "lineHints": [
          null,
          "関数（doubles）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "繰り返し処理（ループ）を開始する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "impl",
            "dyn",
            "type"
          ],
          "others": ["doubles(n:", "map", "}", "main()", "doubles", "3", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0\\n2\\n4\\n"
          }
        ]
      },
    {
      "title": "collect で変換",
      "correctCode": "fn main() {\\n    // collect で Vec に変換\\n    let nums: Vec<i32> = (1..=5).collect();\\n    println!(\"{:?}\", nums);\\n}",
      "holeyCode": "fn ___ () {\\n    // collect で Vec に変換\\n    let nums: Vec<i32> = (1..=5).___();\\n    ___!(\"{:?}\", nums);\\n___",
      "correctLines": [
          "fn main() {",
          "    // collect で Vec に変換",
          "    let nums: Vec<i32> = (1..=5).collect();",
          "    println!(\"{:?}\", nums);",
          "}"
        ],
      "lineHints": [
          "collect でVecに変換します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "collect",
            "into",
            "to_vec"
          ],
          "others": ["main()", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 2, 3, 4, 5]\\n"
          }
        ]
      },
    {
      "title": "enumerate でインデックス付き",
      "correctCode": "fn main() {\\n    let items = vec![\"a\", \"b\", \"c\"];\\n    // 1番目の i にインデックス、2番目の item に要素が入る\\n    for (i, item) in items.iter().enumerate() {\\n        println!(\"{}: {}\", i, item);\\n    }\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = vec![\"a\", \"b\", \"c\"];\\n    // 1番目の i にインデックス、2番目の item に要素が入る\\n    for (i, item) in items.iter().___() {\\n        ___!(\"{}: {}\", i, item);\\n    ___\\n___",
      "correctLines": [
          "fn main() {",
          "    let items = vec![\"a\", \"b\", \"c\"];",
          "    // 1番目の i にインデックス、2番目の item に要素が入る",
          "    for (i, item) in items.iter().enumerate() {",
          "        println!(\"{}: {}\", i, item);",
          "    }",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          null,
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "enumerate",
            "zip",
            "indexed"
          ],
          "others": ["main()", "items", "println", "}", "}", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "0: a\\n1: b\\n2: c\\n"
          }
        ]
      }
  ]
}
