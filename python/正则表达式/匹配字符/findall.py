# 在字符串中找到正则表达式所匹配的所有子串，并返回一个列表，如果没有找到匹配的，则返回空列表。
# 注意： match 和 search 是匹配一次 findall 匹配所有。

# findall(string[, pos[, endpos]])

# 参数
    # string 待匹配的字符串。
    # pos 可选参数，指定字符串的起始位置，默认为 0。
    # endpos 可选参数，指定字符串的结束位置，默认为字符串的长度。

import re

reg = re.compile(r'\d+')

arr = reg.findall('runoob 123 google 456')

print(arr) # ['123', '456']