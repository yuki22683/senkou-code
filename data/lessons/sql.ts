export const sqlData = {
  "language": "sql",
  "lessonId": "sql-1",
  "lessonTitle": "SQL (エスキューエル) に挑戦！",
  "lessonDescription": "たくさんのデータがしまってある「倉庫（そうこ）」から、ほしいデータを取り出すための言葉「SQL（エスキューエル）」のきほんを学びましょう。",
  "lessonDifficulty": "easy",
  "lessonOrder": 1,
  "tutorialSlides": [
    {
      "title": "SQLへようこそ！",
      "content": "**SQL（エスキューエル）** は、データベースを操作するための言語です。\\n\\nデータベースは大きな「倉庫」のようなもので、たくさんのデータを整理して保存できます。\\n\\nSQLを使うと、そこからほしいデータを取り出したり、追加したりできます。"
    },
    {
      "title": "データを取り出す SELECT",
      "content": "データを取り出すには `SELECT` を使います。\\n\\n```sql\\nSELECT 'Hello, World!';\\n```\\n\\n`SELECT` は「選ぶ」という意味です。文字列はシングルクォート `'` で囲みます。"
    },
    {
      "title": "名前をつける AS",
      "content": "結果に名前をつけるには `AS` を使います。\\n\\n```sql\\nSELECT 'こんにちは' AS greeting;\\n```\\n\\n`AS` は「〜として」という意味で、結果に別名をつけます。"
    },
    {
      "title": "計算する",
      "content": "SQLでも計算ができます。\\n\\n```sql\\nSELECT 100 + 50 AS total;  -- 150\\nSELECT 10 * 5 AS product;  -- 50\\n```\\n\\n`--` から後ろはコメント（メモ）です。"
    },
    {
      "title": "条件で絞り込む WHERE",
      "content": "条件に合うデータだけを取り出すには `WHERE` を使います。\\n\\n```sql\\nSELECT * FROM users WHERE age > 20;\\n```\\n\\n`WHERE` の後ろに条件を書きます。`>` は「より大きい」という意味です。"
    },
    {
      "title": "並べ替える ORDER BY",
      "content": "結果を並べ替えるには `ORDER BY` を使います。\\n\\n```sql\\nSELECT * FROM users ORDER BY age DESC;\\n```\\n\\n`DESC` は大きい順（降順）、`ASC` は小さい順（昇順）です。"
    }
  ],
  "exercises": [
    {
      "title": "画面に文字を出してみましょう",
      "correctCode": "-- SELECTでデータを取得\\nSELECT 'Hello, World!';",
      "holeyCode": "-- SELECTでデータを取得\\nSELECT 'Hello, ___!';",
      "correctLines": [
          "-- SELECTでデータを取得",
          "SELECT 'Hello, World!';"
        ],
      "lineHints": [
          null,
          "やりかたは「SELECT」です。"
        ],
        "candidates": {
          "functions": [
            "SELECT"
          ],
          "strings": [
            "'Hello, World!'"
          ],
          "others": ["World", "界！';"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Hello, World!\\n"
          }
        ]
      },
    {
      "title": "データに名前をつけましょう",
      "correctCode": "-- 文字にgreetingという名前をつける\\nSELECT 'こんにちは' AS greeting;",
      "holeyCode": "-- 文字にgreetingという名前をつける\\nSELECT 'こんにちは' AS ___;",
      "correctLines": [
          "-- 文字にgreetingという名前をつける",
          "SELECT 'こんにちは' AS greeting;"
        ],
      "lineHints": [
          null,
          "結果に別名をつけるためのキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "AS"
          ],
          "variables": [
            "greeting",
            "message"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      },
    {
      "title": "数字を足し算しましょう",
      "correctCode": "-- 100と50を足し算する\\nSELECT 100 + 50 AS total;",
      "holeyCode": "-- 100と50を足し算する\\nSELECT ___ + ___ AS ___;",
      "correctLines": [
          "-- 100と50を足し算する",
          "SELECT 100 + 50 AS total;"
        ],
      "lineHints": [
          null,
          "加算を行う算術演算子です。"
        ],
        "candidates": {
          "operators": [
            "+",
            "-",
            "*",
            "/"
          ],
          "others": ["100", "50", "total"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "150\\n"
          }
        ]
      },
    {
      "title": "いくつもの値を表示しましょう",
      "correctCode": "-- 名前と年齢を表示\\nSELECT '太郎' AS name, 10 AS age;",
      "holeyCode": "-- 名前と年齢を表示\\nSELECT '___' AS ___, ___ AS ___;",
      "correctLines": [
          "-- 名前と年齢を表示",
          "SELECT '太郎' AS name, 10 AS age;"
        ],
      "lineHints": [
          null,
          "複数のカラムを区切るための記号です。"
        ],
        "candidates": {
          "punctuation": [
            ",",
            ";",
            ":"
          ],
          "others": ["太郎", "name", "10", "age"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎|10\\n"
          }
        ]
      },
    {
      "title": "条件で絞り込みましょう",
      "correctCode": "-- 10より大きいかチェック\\nSELECT 1 WHERE 15 > 10;",
      "holeyCode": "-- 10より大きいかチェック\\nSELECT ___ WHERE 15 > 10;",
      "correctLines": [
          "-- 10より大きいかチェック",
          "SELECT 1 WHERE 15 > 10;"
        ],
      "lineHints": [
          null,
          "条件でデータを絞り込むためのキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "WHERE",
            "FROM",
            "AND"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "文字をつなげましょう",
      "correctCode": "-- 文字をつなげる\\nSELECT 'SQL' || 'は楽しい！';",
      "holeyCode": "-- 文字をつなげる\\nSELECT '___' || 'は楽しい！';",
      "correctLines": [
          "-- 文字をつなげる",
          "SELECT 'SQL' || 'は楽しい！';"
        ],
      "lineHints": [
          null,
          "文字列を連結するための演算子です。"
        ],
        "candidates": {
          "operators": [
            "||",
            "+",
            "&"
          ],
          "others": ["SQL"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "SQLは楽しい！\\n"
          }
        ]
      },
    {
      "title": "大きい順に並べ替えましょう",
      "correctCode": "-- 降順で並べる\\nSELECT 1 AS num ORDER BY num DESC;",
      "holeyCode": "-- 降順で並べる\\nSELECT ___ AS ___ ORDER BY ___ ___;",
      "correctLines": [
          "-- 降順で並べる",
          "SELECT 1 AS num ORDER BY num DESC;"
        ],
      "lineHints": [
          null,
          "結果を並べ替えるためのキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "ORDER",
            "BY",
            "GROUP",
            "HAVING",
            "DESC",
            "ASC"
          ],
          "others": ["1", "num"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "条件を組み合わせましょう",
      "correctCode": "-- 両方の条件をチェック\\nSELECT 1 WHERE 10 > 5 AND 20 > 10;",
      "holeyCode": "-- 両方の条件をチェック\\nSELECT ___ WHERE 10 > 5 AND 20 > 10;",
      "correctLines": [
          "-- 両方の条件をチェック",
          "SELECT 1 WHERE 10 > 5 AND 20 > 10;"
        ],
      "lineHints": [
          null,
          "両方の条件を満たす場合に真となる論理演算子です。"
        ],
        "candidates": {
          "keywords": [
            "AND",
            "OR",
            "NOT"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      },
    {
      "title": "CASEで条件分岐しましょう",
      "correctCode": "-- 条件分岐\\nSELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;",
      "holeyCode": "-- 条件分岐\\nSELECT CASE WHEN ___ > 5 THEN '大きい' ELSE '小さい' END;",
      "correctLines": [
          "-- 条件分岐",
          "SELECT CASE WHEN 10 > 5 THEN '大きい' ELSE '小さい' END;"
        ],
      "lineHints": [
          null,
          "条件分岐を構成するキーワードを指定します。"
        ],
        "candidates": {
          "keywords": [
            "CASE",
            "THEN",
            "END",
            "WHEN",
            "ELSE"
          ],
          "others": ["10"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "大きい\\n"
          }
        ]
      },
    {
      "title": "NULLをチェックしましょう",
      "correctCode": "-- NULLチェック\\nSELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;",
      "holeyCode": "-- NULLチェック\\nSELECT CASE WHEN NULL IS NULL THEN ___ ELSE 0 END;",
      "correctLines": [
          "-- NULLチェック",
          "SELECT CASE WHEN NULL IS NULL THEN 1 ELSE 0 END;"
        ],
      "lineHints": [
          null,
          "値がNULLかどうかを判定するキーワードです。"
        ],
        "candidates": {
          "keywords": [
            "IS",
            "NULL",
            "NOT",
            "LIKE"
          ],
          "others": ["1"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n"
          }
        ]
      }
  ]
};
