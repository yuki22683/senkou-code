export const lua3Data = {
  "language": "lua",
  "lessonId": "lua-3",
  "lessonTitle": "Lua III - エラー処理とモジュール",
  "lessonDescription": "Luaのエラー処理とモジュールシステムを学びます。より堅牢なプログラムを作りましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 3,
  "tutorialSlides": [
    {
      "title": "pcall でエラーを捕捉",
      "content": "`pcall` は関数を保護モードで実行し、エラーを捕捉します。\\n\\n```lua\\nlocal ok, result = pcall(function()\\n    return 10 + 5\\nend)\\n\\nif ok then\\n    print(result)  -- => 15\\nelse\\n    print(\"エラー: \" .. result)\\nend\\n```\\n\\n第1戻り値が成功フラグ、第2戻り値が結果またはエラーメッセージです。"
    },
    {
      "title": "error と assert",
      "content": "`error` でエラーを発生させ、`assert` で条件を検証します。\\n\\n```lua\\n-- errorでエラーを発生\\nlocal ok, msg = pcall(function()\\n    error(\"テスト エラー\")\\nend)\\n-- ok = false, msg = エラーメッセージ\\n\\n-- assertで検証\\nlocal value = assert(10 > 5, \"should be true\")\\n-- 条件がfalseならエラー発生\\n```"
    },
    {
      "title": "型変換",
      "content": "`type`、`tostring`、`tonumber` で型を確認・変換します。\\n\\n```lua\\nprint(type({}))  -- => table\\nprint(type(10))  -- => number\\n\\nlocal n = 100\\nprint(\"Value: \" .. tostring(n))  -- => Value: 100\\n\\nlocal s = \"50\"\\nprint(tonumber(s) + 10)  -- => 60\\n```"
    },
    {
      "title": "文字列操作",
      "content": "`..` で文字列を連結し、`#` で長さを取得します。\\n\\n```lua\\nlocal a = \"Lua\"\\nlocal b = \"Script\"\\nprint(a .. b)  -- => LuaScript\\n\\nlocal s = \"Lua\"\\nprint(#s)  -- => 3\\n```\\n\\n`string.sub`、`string.find`、`string.match` なども使えます。"
    },
    {
      "title": "条件演算子のパターン",
      "content": "Luaには三項演算子がありませんが、`and`/`or` で代用できます。\\n\\n```lua\\nlocal age = 20\\nlocal status = age >= 18 and \"adult\" or \"child\"\\nprint(status)  -- => adult\\n```\\n\\n`condition and A or B` は条件が真なら `A`、偽なら `B` を返します。"
    },
    {
      "title": "ループ制御",
      "content": "`break` でループを抜けます。\\n\\n```lua\\nfor i = 1, 10 do\\n    if i > 3 then break end\\n    print(i)\\nend\\n-- => 1, 2, 3\\n```\\n\\nLuaには `continue` がないため、条件分岐で制御します。\\n\\n```lua\\nfor i = 1, 5 do\\n    if i ~= 3 then\\n        print(i)\\n    end\\nend\\n```"
    }
  ],
  "exercises": [
    {
      "title": "pcall でエラーを捕捉",
      "tutorialSlides": [
        {
          "title": "pcall とは？",
          "content": "# 保護された呼び出し\\n\\n**pcall** は、関数をエラーから保護して呼び出します。エラーが発生してもプログラムは停止しません。"
        },
        {
          "title": "pcall の使い方",
          "content": "# success, result = pcall(関数)\\n\\n成功すると `true` と結果、失敗すると `false` とエラーメッセージを返します。\\n\\n**コード例：**\\n```lua\\nlocal ok, err = pcall(function()\\n    error(\"oops\")\\nend)\\nprint(ok) -- false\\n```"
        }
      ],
      "correctCode": "-- pcallでエラーを捕捉\\nlocal ok, result = pcall(function()\\n    return 10 + 5\\nend)\\n-- 成功したら出力\\nif ok then\\n    -- resultを出力\\n    print(result)\\nend",
      "holeyCode": "-- pcallでエラーを捕捉\\nlocal ___, ___ = ___(function()\\n    return ___ + ___\\n___)\\n-- 成功したら出力\\nif ___ ___\\n    -- resultを出力\\n    ___(___)\\n___",
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
          "pcall で関数を保護モードで実行します。",
          "10と5を足した値を返します。",
          "関数を閉じます。",
          null,
          "成功フラグokがtrueかチェックします。",
          null,
          "resultの値を画面に出力します。",
          "ブロックを終了します。"
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
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "error でエラーを発生",
      "tutorialSlides": [
        {
          "title": "error とは？",
          "content": "# エラーを発生させる\\n\\n**error** 関数を使うと、意図的にエラーを発生させることができます。"
        },
        {
          "title": "error の使い方",
          "content": "# error(メッセージ)\\n\\nエラーメッセージを指定してエラーを発生させます。\\n\\n**コード例：**\\n```lua\\nif x < 0 then\\n    error(\"負の値は許可されません\")\\nend\\n```"
        }
      ],
      "correctCode": "local ok, msg = pcall(function()\\n    -- errorでエラーを発生\\n    error(\"テスト エラー\")\\nend)\\nprint(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")",
      "holeyCode": "local ___, ___ = ___(function()\\n    -- errorでエラーを発生\\n    ___(\"___\")\\n___)\\n___(___:___(\"___\") ___ \"___\" ___ \"___\")",
      "correctLines": [
          "local ok, msg = pcall(function()",
          "    -- errorでエラーを発生",
          "    error(\"テスト エラー\")",
          "end)",
          "print(msg:match(\"テスト エラー\") and \"caught\" or \"not caught\")"
        ],
      "lineHints": [
          "pcallで関数を保護モードで実行します。",
          null,
          "errorでエラーメッセージを発生させます。",
          "関数を閉じます。",
          "matchでマッチしたらcaught、しなければnot caughtを出力します。"
        ],
        "candidates": {
          "functions": [
            "error",
            "throw",
            "raise",
            "fail"
          ],
          "others": ["ok", "msg", "end", "print", "テスト エラー", "pcall", "match", "caught", "not caught", "and", "or"]
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
      "tutorialSlides": [
        {
          "title": "assert とは？",
          "content": "# 条件を検証する\\n\\n**assert** は、条件が偽の場合にエラーを発生させます。"
        },
        {
          "title": "assert の使い方",
          "content": "# assert(条件, メッセージ)\\n\\n条件が真なら値を返し、偽ならエラーになります。\\n\\n**コード例：**\\n```lua\\nlocal x = assert(tonumber(\"42\"))\\nprint(x) -- 42\\n```"
        }
      ],
      "correctCode": "-- assertで検証\\nlocal value = assert(10 > 5, \"should be true\")\\nprint(value and \"pass\" or \"fail\")",
      "holeyCode": "-- assertで検証\\nlocal ___ = ___(___ ___ ___, \"___\")\\n___(___ ___ \"___\" ___ \"___\")",
      "correctLines": [
          "-- assertで検証",
          "local value = assert(10 > 5, \"should be true\")",
          "print(value and \"pass\" or \"fail\")"
        ],
      "lineHints": [
          null,
          "assertで10 > 5を検証し、結果をvalueに代入します。",
          "valueがtrueならpass、falseならfailを出力します。"
        ],
        "candidates": {
          "functions": [
            "assert",
            "check",
            "verify",
            "validate"
          ],
          "others": ["value", "print", "10", "5", ">", "should be true", "and", "or", "pass", "fail"]
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
      "tutorialSlides": [
        {
          "title": "type とは？",
          "content": "# 型を調べる\\n\\n**type** 関数は、値の型を文字列で返します。"
        },
        {
          "title": "type の使い方",
          "content": "# 主な型\\n\\n- `\"nil\"`, `\"boolean\"`, `\"number\"`, `\"string\"`, `\"table\"`, `\"function\"`\\n\\n**コード例：**\\n```lua\\nprint(type(42)) -- number\\nprint(type({})) -- table\\n```"
        }
      ],
      "correctCode": "-- typeで型を確認\\nlocal t = {}\\n-- 型を出力\\nprint(type(t))",
      "holeyCode": "-- typeで型を確認\\nlocal ___ = ___\\n-- 型を出力\\n___(___(___))",
      "correctLines": [
          "-- typeで型を確認",
          "local t = {}",
          "-- 型を出力",
          "print(type(t))"
        ],
      "lineHints": [
          null,
          "変数tに空テーブル{}を代入します。",
          null,
          "type(t)で型を取得して出力します。"
        ],
        "candidates": {
          "functions": [
            "type",
            "typeof",
            "kind",
            "class"
          ],
          "others": ["t", "print", "{}"]
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
      "tutorialSlides": [
        {
          "title": "tostring とは？",
          "content": "# 文字列に変換\\n\\n**tostring** は、任意の値を文字列に変換します。"
        },
        {
          "title": "tostring の使い方",
          "content": "# tostring(値)\\n\\n数値やテーブルを文字列に変換できます。\\n\\n**コード例：**\\n```lua\\nprint(tostring(42)) -- \"42\"\\nprint(tostring(true)) -- \"true\"\\n```"
        }
      ],
      "correctCode": "-- tostringで文字列に変換\\nlocal n = 100\\n-- 文字列に変換して連結\\nprint(\"Value: \" .. tostring(n))",
      "holeyCode": "-- tostringで文字列に変換\\nlocal ___ = ___\\n-- 文字列に変換して連結\\n___(\"___\" ___ ___(___))",
      "correctLines": [
          "-- tostringで文字列に変換",
          "local n = 100",
          "-- 文字列に変換して連結",
          "print(\"Value: \" .. tostring(n))"
        ],
      "lineHints": [
          null,
          "変数nに100を代入します。",
          null,
          "\"Value: \"とtostring(n)を..で連結して出力します。"
        ],
        "candidates": {
          "functions": [
            "tostring",
            "string",
            "str",
            "toString"
          ],
          "others": ["n", "print", "100", "Value: ", "..", "Value:"]
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
      "tutorialSlides": [
        {
          "title": "tonumber とは？",
          "content": "# 数値に変換\\n\\n**tonumber** は、文字列を数値に変換します。変換できない場合は `nil` を返します。"
        },
        {
          "title": "tonumber の使い方",
          "content": "# tonumber(文字列)\\n\\n数値として解釈できる文字列を変換します。\\n\\n**コード例：**\\n```lua\\nprint(tonumber(\"42\")) -- 42\\nprint(tonumber(\"abc\")) -- nil\\n```"
        }
      ],
      "correctCode": "-- tonumberで数値に変換\\nlocal s = \"50\"\\n-- 数値に変換\\nlocal n = tonumber(s)\\nprint(n + 10)",
      "holeyCode": "-- tonumberで数値に変換\\nlocal ___ = \"___\"\\n-- 数値に変換\\nlocal ___ = ___(___)\\n___(___ + ___)",
      "correctLines": [
          "-- tonumberで数値に変換",
          "local s = \"50\"",
          "-- 数値に変換",
          "local n = tonumber(s)",
          "print(n + 10)"
        ],
      "lineHints": [
          null,
          "変数sに文字列\"50\"を代入します。",
          null,
          "tonumber(s)で文字列を数値に変換してnに代入します。",
          "n + 10の結果を出力します。"
        ],
        "candidates": {
          "functions": [
            "tonumber",
            "number",
            "int",
            "toNumber"
          ],
          "others": ["s", "n", "print", "50", "10"]
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
      "tutorialSlides": [
        {
          "title": "文字列の連結",
          "content": "# .. で連結\\n\\nLuaでは **..** 演算子で文字列を連結します。"
        },
        {
          "title": ".. の使い方",
          "content": "# 文字列1 .. 文字列2\\n\\n複数の文字列をつなげます。\\n\\n**コード例：**\\n```lua\\nlocal s = \"Hello\" .. \" \" .. \"World\"\\nprint(s) -- Hello World\\n```"
        }
      ],
      "correctCode": "-- ..で文字列を連結\\nlocal a = \"Lua\"\\nlocal b = \"Script\"\\n-- 連結して出力\\nprint(a .. b)",
      "holeyCode": "-- ..で文字列を連結\\nlocal ___ = \"___\"\\nlocal ___ = \"___\"\\n-- 連結して出力\\n___(___ ___ ___)",
      "correctLines": [
          "-- ..で文字列を連結",
          "local a = \"Lua\"",
          "local b = \"Script\"",
          "-- 連結して出力",
          "print(a .. b)"
        ],
      "lineHints": [
          null,
          "変数aに\"Lua\"を代入します。",
          "変数bに\"Script\"を代入します。",
          null,
          "a .. bで文字列を連結して出力します。"
        ],
        "candidates": {
          "operators": [
            "..",
            "+",
            "&",
            "||"
          ],
          "others": ["a", "b", "print", "Lua", "Script"]
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
      "tutorialSlides": [
        {
          "title": "# 演算子",
          "content": "# 長さを取得\\n\\n**#** 演算子は、文字列やテーブルの長さを返します。"
        },
        {
          "title": "# の使い方",
          "content": "# #文字列 / #テーブル\\n\\n文字列のバイト数や配列の要素数を返します。\\n\\n**コード例：**\\n```lua\\nprint(#\"hello\") -- 5\\nprint(#{1, 2, 3}) -- 3\\n```"
        }
      ],
      "correctCode": "-- #で長さを取得\\nlocal s = \"Lua\"\\n-- 長さを出力\\nprint(#s)",
      "holeyCode": "-- #で長さを取得\\nlocal ___ = \"___\"\\n-- 長さを出力\\n___(___)",
      "correctLines": [
          "-- #で長さを取得",
          "local s = \"Lua\"",
          "-- 長さを出力",
          "print(#s)"
        ],
      "lineHints": [
          null,
          "変数sに\"Lua\"を代入します。",
          null,
          "#sで文字列の長さを取得して出力します。"
        ],
        "candidates": {
          "operators": [
            "#",
            "$",
            "@",
            "&"
          ],
          "others": ["s", "print", "Lua", "#s"]
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
      "tutorialSlides": [
        {
          "title": "条件式パターン",
          "content": "# and と or の活用\\n\\nLuaには三項演算子がありませんが、`and` と `or` で同様のことができます。"
        },
        {
          "title": "and/or パターン",
          "content": "# 条件 and 真の値 or 偽の値\\n\\n条件が真なら左側、偽なら右側の値を返します。\\n\\n**コード例：**\\n```lua\\nlocal x = 10 > 5 and \"yes\" or \"no\"\\nprint(x) -- yes\\n```"
        }
      ],
      "correctCode": "-- and/orで条件分岐\\nlocal age = 20\\n-- 条件に応じて値を決める\\nlocal status = age >= 18 and \"adult\" or \"child\"\\nprint(status)",
      "holeyCode": "-- and/orで条件分岐\\nlocal ___ = ___\\n-- 条件に応じて値を決める\\nlocal ___ = ___ ___ ___ ___ \"___\" ___ \"___\"\\n___(___)",
      "correctLines": [
          "-- and/orで条件分岐",
          "local age = 20",
          "-- 条件に応じて値を決める",
          "local status = age >= 18 and \"adult\" or \"child\"",
          "print(status)"
        ],
      "lineHints": [
          null,
          "変数ageに20を代入します。",
          null,
          "age >= 18 and \"adult\" or \"child\"で条件に応じた値をstatusに代入します。",
          "statusを出力します。"
        ],
        "candidates": {
          "keywords": [
            "and",
            "or",
            "if",
            "then"
          ],
          "others": ["age", "status", "print", "20", "18", ">=", "adult", "child"]
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
      "tutorialSlides": [
        {
          "title": "break とは？",
          "content": "# ループを抜ける\\n\\n**break** を使うと、ループを途中で抜けることができます。"
        },
        {
          "title": "break の使い方",
          "content": "# ループ内で break\\n\\n条件を満たしたらループを終了します。\\n\\n**コード例：**\\n```lua\\nfor i = 1, 10 do\\n    if i > 5 then break end\\n    print(i)\\nend\\n```"
        }
      ],
      "correctCode": "-- breakでループを抜ける\\nfor i = 1, 10 do\\n    -- 3を超えたらループを抜ける\\n    if i > 3 then break end\\n    print(i)\\nend",
      "holeyCode": "-- breakでループを抜ける\\nfor ___ = ___, ___ do\\n    -- 3を超えたらループを抜ける\\n    if ___ ___ ___ then ___ ___\\n    ___(___)\\n___",
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
          "for i = 1, 10 doでiを1から10まで繰り返します。",
          null,
          "i > 3ならbreakでループを抜けます。",
          "iを出力します。",
          "ブロックを終了します。"
        ],
        "candidates": {
          "keywords": [
            "break",
            "continue",
            "return",
            "exit"
          ],
          "others": ["i", "1", "10", ">", "3", "print", "end"]
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
