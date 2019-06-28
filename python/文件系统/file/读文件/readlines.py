# readlines() 方法用于读取所有行(直到结束符 EOF)并返回列表，
# 该列表可以由 Python 的 for... in ... 结构进行处理。 
# 如果碰到结束符 EOF 则返回空字符串。

# file.readlines();

file = open('./demo.txt', 'r', encoding="utf-8")

content = file.readlines()

print(content)

# [
#   '测试demo文件，为了读取一个文件的内容，调用 f.read(size), 这将读取一定数目的数据, 然后作为字符串或字节对象返回。\n', 
#   'size 是一个可选的数字类型的参数。 当 size 被忽略了或者为负, 那么该文件的所有内容都将被读取并且返回。\n', 
#   '以下实例假定文件 foo.txt 已存在（上面实例中已创建）\n', 
#   '#!/usr/bin/python3\n', 
#   '# 打开一个文件\n', 
#   'f = open("/tmp/foo.txt", "r")\n', 
#   'str = f.readline()\n', 'print(str)\n', 
#   '# 关闭打开的文件\n', 'f.close()'
# ]

file.close()