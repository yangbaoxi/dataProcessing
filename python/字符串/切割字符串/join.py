# 方法用于将序列中的元素以指定的字符连接生成一个新的字符串 / 切割字符串

# str.join(sequence)

# 参数：sequence -- 要连接的元素序列。

# 返回值：返回通过指定字符连接序列中元素后生成的新字符串。

str = "-"

print(str.join('Hello World')) # H-e-l-l-o- -W-o-r-l-d

print(str.join(('H',"e",'l','l','o'))) # H-e-l-l-o

# 注意
    # 1. ('H',"e",'l','l','o') => 称为 字符串序列
