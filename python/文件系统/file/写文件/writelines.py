# writelines() 方法用于向文件中写入一序列的字符串。
# 这一序列字符串可以是由迭代对象产生的，如一个字符串列表。
# 换行需要制定换行符 \n。

# file.writelines([str])

# 参数
    # str -- 要写入文件的字符串序列。

file = open('./demo2.txt', 'a+', encoding="utf-8")

lists = ['Hello, World \n', '你好吗？？']

file.writelines(lists)

file.flush()

file.close()
