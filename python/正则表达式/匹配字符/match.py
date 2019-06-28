# re.match 尝试从字符串的起始位置匹配一个模式，如果不是起始位置匹配成功的话，match()就返回none。

# re.match(pattern, string, flags=0)

# 参数
    # pattern 匹配的正则表达式
    # string  要匹配的字符串。
    # flags   标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等
    # flags 可选标志
        # re.I	使匹配对大小写不敏感
        # re.L	做本地化识别（locale-aware）匹配
        # re.M	多行匹配，影响 ^ 和 $
        # re.S	使 . 匹配包括换行在内的所有字符
        # re.U	根据Unicode字符集解析字符。这个标志影响 \w, \W, \b, \B.
        # re.X	该标志通过给予你更灵活的格式以便你将正则表达式写得更易于理解

import re

reg = re.match('www', 'www.baidu.com').span()

print(reg) # (0, 3)



