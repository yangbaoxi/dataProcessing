# 字典 pop() 方法删除字典给定键 key 所对应的值，返回值为被删除的值。key值必须给出。 否则，返回default值。

# pop(key[,default])

# 参数
    # key: 要删除的键值
    # default: 如果没有 key，返回 default 值

# 返回值 返回被删除的值。

Object = {
    "name": "Tom",
    "age": 18
}

print(Object.pop('name')) # Tom

print(Object) # {'age': 18}

print(Object.pop('a', 'nokey')) # nokey

