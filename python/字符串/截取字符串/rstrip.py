# 删除 string 字符串末尾的指定字符（默认为空格）.

# str.rstrip([chars])

# 参数 ： chars -- 指定删除的字符（默认为空格）

# 返回值： 返回删除 string 字符串末尾的指定字符后生成的新字符串。

string = "this is Python   "

print(string.rstrip()) # this is Python

string2 = "this is Python   1****"

print(string2.rstrip('*')) # this is Python   1
