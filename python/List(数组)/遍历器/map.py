# map() 会根据提供的函数对指定序列做映射。
# 第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的新列表。

# map(function, iterable, ...)

# 参数
    # function -- 函数
    # iterable -- 一个或多个序列

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]

def mapFun(item):
    return item  * 2

value = map(mapFun, arr)

print(list(value)) # [20, 40, 60, 80, 100, 120, 140, 160, 180]