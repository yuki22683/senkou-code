export const pythonData4 = {
  "language": "python",
  "lessonId": "python-4",
  "lessonTitle": "Python IV - オブジェクト指向の極意",
  "lessonDescription": "Pythonのオブジェクト指向プログラミングを深く学びます。継承、多重継承、抽象クラス、プロパティなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "継承とは？",
      "content": "**継承** とは、既存のクラスの機能を**そのまま引き継いで**新しいクラスを作ることです。\\n\\n- **親クラス（Animal）** = 動物の基本的な性質\\n- **子クラス（Dog）** = 動物の性質 + 犬特有の性質\\n\\n```python\\nclass Animal:\\n    def speak(self):\\n        print('...')\\n\\nclass Dog(Animal):  # Animalを継承\\n    def speak(self):\\n        print('ワン!')\\n```\\n\\n`class Dog(Animal):` の `(Animal)` で「Animalを継承する」という意味になります。"
    },
    {
      "title": "super()で親を呼ぶ",
      "content": "**super()** を使うと、**親クラスのメソッドを呼び出す**ことができます。\\n\\n子クラスで `__init__` を作ると、親の `__init__` が上書きされます。親の初期化処理も使いたいときは `super().__init__()` で呼び出します。\\n\\n```python\\nclass Parent:\\n    def __init__(self, name):\\n        self.name = name\\n\\nclass Child(Parent):\\n    def __init__(self, name, age):\\n        super().__init__(name)  # 親の初期化を呼ぶ\\n        self.age = age\\n```"
    },
    {
      "title": "@propertyデコレータ",
      "content": "**@property** を使うと、**メソッドを属性のようにアクセス**できます。\\n\\n- 普通のメソッド: `c.area()` ← 括弧が必要\\n- プロパティ: `c.area` ← 括弧なしで呼べる\\n\\n```python\\nclass Circle:\\n    def __init__(self, radius):\\n        self._radius = radius\\n    \\n    @property\\n    def area(self):\\n        return 3.14 * self._radius ** 2\\n\\nc = Circle(5)\\nprint(c.area)  # 78.5（括弧なし）\\n```"
    },
    {
      "title": "@classmethodデコレータ",
      "content": "**@classmethod** は、**インスタンスではなくクラス自体**に対して動作するメソッドです。\\n\\n- 普通のメソッド: `self`（インスタンス）を受け取る\\n- クラスメソッド: `cls`（クラス自体）を受け取る\\n\\n```python\\nclass Counter:\\n    count = 0  # クラス変数\\n    \\n    @classmethod\\n    def increment(cls):\\n        cls.count += 1\\n```\\n\\n`cls.count` でクラス変数にアクセスできます。"
    },
    {
      "title": "@staticmethodデコレータ",
      "content": "**@staticmethod** は、**self も cls も必要としない**メソッドです。\\n\\n| メソッド種類 | 第一引数 | 用途 |\\n|------------|---------|------|\\n| 普通のメソッド | `self` | インスタンスのデータを扱う |\\n| クラスメソッド | `cls` | クラス全体のデータを扱う |\\n| 静的メソッド | なし | 独立した処理を行う |\\n\\n```python\\nclass Math:\\n    @staticmethod\\n    def add(a, b):\\n        return a + b\\n\\nprint(Math.add(3, 5))  # 8\\n```"
    },
    {
      "title": "抽象クラス（ABC）",
      "content": "**ABC（Abstract Base Class）** は、子クラスに「このメソッドは必ず作ってね」と**約束させる**仕組みです。\\n\\n- `ABC`: 抽象クラスを作るための親クラス\\n- `@abstractmethod`: 「必ず実装してね」と印をつける\\n\\n```python\\nfrom abc import ABC, abstractmethod\\n\\nclass Shape(ABC):\\n    @abstractmethod\\n    def area(self):\\n        pass\\n\\nclass Circle(Shape):\\n    def area(self):  # 必ず実装する\\n        return 3.14 * self.r ** 2\\n```"
    },
    {
      "title": "__str__メソッド",
      "content": "**__str__** を定義すると、`print()` での**表示をカスタマイズ**できます。\\n\\n```python\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __str__(self):\\n        return f'Point({self.x}, {self.y})'\\n\\np = Point(3, 4)\\nprint(p)  # Point(3, 4)\\n```\\n\\n`__str__` がないと `<Point object at 0x...>` のような分かりにくい表示になります。"
    },
    {
      "title": "__eq__メソッド",
      "content": "**__eq__** を定義すると、`==` での**比較方法をカスタマイズ**できます。\\n\\n```python\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __eq__(self, other):\\n        return self.x == other.x and self.y == other.y\\n\\np1 = Point(1, 2)\\np2 = Point(1, 2)\\nprint(p1 == p2)  # True\\n```\\n\\n引数 `other` は比較相手のオブジェクトです。"
    },
    {
      "title": "__len__メソッド",
      "content": "**__len__** を定義すると、`len()` 関数で**オブジェクトの長さ**を取得できます。\\n\\n```python\\nclass Playlist:\\n    def __init__(self, songs):\\n        self.songs = songs\\n    \\n    def __len__(self):\\n        return len(self.songs)\\n\\npl = Playlist(['A', 'B', 'C'])\\nprint(len(pl))  # 3\\n```\\n\\n`__len__` は必ず**整数（int）**を返す必要があります。"
    },
    {
      "title": "@dataclassデコレータ",
      "content": "**@dataclass** を使うと、`__init__` や `__repr__` が**自動で作られます**。\\n\\n```python\\nfrom dataclasses import dataclass\\n\\n# 普通のクラス（たくさん書く）\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n\\n# データクラス（シンプル！）\\n@dataclass\\nclass Point:\\n    x: int\\n    y: int\\n```\\n\\n自動で `__init__`、`__repr__`、`__eq__` が作られます。"
    }
  ],
  "exercises": [
    {
      "title": "クラスの継承",
      "description": "既存のクラスの機能を引き継いで、新しいクラスを作る方法を学びます",
      "tutorialSlides": [
        {
          "title": "継承とは？",
          "content": "# 親の能力を子供が受け継ぐ！\\n\\n**継承** とは、既存のクラスの機能を **そのまま引き継いで** 新しいクラスを作ることです。\\n\\n現実世界で考えてみましょう：\\n- **親クラス（Animal）** = 動物の基本的な性質\\n- **子クラス（Dog）** = 動物の性質 + 犬特有の性質\\n\\n犬は「動物」なので、動物の機能は全部持っています。でも、犬だけの特別な機能も追加できます！\\n\\n**例：** 動物クラスを継承して犬クラスを作ろう！\\n\\n```python\\nclass Animal:\\n    def speak(self):\\n        print('...')\\n\\nclass Dog(Animal):  # Animalを継承\\n    def speak(self):\\n        print('Woof!')  # 犬専用の鳴き声\\n```\\n\\n**ポイント：** `class Dog(Animal):` の `(Animal)` で「Animalを継承する」という意味になります。"
        }
      ],
      "correctCode": "# 親クラスVehicleを定義\\nclass Vehicle:\\n    # __init__メソッドを定義\\n    def __init__(self, brand):\\n        # self.brandにbrandを代入\\n        self.brand = brand\\n\\n# Carクラスを定義（Vehicleを継承）\\nclass Car(Vehicle):\\n    # honkメソッドを定義\\n    def honk(self):\\n        # f'{self.brand} car: Beep!'を表示\\n        print(f'{self.brand} car: Beep!')\\n\\n# Carインスタンス（ブランド名'トヨタ'）を作成しcarに代入\\ncar = Car('トヨタ')\\n# carでhonkメソッドを実行してクラクションを鳴らす\\ncar.honk()",
      "holeyCode": "# 親クラスVehicleを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, ___):\\n        # self.brandにbrandを代入\\n        self.___ = ___\\n___\\n# Carクラスを定義（Vehicleを継承）\\nclass ___(___):\\n    # honkメソッドを定義\\n    def ___(self):\\n        # f'{self.brand} car: Beep!'を表示\\n        ___(f'{self.___} car: Beep!')\\n___\\n# Carインスタンス（ブランド名'トヨタ'）を作成しcarに代入\\n___ = ___('___')\\n# carでhonkメソッドを実行してクラクションを鳴らす\\n___.___()",
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
          "# Carインスタンス（ブランド名'トヨタ'）を作成しcarに代入",
          "car = Car('トヨタ')",
          "# carでhonkメソッドを実行してクラクションを鳴らす",
          "car.honk()"
        ],
      "lineHints": [
          null,
          "乗り物を表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、ブランド名を受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          null,
          "親クラスを継承して子クラスを定義します。",
          null,
          "クラクションを鳴らすメソッド名です。",
          null,
          "インスタンスの属性値を出力します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "インスタンスのhonkメソッドでクラクションを鳴らします。"
        ],
        "candidates": {
          "keywords": [
            "Vehicle",
            "Object",
            "Base"
          ],
          "others": ["__init__", "brand", "Car", "honk", "print", "トヨタ", "", "car"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "トヨタ car: Beep!\\n"
          }
        ]
      },
    {
      "title": "super()で親を呼ぶ",
      "description": "super（スーパー）について学びます",
      "tutorialSlides": [
        {
          "title": "super()とは？",
          "content": "# 親クラスのメソッドを呼び出そう！\\n\\n**super（スーパー）** を使うと、**親クラスのメソッドを呼び出す** ことができます。\\n\\n「super」は「上の」という意味です。継承で「上にいる」親クラスを指します。\\n\\n**なぜ必要？**\\n\\n子クラスで `__init__` を作ると、親の `__init__` が上書きされてしまいます。\\n親の初期化処理も使いたいときは、`super().__init__()` で親の処理を呼び出します。\\n\\n**例：** 親と子の初期化を両方実行しよう！\\n\\n```python\\nclass Parent:\\n    def __init__(self, name):\\n        self.name = name\\n\\nclass Child(Parent):\\n    def __init__(self, name, age):\\n        super().__init__(name)  # 親の初期化を呼ぶ\\n        self.age = age          # 子だけの追加\\n```\\n\\n**ポイント：** `super().__init__(name)` で親クラスの `__init__` を実行しています。"
        }
      ],
      "correctCode": "# 親クラスPersonを定義\\nclass Person:\\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # self.nameにnameを代入\\n        self.name = name\\n\\n# Studentクラスを定義（Personを継承）\\nclass Student(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def __init__(self, name, grade):\\n        # super().__init__(name)を呼ぶ\\n        super().__init__(name)\\n        # self.gradeにgradeを代入\\n        self.grade = grade\\n\\n# Studentを作成（名前に'太郎', 学年に3）しsに代入\\ns = Student('太郎', 3)\\n# sの情報を表示\\nprint(f'{s.name} is in grade {s.grade}')",
      "holeyCode": "# 親クラスPersonを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, ___):\\n        # self.nameにnameを代入\\n        self.___ = ___\\n___\\n# Studentクラスを定義（Personを継承）\\nclass ___(___):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def ___(self, ___, ___):\\n        # super().__init__(name)を呼ぶ\\n        ___().___(___)\\n        # self.gradeにgradeを代入\\n        self.___ = ___\\n___\\n# Studentを作成（名前に'太郎', 学年に3）しsに代入\\n___ = ___('___', ___)\\n# sの情報を表示\\n___(f'{___.___} is in grade {___.___}')",
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
          "# Studentを作成（名前に'太郎', 学年に3）しsに代入",
          "s = Student('太郎', 3)",
          "# sの情報を表示",
          "print(f'{s.name} is in grade {s.grade}')"
        ],
      "lineHints": [
          null,
          "人を表す親クラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、名前を受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          null,
          "親クラスを継承して子クラスを定義します。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、名前と学年を受け取ります。",
          null,
          "親クラスの初期化メソッドを呼び出して、名前を渡します。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "インスタンスの属性値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "super",
            "parent",
            "self"
          ],
          "others": ["Person", "__init__", "name", "Student", "grade", "3", "print", "", "太郎", "s"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎 is in grade 3\\n"
          }
        ]
      },
    {
      "title": "@propertyデコレータ",
      "description": "関数の機能を後から拡張できる「デコレータ」を学びます",
      "tutorialSlides": [
        {
          "title": "@propertyとは？",
          "content": "# メソッドを「属性」のように使う\\n\\n**@property（プロパティ）** というデコレータを使うと、**メソッド（関数）を属性のようにアクセス** できるようになります。\\n\\n**普通のメソッドとの違い：**\\n- 普通のメソッド: `c.area()` ← **括弧が必要**\\n- プロパティ: `c.area` ← **括弧なしで呼べる！**\\n\\n**たとえ話：** 電卓の「=」ボタンを押さなくても、数字を見るだけで答えが分かる感じです。\\n\\n**例：** 円の面積を括弧なしで取得しよう！\\n\\n```python\\nclass Circle:\\n    def __init__(self, radius):\\n        self._radius = radius\\n    \\n    @property\\n    def area(self):\\n        return 3.14 * self._radius ** 2\\n\\nc = Circle(5)\\nprint(c.area)  # 78.5 (括弧なし！)\\n```\\n\\n**何をしているか：**\\n1. `@property` をメソッドの上に書く\\n2. `area` メソッドが属性のように使える\\n3. `c.area` で面積が計算されて返ってくる"
        }
      ],
      "correctCode": "# Rectangleクラスを定義\\nclass Rectangle:\\n    # __init__メソッドを定義\\n    def __init__(self, width, height):\\n        # 幅を保存\\n        self.width = width\\n        # 高さを保存\\n        self.height = height\\n    \\n    # @propertyデコレータ\\n    @property\\n    # areaメソッドを定義\\n    def area(self):\\n        # 幅と高さの積を計算\\n        return self.width * self.height\\n\\n# Rectangleを作成（幅に4, 高さに5）しrに代入\\nr = Rectangle(4, 5)\\n# 四角形の面積を表示\\nprint(r.area)",
      "holeyCode": "# Rectangleクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, ___, ___):\\n        # 幅を保存\\n        self.___ = ___\\n        # 高さを保存\\n        self.___ = ___\\n    ___\\n    # @propertyデコレータ\\n    @___\\n    # areaメソッドを定義\\n    def ___(self):\\n        # 幅と高さの積を計算\\n        return self.___ * self.___\\n___\\n# Rectangleを作成（幅に4, 高さに5）しrに代入\\n___ = ___(___, ___)\\n# 四角形の面積を表示\\n___(___.___)",
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
          "# Rectangleを作成（幅に4, 高さに5）しrに代入",
          "r = Rectangle(4, 5)",
          "# 四角形の面積を表示",
          "print(r.area)"
        ],
      "lineHints": [
          null,
          "四角形を表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、幅と高さを受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          "インスタンス属性に引数の値を保存します。",
          "この行を正しく入力してください。",
          null,
          "プロパティデコレータ名です。",
          null,
          "面積を計算するメソッド名です。",
          null,
          "幅と高さを掛けて面積を計算します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "インスタンスのプロパティ値を出力します。"
        ],
        "candidates": {
          "keywords": [
            "@property",
            "@staticmethod",
            "@classmethod"
          ],
          "others": ["Rectangle", "__init__", "width", "height", "area", "4", "5", "print", "", "property", "r"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "20\\n"
          }
        ]
      },
    {
      "title": "@classmethodデコレータ",
      "description": "関数の機能を後から拡張できる「デコレータ」を学びます",
      "tutorialSlides": [
        {
          "title": "@classmethodとは？",
          "content": "# クラス全体に関わるメソッド\\n\\n**@classmethod（クラスメソッド）** は、**インスタンスではなくクラス自体** に対して動作するメソッドを定義します。\\n\\n**普通のメソッドとの違い：**\\n- 普通のメソッド: `self`（インスタンス自身）を受け取る\\n- クラスメソッド: `cls`（クラス自体）を受け取る\\n\\n**たとえ話：** \\n- 普通のメソッド = 「この犬」の情報を扱う\\n- クラスメソッド = 「犬という種類全体」の情報を扱う\\n\\n**例：** 作られた犬の総数を数えよう！\\n\\n```python\\nclass Counter:\\n    count = 0  # クラス変数（全インスタンス共通）\\n    \\n    @classmethod\\n    def increment(cls):\\n        cls.count += 1  # クラス変数を操作\\n```\\n\\n**何をしているか：**\\n1. `count = 0` はクラス変数（設計図にある共通データ）\\n2. `@classmethod` でクラスメソッドを定義\\n3. `cls.count` でクラス変数にアクセスして操作"
        }
      ],
      "correctCode": "# Dogクラスを定義\\nclass Dog:\\n    # 生成された数をカウントするクラス変数を定義\\n    count = 0\\n    \\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # 名前を保存\\n        self.name = name\\n        # インスタンスが作られるたびにカウントを増やす\\n        Dog.count += 1\\n    \\n    # @classmethodデコレータ\\n    @classmethod\\n    # get_countメソッドを定義\\n    def get_count(cls):\\n        # クラス変数を参照して返す\\n        return cls.count\\n\\n# 名前'ポチ'の犬をd1に代入\\nd1 = Dog('ポチ')\\n# 名前'ハチ'の犬をd2に代入\\nd2 = Dog('ハチ')\\n# 生成されたDogの数を表示\\nprint(Dog.get_count())",
      "holeyCode": "# Dogクラスを定義\\nclass ___:\\n    # 生成された数をカウントするクラス変数を定義\\n    ___ = ___\\n    ___\\n    # __init__メソッドを定義\\n    def ___(self, ___):\\n        # 名前を保存\\n        self.___ = ___\\n        # インスタンスが作られるたびにカウントを増やす\\n        ___.___ += ___\\n    ___\\n    # @classmethodデコレータ\\n    @___\\n    # get_countメソッドを定義\\n    def ___(___):\\n        # クラス変数を参照して返す\\n        return ___.___\\n___\\n# 名前'ポチ'の犬をd1に代入\\n___ = ___('___')\\n# 名前'ハチ'の犬をd2に代入\\n___ = ___('___')\\n# 生成されたDogの数を表示\\n___(___.___())",
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
          "# 名前'ポチ'の犬をd1に代入",
          "d1 = Dog('ポチ')",
          "# 名前'ハチ'の犬をd2に代入",
          "d2 = Dog('ハチ')",
          "# 生成されたDogの数を表示",
          "print(Dog.get_count())"
        ],
      "lineHints": [
          null,
          "犬を表すクラス名です。",
          null,
          "インスタンス数を追跡するクラス変数を0で初期化します。",
          "この行を正しく入力してください。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、名前を受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          "インスタンス生成時にクラス変数をインクリメントします。",
          "この行を正しく入力してください。",
          null,
          "クラスメソッドデコレータ名です。",
          null,
          "クラス変数にアクセスするメソッドを定義します。clsはクラス自身を指します。",
          null,
          "クラス変数の値を返します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "クラスメソッドを呼び出して結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "@classmethod",
            "@staticmethod",
            "@property"
          ],
          "others": ["Dog", "0", "__init__", "name", "count", "1", "classmethod", "get_count", "cls", "d1", "d2", "ポチ", "ハチ", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "@staticmethodデコレータ",
      "description": "関数の機能を後から拡張できる「デコレータ」を学びます",
      "tutorialSlides": [
        {
          "title": "@staticmethodとは？",
          "content": "# インスタンスに依存しないメソッド\\n\\n**@staticmethod（静的メソッド）** は、**self も cls も必要としない** メソッドを定義します。\\n\\n**3つのメソッドの比較：**\\n| メソッド種類 | 第一引数 | 用途 |\\n|------------|---------|------|\\n| 普通のメソッド | `self` | インスタンスのデータを扱う |\\n| クラスメソッド | `cls` | クラス全体のデータを扱う |\\n| 静的メソッド | なし | 独立した処理を行う |\\n\\n**たとえ話：** クラスの「便利な道具箱」に入っている関数。クラスに関係ある処理だけど、クラスやインスタンスのデータは使わない。\\n\\n**例：** 計算だけする便利なメソッド！\\n\\n```python\\nclass Math:\\n    @staticmethod\\n    def add(a, b):\\n        return a + b\\n\\nprint(Math.add(3, 5))  # 8\\n```\\n\\n**何をしているか：**\\n1. `@staticmethod` でデコレートする\\n2. `self` や `cls` は書かない\\n3. `Math.add(3, 5)` でクラスから直接呼び出せる"
        }
      ],
      "correctCode": "# Validatorクラスを定義\\nclass Validator:\\n    # @staticmethodデコレータ\\n    @staticmethod\\n    # is_positiveメソッドを定義\\n    def is_positive(n):\\n        # 0より大きいかどうかを返す\\n        return n > 0\\n\\n# 5が正の数かどうかを表示\\nprint(Validator.is_positive(5))\\n# -3が正の数かどうかを表示\\nprint(Validator.is_positive(-3))",
      "holeyCode": "# Validatorクラスを定義\\nclass ___:\\n    # @staticmethodデコレータ\\n    @___\\n    # is_positiveメソッドを定義\\n    def ___(___):\\n        # 0より大きいかどうかを返す\\n        return ___ > ___\\n___\\n# 5が正の数かどうかを表示\\n___(___.___(___))\\n# -3が正の数かどうかを表示\\n___(___.___(___)",
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
          "# 5が正の数かどうかを表示",
          "print(Validator.is_positive(5))",
          "# -3が正の数かどうかを表示",
          "print(Validator.is_positive(-3))"
        ],
      "lineHints": [
          null,
          "検証用のクラス名です。",
          null,
          "静的メソッドデコレータ名です。",
          null,
          "正の数かどうかを判定するメソッドを定義します。",
          null,
          "引数が0より大きいかを比較して結果を返します。",
          null,
          null,
          "静的メソッドを呼び出して結果を出力します。",
          null,
          "静的メソッドを呼び出して結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "@staticmethod",
            "@classmethod",
            "@property"
          ],
          "others": ["Validator", "staticmethod", "is_positive", "n", "0", "5", "-3", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\\nFalse\\n"
          }
        ]
      },
    {
      "title": "抽象基底クラス",
      "description": "抽象基底クラスの仕組みを理解します",
      "tutorialSlides": [
        {
          "title": "抽象クラスとは？",
          "content": "# 「実装を強制する」設計図\\n\\n**ABC（Abstract Base Class）** = **抽象基底クラス（ちゅうしょうきていクラス）** は、**子クラスに「このメソッドは必ず作ってね」と約束させる** 仕組みです。\\n\\n**たとえ話：** 学校の課題のようなもの。\\n- 先生（抽象クラス）: 「作文を書きなさい」と指示を出す\\n- 生徒（子クラス）: 実際に作文を書く（実装する）\\n- 作文を書かない生徒はエラー！\\n\\n**キーワード：**\\n- `ABC`: 抽象クラスを作るための親クラス\\n- `@abstractmethod`: 「必ず実装してね」と印をつけるデコレータ\\n\\n**例：** 図形クラスに「面積を計算するメソッドを作れ」と指示！\\n\\n```python\\nfrom abc import ABC, abstractmethod\\n\\nclass Shape(ABC):  # ABCを継承\\n    @abstractmethod  # これを継承した子は必ず実装する\\n    def area(self):\\n        pass\\n```\\n\\n**何をしているか：**\\n1. `abc` モジュールから `ABC` と `abstractmethod` をインポート\\n2. `class Shape(ABC)` で抽象クラスを作る\\n3. `@abstractmethod` で「このメソッドは子クラスで必ず実装」と指定"
        }
      ],
      "correctCode": "# 抽象クラス関連の機能を読み込み\\nfrom abc import ABC, abstractmethod\\n\\n# 抽象クラスAnimalを定義（ABCを継承）\\nclass Animal(ABC):\\n    # @abstractmethodデコレータ\\n    @abstractmethod\\n    # speakメソッドを定義（処理なし）\\n    def speak(self):\\n        # 抽象メソッドなので処理はなし\\n        pass\\n\\n# Catクラスを定義（Animalを継承）\\nclass Cat(Animal):\\n    # speakメソッドを実装\\n    def speak(self):\\n        # 鳴き声を返す\\n        return 'ニャー'\\n\\n# Catのインスタンスを作成しcatに代入\\ncat = Cat()\\n# 猫の鳴き声を表示\\nprint(cat.speak())",
      "holeyCode": "# 抽象クラス関連の機能を読み込み\\nfrom ___ import ___, ___\\n___\\n# 抽象クラスAnimalを定義（ABCを継承）\\nclass ___(___):\\n    # @abstractmethodデコレータ\\n    @___\\n    # speakメソッドを定義（処理なし）\\n    def ___(self):\\n        # 抽象メソッドなので処理はなし\\n        ___\\n___\\n# Catクラスを定義（Animalを継承）\\nclass ___(___):\\n    # speakメソッドを実装\\n    def ___(self):\\n        # 鳴き声を返す\\n        return '___'\\n___\\n# Catのインスタンスを作成しcatに代入\\n___ = ___()\\n# 猫の鳴き声を表示\\n___(___.___())",
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
          "# 猫の鳴き声を表示",
          "print(cat.speak())"
        ],
      "lineHints": [
          null,
          "抽象基底クラス機能をabcモジュールからインポートします。",
          null,
          null,
          "ABCを継承して抽象クラスを定義します。",
          null,
          "抽象メソッドデコレータ名です。",
          null,
          "鳴き声メソッド名です。",
          null,
          "何もしないことを示すキーワードです。",
          null,
          null,
          "抽象クラスを継承して具象クラスを定義します。",
          null,
          "鳴き声メソッド名です。",
          null,
          "猫の鳴き声の文字列を返します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "インスタンスのメソッドを呼び出して結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "@abstractmethod",
            "@property",
            "@staticmethod"
          ],
          "others": ["abc", "ABC", "abstractmethod", "Animal", "speak", "pass", "Cat", "ニャー", "cat", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "ニャー\\n"
          }
        ]
      },
    {
      "title": "__str__メソッド",
      "description": "__str__メソッドの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "__str__とは？",
          "content": "# オブジェクトを「文字列」で表す\\n\\n**__str__（ストリング）** メソッドを定義すると、`print()` や `str()` での **表示をカスタマイズ** できます。\\n\\n**たとえ話：** 自己紹介カードのようなもの。\\n- `__str__` がないとき: 「私はメモリの0x12345番地にいる何か」\\n- `__str__` があるとき: 「私は太郎です、25歳です」\\n\\n**例：** 座標を見やすく表示しよう！\\n\\n```python\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __str__(self):\\n        return f'Point({self.x}, {self.y})'\\n\\np = Point(3, 4)\\nprint(p)  # Point(3, 4)  ← 見やすい！\\n```\\n\\n**何をしているか：**\\n1. `__str__` は「特殊メソッド」（アンダーバー2つで囲まれた特別なメソッド）\\n2. `print(p)` すると自動的に `__str__` が呼ばれる\\n3. `return` で返した文字列がそのまま表示される\\n\\n**ポイント：** `__str__` がないと `<__main__.Point object at 0x...>` のような分かりにくい表示になります。"
        }
      ],
      "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # self.titleにtitleを代入\\n        self.title = title\\n        # self.authorにauthorを代入\\n        self.author = author\\n    \\n    # __str__メソッドを定義\\n    def __str__(self):\\n        # 「タイトル by 著者」の形式で返す\\n        return f'{self.title} by {self.author}'\\n\\n# Bookを作成（タイトルに'Pythonガイド', 著者に'太郎'）しbookに代入\\nbook = Book('Pythonガイド', '太郎')\\n# bookを表示\\nprint(book)",
      "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, ___, ___):\\n        # self.titleにtitleを代入\\n        self.___ = ___\\n        # self.authorにauthorを代入\\n        self.___ = ___\\n    ___\\n    # __str__メソッドを定義\\n    def ___(self):\\n        # 「タイトル by 著者」の形式で返す\\n        return f'{self.___} by {self.___}'\\n___\\n# Bookを作成（タイトルに'Pythonガイド', 著者に'太郎'）しbookに代入\\n___ = ___('___', '___')\\n# bookを表示\\n___(___)",
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
          "# Bookを作成（タイトルに'Pythonガイド', 著者に'太郎'）しbookに代入",
          "book = Book('Pythonガイド', '太郎')",
          "# bookを表示",
          "print(book)"
        ],
      "lineHints": [
          null,
          "本を表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、タイトルと著者を受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          "インスタンス属性に引数の値を保存します。",
          "この行を正しく入力してください。",
          null,
          "文字列表現を返す特殊メソッド名です。",
          null,
          "タイトルと著者を組み合わせた文字列を返します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "インスタンスを出力します（__str__が呼ばれます）。"
        ],
        "candidates": {
          "keywords": [
            "__str__",
            "__repr__",
            "__init__"
          ],
          "others": ["Book", "__init__", "title", "author", "Pythonガイド", "太郎", "book", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Pythonガイド by 太郎\\n"
          }
        ]
      },
    {
      "title": "__eq__メソッド",
      "description": "__eq__メソッドの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "__eq__とは？",
          "content": "# オブジェクトの「等しさ」を定義する\\n\\n**__eq__（イコール）** メソッドを定義すると、`==` での **比較方法をカスタマイズ** できます。\\n\\n**たとえ話：** 「同じ」の判断基準を決めるもの。\\n- 2枚のカードが「同じ」とは？ → 数字と絵柄が同じこと！\\n- 2つの座標が「同じ」とは？ → xとyの値が同じこと！\\n\\n**__eq__ がない場合：**\\n同じ内容でも別々に作ったオブジェクトは「別物」として扱われます。\\n\\n**例：** 座標の等しさを判定しよう！\\n\\n```python\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n    \\n    def __eq__(self, other):\\n        return self.x == other.x and self.y == other.y\\n\\np1 = Point(1, 2)\\np2 = Point(1, 2)\\nprint(p1 == p2)  # True（内容が同じ！）\\n```\\n\\n**何をしているか：**\\n1. `__eq__` の引数 `other` は比較相手のオブジェクト\\n2. `self.x == other.x` でx座標を比較\\n3. `and` で両方の条件を満たすかチェック\\n4. `True` か `False` を返す"
        }
      ],
      "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # self.titleにtitleを代入\\n        self.title = title\\n        # self.authorにauthorを代入\\n        self.author = author\\n    \\n    # __eq__メソッドを定義\\n    def __eq__(self, other):\\n        # タイトルと著者が両方一致するかを返す\\n        return self.title == other.title and self.author == other.author\\n\\n# Bookを作成（タイトルに'Python入門', 著者に'田中'）しbook1に代入\\nbook1 = Book('Python入門', '田中')\\n# Bookを作成（タイトルに'Python入門', 著者に'田中'）しbook2に代入\\nbook2 = Book('Python入門', '田中')\\n# book1 == book2の結果を表示\\nprint(book1 == book2)",
      "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, ___, ___):\\n        # self.titleにtitleを代入\\n        self.___ = ___\\n        # self.authorにauthorを代入\\n        self.___ = ___\\n    ___\\n    # __eq__メソッドを定義\\n    def ___(self, ___):\\n        # タイトルと著者が両方一致するかを返す\\n        return self.___ == ___.___ and self.___ == ___.___\\n___\\n# Bookを作成（タイトルに'Python入門', 著者に'田中'）しbook1に代入\\n___ = ___('___', '___')\\n# Bookを作成（タイトルに'Python入門', 著者に'田中'）しbook2に代入\\n___ = ___('___', '___')\\n# book1 == book2の結果を表示\\n___(___ == ___)",
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
          "# Bookを作成（タイトルに'Python入門', 著者に'田中'）しbook1に代入",
          "book1 = Book('Python入門', '田中')",
          "# Bookを作成（タイトルに'Python入門', 著者に'田中'）しbook2に代入",
          "book2 = Book('Python入門', '田中')",
          "# book1 == book2の結果を表示",
          "print(book1 == book2)"
        ],
      "lineHints": [
          null,
          "本を表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、タイトルと著者を受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          null,
          "インスタンス属性に引数の値を保存します。",
          "この行を正しく入力してください。",
          null,
          "==演算子で比較されたときに呼ばれる特殊メソッドを定義します。",
          null,
          "両方の属性が一致するかを論理積で判定します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "2つのインスタンスを==で比較して結果を出力します。"
        ],
        "candidates": {
          "keywords": [
            "__eq__",
            "__ne__",
            "__init__"
          ],
          "others": ["Book", "__init__", "title", "author", "__eq__", "other", "Python入門", "田中", "book1", "book2", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\\n"
          }
        ]
      },
    {
      "title": "__len__メソッド",
      "description": "__len__メソッドの仕組みと使い方を学びます",
      "tutorialSlides": [
        {
          "title": "__len__とは？",
          "content": "# `len()` を使えるようにする\\n\\n**__len__（レングス）** メソッドを定義すると、`len()` 関数で **オブジェクトの「長さ」や「数」** を取得できるようになります。\\n\\n**たとえ話：** 「何個入ってる？」と聞かれたときの答え方を教えるもの。\\n- プレイリストの長さ → 曲の数\\n- チームの長さ → メンバーの数\\n- 買い物かごの長さ → 商品の数\\n\\n**例：** プレイリストの曲数を取得しよう！\\n\\n```python\\nclass Playlist:\\n    def __init__(self, songs):\\n        self.songs = songs\\n    \\n    def __len__(self):\\n        return len(self.songs)\\n\\npl = Playlist(['A', 'B', 'C'])\\nprint(len(pl))  # 3\\n```\\n\\n**何をしているか：**\\n1. `__len__` メソッドを定義\\n2. `self.songs` リストの長さを返す\\n3. `len(pl)` で自動的に `__len__` が呼ばれる\\n\\n**ポイント：** `__len__` は必ず **整数（int）** を返す必要があります。"
        }
      ],
      "correctCode": "# Teamクラスを定義\\nclass Team:\\n    # __init__メソッド（引数: self, members）\\n    def __init__(self, members):\\n        # self.membersにmembersを代入\\n        self.members = members\\n    \\n    # __len__メソッド（引数: selfのみ）\\n    def __len__(self):\\n        # メンバー数を返す\\n        return len(self.members)\\n\\n# チーム（アリス、ボブ、チャーリーの順）をteamに代入\\nteam = Team(['アリス', 'ボブ', 'チャーリー'])\\n# チームの人数を表示\\nprint(len(team))",
      "holeyCode": "# Teamクラスを定義\\nclass ___:\\n    # __init__メソッド（引数: self, members）\\n    def ___(self, ___):\\n        # self.membersにmembersを代入\\n        self.___ = ___\\n    ___\\n    # __len__メソッド（引数: selfのみ）\\n    def ___(self):\\n        # メンバー数を返す\\n        return ___(self.___)\\n___\\n# チーム（アリス、ボブ、チャーリーの順）をteamに代入\\n___ = ___(['___', '___', '___'])\\n# チームの人数を表示\\n___(___(___)",
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
          "        # メンバー数を返す",
          "        return len(self.members)",
          "",
          "# チーム（アリス、ボブ、チャーリーの順）をteamに代入",
          "team = Team(['アリス', 'ボブ', 'チャーリー'])",
          "# チームの人数を表示",
          "print(len(team))"
        ],
      "lineHints": [
          null,
          "チームを表すクラス名です。",
          null,
          "オブジェクト生成時に呼ばれる特殊メソッドで、メンバーリストを受け取ります。",
          null,
          "インスタンス属性に引数の値を保存します。",
          "この行を正しく入力してください。",
          null,
          "長さを返す特殊メソッド名です。",
          null,
          "メンバーリストの長さを返します。",
          null,
          null,
          "メンバーリストを渡してインスタンスを作成します。",
          null,
          "len()でインスタンスの長さを取得して出力します。"
        ],
        "candidates": {
          "keywords": [
            "__len__",
            "__size__",
            "__count__"
          ],
          "others": ["Team", "__init__", "members", "len", "team", "アリス", "ボブ", "チャーリー", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "dataclassデコレータ",
      "description": "関数の機能を後から拡張できる「デコレータ」を学びます",
      "tutorialSlides": [
        {
          "title": "@dataclassとは？",
          "content": "# データ用クラスを「簡単」に定義！\\n\\n**@dataclass（データクラス）** を使うと、**`__init__` や `__repr__` が自動で作られます！**\\n\\n**たとえ話：** 住所録のカードのようなもの。\\n- 普通のクラス: 「名前欄」「住所欄」を1つずつ手作りする\\n- データクラス: 「名前」「住所」と書くだけで自動的にカードが完成！\\n\\n**普通のクラス vs データクラス：**\\n\\n```python\\n# 普通のクラス（たくさん書く必要あり）\\nclass Point:\\n    def __init__(self, x, y):\\n        self.x = x\\n        self.y = y\\n\\n# データクラス（シンプル！）\\n@dataclass\\nclass Point:\\n    x: int\\n    y: int\\n```\\n\\n**自動で作られるもの：**\\n- `__init__`: 初期化メソッド\\n- `__repr__`: 表示用メソッド（`Point(x=3, y=4)` のように表示）\\n- `__eq__`: 等価比較メソッド\\n\\n**何をしているか：**\\n1. `from dataclasses import dataclass` でインポート\\n2. `@dataclass` をクラスの上に書く\\n3. `変数名: 型` の形式で属性を定義\\n4. `__init__` を書かなくても自動で作られる！"
        }
      ],
      "correctCode": "# dataclassデコレータをインポート\\nfrom dataclasses import dataclass\\n\\n# @dataclassデコレータ\\n@dataclass\\n# Personクラスを定義\\nclass Person:\\n    # 名前の型を文字列で指定\\n    name: str\\n    # 年齢の型を整数で指定\\n    age: int\\n\\n# Personを作成（名前に'太郎', 年齢に25）しpに代入\\np = Person('太郎', 25)\\n# pを表示\\nprint(p)",
      "holeyCode": "# dataclassデコレータをインポート\\nfrom ___ import ___\\n___\\n# @dataclassデコレータ\\n@___\\n# Personクラスを定義\\nclass ___:\\n    # 名前の型を文字列で指定\\n    ___: ___\\n    # 年齢の型を整数で指定\\n    ___: ___\\n___\\n# Personを作成（名前に'太郎', 年齢に25）しpに代入\\n___ = ___('___', ___)\\n# pを表示\\n___(___)",
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
          "# Personを作成（名前に'太郎', 年齢に25）しpに代入",
          "p = Person('太郎', 25)",
          "# pを表示",
          "print(p)"
        ],
      "lineHints": [
          null,
          "dataclassデコレータをインポートします。",
          null,
          null,
          "データクラスデコレータ名です。",
          null,
          "人を表すクラス名です。",
          null,
          "名前属性の型アノテーションを定義します。",
          null,
          "年齢属性の型アノテーションを定義します。",
          null,
          null,
          "クラスのインスタンスを作成して変数に代入します。",
          null,
          "インスタンスを出力します（自動生成された__repr__が呼ばれます）。"
        ],
        "candidates": {
          "keywords": [
            "@dataclass",
            "@property",
            "@classmethod"
          ],
          "others": ["dataclasses", "dataclass", "Person", "name", "str", "age", "int", "p", "太郎", "25", "print", ""]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Person(name='太郎', age=25)\\n"
          }
        ]
      }
  ]
};
