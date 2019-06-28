# 字典 values() 方法返回一个迭代器，可以使用 list() 来转换为列表，列表为字典中的所有值。

# dict.values()

# 返回值  返回迭代器。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

print(Object.values()) # dict_values(['Tom', 18, '其他'])

for value in Object.values():
    print('value', value) # value Tom\value 18\value 其他

print(list(Object.values())) # ['Tom', 18, '其他']
