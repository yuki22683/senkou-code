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
          "content": "# 親クラスの機能を引き継ぐ\n\n**継承**を使うと、既存クラスの機能を新しいクラスで再利用できます。\n\n```python\nclass Animal:\n    def speak(self):\n        print('...')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Woof!')\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def bark(self):\n        print(f'{self.name} says Woof!')\n\ndog = Dog('Pochi')\ndog.bark()",
      "holeyCode": "class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(___):\n    def bark(self):\n        print(f'{self.name} says Woof!')\n\ndog = Dog('Pochi')\ndog.bark()",
      "correctLines": [
        "class Animal:",
        "    def __init__(self, name):",
        "        self.name = name",
        "",
        "class Dog(Animal):",
        "    def bark(self):",
        "        print(f'{self.name} says Woof!')",
        "",
        "dog = Dog('Pochi')",
        "dog.bark()"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "親クラス名を括弧内に書きます。",
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
          "content": "# 親クラスのメソッドを呼ぶ\n\n**super()**を使うと、親クラスのメソッドを呼び出せます。\n\n```python\nclass Parent:\n    def __init__(self, name):\n        self.name = name\n\nclass Child(Parent):\n    def __init__(self, name, age):\n        super().__init__(name)\n        self.age = age\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, grade):\n        super().__init__(name)\n        self.grade = grade\n\ns = Student('Taro', 3)\nprint(f'{s.name} is in grade {s.grade}')",
      "holeyCode": "class Person:\n    def __init__(self, name):\n        self.name = name\n\nclass Student(Person):\n    def __init__(self, name, grade):\n        ___.__init__(name)\n        self.grade = grade\n\ns = Student('Taro', 3)\nprint(f'{s.name} is in grade {s.grade}')",
      "correctLines": [
        "class Person:",
        "    def __init__(self, name):",
        "        self.name = name",
        "",
        "class Student(Person):",
        "    def __init__(self, name, grade):",
        "        super().__init__(name)",
        "        self.grade = grade",
        "",
        "s = Student('Taro', 3)",
        "print(f'{s.name} is in grade {s.grade}')"
      ],
      "lineHints": [
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
          "content": "# メソッドを属性のように使う\n\n**@property**を使うと、メソッドを属性のようにアクセスできます。\n\n```python\nclass Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def area(self):\n        return 3.14 * self._radius ** 2\n\nc = Circle(5)\nprint(c.area)  # 78.5 (括弧なし)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    @property\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(4, 5)\nprint(r.area)",
      "holeyCode": "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    ___\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(4, 5)\nprint(r.area)",
      "correctLines": [
        "class Rectangle:",
        "    def __init__(self, width, height):",
        "        self.width = width",
        "        self.height = height",
        "    ",
        "    @property",
        "    def area(self):",
        "        return self.width * self.height",
        "",
        "r = Rectangle(4, 5)",
        "print(r.area)"
      ],
      "lineHints": [
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
          "content": "# クラス全体に関わるメソッド\n\n**@classmethod**は、インスタンスではなくクラスに対して動作するメソッドを定義します。第一引数は cls です。\n\n```python\nclass Counter:\n    count = 0\n    \n    @classmethod\n    def increment(cls):\n        cls.count += 1\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Dog:\n    count = 0\n    \n    def __init__(self, name):\n        self.name = name\n        Dog.count += 1\n    \n    @classmethod\n    def get_count(cls):\n        return cls.count\n\nd1 = Dog('Pochi')\nd2 = Dog('Hachi')\nprint(Dog.get_count())",
      "holeyCode": "class Dog:\n    count = 0\n    \n    def __init__(self, name):\n        self.name = name\n        Dog.count += 1\n    \n    ___\n    def get_count(cls):\n        return cls.count\n\nd1 = Dog('Pochi')\nd2 = Dog('Hachi')\nprint(Dog.get_count())",
      "correctLines": [
        "class Dog:",
        "    count = 0",
        "    ",
        "    def __init__(self, name):",
        "        self.name = name",
        "        Dog.count += 1",
        "    ",
        "    @classmethod",
        "    def get_count(cls):",
        "        return cls.count",
        "",
        "d1 = Dog('Pochi')",
        "d2 = Dog('Hachi')",
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
        "クラスメソッドデコレータを使います。",
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
          "content": "# インスタンスに依存しないメソッド\n\n**@staticmethod**は、selfやclsを必要としないメソッドを定義します。\n\n```python\nclass Math:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(Math.add(3, 5))  # 8\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Validator:\n    @staticmethod\n    def is_positive(n):\n        return n > 0\n\nprint(Validator.is_positive(5))\nprint(Validator.is_positive(-3))",
      "holeyCode": "class Validator:\n    ___\n    def is_positive(n):\n        return n > 0\n\nprint(Validator.is_positive(5))\nprint(Validator.is_positive(-3))",
      "correctLines": [
        "class Validator:",
        "    @staticmethod",
        "    def is_positive(n):",
        "        return n > 0",
        "",
        "print(Validator.is_positive(5))",
        "print(Validator.is_positive(-3))"
      ],
      "lineHints": [
        null,
        "静的メソッドデコレータを使います。",
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
          "content": "# 実装を強制するクラス\n\n**ABC**（Abstract Base Class）を使うと、サブクラスに特定のメソッドの実装を強制できます。\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    @abstractmethod\n    def speak(self):\n        pass\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow'\n\ncat = Cat()\nprint(cat.speak())",
      "holeyCode": "from abc import ABC, abstractmethod\n\nclass Animal(ABC):\n    ___\n    def speak(self):\n        pass\n\nclass Cat(Animal):\n    def speak(self):\n        return 'Meow'\n\ncat = Cat()\nprint(cat.speak())",
      "correctLines": [
        "from abc import ABC, abstractmethod",
        "",
        "class Animal(ABC):",
        "    @abstractmethod",
        "    def speak(self):",
        "        pass",
        "",
        "class Cat(Animal):",
        "    def speak(self):",
        "        return 'Meow'",
        "",
        "cat = Cat()",
        "print(cat.speak())"
      ],
      "lineHints": [
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
          "content": "# オブジェクトを文字列で表す\n\n**__str__**メソッドを定義すると、print()やstr()での表示をカスタマイズできます。\n\n```python\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f'Point({self.x}, {self.y})'\n\np = Point(3, 4)\nprint(p)  # Point(3, 4)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    \n    def __str__(self):\n        return f'{self.title} by {self.author}'\n\nbook = Book('Python Guide', 'Taro')\nprint(book)",
      "holeyCode": "class Book:\n    def __init__(self, title, author):\n        self.title = title\n        self.author = author\n    \n    def ___(self):\n        return f'{self.title} by {self.author}'\n\nbook = Book('Python Guide', 'Taro')\nprint(book)",
      "correctLines": [
        "class Book:",
        "    def __init__(self, title, author):",
        "        self.title = title",
        "        self.author = author",
        "    ",
        "    def __str__(self):",
        "        return f'{self.title} by {self.author}'",
        "",
        "book = Book('Python Guide', 'Taro')",
        "print(book)"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        null,
        "特殊メソッド__str__を定義します。",
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
          "content": "# オブジェクトの比較方法を定義\n\n**__eq__**メソッドを定義すると、==での比較をカスタマイズできます。\n\n```python\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\np1 = Point(1, 2)\np2 = Point(1, 2)\nprint(p1 == p2)  # True\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __eq__(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(3, 4)\nv2 = Vector(3, 4)\nprint(v1 == v2)",
      "holeyCode": "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def ___(self, other):\n        return self.x == other.x and self.y == other.y\n\nv1 = Vector(3, 4)\nv2 = Vector(3, 4)\nprint(v1 == v2)",
      "correctLines": [
        "class Vector:",
        "    def __init__(self, x, y):",
        "        self.x = x",
        "        self.y = y",
        "    ",
        "    def __eq__(self, other):",
        "        return self.x == other.x and self.y == other.y",
        "",
        "v1 = Vector(3, 4)",
        "v2 = Vector(3, 4)",
        "print(v1 == v2)"
      ],
      "lineHints": [
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
          "content": "# len()を使えるようにする\n\n**__len__**メソッドを定義すると、len()関数が使えるようになります。\n\n```python\nclass Playlist:\n    def __init__(self, songs):\n        self.songs = songs\n    \n    def __len__(self):\n        return len(self.songs)\n\npl = Playlist(['A', 'B', 'C'])\nprint(len(pl))  # 3\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "class Team:\n    def __init__(self, members):\n        self.members = members\n    \n    def __len__(self):\n        return len(self.members)\n\nteam = Team(['Alice', 'Bob', 'Charlie'])\nprint(len(team))",
      "holeyCode": "class Team:\n    def __init__(self, members):\n        self.members = members\n    \n    def ___(self):\n        return len(self.members)\n\nteam = Team(['Alice', 'Bob', 'Charlie'])\nprint(len(team))",
      "correctLines": [
        "class Team:",
        "    def __init__(self, members):",
        "        self.members = members",
        "    ",
        "    def __len__(self):",
        "        return len(self.members)",
        "",
        "team = Team(['Alice', 'Bob', 'Charlie'])",
        "print(len(team))"
      ],
      "lineHints": [
        null,
        null,
        null,
        null,
        "長さを返す特殊メソッドを定義します。",
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
          "content": "# データを持つクラスを簡潔に定義\n\n**@dataclass**を使うと、__init__や__repr__が自動生成されます。\n\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(3, 4)\nprint(p)  # Point(x=3, y=4)\n```"
        }
      ],
      "initialDisplayMode": "holey",
      "correctCode": "from dataclasses import dataclass\n\n@dataclass\nclass Person:\n    name: str\n    age: int\n\np = Person('Taro', 25)\nprint(p)",
      "holeyCode": "from dataclasses import dataclass\n\n___\nclass Person:\n    name: str\n    age: int\n\np = Person('Taro', 25)\nprint(p)",
      "correctLines": [
        "from dataclasses import dataclass",
        "",
        "@dataclass",
        "class Person:",
        "    name: str",
        "    age: int",
        "",
        "p = Person('Taro', 25)",
        "print(p)"
      ],
      "lineHints": [
        null,
        null,
        "dataclassデコレータを使います。",
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
