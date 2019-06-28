# 方法用于判断指定集合的所有元素是否都包含在原始的集合中，如果是则返回 True，否则返回 False。

# set.issuperset(set)

# 参数
    # set -- 必需，要比查找的集合

set_one = { 'this', 'is' }

set_two = { 'this', 'is', 'javascript' }

print(set.issuperset(set_one, set_two)) # False

print(set.issuperset(set_two, set_one)) # True

print(set_one.issuperset(set_two)) # False

print(set_two.issuperset(set_one)) # True

# 谁是原始集 使用 set.issuperset() 参数一为原始集
# 使用 xx.issuperset() xx 为原始集