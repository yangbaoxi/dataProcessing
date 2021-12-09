# 方法用于返回两个或更多集合中都包含的元素，即交集

# set.intersection(set1, set2 ... etc)

# 参数
    # set1 -- 必需，要查找相同元素的集合
    # set2 -- 可选，其他要查找相同元素的集合，可以多个，多个使用逗号 , 隔开

# 返回值 返回一个新的集合。

set_three = { 'this', 'is', 'python' }

set_four = { 'this', 'is', 'javascript' }

# 1. 方式一

print(set.intersection(set_three, set_four)) # {'this', 'is'}

# 2. 方式二

print(set_three.intersection(set_four)) # {'this', 'is'}

# 3. 等同于

print(set_three & set_four) # {'this', 'is'}
