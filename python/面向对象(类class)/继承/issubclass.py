# issubclass() 方法用于判断参数 class 是否是类型参数 classinfo 的子类。

# issubclass(class, classinfo)

# 参数
    # class -- 子类。
    # classinfo -- 父类。

class A:
    def __init__(self):
        pass

class B:
    def __init__(self):
        pass

print(issubclass(A, B)) # False

class C:
    def __init__(self):
        pass

class D(C):
    def __init__(self):
        super().__init__()

print(issubclass(C, D)) # False

print(issubclass(D, C)) # True