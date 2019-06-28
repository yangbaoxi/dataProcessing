# locals() 函数会以字典类型返回当前位置的全部局部变量。
# 对于函数, 方法, lambda 函式, 类, 以及实现了 __call__ 方法的类实例, 它都返回 True。

# locals()

# 返回值  返回字典类型的局部变量。

num = 1

print(locals())

# { '__name__': '__main__', '__doc__': None, '__package__': None, 
#   '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x000001FA85A0FEF0>, 
#   '__spec__': None, '__annotations__': {}, 
#   '__builtins__': <module 'builtins' (built-in)>, 
#   '__file__': 'C:\\Users\\dell-pc\\Desktop\\资料整理\\dataProcessing\\python\\内置函数\\返回全部局部变量\\locals.py', 
#   '__cached__': None, 'num': 1
# }