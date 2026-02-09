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
      "correctCode": "-- nameとpriceを持つテーブルを作成\\nlocal item = { name = \"りんご\", price = 100 }\\n-- .でキーにアクセス\\nprint(item.price)",
      "holeyCode": "-- nameとpriceを持つテーブルを作成\\nlocal ___ = { name = \"りんご\", price = 100 }\\n-- .でキーにアクセス\\n___(item.price)",
      "correctLines": [
          "-- nameとpriceを持つテーブルを作成",
          "local item = { name = \"りんご\", price = 100 }",
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
          "others": ["りんご", "100", "item", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "100\\n"
          }
        ]
      },
    {
      "title": "配列としてのテーブル",
      "correctCode": "-- 配列を作成（10, 20, 30の順）\\nlocal nums = {10, 20, 30}\\n-- 2番目の要素にアクセス\\nprint(nums[2])",
      "holeyCode": "-- 配列を作成（10, 20, 30の順）\\nlocal ___ = {10, 20, 30}\\n-- 2番目の要素にアクセス\\n___(nums[2])",
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
          "others": ["10", "30", "nums", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "ipairs でループ",
      "correctCode": "-- 配列を作成（1, 2, 3の順）\\nlocal nums = {1, 2, 3}\\n-- 1番目の i にインデックス、2番目の v に値が入る\\nfor i, v in ipairs(nums) do\\n    -- vを表示\\n    print(v)\\nend",
      "holeyCode": "-- 配列を作成（1, 2, 3の順）\\nlocal ___ = {1, 2, 3}\\n-- 1番目の i にインデックス、2番目の v に値が入る\\nfor i, v in ipairs(nums) ___\\n    -- vを表示\\n    ___(v)\\n___",
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
          "ブロックを終了する。"
        ],
        "candidates": {
          "functions": [
            "ipairs"
          ],
          "others": ["1", "3", "v", "nums", "do", "print", "end", "do"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "1\\n2\\n3\\n"
          }
        ]
      },
    {
      "title": "pairs でループ",
      "correctCode": "-- テーブルを作成\\nlocal t = {x = 10}\\n-- 1番目の k にキー、2番目の v に値が入る\\nfor k, v in pairs(t) do\\n    -- kとvを表示\\n    print(k, v)\\nend",
      "holeyCode": "-- テーブルを作成\\nlocal ___ = {x = 10}\\n-- 1番目の k にキー、2番目の v に値が入る\\nfor k, v in pairs(t) ___\\n    -- kとvを表示\\n    ___(k, v)\\n___",
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
          "ブロックを終了する。"
        ],
        "candidates": {
          "functions": [
            "pairs"
          ],
          "others": ["10", "k", "v", "t", "do", "print", "end", "do"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "x\t10\\n"
          }
        ]
      },
    {
      "title": "関数を定義しよう",
      "correctCode": "-- functionで関数を定義\\nlocal function double(n)\\n    -- n * 2を返す\\n    return n * 2\\nend\\n-- double(5)を呼び出す\\nprint(double(5))",
      "holeyCode": "-- functionで関数を定義\\nlocal function double(___)\\n    -- n * 2を返す\\n    return n * ___\\n___\\n-- double(5)を呼び出す\\n___(double(5))",
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
          "ブロックを終了する。",
          null,
          "double関数を呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "function"
          ],
          "others": ["*", "5", "n", "2", "end", "print", "2", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "複数の戻り値",
      "correctCode": "-- swap関数を定義\\nlocal function swap(a, b)\\n    -- b, aの順で返す\\n    return b, a\\nend\\n-- swap(1, 2)を呼び出す\\nlocal x, y = swap(1, 2)\\n-- xとyを表示（x, yの順）\\nprint(x, y)\\n",
      "holeyCode": "-- swap関数を定義\\nlocal function swap(a, ___)\\n    -- b, aの順で返す\\n    return b, ___\\n___\\n-- swap(1, 2)を呼び出す\\nlocal x, y = swap(___, 2)\\n-- xとyを表示（x, yの順）\\n___(x, y)\\n",
      "correctLines": [
          "-- swap関数を定義",
          "local function swap(a, b)",
          "    -- b, aの順で返す",
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
          "ブロックを終了する。",
          null,
          "1, 2 を渡して呼び出します。",
          null,
          "x と y を表示します。",
          null
        ],
        "candidates": {
          "keywords": [
            "return",
            "swap"
          ],
          "others": ["1", "2", "x", "y", "b", "a", "end", "print", "a", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\t1\\n"
          }
        ]
      },
    {
      "title": "テーブルにメソッドを追加",
      "correctCode": "-- objテーブルを作成\\nlocal obj = { x = 5 }\\n-- メソッドを定義\\nfunction obj:getX()\\n    -- selfで自分自身を参照\\n    return self.x\\nend\\n-- getXを呼び出す\\nprint(obj:getX())",
      "holeyCode": "-- objテーブルを作成\\nlocal ___ = { x = 5 }\\n-- メソッドを定義\\nfunction obj:___()\\n    -- selfで自分自身を参照\\n    return self.___\\n___\\n-- getXを呼び出す\\n___(obj:getX())",
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
          "ブロックを終了する。",
          null,
          "getX メソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "self"
          ],
          "others": ["5", "getX", "obj", "x", "end", "print", "x", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "5\\n"
          }
        ]
      },
    {
      "title": "メタテーブルの基本",
      "correctCode": "-- 空のテーブルを作成\\nlocal t = {}\\n-- メタテーブルを作成\\nlocal mt = { __index = { x = 10 } }\\n-- setmetatableでメタテーブルを設定\\nsetmetatable(t, mt)\\n-- t.xを表示\\nprint(t.x)",
      "holeyCode": "-- 空のテーブルを作成\\nlocal ___ = {}\\n-- メタテーブルを作成\\nlocal ___ = { __index = { x = 10 } }\\n-- setmetatableでメタテーブルを設定\\nsetmetatable(t, ___)\\n-- t.xを表示\\n___(t.x)",
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
          "others": ["10", ".", "t", "mt", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "10\\n"
          }
        ]
      },
    {
      "title": "クロージャを作ろう",
      "correctCode": "-- makeAdder関数を定義\\nlocal function makeAdder(n)\\n    -- returnで関数を返す\\n    return function(x)\\n        -- x + nを返す\\n        return x + n\\n    end\\nend\\n-- makeAdder(5)を呼び出す\\nlocal add5 = makeAdder(5)\\n-- add5(10)を呼び出す\\nprint(add5(10))",
      "holeyCode": "-- makeAdder関数を定義\\nlocal function makeAdder(___)\\n    -- returnで関数を返す\\n    return function(___)\\n        -- x + nを返す\\n        return x + ___\\n    ___\\n___\\n-- makeAdder(5)を呼び出す\\nlocal ___ = makeAdder(5)\\n-- add5(10)を呼び出す\\n___(add5(10))",
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
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "others": ["makeAdder", "+", "5", "10", "n", "x", "end", "add5", "print", "n", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "15\\n"
          }
        ]
      },
    {
      "title": "コルーチンを使おう",
      "correctCode": "-- createでコルーチンを作成\\nlocal co = coroutine.create(function()\\n    -- helloを表示\\n    print(\"こんにちは\")\\nend)\\n-- resumeでコルーチンを実行\\ncoroutine.resume(co)",
      "holeyCode": "-- createでコルーチンを作成\\nlocal ___ = coroutine.create(function()\\n    -- helloを表示\\n    ___(\"こんにちは\")\\n___)\\n-- resumeでコルーチンを実行\\ncoroutine.resume(___)",
      "correctLines": [
          "-- createでコルーチンを作成",
          "local co = coroutine.create(function()",
          "    -- helloを表示",
          "    print(\"こんにちは\")",
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
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "functions": [
            "create"
          ],
          "others": ["こんにちは", "resume", "co", "print", "end"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "こんにちは\\n"
          }
        ]
      }
  ]
}
