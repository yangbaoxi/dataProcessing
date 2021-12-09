# vars() 函数返回对象object的属性和属性值的字典对象。

# vars([object])

# 参数
    # object -- 对象

# 返回值 返回对象object的属性和属性值的字典对象，如果没有参数，就打印当前调用位置的属性和属性值 类似 locals()。

class A:
    def __init__(self):
        pass

print(vars(A)) # {'__module__': '__main__', '__init__': <function A.__init__ at 0x0000020D25C866A8>, '__dict__': <attribute '__dict__' of 'A' objects>, '__weakref__': <attribute '__weakref__' of 'A' objects>, '__doc__': None}