# 方法用于移除指定的集合元素。
# 该方法不同于 remove() 方法，因为 remove() 方法在移除一个不存在的元素时会发生错误，而 discard() 方法不会

# set.discard(value)

# 参数
    # value -- 必需，要移除的元素

Set = { "this", 'is', 'python' }

Set.discard('is')

print(Set) # {'python', 'this'}
