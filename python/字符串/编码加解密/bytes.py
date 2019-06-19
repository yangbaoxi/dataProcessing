# 以指定的编码格式解码 bytes 对象。默认编码为 'utf-8'。

# bytes.decode(encoding="utf-8", errors="strict")

# 参数：
    # encoding -- 要使用的编码，如"UTF-8"。
    # errors -- 设置不同错误的处理方案。默认为 'strict',意为编码错误引起一个UnicodeError。 
    # 其他可能得值有 'ignore', 'replace', 'xmlcharrefreplace', 'backslashreplace' 
    # 以及通过 codecs.register_error() 注册的任何值。

# 返回值： 该方法返回解码后的字符串。

# 示例

str = "我爱你"

# 使用编码

str_utf8 = str.encode('UTF-8')

print(str_utf8) # b'\xe6\x88\x91\xe7\x88\xb1\xe4\xbd\xa0'

str_gbk = str.encode('GBK')

print(str_gbk) # b'\xce\xd2\xb0\xae\xc4\xe3'

# 解码

print("utf-8", str_utf8.decode('UTF-8')) # 我爱你

print("GBK", str_gbk.decode('GBK')) # 我爱你

