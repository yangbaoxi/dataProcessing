# read() 方法用于从文件读取指定的字节数，如果未给定或为负则读取所有。

# file.read();

# 参数
    # size -- 从文件中读取的字节数。

# 返回值 返回从字符串中读取的字节。

file = open('./demo.txt', 'r', encoding="utf-8")

content = file.read()

print(content)

file.close()


# 错误报告：
# 'gbk' codec can't decode byte 0xaf in position 26: illegal multibyte sequence
# 编码类型不符合，转成 utf-8 即可