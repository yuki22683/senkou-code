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
          "image": "/illustrations/3d/robot.png",
          "content": "# 保護された呼び出し\n\n**pcall** は、関数をエラーから保護して呼び出します。エラーが発生してもプログラムは停止しません。"
        },
        {
          "title": "pcall の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# success, result = pcall(関数)\n\n成功すると `true` と結果、失敗すると `false` とエラーメッセージを返します。\n\n**コード例：**\n```lua\nlocal ok, err = pcall(function()\n    error(\"oops\")\nend)\nprint(ok) -- false\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- pcallでエラーを捕捉\nlocal ok, result = pcall(function()\n    return 10 + 5\nend)\nif ok then\n    print(result)\nend",
      "holeyCode": "-- pcallでエラーを捕捉\nlocal ok, result = ___(function()\n    return 10 + 5\nend)\nif ___ then\n    print(___)\nend",
      "correctLines": [
        "local ok, result = pcall(function()",
        "    return 10 + 5",
        "end)",
        "if ok then",
        "    print(result)",
        "end"
      ],
      "lineHints": [
        "pcall でエラーを捕捉します。",
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "functions": ["pcall", "xpcall", "call", "try"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "15\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# エラーを発生させる\n\n**error** 関数を使うと、意図的にエラーを発生させることができます。"
        },
        {
          "title": "error の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# error(メッセージ)\n\nエラーメッセージを指定してエラーを発生させます。\n\n**コード例：**\n```lua\nif x < 0 then\n    error(\"負の値は許可されません\")\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local ok, msg = pcall(function()\n    -- errorでエラーを発生\n    error(\"test error\")\nend)\nprint(msg:match(\"test error\") and \"caught\" or \"not caught\")",
      "holeyCode": "local ok, msg = pcall(function()\n    -- errorでエラーを発生\n    ___(\"test error\")\nend)\nprint(msg:match(\"test error\") and \"caught\" or \"not caught\")",
      "correctLines": [
        "local ok, msg = pcall(function()",
        "    error(\"test error\")",
        "end)",
        "print(msg:match(\"test error\") and \"caught\" or \"not caught\")"
      ],
      "lineHints": [
        null,
        "error でエラーを発生させます。",
        null,
        null
      ],
      "candidates": {
        "functions": ["error", "throw", "raise", "fail"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "caught\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件を検証する\n\n**assert** は、条件が偽の場合にエラーを発生させます。"
        },
        {
          "title": "assert の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# assert(条件, メッセージ)\n\n条件が真なら値を返し、偽ならエラーになります。\n\n**コード例：**\n```lua\nlocal x = assert(tonumber(\"42\"))\nprint(x) -- 42\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- assertで検証\nlocal value = assert(10 > 5, \"should be true\")\nprint(value and \"pass\" or \"fail\")",
      "holeyCode": "-- assertで検証\nlocal value = ___(10 > 5, \"should be true\")\nprint(value and \"pass\" or \"fail\")",
      "correctLines": [
        "local value = assert(10 > 5, \"should be true\")",
        "print(value and \"pass\" or \"fail\")"
      ],
      "lineHints": [
        "assert で検証します。",
        null
      ],
      "candidates": {
        "functions": ["assert", "check", "verify", "validate"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "pass\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 型を調べる\n\n**type** 関数は、値の型を文字列で返します。"
        },
        {
          "title": "type の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 主な型\n\n- `\"nil\"`, `\"boolean\"`, `\"number\"`, `\"string\"`, `\"table\"`, `\"function\"`\n\n**コード例：**\n```lua\nprint(type(42)) -- number\nprint(type({})) -- table\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- typeで型を確認\nlocal t = {}\nprint(type(t))",
      "holeyCode": "-- typeで型を確認\nlocal t = {}\nprint(___(t))",
      "correctLines": [
        "local t = {}",
        "print(type(t))"
      ],
      "lineHints": [
        null,
        "type で型を確認します。"
      ],
      "candidates": {
        "functions": ["type", "typeof", "kind", "class"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "table\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列に変換\n\n**tostring** は、任意の値を文字列に変換します。"
        },
        {
          "title": "tostring の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# tostring(値)\n\n数値やテーブルを文字列に変換できます。\n\n**コード例：**\n```lua\nprint(tostring(42)) -- \"42\"\nprint(tostring(true)) -- \"true\"\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- tostringで文字列に変換\nlocal n = 100\nprint(\"Value: \" .. tostring(n))",
      "holeyCode": "-- tostringで文字列に変換\nlocal n = 100\nprint(\"Value: \" .. ___(n))",
      "correctLines": [
        "local n = 100",
        "print(\"Value: \" .. tostring(n))"
      ],
      "lineHints": [
        null,
        "tostring で文字列に変換します。"
      ],
      "candidates": {
        "functions": ["tostring", "string", "str", "toString"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Value: 100\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 数値に変換\n\n**tonumber** は、文字列を数値に変換します。変換できない場合は `nil` を返します。"
        },
        {
          "title": "tonumber の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# tonumber(文字列)\n\n数値として解釈できる文字列を変換します。\n\n**コード例：**\n```lua\nprint(tonumber(\"42\")) -- 42\nprint(tonumber(\"abc\")) -- nil\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- tonumberで数値に変換\nlocal s = \"50\"\nlocal n = tonumber(s)\nprint(n + 10)",
      "holeyCode": "-- tonumberで数値に変換\nlocal s = \"50\"\nlocal n = ___(s)\nprint(n + 10)",
      "correctLines": [
        "local s = \"50\"",
        "local n = tonumber(s)",
        "print(n + 10)"
      ],
      "lineHints": [
        null,
        "tonumber で数値に変換します。",
        null
      ],
      "candidates": {
        "functions": ["tonumber", "number", "int", "toNumber"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "60\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# .. で連結\n\nLuaでは **..** 演算子で文字列を連結します。"
        },
        {
          "title": ".. の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# 文字列1 .. 文字列2\n\n複数の文字列をつなげます。\n\n**コード例：**\n```lua\nlocal s = \"Hello\" .. \" \" .. \"World\"\nprint(s) -- Hello World\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- ..で文字列を連結\nlocal a = \"Lua\"\nlocal b = \"Script\"\nprint(a .. b)",
      "holeyCode": "-- ..で文字列を連結\nlocal a = \"Lua\"\nlocal b = \"Script\"\nprint(a ___ b)",
      "correctLines": [
        "local a = \"Lua\"",
        "local b = \"Script\"",
        "print(a .. b)"
      ],
      "lineHints": [
        null,
        null,
        ".. で連結します。"
      ],
      "candidates": {
        "operators": ["..", "+", "&", "||"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "LuaScript\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 長さを取得\n\n**#** 演算子は、文字列やテーブルの長さを返します。"
        },
        {
          "title": "# の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# #文字列 / #テーブル\n\n文字列のバイト数や配列の要素数を返します。\n\n**コード例：**\n```lua\nprint(#\"hello\") -- 5\nprint(#{1, 2, 3}) -- 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- #で長さを取得\nlocal s = \"Lua\"\nprint(#s)",
      "holeyCode": "-- #で長さを取得\nlocal s = \"Lua\"\nprint(___s)",
      "correctLines": [
        "local s = \"Lua\"",
        "print(#s)"
      ],
      "lineHints": [
        null,
        "# で長さを取得します。"
      ],
      "candidates": {
        "operators": ["#", "$", "@", "&"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# and と or の活用\n\nLuaには三項演算子がありませんが、`and` と `or` で同様のことができます。"
        },
        {
          "title": "and/or パターン",
          "image": "/illustrations/3d/robot.png",
          "content": "# 条件 and 真の値 or 偽の値\n\n条件が真なら左側、偽なら右側の値を返します。\n\n**コード例：**\n```lua\nlocal x = 10 > 5 and \"yes\" or \"no\"\nprint(x) -- yes\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- and/orで条件分岐\nlocal age = 20\nlocal status = age >= 18 and \"adult\" or \"child\"\nprint(status)",
      "holeyCode": "-- and/orで条件分岐\nlocal age = 20\nlocal status = age >= 18 ___ \"adult\" ___ \"child\"\nprint(status)",
      "correctLines": [
        "local age = 20",
        "local status = age >= 18 and \"adult\" or \"child\"",
        "print(status)"
      ],
      "lineHints": [
        null,
        "and と or を使います。",
        null
      ],
      "candidates": {
        "keywords": ["and", "or", "if", "then"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "adult\n"
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
          "image": "/illustrations/3d/robot.png",
          "content": "# ループを抜ける\n\n**break** を使うと、ループを途中で抜けることができます。"
        },
        {
          "title": "break の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# ループ内で break\n\n条件を満たしたらループを終了します。\n\n**コード例：**\n```lua\nfor i = 1, 10 do\n    if i > 5 then break end\n    print(i)\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- breakでループを抜ける\nfor i = 1, 10 do\n    if i > 3 then break end\n    print(i)\nend",
      "holeyCode": "-- breakでループを抜ける\nfor i = 1, 10 do\n    if i > 3 then ___ end\n    print(i)\nend",
      "correctLines": [
        "for i = 1, 10 do",
        "    if i > 3 then break end",
        "    print(i)",
        "end"
      ],
      "lineHints": [
        null,
        "break でループを抜けます。",
        null,
        null
      ],
      "candidates": {
        "keywords": ["break", "continue", "return", "exit"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "1\n2\n3\n"
        }
      ]
    }
  ]
};
