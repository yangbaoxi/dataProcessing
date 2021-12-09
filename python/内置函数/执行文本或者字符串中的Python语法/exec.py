# exec 执行储存在字符串或文件中的 Python 语句

exec("""

people = input('请输入你喜欢的人') 
print(people)

""")

with open('./demo.txt', 'r', encoding="utf-8") as demo:
    content = demo.read()
    # print(content)
    exec(f"""{content}""")
