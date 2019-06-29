# 错误异常

try:
    print(a)

except NameError:
    print('程序错误')


# 自定义异常

class Error(Exception):
    def __init__(self, value):
        self.value = value
    
    def __str__(self):
        return repr(self.value)

boolean = False

try:
    if boolean == False:
        raise Error('boolean 不为 true')
    else:
        print('没事继续执行')

except Error as e:
    print('e:', e)
    print('异常出现:', e.value)
