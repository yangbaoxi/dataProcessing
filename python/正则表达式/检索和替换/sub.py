# re模块提供了re.sub用于替换字符串中的匹配项。

# re.sub(pattern, repl, string, count=0, flags=0)

# 参数
    # pattern : 正则中的模式字符串。
    # repl : 替换的字符串，也可为一个函数。
    # string : 要被查找替换的原始字符串。
    # count : 模式匹配后替换的最大次数，默认 0 表示替换所有的匹配。
    # flags : 编译时用的匹配模式，数字形式。

    # 前三个为必选参数，后两个为可选参数。

import re

phone = "2004-959-559 # 这是一个电话号码"

num = re.sub(r'#.*$', "", phone)

print ("电话号码 : ", num) # 电话号码 :  2004-959-559

num = re.sub(r'\D', "", phone)

print ("电话号码 : ", num) # 电话号码 :  2004-959-559