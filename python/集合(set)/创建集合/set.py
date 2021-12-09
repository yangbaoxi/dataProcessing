# 集合（set）是一个无序的不重复元素序列。

# 一、创建集合

# 1.方式一

set_one = { "this", 'is', 'python' }

print(set_one) # {'is', 'python', 'this'}

# 2.方式二

set_two = set('this')

print(set_two) # {'i', 't', 's', 'h'}

print(type(set_one)) # <class 'set'>

# 二、查找set 元素是否存在

print('is' in set_one) # True

print('is' not in set_two) # True

# 三、set 运算

set_three = { 'this', 'is', 'python' }
set_four = { 'this', 'is', 'javascript' }

# 1. -

print(set_three - set_four) # {'python'}  集合set_three中包含而集合set_four中不包含的元素

# 2. |

print(set_three | set_four) # {'python', 'is', 'javascript', 'this'} set_three and set_four 并集

# 3. &

print(set_three & set_four) # {'is', 'this'} set_three and set_four 交集

# 4. ^

print(set_three ^ set_four) # {'python', 'javascript'} set_three and set_four 差集

# 四、判断元素是否在集合中存在

print('is' in set_one) # True

print('is' not in set_one) # False
