// 语法

// Array.from(object, mapFunction, thisValue)

// 参数说明

// object  必需 => 要转换为数组的对象。
// mapFunction(item, index) 可选 => 数组中每个元素要调用的函数。
    //  item 可选 => 当前元素的值
    //  index 可选 => 元素下标
// thisValue 可选 => 映射函数(mapFunction)中的 this 对象。

// 详情

// from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组
// 如果对象是数组返回 true，否则返回 false。

// 示例

let arr = [1,2,3,4,5];

let arr2 = Array.from(arr);

console.log(arr) // [1,2,3,4,5]
console.log(arr2) // [1,2,3,4,5]

// 过滤条件

let arr3 = Array.from(arr, (item, index) => {
    console.log('当前元素',item);
    console.log('下标',index);
    return item * 2
})

console.log(arr3) // [2,4,6,8,10]
