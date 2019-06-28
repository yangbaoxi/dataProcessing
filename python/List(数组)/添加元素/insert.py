# 用于将指定对象插入列表的指定位置。

# list.insert(index, obj)

# 参数
    # index -- 对象obj需要插入的索引位置。
    # obj -- 要插入列表中的对象。

# 返回值： 该方法没有返回值，但会在列表指定位置插入对象。

Array = [1, 2, 3, 4]

Array.insert(0, 0)

print(Array) # [0, 1, 2, 3, 4]
