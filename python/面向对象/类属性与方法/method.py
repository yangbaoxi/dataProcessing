# 类的私有属性/共有属性

class People:
    __name = "Tom" # 私有属性
    age = 18 # 共有属性
    def __init__(self):
        self.hobby = "篮球" # 共有属性
    def getName(self):
        print(self.__name)

Tom = People()

print(Tom.age)

# print(Tom.__name) # 'People' object has no attribute '__name' 私有属性 禁止访问

Tom.getName() # Tom

# 私有方法

class Wold:
    def __init__(self):
        pass
    def getAge(self):
        print('共有方法')

    def __getName(self):
        print('私有方法')

    def getNameFun(self):
        self.__getName()

wold = Wold()

wold.getAge() # 共有方法

# wold.__getName() # 'Wold' object has no attribute '__getName' 私有方法

wold.getNameFun() # 私有方法