# 函数用于复制列表，类似于 list[:]。

# list.copy()

# 返回值 返回复制后的新列表。

Array = [1, 2, 3, 4]

Array2 = Array.copy() # 同等于 Array2 = Array[:]

print(Array2) # [1, 2, 3, 4]

# 改变某个元素

Array.pop()

print(Array) # [1, 2, 3]

print(Array2) # [1, 2, 3, 4]

Array3 = [
    {"name": "Tom", "age": 18},
    {"name": "Yang", "age": 22},
]

Array4 = Array3.copy()

Array3[0]['age'] = 23

print(Array3) # [{'name': 'Tom', 'age': 23}, {'name': 'Yang', 'age': 22}]

print(Array4) # [{'name': 'Tom', 'age': 23}, {'name': 'Yang', 'age': 22}] 

# !注意 copy 也是浅度拷贝
