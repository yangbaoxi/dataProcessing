# isdisjoint() 方法用于判断两个集合是否包含相同的元素，如果没有返回 True，否则返回 False。

# set.isdisjoint(set)

# 参数
    # set -- 必需，要比较的集合

# 返回值： 返回布尔值，如果不包含返回 True，否则返回 False。

set_one = { 'this', 'is', 'python' }

set_two = { 'this', 'is', 'javascript' }

# 1. 方式一

print(set.isdisjoint(set_one, set_two)) # False

# 2. 方式二

print(set_one.isdisjoint(set_two)) # False

