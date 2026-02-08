export const rust3Data = {
  "language": "rust",
  "lessonId": "rust-3",
  "lessonTitle": "Rust III - ライフタイムとイテレータ",
  "lessonDescription": "Rustの高度な機能を学びます。ライフタイム、イテレータ、クロージャなど、Rustの真髄を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "ライフタイムの基本",
      "correctCode": "// 'a でライフタイムを定義\\nfn first<'a>(s: &'a str) -> &'a str {\\n    &s[..1]\\n}\\n\\nfn main() {\\n    let s = String::from(\"Hello\");\\n    println!(\"{}\", first(&s));\\n}",
      "holeyCode": "// 'a でライフタイムを定義\\nfn first<'a>(s: &'a ___) -> &'a str {\\n    &s[___]\\n___\\n___\\nfn ___ () {\\n    let ___ = String::from(\"Hello\");\\n    ___!(\"{}\", first(&s));\\n___",
      "correctLines": [
          "// 'a でライフタイムを定義",
          "fn first<'a>(s: &'a str) -> &'a str {",
          "    &s[..1]",
          "}",
          "",
          "fn main() {",
          "    let s = String::from(\"Hello\");",
          "    println!(\"{}\", first(&s));",
          "}"
        ],
      "lineHints": [
          null,
          "'a でライフタイムを定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "lifetimes": [
            "'a",
            "'b",
            "'static"
          ],
          "others": ["str", "..1", "}", "main()", "s", "println", "}", "", "}", "", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "H\\n"
          }
        ]
      },
    {
      "title": "クロージャの基本",
      "correctCode": "fn main() {\\n    // |x| でクロージャの引数を定義\\n    let double = |x| x * 2;\\n    println!(\"{}\", double(5));\\n}",
      "holeyCode": "fn ___ () {\\n    // |x| でクロージャの引数を定義\\n    let ___ = |x| x * 2;\\n    ___!(\"{}\", double(5));\\n___",
      "correctLines": [
          "fn main() {",
          "    // |x| でクロージャの引数を定義",
          "    let double = |x| x * 2;",
          "    println!(\"{}\", double(5));",
          "}"
        ],
      "lineHints": [
          "|x| でクロージャの引数を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "|",
            "(",
            "["
          ],
          "others": ["main()", "double", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "イテレータの基本",
      "correctCode": "fn main() {\\n    let nums = vec![1, 2, 3];\\n    // iter でイテレータを取得\\n    for n in nums.iter() {\\n        println!(\"{}\", n);\\n    }\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = vec![1, 2, 3];\\n    // iter でイテレータを取得\\n    for n in nums.___() {\\n        ___!(\"{}\", n);\\n    ___\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3];",
          "    // iter でイテレータを取得",
          "    for n in nums.iter() {",
          "        println!(\"{}\", n);",
          "    }",
          "}"
        ],
      "lineHints": [
          "指定された回数や範囲で、繰り返し処理（ループ）を行います。",
          "配列を複数の値で初期化する。",
          null,
          "繰り返し処理（ループ）を開始する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "iter",
            "into_iter",
            "iter_mut"
          ],
          "others": ["main()", "nums", "println", "}", "}", "}", "}\\"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "map でイテレータ変換",
      "correctCode": "fn main() {\\n    let nums = vec![1, 2, 3];\\n    // map で各要素を変換\\n    let squared: Vec<_> = nums.iter().map(|x| x * x).collect();\\n    println!(\"{:?}\", squared);\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = vec![1, 2, 3];\\n    // map で各要素を変換\\n    let squared: Vec<_> = nums.___().map(|x| x * x).collect();\\n    ___!(\"{:?}\", squared);\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3];",
          "    // map で各要素を変換",
          "    let squared: Vec<_> = nums.iter().map(|x| x * x).collect();",
          "    println!(\"{:?}\", squared);",
          "}"
        ],
      "lineHints": [
          "map で各要素を変換します。",
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "map",
            "filter",
            "fold"
          ],
          "others": ["main()", "nums", "iter", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[1, 4, 9]\\n"
          }
        ]
      },
    {
      "title": "filter で絞り込み",
      "correctCode": "fn main() {\\n    let nums = vec![1, 2, 3, 4, 5];\\n    // filter で条件に合う要素を絞り込む\\n    let big: Vec<_> = nums.iter().filter(|x| **x > 2).collect();\\n    println!(\"{:?}\", big);\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = vec![1, 2, 3, 4, 5];\\n    // filter で条件に合う要素を絞り込む\\n    let big: Vec<_> = nums.___().filter(|x| **x > 2).collect();\\n    ___!(\"{:?}\", big);\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3, 4, 5];",
          "    // filter で条件に合う要素を絞り込む",
          "    let big: Vec<_> = nums.iter().filter(|x| **x > 2).collect();",
          "    println!(\"{:?}\", big);",
          "}"
        ],
      "lineHints": [
          "filter で条件に合う要素を絞り込みます。",
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "filter",
            "map",
            "find"
          ],
          "others": ["main()", "nums", "iter", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[3, 4, 5]\\n"
          }
        ]
      },
    {
      "title": "fold で畳み込み",
      "correctCode": "fn main() {\\n    let nums = vec![1, 2, 3, 4];\\n    // fold で畳み込み\\n    let product = nums.iter().fold(1, |acc, x| acc * x);\\n    println!(\"{}\", product);\\n}",
      "holeyCode": "fn ___ () {\\n    let ___ = vec![1, 2, 3, 4];\\n    // fold で畳み込み\\n    let ___ = nums.iter().fold(1, |acc, x| acc * x);\\n    ___!(\"{}\", product);\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3, 4];",
          "    // fold で畳み込み",
          "    let product = nums.iter().fold(1, |acc, x| acc * x);",
          "    println!(\"{}\", product);",
          "}"
        ],
      "lineHints": [
          "fold で畳み込みます。",
          "配列を複数の値で初期化する。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "fold",
            "reduce",
            "sum"
          ],
          "others": ["main()", "nums", "product", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "24\\n"
          }
        ]
      },
    {
      "title": "? 演算子でエラー伝播",
      "correctCode": "fn divide(a: i32, b: i32) -> Result<i32, &'static str> {\\n    if b == 0 {\\n        Err(\"division by zero\")\\n    } else {\\n        Ok(a / b)\\n    }\\n}\\n\\nfn calc() -> Result<i32, &'static str> {\\n    // ? でエラーを伝播\\n    let x = divide(10, 2)?;\\n    Ok(x * 2)\\n}\\n\\nfn main() {\\n    println!(\"{:?}\", calc());\\n}",
      "holeyCode": "fn ___ (a: i32, b: i32) -> Result<i32, &'static str> {\\n    if b ___ 0 {\\n        ___(\"division by zero\")\\n    } ___ {\\n        ___(a / b)\\n    ___\\n___\\n___\\nfn ___ () -> Result<i32, &'static str> {\\n    // ? でエラーを伝播\\n    let ___ = divide(10, 2)?;\\n    ___(x * 2)\\n___\\n___\\nfn ___ () {\\n    ___!(\"{:?}\", calc());\\n___",
      "correctLines": [
          "fn divide(a: i32, b: i32) -> Result<i32, &'static str> {",
          "    if b == 0 {",
          "        Err(\"division by zero\")",
          "    } else {",
          "        Ok(a / b)",
          "    }",
          "}",
          "",
          "fn calc() -> Result<i32, &'static str> {",
          "    // ? でエラーを伝播",
          "    let x = divide(10, 2)?;",
          "    Ok(x * 2)",
          "}",
          "",
          "fn main() {",
          "    println!(\"{:?}\", calc());",
          "}"
        ],
      "lineHints": [
          "? でエラーを伝播します。",
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "ここを正しく入力してください。",
          "条件が偽の場合の処理を定義する。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "関数（calc）を定義します。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "operators": [
            "?",
            "!",
            "."
          ],
          "others": ["divide(a:", "==", "Err", "else", "Ok", "}", "calc()", "x", "main()", "println", "}", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Ok(10)\\n"
          }
        ]
      },
    {
      "title": "unwrap_or でデフォルト値",
      "correctCode": "fn main() {\\n    let x: Option<i32> = None;\\n    // unwrap_or でデフォルト値を設定\\n    let value = x.unwrap_or(42);\\n    println!(\"{}\", value);\\n}",
      "holeyCode": "fn ___ () {\\n    let x: ___ = ___;\\n    // unwrap_or でデフォルト値を設定\\n    let ___ = x.unwrap_or(42);\\n    ___!(\"{}\", value);\\n___",
      "correctLines": [
          "fn main() {",
          "    let x: Option<i32> = None;",
          "    // unwrap_or でデフォルト値を設定",
          "    let value = x.unwrap_or(42);",
          "    println!(\"{}\", value);",
          "}"
        ],
      "lineHints": [
          "unwrap_or でデフォルト値を設定します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "unwrap_or",
            "unwrap",
            "expect"
          ],
          "others": ["main()", "Option<i32>", "None", "value", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "42\\n"
          }
        ]
      },
    {
      "title": "Vec のメソッド push",
      "correctCode": "fn main() {\\n    let mut nums = Vec::new();\\n    // push で要素を追加\\n    nums.push(10);\\n    nums.push(20);\\n    println!(\"{:?}\", nums);\\n}",
      "holeyCode": "fn ___ () {\\n    let mut ___ = Vec::new();\\n    // push で要素を追加\\n    nums.___(10);\\n    nums.___(20);\\n    ___!(\"{:?}\", nums);\\n___",
      "correctLines": [
          "fn main() {",
          "    let mut nums = Vec::new();",
          "    // push で要素を追加",
          "    nums.push(10);",
          "    nums.push(20);",
          "    println!(\"{:?}\", nums);",
          "}"
        ],
      "lineHints": [
          "push で要素を追加します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "push",
            "append",
            "add"
          ],
          "others": ["main()", "nums", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "[10, 20]\\n"
          }
        ]
      },
    {
      "title": "String と &str",
      "correctCode": "fn main() {\\n    let s: &str = \"こんにちは\";\\n    // to_string で String に変換\\n    let owned: String = s.to_string();\\n    println!(\"{}\", owned);\\n}",
      "holeyCode": "fn ___ () {\\n    let s: ___ = \"こんにちは\";\\n    // to_string で String に変換\\n    let owned: String = s.___();\\n    ___!(\"{}\", owned);\\n___",
      "correctLines": [
          "fn main() {",
          "    let s: &str = \"こんにちは\";",
          "    // to_string で String に変換",
          "    let owned: String = s.to_string();",
          "    println!(\"{}\", owned);",
          "}"
        ],
      "lineHints": [
          "to_string で String に変換します。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "methods": [
            "to_string",
            "to_owned",
            "into"
          ],
          "others": ["main()", "&str", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}
