# tell() 方法返回文件的当前位置，即文件指针当前位置。

# file.tell()

# 返回值 返回文件（指针）的当前位置。

file = open('../读文件/demo.txt', 'r', encoding="utf-8")

print(file.tell()) # 0

file.seek(20)

print(file.tell()) # 20
