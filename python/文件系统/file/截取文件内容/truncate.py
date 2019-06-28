# truncate() 方法用于从文件的首行首字节开始截断，截断文件为 size 个字节，无 size 表示从当前位置截断；
# 截断之后 V 后面的所有字节被删除，其中 Widnows 系统下的换行代表2个字节大小。 。

# file.truncate([size])

# 参数
    # size -- 可选，如果存在则文件截断为 size 字节。

file = open('./demo.txt', 'r+', encoding="utf-8")

# file.seek(0)

file.truncate(250)

# file.seek(0)

print(file.read())

file.close()