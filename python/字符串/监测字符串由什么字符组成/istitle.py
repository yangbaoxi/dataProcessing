# 检测字符串中所有的单词拼写首字母是否为大写，且其他字母为小写

# str.istitle()

# 返回值： 如果字符串中所有的单词拼写首字母是否为大写，且其他字母为小写则返回 True，否则返回 False.

str = "Hello World"

str2 = "Hello world"

print(str.istitle()) # True

print(str2.istitle()) # False