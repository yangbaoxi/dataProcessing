# 用于在列表末尾一次性追加另一个序列中的多个值（用新列表扩展原来的列表）。

# list.extend(seq)

# 参数
    # seq -- 元素列表，可以是列表、元组、集合、字典，若为字典,则仅会将键(key)作为元素依次添加至原列表的末尾。

# 返回值： 该方法没有返回值，但会在已存在的列表中添加新的列表内容。

# 原数组：

Array = [1, 2, 3]

# 一、列表（数组）

NewArray = [4, 5, 6]

Array.extend(NewArray)

print(Array) # [1, 2, 3, 4, 5, 6]

# 二、元组

Tuple = ("Tom", "Yang")

Array.extend(Tuple)

print(Array) # [1, 2, 3, 4, 5, 6, 'Tom', 'Yang']

# 三、集合

Set = {'Yes', "No"}

Array.extend(Set)

print(Array) # [1, 2, 3, 4, 5, 6, 'Tom', 'Yang', 'No', 'Yes']

# 四、字典（对象）

