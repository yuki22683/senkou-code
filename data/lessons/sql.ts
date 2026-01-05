export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL I",
  "lessonDescription": "データベースを操作するための言語SQLの基礎を学びます。データの取得、条件指定、並び替えなどの基本的な操作を習得しましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "exercises": [
    {
      "title": "Hello World",
      "description": "SQLで文字列を表示してみましょう。SELECT文を使って'Hello, World!'という文字を取得（表示）します。",
      "difficulty": "easy",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "データの取得",
          "content": "# SELECT文\n\nデータベースからデータを取り出すには `SELECT` を使います。\n単純な文字列を表示する場合も `SELECT` を使用します。\n\n```sql\nSELECT '表示したい文字';\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\n`SELECT` を使って `'Hello, World!'` と出力してみましょう。\n末尾のセミコロン ; も忘れずに。\n\n**コード例：**\n```sql\nSELECT 'Hello, World!';\n```"
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
        null,
        "命令は「SELECT」です。"
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
      "title": "全てのカラムを取得",
      "description": "usersテーブルから全てのデータを取得してみましょう。",
      "difficulty": "easy",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "テーブルからの取得",
          "content": "# FROM句\n\nどこのテーブルからデータを取るかを `FROM` で指定します。\n全てのカラム（列）を取得するにはアスタリスク * を使います。\n\n```sql\nSELECT * FROM テーブル名;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルから全てのデータを取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users;\n```"
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
        "全カラム指定は * 、テーブル指定は FROM users です。"
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
      "title": "特定のカラムを取得",
      "description": "全てのデータではなく、特定のカラム（列）だけを選んで取得する方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "カラムの指定",
          "content": "# カラム名を指定\n\n`SELECT` の後に取得したいカラム名をカンマ区切りで記述します。\n\n```sql\nSELECT name, age FROM users;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルから name カラムだけを取得してみましょう。\n\n**コード例：**\n```sql\nSELECT name FROM users;\n```"
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
        "取得したいカラム名 name を記述します。"
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
      "title": "条件を指定して取得 (数値)",
      "description": "usersテーブルから、年齢(age)が25以上のユーザーの情報を取得してみましょう。",
      "difficulty": "easy",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "条件指定",
          "content": "# WHERE句\n\n特定の条件に合うデータだけを取得するには `WHERE` を使います。\n数値の比較には >, <, >=, <=, = などが使えます。\n\n```sql\nSELECT * FROM users WHERE age >= 20;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルから age が `25` 以上のユーザーの全カラムを取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users WHERE age >= 25;\n```"
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
        "条件を指定するために WHERE を使います。"
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
      "title": "条件を指定して取得 (文字列)",
      "description": "usersテーブルから、国(country)が 'Japan' のユーザーを取得してみましょう。",
      "difficulty": "easy",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "文字列の比較",
          "content": "# シングルクォートで囲む\n\n文字列を条件にする場合は、値をシングルクォート ' で囲みます。\n\n```sql\nSELECT * FROM users WHERE country = 'USA';\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルから country が `'Japan'` のデータを取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users WHERE country = 'Japan';\n```"
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
        "文字列 Japan を指定します。シングルクォートを忘れずに。"
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
      "title": "複数の条件 (AND)",
      "description": "複数の条件を組み合わせてみましょう。年齢が20歳以上、かつ国が'Japan'のユーザーを取得します。",
      "difficulty": "easy",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "AND演算子",
          "content": "# 複数の条件を全て満たす\n\n`AND` を使うと、指定した条件を全て満たすデータだけを取得できます。\n\n```sql\nSELECT * FROM users WHERE age >= 20 AND country = 'USA';\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nage が `20` 以上、かつ country が `'Japan'` のユーザーを取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users WHERE age >= 20 AND country = 'Japan';\n```"
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
        "「かつ」を表す演算子 AND を使います。"
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
      "title": "データの並び替え",
      "description": "取得したデータを年齢(age)の順に並び替えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "ORDER BY句",
          "content": "# 並び替え\n\n`ORDER BY カラム名` でデータを並び替えることができます。\nデフォルトは昇順（小さい順）です。降順（大きい順）にする場合は `DESC` を付けます。\n\n```sql\nSELECT * FROM users ORDER BY age DESC;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルのデータを age の**昇順（小さい順）**で並び替えて取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users ORDER BY age;\n```"
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
        "並び替えには ORDER BY を使います。"
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
      "title": "取得件数の制限",
      "description": "データの取得件数を制限する方法を学びましょう。最初の3件だけを取得します。",
      "difficulty": "easy",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "LIMIT句",
          "content": "# 件数制限\n\n`LIMIT 数字` を使うと、取得するデータの最大件数を指定できます。\n\n```sql\nSELECT * FROM users LIMIT 5;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルから最初の 3 件だけを取得しましょう。\n\n**コード例：**\n```sql\nSELECT * FROM users LIMIT 3;\n```"
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
        "件数を制限する命令は LIMIT です。"
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
      "title": "データの数を数える",
      "description": "テーブルに保存されているデータの行数を数えてみましょう。",
      "difficulty": "easy",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "COUNT関数",
          "content": "# 行数のカウント\n\n`COUNT(*)` を使うと、データの総数を取得できます。\n\n```sql\nSELECT COUNT(*) FROM users;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルのデータの総数をカウントして表示しましょう。\n\n**コード例：**\n```sql\nSELECT COUNT(*) FROM users;\n```"
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
        "数を数える関数 COUNT を使います。"
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
      "title": "重複を除外して取得",
      "description": "重複しているデータを1つにまとめて取得する方法を学びましょう。",
      "difficulty": "easy",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "DISTINCT",
          "content": "# 重複の除外\n\n`SELECT DISTINCT カラム名` とすることで、重複する値を除外してユニークな値だけを取得できます。\n\n```sql\nSELECT DISTINCT country FROM users;\n```"
        },
        {
          "title": "この演習の目標",
          "content": "# 目標\n\nusers テーブルの country カラムから、重複を除いた国名のリストを取得しましょう。\n\n**コード例：**\n```sql\nSELECT DISTINCT country FROM users;\n```"
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
        "重複を除外するキーワード DISTINCT を使います。"
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
