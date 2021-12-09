# 方法把字符串中的 old（旧字符串） 替换成 new(新字符串)，如果指定第三个参数max，则替换不超过 max 次

# str.replace(old, new[, max])

# 参数
    # old -- 将被替换的子字符串。
    # new -- 新字符串，用于替换old子字符串。
    # max -- 可选字符串, 替换不超过 max 次

# 返回值：返回字符串中的 old（旧字符串） 替换成 new(新字符串)后生成的新字符串，如果指定第三个参数max，则替换不超过 max 次。

string = "我爱你"

print(string.replace('你', '她'))

