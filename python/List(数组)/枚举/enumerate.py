# enumerate() 函数用于将一个可遍历的数据对象(如列表、元组或字符串)组合为一个索引序列，同时列出数据和数据下标，一般用在 for 循环当中。

# enumerate(sequence, [start=0])

# 参数
    # sequence -- 一个序列、迭代器或其他支持迭代对象。
    # start -- 下标起始位置。

# 返回值
    # 返回 enumerate(枚举) 对象。

arr = ['Tom', 'Yang', 'Zhai']

enum = enumerate(arr)

print(type(enum)) # <class 'enumerate'>

for i, item in enum:
    print(i) # 0 \ 1 \ 2
    print(item) # Tom \ Yang \ Zhai

