# 返回字符串最后一次出现的位置，如果没有匹配项则返回-1。

# str.rfind(str, beg=0 end=len(string))

# 参数
    # str -- 查找的字符串
    # beg -- 开始查找的位置，默认为0
    # end -- 结束查找位置，默认为字符串的长度。

# 返回值： 返回字符串最后一次出现的位置，如果没有匹配项则返回-1。

string = "This is my is you"

print(string.rfind('is')) # 11

print(string.rfind('is', 0, 5)) # 2
