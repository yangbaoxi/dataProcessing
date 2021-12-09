# calendar.monthrange(year,month)

# 返回两个整数。第一个是该月的星期几，第二个是该月有几天。星期几是从0（星期一）到 6（星期日）。

import calendar

print(calendar.monthrange(2019, 6)) # (5, 30)

# (5, 30)解释：5 表示 2019 年 6 月份的第一天是周六，30 表示 2019 年 6 月份总共有 30 天。