# 移除列表中某个值的第一个匹配项。

# list.remove(obj)

# 参数
    # obj -- 列表中要移除的对象。

# 返回值 该方法没有返回值但是会移除列表中的某个值的第一个匹配项。

Array = [1, 2, 1, 3, 4]

Array.remove(1)

print(Array) # [2, 1, 3, 4]

Array2 = [
    {
        "name": "Tom"
    },
    {
        "name": "Yang"
    }
]

Array2.remove({
    "name": "Tom"
})

print(Array2) # [{'name': 'Yang'}]