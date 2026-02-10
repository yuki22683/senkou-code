export const rust3Data = {
  "language": "rust",
  "lessonId": "rust-3",
  "lessonTitle": "Rust III - ライフタイムとイテレータ",
  "lessonDescription": "Rustの高度な機能を学びます。ライフタイム、イテレータ、クロージャなど、Rustの真髄を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "ライフタイム",
      "content": "**ライフタイム**は参照の有効期間を示します。\\n\\n```rust\\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\\n    if x.len() > y.len() { x } else { y }\\n}\\n```\\n\\n`'a` はライフタイム注釈で、参照が有効な範囲を示します。"
    },
    {
      "title": "イテレータ",
      "content": "**イテレータ**でコレクションを順番に処理できます。\\n\\n```rust\\nlet nums = vec![1, 2, 3];\\nlet sum: i32 = nums.iter().sum();\\n```\\n\\n`iter()` でイテレータを作成し、`sum()` で合計を計算します。"
    },
    {
      "title": "イテレータアダプタ",
      "content": "`map` や `filter` でイテレータを変換できます。\\n\\n```rust\\nlet nums = vec![1, 2, 3];\\nlet doubled: Vec<_> = nums\\n    .iter()\\n    .map(|x| x * 2)\\n    .collect();\\n// [2, 4, 6]\\n```"
    },
    {
      "title": "クロージャ",
      "content": "**クロージャ**は名前のない関数です。\\n\\n```rust\\nlet add = |a, b| a + b;\\nprintln!(\\\"{}\\\", add(2, 3)); // 5\\n```\\n\\n`|引数|` で定義し、外側の変数もキャプチャできます。"
    },
    {
      "title": "Result型",
      "content": "エラー処理には `Result` 型を使います。\\n\\n```rust\\nfn divide(a: i32, b: i32) -> Result<i32, String> {\\n    if b == 0 {\\n        Err(String::from(\\\"ゼロ除算\\\"))\\n    } else {\\n        Ok(a / b)\\n    }\\n}\\n```"
    },
    {
      "title": "? 演算子",
      "content": "`?` でエラー処理を簡潔に書けます。\\n\\n```rust\\nfn read_file() -> Result<String, io::Error> {\\n    let content = fs::read_to_string(\\\"file.txt\\\")?;\\n    Ok(content)\\n}\\n```\\n\\nエラーがあれば早期リターンします。"
    }
  ],
  "exercises": [
    {
      "title": "ライフタイムの基本",
      "description": "ライフタイムについて学びます",
      "tutorialSlides": [
        {
          "title": "ライフタイムとは？",
          "content": "# 参照の「寿命」を示す印\\n\\n**ライフタイム** は、参照がいつまで使えるかを示す印です。`'a`（アポストロフィ・エー）のように書きます。\\n\\n**なぜ必要？**\\n参照は「借りている」状態。借りた元のデータが消えたら、参照も使えなくなります。\\n\\n**たとえば：**\\n- 図書館で借りた本 → 図書館が閉まったら読めない\\n- 参照で借りたデータ → 元のデータが消えたら使えない\\n\\nライフタイムは「この参照はこの範囲で有効だよ」とコンパイラに伝える仕組みです。"
        },
        {
          "title": "なぜ必要？",
          "content": "# 危険なバグを防ぐ\\n\\n**ダングリング参照** という危険なバグがあります。これは「もう存在しないデータ」を指し続けている参照のことです。\\n\\n**例：**\\n```rust\\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\\n    if x.len() > y.len() { x } else { y }\\n}\\n```\\n\\n**`'a` の意味：**\\n- 引数 `x` と `y` は同じライフタイム `'a` を持つ\\n- 戻り値も同じライフタイム `'a` を持つ\\n- つまり「xとyが両方有効な間、戻り値も有効」という約束\\n\\nRustはこれを自動でチェックしてくれます！"
        }
      ],
      "correctCode": "// 'a でライフタイムを定義\\nfn first<'a>(s: &'a str) -> &'a str {\\n    // スライスを取得\\n    &s[..1]\\n// ブロックを閉じる\\n}\\n\\n// 関数を定義\\nfn main() {\\n    // 変数を宣言\\n    let s = String::from(\"Hello\");\\n    // 出力\\n    println!(\"{}\", first(&s));\\n// ブロックを閉じる\\n}",
      "holeyCode": "// 'a でライフタイムを定義\\nfn ___<'___>(___: &'___ ___) -> &'___ ___ {\\n    // スライスを取得\\n    &___[..___]\\n// ブロックを閉じる\\n___\\n___\\n// 関数を定義\\nfn ___() {\\n    // 変数を宣言\\n    let ___ = ___::___(\"___\");\\n    // 出力\\n    ___!(\"{}\", ___(___));\\n// ブロックを閉じる\\n___",
      "correctLines": [
          "// 'a でライフタイムを定義",
          "fn first<'a>(s: &'a str) -> &'a str {",
          "    // スライスを取得",
          "    &s[..1]",
          "// ブロックを閉じる",
          "}",
          "",
          "// 関数を定義",
          "fn main() {",
          "    // 変数を宣言",
          "    let s = String::from(\\\"Hello\\\");",
          "    // 出力",
          "    println!(\\\"{}\\\", first(&s));",
          "// ブロックを閉じる",
          "}"
        ],
      "lineHints": [
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          null,
          "",
          null,
          "",
          null,
          "",
          null,
          ""
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
      "description": "クロージャについて学びます",
      "tutorialSlides": [
        {
          "title": "クロージャとは？",
          "content": "# 名前のない「即席」関数\\n\\n**クロージャ** は、名前をつけずにその場で作る関数です。そして特別な能力があります：**周りの変数を使える**のです！\\n\\n**たとえば：**\\n```rust\\nlet x = 5;  // 外側の変数\\nlet add_x = |n| n + x;  // xを使えるクロージャ\\nprintln!(\"{}\", add_x(10));  // 15\\n```\\n\\n**普通の関数との違い：**\\n- 普通の関数：引数しか使えない\\n- クロージャ：引数 + 周りの変数も使える\\n\\n「その場の空気を読める」関数というイメージです！"
        },
        {
          "title": "クロージャの書き方",
          "content": "# | | で引数を囲む\\n\\nクロージャは `|引数| 処理` という形で書きます。`||` は「パイプ」と呼ばれます。\\n\\n**いろいろな書き方：**\\n```rust\\n// 引数なし\\n|| println!(\"Hello\")\\n\\n// 引数あり\\n|x, y| x + y\\n\\n// 複数行のブロック\\n|x| {\\n    let y = x * 2;\\n    y + 1\\n}\\n```\\n\\n**ポイント：**\\n- 引数を `| |` で囲む（関数の `()` の代わり）\\n- 型は省略できることが多い（Rustが推測してくれる）"
        }
      ],
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
      "description": "イテレータの基本の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "イテレータとは？",
          "content": "# 要素を1つずつ取り出す仕組み\\n\\n**イテレータ** は、ベクタなどのデータを「1つずつ順番に」取り出す仕組みです。\\n\\n**たとえば：**\\n- 行列に並んでいる人を1人ずつ呼ぶ\\n- 引き出しの中身を1つずつ出す\\n\\n**コード例：**\\n```rust\\nlet v = vec![1, 2, 3];\\nfor x in v.iter() {\\n    println!(\"{}\", x);  // 1, 2, 3 と順番に表示\\n}\\n```\\n\\n`iter()` で「順番に取り出す準備」をして、`for` で1つずつ処理します。"
        },
        {
          "title": "3つの iter メソッド",
          "content": "# 借りるか、もらうか\\n\\n3種類の iter があり、所有権の扱いが違います。\\n\\n**3つの違い：**\\n```rust\\nv.iter()       // 参照で借りる（&T）\\nv.iter_mut()   // 変更可能で借りる（&mut T）\\nv.into_iter()  // 所有権をもらう（T）\\n```\\n\\n**使い分け：**\\n- `iter()` → 見るだけ（元のベクタも使える）\\n- `iter_mut()` → 中身を変更したい\\n- `into_iter()` → ベクタごともらう（元は使えない）\\n\\n普通は `iter()` を使うことが多いです。"
        }
      ],
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
      "description": "配列の全要素に同じ処理を適用する方法を学びます",
      "tutorialSlides": [
        {
          "title": "map（マップ）とは？",
          "content": "# 全部を同じように変換する\\n\\n**map** は、イテレータの各要素を「同じ方法で」変換します。\\n\\n**たとえば：**\\n- 全員の身長を2倍にする\\n- 全員の名前を大文字にする\\n- 全部の数を2乗する\\n\\n**コード例：**\\n```rust\\nlet v = vec![1, 2, 3];\\nlet doubled: Vec<_> = v.iter()\\n    .map(|x| x * 2)  // 各要素を2倍に\\n    .collect();      // ベクタに戻す\\n// [2, 4, 6]\\n```\\n\\n`|x| x * 2` は「xを受け取って、x*2を返す」クロージャです。"
        },
        {
          "title": "遅延評価",
          "content": "# map だけでは実行されない！\\n\\nRustのイテレータは **遅延評価** といって、「本当に必要になるまで処理しない」仕組みです。\\n\\n**なぜ？**\\n無駄な計算を省けるから。100万件あっても、最初の10件だけ欲しいなら10件だけ処理すればいい。\\n\\n**collect() で実行：**\\n```rust\\n// これだけでは何も起きない\\nv.iter().map(|x| x * 2);\\n\\n// collect() で実行してベクタに変換\\nlet result: Vec<_> = v.iter().map(|x| x * 2).collect();\\n```\\n\\n`collect()` は「今すぐ全部処理して結果をちょうだい」という意味です。"
        }
      ],
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
      "description": "条件に合う要素だけを抽出する方法を学びます",
      "tutorialSlides": [
        {
          "title": "filter（フィルター）とは？",
          "content": "# 条件に合うものだけ残す\\n\\n**filter** は、条件を満たす要素だけを残し、他を捨てます。\\n\\n**たとえば：**\\n- 80点以上の人だけ残す\\n- 偶数だけ残す\\n- 「あ」から始まる名前だけ残す\\n\\n**コード例：**\\n```rust\\nlet v = vec![1, 2, 3, 4, 5];\\nlet evens: Vec<_> = v.iter()\\n    .filter(|x| **x % 2 == 0)  // 偶数だけ\\n    .collect();\\n// [2, 4]\\n```\\n\\n条件が `true` の要素だけが残ります。"
        },
        {
          "title": "** に注意！",
          "content": "# filter は参照の参照を受け取る\\n\\n`filter` のクロージャは、参照の参照（`&&T`）を受け取ります。そのため、値を使うには `**x` と2回参照を外す必要があります。\\n\\n**なぜ？**\\n- `iter()` は参照（`&T`）を返す\\n- `filter` はそれをさらに参照で渡す（`&&T`）\\n\\n**書き方：**\\n```rust\\n// **x で値を取り出す\\n.filter(|x| **x > 2)\\n\\n// または * を引数につける\\n.filter(|&x| *x > 2)\\n```\\n\\n最初は混乱しますが、慣れれば大丈夫！"
        }
      ],
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
      "description": "配列の要素を集約して1つの値にする方法を学びます",
      "tutorialSlides": [
        {
          "title": "fold とは？",
          "content": "# 累積処理\\n\\n**fold** は、初期値と関数で要素を1つずつ畳み込みます。\\n\\n```rust\\nlet v = vec![1, 2, 3];\\nlet sum = v.iter().fold(0, |acc, x| acc + x);\\n// 6\\n```"
        },
        {
          "title": "様々な畳み込み",
          "content": "# 合計、積、結合など\\n\\n```rust\\n// 積\\nv.iter().fold(1, |acc, x| acc * x)\\n\\n// 文字列結合\\nwords.iter().fold(String::new(), |acc, s| acc + s)\\n```"
        }
      ],
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
      "description": "?について学びます",
      "tutorialSlides": [
        {
          "title": "? 演算子とは？",
          "content": "# エラーの早期リターン\\n\\n**?** は、Resultが Err の場合に早期リターンします。\\n\\n```rust\\nfn read_file() -> Result<String, io::Error> {\\n    let content = fs::read_to_string(\"file.txt\")?;\\n    Ok(content)\\n}\\n```"
        },
        {
          "title": "match の省略形",
          "content": "# 簡潔なエラー処理\\n\\n```rust\\n// ? を使わない場合\\nmatch result {\\n    Ok(v) => v,\\n    Err(e) => return Err(e),\\n}\\n\\n// ? を使う\\nresult?\\n```"
        }
      ],
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
      "description": "複数の条件を組み合わせる方法を学びます",
      "tutorialSlides": [
        {
          "title": "unwrap_or とは？",
          "content": "# None/Err の場合のデフォルト\\n\\n**unwrap_or** は、None や Err の場合にデフォルト値を返します。\\n\\n```rust\\nlet x: Option<i32> = None;\\nlet value = x.unwrap_or(0);  // 0\\n```"
        },
        {
          "title": "unwrap_or_else",
          "content": "# 遅延評価\\n\\n```rust\\n// クロージャで計算\\nlet value = x.unwrap_or_else(|| expensive_computation());\\n```"
        }
      ],
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
      "description": "Vec のメソッド pushの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "push とは？",
          "content": "# 末尾に追加\\n\\n**push** は、Vecの末尾に要素を追加します。\\n\\n```rust\\nlet mut v = vec![1, 2];\\nv.push(3);\\n// [1, 2, 3]\\n```"
        },
        {
          "title": "mut が必要",
          "content": "# 可変参照\\n\\n```rust\\n// mut が必要\\nlet mut v = Vec::new();\\nv.push(1);\\nv.push(2);\\n```"
        }
      ],
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
      "description": "Stringについて学びます",
      "tutorialSlides": [
        {
          "title": "String vs &str",
          "content": "# 所有権の違い\\n\\n**String** は所有権を持つヒープ上の文字列、**&str** は参照です。\\n\\n```rust\\nlet s1: String = String::from(\"hello\");\\nlet s2: &str = \"hello\";\\n```"
        },
        {
          "title": "変換",
          "content": "# 相互変換\\n\\n```rust\\n// &str -> String\\nlet s = \"hello\".to_string();\\n\\n// String -> &str\\nlet slice: &str = &s;\\n```"
        }
      ],
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
