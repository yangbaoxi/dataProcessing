# readline() 方法用于从文件读取整行，包括 "\n" 字符。如果指定了一个非负数的参数，则返回指定大小的字节数，包括 "\n" 字符。

# file.readline(); 

# 参数
    # size -- 从文件中读取的字节数。

# 返回值 返回从字符串中读取的字节。

file = open('./demo.txt', 'r', encoding="utf-8")

contont_line = file.readline()

print(contont_line) # 测试demo文件，为了读取一个文件的内容，调用 f.read(size), 这将读取一定数目的数据, 然后作为字符串或字节对象返回。

print(file.readline()) # size 是一个可选的数字类型的参数。 当 size 被忽略了或者为负, 那么该文件的所有内容都将被读取并且返回。

file.close()

# 问题 只能读取第一行？
# 继续执行 readline 就会显示第二行