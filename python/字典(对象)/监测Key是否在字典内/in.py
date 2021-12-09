# 字典 in 操作符用于判断键是否存在于字典中，如果键在字典 dict 里返回 true，否则返回 false。
# 而 not in 操作符刚好相反，如果键在字典 dict 里返回 false，否则返回 true。

# key in dict

# 参数
    # key -- 要在字典中查找的键。

# 返回值 如果键在字典里返回true，否则返回false。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

print('name' in Object) # True

print('aa' in Object) # False

print('name' not in Object) # False