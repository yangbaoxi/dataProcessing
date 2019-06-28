# delattr 函数用于删除属性。
# delattr(x, 'foobar') 相等于 del x.foobar。

# delattr(object, name)

# 参数
#     object -- 对象。
#     name -- 必须是对象的属性。

class A:
    a = 1

a = A()

print(a.a) # 1

delattr(A, 'a')

print(a.a) # Error 'A' object has no attribute 'a'