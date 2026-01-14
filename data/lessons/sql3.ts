export const sql3Data = {
  "language": "sql",
  "lessonId": "sql-3",
  "lessonTitle": "SQL III - サブクエリと高度な操作",
  "lessonDescription": "SQLの高度な機能を学びます。サブクエリ、ウィンドウ関数、CTEなど、複雑なデータ操作を身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 3,
  "exercises": [
    {
      "title": "サブクエリ（WHERE内）",
      "description": "WHERE句の中でクエリを使いましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "サブクエリとは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# クエリの中のクエリ\n\n**サブクエリ**（副問い合わせ）は、別のクエリの中に入れ子（ネスト）になったSELECT文です。\n\n**たとえば：** 「平均点より高い人」を探すには、まず「平均点」を計算して、それより高い人を探す必要があります。サブクエリを使えば、これを1つの文で書けます。"
        },
        {
          "title": "サブクエリの使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# ( ) の中にSELECTを書く\n\n**コード例：**\n```sql\nSELECT * FROM users\nWHERE age > (SELECT AVG(age) FROM users);\n```\n\n**このコードは何をしているの？**\n1. まず `(SELECT AVG(age) FROM users)` で平均年齢を計算\n2. その平均より年齢が大きい人を選ぶ"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- SELECTでサブクエリを作成\nSELECT 'found' WHERE 5 > (SELECT 3);",
      "holeyCode": "-- SELECTでサブクエリを作成\nSELECT 'found' WHERE 5 > (___ 3);",
      "correctLines": [
        "SELECT 'found' WHERE 5 > (SELECT 3);"
      ],
      "lineHints": [
        "SELECT でサブクエリを作ります。"
      ],
      "candidates": {
        "keywords": ["SELECT", "FROM", "WHERE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "found\n"
        }
      ]
    },
    {
      "title": "EXISTS で存在チェック",
      "description": "サブクエリの結果が存在するかチェックしましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "EXISTS（イグジスツ）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 行が存在するかチェック\n\n**EXISTS**（イグジスツ＝「存在する」）は、サブクエリが1行以上のデータを返すかどうかをチェックします。\n\n**たとえば：** 「注文したことがある」ユーザーだけを探したいとき、その人の注文データが存在するかをチェックします。"
        },
        {
          "title": "EXISTS の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 存在チェック\n\n**コード例：**\n```sql\nSELECT * FROM users u\nWHERE EXISTS (\n  SELECT 1 FROM orders o WHERE o.user_id = u.id\n);\n```\n\n**このコードは何をしているの？**\n- 各ユーザーについて\n- 注文データが存在するかチェック\n- 存在すればそのユーザーを表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- EXISTSで存在チェック\nSELECT 'has data' WHERE EXISTS (SELECT 1);",
      "holeyCode": "-- EXISTSで存在チェック\nSELECT 'has data' WHERE ___ (SELECT 1);",
      "correctLines": [
        "SELECT 'has data' WHERE EXISTS (SELECT 1);"
      ],
      "lineHints": [
        "EXISTS で存在をチェックします。"
      ],
      "candidates": {
        "keywords": ["EXISTS", "IN", "ANY"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "has data\n"
        }
      ]
    },
    {
      "title": "UNION で結合",
      "description": "複数のSELECTの結果を結合しましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "UNION（ユニオン）とは？",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 結果を縦に結合（けつごう）\n\n**UNION**（ユニオン＝「合体」）は、複数のSELECTの結果を1つにまとめます。重複（じゅうふく）は自動的に除去されます。\n\n**たとえば：** 「お客様リスト」と「仕入先リスト」を1つの「連絡先リスト」にまとめるイメージです。"
        },
        {
          "title": "UNION と UNION ALL",
          "image": "/illustrations/3d_advanced/union_funnel.png",
          "content": "# 重複の扱い\n\n- `UNION` : 重複を除去する\n- `UNION ALL` : 重複をそのまま残す\n\n**コード例：**\n```sql\nSELECT name FROM customers\nUNION\nSELECT name FROM suppliers;\n```\n\n**このコードは何をしているの？**\n- customersの名前とsuppliersの名前を\n- 1つのリストにまとめます"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- UNIONで結果を結合\nSELECT 'A' UNION SELECT 'B' UNION SELECT 'C';",
      "holeyCode": "-- UNIONで結果を結合\nSELECT 'A' ___ SELECT 'B' UNION SELECT 'C';",
      "correctLines": [
        "SELECT 'A' UNION SELECT 'B' UNION SELECT 'C';"
      ],
      "lineHints": [
        "UNION で結果を結合します。"
      ],
      "candidates": {
        "keywords": ["UNION", "JOIN", "MERGE"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A\nB\nC\n"
        }
      ]
    },
    {
      "title": "INNER JOIN",
      "description": "2つのテーブルを内部結合しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "INNER JOIN（インナージョイン）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# マッチする行だけ結合\n\n**INNER JOIN**（インナージョイン＝「内部結合」）は、両方のテーブルに共通するデータだけを取り出します。\n\n**たとえば：** 「ユーザー表」と「注文表」を、ユーザーIDで紐づけて「誰が何を買ったか」を見るイメージです。注文していないユーザーは表示されません。"
        },
        {
          "title": "INNER JOIN の使い方",
          "image": "/illustrations/3d/if.png",
          "content": "# ON で結合条件を指定\n\n**コード例：**\n```sql\nSELECT u.name, o.total\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n```\n\n**このコードは何をしているの？**\n- usersテーブルとordersテーブルを\n- user_idが一致する行同士で結合\n- 名前と注文金額を表示"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT a.x, b.y FROM\n  (SELECT 1 AS id, 'A' AS x) a\n  -- INNERで内部結合\n  INNER JOIN\n  (SELECT 1 AS id, 'B' AS y) b\n  ON a.id = b.id;",
      "holeyCode": "-- SELECTで列を取得\n___ a.x, b.y FROM\n  -- テーブルaを作成\n  (___ 1 AS id, 'A' AS x) a\n  -- INNERで内部結合\n  ___ JOIN\n  -- テーブルbを作成\n  (___ 1 AS id, 'B' AS y) b\n  -- 結合条件を指定\n  ___ a.id = b.id;",
      "correctLines": [
        "SELECT a.x, b.y FROM",
        "  (SELECT 1 AS id, 'A' AS x) a",
        "  INNER JOIN",
        "  (SELECT 1 AS id, 'B' AS y) b",
        "  ON a.id = b.id;"
      ],
      "lineHints": [
        null,
        null,
        "INNER JOIN で内部結合します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["INNER", "LEFT", "RIGHT"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|B\n"
        }
      ]
    },
    {
      "title": "LEFT JOIN",
      "description": "左側テーブルを基準に結合しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "LEFT JOIN（レフトジョイン）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 左テーブルの全行を返す\n\n**LEFT JOIN**（レフトジョイン＝「左外部結合」）は、左のテーブルの全行を返します。右のテーブルにマッチしない場合はNULL（空っぽ）になります。\n\n**たとえば：** 全ユーザーを表示して、注文がある人は注文情報も表示、注文がない人は注文情報は空欄、というイメージです。"
        },
        {
          "title": "LEFT JOIN の使い方",
          "image": "/illustrations/3d_advanced/safety_net.png",
          "content": "# マッチしない場合はNULL\n\n**コード例：**\n```sql\nSELECT u.name, o.total\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n```\n\n**このコードは何をしているの？**\n- 全ユーザーを表示\n- 注文がある人は注文金額も表示\n- 注文がない人のtotalはNULL"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "SELECT a.x, b.y FROM\n  (SELECT 1 AS id, 'A' AS x) a\n  -- LEFTで左外部結合\n  LEFT JOIN\n  (SELECT 2 AS id, 'B' AS y) b\n  ON a.id = b.id;",
      "holeyCode": "-- SELECTで列を取得\n___ a.x, b.y FROM\n  -- テーブルaを作成\n  (___ 1 AS id, 'A' AS x) a\n  -- LEFTで左外部結合\n  ___ JOIN\n  -- テーブルbを作成\n  (___ 2 AS id, 'B' AS y) b\n  -- 結合条件を指定\n  ___ a.id = b.id;",
      "correctLines": [
        "SELECT a.x, b.y FROM",
        "  (SELECT 1 AS id, 'A' AS x) a",
        "  LEFT JOIN",
        "  (SELECT 2 AS id, 'B' AS y) b",
        "  ON a.id = b.id;"
      ],
      "lineHints": [
        null,
        null,
        "LEFT JOIN で左外部結合します。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["LEFT", "RIGHT", "INNER"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "A|\n"
        }
      ]
    },
    {
      "title": "MAX と MIN",
      "description": "最大値と最小値を取得しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "MAX / MIN とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 最大・最小を取得\n\n**MAX**（マックス＝最大）は最大値、**MIN**（ミン＝最小）は最小値を返す集計関数です。\n\n**たとえば：** クラスで一番高い点数（MAX）や一番低い点数（MIN）を調べるときに使います。"
        },
        {
          "title": "MAX / MIN の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 集計関数として使う\n\n**コード例：**\n```sql\nSELECT MAX(price), MIN(price) FROM products;\n```\n\n**このコードは何をしているの？**\n- productsテーブルから\n- 一番高い価格と一番安い価格を取得"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- MAXで最大値を取得\nSELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);",
      "holeyCode": "-- MAXで最大値を取得\nSELECT ___(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);",
      "correctLines": [
        "SELECT MAX(n) FROM (SELECT 5 AS n UNION SELECT 10 UNION SELECT 3);"
      ],
      "lineHints": [
        "MAX で最大値を取得します。"
      ],
      "candidates": {
        "functions": ["MAX", "MIN", "AVG"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "10\n"
        }
      ]
    },
    {
      "title": "DISTINCT で重複除去",
      "description": "重複した行を除去しましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "DISTINCT（ディスティンクト）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 重複（じゅうふく）を除去\n\n**DISTINCT**（ディスティンクト＝「区別する」）は、同じ値が複数あっても1つにまとめます。\n\n**たとえば：** 「赤、青、赤、緑、青」から「赤、青、緑」だけを取り出すイメージです。"
        },
        {
          "title": "DISTINCT の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# SELECT DISTINCT 列名\n\n**コード例：**\n```sql\nSELECT DISTINCT category FROM products;\n```\n\n**このコードは何をしているの？**\n- productsテーブルのカテゴリ一覧を\n- 重複なしで取得します"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- DISTINCTで重複除去\nSELECT DISTINCT n FROM (\n  SELECT 1 AS n UNION ALL\n  SELECT 1 UNION ALL\n  SELECT 2\n);",
      "holeyCode": "-- SELECT DISTINCT と入力して重複除去\n___ ___ n FROM (\n  -- データを作成\n  ___ 1 AS n UNION ALL\n  -- 重複データを追加\n  ___ 1 UNION ALL\n  -- 異なるデータを追加\n  ___ 2\n);",
      "correctLines": [
        "SELECT DISTINCT n FROM (",
        "  SELECT 1 AS n UNION ALL",
        "  SELECT 1 UNION ALL",
        "  SELECT 2",
        ");"
      ],
      "lineHints": [
        "DISTINCT で重複を除去します。",
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["DISTINCT", "UNIQUE", "ALL"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n"
        }
      ]
    },
    {
      "title": "LIKE でパターン検索",
      "description": "文字列のパターンマッチを行いましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "LIKE（ライク）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# パターンで検索\n\n**LIKE**（ライク＝「〜のような」）は、あいまいな条件で文字列を検索できます。\n\n**たとえば：** 「田」で始まる名前の人を探したり、「子」で終わる名前の人を探したりできます。"
        },
        {
          "title": "ワイルドカード",
          "image": "/illustrations/3d/gear.png",
          "content": "# 特別な記号\n\n- `%` : 何文字でもOK（0文字もOK）\n- `_` : ちょうど1文字\n\n**使用例：**\n- `'A%'` → Aで始まる（Anna, Apple...）\n- `'%son'` → sonで終わる（Johnson, Wilson...）\n- `'%ab%'` → abを含む（rabbit, cable...）\n- `'_ob'` → 3文字でobで終わる（Bob, Rob...）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- LIKEでパターン検索\nSELECT 'matched' WHERE 'Hello' LIKE 'H%';",
      "holeyCode": "-- LIKEでパターン検索\nSELECT 'matched' WHERE 'Hello' ___ 'H%';",
      "correctLines": [
        "SELECT 'matched' WHERE 'Hello' LIKE 'H%';"
      ],
      "lineHints": [
        "LIKE でパターンマッチします。"
      ],
      "candidates": {
        "keywords": ["LIKE", "MATCH", "REGEX"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "matched\n"
        }
      ]
    },
    {
      "title": "BETWEEN で範囲指定",
      "description": "値の範囲を指定して検索しましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "BETWEEN（ビトウィーン）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# 範囲（はんい）内の値を検索\n\n**BETWEEN**（ビトウィーン＝「〜の間」）は、指定した範囲内の値を検索します。始まりと終わりの値も含まれます。\n\n**たとえば：** 「100円から500円までの商品」を探すときに使います。"
        },
        {
          "title": "BETWEEN の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 値 BETWEEN 開始 AND 終了\n\n**コード例：**\n```sql\nSELECT * FROM products\nWHERE price BETWEEN 100 AND 500;\n```\n\n**このコードは何をしているの？**\n- 価格が100以上500以下の商品を\n- 取得します（100と500も含む）"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- BETWEENで範囲指定\nSELECT 'in range' WHERE 5 BETWEEN 1 AND 10;",
      "holeyCode": "-- BETWEENで範囲指定\nSELECT 'in range' WHERE 5 ___ 1 AND 10;",
      "correctLines": [
        "SELECT 'in range' WHERE 5 BETWEEN 1 AND 10;"
      ],
      "lineHints": [
        "BETWEEN で範囲を指定します。"
      ],
      "candidates": {
        "keywords": ["BETWEEN", "FROM", "IN"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "in range\n"
        }
      ]
    },
    {
      "title": "IN で複数値マッチ",
      "description": "複数の値のいずれかにマッチするか検索しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "IN（イン）とは？",
          "image": "/illustrations/3d/gear.png",
          "content": "# リスト内の値にマッチ\n\n**IN**（イン＝「〜の中に」）は、指定したリストのどれかに一致するか確認します。\n\n**たとえば：** 「赤、青、緑のどれか」に当てはまるものを探すときに使います。OR条件をまとめて書けます。"
        },
        {
          "title": "IN の使い方",
          "image": "/illustrations/3d/gear.png",
          "content": "# 値 IN (リスト)\n\n**コード例：**\n```sql\nSELECT * FROM users\nWHERE status IN ('active', 'pending');\n```\n\n**このコードは何をしているの？**\n- statusが'active'または'pending'の人を\n- 取得します\n- `status = 'active' OR status = 'pending'` と同じ意味"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- INで複数値マッチ\nSELECT 'found' WHERE 'B' IN ('A', 'B', 'C');",
      "holeyCode": "-- INで複数値マッチ\nSELECT 'found' WHERE 'B' ___ ('A', 'B', 'C');",
      "correctLines": [
        "SELECT 'found' WHERE 'B' IN ('A', 'B', 'C');"
      ],
      "lineHints": [
        "IN でリスト内の値を検索します。"
      ],
      "candidates": {
        "keywords": ["IN", "ANY", "SOME"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "found\n"
        }
      ]
    }
  ]
}
