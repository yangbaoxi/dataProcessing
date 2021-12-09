# 检测字符串是否只由空白字符组成。

# str.isspace()

# 如果字符串中只包含空格，则返回 True，否则返回 False.

str = ""

print(str.isspace()) # False

str2 = " "

print(str2.isspace()) # True

# 注意：1. 空白符包含：空格、制表符(\t)、换行(\n)、回车(\r）等。