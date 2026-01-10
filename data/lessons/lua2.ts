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
          "image": "/illustrations/3d/robot.png",
          "content": "# 万能のデータ構造\n\n**テーブル** は、Luaで唯一のデータ構造です。配列としても辞書としても使えます。"
        },
        {
          "title": "テーブルの作成",
          "image": "/illustrations/3d/robot.png",
          "content": "# { } で作成\n\n`{ }` でテーブルを作り、キーと値を格納します。\n\n**コード例：**\n```lua\nlocal t = { name = \"Taro\", age = 20 }\nprint(t.name) -- Taro\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local item = { name = \"Apple\", price = 100 }\n-- .でキーにアクセス\nprint(item.price)",
      "holeyCode": "-- nameとpriceを持つテーブルを作成\nlocal item = { name = \"___\", price = ___ }\n-- .でキーにアクセス\nprint(item___price)",
      "correctLines": [
        "local item = { name = \"Apple\", price = 100 }",
        "print(item.price)"
      ],
      "lineHints": [
        "",
        ". でキーにアクセスします。"
      ],
      "candidates": {
        "operators": ["."]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# インデックスは1から\n\nLuaのテーブルを配列として使うとき、インデックスは **1** から始まります。"
        },
        {
          "title": "配列の作成",
          "image": "/illustrations/3d/robot.png",
          "content": "# { } に値を並べる\n\n値を並べると自動で番号がつきます。\n\n**コード例：**\n```lua\nlocal nums = {10, 20, 30}\nprint(nums[1]) -- 10\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 配列を作成（10, 20, 30の順）\nlocal nums = {10, 20, 30}\n-- 2番目の要素にアクセス\nprint(nums[2])",
      "holeyCode": "-- 配列を作成（10, 20, 30の順）\nlocal nums = {___, 20, ___}\n-- 2番目の要素にアクセス\nprint(nums[___])",
      "correctLines": [
        "local nums = {10, 20, 30}",
        "print(nums[2])"
      ],
      "lineHints": [
        "",
        "2番目の要素にアクセスします。"
      ],
      "candidates": {
        "numbers": ["2"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 配列をループ\n\n**ipairs** は、配列のインデックスと値を順番に取り出します。"
        },
        {
          "title": "ipairs の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# for i, v in ipairs(t)\n\nインデックス i と値 v を受け取ります。\n\n**コード例：**\n```lua\nfor i, v in ipairs({1, 2, 3}) do\n    print(v)\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- 配列を作成（1, 2, 3の順）\nlocal nums = {1, 2, 3}\n-- 1番目の i にインデックス、2番目の v に値が入る\nfor i, v in ipairs(nums) do\n    print(v)\nend",
      "holeyCode": "-- 配列を作成（1, 2, 3の順）\nlocal nums = {___, 2, ___}\n-- 1番目の i にインデックス、2番目の v に値が入る\nfor i, v in ___(nums) do\n    -- vを表示\n    print(___)\nend",
      "correctLines": [
        "local nums = {1, 2, 3}",
        "for i, v in ipairs(nums) do",
        "    print(v)",
        "end"
      ],
      "lineHints": [
        "",
        "ipairs で配列をループします。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["ipairs"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# すべてをループ\n\n**pairs** は、テーブルのすべてのキーと値を取り出します。"
        },
        {
          "title": "pairs の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# for k, v in pairs(t)\n\nキー k と値 v を受け取ります。\n\n**コード例：**\n```lua\nfor k, v in pairs({a = 1, b = 2}) do\n    print(k, v)\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local t = {x = 10}\n-- 1番目の k にキー、2番目の v に値が入る\nfor k, v in pairs(t) do\n    print(k, v)\nend",
      "holeyCode": "-- テーブルを作成\nlocal t = {x = ___}\n-- 1番目の k にキー、2番目の v に値が入る\nfor k, v in ___(t) do\n    -- kとvを表示\n    print(___, ___)\nend",
      "correctLines": [
        "local t = {x = 10}",
        "for k, v in pairs(t) do",
        "    print(k, v)",
        "end"
      ],
      "lineHints": [
        "",
        "pairs ですべてのキーと値をループします。",
        "",
        ""
      ],
      "candidates": {
        "functions": ["pairs"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 関数の定義\n\n**function** キーワードで関数を定義します。`local function` でローカル関数にできます。"
        },
        {
          "title": "function の使い方",
          "image": "/illustrations/3d/robot.png",
          "content": "# return で値を返す\n\n`return` で値を返します。\n\n**コード例：**\n```lua\nlocal function add(a, b)\n    return a + b\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- functionで関数を定義\nlocal function double(n)\n    return n * 2\nend\nprint(double(5))",
      "holeyCode": "-- functionで関数を定義\nlocal ___ double(n)\n    -- n * 2を返す\n    return n ___ 2\nend\n-- double(5)を呼び出す\nprint(double(___))",
      "correctLines": [
        "local function double(n)",
        "    return n * 2",
        "end",
        "print(double(5))"
      ],
      "lineHints": [
        "function で関数を定義します。",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["function"]
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
          "image": "/illustrations/3d/return.png",
          "content": "# 複数の値を返せる\n\nLuaでは、関数から複数の値を返すことができます。"
        },
        {
          "title": "複数の戻り値",
          "image": "/illustrations/3d/return.png",
          "content": "# カンマで区切る\n\n`return a, b` で複数の値を返します。\n\n**コード例：**\n```lua\nlocal function minmax(a, b)\n    if a < b then return a, b end\n    return b, a\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local function swap(a, b)\n    -- returnで値を返す\n    return b, a\nend\nlocal x, y = swap(1, 2)\n-- xとyを表示（x, yの順）\nprint(x, y)",
      "holeyCode": "-- swap関数を定義\nlocal function ___(a, b)\n    -- returnで値を返す\n    ___ b, a\nend\n-- swap(1, 2)を呼び出す\nlocal x, y = swap(___, ___)\n-- xとyを表示（x, yの順）\nprint(___, ___)\n",
      "correctLines": [
        "local function swap(a, b)",
        "    return b, a",
        "end",
        "local x, y = swap(1, 2)",
        "print(x, y)"
      ],
      "lineHints": [
        "swap という関数を定義します。",
        "return で複数の値を返します。",
        "",
        "1, 2 を渡して呼び出します。",
        "x と y を表示します。"
      ],
      "candidates": {
        "keywords": ["return", "swap"]
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
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# テーブルの関数\n\nテーブルに関数を格納すると、オブジェクトのようにメソッドを持たせられます。"
        },
        {
          "title": "コロン記法",
          "image": "/illustrations/3d/robot.png",
          "content": "# : で self を渡す\n\n`obj:method()` と呼ぶと、自動で `self` が渡されます。\n\n**コード例：**\n```lua\nlocal obj = { value = 10 }\nfunction obj:double()\n    return self.value * 2\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local obj = { x = 5 }\nfunction obj:getX()\n    -- selfで自分自身を参照\n    return self.x\nend\nprint(obj:getX())",
      "holeyCode": "-- objテーブルを作成\nlocal obj = { x = ___ }\n-- メソッドを定義\nfunction obj:___()\n    -- selfで自分自身を参照\n    return ___.x\nend\n-- getXを呼び出す\nprint(obj:___())",
      "correctLines": [
        "local obj = { x = 5 }",
        "function obj:getX()",
        "    return self.x",
        "end",
        "print(obj:getX())"
      ],
      "lineHints": [
        "",
        "",
        "self で自分自身を参照します。",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["self"]
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 振る舞いをカスタマイズ\n\n**メタテーブル** を使うと、テーブルの演算子や動作をカスタマイズできます。"
        },
        {
          "title": "setmetatable",
          "image": "/illustrations/3d/robot.png",
          "content": "# メタテーブルを設定\n\n`setmetatable(t, mt)` でメタテーブルを設定します。\n\n**コード例：**\n```lua\nlocal mt = { __add = function(a, b) ... end }\nsetmetatable(t, mt)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local t = {}\nlocal mt = { __index = { x = 10 } }\n-- setmetatableでメタテーブルを設定\nsetmetatable(t, mt)\nprint(t.x)",
      "holeyCode": "-- 空のテーブルを作成\nlocal t = {___}\n-- メタテーブルを作成\nlocal mt = { __index = { x = ___ } }\n-- setmetatableでメタテーブルを設定\n___(t, mt)\n-- t.xを表示\nprint(t___x)",
      "correctLines": [
        "local t = {}",
        "local mt = { __index = { x = 10 } }",
        "setmetatable(t, mt)",
        "print(t.x)"
      ],
      "lineHints": [
        "",
        "__index でデフォルト値を設定します。",
        "setmetatable でメタテーブルを設定します。",
        ""
      ],
      "candidates": {
        "functions": ["setmetatable"]
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
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 外の変数を覚える\n\n**クロージャ** は、定義時の環境（外側の変数）を捕捉した関数です。"
        },
        {
          "title": "クロージャの使い方",
          "image": "/illustrations/3d_advanced/lambda_spark.png",
          "content": "# 状態を保持\n\nクロージャを使って状態を保持できます。\n\n**コード例：**\n```lua\nlocal function counter()\n    local count = 0\n    return function()\n        count = count + 1\n        return count\n    end\nend\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "local function makeAdder(n)\n    -- returnで関数を返す\n    return function(x)\n        return x + n\n    end\nend\nlocal add5 = makeAdder(5)\nprint(add5(10))",
      "holeyCode": "-- makeAdder関数を定義\nlocal function ___(n)\n    -- returnで関数を返す\n    ___ function(x)\n        -- x + nを返す\n        return x ___ n\n    end\nend\n-- makeAdder(5)を呼び出す\nlocal add5 = makeAdder(___)\n-- add5(10)を呼び出す\nprint(add5(___))",
      "correctLines": [
        "local function makeAdder(n)",
        "    return function(x)",
        "        return x + n",
        "    end",
        "end",
        "local add5 = makeAdder(5)",
        "print(add5(10))"
      ],
      "lineHints": [
        "",
        "return で関数を返します。",
        "",
        "",
        "",
        "",
        ""
      ],
      "candidates": {
        "keywords": ["return"]
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
          "image": "/illustrations/3d_advanced/concurrency.png",
          "content": "# 中断と再開\n\n**コルーチン** は、実行を中断して後で再開できる特殊な関数です。ゲームのアニメーションなどに使います。"
        },
        {
          "title": "coroutine.create",
          "image": "/illustrations/3d/robot.png",
          "content": "# 基本の使い方\n\n`create` で作成、`resume` で実行、`yield` で中断します。\n\n**コード例：**\n```lua\nlocal co = coroutine.create(function()\n    print(\"start\")\n    coroutine.yield()\n    print(\"end\")\nend)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "-- createでコルーチンを作成\nlocal co = coroutine.create(function()\n    print(\"hello\")\nend)\ncoroutine.resume(co)",
      "holeyCode": "-- createでコルーチンを作成\nlocal co = coroutine.___(function()\n    -- helloを表示\n    print(\"___\")\nend)\n-- resumeでコルーチンを実行\ncoroutine.___(co)",
      "correctLines": [
        "local co = coroutine.create(function()",
        "    print(\"hello\")",
        "end)",
        "coroutine.resume(co)"
      ],
      "lineHints": [
        "create でコルーチンを作成します。",
        "",
        "",
        "resume で実行します。"
      ],
      "candidates": {
        "functions": ["create"]
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
