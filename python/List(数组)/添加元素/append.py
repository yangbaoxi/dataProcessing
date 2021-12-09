# 在列表末尾添加新的对象。

# list.append(obj)

# 参数
    # obj -- 添加到列表末尾的对象。

# 返回值 该方法无返回值，但是会修改原来的列表。

Array = [1, 2, 3, 4]

Array.append(5)

print(Array) # [1, 2, 3, 4, 5]

Array2 = [
    {
        "name": "Tom",
        "age": 18
    },
    {
        "name": "yang",
        "age": 22
    }
]

obj = {
    "name": "zhai",
    "age": 17
}

Array2.append(obj)

print(Array2) # [{'name': 'Tom', 'age': 18}, {'name': 'yang', 'age': 22}, {'name': 'zhai', 'age': 17}]

# 注意： append 是浅度拷贝

# 使用深度拷贝 数据

# 语法：
    # Array.append( copy.deepcopy( value ) )

# !!! copy.deepcopy() 深度拷贝