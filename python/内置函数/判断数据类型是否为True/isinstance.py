# isinstance() 函数来判断一个对象是否是一个已知的类型，类似 type()。

# isinstance() 与 type() 区别：
    # type() 不会认为子类是一种父类类型，不考虑继承关系。
    # isinstance() 会认为子类是一种父类类型，考虑继承关系。
    # 如果要判断两个类型是否相同推荐使用 isinstance()。

# isinstance(object, classinfo)

# 参数
    # object -- 实例对象。
    # classinfo -- 可以是直接或间接类名、基本类型或者由它们组成的元组。

# 返回值
    # 如果对象的类型与参数二的类型（classinfo）相同则返回 True，否则返回 False。

string = "String 类型"

print(isinstance(string, str)) # True

arr = [1, 2, 3]

print(isinstance(arr, list)) # True

Tuple = (1, 2, 3)

print(isinstance(Tuple, tuple)) # True

Object = { "a": 1, "b": 2 }

print(isinstance(Object, dict)) # True

number = 1

print(isinstance(number, int)) # True

float_number = 3.14

print(isinstance(float_number, float)) # True