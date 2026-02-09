export const pythonData4 = {
  "language": "python",
  "lessonId": "python-4",
  "lessonTitle": "Python IV - オブジェクト指向の極意",
  "lessonDescription": "Pythonのオブジェクト指向プログラミングを深く学びます。継承、多重継承、抽象クラス、プロパティなどを身につけましょう。",
  "lessonDifficulty": "hard",
  "lessonOrder": 4,
  "tutorialSlides": [
    {
      "title": "クラスの継承（けいしょう）",
      "content": "すでにあるクラスの機能を引き継いで、新しいクラスを作ることを**継承（けいしょう）**と呼びます。\\n\\n```python\\nclass Animal:\\n    def eat(self):\\n        print(\"食べています\")\\n\\nclass Dog(Animal): # Animalを継承\\n    def bark(self):\\n        print(\"ワン！\")\\n```\\n\\n`Dog` は `Animal` の `eat` メソッドも使うことができます。"
    },
    {
      "title": "親クラスを呼び出す super()",
      "content": "継承した子クラスから、親クラス（スーパークラス）のメソッドを呼び出すには `super()` を使います。\\n\\n```python\\nclass Student(Person):\\n    def __init__(self, name, grade):\\n        super().__init__(name) # 親の初期化を呼ぶ\\n        self.grade = grade\\n```"
    }
  ],
  "exercises": [
    {
      "title": "クラスの継承",
      "correctCode": "# 親クラスVehicleを定義\\nclass Vehicle:\\n    # __init__メソッドを定義\\n    def __init__(self, brand):\\n        # self.brandにbrandを代入\\n        self.brand = brand\\n\\n# Carクラスを定義（Vehicleを継承）\\nclass Car(Vehicle):\\n    # honkメソッドを定義\\n    def honk(self):\\n        # 「ブランド名 car: Beep!」を表示\\n        print(f'{self.brand} car: Beep!')\\n\\n# Car('トヨタ')のインスタンスを作成\\ncar = Car('トヨタ')\\n# honkメソッドを実行\\ncar.honk()",
      "holeyCode": "# 親クラスVehicleを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def __init__(self, ___):\\n        # self.brandにbrandを代入\\n        self.___ = ___\\n\\n# Carクラスを定義（Vehicleを継承）\\nclass ___(Vehicle):\\n    # honkメソッドを定義\\n    def ___(self):\\n        # 「ブランド名 car: Beep!」を表示\\n        ___(f'{self.brand} car: Beep!')\\n\\n# Car('トヨタ')のインスタンスを作成\\n___ = ___('トヨタ')\\n# honkメソッドを実行\\n___.___()",
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
          "        # 「ブランド名 car: Beep!」を表示",
          "        print(f'{self.brand} car: Beep!')",
          "",
          "# Car('トヨタ')のインスタンスを作成",
          "car = Car('トヨタ')",
          "# honkメソッドを実行",
          "car.honk()"
        ],
      "lineHints": [
          null,
          "クラス名 Vehicle を入力します。",
          null,
          "引数名 brand を指定します。",
          null,
          "属性名 brand を入力します。",
          null,
          null,
          "子クラス名 Car を定義します。",
          null,
          "メソッド名 honk を定義します。",
          null,
          "表示のための print 関数を入力します。",
          null,
          null,
          "変数名 car と、クラス名 Car を使ったインスタンス作成を入力します。",
          null,
          "メソッド honk を呼び出します。"
        ],
        "candidates": {
          "keywords": ["Vehicle", "Car"],
          "others": ["brand", "honk", "print", "car"]
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
      "correctCode": "# 親クラスPersonを定義\\nclass Person:\\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # self.nameにnameを代入\\n        self.name = name\\n\\n# Studentクラスを定義（Personを継承）\\nclass Student(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def __init__(self, name, grade):\\n        # 親の__init__を呼ぶ\\n        super().__init__(name)\\n        # self.gradeにgradeを代入\\n        self.grade = grade\\n\\n# Student('太郎', 3)のインスタンスを作成\\ns = Student('太郎', 3)\\n# 「太郎は3年生です」と表示\\nprint(f'{s.name}は{s.grade}年生です')",
      "holeyCode": "# 親クラスPersonを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def __init__(self, ___):\\n        # self.nameにnameを代入\\n        self.___ = name\\n\\n# Studentクラスを定義（Personを継承）\\nclass ___(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def __init__(self, name, ___):\\n        # 親の__init__を呼ぶ\\n        ___().__init__(___)\\n        # self.gradeにgradeを代入\\n        self.___ = grade\\n\\n# Student('太郎', 3)のインスタンスを作成\\n___ = ___('太郎', 3)\\n# 「太郎は3年生です」と表示\\n___(f'{s.name}は{s.grade}年生です')",
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
          "        # 親の__init__を呼ぶ",
          "        super().__init__(name)",
          "        # self.gradeにgradeを代入",
          "        self.grade = grade",
          "",
          "# Student('太郎', 3)のインスタンスを作成",
          "s = Student('太郎', 3)",
          "# 「太郎は3年生です」と表示",
          "print(f'{s.name}は{s.grade}年生です')"
        ],
      "lineHints": [
          null,
          "クラス名 Person を入力します。",
          null,
          "引数名 name を指定します。",
          null,
          "属性名 name を指定します。",
          null,
          null,
          "子クラス名 Student を定義します。",
          null,
          "引数名 grade を指定します。",
          null,
          "親クラスを参照する super と、渡す引数 name を入力します。",
          null,
          "属性名 grade を指定します。",
          null,
          null,
          "変数 s とクラス名 Student を入力します。",
          null,
          "表示のための print 関数を入力します。"
        ],
        "candidates": {
          "keywords": ["super", "Person", "Student"],
          "others": ["name", "grade", "s", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "太郎は3年生です\\n"
          }
        ]
      },
    {
      "title": "@propertyデコレータ",
      "correctCode": "# Rectangleクラスを定義\\nclass Rectangle:\\n    # __init__メソッドを定義\\n    def __init__(self, width, height):\\n        # 幅を保存\\n        self.width = width\\n        # 高さを保存\\n        self.height = height\\n\\n    # @propertyデコレータ\\n    @property\\n    # areaプロパティを定義\\n    def area(self):\\n        # 面積（幅 * 高さ）を返す\\n        return self.width * self.height\\n\\n# Rectangle(4, 5)のインスタンスを作成\\nr = Rectangle(4, 5)\\n# r.areaを表示\\nprint(r.area)",
      "holeyCode": "# Rectangleクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def __init__(self, width, ___):\\n        # 幅を保存\\n        self.___ = width\\n        # 高さを保存\\n        self.___ = height\\n\\n    # @propertyデコレータ\\n    @___\\n    # areaプロパティを定義\\n    def ___(self):\\n        # 面積（幅 * 高さ）を返す\\n        return self.___ * self.___\\n\\n# Rectangle(4, 5)のインスタンスを作成\\n___ = ___(___, 5)\\n# r.areaを表示\\n___(___.area)",
      "correctLines": [
          "# Rectangleクラスを定義",
          "class Rectangle:",
          "    # __init__メソッドを定義",
          "    def __init__(self, width, height):",
          "        # 幅を保存",
          "        self.width = width",
          "        # 高さを保存",
          "        self.height = height",
          "",
          "    # @propertyデコレータ",
          "    @property",
          "    # areaプロパティを定義",
          "    def area(self):",
          "        # 面積（幅 * 高さ）を返す",
          "        return self.width * self.height",
          "",
          "# Rectangle(4, 5)のインスタンスを作成",
          "r = Rectangle(4, 5)",
          "# r.areaを表示",
          "print(r.area)"
        ],
      "lineHints": [
          null,
          "クラス名 Rectangle を入力します。",
          null,
          "引数名 height を指定します。",
          null,
          "属性名 width を指定します。",
          null,
          "属性名 height を指定します。",
          null,
          null,
          "デコレータ property を入力します。",
          null,
          "プロパティ名 area を定義します。",
          null,
          "属性名 width と height を参照します。",
          null,
          null,
          "変数 r とクラス名 Rectangle 、引数 4 を入力します。",
          null,
          "表示のための print 関数と、変数 r を指定します。"
        ],
        "candidates": {
          "keywords": ["property", "Rectangle"],
          "others": ["height", "width", "area", "4", "r", "print"]
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
      "correctCode": "# Dogクラスを定義\\nclass Dog:\\n    # クラス変数countを定義\\n    count = 0\\n\\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # 名前を保存\\n        self.name = name\\n        # カウントを増やす\\n        Dog.count += 1\\n\\n    # @classmethodデコレータ\\n    @classmethod\\n    # get_countクラスメソッドを定義\\n    def get_count(cls):\\n        # クラス変数を返す\\n        return cls.count\\n\\n# Dogを2回作成\\nd1 = Dog('ポチ')\\nd2 = Dog('ハチ')\\n# 合計数（Dog.get_count()）を表示\\nprint(Dog.get_count())",
      "holeyCode": "# Dogクラスを定義\\nclass ___:\\n    # クラス変数countを定義\\n    ___ = 0\\n\\n    # __init__メソッドを定義\\n    def __init__(self, ___):\\n        # 名前を保存\\n        self.___ = name\\n        # カウントを増やす\\n        Dog.___ += 1\\n\\n    # @classmethodデコレータ\\n    @___\\n    # get_countクラスメソッドを定義\\n    def ___(cls):\\n        # クラス変数を返す\\n        return cls.___\\n\\n# Dogを2回作成\\nd1 = Dog('ポチ')\\nd2 = Dog('ハチ')\\n# 合計数（Dog.get_count()）を表示\\n___(Dog.___())",
      "correctLines": [
          "# Dogクラスを定義",
          "class Dog:",
          "    # クラス変数countを定義",
          "    count = 0",
          "",
          "    # __init__メソッドを定義",
          "    def __init__(self, name):",
          "        # 名前を保存",
          "        self.name = name",
          "        # カウントを増やす",
          "        Dog.count += 1",
          "",
          "    # @classmethodデコレータ",
          "    @classmethod",
          "    # get_countクラスメソッドを定義",
          "    def get_count(cls):",
          "        # クラス変数を返す",
          "        return cls.count",
          "",
          "# Dogを2回作成",
          "d1 = Dog('ポチ')",
          "d2 = Dog('ハチ')",
          "# 合計数（Dog.get_count()）を表示",
          "print(Dog.get_count())"
        ],
      "lineHints": [
          null,
          "クラス名 Dog を入力します。",
          null,
          "変数名 count を指定します。",
          null,
          null,
          "引数名 name を入力します。",
          null,
          "属性名 name を入力します。",
          null,
          "クラス変数名 count を指定します。",
          null,
          null,
          "デコレータ classmethod を入力します。",
          null,
          "メソッド名 get_count を定義します。",
          null,
          "クラス変数 count を指定します。",
          null,
          null,
          null,
          null,
          null,
          "表示のための print 関数と、メソッド名 get_count を入力します。"
        ],
        "candidates": {
          "keywords": ["classmethod", "Dog"],
          "others": ["count", "name", "get_count", "print"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "2\\n"
          }
        ]
      },
    {
      "title": "__str__メソッド",
      "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # タイトルと著者を保存\\n        self.title = title\\n        self.author = author\\n\\n    # __str__メソッドを定義\\n    def __str__(self):\\n        # 「タイトル (著者: 著者名)」の形式で返す\\n        return f'{self.title} (著者: {self.author})'\\n\\n# Bookのインスタンスを作成\\nbook = Book('Pythonガイド', '太郎')\\n# bookをそのまま表示\\nprint(book)",
      "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def __init__(self, title, ___):\\n        # タイトルと著者を保存\\n        self.___ = title\\n        self.___ = author\\n\\n    # __str__メソッドを定義\\n    def ___(___):\\n        # 「タイトル (著者: 著者名)」の形式で返す\\n        return f'{self.title} (著者: {self.___})'\\n\\n# Bookのインスタンスを作成\\n___ = ___('Pythonガイド', '太郎')\\n# bookをそのまま表示\\n___(___)",
      "correctLines": [
          "# Bookクラスを定義",
          "class Book:",
          "    # __init__メソッドを定義",
          "    def __init__(self, title, author):",
          "        # タイトルと著者を保存",
          "        self.title = title",
          "        self.author = author",
          "",
          "    # __str__メソッドを定義",
          "    def __str__(self):",
          "        # 「タイトル (著者: 著者名)」の形式で返す",
          "        return f'{self.title} (著者: {self.author})'",
          "",
          "# Bookのインスタンスを作成",
          "book = Book('Pythonガイド', '太郎')",
          "# bookをそのまま表示",
          "print(book)"
        ],
      "lineHints": [
          null,
          "クラス名 Book を入力します。",
          null,
          "引数名 author を指定します。",
          null,
          "属性名 title を入力します。",
          "属性名 author を入力します。",
          null,
          null,
          "メソッド名 __str__ と第1引数 self を入力します。",
          null,
          "属性名 author を参照します。",
          null,
          null,
          "変数 book と、クラス名 Book を入力します。",
          null,
          "表示のための print 関数と、変数 book を指定します。"
        ],
        "candidates": {
          "keywords": ["__str__", "Book"],
          "others": ["author", "title", "self", "book", "print", "str__メソッドを定義", "#", "okのインスタンスを作成", "# bookをそのまま表示"]
        },
        "testCases": [
          {
            "input": "",
            "expected_output": "Pythonガイド (著者: 太郎)\\n"
          }
        ]
      }
  ]
};
