export const rust2Data = {
  "language": "rust",
  "lessonId": "rust-2",
  "lessonTitle": "Rust II - 所有権とトレイト",
  "lessonDescription": "Rust最大の特徴「所有権」を中心に、構造体、トレイト、パターンマッチングを学びます。安全で高速なプログラムを書く力を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "所有権とは",
      "content": "Rustでは、値には1つの**所有者**しかいません。\\n\\n```rust\\nlet s1 = String::from(\\\"hello\\\");\\nlet s2 = s1; // s1の所有権がs2に移動\\n// s1 はもう使えない！\\n```\\n\\nこれにより、メモリの二重解放を防ぎます。"
    },
    {
      "title": "借用（参照）",
      "content": "所有権を渡さずに値を使うには**借用**します。\\n\\n```rust\\nlet s = String::from(\\\"hello\\\");\\nlet len = calculate_length(&s); // 借用\\n// s はまだ使える\\n```\\n\\n`&` で参照を作成します。"
    },
    {
      "title": "可変参照",
      "content": "値を変更するには**可変参照**を使います。\\n\\n```rust\\nlet mut s = String::from(\\\"hello\\\");\\nchange(&mut s);\\n```\\n\\n`&mut` で可変参照を作成。同時に複数の可変参照は作れません。"
    },
    {
      "title": "構造体",
      "content": "**構造体**で独自の型を作れます。\\n\\n```rust\\nstruct Person {\\n    name: String,\\n    age: u32,\\n}\\n\\nlet p = Person {\\n    name: String::from(\\\"太郎\\\"),\\n    age: 20,\\n};\\n```"
    },
    {
      "title": "パターンマッチング",
      "content": "`match` で値を分解して処理できます。\\n\\n```rust\\nlet x = 2;\\nmatch x {\\n    1 => println!(\\\"いち\\\"),\\n    2 => println!(\\\"に\\\"),\\n    _ => println!(\\\"その他\\\"),\\n}\\n```\\n\\n`_` は「それ以外」を表します。"
    },
    {
      "title": "Option型",
      "content": "値があるかないかを表すには `Option` を使います。\\n\\n```rust\\nlet num: Option<i32> = Some(5);\\nlet none: Option<i32> = None;\\n\\nmatch num {\\n    Some(n) => println!(\\\"{}\\\", n),\\n    None => println!(\\\"なし\\\"),\\n}\\n```"
    }
  ],
  "exercises": [
    {
      "title": "所有権の基本",
      "correctCode": "fn main() {\\n    let s1 = String::from(\"こんにちは\");\\n    // s1 の所有権を移動\\n    let s2 = s1;\\n    println!(\"{}\", s2);\\n}",
      "holeyCode": "fn ___() {\\n    let ___ = ___::___(\"こんにちは\");\\n    // s1 の所有権を移動\\n    let ___ = ___;\\n    ___!(\"{}\", ___);\\n___",
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
          "String::from で文字列を作成します。",
          null,
          "s1 の所有権を s2 に移動します。",
          "println! マクロで s2 を出力します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "variables": [
            "s1", "s2"
          ],
          "others": ["main", "String", "from", "println", "}"]
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
      "holeyCode": "fn ___(___: &___) {\\n    ___!(\"{}\", ___.___());\\n___\\nfn ___() {\\n    let ___ = ___::___(\"こんにちは\");\\n    // & で参照を渡す\\n    ___(&___);\\n___",
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
          "print_len 関数を定義し、引数 s は String の参照型です。",
          "println! で s.len() の結果を出力します。",
          "閉じ括弧で関数を閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "String::from で文字列を作成します。",
          null,
          "print_len に text の参照を渡して呼び出します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "operators": [
            "&"
          ],
          "others": ["print_len", "s", "String", "println", "len", "}", "main", "text", "from"]
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
      "holeyCode": "fn ___(___: &mut ___) {\\n    ___.___(\"___\");\\n___\\nfn ___() {\\n    // mut で可変変数にする\\n    let mut ___ = ___::___(\"___\");\\n    ___(&mut ___);\\n    ___!(\"{}\", ___);\\n___",
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
          "add_world 関数を定義し、引数 s は String の可変参照型です。",
          "s.push_str で文字列を追加します。",
          "閉じ括弧で関数を閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "String::from で文字列を作成します。",
          "add_world に text の可変参照を渡して呼び出します。",
          "println! で text を出力します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "mut"
          ],
          "others": ["add_world", "s", "String", "push_str", "}", "main", "text", "from", "println", " world", "hello", "world"]
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
      "holeyCode": "// Rect構造体を定義\\nstruct ___ {\\n    ___: ___,\\n    ___: ___,\\n___\\nfn ___() {\\n    let ___ = ___ { ___: ___, ___: ___ };\\n    ___!(\"{}\", ___.___);\\n___",
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
          "Rect 構造体を struct で定義します。",
          "width フィールドを i32 型で定義します。",
          "height フィールドを i32 型で定義します。",
          "閉じ括弧で構造体定義を閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "Rect 構造体のインスタンスを作成し、width: 3, height: 4 を設定します。",
          "println! で r.width を出力します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "struct"
          ],
          "others": ["Rect", "width", "height", "i32", "}", "main", "r", "3", "4", "println"]
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
      "holeyCode": "struct ___ {\\n    ___: ___,\\n___\\n// impl でメソッドを実装\\nimpl ___ {\\n    fn ___(&___) -> ___ {\\n        ___.___ * ___.___\\n    ___\\n___\\nfn ___() {\\n    let ___ = ___ { ___: ___ };\\n    ___!(\"{}\", ___.___());\\n___",
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
          "Square 構造体を struct で定義します。",
          "side フィールドを i32 型で定義します。",
          "閉じ括弧で構造体定義を閉じます。",
          null,
          "impl で Square にメソッドを実装します。",
          "area メソッドを定義し、&self を受け取り i32 を返します。",
          "self.side * self.side で面積を計算します。",
          "閉じ括弧でメソッドを閉じます。",
          "閉じ括弧で impl ブロックを閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "Square のインスタンスを作成し、side: 5 を設定します。",
          "println! で s.area() の結果を出力します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "impl"
          ],
          "others": ["Square", "side", "i32", "}", "area", "self", "5", "main", "s", "println"]
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
      "correctCode": "// Direction列挙型を定義\\nenum Direction {\\n    Up,\\n    Down,\\n}\\nfn main() {\\n    let d = Direction::Up;\\n    match d {\\n        Direction::Up => println!(\"上\"),\\n        Direction::Down => println!(\"下\"),\\n    }\\n}",
      "holeyCode": "// Direction列挙型を定義\\nenum ___ {\\n    ___,\\n    ___,\\n___\\nfn ___() {\\n    let ___ = ___::___;\\n    match ___ {\\n        ___::___ => ___!(\"上\"),\\n        ___::___ => ___!(\"下\"),\\n    ___\\n___",
      "correctLines": [
          "// Direction列挙型を定義",
          "enum Direction {",
          "    Up,",
          "    Down,",
          "}",
          "fn main() {",
          "    let d = Direction::Up;",
          "    match d {",
          "        Direction::Up => println!(\"上\"),",
          "        Direction::Down => println!(\"下\"),",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "Direction 列挙型を enum で定義します。",
          "Up バリアントを定義します。",
          "Down バリアントを定義します。",
          "閉じ括弧で列挙型定義を閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "Direction::Up を d に代入します。",
          "match で d のパターンマッチングを開始します。",
          "Direction::Up にマッチした場合、「上」を出力します。",
          "Direction::Down にマッチした場合、「下」を出力します。",
          "閉じ括弧で match ブロックを閉じます。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "enum", "match"
          ],
          "others": ["Direction", "Up", "Down", "}", "main", "d", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "上\\n"
          }
        ]
      },
    {
      "title": "Option<T> で null を安全に",
      "correctCode": "fn main() {\\n    // Some で値があることを示す\\n    let val: Option<i32> = Some(42);\\n    match val {\\n        Some(n) => println!(\"{}\", n),\\n        None => println!(\"none\"),\\n    }\\n}",
      "holeyCode": "fn ___() {\\n    // Some で値があることを示す\\n    let ___: ___<___> = ___(___);\\n    match ___ {\\n        ___(___) => ___!(\"___\", ___),\\n        ___ => ___!(\"___\"),\\n    ___\\n___",
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
          "val に Option<i32> 型で Some(42) を代入します。",
          "match で val のパターンマッチングを開始します。",
          "Some(n) にマッチした場合、n を出力します。",
          "None にマッチした場合、\"none\" を出力します。",
          "閉じ括弧で match ブロックを閉じます。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "match"
          ],
          "others": ["main", "val", "Option", "i32", "Some", "42", "n", "println", "None", "}", "{}", "none"]
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
      "holeyCode": "fn ___(___: ___) -> ___<___, ___> {\\n    if ___ % ___ != ___ {\\n        return ___(\"___\".___());\\n    ___\\n    // Ok で成功を返す\\n    ___(___ / ___)\\n___\\nfn ___() {\\n    match ___(___) {\\n        ___(___) => ___!(\"___\", ___),\\n        ___(___) => ___!(\"___\", ___),\\n    ___\\n___",
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
          "half 関数を定義し、引数 n は i32 型、戻り値は Result<i32, String> です。",
          "if で n % 2 != 0 の条件を評価します。",
          "Err で \"odd\".to_string() を返します。",
          "閉じ括弧で if ブロックを閉じます。",
          null,
          "Ok で n / 2 を返します。",
          "閉じ括弧で関数を閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "match で half(10) の結果をパターンマッチングします。",
          "Ok(v) にマッチした場合、v を出力します。",
          "Err(e) にマッチした場合、e を出力します。",
          "閉じ括弧で match ブロックを閉じます。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "if", "return", "match"
          ],
          "others": ["half", "n", "i32", "Result", "String", "2", "0", "Err", "to_string", "}", "Ok", "main", "10", "v", "println", "e", "odd", "{}"]
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
      "correctCode": "// Speakトレイトを定義\\ntrait Speak {\\n    fn speak(&self);\\n}\\nstruct Dog;\\nimpl Speak for Dog {\\n    fn speak(&self) {\\n        println!(\"ワン！\");\\n    }\\n}\\nfn main() {\\n    let d = Dog;\\n    d.speak();\\n}",
      "holeyCode": "// Speakトレイトを定義\\ntrait ___ {\\n    fn ___(&___);\\n___\\nstruct ___;\\nimpl ___ for ___ {\\n    fn ___(&___) {\\n        ___!(\"ワン！\");\\n    ___\\n___\\nfn ___() {\\n    let ___ = ___;\\n    ___.___();\\n___",
      "correctLines": [
          "// Speakトレイトを定義",
          "trait Speak {",
          "    fn speak(&self);",
          "}",
          "struct Dog;",
          "impl Speak for Dog {",
          "    fn speak(&self) {",
          "        println!(\"ワン！\");",
          "    }",
          "}",
          "fn main() {",
          "    let d = Dog;",
          "    d.speak();",
          "}"
        ],
      "lineHints": [
          null,
          "Speak トレイトを trait で定義します。",
          "speak メソッドのシグネチャを定義します（&self を受け取る）。",
          "閉じ括弧でトレイト定義を閉じます。",
          "Dog 構造体を定義します。",
          "impl Speak for Dog で Dog に Speak を実装します。",
          "speak メソッドを実装します（&self を受け取る）。",
          "println! で「ワン！」を出力します。",
          "閉じ括弧でメソッドを閉じます。",
          "閉じ括弧で impl ブロックを閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "d に Dog のインスタンスを代入します。",
          "d.speak() を呼び出します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "keywords": [
            "trait", "impl", "for", "struct"
          ],
          "others": ["Speak", "speak", "self", "}", "Dog", "println", "main", "d"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ワン！\\n"
          }
        ]
      },
    {
      "title": "ジェネリクスを使おう",
      "correctCode": "// T を型パラメータとして使う\\nfn print_val<T: std::fmt::Display>(val: T) {\\n    println!(\"{}\", val);\\n}\\nfn main() {\\n    print_val(42);\\n    print_val(\"こんにちは\");\\n}",
      "holeyCode": "// T を型パラメータとして使う\\nfn ___<___: ___::___::___>(___: ___) {\\n    ___!(\"{}\", ___);\\n___\\nfn ___() {\\n    ___(___);\\n    ___(\"こんにちは\");\\n___",
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
          "print_val 関数を定義し、型パラメータ T は std::fmt::Display トレイト境界を持ちます。",
          "println! で val を出力します。",
          "閉じ括弧で関数を閉じます。",
          "プログラムの実行開始地点（main関数）を定義します。",
          "print_val(42) で i32 型を渡して呼び出します。",
          "print_val(\"こんにちは\") で &str 型を渡して呼び出します。",
          "閉じ括弧で関数を閉じます。"
        ],
        "candidates": {
          "variables": [
            "T"
          ],
          "others": ["print_val", "std", "fmt", "Display", "val", "println", "}", "main", "42"]
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
