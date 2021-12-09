# 字符串运算符

string = "Hello World"

# +     => 字符串拼接

# *     => 重复输出字符串

print(string * 2) # Hello WorldHello World

# []    => 通过索引获取字符串中字符

# [ : ] => 截取字符串中的一部分，遵循左闭右开原则

# in    => 如果字符串中包含给定的字符返回 True

print("H" in string) # Ture

print("T" in string) # False

# not in => 如果字符串中不包含给定的字符返回 True

print("H" not in string) # False

print("T" not in string) # Ture

# r/R   => 显示原始字符串

print(r"\nHello") # \nHello

# %     => 格式字符串 查阅：https://www.runoob.com/python3/python3-string.html