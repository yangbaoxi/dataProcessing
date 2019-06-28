# 字典 setdefault() 方法和 get()方法 类似, 如果键不已经存在于字典中，将会添加键并将值设为默认值。

# dict.setdefault(key, default=None)

# 参数
    # key -- 查找的键值。
    # default -- 键不存在时，设置的默认键值。

# 返回值： 如果 key 在 字典中，返回对应的值。如果不在字典中，则插入 key 及设置的默认值 default，并返回 default ，default 默认值为 None。

Object = {
    "name": "Tom",
    "age": 18,
    "other": "其他"
}

print(Object.setdefault('name')) # Tom

print(Object.setdefault('a', '这是A key 的 value')) # 这是A key 的 value

print(Object) # {'name': 'Tom', 'age': 18, 'other': '其他', 'a': '这是A key 的 value'}
