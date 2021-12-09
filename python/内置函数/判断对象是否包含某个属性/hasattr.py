# hasattr() 函数用于判断对象是否包含对应的属性。

# hasattr(object, name)

# 参数
    # object -- 对象。
    # name -- 字符串，属性名。

# 返回值 如果对象有该属性返回 True，否则返回 False。

Object = {
    "a": 1,
    "b": 2
}

print(hasattr(Object, 'a')) # False