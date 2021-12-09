# 方法根据参数table给出的表(包含 256 个字符)转换字符串的字符,要过滤掉的字符放到 deletechars 参数中

# str.translate(table)
# bytes.translate(table[, delete])    
# bytearray.translate(table[, delete]) 

# 根据 maketrans() 方法(枚举) 反映射

string = "abcde"

num = '12345'

trantab = str.maketrans(string, num)

print(trantab) # {97: 49, 98: 50, 99: 51, 100: 52, 101: 53} 根据字母数字的code码

string2 = "a1b2c3d4e5"

print(string2.translate(trantab)) # 1122334455