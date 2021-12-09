# 方法检测字符串中是否包含子字符串 str  (改方法与find() 方法一样不同点看下面返回值)

# str.index(str, beg=0, end=len(string))

# 参数
    # str -- 指定检索的字符串
    # beg -- 开始索引，默认为0。
    # end -- 结束索引，默认为字符串的长度。

# 返回值：如果包含子字符串返回开始的索引值，否则抛出异常。

# 示例

str = "Hello World"

print(str.index("H")) # 0

print(str.index('f')) # 异常 substring not found