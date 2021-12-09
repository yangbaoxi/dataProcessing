# 方法用于移除集合中的指定元素。
# 该方法不同于 discard() 方法，因为 remove() 方法在移除一个不存在的元素时会发生错误，而 discard() 方法不会。

# set.remove(item)

# 参数
    # item -- 要移除的元素

# 返回值 返回移除的元素。

Set = { 'this', 'is', 'python' }
 
Set.remove('is') # is

print(Set) # {'python', 'this'}