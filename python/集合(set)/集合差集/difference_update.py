# difference_update() 方法用于移除两个集合中都存在的元素。
# difference_update() 方法与 difference() 方法的区别在于 difference() 方法返回一个移除相同元素的新集合，而 difference_update() 方法是直接在原来的集合中移除元素，没有返回值。

# set.difference_update(set)

# 参数
    # set -- 必需，用于计算差集的集合

set_three = { 'this', 'is', 'python' }

set_four = { 'this', 'is', 'javascript' }

set_three.difference_update(set_four)

print(set_three) # {'python'}

print(set_four) # {'javascript', 'is', 'this'}