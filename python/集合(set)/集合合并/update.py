# 方法用于修改当前集合，可以添加新的元素或集合到当前集合中，如果添加的元素在集合中已存在，则该元素只会出现一次，重复的会忽略。
# 合并集合

# set.update(set)

# 参数
    # set -- 必需，可以是元素或集合

Set_one = { 'this', 'is', 'python' }

Set_two = { 'this', 'is', 'javascript' }

Set_one.update(Set_two)

print(Set_one) # {'javascript', 'python', 'is', 'this'}
