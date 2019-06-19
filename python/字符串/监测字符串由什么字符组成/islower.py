# 检测字符串是否由小写字母组成。

# str.islower()

# 返回值：如果字符串中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True，否则返回 False

str = "Hello World"

print(str.islower()) # False

str2 = "hello world"

print(str2.islower()) # True

str3 = "hello world -- 1"

print(str3.islower()) # True 自动忽略 数字、特殊字符