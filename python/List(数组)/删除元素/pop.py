# 用于移除列表中的一个元素（默认最后一个元素），并且返回该元素的值。

# list.pop([index=-1])

# 参数
    # index -- 可选参数，要移除列表元素的索引值，不能超过列表总长度，默认为 index=-1，删除最后一个列表值

# 返回值 返回从列表中移除的元素对象。

Array = [1, 2, 3, 4]

delValue = Array.pop() # 返回删除的元素

print('删除的元素：',delValue) # 删除的元素： 4
print(Array) # [1, 2, 3]

Array.pop(0)

print(Array) # [2, 3]