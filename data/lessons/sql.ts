export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL (エスキューエル) に挑戦！",
  "lessonDescription": "たくさんのデータがしまってある「倉庫（そうこ）」から、ほしいデータを取り出すための言葉「SQL（エスキューエル）」のきほんを学びましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "description": "SQLを使って、画面に「こんにちは」と表示させてみましょう。SELECT（セレクト）というキーワードを使います。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "SQL（エスキューエル）とは？",
          "image": "/illustrations/common/monitor.png",
          "content": "# データの倉庫から取り出す言葉\n\nSQLは、データベースという「情報の倉庫」に対して、「このデータをください！」と命令するための言葉です。Webアプリやスマホアプリの裏側で、情報を探すときに必ず使われます。"
        },
        {
          "title": "ほしいデータを選ぶ SELECT",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# SELECT（セレクト）\n\n「これを選んでください！」とお願いするときは `SELECT` と入力します。ただの文字を表示させたいときもこれを使います。\n\n```sql\nSELECT '表示したい文字';\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`SELECT` を使って `'Hello, World!'` と表示させてみましょう。さいごに `;`（セミコロン）を入力するのがルールです。\n\n**入力するコードのヒント：**\n```sql\nSELECT 'Hello, World!';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- SELECTでデータを取得\nSELECT 'Hello, World!';",
      "holeyCode": "-- SELECTでデータを取得\n___ 'Hello, World!';",
      "correctLines": [
        "-- 'Hello, World!'を表示",
        "SELECT 'Hello, World!';"
      ],
      "lineHints": [
        "ここはメモ（コメント）です。",
        "やりかたは「SELECT」です。"
      ],
      "candidates": {
        "functions": [
          "SELECT"
        ],
        "strings": [
          "'Hello, World!'"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Hello, World!\n"
        }
      ]
    },
    {
      "title": "データに名前をつけましょう",
      "description": "ASを使ってデータに別名（べつめい）をつけてみましょう。表示されるときに、わかりやすい名前がつきます。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "AS（アズ）で名前をつける",
          "image": "/illustrations/common/book.png",
          "content": "# 別名（エイリアス）\n\nデータに別の名前をつけたいときは `AS` を使います。これを「エイリアス」と呼びます。\n\n```sql\nSELECT '値' AS 名前;\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`'こんにちは'` という文字に `greeting` という名前をつけて表示してみましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 文字にgreetingという名前をつける\nSELECT 'こんにちは' AS greeting;",
      "holeyCode": "-- 文字にgreetingという名前をつける\nSELECT 'こんにちは' ___ ___;",
      "correctLines": [
        "-- 文字にgreetingという名前をつける",
        "SELECT 'こんにちは' AS greeting;"
      ],
      "lineHints": [
        null,
        "別名をつけるキーワードを入力しましょう。"
      ],
      "candidates": {
        "keywords": ["AS"],
        "variables": ["greeting", "message"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "こんにちは\n"
        }
      ]
    },
    {
      "title": "数字を足し算しましょう",
      "description": "SQLで計算もできます。数字を足し算して結果を表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "計算をしよう",
          "image": "/illustrations/3d_advanced/science.png",
          "content": "# 数字の計算\n\nSQLでは、数字の計算ができます。文字と違って、数字にはクォート `' '` をつけません。\n\n```sql\nSELECT 10 + 5;\n```\n\nこれで `15` が表示されます。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`100` と `50` を足し算して、結果に `total` という名前をつけて表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 100と50を足し算する\nSELECT 100 + 50 AS total;",
      "holeyCode": "-- 100と50を足し算する\nSELECT 100 ___ 50 AS total;",
      "correctLines": [
        "-- 100と50を足し算する",
        "SELECT 100 + 50 AS total;"
      ],
      "lineHints": [
        null,
        "足し算の記号を入力しましょう。"
      ],
      "candidates": {
        "operators": ["+", "-", "*", "/"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "150\n"
        }
      ]
    },
    {
      "title": "いくつもの値を表示しましょう",
      "description": "カンマで区切って、いくつもの値を同時に表示できます。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "カンマで区切る",
          "image": "/illustrations/common/pencil.png",
          "content": "# 複数の値を選ぶ\n\nいくつもの値を表示したいときは、カンマ `,` で区切ります。\n\n```sql\nSELECT '太郎', 10;\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n名前 `'Taro'` と年齢 `10` を、それぞれ `name` と `age` という名前をつけて表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 名前と年齢を表示\nSELECT 'Taro' AS name, 10 AS age;",
      "holeyCode": "-- 名前と年齢を表示\nSELECT 'Taro' AS name___ 10 AS age;",
      "correctLines": [
        "-- 名前と年齢を表示",
        "SELECT 'Taro' AS name, 10 AS age;"
      ],
      "lineHints": [
        null,
        "複数の値を区切る記号を入力しましょう。"
      ],
      "candidates": {
        "punctuation": [",", ";", ":"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Taro|10\n"
        }
      ]
    },
    {
      "title": "条件で絞り込みましょう",
      "description": "WHERE（ホエア）を使って、条件に合うデータだけを選びましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "WHERE（ホエア）で絞り込む",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件を指定する\n\n「〜なものだけ選んで！」と条件をつけたいときは `WHERE` を使います。\n\n```sql\nSELECT * FROM テーブル WHERE 条件;\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n数字が `10` より大きいかどうかをチェックして、その結果を表示してみましょう。`SELECT 1` で「はい」という意味になります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 10より大きいかチェック\nSELECT 1 WHERE 15 > 10;",
      "holeyCode": "-- 10より大きいかチェック\nSELECT 1 ___ 15 > 10;",
      "correctLines": [
        "-- 10より大きいかチェック",
        "SELECT 1 WHERE 15 > 10;"
      ],
      "lineHints": [
        null,
        "条件をつけるキーワードを入力しましょう。"
      ],
      "candidates": {
        "keywords": ["WHERE", "FROM", "AND"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "文字をつなげましょう",
      "description": "||（パイプ2つ）を使って、文字と文字をつなげてみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "文字の連結（れんけつ）",
          "image": "/illustrations/common/pencil.png",
          "content": "# 文字をつなげる\n\n2つの文字をくっつけたいときは `||` を使います。\n\n```sql\nSELECT 'Hello, ' || 'World!';\n```\n\nこれで `Hello, World!` になります。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`'SQL'` と `'は楽しい！'` をつなげて表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 文字をつなげる\nSELECT 'SQL' || 'は楽しい！';",
      "holeyCode": "-- 文字をつなげる\nSELECT 'SQL' ___ 'は楽しい！';",
      "correctLines": [
        "-- 文字をつなげる",
        "SELECT 'SQL' || 'は楽しい！';"
      ],
      "lineHints": [
        null,
        "文字をつなげる記号を入力しましょう。"
      ],
      "candidates": {
        "operators": ["||", "+", "&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "SQLは楽しい！\n"
        }
      ]
    },
    {
      "title": "大きい順に並べ替えましょう",
      "description": "ORDER BY（オーダーバイ）を使って、データを並べ替えましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ORDER BY（オーダーバイ）で並べ替え",
          "image": "/illustrations/common/book.png",
          "content": "# データの並べ替え\n\nデータを順番に並べたいときは `ORDER BY` を使います。\n\n- `ASC` : 小さい順（昇順・しょうじゅん）\n- `DESC` : 大きい順（降順・こうじゅん）"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n数字の `1` を選んで、降順（大きい順）で並べてみましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 降順で並べる\nSELECT 1 AS num ORDER BY num DESC;",
      "holeyCode": "-- 降順で並べる\nSELECT 1 AS num ___ ___ num DESC;",
      "correctLines": [
        "-- 降順で並べる",
        "SELECT 1 AS num ORDER BY num DESC;"
      ],
      "lineHints": [
        null,
        "並べ替えのキーワードを入力しましょう。"
      ],
      "candidates": {
        "keywords": ["ORDER", "BY", "GROUP", "HAVING"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "条件を組み合わせましょう",
      "description": "ANDやORを使って、複数の条件を組み合わせてみましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "AND と OR",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件を組み合わせる\n\n- `AND` : 両方の条件を満たすもの\n- `OR` : どちらかの条件を満たすもの\n\n```sql\nSELECT 1 WHERE 10 > 5 AND 20 > 15;\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`10 > 5` と `20 > 10` の両方が正しいかチェックしましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 両方の条件をチェック\nSELECT 1 WHERE 10 > 5 AND 20 > 10;",
      "holeyCode": "-- 両方の条件をチェック\nSELECT 1 WHERE 10 > 5 ___ 20 > 10;",
      "correctLines": [
        "-- 両方の条件をチェック",
        "SELECT 1 WHERE 10 > 5 AND 20 > 10;"
      ],
      "lineHints": [
        null,
        "「両方とも」という意味のキーワードを入力しましょう。"
      ],
      "candidates": {
        "keywords": ["AND", "OR", "NOT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    },
    {
      "title": "CASEで条件分岐しましょう",
      "description": "CASE文を使って、条件によって違う値を返してみましょう。",
      "difficulty": "medium",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "CASE文（ケースぶん）",
          "image": "/illustrations/3d_advanced/comprehension.png",
          "content": "# 条件によって変える\n\n`CASE` を使うと、「もし〜なら〇〇、そうでなければ△△」という処理ができます。\n\n```sql\nSELECT CASE WHEN 条件 THEN '結果1' ELSE '結果2' END;\n```"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`10 > 5` が正しければ `'大きい'`、そうでなければ `'小さい'` と表示しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 条件分岐\nSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;",
      "holeyCode": "-- 条件分岐\nSELECT ___ WHEN 10 > 5 ___ '大きい' ELSE '小さい' ___;",
      "correctLines": [
        "-- 条件分岐",
        "SELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;"
      ],
      "lineHints": [
        null,
        "CASE、THEN、ENDを入力しましょう。"
      ],
      "candidates": {
        "keywords": ["CASE", "THEN", "END", "WHEN", "ELSE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "大きい\n"
        }
      ]
    },
    {
      "title": "NULLをチェックしましょう",
      "description": "IS NULLを使って、データが空かどうかをチェックしましょう。",
      "difficulty": "medium",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "NULL（ヌル）とは？",
          "image": "/illustrations/common/book.png",
          "content": "# 空っぽの値\n\n`NULL` は「何もない」「わからない」という特別な値です。NULLかどうかは `= NULL` ではなく `IS NULL` でチェックします。"
        },
        {
          "title": "やってみましょう！",
          "image": "/illustrations/common/monitor.png",
          "content": "# 目標\n\n`NULL` がNULLかどうかをチェックして、NULLなら `1`、そうでなければ `0` を返しましょう。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- NULLチェック\nSELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;",
      "holeyCode": "-- NULLチェック\nSELECT CASE WHEN NULL ___ ___ THEN 1 ELSE 0 END;",
      "correctLines": [
        "-- NULLチェック",
        "SELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;"
      ],
      "lineHints": [
        null,
        "NULLかどうかをチェックするキーワードを入力しましょう。"
      ],
      "candidates": {
        "keywords": ["IS", "NULL", "NOT", "LIKE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n"
        }
      ]
    }
  ]
};
