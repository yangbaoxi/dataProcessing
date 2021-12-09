# 字典 keys() 方法返回一个可迭代对象，可以使用 list() 来转换为列表。

# dict.keys()

# 返回值 返回一个迭代器。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

print(Object.keys()) # dict_keys(['name', 'age', 'other'])

for i in Object.keys():
    print('key', i) # key name\key age\key other

print(list(Object.keys())) # ['name', 'age', 'other']