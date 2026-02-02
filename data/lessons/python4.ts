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
            "content": "# 親の能力を子供が受け継ぐ！\\\\n\\\\n**継承（けいしょう）** とは、既存のクラスの機能を **そのまま引き継いで** 新しいクラスを作ることです。\\\\n\\\\n現実世界で考えてみましょう：\\\\n- **親クラス（Animal）** = 動物の基本的な性質\\\\n- **子クラス（Dog）** = 動物の性質 + 犬特有の性質\\\\n\\\\n犬は「動物」なので、動物の機能は全部持っています。でも、犬だけの特別な機能も追加できます！\\\\n\\\\n**例：** 動物クラスを継承して犬クラスを作ろう！\\\\n\\\\n```python\\\\nclass Animal:\\\\n    def speak(self):\\\\n        print('...')\\\\n\\\\nclass Dog(Animal):  # Animalを継承\\\\n    def speak(self):\\\\n        print('Woof!')  # 犬専用の鳴き声\\\\n```\\\\n\\\\n**ポイント：** `class Dog(Animal):` の `(Animal)` で「Animalを継承する」という意味になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 乗り物を表す親クラスを定義\\\\nclass Vehicle:\\\\n    # インスタンスを初期設定するメソッドを定義\\\\n    def __init__(self, brand):\\\\n        # self.brandにbrandを代入\\\\n        self.brand = brand\\\\n\\\\n# Vehicleを継承してCarクラスを定義\\\\nclass Car(Vehicle):\\\\n    # クラクションを鳴らすメソッドを定義\\\\n    def honk(self):\\\\n        # ブランド名を含めたメッセージを表示\\\\n        print(f'{self.brand} car: Beep!')\\\\n\\\\n# 'Toyota'ブランドで車のインスタンスを作成\\\\ncar = Car('Toyota')\\\\n# インスタンスのメソッドを実行\\\\ncar.honk()",
        "holeyCode": "# 乗り物を表す親クラスを定義\\\\nclass ___:\\\\n    # インスタンスを初期設定するメソッドを定義\\\\n    def ___(self, brand):\\\\n        # self.brandにbrandを代入\\\\n        self.___ = brand\\\\n\\\\n# Vehicleを継承してCarクラスを定義\\\\nclass ___(Vehicle):\\\\n    # クラクションを鳴らすメソッドを定義\\\\n    def ___(self):\\\\n        # ブランド名を含めたメッセージを表示\\\\n        ___(f'{self.brand} car: Beep!')\\\\n\\\\n# 'Toyota'ブランドで車のインスタンスを作成\\\\ncar = Car('___')\\\\n# インスタンスのメソッドを実行\\\\ncar.___()",
        "correctLines": [
          "# 乗り物を表す親クラスを定義",
          "class Vehicle:",
          "    # インスタンスを初期設定するメソッドを定義",
          "    def __init__(self, brand):",
          "        # self.brandにbrandを代入",
          "        self.brand = brand",
          "",
          "# Vehicleを継承してCarクラスを定義",
          "class Car(Vehicle):",
          "    # クラクションを鳴らすメソッドを定義",
          "    def honk(self):",
          "        # ブランド名を含めたメッセージを表示",
          "        print(f'{self.brand} car: Beep!')",
          "",
          "# 'Toyota'ブランドで車のインスタンスを作成",
          "car = Car('Toyota')",
          "# インスタンスのメソッドを実行",
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
            "expected_output": "Toyota car: Beep!\\\\n"
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
            "content": "# 親クラスのメソッドを呼び出そう！\\\\n\\\\n**super（スーパー）** を使うと、**親クラスのメソッドを呼び出す** ことができます。\\\\n\\\\n「super」は「上の」という意味です。継承で「上にいる」親クラスを指します。\\\\n\\\\n**なぜ必要？**\\\\n\\\\n子クラスで `__init__` を作ると、親の `__init__` が上書きされてしまいます。\\\\n親の初期化処理も使いたいときは、`super().__init__()` で親の処理を呼び出します。\\\\n\\\\n**例：** 親と子の初期化を両方実行しよう！\\\\n\\\\n```python\\\\nclass Parent:\\\\n    def __init__(self, name):\\\\n        self.name = name\\\\n\\\\nclass Child(Parent):\\\\n    def __init__(self, name, age):\\\\n        super().__init__(name)  # 親の初期化を呼ぶ\\\\n        self.age = age          # 子だけの追加\\\\n```\\\\n\\\\n**ポイント：** `super().__init__(name)` で親クラスの `__init__` を実行しています。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 人を表す親クラスを定義\\\\nclass Person:\\\\n    # 名前を初期設定するメソッドを定義\\\\n    def __init__(self, name):\\\\n        # self.nameにnameを代入\\\\n        self.name = name\\\\n\\\\n# Personを継承してStudentクラスを定義\\\\nclass Student(Person):\\\\n    # name（名前）、grade（学年）の順で初期設定\\\\n    def __init__(self, name, grade):\\\\n        # 親クラスの初期化メソッドを呼び出し\\\\n        super().__init__(name)\\\\n        # self.gradeにgradeを代入\\\\n        self.grade = grade\\\\n\\\\n# 'Taro'、3年生としてインスタンスを作成\\\\ns = Student('Taro', 3)\\\\n# インスタンスの情報を表示\\\\nprint(f'{s.name} is in grade {s.grade}')",
        "holeyCode": "# 人を表す親クラスを定義\\\\nclass ___:\\\\n    # 名前を初期設定するメソッドを定義\\\\n    def ___(self, name):\\\\n        # self.nameにnameを代入\\\\n        self.___ = name\\\\n\\\\n# Personを継承してStudentクラスを定義\\\\nclass ___(Person):\\\\n    # name（名前）、grade（学年）の順で初期設定\\\\n    def ___(self, name, grade):\\\\n        # 親クラスの初期化メソッドを呼び出し\\\\n        super().__init__(___)\\\\n        # self.gradeにgradeを代入\\\\n        self.___ = grade\\\\n\\\\n# 'Taro'、3年生としてインスタンスを作成\\\\ns = Student('Taro', ___)\\\\n# インスタンスの情報を表示\\\\n___(f'{s.name} is in grade {s.grade}')",
        "correctLines": [
          "# 人を表す親クラスを定義",
          "class Person:",
          "    # 名前を初期設定するメソッドを定義",
          "    def __init__(self, name):",
          "        # self.nameにnameを代入",
          "        self.name = name",
          "",
          "# Personを継承してStudentクラスを定義",
          "class Student(Person):",
          "    # name（名前）、grade（学年）の順で初期設定",
          "    def __init__(self, name, grade):",
          "        # 親クラスの初期化メソッドを呼び出し",
          "        super().__init__(name)",
          "        # self.gradeにgradeを代入",
          "        self.grade = grade",
          "",
          "# 'Taro'、3年生としてインスタンスを作成",
          "s = Student('Taro', 3)",
          "# インスタンスの情報を表示",
          "print(f'{s.name} is in grade {s.grade}')"
        ],
        "lineHints": [
          null,
          "super()で親クラスを参照します。",
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
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "super()",
            "parent",
            "self"
          ],
          "others": ["Person", "__init__(self, name)", "name", "Student(Person)", "__init__(self, name, grade)", "grade", "Student('Taro', 3)", "f'{s.name} is in grade {s.grade}'", "__init__", "Student", "3", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Taro is in grade 3\\\\n"
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
            "content": "# メソッドを「属性（ぞくせい）」のように使う\\\\n\\\\n**@property（プロパティ）** というデコレータを使うと、**メソッド（関数）を属性のようにアクセス** できるようになります。\\\\n\\\\n**普通のメソッドとの違い：**\\\\n- 普通のメソッド: `c.area()` ← **括弧（かっこ）が必要**\\\\n- プロパティ: `c.area` ← **括弧なしで呼べる！**\\\\n\\\\n**たとえ話：** 電卓の「=」ボタンを押さなくても、数字を見るだけで答えが分かる感じです。\\\\n\\\\n**例：** 円の面積を括弧なしで取得しよう！\\\\n\\\\n```python\\\\nclass Circle:\\\\n    def __init__(self, radius):\\\\n        self._radius = radius\\\\n    \\\\n    @property\\\\n    def area(self):\\\\n        return 3.14 * self._radius ** 2\\\\n\\\\nc = Circle(5)\\\\nprint(c.area)  # 78.5 (括弧なし！)\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `@property` をメソッドの上に書く\\\\n2. `area` メソッドが属性のように使える\\\\n3. `c.area` で面積が計算されて返ってくる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 長方形を表すクラスを定義\\\\nclass Rectangle:\\\\n    # width（幅）、height（高さ）の順で初期設定\\\\n    def __init__(self, width, height):\\\\n        # 幅を保存\\\\n        self.width = width\\\\n        # 高さを保存\\\\n        self.height = height\\\\n    \\\\n    # メソッドを属性のように扱えるように設定\\\\n    @property\\\\n    # 面積を計算して返すメソッドを定義\\\\n    def area(self):\\\\n        # 幅と高さの積を計算\\\\n        return self.width * self.height\\\\n\\\\n# 幅4、高さ5のインスタンスを作成\\\\nr = Rectangle(4, 5)\\\\n# 面積を表示（プロパティなので括弧なし）\\\\nprint(r.area)",
        "holeyCode": "# 長方形を表すクラスを定義\\\\nclass ___:\\\\n    # width（幅）、height（高さ）の順で初期設定\\\\n    def ___(self, width, height):\\\\n        # 幅を保存\\\\n        self.___ = width\\\\n        # 高さを保存\\\\n        self.___ = height\\\\n    \\\\n    # メソッドを属性のように扱えるように設定\\\\n    @___\\\\n    # 面積を計算して返すメソッドを定義\\\\n    def ___(self):\\\\n        # 幅と高さの積を計算\\\\n        return self.___ * self.___\\\\n\\\\n# 幅4、高さ5のインスタンスを作成\\\\nr = Rectangle(___, 5)\\\\n# 面積を表示（プロパティなので括弧なし）\\\\n___(r.area)",
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
          "プロパティデコレータを使います。",
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
          null,
          null,
          null
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
            "expected_output": "20\\\\n"
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
            "content": "# クラス全体に関わるメソッド\\\\n\\\\n**@classmethod（クラスメソッド）** は、**インスタンスではなくクラス自体** に対して動作するメソッドを定義します。\\\\n\\\\n**普通のメソッドとの違い：**\\\\n- 普通のメソッド: `self`（インスタンス自身）を受け取る\\\\n- クラスメソッド: `cls`（クラス自体）を受け取る\\\\n\\\\n**たとえ話：** \\\\n- 普通のメソッド = 「この犬」の情報を扱う\\\\n- クラスメソッド = 「犬という種類全体」の情報を扱う\\\\n\\\\n**例：** 作られた犬の総数を数えよう！\\\\n\\\\n```python\\\\nclass Counter:\\\\n    count = 0  # クラス変数（全インスタンス共通）\\\\n    \\\\n    @classmethod\\\\n    def increment(cls):\\\\n        cls.count += 1  # クラス変数を操作\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `count = 0` はクラス変数（設計図にある共通データ）\\\\n2. `@classmethod` でクラスメソッドを定義\\\\n3. `cls.count` でクラス変数にアクセスして操作"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 犬を表すクラスを定義\\\\nclass Dog:\\\\n    # 生成された数をカウントするクラス変数を定義\\\\n    count = 0\\\\n    \\\\n    # 名前を初期設定するメソッドを定義\\\\n    def __init__(self, name):\\\\n        # 名前を保存\\\\n        self.name = name\\\\n        # インスタンスが作られるたびにカウントを増やす\\\\n        Dog.count += 1\\\\n    \\\\n    # クラス全体に関する処理を行うメソッドを定義\\\\n    @classmethod\\\\n    # カウントされている数を取得するメソッドを定義\\\\n    def get_count(cls):\\\\n        # クラス変数を参照して返す\\\\n        return cls.count\\\\n\\\\n# 1つ目のインスタンスを作成\\\\nd1 = Dog('Pochi')\\\\n# 2つ目のインスタンスを作成\\\\nd2 = Dog('Hachi')\\\\n# クラスメソッドを呼び出して合計数を表示\\\\nprint(Dog.get_count())",
        "holeyCode": "# 犬を表すクラスを定義\\\\nclass ___:\\\\n    # 生成された数をカウントするクラス変数を定義\\\\n    count = ___\\\\n    \\\\n    # 名前を初期設定するメソッドを定義\\\\n    def ___(self, name):\\\\n        # 名前を保存\\\\n        self.___ = name\\\\n        # インスタンスが作られるたびにカウントを増やす\\\\n        Dog.count += ___\\\\n    \\\\n    # クラス全体に関する処理を行うメソッドを定義\\\\n    @___\\\\n    # カウントされている数を取得するメソッドを定義\\\\n    def ___(cls):\\\\n        # クラス変数を参照して返す\\\\n        return cls.___\\\\n\\\\n# 1つ目のインスタンスを作成\\\\nd___ = Dog('Pochi')\\\\n# 2つ目のインスタンスを作成\\\\nd___ = Dog('Hachi')\\\\n# クラスメソッドを呼び出して合計数を表示\\\\n___(Dog.get_count())",
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
          "# 1つ目のインスタンスを作成",
          "d1 = Dog('Pochi')",
          "# 2つ目のインスタンスを作成",
          "d2 = Dog('Hachi')",
          "# クラスメソッドを呼び出して合計数を表示",
          "print(Dog.get_count())"
        ],
        "lineHints": [
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
          "keywords": [
            "@classmethod",
            "@staticmethod",
            "@property"
          ],
          "others": ["Dog", "0", "__init__(self, name)", "name", "Dog.count += 1", "get_count(cls)", "cls.count", "Dog('Pochi')", "Dog('Hachi')", "Dog.get_count(", "__init__", "1", "classmethod", "get_count", "count", "2", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\\\n"
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
            "content": "# インスタンスに依存しないメソッド\\\\n\\\\n**@staticmethod（静的メソッド）** は、**self も cls も必要としない** メソッドを定義します。\\\\n\\\\n**3つのメソッドの比較：**\\\\n| メソッド種類 | 第一引数 | 用途 |\\\\n|------------|---------|------|\\\\n| 普通のメソッド | `self` | インスタンスのデータを扱う |\\\\n| クラスメソッド | `cls` | クラス全体のデータを扱う |\\\\n| 静的メソッド | なし | 独立した処理を行う |\\\\n\\\\n**たとえ話：** クラスの「便利な道具箱」に入っている関数。クラスに関係ある処理だけど、クラスやインスタンスのデータは使わない。\\\\n\\\\n**例：** 計算だけする便利なメソッド！\\\\n\\\\n```python\\\\nclass Math:\\\\n    @staticmethod\\\\n    def add(a, b):\\\\n        return a + b\\\\n\\\\nprint(Math.add(3, 5))  # 8\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `@staticmethod` でデコレートする\\\\n2. `self` や `cls` は書かない\\\\n3. `Math.add(3, 5)` でクラスから直接呼び出せる"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# バリデータクラスを定義\\\\nclass Validator:\\\\n    # 状態に依存しない静的メソッドを定義\\\\n    @staticmethod\\\\n    # 数値が正かどうかを判定するメソッドを定義\\\\n    def is_positive(n):\\\\n        # 0より大きいかどうかを返す\\\\n        return n > 0\\\\n\\\\n# クラスから直接メソッドを呼び出して結果を表示\\\\nprint(Validator.is_positive(5))\\\\n# 負の数値を渡して結果を表示\\\\nprint(Validator.is_positive(-3))",
        "holeyCode": "# バリデータクラスを定義\\\\nclass ___:\\\\n    # 状態に依存しない静的メソッドを定義\\\\n    @___\\\\n    # 数値が正かどうかを判定するメソッドを定義\\\\n    def ___(n):\\\\n        # 0より大きいかどうかを返す\\\\n        return n > ___\\\\n\\\\n# クラスから直接メソッドを呼び出して結果を表示\\\\n___(Validator.is_positive(5))\\\\n# 負の数値を渡して結果を表示\\\\n___(Validator.is_positive(-3))",
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
          "静的メソッドデコレータを使います。",
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
            "expected_output": "True\\\\nFalse\\\\n"
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
            "content": "# 「実装を強制する」設計図\\\\n\\\\n**ABC（Abstract Base Class）** = **抽象基底クラス（ちゅうしょうきていクラス）** は、**子クラスに「このメソッドは必ず作ってね」と約束させる** 仕組みです。\\\\n\\\\n**たとえ話：** 学校の課題のようなもの。\\\\n- 先生（抽象クラス）: 「作文を書きなさい」と指示を出す\\\\n- 生徒（子クラス）: 実際に作文を書く（実装する）\\\\n- 作文を書かない生徒はエラー！\\\\n\\\\n**キーワード：**\\\\n- `ABC`: 抽象クラスを作るための親クラス\\\\n- `@abstractmethod`: 「必ず実装してね」と印をつけるデコレータ\\\\n\\\\n**例：** 図形クラスに「面積を計算するメソッドを作れ」と指示！\\\\n\\\\n```python\\\\nfrom abc import ABC, abstractmethod\\\\n\\\\nclass Shape(ABC):  # ABCを継承\\\\n    @abstractmethod  # これを継承した子は必ず実装する\\\\n    def area(self):\\\\n        pass\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `abc` モジュールから `ABC` と `abstractmethod` をインポート\\\\n2. `class Shape(ABC)` で抽象クラスを作る\\\\n3. `@abstractmethod` で「このメソッドは子クラスで必ず実装」と指定"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 抽象クラス関連の機能を読み込み\\\\nfrom abc import ABC, abstractmethod\\\\n\\\\n# 動物を表す抽象クラスを定義\\\\nclass Animal(ABC):\\\\n    # 子クラスで実装必須のメソッドを定義\\\\n    @abstractmethod\\\\n    # 鳴き声を出すメソッドの枠組みを定義\\\\n    def speak(self):\\\\n        # 抽象メソッドなので処理はなし\\\\n        pass\\\\n\\\\n# 抽象クラスを継承して実装クラスを作成\\\\nclass Cat(Animal):\\\\n    # speakメソッドを具体的に実装\\\\n    def speak(self):\\\\n        # 鳴き声を返す\\\\n        return 'Meow'\\\\n\\\\n# インスタンスを作成\\\\ncat = Cat()\\\\n# 実装したメソッドを実行して表示\\\\nprint(cat.speak())",
        "holeyCode": "# 抽象クラス関連の機能を読み込み\\\\nfrom abc import ABC, ___\\\\n\\\\n# 動物を表す抽象クラスを定義\\\\nclass ___(ABC):\\\\n    # 子クラスで実装必須のメソッドを定義\\\\n    @___\\\\n    # 鳴き声を出すメソッドの枠組みを定義\\\\n    def ___(self):\\\\n        # 抽象メソッドなので処理はなし\\\\n        ___\\\\n\\\\n# 抽象クラスを継承して実装クラスを作成\\\\nclass ___(Animal):\\\\n    # speakメソッドを具体的に実装\\\\n    def ___(self):\\\\n        # 鳴き声を返す\\\\n        return '___'\\\\n\\\\n# インスタンスを作成\\\\ncat = ___()\\\\n# 実装したメソッドを実行して表示\\\\n___(cat.speak())",
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
          null,
          null,
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "@abstractmethod",
            "@property",
            "@staticmethod"
          ],
          "others": ["ABC, abstractmethod", "Animal(ABC)", "speak(self)", "pass", "Cat(Animal)", "'Meow'", "Cat()", "cat.speak(", "abstractmethod", "Animal", "speak", "Cat", "Meow", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Meow\\\\n"
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
            "content": "# オブジェクトを「文字列」で表す\\\\n\\\\n**__str__（ストリング）** メソッドを定義すると、`print()` や `str()` での **表示をカスタマイズ** できます。\\\\n\\\\n**たとえ話：** 自己紹介カードのようなもの。\\\\n- `__str__` がないとき: 「私はメモリの0x12345番地にいる何か」\\\\n- `__str__` があるとき: 「私は太郎です、25歳です」\\\\n\\\\n**例：** 座標を見やすく表示しよう！\\\\n\\\\n```python\\\\nclass Point:\\\\n    def __init__(self, x, y):\\\\n        self.x = x\\\\n        self.y = y\\\\n    \\\\n    def __str__(self):\\\\n        return f'Point({self.x}, {self.y})'\\\\n\\\\np = Point(3, 4)\\\\nprint(p)  # Point(3, 4)  ← 見やすい！\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `__str__` は「特殊メソッド」（アンダーバー2つで囲まれた特別なメソッド）\\\\n2. `print(p)` すると自動的に `__str__` が呼ばれる\\\\n3. `return` で返した文字列がそのまま表示される\\\\n\\\\n**ポイント：** `__str__` がないと `<__main__.Point object at 0x...>` のような分かりにくい表示になります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 本を表すクラスを定義\\\\nclass Book:\\\\n    # title（タイトル）、author（著者）の順で初期化\\\\n    def __init__(self, title, author):\\\\n        # self.titleにtitleを代入\\\\n        self.title = title\\\\n        # self.authorにauthorを代入\\\\n        self.author = author\\\\n    \\\\n    # 文字列表現を定義するメソッドを定義\\\\n    def __str__(self):\\\\n        # 「タイトル by 著者」の形式で返す\\\\n        return f'{self.title} by {self.author}'\\\\n\\\\n# title（タイトル）、author（著者）の順でインスタンスを作成\\\\nbook = Book('Python Guide', 'Taro')\\\\n# インスタンスを表示\\\\nprint(book)",
        "holeyCode": "# 本を表すクラスを定義\\\\nclass ___:\\\\n    # title（タイトル）、author（著者）の順で初期化\\\\n    def ___(self, title, author):\\\\n        # self.titleにtitleを代入\\\\n        self.___ = title\\\\n        # self.authorにauthorを代入\\\\n        self.___ = author\\\\n    \\\\n    # 文字列表現を定義するメソッドを定義\\\\n    def ___(self):\\\\n        # 「タイトル by 著者」の形式で返す\\\\n        return f'{self.title} by {self.___}'\\\\n\\\\n# title（タイトル）、author（著者）の順でインスタンスを作成\\\\nbook = Book('Python Guide', '___')\\\\n# インスタンスを表示\\\\n___(book)",
        "correctLines": [
          "# 本を表すクラスを定義",
          "class Book:",
          "    # title（タイトル）、author（著者）の順で初期化",
          "    def __init__(self, title, author):",
          "        # self.titleにtitleを代入",
          "        self.title = title",
          "        # self.authorにauthorを代入",
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
          "特殊メソッド__str__を定義します。",
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
          "keywords": [
            "__str__",
            "__repr__",
            "__init__"
          ],
          "others": ["Book", "__init__(self, title, author)", "title", "author", "f'{self.title} by {self.author}'", "Book('Python Guide', 'Taro')", "book", "Taro", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Python Guide by Taro\\\\n"
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
            "content": "# オブジェクトの「等しさ」を定義する\\\\n\\\\n**__eq__（イコール）** メソッドを定義すると、`==` での **比較方法をカスタマイズ** できます。\\\\n\\\\n**たとえ話：** 「同じ」の判断基準を決めるもの。\\\\n- 2枚のカードが「同じ」とは？ → 数字と絵柄が同じこと！\\\\n- 2つの座標が「同じ」とは？ → xとyの値が同じこと！\\\\n\\\\n**__eq__ がない場合：**\\\\n同じ内容でも別々に作ったオブジェクトは「別物」として扱われます。\\\\n\\\\n**例：** 座標の等しさを判定しよう！\\\\n\\\\n```python\\\\nclass Point:\\\\n    def __init__(self, x, y):\\\\n        self.x = x\\\\n        self.y = y\\\\n    \\\\n    def __eq__(self, other):\\\\n        return self.x == other.x and self.y == other.y\\\\n\\\\np1 = Point(1, 2)\\\\np2 = Point(1, 2)\\\\nprint(p1 == p2)  # True（内容が同じ！）\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `__eq__` の引数 `other` は比較相手のオブジェクト\\\\n2. `self.x == other.x` でx座標を比較\\\\n3. `and` で両方の条件を満たすかチェック\\\\n4. `True` か `False` を返す"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# 本を表すクラスを定義\\\\nclass Book:\\\\n    # タイトルと著者で初期化\\\\n    def __init__(self, title, author):\\\\n        # self.titleにtitleを代入\\\\n        self.title = title\\\\n        # self.authorにauthorを代入\\\\n        self.author = author\\\\n    \\\\n    # 等価比較を定義するメソッド\\\\n    def __eq__(self, other):\\\\n        # タイトルと著者が両方一致するかを返す\\\\n        return self.title == other.title and self.author == other.author\\\\n\\\\n# 本のインスタンスを作成\\\\nbook1 = Book('Python Basics', 'Tanaka')\\\\n# 同じ内容で別のインスタンスを作成\\\\nbook2 = Book('Python Basics', 'Tanaka')\\\\n# 2つの本が等しいか比較\\\\nprint(book1 == book2)",
        "holeyCode": "# 本を表すクラスを定義\\\\nclass ___:\\\\n    # タイトルと著者で初期化\\\\n    def ___(self, title, author):\\\\n        # self.titleにtitleを代入\\\\n        self.___ = title\\\\n        # self.authorにauthorを代入\\\\n        self.___ = author\\\\n    \\\\n    # 等価比較を定義するメソッド\\\\n    def ___(self, other):\\\\n        # タイトルと著者が両方一致するかを返す\\\\n        return self.title == other.title and self.___ == other.author\\\\n\\\\n# 本のインスタンスを作成\\\\nbook1 = Book('___', 'Tanaka')\\\\n# 同じ内容で別のインスタンスを作成\\\\nbook2 = Book('___', 'Tanaka')\\\\n# 2つの本が等しいか比較\\\\n___(book1 == book2)",
        "correctLines": [
          "# 本を表すクラスを定義",
          "class Book:",
          "    # タイトルと著者で初期化",
          "    def __init__(self, title, author):",
          "        # self.titleにtitleを代入",
          "        self.title = title",
          "        # self.authorにauthorを代入",
          "        self.author = author",
          "    ",
          "    # 等価比較を定義するメソッド",
          "    def __eq__(self, other):",
          "        # タイトルと著者が両方一致するかを返す",
          "        return self.title == other.title and self.author == other.author",
          "",
          "# 本のインスタンスを作成",
          "book1 = Book('Python Basics', 'Tanaka')",
          "# 同じ内容で別のインスタンスを作成",
          "book2 = Book('Python Basics', 'Tanaka')",
          "# 2つの本が等しいか比較",
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
          "others": ["Book", "title", "author", "Book(\"Python入門\", \"田中\")", "print", "Python Basics"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "True\\\\n"
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
            "content": "# `len()` を使えるようにする\\\\n\\\\n**__len__（レングス）** メソッドを定義すると、`len()` 関数で **オブジェクトの「長さ」や「数」** を取得できるようになります。\\\\n\\\\n**たとえ話：** 「何個入ってる？」と聞かれたときの答え方を教えるもの。\\\\n- プレイリストの長さ → 曲の数\\\\n- チームの長さ → メンバーの数\\\\n- 買い物かごの長さ → 商品の数\\\\n\\\\n**例：** プレイリストの曲数を取得しよう！\\\\n\\\\n```python\\\\nclass Playlist:\\\\n    def __init__(self, songs):\\\\n        self.songs = songs\\\\n    \\\\n    def __len__(self):\\\\n        return len(self.songs)\\\\n\\\\npl = Playlist(['A', 'B', 'C'])\\\\nprint(len(pl))  # 3\\\\n```\\\\n\\\\n**何をしているか：**\\\\n1. `__len__` メソッドを定義\\\\n2. `self.songs` リストの長さを返す\\\\n3. `len(pl)` で自動的に `__len__` が呼ばれる\\\\n\\\\n**ポイント：** `__len__` は必ず **整数（int）** を返す必要があります。"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# Teamクラスを定義\\\\nclass Team:\\\\n    # __init__メソッド（引数: self, members）\\\\n    def __init__(self, members):\\\\n        # self.membersにmembersを代入\\\\n        self.members = members\\\\n    \\\\n    # __len__メソッド（引数: selfのみ）\\\\n    def __len__(self):\\\\n        # len(self.members)を返す\\\\n        return len(self.members)\\\\n\\\\n# Teamインスタンスを作成（Alice, Bob, Charlie）\\\\nteam = Team(['Alice', 'Bob', 'Charlie'])\\\\n# len(team)を表示\\\\nprint(len(team))",
        "holeyCode": "# Teamクラスを定義\\\\nclass ___:\\\\n    # __init__メソッド（引数: self, members）\\\\n    def ___(self, members):\\\\n        # self.membersにmembersを代入\\\\n        self.___ = members\\\\n    \\\\n    # __len__メソッド（引数: selfのみ）\\\\n    def ___(self):\\\\n        # len(self.members)を返す\\\\n        return len(self.___)\\\\n\\\\n# Teamインスタンスを作成（Alice, Bob, Charlie）\\\\nteam = Team(['Alice', 'Bob', '___'])\\\\n# len(team)を表示\\\\n___(len(team))",
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
          "# Teamインスタンスを作成（Alice, Bob, Charlie）",
          "team = Team(['Alice', 'Bob', 'Charlie'])",
          "# len(team)を表示",
          "print(len(team))"
        ],
        "lineHints": [
          null,
          "長さを返す特殊メソッドを定義します。",
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
          "keywords": [
            "__len__",
            "__size__",
            "__count__"
          ],
          "others": ["Team", "__init__(self, members)", "members", "len(self.members)", "Team(['Alice', 'Bob', 'Charlie'])", "len(team", "__init__", "Charlie", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "3\\\\n"
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
            "content": "# データ用クラスを「簡単」に定義！\\\\n\\\\n**@dataclass（データクラス）** を使うと、面倒なメソッドが自動で作られます！\\\\n\\\\n**たとえ話：** 住所録のカードのようなもの。\\\\n- 普通のクラス: 「名前欄」「住所欄」を1つずつ手作りする\\\\n- データクラス: 「名前」「住所」と書くだけで自動的にカードが完成！\\\\n\\\\n**普通のクラス vs データクラス：**\\\\n\\\\n```python\\\\n# 普通のクラス（たくさん書く必要あり）\\\\nclass Point:\\\\n    def __init__(self, x, y):\\\\n        self.x = x\\\\n        self.y = y\\\\n\\\\n# データクラス（シンプル！）\\\\n@dataclass\\\\nclass Point:\\\\n    x: int\\\\n    y: int\\\\n```\\\\n\\\\n**自動で作られるもの：**\\\\n- `__init__`: 初期化メソッド\\\\n- `__repr__`: 表示用メソッド\\\\n- `__eq__`: 等価比較メソッド\\\\n\\\\n**何をしているか：**\\\\n1. `from dataclasses import dataclass` でインポート\\\\n2. `@dataclass` をクラスの上に書く\\\\n3. `変数名: 型` の形式で属性を定義\\\\n4. `__init__` を書かなくても自動で作られる！"
          }
        ],
        "initialDisplayMode": "holey",
        "correctCode": "# dataclassデコレータをインポート\\\\nfrom dataclasses import dataclass\\\\n\\\\n# データクラスとして定義するデコレータを適用\\\\n@dataclass\\\\n# 人物を表すクラスを定義\\\\nclass Person:\\\\n    # 名前の型を文字列で指定\\\\n    name: str\\\\n    # 年齢の型を整数で指定\\\\n    age: int\\\\n\\\\n# name（名前）、age（年齢）の順でインスタンスを作成\\\\np = Person('Taro', 25)\\\\n# インスタンスを表示\\\\nprint(p)",
        "holeyCode": "# dataclassデコレータをインポート\\\\nfrom dataclasses import ___\\\\n\\\\n# データクラスとして定義するデコレータを適用\\\\n@___\\\\n# 人物を表すクラスを定義\\\\nclass ___:\\\\n    # 名前の型を文字列で指定\\\\n    name: ___\\\\n    # 年齢の型を整数で指定\\\\n    age: ___\\\\n\\\\n# name（名前）、age（年齢）の順でインスタンスを作成\\\\np = Person('Taro', ___)\\\\n# インスタンスを表示\\\\n___(p)",
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
          null,
          null,
          null,
          null
        ],
        "candidates": {
          "keywords": [
            "@dataclass",
            "@property",
            "@classmethod"
          ],
          "others": ["dataclass", "Person", "str", "int", "Person('Taro', 25)", "p", "25", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Person(name='Taro', age=25)\\\\n"
          }
        ]
      }
  ]
};
