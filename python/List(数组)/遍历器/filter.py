# filter() 函数用于过滤序列，过滤掉不符合条件的元素，返回一个迭代器对象，如果要转换为列表，可以使用 list() 来转换。
# 该接收两个参数，第一个为函数，第二个为序列，序列的每个元素作为参数传递给函数进行判，然后返回 True 或 False，最后将返回 True 的元素放到新列表中。

# filter(function, iterable)

# 参数
    # function -- 判断函数。
    # iterable -- 可迭代对象。

# 返回值 返回一个迭代器对象

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]

def filerFun(item):
    return item > 30


newArr = filter(filerFun, arr)

print(list(newArr)) # [40, 50, 60, 70, 80, 90]