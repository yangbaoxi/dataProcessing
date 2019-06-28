# 一、时间戳

import time

print(time.time()) # 1561627240.7862825

# 二、获取本地当前时间

localtime = time.localtime(time.time())

print(time.localtime()) # time.struct_time(tm_year=2019, tm_mon=6, tm_mday=28, tm_hour=9, tm_min=44, tm_sec=1, tm_wday=4, tm_yday=179, tm_isdst=0)

print('通过时间戳', localtime) # time.struct_time(tm_year=2019, tm_mon=6, tm_mday=28, tm_hour=9, tm_min=44, tm_sec=1, tm_wday=4, tm_yday=179, tm_isdst=0)


# 三、时间元组

    # time.struct_time(tm_year=2019, tm_mon=6, tm_mday=28, tm_hour=9, tm_min=39, tm_sec=6, tm_wday=4, tm_yday=179, tm_isdst=0)

    # tm_year => 年
    # tm_mon => 月
    # tm_mday => 日
    # tm_hour => 小时
    # tm_min => 分钟
    # tm_sec => 秒
    # tm_wday => 周几 (0 ~ 6  0为周一)
    # tm_yday => 一年中的第几天，1 到 366
    # tm_isdst => 是否为夏令时，值有：1(夏令时)、0(不是夏令时)、-1(未知)，默认 -1

# 四、格式化时间

# 1. time.asctime(time)

print(time.asctime(localtime)) # Fri Jun 28 09:45:25 2019

# 2. time.strftime(format[, t]) 元组转时间

# 2018-01-01 格式：

print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())) # 2019-06-28 10:02:47

# Sat Mar 28 22:24:24 2016 格式：

print(time.strftime('%a %b %d %H:%M:%S %Y', time.localtime())) # Fri Jun 28 10:03:56 2019

# 3. time.mktime()  将格式字符串转换为时间戳

# time.strptime() 反序列化 (时间转元组)

date = "2019-06-28 10:04:10"

print(time.mktime(time.strptime(date, '%Y-%m-%d %H:%M:%S'))) # 1561687450.0

# 4. Python 格式化符号：

# %y 两位数的年份表示（00-99）
# %Y 四位数的年份表示（000-9999）
# %m 月份（01-12）
# %d 月内中的一天（0-31）
# %H 24小时制小时数（0-23）
# %I 12小时制小时数（01-12）
# %M 分钟数（00=59）
# %S 秒（00-59）
# %a 本地简化星期名称
# %A 本地完整星期名称
# %b 本地简化的月份名称
# %B 本地完整的月份名称
# %c 本地相应的日期表示和时间表示
# %j 年内的一天（001-366）
# %p 本地A.M.或P.M.的等价符
# %U 一年中的星期数（00-53）星期天为星期的开始
# %w 星期（0-6），星期天为星期的开始
# %W 一年中的星期数（00-53）星期一为星期的开始
# %x 本地相应的日期表示
# %X 本地相应的时间表示
# %Z 当前时区的名称
# % %  %号本身 （没有中间的空格）

