# 将列表转换为元组。

# tuple(list)

# 返回 转换后的元组

Array = [1, 2, 3, 4, 5]

Tuple = tuple(Array)

print(Tuple) # (1, 2, 3, 4, 5)

Array2 = [
    {
        "name": "Tom"
    },
    {
        "name": "Yang"
    }
]

print(tuple(Array2)) # ({'name': 'Tom'}, {'name': 'Yang'})
