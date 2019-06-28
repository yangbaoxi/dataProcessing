# 方法返回x的整数部分与小数部分，两部分的数值符号与x相同，整数部分以浮点型表示。

# math.modf( x )

import math

print(math.modf(3.14)) # (0.14000000000000012, 3.0)

print(type(math.modf(3.14))) # <class 'tuple'>
