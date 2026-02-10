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
      "holeyCode": "// 'a でライフタイムを定義\\nfn ___<'___>(___: &'___ ___) -> &'___ ___ {\\n    &___[..___]\\n___\\n___\\nfn ___() {\\n    let ___ = ___::___(\"___\");\\n    ___!(\"{}\", ___(___));\\n___",
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
          "スライス構文で先頭1文字を取得します。",
          "ブロックを閉じます。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "String型の値を作成します。",
          "first関数を呼び出して結果を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "lifetimes": [
            "'a",
            "'b",
            "'static"
          ],
          "others": ["first", "s", "str", "1", "}", "main", "String", "from", "println", "&s", "", "a", "Hello"]
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
      "holeyCode": "fn ___() {\\n    // |x| でクロージャの引数を定義\\n    let ___ = |___| ___ * ___;\\n    ___!(\"{}\", ___(___));\\n___",
      "correctLines": [
          "fn main() {",
          "    // |x| でクロージャの引数を定義",
          "    let double = |x| x * 2;",
          "    println!(\"{}\", double(5));",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "クロージャを定義してdouble変数に代入します。",
          "double関数を呼び出して結果を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "operators": [
            "|",
            "(",
            "["
          ],
          "others": ["main", "double", "x", "2", "println", "5", "}"]
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
      "holeyCode": "fn ___() {\\n    let ___ = ___![___, ___, ___];\\n    // iter でイテレータを取得\\n    for ___ in ___.___() {\\n        ___!(\"{}\", ___);\\n    ___\\n___",
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
          "プログラムの実行開始地点（main関数）を定義します。",
          "vec!マクロで配列を作成します。",
          null,
          "iter()でイテレータを取得してループします。",
          "要素nを表示します。",
          "ブロックを閉じます。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "iter",
            "into_iter",
            "iter_mut"
          ],
          "others": ["main", "nums", "vec", "1", "2", "3", "n", "println", "}"]
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
      "holeyCode": "fn ___() {\\n    let ___ = ___![___, ___, ___];\\n    // map で各要素を変換\\n    let ___: ___<_> = ___.___().___(|___| ___ * ___).___();\\n    ___!(\"{:?}\", ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3];",
          "    // map で各要素を変換",
          "    let squared: Vec<_> = nums.iter().map(|x| x * x).collect();",
          "    println!(\"{:?}\", squared);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "vec!マクロで配列を作成します。",
          null,
          "iter().map().collect()で要素を変換してVecに収集します。",
          "squared配列を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "map",
            "filter",
            "fold"
          ],
          "others": ["main", "nums", "vec", "1", "2", "3", "squared", "Vec", "iter", "x", "collect", "println", "}"]
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
      "holeyCode": "fn ___() {\\n    let ___ = ___![___, ___, ___, ___, ___];\\n    // filter で条件に合う要素を絞り込む\\n    let ___: ___<_> = ___.___().___(|___| **___ > ___).___();\\n    ___!(\"{:?}\", ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3, 4, 5];",
          "    // filter で条件に合う要素を絞り込む",
          "    let big: Vec<_> = nums.iter().filter(|x| **x > 2).collect();",
          "    println!(\"{:?}\", big);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "vec!マクロで配列を作成します。",
          null,
          "iter().filter().collect()で条件に合う要素を絞り込みます。",
          "big配列を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "filter",
            "map",
            "find"
          ],
          "others": ["main", "nums", "vec", "1", "2", "3", "4", "5", "big", "Vec", "iter", "x", "collect", "println", "}"]
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
      "holeyCode": "fn ___() {\\n    let ___ = ___![___, ___, ___, ___];\\n    // fold で畳み込み\\n    let ___ = ___.___().___(1, |___, ___| ___ * ___);\\n    ___!(\"{}\", ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    let nums = vec![1, 2, 3, 4];",
          "    // fold で畳み込み",
          "    let product = nums.iter().fold(1, |acc, x| acc * x);",
          "    println!(\"{}\", product);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "vec!マクロで配列を作成します。",
          null,
          "iter().fold()で畳み込み計算を行います。",
          "product変数を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "fold",
            "reduce",
            "sum"
          ],
          "others": ["main", "nums", "vec", "1", "2", "3", "4", "product", "iter", "acc", "x", "println", "}"]
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
      "correctCode": "fn divide(a: i32, b: i32) -> Result<i32, &'static str> {\\n    if b == 0 {\\n        Err(\"ゼロ除算エラー\")\\n    } else {\\n        Ok(a / b)\\n    }\\n}\\n\\nfn calc() -> Result<i32, &'static str> {\\n    // ? でエラーを伝播\\n    let x = divide(10, 2)?;\\n    Ok(x * 2)\\n}\\n\\nfn main() {\\n    println!(\"{:?}\", calc());\\n}",
      "holeyCode": "fn ___(___: ___, ___: ___) -> ___<___, &'static ___> {\\n    if ___ == ___ {\\n        ___(\"ゼロ除算エラー\")\\n    ___ else ___\\n        ___(___ / ___)\\n    ___\\n___\\n___\\nfn ___() -> ___<___, &'static ___> {\\n    // ? でエラーを伝播\\n    let ___ = ___(___, ___)?;\\n    ___(___ * ___)\\n___\\n___\\nfn ___() {\\n    ___!(\"{:?}\", ___());\\n___",
      "correctLines": [
          "fn divide(a: i32, b: i32) -> Result<i32, &'static str> {",
          "    if b == 0 {",
          "        Err(\"ゼロ除算エラー\")",
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
          "divide関数を定義します。Result型でエラーを返します。",
          "bが0かどうかをチェックします。",
          "Errでエラーメッセージを返します。",
          "if文のブロックを閉じ、elseブロックを開始します。",
          "Okで割り算の結果を返します。",
          "ブロックを閉じます。",
          "ブロックを閉じます。",
          null,
          "calc関数を定義します。Result型を返します。",
          null,
          "divide関数を呼び出し、?でエラー伝播します。",
          "Okで計算結果を返します。",
          "ブロックを閉じます。",
          null,
          "プログラムの実行開始地点（main関数）を定義します。",
          "calc関数を呼び出して結果を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "operators": [
            "?",
            "!",
            "."
          ],
          "others": ["divide", "a", "i32", "b", "Result", "str", "0", "Err", "Ok", "}", "{", "calc", "10", "2", "x", "main", "println", ""]
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
      "holeyCode": "fn ___() {\\n    let ___: ___<___> = ___;\\n    // unwrap_or でデフォルト値を設定\\n    let ___ = ___.___(___);\\n    ___!(\"{}\", ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    let x: Option<i32> = None;",
          "    // unwrap_or でデフォルト値を設定",
          "    let value = x.unwrap_or(42);",
          "    println!(\"{}\", value);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "Option<i32>型の変数xにNoneを代入します。",
          null,
          "unwrap_orでデフォルト値42を設定します。",
          "value変数を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "unwrap_or",
            "unwrap",
            "expect"
          ],
          "others": ["main", "x", "Option", "i32", "None", "value", "42", "println", "}"]
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
      "holeyCode": "fn ___() {\\n    let mut ___ = ___::___();\\n    // push で要素を追加\\n    ___.___(___);\\n    ___.___(___);\\n    ___!(\"{:?}\", ___);\\n___",
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
          "プログラムの実行開始地点（main関数）を定義します。",
          "Vec::new()で空のVecを作成します。",
          null,
          "pushで10を追加します。",
          "pushで20を追加します。",
          "nums配列を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "push",
            "append",
            "add"
          ],
          "others": ["main", "nums", "Vec", "new", "10", "20", "println", "}"]
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
      "holeyCode": "fn ___() {\\n    let ___: ___ = \"こんにちは\";\\n    // to_string で String に変換\\n    let ___: ___ = ___.___();\\n    ___!(\"{}\", ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    let s: &str = \"こんにちは\";",
          "    // to_string で String に変換",
          "    let owned: String = s.to_string();",
          "    println!(\"{}\", owned);",
          "}"
        ],
      "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          "&str型の変数sに文字列リテラルを代入します。",
          null,
          "to_string()でString型に変換します。",
          "owned変数を表示します。",
          "ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "to_string",
            "to_owned",
            "into"
          ],
          "others": ["main", "s", "&str", "owned", "String", "println", "}"]
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
