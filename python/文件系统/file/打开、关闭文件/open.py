# open() 方法用于打开一个文件，并返回文件对象，在对文件进行处理过程都需要使用到这个函数，如果该文件无法被打开，会抛出 OSError。
# 注意：使用 open() 方法一定要保证关闭文件对象，即调用 close() 方法。
# open() 函数常用形式是接收两个参数：文件名(file)和模式(mode)。

# open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)

# 参数
    # file: 必需，文件路径（相对或者绝对路径）。
    # mode: 可选，文件打开模式
    # buffering: 设置缓冲
    # encoding: 一般使用utf8
    # errors: 报错级别
    # newline: 区分换行符
    # closefd: 传入的file参数类型
    # opener: 

    # 参数 mode 字典表
    # { mode: 't', description: '文本模式 (默认)。' }
    # { mode: 'x', description: '写模式，新建一个文件，如果该文件已存在则会报错。' }
    # { mode: 'b', description: '二进制模式。' }
    # { mode: '+', description: '打开一个文件进行更新(可读可写)。' }
    # { mode: 'U', description: '通用换行模式（不推荐）。' }
    # { mode: 'r', description: '以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。' }
    # { mode: 'rb', description: '以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。' }
    # { mode: 'r+', description: '打开一个文件用于读写。文件指针将会放在文件的开头。' }
    # { mode: 'rb+', description: '以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。' }
    # { mode: 'w', description: '打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。' }
    # { mode: 'w+', description: '打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。' }    
    # { mode: 'wb', description: '以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。' }
    # { mode: 'wb+', description: '以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。' }
    # { mode: 'a', description: '打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。' }
    # { mode: 'ab', description: '以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。' }
    # { mode: 'a+', description: '打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。' }
    # { mode: 'ab+', description: '以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。' }


file = open('./a.txt', 'r')

print(file) # <_io.TextIOWrapper name='./a.txt' mode='r' encoding='cp936'>

print(file.name) # ./a.txt

print(file.mode) # r

print(file.read()) # Hello World

file.close()
