# 用于移除字符串头尾指定的字符（默认为空格）或字符序列。
# 该方法只能删除开头或是结尾的字符，不能删除中间部分的字符。

# str.strip([chars]);

# 参数
    # chars -- 移除字符串头尾指定的字符序列。

# 返回值：返回移除字符串头尾指定的字符序列生成的新字符串。

string = "**this is **** python ****"

print(string.strip('*')) # this is **** python

string2 = "123abcrunoob321"

print(string2.strip('12')) # 3abcrunoob3

# 注意 多个字符时 头尾第一个字符只要在 要截取的字符里面 就会被执行