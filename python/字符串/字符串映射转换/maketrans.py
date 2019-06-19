# 方法用于创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。
# 两个字符串的长度必须相同，为一一对应的关系。

# str.maketrans(intab, outtab)

# str.translate(元组)

# 参数
    # intab -- 字符串中要替代的字符组成的字符串。
    # outtab -- 相应的映射字符的字符串。

# 返回值：返回字符串转换后生成的新字符串。

string = "abcde"

num = '12345'

trantab = str.maketrans(string, num)

print(trantab) # {97: 49, 98: 50, 99: 51, 100: 52, 101: 53} 根据字母数字的code码

string2 = "a1b2c3d4e5"

print(string2.translate(trantab)) # 1122334455

