# symmetric_difference() 方法返回两个集合中不重复的元素集合，即会移除两个集合中都存在的元素。

# set.symmetric_difference(set)

# 参数
    # set -- 集合

# 返回值 返回一个新的集合。

set_three = { 'this', 'is', 'python' }

set_four = { 'this', 'is', 'javascript' }

# 1. 方式一

Set = set.symmetric_difference(set_three, set_four)

print(Set) # {'python', 'javascript'}

# 2. 方式二

Set_one = set_three.symmetric_difference(set_four)

print(Set_one) # {'python', 'javascript'}

# 同等于

# print(set_three ^ set_four) 
