# os.getcwd() 方法用于返回当前工作目录。

# os.getcwd() 

# 返回值 返回当前进程的工作目录。

import os

path = os.getcwd()

print(path) # C:\Users\dell-pc\Desktop\资料整理\dataProcessing\python\文件系统\OS\当前工作目录

os.chdir('../检测文件是否有访问权限') # 切换工作目录

print(os.getcwd()) # C:\Users\dell-pc\Desktop\资料整理\dataProcessing\python\文件系统\OS\检测文件是否有访问权限

file = open('./access.py', 'r', encoding="utf-8") # 访问文件

print(file.read())

file.close()