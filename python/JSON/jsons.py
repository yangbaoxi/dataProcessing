# JSON 与 Python 数据类型对应表

# Python => JSON

    # dict  => object

    # list\tuple  => array

    # str  =>  string

    # int, float, int- & float-derived Enums  => number

    # True  => true

    # False => false

    # None  => null

# JSON => Python

    # object => dict

    # array  => list

    # string => str

    # number (int)  => int

    # number (real) => float

    # true => True

    # false => False

    # null => None

# JSON 模块先关的函数
    # loads：把json转换成其他格式，字符串或文件相关的
    # dumps：把其他对象或格式转换为json格式
    # load：将文件的内容转换成为json数据
    # dump：把json数据写入到文件中

# 一、Python 转 JSON

# 把其他对象或格式转换为json格式

# json.dumps(data)

import json

data = {
    'no' : 1,
    'name' : 'Tom',
    'url' : 'http://www.baidu.com'
}

print(data) # {'no': 1, 'name': 'Tom', 'url': 'http://www.baidu.com'}

print(type(data)) # <class 'dict'>
 
json_str = json.dumps(data)

print(json_str) # {"no": 1, "name": "Tom", "url": "http://www.baidu.com"}

print(type(json_str)) # <class 'str'>

