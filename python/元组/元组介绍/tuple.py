# 元组的元素不能修改。
# 元素的元素不能被删除

# 一、创建元组

Tuple = ('a', 'b', 'c', 'd')

print(Tuple) # ('a', 'b', 'c', 'd')

Tuple2 = (5,) # 只有一个元素时需要添加 , 否则会被计算成 int 类型

print(Tuple2) # (5,)

# 二、访问元组

print(Tuple[0]) # a

print(Tuple[1:]) # ('b', 'c', 'd')

# 三、合并元组

print(Tuple + Tuple2) # ('a', 'b', 'c', 'd', 5)

# 四、元组的运算符

# 1. len() 计算长度

print(len(Tuple)) # 4

# 2. * 复制倍数

print(Tuple * 2) # ('a', 'b', 'c', 'd', 'a', 'b', 'c', 'd')

# 3. 监测元素是否存在

print('a' in Tuple) # True
