# 方法用于判断集合的所有元素是否都包含在指定集合中，如果是则返回 True，否则返回 False。

# set.issubset(set)

# 参数
    # set -- 必需，要比查找的集合

# 返回值 返回布尔值，如果都包含返回 True，否则返回 False

set_one = { 'this', 'is' }

set_two = { 'this', 'is', 'javascript' }

print(set.issubset(set_one, set_two)) # True

print(set.issubset(set_two, set_one)) # False

print(set_one.issubset(set_two)) # True

print(set_two.issubset(set_one)) # False

# 谁是 指定的集合 使用 set.issubset() 参数一为指定的集合
# 使用 xx.issubset() xx 为指定的集合