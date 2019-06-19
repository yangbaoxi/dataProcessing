# 用于统计字符串里某个字符出现的次数。可选参数为在字符串搜索的开始与结束位置。

# str.count(sub, start= 0,end=len(string))

# 参数：
    # sub -- 搜索的子字符串
    # start -- 字符串开始搜索的位置。默认为第一个字符,第一个字符索引值为0。
    # end -- 字符串中结束搜索的位置。字符中第一个字符的索引为 0。默认为字符串的最后一个位置。

# 返回值: 该方法返回子字符串在字符串中出现的次数。

# 示例

str = "Hello World"

num = str.count('o')

print(num) # 2

num2 = str.count('o', 0, 6)

print(num2) # 1