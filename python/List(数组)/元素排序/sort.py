# 函数用于对原列表进行排序，如果指定参数，则使用比较函数指定的比较函数。

# list.sort( key=None, reverse=False)

# 参数
    # key -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序。
    # reverse -- 排序规则，reverse = True 降序， reverse = False 升序（默认）。

# 返回值 该方法没有返回值，但是会对列表的对象进行排序。

Array = [1, 3, 2, 4 ,7, 6, 5]

Array.sort()

print(Array)

Array.sort(reverse=True)

print(Array) # [7, 6, 5, 4, 3, 2, 1]

# 自定义函数

def sortFun(item):
    print(item)
    return item['id']

Array2 = [{
    "id": 1
},{
    "id": 2
},{
    "id": 4
},{
    "id": 3
}]

Array2.sort(key=sortFun)

print(Array2) # [{'id': 1}, {'id': 2}, {'id': 3}, {'id': 4}]