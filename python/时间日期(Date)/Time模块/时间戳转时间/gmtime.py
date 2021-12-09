# time.gmtime([secs])

# 接收时间戳（1970纪元后经过的浮点秒数）并返回格林威治天文时间下的时间元组t。注：t.tm_isdst始终为0

import time

print(time.gmtime(1561627240.7862825)) # time.struct_time(tm_year=2019, tm_mon=6, tm_mday=27, tm_hour=9, tm_min=20, tm_sec=40, tm_wday=3, tm_yday=178, tm_isdst=0)

print(time.gmtime(1561687450.0)) # time.struct_time(tm_year=2019, tm_mon=6, tm_mday=28, tm_hour=2, tm_min=4, tm_sec=10, tm_wday=4, tm_yday=179, tm_isdst=0)