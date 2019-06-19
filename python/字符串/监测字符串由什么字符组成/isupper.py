# 检测字符串中所有的字母是否都为大写。

# str.isupper()

# 返回值：如果字符串中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True，否则返回 False

str = "HELLO WORLD@"

str2 = "HELLOWORLD"

print(str.isupper()) # True

print(str2.isupper()) # True