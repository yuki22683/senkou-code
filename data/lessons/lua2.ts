export const lua2Data = {
  "language": "lua",
  "lessonId": "lua-2",
  "lessonTitle": "Lua II - テーブルとメタテーブル",
  "lessonDescription": "Luaの万能データ構造「テーブル」を深く学びます。ゲーム開発で使われる技法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "exercises": [
    {
        "title": "テーブルの基本",
        "description": "Luaの万能データ構造「テーブル」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 1,
        "tutorialSlides": [
          {
            "title": "テーブルとは？",
            "content": "# 万能のデータ構造\n\n**テーブル** は、Luaで唯一のデータ構造です。配列としても辞書としても使えます。"
          },
          {
            "title": "テーブルの作成",
            "content": "# { } で作成\n\n`{ }` でテーブルを作り、キーと値を格納します。\n\n**コード例：**\n```lua\nlocal t = { name = \"Taro\", age = 20 }\nprint(t.name) -- Taro\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- nameとpriceを持つテーブルを作成\nlocal item = { name = \"Apple\", price = 100 }\n-- .でキーにアクセス\nprint(item.price)",
        "holeyCode": "-- nameとpriceを持つテーブルを作成\nlocal item = { name = \"___\", price = ___ }\n-- .でキーにアクセス\nprint(item___price)",
        "correctLines": [
          "-- nameとpriceを持つテーブルを作成",
          "local item = { name = \"Apple\", price = 100 }",
          "-- .でキーにアクセス",
          "print(item.price)"
        ],
        "lineHints": [
          null,
          "テーブルを作成します。",
          null,
          ". でキーにアクセスします。"
        ],
        "candidates": {
          "operators": [
            "."
          ],
          "others": [
            "Apple",
            "100"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\n"
          }
        ]
      },
    {
        "title": "配列としてのテーブル",
        "description": "テーブルを配列として使う方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 2,
        "tutorialSlides": [
          {
            "title": "配列風テーブル",
            "content": "# インデックスは1から\n\nLuaのテーブルを配列として使うとき、インデックスは **1** から始まります。"
          },
          {
            "title": "配列の作成",
            "content": "# { } に値を並べる\n\n値を並べると自動で番号がつきます。\n\n**コード例：**\n```lua\nlocal nums = {10, 20, 30}\nprint(nums[1]) -- 10\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 配列を作成（10, 20, 30の順）\nlocal nums = {10, 20, 30}\n-- 2番目の要素にアクセス\nprint(nums[2])",
        "holeyCode": "-- 配列を作成（10, 20, 30の順）\nlocal nums = {___, 20, ___}\n-- 2番目の要素にアクセス\nprint(nums[___])",
        "correctLines": [
          "-- 配列を作成（10, 20, 30の順）",
          "local nums = {10, 20, 30}",
          "-- 2番目の要素にアクセス",
          "print(nums[2])"
        ],
        "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "2番目の要素にアクセスします。"
        ],
        "candidates": {
          "numbers": [
            "2"
          ],
          "others": [
            "10",
            "30"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\n"
          }
        ]
      },
    {
        "title": "ipairs でループ",
        "description": "配列を順番に処理する「ipairs」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 3,
        "tutorialSlides": [
          {
            "title": "ipairs とは？",
            "content": "# 配列をループ\n\n**ipairs** は、配列のインデックスと値を順番に取り出します。"
          },
          {
            "title": "ipairs の使い方",
            "content": "# for i, v in ipairs(t)\n\nインデックス i と値 v を受け取ります。\n\n**コード例：**\n```lua\nfor i, v in ipairs({1, 2, 3}) do\n    print(v)\nend\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 配列を作成（1, 2, 3の順）\nlocal nums = {1, 2, 3}\n-- 1番目の i にインデックス、2番目の v に値が入る\nfor i, v in ipairs(nums) do\n    -- vを表示\n    print(v)\nend",
        "holeyCode": "-- 配列を作成（1, 2, 3の順）\nlocal nums = {___, 2, ___}\n-- 1番目の i にインデックス、2番目の v に値が入る\nfor i, v in ___(nums) do\n    -- vを表示\n    print(___)\nend",
        "correctLines": [
          "-- 配列を作成（1, 2, 3の順）",
          "local nums = {1, 2, 3}",
          "-- 1番目の i にインデックス、2番目の v に値が入る",
          "for i, v in ipairs(nums) do",
          "    -- vを表示",
          "    print(v)",
          "end"
        ],
        "lineHints": [
          null,
          "複数の値をまとめて格納する配列（またはリスト）を作成します。",
          null,
          "ipairs で配列をループします。",
          null,
          "変数の内容を画面に出力します。",
          null
        ],
        "candidates": {
          "functions": [
            "ipairs"
          ],
          "others": [
            "1",
            "3",
            "v"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\n2\n3\n"
          }
        ]
      },
    {
        "title": "pairs でループ",
        "description": "テーブルのすべてのキーと値を処理する「pairs」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 4,
        "tutorialSlides": [
          {
            "title": "pairs とは？",
            "content": "# すべてをループ\n\n**pairs** は、テーブルのすべてのキーと値を取り出します。"
          },
          {
            "title": "pairs の使い方",
            "content": "# for k, v in pairs(t)\n\nキー k と値 v を受け取ります。\n\n**コード例：**\n```lua\nfor k, v in pairs({a = 1, b = 2}) do\n    print(k, v)\nend\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- テーブルを作成\nlocal t = {x = 10}\n-- 1番目の k にキー、2番目の v に値が入る\nfor k, v in pairs(t) do\n    -- kとvを表示\n    print(k, v)\nend",
        "holeyCode": "-- テーブルを作成\nlocal t = {x = ___}\n-- 1番目の k にキー、2番目の v に値が入る\nfor k, v in ___(t) do\n    -- kとvを表示\n    print(___, ___)\nend",
        "correctLines": [
          "-- テーブルを作成",
          "local t = {x = 10}",
          "-- 1番目の k にキー、2番目の v に値が入る",
          "for k, v in pairs(t) do",
          "    -- kとvを表示",
          "    print(k, v)",
          "end"
        ],
        "lineHints": [
          null,
          "テーブルを作成します。",
          null,
          "pairs ですべてのキーと値をループします。",
          null,
          "k と v を表示します。",
          null
        ],
        "candidates": {
          "functions": [
            "pairs"
          ],
          "others": [
            "10",
            "k",
            "v"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "x\t10\n"
          }
        ]
      },
    {
        "title": "関数を定義しよう",
        "description": "Luaでの関数定義を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 5,
        "tutorialSlides": [
          {
            "title": "function とは？",
            "content": "# 関数の定義\n\n**function** キーワードで関数を定義します。`local function` でローカル関数にできます。"
          },
          {
            "title": "function の使い方",
            "content": "# return で値を返す\n\n`return` で値を返します。\n\n**コード例：**\n```lua\nlocal function add(a, b)\n    return a + b\nend\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- functionで関数を定義\nlocal function double(n)\n    -- n * 2を返す\n    return n * 2\nend\n-- double(5)を呼び出す\nprint(double(5))",
        "holeyCode": "-- functionで関数を定義\nlocal ___ double(n)\n    -- n * 2を返す\n    return n ___ 2\nend\n-- double(5)を呼び出す\nprint(double(___))",
        "correctLines": [
          "-- functionで関数を定義",
          "local function double(n)",
          "    -- n * 2を返す",
          "    return n * 2",
          "end",
          "-- double(5)を呼び出す",
          "print(double(5))"
        ],
        "lineHints": [
          null,
          "function で関数を定義します。",
          null,
          "* で掛け算します。",
          "double関数を呼び出します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "function"
          ],
          "others": [
            "*",
            "5"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\n"
          }
        ]
      },
    {
        "title": "複数の戻り値",
        "description": "関数から複数の値を返す方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 6,
        "tutorialSlides": [
          {
            "title": "複数の return",
            "content": "# 複数の値を返せる\n\nLuaでは、関数から複数の値を返すことができます。"
          },
          {
            "title": "複数の戻り値",
            "content": "# カンマで区切る\n\n`return a, b` で複数の値を返します。\n\n**コード例：**\n```lua\nlocal function minmax(a, b)\n    if a < b then return a, b end\n    return b, a\nend\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- swap関数を定義\nlocal function swap(a, b)\n    -- returnで値を返す\n    return b, a\nend\n-- swap(1, 2)を呼び出す\nlocal x, y = swap(1, 2)\n-- xとyを表示（x, yの順）\nprint(x, y)\n",
        "holeyCode": "-- swap関数を定義\nlocal function ___(a, b)\n    -- returnで値を返す\n    ___ b, a\nend\n-- swap(1, 2)を呼び出す\nlocal x, y = swap(___, ___)\n-- xとyを表示（x, yの順）\nprint(___, ___)\n",
        "correctLines": [
          "-- swap関数を定義",
          "local function swap(a, b)",
          "    -- returnで値を返す",
          "    return b, a",
          "end",
          "-- swap(1, 2)を呼び出す",
          "local x, y = swap(1, 2)",
          "-- xとyを表示（x, yの順）",
          "print(x, y)",
          ""
        ],
        "lineHints": [
          null,
          "swap という関数を定義します。",
          null,
          "return で複数の値を返します。",
          "1, 2 を渡して呼び出します。",
          null,
          "x と y を表示します。",
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "return",
            "swap"
          ],
          "others": [
            "1",
            "2",
            "x",
            "y"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\t1\n"
          }
        ]
      },
    {
        "title": "テーブルにメソッドを追加",
        "description": "テーブルに関数を持たせる方法を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 7,
        "tutorialSlides": [
          {
            "title": "メソッドとは？",
            "content": "# テーブルの関数\n\nテーブルに関数を格納すると、オブジェクトのようにメソッドを持たせられます。"
          },
          {
            "title": "コロン記法",
            "content": "# : で self を渡す\n\n`obj:method()` と呼ぶと、自動で `self` が渡されます。\n\n**コード例：**\n```lua\nlocal obj = { value = 10 }\nfunction obj:double()\n    return self.value * 2\nend\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- objテーブルを作成\nlocal obj = { x = 5 }\n-- メソッドを定義\nfunction obj:getX()\n    -- selfで自分自身を参照\n    return self.x\nend\n-- getXを呼び出す\nprint(obj:getX())",
        "holeyCode": "-- objテーブルを作成\nlocal obj = { x = ___ }\n-- メソッドを定義\nfunction obj:___()\n    -- selfで自分自身を参照\n    return ___.x\nend\n-- getXを呼び出す\nprint(obj:___())",
        "correctLines": [
          "-- objテーブルを作成",
          "local obj = { x = 5 }",
          "-- メソッドを定義",
          "function obj:getX()",
          "    -- selfで自分自身を参照",
          "    return self.x",
          "end",
          "-- getXを呼び出す",
          "print(obj:getX())"
        ],
        "lineHints": [
          null,
          "テーブルを作成します。",
          null,
          "メソッドを定義します。",
          null,
          "self で自分自身を参照します。",
          "getX メソッドを呼び出します。",
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "self"
          ],
          "others": [
            "5",
            "getX"
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
        "title": "メタテーブルの基本",
        "description": "テーブルの振る舞いをカスタマイズする「メタテーブル」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 8,
        "tutorialSlides": [
          {
            "title": "メタテーブルとは？",
            "content": "# 振る舞いをカスタマイズ\n\n**メタテーブル** を使うと、テーブルの演算子や動作をカスタマイズできます。"
          },
          {
            "title": "setmetatable",
            "content": "# メタテーブルを設定\n\n`setmetatable(t, mt)` でメタテーブルを設定します。\n\n**コード例：**\n```lua\nlocal mt = { __add = function(a, b) ... end }\nsetmetatable(t, mt)\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- 空のテーブルを作成\nlocal t = {}\n-- メタテーブルを作成\nlocal mt = { __index = { x = 10 } }\n-- setmetatableでメタテーブルを設定\nsetmetatable(t, mt)\n-- t.xを表示\nprint(t.x)",
        "holeyCode": "-- 空のテーブルを作成\nlocal t = {___}\n-- メタテーブルを作成\nlocal mt = { __index = { x = ___ } }\n-- setmetatableでメタテーブルを設定\n___(t, mt)\n-- t.xを表示\nprint(t___x)",
        "correctLines": [
          "-- 空のテーブルを作成",
          "local t = {}",
          "-- メタテーブルを作成",
          "local mt = { __index = { x = 10 } }",
          "-- setmetatableでメタテーブルを設定",
          "setmetatable(t, mt)",
          "-- t.xを表示",
          "print(t.x)"
        ],
        "lineHints": [
          null,
          "空のテーブルを作成します。",
          null,
          "__index でデフォルト値を設定します。",
          null,
          "setmetatable でメタテーブルを設定します。",
          null,
          "t.x の値を表示します。"
        ],
        "candidates": {
          "functions": [
            "setmetatable"
          ],
          "others": [
            "10",
            "."
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\n"
          }
        ]
      },
    {
        "title": "クロージャを作ろう",
        "description": "外の変数を捕捉する「クロージャ」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 9,
        "tutorialSlides": [
          {
            "title": "クロージャとは？",
            "content": "# 外の変数を覚える\n\n**クロージャ** は、定義時の環境（外側の変数）を捕捉した関数です。"
          },
          {
            "title": "クロージャの使い方",
            "content": "# 状態を保持\n\nクロージャを使って状態を保持できます。\n\n**コード例：**\n```lua\nlocal function counter()\n    local count = 0\n    return function()\n        count = count + 1\n        return count\n    end\nend\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- makeAdder関数を定義\nlocal function makeAdder(n)\n    -- returnで関数を返す\n    return function(x)\n        -- x + nを返す\n        return x + n\n    end\nend\n-- makeAdder(5)を呼び出す\nlocal add5 = makeAdder(5)\n-- add5(10)を呼び出す\nprint(add5(10))",
        "holeyCode": "-- makeAdder関数を定義\nlocal function ___(n)\n    -- returnで関数を返す\n    ___ function(x)\n        -- x + nを返す\n        return x ___ n\n    end\nend\n-- makeAdder(5)を呼び出す\nlocal add5 = makeAdder(___)\n-- add5(10)を呼び出す\nprint(add5(___))",
        "correctLines": [
          "-- makeAdder関数を定義",
          "local function makeAdder(n)",
          "    -- returnで関数を返す",
          "    return function(x)",
          "        -- x + nを返す",
          "        return x + n",
          "    end",
          "end",
          "-- makeAdder(5)を呼び出す",
          "local add5 = makeAdder(5)",
          "-- add5(10)を呼び出す",
          "print(add5(10))"
        ],
        "lineHints": [
          null,
          "makeAdder 関数を定義します。",
          null,
          "return で関数を返します。",
          null,
          "x + n を返します。",
          "makeAdder(5) を呼び出します。",
          "add5(10) を呼び出します。",
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": [
            "makeAdder",
            "+",
            "5",
            "10"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\n"
          }
        ]
      },
    {
        "title": "コルーチンを使おう",
        "description": "処理を中断・再開できる「コルーチン」を学びましょう。",
        "difficulty": "medium",
        "orderIndex": 10,
        "tutorialSlides": [
          {
            "title": "コルーチンとは？",
            "content": "# 中断と再開\n\n**コルーチン** は、実行を中断して後で再開できる特殊な関数です。ゲームのアニメーションなどに使います。"
          },
          {
            "title": "coroutine.create",
            "content": "# 基本の使い方\n\n`create` で作成、`resume` で実行、`yield` で中断します。\n\n**コード例：**\n```lua\nlocal co = coroutine.create(function()\n    print(\"start\")\n    coroutine.yield()\n    print(\"end\")\nend)\n```"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "-- createでコルーチンを作成\nlocal co = coroutine.create(function()\n    -- helloを表示\n    print(\"hello\")\nend)\n-- resumeでコルーチンを実行\ncoroutine.resume(co)",
        "holeyCode": "-- createでコルーチンを作成\nlocal co = coroutine.___(function()\n    -- helloを表示\n    print(\"___\")\nend)\n-- resumeでコルーチンを実行\ncoroutine.___(co)",
        "correctLines": [
          "-- createでコルーチンを作成",
          "local co = coroutine.create(function()",
          "    -- helloを表示",
          "    print(\"hello\")",
          "end)",
          "-- resumeでコルーチンを実行",
          "coroutine.resume(co)"
        ],
        "lineHints": [
          null,
          "create でコルーチンを作成します。",
          null,
          "hello を表示します。",
          "resume で実行します。",
          null,
          null
        ],
        "candidates": {
          "functions": [
            "create"
          ],
          "others": [
            "hello",
            "resume"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "hello\n"
          }
        ]
      }
  ]
}
