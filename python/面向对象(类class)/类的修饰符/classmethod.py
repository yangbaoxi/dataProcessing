# classmethod 修饰符对应的函数不需要实例化，不需要 self 参数，但第一个参数需要是表示自身类的 cls 参数，
# 可以来调用类的属性，类的方法，实例化对象等。

# @classmethod

class A:
    def __init__(self):
        pass

    @classmethod
    def getName(cls, a):
        cls.a = a
        print(a) # 11
        print(cls.a) # 11
        pass

A.getName(11) # <class '__main__.A'>