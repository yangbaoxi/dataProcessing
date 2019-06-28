# 类继承

class People:
    def __init__(self, name):
        self.name = name
    def getName(self):
        print(self.name)

# 单继承

#  子类传入 父类 Name 在构造函数中 使用 super() 方法继承父类属性以及方法

class Student(People):
    def __init__(self, name):
        super().__init__(name)

Tom = Student("Tom")

print(dir(Tom))

Tom.getName() # Tom


# 方法重写

class Yang(People):
    def __init__(self, name):
        People.__init__(self, name)
    def getName(self):
        print('重写父类方法', self.name)

yang = Yang('Tom')

yang.getName() # 重写父类方法 Tom