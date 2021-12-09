# 格式化字符串

# str.format()

# 示例1：

string = "Hello World {0} -- {1}"

print(string.format("One", "Two")) # Hello World One -- Two

# 示例2：

string2 = "姓名：{name}, 年龄：{age}"

print(string2.format(name="杨宝", age=18)) # 姓名：杨宝, 年龄：18

# 示例3： 通过字典设置（字典 === object）

object = {
    "name": "杨宝",
    "age": 18
}

print(string2.format(**object)) # 姓名：杨宝, 年龄：18

# 示例4： 通过列表设置（列表 === Array）

string3 = "姓名：{0[0]}, 年龄：{0[1]}"

Array = ["杨宝", 18]

print(string3.format(Array)) # 姓名：杨宝, 年龄：18

# 示例5：简化常用

string4 = f"{object}" # {'name': '杨宝', 'age': 18}

print(string4)

# 三引号 => 允许一个字符串跨多行，字符串中可以包含换行符、制表符以及其他特殊字符

str = '''
    <html>
        <body></body>
    </html>
'''

print(str) # 三引号 跟 <pre> 标签功能一样

# 数字格式化  https://www.runoob.com/python/att-string-format.html

# 数字	        格式	    输出	             描述

# 3.1415926	    {:.2f}	    3.14	            保留小数点后两位
# 3.1415926	    {:+.2f}	    +3.14	            带符号保留小数点后两位
# -1	        {:+.2f}	    -1.00	            带符号保留小数点后两位
# 2.71828	    {:.0f}	    3	                不带小数
# 5	            {:0>2d}	    05	                数字补零 (填充左边, 宽度为2)
# 5	            {:x<4d}	    5xxx	            数字补x (填充右边, 宽度为4)
# 10	        {:x<4d}	    10xx	            数字补x (填充右边, 宽度为4)
# 1000000	    {:,}	    1,000,000	        以逗号分隔的数字格式
# 0.25	        {:.2%}	    25.00%	            百分比格式
# 1000000000	{:.2e}	    1.00e+09	        指数记法
# 13	        {:10d}	    13	                右对齐 (默认, 宽度为10)
# 13	        {:<10d}	    13	                左对齐 (宽度为10)
# 13	        {:^10d}	    13	                中间对齐 (宽度为10)
