# splitlines() 按照行('\r', '\r\n', \n')分隔，返回一个包含各行作为元素的列表，
# 如果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。

# str.splitlines([keepends])

# 参数： keepends -- 在输出结果里是否去掉换行符('\r', '\r\n', \n')，默认为 False，不包含换行符，如果为 True，则保留换行符。

# 返回值：返回一个包含各行作为元素的列表。

string = "ab c\n \nde fg \r kl \r \n" 

print(string.splitlines()) # ['ab c', ' ', 'de fg ', ' kl ', ' ']

print(string.splitlines(True)) # ['ab c\n', ' \n', 'de fg \r', ' kl \r', ' \n']