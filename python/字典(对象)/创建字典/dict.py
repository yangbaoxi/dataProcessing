# 字典 理解为 对象 => Object

Object = {
    "name": "Tom",
    "age": 18
}

print(Object) # {'name': 'Tom', 'age': 18}

# !注意 key 值要加双引号

# 一、 访问字典里面的值

print(Object['name']) # Tom 

# !注意 不能使用 javascript 中的 . 语法 如 Object.name  这是错误

# 如果访问不到字典该元素则会报错

# 二、修改字典

Object['name'] = "杨宝"

print(Object) # {'name': '杨宝', 'age': 18}

# 三、删除字典某值

del Object['age']

print(Object) # {'name': '杨宝'}

# 四、清空字典

Object.clear()

print(Object) # {}

# !注意不允许同一个键出现两次。创建时如果同一个键被赋值两次，后一个值会被记住
# !键必须不可变，所以可以用数字，字符串或元组充当，而用列表就不行


# 五、创建 字典 dict() 函数

# 语法 
    # dict(**kwarg)
    # dict(mapping, **kwarg)
    # dict(iterable, **kwarg)

# 参数
    # **kwargs -- 关键字
    # mapping -- 元素的容器。
    # iterable -- 可迭代对象。

# 返回值 返回一个字典。

dict() # {}

dict(a='a', b='b', t='t') # {'a': 'a', 'b': 'b', 't': 't'}

dict(zip(['one', 'two', 'three'], [1, 2, 3])) # {'three': 3, 'two': 2, 'one': 1}

dict([('one', 1), ('two', 2), ('three', 3)]) # {'three': 3, 'two': 2, 'one': 1}

dict((['a',2],['b',3])) # {'a': 2, 'b': 3}
