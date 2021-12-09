# 函数 （与js 不一样的地方）

# 一、默认参数

def FanName(name = "Tom"):
    print(name)


FanName() # Tom
 
FanName('Yang') # Yang

# 二、不定长参数 

# 1. 元组

def FunctionName(*args):
    print(args) # (1, 2, 3, 4, 5)

FunctionName(1,2,3,4,5)

# 2. 对象

def FunctionName_one(**args):
    print(args) # {'a': 1, 'b': 2}

FunctionName_one(a=1,b=2)

# 三、匿名函数

g = lambda x: x + 1

g(5) # 6

# 四、全局变量和局部变量

# global  改变全局变量

g_num = 1

def set_g_num():
    global g_num
    g_num = 100

set_g_num()

print(g_num) # 100

# nonlocal 改变局部变量

def set_n_num():
    n_num = 1
    def Fun_num():
        nonlocal n_num
        n_num = 100
    Fun_num()
    print(n_num)

set_n_num() # 100