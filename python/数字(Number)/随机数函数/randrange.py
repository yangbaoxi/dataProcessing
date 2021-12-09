# randrange() 方法返回指定递增基数集合中的一个随机数，基数缺省值为1。

# random.randrange ([start,] stop [,step])

# 参数
    # start -- 指定范围内的开始值，包含在范围内。
    # stop -- 指定范围内的结束值，不包含在范围内。
    # step -- 指定递增基数。

import random

print(random.randrange(100)) # 从 0-99 选取一个随机数

print(random.randrange(1, 100, 2)) # 从 1-100 中选取一个奇数