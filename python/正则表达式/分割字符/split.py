# split 方法按照能够匹配的子串将字符串分割后返回列表，它的使用形式如下：

# re.split(pattern, string[, maxsplit=0, flags=0])

# 参数
    # pattern	匹配的正则表达式
    # string	要匹配的字符串。
    # maxsplit	分隔次数，maxsplit=1 分隔一次，默认为 0，不限制次数。
    # flags	    标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。


import re

reg = re.split(r'\d+', '你在吗12哈哈4511a')

print(reg) # ['你在吗', '哈哈', 'a']