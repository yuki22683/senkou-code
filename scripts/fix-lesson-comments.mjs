import fs from 'fs';
import path from 'path';

const lessonsDir = 'data/lessons';
const files = ['python4.ts', 'python5.ts'];

for (const file of files) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 「と入力」を含む、コードをそのまま示しているコメントを置換
  content = content.replace(/# ['"]?(.+?)['"]? と入力して/g, '# $1 して');
  content = content.replace(/# ['"]?(.+?)['"]? と入力/g, '# $1 を定義');
  
  // 個別修正
  content = content.replace(/# Animal を定義/g, '# 動物を表す親クラスを定義');
  content = content.replace(/# Person を定義/g, '# 人を表すクラスを定義');
  content = content.replace(/# Rectangle を定義/g, '# 長方形を表すクラスを定義');
  content = content.replace(/# Book を定義/g, '# 本を表すクラスを定義');
  content = content.replace(/# Team を定義/g, '# チームを表すクラスを定義');
  content = content.replace(/# Vector を定義/g, '# 座標を表すクラスを定義');
  content = content.replace(/# Dog を定義/g, '# 犬を表すクラスを定義');
  content = content.replace(/# Cat を定義/g, '# 猫を表すクラスを定義');
  
  content = content.replace(/# __init__\(self, name\) を定義/g, '# インスタンスを初期設定するメソッドを定義');
  content = content.replace(/# bark\(self\) を定義/g, '# 鳴き声を出すメソッドを定義');
  content = content.replace(/# area\(self\) を定義/g, '# 面積を計算して返すメソッドを定義');
  content = content.replace(/# get_count\(cls\) を定義/g, '# カウントを取得するメソッドを定義');
  content = content.replace(/# speak\(self\) を定義/g, '# メソッドの枠組みを定義');
  content = content.replace(/# __str__ を定義/g, '# 文字列表現をカスタマイズ');
  content = content.replace(/# __eq__ を定義/g, '# 等価比較を定義');
  content = content.replace(/# __len__ を定義/g, '# 要素数を取得可能にする');
  
  content = content.replace(/# @property を定義/g, '# メソッドを属性のように扱えるように設定');
  content = content.replace(/# @classmethod を定義/g, '# クラスメソッドとして定義');
  content = content.replace(/# @staticmethod を定義/g, '# 静的メソッドとして定義');
  content = content.replace(/# @abstractmethod を定義/g, '# 子クラスで実装必須のメソッドを定義');
  content = content.replace(/# @dataclass を定義/g, '# データクラスとして定義');
  
  content = content.replace(/# f'\{self.name\} says Woof!' を定義/g, '# 名前を含めたメッセージを表示');
  content = content.replace(/# dog.bark\(\) を定義/g, '# インスタンスのメソッドを実行');
  content = content.replace(/# super\(\) を定義/g, '# 親クラスの初期化メソッドを呼び出し');
  content = content.replace(/# pass を定義/g, '# 処理はなし');
  
  content = content.replace(/# json を定義/g, '# JSON操作用のライブラリを読み込み');
  content = content.replace(/# re を定義/g, '# 正規表現用のライブラリを読み込み');
  content = content.replace(/# Counter を定義/g, '# カウント用のクラスを読み込み');
  content = content.replace(/# defaultdict を定義/g, '# デフォルト値付き辞書を読み込み');
  content = content.replace(/# chain を定義/g, '# リスト結合用の関数を読み込み');
  
  content = content.replace(/# open を定義/g, '# ファイルを開く');
  content = content.replace(/# loads を定義/g, '# JSON文字列を辞書に変換');
  content = content.replace(/# dumps を定義/g, '# 辞書をJSON文字列に変換');
  content = content.replace(/# search を定義/g, '# パターンを検索');
  content = content.replace(/# findall を定義/g, '# 全ての一致を抽出');
  content = content.replace(/# sub を定義/g, '# パターンを置換');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}