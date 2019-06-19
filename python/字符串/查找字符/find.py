# 检测字符串中是否包含子字符串 str

# str.find(str, beg=0, end=len(string))

# 参数：
    # str -- 指定检索的字符串
    # beg -- 开始索引，默认为0。
    # end -- 结束索引，默认为字符串的长度。

# 返回值： 如果包含子字符串返回开始的索引值，否则返回-1。

# 示例

str = "Hello World"

print(str.find('H')) # 0

print(str.find('f')) # -1

print(str.find('o', 3, 6)) # 4