# getattr() 函数用于返回一个对象属性值。

# getattr(object, name[, default])

# 参数
    # object -- 对象。
    # name -- 字符串，对象属性。
    # default -- 默认返回值，如果不提供该参数，在没有对应属性时，将触发 AttributeError。

# 返回值 返回对象属性值。

Object = {
    "a": 1,
    "b": 2
}

value = getattr(Object, 'a', '没有属性')

print(value)