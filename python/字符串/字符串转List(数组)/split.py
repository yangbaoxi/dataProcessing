# 通过指定分隔符对字符串进行切片，如果参数 num 有指定值，则仅分隔 num+1 个子字符串

# str.split(str="", num=string.count(str))

# 参数
    # str -- 分隔符，默认为所有的空字符，包括空格、换行(\n)、制表符(\t)等。
    # num -- 分割次数。默认为 -1, 即分隔所有。

string = "this is python"

print(string.split()) # ['this', 'is', 'python']  默认是 空格

string2 = "this,is,python"

print(string2.split(',')) # ['this', 'is', 'python']
