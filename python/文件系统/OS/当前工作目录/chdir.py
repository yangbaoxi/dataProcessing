# os.chdir() 方法用于改变当前工作目录到指定的路径。

# os.chdir(path)

# 参数
    # path - 要切换到的新路径。

# 返回值 如果允许访问返回 True , 否则返回False

import os

os.chdir('../检测文件是否有访问权限')

print(os.getcwd()) # C:\Users\dell-pc\Desktop\资料整理\dataProcessing\python\文件系统\OS\检测文件是否有访问权限

print(os.name) # nt