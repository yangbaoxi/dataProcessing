# 从列表中找出某个值第一个匹配项的索引位置

# list.index(obj)

# 参数
    # obj -- 查找的对象。

# 返回值： 该方法返回查找对象的索引位置，如果没有找到对象则抛出异常。

Array = [1, 2, 3, 4, 5]

print(Array.index(2)) # 1

Array2 = [
    {
        "name": "Tom",
        "age": 18
    },
    {
        "name": "Yang",
        "age": 22
    }
]

print(Array2.index({
    "name": "Yang",
    "age": 22
})) # 1

# 对象 也可以检测

print(Array.index(6)) # ValueError: 6 is not in list