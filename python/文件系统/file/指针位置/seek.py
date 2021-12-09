# seek() 方法用于移动文件读取指针到指定位置。

# file.seek(offset[, whence])

# 参数
    # offset -- 开始的偏移量，也就是代表需要移动偏移的字节数，如果是负数表示从倒数第几位开始。
    # whence：可选，默认值为 0。给 offset 定义一个参数，表示要从哪个位置开始偏移；
    #   0 代表从文件开头开始算起，
    #   1 代表从当前位置开始算起，
    #   2 代表从文件末尾算起。

# 返回值 如果操作成功，则返回新的文件位置，如果操作失败，则函数返回 -1。

file = open('../读文件/demo.txt', 'r', encoding="utf-8")

file.seek(10)

content = file.read(20)

print(content) # 文件，为了读取一个文件的内容，调用 f.

# 指针移动 10字符，再读取 20字符

file.close()

