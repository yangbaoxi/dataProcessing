# 检测字符串是否只由数字组成

# str.isnumeric()

# 返回值：如果字符串中只包含数字字符，则返回 True，否则返回 False

str = "12345"

print(str.isnumeric()) # True

str2 = "123 456 79"

print(str2.isnumeric()) # False