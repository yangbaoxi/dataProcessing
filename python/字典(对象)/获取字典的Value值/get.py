# 字典 get() 函数返回指定键的值，如果值不在字典中返回默认值。

# dict.get(key, default=None)

#  参数
    # key -- 字典中要查找的键。
    # default -- 如果指定键的值不存在时，返回该默认值值。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

print(Object.get('name')) # Tom

print(Object.get('aa', "没有的值")) # 没有的值