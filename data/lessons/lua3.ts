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
      "correctCode": "-- pcallでエラーを捕捉\\nlocal ok, result = pcall(function()\\n    return 10 + 5\\nend)\\n-- 成功したら出力\\nif ok then\\n    -- resultを出力\\n    print(result)\\nend",
      "holeyCode": "-- pcallでエラーを捕捉\\nlocal ___, ___ = pcall(function()\\n    return ___ + ___\\n___)\\n-- 成功したら出力\\nif ok ___\\n    -- resultを出力\\n    ___(result)\\n___",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。",
          "ブロックを終了する。"
        ],
        "candidates": {
          "functions": [
            "pcall",
            "xpcall",
            "call",
            "try"
          ],
          "others": ["ok", "result", "10", "5", "end", "then", "print", "5", "then"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "error でエラーを発生",
      "correctCode": "local ok, msg = pcall(function()\\n    -- errorでエラーを発生\\n    error(\"テスト エラー\")\\nend)\\nprint(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")",
      "holeyCode": "local ___, ___ = pcall(function()\\n    -- errorでエラーを発生\\n    ___(\"___\")\\n___)\\n___(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
            "expected_output": "caught\\n"
          }
        ]
      },
    {
      "title": "assert で検証",
      "correctCode": "-- assertで検証\\nlocal value = assert(10 > 5, \"should be true\")\\nprint(value and \"pass\" or \"fail\")",
      "holeyCode": "-- assertで検証\\nlocal ___ = assert(10 > 5, \"should be true\")\\n___(value and \"pass\" or \"fail\")",
      "correctLines": [
          "-- assertで検証",
          "local value = assert(10 > 5, \"should be true\")",
          "print(value and \"pass\" or \"fail\")"
        ],
      "lineHints": [
          null,
          "assert で検証します。",
          "ここを正しく入力してください。"
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
            "expected_output": "pass\\n"
          }
        ]
      },
    {
      "title": "型を確認しよう",
      "correctCode": "-- typeで型を確認\\nlocal t = {}\\n-- 型を出力\\nprint(type(t))",
      "holeyCode": "-- typeで型を確認\\nlocal ___ = {}\\n-- 型を出力\\n___(type(t))",
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
          "ここを正しく入力してください。"
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
            "expected_output": "table\\n"
          }
        ]
      },
    {
      "title": "tostring で文字列に変換",
      "correctCode": "-- tostringで文字列に変換\\nlocal n = 100\\n-- 文字列に変換して連結\\nprint(\"Value: \" .. tostring(n))",
      "holeyCode": "-- tostringで文字列に変換\\nlocal ___ = 100\\n-- 文字列に変換して連結\\n___(\"Value: \" .. tostring(n))",
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
          "ここを正しく入力してください。"
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
            "expected_output": "Value: 100\\n"
          }
        ]
      },
    {
      "title": "tonumber で数値に変換",
      "correctCode": "-- tonumberで数値に変換\\nlocal s = \"50\"\\n-- 数値に変換\\nlocal n = tonumber(s)\\nprint(n + 10)",
      "holeyCode": "-- tonumberで数値に変換\\nlocal ___ = \"50\"\\n-- 数値に変換\\nlocal ___ = tonumber(s)\\n___(n + 10)",
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
          "ここを正しく入力してください。",
          "ここを正しく入力してください。"
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
            "expected_output": "60\\n"
          }
        ]
      },
    {
      "title": "文字列を連結",
      "correctCode": "-- ..で文字列を連結\\nlocal a = \"Lua\"\\nlocal b = \"Script\"\\n-- 連結して出力\\nprint(a .. b)",
      "holeyCode": "-- ..で文字列を連結\\nlocal ___ = \"Lua\"\\nlocal ___ = \"Script\"\\n-- 連結して出力\\n___(a .. b)",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
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
            "expected_output": "LuaScript\\n"
          }
        ]
      },
    {
      "title": "文字列の長さを取得",
      "correctCode": "-- #で長さを取得\\nlocal s = \"Lua\"\\n-- 長さを出力\\nprint(#s)",
      "holeyCode": "-- #で長さを取得\\nlocal ___ = \"Lua\"\\n-- 長さを出力\\n___(#s)",
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
          "ここを正しく入力してください。"
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
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "条件演算子のパターン",
      "correctCode": "-- and/orで条件分岐\\nlocal age = 20\\n-- 条件に応じて値を決める\\nlocal status = age >= 18 and \"adult\" or \"child\"\\nprint(status)",
      "holeyCode": "-- and/orで条件分岐\\nlocal ___ = 20\\n-- 条件に応じて値を決める\\nlocal ___ = age >= 18 and \"adult\" or \"child\"\\n___(status)",
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
          "ここを正しく入力してください。",
          "変数の内容を画面に出力します。"
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
            "expected_output": "adult\\n"
          }
        ]
      },
    {
      "title": "ループを制御しよう",
      "correctCode": "-- breakでループを抜ける\\nfor i = 1, 10 do\\n    -- 3を超えたらループを抜ける\\n    if i > 3 then break end\\n    print(i)\\nend",
      "holeyCode": "-- breakでループを抜ける\\nfor i = ___, ___ do\\n    -- 3を超えたらループを抜ける\\n    if i ___ 3 then break end\\n    ___(i)\\n___",
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
          "forループでiを1から10まで繰り返します。",
          null,
          "条件式（変数と数値の比較など）を評価し、真の場合にブロックを実行します。",
          "変数の内容を画面に出力します。",
          "ブロックを終了する。"
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
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      }
  ]
};
