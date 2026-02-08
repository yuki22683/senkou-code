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
      "correctCode": "fn main() {\\n    let s1 = String::from(\"こんにちは\");\\n    // s1 の所有権を移動\\n    let s2 = s1;\\n    println!(\"{}\", s2);\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = String::from(\"こんにちは\");\\n    // s1 の所有権を移動\\n    let ___ = s1;\\n    ___!(\"{}\", s2);\\n___",
      "correctLines": [
          "fn main() {",
          "    let s1 = String::from(\"こんにちは\");",
          "    // s1 の所有権を移動",
          "    let s2 = s1;",
          "    println!(\"{}\", s2);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "String を作成します。",
          null,
          "s1 の所有権を s2 に移動します。",
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "s1"
          ],
          "others": ["main()", "s2", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "参照と借用",
      "correctCode": "fn print_len(s: &String) {\\n    println!(\"{}\", s.len());\\n}\\nfn main() {\\n    let text = String::from(\"こんにちは\");\\n    // & で参照を渡す\\n    print_len(&text);\\n}",
      "holeyCode": "fn ___ (s: &String) {\\n    ___!(\"{}\", s.len());\\n___\\nfn ___ () {\\n    let ___ = String::from(\"こんにちは\");\\n    // & で参照を渡す\\n    ___(&text);\\n___",
      "correctLines": [
          "fn print_len(s: &String) {",
          "    println!(\"{}\", s.len());",
          "}",
          "fn main() {",
          "    let text = String::from(\"こんにちは\");",
          "    // & で参照を渡す",
          "    print_len(&text);",
          "}"
        ],
      "lineHints": [
          "関数（print_len）を定義します。",
          "& で参照を渡します。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["print_len(s:", "println", "}", "main()", "text", "print_len", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "可変参照",
      "correctCode": "fn add_world(s: &mut String) {\\n    s.push_str(\" world\");\\n}\\nfn main() {\\n    // mut で可変変数にする\\n    let mut text = String::from(\"hello\");\\n    add_world(&mut text);\\n    println!(\"{}\", text);\\n}",
      "holeyCode": "fn ___ (s: &mut String) {\\n    s.___(\" world\");\\n___\\nfn ___ () {\\n    // mut で可変変数にする\\n    let mut ___ = String::from(\"hello\");\\n    ___(&mut text);\\n    ___!(\"{}\", text);\\n___",
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
      "lineHints": [
          "関数（add_world）を定義します。",
          "参照先を変更します。",
          "mut で可変変数にします。",
          "&mut で可変参照を渡します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "mut"
          ],
          "others": ["add_world(s:", "push_str", "}", "main()", "text", "add_world", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "hello world\\n"
          }
        ]
      },
    {
      "title": "構造体を定義しよう",
      "correctCode": "// Rect構造体を定義\\nstruct Rect {\\n    width: i32,\\n    height: i32,\\n}\\nfn main() {\\n    let r = Rect { width: 3, height: 4 };\\n    println!(\"{}\", r.width);\\n}",
      "holeyCode": "// Rect構造体を定義\\nstruct ___ {\\n    width: ___,\\n    height: ___,\\n___\\nfn ___ () {\\n    let ___ = Rect { width: 3, height: 4 };\\n    ___!(\"{}\", r.width);\\n___",
      "correctLines": [
          "// Rect構造体を定義",
          "struct Rect {",
          "    width: i32,",
          "    height: i32,",
          "}",
          "fn main() {",
          "    let r = Rect { width: 3, height: 4 };",
          "    println!(\"{}\", r.width);",
          "}"
        ],
      "lineHints": [
          null,
          "構造体（Rect）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "構造体のインスタンスを作成します。",
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["Rect", "i32", "}", "main()", "r", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "impl でメソッドを追加",
      "correctCode": "struct Square {\\n    side: i32,\\n}\\n// impl でメソッドを実装\\nimpl Square {\\n    fn area(&self) -> i32 {\\n        self.side * self.side\\n    }\\n}\\nfn main() {\\n    let s = Square { side: 5 };\\n    println!(\"{}\", s.area());\\n}",
      "holeyCode": "struct ___ {\\n    side: ___,\\n___\\n// impl でメソッドを実装\\nimpl ___ {\\n    fn ___ (&self) -> i32 {\\n        self.___ * self.___\\n    ___\\n___\\nfn ___ () {\\n    let ___ = Square { side: 5 };\\n    ___!(\"{}\", s.area());\\n___",
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
      "lineHints": [
          "構造体（Square）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "impl でメソッドを実装します。",
          "関数（area）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "impl"
          ],
          "others": ["Square", "i32", "}", "area(&self)", "side", "main()", "s", "println", "}", "side"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "25\\n"
          }
        ]
      },
    {
      "title": "enum で状態を表す",
      "correctCode": "// Direction列挙型を定義\\nenum Direction {\\n    Up,\\n    Down,\\n}\\nfn main() {\\n    let d = Direction::Up;\\n    match d {\\n        Direction::Up => println!(\"up\"),\\n        Direction::Down => println!(\"down\"),\\n    }\\n}",
      "holeyCode": "// Direction列挙型を定義\\nenum ___ {\\n    ___,\\n    ___,\\n___\\nfn ___ () {\\n    let ___ = Direction::Up;\\n    match ___ {\\n        Direction::Up => ___!(\"up\"),\\n        Direction::Down => ___!(\"down\"),\\n    ___\\n___",
      "correctLines": [
          "// Direction列挙型を定義",
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
      "lineHints": [
          null,
          "enum で列挙型を定義します。",
          "Direction::Up を使います。",
          "match でパターンマッチングします。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "enum"
          ],
          "others": ["Direction", "Up", "Down", "}", "main()", "d", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "up\\n"
          }
        ]
      },
    {
      "title": "Option<T> で null を安全に",
      "correctCode": "fn main() {\\n    // Some で値があることを示す\\n    let val: Option<i32> = Some(42);\\n    match val {\\n        Some(n) => println!(\"{}\", n),\\n        None => println!(\"none\"),\\n    }\\n}",
      "holeyCode": "fn ___ () {\\n    // Some で値があることを示す\\n    let val: ___ = ___(42);\\n    match ___ {\\n        Some(n) => ___!(\"{}\", n),\\n        None => ___!(\"none\"),\\n    ___\\n___",
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
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "Some で値があることを示します。",
          "ここを正しく入力してください。",
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Some"
          ],
          "others": ["main()", "Option<i32>", "val", "println", "}", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "Result<T, E> でエラー処理",
      "correctCode": "fn half(n: i32) -> Result<i32, String> {\\n    if n % 2 != 0 {\\n        return Err(\"odd\".to_string());\\n    }\\n    // Ok で成功を返す\\n    Ok(n / 2)\\n}\\nfn main() {\\n    match half(10) {\\n        Ok(v) => println!(\"{}\", v),\\n        Err(e) => println!(\"{}\", e),\\n    }\\n}",
      "holeyCode": "fn ___ (n: i32) -> Result<i32, String> {\\n    if n % 2 ___ != ___ {\\n        return Err(___));\\n    ___\\n    // Ok で成功を返す\\n    ___(n / 2)\\n___\\nfn ___ () {\\n    match ___(10) {\\n        Ok(v) => ___!(\"{}\", v),\\n        Err(e) => ___!(\"{}\", e),\\n    ___\\n___",
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
      "lineHints": [
          "Err でエラーを返します。",
          "Ok で成功を返します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "Ok"
          ],
          "others": ["half(n:", "!=", "\"odd\".to_string(", "}", "main()", "half", "println", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "トレイトを定義しよう",
      "correctCode": "// Speakトレイトを定義\\ntrait Speak {\\n    fn speak(&self);\\n}\\nstruct Dog;\\nimpl Speak for Dog {\\n    fn speak(&self) {\\n        println!(\"woof\");\\n    }\\n}\\nfn main() {\\n    let d = Dog;\\n    d.speak();\\n}",
      "holeyCode": "// Speakトレイトを定義\\ntrait ___ {\\n    fn ___ (&self);\\n___\\nstruct ___;\\nimpl ___ for ___ {\\n    fn ___ (&self) {\\n        ___!(\"woof\");\\n    ___\\n___\\nfn ___ () {\\n    let ___ = Dog;\\n    d.___();\\n___",
      "correctLines": [
          "// Speakトレイトを定義",
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
      "lineHints": [
          null,
          "trait でトレイトを定義します。",
          "Dog に Speak を実装します。",
          "ここを正しく入力してください。",
          "構造体（Dog）を定義します。",
          "ここを正しく入力してください。",
          "関数（speak）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "trait"
          ],
          "others": ["Speak", "speak(&self);", "}", "Dog", "speak(&self)", "println", "main()", "d", "speak", "speak(&self);", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "woof\\n"
          }
        ]
      },
    {
      "title": "ジェネリクスを使おう",
      "correctCode": "// T を型パラメータとして使う\\nfn print_val<T: std::fmt::Display>(val: T) {\\n    println!(\"{}\", val);\\n}\\nfn main() {\\n    print_val(42);\\n    print_val(\"こんにちは\");\\n}",
      "holeyCode": "// T を型パラメータとして使う\\nfn print_val<___: std::fmt::Display>(val: T) {\\n    ___!(\"{}\", val);\\n___\\nfn ___ () {\\n    ___(42);\\n    ___(\"こんにちは\");\\n___",
      "correctLines": [
          "// T を型パラメータとして使う",
          "fn print_val<T: std::fmt::Display>(val: T) {",
          "    println!(\"{}\", val);",
          "}",
          "fn main() {",
          "    print_val(42);",
          "    print_val(\"こんにちは\");",
          "}"
        ],
      "lineHints": [
          null,
          "T を型パラメータとして使います。",
          "i32 型で呼び出します。",
          "&str 型で呼び出します。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "variables": [
            "T"
          ],
          "others": ["println", "}", "main()", "print_val", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\nこんにちは\\n"
          }
        ]
      }
  ]
}
