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
      "correctCode": "# 親クラスVehicleを定義\\nclass Vehicle:\\n    # __init__メソッドを定義\\n    def __init__(self, brand):\\n        # self.brandにbrandを代入\\n        self.brand = brand\\n\\n# Carクラスを定義（Vehicleを継承）\\nclass Car(Vehicle):\\n    # honkメソッドを定義\\n    def honk(self):\\n        # f'{self.brand} car: Beep!'を表示\\n        print(f'{self.brand} car: Beep!')\\n\\n# Car('トヨタ')のインスタンスを作成しcarに代入\\ncar = Car('トヨタ')\\n# honkメソッドを実行\\ncar.honk()",
      "holeyCode": "# 親クラスVehicleを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, brand):\\n        # self.brandにbrandを代入\\n        self.___ = brand\\n___\\n# Carクラスを定義（Vehicleを継承）\\nclass ___(Vehicle):\\n    # honkメソッドを定義\\n    def ___(self):\\n        # f'{self.brand} car: Beep!'を表示\\n        ___(f'{self.brand} car: Beep!')\\n___\\n# Car('トヨタ')のインスタンスを作成しcarに代入\\ncar = Car('___')\\n# honkメソッドを実行\\ncar.___()",
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
          "# Car('トヨタ')のインスタンスを作成しcarに代入",
          "car = Car('トヨタ')",
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
          "others": ["__init__", "brand", "Car", "honk", "print", "トヨタ", ""]
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
      "correctCode": "# 親クラスPersonを定義\\nclass Person:\\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # self.nameにnameを代入\\n        self.name = name\\n\\n# Studentクラスを定義（Personを継承）\\nclass Student(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def __init__(self, name, grade):\\n        # super().__init__(name)を呼ぶ\\n        super().__init__(name)\\n        # self.gradeにgradeを代入\\n        self.grade = grade\\n\\n# Student('太郎', 3)のインスタンスを作成しsに代入\\ns = Student('太郎', 3)\\n# sの情報を表示\\nprint(f'{s.name} is in grade {s.grade}')",
      "holeyCode": "# 親クラスPersonを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, name):\\n        # self.nameにnameを代入\\n        self.___ = name\\n___\\n# Studentクラスを定義（Personを継承）\\nclass ___(Person):\\n    # __init__メソッドを定義（引数: self, name, grade）\\n    def ___(self, name, grade):\\n        # super().__init__(name)を呼ぶ\\n        super().__init__(___)\\n        # self.gradeにgradeを代入\\n        self.___ = grade\\n___\\n# Student('太郎', 3)のインスタンスを作成しsに代入\\ns = Student('太郎', ___)\\n# sの情報を表示\\n___(f'{s.name} is in grade {s.grade}')",
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
          "others": ["Person", "__init__(self, name)", "名前", "Student(Person)", "__init__(self, name, grade)", "grade", "Student('太郎', 3)", "f'{s.name} is in grade {s.grade}'", "__init__", "Student", "3", "print", "", "name"]
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
      "correctCode": "# Rectangleクラスを定義\\nclass Rectangle:\\n    # __init__メソッドを定義\\n    def __init__(self, width, height):\\n        # 幅を保存\\n        self.width = width\\n        # 高さを保存\\n        self.height = height\\n    \\n    # @propertyデコレータ\\n    @property\\n    # areaメソッドを定義\\n    def area(self):\\n        # 幅と高さの積を計算\\n        return self.width * self.height\\n\\n# Rectangle(4, 5)のインスタンスを作成しrに代入\\nr = Rectangle(4, 5)\\n# r.areaを表示\\nprint(r.area)",
      "holeyCode": "# Rectangleクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, width, height):\\n        # 幅を保存\\n        self.___ = width\\n        # 高さを保存\\n        self.___ = height\\n    ___\\n    # @propertyデコレータ\\n    @___\\n    # areaメソッドを定義\\n    def ___(self):\\n        # 幅と高さの積を計算\\n        return self.___ * self.___\\n___\\n# Rectangle(4, 5)のインスタンスを作成しrに代入\\nr = Rectangle(___, 5)\\n# r.areaを表示\\n___(r.area)",
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
          "この行を正しく入力してください。",
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
          "others": ["Rectangle", "__init__(self, width, height)", "width", "height", "area(self)", "self.width * self.height", "Rectangle(4, 5)", "r.area", "__init__", "property", "area", "4", "print", "", "property", "height"]
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
      "correctCode": "# Dogクラスを定義\\nclass Dog:\\n    # 生成された数をカウントするクラス変数を定義\\n    count = 0\\n    \\n    # __init__メソッドを定義\\n    def __init__(self, name):\\n        # 名前を保存\\n        self.name = name\\n        # インスタンスが作られるたびにカウントを増やす\\n        Dog.count += 1\\n    \\n    # @classmethodデコレータ\\n    @classmethod\\n    # get_countメソッドを定義\\n    def get_count(cls):\\n        # クラス変数を参照して返す\\n        return cls.count\\n\\n# Dog('ポチ')を作成しd1に代入\\nd1 = Dog('ポチ')\\n# Dog('ハチ')を作成しd2に代入\\nd2 = Dog('ハチ')\\n# Dog.get_count()を表示\\nprint(Dog.get_count())",
      "holeyCode": "# Dogクラスを定義\\nclass ___:\\n    # 生成された数をカウントするクラス変数を定義\\n    count = ___\\n    ___\\n    # __init__メソッドを定義\\n    def ___(self, name):\\n        # 名前を保存\\n        self.___ = name\\n        # インスタンスが作られるたびにカウントを増やす\\n        Dog.count += ___\\n    ___\\n    # @classmethodデコレータ\\n    @___\\n    # get_countメソッドを定義\\n    def ___(cls):\\n        # クラス変数を参照して返す\\n        return cls.___\\n___\\n# Dog('ポチ')を作成しd1に代入\\nd___ = Dog('ポチ')\\n# Dog('ハチ')を作成しd2に代入\\nd___ = Dog('ハチ')\\n# Dog.get_count()を表示\\n___(Dog.get_count())",
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
          "この行を正しく入力してください。",
          null,
          "関数（__init__）を新しく定義します。",
          null,
          "ここを正しく入力してください。",
          null,
          "ここを正しく入力してください。",
          "この行を正しく入力してください。",
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
          "others": ["Dog", "0", "__init__(self, name)", "名前", "Dog.count += 1", "get_count(cls)", "cls.count", "Dog('ポチ')", "Dog('ハチ')", "Dog.get_count(", "__init__", "1", "classmethod", "get_count", "count", "2", "print", "0", "", "1", "classmethod", "count", "name"]
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
      "correctCode": "# Validatorクラスを定義\\nclass Validator:\\n    # @staticmethodデコレータ\\n    @staticmethod\\n    # is_positiveメソッドを定義\\n    def is_positive(n):\\n        # 0より大きいかどうかを返す\\n        return n > 0\\n\\n# Validator.is_positive(5)の結果を表示\\nprint(Validator.is_positive(5))\\n# Validator.is_positive(-3)の結果を表示\\nprint(Validator.is_positive(-3))",
      "holeyCode": "# Validatorクラスを定義\\nclass ___:\\n    # @staticmethodデコレータ\\n    @___\\n    # is_positiveメソッドを定義\\n    def ___(n):\\n        # 0より大きいかどうかを返す\\n        return n > ___\\n___\\n# Validator.is_positive(5)の結果を表示\\n___(Validator.is_positive(5))\\n# Validator.is_positive(-3)の結果を表示\\n___(Validator.is_positive(-3))",
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
          "others": ["Validator", "is_positive(n)", "n > 0", "Validator.is_positive(5", "Validator.is_positive(-3", "staticmethod", "is_positive", "0", "print", "staticmethod", "0", ""]
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
      "correctCode": "# 抽象クラス関連の機能を読み込み\\nfrom abc import ABC, abstractmethod\\n\\n# 抽象クラスAnimalを定義（ABCを継承）\\nclass Animal(ABC):\\n    # @abstractmethodデコレータ\\n    @abstractmethod\\n    # speakメソッドを定義（処理なし）\\n    def speak(self):\\n        # 抽象メソッドなので処理はなし\\n        pass\\n\\n# Catクラスを定義（Animalを継承）\\nclass Cat(Animal):\\n    # speakメソッドを実装\\n    def speak(self):\\n        # 鳴き声を返す\\n        return 'ニャー'\\n\\n# Catのインスタンスを作成しcatに代入\\ncat = Cat()\\n# cat.speak()の結果を表示\\nprint(cat.speak())",
      "holeyCode": "# 抽象クラス関連の機能を読み込み\\nfrom abc import ABC, ___\\n___\\n# 抽象クラスAnimalを定義（ABCを継承）\\nclass ___(ABC):\\n    # @abstractmethodデコレータ\\n    @___\\n    # speakメソッドを定義（処理なし）\\n    def ___(self):\\n        # 抽象メソッドなので処理はなし\\n        ___\\n___\\n# Catクラスを定義（Animalを継承）\\nclass ___(Animal):\\n    # speakメソッドを実装\\n    def ___(self):\\n        # 鳴き声を返す\\n        return '___'\\n___\\n# Catのインスタンスを作成しcatに代入\\ncat = ___()\\n# cat.speak()の結果を表示\\n___(cat.speak())",
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
          "others": ["ABC, abstractmethod", "Animal(ABC)", "speak(self)", "pass", "Cat(Animal)", "'ニャー'", "Cat()", "cat.speak(", "abstractmethod", "Animal", "speak", "Cat", "Meow", "print", "ニャー", "abstractmethod", "", "pass"]
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
      "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # self.titleにtitleを代入\\n        self.title = title\\n        # self.authorにauthorを代入\\n        self.author = author\\n    \\n    # __str__メソッドを定義\\n    def __str__(self):\\n        # 「タイトル by 著者」の形式で返す\\n        return f'{self.title} by {self.author}'\\n\\n# Book('Pythonガイド', '太郎')を作成しbookに代入\\nbook = Book('Pythonガイド', '太郎')\\n# bookを表示\\nprint(book)",
      "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, title, author):\\n        # self.titleにtitleを代入\\n        self.___ = title\\n        # self.authorにauthorを代入\\n        self.___ = author\\n    ___\\n    # __str__メソッドを定義\\n    def ___(self):\\n        # 「タイトル by 著者」の形式で返す\\n        return f'{self.title} by {self.___}'\\n___\\n# Book('Pythonガイド', '太郎')を作成しbookに代入\\nbook = Book('Pythonガイド', '___')\\n# bookを表示\\n___(book)",
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
          "# Book('Pythonガイド', '太郎')を作成しbookに代入",
          "book = Book('Pythonガイド', '太郎')",
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
          "この行を正しく入力してください。",
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
          "others": ["Book", "__init__(self, title, author)", "title", "author", "f'{self.title} by {self.author}'", "Book('Pythonガイド', '太郎')", "book", "print", "太郎", ""]
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
      "correctCode": "# Bookクラスを定義\\nclass Book:\\n    # __init__メソッドを定義\\n    def __init__(self, title, author):\\n        # self.titleにtitleを代入\\n        self.title = title\\n        # self.authorにauthorを代入\\n        self.author = author\\n    \\n    # __eq__メソッドを定義\\n    def __eq__(self, other):\\n        # タイトルと著者が両方一致するかを返す\\n        return self.title == other.title and self.author == other.author\\n\\n# Book('Python入門', '田中')を作成しbook1に代入\\nbook1 = Book('Python入門', '田中')\\n# Book('Python入門', '田中')を作成しbook2に代入\\nbook2 = Book('Python入門', '田中')\\n# book1 == book2の結果を表示\\nprint(book1 == book2)",
      "holeyCode": "# Bookクラスを定義\\nclass ___:\\n    # __init__メソッドを定義\\n    def ___(self, title, author):\\n        # self.titleにtitleを代入\\n        self.___ = title\\n        # self.authorにauthorを代入\\n        self.___ = author\\n    ___\\n    # __eq__メソッドを定義\\n    def ___(self, other):\\n        # タイトルと著者が両方一致するかを返す\\n        return self.title == other.title and self.___ == other.author\\n___\\n# Book('Python入門', '田中')を作成しbook1に代入\\nbook1 = Book('___', '田中')\\n# Book('Python入門', '田中')を作成しbook2に代入\\nbook2 = Book('___', '田中')\\n# book1 == book2の結果を表示\\n___(book1 == book2)",
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
          "この行を正しく入力してください。",
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
          "others": ["Book", "title", "author", "Book(\"Python入門 \"田中\")", "print", "Python Basics", "Python入門", ""]
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
      "correctCode": "# Teamクラスを定義\\nclass Team:\\n    # __init__メソッド（引数: self, members）\\n    def __init__(self, members):\\n        # self.membersにmembersを代入\\n        self.members = members\\n    \\n    # __len__メソッド（引数: selfのみ）\\n    def __len__(self):\\n        # len(self.members)を返す\\n        return len(self.members)\\n\\n# Team(...)を作成しteamに代入\\nteam = Team(['アリス', 'ボブ', 'チャーリー'])\\n# len(team)を表示\\nprint(len(team))",
      "holeyCode": "# Teamクラスを定義\\nclass ___:\\n    # __init__メソッド（引数: self, members）\\n    def ___(self, members):\\n        # self.membersにmembersを代入\\n        self.___ = members\\n    ___\\n    # __len__メソッド（引数: selfのみ）\\n    def ___(self):\\n        # len(self.members)を返す\\n        return len(self.___)\\n___\\n# Team(...)を作成しteamに代入\\nteam = Team(['アリス', 'ボブ', '___'])\\n# len(team)を表示\\n___(len(team))",
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
          "この行を正しく入力してください。",
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
            "expected_output": "3\\n"
          }
        ]
      },
    {
      "title": "dataclassデコレータ",
      "correctCode": "# dataclassデコレータをインポート\\nfrom dataclasses import dataclass\\n\\n# @dataclassデコレータ\\n@dataclass\\n# Personクラスを定義\\nclass Person:\\n    # 名前の型を文字列で指定\\n    name: str\\n    # 年齢の型を整数で指定\\n    age: int\\n\\n# Person('太郎', 25)を作成しpに代入\\np = Person('太郎', 25)\\n# pを表示\\nprint(p)",
      "holeyCode": "# dataclassデコレータをインポート\\nfrom dataclasses import ___\\n___\\n# @dataclassデコレータ\\n@___\\n# Personクラスを定義\\nclass ___:\\n    # 名前の型を文字列で指定\\n    name: ___\\n    # 年齢の型を整数で指定\\n    age: ___\\n___\\n# Person('太郎', 25)を作成しpに代入\\np = Person('太郎', ___)\\n# pを表示\\n___(p)",
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
          "others": ["dataclass", "Person", "str", "int", "Person('太郎', 25)", "p", "25", "print", "dataclass", "", "str", "int"]
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
