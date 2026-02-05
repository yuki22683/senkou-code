export const lua3Data = {
  "language": "lua",
  "lessonId": "lua-3",
  "lessonTitle": "Lua III - エラー処理とモジュール",
  "lessonDescription": "Luaのエラー処理とモジュールシステムを学びます。より堅牢なプログラムを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "exercises": [
    {
        "title": "pcall でエラーを捕捉",
        "description": "「pcall」を使ってエラーを安全に捕捉しましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "pcall とは？",
            "content": "# 保護された呼び出し\\\\\\n\\\\\\n**pcall** は、関数をエラーから保護して呼び出します。エラーが発生してもプログラムは停止しません。"
          },
          {
            "title": "pcall の使い方",
            "content": "# success, result = pcall(関数)\\\\\\n\\\\\\n成功すると `true` と結果、失敗すると `false` とエラーメッセージを返します。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nlocal ok, err = pcall(function()\\\\\\n    error(\"oops\")\\\\\\nend)\\\\\\nprint(ok) -- false\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- pcallでエラーを捕捉\\\\\\nlocal ok, result = pcall(function()\\\\\\n    return 10 + 5\\\\\\nend)\\\\\\n-- 成功したら出力\\\\\\nif ok then\\\\\\n    -- resultを出力\\\\\\n    print(result)\\\\\\nend",
        "holeyCode": "-- pcallでエラーを捕捉\\\\\\nlocal ___, ___ = pcall(function()\\\\\\n    return ___ + ___\\\\\\n___)\\\\\\n-- 成功したら出力\\\\\\nif ok ___\\\\\\n    -- resultを出力\\\\\\n    ___(result)\\\\\\n___",
        "correctLines": [
          "-- pcallでエラーを捕捉",
          "local ok, result = pcall(function()",
          "    return 10 + 5",
          "end)",
          "-- 成功したら出力",
          "if ok then",
          "    -- resultを出力",
          "    print(result)",
          "end"
        ],
        "lineHints": [
          null,
          "pcall でエラーを捕捉します。",
          "ok と入力しましょう。",
          "変数の内容を画面に出力します。",
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "pcall",
            "xpcall",
            "call",
            "try"
          ],
          "others": ["ok", "result", "10", "5", "end", "then", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\\\\\n"
          }
        ]
      },
    {
        "title": "error でエラーを発生",
        "description": "「error」を使って意図的にエラーを発生させましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "error とは？",
            "content": "# エラーを発生させる\\\\\\n\\\\\\n**error** 関数を使うと、意図的にエラーを発生させることができます。"
          },
          {
            "title": "error の使い方",
            "content": "# error(メッセージ)\\\\\\n\\\\\\nエラーメッセージを指定してエラーを発生させます。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nif x < 0 then\\\\\\n    error(\"負の値は許可されません\")\\\\\\nend\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "local ok, msg = pcall(function()\\\\\n    -- errorでエラーを発生\\\\\n    error(\"テスト エラー\")\\\\\nend)\\\\\nprint(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")",
        "holeyCode": "local ___, ___ = pcall(function()\\\\\n    -- errorでエラーを発生\\\\\n    error(\"___\")\\\\\n___)\\\\\n___(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")",
        "correctLines": [
          "local ok, msg = pcall(function()",
          "    -- errorでエラーを発生",
          "    error(\"テスト エラー\")",
          "end)",
          "print(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")"
        ],
        "lineHints": [
          "error でエラーを発生させます。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "error",
            "throw",
            "raise",
            "fail"
          ],
          "others": ["ok", "msg", "test error", "end", "print", "テスト エラー"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "caught\\\\\\n"
          }
        ]
      },
    {
        "title": "assert で検証",
        "description": "「assert」を使って条件を検証しましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "assert とは？",
            "content": "# 条件を検証する\\\\\\n\\\\\\n**assert** は、条件が偽の場合にエラーを発生させます。"
          },
          {
            "title": "assert の使い方",
            "content": "# assert(条件, メッセージ)\\\\\\n\\\\\\n条件が真なら値を返し、偽ならエラーになります。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nlocal x = assert(tonumber(\"42\"))\\\\\\nprint(x) -- 42\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- assertで検証\\\\\\nlocal value = assert(10 > 5, \"should be true\")\\\\\\nprint(value and \"pass\" or \"fail\")",
        "holeyCode": "-- assertで検証\\\\\\nlocal ___ = assert(10 > 5, \"should be true\")\\\\\\n___(value and \"pass\" or \"fail\")",
        "correctLines": [
          "-- assertで検証",
          "local value = assert(10 > 5, \"should be true\")",
          "print(value and \"pass\" or \"fail\")"
        ],
        "lineHints": [
          null,
          "assert で検証します。",
          null
        ],
        "candidates": {
          "functions": [
            "assert",
            "check",
            "verify",
            "validate"
          ],
          "others": ["value", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "pass\\\\\\n"
          }
        ]
      },
    {
        "title": "型を確認しよう",
        "description": "「type」を使って値の型を確認しましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "type とは？",
            "content": "# 型を調べる\\\\\\n\\\\\\n**type** 関数は、値の型を文字列で返します。"
          },
          {
            "title": "type の使い方",
            "content": "# 主な型\\\\\\n\\\\\\n- `\"nil\"`, `\"boolean\"`, `\"number\"`, `\"string\"`, `\"table\"`, `\"function\"`\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nprint(type(42)) -- number\\\\\\nprint(type({})) -- table\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- typeで型を確認\\\\\\nlocal t = {}\\\\\\n-- 型を出力\\\\\\nprint(type(t))",
        "holeyCode": "-- typeで型を確認\\\\\\nlocal ___ = {}\\\\\\n-- 型を出力\\\\\\n___(type(t))",
        "correctLines": [
          "-- typeで型を確認",
          "local t = {}",
          "-- 型を出力",
          "print(type(t))"
        ],
        "lineHints": [
          null,
          "type で型を確認します。",
          null,
          null
        ],
        "candidates": {
          "functions": [
            "type",
            "typeof",
            "kind",
            "class"
          ],
          "others": ["t", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "table\\\\\\n"
          }
        ]
      },
    {
        "title": "tostring で文字列に変換",
        "description": "「tostring」を使って値を文字列に変換しましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "tostring とは？",
            "content": "# 文字列に変換\\\\\\n\\\\\\n**tostring** は、任意の値を文字列に変換します。"
          },
          {
            "title": "tostring の使い方",
            "content": "# tostring(値)\\\\\\n\\\\\\n数値やテーブルを文字列に変換できます。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nprint(tostring(42)) -- \"42\"\\\\\\nprint(tostring(true)) -- \"true\"\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- tostringで文字列に変換\\\\\\nlocal n = 100\\\\\\n-- 文字列に変換して連結\\\\\\nprint(\"Value: \" .. tostring(n))",
        "holeyCode": "-- tostringで文字列に変換\\\\\\nlocal ___ = 100\\\\\\n-- 文字列に変換して連結\\\\\\n___(\"Value: \" .. tostring(n))",
        "correctLines": [
          "-- tostringで文字列に変換",
          "local n = 100",
          "-- 文字列に変換して連結",
          "print(\"Value: \" .. tostring(n))"
        ],
        "lineHints": [
          null,
          "tostring で文字列に変換します。",
          null,
          null
        ],
        "candidates": {
          "functions": [
            "tostring",
            "string",
            "str",
            "toString"
          ],
          "others": ["n", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Value: 100\\\\\\n"
          }
        ]
      },
    {
        "title": "tonumber で数値に変換",
        "description": "「tonumber」を使って文字列を数値に変換しましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "tonumber とは？",
            "content": "# 数値に変換\\\\\\n\\\\\\n**tonumber** は、文字列を数値に変換します。変換できない場合は `nil` を返します。"
          },
          {
            "title": "tonumber の使い方",
            "content": "# tonumber(文字列)\\\\\\n\\\\\\n数値として解釈できる文字列を変換します。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nprint(tonumber(\"42\")) -- 42\\\\\\nprint(tonumber(\"abc\")) -- nil\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- tonumberで数値に変換\\\\\\nlocal s = \"50\"\\\\\\n-- 数値に変換\\\\\\nlocal n = tonumber(s)\\\\\\nprint(n + 10)",
        "holeyCode": "-- tonumberで数値に変換\\\\\\nlocal ___ = \"50\"\\\\\\n-- 数値に変換\\\\\\nlocal ___ = tonumber(s)\\\\\\n___(n + 10)",
        "correctLines": [
          "-- tonumberで数値に変換",
          "local s = \"50\"",
          "-- 数値に変換",
          "local n = tonumber(s)",
          "print(n + 10)"
        ],
        "lineHints": [
          null,
          "tonumber で数値に変換します。",
          null,
          null,
          null
        ],
        "candidates": {
          "functions": [
            "tonumber",
            "number",
            "int",
            "toNumber"
          ],
          "others": ["s", "n", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "60\\\\\\n"
          }
        ]
      },
    {
        "title": "文字列を連結",
        "description": "「..」を使って文字列を連結しましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "文字列の連結",
            "content": "# .. で連結\\\\\\n\\\\\\nLuaでは **..** 演算子で文字列を連結します。"
          },
          {
            "title": ".. の使い方",
            "content": "# 文字列1 .. 文字列2\\\\\\n\\\\\\n複数の文字列をつなげます。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nlocal s = \"Hello\" .. \" \" .. \"World\"\\\\\\nprint(s) -- Hello World\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- ..で文字列を連結\\\\\\nlocal a = \"Lua\"\\\\\\nlocal b = \"Script\"\\\\\\n-- 連結して出力\\\\\\nprint(a .. b)",
        "holeyCode": "-- ..で文字列を連結\\\\\\nlocal ___ = \"Lua\"\\\\\\nlocal ___ = \"Script\"\\\\\\n-- 連結して出力\\\\\\n___(a .. b)",
        "correctLines": [
          "-- ..で文字列を連結",
          "local a = \"Lua\"",
          "local b = \"Script\"",
          "-- 連結して出力",
          "print(a .. b)"
        ],
        "lineHints": [
          null,
          ".. で連結します。",
          null,
          null,
          null
        ],
        "candidates": {
          "operators": [
            "..",
            "+",
            "&",
            "||"
          ],
          "others": ["a", "b", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "LuaScript\\\\\\n"
          }
        ]
      },
    {
        "title": "文字列の長さを取得",
        "description": "「#」を使って文字列の長さを取得しましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "# 演算子",
            "content": "# 長さを取得\\\\\\n\\\\\\n**#** 演算子は、文字列やテーブルの長さを返します。"
          },
          {
            "title": "# の使い方",
            "content": "# #文字列 / #テーブル\\\\\\n\\\\\\n文字列のバイト数や配列の要素数を返します。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nprint(#\"hello\") -- 5\\\\\\nprint(#{1, 2, 3}) -- 3\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- #で長さを取得\\\\\\nlocal s = \"Lua\"\\\\\\n-- 長さを出力\\\\\\nprint(#s)",
        "holeyCode": "-- #で長さを取得\\\\\\nlocal ___ = \"Lua\"\\\\\\n-- 長さを出力\\\\\\n___(#s)",
        "correctLines": [
          "-- #で長さを取得",
          "local s = \"Lua\"",
          "-- 長さを出力",
          "print(#s)"
        ],
        "lineHints": [
          null,
          "# で長さを取得します。",
          null,
          null
        ],
        "candidates": {
          "operators": [
            "#",
            "$",
            "@",
            "&"
          ],
          "others": ["s", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\\\\\n"
          }
        ]
      },
    {
        "title": "条件演算子のパターン",
        "description": "Luaでの三項演算子パターンを学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "条件式パターン",
            "content": "# and と or の活用\\\\\\n\\\\\\nLuaには三項演算子がありませんが、`and` と `or` で同様のことができます。"
          },
          {
            "title": "and/or パターン",
            "content": "# 条件 and 真の値 or 偽の値\\\\\\n\\\\\\n条件が真なら左側、偽なら右側の値を返します。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nlocal x = 10 > 5 and \"yes\" or \"no\"\\\\\\nprint(x) -- yes\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- and/orで条件分岐\\\\\\nlocal age = 20\\\\\\n-- 条件に応じて値を決める\\\\\\nlocal status = age >= 18 and \"adult\" or \"child\"\\\\\\nprint(status)",
        "holeyCode": "-- and/orで条件分岐\\\\\\nlocal ___ = 20\\\\\\n-- 条件に応じて値を決める\\\\\\nlocal ___ = age >= 18 and \"adult\" or \"child\"\\\\\\n___(status)",
        "correctLines": [
          "-- and/orで条件分岐",
          "local age = 20",
          "-- 条件に応じて値を決める",
          "local status = age >= 18 and \"adult\" or \"child\"",
          "print(status)"
        ],
        "lineHints": [
          null,
          "and と or を使います。",
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "and",
            "or",
            "if",
            "then"
          ],
          "others": ["age", "status", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "adult\\\\\\n"
          }
        ]
      },
    {
        "title": "ループを制御しよう",
        "description": "「break」を使ってループを抜けましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "break とは？",
            "content": "# ループを抜ける\\\\\\n\\\\\\n**break** を使うと、ループを途中で抜けることができます。"
          },
          {
            "title": "break の使い方",
            "content": "# ループ内で break\\\\\\n\\\\\\n条件を満たしたらループを終了します。\\\\\\n\\\\\\n**コード例：**\\\\\\n```lua\\\\\\nfor i = 1, 10 do\\\\\\n    if i > 5 then break end\\\\\\n    print(i)\\\\\\nend\\\\\\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- breakでループを抜ける\\\\\\nfor i = 1, 10 do\\\\\\n    -- 3を超えたらループを抜ける\\\\\\n    if i > 3 then break end\\\\\\n    print(i)\\\\\\nend",
        "holeyCode": "-- breakでループを抜ける\\\\\\nfor i = ___, ___ do\\\\\\n    -- 3を超えたらループを抜ける\\\\\\n    if i ___ 3 then break end\\\\\\n    ___(i)\\\\\\n___",
        "correctLines": [
          "-- breakでループを抜ける",
          "for i = 1, 10 do",
          "    -- 3を超えたらループを抜ける",
          "    if i > 3 then break end",
          "    print(i)",
          "end"
        ],
        "lineHints": [
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "break",
            "continue",
            "return",
            "exit"
          ],
          "others": ["1", "10", ">", "print", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\\\\\n2\\\\\\n3\\\\\\n"
          }
        ]
      }
  ]
};
