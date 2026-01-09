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
      "description": "参照の有効期間を表すライフタイムを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "ライフタイムとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 参照の有効期間\n\n**ライフタイム** は、参照が有効な範囲を示します。`'a` のように表記します。\n\n```rust\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() { x } else { y }\n}\n```"
        },
        {
          "title": "なぜ必要？",
          "image": "/illustrations/3d/robot.png",
          "content": "# ダングリング参照を防ぐ\n\nRustは、無効な参照を防ぐためにライフタイムを追跡します。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "// 'a でライフタイムを定義\nfn first<'a>(s: &'a str) -> &'a str {\n    &s[..1]\n}\n\nfn main() {\n    let s = String::from(\"Hello\");\n    println!(\"{}\", first(&s));\n}",
      "holeyCode": "___"Hello\");\n    println!(\"{}\", first(&s));\n}",
      "correctLines": [
        ""fn first<'a>(s: &'a str) -> &'a str {",\n        "    &s[..1"
      ]",
        "}",
        "",
        "fn main() {",
        "    let s = String::from(\"Hello\");",
        "    println!(\"{}\", first(&s));",
        "}"
      ],
      "lineHints": [
        "'a でライフタイムを定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "lifetimes": ["'a", "'b", "'static"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "H\n"
        }
      ]
    },
    {
      "title": "クロージャの基本",
      "description": "環境をキャプチャする無名関数を学びましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "クロージャとは？",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 環境をキャプチャする関数\n\n**クロージャ** は、定義された環境の変数にアクセスできる無名関数です。\n\n```rust\nlet x = 5;\nlet add_x = |n| n + x;\nprintln!(\"{}\", add_x(10)); // 15\n```"
        },
        {
          "title": "クロージャの構文",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# | | で引数を囲む\n\n```rust\n// 引数なし\n|| println!(\"Hello\")\n\n// 引数あり\n|x, y| x + y\n\n// ブロック\n|x| {\n    let y = x * 2;\n    y + 1\n}\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    // |x| でクロージャの引数を定義\n    let double = |x| x * 2;\n    println!(\"{}\", double(5));\n}",
      "holeyCode": "___\n    ___\n    ___\n___"{}\", double(5));\n}",
      "correctLines": [
        "fn main() {",
        "    let double = |x| x * 2;",
        "    println!("{}", double(5));",
        "}"
      ],
      "lineHints": [
        null,
        "|x| でクロージャの引数を定義します。",
        null,
        null
      ],
      "candidates": {
        "operators": ["|", "(", "["]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "イテレータの基本",
      "description": "要素を順番に処理するイテレータを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "イテレータとは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 順番に処理\n\n**イテレータ** は、要素を1つずつ取り出して処理します。\n\n```rust\nlet v = vec![1, 2, 3];\nlet iter = v.iter();\nfor x in iter {\n    println!(\"{}\", x);\n}\n```"
        },
        {
          "title": "iter() と into_iter()",
          "image": "/illustrations/3d/robot.png",
          "content": "# 参照 vs 所有権\n\n```rust\nv.iter()      // &T を返す\nv.iter_mut()  // &mut T を返す\nv.into_iter() // T を返す（所有権を移動）\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![1, 2, 3];\n    // iter でイテレータを取得\n    for n in nums.iter() {\n        println!(\"{}\", n);\n    }\n}",
      "holeyCode": "___\n___\n___"{}\", n);\n    }\n}",
      "correctLines": [
        ""fn main() {",\n        "    let nums = vec![1",
        "2",
        "3"
      ];",
        "    for n in nums.iter() {",
        "        println!(\"{}\", n);",
        "    }",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "iter() でイテレータを取得します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["iter", "into_iter", "iter_mut"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    },
    {
      "title": "map でイテレータ変換",
      "description": "各要素を変換するmapを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "map とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 要素を変換\n\n**map** は、各要素にクロージャを適用して新しいイテレータを作ります。\n\n```rust\nlet v = vec![1, 2, 3];\nlet doubled: Vec<_> = v.iter().map(|x| x * 2).collect();\n// [2, 4, 6]\n```"
        },
        {
          "title": "遅延評価",
          "image": "/illustrations/3d/robot.png",
          "content": "# collect() で実行\n\nイテレータは遅延評価されるため、`collect()` などで消費する必要があります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![1, 2, 3];\n    // map で各要素を変換\n    let squared: Vec<_> = nums.iter().map(|x| x * x).collect();\n    println!(\"{:?}\", squared);\n}",
      "holeyCode": "___\n___\n___"{:?}\", squared);\n}",
      "correctLines": [
        ""fn main() {",\n        "    let nums = vec![1",
        "2",
        "3"
      ];",
        "    let squared: Vec<_> = nums.iter().map(|x| x * x).collect();",
        "    println!(\"{:?}\", squared);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "map で各要素を変換します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["map", "filter", "fold"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[1, 4, 9]\n"
        }
      ]
    },
    {
      "title": "filter で絞り込み",
      "description": "条件に合う要素だけを取り出しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "filter とは？",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件で絞り込み\n\n**filter** は、条件を満たす要素だけを通します。\n\n```rust\nlet v = vec![1, 2, 3, 4, 5];\nlet evens: Vec<_> = v.iter().filter(|x| *x % 2 == 0).collect();\n// [2, 4]\n```"
        },
        {
          "title": "参照に注意",
          "image": "/illustrations/3d_advanced/pointer_arrow.png",
          "content": "# クロージャは参照を受け取る\n\n`filter` のクロージャは `&&T` を受け取るため、`**x` でデリファレンスが必要な場合があります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![1, 2, 3, 4, 5];\n    // filter で条件に合う要素を絞り込む\n    let big: Vec<_> = nums.iter().filter(|x| **x > 2).collect();\n    println!(\"{:?}\", big);\n}",
      "holeyCode": "___\n___\n___\n___\n___"{:?}\", big);\n}",
      "correctLines": [
        ""fn main() {",\n        "    let nums = vec![1",
        "2",
        "3",
        "4",
        "5"
      ];",
        "    let big: Vec<_> = nums.iter().filter(|x| **x > 2).collect();",
        "    println!(\"{:?}\", big);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "filter で条件に合う要素を絞り込みます。",
        null,
        null
      ],
      "candidates": {
        "methods": ["filter", "map", "find"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[3, 4, 5]\n"
        }
      ]
    },
    {
      "title": "fold で畳み込み",
      "description": "要素を1つの値にまとめるfoldを学びましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "fold とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 累積処理\n\n**fold** は、初期値と関数で要素を1つずつ畳み込みます。\n\n```rust\nlet v = vec![1, 2, 3];\nlet sum = v.iter().fold(0, |acc, x| acc + x);\n// 6\n```"
        },
        {
          "title": "様々な畳み込み",
          "image": "/illustrations/3d/robot.png",
          "content": "# 合計、積、結合など\n\n```rust\n// 積\nv.iter().fold(1, |acc, x| acc * x)\n\n// 文字列結合\nwords.iter().fold(String::new(), |acc, s| acc + s)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let nums = vec![1, 2, 3, 4];\n    // fold で畳み込み\n    let product = nums.iter().fold(1, |acc, x| acc * x);\n    println!(\"{}\", product);\n}",
      "holeyCode": "___\n___\n___\n___"{}\", product);\n}",
      "correctLines": [
        ""fn main() {",\n        "    let nums = vec![1",
        "2",
        "3",
        "4"
      ];",
        "    let product = nums.iter().fold(1, |acc, x| acc * x);",
        "    println!(\"{}\", product);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "fold で畳み込みます。",
        null,
        null
      ],
      "candidates": {
        "methods": ["fold", "reduce", "sum"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "24\n"
        }
      ]
    },
    {
      "title": "? 演算子でエラー伝播",
      "description": "エラーを簡潔に伝播させましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "? 演算子とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# エラーの早期リターン\n\n**?** は、Resultが Err の場合に早期リターンします。\n\n```rust\nfn read_file() -> Result<String, io::Error> {\n    let content = fs::read_to_string(\"file.txt\")?;\n    Ok(content)\n}\n```"
        },
        {
          "title": "match の省略形",
          "image": "/illustrations/3d/robot.png",
          "content": "# 簡潔なエラー処理\n\n```rust\n// ? を使わない場合\nmatch result {\n    Ok(v) => v,\n    Err(e) => return Err(e),\n}\n\n// ? を使う\nresult?\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn divide(a: i32, b: i32) -> Result<i32, &'static str> {\n    if b == 0 {\n        Err(\"division by zero\")\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn calc() -> Result<i32, &'static str> {\n    // ? でエラーを伝播\n    let x = divide(10, 2)?;\n    Ok(x * 2)\n}\n\nfn main() {\n    println!(\"{:?}\", calc());\n}",
      "holeyCode": "___\n    ___\n        ___\n    ___\n        ___\n    ___\n___\n\\n___\n    // ? を入力してエラーを伝えてね\\n    ___\n    ___\n___\n\\n___\n    ___\n___"division by zero\")\n    } else {\n        Ok(a / b)\n    }\n}\n\nfn calc() -> Result<i32, &'static str> {\n    // ? を入力してエラーを伝えてね\n    let x = divide(10, 2)___;\n    Ok(x * 2)\n}\n\nfn main() {\n    println!(\"{:?}\", calc());\n}",
      "correctLines": [
        "fn divide(a: i32, b: i32) -> Result<i32, &'static str> {",
        "    if b == 0 {",
        "        Err("division by zero")",
        "    } else {",
        "        Ok(a / b)",
        "    }",
        "}",
        "",
        "fn calc() -> Result<i32, &'static str> {",
        "    // ? を入力してエラーを伝えてね",
        "    let x = divide(10, 2)?;",
        "    Ok(x * 2)",
        "}",
        "",
        "fn main() {",
        "    println!("{:?}", calc());",
        "}"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "? でエラーを伝播します。",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "operators": ["?", "!", "."]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Ok(10)\n"
        }
      ]
    },
    {
      "title": "unwrap_or でデフォルト値",
      "description": "Option/Resultのデフォルト値を設定しましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "unwrap_or とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# None/Err の場合のデフォルト\n\n**unwrap_or** は、None や Err の場合にデフォルト値を返します。\n\n```rust\nlet x: Option<i32> = None;\nlet value = x.unwrap_or(0);  // 0\n```"
        },
        {
          "title": "unwrap_or_else",
          "image": "/illustrations/3d/robot.png",
          "content": "# 遅延評価\n\n```rust\n// クロージャで計算\nlet value = x.unwrap_or_else(|| expensive_computation());\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let x: Option<i32> = None;\n    // unwrap_or でデフォルト値を設定\n    let value = x.unwrap_or(42);\n    println!(\"{}\", value);\n}",
      "holeyCode": "___\n    ___\n    ___\n    ___\n___"{}\", value);\n}",
      "correctLines": [
        "fn main() {",
        "    let x: Option<i32> = None;",
        "    let value = x.unwrap_or(42);",
        "    println!("{}", value);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "unwrap_or でデフォルト値を設定します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["unwrap_or", "unwrap", "expect"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "42\n"
        }
      ]
    },
    {
      "title": "Vec のメソッド push",
      "description": "Vecに要素を追加しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "push とは？",
          "image": "/illustrations/3d/robot.png",
          "content": "# 末尾に追加\n\n**push** は、Vecの末尾に要素を追加します。\n\n```rust\nlet mut v = vec![1, 2];\nv.push(3);\n// [1, 2, 3]\n```"
        },
        {
          "title": "mut が必要",
          "image": "/illustrations/3d/robot.png",
          "content": "# 可変参照\n\n```rust\n// mut が必要\nlet mut v = Vec::new();\nv.push(1);\nv.push(2);\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let mut nums = Vec::new();\n    // push で要素を追加\n    nums.push(10);\n    nums.push(20);\n    println!(\"{:?}\", nums);\n}",
      "holeyCode": "___\n    ___\n    // push と入力して要素を追加しましょう\\n    ___\n    ___\n    ___\n___"{:?}\", nums);\n}",
      "correctLines": [
        "fn main() {",
        "    let mut nums = Vec::new();",
        "    // push と入力して要素を追加しましょう",
        "    nums.push(10);",
        "    nums.push(20);",
        "    println!("{:?}", nums);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "push で要素を追加します。",
        null,
        null,
        null
      ],
      "candidates": {
        "methods": ["push", "append", "add"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "[10, 20]\n"
        }
      ]
    },
    {
      "title": "String と &str",
      "description": "文字列型の違いを理解しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "String vs &str",
          "image": "/illustrations/3d/robot.png",
          "content": "# 所有権の違い\n\n**String** は所有権を持つヒープ上の文字列、**&str** は参照です。\n\n```rust\nlet s1: String = String::from(\"hello\");\nlet s2: &str = \"hello\";\n```"
        },
        {
          "title": "変換",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 相互変換\n\n```rust\n// &str -> String\nlet s = \"hello\".to_string();\n\n// String -> &str\nlet slice: &str = &s;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "fn main() {\n    let s: &str = \"Hello\";\n    // to_string で String に変換\n    let owned: String = s.to_string();\n    println!(\"{}\", owned);\n}",
      "holeyCode": "___\n    ___\n    // to_string と入力して String に変換しましょう\\n    ___\n    ___\n___"Hello\";\n    // to_string と入力して String に変換しましょう\n    let owned: String = s.___();\n    println!(\"{}\", owned);\n}",
      "correctLines": [
        "fn main() {",
        "    let s: &str = "Hello";",
        "    // to_string と入力して String に変換しましょう",
        "    let owned: String = s.to_string();",
        "    println!("{}", owned);",
        "}"
      ],
      "lineHints": [
        null,
        null,
        "to_string で String に変換します。",
        null,
        null
      ],
      "candidates": {
        "methods": ["to_string", "to_owned", "into"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello\n"
        }
      ]
    }
  ]
}
