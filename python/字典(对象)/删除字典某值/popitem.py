# 字典 popitem() 方法随机返回并删除字典中的一对键和值(一定删除末尾对)。
# 如果字典已经为空，却调用了此方法，就报出KeyError异常。

# dict.popitem()

# 返回值  返回一个键值对(key,value)形式。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他",
    "a": 1,
    "b": 3,
    "c": 4,
    "e": 5,
    "f": 6
}

print(Object.popitem()) # ('f', 6)
print(Object.popitem()) # ('e', 5)
print(Object.popitem()) # ('c', 4)
print(Object.popitem()) # ('b', 3)

