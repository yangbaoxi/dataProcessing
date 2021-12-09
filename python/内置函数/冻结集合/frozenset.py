# frozenset() 返回一个冻结的集合，冻结后集合不能再添加或删除任何元素。

# frozenset([iterable])

# 参数
    # iterable -- 可迭代的对象，比如列表、字典、元组等等。

# 返回值
    # 返回新的 frozenset 对象，如果不提供任何参数，默认会生成空集合。

arr = [1, 2, 3, 4, 5]

Set = frozenset(arr)

print(Set) # frozenset({1, 2, 3, 4, 5})

