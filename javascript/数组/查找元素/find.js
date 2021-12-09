// 语法

// Array.find(function(currentValue, index, arr),thisValue)

// 参数

// currentValue 必须 => 当前元素
// index 可选 => 当前元素下标
// arr 可选 => 当前元素所属的数组对象
// thisValue 可选 => 传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值

// 说明

// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
// find() 方法为数组中的每个元素都调用一次函数执行：
//  * 当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数
//  * 如果没有符合条件的元素返回 undefined
// find() 对于空数组，函数是不会执行的。
// find() 并没有改变数组的原始值

// 示例

let arr = [1,2,3,4,5,6,7,8,9,10];

let a = arr.find((item, index) => {
    return item > 9;
})

console.log(a); // 10

let b = arr.find((item, index) => {
    return item > 10;
})

console.log(b); // undefined

// 相同方法 findIndex()  
// 不同地方 find() 再没有满足条件的值 返回 undefined, findIndex() 返回 -1;