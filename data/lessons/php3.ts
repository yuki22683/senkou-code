export const php3Data = {
  "language": "php",
  "lessonId": "php-3",
  "lessonTitle": "PHP III - モダンPHPとクロージャ",
  "lessonDescription": "PHPの高度な機能を学びます。クロージャ、トレイト、ジェネレータなどモダンPHPの書き方を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "クロージャとアロー関数",
      "content": "PHPには2種類の無名関数があります。\\n\\n```php\\n// クロージャ（無名関数）\\n$double = function($x) {\\n    return $x * 2;\\n};\\n\\n// アロー関数（PHP 7.4+）\\n$triple = fn($x) => $x * 3;\\n\\necho $double(5);  // => 10\\necho $triple(5);  // => 15\\n```\\n\\n`fn` は短く書けますが、`return` は書けません。"
    },
    {
      "title": "match式",
      "content": "PHP 8.0+で使える `match` は `switch` より簡潔です。\\n\\n```php\\n$grade = 'A';\\n\\n$message = match($grade) {\\n    'A' => '優秀',\\n    'B' => '良い',\\n    default => 'もっと頑張って'\\n};\\n\\necho $message;  // => 優秀\\n```\\n\\n値を返せるので、変数に代入できます。"
    },
    {
      "title": "スプレッド演算子",
      "content": "`...` で配列を展開できます。\\n\\n```php\\n$a = [1, 2];\\n$b = [3, 4];\\n\\n$merged = [...$a, ...$b];\\n// => [1, 2, 3, 4]\\n\\n// 関数引数にも使える\\nfunction sum(...$nums) {\\n    return array_sum($nums);\\n}\\necho sum(1, 2, 3);  // => 6\\n```"
    },
    {
      "title": "名前付き引数",
      "content": "PHP 8.0+では引数名を指定して呼び出せます。\\n\\n```php\\nfunction createUser($name, $age) {\\n    return ['名前' => $name, '年齢' => $age];\\n}\\n\\n// 順番を変えてもOK\\n$user = createUser(age: 30, name: 'アリス');\\n```\\n\\n引数の順番に依存しないので、可読性が向上します。"
    },
    {
      "title": "トレイト",
      "content": "`trait` で複数のクラスに共通の機能を追加できます。\\n\\n```php\\ntrait HelloTrait {\\n    public function sayHello() {\\n        return 'こんにちは！';\\n    }\\n}\\n\\nclass Greeter {\\n    use HelloTrait;\\n}\\n\\n$g = new Greeter();\\necho $g->sayHello();  // => こんにちは！\\n```\\n\\nPHPは単一継承ですが、トレイトで機能を共有できます。"
    },
    {
      "title": "ジェネレータ",
      "content": "`yield` で値を1つずつ返すジェネレータを作れます。\\n\\n```php\\nfunction rangeGen($n) {\\n    for ($i = 1; $i <= $n; $i++) {\\n        yield $i;\\n    }\\n}\\n\\nforeach (rangeGen(3) as $num) {\\n    echo $num;  // => 1, 2, 3\\n}\\n```\\n\\n全データをメモリに保持せず、効率的に処理できます。"
    }
  ],
  "exercises": [
    {
      "title": "クロージャ（無名関数）",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
              {
                      "title": "クロージャとは",
                      "content": "# 名前のない関数\\n\\nクロージャは変数に代入できる関数です。\\n\\n```php\\n$add = function($a, $b) {\\n    return $a + $b;\\n};\\necho $add(3, 5);  // 8\\n```"
              },
              {
                      "title": "use で変数を取り込む",
                      "content": "# 外の変数を使う\\n\\n```php\\n$x = 10;\\n$fn = function($y) use ($x) {\\n    return $x + $y;\\n};\\necho $fn(5);  // 15\\n```\\n\\nuseで外の変数を取り込めます。"
              }
      ],
      "correctCode": "// functionで無名関数を定義\\n$doubler = function($x) {\\n    // *で乗算\\n    return $x * 2;\\n};",
      "holeyCode": "// functionで無名関数を定義\\n$___ = ___(___) {\\n    // *で乗算\\n    return $___ ___ ___;\\n___",
      "correctLines": [
          "// functionで無名関数を定義",
          "$doubler = function($x) {",
          "    // *で乗算",
          "    return $x * 2;",
          "};"
        ],
      "lineHints": [
          null,
          "無名関数を定義するキーワードです。",
          null,
          "2倍にする演算子です。",
          "関数定義の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "fn",
            "lambda",
            "closure",
            "return"
          ],
          "operators": [
            "*",
            "+",
            "/",
            "**"
          ],
          "others": ["doubler", "$x", "x", "2", "};"]
        },
        "testCases": [
          {
            "input": "$doubler(5)",
            "expected_output": "10"
          }
        ]
      },
    {
      "title": "アロー関数",
      "description": "処理をまとめて再利用できる「関数」の作り方を学びます",
      "tutorialSlides": [
        {
          "title": "アロー関数（かんすう）とは？",
          "content": "# もっと短く書けるクロージャ\\n\\n**アロー関数** は、クロージャ（無名関数）を **とても短く書く** 方法です。PHP 7.4から使えます。\\n\\n**身近（みぢか）な例（れい）：**\\n- 長いメモを一言にまとめる\\n- 「5を足す」→ `fn($x) => $x + 5`\\n- 短くてスッキリ！\\n\\n**クロージャとの違（ちが）い：**\\n```php\\n// クロージャ（長い）\\n$add = function($x) { return $x + 5; };\\n\\n// アロー関数（短い）\\n$add = fn($x) => $x + 5;\\n```"
        },
        {
          "title": "アロー関数の書き方",
          "content": "# fn と =>（矢印）\\n\\n`fn(引数) => 式` の形で書きます。\\n\\n**コード例：**\\n```php\\n$add = fn($a, $b) => $a + $b;\\necho $add(3, 4);  // 7\\n```\\n\\n**何をしているの？**\\n1. `fn($a, $b)` → 引数（ひきすう）を2つ受け取る\\n2. `=> $a + $b` → 矢印の右側が戻り値（もどりち）\\n3. return は書かなくてOK\\n\\n**ポイント：**\\n- `fn` = function の短縮形（たんしゅくけい）\\n- `=>` = 「結果（けっか）はこれ」という矢印\\n- 1行で書ける処理向け\\n- 外の変数を自動で使える（クロージャとの大きな違い）"
        }
      ],
      "correctCode": "// fnでアロー関数、=>で式を記述\\n$cube = fn($x) => $x ** 3;",
      "holeyCode": "// fnでアロー関数、=>で式を記述\\n$___ = ___(___) ___ $___ ___ ___;",
      "correctLines": [
          "// fnでアロー関数、=>で式を記述",
          "$cube = fn($x) => $x ** 3;"
        ],
      "lineHints": [
          null,
          "fnでアロー関数を定義し、=>で式を記述します。"
        ],
        "candidates": {
          "keywords": [
            "fn",
            "function",
            "lambda"
          ],
          "operators": [
            "=>",
            "->",
            "**",
            "*"
          ],
          "others": ["cube", "$x", "x", "3"]
        },
        "testCases": [
          {
            "input": "$cube(3)",
            "expected_output": "27"
          }
        ]
      },
    {
      "title": "Null合体演算子",
      "description": "Null合体演算子の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "Null合体演算子（がったいえんざんし）とは？",
          "content": "# null のときの予備（よび）\\n\\n**??**（Null合体演算子）は、左側が `null`（空っぽ）のとき **右側の値を使う** 演算子（えんざんし）です。\\n\\n**身近（みぢか）な例（れい）：**\\n- ニックネームがなければ本名を使う\\n- 予備の電池（でんち）を用意しておく\\n- 「Aがなければ、Bを使う」\\n\\n**なぜ便利（べんり）？**\\n- ユーザーが入力しなかったとき → デフォルト値を使う\\n- データがないとき → 初期値（しょきち）を使う\\n- エラーを防（ふせ）げる"
        },
        {
          "title": "?? の使い方",
          "content": "# シンプルな null チェック\\n\\n`$a ?? $b` は、`$a` が null なら `$b` を返します。\\n\\n**コード例：**\\n```php\\n$name = null;\\n$displayName = $name ?? 'Anonymous';\\necho $displayName;  // Anonymous\\n```\\n\\n**何をしているの？**\\n1. `$name = null` → 名前は空っぽ\\n2. `$name ?? 'Anonymous'` → nullかチェック\\n3. null なので → 'Anonymous' を返す\\n\\n**値があるときは？**\\n```php\\n$name = 'Taro';\\necho $name ?? 'Anonymous';  // Taro（nullじゃないので$nameを使う）\\n```\\n\\n**ポイント：**\\n- 左が null → 右を返す\\n- 左が null じゃない → 左をそのまま返す"
        }
      ],
      "correctCode": "// nullを代入\\n$name = null;\\n// ??でNull合体演算子\\n$result = $name ?? 'ゲスト';",
      "holeyCode": "// nullを代入\\n$___ = ___;\\n// ??でNull合体演算子\\n$___ = $___ ___ '___';",
      "correctLines": [
          "// nullを代入",
          "$name = null;",
          "// ??でNull合体演算子",
          "$result = $name ?? 'ゲスト';"
        ],
      "lineHints": [
          null,
          "nullを代入する変数名です。",
          null,
          "??はNull合体演算子で、左辺がnullの場合に右辺を返します。"
        ],
        "candidates": {
          "keywords": [
            "null"
          ],
          "operators": [
            "??",
            "?:",
            "||",
            "&&"
          ],
          "others": ["name", "result", "ゲスト"]
        },
        "testCases": [
          {
            "input": "$result",
            "expected_output": "ゲスト"
          }
        ]
      },
    {
      "title": "スプレッド演算子",
      "description": "スプレッド演算子の仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "スプレッド演算子（えんざんし）とは？",
          "content": "# 配列（はいれつ）を広げる\\n\\n**スプレッド演算子** `...` は、配列の中身（なかみ）を **バラバラに広げる** 機能です。\\n\\n**身近（みぢか）な例（れい）：**\\n- お菓子（かし）の袋（ふくろ）を開けて中身を出す\\n- 2つの袋のお菓子を1つのお皿（さら）に広げる\\n- [あめ、ガム] と [チョコ、クッキー] → [あめ、ガム、チョコ、クッキー]\\n\\n**なぜ便利（べんり）？**\\n- 複数（ふくすう）の配列を簡単（かんたん）に合体できる\\n- 配列のコピーが簡単に作れる"
        },
        {
          "title": "... の使い方",
          "content": "# 配列を展開（てんかい）して合体\\n\\n`...配列` で中身を広げます。\\n\\n**コード例：**\\n```php\\n$arr1 = [1, 2];\\n$arr2 = [3, 4];\\n$merged = [...$arr1, ...$arr2];\\n// [1, 2, 3, 4]\\n```\\n\\n**何をしているの？**\\n1. `$arr1 = [1, 2]` → 最初（さいしょ）の配列\\n2. `$arr2 = [3, 4]` → 2番目の配列\\n3. `...$arr1` → [1, 2] を 1, 2 にバラす\\n4. `...$arr2` → [3, 4] を 3, 4 にバラす\\n5. 全部まとめて新しい配列 [1, 2, 3, 4] に\\n\\n**ポイント：**\\n- `...` = 「中身をバラバラにする」\\n- 複数の配列を1つにまとめられる\\n- 元の配列は変わらない（新しい配列ができる）"
        }
      ],
      "correctCode": "// ...で配列を展開\\n$merged = [...[1, 2], ...[3, 4]];",
      "holeyCode": "// ...で配列を展開\\n$___ = [___[___, ___], ___[___, ___]];",
      "correctLines": [
          "// ...で配列を展開",
          "$merged = [...[1, 2], ...[3, 4]];"
        ],
      "lineHints": [
          null,
          "...で配列を展開し、複数の配列を1つにマージします。"
        ],
        "candidates": {
          "operators": [
            "...",
            "**",
            "&&",
            "::"
          ],
          "others": ["merged", "1", "2", "3", "4"]
        },
        "testCases": [
          {
            "input": "$merged",
            "expected_output": "Array\\n(\\n    [0] => 1\\n    [1] => 2\\n    [2] => 3\\n    [3] => 4\\n)\\n"
          }
        ]
      },
    {
      "title": "match式",
      "description": "match式の仕組みと使い方を学びます",
      "tutorialSlides": [
              {
                      "title": "match式とは",
                      "content": "# 値を比較して返す\\n\\nmatch式は条件に応じた値を返します。\\n\\n```php\\n$result = match($x) {\\n    1 => \"一\",\\n    2 => \"二\",\\n    default => \"その他\"\\n};\\n```"
              },
              {
                      "title": "switchとの違い",
                      "content": "# match は値を返す\\n\\n```php\\n$grade = match(true) {\\n    $score >= 90 => \"A\",\\n    $score >= 80 => \"B\",\\n    default => \"C\"\\n};\\n```\\n\\nbreakが不要で、値を直接返せます。"
              }
      ],
      "correctCode": "// $gradeに'A'を代入\\n$grade = 'A';\\n// match($grade)で$messageに結果を代入\\n$message = match($grade) {\\n    // 'A'なら'優秀'を返す\\n    'A' => '優秀',\\n    // 'B'なら'良い'を返す\\n    'B' => '良い',\\n    // それ以外なら'もっと頑張って'を返す\\n    default => 'もっと頑張って'\\n};",
      "holeyCode": "// $gradeに'A'を代入\\n$___ = '___';\\n// match($grade)で$messageに結果を代入\\n$___ = ___(___) {\\n    // 'A'なら'優秀'を返す\\n    '___' ___ '___',\\n    // 'B'なら'良い'を返す\\n    '___' ___ '___',\\n    // それ以外なら'もっと頑張って'を返す\\n    ___ ___ '___'\\n___",
      "correctLines": [
          "// $gradeに'A'を代入",
          "$grade = 'A';",
          "// match($grade)で$messageに結果を代入",
          "$message = match($grade) {",
          "    // 'A'なら'優秀'を返す",
          "    'A' => '優秀',",
          "    // 'B'なら'良い'を返す",
          "    'B' => '良い',",
          "    // それ以外なら'もっと頑張って'を返す",
          "    default => 'もっと頑張って'",
          "};"
        ],
      "lineHints": [
          null,
          "変数gradeに評定'A'を代入します。",
          null,
          "match式で$gradeの値に応じた結果を$messageに代入します。",
          null,
          "'A'の場合に'優秀'を返します。=>で値をマッピングします。",
          null,
          "'B'の場合に'良い'を返します。",
          null,
          "defaultはそれ以外の全てのケースにマッチします。",
          "match式の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "match",
            "switch",
            "case",
            "when",
            "default",
            "else"
          ],
          "operators": [
            "=>"
          ],
          "others": ["grade", "message", "$grade", "A", "B", "優秀", "良い", "もっと頑張って", "};"]
        },
        "testCases": [
          {
            "input": "$message",
            "expected_output": "優秀"
          }
        ]
      },
    {
      "title": "名前付き引数",
      "description": "名前付き引数について学びます",
      "tutorialSlides": [
        {
          "title": "名前付（なまえつ）き引数（ひきすう）とは？",
          "content": "# 引数に名前をつけて渡（わた）す\\n\\n**名前付き引数** は、「この値はこの引数に入れてね」と **名前を指定（してい）** して渡す機能です。PHP 8.0から使えます。\\n\\n**身近（みぢか）な例（れい）：**\\n- 注文書（ちゅうもんしょ）に「名前：○○」「住所：○○」と書く\\n- 順番（じゅんばん）を気にしなくていい\\n- 何を渡しているかが分かりやすい\\n\\n**なぜ便利（べんり）？**\\n- 引数の順番を覚（おぼ）えなくていい\\n- コードが読みやすくなる\\n- 必要な引数だけ指定できる"
        },
        {
          "title": "名前付き引数の書き方",
          "content": "# 引数名: 値 の形式（けいしき）\\n\\n`関数(引数名: 値)` で指定します。\\n\\n**コード例：**\\n```php\\nfunction greet($name, $greeting) {\\n    return \"$greeting, $name!\";\\n}\\necho greet(greeting: 'Hi', name: 'Alice');\\n// Hi, Alice!\\n```\\n\\n**何をしているの？**\\n1. `greet($name, $greeting)` → 普通は name, greeting の順\\n2. `greeting: 'Hi'` → greetingに'Hi'を入れる\\n3. `name: 'Alice'` → nameに'Alice'を入れる\\n4. 順番が逆（ぎゃく）でもOK！名前で指定してるから\\n\\n**ポイント：**\\n- `引数名:` と値をセットで書く\\n- 順番を気にしなくていい\\n- 何を渡しているか一目瞭然（いちもくりょうぜん）"
        }
      ],
      "correctCode": "// functionで関数を定義\\nfunction createUser($name, $age) {\\n    // returnで連想配列を返す\\n    return ['名前' => $name, '年齢' => $age];\\n}\\n// age, nameの順で名前付き引数を指定\\n$user = createUser(age: 30, name: 'アリス');",
      "holeyCode": "// functionで関数を定義\\n___ ___(___) {\\n    // returnで連想配列を返す\\n    ___ ['___' ___ $___, '___' ___ $___];\\n___\\n// age, nameの順で名前付き引数を指定\\n$___ = ___(___: ___, ___: '___');",
      "correctLines": [
          "// functionで関数を定義",
          "function createUser($name, $age) {",
          "    // returnで連想配列を返す",
          "    return ['名前' => $name, '年齢' => $age];",
          "}",
          "// age, nameの順で名前付き引数を指定",
          "$user = createUser(age: 30, name: 'アリス');"
        ],
      "lineHints": [
          null,
          "functionで関数を定義し、$nameと$ageを引数に取ります。",
          null,
          "連想配列を返します。=>でキーと値を対応付けます。",
          "関数定義の閉じ括弧です。",
          null,
          "名前付き引数でage:とname:の順で関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "return"
          ],
          "operators": [
            "=>"
          ],
          "others": ["createUser", "$name, $age", "名前", "name", "年齢", "age", "user", "30", "アリス", "}"]
        },
        "testCases": [
          {
            "input": "$user['名前']",
            "expected_output": "アリス"
          }
        ]
      },
    {
      "title": "トレイト",
      "description": "トレイトについて学びます",
      "tutorialSlides": [
        {
          "title": "トレイトとは？",
          "content": "# コードの共有（きょうゆう）パーツ\\n\\n**トレイト** は、複数（ふくすう）のクラスで **同じメソッドを共有** する仕組（しく）みです。\\n\\n**身近（みぢか）な例（れい）：**\\n- レゴブロックのパーツ\\n- 「車輪（しゃりん）パーツ」を車にもバスにもつけられる\\n- 同じ機能を色んなクラスで使い回（まわ）せる\\n\\n**継承（けいしょう）との違（ちが）い：**\\n- 継承：1つの親からしか機能をもらえない\\n- トレイト：複数のトレイトを組み合わせられる\\n- 「いいとこ取り」ができる！"
        },
        {
          "title": "トレイトの書き方",
          "content": "# trait と use\\n\\n`trait` で定義（ていぎ）し、`use` でクラスに組み込（こ）みます。\\n\\n**コード例：**\\n```php\\ntrait Greetable {\\n    public function greet() {\\n        return 'Hello!';\\n    }\\n}\\n\\nclass Person {\\n    use Greetable;\\n}\\n```\\n\\n**何をしているの？**\\n1. `trait Greetable` → 「Greetable」という名前のトレイトを作る\\n2. `public function greet()` → greetメソッドを定義\\n3. `use Greetable;` → Personクラスにトレイトを組み込む\\n4. PersonでもgreetメソッドがつかえるようになU！\\n\\n**ポイント：**\\n- `trait` = 共有パーツの定義\\n- `use` = そのパーツを使う宣言（せんげん）\\n- 複数のトレイトを `use` できる"
        }
      ],
      "correctCode": "// traitでトレイトを定義\\ntrait HelloTrait {\\n    // functionでメソッドを定義\\n    public function sayHello() {\\n        // 'こんにちは！'を返す\\n        return 'こんにちは！';\\n    }\\n}\\n// classでクラスを定義\\nclass Greeter {\\n    // useでトレイトを使用\\n    use HelloTrait;\\n}",
      "holeyCode": "// traitでトレイトを定義\\n___ ___ {\\n    // functionでメソッドを定義\\n    ___ ___ ___() {\\n        // 'こんにちは！'を返す\\n        ___ '___';\\n    ___\\n___\\n// classでクラスを定義\\n___ ___ {\\n    // useでトレイトを使用\\n    ___ ___;\\n___",
      "correctLines": [
          "// traitでトレイトを定義",
          "trait HelloTrait {",
          "    // functionでメソッドを定義",
          "    public function sayHello() {",
          "        // 'こんにちは！'を返す",
          "        return 'こんにちは！';",
          "    }",
          "}",
          "// classでクラスを定義",
          "class Greeter {",
          "    // useでトレイトを使用",
          "    use HelloTrait;",
          "}"
        ],
      "lineHints": [
          null,
          "traitでトレイトHelloTraitを定義します。",
          null,
          "publicアクセス修飾子でsayHelloメソッドを定義します。",
          null,
          "returnで'こんにちは！'を返します。",
          "メソッドの閉じ括弧です。",
          "トレイトの閉じ括弧です。",
          null,
          "classでGreeterクラスを定義します。",
          null,
          "useでHelloTraitトレイトを使用します。",
          "クラスの閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "trait",
            "interface",
            "abstract",
            "mixin",
            "use",
            "include",
            "import",
            "extend",
            "class",
            "function",
            "return",
            "public",
            "private",
            "protected"
          ],
          "others": ["HelloTrait", "sayHello", "Greeter", "こんにちは！", "}", "}"]
        },
        "testCases": [
          {
            "input": "(new Greeter())->sayHello()",
            "expected_output": "こんにちは！"
          }
        ]
      },
    {
      "title": "ジェネレータ",
      "description": "メモリを節約しながら値を順番に生成する仕組みを学びます",
      "tutorialSlides": [
        {
          "title": "ジェネレータとは？",
          "content": "# 値を1つずつ出す関数（かんすう）\\n\\n**ジェネレータ** は、値を **一度に全部ではなく1つずつ** 生成（せいせい）する特別（とくべつ）な関数です。\\n\\n**身近（みぢか）な例（れい）：**\\n- ガチャガチャ（カプセルトイ）のマシン\\n- ハンドルを回すたびに1つずつカプセルが出てくる\\n- 全部を一度に出さない → メモリを節約（せつやく）できる\\n\\n**なぜ便利（べんり）？**\\n- 100万個のデータも、1つずつ処理（しょり）すればメモリを使いすぎない\\n- 大きなファイルを1行ずつ読むときに便利\\n- 無限（むげん）に続く値も扱（あつか）える"
        },
        {
          "title": "yield の使い方",
          "content": "# yield で値を1つずつ返す\\n\\n`yield` を使うと、その関数はジェネレータになります。\\n\\n**コード例：**\\n```php\\nfunction countTo($n) {\\n    for ($i = 1; $i <= $n; $i++) {\\n        yield $i;\\n    }\\n}\\n```\\n\\n**何をしているの？**\\n1. `countTo(3)` を呼ぶ\\n2. 1回目: `yield 1` → 1を返して一時停止（ていし）\\n3. 2回目: `yield 2` → 2を返して一時停止\\n4. 3回目: `yield 3` → 3を返して一時停止\\n5. 終わり\\n\\n**returnとの違（ちが）い：**\\n- return: 値を返したら終わり\\n- yield: 値を返しても、続きから再開（さいかい）できる\\n\\n**ポイント：**\\n- yield = 「一時的（いちじてき）に値を渡（わた）す」\\n- foreach で1つずつ取り出せる"
        }
      ],
      "correctCode": "// functionで関数を定義\\nfunction rangeGen($n) {\\n    // forでループ\\n    for ($i = 1; $i <= $n; $i++) {\\n        // yieldで値を一つずつ返す\\n        yield $i;\\n    }\\n}",
      "holeyCode": "// functionで関数を定義\\n___ ___(___) {\\n    // forでループ\\n    ___ ($___ = ___; $___ ___ $___; $___++) {\\n        // yieldで値を一つずつ返す\\n        ___ $___;\\n    ___\\n___",
      "correctLines": [
          "// functionで関数を定義",
          "function rangeGen($n) {",
          "    // forでループ",
          "    for ($i = 1; $i <= $n; $i++) {",
          "        // yieldで値を一つずつ返す",
          "        yield $i;",
          "    }",
          "}"
        ],
      "lineHints": [
          null,
          "functionでrangeGen関数を定義し、$nを引数に取ります。",
          null,
          "forループで$iを1から$nまで繰り返します。",
          null,
          "yieldで$iを一つずつ返します。",
          "forループの閉じ括弧です。",
          "関数の閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "function",
            "for",
            "yield",
            "return",
            "emit",
            "output"
          ],
          "operators": [
            "<=",
            "<",
            ">=",
            ">"
          ],
          "others": ["rangeGen", "$n", "i", "n", "1", "}", "}"]
        },
        "testCases": [
          {
            "input": "iterator_to_array(rangeGen(5))",
            "expected_output": "Array\\n(\\n    [0] => 1\\n    [1] => 2\\n    [2] => 3\\n    [3] => 4\\n    [4] => 5\\n)\\n"
          }
        ]
      },
    {
      "title": "配列の分割代入",
      "description": "複数のデータをまとめて扱う「配列」の使い方を学びます",
      "tutorialSlides": [
        {
          "title": "分割代入（ぶんかつだいにゅう）とは？",
          "content": "# 配列をバラして変数に入れる\\n\\n**分割代入** は、配列の中身を **一度に複数（ふくすう）の変数に入れる** 機能です。\\n\\n**身近（みぢか）な例（れい）：**\\n- プレゼントの箱を開けて、中身を別々の場所に置（お）く\\n- [名前、年齢、住所] → 名前変数、年齢変数、住所変数に分ける\\n- 1個ずつ取り出すより早い！\\n\\n**なぜ便利（べんり）？**\\n- 1行で複数の変数に代入できる\\n- コードがスッキリする\\n- 関数から複数の値を受け取るときに便利"
        },
        {
          "title": "分割代入の書き方",
          "content": "# [ ] で変数を並（なら）べる\\n\\n`[$a, $b, $c] = 配列;` の形で書きます。\\n\\n**コード例：**\\n```php\\n$arr = [1, 2, 3];\\n[$a, $b, $c] = $arr;\\necho $a;  // 1\\necho $b;  // 2\\necho $c;  // 3\\n```\\n\\n**何をしているの？**\\n1. `$arr = [1, 2, 3]` → 配列を用意\\n2. `[$a, $b, $c] = $arr` → 順番（じゅんばん）に変数へ入れる\\n3. `$a` に 1、`$b` に 2、`$c` に 3 が入る\\n\\n**普通（ふつう）の書き方との比較（ひかく）：**\\n```php\\n// 普通（長い）\\n$a = $arr[0];\\n$b = $arr[1];\\n$c = $arr[2];\\n\\n// 分割代入（短い）\\n[$a, $b, $c] = $arr;\\n```\\n\\n**ポイント：**\\n- 左側の変数の数と配列の要素数を合わせる\\n- 順番通りに代入される"
        }
      ],
      "correctCode": "// name、age、cityの順に分割代入\\n[$name, $age, $city] = ['アリス', 25, '東京'];",
      "holeyCode": "// name、age、cityの順に分割代入\\n[$___, $___, $___] = ['___', ___, '___'];",
      "correctLines": [
          "// name、age、cityの順に分割代入",
          "[$name, $age, $city] = ['アリス', 25, '東京'];"
        ],
      "lineHints": [
          null,
          "左辺に$name, $age, $city、右辺に'アリス', 25, '東京'を配置します。"
        ],
        "candidates": {
          "variables": [
            "name",
            "age",
            "city",
            "value"
          ],
          "others": ["アリス", "25", "東京"]
        },
        "testCases": [
          {
            "input": "$name",
            "expected_output": "アリス"
          },
          {
            "input": "$age",
            "expected_output": "25"
          }
        ]
      },
    {
      "title": "コンストラクタプロパティ昇格",
      "description": "コンストラクタプロパティ昇格について学びます",
      "tutorialSlides": [
        {
          "title": "プロパティ昇格（しょうかく）とは？",
          "content": "# プロパティの定義が短くなる魔法（まほう）\\n\\n**コンストラクタプロパティ昇格** は、コンストラクタの引数でプロパティを **一度に定義** できる機能です。PHP 8.0から使えます。\\n\\n**身近（みぢか）な例（れい）：**\\n- 引っ越（こ）しの荷物（にもつ）を「開けながら棚（たな）に置く」\\n- 普通：箱を開ける → 取り出す → 棚に置く（3ステップ）\\n- 昇格：開けながら棚に置く（1ステップ）\\n\\n**なぜ便利（べんり）？**\\n- コードが短くなる\\n- プロパティの宣言と初期化が1箇所（かしょ）で完結（かんけつ）\\n- 書き忘（わす）れがなくなる"
        },
        {
          "title": "プロパティ昇格の書き方",
          "content": "# コンストラクタの引数にアクセス修飾子（しゅうしょくし）\\n\\n引数の前に `public` などをつけると、自動でプロパティになります。\\n\\n**コード例：**\\n```php\\nclass Person {\\n    public function __construct(\\n        public string $name,\\n        public int $age\\n    ) {}\\n}\\n```\\n\\n**普通の書き方との比較（ひかく）：**\\n```php\\n// 普通（長い）\\nclass Person {\\n    public string $name;\\n    public int $age;\\n    public function __construct($name, $age) {\\n        $this->name = $name;\\n        $this->age = $age;\\n    }\\n}\\n\\n// 昇格（短い）- 上のコード例と同じ動き！\\n```\\n\\n**ポイント：**\\n- 引数に `public`、`private`、`protected` をつける\\n- それだけでプロパティの宣言と代入が完了\\n- コンストラクタの中身が `{}` だけでOK"
        }
      ],
      "correctCode": "// classでクラスを定義\\nclass Person {\\n    // __constructでコンストラクタを定義\\n    public function __construct(\\n        // publicでアクセス修飾子\\n        public string $name,\\n        // publicでアクセス修飾子\\n        public int $age\\n    ) {}\\n}",
      "holeyCode": "// classでクラスを定義\\n___ ___ {\\n    // __constructでコンストラクタを定義\\n    ___ ___ ___(\\n        // publicでアクセス修飾子\\n        ___ ___ $___,\\n        // publicでアクセス修飾子\\n        ___ ___ $___\\n    ) ___\\n___",
      "correctLines": [
          "// classでクラスを定義",
          "class Person {",
          "    // __constructでコンストラクタを定義",
          "    public function __construct(",
          "        // publicでアクセス修飾子",
          "        public string $name,",
          "        // publicでアクセス修飾子",
          "        public int $age",
          "    ) {}",
          "}"
        ],
      "lineHints": [
          null,
          "classでPersonクラスを定義します。",
          null,
          "publicでfunction __constructを定義します。",
          null,
          "public string型で$nameプロパティを昇格します。",
          null,
          "public int型で$ageプロパティを昇格します。",
          "コンストラクタの閉じ括弧と空のボディです。",
          "クラスの閉じ括弧です。"
        ],
        "candidates": {
          "keywords": [
            "class",
            "__construct",
            "public",
            "private",
            "protected",
            "readonly",
            "function",
            "string",
            "int"
          ],
          "others": ["Person", "name", "age", "{}", "}"]
        },
        "testCases": [
          {
            "input": "(new Person('アリス', 30))->name",
            "expected_output": "アリス"
          }
        ]
      }
  ]
};
