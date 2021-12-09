# all() 函数用于判断给定的可迭代参数 iterable 中的所有元素是否都为 TRUE，如果是返回 True，否则返回 False。
# 元素除了是 0、空、None、False 外都算 True。

# all(iterable)

# 参数
    # iterable -- 元组或列表。

# 返回值
    #  如果iterable的所有元素不为0、''、False或者iterable为空，all(iterable)返回True，否则返回False；

arr1 = [1, 2, 3, 4]

arr2 = [1,"",5,6]

print(all(arr1)) # True

print(all(arr2)) # False

# 注意 可以适用于 元组类型