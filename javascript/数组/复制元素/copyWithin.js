// 语法

// Array.copyWithin(target, start, end)

// 参数说明

// target 必须 => 复制元素目标下标位置
// start 可选 => 元素复制的起始位置
// end 可选 => 停止复制元素的下标位置(默认array.length) 如果为 负值 表示倒数

// 示例

let arr = [1,2,3,4,5,6,7,8,9,10];

arr.copyWithin(1, 2);

console.log(arr);// [1, 3, 4, 5, 6, 7, 8, 9, 10, 10]

let arr2 = [1,2,3,4,5,6,7,8,9,10];

arr2.copyWithin(1, 4, 8);

console.log(arr2);// [1, 5, 6, 7, 8, 6, 7, 8, 9, 10]

let arr3 = [1,2,3,4,5,6,7,8,9,10];

arr3.copyWithin(1, -2);// [1, 9, 10, 4, 5, 6, 7, 8, 9, 10]
