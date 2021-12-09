# setattr() 函数对应函数 getattr()，用于设置属性值，该属性不一定是存在的。

# setattr(object, name, value)

# 参数
    # object -- 对象。
    # name -- 字符串，对象属性。
    # value -- 属性值。

class A:
    bar = 1

a = A()

setattr(a, "age", 18)

# print(a.age) # 18