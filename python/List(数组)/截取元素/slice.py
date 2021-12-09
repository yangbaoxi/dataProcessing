# slice() 函数实现切片对象，主要用在切片操作函数里的参数传递。

# slice(stop)
# slice(start, stop[, step])

# 参数
    # start -- 起始位置
    # stop -- 结束位置
    # step -- 间距

# 返回值 返回一个切片对象。

arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

newArr = arr[slice(5)]

print(newArr) # [0, 1, 2, 3, 4]