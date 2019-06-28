# 查看本地时间 请查询 date.py

# time.ctime([secs])

# 作用相当于asctime(localtime(secs))，未给参数相当于asctime()

import time

print(time.asctime()) # Fri Jun 28 10:16:27 2019  默认当前时间