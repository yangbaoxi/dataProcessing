# 主文件

# 引入外部 数据、函数等等

import util

print(util.FunName()) # 外部函数

print(util.Object) # {'a': 1, 'b': 2}


# import 引入定义文件

# dir 查看引入的文件 所有属性、方法

print(dir(util)) # ['FunName', 'Object', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__']