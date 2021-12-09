# 方法用于返回集合的差集，即返回的集合元素包含在第一个集合中，但不包含在第二个集合(方法的参数)中。

# set.difference(set)

set_three = { 'this', 'is', 'python' }

set_four = { 'this', 'is', 'javascript' }

print(set_three.difference(set_four)) # {'python'}

# 同等于 -

print(set_three - set_four) # {'python'}

print(set_three) # {'this', 'is', 'python'}.