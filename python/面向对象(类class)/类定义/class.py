# 类定义

# 创建类

# __init__ 函数就是构造函数 
# 参数 self === this

class ClassName:
    def __init__(self):
        print('生命周期')


# new 实例化对象

a = ClassName()

# 类方法

# def FunctionName(self, args):
# 接受 self 参数 + 其他

class Test:
    def __init__(self):
        self.data = [] # 共有属性
    
    def setData(self, data):
        self.data.append(data)

        print(self.data)  # [1]

test = Test()

test.setData(1)

