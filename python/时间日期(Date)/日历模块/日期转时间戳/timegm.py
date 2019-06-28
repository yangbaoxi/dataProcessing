# calendar.timegm(tupletime)

# 和time.gmtime相反：接受一个时间元组形式，返回该时刻的时间戳（1970纪元后经过的浮点秒数）。

import calendar

dateTuple = (2019, 6, 27, 9, 20, 40, 3, 178, 0)

print(calendar.timegm(dateTuple)) # 1561627240