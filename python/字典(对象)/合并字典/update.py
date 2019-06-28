# update() 函数把字典参数 dict2 的 key/value(键/值) 对更新到字典 dict 里

# dict.update(dict2)

# 参数
    # dict2 -- 添加到指定字典dict里的字典。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

Object2 = {
    "like": "篮球"
}

Object.update(Object2)

print(Object) # {'name': 'Tom', 'age': 18, 'other': '其他', 'like': '篮球'}
