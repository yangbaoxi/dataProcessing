# 检测字符串是否只由字母组成。

# str.isalpha()

# 返回值：如果字符串至少有一个字符并且所有字符都是字母则返回 True,否则返回 False

str = "Hello World"

print(str.isalpha()) # False 空格算特殊字符

str2 = "HelloWorld"

print(str2.isalpha()) # True

# 注意 汉字 返回 True
