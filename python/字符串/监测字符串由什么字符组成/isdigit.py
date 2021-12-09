# 检测字符串是否只由数字组成。

# str.isdigit()

# 返回值：字符串只包含数字则返回 True 否则返回 False。

str = "12345"

print(str.isdigit()) # True

str2 = "12345s"

print(str2.isdigit()) # False

str3 = "123 456 79"

print(str3.isdigit()) # False