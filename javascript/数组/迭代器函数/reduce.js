// 语法

// Array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// 参数说明

// function(total, currentValue, currentIndex, arr) 必需。用于执行每个数组元素的函数
    // total 必须 => 初始值, 或者计算结束后的返回值
    // currentValue  必须 => 当前元素
    // currentIndex 可选 => 当前元素的索引
    // arr 可选 => 当前元素所属的数组对象
// initialValue 可选 => 传递给函数的初始值

// 详情

// * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
// * reduce() 可以作为一个高阶函数，用于函数的 compose。
// * reduce() 对于空数组是不会执行回调函数的

// 示例

// 数组计算:

let a = [1,2,3,4,5,6,7,8,9];

let result = a.reduce((total, currentValue) => {
    console.log('初始值', total);
    console.log('当前元素', currentValue);

    return total + currentValue;
}, 0);

console.log('最后结果', result) // 45

// 数组对象计算:

let b = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 }
]

let result_two = b.reduce((total, currentValue) => {
    return total + currentValue.num;
}, 0);

console.log('最后结果', result_two) // 26
