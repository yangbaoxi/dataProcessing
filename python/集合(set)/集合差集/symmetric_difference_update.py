# symmetric_difference_update() 方法移除当前集合中在另外一个指定集合相同的元素，并将另外一个指定集合中不同的元素插入到当前集合中

# set.symmetric_difference_update(set)

# 参数
    # set -- 要检测的集合

set_one = { 'this', 'is', 'python' }

set_two = { 'this', 'is', 'javascript' }

set.symmetric_difference_update(set_one, set_two) # 同等 set_one.symmetric_difference_update(set_two)

print(set_one) # {'javascript', 'python'}

print(set_two) # {'javascript', 'this', 'is'}
