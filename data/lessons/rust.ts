export const rustData = {
  "language": "rust",
  "lessonId": "rust-1",
  "lessonTitle": "Rust (ラスト) に挑戦！",
  "lessonDescription": "間違いを見つけるのがとても得意な言葉「Rust（ラスト）」のきほんを学びましょう。きっちりしたルールを身につけて、安全なプログラムを作れるようになります。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
        "title": "画面にメッセージを出しましょう",
        "description": "Rustを使って画面に文字を表示してみましょう。println! という特別な関数を使います。",
        "difficulty": "easy",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "Rust（ラスト）とは？",
            "content": "# 安全で超高速な、期待の新星\\n\\n**Rust（ラスト）** は、ここ数年で世界中のプログラマーから最も愛されている最新の言語です。最大の特徴は「絶対に壊れない安心感」と「トップクラスの速さ」です。\\n\\n**身近な例え：**\\nC言語やC++が「速いけれど運転が難しいスポーツカー」だとしたら、Rustは「自動ブレーキや最新の安全装置が完璧に備わった、世界最速のハイパーカー」のようなイメージです！"
          },
          {
            "title": "Rustの「おまじない」",
            "content": "# println! で画面に表示\\n\\nRustで文字を画面に表示するには、`println!`（プリントラインびっくり）を使います。\\n\\n**ポイント：**\\n- `!` がつくのがRustの特徴（マクロと呼ばれます）\\n- プログラムは `fn main() { }` の中に書く\\n- `fn` は「function（関数）」の略\\n\\n**コード例：**\\n```rust\\nfn main() {\\n    println!(\"ヤッホー！\");\\n}\\n// 「ヤッホー！」と画面に表示される\\n```\\n\\n`println!` の `!` は「マクロ」という特別な機能の印です。今は「おまじない」と思っておけばOK！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    // Hello, Rust! と表示する\\n    println!(\"Hello, Rust!\");\\n}",
        "holeyCode": "fn ___ () {\\n    // Hello, Rust! と表示する\\n    ___!(\"Hello, Rust!\");\\n___",
        "correctLines": [
          "fn main() {",
          "    // Hello, Rust! と表示する",
          "    println!(\"Hello, Rust!\");",
          "}"
        ],
        "lineHints": [
          "プログラムの実行開始地点（main関数）を定義します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          "プログラムの終わりです。"
        ],
        "candidates": {
          "strings": [
            "Hello, Rust!"
          ],
          "others": ["main()", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, Rust!\\n"
          }
        ]
      },
    {
        "title": "便利な「はこ」変数（へんすう）",
        "description": "データに名前をつけて保存できる「変数（へんすう）」を使ってみましょう。letで変数を作ります。",
        "difficulty": "easy",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "変数（へんすう）とは？",
            "content": "# データを保存する「はこ」\\n\\n**変数（へんすう）** は、数字や文字を入れておける「はこ」のことです。名前をつけて、あとで使うことができます。\\n\\n**たとえば：**\\n- 「りんごの数」というラベルの箱に「5」を入れる\\n- あとで「りんごの数」と呼べば「5」が出てくる\\n\\n**Rustでの書き方：**\\n```rust\\nlet x = 10;  // xという箱に10を入れる\\nprintln!(\"{}\", x);  // xの中身（10）を表示\\n```\\n\\n`let` は「この名前で箱を作るよ」という意味です。"
          },
          {
            "title": "計算の記号（演算子）",
            "content": "# 四則演算（しそくえんざん）\\n\\nRustでも算数と同じ記号で計算ができます。\\n\\n**4つの基本記号：**\\n- **+**（プラス）: たし算\\n- **-**（マイナス）: ひき算\\n- **\\***（アスタリスク）: かけ算（×の代わり）\\n- **/**（スラッシュ）: わり算（÷の代わり）\\n\\n**コード例：**\\n```rust\\nlet a = 10;\\nlet b = 5;\\nprintln!(\"{}\", a + b);  // 15 と表示される\\n```\\n\\n`println!` の `{}` は「ここに値を入れてね」という目印です。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    // x に 10 を入れる\\n    let x = 10;\\n    // y に 5 を入れる\\n    let y = 5;\\n    // + でたし算する\\n    println!(\"{}\", x + y);\\n}",
        "holeyCode": "fn ___ () {\\n    // x に 10 を入れる\\n    let ___ = 10;\\n    // y に 5 を入れる\\n    let ___ = 5;\\n    // + でたし算する\\n    ___!(\"{}\", x + y);\\n___",
        "correctLines": [
          "fn main() {",
          "    // x に 10 を入れる",
          "    let x = 10;",
          "    // y に 5 を入れる",
          "    let y = 5;",
          "    // + でたし算する",
          "    println!(\"{}\", x + y);",
          "}"
        ],
        "lineHints": [
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          null,
          null,
          null
        ],
        "candidates": {
          "numbers": [
            "10",
            "5"
          ],
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["main()", "x", "y", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
        "title": "剰余演算子（%）",
        "description": "割り算の「あまり」を求める「%」（パーセント）演算子を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "あまりを求める",
            "content": "# 剰余演算子（じょうよえんざんし）「%」\\n\\n`%`（パーセント）は、割り算の **「あまり」** を計算する特別な記号です。\\n\\n**わかりやすい例：**\\n- 10このアメを3人で分けると？\\n- 1人3こずつで、**1こあまる**\\n- これを `10 % 3` と書くと、答えは `1`\\n\\n**コード例：**\\n```rust\\nprintln!(\"{}\", 10 % 3);  // 1（あまり1）\\nprintln!(\"{}\", 8 % 4);   // 0（あまりなし＝割り切れる）\\n```\\n\\n**使いどころ：**\\n- 偶数か奇数か調べる（`n % 2` が0なら偶数）\\n- 時計の計算（24を超えたら0に戻る、など）"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    // 10 を 3 で割ったあまりを出力する\\n    println!(\"{}\", 10 % 3);\\n}",
        "holeyCode": "fn ___ () {\\n    // 10 を 3 で割ったあまりを出力する\\n    ___!(\"{}\", 10 % 3);\\n___",
        "correctLines": [
          "fn main() {",
          "    // 10 を 3 で割ったあまりを出力する",
          "    println!(\"{}\", 10 % 3);",
          "}"
        ],
        "lineHints": [
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "%",
            "/",
            "*",
            "-"
          ],
          "others": ["main()", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
        "title": "累算代入演算子（+=、-=）",
        "description": "変数の値を手軽に増やしたり減らしたりする「+=」「-=」を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "累算代入演算子（るいさんだいにゅう）とは？",
            "content": "# 値をかんたんに増やす・減らす\\n\\n`+=`（プラスイコール）と `-=`（マイナスイコール）は、変数の中身を増やしたり減らしたりする便利な記号です。\\n\\n**Rustの大事なルール：`mut`が必要！**\\nRustでは、変数を変更するには `let mut`（レット ミュート）と書く必要があります。`mut` は「mutable（変更できる）」の略です。\\n\\n**コード例：**\\n```rust\\nlet mut score = 100;  // mut をつけて変更可能に\\nscore += 10;          // 10を足す → 110に\\nscore -= 50;          // 50を引く → 60に\\n```\\n\\n`mut` がないと「この変数は変えちゃダメ！」とRustが怒ります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    // mut で変更可能にする\\n    let mut hp = 100;\\n    // += で 20 を足す\\n    hp += 20;\\n    // -= で 50 を引く\\n    hp -= 50;\\n    println!(\"{}\", hp);\\n}",
        "holeyCode": "fn ___ () {\\n    // mut で変更可能にする\\n    let mut ___ = 100;\\n    // += で 20 を足す\\n    hp += ___;\\n    // -= で 50 を引く\\n    hp -= ___;\\n    ___!(\"{}\", hp);\\n___",
        "correctLines": [
          "fn main() {",
          "    // mut で変更可能にする",
          "    let mut hp = 100;",
          "    // += で 20 を足す",
          "    hp += 20;",
          "    // -= で 50 を引く",
          "    hp -= 50;",
          "    println!(\"{}\", hp);",
          "}"
        ],
        "lineHints": [
          "fn main()でメイン関数を定義します。",
          null,
          "変数hpを宣言し、100を設定します。",
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "+=",
            "-=",
            "*=",
            "/="
          ],
          "others": ["main()", "hp", "20", "50", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "70\\n"
          }
        ]
      },
    {
        "title": "「もし〜なら」で分けましょう",
        "description": "条件によって動きを変える if文を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "条件分岐（じょうけんぶんき）とは？",
            "content": "# プログラムに「判断」させよう\\n\\n**条件分岐** は、「もし〜なら、〇〇する」という判断をプログラムにさせる仕組みです。\\n\\n**身近な例：**\\n- もし80点以上なら → 「合格！」と表示\\n- もし雨なら → 傘を持っていく\\n- もしHPが0なら → ゲームオーバー\\n\\n**Rustでの書き方：**\\n```rust\\nif score > 80 {\\n    println!(\"合格！\");\\n}\\n```\\n\\n**読み方：**\\n- `if` →「もし」\\n- `score > 80` →「スコアが80より大きいなら」\\n- `{ }` の中 →「これをやる」"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    // score に 100 を入れる\\n    let score = 100;\\n    // > で比較する\\n    if score > 80 {\\n        println!(\"Great!\");\\n    }\\n}",
        "holeyCode": "fn ___ () {\\n    // score に 100 を入れる\\n    let ___ = 100;\\n    // > で比較する\\n    if score ___ 80 {\\n        ___!(\"Great!\");\\n    ___\\n___",
        "correctLines": [
          "fn main() {",
          "    // score に 100 を入れる",
          "    let score = 100;",
          "    // > で比較する",
          "    if score > 80 {",
          "        println!(\"Great!\");",
          "    }",
          "}"
        ],
        "lineHints": [
          "再代入可能な変数を宣言し、数値を代入します。",
          null,
          "変数scoreを宣言し、100を設定します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "numbers": [
            "100"
          ],
          "operators": [
            ">",
            "<",
            ">=",
            "<="
          ],
          "others": ["main()", "score", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Great!\\n"
          }
        ]
      },
    {
        "title": "論理演算子（&&、||）",
        "description": "複数の条件を組み合わせる「&&（かつ）」と「||（または）」を学びましょう。",
        "difficulty": "easy",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "条件を組み合わせる",
            "content": "# 論理演算子（ろんりえんざんし）\\n\\n2つ以上の条件を組み合わせたいときに使う記号です。\\n\\n**2つの記号：**\\n- `&&`（アンドアンド）：「かつ」＝ **両方とも** 正しいとき\\n- `||`（オアオア）：「または」＝ **どちらか** 正しいとき\\n\\n**身近な例：**\\n- 遊園地：「18歳以上 **かつ** チケットあり」なら乗れる\\n- おやつ：「宿題終わった **または** お手伝いした」ならOK\\n\\n**コード例：**\\n```rust\\nif score >= 70 && bonus > 0 {\\n    // 70点以上 かつ ボーナスあり → 合格！\\n    println!(\"合格！\");\\n}\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    let score = 80;\\n    let bonus = 10;\\n    // && で両方の条件をチェック\\n    if score >= 70 && bonus > 0 {\\n        println!(\"Bonus Pass\");\\n    }\\n}",
        "holeyCode": "fn ___ () {\\n    let ___ = 80;\\n    let ___ = 10;\\n    // && で両方の条件をチェック\\n    if score ___ 70 && bonus > 0 {\\n        ___!(\"Bonus Pass\");\\n    ___\\n___",
        "correctLines": [
          "fn main() {",
          "    let score = 80;",
          "    let bonus = 10;",
          "    // && で両方の条件をチェック",
          "    if score >= 70 && bonus > 0 {",
          "        println!(\"Bonus Pass\");",
          "    }",
          "}"
        ],
        "lineHints": [
          "fn main()でメイン関数を定義します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "&&",
            "||",
            "&",
            "|"
          ],
          "others": ["main()", "score", "bonus", ">=", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Bonus Pass\\n"
          }
        ]
      },
    {
        "title": "たくさんのデータをまとめましょう「ベクタ」",
        "description": "「ベクタ（Vec）」を使うと、たくさんのデータを一つの「長い はこ」にまとめて入れられます。",
        "difficulty": "easy",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "ベクタ（Vec）とは？",
            "content": "# データを並べてまとめる「長い箱」\\n\\n**ベクタ（Vec）** は、たくさんのデータを順番に並べて入れられる「長い箱」です。\\n\\n**たとえば：**\\n- 買い物リストの商品を全部まとめる\\n- テストの点数を全部まとめる\\n- 友だちの名前を全部まとめる\\n\\n100個でも1000個でも、1つの変数でまとめて管理できます！\\n\\n**作り方：**\\n```rust\\nlet fruits = vec![\"りんご\", \"バナナ\", \"みかん\"];\\n// vec! で ベクタを作る\\n```"
          },
          {
            "title": "ベクタの番号は「0」から！",
            "content": "# [ ]で番号を指定して取り出す\\n\\n`[番号]` で何番目のデータか指定して取り出せます。\\n\\n**大事なルール：番号は「0」から！**\\n- 1番目 → `[0]`\\n- 2番目 → `[1]`\\n- 3番目 → `[2]`\\n\\n**コード例：**\\n```rust\\nlet fruits = vec![\"りんご\", \"バナナ\", \"みかん\"];\\n//                  ↑0番    ↑1番     ↑2番\\nprintln!(\"{}\", fruits[0]);  // りんご\\nprintln!(\"{}\", fruits[1]);  // バナナ\\n```\\n\\nプログラミングでは「0から数える」のが世界共通のルールです！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "fn main() {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let colors = vec![\"あか\", \"あお\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    println!(\"{}\", colors[1]);\\n}",
        "holeyCode": "fn ___ () {\\n    // colors というベクタを作る（'あか', 'あお'の順）\\n    let ___ = vec![\"あか\", \"あお\"];\\n    // 2番目のデータ（インデックス1）を出す\\n    ___!(\"{}\", colors[1]);\\n___",
        "correctLines": [
          "fn main() {",
          "    // colors というベクタを作る（'あか', 'あお'の順）",
          "    let colors = vec![\"あか\", \"あお\"];",
          "    // 2番目のデータ（インデックス1）を出す",
          "    println!(\"{}\", colors[1]);",
          "}"
        ],
        "lineHints": [
          "vec![\"あか\", \"あお\"] と入力しましょう。",
          null,
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "macros": [
            "vec!",
            "println!"
          ],
          "strings": [
            "あか",
            "あお"
          ],
          "numbers": [
            "1"
          ],
          "others": ["main()", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "あお\\n"
          }
        ]
      },
    {
        "title": "名前で引き出す「辞書」",
        "description": "「辞書（HashMap）」を使うと、名前をつけてデータを保存し、その名前で取り出せます。",
        "difficulty": "easy",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "辞書（HashMap）とは？",
            "content": "# 名前で検索できる「辞書」\\n\\n**HashMap**（ハッシュマップ）は、「名前」と「データ」をセットにして保存できる仕組みです。本物の辞書のように使えます。\\n\\n**たとえば果物の色辞書：**\\n- 「りんご」→「あか」\\n- 「バナナ」→「きいろ」\\n- 「みかん」→「オレンジ」\\n\\n**使う準備：**\\n```rust\\nuse std::collections::HashMap;  // 機能を読み込む\\nlet mut fruits = HashMap::new();  // 空の辞書を作る\\nfruits.insert(\"りんご\", \"あか\");  // データを追加\\n```\\n\\n`use` は「この機能を使うよ」という宣言です。"
          },
          {
            "title": "辞書の使い方",
            "content": "# 名前（キー）で取り出す\\n\\n辞書に入れたデータは、名前（キー）を指定して取り出せます。\\n\\n**コード例：**\\n```rust\\nuse std::collections::HashMap;\\nfn main() {\\n    let mut fruits = HashMap::new();\\n    fruits.insert(\"りんご\", \"あか\");  // 追加\\n    fruits.insert(\"バナナ\", \"きいろ\");  // 追加\\n    \\n    println!(\"{}\", fruits[\"りんご\"]);  // あか と表示\\n}\\n```\\n\\n**ポイント：**\\n- `insert(名前, データ)` で追加\\n- `辞書[名前]` で取り出し\\n- 番号ではなく「名前」で探せるのが便利！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "use std::collections::HashMap;\\nfn main() {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut colors = HashMap::new();\\n    // キーと値を追加\\n    colors.insert(\"みかん\", \"オレンジ\");\\n    // 中身を出す\\n    println!(\"{}\", colors[\"みかん\"]);\\n}",
        "holeyCode": "use std::___::___;\\nfn ___ () {\\n    // 辞書を作る（キーは'みかん'、値は'オレンジ'）\\n    let mut ___ = HashMap::new();\\n    // キーと値を追加\\n    colors.___(\"みかん\", \"オレンジ\");\\n    // 中身を出す\\n    ___!(\"{}\", colors[\"みかん\"]);\\n___",
        "correctLines": [
          "use std::collections::HashMap;",
          "fn main() {",
          "    // 辞書を作る（キーは'みかん'、値は'オレンジ'）",
          "    let mut colors = HashMap::new();",
          "    // キーと値を追加",
          "    colors.insert(\"みかん\", \"オレンジ\");",
          "    // 中身を出す",
          "    println!(\"{}\", colors[\"みかん\"]);",
          "}"
        ],
        "lineHints": [
          "insert(\"みかん\", \"オレンジ\") と入力しましょう。",
          "マクロを使用して、文字列と改行を標準出力に出力します。",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "variables": [
            "colors"
          ],
          "macros": [
            "println!"
          ],
          "functions": [
            "insert"
          ],
          "strings": [
            "みかん",
            "オレンジ"
          ],
          "others": ["collections", "HashMap", "main()", "println", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "オレンジ\\n"
          }
        ]
      }
  ]
};