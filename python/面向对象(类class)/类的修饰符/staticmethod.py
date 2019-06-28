#  staticmethod 返回函数的静态方法。

# @staticmethod

class A:
    def __init__(self):
        pass
    @staticmethod
    def getAge():
        print('静态方法')
        pass


A.getAge() # 声明为静态方法，不需要传递 任何参数