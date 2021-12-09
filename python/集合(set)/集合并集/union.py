# union() 方法返回两个集合的并集，即包含了所有集合的元素，重复的元素只会出现一次。

# set.union(set1, set2...)

# 参数
    # set1 -- 必需，合并的目标集合
    # set2 -- 可选，其他要合并的集合，可以多个，多个使用逗号 , 隔开。

# 返回值 返回一个新集合。

set_one = { 'this', 'is', 'python' }

set_two = { 'this', 'is', 'javascript' }

Set = set.union(set_one, set_two)

print(Set) # {'python', 'this', 'javascript', 'is'}

print(set_one.union(set_two)) # {'python', 'this', 'javascript', 'is'}
