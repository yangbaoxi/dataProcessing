# copy() 函数返回一个字典的浅复制

# dict.copy()

# 返回值：返回一个字典的浅复制。

Object = {
    "name": "Tom",
    "age": 18
}

Object2 = Object.copy()

print(Object2) # {'name': 'Tom', 'age': 18}

Object2['name'] = "杨宝"

print(Object) # {'name': 'Tom', 'age': 18}

print(Object2) # {'name': '杨宝', 'age': 18}