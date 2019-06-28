# os.access() 方法使用当前的uid/gid尝试访问路径。大部分操作使用有效的 uid/gid, 因此运行环境可以在 suid/sgid 环境尝试。
# uid 就是用户ID

# os.access(path, mode);

# 参数
    # path -- 要用来检测是否有访问权限的路径。
    # mode -- mode为 F_OK，测试存在的路径，
    # mode:
        # os.F_OK: 作为access()的mode参数，测试path是否存在。
        # os.R_OK: 包含在access()的mode参数中 ， 测试path是否可读。
        # os.W_OK 包含在access()的mode参数中 ， 测试path是否可写。
        # os.X_OK 包含在access()的mode参数中 ，测试path是否可执行。

# 返回值 如果允许访问返回 True , 否则返回False。

import os

Bool1 = os.access('./demo.txt', os.F_OK)

print(Bool1) # False

Bool2 = os.access('./test.txt', os.R_OK)

print(Bool2) # True

Bool3 = os.access('./test.txt', os.W_OK)

print(Bool3) # True

Bool4 = os.access('./test.txt', os.X_OK)

print(Bool4) # True