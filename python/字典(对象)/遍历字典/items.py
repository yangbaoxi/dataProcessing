# 字典 items() 方法以列表返回可遍历的(键, 值) 元组数组。

# dict.items()

# 返回值 返回可遍历的(键, 值) 元组数组。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

print(Object.items()) # dict_items([('name', 'Tom'), ('age', 18), ('other', '其他')])

print(type(Object.items())) # <class 'dict_items'>

# 遍历：

for key,value in Object.items():
    print('key', key) # key name\key age\key other
    print('value', value) # value Tom\value 18\value 其他
