# 返回一个指定的宽度 width 居中的字符串，fillchar 为填充的字符，默认为空格。

# str.center(width[, fillchar])

# 参数:  width -- 字符串的总宽度 
#       fillchar -- 填充字符

# 返回值: 返回一个指定的宽度 width 居中的字符串，如果 width 小于字符串宽度直接返回字符串，否则使用 fillchar 去填充。

# 示例

str = "4"

str = str.center(4, '*')

print(str)

# 注意

# 1. 不会改变原有字符串
# 2. 如果width 小于字符串宽度 直接返回字符串 不会截取
# 3. fillchar 只能是单个字符