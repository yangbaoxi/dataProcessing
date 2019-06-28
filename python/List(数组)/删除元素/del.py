# del 语法 可删除List中的元素

Array = [1, 2, 3, 4]

del Array[0]

print(Array) # [2, 3, 4]

# del 语法 删除所有元素

del Array[:]

print(Array) # []