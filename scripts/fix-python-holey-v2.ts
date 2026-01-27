
import * as fs from 'fs';
import * as path from 'path';

const dataDir = path.join(__dirname, '../data/lessons');

function fixFile(fileName: string, replacements: {old: string, new: string}[]) {
  const filePath = path.join(dataDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.old, r.new);
  });
  fs.writeFileSync(filePath, content);
}

// Python 1 Fixes
fixFile('python.ts', [
  {
    old: "holeyCode": "# scoreに50を入れる\nscore = ___\n# 10点プラスする\nscore ___ 10\n# 結果を表示\nprint(score)",
    new: "holeyCode": "# scoreに50を入れる\nscore = ___\n# 10点プラスする\nscore ___ 10\n# 結果を表示\n___(___)"
  },
  {
    old: "holeyCode": "# scoreに85を入れる\nscore = ___\n# 80以上 かつ 100以下 ならメッセージを出す\nif score >= 80 ___ score <= 100:\n    print(\'___\')",
    new: "holeyCode": "# scoreに85を入れる\nscore = ___\n# 80以上 かつ 100以下 ならメッセージを出す\nif score >= 80 ___ score <= 100:\n    # \'ごうかく！\' と表示\n    ___(\'___\' )"
  }
]);

// Python 2 Fixes
fixFile('python2.ts', [
  {
    old: "holeyCode": "# 名前を受け取ってあいさつする関数\ndef hello(___):\n    # f\'{name}!\'を出力\n    print(f\'Hello, {___}!\' )\n\n# 関数を\'Python\'を渡して呼び出す\n___",
    new: "holeyCode": "# 名前を受け取ってあいさつする関数\n___ hello(___):\n    # f\'{name}!\'を出力\n    ___(f\'Hello, {___}!\' )\n\n# 関数を\'Python\'を渡して呼び出す\n___(\'___\' )"
  },
  {
    old: "holeyCode": "# 2つの数を足して返す関数\ndef add(a, b):\n    # 計算結果をreturnで返す\n    ___ a + b\n\n# 結果を変数に入れて表示（引数は10と20）\nresult = add(___, ___)\n# resultを表示\nprint(___)",
    new: "holeyCode": "# 2つの数を足して返す関数\n___ add(a, b):\n    # 計算結果をreturnで返す\n    ___ a + b\n\n# 結果を変数に入れて表示（引数は10と20）\nresult = ___( ___, ___)\n# resultを表示\n___(___)"
  },
  {
    old: "holeyCode": "# 2つの値を返す関数\ndef calc(x):\n    # x+1 と x*2 を返す\n    return x + 1, x ___ 2\n\n# 2つの変数で受け取る（引数は5）\na, b = calc(___)\n# aを表示\nprint(___)\n# bを表示\nprint(___)",
    new: "holeyCode": "# 2つの値を返す関数\n___ calc(x):\n    # x+1 と x*2 を返す\n    ___ x + 1, x ___ 2\n\n# 2つの変数で受け取る（引数は5）\na, b = ___( ___)\n# aを表示\n___(___)\n# bを表示\n___(___)"
  },
  {
    old: "holeyCode": "# 1から5までの数を順番に表示\nfor i in ___(1, 6):\n    print(___)",
    new: "holeyCode": "# 1から5までの数を順番に表示\nfor i in ___(1, 6):\n    # 数を表示\n    ___(___)"
  },
  {
    old: "holeyCode": "# 初期値を設定\ntotal = 0\n# totalに10を足す\ntotal ___ 10\n# totalに5を足す\ntotal ___ 5\n# 結果を表示\nprint(total)",
    new: "holeyCode": "# 初期値を設定\ntotal = ___\n# totalに10を足す\ntotal ___ 10\n# totalに5を足す\ntotal ___ 5\n# 結果を表示\n___(___)"
  },
  {
    old: "holeyCode": "# 10を3で割った余りを計算\nremainder = 10 ___ 3\n# 結果を表示\nprint(remainder)",
    new: "holeyCode": "# 10を3で割った余りを計算\nremainder = 10 ___ 3\n# 結果を表示\n___(___)"
  },
  {
    old: "holeyCode": "# 年齢を設定\nage = 25\n# 20以上かつ30未満かどうか判定\nif age >= 20 ___ age < 30:\n    print(\'20代です\')",
    new: "holeyCode": "# 年齢を設定\nage = ___\n# 20以上かつ30未満かどうか判定\nif age >= 20 ___ age < 30:\n    # メッセージを表示\n    ___(\'___\' )"
  },
  {
    old: "holeyCode": "# 1から5までの数を2倍にしたリストを作る\ndoubled = [x * 2 ___ x in range(1, 6)]\nprint(doubled)",
    new: "holeyCode": "# 1から5までの数を2倍にしたリストを作る\ndoubled = [x * 2 ___ x in range(1, 6)]\n# リストを表示\n___(___)"
  },
  {
    old: "holeyCode": "# 1から10で3の倍数だけを集める\nmultiples = [n for n in range(1, 11) ___ n % 3 == 0]\nprint(multiples)",
    new: "holeyCode": "# 1から10で3の倍数だけを集める\nmultiples = [n for n in range(1, 11) ___ n % 3 == 0]\n# リストを表示\n___(___)"
  },
  {
    old: "holeyCode": "# Robotクラスを定義\nclass ___:\n    # コンストラクタを定義\n    def ___(self, name):\n        # selfを使って属性を保存\n        ___.name = name\n    \n    def say_name(self):\n        # self.nameを表示\n        print(self.___)\n\n# インスタンスを作る（名前は\'R2D2\'）\nr = Robot(\'___\' )\n# say_nameメソッドを呼び出す\nr.___()",
    new: "holeyCode": "# Robotクラスを定義\n___ ___:\n    # コンストラクタを定義\n    ___ ___(self, name):\n        # selfを使って属性を保存\n        ___.name = name\n    \n    # 名前を言うメソッド\n    ___ say_name(self):\n        # self.nameを表示\n        ___(self.___)\n\n# インスタンスを作る（名前は\'R2D2\'）\nr = ___(\'___\' )\n# say_nameメソッドを呼び出す\nr.___()"
  }
]);

console.log("Fixes applied to python.ts and python2.ts");
