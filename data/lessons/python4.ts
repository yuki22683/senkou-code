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
          "title": "継承とは？",
          "image": "/illustrations/3d_advanced/inheritance.png",
          "content": "# 親クラスの機能を引き継ぐ\n\n**継承**を使うと、既存クラスの機能を新しいクラスで再利用できます。\n\n```python\nclass Animal:\n    def speak(self):\n        print('...')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Woof!')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Animal と入力\nclass Animal:\n    # __init__(self, name) と入力\n    def __init__(self, name):\n        # name と入力\n        self.name = name\n\n# Animal と入力して継承したDogクラスを定義\nclass Dog(Animal):\n    # bark(self) と入力\n    def bark(self):\n        # f'{self.name} says Woof!' と入力\n        print(f'{self.name} says Woof!')\n\n# Dog('Pochi') と入力\ndog = Dog('Pochi')\n# dog.bark() と入力\ndog.bark()",
      "holeyCode": "# Animal と入力\nclass ___:\n    # __init__(self, name) と入力\n    def ___:\n        # name と入力\n        self.name = ___\n\n# Animalを継承したDogクラス\n# Animal と入力\nclass Dog(___):\n    # bark(self) と入力\n    def ___:\n        # f'{self.name} says Woof!' と入力\n        print(___)\n\n# Dog('Pochi') と入力\ndog = ___\n# dog.bark() と入力\n___",
      "correctLines": [
        "# Animal と入力",
        "class Animal:",
        "    # __init__(self, name) と入力",
        "    def __init__(self, name):",
        "        # name と入力",
        "        self.name = name",
        "",
        "# Animalを継承したDogクラス",
        "# Animal と入力",
        "class Dog(Animal):",
        "    # bark(self) と入力",
        "    def bark(self):",
        "        # f'{self.name} says Woof!' と入力",
        "        print(f'{self.name} says Woof!')",
        "",
        "# Dog('Pochi') と入力",
        "dog = Dog('Pochi')",
        "# dog.bark() と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# 親クラスのメソッドを呼ぶ\n\n**super()**を使うと、親クラスのメソッドを呼び出せます。\n\n```python\nclass Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)\n        self.age = age\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Person と入力\nclass Person:\n    # __init__(self, name) と入力\n    def __init__(self, name):\n        # name と入力\n        self.name = name\n\n# Student(Person) と入力\nclass Student(Person):\n    # __init__(self, name, grade) と入力\n    def __init__(self, name, grade):\n        # super()で親クラスを初期化\n        # super() と入力\n        super().__init__(name)\n        # grade と入力\n        self.grade = grade\n\n# Student('Taro', 3) と入力\ns = Student('Taro', 3)\n# f'{s.name} is in grade {s.grade}' と入力\nprint(f'{s.name} is in grade {s.grade}')",
      "holeyCode": "# Person と入力\nclass ___:\n    # __init__(self, name) と入力\n    def ___:\n        # name と入力\n        self.name = ___\n\n# Student(Person) と入力\nclass ___:\n    # __init__(self, name, grade) と入力\n    def ___:\n        # super()で親クラスを初期化\n        # super() と入力\n        ___.__init__(name)\n        # grade と入力\n        self.grade = ___\n\n# Student('Taro', 3) と入力\ns = ___\n# f'{s.name} is in grade {s.grade}' と入力\nprint(___)",
      "correctLines": [
        "# Person と入力",
        "class Person:",
        "    # __init__(self, name) と入力",
        "    def __init__(self, name):",
        "        # name と入力",
        "        self.name = name",
        "",
        "# Student(Person) と入力",
        "class Student(Person):",
        "    # __init__(self, name, grade) と入力",
        "    def __init__(self, name, grade):",
        "        # super()で親クラスを初期化",
        "        # super() と入力",
        "        super().__init__(name)",
        "        # grade と入力",
        "        self.grade = grade",
        "",
        "# Student('Taro', 3) と入力",
        "s = Student('Taro', 3)",
        "# f'{s.name} is in grade {s.grade}' と入力",
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
          "content": "# メソッドを属性のように使う\n\n**@property**を使うと、メソッドを属性のようにアクセスできます。\n\n```python\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def area(self):\n        return 3.14 * self._radius ** 2\n\nc = Circle(5)\nprint(c.area)  # 78.5 (括弧なし)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Rectangle と入力\nclass Rectangle:\n    # __init__(self, width, height) と入力\n    def __init__(self, width, height):\n        # width と入力\n        self.width = width\n        # height と入力\n        self.height = height\n    \n    # @property と入力して属性のようにアクセス\n    @property\n    # area(self) と入力\n    def area(self):\n        # self.width * self.height と入力\n        return self.width * self.height\n\n# Rectangle(4, 5) と入力\nr = Rectangle(4, 5)\n# r.area と入力\nprint(r.area)",
      "holeyCode": "# Rectangle と入力\nclass ___:\n    # __init__(self, width, height) と入力\n    def ___:\n        # width と入力\n        self.width = ___\n        # height と入力\n        self.height = ___\n    \n    # @propertyで属性のようにアクセス\n    # @property と入力\n    ___\n    # area(self) と入力\n    def ___:\n        # self.width * self.height と入力\n        return ___\n\n# Rectangle(4, 5) と入力\nr = ___\n# r.area と入力\nprint(___)",
      "correctLines": [
        "# Rectangle と入力",
        "class Rectangle:",
        "    # __init__(self, width, height) と入力",
        "    def __init__(self, width, height):",
        "        # width と入力",
        "        self.width = width",
        "        # height と入力",
        "        self.height = height",
        "    ",
        "    # @propertyで属性のようにアクセス",
        "    # @property と入力",
        "    @property",
        "    # area(self) と入力",
        "    def area(self):",
        "        # self.width * self.height と入力",
        "        return self.width * self.height",
        "",
        "# Rectangle(4, 5) と入力",
        "r = Rectangle(4, 5)",
        "# r.area と入力",
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
          "image": "/illustrations/3d_advanced/class_to_instance.png",
          "content": "# クラス全体に関わるメソッド\n\n**@classmethod**は、インスタンスではなくクラスに対して動作するメソッドを定義します。第一引数は cls です。\n\n```python\nclass Counter:\n    count = 0\n    \n    @classmethod\n    def increment(cls):\n        cls.count += 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Dog と入力\nclass Dog:\n    # 0 と入力\n    count = 0\n    \n    # __init__(self, name) と入力\n    def __init__(self, name):\n        # name と入力\n        self.name = name\n        # Dog.count += 1 と入力\n        Dog.count += 1\n    \n    # @classmethod と入力してクラスメソッドを定義\n    @classmethod\n    # get_count(cls) と入力\n    def get_count(cls):\n        # cls.count と入力\n        return cls.count\n\n# Dog('Pochi') と入力\nd1 = Dog('Pochi')\n# Dog('Hachi') と入力\nd2 = Dog('Hachi')\n# Dog.get_count() と入力\nprint(Dog.get_count())",
      "holeyCode": "# Dog と入力\nclass ___:\n    # 0 と入力\n    count = ___\n    \n    # __init__(self, name) と入力\n    def ___:\n        # name と入力\n        self.name = ___\n        # Dog.count += 1 と入力\n        ___\n    \n    # @classmethodでクラスメソッドを定義\n    # @classmethod と入力\n    ___\n    # get_count(cls) と入力\n    def ___:\n        # cls.count と入力\n        return ___\n\n# Dog('Pochi') と入力\nd1 = ___\n# Dog('Hachi') と入力\nd2 = ___\n# Dog.get_count() と入力\nprint(___)",
      "correctLines": [
        "# Dog と入力",
        "class Dog:",
        "    # 0 と入力",
        "    count = 0",
        "    ",
        "    # __init__(self, name) と入力",
        "    def __init__(self, name):",
        "        # name と入力",
        "        self.name = name",
        "        # Dog.count += 1 と入力",
        "        Dog.count += 1",
        "    ",
        "    # @classmethodでクラスメソッドを定義",
        "    # @classmethod と入力",
        "    @classmethod",
        "    # get_count(cls) と入力",
        "    def get_count(cls):",
        "        # cls.count と入力",
        "        return cls.count",
        "",
        "# Dog('Pochi') と入力",
        "d1 = Dog('Pochi')",
        "# Dog('Hachi') と入力",
        "d2 = Dog('Hachi')",
        "# Dog.get_count() と入力",
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
          "content": "# インスタンスに依存しないメソッド\n\n**@staticmethod**は、selfやclsを必要としないメソッドを定義します。\n\n```python\nclass Math:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Math.add(3, 5))  # 8\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Validator と入力\nclass Validator:\n    # @staticmethod と入力して静的メソッドを定義\n    @staticmethod\n    # is_positive(n) と入力\n    def is_positive(n):\n        # n > 0 と入力\n        return n > 0\n\n# Validator.is_positive(5) と入力\nprint(Validator.is_positive(5))\n# Validator.is_positive(-3) と入力\nprint(Validator.is_positive(-3))",
      "holeyCode": "# Validator と入力\nclass ___:\n    # @staticmethodで静的メソッドを定義\n    # @staticmethod と入力\n    ___\n    # is_positive(n) と入力\n    def ___:\n        # n > 0 と入力\n        return ___\n\n# Validator.is_positive(5) と入力\nprint(___)\n# Validator.is_positive(-3) と入力\nprint(___)",
      "correctLines": [
        "# Validator と入力",
        "class Validator:",
        "    # @staticmethodで静的メソッドを定義",
        "    # @staticmethod と入力",
        "    @staticmethod",
        "    # is_positive(n) と入力",
        "    def is_positive(n):",
        "        # n > 0 と入力",
        "        return n > 0",
        "",
        "# Validator.is_positive(5) と入力",
        "print(Validator.is_positive(5))",
        "# Validator.is_positive(-3) と入力",
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
          "content": "# 実装を強制するクラス\n\n**ABC**（Abstract Base Class）を使うと、サブクラスに特定のメソッドの実装を強制できます。\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# ABC, abstractmethod と入力\nfrom abc import ABC, abstractmethod\n\n# Animal(ABC) と入力\nclass Animal(ABC):\n    # @abstractmethod と入力して抽象メソッドを定義\n    @abstractmethod\n    # speak(self) と入力\n    def speak(self):\n        # pass と入力\n        pass\n\n# Cat(Animal) と入力\nclass Cat(Animal):\n    # speak(self) と入力\n    def speak(self):\n        # 'Meow' と入力\n        return 'Meow'\n\n# Cat() と入力\ncat = Cat()\n# cat.speak() と入力\nprint(cat.speak())",
      "holeyCode": "# ABC, abstractmethod と入力\nfrom abc import ___\n\n# Animal(ABC) と入力\nclass ___:\n    # @abstractmethodで抽象メソッドを定義\n    # @abstractmethod と入力\n    ___\n    # speak(self) と入力\n    def ___:\n        # pass と入力\n        ___\n\n# Cat(Animal) と入力\nclass ___:\n    # speak(self) と入力\n    def ___:\n        # 'Meow' と入力\n        return ___\n\n# Cat() と入力\ncat = ___\n# cat.speak() と入力\nprint(___)",
      "correctLines": [
        "# ABC, abstractmethod と入力",
        "from abc import ABC, abstractmethod",
        "",
        "# Animal(ABC) と入力",
        "class Animal(ABC):",
        "    # @abstractmethodで抽象メソッドを定義",
        "    # @abstractmethod と入力",
        "    @abstractmethod",
        "    # speak(self) と入力",
        "    def speak(self):",
        "        # pass と入力",
        "        pass",
        "",
        "# Cat(Animal) と入力",
        "class Cat(Animal):",
        "    # speak(self) と入力",
        "    def speak(self):",
        "        # 'Meow' と入力",
        "        return 'Meow'",
        "",
        "# Cat() と入力",
        "cat = Cat()",
        "# cat.speak() と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# オブジェクトを文字列で表す\n\n**__str__**メソッドを定義すると、print()やstr()での表示をカスタマイズできます。\n\n```python\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f'Point({self.x}, {self.y})'\n\np = Point(3, 4)\nprint(p)  # Point(3, 4)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Book と入力\nclass Book:\n    # __init__(self, title, author) と入力\n    def __init__(self, title, author):\n        # title と入力\n        self.title = title\n        # author と入力\n        self.author = author\n    \n    # __str__ と入力して文字列表現を定義\n    def __str__(self):\n        # f'{self.title} by {self.author}' と入力\n        return f'{self.title} by {self.author}'\n\n# Book('Python Guide', 'Taro') と入力\nbook = Book('Python Guide', 'Taro')\n# book と入力\nprint(book)",
      "holeyCode": "# Book と入力\nclass ___:\n    # __init__(self, title, author) と入力\n    def ___:\n        # title と入力\n        self.title = ___\n        # author と入力\n        self.author = ___\n    \n    # __str__で文字列表現を定義\n    # __str__ と入力\n    def ___(self):\n        # f'{self.title} by {self.author}' と入力\n        return ___\n\n# Book('Python Guide', 'Taro') と入力\nbook = ___\n# book と入力\nprint(___)",
      "correctLines": [
        "# Book と入力",
        "class Book:",
        "    # __init__(self, title, author) と入力",
        "    def __init__(self, title, author):",
        "        # title と入力",
        "        self.title = title",
        "        # author と入力",
        "        self.author = author",
        "    ",
        "    # __str__で文字列表現を定義",
        "    # __str__ と入力",
        "    def __str__(self):",
        "        # f'{self.title} by {self.author}' と入力",
        "        return f'{self.title} by {self.author}'",
        "",
        "# Book('Python Guide', 'Taro') と入力",
        "book = Book('Python Guide', 'Taro')",
        "# book と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# オブジェクトの比較方法を定義\n\n**__eq__**メソッドを定義すると、==での比較をカスタマイズできます。\n\n```python\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\np1 = Point(1, 2)\np2 = Point(1, 2)\nprint(p1 == p2)  # True\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Vector と入力\nclass Vector:\n    # __init__(self, x, y) と入力\n    def __init__(self, x, y):\n        # x と入力\n        self.x = x\n        # y と入力\n        self.y = y\n    \n    # __eq__ と入力して等価比較を定義\n    def __eq__(self, other):\n        # self.x == other.x and self.y == other.y と入力\n        return self.x == other.x and self.y == other.y\n\n# Vector(3, 4) と入力\nv1 = Vector(3, 4)\n# Vector(3, 4) と入力\nv2 = Vector(3, 4)\n# v1 == v2 と入力\nprint(v1 == v2)",
      "holeyCode": "# Vector と入力\nclass ___:\n    # __init__(self, x, y) と入力\n    def ___:\n        # x と入力\n        self.x = ___\n        # y と入力\n        self.y = ___\n    \n    # __eq__で等価比較を定義\n    # __eq__ と入力\n    def ___(self, other):\n        # self.x == other.x and self.y == other.y と入力\n        return ___\n\n# Vector(3, 4) と入力\nv1 = ___\n# Vector(3, 4) と入力\nv2 = ___\n# v1 == v2 と入力\nprint(___)",
      "correctLines": [
        "# Vector と入力",
        "class Vector:",
        "    # __init__(self, x, y) と入力",
        "    def __init__(self, x, y):",
        "        # x と入力",
        "        self.x = x",
        "        # y と入力",
        "        self.y = y",
        "    ",
        "    # __eq__で等価比較を定義",
        "    # __eq__ と入力",
        "    def __eq__(self, other):",
        "        # self.x == other.x and self.y == other.y と入力",
        "        return self.x == other.x and self.y == other.y",
        "",
        "# Vector(3, 4) と入力",
        "v1 = Vector(3, 4)",
        "# Vector(3, 4) と入力",
        "v2 = Vector(3, 4)",
        "# v1 == v2 と入力",
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
          "image": "/illustrations/3d/robot.png",
          "content": "# len()を使えるようにする\n\n**__len__**メソッドを定義すると、len()関数が使えるようになります。\n\n```python\nclass Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    \n    def __len__(self):\n        return len(self.songs)\n\npl = Playlist(['A', 'B', 'C'])\nprint(len(pl))  # 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# Team と入力\nclass Team:\n    # __init__(self, members) と入力\n    def __init__(self, members):\n        # members と入力\n        self.members = members\n    \n    # __len__ と入力してlen()に対応\n    def __len__(self):\n        # len(self.members) と入力\n        return len(self.members)\n\n# Team(['Alice', 'Bob', 'Charlie']) と入力\nteam = Team(['Alice', 'Bob', 'Charlie'])\n# len(team) と入力\nprint(len(team))",
      "holeyCode": "# Team と入力\nclass ___:\n    # __init__(self, members) と入力\n    def ___:\n        # members と入力\n        self.members = ___\n    \n    # __len__でlen()に対応\n    # __len__ と入力\n    def ___(self):\n        # len(self.members) と入力\n        return ___\n\n# Team(['Alice', 'Bob', 'Charlie']) と入力\nteam = ___\n# len(team) と入力\nprint(___)",
      "correctLines": [
        "# Team と入力",
        "class Team:",
        "    # __init__(self, members) と入力",
        "    def __init__(self, members):",
        "        # members と入力",
        "        self.members = members",
        "    ",
        "    # __len__でlen()に対応",
        "    # __len__ と入力",
        "    def __len__(self):",
        "        # len(self.members) と入力",
        "        return len(self.members)",
        "",
        "# Team(['Alice', 'Bob', 'Charlie']) と入力",
        "team = Team(['Alice', 'Bob', 'Charlie'])",
        "# len(team) と入力",
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
          "content": "# データを持つクラスを簡潔に定義\n\n**@dataclass**を使うと、__init__や__repr__が自動生成されます。\n\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(3, 4)\nprint(p)  # Point(x=3, y=4)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "# dataclass と入力\nfrom dataclasses import dataclass\n\n# @dataclass と入力してデータクラスを定義\n@dataclass\n# Person と入力\nclass Person:\n    # str と入力\n    name: str\n    # int と入力\n    age: int\n\n# Person('Taro', 25) と入力\np = Person('Taro', 25)\n# p と入力\nprint(p)",
      "holeyCode": "# dataclass と入力\nfrom dataclasses import ___\n\n# @dataclassでデータクラスを定義\n# @dataclass と入力\n___\n# Person と入力\nclass ___:\n    # str と入力\n    name: ___\n    # int と入力\n    age: ___\n\n# Person('Taro', 25) と入力\np = ___\n# p と入力\nprint(___)",
      "correctLines": [
        "# dataclass と入力",
        "from dataclasses import dataclass",
        "",
        "# @dataclassでデータクラスを定義",
        "# @dataclass と入力",
        "@dataclass",
        "# Person と入力",
        "class Person:",
        "    # str と入力",
        "    name: str",
        "    # int と入力",
        "    age: int",
        "",
        "# Person('Taro', 25) と入力",
        "p = Person('Taro', 25)",
        "# p と入力",
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
