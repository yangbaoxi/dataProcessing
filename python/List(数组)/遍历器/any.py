# any() 函数用于判断给定的可迭代参数 iterable 是否全部为 False，则返回 False，如果有一个为 True，则返回 True。
# 元素除了是 0、空、FALSE 外都算 TRUE。

# any(iterable)

# 参数
    # iterable -- 元组或列表。

# 返回值
    # 如果都为空、0、false，则返回false，如果不都为空、0、false，则返回true。

arr1 = [1, 2, 3, 4]

arr2 = [0, "", False]

print(any(arr1)) # True

print(any(arr2)) # False