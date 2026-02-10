export const rust4Data = {
  "language": "rust",
  "lessonId": "rust-4",
  "lessonTitle": "Rust IV - トレイトとスマートポインタ",
  "lessonDescription": "Rustのトレイトとスマートポインタを学びます。抽象化と所有権の高度なパターンを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "トレイト",
      "content": "**トレイト**はメソッドの集まりを定義します。\\n\\n```rust\\ntrait Speak {\\n    fn speak(&self) -> String;\\n}\\n\\nimpl Speak for Dog {\\n    fn speak(&self) -> String {\\n        String::from(\\\"ワン！\\\")\\n    }\\n}\\n```"
    },
    {
      "title": "トレイト境界",
      "content": "ジェネリクスに**トレイト境界**をつけられます。\\n\\n```rust\\nfn greet<T: Speak>(animal: T) {\\n    println!(\\\"{}\\\", animal.speak());\\n}\\n```\\n\\n`T: Speak` は「SpeakトレイトをimplしているT」を意味します。"
    },
    {
      "title": "Boxスマートポインタ",
      "content": "`Box<T>` でヒープにデータを配置します。\\n\\n```rust\\nlet b = Box::new(5);\\nprintln!(\\\"{}\\\", b);\\n```\\n\\n再帰的なデータ構造や大きなデータに便利です。"
    },
    {
      "title": "Rc（参照カウント）",
      "content": "`Rc<T>` で複数の所有者を持てます。\\n\\n```rust\\nuse std::rc::Rc;\\nlet a = Rc::new(5);\\nlet b = Rc::clone(&a);\\n// a と b は同じデータを共有\\n```\\n\\n参照カウントで管理されます。"
    },
    {
      "title": "RefCell",
      "content": "`RefCell<T>` で実行時に借用ルールをチェックします。\\n\\n```rust\\nuse std::cell::RefCell;\\nlet data = RefCell::new(5);\\n*data.borrow_mut() += 1;\\n```\\n\\n内部可変性パターンで使います。"
    },
    {
      "title": "トレイトオブジェクト",
      "content": "**トレイトオブジェクト**で動的ディスパッチができます。\\n\\n```rust\\nlet animals: Vec<Box<dyn Speak>> = vec![\\n    Box::new(Dog),\\n    Box::new(Cat),\\n];\\nfor a in animals {\\n    println!(\\\"{}\\\", a.speak());\\n}\\n```"
    }
  ],
  "exercises": [
    {
      "title": "トレイトの定義",
      "tutorialSlides": [
        {
          "title": "トレイトとは？（復習）",
          "content": "# 「できること」の約束\\n\\n**トレイト** は、型が持つべきメソッドを定義する仕組みです。\\n\\n**たとえば：**\\n- 「あいさつできる」トレイト → greet() メソッドを持つ\\n- 「表示できる」トレイト → display() メソッドを持つ\\n\\n**コード例：**\\n```rust\\ntrait Greet {\\n    fn greet(&self) -> String;  // メソッドの「約束」\\n}\\n```\\n\\nこれは「Greetできる型は、greet()メソッドを持つ」という約束です。"
        },
        {
          "title": "トレイトの実装",
          "content": "# impl で約束を守る\\n\\n構造体にトレイトを実装すると、その構造体は「約束を守る」ことになります。\\n\\n**コード例：**\\n```rust\\nstruct Person { name: String }\\n\\nimpl Greet for Person {\\n    fn greet(&self) -> String {\\n        format!(\"Hello, {}\", self.name)\\n    }\\n}\\n```\\n\\n**読み方：**\\n- `impl Greet for Person` → 「PersonはGreetを実装する」\\n- これでPersonは「あいさつできる」ようになった！"
        }
      ],
      "correctCode": "// Speakトレイトを定義\\ntrait Speak {\\n    fn speak(&self) -> String;\\n}\\n\\nstruct Dog;\\n\\nimpl Speak for Dog {\\n    fn speak(&self) -> String {\\n        String::from(\"ワン！\")\\n    }\\n}\\n\\nfn main() {\\n    let dog = Dog;\\n    println!(\"{}\", dog.speak());\\n}",
      "holeyCode": "// Speakトレイトを定義\\ntrait ___ {\\n    fn ___(&___) -> ___;\\n___\\n___\\nstruct ___;\\n___\\nimpl ___ for ___ {\\n    fn ___(&___) -> ___ {\\n        ___::___(\"___\")\\n    ___\\n___\\n___\\nfn ___() {\\n    let ___ = ___;\\n    ___!(\"{}\", ___.___());\\n___",
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
          "トレイト名Speakを定義します。",
          "speakメソッド、引数&self、戻り値型Stringを指定します。",
          "トレイト定義ブロックを閉じます。",
          null,
          "構造体Dogを定義します。",
          null,
          "SpeakトレイトをDogに実装します。",
          "speakメソッド、引数&self、戻り値型Stringを指定します。",
          "String::fromで文字列\"ワン！\"を作成します。",
          "メソッド定義ブロックを閉じます。",
          "impl実装ブロックを閉じます。",
          null,
          "main関数を定義します。",
          "変数dogにDog構造体を代入します。",
          "println!でdog.speak()の結果を表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "trait",
            "impl",
            "struct",
            "fn",
            "let"
          ],
          "others": ["Speak", "speak", "self", "String", "}", "Dog", "from", "ワン！", "main", "dog", "println", "{"]
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
      "tutorialSlides": [
        {
          "title": "derive（デライブ）とは？",
          "content": "# トレイトを「自動で」実装\\n\\n**#[derive(...)]** を使うと、よく使うトレイトを自分で書かなくても自動で実装してくれます。\\n\\n**たとえば：**\\n構造体を `println!` で表示したいとき、普通は Display トレイトを実装する必要がありますが、`#[derive(Debug)]` を書くだけでOK！\\n\\n**コード例：**\\n```rust\\n#[derive(Debug)]  // Debug トレイトを自動実装\\nstruct Point {\\n    x: i32,\\n    y: i32,\\n}\\n\\nlet p = Point { x: 1, y: 2 };\\nprintln!(\"{:?}\", p);  // Point { x: 1, y: 2 }\\n```"
        },
        {
          "title": "よく使う derive トレイト",
          "content": "# 覚えておくと便利な5つ\\n\\n**よく使うderiveトレイト：**\\n```rust\\nDebug     // {:?} でデバッグ表示できる\\nClone     // .clone() でコピーを作れる\\nCopy      // 代入時に自動でコピー（小さい型向け）\\nPartialEq // == で比較できる\\nDefault   // 初期値を自動で作れる\\n```\\n\\n**複数指定もOK：**\\n```rust\\n#[derive(Debug, Clone, PartialEq)]\\nstruct User {\\n    name: String,\\n    age: u32,\\n}\\n```\\n\\n`Debug` は特によく使います。デバッグ時に構造体の中身を見れて便利！"
        }
      ],
      "correctCode": "// derive でトレイトを自動実装\\n#[derive(Debug)]\\nstruct User {\\n    name: String,\\n    age: u32,\\n}\\n\\nfn main() {\\n    let user = User { name: String::from(\"アリス\"), age: 30 };\\n    println!(\"{:?}\", user);\\n}",
      "holeyCode": "// derive でトレイトを自動実装\\n#[___(___)]\\nstruct ___ {\\n    ___: ___,\\n    ___: ___,\\n___\\n___\\nfn ___() {\\n    let ___ = ___ { ___: ___::___(\"___\"), ___: ___ };\\n    ___!(\"{:?}\", ___);\\n___",
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
          "#[derive(Debug)]でDebugトレイトを自動実装します。",
          "構造体Userを定義します。",
          "フィールドname、型Stringを定義します。",
          "フィールドage、型u32を定義します。",
          "構造体定義ブロックを閉じます。",
          null,
          "main関数を定義します。",
          "変数userにUser構造体、name: String::from(\"アリス\")、age: 30を設定します。",
          "println!で変数userをデバッグ表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "attributes": [
            "derive",
            "cfg",
            "allow"
          ],
          "others": ["Debug", "User", "name", "String", "age", "u32", "}", "main", "user", "from", "アリス", "30", "println"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "User { name: \"アリス\", age: 30 }\\n"
          }
        ]
      },
    {
      "title": "Box<T>",
      "tutorialSlides": [
        {
          "title": "Box（ボックス）とは？",
          "content": "# データを「ヒープ」に置く箱\\n\\n**Box<T>** は、データを「ヒープ」という特別な場所に置くための箱です。\\n\\n**メモリの2つの場所：**\\n- **スタック**：小さくて速い。サイズが決まっているデータ向け\\n- **ヒープ**：大きくて柔軟。サイズが大きいor変わるデータ向け\\n\\n**コード例：**\\n```rust\\nlet b = Box::new(5);  // 5をヒープに置く\\nprintln!(\"{}\", *b);   // *で中身を取り出す → 5\\n```\\n\\n`*` は「箱を開けて中身を見る」操作です。"
        },
        {
          "title": "いつ使う？",
          "content": "# サイズが決まらないとき\\n\\nBoxは、コンパイル時にサイズがわからない型に使います。\\n\\n**たとえば再帰的な型：**\\n```rust\\n// リストは「値 + 次のリスト」の繰り返し\\nenum List {\\n    Cons(i32, Box<List>),  // Boxで次を指す\\n    Nil,                   // 終わり\\n}\\n```\\n\\n**なぜBoxが必要？**\\n- `List` の中に `List` がある → 無限に大きくなる？\\n- `Box` を使うと、サイズが固定（ポインタのサイズ）になる\\n\\n「中身」ではなく「中身への矢印」を持つイメージです。"
        }
      ],
      "correctCode": "fn main() {\\n    // Box::new でヒープに格納\\n    let x = Box::new(42);\\n    println!(\"{}\", *x);\\n}",
      "holeyCode": "fn ___() {\\n    // Box::new でヒープに格納\\n    let ___ = ___::___(___);\\n    ___!(\"{}\", *___);\\n___",
      "correctLines": [
          "fn main() {",
          "    // Box::new でヒープに格納",
          "    let x = Box::new(42);",
          "    println!(\"{}\", *x);",
          "}"
        ],
      "lineHints": [
          "main関数を定義します。",
          null,
          "変数xにBox::new(42)でヒープに42を格納します。",
          "println!で*xを参照解除して表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "types": [
            "Box",
            "Rc",
            "Arc"
          ],
          "others": ["main", "x", "new", "42", "println", "}"]
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
      "tutorialSlides": [
        {
          "title": "Rc（アールシー）とは？",
          "content": "# 複数の「持ち主」を許可する仕組み\\n\\n**Rc<T>** は「Reference Counted（参照カウント）」の略で、複数の所有者でデータを共有できます。\\n\\n**普通の所有権：**\\n1人だけが持ち主。渡したら元の人は使えない。\\n\\n**Rc を使うと：**\\n複数人が同じデータの「持ち主」になれる！\\n\\n**コード例：**\\n```rust\\nuse std::rc::Rc;\\n\\nlet a = Rc::new(5);       // Rcでラップ\\nlet b = Rc::clone(&a);    // bも持ち主になる\\n// a も b も使える！\\n```"
        },
        {
          "title": "参照カウントの仕組み",
          "content": "# 「何人が持っているか」を数える\\n\\nRcは「今何人がこのデータを持っているか」を数えています。\\n\\n**コード例：**\\n```rust\\nlet a = Rc::new(5);\\nprintln!(\"{}\", Rc::strong_count(&a));  // 1\\n\\nlet b = Rc::clone(&a);\\nprintln!(\"{}\", Rc::strong_count(&a));  // 2\\n```\\n\\n**いつデータが消える？**\\n- カウントが0になったとき（誰も持っていないとき）\\n- 最後の持ち主がいなくなると自動で片付けられる\\n\\n`Rc::clone` は「持ち主を1人増やす」操作です。"
        }
      ],
      "correctCode": "use std::rc::Rc;\\n\\nfn main() {\\n    let a = Rc::new(String::from(\"こんにちは\"));\\n    // clone で参照カウントを増やす\\n    let b = Rc::clone(&a);\\n    println!(\"{} {}\", a, b);\\n}",
      "holeyCode": "use ___::___::___;\\n___\\nfn ___() {\\n    let ___ = ___::___(___::___(\"___\"));\\n    // clone で参照カウントを増やす\\n    let ___ = ___::___(&___);\\n    ___!(\"{} {}\", ___, ___);\\n___",
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
          "use std::rc::RcでRcをインポートします。",
          null,
          "main関数を定義します。",
          "変数aにRc::new(String::from(\"こんにちは\"))を代入します。",
          null,
          "変数bにRc::clone(&a)で参照カウントを増やして代入します。",
          "println!でaとbを表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "clone",
            "new",
            "copy",
            "from"
          ],
          "others": ["std", "rc", "Rc", "main", "a", "b", "String", "こんにちは", "println", "}"]
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
      "tutorialSlides": [
        {
          "title": "HashMap（ハッシュマップ）とは？",
          "content": "# 名前で引ける「辞書」\\n\\n**HashMap** は、「キー（名前）」と「値（データ）」をセットで保存する辞書です。\\n\\n**たとえば：**\\n- 「青チーム」→ 10点\\n- 「赤チーム」→ 15点\\n\\n**コード例：**\\n```rust\\nuse std::collections::HashMap;\\n\\nlet mut scores = HashMap::new();\\nscores.insert(\"Blue\", 10);   // 追加\\nscores.insert(\"Red\", 15);    // 追加\\n```\\n\\n`use` で機能を読み込んでから使います。"
        },
        {
          "title": "値の取得",
          "content": "# get で安全に取り出す\\n\\n`get()` メソッドで値を取り出せます。見つからない可能性があるので、`Option` が返ってきます。\\n\\n**コード例：**\\n```rust\\n// getはOption<&V>を返す\\nif let Some(score) = scores.get(\"Blue\") {\\n    println!(\"青チームは{}点\", score);\\n}\\n```\\n\\n**ポイント：**\\n- キーがあれば `Some(値)` が返る\\n- キーがなければ `None` が返る\\n- `if let` で安全に取り出せる\\n\\n存在しないキーでアクセスしてもプログラムが落ちない！"
        }
      ],
      "correctCode": "use std::collections::HashMap;\\n\\nfn main() {\\n    let mut map = HashMap::new();\\n    // insert でキーと値を追加\\n    map.insert(\"a\", 1);\\n    map.insert(\"b\", 2);\\n    println!(\"{:?}\", map.get(\"a\"));\\n}",
      "holeyCode": "use ___::___::___;\\n___\\nfn ___() {\\n    let mut ___ = ___::___();\\n    // insert でキーと値を追加\\n    ___.___(\"___\", ___);\\n    ___.___(\"___\", ___);\\n    ___!(\"{:?}\", ___.___(\"___\"));\\n___",
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
          "use std::collections::HashMapでHashMapをインポートします。",
          null,
          "main関数を定義します。",
          "変数mapにHashMap::new()で空のハッシュマップを作成します。",
          null,
          "map.insert(\"a\", 1)でキー\"a\"に値1を追加します。",
          "map.insert(\"b\", 2)でキー\"b\"に値2を追加します。",
          "println!でmap.get(\"a\")の結果を表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "insert",
            "put",
            "add",
            "new",
            "get"
          ],
          "others": ["std", "collections", "HashMap", "main", "map", "a", "b", "1", "2", "println", "}"]
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
      "tutorialSlides": [
        {
          "title": "HashSet とは？",
          "content": "# 一意な値の集合\\n\\n**HashSet** は、重複のない値の集合です。\\n\\n```rust\\nuse std::collections::HashSet;\\n\\nlet mut set = HashSet::new();\\nset.insert(1);\\nset.insert(2);\\nset.insert(1); // 重複は無視\\n```"
        },
        {
          "title": "集合演算",
          "content": "# 和集合、積集合など\\n\\n```rust\\nset1.union(&set2)\\nset1.intersection(&set2)\\nset1.difference(&set2)\\n```"
        }
      ],
      "correctCode": "// HashSet をインポート\\nuse std::collections::HashSet;\\n\\nfn main() {\\n    let mut set = HashSet::new();\\n    set.insert(1);\\n    set.insert(2);\\n    set.insert(1);\\n    println!(\"{}\", set.len());\\n}",
      "holeyCode": "// HashSet をインポート\\nuse ___::___::___;\\n___\\nfn ___() {\\n    let mut ___ = ___::___();\\n    ___.___(___);\\n    ___.___(___);\\n    ___.___(___);\\n    ___!(\"{}\", ___.___());\\n___",
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
          "use std::collections::HashSetでHashSetをインポートします。",
          null,
          "main関数を定義します。",
          "変数setにHashSet::new()で空のセットを作成します。",
          "set.insert(1)で値1を追加します。",
          "set.insert(2)で値2を追加します。",
          "set.insert(1)で値1を追加（重複は無視されます）。",
          "println!でset.len()の結果（要素数）を表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "types": [
            "HashSet",
            "HashMap",
            "BTreeSet"
          ],
          "others": ["std", "collections", "main", "set", "new", "insert", "1", "2", "println", "len", "}"]
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
      "tutorialSlides": [
        {
          "title": "match ガードとは？",
          "content": "# 追加条件\\n\\n**if** でパターンに追加条件をつけられます。\\n\\n```rust\\nmatch x {\\n    n if n < 0 => println!(\"negative\"),\\n    n if n > 0 => println!(\"positive\"),\\n    _ => println!(\"zero\"),\\n}\\n```"
        },
        {
          "title": "使用例",
          "content": "# 複雑な条件分岐\\n\\n```rust\\nmatch Some(5) {\\n    Some(x) if x % 2 == 0 => println!(\"even\"),\\n    Some(x) => println!(\"odd: {}\", x),\\n    None => println!(\"none\"),\\n}\\n```"
        }
      ],
      "correctCode": "fn main() {\\n    let num = 7;\\n    match num {\\n        // if でマッチガードを追加\\n        n if n % 2 == 0 => println!(\"偶数\"),\\n        _ => println!(\"奇数\"),\\n    }\\n}",
      "holeyCode": "fn ___() {\\n    let ___ = ___;\\n    match ___ {\\n        // if でマッチガードを追加\\n        ___ if ___ % ___ == ___ => ___!(\"___\"),\\n        ___ => ___!(\"___\"),\\n    ___\\n___",
      "correctLines": [
          "fn main() {",
          "    let num = 7;",
          "    match num {",
          "        // if でマッチガードを追加",
          "        n if n % 2 == 0 => println!(\"偶数\"),",
          "        _ => println!(\"奇数\"),",
          "    }",
          "}"
        ],
      "lineHints": [
          "main関数を定義します。",
          "変数numに7を代入します。",
          "match numでnumの値をパターンマッチします。",
          null,
          "n if n % 2 == 0で偶数判定、println!(\"偶数\")を実行します。",
          "_ => println!(\"奇数\")でそれ以外の場合を処理します。",
          "matchブロックを閉じます。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "if",
            "when",
            "where",
            "match",
            "let",
            "fn"
          ],
          "others": ["main", "num", "7", "n", "2", "0", "println", "偶数", "_", "奇数", "}"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "奇数\\n"
          }
        ]
      },
    {
      "title": "impl Trait",
      "tutorialSlides": [
        {
          "title": "impl Trait とは？",
          "content": "# 戻り値の型を抽象化\\n\\n**impl Trait** で、トレイトを実装する型を返せます。\\n\\n```rust\\nfn make_iter() -> impl Iterator<Item = i32> {\\n    vec![1, 2, 3].into_iter()\\n}\\n```"
        },
        {
          "title": "引数にも使える",
          "content": "# ジェネリクスの代わり\\n\\n```rust\\nfn print_all(iter: impl Iterator<Item = i32>) {\\n    for x in iter {\\n        println!(\"{}\", x);\\n    }\\n}\\n```"
        }
      ],
      "correctCode": "// impl でトレイトを実装する型を返す\\nfn doubles(n: i32) -> impl Iterator<Item = i32> {\\n    (0..n).map(|x| x * 2)\\n}\\n\\nfn main() {\\n    for x in doubles(3) {\\n        println!(\"{}\", x);\\n    }\\n}",
      "holeyCode": "// impl でトレイトを実装する型を返す\\nfn ___(___: ___) -> impl ___<___ = ___> {\\n    (___..___).___(___ ___ * ___)\\n___\\n___\\nfn ___() {\\n    for ___ in ___(___) {\\n        ___!(\"{}\", ___);\\n    ___\\n___",
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
          "fn doubles(n: i32) -> impl Iterator<Item = i32>で関数を定義します。",
          "(0..n).map(|x| x * 2)で0からnまでの値を2倍にします。",
          "doubles関数ブロックを閉じます。",
          null,
          "main関数を定義します。",
          "for x in doubles(3)でイテレータをループします。",
          "println!でxを表示します。",
          "forループブロックを閉じます。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "keywords": [
            "impl",
            "dyn",
            "type",
            "fn",
            "for",
            "in"
          ],
          "others": ["doubles", "n", "i32", "Iterator", "Item", "0", "map", "|x|", "x", "2", "}", "main", "3", "println"]
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
      "tutorialSlides": [
        {
          "title": "collect とは？",
          "content": "# イテレータをコレクションに\\n\\n**collect** は、イテレータをVecやHashMapなどに変換します。\\n\\n```rust\\nlet v: Vec<_> = (0..5).collect();\\nlet s: String = vec!['a', 'b'].into_iter().collect();\\n```"
        },
        {
          "title": "型ヒント",
          "content": "# 変換先を指定\\n\\n```rust\\n// ターボフィッシュ構文\\nlet v = (0..5).collect::<Vec<_>>();\\n\\n// 変数の型注釈\\nlet v: Vec<i32> = (0..5).collect();\\n```"
        }
      ],
      "correctCode": "fn main() {\\n    // collect で Vec に変換\\n    let nums: Vec<i32> = (1..=5).collect();\\n    println!(\"{:?}\", nums);\\n}",
      "holeyCode": "fn ___() {\\n    // collect で Vec に変換\\n    let ___: ___<___> = (___..=___).___();\\n    ___!(\"{:?}\", ___);\\n___",
      "correctLines": [
          "fn main() {",
          "    // collect で Vec に変換",
          "    let nums: Vec<i32> = (1..=5).collect();",
          "    println!(\"{:?}\", nums);",
          "}"
        ],
      "lineHints": [
          "main関数を定義します。",
          null,
          "変数nums: Vec<i32>に(1..=5).collect()でイテレータをVecに変換します。",
          "println!でnumsをデバッグ表示します。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "collect",
            "into",
            "to_vec"
          ],
          "others": ["main", "nums", "Vec", "i32", "1", "5", "println", "}"]
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
      "tutorialSlides": [
        {
          "title": "enumerate（イニュメレート）とは？",
          "content": "# 番号と要素を一緒にもらう\\n\\n**enumerate** は、「何番目か」と「その要素」をセットで取り出せるメソッドです。\\n\\n**たとえば：**\\n- 0番目: りんご\\n- 1番目: バナナ\\n- 2番目: みかん\\n\\n**コード例：**\\n```rust\\nfor (i, x) in vec![\"a\", \"b\", \"c\"].iter().enumerate() {\\n    println!(\"{}: {}\", i, x);\\n}\\n// 0: a\\n// 1: b\\n// 2: c\\n```"
        },
        {
          "title": "いつ使う？",
          "content": "# 「何番目か」が必要なとき\\n\\n番号（インデックス）と要素の両方が必要なときに便利です。\\n\\n**コード例：**\\n```rust\\nlet v = vec![10, 20, 30];\\nfor (idx, val) in v.iter().enumerate() {\\n    println!(\"{}番目の値は{}\", idx, val);\\n}\\n// 0番目の値は10\\n// 1番目の値は20\\n// 2番目の値は30\\n```\\n\\n**ポイント：**\\n- `(i, x)` でタプル（2つのセット）を受け取る\\n- `i` にインデックス、`x` に要素が入る\\n- インデックスは0から始まる"
        }
      ],
      "correctCode": "fn main() {\\n    let items = vec![\"a\", \"b\", \"c\"];\\n    // 1番目の i にインデックス、2番目の item に要素が入る\\n    for (i, item) in items.iter().enumerate() {\\n        println!(\"{}: {}\", i, item);\\n    }\\n}",
      "holeyCode": "fn ___() {\\n    let ___ = ___![\"___\", \"___\", \"___\"];\\n    // 1番目の i にインデックス、2番目の item に要素が入る\\n    for (___, ___) in ___.___().___() {\\n        ___!(\"{}: {}\", ___, ___);\\n    ___\\n___",
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
          "main関数を定義します。",
          "変数itemsにvec![\"a\", \"b\", \"c\"]でベクタを作成します。",
          null,
          "for (i, item) in items.iter().enumerate()でインデックス付きループします。",
          "println!でiとitemを表示します。",
          "forループブロックを閉じます。",
          "main関数ブロックを閉じます。"
        ],
        "candidates": {
          "methods": [
            "enumerate",
            "zip",
            "indexed",
            "iter"
          ],
          "others": ["main", "items", "vec", "a", "b", "c", "i", "item", "println", "}"]
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
