# while 循环

# 实例1 计算 1~100总和

num = 1
counter = 0
while num <= 100:
    counter += num
    num += 1

print(counter) # 5050

# 无线循环

while True:
    num = int(input('请输入数字进行无线循环'))
    print('你输入的值:', num)
    if num == 5:
        break

# while + else

count = 0
while count < 5:
   print (count, " 小于 5")
   count = count + 1
else:
   print (count, " 大于或等于 5")


# break 跳出循环（结束循环）
# continue 忽略本次循环