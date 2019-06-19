# 用于判断字符串是否以指定后缀结尾，如果以指定后缀结尾返回 True，否则返回 False。可选参数 "start" 与 "end" 为检索字符串的开始与结束位置。

# str.endswith(suffix[, start[, end]])

# 参数
    # suffix -- 该参数可以是一个字符串或者是一个元素。
    # start -- 字符串中的开始位置。
    # end -- 字符中结束位置。

# 返回值：如果字符串含有指定的后缀返回 True，否则返回 False。

# 示例

str = "Hello World"

print(str.endswith('d')) # Ture

print(str.endswith('e')) # False

print(str.endswith('e', 0, 2)) # True

