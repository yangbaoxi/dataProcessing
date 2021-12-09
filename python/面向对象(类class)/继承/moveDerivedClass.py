# 多继承

class People:
    def __init__(self, name):
        self.name = name
    def getName(self):
        print('名字：', self.name)

class Hobby:
    def __init__(self, hobby):
        self.hobby = hobby
    
    def getHobby(self):
        print('爱好是：', self.hobby)

class Student(People, Hobby):
    def __init__(self, name, hobby):
        People.__init__(self, name)
        Hobby.__init__(self, hobby)
    

Tom = Student("Tom", "篮球")

Tom.getName() # 名字： Tom

Tom.getHobby() # 爱好是： 篮球

# 注意 多继承 再子级的构造函数中需要 __init__ 父级类， 参数需要传递 self
