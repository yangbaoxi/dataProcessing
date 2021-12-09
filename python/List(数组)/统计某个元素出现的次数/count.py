# 统计某个元素在列表中出现的次数。

# list.count(obj)

# 参数
    # obj -- 列表中统计的对象。

# 返回值： 返回元素在列表中出现的次数。

Array = [1, 1, 3, 4, 5]

print(Array.count(1)) # 2

Array2 = [
    {
        "name": "Tom",
        "age": 18
    },
    {
        "name": "Tom",
        "age": 19
    }
]

print(Array2.count({
    "name": "Tom",
    "age": 18
})) # 1

# 对象也可以检测