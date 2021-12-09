# fromkeys() 函数用于创建一个新字典，以序列 seq 中元素做字典的键，value 为字典所有键对应的初始值。

# dict.fromkeys(seq[, value])

# 也可以理解成 元组转字典

# 参数
    # seq -- 字典键值列表。
    # value -- 可选参数, 设置键序列（seq）对应的值，默认为 None。

# 返回值 该方法返回一个新字典。

Tuple = ('name', 'age')

Object = dict.fromkeys(Tuple)

print(Object) # {'name': None, 'age': None}

print(dict.fromkeys(Tuple, 10)) # {'name': 10, 'age': 10}

