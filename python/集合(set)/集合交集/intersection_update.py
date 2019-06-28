# intersection_update() 方法用于获取两个或更多集合中都重叠的元素，即计算交集。
# intersection_update() 方法不同于 intersection() 方法，因为 intersection() 方法是返回一个新的集合，而 intersection_update() 方法是在原始的集合上移除不重叠的元素。

# set.intersection_update(set1, set2 ... etc)

# 参数
    # set1 -- 必需，要查找相同元素的集合
    # set2 -- 可选，其他要查找相同元素的集合，可以多个，多个使用逗号 , 隔开

# 1. 方式一

set_one = { 'this', 'is', 'python' }

set_two = { 'this', 'is', 'javascript' }

set.intersection_update(set_one, set_two)

print(set_one) # {'this', 'is'}

print(set_two) # {'this', 'javascript', 'is'}

# 2. 方式二

set_three = { 'this', 'is', 'python' }

set_four = { 'this', 'is', 'javascript' }

set_three.intersection_update(set_four)

print(set_three) # {'this', 'is'}
 
print(set_four) # {'this', 'javascript', 'is'}