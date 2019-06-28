# compile 函数
# compile 函数用于编译正则表达式，生成一个正则表达式（ Pattern ）对象，供 match() 和 search() 这两个函数使用。

# re.compile(pattern[, flags])

# 参数
    # pattern : 一个字符串形式的正则表达式
    # flags 可选，表示匹配模式，比如忽略大小写，多行模式等，具体参数为

import re

reg = re.compile(r'\d+')

print(reg) # re.compile('\\d+')

m = reg.search('one12twothree34four').span()

print(m) # (3, 5)

# 注意正则表达式对象 re.compile() 返回 RegexObject 对象。

