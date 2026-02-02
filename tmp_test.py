# 全ての数値から最大値を求める関数を定義
def find_max(*args):
    # 最大値を最初の引数で初期化
    max_val = args[0]
    # 渡された全ての引数をループで処理
    for n in args:
        # より大きい値があれば更新
        if n > max_val:
            max_val = n
    # 最終的な最大値を返す
    return max_val

# 3, 7, 2, 9, 5 から最大値を表示
print(find_max(3, 7, 2, 9, 5))
