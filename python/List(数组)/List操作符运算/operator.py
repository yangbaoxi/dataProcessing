# List 操作符

Array = [1, 2, 3]

Array2 = [4, 5, 6]

print(Array + Array2) # [1, 2, 3, 4, 5, 6]  使用 + 合并数组

print(Array * 3) # [1, 2, 3, 1, 2, 3, 1, 2, 3] 使用 * 元素被复制次数

print(3 in Array) # True 判断元素是否存在

print(Array[1:]) # [2, 3] 使用 [:] 获取索引 1 后面的元素