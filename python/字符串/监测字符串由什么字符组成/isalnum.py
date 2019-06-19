# 检测字符串是否由字母和数字组成。

# str.isalnum()

# 返回值：string 至少有一个字符并且所有字符都是字母或数字则返回 True,否则返回 False

str = "12018"

print(str.isalnum()) # True

str2 = "1112@"

print(str2.isalnum()) # False

# 只要没有特殊符号 都会返回 True 反之返回 false
