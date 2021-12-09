# re.search 扫描整个字符串并返回第一个成功的匹配。

# re.search(pattern, string, flags=0)

# 参数
    # pattern   匹配的正则表达式
    # string    要匹配的字符串。
    # flags     标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等

# 返回值    匹配成功re.search方法返回一个匹配的对象，否则返回None。

import re

reg = re.search('baidu', 'www.baidu.com').span()

print(reg) # (4, 9)