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
            "content": "# 親の能力を子供が受け継ぐ！\\n\\n**継承（けいしょう）** とは、既存のクラスの機能を **そのまま引き継いで** 新しいクラスを作ることです。\\n\\n現実世界で考えてみましょう：\\n- **親クラス（Animal）** = 動物の基本的な性質\\n- **子クラス（Dog）** = 動物の性質 + 犬特有の性質\\n\\n犬は「動物」なので、動物の機能は全部持っています。でも、犬だけの特別な機能も追加できます！\\n\\n**例：** 動物クラスを継承して犬クラスを作ろう！\\n\\n```python\\nclass Animal:\\n    def speak(self):\\n        print('...')\\n\\nclass Dog(Animal):  # Animalを継承\\n    def speak(self):\\n        print('ワン！')  # 犬専用の鳴き声\\n```\\n\\n**ポイント：** `class Dog(Animal):` の `(Animal)` で「Animalを継承する」という意味になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 親クラスVehicleを定義\\nclass Vehicle:\\n    # __init__メソッドを定義\\n    def __init__(self, brand):\\n        # self.brandにbrandを代入\\n        self.brand = brand\\n\\n# Carクラスを定義（Vehicleを継承）\\nclass Car(Vehicle):\\n    # honkメソッドを定義\\n    def honk(self):\\n        # f'{self.brand} car: Beep!'を表示\\n        print(f'{self.brand} car: Beep!')\\n\\n# Car('Toyota')のインスタンスを作成しcarに代入\\ncar = Car('Toyota')\\n# honkメソッドを実行\\ncar.honk()",
        "holeyCode": "# 親クラスVehicleを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, brand):\\n        # self.brandにbrandを代入\\n        self.___ = brand\\n\\n# Carクラスを定義（Vehicleを継承）\\nclass ___(Vehicle):\\n    # honkメソッドを定義\\n    def ___(self):\\n        # f'{self.brand} car: Beep!'を表示\\n        ___(f'{self.brand} car: Beep!')\\n\\n# Car('Toyota')のインスタンスを作成しcarに代入\\ncar = Car('___')\\n# honkメソッドを実行\\ncar.___()",
        "correctLines": [
          "# 親クラスVehicleを定義",
          "class Vehicle:",
          "    # __init__メソッドを定義",
          "    def __init__(self, brand):",
          "        # self.brandにbrandを代入",
          "        self.brand = brand",
          "",
          "# Carクラスを定義（Vehicleを継承）",
          "class Car(Vehicle):",
          "    # honkメソッドを定義",
          "    def honk(self):",
          "        # f'{self.brand} car: Beep!'を表示",
          "        print(f'{self.brand} car: Beep!')",
          "",
          "# Car('Toyota')のインスタンスを作成しcarに代入",
          "car = Car('Toyota')",
          "# honkメソッドを実行",
          "car.honk()"
        ],
        "lineHints": [
          null,
          "乗り物を表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドです。",
          null,
          "brandを保存する属性名です。",
          null,
          null,
          "Vehicleを継承する子クラス名です。",
          null,
          "クラクションを鳴らすメソッド名です。",
          null,
          "画面に出力する関数です。",
          null,
          null,
          "Carクラスに渡すブランド名です。",
          null,
          "honkメソッドを呼び出します。"
        ],
        "candidates": {
          "keywords": [
            "Vehicle",
            "Object",
            "Base"
          ],
          "others": [
            "__init__",
            "brand",
            "Car",
            "honk",
            "print",
            "Toyota"
          ]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Toyota car: Beep!\
"
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
            "content": "# 親クラスのメソッドを呼び出そう！\\n\\n**super（スーパー）** を使うと、**親クラスのメソッドを呼び出す** ことができます。\\n\\n「super」は「上の」という意味です。継承で「上にいる」親クラスを指します。\\n\\n**なぜ必要？**\\n\\n子クラスで `__init__` を作ると、親の `__init__` が上書きされてしまいます。\\n親の初期化処理も使いたいときは、`super().__init__()` で親の処理を呼び出します。\\n\\n**例：** 親と子の初期化を両方実行しよう！\\n\\n```python\\nclass Parent:\\n    def __init__(self, name):\\n        self.name = name\\n\\nclass Child(Parent):\\n    def __init__(self, name, age):\\n        super().__init__(name)  # 親の初期化を呼ぶ\\n        self.age = age          # 子だけの追加\\n```\\n\\n**ポイント：** `super().__init__(name)` で親クラスの `__init__` を実行しています。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 親クラスPersonを定義\\nclass Person:\\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # self.nameにnameを代入\\n        self.name = name\\n\\n# Studentクラスを定義（Personを継承）\\nclass Student(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def __init__(self, name, grade):\\n        # super().__init__(name)を呼ぶ\\n        super().__init__(name)\\n        # self.gradeにgradeを代入\\n        self.grade = grade\\n\\n# Student('太郎', 3)のインスタンスを作成しsに代入\\ns = Student('太郎', 3)\\n# sの情報を表示\\nprint(f'{s.name} is in grade {s.grade}')",
        "holeyCode": "# 親クラスPersonを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, name):\\n        # self.nameにnameを代入\\n        self.___ = name\\n\\n# Studentクラスを定義（Personを継承）\\nclass ___(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def ___(self, name, grade):\\n        # super().__init__(name)を呼ぶ\\n        super().__init__(___)\\n        # self.gradeにgradeを代入\\n        self.___ = grade\\n\\n# Student('太郎', 3)のインスタンスを作成しsに代入\\ns = Student('太郎', ___)\\n# sの情報を表示\\n___(f'{s.name} is in grade {s.grade}')",
        "correctLines": [
          "# 親クラスPersonを定義",
          "class Person:",
          "    # __init__メソッドを定義",
          "    def __init__(self, name):",
          "        # self.nameにnameを代入",
          "        self.name = name",
          "",
          "# Studentクラスを定義（Personを継承）",
          "class Student(Person):",
          "    # __init__メソッドを定義（引数: self, name, grade）",
          "    def __init__(self, name, grade):",
          "        # super().__init__(name)を呼ぶ",
          "        super().__init__(name)",
          "        # self.gradeにgradeを代入",
          "        self.grade = grade",
          "",
          "# Student('太郎', 3)のインスタンスを作成しsに代入",
          "s = Student('太郎', 3)",
          "# sの情報を表示",
          "print(f'{s.name} is in grade {s.grade}')"
        ],
        "lineHints": [
          null,
          "super()で親クラスを参照します。",
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "新しいクラス（Student）を定義します。",
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "super()",
            "parent",
            "self"
          ],
          "others": ["Person", "__init__(self, name)", "name", "Student(Person)", "__init__(self, name, grade)", "grade", "Student('太郎', 3)", "f'{s.name} is in grade {s.grade}'", "__init__", "Student", "3", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎 is in grade 3\
"
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
            "content": "# メソッドを「属性（ぞくせい）」のように使う\\n\\n**@property（プロパティ）** というデコレータを使うと、**メソッド（関数）を属性のようにアクセス** できるようになります。\\n\\n**普通のメソッドとの違い：**\\n- 普通のメソッド: `c.area()` ← **括弧（かっこ）が必要**\\n- プロパティ: `c.area` ← **括弧なしで呼べる！**\\n\\n**たとえ話：** 電卓の「=」ボタンを押さなくても、数字を見るだけで答えが分かる感じです。\\n\\n**例：** 円の面積を括弧なしで取得しよう！\\n\\n```python\\nclass Circle:\\n    def __init__(self, radius):\\n        self._radius = radius\\n    \\n    @property\\n    def area(self):\\n        return 3.14 * self._radius ** 2\\n\\nc = Circle(5)\\nprint(c.area)  # 78.5 (括弧なし！)\\n```\\n\\n**何をしているか：**\\n1. `@property` をメソッドの上に書く\\n2. `area` メソッドが属性のように使える\\n3. `c.area` で面積が計算されて返ってくる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Rectangleクラスを定義\\nclass Rectangle:\\n    # __init__メソッドを定義\\n    def __init__(self, width, height):\\n        # 幅を保存\\n        self.width = width\\n        # 高さを保存\\n        self.height = height\\n    \\n    # @propertyデコレータ\\n    @property\\n    # areaメソッドを定義\\n    def area(self):\\n        # 幅と高さの積を計算\\n        return self.width * self.height\\n\\n# Rectangle(4, 5)のインスタンスを作成しrに代入\\nr = Rectangle(4, 5)\\n# r.areaを表示\\nprint(r.area)",
        "holeyCode": "# Rectangleクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, width, height):\\n        # 幅を保存\\n        self.___ = width\\n        # 高さを保存\\n        self.___ = height\\n    \\n    # @propertyデコレータ\\n    @___\\n    # areaメソッドを定義\\n    def ___(self):\\n        # 幅と高さの積を計算\\n        return self.___ * self.___\\n\\n# Rectangle(4, 5)のインスタンスを作成しrに代入\\nr = Rectangle(___, 5)\\n# r.areaを表示\\n___(r.area)",
        "correctLines": [
          "# Rectangleクラスを定義",
          "class Rectangle:",
          "    # __init__メソッドを定義",
          "    def __init__(self, width, height):",
          "        # 幅を保存",
          "        self.width = width",
          "        # 高さを保存",
          "        self.height = height",
          "    ",
          "    # @propertyデコレータ",
          "    @property",
          "    # areaメソッドを定義",
          "    def area(self):",
          "        # 幅と高さの積を計算",
          "        return self.width * self.height",
          "",
          "# Rectangle(4, 5)のインスタンスを作成しrに代入",
          "r = Rectangle(4, 5)",
          "# r.areaを表示",
          "print(r.area)"
        ],
        "lineHints": [
          null,
          "プロパティデコレータを使います。",
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "関数（area）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "@property",
            "@staticmethod",
            "@classmethod"
          ],
          "others": ["Rectangle", "__init__(self, width, height)", "width", "height", "area(self)", "self.width * self.height", "Rectangle(4, 5)", "r.area", "__init__", "property", "area", "4", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\
"
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
            "content": "# クラス全体に関わるメソッド\\n\\n**@classmethod（クラスメソッド）** は、**インスタンスではなくクラス自体** に対して動作するメソッドを定義します。\\n\\n**普通のメソッドとの違い：**\\n- 普通のメソッド: `self`（インスタンス自身）を受け取る\\n- クラスメソッド: `cls`（クラス自体）を受け取る\\n\\n**たとえ話：** \\n- 普通のメソッド = 「この犬」の情報を扱う\\n- クラスメソッド = 「犬という種類全体」の情報を扱う\\n\\n**例：** 作られた犬の総数を数えよう！\\n\\n```python\\nclass Counter:\\n    count = 0  # クラス変数（全インスタンス共通）\\n    \\n    @classmethod\\n    def increment(cls):\\n        cls.count += 1  # クラス変数を操作\\n```\\n\\n**何をしているか：**\\n1. `count = 0` はクラス変数（設計図にある共通データ）\\n2. `@classmethod` でクラスメソッドを定義\\n3. `cls.count` でクラス変数にアクセスして操作"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Dogクラスを定義\\nclass Dog:\\n    # 生成された数をカウントするクラス変数を定義\\n    count = 0\\n    \\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # 名前を保存\\n        self.name = name\\n        # インスタンスが作られるたびにカウントを増やす\\n        Dog.count += 1\\n    \\n    # @classmethodデコレータ\\n    @classmethod\\n    # get_countメソッドを定義\\n    def get_count(cls):\\n        # クラス変数を参照して返す\\n        return cls.count\\n\\n# Dog('ポチ')を作成しd1に代入\\nd1 = Dog('ポチ')\\n# Dog('ハチ')を作成しd2に代入\\nd2 = Dog('ハチ')\\n# Dog.get_count()を表示\\nprint(Dog.get_count())",
        "holeyCode": "# Dogクラスを定義\\nclass ___:\\n    # 生成された数をカウントするクラス変数を定義\\n    count = ___\\n    \\n    # __init__メソッドを定義\\n    def ___(self, name):\\n        # 名前を保存\\n        self.___ = name\\n        # インスタンスが作られるたびにカウントを増やす\\n        Dog.count += ___\\n    \\n    # @classmethodデコレータ\\n    @___\\n    # get_countメソッドを定義\\n    def ___(cls):\\n        # クラス変数を参照して返す\\n        return cls.___\\n\\n# Dog('ポチ')を作成しd1に代入\\nd___ = Dog('ポチ')\\n# Dog('ハチ')を作成しd2に代入\\nd___ = Dog('ハチ')\\n# Dog.get_count()を表示\\n___(Dog.get_count())",
        "correctLines": [
          "# Dogクラスを定義",
          "class Dog:",
          "    # 生成された数をカウントするクラス変数を定義",
          "    count = 0",
          "    ",
          "    # __init__メソッドを定義",
          "    def __init__(self, name):",
          "        # 名前を保存",
          "        self.name = name",
          "        # インスタンスが作られるたびにカウントを増やす",
          "        Dog.count += 1",
          "    ",
          "    # @classmethodデコレータ",
          "    @classmethod",
          "    # get_countメソッドを定義",
          "    def get_count(cls):",
          "        # クラス変数を参照して返す",
          "        return cls.count",
          "",
          "# Dog('ポチ')を作成しd1に代入",
          "d1 = Dog('ポチ')",
          "# Dog('ハチ')を作成しd2に代入",
          "d2 = Dog('ハチ')",
          "# Dog.get_count()を表示",
          "print(Dog.get_count())"
        ],
        "lineHints": [
          null,
          "クラスメソッドデコレータを使います。",
          null,
          "変数に数値を代入（保存）します。",
          null,
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "関数（get_count）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "@classmethod",
            "@staticmethod",
            "@property"
          ],
          "others": ["Dog", "0", "__init__(self, name)", "name", "Dog.count += 1", "get_count(cls)", "cls.count", "Dog('ポチ')", "Dog('ハチ')", "Dog.get_count(", "__init__", "1", "classmethod", "get_count", "count", "2", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\
"
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
            "content": "# インスタンスに依存しないメソッド\\n\\n**@staticmethod（静的メソッド）** は、**self も cls も必要としない** メソッドを定義します。\\n\\n**3つのメソッドの比較：**\\n| メソッド種類 | 第一引数 | 用途 |\\n|------------|---------|------|\\n| 普通のメソッド | `self` | インスタンスのデータを扱う |\\n| クラスメソッド | `cls` | クラス全体のデータを扱う |\\n| 静的メソッド | なし | 独立した処理を行う |\\n\\n**たとえ話：** クラスの「便利な道具箱」に入っている関数。クラスに関係ある処理だけど、クラスやインスタンスのデータは使わない。\\n\\n**例：** 計算だけする便利なメソッド！\\n\\n```python\\nclass Math:\\n    @staticmethod\\n    def add(a, b):\\n        return a + b\\n\\nprint(Math.add(3, 5))  # 8\\n```\\n\\n**何をしているか：**\\n1. `@staticmethod` でデコレートする\\n2. `self` や `cls` は書かない\\n3. `Math.add(3, 5)` でクラスから直接呼び出せる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Validatorクラスを定義\\nclass Validator:\\n    # @staticmethodデコレータ\\n    @staticmethod\\n    # is_positiveメソッドを定義\\n    def is_positive(n):\\n        # 0より大きいかどうかを返す\\n        return n > 0\\n\\n# Validator.is_positive(5)の結果を表示\\nprint(Validator.is_positive(5))\\n# Validator.is_positive(-3)の結果を表示\\nprint(Validator.is_positive(-3))",
        "holeyCode": "# Validatorクラスを定義\\nclass ___:\\n    # @staticmethodデコレータ\\n    @___\\n    # is_positiveメソッドを定義\\n    def ___(n):\\n        # 0より大きいかどうかを返す\\n        return n > ___\\n\\n# Validator.is_positive(5)の結果を表示\\n___(Validator.is_positive(5))\\n# Validator.is_positive(-3)の結果を表示\\n___(Validator.is_positive(-3))",
        "correctLines": [
          "# Validatorクラスを定義",
          "class Validator:",
          "    # @staticmethodデコレータ",
          "    @staticmethod",
          "    # is_positiveメソッドを定義",
          "    def is_positive(n):",
          "        # 0より大きいかどうかを返す",
          "        return n > 0",
          "",
          "# Validator.is_positive(5)の結果を表示",
          "print(Validator.is_positive(5))",
          "# Validator.is_positive(-3)の結果を表示",
          "print(Validator.is_positive(-3))"
        ],
        "lineHints": [
          null,
          "静的メソッドデコレータを使います。",
          null,
          "ここを正しく入力してください。",
          null,
          "関数（is_positive）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "@staticmethod",
            "@classmethod",
            "@property"
          ],
          "others": ["Validator", "is_positive(n)", "n > 0", "Validator.is_positive(5", "Validator.is_positive(-3", "staticmethod", "is_positive", "0", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\
False\
"
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
            "content": "# 「実装を強制する」設計図\\n\\n**ABC（Abstract Base Class）** = **抽象基底クラス（ちゅうしょうきていクラス）** は、**子クラスに「このメソッドは必ず作ってね」と約束させる** 仕組みです。\\n\\n**たとえ話：** 学校の課題のようなもの。\\n- 先生（抽象クラス）: 「作文を書きなさい」と指示を出す\\n- 生徒（子クラス）: 実際に作文を書く（実装する）\\n- 作文を書かない生徒はエラー！\\n\\n**キーワード：**\\n- `ABC`: 抽象クラスを作るための親クラス\\n- `@abstractmethod`: 「必ず実装してね」と印をつけるデコレータ\\n\\n**例：** 図形クラスに「面積を計算するメソッドを作れ」と指示！\\n\\n```python\\nfrom abc import ABC, abstractmethod\\n\\nclass Shape(ABC):  # ABCを継承\\n    @abstractmethod  # これを継承した子は必ず実装する\\n    def area(self):\\n        pass\\n```\\n\\n**何をしているか：**\\n1. `abc` モジュールから `ABC` と `abstractmethod` をインポート\\n2. `class Shape(ABC)` で抽象クラスを作る\\n3. `@abstractmethod` で「このメソッドは子クラスで必ず実装」と指定"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 抽象クラス関連の機能を読み込み\\nfrom abc import ABC, abstractmethod\\n\\n# 抽象クラスAnimalを定義（ABCを継承）\\nclass Animal(ABC):\\n    # @abstractmethodデコレータ\\n    @abstractmethod\\n    # speakメソッドを定義（処理なし）\\n    def speak(self):\\n        # 抽象メソッドなので処理はなし\\n        pass\\n\\n# Catクラスを定義（Animalを継承）\\nclass Cat(Animal):\\n    # speakメソッドを実装\\n    def speak(self):\\n        # 鳴き声を返す\\n        return 'ニャー'\\n\\n# Catのインスタンスを作成しcatに代入\\ncat = Cat()\\n# cat.speak()の結果を表示\\nprint(cat.speak())",
        "holeyCode": "# 抽象クラス関連の機能を読み込み\\nfrom abc import ABC, ___\\n\\n# 抽象クラスAnimalを定義（ABCを継承）\\nclass ___(ABC):\\n    # @abstractmethodデコレータ\\n    @___\\n    # speakメソッドを定義（処理なし）\\n    def ___(self):\\n        # 抽象メソッドなので処理はなし\\n        ___\\n\\n# Catクラスを定義（Animalを継承）\\nclass ___(Animal):\\n    # speakメソッドを実装\\n    def ___(self):\\n        # 鳴き声を返す\\n        return '___'\\n\\n# Catのインスタンスを作成しcatに代入\\ncat = ___()\\n# cat.speak()の結果を表示\\n___(cat.speak())",
        "correctLines": [
          "# 抽象クラス関連の機能を読み込み",
          "from abc import ABC, abstractmethod",
          "",
          "# 抽象クラスAnimalを定義（ABCを継承）",
          "class Animal(ABC):",
          "    # @abstractmethodデコレータ",
          "    @abstractmethod",
          "    # speakメソッドを定義（処理なし）",
          "    def speak(self):",
          "        # 抽象メソッドなので処理はなし",
          "        pass",
          "",
          "# Catクラスを定義（Animalを継承）",
          "class Cat(Animal):",
          "    # speakメソッドを実装",
          "    def speak(self):",
          "        # 鳴き声を返す",
          "        return 'ニャー'",
          "",
          "# Catのインスタンスを作成しcatに代入",
          "cat = Cat()",
          "# cat.speak()の結果を表示",
          "print(cat.speak())"
        ],
        "lineHints": [
          null,
          "抽象メソッドデコレータを使います。",
          null,
          null,
          "新しいクラス（Animal）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "関数（speak）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "新しいクラス（Cat）を定義します。",
          null,
          "関数（speak）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "@abstractmethod",
            "@property",
            "@staticmethod"
          ],
          "others": ["ABC, abstractmethod", "Animal(ABC)", "speak(self)", "pass", "Cat(Animal)", "'ニャー'", "Cat()", "cat.speak(", "abstractmethod", "Animal", "speak", "Cat", "Meow", "print", "ニャー"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ニャー\
"
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
            "content": "# オブジェクトを「文字列」で表す\\n\\n**__str__（ストリング）** メソッドを定義すると、`print()` や `str()` での **表示をカスタマイズ** できます。\\n\\n**たとえ話：** 自己紹介カードのようなもの。\\n- `__str__` がないとき: 「私はメモリの0x12345番地にいる何か」\\n- `__str__` があるとき: 「私は太郎です、25歳です」\\n\\n**例：** 座標を見やすく表示しよう！\\n\\n```python\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __str__(self):\\n        return f'Point({self.x}, {self.y})'\\n\\np = Point(3, 4)\\nprint(p)  # Point(3, 4)  ← 見やすい！\\n```\\n\\n**何をしているか：**\\n1. `__str__` は「特殊メソッド」（アンダーバー2つで囲まれた特別なメソッド）\\n2. `print(p)` すると自動的に `__str__` が呼ばれる\\n3. `return` で返した文字列がそのまま表示される\\n\\n**ポイント：** `__str__` がないと `<__main__.Point object at 0x...>` のような分かりにくい表示になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # self.titleにtitleを代入\\n        self.title = title\\n        # self.authorにauthorを代入\\n        self.author = author\\n    \\n    # __str__メソッドを定義\\n    def __str__(self):\\n        # 「タイトル by 著者」の形式で返す\\n        return f'{self.title} by {self.author}'\\n\\n# Book('Python Guide', '太郎')を作成しbookに代入\\nbook = Book('Python Guide', '太郎')\\n# bookを表示\\nprint(book)",
        "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, title, author):\\n        # self.titleにtitleを代入\\n        self.___ = title\\n        # self.authorにauthorを代入\\n        self.___ = author\\n    \\n    # __str__メソッドを定義\\n    def ___(self):\\n        # 「タイトル by 著者」の形式で返す\\n        return f'{self.title} by {self.___}'\\n\\n# Book('Python Guide', '太郎')を作成しbookに代入\\nbook = Book('Python Guide', '___')\\n# bookを表示\\n___(book)",
        "correctLines": [
          "# Bookクラスを定義",
          "class Book:",
          "    # __init__メソッドを定義",
          "    def __init__(self, title, author):",
          "        # self.titleにtitleを代入",
          "        self.title = title",
          "        # self.authorにauthorを代入",
          "        self.author = author",
          "    ",
          "    # __str__メソッドを定義",
          "    def __str__(self):",
          "        # 「タイトル by 著者」の形式で返す",
          "        return f'{self.title} by {self.author}'",
          "",
          "# Book('Python Guide', '太郎')を作成しbookに代入",
          "book = Book('Python Guide', '太郎')",
          "# bookを表示",
          "print(book)"
        ],
        "lineHints": [
          null,
          "特殊メソッド__str__を定義します。",
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "関数（__str__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "__str__",
            "__repr__",
            "__init__"
          ],
          "others": ["Book", "__init__(self, title, author)", "title", "author", "f'{self.title} by {self.author}'", "Book('Python Guide', '太郎')", "book", "print", "太郎"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Python Guide by 太郎\
"
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
            "content": "# オブジェクトの「等しさ」を定義する\\n\\n**__eq__（イコール）** メソッドを定義すると、`==` での **比較方法をカスタマイズ** できます。\\n\\n**たとえ話：** 「同じ」の判断基準を決めるもの。\\n- 2枚のカードが「同じ」とは？ → 数字と絵柄が同じこと！\\n- 2つの座標が「同じ」とは？ → xとyの値が同じこと！\\n\\n**__eq__ がない場合：**\\n同じ内容でも別々に作ったオブジェクトは「別物」として扱われます。\\n\\n**例：** 座標の等しさを判定しよう！\\n\\n```python\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __eq__(self, other):\\n        return self.x == other.x and self.y == other.y\\n\\np1 = Point(1, 2)\\np2 = Point(1, 2)\\nprint(p1 == p2)  # True（内容が同じ！）\\n```\\n\\n**何をしているか：**\\n1. `__eq__` の引数 `other` は比較相手のオブジェクト\\n2. `self.x == other.x` でx座標を比較\\n3. `and` で両方の条件を満たすかチェック\\n4. `True` か `False` を返す"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # self.titleにtitleを代入\\n        self.title = title\\n        # self.authorにauthorを代入\\n        self.author = author\\n    \\n    # __eq__メソッドを定義\\n    def __eq__(self, other):\\n        # タイトルと著者が両方一致するかを返す\\n        return self.title == other.title and self.author == other.author\\n\\n# Book('Python入門', '田中')を作成しbook1に代入\\nbook1 = Book('Python入門', '田中')\\n# Book('Python入門', '田中')を作成しbook2に代入\\nbook2 = Book('Python入門', '田中')\\n# book1 == book2の結果を表示\\nprint(book1 == book2)",
        "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, title, author):\\n        # self.titleにtitleを代入\\n        self.___ = title\\n        # self.authorにauthorを代入\\n        self.___ = author\\n    \\n    # __eq__メソッドを定義\\n    def ___(self, other):\\n        # タイトルと著者が両方一致するかを返す\\n        return self.title == other.title and self.___ == other.author\\n\\n# Book('Python入門', '田中')を作成しbook1に代入\\nbook1 = Book('___', '田中')\\n# Book('Python入門', '田中')を作成しbook2に代入\\nbook2 = Book('___', '田中')\\n# book1 == book2の結果を表示\\n___(book1 == book2)",
        "correctLines": [
          "# Bookクラスを定義",
          "class Book:",
          "    # __init__メソッドを定義",
          "    def __init__(self, title, author):",
          "        # self.titleにtitleを代入",
          "        self.title = title",
          "        # self.authorにauthorを代入",
          "        self.author = author",
          "    ",
          "    # __eq__メソッドを定義",
          "    def __eq__(self, other):",
          "        # タイトルと著者が両方一致するかを返す",
          "        return self.title == other.title and self.author == other.author",
          "",
          "# Book('Python入門', '田中')を作成しbook1に代入",
          "book1 = Book('Python入門', '田中')",
          "# Book('Python入門', '田中')を作成しbook2に代入",
          "book2 = Book('Python入門', '田中')",
          "# book1 == book2の結果を表示",
          "print(book1 == book2)"
        ],
        "lineHints": [
          null,
          "本を表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドです。",
          null,
          "titleを保存する属性名です。",
          null,
          "authorを保存する属性名です。",
          null,
          null,
          "==で比較されたとき呼ばれる特殊メソッドです。",
          null,
          "比較相手のタイトルはother.titleで取得します。",
          null,
          null,
          "Bookクラスのコンストラクタを呼び出します。",
          null,
          "同じ引数でBookを作成します。",
          null,
          "比較結果を出力する関数です。"
        ],
        "candidates": {
          "keywords": [
            "__eq__",
            "__ne__",
            "__init__"
          ],
          "others": ["Book", "title", "author", "Book(\"Python入門\", \"田中\")", "print", "Python Basics", "Python入門"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\
"
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
            "content": "# `len()` を使えるようにする\\n\\n**__len__（レングス）** メソッドを定義すると、`len()` 関数で **オブジェクトの「長さ」や「数」** を取得できるようになります。\\n\\n**たとえ話：** 「何個入ってる？」と聞かれたときの答え方を教えるもの。\\n- プレイリストの長さ → 曲の数\\n- チームの長さ → メンバーの数\\n- 買い物かごの長さ → 商品の数\\n\\n**例：** プレイリストの曲数を取得しよう！\\n\\n```python\\nclass Playlist:\\n    def __init__(self, songs):\\n        self.songs = songs\\n    \\n    def __len__(self):\\n        return len(self.songs)\\n\\npl = Playlist(['A', 'B', 'C'])\\nprint(len(pl))  # 3\\n```\\n\\n**何をしているか：**\\n1. `__len__` メソッドを定義\\n2. `self.songs` リストの長さを返す\\n3. `len(pl)` で自動的に `__len__` が呼ばれる\\n\\n**ポイント：** `__len__` は必ず **整数（int）** を返す必要があります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Teamクラスを定義\\nclass Team:\\n    # __init__メソッド（引数: self, members）\\n    def __init__(self, members):\\n        # self.membersにmembersを代入\\n        self.members = members\\n    \\n    # __len__メソッド（引数: selfのみ）\\n    def __len__(self):\\n        # len(self.members)を返す\\n        return len(self.members)\\n\\n# Team(...)を作成しteamに代入\\nteam = Team(['アリス', 'ボブ', 'チャーリー'])\\n# len(team)を表示\\nprint(len(team))",
        "holeyCode": "# Teamクラスを定義\\nclass ___:\\n    # __init__メソッド（引数: self, members）\\n    def ___(self, members):\\n        # self.membersにmembersを代入\\n        self.___ = members\\n    \\n    # __len__メソッド（引数: selfのみ）\\n    def ___(self):\\n        # len(self.members)を返す\\n        return len(self.___)\\n\\n# Team(...)を作成しteamに代入\\nteam = Team(['アリス', 'ボブ', '___'])\\n# len(team)を表示\\n___(len(team))",
        "correctLines": [
          "# Teamクラスを定義",
          "class Team:",
          "    # __init__メソッド（引数: self, members）",
          "    def __init__(self, members):",
          "        # self.membersにmembersを代入",
          "        self.members = members",
          "    ",
          "    # __len__メソッド（引数: selfのみ）",
          "    def __len__(self):",
          "        # len(self.members)を返す",
          "        return len(self.members)",
          "",
          "# Team(...)を作成しteamに代入",
          "team = Team(['アリス', 'ボブ', 'チャーリー'])",
          "# len(team)を表示",
          "print(len(team))"
        ],
        "lineHints": [
          null,
          "長さを返す特殊メソッドを定義します。",
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "関数（__len__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。"
        ],
        "candidates": {
          "keywords": [
            "__len__",
            "__size__",
            "__count__"
          ],
          "others": ["Team", "__init__(self, members)", "members", "len(self.members)", "Team(['アリス', 'ボブ', 'チャーリー'])", "len(team", "__init__", "チャーリー", "print", ","]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\
"
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
            "content": "# データ用クラスを「簡単」に定義！\\n\\n**@dataclass（データクラス）** を使うと、面倒なメソッドが自動で作られます！\\n\\n**たとえ話：** 住所録のカードのようなもの。\\n- 普通のクラス: 「名前欄」「住所欄」を1つずつ手作りする\\n- データクラス: 「名前」「住所」と書くだけで自動的にカードが完成！\\n\\n**普通のクラス vs データクラス：**\\n\\n```python\\n# 普通のクラス（たくさん書く必要あり）\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n\\n# データクラス（シンプル！）\\n@dataclass\\nclass Point:\\n    x: int\\n    y: int\\n```\\n\\n**自動で作られるもの：**\\n- `__init__`: 初期化メソッド\\n- `__repr__`: 表示用メソッド\\n- `__eq__`: 等価比較メソッド\\n\\n**何をしているか：**\\n1. `from dataclasses import dataclass` でインポート\\n2. `@dataclass` をクラスの上に書く\\n3. `変数名: 型` の形式で属性を定義\\n4. `__init__` を書かなくても自動で作られる！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# dataclassデコレータをインポート\\nfrom dataclasses import dataclass\\n\\n# @dataclassデコレータ\\n@dataclass\\n# Personクラスを定義\\nclass Person:\\n    # 名前の型を文字列で指定\\n    name: str\\n    # 年齢の型を整数で指定\\n    age: int\\n\\n# Person('太郎', 25)を作成しpに代入\\np = Person('太郎', 25)\\n# pを表示\\nprint(p)",
        "holeyCode": "# dataclassデコレータをインポート\\nfrom dataclasses import ___\\n\\n# @dataclassデコレータ\\n@___\\n# Personクラスを定義\\nclass ___:\\n    # 名前の型を文字列で指定\\n    name: ___\\n    # 年齢の型を整数で指定\\n    age: ___\\n\\n# Person('太郎', 25)を作成しpに代入\\np = Person('太郎', ___)\\n# pを表示\\n___(p)",
        "correctLines": [
          "# dataclassデコレータをインポート",
          "from dataclasses import dataclass",
          "",
          "# @dataclassデコレータ",
          "@dataclass",
          "# Personクラスを定義",
          "class Person:",
          "    # 名前の型を文字列で指定",
          "    name: str",
          "    # 年齢の型を整数で指定",
          "    age: int",
          "",
          "# Person('太郎', 25)を作成しpに代入",
          "p = Person('太郎', 25)",
          "# pを表示",
          "print(p)"
        ],
        "lineHints": [
          null,
          "dataclassデコレータを使います。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "新しいクラス（Person）を定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          null,
          null,
          "ここを正しく入力してください。",
          null,
          "変数の内容を画面に出力します。"
        ],
        "candidates": {
          "keywords": [
            "@dataclass",
            "@property",
            "@classmethod"
          ],
          "others": ["dataclass", "Person", "str", "int", "Person('太郎', 25)", "p", "25", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Person(name='太郎', age=25)\
"
          }
        ]
      }
  ]
};
