# calendar.month(year,month,w=2,l=1)

# 返回一个多行字符串格式的year年month月日历，两行标题，一周一行。
# 每日宽度间隔为w字符。每行的长度为7* w+6。l是每星期的行数。

# 获取某月日历

import calendar

cal = calendar.month(2019, 6)

print(cal)

#     June 2019
# Mo Tu We Th Fr Sa Su
#                 1  2
#  3  4  5  6  7  8  9
# 10 11 12 13 14 15 16
# 17 18 19 20 21 22 23
# 24 25 26 27 28 29 30