# 字符串中的 tab 符号('\t')转为空格，tab 符号('\t')默认的空格数是 8。

# str.expandtabs(tabsize=8)

# 参数：
    # tabsize -- 指定转换字符串中的 tab 符号('\t')转为空格的字符数。

# 返回值：该方法返回字符串中的 tab 符号('\t')转为空格后生成的新字符串。

# 示例

str = "my name is \t 杨宝"

print(str) # my name is       杨宝

print(str.expandtabs(4)) # my name is   杨宝
