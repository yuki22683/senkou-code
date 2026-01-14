export const pythonData4 = {
  "language": "python",
  "lessonId": "python-4",
  "lessonTitle": "Python IV - オブジェクト指向の極意",
  "lessonDescription": "Pythonのオブジェクト指向プログラミングを深く学びます。継承、多重継承、抽象クラス、プロパティなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "exercises": [
    {
      "title": "クラスの継承",
      "description": "親クラスの機能を子クラスに引き継ぎましょう。",
      "difficulty": "hard",
      "orderIndex": 1,
      "tutorialSlides": [
        {
          "title": "継承（けいしょう）とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 親の能力を子供が受け継ぐ！\n\n**継承（けいしょう）** とは、既存のクラスの機能を **そのまま引き継いで** 新しいクラスを作ることです。\n\n現実世界で考えてみましょう：\n- **親クラス（Animal）** = 動物の基本的な性質\n- **子クラス（Dog）** = 動物の性質 + 犬特有の性質\n\n犬は「動物」なので、動物の機能は全部持っています。でも、犬だけの特別な機能も追加できます！\n\n**例：** 動物クラスを継承して犬クラスを作ろう！\n\n```python\nclass Animal:\n    def speak(self):\n        print('...')\n\nclass Dog(Animal):  # Animalを継承\n    def speak(self):\n        print('Woof!')  # 犬専用の鳴き声\n```\n\n**ポイント：** `class Dog(Animal):` の `(Animal)` で「Animalを継承する」という意味になります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 動物を表す親クラスを定義\nclass Animal:\n    # インスタンスを初期設定するメソッドを定義\n    def __init__(self, name):\n        # 名前を属性に保存\n        self.name = name\n\n# 親クラスを継承してDogクラスを定義\nclass Dog(Animal):\n    # 鳴き声を表示するメソッドを定義\n    def bark(self):\n        # 名前を含めたメッセージを表示\n        print(f'{self.name} says Woof!')\n\n# 'Pochi'という名前で犬のインスタンスを作成\ndog = Dog('Pochi')\n# インスタンスのメソッドを実行\ndog.bark()",
      "holeyCode": "# 動物を表す親クラスを定義\nclass ___:\n    # インスタンスを初期設定するメソッドを定義\n    def ___:\n        # 名前を属性に保存\n        self.name = ___\n\n# Animalを継承してDogクラスを定義\nclass Dog(___):\n    # 鳴き声を表示するメソッドを定義\n    def ___:\n        # 名前を含めたメッセージを表示\n        print(___)\n\n# 'Pochi'という名前で犬のインスタンスを作成\ndog = ___\n# インスタンスのメソッドを実行\n___",
      "correctLines": [
        "# 動物を表す親クラスを定義",
        "class Animal:",
        "    # インスタンスを初期設定するメソッドを定義",
        "    def __init__(self, name):",
        "        # 名前を属性に保存",
        "        self.name = name",
        "",
        "# Animalを継承してDogクラスを定義",
        "class Dog(Animal):",
        "    # 鳴き声を表示するメソッドを定義",
        "    def bark(self):",
        "        # 名前を含めたメッセージを表示",
        "        print(f'{self.name} says Woof!')",
        "",
        "# 'Pochi'という名前で犬のインスタンスを作成",
        "dog = Dog('Pochi')",
        "# インスタンスのメソッドを実行",
        "dog.bark()"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "親クラス名を括弧内に書きます。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["Animal", "Object", "Base"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Pochi says Woof!\n"
        }
      ]
    },
    {
      "title": "super()で親を呼ぶ",
      "description": "親クラスのメソッドを子クラスから呼び出しましょう。",
      "difficulty": "hard",
      "orderIndex": 2,
      "tutorialSlides": [
        {
          "title": "super()とは？",
          "image": "/illustrations/3d/super_parent_call.png",
          "content": "# 親クラスのメソッドを呼び出そう！\n\n**super（スーパー）** を使うと、**親クラスのメソッドを呼び出す** ことができます。\n\n「super」は「上の」という意味です。継承で「上にいる」親クラスを指します。\n\n**なぜ必要？**\n\n子クラスで `__init__` を作ると、親の `__init__` が上書きされてしまいます。\n親の初期化処理も使いたいときは、`super().__init__()` で親の処理を呼び出します。\n\n**例：** 親と子の初期化を両方実行しよう！\n\n```python\nclass Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)  # 親の初期化を呼ぶ\n        self.age = age          # 子だけの追加\n```\n\n**ポイント：** `super().__init__(name)` で親クラスの `__init__` を実行しています。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 人を表す親クラスを定義\nclass Person:\n    # 名前を初期設定するメソッドを定義\n    def __init__(self, name):\n        # 名前を属性に保存\n        self.name = name\n\n# Personを継承してStudentクラスを定義\nclass Student(Person):\n    # name（名前）、grade（学年）の順で初期設定\n    def __init__(self, name, grade):\n        # 親クラスの初期化メソッドを呼び出し\n        super().__init__(name)\n        # 学年を属性に保存\n        self.grade = grade\n\n# 'Taro'、3年生としてインスタンスを作成\ns = Student('Taro', 3)\n# インスタンスの情報を表示\nprint(f'{s.name} is in grade {s.grade}')",
      "holeyCode": "# 人を表す親クラスを定義\nclass ___:\n    # 名前を初期設定するメソッドを定義\n    def ___:\n        # 名前を属性に保存\n        self.name = ___\n\n# Personを継承してStudentクラスを定義\nclass ___:\n    # name（名前）、grade（学年）の順で初期設定\n    def ___:\n        # 親クラスの初期化メソッドを呼び出し\n        ___.__init__(name)\n        # 学年を属性に保存\n        self.grade = ___\n\n# 'Taro'、3年生としてインスタンスを作成\ns = ___\n# インスタンスの情報を表示\nprint(___)",
      "correctLines": [
        "# 人を表す親クラスを定義",
        "class Person:",
        "    # 名前を初期設定するメソッドを定義",
        "    def __init__(self, name):",
        "        # 名前を属性に保存",
        "        self.name = name",
        "",
        "# Personを継承してStudentクラスを定義",
        "class Student(Person):",
        "    # name（名前）、grade（学年）の順で初期設定",
        "    def __init__(self, name, grade):",
        "        # 親クラスの初期化メソッドを呼び出し",
        "        super().__init__(name)",
        "        # 学年を属性に保存",
        "        self.grade = grade",
        "",
        "# 'Taro'、3年生としてインスタンスを作成",
        "s = Student('Taro', 3)",
        "# インスタンスの情報を表示",
        "print(f'{s.name} is in grade {s.grade}')"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "super()で親クラスを参照します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["super()", "parent", "self"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Taro is in grade 3\n"
        }
      ]
    },
    {
      "title": "@propertyデコレータ",
      "description": "メソッドを属性のように使えるようにしましょう。",
      "difficulty": "hard",
      "orderIndex": 3,
      "tutorialSlides": [
        {
          "title": "@propertyとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# メソッドを「属性（ぞくせい）」のように使う\n\n**@property（プロパティ）** というデコレータを使うと、**メソッド（関数）を属性のようにアクセス** できるようになります。\n\n**普通のメソッドとの違い：**\n- 普通のメソッド: `c.area()` ← **括弧（かっこ）が必要**\n- プロパティ: `c.area` ← **括弧なしで呼べる！**\n\n**たとえ話：** 電卓の「=」ボタンを押さなくても、数字を見るだけで答えが分かる感じです。\n\n**例：** 円の面積を括弧なしで取得しよう！\n\n```python\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def area(self):\n        return 3.14 * self._radius ** 2\n\nc = Circle(5)\nprint(c.area)  # 78.5 (括弧なし！)\n```\n\n**何をしているか：**\n1. `@property` をメソッドの上に書く\n2. `area` メソッドが属性のように使える\n3. `c.area` で面積が計算されて返ってくる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 長方形を表すクラスを定義\nclass Rectangle:\n    # width（幅）、height（高さ）の順で初期設定\n    def __init__(self, width, height):\n        # 幅を保存\n        self.width = width\n        # 高さを保存\n        self.height = height\n    \n    # メソッドを属性のように扱えるように設定\n    @property\n    # 面積を計算して返すメソッドを定義\n    def area(self):\n        # 幅と高さの積を計算\n        return self.width * self.height\n\n# 幅4、高さ5のインスタンスを作成\nr = Rectangle(4, 5)\n# 面積を表示（プロパティなので括弧なし）\nprint(r.area)",
      "holeyCode": "# 長方形を表すクラスを定義\nclass ___:\n    # width（幅）、height（高さ）の順で初期設定\n    def ___:\n        # 幅を保存\n        self.width = ___\n        # 高さを保存\n        self.height = ___\n    \n    # メソッドを属性のように扱えるように設定\n    ___\n    # 面積を計算して返すメソッドを定義\n    def ___:\n        # 幅と高さの積を計算\n        return ___\n\n# 幅4、高さ5のインスタンスを作成\nr = ___\n# 面積を表示（プロパティなので括弧なし）\nprint(___)",
      "correctLines": [
        "# 長方形を表すクラスを定義",
        "class Rectangle:",
        "    # width（幅）、height（高さ）の順で初期設定",
        "    def __init__(self, width, height):",
        "        # 幅を保存",
        "        self.width = width",
        "        # 高さを保存",
        "        self.height = height",
        "    ",
        "    # メソッドを属性のように扱えるように設定",
        "    @property",
        "    # 面積を計算して返すメソッドを定義",
        "    def area(self):",
        "        # 幅と高さの積を計算",
        "        return self.width * self.height",
        "",
        "# 幅4、高さ5のインスタンスを作成",
        "r = Rectangle(4, 5)",
        "# 面積を表示（プロパティなので括弧なし）",
        "print(r.area)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "プロパティデコレータを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["@property", "@staticmethod", "@classmethod"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "20\n"
        }
      ]
    },
    {
      "title": "@classmethodデコレータ",
      "description": "クラスメソッドを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 4,
      "tutorialSlides": [
        {
          "title": "@classmethodとは？",
          "image": "/illustrations/3d/classmethod_cls.png",
          "content": "# クラス全体に関わるメソッド\n\n**@classmethod（クラスメソッド）** は、**インスタンスではなくクラス自体** に対して動作するメソッドを定義します。\n\n**普通のメソッドとの違い：**\n- 普通のメソッド: `self`（インスタンス自身）を受け取る\n- クラスメソッド: `cls`（クラス自体）を受け取る\n\n**たとえ話：** \n- 普通のメソッド = 「この犬」の情報を扱う\n- クラスメソッド = 「犬という種類全体」の情報を扱う\n\n**例：** 作られた犬の総数を数えよう！\n\n```python\nclass Counter:\n    count = 0  # クラス変数（全インスタンス共通）\n    \n    @classmethod\n    def increment(cls):\n        cls.count += 1  # クラス変数を操作\n```\n\n**何をしているか：**\n1. `count = 0` はクラス変数（設計図にある共通データ）\n2. `@classmethod` でクラスメソッドを定義\n3. `cls.count` でクラス変数にアクセスして操作"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 犬を表すクラスを定義\nclass Dog:\n    # 生成された数をカウントするクラス変数を定義\n    count = 0\n    \n    # 名前を初期設定するメソッドを定義\n    def __init__(self, name):\n        # 名前を保存\n        self.name = name\n        # インスタンスが作られるたびにカウントを増やす\n        Dog.count += 1\n    \n    # クラス全体に関する処理を行うメソッドを定義\n    @classmethod\n    # カウントされている数を取得するメソッドを定義\n    def get_count(cls):\n        # クラス変数を参照して返す\n        return cls.count\n\n# インスタンスを2つ作成\nd1 = Dog('Pochi')\nd2 = Dog('Hachi')\n# クラスメソッドを呼び出して合計数を表示\nprint(Dog.get_count())",
      "holeyCode": "# 犬を表すクラスを定義\nclass ___:\n    # 生成された数をカウントするクラス変数を定義\n    count = ___\n    \n    # 名前を初期設定するメソッドを定義\n    def ___:\n        # 名前を保存\n        self.name = ___\n        # インスタンスが作られるたびにカウントを増やす\n        ___\n    \n    # クラス全体に関する処理を行うメソッドを定義\n    ___\n    # カウントされている数を取得するメソッドを定義\n    def ___:\n        # クラス変数を参照して返す\n        return ___\n\n# インスタンスを2つ作成\nd1 = ___\nd2 = ___\n# クラスメソッドを呼び出して合計数を表示\nprint(___)",
      "correctLines": [
        "# 犬を表すクラスを定義",
        "class Dog:",
        "    # 生成された数をカウントするクラス変数を定義",
        "    count = 0",
        "    ",
        "    # 名前を初期設定するメソッドを定義",
        "    def __init__(self, name):",
        "        # 名前を保存",
        "        self.name = name",
        "        # インスタンスが作られるたびにカウントを増やす",
        "        Dog.count += 1",
        "    ",
        "    # クラス全体に関する処理を行うメソッドを定義",
        "    @classmethod",
        "    # カウントされている数を取得するメソッドを定義",
        "    def get_count(cls):",
        "        # クラス変数を参照して返す",
        "        return cls.count",
        "",
        "# インスタンスを2つ作成",
        "d1 = Dog('Pochi')",
        "d2 = Dog('Hachi')",
        "# クラスメソッドを呼び出して合計数を表示",
        "print(Dog.get_count())"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "クラスメソッドデコレータを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["@classmethod", "@staticmethod", "@property"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "2\n"
        }
      ]
    },
    {
      "title": "@staticmethodデコレータ",
      "description": "クラスに属する静的メソッドを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 5,
      "tutorialSlides": [
        {
          "title": "@staticmethodとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# インスタンスに依存しないメソッド\n\n**@staticmethod（静的メソッド）** は、**self も cls も必要としない** メソッドを定義します。\n\n**3つのメソッドの比較：**\n| メソッド種類 | 第一引数 | 用途 |\n|------------|---------|------|\n| 普通のメソッド | `self` | インスタンスのデータを扱う |\n| クラスメソッド | `cls` | クラス全体のデータを扱う |\n| 静的メソッド | なし | 独立した処理を行う |\n\n**たとえ話：** クラスの「便利な道具箱」に入っている関数。クラスに関係ある処理だけど、クラスやインスタンスのデータは使わない。\n\n**例：** 計算だけする便利なメソッド！\n\n```python\nclass Math:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Math.add(3, 5))  # 8\n```\n\n**何をしているか：**\n1. `@staticmethod` でデコレートする\n2. `self` や `cls` は書かない\n3. `Math.add(3, 5)` でクラスから直接呼び出せる"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# バリデータクラスを定義\nclass Validator:\n    # 状態に依存しない静的メソッドを定義\n    @staticmethod\n    # 数値が正かどうかを判定するメソッドを定義\n    def is_positive(n):\n        # 0より大きいかどうかを返す\n        return n > 0\n\n# クラスから直接メソッドを呼び出して結果を表示\nprint(Validator.is_positive(5))\n# 負の数値を渡して結果を表示\nprint(Validator.is_positive(-3))",
      "holeyCode": "# バリデータクラスを定義\nclass ___:\n    # 状態に依存しない静的メソッドを定義\n    ___\n    # 数値が正かどうかを判定するメソッドを定義\n    def ___:\n        # 0より大きいかどうかを返す\n        return ___\n\n# クラスから直接メソッドを呼び出して結果を表示\nprint(___)\n# 負の数値を渡して結果を表示\nprint(___)",
      "correctLines": [
        "# バリデータクラスを定義",
        "class Validator:",
        "    # 状態に依存しない静的メソッドを定義",
        "    @staticmethod",
        "    # 数値が正かどうかを判定するメソッドを定義",
        "    def is_positive(n):",
        "        # 0より大きいかどうかを返す",
        "        return n > 0",
        "",
        "# クラスから直接メソッドを呼び出して結果を表示",
        "print(Validator.is_positive(5))",
        "# 負の数値を渡して結果を表示",
        "print(Validator.is_positive(-3))"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "静的メソッドデコレータを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["@staticmethod", "@classmethod", "@property"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "True\nFalse\n"
        }
      ]
    },
    {
      "title": "抽象基底クラス",
      "description": "ABCを使って抽象クラスを定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 6,
      "tutorialSlides": [
        {
          "title": "抽象クラスとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# 「実装を強制する」設計図\n\n**ABC（Abstract Base Class）** = **抽象基底クラス（ちゅうしょうきていクラス）** は、**子クラスに「このメソッドは必ず作ってね」と約束させる** 仕組みです。\n\n**たとえ話：** 学校の課題のようなもの。\n- 先生（抽象クラス）: 「作文を書きなさい」と指示を出す\n- 生徒（子クラス）: 実際に作文を書く（実装する）\n- 作文を書かない生徒はエラー！\n\n**キーワード：**\n- `ABC`: 抽象クラスを作るための親クラス\n- `@abstractmethod`: 「必ず実装してね」と印をつけるデコレータ\n\n**例：** 図形クラスに「面積を計算するメソッドを作れ」と指示！\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):  # ABCを継承\n    @abstractmethod  # これを継承した子は必ず実装する\n    def area(self):\n        pass\n```\n\n**何をしているか：**\n1. `abc` モジュールから `ABC` と `abstractmethod` をインポート\n2. `class Shape(ABC)` で抽象クラスを作る\n3. `@abstractmethod` で「このメソッドは子クラスで必ず実装」と指定"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 抽象クラス関連の機能を読み込み\nfrom abc import ABC, abstractmethod\n\n# 動物を表す抽象クラスを定義\nclass Animal(ABC):\n    # 子クラスで実装必須のメソッドを定義\n    @abstractmethod\n    # 鳴き声を出すメソッドの枠組みを定義\n    def speak(self):\n        # 抽象メソッドなので処理はなし\n        pass\n\n# 抽象クラスを継承して実装クラスを作成\nclass Cat(Animal):\n    # speakメソッドを具体的に実装\n    def speak(self):\n        # 鳴き声を返す\n        return 'Meow'\n\n# インスタンスを作成\ncat = Cat()\n# 実装したメソッドを実行して表示\nprint(cat.speak())",
      "holeyCode": "# 抽象クラス関連の機能を読み込み\nfrom abc import ___\n\n# 動物を表す抽象クラスを定義\nclass ___:\n    # 子クラスで実装必須のメソッドを定義\n    ___\n    # 鳴き声を出すメソッドの枠組みを定義\n    def ___:\n        # 抽象メソッドなので処理はなし\n        ___\n\n# 抽象クラスを継承して実装クラスを作成\nclass ___:\n    # speakメソッドを具体的に実装\n    def ___:\n        # 鳴き声を返す\n        return ___\n\n# インスタンスを作成\ncat = ___\n# 実装したメソッドを実行して表示\nprint(___)",
      "correctLines": [
        "# 抽象クラス関連の機能を読み込み",
        "from abc import ABC, abstractmethod",
        "",
        "# 動物を表す抽象クラスを定義",
        "class Animal(ABC):",
        "    # 子クラスで実装必須のメソッドを定義",
        "    @abstractmethod",
        "    # 鳴き声を出すメソッドの枠組みを定義",
        "    def speak(self):",
        "        # 抽象メソッドなので処理はなし",
        "        pass",
        "",
        "# 抽象クラスを継承して実装クラスを作成",
        "class Cat(Animal):",
        "    # speakメソッドを具体的に実装",
        "    def speak(self):",
        "        # 鳴き声を返す",
        "        return 'Meow'",
        "",
        "# インスタンスを作成",
        "cat = Cat()",
        "# 実装したメソッドを実行して表示",
        "print(cat.speak())"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "抽象メソッドデコレータを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["@abstractmethod", "@property", "@staticmethod"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Meow\n"
        }
      ]
    },
    {
      "title": "__str__メソッド",
      "description": "オブジェクトの文字列表現をカスタマイズしましょう。",
      "difficulty": "hard",
      "orderIndex": 7,
      "tutorialSlides": [
        {
          "title": "__str__とは？",
          "image": "/illustrations/3d/str_representation.png",
          "content": "# オブジェクトを「文字列」で表す\n\n**__str__（ストリング）** メソッドを定義すると、`print()` や `str()` での **表示をカスタマイズ** できます。\n\n**たとえ話：** 自己紹介カードのようなもの。\n- `__str__` がないとき: 「私はメモリの0x12345番地にいる何か」\n- `__str__` があるとき: 「私は太郎です、25歳です」\n\n**例：** 座標を見やすく表示しよう！\n\n```python\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f'Point({self.x}, {self.y})'\n\np = Point(3, 4)\nprint(p)  # Point(3, 4)  ← 見やすい！\n```\n\n**何をしているか：**\n1. `__str__` は「特殊メソッド」（アンダーバー2つで囲まれた特別なメソッド）\n2. `print(p)` すると自動的に `__str__` が呼ばれる\n3. `return` で返した文字列がそのまま表示される\n\n**ポイント：** `__str__` がないと `<__main__.Point object at 0x...>` のような分かりにくい表示になります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# 本を表すクラスを定義\nclass Book:\n    # title（タイトル）、author（著者）の順で初期化\n    def __init__(self, title, author):\n        # タイトルを属性に保存\n        self.title = title\n        # 著者を属性に保存\n        self.author = author\n    \n    # 文字列表現を定義するメソッドを定義\n    def __str__(self):\n        # 「タイトル by 著者」の形式で返す\n        return f'{self.title} by {self.author}'\n\n# title（タイトル）、author（著者）の順でインスタンスを作成\nbook = Book('Python Guide', 'Taro')\n# インスタンスを表示\nprint(book)",
      "holeyCode": "# 本を表すクラスを定義\nclass ___:\n    # title（タイトル）、author（著者）の順で初期化\n    def ___:\n        # タイトルを属性に保存\n        self.title = ___\n        # 著者を属性に保存\n        self.author = ___\n    \n    # 文字列表現を定義するメソッドを定義\n    def ___(self):\n        # 「タイトル by 著者」の形式で返す\n        return ___\n\n# title（タイトル）、author（著者）の順でインスタンスを作成\nbook = ___\n# インスタンスを表示\nprint(___)",
      "correctLines": [
        "# 本を表すクラスを定義",
        "class Book:",
        "    # title（タイトル）、author（著者）の順で初期化",
        "    def __init__(self, title, author):",
        "        # タイトルを属性に保存",
        "        self.title = title",
        "        # 著者を属性に保存",
        "        self.author = author",
        "    ",
        "    # 文字列表現を定義するメソッドを定義",
        "    def __str__(self):",
        "        # 「タイトル by 著者」の形式で返す",
        "        return f'{self.title} by {self.author}'",
        "",
        "# title（タイトル）、author（著者）の順でインスタンスを作成",
        "book = Book('Python Guide', 'Taro')",
        "# インスタンスを表示",
        "print(book)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "特殊メソッド__str__を定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["__str__", "__repr__", "__init__"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Python Guide by Taro\n"
        }
      ]
    },
    {
      "title": "__eq__メソッド",
      "description": "オブジェクトの等価比較をカスタマイズしましょう。",
      "difficulty": "hard",
      "orderIndex": 8,
      "tutorialSlides": [
        {
          "title": "__eq__とは？",
          "image": "/illustrations/3d/equality_compare.png",
          "content": "# オブジェクトの「等しさ」を定義する\n\n**__eq__（イコール）** メソッドを定義すると、`==` での **比較方法をカスタマイズ** できます。\n\n**たとえ話：** 「同じ」の判断基準を決めるもの。\n- 2枚のカードが「同じ」とは？ → 数字と絵柄が同じこと！\n- 2つの座標が「同じ」とは？ → xとyの値が同じこと！\n\n**__eq__ がない場合：**\n同じ内容でも別々に作ったオブジェクトは「別物」として扱われます。\n\n**例：** 座標の等しさを判定しよう！\n\n```python\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\np1 = Point(1, 2)\np2 = Point(1, 2)\nprint(p1 == p2)  # True（内容が同じ！）\n```\n\n**何をしているか：**\n1. `__eq__` の引数 `other` は比較相手のオブジェクト\n2. `self.x == other.x` でx座標を比較\n3. `and` で両方の条件を満たすかチェック\n4. `True` か `False` を返す"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ベクトルを表すクラスを定義\nclass Vector:\n    # x、yの順で座標を初期化\n    def __init__(self, x, y):\n        # x座標を属性に保存\n        self.x = x\n        # y座標を属性に保存\n        self.y = y\n    \n    # 等価比較を定義するメソッドを定義\n    def __eq__(self, other):\n        # 両座標が一致するかを返す\n        return self.x == other.x and self.y == other.y\n\n# 座標(3, 4)でインスタンスを作成\nv1 = Vector(3, 4)\n# 同じ座標で別のインスタンスを作成\nv2 = Vector(3, 4)\n# 2つのベクトルが等しいか比較\nprint(v1 == v2)",
      "holeyCode": "# ベクトルを表すクラスを定義\nclass ___:\n    # x、yの順で座標を初期化\n    def ___:\n        # x座標を属性に保存\n        self.x = ___\n        # y座標を属性に保存\n        self.y = ___\n    \n    # 等価比較を定義するメソッドを定義\n    def ___(self, other):\n        # 両座標が一致するかを返す\n        return ___\n\n# 座標(3, 4)でインスタンスを作成\nv1 = ___\n# 同じ座標で別のインスタンスを作成\nv2 = ___\n# 2つのベクトルが等しいか比較\nprint(___)",
      "correctLines": [
        "# ベクトルを表すクラスを定義",
        "class Vector:",
        "    # x、yの順で座標を初期化",
        "    def __init__(self, x, y):",
        "        # x座標を属性に保存",
        "        self.x = x",
        "        # y座標を属性に保存",
        "        self.y = y",
        "    ",
        "    # 等価比較を定義するメソッドを定義",
        "    def __eq__(self, other):",
        "        # 両座標が一致するかを返す",
        ["        return self.x == other.x and self.y == other.y", "        return other.x == self.x and other.y == self.y", "        return self.y == other.y and self.x == other.x"],
        "",
        "# 座標(3, 4)でインスタンスを作成",
        "v1 = Vector(3, 4)",
        "# 同じ座標で別のインスタンスを作成",
        "v2 = Vector(3, 4)",
        "# 2つのベクトルが等しいか比較",
        "print(v1 == v2)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "等価比較の特殊メソッドを定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["__eq__", "__ne__", "__lt__"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "True\n"
        }
      ]
    },
    {
      "title": "__len__メソッド",
      "description": "len()関数に対応させましょう。",
      "difficulty": "hard",
      "orderIndex": 9,
      "tutorialSlides": [
        {
          "title": "__len__とは？",
          "image": "/illustrations/3d/length_measure.png",
          "content": "# `len()` を使えるようにする\n\n**__len__（レングス）** メソッドを定義すると、`len()` 関数で **オブジェクトの「長さ」や「数」** を取得できるようになります。\n\n**たとえ話：** 「何個入ってる？」と聞かれたときの答え方を教えるもの。\n- プレイリストの長さ → 曲の数\n- チームの長さ → メンバーの数\n- 買い物かごの長さ → 商品の数\n\n**例：** プレイリストの曲数を取得しよう！\n\n```python\nclass Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    \n    def __len__(self):\n        return len(self.songs)\n\npl = Playlist(['A', 'B', 'C'])\nprint(len(pl))  # 3\n```\n\n**何をしているか：**\n1. `__len__` メソッドを定義\n2. `self.songs` リストの長さを返す\n3. `len(pl)` で自動的に `__len__` が呼ばれる\n\n**ポイント：** `__len__` は必ず **整数（int）** を返す必要があります。"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# チームを表すクラスを定義\nclass Team:\n    # メンバーリストで初期化するメソッドを定義\n    def __init__(self, members):\n        # メンバーリストを属性に保存\n        self.members = members\n    \n    # len()関数に対応するメソッドを定義\n    def __len__(self):\n        # メンバーの数を返す\n        return len(self.members)\n\n# 3人のメンバーでチームを作成\nteam = Team(['Alice', 'Bob', 'Charlie'])\n# チームの人数を表示\nprint(len(team))",
      "holeyCode": "# チームを表すクラスを定義\nclass ___:\n    # メンバーリストで初期化するメソッドを定義\n    def ___:\n        # メンバーリストを属性に保存\n        self.members = ___\n    \n    # len()関数に対応するメソッドを定義\n    def ___(self):\n        # メンバーの数を返す\n        return ___\n\n# 3人のメンバーでチームを作成\nteam = ___\n# チームの人数を表示\nprint(___)",
      "correctLines": [
        "# チームを表すクラスを定義",
        "class Team:",
        "    # メンバーリストで初期化するメソッドを定義",
        "    def __init__(self, members):",
        "        # メンバーリストを属性に保存",
        "        self.members = members",
        "    ",
        "    # len()関数に対応するメソッドを定義",
        "    def __len__(self):",
        "        # メンバーの数を返す",
        "        return len(self.members)",
        "",
        "# 3人のメンバーでチームを作成",
        "team = Team(['Alice', 'Bob', 'Charlie'])",
        "# チームの人数を表示",
        "print(len(team))"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "長さを返す特殊メソッドを定義します。",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["__len__", "__size__", "__count__"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "3\n"
        }
      ]
    },
    {
      "title": "dataclassデコレータ",
      "description": "データクラスを簡潔に定義しましょう。",
      "difficulty": "hard",
      "orderIndex": 10,
      "tutorialSlides": [
        {
          "title": "@dataclassとは？",
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# データ用クラスを「簡単」に定義！\n\n**@dataclass（データクラス）** を使うと、**`__init__` や `__repr__` が自動で作られます！**\n\n**たとえ話：** 住所録のカードのようなもの。\n- 普通のクラス: 「名前欄」「住所欄」を1つずつ手作りする\n- データクラス: 「名前」「住所」と書くだけで自動的にカードが完成！\n\n**普通のクラス vs データクラス：**\n\n```python\n# 普通のクラス（たくさん書く必要あり）\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# データクラス（シンプル！）\n@dataclass\nclass Point:\n    x: int\n    y: int\n```\n\n**自動で作られるもの：**\n- `__init__`: 初期化メソッド\n- `__repr__`: 表示用メソッド（`Point(x=3, y=4)` のように表示）\n- `__eq__`: 等価比較メソッド\n\n**何をしているか：**\n1. `from dataclasses import dataclass` でインポート\n2. `@dataclass` をクラスの上に書く\n3. `変数名: 型` の形式で属性を定義\n4. `__init__` を書かなくても自動で作られる！"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# dataclassデコレータをインポート\nfrom dataclasses import dataclass\n\n# データクラスとして定義するデコレータを適用\n@dataclass\n# 人物を表すクラスを定義\nclass Person:\n    # 名前の型を文字列で指定\n    name: str\n    # 年齢の型を整数で指定\n    age: int\n\n# name（名前）、age（年齢）の順でインスタンスを作成\np = Person('Taro', 25)\n# インスタンスを表示\nprint(p)",
      "holeyCode": "# dataclassデコレータをインポート\nfrom dataclasses import ___\n\n# データクラスとして定義するデコレータを適用\n___\n# 人物を表すクラスを定義\nclass ___:\n    # 名前の型を文字列で指定\n    name: ___\n    # 年齢の型を整数で指定\n    age: ___\n\n# name（名前）、age（年齢）の順でインスタンスを作成\np = ___\n# インスタンスを表示\nprint(___)",
      "correctLines": [
        "# dataclassデコレータをインポート",
        "from dataclasses import dataclass",
        "",
        "# データクラスとして定義するデコレータを適用",
        "@dataclass",
        "# 人物を表すクラスを定義",
        "class Person:",
        "    # 名前の型を文字列で指定",
        "    name: str",
        "    # 年齢の型を整数で指定",
        "    age: int",
        "",
        "# name（名前）、age（年齢）の順でインスタンスを作成",
        "p = Person('Taro', 25)",
        "# インスタンスを表示",
        "print(p)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "dataclassデコレータを使います。",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "candidates": {
        "keywords": ["@dataclass", "@property", "@classmethod"]
      },
      "testCases": [
        {
          "input": "",
          "expected_output": "Person(name='Taro', age=25)\n"
        }
      ]
    }
  ]
};
