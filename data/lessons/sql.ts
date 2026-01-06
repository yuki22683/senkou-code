export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL (エスキューエル) にちょうせん！",
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
          "title": "ほしいデータを選ぶ SELECT",
          "content": "# SELECT（セレクト）\n\n「これを選んでください！」とお願いするときは `SELECT` と入力します。ただの文字を表示させたいときもこれを使いますよ。\n\n```sql\nSELECT '表示したい文字';\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\n`SELECT` を使って `'Hello, World!'` と表示させてみましょう。さいごに `;`（セミコロン）を入力するのがルールです。\n\n**入力するコードのヒント：**\n```sql\nSELECT 'Hello, World!';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 'Hello, World!'を表示\nSELECT 'Hello, World!';",
      "holeyCode": "-- 'Hello, World!'を表示\n___ 'Hello, World!';",
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
      "title": "ぜんぶのデータを見ましょう",
      "description": "「users（ユーザーズ）」という名前の表から、すべてのデータを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "表から選ぶ FROM",
          "content": "# FROM（フロム）\n\nどこの表からデータを取るかを `FROM` で指定します。すべてを選びたいときは `*`（アスタリスク）を使いますよ。\n\n```sql\nSELECT * FROM 表の名前;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers という名前の表から、すべてのデータを取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT * FROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- usersテーブルの全データを取得\nSELECT * FROM users;",
      "holeyCode": "-- usersテーブルの全データを取得\nSELECT ___ FROM ___;",
      "correctLines": [
        "-- usersテーブルの全データを取得",
        "SELECT * FROM users;"
      ],
      "lineHints": [
        null,
        "全カラム指定は * 、テーブル（表）指定は FROM users です。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM"
        ],
        "variables": [
          "*",
          "users"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "id|name|age|country\n1|Alice|25|USA\n2|Bob|30|UK\n3|Charlie|20|Japan\n4|David|35|USA\n5|Eve|22|Japan\n"
        }
      ]
    },
    {
      "title": "名前だけを取り出しましょう",
      "description": "表の中から、特定の項目（名前など）だけを選んで取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "項目を指定します",
          "content": "# カンマで区切ります\n\n`SELECT` のあとに取り出したい項目の名前を入力します。複数を指定したいときは `,`（カンマ）でつなげますよ。\n\n```sql\nSELECT name, age FROM users;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表から name（名前）の項目だけを取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT name FROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- nameカラムのみ取得\nSELECT name FROM users;",
      "holeyCode": "-- nameカラムのみ取得\nSELECT ___ FROM users;",
      "correctLines": [
        "-- nameカラムのみ取得",
        "SELECT name FROM users;"
      ],
      "lineHints": [
        null,
        "取り出したい項目の名前 name を入力します。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM"
        ],
        "variables": [
          "name",
          "users"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "name\nAlice\nBob\nCharlie\nDavid\nEve\n"
        }
      ]
    },
    {
      "title": "条件で絞り込み（しぼりこみ）",
      "description": "年齢（age）が 25才以上の人だけを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "WHERE（ウェア）を使いましょう",
          "content": "# 特定のデータだけ選ぶ\n\n条件に合うデータだけを取り出すには `WHERE` を使います。数字のくらべかたは算数と同じですよ。\n\n```sql\nSELECT * FROM users WHERE age >= 20;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表から age が `25` 以上の人の全データを取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT * FROM users WHERE age >= 25;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- ageが25以上のデータを取得\nSELECT * FROM users WHERE age >= 25;",
      "holeyCode": "-- ageが25以上のデータを取得\nSELECT * FROM users ___ age >= 25;",
      "correctLines": [
        "-- ageが25以上のデータを取得",
        "SELECT * FROM users WHERE age >= 25;"
      ],
      "lineHints": [
        null,
        "条件を指定するために WHERE と入力します。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "WHERE"
        ],
        "variables": [
          "*",
          "users",
          "age"
        ],
        "operators": [
          ">="
        ],
        "numbers": [
          "25"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "id|name|age|country\n1|Alice|25|USA\n2|Bob|30|UK\n4|David|35|USA\n"
        }
      ]
    },
    {
      "title": "文字で絞り込みましょう",
      "description": "国（country）が 'Japan'（日本）の人だけを取り出してみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "文字は ' ' で囲みます",
          "content": "# 文字のくらべかた\n\n文字を条件にするときは、値を `' '`（シングルクォート）で囲むのがルールです。\n\n```sql\nSELECT * FROM users WHERE country = 'USA';\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表から country が `'Japan'` のデータを取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT * FROM users WHERE country = 'Japan';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- countryが'Japan'のデータを取得\nSELECT * FROM users WHERE country = 'Japan';",
      "holeyCode": "-- countryが'Japan'のデータを取得\nSELECT * FROM users WHERE country = '___';",
      "correctLines": [
        "-- countryが'Japan'のデータを取得",
        "SELECT * FROM users WHERE country = 'Japan';"
      ],
      "lineHints": [
        null,
        "文字の Japan を指定します。 ' ' で囲むのを忘れないでください。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "WHERE"
        ],
        "variables": [
          "*",
          "users",
          "country"
        ],
        "strings": [
          "Japan"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "id|name|age|country\n3|Charlie|20|Japan\n5|Eve|22|Japan\n"
        }
      ]
    },
    {
      "title": "2つの条件を組み合わせましょう",
      "description": "「20才以上」かつ「日本の人」という、2つの条件をどちらも満たす人を探してみましょう。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "AND（アンド）演算子",
          "content": "# 「どちらも」のとき\n\n`AND` を使うと、指定した条件をすべて満たすデータだけを取り出すことができます。\n\n```sql\nSELECT * FROM users WHERE age >= 20 AND country = 'Japan';\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nage が `20` 以上、かつ country が `'Japan'` の人を取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT * FROM users WHERE age >= 20 AND country = 'Japan';\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 20歳以上 かつ 日本のユーザー\nSELECT * FROM users WHERE age >= 20 AND country = 'Japan';",
      "holeyCode": "-- 20歳以上 かつ 日本のユーザー\nSELECT * FROM users WHERE age >= 20 ___ country = 'Japan';",
      "correctLines": [
        "-- 20歳以上 かつ 日本のユーザー",
        "SELECT * FROM users WHERE age >= 20 AND country = 'Japan';"
      ],
      "lineHints": [
        null,
        "「かつ」をあらわす AND を入力しましょう。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "WHERE",
          "AND"
        ],
        "variables": [
          "*",
          "users",
          "age",
          "country"
        ],
        "strings": [
          "Japan"
        ],
        "numbers": [
          "20"
        ],
        "operators": [
          ">="
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "id|name|age|country\n3|Charlie|20|Japan\n5|Eve|22|Japan\n"
        }
      ]
    },
    {
      "title": "きれいに並び替えましょう",
      "description": "取り出したデータを、年齢（age）の順に並び替えて表示してみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ORDER BY（オーダー・バイ）",
          "content": "# 順番を決めます\n\n`ORDER BY 項目名` と入力すると、データを並び替えることができます。何もしないと小さい順に並びますよ。\n\n```sql\nSELECT * FROM users ORDER BY age;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表のデータを age（年齢）の小さい順に並び替えて取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT * FROM users ORDER BY age;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 年齢の昇順で取得\nSELECT * FROM users ORDER BY age;",
      "holeyCode": "-- 年齢の昇順で取得\nSELECT * FROM users ___ ___ age;",
      "correctLines": [
        "-- 年齢の昇順で取得",
        "SELECT * FROM users ORDER BY age;"
      ],
      "lineHints": [
        null,
        "並び替えには ORDER BY と入力します。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "ORDER",
          "BY"
        ],
        "variables": [
          "*",
          "users",
          "age"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "id|name|age|country\n3|Charlie|20|Japan\n5|Eve|22|Japan\n1|Alice|25|USA\n2|Bob|30|UK\n4|David|35|USA\n"
        }
      ]
    },
    {
      "title": "数をしぼって取り出しましょう",
      "description": "データの数が多いとき、最初の3つだけを取り出す方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "LIMIT（リミット）",
          "content": "# 件数を制限します\n\n`LIMIT 数字` と入力すると、取り出すデータの最大数を決めることができます。\n\n```sql\nSELECT * FROM users LIMIT 5;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表から、最初の 3 つのデータだけを取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT * FROM users LIMIT 3;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 最初の3件を取得\nSELECT * FROM users LIMIT 3;",
      "holeyCode": "-- 最初の3件を取得\nSELECT * FROM users ___ 3;",
      "correctLines": [
        "-- 最初の3件を取得",
        "SELECT * FROM users LIMIT 3;"
      ],
      "lineHints": [
        null,
        "数をしぼるキーワードは LIMIT です。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "LIMIT"
        ],
        "variables": [
          "*",
          "users"
        ],
        "numbers": [
          "3"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "id|name|age|country\n1|Alice|25|USA\n2|Bob|30|UK\n3|Charlie|20|Japan\n"
        }
      ]
    },
    {
      "title": "ぜんぶで何個あるか数えましょう",
      "description": "表の中に、データがぜんぶで何行あるかを数えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "COUNT（カウント）関数",
          "content": "# 行数を数えます\n\n`COUNT(*)` を使うと、データの合計数を調べることができます。\n\n```sql\nSELECT COUNT(*) FROM users;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表にあるデータの合計数を数えて、表示させてみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT COUNT(*) FROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- データの総数をカウント\nSELECT COUNT(*) FROM users;",
      "holeyCode": "-- データの総数をカウント\nSELECT ___(*) FROM users;",
      "correctLines": [
        "-- データの総数をカウント",
        "SELECT COUNT(*) FROM users;"
      ],
      "lineHints": [
        null,
        "数を数える関数 COUNT を入力しましょう。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "COUNT"
        ],
        "variables": [
          "*",
          "users"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "5\n"
        }
      ]
    },
    {
      "title": "バラバラの種類を調べましょう",
      "description": "重複（じゅうふく）しているデータを取り除いて、どんな種類があるか調べましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "DISTINCT（ディスティンクト）",
          "content": "# 重なりを消します\n\n`SELECT DISTINCT 項目名` と入力すると、同じ内容のデータを1つにまとめて、ユニーク（唯一）な値だけを取り出せます。\n\n```sql\nSELECT DISTINCT country FROM users;\n```"
        },
        {
          "title": "やってみよう！",
          "content": "# 目標\n\nusers 表の country（国）項目から、重なりを除いた国のリストを取り出してみましょう。\n\n**入力するコードのヒント：**\n```sql\nSELECT DISTINCT country FROM users;\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 重複を除いた国名を取得\nSELECT DISTINCT country FROM users;",
      "holeyCode": "-- 重複を除いた国名を取得\nSELECT ___ country FROM users;",
      "correctLines": [
        "-- 重複を除いた国名を取得",
        "SELECT DISTINCT country FROM users;"
      ],
      "lineHints": [
        null,
        "重なりをのぞくキーワード DISTINCT を入力しましょう。"
      ],
      "candidates": {
        "functions": [
          "SELECT",
          "FROM",
          "DISTINCT"
        ],
        "variables": [
          "country",
          "users"
        ]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "country\nUSA\nUK\nJapan\n"
        }
      ]
    }
  ]
}