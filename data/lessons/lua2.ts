export const lua2Data = {
  "language": "lua",
  "lessonId": "lua-2",
  "lessonTitle": "Lua II - テーブルとメタテーブル",
  "lessonDescription": "Luaの万能データ構造「テーブル」を深く学びます。ゲーム開発で使われる技法を身につけましょう。",
  "lessonDifficulty": "medium",
  "lessonOrder": 2,
  "tutorialSlides": [
    {
      "title": "テーブルの基本",
      "content": "Luaのテーブルは配列とハッシュを兼ねた万能データ構造です。\\n\\n```lua\\n-- キーと値のペア\\nlocal item = { name = \"りんご\", price = 100 }\\nprint(item.name)   -- => りんご\\nprint(item.price)  -- => 100\\n\\n-- 配列としても使える\\nlocal nums = {10, 20, 30}\\nprint(nums[2])  -- => 20（1から始まる）\\n```"
    },
    {
      "title": "ipairs と pairs",
      "content": "テーブルをループするには `ipairs` と `pairs` を使います。\\n\\n```lua\\n-- ipairs: 配列部分のループ（連続した整数インデックス）\\nfor i, v in ipairs({10, 20, 30}) do\\n    print(i, v)\\nend\\n\\n-- pairs: 全てのキー・値をループ\\nfor k, v in pairs({x = 10, y = 20}) do\\n    print(k, v)\\nend\\n```"
    },
    {
      "title": "関数の定義",
      "content": "`function` で関数を定義します。\\n\\n```lua\\nlocal function double(n)\\n    return n * 2\\nend\\n\\nprint(double(5))  -- => 10\\n\\n-- 複数の戻り値を返せる\\nlocal function swap(a, b)\\n    return b, a\\nend\\nlocal x, y = swap(1, 2)\\n-- x = 2, y = 1\\n```"
    },
    {
      "title": "メソッドの定義",
      "content": "`:` を使うとメソッドを定義でき、`self` で自分自身を参照できます。\\n\\n```lua\\nlocal obj = { x = 5 }\\n\\nfunction obj:getX()\\n    return self.x\\nend\\n\\nprint(obj:getX())  -- => 5\\n```\\n\\n`:` は `self` を自動的に渡すシンタックスシュガーです。"
    },
    {
      "title": "メタテーブル",
      "content": "メタテーブルでテーブルの動作をカスタマイズできます。\\n\\n```lua\\nlocal t = {}\\nlocal mt = { __index = { x = 10 } }\\nsetmetatable(t, mt)\\n\\nprint(t.x)  -- => 10\\n```\\n\\n`__index` は存在しないキーにアクセスしたときに呼ばれます。\\n\\nオブジェクト指向やオーバーロードの実現に使われます。"
    },
    {
      "title": "クロージャとコルーチン",
      "content": "関数は環境を持つクロージャになれます。\\n\\n```lua\\nlocal function makeAdder(n)\\n    return function(x)\\n        return x + n  -- nを記憶\\n    end\\nend\\nlocal add5 = makeAdder(5)\\nprint(add5(10))  -- => 15\\n```\\n\\nコルーチンで協調的なマルチタスクも可能です。"
    }
  ],
  "exercises": [
    {
      "title": "テーブルの基本",
      "correctCode": "-- nameとpriceを持つテーブルを作成\\nlocal item = { name = \"りんご\", price = 100 }\\n-- .でキーにアクセス\\nprint(item.price)",
      "holeyCode": "-- nameとpriceを持つテーブルを作成\\nlocal ___ = { ___ = \"___\", ___ = ___ }\\n-- .でキーにアクセス\\n___(___.___)",
      "correctLines": [
          "-- nameとpriceを持つテーブルを作成",
          "local item = { name = \"りんご\", price = 100 }",
          "-- .でキーにアクセス",
          "print(item.price)"
        ],
      "lineHints": [
          null,
          "itemというテーブルを作成し、nameとpriceキーに値を設定します。",
          null,
          "printでitem.priceを表示します。"
        ],
        "candidates": {
          "operators": [
            "."
          ],
          "others": ["りんご", "100", "item", "print", "name", "price"]
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
      "holeyCode": "-- 配列を作成（10, 20, 30の順）\\nlocal ___ = {___, ___, ___}\\n-- 2番目の要素にアクセス\\n___(___[___])",
      "correctLines": [
          "-- 配列を作成（10, 20, 30の順）",
          "local nums = {10, 20, 30}",
          "-- 2番目の要素にアクセス",
          "print(nums[2])"
        ],
      "lineHints": [
          null,
          "numsに10, 20, 30を格納した配列を作成します。",
          null,
          "printでnums[2]を表示します。"
        ],
        "candidates": {
          "numbers": [
            "2", "10", "20", "30"
          ],
          "others": ["nums", "print"]
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
      "holeyCode": "-- 配列を作成（1, 2, 3の順）\\nlocal ___ = {___, ___, ___}\\n-- 1番目の i にインデックス、2番目の v に値が入る\\nfor ___, ___ in ___(___) ___\\n    -- vを表示\\n    ___(___)\\n___",
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
          "numsに1, 2, 3を格納した配列を作成します。",
          null,
          "ipairsでnumsをループし、iにインデックス、vに値が入ります。",
          null,
          "printでvを表示します。",
          "endでブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "ipairs"
          ],
          "numbers": ["1", "2", "3"],
          "others": ["i", "v", "nums", "do", "print", "end"]
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
      "holeyCode": "-- テーブルを作成\\nlocal ___ = {___ = ___}\\n-- 1番目の k にキー、2番目の v に値が入る\\nfor ___, ___ in ___(___) ___\\n    -- kとvを表示\\n    ___(___, ___)\\n___",
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
          "tというテーブルを作成し、xに10を設定します。",
          null,
          "pairsでtをループし、kにキー、vに値が入ります。",
          null,
          "printでkとvを表示します。",
          "endでブロックを終了します。"
        ],
        "candidates": {
          "functions": [
            "pairs"
          ],
          "numbers": ["10"],
          "others": ["k", "v", "t", "x", "do", "print", "end"]
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
      "holeyCode": "-- functionで関数を定義\\nlocal function ___(___)\\n    -- n * 2を返す\\n    return ___ * ___\\n___\\n-- double(5)を呼び出す\\n___(___(___))",
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
          "doubleという関数を引数nで定義します。",
          null,
          "returnでn * 2を返します。",
          "endでブロックを終了します。",
          null,
          "printでdouble(5)の結果を表示します。"
        ],
        "candidates": {
          "keywords": [
            "function", "return"
          ],
          "numbers": ["2", "5"],
          "others": ["*", "n", "double", "end", "print"]
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
      "correctCode": "-- swap関数を定義\\nlocal function swap(a, b)\\n    -- b, aの順で返す\\n    return b, a\\nend\\n-- swap関数を呼び出し（第1引数に1, 第2引数に2）\\nlocal x, y = swap(1, 2)\\n-- xとyを表示（x, yの順）\\nprint(x, y)\\n",
      "holeyCode": "-- swap関数を定義\\nlocal function ___(___,  ___)\\n    -- b, aの順で返す\\n    return ___, ___\\n___\\n-- swap関数を呼び出し（第1引数に1, 第2引数に2）\\nlocal ___, ___ = ___(___, ___)\\n-- xとyを表示（x, yの順）\\n___(___, ___)\\n",
      "correctLines": [
          "-- swap関数を定義",
          "local function swap(a, b)",
          "    -- b, aの順で返す",
          "    return b, a",
          "end",
          "-- swap関数を呼び出し（第1引数に1, 第2引数に2）",
          "local x, y = swap(1, 2)",
          "-- xとyを表示（x, yの順）",
          "print(x, y)",
          ""
        ],
      "lineHints": [
          null,
          "swapという関数を引数a, bで定義します。",
          null,
          "returnでb, aの順に返します。",
          "endでブロックを終了します。",
          null,
          "swap(1, 2)を呼び出し、結果をx, yに代入します。",
          null,
          "printでx, yを表示します。",
          null
        ],
        "candidates": {
          "keywords": [
            "return"
          ],
          "numbers": ["1", "2"],
          "others": ["swap", "x", "y", "a", "b", "end", "print"]
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
      "holeyCode": "-- objテーブルを作成\\nlocal ___ = { ___ = ___ }\\n-- メソッドを定義\\nfunction ___:___()\\n    -- selfで自分自身を参照\\n    return ___.___ \\n___\\n-- getXを呼び出す\\n___(___:___())",
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
          "objというテーブルを作成し、xに5を設定します。",
          null,
          "obj:getXというメソッドを定義します。",
          null,
          "returnでself.xを返します。",
          "endでブロックを終了します。",
          null,
          "printでobj:getX()の結果を表示します。"
        ],
        "candidates": {
          "keywords": [
            "self", "function", "return"
          ],
          "numbers": ["5"],
          "others": ["getX", "obj", "x", "end", "print"]
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
      "holeyCode": "-- 空のテーブルを作成\\nlocal ___ = {}\\n-- メタテーブルを作成\\nlocal ___ = { ___ = { ___ = ___ } }\\n-- setmetatableでメタテーブルを設定\\n___(___, ___)\\n-- t.xを表示\\n___(___.___)",
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
          "tという空のテーブルを作成します。",
          null,
          "mtというメタテーブルを作成し、__indexにx = 10を設定します。",
          null,
          "setmetatableでtにmtを設定します。",
          null,
          "printでt.xを表示します。"
        ],
        "candidates": {
          "functions": [
            "setmetatable"
          ],
          "numbers": ["10"],
          "others": [".", "__index", "t", "mt", "x", "print"]
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
      "holeyCode": "-- makeAdder関数を定義\\nlocal function ___(___)\\n    -- returnで関数を返す\\n    return function(___)\\n        -- x + nを返す\\n        return ___ + ___\\n    ___\\n___\\n-- makeAdder(5)を呼び出す\\nlocal ___ = ___(___)\\n-- add5(10)を呼び出す\\n___(___(___))",
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
          "makeAdderという関数を引数nで定義します。",
          null,
          "returnで引数xを受け取る関数を返します。",
          null,
          "returnでx + nを返します。",
          "endで内側の関数を終了します。",
          "endで外側の関数を終了します。",
          null,
          "makeAdder(5)を呼び出し、結果をadd5に代入します。",
          null,
          "printでadd5(10)の結果を表示します。"
        ],
        "candidates": {
          "keywords": [
            "return", "function"
          ],
          "numbers": ["5", "10"],
          "others": ["makeAdder", "+", "n", "x", "end", "add5", "print"]
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
      "holeyCode": "-- createでコルーチンを作成\\nlocal ___ = ___.___(___()\\n    -- helloを表示\\n    ___(\"___\")\\n___)\\n-- resumeでコルーチンを実行\\n___.___(___)",
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
          "coroutine.createで無名関数を渡してコルーチンcoを作成します。",
          null,
          "printで「こんにちは」を表示します。",
          "end)で関数定義を終了します。",
          null,
          "coroutine.resumeでcoを実行します。"
        ],
        "candidates": {
          "functions": [
            "create", "resume"
          ],
          "others": ["こんにちは", "coroutine", "co", "print", "end", "function"]
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
