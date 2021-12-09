# startswith() 方法用于检查字符串是否是以指定子字符串开头，如果是则返回 True，否则返回 False。如果参数 beg 和 end 指定值，则在指定范围内检查。

# str.startswith(substr, beg=0,end=len(string));

# 参数
    # str -- 检测的字符串。
    # substr -- 指定的子字符串。
    # strbeg -- 可选参数用于设置字符串检测的起始位置。
    # strend -- 可选参数用于设置字符串检测的结束位置。

# 返回值：如果检测到字符串则返回True，否则返回False。

string = 'this is python'

print(string.startswith('this')) # True

print(string.startswith('is', 5)) # True

print(string.startswith('this', 5, 15)) # False
