// 语法

// number.toPrecision(x)

// 参数

// x 必需 => 规定必须被转换为指数计数法的最小位数。该参数是 1 ~ 21 之间（且包括 1 和 21）的值

// 说明

// toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法。
// 四舍五入

// 示例

let num  = 3.1415926;

console.log(num.toPrecision(1));// 3
console.log(num.toPrecision(2));// 3.1
console.log(num.toPrecision(3));// 3.14
console.log(num.toPrecision(4));// 3.142
console.log(num.toPrecision(5));// 3.1416

// number.toFixed(x) 保留小数点后几位