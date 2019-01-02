// 语法

// Array.fill(value, start, end)

// 参数说明

// value 必须 => 填充的值
// start 可选 => 开始填充位置
// end 可选 => 停止填充位置 (默认为 array.length)

// 详情

// * fill() 方法用于将一个固定值替换数组的元素。

// 示例

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.fill(1);

console.log(arr); // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

arr.fill(2, 5, 9); // [1, 1, 1, 1, 1, 2, 2, 2, 2, 1]